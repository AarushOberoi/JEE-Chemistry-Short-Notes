(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
// octahedron sketch with labelled ligands: labels[0..5] = top, bottom, left, right, front-left, back-right
const octa = (cx, cy, lab, hl = []) => { const pts = [[cx, cy - 45], [cx, cy + 45], [cx - 48, cy], [cx + 48, cy], [cx - 22, cy + 18], [cx + 22, cy - 18]]; return pts.map(([x, y], i) => s.line(cx, cy, x, y, 'class="thin"') + s.t(x - 6, y + 5, lab[i], 12, hl.includes(i) ? 'class="red"' : "")).join("") + s.t(cx - 5, cy + 5, "M", 13); };
NB.ch({
n: "12-5", short: "Coordination Compounds",
intro: R`<b>Big idea:</b> a metal ion holds ligands by accepting their lone pairs. Ligands split the d orbitals (CFT); the size of that split decides colour, spin and magnetism.`,
sec: [
["Solve Any Complex in 4 Steps", [
  STEPS("Hybridisation, geometry and magnetism", [["Oxidation state", R`e.g. $\ce{[Fe(CN)6]^4-}$: Fe +2`, "charge − ligand charges"], ["d-electrons", R`$\ce{Fe^2+}$ = d⁶`, "remove 4s first"], ["Ligand strength", "strong (CN⁻, CO, en, NH3 for Co³⁺) → pair up; weak (F⁻, Cl⁻, H2O) → high spin", "use spectrochemical series"], ["Result", R`low spin d⁶ → $t_{2g}^6$, d²sp³, diamagnetic`, R`$\mu = \sqrt{n(n+2)}$`]]),
  KEY([R`C.N. 4: <b>sp³</b> tetrahedral (Ni(CO)4, [NiCl4]²⁻) or <b>dsp²</b> square planar ([Ni(CN)4]²⁻, [PtCl4]²⁻, Cu²⁺ ammine)`, R`C.N. 6: <b>d²sp³</b> inner/low spin (strong field) or <b>sp³d²</b> outer/high spin (weak field)`, R`Ni²⁺ (d⁸) octahedral is always sp³d², 2 unpaired. Ni(0) in Ni(CO)4 is diamagnetic.`, R`Ionisable ions = outside the [ ]: moles of AgCl = number of Cl⁻ outside.`], "Must-remember")
]],
["Werner's Theory & Terms", [
  P(R`<b>Werner (1898)</b>: metals show <b>primary valence</b> (ionisable, = oxidation state, satisfied by anions) and <b>secondary valence</b> (non-ionisable, = coordination number, satisfied by ligands; directed in space → definite geometry).`),
  P(R`Precipitation with AgNO3 counts the <b>ionisable</b> Cl⁻ (outside the brackets). CoCl3·6NH3 → [Co(NH3)6]Cl3 (3 AgCl); CoCl3·5NH3 → [CoCl(NH3)5]Cl2 (2); CoCl3·4NH3 → [CoCl2(NH3)4]Cl (1).`),
  J(R`CrCl3·6H2O behaving as a 1 : 3 electrolyte is [Cr(H2O)6]Cl3: all 3 Cl⁻ precipitate as AgCl.`, "2026 · 2 Apr · Shift 1"),
  J(R`[Cr(H2O)4Cl2]Cl (tetraaquadichloridochromium(III) chloride): only 1 Cl⁻ is ionisable → 0.05 × 0.1 = 5 × 10⁻³ mol AgCl.`, "2026 · 6 Apr · Shift 2"),
  L([R`<b>Coordination entity</b>: central atom/ion + ligands in [ ]; <b>counter ions</b> outside. <b>Coordination number</b> = number of donor atoms bound.`, R`<b>Ligands</b>: unidentate (Cl⁻, H2O, NH3), didentate (en = ethane-1,2-diamine, ox²⁻ = oxalate), polydentate; <b>EDTA⁴⁻ is hexadentate</b>.`, R`<b>Chelate</b>: a polydentate ligand binding one metal through ≥2 donors; chelates are more stable (chelate effect).`, R`<b>Ambidentate</b>: two different donor atoms — NO2⁻ (N or O, nitrito-N/-O), SCN⁻ (S or N), CN⁻.`, R`<b>Homoleptic</b> (one kind of ligand, [Co(NH3)6]³⁺) vs <b>heteroleptic</b> ([Co(NH3)4Cl2]⁺).`])
]],
["IUPAC Nomenclature", [
  P(R`<b>Formula</b>: central atom first, then ligands alphabetically, in [ ]. <b>Name</b>: cation before anion; in the entity, ligands alphabetically (ignore di/tri prefixes) then metal with oxidation state in Roman numerals.`),
  L([R`Anionic ligands end in -o: chlorido, cyanido, hydroxido, oxalato, nitrito-N; neutral: aqua (H2O), ammine (NH3), carbonyl (CO), nitrosyl (NO).`, R`Prefixes di/tri/tetra; for ligands whose name already has a prefix use bis/tris/tetrakis: tris(ethane-1,2-diamine).`, R`Anionic complex: metal ends in <b>-ate</b> (ferrate, cuprate, argentate, plumbate, stannate, aurate; cobaltate).`]),
  T(["Formula", "IUPAC name"], [["[Cr(NH3)3(H2O)3]Cl3", "triamminetriaquachromium(III) chloride"], ["[Co(H2NCH2CH2NH2)3]2(SO4)3", "tris(ethane-1,2-diamine)cobalt(III) sulphate"], ["K4[Fe(CN)6]", "potassium hexacyanidoferrate(II)"], ["[Pt(NH3)2Cl(NO2)]", "diamminechloridonitrito-N-platinum(II)"], ["K3[Cr(C2O4)3]", "potassium trioxalatochromate(III)"]])
]],
["Isomerism", [
  P(R`<b>Structural</b>: linkage (ambidentate ligand: [Co(NH3)5(NO2)]Cl2 vs [Co(NH3)5(ONO)]Cl2), coordination (ligand swap between cation and anion: [Co(NH3)6][Cr(CN)6] ⇌ [Cr(NH3)6][Co(CN)6]), ionisation ([Co(NH3)5SO4]Br vs [Co(NH3)5Br]SO4), solvate/hydrate ([Cr(H2O)6]Cl3 violet vs [Cr(H2O)5Cl]Cl2·H2O grey-green).`),
  J(R`Coordination isomerism = exchange of ligands between the cationic and anionic entities. [Co(NH3)6][Cr(CN)6] ⇌ [Cr(NH3)6][Co(CN)6]; also [Fe(NH3)6][Co(CN)6], [Co(NH3)6][Fe(CN)6], and [Co(NH3)6][Co(CN)6] (partial exchange gives [Co(NH3)4(CN)2][Co(NH3)2(CN)4]). Test each option by swapping ligands between the two metals.`, "2026 · 2 Apr · Shift 2"),
  P(R`<b>Geometrical</b>: square planar [MX2L2] cis/trans; MABXL → 3 isomers; octahedral [MX2L4] cis/trans; [Ma3b3] <b>fac/mer</b>. Tetrahedral complexes show no geometrical isomerism.`, null, S(octa(60, 60, ["Cl", "Cl", "N", "N", "N", "N"], [0, 1]) + s.t(30, 128, "trans", 12) + octa(180, 60, ["Cl", "N", "N", "Cl", "N", "N"], [0, 3]) + s.t(150, 128, "cis", 12), 240, 135, "[CoCl₂(NH₃)₄]⁺ isomers")),
  P(R`<b>Optical</b>: non-superimposable mirror images; common in octahedral complexes with didentate ligands: [Co(en)3]³⁺ (d and l), <b>cis</b>-[PtCl2(en)2]²⁺ (trans is not optically active), cis-[CrCl2(ox)2]³⁻.`),
  T(["Type", "Total stereoisomers"], [["[Ma4b2]", "2 (cis, trans)"], ["[Ma3b3]", "2 (fac, mer)"], ["[M(AA)2b2]", "3 (trans + d/l cis)"], ["[M(AA)3]", "2 (d, l)"], ["[Mabcd] square planar", "3"]])
]],
["Valence Bond Theory", [
  T(["C.N.", "Hybridisation", "Geometry", "Examples"], [["4", "sp³", "tetrahedral", "[Ni(CO)4], [NiCl4]²⁻, [CoCl4]²⁻"], ["4", "dsp²", "square planar", "[Ni(CN)4]²⁻, [PtCl4]²⁻, [Cu(NH3)4]²⁺"], ["5", "sp³d", "trigonal bipyramidal", "[Fe(CO)5]"], ["6", "d²sp³ (inner, low spin)", "octahedral", "[Co(NH3)6]³⁺, [Fe(CN)6]³⁻, [Fe(CN)6]⁴⁻"], ["6", "sp³d² (outer, high spin)", "octahedral", "[CoF6]³⁻, [FeF6]³⁻, [Ni(NH3)6]²⁺"]]),
  P(R`<b>Inner orbital</b> (low spin, spin paired) uses (n−1)d; <b>outer orbital</b> (high spin) uses nd. Ni²⁺ ($d^8$) cannot make an inner octahedral complex, so [Ni(NH3)6]²⁺ is sp³d² (2 unpaired).`, null, S(s.t(5, 20, "Co³⁺ in [Co(NH₃)₆]³⁺ (d²sp³, diamagnetic)", 12) + [0, 1, 2, 3, 4].map(i => s.rect(10 + i * 22, 30, 22, 22, 'class="thin"') + (i < 3 ? s.t(14 + i * 22, 46, "↑↓", 11) : s.t(14 + i * 22, 46, "××", 11, 'class="red"'))).join("") + s.rect(125, 30, 22, 22, 'class="thin"') + s.t(129, 46, "××", 11, 'class="red"') + [0, 1, 2].map(i => s.rect(160 + i * 22, 30, 22, 22, 'class="thin"') + s.t(164 + i * 22, 46, "××", 11, 'class="red"')).join("") + s.t(40, 70, "3d", 11) + s.t(128, 70, "4s", 11) + s.t(185, 70, "4p", 11) + s.t(5, 95, "×× = electron pairs from NH₃", 11), 240, 100, "Inner orbital complex")),
  J(R`[NiCl4]²⁻ sp³, tetrahedral, paramagnetic (2 unpaired); [Ni(CN)4]²⁻ dsp², square planar, diamagnetic; [Ni(CO)4] sp³, tetrahedral, <b>diamagnetic</b> (Ni(0), $3d^{10}$); [Ni(NH3)6]²⁺ sp³d², paramagnetic.`, "2026 · 6 Apr · Shift 2"),
  J(R`K4[Fe(CN)6]: Fe²⁺ $d^6$ with strong-field CN⁻ → d²sp³, diamagnetic. [Fe(NO2)3Cl3]³⁻ can show linkage isomerism (NO2⁻ ambidentate).`, "2026 · 5 Apr · Shift 2"),
  P(R`<b>Limitations</b>: many assumptions; no quantitative magnetic data; does not explain colour; no thermodynamic/kinetic stability; cannot reliably predict tetrahedral vs square planar; does not distinguish weak and strong ligands.`)
]],
["Crystal Field Theory", [
  P(R`Ligands are point charges; the five degenerate d orbitals split. <b>Octahedral</b>: $e_g$ ($d_{x^2-y^2}$, $d_{z^2}$, pointing at ligands) up by $0.6\Delta_o$; $t_{2g}$ ($d_{xy}$, $d_{yz}$, $d_{xz}$) down by $0.4\Delta_o$. <b>Tetrahedral</b>: inverted, $e$ below $t_2$, $\Delta_t = \frac49\Delta_o$ (low spin rare).`, null, S(s.line(10, 75, 60, 75) + s.t(5, 95, "free ion", 11) + s.line(60, 75, 100, 40, 'class="thin" stroke-dasharray="3 3"') + s.line(60, 75, 100, 98, 'class="thin" stroke-dasharray="3 3"') + s.line(100, 40, 150, 40) + s.t(152, 44, "e_g (+0.6Δₒ)", 11) + s.line(100, 98, 150, 98) + s.t(152, 102, "t₂g (−0.4Δₒ)", 11) + s.arr(122, 95, 122, 43, 'class="red"') + s.t(108, 70, "Δₒ", 12, 'class="red"') + s.line(250, 50, 300, 50) + s.t(302, 54, "t₂", 11) + s.line(250, 85, 300, 85) + s.t(302, 89, "e", 11) + s.t(228, 118, "tetrahedral", 11) + s.t(222, 132, "(Δₜ = 4/9 Δₒ)", 11) + s.t(90, 125, "octahedral", 11), 340, 130, "d-orbital splitting")),
  P(R`<b>Spectrochemical series</b> (increasing field strength, NCERT):`, [R`\text{I}^- < \text{Br}^- < \text{SCN}^- < \text{Cl}^- < \text{S}^{2-} < \text{F}^- < \text{OH}^- < \text{C}_2\text{O}_4^{2-}`, R`< \text{H}_2\text{O} < \text{NCS}^- < \text{edta}^{4-} < \text{NH}_3 < \text{en} < \text{CN}^- < \text{CO}`]),
  J(R`Δo of Cr(III) complexes: F⁻ < H2O < en < CN⁻ → 15,060 < 17,400 < 22,300 < 26,600 cm⁻¹.`, "2026 · 2 Apr · Shift 1"),
  P(R`For $d^4$–$d^7$: if $\Delta_o < P$ (pairing energy; weak-field ligand) → <b>high spin</b> ($t_{2g}^3e_g^1$ for $d^4$); if $\Delta_o > P$ (strong field) → <b>low spin</b> ($t_{2g}^4e_g^0$).`),
  P(R`<b>CFSE</b> (octahedral) $= (-0.4x + 0.6y)\Delta_o + (\text{pairing energies})$ for $t_{2g}^xe_g^y$. Δo grows with metal oxidation state (M³⁺ > M²⁺) and down a group (3d < 4d < 5d).`),
  J(R`CFSE order [Co(H2O)6]²⁺ < [Co(H2O)6]³⁺ < [Co(en)3]³⁺ (higher charge and stronger ligand). Unpaired electrons: d³ 3, d⁴ low spin 2, d⁵ high spin 5, d⁶ high spin 4, d⁷ low spin 1 → total 15.`, "2026 · 2 Apr · Shift 2; 2026 · 5 Apr · Shift 2"),
  J(R`Spin-only moments of [M(H2O)6]²⁺ (weak field, high spin): Cr²⁺ $d^4$ 4.90; Co²⁺ $d^7$ 3.87; Cu²⁺ $d^9$ 1.73; Mn²⁺ $d^5$ 5.92 BM.`, "2026 · 4 Apr · Shift 1"),
  P(R`<b>Colour</b>: d–d transition $t_{2g} \to e_g$ absorbs visible light; the complex shows the complementary colour. [Ti(H2O)6]³⁺ is violet (absorbs green-yellow). No ligands → no splitting → colourless: anhydrous CuSO4 white, CuSO4·5H2O blue; heating [Ti(H2O)6]Cl3 removes colour. Ruby = Cr³⁺ in Al2O3; emerald = Cr³⁺ in beryl.`),
  P(R`[Ni(H2O)6]²⁺ (green) → adding en stepwise → [Ni(en)3]²⁺ (violet): stronger field → absorbs higher frequency.`),
  J(R`[Ni(en)3]²⁺, [NiCl4]²⁻, [Ni(NH3)6]²⁺: unpaired electrons 2, 2, 2; frequency of absorption follows Δ: [NiCl4]²⁻ (tetrahedral, small) < [Ni(NH3)6]²⁺ < [Ni(en)3]²⁺.`, "2026 · 4 Apr · Shift 2"),
  J(R`Count paramagnetic complexes: use the spectrochemical series. [MnBr4]²⁻, [NiCl4]²⁻, [CoF6]³⁻, [Mn(CN)6]³⁻ (d⁴ LS, 2 unpaired), [Ti(CN)6]³⁻ (d¹), [Cu(H2O)6]²⁺ are paramagnetic; [Ni(CN)4]²⁻, [Ni(CO)4], [Fe(CN)6]⁴⁻, [Co(C2O4)3]³⁻ are diamagnetic.`, "2026 · 8 Apr · Shift 2"),
  P(R`<b>Limitations of CFT</b>: ligands treated as point charges, so anionic ligands should be strongest but are at the weak end; ignores covalent character of M–L bonds.`)
]],
["Metal Carbonyls & Applications", [
  P(R`Homoleptic carbonyls: [Ni(CO)4] tetrahedral, [Fe(CO)5] trigonal bipyramidal, [Cr(CO)6] octahedral; [Mn2(CO)10], [Co2(CO)8] have M–M bonds. <b>Synergic bonding</b>: σ donation from the C lone pair into a vacant metal orbital + π back-donation from filled metal d orbitals into vacant π* of CO. This <b>strengthens the M–C bond</b> (and weakens C≡O).`, null, S(s.t(20, 60, "M", 18) + s.lobe(40, 55, 26, 0, 'class="fl2"') + s.t(90, 60, "C≡O", 16) + s.arr(85, 48, 50, 48, 'class="red"') + s.t(50, 30, "σ: C → M", 11, 'class="red"') + s.path("M38 72 Q65 95 92 72", 'class="blue"') + s.arr(88, 74, 94, 70, 'class="blue"') + s.t(40, 108, "π back-donation: M d → CO π*", 11), 220, 115, "Synergic bonding in carbonyls")),
  J(R`Metal carbonyls: M–C bond has both σ and π character ✓; synergic bonding makes M–C <b>stronger</b>, not weaker ✗; σ from the C lone pair into a vacant metal orbital ✓; π from filled d into CO π* ✓.`, "2026 · 5 Apr · Shift 1"),
  L([R`<b>Analysis</b>: EDTA titration for hardness (Ca²⁺, Mg²⁺); DMG for Ni²⁺ (red ppt); α-nitroso-β-naphthol, cupron.`, R`<b>Metallurgy</b>: Ag and Au extracted as [M(CN)2]⁻; Ni purified via Ni(CO)4 (Mond process).`, R`<b>Biology</b>: chlorophyll (Mg), haemoglobin (Fe), vitamin B12 cyanocobalamin (Co).`, R`<b>Medicine</b>: EDTA for lead poisoning; cis-platin anticancer; D-penicillamine and desferrioxime B remove excess Cu, Fe.`, R`<b>Catalysis</b>: Wilkinson's catalyst [(Ph3P)3RhCl] for hydrogenation of alkenes.`]),
  J(R`Chelate stability: [Fe(C2O4)3]³⁻ is the most stable among [Fe(OH)6]³⁻, [Fe(C2O4)3]³⁻, [Fe(SCN)6]³⁻; [Cu(en)2]²⁺ is more stable than [Cu(NH3)4]²⁺ (chelate effect).`, "2026 · 5 Apr · Shift 2")
]]
],
pyq: {
  pat: [
    [R`Moles of AgCl from a complex (ionisable Cl⁻)`, "2026 · 2 Apr · Shift 1; 2026 · 6 Apr · Shift 2"],
    [R`Spectrochemical series / Δo order / absorption frequency`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 2"],
    [R`Hybridisation, geometry, magnetism of Ni, Co, Fe complexes`, "2026 · 5 Apr · Shift 2; 2026 · 6 Apr · Shift 2"],
    [R`Unpaired electrons, spin-only moments, count of paramagnetic complexes`, "2026 · 4 Apr · Shift 1; 2026 · 5 Apr · Shift 2; 2026 · 8 Apr · Shift 2"],
    [R`Coordination / linkage isomerism`, "2026 · 2 Apr · Shift 2; 2026 · 5 Apr · Shift 2"],
    [R`Metal carbonyls (synergic bonding), CFT statements`, "2026 · 5 Apr · Shift 1"]
  ],
  combo: [R`Coordination + d-block (configurations, colours)`, R`Coordination + colligative properties (van't Hoff factor of complexes)`, R`Coordination + practical chemistry (brown ring, DMG, EDTA)`],
  trap: [R`[Ni(CO)4] is diamagnetic though tetrahedral.`, R`Synergic bonding <b>strengthens</b> the M–C bond.`],
  mist: [R`Counting Cl⁻ inside the bracket as ionisable.`, R`Forgetting that tetrahedral complexes are almost always high spin.`]
}
});
})();
