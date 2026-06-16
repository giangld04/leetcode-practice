// Test: 3177. Find The Maximum Length Of A Good Subsequence Ii
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { maximumLength } = require("./solution");

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

console.log("\n3177. Find The Maximum Length Of A Good Subsequence Ii\n");

test(maximumLength([5,5,5,5,5], 5), 5, 'Test 1');
test(maximumLength([1,2,3,4,5,6,7,8,9,10], 50), 10, 'Test 2');
test(maximumLength([1,1,1,1,1], 3), 5, 'Test 3');
test(maximumLength([1,1,2,2,3,3,4,4,5,5], 4), 10, 'Test 4');
test(maximumLength([1,2,3,2,1], 1), 3, 'Test 5');
test(maximumLength([1,2,1,1,3], 2), 4, 'Test 6');
test(maximumLength([1,3,5,3,1,3,5,3,1], 2), 6, 'Test 7');
test(maximumLength([1,2,3,4,5], 5), 5, 'Test 8');
test(maximumLength([1,2,2,3,3,4,4,5,5], 2), 6, 'Test 9');
test(maximumLength([1,2,3,4,5,6,7,8,9,10], 5), 6, 'Test 10');
test(maximumLength([1,1,2,2,3,3,4,4,5,5], 3), 8, 'Test 11');
test(maximumLength([10,20,20,10,10,20,10,20,10], 1), 6, 'Test 12');
test(maximumLength([5,5,5,5,5,5,5,5,5,5], 3), 10, 'Test 13');
test(maximumLength([1,2,3,4,5], 2), 3, 'Test 14');
test(maximumLength([1,3,5,7,9,7,5,3,1], 4), 6, 'Test 15');
test(maximumLength([5,5,5,5,5], 1), 5, 'Test 16');
test(maximumLength([1], 0), 1, 'Test 17');
test(maximumLength([5,5,5,5,5], 3), 5, 'Test 18');
test(maximumLength([5,5,5,5,5,5,5,5,5,5], 0), 10, 'Test 19');
test(maximumLength([10,20,10,30,10,20,30], 1), 4, 'Test 20');
test(maximumLength([1,2,3,4,5,1], 0), 2, 'Test 21');
test(maximumLength([10,9,8,7,6,5,4,3,2,1], 5), 6, 'Test 22');
test(maximumLength([1,2,2,2,1,2,1], 1), 5, 'Test 23');
test(maximumLength([1,2,3,2,1,2,3,2,1], 2), 6, 'Test 24');
test(maximumLength([1,1,2,2,3,3,4,4,5,5], 0), 2, 'Test 25');
test(maximumLength([1,1,1,1,1], 0), 5, 'Test 26');
test(maximumLength([1000000000,1000000000,1000000000,1000000000,1000000000], 0), 5, 'Test 27');
test(maximumLength([10,20,30,20,10,10,20,30], 2), 5, 'Test 28');
test(maximumLength([1,3,1,3,1,3,1], 2), 5, 'Test 29');
test(maximumLength([1,3,2,3,1,2,1], 2), 5, 'Test 30');
test(maximumLength([5, 5, 4, 4, 3, 3, 2, 2, 1, 1], 3), 8, 'Test 31');
test(maximumLength([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14], 15), 28, 'Test 32');
test(maximumLength([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 0), 1, 'Test 33');
test(maximumLength([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 20), 50, 'Test 34');
test(maximumLength([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,5,6,7,8,9,10,11,12,13,14,15], 12), 13, 'Test 35');
test(maximumLength([1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2], 25), 41, 'Test 36');
test(maximumLength([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5], 3), 11, 'Test 37');
test(maximumLength([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2], 6), 13, 'Test 38');
test(maximumLength([9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1], 15), 18, 'Test 39');
test(maximumLength([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 9), 20, 'Test 40');
test(maximumLength([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5], 4), 15, 'Test 41');
test(maximumLength([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 31, 'Test 42');
test(maximumLength([1,2,2,3,3,2,2,1,1,2,2,3,3,2,2,1,1,2,2,3,3], 5), 16, 'Test 43');
test(maximumLength([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 0), 15, 'Test 44');
test(maximumLength([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 10), 16, 'Test 45');
test(maximumLength([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1,2,3,4,5], 5), 6, 'Test 46');
test(maximumLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 8), 10, 'Test 47');
test(maximumLength([9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8], 8), 14, 'Test 48');
test(maximumLength([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 10), 19, 'Test 49');
test(maximumLength([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10], 4), 15, 'Test 50');
test(maximumLength([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20], 15), 32, 'Test 51');
test(maximumLength([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 15), 16, 'Test 52');
test(maximumLength([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 15), 17, 'Test 53');
test(maximumLength([1,2,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1], 20), 28, 'Test 54');
test(maximumLength([5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4], 5), 13, 'Test 55');
test(maximumLength([1, 2, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1], 7), 12, 'Test 56');
test(maximumLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9), 11, 'Test 57');
test(maximumLength([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5), 6, 'Test 58');
test(maximumLength([1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1], 5), 20, 'Test 59');
test(maximumLength([9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9], 15), 23, 'Test 60');
test(maximumLength([4, 3, 2, 1, 2, 3, 4, 3, 2, 1, 4, 3, 2, 1], 4), 8, 'Test 61');
test(maximumLength([1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2], 10), 28, 'Test 62');
test(maximumLength([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 5), 21, 'Test 63');
test(maximumLength([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 5), 16, 'Test 64');
test(maximumLength([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), 21, 'Test 65');
test(maximumLength([1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2], 10), 17, 'Test 66');
test(maximumLength([1, 1, 2, 3, 2, 3, 1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 5, 4, 5, 6], 9), 15, 'Test 67');
test(maximumLength([5, 6, 7, 8, 7, 8, 7, 6, 5], 3), 6, 'Test 68');
test(maximumLength([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9], 7), 16, 'Test 69');
test(maximumLength([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 7, 'Test 70');
test(maximumLength([5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5], 5), 11, 'Test 71');
test(maximumLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4), 5, 'Test 72');
test(maximumLength([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 10), 20, 'Test 73');
test(maximumLength([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 1), 9, 'Test 74');
test(maximumLength([1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,1,10,1,11,1,12,1,13,1,14,1,15,1,16,1,17,1,18,1,19,1,20], 10), 24, 'Test 75');
test(maximumLength([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 5), 12, 'Test 76');
test(maximumLength([10,20,30,10,20,30,10,20,30,10,20,30,10,20,30,10,20,30,10,20,30], 7), 12, 'Test 77');
test(maximumLength([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 8), 14, 'Test 78');
test(maximumLength([1,2,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1], 10), 17, 'Test 79');
test(maximumLength([1, 2, 1, 3, 2, 1, 4, 3, 2, 1, 5, 4, 3, 2, 1], 5), 9, 'Test 80');
test(maximumLength([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5], 4), 9, 'Test 81');
test(maximumLength([10, 20, 30, 20, 10, 20, 30, 20, 10, 20, 30, 20, 10], 6), 10, 'Test 82');
test(maximumLength([10,20,10,30,20,40,30,50,40,60,50,70,60,80,70,90,80,100,90,110], 10), 14, 'Test 83');
test(maximumLength([5, 5, 4, 4, 4, 3, 3, 3, 3, 2, 2, 1], 4), 12, 'Test 84');
test(maximumLength([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4], 9), 14, 'Test 85');
test(maximumLength([1, 1, 1, 2, 2, 3, 3, 3, 2, 2, 1, 1, 1], 5), 13, 'Test 86');
test(maximumLength([10,20,30,40,50,60,70,80,90,100,10,20,30,40,50], 0), 2, 'Test 87');
test(maximumLength([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7], 7), 21, 'Test 88');
test(maximumLength([1,2,3,4,5,6,7,8,9,10], 3), 4, 'Test 89');
test(maximumLength([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 15), 26, 'Test 90');
test(maximumLength([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 11, 'Test 91');
test(maximumLength([1,2,2,3,4,4,4,5,6,6,6,6,7,8,8,9], 3), 11, 'Test 92');
test(maximumLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), 11, 'Test 93');
test(maximumLength([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1,2,3,4,5,6,7,8,9,10], 10), 11, 'Test 94');
test(maximumLength([1,2,3,2,1,2,3,2,1], 3), 6, 'Test 95');
test(maximumLength([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5], 3), 7, 'Test 96');
test(maximumLength([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2], 5), 13, 'Test 97');
test(maximumLength([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 0), 142, 'Test 98');
test(maximumLength([5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1], 2), 6, 'Test 99');
test(maximumLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0), 1, 'Test 100');
test(maximumLength([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1], 10), 14, 'Test 101');
test(maximumLength([2, 2, 3, 3, 2, 2, 3, 3, 2, 2], 1), 6, 'Test 102');
test(maximumLength([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6], 5), 8, 'Test 103');
test(maximumLength([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 10), 11, 'Test 104');
test(maximumLength([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 0), 10, 'Test 105');
test(maximumLength([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 0), 2, 'Test 106');
test(maximumLength([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6], 10), 21, 'Test 107');

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
