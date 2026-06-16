// Test: 3233. Find The Count Of Numbers Which Are Not Special
// 77 test cases from LeetCodeDataset
// Run: node test.js

const { nonSpecialCount } = require("./solution");

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

console.log("\n3233. Find The Count Of Numbers Which Are Not Special\n");

test(nonSpecialCount(100, 200), 99, 'Test 1');
test(nonSpecialCount(5, 7), 3, 'Test 2');
test(nonSpecialCount(20, 50), 29, 'Test 3');
test(nonSpecialCount(1, 10), 8, 'Test 4');
test(nonSpecialCount(100, 150), 50, 'Test 5');
test(nonSpecialCount(4, 16), 11, 'Test 6');
test(nonSpecialCount(10, 20), 11, 'Test 7');
test(nonSpecialCount(1000, 10000), 8987, 'Test 8');
test(nonSpecialCount(25, 25), 0, 'Test 9');
test(nonSpecialCount(100000, 200000), 99980, 'Test 10');
test(nonSpecialCount(250000, 250100), 101, 'Test 11');
test(nonSpecialCount(1000000, 1000010), 11, 'Test 12');
test(nonSpecialCount(999999999, 1000000000), 2, 'Test 13');
test(nonSpecialCount(1, 100000000), 99998771, 'Test 14');
test(nonSpecialCount(100000, 150000), 49990, 'Test 15');
test(nonSpecialCount(1000000000, 1000000000), 1, 'Test 16');
test(nonSpecialCount(500000, 501000), 1001, 'Test 17');
test(nonSpecialCount(3, 3), 1, 'Test 18');
test(nonSpecialCount(1, 1000000), 999832, 'Test 19');
test(nonSpecialCount(5000, 6000), 999, 'Test 20');
test(nonSpecialCount(10000, 11000), 999, 'Test 21');
test(nonSpecialCount(2, 2), 1, 'Test 22');
test(nonSpecialCount(5000, 7000), 1997, 'Test 23');
test(nonSpecialCount(1000000, 1500000), 499969, 'Test 24');
test(nonSpecialCount(8, 8), 1, 'Test 25');
test(nonSpecialCount(1000000, 10000000), 8999723, 'Test 26');
test(nonSpecialCount(300000000, 400000000), 99999729, 'Test 27');
test(nonSpecialCount(500000, 1000000), 499959, 'Test 28');
test(nonSpecialCount(4, 1000000), 999829, 'Test 29');
test(nonSpecialCount(10000000, 10001000), 1001, 'Test 30');
test(nonSpecialCount(25, 50), 24, 'Test 31');
test(nonSpecialCount(1, 3), 3, 'Test 32');
test(nonSpecialCount(999999, 1000000), 2, 'Test 33');
test(nonSpecialCount(999900, 1000000), 101, 'Test 34');
test(nonSpecialCount(50, 100), 51, 'Test 35');
test(nonSpecialCount(8, 100), 90, 'Test 36');
test(nonSpecialCount(16, 25), 9, 'Test 37');
test(nonSpecialCount(1000000, 1001000), 1001, 'Test 38');
test(nonSpecialCount(16, 256), 237, 'Test 39');
test(nonSpecialCount(999, 1001), 3, 'Test 40');
test(nonSpecialCount(123456, 789012), 665473, 'Test 41');
test(nonSpecialCount(10000, 10100), 101, 'Test 42');
test(nonSpecialCount(999999950, 1000000000), 51, 'Test 43');
test(nonSpecialCount(50000, 60000), 9996, 'Test 44');
test(nonSpecialCount(123456, 123486), 31, 'Test 45');
test(nonSpecialCount(49, 50), 1, 'Test 46');
test(nonSpecialCount(97, 101), 5, 'Test 47');
test(nonSpecialCount(10000, 100000), 89961, 'Test 48');
test(nonSpecialCount(3000000, 3000100), 101, 'Test 49');
test(nonSpecialCount(500, 500), 1, 'Test 50');
test(nonSpecialCount(100000000, 100010000), 10001, 'Test 51');
test(nonSpecialCount(1234567, 8765432), 7530626, 'Test 52');
test(nonSpecialCount(150, 250), 100, 'Test 53');
test(nonSpecialCount(2, 3), 2, 'Test 54');
test(nonSpecialCount(8000000, 8000100), 101, 'Test 55');
test(nonSpecialCount(25, 36), 11, 'Test 56');
test(nonSpecialCount(987654, 987674), 21, 'Test 57');
test(nonSpecialCount(500, 1500), 997, 'Test 58');
test(nonSpecialCount(5000, 50000), 44972, 'Test 59');
test(nonSpecialCount(2000000, 2000050), 51, 'Test 60');
test(nonSpecialCount(500000, 500010), 11, 'Test 61');
test(nonSpecialCount(1, 100), 96, 'Test 62');
test(nonSpecialCount(500000, 600000), 99990, 'Test 63');
test(nonSpecialCount(1, 1000), 989, 'Test 64');
test(nonSpecialCount(1000, 2000), 998, 'Test 65');
test(nonSpecialCount(14, 28), 14, 'Test 66');
test(nonSpecialCount(100000000, 1000000000), 899997829, 'Test 67');
test(nonSpecialCount(1000000, 1000100), 101, 'Test 68');
test(nonSpecialCount(500000000, 600000000), 99999786, 'Test 69');
test(nonSpecialCount(101, 200), 98, 'Test 70');
test(nonSpecialCount(100, 1000), 894, 'Test 71');
test(nonSpecialCount(81, 81), 1, 'Test 72');
test(nonSpecialCount(49, 64), 15, 'Test 73');
test(nonSpecialCount(8, 25), 16, 'Test 74');
test(nonSpecialCount(5000, 7500), 2497, 'Test 75');
test(nonSpecialCount(25, 49), 23, 'Test 76');
test(nonSpecialCount(1000, 1500), 500, 'Test 77');

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
