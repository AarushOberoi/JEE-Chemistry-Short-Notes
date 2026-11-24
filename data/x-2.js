(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
NB.ch({
n: "x-2", short: "Principles Related to Practical Chemistry",
intro: R`<b>Big idea:</b> practical chemistry questions are recognition questions — match a test to a colour or a precipitate. Learn the table rows, not paragraphs.`,
sec: [
["Tests for Functional Groups", [
  T(["Group", "Test", "Observation"], [["alcoholic –OH", "Na metal; ceric ammonium nitrate", "H2 effervescence; red colour"], ["1°/2°/3° alcohol", "Lucas reagent (conc. HCl + ZnCl2)", "3° immediate, 2° ~5 min, 1° no turbidity"], ["phenolic –OH", "neutral FeCl3", "violet / blue / green colour"], ["phenol", "phthalein dye test (phthalic anhydride + conc. H2SO4, then NaOH)", "pink/red colour"], ["aldehyde", "Tollens' / Fehling's / Schiff's", "silver mirror / red ppt / pink colour"], ["C=O (both)", "2,4-DNP", "yellow-orange ppt"], ["methyl ketone, CH3CH(OH)–", "I2 + NaOH (iodoform)", "yellow ppt CHI3"], ["–COOH", "NaHCO3", "brisk effervescence (CO2)"], ["1° amine", "carbylamine (CHCl3 + alc. KOH)", "foul smell of isocyanide"], ["1°/2°/3° amine", "Hinsberg (C6H5SO2Cl)", "1° soluble in alkali, 2° insoluble, 3° no reaction"], ["aromatic 1° amine", "azo dye test (NaNO2/HCl, then β-naphthol)", "orange-red dye"], ["C=C", "Br2 water; Baeyer's reagent (cold dil. KMnO4)", "decolourised"]]),
  J(R`Distinguish: diethylamine/ethylamine — carbylamine (CHCl3 + KOH); acetaldehyde/acetone — Tollens'; ethanol/phenol — neutral FeCl3; benzoic/cinnamic acid — Br2 water (C=C).`, "2026 · 2 Apr · Shift 1"),
  J(R`Match: cyclohexanol — Lucas; cyclohexylamine — Hinsberg; cyclohexanecarbaldehyde — Tollens'; phenol — phthalein dye test.`, "2026 · 4 Apr · Shift 2"),
  J(R`Tyrosine gives a violet colour with neutral FeCl3 (phenolic –OH).`, "2026 · 8 Apr · Shift 2")
]],
["Detection of Extra Elements (Lassaigne's Test)", [
  P(R`Fuse the organic compound with Na → NaCN, Na2S, NaX (sodium extract).`),
  L([R`<b>N</b>: boil with FeSO4, acidify with H2SO4 → Prussian blue Fe4[Fe(CN)6]3. If S is also present: blood-red Fe(SCN)²⁺.`, R`<b>S</b>: sodium nitroprusside → violet; or lead acetate → black PbS.`, R`<b>Halogens</b>: boil with HNO3 (removes CN⁻, S²⁻), then AgNO3: white AgCl (soluble in NH3), pale yellow AgBr (sparingly soluble), yellow AgI (insoluble).`, R`<b>P</b>: oxidise to phosphate, then ammonium molybdate + HNO3 → canary-yellow ammonium phosphomolybdate.`])
]],
["Salt Analysis: Cation Groups", [
  T(["Group", "Cations", "Group reagent", "Precipitate"], [["0", "NH4⁺", "NaOH, heat", "NH3 gas (Nessler's: brown)"], ["I", "Pb²⁺", "dil. HCl", "PbCl2 (white)"], ["II", "Pb²⁺, Cu²⁺, As³⁺, Cd²⁺, Bi³⁺, Sn²⁺", "H2S in dil. HCl", "sulphides (CuS black, CdS yellow, As2S3 yellow)"], ["III", "Fe³⁺, Al³⁺, Cr³⁺", "NH4OH + NH4Cl", "hydroxides (Fe(OH)3 brown, Al(OH)3 white, Cr(OH)3 green)"], ["IV", "Zn²⁺, Mn²⁺, Co²⁺, Ni²⁺", "H2S in NH4OH", "ZnS white, MnS buff, CoS/NiS black"], ["V", "Ba²⁺, Sr²⁺, Ca²⁺", "(NH4)2CO3 + NH4OH", "carbonates (white)"], ["VI", "Mg²⁺", "Na2HPO4", "white Mg(NH4)PO4"]]),
  P(R`Group II needs <b>low [S²⁻]</b> (H2S in acid, common ion H⁺) so only the least soluble sulphides precipitate; Group IV needs <b>high [S²⁻]</b> (H2S in ammoniacal medium).`),
  J(R`Among Fe³⁺, Pb²⁺, Cu²⁺, Mn²⁺, the one precipitated by H2S in NH4OH (group IV) is Mn²⁺ (MnS); its highest oxidation state is +7 (KMnO4).`, "2026 · 4 Apr · Shift 2"),
  P(R`<b>Flame tests</b>: Na golden yellow, K lilac/violet, Ca brick red, Sr crimson, Ba <b>apple green</b>, Cu blue-green.`),
  J(R`Apple-green flame + yellow BaCrO4 with K2CrO4 in acetic acid → Ba²⁺; canary-yellow ppt with ammonium molybdate/HNO3 → PO4³⁻.`, "2026 · 2 Apr · Shift 1"),
  P(R`<b>Borax bead</b> (oxidising flame): Co²⁺ deep blue, Cu²⁺ blue-green, Fe green (hot, yellow-brown), Cr green, Mn violet/amethyst, Ni brown. Zn²⁺ (d¹⁰) gives no colour.`),
  J(R`Positive borax bead test and the highest IE among Fe²⁺, Fe³⁺, Cr²⁺, Zn²⁺: Fe³⁺ (removing an electron from the stable d⁵ ion with +3 charge costs most; Zn²⁺, d¹⁰, gives no coloured bead).`, "2026 · 2 Apr · Shift 2")
]],
["Salt Analysis: Anions", [
  T(["Anion", "Test", "Observation"], [["CO3²⁻", "dil. H2SO4", "CO2: lime water milky"], ["S²⁻", "dil. H2SO4; lead acetate", "H2S (rotten eggs); black PbS"], ["SO3²⁻", "dil. H2SO4", "SO2 turns acidified K2Cr2O7 paper green"], ["NO2⁻", "dil. H2SO4", "brown NO2 fumes"], ["Cl⁻", "conc. H2SO4 + MnO2; AgNO3", "Cl2; white AgCl soluble in NH4OH"], ["Br⁻", "conc. H2SO4; Cl2 water + CHCl3", "red-brown Br2; orange layer"], ["I⁻", "Cl2 water + CHCl3", "violet layer"], ["NO3⁻", "FeSO4 + conc. H2SO4", "brown ring [Fe(H2O)5NO]²⁺"], ["SO4²⁻", "BaCl2", "white BaSO4 insoluble in HCl"], ["PO4³⁻", "ammonium molybdate + HNO3", "canary-yellow ppt"]]),
  J(R`A paper soaked in acidified K2Cr2O7 turns green with SO2 (Cr2O7²⁻ → Cr³⁺).`, "2026 · 5 Apr · Shift 2")
]],
["Titrimetry & Preparations", [
  P(R`<b>Primary standard</b>: pure, stable, non-hygroscopic, high molar mass (oxalic acid, Mohr's salt, K2Cr2O7). <b>Na2Cr2O7</b> and NaOH are <b>not</b> primary standards (hygroscopic). <b>KMnO4</b> titrations need no indicator (self-indicator: colourless → pink).`),
  J(R`"Sodium dichromate is a primary standard" is false (hygroscopic); potassium dichromate is. Phenolphthalein is a weak <b>acid</b>, not a weak base.`, "2026 · 4 Apr · Shift 1; 2026 · 5 Apr · Shift 1"),
  L([R`<b>Mohr's salt</b> FeSO4·(NH4)2SO4·6H2O: equimolar solutions, add a little dil. H2SO4 (prevents hydrolysis of Fe²⁺), crystallise.`, R`<b>Potash alum</b> K2SO4·Al2(SO4)3·24H2O.`, R`<b>Acetanilide</b>: aniline + acetic anhydride (glacial acetic acid). <b>p-Nitroacetanilide</b>: nitration of acetanilide (conc. HNO3/H2SO4, cold).`, R`<b>Aniline yellow</b> (p-aminoazobenzene): benzenediazonium chloride + aniline. <b>Iodoform</b>: ethanol/acetone + I2 + NaOH or KI + NaOCl.`])
]],
["Quantitative Organic Analysis", [
  T(["Element", "Method", "Formula"], [["C, H", "Liebig combustion (CO2 in KOH, H2O in CaCl2)", R`$\%\text{C} = \frac{12}{44}\cdot\frac{m_{CO_2}}{m}\cdot100$, $\%\text{H} = \frac{2}{18}\cdot\frac{m_{H_2O}}{m}\cdot100$`], ["N", "Dumas (N2 volume) / Kjeldahl (NH3)", R`Kjeldahl: $\%\text{N} = \frac{1.4 \times N_{acid} \times V_{acid\ used}(\text{mL})}{m}$ (not for nitro, azo, ring N)`], ["halogen", "Carius (fuming HNO3 + AgNO3)", R`$\%\text{Br} = \frac{80}{188}\cdot\frac{m_{AgBr}}{m}\cdot100$; Cl: 35.5/143.5`], ["S", "Carius → BaSO4", R`$\%\text{S} = \frac{32}{233}\cdot\frac{m_{BaSO_4}}{m}\cdot100$`], ["P", "→ Mg2P2O7 or ammonium phosphomolybdate", R`$\%\text{P} = \frac{62}{222}\cdot\frac{m}{m_0}\cdot100$`]]),
  J(R`Carius: 0.2 g gave 0.6 g BaSO4 (given M = 231 in that question) → % S = $\frac{32}{231}\times\frac{0.6}{0.2}\times100$. Use the molar mass the question states.`, "2026 · 5 Apr · Shift 1; 2026 · 4 Apr · Shift 2"),
  J(R`Liebig: 0.25 g CO2 contains $\frac{12}{44}\times0.25 = 0.0682$ g C; if C is 25% of the compound, $X = 0.0682/0.25 = 0.273$ g (273 × 10⁻³ g).`, "2026 · 2 Apr · Shift 2")
]]
],
pyq: {
  pat: [
    [R`Reagent to distinguish pairs of organic compounds`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 2"],
    [R`Salt analysis (flame test, group reagents, anion tests)`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 2"],
    [R`Borax bead, brown ring, dichromate paper tests`, "2026 · 2 Apr · Shift 2; 2026 · 5 Apr · Shift 2; 2026 · 6 Apr · Shift 2"],
    [R`Primary standards and indicators`, "2026 · 5 Apr · Shift 1"],
    [R`Carius / Liebig percentage calculations`, "2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 2; 2026 · 5 Apr · Shift 1"]
  ],
  combo: [R`Practical + d-block (colours, oxidation states)`, R`Practical + biomolecules (FeCl3 with tyrosine)`],
  trap: [R`Fehling's test is negative for benzaldehyde.`, R`Kjeldahl fails for nitro, azo and pyridine-type N.`],
  mist: [R`Calling NaOH or Na2Cr2O7 a primary standard.`]
}
});
})();
