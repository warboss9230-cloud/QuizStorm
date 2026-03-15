/* QuizStorm ⚡ — Main Script */
'use strict';

// ===== CONSTANTS =====
const SUBJECTS = [
  { id: 'math',     name: 'Math',     icon: '🧮', file: 'math.json' },
  { id: 'science',  name: 'Science',  icon: '🔬', file: 'science.json' },
  { id: 'english',  name: 'English',  icon: '📖', file: 'english.json' },
  { id: 'hindi',    name: 'Hindi',    icon: '🕉️', file: 'hindi.json' },
  { id: 'computer', name: 'Computer', icon: '💻', file: 'computer.json' },
  { id: 'evs',      name: 'EVS',      icon: '🌿', file: 'evs.json' },
  { id: 'gk',       name: 'GK',       icon: '🌍', file: 'gk.json' },
  { id: 'economics',name: 'Econ',     icon: '📊', file: 'economics.json' },
  { id: 'space',    name: 'Space',    icon: '🚀', file: 'space.json' },
  { id: 'animals',  name: 'Animals',  icon: '🦁', file: 'animals.json' },
];

const AVATARS = ['🦊','🐺','🦁','🐯','🐻','🐼','🐨','🦄','🐸','🐵','🦋','🐉','🦅','🦋','🌟','⚡','🔥','💎','🌈','🎯'];

const BADGES = [
  { id: 'first_steps',    name: 'First Steps',     icon: '👶', desc: 'Complete your first quiz' },
  { id: 'on_fire',        name: 'On Fire',          icon: '🔥', desc: 'Streak of 3' },
  { id: 'lightning_bolt', name: 'Lightning Bolt',   icon: '⚡', desc: 'Streak of 5' },
  { id: 'unstoppable',    name: 'Unstoppable',      icon: '🚀', desc: 'Streak of 10' },
  { id: 'century_club',   name: 'Century Club',     icon: '💯', desc: 'Earn 100 XP' },
  { id: 'xp_rocket',      name: 'XP Rocket',        icon: '🛸', desc: 'Earn 500 XP' },
  { id: 'xp_king',        name: 'XP King',          icon: '👑', desc: 'Earn 1000 XP' },
  { id: 'perfectionist',  name: 'Perfectionist',    icon: '💎', desc: '100% score in a quiz' },
  { id: 'sharp_shooter',  name: 'Sharp Shooter',    icon: '🎯', desc: '80%+ score in a quiz' },
  { id: 'daily_warrior',  name: 'Daily Warrior',    icon: '🗡️', desc: 'Complete daily challenge' },
  { id: 'weekly_legend',  name: 'Weekly Legend',    icon: '🏆', desc: 'Play 7 days in a row' },
  { id: 'game_addict',    name: 'Game Addict',      icon: '🎮', desc: 'Play 5 games' },
  { id: 'quiz_arena',     name: 'Quiz Arena',       icon: '🏟️', desc: 'Play 20 games' },
  { id: 'survivor',       name: 'Survivor',         icon: '❤️', desc: 'Finish challenge with 2+ lives' },
  { id: 'polyglot',       name: 'Polyglot',         icon: '🌐', desc: 'Use 3 languages' },
];

