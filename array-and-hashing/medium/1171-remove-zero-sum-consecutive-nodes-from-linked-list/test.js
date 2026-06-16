// Test: 1171. Remove Zero Sum Consecutive Nodes From Linked List
// 119 test cases from LeetCodeDataset
// Run: node test.js

const { removeZeroSumSublists } = require("./solution");

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

console.log("\n1171. Remove Zero Sum Consecutive Nodes From Linked List\n");

test(removeZeroSumSublists([0,0,0,0]), null, 'Test 1');
test(removeZeroSumSublists([1,0,1,-1,2]), [1, 2], 'Test 2');
test(removeZeroSumSublists([1,2,3,4,5]), [1, 2, 3, 4, 5], 'Test 3');
test(removeZeroSumSublists([10,20,-30,40,-50,60,-10,-50]), [40, -50], 'Test 4');
test(removeZeroSumSublists([1,-1,1,-1]), null, 'Test 5');
test(removeZeroSumSublists([1,2,3,-3,4]), [1, 2, 4], 'Test 6');
test(removeZeroSumSublists([1,-1,2,-2,3]), [3], 'Test 7');
test(removeZeroSumSublists([-1,1,-1,1,-1,1]), null, 'Test 8');
test(removeZeroSumSublists([1]), [1], 'Test 9');
test(removeZeroSumSublists([-1,1,0]), null, 'Test 10');
test(removeZeroSumSublists([1,-1,2,-2,3,-3,4,-4]), null, 'Test 11');
test(removeZeroSumSublists([1,0,-1,2]), [2], 'Test 12');
test(removeZeroSumSublists([-1,1]), null, 'Test 13');
test(removeZeroSumSublists([10,5,-5,3,2,-2]), [10, 3], 'Test 14');
test(removeZeroSumSublists([-1,1,-1,1,-1,1,-1,1]), null, 'Test 15');
test(removeZeroSumSublists([0]), null, 'Test 16');
test(removeZeroSumSublists([0,0,0]), null, 'Test 17');
test(removeZeroSumSublists([-1]), [-1], 'Test 18');
test(removeZeroSumSublists([1,2,-3,3,1]), [3, 1], 'Test 19');
test(removeZeroSumSublists([1,2,3,-3,-2]), [1], 'Test 20');
test(removeZeroSumSublists([10,5,3,-3,-5,-10]), null, 'Test 21');
test(removeZeroSumSublists([1,-1,2,-2,3,-3]), null, 'Test 22');
test(removeZeroSumSublists([1,2,3,0,4,0,-4]), [1, 2, 3], 'Test 23');
test(removeZeroSumSublists([5,6,7,-7,-6,-5]), null, 'Test 24');
test(removeZeroSumSublists([10,20,-10,-10]), [10], 'Test 25');
test(removeZeroSumSublists([1, 2, 3, 4, 5, -5, 4, -4, 3, -3, 2, -2, 1, -1]), [1, 2, 3, 4], 'Test 26');
test(removeZeroSumSublists([1,2,3,4,5,6,7,-28,8,9]), [8, 9], 'Test 27');
test(removeZeroSumSublists([1,2,3,4,-10,1,2,3,4]), [1, 2, 3, 4], 'Test 28');
test(removeZeroSumSublists([-1, 1, -2, 2, -3, 3, -4, 4, 5, -5]), null, 'Test 29');
test(removeZeroSumSublists([1, 2, 3, 4, 5, -15, 5, 6, 7, 8, -30, 10, 11]), [5, 6, 7, 8, -30, 10, 11], 'Test 30');
test(removeZeroSumSublists([1,2,3,4,5,-5,-4,-3,-2,-1]), null, 'Test 31');
test(removeZeroSumSublists([10,-5,-5,3,2,-2,1,-1]), [3], 'Test 32');
test(removeZeroSumSublists([1,2,3,-6,2,3,4,-9,1,2]), [1, 2], 'Test 33');
test(removeZeroSumSublists([1,2,3,4,5,-10,1,2,3]), [1, 2, 3, 2, 3], 'Test 34');
test(removeZeroSumSublists([1,2,3,-2,-1,1,4]), [1, 2, 1, 4], 'Test 35');
test(removeZeroSumSublists([1, 2, 3, -6, 4, -4, 5, 0, -5, 6]), [6], 'Test 36');
test(removeZeroSumSublists([1, 2, 3, 4, 5, 6, -21, 7, 8, 9, 10, -35, 11, 12]), [7, 8, 9, 10, -35, 11, 12], 'Test 37');
test(removeZeroSumSublists([1,2,3,-6,2,3,4,-9,5]), [5], 'Test 38');
test(removeZeroSumSublists([100,-50,-50,200,300,-500,400,500,-1000,600]), [400, 500, -1000, 600], 'Test 39');
test(removeZeroSumSublists([1,2,3,0,0,0,4,5,-9]), [1, 2, 3], 'Test 40');
test(removeZeroSumSublists([1, -1, 2, -2, 3, -3, 4, -4, 5]), [5], 'Test 41');
test(removeZeroSumSublists([100,-50,-50,25,-25,50,-50,25,-25,100,-100]), null, 'Test 42');
test(removeZeroSumSublists([10, -10, 20, -20, 30, -30, 40]), [40], 'Test 43');
test(removeZeroSumSublists([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, -5, 5, -3, -2]), [1], 'Test 44');
test(removeZeroSumSublists([0,0,0,1,2,-3,3,-2,2]), [3], 'Test 45');
test(removeZeroSumSublists([1, 2, 3, -3, -2, -1, 4, -4, 5]), [5], 'Test 46');
test(removeZeroSumSublists([1,-1,2,-2,3,-3,4,-4,5]), [5], 'Test 47');
test(removeZeroSumSublists([1,-2,3,-3,2,-1,4,-4,5,-5]), null, 'Test 48');
test(removeZeroSumSublists([0, 1, 2, 3, 0, -3, -2, -1, 0]), null, 'Test 49');
test(removeZeroSumSublists([1, 2, -3, 3, -2, 2, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8]), [3], 'Test 50');
test(removeZeroSumSublists([10,-10,20,-20,30,-30,40]), [40], 'Test 51');
test(removeZeroSumSublists([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-120,16]), [16], 'Test 52');
test(removeZeroSumSublists([1,2,3,4,-5,5,-6,6,-7,7,8]), [1, 2, 7, 8], 'Test 53');
test(removeZeroSumSublists([1,2,3,4,-10,5,5,-5]), [5], 'Test 54');
test(removeZeroSumSublists([1,-1,1,-1,1,-1,1,-1]), null, 'Test 55');
test(removeZeroSumSublists([1,0,-1,0,1,0,-1,0,1]), [1], 'Test 56');
test(removeZeroSumSublists([5,1,4,-10,20,-5,-15,2,3,4,-9,1]), [1], 'Test 57');
test(removeZeroSumSublists([1,2,3,4,-10,5,6,7,8,-30,9,10]), [5, 10], 'Test 58');
test(removeZeroSumSublists([10,-2,3,-1,5,-3,2,-2,1,-1]), [10, 5, -3], 'Test 59');
test(removeZeroSumSublists([1,2,3,4,5,6,-3,-5,-10,20]), [1, 2, 20], 'Test 60');
test(removeZeroSumSublists([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9]), null, 'Test 61');
test(removeZeroSumSublists([5, 3, -5, 2, -2, 1]), [5, -2, 1], 'Test 62');
test(removeZeroSumSublists([5,6,-6,7,8,-15,9]), [5, 9], 'Test 63');
test(removeZeroSumSublists([1,2,3,4,5,6,-21,7,8,9,10,-35,1,2,3]), [2, 3], 'Test 64');
test(removeZeroSumSublists([1,2,3,4,-10,5,5]), [5, 5], 'Test 65');
test(removeZeroSumSublists([1, 2, 3, 4, 5, -5, -4, -3, -2, -1, 6, 7, 8, -8, -7, -6]), null, 'Test 66');
test(removeZeroSumSublists([5,6,7,-18,19,20,-39,21,22,23,-65,24]), [21, 22, 23, -65, 24], 'Test 67');
test(removeZeroSumSublists([100,-50,-50,200,-100,-100,300,-200,-200,400]), [300], 'Test 68');
test(removeZeroSumSublists([1,-1,2,-2,3,-3,4,-4,5,-5,6,-6,7,-7,8,-8,9,-9]), null, 'Test 69');
test(removeZeroSumSublists([1,2,3,4,5,6,-21,7,8,9]), [7, 8, 9], 'Test 70');
test(removeZeroSumSublists([5, -5, 5, -5, 5, -5]), null, 'Test 71');
test(removeZeroSumSublists([0,0,0,1,2,3,-6,7,8,-15,9]), [9], 'Test 72');
test(removeZeroSumSublists([1, 2, 3, 4, -10, 3, 4, 5, -12, 6, 7]), [6, 7], 'Test 73');
test(removeZeroSumSublists([1,2,3,0,0,0,4,5]), [1, 2, 3, 4, 5], 'Test 74');
test(removeZeroSumSublists([1,2,3,4,5,-15,6,7,8,9,10,-33,11,12]), [6, 7, 8, 9], 'Test 75');
test(removeZeroSumSublists([1,2,3,4,-10,2,3,4,5,-14]), null, 'Test 76');
test(removeZeroSumSublists([5,0,5,-5,10,-10,15,-15,20]), [5, 20], 'Test 77');
test(removeZeroSumSublists([1,2,3,-3,4,-4,5]), [1, 2, 5], 'Test 78');
test(removeZeroSumSublists([0,0,0,0,0,0,0]), null, 'Test 79');
test(removeZeroSumSublists([1,2,3,4,-10,10,1,2,3,4,-10,10]), [10, 10], 'Test 80');
test(removeZeroSumSublists([0,1,2,3,4,5,-5,-4,-3,-2,-1,0]), null, 'Test 81');
test(removeZeroSumSublists([1,2,3,4,-10,5,6,7,8,9,10,-5,1,2,3,4,5,6,7,8,9,10,-50]), [5, 6, 7, 8, 9, 10], 'Test 82');
test(removeZeroSumSublists([1000, -500, -250, 250, -250, 500, -1000, 2000, -2000, 3000, -3000]), [1000, -500, -250, 500, -1000], 'Test 83');
test(removeZeroSumSublists([5, -5, 10, -10, 15, -15, 20, -20, 25]), [25], 'Test 84');
test(removeZeroSumSublists([1,2,-3,3,-2,2,1,-1]), [3], 'Test 85');
test(removeZeroSumSublists([1,2,3,-6,3,2,1,0,-1,-2,-3,0]), null, 'Test 86');
test(removeZeroSumSublists([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -55, 11, 12, 13, 14, 15, 16]), [11, 12, 13, 14, 15, 16], 'Test 87');
test(removeZeroSumSublists([5,6,-11,1,2,3,-5,-6,7]), [1, -6, 7], 'Test 88');
test(removeZeroSumSublists([1,2,3,4,5,6,7,8,9,-45]), null, 'Test 89');
test(removeZeroSumSublists([1,0,0,0,0,0,1]), [1, 1], 'Test 90');
test(removeZeroSumSublists([5,6,-11,10,5,-10]), [10, 5, -10], 'Test 91');
test(removeZeroSumSublists([1,2,3,4,5,-15,6]), [6], 'Test 92');
test(removeZeroSumSublists([1,2,3,4,5,6,7,8,9,10,-55]), null, 'Test 93');
test(removeZeroSumSublists([1,2,3,4,5,6,7,8,9,10,-55,1,2,3,4,5,6,7,8,9,10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 94');
test(removeZeroSumSublists([100,-50,25,-25,-25,25,-100,50]), null, 'Test 95');
test(removeZeroSumSublists([1,2,3,-3,4,0,5,-5,6]), [1, 2, 4, 6], 'Test 96');
test(removeZeroSumSublists([10,-3,4,-3,6,-6,2]), [10], 'Test 97');
test(removeZeroSumSublists([100,-50,50,-50,50,-50,50,-50,50,-50]), [100, -50], 'Test 98');
test(removeZeroSumSublists([1,2,3,4,5,6,7,8,9,10,-55,11,12,13,14,15,16,17,18,19,20]), [11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 99');
test(removeZeroSumSublists([1,2,3,4,5,0,-5,0,0,0,6,7,8,-20]), [1, 2, 3, 4, 6, 7, 8, -20], 'Test 100');
test(removeZeroSumSublists([1,2,3,4,5,0,0,0,0,0,0,6,7,8,-24]), [1, 2, 3, 4, 5, 6, 7, 8, -24], 'Test 101');
test(removeZeroSumSublists([7, 8, 9, -9, -8, -7, 10, -10, 11, 12, -12, -11]), null, 'Test 102');
test(removeZeroSumSublists([10,20,-10,-10,30,40,-70,80]), [10, 80], 'Test 103');
test(removeZeroSumSublists([1,2,3,4,5,6,7,8,9,10,-45,5,5,-10]), [1, 2, 3, 4], 'Test 104');
test(removeZeroSumSublists([1,2,3,4,5,6,7,8,9,-45,10,11,12,13,14,15,16,17,18,19,20,-190]), [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, -190], 'Test 105');
test(removeZeroSumSublists([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), [1], 'Test 106');
test(removeZeroSumSublists([0,0,0,0,1,2,3,4,5,-14,0,0]), [1], 'Test 107');
test(removeZeroSumSublists([1,2,3,0,0,0,4,5,-9,6,7,-13]), [1, 2, 3], 'Test 108');
test(removeZeroSumSublists([10,-5,5,-10,20,-10,5]), [20, -10, 5], 'Test 109');
test(removeZeroSumSublists([5,6,7,8,-20,3,4,5,6,-18,1,2]), [5, 6, 7, 6, -18, 1, 2], 'Test 110');
test(removeZeroSumSublists([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -45, 11, 12, 13, 14, 15, 16, -80]), [1, 2, 3, 4, 11, 12, 13, 14, 15, 16, -80], 'Test 111');
test(removeZeroSumSublists([-1,1,1,-1,1,-1,1,1,-1,-1]), null, 'Test 112');
test(removeZeroSumSublists([1,-1,2,-2,3,-3,4,-4,5,-5]), null, 'Test 113');
test(removeZeroSumSublists([1,2,3,4,-10,5,6,7,8,9,10,-40,1,2,3,4,5,6,7,8,9,10]), [5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 114');
test(removeZeroSumSublists([0,1,2,3,4,5,-15,10]), [10], 'Test 115');
test(removeZeroSumSublists([10,-5,-3,2,3,-2,1,2,-1,0,0,0]), [10, -5, 1, 2, -1], 'Test 116');
test(removeZeroSumSublists([10,20,-10,-10,30,40,-50,20]), [10, 30, 40, -50, 20], 'Test 117');
test(removeZeroSumSublists([1,2,3,4,5,-1,0,1,-1,0]), [1, 2, 3, 4, 5, -1], 'Test 118');
test(removeZeroSumSublists([-1,1,-2,2,-3,3,-4,4,5,-5]), null, 'Test 119');

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
