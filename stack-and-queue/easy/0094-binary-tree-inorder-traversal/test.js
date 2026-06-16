// Test: 94. Binary Tree Inorder Traversal
// 81 test cases from LeetCodeDataset
// Run: node test.js

const { inorderTraversal } = require("./solution");

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

console.log("\n94. Binary Tree Inorder Traversal\n");

test(inorderTraversal([1,2,3,4,5,null,8,null,null,6,7,9]), [4, 2, 6, 5, 7, 1, 3, 9, 8], 'Test 1');
test(inorderTraversal([1]), [1], 'Test 2');
test(inorderTraversal([1,null,2,3]), [1, 3, 2], 'Test 3');
test(inorderTraversal([]), [], 'Test 4');
test(inorderTraversal([25,15,35,10,20,30,40,5,12,null,18,28,32,null,45]), [5, 10, 12, 15, 20, 18, 25, 28, 30, 32, 35, 40, 45], 'Test 5');
test(inorderTraversal([3,1,4,null,2,null,null]), [1, 2, 3, 4], 'Test 6');
test(inorderTraversal([10,5,15,null,null,6,20]), [5, 10, 6, 15, 20], 'Test 7');
test(inorderTraversal([10,5,15,3,7,null,18]), [3, 5, 7, 10, 15, 18], 'Test 8');
test(inorderTraversal([5,3,7,2,4,6,8,1]), [1, 2, 3, 4, 5, 6, 7, 8], 'Test 9');
test(inorderTraversal([1,null,2,null,null,3,null,4,null,null,5]), [1, 2], 'Test 10');
test(inorderTraversal([8,3,10,1,6,null,14,null,null,4,7,13]), [1, 3, 4, 6, 7, 8, 10, 13, 14], 'Test 11');
test(inorderTraversal([6,2,8,0,4,7,9,null,null,3,5]), [0, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 12');
test(inorderTraversal([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 13');
test(inorderTraversal([5,3,7,2,4,6,8,1,null,null,null,null,9]), [1, 2, 3, 4, 5, 6, 9, 7, 8], 'Test 14');
test(inorderTraversal([20,10,30,5,15,25,35,2,7,12,18,23,27,32,37,1,3,6,8,11,13,16,19,22,24,26,28,31,33,36,38]), [1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 30, 31, 32, 33, 35, 36, 37, 38], 'Test 15');
test(inorderTraversal([1,2,null,null,3,null,4,null,5]), [2, 3, 4, 5, 1], 'Test 16');
test(inorderTraversal([50,25,75,10,35,60,90,5,20,30,40,55,65,85,100]), [5, 10, 20, 25, 30, 35, 40, 50, 55, 60, 65, 75, 85, 90, 100], 'Test 17');
test(inorderTraversal([8,5,12,4,6,10,14,2,null,null,7,9,11,13,15]), [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 18');
test(inorderTraversal([50,30,70,20,40,60,80,15,25,null,null,null,null,null,90]), [15, 20, 25, 30, 40, 50, 60, 70, 80, 90], 'Test 19');
test(inorderTraversal([5,1,8,null,4,null,null,null,3,null,6]), [1, 4, 3, 6, 5, 8], 'Test 20');
test(inorderTraversal([30,15,45,10,20,40,50,5,12,null,25,35,47,null,null,11,14,23,37,null,null,null,null,48,null,49,51]), [49, 11, 51, 5, 14, 10, 23, 12, 37, 15, 20, 25, 30, 35, 40, 48, 47, 45, 50], 'Test 21');
test(inorderTraversal([9,6,15,5,8,12,20,2,7,null,11,14,18,1,null,null,4,null,null,null,null,10,13,null,null,null,null,null,null,null,16,17,19,null,null,null,null,null,null,null,21,null,null,null,null,null,null,22]), [2, 4, 5, 7, 6, 8, 11, 9, 10, 16, 14, 17, 13, 19, 12, 18, 15, 1, 20], 'Test 22');
test(inorderTraversal([5,3,7,2,4,6,8,1,null,null,null,null,null,9,null]), [1, 2, 3, 4, 5, 6, 7, 9, 8], 'Test 23');
test(inorderTraversal([20,10,30,5,15,25,35,2,7,null,17,22,28,32,38]), [2, 5, 7, 10, 15, 17, 20, 22, 25, 28, 30, 32, 35, 38], 'Test 24');
test(inorderTraversal([3,1,2]), [1, 3, 2], 'Test 25');
test(inorderTraversal([8,5,10,3,6,null,12,null,null,null,null,11,14]), [3, 5, 6, 8, 10, 11, 12, 14], 'Test 26');
test(inorderTraversal([7,3,15,null,null,9,20]), [3, 7, 9, 15, 20], 'Test 27');
test(inorderTraversal([100,-50,null,-100,null,-75,null,-150,null,-200,null,-175,null,-225]), [-225, -175, -200, -150, -75, -100, -50, 100], 'Test 28');
test(inorderTraversal([5,4,6,null,3,null,null,null,2]), [4, 3, 2, 5, 6], 'Test 29');
test(inorderTraversal([5,3,8,1,4,7,9,0,2,6,null,null,10]), [0, 1, 2, 3, 6, 4, 5, 7, 10, 8, 9], 'Test 30');
test(inorderTraversal([2,1,3,4,5]), [4, 1, 5, 2, 3], 'Test 31');
test(inorderTraversal([7,3,15,null,null,null,20]), [3, 7, 15, 20], 'Test 32');
test(inorderTraversal([2,1,null,4,3]), [4, 1, 3, 2], 'Test 33');
test(inorderTraversal([2,1,3,4,5,null,null,null,null,null,6,7]), [4, 1, 5, 7, 6, 2, 3], 'Test 34');
test(inorderTraversal([7,3,9,null,4,8,10]), [3, 4, 7, 8, 9, 10], 'Test 35');
test(inorderTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [16, 8, 17, 4, 18, 9, 19, 2, 20, 10, 5, 11, 1, 12, 6, 13, 3, 14, 7, 15], 'Test 36');
test(inorderTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [8, 4, 9, 2, 10, 5, 11, 1, 12, 6, 13, 3, 14, 7, 15], 'Test 37');
test(inorderTraversal([20,10,30,5,15,25,35,1,7,null,17,22,27,32,40]), [1, 5, 7, 10, 15, 17, 20, 22, 25, 27, 30, 32, 35, 40], 'Test 38');
test(inorderTraversal([1,null,2,null,null,3,null,null,null,4,null,null,null,5]), [1, 2], 'Test 39');
test(inorderTraversal([7,3,15,null,null,9,20,null,null,null,null,17]), [3, 7, 9, 15, 20], 'Test 40');
test(inorderTraversal([1,2,3,4,5,6,7]), [4, 2, 5, 1, 6, 3, 7], 'Test 41');
test(inorderTraversal([1,null,2,null,3,null,4,null,5]), [1, 2, 3, 4, 5], 'Test 42');
test(inorderTraversal([10,5,15,3,7,null,18,1,null,null,6]), [1, 3, 5, 7, 6, 10, 15, 18], 'Test 43');
test(inorderTraversal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), [16, 8, 17, 4, 18, 9, 19, 2, 20, 10, 21, 5, 22, 11, 23, 1, 24, 12, 25, 6, 13, 3, 14, 7, 15], 'Test 44');
test(inorderTraversal([50,25,75,10,30,60,80,5,15,27,35,55,65,77,85]), [5, 10, 15, 25, 27, 30, 35, 50, 55, 60, 65, 75, 77, 80, 85], 'Test 45');
test(inorderTraversal([-10,-20,-30,-40,null,-50,-60]), [-40, -20, -10, -50, -30, -60], 'Test 46');
test(inorderTraversal([1,null,2,null,3,null,4]), [1, 2, 3, 4], 'Test 47');
test(inorderTraversal([7,3,15,null,null,9,20,null,8,17,22]), [3, 7, 9, 8, 15, 17, 20, 22], 'Test 48');
test(inorderTraversal([2,1,3,null,4,null,null,null,5]), [1, 4, 5, 2, 3], 'Test 49');
test(inorderTraversal([7,3,15,null,null,null,9]), [3, 7, 15, 9], 'Test 50');
test(inorderTraversal([25,15,30,10,20,27,35,5,12,18,23,26,29,32,40]), [5, 10, 12, 15, 18, 20, 23, 25, 26, 27, 29, 30, 32, 35, 40], 'Test 51');
test(inorderTraversal([8,3,10,null,1,6,null,4,7,11,14]), [3, 4, 1, 7, 8, 11, 6, 14, 10], 'Test 52');
test(inorderTraversal([5,3,8,1,4,null,10,0,2,null,null,9,11]), [0, 1, 2, 3, 4, 5, 8, 9, 10, 11], 'Test 53');
test(inorderTraversal([25,15,35,10,20,30,40,5,12,18,23,27,32,37,42,47,1,7,11,13,17,22,24,26,28,31,33,36,38,41,43,46,48]), [46, 47, 48, 5, 1, 10, 7, 12, 11, 15, 13, 18, 17, 20, 22, 23, 24, 25, 26, 27, 28, 30, 31, 32, 33, 35, 36, 37, 38, 40, 41, 42, 43], 'Test 54');
test(inorderTraversal([5,3,8,1,4,7,9]), [1, 3, 4, 5, 7, 8, 9], 'Test 55');
test(inorderTraversal([5,1,4,null,null,3,6]), [1, 5, 3, 4, 6], 'Test 56');
test(inorderTraversal([100,50,150,25,75,125,175,10,35,60,90,110,140,160,190]), [10, 25, 35, 50, 60, 75, 90, 100, 110, 125, 140, 150, 160, 175, 190], 'Test 57');
test(inorderTraversal([10,5,15,null,null,12,20,11,14,13,18,17,19,16]), [5, 10, 17, 11, 19, 12, 16, 14, 15, 13, 20, 18], 'Test 58');
test(inorderTraversal([30,15,45,10,20,40,50,5,12,18,25,35,42,48,55,1,7,11,13,17,23,27,33,37,41,43,47,51,53,57]), [1, 5, 7, 10, 11, 12, 13, 15, 17, 18, 23, 20, 27, 25, 33, 30, 37, 35, 41, 40, 43, 42, 47, 45, 51, 48, 53, 50, 57, 55], 'Test 59');
test(inorderTraversal([1,null,2,null,null,null,3]), [1, 2], 'Test 60');
test(inorderTraversal([1,2,null,3,null,4,null,5,null,6,null,7]), [7, 6, 5, 4, 3, 2, 1], 'Test 61');
test(inorderTraversal([20,10,30,5,15,25,35,3,7,13,17,23,27,33,37]), [3, 5, 7, 10, 13, 15, 17, 20, 23, 25, 27, 30, 33, 35, 37], 'Test 62');
test(inorderTraversal([10,5,15,3,7,13,18,1,null,6]), [1, 3, 5, 6, 7, 10, 13, 15, 18], 'Test 63');
test(inorderTraversal([3,1,4,null,2]), [1, 2, 3, 4], 'Test 64');
test(inorderTraversal([4,2,6,1,3,5,7,0,null,null,null,null,null,null,8]), [0, 1, 2, 3, 4, 5, 6, 7, 8], 'Test 65');
test(inorderTraversal([1,3,2,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99]), [61, 29, 63, 13, 65, 31, 67, 5, 69, 33, 71, 15, 73, 35, 75, 3, 77, 37, 79, 17, 81, 39, 83, 7, 85, 41, 87, 19, 89, 43, 91, 1, 93, 45, 95, 21, 97, 47, 99, 9, 49, 23, 51, 2, 53, 25, 55, 11, 57, 27, 59], 'Test 66');
test(inorderTraversal([10,5,15,null,null,6,20,null,null,11,18,16,25]), [5, 10, 6, 15, 16, 11, 25, 20, 18], 'Test 67');
test(inorderTraversal([1,null,2,null,3,null,4,null,5,null,6]), [1, 2, 3, 4, 5, 6], 'Test 68');
test(inorderTraversal([8,5,15,3,7,12,18,1,4,6,9,11,13,17,19]), [1, 3, 4, 5, 6, 7, 9, 8, 11, 12, 13, 15, 17, 18, 19], 'Test 69');
test(inorderTraversal([40,20,60,10,30,50,70,5,15,25,35,45,55,65,75,2,7,12,18,23,27,32,37,42,47,52,57,62,67,72,77,1,3,6,8,11,13,16,19,22,24,26,28,31,33,36,38,41,43,46,48,51,53,56,58,61,63,66,68,71,73,76,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]), [79, 1, 80, 2, 81, 3, 82, 5, 83, 6, 84, 7, 85, 8, 86, 10, 87, 11, 88, 12, 89, 13, 90, 15, 91, 16, 92, 18, 93, 19, 94, 20, 95, 22, 96, 23, 97, 24, 98, 25, 99, 26, 27, 28, 30, 31, 32, 33, 35, 36, 37, 38, 40, 41, 42, 43, 45, 46, 47, 48, 50, 51, 52, 53, 55, 56, 57, 58, 60, 61, 62, 63, 65, 66, 67, 68, 70, 71, 72, 73, 75, 76, 77, 78], 'Test 70');
test(inorderTraversal([4,2,6,1,3,5,7]), [1, 2, 3, 4, 5, 6, 7], 'Test 71');
test(inorderTraversal([10,null,15,12,20,null,null,11,14,13,18,null,null,null,null,null,19,17]), [10, 12, 15, 13, 11, 18, 17, 19, 20, 14], 'Test 72');
test(inorderTraversal([1,null,2,null,null,3,null,null,null,4,null,null,null,5,null,null,null,6,null,null,null,7]), [1, 2], 'Test 73');
test(inorderTraversal([8,5,12,4,6,9,13,2,null,null,7,8,11,10]), [2, 4, 5, 6, 7, 8, 8, 9, 11, 12, 10, 13], 'Test 74');
test(inorderTraversal([3,1,4,null,2,null,null,null,null,null,5]), [1, 2, 3, 4], 'Test 75');
test(inorderTraversal([100,-100,null,-99,null,-98,null,-97,null,-96,null,-95,null,-94,null,-93,null,-92,null,-91,null,-90,null,-89,null,-88,null,-87,null,-86,null,-85,null,-84,null,-83,null,-82,null,-81,null,-80,null,-79,null,-78,null,-77,null,-76,null,-75,null,-74,null,-73,null,-72,null,-71,null,-70,null,-69,null,-68,null,-67,null,-66,null,-65,null,-64,null,-63,null,-62,null,-61,null,-60,null,-59,null,-58,null,-57,null,-56,null,-55,null,-54,null,-53,null,-52,null,-51,null,-50,null,-49,null,-48,null,-47,null,-46,null,-45,null,-44,null,-43,null,-42,null,-41,null,-40,null,-39,null,-38,null,-37,null,-36,null,-35,null,-34,null,-33,null,-32,null,-31,null,-30,null,-29,null,-28,null,-27,null,-26,null,-25,null,-24,null,-23,null,-22,null,-21,null,-20,null,-19,null,-18,null,-17,null,-16,null,-15,null,-14,null,-13,null,-12,null,-11,null,-10,null,-9,null,-8,null,-7,null,-6,null,-5,null,-4,null,-3,null,-2,null,-1]), [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20, -21, -22, -23, -24, -25, -26, -27, -28, -29, -30, -31, -32, -33, -34, -35, -36, -37, -38, -39, -40, -41, -42, -43, -44, -45, -46, -47, -48, -49, -50, -51, -52, -53, -54, -55, -56, -57, -58, -59, -60, -61, -62, -63, -64, -65, -66, -67, -68, -69, -70, -71, -72, -73, -74, -75, -76, -77, -78, -79, -80, -81, -82, -83, -84, -85, -86, -87, -88, -89, -90, -91, -92, -93, -94, -95, -96, -97, -98, -99, -100, 100], 'Test 76');
test(inorderTraversal([4,2,null,1,3]), [1, 2, 3, 4], 'Test 77');
test(inorderTraversal([15,10,20,8,12,16,25,6,9,11,13,14,17,22,28,5,7,null,null,null,null,null,null,18,21,23,24,26,27,null,null,null,null,null,null,19]), [5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 19, 18, 14, 21, 16, 23, 17, 24, 20, 26, 22, 27, 25, 28], 'Test 78');
test(inorderTraversal([3,1,5,0,2,4,6]), [0, 1, 2, 3, 4, 5, 6], 'Test 79');
test(inorderTraversal([25,15,35,10,20,30,40,5,12,null,22,28,38,null,null,null,14,null,18,null,32,null,null,null,null,29,null,33]), [5, 29, 14, 10, 12, 33, 18, 15, 20, 22, 32, 25, 28, 30, 38, 35, 40], 'Test 80');
test(inorderTraversal([8,3,10,1,5,null,14,null,null,4,7,12,15,11,13]), [1, 3, 11, 4, 13, 5, 7, 8, 10, 12, 14, 15], 'Test 81');

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
