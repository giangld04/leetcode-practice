// Test: 1599. Maximum Profit Of Operating A Centennial Wheel
// 55 test cases from LeetCodeDataset
// Run: node test.js

const { minOperationsMaxProfit } = require("./solution");

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

console.log("\n1599. Maximum Profit Of Operating A Centennial Wheel\n");

test(minOperationsMaxProfit([50,50,50,50,50], 100, 1), 63, 'Test 1');
test(minOperationsMaxProfit([5,5,0,8,2], 6, 3), 6, 'Test 2');
test(minOperationsMaxProfit([0,0,0,0,0], 1, 1), -1, 'Test 3');
test(minOperationsMaxProfit([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1, 2), -1, 'Test 4');
test(minOperationsMaxProfit([0,0,0,0], 10, 5), -1, 'Test 5');
test(minOperationsMaxProfit([10,9,6], 6, 4), 7, 'Test 6');
test(minOperationsMaxProfit([0,0,0,0], 10, 1), -1, 'Test 7');
test(minOperationsMaxProfit([8,3], 5, 6), 3, 'Test 8');
test(minOperationsMaxProfit([0,0,0,0,0], 1, 10), -1, 'Test 9');
test(minOperationsMaxProfit([0,0,0,0,0], 5, 1), -1, 'Test 10');
test(minOperationsMaxProfit([50,50,50,50], 2, 1), 50, 'Test 11');
test(minOperationsMaxProfit([50,50,50,50,50], 10, 1), 63, 'Test 12');
test(minOperationsMaxProfit([3,4,0,5,1], 1, 92), -1, 'Test 13');
test(minOperationsMaxProfit([5,5,0,8,7,1,4,7,3,23], 43, 59), 16, 'Test 14');
test(minOperationsMaxProfit([10,10,10,10,10], 5, 4), 13, 'Test 15');
test(minOperationsMaxProfit([50,50,50,50,50], 100, 50), 63, 'Test 16');
test(minOperationsMaxProfit([49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49], 1, 1), 343, 'Test 17');
test(minOperationsMaxProfit([10,0,10,0,10,0,10,0,10,0], 5, 3), 13, 'Test 18');
test(minOperationsMaxProfit([0,10,0,10,0,10,0,10,0,10], 1, 99), -1, 'Test 19');
test(minOperationsMaxProfit([50,0,50,0,50,0,50,0,50,0,50,0,50,0,50,0,50,0,50,0], 10, 20), 125, 'Test 20');
test(minOperationsMaxProfit([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 1, 2), 54, 'Test 21');
test(minOperationsMaxProfit([10,0,0,10,0,0,10,0,0,10], 6, 4), 12, 'Test 22');
test(minOperationsMaxProfit([4,4,4,4,4,4,4,4,4,4], 3, 15), -1, 'Test 23');
test(minOperationsMaxProfit([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 2, 1), 13, 'Test 24');
test(minOperationsMaxProfit([0,0,0,0,0,0,0,0,0,100], 5, 4), 34, 'Test 25');
test(minOperationsMaxProfit([20,20,20,20,20,20,20,20,20,20], 5, 8), 50, 'Test 26');
test(minOperationsMaxProfit([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 2, 3), 53, 'Test 27');
test(minOperationsMaxProfit([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1, 1), -1, 'Test 28');
test(minOperationsMaxProfit([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10, 5), 138, 'Test 29');
test(minOperationsMaxProfit([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100], 5, 1), 35, 'Test 30');
test(minOperationsMaxProfit([10,20,30,40,50], 50, 1), 38, 'Test 31');
test(minOperationsMaxProfit([10, 20, 15, 5, 25], 4, 7), 19, 'Test 32');
test(minOperationsMaxProfit([20,10,0,30,10,0,40,10,0,50], 20, 10), 43, 'Test 33');
test(minOperationsMaxProfit([30, 0, 10, 40, 20], 3, 5), 25, 'Test 34');
test(minOperationsMaxProfit([50,0,50,0,50,0,50,0,50,0], 10, 5), 63, 'Test 35');
test(minOperationsMaxProfit([10,20,30,40,50,40,30,20,10,5,15,25,35,45,55,65,75,85,95,100,95,85,75,65,55,45,35,25,15,5], 10, 20), 337, 'Test 36');
test(minOperationsMaxProfit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 5), -1, 'Test 37');
test(minOperationsMaxProfit([4,4,4,4,4,4,4,4,4,4], 1, 1), 10, 'Test 38');
test(minOperationsMaxProfit([30,20,10,0,0,0,0,0,0,0], 3, 10), 15, 'Test 39');
test(minOperationsMaxProfit([45, 50, 55, 60, 65, 70, 75, 80, 85, 90], 15, 12), 169, 'Test 40');
test(minOperationsMaxProfit([100, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1, 2), 25, 'Test 41');
test(minOperationsMaxProfit([10,20,30,40,50], 1, 95), -1, 'Test 42');
test(minOperationsMaxProfit([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,50,50,50,50,50,50,50,50,50], 5, 4), 145, 'Test 43');
test(minOperationsMaxProfit([25, 25, 25, 25, 25, 25, 25, 25, 25, 25], 2, 3), 63, 'Test 44');
test(minOperationsMaxProfit([100,0,0,0,0,0,0,0,0,0], 10, 90), -1, 'Test 45');
test(minOperationsMaxProfit([4,3,2,1,0,0,0,0,0,0], 50, 2), 4, 'Test 46');
test(minOperationsMaxProfit([1,2,3,4,5,6,7,8,9,10], 10, 20), 15, 'Test 47');
test(minOperationsMaxProfit([40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40], 1, 1), 200, 'Test 48');
test(minOperationsMaxProfit([1,2,3,4,5,6,7,8,9,10], 2, 3), 15, 'Test 49');
test(minOperationsMaxProfit([10,10,10,10,10,10,10,10,10,10], 5, 4), 25, 'Test 50');
test(minOperationsMaxProfit([2,5,3,1,4,6,2,3,5,1,4,2,3,6,5,1,4,2,3,6,5], 3, 5), 22, 'Test 51');
test(minOperationsMaxProfit([15, 25, 35, 45, 55], 10, 8), 44, 'Test 52');
test(minOperationsMaxProfit([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5, 4), 20, 'Test 53');
test(minOperationsMaxProfit([50,25,50,25,50,25,50,25,50,25], 4, 10), 94, 'Test 54');
test(minOperationsMaxProfit([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 5, 6), -1, 'Test 55');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

