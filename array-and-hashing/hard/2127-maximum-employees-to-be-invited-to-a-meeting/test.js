// Test: 2127. Maximum Employees To Be Invited To A Meeting
// 130 test cases from LeetCodeDataset
// Run: node test.js

const { maximumInvitations } = require("./solution");

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

console.log("\n2127. Maximum Employees To Be Invited To A Meeting\n");

test(maximumInvitations([10,9,8,7,6,5,4,3,2,1,0]), 11, 'Test 1');
test(maximumInvitations([1,0,0,2]), 4, 'Test 2');
test(maximumInvitations([5,4,3,2,1,0]), 6, 'Test 3');
test(maximumInvitations([0,1,2,3,4]), 5, 'Test 4');
test(maximumInvitations([2,0,1,4,5,3]), 3, 'Test 5');
test(maximumInvitations([5,1,4,4,0,4]), 3, 'Test 6');
test(maximumInvitations([5,4,0,2,0,1]), 4, 'Test 7');
test(maximumInvitations([1,1,1,1,1,1,1,1,1,1]), 2, 'Test 8');
test(maximumInvitations([9,8,7,6,5,4,3,2,1,0]), 10, 'Test 9');
test(maximumInvitations([5,1,4,4,5,6,7]), Error: list index out of range, 'Test 10');
test(maximumInvitations([1,2,0]), 3, 'Test 11');
test(maximumInvitations([0,1,2,3,4,5,6,7,8,9]), 10, 'Test 12');
test(maximumInvitations([3,0,1,4,1]), 4, 'Test 13');
test(maximumInvitations([1,0,3,2]), 4, 'Test 14');
test(maximumInvitations([3,3,0,2]), 3, 'Test 15');
test(maximumInvitations([2,2,1,2]), 3, 'Test 16');
test(maximumInvitations([1,0,0,2,1,4,2]), 6, 'Test 17');
test(maximumInvitations([1,0,3,4,2]), 3, 'Test 18');
test(maximumInvitations([1,0,3,2,5,4]), 6, 'Test 19');
test(maximumInvitations([3, 3, 3, 2, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8]), 7, 'Test 20');
test(maximumInvitations([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0, 1]), 8, 'Test 21');
test(maximumInvitations([2, 0, 2, 2, 0, 3, 4, 4, 4, 4]), 4, 'Test 22');
test(maximumInvitations([1,2,0,4,5,8,3,6,7,9]), 6, 'Test 23');
test(maximumInvitations([2, 0, 1, 4, 3, 6, 5, 8, 7, 9]), 7, 'Test 24');
test(maximumInvitations([2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12]), 9, 'Test 25');
test(maximumInvitations([2,0,1,4,5,6,3,7,8,9]), 4, 'Test 26');
test(maximumInvitations([5, 4, 3, 2, 1, 0, 9, 8, 7, 6]), 10, 'Test 27');
test(maximumInvitations([5, 2, 4, 3, 4, 2]), 5, 'Test 28');
test(maximumInvitations([3, 0, 1, 4, 5, 3, 6, 7, 8, 9, 10, 11, 10]), 7, 'Test 29');
test(maximumInvitations([2, 2, 1, 0, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]), 11, 'Test 30');
test(maximumInvitations([1, 0, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 15, 14, 13, 12]), 16, 'Test 31');
test(maximumInvitations([1,2,0,5,6,3,4,9,7,8]), 4, 'Test 32');
test(maximumInvitations([2,2,3,3,4,4,5,5,6,6]), 7, 'Test 33');
test(maximumInvitations([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9]), 20, 'Test 34');
test(maximumInvitations([1, 2, 0, 4, 5, 3, 7, 8, 9, 6]), 4, 'Test 35');
test(maximumInvitations([1, 2, 3, 0, 1, 2, 3, 4, 5, 6]), 4, 'Test 36');
test(maximumInvitations([14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 15, 'Test 37');
test(maximumInvitations([1, 2, 0, 3, 4, 5, 6, 7, 8, 9]), 7, 'Test 38');
test(maximumInvitations([2,0,2,0,4,4,6,6,8,8,10,10,12,12,14,14,16,16,18,18]), 19, 'Test 39');
test(maximumInvitations([1, 3, 1, 4, 3, 6, 5, 8, 7, 10, 9, 12, 11, 14, 13, 16, 15]), 16, 'Test 40');
test(maximumInvitations([1, 2, 0, 5, 6, 3, 4, 9, 10, 7, 8, 11]), 9, 'Test 41');
test(maximumInvitations([2, 1, 4, 3, 6, 5, 8, 7, 10, 9, 12, 11, 14, 13, 0, 15]), 8, 'Test 42');
test(maximumInvitations([1,5,0,3,4,2,6,7,8,9]), 6, 'Test 43');
test(maximumInvitations([1, 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]), 27, 'Test 44');
test(maximumInvitations([1, 2, 0, 4, 5, 3, 7, 8, 9, 10, 11, 12, 13, 14, 6]), 9, 'Test 45');
test(maximumInvitations([3, 0, 1, 0, 7, 6, 5, 4, 9, 8]), 10, 'Test 46');
test(maximumInvitations([5, 8, 1, 4, 7, 5, 7, 5, 8, 7]), 7, 'Test 47');
test(maximumInvitations([1, 0, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 14]), 15, 'Test 48');
test(maximumInvitations([1, 0, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14]), 16, 'Test 49');
test(maximumInvitations([1,2,3,4,5,6,0,7,8,9]), 7, 'Test 50');
test(maximumInvitations([5,1,0,6,2,3,4,9,7,8]), 6, 'Test 51');
test(maximumInvitations([2, 0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1]), 15, 'Test 52');
test(maximumInvitations([2,0,1,4,3,5,6,7,8,9]), 7, 'Test 53');
test(maximumInvitations([18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), 19, 'Test 54');
test(maximumInvitations([2, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 3, 0]), 8, 'Test 55');
test(maximumInvitations([2, 0, 1, 5, 3, 4, 8, 6, 7, 12, 9, 10, 11, 16, 13, 14, 15, 18, 19, 17]), 4, 'Test 56');
test(maximumInvitations([1, 0, 3, 2, 5, 4, 7, 6, 9, 8]), 10, 'Test 57');
test(maximumInvitations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 2, 'Test 58');
test(maximumInvitations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]), 40, 'Test 59');
test(maximumInvitations([1, 2, 0, 5, 6, 4, 3, 8, 9, 7, 12, 11, 10, 15, 14, 13]), 6, 'Test 60');
test(maximumInvitations([4, 0, 4, 1, 2, 1, 3, 5, 6, 9]), 8, 'Test 61');
test(maximumInvitations([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,0,0]), 8, 'Test 62');
test(maximumInvitations([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 10]), 10, 'Test 63');
test(maximumInvitations([1,3,0,2,5,4,7,6,9,8]), 6, 'Test 64');
test(maximumInvitations([5,5,6,6,7,7,8,8,9,9]), 5, 'Test 65');
test(maximumInvitations([4,5,6,7,0,1,2,3,12,13,14,15,8,9,10,11,16,17,18,19]), 20, 'Test 66');
test(maximumInvitations([1,5,3,7,9,2,4,6,8,0]), 9, 'Test 67');
test(maximumInvitations([10,11,12,13,14,15,16,17,18,19,0,1,2,3,4,5,6,7,8,9]), 20, 'Test 68');
test(maximumInvitations([4, 4, 4, 4, 4, 4, 4, 4, 4, 4]), 2, 'Test 69');
test(maximumInvitations([2, 2, 1, 2, 3, 3, 5, 5, 7, 7]), 6, 'Test 70');
test(maximumInvitations([2,3,0,1,6,5,4,9,7,8]), 7, 'Test 71');
test(maximumInvitations([1,4,3,6,5,8,7,2,9,0]), 6, 'Test 72');
test(maximumInvitations([4, 5, 6, 7, 0, 1, 2, 3, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 16]), 21, 'Test 73');
test(maximumInvitations([3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14, 17, 16, 19, 18]), Error: list index out of range, 'Test 74');
test(maximumInvitations([1, 2, 3, 4, 5, 6, 7, 0, 10, 11, 12, 8, 9, 15, 16, 13, 14, 18, 19, 17]), 8, 'Test 75');
test(maximumInvitations([3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14, 1, 0]), 8, 'Test 76');
test(maximumInvitations([3, 3, 0, 2, 5, 5, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 17, 'Test 77');
test(maximumInvitations([5,1,2,3,4,0,7,8,9,6]), 6, 'Test 78');
test(maximumInvitations([4,4,4,4,0,6,6,6,7,8,9,10,11,12,13,14,15,16,17,18]), 17, 'Test 79');
test(maximumInvitations([5, 1, 3, 0, 2, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14]), 11, 'Test 80');
test(maximumInvitations([3,0,1,0,6,5,4,9,7,8]), 7, 'Test 81');
test(maximumInvitations([1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 20, 'Test 82');
test(maximumInvitations([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), 10, 'Test 83');
test(maximumInvitations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0]), 15, 'Test 84');
test(maximumInvitations([5, 5, 5, 5, 5, 3, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9]), 6, 'Test 85');
test(maximumInvitations([2,2,3,4,5,6,7,8,9,1]), 9, 'Test 86');
test(maximumInvitations([1, 2, 3, 4, 5, 6, 7, 8, 0, 9]), 9, 'Test 87');
test(maximumInvitations([3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14, 1]), Error: list index out of range, 'Test 88');
test(maximumInvitations([1,0,3,4,5,6,7,8,9,2]), 8, 'Test 89');
test(maximumInvitations([9,1,8,3,7,2,6,5,4,0]), 5, 'Test 90');
test(maximumInvitations([3, 2, 1, 0, 8, 8, 8, 8, 5, 5, 5, 5, 11, 11, 11, 11]), 9, 'Test 91');
test(maximumInvitations([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 6, 'Test 92');
test(maximumInvitations([1,2,0,4,5,6,3,8,9,7]), 4, 'Test 93');
test(maximumInvitations([1, 0, 3, 4, 2, 5, 6, 7, 8, 9]), 7, 'Test 94');
test(maximumInvitations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 13, 14, 15, 12]), 12, 'Test 95');
test(maximumInvitations([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 0, 1]), 10, 'Test 96');
test(maximumInvitations([1,0,3,2,5,4,7,6,9,8]), 10, 'Test 97');
test(maximumInvitations([6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4, 5]), 8, 'Test 98');
test(maximumInvitations([2, 3, 1, 0, 6, 6, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 16, 'Test 99');
test(maximumInvitations([2, 1, 4, 3, 6, 5, 8, 7, 10, 9, 12, 11, 14, 13, 0]), 8, 'Test 100');
test(maximumInvitations([1, 0, 3, 2, 6, 5, 4, 9, 8, 7, 12, 11, 10, 15, 14, 13]), 16, 'Test 101');
test(maximumInvitations([5, 1, 3, 0, 2, 4, 7, 6, 9, 8, 11, 10, 15, 13, 14, 12]), 11, 'Test 102');
test(maximumInvitations([1, 0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2]), 13, 'Test 103');
test(maximumInvitations([9,8,7,6,5,4,3,2,1,0,11,12,13,14,15,16,17,18,19,10]), 10, 'Test 104');
test(maximumInvitations([1, 2, 1, 4, 3, 6, 5, 8, 7, 10, 9, 12, 11, 14, 13, 0]), 16, 'Test 105');
test(maximumInvitations([1, 3, 5, 7, 9, 0, 2, 4, 6, 8]), 10, 'Test 106');
test(maximumInvitations([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8]), 7, 'Test 107');
test(maximumInvitations([2, 0, 4, 6, 1, 3, 5, 8, 7, 10, 9, 12, 11, 14, 13, 16, 15, 18, 17, 19]), 13, 'Test 108');
test(maximumInvitations([2,0,3,2,5,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 21, 'Test 109');
test(maximumInvitations([3,2,1,0,9,8,7,6,5,4,11,10,13,12,15,14,17,16,19,18]), 20, 'Test 110');
test(maximumInvitations([3, 2, 1, 0, 7, 6, 5, 4, 11, 10, 9, 8, 15, 14, 13, 12]), 16, 'Test 111');
test(maximumInvitations([1,0,3,2,4,5,6,7,8,9]), 10, 'Test 112');
test(maximumInvitations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]), 16, 'Test 113');
test(maximumInvitations([1,2,3,4,5,6,7,8,9,0]), 10, 'Test 114');
test(maximumInvitations([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 21, 'Test 115');
test(maximumInvitations([3,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,0]), 18, 'Test 116');
test(maximumInvitations([1, 0, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 14, 15, 16, 17, 18, 19]), 20, 'Test 117');
test(maximumInvitations([1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 4, 'Test 118');
test(maximumInvitations([2, 3, 1, 0, 6, 7, 8, 9, 5, 10, 11, 4]), 8, 'Test 119');
test(maximumInvitations([4, 4, 4, 4, 2, 6, 6, 6, 6, 8, 8, 8, 8, 10, 10, 10, 10, 12, 12, 12, 12]), 7, 'Test 120');
test(maximumInvitations([7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 11, 10, 13, 12, 15, 14]), 16, 'Test 121');
test(maximumInvitations([1, 0, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14, 17, 16, 19, 18, 21, 20]), 22, 'Test 122');
test(maximumInvitations([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 14, 15, 12, 13]), 6, 'Test 123');
test(maximumInvitations([3,0,0,2,5,5,6,7,8,9]), 6, 'Test 124');
test(maximumInvitations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 0]), 20, 'Test 125');
test(maximumInvitations([1, 0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]), 41, 'Test 126');
test(maximumInvitations([10,9,8,7,6,5,4,3,2,1,0,11,12,13,14,15,16,17,18,19]), 20, 'Test 127');
test(maximumInvitations([2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 2, 'Test 128');
test(maximumInvitations([3, 0, 1, 4, 5, 3, 5, 6, 7, 8]), 3, 'Test 129');
test(maximumInvitations([2, 0, 1, 5, 5, 5, 5, 5, 5, 5]), 3, 'Test 130');

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
