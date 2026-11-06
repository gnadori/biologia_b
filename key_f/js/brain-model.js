// Three.js 3D Brain & Neural Circuit Model for "Pressing the F-Key"

class Brain3DViewer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.structures = {};
    this.neuralPaths = [];
    this.pulses = [];
    this.handRig = {};
    this.fKeySwitch = {};
    this.currentStageId = 1;
    this.targetCameraPos = new THREE.Vector3(5.5, 4.8, 6.2);
    this.targetCameraLookAt = new THREE.Vector3(1.5, 2.8, 1.5);
    this.isCameraTweening = false;
    this.clock = new THREE.Clock();

    // Raycasting for interactive 3D hovering
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.tooltip = document.getElementById('tooltip-3d');
    this.hoveredMesh = null;

    this.structureMeta = {
      dlPFC: {
        en: { name: 'Right dlPFC (BA 9/46)', desc: 'Prefrontal goal formulation: "Type \'f\'"' },
        hu: { name: 'Jobb dlPFC (BA 9/46)', desc: 'Prefrontális célképzés: „Üsd le az \'f\' betűt”' }
      },
      acc: {
        en: { name: 'Anterior Cingulate (BA 24/32)', desc: 'Focal attention & impulse suppression' },
        hu: { name: 'Elülső öbölkéreg (ACC, BA 24/32)', desc: 'Fókuszált figyelem és motoros impulzusgátlás' }
      },
      ppc: {
        en: { name: 'Posterior Parietal (BA 5/7)', desc: 'Spatial transform: screen + F-key tactile nib' },
        hu: { name: 'Hátsó fali kéreg (PPC, BA 5/7)', desc: 'Téri transzformáció: képernyő + F billentyű tapintási bütyök' }
      },
      sma: {
        en: { name: 'Premotor & SMA (BA 6)', desc: 'Joint kinematic angles & sequence timing' },
        hu: { name: 'Premotoros kéreg és SMA (BA 6)', desc: 'Ízületi szögek és időzítési szekvencia' }
      },
      rightM1: {
        en: { name: 'Right M1 Hand Knob (BA 4)', desc: 'Giant Betz cells; dynamic parameter encoding' },
        hu: { name: 'Jobb M1 Kézkiemelkedés (BA 4)', desc: 'Óriás Betz-sejtek; dinamikus paraméterkódolás' }
      },
      striatum: {
        en: { name: 'Striatum (Caudate / Putamen)', desc: 'Direct D1 disinhibition & D2 gating' },
        hu: { name: 'Striatum (Caudatus / Putamen)', desc: 'Direkt D1 diszinhibíció és D2 kapuzás' }
      },
      globusPallidus: {
        en: { name: 'Globus Pallidus (GPi/GPe)', desc: 'Subcortical motor gateway filter' },
        hu: { name: 'Globus Pallidus (GPi/GPe)', desc: 'Szubkortikális motoros szűrőrendszer' }
      },
      subthalamic: {
        en: { name: 'Subthalamic Nucleus (STN)', desc: 'Hyperdirect brake on adjacent finger movements' },
        hu: { name: 'Nucleus subthalamicus (STN)', desc: 'Hiperdirekt fék a szomszédos ujjmozgások ellen' }
      },
      thalamus: {
        en: { name: 'VL / VA Thalamus', desc: 'Disinhibited excitatory clearance to cortex' },
        hu: { name: 'VL / VA Talamusz', desc: 'Diszinhibált serkentő jóváhagyás a kéreg felé' }
      },
      leftCerebellum: {
        en: { name: 'Left Cerebellar Hemisphere', desc: 'Predictive forward model of ~45-60g resistance' },
        hu: { name: 'Bal kisagyfélteke', desc: 'Előrecsatoló modell a billentyű ~45-60g rugóerejére' }
      },
      dentateNucleus: {
        en: { name: 'Dentate Nucleus', desc: 'Deep cerebellar corrective output via SCP' },
        hu: { name: 'Dentatus mag (Nucleus dentatus)', desc: 'Mély kisagyi korrekciós kimenet az SCP-n át' }
      },
      decussationTract: {
        en: { name: 'Pyramidal Decussation', desc: '~85-90% fibers cross midline into left LCST' },
        hu: { name: 'Piramiskereszteződés (Decussatio)', desc: 'A rostok ~85-90%-a átkereszteződik a bal LCST-be' }
      },
      medullaPyramid: {
        en: { name: 'Medullary Pyramids', desc: 'Ventral motor highway of crus cerebri' },
        hu: { name: 'Nyúltvelői piramisok', desc: 'A crus cerebri ventrális motoros szupersztrádája' }
      },
      cervicalEnlargement: {
        en: { name: 'Rexed Lamina IX (C7-T1)', desc: 'Direct CM monosynapse onto α-motor neuron' },
        hu: { name: 'Rexed lamina IX (C7–T1)', desc: 'Közvetlen CM monoszinapszis az alfa-motoneuronra' }
      },
      brachialPlexus: {
        en: { name: 'Brachial Plexus', desc: 'C7-T1 nerve trunk division into arm' },
        hu: { name: 'Karfonat (Plexus brachialis)', desc: 'A C7-T1 ventralis gyökerek köteggé szerveződése' }
      },
      medianNerve: {
        en: { name: 'Median Nerve (A-alpha)', desc: '50-120 m/s; innervates FDS, FDP & 1st lumbrical' },
        hu: { name: 'Nervus medianus (A-alfa)', desc: '50-120 m/s; FDS, FDP és 1. lumbricalis beidegzése' }
      },
      forearmMuscles: {
        en: { name: 'Flexor Digitorum Superficialis', desc: 'Forearm muscle powering index finger flexion' },
        hu: { name: 'M. flexor digitorum superficialis', desc: 'Az alkar mutatóujjat hajlító izomtömege' }
      },
      fKeySwitch: {
        en: { name: 'Mechanical Key Switch \'F\'', desc: 'Tactile homing nib & ~45-60g actuation leaf' },
        hu: { name: 'Mechanikus \'F\' billentyűkapcsoló', desc: 'Tapintási bütyök és ~45-60g-os érintkező' }
      }
    };

    this.init();
    this.buildAnatomy();
    this.buildPeripheralAndKeyboard();
    this.buildNeuralPathways();
    this.setupEvents();
    this.animate();
  }

  init() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x070a12);
    this.scene.fog = new THREE.FogExp2(0x070a12, 0.035);

    // Camera
    this.camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    this.camera.position.copy(this.targetCameraPos);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25;
    this.container.appendChild(this.renderer.domElement);

    // Controls
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.target.copy(this.targetCameraLookAt);
    this.controls.maxDistance = 24;
    this.controls.minDistance = 1.2;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x38bdf8, 0.45);
    this.scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x0f172a, 0.7);
    hemiLight.position.set(0, 20, 0);
    this.scene.add(hemiLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(10, 15, 12);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x06b6d4, 0.9);
    dirLight2.position.set(-10, 10, -10);
    this.scene.add(dirLight2);

    const rimLight = new THREE.PointLight(0xa855f7, 2, 18);
    rimLight.position.set(0, -2, -5);
    this.scene.add(rimLight);
  }

  // Create customized materials with glowing scientific style
  createGlassMaterial(colorHex, opacity = 0.35, roughness = 0.25, metalness = 0.1) {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(colorHex),
      transparent: true,
      opacity: opacity,
      roughness: roughness,
      metalness: metalness,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      depthWrite: false,
      side: THREE.DoubleSide
    });
  }

  createGlowMaterial(colorHex, emissiveIntensity = 1.2) {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(colorHex),
      emissive: new THREE.Color(colorHex),
      emissiveIntensity: emissiveIntensity,
      roughness: 0.2,
      metalness: 0.3
    });
  }

  buildAnatomy() {
    this.anatomyGroup = new THREE.Group();
    this.anatomyGroup.position.set(0, 1.5, 0); // Position brain at upper center
    this.scene.add(this.anatomyGroup);

    // 1. CEREBRAL CORTEX (Left and Right Hemispheres)
    // Right hemisphere (contralateral control of left hand!)
    const rightHemiGeo = new THREE.SphereGeometry(2.3, 36, 28);
    rightHemiGeo.scale(0.85, 1.05, 1.35);
    // Displace vertices to form frontal, parietal, temporal, occipital lobes
    const rPos = rightHemiGeo.attributes.position;
    for (let i = 0; i < rPos.count; i++) {
      let x = rPos.getX(i);
      let y = rPos.getY(i);
      let z = rPos.getZ(i);

      // Flatten medial interhemispheric fissure
      if (x < 0) x *= 0.15;
      // Frontal pole elongation
      if (z > 0.8) y += 0.15;
      // Temporal lobe bulge
      if (y < -0.2 && z > -0.5 && z < 0.8 && x > 0.5) x += 0.25;
      // Gyral surface ripple
      const gyri = Math.sin(x * 6) * Math.cos(y * 6) * Math.sin(z * 6) * 0.06;
      x += gyri; y += gyri; z += gyri;

      rPos.setXYZ(i, x + 0.2, y + 1.2, z);
    }
    rightHemiGeo.computeVertexNormals();

    const rightHemiMat = this.createGlassMaterial(0x38bdf8, 0.28, 0.3);
    const rightHemisphere = new THREE.Mesh(rightHemiGeo, rightHemiMat);
    this.anatomyGroup.add(rightHemisphere);
    this.structures['rightHemisphere'] = rightHemisphere;

    // Left hemisphere
    const leftHemiGeo = rightHemiGeo.clone();
    leftHemiGeo.scale(-1, 1, 1); // Mirror across midline
    leftHemiGeo.computeVertexNormals();
    const leftHemiMat = this.createGlassMaterial(0x1e293b, 0.22, 0.4);
    const leftHemisphere = new THREE.Mesh(leftHemiGeo, leftHemiMat);
    leftHemisphere.position.x = -0.4;
    this.anatomyGroup.add(leftHemisphere);
    this.structures['leftHemisphere'] = leftHemisphere;

    // CORTICAL FUNCTIONAL REGIONS (High-resolution glowing focal patches)
    // 1. Right dlPFC (Brodmann 9/46 - Anterior Frontal)
    const dlpfcGeo = new THREE.SphereGeometry(0.48, 20, 16);
    dlpfcGeo.scale(0.8, 1.1, 0.9);
    const dlpfcMat = this.createGlowMaterial(0x38bdf8, 1.5);
    const dlPFC = new THREE.Mesh(dlpfcGeo, dlpfcMat);
    dlPFC.position.set(1.25, 2.3, 1.6);
    this.anatomyGroup.add(dlPFC);
    this.structures['dlPFC'] = dlPFC;

    // 2. ACC (Anterior Cingulate - Medial wall)
    const accGeo = new THREE.TorusGeometry(0.55, 0.15, 12, 24, Math.PI * 0.9);
    const accMat = this.createGlowMaterial(0xec4899, 1.5);
    const acc = new THREE.Mesh(accGeo, accMat);
    acc.rotation.y = Math.PI / 2;
    acc.rotation.x = -0.3;
    acc.position.set(0.28, 2.2, 0.8);
    this.anatomyGroup.add(acc);
    this.structures['acc'] = acc;

    // 3. PPC (Posterior Parietal BA 5/7)
    const ppcGeo = new THREE.SphereGeometry(0.52, 20, 16);
    ppcGeo.scale(0.9, 0.9, 1.1);
    const ppcMat = this.createGlowMaterial(0xa855f7, 1.4);
    const ppc = new THREE.Mesh(ppcGeo, ppcMat);
    ppc.position.set(1.4, 2.7, -0.6);
    this.anatomyGroup.add(ppc);
    this.structures['ppc'] = ppc;

    // 4. SMA & Premotor (BA 6)
    const smaGeo = new THREE.BoxGeometry(0.6, 0.4, 0.8);
    const smaMat = this.createGlowMaterial(0xf59e0b, 1.3);
    const sma = new THREE.Mesh(smaGeo, smaMat);
    sma.position.set(0.9, 2.8, 0.5);
    this.anatomyGroup.add(sma);
    this.structures['sma'] = sma;
    this.structures['premotor'] = sma;

    // 5. Right Primary Motor Cortex M1 (BA 4, Hand Knob region!)
    // Inverted-omega "Hand Knob" on precentral gyrus
    const m1Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.5, 2.9, 0.1),
      new THREE.Vector3(1.1, 2.85, 0.0),
      new THREE.Vector3(1.45, 2.65, 0.1), // Hand knob apex
      new THREE.Vector3(1.7, 2.3, 0.0)
    ]);
    const m1Geo = new THREE.TubeGeometry(m1Curve, 24, 0.22, 12, false);
    const m1Mat = this.createGlowMaterial(0xef4444, 2.0);
    const rightM1 = new THREE.Mesh(m1Geo, m1Mat);
    this.anatomyGroup.add(rightM1);
    this.structures['rightM1'] = rightM1;
    this.structures['handKnob'] = rightM1;

    // 2. SUBCORTICAL BASAL GANGLIA & THALAMUS
    // Striatum (Caudate C-curve and Putamen)
    const caudateCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.5, 1.9, 0.9),
      new THREE.Vector3(0.8, 1.8, 0.3),
      new THREE.Vector3(0.9, 1.5, -0.4),
      new THREE.Vector3(0.6, 1.2, -0.7)
    ]);
    const striatumGeo = new THREE.TubeGeometry(caudateCurve, 20, 0.18, 10, false);
    const striatumMat = this.createGlowMaterial(0xfacc15, 1.4);
    const striatum = new THREE.Mesh(striatumGeo, striatumMat);
    this.anatomyGroup.add(striatum);
    this.structures['striatum'] = striatum;

    // Globus Pallidus (GPi/GPe)
    const gpGeo = new THREE.SphereGeometry(0.3, 16, 12);
    gpGeo.scale(0.8, 1.0, 1.3);
    const gpMat = this.createGlowMaterial(0xf97316, 1.4);
    const globusPallidus = new THREE.Mesh(gpGeo, gpMat);
    globusPallidus.position.set(0.7, 1.35, 0.05);
    this.anatomyGroup.add(globusPallidus);
    this.structures['globusPallidus'] = globusPallidus;

    // Subthalamic Nucleus (STN)
    const stnGeo = new THREE.SphereGeometry(0.14, 12, 10);
    const stnMat = this.createGlowMaterial(0xec4899, 1.6);
    const subthalamic = new THREE.Mesh(stnGeo, stnMat);
    subthalamic.position.set(0.55, 1.05, -0.05);
    this.anatomyGroup.add(subthalamic);
    this.structures['subthalamic'] = subthalamic;

    // Thalamus (VL / VA nuclei)
    const thalGeo = new THREE.SphereGeometry(0.42, 18, 14);
    thalGeo.scale(0.9, 1.1, 1.3);
    const thalMat = this.createGlowMaterial(0x10b981, 1.6);
    const thalamus = new THREE.Mesh(thalGeo, thalMat);
    thalamus.position.set(0.38, 1.45, -0.15);
    this.anatomyGroup.add(thalamus);
    this.structures['thalamus'] = thalamus;

    // 3. CEREBELLUM (Ipsilateral / Left Cerebellar Hemisphere)
    const leftCerebGeo = new THREE.SphereGeometry(1.05, 24, 20);
    leftCerebGeo.scale(1.2, 0.75, 0.95);
    // Add folia grooves
    const cPos = leftCerebGeo.attributes.position;
    for (let i = 0; i < cPos.count; i++) {
      let x = cPos.getX(i);
      let y = cPos.getY(i);
      let z = cPos.getZ(i);
      y += Math.sin(z * 18) * 0.04;
      cPos.setXYZ(i, x, y, z);
    }
    leftCerebGeo.computeVertexNormals();

    const leftCerebMat = this.createGlowMaterial(0x06b6d4, 1.1);
    const leftCerebellum = new THREE.Mesh(leftCerebGeo, leftCerebMat);
    leftCerebellum.position.set(-0.95, 0.45, -1.25);
    this.anatomyGroup.add(leftCerebellum);
    this.structures['leftCerebellum'] = leftCerebellum;

    // Deep Dentate Nucleus (inside Left Cerebellum)
    const dentateGeo = new THREE.SphereGeometry(0.22, 14, 10);
    const dentateMat = this.createGlowMaterial(0x38bdf8, 2.0);
    const dentateNucleus = new THREE.Mesh(dentateGeo, dentateMat);
    dentateNucleus.position.set(-0.85, 0.48, -1.15);
    this.anatomyGroup.add(dentateNucleus);
    this.structures['dentateNucleus'] = dentateNucleus;

    // Right Cerebellum (dim)
    const rightCerebGeo = leftCerebGeo.clone();
    const rightCerebMat = this.createGlassMaterial(0x1e293b, 0.25);
    const rightCerebellum = new THREE.Mesh(rightCerebGeo, rightCerebMat);
    rightCerebellum.position.set(0.95, 0.45, -1.25);
    this.anatomyGroup.add(rightCerebellum);

    // 4. BRAINSTEM & PYRAMIDAL DECUSSATION
    // Midbrain / Pons / Medulla
    const brainstemCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.0, 1.1, -0.1),  // Midbrain / Crus cerebri
      new THREE.Vector3(0.0, 0.65, -0.3), // Pons (ventral bulge)
      new THREE.Vector3(0.0, 0.1, -0.45), // Medulla (Pyramids)
      new THREE.Vector3(0.0, -0.6, -0.55), // Cervicomedullary junction
      new THREE.Vector3(0.0, -1.5, -0.6)  // Spinal cord entry
    ]);
    const brainstemGeo = new THREE.TubeGeometry(brainstemCurve, 32, 0.38, 14, false);
    const brainstemMat = this.createGlassMaterial(0x38bdf8, 0.35, 0.3);
    const brainstem = new THREE.Mesh(brainstemGeo, brainstemMat);
    this.anatomyGroup.add(brainstem);
    this.structures['brainstem'] = brainstem;
    this.structures['pons'] = brainstem;

    // Right Medullary Pyramid
    const medPyrGeo = new THREE.CylinderGeometry(0.12, 0.14, 0.55, 12);
    const medPyrMat = this.createGlowMaterial(0x38bdf8, 1.4);
    const medullaPyramid = new THREE.Mesh(medPyrGeo, medPyrMat);
    medullaPyramid.position.set(0.18, 0.15, -0.3);
    this.anatomyGroup.add(medullaPyramid);
    this.structures['medullaPyramid'] = medullaPyramid;

    // PYRAMIDAL DECUSSATION TRACT (The 85-90% crossing from Right Medulla to Left LCST!)
    const decussCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.18, 0.0, -0.3),    // Right pyramid
      new THREE.Vector3(0.08, -0.35, -0.4),  // Approaching midline
      new THREE.Vector3(-0.12, -0.55, -0.45), // Crossing over midline!
      new THREE.Vector3(-0.24, -0.9, -0.52)  // Left Lateral Corticospinal Tract
    ]);
    const decussGeo = new THREE.TubeGeometry(decussCurve, 20, 0.08, 10, false);
    const decussMat = this.createGlowMaterial(0xef4444, 2.2);
    const decussationTract = new THREE.Mesh(decussGeo, decussMat);
    this.anatomyGroup.add(decussationTract);
    this.structures['decussationTract'] = decussationTract;

    // 5. SPINAL CORD & CERVICAL ENLARGEMENT (C7-T1)
    const spineCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.0, -0.9, -0.52),
      new THREE.Vector3(0.0, -1.8, -0.6),
      new THREE.Vector3(0.0, -2.6, -0.62) // C7-T1 region
    ]);
    const spineGeo = new THREE.TubeGeometry(spineCurve, 20, 0.26, 12, false);
    const spineMat = this.createGlassMaterial(0x38bdf8, 0.35);
    const spinalCord = new THREE.Mesh(spineGeo, spineMat);
    this.anatomyGroup.add(spinalCord);
    this.structures['spinalCord'] = spinalCord;

    // Cervical Enlargement ventral horn highlight (Rexed Lamina IX)
    const cEnlargeGeo = new THREE.SphereGeometry(0.24, 14, 12);
    cEnlargeGeo.scale(1.2, 1.4, 0.9);
    const cEnlargeMat = this.createGlowMaterial(0x22d3ee, 1.8);
    const cervicalEnlargement = new THREE.Mesh(cEnlargeGeo, cEnlargeMat);
    cervicalEnlargement.position.set(-0.16, -2.4, -0.6);
    this.anatomyGroup.add(cervicalEnlargement);
    this.structures['cervicalEnlargement'] = cervicalEnlargement;
    this.structures['ventralHorn'] = cervicalEnlargement;
  }

  buildPeripheralAndKeyboard() {
    this.peripheralGroup = new THREE.Group();
    this.scene.add(this.peripheralGroup);

    // 1. BRACHIAL PLEXUS & ARM NERVES
    // Left Ventral Root exiting C7-T1 -> Brachial Plexus into shoulder
    const plexusCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.16, -0.9, -0.6),
      new THREE.Vector3(-0.7, -1.1, -0.4),
      new THREE.Vector3(-1.4, -1.5, -0.1), // Clavicle / Axilla
      new THREE.Vector3(-2.0, -2.4, 0.3)   // Upper arm
    ]);
    const plexusGeo = new THREE.TubeGeometry(plexusCurve, 20, 0.07, 8, false);
    const plexusMat = this.createGlowMaterial(0x10b981, 1.6);
    const brachialPlexus = new THREE.Mesh(plexusGeo, plexusMat);
    this.peripheralGroup.add(brachialPlexus);
    this.structures['brachialPlexus'] = brachialPlexus;

    // Median Nerve descending down left forearm to hand
    const medianCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.0, -2.4, 0.3),
      new THREE.Vector3(-2.2, -3.4, 0.8), // Antecubital fossa
      new THREE.Vector3(-2.0, -4.6, 1.4), // Mid-forearm (FDS/FDP)
      new THREE.Vector3(-1.6, -5.6, 1.9), // Carpal tunnel
      new THREE.Vector3(-1.25, -6.1, 2.2) // Palm to Digit II
    ]);
    const medianGeo = new THREE.TubeGeometry(medianCurve, 28, 0.06, 8, false);
    const medianMat = this.createGlowMaterial(0x34d399, 1.8);
    const medianNerve = new THREE.Mesh(medianGeo, medianMat);
    this.peripheralGroup.add(medianNerve);
    this.structures['medianNerve'] = medianNerve;
    this.structures['armNerves'] = medianNerve;

    // Forearm muscle silhouette (Flexor Digitorum Superficialis)
    const muscleGeo = new THREE.CylinderGeometry(0.32, 0.18, 2.0, 14);
    const muscleMat = this.createGlassMaterial(0xf43f5e, 0.28, 0.3);
    const muscleMesh = new THREE.Mesh(muscleGeo, muscleMat);
    muscleMesh.position.set(-2.05, -4.0, 1.05);
    muscleMesh.rotation.z = 0.25;
    muscleMesh.rotation.x = -0.3;
    this.peripheralGroup.add(muscleMesh);
    this.structures['forearmMuscles'] = muscleMesh;

    // 2. 3D LEFT HAND RIG
    const handGroup = new THREE.Group();
    handGroup.position.set(-1.4, -5.9, 2.0);
    handGroup.rotation.x = 0.45;
    handGroup.rotation.y = -0.25;
    this.peripheralGroup.add(handGroup);
    this.structures['handModel'] = handGroup;

    // Palm base
    const palmGeo = new THREE.BoxGeometry(0.9, 0.3, 0.9);
    const skinMat = this.createGlassMaterial(0x38bdf8, 0.35, 0.4);
    const palm = new THREE.Mesh(palmGeo, skinMat);
    handGroup.add(palm);

    // Index Finger (Digit II) hierarchy for articulation
    const fingerBase = new THREE.Group();
    fingerBase.position.set(0.18, 0.05, 0.48); // MCP joint
    handGroup.add(fingerBase);
    this.handRig.mcp = fingerBase;

    // Proximal Phalanx
    const proxGeo = new THREE.CylinderGeometry(0.08, 0.09, 0.42, 10);
    proxGeo.rotateX(Math.PI / 2);
    const proxPhalanx = new THREE.Mesh(proxGeo, skinMat);
    proxPhalanx.position.set(0, 0, 0.2);
    fingerBase.add(proxPhalanx);

    // PIP Joint
    const pipJoint = new THREE.Group();
    pipJoint.position.set(0, 0, 0.42);
    fingerBase.add(pipJoint);
    this.handRig.pip = pipJoint;

    // Intermediate Phalanx
    const midGeo = new THREE.CylinderGeometry(0.075, 0.08, 0.34, 10);
    midGeo.rotateX(Math.PI / 2);
    const midPhalanx = new THREE.Mesh(midGeo, skinMat);
    midPhalanx.position.set(0, 0, 0.17);
    pipJoint.add(midPhalanx);

    // DIP Joint
    const dipJoint = new THREE.Group();
    dipJoint.position.set(0, 0, 0.34);
    pipJoint.add(dipJoint);
    this.handRig.dip = dipJoint;

    // Distal Phalanx & Fingertip
    const distGeo = new THREE.CylinderGeometry(0.065, 0.075, 0.28, 10);
    distGeo.rotateX(Math.PI / 2);
    const distPhalanx = new THREE.Mesh(distGeo, this.createGlowMaterial(0x38bdf8, 1.2));
    distPhalanx.position.set(0, 0, 0.14);
    dipJoint.add(distPhalanx);

    this.structures['indexFinger'] = fingerBase;

    // Adjacent fingers for keyboard context (Thumb, Middle, Ring, Pinky)
    const addFinger = (x, rotX, scaleLen) => {
      const fGroup = new THREE.Group();
      fGroup.position.set(x, 0.05, 0.45);
      fGroup.rotation.x = rotX;
      const fGeo = new THREE.CylinderGeometry(0.075, 0.085, 0.8 * scaleLen, 8);
      fGeo.rotateX(Math.PI / 2);
      const fMesh = new THREE.Mesh(fGeo, this.createGlassMaterial(0x1e293b, 0.3));
      fMesh.position.set(0, 0, 0.4 * scaleLen);
      fGroup.add(fMesh);
      handGroup.add(fGroup);
    };
    addFinger(-0.06, 0.4, 1.05); // Middle finger on D key
    addFinger(-0.28, 0.35, 0.95); // Ring finger on S key
    addFinger(-0.48, 0.3, 0.8);  // Pinky finger on A key
    addFinger(0.42, 0.6, 0.7);   // Thumb towards Spacebar

    // 3. MECHANICAL KEYBOARD & "F" KEY WITH TACTILE NIB
    const keyboardGroup = new THREE.Group();
    keyboardGroup.position.set(-1.4, -6.6, 2.7);
    keyboardGroup.rotation.x = -0.15;
    keyboardGroup.rotation.y = -0.25;
    this.peripheralGroup.add(keyboardGroup);
    this.structures['keyboardChassis'] = keyboardGroup;

    // Keyboard chassis plate
    const kbPlateGeo = new THREE.BoxGeometry(3.6, 0.2, 2.2);
    const kbPlateMat = this.createGlassMaterial(0x0f172a, 0.85, 0.3);
    const kbPlate = new THREE.Mesh(kbPlateGeo, kbPlateMat);
    keyboardGroup.add(kbPlate);

    // Other surrounding Keycaps (A, S, D, G, H, Space)
    const keyGeo = new THREE.BoxGeometry(0.44, 0.25, 0.44);
    const keyMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4 });

    const keyLayout = [
      { x: -0.9, z: 0.1, label: 'A' },
      { x: -0.45, z: 0.1, label: 'S' },
      { x: 0.0, z: 0.1, label: 'D' },
      { x: 0.9, z: 0.1, label: 'G' },
      { x: 1.35, z: 0.1, label: 'H' },
      { x: 0.1, z: 0.7, sx: 2.2, label: 'SPACE' }
    ];

    keyLayout.forEach(k => {
      const geo = k.sx ? new THREE.BoxGeometry(k.sx, 0.25, 0.44) : keyGeo;
      const keyMesh = new THREE.Mesh(geo, keyMat);
      keyMesh.position.set(k.x, 0.2, k.z);
      keyboardGroup.add(keyMesh);
    });

    // THE "F" KEY ASSEMBLY (Interactive switch & keycap)
    const fKeyGroup = new THREE.Group();
    fKeyGroup.position.set(0.45, 0.2, 0.1);
    keyboardGroup.add(fKeyGroup);
    this.fKeySwitch.group = fKeyGroup;

    // F Keycap (Cyan accent)
    const fKeyMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x0369a1,
      emissiveIntensity: 0.4,
      roughness: 0.3
    });
    const fKeyCap = new THREE.Mesh(keyGeo, fKeyMat);
    fKeyGroup.add(fKeyCap);
    this.fKeySwitch.cap = fKeyCap;

    // TACTILE NIB on "F" Key! (The physical homing ridge)
    const nibGeo = new THREE.BoxGeometry(0.18, 0.05, 0.04);
    const nibMat = this.createGlowMaterial(0x38bdf8, 2.0);
    const tactileNib = new THREE.Mesh(nibGeo, nibMat);
    tactileNib.position.set(0, 0.14, 0.08);
    fKeyCap.add(tactileNib);
    this.structures['fKeySwitch'] = fKeyGroup;

    // Mechanical Switch Stem (inside)
    const stemGeo = new THREE.BoxGeometry(0.18, 0.3, 0.18);
    const stemMat = this.createGlowMaterial(0x38bdf8, 1.2);
    const stem = new THREE.Mesh(stemGeo, stemMat);
    stem.position.y = -0.15;
    fKeyGroup.add(stem);
  }

  buildNeuralPathways() {
    // Definitive neural transmission routes as 3D splines with traveling energy pulses
    const routeDefs = [
      // Stage 1: Prefrontal -> Parietal coordinate loop
      {
        stage: 1,
        color: 0x38bdf8,
        points: [
          new THREE.Vector3(1.25, 3.8, 1.6),  // dlPFC
          new THREE.Vector3(0.3, 3.7, 0.8),   // ACC
          new THREE.Vector3(1.4, 4.2, -0.6)   // PPC
        ]
      },
      // Stage 2: Cortex -> Striatum -> GPi/SNr -> Thalamus -> Premotor
      {
        stage: 2,
        color: 0xfacc15,
        points: [
          new THREE.Vector3(1.1, 4.35, 0.1),  // M1/PMA
          new THREE.Vector3(0.8, 3.3, 0.3),   // Striatum
          new THREE.Vector3(0.7, 2.85, 0.05), // GPi
          new THREE.Vector3(0.38, 2.95, -0.15), // Thalamus
          new THREE.Vector3(0.9, 4.3, 0.5)    // Premotor feedback
        ]
      },
      // Stage 3: Premotor -> Pontine nuclei -> Cross to Left Cerebellum -> Dentate -> Thalamus
      {
        stage: 3,
        color: 0x06b6d4,
        points: [
          new THREE.Vector3(0.9, 4.3, 0.5),   // Premotor
          new THREE.Vector3(0.0, 2.15, -0.3), // Pontine nuclei
          new THREE.Vector3(-0.95, 1.95, -1.25), // Left Cerebellum
          new THREE.Vector3(-0.85, 1.98, -1.15), // Dentate
          new THREE.Vector3(0.38, 2.95, -0.15), // Contralateral Thalamus
          new THREE.Vector3(1.45, 4.15, 0.1)  // M1 Hand knob
        ]
      },
      // Stage 4 & 5: Betz cells in Hand Knob -> Corona Radiata -> Internal Capsule -> Brainstem Decussation
      {
        stage: 4,
        color: 0xef4444,
        points: [
          new THREE.Vector3(1.45, 4.15, 0.1),  // M1 Hand Knob
          new THREE.Vector3(1.1, 3.7, 0.0),    // Corona Radiata
          new THREE.Vector3(0.7, 3.0, -0.1)    // Internal Capsule posterior limb
        ]
      },
      {
        stage: 5,
        color: 0xef4444,
        points: [
          new THREE.Vector3(0.7, 3.0, -0.1),   // Internal capsule
          new THREE.Vector3(0.2, 2.6, -0.2),   // Crus cerebri
          new THREE.Vector3(0.18, 2.1, -0.3),  // Pons
          new THREE.Vector3(0.18, 1.65, -0.3), // Medulla Pyramid
          new THREE.Vector3(-0.12, 0.95, -0.45), // Pyramidal Decussation (Crossing over to left!)
          new THREE.Vector3(-0.24, 0.6, -0.52)  // Left LCST
        ]
      },
      // Stage 6: Left LCST -> C7-T1 Ventral Horn CM Synapse
      {
        stage: 6,
        color: 0x22d3ee,
        points: [
          new THREE.Vector3(-0.24, 0.6, -0.52),
          new THREE.Vector3(-0.16, -0.3, -0.58),
          new THREE.Vector3(-0.16, -0.9, -0.6)  // Rexed lamina IX alpha motor neuron
        ]
      },
      // Stage 7: Ventral horn -> Brachial Plexus -> Median Nerve -> Hand
      {
        stage: 7,
        color: 0x10b981,
        points: [
          new THREE.Vector3(-0.16, -0.9, -0.6),
          new THREE.Vector3(-1.4, -1.5, -0.1), // Brachial plexus
          new THREE.Vector3(-2.2, -3.4, 0.8),  // Median nerve elbow
          new THREE.Vector3(-2.0, -4.6, 1.4),  // Forearm FDS/FDP
          new THREE.Vector3(-1.25, -6.1, 2.2)  // Digit II motor end plate
        ]
      },
      // Stage 8: NMJ Excitation -> Key Depression
      {
        stage: 8,
        color: 0x38bdf8,
        points: [
          new THREE.Vector3(-1.25, -6.1, 2.2),
          new THREE.Vector3(-1.1, -6.4, 2.5),
          new THREE.Vector3(-0.95, -6.55, 2.8) // F key switch contact
        ]
      }
    ];

    this.routes = routeDefs.map(r => {
      const curve = new THREE.CatmullRomCurve3(r.points);
      // Guide tube (faint)
      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.025, 6, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: r.color,
        transparent: true,
        opacity: 0.15,
        wireframe: false
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      this.scene.add(tubeMesh);

      return {
        stage: r.stage,
        color: r.color,
        curve: curve,
        tube: tubeMesh,
        pulseCount: 4,
        pulseOffset: Math.random()
      };
    });

    // Particle sprite for traveling action potentials
    const particleGeo = new THREE.SphereGeometry(0.065, 12, 10);
    this.pulseMeshes = [];
    for (let i = 0; i < 28; i++) {
      const mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const pMesh = new THREE.Mesh(particleGeo, mat);
      pMesh.visible = false;
      this.scene.add(pMesh);
      this.pulseMeshes.push(pMesh);
    }
  }

  setStage(stageId) {
    this.currentStageId = stageId;
    const stageData = STAGES_DATA.find(s => s.id === stageId);
    if (!stageData) return;

    // Highlight relevant meshes
    Object.keys(this.structures).forEach(k => {
      const mesh = this.structures[k];
      if (!mesh) return;

      const isActive = stageData.activeMeshes && stageData.activeMeshes.includes(k);
      if (mesh.material) {
        if (mesh.material.emissive) {
          mesh.material.emissiveIntensity = isActive ? 2.5 : 0.8;
        }
        if (mesh.material.opacity !== undefined) {
          mesh.material.opacity = isActive ? 0.9 : 0.28;
        }
      }
    });

    // Trigger smooth camera transition
    this.targetCameraPos.set(stageData.camera.x, stageData.camera.y, stageData.camera.z);
    this.targetCameraLookAt.set(stageData.camera.targetX, stageData.camera.targetY, stageData.camera.targetZ);
    this.isCameraTweening = true;
    this.cameraTweenStart = this.clock.getElapsedTime();
    this.startCamPos = this.camera.position.clone();
    this.startCamLookAt = this.controls.target.clone();

    // Trigger physical keystroke articulation for stage 8
    if (stageId === 8) {
      this.animateKeystroke(true);
    } else {
      this.animateKeystroke(false);
    }
  }

  animateKeystroke(isPressed) {
    if (!this.handRig.mcp || !this.fKeySwitch.group) return;

    if (isPressed) {
      // Flex finger joints realistically down onto F key
      this.handRig.mcp.rotation.x = 0.55;
      this.handRig.pip.rotation.x = 0.65;
      this.handRig.dip.rotation.x = 0.45;

      // Depress F-keycap downwards by ~2.5mm
      this.fKeySwitch.group.position.y = 0.08;
      if (this.fKeySwitch.cap && this.fKeySwitch.cap.material.emissive) {
        this.fKeySwitch.cap.material.emissive.setHex(0x22c55e);
        this.fKeySwitch.cap.material.emissiveIntensity = 1.2;
      }
    } else {
      // Resting position hovering on home row
      this.handRig.mcp.rotation.x = 0.25;
      this.handRig.pip.rotation.x = 0.35;
      this.handRig.dip.rotation.x = 0.2;

      this.fKeySwitch.group.position.y = 0.2;
      if (this.fKeySwitch.cap && this.fKeySwitch.cap.material.emissive) {
        this.fKeySwitch.cap.material.emissive.setHex(0x0369a1);
        this.fKeySwitch.cap.material.emissiveIntensity = 0.4;
      }
    }
  }

  toggleSubregion(subKey, isVisible) {
    const obj = this.structures[subKey];
    if (obj) {
      obj.visible = isVisible;
    }
  }

  setXRayMode(isXray) {
    this.isXray = isXray;
    if (this.structures.rightHemisphere) {
      this.structures.rightHemisphere.material.opacity = isXray ? 0.08 : 0.28;
      this.structures.rightHemisphere.material.roughness = isXray ? 0.1 : 0.3;
    }
    if (this.structures.leftHemisphere) {
      this.structures.leftHemisphere.material.opacity = isXray ? 0.05 : 0.22;
    }
    if (this.structures.leftCerebellum) {
      this.structures.leftCerebellum.material.opacity = isXray ? 0.35 : 0.9;
    }
    if (this.structures.brainstem) {
      this.structures.brainstem.material.opacity = isXray ? 0.15 : 0.35;
    }
    ['striatum', 'globusPallidus', 'subthalamic', 'thalamus', 'dentateNucleus', 'decussationTract', 'rightM1', 'dlPFC', 'acc', 'ppc'].forEach(k => {
      const m = this.structures[k];
      if (m && m.material && m.material.emissiveIntensity !== undefined) {
        m.material.emissiveIntensity = isXray ? 3.0 : 1.5;
      }
    });
  }

  updateCameraTween(delta) {
    if (!this.isCameraTweening) return;

    const elapsed = this.clock.getElapsedTime() - this.cameraTweenStart;
    const duration = 0.85; // Smooth camera glide duration in seconds
    const progress = Math.min(elapsed / duration, 1.0);

    // Smooth cubic ease out
    const ease = 1 - Math.pow(1 - progress, 3);

    this.camera.position.lerpVectors(this.startCamPos, this.targetCameraPos, ease);
    this.controls.target.lerpVectors(this.startCamLookAt, this.targetCameraLookAt, ease);

    if (progress >= 1.0) {
      this.isCameraTweening = false;
    }
  }

  updatePulses(elapsedTime) {
    let pIdx = 0;
    this.routes.forEach(r => {
      const isRouteActive = r.stage === this.currentStageId || this.currentStageId === 'all';
      r.tube.material.opacity = isRouteActive ? 0.65 : 0.1;

      for (let i = 0; i < 3; i++) {
        const mesh = this.pulseMeshes[pIdx++];
        if (!mesh) break;

        if (isRouteActive) {
          mesh.visible = true;
          mesh.material.color.setHex(r.color);

          const speed = 1.8;
          const u = ((elapsedTime * speed) + (i / 3) + r.pulseOffset) % 1.0;
          const point = r.curve.getPointAt(u);
          mesh.position.copy(point);

          // Pulse scale
          const s = 1.0 + Math.sin(u * Math.PI) * 0.8;
          mesh.scale.set(s, s, s);
        } else {
          mesh.visible = false;
        }
      }
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    this.updateCameraTween(delta);
    this.updatePulses(elapsedTime);
    this.controls.update();

    // Gentle anatomical breathing oscillation
    if (this.anatomyGroup) {
      this.anatomyGroup.position.y = 1.5 + Math.sin(elapsedTime * 1.5) * 0.025;
    }

    this.renderer.render(this.scene, this.camera);
  }

  setupEvents() {
    window.addEventListener('resize', () => {
      const width = this.container.clientWidth;
      const height = this.container.clientHeight;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    });

    // Pointer move for 3D structure hover
    this.container.addEventListener('pointermove', (e) => {
      const rect = this.container.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);

      // Collect target meshes
      const targetMeshes = [];
      const meshKeyMap = new Map();
      Object.keys(this.structureMeta).forEach(key => {
        const obj = this.structures[key];
        if (obj && obj.visible) {
          if (obj.isMesh) {
            targetMeshes.push(obj);
            meshKeyMap.set(obj, key);
          } else {
            obj.traverse(child => {
              if (child.isMesh) {
                targetMeshes.push(child);
                meshKeyMap.set(child, key);
              }
            });
          }
        }
      });

      const intersects = this.raycaster.intersectObjects(targetMeshes, false);
      if (intersects.length > 0 && this.tooltip) {
        const hit = intersects[0].object;
        const key = meshKeyMap.get(hit);
        const meta = this.structureMeta[key];
        if (meta) {
          const lang = window.currentLang || 'hu';
          const entry = meta[lang] || meta.en || meta;
          this.tooltip.style.display = 'block';
          this.tooltip.style.left = `${e.clientX - rect.left}px`;
          this.tooltip.style.top = `${e.clientY - rect.top}px`;
          this.tooltip.innerHTML = `
            <div class="tooltip-3d-name">${entry.name}</div>
            <div class="tooltip-3d-desc">${entry.desc}</div>
          `;
          return;
        }
      }

      if (this.tooltip) {
        this.tooltip.style.display = 'none';
      }
    });
  }
}

window.Brain3DViewer = Brain3DViewer;
