// Test: 279. Perfect Squares
// 75 test cases from LeetCodeDataset
// Run: node test.js

const { numSquares } = require("./solution");

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

console.log("\n279. Perfect Squares\n");

test(numSquares(625), 1, 'Test 1');
test(numSquares(8), 2, 'Test 2');
test(numSquares(100), 1, 'Test 3');
test(numSquares(4), 1, 'Test 4');
test(numSquares(12), 3, 'Test 5');
test(numSquares(16), 1, 'Test 6');
test(numSquares(17), 2, 'Test 7');
test(numSquares(10000), 1, 'Test 8');
test(numSquares(9), 1, 'Test 9');
test(numSquares(9876), 3, 'Test 10');
test(numSquares(6), 3, 'Test 11');
test(numSquares(9999), 4, 'Test 12');
test(numSquares(23), 4, 'Test 13');
test(numSquares(1), 1, 'Test 14');
test(numSquares(10), 2, 'Test 15');
test(numSquares(13), 2, 'Test 16');
test(numSquares(25), 1, 'Test 17');
test(numSquares(3), 3, 'Test 18');
test(numSquares(9801), 1, 'Test 19');
test(numSquares(156), 4, 'Test 20');
test(numSquares(2356), 3, 'Test 21');
test(numSquares(63), 4, 'Test 22');
test(numSquares(4001), 2, 'Test 23');
test(numSquares(144), 1, 'Test 24');
test(numSquares(12345), 3, 'Test 25');
test(numSquares(8200), 2, 'Test 26');
test(numSquares(5678), 3, 'Test 27');
test(numSquares(2345), 3, 'Test 28');
test(numSquares(1111), 4, 'Test 29');
test(numSquares(1600), 1, 'Test 30');
test(numSquares(7500), 3, 'Test 31');
test(numSquares(50), 2, 'Test 32');
test(numSquares(3333), 3, 'Test 33');
test(numSquares(300), 3, 'Test 34');
test(numSquares(28), 4, 'Test 35');
test(numSquares(6250), 2, 'Test 36');
test(numSquares(8402), 2, 'Test 37');
test(numSquares(3000), 3, 'Test 38');
test(numSquares(64), 1, 'Test 39');
test(numSquares(98), 2, 'Test 40');
test(numSquares(2), 2, 'Test 41');
test(numSquares(8401), 3, 'Test 42');
test(numSquares(1024), 1, 'Test 43');
test(numSquares(38), 3, 'Test 44');
test(numSquares(7776), 3, 'Test 45');
test(numSquares(8000), 2, 'Test 46');
test(numSquares(169), 1, 'Test 47');
test(numSquares(75), 3, 'Test 48');
test(numSquares(5000), 2, 'Test 49');
test(numSquares(9500), 4, 'Test 50');
test(numSquares(19), 3, 'Test 51');
test(numSquares(7199), 4, 'Test 52');
test(numSquares(77), 3, 'Test 53');
test(numSquares(1999), 4, 'Test 54');
test(numSquares(5625), 1, 'Test 55');
test(numSquares(81), 1, 'Test 56');
test(numSquares(7654), 3, 'Test 57');
test(numSquares(48), 3, 'Test 58');
test(numSquares(4321), 2, 'Test 59');
test(numSquares(7777), 3, 'Test 60');
test(numSquares(6400), 1, 'Test 61');
test(numSquares(325), 2, 'Test 62');
test(numSquares(9000), 2, 'Test 63');
test(numSquares(4999), 4, 'Test 64');
test(numSquares(4369), 2, 'Test 65');
test(numSquares(400), 1, 'Test 66');
test(numSquares(78), 3, 'Test 67');
test(numSquares(31), 4, 'Test 68');
test(numSquares(1234), 2, 'Test 69');
test(numSquares(3125), 2, 'Test 70');
test(numSquares(2017), 2, 'Test 71');
test(numSquares(85), 2, 'Test 72');
test(numSquares(196), 1, 'Test 73');
test(numSquares(8999), 4, 'Test 74');
test(numSquares(84), 3, 'Test 75');

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
