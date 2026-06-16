// Test: 2962. Count Subarrays Where Max Element Appears At Least K Times
// 90 test cases from LeetCodeDataset
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

console.log("\n2962. Count Subarrays Where Max Element Appears At Least K Times\n");

test(countSubarrays([10,10,1,10,10], 4), 1, 'Test 1');
test(countSubarrays([7,7,7,7,7,7,7,7,7,7], 5), 21, 'Test 2');
test(countSubarrays([10,9,8,7,6,5,4,3,2,1], 5), 0, 'Test 3');
test(countSubarrays([6,6,6,6,6,6,6,6,6,6,6,6], 4), 45, 'Test 4');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10], 1), 10, 'Test 5');
test(countSubarrays([1,3,2,3,3], 2), 6, 'Test 6');
test(countSubarrays([1,2,3,4,5], 1), 5, 'Test 7');
test(countSubarrays([1], 1), 1, 'Test 8');
test(countSubarrays([10,9,8,7,6,5,4,3,2,1], 2), 0, 'Test 9');
test(countSubarrays([7,7,7,7,7,7,7,7,7,7], 10), 1, 'Test 10');
test(countSubarrays([5,5,5,5,5], 3), 6, 'Test 11');
test(countSubarrays([1,4,2,1], 3), 0, 'Test 12');
test(countSubarrays([3,1,4,1,5,9,2,6,5,3,5], 3), 0, 'Test 13');
test(countSubarrays([1,1,1,1,1,1,1,1,1,1], 10), 1, 'Test 14');
test(countSubarrays([2,2,2,2,2,2,2,2,2,2], 1), 55, 'Test 15');
test(countSubarrays([2,3,1,2,3,1,2,3,1,2,3], 2), 29, 'Test 16');
test(countSubarrays([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 5), 136, 'Test 17');
test(countSubarrays([3,1,4,3,3,2,3,3,3], 4), 0, 'Test 18');
test(countSubarrays([1000000, 999999, 1000000, 999999, 1000000, 999999, 1000000, 999999, 1000000, 999999], 5), 2, 'Test 19');
test(countSubarrays([5,5,1,5,5,1,5,5,1,5,5,1,5,5], 3), 63, 'Test 20');
test(countSubarrays([1000000, 999999, 999999, 1000000, 999999, 1000000, 1000000, 999999, 1000000, 1000000], 4), 12, 'Test 21');
test(countSubarrays([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), 903, 'Test 22');
test(countSubarrays([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9], 10), 66, 'Test 23');
test(countSubarrays([9, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1], 2), 9, 'Test 24');
test(countSubarrays([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 15), 171, 'Test 25');
test(countSubarrays([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2, 3, 8, 4, 6], 2), 96, 'Test 26');
test(countSubarrays([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 20), 66, 'Test 27');
test(countSubarrays([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 8), 6, 'Test 28');
test(countSubarrays([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 10), 66, 'Test 29');
test(countSubarrays([9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10,1], 3), 0, 'Test 30');
test(countSubarrays([1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000], 5), 6, 'Test 31');
test(countSubarrays([3,1,4,1,5,9,2,6,5,3,5,9,2,6,5,3,5,9,2,6], 2), 72, 'Test 32');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 1), 20, 'Test 33');
test(countSubarrays([10, 20, 10, 30, 10, 40, 10, 50, 10, 60, 10, 70, 10, 80, 10, 90, 10, 100], 5), 0, 'Test 34');
test(countSubarrays([1000000,999999,1000000,999999,1000000,999999,1000000,999999,1000000,999999], 3), 18, 'Test 35');
test(countSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 3), 0, 'Test 36');
test(countSubarrays([1, 2, 3, 4, 5, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1], 3), 0, 'Test 37');
test(countSubarrays([100, 200, 300, 100, 400, 100, 500, 100, 600, 100, 700, 100, 800, 100, 900, 100, 100, 100, 100], 4), 0, 'Test 38');
test(countSubarrays([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 100, 100], 2), 0, 'Test 39');
test(countSubarrays([1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1], 3), 36, 'Test 40');
test(countSubarrays([6,5,4,3,2,1,6,5,4,3,2,1,6,5,4,3,2,1,6,5,4,3,2,1,6,5,4,3,2,1,6,5,4,3,2,1], 5), 48, 'Test 41');
test(countSubarrays([3,3,3,2,2,3,3,2,3,2,3,3,2,3,2,3,3,2,3,2,3,3,2,3,2,3,3,2,3,2,3,3,2,3,2,3,3,2,3,2,3,3], 5), 630, 'Test 42');
test(countSubarrays([9, 9, 8, 9, 8, 9, 8, 9, 8, 9, 9, 9, 9, 9], 5), 32, 'Test 43');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 20), 0, 'Test 44');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 2), 10, 'Test 45');
test(countSubarrays([7, 3, 7, 7, 2, 7, 7, 7, 7, 7], 6), 8, 'Test 46');
test(countSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 0, 'Test 47');
test(countSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2), 10, 'Test 48');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 5), 0, 'Test 49');
test(countSubarrays([7, 5, 7, 8, 7, 9, 7, 7, 6, 7], 3), 0, 'Test 50');
test(countSubarrays([7,7,7,7,7,7,7,7,7,7,7,7], 5), 36, 'Test 51');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10,10,10,9,8,7,6,5,4,3,2,1], 3), 100, 'Test 52');
test(countSubarrays([7,7,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1], 4), 102, 'Test 53');
test(countSubarrays([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), 66, 'Test 54');
test(countSubarrays([2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3], 5), 200, 'Test 55');
test(countSubarrays([9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1,9,8,7,6,5], 3), 5, 'Test 56');
test(countSubarrays([5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1], 5), 72, 'Test 57');
test(countSubarrays([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5], 2), 27, 'Test 58');
test(countSubarrays([1,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3], 10), 3826, 'Test 59');
test(countSubarrays([1000000,999999,1000000,999999,1000000,999999,1000000], 4), 1, 'Test 60');
test(countSubarrays([7,7,7,1,7,1,7,7,7,7], 3), 29, 'Test 61');
test(countSubarrays([100,200,300,100,200,300,100,200,300,100,200,300], 2), 36, 'Test 62');
test(countSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 120, 'Test 63');
test(countSubarrays([1000000, 1000000, 1000000, 999999, 999999, 1000000, 999999, 1000000, 1000000, 999999], 4), 10, 'Test 64');
test(countSubarrays([5,6,7,6,5,6,5,6,5,6,5,6,5,6], 4), 0, 'Test 65');
test(countSubarrays([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), 21, 'Test 66');
test(countSubarrays([1,3,3,2,3,3,3,3,3,1,3,3,2,3,3,3,3,3,1,3,3,2,3,3,3,3,3,1,3,3,2,3,3,3,3,3,1,3,3,2,3,3,3,3,3,1,3,3,2,3,3,3,3,3], 6), 1150, 'Test 67');
test(countSubarrays([1, 1, 1, 2, 2, 2, 3, 3, 3, 1, 1, 1, 2, 2, 2, 3, 3, 3, 1, 1, 1], 2), 156, 'Test 68');
test(countSubarrays([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 3), 5, 'Test 69');
test(countSubarrays([7,1,5,3,6,4,7,7,7,2,7], 3), 23, 'Test 70');
test(countSubarrays([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 2), 0, 'Test 71');
test(countSubarrays([1,2,3,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5], 4), 105, 'Test 72');
test(countSubarrays([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1], 2), 10, 'Test 73');
test(countSubarrays([1,1,2,2,2,1,1,1,2,2,2,1,1,1,2,2,2,1,1,1], 3), 138, 'Test 74');
test(countSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 231, 'Test 75');
test(countSubarrays([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 15), 496, 'Test 76');
test(countSubarrays([3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1], 7), 66, 'Test 77');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1], 2), 100, 'Test 78');
test(countSubarrays([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9], 5), 0, 'Test 79');
test(countSubarrays([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 20), 3, 'Test 80');
test(countSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 3), 19, 'Test 81');
test(countSubarrays([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6], 4), 0, 'Test 82');
test(countSubarrays([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 20), 10, 'Test 83');
test(countSubarrays([5,5,5,5,5,5,5,5,5,5,5,5], 6), 28, 'Test 84');
test(countSubarrays([3,1,4,1,5,9,2,6,5,3,5,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5,0,2,8,8,4,1,9,7,1,6,9,3,9,9,3,7,5,1,0,5,8,2,0,9,7,4,9,4,4,5,9,2,3,0,7,8,1,6,4,0,6,2,8,6,2,0,8,9,9,8,6,2,0,3,0,5,5,0,1,2,3,4,5,6,7,8,9,10], 5), 0, 'Test 85');
test(countSubarrays([1, 3, 2, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 15), 111, 'Test 86');
test(countSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 25), 231, 'Test 87');
test(countSubarrays([3,3,3,1,1,1,3,3,1,1,1,3,3,3,1,1,1,3,3,3,1,1,1], 4), 132, 'Test 88');
test(countSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 10, 'Test 89');
test(countSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 15), 171, 'Test 90');

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
