// Test: 2444. Count Subarrays With Fixed Bounds
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { countSubarrays } = require("./solution");

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

console.log("\n2444. Count Subarrays With Fixed Bounds\n");

test(countSubarrays([10,9,8,7,6,5,4,3,2,1], 3, 7), 1, 'Test 1');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10], 3, 7), 1, 'Test 2');
test(countSubarrays([1,2,2,3,4,4,5], 2, 4), 4, 'Test 3');
test(countSubarrays([10,1,2,3,4,5,6,7,8,9], 3, 7), 1, 'Test 4');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10], 1, 10), 1, 'Test 5');
test(countSubarrays([2,4,3,2,4,6], 2, 4), 8, 'Test 6');
test(countSubarrays([10,9,8,7,6], 6, 10), 1, 'Test 7');
test(countSubarrays([9,8,7,6,5,4,3,2,1,0], 2, 8), 1, 'Test 8');
test(countSubarrays([1,2,3,2,1], 1, 3), 5, 'Test 9');
test(countSubarrays([10,20,30,40,50], 10, 50), 1, 'Test 10');
test(countSubarrays([1,2,2,3,3,4,4,5,5,6,6], 2, 5), 4, 'Test 11');
test(countSubarrays([1,2,3,4,5], 2, 4), 1, 'Test 12');
test(countSubarrays([1,3,5,2,7,5], 1, 5), 2, 'Test 13');
test(countSubarrays([6,6,6,6,6,6,6,6,6,6], 6, 6), 55, 'Test 14');
test(countSubarrays([3,1,4,1,5,9,2,6,5,3,5], 1, 5), 4, 'Test 15');
test(countSubarrays([5,5,5,5,5], 5, 5), 15, 'Test 16');
test(countSubarrays([5,4,3,2,1], 2, 4), 1, 'Test 17');
test(countSubarrays([5,5,5,5,5,5,5,5,5,5], 5, 5), 55, 'Test 18');
test(countSubarrays([1,1,1,1], 1, 1), 10, 'Test 19');
test(countSubarrays([2,3,5,1,5,7,5], 1, 5), 7, 'Test 20');
test(countSubarrays([10,9,8,7,6,5,4,3,2,1], 2, 9), 1, 'Test 21');
test(countSubarrays([10,9,8,7,6,5,4,3,2,1], 2, 8), 1, 'Test 22');
test(countSubarrays([2,1,5,1,3,5,4,2], 1, 5), 20, 'Test 23');
test(countSubarrays([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5, 20), 1, 'Test 24');
test(countSubarrays([1,1,2,2,3,3,4,4,5,5,1,1,2,2,3,3,4,4,5,5], 1, 5), 108, 'Test 25');
test(countSubarrays([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 2, 2), 210, 'Test 26');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 2, 9), 3, 'Test 27');
test(countSubarrays([6, 2, 5, 3, 4, 2, 3, 2, 2, 3, 5, 4, 3, 2, 1], 2, 5), 47, 'Test 28');
test(countSubarrays([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 2, 2), 120, 'Test 29');
test(countSubarrays([1,2,3,1,2,3,1,2,3,1], 1, 3), 39, 'Test 30');
test(countSubarrays([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 7, 7), 120, 'Test 31');
test(countSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10], 1, 10), 38, 'Test 32');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 3, 12), 1, 'Test 33');
test(countSubarrays([1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8], 3, 5), 3, 'Test 34');
test(countSubarrays([10, 7, 5, 3, 2, 2, 5, 7, 10], 2, 7), 8, 'Test 35');
test(countSubarrays([3, 1, 5, 4, 2, 5, 1, 3, 4], 1, 5), 26, 'Test 36');
test(countSubarrays([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 3, 3), 210, 'Test 37');
test(countSubarrays([7,9,5,6,3,1,8,4,2,5], 3, 7), 0, 'Test 38');
test(countSubarrays([7,8,9,10,7,8,9,10,7,8,9,10,7,8,9,10,7,8,9,10,7,8,9,10], 7, 10), 246, 'Test 39');
test(countSubarrays([1,2,1,3,2,1,4,3,2,1,5,4,3,2,1,6,5,4,3,2,1,7,6,5,4,3,2,1,8,7,6,5,4,3,2,1], 1, 8), 225, 'Test 40');
test(countSubarrays([5, 3, 3, 3, 1, 4, 5, 5, 2, 5], 1, 5), 22, 'Test 41');
test(countSubarrays([5,3,4,5,3,5,3,4,5,3], 3, 5), 41, 'Test 42');
test(countSubarrays([1,5,3,5,2,3,5,1,2,5], 1, 5), 28, 'Test 43');
test(countSubarrays([6,4,5,1,2,3,1,5,4,6,1,2,3,1,5,4,6,1,2,3,1,5,4,6], 1, 5), 36, 'Test 44');
test(countSubarrays([1, 3, 2, 5, 4, 6, 5, 3, 2, 1, 4, 5, 6, 7, 8, 9], 2, 8), 0, 'Test 45');
test(countSubarrays([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 5, 10), 2, 'Test 46');
test(countSubarrays([1,1,2,2,3,3,2,2,1,1], 1, 3), 20, 'Test 47');
test(countSubarrays([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10, 15), 1, 'Test 48');
test(countSubarrays([7,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 1, 7), 9, 'Test 49');
test(countSubarrays([10,20,10,20,30,10,20,10], 10, 20), 9, 'Test 50');
test(countSubarrays([1,5,4,5,1,1,5,2,1,3,4,5], 1, 5), 53, 'Test 51');
test(countSubarrays([7,3,3,5,7,3,5,7,3,5], 3, 7), 38, 'Test 52');
test(countSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1, 1), 210, 'Test 53');
test(countSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 4, 12), 1, 'Test 54');
test(countSubarrays([1,2,3,2,1,4,3,2,1,5,4,3,2,1], 2, 4), 2, 'Test 55');
test(countSubarrays([5, 4, 5, 3, 5, 4, 5, 2, 5, 4, 5, 3, 5, 4, 5, 1, 5, 4, 5, 3], 1, 5), 79, 'Test 56');
test(countSubarrays([1,1,1,2,1,1,1,3,1,1,1,2,1,1,1,1,1,1,1,1], 1, 3), 103, 'Test 57');
test(countSubarrays([5,3,1,4,5,2,3,4,5,2,1,4,5,3,2,1,5], 1, 5), 100, 'Test 58');
test(countSubarrays([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7], 2, 6), 9, 'Test 59');
test(countSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5], 2, 5), 2, 'Test 60');
test(countSubarrays([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1], 1, 10), 303, 'Test 61');
test(countSubarrays([5,6,7,8,9,10,5,6,7,8], 5, 8), 2, 'Test 62');
test(countSubarrays([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 1, 10), 102, 'Test 63');
test(countSubarrays([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8], 8, 8), 210, 'Test 64');
test(countSubarrays([7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7], 3, 6), 2, 'Test 65');
test(countSubarrays([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,1], 1, 10), 21, 'Test 66');
test(countSubarrays([1, 5, 3, 5, 2, 3, 1, 5, 2], 1, 5), 23, 'Test 67');
test(countSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 2, 4), 4, 'Test 68');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 3, 7), 2, 'Test 69');
test(countSubarrays([5,5,3,5,2,3,3,5,3,3,5,3,2,5,5,3,3,5,5,5], 2, 5), 139, 'Test 70');
test(countSubarrays([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 1, 5), 154, 'Test 71');
test(countSubarrays([5,4,3,2,1,1,2,3,4,5,5,4,3,2,1,1,2,3,4,5], 1, 5), 106, 'Test 72');
test(countSubarrays([1, 3, 5, 3, 1, 5, 3, 1, 5, 3, 1, 5, 3, 1, 5, 3, 1, 5, 3, 1], 1, 5), 175, 'Test 73');
test(countSubarrays([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32], 6, 24), 1, 'Test 74');
test(countSubarrays([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160], 10, 150), 1, 'Test 75');
test(countSubarrays([7,8,9,10,7,8,9,10,7,8], 7, 10), 34, 'Test 76');
test(countSubarrays([7,3,5,1,5,2,5,5,2,5,1,5,3,7], 1, 7), 21, 'Test 77');
test(countSubarrays([2,1,3,3,2,3,1,2,3,2,1,2,3], 1, 3), 63, 'Test 78');
test(countSubarrays([1,1,2,2,3,3,4,4,5,5,1,1,2,2,3,3,4,4,5,5,1,1,2,2,3,3,4,4,5,5], 1, 5), 312, 'Test 79');
test(countSubarrays([1,3,1,3,5,1,3,5,2,5,3,2,3,1,2,3,5,1,3,5,2,5], 1, 5), 181, 'Test 80');
test(countSubarrays([100,200,100,300,200,100,300,200,100], 100, 300), 29, 'Test 81');
test(countSubarrays([9, 7, 5, 3, 1, 2, 4, 6, 8, 10, 9, 7, 5, 3, 1, 2, 4, 6, 8], 3, 9), 2, 'Test 82');
test(countSubarrays([1, 2, 3, 4, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 2, 3, 4, 5], 2, 5), 9, 'Test 83');
test(countSubarrays([10,9,8,7,6,5,4,3,2,1], 3, 8), 1, 'Test 84');
test(countSubarrays([5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6], 5, 6), 190, 'Test 85');
test(countSubarrays([2, 4, 2, 1, 5, 4, 2, 3, 5, 1], 1, 5), 29, 'Test 86');
test(countSubarrays([8,7,6,7,8,9,10,9,8,7,6,7,8,9], 6, 9), 10, 'Test 87');
test(countSubarrays([3,6,3,7,3,5,3,4,3,3], 3, 7), 27, 'Test 88');
test(countSubarrays([5, 1, 3, 5, 7, 5, 3, 1, 5], 1, 5), 8, 'Test 89');
test(countSubarrays([1,2,1,2,1,2,1,2,1,2], 1, 2), 45, 'Test 90');
test(countSubarrays([5, 1, 3, 5, 1, 3, 5, 1, 3, 5, 1, 3, 5, 1, 3, 5], 1, 5), 110, 'Test 91');
test(countSubarrays([1,5,3,5,3,5,3,5,3,1], 1, 5), 16, 'Test 92');
test(countSubarrays([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 3, 7), 1, 'Test 93');
test(countSubarrays([6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 6, 6), 55, 'Test 94');
test(countSubarrays([2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4], 2, 4), 120, 'Test 95');
test(countSubarrays([1000000,999999,1000000,999999,1000000,999999,1000000], 999999, 1000000), 21, 'Test 96');
test(countSubarrays([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 5, 10), 4, 'Test 97');
test(countSubarrays([2,1,5,3,5,1,5,2,5,1,5,3,2,1], 1, 5), 79, 'Test 98');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 3, 8), 2, 'Test 99');
test(countSubarrays([2,1,3,4,5,1,5,2], 1, 5), 19, 'Test 100');
test(countSubarrays([3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 5, 5, 5, 5], 1, 5), 48, 'Test 101');
test(countSubarrays([1,3,2,5,4,6,5,4,3,2,1,3,5,2,4,6,5,4,3,2,1], 2, 5), 10, 'Test 102');
test(countSubarrays([5,3,1,3,1,5,3,1,3,1,5,3,1,3,1], 1, 5), 84, 'Test 103');
test(countSubarrays([5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5], 5, 10), 3, 'Test 104');
test(countSubarrays([1,2,2,3,4,3,5,2,3,4,5,3,4,5,3,4,2,3,4,5,3,4,2,5,3,4,5], 2, 5), 256, 'Test 105');
test(countSubarrays([6,4,5,3,2,1,2,3,4,5,6,5,4,3,2,1], 2, 5), 4, 'Test 106');
test(countSubarrays([5,1,2,3,4,5,6,7,8,9], 5, 9), 1, 'Test 107');
test(countSubarrays([3,3,3,3,3,2,2,2,2,2,1,1,1,1,1,4,4,4,4,4], 1, 4), 75, 'Test 108');
test(countSubarrays([2,1,5,3,4,2,1,5,3,4,2,1,5,3,4], 1, 5), 83, 'Test 109');
test(countSubarrays([5,1,5,2,5,3,5,4,5,1,5,2,5,3,5,4,5,1,5,2], 1, 5), 147, 'Test 110');
test(countSubarrays([1,5,3,4,2,1,5,4,3,2], 2, 5), 2, 'Test 111');
test(countSubarrays([1,2,1,3,2,1,4,3,2,1,5,4,3,2,1], 1, 5), 51, 'Test 112');
test(countSubarrays([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 3, 7), 4, 'Test 113');
test(countSubarrays([1, 1000000, 1, 1000000, 1, 1000000, 1, 1000000, 1, 1000000, 1, 1000000], 1, 1000000), 66, 'Test 114');
test(countSubarrays([1,2,3,4,3,2,1,2,3,4,3,2,1], 1, 4), 46, 'Test 115');
test(countSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1, 1, 2, 2, 3, 3, 4, 4], 2, 4), 8, 'Test 116');

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
