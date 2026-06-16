// Test: 2461. Maximum Sum Of Distinct Subarrays With Length K
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { maximumSubarraySum } = require("./solution");

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

console.log("\n2461. Maximum Sum Of Distinct Subarrays With Length K\n");

test(maximumSubarraySum([1,2,1,3,4,5,6,7,8,9,10], 5), 40, 'Test 1');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10], 10), 55, 'Test 2');
test(maximumSubarraySum([5,5,5,5,5,5,5,5,5,5], 1), 5, 'Test 3');
test(maximumSubarraySum([1,2,3,1,2,3,1,2,3], 3), 6, 'Test 4');
test(maximumSubarraySum([9,8,7,6,5,4,3,2,1,0], 3), 24, 'Test 5');
test(maximumSubarraySum([1,2,2,1,3,4,5,6], 4), 18, 'Test 6');
test(maximumSubarraySum([1,2,2,3,4,5], 4), 14, 'Test 7');
test(maximumSubarraySum([1,2,2,1,3,4,5,6,7,8], 4), 26, 'Test 8');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10], 5), 40, 'Test 9');
test(maximumSubarraySum([1,1,2,2,3,3,4,4,5,5], 3), 0, 'Test 10');
test(maximumSubarraySum([10,20,30,40,50], 1), 50, 'Test 11');
test(maximumSubarraySum([1,2,3,4,5], 2), 9, 'Test 12');
test(maximumSubarraySum([1,1,1,1,1,1,1,1,1,1], 5), 0, 'Test 13');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,1], 6), 45, 'Test 14');
test(maximumSubarraySum([10,20,30,40,50], 5), 150, 'Test 15');
test(maximumSubarraySum([1,2,2,3,4,5,6,7,8,9], 4), 30, 'Test 16');
test(maximumSubarraySum([10,9,8,7,6,5,4,3,2,1], 5), 40, 'Test 17');
test(maximumSubarraySum([1,5,4,2,9,9,9], 3), 15, 'Test 18');
test(maximumSubarraySum([4,4,4], 3), 0, 'Test 19');
test(maximumSubarraySum([5,5,5,5,5,5,5,5,5,5], 5), 0, 'Test 20');
test(maximumSubarraySum([100000,100000,100000,100000,100000], 3), 0, 'Test 21');
test(maximumSubarraySum([10,20,30,40,50], 4), 140, 'Test 22');
test(maximumSubarraySum([5,5,5,5,5,5,5,5,5,5], 10), 0, 'Test 23');
test(maximumSubarraySum([1,1,1,1,1,1,1,1,1,1], 1), 1, 'Test 24');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10], 4), 34, 'Test 25');
test(maximumSubarraySum([10,20,30,40,50,60,70,80,90,100,110], 5), 450, 'Test 26');
test(maximumSubarraySum([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11], 5), 0, 'Test 27');
test(maximumSubarraySum([5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2], 5), 0, 'Test 28');
test(maximumSubarraySum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5), 0, 'Test 29');
test(maximumSubarraySum([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 5), 0, 'Test 30');
test(maximumSubarraySum([9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,8,7], 8), 44, 'Test 31');
test(maximumSubarraySum([3,1,4,1,5,9,2,6,5,3,5,9,7,9,3,2,3,8,4,6], 6), 27, 'Test 32');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 10), 55, 'Test 33');
test(maximumSubarraySum([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 7), 0, 'Test 34');
test(maximumSubarraySum([1,2,3,2,4,5,6,5,7,8,9], 4), 29, 'Test 35');
test(maximumSubarraySum([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 10), 300, 'Test 36');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 30), 465, 'Test 37');
test(maximumSubarraySum([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 10), 155, 'Test 38');
test(maximumSubarraySum([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 3), 0, 'Test 39');
test(maximumSubarraySum([100000,99999,99998,99997,99996,99995,99994,99993,99992,99991], 5), 499990, 'Test 40');
test(maximumSubarraySum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 0, 'Test 41');
test(maximumSubarraySum([100,100,100,100,100,100,100,100,100,100,100,100,100,100,100], 15), 0, 'Test 42');
test(maximumSubarraySum([5,5,5,5,5,5,5,5,5,5,5,5,5,5], 5), 0, 'Test 43');
test(maximumSubarraySum([3,1,2,3,4,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 155, 'Test 44');
test(maximumSubarraySum([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 15), 1200, 'Test 45');
test(maximumSubarraySum([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,1,2,3,4,5,6,7,8,9,10], 5), 40, 'Test 46');
test(maximumSubarraySum([3,1,4,1,5,9,2,6,5,3,5], 4), 22, 'Test 47');
test(maximumSubarraySum([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71], 8), 442, 'Test 48');
test(maximumSubarraySum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 50), 0, 'Test 49');
test(maximumSubarraySum([7,7,7,7,7,7,7,7,7,7,7,7], 3), 0, 'Test 50');
test(maximumSubarraySum([2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 7), 0, 'Test 51');
test(maximumSubarraySum([100,200,300,400,500,600,700,800,900,1000,1,2,3,4,5], 10), 5500, 'Test 52');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 15), 345, 'Test 53');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 1), 20, 'Test 54');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9], 9), 45, 'Test 55');
test(maximumSubarraySum([100000,99999,99998,99997,99996,99995,99994,99993,99992,99991,99990], 5), 499990, 'Test 56');
test(maximumSubarraySum([5,5,5,5,5,5,5,5,5,5], 2), 0, 'Test 57');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5), 65, 'Test 58');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 20), 210, 'Test 59');
test(maximumSubarraySum([9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1,9,8], 5), 35, 'Test 60');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10], 10), 155, 'Test 61');
test(maximumSubarraySum([1,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 10), 55, 'Test 62');
test(maximumSubarraySum([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11], 5), 0, 'Test 63');
test(maximumSubarraySum([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 3), 6, 'Test 64');
test(maximumSubarraySum([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], 5), 0, 'Test 65');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35], 20), 510, 'Test 66');
test(maximumSubarraySum([1,2,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 155, 'Test 67');
test(maximumSubarraySum([2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11], 6), 0, 'Test 68');
test(maximumSubarraySum([1,1,1,1,1,2,3,4,5,6,7,8,9,10,11], 5), 45, 'Test 69');
test(maximumSubarraySum([9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1], 5), 35, 'Test 70');
test(maximumSubarraySum([1,2,3,2,1,4,5,6,5,4,7,8,9,8,7,10,11,12,11,10], 7), 0, 'Test 71');
test(maximumSubarraySum([1,2,2,3,4,5,6,7,8,9,10], 4), 34, 'Test 72');
test(maximumSubarraySum([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5], 5), 15, 'Test 73');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 10), 55, 'Test 74');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9], 11), 0, 'Test 75');
test(maximumSubarraySum([9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9], 5), 35, 'Test 76');
test(maximumSubarraySum([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500], 5), 6500, 'Test 77');
test(maximumSubarraySum([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 5), 0, 'Test 78');
test(maximumSubarraySum([3,1,2,3,4,5,6,7,8,9,10,11,12,13,14], 8), 84, 'Test 79');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 10), 255, 'Test 80');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 10), 105, 'Test 81');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5), 90, 'Test 82');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7), 84, 'Test 83');
test(maximumSubarraySum([5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1], 4), 0, 'Test 84');
test(maximumSubarraySum([100,90,80,70,60,50,40,30,20,10,1,2,3,4,5,6,7,8,9,10], 10), 550, 'Test 85');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 15), 270, 'Test 86');
test(maximumSubarraySum([5,1,5,2,5,3,5,4,5,5,5,5,5,5,5], 4), 0, 'Test 87');
test(maximumSubarraySum([9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1], 9), 45, 'Test 88');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 155, 'Test 89');
test(maximumSubarraySum([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10], 3), 0, 'Test 90');
test(maximumSubarraySum([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0], 5), 35, 'Test 91');
test(maximumSubarraySum([100,200,300,400,500,600,700,800,900,1000], 5), 4000, 'Test 92');
test(maximumSubarraySum([5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9], 10), 0, 'Test 93');
test(maximumSubarraySum([1,2,2,3,4,5,6,7,8,9,10], 5), 40, 'Test 94');
test(maximumSubarraySum([5,5,5,5,5,5,5,5,5,5,5,5], 5), 0, 'Test 95');
test(maximumSubarraySum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 3), 0, 'Test 96');
test(maximumSubarraySum([1,2,2,3,4,4,5,6,7,8,9,9,10], 5), 35, 'Test 97');
test(maximumSubarraySum([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1], 10), 55, 'Test 98');
test(maximumSubarraySum([3,3,3,1,2,3,4,5,6,7,8,9,10,11,12], 6), 57, 'Test 99');
test(maximumSubarraySum([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5], 7), 42, 'Test 100');
test(maximumSubarraySum([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10], 10), 55, 'Test 101');
test(maximumSubarraySum([1,2,2,3,4,5,6,7,8,9,10,10,11,12,13,14,15,15], 4), 54, 'Test 102');

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
