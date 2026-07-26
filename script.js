const DEMO_MODES = {
  work: {
    id: "work",
    title: "Deafen for Work",
    subtitle: "A one-click focus shield for homework, coding, writing, and meetings.",
    promise: "Get into work mode fast and stay there.",
    audience: "Knowledge workers and students",
    hook: "One click to lock in",
    tags: ["Brown noise", "Office hush", "Deep work timing"],
    why: "Broad and reliable. This is the easiest mode to use every single day.",
    features: [
      "One big start button",
      "25, 50, and 90 minute work blocks",
      "Soft fade in and fade out",
      "Minimal visual clutter"
    ],
    stats: { bestFor: "Homework", sound: "Brown", intensity: "Balanced", session: "50 min" },
    presets: [
      { id: "brown", name: "Brown Base", desc: "Low steady weight", oscillator: "none", noise: "brown", reverb: 0.04, filter: 900, shape: "warm" },
      { id: "office", name: "Office Hush", desc: "Speech blur + low hum", oscillator: "none", noise: "pink", reverb: 0.1, filter: 1600, shape: "speech" },
      { id: "rain", name: "Quiet Rain", desc: "Gentle focus texture", oscillator: "sine", noise: "pink", reverb: 0.18, filter: 2200, shape: "airy" }
    ]
  },
  office: {
    id: "office",
    title: "Deafen for Open Offices",
    subtitle: "Pick the exact thing bothering you and let Deafen build the right shield.",
    promise: "Block the exact annoyance instead of forcing users to mix sounds themselves.",
    audience: "Open-office workers",
    hook: "Tell us the noise",
    tags: ["Coworkers", "Traffic", "Keyboard noise"],
    why: "Feels customized immediately and has a clear workplace use case.",
    features: [
      "Coworkers, keyboard, traffic, AC, cafe buttons",
      "Automatic matching sound profile",
      "Simple intensity slider",
      "Attached focus timer"
    ],
    stats: { bestFor: "Open offices", sound: "Adaptive", intensity: "Firm", session: "50 min" },
    presets: [
      { id: "coworkers", name: "Coworkers", desc: "Blur nearby speech", oscillator: "triangle", noise: "pink", reverb: 0.06, filter: 2100, shape: "speech" },
      { id: "keyboard", name: "Keyboard", desc: "Mask sharp taps", oscillator: "sine", noise: "white", reverb: 0.03, filter: 2800, shape: "crisp" },
      { id: "traffic", name: "Traffic", desc: "Soften rolling rumble", oscillator: "none", noise: "brown", reverb: 0.08, filter: 780, shape: "warm" }
    ]
  },
  students: {
    id: "students",
    title: "Deafen for Students",
    subtitle: "A study tab built for reading, homework sprints, and exam prep.",
    promise: "Study without drift, even when the room around you is messy.",
    audience: "High school and college students",
    hook: "Exam mode in one click",
    tags: ["Homework sprints", "Reading mode", "Exam cram"],
    why: "Huge audience, very shareable, and naturally high-frequency usage.",
    features: [
      "Homework sprint and exam cram presets",
      "Steady sound profiles for long reading sessions",
      "Local-only streaks with no account",
      "Low-friction timer controls"
    ],
    stats: { bestFor: "Studying", sound: "Steady", intensity: "Soft", session: "25 min" },
    presets: [
      { id: "reading", name: "Reading Mode", desc: "Quiet and even", oscillator: "sine", noise: "brown", reverb: 0.04, filter: 950, shape: "warm" },
      { id: "cram", name: "Exam Cram", desc: "Tighter pressure", oscillator: "triangle", noise: "pink", reverb: 0.05, filter: 1500, shape: "focus" },
      { id: "library", name: "Library Lift", desc: "Hushed room feel", oscillator: "none", noise: "pink", reverb: 0.14, filter: 2300, shape: "airy" }
    ]
  },
  speech: {
    id: "speech",
    title: "Speech Blur",
    subtitle: "Make nearby voices feel farther away instead of pretending to cancel every sound.",
    promise: "Reduce how distracting conversations feel in ordinary headphones.",
    audience: "Anyone around chatter",
    hook: "Soft, balanced, cocoon",
    tags: ["Voice masking", "Headphone-first", "Believable promise"],
    why: "This is the sharpest, most differentiated Deafen concept.",
    features: [
      "Speech-shaped masking presets",
      "Soft, balanced, cocoon modes",
      "Headphone-first interface",
      "Simple explanation of when it works"
    ],
    stats: { bestFor: "Nearby speech", sound: "Speech blur", intensity: "Balanced", session: "50 min" },
    presets: [
      { id: "soft", name: "Soft", desc: "Gentle blur", oscillator: "triangle", noise: "pink", reverb: 0.05, filter: 2000, shape: "speech-soft" },
      { id: "balanced", name: "Balanced", desc: "Default speech shield", oscillator: "triangle", noise: "pink", reverb: 0.08, filter: 2350, shape: "speech" },
      { id: "cocoon", name: "Cocoon", desc: "Most insulating", oscillator: "sawtooth", noise: "pink", reverb: 0.12, filter: 2600, shape: "speech-deep" }
    ]
  },
  scenes: {
    id: "scenes",
    title: "Deep Work Scenes",
    subtitle: "Turn focus into an atmosphere people actually want to stay inside.",
    promise: "Enter a full environment, not just a timer and a sound slider.",
    audience: "Creative and aesthetic users",
    hook: "Beautiful enough to share",
    tags: ["Coding bunker", "Night flight", "Rain library"],
    why: "This carries the strongest emotional brand and visual identity.",
    features: [
      "Scene-based sound design",
      "Subtle motion and lighting shifts",
      "Quick-switch scene dock",
      "Local favorites"
    ],
    stats: { bestFor: "Immersion", sound: "Scene-based", intensity: "Medium", session: "90 min" },
    presets: [
      { id: "bunker", name: "Coding Bunker", desc: "Low hum + pressure", oscillator: "sine", noise: "brown", reverb: 0.03, filter: 850, shape: "focus" },
      { id: "flight", name: "Night Flight", desc: "Cabin-like wash", oscillator: "none", noise: "brown", reverb: 0.1, filter: 700, shape: "warm" },
      { id: "library", name: "Rain Library", desc: "Soft room atmosphere", oscillator: "sine", noise: "pink", reverb: 0.22, filter: 2500, shape: "airy" }
    ]
  },
  reset: {
    id: "reset",
    title: "Instant Reset",
    subtitle: "Short sessions for snapping back into focus without opening a full workspace.",
    promise: "Reset in minutes and get back to whatever you need to do.",
    audience: "General users who want speed",
    hook: "3, 10, 25, or 60 minute reset",
    tags: ["Quick utility", "No setup", "Calm recovery"],
    why: "Great habit loop and very easy to explain to new users.",
    features: [
      "3 minute reset and 10 minute reboot",
      "One-click timed sessions",
      "Automatic fade out",
      "Calm visual state"
    ],
    stats: { bestFor: "Quick reset", sound: "Gentle", intensity: "Soft", session: "10 min" },
    presets: [
      { id: "reset3", name: "3 Minute Reset", desc: "Immediate calm", oscillator: "sine", noise: "brown", reverb: 0.06, filter: 900, shape: "warm" },
      { id: "reboot10", name: "10 Minute Reboot", desc: "Settle and return", oscillator: "triangle", noise: "pink", reverb: 0.1, filter: 1700, shape: "airy" },
      { id: "deep25", name: "25 Minute Lock-In", desc: "Short focus block", oscillator: "none", noise: "brown", reverb: 0.05, filter: 1100, shape: "focus" }
    ]
  }
};