const I18N = {
  en: {
    start: 'START QUIZ', addPlayer: '+ Add Player', twoPlayer: '⚔️ 2 Player',
    leaderboard: 'Leaderboard', dashboard: 'Dashboard', badges: 'Badges', daily: 'Daily',
    selectClass: 'Select Class', selectSubject: 'Select Subject', selectMode: 'Select Mode',
    freePlay: 'Free Play', timerMode: 'Timer Mode', levelMode: 'Level Mode', challenge: 'Challenge',
    freeDesc: 'No time limit. Relax and learn!', timerDesc: '30s per question. Think fast!',
    levelDesc: 'Filter by difficulty level', challengeDesc: '3 lives. Don\'t mess up!',
    question: 'Question', hint: '💡 Hint (-3 XP)', next: 'Next →',
    correct: 'Correct!', wrong: 'Wrong!', timeUp: 'Time\'s up!',
    results: 'Results', playAgain: 'Play Again', home: 'Home',
    streak: 'Streak', xp: 'XP', badges: 'Badges', games: 'Games',
    yourName: 'Your name...', enterName: 'Enter name',
    mixQuiz: 'MIX QUIZ', mixDesc: 'Combine multiple subjects!',
    selectSubjects: 'Select subjects:', questions: 'Questions:',
    startMix: 'Start Mix Quiz',
    gradeA: '🏆 Outstanding!', gradeB: '⭐ Great Job!', gradeC: '👍 Good Work!', gradeD: '📚 Keep Practicing!',
    dailyChallenge: 'Daily Challenge', bonusXP: '+50 Bonus XP',
    alreadyDone: "You've already done today's challenge! Come back tomorrow.",
    startChallenge: 'Start Challenge',
    levelSelect: 'Select Level:', startLevel: 'Start Level Quiz',
    newBadge: '🎉 New Badge Earned!', totalXP: 'Total XP',
    vs: 'VS', player1Turn: "'s Turn", winnerIs: '🏆 Winner: ', tieGame: "🤝 It's a Tie!",
    switchTurn: "Get Ready!", switchDesc: "Pass the device to", ready: "I'm Ready!",
    noQuestions: 'No questions found for this selection.',
    recentHistory: 'Recent History', subjectPerf: 'Subject Performance', overallStats: 'Overall Stats',
    totalGames: 'Total Games', bestStreak: 'Best Streak', avgScore: 'Avg Score',
    top10: 'Top 10 Players',
  },
  hi: {
    start: 'क्विज़ शुरू करें', addPlayer: '+ खिलाड़ी जोड़ें', twoPlayer: '⚔️ 2 खिलाड़ी',
    leaderboard: 'लीडरबोर्ड', dashboard: 'डैशबोर्ड', badges: 'बैज', daily: 'दैनिक',
    selectClass: 'कक्षा चुनें', selectSubject: 'विषय चुनें', selectMode: 'मोड चुनें',
    freePlay: 'फ्री प्ले', timerMode: 'टाइमर मोड', levelMode: 'लेवल मोड', challenge: 'चैलेंज',
    freeDesc: 'कोई समय सीमा नहीं।', timerDesc: '30 सेकंड प्रति प्रश्न!',
    levelDesc: 'कठिनाई स्तर से फ़िल्टर', challengeDesc: '3 जीवन। ध्यान से!',
    question: 'प्रश्न', hint: '💡 संकेत (-3 XP)', next: 'अगला →',
    correct: 'सही!', wrong: 'गलत!', timeUp: 'समय समाप्त!',
    results: 'परिणाम', playAgain: 'फिर खेलें', home: 'होम',
    streak: 'स्ट्रीक', xp: 'XP', badges: 'बैज', games: 'खेल',
    yourName: 'आपका नाम...', enterName: 'नाम दर्ज करें',
    mixQuiz: 'मिक्स क्विज़', mixDesc: 'कई विषय मिलाएं!',
    selectSubjects: 'विषय चुनें:', questions: 'प्रश्न:',
    startMix: 'मिक्स क्विज़ शुरू करें',
    gradeA: '🏆 शानदार!', gradeB: '⭐ बढ़िया!', gradeC: '👍 अच्छा काम!', gradeD: '📚 अभ्यास जारी रखें!',
    dailyChallenge: 'दैनिक चुनौती', bonusXP: '+50 बोनस XP',
    alreadyDone: 'आप आज की चुनौती पूरी कर चुके हैं! कल वापस आएं।',
    startChallenge: 'चुनौती शुरू करें',
    levelSelect: 'स्तर चुनें:', startLevel: 'स्तर क्विज़ शुरू करें',
    newBadge: '🎉 नया बैज मिला!', totalXP: 'कुल XP',
    vs: 'बनाम', player1Turn: " की बारी", winnerIs: '🏆 विजेता: ', tieGame: "🤝 बराबरी!",
    switchTurn: "तैयार हो जाओ!", switchDesc: "डिवाइस पास करें", ready: "मैं तैयार हूं!",
    noQuestions: 'इस चयन के लिए कोई प्रश्न नहीं मिला।',
    recentHistory: 'हाल का इतिहास', subjectPerf: 'विषय प्रदर्शन', overallStats: 'समग्र आँकड़े',
    totalGames: 'कुल खेल', bestStreak: 'सर्वश्रेष्ठ स्ट्रीक', avgScore: 'औसत स्कोर',
    top10: 'शीर्ष 10 खिलाड़ी',
  },
  mr: {
    start: 'क्विझ सुरू करा', addPlayer: '+ खेळाडू जोडा', twoPlayer: '⚔️ 2 खेळाडू',
    leaderboard: 'लीडरबोर्ड', dashboard: 'डॅशबोर्ड', badges: 'बॅज', daily: 'दैनिक',
    selectClass: 'वर्ग निवडा', selectSubject: 'विषय निवडा', selectMode: 'मोड निवडा',
    freePlay: 'फ्री प्ले', timerMode: 'टायमर मोड', levelMode: 'लेव्हल मोड', challenge: 'आव्हान',
    freeDesc: 'वेळ मर्यादा नाही.', timerDesc: 'प्रति प्रश्न 30 सेकंद!',
    levelDesc: 'अडचणीनुसार फिल्टर', challengeDesc: '3 जीव. काळजी घ्या!',
    question: 'प्रश्न', hint: '💡 संकेत (-3 XP)', next: 'पुढे →',
    correct: 'बरोबर!', wrong: 'चूक!', timeUp: 'वेळ संपला!',
    results: 'निकाल', playAgain: 'पुन्हा खेळा', home: 'होम',
    streak: 'स्ट्रीक', xp: 'XP', badges: 'बॅज', games: 'खेळ',
    yourName: 'तुमचे नाव...', enterName: 'नाव टाका',
    mixQuiz: 'मिक्स क्विझ', mixDesc: 'अनेक विषय एकत्र करा!',
    selectSubjects: 'विषय निवडा:', questions: 'प्रश्न:',
    startMix: 'मिक्स क्विझ सुरू करा',
    gradeA: '🏆 अप्रतिम!', gradeB: '⭐ छान!', gradeC: '👍 चांगले काम!', gradeD: '📚 सराव सुरू ठेवा!',
    dailyChallenge: 'दैनिक आव्हान', bonusXP: '+50 बोनस XP',
    alreadyDone: 'आजचे आव्हान पूर्ण केले! उद्या परत या.',
    startChallenge: 'आव्हान सुरू करा',
    levelSelect: 'स्तर निवडा:', startLevel: 'स्तर क्विझ सुरू करा',
    newBadge: '🎉 नवीन बॅज मिळाला!', totalXP: 'एकूण XP',
    vs: 'विरुद्ध', player1Turn: " ची वेळ", winnerIs: '🏆 विजेता: ', tieGame: "🤝 बरोबरी!",
    switchTurn: "तयार व्हा!", switchDesc: "डिव्हाइस द्या", ready: "मी तयार आहे!",
    noQuestions: 'या निवडीसाठी प्रश्न आढळले नाहीत.',
    recentHistory: 'अलीकडील इतिहास', subjectPerf: 'विषय कामगिरी', overallStats: 'एकूण आकडेवारी',
    totalGames: 'एकूण खेळ', bestStreak: 'सर्वोत्तम स्ट्रीक', avgScore: 'सरासरी स्कोअर',
    top10: 'शीर्ष 10 खेळाडू',
  }
};

// ===== STATE =====
let state = {
  lang: 'en',
  theme: 'dark',
  profiles: [],
  activeProfileIdx: 0,
  leaderboard: [],
  selectedClass: null,
  selectedSubject: null,
  selectedSubjects: [],
  gameMode: 'free',
  selectedLevel: null,
  questions: [],
  currentQ: 0,
  score: 0,
  xpEarned: 0,
  streak: 0,
  lives: 3,
  hintUsed: false,
  timerInterval: null,
  timerSecs: 30,
  isMixQuiz: false,
  mixCount: 10,
  is2Player: false,
  p2Profiles: [],
  currentPlayer: 0,
  playerScores: [0, 0],
  playerXP: [0, 0],
  playerStreaks: [0, 0],
  langHistory: new Set(),
  quizHistory: [],
};

function t(key) { return (I18N[state.lang] || I18N.en)[key] || key; }

// ===== STORAGE =====
function saveProfiles() { localStorage.setItem('qs_profiles_v2', JSON.stringify(state.profiles)); }
function loadProfiles() {
  try { state.profiles = JSON.parse(localStorage.getItem('qs_profiles_v2')) || []; }
  catch(e) { state.profiles = []; }
}
function saveLeaderboard() { localStorage.setItem('qs_lb_v2', JSON.stringify(state.leaderboard)); }
function loadLeaderboard() {
  try { state.leaderboard = JSON.parse(localStorage.getItem('qs_lb_v2')) || []; }
  catch(e) { state.leaderboard = []; }
}
function getActiveProfile() { return state.profiles[state.activeProfileIdx] || null; }
function saveActiveIdx() { localStorage.setItem('qs_active_profile', state.activeProfileIdx); }
function saveLang() { localStorage.setItem('qs_lang', state.lang); }
function saveLangHistory() { localStorage.setItem('qs_lang_hist', JSON.stringify([...state.langHistory])); }
function loadLangHistory() {
  try { state.langHistory = new Set(JSON.parse(localStorage.getItem('qs_lang_hist')) || []); }
  catch(e) { state.langHistory = new Set(); }
}
function loadQuizHistory() {
  try { state.quizHistory = JSON.parse(localStorage.getItem('qs_history')) || []; }
  catch(e) { state.quizHistory = []; }
}
function saveQuizHistory() { localStorage.setItem('qs_history', JSON.stringify(state.quizHistory.slice(-50))); }

