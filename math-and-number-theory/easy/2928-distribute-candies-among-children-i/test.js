// Test: 2928. Distribute Candies Among Children I
// 71 test cases from LeetCodeDataset
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

console.log("\n2928. Distribute Candies Among Children I\n");

test(distributeCandies(10, 5), 21, 'Test 1');
test(distributeCandies(3, 3), 10, 'Test 2');
test(distributeCandies(5, 2), 3, 'Test 3');
test(distributeCandies(4, 2), 6, 'Test 4');
test(distributeCandies(7, 3), 6, 'Test 5');
test(distributeCandies(4, 4), 15, 'Test 6');
test(distributeCandies(25, 10), 21, 'Test 7');
test(distributeCandies(1, 1), 3, 'Test 8');
test(distributeCandies(20, 10), 66, 'Test 9');
test(distributeCandies(20, 15), 186, 'Test 10');
test(distributeCandies(50, 50), 1326, 'Test 11');
test(distributeCandies(15, 10), 91, 'Test 12');
test(distributeCandies(10, 1), 0, 'Test 13');
test(distributeCandies(35, 12), 3, 'Test 14');
test(distributeCandies(50, 1), 0, 'Test 15');
test(distributeCandies(18, 6), 1, 'Test 16');
test(distributeCandies(28, 8), 0, 'Test 17');
test(distributeCandies(31, 9), 0, 'Test 18');
test(distributeCandies(42, 3), 0, 'Test 19');
test(distributeCandies(30, 3), 0, 'Test 20');
test(distributeCandies(40, 15), 21, 'Test 21');
test(distributeCandies(32, 11), 3, 'Test 22');
test(distributeCandies(32, 8), 0, 'Test 23');
test(distributeCandies(15, 3), 0, 'Test 24');
test(distributeCandies(50, 20), 66, 'Test 25');
test(distributeCandies(27, 9), 1, 'Test 26');
test(distributeCandies(45, 15), 1, 'Test 27');
test(distributeCandies(28, 7), 0, 'Test 28');
test(distributeCandies(30, 5), 0, 'Test 29');
test(distributeCandies(33, 8), 0, 'Test 30');
test(distributeCandies(15, 7), 28, 'Test 31');
test(distributeCandies(50, 25), 351, 'Test 32');
test(distributeCandies(22, 7), 0, 'Test 33');
test(distributeCandies(37, 18), 171, 'Test 34');
test(distributeCandies(30, 8), 0, 'Test 35');
test(distributeCandies(49, 17), 6, 'Test 36');
test(distributeCandies(40, 20), 231, 'Test 37');
test(distributeCandies(10, 2), 0, 'Test 38');
test(distributeCandies(38, 19), 210, 'Test 39');
test(distributeCandies(33, 6), 0, 'Test 40');
test(distributeCandies(49, 25), 375, 'Test 41');
test(distributeCandies(30, 12), 28, 'Test 42');
test(distributeCandies(35, 8), 0, 'Test 43');
test(distributeCandies(42, 12), 0, 'Test 44');
test(distributeCandies(30, 10), 1, 'Test 45');
test(distributeCandies(50, 10), 0, 'Test 46');
test(distributeCandies(49, 16), 0, 'Test 47');
test(distributeCandies(30, 20), 331, 'Test 48');
test(distributeCandies(45, 20), 136, 'Test 49');
test(distributeCandies(48, 16), 1, 'Test 50');
test(distributeCandies(49, 14), 0, 'Test 51');
test(distributeCandies(10, 3), 0, 'Test 52');
test(distributeCandies(28, 10), 6, 'Test 53');
test(distributeCandies(15, 5), 1, 'Test 54');
test(distributeCandies(40, 5), 0, 'Test 55');
test(distributeCandies(15, 4), 0, 'Test 56');
test(distributeCandies(35, 10), 0, 'Test 57');
test(distributeCandies(10, 4), 6, 'Test 58');
test(distributeCandies(33, 11), 1, 'Test 59');
test(distributeCandies(49, 18), 21, 'Test 60');
test(distributeCandies(27, 10), 10, 'Test 61');
test(distributeCandies(10, 20), 66, 'Test 62');
test(distributeCandies(22, 11), 78, 'Test 63');
test(distributeCandies(27, 8), 0, 'Test 64');
test(distributeCandies(35, 7), 0, 'Test 65');
test(distributeCandies(10, 10), 66, 'Test 66');
test(distributeCandies(42, 21), 253, 'Test 67');
test(distributeCandies(42, 9), 0, 'Test 68');
test(distributeCandies(49, 20), 78, 'Test 69');
test(distributeCandies(20, 2), 0, 'Test 70');
test(distributeCandies(35, 20), 306, 'Test 71');

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
