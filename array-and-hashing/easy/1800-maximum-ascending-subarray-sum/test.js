// Test: 1800. Maximum Ascending Subarray Sum
// 128 test cases from LeetCodeDataset
// Run: node test.js

const { maxAscendingSum } = require("./solution");

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

console.log("\n1800. Maximum Ascending Subarray Sum\n");

test(maxAscendingSum([100,99,98,97,96]), 100, 'Test 1');
test(maxAscendingSum([10,9,2,5,3,7,101,18]), 111, 'Test 2');
test(maxAscendingSum([1,2,3,4,5,6,7,8,9,10]), 55, 'Test 3');
test(maxAscendingSum([10]), 10, 'Test 4');
test(maxAscendingSum([1]), 1, 'Test 5');
test(maxAscendingSum([100,1,2,3,100,2,3,100]), 106, 'Test 6');
test(maxAscendingSum([100]), 100, 'Test 7');
test(maxAscendingSum([1,3,2,4,3,5,4,6]), 10, 'Test 8');
test(maxAscendingSum([10,20,30,40,50]), 150, 'Test 9');
test(maxAscendingSum([1,2,3,4,5]), 15, 'Test 10');
test(maxAscendingSum([1,2,1,2,1,2,1]), 3, 'Test 11');
test(maxAscendingSum([1,1,1,1,1]), 1, 'Test 12');
test(maxAscendingSum([1,1,1,1,1,1,1,1]), 1, 'Test 13');
test(maxAscendingSum([1,2,1,2,1,2]), 3, 'Test 14');
test(maxAscendingSum([5,4,3,2,1]), 5, 'Test 15');
test(maxAscendingSum([10,20,30,5,10,50]), 65, 'Test 16');
test(maxAscendingSum([100,99,100,98,97,96,95,101,102,103]), 401, 'Test 17');
test(maxAscendingSum([12,17,15,13,10,11,12]), 33, 'Test 18');
test(maxAscendingSum([1,2,3,2,3,4,5]), 14, 'Test 19');
test(maxAscendingSum([100,100,100]), 100, 'Test 20');
test(maxAscendingSum([5,6,7,8,9,1,2,3,4,10,11,12,13,14,15,16,17,18,19,20]), 175, 'Test 21');
test(maxAscendingSum([5, 10, 9, 15, 20, 25, 20, 30, 40, 50]), 140, 'Test 22');
test(maxAscendingSum([50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 40, 41, 42, 43, 44]), 605, 'Test 23');
test(maxAscendingSum([5, 6, 7, 5, 6, 7, 5, 6, 7, 5, 6, 7, 5, 6, 7, 5, 6, 7, 5, 6, 7, 5, 6, 7]), 18, 'Test 24');
test(maxAscendingSum([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 6, 'Test 25');
test(maxAscendingSum([1,10,2,9,3,8,4,7,5,6,11,12,13,14,15,16,17,18,19,20]), 166, 'Test 26');
test(maxAscendingSum([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 20, 'Test 27');
test(maxAscendingSum([50,1,2,3,4,50,5,6,7,8,9,50,10,11,12,13,14,15,50,16,17,18,19,20]), 125, 'Test 28');
test(maxAscendingSum([30,20,10,21,22,23,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 120, 'Test 29');
test(maxAscendingSum([10,20,15,25,30,22,35,40,38,45,50]), 133, 'Test 30');
test(maxAscendingSum([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), 240, 'Test 31');
test(maxAscendingSum([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), 6, 'Test 32');
test(maxAscendingSum([1,3,2,4,5,3,6,7,8,6,9,10,11,10]), 36, 'Test 33');
test(maxAscendingSum([10,20,10,20,30,20,30,40,50,40,60]), 140, 'Test 34');
test(maxAscendingSum([1,2,3,4,3,4,5,6,5,7,8,9,10,8,9,10,11]), 39, 'Test 35');
test(maxAscendingSum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 36');
test(maxAscendingSum([1, 10, 100, 1000, 10, 1, 2, 3, 4, 5]), 1111, 'Test 37');
test(maxAscendingSum([1,2,3,1,2,3,1,2,3,1,2,3]), 6, 'Test 38');
test(maxAscendingSum([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 400, 'Test 39');
test(maxAscendingSum([100,99,98,97,96,95,94,93,92]), 100, 'Test 40');
test(maxAscendingSum([1,3,2,5,4,7,6,9,8,11,10,13,12]), 23, 'Test 41');
test(maxAscendingSum([1,3,5,2,4,6,3,5,7,4,6,8,5,7,9]), 21, 'Test 42');
test(maxAscendingSum([100,99,98,97,96,95,94,93,92,91]), 100, 'Test 43');
test(maxAscendingSum([20,30,25,35,40,35,45,50,45,55,60,55,65,70,65,75,80]), 220, 'Test 44');
test(maxAscendingSum([5,10,15,20,25,1,2,3,4,5,30,35,40,45,50,2,3,4,5,6,7,8,9,10]), 215, 'Test 45');
test(maxAscendingSum([100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125]), 2925, 'Test 46');
test(maxAscendingSum([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10]), 18, 'Test 47');
test(maxAscendingSum([1,2,3,2,4,5,6,7,8,9,1,2,3,4,5]), 41, 'Test 48');
test(maxAscendingSum([10,20,30,25,35,40,35,45,50,45,55,60,55,65,70,65,75,80,75,85,90]), 250, 'Test 49');
test(maxAscendingSum([1,10,11,2,20,21,3,30,31,4,40,41,5,50,51,6,60,61,7,70,71]), 148, 'Test 50');
test(maxAscendingSum([33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 747, 'Test 51');
test(maxAscendingSum([1,1,1,1,1,2,3,4,5,1,1,1,1,1,2,3,4,5,6,7,8,9,10,1,1,1,1,1]), 55, 'Test 52');
test(maxAscendingSum([3,2,1,10,20,30,25,35,45,55]), 160, 'Test 53');
test(maxAscendingSum([10,20,15,25,30,20,35,40,50,45,60]), 145, 'Test 54');
test(maxAscendingSum([1,3,5,7,9,2,4,6,8,10,12,14,16,18,20]), 110, 'Test 55');
test(maxAscendingSum([1, 3, 5, 7, 9, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]), 30, 'Test 56');
test(maxAscendingSum([10,20,15,30,40,25,50,60,35,70,80,45,90,100,55,110,120,65,130,140,75]), 335, 'Test 57');
test(maxAscendingSum([3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]), 624, 'Test 58');
test(maxAscendingSum([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 15, 'Test 59');
test(maxAscendingSum([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), 225, 'Test 60');
test(maxAscendingSum([5,6,7,8,9,10,11,12,13,14,15]), 110, 'Test 61');
test(maxAscendingSum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 62');
test(maxAscendingSum([1,10,20,15,25,30,20,35,40]), 95, 'Test 63');
test(maxAscendingSum([1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 55, 'Test 64');
test(maxAscendingSum([10, 20, 15, 25, 30, 20, 35, 40, 30, 45, 50]), 125, 'Test 65');
test(maxAscendingSum([10,20,30,40,50,60,70,80,90,100,1,2,3,4,5,6,7,8,9,10]), 550, 'Test 66');
test(maxAscendingSum([100,99,98,97,96,95,94,93,92,91,90]), 100, 'Test 67');
test(maxAscendingSum([5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 210, 'Test 68');
test(maxAscendingSum([100, 99, 98, 97, 96, 101, 102, 103, 104, 105]), 611, 'Test 69');
test(maxAscendingSum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,4,5,6,7,8,9,10]), 55, 'Test 70');
test(maxAscendingSum([100, 99, 98, 97, 96, 95, 94, 93, 92, 91]), 100, 'Test 71');
test(maxAscendingSum([5, 10, 15, 20, 25, 30, 1, 2, 3, 4, 5, 10, 15, 20]), 105, 'Test 72');
test(maxAscendingSum([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30]), 50, 'Test 73');
test(maxAscendingSum([10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9]), 165, 'Test 74');
test(maxAscendingSum([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 15, 'Test 75');
test(maxAscendingSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 210, 'Test 76');
test(maxAscendingSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 156, 'Test 77');
test(maxAscendingSum([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81]), 100, 'Test 78');
test(maxAscendingSum([9,10,11,8,12,13,14,7,15,16,17,18,6,19,20,21,22,23,5,24,25,26,27,28]), 135, 'Test 79');
test(maxAscendingSum([5,6,3,8,9,10,7,8,9]), 30, 'Test 80');
test(maxAscendingSum([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 15, 'Test 81');
test(maxAscendingSum([1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 82');
test(maxAscendingSum([3,3,3,3,3,3,3,3,3]), 3, 'Test 83');
test(maxAscendingSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 325, 'Test 84');
test(maxAscendingSum([30, 31, 32, 33, 34, 35, 15, 16, 17, 18, 19, 20, 21]), 195, 'Test 85');
test(maxAscendingSum([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12]), 22, 'Test 86');
test(maxAscendingSum([5, 6, 7, 8, 9, 5, 6, 7, 10, 11, 12, 13]), 64, 'Test 87');
test(maxAscendingSum([5,6,7,8,9,1,2,3,4,10,11,12,13,14,1,2,3,4,5]), 70, 'Test 88');
test(maxAscendingSum([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 55, 'Test 89');
test(maxAscendingSum([5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 120, 'Test 90');
test(maxAscendingSum([50,40,30,20,10,20,30,40,50,60]), 210, 'Test 91');
test(maxAscendingSum([10,20,10,20,30,40,30,40,50,60]), 180, 'Test 92');
test(maxAscendingSum([10, 20, 30, 25, 40, 50, 60, 55, 70, 80]), 205, 'Test 93');
test(maxAscendingSum([1,2,2,3,4,5,5,6,7,8,8,9,10,10,11,12,12,13,14,14]), 39, 'Test 94');
test(maxAscendingSum([5,1,2,3,4,1,2,3,4,5]), 15, 'Test 95');
test(maxAscendingSum([2,3,6,6,5,7,8,9,10,5,6,7,8,9,10,11,12,5,6,7]), 68, 'Test 96');
test(maxAscendingSum([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 15, 'Test 97');
test(maxAscendingSum([5,3,7,8,2,6,9,11,10,15]), 28, 'Test 98');
test(maxAscendingSum([50,51,52,53,54,55,56,57,58,59,60,1,2,3,4,5]), 605, 'Test 99');
test(maxAscendingSum([1,10,2,9,3,8,4,7,5,6,7,8,9,10,11,12,13,14,15]), 110, 'Test 100');
test(maxAscendingSum([10,20,30,25,26,27,28,29,30,20,21,22,23,24,25,26,27,28,29,30]), 275, 'Test 101');
test(maxAscendingSum([100,90,80,70,60,50,40,30,20,10]), 100, 'Test 102');
test(maxAscendingSum([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 55, 'Test 103');
test(maxAscendingSum([1, 3, 5, 7, 9, 2, 4, 6, 8, 10, 12, 14, 16]), 72, 'Test 104');
test(maxAscendingSum([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10]), 30, 'Test 105');
test(maxAscendingSum([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 120, 'Test 106');
test(maxAscendingSum([5,6,7,8,9,10,8,9,10,11,12]), 50, 'Test 107');
test(maxAscendingSum([1, 3, 2, 4, 6, 5, 7, 9, 11, 10]), 32, 'Test 108');
test(maxAscendingSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55, 'Test 109');
test(maxAscendingSum([5,5,5,5,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 315, 'Test 110');
test(maxAscendingSum([1,2,3,4,5,4,5,6,7,6,7,8,9,8,9,10,11,12,11,12]), 50, 'Test 111');
test(maxAscendingSum([1, 2, 3, 4, 5, 3, 4, 5, 6, 7, 8, 6, 7, 8, 9, 10, 11]), 51, 'Test 112');
test(maxAscendingSum([5,4,3,2,1,2,3,4,5]), 15, 'Test 113');
test(maxAscendingSum([10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 210, 'Test 114');
test(maxAscendingSum([1, 3, 5, 7, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 20, 30]), 61, 'Test 115');
test(maxAscendingSum([1,1,1,1,1,1,1,1,1,1]), 1, 'Test 116');
test(maxAscendingSum([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 2, 'Test 117');
test(maxAscendingSum([5,5,5,5,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 200, 'Test 118');
test(maxAscendingSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 119');
test(maxAscendingSum([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 200, 'Test 120');
test(maxAscendingSum([10,15,20,25,30,1,2,3,4,5,6,7,8,9,10]), 100, 'Test 121');
test(maxAscendingSum([10,20,30,40,50,10,20,30,40,50,10,20,30,40,50,10,20,30,40,50]), 150, 'Test 122');
test(maxAscendingSum([1,2,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,8,9]), 45, 'Test 123');
test(maxAscendingSum([100,99,98,97,96,1,2,3,4,5]), 100, 'Test 124');
test(maxAscendingSum([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,2,3,4,5]), 20, 'Test 125');
test(maxAscendingSum([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 15, 'Test 126');
test(maxAscendingSum([1,2,3,4,5,4,5,6,7,6,7,8,9,8,9,10,11,10,11,12,13,12,13,14,15]), 54, 'Test 127');
test(maxAscendingSum([3,5,4,6,7,8,6,7,8,9,10,8,9,10,11,12,10,11,12,13,14]), 60, 'Test 128');

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
