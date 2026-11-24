(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
NB.ch({
n: "12-2", short: "Electrochemistry",
intro: R`<b>Big idea:</b> a redox reaction split into two half-cells pushes electrons through a wire. Cell voltage tells the driving force (ΔG = −nFE); concentrations change it (Nernst).`,
sec: [
["Formula Sheet", [
  KEY([R`$E^\circ_{cell} = E^\circ_{cathode} - E^\circ_{anode}$ (both reduction potentials)`, R`Nernst (298 K): $E = E^\circ - \frac{0.059}{n}\log Q$ · equilibrium: $\log K = \frac{nE^\circ}{0.059}$`, R`$\Delta G^\circ = -nFE^\circ$; $F = 96487 \approx 96500$ C mol⁻¹`, R`$\kappa = G \times \frac{l}{A}$ · $\Lambda_m = \frac{\kappa \times 1000}{M}$ · $\alpha = \frac{\Lambda_m}{\Lambda_m^\circ}$`, R`Faraday: $m = \frac{M\,It}{nF}$`], "Formula sheet"),
  STEPS("Nernst equation problems", [["Write the cell reaction", "anode oxidation + cathode reduction", "find n"], ["E°cell", R`$E^\circ_c - E^\circ_a$`, ""], ["Q", "products over reactants (ions only; solids = 1)", ""], ["Plug in", R`$E = E^\circ - \frac{0.059}{n}\log Q$`, "solve for the unknown"]])
]],
["Galvanic Cells", [
  P(R`<b>Daniell cell</b>: Zn | Zn²⁺ || Cu²⁺ | Cu, E° = 1.10 V. <b>Anode</b> (oxidation, −) on the left; <b>cathode</b> (reduction, +) on the right; electrons flow anode → cathode in the outer circuit. The salt bridge (KCl/KNO3 in agar) completes the circuit and keeps both solutions neutral.`, null, S(s.rect(15, 60, 70, 60, 'class="thin"') + s.rect(155, 60, 70, 60, 'class="thin"') + s.rect(42, 40, 8, 65, 'class="fl"') + s.rect(190, 40, 8, 65, 'class="fl2"') + s.path("M70 70 L70 30 L170 30 L170 70", 'style="fill:none"') + s.line(46, 40, 46, 15) + s.line(194, 40, 194, 15) + s.line(46, 15, 194, 15) + s.circ(120, 15, 9, 'class="fl"') + s.t(116, 19, "V", 11) + s.arr(70, 8, 105, 8, 'class="red"') + s.t(60, 5, "e⁻", 11, 'class="red"') + s.t(20, 135, "Zn anode (−)", 11) + s.t(150, 135, "Cu cathode (+)", 11) + s.t(100, 50, "salt bridge", 10), 240, 140, "Daniell cell")),
  P(R`$E^\circ_{cell} = E^\circ_{cathode} - E^\circ_{anode}$ (both as <b>reduction</b> potentials). Positive $E^\circ_{cell}$ → spontaneous. SHE: Pt(s) | H2(g, 1 bar) | H⁺(aq, 1 M), E° = 0.`),
  P(R`<b>Electrochemical series</b>: higher reduction potential → stronger oxidant (F2 +2.87 V); lower → stronger reductant (Li −3.05 V). Selected: Cu²⁺/Cu +0.34, H⁺/H2 0, Fe²⁺/Fe −0.44, Zn²⁺/Zn −0.76, Al³⁺/Al −1.66, Na⁺/Na −2.71.`),
  J(R`Cell from Fe(OH)2/Fe (−0.88 V) and AgBr/Ag (+0.07 V): AgBr/Ag is the cathode, Fe(OH)2/Fe the anode; $E^\circ_{cell} = 0.07 - (-0.88) = 0.95$ V.`, "2026 · 2 Apr · Shift 1"),
  J(R`$E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+})$ from $E^\circ(\text{Fe}^{2+}/\text{Fe}) = X$ and $E^\circ(\text{Fe}^{3+}/\text{Fe}) = Y$: add ΔG° values, not potentials: $-1\cdot F E = -3FY + 2FX$, so $E = 3Y - 2X$.`, "2026 · 8 Apr · Shift 2")
]],
["Nernst Equation & Thermodynamics", [
  P(R`For $M^{n+} + ne^- \to M$ and for a cell reaction (Q = reaction quotient):`, [R`E = E^\circ - \frac{2.303RT}{nF}\log Q = E^\circ - \frac{0.059}{n}\log Q\ \ (298\ \text{K})`, R`E_{M^{n+}/M} = E^\circ - \frac{0.059}{n}\log\frac{1}{[M^{n+}]}`]),
  P(R`At equilibrium $E_{cell} = 0$ and $Q = K_c$. Relations with ΔG:`, [R`\Delta G^\circ = -nFE^\circ_{cell} = -RT\ln K_c,\qquad \log K_c = \frac{nE^\circ}{0.059}`]),
  J(R`Zn | Zn²⁺(1 M) || Ag⁺(x M) | Ag with E = 1.60 V: $1.60 = 1.56 - \frac{0.059}{2}\log\frac{1}{[Ag^+]^2}$, so $\log x = 0.04/0.059$.`, "2026 · 5 Apr · Shift 2"),
  J(R`Nernst with Q = 10⁻² and given E, E° values: solve $0.2057 = E^\circ - \frac{0.059}{n}\log Q$ for the unknown n (charge of the p-block ion).`, "2026 · 4 Apr · Shift 2"),
  J(R`Fuel cell CH3OH/O2: E° = 1.23 − 0.02 = 1.21 V, n = 6; work = 0.8 × nFE°; this work compresses a gas at 1 kPa: $\Delta V = w/P_{ext}$.`, "2026 · 2 Apr · Shift 2"),
  J(R`General cell statements: electrons do not appear in the overall reaction; reversible electrical work = charge × potential difference (not their ratio); ΔG = −nFE.`, "2026 · 6 Apr · Shift 2")
]],
["Conductance of Electrolytic Solutions", [
  P(R`$R = \rho\frac{l}{A}$; conductance $G = 1/R$ (S); <b>conductivity</b> $\kappa = 1/\rho = G\cdot\frac{l}{A}$ (S m⁻¹ or S cm⁻¹); $\frac{l}{A} = G^*$ = cell constant. <b>Molar conductivity</b>:`, R`\Lambda_m = \frac{\kappa}{c},\qquad \Lambda_m(\text{S cm}^2\text{mol}^{-1}) = \frac{\kappa(\text{S cm}^{-1}) \times 1000}{M}`),
  P(R`On dilution: κ <b>decreases</b> (fewer ions per volume), Λm <b>increases</b>. Strong electrolytes: Λm rises slowly, linear in √c (Debye–Hückel–Onsager): $\Lambda_m = \Lambda_m^\circ - A\sqrt c$. Weak electrolytes: Λm rises steeply at low c (α increases); $\Lambda_m^\circ$ cannot be found by extrapolation.`, null, G({ xl: "√c", yl: "Λm", xr: [0, 1], yr: [0, 1.1], fns: [x => 1 - 0.35 * x, x => 0.95 / (1 + 25 * x * x) + 0.03], lab: ["strong (KCl)", "weak (CH3COOH)"], t: "Λm vs √c" })),
  P(R`<b>Kohlrausch's law</b>: $\Lambda_m^\circ$ of an electrolyte = sum of the limiting ionic conductivities: $\Lambda_m^\circ = \nu_+\lambda_+^\circ + \nu_-\lambda_-^\circ$. Applications: $\Lambda_m^\circ$ of weak electrolytes, degree of dissociation, $K_a$:`, [R`\Lambda_m^\circ(\text{CH}_3\text{COOH}) = \Lambda_m^\circ(\text{CH}_3\text{COONa}) + \Lambda_m^\circ(\text{HCl}) - \Lambda_m^\circ(\text{NaCl})`, R`\alpha = \frac{\Lambda_m}{\Lambda_m^\circ},\qquad K_a = \frac{c\alpha^2}{1 - \alpha}`])
]],
["Electrolytic Cells & Faraday's Laws", [
  P(R`<b>First law</b>: mass deposited ∝ charge; <b>second law</b>: for the same charge, masses are in the ratio of equivalent masses. $F = 96487 \approx 96500$ C mol⁻¹ (charge of 1 mol e⁻).`, R`m = \frac{M}{nF}\,It = Z\,It,\qquad \frac{m_1}{m_2} = \frac{E_1}{E_2}`),
  T(["Electrolyte (electrodes)", "Cathode", "Anode"], [["molten NaCl", "Na", "Cl2"], ["aq. NaCl (inert)", "H2 (water reduced)", "Cl2 (overpotential of O2)"], ["dil. H2SO4", "H2", "O2"], ["conc. H2SO4", "H2", "S2O8²⁻ (peroxodisulphate)"], ["aq. CuSO4 (Pt)", "Cu", "O2"], ["aq. CuSO4 (Cu)", "Cu deposits", "Cu dissolves"], ["aq. AgNO3 (Ag)", "Ag deposits", "Ag dissolves"]]),
  P(R`Na, Mg from electrolysis of fused chlorides; Al from Al2O3 in cryolite. With several possible reactions, the one with the higher $E^\circ$ occurs at the cathode, but <b>overpotential</b> can change the result (Cl2 rather than O2 from aqueous NaCl).`)
]],
["Batteries, Fuel Cells & Corrosion", [
  T(["Cell", "Anode / cathode / electrolyte", "Notes"], [["Dry (Leclanché) cell", "Zn container / graphite + MnO2 / NH4Cl + ZnCl2 paste", "≈ 1.5 V; primary"], ["Mercury cell", "Zn–Hg / HgO + C / KOH + ZnO paste", "≈ 1.35 V, constant (no ion in overall reaction); hearing aids"], ["Lead storage", "Pb / PbO2 / 38% H2SO4", "secondary; discharge → PbSO4 on both; automobiles, inverters"], ["Ni–Cd", "Cd / Ni(OH)3", "secondary, longer life"], ["H2–O2 fuel cell", "porous carbon + Pt/Pd, conc. NaOH", "2H2 + O2 → 2H2O; ~70% efficiency; Apollo programme"]]),
  P(R`Lead storage discharge: anode $Pb + SO_4^{2-} \to PbSO_4 + 2e^-$; cathode $PbO_2 + SO_4^{2-} + 4H^+ + 2e^- \to PbSO_4 + 2H_2O$. Charging reverses both.`),
  P(R`<b>Corrosion (rusting of iron)</b> is electrochemical: anode $2Fe \to 2Fe^{2+} + 4e^-$; cathode $O_2 + 4H^+ + 4e^- \to 2H_2O$; Fe²⁺ further oxidised to rust $Fe_2O_3 \cdot xH_2O$. Prevention: paint, coating, galvanising (Zn), <b>sacrificial</b> electrodes (Mg, Zn), anti-rust solutions.`, null, S(s.rect(10, 80, 240, 30, 'class="fl2"') + s.t(20, 100, "iron", 12) + s.path("M60 80 Q100 40 140 80", 'class="blue"') + s.t(80, 60, "water drop", 11) + s.t(65, 76, "Fe → Fe²⁺", 10, 'class="red"') + s.t(150, 72, "O₂ + 4H⁺ + 4e⁻ → 2H₂O", 10) + s.arr(100, 105, 160, 105, 'class="red"') + s.t(110, 125, "e⁻ through metal", 10), 260, 130, "Electrochemical rusting"))
]]
],
pyq: {
  pat: [
    [R`E°cell from two half-cells; identifying anode/cathode`, "2026 · 2 Apr · Shift 1"],
    [R`Nernst equation to find a concentration or n`, "2026 · 4 Apr · Shift 2; 2026 · 5 Apr · Shift 2"],
    [R`Combining electrode potentials through ΔG°`, "2026 · 8 Apr · Shift 2"],
    [R`Fuel cell efficiency and work`, "2026 · 2 Apr · Shift 2"],
    [R`Conceptual statements on galvanic cells`, "2026 · 6 Apr · Shift 2"]
  ],
  combo: [R`Electrochemistry + thermodynamics (ΔG = −nFE, work)`, R`Electrochemistry + equilibrium (K from E°)`, R`Electrochemistry + d-block (E° trends of 3d metals)`],
  trap: [R`E° is intensive: never multiply E° by stoichiometric coefficients; add ΔG° instead.`, R`κ falls but Λm rises on dilution.`],
  mist: [R`Using oxidation potentials in $E_{cathode} - E_{anode}$.`, R`Forgetting n in the Nernst term.`]
}
});
})();
