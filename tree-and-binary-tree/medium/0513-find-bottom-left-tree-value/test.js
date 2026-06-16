// Test: 513. Find Bottom Left Tree Value
// 84 test cases from LeetCodeDataset
// Run: node test.js

const { findBottomLeftValue } = require("./solution");

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

console.log("\n513. Find Bottom Left Tree Value\n");

test(findBottomLeftValue([2,1,3]), 1, 'Test 1');
test(findBottomLeftValue([1,2,3,4,null,5,6,null,null,7]), 7, 'Test 2');
test(findBottomLeftValue([0,null,1]), 1, 'Test 3');
test(findBottomLeftValue([3,9,20,null,null,15,7]), 15, 'Test 4');
test(findBottomLeftValue([1]), 1, 'Test 5');
test(findBottomLeftValue([5,3,7,2,4,6,8,1,null,null,null,null,null,null,9]), 1, 'Test 6');
test(findBottomLeftValue([2,2,2,3,null,3,null,4,null,4,null,5,null,5,null,6]), 6, 'Test 7');
test(findBottomLeftValue([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 10, 'Test 8');
test(findBottomLeftValue([1,-2,-3,-4,null,-5,-6,null,null,null,-7]), -7, 'Test 9');
test(findBottomLeftValue([1,2,null,3,4,null,5,null,null,6,null,7]), 7, 'Test 10');
test(findBottomLeftValue([10,5,15,3,7,null,18]), 3, 'Test 11');
test(findBottomLeftValue([1,2,2,3,3,null,null,4,4,4,4]), 4, 'Test 12');
test(findBottomLeftValue([1,2,3,4,null,null,7,null,null,null,null,null,null,8]), 4, 'Test 13');
test(findBottomLeftValue([8,3,10,1,6,null,14,null,null,4,7,13]), 4, 'Test 14');
test(findBottomLeftValue([1,3,2,5,3,null,9,0,7,5,null,null,8,6,null,null,null,11,null,13,null,null,null,14]), 14, 'Test 15');
test(findBottomLeftValue([100,50,150,25,75,125,175,10,30,60,90,110,140,160,190]), 10, 'Test 16');
test(findBottomLeftValue([6,2,8,0,4,7,9,null,null,3,5]), 3, 'Test 17');
test(findBottomLeftValue([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 9, 'Test 18');
test(findBottomLeftValue([1,2,3,null,5,null,6,7,null,8,9,null,null,10]), 10, 'Test 19');
test(findBottomLeftValue([1,2,3,4,null,5,6,7,null,8,9,null,null,null,10,null,11]), 10, 'Test 20');
test(findBottomLeftValue([0,-2,3,-4,5,-6,7,-8,9,-10,11,-12,13,-14,15]), -8, 'Test 21');
test(findBottomLeftValue([1,null,2,3,4,5,6,7,8,9,10,11,12,13,14]), 9, 'Test 22');
test(findBottomLeftValue([8,5,1,6,9,null,null,7,null,10,11]), 7, 'Test 23');
test(findBottomLeftValue([50,25,75,10,35,55,85,5,15,30,40,52,60,70,90]), 5, 'Test 24');
test(findBottomLeftValue([1,2,3,null,4,5,6,null,7,8,9,10,null,null,11,12,13,null,null,null,null,14]), 14, 'Test 25');
test(findBottomLeftValue([1,2,3,4,null,null,5,6,null,null,7,8,null,null,9]), 8, 'Test 26');
test(findBottomLeftValue([100,50,150,25,75,null,175,10,35,65,85,null,null,null,null,null,200,15,40,60,80,90,110,130,180,250]), 90, 'Test 27');
test(findBottomLeftValue([8,15,1,null,-98,75,null,94,93,null,-82,null,-70,null,-52]), -70, 'Test 28');
test(findBottomLeftValue([2,2,2,3,null,3,null,4,null,4,null,5,null,5,null,6,null,6,null,7,null,7]), 7, 'Test 29');
test(findBottomLeftValue([1,null,3,2,4,null,null,5,null,6]), 6, 'Test 30');
test(findBottomLeftValue([1,null,3,null,null,2]), 3, 'Test 31');
test(findBottomLeftValue([1,2,3,4,5,6,7,8,null,null,null,null,null,null,9]), 8, 'Test 32');
test(findBottomLeftValue([-1,-2,-3,-4,-5,-6,-7]), -4, 'Test 33');
test(findBottomLeftValue([1,null,2,3,null,null,4,null,null,5]), 4, 'Test 34');
test(findBottomLeftValue([0,-1,-2,-3,null,-4,-5,-6,null,null,null,-7,-8]), -6, 'Test 35');
test(findBottomLeftValue([5,4,8,11,null,13,4,7,2,null,null,null,1]), 7, 'Test 36');
test(findBottomLeftValue([5,3,8,1,4,null,9,null,2,null,null,null,6,null,10,7,null,11,12]), 11, 'Test 37');
test(findBottomLeftValue([20,15,25,10,17,22,30,5,12,null,18,21,24,28,35,3,null,11,14,16,null,19,null,null,23,27,31,null,null,null,null,33,null,36,37]), 33, 'Test 38');
test(findBottomLeftValue([1,2,3,4,5,6,7,8,9,10,11,12,13,null,15]), 8, 'Test 39');
test(findBottomLeftValue([25,20,30,15,22,28,35,10,null,18,24,null,null,26,29,null,null,5,null,null,null,null,null,null,12]), 5, 'Test 40');
test(findBottomLeftValue([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 8, 'Test 41');
test(findBottomLeftValue([1,2,3,4,5,6,7,8,null,null,null,null,9,10,11,12]), 12, 'Test 42');
test(findBottomLeftValue([1,2,null,3,null,4,null,5]), 5, 'Test 43');
test(findBottomLeftValue([10,5,15,3,7,null,18,1,null,6]), 1, 'Test 44');
test(findBottomLeftValue([1,null,2,null,3,null,4,null,5]), 5, 'Test 45');
test(findBottomLeftValue([7,3,15,null,null,9,20,null,null,8,null,16,18,19,21]), 19, 'Test 46');
test(findBottomLeftValue([5,3,6,2,4,null,7,1,null,null,null,null,null,null,8]), 8, 'Test 47');
test(findBottomLeftValue([5,null,6,null,7,null,8,null,9,null,10]), 10, 'Test 48');
test(findBottomLeftValue([5,1,4,null,null,3,6]), 3, 'Test 49');
test(findBottomLeftValue([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 15, 'Test 50');
test(findBottomLeftValue([2147483647]), 2147483647, 'Test 51');
test(findBottomLeftValue([2,1,3,4,5,6,7,8,9,10,null,null,11,12,null,13,null,null,14]), 13, 'Test 52');
test(findBottomLeftValue([4,2,7,1,3,6,9,null,null,null,null,null,null,8,10]), 8, 'Test 53');
test(findBottomLeftValue([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15]), -8, 'Test 54');
test(findBottomLeftValue([10,5,15,3,7,12,20,1,4,6,8,11,13,18,25,null,null,null,null,5.5,9,10.5,null,null,14,16,22,null,null,17,null,null,null,null,null,null,null,null,null,null,19]), 19, 'Test 55');
test(findBottomLeftValue([20,10,30,5,15,25,35,2,7,null,17,23,null,27,null,18]), 18, 'Test 56');
test(findBottomLeftValue([1,2,3,4,5,6,7,8,9,10,null,null,11,null,12]), 8, 'Test 57');
test(findBottomLeftValue([0,0,0,0,null,null,0,null,0,null,null,0]), 0, 'Test 58');
test(findBottomLeftValue([1,2,3,4,5,null,6,7,8,null,null,9,10,null,null,11]), 11, 'Test 59');
test(findBottomLeftValue([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20]), 20, 'Test 60');
test(findBottomLeftValue([1,2,2,3,3,3,3,4,4,4,4,4,4,4,4]), 4, 'Test 61');
test(findBottomLeftValue([10,5,15,3,7,13,18,1,null,6]), 1, 'Test 62');
test(findBottomLeftValue([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9]), 8, 'Test 63');
test(findBottomLeftValue([2,3,4,5,null,6,7,8,null,null,null,null,null,null,9]), 9, 'Test 64');
test(findBottomLeftValue([5,3,8,2,4,7,9,1,null,null,null,null,10]), 1, 'Test 65');
test(findBottomLeftValue([25,15,35,10,20,30,40,5,12,null,18,28,null,38,45]), 5, 'Test 66');
test(findBottomLeftValue([30,15,45,7,22,35,50,3,11,18,27,32,42,48,55,1,5,9,13,17,20,24,26,29,31,34,38,41,44,46,49,52,54,57,60,2,4,6,8,10,12,14,16,19,21,23,25,28,30,33,36,39,43,45,47,50,53,56,58,61,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,62]), 62, 'Test 67');
test(findBottomLeftValue([5,3,8,2,4,6,9,1,null,null,null,5,null,7,10]), 1, 'Test 68');
test(findBottomLeftValue([-2147483648,null,2147483647,-2147483647]), -2147483647, 'Test 69');
test(findBottomLeftValue([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180,5,null,null,20,35,55,70,null,null,null,null,null,105,130,135,145,null,null,155,175,185,null,null,null,null,null,null,null,7]), 155, 'Test 70');
test(findBottomLeftValue([1,2,3,null,5,6,null,7,8,9,10,null,11,12]), 11, 'Test 71');
test(findBottomLeftValue([1,2,2,3,null,null,3,4,4,null,null,5,5]), 5, 'Test 72');
test(findBottomLeftValue([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9,null,null,null,null,null,10]), 8, 'Test 73');
test(findBottomLeftValue([1,2,2,3,3,3,3,4,4,4,4,4,4,null,null,5,5]), 5, 'Test 74');
test(findBottomLeftValue([1,2,3,null,4,5,6,null,null,7,8,null,null,9,10]), 9, 'Test 75');
test(findBottomLeftValue([50,30,70,20,40,60,80,10,25,35,45,55,65,75,85]), 10, 'Test 76');
test(findBottomLeftValue([10,5,15,3,7,12,18,1,null,6,9,11,13,17,20]), 1, 'Test 77');
test(findBottomLeftValue([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), 11, 'Test 78');
test(findBottomLeftValue([10,5,15,null,null,6,20,null,null,null,30,25,35]), 25, 'Test 79');
test(findBottomLeftValue([10,5,-3,3,2,null,11,3,-2,null,1]), 3, 'Test 80');
test(findBottomLeftValue([1,2,3,4,5,6,7,8,9,10,11,12,13,14,null]), 8, 'Test 81');
test(findBottomLeftValue([1,null,2,null,null,3,null,null,null,4,null,null,null,null,5]), 2, 'Test 82');
test(findBottomLeftValue([10,5,15,3,7,12,20,1,4,6,8,11,13,18,25]), 1, 'Test 83');
test(findBottomLeftValue([1,2,2,3,4,4,3,5,5,null,null,6,6,null,null,7,7]), 7, 'Test 84');

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
