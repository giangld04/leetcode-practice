// Test: 2334. Subarray With Elements Greater Than Varying Threshold
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { validSubarraySize } = require("./solution");

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

console.log("\n2334. Subarray With Elements Greater Than Varying Threshold\n");

test(validSubarraySize([10,20,30,40,50], 15), 1, 'Test 1');
test(validSubarraySize([10,10,10,10,10], 1), 1, 'Test 2');
test(validSubarraySize([5,5,5,5,5], 25), -1, 'Test 3');
test(validSubarraySize([10,9,8,7,6,5,4,3,2,1], 55), -1, 'Test 4');
test(validSubarraySize([10,20,30,40,50], 100), -1, 'Test 5');
test(validSubarraySize([5,5,5,5,5,5,5,5,5,5], 5), 2, 'Test 6');
test(validSubarraySize([2,2,2,2,2], 10), -1, 'Test 7');
test(validSubarraySize([1,1,1,1,1,1,1,1,1,1], 1), 2, 'Test 8');
test(validSubarraySize([1,2,3,4,5], 15), -1, 'Test 9');
test(validSubarraySize([9,8,7,6,5,4,3,2,1], 45), -1, 'Test 10');
test(validSubarraySize([5,4,3,2,1], 10), -1, 'Test 11');
test(validSubarraySize([1,2,3,4,5,6,7,8,9,10], 50), -1, 'Test 12');
test(validSubarraySize([6,5,6,5,8], 7), 1, 'Test 13');
test(validSubarraySize([1,2,3,4,5,6,7,8,9,10], 30), -1, 'Test 14');
test(validSubarraySize([1,3,4,3,1], 6), 3, 'Test 15');
test(validSubarraySize([100,200,300,400,500], 1000), -1, 'Test 16');
test(validSubarraySize([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1], 20), 21, 'Test 17');
test(validSubarraySize([1,1,2,2,3,3,4,4,5,5], 10), 3, 'Test 18');
test(validSubarraySize([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 11, 'Test 19');
test(validSubarraySize([100,90,80,70,60,50,40,30,20,10], 500), -1, 'Test 20');
test(validSubarraySize([19, 17, 15, 13, 11, 9, 7, 5, 3, 1], 50), 4, 'Test 21');
test(validSubarraySize([1,2,3,4,5,6,7,8,9,10], 5), 1, 'Test 22');
test(validSubarraySize([5,10,15,20,25,30,35,40,45,50], 225), -1, 'Test 23');
test(validSubarraySize([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 45), 1, 'Test 24');
test(validSubarraySize([1,9,1,9,1,9,1,9,1,9], 8), 1, 'Test 25');
test(validSubarraySize([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0], 50), -1, 'Test 26');
test(validSubarraySize([9,8,7,6,5,4,3,2,1,10], 45), -1, 'Test 27');
test(validSubarraySize([5,10,15,20,25], 100), -1, 'Test 28');
test(validSubarraySize([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 1000), -1, 'Test 29');
test(validSubarraySize([150,140,130,120,110,100,90,80,70,60,50,40,30,20,10], 1285), -1, 'Test 30');
test(validSubarraySize([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 100), -1, 'Test 31');
test(validSubarraySize([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10], 95), -1, 'Test 32');
test(validSubarraySize([10,20,30,40,50,60,70,80,90,100], 1000), -1, 'Test 33');
test(validSubarraySize([7,7,7,7,7,7,7,7,7,7], 5), 1, 'Test 34');
test(validSubarraySize([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), 2, 'Test 35');
test(validSubarraySize([1,2,3,4,5,6,7,8,9,10], 1), 1, 'Test 36');
test(validSubarraySize([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 20), 3, 'Test 37');
test(validSubarraySize([1000000000,1000000000,1000000000,1000000000], 1000000000), 2, 'Test 38');
test(validSubarraySize([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 100), -1, 'Test 39');
test(validSubarraySize([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 15), 4, 'Test 40');
test(validSubarraySize([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 2, 'Test 41');
test(validSubarraySize([1,2,3,4,5,6,7,8,9,10], 55), -1, 'Test 42');
test(validSubarraySize([10,9,8,7,6,5,4,3,2,1], 50), -1, 'Test 43');
test(validSubarraySize([1,10,1,10,1,10,1,10,1,10], 20), -1, 'Test 44');
test(validSubarraySize([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 20), 5, 'Test 45');
test(validSubarraySize([1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000], 10000000000), -1, 'Test 46');
test(validSubarraySize([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 120), -1, 'Test 47');
test(validSubarraySize([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1000), -1, 'Test 48');
test(validSubarraySize([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 450), -1, 'Test 49');
test(validSubarraySize([9,8,7,6,5,4,3,2,1], 25), -1, 'Test 50');
test(validSubarraySize([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 190), -1, 'Test 51');
test(validSubarraySize([1,2,3,4,5,6,7,8,9,10], 25), 4, 'Test 52');
test(validSubarraySize([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 1), 1, 'Test 53');
test(validSubarraySize([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), 2, 'Test 54');
test(validSubarraySize([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 1950), -1, 'Test 55');
test(validSubarraySize([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1000000000), -1, 'Test 56');
test(validSubarraySize([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 200), -1, 'Test 57');
test(validSubarraySize([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 100), -1, 'Test 58');
test(validSubarraySize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 45), -1, 'Test 59');
test(validSubarraySize([1,1000000000,1,1,1,1,1,1,1,1], 1000000000), -1, 'Test 60');
test(validSubarraySize([100, 1, 100, 1, 100, 1, 100, 1, 100, 1], 400), -1, 'Test 61');
test(validSubarraySize([100, 200, 300, 400, 500], 1000), -1, 'Test 62');
test(validSubarraySize([9, 7, 5, 3, 1, 2, 4, 6, 8, 10], 18), -1, 'Test 63');
test(validSubarraySize([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5], 20), 5, 'Test 64');
test(validSubarraySize([30,20,10,40,50,60,70,80,90,100], 250), 4, 'Test 65');
test(validSubarraySize([1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 1000000000), 2, 'Test 66');
test(validSubarraySize([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 20), 7, 'Test 67');
test(validSubarraySize([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 10), 4, 'Test 68');
test(validSubarraySize([5,8,7,3,9,10,2,1,6], 20), -1, 'Test 69');
test(validSubarraySize([1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 500000000), 1, 'Test 70');
test(validSubarraySize([2,1,4,3,6,5,8,7,10,9], 50), -1, 'Test 71');
test(validSubarraySize([5,1,4,3,9,8,10], 30), -1, 'Test 72');
test(validSubarraySize([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 100), -1, 'Test 73');
test(validSubarraySize([9, 8, 7, 6, 5, 4, 3, 2, 1], 20), 3, 'Test 74');
test(validSubarraySize([10,9,8,7,6,5,4,3,2,1], 20), 3, 'Test 75');
test(validSubarraySize([100,90,80,70,60,50,40,30,20,10], 450), -1, 'Test 76');
test(validSubarraySize([1, 10, 1, 10, 1, 10, 1, 10, 1, 10], 25), -1, 'Test 77');
test(validSubarraySize([1,2,3,4,5,6,7,8,9,10], 45), -1, 'Test 78');
test(validSubarraySize([3,1,4,1,5,9,2,6,5,3,5,9,2,6,5,3,5,9,2,6], 50), -1, 'Test 79');
test(validSubarraySize([20, 18, 16, 14, 12, 10, 8, 6, 4, 2], 100), -1, 'Test 80');
test(validSubarraySize([1, 3, 2, 6, 5, 4, 7, 9, 8, 10], 15), 3, 'Test 81');
test(validSubarraySize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 25), 4, 'Test 82');
test(validSubarraySize([1,3,5,7,9,11,13,15,17,19], 100), -1, 'Test 83');
test(validSubarraySize([10,1,10,1,10,1,10,1,10,1], 10), -1, 'Test 84');
test(validSubarraySize([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11,13,12,14,13,15,14,16,15,17,16,18,17,19,18,20], 210), -1, 'Test 85');
test(validSubarraySize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 20), 2, 'Test 86');
test(validSubarraySize([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 900), -1, 'Test 87');
test(validSubarraySize([100,200,300,400,500,600,700,800,900,1000], 5000), -1, 'Test 88');
test(validSubarraySize([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 90), 7, 'Test 89');
test(validSubarraySize([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 100), -1, 'Test 90');
test(validSubarraySize([100,99,98,97,96,95,94,93,92,91,90], 500), 6, 'Test 91');
test(validSubarraySize([1,10,1,10,1,10,1,10,1,10], 10), -1, 'Test 92');
test(validSubarraySize([9,8,7,6,5,4,3,2,1], 20), 3, 'Test 93');
test(validSubarraySize([1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 5000000000), -1, 'Test 94');
test(validSubarraySize([10,20,30,40,50,60,70,80,90,100], 495), -1, 'Test 95');
test(validSubarraySize([1,3,2,4,5,3,2,1,3,4], 10), 6, 'Test 96');
test(validSubarraySize([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 11, 'Test 97');
test(validSubarraySize([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 200), -1, 'Test 98');
test(validSubarraySize([2,3,5,7,11,13,17,19,23,29], 100), -1, 'Test 99');
test(validSubarraySize([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 50), 4, 'Test 100');
test(validSubarraySize([7,6,5,4,3,2,1,2,3,4,5,6,7], 49), -1, 'Test 101');
test(validSubarraySize([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 1285), -1, 'Test 102');
test(validSubarraySize([10,20,30,40,50,60,70,80,90,100], 550), -1, 'Test 103');
test(validSubarraySize([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 240), -1, 'Test 104');
test(validSubarraySize([150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 900), -1, 'Test 105');
test(validSubarraySize([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 5), 2, 'Test 106');
test(validSubarraySize([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 90), 7, 'Test 107');
test(validSubarraySize([10,1,10,1,10,1,10,1,10,1], 9), 1, 'Test 108');
test(validSubarraySize([1,10,1,10,1,10,1,10,1,10], 45), -1, 'Test 109');
test(validSubarraySize([1,10,1,10,1,10,1,10,1,10], 15), -1, 'Test 110');
test(validSubarraySize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 100), -1, 'Test 111');
test(validSubarraySize([100,90,80,70,60,50,40,30,20,10], 550), -1, 'Test 112');
test(validSubarraySize([1000000000,1000000000,1000000000,1000000000,1000000000], 1000000000), 2, 'Test 113');
test(validSubarraySize([5,10,15,20,25,30,35,40,45,50], 275), -1, 'Test 114');
test(validSubarraySize([5,5,5,5,5,5,5,5,5,5], 25), 6, 'Test 115');
test(validSubarraySize([10,9,8,7,6,5,4,3,2,1], 45), -1, 'Test 116');

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
