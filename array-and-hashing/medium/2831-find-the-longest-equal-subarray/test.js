// Test: 2831. Find The Longest Equal Subarray
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { longestEqualSubarray } = require("./solution");

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

console.log("\n2831. Find The Longest Equal Subarray\n");

test(longestEqualSubarray([10,10,1,10,10], 1), 4, 'Test 1');
test(longestEqualSubarray([1,1,1,2,2,2,2,3,3,3], 3), 4, 'Test 2');
test(longestEqualSubarray([1,1,1,2,2,2,3,3,3], 4), 3, 'Test 3');
test(longestEqualSubarray([1,2,2,1,2,2], 2), 4, 'Test 4');
test(longestEqualSubarray([10,1,2,2,1,3,3,3,3,4], 4), 4, 'Test 5');
test(longestEqualSubarray([1,2,2,1,2,1,1,1], 2), 4, 'Test 6');
test(longestEqualSubarray([1,2,2,3,3,3,4,4,4,4], 2), 4, 'Test 7');
test(longestEqualSubarray([5,5,5,1,5,5], 1), 5, 'Test 8');
test(longestEqualSubarray([1,2,3,4,5], 4), 1, 'Test 9');
test(longestEqualSubarray([1,2], 1), 1, 'Test 10');
test(longestEqualSubarray([1,2,3,4,5], 5), 1, 'Test 11');
test(longestEqualSubarray([4,4,4,1,1], 2), 3, 'Test 12');
test(longestEqualSubarray([1,2,3,4,5,6,7,8,9,10], 5), 1, 'Test 13');
test(longestEqualSubarray([1,2,3,4,5], 2), 1, 'Test 14');
test(longestEqualSubarray([1,1,1,1,1,1,1,1,1,1], 5), 10, 'Test 15');
test(longestEqualSubarray([1], 1), 1, 'Test 16');
test(longestEqualSubarray([1,2,2,1,2,1,1,1,1,2,2], 3), 6, 'Test 17');
test(longestEqualSubarray([1], 0), 1, 'Test 18');
test(longestEqualSubarray([10,10,1,10,10,1,10], 3), 5, 'Test 19');
test(longestEqualSubarray([1,3,2,3,1,3], 3), 3, 'Test 20');
test(longestEqualSubarray([1,2,3,1,2,3,1,2,3], 2), 2, 'Test 21');
test(longestEqualSubarray([5,5,5,5,5], 2), 5, 'Test 22');
test(longestEqualSubarray([1,2,2,1,2,1,2], 2), 4, 'Test 23');
test(longestEqualSubarray([1,1,1,2,2,2,2,2,1,1,1], 3), 5, 'Test 24');
test(longestEqualSubarray([3,3,3,3,3,3,3,3,3,3], 0), 10, 'Test 25');
test(longestEqualSubarray([1,1,2,2,1,1], 2), 4, 'Test 26');
test(longestEqualSubarray([10,10,10,1,10,10,10], 3), 6, 'Test 27');
test(longestEqualSubarray([5,5,5,5,5], 0), 5, 'Test 28');
test(longestEqualSubarray([7,7,7,1,7,7,7,7], 4), 7, 'Test 29');
test(longestEqualSubarray([1,1,1,1,1], 0), 5, 'Test 30');
test(longestEqualSubarray([1,2,3,4,5], 0), 1, 'Test 31');
test(longestEqualSubarray([1,1,1,2,2,2,3,3,3], 3), 3, 'Test 32');
test(longestEqualSubarray([10,10,1,10,10,1,1,1], 3), 4, 'Test 33');
test(longestEqualSubarray([1,2,2,3,3,3,2,2,1,1,1,1], 4), 4, 'Test 34');
test(longestEqualSubarray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], 15), 2, 'Test 35');
test(longestEqualSubarray([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,5,6,6], 5), 6, 'Test 36');
test(longestEqualSubarray([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8], 20), 7, 'Test 37');
test(longestEqualSubarray([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5], 7), 5, 'Test 38');
test(longestEqualSubarray([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5], 8), 4, 'Test 39');
test(longestEqualSubarray([1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1], 8), 5, 'Test 40');
test(longestEqualSubarray([1,2,2,2,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7], 25), 10, 'Test 41');
test(longestEqualSubarray([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7], 5), 29, 'Test 42');
test(longestEqualSubarray([1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5], 20), 11, 'Test 43');
test(longestEqualSubarray([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), 30, 'Test 44');
test(longestEqualSubarray([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6], 15), 10, 'Test 45');
test(longestEqualSubarray([10,10,10,20,20,30,30,30,30,10,10,10,10], 6), 7, 'Test 46');
test(longestEqualSubarray([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9], 15), 3, 'Test 47');
test(longestEqualSubarray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 30), 4, 'Test 48');
test(longestEqualSubarray([1,2,3,3,3,4,5,5,5,5], 2), 4, 'Test 49');
test(longestEqualSubarray([9,9,9,9,9,9,1,1,1,1,1,1,9,9,9,9,9,9], 6), 12, 'Test 50');
test(longestEqualSubarray([1,2,3,4,5,4,3,2,1,1,2,3,4,5,5,4,3,2,1], 10), 4, 'Test 51');
test(longestEqualSubarray([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), 45, 'Test 52');
test(longestEqualSubarray([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6], 10), 4, 'Test 53');
test(longestEqualSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,1,1,1,1,1], 15), 6, 'Test 54');
test(longestEqualSubarray([1,1,2,2,3,3,4,4,5,5,1,1,2,2,3,3,4,4,5,5], 10), 4, 'Test 55');
test(longestEqualSubarray([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 4), 5, 'Test 56');
test(longestEqualSubarray([5,5,4,4,5,5,5,3,5,5,5,2,5,5,5,5,5,5], 7), 14, 'Test 57');
test(longestEqualSubarray([1,1,2,2,2,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5], 10), 7, 'Test 58');
test(longestEqualSubarray([7,7,7,7,8,8,7,7,7,7,8,8,8,8,7,7,7,7], 8), 12, 'Test 59');
test(longestEqualSubarray([1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,10,10,10,10], 9), 11, 'Test 60');
test(longestEqualSubarray([1,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1], 10), 10, 'Test 61');
test(longestEqualSubarray([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3], 20), 3, 'Test 62');
test(longestEqualSubarray([10,20,20,10,10,20,30,30,30,20,20,10,10,10,10,20,20,20,30,30,30,30,30,10,10,10,10,10], 10), 9, 'Test 63');
test(longestEqualSubarray([1,1,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5], 15), 11, 'Test 64');
test(longestEqualSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 15), 2, 'Test 65');
test(longestEqualSubarray([1,2,3,4,5,4,3,2,1,1,1,1,1,1], 5), 6, 'Test 66');
test(longestEqualSubarray([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8], 20), 4, 'Test 67');
test(longestEqualSubarray([3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2], 7), 4, 'Test 68');
test(longestEqualSubarray([1,1,2,2,1,1,2,2,1,1,2,2], 6), 6, 'Test 69');
test(longestEqualSubarray([1,2,2,1,2,1,1,1,2,2,2,2,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1], 12), 15, 'Test 70');
test(longestEqualSubarray([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 20), 4, 'Test 71');
test(longestEqualSubarray([5,5,5,5,5,4,4,4,4,3,3,3,2,2,2,1,1,1,5,5,5,5,5,4,4,4,4,3,3,3,2,2,2,1,1,1], 12), 5, 'Test 72');
test(longestEqualSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 20), 44, 'Test 73');
test(longestEqualSubarray([1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5], 15), 10, 'Test 74');
test(longestEqualSubarray([10,1,1,2,2,2,3,3,3,3,4,4,4,4,4,4,4,4,4,4], 10), 10, 'Test 75');
test(longestEqualSubarray([5,5,5,5,1,1,5,5,5,5,1,1,5,5,5,5], 6), 12, 'Test 76');
test(longestEqualSubarray([1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5], 10), 8, 'Test 77');
test(longestEqualSubarray([1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1,1,1,1,1], 5), 10, 'Test 78');
test(longestEqualSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 0), 1, 'Test 79');
test(longestEqualSubarray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], 8), 2, 'Test 80');
test(longestEqualSubarray([1,1,1,2,2,2,2,2,3,3,3,3,3,3,3,3], 8), 8, 'Test 81');
test(longestEqualSubarray([1,2,2,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9], 10), 4, 'Test 82');
test(longestEqualSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 20), 3, 'Test 83');
test(longestEqualSubarray([3,3,3,3,3,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1], 15), 13, 'Test 84');
test(longestEqualSubarray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,1,1,2,2,3,3], 20), 4, 'Test 85');
test(longestEqualSubarray([10,20,20,10,10,20,10,10,10,10], 3), 7, 'Test 86');
test(longestEqualSubarray([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 8), 9, 'Test 87');
test(longestEqualSubarray([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 10), 2, 'Test 88');
test(longestEqualSubarray([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 10), 6, 'Test 89');
test(longestEqualSubarray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5], 15), 2, 'Test 90');
test(longestEqualSubarray([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10], 18), 3, 'Test 91');
test(longestEqualSubarray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,2,2,3,3,4,4,5,5,6,6], 15), 3, 'Test 92');
test(longestEqualSubarray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 5), 2, 'Test 93');
test(longestEqualSubarray([1,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10], 25), 4, 'Test 94');
test(longestEqualSubarray([1,1,2,2,3,3,4,4,5,5,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 15), 4, 'Test 95');
test(longestEqualSubarray([7,7,7,7,8,8,8,9,9,9,9,9,10,10,10,10,10,10], 10), 6, 'Test 96');
test(longestEqualSubarray([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9], 30), 9, 'Test 97');
test(longestEqualSubarray([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10], 15), 3, 'Test 98');
test(longestEqualSubarray([1,2,2,3,3,3,3,2,2,1,1,1,1,1,2,2,2,2,2,2,2,2], 5), 10, 'Test 99');
test(longestEqualSubarray([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5], 15), 4, 'Test 100');
test(longestEqualSubarray([1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,4], 6), 8, 'Test 101');
test(longestEqualSubarray([5,5,4,4,4,5,5,5,5,5], 4), 7, 'Test 102');
test(longestEqualSubarray([1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1], 10), 10, 'Test 103');
test(longestEqualSubarray([1,2,3,4,5,6,7,8,9,10], 3), 1, 'Test 104');
test(longestEqualSubarray([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1], 7), 8, 'Test 105');
test(longestEqualSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 1, 'Test 106');
test(longestEqualSubarray([1,1,2,3,2,3,2,3,2,3,2,3,1,1], 4), 5, 'Test 107');
test(longestEqualSubarray([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 15), 16, 'Test 108');
test(longestEqualSubarray([1,1,1,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10], 10), 3, 'Test 109');
test(longestEqualSubarray([1,2,2,3,3,3,4,4,4,4], 3), 4, 'Test 110');
test(longestEqualSubarray([1,2,2,2,1,2,2,2,2,1,1,2,2,2,2], 5), 11, 'Test 111');
test(longestEqualSubarray([5,5,5,5,5,1,1,1,1,1,5,5,5,5,5], 5), 10, 'Test 112');
test(longestEqualSubarray([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 5), 3, 'Test 113');
test(longestEqualSubarray([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6], 5), 6, 'Test 114');
test(longestEqualSubarray([1,2,2,2,2,3,3,3,4,4,4,4,4], 5), 5, 'Test 115');
test(longestEqualSubarray([1,2,3,2,3,2,3,2,3,2,3], 5), 5, 'Test 116');
test(longestEqualSubarray([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 20), 21, 'Test 117');
test(longestEqualSubarray([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), 15, 'Test 118');
test(longestEqualSubarray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12], 12), 2, 'Test 119');
test(longestEqualSubarray([1,1,2,2,3,3,4,4,5,5,1,1,2,2,3,3,4,4], 8), 4, 'Test 120');

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
