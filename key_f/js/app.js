// Main Application Controller: Bilingual (HU / EN) Neuroscience Simulation Engine

const I18N = {
  hu: {
    brandTitle: "Az „F” billentyű neurodinamikája",
    brandSubtitle: "Elosztott neurális hurok • 165 ms késleltetés • Ellenoldali (kontralaterális) vezérlés",
    strikeFTitle: "ÜSD LE AZ „F” BILLENTYŰT",
    strikeFCaption: "Nyomd meg az <kbd>F</kbd>-et a billentyűzeten",
    audioOn: "Hang: BE",
    audioOff: "Hang: KI",
    activeDomainTag: "Aktív anatómiai terület",
    layerTogglesTitle: "Rétegek és szubrégiók",
    layers: {
      cortex: "Agykéreg (Cortex)",
      basal: "Törzsdúcok és Talamusz",
      cerebellum: "Bal kisagyfélteke",
      brainstem: "Agytörzs és gerincvelő",
      nerves: "Periféria, Kéz & Billentyűzet"
    },
    subregions: {
      dlPFC: "dlPFC (BA 9/46)",
      acc: "ACC (BA 24/32)",
      ppc: "PPC (BA 5/7)",
      sma: "SMA / Premotor (BA 6)",
      rightM1: "M1 Kézkiemelkedés (Hand Knob)",
      striatum: "Striatum (Caudatus/Putamen)",
      globusPallidus: "Globus Pallidus (GPi/GPe)",
      subthalamic: "Subthalamicus mag (STN)",
      thalamus: "VL / VA Talamusz",
      leftCerebellum: "Kisagyi félteke kéreg",
      dentateNucleus: "Dentatus mag (Mélyszerkezet)",
      medullaPyramid: "Nyúltvelői piramisok",
      decussationTract: "Piramiskereszteződés (~90%)",
      cervicalEnlargement: "C7–T1 Rexed lamina IX",
      brachialPlexus: "Karfonat (Plexus brachialis)",
      medianNerve: "Nervus medianus",
      forearmMuscles: "Hajlítóizmok (FDS/FDP)",
      indexFinger: "Bal mutatóujj (Digit II)",
      fKeySwitch: "„F” kapcsoló & tapintási bütyök"
    },
    xrayBtn: "🔍 X-Ray",
    navHint: "🖱 Bal gomb: Forgatás • Jobb gomb: Mozgatás • Görgő: Nagyítás • Ráhúzás: Anatómiai címkék",
    camPresets: {
      whole: "🌐 Teljes hurok",
      cortex: "🧠 Prefrontális kéreg",
      basal: "⚡ Törzsdúcok",
      cerebellum: "🔄 Kisagy",
      decussation: "🔀 Piramiskereszteződés",
      spine: "🧬 C7–T1 szinapszis",
      hand: "⌨️ Bal kéz és „F” billentyű"
    },
    microHeader: "🔬 MIKROSZKOPIKUS ÉS HÁLÓZATI MECHANIZMUS",
    microLive: "ÉLŐ SZIMULÁCIÓ",
    substratesTitle: "Kulcsfontosságú anatómiai struktúrák",
    processTitle: "Neurofiziológiai folyamat",
    takeawaysTitle: "Főbb neurodinamikai összefoglaló",
    stageBadgePrefix: "SZAKASZ",
    stageBadgeOf: "/",
    btnRestart: "⏮ Újra",
    btnPrev: "◀ Előző",
    btnPlay: "<span class=\"icon\">▶</span> Indítás",
    btnPause: "<span class=\"icon\">⏸</span> Szünet",
    btnNext: "Következő ▶",
    speedLabel: "Szimuláció sebessége:",
    speeds: {
      "0.05": "0.05x (Részletes)",
      "0.1": "0.1x (Folyamatos)",
      "0.25": "0.25x (Gyors)",
      "1.0": "1.0x (Valós idő 160ms)"
    }
  },
  en: {
    brandTitle: "NeuroDynamics of the \"F\" Key",
    brandSubtitle: "Distributed Neural Loop • 165 ms Latency • Contralateral Control",
    strikeFTitle: "STRIKE 'F' KEY",
    strikeFCaption: "Press <kbd>F</kbd> on physical keyboard",
    audioOn: "Audio: ON",
    audioOff: "Audio: OFF",
    activeDomainTag: "Active Anatomical Domain",
    layerTogglesTitle: "Layers & Subregions",
    layers: {
      cortex: "Cerebral Cortex",
      basal: "Basal Ganglia & Thalamus",
      cerebellum: "Left Cerebellum",
      brainstem: "Brainstem & Spinal Cord",
      nerves: "Periphery, Hand & Keyboard"
    },
    subregions: {
      dlPFC: "dlPFC (BA 9/46)",
      acc: "ACC (BA 24/32)",
      ppc: "PPC (BA 5/7)",
      sma: "SMA / Premotor (BA 6)",
      rightM1: "M1 Hand Knob (BA 4)",
      striatum: "Striatum (Caudate/Putamen)",
      globusPallidus: "Globus Pallidus (GPi/GPe)",
      subthalamic: "Subthalamic Nucleus (STN)",
      thalamus: "VL / VA Thalamus",
      leftCerebellum: "Cerebellar Cortex",
      dentateNucleus: "Dentate Nucleus (Deep)",
      medullaPyramid: "Medullary Pyramids",
      decussationTract: "Pyramidal Decussation (~90%)",
      cervicalEnlargement: "C7–T1 Rexed lamina IX",
      brachialPlexus: "Brachial Plexus",
      medianNerve: "Median Nerve",
      forearmMuscles: "Forearm Flexors (FDS/FDP)",
      indexFinger: "Left Index Finger (Digit II)",
      fKeySwitch: "'F' Key Switch & Nib"
    },
    xrayBtn: "🔍 X-Ray",
    navHint: "🖱 Left-drag: Rotate • Right-drag: Pan • Scroll: Zoom • Hover on 3D structures for labels",
    camPresets: {
      whole: "🌐 Whole Loop",
      cortex: "🧠 Prefrontal",
      basal: "⚡ Basal Ganglia",
      cerebellum: "🔄 Cerebellum",
      decussation: "🔀 Medullary Decussation",
      spine: "🧬 C7-T1 Synapse",
      hand: "⌨️ Left Hand & 'F' Key"
    },
    microHeader: "🔬 MICROSCOPIC / CIRCUIT MECHANISM",
    microLive: "LIVE SIMULATION",
    substratesTitle: "Critical Anatomical Substrates",
    processTitle: "Neurophysiological Process",
    takeawaysTitle: "Key Neurodynamic Highlights",
    stageBadgePrefix: "STAGE",
    stageBadgeOf: "OF",
    btnRestart: "⏮ Restart",
    btnPrev: "◀ Prev",
    btnPlay: "<span class=\"icon\">▶</span> Play",
    btnPause: "<span class=\"icon\">⏸</span> Pause",
    btnNext: "Next ▶",
    speedLabel: "Simulation Speed:",
    speeds: {
      "0.05": "0.05x (Detailed)",
      "0.1": "0.1x (Smooth)",
      "0.25": "0.25x (Fast)",
      "1.0": "1.0x (Real-time 160ms)"
    }
  }
};

