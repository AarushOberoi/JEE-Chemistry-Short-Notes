(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
const e = Math.exp;
NB.ch({
n: "11-2", short: "Structure of Atom",
intro: R`<b>Big idea:</b> electrons have fixed energy levels (Bohr) and wave nature (de Broglie); their 'address' is four quantum numbers. Numericals come from a small formula set.`,
sec: [
["Formula Sheet", [
  T(["Quantity", "Formula (H-like, Z)", "Varies as"], [["radius", R`$r_n = 52.9\,\frac{n^2}{Z}$ pm`, R`$n^2/Z$`], ["energy", R`$E_n = -13.6\,\frac{Z^2}{n^2}$ eV $= -2.18 \times 10^{-18}\frac{Z^2}{n^2}$ J`, R`$Z^2/n^2$`], ["velocity", R`$v_n = 2.18 \times 10^6\,\frac{Z}{n}$ m/s`, R`$Z/n$`], ["wave number", R`$\bar\nu = R_HZ^2\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$, $R_H = 109677$ cm⁻¹`, ""], ["photon", R`$E = h\nu = \frac{hc}{\lambda}$; $E(\text{eV}) = \frac{1240}{\lambda(\text{nm})}$`, ""], ["photoelectric", R`$h\nu = W_0 + KE$`, ""], ["de Broglie", R`$\lambda = \frac{h}{mv} = \frac{h}{\sqrt{2m\,KE}}$`, ""], ["uncertainty", R`$\Delta x\,\Delta p \ge \frac{h}{4\pi}$`, ""], ["nodes", R`radial $n - l - 1$; angular $l$; total $n - 1$`, ""], ["magnetic moment", R`$\mu = \sqrt{n(n+2)}$ BM`, ""]]),
  KEY([R`KE $= -E$, PE $= 2E$ in a Bohr orbit.`, R`Lines from level $n$ to ground: $\frac{n(n-1)}{2}$. First line of a series: $n_2 = n_1 + 1$; series limit: $n_2 = \infty$.`, R`Exceptions in configuration: Cr $3d^54s^1$, Cu $3d^{10}4s^1$.`], "Shortcuts")
]],
["Sub-atomic Particles & Atomic Models", [
  T(["Particle", "Charge (C)", "Mass (kg)", "Discovered by"], [["electron", R`$-1.602 \times 10^{-19}$`, R`$9.109 \times 10^{-31}$`, "J.J. Thomson (cathode rays)"], ["proton", R`$+1.602 \times 10^{-19}$`, R`$1.672 \times 10^{-27}$`, "Goldstein (canal rays)"], ["neutron", "0", R`$1.675 \times 10^{-27}$`, "Chadwick (1932)"]]),
  P(R`<b>Thomson</b>: $e/m_e = 1.758820 \times 10^{11}$ C kg⁻¹. <b>Millikan</b> oil drop gave $e$. Thomson's "plum pudding" model: positive sphere with embedded electrons.`),
  P(R`<b>Rutherford α-scattering</b> (gold foil): most α-particles pass straight through (atom mostly empty), a few deflect, very few (≈1 in 20,000) bounce back → small, dense, positive nucleus.`, null, S(s.circ(140, 70, 6, 'class="redf"') + [20, 45, 70, 95, 120].map(y => s.arr(10, y, 60, y, 'class="thin"')).join("") + s.arr(60, 20, 230, 15, 'class="thin"') + s.arr(60, 45, 230, 42) + s.path("M60 70 L128 70 Q132 70 132 66 L80 30", 'class="red"') + s.arr(60, 95, 230, 105) + s.arr(60, 120, 230, 128, 'class="thin"') + s.t(150, 92, "nucleus", 12), 240, 140, "Rutherford scattering")),
  P(R`Nuclear radius $R = R_0A^{1/3}$ ($R_0 \approx 1.33 \times 10^{-13}$ cm). Nucleus ≈ $10^{-13}$ cm vs atom ≈ $10^{-8}$ cm. <b>Drawback</b>: an accelerating electron should radiate energy and spiral into the nucleus.`),
  L([R`<b>Isotopes</b>: same Z, different A (¹H, ²H, ³H). <b>Isobars</b>: same A (¹⁴C, ¹⁴N). <b>Isotones</b>: same number of neutrons (A − Z).`, R`<b>Isoelectronic</b>: same number of electrons (N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺, Al³⁺).`, R`Neutrons $= A - Z$; for an ion, electrons $= Z - \text{charge}$.`]),
  J(R`Anion A⁻ with 45 neutrons and 36 electrons: Z = 35 (Br), A = 80; Br is a liquid at room temperature, group 17.`, "2026 · 4 Apr · Shift 1")
]],
["Electromagnetic Radiation & Planck's Theory", [
  P(R`$c = \nu\lambda$, wave number $\bar\nu = \frac1\lambda$. Order of wavelength: γ-rays < X-rays < UV < visible (400–750 nm) < IR < microwave < radio.`, null, S(["γ", "X", "UV", "Vis", "IR", "μw", "radio"].map((l, i) => s.rect(5 + i * 44, 20, 44, 30, i === 3 ? 'class="fl"' : 'class="thin"') + s.t(14 + i * 44, 40, l, 13)).join("") + s.arr(10, 70, 300, 70) + s.t(110, 88, "λ increases, ν and E decrease", 12), 315, 95, "Electromagnetic spectrum")),
  P(R`<b>Planck's quantum theory</b>: energy is emitted or absorbed in packets (quanta/photons):`, R`E = h\nu = \frac{hc}{\lambda},\qquad h = 6.626 \times 10^{-34}\ \text{J s},\qquad E(\text{eV}) \approx \frac{1240}{\lambda(\text{nm})}`),
  P(R`<b>Black-body radiation</b>: as temperature rises the peak shifts to shorter wavelength (red → white → blue glow).`),
  P(R`<b>Photoelectric effect</b>: electrons are ejected only if $\nu \ge \nu_0$ (threshold); their KE depends on ν, not on intensity; the number of electrons depends on intensity; no time lag.`, R`h\nu = h\nu_0 + \tfrac12m_ev^2 = W_0 + KE,\qquad KE = eV_0`, G({ xl: "ν", yl: "KE", xr: [0, 6], yr: [-1.5, 4], fns: [x => x >= 2 ? x - 2 : NaN, x => x < 2 ? x - 2 : NaN], pts: [[2, 0, "ν₀"]], lab: ["slope = h", "(no emission)"], t: "KE = hν − hν₀" })),
  J(R`Na with work function 2.3 eV and KE of electrons given in J: convert to the same unit, then $\lambda = \frac{hc}{W_0 + KE}$.`, "2026 · 2 Apr · Shift 2"),
  W(R`Increasing intensity increases the number of photoelectrons, <b>not</b> their kinetic energy.`)
]],
["Bohr Model & Hydrogen Spectrum", [
  P(R`<b>Postulates</b>: electrons move in fixed circular orbits (stationary states) without radiating; angular momentum is quantised, $mvr = n\frac{h}{2\pi}$; energy is absorbed or emitted only when the electron jumps between orbits, $\Delta E = h\nu$.`),
  P(R`For H-like species (one electron, atomic number Z):`, [R`r_n = 52.9\,\frac{n^2}{Z}\ \text{pm},\qquad v_n = 2.18 \times 10^6\,\frac{Z}{n}\ \text{m s}^{-1}`, R`E_n = -2.18 \times 10^{-18}\,\frac{Z^2}{n^2}\ \text{J} = -13.6\,\frac{Z^2}{n^2}\ \text{eV}`]),
  P(R`KE $= -E_n$, PE $= 2E_n$. Ionisation energy from the ground state $= 13.6Z^2$ eV. Energy levels get closer as $n$ increases.`, null, S([1, 2, 3, 4, 5].map(n => s.line(30, 135 - 120 * (1 - 1 / (n * n)), 150, 135 - 120 * (1 - 1 / (n * n))) + s.t(155, 139 - 120 * (1 - 1 / (n * n)), "n = " + n, 11)).join("") + s.line(30, 15, 150, 15, 'class="thin" stroke-dasharray="4 3"') + s.t(155, 18, "∞ (E = 0)", 11) + s.arr(60, 15, 60, 133, 'class="red"') + s.t(64, 80, "13.6 eV", 11, 'class="red"'), 220, 145, "Hydrogen energy levels")),
  J(R`Li²⁺ → Li³⁺: $IE = 2.18 \times 10^{-18} \times 3^2 = 1.96 \times 10^{-17}$ J per atom.`, "2026 · 2 Apr · Shift 1"),
  J(R`Identical Bohr radii: compare $n^2/Z$. H (n = 1): 1; He⁺ (n = 1): ½; He⁺ (n = 2): 2; Li²⁺ (n = 1): ⅓; Be³⁺ (n = 2): 1. So H (1st orbit) and Be³⁺ (2nd orbit) match. Likewise $r = 70.53$ pm $= 52.9\,n^2/Z$ gives $n^2/Z = \frac43$ (Li²⁺, n = 2).`, "2026 · 4 Apr · Shift 2; 2026 · 6 Apr · Shift 2"),
  P(R`<b>Rydberg formula</b> ($R_H = 109677$ cm⁻¹):`, R`\bar\nu = \frac1\lambda = R_HZ^2\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)`),
  T(["Series", "n₁", "Region"], [["Lyman", "1", "UV"], ["Balmer", "2", "visible"], ["Paschen", "3", "IR"], ["Brackett", "4", "IR"], ["Pfund", "5", "IR"]]),
  P(R`First line of a series: $n_2 = n_1 + 1$ (longest λ, least energy). Series limit: $n_2 = \infty$. Number of lines from level $n$ down to the ground state (many atoms) $= \frac{n(n - 1)}{2}$; from $n_2$ to $n_1$: $\frac{(n_2 - n_1)(n_2 - n_1 + 1)}{2}$.`, null, S([1, 2, 3, 4].map(n => s.line(10, 140 - 115 * (1 - 1 / (n * n)), 230, 140 - 115 * (1 - 1 / (n * n)), 'class="thin"')).join("") + [20, 32, 44].map((x, i) => s.arr(x, 140 - 115 * (1 - 1 / ((i + 2) ** 2)), x, 138, 'class="red"')).join("") + [80, 92].map((x, i) => s.arr(x, 140 - 115 * (1 - 1 / ((i + 3) ** 2)), x, 140 - 115 * 0.75, 'class="blue"')).join("") + s.arr(150, 140 - 115 * (1 - 1 / 16), 150, 140 - 115 * (1 - 1 / 9)) + s.t(18, 132, "Lyman", 11) + s.t(78, 125, "Balmer", 11) + s.t(156, 40, "Paschen", 11), 240, 145, "Spectral series")),
  J(R`Ratio of wave numbers of the first Balmer line ($\frac14 - \frac19 = \frac{5}{36}$) and first Brackett line ($\frac1{16} - \frac1{25} = \frac{9}{400}$).`, "2026 · 4 Apr · Shift 1"),
  P(R`<b>Limitations</b>: fails for multi-electron atoms, cannot explain fine structure, Zeeman (magnetic) and Stark (electric) effects, or shapes of molecules; contradicts the uncertainty principle.`)
]],
["Dual Nature & Uncertainty", [
  P(R`<b>de Broglie</b>: every moving particle has a wavelength (confirmed by electron diffraction, used in the electron microscope):`, [R`\lambda = \frac{h}{mv} = \frac{h}{p} = \frac{h}{\sqrt{2m\,KE}}`, R`\lambda_e \approx \sqrt{\frac{150}{V}}\ \text{Å}\quad(\text{electron accelerated through } V \text{ volts})`]),
  P(R`Bohr's condition from de Broglie: an orbit holds a whole number of waves, $2\pi r = n\lambda$.`),
  P(R`<b>Heisenberg uncertainty principle</b>: position and momentum cannot both be known exactly. It rules out definite orbits for electrons; significant only for microscopic particles.`, R`\Delta x\cdot\Delta p \ge \frac{h}{4\pi},\qquad \Delta x\cdot m\Delta v \ge \frac{h}{4\pi}`)
]],
["Quantum Mechanical Model & Quantum Numbers", [
  P(R`Schrödinger equation $\hat H\psi = E\psi$. $\psi$ = wave function (no physical meaning); $|\psi|^2$ = probability density. An <b>orbital</b> is a one-electron wave function.`),
  T(["Quantum number", "Values", "Tells"], [["principal n", "1, 2, 3, …", "shell, size and (for H) energy"], ["azimuthal l", "0 … (n − 1)", "subshell s, p, d, f; shape; orbital angular momentum $\\sqrt{l(l+1)}\\,\\frac{h}{2\\pi}$"], ["magnetic mₗ", "−l … +l (2l + 1 values)", "orientation"], ["spin mₛ", "+½, −½", "spin of the electron"]]),
  P(R`Shell $n$ has $n^2$ orbitals and $2n^2$ electrons; subshell $l$ has $2l + 1$ orbitals.`),
  P(R`<b>Nodes</b>: radial $= n - l - 1$, angular $= l$, total $= n - 1$.`),
  GR("Radial probability 4πr²ψ² (H atom)", [
    { xl: "r", yl: "", xr: [0, 8], yr: [0, 1.1], fns: [r => 4 * r * r * e(-2 * r) / 0.55], t: "1s: max at a₀, 0 nodes" },
    { xl: "r", yl: "", xr: [0, 16], yr: [0, 0.6], fns: [r => r * r * (2 - r) ** 2 * e(-r) / 8 / 1.2], t: "2s: 1 radial node" },
    { xl: "r", yl: "", xr: [0, 16], yr: [0, 0.6], fns: [r => r ** 4 * e(-r) / 24 / 1.0], t: "2p: 0 radial nodes" }]),
  P(R`<b>Shapes</b>: s spherical; p dumbbell (one nodal plane); d double-dumbbell (two nodal planes), except $d_{z^2}$.`, null, S(s.circ(30, 60, 20, 'class="fl"') + s.t(22, 105, "s", 13) + s.porb(95, 60, 34, 0) + s.porb(95, 60, 0.1, 90) + s.t(85, 105, "pₓ", 13) + s.dorb(180, 60, 30, 45) + s.t(165, 105, "dₓᵧ", 13) + s.lobe(255, 60, 30, 90) + s.lobe(255, 60, 30, 270) + s.ell(255, 60, 15, 5, 'class="fl2"') + s.t(245, 105, "d_z²", 13), 290, 115, "Orbital shapes")),
  J(R`(n + l) ordering of given orbitals; "2p is smaller than 3p"; "E(2s, H) ≠ E(2s, Li)" (energies depend on Z); radial nodes of 5f, 6s, 4d, 5p, 5d: $n - l - 1$.`, "2026 · 5 Apr · Shift 1; 2026 · 5 Apr · Shift 2")
]],
["Filling of Orbitals", [
  P(R`<b>Aufbau</b>: fill in order of increasing $(n + l)$; for equal $(n + l)$ the lower $n$ fills first. In H (one electron) energy depends on $n$ only.`, null, S(["1s", "2s 2p", "3s 3p 3d", "4s 4p 4d 4f", "5s 5p 5d 5f", "6s 6p 6d", "7s 7p"].map((r, i) => s.t(10, 18 + i * 17, r, 12)).join("") + s.path("M175 10 L10 122", 'class="red"') + s.t(150, 140, "1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s …", 11), 330, 148, "Diagonal (n + l) order")),
  P(R`<b>Pauli exclusion</b>: no two electrons have all four quantum numbers the same (max 2 per orbital, opposite spins). <b>Hund's rule</b>: in degenerate orbitals pairing starts only after each has one electron with parallel spin.`),
  P(R`<b>Exceptions</b> (extra stability of half-filled and full subshells: symmetry + exchange energy): Cr $[Ar]3d^54s^1$, Cu $[Ar]3d^{10}4s^1$.`),
  J(R`19th electron of Cr goes into 4s (Aufbau order): $n = 4, l = 0, m = 0, s = +\frac12$.`, "2026 · 4 Apr · Shift 1"),
  P(R`Spin-only magnetic moment $\mu = \sqrt{n(n + 2)}$ BM ($n$ = unpaired electrons). Paramagnetic: unpaired electrons; diamagnetic: all paired.`)
]]
],
pyq: {
  pat: [
    [R`Bohr formulas for H-like ions: energy, radius, IE`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 2; 2026 · 6 Apr · Shift 2"],
    [R`Ratios of wave numbers of spectral lines`, "2026 · 4 Apr · Shift 1"],
    [R`Photoelectric equation with work function in eV`, "2026 · 2 Apr · Shift 2"],
    [R`Quantum numbers, (n + l) order, nodes, configuration exceptions`, "2026 · 4 Apr · Shift 1; 2026 · 5 Apr · Shift 1; 2026 · 5 Apr · Shift 2"],
    [R`Identify an element/ion from electrons and neutrons`, "2026 · 4 Apr · Shift 1"]
  ],
  combo: [R`Atomic structure + periodicity (configurations, IE)`, R`Atomic structure + d-block (magnetic moments)`],
  trap: [R`Energy of orbitals depends only on n for H, on n and l for multi-electron atoms.`, R`$E_n \propto Z^2/n^2$, $r_n \propto n^2/Z$, $v_n \propto Z/n$.`],
  mist: [R`Using $n_2$ as the lower level in the Rydberg formula.`, R`Forgetting to convert eV ↔ J (1 eV = 1.602 × 10⁻¹⁹ J).`]
}
});
})();
