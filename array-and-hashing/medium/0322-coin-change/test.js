// Test: 322. Coin Change
// 127 test cases from LeetCodeDataset
// Run: node test.js

const { coinChange } = require("./solution");

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

console.log("\n322. Coin Change\n");

test(coinChange([186,419,83,408], 6249), 20, 'Test 1');
test(coinChange([3,7,405,436], 8839), 25, 'Test 2');
test(coinChange([3, 7, 405], 8839), 71, 'Test 3');
test(coinChange([2,5,10,1], 27), 4, 'Test 4');
test(coinChange([1,2,5], 1), 1, 'Test 5');
test(coinChange([1,3,4,5], 7), 2, 'Test 6');
test(coinChange([1], 0), 0, 'Test 7');
test(coinChange([5,7,8], 100), 13, 'Test 8');
test(coinChange([1, 3, 4], 6), 2, 'Test 9');
test(coinChange([4,2,1], 11), 4, 'Test 10');
test(coinChange([1,3,4], 6), 2, 'Test 11');
test(coinChange([1,2,5], 11), 3, 'Test 12');
test(coinChange([1,2,5], 0), 0, 'Test 13');
test(coinChange([2], 3), -1, 'Test 14');
test(coinChange([70,171,358,439,286], 9963), 27, 'Test 15');
test(coinChange([3,7,405,88,43], 6803), 24, 'Test 16');
test(coinChange([5, 7], 15), 3, 'Test 17');
test(coinChange([18, 27, 41], 987), 26, 'Test 18');
test(coinChange([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048], 4095), 12, 'Test 19');
test(coinChange([5, 15, 25, 50], 3000), 60, 'Test 20');
test(coinChange([1, 2, 4, 8, 16], 2048), 128, 'Test 21');
test(coinChange([10, 20, 30, 40, 50, 60], 1234), -1, 'Test 22');
test(coinChange([3, 5, 7, 9, 11], 9876), 898, 'Test 23');
test(coinChange([18, 24, 28], 100), 4, 'Test 24');
test(coinChange([17, 29, 31, 37, 41, 43], 5000), 118, 'Test 25');
test(coinChange([3, 5], 11), 3, 'Test 26');
test(coinChange([17, 29, 41, 53, 65], 8300), 136, 'Test 27');
test(coinChange([11, 22, 33, 44, 55], 6600), 120, 'Test 28');
test(coinChange([34, 7, 23, 32, 5, 62], 9999), 164, 'Test 29');
test(coinChange([1, 5, 25, 50], 9999), 208, 'Test 30');
test(coinChange([2, 3, 7, 10], 500), 50, 'Test 31');
test(coinChange([7, 14, 21, 28, 35, 42, 49, 56], 1000), -1, 'Test 32');
test(coinChange([3, 6, 9, 12, 15], 1000), -1, 'Test 33');
test(coinChange([1, 5, 10, 25, 50], 78), 5, 'Test 34');
test(coinChange([10, 20, 30, 40, 50], 9999), -1, 'Test 35');
test(coinChange([1, 7, 11], 100), 10, 'Test 36');
test(coinChange([2, 3, 6, 12, 24, 48], 500), 13, 'Test 37');
test(coinChange([1, 2, 4, 8, 16, 32, 64], 1023), 21, 'Test 38');
test(coinChange([1], 10000), 10000, 'Test 39');
test(coinChange([7, 14, 30, 50, 80], 287), 6, 'Test 40');
test(coinChange([2, 4, 8, 16, 32, 64, 128], 1023), -1, 'Test 41');
test(coinChange([1, 2, 5, 10, 20, 50, 100, 200], 10002), 51, 'Test 42');
test(coinChange([2, 3, 5, 7, 11, 13], 5000), 386, 'Test 43');
test(coinChange([3, 5, 7, 9, 11], 10000), 910, 'Test 44');
test(coinChange([7], 100), -1, 'Test 45');
test(coinChange([1, 5, 10, 25, 50, 100], 99999), 1007, 'Test 46');
test(coinChange([1, 2, 3, 5, 10], 5000), 500, 'Test 47');
test(coinChange([3, 6, 9, 12, 15], 444), 30, 'Test 48');
test(coinChange([3, 5, 7, 11, 13], 997), 77, 'Test 49');
test(coinChange([1, 3, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31], 100), 4, 'Test 50');
test(coinChange([7, 15, 23, 31], 750), 26, 'Test 51');
test(coinChange([23, 14, 5, 12], 5000), 220, 'Test 52');
test(coinChange([11, 23, 37, 41, 43, 47, 53], 12345), 235, 'Test 53');
test(coinChange([1, 5, 10, 25, 50, 100], 357), 7, 'Test 54');
test(coinChange([18, 24, 27, 36, 50], 999), 21, 'Test 55');
test(coinChange([1, 5, 10, 25, 50], 9999), 206, 'Test 56');
test(coinChange([1, 2, 5, 10, 20, 50, 100, 200], 9999), 56, 'Test 57');
test(coinChange([2, 5, 10, 25], 100), 4, 'Test 58');
test(coinChange([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048], 1048575), 522, 'Test 59');
test(coinChange([7, 15, 23, 42], 999), 27, 'Test 60');
test(coinChange([7, 17, 23, 29, 31], 1000), 34, 'Test 61');
test(coinChange([1, 3, 4, 6, 8, 10], 450), 45, 'Test 62');
test(coinChange([1, 5, 10, 20, 50, 100], 10001), 101, 'Test 63');
test(coinChange([2, 3, 7], 100), 15, 'Test 64');
test(coinChange([5, 11, 23, 37, 41, 43, 61, 71, 73, 79, 83, 89], 999), 13, 'Test 65');
test(coinChange([1, 10, 100, 1000], 9999), 36, 'Test 66');
test(coinChange([1, 10, 25, 50, 100], 12345), 126, 'Test 67');
test(coinChange([186, 419, 83, 408], 6249), 20, 'Test 68');
test(coinChange([2, 3, 7], 27), 5, 'Test 69');
test(coinChange([3, 6, 9, 12, 15], 9000), 600, 'Test 70');
test(coinChange([1, 2, 5, 10, 20, 50, 100], 9999), 105, 'Test 71');
test(coinChange([5, 9, 12, 27, 31], 1276), 42, 'Test 72');
test(coinChange([2, 3, 7, 11, 19, 23], 987), 44, 'Test 73');
test(coinChange([10, 25, 50, 100], 9876), -1, 'Test 74');
test(coinChange([2, 6, 10, 14], 9999), -1, 'Test 75');
test(coinChange([10, 22, 35], 1000), 30, 'Test 76');
test(coinChange([2, 5, 11, 17, 23], 1000), 44, 'Test 77');
test(coinChange([23, 37, 41, 53, 67, 71], 8675309), 122189, 'Test 78');
test(coinChange([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 12), 12, 'Test 79');
test(coinChange([1, 6, 10], 111), 12, 'Test 80');
test(coinChange([7, 14, 33, 19, 100], 12345), 126, 'Test 81');
test(coinChange([13, 21, 34, 55, 89, 144], 6765), 51, 'Test 82');
test(coinChange([1, 2, 5, 10], 27), 4, 'Test 83');
test(coinChange([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 8000), 277, 'Test 84');
test(coinChange([1, 5, 10, 25], 99), 9, 'Test 85');
test(coinChange([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048], 1023), 10, 'Test 86');
test(coinChange([10, 15, 20], 120), 6, 'Test 87');
test(coinChange([1, 2, 3, 4, 5], 10000), 2000, 'Test 88');
test(coinChange([1, 11, 21, 31], 10000), 330, 'Test 89');
test(coinChange([1, 3, 5, 7, 9], 10000), 1112, 'Test 90');
test(coinChange([1, 2, 5, 10, 20, 50, 100, 200], 399), 8, 'Test 91');
test(coinChange([13, 19, 23, 29, 31, 37, 41], 9998), 246, 'Test 92');
test(coinChange([1, 6, 13, 37, 150], 9999), 71, 'Test 93');
test(coinChange([10, 20, 50, 100, 200], 10000), 50, 'Test 94');
test(coinChange([1, 5, 10, 25, 50], 87), 5, 'Test 95');
test(coinChange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10000), 1000, 'Test 96');
test(coinChange([100, 200, 300, 400, 500], 9999), -1, 'Test 97');
test(coinChange([1, 3, 4, 5], 150), 30, 'Test 98');
test(coinChange([2, 5, 10, 20], 98), 9, 'Test 99');
test(coinChange([1, 2, 5, 10, 25], 9999), 403, 'Test 100');
test(coinChange([10, 25, 50], 9999), -1, 'Test 101');
test(coinChange([11, 17, 29, 31], 10000), 324, 'Test 102');
test(coinChange([7, 14, 28, 29], 10000), 345, 'Test 103');
test(coinChange([10, 25, 50], 99), -1, 'Test 104');
test(coinChange([1, 3, 4, 5, 7], 10000), 1429, 'Test 105');
test(coinChange([100, 50, 20, 10, 5, 1], 19876), 202, 'Test 106');
test(coinChange([1, 3, 4, 5], 15), 3, 'Test 107');
test(coinChange([2, 5, 10, 20, 50, 100], 9999), 105, 'Test 108');
test(coinChange([13, 17, 19], 1234), 66, 'Test 109');
test(coinChange([1, 2, 5, 10, 20, 50, 100], 3689), 42, 'Test 110');
test(coinChange([335, 23, 102, 75, 402], 9783), 30, 'Test 111');
test(coinChange([2, 5, 10, 20, 50], 399), 12, 'Test 112');
test(coinChange([17, 29, 31, 37, 41, 43], 8942), 208, 'Test 113');
test(coinChange([2, 5, 10, 20, 50, 100], 363), 9, 'Test 114');
test(coinChange([12, 25, 50, 100, 200], 3678), 37, 'Test 115');
test(coinChange([13, 23, 33, 43, 53], 888), 26, 'Test 116');
test(coinChange([3, 6, 9, 12, 15, 18], 100), -1, 'Test 117');
test(coinChange([11, 17, 23], 457), 23, 'Test 118');
test(coinChange([2, 5, 10, 25], 9999), 403, 'Test 119');
test(coinChange([29, 81, 135, 50, 1], 2101), 19, 'Test 120');
test(coinChange([33, 37, 41, 43, 47, 53, 59], 10000), 170, 'Test 121');
test(coinChange([5, 11, 13], 10000), 770, 'Test 122');
test(coinChange([10, 20, 50, 100], 345), -1, 'Test 123');
test(coinChange([5, 10, 20, 50, 100], 4321), -1, 'Test 124');
test(coinChange([13, 112, 197, 84, 205], 4873), 26, 'Test 125');
test(coinChange([33, 77, 111, 155], 8500), 60, 'Test 126');
test(coinChange([7, 15, 23], 1000), 48, 'Test 127');

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
