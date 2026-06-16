// Test: 1753. Maximum Score From Removing Stones
// 88 test cases from LeetCodeDataset
// Run: node test.js

const { maximumScore } = require("./solution");

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

console.log("\n1753. Maximum Score From Removing Stones\n");

test(maximumScore(10, 10, 1), 10, 'Test 1');
test(maximumScore(5, 7, 9), 10, 'Test 2');
test(maximumScore(5, 5, 5), 7, 'Test 3');
test(maximumScore(1, 8, 8), 8, 'Test 4');
test(maximumScore(3, 3, 3), 4, 'Test 5');
test(maximumScore(100000, 1, 1), 2, 'Test 6');
test(maximumScore(100000, 100000, 100000), 150000, 'Test 7');
test(maximumScore(4, 4, 6), 7, 'Test 8');
test(maximumScore(30, 60, 90), 90, 'Test 9');
test(maximumScore(1, 1, 100000), 2, 'Test 10');
test(maximumScore(50000, 50000, 1), 50000, 'Test 11');
test(maximumScore(10, 10, 10), 15, 'Test 12');
test(maximumScore(2, 4, 6), 6, 'Test 13');
test(maximumScore(5, 10, 15), 15, 'Test 14');
test(maximumScore(20, 30, 40), 45, 'Test 15');
test(maximumScore(7, 7, 14), 14, 'Test 16');
test(maximumScore(10, 1, 1), 2, 'Test 17');
test(maximumScore(7, 14, 10), 15, 'Test 18');
test(maximumScore(1, 1, 2), 2, 'Test 19');
test(maximumScore(7, 8, 9), 12, 'Test 20');
test(maximumScore(33333, 33333, 33334), 50000, 'Test 21');
test(maximumScore(50000, 50000, 50001), 75000, 'Test 22');
test(maximumScore(1000, 1000, 1000), 1500, 'Test 23');
test(maximumScore(80, 80, 40), 100, 'Test 24');
test(maximumScore(7, 14, 21), 21, 'Test 25');
test(maximumScore(10, 15, 20), 22, 'Test 26');
test(maximumScore(150000, 50000, 100000), 150000, 'Test 27');
test(maximumScore(5000, 5001, 5002), 7501, 'Test 28');
test(maximumScore(33333, 66666, 100000), 99999, 'Test 29');
test(maximumScore(50000, 1, 1), 2, 'Test 30');
test(maximumScore(60000, 20000, 20000), 40000, 'Test 31');
test(maximumScore(99999, 1, 1), 2, 'Test 32');
test(maximumScore(5, 5, 100), 10, 'Test 33');
test(maximumScore(80000, 80000, 1), 80000, 'Test 34');
test(maximumScore(99998, 99999, 100000), 149998, 'Test 35');
test(maximumScore(20, 20, 20), 30, 'Test 36');
test(maximumScore(50000, 40000, 30000), 60000, 'Test 37');
test(maximumScore(10000, 10000, 1), 10000, 'Test 38');
test(maximumScore(5, 5, 10), 10, 'Test 39');
test(maximumScore(10000, 10000, 10000), 15000, 'Test 40');
test(maximumScore(42, 27, 19), 44, 'Test 41');
test(maximumScore(45000, 45000, 10000), 50000, 'Test 42');
test(maximumScore(2, 2, 100000), 4, 'Test 43');
test(maximumScore(25, 25, 24), 37, 'Test 44');
test(maximumScore(500, 500, 1500), 1000, 'Test 45');
test(maximumScore(100, 200, 300), 300, 'Test 46');
test(maximumScore(15, 15, 15), 22, 'Test 47');
test(maximumScore(25, 75, 125), 100, 'Test 48');
test(maximumScore(20, 20, 21), 30, 'Test 49');
test(maximumScore(20000, 30000, 10000), 30000, 'Test 50');
test(maximumScore(20, 40, 60), 60, 'Test 51');
test(maximumScore(12345, 67890, 11111), 23456, 'Test 52');
test(maximumScore(80000, 10000, 10000), 20000, 'Test 53');
test(maximumScore(12345, 67890, 54321), 66666, 'Test 54');
test(maximumScore(5, 15, 20), 20, 'Test 55');
test(maximumScore(2, 2, 3), 3, 'Test 56');
test(maximumScore(1, 1, 200000), 2, 'Test 57');
test(maximumScore(100, 100, 101), 150, 'Test 58');
test(maximumScore(3, 3, 9), 6, 'Test 59');
test(maximumScore(15, 25, 35), 37, 'Test 60');
test(maximumScore(50000, 50000, 99999), 99999, 'Test 61');
test(maximumScore(10000, 20000, 30000), 30000, 'Test 62');
test(maximumScore(10000, 5000, 5000), 10000, 'Test 63');
test(maximumScore(25000, 25000, 50000), 50000, 'Test 64');
test(maximumScore(99999, 99998, 99997), 149997, 'Test 65');
test(maximumScore(75, 25, 50), 75, 'Test 66');
test(maximumScore(1, 2, 3), 3, 'Test 67');
test(maximumScore(10, 20, 30), 30, 'Test 68');
test(maximumScore(3, 9, 9), 10, 'Test 69');
test(maximumScore(15, 10, 5), 15, 'Test 70');
test(maximumScore(30, 5, 25), 30, 'Test 71');
test(maximumScore(50, 50, 100), 100, 'Test 72');
test(maximumScore(100, 100, 100), 150, 'Test 73');
test(maximumScore(99999, 99999, 99999), 149998, 'Test 74');
test(maximumScore(100, 100, 1), 100, 'Test 75');
test(maximumScore(50000, 49999, 49998), 74998, 'Test 76');
test(maximumScore(50, 25, 25), 50, 'Test 77');
test(maximumScore(98765, 43210, 54321), 97531, 'Test 78');
test(maximumScore(5000, 5000, 10000), 10000, 'Test 79');
test(maximumScore(55, 15, 35), 50, 'Test 80');
test(maximumScore(33333, 33334, 33335), 50001, 'Test 81');
test(maximumScore(10000, 10000, 5000), 12500, 'Test 82');
test(maximumScore(30, 50, 20), 50, 'Test 83');
test(maximumScore(30, 30, 30), 45, 'Test 84');
test(maximumScore(60000, 40000, 20000), 60000, 'Test 85');
test(maximumScore(1, 1, 1), 1, 'Test 86');
test(maximumScore(8, 8, 8), 12, 'Test 87');
test(maximumScore(100000, 50000, 50000), 100000, 'Test 88');

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
