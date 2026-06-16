// Test: 2771. Longest Non Decreasing Subarray From Two Arrays
// 125 test cases from LeetCodeDataset
// Run: node test.js

const { maxNonDecreasingLength } = require("./solution");

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

console.log("\n2771. Longest Non Decreasing Subarray From Two Arrays\n");

test(maxNonDecreasingLength([2,3,1], [1,2,1]), 2, 'Test 1');
test(maxNonDecreasingLength([8,6,4,2], [7,5,3,1]), 1, 'Test 2');
test(maxNonDecreasingLength([1,2,2,2,3], [2,2,3,3,4]), 5, 'Test 3');
test(maxNonDecreasingLength([1000000000,1,1000000000], [1,1000000000,1]), 3, 'Test 4');
test(maxNonDecreasingLength([1000000000,1000000000,1000000000], [1000000000,1000000000,1000000000]), 3, 'Test 5');
test(maxNonDecreasingLength([1,3,5,7], [2,4,6,8]), 4, 'Test 6');
test(maxNonDecreasingLength([1,2,3], [3,2,1]), 3, 'Test 7');
test(maxNonDecreasingLength([1,3,5,7,9], [2,4,6,8,10]), 5, 'Test 8');
test(maxNonDecreasingLength([3,3,3,3], [3,3,3,3]), 4, 'Test 9');
test(maxNonDecreasingLength([1,2,3,4,5], [5,4,3,2,1]), 5, 'Test 10');
test(maxNonDecreasingLength([8,4,6,2], [7,3,5,1]), 2, 'Test 11');
test(maxNonDecreasingLength([5,3,4,5], [1,2,3,4]), 4, 'Test 12');
test(maxNonDecreasingLength([1], [2]), 1, 'Test 13');
test(maxNonDecreasingLength([1,1], [2,2]), 2, 'Test 14');
test(maxNonDecreasingLength([5,4,3,2,1], [1,2,3,4,5]), 5, 'Test 15');
test(maxNonDecreasingLength([1,3,2,1], [2,2,3,4]), 4, 'Test 16');
test(maxNonDecreasingLength([1], [1]), 1, 'Test 17');
test(maxNonDecreasingLength([10,10,10], [10,10,10]), 3, 'Test 18');
test(maxNonDecreasingLength([10,9,2,5,3,7,101,18], [0,4,1,1,1,6,8,11]), 6, 'Test 19');
test(maxNonDecreasingLength([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7], [2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8]), 21, 'Test 20');
test(maxNonDecreasingLength([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12], [2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11,13]), 20, 'Test 21');
test(maxNonDecreasingLength([1,5,9,13,17,21], [2,6,10,14,18,22]), 6, 'Test 22');
test(maxNonDecreasingLength([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 23');
test(maxNonDecreasingLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 10, 'Test 24');
test(maxNonDecreasingLength([1, 3, 2, 1, 2, 3, 2, 1, 2, 3], [2, 4, 3, 2, 3, 4, 3, 2, 3, 4]), 5, 'Test 25');
test(maxNonDecreasingLength([7, 7, 7, 7, 7, 7, 7], [7, 7, 7, 7, 7, 7, 7]), 7, 'Test 26');
test(maxNonDecreasingLength([1,1,2,2,3,3,4,4,5,5], [2,2,3,3,4,4,5,5,6,6]), 10, 'Test 27');
test(maxNonDecreasingLength([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [2, 2, 3, 3, 4, 4, 5, 5, 6, 6]), 10, 'Test 28');
test(maxNonDecreasingLength([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 10, 'Test 29');
test(maxNonDecreasingLength([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 15, 'Test 30');
test(maxNonDecreasingLength([10, 9, 2, 5, 3, 7, 101, 18], [9, 8, 3, 6, 5, 8, 102, 19]), 5, 'Test 31');
test(maxNonDecreasingLength([3, 3, 2, 2, 1, 1], [2, 2, 1, 1, 3, 3]), 6, 'Test 32');
test(maxNonDecreasingLength([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 10, 'Test 33');
test(maxNonDecreasingLength([5,7,9,10,6,8], [6,7,8,9,10,5]), 5, 'Test 34');
test(maxNonDecreasingLength([1,3,5,2,4,6,3,5,7], [2,4,6,1,3,5,4,6,8]), 3, 'Test 35');
test(maxNonDecreasingLength([1, 3, 2, 4, 3, 5, 4, 6, 5, 7], [2, 4, 3, 5, 4, 6, 5, 7, 6, 8]), 10, 'Test 36');
test(maxNonDecreasingLength([1, 2, 2, 3, 4, 4, 4, 5, 5, 5], [2, 2, 2, 3, 3, 3, 4, 4, 4, 4]), 10, 'Test 37');
test(maxNonDecreasingLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 38');
test(maxNonDecreasingLength([10,20,30,40,50,60,70,80,90,100], [1,2,3,4,5,6,7,8,9,10]), 10, 'Test 39');
test(maxNonDecreasingLength([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1], [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 15, 'Test 40');
test(maxNonDecreasingLength([3,6,9,12,15], [1,4,7,10,13]), 5, 'Test 41');
test(maxNonDecreasingLength([3, 3, 3, 100, 3, 3, 3, 100, 3, 3], [100, 3, 3, 3, 100, 3, 3, 3, 100, 3]), 10, 'Test 42');
test(maxNonDecreasingLength([10,20,30,40,50], [5,15,25,35,45]), 5, 'Test 43');
test(maxNonDecreasingLength([10, 20, 15, 25, 30, 5, 10, 20, 25, 35], [5, 15, 10, 20, 35, 1, 5, 15, 25, 40]), 5, 'Test 44');
test(maxNonDecreasingLength([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 10, 'Test 45');
test(maxNonDecreasingLength([1,5,7,9,11,13,15], [2,4,6,8,10,12,14]), 7, 'Test 46');
test(maxNonDecreasingLength([1,3,5,7,9,11,13,15], [2,4,6,8,10,12,14,16]), 8, 'Test 47');
test(maxNonDecreasingLength([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10], [2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11]), 16, 'Test 48');
test(maxNonDecreasingLength([1,2,3,4,5,100,6,7,8,9], [1,2,3,4,5,5,6,7,8,9]), 10, 'Test 49');
test(maxNonDecreasingLength([10,20,30,25,20,15,10,5], [5,10,15,20,25,30,35,40]), 8, 'Test 50');
test(maxNonDecreasingLength([10,20,30,40,50,60,70,80,90,100], [15,25,35,45,55,65,75,85,95,105]), 10, 'Test 51');
test(maxNonDecreasingLength([100,200,300,400,500,600,700,800,900,1000], [50,150,250,350,450,550,650,750,850,950]), 10, 'Test 52');
test(maxNonDecreasingLength([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], [2, 2, 2, 3, 3, 3, 4, 4, 4, 4]), 10, 'Test 53');
test(maxNonDecreasingLength([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]), 15, 'Test 54');
test(maxNonDecreasingLength([100,200,300,400,500,600,700,800,900,1000], [101,201,301,401,501,601,701,801,901,1001]), 10, 'Test 55');
test(maxNonDecreasingLength([5, 6, 7, 8, 9, 1, 2, 3, 4, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]), 10, 'Test 56');
test(maxNonDecreasingLength([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 10, 'Test 57');
test(maxNonDecreasingLength([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]), 15, 'Test 58');
test(maxNonDecreasingLength([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], [1, 3, 1, 3, 1, 3, 1, 3, 1, 3]), 10, 'Test 59');
test(maxNonDecreasingLength([7,7,7,7,7], [7,7,7,7,7]), 5, 'Test 60');
test(maxNonDecreasingLength([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 61');
test(maxNonDecreasingLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 15, 'Test 62');
test(maxNonDecreasingLength([1,3,5,7,9,11,13,15,17,19], [2,4,6,8,10,12,14,16,18,20]), 10, 'Test 63');
test(maxNonDecreasingLength([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 31, 'Test 64');
test(maxNonDecreasingLength([5, 3, 5, 3, 5, 3, 5], [3, 5, 3, 5, 3, 5, 3]), 7, 'Test 65');
test(maxNonDecreasingLength([3,2,4,5,1,3,4], [4,3,5,6,2,4,5]), 4, 'Test 66');
test(maxNonDecreasingLength([1, 4, 7, 10, 13, 16, 19], [2, 5, 8, 11, 14, 17, 20]), 7, 'Test 67');
test(maxNonDecreasingLength([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]), 5, 'Test 68');
test(maxNonDecreasingLength([5,10,5,15,20], [3,8,7,12,25]), 3, 'Test 69');
test(maxNonDecreasingLength([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 10, 'Test 70');
test(maxNonDecreasingLength([1,2,2,3,3,3,4,4,5,5,5,5,6,6,6,6,6], [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]), 17, 'Test 71');
test(maxNonDecreasingLength([5,3,4,5,1,6,7,8,9,10], [4,4,5,6,1,2,3,8,8,11]), 6, 'Test 72');
test(maxNonDecreasingLength([9,8,7,6,5,4,3,2,1,10], [10,9,8,7,6,5,4,3,2,1]), 3, 'Test 73');
test(maxNonDecreasingLength([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 10, 'Test 74');
test(maxNonDecreasingLength([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 20, 'Test 75');
test(maxNonDecreasingLength([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]), 15, 'Test 76');
test(maxNonDecreasingLength([10, 11, 10, 11, 10, 11], [11, 10, 11, 10, 11, 10]), 6, 'Test 77');
test(maxNonDecreasingLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 78');
test(maxNonDecreasingLength([5,6,7,8,9,1,2,3,4,5], [4,5,6,7,8,9,1,2,3,4]), 6, 'Test 79');
test(maxNonDecreasingLength([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 15, 'Test 80');
test(maxNonDecreasingLength([1, 2, 1, 2, 1, 2, 1, 2, 1, 2], [2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), 10, 'Test 81');
test(maxNonDecreasingLength([9, 7, 5, 3, 1], [10, 8, 6, 4, 2]), 1, 'Test 82');
test(maxNonDecreasingLength([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 10, 'Test 83');
test(maxNonDecreasingLength([1,5,2,6,3,7,4,8,5,9], [2,6,3,7,4,8,5,9,6,10]), 2, 'Test 84');
test(maxNonDecreasingLength([10,20,30,40,50], [50,40,30,20,10]), 5, 'Test 85');
test(maxNonDecreasingLength([1, 4, 5, 3, 2, 6, 7], [2, 3, 4, 5, 6, 7, 8]), 7, 'Test 86');
test(maxNonDecreasingLength([1, 5, 2, 5, 3, 6], [2, 3, 4, 5, 6, 7]), 6, 'Test 87');
test(maxNonDecreasingLength([1,5,7,3,9,12], [2,4,6,8,10,11]), 6, 'Test 88');
test(maxNonDecreasingLength([9,8,7,6,5,4,3,2,1], [10,9,8,7,6,5,4,3,2]), 2, 'Test 89');
test(maxNonDecreasingLength([10, 20, 30, 40, 50], [5, 15, 25, 35, 45]), 5, 'Test 90');
test(maxNonDecreasingLength([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 2, 'Test 91');
test(maxNonDecreasingLength([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]), 5, 'Test 92');
test(maxNonDecreasingLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 10, 'Test 93');
test(maxNonDecreasingLength([1,2,2,3,4,5,6], [2,2,3,4,5,6,7]), 7, 'Test 94');
test(maxNonDecreasingLength([1, 3, 2, 4, 3, 5, 4, 6, 5, 7], [2, 2, 3, 3, 4, 4, 5, 5, 6, 6]), 10, 'Test 95');
test(maxNonDecreasingLength([1000000000, 999999999, 999999998, 999999997, 999999996], [999999999, 999999998, 999999997, 999999996, 999999995]), 2, 'Test 96');
test(maxNonDecreasingLength([10,20,10,20,10,20,10,20,10,20], [20,10,20,10,20,10,20,10,20,10]), 10, 'Test 97');
test(maxNonDecreasingLength([5,5,5,5,5,5,5,5,5,5], [5,5,5,5,5,5,5,5,5,5]), 10, 'Test 98');
test(maxNonDecreasingLength([1, 3, 5, 7, 9, 11], [1, 3, 5, 7, 9, 11]), 6, 'Test 99');
test(maxNonDecreasingLength([1, 5, 3, 7, 9], [2, 6, 4, 8, 10]), 3, 'Test 100');
test(maxNonDecreasingLength([1,2,3,4,5,6,7,8,9,10], [2,3,4,5,6,7,8,9,10,11]), 10, 'Test 101');
test(maxNonDecreasingLength([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 102');
test(maxNonDecreasingLength([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]), 5, 'Test 103');
test(maxNonDecreasingLength([3, 5, 4, 3, 5, 6, 7], [2, 1, 6, 5, 4, 8, 9]), 6, 'Test 104');
test(maxNonDecreasingLength([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [5, 5, 4, 4, 3, 3, 2, 2, 1, 1]), 10, 'Test 105');
test(maxNonDecreasingLength([3, 4, 2, 5, 7, 8], [2, 5, 5, 6, 5, 7]), 6, 'Test 106');
test(maxNonDecreasingLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]), 10, 'Test 107');
test(maxNonDecreasingLength([1, 2, 2, 2, 3, 3, 3, 4, 4, 4], [1, 1, 1, 2, 2, 2, 3, 3, 3, 4]), 10, 'Test 108');
test(maxNonDecreasingLength([1, 2, 2, 3, 4, 4, 5, 6, 6, 7], [2, 1, 3, 2, 5, 4, 7, 6, 8, 7]), 10, 'Test 109');
test(maxNonDecreasingLength([1000000000,1,1000000000,2,1000000000,3,1000000000,4,1000000000,5], [1,1000000000,2,1000000000,3,1000000000,4,1000000000,5,1000000000]), 10, 'Test 110');
test(maxNonDecreasingLength([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10], [1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10]), 2, 'Test 111');
test(maxNonDecreasingLength([1000000000, 1000000000, 1000000000, 1000000000, 1000000000], [999999999, 999999999, 999999999, 999999999, 999999999]), 5, 'Test 112');
test(maxNonDecreasingLength([10,10,10,10,10], [11,9,11,9,11]), 5, 'Test 113');
test(maxNonDecreasingLength([1, 2, 3, 4, 3, 2, 1, 2, 3, 4], [4, 3, 2, 1, 2, 3, 4, 3, 2, 1]), 4, 'Test 114');
test(maxNonDecreasingLength([1, 10, 3, 10, 5, 10, 7, 10, 9, 10], [2, 9, 4, 9, 6, 9, 8, 9, 10, 9]), 4, 'Test 115');
test(maxNonDecreasingLength([1,3,5,7,9], [9,7,5,3,1]), 5, 'Test 116');
test(maxNonDecreasingLength([1,2,3,4,3,2,1], [2,3,4,5,4,3,2]), 5, 'Test 117');
test(maxNonDecreasingLength([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]), 10, 'Test 118');
test(maxNonDecreasingLength([1,3,5,7,9,11,13,15,17,19,21,23,25], [2,4,6,8,10,12,14,16,18,20,22,24,26]), 13, 'Test 119');
test(maxNonDecreasingLength([1, 1, 1, 1, 1], [2, 2, 2, 2, 2]), 5, 'Test 120');
test(maxNonDecreasingLength([7,8,9,10,11,5,6,7,8,9], [1,2,3,4,5,6,7,8,9,10]), 10, 'Test 121');
test(maxNonDecreasingLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 1, 10, 1, 10, 1, 10, 1, 10, 1]), 10, 'Test 122');
test(maxNonDecreasingLength([1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1]), 9, 'Test 123');
test(maxNonDecreasingLength([1,1,1,1,1,1,1,1,1,1], [2,2,2,2,2,2,2,2,2,2]), 10, 'Test 124');
test(maxNonDecreasingLength([1, 2, 2, 3, 3, 4, 5], [2, 2, 3, 3, 4, 4, 5]), 7, 'Test 125');

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
