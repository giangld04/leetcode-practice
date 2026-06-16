// Test: 1375. Number Of Times Binary String Is Prefix Aligned
// 91 test cases from LeetCodeDataset
// Run: node test.js

const { numTimesAllBlue } = require("./solution");

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

console.log("\n1375. Number Of Times Binary String Is Prefix Aligned\n");

test(numTimesAllBlue([5,4,3,2,1]), 1, 'Test 1');
test(numTimesAllBlue([1,2,3,4,5]), 5, 'Test 2');
test(numTimesAllBlue([2,1,3,5,4]), 3, 'Test 3');
test(numTimesAllBlue([3,2,4,1,5]), 2, 'Test 4');
test(numTimesAllBlue([4,1,2,3]), 1, 'Test 5');
test(numTimesAllBlue([2,1,5,3,4]), 2, 'Test 6');
test(numTimesAllBlue([5,1,4,3,2,7,6,9,8,10]), 4, 'Test 7');
test(numTimesAllBlue([2,3,1,5,4]), 2, 'Test 8');
test(numTimesAllBlue([10,9,8,7,6,5,4,3,2,1,11,12,13,14,15]), 6, 'Test 9');
test(numTimesAllBlue([1,3,5,7,9,11,13,15,17,19,2,4,6,8,10,12,14,16,18,20]), 3, 'Test 10');
test(numTimesAllBlue([1,4,3,2,5,8,6,7,10,9]), 5, 'Test 11');
test(numTimesAllBlue([3,1,4,2,5,7,6,9,8,10]), 5, 'Test 12');
test(numTimesAllBlue([3,1,2,6,5,4,7,8,9,10]), 6, 'Test 13');
test(numTimesAllBlue([6,5,4,3,2,1,7,8,9,10,11]), 6, 'Test 14');
test(numTimesAllBlue([1,3,2,5,4,6]), 4, 'Test 15');
test(numTimesAllBlue([1,3,5,7,9,2,4,6,8,10]), 3, 'Test 16');
test(numTimesAllBlue([2,5,6,1,4,3,8,9,7,10]), 3, 'Test 17');
test(numTimesAllBlue([1,2,3,4,5,10,9,8,7,6]), 6, 'Test 18');
test(numTimesAllBlue([1,3,5,7,2,4,6,8,9,10]), 5, 'Test 19');
test(numTimesAllBlue([1,3,5,7,9,11,13,15,2,4,6,8,10,12,14]), 2, 'Test 20');
test(numTimesAllBlue([6,1,3,5,2,4]), 1, 'Test 21');
test(numTimesAllBlue([14,12,10,8,6,4,2,15,13,11,9,7,5,3,1]), 1, 'Test 22');
test(numTimesAllBlue([2,1,4,3,6,5,8,7,10,9]), 5, 'Test 23');
test(numTimesAllBlue([3,1,2,5,4,7,6,9,8,10]), 5, 'Test 24');
test(numTimesAllBlue([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 15, 'Test 25');
test(numTimesAllBlue([1,2,3,4,5,6,7,8,9,10]), 10, 'Test 26');
test(numTimesAllBlue([3,1,2,4,5,6,7,8,9,10]), 8, 'Test 27');
test(numTimesAllBlue([1,10,2,9,3,8,4,7,5,6]), 2, 'Test 28');
test(numTimesAllBlue([6,3,1,4,2,5,7,8,9,10]), 5, 'Test 29');
test(numTimesAllBlue([2,1,5,4,3,6,8,7,10,9]), 5, 'Test 30');
test(numTimesAllBlue([1,2,3,4,5,10,6,7,8,9]), 6, 'Test 31');
test(numTimesAllBlue([5,2,3,4,1,6,7,8,9,10]), 6, 'Test 32');
test(numTimesAllBlue([5,1,4,2,3,6,7,8,9,10]), 6, 'Test 33');
test(numTimesAllBlue([1,11,2,10,3,9,4,8,5,7,6]), 2, 'Test 34');
test(numTimesAllBlue([10,1,20,2,19,3,18,4,17,5,16,6,15,7,14,8,13,9,12,11]), 1, 'Test 35');
test(numTimesAllBlue([11,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 36');
test(numTimesAllBlue([1,5,3,4,2,6,7,8,9,10]), 7, 'Test 37');
test(numTimesAllBlue([6,5,4,3,2,1,7,8,9,10]), 5, 'Test 38');
test(numTimesAllBlue([1,3,5,2,4,6]), 3, 'Test 39');
test(numTimesAllBlue([1,5,2,4,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 22, 'Test 40');
test(numTimesAllBlue([1,5,2,4,3,6,7,8,9,10]), 7, 'Test 41');
test(numTimesAllBlue([6,5,4,3,2,1]), 1, 'Test 42');
test(numTimesAllBlue([1,2,5,4,3,6,8,7,10,9]), 6, 'Test 43');
test(numTimesAllBlue([1,3,5,2,4,6,7,8,9,10]), 7, 'Test 44');
test(numTimesAllBlue([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 45');
test(numTimesAllBlue([5,3,1,2,4,6,8,7,10,9]), 4, 'Test 46');
test(numTimesAllBlue([2,3,1,5,4,6,7,8,9,10]), 7, 'Test 47');
test(numTimesAllBlue([1,2,3,5,4,6,7,8,9,10]), 9, 'Test 48');
test(numTimesAllBlue([1,2,4,3,5,7,6,8,10,9]), 7, 'Test 49');
test(numTimesAllBlue([5,1,4,3,2,6]), 2, 'Test 50');
test(numTimesAllBlue([5,2,3,1,4,6,8,7,10,9]), 4, 'Test 51');
test(numTimesAllBlue([10,5,8,7,9,3,1,2,4,6]), 1, 'Test 52');
test(numTimesAllBlue([1,3,2,5,4,6,7]), 5, 'Test 53');
test(numTimesAllBlue([1,3,5,7,9,11,2,4,6,8,10]), 2, 'Test 54');
test(numTimesAllBlue([8,7,6,5,4,3,2,1,9,10]), 3, 'Test 55');
test(numTimesAllBlue([1,3,2,5,4]), 3, 'Test 56');
test(numTimesAllBlue([1,2,5,3,6,4,7,8,10,9]), 6, 'Test 57');
test(numTimesAllBlue([25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 58');
test(numTimesAllBlue([1,6,2,7,3,8,4,9,5,10]), 3, 'Test 59');
test(numTimesAllBlue([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 20, 'Test 60');
test(numTimesAllBlue([7,6,5,4,3,2,1]), 1, 'Test 61');
test(numTimesAllBlue([1,3,5,2,4,6,8,7,10,9]), 5, 'Test 62');
test(numTimesAllBlue([1,3,2,4,5,6,7,8,9,10]), 9, 'Test 63');
test(numTimesAllBlue([5,1,3,2,6,4,8,7,10,9]), 3, 'Test 64');
test(numTimesAllBlue([10,5,8,7,3,2,9,4,6,1]), 1, 'Test 65');
test(numTimesAllBlue([1,3,5,2,4]), 2, 'Test 66');
test(numTimesAllBlue([1,5,2,6,3,7,4,8,9,10]), 5, 'Test 67');
test(numTimesAllBlue([1,4,2,3,7,5,6,10,8,9]), 4, 'Test 68');
test(numTimesAllBlue([3,1,2,5,4,6,8,7,10,9]), 5, 'Test 69');
test(numTimesAllBlue([1,3,2,4,5,7,6,8,10,9]), 7, 'Test 70');
test(numTimesAllBlue([6,3,1,5,2,4,10,7,9,8]), 2, 'Test 71');
test(numTimesAllBlue([5,1,6,2,7,3,8,4,9,10]), 3, 'Test 72');
test(numTimesAllBlue([10,9,8,7,6,5,4,3,2,1]), 1, 'Test 73');
test(numTimesAllBlue([1,2,3,4,6,5,7,8,9,10]), 9, 'Test 74');
test(numTimesAllBlue([2,1,5,4,3,8,6,7,10,9]), 4, 'Test 75');
test(numTimesAllBlue([2,1,4,3,6,5,7]), 4, 'Test 76');
test(numTimesAllBlue([5,2,1,3,4,6,7,8,9,10]), 6, 'Test 77');
test(numTimesAllBlue([1,2,10,5,4,9,6,7,3,8]), 3, 'Test 78');
test(numTimesAllBlue([2,4,6,8,10,9,7,5,3,1]), 1, 'Test 79');
test(numTimesAllBlue([10,1,2,3,4,5,6,7,8,9]), 1, 'Test 80');
test(numTimesAllBlue([2,3,1,5,6,4,8,7,10,9]), 4, 'Test 81');
test(numTimesAllBlue([7,1,2,3,4,5,6]), 1, 'Test 82');
test(numTimesAllBlue([1,5,3,4,2,6,7,8,10,9]), 6, 'Test 83');
test(numTimesAllBlue([2,1,3,5,4,6,7,8]), 6, 'Test 84');
test(numTimesAllBlue([1,2,3,4,5,6]), 6, 'Test 85');
test(numTimesAllBlue([1,2,5,4,3,6,7,8,9,10]), 8, 'Test 86');
test(numTimesAllBlue([5,1,4,3,2,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 26, 'Test 87');
test(numTimesAllBlue([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 88');
test(numTimesAllBlue([2,3,4,5,6,7,8,9,10,1]), 1, 'Test 89');
test(numTimesAllBlue([10,5,1,6,2,7,3,8,4,9]), 1, 'Test 90');
test(numTimesAllBlue([1,3,2,5,4,7,6,9,8,10]), 6, 'Test 91');

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
