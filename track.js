#!/usr/bin/env node
/**
 * LeetCode Practice Tracker
 *
 * Usage:
 *   node track.js                    → Overall progress + by topic
 *   node track.js done               → Mark current folder as DONE
 *   node track.js done <path>        → Mark specific problem as DONE
 *   node track.js undo               → Unmark current folder
 *   node track.js undo <path>        → Unmark specific problem
 *   node track.js --solved           → List solved problems
 *   node track.js --topic            → Progress by topic
 *   node track.js --topic dp         → Filter by topic name
 *   node track.js --next             → Suggest next unsolved problem
 *   node track.js --next easy        → Next unsolved easy problem
 */

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const args = process.argv.slice(2);
const DONE_MARKER = "<!-- SOLVED -->";

// --- Mark / Unmark commands ---

function findProblemDir(target) {
  if (target) {
    // Try relative to ROOT first
    const rel = path.join(ROOT, target);
    if (fs.existsSync(path.join(rel, "solution.js"))) return rel;
    // Try absolute/relative to CWD
    const abs = path.resolve(target);
    if (fs.existsSync(path.join(abs, "solution.js"))) return abs;
    // Try as folder name search
    return findByName(target);
  }
  // Check CWD
  if (fs.existsSync(path.join(process.cwd(), "solution.js"))) return process.cwd();
  return null;
}

function findByName(name) {
  // Search recursively for folder matching name
  const search = (dir) => {
    for (const entry of fs.readdirSync(dir)) {
      const full = path.join(dir, entry);
      if (!fs.statSync(full).isDirectory()) continue;
      if (entry.includes(name) && fs.existsSync(path.join(full, "solution.js"))) return full;
      const found = search(full);
      if (found) return found;
    }
    return null;
  };
  return search(ROOT);
}

