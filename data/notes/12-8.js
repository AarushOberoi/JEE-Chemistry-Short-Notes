(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
NB.ch({
n: "12-8", short: "Aldehydes, Ketones and Carboxylic Acids",
intro: R`<b>Big idea:</b> C=O is polar (C δ+), so nucleophiles add to it. The H on the carbon next to C=O (α-H) is acidic → aldol, haloform. Carboxylic acids are acidic because the carboxylate ion is resonance-stabilised.`,
sec: [
["The Carbonyl Group", [
  KEY([R`Carbonyl C is <b>sp²</b>, planar (≈120°); C=O is polar: $\ce{C=O <-> C+-O-}$.`, R`<b>Aldehydes are more reactive than ketones</b>: less crowding (H vs R) and only one electron-donating R (C stays more δ+).`, R`Aromatic aldehydes/ketones are less reactive than aliphatic (ring resonance reduces δ+ on C).`]),
  T(["Reactivity to Nu⁻ (high → low)", ""], [["HCHO > CH3CHO > CH3COCH3", "more alkyl → less δ+, more crowding"], ["aliphatic > aromatic aldehyde", "resonance with ring"]])
]],
["Preparation: Named Reactions", [
  MAP("Quick routes", "", [[R`PCC; or $\ce{CrO3}$`, "1° alcohol → aldehyde"], [R`$\ce{K2Cr2O7/H+}$`, "2° alcohol → ketone"], [R`Cu or Ag, 573 K`, "alcohol → aldehyde/ketone", "dehydrogenation"], [R`(i) $\ce{O3}$ (ii) Zn/$\ce{H2O}$`, "alkene → aldehydes/ketones", "ozonolysis"], [R`$\ce{HgSO4}$ / dil. $\ce{H2SO4}$, 333 K`, "ethyne → ethanal; others → ketones"]]),
  RX({ name: "Rosenmund Reduction", eq: R`\ce{RCOCl + H2 ->[Pd-BaSO4] RCHO + HCl}`, reag: R`$\ce{H2}$ over Pd on $\ce{BaSO4}$ (poisoned catalyst)`, why: "BaSO4 poisons Pd so the aldehyde is not reduced further to alcohol", prod: "aldehyde (not ketones)" }),
  RX({ name: "Stephen Reaction", eq: R`\ce{RCN + SnCl2 + HCl -> RCH=NH ->[H3O+] RCHO}`, reag: R`$\ce{SnCl2}$ + HCl, then hydrolysis`, prod: "aldehyde from nitrile", note: R`DIBAL-H also reduces nitriles and esters to aldehydes: $\ce{RCN ->[(i) AlH(i-Bu)2][(ii) H2O] RCHO}$.` }),
  RX({ name: "Etard Reaction", eq: R`\ce{C6H5CH3 ->[CrO2Cl2][CS2] C6H5CH(OCrOHCl2)2 ->[H3O+] C6H5CHO}`, reag: "chromyl chloride", why: "forms a chromium complex that stops oxidation at the aldehyde stage", prod: "benzaldehyde" }),
  RX({ name: "Gattermann–Koch Reaction", eq: R`\ce{C6H6 + CO + HCl ->[anhyd.\ AlCl3/CuCl] C6H5CHO}`, reag: R`CO + HCl with anhydrous $\ce{AlCl3}$ / CuCl`, prod: "benzaldehyde", ref: "Gattermann–Koch benzaldehyde + acetophenone → chalcone (2026 · 8 Apr · Shift 2)" }),
  MAP("Toluene → benzaldehyde (three NCERT ways)", "C₆H₅CH₃", [[R`$\ce{CrO2Cl2}$, then $\ce{H3O+}$`, "C₆H₅CHO", "Etard"], [R`$\ce{CrO3}$ in $\ce{(CH3CO)2O}$ → benzylidene diacetate, then $\ce{H3O+}$`, "C₆H₅CHO"], [R`$\ce{Cl2}$/hν → $\ce{C6H5CHCl2}$, then $\ce{H2O}$, 373 K`, "C₆H₅CHO", "commercial"]]),
  MAP("Making ketones", "", [[R`$\ce{2RMgX + CdCl2 -> R2Cd}$; then R′COCl`, "R′COR", "dialkylcadmium"], [R`R′CN + RMgX, then $\ce{H3O+}$`, "R′COR", "nitrile + Grignard"], [R`ArH + RCOCl / anhyd. $\ce{AlCl3}$`, "ArCOR", "Friedel–Crafts acylation"]]),
  J(R`Propyne + HgSO4/H2SO4 → acetone; CH3CN + CH3MgBr → acetone; then Ba(OH)2 aldol + heat → 4-methylpent-3-en-2-one.`, "2026 · 6 Apr · Shift 2")
]],
["Nucleophilic Addition", [
  STEPS("General mechanism", [["Nu⁻ attacks C", R`$\ce{Nu- + R2C=O}$`, "perpendicular to the planar C=O"], ["Tetrahedral alkoxide", R`$\ce{R2C(Nu)-O-}$`, "sp² → sp³"], ["Protonation", R`$\ce{R2C(Nu)-OH}$`, "from H⁺ / solvent"]]),
  MAP("Nucleophilic additions", "R₂C=O", [[R`HCN (base)`, "cyanohydrin R₂C(OH)CN"], [R`$\ce{NaHSO3}$`, "bisulphite adduct (crystalline)", "used to separate/purify carbonyls"], [R`RMgX, then $\ce{H3O+}$`, "alcohol"], [R`R′OH / dry HCl`, "hemiacetal → acetal", "ketone + ethylene glycol → ketal"], [R`$\ce{NH2-Z}$ (pH ≈ 3.5)`, R`$\ce{R2C=N-Z}$ + $\ce{H2O}$`, "addition then elimination"]]),
  T(["$\\ce{NH2-Z}$", "Product"], [["$\\ce{NH2OH}$ hydroxylamine", "oxime"], ["$\\ce{NH2NH2}$ hydrazine", "hydrazone"], ["$\\ce{C6H5NHNH2}$", "phenylhydrazone"], ["2,4-DNP (Brady's reagent)", "2,4-DNP-hydrazone: <b>orange-yellow ppt</b> (test for C=O)"], ["$\\ce{NH2NHCONH2}$ semicarbazide", "semicarbazone (attacks through the free –NH2)"]]),
  J(R`Semicarbazide reacts through the NH2 not attached to C=O; CH3CH=N–NH–CO–NH2. Hemiacetals/acetals give back the aldehyde in dilute acid.`, "2026 · 5 Apr · Shift 2")
]],
["Reduction & Oxidation", [
  RX({ name: "Clemmensen Reduction", eq: R`\ce{R2C=O ->[Zn-Hg][conc.\ HCl] R2CH2 + H2O}`, reag: "zinc amalgam + conc. HCl", prod: "alkane (C=O → CH2)", note: "Use for compounds stable to acid." }),
  RX({ name: "Wolff–Kishner Reduction", eq: R`\ce{R2C=O ->[NH2NH2][-H2O] R2C=NNH2 ->[KOH/\text{ethylene glycol}][\Delta] R2CH2 + N2}`, reag: "hydrazine, then KOH in ethylene glycol, heat", prod: "alkane", note: "Use for compounds stable to base (acid-sensitive)." }),
  RX({ name: "Tollens' Test", eq: R`\ce{RCHO + 2[Ag(NH3)2]+ + 3OH- -> RCOO- + 2Ag v + 2H2O + 4NH3}`, reag: "ammoniacal silver nitrate", prod: "<b>silver mirror</b>: all aldehydes (incl. benzaldehyde); ketones negative" }),
  RX({ name: "Fehling's Test", eq: R`\ce{RCHO + 2Cu^{2+} + 5OH- -> RCOO- + Cu2O v (red-brown) + 3H2O}`, reag: "Fehling A (CuSO4) + Fehling B (Rochelle salt + NaOH)", prod: "red-brown $\\ce{Cu2O}$: <b>aliphatic</b> aldehydes only (not benzaldehyde)" }),
  RX({ name: "Haloform (Iodoform) Reaction", eq: R`\ce{RCOCH3 + 3NaOI -> RCOONa + CHI3 v (yellow) + 2NaOH}`, reag: R`$\ce{I2}$ + NaOH (NaOI)`, why: "the three α-H of CH3CO– are replaced by X, then C–C breaks", prod: "yellow iodoform + acid salt with one C less", note: "Positive for CH3CO– and CH3CH(OH)– (ethanol, acetaldehyde, acetone, propan-2-ol). The C=C, if any, is not attacked." }),
  P(R`<b>Ketone oxidation</b> needs strong oxidants and breaks C–C bonds (mixture of acids with fewer C).`)
]],
["Reactions due to α-Hydrogen", [
  P(R`<b>Why is α-H acidic?</b> Its removal gives an <b>enolate</b> ion stabilised by resonance with C=O.`),
  RX({ name: "Aldol Condensation", eq: R`\ce{2CH3CHO ->[\text{dil. NaOH}] CH3CH(OH)CH2CHO ->[\Delta][-H2O] CH3CH=CHCHO}`, reag: "dilute NaOH (or Ba(OH)2)", why: "enolate of one molecule adds to C=O of another", prod: "β-hydroxy aldehyde (aldol) / ketone (ketol) → α,β-unsaturated carbonyl on heating", mech: [R`$\ce{OH-}$ removes α-H → enolate $\ce{-CH2CHO}$`, R`Enolate attacks C=O of a second $\ce{CH3CHO}$`, R`Protonation → aldol; heat → loses $\ce{H2O}$ (but-2-enal)`], note: "Needs at least one α-H. Acetone gives 4-hydroxy-4-methylpentan-2-one (diacetone alcohol)." }),
  RX({ name: "Cross Aldol & Claisen–Schmidt", eq: R`\ce{C6H5CHO + CH3COCH3 ->[\text{dil. NaOH}] C6H5CH=CHCOCH3}`, why: "two different carbonyls with α-H give 4 products; with one partner lacking α-H (benzaldehyde) the reaction is cleaner", prod: "benzalacetone; with acetophenone → chalcone" }),
  RX({ name: "Cannizzaro Reaction", eq: [R`\ce{2HCHO + conc.\ KOH -> CH3OH + HCOOK}`, R`\ce{2C6H5CHO + conc.\ NaOH -> C6H5CH2OH + C6H5COONa}`], reag: "concentrated alkali", why: "no α-H, so no enolate; OH⁻ adds and a <b>hydride</b> moves to a second molecule", prod: "one molecule → alcohol (reduced), the other → acid salt (oxidised)", note: "Crossed Cannizzaro with HCHO: HCHO is always oxidised (to formate).", ref: "Glyoxal (C:O:H equal, M = 58) + 50% KOH → intramolecular Cannizzaro → glycolic acid (2026 · 2 Apr · Shift 2)" }),
  KEY([R`<b>α-H present</b> → aldol (dilute alkali). <b>No α-H</b> (HCHO, $\ce{C6H5CHO}$, $\ce{(CH3)3CCHO}$) → Cannizzaro (conc. alkali).`, R`–CHO / –COR / –COOH on a ring: <b>deactivating, meta-directing</b>.`]),
  J(R`C8H14 → ozonolysis → dicarbonyl → intramolecular aldol → cyclic enone → iodoform → acid: work backwards.`, "2026 · 5 Apr · Shift 1")
]],
["Carboxylic Acids", [
  MAP("Routes to RCOOH", "", [[R`$\ce{KMnO4}$ / $\ce{K2Cr2O7}$`, "from 1° alcohols, aldehydes"], [R`alk. $\ce{KMnO4}$, then $\ce{H+}$`, "from alkylbenzenes → benzoic acid", "any chain with benzylic H"], [R`$\ce{H3O+}$ or $\ce{OH-}$`, "from nitriles, amides"], [R`$\ce{CO2}$ (dry ice), then $\ce{H3O+}$`, "from RMgX (one C more)"], ["hydrolysis", "from acyl halides, anhydrides, esters"]]),
  P(R`<b>Why acidic?</b> Carboxylate ion has two equivalent resonance forms (both C–O equal). Phenoxide's charge goes onto less electronegative carbons, so RCOOH ≫ phenol.`, null, S(s.t(5, 45, "R–C(=O)–O⁻  ↔  R–C(–O⁻)=O", 14) + s.t(15, 80, "two equal forms → very stable", 12, 'class="red"'), 260, 90, "Carboxylate resonance")),
  P(R`<b>Acidity order (NCERT)</b>: EWG increases, EDG decreases; effect falls with distance.`, [R`\ce{CF3COOH > CCl3COOH > CHCl2COOH > NO2CH2COOH > NCCH2COOH}`, R`\ce{> FCH2COOH > ClCH2COOH > BrCH2COOH > HCOOH > ClCH2CH2COOH}`, R`\ce{> C6H5COOH > C6H5CH2COOH > CH3COOH > CH3CH2COOH}`]),
  MAP("Reactions of RCOOH", "R–COOH", [[R`Na, NaOH, $\ce{NaHCO3}$`, R`salt (+ $\ce{CO2}$ with $\ce{NaHCO3}$)`, "effervescence test"], [R`$\ce{PCl5}$ / $\ce{PCl3}$ / $\ce{SOCl2}$`, "RCOCl"], [R`$\ce{P2O5}$ or conc. $\ce{H2SO4}$, heat`, "anhydride"], [R`R′OH / $\ce{H+}$`, "ester", "reversible esterification"], [R`$\ce{NH3}$, then heat`, "RCONH₂"], [R`$\ce{LiAlH4}$ or $\ce{B2H6}$`, "RCH₂OH", "B2H6 leaves ester, NO2, halo groups"], [R`NaOH + CaO (soda lime), heat`, "R–H", "decarboxylation"]]),
  RX({ name: "Hell–Volhard–Zelinsky (HVZ) Reaction", eq: R`\ce{RCH2COOH ->[(i)\ X2/\text{red P}][(ii)\ H2O] RCH(X)COOH}`, reag: R`$\ce{Cl2}$ or $\ce{Br2}$ with red phosphorus`, why: "only acids with α-H react", prod: "α-halo acid", ref: "Propanenitrile → propanoic acid → HVZ → 2-chloropropanoic acid (2026 · 5 Apr · Shift 2)" }),
  RX({ name: "Kolbe Electrolysis", eq: R`\ce{2RCOONa + 2H2O ->[\text{electrolysis}] R-R + 2CO2 + H2 + 2NaOH}`, prod: "alkane R–R (at anode)" }),
  W(R`Benzoic acid does <b>not</b> give Friedel–Crafts reactions (ring deactivated; $\ce{AlCl3}$ binds to –COOH).`)
]]
],
pyq: {
  pat: [
    [R`Cannizzaro (incl. intramolecular) / aldol sequences`, "2026 · 2 Apr · Shift 2; 2026 · 5 Apr · Shift 1; 2026 · 6 Apr · Shift 2"],
    [R`Named preparations (Gattermann–Koch, Stephen, Etard, Rosenmund)`, "2026 · 8 Apr · Shift 2"],
    [R`Ammonia derivatives; acetal hydrolysis`, "2026 · 5 Apr · Shift 2"],
    [R`HVZ and nitrile hydrolysis`, "2026 · 5 Apr · Shift 2"],
    [R`Bond lengths in esters (resonance)`, "2026 · 6 Apr · Shift 2"]
  ],
  combo: [R`Carbonyls + hydrocarbons (ozonolysis, alkyne hydration)`, R`Carbonyls + tests (Tollens', Fehling's, iodoform, 2,4-DNP)`, R`Carbonyls + amines (imines, reduction)`],
  trap: [R`Fehling's is negative for benzaldehyde.`, R`Methyl acetate: C=O < acyl C–O < O–CH3 (bond length).`],
  mist: [R`Using Clemmensen for acid-sensitive molecules.`, R`Applying aldol to an aldehyde without α-H.`]
}
});
})();
