// Test: 1518. Water Bottles
// 73 test cases from LeetCodeDataset
// Run: node test.js

const { numWaterBottles } = require("./solution");

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

console.log("\n1518. Water Bottles\n");

test(numWaterBottles(10, 2), 19, 'Test 1');
test(numWaterBottles(20, 6), 23, 'Test 2');
test(numWaterBottles(100, 10), 111, 'Test 3');
test(numWaterBottles(5, 5), 6, 'Test 4');
test(numWaterBottles(15, 4), 19, 'Test 5');
test(numWaterBottles(100, 2), 199, 'Test 6');
test(numWaterBottles(9, 3), 13, 'Test 7');
test(numWaterBottles(99, 2), 197, 'Test 8');
test(numWaterBottles(98, 14), 105, 'Test 9');
test(numWaterBottles(75, 9), 84, 'Test 10');
test(numWaterBottles(80, 10), 88, 'Test 11');
test(numWaterBottles(60, 10), 66, 'Test 12');
test(numWaterBottles(30, 15), 32, 'Test 13');
test(numWaterBottles(60, 8), 68, 'Test 14');
test(numWaterBottles(85, 3), 127, 'Test 15');
test(numWaterBottles(33, 33), 34, 'Test 16');
test(numWaterBottles(80, 7), 93, 'Test 17');
test(numWaterBottles(50, 5), 62, 'Test 18');
test(numWaterBottles(77, 14), 82, 'Test 19');
test(numWaterBottles(55, 9), 61, 'Test 20');
test(numWaterBottles(80, 12), 87, 'Test 21');
test(numWaterBottles(45, 12), 49, 'Test 22');
test(numWaterBottles(72, 8), 82, 'Test 23');
test(numWaterBottles(100, 100), 101, 'Test 24');
test(numWaterBottles(25, 11), 27, 'Test 25');
test(numWaterBottles(55, 13), 59, 'Test 26');
test(numWaterBottles(100, 9), 112, 'Test 27');
test(numWaterBottles(80, 5), 99, 'Test 28');
test(numWaterBottles(25, 3), 37, 'Test 29');
test(numWaterBottles(65, 9), 73, 'Test 30');
test(numWaterBottles(5, 6), 5, 'Test 31');
test(numWaterBottles(60, 4), 79, 'Test 32');
test(numWaterBottles(45, 9), 50, 'Test 33');
test(numWaterBottles(30, 7), 34, 'Test 34');
test(numWaterBottles(75, 8), 85, 'Test 35');
test(numWaterBottles(50, 3), 74, 'Test 36');
test(numWaterBottles(55, 11), 60, 'Test 37');
test(numWaterBottles(25, 6), 29, 'Test 38');
test(numWaterBottles(1, 2), 1, 'Test 39');
test(numWaterBottles(70, 8), 79, 'Test 40');
test(numWaterBottles(30, 4), 39, 'Test 41');
test(numWaterBottles(45, 4), 59, 'Test 42');
test(numWaterBottles(64, 8), 73, 'Test 43');
test(numWaterBottles(40, 8), 45, 'Test 44');
test(numWaterBottles(50, 7), 58, 'Test 45');
test(numWaterBottles(75, 6), 89, 'Test 46');
test(numWaterBottles(99, 9), 111, 'Test 47');
test(numWaterBottles(70, 9), 78, 'Test 48');
test(numWaterBottles(99, 7), 115, 'Test 49');
test(numWaterBottles(85, 5), 106, 'Test 50');
test(numWaterBottles(81, 9), 91, 'Test 51');
test(numWaterBottles(99, 10), 109, 'Test 52');
test(numWaterBottles(88, 11), 96, 'Test 53');
test(numWaterBottles(60, 11), 65, 'Test 54');
test(numWaterBottles(60, 12), 65, 'Test 55');
test(numWaterBottles(77, 13), 83, 'Test 56');
test(numWaterBottles(45, 7), 52, 'Test 57');
test(numWaterBottles(99, 3), 148, 'Test 58');
test(numWaterBottles(65, 15), 69, 'Test 59');
test(numWaterBottles(33, 11), 36, 'Test 60');
test(numWaterBottles(45, 3), 67, 'Test 61');
test(numWaterBottles(40, 13), 43, 'Test 62');
test(numWaterBottles(99, 5), 123, 'Test 63');
test(numWaterBottles(100, 11), 109, 'Test 64');
test(numWaterBottles(90, 6), 107, 'Test 65');
test(numWaterBottles(75, 12), 81, 'Test 66');
test(numWaterBottles(30, 6), 35, 'Test 67');
test(numWaterBottles(100, 5), 124, 'Test 68');
test(numWaterBottles(40, 15), 42, 'Test 69');
test(numWaterBottles(65, 13), 70, 'Test 70');
test(numWaterBottles(90, 4), 119, 'Test 71');
test(numWaterBottles(50, 10), 55, 'Test 72');
test(numWaterBottles(80, 4), 106, 'Test 73');

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
