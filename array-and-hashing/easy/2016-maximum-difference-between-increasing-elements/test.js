// Test: 2016. Maximum Difference Between Increasing Elements
// 118 test cases from LeetCodeDataset
// Run: node test.js

const { maximumDifference } = require("./solution");

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

console.log("\n2016. Maximum Difference Between Increasing Elements\n");

test(maximumDifference([9,4,3,2]), -1, 'Test 1');
test(maximumDifference([5,4,3,2,1]), -1, 'Test 2');
test(maximumDifference([1,2,999999999]), 999999998, 'Test 3');
test(maximumDifference([1,100,1,100,1]), 99, 'Test 4');
test(maximumDifference([100,90,80,70,60,50,40,30,20,10]), -1, 'Test 5');
test(maximumDifference([1,1,1,1,1]), -1, 'Test 6');
test(maximumDifference([1,999999999,2,999999998]), 999999998, 'Test 7');
test(maximumDifference([10,20,20,10,30]), 20, 'Test 8');
test(maximumDifference([1,5,2,10]), 9, 'Test 9');
test(maximumDifference([1,1,1,1]), -1, 'Test 10');
test(maximumDifference([1,3,2,4,3,5]), 4, 'Test 11');
test(maximumDifference([10,1,10,1,10]), 9, 'Test 12');
test(maximumDifference([1000000000,1,2,3,4,5]), 4, 'Test 13');
test(maximumDifference([1,2,3,4,5]), 4, 'Test 14');
test(maximumDifference([7,1,5,4]), 4, 'Test 15');
test(maximumDifference([1,3,6,7,9,14,10]), 13, 'Test 16');
test(maximumDifference([1,2,1,2,1]), 1, 'Test 17');
test(maximumDifference([5,4,3,2,1,10]), 9, 'Test 18');
test(maximumDifference([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 4, 'Test 19');
test(maximumDifference([1,2,3,4,5,6,7,8,9,10]), 9, 'Test 20');
test(maximumDifference([10, 10, 10, 10, 10, 10, 10, 10, 10, 11]), 1, 'Test 21');
test(maximumDifference([3,1,4,1,5,9,2,6,5,3,5]), 8, 'Test 22');
test(maximumDifference([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 1, 'Test 23');
test(maximumDifference([1000000000,999999999,999999998,1,2,3,4,5]), 4, 'Test 24');
test(maximumDifference([1000000000, 999999999, 1, 1000000000, 2, 999999998, 3, 1000000000, 4, 999999997]), 999999999, 'Test 25');
test(maximumDifference([100,100,100,100,101,100,100,100]), 1, 'Test 26');
test(maximumDifference([2,3,10,6,4,8,1,5,7,9]), 8, 'Test 27');
test(maximumDifference([10,1,2,8,1,5,6,3,9]), 8, 'Test 28');
test(maximumDifference([1000000000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 18, 'Test 29');
test(maximumDifference([1, 1000000000, 2, 999999999, 3, 999999998, 4, 999999997]), 999999999, 'Test 30');
test(maximumDifference([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 38, 'Test 31');
test(maximumDifference([3,2,1,5,4,3,2,1,7,6,5,4,3,2,1]), 6, 'Test 32');
test(maximumDifference([1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 9, 'Test 33');
test(maximumDifference([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 29, 'Test 34');
test(maximumDifference([2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 1, 'Test 35');
test(maximumDifference([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10]), 9, 'Test 36');
test(maximumDifference([1, 3, 2, 3, 100, 1, 2, 3, 4]), 99, 'Test 37');
test(maximumDifference([1, 10, 1, 10, 1, 10, 1, 10, 1, 10]), 9, 'Test 38');
test(maximumDifference([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,31]), 30, 'Test 39');
test(maximumDifference([1, 2, 3, 4, 3, 2, 1, 2, 3, 4]), 3, 'Test 40');
test(maximumDifference([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 1, 'Test 41');
test(maximumDifference([2,1,5,3,4,8,7,6,9,10,1]), 9, 'Test 42');
test(maximumDifference([8, 11, 9, 8, 10, 12]), 4, 'Test 43');
test(maximumDifference([10,9,10,8,9,7,8,6,7,5,6,4,5,3,4,2,3,1,2]), 1, 'Test 44');
test(maximumDifference([1,9,8,7,6,5,4,3,2,1,10]), 9, 'Test 45');
test(maximumDifference([1000,900,800,700,600,500,400,300,200,100,150]), 50, 'Test 46');
test(maximumDifference([100,90,80,70,60,50,40,30,20,10,5,15,25,35,45,55,65,75,85,95]), 90, 'Test 47');
test(maximumDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]), 9, 'Test 48');
test(maximumDifference([1,10,2,9,3,8,4,7,5,6,11,12,13,14,15]), 14, 'Test 49');
test(maximumDifference([5,4,3,2,1,10,11,12,13]), 12, 'Test 50');
test(maximumDifference([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]), -1, 'Test 51');
test(maximumDifference([100,101,102,103,104,105,106,107,108,109,110]), 10, 'Test 52');
test(maximumDifference([999999999,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]), 99, 'Test 53');
test(maximumDifference([3,3,3,1,2,2,2,5,5,5]), 4, 'Test 54');
test(maximumDifference([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 19, 'Test 55');
test(maximumDifference([10,9,8,7,6,5,4,3,2,1,11,12,13,14,15,16,17,18,19,20]), 19, 'Test 56');
test(maximumDifference([19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), -1, 'Test 57');
test(maximumDifference([10,9,8,7,6,5,4,3,2,1,12]), 11, 'Test 58');
test(maximumDifference([1,2,3,100,1,2,3,101,1,2,3,102,1,2,3,103,1,2,3,104]), 103, 'Test 59');
test(maximumDifference([3,3,3,1,2,3,4,5,6,7,8,9]), 8, 'Test 60');
test(maximumDifference([1, 2, 1, 3, 2, 4, 3, 5, 4, 6]), 5, 'Test 61');
test(maximumDifference([10,9,8,7,6,5,4,3,2,1]), -1, 'Test 62');
test(maximumDifference([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 9, 'Test 63');
test(maximumDifference([1, 2, 2, 2, 2, 2, 2, 2, 2, 3]), 2, 'Test 64');
test(maximumDifference([5,1,4,3,7,6,9,8,11,10,13,12,15,14,17,16,19,18,21,20]), 20, 'Test 65');
test(maximumDifference([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 66');
test(maximumDifference([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 1, 'Test 67');
test(maximumDifference([1, 1, 1, 1, 1, 1, 1, 1, 1, 2]), 1, 'Test 68');
test(maximumDifference([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 18, 'Test 69');
test(maximumDifference([5,2,6,1,9,4,3,7,8]), 8, 'Test 70');
test(maximumDifference([5,4,3,2,1,0,-1,-2,-3,-4]), -1, 'Test 71');
test(maximumDifference([10,20,15,25,30,5,10,40,35,45,50]), 45, 'Test 72');
test(maximumDifference([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 73');
test(maximumDifference([1,5,3,7,9,2,6,8,4,10]), 9, 'Test 74');
test(maximumDifference([1,3,5,7,9,2,4,6,8,10]), 9, 'Test 75');
test(maximumDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 9, 'Test 76');
test(maximumDifference([10,20,30,40,50,60,70,80,90,100,1]), 90, 'Test 77');
test(maximumDifference([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,11]), 10, 'Test 78');
test(maximumDifference([5, 3, 6, 7, 2, 5, 4, 8, 9, 1]), 7, 'Test 79');
test(maximumDifference([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,21]), 20, 'Test 80');
test(maximumDifference([1,3,2,4,5,7,6,8,9,10,11,12,13,14,15,16,17,18,19,20]), 19, 'Test 81');
test(maximumDifference([5, 4, 3, 2, 1, 10]), 9, 'Test 82');
test(maximumDifference([3, 3, 3, 1, 1, 1, 2, 2, 2, 5, 5, 5, 4, 4, 4]), 4, 'Test 83');
test(maximumDifference([1,10,2,9,3,8,4,7,5,6]), 9, 'Test 84');
test(maximumDifference([10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1]), 9, 'Test 85');
test(maximumDifference([10,9,8,7,6,5,4,3,2,1,11]), 10, 'Test 86');
test(maximumDifference([1, 10, 2, 9, 3, 8, 4, 7, 5, 6]), 9, 'Test 87');
test(maximumDifference([5,11,2,14,1,3,10,6,12,4,15,8]), 14, 'Test 88');
test(maximumDifference([1000000000, 999999999, 999999998, 999999997, 999999996]), -1, 'Test 89');
test(maximumDifference([100,1,101,2,102,3,103,4,104,5,105,6,106,7,107,8,108,9,109,10]), 108, 'Test 90');
test(maximumDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 19, 'Test 91');
test(maximumDifference([5,1,9,2,8,3,7,4,6,10,1,9,2,8,3,7,4,6,10]), 9, 'Test 92');
test(maximumDifference([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 4, 'Test 93');
test(maximumDifference([3, 2, 6, 5, 0, 3]), 4, 'Test 94');
test(maximumDifference([1,2,3,4,5,4,3,2,1,10]), 9, 'Test 95');
test(maximumDifference([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 96');
test(maximumDifference([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11]), 10, 'Test 97');
test(maximumDifference([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 14, 'Test 98');
test(maximumDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 9, 'Test 99');
test(maximumDifference([50,20,30,10,40,60,25,35,55,45,70,65,80,75,90,85,100,95]), 90, 'Test 100');
test(maximumDifference([2,3,1,4,5,6,7,8,9,10,11,12]), 11, 'Test 101');
test(maximumDifference([1, 3, 2, 5, 4, 7, 6, 9, 8, 11]), 10, 'Test 102');
test(maximumDifference([1,1000000000,2,999999999,3,999999998,4,999999997,5,999999996]), 999999999, 'Test 103');
test(maximumDifference([1, 1, 1, 1, 1, 1, 1, 1, 1, 10]), 9, 'Test 104');
test(maximumDifference([1, 2, 3, 4, 100, 5, 6, 7, 8, 9, 10]), 99, 'Test 105');
test(maximumDifference([5,2,3,1,4,7,6,8]), 7, 'Test 106');
test(maximumDifference([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 1, 'Test 107');
test(maximumDifference([10,1,10,1,10,1,10,1,10,1]), 9, 'Test 108');
test(maximumDifference([5, 4, 3, 2, 1, 0, -1, -2]), -1, 'Test 109');
test(maximumDifference([100,100,100,100,101,100,100,100,100,100]), 1, 'Test 110');
test(maximumDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 10, 'Test 111');
test(maximumDifference([10, 9, 2, 5, 3, 7, 101, 18]), 99, 'Test 112');
test(maximumDifference([50,25,75,100,200,150,175,225,275,300,250,325,350]), 325, 'Test 113');
test(maximumDifference([10,20,10,30,20,40,30,50,40]), 40, 'Test 114');
test(maximumDifference([10, 5, 1, 7, 3, 6, 4]), 6, 'Test 115');
test(maximumDifference([1000000000,999999999,999999998,999999997,999999996,1000000001]), 5, 'Test 116');
test(maximumDifference([100, 1, 101, 2, 102, 3, 103, 4, 104, 5]), 103, 'Test 117');
test(maximumDifference([5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9]), 4, 'Test 118');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

