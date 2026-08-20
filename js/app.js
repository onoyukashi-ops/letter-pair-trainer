// ==================== デフォルトデータ ====================
const DEFAULT_LETTER_PAIRS = [
    { hiragana: 'あか', image: '赤いリンゴ' },
    { hiragana: 'あき', image: '秋の紅葉' },
    { hiragana: 'あく', image: '空' },
    { hiragana: 'あけ', image: 'ケーキ' },
    { hiragana: 'あさ', image: '朝日' },
    { hiragana: 'あし', image: '足' },
    { hiragana: 'あす', image: '明日' },
    { hiragana: 'あせ', image: '汗' },
    { hiragana: 'あた', image: '頭' },
    { hiragana: 'あち', image: '熱い' },
    { hiragana: 'あつ', image: '厚い' },
    { hiragana: 'あて', image: '当てる' },
    { hiragana: 'あな', image: '穴' },
    { hiragana: 'あに', image: '兄' },
    { hiragana: 'あぬ', image: '犬' },
    { hiragana: 'あね', image: '姉' },
    { hiragana: 'あは', image: 'ハハハ' },
    { hiragana: 'あひ', image: 'アヒル' },
    { hiragana: 'あふ', image: '浮く' },
    { hiragana: 'あへ', image: 'へらへら' },
    { hiragana: 'いか', image: 'イカ' },
    { hiragana: 'いき', image: '息' },
    { hiragana: 'いく', image: '行く' },
    { hiragana: 'いけ', image: '池' },
    { hiragana: 'いさ', image: '勇敢' },
    { hiragana: 'いし', image: '石' },
    { hiragana: 'いす', image: '椅子' },
    { hiragana: 'いせ', image: '伊勢' },
    { hiragana: 'いた', image: 'イタリア' },
    { hiragana: 'いち', image: '一' },
    { hiragana: 'いつ', image: 'いつ' },
    { hiragana: 'いて', image: 'いて座' },
    { hiragana: 'いな', image: 'イナバウアー' },
    { hiragana: 'いに', image: '兄ねえ' },
    { hiragana: 'いぬ', image: '犬' },
    { hiragana: 'いね', image: '稲' },
    { hiragana: 'いは', image: 'いはいはい' },
    { hiragana: 'いひ', image: 'いひいひ' },
    { hiragana: 'いふ', image: '歩く' },
    { hiragana: 'いへ', image: '家' },
    { hiragana: 'うか', image: 'うかうか' },
    { hiragana: 'うき', image: 'ウキウキ' },
    { hiragana: 'うく', image: '浮く' },
    { hiragana: 'うけ', image: '受ける' },
    { hiragana: 'うさ', image: 'ウサギ' },
    { hiragana: 'うし', image: '牛' },
    { hiragana: 'うす', image: '薄い' },
    { hiragana: 'うせ', image: '詐欺' },
    { hiragana: 'うた', image: '唄' },
    { hiragana: 'うち', image: '家' },
    { hiragana: 'うつ', image: 'うつ病' },
    { hiragana: 'うて', image: 'うて' },
    { hiragana: 'うな', image: 'うなぎ' },
    { hiragana: 'うに', image: 'ウニ' },
    { hiragana: 'うぬ', image: 'うぬぼれ' },
    { hiragana: 'うね', image: '畝' },
    { hiragana: 'うは', image: 'うはうは' },
    { hiragana: 'うひ', image: 'ひいひい' },
    { hiragana: 'うふ', image: 'ふふふ' },
    { hiragana: 'うへ', image: 'へへへ' },
    { hiragana: 'えか', image: '絵具' },
    { hiragana: 'えき', image: '駅' },
    { hiragana: 'えく', image: 'えく' },
    { hiragana: 'えけ', image: 'えけ' },
    { hiragana: 'えさ', image: 'エサ' },
    { hiragana: 'えし', image: 'えし' },
    { hiragana: 'えす', image: 'えす' },
    { hiragana: 'えせ', image: 'えせ医者' },
    { hiragana: 'えた', image: 'えた' },
    { hiragana: 'えち', image: 'えち' },
    { hiragana: 'えつ', image: 'えつ' },
    { hiragana: 'えて', image: 'えて' },
    { hiragana: 'えな', image: 'えな' },
    { hiragana: 'えに', image: 'えにし' },
    { hiragana: 'えぬ', image: 'えぬ' },
    { hiragana: 'えね', image: 'えね' },
    { hiragana: 'えは', image: 'えはえは' },
    { hiragana: 'えひ', image: 'えひ' },
    { hiragana: 'えふ', image: 'えふ' },
    { hiragana: 'えへ', image: 'へへへ' },
    { hiragana: 'かあ', image: 'お母さん' },
    { hiragana: 'かい', image: '貝' },
    { hiragana: 'かう', image: '買う' },
    { hiragana: 'かえ', image: 'カエル' },
    { hiragana: 'かか', image: 'お母さん' },
    { hiragana: 'かき', image: '柿' },
    { hiragana: 'かく', image: '描く' },
    { hiragana: 'かけ', image: 'かける' },
    { hiragana: 'かさ', image: '傘' },
    { hiragana: 'かし', image: 'お菓子' },
    { hiragana: 'かす', image: 'かす' },
    { hiragana: 'かせ', image: 'かせ' },
    { hiragana: 'かた', image: '肩' },
    { hiragana: 'かち', image: 'カチカチ' },
    { hiragana: 'かつ', image: 'かつ' },
    { hiragana: 'かて', image: 'かて' },
    { hiragana: 'かな', image: 'かな' },
    { hiragana: 'かに', image: 'カニ' },
    { hiragana: 'かぬ', image: 'かぬ' },
    { hiragana: 'かね', image: 'お金' },
    { hiragana: 'かは', image: 'かわ' },
    { hiragana: 'かひ', image: 'かひ' },
    { hiragana: 'かふ', image: 'かふ' },
    { hiragana: 'かへ', image: 'かへ' }
];

