(function () {
const { R, P, T, KEY } = NB;
const H = ["Reaction", "Condition / key point"];
const tb = rows => T(H, rows);
NB.ch({
n: "r-1", short: "Reactions",
intro: R`All important reactions in one place, arranged by compound type. Each row: the balanced/representative equation and the one condition or fact you must remember. Use the search box (/) to find any reagent or product.`,
sec: [
["1. Alkanes", [
  tb([
    [R`$\ce{CH2=CH2 + H2 ->[Pt/Pd/Ni] CH3CH3}$`, "hydrogenation (Pt/Pd room T; Ni higher T, P)"],
    [R`$\ce{CH3Cl + H2 ->[Zn/HCl] CH4 + HCl}$`, "reduction of alkyl halides"],
    [R`$\ce{2CH3Br + 2Na ->[dry ether] C2H6 + 2NaBr}$`, "Wurtz: even-C symmetrical alkanes"],
    [R`$\ce{CH3COONa + NaOH ->[CaO][\Delta] CH4 + Na2CO3}$`, "soda-lime decarboxylation: one C less"],
    [R`$\ce{2CH3COONa + 2H2O -> C2H6 + 2CO2 + H2 + 2NaOH}$`, "Kolbe electrolysis (alkane at anode)"],
    [R`$\ce{CH4 + Cl2 ->[h\nu] CH3Cl + HCl}$`, "free-radical substitution; 3° H > 2° > 1°"],
    [R`$\ce{CH4 + 2O2 -> CO2 + 2H2O}$`, R`combustion; general: $\ce{C_nH_{2n+2} + \frac{3n+1}{2}O2}$`],
    [R`$\ce{2CH4 + O2 ->[Cu][523\,K,\ 100\,atm] 2CH3OH}$`, "controlled oxidation"],
    [R`$\ce{CH4 + O2 ->[Mo2O3] HCHO + H2O}$`, "controlled oxidation"],
    [R`$\ce{(CH3)3CH ->[KMnO4] (CH3)3COH}$`, "3° C–H oxidised"],
    [R`$\ce{CH3(CH2)4CH3 ->[anhyd. AlCl3/HCl] \text{branched isomers}}$`, "isomerisation"],
    [R`$\ce{C6H14 ->[Cr2O3/V2O5/Mo2O3][773\,K,\ 10-20\,atm] C6H6 + 4H2}$`, "aromatisation (reforming)"],
    [R`$\ce{CH4 + H2O ->[Ni][1273\,K] CO + 3H2}$`, "steam reaction"],
    [R`$\ce{C12H26 ->[973\,K][Pt/Pd/Ni] C7H16 + C5H10 + \dots}$`, "pyrolysis / cracking"]])
]],
["2. Alkenes", [
  tb([
    [R`$\ce{RC#CR ->[H2][Pd/C,\ quinoline] \textit{cis}\text{-}RCH=CHR}$`, "Lindlar's catalyst → cis"],
    [R`$\ce{RC#CR ->[Na/liq.\ NH3] \textit{trans}\text{-}RCH=CHR}$`, "dissolving-metal reduction → trans"],
    [R`$\ce{CH3CH2Br ->[alc.\ KOH][\Delta] CH2=CH2 + KBr + H2O}$`, "dehydrohalogenation (Zaitsev)"],
    [R`$\ce{CH2Br-CH2Br + Zn -> CH2=CH2 + ZnBr2}$`, "dehalogenation of vic-dihalide"],
    [R`$\ce{C2H5OH ->[conc.\ H2SO4][443\,K] CH2=CH2 + H2O}$`, "acidic dehydration"],
    [R`$\ce{CH2=CH2 + Br2 ->[CCl4] CH2Br-CH2Br}$`, "red-brown colour lost: test for C=C"],
    [R`$\ce{CH3CH=CH2 + HBr -> CH3CHBrCH3}$`, "Markovnikov (2° carbocation)"],
    [R`$\ce{CH3CH=CH2 + HBr ->[(C6H5CO)2O2] CH3CH2CH2Br}$`, "Kharash / peroxide effect (HBr only)"],
    [R`$\ce{CH2=CH2 + H2SO4 -> CH3CH2OSO3H}$`, "cold conc. H2SO4; hydrolysis gives alcohol"],
    [R`$\ce{CH3CH=CH2 + H2O ->[H+] CH3CH(OH)CH3}$`, "acid-catalysed hydration (Markovnikov)"],
    [R`$\ce{CH2=CH2 + H2O + [O] ->[\text{cold dil. alk. } KMnO4] HOCH2CH2OH}$`, "Baeyer's test (pink colour lost)"],
    [R`$\ce{CH3CH=CHCH3 ->[KMnO4/H+] 2CH3COOH}$`, "hot acidic permanganate cleaves C=C"],
    [R`$\ce{CH3CH=CH2 ->[(i) O3][(ii) Zn/H2O] CH3CHO + HCHO}$`, "ozonolysis locates C=C"],
    [R`$\ce{n CH2=CH2 ->[\text{high } T, P][\text{catalyst}] (-CH2-CH2-)_n}$`, "polymerisation → polythene"]])
]],
["3. Alkynes", [
  tb([
    [R`$\ce{CaC2 + 2H2O -> HC#CH + Ca(OH)2}$`, "preparation of ethyne"],
    [R`$\ce{CH2Br-CH2Br ->[alc.\ KOH] CH2=CHBr ->[NaNH2] HC#CH}$`, "from vic-dihalide"],
    [R`$\ce{HC#CH + 2Na -> NaC#CNa + H2}$; $\ce{HC#CH + NaNH2 -> HC#CNa + NH3}$`, "terminal H is acidic"],
    [R`$\ce{HC#CH + 2H2 ->[Pt/Pd/Ni] CH3CH3}$`, "complete hydrogenation"],
    [R`$\ce{HC#CH + 2Br2 -> CHBr2-CHBr2}$`, "test for unsaturation"],
    [R`$\ce{CH3C#CH + 2HBr -> CH3CBr2CH3}$`, "Markovnikov, gem-dihalide"],
    [R`$\ce{HC#CH + H2O ->[HgSO4/H2SO4][333\,K] CH3CHO}$`, "via enol; propyne gives acetone"],
    [R`$\ce{3HC#CH ->[\text{red-hot Fe tube}][873\,K] C6H6}$`, "cyclic polymerisation"]])
]],
["4. Benzene & Arenes", [
  tb([
    [R`$\ce{C6H5COONa + NaOH ->[CaO][\Delta] C6H6 + Na2CO3}$`, "decarboxylation"],
    [R`$\ce{C6H5OH + Zn ->[\Delta] C6H6 + ZnO}$`, "reduction of phenol"],
    [R`$\ce{C6H6 + HNO3 ->[conc.\ H2SO4] C6H5NO2 + H2O}$`, R`nitration; electrophile $\ce{NO2+}$`],
    [R`$\ce{C6H6 + Cl2 ->[\text{anhyd. } FeCl3][\text{dark, cold}] C6H5Cl + HCl}$`, "halogenation"],
    [R`$\ce{C6H6 + H2SO4(SO3) -> C6H5SO3H + H2O}$`, "sulphonation (fuming H2SO4)"],
    [R`$\ce{C6H6 + CH3Cl ->[\text{anhyd. } AlCl3] C6H5CH3 + HCl}$`, "Friedel–Crafts alkylation (rearranges, polyalkylates)"],
    [R`$\ce{C6H6 + CH3COCl ->[\text{anhyd. } AlCl3] C6H5COCH3 + HCl}$`, "Friedel–Crafts acylation"],
    [R`$\ce{C6H6 + 3H2 ->[Ni][\text{high } T, P] C6H12}$`, "addition under harsh conditions"],
    [R`$\ce{C6H6 + 3Cl2 ->[UV][500\,K] C6H6Cl6}$`, "benzene hexachloride (BHC)"],
    [R`$\ce{C6H5CH3 ->[\text{alk. } KMnO4][\text{then } H+] C6H5COOH}$`, "side-chain oxidation (benzylic H needed)"]])
]],
["5. Haloalkanes & Haloarenes", [
  tb([
    [R`$\ce{ROH + HCl ->[ZnCl2] RCl + H2O}$`, "Lucas reagent; 3° > 2° > 1°"],
    [R`$\ce{ROH + SOCl2 -> RCl + SO2 ^ + HCl ^}$`, "best: gaseous by-products"],
    [R`$\ce{3ROH + PCl3 -> 3RCl + H3PO3}$; $\ce{ROH + PCl5 -> RCl + POCl3 + HCl}$`, "phosphorus halides"],
    [R`$\ce{RX + NaI ->[\text{dry acetone}] RI + NaX v}$`, "Finkelstein"],
    [R`$\ce{CH3Br + AgF -> CH3F + AgBr}$`, "Swarts (also Hg2F2, CoF2, SbF3)"],
    [R`$\ce{ArN2+Cl- ->[CuCl/HCl] ArCl + N2}$; $\ce{->[CuBr/HBr] ArBr}$`, "Sandmeyer"],
    [R`$\ce{ArN2+Cl- + KI -> ArI + KCl + N2}$`, "no Cu needed"],
    [R`$\ce{RX + KOH(aq) -> ROH + KX}$`, "substitution"],
    [R`$\ce{RX + KCN -> RCN}$; $\ce{RX + AgCN -> RNC}$`, "ambident CN⁻"],
    [R`$\ce{RX + KNO2 -> R-O-N=O}$; $\ce{RX + AgNO2 -> R-NO2}$`, "ambident NO2⁻"],
    [R`$\ce{RX + R'ONa -> ROR' + NaX}$`, "Williamson ether synthesis"],
    [R`$\ce{RX + NH3 -> RNH2 + HX}$`, "ammonolysis"],
    [R`$\ce{RX + LiAlH4 -> RH}$`, "reduction"],
    [R`$\ce{CH3CH2CHBrCH3 ->[alc.\ KOH] CH3CH=CHCH3 (major)}$`, "Zaitsev elimination"],
    [R`$\ce{RX + Mg ->[dry ether] RMgX}$; $\ce{RMgX + H2O -> RH + Mg(OH)X}$`, "Grignard reagent"],
    [R`$\ce{ArX + RX + 2Na ->[ether] Ar-R + 2NaX}$`, "Wurtz–Fittig"],
    [R`$\ce{2ArX + 2Na ->[ether] Ar-Ar + 2NaX}$`, "Fittig"],
    [R`$\ce{C6H5Cl + NaOH ->[623\,K][300\,atm] C6H5ONa ->[H+] C6H5OH}$`, "Dow process"],
    [R`$\ce{2CHCl3 + O2 ->[\text{light}] 2COCl2 + 2HCl}$`, "phosgene: store CHCl3 in dark bottles"]])
]],
["6. Alcohols", [
  tb([
    [R`$\ce{CH3CH=CH2 ->[(i) B2H6][(ii) H2O2/OH-] CH3CH2CH2OH}$`, "hydroboration–oxidation: anti-Markovnikov"],
    [R`$\ce{RCHO ->[NaBH4 \text{ or } LiAlH4] RCH2OH}$; $\ce{R2CO -> R2CHOH}$`, "reduction of carbonyls"],
    [R`$\ce{RCOOH ->[(i) LiAlH4][(ii) H2O] RCH2OH}$`, "reduction of acids"],
    [R`$\ce{HCHO + RMgX ->[H3O+] RCH2OH}$ (1°)`, "aldehydes → 2°, ketones → 3°"],
    [R`$\ce{2ROH + 2Na -> 2RONa + H2}$`, "acidic nature"],
    [R`$\ce{ROH + R'COOH <=>[conc.\ H2SO4] R'COOR + H2O}$`, "esterification (reversible)"],
    [R`$\ce{ROH + R'COCl ->[pyridine] R'COOR + HCl}$`, "pyridine removes HCl"],
    [R`$\ce{C2H5OH ->[conc.\ H2SO4][443\,K] C2H4}$; $\ce{2C2H5OH ->[413\,K] C2H5OC2H5}$`, "alkene vs ether by temperature"],
    [R`$\ce{RCH2OH ->[PCC] RCHO}$; $\ce{->[KMnO4] RCOOH}$`, "1° oxidation"],
    [R`$\ce{R2CHOH ->[CrO3] R2CO}$`, "2° oxidation"],
    [R`$\ce{RCH2OH ->[Cu][573\,K] RCHO + H2}$; $\ce{(CH3)3COH ->[Cu][573\,K] (CH3)2C=CH2}$`, "dehydrogenation; 3° dehydrates"],
    [R`$\ce{CO + 2H2 ->[ZnO-Cr2O3][\text{high } T, P] CH3OH}$`, "methanol"],
    [R`$\ce{C12H22O11 + H2O ->[invertase] C6H12O6 + C6H12O6}$; $\ce{C6H12O6 ->[zymase] 2C2H5OH + 2CO2}$`, "ethanol by fermentation"]])
]],
["7. Phenols", [
  tb([
    [R`$\ce{C6H5SO3H ->[(i) NaOH][(ii) H+] C6H5OH}$`, "from benzenesulphonic acid"],
    [R`$\ce{C6H5N2+Cl- + H2O ->[warm] C6H5OH + N2 + HCl}$`, "from diazonium salt"],
    [R`$\ce{C6H5CH(CH3)2 ->[O2] C6H5C(CH3)2OOH ->[H+][H2O] C6H5OH + CH3COCH3}$`, "cumene process"],
    [R`$\ce{C6H5OH + NaOH -> C6H5ONa + H2O}$`, "phenol is acidic (no reaction with NaHCO3)"],
    [R`$\ce{C6H5OH ->[\text{dil. } HNO3][298\,K] \textit{o}- + \textit{p}\text{-nitrophenol}}$`, "o-isomer steam volatile"],
    [R`$\ce{C6H5OH ->[\text{conc. } HNO3] \text{2,4,6-trinitrophenol}}$`, "picric acid"],
    [R`$\ce{C6H5OH + 3Br2(aq) -> \text{2,4,6-tribromophenol} v + 3HBr}$`, "white ppt; in CS2/CHCl3 → mono"],
    [R`$\ce{C6H5ONa ->[(i) CO2][(ii) H+] \textit{o}\text{-HOC6H4COOH}}$`, "Kolbe's reaction → salicylic acid"],
    [R`$\ce{C6H5OH ->[CHCl3/NaOH][\text{then } H+] \textit{o}\text{-HOC6H4CHO}}$`, "Reimer–Tiemann → salicylaldehyde"],
    [R`$\ce{C6H5OH ->[Na2Cr2O7/H2SO4] \text{benzoquinone}}$`, "oxidation"]])
]],
["8. Ethers", [
  tb([
    [R`$\ce{2C2H5OH ->[conc.\ H2SO4][413\,K] C2H5OC2H5 + H2O}$`, "1° alcohols only"],
    [R`$\ce{(CH3)3CONa + C2H5Br -> (CH3)3COC2H5}$`, "Williamson (1° halide!)"],
    [R`$\ce{(CH3)3CBr + CH3ONa -> (CH3)2C=CH2}$`, "3° halide → only alkene"],
    [R`$\ce{CH3OC2H5 + HI -> CH3I + C2H5OH}$`, "I⁻ attacks smaller alkyl (SN2)"],
    [R`$\ce{C6H5OCH3 + HI -> C6H5OH + CH3I}$`, "aryl ethers → phenol"],
    [R`$\ce{(CH3)3COCH3 + HI -> (CH3)3CI + CH3OH}$`, "3° alkyl → SN1"],
    [R`$\ce{C6H5OCH3 ->[Br2/CH3COOH] \textit{p}\text{-BrC6H4OCH3}}$`, "anisole: no FeBr3 needed"]])
]],
["9. Aldehydes & Ketones", [
  tb([
    [R`$\ce{RCOCl + H2 ->[Pd-BaSO4] RCHO + HCl}$`, "Rosenmund"],
    [R`$\ce{RCN + SnCl2 + HCl -> RCH=NH ->[H3O+] RCHO}$`, "Stephen"],
    [R`$\ce{RCN ->[(i) DIBAL-H][(ii) H2O] RCHO}$`, "also esters → aldehydes"],
    [R`$\ce{C6H5CH3 ->[CrO2Cl2][CS2] ->[H3O+] C6H5CHO}$`, "Etard"],
    [R`$\ce{C6H5CH3 ->[CrO3/(CH3CO)2O] C6H5CH(OCOCH3)2 ->[H3O+] C6H5CHO}$`, "benzylidene diacetate"],
    [R`$\ce{C6H5CH3 ->[Cl2/h\nu] C6H5CHCl2 ->[H2O][373\,K] C6H5CHO}$`, "side-chain chlorination"],
    [R`$\ce{C6H6 + CO + HCl ->[\text{anhyd. } AlCl3/CuCl] C6H5CHO}$`, "Gattermann–Koch"],
    [R`$\ce{2RMgX + CdCl2 -> R2Cd}$; $\ce{R2Cd + 2R'COCl -> 2R'COR + CdCl2}$`, "ketones via dialkylcadmium"],
    [R`$\ce{RCN + R'MgX ->[H3O+] RCOR'}$`, "ketones from nitriles"],
    [R`$\ce{R2C=O + HCN ->[OH-] R2C(OH)CN}$`, "cyanohydrin"],
    [R`$\ce{R2C=O + NaHSO3 -> R2C(OH)SO3Na}$`, "crystalline adduct; separation"],
    [R`$\ce{RCHO + 2R'OH ->[\text{dry } HCl] RCH(OR')2}$`, "hemiacetal → acetal"],
    [R`$\ce{R2C=O + H2N-Z -> R2C=N-Z + H2O}$`, "oxime, hydrazone, 2,4-DNP, semicarbazone (pH 3.5)"],
    [R`$\ce{R2C=O ->[Zn-Hg/conc.\ HCl] R2CH2}$`, "Clemmensen"],
    [R`$\ce{R2C=O ->[NH2NH2] R2C=NNH2 ->[KOH/glycol][\Delta] R2CH2 + N2}$`, "Wolff–Kishner"],
    [R`$\ce{RCHO + 2[Ag(NH3)2]+ + 3OH- -> RCOO- + 2Ag v + 2H2O + 4NH3}$`, "Tollens' (silver mirror)"],
    [R`$\ce{RCHO + 2Cu^2+ + 5OH- -> RCOO- + Cu2O v + 3H2O}$`, "Fehling's (not aromatic aldehydes)"],
    [R`$\ce{RCOCH3 + 3NaOI -> RCOONa + CHI3 v + 2NaOH}$`, "iodoform (yellow ppt)"],
    [R`$\ce{2CH3CHO ->[\text{dil. } NaOH] CH3CH(OH)CH2CHO ->[\Delta] CH3CH=CHCHO}$`, "aldol (α-H needed)"],
    [R`$\ce{C6H5CHO + CH3COCH3 ->[\text{dil. } NaOH] C6H5CH=CHCOCH3}$`, "Claisen–Schmidt (cross aldol)"],
    [R`$\ce{2HCHO + \text{conc. } KOH -> CH3OH + HCOOK}$`, "Cannizzaro (no α-H)"],
    [R`$\ce{2C6H5CHO + \text{conc. } NaOH -> C6H5CH2OH + C6H5COONa}$`, "Cannizzaro"],
    [R`$\ce{C6H5CHO ->[\text{conc. } HNO3/H2SO4] \textit{m}\text{-O2NC6H4CHO}}$`, "–CHO is meta-directing"]])
]],
["10. Carboxylic Acids", [
  tb([
    [R`$\ce{RMgX + CO2 ->[H3O+] RCOOH}$`, "one C more"],
    [R`$\ce{RCN ->[H3O+] RCONH2 -> RCOOH}$`, "nitrile hydrolysis"],
    [R`$\ce{2RCOOH + 2Na -> 2RCOONa + H2}$; $\ce{RCOOH + NaHCO3 -> RCOONa + CO2 ^ + H2O}$`, "effervescence test (phenol doesn't)"],
    [R`$\ce{RCOOH + PCl5 -> RCOCl + POCl3 + HCl}$; $\ce{RCOOH + SOCl2 -> RCOCl + SO2 + HCl}$`, "acyl chlorides"],
    [R`$\ce{2RCOOH ->[P2O5][\Delta] (RCO)2O + H2O}$`, "anhydride"],
    [R`$\ce{RCOOH + NH3 <=> RCOONH4 ->[\Delta] RCONH2 + H2O}$`, "amide"],
    [R`$\ce{RCOOH ->[(i) LiAlH4 \text{ or } B2H6][(ii) H2O] RCH2OH}$`, "B2H6 spares ester, NO2, halo groups"],
    [R`$\ce{RCOONa + NaOH ->[CaO][\Delta] RH + Na2CO3}$`, "decarboxylation"],
    [R`$\ce{RCH2COOH ->[(i) X2/\text{red P}][(ii) H2O] RCH(X)COOH}$`, "Hell–Volhard–Zelinsky"],
    [R`$\ce{C6H5COOH ->[\text{conc. } HNO3/H2SO4] \textit{m}\text{-O2NC6H4COOH}}$`, "meta-directing; no Friedel–Crafts"]])
]],
["11. Amines & Diazonium Salts", [
  tb([
    [R`$\ce{C6H5NO2 ->[Fe/HCl \text{ or } Sn/HCl] C6H5NH2}$`, "Fe/HCl preferred"],
    [R`$\ce{RCN ->[LiAlH4 \text{ or } H2/Ni] RCH2NH2}$`, "one C more"],
    [R`$\ce{RCONH2 ->[(i) LiAlH4][(ii) H2O] RCH2NH2}$`, "same C"],
    [R`$\ce{\text{phthalimide} ->[KOH] ->[RX] ->[NaOH(aq)] RNH2}$`, "Gabriel: 1° aliphatic only"],
    [R`$\ce{RCONH2 + Br2 + 4NaOH -> RNH2 + Na2CO3 + 2NaBr + 2H2O}$`, "Hoffmann bromamide: one C less"],
    [R`$\ce{RNH2 + CHCl3 + 3KOH ->[\Delta] RNC + 3KCl + 3H2O}$`, "carbylamine (1° only)"],
    [R`$\ce{RNH2 + C6H5SO2Cl -> C6H5SO2NHR}$ (alkali-soluble)`, "Hinsberg: 2° insoluble, 3° none"],
    [R`$\ce{RNH2 + HNO2 -> ROH + N2 + H2O}$`, "aliphatic 1° amines"],
    [R`$\ce{C6H5NH2 + NaNO2 + 2HCl ->[273-278\,K] C6H5N2+Cl- + NaCl + 2H2O}$`, "diazotisation"],
    [R`$\ce{C6H5NH2 + 3Br2(aq) -> \text{2,4,6-tribromoaniline} v + 3HBr}$`, "white ppt"],
    [R`$\ce{C6H5NH2 + (CH3CO)2O -> C6H5NHCOCH3 + CH3COOH}$`, "protection by acetylation"],
    [R`$\ce{C6H5NH2 ->[\text{conc. } HNO3/H2SO4] \textit{p} 51\%, \textit{m} 47\%, \textit{o} 2\%}$`, "anilinium is m-directing"],
    [R`$\ce{C6H5NH2 + H2SO4 ->[453-473\,K] \textit{p}\text{-H2NC6H4SO3H}}$`, "sulphanilic acid"],
    [R`$\ce{ArN2+ ->[CuCN/KCN] ArCN}$; $\ce{->[Cu/HCl] ArCl}$`, "Sandmeyer / Gattermann"],
    [R`$\ce{ArN2+Cl- + HBF4 -> ArN2+BF4- ->[\Delta] ArF + BF3 + N2}$`, "Balz–Schiemann"],
    [R`$\ce{ArN2+BF4- ->[NaNO2/Cu][\Delta] ArNO2}$`, "nitro group"],
    [R`$\ce{ArN2+Cl- + H3PO2 + H2O -> ArH + N2 + H3PO3 + HCl}$; $\ce{+ CH3CH2OH -> ArH + CH3CHO}$`, "removes –N2⁺"],
    [R`$\ce{C6H5N2+Cl- + C6H5OH ->[OH-] \textit{p}\text{-HOC6H4N=NC6H5}}$`, "orange azo dye"],
    [R`$\ce{C6H5N2+Cl- + C6H5NH2 ->[H+] \textit{p}\text{-H2NC6H4N=NC6H5}}$`, "yellow azo dye (aniline yellow)"]])
]],
["12. Biomolecules", [
  tb([
    [R`$\ce{C12H22O11 + H2O ->[H+] C6H12O6 (glucose) + C6H12O6 (fructose)}$`, "inversion of cane sugar"],
    [R`$\ce{(C6H10O5)_n + nH2O ->[H+][393\,K] nC6H12O6}$`, "glucose from starch"],
    [R`$\ce{C6H12O6 ->[HI][\Delta] \textit{n}\text{-hexane}}$`, "straight 6-C chain"],
    [R`$\ce{CHO(CHOH)4CH2OH ->[Br2 \text{ water}] COOH(CHOH)4CH2OH}$`, "gluconic acid: –CHO present"],
    [R`$\ce{CHO(CHOH)4CH2OH ->[HNO3] COOH(CHOH)4COOH}$`, "saccharic acid: 1° –OH present"],
    [R`$\text{glucose} \ce{->[(CH3CO)2O]} \text{glucose pentaacetate}$`, "five –OH groups"],
    [R`$\text{glucose} \ce{+ NH2OH ->} \text{oxime}$; $\ce{+ HCN -> \text{cyanohydrin}}$`, "C=O present"]])
]],
["13. d- & f-Block Compounds", [
  tb([
    [R`$\ce{4FeCr2O4 + 8Na2CO3 + 7O2 -> 8Na2CrO4 + 2Fe2O3 + 8CO2}$`, "chromite fusion"],
    [R`$\ce{2Na2CrO4 + 2H+ -> Na2Cr2O7 + 2Na+ + H2O}$; $\ce{Na2Cr2O7 + 2KCl -> K2Cr2O7 + 2NaCl}$`, "K2Cr2O7 preparation"],
    [R`$\ce{2CrO4^2- + 2H+ <=> Cr2O7^2- + H2O}$`, "yellow ⇌ orange with pH"],
    [R`$\ce{Cr2O7^2- + 14H+ + 6e- -> 2Cr^3+ + 7H2O}$ (E° 1.33 V)`, "oxidises I⁻, H2S, Sn²⁺, Fe²⁺"],
    [R`$\ce{Cr2O7^2- + 6I- + 14H+ -> 2Cr^3+ + 3I2 + 7H2O}$`, ""],
    [R`$\ce{Cr2O7^2- + 6Fe^2+ + 14H+ -> 2Cr^3+ + 6Fe^3+ + 7H2O}$`, ""],
    [R`$\ce{2MnO2 + 4KOH + O2 -> 2K2MnO4 + 2H2O}$`, "manganate (green)"],
    [R`$\ce{3MnO4^2- + 4H+ -> 2MnO4- + MnO2 + 2H2O}$`, "disproportionation → permanganate"],
    [R`$\ce{2KMnO4 ->[513\,K] K2MnO4 + MnO2 + O2}$`, "thermal decomposition"],
    [R`$\ce{MnO4- + 8H+ + 5e- -> Mn^2+ + 4H2O}$ (1.52 V)`, "acidic"],
    [R`$\ce{MnO4- + 2H2O + 3e- -> MnO2 + 4OH-}$`, "neutral / weakly basic"],
    [R`$\ce{MnO4- + e- -> MnO4^2-}$ (0.56 V)`, "strongly basic"],
    [R`$\ce{2MnO4- + 5C2O4^2- + 16H+ -> 2Mn^2+ + 10CO2 + 8H2O}$`, "oxalate titration"],
    [R`$\ce{MnO4- + 5Fe^2+ + 8H+ -> Mn^2+ + 5Fe^3+ + 4H2O}$`, "Mohr's salt titration"],
    [R`$\ce{2MnO4- + 5NO2- + 6H+ -> 2Mn^2+ + 5NO3- + 3H2O}$`, ""],
    [R`$\ce{2MnO4- + H2O + I- -> 2MnO2 + 2OH- + IO3-}$`, "neutral medium"],
    [R`$\ce{2Cu^2+ + 4I- -> Cu2I2 + I2}$`, "why CuI2 does not exist"],
    [R`$\ce{2Cu+ -> Cu^2+ + Cu}$`, "Cu⁺ disproportionates in water"],
    [R`$\ce{2Cr^2+ + 2H+ -> 2Cr^3+ + H2}$`, "Cr²⁺ strong reductant"],
    [R`$\ce{2Fe^3+ + 2I- -> 2Fe^2+ + I2}$; $\ce{2Fe^2+ + S2O8^2- -> 2Fe^3+ + 2SO4^2-}$`, "Fe³⁺ catalysis of I⁻/persulphate"]])
]],
["14. Coordination Compounds", [
  tb([
    [R`$\ce{[Co(NH3)6]Cl3 + 3AgNO3 -> 3AgCl v + [Co(NH3)6](NO3)3}$`, "Cl⁻ outside the bracket precipitate"],
    [R`$\ce{[Ni(H2O)6]^2+ ->[en] [Ni(en)3]^2+}$`, "green → violet (stronger field)"],
    [R`$\ce{CuSO4.5H2O ->[\Delta] CuSO4 (white) + 5H2O}$`, "no ligand, no colour"],
    [R`$\ce{Ni + 4CO -> Ni(CO)4 ->[\Delta] Ni + 4CO}$`, "Mond process (purification)"],
    [R`$\ce{4Au + 8CN- + 2H2O + O2 -> 4[Au(CN)2]- + 4OH-}$`, "extraction of Au/Ag"],
    [R`$\ce{Ni^2+ + 2\,dmgH -> [Ni(dmg)2] (red) + 2H+}$`, "DMG test for Ni²⁺"],
    [R`$\ce{Ca^2+/Mg^2+ + EDTA^4- -> \text{stable chelates}}$`, "hardness estimation"],
    [R`$\ce{Fe^2+ + NO + 5H2O -> [Fe(H2O)5(NO)]^2+}$`, "brown ring"]])
]],
["15. p-Block & Practical Reactions", [
  tb([
    [R`$\ce{2Al + 2NaOH + 6H2O -> 2Na+[Al(OH)4]- + 3H2}$`, "Al is amphoteric"],
    [R`$\ce{Na2B4O7.10H2O ->[\Delta] 2NaBO2 + B2O3 + 10H2O}$`, "borax bead (glassy)"],
    [R`$\ce{Cl2 + 2KBr -> 2KCl + Br2}$; $\ce{Cl2 + 2KI -> 2KCl + I2}$`, "displacement (layer test)"],
    [R`$\ce{2F2 + 2H2O -> 4HF + O2}$`, "F2 oxidises water"],
    [R`$\ce{Cl2 + 2NaOH(cold, dil.) -> NaCl + NaOCl + H2O}$`, "disproportionation"],
    [R`$\ce{3Cl2 + 6NaOH(hot, conc.) -> 5NaCl + NaClO3 + 3H2O}$`, "disproportionation"],
    [R`$\ce{P4 + 3NaOH + 3H2O -> PH3 + 3NaH2PO2}$`, "white P disproportionates"],
    [R`$\ce{3HNO2 -> HNO3 + 2NO + H2O}$`, "N(+3) disproportionates"],
    [R`$\ce{2H2O2 -> 2H2O + O2}$`, "disproportionation"],
    [R`$\ce{NO3- + 3Fe^2+ + 4H+ -> NO + 3Fe^3+ + 2H2O}$`, "brown-ring test, step 1"],
    [R`$\ce{SO2 + Cr2O7^2- + H+ -> Cr^3+ (green) + SO4^2-}$`, "SO2 test (paper turns green)"],
    [R`$\ce{CO3^2- + 2H+ -> CO2 + H2O}$; $\ce{CO2 + Ca(OH)2 -> CaCO3 v + H2O}$`, "lime water milky"],
    [R`$\ce{Ag+ + Cl- -> AgCl v}$ (white, soluble in NH3)`, "halide test"],
    [R`$\ce{Ba^2+ + SO4^2- -> BaSO4 v}$`, "sulphate test (insoluble in HCl)"],
    [R`$\ce{I2 + 2S2O3^2- -> 2I- + S4O6^2-}$`, "iodometry"],
    [R`$\ce{FeSO4 + (NH4)2SO4 + 6H2O -> FeSO4.(NH4)2SO4.6H2O}$`, "Mohr's salt (a little H2SO4)"]])
]],
["16. Electrochemistry & Physical Reactions", [
  tb([
    [R`$\ce{Zn + Cu^2+ -> Zn^2+ + Cu}$ (E° 1.10 V)`, "Daniell cell"],
    [R`$\ce{Pb + PbO2 + 2H2SO4 -> 2PbSO4 + 2H2O}$`, "lead storage battery (discharge)"],
    [R`$\ce{Zn(Hg) + HgO -> ZnO + Hg}$ (1.35 V)`, "mercury cell (constant voltage)"],
    [R`$\ce{Zn -> Zn^2+ + 2e-}$; $\ce{MnO2 + NH4+ + e- -> MnO(OH) + NH3}$`, "dry (Leclanché) cell"],
    [R`$\ce{2H2 + O2 -> 2H2O}$`, "H2–O2 fuel cell (Apollo)"],
    [R`$\ce{2Fe + O2 + 4H+ -> 2Fe^2+ + 2H2O}$; then $\ce{Fe2O3.xH2O}$`, "rusting"],
    [R`$\ce{2NaCl(aq) + 2H2O -> 2NaOH + H2 + Cl2}$`, "electrolysis of brine"],
    [R`$\ce{2H2O -> 2H2 + O2}$`, "electrolysis of dil. H2SO4"],
    [R`$\ce{N2 + 3H2 <=>[Fe] 2NH3}$ (ΔH < 0)`, "Haber: high P, ~700 K"],
    [R`$\ce{2SO2 + O2 <=>[V2O5] 2SO3}$`, "Contact process"],
    [R`$\ce{2NH3 ->[\text{hot Pt}] N2 + 3H2}$`, "zero-order kinetics"],
    [R`$\ce{2N2O5 -> 4NO2 + O2}$`, "first-order kinetics"]])
]]
],
pyq: {}
});
})();
