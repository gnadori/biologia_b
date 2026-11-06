// Interactive Canvas & SVG Visualizers for Microscopic and Circuit-Level Stages

// Safe polyfill for roundRect if not available
if (typeof CanvasRenderingContext2D !== 'undefined' && !CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.beginPath();
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
    return this;
  };
}

class MicroViews {
  constructor(canvasContainerId) {
    this.container = document.getElementById(canvasContainerId);
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.container.appendChild(this.canvas);
    this.currentStageId = 1;
    this.animTime = 0;
    this.running = true;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  resize() {
    const rect = this.container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.width = rect.width || 480;
    this.height = rect.height || 340;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(dpr, dpr);
  }

  setStage(stageId) {
    this.currentStageId = stageId;
  }

  animate(time) {
    this.animTime = time * 0.001;
    this.render();
    requestAnimationFrame(this.animate);
  }

  render() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const lang = window.currentLang || 'hu';

    // Background gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, '#0c1220');
    bgGrad.addColorStop(1, '#070a12');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Grid lines for high-tech HUD look
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.05)';
    ctx.lineWidth = 1;
    const step = 24;
    for (let x = 0; x < w; x += step) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += step) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    // Switch between microscopic stage views
    switch (this.currentStageId) {
      case 1:
        this.renderPrefrontalNetwork(ctx, w, h, lang);
        break;
      case 2:
        this.renderBasalGangliaLoop(ctx, w, h, lang);
        break;
      case 3:
        this.renderCerebellarCircuit(ctx, w, h, lang);
        break;
      case 4:
        this.renderBetzDepolarization(ctx, w, h, lang);
        break;
      case 5:
        this.renderPyramidalDecussation(ctx, w, h, lang);
        break;
      case 6:
        this.renderSpinalCMMonodynapse(ctx, w, h, lang);
        break;
      case 7:
        this.renderPeripheralConduction(ctx, w, h, lang);
        break;
      case 8:
        this.renderNMJCrossbridge(ctx, w, h, lang);
        break;
      default:
        this.renderPrefrontalNetwork(ctx, w, h, lang);
    }
  }

  // Helper badge
  drawBadge(ctx, text, x, y, color = '#38bdf8') {
    ctx.save();
    ctx.font = '600 11px system-ui, -apple-system, sans-serif';
    const textWidth = ctx.measureText(text).width;
    const pad = 7;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(x - textWidth/2 - pad, y - 10, textWidth + pad * 2, 20, 6);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y);
    ctx.restore();
  }

  // Stage 1: Prefrontal goal and coordinate transformation
  renderPrefrontalNetwork(ctx, w, h, lang) {
    ctx.save();
    const t = this.animTime;

    // Header label
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px system-ui';
    const header = lang === 'hu'
      ? 'ELÜLSŐ PREFRONTÁLIS ÉS FALI KOORDINÁTA-INTEGRÁCIÓ'
      : 'ANTERIOR PREFRONTAL & PARIETAL COORDINATE INTEGRATION';
    ctx.fillText(header, 20, 24);

    // Three node clusters: dlPFC, ACC, PPC
    const nodes = [
      { id: 'dlPFC', label: 'dlPFC (BA 9/46)', sub: lang === 'hu' ? 'Cél: „Üsd le az \'f\'-et”' : 'Goal: "Type \'f\'"', x: w * 0.25, y: h * 0.45, color: '#38bdf8' },
      { id: 'ACC', label: 'ACC (BA 24/32)', sub: lang === 'hu' ? 'Fókuszált figyelem' : 'Focal Attention', x: w * 0.50, y: h * 0.25, color: '#ec4899' },
      { id: 'PPC', label: 'PPC (BA 5/7)', sub: lang === 'hu' ? 'Téri tapintási térkép' : 'Spatial Nib Map', x: w * 0.75, y: h * 0.50, color: '#a855f7' }
    ];

    // Pulsing connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const n1 = nodes[i];
        const n2 = nodes[j];
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.3)';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.stroke();
        ctx.setLineDash([]);

        // Animated pulse packet
        const progress = ((t * 0.8) + i * 0.3) % 1;
        const px = n1.x + (n2.x - n1.x) * progress;
        const py = n1.y + (n2.y - n1.y) * progress;
        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Draw tactile 'F' key nib coordinate vector
    const keyX = w * 0.75;
    const keyY = h * 0.82;
    ctx.fillStyle = 'rgba(30, 41, 59, 0.8)';
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(keyX - 35, keyY - 20, 70, 40, 8);
    ctx.fill();
    ctx.stroke();

    // Keycap text and tactile ridge
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('F', keyX, keyY);
    // Tactile bump
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(keyX - 8, keyY + 8, 16, 3);
    ctx.font = '10px system-ui';
    ctx.fillText(lang === 'hu' ? 'tapintási bütyök' : 'tactile ridge', keyX, keyY + 22);

    // Vector line from F key to PPC
    ctx.strokeStyle = 'rgba(168, 85, 247, 0.7)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(keyX, keyY - 20);
    ctx.lineTo(nodes[2].x, nodes[2].y + 30);
    ctx.stroke();

    // Draw nodes
    nodes.forEach(n => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      ctx.strokeStyle = n.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(n.x, n.y, 32, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Pulsing glow ring
      const ringScale = 32 + Math.sin(t * 3) * 4;
      ctx.strokeStyle = `${n.color}44`;
      ctx.beginPath();
      ctx.arc(n.x, n.y, ringScale, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 11px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(n.id, n.x, n.y - 4);
      ctx.font = '9px system-ui';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText(n.sub, n.x, n.y + 10);
    });

    ctx.restore();
  }

  // Stage 2: Basal Ganglia Direct & Indirect Gating
  renderBasalGangliaLoop(ctx, w, h, lang) {
    ctx.save();
    const t = this.animTime;

    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px system-ui';
    const header = lang === 'hu'
      ? 'TÖRZSDÚCI KAPUZÁS: DIREKT (D1) vs INDIREKT (D2) / HIPERDIREKT'
      : 'BASAL GANGLIA GATING: DIRECT (D1) vs INDIRECT (D2) / HYPERDIRECT';
    ctx.fillText(header, 20, 24);

    // Nodes
    const cortex = { x: w * 0.5, y: h * 0.16, label: lang === 'hu' ? 'Kéreg (M1 / PMA)' : 'Cortex (M1 / PMA)', col: '#38bdf8' };
    const striatum = { x: w * 0.5, y: h * 0.38, label: lang === 'hu' ? 'Striatum (Caudatus/Putamen)' : 'Striatum (Caudate/Putamen)', col: '#fbbf24' };
    const gpi = { x: w * 0.3, y: h * 0.64, label: lang === 'hu' ? 'GPi / SNr (Szűrő)' : 'GPi / SNr (Filter)', col: '#ef4444' };
    const stn = { x: w * 0.72, y: h * 0.60, label: lang === 'hu' ? 'STN (Hiperdirekt fék)' : 'STN (Hyperdirect Brake)', col: '#ec4899' };
    const thalamus = { x: w * 0.28, y: h * 0.38, label: lang === 'hu' ? 'VL/VA Talamusz' : 'VL/VA Thalamus', col: '#10b981' };

    // Function to draw arrow
    const drawArrow = (from, to, color, label, isDashed = false, pulseSpeed = 1) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      if (isDashed) ctx.setLineDash([4, 4]);
      else ctx.setLineDash([]);

      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();
      ctx.setLineDash([]);

      // Pulse particle
      const p = (t * pulseSpeed) % 1;
      const px = from.x + (to.x - from.x) * p;
      const py = from.y + (to.y - from.y) * p;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(px, py, 4, 0, Math.PI * 2);
      ctx.fill();

      // Midpoint label
      if (label) {
        const mx = (from.x + to.x) / 2;
        const my = (from.y + to.y) / 2;
        ctx.fillStyle = color;
        ctx.font = '9px system-ui';
        ctx.fillText(label, mx + 6, my);
      }
    };

    // 1. Excitatory Cortex -> Striatum (Glutamate +)
    drawArrow(cortex, striatum, '#38bdf8', '+ Glu', false, 1.2);
    // 2. Direct D1 Striatum -> GPi (GABA -) Inhibits the inhibitor!
    drawArrow(striatum, gpi, '#fbbf24', '- D1 (GABA)', false, 1.5);
    // 3. Hyperdirect Cortex -> STN (+) & Indirect STN -> GPi (+)
    drawArrow(cortex, stn, '#ec4899', lang === 'hu' ? '+ Gyors hiperdirekt' : '+ Fast Hyperdirect', true, 1.1);
    drawArrow(stn, gpi, '#ec4899', lang === 'hu' ? '+ Glu (Szomszédok gátlása)' : '+ Glu (Suppresses Surrounds)', false, 1.0);
    // 4. GPi -> Thalamus (Disinhibited!)
    drawArrow(gpi, thalamus, '#10b981', lang === 'hu' ? 'FELSZABADÍTVA!' : 'DISINHIBITED!', false, 1.4);
    // 5. Thalamus -> Cortex (+) Feedback clearance
    drawArrow(thalamus, cortex, '#10b981', lang === 'hu' ? '+ Engedélyező kisülés' : '+ Clearance Burst', false, 1.8);

    // Draw node boxes
    [cortex, striatum, gpi, stn, thalamus].forEach(n => {
      this.drawBadge(ctx, n.label, n.x, n.y, n.col);
    });

    // Clearance Status Banner
    ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(w * 0.12, h * 0.84, w * 0.76, 36, 8);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 11px system-ui';
    ctx.textAlign = 'center';
    const statusText = lang === 'hu'
      ? 'ÁLLAPOT: MOTOROS JÓVÁHAGYÁS MEGADVA (BAL II. MUTATÓUJJ)'
      : 'STATUS: MOTOR CLEARANCE GRANTED FOR LEFT DIGIT II';
    ctx.fillText(statusText, w * 0.5, h * 0.84 + 16);
    ctx.font = '10px system-ui';
    ctx.fillStyle = '#94a3b8';
    const subStatus = lang === 'hu'
      ? 'A környező ujjmozgásokat a subthalamicus mag (STN) elnyomja'
      : 'Competing adjacent finger synergies clamped via STN';
    ctx.fillText(subStatus, w * 0.5, h * 0.84 + 28);

    ctx.restore();
  }

  // Stage 3: Cerebellar loop & Force forward model
  renderCerebellarCircuit(ctx, w, h, lang) {
    ctx.save();
    const t = this.animTime;

    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px system-ui';
    const header = lang === 'hu'
      ? 'KISAGYI ELŐRECSATOLÓ MODELL ÉS MECHANIKAI ERŐKALIBRÁCIÓ'
      : 'CEREBELLAR FORWARD MODEL & MECHANICAL FORCE CALIBRATION';
    ctx.fillText(header, 20, 24);

    // Draw Purkinje cell arborization graphic
    const cx = w * 0.35;
    const cy = h * 0.55;

    // Dendritic tree
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx, cy + 30);
    ctx.lineTo(cx, cy - 20);
    // branches
    const branch = (x, y, len, angle, depth) => {
      if (depth <= 0) return;
      const x2 = x + len * Math.cos(angle);
      const y2 = y + len * Math.sin(angle);
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      branch(x2, y2, len * 0.7, angle - 0.45, depth - 1);
      branch(x2, y2, len * 0.7, angle + 0.45, depth - 1);
    };
    branch(cx, cy - 20, 36, -Math.PI / 2, 4);
    ctx.stroke();

    // Soma
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(cx, cy + 30, 8, 0, Math.PI * 2);
    ctx.fill();
    this.drawBadge(ctx, lang === 'hu' ? 'Purkinje-sejt' : 'Purkinje Cell', cx, cy + 50, '#38bdf8');

    // Parallel fibers crossing
    ctx.strokeStyle = 'rgba(234, 179, 8, 0.35)';
    ctx.lineWidth = 2;
    for (let i = -2; i <= 2; i++) {
      ctx.beginPath();
      ctx.moveTo(cx - 70, cy - 40 + i * 15);
      ctx.lineTo(cx + 70, cy - 40 + i * 15);
      ctx.stroke();
    }
    ctx.fillStyle = '#facc15';
    ctx.font = '9px system-ui';
    ctx.fillText(lang === 'hu' ? 'Párhuzamos rostok (Szemcsesejtek)' : 'Parallel Fibers (Granule Cells)', cx - 60, cy - 75);

    // Force Gauge on right side (~45 - 60g)
    const gx = w * 0.74;
    const gy = h * 0.55;
    const gRadius = 55;

    ctx.strokeStyle = 'rgba(148, 163, 184, 0.3)';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(gx, gy, gRadius, Math.PI * 0.75, Math.PI * 2.25);
    ctx.stroke();

    // Target resistance green zone (45-60g)
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(gx, gy, gRadius, Math.PI * 1.3, Math.PI * 1.7);
    ctx.stroke();

    // Animated Needle
    const calibratedForce = 52 + Math.sin(t * 4) * 3; // around 52 grams
    const needleAngle = Math.PI * 0.75 + (calibratedForce / 80) * (Math.PI * 1.5);
    ctx.strokeStyle = '#f43f5e';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(gx, gy);
    ctx.lineTo(gx + (gRadius - 10) * Math.cos(needleAngle), gy + (gRadius - 10) * Math.sin(needleAngle));
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(gx, gy, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 15px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText(`${calibratedForce.toFixed(1)} g`, gx, gy + 32);
    ctx.font = '10px system-ui';
    ctx.fillStyle = '#34d399';
    ctx.fillText(lang === 'hu' ? 'Kapcsoló rugó célzóna (45–60g)' : 'Switch Spring Target (45–60g)', gx, gy + 48);

    ctx.restore();
  }

  // Stage 4: Betz cell Layer V depolarization
  renderBetzDepolarization(ctx, w, h, lang) {
    ctx.save();
    const t = this.animTime;

    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px system-ui';
    const header = lang === 'hu'
      ? 'ELSŐDLEGES MOTOROS KÉREG (M1) - V. RÉTEGŰ BETZ-PIRAMISSEJT'
      : 'PRIMARY MOTOR CORTEX (M1) - LAYER V BETZ PYRAMIDAL CELL';
    ctx.fillText(header, 20, 24);

    // Left: Schematic Betz Soma and apical dendrite
    const bx = w * 0.28;
    const by = h * 0.58;

    // Apical dendrite pointing up
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(bx, by);
    ctx.lineTo(bx, by - 80);
    // apical tuft
    ctx.lineTo(bx - 30, by - 120);
    ctx.moveTo(bx, by - 80);
    ctx.lineTo(bx + 30, by - 120);
    ctx.stroke();

    // Large pyramidal soma
    ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(bx, by - 15);
    ctx.lineTo(bx + 26, by + 28);
    ctx.lineTo(bx - 26, by + 28);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Axon initial segment plunging downward
    ctx.strokeStyle = '#f43f5e';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(bx, by + 28);
    ctx.lineTo(bx, by + 90);
    ctx.stroke();

    this.drawBadge(ctx, lang === 'hu' ? 'Óriás Betz-sejt' : 'Giant Betz Cell', bx, by + 6, '#38bdf8');
    this.drawBadge(ctx, lang === 'hu' ? 'Axondomb (Magas Nav1.6)' : 'Axon Hillock (High Nav1.6)', bx, by + 105, '#f43f5e');

    // Right: Oscilloscope trace of Action Potential Vm (mV)
    const ox = w * 0.55;
    const oy = h * 0.28;
    const ow = w * 0.4;
    const oh = h * 0.55;

    // Scope frame
    ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(ox, oy, ow, oh, 8);
    ctx.fill();
    ctx.stroke();

    // Scope grid
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.1)';
    ctx.lineWidth = 1;
    for (let gy = oy + 20; gy < oy + oh; gy += 25) {
      ctx.beginPath(); ctx.moveTo(ox, gy); ctx.lineTo(ox + ow, gy); ctx.stroke();
    }

    // Voltage labels
    ctx.fillStyle = '#64748b';
    ctx.font = '9px monospace';
    ctx.fillText('+30 mV', ox + 6, oy + 25);
    ctx.fillText('  0 mV', ox + 6, oy + 55);
    ctx.fillText(lang === 'hu' ? '-55 mV (Küszöb)' : '-55 mV (Threshold)', ox + 6, oy + 85);
    ctx.fillText(lang === 'hu' ? '-70 mV (Nyugalmi)' : '-70 mV (RMP)', ox + 6, oy + 115);

    // Action potential waveform
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 8;
    ctx.beginPath();

    for (let x = 0; x < ow - 40; x += 3) {
      const px = ox + 35 + x;
      const normalizedX = x / (ow - 40);
      let v = 0;
      // spike shape at ~0.5
      const dist = (normalizedX - 0.45);
      if (Math.abs(dist) < 0.15) {
        v = Math.exp(-dist * dist * 140) * 85;
      }
      const py = oy + 115 - v;
      if (x === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Running pulse point
    const sweepX = ox + 35 + ((t * 80) % (ow - 40));
    ctx.fillStyle = '#22d3ee';
    ctx.beginPath();
    ctx.arc(sweepX, oy + 50, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  // Stage 5: Pyramidal Decussation in Medulla
  renderPyramidalDecussation(ctx, w, h, lang) {
    ctx.save();
    const t = this.animTime;

    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px system-ui';
    const header = lang === 'hu'
      ? 'NYÚLTVELŐI PIRAMISOK ÉS KERESZTEZŐDÉS (~85–90% ÁTKERESZTEZŐDÉS)'
      : 'MEDULLARY PYRAMIDS & MIDLINE DECUSSATION (~85–90% CROSSING)';
    ctx.fillText(header, 20, 24);

    const midX = w * 0.5;
    const topY = h * 0.2;
    const decussY = h * 0.58;
    const botY = h * 0.88;

    // Midline dashed axis
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(midX, topY - 10);
    ctx.lineTo(midX, botY + 15);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#64748b';
    ctx.font = '10px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText(lang === 'hu' ? 'ANATÓMIAI KÖZÉPVONAL' : 'ANATOMICAL MIDLINE', midX, topY - 15);
    ctx.fillText(lang === 'hu' ? 'JOBB (Kontralaterális M1)' : 'RIGHT (Contralateral M1)', midX + 90, topY - 15);
    ctx.fillText(lang === 'hu' ? 'BAL (Végrehajtó kéz)' : 'LEFT (Effector Hand)', midX - 90, topY - 15);

    // Right Medullary Pyramid descending fibers
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;

    // 1. The ~90% crossing fibers (Decussation to Left LCST)
    for (let i = 0; i < 6; i++) {
      const offset = (i - 2.5) * 6;
      ctx.beginPath();
      ctx.moveTo(midX + 45 + offset, topY);
      ctx.lineTo(midX + 35 + offset, decussY - 20);
      // Crossing curve
      ctx.bezierCurveTo(
        midX + 20, decussY,
        midX - 20, decussY,
        midX - 45 - offset, decussY + 30
      );
      ctx.lineTo(midX - 45 - offset, botY);
      ctx.stroke();

      // Traveling pulse
      const p = ((t * 1.2) + i * 0.15) % 1;
      const px = p < 0.35 
        ? midX + 45 + offset 
        : (p < 0.7 ? midX + 45 - (90 + offset * 2) * ((p - 0.35)/0.35) : midX - 45 - offset);
      const py = topY + (botY - topY) * p;
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(px, py, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // 2. The 10% uncrossed anterior corticospinal tract
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(midX + 25, topY);
    ctx.lineTo(midX + 25, botY);
    ctx.stroke();
    ctx.fillStyle = '#94a3b8';
    ctx.font = '9px system-ui';
    ctx.fillText(lang === 'hu' ? '~10% keresztezetlen' : '~10% uncrossed', midX + 25, botY + 12);

    // Callout labels
    this.drawBadge(ctx, lang === 'hu' ? 'Jobb gyrus precentralis axonok' : 'Right Precentral Gyrus Axons', midX + 90, topY + 40, '#38bdf8');
    this.drawBadge(ctx, lang === 'hu' ? 'Piramiskereszteződés' : 'Pyramidal Decussation', midX, decussY, '#f43f5e');
    this.drawBadge(ctx, lang === 'hu' ? 'Bal oldalsó pálya (LCST)' : 'Left Lateral Corticospinal Tract (LCST)', midX - 85, botY - 20, '#10b981');

    ctx.restore();
  }

  // Stage 6: Spinal Cord Rexed Lamina IX CM Synapse
  renderSpinalCMMonodynapse(ctx, w, h, lang) {
    ctx.save();
    const t = this.animTime;

    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px system-ui';
    const header = lang === 'hu'
      ? 'NYAKCSIGOLYAI TÁGULAT (C7–T1): KÖZVETLEN CM MONOSZINAPSZIS'
      : 'CERVICAL ENLARGEMENT (C7–T1): DIRECT CORTICOMOTONEURONAL (CM) SYNAPSE';
    ctx.fillText(header, 20, 24);

    // Schematic butterfly gray matter cross section
    const sx = w * 0.48;
    const sy = h * 0.55;

    // Gray matter outline
    ctx.fillStyle = 'rgba(30, 41, 59, 0.6)';
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(sx, sy, 140, 85, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Central canal
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(sx, sy, 6, 0, Math.PI * 2);
    ctx.fill();

    // Left Ventral horn area (Rexed Lamina IX)
    const vhX = sx - 65;
    const vhY = sy + 30;

    ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(vhX, vhY, 35, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Descending UMN axon terminal (red)
    ctx.strokeStyle = '#f43f5e';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(sx - 110, sy - 40); // from lateral funiculus
    ctx.quadraticCurveTo(vhX - 20, sy, vhX, vhY - 8);
    ctx.stroke();

    // Synaptic bouton
    ctx.fillStyle = '#f43f5e';
    ctx.beginPath();
    ctx.arc(vhX, vhY - 8, 6, 0, Math.PI * 2);
    ctx.fill();

    // Alpha Motor Neuron soma (cyan multipolar)
    ctx.fillStyle = '#22d3ee';
    ctx.beginPath();
    ctx.arc(vhX + 4, vhY + 6, 12, 0, Math.PI * 2);
    ctx.fill();

    // Lower motor neuron axon exiting through ventral root
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(vhX + 4, vhY + 16);
    ctx.lineTo(vhX - 45, sy + 75);
    ctx.stroke();

    // Pulsing transmitter in CM synapse
    const synP = (t * 3) % 1;
    ctx.fillStyle = '#facc15';
    ctx.beginPath();
    ctx.arc(vhX + 2, vhY - 2, 3 + synP * 3, 0, Math.PI * 2);
    ctx.fill();

    // Labels
    this.drawBadge(ctx, 'Rexed Lamina IX', vhX, vhY - 45, '#38bdf8');
    this.drawBadge(ctx, lang === 'hu' ? 'Közvetlen CM szinapszis' : 'Direct CM Synapse (Monosynaptic)', sx + 80, sy - 30, '#f43f5e');
    this.drawBadge(ctx, lang === 'hu' ? 'Alfa (α) motoneuron' : 'Alpha (α) Motor Neuron', vhX + 70, vhY + 25, '#22d3ee');
    this.drawBadge(ctx, lang === 'hu' ? 'Kilépés a karfonatba' : 'Ventral Root Exit to Brachial Plexus', vhX - 30, sy + 95, '#10b981');

    ctx.restore();
  }

  // Stage 7: Peripheral Conduction & Nerve branching
  renderPeripheralConduction(ctx, w, h, lang) {
    ctx.save();
    const t = this.animTime;

    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px system-ui';
    const header = lang === 'hu'
      ? 'PERIFÉRIÁS VEZETÉS (50–120 m/s): MEDIANUS ÉS RADIALIS KETTŐS KONTROLL'
      : 'PERIPHERAL CONDUCTION (50–120 m/s): MEDIAN & RADIAL DUAL CONTROL';
    ctx.fillText(header, 20, 24);

    // Myelinated Axon with Nodes of Ranvier representation at top
    const axY = h * 0.28;
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(40, axY);
    ctx.lineTo(w - 40, axY);
    ctx.stroke();

    // Myelin sheaths
    const myelinWidth = 45;
    const gap = 12;
    for (let x = 50; x < w - 60; x += (myelinWidth + gap)) {
      ctx.fillStyle = '#0284c7';
      ctx.beginPath();
      ctx.roundRect(x, axY - 9, myelinWidth, 18, 5);
      ctx.fill();

      // Node of Ranvier label
      ctx.fillStyle = '#38bdf8';
      ctx.font = '8px monospace';
      ctx.fillText(lang === 'hu' ? 'Befűződés' : 'Node', x + myelinWidth + 1, axY + 18);
    }

    // Saltatory action potential leaps
    const leapPhase = (t * 4) % (w - 100);
    ctx.strokeStyle = '#facc15';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#facc15';
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(50 + leapPhase, axY - 14, 10, Math.PI, 0);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Dual Nerve Branching: Median vs Radial
    const branchX = w * 0.35;
    const branchY = h * 0.65;

    // Median Nerve (Agonist Flexor)
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(branchX, branchY);
    ctx.lineTo(branchX + 110, branchY - 35);
    ctx.stroke();

    this.drawBadge(ctx, lang === 'hu' ? 'N. medianus: FDS, FDP & 1. lumbricalis' : 'Median Nerve: FDS, FDP & 1st Lumbrical', branchX + 130, branchY - 35, '#10b981');

    // Radial Nerve (Antagonist Extensor Tone)
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(branchX, branchY);
    ctx.lineTo(branchX + 110, branchY + 35);
    ctx.stroke();

    this.drawBadge(ctx, lang === 'hu' ? 'N. radialis: Extensor indicis fék' : 'Radial Nerve: Extensor Indicis Brake', branchX + 130, branchY + 35, '#8b5cf6');

    this.drawBadge(ctx, lang === 'hu' ? 'Karfonat (Plexus brachialis)' : 'Brachial Plexus Division', branchX - 45, branchY, '#38bdf8');

    ctx.restore();
  }

  // Stage 8: NMJ, Ca2+ Crossbridge and Mechanical Keystroke
  renderNMJCrossbridge(ctx, w, h, lang) {
    ctx.save();
    const t = this.animTime;

    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px system-ui';
    const header = lang === 'hu'
      ? 'NEUROMUSZKULÁRIS JUNKCIÓ, ELEKTROMECHANIKAI CSATOLÁS ÉS LEÜTÉS'
      : 'NEUROMUSCULAR JUNCTION, EXCITATION-CONTRACTION & SWITCH BOTTOM-OUT';
    ctx.fillText(header, 20, 24);

    // Left half: Synaptic Bouton + Motor End Plate
    const bx = w * 0.28;
    const by = h * 0.42;

    // Presynaptic terminal bulb
    ctx.fillStyle = 'rgba(30, 41, 59, 0.85)';
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(bx - 35, by - 55);
    ctx.lineTo(bx - 35, by - 15);
    ctx.bezierCurveTo(bx - 45, by + 20, bx + 45, by + 20, bx + 35, by - 15);
    ctx.lineTo(bx + 35, by - 55);
    ctx.stroke();
    ctx.fill();

    // ACh vesicles inside
    for (let i = 0; i < 7; i++) {
      const vx = bx - 22 + (i % 4) * 14;
      const vy = by - 10 + Math.floor(i / 4) * 12;
      ctx.fillStyle = '#facc15';
      ctx.beginPath();
      ctx.arc(vx, vy, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // Exocytosis into cleft
    const exY = by + 24 + ((t * 40) % 18);
    ctx.fillStyle = '#facc15';
    ctx.beginPath();
    ctx.arc(bx - 8, exY, 3, 0, Math.PI * 2);
    ctx.arc(bx + 8, exY, 3, 0, Math.PI * 2);
    ctx.fill();

    // Postsynaptic folds (motor end plate)
    ctx.strokeStyle = '#ec4899';
    ctx.lineWidth = 3;
    ctx.beginPath();
    const plateY = by + 46;
    for (let x = bx - 45; x <= bx + 45; x += 10) {
      ctx.lineTo(x, plateY);
      ctx.lineTo(x + 5, plateY + 8);
    }
    ctx.stroke();

    this.drawBadge(ctx, lang === 'hu' ? 'ACh exocitózis és nAChR' : 'ACh Exocytosis & nAChR', bx, plateY + 24, '#facc15');

    // Right half: Mechanical Keyboard Switch Stroke
    const swX = w * 0.74;
    const swY = h * 0.52;

    // Switch body frame
    ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(swX - 45, swY - 50, 90, 100, 10);
    ctx.fill();
    ctx.stroke();

    // Moving stem
    const depression = 14 + Math.sin(t * 8) * 10; // active stroke
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.roundRect(swX - 25, swY - 50 + depression, 50, 35, 6);
    ctx.fill();

    // Keycap top
    ctx.fillStyle = '#1e293b';
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(swX - 35, swY - 70 + depression, 70, 24, 6);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('F', swX, swY - 53 + depression);

    // Spring below stem
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const springTop = swY - 15 + depression;
    const springBot = swY + 40;
    const springH = springBot - springTop;
    const coils = 6;
    for (let c = 0; c <= coils; c++) {
      const cx = swX + ((c % 2 === 0) ? -12 : 12);
      const cy = springTop + (springH / coils) * c;
      if (c === 0) ctx.moveTo(swX, springTop);
      else ctx.lineTo(cx, cy);
    }
    ctx.lineTo(swX, springBot);
    ctx.stroke();

    // Gold leaf electrical contact closed!
    const isClosed = depression > 18;
    ctx.strokeStyle = isClosed ? '#22c55e' : '#eab308';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(swX + 28, swY);
    ctx.lineTo(swX + (isClosed ? 34 : 38), swY + 12);
    ctx.stroke();

    if (isClosed) {
      ctx.shadowColor = '#22c55e';
      ctx.shadowBlur = 10;
      ctx.fillStyle = '#4ade80';
      ctx.beginPath();
      ctx.arc(swX + 34, swY + 12, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    const badgeText = isClosed
      ? (lang === 'hu' ? 'ÉRINTKEZŐ ZÁRVA (LEÜTVE!)' : 'CONTACT CLOSED (KEYPRESSED!)')
      : (lang === 'hu' ? 'LEÜTÉS FOLYAMATBAN' : 'ACTUATION IN PROGRESS');
    this.drawBadge(ctx, badgeText, swX, swY + 68, isClosed ? '#22c55e' : '#eab308');

    ctx.restore();
  }
}

window.MicroViews = MicroViews;
