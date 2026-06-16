// Test: 2836. Maximize Value Of Function In A Ball Passing Game
// 112 test cases from LeetCodeDataset
// Run: node test.js

const { getMaxFunctionValue } = require("./solution");

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

console.log("\n2836. Maximize Value Of Function In A Ball Passing Game\n");

test(getMaxFunctionValue([4,3,2,1,0], 10), 24, 'Test 1');
test(getMaxFunctionValue([4,3,2,1,0], 5), 12, 'Test 2');
test(getMaxFunctionValue([3,3,3,3], 10), 33, 'Test 3');
test(getMaxFunctionValue([0,2,1,0], 5), 9, 'Test 4');
test(getMaxFunctionValue([1,1,1,2,3], 3), 10, 'Test 5');
test(getMaxFunctionValue([0,2,1,3], 2), 9, 'Test 6');
test(getMaxFunctionValue([2,0,1], 4), 6, 'Test 7');
test(getMaxFunctionValue([1,2,3,4,0], 2), 9, 'Test 8');
test(getMaxFunctionValue([3,2,1,0], 5), 9, 'Test 9');
test(getMaxFunctionValue([1,2,3,4,0], 10), 24, 'Test 10');
test(getMaxFunctionValue([0,0,0,0,0,0,0,0,0,0], 1000000000), 9, 'Test 11');
test(getMaxFunctionValue([1, 2, 0, 3, 4, 5], 15), 80, 'Test 12');
test(getMaxFunctionValue([1,0,1,0,1,0,1,0,1,0], 5000000000), 2500000009, 'Test 13');
test(getMaxFunctionValue([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,0,1,2,3,4], 1000000000), 11500000019, 'Test 14');
test(getMaxFunctionValue([5,6,7,8,9,0,1,2,3,4,10,11,12,13,14,15,16,17,18,19], 100000), 1900019, 'Test 15');
test(getMaxFunctionValue([0,0,0,0,0], 1000000000), 4, 'Test 16');
test(getMaxFunctionValue([2, 0, 1, 3, 4, 5, 3, 2], 100), 505, 'Test 17');
test(getMaxFunctionValue([9,8,7,6,5,4,3,2,1,0,11,12,13,14,15,16,17,18,19,20], 1000000), Error: list index out of range, 'Test 18');
test(getMaxFunctionValue([5,4,3,2,1,0,9,8,7,6], 875000000), 6562500009, 'Test 19');
test(getMaxFunctionValue([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,0], 1000000), 9500019, 'Test 20');
test(getMaxFunctionValue([1, 0, 3, 2, 5, 4], 999999999), 4500000000, 'Test 21');
test(getMaxFunctionValue([2, 3, 4, 5, 0, 1], 123456789), 370370372, 'Test 22');
test(getMaxFunctionValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 0], 1000000000), 9500000019, 'Test 23');
test(getMaxFunctionValue([0,0,0,0,0,0,0,0,0,0], 10000000000), 9, 'Test 24');
test(getMaxFunctionValue([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5), 54, 'Test 25');
test(getMaxFunctionValue([0, 1, 0, 1, 0, 1], 5000000000), 5000000005, 'Test 26');
test(getMaxFunctionValue([1,0,3,2,5,4,7,6,9,8], 200), 1709, 'Test 27');
test(getMaxFunctionValue([9,8,7,6,5,4,3,2,1,0], 20), 99, 'Test 28');
test(getMaxFunctionValue([0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5], 1000), 5011, 'Test 29');
test(getMaxFunctionValue([3,0,1,2,7,8,9,10,5,6,11,4], 500), 4011, 'Test 30');
test(getMaxFunctionValue([2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 0], 8765432109), 43827160558, 'Test 31');
test(getMaxFunctionValue([5,6,0,1,3,2,4], 100), 356, 'Test 32');
test(getMaxFunctionValue([19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0], 1000000), 9500019, 'Test 33');
test(getMaxFunctionValue([4, 3, 2, 1, 0, 1, 2, 3, 4, 3, 2, 1, 0, 1, 2, 3, 4], 100000), 200016, 'Test 34');
test(getMaxFunctionValue([1, 0, 2, 4, 3, 5, 6, 7, 8, 9], 50), 459, 'Test 35');
test(getMaxFunctionValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15, 10], 1000000000), 12500000015, 'Test 36');
test(getMaxFunctionValue([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 1000000000), 3000000009, 'Test 37');
test(getMaxFunctionValue([2,3,4,5,6,0,1,7,8,9], 20), 189, 'Test 38');
test(getMaxFunctionValue([1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2], 1000000), 1000020, 'Test 39');
test(getMaxFunctionValue([0, 0, 0, 0, 0, 0], 999999999), 5, 'Test 40');
test(getMaxFunctionValue([1, 3, 5, 7, 9, 2, 4, 6, 8, 0], 10000000000), 80000000008, 'Test 41');
test(getMaxFunctionValue([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 1000), 4509, 'Test 42');
test(getMaxFunctionValue([4, 3, 2, 1, 0, 4, 3, 2, 1, 0], 10000000000), 20000000009, 'Test 43');
test(getMaxFunctionValue([2,3,4,5,6,7,8,9,0,1], 10000000), 50000009, 'Test 44');
test(getMaxFunctionValue([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 5), 27, 'Test 45');
test(getMaxFunctionValue([2,3,4,5,6,7,8,9,10,1], 500000000), Error: list index out of range, 'Test 46');
test(getMaxFunctionValue([1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 1000000000), 500000009, 'Test 47');
test(getMaxFunctionValue([2, 3, 4, 5, 6, 1, 0], 10000000000), 30000000006, 'Test 48');
test(getMaxFunctionValue([5, 4, 3, 2, 1, 0, 6, 7, 8, 9], 10000000000), 90000000009, 'Test 49');
test(getMaxFunctionValue([3,1,2,0,5,4,7,6,9,8], 1000), 8509, 'Test 50');
test(getMaxFunctionValue([2,3,4,5,6,7,8,9,0,1], 1500000000), 7500000009, 'Test 51');
test(getMaxFunctionValue([1,0,3,2,5,4,7,6,9,8], 50), 434, 'Test 52');
test(getMaxFunctionValue([1,0,3,2,5,4,7,6,9,8,11,10,13,12,15,14,17,16,19,18], 100000000), 1850000019, 'Test 53');
test(getMaxFunctionValue([5, 3, 0, 1, 4, 2], 500000000), 2000000004, 'Test 54');
test(getMaxFunctionValue([4,4,4,4,4,4,4,4,4,4], 999999999), 4000000005, 'Test 55');
test(getMaxFunctionValue([1, 3, 5, 7, 9, 2, 4, 6, 8, 0], 100000), 800008, 'Test 56');
test(getMaxFunctionValue([10,9,8,7,6,5,4,3,2,1,0], 50), 260, 'Test 57');
test(getMaxFunctionValue([3, 2, 1, 0, 7, 6, 5, 4], 10000000000), 55000000007, 'Test 58');
test(getMaxFunctionValue([0, 0, 1, 2, 3, 4], 1000000000), 15, 'Test 59');
test(getMaxFunctionValue([1,3,5,7,9,2,4,6,8,0], 1250000000), 10000000008, 'Test 60');
test(getMaxFunctionValue([0,2,4,6,8,1,3,5,7,9], 625000000), 5625000009, 'Test 61');
test(getMaxFunctionValue([3,0,1,2,5,4,7,6,9,8,11,10,13,12,15,14,17,16,19,18], 1000000000), 18500000019, 'Test 62');
test(getMaxFunctionValue([5, 3, 0, 2, 1, 4], 10000000000), 25000000005, 'Test 63');
test(getMaxFunctionValue([4,3,2,1,0,9,8,7,6,5,14,13,12,11,10,19,18,17,16,15], 900000000), 15300000019, 'Test 64');
test(getMaxFunctionValue([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 500000000), 9, 'Test 65');
test(getMaxFunctionValue([2, 4, 6, 8, 10, 12, 14, 16, 18, 0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 9999999999), 190000000000, 'Test 66');
test(getMaxFunctionValue([1,3,5,7,9,11,13,15,17,19,0,2,4,6,8,10,12,14,16,18], 1000), 13022, 'Test 67');
test(getMaxFunctionValue([2,3,4,5,6,7,8,9,0,1], 25), 134, 'Test 68');
test(getMaxFunctionValue([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 10000000000), 490000000049, 'Test 69');
test(getMaxFunctionValue([1,2,3,4,5,6,7,8,9,0], 10000000000), 45000000009, 'Test 70');
test(getMaxFunctionValue([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 500000000), 9500000019, 'Test 71');
test(getMaxFunctionValue([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 1000000000), 19000000019, 'Test 72');
test(getMaxFunctionValue([19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 1000000000), 9500000019, 'Test 73');
test(getMaxFunctionValue([7, 6, 5, 4, 3, 2, 1, 0, 8, 9, 10, 11, 12, 13, 14, 15], 9876543210), 148148148165, 'Test 74');
test(getMaxFunctionValue([5,4,3,2,1,0], 15), 40, 'Test 75');
test(getMaxFunctionValue([9,8,7,6,5,4,3,2,1,0], 500000000), 2250000009, 'Test 76');
test(getMaxFunctionValue([0,0,0,0,0], 100000), 4, 'Test 77');
test(getMaxFunctionValue([5,6,0,1,4,3,2], 15), 64, 'Test 78');
test(getMaxFunctionValue([5,5,5,5,5,5,5,5,5,5], 5000), 25009, 'Test 79');
test(getMaxFunctionValue([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 1000000000), 5000000010, 'Test 80');
test(getMaxFunctionValue([7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 11, 10, 15, 14, 13, 12], 100000000), 1350000015, 'Test 81');
test(getMaxFunctionValue([1,0,1,0,1,0,1,0,1,0], 50), 34, 'Test 82');
test(getMaxFunctionValue([1,1,1,1,1,1,1,1,1,1], 100), 109, 'Test 83');
test(getMaxFunctionValue([5,6,7,8,9,0,1,2,3,4], 750000000), 4875000009, 'Test 84');
test(getMaxFunctionValue([5, 4, 3, 2, 1, 0], 500000000), 1250000005, 'Test 85');
test(getMaxFunctionValue([0, 1, 2, 0, 1, 2, 0, 1, 2, 0], 5000000000), 10000000008, 'Test 86');
test(getMaxFunctionValue([2,0,1,4,3,6,5,8,7,10,9,12,11,14,13,16,15,18,17,0], 1000000000), 17500000018, 'Test 87');
test(getMaxFunctionValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5000000000), 5000000019, 'Test 88');
test(getMaxFunctionValue([2, 0, 3, 1, 6, 4, 5, 7, 8, 9], 100000000000), 900000000009, 'Test 89');
test(getMaxFunctionValue([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 9999999999), 45000000000, 'Test 90');
test(getMaxFunctionValue([5,4,3,2,1,0], 100), 255, 'Test 91');
test(getMaxFunctionValue([0,1,2,3,4,5,6,7,8,9], 1000000000), 9000000009, 'Test 92');
test(getMaxFunctionValue([1,3,5,7,9,2,4,6,8,0], 50), 408, 'Test 93');
test(getMaxFunctionValue([2, 1, 0, 3, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14], 100000000), 1450000015, 'Test 94');
test(getMaxFunctionValue([5,4,3,2,1,0], 10000000000), 25000000005, 'Test 95');
test(getMaxFunctionValue([0,3,6,9,2,5,8,1,4,7], 50), 259, 'Test 96');
test(getMaxFunctionValue([1,2,3,4,5,6,7,8,9,0,11,12,13,14,15,16,17,18,19,10], 999999999), 14500000000, 'Test 97');
test(getMaxFunctionValue([6,5,4,3,2,1,0,7,8,9,10,11,12,13,14,15], 100000), 1500015, 'Test 98');
test(getMaxFunctionValue([3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1], 1000), 3009, 'Test 99');
test(getMaxFunctionValue([5, 4, 3, 2, 1, 0], 1000000000), 2500000005, 'Test 100');
test(getMaxFunctionValue([9,8,7,6,5,4,3,2,1,0], 1000000000), 4500000009, 'Test 101');
test(getMaxFunctionValue([0,2,3,4,5,6,7,8,9,1], 100), 512, 'Test 102');
test(getMaxFunctionValue([3, 0, 1, 2, 5, 4], 100), 455, 'Test 103');
test(getMaxFunctionValue([3,2,1,0,7,6,5,4,9,8], 50), 434, 'Test 104');
test(getMaxFunctionValue([1,2,0,4,5,3,6,7,8,9], 50), 459, 'Test 105');
test(getMaxFunctionValue([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10000000000), 10000000019, 'Test 106');
test(getMaxFunctionValue([0,1,0,1,0,1,0,1,0,1], 1000000000), 1000000009, 'Test 107');
test(getMaxFunctionValue([2,3,4,5,6,7,8,9,10,1], 1000), Error: list index out of range, 'Test 108');
test(getMaxFunctionValue([1,0,1,0,1,0,1,0,1,0], 999999999), 500000008, 'Test 109');
test(getMaxFunctionValue([1, 2, 3, 4, 5, 0, 1, 2, 3, 4], 9999999999), 25000000010, 'Test 110');
test(getMaxFunctionValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 1000000000), 18500000019, 'Test 111');
test(getMaxFunctionValue([1,0,3,2,5,4,7,6,9,8], 100000), 850009, 'Test 112');

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
