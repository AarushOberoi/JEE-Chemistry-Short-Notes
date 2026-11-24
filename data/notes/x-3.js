(function () {
const { R, P, T, KEY, J } = NB;
const row = (n, r, p, ch) => [`<b>${n}</b>`, r, p, ch];
NB.ch({
n: "x-3", short: "Named Reactions at a Glance",
intro: R`One-page revision of every NCERT named reaction and test. Full equations, conditions and "why" are in the reaction cards inside each chapter.`,
sec: [
["Hydrocarbons", [
  T(["Reaction", "Reagent / condition", "Product", "Chapter"], [
    row("Wurtz", "R–X + Na, dry ether", "R–R (double C)", "Hydrocarbons, Haloalkanes"),
    row("Kolbe electrolysis", "RCOONa (aq), electrolysis", "R–R at anode", "Hydrocarbons"),
    row("Decarboxylation", "RCOONa + soda lime, Δ", "R–H (one C less)", "Hydrocarbons"),
    row("Free-radical halogenation", "X2, hν", "R–X mixture (3° H fastest)", "Hydrocarbons"),
    row("Markovnikov addition", "HX to unsymmetrical alkene", "X on C with fewer H", "Hydrocarbons"),
    row("Kharash (peroxide) effect", "HBr + (C6H5CO)2O2", "anti-Markovnikov bromide (HBr only)", "Hydrocarbons"),
    row("Ozonolysis", "O3, then Zn/H2O", "aldehydes / ketones", "Hydrocarbons"),
    row("Baeyer's test", "cold dil. alk. KMnO4", "vic-glycol (pink colour lost)", "Hydrocarbons"),
    row("Lindlar hydrogenation", "H2, Pd/C + S or quinoline", "cis-alkene from alkyne", "Hydrocarbons"),
    row("Alkyne hydration", "HgSO4, dil. H2SO4, 333 K", "ethanal / ketones", "Hydrocarbons"),
    row("Cyclic polymerisation", "red-hot Fe tube, 873 K", "benzene from ethyne", "Hydrocarbons"),
    row("Friedel–Crafts alkylation", "RX + anhyd. AlCl3", "alkylbenzene (rearranges)", "Hydrocarbons"),
    row("Friedel–Crafts acylation", "RCOCl + anhyd. AlCl3", "aryl ketone", "Hydrocarbons"),
    row("Aromatisation", "Cr2O3/V2O5/Mo2O3, 773 K", "n-hexane → benzene", "Hydrocarbons")])
]],
["Haloalkanes & Haloarenes", [
  T(["Reaction", "Reagent / condition", "Product", "Chapter"], [
    row("Finkelstein", "NaI, dry acetone", "R–I", "Haloalkanes"),
    row("Swarts", "AgF / Hg2F2 / CoF2 / SbF3", "R–F", "Haloalkanes"),
    row("Sandmeyer", "ArN2⁺ + CuCl/HCl, CuBr/HBr, CuCN", "ArCl, ArBr, ArCN", "Haloalkanes, Amines"),
    row("Gattermann", "ArN2⁺ + Cu/HX", "ArCl, ArBr", "Amines"),
    row("Wurtz–Fittig", "ArX + RX + Na, ether", "Ar–R", "Haloalkanes"),
    row("Fittig", "2ArX + Na, ether", "Ar–Ar", "Haloalkanes"),
    row("Dehydrohalogenation (Zaitsev)", "alc. KOH, Δ", "more substituted alkene", "Haloalkanes"),
    row("Grignard reagent", "R–X + Mg, dry ether", "RMgX", "Haloalkanes"),
    row("Dow process", "C6H5Cl + NaOH, 623 K, 300 atm", "phenol", "Haloalkanes, Alcohols")])
]],
["Alcohols, Phenols & Ethers", [
  T(["Reaction", "Reagent / condition", "Product", "Chapter"], [
    row("Hydroboration–oxidation", "B2H6; H2O2/OH⁻", "anti-Markovnikov alcohol", "Alcohols"),
    row("Lucas test", "conc. HCl + anhyd. ZnCl2", "3° instant, 2° ~5 min, 1° none", "Alcohols"),
    row("Cumene process", "cumene + O2; H⁺/H2O", "phenol + acetone", "Alcohols"),
    row("Kolbe's reaction", "C6H5ONa + CO2; H⁺", "salicylic acid", "Alcohols"),
    row("Reimer–Tiemann", "phenol + CHCl3 + aq. NaOH", "salicylaldehyde", "Alcohols"),
    row("Williamson synthesis", "RO⁻Na⁺ + 1° R′X", "ether R–O–R′", "Alcohols"),
    row("Ether cleavage", "HI (excess, Δ)", "alkyl iodide + alcohol/phenol", "Alcohols"),
    row("Esterification", "RCOOH + R′OH, conc. H2SO4", "ester", "Alcohols, Acids")])
]],
["Aldehydes, Ketones & Acids", [
  T(["Reaction", "Reagent / condition", "Product", "Chapter"], [
    row("Rosenmund", "RCOCl + H2, Pd–BaSO4", "RCHO", "Carbonyls"),
    row("Stephen", "RCN + SnCl2/HCl; H3O⁺", "RCHO", "Carbonyls"),
    row("DIBAL-H reduction", "RCN or ester + DIBAL-H; H2O", "RCHO", "Carbonyls"),
    row("Etard", "toluene + CrO2Cl2; H3O⁺", "benzaldehyde", "Carbonyls"),
    row("Gattermann–Koch", "C6H6 + CO + HCl, AlCl3/CuCl", "benzaldehyde", "Carbonyls"),
    row("Dialkylcadmium", "R2Cd + R′COCl", "ketone", "Carbonyls"),
    row("Clemmensen", "Zn–Hg + conc. HCl", "C=O → CH2", "Carbonyls"),
    row("Wolff–Kishner", "NH2NH2; KOH/ethylene glycol, Δ", "C=O → CH2", "Carbonyls"),
    row("Aldol condensation", "dil. NaOH (α-H needed)", "β-hydroxy carbonyl → enal/enone", "Carbonyls"),
    row("Claisen–Schmidt (cross aldol)", "ArCHO + ketone, dil. NaOH", "α,β-unsaturated ketone", "Carbonyls"),
    row("Cannizzaro", "conc. NaOH/KOH (no α-H)", "alcohol + acid salt", "Carbonyls"),
    row("Haloform (iodoform)", "I2 + NaOH", "CHI3 (yellow) + RCOONa", "Carbonyls"),
    row("Tollens' test", "[Ag(NH3)2]⁺", "silver mirror (aldehydes)", "Carbonyls"),
    row("Fehling's test", "Cu²⁺ tartrate, OH⁻", "red Cu2O (aliphatic aldehydes)", "Carbonyls"),
    row("Hell–Volhard–Zelinsky", "X2 + red P; H2O", "α-halo acid", "Carbonyls"),
    row("Kolbe electrolysis", "RCOONa (aq)", "R–R", "Carbonyls")])
]],
["Amines", [
  T(["Reaction", "Reagent / condition", "Product", "Chapter"], [
    row("Gabriel phthalimide", "phthalimide + KOH; RX; NaOH(aq)", "1° aliphatic amine", "Amines"),
    row("Hoffmann bromamide", "RCONH2 + Br2 + 4NaOH", "RNH2 (one C less)", "Amines"),
    row("Ammonolysis", "RX + NH3 (ethanolic), sealed tube", "1°, 2°, 3° amines + quaternary salt", "Amines"),
    row("Carbylamine test", "1° amine + CHCl3 + alc. KOH", "isocyanide (foul smell)", "Amines"),
    row("Hinsberg test", "C6H5SO2Cl", "1° soluble in KOH, 2° insoluble, 3° none", "Amines"),
    row("Diazotisation", "ArNH2 + NaNO2/HCl, 273–278 K", "ArN2⁺Cl⁻", "Amines"),
    row("Balz–Schiemann", "ArN2⁺ + HBF4, Δ", "ArF", "Amines"),
    row("Azo coupling", "ArN2⁺ + phenol (OH⁻) / aniline (H⁺)", "azo dye (orange / yellow)", "Amines")])
]],
["Shortcuts", [
  KEY([R`<b>One C more</b>: R–X + KCN then reduce/hydrolyse; RMgX + CO2. <b>One C less</b>: Hoffmann bromamide, decarboxylation, haloform. <b>Double C</b>: Wurtz, Kolbe electrolysis.`, R`<b>C=O → CH2</b>: Clemmensen (acid) or Wolff–Kishner (base). <b>C=O → CH–OH</b>: NaBH4 / LiAlH4.`, R`<b>Aldehyde-only tests</b>: Tollens' (all aldehydes), Fehling's (aliphatic only). <b>CH3CO– test</b>: iodoform.`, R`<b>Ring + –CHO</b>: Etard, Gattermann–Koch, Reimer–Tiemann (on phenol), Stephen/Rosenmund (from –CN / –COCl).`], "Smart memory hooks")
]]
],
pyq: {}
});
})();
