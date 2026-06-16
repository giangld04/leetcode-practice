// Test: 1389. Create Target Array In The Given Order
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { createTargetArray } = require("./solution");

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

console.log("\n1389. Create Target Array In The Given Order\n");

test(createTargetArray([1], [0]), [1], 'Test 1');
test(createTargetArray([10,9,8,7,6], [0,1,1,1,1]), [10, 6, 7, 8, 9], 'Test 2');
test(createTargetArray([0,1,2,3,4], [0,1,2,2,1]), [0, 4, 1, 3, 2], 'Test 3');
test(createTargetArray([5,5,5,5], [0,1,2,0]), [5, 5, 5, 5], 'Test 4');
test(createTargetArray([5,4,3,2,1], [4,3,2,1,0]), [1, 5, 2, 4, 3], 'Test 5');
test(createTargetArray([5,5,5,5], [0,1,2,3]), [5, 5, 5, 5], 'Test 6');
test(createTargetArray([9,8,7,6,5], [0,0,0,0,0]), [5, 6, 7, 8, 9], 'Test 7');
test(createTargetArray([1,3,2], [0,0,1]), [3, 2, 1], 'Test 8');
test(createTargetArray([0,0,0,0], [0,1,2,3]), [0, 0, 0, 0], 'Test 9');
test(createTargetArray([9,8,7,6,5], [0,1,2,3,4]), [9, 8, 7, 6, 5], 'Test 10');
test(createTargetArray([1,3,2], [0,1,1]), [1, 2, 3], 'Test 11');
test(createTargetArray([1,2,3,4,0], [0,1,2,3,0]), [0, 1, 2, 3, 4], 'Test 12');
test(createTargetArray([9,8,7,6], [0,0,1,2]), [8, 7, 6, 9], 'Test 13');
test(createTargetArray([10,9,8,7,6], [4,3,2,1,0]), [6, 10, 7, 9, 8], 'Test 14');
test(createTargetArray([9,8,7,6], [0,0,0,0]), [6, 7, 8, 9], 'Test 15');
test(createTargetArray([1,1,1,1,1,1,1,1,1,1], [0,0,0,0,0,0,0,0,0,0]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 16');
test(createTargetArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), [5, 5, 3, 2, 6, 5, 9, 4, 1, 3, 1], 'Test 17');
test(createTargetArray([100,99,98,97,96,95,94,93,92,91], [0,0,0,0,0,0,0,0,0,0]), [91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 'Test 18');
test(createTargetArray([10, 1, 2, 3, 4, 5], [0, 3, 1, 1, 2, 4]), [10, 3, 4, 2, 5, 1], 'Test 19');
test(createTargetArray([2, 4, 6, 8, 10], [0, 2, 4, 1, 3]), [2, 8, 4, 10, 6], 'Test 20');
test(createTargetArray([7, 6, 5, 4, 3, 2, 1], [0, 1, 2, 3, 4, 5, 6]), [7, 6, 5, 4, 3, 2, 1], 'Test 21');
test(createTargetArray([5, 10, 15, 20, 25, 30], [0, 1, 2, 2, 2, 2]), [5, 10, 30, 25, 20, 15], 'Test 22');
test(createTargetArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 23');
test(createTargetArray([42, 31, 20, 10, 0], [4, 3, 2, 1, 0]), [0, 42, 10, 31, 20], 'Test 24');
test(createTargetArray([5, 3, 8, 6, 2], [2, 4, 0, 1, 3]), [8, 6, 5, 2, 3], 'Test 25');
test(createTargetArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 26');
test(createTargetArray([1, 2, 3, 4, 5, 6, 7, 8, 9], [8, 7, 6, 5, 4, 3, 2, 1, 0]), [9, 1, 8, 2, 7, 3, 6, 4, 5], 'Test 27');
test(createTargetArray([3, 1, 2], [0, 1, 1]), [3, 2, 1], 'Test 28');
test(createTargetArray([1,2,3,4,5,6,7,8,9,10], [0,1,0,3,2,3,4,5,6,7]), [3, 1, 5, 6, 7, 8, 9, 10, 2, 4], 'Test 29');
test(createTargetArray([5, 3, 7, 1, 9], [0, 1, 1, 2, 3]), [5, 7, 1, 9, 3], 'Test 30');
test(createTargetArray([1, 3, 2, 5, 4], [0, 1, 1, 2, 3]), [1, 2, 5, 4, 3], 'Test 31');
test(createTargetArray([100, 99, 98, 97, 96, 95], [0, 0, 0, 0, 0, 0]), [95, 96, 97, 98, 99, 100], 'Test 32');
test(createTargetArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 33');
test(createTargetArray([5, 5, 5, 5, 5], [4, 3, 2, 1, 0]), [5, 5, 5, 5, 5], 'Test 34');
test(createTargetArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 0, 1, 1, 2, 2, 3, 3, 4, 4]), [2, 4, 6, 8, 10, 9, 7, 5, 3, 1], 'Test 35');
test(createTargetArray([5, 3, 8, 6, 2, 7, 4, 1], [0, 1, 2, 3, 4, 5, 6, 7]), [5, 3, 8, 6, 2, 7, 4, 1], 'Test 36');
test(createTargetArray([7, 8, 9, 10, 11, 12, 13], [0, 1, 2, 0, 1, 2, 3]), [10, 11, 12, 13, 7, 8, 9], 'Test 37');
test(createTargetArray([10,20,30,40,50,60,70,80,90,100], [9,8,7,6,5,4,3,2,1,0]), [100, 10, 90, 20, 80, 30, 70, 40, 60, 50], 'Test 38');
test(createTargetArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), [10, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 39');
test(createTargetArray([10, 20, 30, 40, 50, 60], [5, 4, 3, 2, 1, 0]), [60, 10, 50, 20, 40, 30], 'Test 40');
test(createTargetArray([5, 3, 8, 9, 2], [0, 1, 2, 3, 4]), [5, 3, 8, 9, 2], 'Test 41');
test(createTargetArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 0, 1, 2, 1, 0, 3, 4, 5, 6]), [6, 2, 5, 7, 8, 9, 10, 3, 4, 1], 'Test 42');
test(createTargetArray([3, 2, 1], [1, 1, 1]), [3, 1, 2], 'Test 43');
test(createTargetArray([10, 20, 30, 40, 50], [0, 2, 1, 2, 4]), [10, 30, 40, 20, 50], 'Test 44');
test(createTargetArray([1, 1, 1, 1, 1, 1, 1], [0, 1, 0, 2, 1, 3, 0]), [1, 1, 1, 1, 1, 1, 1], 'Test 45');
test(createTargetArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), [2, 1, 4, 3, 6, 5, 8, 7, 10, 9], 'Test 46');
test(createTargetArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 0, 1, 2, 3, 4, 5, 6, 7, 8]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'Test 47');
test(createTargetArray([50, 40, 30, 20, 10], [4, 3, 2, 1, 0]), [10, 50, 20, 40, 30], 'Test 48');
test(createTargetArray([1, 3, 5, 7, 9], [0, 0, 0, 0, 0]), [9, 7, 5, 3, 1], 'Test 49');
test(createTargetArray([2, 4, 6, 8, 10], [5, 4, 3, 2, 1]), [2, 10, 4, 8, 6], 'Test 50');
test(createTargetArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), [10, 1, 9, 2, 8, 3, 7, 4, 6, 5], 'Test 51');
test(createTargetArray([1,3,5,7,9,11,13], [0,2,4,6,8,10,12]), [1, 3, 5, 7, 9, 11, 13], 'Test 52');
test(createTargetArray([100, 90, 80, 70, 60], [0, 1, 2, 3, 4]), [100, 90, 80, 70, 60], 'Test 53');
test(createTargetArray([1, 3, 5, 7, 9, 11], [0, 2, 4, 6, 8, 10]), [1, 3, 5, 7, 9, 11], 'Test 54');
test(createTargetArray([1, 3, 2, 5, 4, 8, 7, 6, 10, 9], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), [9, 10, 6, 7, 8, 4, 5, 2, 3, 1], 'Test 55');
test(createTargetArray([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'Test 56');
test(createTargetArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], [0, 0, 1, 1, 0, 2, 3, 4, 5, 6, 7]), [5, 1, 9, 2, 6, 5, 3, 5, 1, 4, 3], 'Test 57');
test(createTargetArray([1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8]), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 58');
test(createTargetArray([1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 0, 0, 0, 0, 0, 0, 0, 0]), [9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 59');
test(createTargetArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), [9, 0, 8, 1, 7, 2, 6, 3, 5, 4], 'Test 60');
test(createTargetArray([6, 6, 6, 6, 6], [0, 0, 1, 1, 2]), [6, 6, 6, 6, 6], 'Test 61');
test(createTargetArray([10, 20, 30, 40, 50], [4, 3, 2, 1, 0]), [50, 10, 40, 20, 30], 'Test 62');
test(createTargetArray([10, 20, 30, 40, 50], [0, 1, 0, 2, 3]), [30, 10, 40, 50, 20], 'Test 63');
test(createTargetArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 64');
test(createTargetArray([5, 15, 25, 35, 45], [0, 2, 1, 3, 4]), [5, 25, 15, 35, 45], 'Test 65');
test(createTargetArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]), [1, 11, 3, 13, 5, 15, 7, 17, 9, 19], 'Test 66');
test(createTargetArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 9, 1, 8, 2, 7, 3, 6, 4, 5]), [1, 3, 5, 7, 9, 10, 2, 4, 8, 6], 'Test 67');
test(createTargetArray([9,7,5,3,1], [4,3,2,1,0]), [1, 9, 3, 7, 5], 'Test 68');
test(createTargetArray([1, 2, 3, 4, 5], [2, 2, 2, 2, 2]), [1, 2, 5, 4, 3], 'Test 69');
test(createTargetArray([10, 20, 30, 40, 50], [0, 2, 1, 4, 3]), [10, 30, 20, 50, 40], 'Test 70');
test(createTargetArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 71');
test(createTargetArray([5, 4, 3, 2, 1], [0, 1, 2, 2, 2]), [5, 4, 1, 2, 3], 'Test 72');
test(createTargetArray([1, 2, 3, 4, 5], [2, 3, 4, 0, 1]), [4, 5, 1, 2, 3], 'Test 73');
test(createTargetArray([5,3,8,1], [2,2,1,0]), [1, 5, 8, 3], 'Test 74');
test(createTargetArray([7, 8, 9, 10, 11, 12], [1, 3, 3, 2, 0, 5]), [11, 7, 8, 10, 9, 12], 'Test 75');
test(createTargetArray([1, 2, 3, 4], [0, 0, 0, 0]), [4, 3, 2, 1], 'Test 76');
test(createTargetArray([7, 8, 9, 10, 11, 12], [0, 0, 1, 1, 2, 2]), [8, 10, 12, 11, 9, 7], 'Test 77');
test(createTargetArray([1, 2, 3, 4, 5], [4, 3, 2, 1, 0]), [5, 1, 4, 2, 3], 'Test 78');
test(createTargetArray([10, 20, 30, 40, 50], [0, 2, 1, 3, 1]), [10, 50, 30, 20, 40], 'Test 79');
test(createTargetArray([1, 2, 3, 4, 5, 6], [5, 4, 3, 2, 1, 0]), [6, 1, 5, 2, 4, 3], 'Test 80');
test(createTargetArray([1, 3, 2, 5, 4], [0, 0, 1, 1, 2]), [3, 5, 4, 2, 1], 'Test 81');
test(createTargetArray([4, 3, 2, 1, 0], [2, 2, 2, 2, 2]), [4, 3, 0, 1, 2], 'Test 82');
test(createTargetArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [1, 3, 5, 7, 9, 2, 4, 6, 8, 0]), [19, 1, 3, 11, 5, 13, 7, 15, 9, 17], 'Test 83');
test(createTargetArray([9, 8, 7, 6, 5], [4, 4, 4, 4, 4]), [9, 8, 7, 6, 5], 'Test 84');
test(createTargetArray([0, 1, 0, 1, 0], [0, 1, 2, 3, 4]), [0, 1, 0, 1, 0], 'Test 85');
test(createTargetArray([100, 99, 98, 97, 96, 95], [5, 4, 3, 2, 1, 0]), [95, 100, 96, 99, 97, 98], 'Test 86');
test(createTargetArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [0, 5, 2, 3, 1, 4, 6, 7, 8, 9]), [10, 50, 20, 30, 60, 40, 70, 80, 90, 100], 'Test 87');
test(createTargetArray([1, 3, 2, 4, 5, 7, 6], [0, 1, 1, 3, 4, 5, 5]), [1, 2, 3, 4, 5, 6, 7], 'Test 88');
test(createTargetArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), [100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 'Test 89');
test(createTargetArray([1, 3, 5, 7, 9], [0, 0, 1, 2, 3]), [3, 5, 7, 9, 1], 'Test 90');
test(createTargetArray([10,20,30,40,50], [4,3,2,1,0]), [50, 10, 40, 20, 30], 'Test 91');
test(createTargetArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 92');
test(createTargetArray([10, 9, 8, 7, 6, 5], [0, 1, 1, 0, 3, 2]), [7, 10, 5, 8, 6, 9], 'Test 93');
test(createTargetArray([7, 8, 9], [1, 1, 1]), [7, 9, 8], 'Test 94');
test(createTargetArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], [0, 1, 0, 1, 2, 0, 3, 0, 4, 5, 6]), [6, 9, 4, 1, 5, 3, 5, 2, 5, 3, 1], 'Test 95');
test(createTargetArray([0, 1, 1, 1, 0], [0, 1, 2, 2, 0]), [0, 0, 1, 1, 1], 'Test 96');
test(createTargetArray([3, 2, 1], [2, 1, 0]), [1, 3, 2], 'Test 97');
test(createTargetArray([6, 5, 4, 3, 2, 1], [0, 0, 0, 0, 0, 0]), [1, 2, 3, 4, 5, 6], 'Test 98');
test(createTargetArray([100, 99, 98, 97, 96, 95], [0, 1, 0, 2, 1, 3]), [98, 96, 100, 95, 97, 99], 'Test 99');
test(createTargetArray([10, 20, 30, 40, 50], [0, 0, 0, 0, 4]), [40, 30, 20, 10, 50], 'Test 100');
test(createTargetArray([1,1,1,1,1,1,1,1,1,1], [0,1,2,3,4,5,6,7,8,9]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 101');
test(createTargetArray([1, 2, 3, 4, 5, 6], [0, 2, 2, 1, 5, 3]), [1, 4, 2, 6, 3, 5], 'Test 102');
test(createTargetArray([0, 1, 0, 1, 0], [0, 1, 0, 1, 0]), [0, 0, 1, 0, 1], 'Test 103');
test(createTargetArray([5, 3, 1, 4, 2], [4, 1, 3, 0, 2]), [4, 5, 2, 3, 1], 'Test 104');
test(createTargetArray([7, 6, 5, 4, 3, 2, 1], [6, 5, 4, 3, 2, 1, 0]), [1, 7, 2, 6, 3, 5, 4], 'Test 105');
test(createTargetArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 1, 0, 2, 3, 4, 5, 6, 7, 8]), [3, 1, 4, 5, 6, 7, 8, 9, 10, 2], 'Test 106');
test(createTargetArray([1, 1, 1, 1, 1], [0, 0, 0, 0, 0]), [1, 1, 1, 1, 1], 'Test 107');
test(createTargetArray([7,6,5,4,3,2,1], [0,0,0,0,0,0,0]), [1, 2, 3, 4, 5, 6, 7], 'Test 108');
test(createTargetArray([5, 6, 7, 8, 9, 0, 1, 2, 3, 4], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]), [5, 0, 6, 1, 7, 2, 8, 3, 9, 4], 'Test 109');
test(createTargetArray([1, 1, 1, 1, 1, 1, 1], [0, 1, 2, 3, 4, 5, 6]), [1, 1, 1, 1, 1, 1, 1], 'Test 110');
test(createTargetArray([33, 22, 11, 66, 55, 44], [0, 0, 0, 0, 0, 0]), [44, 55, 66, 11, 22, 33], 'Test 111');
test(createTargetArray([1, 1, 1, 1, 1], [0, 1, 0, 2, 1]), [1, 1, 1, 1, 1], 'Test 112');
test(createTargetArray([2, 3, 1, 5, 4], [2, 3, 0, 4, 1]), [1, 4, 2, 3, 5], 'Test 113');
test(createTargetArray([1, 3, 5, 7, 9], [0, 1, 2, 0, 3]), [7, 1, 3, 9, 5], 'Test 114');
test(createTargetArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), [0, 9, 1, 8, 2, 7, 3, 6, 4, 5], 'Test 115');

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