// ===== CANVAS BG =====
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const emojis = ['⚡','🌟','🎯','🔥','💫','✨','🎮','📚','🏆'];
  const particles = Array.from({length: 25}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
    size: 12 + Math.random() * 18,
    speedX: (Math.random() - 0.5) * 0.4,
    speedY: -0.2 - Math.random() * 0.3,
    opacity: 0.1 + Math.random() * 0.25,
  }));
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.globalAlpha = p.opacity;
      ctx.font = `${p.size}px serif`;
      ctx.fillText(p.emoji, p.x, p.y);
      p.x += p.speedX; p.y += p.speedY;
      if (p.y < -30) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
      if (p.x < -30) p.x = canvas.width + 10;
      if (p.x > canvas.width + 30) p.x = -10;
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ===== SCREEN NAV =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const scr = document.getElementById(id);
  if (scr) { scr.classList.add('active'); scr.scrollTop = 0; }
}

// ===== DATETIME =====
function updateDatetime() {
  const el = document.getElementById('datetime');
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleString(state.lang === 'hi' ? 'hi-IN' : state.lang === 'mr' ? 'mr-IN' : 'en-IN', {
    weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
  });
}

// ===== SOUND =====
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
  }
  return audioCtx;
}
function playBeep(freq, duration, type = 'sine', gain = 0.3) {
  const ctx = getAudioCtx();
  if (!ctx) return;
  try {
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    osc.connect(gainNode); gainNode.connect(ctx.destination);
    osc.type = type; osc.frequency.value = freq;
    gainNode.gain.setValueAtTime(gain, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start(); osc.stop(ctx.currentTime + duration);
  } catch(e) {}
}
function soundCorrect() { playBeep(880, 0.15, 'sine'); setTimeout(() => playBeep(1100, 0.2, 'sine'), 120); }
function soundWrong()   { playBeep(200, 0.3, 'sawtooth', 0.2); }
function soundBadge()   { [523,659,784,1047].forEach((f,i) => setTimeout(() => playBeep(f, 0.2), i*100)); }
function soundTick()    { playBeep(440, 0.05, 'square', 0.1); }

// ===== HOME SCREEN =====
function renderHome() {
  showScreen('screen-home');
  updateDatetime();
  renderLangBtns();
  renderAvatarGrid();
  renderPlayersChips();
  renderHomeStats();
  renderTopIcons();
  updateHomeI18n();
}

function renderTopIcons() {
  document.getElementById('btn-lb').title = t('leaderboard');
  document.getElementById('btn-dash').title = t('dashboard');
  document.getElementById('btn-badges-top').title = t('badges');
  document.getElementById('btn-daily').title = t('daily');
}

function updateHomeI18n() {
  document.getElementById('btn-start').textContent = t('start');
  document.getElementById('btn-add-player').textContent = t('addPlayer');
  document.getElementById('btn-2player').textContent = t('twoPlayer');
  document.getElementById('name-input').placeholder = t('yourName');
}

function renderLangBtns() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === state.lang);
  });
}

function renderAvatarGrid() {
  const grid = document.getElementById('avatar-grid');
  grid.innerHTML = '';
  AVATARS.forEach((av, i) => {
    const d = document.createElement('div');
    d.className = 'avatar-option' + (getActiveProfile()?.avatar === av ? ' selected' : '');
    d.textContent = av; d.dataset.av = av;
    d.onclick = () => selectAvatar(av);
    grid.appendChild(d);
  });
}

function selectAvatar(av) {
  const p = getActiveProfile();
  if (p) { p.avatar = av; saveProfiles(); }
  document.querySelectorAll('.avatar-option').forEach(d => d.classList.toggle('selected', d.dataset.av === av));
}

function renderPlayersChips() {
  const wrap = document.getElementById('players-chips');
  wrap.innerHTML = '';
  if (state.profiles.length === 0) return;
  state.profiles.forEach((p, i) => {
    const chip = document.createElement('div');
    chip.className = 'player-chip' + (i === state.activeProfileIdx ? ' active' : '');
    chip.innerHTML = `<span>${p.avatar}</span><span>${p.name}</span><span class="del-p" data-idx="${i}" title="Remove">✕</span>`;
    chip.onclick = (e) => {
      if (e.target.classList.contains('del-p')) {
        const idx = parseInt(e.target.dataset.idx);
        state.profiles.splice(idx, 1);
        if (state.activeProfileIdx >= state.profiles.length) state.activeProfileIdx = Math.max(0, state.profiles.length - 1);
        saveProfiles(); saveActiveIdx(); renderHome();
        return;
      }
      state.activeProfileIdx = i; saveActiveIdx(); renderHome();
    };
    wrap.appendChild(chip);
  });
  // fill name input
  const p = getActiveProfile();
  if (p) document.getElementById('name-input').value = p.name;
}

function renderHomeStats() {
  const p = getActiveProfile();
  document.getElementById('stat-streak').textContent = p ? p.streak : 0;
  document.getElementById('stat-xp').textContent = p ? p.xp : 0;
  document.getElementById('stat-badges').textContent = p ? (p.badges || []).length : 0;
  document.getElementById('stat-games').textContent = p ? (p.games || 0) : 0;
}

// ===== ADD PLAYER =====
function addPlayer() {
  const nameEl = document.getElementById('name-input');
  const name = nameEl.value.trim();
  if (!name) { nameEl.focus(); nameEl.style.borderColor = 'var(--wrong)'; setTimeout(() => nameEl.style.borderColor = '', 1200); return; }
  const av = document.querySelector('.avatar-option.selected')?.dataset.av || AVATARS[0];
  const existing = state.profiles.findIndex(p => p.name.toLowerCase() === name.toLowerCase());
  if (existing >= 0) { state.activeProfileIdx = existing; saveActiveIdx(); renderHome(); return; }
  const profile = { name, avatar: av, xp: 0, streak: 0, bestStreak: 0, badges: [], games: 0, history: [], usedLangs: new Set() };
  state.profiles.push(profile);
  state.activeProfileIdx = state.profiles.length - 1;
  saveProfiles(); saveActiveIdx();
  renderHome();
  showXPToast('👋 Welcome, ' + name + '!', '#a855f7');
}

