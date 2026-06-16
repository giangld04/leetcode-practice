// Test: 2560. House Robber Iv
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { minCapability } = require("./solution");

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

console.log("\n2560. House Robber Iv\n");

test(minCapability([1,2,3,4,5], 3), 5, 'Test 1');
test(minCapability([10,9,8,7,6,5,4,3,2,1], 5), 9, 'Test 2');
test(minCapability([10,1,1,10,1,1,10], 3), 10, 'Test 3');
test(minCapability([5,5,5,5,5,5,5,5,5,5], 4), 5, 'Test 4');
test(minCapability([10,20,30,40,50], 1), 10, 'Test 5');
test(minCapability([5,3,1,1,2,3], 2), 2, 'Test 6');
test(minCapability([5,5,5,5,5,5,5,5,5,5], 5), 5, 'Test 7');
test(minCapability([1,2,3,4,5,6,7,8,9,10], 3), 5, 'Test 8');
test(minCapability([2,7,9,3,1], 2), 2, 'Test 9');
test(minCapability([2,3,5,9], 2), 5, 'Test 10');
test(minCapability([2, 3, 2, 3, 2, 3, 2, 3, 2, 3], 4), 2, 'Test 11');
test(minCapability([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 15), 10, 'Test 12');
test(minCapability([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 9, 'Test 13');
test(minCapability([10,5,15,20,25,30,35,40], 4), 35, 'Test 14');
test(minCapability([2, 1, 3, 1, 2, 1, 3, 1, 2, 1, 3, 1, 2, 1, 3, 1, 2, 1, 3, 1], 5), 1, 'Test 15');
test(minCapability([50,100,150,200,250,300,350,400,450,500], 3), 250, 'Test 16');
test(minCapability([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5), 1, 'Test 17');
test(minCapability([1,2,3,4,5,6,7,8,9,10], 5), 9, 'Test 18');
test(minCapability([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 50), 2, 'Test 19');
test(minCapability([3,6,1,8,5,2,9,4,7,10], 4), 4, 'Test 20');
test(minCapability([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 10), 37, 'Test 21');
test(minCapability([10, 5, 20, 25, 15, 30, 35, 40, 45, 50], 8), 51, 'Test 22');
test(minCapability([3, 5, 7, 2, 9, 1, 10, 8, 6, 4], 3), 3, 'Test 23');
test(minCapability([10, 2, 8, 4, 7, 3, 9, 5, 6, 1], 4), 4, 'Test 24');
test(minCapability([1, 100, 1, 100, 1, 100, 1, 100, 1, 100], 3), 1, 'Test 25');
test(minCapability([10, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31], 6), 29, 'Test 26');
test(minCapability([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 1, 'Test 27');
test(minCapability([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97], 10), 67, 'Test 28');
test(minCapability([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 6), 11, 'Test 29');
test(minCapability([1000000000, 1, 1000000000, 1, 1000000000, 1, 1000000000, 1, 1000000000, 1], 5), 1, 'Test 30');
test(minCapability([100,10,1,100,10,1,100,10,1,100], 4), 100, 'Test 31');
test(minCapability([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 8), 29, 'Test 32');
test(minCapability([1,2,1,2,1,2,1,2,1,2], 5), 1, 'Test 33');
test(minCapability([10, 1, 1, 10, 1, 1, 10, 1, 1, 10], 5), 10, 'Test 34');
test(minCapability([1000000000,1000000000,1000000000,1000000000], 2), 1000000000, 'Test 35');
test(minCapability([100,90,80,70,60,50,40,30,20,10], 3), 50, 'Test 36');
test(minCapability([5,10,15,20,25,30,35,40,45,50], 4), 35, 'Test 37');
test(minCapability([1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10], 10), 1, 'Test 38');
test(minCapability([8, 12, 15, 20, 25, 30, 35, 40, 45, 50, 55], 7), 56, 'Test 39');
test(minCapability([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40], 10), 38, 'Test 40');
test(minCapability([8, 7, 6, 5, 4, 3, 2, 1], 3), 5, 'Test 41');
test(minCapability([1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10], 5), 1, 'Test 42');
test(minCapability([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7), 13, 'Test 43');
test(minCapability([3, 5, 10, 2, 8, 14, 1, 11, 7, 6], 5), 10, 'Test 44');
test(minCapability([10, 15, 20, 25, 30, 35, 40, 45, 50, 55], 5), 50, 'Test 45');
test(minCapability([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 5), 900, 'Test 46');
test(minCapability([8, 6, 7, 5, 3, 0, 9], 3), 6, 'Test 47');
test(minCapability([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 15), 3, 'Test 48');
test(minCapability([3, 10, 3, 10, 3, 10, 3, 10, 3, 10, 3, 10, 3, 10, 3, 10, 3, 10], 4), 3, 'Test 49');
test(minCapability([8, 3, 9, 2, 7, 4, 6, 1, 5, 10], 4), 4, 'Test 50');
test(minCapability([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 7), 10, 'Test 51');
test(minCapability([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5), 90, 'Test 52');
test(minCapability([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30], 6), 22, 'Test 53');
test(minCapability([1, 3, 1, 1, 2, 1, 5, 1, 4, 1], 4), 1, 'Test 54');
test(minCapability([2, 3, 7, 8, 4, 5, 6, 9], 3), 6, 'Test 55');
test(minCapability([10,2,9,4,7,3,8,5,6,1], 3), 3, 'Test 56');
test(minCapability([1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3], 8), 3, 'Test 57');
test(minCapability([9,2,5,7,1,3,8,6,4,10], 5), 9, 'Test 58');
test(minCapability([23,45,12,34,56,78,89,67,45,23,4,6,8,10,12,14,16,18,20,22], 6), 20, 'Test 59');
test(minCapability([7, 10, 4, 3, 20, 15], 3), 15, 'Test 60');
test(minCapability([1,3,5,7,9,11,13,15,17,19], 5), 17, 'Test 61');
test(minCapability([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80], 10), 98, 'Test 62');
test(minCapability([2,1,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2], 5), 1, 'Test 63');
test(minCapability([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 3), 500, 'Test 64');
test(minCapability([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 1, 'Test 65');
test(minCapability([3, 6, 2, 8, 7, 2, 5, 9, 4, 10], 4), 4, 'Test 66');
test(minCapability([3, 6, 7, 12, 14, 11, 14, 13, 15, 10, 11, 13], 4), 11, 'Test 67');
test(minCapability([1000000000,500000000,1000000000,500000000,1000000000,500000000,1000000000], 3), 500000000, 'Test 68');
test(minCapability([100, 1, 100, 1, 100, 1, 100, 1, 100, 1], 5), 1, 'Test 69');
test(minCapability([100, 200, 300, 10, 20, 30, 400, 500, 600, 1000], 5), 600, 'Test 70');
test(minCapability([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 7), 26, 'Test 71');
test(minCapability([1,3,2,5,7,6,4,8,9,10], 5), 9, 'Test 72');
test(minCapability([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 5), 1, 'Test 73');
test(minCapability([5,3,5,3,5,3,5,3,5,3], 4), 3, 'Test 74');
test(minCapability([1, 10, 1, 10, 1, 10, 1, 10, 1, 10], 5), 1, 'Test 75');
test(minCapability([100, 1, 200, 2, 300, 3, 400, 4, 500, 5], 3), 3, 'Test 76');
test(minCapability([9, 4, 1, 7, 3, 8, 5, 2, 6, 0], 4), 3, 'Test 77');
test(minCapability([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 6), 5, 'Test 78');
test(minCapability([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5), 9, 'Test 79');
test(minCapability([10,20,30,40,50,60,70,80,90,100], 3), 50, 'Test 80');
test(minCapability([1, 100, 1, 100, 1, 100, 1, 100, 1, 100], 5), 1, 'Test 81');
test(minCapability([1, 3, 1, 5, 1, 7, 1, 9], 4), 1, 'Test 82');
test(minCapability([5, 9, 7, 1, 3, 8, 6, 4, 2, 10, 1, 11, 13, 12, 14, 15, 16, 17, 18, 19], 6), 7, 'Test 83');
test(minCapability([9, 1, 5, 3, 7, 11, 15, 13, 17, 19], 4), 13, 'Test 84');
test(minCapability([15, 20, 10, 5, 1, 25, 30, 40, 50, 60], 5), 50, 'Test 85');
test(minCapability([1000000000,1,1000000000,1,1000000000,1,1000000000,1], 4), 1, 'Test 86');
test(minCapability([15,10,20,30,40,50,60,70,80,90,100], 5), 80, 'Test 87');
test(minCapability([1, 2, 100, 3, 4, 100, 5, 6, 100, 7, 8, 100, 9, 10, 100], 5), 9, 'Test 88');
test(minCapability([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 6), 11, 'Test 89');
test(minCapability([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 19, 'Test 90');
test(minCapability([1,10,2,9,3,8,4,7,5,6], 5), 5, 'Test 91');
test(minCapability([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 7), 10, 'Test 92');
test(minCapability([50, 10, 25, 60, 20, 30, 70, 5, 80, 1], 6), 81, 'Test 93');
test(minCapability([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 7), 5, 'Test 94');
test(minCapability([1,3,2,5,7,8,6,9,4,10], 3), 4, 'Test 95');
test(minCapability([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 5), 17, 'Test 96');
test(minCapability([9,8,7,6,5,4,3,2,1], 3), 5, 'Test 97');
test(minCapability([1,2,3,4,5,6,7,8,9,10], 6), 11, 'Test 98');
test(minCapability([1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5], 10), 1, 'Test 99');
test(minCapability([10, 20, 10, 30, 10, 40, 10, 50, 10, 60], 3), 10, 'Test 100');
test(minCapability([50, 1, 51, 2, 52, 3, 53, 4, 54, 5, 55, 6, 56, 7, 57, 8, 58, 9, 59, 10], 5), 5, 'Test 101');
test(minCapability([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 5), 5, 'Test 102');
test(minCapability([100,90,80,70,60,50,40,30,20,10], 4), 70, 'Test 103');
test(minCapability([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 7), 5, 'Test 104');
test(minCapability([8, 2, 4, 1, 6, 5, 3, 7, 10, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 6), 11, 'Test 105');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

