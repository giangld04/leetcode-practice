// Test: 508. Most Frequent Subtree Sum
// 84 test cases from LeetCodeDataset
// Run: node test.js

const { findFrequentTreeSum } = require("./solution");

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

console.log("\n508. Most Frequent Subtree Sum\n");

test(findFrequentTreeSum([-1,-2,-3,-4,-5]), [-4, -5, -11, -3, -15], 'Test 1');
test(findFrequentTreeSum([0,0,0,0,0]), [0], 'Test 2');
test(findFrequentTreeSum([1,2,3,4,5]), [4, 5, 11, 3, 15], 'Test 3');
test(findFrequentTreeSum([1,null,2,null,3,null,4,null,5]), [5, 9, 12, 14, 15], 'Test 4');
test(findFrequentTreeSum([5,2,-5]), [2], 'Test 5');
test(findFrequentTreeSum([5,2,-3]), [2, -3, 4], 'Test 6');
test(findFrequentTreeSum([10,5,-3,3,2,null,11,3,-2,null,1]), [3], 'Test 7');
test(findFrequentTreeSum([0,1,-1]), [1, -1, 0], 'Test 8');
test(findFrequentTreeSum([5]), [5], 'Test 9');
test(findFrequentTreeSum([1]), [1], 'Test 10');
test(findFrequentTreeSum([1,2,3,4,5,6,7]), [4, 5, 11, 6, 7, 16, 28], 'Test 11');
test(findFrequentTreeSum([1,2,3,4,5,null,6,7,null,8,null,9,null,10]), [10, 17, 21, 8, 13, 36, 9, 15, 18, 55], 'Test 12');
test(findFrequentTreeSum([0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14]), [-7, -8, -18, -9, -10, -23, -42, -11, -12, -28, -13, -14, -33, -63, -105], 'Test 13');
test(findFrequentTreeSum([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [10, 19, 27, 34, 40, 45, 49, 52, 54, 55], 'Test 14');
test(findFrequentTreeSum([1,2,2,3,null,null,3,null,null,4,null,null,4]), [3, 5, 4, 8, 11, 13, 19], 'Test 15');
test(findFrequentTreeSum([5,3,2,1,-1,-2,-3]), [-3], 'Test 16');
test(findFrequentTreeSum([7,-1,-10,null,5,null,-3,null,-2,null,1,null,-4,null,2]), [-4, -6, -1, -2, 2, 3, 0, -10, -5], 'Test 17');
test(findFrequentTreeSum([1,2,2,3,3,3,3]), [3], 'Test 18');
test(findFrequentTreeSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), [16, 17, 41, 18, 19, 46, 91, 20, 21, 51, 22, 23, 56, 112, 205, 24, 25, 61, 13, 80, 14, 15, 36, 119, 325], 'Test 19');
test(findFrequentTreeSum([5,2,-5,2,-2,3,-3,4,-4,5,-5,6,-6,7,-7]), [2], 'Test 20');
test(findFrequentTreeSum([100,98,102,null,99,null,105,97,null,null,101,null,106]), [106, 203, 302, 400, 101, 206, 308, 808], 'Test 21');
test(findFrequentTreeSum([1,2,2,3,null,null,3,4,null,null,4]), [4, 7, 9], 'Test 22');
test(findFrequentTreeSum([1,2,3,4,null,6,7,8,null,10,null,11,null,12,null,13]), [12, 20, 24, 26, 13, 23, 29, 11, 18, 50, 77], 'Test 23');
test(findFrequentTreeSum([10,5,-3,3,2,null,11,3,-2,null,1,0,6,null,-1,8]), [6], 'Test 24');
test(findFrequentTreeSum([100,-50,-50,30,20,-30,-20,10,5,-10,-5,3,-3,2,-2]), [5, 0], 'Test 25');
test(findFrequentTreeSum([-1,2,-3,4,-5,6,-7,8,-9,10,-11,12,-13,14,-15]), [-6, -8], 'Test 26');
test(findFrequentTreeSum([3,2,3,null,3,null,3,null,3,null,3,null,3,null,3]), [3, 6, 9], 'Test 27');
test(findFrequentTreeSum([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), [7, 8, 18, 9, 10, 23, 42, 11, 12, 28, 13, 14, 33, 63, 105], 'Test 28');
test(findFrequentTreeSum([100,50,-25,20,30,-10,-15,10,5,3,2,-1,-2]), [35], 'Test 29');
test(findFrequentTreeSum([-10,-5,-3,-2,-1,0,1,2,3,4,5,6,7,8,9]), [3, 8, 6], 'Test 30');
test(findFrequentTreeSum([1,2,2,3,4,3,4,null,null,5,null,null,5,null,null]), [5, 14], 'Test 31');
test(findFrequentTreeSum([100,50,50,25,25,25,25,12,13,14,15,16,17,18,19]), [12, 13, 50, 14, 15, 54, 154, 16, 17, 58, 18, 19, 62, 170, 424], 'Test 32');
test(findFrequentTreeSum([10,-10,20,-20,30,-30,40,-40,50,-50,60,-60,70,-70,80,-80,90,-90,100,-100]), [-60], 'Test 33');
test(findFrequentTreeSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), [91], 'Test 34');
test(findFrequentTreeSum([10,5,-3,3,2,null,11,3,-2,null,1,-1,-1,0,0]), [0, 3, -1], 'Test 35');
test(findFrequentTreeSum([100,50,-50,25,25,-25,-25,12,13,-12,-13,12,13,-12,-13]), [12, 13, -12, -13, 0, 100], 'Test 36');
test(findFrequentTreeSum([10,10,-10,5,5,null,-5,null,null,null,null,2,3]), [5, 20], 'Test 37');
test(findFrequentTreeSum([0,1,-1,2,-2,3,-3]), [2, -2, 1, 3, -3, -1, 0], 'Test 38');
test(findFrequentTreeSum([7,3,-3,2,-1,null,-4,1,-2,null,-5,0,0,0,0]), [0], 'Test 39');
test(findFrequentTreeSum([-10,10,-10,10,-10,10,-10,10,-10,10,-10,10,-10,10,-10,10,-10,10,-10,10]), [10, -10], 'Test 40');
test(findFrequentTreeSum([10,5,-3,3,2,null,11,3,-2,-1,1,0,0,0,0]), [0], 'Test 41');
test(findFrequentTreeSum([5,2,-3,1,0,-2,1]), [1], 'Test 42');
test(findFrequentTreeSum([1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1]), [1], 'Test 43');
test(findFrequentTreeSum([1,2,3,4,null,5,6,7,null,null,null,null,8]), [7, 11, 13, 5, 8, 14, 22, 36], 'Test 44');
test(findFrequentTreeSum([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25]), [25, 49, 72, 94, 115, 135, 154, 172, 189, 205, 220, 234, 247, 259, 270, 280, 289, 297, 304, 310, 315, 319, 322, 324, 325], 'Test 45');
test(findFrequentTreeSum([-1,-2,-3,-4,-5,-6,-7]), [-4, -5, -11, -6, -7, -16, -28], 'Test 46');
test(findFrequentTreeSum([1,2,3,4,5,6,7,null,null,null,null,null,null,8,9]), [4, 5, 11, 6, 8, 9, 24, 33, 45], 'Test 47');
test(findFrequentTreeSum([1,-1,1,-1,1,-1,1]), [1], 'Test 48');
test(findFrequentTreeSum([5,15,10,7,-5,-3,2,null,-1,null,null,null,null,null,null]), [-1, 6, -5, 16, -3, 2, 9, 30], 'Test 49');
test(findFrequentTreeSum([5,2,-3,4,1,-1,-4,6,0,null,null,null,null,2,null]), [6, 0, 10, 1, 13, -1, 2, -2, -6, 12], 'Test 50');
test(findFrequentTreeSum([0,1,1,0,0,0,0]), [0], 'Test 51');
test(findFrequentTreeSum([5,2,-3,2,-2,1,-1,3,-3,4,-4]), [-3, 2, 4], 'Test 52');
test(findFrequentTreeSum([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), [5], 'Test 53');
test(findFrequentTreeSum([1,2,2,3,3,null,null,4,4,4,4,null,null,null,null,5,5,5,5,5]), [5], 'Test 54');
test(findFrequentTreeSum([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), [9, 17, 24, 30, 35, 39, 42, 44, 45], 'Test 55');
test(findFrequentTreeSum([5,15,-10,20,-20,30,-30,40,-40,50,-50,60,-60,70,-70,80,-80,90,-90,100,-100]), [80, -80, 40, 90, -90, -40, 20, 100, -100, 50, -50, -20, 15, 60, -60, 30, 70, -70, -30, -10, 10], 'Test 56');
test(findFrequentTreeSum([-10,-20,-30,-40,-50,-60,-70,-80,-90,-100,-110,-120,-130,-140,-150]), [-80, -90, -210, -100, -110, -260, -490, -120, -130, -310, -140, -150, -360, -700, -1200], 'Test 57');
test(findFrequentTreeSum([10,5,-3,3,2,null,11,3,-2,null,1,0,0,0,0]), [0], 'Test 58');
test(findFrequentTreeSum([0,1,1,1,1,1,1]), [1], 'Test 59');
test(findFrequentTreeSum([-1,-2,-3,1,2,3,4,-4,-3,-2,-1,0,1,2,3]), [-1, 0], 'Test 60');
test(findFrequentTreeSum([100,-50,50,null,50,null,-50,null,25,null,-25,null,25,null,-25]), [50, 100, -50], 'Test 61');
test(findFrequentTreeSum([10,5,15,3,7,12,20,1,2,6,8,11,13,19,21]), [6, 21], 'Test 62');
test(findFrequentTreeSum([-10,9,20,null,null,15,7]), [9, 15, 7, 42, 41], 'Test 63');
test(findFrequentTreeSum([-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10]), [-10], 'Test 64');
test(findFrequentTreeSum([-10,-5,0,5,10]), [10, 0], 'Test 65');
test(findFrequentTreeSum([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20]), [-46], 'Test 66');
test(findFrequentTreeSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), [16, 17, 41, 18, 19, 46, 91, 20, 21, 51, 22, 23, 56, 112, 205, 24, 25, 61, 26, 27, 66, 133, 28, 29, 71, 30, 45, 123, 259, 465], 'Test 67');
test(findFrequentTreeSum([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15]), [-8, -9, -21, -10, -11, -26, -49, -12, -13, -31, -14, -15, -36, -70, -120], 'Test 68');
test(findFrequentTreeSum([0,1,1,0,0,0,1,-1,null,-1,null,null,null,-1]), [-1], 'Test 69');
test(findFrequentTreeSum([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25,null,26,null,27,null,28,null,29,null,30,null,31,null,32,null,33,null,34,null,35,null,36,null,37,null,38,null,39,null,40]), [40, 79, 117, 154, 190, 225, 259, 292, 324, 355, 385, 414, 442, 469, 495, 520, 544, 567, 589, 610, 630, 649, 667, 684, 700, 715, 729, 742, 754, 765, 775, 784, 792, 799, 805, 810, 814, 817, 819, 820], 'Test 70');
test(findFrequentTreeSum([5,2,-5,1,-4,0,-6,2,-1,-3,-5,0,0,0,0]), [0], 'Test 71');
test(findFrequentTreeSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [46], 'Test 72');
test(findFrequentTreeSum([1,2,3,4,null,6,7,8,9,10,11,null,null,14,15,null,null,18,null,20]), [14, 15, 37, 9, 50, 52, 18, 28, 20, 31, 65, 7, 75, 128], 'Test 73');
test(findFrequentTreeSum([1,2,2,3,4,3,4,5,6,7,8,9,10,11,12]), [5, 6, 14, 7, 8, 19, 35, 9, 10, 22, 11, 12, 27, 51, 87], 'Test 74');
test(findFrequentTreeSum([100,-50,-50,25,25,-25,-25,12,-12,12,-12,12,-12,12,-12]), [12, -12], 'Test 75');
test(findFrequentTreeSum([0,1,-1,2,-2,3,-3,4,-4,5,-5,6,-6,7,-7,8,-8,9,-9,10,-10]), [8, -8, 4, 9, -9, -4, 2, 10, -10, 5, -5, -2, 1, 6, -6, 3, 7, -7, -3, -1, 0], 'Test 76');
test(findFrequentTreeSum([10,-10,0,5,-5,5,-5,3,-3,3,-3,3,-3,3,-3]), [3, -3], 'Test 77');
test(findFrequentTreeSum([5,2,-5,1,3,null,-2,4,null,-1,null,2]), [2, 9], 'Test 78');
test(findFrequentTreeSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [8, 9, 21, 10, 11, 26, 49, 12, 13, 31, 14, 15, 36, 70, 120], 'Test 79');
test(findFrequentTreeSum([10,15,3,7,-2,9,12,-1,4]), [-1, 4, 10, -2, 23, 9, 12, 24, 57], 'Test 80');
test(findFrequentTreeSum([1,2,2,3,3,3,3,4,4,4,4,4,4,4,4]), [4], 'Test 81');
test(findFrequentTreeSum([10,10,-10,10,-10,10,-10]), [10], 'Test 82');
test(findFrequentTreeSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), [0], 'Test 83');
test(findFrequentTreeSum([1,-1,0,1,0,-1,1,0,0,0,0,0,0,0,0]), [0], 'Test 84');

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