function saveCurrentName() {
  const name = document.getElementById('name-input').value.trim();
  if (!name) return;
  const p = getActiveProfile();
  if (p) { p.name = name; saveProfiles(); renderPlayersChips(); }
  else addPlayer();
}

// ===== CLASS SELECT =====
function renderClassSelect() {
  showScreen('screen-class');
  const grid = document.getElementById('class-grid');
  grid.innerHTML = '';
  for (let i = 1; i <= 12; i++) {
    const d = document.createElement('div');
    d.className = 'class-card';
    d.innerHTML = `<span class="class-num">${i}</span><span class="class-lbl">Class</span>`;
    d.onclick = () => { state.selectedClass = i; renderSubjectSelect(); };
    grid.appendChild(d);
  }
  document.getElementById('class-title').textContent = t('selectClass');
}

// ===== SUBJECT SELECT =====
function renderSubjectSelect() {
  showScreen('screen-subject');
  document.getElementById('subject-title').textContent = `${t('selectSubject')} — Class ${state.selectedClass}`;
  state.selectedSubjects = [];
  const grid = document.getElementById('subject-grid');
  grid.innerHTML = '';
  SUBJECTS.forEach(sub => {
    const d = document.createElement('div');
    d.className = 'subject-card';
    d.dataset.id = sub.id;
    d.innerHTML = `<div class="s-icon">${sub.icon}</div><div class="s-name">${sub.name}</div><div class="s-check">✓</div>`;
    d.onclick = () => {
      state.selectedSubject = sub.id;
      state.isMixQuiz = false;
      renderModeSelect();
    };
    grid.appendChild(d);
  });
  // Mix card
  const mix = document.createElement('div');
  mix.className = 'subject-card mix-card';
  mix.innerHTML = `<div class="s-icon">🎲</div><div class="s-name">${t('mixQuiz')}</div><div style="font-size:0.72rem;color:var(--text2);margin-top:0.2rem">${t('mixDesc')}</div>`;
  mix.onclick = () => showMixPanel();
  grid.appendChild(mix);
  document.getElementById('mix-panel').classList.remove('visible');
  document.getElementById('subject-screen-title').textContent = t('selectSubject');
}

function showMixPanel() {
  const panel = document.getElementById('mix-panel');
  panel.classList.add('visible');
  renderMixSubjectList();
}

function renderMixSubjectList() {
  const list = document.getElementById('mix-subject-list');
  list.innerHTML = '';
  SUBJECTS.forEach(sub => {
    const label = document.createElement('label');
    label.style.cssText = 'display:flex;align-items:center;gap:0.5rem;padding:0.4rem 0;cursor:pointer;';
    const chk = document.createElement('input');
    chk.type = 'checkbox'; chk.value = sub.id;
    chk.style.accentColor = 'var(--purple)';
    chk.onchange = () => {
      if (chk.checked) state.selectedSubjects.push(sub.id);
      else state.selectedSubjects = state.selectedSubjects.filter(s => s !== sub.id);
    };
    label.appendChild(chk);
    label.innerHTML += `<span>${sub.icon} ${sub.name}</span>`;
    list.appendChild(label);
  });
}

function startMixQuiz() {
  if (state.selectedSubjects.length === 0) { alert('Please select at least one subject!'); return; }
  state.isMixQuiz = true;
  state.mixCount = parseInt(document.getElementById('mix-count').value) || 10;
  renderModeSelect();
}

// ===== MODE SELECT =====
function renderModeSelect() {
  showScreen('screen-mode');
  document.getElementById('mode-screen-title').textContent = t('selectMode');
  state.gameMode = 'free';
  document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
  document.querySelector('.mode-card[data-mode="free"]')?.classList.add('selected');
  document.getElementById('level-selector').style.display = 'none';
  document.getElementById('btn-start-mode').textContent = t('start');
  updateModeI18n();
}

function updateModeI18n() {
  document.querySelectorAll('.mode-card').forEach(c => {
    const m = c.dataset.mode;
    c.querySelector('.m-name').textContent = t(m === 'free' ? 'freePlay' : m === 'timer' ? 'timerMode' : m === 'level' ? 'levelMode' : 'challenge');
    c.querySelector('.m-desc').textContent = t(m === 'free' ? 'freeDesc' : m === 'timer' ? 'timerDesc' : m === 'level' ? 'levelDesc' : 'challengeDesc');
  });
}

function selectMode(mode) {
  state.gameMode = mode;
  document.querySelectorAll('.mode-card').forEach(c => c.classList.toggle('selected', c.dataset.mode === mode));
  const lvlSel = document.getElementById('level-selector');
  lvlSel.style.display = mode === 'level' ? 'block' : 'none';
  if (mode === 'level') renderLevelGrid();
}

function renderLevelGrid() {
  const grid = document.getElementById('level-grid');
  grid.innerHTML = '';
  for (let i = 1; i <= 10; i++) {
    const d = document.createElement('div');
    d.className = 'level-chip' + (state.selectedLevel === i ? ' selected' : '');
    d.textContent = i;
    d.onclick = () => { state.selectedLevel = i; grid.querySelectorAll('.level-chip').forEach(c => c.classList.toggle('selected', c.textContent == i)); };
    grid.appendChild(d);
  }
  if (!state.selectedLevel) { state.selectedLevel = 1; grid.querySelector('.level-chip').classList.add('selected'); }
}

// ===== LOAD QUESTIONS =====
async function loadQuestions() {
  if (state.isMixQuiz) {
    const allQ = [];
    for (const subId of state.selectedSubjects) {
      const sub = SUBJECTS.find(s => s.id === subId);
      if (!sub) continue;
      try {
        const res = await fetch(`data/class${state.selectedClass}/${sub.file}`);
        if (!res.ok) continue;
        let data = await res.json();
        if (state.gameMode === 'level' && state.selectedLevel) data = data.filter(q => q.level === state.selectedLevel);
        allQ.push(...data);
      } catch(e) {}
    }
    return shuffleArr(allQ).slice(0, state.mixCount);
  } else {
    const sub = SUBJECTS.find(s => s.id === state.selectedSubject);
    if (!sub) return [];
    try {
      const res = await fetch(`data/class${state.selectedClass}/${sub.file}`);
      if (!res.ok) return getDemoQuestions();
      let data = await res.json();
      if (state.gameMode === 'level' && state.selectedLevel) data = data.filter(q => q.level === state.selectedLevel);
      return shuffleArr(data);
    } catch(e) { return getDemoQuestions(); }
  }
}

