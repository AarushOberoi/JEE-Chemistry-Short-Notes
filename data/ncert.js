// Chapter list: NCERT Chemistry (2026-27 reprint) Class 11 and Class 12 in book order,
// then JEE Main syllabus topics that are not in the current NCERT books.
// keys = topic keys in data/pyqs.js; w = JEE Main weightage level (1–4).
window.NCERT = [
  { id: "11-1", cls: 11, n: 1, t: "Some Basic Concepts of Chemistry", keys: ["basic"], w: 3 },
  { id: "11-2", cls: 11, n: 2, t: "Structure of Atom", keys: ["atom"], w: 3 },
  { id: "11-3", cls: 11, n: 3, t: "Classification of Elements and Periodicity in Properties", keys: ["period"], w: 2 },
  { id: "11-4", cls: 11, n: 4, t: "Chemical Bonding and Molecular Structure", keys: ["bond"], w: 3 },
  { id: "11-5", cls: 11, n: 5, t: "Thermodynamics", keys: ["thermo"], w: 3 },
  { id: "11-6", cls: 11, n: 6, t: "Equilibrium", keys: ["equil"], w: 4 },
  { id: "11-7", cls: 11, n: 7, t: "Redox Reactions", keys: ["redox"], w: 2 },
  { id: "11-8", cls: 11, n: 8, t: "Organic Chemistry – Some Basic Principles and Techniques", keys: ["goc"], w: 4 },
  { id: "11-9", cls: 11, n: 9, t: "Hydrocarbons", keys: ["hydro"], w: 4 },
  { id: "12-1", cls: 12, n: 1, t: "Solutions", keys: ["sol"], w: 3 },
  { id: "12-2", cls: 12, n: 2, t: "Electrochemistry", keys: ["electro"], w: 3 },
  { id: "12-3", cls: 12, n: 3, t: "Chemical Kinetics", keys: ["kinet"], w: 3 },
  { id: "12-4", cls: 12, n: 4, t: "The d- and f-Block Elements", keys: ["dblock"], w: 4 },
  { id: "12-5", cls: 12, n: 5, t: "Coordination Compounds", keys: ["coord"], w: 4 },
  { id: "12-6", cls: 12, n: 6, t: "Haloalkanes and Haloarenes", keys: ["halo"], w: 2 },
  { id: "12-7", cls: 12, n: 7, t: "Alcohols, Phenols and Ethers", keys: ["alco"], w: 3 },
  { id: "12-8", cls: 12, n: 8, t: "Aldehydes, Ketones and Carboxylic Acids", keys: ["carbonyl"], w: 3 },
  { id: "12-9", cls: 12, n: 9, t: "Amines", keys: ["amine"], w: 3 },
  { id: "12-10", cls: 12, n: 10, t: "Biomolecules", keys: ["biomol"], w: 3 },
  { id: "x-1", cls: "x", n: 1, t: "p-Block Elements (Groups 13–18)", keys: ["pblock"], w: 2 },
  { id: "x-2", cls: "x", n: 2, t: "Principles Related to Practical Chemistry", keys: ["practical"], w: 2 },
  { id: "x-3", cls: "x", n: 3, t: "Named Reactions at a Glance", keys: [], w: 4, rev: true },
  { id: "r-1", cls: "r", n: 1, t: "Reactions", keys: [], w: 4, rev: true },
  { id: "r-2", cls: "r", n: 2, t: "Inorganic Chemistry – Group-wise Trends", keys: [], w: 4, rev: true }
];
window.NCERT.forEach(c => { c.parts = [{ ch: c.id, pyq: 1 }]; });
