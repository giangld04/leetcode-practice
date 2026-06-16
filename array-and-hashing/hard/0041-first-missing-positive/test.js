// Test: 41. First Missing Positive
// 126 test cases from LeetCodeDataset
// Run: node test.js

const { firstMissingPositive } = require("./solution");

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

console.log("\n41. First Missing Positive\n");

test(firstMissingPositive([1000000, -1000000, 500000]), 1, 'Test 1');
test(firstMissingPositive([1000000, -1000000, 1]), 2, 'Test 2');
test(firstMissingPositive([1,1,1,1]), 2, 'Test 3');
test(firstMissingPositive([1,1,2,2]), 3, 'Test 4');
test(firstMissingPositive([2147483647, 1, 2, 0]), 3, 'Test 5');
test(firstMissingPositive([-1,-2,-3]), 1, 'Test 6');
test(firstMissingPositive([1,2,3,4,5,6,7,8,9,10]), 11, 'Test 7');
test(firstMissingPositive([1]), 2, 'Test 8');
test(firstMissingPositive([2]), 1, 'Test 9');
test(firstMissingPositive([7,8,9,11,12]), 1, 'Test 10');
test(firstMissingPositive([0,-1,-2]), 1, 'Test 11');
test(firstMissingPositive([1,3,2]), 4, 'Test 12');
test(firstMissingPositive([1,1,1,1,1,1,1,1,1,1]), 2, 'Test 13');
test(firstMissingPositive([]), 1, 'Test 14');
test(firstMissingPositive([0]), 1, 'Test 15');
test(firstMissingPositive([2147483647,-2147483648,0]), 1, 'Test 16');
test(firstMissingPositive([0,-1,-2,-3]), 1, 'Test 17');
test(firstMissingPositive([1000000, -1000000, 0]), 1, 'Test 18');
test(firstMissingPositive([1,2,3]), 4, 'Test 19');
test(firstMissingPositive([3,4,-1,1]), 2, 'Test 20');
test(firstMissingPositive([1000000,1000001,1000002]), 1, 'Test 21');
test(firstMissingPositive([2,2]), 1, 'Test 22');
test(firstMissingPositive([1,2,0]), 3, 'Test 23');
test(firstMissingPositive([2, 3, 4, 5, 6, 7, 8, 9, 10, 1, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 11, 'Test 24');
test(firstMissingPositive([7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 1, 'Test 25');
test(firstMissingPositive([2, 2, 3, 1, 2, 2, 3, 1, 2, 2, 3, 1, 2, 2, 3, 1]), 4, 'Test 26');
test(firstMissingPositive([-10, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 11, 'Test 27');
test(firstMissingPositive([3, 4, -1, 1, 2, 5]), 6, 'Test 28');
test(firstMissingPositive([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20]), 1, 'Test 29');
test(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25]), 21, 'Test 30');
test(firstMissingPositive([2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 1]), 11, 'Test 31');
test(firstMissingPositive([100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000]), 1, 'Test 32');
test(firstMissingPositive([3, 1, -1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 20, 'Test 33');
test(firstMissingPositive([2147483647, -2147483648, 0, 1, 2, 3, 4, 5]), 6, 'Test 34');
test(firstMissingPositive([5, 3, 5, 2, 3, 3, 9, 0, 123, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11, 'Test 35');
test(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]), 101, 'Test 36');
test(firstMissingPositive([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 21, 'Test 37');
test(firstMissingPositive([1, 2, 0, 4, 6, 3, 8, 5, 7]), 9, 'Test 38');
test(firstMissingPositive([2, 3, 1, -1, -2, -3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 21, 'Test 39');
test(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 0, -1, -2, -3, -4, -5]), 21, 'Test 40');
test(firstMissingPositive([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 1, 'Test 41');
test(firstMissingPositive([1, 2, 0, 5, 3, 7, 8, 9, 4, 6]), 10, 'Test 42');
test(firstMissingPositive([5, 3, 2, 1, 4, 6, 8, 7, 10, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]), 41, 'Test 43');
test(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 0]), 30, 'Test 44');
test(firstMissingPositive([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 11, 'Test 45');
test(firstMissingPositive([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 20, 'Test 46');
test(firstMissingPositive([-10, -20, -30, -40, -50, 100, 200, 300, 400, 500]), 1, 'Test 47');
test(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]), 11, 'Test 48');
test(firstMissingPositive([-5, -4, -3, -2, -1]), 1, 'Test 49');
test(firstMissingPositive([100000, 100001, 100002, 100003, 100004, 100005, 100006, 100007, 100008, 100009, 100010, 100011, 100012, 100013, 100014, 100015, 100016, 100017, 100018, 100019]), 1, 'Test 50');
test(firstMissingPositive([2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 1, 'Test 51');
test(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22]), 21, 'Test 52');
test(firstMissingPositive([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]), 1, 'Test 53');
test(firstMissingPositive([2, 3, -7, 6, 8, 1, -10, 15]), 4, 'Test 54');
test(firstMissingPositive([1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 3, 'Test 55');
test(firstMissingPositive([0, 2, 2, 1, 3, 5, 4]), 6, 'Test 56');
test(firstMissingPositive([0, -1, -2, -3, -4, -5, -6, -7, -8, -9]), 1, 'Test 57');
test(firstMissingPositive([1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), 3, 'Test 58');
test(firstMissingPositive([3,4,-1,1,5,2]), 6, 'Test 59');
test(firstMissingPositive([3, 2, 1, 5, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 31, 'Test 60');
test(firstMissingPositive([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 2, 'Test 61');
test(firstMissingPositive([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991]), 1, 'Test 62');
test(firstMissingPositive([0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 1, 'Test 63');
test(firstMissingPositive([5, 3, 1, 2, 4, 6, 8, 7, 10, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 31, 'Test 64');
test(firstMissingPositive([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 1, 'Test 65');
test(firstMissingPositive([100000, 100001, 100002, 100003, 100004, 100005, 100006, 100007, 100008, 100009, 1]), 2, 'Test 66');
test(firstMissingPositive([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 1, 'Test 67');
test(firstMissingPositive([100000, 100001, 100002, 100003, 100004, 100005, 100006, 100007, 100008, 100009, -1]), 1, 'Test 68');
test(firstMissingPositive([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]), 7, 'Test 69');
test(firstMissingPositive([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4]), 11, 'Test 70');
test(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30]), 22, 'Test 71');
test(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 26, 'Test 72');
test(firstMissingPositive([1000000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]), 11, 'Test 73');
test(firstMissingPositive([-100000, -99999, -99998, -99997, -99996, -99995, -99994, -99993, -99992, -99991, -99990, -99989, -99988, -99987, -99986, -99985, -99984, -99983, -99982, -99981]), 1, 'Test 74');
test(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]), 41, 'Test 75');
test(firstMissingPositive([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]), 1, 'Test 76');
test(firstMissingPositive([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 11, 'Test 77');
test(firstMissingPositive([5, 3, 4, 1, 2, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 6, 'Test 78');
test(firstMissingPositive([3, 4, -1, 1, 5, 6, 2]), 7, 'Test 79');
test(firstMissingPositive([5, 3, 1, 2, 4, 6, 8, 7, 9, 11, 10, 13, 12, 14, 15, 16, 17, 18, 19, 20]), 21, 'Test 80');
test(firstMissingPositive([10000, 10001, 10002, 10003, 10004, 10005, 10006, 10007, 10008, 10009]), 1, 'Test 81');
test(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 31, 'Test 82');
test(firstMissingPositive([2147483647, -2147483648, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 10, 'Test 83');
test(firstMissingPositive([1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 21, 'Test 84');
test(firstMissingPositive([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 11, 'Test 85');
test(firstMissingPositive([1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 4, 'Test 86');
test(firstMissingPositive([2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]), 1, 'Test 87');
test(firstMissingPositive([3, 4, -1, 1, 5, 2, 7, 8, 9, 10]), 6, 'Test 88');
test(firstMissingPositive([100, 4, 200, 1, 3, 2]), 5, 'Test 89');
test(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 16, 'Test 90');
test(firstMissingPositive([0, 10, 20, 30, 40, 50, 60, 70, 80, 90]), 1, 'Test 91');
test(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32]), 31, 'Test 92');
test(firstMissingPositive([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11, 'Test 93');
test(firstMissingPositive([2147483647, -2147483648, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11, 'Test 94');
test(firstMissingPositive([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200]), 1, 'Test 95');
test(firstMissingPositive([100000, 100001, 100002, 100003, 100004, 100005, 100006, 100007, 100008, 100009, 100010]), 1, 'Test 96');
test(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, -1, -2, -3]), 11, 'Test 97');
test(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 21, 'Test 98');
test(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]), 10, 'Test 99');
test(firstMissingPositive([2, 3, 4, 5, 6, 7, 8, 9, 10]), 1, 'Test 100');
test(firstMissingPositive([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]), 1, 'Test 101');
test(firstMissingPositive([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 2, 'Test 102');
test(firstMissingPositive([5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]), 6, 'Test 103');
test(firstMissingPositive([1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 3, 'Test 104');
test(firstMissingPositive([5, 3, 1, 4, 2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 21, 'Test 105');
test(firstMissingPositive([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 2, 'Test 106');
test(firstMissingPositive([1, 2, 0, 0, 0, 0, 0]), 3, 'Test 107');
test(firstMissingPositive([3, 5, -2, 1, 4, 2, 3, 6]), 7, 'Test 108');
test(firstMissingPositive([1, 2, 0, 4, 5, 6, 7, 8, 9, 10]), 3, 'Test 109');
test(firstMissingPositive([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 1, 'Test 110');
test(firstMissingPositive([21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]), 1, 'Test 111');
test(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21]), 20, 'Test 112');
test(firstMissingPositive([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 1, 'Test 113');
test(firstMissingPositive([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 1, 'Test 114');
test(firstMissingPositive([2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 1, 'Test 115');
test(firstMissingPositive([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), 6, 'Test 116');
test(firstMissingPositive([1, 1, 1, 1, 1, 1]), 2, 'Test 117');
test(firstMissingPositive([0, 0, 0, 0, 0, 0]), 1, 'Test 118');
test(firstMissingPositive([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 2, 'Test 119');
test(firstMissingPositive([0, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11, 'Test 120');
test(firstMissingPositive([1, 1000000, 2, 999999, 3, 999998, 4, 999997, 5, 999996, 6, 999995, 7, 999994, 8, 999993, 9, 999992, 10, 999991, 11, 999990, 12, 999989, 13, 999988, 14, 999987, 15, 999986, 16, 999985, 17, 999984, 18, 999983, 19, 999982, 20, 999981, 21, 999980, 22, 999979, 23, 999978, 24, 999977, 25, 999976, 26, 999975, 27, 999974, 28, 999973, 29, 999972, 30, 999971, 31, 999970, 32, 999969, 33, 999968, 34, 999967, 35, 999966, 36, 999965, 37, 999964, 38, 999963, 39, 999962, 40, 999961, 41, 999960, 42, 999959, 43, 999958, 44, 999957, 45, 999956, 46, 999955, 47, 999954, 48, 999953, 49, 999952, 50, 999951]), 51, 'Test 121');
test(firstMissingPositive([3, 5, -7, 1, 2, 4, 6, 8, 9, 10]), 7, 'Test 122');
test(firstMissingPositive([21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11, 'Test 123');
test(firstMissingPositive([5, 1, 4, 3, 2]), 6, 'Test 124');
test(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, -1, -2, -3, -4, -5]), 11, 'Test 125');
test(firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0, -1, -2, -3, -4, -5]), 16, 'Test 126');

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
