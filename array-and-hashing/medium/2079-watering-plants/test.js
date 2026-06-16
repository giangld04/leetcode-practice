// Test: 2079. Watering Plants
// 84 test cases from LeetCodeDataset
// Run: node test.js

const { wateringPlants } = require("./solution");

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

console.log("\n2079. Watering Plants\n");

test(wateringPlants([1000000], 1000000), 1, 'Test 1');
test(wateringPlants([3,2,4,2,1], 6), 17, 'Test 2');
test(wateringPlants([1,1,1,1,1,1,1,1,1,1], 1), 100, 'Test 3');
test(wateringPlants([5,5,5,5,5], 5), 25, 'Test 4');
test(wateringPlants([10,10,10], 10), 9, 'Test 5');
test(wateringPlants([1,1,1,4,2,3], 4), 30, 'Test 6');
test(wateringPlants([1,2,3,4,5], 10), 13, 'Test 7');
test(wateringPlants([1,2,3], 6), 3, 'Test 8');
test(wateringPlants([5,8,6], 10), 9, 'Test 9');
test(wateringPlants([1,1,1,1,1], 5), 5, 'Test 10');
test(wateringPlants([2,2,3,3], 5), 14, 'Test 11');
test(wateringPlants([3,2,4,2,1], 4), 17, 'Test 12');
test(wateringPlants([7,7,7,7,7,7,7], 8), 49, 'Test 13');
test(wateringPlants([2,4,5,1,2], 6), 17, 'Test 14');
test(wateringPlants([10], 10), 1, 'Test 15');
test(wateringPlants([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 15), 146, 'Test 16');
test(wateringPlants([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 5), 961, 'Test 17');
test(wateringPlants([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 25), 242, 'Test 18');
test(wateringPlants([9, 8, 7, 6, 5, 4, 3, 2, 1], 10), 41, 'Test 19');
test(wateringPlants([2, 3, 2, 1, 4, 2, 1, 3, 2, 1, 4, 2, 1], 6), 77, 'Test 20');
test(wateringPlants([1,1,1,2,2,2,3,3,3,4,4,4], 3), 138, 'Test 21');
test(wateringPlants([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 50), 88, 'Test 22');
test(wateringPlants([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 10), 362, 'Test 23');
test(wateringPlants([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 200, 'Test 24');
test(wateringPlants([2,4,5,1,2], 5), 17, 'Test 25');
test(wateringPlants([7,2,5,9,3,8,4,6,1,1,1,1], 15), 42, 'Test 26');
test(wateringPlants([1, 3, 2, 4, 2, 1, 3, 2, 1, 4, 2, 1], 5), 78, 'Test 27');
test(wateringPlants([5,8,6,10,2,1,1,1,1,1], 12), 32, 'Test 28');
test(wateringPlants([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10], 20), 152, 'Test 29');
test(wateringPlants([2,4,5,1,2,3,4,5,6,7,8], 12), 71, 'Test 30');
test(wateringPlants([10,9,8,7,6,5,4,3,2,1], 10), 54, 'Test 31');
test(wateringPlants([9,1,5,3,7,8,4,2], 10), 42, 'Test 32');
test(wateringPlants([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 20), 213, 'Test 33');
test(wateringPlants([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 30), 2881, 'Test 34');
test(wateringPlants([2, 4, 6, 8, 10], 10), 23, 'Test 35');
test(wateringPlants([1000000, 500000, 1000000, 500000, 1000000, 500000], 1000000), 36, 'Test 36');
test(wateringPlants([100,200,300,400,500], 1000), 13, 'Test 37');
test(wateringPlants([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 3), 900, 'Test 38');
test(wateringPlants([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 150), 68, 'Test 39');
test(wateringPlants([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 15), 4499, 'Test 40');
test(wateringPlants([1,2,3,4,5,6,7,8,9,10], 10), 88, 'Test 41');
test(wateringPlants([1, 3, 2, 5, 4, 3, 2, 1], 5), 50, 'Test 42');
test(wateringPlants([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 3), 400, 'Test 43');
test(wateringPlants([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 18), 52, 'Test 44');
test(wateringPlants([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1], 10), 249, 'Test 45');
test(wateringPlants([1,2,3,4,5,6,7,8,9,10], 15), 68, 'Test 46');
test(wateringPlants([9,1,2,3,4,5,6,7,8], 10), 65, 'Test 47');
test(wateringPlants([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), 200, 'Test 48');
test(wateringPlants([2,4,6,8,10,12,14,16,18,20], 20), 88, 'Test 49');
test(wateringPlants([5,8,6,7,4,9], 12), 28, 'Test 50');
test(wateringPlants([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 4), 400, 'Test 51');
test(wateringPlants([10,9,8,7,6,5,4,3,2,1], 5), 84, 'Test 52');
test(wateringPlants([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 5), 200, 'Test 53');
test(wateringPlants([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 25), 180, 'Test 54');
test(wateringPlants([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 15), 225, 'Test 55');
test(wateringPlants([2, 4, 6, 8, 10], 12), 19, 'Test 56');
test(wateringPlants([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 127, 'Test 57');
test(wateringPlants([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2), 511, 'Test 58');
test(wateringPlants([3, 1, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1], 4), 407, 'Test 59');
test(wateringPlants([5,8,6,7,9,4,2], 10), 37, 'Test 60');
test(wateringPlants([7,3,5,8,10,2,6,4,9,1], 15), 52, 'Test 61');
test(wateringPlants([1,3,5,7,9,11,13,15,17,19], 20), 78, 'Test 62');
test(wateringPlants([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), 6724, 'Test 63');
test(wateringPlants([7, 3, 6, 2, 5, 4, 9, 1, 8], 12), 49, 'Test 64');
test(wateringPlants([9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9], 15), 126, 'Test 65');
test(wateringPlants([100,200,100], 150), 9, 'Test 66');
test(wateringPlants([100, 200, 300, 400, 500], 1000), 13, 'Test 67');
test(wateringPlants([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 15), 38, 'Test 68');
test(wateringPlants([100, 200, 300, 400, 500], 500), 23, 'Test 69');
test(wateringPlants([5,8,6,10,2,9,4], 12), 41, 'Test 70');
test(wateringPlants([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5), 2878, 'Test 71');
test(wateringPlants([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 10082, 'Test 72');
test(wateringPlants([1000000, 1000000, 1000000], 1000000), 9, 'Test 73');
test(wateringPlants([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10), 249, 'Test 74');
test(wateringPlants([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 10), 146, 'Test 75');
test(wateringPlants([9,8,7,6,5,4,3,2,1], 5), 67, 'Test 76');
test(wateringPlants([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 15), 46, 'Test 77');
test(wateringPlants([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 14), 200, 'Test 78');
test(wateringPlants([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 25), 296, 'Test 79');
test(wateringPlants([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 20), 177, 'Test 80');
test(wateringPlants([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 15), 368, 'Test 81');
test(wateringPlants([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7], 14), 200, 'Test 82');
test(wateringPlants([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], 10), 276, 'Test 83');
test(wateringPlants([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 900, 'Test 84');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