// ==================== グローバル状態 ====================
let letterPairs = [];
let currentQuestion = null;
let stats = {
    totalQuestions: 0,
    totalCorrect: 0,
    sessionCorrect: 0,
    sessionQuestions: 0,
    history: []
};

// ==================== 初期化 ====================
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    setupEventListeners();
    newQuestion();
    updateAllStats();
});

// ==================== ストレージ管理 ====================
function loadData() {
    const saved = localStorage.getItem('letterPairData');
    if (saved) {
        letterPairs = JSON.parse(saved);
    } else {
        // デフォルトデータを使用
        letterPairs = JSON.parse(JSON.stringify(DEFAULT_LETTER_PAIRS));
        saveData();
    }

    const savedStats = localStorage.getItem('letterPairStats');
    if (savedStats) {
        stats = JSON.parse(savedStats);
    }
}

function saveData() {
    localStorage.setItem('letterPairData', JSON.stringify(letterPairs));
    localStorage.setItem('letterPairStats', JSON.stringify(stats));
}

// ==================== イベントリスナー ====================
function setupEventListeners() {
    // タブボタン
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', handleTabClick);
    });

    // 練習タブ
    document.getElementById('submitBtn').addEventListener('click', submitAnswer);
    document.getElementById('skipBtn').addEventListener('click', skipQuestion);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('resetBtn').addEventListener('click', resetSession);

    // 管理タブ
    document.getElementById('addPairBtn').addEventListener('click', addNewPair);
    document.getElementById('exportBtn').addEventListener('click', exportData);
    document.getElementById('importBtn').addEventListener('click', () => {
        document.getElementById('importFile').click();
    });
    document.getElementById('importFile').addEventListener('change', importData);
    document.getElementById('resetDataBtn').addEventListener('click', resetToDefault);
    document.getElementById('importGoogleSheetBtn').addEventListener('click', importFromGoogleSheet);

    // 入力欄のキーイベント
    document.getElementById('answerInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            if (!document.getElementById('resultContainer').classList.contains('hidden')) {
                nextQuestion();
            } else {
                submitAnswer();
            }
        }
    });

    document.getElementById('hiraganaInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('imageInput').focus();
        }
    });

    document.getElementById('imageInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addNewPair();
        }
    });
}

