// Test: 1846. Maximum Element After Decreasing And Rearranging
// 135 test cases from LeetCodeDataset
// Run: node test.js

const { maximumElementAfterDecrementingAndRearranging } = require("./solution");

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

console.log("\n1846. Maximum Element After Decreasing And Rearranging\n");

test(maximumElementAfterDecrementingAndRearranging([3,2,1]), 3, 'Test 1');
test(maximumElementAfterDecrementingAndRearranging([5,4,3,2,1]), 5, 'Test 2');
test(maximumElementAfterDecrementingAndRearranging([1,1000000000,2,3,4]), 5, 'Test 3');
test(maximumElementAfterDecrementingAndRearranging([9,7,5,3,1]), 5, 'Test 4');
test(maximumElementAfterDecrementingAndRearranging([5,5,5,5,5]), 5, 'Test 5');
test(maximumElementAfterDecrementingAndRearranging([1000000000,1,1000000000,1,1000000000]), 4, 'Test 6');
test(maximumElementAfterDecrementingAndRearranging([1,10,20,30,40]), 5, 'Test 7');
test(maximumElementAfterDecrementingAndRearranging([1,1000000000,2,1000000000,3]), 5, 'Test 8');
test(maximumElementAfterDecrementingAndRearranging([1]), 1, 'Test 9');
test(maximumElementAfterDecrementingAndRearranging([100,1,1000]), 3, 'Test 10');
test(maximumElementAfterDecrementingAndRearranging([1,1,1,1,1]), 1, 'Test 11');
test(maximumElementAfterDecrementingAndRearranging([10,9,8,7,6,5,4,3,2,1]), 10, 'Test 12');
test(maximumElementAfterDecrementingAndRearranging([1,10,100,1000,10000]), 5, 'Test 13');
test(maximumElementAfterDecrementingAndRearranging([1,2,2,3,3,3,4,4,4,4]), 4, 'Test 14');
test(maximumElementAfterDecrementingAndRearranging([1,2,3,4,5]), 5, 'Test 15');
test(maximumElementAfterDecrementingAndRearranging([2,3,4,5,6]), 5, 'Test 16');
test(maximumElementAfterDecrementingAndRearranging([9,8,7,6,5,4,3,2,1]), 9, 'Test 17');
test(maximumElementAfterDecrementingAndRearranging([2,2,1,2,1]), 2, 'Test 18');
test(maximumElementAfterDecrementingAndRearranging([1,3,5,7,9]), 5, 'Test 19');
test(maximumElementAfterDecrementingAndRearranging([1,1,1,1,1,1,1,1,1,1]), 1, 'Test 20');
test(maximumElementAfterDecrementingAndRearranging([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]), 4, 'Test 21');
test(maximumElementAfterDecrementingAndRearranging([999999999, 1, 999999998, 2, 999999997, 3, 999999996, 4, 999999995, 5]), 10, 'Test 22');
test(maximumElementAfterDecrementingAndRearranging([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4]), 4, 'Test 23');
test(maximumElementAfterDecrementingAndRearranging([1, 3, 6, 10, 15, 21]), 6, 'Test 24');
test(maximumElementAfterDecrementingAndRearranging([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 5, 'Test 25');
test(maximumElementAfterDecrementingAndRearranging([1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 10]), 10, 'Test 26');
test(maximumElementAfterDecrementingAndRearranging([100,50,25,12,6,3,1]), 7, 'Test 27');
test(maximumElementAfterDecrementingAndRearranging([1000000000, 1, 1000000000, 1, 1000000000]), 4, 'Test 28');
test(maximumElementAfterDecrementingAndRearranging([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6]), 6, 'Test 29');
test(maximumElementAfterDecrementingAndRearranging([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 3, 'Test 30');
test(maximumElementAfterDecrementingAndRearranging([1, 100, 2, 101, 3, 102, 4, 103, 5, 104]), 10, 'Test 31');
test(maximumElementAfterDecrementingAndRearranging([1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5]), 5, 'Test 32');
test(maximumElementAfterDecrementingAndRearranging([100, 100, 100, 100, 100, 100, 100]), 7, 'Test 33');
test(maximumElementAfterDecrementingAndRearranging([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10]), 10, 'Test 34');
test(maximumElementAfterDecrementingAndRearranging([1,2,2,2,3,3,4,4,4,4,5,5,5,5,6,6,6,7,7,8,9]), 9, 'Test 35');
test(maximumElementAfterDecrementingAndRearranging([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 10, 'Test 36');
test(maximumElementAfterDecrementingAndRearranging([50, 25, 75, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 13, 'Test 37');
test(maximumElementAfterDecrementingAndRearranging([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 38');
test(maximumElementAfterDecrementingAndRearranging([1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), 5, 'Test 39');
test(maximumElementAfterDecrementingAndRearranging([1000000000, 1000000000, 1000000000, 1000000000, 1]), 5, 'Test 40');
test(maximumElementAfterDecrementingAndRearranging([1,1000000000,2,999999999,3,999999998,4,999999997]), 8, 'Test 41');
test(maximumElementAfterDecrementingAndRearranging([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]), 5, 'Test 42');
test(maximumElementAfterDecrementingAndRearranging([5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]), 16, 'Test 43');
test(maximumElementAfterDecrementingAndRearranging([1,1000000000,2,999999999,3,999999998]), 6, 'Test 44');
test(maximumElementAfterDecrementingAndRearranging([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 20, 'Test 45');
test(maximumElementAfterDecrementingAndRearranging([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]), 10, 'Test 46');
test(maximumElementAfterDecrementingAndRearranging([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 10, 'Test 47');
test(maximumElementAfterDecrementingAndRearranging([39, 37, 35, 33, 31, 29, 27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), 20, 'Test 48');
test(maximumElementAfterDecrementingAndRearranging([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 10, 'Test 49');
test(maximumElementAfterDecrementingAndRearranging([10,10,10,10,10,10,10,10,10,10]), 10, 'Test 50');
test(maximumElementAfterDecrementingAndRearranging([1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400]), 20, 'Test 51');
test(maximumElementAfterDecrementingAndRearranging([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 5, 'Test 52');
test(maximumElementAfterDecrementingAndRearranging([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 10, 'Test 53');
test(maximumElementAfterDecrementingAndRearranging([5,3,1,4,2]), 5, 'Test 54');
test(maximumElementAfterDecrementingAndRearranging([2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 2, 'Test 55');
test(maximumElementAfterDecrementingAndRearranging([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), 15, 'Test 56');
test(maximumElementAfterDecrementingAndRearranging([5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1]), 5, 'Test 57');
test(maximumElementAfterDecrementingAndRearranging([100,50,20,10,5,2,1,2,5,10,20,50,100,150,200,250,300]), 16, 'Test 58');
test(maximumElementAfterDecrementingAndRearranging([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 12, 'Test 59');
test(maximumElementAfterDecrementingAndRearranging([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 20, 'Test 60');
test(maximumElementAfterDecrementingAndRearranging([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 2, 'Test 61');
test(maximumElementAfterDecrementingAndRearranging([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1]), 20, 'Test 62');
test(maximumElementAfterDecrementingAndRearranging([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]), 13, 'Test 63');
test(maximumElementAfterDecrementingAndRearranging([1,3,6,10,15,21,28,36,45,55,66,78,91,105,120]), 15, 'Test 64');
test(maximumElementAfterDecrementingAndRearranging([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 3, 'Test 65');
test(maximumElementAfterDecrementingAndRearranging([10, 1, 2, 2, 3, 4, 5]), 6, 'Test 66');
test(maximumElementAfterDecrementingAndRearranging([2, 1, 4, 3, 6, 5, 8, 7, 10, 9]), 10, 'Test 67');
test(maximumElementAfterDecrementingAndRearranging([1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190, 210]), 20, 'Test 68');
test(maximumElementAfterDecrementingAndRearranging([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), 15, 'Test 69');
test(maximumElementAfterDecrementingAndRearranging([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 2, 'Test 70');
test(maximumElementAfterDecrementingAndRearranging([10,1,1,1,1,1,1,1,1,1]), 2, 'Test 71');
test(maximumElementAfterDecrementingAndRearranging([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 10, 'Test 72');
test(maximumElementAfterDecrementingAndRearranging([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11]), 20, 'Test 73');
test(maximumElementAfterDecrementingAndRearranging([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 5, 'Test 74');
test(maximumElementAfterDecrementingAndRearranging([1,100,2,99,3,98,4,97,5,96,6,95,7,94,8,93,9,92,10,91]), 20, 'Test 75');
test(maximumElementAfterDecrementingAndRearranging([10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 10, 'Test 76');
test(maximumElementAfterDecrementingAndRearranging([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 77');
test(maximumElementAfterDecrementingAndRearranging([50, 40, 30, 20, 10, 5, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 9, 'Test 78');
test(maximumElementAfterDecrementingAndRearranging([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 79');
test(maximumElementAfterDecrementingAndRearranging([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]), 2, 'Test 80');
test(maximumElementAfterDecrementingAndRearranging([5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 2, 'Test 81');
test(maximumElementAfterDecrementingAndRearranging([2,1,2,3,2,3,4,3,4,5,4,5,6,5,6,7,6,7,8,7]), 8, 'Test 82');
test(maximumElementAfterDecrementingAndRearranging([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1]), 10, 'Test 83');
test(maximumElementAfterDecrementingAndRearranging([1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3]), 3, 'Test 84');
test(maximumElementAfterDecrementingAndRearranging([50, 40, 30, 20, 10, 1, 2, 3, 4, 5]), 10, 'Test 85');
test(maximumElementAfterDecrementingAndRearranging([1,999999999,999999998,999999997,999999996,999999995]), 6, 'Test 86');
test(maximumElementAfterDecrementingAndRearranging([9, 8, 7, 6, 5, 4, 3, 2, 1, 10]), 10, 'Test 87');
test(maximumElementAfterDecrementingAndRearranging([1000,1000,1000,1000,1000]), 5, 'Test 88');
test(maximumElementAfterDecrementingAndRearranging([1000000000, 1000000000, 1000000000, 1, 1, 1]), 4, 'Test 89');
test(maximumElementAfterDecrementingAndRearranging([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 10, 'Test 90');
test(maximumElementAfterDecrementingAndRearranging([1000000000, 999999999, 1000000001, 2, 3]), 5, 'Test 91');
test(maximumElementAfterDecrementingAndRearranging([999999999,999999998,999999997,999999996,999999995,1]), 6, 'Test 92');
test(maximumElementAfterDecrementingAndRearranging([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 93');
test(maximumElementAfterDecrementingAndRearranging([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]), 10, 'Test 94');
test(maximumElementAfterDecrementingAndRearranging([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 30, 'Test 95');
test(maximumElementAfterDecrementingAndRearranging([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 96');
test(maximumElementAfterDecrementingAndRearranging([5, 4, 3, 2, 1, 1, 1, 1, 1, 1]), 5, 'Test 97');
test(maximumElementAfterDecrementingAndRearranging([1000000000,1,1000000000,1,1000000000,1,1000000000,1]), 5, 'Test 98');
test(maximumElementAfterDecrementingAndRearranging([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10]), 10, 'Test 99');
test(maximumElementAfterDecrementingAndRearranging([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 20, 'Test 100');
test(maximumElementAfterDecrementingAndRearranging([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 5, 'Test 101');
test(maximumElementAfterDecrementingAndRearranging([5,4,3,2,1,1,1]), 5, 'Test 102');
test(maximumElementAfterDecrementingAndRearranging([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11]), 11, 'Test 103');
test(maximumElementAfterDecrementingAndRearranging([1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 104');
test(maximumElementAfterDecrementingAndRearranging([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 20, 'Test 105');
test(maximumElementAfterDecrementingAndRearranging([1, 2, 3, 4, 5, 10, 100, 1000]), 8, 'Test 106');
test(maximumElementAfterDecrementingAndRearranging([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 30, 'Test 107');
test(maximumElementAfterDecrementingAndRearranging([10, 5, 15, 20, 1, 3, 8]), 7, 'Test 108');
test(maximumElementAfterDecrementingAndRearranging([5, 4, 3, 2, 1]), 5, 'Test 109');
test(maximumElementAfterDecrementingAndRearranging([1, 100, 200, 300, 400, 500, 600, 700, 800, 900]), 10, 'Test 110');
test(maximumElementAfterDecrementingAndRearranging([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 10, 'Test 111');
test(maximumElementAfterDecrementingAndRearranging([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1, 2, 3, 4, 5]), 15, 'Test 112');
test(maximumElementAfterDecrementingAndRearranging([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190]), 20, 'Test 113');
test(maximumElementAfterDecrementingAndRearranging([1000000000, 1, 1000000000, 2, 1000000000, 3]), 6, 'Test 114');
test(maximumElementAfterDecrementingAndRearranging([1000000000, 999999999, 999999998, 999999997, 999999996]), 5, 'Test 115');
test(maximumElementAfterDecrementingAndRearranging([1,2,2,3,3,4,4,5,5]), 5, 'Test 116');
test(maximumElementAfterDecrementingAndRearranging([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 10, 'Test 117');
test(maximumElementAfterDecrementingAndRearranging([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 10, 'Test 118');
test(maximumElementAfterDecrementingAndRearranging([3,3,3,3,3,2,2,2,1,1]), 3, 'Test 119');
test(maximumElementAfterDecrementingAndRearranging([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 2, 'Test 120');
test(maximumElementAfterDecrementingAndRearranging([1,100,2,99,3,98,4,97,5,96]), 10, 'Test 121');
test(maximumElementAfterDecrementingAndRearranging([5,4,3,2,1,1,1,1,1,1]), 5, 'Test 122');
test(maximumElementAfterDecrementingAndRearranging([1,1000000000,2,999999999,3]), 5, 'Test 123');
test(maximumElementAfterDecrementingAndRearranging([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 20, 'Test 124');
test(maximumElementAfterDecrementingAndRearranging([1, 1000000000, 2, 999999999, 3, 999999998]), 6, 'Test 125');
test(maximumElementAfterDecrementingAndRearranging([2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]), 2, 'Test 126');
test(maximumElementAfterDecrementingAndRearranging([5, 4, 3, 2, 1, 1, 1]), 5, 'Test 127');
test(maximumElementAfterDecrementingAndRearranging([1,10,20,30,40,50,60,70,80,90,100,110,120,130,140]), 15, 'Test 128');
test(maximumElementAfterDecrementingAndRearranging([2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1]), 2, 'Test 129');
test(maximumElementAfterDecrementingAndRearranging([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5]), 5, 'Test 130');
test(maximumElementAfterDecrementingAndRearranging([29,27,25,23,21,19,17,15,13,11,9,7,5,3,1]), 15, 'Test 131');
test(maximumElementAfterDecrementingAndRearranging([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80]), 21, 'Test 132');
test(maximumElementAfterDecrementingAndRearranging([1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 2, 'Test 133');
test(maximumElementAfterDecrementingAndRearranging([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15]), 15, 'Test 134');
test(maximumElementAfterDecrementingAndRearranging([1, 2, 3, 100, 200, 300, 400, 500]), 8, 'Test 135');

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