function getDemoQuestions() {
  return [
    { question: "What is 2 + 2?", option1: "3", option2: "4", option3: "5", option4: "6", answer: "option2", level: 1, hint: "Two plus two" },
    { question: "What color is the sky?", option1: "Red", option2: "Green", option3: "Blue", option4: "Yellow", answer: "option3", level: 1, hint: "Look up on a clear day" },
    { question: "How many days in a week?", option1: "5", option2: "6", option3: "8", option4: "7", answer: "option4", level: 1, hint: "Sunday to Saturday" },
  ];
}

function shuffleArr(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}

// ===== START QUIZ =====
async function startQuiz(daily = false) {
  saveCurrentName();
  const p = getActiveProfile();
  if (!p) { document.getElementById('name-input').focus(); return; }

  // Ensure class & subject set for non-daily
  if (!daily && !state.selectedClass) { renderClassSelect(); return; }

  // Load questions
  let qs = await loadQuestions();
  if (daily) {
    const cls = Math.ceil(Math.random() * 3);
    const sub = SUBJECTS[Math.floor(Math.random() * SUBJECTS.length)];
    state.selectedClass = cls; state.selectedSubject = sub.id; state.isMixQuiz = false;
    try {
      const res = await fetch(`data/class${cls}/${sub.file}`);
      qs = res.ok ? shuffleArr(await res.json()).slice(0, 10) : getDemoQuestions();
    } catch(e) { qs = getDemoQuestions(); }
    state.gameMode = 'free';
  }

  if (!qs || qs.length === 0) { alert(t('noQuestions')); return; }

  // Encrypt answers
  state.questions = qs.map(q => ({ ...q, _enc: QSecurity.encryptAnswer(q.answer) }));
  state.currentQ = 0;
  state.score = 0;
  state.xpEarned = 0;
  state.streak = 0;
  state.lives = 3;
  if (state.is2Player) {
    state.playerScores = [0, 0]; state.playerXP = [0, 0]; state.playerStreaks = [0, 0];
    state.currentPlayer = 0;
  }

  // Track lang usage
  state.langHistory.add(state.lang);
  saveLangHistory();

  QSecurity.startQuiz((reason) => {
    clearInterval(state.timerInterval);
    if (reason === 'tab_switch') finishQuiz();
  });

  renderQuiz();
}

// ===== RENDER QUIZ =====
function renderQuiz() {
  showScreen('screen-quiz');
  if (state.is2Player) showTurnBanner();
  renderQuestion();
}

function showTurnBanner() {
  const banner = document.getElementById('turn-banner');
  const p = state.p2Profiles[state.currentPlayer];
  banner.textContent = (p ? p.avatar + ' ' + p.name : `Player ${state.currentPlayer + 1}`) + t('player1Turn');
  banner.classList.add('visible');
}

function renderQuestion() {
  const q = state.questions[state.currentQ];
  if (!q) { finishQuiz(); return; }

  // Progress
  const prog = ((state.currentQ) / state.questions.length) * 100;
  document.getElementById('progress-fill').style.width = prog + '%';
  document.getElementById('q-counter').textContent = `${t('question')} ${state.currentQ + 1}/${state.questions.length}`;

  // XP & lives
  const xpVal = state.is2Player ? state.playerXP[state.currentPlayer] : state.xpEarned;
  document.getElementById('xp-display').textContent = `⚡ ${xpVal} ${t('xp')}`;
  renderLives();

  // Streak pill
  const pill = document.getElementById('streak-pill');
  const streakVal = state.is2Player ? state.playerStreaks[state.currentPlayer] : state.streak;
  if (streakVal > 0) {
    pill.textContent = `🔥 ${streakVal} ${t('streak')}`;
    pill.classList.remove('hidden');
  } else { pill.classList.add('hidden'); }

  // Question
  document.getElementById('question-text').textContent = q.question;

  // Options
  const opts = ['option1','option2','option3','option4'];
  const labels = ['A','B','C','D'];
  opts.forEach((opt, i) => {
    const btn = document.getElementById(`opt-${i}`);
    btn.className = 'option-btn';
    btn.disabled = false;
    btn.querySelector('.opt-label').textContent = labels[i];
    btn.querySelector('.opt-text').textContent = q[opt] || '';
    // Remove any leftover ::after from previous answer
    btn.style.removeProperty('--check');
    btn.onclick = () => answerQuestion(opt);
  });

  // Hint
  state.hintUsed = false;
  const hintBtn = document.getElementById('hint-btn');
  hintBtn.disabled = false;
  hintBtn.style.opacity = '1';

  // Next btn
  document.getElementById('next-btn').classList.remove('visible');
  document.getElementById('next-btn').textContent = state.currentQ === state.questions.length - 1 ? '🏁 Finish' : t('next');

  // Timer
  if (state.gameMode === 'timer') startTimer();
  else { document.getElementById('timer-bar-wrap').classList.remove('active'); clearInterval(state.timerInterval); }
}

function renderLives() {
  const row = document.getElementById('lives-row');
  if (state.gameMode !== 'challenge') { row.style.display = 'none'; return; }
  row.style.display = 'flex';
  row.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const h = document.createElement('span');
    h.className = 'life-heart' + (i >= state.lives ? ' lost' : '');
    h.textContent = '❤️'; row.appendChild(h);
  }
}

function startTimer() {
  clearInterval(state.timerInterval);
  state.timerSecs = 30;
  const bar = document.getElementById('timer-bar-fill');
  const wrap = document.getElementById('timer-bar-wrap');
  wrap.classList.add('active');
  bar.style.width = '100%';
  state.timerInterval = setInterval(() => {
    state.timerSecs--;
    bar.style.width = (state.timerSecs / 30 * 100) + '%';
    if (state.timerSecs <= 5) soundTick();
    if (state.timerSecs <= 0) {
      clearInterval(state.timerInterval);
      handleWrongAnswer(true);
    }
  }, 1000);
}

function answerQuestion(selectedOpt) {
  clearInterval(state.timerInterval);
  document.getElementById('timer-bar-wrap').classList.remove('active');
  const q = state.questions[state.currentQ];
  const correct = QSecurity.decryptAnswer(q._enc);
  const isCorrect = selectedOpt === correct;

  // Highlight buttons
  const opts = ['option1','option2','option3','option4'];
  opts.forEach((opt, i) => {
    const btn = document.getElementById(`opt-${i}`);
    btn.disabled = true;
    if (opt === correct) btn.classList.add('correct');
    else if (opt === selectedOpt && !isCorrect) btn.classList.add('wrong');
  });

  if (isCorrect) handleCorrectAnswer();
  else handleWrongAnswer(false);

  document.getElementById('next-btn').classList.add('visible');
}

