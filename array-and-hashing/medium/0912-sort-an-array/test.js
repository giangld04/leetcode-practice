// Test: 912. Sort An Array
// 122 test cases from LeetCodeDataset
// Run: node test.js

const { sortArray } = require("./solution");

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

console.log("\n912. Sort An Array\n");

test(sortArray([-4,-2,-3,-1]), Error: name 'randint' is not defined, 'Test 1');
test(sortArray([5, -1, 3, -2, 4, 0]), Error: name 'randint' is not defined, 'Test 2');
test(sortArray([5,-3,2,7,1,-8,4,-2,6,0]), Error: name 'randint' is not defined, 'Test 3');
test(sortArray([1,3,5,7,9,2,4,6,8,0]), Error: name 'randint' is not defined, 'Test 4');
test(sortArray([1, 2, 3, 4, 5]), Error: name 'randint' is not defined, 'Test 5');
test(sortArray([10,9,8,7,6,5,4,3,2,1]), Error: name 'randint' is not defined, 'Test 6');
test(sortArray([3,3,3,3,3,3]), Error: name 'randint' is not defined, 'Test 7');
test(sortArray([-5,0,5,-1,1]), Error: name 'randint' is not defined, 'Test 8');
test(sortArray([-5,3,-2,10,0]), Error: name 'randint' is not defined, 'Test 9');
test(sortArray([10000, -10000, 5000, -5000, 0]), Error: name 'randint' is not defined, 'Test 10');
test(sortArray([-1,-2,-3,-4,-5]), Error: name 'randint' is not defined, 'Test 11');
test(sortArray([0,0,0,0,0]), Error: name 'randint' is not defined, 'Test 12');
test(sortArray([1,2,3,4,5]), Error: name 'randint' is not defined, 'Test 13');
test(sortArray([5,1,1,2,0,0]), Error: name 'randint' is not defined, 'Test 14');
test(sortArray([3, 3, 3, 3, 3]), Error: name 'randint' is not defined, 'Test 15');
test(sortArray([0]), [0], 'Test 16');
test(sortArray([10000,-10000,5000,-5000,0]), Error: name 'randint' is not defined, 'Test 17');
test(sortArray([5,4,3,2,1]), Error: name 'randint' is not defined, 'Test 18');
test(sortArray([10000,-10000,0,5000,-5000]), Error: name 'randint' is not defined, 'Test 19');
test(sortArray([100,99,98,97,96,95,94,93,92,91]), Error: name 'randint' is not defined, 'Test 20');
test(sortArray([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), Error: name 'randint' is not defined, 'Test 21');
test(sortArray([3,3,3,3,3,3,3,3]), Error: name 'randint' is not defined, 'Test 22');
test(sortArray([5,2,3,1]), Error: name 'randint' is not defined, 'Test 23');
test(sortArray([-5, -4, -3, -2, -1]), Error: name 'randint' is not defined, 'Test 24');
test(sortArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]), Error: name 'randint' is not defined, 'Test 25');
test(sortArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]), Error: name 'randint' is not defined, 'Test 26');
test(sortArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20]), Error: name 'randint' is not defined, 'Test 27');
test(sortArray([99999, -99999, 50000, -50000, 25000, -25000, 1, -1, 0]), Error: name 'randint' is not defined, 'Test 28');
test(sortArray([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20]), Error: name 'randint' is not defined, 'Test 29');
test(sortArray([50000, -50000, 25000, -25000, 12500, -12500, 6250, -6250, 3125, -3125]), Error: name 'randint' is not defined, 'Test 30');
test(sortArray([10000, 5000, 2500, 1250, 625, 312, 156, 78, 39, 19, 9, 4, 2, 1, 0, -1, -2, -4, -8, -16, -32, -64, -128, -256, -512, -1024, -2048, -4096, -8192, -16384, -32768]), Error: name 'randint' is not defined, 'Test 31');
test(sortArray([-10000, -10000, -10000, -10000, -10000, -10000, -10000, -10000, -10000, -10000]), Error: name 'randint' is not defined, 'Test 32');
test(sortArray([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3]), Error: name 'randint' is not defined, 'Test 33');
test(sortArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), Error: name 'randint' is not defined, 'Test 34');
test(sortArray([50000, 40000, 30000, 20000, 10000, 0, -10000, -20000, -30000, -40000, -50000]), Error: name 'randint' is not defined, 'Test 35');
test(sortArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]), Error: name 'randint' is not defined, 'Test 36');
test(sortArray([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), Error: name 'randint' is not defined, 'Test 37');
test(sortArray([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), Error: name 'randint' is not defined, 'Test 38');
test(sortArray([0, -1, 1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6, -7, 7, -8, 8, -9, 9, 10]), Error: name 'randint' is not defined, 'Test 39');
test(sortArray([5, 2, 3, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), Error: name 'randint' is not defined, 'Test 40');
test(sortArray([-50000, -40000, -30000, -20000, -10000, 0, 10000, 20000, 30000, 40000, 50000, -1, 1, -2, 2, -3, 3, -4, 4, -5, 5]), Error: name 'randint' is not defined, 'Test 41');
test(sortArray([50000, 25000, 12500, 6250, 3125, 1562, 781, 390, 195, 97, 48, 24, 12, 6, 3, 1, -1, -3, -6, -12, -24, -48, -97, -195, -390, -781, -1562, -3125, -6250, -12500, -25000, -50000]), Error: name 'randint' is not defined, 'Test 42');
test(sortArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Error: name 'randint' is not defined, 'Test 43');
test(sortArray([50000, 49999, 49998, 49997, 49996, 49995, 49994, 49993, 49992, 49991]), Error: name 'randint' is not defined, 'Test 44');
test(sortArray([10000, 9999, 9998, 9997, 9996, 9995, 9994, 9993, 9992, 9991]), Error: name 'randint' is not defined, 'Test 45');
test(sortArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), Error: name 'randint' is not defined, 'Test 46');
test(sortArray([100000, -100000, 50000, -50000, 25000, -25000]), Error: name 'randint' is not defined, 'Test 47');
test(sortArray([10000, -10000, 5000, -5000, 0, 2500, -2500]), Error: name 'randint' is not defined, 'Test 48');
test(sortArray([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), Error: name 'randint' is not defined, 'Test 49');
test(sortArray([30, 28, 26, 24, 22, 20, 18, 16, 14, 12, 10, 8, 6, 4, 2]), Error: name 'randint' is not defined, 'Test 50');
test(sortArray([9999, -9999, 9998, -9998, 9997, -9997, 9996, -9996, 9995, -9995]), Error: name 'randint' is not defined, 'Test 51');
test(sortArray([3, -1, 2, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10]), Error: name 'randint' is not defined, 'Test 52');
test(sortArray([50000, 49999, 49998, 49997, 49996, 49995, 49994, 49993, 49992, 49991, 49990, 49989, 49988, 49987, 49986, 49985, 49984, 49983, 49982, 49981]), Error: name 'randint' is not defined, 'Test 53');
test(sortArray([100000, -100000, 50000, -50000, 0, 25000, -25000]), Error: name 'randint' is not defined, 'Test 54');
test(sortArray([-1]), [-1], 'Test 55');
test(sortArray([1, 3, 2, 4, 6, 5, 8, 7, 10, 9, 12, 11, 14, 13, 16, 15]), Error: name 'randint' is not defined, 'Test 56');
test(sortArray([50000]), [50000], 'Test 57');
test(sortArray([1, 3, 2, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), Error: name 'randint' is not defined, 'Test 58');
test(sortArray([10, -10, 20, -20, 30, -30, 40, -40, 50, -50]), Error: name 'randint' is not defined, 'Test 59');
test(sortArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), Error: name 'randint' is not defined, 'Test 60');
test(sortArray([5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000]), Error: name 'randint' is not defined, 'Test 61');
test(sortArray([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), Error: name 'randint' is not defined, 'Test 62');
test(sortArray([-1, -3, -2, -4, -6, -5, -8, -7, -10, -9, -12, -11, -14, -13, -16, -15]), Error: name 'randint' is not defined, 'Test 63');
test(sortArray([10000, -10000, 5000, -5000, 2500, -2500, 0, 1, -1]), Error: name 'randint' is not defined, 'Test 64');
test(sortArray([50000, -50000, 40000, -40000, 30000, -30000, 20000, -20000, 10000, -10000, 0]), Error: name 'randint' is not defined, 'Test 65');
test(sortArray([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]), Error: name 'randint' is not defined, 'Test 66');
test(sortArray([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), Error: name 'randint' is not defined, 'Test 67');
test(sortArray([10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000]), Error: name 'randint' is not defined, 'Test 68');
test(sortArray([-50000, -40000, -30000, -20000, -10000, 0, 10000, 20000, 30000, 40000, 50000, -49999, -49998, -49997, -49996, -49995, -49994, -49993, -49992, -49991]), Error: name 'randint' is not defined, 'Test 69');
test(sortArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), Error: name 'randint' is not defined, 'Test 70');
test(sortArray([2, 1, 4, 3, 6, 5, 8, 7, 10, 9, 12, 11, 14, 13, 16, 15, 18, 17, 20, 19, 22, 21, 24, 23, 26, 25, 28, 27, 30, 29, 32, 31, 34, 33, 36, 35, 38, 37, 40, 39, 42, 41, 44, 43, 46, 45, 48, 47, 50, 49, 52, 51, 54, 53, 56, 55, 58, 57, 60, 59, 62, 61, 64, 63, 66, 65, 68, 67, 70, 69, 72, 71, 74, 73, 76, 75, 78, 77, 80, 79, 82, 81, 84, 83, 86, 85, 88, 87, 90, 89, 92, 91, 94, 93, 96, 95, 98, 97, 100, 99]), Error: name 'randint' is not defined, 'Test 71');
test(sortArray([50000, 49999, 49998, 49997, 49996, 49995]), Error: name 'randint' is not defined, 'Test 72');
test(sortArray([2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), Error: name 'randint' is not defined, 'Test 73');
test(sortArray([-50000]), [-50000], 'Test 74');
test(sortArray([100000, -100000, 50000, -50000, 0, 1, -1]), Error: name 'randint' is not defined, 'Test 75');
test(sortArray([50000, 50000, 50000, 50000, 50000, -50000, -50000, -50000, -50000, -50000]), Error: name 'randint' is not defined, 'Test 76');
test(sortArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), Error: name 'randint' is not defined, 'Test 77');
test(sortArray([10000, 20000, 30000, 40000, 50000, -10000, -20000, -30000, -40000, -50000]), Error: name 'randint' is not defined, 'Test 78');
test(sortArray([50000, 40000, 30000, 20000, 10000, 0, -10000, -20000, -30000, -40000, -50000, 49999, 49998, 49997, 49996, 49995, 49994, 49993, 49992, 49991]), Error: name 'randint' is not defined, 'Test 79');
test(sortArray([5, 3, 1, 2, 4, 6, 8, 7, 10, 9, 11, 13, 12, 15, 14, 17, 16, 19, 18, 20]), Error: name 'randint' is not defined, 'Test 80');
test(sortArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), Error: name 'randint' is not defined, 'Test 81');
test(sortArray([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), Error: name 'randint' is not defined, 'Test 82');
test(sortArray([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10]), Error: name 'randint' is not defined, 'Test 83');
test(sortArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), Error: name 'randint' is not defined, 'Test 84');
test(sortArray([42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42]), Error: name 'randint' is not defined, 'Test 85');
test(sortArray([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000]), Error: name 'randint' is not defined, 'Test 86');
test(sortArray([3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1]), Error: name 'randint' is not defined, 'Test 87');
test(sortArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Error: name 'randint' is not defined, 'Test 88');
test(sortArray([31, 29, 27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), Error: name 'randint' is not defined, 'Test 89');
test(sortArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Error: name 'randint' is not defined, 'Test 90');
test(sortArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Error: name 'randint' is not defined, 'Test 91');
test(sortArray([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8]), Error: name 'randint' is not defined, 'Test 92');
test(sortArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Error: name 'randint' is not defined, 'Test 93');
test(sortArray([50000, 49999, 49998, 49997, 49996, 49995, 49994, 49993, 49992, 49991, 49990, 49989, 49988, 49987, 49986]), Error: name 'randint' is not defined, 'Test 94');
test(sortArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, -100, -99, -98, -97, -96, -95, -94, -93, -92, -91, -90, -89, -88, -87, -86, -85, -84, -83, -82, -81, -80, -79, -78, -77, -76, -75, -74, -73, -72, -71, -70, -69, -68, -67, -66, -65, -64, -63, -62, -61, -60, -59, -58, -57, -56, -55, -54, -53, -52, -51, -50, -49, -48, -47, -46, -45, -44, -43, -42, -41, -40, -39, -38, -37, -36, -35, -34, -33, -32, -31, -30, -29, -28, -27, -26, -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1]), Error: name 'randint' is not defined, 'Test 95');
test(sortArray([10000, -10000, 20000, -20000, 0, 5000, -5000]), Error: name 'randint' is not defined, 'Test 96');
test(sortArray([-50000, -40000, -30000, -20000, -10000, 0, 10000, 20000, 30000, 40000, 50000, -50000, -40000, -30000, -20000, -10000, 0, 10000, 20000, 30000, 40000, 50000]), Error: name 'randint' is not defined, 'Test 97');
test(sortArray([5, -2, 3, 5, -2, 3, 5, -2, 3, 5, -2, 3, 5, -2, 3, 5, -2, 3, 5, -2, 3, 5, -2, 3, 5, -2, 3, 5, -2, 3]), Error: name 'randint' is not defined, 'Test 98');
test(sortArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), Error: name 'randint' is not defined, 'Test 99');
test(sortArray([1000, 500, 250, 125, 62, 31, 15, 7, 3, 1, 0, -1, -3, -7, -15, -31, -62, -125, -250, -500, -1000]), Error: name 'randint' is not defined, 'Test 100');
test(sortArray([10000, -10000, 25000, -25000, 0, 0, 5000, -5000]), Error: name 'randint' is not defined, 'Test 101');
test(sortArray([-1000, -900, -800, -700, -600, -500, -400, -300, -200, -100, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), Error: name 'randint' is not defined, 'Test 102');
test(sortArray([5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]), Error: name 'randint' is not defined, 'Test 103');
test(sortArray([100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), Error: name 'randint' is not defined, 'Test 104');
test(sortArray([-1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]), Error: name 'randint' is not defined, 'Test 105');
test(sortArray([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]), Error: name 'randint' is not defined, 'Test 106');
test(sortArray([1]), [1], 'Test 107');
test(sortArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), Error: name 'randint' is not defined, 'Test 108');
test(sortArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), Error: name 'randint' is not defined, 'Test 109');
test(sortArray([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), Error: name 'randint' is not defined, 'Test 110');
test(sortArray([-1, -2, -3, -4, -5, 0, 1, 2, 3, 4, 5]), Error: name 'randint' is not defined, 'Test 111');
test(sortArray([0, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10]), Error: name 'randint' is not defined, 'Test 112');
test(sortArray([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), Error: name 'randint' is not defined, 'Test 113');
test(sortArray([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), Error: name 'randint' is not defined, 'Test 114');
test(sortArray([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, -1, -1, -1, -2, -2, -2, -3, -3, -3, -4, -4, -4, -5, -5, -5]), Error: name 'randint' is not defined, 'Test 115');
test(sortArray([1, 3, 2, 4, 6, 5, 7, 9, 8, 10, 12, 11, 14, 13, 16, 15, 18, 17, 20, 19]), Error: name 'randint' is not defined, 'Test 116');
test(sortArray([100, -100, 50, -50, 25, -25, 0, 0, 25, -25]), Error: name 'randint' is not defined, 'Test 117');
test(sortArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), Error: name 'randint' is not defined, 'Test 118');
test(sortArray([-50000, -49999, -49998, -49997, -49996, -49995]), Error: name 'randint' is not defined, 'Test 119');
test(sortArray([-50000, -49999, -49998, -49997, -49996, -49995, -49994, -49993, -49992, -49991, -49990, -49989, -49988, -49987, -49986, -49985, -49984, -49983, -49982, -49981]), Error: name 'randint' is not defined, 'Test 120');
test(sortArray([5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000]), Error: name 'randint' is not defined, 'Test 121');
test(sortArray([-50000, -49999, -49998, -49997, -49996, -49995, -49994, -49993, -49992, -49991, -49990, -49989, -49988, -49987, -49986]), Error: name 'randint' is not defined, 'Test 122');

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
