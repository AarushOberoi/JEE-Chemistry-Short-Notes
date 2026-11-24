(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
NB.ch({
n: "11-5", short: "Thermodynamics",
intro: R`<b>Big idea:</b> energy is conserved (ΔU = q + w); a process is spontaneous when it lowers Gibbs energy (ΔG = ΔH − TΔS < 0).`,
sec: [
["Formula Sheet", [
  KEY([R`$\Delta U = q + w$ (energy into system +) · $\Delta H = \Delta U + \Delta n_gRT$ · $q_V = \Delta U$, $q_p = \Delta H$`, R`Isothermal reversible: $w = -2.303\,nRT\log\frac{V_2}{V_1}$ · irreversible: $w = -P_{ext}\Delta V$ · free expansion: $w = 0$`, R`$C_p - C_V = R$ · adiabatic: $\Delta U = w = nC_V\Delta T$`, R`$\Delta_rH = \sum\Delta_fH_{products} - \sum\Delta_fH_{reactants} = \sum BE_{reactants} - \sum BE_{products}$`, R`$\Delta S = \frac{q_{rev}}{T}$; $\Delta S_{trans} = \frac{\Delta H_{trans}}{T}$ · $\Delta G = \Delta H - T\Delta S$ · $\Delta G^\circ = -2.303RT\log K = -nFE^\circ$`], "Formula sheet"),
  STEPS("Hess's law problems", [["Target", "write the reaction you need", ""], ["Arrange", "reverse / multiply given equations so species cancel", "reverse → change sign"], ["Add", "add the ΔH values the same way", "heat 'evolved' = negative"]])
]],
["Basic Terms", [
  P(R`<b>System</b> and <b>surroundings</b> together make the universe. <b>Open</b> system exchanges energy and matter; <b>closed</b> only energy; <b>isolated</b> neither.`, null, S(s.rect(10, 30, 70, 60, 'class="thin"') + s.arr(45, 10, 45, 30) + s.arr(45, 90, 45, 110) + s.t(15, 128, "open: E + matter", 11) + s.rect(100, 30, 70, 60) + s.arr(135, 10, 135, 30, 'class="red"') + s.t(105, 128, "closed: E only", 11) + s.rect(190, 30, 70, 60, 'style="stroke-width:4"') + s.t(195, 128, "isolated: none", 11), 270, 135, "Types of system")),
  P(R`<b>State functions</b> depend only on the state (U, H, S, G, P, V, T); <b>path functions</b>: q, w. <b>Extensive</b> properties depend on amount (mass, V, U, H, S, G, heat capacity); <b>intensive</b> do not (T, P, density, molar quantities, b.p.).`),
  P(R`Processes: isothermal ($dT = 0$), adiabatic ($q = 0$), isobaric ($dP = 0$), isochoric ($dV = 0$), cyclic ($\Delta(\text{state fn}) = 0$), reversible (infinitesimally slow, always near equilibrium).`)
]],
["First Law, Work & Heat", [
  P(R`<b>First law</b> (sign: energy <b>into</b> the system is positive):`, R`\Delta U = q + w`, S(s.rect(80, 40, 80, 50) + s.t(95, 70, "system", 13) + s.arr(30, 65, 80, 65) + s.t(5, 58, "q > 0", 12) + s.arr(120, 5, 120, 40) + s.t(125, 18, "w > 0 (work on)", 12) + s.arr(160, 65, 215, 65, 'class="red"') + s.t(170, 58, "w < 0", 12, 'class="red"'), 240, 100, "IUPAC sign convention")),
  P(R`<b>Pressure–volume work</b>: $w = -\int P_{ext}\,dV$.`),
  T(["Process (ideal gas)", "w", "q, ΔU"], [["free expansion ($P_{ext} = 0$)", "0", "isothermal: q = 0, ΔU = 0"], ["irreversible, constant $P_{ext}$", R`$-P_{ext}(V_2 - V_1)$`, R`isothermal: $q = -w$`], ["reversible isothermal", R`$-2.303\,nRT\log\frac{V_2}{V_1}$`, R`$\Delta U = 0$, $q = -w$`], ["isochoric", "0", R`$\Delta U = q_V$`], ["adiabatic", R`$\Delta U = nC_V(T_2 - T_1)$`, R`$q = 0$`]]),
  G({ xl: "V", yl: "P", xr: [0, 5], yr: [0, 5], fns: [x => x > 0.8 ? 4 / x : NaN], fill: [[0, null, 1, 4]], vx: [1, 4], t: "Reversible isothermal: w = −(area under curve)" }),
  J(R`Match isothermal processes: reversible expansion $q = nRT\ln\frac{V_2}{V_1}$; free expansion $q = 0$; irreversible compression $w = -P_{ext}(V_2 - V_1)$; cyclic reversible $\frac{q_{rev}}{T} = 0$ (ΔS = 0).`, "2026 · 6 Apr · Shift 2"),
  J(R`Cycle X → Y → X: ΔU over the cycle is zero. Use $\Delta U_{X\to Y} = q + w$ with work <b>done by</b> the gas taken as negative, then find the return path's w.`, "2026 · 2 Apr · Shift 2"),
  P(R`<b>Enthalpy</b> $H = U + PV$; at constant pressure $\Delta H = q_p$. For gaseous reactions:`, R`\Delta H = \Delta U + \Delta n_g RT`),
  J(R`Bomb calorimeter gives $q_V = \Delta U$. Convert to $\Delta_cH$ with $\Delta n_g$, then $\Delta_fH$ (ethanol) by Hess's law using $\Delta_fH$ of CO2 and H2O.`, "2026 · 4 Apr · Shift 2"),
  P(R`<b>Heat capacity</b>: $q = C\Delta T$; $C_p - C_V = R$ (per mole, ideal gas). $C_V = \frac32R$ for a monatomic gas.`),
  J(R`"$C_V > C_p$ for an ideal gas" is false ($C_p = C_V + R$). At constant volume no work is done and all heat raises U (temperature).`, "2026 · 4 Apr · Shift 1"),
  J(R`Order of molar heat capacities at 298 K: more atoms → more vibrational/rotational modes → larger $C_p$ (e.g. He < N2 < CO2 type order).`, "2026 · 5 Apr · Shift 2")
]],
["Enthalpies of Reactions", [
  P(R`<b>Standard state</b>: pure substance at 1 bar and the stated temperature (usually 298 K). $\Delta_fH^\circ$ of an element in its reference (most stable) state is zero (C graphite, O2 gas, Br2 liquid).`),
  T(["Type", "Definition"], [["$\\Delta_fH^\\circ$ formation", "1 mol of compound from elements in standard states"], ["$\\Delta_cH^\\circ$ combustion", "1 mol burnt completely in O2 (always negative)"], ["$\\Delta_{fus}H$, $\\Delta_{vap}H$, $\\Delta_{sub}H$", "phase changes; $\\Delta_{sub}H = \\Delta_{fus}H + \\Delta_{vap}H$"], ["$\\Delta_aH$ atomisation", "breaking all bonds to give gaseous atoms"], ["bond enthalpy", "average energy to break one mole of a bond in the gas phase"], ["$\\Delta_{lattice}H$", "1 mol ionic solid → gaseous ions"], ["$\\Delta_{sol}H$", "$\\Delta_{lattice}H + \\Delta_{hyd}H$"]]),
  P(R`<b>Hess's law</b>: ΔH of a reaction is the same whether it occurs in one step or many. So equations can be added, subtracted and multiplied like algebra.`, [R`\Delta_rH^\circ = \sum\Delta_fH^\circ(\text{products}) - \sum\Delta_fH^\circ(\text{reactants})`, R`\Delta_rH^\circ = \sum\text{BE}(\text{reactants}) - \sum\text{BE}(\text{products})\quad(\text{gas phase})`], S(s.t(10, 30, "A", 15) + s.t(200, 30, "B", 15) + s.arr(25, 25, 195, 25) + s.t(100, 18, "ΔH", 12) + s.t(105, 105, "C", 15) + s.arr(20, 35, 100, 95, 'class="red"') + s.arr(118, 95, 198, 35, 'class="red"') + s.t(35, 75, "ΔH₁", 12, 'class="red"') + s.t(165, 75, "ΔH₂", 12, 'class="red"') + s.t(55, 125, "ΔH = ΔH₁ + ΔH₂", 13), 230, 135, "Hess's law")),
  J(R`$\Delta_fH$ of anhydrous Al2Cl6(s): combine the given reactions (Al + HCl(aq), formation of HCl(g), hydration of HCl and of Al2Cl6) so that only 2Al + 3Cl2 → Al2Cl6(s) remains. Watch the signs of heats "evolved".`, "2026 · 2 Apr · Shift 1"),
  W(R`Bond-enthalpy calculations are valid only when all species are gaseous. "Heat evolved = 164 kJ" means ΔH = −164 kJ.`)
]],
["Entropy, Gibbs Energy & Spontaneity", [
  P(R`<b>Entropy</b> S measures disorder (randomness). $\Delta S = \frac{q_{rev}}{T}$. Solids < liquids < gases; S rises with temperature, with dissolution, and when $\Delta n_g > 0$.`, [R`\Delta S_{total} = \Delta S_{sys} + \Delta S_{surr} > 0\ (\text{spontaneous})`, R`\Delta S_{vap} = \frac{\Delta_{vap}H}{T_b},\qquad \Delta S_{fus} = \frac{\Delta_{fus}H}{T_m}`]),
  P(R`<b>Third law</b>: the entropy of a perfectly crystalline substance is zero at 0 K.`),
  P(R`<b>Gibbs energy</b> (constant T, P): $\Delta G = \Delta H - T\Delta S$. $\Delta G < 0$ spontaneous, $= 0$ equilibrium, $> 0$ non-spontaneous.`, null, G({ xl: "T", yl: "ΔG", xr: [0, 10], yr: [-5, 5], fns: [x => 3 - 0.6 * x], pts: [[5, 0, "T = ΔH/ΔS"]], lab: ["ΔH > 0, ΔS > 0"], t: "Spontaneous above T = ΔH/ΔS" })),
  T(["ΔH", "ΔS", "Spontaneous?"], [["−", "+", "always"], ["+", "−", "never"], ["−", "−", "at low T (T < ΔH/ΔS)"], ["+", "+", "at high T (T > ΔH/ΔS)"]]),
  J(R`Transition temperature where $A \rightleftharpoons B$: set $\Delta G^\circ = 0$. With $\Delta G^\circ = 105 - 35\log T$, $\log T = 3$, so T = 1000 K = 727 °C.`, "2026 · 2 Apr · Shift 1"),
  J(R`$\Delta_rG^\circ = \Delta_rH^\circ - T\Delta_rS^\circ$ from tables of $\Delta_fH^\circ$ and $S^\circ$: build both Δ values as products − reactants, convert J to kJ.`, "2026 · 5 Apr · Shift 2"),
  P(R`<b>ΔG and equilibrium</b>:`, [R`\Delta G = \Delta G^\circ + RT\ln Q,\qquad \Delta G^\circ = -RT\ln K = -2.303\,RT\log K`, R`\Delta G^\circ = -nFE^\circ_{cell},\qquad -\Delta G = w_{non\text{-}PV,\max}`]),
  W(R`A negative ΔG says a reaction <b>can</b> happen, not how fast (graphite → diamond is thermodynamically allowed but very slow kinetically).`)
]]
],
pyq: {
  pat: [
    [R`Hess's law combinations / bomb calorimeter → ΔfH`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 2"],
    [R`q, w, ΔU in isothermal and cyclic processes`, "2026 · 2 Apr · Shift 2; 2026 · 6 Apr · Shift 2"],
    [R`ΔG° = ΔH° − TΔS° from tables; transition temperature`, "2026 · 2 Apr · Shift 1; 2026 · 5 Apr · Shift 2"],
    [R`Heat capacities ($C_p$, $C_V$) statements and orders`, "2026 · 4 Apr · Shift 1; 2026 · 5 Apr · Shift 2"]
  ],
  combo: [R`Thermodynamics + equilibrium (ΔG° = −RT ln K, van't Hoff)`, R`Thermodynamics + electrochemistry (fuel cell work → gas compression)`],
  trap: [R`Work done <b>by</b> the gas is negative in the IUPAC convention.`, R`ΔH = ΔU + Δn_gRT uses only gaseous moles.`],
  mist: [R`Using kJ for ΔH but J for TΔS in the same equation.`, R`Forgetting ΔfH of elements in the standard state = 0.`]
}
});
})();
