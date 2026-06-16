// Test: 2095. Delete The Middle Node Of A Linked List
// 58 test cases from LeetCodeDataset
// Run: node test.js

const { deleteMiddle } = require("./solution");

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

console.log("\n2095. Delete The Middle Node Of A Linked List\n");

test(deleteMiddle([1,2,3]), [1, 3], 'Test 1');
test(deleteMiddle([2,1]), [2], 'Test 2');
test(deleteMiddle([1]), null, 'Test 3');
test(deleteMiddle([1,2,3,4,5,6,7,8,9,10]), [1, 2, 3, 4, 5, 7, 8, 9, 10], 'Test 4');
test(deleteMiddle([1,2]), [1], 'Test 5');
test(deleteMiddle([1,2,3,4,5]), [1, 2, 4, 5], 'Test 6');
test(deleteMiddle([1,2,3,4]), [1, 2, 4], 'Test 7');
test(deleteMiddle([1,3,4,7,1,2,6]), [1, 3, 4, 1, 2, 6], 'Test 8');
test(deleteMiddle([1,2,3,4,5,6]), [1, 2, 3, 5, 6], 'Test 9');
test(deleteMiddle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], 'Test 10');
test(deleteMiddle([7,7,7,7,7,7,7,7,7,7]), [7, 7, 7, 7, 7, 7, 7, 7, 7], 'Test 11');
test(deleteMiddle([5,4,3,2,1]), [5, 4, 2, 1], 'Test 12');
test(deleteMiddle([1,1,1,1,1,1,1,1,1,1]), [1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 13');
test(deleteMiddle([1,3,5,7,9,11,13,15,17,19,21]), [1, 3, 5, 7, 9, 13, 15, 17, 19, 21], 'Test 14');
test(deleteMiddle([5,5,5,5,5,5,5,5,5,5,5,5]), [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'Test 15');
test(deleteMiddle([10,9,8,7,6,5,4,3,2,1]), [10, 9, 8, 7, 6, 4, 3, 2, 1], 'Test 16');
test(deleteMiddle([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 17');
test(deleteMiddle([5,10,15,20,25,30,35,40,45,50,55,60]), [5, 10, 15, 20, 25, 30, 40, 45, 50, 55, 60], 'Test 18');
test(deleteMiddle([100000,99999,99998,99997,99996,99995,99994,99993,99992,99991]), [100000, 99999, 99998, 99997, 99996, 99994, 99993, 99992, 99991], 'Test 19');
test(deleteMiddle([31,29,27,25,23,21,19,17,15,13,11,9,7,5,3,1]), [31, 29, 27, 25, 23, 21, 19, 17, 13, 11, 9, 7, 5, 3, 1], 'Test 20');
test(deleteMiddle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 21');
test(deleteMiddle([1,2,3,4,5,6,7,8,9]), [1, 2, 3, 4, 6, 7, 8, 9], 'Test 22');
test(deleteMiddle([1,1,1,1,1,1,1,1,1,1,1,1,1]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 23');
test(deleteMiddle([1,3,5,7,9,11,13,15,17,19,21,23,25]), [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25], 'Test 24');
test(deleteMiddle([1,2,3,4,5,6,7,8,9,10,11]), [1, 2, 3, 4, 5, 7, 8, 9, 10, 11], 'Test 25');
test(deleteMiddle([1000,2000,3000,4000,5000,6000,7000,8000,9000,10000]), [1000, 2000, 3000, 4000, 5000, 7000, 8000, 9000, 10000], 'Test 26');
test(deleteMiddle([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 27');
test(deleteMiddle([1,2,3,4,5,6,7,8]), [1, 2, 3, 4, 6, 7, 8], 'Test 28');
test(deleteMiddle([1,2,2,1]), [1, 2, 1], 'Test 29');
test(deleteMiddle([10,20,30,40,50,60,70,80,90,100]), [10, 20, 30, 40, 50, 70, 80, 90, 100], 'Test 30');
test(deleteMiddle([21,19,17,15,13,11,9,7,5,3,1]), [21, 19, 17, 15, 13, 9, 7, 5, 3, 1], 'Test 31');
test(deleteMiddle([5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), [5, 4, 3, 2, 1, 0, -1, -2, -4, -5, -6, -7, -8, -9, -10], 'Test 32');
test(deleteMiddle([5]), null, 'Test 33');
test(deleteMiddle([100000, 99999, 99998, 99997, 99996, 99995]), [100000, 99999, 99998, 99996, 99995], 'Test 34');
test(deleteMiddle([1,3,4,7,1,2,6,8]), [1, 3, 4, 7, 2, 6, 8], 'Test 35');
test(deleteMiddle([9,8,7,6,5,4,3,2,1,0,-1,-2]), [9, 8, 7, 6, 5, 4, 2, 1, 0, -1, -2], 'Test 36');
test(deleteMiddle([100000,100000,100000,100000,100000,100000,100000,100000,100000,100000]), [100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000], 'Test 37');
test(deleteMiddle([21,21,21,21,21,21,21,21,21,21,21,21,21,21,21]), [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21], 'Test 38');
test(deleteMiddle([5,3,1,4,7,6,2,8,9]), [5, 3, 1, 4, 6, 2, 8, 9], 'Test 39');
test(deleteMiddle([1,2,3,4,5,6,7,8,9,10,11,12]), [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12], 'Test 40');
test(deleteMiddle([5,4,3,2,1,0,-1,-2,-3,-4,-5]), [5, 4, 3, 2, 1, -1, -2, -3, -4, -5], 'Test 41');
test(deleteMiddle([1,2,3,4,5,6,7,8,9,10,11,12,13]), [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13], 'Test 42');
test(deleteMiddle([10,20,30,40,50,60,70,80,90,100,110]), [10, 20, 30, 40, 50, 70, 80, 90, 100, 110], 'Test 43');
test(deleteMiddle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15], 'Test 44');
test(deleteMiddle([1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 45');
test(deleteMiddle([10,20,30,40,50,60,70,80]), [10, 20, 30, 40, 60, 70, 80], 'Test 46');
test(deleteMiddle([9,8,7,6,5,4,3,2,1]), [9, 8, 7, 6, 4, 3, 2, 1], 'Test 47');
test(deleteMiddle([1,3,5,7,9,11,13,15,17]), [1, 3, 5, 7, 11, 13, 15, 17], 'Test 48');
test(deleteMiddle([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]), [2, 4, 6, 8, 10, 12, 14, 18, 20, 22, 24, 26, 28, 30], 'Test 49');
test(deleteMiddle([1,1,1,1,1,1,1,1,2,1,1,1,1,1,1]), [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1], 'Test 50');
test(deleteMiddle([9,8,7,6,5,4,3,2,1,0]), [9, 8, 7, 6, 5, 3, 2, 1, 0], 'Test 51');
test(deleteMiddle([1,2,3,2,1]), [1, 2, 2, 1], 'Test 52');
test(deleteMiddle([1,3,5,7,9,11,13,15,17,19]), [1, 3, 5, 7, 9, 13, 15, 17, 19], 'Test 53');
test(deleteMiddle([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 'Test 54');
test(deleteMiddle([99,88,77,66,55,44,33,22,11]), [99, 88, 77, 66, 44, 33, 22, 11], 'Test 55');
test(deleteMiddle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 'Test 56');
test(deleteMiddle([5,3,8,6,2,9,1,7,4]), [5, 3, 8, 6, 9, 1, 7, 4], 'Test 57');
test(deleteMiddle([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), [1, 3, 5, 7, 9, 11, 13, 17, 19, 21, 23, 25, 27, 29], 'Test 58');

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
