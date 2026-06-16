// Test: 376. Wiggle Subsequence
// 134 test cases from LeetCodeDataset
// Run: node test.js

const { wiggleMaxLength } = require("./solution");

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

console.log("\n376. Wiggle Subsequence\n");

test(wiggleMaxLength([1,2,2,3]), 2, 'Test 1');
test(wiggleMaxLength([80,80,80,80,80,80]), 1, 'Test 2');
test(wiggleMaxLength([3,3,3,2,5,25,50,41,60,70,55,65,80,90,99]), 7, 'Test 3');
test(wiggleMaxLength([1,1,1,1]), 1, 'Test 4');
test(wiggleMaxLength([2,1]), 2, 'Test 5');
test(wiggleMaxLength([1]), 1, 'Test 6');
test(wiggleMaxLength([0,0]), 1, 'Test 7');
test(wiggleMaxLength([1,3,7,4,9,2,5]), 6, 'Test 8');
test(wiggleMaxLength([0,0,1,0,0,2,0,0,3]), 6, 'Test 9');
test(wiggleMaxLength([1,3,2,2,3,1,4]), 6, 'Test 10');
test(wiggleMaxLength([1,2,2,3,4,4,5]), 2, 'Test 11');
test(wiggleMaxLength([1,2,3,4,5,6,7,8,9]), 2, 'Test 12');
test(wiggleMaxLength([3,3,3,2,5]), 3, 'Test 13');
test(wiggleMaxLength([1,2,2,3,3,4,4,5]), 2, 'Test 14');
test(wiggleMaxLength([1,7,4,9,2,5]), 6, 'Test 15');
test(wiggleMaxLength([5,5,5,5,5,5]), 1, 'Test 16');
test(wiggleMaxLength([3,3,3,2,5,25,35,45]), 3, 'Test 17');
test(wiggleMaxLength([1,2]), 2, 'Test 18');
test(wiggleMaxLength([1,17,5,10,13,15,10,5,16,8]), 7, 'Test 19');
test(wiggleMaxLength([1,1]), 1, 'Test 20');
test(wiggleMaxLength([100,100]), 1, 'Test 21');
test(wiggleMaxLength([1,3,2,1]), 3, 'Test 22');
test(wiggleMaxLength([1,2,2,3,3,4,4,5,5]), 2, 'Test 23');
test(wiggleMaxLength([3,3,3,3,3]), 1, 'Test 24');
test(wiggleMaxLength([1,3,2,2,3,1,4,3,2,1,2,3,4,5,6,7,8,9]), 8, 'Test 25');
test(wiggleMaxLength([10,20,10,20,30,20,30,40,30,40,50,40,50,60]), 10, 'Test 26');
test(wiggleMaxLength([5, 3, 1, 2, 3, 4, 5, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 5, 'Test 27');
test(wiggleMaxLength([1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]), 6, 'Test 28');
test(wiggleMaxLength([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5]), 3, 'Test 29');
test(wiggleMaxLength([3,3,3,2,1,4,5,6,7,8,9,10]), 3, 'Test 30');
test(wiggleMaxLength([1,3,4,2,3,4,2,3,4,2,3,4,2,3,4,2,3,4,2,3,4]), 14, 'Test 31');
test(wiggleMaxLength([3, 3, 3, 2, 2, 1, 1, 0, 0, 1, 1, 2, 2, 3, 3]), 3, 'Test 32');
test(wiggleMaxLength([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 20, 'Test 33');
test(wiggleMaxLength([1, 18, 3, 7, 10, 14, 6, 15, 4, 9, 12]), 8, 'Test 34');
test(wiggleMaxLength([50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100]), 16, 'Test 35');
test(wiggleMaxLength([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 2, 'Test 36');
test(wiggleMaxLength([1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2]), 8, 'Test 37');
test(wiggleMaxLength([5, 3, 3, 3, 5, 5, 2, 3, 4, 3, 2, 1]), 6, 'Test 38');
test(wiggleMaxLength([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11,13,12,14]), 26, 'Test 39');
test(wiggleMaxLength([9, 8, 7, 6, 5, 4, 3, 2, 1]), 2, 'Test 40');
test(wiggleMaxLength([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4]), 6, 'Test 41');
test(wiggleMaxLength([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7]), 2, 'Test 42');
test(wiggleMaxLength([1,3,2,4,5,3,6,7,8,6,9,10,11,10]), 9, 'Test 43');
test(wiggleMaxLength([1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 16, 'Test 44');
test(wiggleMaxLength([1, 2, 3, 4, 3, 2, 3, 4, 3, 2, 3, 4, 3, 2, 1, 2, 3, 4]), 8, 'Test 45');
test(wiggleMaxLength([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 2, 'Test 46');
test(wiggleMaxLength([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 2, 'Test 47');
test(wiggleMaxLength([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 3, 'Test 48');
test(wiggleMaxLength([1,18,5,10,13,15,10,5,16,8,17,7,18]), 10, 'Test 49');
test(wiggleMaxLength([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81]), 2, 'Test 50');
test(wiggleMaxLength([100, 4, 200, 1, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 7, 'Test 51');
test(wiggleMaxLength([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1]), 2, 'Test 52');
test(wiggleMaxLength([1, 18, 3, 7, 10, 13, 10, 5, 16, 8, 20, 15]), 9, 'Test 53');
test(wiggleMaxLength([8,4,6,2,3,5,7,1,9,11,10,12,14,13,15]), 11, 'Test 54');
test(wiggleMaxLength([5, 3, 3, 5, 2, 1, 6, 1, 2, 3, 4]), 7, 'Test 55');
test(wiggleMaxLength([1000, 0, 1000, 0, 1000, 0, 1000, 0, 1000, 0]), 10, 'Test 56');
test(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 3, 'Test 57');
test(wiggleMaxLength([1,2,3,4,5,4,3,4,5,4,3,4,5,4,3,4,5,4,3,4,5,4,3,4,5,4,3,4,5]), 14, 'Test 58');
test(wiggleMaxLength([3, 3, 3, 2, 5, 25, 2, 5, 25, 2, 5, 25]), 7, 'Test 59');
test(wiggleMaxLength([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1]), 39, 'Test 60');
test(wiggleMaxLength([10, 15, 10, 5, 15, 5, 20, 10, 25, 15, 30, 20]), 11, 'Test 61');
test(wiggleMaxLength([1, 3, 2, 5, 3, 7, 5, 9, 7, 11, 9, 13, 11, 15, 13, 17, 15, 19, 17, 21]), 20, 'Test 62');
test(wiggleMaxLength([1, 10, 3, 100, 4, 101, 5, 102, 6, 103, 7, 104, 8, 105, 9, 106]), 16, 'Test 63');
test(wiggleMaxLength([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6, 7, 8, 9]), 2, 'Test 64');
test(wiggleMaxLength([1,3,2,4,3,5,2,6,3,7,4,8,5,9,6,10,7,11,8,12,9,13,10,14,11,15]), 26, 'Test 65');
test(wiggleMaxLength([1, 2, 3, 4, 3, 2, 1, 2, 3, 4]), 4, 'Test 66');
test(wiggleMaxLength([2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), 12, 'Test 67');
test(wiggleMaxLength([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 1, 'Test 68');
test(wiggleMaxLength([10,11,12,13,14,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), 3, 'Test 69');
test(wiggleMaxLength([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 2, 'Test 70');
test(wiggleMaxLength([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10]), 19, 'Test 71');
test(wiggleMaxLength([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11,13,12,14]), 24, 'Test 72');
test(wiggleMaxLength([3, 3, 3, 2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2]), 18, 'Test 73');
test(wiggleMaxLength([10, 20, 30, 25, 20, 15, 25, 30, 20, 10]), 5, 'Test 74');
test(wiggleMaxLength([8, 3, 5, 1, 4, 2, 10, 9, 12, 6, 14, 7]), 12, 'Test 75');
test(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 2, 'Test 76');
test(wiggleMaxLength([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2]), 7, 'Test 77');
test(wiggleMaxLength([89, 45, 68, 90, 29, 34, 67, 30, 89, 21, 55, 62, 87, 90, 21, 56, 89, 34, 67, 23]), 14, 'Test 78');
test(wiggleMaxLength([8, 6, 8, 6, 8, 6, 8, 6, 8, 6, 8, 6, 8, 6, 8, 6, 8, 6, 8, 6]), 20, 'Test 79');
test(wiggleMaxLength([1000, 999, 998, 999, 998, 997, 998, 997, 996, 997, 996, 995]), 8, 'Test 80');
test(wiggleMaxLength([1, 3, 7, 10, 9, 8, 2, 1, 5, 7, 10, 12, 8, 6, 4, 2, 3, 5, 7]), 6, 'Test 81');
test(wiggleMaxLength([999, 1000, 999, 1000, 999, 1000, 999, 1000, 999, 1000]), 10, 'Test 82');
test(wiggleMaxLength([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 2, 'Test 83');
test(wiggleMaxLength([10, 20, 30, 25, 20, 15, 10, 15, 20, 25, 30]), 4, 'Test 84');
test(wiggleMaxLength([1, 18, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]), 4, 'Test 85');
test(wiggleMaxLength([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 86');
test(wiggleMaxLength([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5]), 4, 'Test 87');
test(wiggleMaxLength([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 3, 'Test 88');
test(wiggleMaxLength([5, 5, 5, 5, 5, 5, 5, 5]), 1, 'Test 89');
test(wiggleMaxLength([1,3,2,5,4,7,6,9,8,11,10,13,12,15,14]), 15, 'Test 90');
test(wiggleMaxLength([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 11, 'Test 91');
test(wiggleMaxLength([10,9,8,7,6,5,4,3,2,1]), 2, 'Test 92');
test(wiggleMaxLength([10, 90, 49, 2, 1, 100, 67, 89, 34, 67, 33, 21, 50, 41, 66, 70]), 12, 'Test 93');
test(wiggleMaxLength([500,400,500,400,500,400,500,400,500,400,500,400,500,400]), 14, 'Test 94');
test(wiggleMaxLength([1,3,2,4,5,6,4,6,7,8,9,0,1,2,3,4,5]), 8, 'Test 95');
test(wiggleMaxLength([1,3,2,1,4,3,2,1,5,4,3,2,1]), 7, 'Test 96');
test(wiggleMaxLength([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8]), 15, 'Test 97');
test(wiggleMaxLength([1,2,3,4,3,4,5,4,5,6,5,6,7,6,7,8,7,8,9,8,9,10,9,10,11]), 16, 'Test 98');
test(wiggleMaxLength([1, 2, 3, 2, 1, 2, 1, 2, 3, 2, 1, 2, 1, 2, 3, 2, 1, 2, 1, 2]), 14, 'Test 99');
test(wiggleMaxLength([3,3,3,2,5,5,4,8,8,9,10,10]), 5, 'Test 100');
test(wiggleMaxLength([1,18,9,14,7,11,3,8,16,5]), 9, 'Test 101');
test(wiggleMaxLength([5,10,5,10,5,10,5,10,5]), 9, 'Test 102');
test(wiggleMaxLength([1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1]), 3, 'Test 103');
test(wiggleMaxLength([1,18,17,19,20,21,15,10,22,23,24,14,13,12,25,26,27,9,8,7]), 9, 'Test 104');
test(wiggleMaxLength([2,3,1,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12]), 20, 'Test 105');
test(wiggleMaxLength([9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4]), 4, 'Test 106');
test(wiggleMaxLength([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]), 2, 'Test 107');
test(wiggleMaxLength([1,100,1,99,2,98,3,97,4,96,5,95,6,94,7,93,8,92]), 18, 'Test 108');
test(wiggleMaxLength([100, 44, 61, 78, 54, 48, 101, 56, 30, 93, 47, 72, 38]), 10, 'Test 109');
test(wiggleMaxLength([8, 4, 5, 7, 7, 5, 4, 9, 2, 9, 10, 13, 7, 4, 8, 20]), 9, 'Test 110');
test(wiggleMaxLength([100, 40, 20, 60, 30, 50, 40, 80, 70, 90]), 9, 'Test 111');
test(wiggleMaxLength([100, 90, 95, 110, 105, 115, 100, 120, 80]), 8, 'Test 112');
test(wiggleMaxLength([100, 4, 200, 1, 3, 2, 3, 5, 4]), 8, 'Test 113');
test(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 2, 'Test 114');
test(wiggleMaxLength([100,90,80,90,100,95,105,92,107,85,110,75,115,65,120,55,125,45,130,35]), 18, 'Test 115');
test(wiggleMaxLength([5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5]), 29, 'Test 116');
test(wiggleMaxLength([1, 3, 2, 3, 1, 4, 2, 5, 3, 6, 4, 7, 5, 8, 6]), 15, 'Test 117');
test(wiggleMaxLength([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]), 5, 'Test 118');
test(wiggleMaxLength([10, 20, 15, 25, 20, 30, 25, 35, 30, 40, 35, 45, 40, 50]), 14, 'Test 119');
test(wiggleMaxLength([1, 2, 3, 4, 3, 2, 3, 4, 3, 2, 3, 4, 3, 2, 3, 4, 3, 2, 3, 4]), 10, 'Test 120');
test(wiggleMaxLength([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8]), 2, 'Test 121');
test(wiggleMaxLength([3, 1, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11]), 17, 'Test 122');
test(wiggleMaxLength([1,1,1,1,1,1,1,1,1,1]), 1, 'Test 123');
test(wiggleMaxLength([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 20, 'Test 124');
test(wiggleMaxLength([2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), 20, 'Test 125');
test(wiggleMaxLength([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 1, 'Test 126');
test(wiggleMaxLength([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 127');
test(wiggleMaxLength([3, 1, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9]), 16, 'Test 128');
test(wiggleMaxLength([8, 4, 10, 3, 5, 7, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 7, 'Test 129');
test(wiggleMaxLength([3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3]), 3, 'Test 130');
test(wiggleMaxLength([1, 2, 3, 4, 3, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4]), 6, 'Test 131');
test(wiggleMaxLength([1, 1, 2, 2, 3, 3, 2, 2, 1, 1, 2, 2, 3, 3, 2, 2, 1, 1]), 5, 'Test 132');
test(wiggleMaxLength([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 102, 'Test 133');
test(wiggleMaxLength([9, 8, 8, 5, 3, 5, 3, 4, 5, 0, 0, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0]), 8, 'Test 134');

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
