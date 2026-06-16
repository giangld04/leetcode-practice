// Test: 441. Arranging Coins
// 54 test cases from LeetCodeDataset
// Run: node test.js

const { arrangeCoins } = require("./solution");

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

console.log("\n441. Arranging Coins\n");

test(arrangeCoins(8), 3, 'Test 1');
test(arrangeCoins(100), 13, 'Test 2');
test(arrangeCoins(30), 7, 'Test 3');
test(arrangeCoins(15), 5, 'Test 4');
test(arrangeCoins(22), 6, 'Test 5');
test(arrangeCoins(21), 6, 'Test 6');
test(arrangeCoins(2147483647), 65535, 'Test 7');
test(arrangeCoins(1804289383), 60070, 'Test 8');
test(arrangeCoins(1), 1, 'Test 9');
test(arrangeCoins(180), 18, 'Test 10');
test(arrangeCoins(10), 4, 'Test 11');
test(arrangeCoins(5), 2, 'Test 12');
test(arrangeCoins(210), 20, 'Test 13');
test(arrangeCoins(45), 9, 'Test 14');
test(arrangeCoins(171), 18, 'Test 15');
test(arrangeCoins(3), 2, 'Test 16');
test(arrangeCoins(576), 33, 'Test 17');
test(arrangeCoins(2147483646), 65535, 'Test 18');
test(arrangeCoins(12), 4, 'Test 19');
test(arrangeCoins(7), 3, 'Test 20');
test(arrangeCoins(70), 11, 'Test 21');
test(arrangeCoins(1000), 44, 'Test 22');
test(arrangeCoins(28), 7, 'Test 23');
test(arrangeCoins(64), 10, 'Test 24');
test(arrangeCoins(16), 5, 'Test 25');
test(arrangeCoins(10000), 140, 'Test 26');
test(arrangeCoins(1001), 44, 'Test 27');
test(arrangeCoins(2), 1, 'Test 28');
test(arrangeCoins(80), 12, 'Test 29');
test(arrangeCoins(165), 17, 'Test 30');
test(arrangeCoins(6678), 115, 'Test 31');
test(arrangeCoins(101), 13, 'Test 32');
test(arrangeCoins(100000), 446, 'Test 33');
test(arrangeCoins(18), 5, 'Test 34');
test(arrangeCoins(256), 22, 'Test 35');
test(arrangeCoins(36), 8, 'Test 36');
test(arrangeCoins(500), 31, 'Test 37');
test(arrangeCoins(1000000000), 44720, 'Test 38');
test(arrangeCoins(1999), 62, 'Test 39');
test(arrangeCoins(987654321), 44443, 'Test 40');
test(arrangeCoins(5000000), 3161, 'Test 41');
test(arrangeCoins(325), 25, 'Test 42');
test(arrangeCoins(441), 29, 'Test 43');
test(arrangeCoins(136), 16, 'Test 44');
test(arrangeCoins(500000000), 31622, 'Test 45');
test(arrangeCoins(1000000), 1413, 'Test 46');
test(arrangeCoins(6), 3, 'Test 47');
test(arrangeCoins(123456789), 15712, 'Test 48');
test(arrangeCoins(120), 15, 'Test 49');
test(arrangeCoins(1999999999), 63245, 'Test 50');
test(arrangeCoins(123456), 496, 'Test 51');
test(arrangeCoins(5050), 100, 'Test 52');
test(arrangeCoins(55), 10, 'Test 53');
test(arrangeCoins(84), 12, 'Test 54');

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
