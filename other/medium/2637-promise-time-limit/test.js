// Test: 2637. Promise Time Limit
// Run: node test.js

const { timeLimit } = require("./solution");

let passed = 0, failed = 0;
function test(actual, expected, label) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    console.log(`  ✓ ${label}`);
    passed++;
  } else {
    console.log(`  ✗ ${label}`);
    console.log(`    Expected: ${e}`);
    console.log(`    Actual:   ${a}`);
    failed++;
  }
}

console.log("\n2637. Promise Time Limit\n");

test(timeLimit(async (n) => { 
  await new Promise(, > setTimeout(res, 100)); 
  return n * n; 
}, [5], 50), {"rejected":"Time Limit Exceeded","time":50}, 'Example 1: timeLimit(async (n) => { 
  await new Promise(, > setTimeout(res, 100)); 
  return n * n; 
}, [5], 50) → {"rejected":"Time Limit Exceeded","time":50}');
test(timeLimit(async (n) => { 
  await new Promise(, > setTimeout(res, 100)); 
  return n * n; 
}, [5], 150), {"resolved":25,"time":100}, 'Example 2: timeLimit(async (n) => { 
  await new Promise(, > setTimeout(res, 100)); 
  return n * n; 
}, [5], 150) → {"resolved":25,"time":100}');
test(timeLimit(async (a, b) => { 
  await new Promise(, > setTimeout(res, 120)); 
  return a + b; 
}, [5,10], 150), {"resolved":15,"time":120}, 'Example 3: timeLimit(async (a, b) => { 
  await new Promise(, > setTimeout(res, 120)); 
  return a + b; 
}, [5,10], 150) → {"resolved":15,"time":120}');
test(timeLimit(async () => { 
  throw "Error";
}, [], 1000), {"rejected":"Error","time":0}, 'Example 4: timeLimit(async () => { 
  throw "Error";
}, [], 1000) → {"rejected":"Error","time":0}');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

// Auto-mark DONE when all tests pass
if (!failed) {
  const path = require("path");
  const fs = require("fs");
  const dir = __dirname;
  const folder = path.basename(dir);
  if (!folder.startsWith("DONE-")) {
    const parent = path.dirname(dir);
    const newDir = path.join(parent, "DONE-" + folder);
    fs.renameSync(dir, newDir);
    const readme = path.join(newDir, "README.md");
    if (fs.existsSync(readme)) {
      let c = fs.readFileSync(readme, "utf-8");
      if (!c.includes("<!-- SOLVED -->")) {
        c = c.replace(/^(# .+)$/m, "$1 ✅\n<!-- SOLVED -->");
        fs.writeFileSync(readme, c);
      }
    }
    console.log("✅ DONE → " + "DONE-" + folder);
  }
}
