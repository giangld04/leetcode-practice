// Test: 3350. Adjacent Increasing Subarrays Detection Ii
// 152 test cases from LeetCodeDataset
// Run: node test.js

const { maxIncreasingSubarrays } = require("./solution");

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

console.log("\n3350. Adjacent Increasing Subarrays Detection Ii\n");

test(maxIncreasingSubarrays([1,3,2,4,3,5,4,6,5,7]), 2, 'Test 1');
test(maxIncreasingSubarrays([1,3,5,7,9,11,13,15]), 4, 'Test 2');
test(maxIncreasingSubarrays([10,20,30,25,35,45,55,65,75]), 3, 'Test 3');
test(maxIncreasingSubarrays([1,2,2,3,4,5,6,7,8,9]), 4, 'Test 4');
test(maxIncreasingSubarrays([2,5,7,8,9,2,3,4,3,1]), 3, 'Test 5');
test(maxIncreasingSubarrays([10,9,8,7,6,5,4,3,2,1]), 1, 'Test 6');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10]), 5, 'Test 7');
test(maxIncreasingSubarrays([1,2,3,1,2,3,1,2,3,1]), 3, 'Test 8');
test(maxIncreasingSubarrays([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 9');
test(maxIncreasingSubarrays([1,2,3,2,3,4,5,4,5,6]), 3, 'Test 10');
test(maxIncreasingSubarrays([5,6,7,8,9,10,11,12,13,14,15]), 5, 'Test 11');
test(maxIncreasingSubarrays([1,3,5,7,9,11,13,15,17,19]), 5, 'Test 12');
test(maxIncreasingSubarrays([1,3,5,7,9,2,4,6,8,10]), 5, 'Test 13');
test(maxIncreasingSubarrays([1,2,3,4,5,3,4,5,6,7]), 5, 'Test 14');
test(maxIncreasingSubarrays([5,6,7,8,9,1,2,3,4,5,6,7,8,9,10]), 5, 'Test 15');
test(maxIncreasingSubarrays([1,1,1,1,1,1,1,1,1,1]), 1, 'Test 16');
test(maxIncreasingSubarrays([1,2,1,2,1,2,1,2,1,2]), 2, 'Test 17');
test(maxIncreasingSubarrays([9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9]), 4, 'Test 18');
test(maxIncreasingSubarrays([1,3,2,4,5,6,7,8,9,10]), 4, 'Test 19');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]), 5, 'Test 20');
test(maxIncreasingSubarrays([1,2,3,4,4,4,4,5,6,7]), 2, 'Test 21');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,1]), 4, 'Test 22');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 10, 'Test 23');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 7, 'Test 24');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10,11]), 10, 'Test 25');
test(maxIncreasingSubarrays([9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 7, 'Test 26');
test(maxIncreasingSubarrays([1,3,5,7,9,2,4,6,8,10,1,2,3,4,5]), 5, 'Test 27');
test(maxIncreasingSubarrays([1,10,2,9,3,8,4,7,5,6,11,20,12,19,13,18,14,17,15,16]), 2, 'Test 28');
test(maxIncreasingSubarrays([1,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 29');
test(maxIncreasingSubarrays([1, 3, 5, 7, 9, 8, 10, 12, 14, 13, 15, 17, 19]), 4, 'Test 30');
test(maxIncreasingSubarrays([1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 11, 20, 12, 19, 13, 18, 14, 17, 15, 16, 21, 30, 22, 29, 23, 28, 24, 27, 25, 26]), 2, 'Test 31');
test(maxIncreasingSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]), 8, 'Test 32');
test(maxIncreasingSubarrays([1,2,3,2,1,2,3,4,5,6]), 3, 'Test 33');
test(maxIncreasingSubarrays([5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 34');
test(maxIncreasingSubarrays([1,3,5,7,9,2,4,6,8,10,3,5,7,9,11,4,6,8,10,12]), 5, 'Test 35');
test(maxIncreasingSubarrays([2, 4, 6, 8, 10, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 1, 3, 5, 7]), 5, 'Test 36');
test(maxIncreasingSubarrays([5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]), 7, 'Test 37');
test(maxIncreasingSubarrays([1,3,5,4,6,7,8,2,3,4,5,6,7]), 4, 'Test 38');
test(maxIncreasingSubarrays([1, 3, 2, 4, 6, 5, 7, 9, 8, 10, 12, 11, 13, 15, 14, 16, 18, 17, 19, 21, 20, 22, 24, 23, 25, 27, 26, 28, 30]), 3, 'Test 39');
test(maxIncreasingSubarrays([1,2,3,2,3,4,3,4,5,4,5,6,5,6,7,6,7,8,7,8,9]), 3, 'Test 40');
test(maxIncreasingSubarrays([9,8,7,6,5,4,3,2,1,10,11,12,13,14,15,16,17,18,19,20]), 6, 'Test 41');
test(maxIncreasingSubarrays([5,4,3,2,1,6,7,8,9,10,5,4,3,2,1,6,7,8,9,10,5,4,3,2,1,6,7,8,9,10]), 3, 'Test 42');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 43');
test(maxIncreasingSubarrays([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]), 10, 'Test 44');
test(maxIncreasingSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]), 10, 'Test 45');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10,2,3]), 5, 'Test 46');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 10, 'Test 47');
test(maxIncreasingSubarrays([5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 9, 'Test 48');
test(maxIncreasingSubarrays([1,3,5,7,9,2,4,6,8,10,1,3,5,7,9,2,4,6,8,10]), 5, 'Test 49');
test(maxIncreasingSubarrays([1,2,3,4,5,1,2,3,4,5]), 5, 'Test 50');
test(maxIncreasingSubarrays([5,6,7,8,9,10,11,12,13,14,15,1,2,3,4]), 5, 'Test 51');
test(maxIncreasingSubarrays([9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 10, 'Test 52');
test(maxIncreasingSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 10, 'Test 53');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), 12, 'Test 54');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 5, 'Test 55');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 15, 'Test 56');
test(maxIncreasingSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59]), 15, 'Test 57');
test(maxIncreasingSubarrays([1,1,1,1,1,1,1,1,1,1,2,3,4,5,6,7,8,9,10,11,12]), 6, 'Test 58');
test(maxIncreasingSubarrays([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1]), 1, 'Test 59');
test(maxIncreasingSubarrays([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 1, 'Test 60');
test(maxIncreasingSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]), 12, 'Test 61');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,1,3,5,7,9,11,13,15,17,19,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 62');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4]), 5, 'Test 63');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 5, 'Test 64');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 65');
test(maxIncreasingSubarrays([10,20,30,40,50,60,70,80,90,100,10,20,30,40,50]), 5, 'Test 66');
test(maxIncreasingSubarrays([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 9, 'Test 67');
test(maxIncreasingSubarrays([1,3,2,4,3,5,4,6,5,7,4,5,6,7,8,5,6,7,8,9,6,7,8,9,10]), 5, 'Test 68');
test(maxIncreasingSubarrays([31,29,27,25,23,21,19,17,15,13,11,9,7,5,3,1]), 1, 'Test 69');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 70');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10,2,3,4,5]), 5, 'Test 71');
test(maxIncreasingSubarrays([100, 200, 300, 250, 260, 270, 280, 290, 300, 200, 210, 220, 230, 240, 250]), 6, 'Test 72');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,5,6,7,8,9,10,11,12,13,14]), 10, 'Test 73');
test(maxIncreasingSubarrays([10,20,30,40,35,45,55,65,75,85,95,105]), 4, 'Test 74');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3]), 7, 'Test 75');
test(maxIncreasingSubarrays([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 2, 'Test 76');
test(maxIncreasingSubarrays([5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]), 8, 'Test 77');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 5, 'Test 78');
test(maxIncreasingSubarrays([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 5, 'Test 79');
test(maxIncreasingSubarrays([1,1,2,2,3,3,4,4,5,5]), 2, 'Test 80');
test(maxIncreasingSubarrays([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 5, 'Test 81');
test(maxIncreasingSubarrays([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 2, 'Test 82');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 10, 'Test 83');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10,1]), 9, 'Test 84');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20]), 10, 'Test 85');
test(maxIncreasingSubarrays([5,6,7,8,9,10,1,2,3,4,5,6,7,8,9]), 6, 'Test 86');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5]), 10, 'Test 87');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 20, 'Test 88');
test(maxIncreasingSubarrays([1, 3, 2, 4, 6, 5, 7, 9, 8, 10, 12, 11, 13, 15, 14, 16, 18, 17, 19, 21, 20, 22, 24, 23, 25, 27, 26, 28, 30, 29, 31, 33, 32, 34, 36, 35, 37, 39, 38, 40]), 3, 'Test 89');
test(maxIncreasingSubarrays([1,2,3,4,5,6,1,2,3,4]), 4, 'Test 90');
test(maxIncreasingSubarrays([1,2,3,4,5,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]), 5, 'Test 91');
test(maxIncreasingSubarrays([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 3, 'Test 92');
test(maxIncreasingSubarrays([2,3,5,6,8,9,11,12,14,15,17,18,20,21,23,24,26,27,29,30,1,3,5,7,9,11,13,15,17,19]), 10, 'Test 93');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10]), 9, 'Test 94');
test(maxIncreasingSubarrays([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 2, 'Test 95');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]), 21, 'Test 96');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 97');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 5, 'Test 98');
test(maxIncreasingSubarrays([1,2,3,4,5,1,2,3,4,5,6,7,8,9,10]), 5, 'Test 99');
test(maxIncreasingSubarrays([1, 3, 5, 7, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 6, 'Test 100');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 15, 'Test 101');
test(maxIncreasingSubarrays([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 102');
test(maxIncreasingSubarrays([1,2,3,2,1,4,5,4,3,2,1,6,7,8,9,8,7,6,5,4]), 2, 'Test 103');
test(maxIncreasingSubarrays([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 5, 'Test 104');
test(maxIncreasingSubarrays([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 105');
test(maxIncreasingSubarrays([100,200,300,250,350,450,550,400,500,600,700,800,900]), 4, 'Test 106');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 12, 'Test 107');
test(maxIncreasingSubarrays([10,20,30,40,50,60,70,80,90,100]), 5, 'Test 108');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10,1]), 5, 'Test 109');
test(maxIncreasingSubarrays([100, 200, 300, 400, 500, 450, 550, 650, 750, 850, 950, 1050, 900, 1000, 1100, 1200, 1300]), 5, 'Test 110');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10,2,3,4]), 5, 'Test 111');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 112');
test(maxIncreasingSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,1,3,5,7,9,11,13,15,17,19]), 10, 'Test 113');
test(maxIncreasingSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79]), 20, 'Test 114');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 115');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 116');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]), 9, 'Test 117');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3]), 10, 'Test 118');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 10, 'Test 119');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 10, 'Test 120');
test(maxIncreasingSubarrays([1,10,2,9,3,8,4,7,5,6,1,10,2,9,3,8,4,7,5,6]), 2, 'Test 121');
test(maxIncreasingSubarrays([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 2, 'Test 122');
test(maxIncreasingSubarrays([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3]), 1, 'Test 123');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 124');
test(maxIncreasingSubarrays([10,20,30,25,35,45,55,40,50,60,70,80,90,100,110]), 4, 'Test 125');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 5, 'Test 126');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9]), 9, 'Test 127');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 128');
test(maxIncreasingSubarrays([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6]), 1, 'Test 129');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 5, 'Test 130');
test(maxIncreasingSubarrays([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 1, 'Test 131');
test(maxIncreasingSubarrays([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 8, 'Test 132');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 5, 'Test 133');
test(maxIncreasingSubarrays([1,3,5,7,9,11,13,15,17,19,1,3,5,7,9,11,13,15,17,19]), 10, 'Test 134');
test(maxIncreasingSubarrays([1, 3, 5, 7, 9, 11, 10, 12, 14, 16, 18, 20, 19, 21, 23, 25]), 6, 'Test 135');
test(maxIncreasingSubarrays([10, 20, 30, 40, 50, 45, 46, 47, 48, 49, 50, 55, 60, 65, 70]), 5, 'Test 136');
test(maxIncreasingSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 137');
test(maxIncreasingSubarrays([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4]), 8, 'Test 138');
test(maxIncreasingSubarrays([1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 8, 'Test 139');
test(maxIncreasingSubarrays([1,2,3,4,5,1,2,3,4,5,6,7,8,9,10,6,7,8,9,10,11,12,13,14,15]), 10, 'Test 140');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 5, 'Test 141');
test(maxIncreasingSubarrays([1,100,2,99,3,98,4,97,5,96,6,95,7,94,8,93,9,92,10,91]), 2, 'Test 142');
test(maxIncreasingSubarrays([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 8, 'Test 143');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 144');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), 8, 'Test 145');
test(maxIncreasingSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 2, 'Test 146');
test(maxIncreasingSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 11, 'Test 147');
test(maxIncreasingSubarrays([100,99,98,97,96,95,94,93,92,91,1,2,3,4,5,6,7,8,9,10]), 5, 'Test 148');
test(maxIncreasingSubarrays([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 5, 'Test 149');
test(maxIncreasingSubarrays([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6]), 9, 'Test 150');
test(maxIncreasingSubarrays([1,2,3,2,1,4,5,6,5,4,7,8,9,8,7,10,11,12,11,10]), 2, 'Test 151');
test(maxIncreasingSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 1, 3, 5, 7, 9, 11, 13, 15, 1, 3, 5, 7, 9]), 8, 'Test 152');

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