class NeuralFApp {
  constructor() {
    this.currentStageIndex = 0; // 0 to 7
    this.isPlaying = false;
    this.speedMultiplier = 0.05; // Default slow-mo
    this.playbackTimer = null;
    this.currentLang = 'hu'; // Default to Hungarian as requested
    window.currentLang = 'hu';

    this.viewer3D = null;
    this.microViews = null;

    this.init();
  }

  init() {
    // 1. Initialize 3D Viewer
    this.viewer3D = new Brain3DViewer('canvas-3d-container');

    // 2. Initialize Microscopic 2D Canvas
    this.microViews = new MicroViews('micro-canvas-container');

    // 3. Apply Language Translations and Setup UI
    this.applyLanguage();
    this.renderTimeline();
    this.setupEventListeners();

    // 4. Set initial stage
    this.goToStage(1);
  }

  setLanguage(lang) {
    if (this.currentLang === lang) return;
    this.currentLang = lang;
    window.currentLang = lang;

    // Toggle active classes on lang pills
    const btnHu = document.getElementById('btn-lang-hu');
    const btnEn = document.getElementById('btn-lang-en');
    if (btnHu && btnEn) {
      btnHu.classList.toggle('active', lang === 'hu');
      btnEn.classList.toggle('active', lang === 'en');
    }

    this.applyLanguage();
    this.renderTimeline();
    const stage = STAGES_DATA[this.currentStageIndex];
    this.updateUI(stage);
    if (this.microViews) this.microViews.render();
  }

