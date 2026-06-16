// Test: 2929. Distribute Candies Among Children Ii
// 90 test cases from LeetCodeDataset
// Run: node test.js

const { distributeCandies } = require("./solution");

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

console.log("\n2929. Distribute Candies Among Children Ii\n");

test(distributeCandies(7, 7), 36, 'Test 1');
test(distributeCandies(1000000, 1000000), 500001500001, 'Test 2');
test(distributeCandies(10, 5), 21, 'Test 3');
test(distributeCandies(3, 3), 10, 'Test 4');
test(distributeCandies(5, 2), 3, 'Test 5');
test(distributeCandies(100, 10), 0, 'Test 6');
test(distributeCandies(1000000, 1), 0, 'Test 7');
test(distributeCandies(7, 3), 6, 'Test 8');
test(distributeCandies(1, 1), 3, 'Test 9');
test(distributeCandies(7, 10), 36, 'Test 10');
test(distributeCandies(100, 50), 1326, 'Test 11');
test(distributeCandies(10000, 500), 0, 'Test 12');
test(distributeCandies(150, 20), 0, 'Test 13');
test(distributeCandies(20, 10), 66, 'Test 14');
test(distributeCandies(1000, 50), 0, 'Test 15');
test(distributeCandies(100000, 1000), 0, 'Test 16');
test(distributeCandies(123456, 123456), 7620877153, 'Test 17');
test(distributeCandies(123, 45), 91, 'Test 18');
test(distributeCandies(123456, 45678), 92201410, 'Test 19');
test(distributeCandies(10000, 1000), 0, 'Test 20');
test(distributeCandies(25, 10), 21, 'Test 21');
test(distributeCandies(30, 15), 136, 'Test 22');
test(distributeCandies(20, 7), 3, 'Test 23');
test(distributeCandies(1000, 30), 0, 'Test 24');
test(distributeCandies(75, 35), 496, 'Test 25');
test(distributeCandies(80, 40), 861, 'Test 26');
test(distributeCandies(9, 3), 1, 'Test 27');
test(distributeCandies(15, 4), 0, 'Test 28');
test(distributeCandies(2000, 500), 0, 'Test 29');
test(distributeCandies(1000000, 500000), 125000750001, 'Test 30');
test(distributeCandies(20, 4), 0, 'Test 31');
test(distributeCandies(456, 123), 0, 'Test 32');
test(distributeCandies(999999, 100000), 0, 'Test 33');
test(distributeCandies(789, 234), 0, 'Test 34');
test(distributeCandies(1000, 100), 0, 'Test 35');
test(distributeCandies(12345, 3456), 0, 'Test 36');
test(distributeCandies(10000, 5000), 12507501, 'Test 37');
test(distributeCandies(500000, 250000), 31250375001, 'Test 38');
test(distributeCandies(1000000, 1000), 0, 'Test 39');
test(distributeCandies(999999, 1000000), 500000500000, 'Test 40');
test(distributeCandies(20, 3), 0, 'Test 41');
test(distributeCandies(5000, 50), 0, 'Test 42');
test(distributeCandies(25, 7), 0, 'Test 43');
test(distributeCandies(9, 2), 0, 'Test 44');
test(distributeCandies(150, 15), 0, 'Test 45');
test(distributeCandies(1000, 25), 0, 'Test 46');
test(distributeCandies(30, 30), 496, 'Test 47');
test(distributeCandies(800, 200), 0, 'Test 48');
test(distributeCandies(8, 8), 45, 'Test 49');
test(distributeCandies(999999, 333333), 1, 'Test 50');
test(distributeCandies(50, 20), 66, 'Test 51');
test(distributeCandies(789012, 12345), 0, 'Test 52');
test(distributeCandies(500, 10), 0, 'Test 53');
test(distributeCandies(20, 5), 0, 'Test 54');
test(distributeCandies(500000, 100000), 0, 'Test 55');
test(distributeCandies(999999, 999999), 500000500000, 'Test 56');
test(distributeCandies(500000, 1000), 0, 'Test 57');
test(distributeCandies(300000, 1000), 0, 'Test 58');
test(distributeCandies(75, 20), 0, 'Test 59');
test(distributeCandies(50, 15), 0, 'Test 60');
test(distributeCandies(250, 25), 0, 'Test 61');
test(distributeCandies(15, 5), 1, 'Test 62');
test(distributeCandies(12, 6), 28, 'Test 63');
test(distributeCandies(1000, 20), 0, 'Test 64');
test(distributeCandies(9, 4), 10, 'Test 65');
test(distributeCandies(5000, 2000), 501501, 'Test 66');
test(distributeCandies(100000, 300), 0, 'Test 67');
test(distributeCandies(75, 25), 1, 'Test 68');
test(distributeCandies(500000, 150000), 0, 'Test 69');
test(distributeCandies(500, 200), 5151, 'Test 70');
test(distributeCandies(999, 100), 0, 'Test 71');
test(distributeCandies(10000, 50), 0, 'Test 72');
test(distributeCandies(100000, 50000), 1250075001, 'Test 73');
test(distributeCandies(6, 2), 1, 'Test 74');
test(distributeCandies(500000, 5000), 0, 'Test 75');
test(distributeCandies(6, 1), 0, 'Test 76');
test(distributeCandies(1000, 1000), 501501, 'Test 77');
test(distributeCandies(200, 50), 0, 'Test 78');
test(distributeCandies(200, 20), 0, 'Test 79');
test(distributeCandies(67890, 1000), 0, 'Test 80');
test(distributeCandies(1000, 500), 125751, 'Test 81');
test(distributeCandies(30, 10), 1, 'Test 82');
test(distributeCandies(50, 10), 0, 'Test 83');
test(distributeCandies(999, 333), 1, 'Test 84');
test(distributeCandies(25, 5), 0, 'Test 85');
test(distributeCandies(100000, 30000), 0, 'Test 86');
test(distributeCandies(5000, 200), 0, 'Test 87');
test(distributeCandies(100, 30), 0, 'Test 88');
test(distributeCandies(500, 5), 0, 'Test 89');
test(distributeCandies(10, 1), 0, 'Test 90');

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
