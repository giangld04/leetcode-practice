// Test: 2395. Find Subarrays With Equal Sum
// 119 test cases from LeetCodeDataset
// Run: node test.js

const { findSubarrays } = require("./solution");

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

console.log("\n2395. Find Subarrays With Equal Sum\n");

test(findSubarrays([-1,0,1,-1,0]), true, 'Test 1');
test(findSubarrays([1,1,1,1]), true, 'Test 2');
test(findSubarrays([1,2,3,4,5,6,7,8,9,10]), false, 'Test 3');
test(findSubarrays([5,-1,5,-1]), true, 'Test 4');
test(findSubarrays([1,2,3,3,2,1]), true, 'Test 5');
test(findSubarrays([-1,0,1,0,-1]), true, 'Test 6');
test(findSubarrays([1000000000,1000000000]), false, 'Test 7');
test(findSubarrays([1,0,1,0,1,0,1,0,1,0]), true, 'Test 8');
test(findSubarrays([10,20,30,40,50,60,70,80,90,100]), false, 'Test 9');
test(findSubarrays([-1,-2,-3,-4,-5]), false, 'Test 10');
test(findSubarrays([1,2,3,4,5]), false, 'Test 11');
test(findSubarrays([0,1,0,1,0,1,0,1,0,1]), true, 'Test 12');
test(findSubarrays([0,0,0]), true, 'Test 13');
test(findSubarrays([1000000000, -1000000000, 1000000000, -1000000000]), true, 'Test 14');
test(findSubarrays([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]), true, 'Test 15');
test(findSubarrays([-1,0,1,0,-1,0,1]), true, 'Test 16');
test(findSubarrays([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), false, 'Test 17');
test(findSubarrays([1000000000,-1000000000,1000000000,-1000000000]), true, 'Test 18');
test(findSubarrays([5,5,5,5,5,5,5,5,5,5]), true, 'Test 19');
test(findSubarrays([1,2,1,2]), true, 'Test 20');
test(findSubarrays([1,1,2,3,3,4]), false, 'Test 21');
test(findSubarrays([-1,0,1,-1,0,1]), true, 'Test 22');
test(findSubarrays([-1000000000,1000000000,-1000000000,1000000000]), true, 'Test 23');
test(findSubarrays([4,2,4]), true, 'Test 24');
test(findSubarrays([-1, 0, 1, -1, 0, 1, -1, 0, 1]), true, 'Test 25');
test(findSubarrays([-1, -2, -3, -1, -2, -3, -1, -2, -3]), true, 'Test 26');
test(findSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1]), true, 'Test 27');
test(findSubarrays([10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20, 30]), true, 'Test 28');
test(findSubarrays([7, 3, 5, 7, 9, 5, 3, 1, 5, 7, 9, 3, 5, 7, 1]), true, 'Test 29');
test(findSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), true, 'Test 30');
test(findSubarrays([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 100, 200]), true, 'Test 31');
test(findSubarrays([-1, -2, -3, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]), true, 'Test 32');
test(findSubarrays([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), true, 'Test 33');
test(findSubarrays([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), true, 'Test 34');
test(findSubarrays([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), true, 'Test 35');
test(findSubarrays([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), true, 'Test 36');
test(findSubarrays([500000000, -500000000, 500000000, -500000000, 500000000, -500000000]), true, 'Test 37');
test(findSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), true, 'Test 38');
test(findSubarrays([1000000000, -1000000000, 500000000, -500000000, 250000000, -250000000, 125000000, -125000000]), true, 'Test 39');
test(findSubarrays([10, 20, 10, 30, 20, 40, 30, 50, 40, 60, 50, 70, 60, 80, 70, 90, 80, 100, 90, 110]), true, 'Test 40');
test(findSubarrays([10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), false, 'Test 41');
test(findSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), true, 'Test 42');
test(findSubarrays([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), false, 'Test 43');
test(findSubarrays([999999999, -999999999, 999999999, -999999999, 999999999, -999999999, 999999999, -999999999]), true, 'Test 44');
test(findSubarrays([1000000000, -1000000000, 1000000000, -1000000000, 1000000000]), true, 'Test 45');
test(findSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]), true, 'Test 46');
test(findSubarrays([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), true, 'Test 47');
test(findSubarrays([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), true, 'Test 48');
test(findSubarrays([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]), true, 'Test 49');
test(findSubarrays([5, 5, 10, 15, 5, 5]), true, 'Test 50');
test(findSubarrays([-1, -2, -3, -4, -5, -1, -2, -3, -4, -5]), true, 'Test 51');
test(findSubarrays([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 11]), true, 'Test 52');
test(findSubarrays([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9]), true, 'Test 53');
test(findSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), false, 'Test 54');
test(findSubarrays([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 100000000, 10000000, 1000000, 100000, 10000, 1000, 100, 10]), true, 'Test 55');
test(findSubarrays([1, 2, 3, 4, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, 4, 3, 2, 1, 0]), true, 'Test 56');
test(findSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]), false, 'Test 57');
test(findSubarrays([5, -5, 5, -5, 5, -5]), true, 'Test 58');
test(findSubarrays([5, 3, 5, 3, 5, 3]), true, 'Test 59');
test(findSubarrays([10, 20, 10, 20, 10, 20, 10, 20, 10, 20]), true, 'Test 60');
test(findSubarrays([1, 2, 3, 1, 2, 3, 1, 2, 3]), true, 'Test 61');
test(findSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), false, 'Test 62');
test(findSubarrays([0, 1, 2, 3, 4, 3, 2, 1, 0]), true, 'Test 63');
test(findSubarrays([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]), true, 'Test 64');
test(findSubarrays([-1,0,1,-1,0,1,-1]), true, 'Test 65');
test(findSubarrays([0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0]), true, 'Test 66');
test(findSubarrays([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]), false, 'Test 67');
test(findSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3]), true, 'Test 68');
test(findSubarrays([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6]), true, 'Test 69');
test(findSubarrays([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), true, 'Test 70');
test(findSubarrays([25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), false, 'Test 71');
test(findSubarrays([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100, -10]), true, 'Test 72');
test(findSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), false, 'Test 73');
test(findSubarrays([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), true, 'Test 74');
test(findSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), true, 'Test 75');
test(findSubarrays([0, 0, 0, 0, 0, 0, 0, 0]), true, 'Test 76');
test(findSubarrays([1, 2, 3, 4, 3, 2, 1, 0, -1, -2, -3, -4]), true, 'Test 77');
test(findSubarrays([-1, 1, -1, 1, -1, 1, -1, 1]), true, 'Test 78');
test(findSubarrays([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), true, 'Test 79');
test(findSubarrays([999999999, 999999999, -999999999, -999999999, 1, -1, 1, -1]), true, 'Test 80');
test(findSubarrays([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), true, 'Test 81');
test(findSubarrays([0, 0, 1, 1, 2, 2, 3, 3, 4, 4]), false, 'Test 82');
test(findSubarrays([10, 5, 10, 5, 10, 5, 10, 5, 10, 5]), true, 'Test 83');
test(findSubarrays([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), true, 'Test 84');
test(findSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3]), true, 'Test 85');
test(findSubarrays([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2]), true, 'Test 86');
test(findSubarrays([1, 2, 3, 4, 5, 4, 3, 2, 1]), true, 'Test 87');
test(findSubarrays([10, 20, 10, 30, 20, 40, 30, 50, 40, 60, 50, 70, 60, 80, 70, 90, 80, 100, 90, 110, 100, 120, 110, 130, 120, 140, 130, 150, 140, 160]), true, 'Test 88');
test(findSubarrays([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -1, -2, -3, -4, -5]), true, 'Test 89');
test(findSubarrays([5, -5, 5, -5, 5]), true, 'Test 90');
test(findSubarrays([1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1]), true, 'Test 91');
test(findSubarrays([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), true, 'Test 92');
test(findSubarrays([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5]), true, 'Test 93');
test(findSubarrays([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]), false, 'Test 94');
test(findSubarrays([-1, 2, -1, 2, -1]), true, 'Test 95');
test(findSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), false, 'Test 96');
test(findSubarrays([5, 15, -10, 5, 10, 0, -5, 15, 5]), true, 'Test 97');
test(findSubarrays([100, -100, 100, -100, 100, -100]), true, 'Test 98');
test(findSubarrays([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -1, -2]), true, 'Test 99');
test(findSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6]), true, 'Test 100');
test(findSubarrays([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9]), false, 'Test 101');
test(findSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), true, 'Test 102');
test(findSubarrays([100, 200, 300, 400, 500, 100, 200, 300, 400, 500, 600]), true, 'Test 103');
test(findSubarrays([5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3]), true, 'Test 104');
test(findSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), true, 'Test 105');
test(findSubarrays([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), true, 'Test 106');
test(findSubarrays([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), true, 'Test 107');
test(findSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 10, 20, 30, 40, 50]), true, 'Test 108');
test(findSubarrays([1, 3, 2, 3, 4, 5, 6, 7, 8, 9, 1, 3, 2, 3, 4, 5, 6, 7, 8, 9]), true, 'Test 109');
test(findSubarrays([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), true, 'Test 110');
test(findSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), true, 'Test 111');
test(findSubarrays([1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), true, 'Test 112');
test(findSubarrays([100, 200, 300, 100, 200, 300, 100, 200, 300]), true, 'Test 113');
test(findSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), true, 'Test 114');
test(findSubarrays([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), true, 'Test 115');
test(findSubarrays([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), true, 'Test 116');
test(findSubarrays([1,2,3,2,1,2,3]), true, 'Test 117');
test(findSubarrays([100, -100, 100, -100, 100, -100, 100, -100, 100, -100, 100, -100, 100, -100, 100, -100, 100, -100, 100, -100]), true, 'Test 118');
test(findSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]), true, 'Test 119');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