function markDone(target) {
  const dir = findProblemDir(target);
  if (!dir) {
    console.log("❌ Not in a problem folder. Use: node track.js done <folder-name>");
    return;
  }
  const folder = path.basename(dir);
  // Already done?
  if (folder.startsWith("DONE-")) {
    console.log("⚠️  Already marked as DONE");
    return;
  }
  // Rename folder: 0001-two-sum → DONE-0001-two-sum
  const parent = path.dirname(dir);
  const newName = `DONE-${folder}`;
  const newDir = path.join(parent, newName);
  fs.renameSync(dir, newDir);

  // Also add marker in README
  const readme = path.join(newDir, "README.md");
  if (fs.existsSync(readme)) {
    let content = fs.readFileSync(readme, "utf-8");
    if (!content.includes(DONE_MARKER)) {
      content = content.replace(/^(# .+)$/m, `$1 ✅\n${DONE_MARKER}`);
      fs.writeFileSync(readme, content);
    }
  }
  console.log(`✅ ${folder} → ${newName}`);
}

function unmarkDone(target) {
  const dir = findProblemDir(target);
  if (!dir) {
    console.log("❌ Not in a problem folder.");
    return;
  }
  const folder = path.basename(dir);
  if (!folder.startsWith("DONE-")) {
    console.log("⚠️  Not marked as DONE");
    return;
  }
  const parent = path.dirname(dir);
  const newName = folder.replace(/^DONE-/, "");
  const newDir = path.join(parent, newName);
  fs.renameSync(dir, newDir);

  // Remove marker from README
  const readme = path.join(newDir, "README.md");
  if (fs.existsSync(readme)) {
    let content = fs.readFileSync(readme, "utf-8");
    content = content.replace(` ✅\n${DONE_MARKER}`, "");
    fs.writeFileSync(readme, content);
  }
  console.log(`⬜ ${folder} → ${newName}`);
}

// --- Scan ---

function isSolved(folderName, readmePath) {
  if (folderName.startsWith("DONE-")) return true;
  if (!fs.existsSync(readmePath)) return false;
  const content = fs.readFileSync(readmePath, "utf-8");
  return content.includes(DONE_MARKER);
}

function getProblemInfo(readmePath) {
  if (!fs.existsSync(readmePath)) return null;
  const content = fs.readFileSync(readmePath, "utf-8");
  const title = content.match(/^#\s*(.+?)(\s*✅)?$/m);
  const diff = content.match(/\*\*Difficulty:\*\*\s*(\w+)/);
  return {
    title: title ? title[1].trim() : "Unknown",
    difficulty: diff ? diff[1] : "Unknown",
  };
}

function scanProblems() {
  const problems = [];
  const topics = fs.readdirSync(ROOT).filter((d) => {
    const full = path.join(ROOT, d);
    return fs.statSync(full).isDirectory() && !d.startsWith(".") && !d.match(/^\d/);
  });

  for (const topic of topics) {
    const topicPath = path.join(ROOT, topic);
    const diffs = fs.readdirSync(topicPath).filter((d) =>
      ["easy", "medium", "hard"].includes(d)
    );
    for (const diff of diffs) {
      const diffPath = path.join(topicPath, diff);
      const folders = fs.readdirSync(diffPath).filter((d) =>
        fs.statSync(path.join(diffPath, d)).isDirectory()
      );
      for (const folder of folders) {
        const readmePath = path.join(diffPath, folder, "README.md");
        const info = getProblemInfo(readmePath);
        const solved = isSolved(folder, readmePath);
        problems.push({
          topic, difficulty: diff, folder,
          num: folder.replace(/^DONE-/, "").slice(0, 4),
          title: info ? info.title : folder,
          solved,
          path: `${topic}/${diff}/${folder}`,
        });
      }
    }
  }
  return problems.sort((a, b) => a.num.localeCompare(b.num));
}

// --- Display ---

const DIFF_ICON = { easy: "🟢", medium: "🟡", hard: "🔴" };

function showOverall(problems) {
  const total = problems.length;
  const solved = problems.filter((p) => p.solved).length;
  const easy = problems.filter((p) => p.difficulty === "easy");
  const med = problems.filter((p) => p.difficulty === "medium");
  const hard = problems.filter((p) => p.difficulty === "hard");

  console.log("\n📊 LeetCode Practice Progress\n");
  console.log(`  Total:  ${solved}/${total} solved (${total ? ((solved / total) * 100).toFixed(1) : 0}%)`);
  console.log(`  🟢 Easy:   ${easy.filter((p) => p.solved).length}/${easy.length}`);
  console.log(`  🟡 Medium: ${med.filter((p) => p.solved).length}/${med.length}`);
  console.log(`  🔴 Hard:   ${hard.filter((p) => p.solved).length}/${hard.length}`);
  const pct = total ? (solved / total) : 0;
  const filled = Math.round(pct * 40);
  console.log(`\n  ${"█".repeat(filled)}${"░".repeat(40 - filled)} ${(pct * 100).toFixed(1)}%\n`);
}

function showByTopic(problems, filterTopic) {
  const topics = {};
  for (const p of problems) {
    if (!topics[p.topic]) topics[p.topic] = [];
    topics[p.topic].push(p);
  }

  console.log("📊 Progress by Topic\n");
  console.log("  Topic                        Easy        Medium      Hard        Total");
  console.log("  " + "─".repeat(85));

  for (const [topic, probs] of Object.entries(topics).sort()) {
    if (filterTopic && !topic.includes(filterTopic)) continue;
    const e = probs.filter((p) => p.difficulty === "easy");
    const m = probs.filter((p) => p.difficulty === "medium");
    const h = probs.filter((p) => p.difficulty === "hard");
    const es = e.filter((p) => p.solved).length;
    const ms = m.filter((p) => p.solved).length;
    const hs = h.filter((p) => p.solved).length;
    const ts = probs.filter((p) => p.solved).length;
    console.log(`  ${topic.padEnd(30)}${`${es}/${e.length}`.padEnd(12)}${`${ms}/${m.length}`.padEnd(12)}${`${hs}/${h.length}`.padEnd(12)}${ts}/${probs.length}`);
  }
  console.log();
}

function showSolved(problems) {
  const solved = problems.filter((p) => p.solved);
  console.log(`\n✅ Solved Problems (${solved.length})\n`);
  for (const p of solved) {
    console.log(`  ✅ ${p.num} ${p.title}  ${DIFF_ICON[p.difficulty] || "⚪"}  📁 ${p.path}`);
  }
  console.log();
}

function showNext(problems, diffFilter) {
  let unsolved = problems.filter((p) => !p.solved);
  if (diffFilter) unsolved = unsolved.filter((p) => p.difficulty === diffFilter);

  if (!unsolved.length) {
    console.log("\n🎉 All problems solved! (or no match)\n");
    return;
  }

  // Group by topic, pick first unsolved from each
  const byTopic = {};
  for (const p of unsolved) {
    if (!byTopic[p.topic]) byTopic[p.topic] = p;
  }

  console.log(`\n🎯 Next Problems to Solve${diffFilter ? ` (${diffFilter})` : ""}\n`);
  for (const [topic, p] of Object.entries(byTopic).sort()) {
    console.log(`  ${DIFF_ICON[p.difficulty] || "⚪"} ${p.num} ${p.title}`);
    console.log(`     📁 ${p.path}\n`);
  }
}

// --- Main ---

const cmd = args[0];

if (cmd === "done") {
  markDone(args[1]);
} else if (cmd === "undo") {
  unmarkDone(args[1]);
} else if (cmd === "--solved") {
  showSolved(scanProblems());
} else if (cmd === "--topic") {
  showByTopic(scanProblems(), args[1] || null);
} else if (cmd === "--next") {
  showNext(scanProblems(), args[1] || null);
} else {
  showOverall(scanProblems());
  showByTopic(scanProblems());
}