const SESSION_OPTIONS = [
  { label: "3 min", minutes: 3 },
  { label: "10 min", minutes: 10 },
  { label: "25 min", minutes: 25 },
  { label: "50 min", minutes: 50 },
  { label: "90 min", minutes: 90 }
];

class DeafenEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.audioContext = null;
    this.masterGain = null;
    this.noiseSource = null;
    this.noiseNode = null;
    this.filterNode = null;
    this.toneOsc = null;
    this.toneGain = null;
    this.convolver = null;
    this.dryGain = null;
    this.wetGain = null;
    this.analyser = null;
    this.running = false;
    this.currentPreset = null;
    this.currentIntensity = 62;
    this.currentWarmth = 55;
    this.drawFrame = null;
  }

  async init() {
    if (this.audioContext) return;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    this.audioContext = new Ctx({ latencyHint: "interactive" });
    this.masterGain = this.audioContext.createGain();
    this.masterGain.gain.value = 0;
    this.filterNode = this.audioContext.createBiquadFilter();
    this.filterNode.type = "lowpass";
    this.filterNode.frequency.value = 1800;
    this.filterNode.Q.value = 0.8;

    this.dryGain = this.audioContext.createGain();
    this.wetGain = this.audioContext.createGain();
    this.convolver = this.audioContext.createConvolver();
    this.convolver.buffer = this.createImpulse(2.2, 1.7);
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 1024;

    this.filterNode.connect(this.dryGain);
    this.filterNode.connect(this.convolver);
    this.convolver.connect(this.wetGain);
    this.dryGain.connect(this.masterGain);
    this.wetGain.connect(this.masterGain);
    this.masterGain.connect(this.analyser);
    this.masterGain.connect(this.audioContext.destination);
  }

  createImpulse(seconds, decay) {
    const length = Math.floor(this.audioContext.sampleRate * seconds);
    const impulse = this.audioContext.createBuffer(2, length, this.audioContext.sampleRate);
    for (let channel = 0; channel < 2; channel++) {
      const data = impulse.getChannelData(channel);
      for (let i = 0; i < length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
      }
    }
    return impulse;
  }

  createNoiseBuffer(type = "brown") {
    const sampleRate = this.audioContext.sampleRate;
    const buffer = this.audioContext.createBuffer(1, sampleRate * 2, sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i++) {
      const white = Math.random() * 2 - 1;
      if (type === "white") {
        data[i] = white * 0.35;
      } else if (type === "pink") {
        last = 0.98 * last + 0.12 * white;
        data[i] = last * 0.42;
      } else {
        last = (last + 0.02 * white) / 1.02;
        data[i] = last * 3.2;
      }
    }
    return buffer;
  }

  async start(preset, intensity, warmth) {
    await this.init();
    if (this.audioContext.state === "suspended") await this.audioContext.resume();
    this.stopSources();

    this.currentPreset = preset;
    this.currentIntensity = intensity;
    this.currentWarmth = warmth;

    const noiseSource = this.audioContext.createBufferSource();
    noiseSource.buffer = this.createNoiseBuffer(preset.noise);
    noiseSource.loop = true;
    const noiseGain = this.audioContext.createGain();
    noiseGain.gain.value = 0.18;
    noiseSource.connect(noiseGain);
    noiseGain.connect(this.filterNode);
    noiseSource.start();
    this.noiseSource = noiseSource;
    this.noiseNode = noiseGain;

    if (preset.oscillator && preset.oscillator !== "none") {
      const osc = this.audioContext.createOscillator();
      osc.type = preset.oscillator;
      osc.frequency.value = this.pickFrequency(preset.shape, warmth);
      const toneGain = this.audioContext.createGain();
      toneGain.gain.value = 0.025;
      osc.connect(toneGain);
      toneGain.connect(this.filterNode);
      osc.start();
      this.toneOsc = osc;
      this.toneGain = toneGain;
    }

    this.running = true;
    this.applySettings(intensity, warmth);
    this.fadeTo(this.targetLevel(intensity), 0.8);
    this.draw();
  }

  pickFrequency(shape, warmth) {
    const warm = Number(warmth);
    const map = {
      "warm": 92 + warm * 1.1,
      "speech": 410 + warm * 3,
      "speech-soft": 320 + warm * 2.2,
      "speech-deep": 520 + warm * 3.8,
      "focus": 160 + warm * 1.6,
      "airy": 600 + warm * 3.6,
      "crisp": 820 + warm * 4.2
    };
    return map[shape] || 220;
  }

  targetLevel(intensity) {
    return 0.04 + (Number(intensity) / 100) * 0.18;
  }

  applySettings(intensity, warmth) {
    if (!this.audioContext || !this.currentPreset) return;
    const now = this.audioContext.currentTime;
    const intensityValue = Number(intensity);
    const warmthValue = Number(warmth);
    const filterBase = this.currentPreset.filter || 1400;
    this.filterNode.frequency.cancelScheduledValues(now);
    this.filterNode.frequency.linearRampToValueAtTime(
      Math.max(240, filterBase + warmthValue * 14 - intensityValue * 4),
      now + 0.2
    );

    if (this.noiseNode) {
      this.noiseNode.gain.cancelScheduledValues(now);
      this.noiseNode.gain.linearRampToValueAtTime(0.08 + intensityValue / 100 * 0.28, now + 0.2);
    }
    if (this.toneOsc && this.toneGain) {
      this.toneOsc.frequency.cancelScheduledValues(now);
      this.toneOsc.frequency.linearRampToValueAtTime(this.pickFrequency(this.currentPreset.shape, warmthValue), now + 0.2);
      this.toneGain.gain.cancelScheduledValues(now);
      this.toneGain.gain.linearRampToValueAtTime(0.01 + intensityValue / 100 * 0.045, now + 0.2);
    }
    this.dryGain.gain.cancelScheduledValues(now);
    this.wetGain.gain.cancelScheduledValues(now);
    this.dryGain.gain.linearRampToValueAtTime(0.72 - this.currentPreset.reverb * 0.3, now + 0.2);
    this.wetGain.gain.linearRampToValueAtTime(this.currentPreset.reverb + intensityValue / 100 * 0.08, now + 0.2);
  }

  fadeTo(value, seconds) {
    if (!this.audioContext || !this.masterGain) return;
    const now = this.audioContext.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.linearRampToValueAtTime(value, now + seconds);
  }

  stopSources() {
    [this.noiseSource, this.toneOsc].forEach((node) => {
      if (node) {
        try { node.stop(); } catch (_e) {}
        try { node.disconnect(); } catch (_e) {}
      }
    });
    [this.noiseNode, this.toneGain].forEach((node) => {
      if (node) {
        try { node.disconnect(); } catch (_e) {}
      }
    });
    this.noiseSource = null;
    this.noiseNode = null;
    this.toneOsc = null;
    this.toneGain = null;
  }

  stop() {
    if (!this.audioContext || !this.running) return;
    this.fadeTo(0, 0.5);
    window.setTimeout(() => this.stopSources(), 600);
    this.running = false;
  }

  draw() {
    if (!this.canvas || !this.analyser) return;
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    const dpr = window.devicePixelRatio || 1;
    if (this.canvas.width !== width * dpr || this.canvas.height !== height * dpr) {
      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
    }

    const ctx = this.canvas.getContext("2d");
    const data = new Uint8Array(this.analyser.frequencyBinCount);
    const render = () => {
      if (!this.running && (!this.masterGain || this.masterGain.gain.value < 0.001)) {
        ctx.clearRect(0, 0, width, height);
        return;
      }
      this.drawFrame = requestAnimationFrame(render);
      this.analyser.getByteFrequencyData(data);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      const bars = 72;
      const step = Math.max(1, Math.floor((data.length * 0.65) / bars));
      for (let i = 0; i < bars; i++) {
        let value = 0;
        for (let j = 0; j < step; j++) value = Math.max(value, data[i * step + j] || 0);
        const barHeight = (value / 255) * (height - 10);
        const x = i * (width / bars);
        ctx.fillStyle = "#0f786b";
        ctx.globalAlpha = 0.24 + (value / 255) * 0.7;
        ctx.fillRect(x + 1.5, height - barHeight - 4, (width / bars) - 3, barHeight);
      }
      ctx.globalAlpha = 1;
    };
    cancelAnimationFrame(this.drawFrame);
    render();
  }
}

