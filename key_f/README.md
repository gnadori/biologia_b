# NeuroDynamics of the "F" Key 🧠⌨️ / Az „F” billentyű neurodinamikája

An interactive 3D neuro-motor simulation webpage that visualizes the distributed neural cascade when you press the **"F" key** on a keyboard with your left index finger. Features complete bilingual support (**Magyar** / **English**).

---

## Áttekintés / Overview

Az **„F” billentyű leütése** egy mindössze **~120–180 milliszekundumos** összetett neurális hurkot foglal magában:
1. **Célkitűzés és téri transzformáció**: dlPFC (BA 9/46), ACC (BA 24/32), PPC (BA 5/7) – képernyő és a billentyű tapintási bütykének koordinációja.
2. **Cselekvéskapuzás a törzsdúcokban**: Direkt pálya ($D_1$) talamusz-felszabadítás; STN hiperdirekt fék a szomszédos ujjak ellen.
3. **Motoros összeállítás és kisagyi kalibráció**: SMA/PMA (BA 6) és a bal kisagy Purkinje-sejtjei előrecsatoló modellt alkotnak a kapcsoló ~45–60g ellenállására.
4. **Parancsgenerálás (M1)**: Jobb gyrus precentralis „Kézkiemelkedés” (Hand Knob), V. rétegbeli óriás Betz-sejtek szinkron kisülése.
5. **Leszálló pályarendszer és piramiskereszteződés**: Corona radiata $\rightarrow$ capsula interna $\rightarrow$ crus cerebri $\rightarrow$ híd $\rightarrow$ nyúltvelői piramisok $\rightarrow$ **~85–90% átkereszteződés bal oldali LCST-be**.
6. **Gerincvelői szinapszis**: C7–T1 cervicalis intumescentia, közvetlen corticomotoneuronalis (CM) monoszinapszis a Rexed lamina IX alfa-motoneuronjaira.
7. **Perifériás vezetés**: A$\alpha$ vezetés (50–120 m/s) a plexus brachialison, nervus medianuson (FDS, FDP, 1. lumbricalis) és nervus radialison át.
8. **Neuromuszkuláris junkció és leütés**: ACh $\rightarrow$ nAChR $\rightarrow$ T-tubulus DHPR/RyR1 $\text{Ca}^{2+}$ kiáramlás $\rightarrow$ aktin-miozin összehúzódás $\rightarrow$ a bal mutatóujj lenyomja a kapcsolót!

---

## Funkciók / Features

- **Kétnyelvű kezelőfelület (HU / EN)**: A felső fejlécben elhelyezett `[ 🇭🇺 HU | 🇬🇧 EN ]` választóval a teljes kezelőfelület, a szöveges leírások, a 3D feliratok, a rétegkapcsolók és a 2D mikroszkópos ábrák nyelve azonnal váltható.
- **Közvetlen billentyűzet-interakció**: Bármikor leütheted a fizikai <kbd>F</kbd> billentyűt a szimuláció elindításához.
- **Interaktív 3D anatómiai modell (Three.js)**: Agykéreg, törzsdúcok, talamusz, bal kisagyfélteke, agytörzs, piramiskereszteződés, gerincvelő, karfonat, nervus medianus és nervus radialis, bal kéz és billentyűzet kapcsoló.
- **2D mikroszkópos / hálózati ábrák**: Dinamikus Canvas ábrák a törzsdúci körökről, Purkinje-sejtekről, Betz-sejt akciós potenciálról, piramiskereszteződésről, gerincvelői szinapszisról és a véglemezről.
- **Eljárási Web Audio hanghatások**: Feszültségfüggő frekvenciamodulált akciós potenciál hangok és mechanikus billentyűhang.
1. **Prefrontal Intent & Egocentric Spatial Map**: dlPFC (BA 9/46), ACC (BA 24/32), PPC (BA 5/7) integrating screen coordinates and the tactile nib on the "F" keycap.
2. **Action Gating via Basal Ganglia**: Direct pathway ($D_1$) disinhibition of VL/VA thalamus; STN hyperdirect surround suppression of adjacent fingers.
3. **Motor Assembly & Cerebellar Forward Modeling**: SMA/PMA (BA 6) and left cerebellar Purkinje forward model calibrating mechanical switch resistance (~45–60g).
4. **Command Generation in M1**: Layer V giant Betz cells in the right precentral gyrus "Hand Knob" depolarize synchronously.
5. **Descending Highway & Pyramidal Decussation**: Corona radiata $\rightarrow$ posterior limb of internal capsule $\rightarrow$ crus cerebri $\rightarrow$ pons $\rightarrow$ medullary pyramids $\rightarrow$ **~85–90% crossing at cervicomedullary junction into left LCST**.
6. **Spinal Cord CM Monosynapse**: Left lateral funiculus to C7–T1 cervical enlargement; direct monosynapse onto Rexed lamina IX alpha ($\alpha$) motor neurons.
7. **Peripheral Conduction**: A$\alpha$ conduction (50–120 m/s) via brachial plexus, median nerve (FDS, FDP, 1st lumbrical), and radial nerve reciprocal brake.
8. **Neuromuscular Junction & Mechanical Event**: ACh release $\rightarrow$ nAChR $\rightarrow$ T-tubule DHPR/RyR1 $\text{Ca}^{2+}$ flood $\rightarrow$ actin-myosin power stroke $\rightarrow$ left index finger flexes, switch closes contact!

---

## Features

- **Direct Keyboard Interactivity**: Press the physical <kbd>F</kbd> key on your keyboard anytime to fire the neural impulse!
- **Interactive 3D Anatomical Model (Three.js)**:
  - Transparent dual-hemisphere brain with highlightable cortical zones (dlPFC, ACC, PPC, SMA, M1 Hand Knob).
  - Subcortical basal ganglia (caudate, putamen, GPi, STN) and VL/VA thalamus.
  - Ipsilateral (left) cerebellum and dentate nucleus.
  - Brainstem, medullary pyramids, and the dramatic **pyramidal decussation midline crossover**.
  - Cervical spinal cord (C7–T1) with ventral horn.
  - Peripheral brachial plexus, arm, and median/radial nerves.
  - 3D Left Hand model with articulated index finger (MCP, PIP, DIP joints).
  - 3D Mechanical keyboard chassis with homing nib on the "F" key and working internal switch stem/spring.
  - Real-time traveling action potential particle streams along 3D neural tracts.
- **Microscopic / Circuit Canvas Visualizer**:
  - Live animated 2D circuit diagrams for each stage (Prefrontal vector transform, Basal Ganglia D1/D2 loop, Cerebellar Purkinje arbor & 45-60g gauge, Betz cell $V_m$ oscilloscope trace, Decussation crossing diagram, Spinal CM synapse, Peripheral saltatory leaps, NMJ & mechanical switch contacts).
- **Procedural Web Audio API Sound Engine**:
  - Synthesized action potential frequency sweeps descending from high cortical frequencies to lower motor neurons, concluding with a crisp mechanical keyboard switch bottom-out click.
- **Playback Controls**:
  - Real-time (1.0x, ~160ms flash), Slow-mo (0.25x, 0.1x, 0.05x), Step-by-Step, Scrubbing, and Camera presets.
- **Layer Visibility & 3D Hover Tooltips**:
  - Toggle anatomical layers and hover over structures in 3D to view functional labels.

---

## How to Run

Simply open [index.html](file:///c:/Users/Nádori%20G/Desktop/AKG/_2026-2027/BiolB/f-billentyu/index.html) in any modern web browser (Google Chrome, Firefox, Edge, Safari).
