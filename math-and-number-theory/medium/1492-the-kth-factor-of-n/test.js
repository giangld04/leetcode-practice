// Test: 1492. The Kth Factor Of N
// 81 test cases from LeetCodeDataset
// Run: node test.js

const { kthFactor } = require("./solution");

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

console.log("\n1492. The Kth Factor Of N\n");

test(kthFactor(1, 1), 1, 'Test 1');
test(kthFactor(49, 3), 49, 'Test 2');
test(kthFactor(100, 5), 10, 'Test 3');
test(kthFactor(7, 2), 7, 'Test 4');
test(kthFactor(17, 2), 17, 'Test 5');
test(kthFactor(1000, 15), 500, 'Test 6');
test(kthFactor(30, 5), 6, 'Test 7');
test(kthFactor(12, 3), 3, 'Test 8');
test(kthFactor(30, 1), 1, 'Test 9');
test(kthFactor(100, 10), -1, 'Test 10');
test(kthFactor(36, 6), 9, 'Test 11');
test(kthFactor(1000, 10), 50, 'Test 12');
test(kthFactor(84, 5), 6, 'Test 13');
test(kthFactor(500, 7), 25, 'Test 14');
test(kthFactor(999, 9), -1, 'Test 15');
test(kthFactor(97, 2), 97, 'Test 16');
test(kthFactor(17, 1), 1, 'Test 17');
test(kthFactor(4, 4), -1, 'Test 18');
test(kthFactor(50, 5), 25, 'Test 19');
test(kthFactor(37, 1), 1, 'Test 20');
test(kthFactor(60, 8), 12, 'Test 21');
test(kthFactor(81, 4), 27, 'Test 22');
test(kthFactor(60, 6), 6, 'Test 23');
test(kthFactor(100, 11), -1, 'Test 24');
test(kthFactor(120, 12), 24, 'Test 25');
test(kthFactor(144, 9), 16, 'Test 26');
test(kthFactor(841, 3), 841, 'Test 27');
test(kthFactor(49, 2), 7, 'Test 28');
test(kthFactor(36, 8), 18, 'Test 29');
test(kthFactor(121, 3), 121, 'Test 30');
test(kthFactor(100, 7), 25, 'Test 31');
test(kthFactor(256, 7), 64, 'Test 32');
test(kthFactor(360, 15), 30, 'Test 33');
test(kthFactor(999, 20), -1, 'Test 34');
test(kthFactor(64, 7), 64, 'Test 35');
test(kthFactor(504, 8), 9, 'Test 36');
test(kthFactor(625, 5), 625, 'Test 37');
test(kthFactor(15, 3), 5, 'Test 38');
test(kthFactor(120, 7), 8, 'Test 39');
test(kthFactor(997, 2), 997, 'Test 40');
test(kthFactor(256, 8), 128, 'Test 41');
test(kthFactor(999, 15), -1, 'Test 42');
test(kthFactor(500, 15), -1, 'Test 43');
test(kthFactor(810, 16), 135, 'Test 44');
test(kthFactor(841, 7), -1, 'Test 45');
test(kthFactor(45, 5), 15, 'Test 46');
test(kthFactor(441, 4), 9, 'Test 47');
test(kthFactor(1024, 9), 256, 'Test 48');
test(kthFactor(200, 1), 1, 'Test 49');
test(kthFactor(999, 3), 9, 'Test 50');
test(kthFactor(25, 3), 25, 'Test 51');
test(kthFactor(1000, 18), -1, 'Test 52');
test(kthFactor(1000, 16), 1000, 'Test 53');
test(kthFactor(450, 15), 90, 'Test 54');
test(kthFactor(600, 15), 40, 'Test 55');
test(kthFactor(6, 4), 6, 'Test 56');
test(kthFactor(225, 8), 75, 'Test 57');
test(kthFactor(500, 8), 50, 'Test 58');
test(kthFactor(9, 3), 9, 'Test 59');
test(kthFactor(729, 6), 243, 'Test 60');
test(kthFactor(504, 10), 14, 'Test 61');
test(kthFactor(500, 12), 500, 'Test 62');
test(kthFactor(96, 10), 32, 'Test 63');
test(kthFactor(999, 5), 37, 'Test 64');
test(kthFactor(343, 3), 49, 'Test 65');
test(kthFactor(72, 9), 18, 'Test 66');
test(kthFactor(450, 20), -1, 'Test 67');
test(kthFactor(1000, 1), 1, 'Test 68');
test(kthFactor(1024, 10), 512, 'Test 69');
test(kthFactor(36, 11), -1, 'Test 70');
test(kthFactor(441, 5), 21, 'Test 71');
test(kthFactor(729, 12), -1, 'Test 72');
test(kthFactor(999, 10), -1, 'Test 73');
test(kthFactor(36, 7), 12, 'Test 74');
test(kthFactor(50, 3), 5, 'Test 75');
test(kthFactor(225, 5), 15, 'Test 76');
test(kthFactor(200, 20), -1, 'Test 77');
test(kthFactor(100, 9), 100, 'Test 78');
test(kthFactor(16, 5), 16, 'Test 79');
test(kthFactor(625, 6), -1, 'Test 80');
test(kthFactor(840, 10), 12, 'Test 81');

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
