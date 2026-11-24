# ⚗️ JEE Chemistry Short Notes

Chapter-wise **JEE Main Chemistry short notes** with JEE Main PYQ (previous year question) focus points, covering Class 11, Class 12 and extra JEE Main topics.

🔗 **Read online:** https://jeechemistryshortnotes.aarushoberoi.workers.dev

---

## ✨ Features

- **Chapter-wise notes** across Physical, Organic and Inorganic Chemistry (24 sections)
- **JEE Main PYQ focus points** in each chapter
- **Weightage tags** on every chapter: Medium, High or Very high, so you know where to spend your time
- **Quick-revision sections** for named reactions, reactions and inorganic trends
- **Revision tracker** (*Revised X / 24 chapters*) to mark chapters as done
- **Light and dark theme** toggle
- **Single-page app** with hash-based routing (e.g. `/#/c/11-6`), so every chapter has its own shareable link
- **Mobile-friendly** with a collapsible chapter menu
- **No sign-up, no backend**, just open and revise

## 📚 Chapters

### Class 11

| # | Chapter | JEE Main weightage |
| - | ------- | ------------------ |
| 1 | Some Basic Concepts of Chemistry | High |
| 2 | Structure of Atom | High |
| 3 | Classification of Elements and Periodicity in Properties | Medium |
| 4 | Chemical Bonding and Molecular Structure | High |
| 5 | Thermodynamics | High |
| 6 | Equilibrium | Very high |
| 7 | Redox Reactions | Medium |
| 8 | Organic Chemistry: Some Basic Principles and Techniques | Very high |
| 9 | Hydrocarbons | Very high |

### Class 12

| # | Chapter | JEE Main weightage |
| - | ------- | ------------------ |
| 1 | Solutions | High |
| 2 | Electrochemistry | High |
| 3 | Chemical Kinetics | High |
| 4 | The d- and f-Block Elements | Very high |
| 5 | Coordination Compounds | Very high |
| 6 | Haloalkanes and Haloarenes | Medium |
| 7 | Alcohols, Phenols and Ethers | High |
| 8 | Aldehydes, Ketones and Carboxylic Acids | High |
| 9 | Amines | High |
| 10 | Biomolecules | High |

### Extra JEE Main Topics

| # | Chapter | JEE Main weightage |
| - | ------- | ------------------ |
| 1 | p-Block Elements (Groups 13–18) | Medium |
| 2 | Principles Related to Practical Chemistry | Medium |
| 3 | Named Reactions at a Glance | Quick revision |

### Revision Sections

| # | Section | Type |
| - | ------- | ---- |
| 1 | Reactions | Quick revision |
| 2 | Inorganic Chemistry: Group-wise Trends | Quick revision |

## 🗂️ Project Structure

```
JEE-Chemistry-Short-Notes/
├── index.html    # App shell
├── css/          # Stylesheets
├── js/           # App logic (routing, rendering, revision tracker)
├── data/         # Chapter notes content
├── img/          # Logo and images
└── README.md
```

## 🚀 Run Locally

No build tools needed. Clone the repo and serve the folder with any static server:

```bash
git clone https://github.com/AarushOberoi/JEE-Chemistry-Short-Notes.git
cd JEE-Chemistry-Short-Notes

# Option 1: Python
python -m http.server 8000

# Option 2: Node
npx serve .
```

Then open `http://localhost:8000`.

## ☁️ Deployment

Deployed as static assets on **Cloudflare Workers**:

```bash
npx wrangler deploy
```

## 🛠️ Built With

- HTML / CSS / JavaScript
- Cloudflare Workers (hosting)

## 🔗 Related

- [JEE Physics Short Notes](https://jeephysicsshortnotes.aarushoberoi.workers.dev)
- [JEE Maths Short Notes](https://jeemathsshortnotes.aarushoberoi.workers.dev)
- [JEE Formula Sheet](https://jee-formula-sheet.aarushoberoi.workers.dev)

## 🤝 Contributing

Found a typo or a wrong reaction? Contributions are welcome:

1. Fork the repository
2. Create a branch: `git checkout -b fix/chapter-name`
3. Commit your changes and open a pull request

## ⚠️ Disclaimer

These are unofficial study notes. Chapter weightage labels are indicative, based on JEE Main trends. Always cross-check with your textbooks and the official NTA syllabus.

## 👤 Author

Made by [Aarush Oberoi](https://github.com/AarushOberoi)
