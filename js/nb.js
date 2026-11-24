// Notebook helpers used by data/notes/<id>.js files.
// Item builders:
//   P(text, formula?, diagram?)  numbered point; formula = LaTeX string or array of strings (boxed)
//   B(formula, caption?)         boxed formula without a number
//   J(text, ref?)                JEE PYQ insight sticky note (ref = "2024 · 27 Jan · M")
//   W(text)                      warning / common mistake
//   D(title, steps[])            collapsible derivation (steps: text with $..$ or "$$..$$")
//   T(head[], rows[][])          table
//   L(items[])                   bullet list
//   G(plotSpec)                  graph diagram   { xl, yl, xr:[a,b], yr:[a,b], fns:[x=>..], lab:[..], t?, w?, h?,
//                                 fill:[[i, j|null, a, b]], par:[{f:t=>[x,y], a, b}], vx:[x], hy:[y], pts:[[x,y,label]] }
//   S(svgInner, w, h, cap?)      hand sketch diagram (SVG drawn in a w×h box)
(function () {
  const NB = window.NB = { chapters: {} };
  NB.ch = (o) => { NB.chapters[o.n] = o; };
  NB.R = String.raw;
  NB.P = (t, f, d) => ({ k: "P", t, f, d });
  NB.B = (f, cap) => ({ k: "B", f, cap });
  NB.J = (t, ref) => ({ k: "J", t, ref });
  NB.W = (t) => ({ k: "W", t });
  NB.D = (title, steps) => ({ k: "D", title, steps });
  NB.T = (head, rows) => ({ k: "T", head, rows });
  NB.L = (items) => ({ k: "L", items });
  NB.G = (spec) => ({ k: "G", spec });
  NB.GR = (title, specs) => ({ k: "GR", title, specs });
  NB.S = (svg, w, h, cap) => ({ k: "S", svg, w: w || 220, h: h || 160, cap });

  // --- chemistry note blocks ---
  // RX({name, tag, eq: "\\ce{...}" | [..], reag, cond, why, prod, mech: [..], note, ref})  named-reaction card
  NB.RX = (o) => Object.assign({ k: "RX" }, o);
  // MAP(title, start, rows[[reagent, product, note?]])  conversion map: one starting compound, many products
  NB.MAP = (title, start, rows) => ({ k: "MAP", title, start, rows });
  // STEPS(title, steps[[label, equation, why?]])  mechanism / sequence as connected step boxes
  NB.STEPS = (title, steps) => ({ k: "STEPS", title, steps });
  // KEY(items)  "Remember" box: short must-know lines
  NB.KEY = (items, title) => ({ k: "KEY", items, title });
  // --- small SVG drawing helpers (strokes use currentColor, fills use CSS vars) ---
  const a = NB.svg = {};
  a.line = (x1, y1, x2, y2, o = "") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" ${o}/>`;
  a.arr = (x1, y1, x2, y2, o = "") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" marker-end="url(#ah)" ${o}/>`;
  a.txt = (x, y, s, o = "") => `<text x="${x}" y="${y}" ${o}>${s}</text>`;
  a.rect = (x, y, w, h, o = "") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" ${o}/>`;
  a.circ = (x, y, r, o = "") => `<circle cx="${x}" cy="${y}" r="${r}" ${o}/>`;
  a.path = (d, o = "") => `<path d="${d}" ${o}/>`;
  a.dash = 'stroke-dasharray="4 3"';
  a.fill = 'class="fl"';
  a.fill2 = 'class="fl2"';
  a.ground = (x1, x2, y) => `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}"/>` + Array.from({ length: Math.floor((x2 - x1) / 10) }, (_, i) => `<line x1="${x1 + i * 10 + 10}" y1="${y}" x2="${x1 + i * 10}" y2="${y + 7}" class="thin"/>`).join("");

  // --- composite helpers for physics sketches ---
  a.poly = (pts, o = "") => `<polyline points="${pts.map(p => p.join(",")).join(" ")}" ${o}/>`;
  a.ell = (cx, cy, rx, ry, o = "") => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" ${o}/>`;
  a.dot = (x, y, r = 3) => `<circle cx="${x}" cy="${y}" r="${r}" class="dot"/>`;
  a.block = (x, y, w, h, lab = "") => a.rect(x, y, w, h, 'class="fl"') + (lab ? a.txt(x + w / 2, y + h / 2 + 5, lab, 'text-anchor="middle"') : "");
  a.spring = (x1, y, x2, n = 7, amp = 7) => { const st = (x2 - x1) / (2 * n + 2); let x = x1 + st, d = `M${x1} ${y} L${x} ${y}`; for (let i = 0; i < 2 * n; i++) { x += st; d += ` L${x.toFixed(1)} ${i === 2 * n - 1 ? y : y + (i % 2 ? amp : -amp)}`; } return a.path(d + ` L${x2} ${y}`); };
  a.vspring = (x, y1, y2, n = 7, amp = 7) => { const st = (y2 - y1) / (2 * n + 2); let y = y1 + st, d = `M${x} ${y1} L${x} ${y}`; for (let i = 0; i < 2 * n; i++) { y += st; d += ` L${i === 2 * n - 1 ? x : x + (i % 2 ? amp : -amp)} ${y.toFixed(1)}`; } return a.path(d + ` L${x} ${y2}`); };
  a.res = (x1, y, x2, lab = "") => { const m = (x1 + x2) / 2, w = Math.min(36, (x2 - x1) * .6); return a.line(x1, y, m - w / 2, y) + a.spring(m - w / 2, y, m + w / 2, 3, 6) + a.line(m + w / 2, y, x2, y) + (lab ? a.txt(m, y - 10, lab, 'text-anchor="middle"') : ""); };
  a.vres = (x, y1, y2, lab = "") => { const m = (y1 + y2) / 2, w = Math.min(36, (y2 - y1) * .6); return a.line(x, y1, x, m - w / 2) + a.vspring(x, m - w / 2, m + w / 2, 3, 6) + a.line(x, m + w / 2, x, y2) + (lab ? a.txt(x + 10, m + 4, lab) : ""); };
  a.cell = (x, y, lab = "") => a.line(x - 3, y - 12, x - 3, y + 12, 'style="stroke-width:2.4"') + a.line(x + 3, y - 6, x + 3, y + 6, 'style="stroke-width:3.2"') + (lab ? a.txt(x, y - 16, lab, 'text-anchor="middle"') : "");
  a.cap = (x, y, lab = "") => a.line(x - 4, y - 12, x - 4, y + 12, 'style="stroke-width:2.6"') + a.line(x + 4, y - 12, x + 4, y + 12, 'style="stroke-width:2.6"') + (lab ? a.txt(x, y - 16, lab, 'text-anchor="middle"') : "");
  a.ind = (x1, y, x2, lab = "") => { const n = 4, w = (x2 - x1) / n; let d = `M${x1} ${y}`; for (let i = 0; i < n; i++) d += ` a${w / 2} ${w / 2} 0 0 1 ${w} 0`; return a.path(d) + (lab ? a.txt((x1 + x2) / 2, y - w / 2 - 6, lab, 'text-anchor="middle"') : ""); };
  a.pulley = (x, y, r = 14) => a.circ(x, y, r, 'class="fl2"') + a.dot(x, y, 2.5);
  a.arcm = (cx, cy, r, a1, a2, o = 'class="thin"') => { const p = d => [cx + r * Math.cos(d * Math.PI / 180), cy - r * Math.sin(d * Math.PI / 180)]; const [x1, y1] = p(a1), [x2, y2] = p(a2); return a.path(`M${x1.toFixed(1)} ${y1.toFixed(1)} A${r} ${r} 0 ${Math.abs(a2 - a1) > 180 ? 1 : 0} 0 ${x2.toFixed(1)} ${y2.toFixed(1)}`, o); };
  a.wave = (x1, y, x2, amp, cyc, o = "", ph = 0) => { let d = ""; for (let k = 0; k <= 120; k++) { const x = x1 + (x2 - x1) * k / 120; d += (k ? "L" : "M") + x.toFixed(1) + " " + (y - amp * Math.sin(2 * Math.PI * cyc * k / 120 + ph)).toFixed(1); } return a.path(d, o); };
  a.lens = (x, y, h, concave = false) => concave ? a.path(`M${x - 9} ${y - h} L${x + 9} ${y - h} Q${x + 2} ${y} ${x + 9} ${y + h} L${x - 9} ${y + h} Q${x - 2} ${y} ${x - 9} ${y - h}Z`, 'class="fl2"') : a.path(`M${x} ${y - h} Q${x + 16} ${y} ${x} ${y + h} Q${x - 16} ${y} ${x} ${y - h}Z`, 'class="fl2"');
  a.into = (x, y) => a.circ(x, y, 5, 'class="thin"') + a.line(x - 3, y - 3, x + 3, y + 3, 'class="thin"') + a.line(x - 3, y + 3, x + 3, y - 3, 'class="thin"');
  a.outof = (x, y) => a.circ(x, y, 5, 'class="thin"') + a.dot(x, y, 1.6);
  a.grid = (x1, y1, x2, y2, gap, f) => { let s = ""; for (let x = x1; x <= x2; x += gap) for (let y = y1; y <= y2; y += gap) s += f(x, y); return s; };
  a.hatch = (x1, x2, y) => a.ground(x1, x2, y);
  a.wall = (x, y1, y2) => a.line(x, y1, x, y2) + Array.from({ length: Math.floor((y2 - y1) / 10) }, (_, i) => `<line x1="${x}" y1="${y1 + i * 10}" x2="${x - 7}" y2="${y1 + i * 10 + 10}" class="thin"/>`).join("");
  a.ceil = (x1, x2, y) => a.line(x1, y, x2, y) + Array.from({ length: Math.floor((x2 - x1) / 10) }, (_, i) => `<line x1="${x1 + i * 10}" y1="${y}" x2="${x1 + i * 10 + 10}" y2="${y - 7}" class="thin"/>`).join("");

  // --- maths helpers ---
  a.axes = (ox, oy, x1, x2, y1, y2, xl = "x", yl = "y") => a.arr(x1, oy, x2, oy, 'class="thin"') + a.arr(ox, y1, ox, y2, 'class="thin"') + a.txt(x2 - 8, oy + 14, xl) + a.txt(ox + 6, y2 + 10, yl);
  a.venn = (shade = "", labs = ["A", "B"]) => { // shade: "A", "B", "AB" (∩), "U" (∪), "A-B", "B-A", "D" (symmetric difference), "C" (complement of A∪B)
    const cA = "M40 65 a45 45 0 1 0 90 0 a45 45 0 1 0 -90 0", cB = "M90 65 a45 45 0 1 0 90 0 a45 45 0 1 0 -90 0", lens = "M110 27.6 A45 45 0 0 1 110 102.4 A45 45 0 0 1 110 27.6Z";
    const F = d => `<path d="${d}" class="fl" fill-rule="evenodd" style="stroke:none"/>`;
    const sh = { A: F(cA), B: F(cB), AB: F(lens), U: F(cA) + F(cB), "A-B": F(cA + " " + lens), "B-A": F(cB + " " + lens), D: F(cA + " " + cB), C: F("M5 5 h210 v120 h-210Z") + `<path d="${cA}" style="fill:var(--paper);stroke:none"/><path d="${cB}" style="fill:var(--paper);stroke:none"/>` }[shade] || "";
    return sh + a.rect(5, 5, 210, 120, 'class="thin" style="fill:none"') + a.path(cA, 'style="fill:none"') + a.path(cB, 'style="fill:none"') + a.txt(48, 30, labs[0]) + a.txt(165, 30, labs[1]) + a.txt(12, 20, "U");
  };
  a.tri = (p, o = "") => a.path(`M${p[0][0]} ${p[0][1]} L${p[1][0]} ${p[1][1]} L${p[2][0]} ${p[2][1]}Z`, o);
  a.lab = (x, y, s) => a.dot(x, y) + a.txt(x + 5, y - 5, s);

  // --- chemistry helpers ---
  // benzene ring: centre, radius, subs = {0: "OH", 1: "", ...} positions 0..5 clockwise from top
  a.hexPts = (cx, cy, r) => [0, 1, 2, 3, 4, 5].map(k => [cx + r * Math.sin(k * Math.PI / 3), cy - r * Math.cos(k * Math.PI / 3)]);
  a.benz = (cx, cy, r = 24, subs = {}, ring = true) => { const P = a.hexPts(cx, cy, r); let o = a.path("M" + P.map(p => p.map(v => v.toFixed(1)).join(" ")).join(" L") + "Z"); if (ring) o += a.circ(cx, cy, r * 0.58, 'class="thin"'); Object.entries(subs).forEach(([k, lab]) => { const [x, y] = P[k], dx = x - cx, dy = y - cy, L = Math.hypot(dx, dy), ex = x + dx / L * 16, ey = y + dy / L * 16; o += a.line(x, y, ex, ey); if (lab) o += a.txt(ex + dx / L * 4 + (dx < -1 ? -8 * lab.length : dx > 1 ? 0 : -4 * lab.length), ey + dy / L * 4 + (dy > 1 ? 10 : dy < -1 ? -2 : 4), lab, 'style="font-size:13px"'); }); return o; };
  a.ring = (cx, cy, r, n, o = "") => { const P = Array.from({ length: n }, (_, k) => [cx + r * Math.sin(2 * k * Math.PI / n), cy - r * Math.cos(2 * k * Math.PI / n)]); return a.path("M" + P.map(p => p.map(v => v.toFixed(1)).join(" ")).join(" L") + "Z", o); };
  // bonds: single/double/triple between two points
  a.bond = (x1, y1, x2, y2, n = 1, o = "") => { if (n === 1) return a.line(x1, y1, x2, y2, o); const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), nx = -dy / L * 3, ny = dx / L * 3; if (n === 2) return a.line(x1 + nx, y1 + ny, x2 + nx, y2 + ny, o) + a.line(x1 - nx, y1 - ny, x2 - nx, y2 - ny, o); return a.line(x1, y1, x2, y2, o) + a.line(x1 + 1.6 * nx, y1 + 1.6 * ny, x2 + 1.6 * nx, y2 + 1.6 * ny, o) + a.line(x1 - 1.6 * nx, y1 - 1.6 * ny, x2 - 1.6 * nx, y2 - 1.6 * ny, o); };
  a.wedge = (x1, y1, x2, y2) => { const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), nx = -dy / L * 4, ny = dx / L * 4; return `<path d="M${x1} ${y1} L${x2 + nx} ${y2 + ny} L${x2 - nx} ${y2 - ny}Z" style="fill:currentColor"/>`; };
  a.hash = (x1, y1, x2, y2) => { const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), nx = -dy / L, ny = dx / L; let o = ""; for (let k = 1; k <= 6; k++) { const t = k / 6, w = 4.5 * t; o += a.line(x1 + dx * t + nx * w, y1 + dy * t + ny * w, x1 + dx * t - nx * w, y1 + dy * t - ny * w, 'class="thin"'); } return o; };
  // orbital lobe pair along angle (deg), signs shaded
  a.lobe = (x, y, len, ang, o = 'class="fl"') => { const r = ang * Math.PI / 180, cx = x + Math.cos(r) * len / 2, cy = y - Math.sin(r) * len / 2; return `<ellipse cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" rx="${(len / 2).toFixed(1)}" ry="${(len / 4.2).toFixed(1)}" transform="rotate(${-ang} ${cx.toFixed(1)} ${cy.toFixed(1)})" ${o}/>`; };
  a.porb = (x, y, len, ang) => a.lobe(x, y, len, ang, 'class="fl"') + a.lobe(x, y, len, ang + 180, 'class="fl2"');
  a.dorb = (x, y, len, ang) => a.lobe(x, y, len, ang, 'class="fl"') + a.lobe(x, y, len, ang + 180, 'class="fl"') + a.lobe(x, y, len, ang + 90, 'class="fl2"') + a.lobe(x, y, len, ang + 270, 'class="fl2"');
  // energy level with electrons: n = 0,1,2 ; arrows
  a.lvl = (x, y, w, n = 0, lab = "") => a.line(x, y, x + w, y, 'style="stroke-width:2"') + (n >= 1 ? a.txt(x + w / 2 - (n === 2 ? 7 : 3), y - 3, "↑", 'style="font-size:14px"') : "") + (n === 2 ? a.txt(x + w / 2 + 1, y - 3, "↓", 'style="font-size:14px"') : "") + (lab ? a.txt(x + w + 4, y + 4, lab, 'style="font-size:12px"') : "");
  // energy profile hump from (x1,y1) to (x2,y2) with peak height yp
  a.hump = (x1, y1, x2, y2, yp, o = 'class="blue"') => { const m = (x1 + x2) / 2; return a.path(`M${x1} ${y1} L${x1 + 15} ${y1} C${m - 25} ${y1}, ${m - 18} ${yp}, ${m} ${yp} C${m + 18} ${yp}, ${m + 25} ${y2}, ${x2 - 15} ${y2} L${x2} ${y2}`, o); };
  a.rarr = (x1, y, x2, top = "", bot = "") => a.arr(x1, y, x2, y) + (top ? a.txt((x1 + x2) / 2, y - 6, top, 'text-anchor="middle" style="font-size:12px"') : "") + (bot ? a.txt((x1 + x2) / 2, y + 15, bot, 'text-anchor="middle" style="font-size:12px"') : "");
  a.t = (x, y, s, size = 14, o = "") => a.txt(x, y, s, `style="font-size:${size}px" ${o}`);
})();