// ==================== タブ処理 ====================
function handleTabClick(event) {
    const tabName = event.target.dataset.tab;
    
    // すべてのタブとコンテンツをリセット
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // 選択されたタブをアクティブに
    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');
    
    // タブ固有の初期化
    if (tabName === 'manage') {
        displayPairList();
    } else if (tabName === 'stats') {
        displayStats();
    }
}

// ==================== 練習機能 ====================
function newQuestion() {
    // ペアがない場合はデフォルトをロード
    if (letterPairs.length === 0) {
        letterPairs = JSON.parse(JSON.stringify(DEFAULT_LETTER_PAIRS));
        saveData();
    }

    currentQuestion = letterPairs[Math.floor(Math.random() * letterPairs.length)];
    document.getElementById('hiraganaDisplay').textContent = currentQuestion.hiragana;
    document.getElementById('answerInput').value = '';
    document.getElementById('resultContainer').classList.add('hidden');
    document.getElementById('correctAnswer').textContent = '';
    document.getElementById('answerInput').focus();
    
    stats.sessionQuestions++;
    updateSessionStats();
}

function submitAnswer() {
    const userAnswer = document.getElementById('answerInput').value.trim();
    
    if (!userAnswer) {
        alert('答えを入力してください');
        return;
    }

    const resultContainer = document.getElementById('resultContainer');
    const resultMessage = document.getElementById('resultMessage');
    const correctAnswer = document.getElementById('correctAnswer');
    
    // 完全一致チェック
    const isCorrect = userAnswer === currentQuestion.image;
    
    if (isCorrect) {
        resultMessage.textContent = '✓ 正解！';
        resultMessage.className = 'result-message correct';
        stats.totalCorrect++;
        stats.sessionCorrect++;
    } else {
        resultMessage.textContent = '✗ 不正解';
        resultMessage.className = 'result-message incorrect';
        correctAnswer.textContent = `正解: ${currentQuestion.image}`;
    }

    stats.totalQuestions++;
    stats.history.push({
        hiragana: currentQuestion.hiragana,
        answer: userAnswer,
        correct: isCorrect,
        timestamp: new Date().getTime()
    });

    resultContainer.classList.remove('hidden');
    saveData();
    updateSessionStats();
}

function skipQuestion() {
    stats.totalQuestions++;
    stats.sessionQuestions++;
    stats.history.push({
        hiragana: currentQuestion.hiragana,
        answer: 'スキップ',
        correct: false,
        timestamp: new Date().getTime()
    });
    saveData();
    updateSessionStats();
    nextQuestion();
}

function nextQuestion() {
    newQuestion();
}

function resetSession() {
    if (confirm('セッションをリセットしますか？')) {
        stats.sessionCorrect = 0;
        stats.sessionQuestions = 0;
        saveData();
        updateSessionStats();
        newQuestion();
    }
}

function updateSessionStats() {
    document.getElementById('correctCount').textContent = stats.sessionCorrect;
    document.getElementById('questionCount').textContent = stats.sessionQuestions;
    
    const accuracy = stats.sessionQuestions > 0 
        ? Math.round((stats.sessionCorrect / stats.sessionQuestions) * 100)
        : 0;
    document.getElementById('accuracy').textContent = accuracy + '%';
}