function handleCorrectAnswer() {
  const gain = 10;
  if (state.is2Player) {
    state.playerScores[state.currentPlayer]++;
    state.playerXP[state.currentPlayer] += gain;
    state.playerStreaks[state.currentPlayer]++;
  } else {
    state.score++;
    state.xpEarned += gain;
    state.streak++;
  }
  soundCorrect();
  showXPToast(`+${gain} ${t('xp')} ✅`, 'var(--correct)');
  document.getElementById('xp-display').textContent = `⚡ ${state.is2Player ? state.playerXP[state.currentPlayer] : state.xpEarned} ${t('xp')}`;
  const streak = state.is2Player ? state.playerStreaks[state.currentPlayer] : state.streak;
  if (streak > 0) {
    const pill = document.getElementById('streak-pill');
    pill.textContent = `🔥 ${streak} ${t('streak')}`;
    pill.classList.remove('hidden');
  }
}

function handleWrongAnswer(timeUp = false) {
  const loss = 5;
  if (state.is2Player) {
    state.playerXP[state.currentPlayer] = Math.max(0, state.playerXP[state.currentPlayer] - loss);
    state.playerStreaks[state.currentPlayer] = 0;
  } else {
    state.xpEarned = Math.max(0, state.xpEarned - loss);
    state.streak = 0;
    if (state.gameMode === 'challenge') {
      state.lives--;
      renderLives();
      if (state.lives <= 0) {
        setTimeout(() => finishQuiz(), 800);
        return;
      }
    }
  }
  soundWrong();
  showXPToast(timeUp ? `⏰ ${t('timeUp')}` : `-${loss} XP ❌`, 'var(--wrong)');
  document.getElementById('streak-pill').classList.add('hidden');
}

function useHint() {
  if (state.hintUsed) return;
  const q = state.questions[state.currentQ];
  const correct = QSecurity.decryptAnswer(q._enc);
  const opts = ['option1','option2','option3','option4'];
  const wrongs = opts.filter(o => o !== correct);
  const toElim = wrongs[Math.floor(Math.random() * wrongs.length)];
  const idx = opts.indexOf(toElim);
  document.getElementById(`opt-${idx}`).classList.add('eliminated');
  document.getElementById(`opt-${idx}`).disabled = true;
  state.hintUsed = true;
  if (state.is2Player) state.playerXP[state.currentPlayer] = Math.max(0, state.playerXP[state.currentPlayer] - 3);
  else state.xpEarned = Math.max(0, state.xpEarned - 3);
  document.getElementById('hint-btn').disabled = true;
  document.getElementById('hint-btn').style.opacity = '0.4';
  showXPToast('-3 XP 💡', 'var(--purple)');
  if (q.hint) showHintText(q.hint);
}

function showHintText(hint) {
  let ht = document.getElementById('hint-text-box');
  if (!ht) {
    ht = document.createElement('div');
    ht.id = 'hint-text-box';
    ht.style.cssText = 'background:rgba(168,85,247,0.15);border:1px solid var(--purple);border-radius:0.75rem;padding:0.6rem 0.9rem;font-size:0.82rem;color:var(--text2);margin-bottom:0.75rem;animation:slideUp 0.2s ease;';
    document.getElementById('quiz-actions-wrap').insertAdjacentElement('beforebegin', ht);
  }
  ht.textContent = '💡 ' + hint;
}

function nextQuestion() {
  const ht = document.getElementById('hint-text-box');
  if (ht) ht.remove();

  if (state.is2Player) {
    // check if this player's questions done
    const totalQ = state.questions.length;
    const qPerPlayer = Math.floor(totalQ / 2);
    const p1Done = state.currentQ + 1 >= qPerPlayer;
    const p2Start = qPerPlayer;

    if (state.currentPlayer === 0 && state.currentQ + 1 >= qPerPlayer) {
      state.currentPlayer = 1;
      state.currentQ++;
      showTurnSwitchModal();
      return;
    }
    if (state.currentQ + 1 >= totalQ) { finishQuiz(); return; }
    state.currentQ++;
    renderQuestion();
    if (state.is2Player) showTurnBanner();
    return;
  }

  if (state.currentQ + 1 >= state.questions.length) { finishQuiz(); return; }
  state.currentQ++;
  renderQuestion();
}

function showTurnSwitchModal() {
  const p = state.p2Profiles[state.currentPlayer];
  document.getElementById('switch-title').textContent = t('switchTurn');
  document.getElementById('switch-desc').textContent = `${t('switchDesc')} ${p ? p.avatar + ' ' + p.name : 'Player 2'}`;
  document.getElementById('modal-turn-switch').classList.add('open');
}

function confirmTurnSwitch() {
  document.getElementById('modal-turn-switch').classList.remove('open');
  renderQuestion();
  showTurnBanner();
}

// ===== XP TOAST =====
function showXPToast(msg, color) {
  const el = document.createElement('div');
  el.className = 'xp-toast';
  el.style.color = color;
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1300);
}

// ===== FINISH QUIZ =====
function finishQuiz() {
  QSecurity.stopQuiz();
  clearInterval(state.timerInterval);
  const p = getActiveProfile();
  if (!p) { renderHome(); return; }

  const total = state.questions.length;
  const correct = state.score;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  // Update profile
  p.xp = (p.xp || 0) + state.xpEarned;
  p.streak = state.streak;
  if (state.streak > (p.bestStreak || 0)) p.bestStreak = state.streak;
  p.games = (p.games || 0) + 1;

  // History
  const histEntry = {
    date: new Date().toISOString(),
    class: state.selectedClass, subject: state.selectedSubject || 'mix',
    mode: state.gameMode, score: correct, total, xp: state.xpEarned, pct
  };
  p.history = (p.history || []);
  p.history.unshift(histEntry);
  if (p.history.length > 20) p.history = p.history.slice(0, 20);
  state.quizHistory.unshift(histEntry);
  saveQuizHistory();

  // Subject performance
  if (!p.subjectStats) p.subjectStats = {};
  const subKey = state.isMixQuiz ? 'mix' : (state.selectedSubject || 'general');
  if (!p.subjectStats[subKey]) p.subjectStats[subKey] = { total: 0, correct: 0 };
  p.subjectStats[subKey].total += total;
  p.subjectStats[subKey].correct += correct;

  // Check badges
  const newBadges = checkBadges(p, pct, state.streak);

  // Update leaderboard
  updateLeaderboard(p);
  saveProfiles();

  // Render results
  renderResults(p, correct, total, pct, state.xpEarned, newBadges);
}

