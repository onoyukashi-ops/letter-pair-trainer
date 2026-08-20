/**
 * Google Sheet インポーター
 * 50音表形式のGoogle Sheetからレターペアをインポート
 */

class GoogleSheetImporter {
    constructor() {
        this.hiraganaList = ['あ', 'い', 'う', 'え', 'か', 'き', 'く', 'け', 'さ', 'し', 'す', 'せ', 'た', 'ち', 'つ', 'て', 'な', 'に', 'ぬ', 'ね', 'は', 'ひ', 'ふ', 'へ'];
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('importGoogleSheetBtn').addEventListener('click', () => this.importFromGoogleSheet());
    }

    /**
     * Google SheetのURLからSheetIDを抽出
     * @param {string} url - Google Sheet URL
     * @returns {string} Sheet ID
     */
    extractSheetId(url) {
        // パターン1: https://docs.google.com/spreadsheets/d/SHEET_ID/edit
        // パターン2: https://docs.google.com/spreadsheets/d/SHEET_ID
        const match = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
        if (match && match[1]) {
            return match[1];
        }
        throw new Error('無効なGoogle Sheet URLです');
    }

    /**
     * CSV形式のデータをパースして50音表に変換
     * @param {string} csvData - CSV形式のデータ
     * @returns {Array} レターペア配列
     */
    parseCsvData(csvData) {
        const pairs = [];
        const lines = csvData.trim().split('\n');

        if (lines.length < 2) {
            throw new Error('Sheetが空またはデータが不足しています');
        }

        // ヘッダー行を読み込む（1文字目のリスト）
        const headerLine = lines[0].split(',');
        const firstCharList = headerLine.slice(1).map(cell => cell.trim()).filter(cell => cell);

        // データ行を読み込む（2文字目とイメージ）
        for (let i = 1; i < lines.length; i++) {
            const cells = lines[i].split(',');
            const secondChar = cells[0].trim();

            if (!secondChar || !this.hiraganaList.includes(secondChar)) {
                continue; // 無効な行をスキップ
            }

            // 各列のイメージを処理
            for (let j = 1; j < cells.length; j++) {
                const image = cells[j].trim();
                const firstChar = firstCharList[j - 1];

                if (!firstChar || !this.hiraganaList.includes(firstChar)) {
                    continue; // 無効なひらがなをスキップ
                }

                if (image) {
                    // イメージが存在する場合のみペアを追加
                    const hiragana = firstChar + secondChar;
                    pairs.push({
                        hiragana: hiragana,
                        image: image
                    });
                }
            }
        }

        if (pairs.length === 0) {
            throw new Error('有効なペアが見つかりませんでした');
        }

        return pairs;
    }

    /**
     * Google Sheetからデータをインポート
     */
    async importFromGoogleSheet() {
        const urlInput = document.getElementById('googleSheetUrl');
        const url = urlInput.value.trim();
        const progressContainer = document.getElementById('importProgress');
        const resultBox = document.getElementById('importResult');

        if (!url) {
            alert('Google Sheet URLを入力してください');
            return;
        }

        try {
            // 進捗表示を開始
            progressContainer.classList.remove('hidden');
            resultBox.classList.add('hidden');

            // Sheet IDを抽出
            const sheetId = this.extractSheetId(url);

            // CSV形式でデータを取得
            const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;

            const response = await fetch(csvUrl);

            if (!response.ok) {
                throw new Error('Sheetが公開されていないか、アクセスできません');
            }

            const csvData = await response.text();

            // CSV データをパース
            const pairs = this.parseCsvData(csvData);

            // 進捗表示を隠す
            progressContainer.classList.add('hidden');

            // 確認ダイアログを表示
            const confirmed = confirm(
                `${pairs.length}個のペアをインポートします。\n\n` +
                `既存のペアに追加しますか？\n` +
                `（キャンセルでスキップ）`
            );

            if (confirmed) {
                // ペアを追加
                pairs.forEach(pair => {
                    const exists = letterPairs.some(p => p.hiragana === pair.hiragana);
                    if (!exists) {
                        letterPairs.push(pair);
                    }
                });

                // データを保存
                saveData();

                // 結果を表示
                this.showResult(
                    true,
                    `✓ インポート成功！<br>` +
                    `${pairs.length}個のペアをインポートしました<br>` +
                    `登録済みペア数: ${letterPairs.length}個`
                );

                // UIを更新
                displayPairList();
                updateAllStats();

                // 入力欄をクリア
                urlInput.value = '';
            }
        } catch (error) {
            // 進捗表示を隠す
            progressContainer.classList.add('hidden');

            // エラーを表示
            this.showResult(false, `✗ エラーが発生しました<br>${error.message}`);
        }
    }

    /**
     * 結果を表示
     * @param {boolean} success - 成功したかどうか
     * @param {string} message - メッセージ
     */
    showResult(success, message) {
        const resultBox = document.getElementById('importResult');
        resultBox.classList.remove('hidden', 'success', 'error');
        resultBox.classList.add(success ? 'success' : 'error');
        resultBox.innerHTML = `<p>${message}</p>`;

        // 3秒後に自動で隠す
        setTimeout(() => {
            resultBox.classList.add('hidden');
        }, 5000);
    }
}

// ページ読み込み時に初期化
document.addEventListener('DOMContentLoaded', () => {
    new GoogleSheetImporter();
});
