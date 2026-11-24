(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
NB.ch({
n: "12-1", short: "Solutions",
intro: R`<b>Big idea:</b> a non-volatile solute lowers the solvent's vapour pressure. Everything else — higher boiling point, lower freezing point, osmotic pressure — follows, and depends only on the <b>number</b> of solute particles.`,
sec: [
["Formula Sheet", [
  T(["Property", "Formula", "Used for"], [["Henry's law", R`$p = K_Hx$`, "gas solubility (high $K_H$ → less soluble)"], ["Raoult's law", R`$p = p_A^\circ x_A + p_B^\circ x_B$`, "volatile mixtures"], ["RLVP", R`$\frac{p^\circ - p}{p^\circ} = i\,x_{solute}$`, "molar mass (dilute)"], ["boiling point", R`$\Delta T_b = iK_bm$`, "water $K_b$ 0.52"], ["freezing point", R`$\Delta T_f = iK_fm$`, "water $K_f$ 1.86"], ["osmotic pressure", R`$\pi = iCRT = h\rho g$`, "proteins, polymers"], ["van't Hoff factor", R`$\alpha_{diss} = \frac{i-1}{n-1}$; $\alpha_{assoc} = \frac{1-i}{1-1/n}$`, "abnormal molar mass"]]),
  STEPS("Molar mass from a colligative property", [["Pick formula", "ΔTf, ΔTb, π or RLVP", "include i for electrolytes"], ["Solve for moles", R`$m = \frac{\Delta T}{iK}$ or $n = \frac{\pi V}{iRT}$`, ""], ["Molar mass", R`$M = \frac{\text{mass of solute}}{\text{moles}}$`, "molality uses kg of solvent"]])
]],
["Types & Concentration of Solutions", [
  P(R`Solutions are homogeneous mixtures: solvent (larger component) + solute. Nine types by phase (gas in liquid, solid in liquid, etc.).`),
  T(["Term", "Expression", "Depends on T?"], [["mass %", R`$\frac{m_{solute}}{m_{solution}} \times 100$`, "no"], ["volume % / mass by volume %", R`$\frac{V_{solute}}{V_{solution}} \times 100$; $\frac{m}{V} \times 100$`, "yes"], ["ppm", R`$\frac{\text{parts of component}}{\text{total parts}} \times 10^6$`, "no"], ["mole fraction", R`$x_A = \frac{n_A}{n_A + n_B}$`, "no"], ["molarity M", "mol solute per L solution", "yes"], ["molality m", "mol solute per kg solvent", "no"]]),
  P(R`<b>Solubility of solids</b>: depends on nature (like dissolves like), temperature (Le Chatelier: endothermic dissolution → more soluble when hot), almost independent of pressure.`)
]],
["Henry's Law (Gases in Liquids)", [
  P(R`The partial pressure of a gas above a solution is proportional to its mole fraction in the solution. <b>Higher $K_H$ → lower solubility</b>; $K_H$ rises with temperature, so gases are less soluble when hot (dissolution is exothermic).`, R`p = K_H\,x`, G({ xl: "x (gas)", yl: "p", xr: [0, 1], yr: [0, 1], fns: [x => x * 0.9, x => x * 0.4], lab: ["larger K_H (less soluble)", "smaller K_H"], t: "Henry's law: slope = K_H" })),
  L([R`Soda bottles are sealed under high CO2 pressure.`, R`<b>Scuba divers</b>: high N2 solubility at depth → "bends" on surfacing; tanks use air diluted with helium (11.7% He, 56.2% N2, 32.1% O2).`, R`<b>High altitude</b>: low O2 partial pressure → <b>anoxia</b> (weakness, unclear thinking).`])
]],
["Raoult's Law & Vapour Pressure", [
  P(R`For two volatile liquids, each partial pressure ∝ its mole fraction in the liquid; total pressure is linear in $x$ (ideal). Vapour is richer in the more volatile component:`, [R`p_A = p_A^\circ x_A,\quad p_{total} = p_A^\circ x_A + p_B^\circ x_B = p_A^\circ + (p_B^\circ - p_A^\circ)x_B`, R`y_A = \frac{p_A}{p_{total}}`], G({ xl: "x_B", yl: "p", xr: [0, 1], yr: [0, 1], fns: [x => 0.3 + 0.5 * x, x => 0.3 * (1 - x), x => 0.8 * x], lab: ["p total", "p_A", "p_B"], t: "Ideal solution: straight lines" })),
  P(R`<b>Non-volatile solute</b>: $p = p_1^\circ x_1$ (vapour pressure of the solution is lowered). Raoult's law is a special case of Henry's law with $K_H = p^\circ$.`),
  T(["", "Ideal", "Positive deviation", "Negative deviation"], [["A–B vs A–A, B–B forces", "equal", "A–B weaker", "A–B stronger"], ["ΔmixH, ΔmixV", "0, 0", "> 0, > 0", "< 0, < 0"], ["examples", "n-hexane + n-heptane, bromoethane + chloroethane, benzene + toluene", "ethanol + acetone, CS2 + acetone, ethanol + water", "phenol + aniline, chloroform + acetone, HNO3 + water"], ["azeotrope", "none", "<b>minimum-boiling</b> (ethanol–water ~95% by volume)", "<b>maximum-boiling</b> (HNO3 68%, b.p. 393.5 K)"]]),
  GR("Vapour pressure vs composition", [
    { xl: "x_B", yl: "p", xr: [0, 1], yr: [0, 1.1], fns: [x => 0.3 + 0.5 * x + 0.45 * x * (1 - x)], hy: [], t: "positive deviation (above line)" },
    { xl: "x_B", yl: "p", xr: [0, 1], yr: [0, 1.1], fns: [x => 0.3 + 0.5 * x - 0.35 * x * (1 - x)], t: "negative deviation (below line)" }]),
  J(R`30% (w/w) methanol in CCl4: $x_{CCl_4} = \frac{70/154}{70/154 + 30/32} = 0.33$; methanol + CCl4 shows <b>positive</b> deviation (H-bonds of methanol broken).`, "2026 · 8 Apr · Shift 2"),
  J(R`Glycerol (b.p. 563 K, decomposes) cannot be separated from water by simple distillation (use reduced pressure); an azeotrope cannot be separated by fractional distillation.`, "2026 · 2 Apr · Shift 1")
]],
["Colligative Properties", [
  P(R`Depend on the <b>number</b> of solute particles, not their nature.`),
  P(R`<b>Relative lowering of vapour pressure</b> equals the mole fraction of solute:`, R`\frac{p_1^\circ - p_1}{p_1^\circ} = x_2 = \frac{n_2}{n_1 + n_2} \approx \frac{w_2M_1}{M_2w_1}`),
  P(R`<b>Elevation of boiling point</b> and <b>depression of freezing point</b> ($K_b$ water 0.52, $K_f$ water 1.86 K kg mol⁻¹):`, [R`\Delta T_b = K_b\,m,\qquad \Delta T_f = K_f\,m`, R`K_b = \frac{RM_1T_b^2}{1000\,\Delta_{vap}H},\qquad K_f = \frac{RM_1T_f^2}{1000\,\Delta_{fus}H}`], S(s.axes(20, 135, 10, 250, 140, 10, "T", "p") + s.path("M30 120 Q120 90 230 25", 'class="blue"') + s.path("M50 130 Q140 105 240 45", 'class="red"') + s.line(20, 60, 245, 60, 'class="thin" stroke-dasharray="4 3"') + s.t(180, 72, "1 atm", 11) + s.line(195, 60, 195, 135, 'class="thin"') + s.line(222, 60, 222, 135, 'class="thin"') + s.t(190, 150, "T_b°", 10) + s.t(220, 150, "T_b", 10) + s.t(90, 95, "solvent", 11, 'class="blue"') + s.t(150, 128, "solution", 11, 'class="red"'), 260, 155, "Lower VP → higher boiling point")),
  J(R`Solution with VP lowered 760 → 750 mm Hg and b.p. 320 K (pure 319.5 K, $K_b = 0.3$): $m = 0.5/0.3$; from RLVP $n_2/n_1 \approx 10/750$; combine with 40 g of solvent to get moles of solvent.`, "2026 · 4 Apr · Shift 1"),
  P(R`<b>Osmotic pressure</b> (best for macromolecules like proteins and polymers — measured at room temperature, large values):`, R`\pi = CRT = \frac{n_2}{V}RT,\qquad M_2 = \frac{w_2RT}{\pi V},\qquad \pi = h\rho g`),
  J(R`Haemoglobin: π from the height difference, $\pi = h\rho g$, then $M = \frac{wRT}{\pi V}$. Two protein solutions mixed: total moles ÷ total volume gives the new π.`, "2026 · 2 Apr · Shift 2; 2026 · 5 Apr · Shift 2"),
  P(R`<b>Isotonic</b> solutions have equal π (no net osmosis) — 0.9% (m/V) NaCl is <b>normal saline</b>. Hypertonic → cells shrink; hypotonic → cells swell. <b>Reverse osmosis</b> (pressure > π) is used for desalination.`, null, S(s.rect(10, 20, 220, 90, 'class="thin"') + s.line(120, 20, 120, 110, 'class="red" stroke-dasharray="5 4"') + s.t(30, 60, "solvent / dilute", 12) + s.t(135, 60, "concentrated", 12) + s.arr(95, 85, 145, 85) + s.t(70, 128, "solvent flows → concentrated side", 11), 240, 135, "Osmosis through a semipermeable membrane")),
  J(R`Water moves from the more dilute (lower π) to the more concentrated (higher π) side. 18 g glucose/100 mL (1 M) vs 30 g/250 mL (0.67 M): water moves from chamber 2 to chamber 1.`, "2026 · 6 Apr · Shift 2"),
  J(R`Kb of water (0.52) < Kf (1.86), so ΔTb < ΔTf for the same molality; osmotic pressure is preferred for proteins; benzoic acid dimerises in benzene through two H bonds.`, "2026 · 8 Apr · Shift 2")
]],
["Abnormal Molar Mass: van't Hoff Factor", [
  P(R`Dissociation increases the number of particles (molar mass appears lower); association decreases it (e.g. acetic acid dimerises in benzene, molar mass appears higher).`, [R`i = \frac{\text{observed colligative property}}{\text{calculated}} = \frac{\text{normal molar mass}}{\text{abnormal molar mass}}`, R`\Delta T_f = iK_fm,\quad \Delta T_b = iK_bm,\quad \pi = iCRT,\quad \frac{\Delta p}{p^\circ} = i\,x_2`]),
  P(R`Degree of dissociation (into $n$ ions) or association (into $n$-mers):`, [R`\alpha_{diss} = \frac{i - 1}{n - 1},\qquad \alpha_{assoc} = \frac{1 - i}{1 - \frac1n}`]),
  J(R`Fluoroacetic acid: $\Delta T_f = iK_fm$ gives $i$, then $\alpha = i - 1$ and $K_a = \frac{C\alpha^2}{1 - \alpha}$ (molarity ≈ molality).`, "2026 · 2 Apr · Shift 1"),
  J(R`0.1 M K4[Fe(CN)6] (i = 5) vs 0.1 M FeCl3 (i = 4): the hexacyanoferrate side has higher π, so water flows from the FeCl3 side to it.`, "2026 · 4 Apr · Shift 2"),
  W(R`Use $i$ for electrolytes: NaCl 2, K2SO4 3, FeCl3 4, K4[Fe(CN)6] 5, complete dissociation unless α is given.`)
]]
],
pyq: {
  pat: [
    [R`Osmotic pressure: direction of flow, molar mass of proteins, mixing`, "2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 2; 2026 · 5 Apr · Shift 2; 2026 · 6 Apr · Shift 2"],
    [R`ΔTf / ΔTb with van't Hoff factor → α or Ka`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 1"],
    [R`Raoult's law deviations and mole fraction`, "2026 · 8 Apr · Shift 2"],
    [R`Statements on Kb, Kf, azeotropes, association`, "2026 · 2 Apr · Shift 1; 2026 · 8 Apr · Shift 2"]
  ],
  combo: [R`Solutions + ionic equilibrium (α from ΔTf → Ka)`, R`Solutions + coordination (i of complex salts)`, R`Solutions + GOC (distillation, azeotropes)`],
  trap: [R`Higher $K_H$ means lower gas solubility.`, R`Positive deviation → minimum-boiling azeotrope.`],
  mist: [R`Forgetting $i$ for electrolytes.`, R`Using solution mass instead of solvent mass in molality.`]
}
});
})();