  applyLanguage() {
    const t = I18N[this.currentLang];
    if (!t) return;

    // Brand and header
    const brandTitle = document.getElementById('brand-title');
    if (brandTitle) brandTitle.textContent = t.brandTitle;
    const brandSub = document.getElementById('brand-subtitle');
    if (brandSub) brandSub.textContent = t.brandSubtitle;

    // Keycap trigger text
    const keyTitle = document.getElementById('keycap-caption-title');
    if (keyTitle) keyTitle.textContent = t.strikeFTitle;
    const keySub = document.getElementById('keycap-caption-sub');
    if (keySub) keySub.innerHTML = t.strikeFCaption;

    // Audio status
    const soundLabel = document.getElementById('sound-label');
    if (soundLabel) {
      soundLabel.textContent = window.neuroAudio.enabled ? t.audioOn : t.audioOff;
    }

    // Viewport HUD Tag
    const hudTag = document.querySelector('.viewport-hud .hud-tag');
    if (hudTag) hudTag.textContent = t.activeDomainTag;

    // Layer checkboxes title & labels
    const layerTitle = document.getElementById('layer-toggle-title');
    if (layerTitle) layerTitle.textContent = t.layerTogglesTitle;

    const xrayBtn = document.getElementById('btn-xray-toggle');
    if (xrayBtn) xrayBtn.textContent = t.xrayBtn;

    document.querySelectorAll('.group-title').forEach(span => {
      const k = span.dataset.i18nKey;
      if (k && t.layers[k]) span.textContent = t.layers[k];
    });

    document.querySelectorAll('.sub-name').forEach(span => {
      const sk = span.dataset.i18nSub;
      if (sk && t.subregions[sk]) span.textContent = t.subregions[sk];
    });

    // Nav hint
    const navHint = document.querySelector('.nav-hint');
    if (navHint) navHint.textContent = t.navHint;

    // Camera preset buttons
    document.querySelectorAll('.camera-preset-btn').forEach(btn => {
      const preset = btn.dataset.preset;
      if (t.camPresets[preset]) btn.textContent = t.camPresets[preset];
    });

    // Micro view header
    const microHeaderSpan = document.querySelector('.micro-view-header span:first-child');
    if (microHeaderSpan) microHeaderSpan.textContent = t.microHeader;
    const microLiveSpan = document.querySelector('.micro-view-header span:last-child');
    if (microLiveSpan) microLiveSpan.textContent = t.microLive;

    // Section titles
    const sections = document.querySelectorAll('.side-panel .section-title');
    if (sections[0]) sections[0].textContent = t.substratesTitle;
    if (sections[1]) sections[1].textContent = t.processTitle;
    if (sections[2]) sections[2].textContent = t.takeawaysTitle;

    // Control buttons
    const btnRestart = document.getElementById('btn-restart');
    if (btnRestart) btnRestart.textContent = t.btnRestart;
    const btnPrev = document.getElementById('btn-prev');
    if (btnPrev) btnPrev.textContent = t.btnPrev;
    const btnPlay = document.getElementById('btn-play');
    if (btnPlay) btnPlay.innerHTML = this.isPlaying ? t.btnPause : t.btnPlay;
    const btnNext = document.getElementById('btn-next');
    if (btnNext) btnNext.textContent = t.btnNext;

    // Speed labels
    const speedGroupSpan = document.querySelector('.speed-selector-group > span');
    if (speedGroupSpan) speedGroupSpan.textContent = t.speedLabel;

    document.querySelectorAll('.speed-btn').forEach(btn => {
      const sp = btn.dataset.speed;
      if (t.speeds[sp]) btn.textContent = t.speeds[sp];
    });
  }

