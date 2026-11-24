(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
NB.ch({
n: "12-6", short: "Haloalkanes and Haloarenes",
intro: R`<b>Big idea:</b> C–X is polar (C is δ+), so nucleophiles attack that carbon. Haloalkanes → <b>substitution (SN1/SN2)</b> or <b>elimination</b>. Haloarenes resist this (C–X has double-bond character) and prefer <b>electrophilic substitution</b> at o/p.`,
sec: [
["Basics in 60 Seconds", [
  T(["Type", "X attached to", "Example"], [["alkyl (1°, 2°, 3°)", "sp³ C", "CH3CH2Cl, (CH3)3CCl"], ["allylic", "sp³ C next to C=C", "CH2=CH–CH2Cl"], ["benzylic", "sp³ C next to ring", "C6H5CH2Cl"], ["vinylic", "sp² C of C=C", "CH2=CHCl"], ["aryl", "sp² C of ring", "C6H5Cl"]]),
  KEY([R`Bond strength C–F > C–Cl > C–Br > C–I, so reactivity <b>R–I > R–Br > R–Cl > R–F</b>.`, R`B.p. rises with size of X and chain length; falls with branching. Density: iodides > bromides > chlorides.`, R`p-Dichlorobenzene has the <b>highest m.p.</b> of the three isomers (symmetry → better packing).`]),
  J(R`B.p. CH3CH2CH2I > CH3CH2I > CH3I; p-dichlorobenzene: higher m.p. but lower b.p. than o-isomer.`, "2026 · 8 Apr · Shift 2")
]],
["Preparation: Named Reactions", [
  MAP("Making R–X", "R–OH", [[R`conc. HCl + anhyd. ZnCl2`, "R–Cl", "Lucas reagent; 3° fastest"], [R`PCl5 / PCl3`, "R–Cl", ""], [R`SOCl2 (pyridine)`, "R–Cl (pure)", "SO2 and HCl escape as gases"], [R`red P + Br2 / I2`, "R–Br / R–I", "PBr3/PI3 made in situ"]]),
  W(R`Phenol <b>cannot</b> be converted to chlorobenzene with HCl/SOCl2/PCl5 — the Ar–OH bond has partial double-bond character.`),
  RX({ name: "Finkelstein Reaction", eq: R`\ce{R-X + NaI ->[\text{dry acetone}] R-I + NaX v}\quad (X = Cl, Br)`, reag: "NaI", cond: "dry acetone", why: "NaCl/NaBr are insoluble in acetone and precipitate → equilibrium pulled forward (Le Chatelier)", prod: "alkyl iodide" }),
  RX({ name: "Swarts Reaction", eq: R`\ce{CH3Br + AgF -> CH3F + AgBr}`, reag: "AgF, Hg2F2, CoF2 or SbF3", cond: "heat", why: "metal fluoride exchanges Cl/Br for F", prod: "alkyl fluoride", note: "Freon-12 (CCl2F2) is made from CCl4 by Swarts reaction." }),
  RX({ name: "Sandmeyer Reaction", eq: [R`\ce{C6H5NH2 ->[NaNO2 + HCl][273-278\,K] C6H5N2+Cl-}`, R`\ce{C6H5N2+Cl- ->[CuCl/HCl] C6H5Cl + N2}\qquad \ce{->[CuBr/HBr] C6H5Br}`], reag: "Cu(I) halide in HX", cond: "cold diazotisation first", why: "Cu⁺ helps replace –N2⁺ (excellent leaving group, N2 gas)", prod: "aryl chloride/bromide", note: R`Iodide needs no copper: $\ce{ArN2+ + KI -> ArI + N2 + KCl}$. Gattermann variant uses Cu powder + HX.` }),
  P(R`<b>From arenes</b>: $\ce{C6H6 + Cl2 ->[Fe \text{ or } FeCl3][\text{dark, cold}] C6H5Cl}$ (o- and p- forms when ring already substituted). <b>From alkenes</b>: HX (Markovnikov), HBr + peroxide (anti-Markovnikov), X2 → vic-dihalide.`),
  J(R`Match: Finkelstein — NaI; Swarts — SbF3; Sandmeyer — Cu2Cl2; Fittig — Na/dry ether.`, "2026 · 4 Apr · Shift 1")
]],
["SN2 vs SN1 — The Core Mechanisms", [
  STEPS("SN2 (one step, back-side attack)", [["Nu⁻ approaches from the back", R`$\ce{HO- + CH3-Cl}$`, "opposite to Cl"], ["Transition state", R`$[\ce{HO\cdots C \cdots Cl}]^-$`, "C has 5 partial bonds"], ["Inversion", R`$\ce{HO-CH3 + Cl-}$`, "like an umbrella flipping"]]),
  STEPS("SN1 (two steps, via carbocation)", [["Slow ionisation", R`$\ce{(CH3)3C-Br -> (CH3)3C+ + Br-}$`, "rate-determining"], ["Fast attack", R`$\ce{(CH3)3C+ + OH- -> (CH3)3C-OH}$`, "from either face → racemisation"]]),
  T(["", "SN2", "SN1"], [["rate law", "k[RX][Nu⁻] (2nd order)", "k[RX] (1st order)"], ["reactivity", "CH3X > 1° > 2° > 3° (crowding)", "3° > 2° > 1° (carbocation stability)"], ["stereochemistry", "<b>inversion</b>", "<b>racemisation</b>"], ["favoured by", "strong Nu, polar aprotic solvent", "weak Nu, polar protic solvent"], ["allylic / benzylic", "fast", "very fast (resonance-stabilised cation)"]]),
  KEY([R`<b>Why SN1 likes 3°</b>: more alkyl groups → more +I and hyperconjugation → more stable carbocation.`, R`<b>Why SN2 hates 3°</b>: bulky groups block the back-side path of Nu⁻.`, R`<b>Ambident nucleophiles</b>: KCN → R–CN, but <b>AgCN → R–NC</b>; KNO2 → R–O–N=O, but <b>AgNO2 → R–NO2</b> (Ag⁺ salts are covalent; the other atom attacks).`]),
  J(R`Benzyl chloride is faster than ethyl chloride in SN1 (resonance vs hyperconjugation). SN1 order: C6H5CHCl–C6H5 > C6H5CH2Cl.`, "2026 · 2 Apr · Shift 1; 2026 · 2 Apr · Shift 2"),
  P(R`<b>Optical activity terms</b>: chiral C has 4 different groups; enantiomers = non-superimposable mirror images; racemic mixture (50:50) is optically inactive.`)
]],
["Elimination & Metal Reactions", [
  RX({ name: "Dehydrohalogenation (β-Elimination) — Zaitsev Rule", eq: R`\ce{CH3CH2CHBrCH3 ->[\text{alc. KOH}][\Delta] \underset{\text{major (80\%)}}{CH3CH=CHCH3} + \underset{\text{minor}}{CH3CH2CH=CH2}}`, reag: "alcoholic KOH (ethoxide = strong base)", why: "more substituted alkene is more stable (hyperconjugation)", prod: "alkene; more substituted alkene is major" }),
  KEY([R`<b>Aqueous KOH</b> → substitution (alcohol). <b>Alcoholic KOH</b> → elimination (alkene).`, R`1° halide → SN2; 3° halide + strong base → elimination.`], "Substitution or elimination?"),
  RX({ name: "Grignard Reagent", eq: [R`\ce{R-X + Mg ->[\text{dry ether}] R-MgX}`, R`\ce{R-MgX + H2O -> R-H + Mg(OH)X}`], reag: "Mg turnings", cond: "absolutely dry ether", why: "C–Mg is polar with C δ−, so R behaves like a carbanion and grabs any H⁺", prod: "RMgX (later makes alcohols, acids, alkanes)", note: "Even traces of water, alcohol or NH3 destroy it.", ref: "RMgI + water → CH4 → CH3I → Wurtz → C2H6 (2026 · 5 Apr · Shift 2)" }),
  RX({ name: "Wurtz Reaction", eq: R`\ce{2CH3Br + 2Na ->[\text{dry ether}] CH3-CH3 + 2NaBr}`, reag: "Na", cond: "dry ether", prod: "alkane with double the carbon atoms", note: "Good only for symmetrical (even-C) alkanes; two different halides give a mixture." }),
  RX({ name: "Wurtz–Fittig and Fittig Reactions", eq: [R`\ce{C6H5Cl + CH3Cl + 2Na ->[\text{ether}] C6H5CH3 + 2NaCl}`, R`\ce{2C6H5Cl + 2Na ->[\text{ether}] C6H5-C6H5 + 2NaCl}`], reag: "Na", cond: "dry ether", prod: "alkylbenzene (Wurtz–Fittig); biphenyl (Fittig)" })
]],
["Haloarenes", [
  KEY([R`<b>Why less reactive to Nu⁻?</b> (1) Resonance gives C–X partial double bond. (2) sp² C–X is shorter, stronger. (3) Phenyl cation is unstable (no SN1). (4) π-cloud repels Nu⁻.`, R`<b>–NO2 at o/p speeds up</b> substitution (stabilises the negative intermediate); at meta, no effect.`]),
  RX({ name: "Dow Process (Cl → OH)", eq: [R`\ce{C6H5Cl + NaOH ->[623\,K][300\,atm] C6H5ONa ->[H+] C6H5OH}`, R`\ce{\text{2,4,6-trinitrochlorobenzene} ->[\text{warm } H2O] \text{picric acid}}`], cond: "very harsh unless –NO2 groups at o/p", prod: "phenol" }),
  MAP("Electrophilic substitution of chlorobenzene (o/p, deactivated)", "C₆H₅Cl", [[R`Cl2 / anhyd. FeCl3`, "1,2- + 1,4-dichlorobenzene"], [R`conc. HNO3 + H2SO4`, "o- + p-nitrochlorobenzene", "p major"], [R`conc. H2SO4`, "o- + p-chlorobenzenesulphonic acid"], [R`CH3Cl / anhyd. AlCl3`, "o- + p-chlorotoluene"], [R`CH3COCl / anhyd. AlCl3`, "o- + p-chloroacetophenone"]]),
  P(R`<b>Why o/p though deactivating?</b> −I of Cl removes electron density (slower than benzene), but +R puts lone-pair density at o and p, so those positions are attacked.`)
]],
["Polyhalogen Compounds", [
  T(["Compound", "Use", "Watch out"], [["CH2Cl2", "solvent, paint remover", "affects CNS"], ["CHCl3", "solvent (earlier anaesthetic)", "air + light → <b>phosgene COCl2</b>: store in dark, filled bottles"], ["CHI3 (iodoform)", "antiseptic (releases I2)", "objectionable smell"], ["CCl4", "solvent, refrigerant feedstock", "ozone depletion"], ["Freons (CFCs)", "refrigerants, aerosol propellants", "destroy ozone"], ["DDT", "insecticide (malaria, typhus)", "not biodegradable; accumulates in fat"]])
]]
],
pyq: {
  pat: [
    [R`Match named reactions with reagents (Finkelstein, Swarts, Sandmeyer, Fittig)`, "2026 · 4 Apr · Shift 1"],
    [R`SN1/SN2 reactivity orders and reasons`, "2026 · 2 Apr · Shift 1; 2026 · 2 Apr · Shift 2"],
    [R`Grignard + water, then Wurtz chain`, "2026 · 5 Apr · Shift 2"],
    [R`Physical property trends of halides`, "2026 · 8 Apr · Shift 2"]
  ],
  combo: [R`Haloalkanes + amines (AgCN → isocyanide; Gabriel)`, R`Haloalkanes + hydrocarbons (Wurtz, dehydrohalogenation)`, R`Haloalkanes + GOC (carbocation stability)`],
  trap: [R`AgCN gives isocyanide; KCN gives cyanide.`, R`Vinyl and aryl halides do not undergo SN1/SN2 easily.`],
  mist: [R`Using aqueous KOH to make alkenes.`, R`Making ArI by Sandmeyer with CuI (KI alone works).`]
}
});
})();
