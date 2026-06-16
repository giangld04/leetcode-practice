// Test: 122. Best Time To Buy And Sell Stock Ii
// 125 test cases from LeetCodeDataset
// Run: node test.js

const { maxProfit } = require("./solution");

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

console.log("\n122. Best Time To Buy And Sell Stock Ii\n");

test(maxProfit([1,1,1,1,1,1,1]), 0, 'Test 1');
test(maxProfit([1,2,2,3,4,4,5]), 4, 'Test 2');
test(maxProfit([10,9,8,7,6,5,4,3,2,1]), 0, 'Test 3');
test(maxProfit([1,2,1,2,1,2,1]), 3, 'Test 4');
test(maxProfit([6,5,4,3,2,1]), 0, 'Test 5');
test(maxProfit([1,9,6,9,1,7,1,1,5,9,9,9]), 25, 'Test 6');
test(maxProfit([1,2,2,3,0,4]), 6, 'Test 7');
test(maxProfit([1,2]), 1, 'Test 8');
test(maxProfit([1]), 0, 'Test 9');
test(maxProfit([1,3,2,8,4,9]), 13, 'Test 10');
test(maxProfit([7,1,5,3,6,4]), 7, 'Test 11');
test(maxProfit([3,2,6,5,0,3]), 7, 'Test 12');
test(maxProfit([1,2,2,3,4,5]), 4, 'Test 13');
test(maxProfit([10,9,8,2]), 0, 'Test 14');
test(maxProfit([1,100]), 99, 'Test 15');
test(maxProfit([1,9,6,9,1,7,1,1,5,9,9,9,8,9]), 26, 'Test 16');
test(maxProfit([7,6,4,3,1]), 0, 'Test 17');
test(maxProfit([1,2,3,2,1,2,3,4,5,6]), 7, 'Test 18');
test(maxProfit([3,3,5,0,0,3,1,4]), 8, 'Test 19');
test(maxProfit([1,1,1,1,1]), 0, 'Test 20');
test(maxProfit([1,2,3,4,5]), 4, 'Test 21');
test(maxProfit([7,1,5,3,6,4,2,8,3,10,2,5,8,12]), 30, 'Test 22');
test(maxProfit([1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6, 5, 6, 7, 6, 7, 8, 7, 8, 9, 8, 9, 10]), 16, 'Test 23');
test(maxProfit([1,1,1,1,1,1,1,1,1,1]), 0, 'Test 24');
test(maxProfit([30,28,25,22,20,18,15,13,10,8,5,3,1,0,2,4,6,8]), 8, 'Test 25');
test(maxProfit([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 12, 'Test 26');
test(maxProfit([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]), 15, 'Test 27');
test(maxProfit([2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15]), 26, 'Test 28');
test(maxProfit([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 0, 'Test 29');
test(maxProfit([100, 101, 102, 98, 97, 96, 100, 105, 110, 108, 107, 109, 112, 115, 118, 120, 119, 117, 116, 115, 114, 113, 112, 111, 110, 109]), 29, 'Test 30');
test(maxProfit([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10]), 19, 'Test 31');
test(maxProfit([7, 1, 5, 3, 6, 4, 10, 8, 12, 15, 10, 18, 14, 20, 25, 22, 27, 30]), 47, 'Test 32');
test(maxProfit([5, 2, 4, 9, 8, 10, 3, 2, 6, 4, 8]), 17, 'Test 33');
test(maxProfit([8,6,4,6,8,7,4,12,14,13,11,10,8,6,4,2,0]), 14, 'Test 34');
test(maxProfit([1, 5, 3, 8, 12, 4, 7, 15, 10, 18, 14, 20, 25, 22, 27, 30]), 51, 'Test 35');
test(maxProfit([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]), 48, 'Test 36');
test(maxProfit([5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), 8, 'Test 37');
test(maxProfit([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 38');
test(maxProfit([5,3,2,6,7,8,4,5,6,1,2,3]), 10, 'Test 39');
test(maxProfit([5,2,3,7,6,1,8,4,9]), 17, 'Test 40');
test(maxProfit([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 0, 'Test 41');
test(maxProfit([10, 7, 5, 8, 11, 9]), 6, 'Test 42');
test(maxProfit([8, 6, 4, 2, 0, 2, 4, 6, 8, 10, 12, 14, 16]), 16, 'Test 43');
test(maxProfit([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 44');
test(maxProfit([8,6,4,3,3,2,3,5,0,0,1,8]), 11, 'Test 45');
test(maxProfit([1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2]), 10, 'Test 46');
test(maxProfit([80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]), 0, 'Test 47');
test(maxProfit([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 10, 'Test 48');
test(maxProfit([1,3,2,5,7,8,9,10,12,11,13,15,14,16,17]), 19, 'Test 49');
test(maxProfit([1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9]), 8, 'Test 50');
test(maxProfit([10,9,8,2,3,6,8,5,8,10]), 11, 'Test 51');
test(maxProfit([5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8]), 8, 'Test 52');
test(maxProfit([5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 53');
test(maxProfit([5,3,5,10,4,8,2,6,7,2,3,1,5,9,10,3,2,1,5,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 44, 'Test 54');
test(maxProfit([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 0, 'Test 55');
test(maxProfit([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 0, 'Test 56');
test(maxProfit([10,7,5,8,11,9,12,10,14,13,15]), 15, 'Test 57');
test(maxProfit([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11,13,12,14,13,15,14]), 26, 'Test 58');
test(maxProfit([1, 2, 3, 2, 4, 5, 3, 6, 7, 5, 8, 9, 7, 10, 11, 9]), 17, 'Test 59');
test(maxProfit([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2]), 1, 'Test 60');
test(maxProfit([7, 1, 3, 4, 6, 2, 5, 7, 8, 1, 9, 11, 13, 10]), 23, 'Test 61');
test(maxProfit([2,1,2,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5]), 26, 'Test 62');
test(maxProfit([1,5,1,3,1,5,1,3,1,5]), 16, 'Test 63');
test(maxProfit([1, 2, 2, 3, 0, 1, 2, 1, 2, 3]), 6, 'Test 64');
test(maxProfit([3, 3, 5, 0, 0, 3, 1, 4, 4, 5, 2, 3, 0, 4, 2, 3]), 15, 'Test 65');
test(maxProfit([1,3,2,8,4,9,5,10,6,11,7,12,8,13,9,14,10,15,11,16,12,17,13,18,14,19,15,20]), 68, 'Test 66');
test(maxProfit([10,9,10,8,11,7,12,6,13,5,14,4,15,3,16,2,17,1]), 64, 'Test 67');
test(maxProfit([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 23, 'Test 68');
test(maxProfit([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), 28, 'Test 69');
test(maxProfit([8,6,4,3,3,5,7,9,10,8,11,13,12,15,17]), 17, 'Test 70');
test(maxProfit([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11,13,12,14,13,15]), 27, 'Test 71');
test(maxProfit([1,2,2,2,2,3,3,3,4,4,4,5,5,5,5,6,6,6,6,6]), 5, 'Test 72');
test(maxProfit([1, 2, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8, 8, 8, 9, 10, 10, 11, 12]), 11, 'Test 73');
test(maxProfit([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80]), 0, 'Test 74');
test(maxProfit([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10]), 9, 'Test 75');
test(maxProfit([1,2,2,3,4,5,6,5,6,7,8,9,10,11,12,13,12,14,15]), 16, 'Test 76');
test(maxProfit([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 77');
test(maxProfit([10,7,15,8,12,9,20,18,25,17]), 30, 'Test 78');
test(maxProfit([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0, 10, 20, 30]), 30, 'Test 79');
test(maxProfit([7,2,5,3,10,1,3,8,1,9,2,6]), 29, 'Test 80');
test(maxProfit([1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]), 12, 'Test 81');
test(maxProfit([1, 2, 3, 2, 1, 2, 3, 4, 3, 2, 3, 4, 5, 4, 5, 6, 5, 6, 7, 6, 7, 8, 7, 8, 9, 8, 9, 10]), 18, 'Test 82');
test(maxProfit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 19, 'Test 83');
test(maxProfit([7,1,5,3,6,4,10,8,6,8,12,10,8,10,14,12,10,12,16,14,12,14,18,16,14,16]), 39, 'Test 84');
test(maxProfit([1,5,3,8,12,10,14,18,22,20,25,28,26,30,32,31,35,38]), 46, 'Test 85');
test(maxProfit([1,2,3,2,1,2,3,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), 10, 'Test 86');
test(maxProfit([7,1,5,3,6,4,5,8,2,9,1,5,7,3,8]), 29, 'Test 87');
test(maxProfit([2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 9, 'Test 88');
test(maxProfit([1,2,3,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), 8, 'Test 89');
test(maxProfit([1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5]), 14, 'Test 90');
test(maxProfit([8,12,4,6,10,3,12,7,9,8]), 21, 'Test 91');
test(maxProfit([1,3,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 13, 'Test 92');
test(maxProfit([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81]), 0, 'Test 93');
test(maxProfit([1,2,3,2,1,2,3,4,3,2,1,2,3,4,5,4,3,2,1]), 9, 'Test 94');
test(maxProfit([1,2,3,2,1,2,3,2,1,2]), 5, 'Test 95');
test(maxProfit([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15]), 26, 'Test 96');
test(maxProfit([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 8, 'Test 97');
test(maxProfit([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 9, 'Test 98');
test(maxProfit([10,9,8,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 17, 'Test 99');
test(maxProfit([1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1]), 15, 'Test 100');
test(maxProfit([10,5,10,20,10,15,10,25,15,30,20,35,25,40,30]), 80, 'Test 101');
test(maxProfit([100,100,100,100,100,100,100,100,100,100,101]), 1, 'Test 102');
test(maxProfit([5, 3, 6, 7, 4, 3, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 21, 'Test 103');
test(maxProfit([1, 3, 2, 8, 4, 9, 5, 10, 6, 11, 7, 12, 8, 13, 9, 14, 10, 15, 11, 16]), 48, 'Test 104');
test(maxProfit([2,2,5,0,1,5,0,3,1,2,5]), 15, 'Test 105');
test(maxProfit([100,90,80,70,60,50,40,30,20,10,0,10,20,30,40,50]), 50, 'Test 106');
test(maxProfit([10,7,5,8,11,9]), 6, 'Test 107');
test(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]), 8, 'Test 108');
test(maxProfit([1,3,2,4,5,7,6,8,9,11,10,12,14,13,15]), 18, 'Test 109');
test(maxProfit([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 10, 'Test 110');
test(maxProfit([1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100]), 990, 'Test 111');
test(maxProfit([1,2,2,6,3,5,4,8,7,9,10,11,10,12,13,14,15,16]), 21, 'Test 112');
test(maxProfit([1,2,3,2,1,4,5,4,3,2,1,6,7,6,5,4,3,2,1]), 12, 'Test 113');
test(maxProfit([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5]), 4, 'Test 114');
test(maxProfit([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 20, 15, 16, 14, 22, 25, 30, 35, 40]), 46, 'Test 115');
test(maxProfit([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 23, 'Test 116');
test(maxProfit([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 19, 'Test 117');
test(maxProfit([1,5,3,9,7,8,4,10,1,12,11,13]), 30, 'Test 118');
test(maxProfit([5, 3, 5, 2, 8, 4, 9, 10, 1, 11, 13, 12, 14, 15, 13, 16, 18, 17, 20, 22]), 39, 'Test 119');
test(maxProfit([10, 7, 5, 8, 11, 9, 12, 15, 13, 17, 20, 18]), 19, 'Test 120');
test(maxProfit([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 121');
test(maxProfit([10,9,8,7,6,5,4,3,2,1,1,1,1,1]), 0, 'Test 122');
test(maxProfit([10,1,10,1,10,1,10,1,10,1]), 36, 'Test 123');
test(maxProfit([1,3,2,5,4,7,6,9,8,11,10,13,12,15,14,17,16]), 23, 'Test 124');
test(maxProfit([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 14, 'Test 125');

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
