(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
NB.ch({
n: "12-3", short: "Chemical Kinetics",
intro: R`<b>Big idea:</b> rate depends on concentration (rate law, found by experiment) and temperature (Arrhenius). First-order reactions have a constant half-life.`,
sec: [
["Formula Sheet", [
  T(["", "Zero order", "First order", "Second order"], [["rate", "k", "k[R]", "k[R]²"], ["integrated", R`$[R] = [R]_0 - kt$`, R`$kt = 2.303\log\frac{[R]_0}{[R]}$`, R`$kt = \frac{1}{[R]} - \frac{1}{[R]_0}$`], ["t½", R`$\frac{[R]_0}{2k}$`, R`$\frac{0.693}{k}$`, R`$\frac{1}{k[R]_0}$`], ["units of k", "mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹"], ["straight line", "[R] vs t", "ln[R] vs t", "1/[R] vs t"]]),
  KEY([R`Arrhenius: $\log\frac{k_2}{k_1} = \frac{E_a}{2.303R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$; rate ≈ doubles per 10 °C`, R`First order: $t_{75\%} = 2t_{1/2}$, $t_{99\%} = 2t_{90\%} \approx 6.64\,t_{1/2}$, $t_{99.9\%} \approx 10\,t_{1/2}$; left after n half-lives $= \frac{[R]_0}{2^n}$`, R`Gas reaction $A \to B + C$: $p_A = 2p_i - p_t$`], "Shortcuts"),
  STEPS("Find the order from data", [["Compare two runs", "change one concentration, keep others fixed", ""], ["Ratio", R`$\frac{r_2}{r_1} = \left(\frac{c_2}{c_1}\right)^x$`, "solve for x"], ["Check", "units of k or t½ behaviour", "constant t½ → first order"]])
]],
["Rate of Reaction", [
  P(R`For $aA + bB \to cC + dD$:`, R`\text{rate} = -\frac1a\frac{d[A]}{dt} = -\frac1b\frac{d[B]}{dt} = \frac1c\frac{d[C]}{dt} = \frac1d\frac{d[D]}{dt}`, G({ xl: "t", yl: "[R]", xr: [0, 5], yr: [0, 1.1], fns: [x => Math.exp(-0.6 * x), x => 0.55 - 0.33 * (x - 1)], vx: [1], lab: ["[R] vs t", "tangent: instantaneous rate"], t: "Instantaneous rate = −slope of tangent" })),
  P(R`Units: mol L⁻¹ s⁻¹ (gases: atm s⁻¹). <b>Average rate</b> = Δ[ ]/Δt; <b>instantaneous rate</b> = slope of the tangent. Factors: concentration, temperature, catalyst, surface area, radiation.`)
]],
["Rate Law, Order & Molecularity", [
  P(R`<b>Rate law</b>: rate = $k[A]^x[B]^y$, determined <b>experimentally</b>. <b>Order</b> = x + y: can be 0, fractional or integral. Units of k: $(\text{mol L}^{-1})^{1-n}\text{s}^{-1}$.`),
  T(["Order", "Units of k"], [["0", "mol L⁻¹ s⁻¹"], ["1", "s⁻¹"], ["2", "L mol⁻¹ s⁻¹"], ["n", "(mol L⁻¹)^(1−n) s⁻¹"]]),
  J(R`k in mol⁻¹ L s⁻¹ → second order: quadrupling [X] makes the rate 16 times; t½ depends on concentration; N2O5 decomposition (first order) and the ln([R]0/[R]) vs t line are not valid for it.`, "2026 · 2 Apr · Shift 2"),
  P(R`<b>Molecularity</b>: number of species colliding in an <b>elementary</b> step; 1, 2 or (rarely) 3; never zero or fractional; not defined for complex reactions. For a complex reaction the <b>slowest step</b> (rate-determining step) sets the order.`),
  P(R`<b>Pseudo first order</b>: one reactant in large excess, e.g. hydrolysis of ethyl acetate in excess water, <b>inversion of cane sugar</b> (rate = k[C12H22O11]).`)
]],
["Integrated Rate Equations", [
  T(["Order", "Integrated form", "Linear plot", "t½"], [["0", R`$[R] = [R]_0 - kt$`, "[R] vs t (slope −k)", R`$\frac{[R]_0}{2k}$ (∝ [R]0)`], ["1", R`$k = \frac{2.303}{t}\log\frac{[R]_0}{[R]}$`, "ln[R] vs t (slope −k)", R`$\frac{0.693}{k}$ (independent of [R]0)`], ["2", R`$\frac{1}{[R]} - \frac{1}{[R]_0} = kt$`, "1/[R] vs t", R`$\frac{1}{k[R]_0}$`]]),
  GR("Zero vs first order", [
    { xl: "t", yl: "[R]", xr: [0, 5], yr: [0, 1.1], fns: [x => Math.max(0, 1 - 0.25 * x)], t: "zero order: straight line" },
    { xl: "t", yl: "ln[R]", xr: [0, 5], yr: [-2.5, 0.2], fns: [x => -0.45 * x], t: "first order: ln[R] linear" },
    { xl: "[R]₀", yl: "t½", xr: [0, 5], yr: [0, 5], fns: [x => 0.8 * x, x => 2], lab: ["zero order", "first order"], t: "t½ vs [R]₀" }]),
  P(R`Zero-order examples: decomposition of NH3 on hot Pt, of HI on gold surface (catalyst surface saturated). First-order: decomposition of N2O5, of N2O, radioactive decay, hydrogenation of ethene.`),
  P(R`First-order useful results: $t_{99\%} = 2t_{90\%}$; $t_{75\%} = 2t_{1/2}$; $t_{99.9\%} \approx 10t_{1/2}$; after $n$ half-lives $[R] = [R]_0/2^n$. For a gas $A \to B + C$ with initial $p_i$ and total $p_t$:`, R`k = \frac{2.303}{t}\log\frac{p_i}{2p_i - p_t}`),
  J(R`Gas-phase first order A → B + C: $p_A = 2p_i - p_t$; substitute in the first-order formula.`, "2026 · 5 Apr · Shift 1"),
  J(R`t100% vs t½: zero order $t_{100\%} = 2t_{1/2}$; first order never completes ($t_{100\%} = \infty$).`, "2026 · 2 Apr · Shift 1"),
  J(R`[A] falls 0.65 → 0.065 in x min and to 0.00065 in 20 min (factor 10³): first order, so x = 20/3 ≈ 7 min. $t_{99\%}$ with t½ = 6.93 min (k = 0.1 min⁻¹) = 46 min. Fraction decomposed = $1 - e^{-kt}$.`, "2026 · 4 Apr · Shift 2; 2026 · 5 Apr · Shift 1; 2026 · 4 Apr · Shift 1"),
  J(R`2A(g) → 4B(g) + C(g) with total pressure 300 (at 30 min) and 600 (at ∞): $p_0 = 600/2.5 = 240$; $p_t = p_0 + 1.5x$, so x = 40 and $p_C = x/2 = 20$ mm Hg.`, "2026 · 2 Apr · Shift 2"),
  J(R`Concentration–time curves of three reactions from the same [R]₀: the steepest fall has the largest k.`, "2026 · 4 Apr · Shift 2")
]],
["Temperature Dependence & Collision Theory", [
  P(R`Rate constant nearly doubles for a 10° rise. <b>Arrhenius equation</b>:`, [R`k = Ae^{-E_a/RT},\qquad \ln k = \ln A - \frac{E_a}{RT}`, R`\log\frac{k_2}{k_1} = \frac{E_a}{2.303R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)`], G({ xl: "1/T", yl: "ln k", xr: [0, 4], yr: [0, 4], fns: [x => 3.6 - 0.8 * x], t: "slope = −Ea/R, intercept = ln A" })),
  P(R`$e^{-E_a/RT}$ = fraction of molecules with energy ≥ Ea (Maxwell–Boltzmann). Raising T increases this fraction sharply.`, null, G({ xl: "KE", yl: "fraction", xr: [0, 6], yr: [0, 0.8], fns: [x => 1.3 * x * Math.exp(-x * x / 1.3) , x => 0.8 * x * Math.exp(-x * x / 3.2)], vx: [3], lab: ["T", "T + 10"], t: "More molecules exceed Ea at higher T" })),
  J(R`k triples (1.5×10³ → 4.5×10³ s⁻¹) with Ea = 60 kJ: $\log 3 = \frac{60000}{2.303 \times 8.3}\left(\frac{1}{300} - \frac{1}{T_2}\right)$, giving T2 ≈ 314 K (≈ 41 °C).`, "2026 · 2 Apr · Shift 1"),
  J(R`Ea for rate doubling between 298 and 308 K is about 53 kJ (12.6 kcal) mol⁻¹. For first order, t½ does not depend on [A]0, so a straight rising t½ vs [A]0 line is wrong.`, "2026 · 8 Apr · Shift 2"),
  P(R`<b>Energy profile</b>: reactants pass through an <b>activated complex</b> at the top of the barrier. A <b>catalyst</b> lowers Ea by an alternative path; it does not change ΔH, ΔG or K.`, null, S(s.line(15, 140, 285, 140, 'class="thin"') + s.hump(15, 100, 285, 120, 25) + s.hump(15, 100, 285, 120, 60, 'class="red" stroke-dasharray="5 4"') + s.t(10, 95, "R", 13) + s.t(270, 115, "P", 13) + s.t(120, 20, "Ea (uncatalysed)", 11) + s.t(115, 55, "Ea (catalysed)", 11, 'class="red"') + s.line(40, 100, 40, 28, 'class="thin"') + s.t(200, 135, "ΔH unchanged", 11), 300, 145, "Effect of a catalyst")),
  P(R`<b>Collision theory</b>: rate = $Z_{AB}e^{-E_a/RT}$ × P. Only collisions with enough energy (≥ threshold) <b>and</b> proper orientation are effective; P is the probability (steric) factor.`)
]]
],
pyq: {
  pat: [
    [R`First-order data: t½, t99%, fraction decomposed, concentration tables`, "2026 · 4 Apr · Shift 1; 2026 · 4 Apr · Shift 2; 2026 · 5 Apr · Shift 1"],
    [R`Arrhenius: Ea or T from two rate constants`, "2026 · 2 Apr · Shift 1; 2026 · 8 Apr · Shift 2"],
    [R`Order from units of k; statements on second order`, "2026 · 2 Apr · Shift 2"],
    [R`Gas-phase kinetics with total pressure`, "2026 · 2 Apr · Shift 2; 2026 · 5 Apr · Shift 1"],
    [R`t100% vs t½ for zero and first order; graphs`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 2"]
  ],
  combo: [R`Kinetics + equilibrium (catalyst, K = kf/kb)`, R`Kinetics + thermodynamics (energy profiles, ΔH = Eaf − Eab)`],
  trap: [R`Order is experimental; molecularity is theoretical.`, R`Zero-order t½ ∝ [R]0; second-order t½ ∝ 1/[R]0.`],
  mist: [R`Using °C in the Arrhenius equation.`, R`Forgetting stoichiometric factors when converting partial pressures.`]
}
});
})();
