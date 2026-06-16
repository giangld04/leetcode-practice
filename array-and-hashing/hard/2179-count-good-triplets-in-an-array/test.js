// Test: 2179. Count Good Triplets In An Array
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { goodTriplets } = require("./solution");

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

console.log("\n2179. Count Good Triplets In An Array\n");

test(goodTriplets([0,1,2,3,4,5], [5,4,3,2,1,0]), 0, 'Test 1');
test(goodTriplets([0,1,2,3], [3,2,1,0]), 0, 'Test 2');
test(goodTriplets([1,0,3,2], [2,3,0,1]), 0, 'Test 3');
test(goodTriplets([2,0,1,3], [0,1,2,3]), 1, 'Test 4');
test(goodTriplets([0,1,2,3,4,5], [0,1,2,3,4,5]), 20, 'Test 5');
test(goodTriplets([3,2,1,0], [3,2,1,0]), 4, 'Test 6');
test(goodTriplets([0,1,2,3,4], [0,1,2,3,4]), 10, 'Test 7');
test(goodTriplets([3,2,1,0], [0,1,2,3]), 0, 'Test 8');
test(goodTriplets([0,1,2], [2,1,0]), 0, 'Test 9');
test(goodTriplets([5,4,3,2,1,0], [5,4,3,2,1,0]), 20, 'Test 10');
test(goodTriplets([4,0,1,3,2], [4,1,0,2,3]), 4, 'Test 11');
test(goodTriplets([1,0,2,3], [3,2,1,0]), 0, 'Test 12');
test(goodTriplets([1,0,3,2,5,4], [0,5,2,4,3,1]), 2, 'Test 13');
test(goodTriplets([5,3,4,0,2,1], [1,2,0,5,4,3]), 0, 'Test 14');
test(goodTriplets([5,1,4,2,3,0,6], [0,1,2,3,4,5,6]), 5, 'Test 15');
test(goodTriplets([0,9,8,7,6,5,4,3,2,1], [9,8,7,6,5,4,3,2,1,0]), 84, 'Test 16');
test(goodTriplets([1,3,5,7,9,2,4,6,8,0], [9,1,3,5,7,0,2,4,6,8]), 68, 'Test 17');
test(goodTriplets([7,3,5,0,2,6,4,1], [1,0,4,6,2,7,5,3]), 0, 'Test 18');
test(goodTriplets([5, 2, 6, 0, 3, 1, 4], [0, 1, 2, 3, 4, 5, 6]), 3, 'Test 19');
test(goodTriplets([10,7,2,9,3,5,1,6,8,0,4], [4,0,5,8,10,6,9,2,1,7,3]), 5, 'Test 20');
test(goodTriplets([6,3,2,1,5,0,4], [3,2,5,6,4,0,1]), 8, 'Test 21');
test(goodTriplets([2,4,6,1,3,5,0], [6,5,0,1,2,3,4]), 2, 'Test 22');
test(goodTriplets([1,4,5,6,7,8,9,0,2,3], [5,6,7,8,9,0,1,4,2,3]), 60, 'Test 23');
test(goodTriplets([2,8,0,1,5,9,6,7,4,3], [7,6,3,5,8,0,9,1,2,4]), 8, 'Test 24');
test(goodTriplets([2,1,3,0,5,4], [0,4,5,1,3,2]), 0, 'Test 25');
test(goodTriplets([1,3,2,5,4,0,6,7], [0,1,2,3,4,5,6,7]), 26, 'Test 26');
test(goodTriplets([1,2,0,3,4,5], [0,1,5,3,2,4]), 3, 'Test 27');
test(goodTriplets([2,1,3,0,5,4], [5,4,2,0,3,1]), 0, 'Test 28');
test(goodTriplets([3,0,1,4,2,5], [2,1,0,5,3,4]), 0, 'Test 29');
test(goodTriplets([4,2,3,5,1,0], [1,5,4,2,0,3]), 2, 'Test 30');
test(goodTriplets([0,3,1,5,2,4], [5,2,4,0,3,1]), 2, 'Test 31');
test(goodTriplets([7,6,5,4,3,2,1,0], [0,1,2,3,4,5,6,7]), 0, 'Test 32');
test(goodTriplets([0,3,2,5,4,1], [2,3,1,0,5,4]), 3, 'Test 33');
test(goodTriplets([1,0,7,6,5,4,3,2], [3,2,5,7,6,0,4,1]), 1, 'Test 34');
test(goodTriplets([2, 4, 1, 3, 5, 0, 6], [5, 6, 2, 0, 4, 1, 3]), 4, 'Test 35');
test(goodTriplets([3,0,1,4,2,5], [5,2,4,3,1,0]), 0, 'Test 36');
test(goodTriplets([2,4,6,8,0,3,5,7,9,1], [0,2,4,6,8,1,3,5,7,9]), 68, 'Test 37');
test(goodTriplets([10,9,8,7,6,5,4,3,2,1,0], [0,1,2,3,4,5,6,7,8,9,10]), 0, 'Test 38');
test(goodTriplets([3,1,2,5,4,0,6], [6,0,5,2,1,4,3]), 0, 'Test 39');
test(goodTriplets([2,1,0,3,4,5,6,7,8], [0,1,2,3,4,5,6,7,8]), 65, 'Test 40');
test(goodTriplets([5,4,3,2,1,0], [0,1,2,3,4,5]), 0, 'Test 41');
test(goodTriplets([9,5,4,7,6,3,8,0,1,2], [0,2,1,9,3,5,4,8,7,6]), 14, 'Test 42');
test(goodTriplets([8,6,7,5,3,0,9,4,2,1], [1,2,4,9,0,3,5,7,8,6]), 0, 'Test 43');
test(goodTriplets([6,2,0,4,5,1,3], [4,2,0,6,3,5,1]), 7, 'Test 44');
test(goodTriplets([7,2,4,3,0,6,5,1], [4,0,7,1,3,6,2,5]), 12, 'Test 45');
test(goodTriplets([6,4,8,5,3,9,1,2,7,0], [7,1,2,6,0,8,5,3,4,9]), 12, 'Test 46');
test(goodTriplets([6,3,0,4,2,5,1], [5,1,2,6,0,4,3]), 1, 'Test 47');
test(goodTriplets([5,2,4,0,3,1], [3,1,0,5,4,2]), 0, 'Test 48');
test(goodTriplets([8,5,7,6,2,9,3,4,0,1], [4,0,8,7,5,6,1,2,9,3]), 36, 'Test 49');
test(goodTriplets([0,1,2,3,4,5,6,7,8,9], [9,8,7,6,5,4,3,2,1,0]), 0, 'Test 50');
test(goodTriplets([3, 0, 5, 2, 7, 6, 1, 4, 8], [7, 5, 8, 4, 0, 3, 6, 1, 2]), 4, 'Test 51');
test(goodTriplets([5,1,4,2,3,0,8,6,7,9], [1,0,2,3,4,5,6,7,8,9]), 46, 'Test 52');
test(goodTriplets([5,3,4,0,2,1], [1,0,2,5,4,3]), 0, 'Test 53');
test(goodTriplets([0,4,1,5,2,6,3,7], [7,3,6,2,5,1,4,0]), 0, 'Test 54');
test(goodTriplets([6,0,1,5,2,3,4], [1,3,5,4,6,2,0]), 3, 'Test 55');
test(goodTriplets([0,2,1,4,3], [4,0,1,2,3]), 2, 'Test 56');
test(goodTriplets([9,8,7,6,5,4,3,2,1,0], [0,1,2,3,4,5,6,7,8,9]), 0, 'Test 57');
test(goodTriplets([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 0, 'Test 58');
test(goodTriplets([4, 3, 7, 8, 9, 1, 5, 6, 2, 0], [6, 5, 0, 2, 1, 8, 9, 7, 3, 4]), 0, 'Test 59');
test(goodTriplets([7,5,6,3,4,1,2,0], [3,6,2,7,0,1,4,5]), 2, 'Test 60');
test(goodTriplets([8,7,6,5,4,3,2,1,0], [0,1,2,3,4,5,6,7,8]), 0, 'Test 61');
test(goodTriplets([10,11,12,13,14,15,16,17,18,19,0,1,2,3,4,5,6,7,8,9], [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 240, 'Test 62');
test(goodTriplets([10, 1, 5, 9, 8, 2, 6, 7, 3, 4, 0], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 13, 'Test 63');
test(goodTriplets([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 0, 'Test 64');
test(goodTriplets([7, 6, 5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5, 6, 7]), 0, 'Test 65');
test(goodTriplets([0,4,1,5,2,6,3], [1,2,3,4,5,6,0]), 4, 'Test 66');
test(goodTriplets([3,0,2,4,5,1,6], [6,1,3,5,0,2,4]), 4, 'Test 67');
test(goodTriplets([1,9,2,8,3,7,4,6,5,0], [0,1,2,3,4,5,6,7,8,9]), 20, 'Test 68');
test(goodTriplets([3,0,5,2,4,1], [4,1,0,5,3,2]), 1, 'Test 69');
test(goodTriplets([0,2,5,3,1,4], [1,4,3,0,2,5]), 1, 'Test 70');
test(goodTriplets([8,6,7,2,5,4,3,0,1], [1,0,2,5,4,3,8,7,6]), 4, 'Test 71');
test(goodTriplets([1,2,3,4,5,0], [0,5,4,3,2,1]), 0, 'Test 72');
test(goodTriplets([5,3,2,4,1,6,0], [0,3,1,5,2,4,6]), 8, 'Test 73');
test(goodTriplets([1,2,3,4,5,6,7,8,9,0], [0,9,8,7,6,5,4,3,2,1]), 0, 'Test 74');
test(goodTriplets([8,7,6,5,4,3,2,1,0,9], [9,8,7,6,5,4,3,2,1,0]), 84, 'Test 75');
test(goodTriplets([7,3,0,4,6,1,5,2], [5,2,6,0,3,7,4,1]), 3, 'Test 76');
test(goodTriplets([0,9,1,8,2,7,3,6,4,5], [5,4,6,3,7,2,8,1,9,0]), 0, 'Test 77');
test(goodTriplets([9,0,1,2,3,4,5,6,7,8], [0,1,2,3,4,5,6,7,8,9]), 84, 'Test 78');
test(goodTriplets([5,0,2,1,3,4], [0,1,4,2,5,3]), 3, 'Test 79');
test(goodTriplets([10,2,4,3,5,7,9,1,6,8], [9,3,7,4,1,5,6,2,0,8]), Error: 10, 'Test 80');
test(goodTriplets([3,1,2,0,7,5,6,4], [7,5,6,4,3,1,2,0]), 8, 'Test 81');
test(goodTriplets([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], [0, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 0, 'Test 82');
test(goodTriplets([0,1,2,3,4,5,6,7,8,9,10], [10,0,1,2,3,4,5,6,7,8,9]), 120, 'Test 83');
test(goodTriplets([3,5,7,0,2,4,6,8,1,9], [9,0,1,2,3,4,5,6,7,8]), 19, 'Test 84');
test(goodTriplets([2,5,3,1,0,4], [3,5,1,4,0,2]), 4, 'Test 85');
test(goodTriplets([5,3,8,6,2,7,4,0,1,9], [9,1,0,2,4,6,3,8,7,5]), 1, 'Test 86');
test(goodTriplets([1,6,3,2,7,4,5,0], [0,5,7,2,3,1,6,4]), 1, 'Test 87');
test(goodTriplets([4,7,1,8,3,0,9,2,5,6], [9,2,6,0,7,3,5,8,4,1]), 3, 'Test 88');
test(goodTriplets([2,1,4,3,6,5,8,7,10,9], [1,0,3,2,5,4,7,6,9,8]), Error: 10, 'Test 89');
test(goodTriplets([6,3,0,5,2,8,1,7,4,9], [0,1,2,3,4,5,6,7,8,9]), 28, 'Test 90');
test(goodTriplets([4,0,3,5,2,6,1,7], [1,5,0,3,6,2,4,7]), 9, 'Test 91');
test(goodTriplets([2,1,4,3,6,5,8,7,0,9], [0,9,1,8,2,7,3,6,4,5]), 10, 'Test 92');
test(goodTriplets([5,1,4,3,2,0], [0,2,1,5,4,3]), 2, 'Test 93');
test(goodTriplets([9,7,1,5,6,8,0,2,3,4], [7,4,1,5,6,0,8,2,9,3]), 50, 'Test 94');
test(goodTriplets([0,1,5,4,3,2,6], [6,0,5,3,2,1,4]), 6, 'Test 95');
test(goodTriplets([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0], [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 0, 'Test 96');
test(goodTriplets([6,5,4,3,2,1,0], [0,1,2,3,4,5,6]), 0, 'Test 97');
test(goodTriplets([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], [14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), 0, 'Test 98');
test(goodTriplets([0, 3, 1, 6, 5, 4, 2], [1, 6, 4, 5, 3, 0, 2]), 7, 'Test 99');
test(goodTriplets([1,3,5,7,9,0,2,4,6,8], [0,2,4,6,8,1,3,5,7,9]), 20, 'Test 100');
test(goodTriplets([1,3,2,0,5,4], [4,0,5,2,1,3]), 0, 'Test 101');
test(goodTriplets([2,0,4,3,5,1], [5,4,1,0,3,2]), 0, 'Test 102');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

