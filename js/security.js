/* QuizStorm Security Module */
const QSecurity = (() => {
  let tabWarnings = 0;
  const MAX_WARNINGS = 3;
  let inactivityTimer = null;
  const INACTIVITY_TIMEOUT = 5 * 60 * 1000; // 5 minutes
  let quizActive = false;
  let onQuizEnd = null;

  // --- Encryption ---
  function encryptAnswer(answer) {
    try { return btoa(unescape(encodeURIComponent(answer))); }
    catch(e) { return btoa(answer); }
  }

  function decryptAnswer(encrypted) {
    try { return decodeURIComponent(escape(atob(encrypted))); }
    catch(e) { try { return atob(encrypted); } catch(e2) { return encrypted; } }
  }

  function checkAnswer(userAnswer, encryptedCorrect) {
    return userAnswer.trim().toLowerCase() === decryptAnswer(encryptedCorrect).trim().toLowerCase();
  }

  function encryptQuestionBank(questions) {
    return questions.map(q => ({ ...q, _enc: encryptAnswer(q.answer), answer: undefined }));
  }

  // --- Tab Switch Detection ---
  function handleVisibilityChange() {
    if (!quizActive) return;
    if (document.hidden) {
      tabWarnings++;
      if (tabWarnings >= MAX_WARNINGS) {
        showTamperOverlay('Too many tab switches! Quiz ended.', true);
        if (onQuizEnd) onQuizEnd('tab_switch');
      } else {
        showWarningOverlay(`Tab switch warning ${tabWarnings}/${MAX_WARNINGS}!`);
      }
    }
  }

  // --- Inactivity ---
  function resetInactivity() {
    clearTimeout(inactivityTimer);
    if (!quizActive) return;
    inactivityTimer = setTimeout(() => {
      if (quizActive) showSessionTimeoutOverlay();
    }, INACTIVITY_TIMEOUT);
  }

  function showWarningOverlay(msg) {
    let ov = document.getElementById('qs-warning-overlay');
    if (!ov) {
      ov = document.createElement('div');
      ov.id = 'qs-warning-overlay';
      ov.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(255,60,60,0.92);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;font-family:Nunito,sans-serif;text-align:center;padding:2rem;';
      document.body.appendChild(ov);
    }
    ov.innerHTML = `<div style="font-size:3rem;margin-bottom:1rem;">⚠️</div>
      <h2 style="font-size:1.5rem;margin-bottom:0.5rem;">Warning!</h2>
      <p style="font-size:1.1rem;margin-bottom:1.5rem;">${msg}</p>
      <button onclick="document.getElementById('qs-warning-overlay').remove()" 
        style="background:#fff;color:#e74c3c;border:none;padding:0.75rem 2rem;border-radius:2rem;font-size:1rem;cursor:pointer;font-weight:700;">
        Continue Quiz
      </button>`;
    ov.style.display = 'flex';
  }

  function showSessionTimeoutOverlay() {
    let ov = document.getElementById('qs-timeout-overlay');
    if (!ov) {
      ov = document.createElement('div');
      ov.id = 'qs-timeout-overlay';
      ov.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(20,20,40,0.97);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;font-family:Nunito,sans-serif;text-align:center;padding:2rem;';
      document.body.appendChild(ov);
    }
    ov.innerHTML = `<div style="font-size:3rem;margin-bottom:1rem;">⏰</div>
      <h2 style="font-size:1.5rem;margin-bottom:0.5rem;">Session Timeout</h2>
      <p style="font-size:1rem;margin-bottom:1.5rem;opacity:0.8;">You've been inactive for a while.<br>Your progress is saved.</p>
      <button id="qs-resume-btn"
        style="background:linear-gradient(135deg,#f7971e,#ffd200);color:#1a1a2e;border:none;padding:0.75rem 2rem;border-radius:2rem;font-size:1rem;cursor:pointer;font-weight:700;margin-bottom:0.75rem;width:200px;">
        ▶ Resume Quiz
      </button>
      <button id="qs-exit-btn"
        style="background:transparent;color:#fff;border:2px solid rgba(255,255,255,0.3);padding:0.75rem 2rem;border-radius:2rem;font-size:1rem;cursor:pointer;font-weight:600;width:200px;">
        Exit to Home
      </button>`;
    ov.style.display = 'flex';
    document.getElementById('qs-resume-btn').onclick = () => {
      ov.remove(); resetInactivity();
    };
    document.getElementById('qs-exit-btn').onclick = () => {
      ov.remove(); stopQuiz();
      if (onQuizEnd) onQuizEnd('timeout');
    };
  }

  function showTamperOverlay(msg, permanent = false) {
    // Remove existing overlay first
    const existing = document.getElementById('qs-tamper-overlay');
    if (existing) existing.remove();

    const ov = document.createElement('div');
    ov.id = 'qs-tamper-overlay';
    ov.style.cssText = [
      'position:fixed;top:0;left:0;right:0;bottom:0',
      'background:linear-gradient(135deg,#0d0d1a 0%,#1a0a2e 100%)',
      'z-index:10000;display:flex;flex-direction:column',
      'align-items:center;justify-content:center',
      'color:#fff;font-family:Nunito,sans-serif;text-align:center;padding:2rem'
    ].join(';');
    document.body.appendChild(ov);

    ov.innerHTML = `
      <div style="font-size:5rem;margin-bottom:1.5rem;animation:none;">🔒</div>
      <h2 style="font-size:1.8rem;font-weight:900;margin-bottom:0.75rem;color:#f7c52e;">Quiz Terminated</h2>
      <p style="font-size:1rem;margin-bottom:2rem;opacity:0.75;max-width:280px;line-height:1.5;">${msg}</p>
      <button id="qs-tamper-home"
        style="background:linear-gradient(135deg,#f7c52e,#ff9a00);color:#1a1a2e;border:none;
               padding:0.85rem 2.5rem;border-radius:2rem;font-size:1.05rem;cursor:pointer;
               font-weight:900;font-family:Nunito,sans-serif;box-shadow:0 4px 20px rgba(247,197,46,0.4);">
        🏠 Go Home
      </button>`;

    document.getElementById('qs-tamper-home').onclick = () => {
      ov.remove();
      stopQuiz();
      // Navigate home if function exists
      if (typeof renderHome === 'function') renderHome();
    };
  }

  // --- Public API ---
  function startQuiz(endCallback) {
    quizActive = true;
    tabWarnings = 0;
    onQuizEnd = endCallback;
    resetInactivity();
    document.addEventListener('visibilitychange', handleVisibilityChange);
    ['mousemove','keydown','touchstart','click'].forEach(e => 
      document.addEventListener(e, resetInactivity, { passive: true }));
  }

  function stopQuiz() {
    quizActive = false;
    clearTimeout(inactivityTimer);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  }

  function getTabWarnings() { return tabWarnings; }
  function resetTabWarnings() { tabWarnings = 0; }

  return { encryptAnswer, decryptAnswer, checkAnswer, encryptQuestionBank, startQuiz, stopQuiz, getTabWarnings, resetTabWarnings, showWarningOverlay, showTamperOverlay };
})();
