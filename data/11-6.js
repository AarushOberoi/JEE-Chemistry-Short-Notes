(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
// titration curve helpers (0.1 M acid, 25 mL, 0.1 M NaOH)
const sa = v => { const a = 2.5 - 0.1 * v, tot = 25 + v; if (Math.abs(a) < 1e-9) return 7; return a > 0 ? -Math.log10(a / tot) : 14 + Math.log10(-a / tot); };
const wa = v => { const Ka = 1.8e-5, a = 2.5 - 0.1 * v, tot = 25 + v; if (v < 0.05) return -Math.log10(Math.sqrt(Ka * 0.1)); if (a > 0.0005) return 4.74 + Math.log10((0.1 * v) / a); if (a > -0.0005) return 8.7; return 14 + Math.log10(-a / tot); };
NB.ch({
n: "11-6", short: "Equilibrium",
intro: R`<b>Big idea:</b> at equilibrium forward and backward rates are equal, so concentrations stop changing (K). Disturb it and the system shifts to undo the change (Le Chatelier). Ionic equilibrium applies this to acids, bases and salts.`,
sec: [
["pH Problems — Pick the Right Formula", [
  MAP("What is in the beaker?", "", [["strong acid / base", R`$[H^+] = C\times\text{basicity}$; pH = −log[H⁺]`, "mixtures: excess mmol ÷ total V"], ["weak acid", R`$\text{pH} = \frac12(\text{p}K_a - \log C)$`, R`$\alpha = \sqrt{K_a/C}$ if α ≪ 1`], ["weak base", R`$\text{pOH} = \frac12(\text{p}K_b - \log C)$`, ""], ["weak acid + its salt (buffer)", R`$\text{pH} = \text{p}K_a + \log\frac{[\text{salt}]}{[\text{acid}]}$`, "half-neutralised → pH = pKa"], ["weak base + its salt", R`$\text{pOH} = \text{p}K_b + \log\frac{[\text{salt}]}{[\text{base}]}$`, ""], ["salt of WA + SB", R`$\text{pH} = 7 + \frac12(\text{p}K_a + \log C)$`, "basic"], ["salt of SA + WB", R`$\text{pH} = 7 - \frac12(\text{p}K_b + \log C)$`, "acidic"], ["salt of WA + WB", R`$\text{pH} = 7 + \frac12(\text{p}K_a - \text{p}K_b)$`, "independent of C"], ["sparingly soluble salt", R`$K_{sp} = x^xy^yS^{x+y}$`, R`AB: $S^2$, AB₂: $4S^3$, A₃B₂: $108S^5$`]]),
  KEY([R`$K_p = K_c(RT)^{\Delta n_g}$ · reverse → $1/K$ · ×n → $K^n$ · add → multiply`, R`Q < K → forward; Q > K → backward`, R`$K_w = 10^{-14}$ (298 K) · $K_aK_b = K_w$ · pH + pOH = 14`], "Equilibrium formula sheet")
]],
["Physical & Chemical Equilibrium", [
  P(R`Equilibrium is <b>dynamic</b>: forward and backward rates are equal, so concentrations stay constant. It can be reached from either side and only in a closed system.`, null, G({ xl: "t", yl: "conc.", xr: [0, 6], yr: [0, 1.1], fns: [x => 0.35 + 0.65 * Math.exp(-x), x => 0.65 * (1 - Math.exp(-x))], vx: [3.5], lab: ["reactant", "product"], t: "Concentrations level off at equilibrium" })),
  L([R`Solid ⇌ liquid: at the normal melting point (ice/water at 273 K, 1 atm).`, R`Liquid ⇌ vapour: constant vapour pressure at a given T.`, R`Gas in liquid: <b>Henry's law</b> — mass of gas dissolved ∝ its pressure above the liquid (soda bottles).`]),
  P(R`<b>Law of chemical equilibrium</b> (Guldberg & Waage) for $aA + bB \rightleftharpoons cC + dD$:`, [R`K_c = \frac{[C]^c[D]^d}{[A]^a[B]^b},\qquad K_p = K_c(RT)^{\Delta n_g}`]),
  P(R`Pure solids and pure liquids are omitted (activity 1): for CaCO3(s) ⇌ CaO(s) + CO2(g), $K_p = p_{CO_2}$.`),
  P(R`<b>Manipulating K</b>: reverse → $1/K$; multiply equation by $n$ → $K^n$ (divide by 3 → $K^{1/3}$); add equations → multiply K's.`),
  J(R`$A_2 + B_2 \rightleftharpoons C$ has K = 2.7 × 10⁻⁵; for the equation divided by 3, $K' = K^{1/3} = 3 \times 10^{-2}$.`, "2026 · 4 Apr · Shift 1"),
  J(R`$K_3$ for ½x2 + ½y2 + ½z2 ⇌ xyz: reverse and halve reaction 1 ($K_1^{-1/2}$), then add reaction 2, so $K_3 = K_2/\sqrt{K_1}$.`, "2026 · 8 Apr · Shift 2"),
  P(R`<b>Size of K</b>: > 10³ products predominate; < 10⁻³ reactants predominate. <b>Reaction quotient Q</b>: Q < K forward, Q > K backward, Q = K equilibrium.`),
  J(R`Degree of dissociation from total pressure: for $A \rightleftharpoons B + C$ starting with $a$ mol, $K_p = \frac{x^2}{(a - x)(a + x)}p$. For $2N_2O_5 \rightleftharpoons 2N_2O_4 + O_2$ at 50% dissociation, find mole fractions, $K_p$, then $\Delta G^\circ = -RT\ln K_p$.`, "2026 · 5 Apr · Shift 2; 2026 · 4 Apr · Shift 2")
]],
["Le Chatelier's Principle", [
  P(R`A system at equilibrium shifts to <b>undo</b> any change imposed on it.`),
  T(["Change", "Effect"], [["add reactant / remove product", "shifts forward"], ["increase pressure", "shifts to fewer gas moles (no effect if Δn_g = 0)"], ["increase temperature", "favours the endothermic direction; K changes"], ["catalyst", "no shift; equilibrium reached faster"], ["inert gas at constant V", "no effect"], ["inert gas at constant P", "shifts to more gas moles"]]),
  P(R`Haber process $N_2 + 3H_2 \rightleftharpoons 2NH_3$, $\Delta H < 0$: high pressure and moderate temperature (~700 K) with Fe catalyst.`),
  P(R`<b>van't Hoff equation</b> (effect of T on K):`, R`\log\frac{K_2}{K_1} = \frac{\Delta H^\circ}{2.303R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)`, G({ xl: "1/T", yl: "log K", xr: [0, 4], yr: [0, 4], fns: [x => 3.6 - 0.8 * x], t: "slope = −ΔH°/2.303R (here ΔH° > 0)" })),
  J(R`$\log K_p$ vs $1/T$ data: slope $= -\frac{\Delta H^\circ}{2.303R}$, so $\frac{\Delta H^\circ}{R} = 2.303 \times |\text{slope}|$.`, "2026 · 5 Apr · Shift 1")
]],
["Acids, Bases & pH", [
  P(R`<b>Arrhenius</b>: H⁺ / OH⁻ in water. <b>Brønsted–Lowry</b>: proton donor / acceptor; conjugate pairs differ by one H⁺ (strong acid ↔ weak conjugate base). <b>Lewis</b>: electron-pair acceptor (BF3, AlCl3, H⁺, metal ions) / donor (NH3, H2O, OH⁻).`),
  P(R`<b>Ionic product of water</b> $K_w = [H^+][OH^-] = 10^{-14}$ at 298 K (increases with T). $\text{pH} = -\log[H^+]$, $\text{pH} + \text{pOH} = 14$, $K_aK_b = K_w$.`),
  P(R`<b>Weak acid</b> (Ostwald dilution, $\alpha \ll 1$):`, [R`K_a = \frac{C\alpha^2}{1 - \alpha} \approx C\alpha^2,\qquad \alpha = \sqrt{K_a/C}`, R`[H^+] = \sqrt{K_aC},\qquad \text{pH} = \tfrac12(\text{p}K_a - \log C)`]),
  J(R`When α is not small (concentrated weak electrolyte), solve the full quadratic $K = \frac{C\alpha^2}{1 - \alpha}$ instead of $\alpha = \sqrt{K/C}$.`, "2026 · 6 Apr · Shift 2"),
  P(R`Polyprotic acids: $K_{a1} \gg K_{a2}$, so pH comes from the first step. <b>Common ion effect</b>: adding a common ion suppresses ionisation of a weak electrolyte.`),
  J(R`H2A in 0.1 M HCl: [H⁺] ≈ 0.1 M from HCl, so $[HA^-] = \frac{K_{a1}[H_2A]}{[H^+]} = 8.1 \times 10^{-8}$ M.`, "2026 · 2 Apr · Shift 2"),
  J(R`pH of strong acid/base mixtures: compare millimoles of H⁺ and OH⁻ (Ca(OH)2 gives 2 OH⁻, H2SO4 gives 2 H⁺), divide the excess by total volume.`, "2026 · 5 Apr · Shift 1")
]],
["Salt Hydrolysis & Buffers", [
  T(["Salt of", "Nature", "pH"], [["SA + SB (NaCl)", "neutral", "7"], ["WA + SB (CH3COONa)", "basic", R`$7 + \frac12(\text{p}K_a + \log C)$`], ["SA + WB (NH4Cl)", "acidic", R`$7 - \frac12(\text{p}K_b + \log C)$`], ["WA + WB (CH3COONH4)", "depends on Ka vs Kb", R`$7 + \frac12(\text{p}K_a - \text{p}K_b)$`]]),
  P(R`<b>Buffer</b>: resists pH change on adding small amounts of acid or base. Acidic buffer: weak acid + its salt (CH3COOH/CH3COONa); basic buffer: weak base + its salt (NH4OH/NH4Cl). <b>Henderson equation</b>:`, [R`\text{pH} = \text{p}K_a + \log\frac{[\text{salt}]}{[\text{acid}]},\qquad \text{pOH} = \text{p}K_b + \log\frac{[\text{salt}]}{[\text{base}]}`]),
  J(R`Weak acid half-neutralised by NaOH (e.g. 14.2 mL of the 28.4 mL needed): [salt] = [acid], so pH = pKa.`, "2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 2"),
  J(R`5 mL 0.1 M NH4OH + 250 mL 0.1 M NH4Cl: pOH = 4.74 + log 50 = 6.44, pH = 7.56.`, "2026 · 4 Apr · Shift 1"),
  GR("Titration curves (0.1 M acid with 0.1 M NaOH)", [
    { xl: "mL NaOH", yl: "pH", xr: [0, 50], yr: [0, 14], fns: [sa], vx: [25], t: "strong acid: jump ≈ 3–11" },
    { xl: "mL NaOH", yl: "pH", xr: [0, 50], yr: [0, 14], fns: [wa], vx: [12.5, 25], pts: [[12.5, 4.74, "pH = pKa"]], t: "weak acid: buffer region, eq. point > 7" }]),
  P(R`<b>Indicators</b>: phenolphthalein (8.3–10, colourless → pink) for weak acid vs strong base; methyl orange (3.1–4.4, red → yellow) for strong acid vs weak base; either for strong vs strong; none for weak vs weak.`)
]],
["Solubility Product", [
  P(R`For a sparingly soluble salt $A_xB_y \rightleftharpoons xA^{y+} + yB^{x-}$ with molar solubility $S$:`, R`K_{sp} = (xS)^x(yS)^y = x^xy^yS^{x+y}`),
  T(["Salt type", "Ksp", "Example"], [["AB", R`$S^2$`, "AgCl, BaSO4"], ["AB2 / A2B", R`$4S^3$`, "CaF2, Ag2CrO4"], ["AB3", R`$27S^4$`, "Al(OH)3"], ["A3B2", R`$108S^5$`, "Ca3(PO4)2"]]),
  J(R`Ag2CrO4 ($K_{sp} = 32x = 4S^3$) and AgBr ($K_{sp} = 4y = S^2$): $S_1 = 2x^{1/3}$, $S_2 = 2y^{1/2}$, ratio $= x^{1/3}/y^{1/2}$.`, "2026 · 2 Apr · Shift 1"),
  J(R`M3A2 with solubility $x$ g/L and molar mass $y$: $S = x/y$, $[A^{3-}] = 2S$, $K_{sp} = 108S^5$; ratio $[A^{3-}]/K_{sp} = \frac{2}{108S^4}$.`, "2026 · 5 Apr · Shift 1"),
  P(R`Ionic product $Q_{sp} > K_{sp}$ → precipitation (used in qualitative analysis); $Q_{sp} < K_{sp}$ → unsaturated. A <b>common ion</b> lowers solubility: AgCl in 0.01 M NaCl, $S' = K_{sp}/0.01$.`),
  W(R`Solubility $S$ is in mol L⁻¹ in $K_{sp}$; convert from g L⁻¹ using the molar mass.`)
]]
],
pyq: {
  pat: [
    [R`Manipulating K (reverse, multiply, add)`, "2026 · 4 Apr · Shift 1; 2026 · 8 Apr · Shift 2"],
    [R`Kp from degree of dissociation and total pressure`, "2026 · 4 Apr · Shift 2; 2026 · 5 Apr · Shift 2"],
    [R`pH at half-neutralisation / buffer pH (Henderson)`, "2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 1; 2026 · 4 Apr · Shift 2"],
    [R`Ksp ↔ solubility for AB, A2B, A3B2 salts`, "2026 · 2 Apr · Shift 1; 2026 · 5 Apr · Shift 1"],
    [R`Common ion effect in polyprotic acids`, "2026 · 2 Apr · Shift 2"],
    [R`ΔH° from log K vs 1/T`, "2026 · 5 Apr · Shift 1"]
  ],
  combo: [R`Equilibrium + thermodynamics (ΔG° = −RT ln K)`, R`Ionic equilibrium + colligative properties (α from ΔTf)`, R`Ksp + coordination (complex formation raises solubility)`],
  trap: [R`Kp uses partial pressures; Δn_g counts only gases.`, R`At half-equivalence pH = pKa regardless of concentration.`],
  mist: [R`Applying $\alpha = \sqrt{K/C}$ when α is large.`, R`Forgetting the coefficient powers in Ksp (4S³, not S³).`]
}
});
})();
