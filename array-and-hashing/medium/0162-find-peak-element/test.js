// Test: 162. Find Peak Element
// 92 test cases from LeetCodeDataset
// Run: node test.js

const { findPeakElement } = require("./solution");

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

console.log("\n162. Find Peak Element\n");

test(findPeakElement([1,2,3,1]), 2, 'Test 1');
test(findPeakElement([1,2,2,3,1]), 3, 'Test 2');
test(findPeakElement([0,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 3');
test(findPeakElement([2,1]), 0, 'Test 4');
test(findPeakElement([10,9,8,7,6,5,4,3,2,1]), 0, 'Test 5');
test(findPeakElement([6,5,4,3,2,3,2]), 0, 'Test 6');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10]), 9, 'Test 7');
test(findPeakElement([1]), 0, 'Test 8');
test(findPeakElement([10,9,8,7,6,5,4,3,2,1,0]), 0, 'Test 9');
test(findPeakElement([1,2,3,4,5]), 4, 'Test 10');
test(findPeakElement([1,3,20,4,1,0]), 2, 'Test 11');
test(findPeakElement([1,2,3,4,3,2,1]), 3, 'Test 12');
test(findPeakElement([1,3,2]), 1, 'Test 13');
test(findPeakElement([10,20,15,2,23,90,67]), 5, 'Test 14');
test(findPeakElement([5,4,3,2,1]), 0, 'Test 15');
test(findPeakElement([1,2,3,1,2,3,1]), 5, 'Test 16');
test(findPeakElement([1,2]), 1, 'Test 17');
test(findPeakElement([1,3,2,1]), 1, 'Test 18');
test(findPeakElement([1,2,1,3,5,6,4]), 5, 'Test 19');
test(findPeakElement([1,3,2,1,3,5,4,6,5,7,8,9,8,7,6,5,4,3,2,1]), 11, 'Test 20');
test(findPeakElement([1,2,3,2,1,0,-1,-2,-1,0,1,2,3,4,5,6,7,8,9,10]), 19, 'Test 21');
test(findPeakElement([1,2,3,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), 11, 'Test 22');
test(findPeakElement([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 0, 'Test 23');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1]), 9, 'Test 24');
test(findPeakElement([1,2,3,4,5,4,5,6,7,8,7,6,5,4,3,2,1]), 9, 'Test 25');
test(findPeakElement([10,20,10,20,10,20,10,20,10,20,10]), 5, 'Test 26');
test(findPeakElement([1,2,3,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 3, 'Test 27');
test(findPeakElement([1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 17, 'Test 28');
test(findPeakElement([1,2,3,4,3,2,1,2,3,4,5,4,3,2,1]), 10, 'Test 29');
test(findPeakElement([1,2,3,4,5,4,3,2,1,0,-1,-2,-3,-4,-5]), 4, 'Test 30');
test(findPeakElement([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11,13,12,14,13,15,14]), 13, 'Test 31');
test(findPeakElement([5,1,4,3,2,1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1]), 15, 'Test 32');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 29, 'Test 33');
test(findPeakElement([1,2,3,1,2,3,4,5,4,3,2,1]), 7, 'Test 34');
test(findPeakElement([1,2,3,4,5,4,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 12, 'Test 35');
test(findPeakElement([1,10,8,9,10,6,7,8,9,1,2,3,4,5,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 33, 'Test 36');
test(findPeakElement([1,2,3,1,2,3,4,3,2,1,2,3,4,5,4,3,2,1]), 6, 'Test 37');
test(findPeakElement([1,3,2,1,3,2,1,3,2,1,3,2,1]), 10, 'Test 38');
test(findPeakElement([1,3,5,4,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]), 12, 'Test 39');
test(findPeakElement([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,28,26,24,22,20,18,16,14,12,10,8,6,4,2]), 14, 'Test 40');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 41');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 15, 'Test 42');
test(findPeakElement([5,1,4,3,2,1,0,-1,-2,-3,-4]), 2, 'Test 43');
test(findPeakElement([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 1, 'Test 44');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,11,12,13,12,11,10,9,8,7,6,5,4,3,2,1]), 12, 'Test 45');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 19, 'Test 46');
test(findPeakElement([1,3,20,4,1,0,-5,2,23,1,2,1]), 2, 'Test 47');
test(findPeakElement([1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 17, 'Test 48');
test(findPeakElement([1,2,1,3,2,1,4,3,2,1,5,4,3,2,1,6,5,4,3,2,1]), 6, 'Test 49');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5]), 10, 'Test 50');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1]), 10, 'Test 51');
test(findPeakElement([5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 23, 'Test 52');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 19, 'Test 53');
test(findPeakElement([1,2,3,4,3,2,1,2,3,4,5]), 3, 'Test 54');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3]), 9, 'Test 55');
test(findPeakElement([1,10,8,6,7,9,5,3,4,2,1]), 1, 'Test 56');
test(findPeakElement([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81]), 0, 'Test 57');
test(findPeakElement([1,2,1,3,5,6,4,7,8,9,0]), 5, 'Test 58');
test(findPeakElement([5,1,4,3,2,1,0]), 2, 'Test 59');
test(findPeakElement([1,3,5,7,9,11,13,15,17,19,18,17,16,15,14]), 9, 'Test 60');
test(findPeakElement([1,10,8,9,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), 3, 'Test 61');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,0]), 9, 'Test 62');
test(findPeakElement([1,2,1,2,3,4,3,2,1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,4,3,2,1]), 5, 'Test 63');
test(findPeakElement([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11,13,12,14,13,15,14,16,15,17,16,18,17,19,18,20]), 31, 'Test 64');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13]), 9, 'Test 65');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,48,46,44,42,40,38,36,34,32,30,28,26,24,22,20,18,16,14,12,10,8,6,4,2]), 49, 'Test 66');
test(findPeakElement([1,100,2,3,4,5,6,7,8,9]), 9, 'Test 67');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 39, 'Test 68');
test(findPeakElement([1,2,3,4,3,2,3,4,5,4,3,2,1]), 8, 'Test 69');
test(findPeakElement([1,2,3,1,2,3,4,5,6,5,4,3,2,1]), 8, 'Test 70');
test(findPeakElement([5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 13, 'Test 71');
test(findPeakElement([1,2,3,4,5,4,3,2,1,2,3,4,5]), 4, 'Test 72');
test(findPeakElement([1,3,5,7,9,11,13,15,14,12,10,8,6,4,2]), 7, 'Test 73');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 29, 'Test 74');
test(findPeakElement([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9]), 15, 'Test 75');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 14, 'Test 76');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,38,36,34,32,30,28,26,24,22,20,18,16,14,12,10,8,6,4,2]), 39, 'Test 77');
test(findPeakElement([1,3,5,7,9,11,13,15,17,19,17,15,13,11,9,7,5,3,1]), 9, 'Test 78');
test(findPeakElement([1,2,3,4,5,6,5,4,3,2,1,2,3,4]), 5, 'Test 79');
test(findPeakElement([1,2,3,1,2,3,4,3,2,1]), 6, 'Test 80');
test(findPeakElement([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9]), 8, 'Test 81');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,28,26,24,22,20,18,16,14,12,10,8,6,4,2]), 29, 'Test 82');
test(findPeakElement([1,2,3,1,2,3,1,2,3]), 8, 'Test 83');
test(findPeakElement([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]), 9, 'Test 84');
test(findPeakElement([1,3,5,4,7,6,9,8,11,10,13,12,15,14,17,16,19,18,21,20,23,22,25,24,27,26,29,28]), 20, 'Test 85');
test(findPeakElement([5,1,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5]), 17, 'Test 86');
test(findPeakElement([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 13, 'Test 87');
test(findPeakElement([1,3,2,1,2,3,4,3,2,1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), 6, 'Test 88');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 24, 'Test 89');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), 9, 'Test 90');
test(findPeakElement([1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 91');
test(findPeakElement([5,1,4,3,2]), 2, 'Test 92');

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