// ==================== ペア管理 ====================
function addNewPair() {
    const hiragana = document.getElementById('hiraganaInput').value.trim();
    const image = document.getElementById('imageInput').value.trim();

    if (!hiragana || !image) {
        alert('ひらがなとイメージの両方を入力してください');
        return;
    }

    if (hiragana.length !== 2) {
        alert('ひらがなは2文字である必要があります');
        return;
    }

    // 既存のペアがあるかチェック
    const existingIndex = letterPairs.findIndex(p => p.hiragana === hiragana);
    
    if (existingIndex !== -1) {
        // 既存のペアを上書き
        if (confirm(`「${hiragana}」は既に登録されています。\n上書きしますか？\n\n現在: ${letterPairs[existingIndex].image}\n新規: ${image}`)) {
            letterPairs[existingIndex].image = image;
            saveData();
            
            document.getElementById('hiraganaInput').value = '';
            document.getElementById('imageInput').value = '';
            document.getElementById('hiraganaInput').focus();
            
            displayPairList();
            updateAllStats();
            alert('ペアを上書きしました！');
        }
    } else {
        // 新しいペアを追加
        letterPairs.push({ hiragana, image });
        saveData();
        
        document.getElementById('hiraganaInput').value = '';
        document.getElementById('imageInput').value = '';
        document.getElementById('hiraganaInput').focus();
        
        displayPairList();
        updateAllStats();
        alert('ペアを追加しました！');
    }
}

function deletePair(hiragana) {
    if (confirm(`「${hiragana}」を削除しますか？`)) {
        letterPairs = letterPairs.filter(p => p.hiragana !== hiragana);
        saveData();
        displayPairList();
        updateAllStats();
    }
}

function displayPairList() {
    const pairList = document.getElementById('pairList');
    
    if (letterPairs.length === 0) {
        pairList.innerHTML = '<div class="empty-message">ペアがありません</div>';
        return;
    }

    pairList.innerHTML = letterPairs
        .sort((a, b) => a.hiragana.localeCompare(b.hiragana))
        .map(pair => `
            <div class="pair-item">
                <div class="pair-info">
                    <div class="pair-hiragana">${pair.hiragana}</div>
                    <div class="pair-image">${pair.image}</div>
                </div>
                <button onclick="deletePair('${pair.hiragana}')" class="btn-delete">削除</button>
            </div>
        `)
        .join('');
}

