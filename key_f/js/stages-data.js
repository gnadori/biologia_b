// Neuroscience Stage Data for "Pressing the F-Key"
// Accurately maps the ~160ms neuro-motor loop in English and Hungarian

const STAGES_DATA = [
  {
    id: 1,
    camera: { x: 5.5, y: 4.8, z: 6.2, targetX: 1.5, targetY: 2.8, targetZ: 1.5 },
    activeMeshes: ["dlPFC", "acc", "ppc"],
    durationMs: 25,
    microDiagramType: "prefrontalNetwork",
    en: {
      title: "Goal Formation & Spatial Coordinate Transformation",
      subtitle: "Prefrontal & Parietal Cortex",
      timeRange: "T+0 to T+25 ms",
      structures: [
        { name: "dlPFC (BA 9/46)", role: "Dorsolateral Prefrontal Cortex: Translates abstract linguistic goal into 'Type character F' command." },
        { name: "ACC (BA 24/32)", role: "Anterior Cingulate Cortex: Allocates focal attention and suppresses competing motor impulses." },
        { name: "PPC (BA 5/7)", role: "Posterior Parietal Cortex: Computes egocentric spatial coordinate transform combining screen & tactile nib on F-key." }
      ],
      description: `The keystroke originates within the anterior prefrontal network. The <strong>Dorsolateral Prefrontal Cortex (dlPFC, BA 9/46)</strong> translates the ongoing linguistic intent into an operational sub-goal: <em>"Type the character 'f'"</em>.<br><br>Concurrently, the <strong>Anterior Cingulate Cortex (ACC, BA 24/32)</strong> monitors motivational drive and focal attention, ensuring this keystroke suppresses extraneous impulses. Meanwhile, the <strong>Posterior Parietal Cortex (PPC, BA 5/7)</strong> resolves spatial coordinate transformations, combining visual coordinates from the monitor with proprioceptive feedback from the left hand resting on the keyboard (assisted by the tactile nib on the 'F' key).`,
      keyPoints: [
        "Translates symbolic intent into operational motor goal.",
        "Suppresses distractors and maintains focus via ACC.",
        "Integrates tactile index-finger nib proprioception via PPC."
      ]
    },
    hu: {
      title: "Célkitűzés és téri koordináta-transzformáció",
      subtitle: "Prefrontális és fali kéreg",
      timeRange: "T+0-tól T+25 ms-ig",
      structures: [
        { name: "dlPFC (BA 9/46)", role: "Dorzolaterális prefrontális kéreg: Az absztrakt nyelvi célt azonnali operatív feladattá alakítja: „Üsd le az 'F' betűt”." },
        { name: "ACC (BA 24/32)", role: "Elülső öbölkéreg (Anterior Cingulate): Fókuszált figyelmet biztosít és elnyomja a versengő motoros impulzusokat." },
        { name: "PPC (BA 5/7)", role: "Hátsó fali kéreg (Posterior Parietal): Téri koordináta-transzformációt végez a képernyő és az 'F' billentyű tapintási jelölése alapján." }
      ],
      description: `A folyamat az elülső prefrontális hálózatban veszi kezdetét. A <strong>Dorzolaterális Prefrontális Kéreg (dlPFC, BA 9/46)</strong> a folyamatban lévő nyelvi/kommunikációs szándékot közvetlen műveleti alcéllá fordítja: <em>„Üsd le az 'f' karaktert”</em>.<br><br>Ezzel párhuzamosan az <strong>Elülső Öbölkéreg (ACC, BA 24/32)</strong> fókuszált figyelmet rendel a mozdulathoz és monitorozza a motivációs hajtóerőt, biztosítva, hogy a leütés prioritást élvezzen a többi motoros ingerrel szemben. Eközben a <strong>Hátsó Fali Kéreg (PPC, BA 5/7)</strong> kiszámítja az egocentrikus téri transzformációt: összekapcsolja a képernyő vizuális koordinátáit és a billentyűzeten nyugvó kéz proprioceptív térképét (felhasználva az „F” billentyű kidomborodó tapintási bütykét).`,
      keyPoints: [
        "Az elvont szimbólumot operatív motoros céllá alakítja.",
        "Kiszűri a zavaró tényezőket és fenntartja a fókuszt (ACC).",
        "Integrálja az 'F' billentyű tapintási jelölésének visszajelzését (PPC)."
      ]
    }
  },
  {
    id: 2,
    camera: { x: 3.8, y: 3.2, z: 4.5, targetX: 0.8, targetY: 1.6, targetZ: 0.2 },
    activeMeshes: ["striatum", "globusPallidus", "thalamus", "subthalamic"],
    durationMs: 25,
    microDiagramType: "basalGangliaLoop",
    en: {
      title: "Action Gating & Subcortical Selection",
      subtitle: "The Basal Ganglia Loop (Striatum, GPi/SNr, Thalamus)",
      timeRange: "T+25 to T+50 ms",
      structures: [
        { name: "Striatum (Caudate & Putamen)", role: "Receives glutamatergic input from cortex; splits into D1 and D2 pathways." },
        { name: "GPi / SNr", role: "Internal Globus Pallidus & Substantia Nigra pars reticulata: Normally tonically inhibits thalamus." },
        { name: "STN", role: "Subthalamic Nucleus: Mediates hyperdirect and indirect brake on unwanted movement." },
        { name: "Thalamus (VL/VA)", role: "Ventral Lateral / Anterior nuclei: Disinhibited to fire excitatory burst back to cortex." }
      ],
      description: `Before any motor command is unleashed, it must pass through the subcortical filter of the <strong>Basal Ganglia</strong> to suppress competing effectors.<br><br>The cortex projects excitatory glutamate to the <strong>striatum</strong>. In the <strong>Direct Pathway ($D_1$ receptors)</strong>, striatal medium spiny neurons inhibit the <strong>internal globus pallidus (GPi)</strong> and <strong>substantia nigra reticulata (SNr)</strong>. Because the GPi/SNr tonically brakes the thalamus, inhibiting them <em>disinhibits</em> the <strong>Ventral Lateral / Ventral Anterior (VL/VA) thalamus</strong>.<br><br>Simultaneously, the <strong>Indirect ($D_2$) and Hyperdirect pathways</strong> excite the GPi via the subthalamic nucleus (STN), clamping down on surrounding finger/wrist movements. The released thalamus fires an excitatory burst back up to premotor cortex, granting clearance!`,
      keyPoints: [
        "Direct Pathway ($D_1$) disinhibits the VL/VA thalamus.",
        "Indirect & Hyperdirect pathways silence competing finger synergies.",
        "Thalamocortical feedback grants definitive motor clearance."
      ]
    },
    hu: {
      title: "Cselekvéskapuzás és szubkortikális szelekció",
      subtitle: "A törzsdúcok hurokrendszere (Striatum, GPi/SNr, Talamusz)",
      timeRange: "T+25-től T+50 ms-ig",
      structures: [
        { name: "Striatum (Caudatus és Putamen)", role: "Serkentő glutamáterg bemenetet kap a kéregből; közvetlen D1 és közvetett D2 pályákra oszlik." },
        { name: "GPi / SNr", role: "Belső globus pallidus és substantia nigra reticulata: Nyugalomban tónusosan gátolja a talamuszt." },
        { name: "STN (Nucleus subthalamicus)", role: "Subthalamicus mag: A hiperdirekt és indirekt fék közvetítője, elnyomja a mellékes mozgásokat." },
        { name: "Talamusz (VL/VA)", role: "Ventralis lateralis és anterior magok: A gátlás alól felszabadulva (diszinhibíció) serkentést küldenek a kéregbe." }
      ],
      description: `Mielőtt bármilyen motoros program elindulna, át kell haladnia a <strong>törzsdúcok (Basalis ganglionok)</strong> szubkortikális szűrőjén, hogy megelőzze a versengő izomcsoportok nem kívánt mozgását.<br><br>1. A kéreg serkentő glutamátot vetít a <strong>striatum</strong> felé.<br>2. <strong>A Direkt Pálya ($D_1$ dopaminreceptorok):</strong> A striatum gátolja a belső globus pallidust (<strong>GPi</strong>) és a substantia nigra pars reticulatát (<strong>SNr</strong>). Mivel a GPi/SNr alaphelyzetben gátolja a talamuszt, a gátlásuk <em>felszabadítja (diszinhibálja)</em> a talamusz specifikus átkapcsoló magjait (<strong>VL/VA</strong>).<br>3. <strong>Az Indirekt ($D_2$) és Hiperdirekt Pálya:</strong> Ezzel egy időben a környező mozgásszinergiákat (például a szomszédos ujjak vagy az alkar elmozdulását) elnyomja a subthalamicus mag (STN) GPi-serkentése.<br>4. <strong>Talamokortikális visszacsatolás:</strong> A felszabadult talamusz serkentő kisülést küld a premotoros területeknek, megadva a „zöld utat” a végrehajtáshoz.`,
      keyPoints: [
        "A direkt pálya ($D_1$) felszabadítja a gátlás alól a VL/VA talamuszt.",
        "Az indirekt és hiperdirekt pályák elnémítják a szomszédos ujjak mozgását.",
        "A talamokortikális visszacsatolás megadja a végleges végrehajtási engedélyt."
      ]
    }
  },
  {
    id: 3,
    camera: { x: -3.5, y: 2.2, z: 5.5, targetX: -0.8, targetY: 0.6, targetZ: -0.5 },
    activeMeshes: ["sma", "premotor", "leftCerebellum", "dentateNucleus", "pons"],
    durationMs: 25,
    microDiagramType: "cerebellarCircuit",
    en: {
      title: "Motor Assembly & Cerebellar Forward Modeling",
      subtitle: "SMA, Premotor (BA 6) & Left Cerebellar Hemisphere",
      timeRange: "T+50 to T+75 ms",
      structures: [
        { name: "SMA & PMA (BA 6)", role: "Supplementary Motor Area & Premotor Cortex: Assemble joint kinematics & timing." },
        { name: "Pontine Nuclei & MCP", role: "Receives efference copy; mossy fibers cross midline to contralateral cerebellum." },
        { name: "Left Cerebellar Cortex", role: "Granule & Purkinje cells compute forward model of key resistance (~45-60g)." },
        { name: "Dentate Nucleus & SCP", role: "Fires calibrated correction via Superior Cerebellar Peduncle back to VL thalamus." }
      ],
      description: `With clearance approved, higher motor cortices assemble the spatiotemporal firing pattern. The <strong>Supplementary Motor Area (SMA)</strong> sets sequenced timing, while <strong>Premotor Cortex (BA 6)</strong> plans joint angles for the metacarpophalangeal (MCP) and interphalangeal (IP) joints of the left index finger.<br><br>Crucially, an <strong>efference copy</strong> is sent via pontine nuclei across the middle cerebellar peduncle into the <strong>ipsilateral (left) cerebellum</strong>. Millions of <strong>granule cells</strong> and <strong>Purkinje cells</strong> compute an internal predictive forward model, calculating the exact force required to overcome the keyboard switch resistance (~45–60 grams) without slamming the key into the chassis. Corrective signals stream through the <strong>dentate nucleus</strong> $\\rightarrow$ <strong>superior cerebellar peduncle</strong> $\\rightarrow$ <strong>contralateral thalamus</strong> $\\rightarrow$ motor cortex within milliseconds.`,
      keyPoints: [
        "SMA and Premotor assemble joint kinematics and descent velocity.",
        "Efference copy crosses to Left Cerebellum via pontine mossy fibers.",
        "Purkinje forward model calibrates ~45-60g tactile switch resistance."
      ]
    },
    hu: {
      title: "Motoros összeállítás és kisagyi kalibráció",
      subtitle: "SMA, Premotoros kéreg (BA 6) és a bal kisagyfélteke",
      timeRange: "T+50-től T+75 ms-ig",
      structures: [
        { name: "SMA és Premotoros kéreg (BA 6)", role: "Kiegészítő motoros terület és premotoros kéreg: Összeállítják az ízületi kinematikát és időzítést." },
        { name: "Hídi magok (Nuclei pontis) és MCP", role: "Efferencia másolatot kapnak; a moharostok átkereszteződnek a bal kisagyba." },
        { name: "Bal kisagyi kéreg", role: "Szemcse- és Purkinje-sejtek előrecsatoló modellt alkotnak a billentyű ~45-60g ellenállására." },
        { name: "Dentatus mag és SCP", role: "Korrekciós impulzust bocsát ki a felső kisagykaron át a talamusz VL magjához." }
      ],
      description: `A törzsdúci jóváhagyás után a magasabb motoros kérgi területek összeállítják a térbeli-időbeli lefutást:<br><br>• A <strong>Kiegészítő Motoros Terület (SMA)</strong> meghatározza az időzítési szekvenciát, míg a <strong>Premotoros Kéreg (BA 6)</strong> az izomaktivitás mintázatát alakítja ki (a bal mutatóujj MCP, PIP és DIP ízületeinek mozgásszögeit).<br>• <strong>A kisagyi prediktív hurok:</strong> A motoros és premotoros kéreg egy <strong>efferencia másolatot</strong> (a tervezett parancs pontos másolatát) küld a hídi magokhoz, amelyek a középső kisagykaron (MCP) át a <strong>bal kisagyba</strong> kereszteződnek moharostokként.<br>• Szemcsesejtek milliói és a <strong>Purkinje-sejtek</strong> kiszámítják a belső előrecsatoló modellt: a billentyűkapcsoló mechanikai ellenállásának leküzdéséhez szükséges pontos erőt (~45–60 gramm), megelőzve, hogy az ujj túl erősen csapódjon a billentyűzetvázba.<br>• A korrekciós jelek a <strong>dentatus magon</strong> $\\rightarrow$ felső kisagykaron (SCP) $\\rightarrow$ ellenoldali talamuszon át milliszekundumokon belül visszajutnak a motoros kéregbe.`,
      keyPoints: [
        "Az SMA és Premotoros kéreg beállítja az ízületi kinematikát.",
        "Az efferencia másolat a hídi magokon át a bal kisagyba kereszteződik.",
        "A Purkinje-sejtek előrecsatoló modellje behangolja a 45–60g ellenállást."
      ]
    }
  },
  {
    id: 4,
    camera: { x: 3.2, y: 5.0, z: 4.8, targetX: 1.2, targetY: 3.2, targetZ: 0.5 },
    activeMeshes: ["rightM1", "handKnob"],
    durationMs: 15,
    microDiagramType: "betzDepolarization",
    en: {
      title: "Command Generation (Primary Motor Cortex, M1)",
      subtitle: "Right Precentral Gyrus (BA 4) - 'Hand Knob'",
      timeRange: "T+75 to T+90 ms",
      structures: [
        { name: "Right M1 Hand Knob", role: "Inverted omega/epsilon region of precentral gyrus dedicated to digit II." },
        { name: "Layer V Pyramidal Neurons", role: "Giant Betz cells depolarize synchronously, generating high-velocity action potentials." },
        { name: "Dynamic Parameter Encoding", role: "Spikes encode direction vector, force rate ($dF/dt$), and velocity." }
      ],
      description: `The finalized motor program converges upon the <strong>right precentral gyrus (Primary Motor Cortex, M1, BA 4)</strong>, specifically in the famous inverted-omega <strong>'hand knob'</strong> of the motor homunculus.<br><br>Here, Layer V <strong>pyramidal projection neurons</strong>, including giant <strong>Betz cells</strong> (the largest somas in the human CNS), depolarize synchronously. Their high-frequency action potential bursts encode dynamic kinetic parameters: instantaneous velocity, targeted direction vector, and force output calibrated for the left index finger motor pools.`,
      keyPoints: [
        "Concentrated in the right motor homunculus hand knob.",
        "Layer V giant Betz cells trigger synchronous high-amplitude bursts.",
        "Encodes kinematics, velocity, and force parameters for left digit II."
      ]
    },
    hu: {
      title: "Parancsgenerálás (Elsődleges motoros kéreg, M1)",
      subtitle: "Jobb gyrus precentralis (BA 4) – „Kézkiemelkedés” (Hand Knob)",
      timeRange: "T+75-től T+90 ms-ig",
      structures: [
        { name: "Jobb M1 Kézkiemelkedés", role: "A precentralis tekervény fordított omega/epszilon alakú szakasza, a II. ujj reprezentációja." },
        { name: "V. rétegbeli piramissejtek", role: "Óriás Betz-sejtek szinkron depolarizációja, nagy sebességű akciós potenciálok." },
        { name: "Dinamikus paraméterkódolás", role: "A kisülések sebességet, irányvektort és erőkifejtést kódolnak ($dF/dt$)." }
      ],
      description: `A finomhangolt motoros terv megérkezik a <strong>jobb gyrus precentralisba (M1, BA 4)</strong>, a motoros homunculus jellegzetes „kézkiemelkedés” (hand knob) régiójába:<br><br>• Az V. agykérgi réteg <strong>piramissejtjei</strong> (köztük a humán központi idegrendszer legnagyobb sejttestű neuronjai, az <strong>óriás Betz-sejtek</strong>) szinkronban depolarizálódnak.<br>• Ezek a neuronok kódolják a dinamikus kinetikai paramétereket: a mozgás irányvektorát, sebességét és a kifejtendő erő nagyságát, kifejezetten a bal kéz II. ujjának (mutatóujj) motoros egységeit célozva.`,
      keyPoints: [
        "A jobb oldali motoros homunculus kézkiemelkedésében összpontosul.",
        "Az V. réteg óriás Betz-sejtjei szinkron, nagy amplitúdójú kisüléseket hoznak létre.",
        "Kódolja a bal mutatóujj pontos irányát, sebességét és erejét."
      ]
    }
  },
  {
    id: 5,
    camera: { x: 2.8, y: 0.5, z: 4.2, targetX: 0.2, targetY: 0.2, targetZ: 0.0 },
    activeMeshes: ["internalCapsule", "brainstem", "medullaPyramid", "decussationTract"],
    durationMs: 20,
    microDiagramType: "pyramidalDecussation",
    en: {
      title: "The Descending Highway & Pyramidal Decussation",
      subtitle: "Upper Motor Neuron Axonal Conduction (CNS)",
      timeRange: "T+90 to T+110 ms",
      structures: [
        { name: "Corona Radiata", role: "Axons converge from cortex into a densely packed descending subcortical fan." },
        { name: "Internal Capsule", role: "Funnels through posterior limb between thalamus and lentiform nucleus." },
        { name: "Crus Cerebri & Pons", role: "Traverses cerebral peduncle (middle 3/5) and interdigitates through transverse pontine fibers." },
        { name: "Pyramidal Decussation", role: "At cervicomedullary junction, ~85-90% of fibers cross from right to left into LCST." }
      ],
      description: `The massive axonal bundle plunges downward through the central nervous system along the Upper Motor Neuron highway:<br><br>1. <strong>Corona Radiata:</strong> Axons converge from the expansive cortical mantle.<br>2. <strong>Internal Capsule:</strong> Traverses the <em>posterior limb</em>, tightly sandwiched between the thalamus and lentiform nucleus.<br>3. <strong>Midbrain & Pons:</strong> Traverses the middle three-fifths of the <em>crus cerebri</em>, then threads through transverse pontine fibers.<br>4. <strong>Medullary Pyramids:</strong> Forms distinct longitudinal ridges on the ventral medulla.<br>5. <strong>Pyramidal Decussation:</strong> At the cervicomedullary junction, <strong>~85–90% of the fibers cross the midline</strong> from right to left, entering the <strong>lateral corticospinal tract (LCST)</strong> to command the left limb.`,
      keyPoints: [
        "Axons funnel through posterior limb of internal capsule.",
        "Descent through cerebral peduncle and ventral medullary pyramids.",
        "Crucial decussation: ~90% cross over to left lateral corticospinal tract."
      ]
    },
    hu: {
      title: "Leszálló pályarendszer és piramiskereszteződés",
      subtitle: "Felső motoneuron axonális vezetése a központi idegrendszerben",
      timeRange: "T+90-től T+110 ms-ig",
      structures: [
        { name: "Corona radiata", role: "Az axonok az agykéregből sűrű szubkortikális legyezővé futnak össze." },
        { name: "Capsula interna (Crus posterius)", role: "A talamusz és a nucleus lentiformis közötti hátsó száron tölcsérszerűen halad át." },
        { name: "Crus cerebri és híd (Pons)", role: "Az agykocsányon és a haránt hídi rostokon áthaladva száll lefelé." },
        { name: "Piramiskereszteződés (Decussatio)", role: "A nyúltvelő-gerincvelő átmenetnél a rostok kb. 85-90%-a átkereszteződik a bal oldali LCST-be." }
      ],
      description: `A felső motoneuronok akciós potenciáljai lezúdulnak a központi idegrendszer fő szupersztrádáján:<br><br>1. <strong>Corona radiata:</strong> Az axonok a kiterjedt agykéregből egy kompakt kötegbe futnak össze.<br>2. <strong>Capsula interna:</strong> A rostok a <em>crus posteriuson (hátsó száron)</em> haladnak át, a talamusz és a nucleus lentiformis között.<br>3. <strong>Középagy (Crus cerebri):</strong> Az agykocsány középső háromötödén száll le.<br>4. <strong>Híd (Pons):</strong> Átszövi a haránt hídi rostokat és a hídi magokat.<br>5. <strong>Nyúltvelői piramisok:</strong> Kiemelkedő hosszirányú redőket alkot a nyúltvelő elülső felszínén.<br>6. <strong>Piramiskereszteződés (Decussatio pyramidum):</strong> A nyúltvelő-gerincvelő átmenetnél <strong>a rostok kb. 85–90%-a átkereszteződik az ellenoldalra (balra)</strong>, kialakítva az oldalsó kortikospinális pályát (<strong>Tractus corticospinalis lateralis - LCST</strong>), amely a bal kezet vezérli.`,
      keyPoints: [
        "A rostok a capsula interna hátsó szárán tömörülnek össze.",
        "Leszállás a crus cerebrin és a nyúltvelői piramisokon keresztül.",
        "Döntő kereszteződés: a rostok kb. 90%-a átkereszteződik a bal oldali LCST-be."
      ]
    }
  },
  {
    id: 6,
    camera: { x: -1.8, y: -2.2, z: 4.0, targetX: -0.5, targetY: -2.8, targetZ: 0.0 },
    activeMeshes: ["spinalCord", "cervicalEnlargement", "ventralHorn"],
    durationMs: 15,
    microDiagramType: "spinalCMMonodynapse",
    en: {
      title: "Spinal Cord Synapse (Cervical Enlargement)",
      subtitle: "C7–T1 Corticomotoneuronal (CM) Monosynaptic Junction",
      timeRange: "T+110 to T+125 ms",
      structures: [
        { name: "Left Lateral Funiculus", role: "Carries LCST myelinated axons down to cervical enlargement (C7-T1)." },
        { name: "Rexed Lamina IX", role: "Ventral (anterior) horn containing somas of alpha (α) motor neurons." },
        { name: "Direct CM Synapse", role: "Upper motor neuron monosynapses directly onto lower motor neuron without interneuron delay." }
      ],
      description: `The descending action potentials reach the <strong>cervical enlargement (C7–T1 segments)</strong> of the spinal cord within the left lateral funiculus.<br><br>Unlike most mammalian motor systems, primates and humans possess specialized direct <strong>corticomotoneuronal (CM) synapses</strong>. The descending Betz cell axon enters Rexed lamina IX in the ventral horn and forms a direct, monosynaptic connection onto the dendrites and soma of the <strong>alpha ($\\alpha$) motor neuron</strong>.<br><br>By bypassing interneuronal synaptic delays, this direct monosynaptic wiring enables fast, highly fractionated, independent finger movements essential for typing.`,
      keyPoints: [
        "Reaches cervical enlargement motor pools at C7–T1.",
        "Direct monosynaptic connection onto alpha motor neuron.",
        "Eliminates interneuronal latency, enabling fractionated finger control."
      ]
    },
    hu: {
      title: "Gerincvelői szinapszis (Cervicalis intumescentia)",
      subtitle: "C7–T1 Corticomotoneuronalis (CM) monoszinaptikus kapcsolat",
      timeRange: "T+110-től T+125 ms-ig",
      structures: [
        { name: "Bal oldali köteg (Funiculus lateralis)", role: "Vezeti az LCST mielinizált axonjait a nyakcsigolyai tágulatig (C7-T1)." },
        { name: "Rexed lamina IX", role: "A gerincvelő mellső (ventralis) szarva, az alfa (α) motoneuronok sejttesteivel." },
        { name: "Közvetlen CM szinapszis", role: "A felső motoneuron közvetlenül, interneuron nélkül kapcsolódik az alsó motoneuronhoz." }
      ],
      description: `A leszálló akciós potenciálok a gerincvelő bal oldalkötegén keresztül elérik a <strong>nyakcsigolyai tágulatot (C7–T1 szegmentumok)</strong>:<br><br>• Az alacsonyabb rendű emlősökkel ellentétben az ember és a főemlősök közvetlen <strong>corticomotoneuronalis (CM) szinapszisokkal</strong> rendelkeznek.<br>• A felső motoneuronok axonjai közvetlenül belépnek az elülső (ventralis) szarv <strong>Rexed lamina IX</strong> rétegébe, és monoszinaptikus kapcsolatot létesítenek az <strong>alfa ($\\alpha$) motoneuronokkal</strong>.<br>• Ez a közvetlen monoszinaptikus kapcsolat kiiktatja a gerincvelői interneuronális késleltetéseket, és ez adja a finom, független, frakcionált ujjmozgások (például a precíz gépelés) evolúciós alapját.`,
      keyPoints: [
        "Eléri a C7–T1 szegmentumok motoros neuroncsoportjait.",
        "Közvetlen monoszinaptikus kapcsolat az alfa-motoneuronnal.",
        "Kiiktatja az interneuronális késleltetést, lehetővé téve a független ujjmozgást."
      ]
    }
  },
  {
    id: 7,
    camera: { x: -3.8, y: -4.5, z: 5.5, targetX: -1.8, targetY: -5.0, targetZ: 0.5 },
    activeMeshes: ["brachialPlexus", "armNerves", "medianNerve", "forearmMuscles"],
    durationMs: 20,
    microDiagramType: "peripheralConduction",
    en: {
      title: "Peripheral Conduction (Lower Motor Neuron to Hand)",
      subtitle: "Brachial Plexus, Median & Radial Nerves",
      timeRange: "T+125 to T+145 ms",
      structures: [
        { name: "Brachial Plexus", role: "Exits ventral root (C7-T1), travels through middle/lower trunks into cords." },
        { name: "Median Nerve", role: "Innervates FDS & radial slip of FDP in forearm, plus 1st lumbrical in palm." },
        { name: "Radial Nerve", role: "Supplies reciprocal antagonist tone to Extensor Indicis to brake and stabilize descent." },
        { name: "A-alpha Axons", role: "Heavy myelination drives saltatory conduction at 50–120 m/s." }
      ],
      description: `The alpha motor neuron depolarizes and fires an action potential down its heavily myelinated $A\\alpha$ peripheral axon at rapid velocities of <strong>50–120 m/s</strong>:<br><br>1. <strong>Root & Plexus:</strong> Exits the spinal cord via ventral roots $\\rightarrow$ spinal nerves $\\rightarrow$ traverses the <strong>brachial plexus</strong>.<br>2. <strong>Median Nerve:</strong> Courses down the anterior arm and forearm, branching to innervate the <strong>Flexor Digitorum Superficialis (FDS)</strong> and radial slip of the <strong>Flexor Digitorum Profundus (FDP)</strong> (flexing proximal and distal interphalangeal joints), as well as the <strong>first lumbrical</strong> in the palm (flexing the MCP joint).<br>3. <strong>Radial Nerve:</strong> Simultaneously coordinates reciprocal extensor tone to <strong>Extensor Indicis</strong> and <strong>Extensor Digitorum</strong>, ensuring smooth descent without drift or tremor.`,
      keyPoints: [
        "Conduction along A-alpha myelinated axon at 50-120 m/s.",
        "Median nerve drives FDS, FDP, and first lumbrical flexion.",
        "Radial nerve provides antagonist braking tone for pinpoint precision."
      ]
    },
    hu: {
      title: "Perifériás vezetés (Alsó motoneuron a kézhez)",
      subtitle: "Karfonat (Plexus brachialis), Nervus medianus és Nervus radialis",
      timeRange: "T+125-től T+145 ms-ig",
      structures: [
        { name: "Karfonat (Plexus brachialis)", role: "Kilép a C7-T1 ventralis gyökereken át, áthalad a törzseken és kötegeken." },
        { name: "Nervus medianus", role: "Beidegzi az alkar FDS és FDP hajlítóizmait, valamint az I. gilisztaizmot a tenyérben." },
        { name: "Nervus radialis", role: "Finom reciprok feszítő tónust ad az Extensor indicisnek a leereszkedés fékezésére." },
        { name: "A-alfa axonok", role: "Vastag mielinhüvely biztosítja az 50-120 m/s sebességű szaltatórikus vezetést." }
      ],
      description: `Az alsó motoneuron akciós potenciált indít el vastagon mielinizált $A\\alpha$ axonján keresztül, rendkívül gyors, <strong>50–120 m/s</strong> sebességgel:<br><br>1. <strong>Gyökér és karfonat:</strong> Kilép a mellső gyökéren $\\rightarrow$ gerincvelői idegen $\\rightarrow$ átfut a <strong>karfonaton (Plexus brachialis)</strong>.<br>2. <strong>Perifériás idegek:</strong><br>• <strong>Nervus medianus:</strong> Végigfut a kar és alkar elülső részén, beidegezve a <strong>m. flexor digitorum superficialist (FDS)</strong> és a <strong>m. flexor digitorum profundus (FDP)</strong> radiális felét (amelyek a mutatóujj ujjperceit hajlítják), valamint a tenyérben lévő <strong>első gilisztaizmot (m. lumbricalis I)</strong> az alapízület hajlítására.<br>• <strong>Nervus radialis:</strong> Ezzel párhuzamosan finoman hangolt reciprok nyújtó tónust biztosít a <strong>m. extensor indicis</strong> és <strong>m. extensor digitorum</strong> izmoknak, fékezve az ujj leereszkedését és megakadályozva az oldalirányú kitérést vagy remegést.`,
      keyPoints: [
        "Gyors szaltatórikus vezetés az A-alfa axonon 50–120 m/s sebességgel.",
        "A n. medianus működteti az FDS, FDP és lumbricalis izmokat.",
        "A n. radialis ellentétes fékizmokat aktivál a milliméteres pontosságért."
      ]
    }
  },
  {
    id: 8,
    camera: { x: -2.2, y: -6.2, z: 3.2, targetX: -1.2, targetY: -6.6, targetZ: 0.2 },
    activeMeshes: ["handModel", "indexFinger", "fKeySwitch", "keyboardChassis"],
    durationMs: 20,
    microDiagramType: "nmjCrossbridge",
    en: {
      title: "Neuromuscular Junction & The Keystroke",
      subtitle: "Excitation-Contraction Coupling & Mechanical Switch Activation",
      timeRange: "T+145 to T+165 ms",
      structures: [
        { name: "Motor End Plate (NMJ)", role: "ACh exocytosis binds nicotinic receptors, initiating sarcolemmal action potential." },
        { name: "T-Tubules & RyR1", role: "Depolarization triggers DHPR to uncap RyR1; massive Ca2+ flood from sarcoplasmic reticulum." },
        { name: "Actin-Myosin Crossbridge", role: "Ca2+ binds Troponin C, shifting tropomyosin and triggering power stroke contraction." },
        { name: "Key Switch 'F'", role: "Tendon pulls phalanx; finger descends, overcoming ~45-60g resistance to close circuit contact." }
      ],
      description: `The electrical wave arrives at the motor end plate of the forearm flexors:<br><br>1. Voltage-gated $\\text{Ca}^{2+}$ channels open, triggering exocytosis of <strong>acetylcholine (ACh)</strong> across the synaptic cleft.<br>2. ACh binds to post-junctional <strong>nicotinic receptors ($\\text{nAChR}$)</strong>, generating an end-plate potential that propagates down the sarcolemma.<br>3. Depolarization invades the <strong>T-tubules</strong>, mechanically activating dihydropyridine receptors (DHPR), which uncap <strong>ryanodine receptors (RyR1)</strong> on the sarcoplasmic reticulum.<br>4. $\\text{Ca}^{2+}$ surges into the sarcoplasm, binds <strong>troponin C</strong>, displaces tropomyosin, and initiates the <strong>actin-myosin cross-bridge cycle</strong>.<br>5. The flexor tendon pulls the phalanx down: the left index finger depresses the <strong>'F' key switch</strong>, overcoming its <strong>~45–60g spring resistance</strong> and striking the mechanical leaf contact.<br><br><strong>Total elapsed time: ~120–180 milliseconds from initial intent to keypress!</strong>`,
      keyPoints: [
        "ACh release triggers sarcolemmal end-plate potential.",
        "T-tubule DHPR/RyR1 activation releases massive sarcoplasmic Ca2+.",
        "Actin-myosin power stroke pulls tendon, depressing the F key (~45-60g)."
      ]
    },
    hu: {
      title: "Neuromuszkuláris junkció és a billentyű leütése",
      subtitle: "Elektromechanikai csatolás és a mechanikus kapcsoló lezárása",
      timeRange: "T+145-től T+165 ms-ig",
      structures: [
        { name: "Motoros véglemez (NMJ)", role: "ACh exocitózis nikotinos receptorokhoz kötődik, sarcolemma akciós potenciált indítva." },
        { name: "T-tubulusok és RyR1", role: "A depolarizáció a DHPR közvetítésével megnyitja a ryanodin receptorokat (RyR1); Ca2+ kiáramlás." },
        { name: "Aktin-miozin keresztkötés", role: "A Ca2+ a troponin C-hez kötődik, elmozdítja a tropomiozint, beindítva az izomösszehúzódást." },
        { name: "„F” billentyűkapcsoló", role: "Az ín meghúzza az ujjpercet; az ujj legyőzi a ~45-60g rugóerőt és zárja az érintkezőt." }
      ],
      description: `A hullám eléri a célizmok motoros véglemezét:<br><br>1. Az akciós potenciál eléri a preszinaptikus motoros végfácskát.<br>2. Feszültségfüggő $\\text{Ca}^{2+}$-csatornák nyílnak, ami <strong>acetilkolin (ACh)</strong> exocitózisát váltja ki a szinaptikus résbe.<br>3. Az ACh a posztszinaptikus <strong>nikotinos receptorokhoz ($\\text{nAChR}$)</strong> kötődik a motoros véglemezen, véglemez-potenciált keltve, amely sarcolemma akciós potenciállá alakul.<br>4. A depolarizáció behatol a <strong>T-tubulusokba</strong>, aktiválva a dihidropiridin-receptorokat (DHPR), amelyek mechanikusan megnyitják a szarkoplazmatikus retikulum <strong>ryanodin-receptorait (RyR1)</strong>.<br>5. A $\\text{Ca}^{2+}$ elárasztja a szarkoplazmát, kötődik a <strong>troponin C-hez</strong>, elmozdítja a tropomiozint, és elindítja az <strong>aktin-miozin keresztkötési ciklust</strong>.<br>6. Az ín meghúzza az ujjpercet: a bal mutatóujj lefelé mozdul, lenyomja az „F” billentyű alatti kapcsolót, legyőzi annak <strong>~45–60 grammos mechanikai ellenállását</strong>, és zárja a kapacitív vagy mechanikus érintkezőt.<br><br><strong>A teljes folyamat a kezdeti prefrontális szándéktól mindössze kb. 120–180 milliszekundumot vesz igénybe!</strong>`,
      keyPoints: [
        "Az acetilkolin (ACh) felszabadulása sarcolemma véglemez-potenciált indít.",
        "A T-tubulus DHPR/RyR1 aktivációja masszív szarkoplazmatikus Ca2+ kiáramlást okoz.",
        "Az aktin-miozin összehúzódás meghúzza az inat, lenyomva az F billentyűt (~45-60g)."
      ]
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { STAGES_DATA };
}
