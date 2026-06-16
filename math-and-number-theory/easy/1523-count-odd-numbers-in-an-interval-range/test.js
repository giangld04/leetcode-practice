// Test: 1523. Count Odd Numbers In An Interval Range
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { countOdds } = require("./solution");

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

console.log("\n1523. Count Odd Numbers In An Interval Range\n");

test(countOdds(3, 7), 3, 'Test 1');
test(countOdds(0, 1000000000), 500000000, 'Test 2');
test(countOdds(0, 1), 1, 'Test 3');
test(countOdds(500000000, 500000000), 0, 'Test 4');
test(countOdds(1, 1000000000), 500000000, 'Test 5');
test(countOdds(8, 10), 1, 'Test 6');
test(countOdds(1000000000, 1000000000), 0, 'Test 7');
test(countOdds(1, 2), 1, 'Test 8');
test(countOdds(2, 3), 1, 'Test 9');
test(countOdds(0, 0), 0, 'Test 10');
test(countOdds(2, 2), 0, 'Test 11');
test(countOdds(1, 1), 1, 'Test 12');
test(countOdds(450000000, 450000010), 5, 'Test 13');
test(countOdds(3, 5), 2, 'Test 14');
test(countOdds(16, 17), 1, 'Test 15');
test(countOdds(500000001, 1000000000), 250000000, 'Test 16');
test(countOdds(2, 999999999), 499999999, 'Test 17');
test(countOdds(2, 4), 1, 'Test 18');
test(countOdds(500000000, 1500000000), 500000000, 'Test 19');
test(countOdds(2, 1999999999), 999999999, 'Test 20');
test(countOdds(15, 15), 1, 'Test 21');
test(countOdds(14, 24), 5, 'Test 22');
test(countOdds(499999998, 500000002), 2, 'Test 23');
test(countOdds(234567890, 987654321), 376543216, 'Test 24');
test(countOdds(20, 29), 5, 'Test 25');
test(countOdds(100000000, 999999999), 450000000, 'Test 26');
test(countOdds(99, 101), 2, 'Test 27');
test(countOdds(1, 10), 5, 'Test 28');
test(countOdds(1, 1000000001), 500000001, 'Test 29');
test(countOdds(800000000, 850000000), 25000000, 'Test 30');
test(countOdds(300, 400), 50, 'Test 31');
test(countOdds(1000000000, 1000000001), 1, 'Test 32');
test(countOdds(25, 75), 26, 'Test 33');
test(countOdds(100, 200), 50, 'Test 34');
test(countOdds(123456, 654321), 265433, 'Test 35');
test(countOdds(500000001, 1500000001), 500000001, 'Test 36');
test(countOdds(1000000001, 9999999999), 4500000000, 'Test 37');
test(countOdds(45, 100), 28, 'Test 38');
test(countOdds(1, 999999999), 500000000, 'Test 39');
test(countOdds(1, 2000000000), 1000000000, 'Test 40');
test(countOdds(9, 11), 2, 'Test 41');
test(countOdds(8, 1000000008), 500000000, 'Test 42');
test(countOdds(15, 25), 6, 'Test 43');
test(countOdds(333333333, 666666666), 166666667, 'Test 44');
test(countOdds(2, 21), 10, 'Test 45');
test(countOdds(0, 2), 1, 'Test 46');
test(countOdds(25, 35), 6, 'Test 47');
test(countOdds(11, 21), 6, 'Test 48');
test(countOdds(123456789, 987654321), 432098767, 'Test 49');
test(countOdds(1, 20), 10, 'Test 50');
test(countOdds(21, 31), 6, 'Test 51');
test(countOdds(1000000000, 1000000002), 1, 'Test 52');
test(countOdds(100000001, 100000001), 1, 'Test 53');
test(countOdds(3, 1800000001), 900000000, 'Test 54');
test(countOdds(500000000, 500000002), 1, 'Test 55');
test(countOdds(10, 20), 5, 'Test 56');
test(countOdds(999999998, 999999999), 1, 'Test 57');
test(countOdds(5, 99), 48, 'Test 58');
test(countOdds(789012345, 789012345), 1, 'Test 59');
test(countOdds(15, 16), 1, 'Test 60');
test(countOdds(20, 30), 5, 'Test 61');
test(countOdds(1000000001, 2000000000), 500000000, 'Test 62');
test(countOdds(5, 7), 2, 'Test 63');
test(countOdds(1, 3), 2, 'Test 64');
test(countOdds(4, 1700000002), 849999999, 'Test 65');
test(countOdds(999999999, 1000000000), 1, 'Test 66');
test(countOdds(500, 1500), 500, 'Test 67');
test(countOdds(500, 500000005), 249999753, 'Test 68');
test(countOdds(4, 6), 1, 'Test 69');
test(countOdds(100000000, 100000010), 5, 'Test 70');
test(countOdds(12, 22), 5, 'Test 71');
test(countOdds(9, 9), 1, 'Test 72');
test(countOdds(100000000, 900000000), 400000000, 'Test 73');
test(countOdds(100, 1000), 450, 'Test 74');
test(countOdds(1000000, 2000000), 500000, 'Test 75');
test(countOdds(5, 5), 1, 'Test 76');
test(countOdds(500000001, 500000005), 3, 'Test 77');
test(countOdds(123456, 789012), 332778, 'Test 78');
test(countOdds(5, 500000005), 250000001, 'Test 79');
test(countOdds(1000000001, 1000000001), 1, 'Test 80');
test(countOdds(500, 600), 50, 'Test 81');
test(countOdds(888888888, 999999999), 55555556, 'Test 82');
test(countOdds(100000000, 200000000), 50000000, 'Test 83');
test(countOdds(13, 23), 6, 'Test 84');
test(countOdds(500000001, 600000000), 50000000, 'Test 85');
test(countOdds(10, 19), 5, 'Test 86');
test(countOdds(2000000000, 3000000000), 500000000, 'Test 87');
test(countOdds(500000000, 1000000000), 250000000, 'Test 88');
test(countOdds(999999998, 1000000000), 1, 'Test 89');
test(countOdds(250000000, 750000000), 250000000, 'Test 90');
test(countOdds(499999999, 500000001), 2, 'Test 91');
test(countOdds(1000000000, 2000000000), 500000000, 'Test 92');
test(countOdds(500000001, 500000001), 1, 'Test 93');

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