// ==================== データ操作 ====================
function exportData() {
    const data = {
        pairs: letterPairs,
        stats: stats,
        exportedAt: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `letter-pair-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    alert('データをエクスポートしました！');
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.pairs && Array.isArray(data.pairs)) {
                letterPairs = data.pairs;
                if (data.stats) {
                    stats = data.stats;
                }
                saveData();
                displayPairList();
                updateAllStats();
                alert('データをインポートしました！');
            } else {
                alert('不正なファイル形式です');
            }
        } catch (error) {
            alert('エラー: ' + error.message);
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function resetToDefault() {
    if (confirm('デフォルトデータにリセットしますか？\n現在のデータは失われます。')) {
        letterPairs = JSON.parse(JSON.stringify(DEFAULT_LETTER_PAIRS));
        saveData();
        displayPairList();
        updateAllStats();
        alert('デフォルトにリセットしました！');
    }
}

// ==================== Google Sheet インポート ====================
function importFromGoogleSheet() {
    const url = document.getElementById('googleSheetUrl').value.trim();
    
    if (!url) {
        alert('Google Sheet URL を入力してください');
        return;
    }

    try {
        // Sheet ID を抽出
        const sheetIdMatch = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
        if (!sheetIdMatch) {
            alert('無効な Google Sheet URL です');
            return;
        }

        const sheetId = sheetIdMatch[1];
        const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;

        showProgress(true);

        fetch(csvUrl)
            .then(response => {
                if (!response.ok) throw new Error('Sheet にアクセスできません');
                return response.text();
            })
            .then(csvData => {
                const pairs = parseGoogleSheetData(csvData);
                
                if (pairs.length === 0) {
                    throw new Error('有効なペアが見つかりませんでした');
                }

                showProgress(false);
                
                const message = `${pairs.length}個のペアをインポートします。\n既存のペアに追加しますか？`;
                if (confirm(message)) {
                    pairs.forEach(pair => {
                        // 既存のペアがあれば上書き、なければ追加
                        const existingIndex = letterPairs.findIndex(p => p.hiragana === pair.hiragana);
                        if (existingIndex !== -1) {
                            letterPairs[existingIndex] = pair;
                        } else {
                            letterPairs.push(pair);
                        }
                    });
                    saveData();
                    displayPairList();
                    updateAllStats();
                    document.getElementById('googleSheetUrl').value = '';
                    showResult(true, `✓ ${pairs.length}個のペアをインポートしました！`);
                }
            })
            .catch(error => {
                showProgress(false);
                showResult(false, `✗ エラー: ${error.message}`);
            });
    } catch (error) {
        alert('エラー: ' + error.message);
    }
}

function parseGoogleSheetData(csvData) {
    const lines = csvData.trim().split('\n');
    const pairs = [];
    const hiraganaList = ['あ', 'い', 'う', 'え', 'か', 'き', 'く', 'け', 'さ', 'し', 'す', 'せ', 'た', 'ち', 'つ', 'て', 'な', 'に', 'ぬ', 'ね', 'は', 'ひ', 'ふ', 'へ'];

    if (lines.length < 2) return pairs;

    // ヘッダー行を解析
    const headerLine = lines[0].split(',');
    const firstCharList = headerLine.slice(1).map(cell => cell.trim()).filter(cell => cell);

    // データ行を解析
    for (let i = 1; i < lines.length; i++) {
        const cells = lines[i].split(',');
        const secondChar = cells[0].trim();

        if (!hiraganaList.includes(secondChar)) continue;

        for (let j = 1; j < cells.length; j++) {
            const image = cells[j].trim();
            const firstChar = firstCharList[j - 1];

            if (!firstChar || !hiraganaList.includes(firstChar) || !image) continue;

            const hiragana = firstChar + secondChar;
            if (!pairs.some(p => p.hiragana === hiragana)) {
                pairs.push({ hiragana, image });
            }
        }
    }

    return pairs;
}

function showProgress(show) {
    const progressContainer = document.getElementById('importProgress');
    if (show) {
        progressContainer.classList.remove('hidden');
    } else {
        progressContainer.classList.add('hidden');
    }
}

function showResult(success, message) {
    const resultBox = document.getElementById('importResult');
    resultBox.classList.remove('hidden', 'success', 'error');
    resultBox.classList.add(success ? 'success' : 'error');
    resultBox.innerHTML = `<p>${message}</p>`;

    setTimeout(() => {
        resultBox.classList.add('hidden');
    }, 5000);
}

// ==================== 統計表示 ====================
function displayStats() {
    document.getElementById('totalQuestions').textContent = stats.totalQuestions;
    document.getElementById('totalCorrect').textContent = stats.totalCorrect;
    
    const accuracy = stats.totalQuestions > 0
        ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100)
        : 0;
    document.getElementById('totalAccuracy').textContent = accuracy + '%';
    document.getElementById('totalPairs').textContent = letterPairs.length;
    
    displayHistory();
}

function displayHistory() {
    const historyList = document.getElementById('historyList');
    
    if (stats.history.length === 0) {
        historyList.innerHTML = '<div class="empty-message">履歴がありません</div>';
        return;
    }

    const recentHistory = stats.history.slice(-50).reverse();
    historyList.innerHTML = recentHistory
        .map(item => `
            <div class="history-item ${item.correct ? 'correct' : 'incorrect'}">
                <strong>${item.hiragana}</strong> - 
                ${item.correct ? '✓ 正解' : ('✗ 「' + item.answer + '」は不正解')}
            </div>
        `)
        .join('');
}

function updateAllStats() {
    document.getElementById('totalPairs').textContent = letterPairs.length;
    updateSessionStats();
}