  renderTimeline() {
    const timelineContainer = document.getElementById('timeline-stages');
    timelineContainer.innerHTML = '';
    const lang = this.currentLang;

    STAGES_DATA.forEach((stage, idx) => {
      const data = stage[lang] || stage.en;
      const stepBtn = document.createElement('button');
      stepBtn.className = `timeline-step-btn ${idx === this.currentStageIndex ? 'active' : ''}`;
      stepBtn.dataset.index = idx;
      stepBtn.innerHTML = `
        <span class="step-num">${stage.id}</span>
        <span class="step-title">${data.subtitle.split('&')[0].split('(')[0].trim()}</span>
        <span class="step-time">${data.timeRange.replace('to', '→').replace('-tól', '→').replace('-ig', '')}</span>
      `;
      stepBtn.addEventListener('click', () => {
        this.pause();
        this.goToStage(stage.id);
      });
      timelineContainer.appendChild(stepBtn);
    });
  }

  setupEventListeners() {
    // Language toggle pills
    const btnHu = document.getElementById('btn-lang-hu');
    const btnEn = document.getElementById('btn-lang-en');
    if (btnHu) btnHu.addEventListener('click', () => this.setLanguage('hu'));
    if (btnEn) btnEn.addEventListener('click', () => this.setLanguage('en'));

    // Global Keyboard Listener: Press 'F' or 'f' to trigger!
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        this.triggerFPress();
      } else if (e.code === 'Space') {
        e.preventDefault();
        this.togglePlay();
      } else if (e.key === 'ArrowRight') {
        this.pause();
        this.nextStage();
      } else if (e.key === 'ArrowLeft') {
        this.pause();
        this.prevStage();
      }
    });

    // Big interactive "PRESS 'F'" trigger button
    const bigFBtn = document.getElementById('big-f-trigger');
    if (bigFBtn) {
      bigFBtn.addEventListener('click', () => this.triggerFPress());
    }

    // Playback buttons
    document.getElementById('btn-play').addEventListener('click', () => this.togglePlay());
    document.getElementById('btn-prev').addEventListener('click', () => { this.pause(); this.prevStage(); });
    document.getElementById('btn-next').addEventListener('click', () => { this.pause(); this.nextStage(); });
    document.getElementById('btn-restart').addEventListener('click', () => {
      this.pause();
      this.goToStage(1);
    });

    // Speed selector buttons
    document.querySelectorAll('.speed-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.speedMultiplier = parseFloat(e.currentTarget.dataset.speed);
      });
    });

    // Sound toggle button
    const soundBtn = document.getElementById('btn-sound-toggle');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        const isEnabled = window.neuroAudio.toggle();
        soundBtn.classList.toggle('muted', !isEnabled);
        const t = I18N[this.currentLang];
        document.getElementById('sound-label').textContent = isEnabled ? t.audioOn : t.audioOff;
      });
    }

    // Camera preset view buttons
    document.querySelectorAll('.camera-preset-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const preset = e.currentTarget.dataset.preset;
        this.applyCameraPreset(preset);
      });
    });

    // Accordion group toggles
    document.querySelectorAll('.layer-group-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const group = e.currentTarget.dataset.group;
        const subContainer = document.querySelector(`.layer-subregions[data-group="${group}"]`);
        const isExp = btn.classList.toggle('expanded');
        if (subContainer) subContainer.classList.toggle('open', isExp);
      });
    });

    // Parent layer toggle checkboxes
    document.querySelectorAll('.layer-toggle').forEach(input => {
      input.addEventListener('change', (e) => {
        const layer = e.currentTarget.dataset.layer;
        const visible = e.currentTarget.checked;
        this.toggleLayer(layer, visible);

        // Sync all subregion checkboxes in this group
        const groupEl = e.currentTarget.closest('.layer-group');
        if (groupEl) {
          groupEl.querySelectorAll('.subregion-toggle').forEach(subChk => {
            subChk.checked = visible;
            const sub = subChk.dataset.sub;
            this.viewer3D.toggleSubregion(sub, visible);
          });
        }
      });
    });

    // Subregion checkboxes
    document.querySelectorAll('.subregion-toggle').forEach(chk => {
      chk.addEventListener('change', (e) => {
        const sub = e.currentTarget.dataset.sub;
        this.viewer3D.toggleSubregion(sub, e.currentTarget.checked);
      });
    });

    // Focus target buttons
    document.querySelectorAll('.btn-focus-sub').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const focusKey = e.currentTarget.dataset.focus;
        this.applyCameraPreset(focusKey);
      });
    });

    // X-Ray toggle button
    const xrayBtn = document.getElementById('btn-xray-toggle');
    if (xrayBtn) {
      xrayBtn.addEventListener('click', () => {
        this.isXray = !this.isXray;
        xrayBtn.classList.toggle('active', this.isXray);
        this.viewer3D.setXRayMode(this.isXray);
      });
    }
  }

  triggerFPress() {
    const bigFBtn = document.getElementById('big-f-trigger');
    if (bigFBtn) {
      bigFBtn.classList.add('depressed');
      setTimeout(() => bigFBtn.classList.remove('depressed'), 250);
    }

    this.goToStage(1);
    this.play();
  }

  play() {
    this.isPlaying = true;
    const playBtn = document.getElementById('btn-play');
    const t = I18N[this.currentLang];
    if (playBtn) playBtn.innerHTML = t.btnPause;

    this.runPlaybackStep();
  }

  pause() {
    this.isPlaying = false;
    clearTimeout(this.playbackTimer);
    const playBtn = document.getElementById('btn-play');
    const t = I18N[this.currentLang];
    if (playBtn) playBtn.innerHTML = t.btnPlay;
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      if (this.currentStageIndex >= STAGES_DATA.length - 1) {
        this.goToStage(1);
      }
      this.play();
    }
  }

  runPlaybackStep() {
    if (!this.isPlaying) return;

    const currentStage = STAGES_DATA[this.currentStageIndex];
    const stepDuration = Math.max(currentStage.durationMs / this.speedMultiplier, 60);

    this.playbackTimer = setTimeout(() => {
      if (!this.isPlaying) return;

      if (this.currentStageIndex < STAGES_DATA.length - 1) {
        this.goToStage(this.currentStageIndex + 2); // 1-based stage id
        this.runPlaybackStep();
      } else {
        this.pause();
      }
    }, stepDuration);
  }

  goToStage(stageId) {
    const idx = stageId - 1;
    if (idx < 0 || idx >= STAGES_DATA.length) return;

    this.currentStageIndex = idx;
    const stage = STAGES_DATA[idx];

    // 1. Update 3D Model
    this.viewer3D.setStage(stage.id);

    // 2. Update Micro-Canvas
    this.microViews.setStage(stage.id);

    // 3. Audio feedback
    window.neuroAudio.playStageSound(stage.id);

    // 4. Update UI Text and Panels
    this.updateUI(stage);
  }

  nextStage() {
    if (this.currentStageIndex < STAGES_DATA.length - 1) {
      this.goToStage(this.currentStageIndex + 2);
    }
  }

  prevStage() {
    if (this.currentStageIndex > 0) {
      this.goToStage(this.currentStageIndex);
    }
  }

  updateUI(stage) {
    const lang = this.currentLang;
    const data = stage[lang] || stage.en;
    const t = I18N[lang];

    // Stage Header
    document.getElementById('stage-number-badge').textContent = `${t.stageBadgePrefix} ${stage.id} ${t.stageBadgeOf} 8`;
    document.getElementById('stage-timer-badge').textContent = data.timeRange;
    document.getElementById('stage-main-title').textContent = data.title;
    document.getElementById('stage-subtitle').textContent = data.subtitle;

    const hudStage = document.getElementById('hud-stage-name');
    if (hudStage) hudStage.textContent = `${data.subtitle} (${data.timeRange})`;

    // Timeline Buttons active status
    document.querySelectorAll('.timeline-step-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === this.currentStageIndex);
    });

    // Progress bar fill percentage
    const progressPct = ((this.currentStageIndex + 1) / STAGES_DATA.length) * 100;
    document.getElementById('timeline-progress-bar').style.width = `${progressPct}%`;

    // Millisecond HUD counter
    const msNum = (stage.id === 8 ? 165 : (stage.id - 1) * 22);
    document.getElementById('hud-ms-counter').textContent = `T + ${msNum} ms`;

    // Narrative Description
    const descElem = document.getElementById('stage-description-text');
    descElem.innerHTML = data.description;

    // Anatomical Structures List
    const structContainer = document.getElementById('structures-list');
    structContainer.innerHTML = '';
    data.structures.forEach(s => {
      const item = document.createElement('div');
      item.className = 'structure-card';
      item.innerHTML = `
        <div class="structure-name">
          <span class="pulse-dot"></span>
          ${s.name}
        </div>
        <div class="structure-role">${s.role}</div>
      `;
      structContainer.appendChild(item);
    });

    // Key Scientific Takeaways
    const takeawaysList = document.getElementById('key-takeaways-list');
    takeawaysList.innerHTML = '';
    data.keyPoints.forEach(p => {
      const li = document.createElement('li');
      li.innerHTML = p;
      takeawaysList.appendChild(li);
    });

    // Auto-render KaTeX math notations
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(descElem, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\(', right: '\\)', display: false},
            {left: '\\[', right: '\\]', display: true}
          ],
          throwOnError: false
        });
        window.renderMathInElement(takeawaysList, {
          delimiters: [
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
        });
      } catch (err) {
        console.warn('KaTeX render error:', err);
      }
    }
  }

  applyCameraPreset(preset) {
    if (!this.viewer3D) return;

    const presets = {
      whole: { x: 0, y: -1.5, z: 12.5, tx: 0, ty: -1.5, tz: 0 },
      cortex: { x: 4.8, y: 4.5, z: 5.5, tx: 1.0, ty: 2.5, tz: 0.5 },
      basal: { x: 3.5, y: 3.0, z: 4.2, tx: 0.6, ty: 1.5, tz: 0.0 },
      cerebellum: { x: -3.8, y: 1.8, z: 5.0, tx: -0.8, ty: 0.5, tz: -0.8 },
      decussation: { x: 2.2, y: 0.2, z: 3.6, tx: 0.0, ty: 0.0, tz: -0.2 },
      spine: { x: -1.5, y: -2.0, z: 3.8, tx: -0.2, ty: -2.4, tz: -0.4 },
      hand: { x: -2.0, y: -6.0, z: 3.4, tx: -1.1, ty: -6.4, tz: 0.4 }
    };

    const target = presets[preset];
    if (target) {
      this.viewer3D.targetCameraPos.set(target.x, target.y, target.z);
      this.viewer3D.targetCameraLookAt.set(target.tx, target.ty, target.tz);
      this.viewer3D.isCameraTweening = true;
      this.viewer3D.cameraTweenStart = this.viewer3D.clock.getElapsedTime();
      this.viewer3D.startCamPos = this.viewer3D.camera.position.clone();
      this.viewer3D.startCamLookAt = this.viewer3D.controls.target.clone();
    }
  }

  toggleLayer(layer, isVisible) {
    if (!this.viewer3D) return;

    const v = this.viewer3D;
    switch (layer) {
      case 'cortex':
        ['rightHemisphere', 'leftHemisphere', 'dlPFC', 'acc', 'ppc', 'sma', 'rightM1'].forEach(k => {
          if (v.structures[k]) v.structures[k].visible = isVisible;
        });
        break;
      case 'basal':
        ['striatum', 'globusPallidus', 'subthalamic', 'thalamus'].forEach(k => {
          if (v.structures[k]) v.structures[k].visible = isVisible;
        });
        break;
      case 'cerebellum':
        ['leftCerebellum', 'dentateNucleus'].forEach(k => {
          if (v.structures[k]) v.structures[k].visible = isVisible;
        });
        break;
      case 'brainstem':
        ['brainstem', 'medullaPyramid', 'decussationTract', 'spinalCord', 'cervicalEnlargement'].forEach(k => {
          if (v.structures[k]) v.structures[k].visible = isVisible;
        });
        break;
      case 'nerves':
        ['brachialPlexus', 'medianNerve', 'forearmMuscles', 'handModel', 'keyboardChassis'].forEach(k => {
          if (v.structures[k]) v.structures[k].visible = isVisible;
        });
        break;
      case 'hand':
        if (v.structures.handModel) v.structures.handModel.visible = isVisible;
        break;
      case 'keyboard':
        if (v.structures.keyboardChassis) v.structures.keyboardChassis.visible = isVisible;
        break;
    }
  }
}

// Instantiate on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.neuralApp = new NeuralFApp();
});
