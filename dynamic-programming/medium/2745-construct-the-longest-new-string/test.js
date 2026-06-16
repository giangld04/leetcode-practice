// Test: 2745. Construct The Longest New String
// 88 test cases from LeetCodeDataset
// Run: node test.js

const { longestString } = require("./solution");

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

console.log("\n2745. Construct The Longest New String\n");

test(longestString(1, 10, 10), 26, 'Test 1');
test(longestString(50, 50, 50), 300, 'Test 2');
test(longestString(10, 1, 10), 26, 'Test 3');
test(longestString(20, 10, 5), 52, 'Test 4');
test(longestString(10, 10, 100), 240, 'Test 5');
test(longestString(10, 10, 1), 42, 'Test 6');
test(longestString(2, 5, 1), 12, 'Test 7');
test(longestString(1, 1, 1), 6, 'Test 8');
test(longestString(3, 2, 2), 14, 'Test 9');
test(longestString(49, 50, 1), 200, 'Test 10');
test(longestString(40, 1, 2), 10, 'Test 11');
test(longestString(40, 40, 30), 220, 'Test 12');
test(longestString(50, 49, 49), 296, 'Test 13');
test(longestString(5, 1, 5), 16, 'Test 14');
test(longestString(50, 1, 1), 8, 'Test 15');
test(longestString(2, 1, 10), 26, 'Test 16');
test(longestString(10, 10, 30), 100, 'Test 17');
test(longestString(25, 25, 10), 120, 'Test 18');
test(longestString(10, 15, 8), 58, 'Test 19');
test(longestString(2, 10, 0), 10, 'Test 20');
test(longestString(0, 5, 10), 22, 'Test 21');
test(longestString(35, 15, 5), 72, 'Test 22');
test(longestString(25, 1, 25), 56, 'Test 23');
test(longestString(2, 50, 25), 60, 'Test 24');
test(longestString(7, 7, 14), 56, 'Test 25');
test(longestString(30, 30, 25), 170, 'Test 26');
test(longestString(25, 20, 10), 102, 'Test 27');
test(longestString(5, 5, 45), 110, 'Test 28');
test(longestString(5, 5, 10), 40, 'Test 29');
test(longestString(30, 20, 10), 102, 'Test 30');
test(longestString(33, 33, 34), 200, 'Test 31');
test(longestString(30, 15, 25), 112, 'Test 32');
test(longestString(40, 10, 30), 102, 'Test 33');
test(longestString(15, 15, 25), 110, 'Test 34');
test(longestString(30, 25, 30), 162, 'Test 35');
test(longestString(1, 30, 5), 16, 'Test 36');
test(longestString(10, 5, 15), 52, 'Test 37');
test(longestString(15, 15, 5), 70, 'Test 38');
test(longestString(20, 20, 1), 82, 'Test 39');
test(longestString(50, 10, 1), 44, 'Test 40');
test(longestString(20, 1, 30), 66, 'Test 41');
test(longestString(20, 15, 20), 102, 'Test 42');
test(longestString(40, 30, 20), 162, 'Test 43');
test(longestString(10, 15, 20), 82, 'Test 44');
test(longestString(20, 30, 40), 162, 'Test 45');
test(longestString(5, 5, 50), 120, 'Test 46');
test(longestString(10, 10, 10), 60, 'Test 47');
test(longestString(40, 10, 1), 44, 'Test 48');
test(longestString(10, 35, 5), 52, 'Test 49');
test(longestString(1, 1, 50), 104, 'Test 50');
test(longestString(30, 20, 30), 142, 'Test 51');
test(longestString(15, 25, 30), 122, 'Test 52');
test(longestString(5, 5, 40), 100, 'Test 53');
test(longestString(2, 2, 4), 16, 'Test 54');
test(longestString(10, 1, 50), 106, 'Test 55');
test(longestString(45, 40, 45), 252, 'Test 56');
test(longestString(45, 5, 5), 32, 'Test 57');
test(longestString(45, 30, 25), 172, 'Test 58');
test(longestString(5, 10, 40), 102, 'Test 59');
test(longestString(10, 10, 15), 70, 'Test 60');
test(longestString(10, 10, 40), 120, 'Test 61');
test(longestString(2, 2, 3), 14, 'Test 62');
test(longestString(20, 20, 30), 140, 'Test 63');
test(longestString(40, 10, 10), 62, 'Test 64');
test(longestString(25, 25, 1), 102, 'Test 65');
test(longestString(49, 50, 49), 296, 'Test 66');
test(longestString(15, 15, 30), 120, 'Test 67');
test(longestString(4, 3, 6), 26, 'Test 68');
test(longestString(10, 10, 5), 50, 'Test 69');
test(longestString(10, 40, 20), 82, 'Test 70');
test(longestString(1, 50, 1), 8, 'Test 71');
test(longestString(20, 15, 25), 112, 'Test 72');
test(longestString(1, 50, 49), 104, 'Test 73');
test(longestString(25, 25, 25), 150, 'Test 74');
test(longestString(20, 20, 20), 120, 'Test 75');
test(longestString(20, 20, 10), 100, 'Test 76');
test(longestString(25, 20, 30), 142, 'Test 77');
test(longestString(1, 50, 50), 106, 'Test 78');
test(longestString(30, 40, 35), 192, 'Test 79');
test(longestString(30, 30, 1), 122, 'Test 80');
test(longestString(10, 30, 10), 62, 'Test 81');
test(longestString(30, 10, 20), 82, 'Test 82');
test(longestString(20, 25, 30), 142, 'Test 83');
test(longestString(15, 15, 1), 62, 'Test 84');
test(longestString(35, 5, 10), 42, 'Test 85');
test(longestString(40, 10, 20), 82, 'Test 86');
test(longestString(50, 1, 50), 106, 'Test 87');
test(longestString(10, 20, 15), 72, 'Test 88');

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
