// Test: 3420. Count Non Decreasing Subarrays After K Operations
// 135 test cases from LeetCodeDataset
// Run: node test.js

const { countNonDecreasingSubarrays } = require("./solution");

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

console.log("\n3420. Count Non Decreasing Subarrays After K Operations\n");

test(countNonDecreasingSubarrays([5,4,3,2,1], 10), 15, 'Test 1');
test(countNonDecreasingSubarrays([10,20,10,20,10], 15), 13, 'Test 2');
test(countNonDecreasingSubarrays([1,2,3,4,5,6,7,8,9,10], 1), 55, 'Test 3');
test(countNonDecreasingSubarrays([1,100,2,99,3,98], 100), 17, 'Test 4');
test(countNonDecreasingSubarrays([100,50,25,12,6,3,1], 50), 17, 'Test 5');
test(countNonDecreasingSubarrays([6,3,1,2,4,4], 7), 17, 'Test 6');
test(countNonDecreasingSubarrays([1,3,2,4,3,5], 5), 21, 'Test 7');
test(countNonDecreasingSubarrays([1,2,3,4,5], 3), 15, 'Test 8');
test(countNonDecreasingSubarrays([1,2,2,3,4,4,5], 6), 28, 'Test 9');
test(countNonDecreasingSubarrays([3,2,1,4,5,6], 3), 21, 'Test 10');
test(countNonDecreasingSubarrays([1,10,3,4,2,5], 8), 15, 'Test 11');
test(countNonDecreasingSubarrays([10,9,8,7,6,5,4,3,2,1], 15), 45, 'Test 12');
test(countNonDecreasingSubarrays([1,2,3], 0), 6, 'Test 13');
test(countNonDecreasingSubarrays([9,7,5,3,1], 5), 9, 'Test 14');
test(countNonDecreasingSubarrays([1], 1), 1, 'Test 15');
test(countNonDecreasingSubarrays([3,2,1,2,3], 4), 15, 'Test 16');
test(countNonDecreasingSubarrays([10,10,10,10,10], 0), 15, 'Test 17');
test(countNonDecreasingSubarrays([6,3,1,3,6], 4), 12, 'Test 18');
test(countNonDecreasingSubarrays([1,3,5,2,4,6], 5), 21, 'Test 19');
test(countNonDecreasingSubarrays([1,3,5,7,9], 1), 15, 'Test 20');
test(countNonDecreasingSubarrays([1,3,5,7,9], 0), 15, 'Test 21');
test(countNonDecreasingSubarrays([1,2,2,3,3,3,4], 5), 28, 'Test 22');
test(countNonDecreasingSubarrays([1,1,1,1,1], 1), 15, 'Test 23');
test(countNonDecreasingSubarrays([9,7,5,3,1], 15), 14, 'Test 24');
test(countNonDecreasingSubarrays([1,1,1,1,1], 0), 15, 'Test 25');
test(countNonDecreasingSubarrays([10,9,8,7,6,5,4,3,2,1], 50), 55, 'Test 26');
test(countNonDecreasingSubarrays([1,3,5,7,9], 5), 15, 'Test 27');
test(countNonDecreasingSubarrays([7,8,9,10,1,2,3,4,5,6], 20), 39, 'Test 28');
test(countNonDecreasingSubarrays([10,9,8,7,6,5,4,3,2,1], 25), 49, 'Test 29');
test(countNonDecreasingSubarrays([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 50), 105, 'Test 30');
test(countNonDecreasingSubarrays([1000000000,999999999,999999998,999999997,999999996], 1000000000), 15, 'Test 31');
test(countNonDecreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 50), 120, 'Test 32');
test(countNonDecreasingSubarrays([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 50), 189, 'Test 33');
test(countNonDecreasingSubarrays([7, 6, 5, 8, 7, 6, 9, 8, 7, 10, 9, 8, 11, 10, 9], 70), 120, 'Test 34');
test(countNonDecreasingSubarrays([1,3,2,5,4,6,7], 5), 28, 'Test 35');
test(countNonDecreasingSubarrays([5, 3, 8, 6, 10, 9, 14, 12, 16, 15], 50), 55, 'Test 36');
test(countNonDecreasingSubarrays([1, 2, 3, 2, 1, 2, 3, 4, 3, 2, 1], 15), 66, 'Test 37');
test(countNonDecreasingSubarrays([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 45), 55, 'Test 38');
test(countNonDecreasingSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 20), 120, 'Test 39');
test(countNonDecreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5], 25), 120, 'Test 40');
test(countNonDecreasingSubarrays([10, 20, 10, 30, 20, 40, 30, 50, 40, 60], 25), 43, 'Test 41');
test(countNonDecreasingSubarrays([1, 5, 3, 7, 8, 2, 6, 4, 9, 10], 15), 55, 'Test 42');
test(countNonDecreasingSubarrays([1,100,2,99,3,98,4,97,5,96], 500), 55, 'Test 43');
test(countNonDecreasingSubarrays([3,1,2,1,3,2,1,3,2,1], 30), 55, 'Test 44');
test(countNonDecreasingSubarrays([10, 20, 10, 20, 10, 20, 10, 20, 10, 20], 50), 55, 'Test 45');
test(countNonDecreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 0), 210, 'Test 46');
test(countNonDecreasingSubarrays([5, 3, 8, 6, 7, 2, 4, 9, 1, 10], 20), 49, 'Test 47');
test(countNonDecreasingSubarrays([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 20), 45, 'Test 48');
test(countNonDecreasingSubarrays([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 1000000), 9316, 'Test 49');
test(countNonDecreasingSubarrays([1,1,2,2,3,3,4,4,5,5,6,6], 15), 78, 'Test 50');
test(countNonDecreasingSubarrays([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 100), 189, 'Test 51');
test(countNonDecreasingSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1], 20), 120, 'Test 52');
test(countNonDecreasingSubarrays([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3], 10), 111, 'Test 53');
test(countNonDecreasingSubarrays([1, 3, 2, 4, 3, 5, 4, 6, 5, 7], 10), 55, 'Test 54');
test(countNonDecreasingSubarrays([5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5], 100), 210, 'Test 55');
test(countNonDecreasingSubarrays([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 100), 210, 'Test 56');
test(countNonDecreasingSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 5), 55, 'Test 57');
test(countNonDecreasingSubarrays([1, 3, 2, 3, 2, 4, 3, 5, 4, 6], 12), 55, 'Test 58');
test(countNonDecreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 100), 120, 'Test 59');
test(countNonDecreasingSubarrays([5, 3, 1, 6, 4, 2, 7, 5, 3, 8, 6, 4, 9, 7, 5], 75), 120, 'Test 60');
test(countNonDecreasingSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1], 15), 120, 'Test 61');
test(countNonDecreasingSubarrays([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995, 999999994], 1000000000), 28, 'Test 62');
test(countNonDecreasingSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 50), 120, 'Test 63');
test(countNonDecreasingSubarrays([10, 20, 30, 25, 35, 40, 30, 45, 50, 40, 55, 60, 50, 65, 70], 150), 120, 'Test 64');
test(countNonDecreasingSubarrays([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 0), 55, 'Test 65');
test(countNonDecreasingSubarrays([1,1,1,1,1,1,1,1,1,1], 5), 55, 'Test 66');
test(countNonDecreasingSubarrays([3, 1, 2, 1, 3, 2, 1, 2, 3, 2, 1, 2, 3], 15), 91, 'Test 67');
test(countNonDecreasingSubarrays([1000000000,999999999,999999998,999999997,999999996,999999995,999999994,999999993,999999992,999999991], 4500000000), 55, 'Test 68');
test(countNonDecreasingSubarrays([1, 10, 100, 1000, 10000], 10000), 15, 'Test 69');
test(countNonDecreasingSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 55, 'Test 70');
test(countNonDecreasingSubarrays([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 100), 119, 'Test 71');
test(countNonDecreasingSubarrays([10, 5, 15, 20, 25, 5, 10, 30, 40, 50], 50), 55, 'Test 72');
test(countNonDecreasingSubarrays([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 100), 119, 'Test 73');
test(countNonDecreasingSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 10), 210, 'Test 74');
test(countNonDecreasingSubarrays([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12], 30), 210, 'Test 75');
test(countNonDecreasingSubarrays([1, 100, 2, 99, 3, 98, 4, 97, 5, 96, 6, 95, 7, 94, 8, 93, 9, 92, 10, 91], 500), 170, 'Test 76');
test(countNonDecreasingSubarrays([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14], 50), 120, 'Test 77');
test(countNonDecreasingSubarrays([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 3), 55, 'Test 78');
test(countNonDecreasingSubarrays([10,9,8,7,6,5,4,3,2,1], 45), 55, 'Test 79');
test(countNonDecreasingSubarrays([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 200), 120, 'Test 80');
test(countNonDecreasingSubarrays([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1], 25), 120, 'Test 81');
test(countNonDecreasingSubarrays([100, 50, 100, 50, 100, 50, 100, 50, 100, 50], 150), 50, 'Test 82');
test(countNonDecreasingSubarrays([10, 1, 10, 1, 10, 1, 10, 1, 10, 1], 10), 30, 'Test 83');
test(countNonDecreasingSubarrays([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 10), 55, 'Test 84');
test(countNonDecreasingSubarrays([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 210, 'Test 85');
test(countNonDecreasingSubarrays([5, 4, 3, 2, 1, 0, -1, -2, -3, -4], 30), 52, 'Test 86');
test(countNonDecreasingSubarrays([5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1], 50), 120, 'Test 87');
test(countNonDecreasingSubarrays([1,1,1,1,1,1,1,1,1,1], 0), 55, 'Test 88');
test(countNonDecreasingSubarrays([5,10,15,20,25,30,35,40,45,50], 100), 55, 'Test 89');
test(countNonDecreasingSubarrays([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 20), 105, 'Test 90');
test(countNonDecreasingSubarrays([1,2,3,2,1,2,3,4,5,6], 15), 55, 'Test 91');
test(countNonDecreasingSubarrays([1, 100, 2, 99, 3, 98, 4, 97, 5, 96], 150), 31, 'Test 92');
test(countNonDecreasingSubarrays([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 25), 49, 'Test 93');
test(countNonDecreasingSubarrays([3,3,3,3,3,3,3,3,3,3], 100), 55, 'Test 94');
test(countNonDecreasingSubarrays([5,4,5,4,5,4,5,4,5,4], 20), 55, 'Test 95');
test(countNonDecreasingSubarrays([1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 60), 194, 'Test 96');
test(countNonDecreasingSubarrays([1,10,20,30,40,50,60,70,80,90,100,90,80,70,60,50,40,30,20,10,1], 1000), 231, 'Test 97');
test(countNonDecreasingSubarrays([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 190), 210, 'Test 98');
test(countNonDecreasingSubarrays([5,5,5,5,5,5,5,5,5,5], 0), 55, 'Test 99');
test(countNonDecreasingSubarrays([1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 1000000000), 15, 'Test 100');
test(countNonDecreasingSubarrays([5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5], 30), 120, 'Test 101');
test(countNonDecreasingSubarrays([3, 1, 2, 1, 2, 3, 1, 2, 3, 1], 10), 54, 'Test 102');
test(countNonDecreasingSubarrays([5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 40), 210, 'Test 103');
test(countNonDecreasingSubarrays([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6], 50), 118, 'Test 104');
test(countNonDecreasingSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 150), 120, 'Test 105');
test(countNonDecreasingSubarrays([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 20), 45, 'Test 106');
test(countNonDecreasingSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100), 120, 'Test 107');
test(countNonDecreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 50), 210, 'Test 108');
test(countNonDecreasingSubarrays([5,4,3,2,1,1,1,1,1], 10), 37, 'Test 109');
test(countNonDecreasingSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100), 210, 'Test 110');
test(countNonDecreasingSubarrays([10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10], 50), 112, 'Test 111');
test(countNonDecreasingSubarrays([3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 20), 231, 'Test 112');
test(countNonDecreasingSubarrays([5, 4, 3, 2, 1, 2, 3, 4, 5, 6], 15), 52, 'Test 113');
test(countNonDecreasingSubarrays([9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5], 50), 119, 'Test 114');
test(countNonDecreasingSubarrays([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3], 10), 66, 'Test 115');
test(countNonDecreasingSubarrays([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 20), 120, 'Test 116');
test(countNonDecreasingSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0), 210, 'Test 117');
test(countNonDecreasingSubarrays([1, 3, 5, 4, 7, 9, 8, 11, 13, 12], 20), 55, 'Test 118');
test(countNonDecreasingSubarrays([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8], 30), 120, 'Test 119');
test(countNonDecreasingSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 15), 210, 'Test 120');
test(countNonDecreasingSubarrays([1,2,2,1,2,3,4,5,5,4,3,2,1,2,3,4,5], 20), 153, 'Test 121');
test(countNonDecreasingSubarrays([1, 2, 1, 3, 2, 4, 3, 5, 4, 6], 5), 55, 'Test 122');
test(countNonDecreasingSubarrays([150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 200), 75, 'Test 123');
test(countNonDecreasingSubarrays([10, 20, 15, 30, 25, 35, 30, 40, 35, 45], 30), 55, 'Test 124');
test(countNonDecreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10), 120, 'Test 125');
test(countNonDecreasingSubarrays([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 50), 55, 'Test 126');
test(countNonDecreasingSubarrays([5, 4, 3, 2, 1, 10, 9, 8, 7, 6], 20), 55, 'Test 127');
test(countNonDecreasingSubarrays([10, 20, 10, 20, 10, 20, 10, 20, 10, 20], 30), 51, 'Test 128');
test(countNonDecreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0), 55, 'Test 129');
test(countNonDecreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 100), 210, 'Test 130');
test(countNonDecreasingSubarrays([1,3,2,4,5,6,7,8,9,10], 10), 55, 'Test 131');
test(countNonDecreasingSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 1000), 210, 'Test 132');
test(countNonDecreasingSubarrays([1,2,1,3,2,4,3,5,4,6,5,7], 20), 78, 'Test 133');
test(countNonDecreasingSubarrays([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 50), 210, 'Test 134');
test(countNonDecreasingSubarrays([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 25), 49, 'Test 135');

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
