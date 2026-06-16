// Test: 2926. Maximum Balanced Subsequence Sum
// 159 test cases from LeetCodeDataset
// Run: node test.js

const { maxBalancedSubsequenceSum } = require("./solution");

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

console.log("\n2926. Maximum Balanced Subsequence Sum\n");

test(maxBalancedSubsequenceSum([-2,-1]), -1, 'Test 1');
test(maxBalancedSubsequenceSum([3,3,5,6]), 14, 'Test 2');
test(maxBalancedSubsequenceSum([1000000000, -1000000000, 1000000000, -1000000000, 1000000000]), 1000000000, 'Test 3');
test(maxBalancedSubsequenceSum([10,9,2,5,3,7,101,18]), 115, 'Test 4');
test(maxBalancedSubsequenceSum([1,2,3,5,8,13]), 32, 'Test 5');
test(maxBalancedSubsequenceSum([-1,0,1,0,-1]), 1, 'Test 6');
test(maxBalancedSubsequenceSum([1000000000,-1000000000,1000000000,-1000000000,1000000000]), 1000000000, 'Test 7');
test(maxBalancedSubsequenceSum([10,20,30,40,50]), 150, 'Test 8');
test(maxBalancedSubsequenceSum([-5,-4,-3,-2,-1]), -1, 'Test 9');
test(maxBalancedSubsequenceSum([0,0,0,0,0]), 0, 'Test 10');
test(maxBalancedSubsequenceSum([1,2,3,4,5]), 15, 'Test 11');
test(maxBalancedSubsequenceSum([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]), -1, 'Test 12');
test(maxBalancedSubsequenceSum([1,1,1,1,1]), 1, 'Test 13');
test(maxBalancedSubsequenceSum([5,-1,-3,8]), 13, 'Test 14');
test(maxBalancedSubsequenceSum([-100,-99,-98,-97,-96,-95,-94,-93,-92,-91]), -91, 'Test 15');
test(maxBalancedSubsequenceSum([1,2,3,5,8,13,21,34,55,89]), 231, 'Test 16');
test(maxBalancedSubsequenceSum([1,10,2,9,3,8,4,7,5,6]), 11, 'Test 17');
test(maxBalancedSubsequenceSum([5,4,3,2,1]), 5, 'Test 18');
test(maxBalancedSubsequenceSum([-10,-20,-30,-40,-50]), -10, 'Test 19');
test(maxBalancedSubsequenceSum([10,-5,1,100,-3]), 110, 'Test 20');
test(maxBalancedSubsequenceSum([1,-1,2,-2,3,-3,4,-4,5,-5]), 5, 'Test 21');
test(maxBalancedSubsequenceSum([1000000000,999999999,999999998,999999997,999999996]), 1000000000, 'Test 22');
test(maxBalancedSubsequenceSum([-1000000000,-999999999,-999999998,-999999997,-999999996]), -999999996, 'Test 23');
test(maxBalancedSubsequenceSum([-1, 1, -2, 2, -3, 3, -4, 4, -5, 5]), 5, 'Test 24');
test(maxBalancedSubsequenceSum([29, 27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), 29, 'Test 25');
test(maxBalancedSubsequenceSum([100, 95, 90, 85, 80, 75, 70, 65, 60, 55]), 100, 'Test 26');
test(maxBalancedSubsequenceSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]), 256, 'Test 27');
test(maxBalancedSubsequenceSum([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]), 375, 'Test 28');
test(maxBalancedSubsequenceSum([1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), 1, 'Test 29');
test(maxBalancedSubsequenceSum([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 5500, 'Test 30');
test(maxBalancedSubsequenceSum([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 1023, 'Test 31');
test(maxBalancedSubsequenceSum([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288]), 1048575, 'Test 32');
test(maxBalancedSubsequenceSum([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 1, 2, 3, 4, 5]), 15, 'Test 33');
test(maxBalancedSubsequenceSum([1, 2, 0, 3, 1, 4, 2, 5, 3, 6, 4, 7, 5, 8, 6, 9, 7, 10, 8, 11]), 19, 'Test 34');
test(maxBalancedSubsequenceSum([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 5, 'Test 35');
test(maxBalancedSubsequenceSum([-1, 0, 1, -2, 2, -3, 3, -4, 4, -5, 5]), 5, 'Test 36');
test(maxBalancedSubsequenceSum([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 15, 'Test 37');
test(maxBalancedSubsequenceSum([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]), 9, 'Test 38');
test(maxBalancedSubsequenceSum([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 15, 'Test 39');
test(maxBalancedSubsequenceSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 40');
test(maxBalancedSubsequenceSum([1, 2, 3, 4, 5, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), 15, 'Test 41');
test(maxBalancedSubsequenceSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 225, 'Test 42');
test(maxBalancedSubsequenceSum([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10]), 18, 'Test 43');
test(maxBalancedSubsequenceSum([33, 29, 27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1, -1, -3, -5, -7]), 33, 'Test 44');
test(maxBalancedSubsequenceSum([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 10, 'Test 45');
test(maxBalancedSubsequenceSum([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 30, 'Test 46');
test(maxBalancedSubsequenceSum([-1000000000, 1000000000, -999999999, 999999999, -999999998, 999999998, -999999997, 999999997, -999999996, 999999996]), 1000000000, 'Test 47');
test(maxBalancedSubsequenceSum([-1000000000, -999999999, -999999998, -999999997, -999999996, -999999995, -999999994, -999999993, -999999992, -999999991]), -999999991, 'Test 48');
test(maxBalancedSubsequenceSum([10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), 10, 'Test 49');
test(maxBalancedSubsequenceSum([1, 2, 4, 7, 11, 16, 22, 29, 37, 46]), 175, 'Test 50');
test(maxBalancedSubsequenceSum([999999999, -999999999, 999999998, -999999998, 999999997, -999999997, 999999996, -999999996, 999999995, -999999995]), 999999999, 'Test 51');
test(maxBalancedSubsequenceSum([-10, 20, -30, 40, -50, 60, -70, 80, -90, 100]), 300, 'Test 52');
test(maxBalancedSubsequenceSum([-10, 10, -20, 20, -30, 30, -40, 40, -50, 50]), 150, 'Test 53');
test(maxBalancedSubsequenceSum([500000000, 600000000, 700000000, 800000000, 900000000, 1000000000, 1100000000, 1200000000, 1300000000, 1400000000]), 9500000000, 'Test 54');
test(maxBalancedSubsequenceSum([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), 275, 'Test 55');
test(maxBalancedSubsequenceSum([1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609]), 23248, 'Test 56');
test(maxBalancedSubsequenceSum([10,20,30,40,50,45,40,35,30,25,20,15,10,5,0,-5,-10,-15,-20,-25]), 150, 'Test 57');
test(maxBalancedSubsequenceSum([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597]), 4179, 'Test 58');
test(maxBalancedSubsequenceSum([10, -10, 20, -20, 30, -30, 40, -40, 50, -50]), 150, 'Test 59');
test(maxBalancedSubsequenceSum([0, 1, 3, 6, 10, 15, 21, 28, 36, 45]), 165, 'Test 60');
test(maxBalancedSubsequenceSum([1, 3, 6, 10, 15, 21, 28, 36, 45, 55]), 220, 'Test 61');
test(maxBalancedSubsequenceSum([20, 19, 18, 17, 16, 15, 14, 13, 12, 11]), 20, 'Test 62');
test(maxBalancedSubsequenceSum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 5, 'Test 63');
test(maxBalancedSubsequenceSum([10, 1, 20, 2, 30, 3, 40, 4, 50, 5]), 150, 'Test 64');
test(maxBalancedSubsequenceSum([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16]), -1, 'Test 65');
test(maxBalancedSubsequenceSum([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]), 15, 'Test 66');
test(maxBalancedSubsequenceSum([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]), 30, 'Test 67');
test(maxBalancedSubsequenceSum([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991]), 1000000000, 'Test 68');
test(maxBalancedSubsequenceSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4]), 10, 'Test 69');
test(maxBalancedSubsequenceSum([100, 99, 98, 97, 96, 95, 94, 93, 92, 91]), 100, 'Test 70');
test(maxBalancedSubsequenceSum([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125]), 1000000000, 'Test 71');
test(maxBalancedSubsequenceSum([1, 2, 3, 4, 5, 10, 15, 20, 25, 30]), 115, 'Test 72');
test(maxBalancedSubsequenceSum([1000000000, 2000000000, 3000000000, 4000000000, 5000000000, 6000000000, 7000000000, 8000000000, 9000000000, 10000000000]), 55000000000, 'Test 73');
test(maxBalancedSubsequenceSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 10, 'Test 74');
test(maxBalancedSubsequenceSum([-5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33]), 289, 'Test 75');
test(maxBalancedSubsequenceSum([10, 15, 20, 25, 30, 35, 40, 45, 50, 55]), 325, 'Test 76');
test(maxBalancedSubsequenceSum([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8]), 36, 'Test 77');
test(maxBalancedSubsequenceSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 210, 'Test 78');
test(maxBalancedSubsequenceSum([-1000000000, 1000000000, -1000000000, 1000000000, -1000000000]), 1000000000, 'Test 79');
test(maxBalancedSubsequenceSum([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16]), 64, 'Test 80');
test(maxBalancedSubsequenceSum([150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 150, 'Test 81');
test(maxBalancedSubsequenceSum([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8]), 8, 'Test 82');
test(maxBalancedSubsequenceSum([1, 4, 5, 6, 8, 10, 13, 16, 20, 25]), 108, 'Test 83');
test(maxBalancedSubsequenceSum([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), 32767, 'Test 84');
test(maxBalancedSubsequenceSum([100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 100, 'Test 85');
test(maxBalancedSubsequenceSum([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]), 231, 'Test 86');
test(maxBalancedSubsequenceSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 465, 'Test 87');
test(maxBalancedSubsequenceSum([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4]), 10, 'Test 88');
test(maxBalancedSubsequenceSum([-1, 0, 1, 0, -1, 0, 1, 0, -1, 0]), 1, 'Test 89');
test(maxBalancedSubsequenceSum([0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0]), 15, 'Test 90');
test(maxBalancedSubsequenceSum([1,10,11,20,30,31,40,50,51,60]), 304, 'Test 91');
test(maxBalancedSubsequenceSum([-1, -2, -3, -4, -5, 5, 4, 3, 2, 1]), 5, 'Test 92');
test(maxBalancedSubsequenceSum([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 5, 'Test 93');
test(maxBalancedSubsequenceSum([16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), 16384, 'Test 94');
test(maxBalancedSubsequenceSum([5, 3, 8, 6, 2, 7, 4, 9, 1, 10]), 19, 'Test 95');
test(maxBalancedSubsequenceSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 96');
test(maxBalancedSubsequenceSum([-1000000000, -999999999, -999999998, -999999997, -999999996]), -999999996, 'Test 97');
test(maxBalancedSubsequenceSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 100, 'Test 98');
test(maxBalancedSubsequenceSum([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), 1000000000, 'Test 99');
test(maxBalancedSubsequenceSum([1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18]), 1, 'Test 100');
test(maxBalancedSubsequenceSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5]), 55, 'Test 101');
test(maxBalancedSubsequenceSum([1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5]), 15, 'Test 102');
test(maxBalancedSubsequenceSum([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), 1, 'Test 103');
test(maxBalancedSubsequenceSum([-1000000000, -2000000000, -3000000000, -4000000000, -5000000000, -6000000000, -7000000000, -8000000000, -9000000000, -10000000000]), -1000000000, 'Test 104');
test(maxBalancedSubsequenceSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 120, 'Test 105');
test(maxBalancedSubsequenceSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55, 'Test 106');
test(maxBalancedSubsequenceSum([1000, 900, 800, 700, 600, 500, 400, 300, 200, 100]), 1000, 'Test 107');
test(maxBalancedSubsequenceSum([1, 3, 2, 4, 6, 5, 8, 7, 10, 9]), 30, 'Test 108');
test(maxBalancedSubsequenceSum([10, 20, 30, 40, 50, -10, -20, -30, -40, -50]), 150, 'Test 109');
test(maxBalancedSubsequenceSum([-5, -5, -5, -5, -5, -5, -5, -5, -5, -5]), -5, 'Test 110');
test(maxBalancedSubsequenceSum([-1000000000, 0, 1000000000, -1000000000, 0, 1000000000, -1000000000, 0, 1000000000, -1000000000]), 1000000000, 'Test 111');
test(maxBalancedSubsequenceSum([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]), 15, 'Test 112');
test(maxBalancedSubsequenceSum([1, 100, 2, 101, 3, 102, 4, 103, 5, 104]), 109, 'Test 113');
test(maxBalancedSubsequenceSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 114');
test(maxBalancedSubsequenceSum([10, 20, 15, 25, 30, 5, 35, 40, 50, 55, 60, 65, 70, 75, 80]), 615, 'Test 115');
test(maxBalancedSubsequenceSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 116');
test(maxBalancedSubsequenceSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]), 780, 'Test 117');
test(maxBalancedSubsequenceSum([1, 10, 2, 9, 3, 8, 4, 7, 5, 6]), 11, 'Test 118');
test(maxBalancedSubsequenceSum([1000000000, 999999999, 999999998, 999999997, 999999996]), 1000000000, 'Test 119');
test(maxBalancedSubsequenceSum([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]), 15, 'Test 120');
test(maxBalancedSubsequenceSum([100, 101, 102, 103, 104, 105, 106, 107, 108, 109]), 1045, 'Test 121');
test(maxBalancedSubsequenceSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 210, 'Test 122');
test(maxBalancedSubsequenceSum([-1000000000, 1000000000, -1000000000, 1000000000, -1000000000, 1000000000]), 1000000000, 'Test 123');
test(maxBalancedSubsequenceSum([-1, -2, -3, -4, -5, 5, 4, 3, 2, 1, -1, -2, -3, -4, -5]), 5, 'Test 124');
test(maxBalancedSubsequenceSum([10, 9, 8, 8, 8, 8, 8, 7, 6, 5]), 10, 'Test 125');
test(maxBalancedSubsequenceSum([10, 1, 21, 2, 32, 3, 43, 4, 54, 5, 65, 6, 76, 7, 87, 8, 98, 9, 109, 10]), 595, 'Test 126');
test(maxBalancedSubsequenceSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 127');
test(maxBalancedSubsequenceSum([39, 37, 35, 33, 31, 29, 27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), 39, 'Test 128');
test(maxBalancedSubsequenceSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]), 10, 'Test 129');
test(maxBalancedSubsequenceSum([0, -1, 2, -2, 3, -3, 4, -4, 5, -5]), 5, 'Test 130');
test(maxBalancedSubsequenceSum([40, 35, 30, 25, 20, 15, 10, 5, 1, -5]), 40, 'Test 131');
test(maxBalancedSubsequenceSum([100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]), 2310, 'Test 132');
test(maxBalancedSubsequenceSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 400, 'Test 133');
test(maxBalancedSubsequenceSum([100, 200, 300, 400, 500, -100, -200, -300, -400, -500, 150, 250, 350, 450, 550]), 2050, 'Test 134');
test(maxBalancedSubsequenceSum([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]), 30, 'Test 135');
test(maxBalancedSubsequenceSum([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15]), -1, 'Test 136');
test(maxBalancedSubsequenceSum([1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10]), 11, 'Test 137');
test(maxBalancedSubsequenceSum([1, -1000000000, 2, -999999999, 3, -999999998, 4, -999999997, 5, -999999996]), 5, 'Test 138');
test(maxBalancedSubsequenceSum([1, 2, 3, 4, 5, -5, -4, -3, -2, -1]), 15, 'Test 139');
test(maxBalancedSubsequenceSum([1000000000, -1000000000, 1000000000, -1000000000, 1000000000, -1000000000]), 1000000000, 'Test 140');
test(maxBalancedSubsequenceSum([-5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5]), -5, 'Test 141');
test(maxBalancedSubsequenceSum([1,3,6,10,15,21,28,36,45,55,66,78,91,105,120,136,153,171,190,210]), 1540, 'Test 142');
test(maxBalancedSubsequenceSum([524288, 262144, 131072, 65536, 32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), 524288, 'Test 143');
test(maxBalancedSubsequenceSum([5, 3, 8, 6, 11, 9, 14, 12, 17, 15, 20, 18, 23, 21, 26, 24, 29, 27, 30, 25]), 165, 'Test 144');
test(maxBalancedSubsequenceSum([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100]), 100, 'Test 145');
test(maxBalancedSubsequenceSum([10, 1, 11, 2, 12, 3, 13, 4, 14, 5]), 18, 'Test 146');
test(maxBalancedSubsequenceSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 550, 'Test 147');
test(maxBalancedSubsequenceSum([0,1,1,2,3,3,4,5,5,6,7,7,8,9,9,10,11,11,12,13]), 36, 'Test 148');
test(maxBalancedSubsequenceSum([-100, -200, -300, -400, -500, -600, -700, -800, -900, -1000]), -100, 'Test 149');
test(maxBalancedSubsequenceSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 150');
test(maxBalancedSubsequenceSum([1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 1, 'Test 151');
test(maxBalancedSubsequenceSum([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 1, 'Test 152');
test(maxBalancedSubsequenceSum([10, -9, 8, -7, 6, -5, 4, -3, 2, -1]), 10, 'Test 153');
test(maxBalancedSubsequenceSum([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15]), 64, 'Test 154');
test(maxBalancedSubsequenceSum([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6]), 6, 'Test 155');
test(maxBalancedSubsequenceSum([5, 3, 5, 10, 15, 20, 25, 30, 35, 40]), 183, 'Test 156');
test(maxBalancedSubsequenceSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5]), 15, 'Test 157');
test(maxBalancedSubsequenceSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 1200, 'Test 158');
test(maxBalancedSubsequenceSum([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5]), 17, 'Test 159');

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
