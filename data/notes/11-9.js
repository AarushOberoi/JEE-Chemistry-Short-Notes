(function () {
const { R, P, B, J, W, D, T, L, G, S, GR, RX, MAP, STEPS, KEY } = NB, s = NB.svg;
const newman = (cx, cy, stag) => { let o = s.circ(cx, cy, 22); [90, 210, 330].forEach(a => { const r = a * Math.PI / 180; o += s.line(cx, cy, cx + 38 * Math.cos(r), cy - 38 * Math.sin(r)) + s.t(cx + 46 * Math.cos(r) - 4, cy - 46 * Math.sin(r) + 4, "H", 11); }); [stag ? 270 : 100, stag ? 30 : 220, stag ? 150 : 340].forEach(a => { const r = a * Math.PI / 180; o += s.line(cx + 22 * Math.cos(r), cy - 22 * Math.sin(r), cx + 38 * Math.cos(r), cy - 38 * Math.sin(r), 'class="red"') + s.t(cx + 46 * Math.cos(r) - 4, cy - 46 * Math.sin(r) + 4, "H", 11, 'class="red"'); }); return o; };
NB.ch({
n: "11-9", short: "Hydrocarbons",
intro: R`<b>Big idea:</b> alkanes (only σ bonds) do <b>substitution</b> via free radicals; alkenes and alkynes (π bonds = loose electrons) do <b>electrophilic addition</b>; benzene (stable π sextet) does <b>electrophilic substitution</b> to keep its aromaticity.`,
sec: [
["Alkanes", [
  KEY([R`$\ce{C_nH_{2n+2}}$, sp³, "paraffins" (low reactivity). C1–C4 gases, C5–C17 liquids, ≥ C18 solids.`, R`B.p. rises with size, falls with branching: n-pentane 309 K > isopentane 301 K > neopentane 282.5 K.`, R`Combustion: $\ce{C_nH_{2n+2} + \frac{3n+1}{2}O2 -> nCO2 + (n+1)H2O}$.`]),
  J(R`Alkane needing 8 mol O2: (3n + 1)/2 = 8 → n = 5 (C5H12). Only one monochloro product → neopentane (4 primary C).`, "2026 · 2 Apr · Shift 1; 2026 · 6 Apr · Shift 2"),
  MAP("Making alkanes", "", [[R`$\ce{H2}$ + Pt/Pd (room T) or Ni (higher T, P)`, "from alkenes/alkynes", "hydrogenation"], [R`Zn + dil. HCl`, "from R–X (except fluorides)", "reduction"], [R`Na, dry ether`, "R–R from 2 R–X", "Wurtz"], [R`NaOH + CaO (soda lime), heat`, "R–H from RCOONa", "decarboxylation: one C less"], [R`electrolysis of RCOONa (aq)`, "R–R", "Kolbe electrolysis"]]),
  RX({ name: "Wurtz Reaction", eq: R`\ce{2CH3CH2Br + 2Na ->[\text{dry ether}] CH3CH2CH2CH3 + 2NaBr}`, prod: "alkane with double the carbon atoms", note: "Not used for odd-C alkanes: two different halides give a mixture of three alkanes." }),
  RX({ name: "Decarboxylation (Soda Lime)", eq: R`\ce{CH3COONa + NaOH ->[CaO][\Delta] CH4 + Na2CO3}`, prod: "alkane with one carbon less" }),
  RX({ name: "Kolbe's Electrolytic Method", eq: R`\ce{2CH3COONa + 2H2O ->[\text{electrolysis}] \underset{\text{anode}}{CH3-CH3 + 2CO2} + \underset{\text{cathode}}{H2 + 2NaOH}}`, prod: "even-C alkane (methane cannot be made)" }),
  RX({ name: "Free-Radical Halogenation", eq: R`\ce{CH4 + Cl2 ->[h\nu] CH3Cl + HCl}\ (\text{then } CH2Cl2, CHCl3, CCl4)`, cond: "UV light or heat", why: "Cl–Cl breaks homolytically (weakest bond) to start a chain", prod: "mixture of halo alkanes; 3° H > 2° H > 1° H replaced; rate F2 > Cl2 > Br2 > I2", mech: [R`<b>Initiation</b>: $\ce{Cl2 ->[h\nu] 2Cl^.}$`, R`<b>Propagation</b>: $\ce{CH4 + Cl^. -> CH3^. + HCl}$; $\ce{CH3^. + Cl2 -> CH3Cl + Cl^.}$`, R`<b>Termination</b>: $\ce{Cl^. + Cl^. -> Cl2}$, $\ce{CH3^. + CH3^. -> C2H6}$, $\ce{CH3^. + Cl^. -> CH3Cl}$`], ref: "Monochloro and dichloro product counting (2026 · 2 Apr · Shift 1; 8 Apr · Shift 2)" }),
  MAP("Other reactions of alkanes", "Alkane", [[R`$\ce{O2}$, Cu, 523 K, 100 atm`, "CH₄ → CH₃OH"], [R`$\ce{Mo2O3}$`, "CH₄ → HCHO"], [R`$\ce{KMnO4}$`, "(CH₃)₃CH → (CH₃)₃COH"], [R`anhyd. $\ce{AlCl3}$ + HCl`, "n-alkane → branched isomers", "isomerisation"], [R`$\ce{Cr2O3/V2O5/Mo2O3}$, 773 K, 10–20 atm`, "n-hexane → benzene", "aromatisation (reforming)"], [R`$\ce{H2O}$, Ni, 1273 K`, "CH₄ → CO + 3H₂", "steam reforming"], [R`heat (973 K, Pt/Pd/Ni)`, "smaller alkanes + alkenes", "pyrolysis / cracking"]]),
  J(R`n-Heptane: isomerisation → 2,4-dimethylpentane; aromatisation → toluene; cyclisation → methylcyclohexane.`, "2026 · 2 Apr · Shift 2")
]],
["Conformations of Ethane", [
  P(R`Rotation about C–C σ bond gives conformations. <b>Staggered</b> (H's farthest apart) is most stable; <b>eclipsed</b> has maximum <b>torsional strain</b>. Energy gap ≈ <b>12.5 kJ mol⁻¹</b> — too small to isolate conformers.`, null, S(newman(55, 60, true) + s.t(25, 125, "staggered", 12) + newman(175, 60, false) + s.t(145, 125, "eclipsed", 12), 230, 130, "Newman projections")),
  G({ xl: "dihedral angle", yl: "E", xr: [0, 360], yr: [0, 14], fns: [x => 6.25 * (1 + Math.cos(3 * x * Math.PI / 180))], vx: [60, 180, 300], t: "Ethane energy vs rotation: peaks = eclipsed" })
]],
["Alkenes", [
  KEY([R`$\ce{C_nH_{2n}}$; C=C = σ + π (π is weak and exposed → attacked by E⁺).`, R`<b>Geometrical isomerism</b> (cis/trans) needs two different groups on each C=C carbon. cis: more polar (higher b.p.); trans: packs better (higher m.p.).`, R`<b>Stability</b> ∝ number of alkyl groups (hyperconjugation); trans > cis.`]),
  J(R`Stability: 2,3-dimethylbut-2-ene > 2-methylbut-2-ene > cis-but-2-ene > prop-1-ene.`, "2026 · 5 Apr · Shift 2"),
  MAP("Making alkenes", "", [[R`$\ce{H2}$, Lindlar's catalyst (Pd/C + S or quinoline)`, "alkyne → <b>cis</b>-alkene"], [R`Na / liquid $\ce{NH3}$`, "alkyne → <b>trans</b>-alkene"], [R`alcoholic KOH, heat`, "R–X → alkene", "dehydrohalogenation (Zaitsev)"], [R`Zn dust`, "vic-dihalide → alkene", "dehalogenation"], [R`conc. $\ce{H2SO4}$, heat`, "alcohol → alkene", "acidic dehydration"]]),
  RX({ name: "Markovnikov Addition of HX", eq: R`\ce{CH3CH=CH2 + HBr -> CH3CHBrCH3}\ (\text{2-bromopropane})`, reag: "HX (reactivity HI > HBr > HCl)", why: "H⁺ adds first to give the <b>more stable</b> (2°) carbocation; Br⁻ then adds to it", prod: "negative part goes to the carbon with fewer H", mech: [R`$\ce{CH3CH=CH2 + H+ -> CH3C^+HCH3}$ (2°, more stable than 1°)`, R`$\ce{CH3C^+HCH3 + Br- -> CH3CHBrCH3}$`] }),
  RX({ name: "Peroxide Effect (Kharash) — Anti-Markovnikov", eq: R`\ce{CH3CH=CH2 + HBr ->[(C6H5CO)2O2] CH3CH2CH2Br}`, reag: "HBr + benzoyl peroxide", why: "free-radical chain: Br• adds first to give the more stable 2° <b>radical</b>", prod: "1-bromopropane", note: "Only HBr. HCl: H–Cl (430.5 kJ) too strong to break. HI: I• radicals combine to I2 instead." }),
  MAP("Other additions & oxidation", "Alkene", [[R`$\ce{Br2}$ in $\ce{CCl4}$`, "vic-dibromide", "red-brown colour lost: test for C=C"], [R`cold conc. $\ce{H2SO4}$`, "alkyl hydrogen sulphate", "Markovnikov"], [R`$\ce{H2O/H+}$`, "alcohol", "Markovnikov"], [R`cold dil. alk. $\ce{KMnO4}$ (Baeyer's reagent)`, "vic-glycol", "pink colour lost: test for C=C"], [R`hot $\ce{KMnO4/H+}$`, "ketones / acids", "but-2-ene → 2CH₃COOH"], [R`high T, P, catalyst`, "polythene", "polymerisation"]]),
  RX({ name: "Ozonolysis", eq: R`\ce{CH3CH=CH2 ->[(i)\ O3][(ii)\ Zn/H2O] CH3CHO + HCHO}`, why: "the C=C is cut and each carbon becomes C=O", prod: "aldehydes/ketones that reveal the position of C=C", note: "Shortcut: join the C=O carbons of the products with C=C to get the alkene.", ref: "Alkene from ozonolysis products (2026 · 4 Apr · Shift 1)" })
]],
["Alkynes", [
  KEY([R`$\ce{C_nH_{2n-2}}$; sp carbon (50% s) → C≡C–H is <b>acidic</b>.`, R`Acidity: ethyne > ethene > ethane; $\ce{HC#CH > CH3C#CH >> CH3C#CCH3}$ (no acidic H).`]),
  MAP("Reactions of alkynes", "R–C≡C–H", [[R`Na or $\ce{NaNH2}$`, "sodium acetylide + H₂/NH₃", "acidic H"], [R`$\ce{H2}$ (Pt/Pd/Ni)`, "alkane"], [R`$\ce{Br2}$`, "tetrabromide", "colour lost: unsaturation"], [R`HX (2 mol)`, "gem-dihalide", "Markovnikov, via vinylic cation"], [R`$\ce{H2O}$, $\ce{HgSO4}$/dil. $\ce{H2SO4}$, 333 K`, "ethyne → ethanal; propyne → propanone", "via enol"], [R`red-hot Fe tube, 873 K`, "3 HC≡CH → benzene", "cyclic polymerisation"]]),
  J(R`Styrene → Br2 → excess NaNH2 (alkyne) → CH3I → Na/NH3 → trans-1-phenylpropene (M = 118).`, "2026 · 4 Apr · Shift 2")
]],
["Benzene & Aromaticity", [
  KEY([R`Planar, all C–C equal (139 pm), resonance hybrid → extra stability → prefers <b>substitution</b>, not addition.`, R`<b>Hückel rule</b>: cyclic + planar + fully conjugated + (4n + 2) π electrons → aromatic.`]),
  T(["Species", "π e⁻", "Aromatic?"], [["benzene", "6", "yes"], ["cyclopentadienyl anion", "6", "yes"], ["tropylium (cycloheptatrienyl) cation", "6", "yes"], ["cyclopropenyl cation / cyclobutadienyl dication", "2", "yes"], ["naphthalene / phenanthrene", "10 / 14", "yes"], ["cyclobutadiene, cyclooctatetraene (planar)", "4 / 8", "no (4n)"], ["ring with an sp³ C (e.g. cyclohexadienyl anion)", "—", "no (not fully conjugated)"]]),
  J(R`Aromatic: tropylium cation, phenanthrene, 1,2-dihydronaphthalene (has a benzene ring), cyclobutadienyl dication. Not: p-benzoquinone, cyclohexadienyl anion.`, "2026 · 8 Apr · Shift 2"),
  MAP("Making benzene", "", [[R`red-hot Fe tube, 873 K`, "from ethyne"], [R`soda lime, heat`, "from sodium benzoate"], [R`Zn dust, heat`, "from phenol"]]),
  STEPS("Electrophilic aromatic substitution (all types)", [["Make E⁺", R`$\ce{HNO3 + 2H2SO4 -> NO2+ + ...}$`, "Lewis/Brønsted acid"], ["E⁺ attacks π cloud", "σ-complex (arenium ion)", "sp³ C; slow step"], ["Lose H⁺", "aromaticity restored", "base: AlCl₄⁻ / HSO₄⁻"]]),
  T(["Reaction", "Reagent", "E⁺", "Product"], [["nitration", "conc. HNO3 + conc. H2SO4", "NO2⁺", "nitrobenzene"], ["halogenation", "Cl2 / anhyd. FeCl3 (dark)", "Cl⁺", "chlorobenzene"], ["sulphonation", "fuming H2SO4", "SO3", "benzenesulphonic acid"], ["Friedel–Crafts alkylation", "CH3Cl / anhyd. AlCl3", "CH3⁺", "toluene"], ["Friedel–Crafts acylation", "CH3COCl / anhyd. AlCl3", "CH3CO⁺", "acetophenone"]]),
  RX({ name: "Friedel–Crafts Alkylation & Acylation", eq: [R`\ce{C6H6 + CH3Cl ->[anhyd.\ AlCl3] C6H5CH3 + HCl}`, R`\ce{C6H6 + CH3COCl ->[anhyd.\ AlCl3] C6H5COCH3 + HCl}`], why: "AlCl3 pulls Cl to create R⁺ / RCO⁺", prod: "alkylbenzene / aryl ketone", note: "Alkylation: 1° carbocations <b>rearrange</b> (n-PrCl → isopropylbenzene) and polyalkylation occurs. Fails on deactivated rings (nitrobenzene) and on aniline.", ref: "n-Propyl chloride → isopropylbenzene (2026 · 5 Apr · Shift 1)" }),
  MAP("Addition reactions of benzene (harsh conditions)", "C₆H₆", [[R`$\ce{H2}$, Ni, high T/P`, "cyclohexane"], [R`$\ce{Cl2}$, UV, 500 K`, "benzene hexachloride (BHC)"], ["combustion", "CO₂ + H₂O, sooty flame"]])
]],
["Directive Influence — Where Does E⁺ Go?", [
  T(["Group on ring", "Examples", "Directs", "Rate vs benzene"], [["strong/moderate e⁻ donors (+R, +I)", "–OH, –NH2, –OCH3, –NHCOCH3, –CH3", "<b>o, p</b>", "faster (activating)"], ["halogens (−I > +R)", "–Cl, –Br, –I", "<b>o, p</b>", "slower (deactivating)"], ["e⁻ withdrawers (−R, −I)", "–NO2, –CN, –CHO, –COR, –COOH, –SO3H", "<b>meta</b>", "slower (deactivating)"]]),
  P(R`<b>Why?</b> Donors push electron density to o and p (resonance). Withdrawers remove density mostly from o and p, so meta is the "least poor" position.`),
  J(R`Benzanilide: the N-attached ring (–NHCOR, activating) is attacked at para. Benzene → toluene → p-chlorotoluene → p-chlorobenzoic acid.`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 1")
]]
],
pyq: {
  pat: [
    [R`Counting halogenation products`, "2026 · 2 Apr · Shift 1; 2026 · 8 Apr · Shift 2"],
    [R`Alkane from O2 requirement; isomerisation/aromatisation`, "2026 · 2 Apr · Shift 1; 2026 · 2 Apr · Shift 2; 2026 · 6 Apr · Shift 2"],
    [R`Ozonolysis → identify the alkene`, "2026 · 4 Apr · Shift 1"],
    [R`Friedel–Crafts rearrangement; directing effects; multistep sequences`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 1; 2026 · 5 Apr · Shift 1"],
    [R`Alkene stability, aromaticity counts, alkyne sequences`, "2026 · 4 Apr · Shift 2; 2026 · 5 Apr · Shift 2; 2026 · 8 Apr · Shift 2"]
  ],
  combo: [R`Hydrocarbons + mole concept (combustion)`, R`Hydrocarbons + carbonyls (ozonolysis, alkyne hydration)`, R`Hydrocarbons + GOC (carbocation rearrangement)`],
  trap: [R`Peroxide effect: HBr only.`, R`Lindlar → cis; Na/liq. NH3 → trans.`],
  mist: [R`Ignoring rearrangement in Friedel–Crafts alkylation.`, R`Calling a ring with an sp³ carbon aromatic.`]
}
});
})();
