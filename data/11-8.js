(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
NB.ch({
n: "11-8", short: "Organic Chemistry – Some Basic Principles and Techniques",
intro: R`The foundation of organic chemistry (GOC): structure representation, IUPAC naming, isomerism, <b>electronic effects</b> (inductive, resonance, electromeric, hyperconjugation), <b>reactive intermediates</b>, and <b>purification and analysis</b>. The single most-asked Chemistry topic in the April 2026 papers.`,
sec: [
["Structure, Classification & Nomenclature", [
  P(R`C is tetravalent; hybridisation sp³ (109.5°, 25% s), sp² (120°, 33% s), sp (180°, 50% s). More s character → shorter, stronger bonds and more electronegative carbon. Representations: Lewis, dash, condensed, <b>bond-line</b> (each vertex/end = C), 3-D wedge–dash.`),
  P(R`Classification: acyclic (open chain) and cyclic (alicyclic, aromatic: benzenoid and non-benzenoid, heterocyclic). <b>Homologous series</b>: successive members differ by –CH2–.`),
  P(R`<b>IUPAC priority of functional groups</b> (principal group = suffix):`, [R`\text{–COOH} > \text{–SO}_3\text{H} > \text{–COOR} > \text{–COCl} > \text{–CONH}_2 > \text{–CN}`, R`> \text{–CHO} > \text{>C=O} > \text{–OH} > \text{–NH}_2 > \text{C=C} > \text{C≡C}`]),
  J(R`Decreasing priority of functional groups for IUPAC naming — use the order above; halo, nitro, alkoxy are always prefixes.`, "2026 · 2 Apr · Shift 1"),
  P(R`Rules: longest chain containing the principal group; lowest locants (principal group first, then multiple bonds, then substituents); alphabetical order of prefixes (ignore di, tri; consider iso).`)
]],
["Isomerism", [
  T(["Type", "Differ in", "Example"], [["chain", "carbon skeleton", "n-pentane, isopentane, neopentane"], ["position", "position of group/bond", "propan-1-ol, propan-2-ol"], ["functional group", "functional group", "propanal, propanone (C3H6O)"], ["metamerism", "alkyl groups on either side of a polyvalent group", "C2H5OC2H5, CH3OC3H7"], ["geometrical", "spatial arrangement about C=C or ring", "cis/trans-but-2-ene"], ["optical", "non-superimposable mirror images", "lactic acid, butan-2-ol"]]),
  J(R`Two wedge–dash drawings of the same chiral carbon: compare priorities or swap pairs — an odd number of swaps gives the enantiomer, even gives the same compound.`, "2026 · 4 Apr · Shift 2")
]],
["Bond Fission & Reactive Intermediates", [
  P(R`<b>Heterolytic</b> cleavage → ions (carbocation, carbanion); <b>homolytic</b> → free radicals (needs heat/light, non-polar solvents). Curved arrows show electron-pair movement (half-headed for single electrons).`),
  T(["Intermediate", "Hybridisation, shape", "Stability order"], [["carbocation R⁺", "sp², planar, empty p orbital", R`benzyl ≈ allyl > 3° > 2° > 1° > CH3⁺`], ["free radical R•", "sp², ~planar", "3° > 2° > 1° > CH3• (allyl, benzyl high)"], ["carbanion R⁻", "sp³, pyramidal", "CH3⁻ > 1° > 2° > 3° (opposite; EWG and resonance stabilise)"]]),
  MAP("Stability ladders (most → least stable)", "", [["carbocation", R`benzyl ≈ allyl > $3°$ > $2°$ > $1°$ > $\ce{CH3+}$`, "+I, hyperconjugation, resonance"], ["free radical", R`benzyl ≈ allyl > $3°$ > $2°$ > $1°$ > $\ce{CH3^.}$`, "same reasons"], ["carbanion", R`$\ce{CH3-}$ > $1°$ > $2°$ > $3°$`, "alkyl +I destabilises; EWG/resonance stabilise"]]),
  J(R`Carbanion stability by +I: CH3⁻ > CH3CH2⁻ > (CH3)2CH⁻ > (CH3)3C⁻ (true). Allyl and benzyl carbanions are stabilised by <b>resonance</b>, not by inductive effect.`, "2026 · 5 Apr · Shift 1"),
  P(R`<b>Electrophiles</b> (electron-seeking): H⁺, NO2⁺, Br⁺, R⁺, carbonyl C, BF3, AlCl3. <b>Nucleophiles</b> (nucleus-seeking): OH⁻, CN⁻, RO⁻, NH3, H2O, RNH2.`),
  P(R`<b>Types of organic reactions</b>: substitution, addition, elimination, rearrangement.`),
  J(R`Mechanisms: Williamson synthesis — nucleophilic substitution; Friedel–Crafts — electrophilic substitution; Br2 + styrene — electrophilic addition; Cl2/hν on toluene side chain — free-radical substitution.`, "2026 · 4 Apr · Shift 2"),
  J(R`Rearrangement-based products: Friedel–Crafts with n-PrCl, dehydration of alcohols with carbocation shifts; identify the option whose product forms without a 1,2-shift.`, "2026 · 8 Apr · Shift 2")
]],
["Electronic Effects — The 4 Tools", [
  T(["Effect", "How electrons move", "Permanent?", "Examples"], [["Inductive (I)", "pulled/pushed through σ bonds; fades after ~3 C", "yes", "−I: –NO2 > –CN > –COOH > –F > –Cl > –Br > –I; +I: alkyl groups"], ["Resonance / mesomeric (R)", "π or lone-pair electrons delocalise", "yes", "+R: –OH, –OR, –NH2, –X; −R: –NO2, –CN, –CHO, –COOH"], ["Electromeric (E)", "π pair shifts fully, only when a reagent attacks", "no (temporary)", "C=O, C=C with E⁺/Nu⁻"], ["Hyperconjugation", "σ(C–H) electrons next to C⁺, C• or C=C delocalise", "yes", "more α-H → more stable"]]),
  P(R`<b>−I effect</b> fades with distance.`, null, S(s.t(10, 50, "C₃ → C₂ → C₁ → Cl", 15) + s.t(10, 25, "δδδ+   δδ+    δ+    δ−", 12, 'class="red"'), 230, 65, "−I effect of Cl")),
  J(R`Increasing electron-withdrawing power: –I < –COOH < –CN < –NO2.`, "2026 · 4 Apr · Shift 1"),
  KEY([R`<b>Resonance beats induction</b> when they oppose (–OH, –NH2 on a ring: −I but strong +R → activating). Halogens are the exception: −I wins on rate, +R decides o/p.`, R`<b>Resonance rules</b>: same atom positions, same unpaired electrons; more bonds, complete octets and negative charge on the more electronegative atom → more important form.`, R`<b>Hyperconjugation</b> = "no-bond resonance": $\ce{(CH3)3C+}$ has 9 α-H → most stable alkyl cation.`]),
  P(R`<b>Hyperconjugation</b> in the ethyl cation:`, null, S(s.t(10, 50, "H–CH₂–C⁺H₂", 15) + s.t(115, 50, "↔", 16) + s.t(140, 50, "H⁺ CH₂=CH₂", 15) + s.t(20, 85, "σ(C–H) electrons spread into empty p", 12), 260, 95, "Hyperconjugation")),
  J(R`O2N–C6H4–C⁺H–C6H4–OCH3: +R of –OCH3 stabilises the cation; in the carbanion, −R of –NO2 stabilises the negative charge (both true).`, "2026 · 2 Apr · Shift 2"),
  J(R`SN1: benzyl chloride > ethyl chloride (resonance vs hyperconjugation).`, "2026 · 2 Apr · Shift 1"),
  J(R`C=O length: tropone and acetate (resonance, partial single bond) longer than acetone's C=O.`, "2026 · 4 Apr · Shift 2")
]],
["Purification of Organic Compounds", [
  T(["Method", "Used for", "Principle / example"], [["sublimation", "sublimable solids", "camphor, naphthalene, anthracene, benzoic acid"], ["crystallisation", "solids", "difference in solubility at high/low T"], ["simple distillation", "liquids with large b.p. difference", "chloroform (334 K) + aniline (457 K)"], ["fractional distillation", "liquids with close b.p.", "fractionating column; crude oil, acetone–methanol"], ["distillation under reduced pressure", "liquids that decompose at their b.p.", "glycerol from spent lye"], ["steam distillation", "steam-volatile, water-immiscible liquids", "aniline–water; essential oils; o-nitrophenol"], ["differential extraction", "compound more soluble in an organic solvent", "separating funnel"], ["chromatography", "small amounts, mixtures", "adsorption (column, TLC) and partition (paper)"]]),
  J(R`Match: simple distillation — large b.p. difference; fractional — close b.p.; steam — steam-volatile; reduced pressure — liquid decomposing at its b.p.`, "2026 · 5 Apr · Shift 2"),
  J(R`Sugar + NaCl separated by dissolving sugar in alcohol (differential solubility); rose essence by steam distillation (volatile, water-immiscible).`, "2026 · 6 Apr · Shift 2"),
  J(R`Fractional distillation: the higher-boiling vapour condenses first in the column, so the rising vapour becomes richer in the <b>lower</b>-boiling component.`, "2026 · 8 Apr · Shift 2"),
  P(R`<b>Steam distillation</b>: the mixture boils when $p_{water} + p_{organic} = $ atmospheric pressure, i.e. below 373 K.`),
  P(R`<b>Chromatography</b>: retardation factor $R_f = \frac{\text{distance moved by substance}}{\text{distance moved by solvent front}}$. Colourless spots seen by UV, I2 vapour or spraying reagents (ninhydrin for amino acids).`, null, S(s.rect(30, 10, 80, 130, 'class="thin"') + s.line(30, 125, 110, 125, 'class="thin" stroke-dasharray="3 3"') + s.line(30, 25, 110, 25, 'class="red"') + s.circ(55, 125, 4, 'class="dot"') + s.circ(55, 70, 5, 'class="fl"') + s.circ(85, 45, 5, 'class="fl2"') + s.t(115, 28, "solvent front", 11, 'class="red"') + s.t(115, 128, "base line", 11) + s.arr(140, 120, 140, 74) + s.t(145, 100, "x", 12) + s.arr(170, 120, 170, 30) + s.t(175, 80, "y", 12) + s.t(120, 150, "Rf = x / y", 12), 230, 160, "Thin-layer / paper chromatography"))
]],
["Qualitative & Quantitative Analysis", [
  P(R`<b>C and H</b>: heat with CuO → CO2 (lime water milky), H2O (anhydrous CuSO4 turns blue).`),
  P(R`<b>Lassaigne's test</b> (sodium fusion extract): N → NaCN; boil with FeSO4, acidify with conc. H2SO4 → <b>Prussian blue</b> Fe4[Fe(CN)6]3. S → Na2S: sodium nitroprusside → violet; lead acetate → black PbS. N + S → NaSCN → blood-red with Fe³⁺. Halogens → NaX: boil with HNO3, then AgNO3 (AgCl white, soluble in NH3; AgBr pale yellow, sparingly soluble; AgI yellow, insoluble). P: oxidise, then ammonium molybdate → yellow.`),
  T(["Element", "Method", "% formula"], [["C, H", "Liebig combustion", R`$\%\text{C} = \frac{12 \times m_{CO_2} \times 100}{44 \times m}$; $\%\text{H} = \frac{2 \times m_{H_2O} \times 100}{18 \times m}$`], ["N", "Dumas (N2 volume at STP)", R`$\%\text{N} = \frac{28 \times V \times 100}{22400 \times m}$`], ["N", "Kjeldahl (NH3 into acid)", R`$\%\text{N} = \frac{1.4 \times M \times 2(V - \frac{V_1}{2})}{m}$ for H2SO4; not for nitro, azo, ring N`], ["X", "Carius (fuming HNO3, AgNO3)", R`$\%\text{X} = \frac{A_X \times m_{AgX} \times 100}{M_{AgX} \times m}$`], ["S", "Carius → BaSO4", R`$\%\text{S} = \frac{32 \times m_{BaSO_4} \times 100}{233 \times m}$`], ["P", "→ MgNH4PO4 → Mg2P2O7", R`$\%\text{P} = \frac{62 \times m \times 100}{222 \times m_0}$`], ["O", "by difference", "100 − sum of others"]]),
  J(R`% C = 25 with 0.25 g CO2 → mass of compound X = 0.273 g; % S from BaSO4 (2.0 × 10⁻³ mol of M = 76 gave 0.4813 g BaSO4); bromo compound from AgBr mass and % C → empirical formula.`, "2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 2; 2026 · 4 Apr · Shift 1"),
  W(R`Kjeldahl's method does not work for nitro, azo compounds or N in rings (pyridine), because their N is not converted to (NH4)2SO4.`)
]]
],
pyq: {
  pat: [
    [R`Electronic effects: −I order, resonance/hyperconjugation in intermediates`, "2026 · 2 Apr · Shift 1; 2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 1; 2026 · 5 Apr · Shift 1"],
    [R`Purification methods matching and statements`, "2026 · 2 Apr · Shift 1; 2026 · 5 Apr · Shift 2; 2026 · 6 Apr · Shift 2; 2026 · 8 Apr · Shift 2"],
    [R`Quantitative analysis (Liebig, Carius) calculations`, "2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 1; 2026 · 4 Apr · Shift 2; 2026 · 5 Apr · Shift 1"],
    [R`Mechanism type of named reactions; rearrangements`, "2026 · 4 Apr · Shift 2; 2026 · 8 Apr · Shift 2"],
    [R`IUPAC priority, isomerism, aromaticity`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 2; 2026 · 8 Apr · Shift 2"]
  ],
  combo: [R`GOC + every organic chapter (stability of intermediates decides products)`, R`GOC + mole concept (empirical formula from analysis)`, R`GOC + solutions (distillation, azeotropes)`],
  trap: [R`Carbanion order is the reverse of carbocation order.`, R`Electromeric effect is temporary; inductive is permanent.`],
  mist: [R`Ignoring hyperconjugation when comparing alkenes/carbocations.`, R`Using Kjeldahl for nitrobenzene.`]
}
});
})();
