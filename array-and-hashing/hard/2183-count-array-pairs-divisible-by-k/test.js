// Test: 2183. Count Array Pairs Divisible By K
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { countPairs } = require("./solution");

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

console.log("\n2183. Count Array Pairs Divisible By K\n");

test(countPairs([7,7,7,7,7], 7), 10, 'Test 1');
test(countPairs([10,20,30,40,50], 10), 10, 'Test 2');
test(countPairs([5,5,5,5], 5), 6, 'Test 3');
test(countPairs([1,2,3,4,5], 2), 7, 'Test 4');
test(countPairs([6,12,18,24], 12), 6, 'Test 5');
test(countPairs([1,3,5,7,9], 3), 7, 'Test 6');
test(countPairs([7,14,21,28,35], 7), 10, 'Test 7');
test(countPairs([2,4,6,8,10], 3), 4, 'Test 8');
test(countPairs([10,20,30,40], 10), 6, 'Test 9');
test(countPairs([5,10,15,20,25], 5), 10, 'Test 10');
test(countPairs([7,14,21,28], 7), 6, 'Test 11');
test(countPairs([1,3,5,7,9], 2), 0, 'Test 12');
test(countPairs([2,4,6,8,10], 4), 10, 'Test 13');
test(countPairs([1,2,3,4], 5), 0, 'Test 14');
test(countPairs([3,5,7,11], 1), 6, 'Test 15');
test(countPairs([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100), 45, 'Test 16');
test(countPairs([12,24,36,48,60,72,84,96,108,120,132,144,156,168,180,192,204,216,228,240], 12), 190, 'Test 17');
test(countPairs([101, 202, 303, 404, 505, 606, 707, 808, 909, 1010], 101), 45, 'Test 18');
test(countPairs([100,200,300,400,500,600], 100), 15, 'Test 19');
test(countPairs([15, 25, 35, 45, 55, 65, 75, 85, 95, 105], 5), 45, 'Test 20');
test(countPairs([13,26,39,52,65,78,91,104,117,130], 13), 45, 'Test 21');
test(countPairs([13, 26, 39, 52, 65, 78, 91, 104, 117, 130], 13), 45, 'Test 22');
test(countPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 6), 185, 'Test 23');
test(countPairs([24, 48, 72, 96, 120], 24), 10, 'Test 24');
test(countPairs([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 9), 45, 'Test 25');
test(countPairs([3, 6, 9, 12, 15, 18, 21, 24], 3), 28, 'Test 26');
test(countPairs([5,10,15,20,25,30], 5), 15, 'Test 27');
test(countPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 1), 190, 'Test 28');
test(countPairs([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 190, 'Test 29');
test(countPairs([10,20,30,40,50,60,70,80,90,100], 10), 45, 'Test 30');
test(countPairs([8, 12, 18, 24, 30, 36, 42], 6), 21, 'Test 31');
test(countPairs([10, 20, 30, 40, 50], 10), 10, 'Test 32');
test(countPairs([17, 34, 51, 68, 85, 102, 119, 136, 153, 170, 187, 204, 221, 238, 255], 17), 105, 'Test 33');
test(countPairs([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 45, 'Test 34');
test(countPairs([15, 25, 35, 45, 55], 15), 7, 'Test 35');
test(countPairs([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75], 5), 105, 'Test 36');
test(countPairs([13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143, 156, 169, 182, 195], 13), 105, 'Test 37');
test(countPairs([7, 14, 21, 28, 35, 42, 49, 56, 63, 70], 14), 35, 'Test 38');
test(countPairs([11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132], 11), 66, 'Test 39');
test(countPairs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 45, 'Test 40');
test(countPairs([11, 22, 33, 44, 55, 66, 77], 11), 21, 'Test 41');
test(countPairs([7,14,28,56,112], 14), 10, 'Test 42');
test(countPairs([9, 18, 27, 36, 45, 54, 63, 72, 81], 9), 36, 'Test 43');
test(countPairs([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991], 100000), 9, 'Test 44');
test(countPairs([100000, 50000, 25000, 12500, 6250, 3125, 1562, 781, 390, 195], 100000), 15, 'Test 45');
test(countPairs([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99], 9), 55, 'Test 46');
test(countPairs([100000, 99999, 99998, 99997, 99996], 5), 4, 'Test 47');
test(countPairs([8,16,24,32,40,48,56,64,72,80], 8), 45, 'Test 48');
test(countPairs([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 10), 17, 'Test 49');
test(countPairs([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 4), 45, 'Test 50');
test(countPairs([17, 34, 51, 68, 85, 102, 119, 136, 153, 170], 17), 45, 'Test 51');
test(countPairs([13,26,39,52,65], 13), 10, 'Test 52');
test(countPairs([6, 12, 18, 24, 30], 12), 10, 'Test 53');
test(countPairs([15, 30, 45, 60, 75, 90, 105, 120, 135, 150], 15), 45, 'Test 54');
test(countPairs([77, 154, 231, 308, 385, 462, 539, 616, 693, 770], 11), 45, 'Test 55');
test(countPairs([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36], 9), 66, 'Test 56');
test(countPairs([21, 42, 63, 84, 105, 126, 147, 168, 189, 210], 21), 45, 'Test 57');
test(countPairs([6,12,18,24,30], 6), 10, 'Test 58');
test(countPairs([101,202,303,404,505,606,707,808,909,1010], 101), 45, 'Test 59');
test(countPairs([9,18,27,36,45], 9), 10, 'Test 60');
test(countPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384], 16), 101, 'Test 61');
test(countPairs([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 5), 190, 'Test 62');
test(countPairs([21,42,63,84,105,126,147,168,189,210], 21), 45, 'Test 63');
test(countPairs([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 1), 190, 'Test 64');
test(countPairs([49,98,147,196,245,294,343,392,441,490], 49), 45, 'Test 65');
test(countPairs([11, 22, 33, 44, 55, 66, 77, 88, 99, 110], 11), 45, 'Test 66');
test(countPairs([9, 18, 27, 36, 45, 54, 63, 72, 81, 90], 9), 45, 'Test 67');
test(countPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 2), 0, 'Test 68');
test(countPairs([19, 38, 57, 76, 95, 114, 133, 152, 171, 190], 19), 45, 'Test 69');
test(countPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 3), 60, 'Test 70');
test(countPairs([100000, 50000, 25000, 12500, 6250, 3125, 1562, 781, 390, 195], 100), 32, 'Test 71');
test(countPairs([15, 30, 45, 60, 75, 90, 105], 15), 21, 'Test 72');
test(countPairs([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105], 7), 105, 'Test 73');
test(countPairs([6, 8, 10, 12, 14, 16, 18], 12), 15, 'Test 74');
test(countPairs([3,6,9,12,15,18,21], 3), 21, 'Test 75');
test(countPairs([8,16,32,64,128], 8), 10, 'Test 76');
test(countPairs([15, 30, 45, 60, 75], 15), 10, 'Test 77');
test(countPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 3), 112, 'Test 78');
test(countPairs([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108, 117, 126, 135], 9), 105, 'Test 79');
test(countPairs([6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90], 6), 105, 'Test 80');
test(countPairs([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60], 5), 66, 'Test 81');
test(countPairs([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 3), 45, 'Test 82');
test(countPairs([15,30,45,60,75,90,105,120,135,150], 15), 45, 'Test 83');
test(countPairs([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50], 2), 300, 'Test 84');
test(countPairs([15, 25, 35, 45, 55], 5), 10, 'Test 85');
test(countPairs([6, 12, 18, 24, 30, 36], 12), 15, 'Test 86');
test(countPairs([9,18,27,36,45,54,63,72,81,90], 9), 45, 'Test 87');
test(countPairs([7, 14, 21, 28, 35, 42, 49, 56, 63, 70], 7), 45, 'Test 88');
test(countPairs([11,22,33,44,55], 11), 10, 'Test 89');
test(countPairs([8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120], 8), 105, 'Test 90');
test(countPairs([13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143, 156, 169, 182, 195, 208, 221, 234, 247, 260], 13), 190, 'Test 91');
test(countPairs([3,6,9,12,15,18,21,24,27,30], 3), 45, 'Test 92');
test(countPairs([23, 46, 69, 92, 115, 138, 161, 184, 207, 230], 23), 45, 'Test 93');
test(countPairs([100000, 200000, 300000, 400000, 500000], 100000), 10, 'Test 94');
test(countPairs([8, 16, 24, 32, 40, 48, 56, 64], 16), 28, 'Test 95');
test(countPairs([25, 50, 75, 100, 125, 150], 25), 15, 'Test 96');
test(countPairs([97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116], 11), 37, 'Test 97');
test(countPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 3), 34, 'Test 98');
test(countPairs([100000, 50000, 25000, 12500, 6250, 3125, 1562, 781, 390, 195], 5), 44, 'Test 99');
test(countPairs([10, 20, 30, 40, 50], 20), 10, 'Test 100');
test(countPairs([11,22,33,44,55,66,77,88,99,110], 11), 45, 'Test 101');
test(countPairs([8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96], 8), 66, 'Test 102');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

