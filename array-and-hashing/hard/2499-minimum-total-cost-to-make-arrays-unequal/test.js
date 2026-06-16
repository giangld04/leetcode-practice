// Test: 2499. Minimum Total Cost To Make Arrays Unequal
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { minimumTotalCost } = require("./solution");

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

console.log("\n2499. Minimum Total Cost To Make Arrays Unequal\n");

test(minimumTotalCost([10,20,30,40,50], [50,40,30,20,10]), 2, 'Test 1');
test(minimumTotalCost([10,9,8,7,6], [6,7,8,9,10]), 2, 'Test 2');
test(minimumTotalCost([1,2,2], [1,2,2]), -1, 'Test 3');
test(minimumTotalCost([1,1,1,1,1], [2,2,2,2,2]), 0, 'Test 4');
test(minimumTotalCost([1,2], [2,1]), 0, 'Test 5');
test(minimumTotalCost([1,1,1,1,1], [1,2,3,4,5]), -1, 'Test 6');
test(minimumTotalCost([1,1,1,1], [1,1,1,1]), -1, 'Test 7');
test(minimumTotalCost([1,1,1,2,2,2], [1,1,1,2,2,2]), 15, 'Test 8');
test(minimumTotalCost([1,1,2,2,3,3], [1,1,2,2,3,3]), 15, 'Test 9');
test(minimumTotalCost([1,2,3], [3,2,1]), 1, 'Test 10');
test(minimumTotalCost([1,1,1,1], [2,2,2,2]), 0, 'Test 11');
test(minimumTotalCost([5,1,3,2,4], [4,2,1,3,5]), 0, 'Test 12');
test(minimumTotalCost([1,2,3,4,5], [5,4,3,2,1]), 2, 'Test 13');
test(minimumTotalCost([1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1]), -1, 'Test 14');
test(minimumTotalCost([5,3,1], [4,3,2]), 1, 'Test 15');
test(minimumTotalCost([5,3,2,4,1], [5,4,1,3,2]), 1, 'Test 16');
test(minimumTotalCost([1,1,2,2], [2,2,1,1]), 0, 'Test 17');
test(minimumTotalCost([1,1,2,2,3], [1,1,2,2,3]), 10, 'Test 18');
test(minimumTotalCost([1,2,3,4,5], [1,2,3,4,5]), 10, 'Test 19');
test(minimumTotalCost([1,3,5,7,9], [9,7,5,3,1]), 2, 'Test 20');
test(minimumTotalCost([5,4,3,2,1], [1,2,3,4,5]), 2, 'Test 21');
test(minimumTotalCost([1,2,3], [3,1,2]), 0, 'Test 22');
test(minimumTotalCost([5,3,3,2,1], [5,4,4,1,2]), 1, 'Test 23');
test(minimumTotalCost([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 0, 'Test 24');
test(minimumTotalCost([1,2,3], [4,5,6]), 0, 'Test 25');
test(minimumTotalCost([1], [1]), -1, 'Test 26');
test(minimumTotalCost([10,9,8,7,6,5,4,3,2,1], [1,2,3,4,5,6,7,8,9,10]), 0, 'Test 27');
test(minimumTotalCost([1,1,1,1,1], [1,1,1,1,1]), -1, 'Test 28');
test(minimumTotalCost([2,2,2,1,3], [1,2,2,3,3]), 10, 'Test 29');
test(minimumTotalCost([1,1,2,2,3,3,4,4,5,5], [1,2,1,2,3,4,3,4,5,6]), 22, 'Test 30');
test(minimumTotalCost([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), -1, 'Test 31');
test(minimumTotalCost([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], [2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 10]), 18, 'Test 32');
test(minimumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 2, 1, 6, 5, 4, 9, 8, 11, 10]), 21, 'Test 33');
test(minimumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 0, 'Test 34');
test(minimumTotalCost([1,2,3,4,5,6,7,8,9], [9,8,7,6,5,4,3,2,1]), 4, 'Test 35');
test(minimumTotalCost([3,1,2,3,1,2,3,1,2,3], [1,3,2,1,3,2,1,3,2,1]), 19, 'Test 36');
test(minimumTotalCost([1, 1, 1, 1, 1, 1, 1, 1, 1, 2], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), -1, 'Test 37');
test(minimumTotalCost([2,2,2,2,3,3,3,3,4,4,4,4], [1,2,3,4,2,3,4,5,3,4,5,6]), 15, 'Test 38');
test(minimumTotalCost([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 7, 'Test 39');
test(minimumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], nums2[9] = 10), Error: Solution.minimumTotalCost[] missing 1 required positional argument: 'nums2', 'Test 40');
test(minimumTotalCost([1,2,1,2,1,2,1,2,1,2], [2,1,2,1,2,1,2,1,2,1]), 0, 'Test 41');
test(minimumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]), 36, 'Test 42');
test(minimumTotalCost([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3], [1,1,1,1,1,2,2,2,2,2,3,3,3,3,3]), 105, 'Test 43');
test(minimumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 105, 'Test 44');
test(minimumTotalCost([1,1,1,1,2,2,2,2,3,3,3,3], [2,2,2,2,1,1,1,1,3,3,3,3]), 44, 'Test 45');
test(minimumTotalCost([1,1,1,2,2,2,3,3,3], [2,2,2,1,1,1,3,3,3]), 24, 'Test 46');
test(minimumTotalCost([3,3,3,3,3,3,3,3,3,3], [3,3,3,3,3,3,3,3,3,3]), -1, 'Test 47');
test(minimumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 0, 'Test 48');
test(minimumTotalCost([1,1,1,2,2,2,3,3,3,4,4,4], [1,1,2,2,2,3,3,3,4,4,4,5]), 40, 'Test 49');
test(minimumTotalCost([1,2,2,3,3,3,4,4,4,4], [1,1,2,2,3,3,4,4,4,4]), 41, 'Test 50');
test(minimumTotalCost([1, 2, 2, 2, 2, 2, 2, 2, 2, 2], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), -1, 'Test 51');
test(minimumTotalCost([2,3,4,5,6,1], [6,1,2,3,4,5]), 0, 'Test 52');
test(minimumTotalCost([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 0, 'Test 53');
test(minimumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 1, 9]), 28, 'Test 54');
test(minimumTotalCost([1, 2, 2, 3, 3, 4, 4, 5, 5, 6], [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]), 0, 'Test 55');
test(minimumTotalCost([1,3,2,5,4,6,7,8,9,10], [2,1,3,4,5,6,7,8,9,10]), 35, 'Test 56');
test(minimumTotalCost([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 105, 'Test 57');
test(minimumTotalCost([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5], [1,1,2,2,3,3,4,4,4,4,5,5,5,5,5]), 101, 'Test 58');
test(minimumTotalCost([1,2,3,4,5,6,7,8,9,10], [10,1,2,3,4,5,6,7,8,9]), 0, 'Test 59');
test(minimumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 1, 4, 3, 6, 5, 8, 7, 10, 9]), 0, 'Test 60');
test(minimumTotalCost([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0, 'Test 61');
test(minimumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], nums2[0] = 10, nums2[9] = 1), Error: Solution.minimumTotalCost[] missing 1 required positional argument: 'nums2', 'Test 62');
test(minimumTotalCost([5,1,3,2,4,6,7,8,9,10], [10,5,4,3,2,1,8,7,6,9]), 0, 'Test 63');
test(minimumTotalCost([1,3,5,7,9,11,13,15,17,19], [2,4,6,8,10,12,14,16,18,20]), 0, 'Test 64');
test(minimumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 65');
test(minimumTotalCost([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), -1, 'Test 66');
test(minimumTotalCost([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,2]), 0, 'Test 67');
test(minimumTotalCost([1,2,3,4,5,6,7,8,9,10], [3,4,5,6,7,8,9,10,1,2]), 0, 'Test 68');
test(minimumTotalCost([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [10, 10, 9, 9, 8, 8, 7, 7, 6, 6]), 0, 'Test 69');
test(minimumTotalCost([1,2,3,4,5,6,7,8,9,10], [1,3,5,7,9,2,4,6,8,10]), 9, 'Test 70');
test(minimumTotalCost([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 0, 'Test 71');
test(minimumTotalCost([1,2,2,3,3,4,4], [1,3,3,2,2,5,5]), 1, 'Test 72');
test(minimumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 45, 'Test 73');
test(minimumTotalCost([1, 2, 2, 3, 3, 4, 4, 5, 5, 6], [6, 2, 1, 3, 3, 4, 4, 5, 5, 1]), 34, 'Test 74');
test(minimumTotalCost([7, 7, 7, 7, 7, 7, 7, 7, 7, 7], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), -1, 'Test 75');
test(minimumTotalCost([7,6,5,4,3,2,1], [1,2,3,4,5,6,7]), 3, 'Test 76');
test(minimumTotalCost([1,3,2,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 0, 'Test 77');
test(minimumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]), 9, 'Test 78');
test(minimumTotalCost([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [1, 2, 1, 2, 3, 4, 3, 4, 5, 6]), 22, 'Test 79');
test(minimumTotalCost([1,1,2,2,3,3,4,4,5,5], [1,1,2,2,3,3,4,4,5,5]), 45, 'Test 80');
test(minimumTotalCost([5,5,5,5,5,5,5,5,5,5], [5,5,5,5,5,5,5,5,5,5]), -1, 'Test 81');
test(minimumTotalCost([1,2,2,3,3,4,4,5,5,6,6], [6,2,2,6,6,2,2,6,6,2,2]), 6, 'Test 82');
test(minimumTotalCost([1,1,1,1,2,2,2,2,3,3,3,3], [1,1,1,1,2,2,2,2,3,3,3,3]), 66, 'Test 83');
test(minimumTotalCost([1,1,2,2,3,3,4,4,5,5], [5,5,4,4,3,3,2,2,1,1]), 10, 'Test 84');
test(minimumTotalCost([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,9,10]), 45, 'Test 85');
test(minimumTotalCost([3,3,3,3,3,3,3,3,3,3], [1,2,3,4,5,6,7,8,9,10]), -1, 'Test 86');
test(minimumTotalCost([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]), -1, 'Test 87');
test(minimumTotalCost([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0, 'Test 88');
test(minimumTotalCost([7,7,8,8,9,9,10,10], [8,8,7,7,10,10,9,9]), 0, 'Test 89');
test(minimumTotalCost([5,5,5,5,5,5,5,5,5,5], [1,2,3,4,5,6,7,8,9,10]), -1, 'Test 90');
test(minimumTotalCost([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4], [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), 12, 'Test 91');
test(minimumTotalCost([1, 1, 1, 2, 2, 2, 3, 3, 3, 4], [4, 4, 4, 3, 3, 3, 2, 2, 2, 1]), 0, 'Test 92');
test(minimumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 11]), 0, 'Test 93');
test(minimumTotalCost([1,2,2,3,3,4,4,5,5,6], [1,1,2,2,3,3,4,4,5,5]), 20, 'Test 94');
test(minimumTotalCost([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [5, 5, 4, 4, 3, 3, 2, 2, 1, 1]), 10, 'Test 95');
test(minimumTotalCost([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [2, 2, 1, 1, 4, 4, 3, 3, 5, 5]), 18, 'Test 96');
test(minimumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]), 0, 'Test 97');
test(minimumTotalCost([1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10], [1,1,1,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10]), 511, 'Test 98');
test(minimumTotalCost([1,3,2,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,9,10]), 42, 'Test 99');
test(minimumTotalCost([10,10,10,10,10,10,10,10,10,10], [1,2,3,4,5,6,7,8,9,10]), -1, 'Test 100');
test(minimumTotalCost([1,1,1,1,1,1,1,1,1,1], [1,2,3,4,5,6,7,8,9,1]), -1, 'Test 101');
test(minimumTotalCost([1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,2]), -1, 'Test 102');
test(minimumTotalCost([1, 1, 1, 1, 1, 2, 2, 2, 2, 2], [2, 2, 2, 2, 2, 1, 1, 1, 1, 1]), 0, 'Test 103');
test(minimumTotalCost([4, 5, 4, 3, 2, 1, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 0, 'Test 104');
test(minimumTotalCost([1, 1, 1, 1, 2, 2, 2, 2, 3, 3], [1, 1, 1, 1, 2, 2, 2, 2, 3, 3]), 45, 'Test 105');
test(minimumTotalCost([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 190, 'Test 106');
test(minimumTotalCost([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 45, 'Test 107');
test(minimumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 10, 9]), 28, 'Test 108');
test(minimumTotalCost([1,2,3,4,5,6,7,8,9,10], [2,1,4,3,6,5,8,7,10,9]), 0, 'Test 109');
test(minimumTotalCost([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), -1, 'Test 110');
test(minimumTotalCost([1, 2, 2, 3, 3, 4, 4, 5, 5, 6], [1, 2, 2, 3, 3, 4, 4, 5, 5, 6]), 45, 'Test 111');
test(minimumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 2, 5, 4, 7, 6, 9, 8, 10]), 9, 'Test 112');
test(minimumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), -1, 'Test 113');
test(minimumTotalCost([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 1]), 36, 'Test 114');
test(minimumTotalCost([5,5,5,5,5,5,5,5,5], [5,5,5,5,5,5,5,5,5]), -1, 'Test 115');
test(minimumTotalCost([1,2,3,4,5,6,7,8,9,10], [5,6,7,8,9,10,1,2,3,4]), 0, 'Test 116');
test(minimumTotalCost([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], [10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 19, 'Test 117');
test(minimumTotalCost([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), -1, 'Test 118');
test(minimumTotalCost([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10]), 90, 'Test 119');
test(minimumTotalCost([1,1,1,1,1,1,1,1,1,1], [2,2,2,2,2,2,2,2,2,2]), 0, 'Test 120');

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
