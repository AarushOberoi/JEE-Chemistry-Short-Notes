(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
// MO diagram helper: levels list [y, label, electrons]
const mo = (sp, ne) => {
  // valence MO diagram (2s, 2p); sp = true: s–p mixing order (B2, C2, N2)
  const order = sp ? [["σ2s", 1], ["σ*2s", 1], ["π2p", 2], ["σ2p", 1], ["π*2p", 2], ["σ*2p", 1]] : [["σ2s", 1], ["σ*2s", 1], ["σ2p", 1], ["π2p", 2], ["π*2p", 2], ["σ*2p", 1]];
  let left = ne, o = "";
  order.forEach(([lab, k], idx) => {
    const y = 205 - idx * 34, c = Math.min(left, 2 * k); left -= c;
    const per = Array(k).fill(0); let cc = c; for (let i = 0; i < k && cc > 0; i++, cc--) per[i]++; for (let i = 0; i < k && cc > 0; i++, cc--) per[i]++;
    per.forEach((n, i) => {
      const x = 60 + i * 50 - (k - 1) * 25;
      o += s.line(x, y, x + 40, y, 'style="stroke-width:2.2"');
      if (n >= 1) o += s.txt(x + (n === 2 ? 9 : 15), y - 4, "↑", 'style="font-size:18px"');
      if (n === 2) o += s.txt(x + 21, y - 4, "↓", 'style="font-size:18px"');
    });
    o += s.txt(150, y + 5, lab, 'style="font-size:14px"');
  });
  return o;
};
NB.ch({
n: "11-4", short: "Chemical Bonding and Molecular Structure",
intro: R`<b>Big idea:</b> electron pairs around an atom spread out as far as possible (VSEPR → shape); orbitals mix to fit that shape (hybridisation); MO theory explains bond order and magnetism.`,
sec: [
["Shortcuts First", [
  STEPS("Find the shape of any molecule in 3 steps", [["Count", R`$H = \frac12[V + M - C + A]$`, "V valence e⁻ of centre, M monovalent atoms, C cation charge, A anion charge"], ["Electron geometry", "2 linear · 3 trigonal · 4 tetrahedral · 5 TBP · 6 octahedral · 7 PBP", "H = number of pairs"], ["Shape", "remove lone pairs (lp go equatorial in TBP, trans in octahedral)", "bp = attached atoms"]]),
  KEY([R`<b>Bond order</b> $= \frac12(N_b - N_a)$; higher → shorter, stronger. 0 → does not exist.`, R`Up to $\ce{N2}$ (≤ 14 e⁻) π2p lies <b>below</b> σ2p; from $\ce{O2}$ σ2p is below π2p.`, R`Unpaired electrons → paramagnetic: $\ce{B2}$, $\ce{O2}$, $\ce{O2+}$, $\ce{O2-}$; diamagnetic: $\ce{C2}$, $\ce{N2}$, $\ce{F2}$, $\ce{O2^2-}$.`, R`Dipole moment zero: $\ce{CO2, BF3, CH4, CCl4, PCl5, SF6, XeF4, XeF2}$.`], "Must-remember")
]],
["Kossel–Lewis Approach & Formal Charge", [
  P(R`Atoms bond to reach a noble-gas (octet) configuration: by <b>transfer</b> of electrons (ionic, Kossel) or <b>sharing</b> (covalent, Lewis). Lewis symbols show valence electrons as dots.`),
  P(R`<b>Formal charge</b> on an atom in a Lewis structure; the structure with the smallest formal charges is preferred:`, R`\text{FC} = V - L - \tfrac12 S`, S(s.t(30, 50, "O", 18) + s.t(90, 50, "O", 18) + s.t(150, 50, "O", 18) + s.bond(46, 44, 86, 44, 1) + s.bond(106, 44, 146, 44, 2) + s.t(85, 25, "+1", 12, 'class="red"') + s.t(25, 25, "−1", 12, 'class="red"') + s.t(150, 25, "0", 12, 'class="red"') + s.t(30, 85, "O₃: centre O has FC +1, one end −1", 12), 220, 95, "Formal charges in ozone")),
  P(R`<b>Limitations of the octet rule</b>: incomplete octet (BeCl2, BCl3, LiCl), odd-electron molecules (NO, NO2), expanded octet (PF5, SF6, H2SO4 — period 3 onwards, using d orbitals); does not explain shape or stability.`),
  J(R`Octet check from Lewis structures: SF4 (10 e⁻) and SF6 (12 e⁻) exceed the octet; H2S has exactly 8. SO2 and SO3 exceed it only when drawn with all S=O double bonds, so follow the structure the question intends.`, "2026 · 6 Apr · Shift 2")
]],
["Ionic Bond, Lattice Enthalpy & Fajans' Rules", [
  P(R`Ionic bond formation is favoured by <b>low IE</b> of the metal, <b>negative electron gain enthalpy</b> of the non-metal and <b>high lattice enthalpy</b>. Lattice enthalpy (energy to separate 1 mol of solid into gaseous ions) is found from the <b>Born–Haber cycle</b>.`, null, S(s.t(10, 140, "Na(s) + ½Cl₂(g)", 12) + s.arr(60, 128, 60, 100) + s.t(65, 115, "sub + ½ diss", 11) + s.t(10, 95, "Na(g) + Cl(g)", 12) + s.arr(60, 82, 60, 55) + s.t(65, 70, "IE + ΔegH", 11) + s.t(10, 48, "Na⁺(g) + Cl⁻(g)", 12) + s.arr(150, 50, 200, 140, 'class="red"') + s.t(178, 90, "−U", 12, 'class="red"') + s.t(170, 155, "NaCl(s)", 12) + s.arr(120, 140, 165, 150), 260, 160, "Born–Haber cycle (sketch)")),
  P(R`<b>Fajans' rules</b>: covalent character in an ionic bond increases with <b>small cation, large anion, high charge</b>, and cations with a pseudo-noble-gas (18 e⁻) shell (Cu⁺, Ag⁺, Zn²⁺). E.g. LiCl more covalent than NaCl; AlCl3 covalent; AgCl more covalent than NaCl.`),
  J(R`SiF4 is a covalent gas, while SnF4 and PbF4 are ionic (high-melting) solids, so \"SiF4, SnF4 and PbF4 are all ionic\" is false. Larger cations (Sn⁴⁺, Pb⁴⁺) are less polarising than Si⁴⁺.`, "2026 · 6 Apr · Shift 2")
]],
["Bond Parameters, Resonance & Dipole Moment", [
  L([R`<b>Bond length</b>: sum of covalent radii, $d_{AB} = r_A + r_B$. Decreases with bond order (C–C 154, C=C 134, C≡C 120 pm).`, R`<b>Bond enthalpy</b> increases with bond order. <b>Bond order</b> = number of bonds between two atoms (Lewis) or $\frac12(N_b - N_a)$ (MO).`, R`<b>Bond angle</b> from VSEPR / hybridisation.`]),
  J(R`Covalent bond length of AB $= r_A + r_B$; the total length of the molecule includes the van der Waals radii at the ends.`, "2026 · 5 Apr · Shift 2"),
  P(R`<b>Resonance</b>: when one Lewis structure cannot describe a molecule, the real structure is a <b>hybrid</b> of canonical forms (O3, CO3²⁻, NO3⁻, C6H6). The hybrid is more stable than any form; bond lengths are averaged (all C–O in CO3²⁻ equal).`, null, S(s.t(10, 60, "O=C(–O⁻)–O⁻", 13) + s.t(115, 60, "↔", 16) + s.t(140, 60, "⁻O–C(=O)–O⁻", 13) + s.t(245, 60, "↔ …", 13) + s.t(40, 95, "all three C–O equal (bond order 4/3)", 12, 'class="red"'), 300, 105, "Resonance in CO₃²⁻")),
  P(R`<b>Dipole moment</b> $\mu = q \times d$ (debye, 1 D = $3.33564 \times 10^{-30}$ C m); a vector. Symmetrical molecules have $\mu = 0$: CO2, BF3, CH4, CCl4, BeF2, SF6, XeF4, PCl5.`, null, S(s.t(10, 30, "NH₃: 4.90 × 10⁻³⁰ C m", 12) + s.t(150, 30, "NF₃: 0.80 × 10⁻³⁰ C m", 12) + s.t(40, 55, "N", 15) + s.arr(45, 62, 45, 95, 'class="red"') + s.arr(45, 40, 45, 15, 'class="blue"') + s.t(180, 55, "N", 15) + s.arr(185, 62, 185, 95, 'class="red"') + s.arr(185, 15, 185, 40, 'class="blue"') + s.t(10, 125, "bond moments and lone pair add in NH₃, oppose in NF₃", 11), 290, 135, "NH₃ vs NF₃")),
  J(R`Order of C=O bond length uses resonance: more single-bond character → longer. Tropone (aromatic, C–O⁻ character) and carboxylate (two equal C–O) are longer than acetone's C=O.`, "2026 · 4 Apr · Shift 2")
]],
["VSEPR Theory & Shapes", [
  P(R`Electron pairs around the central atom repel and stay as far apart as possible. Repulsion order: <b>lp–lp > lp–bp > bp–bp</b>; multiple bonds count as one region. Lone pairs reduce bond angles (CH4 109.5°, NH3 107°, H2O 104.5°).`),
  T(["Pairs (bp + lp)", "Electron geometry", "Shape (examples)"], [["2 + 0", "linear", "linear: BeCl2, CO2"], ["3 + 0 / 2 + 1", "trigonal planar", "trigonal planar BF3; bent SO2, O3"], ["4 + 0 / 3 + 1 / 2 + 2", "tetrahedral", "tetrahedral CH4, NH4⁺; pyramidal NH3; bent H2O"], ["5 + 0 / 4 + 1 / 3 + 2 / 2 + 3", "trigonal bipyramidal", "TBP PCl5; see-saw SF4; T-shape ClF3; linear XeF2, I3⁻"], ["6 + 0 / 5 + 1 / 4 + 2", "octahedral", "octahedral SF6; square pyramidal BrF5, XeOF4; square planar XeF4, ICl4⁻"], ["7 + 0 / 6 + 1", "pentagonal bipyramidal", "IF7; distorted octahedral XeF6"]]),
  P(R`In TBP the lone pairs occupy <b>equatorial</b> positions (less repulsion), giving see-saw, T-shape and linear.`, null, S(s.t(10, 15, "SF₄ (see-saw)", 12) + s.t(48, 75, "S", 15) + s.bond(55, 70, 55, 30) + s.bond(55, 70, 55, 110) + s.bond(55, 70, 25, 85) + s.bond(55, 70, 90, 85) + s.ell(72, 55, 12, 7, 'class="fl2"') + s.t(150, 15, "ClF₃ (T-shape)", 12) + s.t(185, 75, "Cl", 15) + s.bond(195, 70, 195, 30) + s.bond(195, 70, 195, 110) + s.bond(195, 70, 235, 70) + s.ell(175, 58, 11, 7, 'class="fl2"') + s.ell(175, 88, 11, 7, 'class="fl2"'), 260, 120, "Lone pairs go equatorial")),
  J(R`Isostructural with SF4 (see-saw, 4 bp + 1 lp): IF4⁺ and XeO2F2. BrF4⁻ and XeF4 are square planar (4 bp + 2 lp).`, "2026 · 2 Apr · Shift 2"),
  J(R`BrF3 autoionises to BrF2⁺ (2 bp + 2 lp → bent) and BrF4⁻ (4 bp + 2 lp → square planar). Shapes of ICl4⁻ (square planar), ClO3⁻ (pyramidal), IBr2⁻ (linear).`, "2026 · 8 Apr · Shift 2; 2026 · 5 Apr · Shift 2"),
  J(R`Count sp³d species: BrF5 (sp³d²), XeF5⁻ (pentagonal planar), BF4⁻ (sp³), ICl4⁻ (sp³d²), XeF4 (sp³d²), SF4 (sp³d), NH4⁺ (sp³), ClF3 (sp³d), XeF2 (sp³d), ICl2⁻ (sp³d) → 4.`, "2026 · 5 Apr · Shift 1"),
  J(R`XeO6⁴⁻: 6 σ bond pairs and 0 lone pairs on Xe (octahedral).`, "2026 · 4 Apr · Shift 1"),
  W(R`Bond angle trend F2O < H2O < Cl2O: more electronegative surrounding atoms pull bond pairs away, lowering repulsion; large Cl atoms widen the angle.`)
]],
["Valence Bond Theory & Hybridisation", [
  P(R`A covalent bond forms by <b>overlap</b> of half-filled orbitals; greater overlap → stronger bond. <b>σ bond</b>: head-on overlap (s–s, s–p, p–p); <b>π bond</b>: sideways p–p overlap, weaker; π forms only in addition to σ.`, null, S(s.porb(40, 50, 34, 0) + s.porb(108, 50, 34, 0) + s.t(35, 95, "σ (axial)", 12) + s.porb(190, 50, 34, 90) + s.porb(215, 50, 34, 90) + s.t(178, 95, "π (sideways)", 12), 250, 105, "σ and π overlap")),
  T(["Hybridisation", "Geometry", "Angle", "Examples"], [["sp", "linear", "180°", "BeCl2, C2H2, CO2 (C)"], ["sp²", "trigonal planar", "120°", "BF3, C2H4, NO3⁻"], ["sp³", "tetrahedral", "109.5°", "CH4, NH3, H2O, NH4⁺"], ["sp³d", "trigonal bipyramidal", "90°, 120°", "PCl5, SF4, ClF3, XeF2"], ["sp³d²", "octahedral", "90°", "SF6, XeF4, BrF5"], ["sp³d³", "pentagonal bipyramidal", "72°, 90°", "IF7, XeF6"]]),
  P(R`Quick rule: hybridisation number $= \frac12[V + M - C + A]$ (V = valence electrons of central atom, M = monovalent atoms, C = cationic charge, A = anionic charge). 2 sp, 3 sp², 4 sp³, 5 sp³d, 6 sp³d².`),
  P(R`In PCl5 the two <b>axial</b> P–Cl bonds are longer (and weaker) than the three equatorial bonds.`),
  P(R`C2H4: each C sp², one σ + one π between carbons; C2H2: each C sp, one σ + two π.`)
]],
["Molecular Orbital Theory", [
  P(R`Atomic orbitals combine (<b>LCAO</b>): constructive → <b>bonding MO</b> (lower energy, density between nuclei); destructive → <b>antibonding MO</b> (higher energy, node between nuclei). Conditions: similar energy, same symmetry about the internuclear axis, good overlap.`, null, S(s.porb(60, 50, 30, 90) + s.porb(88, 50, 30, 90) + s.t(48, 95, "π2p (bonding)", 11) + s.lobe(180, 50, 28, 135) + s.lobe(180, 50, 28, 315, 'class="fl2"') + s.lobe(200, 50, 28, 45, 'class="fl2"') + s.lobe(200, 50, 28, 225) + s.line(190, 25, 190, 75, 'class="red" stroke-dasharray="4 3"') + s.t(160, 95, "π*2p (node)", 11), 260, 105, "π and π* (axis along z)")),
  P(R`<b>Energy order</b>: up to N2 (s–p mixing) $\sigma1s < \sigma^*1s < \sigma2s < \sigma^*2s < (\pi2p_x = \pi2p_y) < \sigma2p_z < (\pi^*2p_x = \pi^*2p_y) < \sigma^*2p_z$. For O2, F2: $\sigma2p_z$ lies <b>below</b> the π2p pair.`),
  S(mo(true, 10) + s.t(10, 228, "B.O. = (8 − 2)/2 = 3, diamagnetic", 13), 230, 235, "N₂: valence MOs (s–p mixing, π2p below σ2p)"),
  S(mo(false, 12) + s.t(10, 228, "B.O. = (8 − 4)/2 = 2, two unpaired e⁻", 13), 230, 235, "O₂: valence MOs (σ2p below π2p) → paramagnetic"),
  P(R`<b>Bond order</b> $= \frac12(N_b - N_a)$. Higher bond order → shorter, stronger bond. Bond order 0 → molecule does not exist (He2, Be2). Unpaired electrons → paramagnetic.`),
  T(["Species", "e⁻", "Bond order", "Magnetism"], [["H₂", "2", "1", "dia"], ["He₂⁺", "3", "0.5", "para"], ["B₂", "10", "1", "para (π)"], ["C₂", "12", "2", "dia"], ["N₂", "14", "3", "dia"], ["O₂⁺", "15", "2.5", "para"], ["O₂", "16", "2", "para"], ["O₂⁻", "17", "1.5", "para"], ["O₂²⁻", "18", "1", "dia"], ["F₂", "18", "1", "dia"]]),
  J(R`Bond length O2⁺ < O2 < O2⁻ < O2²⁻ (bond order 2.5, 2, 1.5, 1). Unpaired electrons: O2 (2) > O2⁺ = O2⁻ (1) > O2²⁻ (0).`, "2026 · 2 Apr · Shift 1"),
  J(R`Picture of π* with the z internuclear axis: two p orbitals perpendicular to z with opposite phases facing each other and a nodal plane between the nuclei.`, "2026 · 4 Apr · Shift 2")
]],
["Hydrogen Bonding", [
  P(R`H bonded to F, O or N is attracted to a lone pair on another F, O, N. <b>Intermolecular</b> (HF chains, water, alcohols): raises boiling point and solubility. <b>Intramolecular</b> (o-nitrophenol, salicylaldehyde): lowers boiling point, makes the compound steam-volatile.`, null, S(s.benz(60, 65, 24, { 0: "", 1: "" }, true) + s.t(54, 32, "O", 13) + s.t(88, 42, "N", 13) + s.t(66, 18, "H", 13) + s.line(72, 16, 100, 22, 'class="red" stroke-dasharray="3 3"') + s.t(100, 22, "O", 13) + s.t(150, 60, "o-nitrophenol:", 12) + s.t(150, 78, "intramolecular H-bond", 12) + s.t(150, 96, "→ steam volatile", 12, 'class="red"'), 280, 110, "Intramolecular H-bond")),
  P(R`Strength of H bond ≈ 10–40 kJ/mol: weaker than covalent, stronger than van der Waals. Order: F–H···F > O–H···O > N–H···N.`),
  W(R`H2O (100 °C) boils far above H2S (−60 °C) because of H bonding, although H2S is heavier.`)
]]
],
pyq: {
  pat: [
    [R`Shapes from VSEPR (see-saw, T, square planar, square pyramidal)`, "2026 · 2 Apr · Shift 2; 2026 · 5 Apr · Shift 2; 2026 · 8 Apr · Shift 2"],
    [R`Counting hybridisation types or lone pairs in a list`, "2026 · 4 Apr · Shift 1; 2026 · 5 Apr · Shift 1; 2026 · 6 Apr · Shift 2"],
    [R`MO: bond order, bond length, unpaired electrons of O2 species`, "2026 · 2 Apr · Shift 1"],
    [R`MO pictures (σ, π, π*)`, "2026 · 4 Apr · Shift 2"],
    [R`Bond angle trends, Fajans' rules`, "2026 · 6 Apr · Shift 2"]
  ],
  combo: [R`Bonding + p-block (interhalogens, xenon compounds)`, R`Bonding + organic (resonance and bond lengths)`, R`Bonding + coordination (hybridisation of complexes)`],
  trap: [R`B2 is paramagnetic, C2 diamagnetic (s–p mixing order).`, R`Lone pairs in TBP are equatorial; in octahedral, two lone pairs are trans (square planar).`],
  mist: [R`Counting a double bond as two VSEPR regions.`, R`Using the O2 order (σ below π) for N2.`]
}
});
})();
