// Test: 404. Sum Of Left Leaves
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { sumOfLeftLeaves } = require("./solution");

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

console.log("\n404. Sum Of Left Leaves\n");

test(sumOfLeftLeaves([0,2,4,1,null,3,-1,5,1,null,6,null,8]), 5, 'Test 1');
test(sumOfLeftLeaves([1,2,3,4,5]), 4, 'Test 2');
test(sumOfLeftLeaves([3,9,20,15,7]), 15, 'Test 3');
test(sumOfLeftLeaves([1,null,2,null,3,null,4,null,5]), 0, 'Test 4');
test(sumOfLeftLeaves([-9,-3,2,null,4,4,0,-6,null,-5]), -11, 'Test 5');
test(sumOfLeftLeaves([1,2,3,4,5,null,6,7,null,null,null,null,8]), 7, 'Test 6');
test(sumOfLeftLeaves([5,3,6,2,4,null,null,1]), 1, 'Test 7');
test(sumOfLeftLeaves([3,9,20,8,null,15,7,null,4]), 15, 'Test 8');
test(sumOfLeftLeaves([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 40, 'Test 9');
test(sumOfLeftLeaves([0,1,2,3,4,5,6,7,8,9]), 21, 'Test 10');
test(sumOfLeftLeaves([1,2,3,4,5,6,null,null,7]), 6, 'Test 11');
test(sumOfLeftLeaves([3,9,20,null,null,15,7]), 24, 'Test 12');
test(sumOfLeftLeaves([1]), 0, 'Test 13');
test(sumOfLeftLeaves([1,null,2,null,null,null,3,null,null,null,null,null,4]), 0, 'Test 14');
test(sumOfLeftLeaves([10,5,15,3,7,null,18,1,null,6,9]), 7, 'Test 15');
test(sumOfLeftLeaves([100,50,150,25,75,125,175,10,30,60,80,110,140,160,190]), 340, 'Test 16');
test(sumOfLeftLeaves([10,5,15,3,7,12,20,1,6,8,13,17,22]), 26, 'Test 17');
test(sumOfLeftLeaves([1,2,null,3,null,4,null,5,null,6]), 6, 'Test 18');
test(sumOfLeftLeaves([5,2,-3,null,-4,null,1,null,null,-5,null,-6,null,-7,null,-8]), -8, 'Test 19');
test(sumOfLeftLeaves([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), 288, 'Test 20');
test(sumOfLeftLeaves([100,50,150,25,75,125,175,10,40,60,90,110,140,160,190,5,null,35,null,45,65,85,95,105,135,145,155,165,185,195]), 780, 'Test 21');
test(sumOfLeftLeaves([33,18,50,8,null,32,60,2,11,null,46,null,null,29,null,null,59,null,null]), 29, 'Test 22');
test(sumOfLeftLeaves([1,2,3,4,null,null,5,null,null,6,7,null,null,8,9]), 18, 'Test 23');
test(sumOfLeftLeaves([1,2,null,3,null,4,null,5,null,6,null,7,null,8]), 8, 'Test 24');
test(sumOfLeftLeaves([7,3,15,null,null,9,20,null,null,null,17]), 12, 'Test 25');
test(sumOfLeftLeaves([3,5,1,6,2,0,8,null,null,7,4,null,null,null,null,9,10]), 15, 'Test 26');
test(sumOfLeftLeaves([5,15,1,null,6,null,7,8,9,null,null,null,null,10,11]), 18, 'Test 27');
test(sumOfLeftLeaves([5,15,7,null,9,null,11,null,null,13,14]), 13, 'Test 28');
test(sumOfLeftLeaves([2,1,3,4,null,5,6,null,7,8,null,9,10,11,null,12,13,14,null,15]), 52, 'Test 29');
test(sumOfLeftLeaves([10,5,15,3,7,12,20,null,null,4,8,11,13,18,25]), 36, 'Test 30');
test(sumOfLeftLeaves([1,2,3,4,5,6,7,null,null,null,null,null,null,null,8]), 10, 'Test 31');
test(sumOfLeftLeaves([3,9,20,null,null,15,7,12,18,16,19,14,17]), 39, 'Test 32');
test(sumOfLeftLeaves([10,9,20,8,null,15,25,7,null,null,18,23,30,17,null,null,null,24]), 41, 'Test 33');
test(sumOfLeftLeaves([10,5,20,null,null,15,25,null,null,null,30]), 20, 'Test 34');
test(sumOfLeftLeaves([1,2,3,null,null,4,5,6,null,null,null,null,7,8,9]), 10, 'Test 35');
test(sumOfLeftLeaves([5,3,8,2,4,7,9,1,null,null,null,null,null,null,10]), 8, 'Test 36');
test(sumOfLeftLeaves([3,9,20,4,5,6,7,null,null,null,8,null,null,9,null,null,10,null,null,11,null,null,12,null,null,13,null,null,14,null,null,15]), 19, 'Test 37');
test(sumOfLeftLeaves([3,9,20,null,null,15,7,1,null,null,null,2]), 11, 'Test 38');
test(sumOfLeftLeaves([5,4,8,11,null,13,4,7,2,null,null,null,1]), 20, 'Test 39');
test(sumOfLeftLeaves([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25,null,26,null,27,null,28,null,29,null,30]), 0, 'Test 40');
test(sumOfLeftLeaves([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180,5,null,null,20,null,40,70,null,null,90,100,120,130,150,null,null,170,190,200]), 670, 'Test 41');
test(sumOfLeftLeaves([1,2,3,null,5,6,7,8,9,10,11,12,13,14,15]), 36, 'Test 42');
test(sumOfLeftLeaves([5,3,8,2,4,null,9,1,null,6,7,null,10]), 7, 'Test 43');
test(sumOfLeftLeaves([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 80, 'Test 44');
test(sumOfLeftLeaves([1,2,3,4,null,null,5,null,null,6,null,null,7,null,null,8,null,9]), 4, 'Test 45');
test(sumOfLeftLeaves([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 44, 'Test 46');
test(sumOfLeftLeaves([50,25,75,12,37,63,87,6,18,31,43,56,70,81,93]), 174, 'Test 47');
test(sumOfLeftLeaves([50,25,75,10,30,60,90,5,null,28,40,55,65,85,100,null,null,null,26,32]), 177, 'Test 48');
test(sumOfLeftLeaves([10,5,15,3,7,null,18,1,null,6]), 7, 'Test 49');
test(sumOfLeftLeaves([1,2,2,3,null,3,null,4,4,null,null,5,5]), 8, 'Test 50');
test(sumOfLeftLeaves([10,5,15,null,7,12,20,null,null,6,8,13,18]), 19, 'Test 51');
test(sumOfLeftLeaves([1,null,2,3,null,4,null,5,6,7,null,8,null,9,10,null,11,12]), 12, 'Test 52');
test(sumOfLeftLeaves([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 494, 'Test 53');
test(sumOfLeftLeaves([5,3,8,1,4,7,9,null,2,6,null,null,10]), 6, 'Test 54');
test(sumOfLeftLeaves([10,null,20,30,40,50,60,null,null,70,80]), 70, 'Test 55');
test(sumOfLeftLeaves([3,9,20,null,null,15,7,null,null,25,26]), 49, 'Test 56');
test(sumOfLeftLeaves([20,15,25,10,18,null,30,5,12,null,17,22,35,null,null,null,null,null,16]), 27, 'Test 57');
test(sumOfLeftLeaves([1,null,2,null,3,null,4,null,5,null,6,null,7]), 0, 'Test 58');
test(sumOfLeftLeaves([3,9,20,null,null,15,7,16,17,18,19,null,null,null,null,20]), 45, 'Test 59');
test(sumOfLeftLeaves([2,1,3,4,5,6,7,8,9,10,11,12,13,14,15]), 44, 'Test 60');
test(sumOfLeftLeaves([5,3,8,1,4,7,9,0,2,6,null,null,15,null,null,null,null,16]), 22, 'Test 61');
test(sumOfLeftLeaves([20,10,30,null,15,25,35,null,17,23,null,null,null,27,32,37]), 64, 'Test 62');
test(sumOfLeftLeaves([1,2,3,null,4,null,null,5,6,null,null,null,null,7,8,null,9]), 5, 'Test 63');
test(sumOfLeftLeaves([20,15,25,10,18,null,30,5,12,16,19,27,35,3,null,14,21,26,28,32,34,36,null,null,null,null,null,null,null,null,null,null,null,null,null]), 111, 'Test 64');
test(sumOfLeftLeaves([5,null,10,null,15,null,20,null,25,null,30,null,35]), 0, 'Test 65');
test(sumOfLeftLeaves([100,50,200,25,75,null,300,null,35,null,85,150,null,null,400]), 150, 'Test 66');
test(sumOfLeftLeaves([100,50,150,25,75,125,175,10,35,65,85,115,135,165,185]), 355, 'Test 67');
test(sumOfLeftLeaves([1,2,3,4,5,null,null,6,7,null,null,8,9]), 8, 'Test 68');
test(sumOfLeftLeaves([8,4,12,null,6,10,14,5,null,7,null,9,null,11,null,13,null,15]), 39, 'Test 69');
test(sumOfLeftLeaves([10,5,15,3,7,null,18,1,null,6,8]), 7, 'Test 70');
test(sumOfLeftLeaves([3,1,4,null,2]), 0, 'Test 71');
test(sumOfLeftLeaves([12,6,18,3,9,15,21,1,5,null,null,11,null,null,19,22]), 33, 'Test 72');
test(sumOfLeftLeaves([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]), 200, 'Test 73');
test(sumOfLeftLeaves([1,null,2,null,3,null,4,null,5,null,6]), 0, 'Test 74');
test(sumOfLeftLeaves([5,3,6,2,4,null,7,1,null,null,null,null,8]), 1, 'Test 75');
test(sumOfLeftLeaves([8,6,10,5,7,9,11,4,null,null,null,null,null,3]), 16, 'Test 76');
test(sumOfLeftLeaves([10,null,20,null,30,null,40,null,50,null,60,null,70,null,80,null,90,null,100]), 0, 'Test 77');
test(sumOfLeftLeaves([7,3,15,null,8,10,null,5,9,11,13,null,null,null,12]), 16, 'Test 78');
test(sumOfLeftLeaves([1,2,3,null,4,null,5,6,7,null,null,null,null,null,8]), 6, 'Test 79');
test(sumOfLeftLeaves([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 9, 'Test 80');
test(sumOfLeftLeaves([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), 0, 'Test 81');
test(sumOfLeftLeaves([10,5,15,null,null,null,25]), 5, 'Test 82');
test(sumOfLeftLeaves([0,-1,2,-2,null,-3,null,-4]), -7, 'Test 83');
test(sumOfLeftLeaves([20,10,30,5,15,25,35,1,null,8,12,22,28,null,32,null,null,4,7,null,9,11,13,14,16,17,18,19,21,23,24,26,27,29,31,33,34]), 162, 'Test 84');
test(sumOfLeftLeaves([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180]), 340, 'Test 85');
test(sumOfLeftLeaves([5,15,20,30,5,null,25,45,null,null,35,40,50]), 85, 'Test 86');
test(sumOfLeftLeaves([20,10,30,5,15,25,35,1,null,8,12,null,null,null,null,null,null,9,null,11]), 46, 'Test 87');
test(sumOfLeftLeaves([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,28,null,32,null,null,35,36]), 114, 'Test 88');
test(sumOfLeftLeaves([1,2,3,4,5,6,7,8,9,10,null,null,11,12,null,13,null,null,14]), 35, 'Test 89');
test(sumOfLeftLeaves([10,8,15,3,5,null,20,1,4,6,null,null,null,17]), 23, 'Test 90');
test(sumOfLeftLeaves([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25,null,26,null,27,null,28,null,29,null,30]), 30, 'Test 91');
test(sumOfLeftLeaves([1,2,3,4,5,null,6,7,null,8,9,null,null,10,11]), 18, 'Test 92');
test(sumOfLeftLeaves([23,18,15,20,25,16,10,null,22,null,null,19,null,null,8]), 19, 'Test 93');
test(sumOfLeftLeaves([5,4,8,11,null,13,4,7,2,null,null,5,1]), 25, 'Test 94');

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