function checkBadges(p, pct, streak) {
  p.badges = p.badges || [];
  const earned = [];
  function earn(id) {
    if (!p.badges.includes(id)) { p.badges.push(id); earned.push(id); }
  }
  if (p.games >= 1) earn('first_steps');
  if (streak >= 3) earn('on_fire');
  if (streak >= 5) earn('lightning_bolt');
  if (streak >= 10) earn('unstoppable');
  if (p.xp >= 100) earn('century_club');
  if (p.xp >= 500) earn('xp_rocket');
  if (p.xp >= 1000) earn('xp_king');
  if (pct === 100) earn('perfectionist');
  if (pct >= 80) earn('sharp_shooter');
  if (p.games >= 5) earn('game_addict');
  if (p.games >= 20) earn('quiz_arena');
  if (state.gameMode === 'challenge' && state.lives >= 2) earn('survivor');
  if (state.langHistory.size >= 3) earn('polyglot');
  return earned;
}

function updateLeaderboard(p) {
  const existing = state.leaderboard.findIndex(e => e.name === p.name);
  if (existing >= 0) state.leaderboard[existing] = { name: p.name, avatar: p.avatar, xp: p.xp, games: p.games };
  else state.leaderboard.push({ name: p.name, avatar: p.avatar, xp: p.xp, games: p.games });
  state.leaderboard.sort((a, b) => b.xp - a.xp);
  saveLeaderboard();
}

// ===== RESULTS SCREEN =====
function renderResults(p, correct, total, pct, xpEarned, newBadges) {
  showScreen('screen-results');
  document.getElementById('res-avatar').textContent = p.avatar;
  const grade = pct >= 90 ? t('gradeA') : pct >= 70 ? t('gradeB') : pct >= 50 ? t('gradeC') : t('gradeD');
  document.getElementById('res-grade').textContent = grade;
  document.getElementById('res-score-big').textContent = `${pct}%`;
  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-wrong').textContent = total - correct;
  document.getElementById('res-xp').textContent = '+' + xpEarned;
  document.getElementById('res-streak').textContent = `🔥 ${state.streak} ${t('streak')}`;
  document.getElementById('res-total-xp').textContent = p.xp;
  document.getElementById('total-xp-lbl').textContent = t('totalXP');

  // Badge
  const badgeEl = document.getElementById('badge-earned');
  if (newBadges.length > 0) {
    const b = BADGES.find(b => b.id === newBadges[0]);
    if (b) {
      badgeEl.querySelector('.be-icon').textContent = b.icon;
      badgeEl.querySelector('.be-name').textContent = b.name;
      badgeEl.querySelector('.be-label').textContent = t('newBadge');
      badgeEl.classList.add('show');
      soundBadge();
    }
  } else badgeEl.classList.remove('show');

  // 2-player battle
  const battleEl = document.getElementById('battle-result');
  if (state.is2Player) {
    battleEl.classList.add('show');
    renderBattleResult();
  } else battleEl.classList.remove('show');

  if (pct >= 70) launchConfetti();
}

function renderBattleResult() {
  const p1 = state.p2Profiles[0], p2 = state.p2Profiles[1];
  const s1 = state.playerScores[0], s2 = state.playerScores[1];
  const winner = s1 > s2 ? 0 : s2 > s1 ? 1 : -1;
  document.querySelector('.battle-vs').textContent = t('vs');
  [0,1].forEach(i => {
    const el = document.querySelectorAll('.battle-player')[i];
    const pr = state.p2Profiles[i];
    el.querySelector('.bp-avatar').textContent = pr?.avatar || '❓';
    el.querySelector('.bp-name').textContent = pr?.name || `P${i+1}`;
    el.querySelector('.bp-score').textContent = state.playerScores[i];
    el.classList.toggle('winner', winner === i);
  });
  if (winner === -1) {
    document.querySelector('.battle-vs').textContent = t('tieGame');
  }
}

// ===== CONFETTI =====
function launchConfetti() {
  const colors = ['#f7c52e','#ff6b6b','#a855f7','#22c55e','#3b82f6','#ff9a00'];
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.left = Math.random() * 100 + 'vw';
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.animationDuration = (1.5 + Math.random() * 2) + 's';
      el.style.animationDelay = Math.random() * 0.5 + 's';
      el.style.transform = `rotate(${Math.random()*360}deg)`;
      el.style.width = el.style.height = (6 + Math.random() * 10) + 'px';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 3500);
    }, Math.random() * 600);
  }
}

// ===== LEADERBOARD =====
function renderLeaderboard() {
  showScreen('screen-leaderboard');
  document.getElementById('lb-title').textContent = t('top10');
  const list = document.getElementById('lb-list');
  list.innerHTML = '';
  if (state.leaderboard.length === 0) {
    list.innerHTML = `<div class="empty-state"><div class="es-icon">🏆</div><p>No players yet! Complete a quiz to appear here.</p></div>`;
    return;
  }
  state.leaderboard.slice(0,10).forEach((entry, i) => {
    const el = document.createElement('div');
    el.className = 'lb-entry';
    const rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
    const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '';
    el.innerHTML = `
      <div class="lb-rank ${rankClass}">${medal || (i+1)}</div>
      <div class="lb-avatar">${entry.avatar || '🎮'}</div>
      <div class="lb-info">
        <div class="lb-name">${entry.name}</div>
        <div class="lb-sub">${entry.games || 0} games</div>
      </div>
      <div class="lb-xp">⚡ ${entry.xp}</div>`;
    list.appendChild(el);
  });
}

// ===== BADGES SCREEN =====
function renderBadgesScreen() {
  showScreen('screen-badges');
  const p = getActiveProfile();
  const earned = p?.badges || [];
  const grid = document.getElementById('badges-grid');
  grid.innerHTML = '';
  BADGES.forEach(b => {
    const el = document.createElement('div');
    el.className = 'badge-card' + (earned.includes(b.id) ? ' earned' : ' locked');
    el.innerHTML = `<div class="bc-icon">${b.icon}</div><div class="bc-name">${b.name}</div><div class="bc-desc">${b.desc}</div>`;
    el.title = b.desc;
    grid.appendChild(el);
  });
}

