(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
const MP = [[21, 1814], [22, 1941], [23, 2183], [24, 2180], [25, 1519], [26, 1811], [27, 1768], [28, 1728], [29, 1358], [30, 693]];
NB.ch({
n: "12-4", short: "The d- and f-Block Elements",
intro: R`<b>Big idea:</b> partly filled d orbitals give transition metals their signature: many oxidation states, colour, magnetism, catalysis and complexes. Exceptions come from the extra stability of d⁰, d⁵ and d¹⁰.`,
sec: [
["Position & Electronic Configuration", [
  KEY([R`Not transition metals: Zn, Cd, Hg ($d^{10}$ in atom and ions).`, R`Second IE high for <b>Cr, Cu</b> (M⁺ is d⁵/d¹⁰); E°(M²⁺/M) positive only for <b>Cu</b>.`, R`Highest oxide > highest fluoride: $\ce{Mn2O7}$ (+7) vs $\ce{MnF4}$ (+4).`, R`Down a d-group <b>higher</b> oxidation states become more stable (Mo(VI), W(VI) > Cr(VI)).`, R`Colourless & diamagnetic: d⁰, d¹⁰ (Sc³⁺, Ti⁴⁺, Zn²⁺, Cu⁺); f⁰, f¹⁴ (La³⁺, Ce⁴⁺, Yb²⁺, Lu³⁺).`], "Top exceptions"),
  P(R`d-block: groups 3–12; four series 3d (Sc–Zn), 4d (Y–Cd), 5d (La, Hf–Hg), 6d (Ac, Rf–Cn). General configuration $(n-1)d^{1-10}ns^{1-2}$; exception Pd $4d^{10}5s^0$.`),
  P(R`A <b>transition element</b> has an incompletely filled d subshell in the atom or in its common ions. <b>Zn, Cd, Hg</b> ($d^{10}$ in atom and ions) are not regarded as transition metals; Cu ($Cu^{2+}$ is $d^9$) is.`),
  P(R`Exceptions in the 3d series (half/fully filled stability): <b>Cr</b> $3d^54s^1$, <b>Cu</b> $3d^{10}4s^1$. Ions lose 4s electrons first: Fe²⁺ $3d^6$, Mn²⁺ $3d^5$.`)
]],
["Physical Properties & Trends", [
  P(R`Hard, high m.p. and b.p. (strong metallic bonding from many unpaired d electrons). M.p. rises to a maximum near $d^5$ (except anomalous Mn and Tc), then falls. Zn, Cd, Hg are soft and low melting.`, null, G({ xl: "Z", yl: "m.p. (K)", xr: [20.5, 30.5], yr: [500, 2300], fns: [], pts: MP.map(([z, v]) => [z, v, { 21: "Sc", 23: "V", 25: "Mn", 29: "Cu", 30: "Zn" }[z] || ""]), t: "Melting points of 3d metals (Mn low, Zn lowest)" })),
  P(R`<b>Enthalpy of atomisation</b> is high and peaks in the middle of each series (many unpaired electrons → stronger interatomic bonding). Heavier series (4d, 5d) have higher values than 3d.`),
  J(R`"More unpaired electrons → higher enthalpy of atomisation" is true (NCERT). d-orbital splitting: octahedral $t_{2g}$ ($d_{xy}, d_{xz}, d_{yz}$) below $e_g$; tetrahedral $e$ below $t_2$.`, "2026 · 5 Apr · Shift 2"),
  P(R`<b>Radii</b> decrease slowly across a series (d electrons shield poorly), then level off. 4d and 5d radii are almost equal (Zr 160 pm, Hf 159 pm) because of <b>lanthanoid contraction</b>.`),
  P(R`<b>Ionisation enthalpy</b> rises irregularly across the series. Second IE is unusually high for <b>Cr and Cu</b> (M⁺ is $d^5$ / $d^{10}$); low for Zn (removal of 4s leaves $d^{10}$). Third IE high for Cu, Ni, Zn (why +2 is their limit); third IE of Mn is high ($Mn^{2+}$ is $d^5$).`),
  J(R`Second IE: Cr > Mn (Cr⁺ is $d^5$); first IE: Mn > Cr (Mn has a stable $4s^2$, Cr's single 4s electron is easier to remove).`, "2026 · 6 Apr · Shift 2"),
  J(R`Third valence electron removal is highest for Zn ($Zn^{2+}$ is $d^{10}$) and lowest for Sc (gives the noble-gas $Sc^{3+}$).`, "2026 · 2 Apr · Shift 2")
]],
["Oxidation States & Electrode Potentials", [
  T(["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn"], [["+3", "+2,+3,<b>+4</b>", "+2..+5", "+2,<b>+3</b>,+6", "<b>+2</b>..+7", "<b>+2,+3</b>", "<b>+2</b>,+3", "<b>+2</b>", "+1,<b>+2</b>", "<b>+2</b>"]]),
  P(R`Most oxidation states in the middle (Mn: +2 to +7). States differ by <b>one unit</b> (unlike p-block, by two). Maximum stable state = sum of s + d electrons up to Mn ($TiO_2$, $VO_2^+$, $CrO_4^{2-}$, $MnO_4^-$). Sc shows only +3; Zn only +2.`),
  P(R`<b>Down a group the higher states become more stable</b> (opposite to the p-block inert-pair trend): Mo(VI), W(VI) are more stable than Cr(VI), so dichromate is a strong oxidant while MoO3, WO3 are not.`),
  J(R`"Mo(VI) and W(VI) are less stable than Cr(VI)" is false. Actinoid contraction is greater per element than lanthanoid contraction (true).`, "2026 · 4 Apr · Shift 1"),
  P(R`Low (zero) oxidation states with π-acceptor ligands: Ni(CO)4, Fe(CO)5.`),
  P(R`<b>Oxygen stabilises higher states better than fluorine</b> (forms multiple bonds): highest Mn fluoride is <b>MnF4</b>, highest oxide <b>Mn2O7</b>. Highest fluorides: TiX4, VF5, CrF6. CuI2 does not exist ($2Cu^{2+} + 4I^- \to Cu_2I_2 + I_2$).`),
  J(R`Difference in Mn oxidation states between MnF4 (+4) and Mn2O7 (+7) is 3; ions with 3 unpaired electrons: V²⁺ ($d^3$), Co²⁺ ($d^7$).`, "2026 · 4 Apr · Shift 2"),
  P(R`$E^\circ(M^{2+}/M)$ is negative for all 3d metals except <b>Cu (+0.34 V)</b>: Cu does not liberate H2 from acids (high atomisation + IE not compensated by hydration). Mn²⁺ ($d^5$) and Zn²⁺ ($d^{10}$) have unusually negative values; Ni's is due to very negative $\Delta_{hyd}H$.`),
  P(R`$E^\circ(M^{3+}/M^{2+})$: Mn³⁺/Mn²⁺ (+1.57) and Co³⁺/Co²⁺ (+1.97) high — Mn³⁺, Co³⁺ strong oxidants; Cr³⁺/Cr²⁺ (−0.41) — Cr²⁺ strong reductant (Ti²⁺, V²⁺, Cr²⁺ liberate H2 from dilute acid). Low Fe value: Fe³⁺ is $d^5$.`),
  P(R`<b>Cu⁺ disproportionates</b> in water: $2Cu^+ \to Cu^{2+} + Cu$, because $\Delta_{hyd}H$ of Cu²⁺ is much more negative.`)
]],
["Magnetism, Colour, Complexes, Catalysis", [
  P(R`<b>Paramagnetism</b> from unpaired electrons; spin-only moment $\mu = \sqrt{n(n+2)}$ BM.`, null, G({ xl: "n", yl: "μ (BM)", xr: [-0.3, 5.5], yr: [0, 6.5], fns: [x => Math.sqrt(x * (x + 2))], pts: [[1, 1.73, "1.73"], [2, 2.83, "2.83"], [3, 3.87, "3.87"], [4, 4.9, "4.90"], [5, 5.92, "5.92"]], t: "μ = √(n(n + 2))" })),
  P(R`<b>Colour</b>: d–d transitions absorb visible light; we see the complementary colour. $d^0$ (Sc³⁺, Ti⁴⁺) and $d^{10}$ (Zn²⁺, Cu⁺) ions are colourless.`),
  T(["Ion (aq)", "Config.", "Colour"], [["Sc³⁺, Ti⁴⁺", "3d⁰", "colourless"], ["Ti³⁺", "3d¹", "purple"], ["V⁴⁺", "3d¹", "blue"], ["V³⁺", "3d²", "green"], ["V²⁺ / Cr³⁺", "3d³", "violet"], ["Mn³⁺", "3d⁴", "violet"], ["Cr²⁺", "3d⁴", "blue"], ["Mn²⁺", "3d⁵", "pink"], ["Fe³⁺", "3d⁵", "yellow"], ["Fe²⁺", "3d⁶", "green"], ["Co³⁺ / Co²⁺", "3d⁶ / 3d⁷", "blue / pink"], ["Ni²⁺", "3d⁸", "green"], ["Cu²⁺", "3d⁹", "blue"], ["Zn²⁺", "3d¹⁰", "colourless"]]),
  J(R`Pairs where both ions are coloured / both diamagnetic: count $d^0$, $d^{10}$, $f^0$, $f^{14}$ ions as colourless and diamagnetic (Ti⁴⁺, Sc³⁺, Zn²⁺, La³⁺, Ce⁴⁺, Yb²⁺, Lu³⁺).`, "2026 · 8 Apr · Shift 2; 2026 · 2 Apr · Shift 2"),
  P(R`<b>Complexes</b>: small, highly charged ions with vacant d orbitals ([Fe(CN)6]³⁻, [Cu(NH3)4]²⁺).`),
  P(R`<b>Catalysts</b>: variable oxidation states and complex formation. Surface catalysis uses <b>3d and 4s</b> electrons for bonding; reactant concentration at the surface rises and their bonds weaken (Ea falls). Examples: V2O5 (Contact process), Fe (Haber), Ni (hydrogenation), TiCl4 + Al(CH3)3 (Ziegler), PdCl2 (Wacker). Fe³⁺ catalyses $2I^- + S_2O_8^{2-}$ via $Fe^{3+} \rightleftharpoons Fe^{2+}$.`),
  J(R`"First-row transition metals use their 3d electrons <b>only</b>" is false — NCERT says 3d and 4s. Statement II (higher surface concentration, weakened bonds) is true.`, "2026 · 8 Apr · Shift 2"),
  P(R`<b>Interstitial compounds</b> (TiC, Mn4N, Fe3H, TiH1.7): small H, C, N in metal lattices; non-stoichiometric. They have <b>higher m.p. than the pure metal, are very hard, retain metallic conductivity and are chemically inert</b>.`),
  J(R`"Not a property of interstitial compounds": anything saying they are soft, low-melting, non-conducting or reactive.`, "2026 · 5 Apr · Shift 1"),
  P(R`<b>Alloys</b>: atoms with radii within ~15% mix readily (steels with Cr, V, W, Mo, Mn; brass Cu–Zn; bronze Cu–Sn).`)
]],
["Oxides, K2Cr2O7 and KMnO4", [
  P(R`Oxides: lower states basic, higher states acidic. MnO basic, <b>Mn2O7 acidic</b> (covalent green oil, gives HMnO4); CrO basic, Cr2O3 amphoteric, CrO3 acidic (gives H2CrO4, H2Cr2O7); V2O5 amphoteric (mainly acidic).`),
  P(R`<b>K2Cr2O7 preparation</b>: chromite ore fused with Na2CO3 in air → Na2CrO4 (yellow) → H2SO4 → Na2Cr2O7 → + KCl → K2Cr2O7 (orange crystals; less soluble).`, R`4\text{FeCr}_2\text{O}_4 + 8\text{Na}_2\text{CO}_3 + 7\text{O}_2 \to 8\text{Na}_2\text{CrO}_4 + 2\text{Fe}_2\text{O}_3 + 8\text{CO}_2`),
  P(R`<b>Chromate ⇌ dichromate</b> depends on pH (Cr is +6 in both): $2CrO_4^{2-} + 2H^+ \to Cr_2O_7^{2-} + H_2O$; base reverses it. CrO4²⁻ tetrahedral; Cr2O7²⁻ = two tetrahedra sharing a corner, <b>Cr–O–Cr 126°</b>.`, null, S(s.t(10, 70, "O", 13) + s.t(40, 70, "Cr", 14) + s.t(95, 40, "O", 13) + s.t(150, 70, "Cr", 14) + s.t(185, 70, "O", 13) + s.bond(58, 62, 92, 44) + s.bond(106, 44, 146, 62) + s.bond(22, 66, 38, 66) + s.bond(168, 66, 182, 66) + s.bond(47, 75, 37, 100) + s.bond(47, 55, 37, 30) + s.bond(157, 75, 167, 100) + s.bond(157, 55, 167, 30) + s.arcm(100, 44, 16, 210, 330) + s.t(85, 85, "126°", 12, 'class="red"'), 210, 110, "Dichromate ion")),
  P(R`Acidified dichromate (orange → green Cr³⁺, $E^\circ = 1.33$ V, 6 e⁻) oxidises I⁻ → I2, H2S → S, Sn²⁺ → Sn⁴⁺, Fe²⁺ → Fe³⁺. K2Cr2O7 is a <b>primary standard</b>; Na2Cr2O7 (more soluble) is used as an oxidant in organic chemistry.`, R`\text{Cr}_2\text{O}_7^{2-} + 14\text{H}^+ + 6e^- \to 2\text{Cr}^{3+} + 7\text{H}_2\text{O}`),
  J(R`Species that turn acidified K2Cr2O7 green: reducing agents (Fe²⁺, I⁻, H2S, SO2, Sn²⁺, oxalate…). Statements: oxidises FeSO4 to Fe2(SO4)3 ✓; Na2Cr2O7 as primary standard ✗; CrO4²⁻/Cr2O7²⁻ interconvert with pH ✓; Cr–O–Cr 126° ✓.`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 1"),
  P(R`<b>KMnO4 preparation</b>: MnO2 fused with KOH and an oxidant (KNO3) → dark green K2MnO4, which disproportionates in neutral/acid solution; commercially by alkaline oxidative fusion then <b>electrolytic oxidation</b> of manganate.`, [R`2\text{MnO}_2 + 4\text{KOH} + \text{O}_2 \to 2\text{K}_2\text{MnO}_4 + 2\text{H}_2\text{O}`, R`3\text{MnO}_4^{2-} + 4\text{H}^+ \to 2\text{MnO}_4^- + \text{MnO}_2 + 2\text{H}_2\text{O}`]),
  P(R`KMnO4: dark purple, decomposes at 513 K ($2KMnO_4 \to K_2MnO_4 + MnO_2 + O_2$). MnO4⁻ (tetrahedral, d⁰) is <b>diamagnetic</b> (weak T-dependent paramagnetism); manganate MnO4²⁻ is paramagnetic (one unpaired e⁻). π bonding: O p orbitals with Mn d orbitals.`),
  T(["Medium", "Half-reaction", "E°"], [["acidic", R`$MnO_4^- + 8H^+ + 5e^- \to Mn^{2+} + 4H_2O$`, "+1.52 V"], ["neutral / weakly basic", R`$MnO_4^- + 4H^+ + 3e^- \to MnO_2 + 2H_2O$`, "+1.69 V"], ["strongly basic", R`$MnO_4^- + e^- \to MnO_4^{2-}$`, "+0.56 V"]]),
  P(R`Acidified KMnO4 oxidises oxalate → CO2, Fe²⁺ → Fe³⁺, NO2⁻ → NO3⁻, I⁻ → I2. Used in volumetric analysis (self-indicator), bleaching of wool, cotton, silk, decolourising oils.`),
  RX({ name: "Preparation of K2Cr2O7", eq: [R`\ce{4FeCr2O4 + 8Na2CO3 + 7O2 -> 8Na2CrO4 + 2Fe2O3 + 8CO2}`, R`\ce{2Na2CrO4 + 2H+ -> Na2Cr2O7 + 2Na+ + H2O}`, R`\ce{Na2Cr2O7 + 2KCl -> K2Cr2O7 + 2NaCl}`], reag: "chromite ore fused with soda ash in air; acidify; add KCl", prod: "orange K2Cr2O7 crystals (less soluble than the Na salt)" }),
  MAP("Acidified K₂Cr₂O₇ as oxidant (orange → green Cr³⁺, 6e⁻)", "Cr₂O₇²⁻ / H⁺", [[R`$\ce{I-}$`, R`$\ce{I2}$`], [R`$\ce{H2S}$`, "S"], [R`$\ce{Sn^2+}$`, R`$\ce{Sn^4+}$`], [R`$\ce{Fe^2+}$`, R`$\ce{Fe^3+}$`], [R`$\ce{SO2}$`, R`$\ce{SO4^2-}$`, "green colour: SO2 test"], [R`$\ce{OH-}$ (raise pH)`, R`$\ce{CrO4^2-}$ (yellow)`, "no change in O.N. (+6)"]]),
  RX({ name: "Preparation of KMnO4", eq: [R`\ce{2MnO2 + 4KOH + O2 -> 2K2MnO4 + 2H2O}`, R`\ce{3MnO4^2- + 4H+ -> 2MnO4- + MnO2 + 2H2O}`], reag: "pyrolusite fused with KOH and an oxidant (KNO3); then disproportionation or electrolytic oxidation", prod: "dark purple KMnO4 (green manganate is the intermediate)" }),
  MAP("KMnO₄ depends on the medium", "MnO₄⁻", [["acidic (5 e⁻, E° 1.52 V)", R`$\ce{Mn^2+}$ (colourless)`, "oxalate→CO2, Fe²⁺→Fe³⁺, NO2⁻→NO3⁻, I⁻→I2"], ["neutral / weakly basic (3 e⁻)", R`$\ce{MnO2}$ (brown)`, R`$\ce{I- -> IO3-}$, $\ce{S2O3^2- -> SO4^2-}$`], ["strongly basic (1 e⁻)", R`$\ce{MnO4^2-}$ (green)`, ""], ["heat, 513 K", R`$\ce{K2MnO4 + MnO2 + O2}$`, "decomposition"]]),
]],
["Lanthanoids & Actinoids", [
  P(R`<b>Lanthanoids</b> Ce–Lu (4f): main oxidation state <b>+3</b>. +4: <b>Ce⁴⁺</b> (noble-gas config., strong oxidant, $E^\circ$ = +1.74 V; good analytical reagent), Tb⁴⁺ ($f^7$; oxidant), Pr, Nd, Dy in MO2. +2: <b>Eu²⁺</b> ($f^7$) and <b>Yb²⁺</b> ($f^{14}$) — strong reductants.`),
  J(R`Ce⁴⁺ and Tb⁴⁺ are oxidants; Eu²⁺ and Yb²⁺ are reductants (true). Cm and Am do not both have 7 unpaired electrons (Am $5f^77s^2$ has 7; Cm $5f^76d^17s^2$ has 8).`, "2026 · 4 Apr · Shift 1"),
  P(R`<b>Lanthanoid contraction</b>: steady decrease in atomic and ionic radii La → Lu due to imperfect shielding by 4f electrons. Consequences: Zr ≈ Hf (hard to separate), basicity of Ln(OH)3 decreases La → Lu.`, null, G({ xl: "Z", yl: "r(Ln³⁺) pm", xr: [56.5, 71.5], yr: [80, 110], fns: [x => 106 - 1.55 * (x - 57)], pts: [[57, 106, "La³⁺"], [71, 85, "Lu³⁺"]], t: "Lanthanoid contraction (approx.)" })),
  P(R`Ln³⁺ colour comes from f electrons (narrow bands); La³⁺ ($f^0$) and Lu³⁺ ($f^{14}$) colourless. Paramagnetic except $f^0$ (La³⁺, Ce⁴⁺) and $f^{14}$ (Yb²⁺, Lu³⁺). First IE ≈ 600, second ≈ 1200 kJ/mol (like Ca); $E^\circ(Ln^{3+}/Ln)$ ≈ −2.2 to −2.4 V (Eu −2.0 V).`),
  J(R`Pairs with the same number of 4f electrons: Eu ($4f^7$) and Gd ($4f^75d^1$); Yb ($4f^{14}$) and Hf ($4f^{14}5d^2$); Lu ($4f^{14}5d^1$) and Tm ($4f^{13}$) — not equal.`, "2026 · 4 Apr · Shift 2"),
  P(R`<b>Uses</b>: mischmetall (~95% lanthanoid + ~5% Fe, traces S, C, Ca, Al) in Mg alloys for bullets, shells and lighter flints; mixed oxides as cracking catalysts.`),
  P(R`<b>Actinoids</b> Th–Lr (5f): all radioactive. 5f, 6d, 7s have similar energies → <b>wider range of oxidation states</b>; maximum rises Th (+4), Pa (+5), U (+6), Np (+7), then falls; +3 general. <b>Actinoid contraction is greater</b> element to element (poorer shielding by 5f). Early actinoids have lower IE than early lanthanoids.`)
]]
],
pyq: {
  pat: [
    [R`K2Cr2O7 / KMnO4 statements (preparation, pH, structure, primary standard)`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 1; 2026 · 5 Apr · Shift 1"],
    [R`IE trends in the 3d series (Cr vs Mn, Zn, Sc)`, "2026 · 2 Apr · Shift 2; 2026 · 6 Apr · Shift 2"],
    [R`Unpaired electrons / paramagnetic and coloured ions in a list`, "2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 2; 2026 · 8 Apr · Shift 2"],
    [R`Lanthanoid/actinoid oxidation states, configurations, contraction`, "2026 · 4 Apr · Shift 1; 2026 · 4 Apr · Shift 2"],
    [R`Catalysis and interstitial compound properties`, "2026 · 5 Apr · Shift 1; 2026 · 8 Apr · Shift 2"]
  ],
  combo: [R`d-Block + coordination (CFSE, magnetic moments)`, R`d-Block + practical chemistry (borax bead, salt analysis)`, R`d-Block + redox (n-factors of MnO4⁻, Cr2O7²⁻)`],
  trap: [R`Down a d-group higher oxidation states get <b>more</b> stable.`, R`Cu has positive $E^\circ(Cu^{2+}/Cu)$; Cu⁺ disproportionates in water.`],
  mist: [R`Removing 3d electrons before 4s when writing ion configurations.`, R`Calling Na2Cr2O7 a primary standard.`]
}
});
})();
