// Test: 1671. Minimum Number Of Removals To Make Mountain Array
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { minimumMountainRemovals } = require("./solution");

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

console.log("\n1671. Minimum Number Of Removals To Make Mountain Array\n");

test(minimumMountainRemovals([1,2,3,1]), 0, 'Test 1');
test(minimumMountainRemovals([1,2,3,4,5,3,2,1]), 0, 'Test 2');
test(minimumMountainRemovals([5,3,4,4,5]), Error: max[] iterable argument is empty, 'Test 3');
test(minimumMountainRemovals([9,8,7,6,5,4,3,2,1,2,3,4,5]), Error: max[] iterable argument is empty, 'Test 4');
test(minimumMountainRemovals([1,2,3,4,5,3,1]), 0, 'Test 5');
test(minimumMountainRemovals([5,4,3,2,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 4, 'Test 6');
test(minimumMountainRemovals([10,9,8,7,6,5,4,3,2,1,2,3,4,5]), Error: max[] iterable argument is empty, 'Test 7');
test(minimumMountainRemovals([100,92,89,77,74,66,64,66,64]), 6, 'Test 8');
test(minimumMountainRemovals([1,2,1,2,3,4,5,4,3,2,1]), 2, 'Test 9');
test(minimumMountainRemovals([4,3,2,1,1,2,3,1]), 4, 'Test 10');
test(minimumMountainRemovals([2,1,1,5,6,2,3,1]), 3, 'Test 11');
test(minimumMountainRemovals([1,2,3,4,4,3,2,1]), 1, 'Test 12');
test(minimumMountainRemovals([1,2,3,4,5,4,3,2,1]), 0, 'Test 13');
test(minimumMountainRemovals([1,2,1,5,7,6,3,2]), 1, 'Test 14');
test(minimumMountainRemovals([1,2,3,1,2,3,4,5,4,3,2,1]), 3, 'Test 15');
test(minimumMountainRemovals([9,8,1,7,6,5,4,3,2,1]), 2, 'Test 16');
test(minimumMountainRemovals([1,3,1]), 0, 'Test 17');
test(minimumMountainRemovals([5,3,1,2,4]), Error: max[] iterable argument is empty, 'Test 18');
test(minimumMountainRemovals([1,2,3,4,3,2,1,2,3,4,5]), 4, 'Test 19');
test(minimumMountainRemovals([1,2,3,4,5,3,2,1,1,2,3,4,5]), 5, 'Test 20');
test(minimumMountainRemovals([1,3,5,7,9,11,10,9,7,5,3,1,2,4,6,8,10,12]), 6, 'Test 21');
test(minimumMountainRemovals([1,3,5,7,9,11,13,15,14,12,10,8,6,4,2,3,5,7,9,11]), 5, 'Test 22');
test(minimumMountainRemovals([20,40,30,50,60,70,35,10,5,45,65,75,25,55,85,95,15,25,35,45]), 11, 'Test 23');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 24');
test(minimumMountainRemovals([1,3,5,7,9,7,5,3,1,2,4,6,8,10,8,6,4,2]), 8, 'Test 25');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 36, 'Test 26');
test(minimumMountainRemovals([1,2,3,2,1,2,3,4,3,2,1,2,3,4,5,4,3,2,1]), 10, 'Test 27');
test(minimumMountainRemovals([1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), 20, 'Test 28');
test(minimumMountainRemovals([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,7,6,5,4,3,2,1]), 7, 'Test 29');
test(minimumMountainRemovals([1,2,2,3,4,5,3,2,1,0]), 1, 'Test 30');
test(minimumMountainRemovals([10,20,15,20,25,30,25,20,15,10,5,10,15,20]), 4, 'Test 31');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 8, 'Test 32');
test(minimumMountainRemovals([9,8,7,6,5,6,7,8,9,8,7,6,5,4,3,2,1]), 4, 'Test 33');
test(minimumMountainRemovals([1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 8, 'Test 34');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 54, 'Test 35');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 0, 'Test 36');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,11,12,13,14,15,16,17,18,19,20]), 10, 'Test 37');
test(minimumMountainRemovals([1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 30, 'Test 38');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 39');
test(minimumMountainRemovals([1,2,3,4,5,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5]), 19, 'Test 40');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5]), 5, 'Test 41');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9]), 9, 'Test 42');
test(minimumMountainRemovals([100,90,80,70,60,50,40,30,20,10,1,20,30,40,50,60,70,80,90,100]), Error: max[] iterable argument is empty, 'Test 43');
test(minimumMountainRemovals([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 40, 'Test 44');
test(minimumMountainRemovals([1,2,3,4,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9]), 9, 'Test 45');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 0, 'Test 46');
test(minimumMountainRemovals([1,2,3,2,1,4,3,2,1,5,4,3,2,1,6,5,4,3,2,1,7,6,5,4,3,2,1]), 14, 'Test 47');
test(minimumMountainRemovals([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,37,35,33,31,29,27,25,23,21,19,17,15,13,11,9,7,5,3,1]), 0, 'Test 48');
test(minimumMountainRemovals([1,2,2,3,4,4,5,5,6,6,5,5,4,4,3,3,2,2,1]), 8, 'Test 49');
test(minimumMountainRemovals([1,2,3,4,5,3,2,1,6,7,8,7,6,5,4,3,2,1]), 3, 'Test 50');
test(minimumMountainRemovals([1,2,3,4,5,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 51');
test(minimumMountainRemovals([1,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 52');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 0, 'Test 53');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 27, 'Test 54');
test(minimumMountainRemovals([9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 8, 'Test 55');
test(minimumMountainRemovals([1,3,5,7,9,7,5,3,1,3,5,7,9,7,5,3,1]), 8, 'Test 56');
test(minimumMountainRemovals([100,90,80,70,60,50,40,30,20,10,15,25,35,45,55,65,75,85,95,100,5,10,15]), 11, 'Test 57');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1]), 0, 'Test 58');
test(minimumMountainRemovals([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), 24, 'Test 59');
test(minimumMountainRemovals([4,3,2,1,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1]), 3, 'Test 60');
test(minimumMountainRemovals([9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9]), Error: max[] iterable argument is empty, 'Test 61');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5]), 0, 'Test 62');
test(minimumMountainRemovals([2,3,1,4,3,2,5,4,3,2,1,6,7,8,7,6,5,4,3]), 7, 'Test 63');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 64');
test(minimumMountainRemovals([1,3,5,7,9,11,13,15,17,19,17,15,13,11,9,7,5,3,1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1]), 15, 'Test 65');
test(minimumMountainRemovals([1,2,3,4,5,3,2,1,10,9,8,7,6,5,4,3,2,1]), 3, 'Test 66');
test(minimumMountainRemovals([1,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,11,10,9,8,7,6,5,4,3,2,1]), 10, 'Test 67');
test(minimumMountainRemovals([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 20, 'Test 68');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3]), 3, 'Test 69');
test(minimumMountainRemovals([5,6,7,8,9,10,11,12,13,14,13,12,11,10,9,8,7,6,5]), 0, 'Test 70');
test(minimumMountainRemovals([1,2,3,4,5,4,3,2,1,0,-1,-2,-1,0,1,2,3,4,5,4,3,2,1,0,-1,-2,-1,0,1,2,3,4,5,4,3,2,1,0,-1,-2,-1,0,1,2,3,4,5,4,3,2,1,0,-1,-2,-1,0,1,2,3,4,5]), 46, 'Test 71');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 45, 'Test 72');
test(minimumMountainRemovals([1,2,3,4,5,12,11,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 73');
test(minimumMountainRemovals([1,2,3,4,5,11,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 74');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 29, 'Test 75');
test(minimumMountainRemovals([1,5,3,7,5,9,7,11,9,13,11,15,13,17,15,19,17]), 7, 'Test 76');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 19, 'Test 77');
test(minimumMountainRemovals([1,2,3,4,5,10,9,8,7,6,5,4,3,2,1]), 0, 'Test 78');
test(minimumMountainRemovals([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9]), 14, 'Test 79');
test(minimumMountainRemovals([9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 9, 'Test 80');
test(minimumMountainRemovals([1,2,3,2,1,0,1,2,3,2,1]), 5, 'Test 81');
test(minimumMountainRemovals([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5]), 20, 'Test 82');
test(minimumMountainRemovals([1,2,3,4,3,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 14, 'Test 83');
test(minimumMountainRemovals([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), 8, 'Test 84');
test(minimumMountainRemovals([10,20,30,40,50,45,40,35,30,25,20,15,10,5,10,15,20,25,30,35,40,45,50]), 9, 'Test 85');
test(minimumMountainRemovals([1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), 10, 'Test 86');
test(minimumMountainRemovals([1,3,5,7,9,11,13,15,17,19,17,15,13,11,9,7,5,3,1,3,5,7,9,11,13,15,17,19]), 9, 'Test 87');
test(minimumMountainRemovals([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), 16, 'Test 88');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,18,16,14,12,10,8,6,4,2,1,3,5,7,9,11,13,15,17,19,21]), 10, 'Test 89');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12]), 11, 'Test 90');
test(minimumMountainRemovals([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 30, 'Test 91');
test(minimumMountainRemovals([1,2,3,4,5,4,3,2,3,4,5,6,5,4,3,2,1]), 6, 'Test 92');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 0, 'Test 93');
test(minimumMountainRemovals([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11,13,12,14,13,15,14,16,15]), 13, 'Test 94');
test(minimumMountainRemovals([1,5,3,4,6,7,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 13, 'Test 95');
test(minimumMountainRemovals([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11]), 9, 'Test 96');
test(minimumMountainRemovals([1,2,3,4,5,4,3,2,1,0]), 0, 'Test 97');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 98');
test(minimumMountainRemovals([1,2,1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,2,3,4,5]), 14, 'Test 99');
test(minimumMountainRemovals([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991, 999999990, 999999991, 999999992, 999999993, 999999994, 999999995, 999999996, 999999997, 999999998, 999999999]), Error: max[] iterable argument is empty, 'Test 100');
test(minimumMountainRemovals([10,20,30,40,50,60,70,80,90,100,95,90,85,80,75,70,65,60,55,50,45,40,35,30,25,20,15,10,5]), 0, 'Test 101');
test(minimumMountainRemovals([1,100,2,99,3,98,4,97,5,96,6,95,7,94,8,93,9,92,10,91,11,90,12,89,13,88]), 12, 'Test 102');
test(minimumMountainRemovals([1,5,3,4,6,7,8,9,10,8,7,6,5,4,3,2,1]), 1, 'Test 103');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11]), 10, 'Test 104');
test(minimumMountainRemovals([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,9,8,7,6,5,4,3,2,1]), 8, 'Test 105');
test(minimumMountainRemovals([1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1,0]), 0, 'Test 106');
test(minimumMountainRemovals([3,5,4,5,4,3,5,4,3,4,5,4,5,6,5,6,7,6,5]), 12, 'Test 107');
test(minimumMountainRemovals([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 37, 'Test 108');
test(minimumMountainRemovals([1,2,3,4,5,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 0, 'Test 109');
test(minimumMountainRemovals([10,20,30,40,50,60,70,80,90,100,110,120,130,125,120,115,110,105,100,95,90,85,80,75,70,65,60,55,50,45,40,35,30,25,20,15,10]), 0, 'Test 110');
test(minimumMountainRemovals([9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11]), Error: max[] iterable argument is empty, 'Test 111');
test(minimumMountainRemovals([1,2,3,4,5,6,5,4,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 6, 'Test 112');
test(minimumMountainRemovals([1,2,3,4,5,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 0, 'Test 113');
test(minimumMountainRemovals([1,3,5,7,9,11,13,15,14,12,10,8,6,4,2,1,3,5,7,9,11,13,15]), 7, 'Test 114');
test(minimumMountainRemovals([1,1000000000,999999999,1000000000,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 115');

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