// ===== DASHBOARD =====
function renderDashboard() {
  showScreen('screen-dashboard');
  const p = getActiveProfile();
  document.getElementById('dash-title').textContent = t('dashboard');
  if (!p) {
    document.getElementById('dash-content').innerHTML = `<div class="empty-state"><div class="es-icon">📊</div><p>No player profile yet. Add a player to see stats!</p></div>`;
    return;
  }

  // Overall stats
  document.getElementById('dash-total-xp').textContent = p.xp || 0;
  document.getElementById('dash-total-games').textContent = p.games || 0;
  document.getElementById('dash-best-streak').textContent = p.bestStreak || 0;
  const allH = p.history || [];
  const avgScore = allH.length > 0 ? Math.round(allH.reduce((a,h) => a + h.pct, 0) / allH.length) : 0;
  document.getElementById('dash-avg-score').textContent = avgScore + '%';

  // Subject bars
  const subjectStats = p.subjectStats || {};
  const barsEl = document.getElementById('subject-bars');
  barsEl.innerHTML = '';
  const allSubs = [...SUBJECTS, { id: 'mix', name: 'Mix Quiz', icon: '🎲' }];
  allSubs.forEach(sub => {
    const st = subjectStats[sub.id];
    if (!st || st.total === 0) return;
    const pct = Math.round((st.correct / st.total) * 100);
    const row = document.createElement('div');
    row.className = 'subject-bar-row';
    row.innerHTML = `<div class="sbr-top"><span>${sub.icon} ${sub.name}</span><span>${pct}%</span></div>
      <div class="sbr-bar"><div class="sbr-fill" style="width:0%" data-w="${pct}%"></div></div>`;
    barsEl.appendChild(row);
    setTimeout(() => row.querySelector('.sbr-fill').style.width = pct + '%', 100);
  });
  if (!barsEl.children.length) barsEl.innerHTML = '<p style="color:var(--text2);font-size:0.85rem;">Play quizzes to see subject performance!</p>';

  // History
  const histEl = document.getElementById('history-list');
  histEl.innerHTML = '';
  const hist = p.history || [];
  if (hist.length === 0) {
    histEl.innerHTML = '<p style="color:var(--text2);font-size:0.85rem;text-align:center;padding:1rem;">No quiz history yet.</p>';
  } else {
    hist.slice(0, 8).forEach(h => {
      const sub = SUBJECTS.find(s => s.id === h.subject);
      const el = document.createElement('div');
      el.className = 'history-entry';
      el.innerHTML = `<div class="he-icon">${sub?.icon || '🎮'}</div>
        <div class="he-info">
          <div class="he-title">${sub?.name || 'Mix Quiz'} — Class ${h.class || '?'}</div>
          <div class="he-sub">${new Date(h.date).toLocaleDateString()} · ${h.mode} · ${h.total}Q</div>
        </div>
        <div class="he-score">${h.pct}%</div>`;
      histEl.appendChild(el);
    });
  }
}

// ===== DAILY CHALLENGE =====
function renderDailyChallenge() {
  showScreen('screen-daily');
  const today = new Date().toDateString();
  const lastDone = localStorage.getItem('qs_daily_done');
  const done = lastDone === today;
  document.getElementById('dc-done-msg').style.display = done ? 'block' : 'none';
  document.getElementById('btn-start-daily').style.display = done ? 'none' : 'block';
  document.getElementById('dc-done-msg').textContent = t('alreadyDone');
  document.getElementById('btn-start-daily').textContent = t('startChallenge');
}

function startDailyChallenge() {
  localStorage.setItem('qs_daily_done', new Date().toDateString());
  const p = getActiveProfile();
  if (p) { p.xp = (p.xp || 0) + 50; saveProfiles(); showXPToast('+50 Bonus XP 🌟', 'var(--accent)'); }
  state.isMixQuiz = false;
  state.gameMode = 'free';
  startQuiz(true);
}

// ===== 2 PLAYER SETUP =====
function show2PlayerModal() {
  if (state.profiles.length < 2) {
    alert('Please add at least 2 players first!');
    return;
  }
  const modal = document.getElementById('modal-2player');
  renderPlayerSelects();
  modal.classList.add('open');
}

function renderPlayerSelects() {
  [1,2].forEach(n => {
    const sel = document.getElementById(`p${n}-select`);
    sel.innerHTML = '';
    state.profiles.forEach((p, i) => {
      const opt = document.createElement('option');
      opt.value = i; opt.textContent = p.avatar + ' ' + p.name;
      if (n === 1 && i === 0) opt.selected = true;
      if (n === 2 && i === 1) opt.selected = true;
      sel.appendChild(opt);
    });
  });
  const qEl = document.getElementById('p2-questions');
  if (qEl) qEl.value = 10;
}

function start2PlayerQuiz() {
  const idx1 = parseInt(document.getElementById('p1-select').value);
  const idx2 = parseInt(document.getElementById('p2-select').value);
  if (idx1 === idx2) { alert('Please select two different players!'); return; }
  state.is2Player = true;
  state.p2Profiles = [state.profiles[idx1], state.profiles[idx2]];
  state.currentPlayer = 0;
  document.getElementById('modal-2player').classList.remove('open');
  renderClassSelect();
}

function cancel2Player() {
  state.is2Player = false;
  document.getElementById('modal-2player').classList.remove('open');
}

// ===== THEME =====
function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  document.getElementById('theme-toggle').textContent = state.theme === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('qs_theme', state.theme);
}

// ===== LANG SWITCH =====
function switchLang(lang) {
  state.lang = lang;
  saveLang();
  state.langHistory.add(lang);
  saveLangHistory();
  renderLangBtns();
  updateHomeI18n();
  updateDatetime();
}

// ===== INIT =====
function init() {
  loadProfiles();
  loadLeaderboard();
  loadLangHistory();
  loadQuizHistory();
  state.lang = localStorage.getItem('qs_lang') || 'en';
  state.theme = localStorage.getItem('qs_theme') || 'dark';
  state.activeProfileIdx = parseInt(localStorage.getItem('qs_active_profile')) || 0;
  if (state.activeProfileIdx >= state.profiles.length) state.activeProfileIdx = 0;

  document.documentElement.setAttribute('data-theme', state.theme);
  document.getElementById('theme-toggle').textContent = state.theme === 'dark' ? '🌙' : '☀️';

  initCanvas();
  setInterval(updateDatetime, 30000);

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.onclick = () => switchLang(btn.dataset.lang);
  });

  // Mode cards
  document.querySelectorAll('.mode-card').forEach(c => {
    c.onclick = () => selectMode(c.dataset.mode);
  });

  // Mix count slider
  const mixCount = document.getElementById('mix-count');
  if (mixCount) {
    mixCount.oninput = () => {
      document.getElementById('mix-count-val').textContent = mixCount.value;
      state.mixCount = parseInt(mixCount.value);
    };
  }

  renderHome();
}

document.addEventListener('DOMContentLoaded', init);
