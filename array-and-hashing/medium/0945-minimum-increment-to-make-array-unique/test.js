// Test: 945. Minimum Increment To Make Array Unique
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { minIncrementForUnique } = require("./solution");

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

console.log("\n945. Minimum Increment To Make Array Unique\n");

test(minIncrementForUnique([1,1,2,2,3,3,4,4]), 16, 'Test 1');
test(minIncrementForUnique([10,10,10,10,10,10,10,10,10,10]), 45, 'Test 2');
test(minIncrementForUnique([5,3,5,3,5]), 4, 'Test 3');
test(minIncrementForUnique([1,2,2]), 1, 'Test 4');
test(minIncrementForUnique([0,1,2,3,4,5,6,7,8,9]), 0, 'Test 5');
test(minIncrementForUnique([1,3,2,2,3,3,4]), 10, 'Test 6');
test(minIncrementForUnique([10,20,30,40,50]), 0, 'Test 7');
test(minIncrementForUnique([5,5,5,5,5]), 10, 'Test 8');
test(minIncrementForUnique([0,0,0,0,0]), 10, 'Test 9');
test(minIncrementForUnique([1,1,1,1,1,1,1]), 21, 'Test 10');
test(minIncrementForUnique([1,2,3,4,5]), 0, 'Test 11');
test(minIncrementForUnique([1,3,5,7,9,11]), 0, 'Test 12');
test(minIncrementForUnique([1,3,2,2,3,1,4,4,5,5]), 25, 'Test 13');
test(minIncrementForUnique([1,1,1,1,1,1,1,1,1,1]), 45, 'Test 14');
test(minIncrementForUnique([0,0,0,0]), 6, 'Test 15');
test(minIncrementForUnique([9,8,7,6,5,4,3,2,1,0]), 0, 'Test 16');
test(minIncrementForUnique([5,3,5,5,5]), 6, 'Test 17');
test(minIncrementForUnique([9,9,9,9,9,9,9,9,9,9]), 45, 'Test 18');
test(minIncrementForUnique([1,3,3,3,3,3,3]), 15, 'Test 19');
test(minIncrementForUnique([5,5,5,5,5,5,5,5,5,5]), 45, 'Test 20');
test(minIncrementForUnique([1,1,1,1,1,1]), 15, 'Test 21');
test(minIncrementForUnique([3,2,1,2,1,7]), 6, 'Test 22');
test(minIncrementForUnique([10,10,10,10,10]), 10, 'Test 23');
test(minIncrementForUnique([100000,100000,100000]), 3, 'Test 24');
test(minIncrementForUnique([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6]), 140, 'Test 25');
test(minIncrementForUnique([2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9]), 192, 'Test 26');
test(minIncrementForUnique([100000,100000,100000,100000,100000,100000,100000,100000,100000,100000]), 45, 'Test 27');
test(minIncrementForUnique([15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]), 300, 'Test 28');
test(minIncrementForUnique([100,100,100,101,101,101,102,102,102,103,103,103]), 48, 'Test 29');
test(minIncrementForUnique([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 190, 'Test 30');
test(minIncrementForUnique([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10]), 110, 'Test 31');
test(minIncrementForUnique([20,20,20,20,21,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28]), 137, 'Test 32');
test(minIncrementForUnique([10,20,30,40,50,60,70,80,90,100,10,20,30,40,50,60,70,80,90,100]), 10, 'Test 33');
test(minIncrementForUnique([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 528, 'Test 34');
test(minIncrementForUnique([100000,100000,100000,100000,100000]), 10, 'Test 35');
test(minIncrementForUnique([1,1,2,2,2,3,3,3,3,4,4,4,4,5,5,6,6,7,7,8,8,9,9]), 170, 'Test 36');
test(minIncrementForUnique([1,2,2,3,3,3,4,4,4,4]), 25, 'Test 37');
test(minIncrementForUnique([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7]), 462, 'Test 38');
test(minIncrementForUnique([100,100,99,99,98,98,97,97,96,96]), 25, 'Test 39');
test(minIncrementForUnique([1,3,3,5,5,7,7,9,9,11,11,13,13,15,15]), 7, 'Test 40');
test(minIncrementForUnique([100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000]), 435, 'Test 41');
test(minIncrementForUnique([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5]), 140, 'Test 42');
test(minIncrementForUnique([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15]), 225, 'Test 43');
test(minIncrementForUnique([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), 0, 'Test 44');
test(minIncrementForUnique([5,5,5,5,5,6,6,6,7,7,7,7,8,8,8,8,9,9,10,10,11]), 163, 'Test 45');
test(minIncrementForUnique([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 496, 'Test 46');
test(minIncrementForUnique([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]), 685, 'Test 47');
test(minIncrementForUnique([10,10,10,10,10,10,10,10,10,10,1,1,1,1,1,1,1,1,1,1]), 100, 'Test 48');
test(minIncrementForUnique([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12]), 121, 'Test 49');
test(minIncrementForUnique([1,1,2,2,2,3,3,3,3,3,4,4,4,4,4,4]), 89, 'Test 50');
test(minIncrementForUnique([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 285, 'Test 51');
test(minIncrementForUnique([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 100, 'Test 52');
test(minIncrementForUnique([0,1,1,1,2,2,3,3,4,4,5,5,5,5,5,5,5,5,5,5,5,5]), 150, 'Test 53');
test(minIncrementForUnique([100000,100000,100000,100000,100000,100000]), 15, 'Test 54');
test(minIncrementForUnique([2,3,3,4,5,6,7,8,8,9,10,11,11,12,13,14,14,15,16,16]), 43, 'Test 55');
test(minIncrementForUnique([5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8]), 160, 'Test 56');
test(minIncrementForUnique([1,1,1,2,2,3,4,5,6,7,8,9,10,11,12]), 38, 'Test 57');
test(minIncrementForUnique([0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 121, 'Test 58');
test(minIncrementForUnique([100,100,101,101,102,102,103,103,104,104,105,105]), 36, 'Test 59');
test(minIncrementForUnique([1,2,2,2,2,3,4,5,5,5,6,7,8,9,10,10,10,10,10,10]), 89, 'Test 60');
test(minIncrementForUnique([1,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 64, 'Test 61');
test(minIncrementForUnique([5,5,5,5,6,6,6,6,7,7,7]), 45, 'Test 62');
test(minIncrementForUnique([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 0, 'Test 63');
test(minIncrementForUnique([0,0,1,1,1,2,2,2,2,2]), 32, 'Test 64');
test(minIncrementForUnique([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 0, 'Test 65');
test(minIncrementForUnique([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,1,1,1,1,1,1,1,1,1,1]), 100, 'Test 66');
test(minIncrementForUnique([1,2,2,2,3,3,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5]), 163, 'Test 67');
test(minIncrementForUnique([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]), 65, 'Test 68');
test(minIncrementForUnique([0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), 81, 'Test 69');
test(minIncrementForUnique([100,100,100,99,99,98,97,97,96,96,95,95,94,94,93,93,92,92,91,91]), 98, 'Test 70');
test(minIncrementForUnique([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 100, 'Test 71');
test(minIncrementForUnique([10,9,8,7,6,5,4,3,2,1,0,0,0,0,0]), 50, 'Test 72');
test(minIncrementForUnique([0,0,0,0,1,1,1,2,2,3,3,3,3,3,3,4,4,4,4,4]), 145, 'Test 73');
test(minIncrementForUnique([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1]), 119, 'Test 74');
test(minIncrementForUnique([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 0, 'Test 75');
test(minIncrementForUnique([10,9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1]), 90, 'Test 76');
test(minIncrementForUnique([0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11]), 144, 'Test 77');
test(minIncrementForUnique([0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), 100, 'Test 78');
test(minIncrementForUnique([10,20,30,40,50,10,20,30,40,50,10,20,30,40,50]), 15, 'Test 79');
test(minIncrementForUnique([10,20,30,40,50,60,70,80,90,100,100,100,100,100,100]), 15, 'Test 80');
test(minIncrementForUnique([100,100,100,100,100,100,100,100,100,100]), 45, 'Test 81');
test(minIncrementForUnique([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 100, 'Test 82');
test(minIncrementForUnique([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,25,25]), 3, 'Test 83');
test(minIncrementForUnique([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 190, 'Test 84');
test(minIncrementForUnique([50,40,30,20,10,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250]), 5, 'Test 85');
test(minIncrementForUnique([2,3,3,3,3,4,4,4,5,5,5,5,6,6,6,6,6]), 94, 'Test 86');
test(minIncrementForUnique([1,2,2,3,3,3,3,4,4,5,5,5,5,5]), 55, 'Test 87');
test(minIncrementForUnique([1,3,3,3,4,4,4,4,4,5,5,5,5,5,5,5,5]), 99, 'Test 88');
test(minIncrementForUnique([1,2,3,4,5,6,7,8,9,10,10,10,10,10,10]), 15, 'Test 89');
test(minIncrementForUnique([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 190, 'Test 90');
test(minIncrementForUnique([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000]), 45, 'Test 91');
test(minIncrementForUnique([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,1,2,2,3,3,4,4,5,5]), 225, 'Test 92');
test(minIncrementForUnique([1,3,2,3,2,4,5,4,6,7,8,9,9]), 28, 'Test 93');
test(minIncrementForUnique([5,3,2,2,3,3,4,4,4,5]), 30, 'Test 94');
test(minIncrementForUnique([0,0,0,1,1,2,2,3,3,3,4,4,4,4]), 60, 'Test 95');
test(minIncrementForUnique([0,0,1,1,2,2,2,3,3,4,4,4,4]), 48, 'Test 96');
test(minIncrementForUnique([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 180, 'Test 97');
test(minIncrementForUnique([1,3,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,5]), 135, 'Test 98');
test(minIncrementForUnique([5,3,2,2,3,3,3,4,4,4,4]), 40, 'Test 99');
test(minIncrementForUnique([1,2,3,4,5,6,7,8,9,10,10,10,10,10]), 10, 'Test 100');
test(minIncrementForUnique([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7]), 147, 'Test 101');
test(minIncrementForUnique([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,20,20,20]), 6, 'Test 102');
test(minIncrementForUnique([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 250, 'Test 103');
test(minIncrementForUnique([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 105, 'Test 104');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

