// Test: 2875. Minimum Size Subarray In Infinite Array
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { minSizeSubarray } = require("./solution");

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

console.log("\n2875. Minimum Size Subarray In Infinite Array\n");

test(minSizeSubarray([10,20,30,40,50], 150), 5, 'Test 1');
test(minSizeSubarray([7,7,7,7,7], 28), 4, 'Test 2');
test(minSizeSubarray([5,5,5,5,5], 15), 3, 'Test 3');
test(minSizeSubarray([1,2,3,4,5], 9), 2, 'Test 4');
test(minSizeSubarray([3,3,3,3,3], 9), 3, 'Test 5');
test(minSizeSubarray([1,2,3], 6), 3, 'Test 6');
test(minSizeSubarray([1,2,3,4,5], 1), 1, 'Test 7');
test(minSizeSubarray([7,7,7,7,7,7], 42), 6, 'Test 8');
test(minSizeSubarray([5,5,5,5], 15), 3, 'Test 9');
test(minSizeSubarray([2,4,6,8], 3), -1, 'Test 10');
test(minSizeSubarray([1,1,1,2,3], 4), 2, 'Test 11');
test(minSizeSubarray([1], 1), 1, 'Test 12');
test(minSizeSubarray([1,2,3,4,5], 15), 5, 'Test 13');
test(minSizeSubarray([1,2,3,4,5], 30), 10, 'Test 14');
test(minSizeSubarray([1,3,5,7], 15), 3, 'Test 15');
test(minSizeSubarray([1,2,3], 5), 2, 'Test 16');
test(minSizeSubarray([5,5,5,5], 20), 4, 'Test 17');
test(minSizeSubarray([100000], 100000), 1, 'Test 18');
test(minSizeSubarray([3,1,2,3,1,2,3,1,2,3], 21), 10, 'Test 19');
test(minSizeSubarray([2,3,5,7,11,13,17,19], 100), 11, 'Test 20');
test(minSizeSubarray([7,14,28,56,112], 224), 6, 'Test 21');
test(minSizeSubarray([10,20,30,40,50], 300), 10, 'Test 22');
test(minSizeSubarray([1,3,5,7,9,11,13,15,17,19], 100), 10, 'Test 23');
test(minSizeSubarray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 90), 12, 'Test 24');
test(minSizeSubarray([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 90), 10, 'Test 25');
test(minSizeSubarray([7, 11, 15, 19], 100), -1, 'Test 26');
test(minSizeSubarray([10,9,8,7,6,5,4,3,2,1], 55), 10, 'Test 27');
test(minSizeSubarray([2,4,6,8,10,12,14,16,18,20], 110), 10, 'Test 28');
test(minSizeSubarray([10, 20, 30, 40, 50], 100), 3, 'Test 29');
test(minSizeSubarray([5,5,5,5,5], 25), 5, 'Test 30');
test(minSizeSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 100), 100, 'Test 31');
test(minSizeSubarray([3, 3, 3, 3, 3, 3, 3, 3, 3], 27), 9, 'Test 32');
test(minSizeSubarray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100), 100, 'Test 33');
test(minSizeSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 20), 20, 'Test 34');
test(minSizeSubarray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 550), 10, 'Test 35');
test(minSizeSubarray([9,8,7,6,5,4,3,2,1], 45), 9, 'Test 36');
test(minSizeSubarray([7,14,21,28,35,42,49,56,63,70], 315), 6, 'Test 37');
test(minSizeSubarray([1,1,1,1,1,1,1,1,1,1], 10), 10, 'Test 38');
test(minSizeSubarray([2, 3, 5, 7, 11, 13, 17], 100), -1, 'Test 39');
test(minSizeSubarray([7, 8, 9], 40), 5, 'Test 40');
test(minSizeSubarray([1, 1, 2, 3, 5, 8, 13, 21, 34, 55], 10000), 697, 'Test 41');
test(minSizeSubarray([10,20,30,40,50,60,70,80,90,100], 450), 6, 'Test 42');
test(minSizeSubarray([1,2,3,4,5,6,7,8,9,10], 1000), 181, 'Test 43');
test(minSizeSubarray([3,1,4,1,5,9,2,6,5,3,5], 39), 9, 'Test 44');
test(minSizeSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 10, 'Test 45');
test(minSizeSubarray([5,10,15,20,25,30], 100), 5, 'Test 46');
test(minSizeSubarray([1, 10, 100, 1000, 10000], 11111), 5, 'Test 47');
test(minSizeSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 50), 50, 'Test 48');
test(minSizeSubarray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 50), 10, 'Test 49');
test(minSizeSubarray([29,31,37,41,43,47,53,59,61,67], 300), 6, 'Test 50');
test(minSizeSubarray([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7], 119), 17, 'Test 51');
test(minSizeSubarray([1, 2, 4, 8, 16, 32], 127), 13, 'Test 52');
test(minSizeSubarray([5, 5, 5, 5, 5], 75), 15, 'Test 53');
test(minSizeSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 50), 50, 'Test 54');
test(minSizeSubarray([9,7,5,3,1], 20), 4, 'Test 55');
test(minSizeSubarray([3,3,3,3,3,3,3,3,3,3], 27), 9, 'Test 56');
test(minSizeSubarray([123456,654321,123456,654321], 4508736), -1, 'Test 57');
test(minSizeSubarray([2,3,6,7,9], 19), -1, 'Test 58');
test(minSizeSubarray([3,6,9,12,15,18,21,24,27,30], 90), 4, 'Test 59');
test(minSizeSubarray([3, 3, 3], 27), 9, 'Test 60');
test(minSizeSubarray([5, 5, 5, 5, 5], 125), 25, 'Test 61');
test(minSizeSubarray([1,2,4,8,16,32,64,128,256,512], 1023), 10, 'Test 62');
test(minSizeSubarray([5,7,9,11,13], 100), -1, 'Test 63');
test(minSizeSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 120), 15, 'Test 64');
test(minSizeSubarray([7,14,21,28,35], 98), 4, 'Test 65');
test(minSizeSubarray([100000,100000,100000], 300000), 3, 'Test 66');
test(minSizeSubarray([9, 8, 7, 6, 5, 4, 3, 2, 1], 225), 45, 'Test 67');
test(minSizeSubarray([100000], 500000), 5, 'Test 68');
test(minSizeSubarray([10, 5, 15, 20, 25], 150), 10, 'Test 69');
test(minSizeSubarray([23, 45, 67, 89, 12, 34, 56, 78], 500), -1, 'Test 70');
test(minSizeSubarray([100000], 1000000000), 10000, 'Test 71');
test(minSizeSubarray([3,3,3,3,3,3,3,3,3,3], 90), 30, 'Test 72');
test(minSizeSubarray([5, 2, 7, 3, 9], 31), 6, 'Test 73');
test(minSizeSubarray([1,1,2,2,3,3,4,4,5,5], 30), 10, 'Test 74');
test(minSizeSubarray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 45), 14, 'Test 75');
test(minSizeSubarray([10, 20, 30], 100), 5, 'Test 76');
test(minSizeSubarray([10, 20, 30, 40, 50], 120), 3, 'Test 77');
test(minSizeSubarray([2,3,5,7,11,13,17], 101), 11, 'Test 78');
test(minSizeSubarray([123456,654321,135792,246801,357912,468012,579123], 10000000), -1, 'Test 79');
test(minSizeSubarray([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 27), 9, 'Test 80');
test(minSizeSubarray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 30), 10, 'Test 81');
test(minSizeSubarray([1, 2, 3, 4, 5, 6], 15), 3, 'Test 82');
test(minSizeSubarray([9,8,7,6,5,4,3,2,1], 120), 22, 'Test 83');
test(minSizeSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 210), 20, 'Test 84');
test(minSizeSubarray([1,10,100,1000,10000], 11111), 5, 'Test 85');
test(minSizeSubarray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 100000), 1816, 'Test 86');
test(minSizeSubarray([7,8,9], 60), -1, 'Test 87');
test(minSizeSubarray([17,19,23,29,31], 150), 6, 'Test 88');
test(minSizeSubarray([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 1000), -1, 'Test 89');
test(minSizeSubarray([5,2,3,1,1,1,1,1,1,1], 18), 11, 'Test 90');
test(minSizeSubarray([100, 200, 300], 1000), 5, 'Test 91');
test(minSizeSubarray([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 40), 20, 'Test 92');
test(minSizeSubarray([100,200,300,400,500,600,700,800,900,1000], 2500), 5, 'Test 93');
test(minSizeSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 120), 15, 'Test 94');
test(minSizeSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 55), 10, 'Test 95');
test(minSizeSubarray([7, 1, 5, 3], 31), 7, 'Test 96');
test(minSizeSubarray([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9], 180), 20, 'Test 97');
test(minSizeSubarray([9, 7, 5, 3, 1], 30), 6, 'Test 98');
test(minSizeSubarray([5, 2, 7], 22), -1, 'Test 99');
test(minSizeSubarray([100,200,300,400,500], 2500), 8, 'Test 100');
test(minSizeSubarray([10,20,30,40,50,60,70,80,90,100], 550), 10, 'Test 101');
test(minSizeSubarray([7, 14, 21, 28, 35], 105), 5, 'Test 102');
test(minSizeSubarray([2, 4, 6, 8, 10, 12, 14, 16], 100), 12, 'Test 103');
test(minSizeSubarray([100000,200000,300000,400000,500000], 1500000), 5, 'Test 104');
test(minSizeSubarray([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 90), 30, 'Test 105');
test(minSizeSubarray([100000, 100000, 100000, 100000], 400000), 4, 'Test 106');
test(minSizeSubarray([10,20,30,40,50], 120), 3, 'Test 107');
test(minSizeSubarray([5,5,5,5,5,5,5,5,5,5], 25), 5, 'Test 108');
test(minSizeSubarray([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500], 9000), 9, 'Test 109');
test(minSizeSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 275), 50, 'Test 110');
test(minSizeSubarray([1], 100000), 100000, 'Test 111');
test(minSizeSubarray([1,2,3,4,5,6,7,8,9,10], 55), 10, 'Test 112');
test(minSizeSubarray([1,2,3], 30), 15, 'Test 113');
test(minSizeSubarray([123, 456, 789], 1518), -1, 'Test 114');
test(minSizeSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 210), 20, 'Test 115');
test(minSizeSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1000), 181, 'Test 116');
test(minSizeSubarray([1], 1000000), 1000000, 'Test 117');

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
