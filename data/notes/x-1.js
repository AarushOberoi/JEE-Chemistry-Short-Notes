(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
NB.ch({
n: "x-1", short: "p-Block Elements (Groups 13–18)",
intro: R`<b>Big idea:</b> the first element of each group is small, very electronegative and has no d orbitals, so it behaves differently; heavier elements prefer lower oxidation states (inert pair effect).`,
sec: [
["Trends at a Glance", [
  T(["Group", "Down the group", "Key exception / fact"], [["13", "+3 → +1 more stable (Tl⁺)", "Ga < Al in radius; IE B > Tl > Ga > Al > In"], ["14", "+4 → +2 more stable (Pb²⁺)", "IE C > Si > Ge > Pb > Sn; CO2 gas vs SiO2 solid"], ["15", "hydrides: basicity, stability, bond angle ↓; reducing power ↑", "N–N weaker than P–P; N max covalency 4"], ["16", "hydride acidity H2O < H2S < H2Se < H2Te", "O max covalency 4; OF2 has O +2"], ["17", "oxidising power F2 > Cl2 > Br2 > I2", "ΔegH Cl > F; bond energy Cl2 > Br2 > F2 > I2"], ["18", "reactivity ↑ (Xe forms compounds)", "positive electron gain enthalpy"]])
]],
["General Trends", [
  P(R`Outer configuration $ns^2np^{1-6}$. Group oxidation state = group number − 10; lower states (two less) become <b>more stable down the group</b> because the ns² pair is reluctant to bond (<b>inert pair effect</b>): Tl⁺ > Tl³⁺, Pb²⁺ > Pb⁴⁺, Bi³⁺ > Bi⁵⁺.`, null, G({ xl: "period", yl: "stability", xr: [1.5, 6.5], yr: [0, 1.1], fns: [x => 1 - 0.18 * (x - 2), x => 0.1 + 0.17 * (x - 2)], lab: ["group oxidation state", "(group − 2) state"], t: "Inert pair effect down a group" })),
  J(R`Group-13 element with the electronegativity of Ge is Tl: Tl⁺ is more stable than Tl³⁺, so Tl³⁺ is a strong <b>oxidising</b> agent and $E^\circ(\text{Tl}^{3+}/\text{Tl})$ is positive.`, "2026 · 4 Apr · Shift 2"),
  P(R`<b>Anomalous first member</b> (B, C, N, O, F): small size, high electronegativity, no d orbitals (max covalency 4), strong pπ–pπ multiple bonds (C=C, C≡C, N≡N, O=O). Heavier members use d orbitals (dπ–pπ bonds, expanded octets).`),
  J(R`Nitrogen: forms pπ–pπ (not dπ–pπ) multiple bonds; N–N single bond is <b>weaker</b> than P–P (lone-pair repulsion at short bond length); max covalency 4; oxidation states +1 to +4 disproportionate in acid.`, "2026 · 5 Apr · Shift 1"),
  J(R`Oxygen: covalency usually 2, at most 4 (no d orbitals); O.S. is +2 in OF2 and −2 in SO2. Anomalous behaviour due to small size and high electronegativity.`, "2026 · 4 Apr · Shift 1")
]],
["Group 13 (B, Al, Ga, In, Tl)", [
  P(R`IE: B > Tl > Ga > Al > In (poor d/f shielding). Radius: Al > Ga. B is a non-metal; others metals. BX3 are <b>Lewis acids</b> (electron-deficient): BF3 < BCl3 < BBr3 (back-bonding weakest for BBr3).`),
  P(R`Al is amphoteric: dissolves in acids and in NaOH: $2\text{Al} + 2\text{NaOH} + 6\text{H}_2\text{O} \to 2\text{Na}^+[\text{Al(OH)}_4]^- + 3\text{H}_2$.`),
  J(R`Al + NaOH: NCERT writes the product as $\text{Na}^+[\text{Al(OH)}_4]^-$. Some books write the hydrated form $[\text{Al(OH)}_6]^{3-}$; follow the NCERT form unless the options force otherwise.`, "2026 · 5 Apr · Shift 2"),
  P(R`<b>Borax</b> Na2[B4O5(OH)4]·8H2O; on heating gives NaBO2 + B2O3 (glassy); <b>borax bead test</b> gives coloured metaborates with transition-metal ions (Co blue, Cu blue-green, Fe green/brown, Cr green). Diborane B2H6 has two 3-centre-2-electron (banana) B–H–B bonds.`, null, S(s.t(50, 60, "B", 16) + s.t(150, 60, "B", 16) + s.t(100, 25, "H", 14) + s.t(100, 100, "H", 14) + s.path("M62 52 Q100 25 145 52", 'class="red"') + s.path("M62 62 Q100 95 145 62", 'class="red"') + s.bond(48, 50, 20, 30) + s.bond(48, 64, 20, 85) + s.bond(165, 50, 190, 30) + s.bond(165, 64, 190, 85) + s.t(55, 125, "2 bridging 3c–2e bonds", 12), 210, 130, "Diborane"))
]],
["Group 14 (C, Si, Ge, Sn, Pb)", [
  P(R`Catenation: C ≫ Si > Ge ≈ Sn; Pb none. IE order C > Si > Ge > Pb > Sn. CO2 is a linear gas (pπ–pπ), SiO2 is a covalent network solid. CO is neutral, toxic (binds haemoglobin).`),
  J(R`First IE in group 14: Si > Ge > Pb > Sn, so "Si < Ge < Pb < Sn" is false. Second IE in group 13: B > Ga > Al (Ga > Al because of poor 3d shielding).`, "2026 · 2 Apr · Shift 2"),
  P(R`Oxides: CO2, SiO2, GeO2 acidic; SnO2, PbO2 amphoteric; SnO, PbO amphoteric. PbO2 is a strong oxidant (Pb⁴⁺ → Pb²⁺). Silicones (R2SiO)n are water-repellent polymers; silicates have SiO4⁴⁻ tetrahedra.`)
]],
["Group 15 (N, P, As, Sb, Bi)", [
  P(R`Hydrides EH3: basicity, thermal stability and bond angle decrease from NH3 to BiH3; reducing character increases. Boiling point: PH3 < AsH3 < NH3 < SbH3 < BiH3 (NH3 high due to H-bonding). Bond angles: NH3 107.8°, PH3 93.6°, AsH3 91.8°, SbH3 91.3°.`),
  J(R`Group-15 hydrides from NH3 to BiH3: reducing nature ↑, lone-pair donation ↓, stability ↓, H–E–H angle ↓.`, "2026 · 8 Apr · Shift 2"),
  P(R`<b>Brown-ring test</b> for nitrate: NO (from NO3⁻ + Fe²⁺ + conc. H2SO4) + FeSO4 → $[\text{Fe(H}_2\text{O)}_5(\text{NO})]^{2+}$ (brown ring). Oxides of N: N2O, NO neutral; N2O3, N2O4/NO2, N2O5 acidic.`),
  J(R`Gas X + freshly prepared FeSO4 gives a brown ring: X = NO, Y = [Fe(H2O)5(NO)]SO4 (Fe in +1 with NO⁺).`, "2026 · 6 Apr · Shift 2"),
  P(R`White P (P4, reactive, glows) vs red P (polymeric, less reactive). Oxoacids: H3PO2 (monobasic, strong reducer), H3PO3 (dibasic, reducer), H3PO4 (tribasic) — basicity = number of P–OH.`)
]],
["Group 16 & 17", [
  P(R`Group 16: O2 paramagnetic; O3 bent, oxidant. Hydrides: acidity H2O < H2S < H2Se < H2Te (weaker H–E bond down the group); thermal stability falls down the group; b.p. of H2O is highest (H-bonding). SO2 bent, reducing and oxidising.`),
  P(R`Group 17: <b>oxidising power</b> F2 > Cl2 > Br2 > I2. Electron gain enthalpy Cl > F > Br > I. Bond energy Cl2 > Br2 > F2 > I2 (F2 low: lone-pair repulsion). Acid strength HF < HCl < HBr < HI.`),
  J(R`Layer test: Cl2 water oxidises Br⁻ → Br2 (orange/brown in CHCl3 layer) and I⁻ → I2 (violet layer) — a displacement redox reaction based on F2 > Cl2 > Br2 > I2.`, "2026 · 2 Apr · Shift 1"),
  P(R`Interhalogens (AX, AX3, AX5, AX7) and xenon compounds follow VSEPR: ClF3 T-shape, BrF5 square pyramidal, IF7 pentagonal bipyramidal, XeF2 linear, XeF4 square planar, XeF6 distorted octahedral, XeO3 pyramidal.`)
]],
["Group 18", [
  P(R`Noble gases: full $ns^2np^6$, very high IE, positive electron gain enthalpy, monatomic. Xe forms compounds with F and O (Bartlett: O2⁺PtF6⁻ led to Xe⁺PtF6⁻). XeF2, XeF4, XeF6 from Xe + F2 under controlled conditions.`)
]]
],
pyq: {
  pat: [
    [R`Trends in hydrides, oxides, IE within p-block groups`, "2026 · 2 Apr · Shift 2; 2026 · 5 Apr · Shift 2; 2026 · 8 Apr · Shift 2"],
    [R`Inert pair effect (Tl, Pb) and oxidising/reducing nature`, "2026 · 4 Apr · Shift 2"],
    [R`Anomalous N and O (covalency, bonds, oxidation states)`, "2026 · 4 Apr · Shift 1; 2026 · 5 Apr · Shift 1"],
    [R`Halogen oxidising power and the layer test`, "2026 · 2 Apr · Shift 1"]
  ],
  combo: [R`p-Block + bonding (VSEPR shapes of interhalogens and Xe compounds)`, R`p-Block + practical chemistry (brown ring, borax bead)`, R`p-Block + periodicity (nature of oxides)`],
  trap: [R`Ga is smaller than Al; Ga has higher IE than Al.`, R`N–N single bond is weaker than P–P.`],
  mist: [R`Assuming the group oxidation state is the most stable for heavy elements.`]
}
});
})();
