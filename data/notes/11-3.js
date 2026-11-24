(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
const IE = [[3, 520], [4, 899], [5, 801], [6, 1086], [7, 1402], [8, 1314], [9, 1681], [10, 2080], [11, 496], [12, 737], [13, 577], [14, 786], [15, 1012], [16, 999], [17, 1256], [18, 1520], [19, 419]];
NB.ch({
n: "11-3", short: "Classification of Elements and Periodicity in Properties",
intro: R`<b>Big idea:</b> across a period nuclear charge grows (atoms shrink, hold electrons tighter); down a group new shells are added (atoms grow, hold electrons loosely). Most questions test the <b>exceptions</b>.`,
sec: [
["Trends & Exceptions at a Glance", [
  T(["Property", "Across a period →", "Down a group ↓", "Key exceptions"], [["atomic radius", "decreases", "increases", "Ga (135) < Al (143); Zr ≈ Hf"], ["ionisation enthalpy", "increases", "decreases", "Be > B, N > O; Mg > Al, P > S; B > Tl > Ga > Al > In"], ["electron gain enthalpy (more −ve)", "increases", "decreases", "Cl > F, S > O, P > N; noble gases +ve"], ["electronegativity", "increases", "decreases", "F highest (4.0)"], ["metallic character", "decreases", "increases", ""], ["oxide nature", "basic → amphoteric → acidic", "more basic", "Al2O3, ZnO, BeO amphoteric"]]),
  KEY([R`<b>Why B < Be (IE)?</b> B loses a 2p electron (shielded by 2s, easier to remove).`, R`<b>Why O < N (IE)?</b> N has half-filled $2p^3$; O's paired electron is repelled.`, R`<b>Why Cl > F (electron gain)?</b> F's small 2p is crowded; the extra electron is repelled.`, R`<b>Isoelectronic ions</b>: more protons → smaller: $\ce{N^3- > O^2- > F- > Na+ > Mg^2+ > Al^3+}$.`], "Exceptions explained in one line")
]],
["Development of the Periodic Table", [
  L([R`<b>Döbereiner's triads</b> (middle element's atomic weight ≈ average of the other two), <b>Newlands' law of octaves</b> (every 8th element similar; worked only up to Ca), <b>Lothar Meyer</b> (physical properties vs atomic weight).`, R`<b>Mendeleev's periodic law</b>: properties are periodic functions of <b>atomic weights</b>. He left gaps and predicted <b>eka-aluminium (Ga)</b> and <b>eka-silicon (Ge)</b>, and placed some elements out of weight order to keep similar ones together.`, R`<b>Moseley (1913)</b>: $\sqrt\nu$ of X-ray lines ∝ Z, so atomic number is more fundamental.`]),
  P(R`<b>Modern periodic law</b>: physical and chemical properties are periodic functions of their <b>atomic numbers</b>. Long form: 7 periods, 18 groups (IUPAC 1984 numbering). Period number = highest principal quantum number.`),
  P(R`<b>Nomenclature for Z > 100</b>: roots 0 nil, 1 un, 2 bi, 3 tri, 4 quad, 5 pent, 6 hex, 7 sept, 8 oct, 9 enn, ending "-ium". E.g. Z = 101 Unnilunium (Unu) = Md; 104 Unnilquadium (Unq) = Rf; 118 Ununoctium (Uuo) = Og.`)
]],
["Blocks of the Periodic Table", [
  P(R`The block is set by the subshell receiving the last electron.`, null, S(s.rect(5, 20, 40, 100, 'class="fl"') + s.t(15, 75, "s", 15) + s.rect(45, 50, 150, 70, 'class="thin"') + s.t(110, 90, "d", 15) + s.rect(195, 20, 90, 100, 'class="fl2"') + s.t(235, 75, "p", 15) + s.rect(45, 130, 210, 28, 'class="thin"') + s.t(140, 149, "f (lanthanoids, actinoids)", 12) + s.t(5, 14, "1–2", 11) + s.t(100, 44, "3–12", 11) + s.t(225, 14, "13–18", 11), 295, 165, "s, p, d and f blocks")),
  T(["Block", "Outer configuration", "Character"], [["s", R`$ns^{1-2}$`, "reactive metals, low IE, fixed oxidation state"], ["p", R`$ns^2np^{1-6}$`, "metals, metalloids and non-metals; noble gases at the end"], ["d", R`$(n-1)d^{1-10}ns^{0-2}$`, "transition metals: coloured ions, variable oxidation states, catalysts"], ["f", R`$(n-2)f^{1-14}(n-1)d^{0-1}ns^2$`, "inner transition: lanthanoids (4f), actinoids (5f, radioactive)"]]),
  P(R`Metallic character decreases across a period and increases down a group. <b>Metalloids</b> (semi-metals): Si, Ge, As, Sb, Te.`)
]],
["Atomic & Ionic Radius", [
  P(R`<b>Covalent radius</b> (half the distance between bonded identical atoms) < <b>metallic radius</b> < <b>van der Waals radius</b>. Radius <b>decreases across a period</b> (effective nuclear charge rises) and <b>increases down a group</b> (new shells).`, null, G({ xl: "Z", yl: "r (pm)", xr: [2, 20], yr: [0, 240], fns: [], pts: [[3, 152, "Li"], [4, 111, ""], [5, 88, ""], [6, 77, ""], [7, 74, ""], [8, 66, ""], [9, 64, "F"], [11, 186, "Na"], [12, 160, ""], [13, 143, ""], [14, 117, ""], [15, 110, ""], [16, 104, ""], [17, 99, "Cl"], [19, 231, "K"]], t: "Atomic radius: falls across, jumps at alkali metals" })),
  P(R`<b>Ions</b>: cation < parent atom < anion. In an <b>isoelectronic series</b>, radius decreases as nuclear charge increases:`, R`\text{N}^{3-} > \text{O}^{2-} > \text{F}^- > \text{Na}^+ > \text{Mg}^{2+} > \text{Al}^{3+}`),
  P(R`<b>Exceptions</b>: Al (143 pm) > Ga (135 pm) — poor shielding by 3d electrons. Second- and third-row transition elements have similar radii (Zr ≈ Hf) due to lanthanoid contraction.`)
]],
["Ionisation Enthalpy", [
  P(R`$\Delta_iH_1$: energy to remove the outermost electron from an isolated gaseous atom in its ground state; $\Delta_iH_2 > \Delta_iH_1$ always (removing from a positive ion).`),
  P(R`Generally <b>increases across a period</b> and <b>decreases down a group</b>. Noble gases have the maxima, alkali metals the minima.`, null, G({ xl: "Z", yl: "ΔᵢH (kJ/mol)", xr: [2, 20], yr: [0, 2200], fns: [], pts: IE.map(([z, v]) => [z, v, { 3: "Li", 4: "Be", 5: "B", 7: "N", 8: "O", 10: "Ne", 11: "Na", 18: "Ar" }[z] || ""]), t: "First IE: dips at B and O, Al and S", w: 300, h: 190 })),
  L([R`<b>Be > B</b> and <b>Mg > Al</b>: B/Al lose a 2p/3p electron, which is less penetrating (shielded by s) than an s electron.`, R`<b>N > O</b> and <b>P > S</b>: N has a stable half-filled $2p^3$; in O the paired electron feels extra repulsion.`, R`Down group 13: B > Tl > Ga > Al > In (poor shielding by d and f electrons).`, R`Group 14: C > Si > Ge > Pb > Sn (Pb > Sn due to poor shielding by 4f).`]),
  J(R`Match 2nd-period configurations with IE: $ns^2$ (Be) 899, $ns^2np^1$ (B) 800, $ns^2np^3$ (N) 1402, $ns^2np^6$ (Ne) 2080 kJ/mol.`, "2026 · 8 Apr · Shift 2"),
  J(R`Second IE of Mg is about twice the first (737 → ≈1450 kJ/mol); the third is huge (noble-gas core). A very high $\Delta_iH_3$ means the atom has 2 valence electrons (Ca, Mg).`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 2"),
  J(R`First IE order Na < Mg > … and Cl < Ar: Na < Mg < Cl < Ar. Statement-type questions usually test the reversed order.`, "2026 · 2 Apr · Shift 1")
]],
["Electron Gain Enthalpy & Electronegativity", [
  P(R`$\Delta_{eg}H$: enthalpy change when a gaseous atom gains an electron. Usually negative (exothermic) for halogens; <b>positive</b> for noble gases (electron enters a new shell) and for adding a second electron (O⁻ → O²⁻).`),
  P(R`Becomes more negative across a period; less negative down a group. <b>Exceptions</b>: Cl has the most negative value (−349 kJ/mol), more than F (−328); likewise S > O, P > N. The small 2p subshell of F, O, N has strong electron–electron repulsion.`),
  P(R`Group 17 $\Delta_{eg}H$ (kJ/mol): F −328, Cl −349, Br −325, I −295.`),
  J(R`In a period: the leftmost element has the lowest first IE; the most negative electron gain enthalpy is shown by the halogen (not the noble gas).`, "2026 · 6 Apr · Shift 2"),
  P(R`<b>Electronegativity</b> (Pauling scale; F = 4.0 highest, then O 3.5, N 3.0, Cl 3.0): increases across, decreases down. It is not measurable directly. Non-metallic character follows electronegativity.`),
  J(R`EN order F > O > N; oxidation state of O in OF2 is +2 (F is more electronegative) and in Na2O is −2.`, "2026 · 5 Apr · Shift 1")
]],
["Valence, Oxides & Anomalous Second-Period Elements", [
  P(R`Valence of s and p elements = number of valence electrons or (8 − that number). Oxides: metal oxides basic, non-metal oxides acidic; across period 3:`, R`\underbrace{\text{Na}_2\text{O}}_{\text{strongly basic}} \to \text{MgO} \to \underbrace{\text{Al}_2\text{O}_3}_{\text{amphoteric}} \to \text{SiO}_2 \to \text{P}_4\text{O}_{10} \to \text{SO}_3 \to \underbrace{\text{Cl}_2\text{O}_7}_{\text{strongly acidic}}`),
  P(R`<b>Neutral oxides</b>: CO, NO, N2O. <b>Amphoteric</b>: Al2O3, ZnO, BeO, SnO, PbO, Cr2O3 (also As2O3, Sb2O3). Higher oxidation states of a metal give more acidic oxides (Mn2O7 acidic, CrO3 acidic, MnO basic).`),
  J(R`Sets containing basic, acidic, amphoteric and neutral oxides; pairs of the same nature (Al2O3/Cr2O3 amphoteric, Cl2O7/Mn2O7 acidic, CO/N2O neutral).`, "2026 · 2 Apr · Shift 2; 2026 · 5 Apr · Shift 2"),
  P(R`<b>First member of each group</b> is anomalous: small size, high charge/radius ratio, high electronegativity, and <b>no d orbitals</b> (max covalency 4). Li–Mg and Be–Al show <b>diagonal relationship</b>.`),
  W(R`Reactivity: metals are most reactive at the left (low IE), non-metals at the right (high electron gain). Both extremes give the most reactive elements in a period.`)
]]
],
pyq: {
  pat: [
    [R`Order of first/second/third ionisation enthalpies with exceptions`, "2026 · 2 Apr · Shift 1; 2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 2; 2026 · 8 Apr · Shift 2"],
    [R`Electron gain enthalpy and electronegativity trends`, "2026 · 5 Apr · Shift 1; 2026 · 6 Apr · Shift 2"],
    [R`Nature of oxides (acidic, basic, amphoteric, neutral)`, "2026 · 2 Apr · Shift 2; 2026 · 5 Apr · Shift 2"],
    [R`Isoelectronic species and ionic radii`, ""]
  ],
  combo: [R`Periodicity + p-block (inert pair, oxides)`, R`Periodicity + d-block (IE of Cr vs Mn, Zn vs Cu)`, R`Periodicity + redox (oxidation states)`],
  trap: [R`Ga < Al in radius; Cl > F in electron gain enthalpy; B < Be and O < N in IE.`, R`Noble gases have positive electron gain enthalpy.`],
  mist: [R`Assuming IE always rises smoothly across a period.`]
}
});
})();
