// Test: 2855. Minimum Right Shifts To Sort The Array
// 129 test cases from LeetCodeDataset
// Run: node test.js

const { minimumRightShifts } = require("./solution");

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

console.log("\n2855. Minimum Right Shifts To Sort The Array\n");

test(minimumRightShifts([100,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 1');
test(minimumRightShifts([4,5,6,1,2,3]), 3, 'Test 2');
test(minimumRightShifts([1]), 0, 'Test 3');
test(minimumRightShifts([50,10,20,30,40]), 4, 'Test 4');
test(minimumRightShifts([1,3,5]), 0, 'Test 5');
test(minimumRightShifts([2,1,4]), -1, 'Test 6');
test(minimumRightShifts([4,5,1,2,3]), 3, 'Test 7');
test(minimumRightShifts([2,3,4,5,1]), 1, 'Test 8');
test(minimumRightShifts([10,20,30,40,50]), 0, 'Test 9');
test(minimumRightShifts([5,1,2,3,4]), 4, 'Test 10');
test(minimumRightShifts([100,1,2,3,4,5,6,7,8,99]), 9, 'Test 11');
test(minimumRightShifts([3,1,2]), 2, 'Test 12');
test(minimumRightShifts([2,3,1]), 1, 'Test 13');
test(minimumRightShifts([3,4,5,1,2]), 2, 'Test 14');
test(minimumRightShifts([1,2,3,4,5]), 0, 'Test 15');
test(minimumRightShifts([3,1,2,4,5]), -1, 'Test 16');
test(minimumRightShifts([2,3,4,5,6,7,8,9,10,1]), 1, 'Test 17');
test(minimumRightShifts([1,3,2,4,5]), -1, 'Test 18');
test(minimumRightShifts([5,4,2,1,3]), -1, 'Test 19');
test(minimumRightShifts([3,5,7,9,11,2,4,6,8,10,1]), -1, 'Test 20');
test(minimumRightShifts([3, 5, 4, 1, 2]), -1, 'Test 21');
test(minimumRightShifts([15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 14, 'Test 22');
test(minimumRightShifts([6,7,8,9,10,1,2,3,4,5]), 5, 'Test 23');
test(minimumRightShifts([4,2,5,1,3]), -1, 'Test 24');
test(minimumRightShifts([2, 3, 4, 5, 1]), 1, 'Test 25');
test(minimumRightShifts([1,2,3,4,5,6,7,8,9,10]), 0, 'Test 26');
test(minimumRightShifts([12,13,14,15,16,1,2,3,4,5,6,7,8,9,10,11]), 11, 'Test 27');
test(minimumRightShifts([7,8,9,10,1,2,3,4,5,6]), 6, 'Test 28');
test(minimumRightShifts([9,1,2,3,4,5,6,7,8]), 8, 'Test 29');
test(minimumRightShifts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]), 0, 'Test 30');
test(minimumRightShifts([5, 1, 2, 3, 4]), 4, 'Test 31');
test(minimumRightShifts([10, 20, 30, 40, 50, 60, 70, 80, 90, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]), -1, 'Test 32');
test(minimumRightShifts([2, 3, 1, 4, 5, 6, 7, 8, 9, 10]), -1, 'Test 33');
test(minimumRightShifts([1, 2, 3, 5, 4]), 1, 'Test 34');
test(minimumRightShifts([90,80,70,60,50,40,30,20,10,1,2,3,4,5,6,7,8,9]), -1, 'Test 35');
test(minimumRightShifts([7,8,9,10,11,12,13,14,15,16,1,2,3,4,5,6]), 6, 'Test 36');
test(minimumRightShifts([15,16,17,18,19,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 14, 'Test 37');
test(minimumRightShifts([10,20,30,40,50,1,2,3,4,5,6,7,8,9]), 9, 'Test 38');
test(minimumRightShifts([30, 40, 50, 60, 70, 80, 90, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 12, 'Test 39');
test(minimumRightShifts([5,1,2,3,4,6,7,8,9,10]), -1, 'Test 40');
test(minimumRightShifts([4,5,6,7,8,9,10,1,2,3]), 3, 'Test 41');
test(minimumRightShifts([3,1,4,2]), -1, 'Test 42');
test(minimumRightShifts([7,8,9,1,2,3,4,5,6]), 6, 'Test 43');
test(minimumRightShifts([7, 8, 9, 10, 1, 2, 3, 4, 5, 6]), 6, 'Test 44');
test(minimumRightShifts([5,4,3,2,1]), -1, 'Test 45');
test(minimumRightShifts([10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,1,2]), 2, 'Test 46');
test(minimumRightShifts([5,6,7,8,9,10,1,2,3,4]), 4, 'Test 47');
test(minimumRightShifts([9, 10, 1, 2, 3, 4, 5, 6, 7, 8]), 8, 'Test 48');
test(minimumRightShifts([10,11,12,13,1,2,3,4,5,6,7,8,9]), 9, 'Test 49');
test(minimumRightShifts([7,8,9,10,11,1,2,3,4,5,6]), 6, 'Test 50');
test(minimumRightShifts([2,5,1,3,4]), -1, 'Test 51');
test(minimumRightShifts([3,4,5,6,7,8,9,1,2]), 2, 'Test 52');
test(minimumRightShifts([1,2,4,5,3]), 1, 'Test 53');
test(minimumRightShifts([3,5,4,1,2]), -1, 'Test 54');
test(minimumRightShifts([9,10,11,1,2,3,4,5,6,7,8]), 8, 'Test 55');
test(minimumRightShifts([5,1,3,4,2]), -1, 'Test 56');
test(minimumRightShifts([3,1,2,5,4]), -1, 'Test 57');
test(minimumRightShifts([60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 1, 2, 3, 4]), 4, 'Test 58');
test(minimumRightShifts([1,2,3,5,4]), 1, 'Test 59');
test(minimumRightShifts([2,3,4,1,5]), -1, 'Test 60');
test(minimumRightShifts([10, 20, 30, 40, 50, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 9, 'Test 61');
test(minimumRightShifts([4,3,1,2,5]), -1, 'Test 62');
test(minimumRightShifts([1, 3, 2]), 1, 'Test 63');
test(minimumRightShifts([30,31,32,33,34,35,36,37,38,39,40,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]), 29, 'Test 64');
test(minimumRightShifts([8,9,10,11,1,2,3,4,5,6,7]), 7, 'Test 65');
test(minimumRightShifts([5,2,3,4,1]), -1, 'Test 66');
test(minimumRightShifts([5,6,7,8,9,1,2,3,4]), 4, 'Test 67');
test(minimumRightShifts([20,30,40,50,60,70,80,90,10,1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19]), -1, 'Test 68');
test(minimumRightShifts([4,5,6,7,8,9,1,2,3]), 3, 'Test 69');
test(minimumRightShifts([1,3,5,7,9,11,2,4,6,8,10]), -1, 'Test 70');
test(minimumRightShifts([2,3,4,5,1,6]), -1, 'Test 71');
test(minimumRightShifts([3,4,5,6,7,8,9,10,1,2]), 2, 'Test 72');
test(minimumRightShifts([15,25,35,45,55,10,20,30,40]), -1, 'Test 73');
test(minimumRightShifts([9,10,11,12,13,1,2,3,4,5,6,7,8]), 8, 'Test 74');
test(minimumRightShifts([7,8,9,10,11,12,13,1,2,3,4,5,6]), 6, 'Test 75');
test(minimumRightShifts([10,1,2,3,4,5,6,7,8,9]), 9, 'Test 76');
test(minimumRightShifts([4,1,2,5,3]), -1, 'Test 77');
test(minimumRightShifts([4, 5, 1, 2, 3]), 3, 'Test 78');
test(minimumRightShifts([2,3,4,5,6,7,8,9,1]), 1, 'Test 79');
test(minimumRightShifts([3, 4, 5, 6, 7, 8, 9, 1, 2]), 2, 'Test 80');
test(minimumRightShifts([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 0, 'Test 81');
test(minimumRightShifts([3,1,2,4,6,5]), -1, 'Test 82');
test(minimumRightShifts([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 1]), 1, 'Test 83');
test(minimumRightShifts([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]), -1, 'Test 84');
test(minimumRightShifts([100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 85');
test(minimumRightShifts([1,14,2,13,3,12,4,11,5,10,6,9,7,8]), -1, 'Test 86');
test(minimumRightShifts([98, 99, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97]), 97, 'Test 87');
test(minimumRightShifts([10,9,8,7,6,5,4,3,2,1]), -1, 'Test 88');
test(minimumRightShifts([100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]), 99, 'Test 89');
test(minimumRightShifts([5, 6, 7, 8, 9, 1, 2, 3, 4]), 4, 'Test 90');
test(minimumRightShifts([100,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150]), -1, 'Test 91');
test(minimumRightShifts([8,1,2,3,4,5,6,7]), 7, 'Test 92');
test(minimumRightShifts([11,12,13,14,15,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 93');
test(minimumRightShifts([1, 2, 4, 3]), 1, 'Test 94');
test(minimumRightShifts([2,3,4,5,1,6,7]), -1, 'Test 95');
test(minimumRightShifts([5,6,7,8,9,10,11,12,1,2,3,4]), 4, 'Test 96');
test(minimumRightShifts([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 9, 'Test 97');
test(minimumRightShifts([4,5,6,7,8,9,10,11,1,2,3]), 3, 'Test 98');
test(minimumRightShifts([3,2,1]), -1, 'Test 99');
test(minimumRightShifts([9,10,1,2,3,4,5,6,7,8]), 8, 'Test 100');
test(minimumRightShifts([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 1]), 1, 'Test 101');
test(minimumRightShifts([10,11,12,13,14,1,2,3,4,5,6,7,8,9]), 9, 'Test 102');
test(minimumRightShifts([2,4,1,5,3]), -1, 'Test 103');
test(minimumRightShifts([100,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]), 99, 'Test 104');
test(minimumRightShifts([2,3,1,5,4]), -1, 'Test 105');
test(minimumRightShifts([5,3,4,1,2]), -1, 'Test 106');
test(minimumRightShifts([99, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]), 18, 'Test 107');
test(minimumRightShifts([100,1,2,3,4,5,6,7,8,9]), 9, 'Test 108');
test(minimumRightShifts([9,10,11,12,13,14,15,16,1,2,3,4,5,6,7,8]), 8, 'Test 109');
test(minimumRightShifts([8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7]), 7, 'Test 110');
test(minimumRightShifts([99, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20]), 18, 'Test 111');
test(minimumRightShifts([2,3,4,5,6,7,8,9,10,11,1,12]), -1, 'Test 112');
test(minimumRightShifts([1, 3, 2, 5, 4]), -1, 'Test 113');
test(minimumRightShifts([2, 3, 5, 4, 1]), -1, 'Test 114');
test(minimumRightShifts([50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 1, 2, 3, 4]), 4, 'Test 115');
test(minimumRightShifts([6,7,8,9,1,2,3,4,5]), 5, 'Test 116');
test(minimumRightShifts([15,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 14, 'Test 117');
test(minimumRightShifts([1,3,2]), 1, 'Test 118');
test(minimumRightShifts([2,3,4,5,6,7,8,9,10,1,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]), -1, 'Test 119');
test(minimumRightShifts([2,1,3,4,5]), -1, 'Test 120');
test(minimumRightShifts([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4]), 4, 'Test 121');
test(minimumRightShifts([8,9,10,1,2,3,4,5,6,7]), 7, 'Test 122');
test(minimumRightShifts([20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 19, 'Test 123');
test(minimumRightShifts([3,4,1,2,5]), -1, 'Test 124');
test(minimumRightShifts([50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]), 49, 'Test 125');
test(minimumRightShifts([11,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 126');
test(minimumRightShifts([2,3,1,4,5]), -1, 'Test 127');
test(minimumRightShifts([99,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,90,91,92,93,94,95,96,97,98]), 97, 'Test 128');
test(minimumRightShifts([8,9,10,11,12,13,14,15,1,2,3,4,5,6,7]), 7, 'Test 129');

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
