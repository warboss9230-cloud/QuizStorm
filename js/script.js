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
    selectGameMode: 'Select Game Mode',
    dailyChallenge: 'Daily Challenge', bonusXPSub: '+50 Bonus XP • Once per day',
    leaderboard: 'Leaderboard', leaderboardSub: 'Top 10 players by XP',
    freePlayDesc: 'No time limit. Relax and learn!',
    timerModeDesc: '30 seconds per question',
    levelModeDesc: 'Choose difficulty level 1–10',
    challengeDesc2: "3 lives — don't mess up!",
    pvpDesc: 'Battle a friend on same device',
    chooseLevel: 'Choose Level',
    startLevelQuiz: '▶ Start Level Quiz',
    playerProfile: 'Player Profile',
    switchPlayer: 'Switch Player',
    addNewPlayer: '➕ Add New Player',
    deleteAccount: '🗑️ Delete',
    badgesEarned: 'Badges Earned',
    changeAvatar: 'Change Avatar',
    selectClass: 'Select Class',
    selectSubject: 'Select Subject',
    mixQuizTitle: 'MIX QUIZ',
    mixQuizSub: 'Combine multiple subjects!',
    startMixQuiz: '🎲 Start Mix Quiz',
    questions: 'Questions:',
    levelFirst: 'पहले पूरा करो!',
    correct2: 'Correct ✅', wrong2: 'Wrong ❌', xpEarned: 'XP ⚡',
    totalXP2: 'Total XP',
    hintBtn: '💡 Hint (-3 XP)',
    quitQuiz: 'Quit quiz?',
    overallStats: 'Overall Stats',
    subjectPerf: 'Subject Performance',
    recentHistory: 'Recent History',
    avgScore2: 'Average Score',
    noBadges: 'No badges yet',
    noHistory: 'No quiz history yet.',
    oncePerDay: 'One attempt per day. Bonus XP awaits!',
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
    selectGameMode: 'गेम मोड चुनें',
    dailyChallenge: 'दैनिक चुनौती', bonusXPSub: '+50 बोनस XP • प्रतिदिन एक बार',
    leaderboard: 'लीडरबोर्ड', leaderboardSub: 'XP से शीर्ष 10 खिलाड़ी',
    freePlayDesc: 'कोई समय सीमा नहीं। आराम से सीखें!',
    timerModeDesc: 'प्रति प्रश्न 30 सेकंड',
    levelModeDesc: 'कठिनाई स्तर 1–10 चुनें',
    challengeDesc2: '3 जीवन — ध्यान से!',
    pvpDesc: 'एक दोस्त के साथ लड़ाई',
    chooseLevel: 'स्तर चुनें',
    startLevelQuiz: '▶ स्तर क्विज़ शुरू करें',
    playerProfile: 'खिलाड़ी प्रोफ़ाइल',
    switchPlayer: 'खिलाड़ी बदलें',
    addNewPlayer: '➕ नया खिलाड़ी जोड़ें',
    deleteAccount: '🗑️ हटाएं',
    badgesEarned: 'अर्जित बैज',
    changeAvatar: 'अवतार बदलें',
    selectClass: 'कक्षा चुनें',
    selectSubject: 'विषय चुनें',
    mixQuizTitle: 'मिक्स क्विज़',
    mixQuizSub: 'कई विषय मिलाएं!',
    startMixQuiz: '🎲 मिक्स क्विज़ शुरू करें',
    questions: 'प्रश्न:',
    levelFirst: 'पहले पूरा करो!',
    correct2: 'सही ✅', wrong2: 'गलत ❌', xpEarned: 'XP ⚡',
    totalXP2: 'कुल XP',
    hintBtn: '💡 संकेत (-3 XP)',
    quitQuiz: 'क्विज़ छोड़ें?',
    overallStats: 'समग्र आँकड़े',
    subjectPerf: 'विषय प्रदर्शन',
    recentHistory: 'हाल का इतिहास',
    avgScore2: 'औसत स्कोर',
    noBadges: 'अभी कोई बैज नहीं',
    noHistory: 'अभी कोई क्विज़ इतिहास नहीं।',
    oncePerDay: 'प्रतिदिन एक प्रयास। बोनस XP इंतजार कर रहा है!',
  },
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

