(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
// Haworth-style pyranose ring helper
const pyr = (x, y, a, lab) => s.path(`M${x} ${y} L${x + 40} ${y - 18} L${x + 80} ${y} L${x + 70} ${y + 24} L${x + 10} ${y + 24} Z`) + s.t(x + 34, y - 22, "O", 13) + s.t(x + 84, y + 4, "C1", 11) + s.bond(x + 80, y, x + 80, y + (a ? 22 : -22)) + s.t(x + 84, y + (a ? 34 : -24), "OH", 11, 'class="red"') + s.t(x + 10, y + 50, lab, 12);
NB.ch({
n: "12-10", short: "Biomolecules",
intro: R`Carbohydrates, proteins, enzymes, vitamins, nucleic acids and hormones. Mostly <b>fact-based</b> questions: structures of glucose, reducing vs non-reducing sugars, amino-acid names and codes, protein structure levels, vitamins and their deficiency diseases.`,
sec: [
["Carbohydrates: Classification", [
  P(R`Carbohydrates are optically active polyhydroxy aldehydes or ketones (or compounds that give them on hydrolysis). General formula often $C_x(H_2O)_y$ (but rhamnose C6H12O5 does not fit, and acetic acid fits but is not a carbohydrate).`),
  T(["Class", "Units on hydrolysis", "Examples"], [["monosaccharides", "1 (cannot be hydrolysed)", "glucose, fructose, ribose"], ["oligosaccharides", "2–10", "sucrose, maltose, lactose (disaccharides)"], ["polysaccharides", "many", "starch, cellulose, glycogen"]]),
  P(R`<b>Reducing sugars</b> reduce Fehling's/Tollens' (free aldehyde or ketone group): all monosaccharides, maltose, lactose. <b>Sucrose is non-reducing</b> (C1 of glucose and C2 of fructose are both in the glycosidic link).`),
  P(R`Monosaccharides: <b>aldoses</b> (–CHO) and <b>ketoses</b> (C=O); trioses to heptoses (aldohexose = glucose, ketohexose = fructose).`)
]],
["Glucose", [
  P(R`<b>Preparation</b>: sucrose + dil. HCl (boil) → glucose + fructose; starch boiled with dil. H2SO4 at 393 K under pressure → glucose (commercial).`),
  MAP("Reactions of glucose → what each proves", "Glucose C₆H₁₂O₆", [[R`HI, heat`, "n-hexane", "6 C in a <b>straight chain</b>"], [R`$\ce{NH2OH}$`, "oxime", "C=O present"], [R`HCN`, "cyanohydrin", "C=O present"], [R`$\ce{Br2}$ water`, "gluconic acid (C6)", "C=O is an <b>aldehyde</b>"], [R`$\ce{(CH3CO)2O}$`, "glucose pentaacetate", "<b>five</b> –OH groups"], [R`$\ce{HNO3}$`, "saccharic acid (dicarboxylic)", "a 1° alcohol (–CH2OH) is present"]]),
  KEY([R`<b>Cyclic structure evidence</b>: no Schiff's test, no $\ce{NaHSO3}$ adduct; pentaacetate does not react with $\ce{NH2OH}$; two forms (α, β) exist.`, R`C5–OH adds to –CHO → six-membered <b>pyranose</b> ring; the new chiral C1 gives α and β <b>anomers</b>.`], "Why glucose is cyclic"),
  J(R`Glucose + HI (heat) → n-hexane: all six carbons in a straight chain.`, "2026 · 6 Apr · Shift 2"),
  P(R`<b>α vs β</b>: only the C1–OH position differs (Haworth: α down, β up).`, null, S(pyr(10, 50, true, "α-D-glucopyranose (OH down)") + pyr(170, 50, false, "β-D-glucopyranose (OH up)"), 300, 110, "Anomers differ only at C1 (Haworth)")),
  T(["Anomer", "m.p.", "Specific rotation", "Crystallised from"], [["α-D-glucose", "419 K", "+111°", "concentrated solution at 303 K"], ["β-D-glucose", "423 K", "+19.2°", "hot saturated solution at 371 K"]]),
  P(R`<b>Mutarotation</b>: in water either anomer changes to an equilibrium mixture (+52.5°) through the open chain.`),
  J(R`Anomers differ at C1; α has the higher rotation (+111°) and β (+19.2°); α from 303 K, β from 371 K. "m.p. of α > β" is false (α 419 K, β 423 K). Open chain and cyclic forms coexist.`, "2026 · 5 Apr · Shift 1; 2026 · 5 Apr · Shift 2; 2026 · 8 Apr · Shift 2"),
  P(R`<b>D/L</b> notation: refers to the configuration of the lowest chiral C (OH on the right in Fischer projection = D), related to D-glyceraldehyde; unrelated to (+)/(−).`),
  J(R`D-aldotetrose that gives an optically <b>inactive</b> (meso) dicarboxylic acid with HNO3 is <b>D-erythrose</b> (both OH on the same side).`, "2026 · 4 Apr · Shift 2")
]],
["Fructose, Disaccharides & Polysaccharides", [
  P(R`<b>Fructose</b>: ketohexose, laevorotatory, D-(−)-fructose; five-membered <b>furanose</b> ring (C5–OH adds to C2=O). Glucose and fructose have the same configuration at C3, C4, C5.`),
  T(["Sugar", "Units", "Linkage", "Reducing?"], [["sucrose", "α-D-glucose + β-D-fructose", "C1(α) – C2(β)", "no"], ["maltose", "two α-D-glucose", "C1 – C4 (α)", "yes"], ["lactose (milk)", "β-D-galactose + β-D-glucose", "C1 – C4 (β)", "yes"]]),
  P(R`<b>Invert sugar</b>: sucrose (+66.5°) hydrolyses to glucose (+52.5°) + fructose (−92.4°); the mixture is laevorotatory, so the sign of rotation inverts.`),
  J(R`Maltose is a <b>reducing</b> sugar (free C1 –OH on the second glucose); lactose is also reducing.`, "2026 · 4 Apr · Shift 1"),
  L([R`<b>Starch</b>: amylose (15–20%; water-soluble; unbranched, C1–C4 α) + amylopectin (80–85%; insoluble; branched, C1–C4 and C1–C6 α). Gives blue colour with I2.`, R`<b>Cellulose</b>: unbranched β-D-glucose, C1–C4 β links; plant cell walls; humans cannot digest it.`, R`<b>Glycogen</b>: animal starch, more highly branched than amylopectin; stored in liver, muscles, brain.`]),
  J(R`Monosaccharide units from an oligosaccharide need not be the same (sucrose gives glucose + fructose). Starch and cellulose are polysaccharides.`, "2026 · 8 Apr · Shift 2")
]],
["Proteins & Amino Acids", [
  P(R`α-Amino acids: H2N–CH(R)–COOH. In water they exist as <b>zwitterions</b> (H3N⁺–CHR–COO⁻): amphoteric, high m.p., water-soluble. All except glycine are optically active (mostly L-configuration).`),
  P(R`<b>Essential</b> amino acids cannot be made by the body (valine, leucine, isoleucine, arginine, lysine, threonine, methionine, phenylalanine, tryptophan, histidine). <b>Non-essential</b>: made in the body (glycine, alanine, aspartic acid, glutamic acid, …).`),
  T(["Amino acid", "Code", "R group / note"], [["glycine", "G", "–H (achiral)"], ["alanine", "A", "–CH3"], ["valine", "V", "–CH(CH3)2 (essential)"], ["leucine / isoleucine", "L / I", "essential"], ["arginine", "R", "basic; essential"], ["lysine", "K", "basic; essential"], ["aspartic acid", "D", "acidic; non-essential"], ["glutamic acid", "E", "acidic; non-essential"], ["tyrosine", "Y", "phenolic –OH (FeCl3 violet); thyroxine is its iodinated derivative"], ["tryptophan", "W", "essential"], ["cysteine", "C", "–SH (forms disulphide bonds)"]]),
  J(R`Match: arginine R/essential, aspartic acid D/non-essential, lysine K/essential, glutamic acid E/non-essential.`, "2026 · 4 Apr · Shift 1"),
  J(R`Tyrosine (Y) and its iodinated hormone thyroxine; tyrosine gives a violet colour with neutral FeCl3 (phenolic group).`, "2026 · 2 Apr · Shift 2; 2026 · 8 Apr · Shift 2"),
  P(R`<b>Peptide bond</b>: –CO–NH– (amide) formed between –COOH of one and –NH2 of another amino acid. Polypeptides with > 100 residues (M > 10,000) are proteins.`, null, S(s.t(10, 50, "H₂N–CH(R)–C", 14) + s.t(110, 30, "O", 13) + s.bond(114, 34, 114, 44, 2) + s.t(120, 50, "–N–CH(R′)–COOH", 14) + s.t(128, 70, "H", 13) + s.rect(104, 36, 30, 40, 'class="thin" stroke-dasharray="4 3"') + s.t(80, 95, "peptide (amide) bond", 12, 'class="red"'), 280, 105, "Dipeptide")),
  T(["Level", "What it is", "Held by"], [["primary", "sequence of amino acids", "peptide (covalent) bonds"], ["secondary", "α-helix or β-pleated sheet", "H-bonds between C=O and N–H"], ["tertiary", "overall folding (fibrous / globular)", "H-bonds, disulphide links, van der Waals, electrostatic forces"], ["quaternary", "arrangement of subunits", "same forces"]]),
  P(R`<b>Fibrous</b> proteins (keratin, myosin) are insoluble; <b>globular</b> proteins (insulin, albumins) are soluble. <b>Denaturation</b> (heat, pH change) destroys 2° and 3° structure but not the primary structure; e.g. boiled egg white, curdling of milk.`),
  J(R`Tertiary structure is stabilised by H-bonds, disulphide links, van der Waals and electrostatic forces; a polypeptide folds to secondary and then tertiary structure.`, "2026 · 5 Apr · Shift 2"),
  P(R`<b>Enzymes</b>: biological catalysts, mostly globular proteins; highly specific; named with "-ase" (maltase, invertase, zymase). They lower activation energy.`)
]],
["Vitamins, Nucleic Acids & Hormones", [
  T(["Vitamin", "Name", "Deficiency disease"], [["A", "retinol", "xerophthalmia, night blindness"], ["B1", "thiamine", "beriberi"], ["B2", "riboflavin", "cheilosis, digestive disorders"], ["B6", "pyridoxine", "convulsions"], ["B12", "cyanocobalamin", "pernicious anaemia"], ["C", "ascorbic acid", "scurvy"], ["D", "—", "rickets (children), osteomalacia (adults)"], ["E", "tocopherols", "fragility of RBCs, muscular weakness"], ["K", "—", "increased blood-clotting time"]]),
  P(R`<b>Fat-soluble</b>: A, D, E, K (stored in liver and adipose tissue). <b>Water-soluble</b>: B group and C (must be taken regularly; excreted). B12 can be stored in the liver.`),
  J(R`Vitamin names: B1 thiamine, B2 riboflavin, B6 pyridoxine, C ascorbic acid.`, "2026 · 2 Apr · Shift 1"),
  P(R`<b>Nucleic acids</b>: polymers of nucleotides (base + pentose sugar + phosphate). DNA: 2-deoxyribose, bases A, G, C, <b>T</b>; double helix (A–T, G–C). RNA: ribose, bases A, G, C, <b>U</b>; single strand; types m-RNA, r-RNA, t-RNA. Nucleoside = base + sugar; nucleotide = nucleoside + phosphate (5′ position). Linked by 3′–5′ phosphodiester bonds.`, null, S(s.line(40, 10, 40, 130) + s.line(120, 10, 120, 130) + [[20, "A", "T"], [45, "G", "C"], [70, "T", "A"], [95, "C", "G"]].map(([y, a, b]) => s.t(44, y + 5, a, 13) + s.line(56, y, 104, y, 'class="thin" stroke-dasharray="3 3"') + s.t(106, y + 5, b, 13)).join("") + s.t(140, 40, "A = T (2 H-bonds)", 12) + s.t(140, 60, "G ≡ C (3 H-bonds)", 12), 260, 135, "Base pairing in DNA")),
  P(R`Functions: DNA carries hereditary information (replication); RNA directs protein synthesis.`),
  P(R`<b>Hormones</b>: chemical messengers from endocrine glands — steroids (oestrogens, androgens), polypeptides (insulin, endorphins), amino-acid derivatives (adrenaline, <b>thyroxine</b>). Insulin and glucagon maintain blood glucose.`)
]]
],
pyq: {
  pat: [
    [R`Glucose anomers, rotations, open/cyclic forms`, "2026 · 5 Apr · Shift 1; 2026 · 5 Apr · Shift 2; 2026 · 8 Apr · Shift 2"],
    [R`Reducing / non-reducing disaccharides and their structures`, "2026 · 4 Apr · Shift 1"],
    [R`Amino-acid codes, essential or not, tyrosine/thyroxine`, "2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 1; 2026 · 8 Apr · Shift 2"],
    [R`Vitamin names and deficiency diseases`, "2026 · 2 Apr · Shift 1"],
    [R`Protein structure levels and denaturation`, "2026 · 5 Apr · Shift 2"]
  ],
  combo: [R`Biomolecules + stereochemistry (D/L, meso aldaric acids)`, R`Biomolecules + practical chemistry (FeCl3, Tollens', Fehling's)`, R`Glucose reactions + hydrocarbons (HI → n-hexane)`],
  trap: [R`Sucrose is non-reducing; maltose and lactose are reducing.`, R`D/L is not the sign of rotation.`],
  mist: [R`Confusing B1 (thiamine) and B2 (riboflavin).`, R`Thinking denaturation breaks peptide bonds.`]
}
});
})();
