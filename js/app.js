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
    displayTabContent('training');
    newQuestion();
    updateAllStats();
});

// ==================== データ管理 ====================
function loadData() {
    const saved = localStorage.getItem('letterPairData');
    if (saved) {
        letterPairs = JSON.parse(saved);
    } else {
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
    // タブ
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;
            document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(tab).classList.add('active');
            
            if (tab === 'manage') {
                displayPairList();
            } else if (tab === 'stats') {
                displayStats();
            }
        });
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

    // Enterキーで送信
    document.getElementById('answerInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !document.getElementById('resultContainer').classList.contains('hidden')) {
            nextQuestion();
        } else if (e.key === 'Enter') {
            submitAnswer();
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

// ==================== 練習機能 ====================
function newQuestion() {
    if (letterPairs.length === 0) {
        alert('ペアを追加してください');
        return;
    }

    currentQuestion = letterPairs[Math.floor(Math.random() * letterPairs.length)];
    document.getElementById('hiraganaDisplay').textContent = currentQuestion.hiragana;
    document.getElementById('answerInput').value = '';
    document.getElementById('resultContainer').classList.add('hidden');
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
        stats.history.push({
            hiragana: currentQuestion.hiragana,
            answer: userAnswer,
            correct: true,
            timestamp: new Date().getTime()
        });
    } else {
        resultMessage.textContent = '✗ 不正解';
        resultMessage.className = 'result-message incorrect';
        correctAnswer.textContent = `正解: ${currentQuestion.image}`;
        stats.history.push({
            hiragana: currentQuestion.hiragana,
            answer: userAnswer,
            correct: false,
            timestamp: new Date().getTime()
        });
    }

    stats.totalQuestions++;
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
        stats.totalQuestions = 0;
        stats.totalCorrect = 0;
        stats.history = [];
        saveData();
        updateSessionStats();
        updateAllStats();
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

    // 重複チェック
    if (letterPairs.some(p => p.hiragana === hiragana)) {
        alert('このペアは既に存在します');
        return;
    }

    letterPairs.push({ hiragana, image });
    saveData();
    
    document.getElementById('hiraganaInput').value = '';
    document.getElementById('imageInput').value = '';
    document.getElementById('hiraganaInput').focus();
    
    displayPairList();
    updateAllStats();
}

function deletePair(hiragana) {
    if (confirm(`"${hiragana}"を削除しますか？`)) {
        letterPairs = letterPairs.filter(p => p.hiragana !== hiragana);
        saveData();
        displayPairList();
        updateAllStats();
    }
}

function displayPairList() {
    const pairList = document.getElementById('pairList');
    
    if (letterPairs.length === 0) {
        pairList.innerHTML = '<div class="empty-message">ペアがまだ登録されていません</div>';
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
                <button onclick="deletePair('${pair.hiragana}')">削除</button>
            </div>
        `)
        .join('');
}

// ==================== データエクスポート/インポート ====================
function exportData() {
    const data = {
        pairs: letterPairs,
        stats: stats
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
                alert('データをインポートしました');
            } else {
                alert('不正なファイル形式です');
            }
        } catch (error) {
            alert('ファイルの読み込みに失敗しました: ' + error.message);
        }
    };
    reader.readAsText(file);
    
    // リセット
    event.target.value = '';
}

function resetToDefault() {
    if (confirm('デフォルトデータにリセットしますか？ 現在のデータは失われます。')) {
        letterPairs = JSON.parse(JSON.stringify(DEFAULT_LETTER_PAIRS));
        saveData();
        displayPairList();
        updateAllStats();
        alert('デフォルトデータにリセットしました');
    }
}

// ==================== タブ表示 ====================
function displayTabContent(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');

    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => {
        if (btn.dataset.tab === tabName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
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
        historyList.innerHTML = '<div class="empty-message">まだ履歴がありません</div>';
        return;
    }

    // 最新50件を表示
    const recentHistory = stats.history.slice(-50).reverse();
    historyList.innerHTML = recentHistory
        .map((item, index) => `
            <div class="history-item ${item.correct ? 'correct' : 'incorrect'}">
                <strong>${item.hiragana}</strong> - 
                ${item.correct ? '✓' : '✗'} 
                ${item.correct ? '正解' : ('「' + item.answer + '」は不正解')}
            </div>
        `)
        .join('');
}

function updateAllStats() {
    document.getElementById('totalPairs').textContent = letterPairs.length;
    updateSessionStats();
}
