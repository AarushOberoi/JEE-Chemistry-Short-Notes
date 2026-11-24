(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
NB.ch({
n: "11-7", short: "Redox Reactions",
intro: R`<b>Big idea:</b> oxidation = O.N. goes up (electrons lost); reduction = O.N. goes down (electrons gained). Both always happen together; balance by matching electrons lost and gained.`,
sec: [
["Concepts of Oxidation & Reduction", [
  P(R`Classical: oxidation = addition of O or electronegative element, removal of H or electropositive element; reduction = the reverse. <b>Electronic</b>: oxidation = loss of e⁻; reduction = gain of e⁻. Oxidant gets reduced; reductant gets oxidised.`, null, S(s.t(10, 40, "Zn  →  Zn²⁺ + 2e⁻", 14) + s.t(170, 40, "oxidation (O.N. ↑)", 12, 'class="red"') + s.t(10, 80, "Cu²⁺ + 2e⁻  →  Cu", 14) + s.t(170, 80, "reduction (O.N. ↓)", 12, 'class="blue"') + s.t(10, 115, "Zn is the reductant; Cu²⁺ is the oxidant", 12), 320, 125, "Half-reactions")),
  P(R`<b>Competitive electron transfer</b>: Zn displaces Cu from CuSO4 (Zn rod gets copper-coated), but Cu does not displace Zn; Cu displaces Ag from AgNO3. This order (Zn > Cu > Ag as reductant) leads to the electrochemical series.`)
]],
["Oxidation Number", [
  KEY([R`Free element 0 · F always −1 · O usually −2 (peroxide −1, superoxide −½, $\ce{OF2}$ +2)`, R`H +1 (metal hydrides −1) · group 1 +1, group 2 +2`, R`Sum = 0 for molecules, = charge for ions`], "O.N. rules in one box"),
  P(R`O.N. = charge an atom would carry if all bonds were ionic (shared pair given to the more electronegative atom).`),
  L([R`Element in free state: 0 (O2, P4, S8, Na).`, R`Monatomic ion: its charge. Alkali metals +1, alkaline earth +2, Al +3 in compounds.`, R`O: −2; peroxides (H2O2, Na2O2) −1; superoxides (KO2) −½; OF2 +2, O2F2 +1.`, R`H: +1; −1 in metal hydrides (NaH, CaH2).`, R`F: always −1; other halogens −1 except when bonded to O or a more electronegative halogen.`, R`Sum of O.N. = 0 (molecule) or = charge (ion).`]),
  P(R`<b>Stock notation</b>: O.N. in Roman numerals, e.g. Au(III)Cl3, Sn(II)Cl2, Fe(II)O.`),
  P(R`<b>Fractional (average) O.N.</b>: C3O2 (+4/3), Br3O8 (+16/3), Na2S4O6 (S = +2.5). Structurally the atoms differ: in S4O6²⁻ two S are +5 and two are 0.`, null, S(s.t(10, 50, "⁻O₃S – S – S – SO₃⁻", 15) + s.t(18, 25, "+5", 12, 'class="red"') + s.t(75, 25, "0", 12, 'class="red"') + s.t(105, 25, "0", 12, 'class="red"') + s.t(145, 25, "+5", 12, 'class="red"') + s.t(10, 80, "average = (5 + 0 + 0 + 5)/4 = +2.5", 12), 220, 90, "Tetrathionate ion")),
  P(R`Other structure-based cases: CrO5 (butterfly, Cr +6 with two peroxo groups), H2SO5 (S +6, one peroxide), Fe3O4 (average +8/3: one Fe²⁺, two Fe³⁺).`),
  J(R`O.N. of oxygen in OF2 is +2 and in Na2O is −2 — F is more electronegative than O.`, "2026 · 5 Apr · Shift 1")
]],
["Types of Redox Reactions", [
  T(["Type", "Example"], [["combination", R`$C + O_2 \to CO_2$; $3Mg + N_2 \to Mg_3N_2$`], ["decomposition", R`$2H_2O \to 2H_2 + O_2$; $2KClO_3 \to 2KCl + 3O_2$ (not every decomposition is redox: CaCO3 → CaO + CO2 is not)`], ["metal displacement", R`$CuSO_4 + Zn \to Cu + ZnSO_4$`], ["non-metal displacement", R`$2Na + 2H_2O \to 2NaOH + H_2$; $Cl_2 + 2KBr \to 2KCl + Br_2$`], ["disproportionation", R`$2H_2O_2 \to 2H_2O + O_2$; $P_4 + 3OH^- + 3H_2O \to PH_3 + 3H_2PO_2^-$; $Cl_2 + 2OH^- \to ClO^- + Cl^- + H_2O$`]]),
  P(R`<b>Disproportionation</b>: one element in an intermediate state is simultaneously oxidised and reduced; it needs at least three oxidation states. ClO4⁻ cannot disproportionate (Cl at its highest, +7); F2 cannot (F shows no positive O.N.).`),
  P(R`<b>Halogen displacement</b>: oxidising power F2 > Cl2 > Br2 > I2, so a halogen displaces those below it from their halides. Fluorine is so reactive it displaces O2 from water.`),
  J(R`Layer test: Cl2 water oxidises Br⁻/I⁻ to Br2/I2 (coloured layer in CHCl3/CCl4) — a displacement redox reaction based on F2 > Cl2 > Br2 > I2.`, "2026 · 2 Apr · Shift 1"),
  J(R`N in oxidation states +1 to +4 disproportionates in acid (e.g. $3HNO_2 \to HNO_3 + 2NO + H_2O$).`, "2026 · 5 Apr · Shift 1")
]],
["Balancing Redox Equations", [
  STEPS("Ion–electron method (acidic medium)", [["Split", "write oxidation and reduction halves", ""], ["Atoms", "balance atoms other than O, H", ""], ["O and H", R`add $\ce{H2O}$ for O, $\ce{H+}$ for H`, R`basic medium: then add $\ce{OH-}$ to both sides`], ["Charge", "add e⁻ to the more positive side", ""], ["Combine", "equalise e⁻, add, cancel", "check atoms and charge"]]),
  P(R`<b>Oxidation-number method</b>: find atoms whose O.N. changes; equalise the total increase and decrease; balance O with H2O and H with H⁺ (acid) or OH⁻ (base); check charge.`),
  P(R`<b>Half-reaction (ion–electron) method</b>: split into oxidation and reduction halves; balance atoms other than O and H; add H2O for O, H⁺ for H; add electrons for charge; multiply to equalise electrons; add. In basic medium, add OH⁻ to both sides to remove H⁺.`, [R`\text{MnO}_4^- + 8\text{H}^+ + 5e^- \to \text{Mn}^{2+} + 4\text{H}_2\text{O}`, R`\text{Fe}^{2+} \to \text{Fe}^{3+} + e^-`, R`\text{MnO}_4^- + 5\text{Fe}^{2+} + 8\text{H}^+ \to \text{Mn}^{2+} + 5\text{Fe}^{3+} + 4\text{H}_2\text{O}`]),
  P(R`<b>Redox titrations</b>: KMnO4 (self-indicator, colourless → pink), K2Cr2O7 (diphenylamine indicator; orange → green), iodometry (I2 liberated by an oxidant, titrated with thiosulphate; starch → blue disappears).`),
  J(R`KMnO4 needed for FeC2O4, Fe2(C2O4)3, FeSO4, Fe2(SO4)3: total electrons lost (3 + 6 + 1 + 0 = 10) ÷ 5 = 2 mol KMnO4.`, "2026 · 4 Apr · Shift 1"),
  J(R`MnO4⁻ in basic medium (gains 3 e⁻ → MnO2) with excess KI; liberated I2 titrated with thiosulphate: equivalents of MnO4⁻ = equivalents of S2O3²⁻ (n = 1).`, "2026 · 6 Apr · Shift 2")
]],
["Redox & Electrode Processes", [
  P(R`A redox reaction separated into two beakers connected by a salt bridge makes a galvanic cell (Daniell cell, Zn | Zn²⁺ || Cu²⁺ | Cu). Each beaker is a <b>redox couple</b> (oxidised/reduced form, e.g. Zn²⁺/Zn). Standard electrode potentials are measured against the standard hydrogen electrode (E° = 0); more positive E° → stronger oxidant. (Details in Electrochemistry, Class 12.)`)
]]
],
pyq: {
  pat: [
    [R`n-factor based titration problems (KMnO4, iodometry)`, "2026 · 4 Apr · Shift 1; 2026 · 6 Apr · Shift 2"],
    [R`Halogen displacement and the layer test`, "2026 · 2 Apr · Shift 1"],
    [R`Oxidation states in unusual compounds (OF2, peroxides, fractional)`, "2026 · 5 Apr · Shift 1"]
  ],
  combo: [R`Redox + mole concept (titrations)`, R`Redox + d-block (MnO4⁻, Cr2O7²⁻ chemistry)`, R`Redox + p-block (disproportionation of oxoacids, halogens)`],
  trap: [R`Average O.N. can be fractional; actual atoms have integral states.`, R`Not every decomposition is a redox reaction.`],
  mist: [R`Using n = 5 for MnO4⁻ in basic medium.`, R`Forgetting that F has no positive oxidation state.`]
}
});
})();