// Canvas BG removed
function initCanvas() {}
function startBgAnimation() {}
function initBgSwitcher() {}

// ===== SCREEN NAV =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const scr = document.getElementById(id);
  if (scr) { scr.classList.add('active'); scr.scrollTop = 0; }
}

// ===== DATETIME =====
function updateDatetime() {
  const el = document.getElementById('topbar-time');
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleString(state.lang === 'hi' ? 'hi-IN' : 'en-IN', {
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

// ===== DATETIME =====
function updateDatetime() {
  const locale = state.lang === 'hi' ? 'hi-IN' : 'en-IN';
  const opts = { weekday:'short', day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' };
  const str = new Date().toLocaleString(locale, opts);
  ['topbar-time','profile-datetime'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = str;
  });
}

// ===== HOME SCREEN =====
function renderHome() {
  showScreen('screen-home');
  updateDatetime();
  renderHomeStats();
  renderTopbarPlayer();
  renderHomeModeCards();
  updateDailyBanner();
  updateHamburgerLangBtns();
}

function renderTopbarPlayer() {
  const p = getActiveProfile();
  document.getElementById('topbar-avatar').textContent = p ? p.avatar : '🦊';
  document.getElementById('topbar-name').textContent = p ? p.name : 'Guest';
  // hamburger header too
  const hma = document.getElementById('hm-avatar');
  const hmn = document.getElementById('hm-name');
  const hmx = document.getElementById('hm-xp');
  if (hma) hma.textContent = p ? p.avatar : '🦊';
  if (hmn) hmn.textContent = p ? p.name : 'Guest';
  if (hmx) hmx.textContent = `⚡ ${p ? p.xp : 0} XP`;
}

function renderHomeModeCards() {
  // Cards are now onclick in HTML - just hide level selector on home render
  const lvlSel = document.getElementById('home-level-selector');
  if (lvlSel) lvlSel.style.display = 'none';
}

function renderHomeLevelGrid() {
  const grid = document.getElementById('home-level-grid');
  if (!grid) return;
  grid.innerHTML = ''; // always re-render to reflect latest unlock status
  const p = getActiveProfile();
  const lvlKey = `${state.selectedClass}_${state.selectedSubject || 'mix'}`;
  const maxUnlocked = p && p.completedLevels && p.completedLevels[lvlKey]
    ? p.completedLevels[lvlKey] + 1  // next level after highest completed
    : 1; // only level 1 unlocked initially

  for (let i = 1; i <= 10; i++) {
    const unlocked = i <= maxUnlocked;
    const d = document.createElement('div');
    d.className = 'level-chip' + (state.selectedLevel === i ? ' selected' : '') + (unlocked ? '' : ' locked');
    d.innerHTML = unlocked ? `${i}` : `🔒`;
    d.title = unlocked ? `Level ${i}` : `Complete Level ${i-1} first (score ≥ 50%)`;
    if (unlocked) {
      d.onclick = () => {
        state.selectedLevel = i;
        grid.querySelectorAll('.level-chip').forEach(c => c.classList.toggle('selected', parseInt(c.textContent) === i));
      };
    } else {
      d.style.cursor = 'not-allowed';
      d.onclick = () => showXPToast(`🔒 Level ${i-1} ${t('levelFirst')}`, 'var(--wrong)');
    }
    grid.appendChild(d);
  }
  // auto select level 1 if nothing selected or selected level is locked
  if (!state.selectedLevel || state.selectedLevel > maxUnlocked) {
    state.selectedLevel = 1;
    grid.querySelector('.level-chip:not(.locked)')?.classList.add('selected');
  }
}

function updateDailyBanner() {
  const banner = document.getElementById('daily-home-banner');
  if (!banner) return;
  const done = localStorage.getItem('qs_daily_done') === new Date().toDateString();
  banner.classList.toggle('done', done);
  banner.classList.toggle('daily-banner', !done); if(done) banner.querySelector('.hbc-title') && (banner.querySelector('.hbc-title').dataset.done='true');
}

function updateHamburgerLangBtns() {
  document.querySelectorAll('.hm-lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === state.lang));
}

// ===== HAMBURGER =====
function toggleHamburger() {
  const menu = document.getElementById('hamburger-menu');
  const overlay = document.getElementById('hamburger-overlay');
  const isOpen = menu.classList.contains('open');
  menu.classList.toggle('open', !isOpen);
  overlay.classList.toggle('open', !isOpen);
  if (!isOpen) renderTopbarPlayer();
}

// ===== PROFILE & ADD PLAYER =====
function openProfile() {
  showScreen('screen-profile');
  const p = getActiveProfile();
  // Hero section
  document.getElementById('profile-hero-avatar').textContent = p ? p.avatar : '🦊';
  document.getElementById('profile-hero-name').textContent = p ? p.name : 'Guest';
  document.getElementById('profile-hero-xp').textContent = `⚡ ${p ? p.xp : 0} ${t('xp')}`;
  // Stats
  document.getElementById('profile-xp').textContent = p ? (p.xp||0) : 0;
  document.getElementById('profile-streak').textContent = p ? (p.bestStreak||0) : 0;
  document.getElementById('profile-games').textContent = p ? (p.games||0) : 0;
  // Badges row
  const br = document.getElementById('profile-badges-row');
  if (br) {
    const earned = p?.badges || [];
    if (earned.length === 0) {
      br.innerHTML = `<span style="font-size:0.8rem;color:var(--text2)">${t('noBadges')}</span>`;
    } else {
      br.innerHTML = earned.map(id => {
        const b = BADGES.find(x=>x.id===id);
        return b ? `<span title="${b.name}" style="font-size:1.4rem">${b.icon}</span>` : '';
      }).join('');
    }
  }
  // Edit panel hidden by default
  const ep = document.getElementById('profile-edit-panel');
  if (ep) ep.style.display = 'none';
  document.getElementById('profile-edit-btn').textContent = '✏️ Edit';
  // Chips
  renderPlayersChips();
}

function toggleProfileEdit() {
  const ep = document.getElementById('profile-edit-panel');
  const btn = document.getElementById('profile-edit-btn');
  const isHidden = ep.style.display === 'none' || !ep.style.display;
  if (isHidden) {
    ep.style.display = 'block';
    btn.textContent = '✕ Close';
    renderAvatarGrid();
    const p = getActiveProfile();
    if (p) document.getElementById('name-input').value = p.name;
  } else {
    ep.style.display = 'none';
    btn.textContent = '✏️ Edit';
  }
}

function openAddPlayer() {
  const modal = document.getElementById('modal-add-player');
  const grid = document.getElementById('modal-avatar-grid');
  grid.innerHTML = '';
  let selectedAv = AVATARS[0];
  AVATARS.forEach(av => {
    const d = document.createElement('div');
    d.className = 'avatar-option' + (av === selectedAv ? ' selected' : '');
    d.textContent = av; d.dataset.av = av;
    d.onclick = () => {
      selectedAv = av;
      grid.querySelectorAll('.avatar-option').forEach(x => x.classList.toggle('selected', x.dataset.av === av));
    };
    grid.appendChild(d);
  });
  modal._selectedAv = () => selectedAv;
  document.getElementById('modal-name-input').value = '';
  modal.classList.add('open');
  setTimeout(() => document.getElementById('modal-name-input').focus(), 300);
}

function confirmAddPlayer() {
  const modal = document.getElementById('modal-add-player');
  const name = document.getElementById('modal-name-input').value.trim();
  if (!name) { document.getElementById('modal-name-input').style.borderColor='var(--wrong)'; return; }
  const av = modal._selectedAv ? modal._selectedAv() : AVATARS[0];
  const exists = state.profiles.findIndex(p => p.name.toLowerCase() === name.toLowerCase());
  if (exists >= 0) { state.activeProfileIdx = exists; }
  else {
    state.profiles.push({ name, avatar: av, xp:0, streak:0, bestStreak:0, badges:[], games:0, history:[] });
    state.activeProfileIdx = state.profiles.length - 1;
  }
  saveProfiles(); saveActiveIdx();
  modal.classList.remove('open');
  renderHome();
  showXPToast('👋 Welcome, ' + name + '!', '#a855f7');
}

function openSettings() {
  const dark = document.getElementById('setting-dark');
  if (dark) dark.checked = state.theme === 'dark';
  document.getElementById('modal-settings').classList.add('open');
}

// ===== HOME START =====
function handleHomeStart() {
  handleModeClick(state.gameMode);
}

function handleModeClick(mode) {
  state.gameMode = mode;
  const p = getActiveProfile();
  if (!p) { openAddPlayer(); return; }

  if (mode === 'pvp') {
    if (state.profiles.length < 2) { openAddPlayer(); return; }
    show2PlayerModal();
    return;
  }
  if (mode === 'level') {
    // Show level selector inline
    const lvlSel = document.getElementById('home-level-selector');
    if (lvlSel) {
      lvlSel.style.display = 'block';
      renderHomeLevelGrid();
      lvlSel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    return;
  }
  renderClassSelect();
}

function confirmLevelAndStart() {
  if (!state.selectedLevel) state.selectedLevel = 1;
  renderClassSelect();
}

function renderLangBtns() {
  document.querySelectorAll('.lang-btn,.hm-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === state.lang);
  });
}

function renderAvatarGrid() {
  const grid = document.getElementById('avatar-grid');
  if (!grid) return;
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
  if (!wrap) return;
  wrap.innerHTML = '';
  if (state.profiles.length === 0) {
    wrap.innerHTML = '<p style="color:var(--text2);font-size:0.82rem;padding:0.5rem 0">No players yet. Add one!</p>';
    return;
  }
  state.profiles.forEach((p, i) => {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0;border-bottom:1px solid var(--border);';

    // Switch chip
    const chip = document.createElement('div');
    chip.className = 'player-chip' + (i === state.activeProfileIdx ? ' active' : '');
    chip.style.flex = '1';
    chip.innerHTML = `<span>${p.avatar}</span><span>${p.name}</span>`;
    chip.onclick = () => { state.activeProfileIdx = i; saveActiveIdx(); openProfile(); };

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.style.cssText = 'background:rgba(239,68,68,0.12);border:1.5px solid rgba(239,68,68,0.35);color:#ef4444;padding:0.3rem 0.6rem;border-radius:0.5rem;cursor:pointer;font-size:0.78rem;font-weight:800;font-family:Nunito,sans-serif;white-space:nowrap;transition:all 0.15s;';
    delBtn.textContent = '🗑️ Delete';
    delBtn.title = 'Delete Account';
    delBtn.onmouseenter = () => { delBtn.style.background = 'rgba(239,68,68,0.25)'; };
    delBtn.onmouseleave = () => { delBtn.style.background = 'rgba(239,68,68,0.12)'; };
    delBtn.onclick = () => {
      if (!confirm(state.lang==='hi' ? `"${p.name}" को हटाएं? सारा डेटा खो जाएगा!` : `Delete "${p.name}"? All data will be lost!`)) return;
      state.profiles.splice(i, 1);
      if (state.activeProfileIdx >= state.profiles.length) state.activeProfileIdx = Math.max(0, state.profiles.length - 1);
      saveProfiles(); saveActiveIdx();
      openProfile();
    };

    row.appendChild(chip);
    row.appendChild(delBtn);
    wrap.appendChild(row);
  });
  // fill name input
  const p = getActiveProfile();
  const ni = document.getElementById('name-input');
  if (p && ni) ni.value = p.name;
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
  openAddPlayer();
}

function saveCurrentName() {
  const nameEl = document.getElementById('name-input');
  if (!nameEl) return;
  const name = nameEl.value.trim();
  if (!name) return;
  // Also check selected avatar
  const selAv = document.querySelector('#avatar-grid .avatar-option.selected');
  const p = getActiveProfile();
  if (p) {
    p.name = name;
    if (selAv) p.avatar = selAv.dataset.av;
    saveProfiles();
    renderPlayersChips();
    renderTopbarPlayer();
    // Refresh profile hero
    const pha = document.getElementById('profile-hero-avatar');
    const phn = document.getElementById('profile-hero-name');
    if (pha) pha.textContent = p.avatar;
    if (phn) phn.textContent = p.name;
    showXPToast('✅ Saved!', 'var(--correct)');
    // Close edit panel
    const ep = document.getElementById('profile-edit-panel');
    const btn = document.getElementById('profile-edit-btn');
    if (ep) ep.style.display = 'none';
    if (btn) btn.textContent = '✏️ Edit';
  } else {
    openAddPlayer();
  }
}

// ===== CLASS SELECT =====
function renderClassSelect() {
  showScreen('screen-class');
  const classAvatars = ['🐣','🐥','🐦','🦊','🦁','🐯','🦅','🦋','🐉','🌟','⚡','🏆'];
  const grid = document.getElementById('class-grid');
  grid.innerHTML = '';
  for (let i = 1; i <= 12; i++) {
    const d = document.createElement('div');
    d.className = 'class-card';
    d.innerHTML = `<span class="class-avatar">${classAvatars[i-1]||'📚'}</span><span class="class-num">${i}</span><span class="class-lbl">Class</span>`;
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
      startQuiz();
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
  state.selectedSubjects = []; // reset on re-render
  SUBJECTS.forEach(sub => {
    const label = document.createElement('label');
    label.style.cssText = 'display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0;cursor:pointer;font-weight:700;font-size:0.9rem;border-bottom:1px solid var(--border);';
    // Build checkbox separately to preserve event listener
    const chk = document.createElement('input');
    chk.type = 'checkbox';
    chk.value = sub.id;
    chk.style.cssText = 'width:18px;height:18px;accent-color:var(--purple);cursor:pointer;flex-shrink:0;';
    chk.addEventListener('change', () => {
      if (chk.checked) {
        if (!state.selectedSubjects.includes(sub.id)) state.selectedSubjects.push(sub.id);
      } else {
        state.selectedSubjects = state.selectedSubjects.filter(s => s !== sub.id);
      }
    });
    // Build text span separately
    const span = document.createElement('span');
    span.textContent = sub.icon + ' ' + sub.name;
    label.appendChild(chk);
    label.appendChild(span);
    list.appendChild(label);
  });
}

function startMixQuiz() {
  if (state.selectedSubjects.length === 0) { alert('Please select at least one subject!'); return; }
  state.isMixQuiz = true;
  state.mixCount = parseInt(document.getElementById('mix-count').value) || 20;
  startQuiz();
}

// ===== MODE SELECT =====
// Mode select now happens on home screen; this is kept for level mode flow
function selectMode(mode) {
  state.gameMode = mode;
}

function renderLevelGrid() {
  const grid = document.getElementById('level-grid');
  if (!grid) return;
  grid.innerHTML = '';
  for (let i = 1; i <= 10; i++) {
    const d = document.createElement('div');
    d.className = 'level-chip' + (state.selectedLevel === i ? ' selected' : '');
    d.textContent = i;
    d.onclick = () => { state.selectedLevel = i; grid.querySelectorAll('.level-chip').forEach(c => c.classList.toggle('selected', c.textContent == i)); };
    grid.appendChild(d);
  }
  if (!state.selectedLevel) { state.selectedLevel = 1; grid.querySelector('.level-chip')?.classList.add('selected'); }
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
  const p = getActiveProfile();
  if (!p) { openAddPlayer(); return; }

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
  const p = state.is2Player ? state.p2Profiles[state.currentPlayer] : getActiveProfile();
  const nameEl = document.getElementById('quiz-player-name');
  const avEl = document.getElementById('quiz-player-avatar');
  if (nameEl) nameEl.textContent = p ? p.name : 'Player';
  if (avEl) avEl.textContent = p ? p.avatar : '🦊';
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
    const circle = btn.querySelector('.opt-circle'); if(circle) circle.textContent = labels[i];
    btn.querySelector('.opt-text').textContent = q[opt] || '';
    // Remove any leftover ::after from previous answer
    btn.style.removeProperty('--check');
    btn.onclick = () => answerQuestion(opt);
  });

  // Hint
  state.hintUsed = false;
  updateHintBtnState();

  // Next btn
  document.getElementById('next-btn').classList.remove('visible');
  document.getElementById('next-btn').textContent = state.currentQ === state.questions.length - 1 ? '🏁 ' + (state.lang==='hi' ? 'समाप्त' : 'Finish') : t('next');

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
  bar.style.background = '#22c55e'; // start green
  state.timerInterval = setInterval(() => {
    state.timerSecs--;
    const pct = state.timerSecs / 30;
    bar.style.width = (pct * 100) + '%';
    // Smooth color: green(pct=1) → yellow(pct=0.5) → red(pct=0)
    const r = Math.round(255 * (1 - pct) * 2).toString(16).padStart(2,'0').slice(-2);
    const g = Math.round(255 * Math.min(pct * 2, 1)).toString(16).padStart(2,'0').slice(-2);
    const rHex = Math.min(255, Math.round(255 * (1 - pct) * 2));
    const gHex = Math.min(255, Math.round(255 * pct * 2));
    bar.style.background = `rgb(${rHex},${gHex},0)`;
    if (state.timerSecs <= 5) {
      soundTick();
      bar.style.background = '#ef4444'; // solid red final seconds
    }
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
    // Update XP display immediately
    document.getElementById('xp-display').textContent = `⚡ ${state.playerXP[state.currentPlayer]} ${t('xp')}`;
  } else {
    state.xpEarned = Math.max(0, state.xpEarned - loss);
    state.streak = 0;
    // Update XP display immediately
    document.getElementById('xp-display').textContent = `⚡ ${state.xpEarned} ${t('xp')}`;
    // Low XP warning
    if (state.xpEarned < 5) {
      showXPToast('⚠️ Low XP! Hint unavailable!', '#f59e0b');
    }
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
  // Disable hint if XP too low
  updateHintBtnState();
}

function useHint() {
  if (state.hintUsed) return;
  const curXP = state.is2Player ? state.playerXP[state.currentPlayer] : state.xpEarned;
  if (curXP < 3) {
    showXPToast('⚠️ XP kam hai! Hint nahi milega!', '#f59e0b');
    updateHintBtnState();
    return;
  }
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
  // Update display
  document.getElementById('xp-display').textContent = `⚡ ${state.is2Player ? state.playerXP[state.currentPlayer] : state.xpEarned} ${t('xp')}`;
  updateHintBtnState();
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

function updateHintBtnState() {
  const hintBtn = document.getElementById('hint-btn');
  if (!hintBtn) return;
  const curXP = state.is2Player ? state.playerXP[state.currentPlayer] : state.xpEarned;
  const noXP = curXP < 3; // need at least 3 XP to use hint
  if (state.hintUsed || noXP) {
    hintBtn.disabled = true;
    hintBtn.classList.add('no-xp');
    hintBtn.style.opacity = '0.35';
    hintBtn.title = noXP ? '⚠️ XP kam hai! Hint nahi milega.' : 'Already used';
  } else {
    hintBtn.disabled = false;
    hintBtn.classList.remove('no-xp');
    hintBtn.style.opacity = '';
    hintBtn.title = '';
  }
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

  // Level mode: unlock next level on passing (>=50%)
  if (state.gameMode === 'level' && state.selectedLevel) {
    if (!p.completedLevels) p.completedLevels = {};
    const lvlKey = `${state.selectedClass}_${state.selectedSubject || 'mix'}`;
    if (!p.completedLevels[lvlKey]) p.completedLevels[lvlKey] = 0;
    if (pct >= 50 && state.selectedLevel >= p.completedLevels[lvlKey]) {
      p.completedLevels[lvlKey] = state.selectedLevel; // highest completed level
    }
  }

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
  // p2-questions removed from modal
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
  localStorage.setItem('qs_theme', state.theme);
  const btn = document.getElementById('hm-theme-btn');
  if (btn) btn.textContent = (state.theme === 'dark' ? '🌙' : '☀️') + ' Toggle Dark / Light';
}

// ===== LANG SWITCH =====
function switchLang(lang) {
  state.lang = lang;
  saveLang();
  state.langHistory.add(lang);
  saveLangHistory();
  renderLangBtns();
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

  initCanvas();
  setInterval(updateDatetime, 10000);

  // Mix count slider
  const mixCount = document.getElementById('mix-count');
  if (mixCount) {
    state.mixCount = parseInt(mixCount.value) || 20;
    mixCount.oninput = () => {
      document.getElementById('mix-count-val').textContent = mixCount.value;
      state.mixCount = parseInt(mixCount.value);
    };
  }

  renderHome();
}

document.addEventListener('DOMContentLoaded', init);
