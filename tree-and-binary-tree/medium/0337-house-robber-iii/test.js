// Test: 337. House Robber Iii
// 91 test cases from LeetCodeDataset
// Run: node test.js

const { rob } = require("./solution");

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

console.log("\n337. House Robber Iii\n");

test(rob([1,2,3,4,5,6,7]), 23, 'Test 1');
test(rob([3,2,null,1,3,null,1]), 7, 'Test 2');
test(rob([1,null,2,null,3,null,4,null,5]), 9, 'Test 3');
test(rob([3,0,0]), 3, 'Test 4');
test(rob([10,5,15,3,7,null,18]), 38, 'Test 5');
test(rob([3,4,5,1,3,null,1]), 9, 'Test 6');
test(rob([2,1,3,null,4,null,7]), 13, 'Test 7');
test(rob([2,1,3,null,4]), 7, 'Test 8');
test(rob([1,null,3,2,4,null,5,6]), 14, 'Test 9');
test(rob([3,2,3,null,3,null,1]), 7, 'Test 10');
test(rob([0]), 0, 'Test 11');
test(rob([3,null,4,null,5]), 8, 'Test 12');
test(rob([10,9,20,null,null,15,7,null,3,18,null,6,2,0,1,5,null,null,null,null,4]), 59, 'Test 13');
test(rob([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 30, 'Test 14');
test(rob([10,5,15,2,7,null,20,1,null,6,8,null,null,null,9]), 55, 'Test 15');
test(rob([10,5,15,3,7,13,18,1,null,6,8,12,14,17,19]), 97, 'Test 16');
test(rob([20,10,30,5,15,25,35,2,7,13,17,23,27,33,37,1,3,6,8,12,14,16,18,22,24,26,28,32,34,36,38]), 418, 'Test 17');
test(rob([1,2,3,4,null,null,5,null,null,6,null,null,7]), 17, 'Test 18');
test(rob([1,2,2,3,3,null,null,4,4,5,5,null,null,6,6,7,7,8,8,9,9]), 63, 'Test 19');
test(rob([2,1,3,null,4,null,5,null,6]), 13, 'Test 20');
test(rob([5,2,13,null,5,null,14,20,null,null,9,10,3]), 44, 'Test 21');
test(rob([100,50,150,25,75,125,175,10,30,60,80,110,140,160,190]), 980, 'Test 22');
test(rob([10,5,15,3,7,12,20,1,null,6,null,11,13,null,null,18,22]), 104, 'Test 23');
test(rob([3,2,3,3,3,null,2,null,1]), 11, 'Test 24');
test(rob([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15]), 80, 'Test 25');
test(rob([3000,1000,2000,500,700,null,3000,null,600,null,800,null,900]), 7400, 'Test 26');
test(rob([5,3,7,2,4,6,8,1,9,null,null,11,13,null,null,15,17]), 82, 'Test 27');
test(rob([3,2,3,2,null,1,1,1,1,2,2,2,2,1,1]), 16, 'Test 28');
test(rob([100,90,80,70,60,50,40,30,20,10]), 320, 'Test 29');
test(rob([3,1,4,3,null,1,5]), 12, 'Test 30');
test(rob([1,3,2,5,3,null,9]), 18, 'Test 31');
test(rob([10,5,15,3,7,null,18,1,null,6,8,13,null,null,null,null,19]), 61, 'Test 32');
test(rob([10,5,15,2,7,null,20,1,null,6,8,null,null,null,null,18]), 58, 'Test 33');
test(rob([5,1,5,null,7,6,null,4,null,3,null,2,8,null,null,null,9]), 35, 'Test 34');
test(rob([3,9,20,null,null,15,7,12,18,13,17,16,19,14,21,10,11,null,15]), 137, 'Test 35');
test(rob([6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]), 34, 'Test 36');
test(rob([10,5,15,3,7,null,18,1,null,6,8,null,20,17,21]), 92, 'Test 37');
test(rob([6,3,7,2,5,null,8,1,4,null,null,null,null,null,9]), 32, 'Test 38');
test(rob([8,4,13,2,6,10,14,1,null,5,7,null,null,9,12]), 53, 'Test 39');
test(rob([3,2,3,null,3,null,1,5,6,7,8,9,10,11,12]), 63, 'Test 40');
test(rob([15,10,20,8,null,null,25,null,null,null,30]), 60, 'Test 41');
test(rob([50,20,50,10,30,40,60,5,15,null,null,null,null,null,70]), 210, 'Test 42');
test(rob([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 368, 'Test 43');
test(rob([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 162, 'Test 44');
test(rob([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 97, 'Test 45');
test(rob([10,5,15,3,7,13,18,1,6,8,9,12,14,17,19]), 106, 'Test 46');
test(rob([10,5,null,1,7,null,12,0,2,6,8,null,null,11,13,null,null,3,4,null,null,null,null,9,10]), 76, 'Test 47');
test(rob([5,4,7,3,null,2,9,null,null,null,10]), 27, 'Test 48');
test(rob([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 259, 'Test 49');
test(rob([3,2,3,null,3,null,1,null,null,5,6]), 17, 'Test 50');
test(rob([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180,5,15,20,35,65,70,85,105,135,145,155,175,185,190]), 1890, 'Test 51');
test(rob([10,5,15,3,7,13,18,1,6,8,12,14,17,9,11,2,4,16,19,20]), 144, 'Test 52');
test(rob([3,9,20,null,null,15,7,null,null,8,12,null,null,11,null,10]), 59, 'Test 53');
test(rob([3,2,3,null,3,null,1,5,6,7,8,9,10]), 45, 'Test 54');
test(rob([9,4,17,3,6,11,20,1,5,8,13,null,22,null,2,null,null,0,2,null,9,null,null,7,12,null,null,null,2]), 89, 'Test 55');
test(rob([2,1,3,null,4,null,5,6,null,7,null,8,null,9,null,10]), 32, 'Test 56');
test(rob([1,2,3,4,5,null,null,6,7,8,9,null,null,null,null,10,11,null,null,null,null,null,12]), 49, 'Test 57');
test(rob([50,20,60,10,30,55,70,5,15,25,35,51,59,65,75,1,4,9,16,24,26,34,36,50,58,61,64,66,73,76,78]), 891, 'Test 58');
test(rob([1,null,2,null,3,null,4,null,5,null,6,null,7]), 16, 'Test 59');
test(rob([5,4,5,null,1,4,null,null,2,3]), 14, 'Test 60');
test(rob([10,5,15,2,7,13,18,1,null,6,8,9,14,null,null,null,19,null,20]), 100, 'Test 61');
test(rob([5,3,7,2,5,null,8,1,null,4,null,6,null,3,5]), 28, 'Test 62');
test(rob([10,5,15,3,7,12,20,1,null,6,null,11,13,null,null,18,22,19,23,24,25,26,27,28,29,30]), 283, 'Test 63');
test(rob([50,20,60,10,30,55,70,5,15,25,35,52,58,65,75,2,7,12,17,23,27,32,37,51,56,59,64,67,72,76,78]), 895, 'Test 64');
test(rob([100,50,50,25,25,25,25,10,10,10,10,10,10,10,10]), 200, 'Test 65');
test(rob([1,2,3,null,4,null,null,5,null,null,6,null,null,null,7]), 13, 'Test 66');
test(rob([2,1,3,null,4,null,5,null,6,null,7]), 17, 'Test 67');
test(rob([9,4,7,3,6,5,11,2,5,null,null,8,null,10,12,null,null,null,null,null,14]), 63, 'Test 68');
test(rob([3,4,5,1,3,null,1,5,6,null,2,8,null,null,null,9,null,null,10]), 41, 'Test 69');
test(rob([8,4,13,2,6,10,14,1,3,5,7,9,11,12,15]), 80, 'Test 70');
test(rob([7,3,8,1,4,3,9,0,2,5,6,null,null,null,null,null,11]), 43, 'Test 71');
test(rob([10,5,15,3,7,null,18,1,null,6,8]), 45, 'Test 72');
test(rob([10,5,15,2,7,13,18,1,null,6,8,9,14,19,20]), 97, 'Test 73');
test(rob([10,5,15,3,7,null,18,1,null,6,8,14,19,null,null,13,null,null,null,null,null,null,12]), 75, 'Test 74');
test(rob([5,2,8,1,3,null,9,0,null,null,4,null,null,6,null,10]), 34, 'Test 75');
test(rob([10,5,15,2,7,13,18,1,null,6,8,null,14,null,null,19]), 77, 'Test 76');
test(rob([50,20,30,10,40,null,null,5,null,null,55]), 115, 'Test 77');
test(rob([10,5,15,3,7,null,18,1,2,null,null,null,20]), 45, 'Test 78');
test(rob([5,2,6,1,3,null,8,null,null,4,7,null,null,null,9]), 30, 'Test 79');
test(rob([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 32, 'Test 80');
test(rob([1,2,3,4,5,6,7,null,null,null,null,null,null,8,9,10,11,12]), 56, 'Test 81');
test(rob([7,3,8,1,4,5,9,0,2,6,null,null,null,null,null,null,10]), 39, 'Test 82');
test(rob([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13]), 49, 'Test 83');
test(rob([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 25, 'Test 84');
test(rob([20,10,10,5,15,null,null,3,7,12,18]), 60, 'Test 85');
test(rob([8,4,13,2,6,10,17,1,null,5,7,null,12,null,null,null,14]), 65, 'Test 86');
test(rob([7,3,8,1,4,6,9,0,2,5,null,null,null,null,null,null,null,10,11,null,12,null,13,14,15,null,null,null,null,16,17]), 101, 'Test 87');
test(rob([3,2,3,null,3,null,1,2,null,4]), 11, 'Test 88');
test(rob([50,20,50,null,30,null,60,10,40,null,70]), 190, 'Test 89');
test(rob([3,1,5,0,2,4,6]), 15, 'Test 90');
test(rob([5,4,8,11,null,13,4,7,2,null,null,5,1]), 35, 'Test 91');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

