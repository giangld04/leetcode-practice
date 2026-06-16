// Test: 2318. Number Of Distinct Roll Sequences
// 21 test cases from LeetCodeDataset
// Run: node test.js

const { distinctSequences } = require("./solution");

let passed = 0, failed = 0;
function test(actual, expected, label) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    passed++;
  } else {
    console.log(`  ✗ ${label}`);
    console.log(`    Expected: ${e}`);
    console.log(`    Actual:   ${a}`);
    failed++;
  }
}

console.log("\n2318. Number Of Distinct Roll Sequences\n");

test(distinctSequences(3), 66, 'Test 1');
test(distinctSequences(100), 534856607, 'Test 2');
test(distinctSequences(4), 184, 'Test 3');
test(distinctSequences(10000), 874574246, 'Test 4');
test(distinctSequences(2), 22, 'Test 5');
test(distinctSequences(1), 6, 'Test 6');
test(distinctSequences(1000), 497171723, 'Test 7');
test(distinctSequences(10), 93120, 'Test 8');
test(distinctSequences(2000), 784558903, 'Test 9');
test(distinctSequences(104), 920649565, 'Test 10');
test(distinctSequences(5), 516, 'Test 11');
test(distinctSequences(20000), 846205927, 'Test 12');
test(distinctSequences(8000), 366597434, 'Test 13');
test(distinctSequences(5000), 798977852, 'Test 14');
test(distinctSequences(9999), 455330915, 'Test 15');
test(distinctSequences(20), 996985946, 'Test 16');
test(distinctSequences(15), 16706688, 'Test 17');
test(distinctSequences(6), 1472, 'Test 18');
test(distinctSequences(750), 498714087, 'Test 19');
test(distinctSequences(500), 353640467, 'Test 20');
test(distinctSequences(7), 4136, 'Test 21');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
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
