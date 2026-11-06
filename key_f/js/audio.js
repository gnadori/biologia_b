// Procedural Web Audio API sound generator for neural pulses and mechanical keystroke

class NeuroAudio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.masterGain = null;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.ctx = new AudioContext();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playStageSound(stageId) {
    if (!this.enabled) return;
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const t = this.ctx.currentTime;
    
    // Different harmonic character for each stage in descending pathway
    const baseFreqs = [
      480, // Stage 1: Prefrontal spark
      540, // Stage 2: Basal ganglia gating burst
      620, // Stage 3: Cerebellar high-frequency loop
      520, // Stage 4: Betz cell giant spike
      420, // Stage 5: Descending brainstem sweep
      340, // Stage 6: Spinal cord synapse
      260, // Stage 7: Peripheral nerve wave
      180  // Stage 8: Muscle contraction & mechanical impact
    ];

    const freq = baseFreqs[stageId - 1] || 440;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = stageId === 8 ? 'triangle' : (stageId <= 3 ? 'sine' : 'sawtooth');
    osc.frequency.setValueAtTime(freq, t);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, t + 0.08);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(stageId === 8 ? 800 : 2400, t);

    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(0.2, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.15);

    // If stage 8: also add mechanical key switch bottom-out click
    if (stageId === 8) {
      this.playMechanicalClick();
    }
  }

  playMechanicalClick() {
    if (!this.enabled || !this.ctx) return;
    const t = this.ctx.currentTime + 0.04;

    // High frequency transient click for switch contact
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(1400, t);
    osc.frequency.exponentialRampToValueAtTime(200, t + 0.035);

    gain.gain.setValueAtTime(0.35, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.05);

    // Low resonant thud for keycap bottoming out on switch plate
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(110, t);
    subOsc.frequency.exponentialRampToValueAtTime(40, t + 0.08);

    subGain.gain.setValueAtTime(0.4, t);
    subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

    subOsc.connect(subGain);
    subGain.connect(this.masterGain);
    subOsc.start(t);
    subOsc.stop(t + 0.09);
  }
}

window.neuroAudio = new NeuroAudio();