function initDemoPage() {
  const root = document.querySelector("[data-demo-app]");
  if (!root) return;

  const state = {
    modeId: "speech",
    presetId: "balanced",
    intensity: 62,
    warmth: 55,
    sessionMinutes: 50,
    timerEndsAt: null,
    timerInterval: null,
    running: false
  };

  const elements = {
    modeButtons: [...root.querySelectorAll("[data-mode-button]")],
    title: root.querySelector("[data-mode-title]"),
    subtitle: root.querySelector("[data-mode-subtitle]"),
    promise: root.querySelector("[data-mode-promise]"),
    why: root.querySelector("[data-mode-why]"),
    audience: root.querySelector("[data-mode-audience]"),
    hook: root.querySelector("[data-mode-hook]"),
    tags: root.querySelector("[data-mode-tags]"),
    featureList: root.querySelector("[data-feature-list]"),
    statBestFor: root.querySelector("[data-stat-bestfor]"),
    statSound: root.querySelector("[data-stat-sound]"),
    statIntensity: root.querySelector("[data-stat-intensity]"),
    statSession: root.querySelector("[data-stat-session]"),
    presets: root.querySelector("[data-presets]"),
    startBtn: root.querySelector("[data-start-demo]"),
    stopBtn: root.querySelector("[data-stop-demo]"),
    intensity: root.querySelector("[data-intensity]"),
    warmth: root.querySelector("[data-warmth]"),
    intensityValue: root.querySelector("[data-intensity-value]"),
    warmthValue: root.querySelector("[data-warmth-value]"),
    sessionBar: root.querySelector("[data-session-bar]"),
    timer: root.querySelector("[data-timer]"),
    stateText: root.querySelector("[data-state-text]"),
    summary: root.querySelector("[data-summary]"),
    canvas: root.querySelector("[data-visualizer]")
  };

  const engine = new DeafenEngine(elements.canvas);

  function currentMode() {
    return DEMO_MODES[state.modeId];
  }

  function currentPreset() {
    return currentMode().presets.find((preset) => preset.id === state.presetId) || currentMode().presets[0];
  }

  function formatTime(ms) {
    const total = Math.max(0, Math.ceil(ms / 1000));
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function clearTimer() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
    state.timerEndsAt = null;
  }

  function updateTimerDisplay() {
    if (!state.running || !state.timerEndsAt) {
      elements.timer.textContent = `${state.sessionMinutes}:00`;
      return;
    }
    const remaining = state.timerEndsAt - Date.now();
    elements.timer.textContent = formatTime(remaining);
    if (remaining <= 0) {
      stopPlayback();
    }
  }

  function startTimer() {
    clearTimer();
    state.timerEndsAt = Date.now() + state.sessionMinutes * 60 * 1000;
    state.timerInterval = setInterval(updateTimerDisplay, 250);
    updateTimerDisplay();
  }

  function renderModeButtons() {
    elements.modeButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.modeButton === state.modeId);
    });
  }

  function renderPresets() {
    const mode = currentMode();
    elements.presets.innerHTML = "";
    mode.presets.forEach((preset) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "preset" + (preset.id === state.presetId ? " active" : "");
      button.innerHTML = `<strong>${preset.name}</strong><span>${preset.desc}</span>`;
      button.addEventListener("click", () => {
        state.presetId = preset.id;
        render();
        if (state.running) engine.start(currentPreset(), state.intensity, state.warmth);
      });
      elements.presets.appendChild(button);
    });
  }

  function renderSessions() {
    elements.sessionBar.innerHTML = "";
    SESSION_OPTIONS.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "session-pill" + (option.minutes === state.sessionMinutes ? " active" : "");
      button.textContent = option.label;
      button.addEventListener("click", () => {
        state.sessionMinutes = option.minutes;
        render();
      });
      elements.sessionBar.appendChild(button);
    });
  }

  async function startPlayback() {
    state.running = true;
    await engine.start(currentPreset(), state.intensity, state.warmth);
    startTimer();
    render();
  }

  function stopPlayback() {
    state.running = false;
    clearTimer();
    engine.stop();
    render();
  }

  function render() {
    const mode = currentMode();
    elements.title.textContent = mode.title;
    elements.subtitle.textContent = mode.subtitle;
    elements.promise.textContent = mode.promise;
    elements.why.textContent = mode.why;
    elements.audience.textContent = mode.audience;
    elements.hook.textContent = mode.hook;
    elements.tags.innerHTML = mode.tags.map((tag) => `<span class="chip">${tag}</span>`).join("");
    elements.featureList.innerHTML = mode.features.map((feature) => `<li>${feature}</li>`).join("");
    elements.statBestFor.textContent = mode.stats.bestFor;
    elements.statSound.textContent = currentPreset().name;
    elements.statIntensity.textContent = `${state.intensity}%`;
    elements.statSession.textContent = `${state.sessionMinutes} min`;
    elements.intensity.value = state.intensity;
    elements.warmth.value = state.warmth;
    elements.intensityValue.textContent = `${state.intensity}%`;
    elements.warmthValue.textContent = `${state.warmth}%`;
    elements.stateText.textContent = state.running ? "Live" : "Idle";
    elements.summary.textContent = `${mode.title} is tuned for ${mode.stats.bestFor.toLowerCase()} with the ${currentPreset().name.toLowerCase()} preset.`;
    elements.startBtn.disabled = state.running;
    elements.stopBtn.disabled = !state.running;
    renderModeButtons();
    renderPresets();
    renderSessions();
    updateTimerDisplay();
  }

  elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.modeId = button.dataset.modeButton;
      state.presetId = DEMO_MODES[state.modeId].presets[0].id;
      render();
      if (state.running) engine.start(currentPreset(), state.intensity, state.warmth);
    });
  });

  elements.intensity.addEventListener("input", (event) => {
    state.intensity = Number(event.target.value);
    render();
    if (state.running) engine.applySettings(state.intensity, state.warmth);
  });

  elements.warmth.addEventListener("input", (event) => {
    state.warmth = Number(event.target.value);
    render();
    if (state.running) engine.applySettings(state.intensity, state.warmth);
  });

  elements.startBtn.addEventListener("click", () => {
    startPlayback().catch((error) => {
      console.error(error);
      elements.stateText.textContent = "Audio blocked";
    });
  });

  elements.stopBtn.addEventListener("click", stopPlayback);
  window.addEventListener("beforeunload", () => clearTimer());
  render();
}

document.addEventListener("DOMContentLoaded", initDemoPage);
