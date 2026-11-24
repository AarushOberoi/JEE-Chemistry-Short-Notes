(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
NB.ch({
n: "11-1", short: "Some Basic Concepts of Chemistry",
intro: R`<b>Big idea:</b> the <b>mole</b> is the bridge between grams, particles and gas volume. Every numerical: balance → convert to moles → use the mole ratio → convert back.`,
sec: [
["Formula Sheet", [
  KEY([R`$n = \frac{m}{M} = \frac{N}{N_A} = \frac{V_{gas}}{22.4\ \text{L (STP, 1 atm)}}$; $N_A = 6.022 \times 10^{23}$`, R`Molarity $M = \frac{n_{solute}}{V_{solution}(L)}$ · Molality $m = \frac{n_{solute}}{W_{solvent}(kg)}$ · $x_A = \frac{n_A}{n_{total}}$`, R`$M_1V_1 = M_2V_2$ (dilution) · $N = M \times n\text{-factor}$ · meq $= N \times V(\text{mL})$`, R`Molecular formula $= n \times$ empirical formula; $n = \frac{M}{\text{EF mass}}$; $M = 2 \times$ vapour density`], "Formula sheet"),
  STEPS("Any stoichiometry numerical in 4 steps", [["Balance", "write the balanced equation", "or use atom conservation (POAC)"], ["Moles", "convert every given quantity to moles", "mass, volume, molarity"], ["Limiting reagent", "smallest (moles ÷ coefficient)", "it decides the product"], ["Answer", "mole ratio → product moles → required unit", "mass / volume / number"]])
]],
["Matter, Measurement & Significant Figures", [
  P(R`Matter: <b>pure substances</b> (elements, compounds; fixed composition) and <b>mixtures</b> (homogeneous = solutions, heterogeneous). Compounds can be separated into elements only by chemical methods.`),
  T(["SI base quantity", "Unit", "Symbol"], [["length", "metre", "m"], ["mass", "kilogram", "kg"], ["time", "second", "s"], ["electric current", "ampere", "A"], ["thermodynamic temperature", "kelvin", "K"], ["amount of substance", "mole", "mol"], ["luminous intensity", "candela", "cd"]]),
  P(R`<b>Temperature</b>: $K = °C + 273.15$, $°F = \frac95(°C) + 32$. <b>Density</b> = mass/volume (SI: kg m⁻³, often g cm⁻³).`),
  P(R`<b>Significant figures</b>: all non-zero digits count; zeros between non-zero digits count; leading zeros do not; trailing zeros count only if there is a decimal point (0.200 has 3, 100 has 1). Exact numbers have infinite significant figures.`),
  P(R`<b>Rules for calculations</b>: in addition/subtraction keep the least number of <b>decimal places</b>; in multiplication/division keep the least number of <b>significant figures</b>. Rounding: if the dropped digit is 5 and followed by nothing, the preceding digit is raised by 1 only if it is odd.`),
  P(R`<b>Precision</b> = closeness of repeated measurements to each other; <b>accuracy</b> = closeness to the true value.`, null, S(s.circ(55, 60, 45) + s.circ(55, 60, 28) + s.circ(55, 60, 10, 'class="red"') + [[85, 30], [88, 34], [83, 28]].map(([x, y]) => s.dot(x, y)).join("") + s.circ(165, 60, 45) + s.circ(165, 60, 28) + s.circ(165, 60, 10, 'class="red"') + [[163, 58], [167, 61], [165, 63]].map(([x, y]) => s.dot(x, y)).join("") + s.t(18, 125, "precise, not accurate", 12) + s.t(128, 125, "precise and accurate", 12), 220, 135, "Precision vs accuracy"))
]],
["Laws of Chemical Combination & Dalton's Theory", [
  T(["Law", "Statement", "By"], [["Conservation of mass", "matter is neither created nor destroyed", "Lavoisier (1789)"], ["Definite proportions", "a compound always has the same proportion of elements by mass", "Proust"], ["Multiple proportions", "masses of one element combining with a fixed mass of another are in a simple whole-number ratio", "Dalton (1803)"], ["Gaseous volumes", "gases combine in simple volume ratios (same T, P)", "Gay-Lussac (1808)"], ["Avogadro's law", "equal volumes of gases at the same T and P contain equal numbers of molecules", "Avogadro (1811)"]]),
  P(R`Example of multiple proportions: H2O and H2O2 — masses of O combining with 2 g of H are 16 g and 32 g, ratio 1 : 2.`),
  P(R`<b>Dalton's atomic theory</b> (1808): matter consists of indivisible atoms; atoms of an element are identical; compounds form when atoms combine in fixed ratios; chemical reactions rearrange atoms, never create or destroy them. It could not explain Gay-Lussac's law.`)
]],
["Atomic & Molecular Masses, Mole Concept", [
  P(R`<b>1 amu (u)</b> = $\frac{1}{12}$ of the mass of one C-12 atom $= 1.66056 \times 10^{-24}$ g. <b>Average atomic mass</b> uses natural abundances:`, R`A_{avg} = \frac{\sum A_ix_i}{\sum x_i}`),
  P(R`<b>Mole</b>: the amount containing exactly $6.02214076 \times 10^{23}$ elementary entities ($N_A$). Molar mass in g mol⁻¹ equals the atomic/molecular/formula mass in u.`, null, S(s.block(70, 50, 80, 34, "1 mol") + s.arr(150, 67, 205, 25) + s.arr(150, 67, 205, 67) + s.arr(150, 67, 205, 110) + s.t(150, 20, "6.022 × 10²³ particles", 12) + s.t(208, 71, "molar mass (g)", 12) + s.t(150, 128, "22.7 L gas at STP (1 bar, 273 K)", 12), 330, 140, "One mole links three quantities")),
  P(R`Mole formulas:`, [R`n = \frac{\text{mass}}{M} = \frac{N}{N_A} = \frac{V_{gas}\ (\text{STP})}{22.7\ \text{L}}`]),
  W(R`At <b>273.15 K and 1 bar</b> (IUPAC STP) the molar volume is <b>22.7 L</b>; at 273.15 K and 1 atm it is 22.4 L. Use the condition the question states (most JEE papers still use 22.4 L).`),
  J(R`"Total number of atoms" questions: moles × atoms per formula × $N_A$. E.g. 684 g sucrose = 2 mol × 45 atoms; 2 mol cyclohexane C6H12 = 2 × 18 atoms.`, "2026 · 4 Apr · Shift 2; 2026 · 6 Apr · Shift 2; 2026 · 8 Apr · Shift 2"),
  P(R`<b>Formula mass</b> is used for ionic compounds (no discrete molecules), e.g. NaCl = 58.5 u.`)
]],
["Percentage Composition, Empirical & Molecular Formula", [
  P(R`Mass % of an element = $\frac{\text{mass of element in 1 mol}}{\text{molar mass}} \times 100$.`),
  P(R`<b>Empirical formula</b> = simplest whole-number ratio of atoms. Steps: mass % → divide by atomic mass (moles) → divide by the smallest → make whole numbers.`, R`\text{Molecular formula} = n \times \text{Empirical formula},\qquad n = \frac{\text{Molar mass}}{\text{Empirical formula mass}}`),
  J(R`C : H = 12 : 1 by mass gives CH; with two C atoms it is C2H2. Then use the combustion equation for the mass of CO2.`, "2026 · 2 Apr · Shift 2"),
  P(R`For gases, molar mass = 2 × vapour density.`)
]],
["Stoichiometry & Limiting Reagent", [
  P(R`A balanced equation gives the <b>mole ratio</b> of reactants and products. <b>Limiting reagent</b>: divide the moles of each reactant by its coefficient; the smallest value limits the product.`, null, S(s.t(10, 28, "2H₂ + O₂ → 2H₂O", 15) + s.t(10, 60, "given: 4 mol H₂, 3 mol O₂", 13) + s.t(10, 85, "4/2 = 2   vs   3/1 = 3", 13) + s.t(10, 112, "H₂ is limiting → 4 mol H₂O; 1 mol O₂ left", 13, 'class="red"'), 300, 125, "Finding the limiting reagent")),
  P(R`<b>Principle of atom conservation (POAC)</b>: moles of an atom are conserved, so an equation need not be balanced. E.g. for KClO3 → KCl + O2: moles of O in KClO3 = moles of O in O2.`),
  J(R`3Fe + 4H2O → Fe3O4 + 4H2: 18 g steam = 1 mol, so Fe = $\frac34$ mol = 42 g. Write the balanced equation first.`, "2026 · 2 Apr · Shift 1"),
  J(R`Zn with a given volume of 50% H2SO4 (density given): mass of acid = $V \times d \times 0.5$; compare moles of Zn and H2SO4 to find the limiting reagent, then H2 volume.`, "2026 · 5 Apr · Shift 2"),
  J(R`Heating Ag2CO3: Ag2CO3 → 2Ag + CO2 + ½O2; the residue is metallic Ag.`, "2026 · 5 Apr · Shift 1"),
  P(R`<b>Percentage yield</b> = $\frac{\text{actual yield}}{\text{theoretical yield}} \times 100$.`)
]],
["Concentration Terms", [
  T(["Term", "Definition", "T-dependent?"], [["Mass %", R`$\frac{\text{mass of solute}}{\text{mass of solution}} \times 100$`, "no"], ["Mole fraction $x$", R`$\frac{n_A}{n_A + n_B}$; $\sum x = 1$`, "no"], ["Molarity M", R`$\frac{\text{mol solute}}{\text{L of solution}}$`, "yes (volume changes)"], ["Molality m", R`$\frac{\text{mol solute}}{\text{kg of solvent}}$`, "no"], ["ppm", R`$\frac{\text{mass of solute}}{\text{mass of solution}} \times 10^6$`, "no"]]),
  P(R`<b>Dilution / mixing</b>:`, [R`M_1V_1 = M_2V_2,\qquad M_{mix} = \frac{M_1V_1 + M_2V_2}{V_1 + V_2}`, R`m = \frac{1000\,M}{1000d - M\cdot M_{solute}}\quad(d \text{ in g mL}^{-1})`]),
  J(R`Mole fraction of water in 10% (w/w) urea: in 100 g, 10 g urea (1/6 mol) and 90 g water (5 mol), so $x_{water} = \frac{5}{5 + 1/6}$.`, "2026 · 5 Apr · Shift 1"),
  P(R`<b>Volume strength of H2O2</b>: "x volume" means 1 L gives x L of O2 at STP. $M = \frac{x}{11.2}$ (with 22.4 L), $N = \frac{x}{5.6}$.`),
  W(R`Molarity uses volume of <b>solution</b>; molality uses mass of <b>solvent</b>. Convert with density when both are needed.`)
]],
["Equivalent Concept & Titrations", [
  P(R`Equivalent mass $= \frac{\text{molar mass}}{n\text{-factor}}$; normality $N = M \times n$; milliequivalents $= N \times V(\text{mL})$. At the end point, meq of oxidant = meq of reductant (or acid = base).`),
  T(["Species (condition)", "n-factor"], [[R`$\text{MnO}_4^-$ (acidic → Mn²⁺)`, "5"], [R`$\text{MnO}_4^-$ (neutral/weakly basic → MnO₂)`, "3"], [R`$\text{MnO}_4^-$ (strongly basic → MnO₄²⁻)`, "1"], [R`$\text{Cr}_2\text{O}_7^{2-}$ (acidic → Cr³⁺)`, "6"], [R`$\text{C}_2\text{O}_4^{2-}$ → CO₂`, "2"], [R`Fe²⁺ → Fe³⁺`, "1"], [R`FeC₂O₄ → Fe³⁺ + 2CO₂`, "3"], [R`$\text{S}_2\text{O}_3^{2-}$ → $\text{S}_4\text{O}_6^{2-}$`, "1"], [R`H₂O₂ (oxidant or reductant)`, "2"]]),
  J(R`Moles of KMnO4 for FeC2O4, Fe2(C2O4)3, FeSO4, Fe2(SO4)3: n-factors 3, 6, 1, 0. Total electrons ÷ 5 = moles of KMnO4.`, "2026 · 4 Apr · Shift 1"),
  J(R`MnO4⁻ in <b>basic</b> medium (n = 3) + excess KI → I2; I2 titrated with thiosulphate (n = 1): equivalents of MnO4⁻ = equivalents of S2O3²⁻.`, "2026 · 6 Apr · Shift 2"),
  P(R`<b>Double indicator</b> (Na2CO3 vs HCl): phenolphthalein (pH 8.3–10) marks the first end point (n = 1, CO3²⁻ → HCO3⁻); methyl orange (3.1–4.4) the total (n = 2).`)
]]
],
pyq: {
  pat: [
    [R`Number of atoms/molecules from mass, moles or STP volume`, "2026 · 4 Apr · Shift 1; 2026 · 4 Apr · Shift 2; 2026 · 6 Apr · Shift 2; 2026 · 8 Apr · Shift 2"],
    [R`Mass of product from a balanced equation (limiting reagent)`, "2026 · 2 Apr · Shift 1; 2026 · 5 Apr · Shift 1; 2026 · 5 Apr · Shift 2"],
    [R`Empirical formula from mass ratio / combustion data`, "2026 · 2 Apr · Shift 2"],
    [R`Mole fraction from a w/w % solution`, "2026 · 5 Apr · Shift 1"],
    [R`Redox titrations using n-factors`, "2026 · 4 Apr · Shift 1; 2026 · 6 Apr · Shift 2"]
  ],
  combo: [R`Mole concept + organic combustion analysis (Liebig, Carius)`, R`Mole concept + coordination (moles of AgCl from a complex)`, R`Stoichiometry + hydrocarbons (O2 needed for combustion)`],
  trap: [R`22.7 L (1 bar) vs 22.4 L (1 atm) at 273 K.`, R`"Atoms" ≠ "molecules": multiply by atoms per molecule.`],
  mist: [R`Not balancing the equation before using mole ratios.`, R`Using the n-factor of the wrong product (MnO4⁻ depends on the medium).`]
}
});
})();
