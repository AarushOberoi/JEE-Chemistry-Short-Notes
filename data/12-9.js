(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
NB.ch({
n: "12-9", short: "Amines",
intro: R`<b>Big idea:</b> the lone pair on N makes amines <b>bases and nucleophiles</b>. In aniline this lone pair is shared with the ring → weaker base but a very reactive ring. Diazonium salts turn –NH2 into almost any group.`,
sec: [
["Basicity — Why and What Order", [
  KEY([R`More available lone pair → stronger base (larger $K_b$, smaller p$K_b$).`, R`Alkyl groups (+I) push e⁻ → alkylamines > $\ce{NH3}$. Aryl ring pulls the lone pair into resonance → aniline (p$K_b$ 9.38) ≪ $\ce{NH3}$ (4.75).`, R`In water: +I, <b>solvation</b> (H-bonding of the ammonium ion) and <b>steric</b> effects together decide the order.`]),
  T(["Series (aqueous)", "Order"], [["methyl", "(CH3)2NH > CH3NH2 > (CH3)3N > NH3"], ["ethyl", "(C2H5)2NH > (C2H5)3N > C2H5NH2 > NH3"], ["aromatic", "benzylamine > aniline; p-toluidine > aniline > p-nitroaniline"]]),
  P(R`<b>Why is aniline weak?</b> Aniline has 5 resonance structures; anilinium ion only 2 → aniline is more stabilised, so it holds on to its lone pair.`, null, S(s.benz(50, 60, 24, { 0: "NH₂" }) + s.t(85, 64, "↔", 15) + s.benz(145, 60, 24, { 0: "NH₂⁺" }, false) + s.t(158, 94, "⁻", 16) + s.t(180, 64, "↔ … (o, p)", 13) + s.t(30, 122, "lone pair spread into ring → weaker base", 12, 'class="red"'), 280, 130, "Resonance in aniline")),
  J(R`2,6-dimethyl substitution twists –NMe2 out of the ring plane (steric inhibition of resonance), so it couples slower with PhN2⁺. Weakest base gives the strongest conjugate acid.`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 2")
]],
["Preparation: Named Reactions", [
  MAP("Routes to amines", "", [[R`$\ce{H2}$/Pd, Sn/HCl, or <b>Fe/HCl</b>`, "R–NO₂ → R–NH₂", "Fe/HCl preferred: FeCl2 regenerates HCl"], [R`$\ce{NH3}$ (ethanolic), sealed tube`, "R–X → 1°, 2°, 3° + quaternary salt", "ammonolysis; excess NH3 → mainly 1°"], [R`$\ce{LiAlH4}$ or $\ce{H2}$/Ni`, "R–CN → R–CH₂NH₂", "one C more"], [R`$\ce{LiAlH4}$, then $\ce{H2O}$`, "R–CONH₂ → R–CH₂NH₂", "same C"]]),
  RX({ name: "Gabriel Phthalimide Synthesis", eq: R`\ce{\text{phthalimide} ->[KOH] \text{N}^-K^+ ->[R-X] \text{N-alkylphthalimide} ->[NaOH(aq)] R-NH2 + \text{sodium phthalate}}`, reag: "KOH, then alkyl halide, then alkaline hydrolysis", why: "N⁻ attacks R–X by SN2 only once → no over-alkylation", prod: "<b>pure 1° aliphatic amine</b>", note: "Cannot make aromatic amines (aryl halides don't do SN with the phthalimide anion).", ref: "Amides whose Hofmann products can also come from Gabriel (2026 · 6 Apr · Shift 2)" }),
  RX({ name: "Hoffmann Bromamide Degradation", eq: R`\ce{R-CONH2 + Br2 + 4NaOH -> R-NH2 + Na2CO3 + 2NaBr + 2H2O}`, reag: R`$\ce{Br2}$ + NaOH (aqueous or ethanolic)`, why: "R migrates from C=O carbon to N; the C=O carbon leaves as $\\ce{CO3^2-}$", prod: "1° amine with <b>one carbon less</b>", note: "Only 1° amides (–CONH2) react. Benzamide → aniline (not benzylamine). 1 Br2 and 4 NaOH per amide.", ref: "2026 · 5 Apr · Shift 2; 2026 · 8 Apr · Shift 2" })
]],
["Tests & Reactions of Amines", [
  RX({ name: "Carbylamine (Isocyanide) Test", eq: R`\ce{R-NH2 + CHCl3 + 3KOH ->[\Delta] R-NC + 3KCl + 3H2O}`, reag: R`$\ce{CHCl3}$ + alcoholic KOH, heat`, prod: "<b>foul-smelling isocyanide</b> — only 1° amines (aliphatic and aromatic)", ref: "Benzylamine + CHCl3/KOH or benzyl bromide + AgCN → benzyl isocyanide (2026 · 5 Apr · Shift 1)" }),
  RX({ name: "Hinsberg's Test", eq: [R`\ce{RNH2 + C6H5SO2Cl -> C6H5SO2NHR}\ (\text{acidic N–H: dissolves in KOH})`, R`\ce{R2NH + C6H5SO2Cl -> C6H5SO2NR2}\ (\text{no N–H: insoluble})`], reag: "benzenesulphonyl chloride (Hinsberg's reagent)", prod: "1°: soluble in alkali · 2°: insoluble · 3°: no reaction" }),
  MAP("Other reactions", "R–NH₂", [[R`HCl`, "salt RNH₃⁺Cl⁻", "amines dissolve in acid"], [R`R′X`, "2° → 3° → quaternary salt"], [R`$\ce{CH3COCl}$ / pyridine`, "amide (acylation)", "1° and 2° only"], [R`$\ce{C6H5COCl}$`, "benzamide (benzoylation)"], [R`$\ce{HNO2}$ (aliphatic 1°)`, R`R–OH + $\ce{N2}$ ↑`, "quantitative N2: estimates amino acids"], [R`$\ce{HNO2}$, 273–278 K (aromatic 1°)`, R`$\ce{ArN2+Cl-}$`, "diazotisation"]])
]],
["Ring Reactions of Aniline", [
  KEY([R`–NH2: strongest activator, o/p. Problem: too reactive (polysubstitution) and basic (reacts with acids, $\ce{AlCl3}$).`, R`Fix: <b>acetylate</b> first ($\ce{(CH3CO)2O}$) → acetanilide (moderately activating), substitute, then hydrolyse.`]),
  MAP("Aniline: what you get", "C₆H₅NH₂", [[R`$\ce{Br2}$ water`, "2,4,6-tribromoaniline (white ppt)"], [R`$\ce{(CH3CO)2O}$; $\ce{Br2}$; $\ce{H3O+}$`, "p-bromoaniline", "protect → substitute → deprotect"], [R`conc. $\ce{HNO3 + H2SO4}$ (direct)`, "51% p, 47% <b>m</b>, 2% o", "anilinium ion is m-directing"], [R`via acetanilide`, "p-nitroaniline (major)"], [R`conc. $\ce{H2SO4}$, 453–473 K`, "sulphanilic acid (zwitterion)"], [R`$\ce{AlCl3}$ / RX`, "<b>no</b> Friedel–Crafts", "salt formation with AlCl3"]]),
  J(R`Direct nitration gives more m-nitroaniline than o-nitroaniline (47% vs 2%) — true.`, "2026 · 5 Apr · Shift 2")
]],
["Diazonium Salts — The Swiss-Army Knife", [
  RX({ name: "Diazotisation", eq: R`\ce{C6H5NH2 + NaNO2 + 2HCl ->[273-278\,K] C6H5N2+Cl- + NaCl + 2H2O}`, cond: "ice-cold, used immediately", why: "aryl diazonium is stabilised by resonance with the ring; aliphatic ones decompose at once", prod: "benzenediazonium chloride" }),
  MAP("Replacement of –N₂⁺ (N₂ lost)", "C₆H₅N₂⁺Cl⁻", [[R`CuCl/HCl`, "C₆H₅Cl", "<b>Sandmeyer</b>"], [R`CuBr/HBr`, "C₆H₅Br", "Sandmeyer"], [R`CuCN/KCN`, "C₆H₅CN", "Sandmeyer"], [R`Cu/HCl or Cu/HBr`, "C₆H₅Cl / C₆H₅Br", "<b>Gattermann</b>"], [R`KI`, "C₆H₅I", "no Cu needed"], [R`$\ce{HBF4}$, then heat`, "C₆H₅F", "Balz–Schiemann (via ArN2+BF4−)"], [R`$\ce{HBF4}$; then $\ce{NaNO2}$/Cu, heat`, "C₆H₅NO₂"], [R`$\ce{H3PO2}$ or $\ce{CH3CH2OH}$`, "C₆H₆", "removes the N group"], [R`warm $\ce{H2O}$`, "C₆H₅OH"]]),
  RX({ name: "Azo Coupling", eq: [R`\ce{C6H5N2+Cl- + C6H5OH ->[OH^-] p\text{-}HOC6H4N=NC6H5}\ (\text{orange})`, R`\ce{C6H5N2+Cl- + C6H5NH2 ->[H^+] p\text{-}H2NC6H4N=NC6H5}\ (\text{yellow})`], reag: "phenol (mild alkali) or aniline (mild acid)", why: "ArN2⁺ is a weak electrophile; attacks the para position of a strongly activated ring", prod: "azo dyes (–N=N– retained)" }),
  J(R`Aniline → Br2 water → diazotise → HBF4, then NaNO2/Cu, Δ → 1,3,5-tribromo-2-nitrobenzene. Ethylamine + HNO2 gives ethanol + N2, so no azo dye.`, "2026 · 4 Apr · Shift 1; 2026 · 6 Apr · Shift 2"),
  J(R`Diazonium + C2H5OH replaces –N2⁺ by H — used to remove an –NH2 after it has directed substitution.`, "2026 · 2 Apr · Shift 2")
]]
],
pyq: {
  pat: [
    [R`Hoffmann bromamide facts; Gabriel limitations`, "2026 · 5 Apr · Shift 1; 2026 · 6 Apr · Shift 2; 2026 · 8 Apr · Shift 2"],
    [R`Diazonium sequences (Sandmeyer, HBF4, H3PO2/ethanol)`, "2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 1"],
    [R`Basicity orders, steric inhibition of resonance`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 2"],
    [R`Isocyanide preparation; protect–substitute–deprotect + Carius`, "2026 · 2 Apr · Shift 2; 2026 · 5 Apr · Shift 1"]
  ],
  combo: [R`Amines + haloalkanes (AgCN, Gabriel)`, R`Amines + GOC (resonance, steric effects)`, R`Amines + practical tests (Hinsberg, carbylamine, azo dye)`],
  trap: [R`Gabriel → only 1° aliphatic amines.`, R`Hoffmann product has one C less.`],
  mist: [R`Expecting Friedel–Crafts on aniline.`, R`Thinking 3° amines react with Hinsberg's reagent.`]
}
});
})();
