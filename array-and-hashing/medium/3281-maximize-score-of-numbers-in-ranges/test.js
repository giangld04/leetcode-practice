// Test: 3281. Maximize Score Of Numbers In Ranges
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { maxPossibleScore } = require("./solution");

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

console.log("\n3281. Maximize Score Of Numbers In Ranges\n");

test(maxPossibleScore([5,10,15,20,25], 4), 6, 'Test 1');
test(maxPossibleScore([1,10,20,30], 9), 12, 'Test 2');
test(maxPossibleScore([10,20,30,40,50], 15), 13, 'Test 3');
test(maxPossibleScore([100,200,300,400,500], 50), 112, 'Test 4');
test(maxPossibleScore([2,6,13,13], 5), 5, 'Test 5');
test(maxPossibleScore([1,1,1,1], 10), 3, 'Test 6');
test(maxPossibleScore([5,5,5,5,5], 0), 0, 'Test 7');
test(maxPossibleScore([10,20,30,40,50,60], 15), 13, 'Test 8');
test(maxPossibleScore([1,2,3,4,5], 1), 1, 'Test 9');
test(maxPossibleScore([1,5,9,14], 3), 5, 'Test 10');
test(maxPossibleScore([0,1,2,3,4,5,6,7,8,9], 1), 1, 'Test 11');
test(maxPossibleScore([0,1000000000], 999999999), 1999999999, 'Test 12');
test(maxPossibleScore([6,0,3], 2), 4, 'Test 13');
test(maxPossibleScore([1,3,5,7,9], 2), 2, 'Test 14');
test(maxPossibleScore([100,200,300,400], 50), 116, 'Test 15');
test(maxPossibleScore([0,0,0,0], 10), 3, 'Test 16');
test(maxPossibleScore([1,1,1], 10), 5, 'Test 17');
test(maxPossibleScore([0,1000000000], 1000000000), 2000000000, 'Test 18');
test(maxPossibleScore([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0), 1, 'Test 19');
test(maxPossibleScore([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 2), 1, 'Test 20');
test(maxPossibleScore([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 50), 105, 'Test 21');
test(maxPossibleScore([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100), 111, 'Test 22');
test(maxPossibleScore([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 1), 2, 'Test 23');
test(maxPossibleScore([1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 1), 0, 'Test 24');
test(maxPossibleScore([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190], 10), 10, 'Test 25');
test(maxPossibleScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1), 0, 'Test 26');
test(maxPossibleScore([10, 25, 40, 55, 70, 85, 100, 115, 130, 145, 160, 175, 190, 205, 220, 235, 250, 265, 280, 295], 15), 15, 'Test 27');
test(maxPossibleScore([0, 1000000000, 500000000, 750000000, 250000000], 1000000000), 500000000, 'Test 28');
test(maxPossibleScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 100), 7, 'Test 29');
test(maxPossibleScore([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384], 1), 2, 'Test 30');
test(maxPossibleScore([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 5), 5, 'Test 31');
test(maxPossibleScore([0, 1000000000, 2000000000, 3000000000, 4000000000, 5000000000], 1000000000), 1200000000, 'Test 32');
test(maxPossibleScore([100, 200, 300, 400, 500, 600, 700], 50), 108, 'Test 33');
test(maxPossibleScore([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500], 10), 100, 'Test 34');
test(maxPossibleScore([1, 3, 6, 10, 15, 21, 28, 36, 45, 55], 1), 3, 'Test 35');
test(maxPossibleScore([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 1), 1, 'Test 36');
test(maxPossibleScore([1, 1000000000, 2, 1000000001, 3, 1000000002], 100000000), 50000001, 'Test 37');
test(maxPossibleScore([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 1), 2, 'Test 38');
test(maxPossibleScore([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000], 100), 105, 'Test 39');
test(maxPossibleScore([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 1), 10, 'Test 40');
test(maxPossibleScore([0, 10, 20, 30, 40, 50, 60, 70, 80, 90], 10), 11, 'Test 41');
test(maxPossibleScore([0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105], 1), 2, 'Test 42');
test(maxPossibleScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1000000000), 52631578, 'Test 43');
test(maxPossibleScore([0, 0, 0, 0, 0, 0], 50), 10, 'Test 44');
test(maxPossibleScore([1000000000, 2000000000, 3000000000], 1000000000), 1500000000, 'Test 45');
test(maxPossibleScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 1), 1, 'Test 46');
test(maxPossibleScore([1000000000, 2000000000, 3000000000, 4000000000, 5000000000, 6000000000], 1000000000), 1200000000, 'Test 47');
test(maxPossibleScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100), 11, 'Test 48');
test(maxPossibleScore([500000000, 1000000000, 1500000000, 2000000000, 2500000000, 3000000000, 3500000000, 4000000000, 4500000000, 5000000000], 500000000), 555555555, 'Test 49');
test(maxPossibleScore([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 1000000000), 137499999, 'Test 50');
test(maxPossibleScore([1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190, 210, 231, 253, 276, 300, 325], 1), 3, 'Test 51');
test(maxPossibleScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1000000000), 111111111, 'Test 52');
test(maxPossibleScore([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 9), 10, 'Test 53');
test(maxPossibleScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1000000000), 111111111, 'Test 54');
test(maxPossibleScore([1000000000, 999999900, 999999800, 999999700, 999999600, 999999500], 50), 110, 'Test 55');
test(maxPossibleScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 11, 'Test 56');
test(maxPossibleScore([1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 0), 0, 'Test 57');
test(maxPossibleScore([1000000000, 2000000000, 3000000000, 4000000000, 5000000000], 1000000000), 1250000000, 'Test 58');
test(maxPossibleScore([1, 10, 100, 1000, 10000], 999), 549, 'Test 59');
test(maxPossibleScore([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], 2), 1, 'Test 60');
test(maxPossibleScore([1, 5, 10, 20, 25, 30], 10), 7, 'Test 61');
test(maxPossibleScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 5), 10, 'Test 62');
test(maxPossibleScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1), 0, 'Test 63');
test(maxPossibleScore([5, 11, 17, 23, 29, 35, 41, 47, 53, 59, 65, 71, 77, 83, 89, 95, 101, 107, 113, 119, 125, 131, 137, 143, 149, 155, 161, 167, 173, 179, 185, 191, 197, 203, 209, 215, 221, 227, 233, 239, 245, 251, 257, 263, 269, 275, 281, 287, 293, 299], 6), 6, 'Test 64');
test(maxPossibleScore([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9), 2, 'Test 65');
test(maxPossibleScore([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125], 10), 10, 'Test 66');
test(maxPossibleScore([2, 6, 10, 14, 18, 22, 26, 30, 34, 38], 3), 4, 'Test 67');
test(maxPossibleScore([1, 5, 9, 13, 17, 21], 3), 4, 'Test 68');
test(maxPossibleScore([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 15), 11, 'Test 69');
test(maxPossibleScore([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 2), 2, 'Test 70');
test(maxPossibleScore([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 10), 5, 'Test 71');
test(maxPossibleScore([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40], 2), 2, 'Test 72');
test(maxPossibleScore([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 10), 11, 'Test 73');
test(maxPossibleScore([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99], 2), 2, 'Test 74');
test(maxPossibleScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 100), 11, 'Test 75');
test(maxPossibleScore([1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000], 100000), 1011111, 'Test 76');
test(maxPossibleScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 10), 10, 'Test 77');
test(maxPossibleScore([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49], 4), 4, 'Test 78');
test(maxPossibleScore([5, 15, 25, 35, 45, 55, 65], 20), 13, 'Test 79');
test(maxPossibleScore([1, 5, 10, 20, 30, 40, 50, 60, 70, 80], 10), 9, 'Test 80');
test(maxPossibleScore([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 1), 2, 'Test 81');
test(maxPossibleScore([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57], 3), 4, 'Test 82');
test(maxPossibleScore([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500], 50), 103, 'Test 83');
test(maxPossibleScore([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 0), 0, 'Test 84');
test(maxPossibleScore([0,1000000000,2000000000,3000000000], 999999999), 1333333333, 'Test 85');
test(maxPossibleScore([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 1), 2, 'Test 86');
test(maxPossibleScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 10), 10, 'Test 87');
test(maxPossibleScore([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 1000000000), 52631578, 'Test 88');
test(maxPossibleScore([1, 5, 9, 13, 17, 21], 4), 4, 'Test 89');
test(maxPossibleScore([10, 12, 15, 18, 22, 26, 30, 35, 40, 45], 5), 4, 'Test 90');
test(maxPossibleScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0), 0, 'Test 91');
test(maxPossibleScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100), 7, 'Test 92');
test(maxPossibleScore([0, 1000000000, 500000000, 750000000], 1000000000), 666666666, 'Test 93');
test(maxPossibleScore([1,5,9,13,17,21,25,29,33,37,41,45,49,53,57,61,65,69,73,77], 2), 4, 'Test 94');
test(maxPossibleScore([100, 250, 400, 550, 700, 850, 1000, 1150, 1300, 1450, 1600, 1750], 50), 154, 'Test 95');
test(maxPossibleScore([1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000], 0), 0, 'Test 96');
test(maxPossibleScore([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 10), 6, 'Test 97');
test(maxPossibleScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 5), 10, 'Test 98');
test(maxPossibleScore([10,20,30,40,50,60,70,80,90,100], 10), 11, 'Test 99');
test(maxPossibleScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 0, 'Test 100');
test(maxPossibleScore([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 1), 2, 'Test 101');
test(maxPossibleScore([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 1), 1, 'Test 102');
test(maxPossibleScore([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 2), 2, 'Test 103');
test(maxPossibleScore([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 1, 'Test 104');
test(maxPossibleScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5), 10, 'Test 105');
test(maxPossibleScore([5,10,15,20,25,30,35,40,45,50], 0), 5, 'Test 106');
test(maxPossibleScore([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 1), 2, 'Test 107');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

