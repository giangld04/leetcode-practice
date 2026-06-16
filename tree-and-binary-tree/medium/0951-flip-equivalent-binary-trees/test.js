// Test: 951. Flip Equivalent Binary Trees
// 76 test cases from LeetCodeDataset
// Run: node test.js

const { flipEquiv } = require("./solution");

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

console.log("\n951. Flip Equivalent Binary Trees\n");

test(flipEquiv([1,2,3], [1,3,2]), true, 'Test 1');
test(flipEquiv([1,2,3,4,5], [1,3,2,5,4]), false, 'Test 2');
test(flipEquiv([], [1]), false, 'Test 3');
test(flipEquiv([1,2,3,4,5,6,7], [1,3,2,7,6,5,4]), true, 'Test 4');
test(flipEquiv([], []), true, 'Test 5');
test(flipEquiv([1,2,3,4,5,6,null,null,null,7,8], [1,3,2,null,6,4,5,null,null,null,null,8,7]), true, 'Test 6');
test(flipEquiv([1,2,3,4], [1,3,2,4]), false, 'Test 7');
test(flipEquiv([1], [1]), true, 'Test 8');
test(flipEquiv([1,2], [1,null,2]), true, 'Test 9');
test(flipEquiv([1,2,3,4], [1,3,2,null,4]), false, 'Test 10');
test(flipEquiv([1,null,2,null,3], [1,2,null,3]), true, 'Test 11');
test(flipEquiv([0,1,null], [0,null,1]), true, 'Test 12');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,2,6,5,4,7,13,12,11,10,15,14,9,8]), false, 'Test 13');
test(flipEquiv([10,5,15,3,7,null,18,null,null,6,null,null,null,16,17], [10,15,5,null,18,7,null,null,null,null,16,null,null,3,6,null,null,17]), false, 'Test 14');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], [1,3,2,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4]), false, 'Test 15');
test(flipEquiv([10,5,15,3,7,12,20,1,4,6,8,11,13,18,25], [10,15,5,25,18,12,7,20,13,11,6,8,4,3,1]), false, 'Test 16');
test(flipEquiv([10,5,15,3,7,12,18,1,4,6,8,11,13,16,20,null,null,2,9,null,null,null,null,null,null,null,null,null,null,null], [10,15,5,20,16,18,12,9,null,null,null,null,2,null,null,13,11,8,6,4,3,7,null,1]), false, 'Test 17');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], [1,3,2,7,6,5,4,15,14,13,12,11,10,9,8,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16]), false, 'Test 18');
test(flipEquiv([3,2,null,1], [3,null,2,null,1]), true, 'Test 19');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], [1,3,2,15,14,13,12,11,10,9,8,7,6,5,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), false, 'Test 20');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], [1,32,3,4,5,30,2,31,33,29,49,28,50,10,27,11,26,12,25,13,24,14,23,15,22,16,21,17,20,18,19,34,35,36,37,38,9,8,7,6,39,40,41,42,43,44,45,46,47,48]), false, 'Test 21');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [1,3,2,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4]), false, 'Test 22');
test(flipEquiv([5,4,7,3,null,2,null,-1,-3,null,null,null,null,-2,null], [5,7,4,null,2,null,3,null,null,-1,-2,null,-3,null]), false, 'Test 23');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,2,15,14,13,12,11,10,9,8,7,6,5,4]), false, 'Test 24');
test(flipEquiv([1,2,3,null,4,5,6,null,null,7,8,9,10], [1,3,2,6,5,4,null,null,10,9,8,7,null]), false, 'Test 25');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,2,7,6,5,4,15,14,13,12,11,10,9,8]), true, 'Test 26');
test(flipEquiv([1,2,3,4,null,6,7,8,9], [1,3,2,7,6,null,5,9,8]), false, 'Test 27');
test(flipEquiv([8,1,3,7,9,4,5,2,null,null,null,null,null,null,null], [8,3,1,5,4,null,9,null,2,null,null,null,null,7,null]), false, 'Test 28');
test(flipEquiv([1,2,null,3,null,4,null,5], [1,null,2,null,3,null,4,null,5]), true, 'Test 29');
test(flipEquiv([1,2,3,4,5,6,7,8,9,null,11,null,null,null,null,14,15], [1,3,2,7,6,5,4,null,null,null,15,14,null,null,null,9,11]), false, 'Test 30');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,2,7,6,5,4,15,14,13,12,11,10,9,8,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), false, 'Test 31');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63], [1,3,2,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), false, 'Test 32');
test(flipEquiv([1,2,3,4,null,6,7,8,null,10,null,12,13,null,null,16], [1,3,2,null,7,6,4,13,null,12,null,10,null,8,16]), false, 'Test 33');
test(flipEquiv([1,2,3,4,5,null,7,null,null,8,null,null,9,10,null], [1,3,2,null,6,4,5,null,9,null,null,10,8,null,null,null,null]), false, 'Test 34');
test(flipEquiv([1,2,null,4,5,6,7], [1,2,null,5,4,7,6]), false, 'Test 35');
test(flipEquiv([1,2,3,4,5,6,null,8,9,null,null,10,11,null,null,null,null,null], [1,3,2,null,6,5,4,null,11,null,10,null,null,9,8]), false, 'Test 36');
test(flipEquiv([5,1,7,null,3,null,6,null,4], [5,7,1,6,null,null,3,null,null,4]), true, 'Test 37');
test(flipEquiv([5,3,8,2,4,7,9,1,null,null,null,null,10,null,null,11], [5,8,3,9,7,4,2,null,null,10,null,null,null,null,1,null,11]), false, 'Test 38');
test(flipEquiv([1,2,3,4,null,6,7,8,null,null,null,null,11], [1,3,2,null,6,4,7,null,null,11,null,8]), false, 'Test 39');
test(flipEquiv([1,2,3,4,null,6,7,null,null,8,9,10,11,null,null,12,13,null,14], [1,3,2,null,6,4,7,null,null,11,10,9,8,null,null,14,null,13,12]), false, 'Test 40');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,16,17,null,18,19,20,21,22,null,23,null,24,25,26,null,null,null,27], [1,3,2,7,6,5,4,15,14,13,12,11,10,9,8,null,null,null,null,null,null,19,18,null,24,23,null,22,21,20,17,null,16,null,27,null,26,null,25]), false, 'Test 41');
test(flipEquiv([1,2,3,4,5,null,null,6,7,null,null,8,9], [1,3,2,null,null,5,4,null,null,9,8,7,6]), false, 'Test 42');
test(flipEquiv([2,1,null,3,4,null,5,6], [2,3,1,null,5,4,null,6]), false, 'Test 43');
test(flipEquiv([1,2,3,null,null,4,5], [1,3,2,5,4]), true, 'Test 44');
test(flipEquiv([5,3,6,2,4,null,7,1,null,null,null,8,9], [5,6,3,null,7,4,null,null,1,9,8,2]), false, 'Test 45');
test(flipEquiv([1,2,3,4,null,6,7,null,5,8,9], [1,3,2,7,6,null,4,null,9,8,5]), false, 'Test 46');
test(flipEquiv([5,1,3,null,2,null,6], [5,3,1,6,null,2,null]), true, 'Test 47');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], [1,3,2,7,6,5,4,13,12,11,10,9,8,15,14,23,22,21,20,19,18,17,16,27,26,25,24,31,30,29]), false, 'Test 48');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], [1,3,2,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,4,5]), false, 'Test 49');
test(flipEquiv([1,2,3,null,4,5,6,null,null,7,8,9,10,11,12,13,14,15], [1,3,2,6,5,4,null,null,null,null,15,14,13,12,11,10,9,8,7]), false, 'Test 50');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,3,8,7,6,5,4,9,10,11,12,13,14,15]), false, 'Test 51');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,16,17,null,18,19,20,21,22,null,23,24], [1,3,2,7,6,5,4,15,14,13,12,11,10,9,8,null,null,null,null,null,null,19,18,null,24,23,null,22,21,20,17,null,16]), false, 'Test 52');
test(flipEquiv([1,2,3,4,null,6,7,null,null,null,null,8,9,null,10,null,null,11], [1,3,2,7,null,6,4,10,null,9,null,11,null,8,null]), false, 'Test 53');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,null,null,null,null,null,null,null,null,11,12], [1,3,2,7,6,5,4,12,11,null,null,null,null,null,9,8]), false, 'Test 54');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,2,6,5,4,7,10,9,8,11,14,13,12,15]), false, 'Test 55');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,2,15,14,13,12,7,6,5,4,11,10,9,8]), false, 'Test 56');
test(flipEquiv([10,5,15,3,7,12,18,1,4,6,8,11,13,17,19], [10,15,5,19,17,13,11,18,12,8,6,4,3,7,1]), false, 'Test 57');
test(flipEquiv([1,2,3,4,5,null,null,6,7,null,null,8,9], [1,3,2,null,null,6,7,9,8,null,null,5,4]), false, 'Test 58');
test(flipEquiv([1,2,3,null,4,null,5,null,6], [1,3,2,5,null,4,null,null,null,6]), true, 'Test 59');
test(flipEquiv([1,2,3,4,5,null,null,8,9,null,null,10], [1,3,2,null,null,5,4,10,null,null,9,8]), false, 'Test 60');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,2,5,6,4,7,9,10,11,12,13,14,8,15]), false, 'Test 61');
test(flipEquiv([1,2,3,4,5,null,null,6,7], [1,3,2,null,null,7,6,5,4]), false, 'Test 62');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63], [1,3,2,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4]), false, 'Test 63');
test(flipEquiv([1,2,3,4,null,null,5,null,null,6,7], [1,3,2,null,5,null,4,7,6]), true, 'Test 64');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], [1,3,2,null,6,4,5,15,14,13,12,11,10,9,8,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16]), false, 'Test 65');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], [1,3,2,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4]), false, 'Test 66');
test(flipEquiv([8,3,5,1,2,6,9,null,null,null,null,null,null,7,4], [8,5,3,9,6,2,1,null,null,7,4,null,null,null,null]), false, 'Test 67');
test(flipEquiv([1,2,3,4,null,null,5,6,null,null,7,8,null,null,9], [1,3,2,null,5,null,4,null,9,null,8,null,7,6]), false, 'Test 68');
test(flipEquiv([1,2,3,4,5,6,7,8,9,10,null,12,null,14,15], [1,3,2,7,6,5,4,15,14,12,null,10,null,9,8]), true, 'Test 69');
test(flipEquiv([1,2,3,4,5,6,null,null,null,7,8,9,10], [1,3,2,null,6,4,5,10,9,null,null,null,null,8,7]), false, 'Test 70');
test(flipEquiv([8,5,12,3,7,9,15,1,4,6,8,10,11,13,16], [8,12,5,16,13,11,10,15,9,7,6,4,3,8,1]), false, 'Test 71');
test(flipEquiv([1,2,3,4,5,null,6,7,8,null,null,9,10], [1,3,2,null,6,4,5,10,9,null,null,8,7]), false, 'Test 72');
test(flipEquiv([1,2,3,4,5,null,null,null,null,6,7], [1,3,2,null,null,null,null,4,5,7,6]), false, 'Test 73');
test(flipEquiv([2,3,5,null,8,null,7,4,9,null,1,null,null,null,null,6], [2,5,3,7,null,null,8,1,null,null,4,null,null,9,6]), false, 'Test 74');
test(flipEquiv([1,2,3,4,5,null,7,8,9,null,null,null,null,null,14], [1,3,2,null,5,4,7,null,null,9,null,null,8,null,14]), false, 'Test 75');
test(flipEquiv([1,2,3,4,5,6,7,8,9,null,11,null,null,12,null,13,null,null,14,null,null,15,null], [1,3,2,null,7,6,5,null,null,12,null,11,null,null,9,4,null,null,15,13,null,null,14,null,8]), false, 'Test 76');

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
