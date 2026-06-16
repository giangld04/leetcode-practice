// Test: 2187. Minimum Time To Complete Trips
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { minimumTime } = require("./solution");

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

console.log("\n2187. Minimum Time To Complete Trips\n");

test(minimumTime([1,2,3], 5), 3, 'Test 1');
test(minimumTime([10000000], 10000000), 100000000000000, 'Test 2');
test(minimumTime([10,20,30], 100), 550, 'Test 3');
test(minimumTime([1,1,1,1,1], 100000), 20000, 'Test 4');
test(minimumTime([1,1,1,1,1], 10000), 2000, 'Test 5');
test(minimumTime([5,10,15], 9), 30, 'Test 6');
test(minimumTime([5,10,15], 10), 30, 'Test 7');
test(minimumTime([2], 1), 2, 'Test 8');
test(minimumTime([1,1,1,1], 10), 3, 'Test 9');
test(minimumTime([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 15000), 3000, 'Test 10');
test(minimumTime([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], 500), 305, 'Test 11');
test(minimumTime([7,14,21,28,35,42], 100), 294, 'Test 12');
test(minimumTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 50000), 13900, 'Test 13');
test(minimumTime([3,6,9,12], 20), 30, 'Test 14');
test(minimumTime([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 100000), 100000, 'Test 15');
test(minimumTime([100, 200, 300, 400], 500), 24000, 'Test 16');
test(minimumTime([5, 8, 12, 16, 20], 100), 195, 'Test 17');
test(minimumTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100), 36, 'Test 18');
test(minimumTime([2,3,5,7,11,13,17,19], 50), 36, 'Test 19');
test(minimumTime([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 50000), 21408, 'Test 20');
test(minimumTime([2,3,4,5,6,7,8,9,10], 50), 28, 'Test 21');
test(minimumTime([3,5,7,9], 20), 27, 'Test 22');
test(minimumTime([10,20,30,40,50,60,70,80,90,100], 5000), 17090, 'Test 23');
test(minimumTime([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 1500), 1539, 'Test 24');
test(minimumTime([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 1000000), 250000, 'Test 25');
test(minimumTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5000), 1392, 'Test 26');
test(minimumTime([3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 150), 132, 'Test 27');
test(minimumTime([100,200,300,400,500], 1500), 65800, 'Test 28');
test(minimumTime([10, 20, 30, 40, 50], 50), 230, 'Test 29');
test(minimumTime([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288], 1000000), 500004, 'Test 30');
test(minimumTime([1, 2, 4, 8, 16, 32, 64, 128], 1000), 504, 'Test 31');
test(minimumTime([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5], 5000), 731, 'Test 32');
test(minimumTime([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10000), 2500, 'Test 33');
test(minimumTime([2,3,5,7,11,13,17,19,23,29], 1000), 655, 'Test 34');
test(minimumTime([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1000), 500, 'Test 35');
test(minimumTime([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 15000), 6425, 'Test 36');
test(minimumTime([3, 6, 9, 12], 25), 36, 'Test 37');
test(minimumTime([9, 18, 27, 36, 45, 54, 63, 72, 81, 90], 15000), 46107, 'Test 38');
test(minimumTime([5,5,5,5,5,5,5,5,5,5], 5000), 2500, 'Test 39');
test(minimumTime([3,6,9,12,15], 20), 30, 'Test 40');
test(minimumTime([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 100), 49, 'Test 41');
test(minimumTime([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 1000), 3430, 'Test 42');
test(minimumTime([1, 2, 4, 8, 16, 32, 64], 5000), 2521, 'Test 43');
test(minimumTime([100,200,300,400,500], 5000), 219000, 'Test 44');
test(minimumTime([5,10,15,20,25,30,35,40,45,50], 10000), 17080, 'Test 45');
test(minimumTime([1,2,4,8,16,32,64,128,256,512], 1023), 512, 'Test 46');
test(minimumTime([1000,2000,3000,4000,5000,6000,7000,8000,9000,10000], 50000), 17072000, 'Test 47');
test(minimumTime([7, 14, 21, 28, 35], 30), 98, 'Test 48');
test(minimumTime([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 100), 18, 'Test 49');
test(minimumTime([10000000,9999999,9999998,9999997,9999996], 10000000), 20000000000000, 'Test 50');
test(minimumTime([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 500), 1720, 'Test 51');
test(minimumTime([10000, 5000, 2500, 1250, 625], 1000000), 322581250, 'Test 52');
test(minimumTime([3, 6, 9, 12, 15], 25), 36, 'Test 53');
test(minimumTime([1, 2, 4, 8, 16, 32, 64], 1000), 506, 'Test 54');
test(minimumTime([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 10000), 17080, 'Test 55');
test(minimumTime([2, 5, 7, 10], 20), 22, 'Test 56');
test(minimumTime([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 1000), 1400, 'Test 57');
test(minimumTime([2, 4, 6, 8, 10, 12, 14], 70), 56, 'Test 58');
test(minimumTime([10,20,30,40,50,60,70,80,90,100], 10000), 34160, 'Test 59');
test(minimumTime([2, 5, 8, 11], 20), 24, 'Test 60');
test(minimumTime([3, 6, 9, 12, 15, 18], 100), 126, 'Test 61');
test(minimumTime([3, 9, 27, 81], 100), 207, 'Test 62');
test(minimumTime([100, 200, 300, 400, 500], 5000), 219000, 'Test 63');
test(minimumTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10000), 3016, 'Test 64');
test(minimumTime([100000, 200000, 300000, 400000, 500000], 1000000), 43795700000, 'Test 65');
test(minimumTime([3, 6, 9, 12], 20), 30, 'Test 66');
test(minimumTime([4,8,12,16,20,24,28,32,36,40], 1000), 1372, 'Test 67');
test(minimumTime([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 20000), 60300, 'Test 68');
test(minimumTime([10000, 20000, 30000, 40000], 100000), 480000000, 'Test 69');
test(minimumTime([1,2,3,4,5,6,7,8,9,10], 100000), 34144, 'Test 70');
test(minimumTime([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 3000), 1959, 'Test 71');
test(minimumTime([100, 200, 300, 400, 500], 1000), 43900, 'Test 72');
test(minimumTime([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 25000), 15072, 'Test 73');
test(minimumTime([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 150), 265, 'Test 74');
test(minimumTime([42,84,126,168,210,252,294,336,378,420,462,504,546,588,630], 10000), 126672, 'Test 75');
test(minimumTime([7,14,21,28,35], 100), 315, 'Test 76');
test(minimumTime([10, 20, 30, 40, 50, 60], 100), 420, 'Test 77');
test(minimumTime([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 2500), 5870, 'Test 78');
test(minimumTime([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 200000), 277965, 'Test 79');
test(minimumTime([4, 8, 12, 16, 20], 50), 92, 'Test 80');
test(minimumTime([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10000), 34160, 'Test 81');
test(minimumTime([2,3,5,7,11], 30), 25, 'Test 82');
test(minimumTime([13, 26, 39, 52, 65, 78, 91, 104, 117, 130], 20000), 88790, 'Test 83');
test(minimumTime([1,2,4,8,16,32,64], 100000), 50396, 'Test 84');
test(minimumTime([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 200), 96, 'Test 85');
test(minimumTime([7, 14, 21, 28, 35, 42], 100), 294, 'Test 86');
test(minimumTime([2, 3, 5, 7], 20), 18, 'Test 87');
test(minimumTime([3, 6, 9, 12], 15), 24, 'Test 88');
test(minimumTime([7, 14, 21, 28, 35], 50), 161, 'Test 89');
test(minimumTime([100000, 50000, 25000, 12500, 6250, 3125, 1562, 781, 390, 195], 500000), 48814545, 'Test 90');
test(minimumTime([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 200), 700, 'Test 91');
test(minimumTime([10000, 20000, 30000], 100000), 545460000, 'Test 92');
test(minimumTime([1,3,6,10,15,21,28,36,45,55], 1000000), 550002, 'Test 93');
test(minimumTime([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 1000000), 403282, 'Test 94');
test(minimumTime([7, 14, 21, 28], 25), 84, 'Test 95');
test(minimumTime([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 300), 184, 'Test 96');
test(minimumTime([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49], 100000), 38597, 'Test 97');
test(minimumTime([1,2,4,8,16,32,64,128,256,512], 100000), 50050, 'Test 98');
test(minimumTime([1, 3, 7, 15], 30), 21, 'Test 99');
test(minimumTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1000), 343, 'Test 100');
test(minimumTime([4, 5, 6, 7, 8], 30), 36, 'Test 101');
test(minimumTime([7, 14, 21, 28, 35, 42, 49, 56, 63, 70], 200), 490, 'Test 102');
test(minimumTime([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 500), 110, 'Test 103');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

