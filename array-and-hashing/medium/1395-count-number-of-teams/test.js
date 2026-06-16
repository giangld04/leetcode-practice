// Test: 1395. Count Number Of Teams
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { numTeams } = require("./solution");

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

console.log("\n1395. Count Number Of Teams\n");

test(numTeams([2,1,3]), 0, 'Test 1');
test(numTeams([3,1,2,5,4]), 2, 'Test 2');
test(numTeams([1,5,2,4,3]), 3, 'Test 3');
test(numTeams([10,6,5,8]), 1, 'Test 4');
test(numTeams([5,4,3,2,1]), 10, 'Test 5');
test(numTeams([7,9,1,10,4,8]), 2, 'Test 6');
test(numTeams([5,3,2,1,4]), 4, 'Test 7');
test(numTeams([5,3,1,2,4]), 3, 'Test 8');
test(numTeams([3,6,7,5,10,8]), 9, 'Test 9');
test(numTeams([2,5,3,4,1]), 3, 'Test 10');
test(numTeams([6,3,8,1,2,9,7]), 6, 'Test 11');
test(numTeams([1,3,2,4,5]), 7, 'Test 12');
test(numTeams([6,9,1,3,5,7,8,2,4]), 23, 'Test 13');
test(numTeams([100,200,300,400,500]), 10, 'Test 14');
test(numTeams([3,2,1,5,4]), 1, 'Test 15');
test(numTeams([1,2,3,4]), 4, 'Test 16');
test(numTeams([5,1,4,2,3]), 3, 'Test 17');
test(numTeams([100, 200, 150, 300, 250, 400, 350]), 20, 'Test 18');
test(numTeams([4,1,5,3,2,7,6,8,10,9]), 66, 'Test 19');
test(numTeams([1,5,2,6,3,7,4,8,9]), 50, 'Test 20');
test(numTeams([3, 6, 1, 5, 9, 2, 8, 4, 7, 10]), 41, 'Test 21');
test(numTeams([5, 3, 8, 1, 7, 2, 6, 4]), 9, 'Test 22');
test(numTeams([1, 5, 3, 7, 9, 2, 4, 8, 6, 10]), 50, 'Test 23');
test(numTeams([7, 1, 3, 5, 9, 6, 2, 8, 4]), 24, 'Test 24');
test(numTeams([9, 5, 7, 3, 8, 1, 6, 4, 2, 10]), 41, 'Test 25');
test(numTeams([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 455, 'Test 26');
test(numTeams([100, 200, 150, 250, 300, 10, 50, 350]), 19, 'Test 27');
test(numTeams([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 1140, 'Test 28');
test(numTeams([100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 120, 'Test 29');
test(numTeams([1,10,2,9,3,8,4,7,5,6,11,20,12,19,13,18,14,17,15,16]), 600, 'Test 30');
test(numTeams([15, 12, 14, 11, 13, 10, 16, 17, 9, 8, 7, 6]), 122, 'Test 31');
test(numTeams([1, 3, 2, 5, 4, 7, 6, 9, 8, 10]), 88, 'Test 32');
test(numTeams([50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 60, 70, 80, 90, 100, 110]), 594, 'Test 33');
test(numTeams([50, 25, 75, 100, 60, 30, 80, 40, 90]), 25, 'Test 34');
test(numTeams([10, 1, 20, 2, 30, 3, 40, 4, 50, 5]), 40, 'Test 35');
test(numTeams([1,2,3,4,5,6,7,8,9,10]), 120, 'Test 36');
test(numTeams([1,2,3,4,5,6,7,8,9]), 84, 'Test 37');
test(numTeams([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 120, 'Test 38');
test(numTeams([3,1,2,6,5,4,9,8,7,10,12,11,14,13,15,16,17]), 537, 'Test 39');
test(numTeams([23,17,11,5,29,25,19,13,31,27,21,15,33,28,22,16,35,30,24,18,37,32,26,20,39,34,28,23,41,36,31,25]), 1835, 'Test 40');
test(numTeams([1, 3, 5, 7, 9, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), 980, 'Test 41');
test(numTeams([2,1,3,6,5,4,8,7,9]), 52, 'Test 42');
test(numTeams([3, 1, 2, 4, 6, 5]), 9, 'Test 43');
test(numTeams([5,7,9,3,6,2,8,4,1]), 28, 'Test 44');
test(numTeams([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 120, 'Test 45');
test(numTeams([10, 20, 30, 40, 50, 15, 25, 35, 45, 55, 5, 1, 6, 2, 7, 3, 8, 4, 9, 11]), 320, 'Test 46');
test(numTeams([5, 2, 1, 7, 3, 8, 4, 6, 9, 10]), 57, 'Test 47');
test(numTeams([1, 10, 2, 9, 3, 8, 4, 7, 5, 6]), 50, 'Test 48');
test(numTeams([1,5,2,8,3,7,4,6]), 19, 'Test 49');
test(numTeams([3, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 430, 'Test 50');
test(numTeams([3,6,9,12,15,18,21,24,27,30,28,25,22,19,16,13,10,7,4,1]), 525, 'Test 51');
test(numTeams([2,5,1,6,3,4]), 3, 'Test 52');
test(numTeams([3,1,2,6,5,4,9,8,7,10]), 63, 'Test 53');
test(numTeams([1, 3, 2, 4, 6, 5, 8, 7, 10, 9, 12, 11]), 170, 'Test 54');
test(numTeams([5, 3, 1, 7, 9, 6, 10, 2, 4, 8]), 30, 'Test 55');
test(numTeams([1, 11, 2, 12, 3, 13, 4, 14, 5, 15, 6, 16, 7, 17, 8, 18, 9, 19, 10, 20]), 570, 'Test 56');
test(numTeams([15,25,10,20,5,30,35,50,45,40]), 57, 'Test 57');
test(numTeams([5,1,2,4,3,6,7,8,9,10,11,12,13,14,15]), 398, 'Test 58');
test(numTeams([5, 1, 6, 2, 7, 3, 8, 4, 9, 10]), 60, 'Test 59');
test(numTeams([50, 1, 51, 2, 52, 3, 53, 4, 54, 5]), 40, 'Test 60');
test(numTeams([8, 1, 2, 7, 4, 3, 6, 5]), 21, 'Test 61');
test(numTeams([1,3,5,7,9,2,4,6,8,10]), 60, 'Test 62');
test(numTeams([3,1,5,2,8,4,6,7,9,10]), 71, 'Test 63');
test(numTeams([10,15,20,25,30,5,12,18,24,35]), 44, 'Test 64');
test(numTeams([9,8,7,6,5,4,3,2,1,10,11,12,13,14,15]), 239, 'Test 65');
test(numTeams([2, 10, 4, 3, 8, 1, 6, 5]), 15, 'Test 66');
test(numTeams([9,8,7,6,5,4,3,2,1]), 84, 'Test 67');
test(numTeams([15,18,12,19,21,14,22,20,23,24,25]), 104, 'Test 68');
test(numTeams([7, 6, 9, 10, 5, 8, 2, 1, 4, 3]), 43, 'Test 69');
test(numTeams([25, 20, 30, 10, 40, 50, 15, 25, 35, 45]), 33, 'Test 70');
test(numTeams([5,2,8,3,1,9,4,6,7]), 20, 'Test 71');
test(numTeams([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 455, 'Test 72');
test(numTeams([100,101,99,98,102,103,97,96,104,105,95,94]), 98, 'Test 73');
test(numTeams([100,90,80,70,60,50,40,30,20,10]), 120, 'Test 74');
test(numTeams([5, 50, 15, 40, 25, 35, 10, 20, 30, 45]), 47, 'Test 75');
test(numTeams([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 21, 22, 23, 24, 25]), 1350, 'Test 76');
test(numTeams([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991]), 120, 'Test 77');
test(numTeams([5,3,7,1,9,4,6,8,2,10,11]), 67, 'Test 78');
test(numTeams([20, 50, 40, 60, 10, 70, 30]), 9, 'Test 79');
test(numTeams([20, 30, 10, 40, 50, 15, 25, 35, 45, 5]), 36, 'Test 80');
test(numTeams([30,20,10,50,40,60,80,70]), 29, 'Test 81');
test(numTeams([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 455, 'Test 82');
test(numTeams([9,6,7,3,8,2,5,4,10,1]), 47, 'Test 83');
test(numTeams([10,20,30,40,50,60,70,80,90,100]), 120, 'Test 84');
test(numTeams([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 455, 'Test 85');
test(numTeams([9, 8, 7, 6, 5, 4, 3, 2, 1]), 84, 'Test 86');
test(numTeams([1,10,2,9,3,8,4,7,5,6]), 50, 'Test 87');
test(numTeams([8,1,2,3,4,5,6,7]), 35, 'Test 88');
test(numTeams([5,3,7,1,9,2,8,4,6,10]), 34, 'Test 89');
test(numTeams([1,15,2,14,3,13,4,12,5,11,6,10,7,9,8]), 203, 'Test 90');
test(numTeams([1,3,5,2,4,6,7]), 22, 'Test 91');
test(numTeams([1000,500,250,125,62,31,15,7,3,1,2,4,8,16,32,64,128,256,512]), 444, 'Test 92');
test(numTeams([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 120, 'Test 93');
test(numTeams([2,1,3,6,5,7,4,8,9,10]), 85, 'Test 94');
test(numTeams([9, 8, 7, 6, 5, 4, 3, 2, 1, 10]), 84, 'Test 95');
test(numTeams([8, 5, 12, 9, 15, 6, 13, 7, 14, 4, 11, 3, 10, 2, 1]), 179, 'Test 96');
test(numTeams([7,6,5,4,3,2,1]), 35, 'Test 97');
test(numTeams([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14, 17, 16, 19, 18, 20]), 978, 'Test 98');
test(numTeams([10,20,30,15,25,35,5,12,18,28,50]), 56, 'Test 99');
test(numTeams([5,4,3,2,1,6,7,8,9,10]), 70, 'Test 100');
test(numTeams([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7]), 881, 'Test 101');
test(numTeams([1,2,10,4,3,8,7,9,6,5]), 50, 'Test 102');
test(numTeams([100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115]), 560, 'Test 103');
test(numTeams([1,9,3,6,5,8,4,7,2]), 32, 'Test 104');
test(numTeams([7,8,9,1,2,3,4,5,6]), 21, 'Test 105');
test(numTeams([1, 2, 3, 4, 5, 10, 9, 8, 7, 6, 11, 12, 13, 14, 15]), 355, 'Test 106');
test(numTeams([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 444, 'Test 107');
test(numTeams([1, 2, 3, 5, 4, 6, 8, 7, 9, 10]), 104, 'Test 108');
test(numTeams([50,25,75,10,40,60,90,5,30,65,80,100,15,45,70,85,95]), 238, 'Test 109');
test(numTeams([1,3,5,7,9,11,13]), 35, 'Test 110');
test(numTeams([13,11,9,7,5,3,1]), 35, 'Test 111');
test(numTeams([9,5,3,7,2,8,1,6,4,10]), 37, 'Test 112');
test(numTeams([20, 18, 19, 15, 17, 13, 16, 12, 14, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 1036, 'Test 113');
test(numTeams([100, 200, 150, 300, 50, 400, 250, 350, 10, 20]), 35, 'Test 114');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

