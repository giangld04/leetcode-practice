// Test: 1276. Number Of Burgers With No Waste Of Ingredients
// 73 test cases from LeetCodeDataset
// Run: node test.js

const { numOfBurgers } = require("./solution");

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

console.log("\n1276. Number Of Burgers With No Waste Of Ingredients\n");

test(numOfBurgers(10000000, 5000000), [0, 5000000], 'Test 1');
test(numOfBurgers(16, 7), [1, 6], 'Test 2');
test(numOfBurgers(14, 5), [2, 3], 'Test 3');
test(numOfBurgers(8, 2), [2, 0], 'Test 4');
test(numOfBurgers(20, 5), [5, 0], 'Test 5');
test(numOfBurgers(0, 0), [0, 0], 'Test 6');
test(numOfBurgers(10, 3), [2, 1], 'Test 7');
test(numOfBurgers(4, 17), [], 'Test 8');
test(numOfBurgers(8, 4), [0, 4], 'Test 9');
test(numOfBurgers(2, 1), [0, 1], 'Test 10');
test(numOfBurgers(6, 3), [0, 3], 'Test 11');
test(numOfBurgers(10000000, 2500000), [2500000, 0], 'Test 12');
test(numOfBurgers(17, 4), [], 'Test 13');
test(numOfBurgers(10, 5), [0, 5], 'Test 14');
test(numOfBurgers(22, 5), [], 'Test 15');
test(numOfBurgers(22, 6), [5, 1], 'Test 16');
test(numOfBurgers(20000000, 5000000), [5000000, 0], 'Test 17');
test(numOfBurgers(1000, 250), [250, 0], 'Test 18');
test(numOfBurgers(1, 1), [], 'Test 19');
test(numOfBurgers(12, 3), [3, 0], 'Test 20');
test(numOfBurgers(42, 14), [7, 7], 'Test 21');
test(numOfBurgers(28, 7), [7, 0], 'Test 22');
test(numOfBurgers(5000000, 2000000), [500000, 1500000], 'Test 23');
test(numOfBurgers(30, 8), [7, 1], 'Test 24');
test(numOfBurgers(22, 11), [0, 11], 'Test 25');
test(numOfBurgers(15, 5), [], 'Test 26');
test(numOfBurgers(7, 2), [], 'Test 27');
test(numOfBurgers(88, 22), [22, 0], 'Test 28');
test(numOfBurgers(7, 3), [], 'Test 29');
test(numOfBurgers(18, 5), [4, 1], 'Test 30');
test(numOfBurgers(18, 8), [1, 7], 'Test 31');
test(numOfBurgers(40, 10), [10, 0], 'Test 32');
test(numOfBurgers(9, 3), [], 'Test 33');
test(numOfBurgers(12, 5), [1, 4], 'Test 34');
test(numOfBurgers(5, 3), [], 'Test 35');
test(numOfBurgers(22, 9), [2, 7], 'Test 36');
test(numOfBurgers(50, 12), [], 'Test 37');
test(numOfBurgers(32, 8), [8, 0], 'Test 38');
test(numOfBurgers(10000002, 2500000), [], 'Test 39');
test(numOfBurgers(100, 30), [20, 10], 'Test 40');
test(numOfBurgers(24, 6), [6, 0], 'Test 41');
test(numOfBurgers(32, 10), [6, 4], 'Test 42');
test(numOfBurgers(14, 7), [0, 7], 'Test 43');
test(numOfBurgers(7, 4), [], 'Test 44');
test(numOfBurgers(80, 15), [], 'Test 45');
test(numOfBurgers(34, 8), [], 'Test 46');
test(numOfBurgers(20, 8), [2, 6], 'Test 47');
test(numOfBurgers(40000000, 10000000), [10000000, 0], 'Test 48');
test(numOfBurgers(28, 6), [], 'Test 49');
test(numOfBurgers(14, 4), [3, 1], 'Test 50');
test(numOfBurgers(40000002, 10000000), [], 'Test 51');
test(numOfBurgers(16, 10), [], 'Test 52');
test(numOfBurgers(123456, 65432), [], 'Test 53');
test(numOfBurgers(50, 15), [10, 5], 'Test 54');
test(numOfBurgers(34, 9), [8, 1], 'Test 55');
test(numOfBurgers(10, 2), [], 'Test 56');
test(numOfBurgers(12, 6), [0, 6], 'Test 57');
test(numOfBurgers(8, 3), [1, 2], 'Test 58');
test(numOfBurgers(34, 11), [6, 5], 'Test 59');
test(numOfBurgers(25, 8), [], 'Test 60');
test(numOfBurgers(18, 6), [3, 3], 'Test 61');
test(numOfBurgers(5000000, 1250000), [1250000, 0], 'Test 62');
test(numOfBurgers(14, 3), [], 'Test 63');
test(numOfBurgers(9999998, 4999999), [0, 4999999], 'Test 64');
test(numOfBurgers(22, 7), [4, 3], 'Test 65');
test(numOfBurgers(28, 10), [4, 6], 'Test 66');
test(numOfBurgers(30, 10), [5, 5], 'Test 67');
test(numOfBurgers(4, 0), [], 'Test 68');
test(numOfBurgers(12, 4), [2, 2], 'Test 69');
test(numOfBurgers(10, 4), [1, 3], 'Test 70');
test(numOfBurgers(100, 25), [25, 0], 'Test 71');
test(numOfBurgers(44, 11), [11, 0], 'Test 72');
test(numOfBurgers(34, 13), [4, 9], 'Test 73');

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
