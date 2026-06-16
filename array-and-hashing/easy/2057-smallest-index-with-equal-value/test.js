// Test: 2057. Smallest Index With Equal Value
// 98 test cases from LeetCodeDataset
// Run: node test.js

const { smallestEqual } = require("./solution");

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

console.log("\n2057. Smallest Index With Equal Value\n");

test(smallestEqual([0,5,0,5,0,5,0,5,0,5]), 0, 'Test 1');
test(smallestEqual([4,3,2,1]), 2, 'Test 2');
test(smallestEqual([7,8,9,0,1,2,3,4,5,6]), -1, 'Test 3');
test(smallestEqual([0,0,0,0,0,0,0,0,0,0]), 0, 'Test 4');
test(smallestEqual([3,3,3,3,3,3,3,3,3,3]), 3, 'Test 5');
test(smallestEqual([0,10,20,30,40]), 0, 'Test 6');
test(smallestEqual([1,3,5,7,9,1,3,5,7,9]), 9, 'Test 7');
test(smallestEqual([7,7,7,7,7,7,7,7,7,7]), 7, 'Test 8');
test(smallestEqual([1,2,3,4,5,6,7,8,9,0]), -1, 'Test 9');
test(smallestEqual([3,6,9,2,5,8,1,4,7,0]), -1, 'Test 10');
test(smallestEqual([0,10,20,30]), 0, 'Test 11');
test(smallestEqual([0,1,2,3,4,5,6,7,8,9]), 0, 'Test 12');
test(smallestEqual([0,1,0,1,0,1,0,1,0,1]), 0, 'Test 13');
test(smallestEqual([1,1,1,1,1,1,1,1,1,1]), 1, 'Test 14');
test(smallestEqual([3,0,1,4,2,5,9,6,7,8]), 5, 'Test 15');
test(smallestEqual([0,1,2]), 0, 'Test 16');
test(smallestEqual([9,8,7,6,5,4,3,2,1,0]), -1, 'Test 17');
test(smallestEqual([10,11,12,13,14,15,16,17,18,19]), -1, 'Test 18');
test(smallestEqual([2,4,6,8,0,2,4,6,8,0]), 8, 'Test 19');
test(smallestEqual([9,9,9,9,9,9,9,9,9,9]), 9, 'Test 20');
test(smallestEqual([5,5,5,5,5,5,5,5,5,5]), 5, 'Test 21');
test(smallestEqual([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 22');
test(smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), -1, 'Test 23');
test(smallestEqual([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), 4, 'Test 24');
test(smallestEqual([1,10,2,20,3,30,4,40,5,50]), 2, 'Test 25');
test(smallestEqual([0,9,1,8,2,7,3,6,4,5,0,9,1,8,2,7,3,6,4,5]), 0, 'Test 26');
test(smallestEqual([6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,9,8,7]), 3, 'Test 27');
test(smallestEqual([0,2,4,6,8,0,2,4,6,8]), 0, 'Test 28');
test(smallestEqual([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 5, 'Test 29');
test(smallestEqual([1,3,5,7,9,1,3,5,7,9,1,3,5,7,9,1,3,5,7,9]), 9, 'Test 30');
test(smallestEqual([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 2, 'Test 31');
test(smallestEqual([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]), -1, 'Test 32');
test(smallestEqual([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 33');
test(smallestEqual([0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]), 0, 'Test 34');
test(smallestEqual([5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,9,8,7,6]), -1, 'Test 35');
test(smallestEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 0, 'Test 36');
test(smallestEqual([4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5]), 2, 'Test 37');
test(smallestEqual([10,20,30,40,50,60,70,80,90,0]), -1, 'Test 38');
test(smallestEqual([6,3,8,6,2,9,1,3,4,7,6,3,8,6,2,9,1,3,4,7]), -1, 'Test 39');
test(smallestEqual([1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3]), 1, 'Test 40');
test(smallestEqual([5,0,5,0,5,0,5,0,5,0]), -1, 'Test 41');
test(smallestEqual([1,3,5,7,9,0,2,4,6,8,1,3,5,7,9,0,2,4,6,8,1,3,5,7,9,0,2,4,6,8]), -1, 'Test 42');
test(smallestEqual([3,1,4,1,5,9,2,6,5,3,5,9]), 1, 'Test 43');
test(smallestEqual([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2]), 1, 'Test 44');
test(smallestEqual([8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,9]), 4, 'Test 45');
test(smallestEqual([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]), -1, 'Test 46');
test(smallestEqual([1,0,3,2,5,4,7,6,9,8,1,0,3,2,5,4,7,6,9,8]), -1, 'Test 47');
test(smallestEqual([4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3]), -1, 'Test 48');
test(smallestEqual([10,20,30,40,50,60,70,80,90]), -1, 'Test 49');
test(smallestEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 1, 'Test 50');
test(smallestEqual([8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,9]), 4, 'Test 51');
test(smallestEqual([4,1,2,3,4,5,6,7,8,9,4,1,2,3,4,5,6,7,8,9,4,1,2,3,4,5,6,7,8,9,4,1,2,3,4,5,6,7,8,9,4,1,2,3,4,5,6,7,8,9,4,1,2,3,4,5,6]), 1, 'Test 52');
test(smallestEqual([2,4,6,8,0,2,4,6,8,0,2,4,6,8,0,2,4,6,8,0,2,4,6,8,0,2,4,6,8,0]), 8, 'Test 53');
test(smallestEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), 0, 'Test 54');
test(smallestEqual([5,6,7,8,9,0,1,2,3,4]), -1, 'Test 55');
test(smallestEqual([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 56');
test(smallestEqual([2,4,6,8,0,2,4,6,8,0,2,4,6,8,0,2,4,6,8,0]), 8, 'Test 57');
test(smallestEqual([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), 9, 'Test 58');
test(smallestEqual([0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0]), 0, 'Test 59');
test(smallestEqual([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 60');
test(smallestEqual([10,9,8,7,6,5,4,3,2,1]), 5, 'Test 61');
test(smallestEqual([6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]), 6, 'Test 62');
test(smallestEqual([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 7, 'Test 63');
test(smallestEqual([1,0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2]), -1, 'Test 64');
test(smallestEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), -1, 'Test 65');
test(smallestEqual([10,10,10,10,10,10,10,10,10,10]), -1, 'Test 66');
test(smallestEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), -1, 'Test 67');
test(smallestEqual([1,0,1,0,1,0,1,0,1,0]), -1, 'Test 68');
test(smallestEqual([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 3, 'Test 69');
test(smallestEqual([10, 22, 33, 44, 55, 66, 77, 88, 99, 0]), -1, 'Test 70');
test(smallestEqual([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 2, 'Test 71');
test(smallestEqual([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 2, 'Test 72');
test(smallestEqual([4,4,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3]), 4, 'Test 73');
test(smallestEqual([0, 10, 20, 30, 40, 50, 60, 70, 80, 90]), 0, 'Test 74');
test(smallestEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 75');
test(smallestEqual([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0]), -1, 'Test 76');
test(smallestEqual([9,0,9,0,9,0,9,0,9,0]), -1, 'Test 77');
test(smallestEqual([3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0]), 3, 'Test 78');
test(smallestEqual([0,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1]), 0, 'Test 79');
test(smallestEqual([1,3,5,7,9,2,4,6,8,0]), 8, 'Test 80');
test(smallestEqual([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 81');
test(smallestEqual([8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4]), -1, 'Test 82');
test(smallestEqual([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 3, 'Test 83');
test(smallestEqual([0,9,8,7,6,5,4,3,2,1]), 0, 'Test 84');
test(smallestEqual([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 3, 'Test 85');
test(smallestEqual([0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 86');
test(smallestEqual([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 2, 'Test 87');
test(smallestEqual([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 5, 'Test 88');
test(smallestEqual([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 0, 'Test 89');
test(smallestEqual([1,0,9,8,7,6,5,4,3,2]), -1, 'Test 90');
test(smallestEqual([5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4]), -1, 'Test 91');
test(smallestEqual([2, 4, 6, 8, 0, 2, 4, 6, 8, 0, 2, 4, 6, 8, 0, 2, 4, 6, 8, 0]), 8, 'Test 92');
test(smallestEqual([8,6,4,2,0,9,7,5,3,1]), -1, 'Test 93');
test(smallestEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), -1, 'Test 94');
test(smallestEqual([1,0,9,8,7,6,5,4,3,2,1,0]), -1, 'Test 95');
test(smallestEqual([6,3,9,2,4,1,5,8,0,7,6,3,9,2,4,1,5,8,0,7,6,3,9,2,4,1,5,8,0,7,6,3,9,2,4,1,5,8,0,7]), 4, 'Test 96');
test(smallestEqual([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2]), -1, 'Test 97');
test(smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), -1, 'Test 98');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

