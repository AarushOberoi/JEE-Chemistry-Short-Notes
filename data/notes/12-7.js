(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
NB.ch({
n: "12-7", short: "Alcohols, Phenols and Ethers",
intro: R`<b>Big idea:</b> the –OH group. In <b>alcohols</b> it sits on sp³ C (behaves like a weak acid/base and a leaving group after protonation). In <b>phenol</b> it is on a ring (more acidic, ring very reactive). <b>Ethers</b> R–O–R are fairly inert but are cleaved by HI.`,
sec: [
["Key Facts First", [
  KEY([R`<b>Acidity</b>: carboxylic acid > phenol (pKa 10) > water (15.7) > alcohol (≈16). Alcohol acidity 1° > 2° > 3°.`, R`<b>Boiling point</b>: alcohols ≫ ethers/hydrocarbons of similar mass (H-bonding). Branching lowers b.p.`, R`<b>C–O length</b>: phenol 136 pm < methanol 142 pm (partial double bond + sp² C). Bond angles: C–O–H 108.9°, C–O–C (ether) 111.7°.`]),
  P(R`<b>Why is phenol acidic?</b> Phenoxide ion is resonance-stabilised (negative charge spread to o and p carbons); alkoxide is not.`, null, S(s.benz(45, 60, 24, { 0: "O⁻" }) + s.t(80, 64, "↔", 15) + s.benz(140, 60, 24, { 0: "O" }, false) + s.t(152, 94, "⁻ o", 12) + s.t(175, 64, "↔ … ⁻ p", 13) + s.t(25, 122, "charge spread → stable ion → stronger acid", 12, 'class="red"'), 280, 130, "Phenoxide resonance")),
  T(["Effect on phenol acidity", "Groups", "Why"], [["increase (stronger)", "–NO2, –CN, –CHO at o/p (most), m (less)", "pull e⁻, stabilise phenoxide"], ["decrease (weaker)", "–CH3, –OCH3, –NH2", "push e⁻, destabilise phenoxide"]]),
  J(R`Acidity: p-nitrobenzoic acid > benzoic acid > p-nitrophenol > phenol > p-methoxyphenol. Soluble in aqueous NaOH: acids and phenols only.`, "2026 · 4 Apr · Shift 1; 2026 · 4 Apr · Shift 2")
]],
["Preparation of Alcohols", [
  MAP("Routes to alcohols", "", [[R`$\ce{H2O/H+}$ on alkene`, "Markovnikov alcohol", "via carbocation"], [R`(i) $\ce{B2H6}$ (ii) $\ce{H2O2/OH-}$`, "anti-Markovnikov alcohol", "hydroboration–oxidation"], [R`$\ce{NaBH4}$, $\ce{LiAlH4}$, $\ce{H2/Pd}$ on RCHO / R2CO`, "1° / 2° alcohol"], [R`$\ce{LiAlH4}$ on RCOOH`, "1° alcohol", "expensive; industry reduces esters"], [R`RMgX + HCHO / RCHO / R2CO, then $\ce{H3O+}$`, "1° / 2° / 3° alcohol", "Grignard"]]),
  RX({ name: "Hydroboration–Oxidation", eq: R`\ce{CH3CH=CH2 ->[(i)\ B2H6][(ii)\ H2O2/OH^-] CH3CH2CH2OH}`, reag: R`diborane, then alkaline $\ce{H2O2}$`, why: "B adds to the less substituted carbon, then is replaced by OH", prod: "anti-Markovnikov alcohol (propan-1-ol), excellent yield" }),
  RX({ name: "Grignard Synthesis of Alcohols", eq: [R`\ce{HCHO + RMgX -> RCH2OMgX ->[H2O] RCH2OH}\ (1°)`, R`\ce{R'CHO + RMgX -> ->[H2O] R'CH(OH)R}\ (2°)`, R`\ce{R'2CO + RMgX -> ->[H2O] R'2C(OH)R}\ (3°)`], why: "R⁻ (from R–Mg) attacks the δ+ carbonyl carbon", prod: "methanal → 1°, other aldehydes → 2°, ketones → 3°" })
]],
["Preparation of Phenols", [
  MAP("Routes to phenol", "", [[R`$\ce{C6H5Cl}$ + NaOH, 623 K, 320 atm; then $\ce{H+}$`, "phenol", "from haloarene"], [R`$\ce{C6H5SO3H}$ + fused NaOH; then $\ce{H+}$`, "phenol", "from sulphonic acid"], [R`$\ce{C6H5N2+Cl-}$ + warm water`, "phenol", "from diazonium salt"], [R`cumene + $\ce{O2}$ → hydroperoxide; then $\ce{H+/H2O}$`, "phenol + acetone", "cumene process (industrial)"]]),
  RX({ name: "Cumene Process", eq: R`\ce{C6H5CH(CH3)2 ->[O2] C6H5C(CH3)2OOH ->[H+][H2O] C6H5OH + CH3COCH3}`, reag: R`air ($\ce{O2}$), then dilute acid`, prod: "phenol + acetone (valuable by-product)" })
]],
["Reactions of Alcohols", [
  T(["Reaction", "Reagent", "Result"], [["with active metals", "Na, K, Al", R`alkoxide + $\ce{H2}$ (alcohol acts as acid)`], ["esterification", R`RCOOH + conc. $\ce{H2SO4}$ / RCOCl + pyridine`, "ester (pyridine removes HCl)"], ["with HX", R`HX (+ $\ce{ZnCl2}$ for 1°/2°)`, "alkyl halide; 3° > 2° > 1°"], ["with PX3, SOCl2", "", "alkyl halide"]]),
  RX({ name: "Lucas Test (1° / 2° / 3° alcohols)", eq: R`\ce{R-OH + HCl ->[anhyd.\ ZnCl2] R-Cl v (turbidity) + H2O}`, reag: R`conc. HCl + anhydrous $\ce{ZnCl2}$`, why: "R–Cl is insoluble → turbidity; speed depends on carbocation stability", prod: "3°: turbid <b>immediately</b> · 2°: in ~5 min · 1°: <b>no</b> turbidity at room temperature" }),
  RX({ name: "Acid-catalysed Dehydration", eq: R`\ce{C2H5OH ->[conc.\ H2SO4][443\,K] CH2=CH2 + H2O}`, cond: "1°: conc. H2SO4, 443 K · 2°: 85% H3PO4, 440 K · 3°: 20% H3PO4, 358 K", why: "ease 3° > 2° > 1° = stability of carbocation", prod: "alkene (Zaitsev product major; carbocations may rearrange)", mech: [R`Protonation: $\ce{C2H5OH + H+ -> C2H5OH2+}$ (fast)`, R`Loss of water: $\ce{C2H5OH2+ -> C2H5+ + H2O}$ (<b>slow, rate-determining</b>)`, R`Loss of $\ce{H+}$ from β-C: $\ce{C2H5+ -> CH2=CH2 + H+}$`] }),
  MAP("Oxidation of alcohols", "R–OH", [[R`PCC (or $\ce{CrO3}$, anhydrous)`, "1° → aldehyde (stops there)"], [R`$\ce{KMnO4}$ / acidified $\ce{K2Cr2O7}$`, "1° → carboxylic acid; 2° → ketone"], [R`Cu, 573 K`, "1° → aldehyde, 2° → ketone, 3° → alkene", "dehydrogenation"], ["normal oxidants", "3° → no reaction", "no α-H"]])
]],
["Reactions of Phenol", [
  KEY([R`–OH is strongly <b>activating, o/p directing</b> (+R). Reactions happen without a Lewis acid.`, R`Phenol gives <b>violet colour with neutral FeCl3</b> (test). Phenol does <b>not</b> react with $\ce{NaHCO3}$.`]),
  RX({ name: "Nitration of Phenol", eq: [R`\ce{C6H5OH ->[\text{dil. }HNO3][298\,K] \textit{o}\text{-nitrophenol} + \textit{p}\text{-nitrophenol}}`, R`\ce{C6H5OH ->[\text{conc. }HNO3] \text{2,4,6-trinitrophenol (picric acid)}}`], why: "o-isomer has <b>intramolecular</b> H-bond → steam volatile; p-isomer has intermolecular H-bond", prod: "separate o/p by steam distillation", note: "Picric acid is made better by sulphonation first, then nitration (direct route gives poor yield).", ref: "o-nitrophenol is steam volatile; % O rises from 17.0 to 34.5 (2026 · 5 Apr · Shift 1)" }),
  RX({ name: "Bromination of Phenol", eq: [R`\ce{C6H5OH ->[Br2 \text{ in } CS2/CHCl3][\text{low } T] \textit{o}\text{- + }\textit{p}\text{-bromophenol}}`, R`\ce{C6H5OH + 3Br2(aq) -> \text{2,4,6-tribromophenol} v (white) + 3HBr}`], why: "in water, phenol ionises partly; very activated ring takes three Br", prod: "mono (non-polar solvent) or tri (bromine water)" }),
  RX({ name: "Kolbe's Reaction", eq: R`\ce{C6H5ONa ->[(i)\ CO2][(ii)\ H+] \textit{o}\text{-HOC6H4COOH}}`, reag: R`$\ce{CO2}$ (weak electrophile) on sodium phenoxide`, why: "phenoxide ion is even more reactive than phenol", prod: "salicylic acid (2-hydroxybenzoic acid)" }),
  RX({ name: "Reimer–Tiemann Reaction", eq: R`\ce{C6H5OH ->[CHCl3 + aq.\ NaOH][340\,K] \text{subst. benzal chloride} ->[NaOH][H+] \textit{o}\text{-HOC6H4CHO}}`, reag: R`$\ce{CHCl3}$ + NaOH (electrophile: dichlorocarbene :$\ce{CCl2}$)`, prod: "salicylaldehyde (–CHO at ortho)" }),
  MAP("Other reactions of phenol", "C₆H₅OH", [[R`Zn dust, heat`, "benzene"], [R`chromic acid`, "benzoquinone"], [R`air (slowly)`, "dark quinone mixtures"], [R`phthalic anhydride + conc. $\ce{H2SO4}$`, "phenolphthalein", "pink in base; colourless in excess strong NaOH"]]),
  J(R`Phenolphthalein from 2 phenol + phthalic anhydride; pink quinonoid dianion in NaOH turns colourless in excess NaOH.`, "2026 · 4 Apr · Shift 1")
]],
["Ethers", [
  RX({ name: "Williamson Synthesis", eq: R`\ce{R-X + R'-O^-Na+ -> R-O-R' + NaX}`, reag: "sodium alkoxide + <b>primary</b> alkyl halide", why: "SN2 attack of alkoxide on R–X", prod: "symmetrical or unsymmetrical ether", note: R`With a 3° halide only the alkene forms: $\ce{(CH3)3CBr + CH3ONa -> (CH3)2C=CH2}$. For t-butyl ethyl ether use $\ce{(CH3)3CONa + C2H5Br}$.` }),
  P(R`<b>Dehydration route</b>: $\ce{2C2H5OH ->[conc.\ H2SO4][413\,K] C2H5OC2H5}$ (SN2 of ROH on protonated ROH). At 443 K the alkene wins. Good only for 1° alcohols.`),
  RX({ name: "Cleavage of Ethers by HI", eq: [R`\ce{CH3-O-C2H5 + HI -> CH3I + C2H5OH}`, R`\ce{C6H5-O-CH3 + HI -> C6H5OH + CH3I}`, R`\ce{(CH3)3C-O-CH3 + HI -> (CH3)3C-I + CH3OH}`], reag: "HI > HBr > HCl", why: "after protonation, I⁻ attacks the <b>smaller</b> alkyl (SN2); a 3° group leaves as a cation (SN1)", prod: "alkyl iodide + alcohol; aryl ethers always give <b>phenol</b> + alkyl iodide", ref: "Benzyl phenyl ether + HI → phenol + benzyl iodide (2026 · 6 Apr · Shift 2)" }),
  MAP("Electrophilic substitution of anisole (o/p, activated)", "C₆H₅OCH₃", [[R`$\ce{Br2}$ in ethanoic acid (no $\ce{FeBr3}$)`, "p-bromoanisole (major)"], [R`$\ce{CH3Cl}$ / anhyd. $\ce{AlCl3}$`, "o- + p-methylanisole"], [R`$\ce{CH3COCl}$ / anhyd. $\ce{AlCl3}$`, "p-methoxyacetophenone (major)"], [R`conc. $\ce{HNO3 + H2SO4}$`, "p-nitroanisole (major)"]]),
  J(R`Enol ether hydrolysis (dilute acid) gives an aldehyde and a ketone; compare them with HCN, NaHCO3, 2,4-DNP.`, "2026 · 2 Apr · Shift 2")
]],
["Commercial Alcohols", [
  T(["Alcohol", "Made by", "Note"], [["methanol (wood spirit)", R`$\ce{CO + 2H2 ->[ZnO-Cr2O3][\text{high } T, P] CH3OH}$`, "poisonous → blindness, death"], ["ethanol", "fermentation: sucrose →(invertase) glucose + fructose →(zymase, yeast) ethanol + CO2", "denatured with CuSO4 (colour) + pyridine (smell)"]])
]]
],
pyq: {
  pat: [
    [R`Acidity orders; solubility in NaOH vs NaHCO3`, "2026 · 4 Apr · Shift 1; 2026 · 4 Apr · Shift 2"],
    [R`Ether cleavage products with HI`, "2026 · 6 Apr · Shift 2"],
    [R`Nitration of phenol + steam distillation`, "2026 · 5 Apr · Shift 1"],
    [R`Dehydration conditions and products`, "2026 · 5 Apr · Shift 1"]
  ],
  combo: [R`Alcohols + carbonyls (oxidation, Grignard)`, R`Phenol + practical tests (FeCl3, phthalein)`, R`Ethers + SN1/SN2`],
  trap: [R`Williamson needs a 1° halide.`, R`Anisole + HI never gives iodobenzene.`],
  mist: [R`Saying phenol reacts with NaHCO3.`, R`Forgetting 3° alcohols resist oxidation.`]
}
});
})();
