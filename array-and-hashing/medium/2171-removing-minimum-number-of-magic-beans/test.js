// Test: 2171. Removing Minimum Number Of Magic Beans
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { minimumRemoval } = require("./solution");

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

console.log("\n2171. Removing Minimum Number Of Magic Beans\n");

test(minimumRemoval([1,1,1,1,1,1,1,1,1,1]), 0, 'Test 1');
test(minimumRemoval([1,2,3,4,5,6,7,8,9,10]), 25, 'Test 2');
test(minimumRemoval([4,1,6,5]), 4, 'Test 3');
test(minimumRemoval([5,5,5,5]), 0, 'Test 4');
test(minimumRemoval([1,2,3,4,5,6,7,8,9,100000]), 45, 'Test 5');
test(minimumRemoval([10,10,10,10]), 0, 'Test 6');
test(minimumRemoval([5,5,5,4,4,4,3,3,3,2,2,2,1,1,1]), 18, 'Test 7');
test(minimumRemoval([1,2,2,3,3,3,4,4,4,4]), 9, 'Test 8');
test(minimumRemoval([1,2,3,4,5]), 6, 'Test 9');
test(minimumRemoval([100000,99999,99998,99997,99996]), 10, 'Test 10');
test(minimumRemoval([100000, 1, 100000, 1, 100000]), 2, 'Test 11');
test(minimumRemoval([1]), 0, 'Test 12');
test(minimumRemoval([100000]), 0, 'Test 13');
test(minimumRemoval([5,5,5,5,5]), 0, 'Test 14');
test(minimumRemoval([1,1,1,1,1]), 0, 'Test 15');
test(minimumRemoval([99999,99999,99999,99999,99999]), 0, 'Test 16');
test(minimumRemoval([2,10,3,2]), 7, 'Test 17');
test(minimumRemoval([10,9,8,7,6,5,4,3,2,1]), 25, 'Test 18');
test(minimumRemoval([5,4,3,2,1]), 6, 'Test 19');
test(minimumRemoval([100000,1,100000,1,100000]), 2, 'Test 20');
test(minimumRemoval([100000,100000,100000,100000,100000]), 0, 'Test 21');
test(minimumRemoval([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]), 19, 'Test 22');
test(minimumRemoval([1,100000,1,100000]), 2, 'Test 23');
test(minimumRemoval([10,1,10,1,10]), 2, 'Test 24');
test(minimumRemoval([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100000]), 19, 'Test 25');
test(minimumRemoval([1, 1, 1, 1, 1, 1, 1, 1, 1, 100000]), 9, 'Test 26');
test(minimumRemoval([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100]), 55, 'Test 27');
test(minimumRemoval([9,7,3,8,6,4]), 13, 'Test 28');
test(minimumRemoval([100, 50, 150, 200, 250, 300]), 450, 'Test 29');
test(minimumRemoval([10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000]), 0, 'Test 30');
test(minimumRemoval([1, 100000, 2, 99999, 3, 99998, 4, 99997, 5, 99996]), 25, 'Test 31');
test(minimumRemoval([100000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55, 'Test 32');
test(minimumRemoval([50, 48, 46, 44, 42, 40, 38, 36, 34, 32, 30, 28, 26, 24, 22, 20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 1]), 313, 'Test 33');
test(minimumRemoval([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 2500, 'Test 34');
test(minimumRemoval([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 1]), 1, 'Test 35');
test(minimumRemoval([100000, 50000, 25000, 12500, 6250, 3125, 1562, 781, 390, 195]), 99803, 'Test 36');
test(minimumRemoval([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 50, 'Test 37');
test(minimumRemoval([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]), 625, 'Test 38');
test(minimumRemoval([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5, 3, 1]), 259, 'Test 39');
test(minimumRemoval([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 100, 'Test 40');
test(minimumRemoval([1, 99999, 2, 99998, 3, 99997, 4, 99996]), 16, 'Test 41');
test(minimumRemoval([50,50,50,50,50,1,1,1,1,1]), 5, 'Test 42');
test(minimumRemoval([50000, 50000, 50000, 50000, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 16, 'Test 43');
test(minimumRemoval([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 0, 'Test 44');
test(minimumRemoval([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 190, 'Test 45');
test(minimumRemoval([1,1,2,2,3,3,4,4,5,5,6,6]), 18, 'Test 46');
test(minimumRemoval([5, 4, 3, 2, 1, 1, 2, 3, 4, 5]), 12, 'Test 47');
test(minimumRemoval([100000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 190, 'Test 48');
test(minimumRemoval([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), 0, 'Test 49');
test(minimumRemoval([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]), 78, 'Test 50');
test(minimumRemoval([10, 20, 30, 40, 50]), 60, 'Test 51');
test(minimumRemoval([10, 10, 10, 20, 20, 20, 30, 30, 30, 40, 40, 40, 50, 50, 50]), 180, 'Test 52');
test(minimumRemoval([99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991, 99990]), 45, 'Test 53');
test(minimumRemoval([210,190,171,153,136,120,105,91,78,66,55,45,36,28,21,15,10,6,3,1]), 805, 'Test 54');
test(minimumRemoval([5, 7, 8, 9, 9, 10, 10, 10, 10, 10]), 24, 'Test 55');
test(minimumRemoval([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 560, 'Test 56');
test(minimumRemoval([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]), 120, 'Test 57');
test(minimumRemoval([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 25, 'Test 58');
test(minimumRemoval([50000, 50000, 50000, 50000, 50000, 1, 2, 3, 4, 5]), 15, 'Test 59');
test(minimumRemoval([100, 100, 200, 200, 300, 300, 400, 400, 500, 500]), 1200, 'Test 60');
test(minimumRemoval([10, 10, 20, 20, 30, 30, 40, 40, 50, 50]), 120, 'Test 61');
test(minimumRemoval([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 225, 'Test 62');
test(minimumRemoval([9, 8, 7, 6, 5, 4, 3, 2, 1]), 20, 'Test 63');
test(minimumRemoval([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3]), 10, 'Test 64');
test(minimumRemoval([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288]), 524287, 'Test 65');
test(minimumRemoval([10, 20, 10, 30, 20, 40, 30, 50, 40, 60]), 130, 'Test 66');
test(minimumRemoval([99999, 100000, 99998, 100000, 99997, 100000]), 12, 'Test 67');
test(minimumRemoval([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 50, 'Test 68');
test(minimumRemoval([2,4,6,8,10,8,6,4,2]), 20, 'Test 69');
test(minimumRemoval([1,10,100,1000,10000,100000,100000,10000,1000,100]), 22211, 'Test 70');
test(minimumRemoval([20000, 20000, 20000, 20000, 20000, 10000, 10000, 10000, 10000, 10000, 10000]), 50000, 'Test 71');
test(minimumRemoval([1,3,6,10,15,21,28,36,45,55,66,78,91,105,120,136,153,171,190,210]), 805, 'Test 72');
test(minimumRemoval([9,8,7,6,5,4,3,2,1]), 20, 'Test 73');
test(minimumRemoval([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 0, 'Test 74');
test(minimumRemoval([1, 10, 100, 1000, 10000, 100000, 1, 10, 100, 1000, 10000, 100000, 1, 10, 100, 1000, 10000, 100000, 1, 10]), 33344, 'Test 75');
test(minimumRemoval([99999, 99999, 99999, 99999, 99999, 1, 2, 3, 4, 5]), 15, 'Test 76');
test(minimumRemoval([99999, 99998, 99997, 99996, 99995]), 10, 'Test 77');
test(minimumRemoval([33, 33, 33, 33, 33, 1, 2, 3, 4, 5]), 15, 'Test 78');
test(minimumRemoval([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 45, 'Test 79');
test(minimumRemoval([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 500, 'Test 80');
test(minimumRemoval([100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000]), 250000, 'Test 81');
test(minimumRemoval([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 0, 'Test 82');
test(minimumRemoval([1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190, 210, 231, 253, 276, 300, 325, 351, 378, 406, 435, 465, 496]), 2915, 'Test 83');
test(minimumRemoval([10,20,30,40,50,60,70,80,90,100]), 250, 'Test 84');
test(minimumRemoval([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 50, 'Test 85');
test(minimumRemoval([5,1,1,1,5,5,5,1,5,1,1,5]), 6, 'Test 86');
test(minimumRemoval([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]), 9, 'Test 87');
test(minimumRemoval([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 88');
test(minimumRemoval([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 100, 'Test 89');
test(minimumRemoval([31, 29, 27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), 120, 'Test 90');
test(minimumRemoval([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]), 5600, 'Test 91');
test(minimumRemoval([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]), 12, 'Test 92');
test(minimumRemoval([7, 5, 9, 3, 6, 2, 8, 1, 4, 10]), 25, 'Test 93');
test(minimumRemoval([1000,900,800,700,600,500,400,300,200,100]), 2500, 'Test 94');
test(minimumRemoval([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 95');
test(minimumRemoval([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]), 150, 'Test 96');
test(minimumRemoval([50000, 50000, 50000, 50000, 50000, 1, 1, 1]), 3, 'Test 97');
test(minimumRemoval([10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000]), 25000, 'Test 98');
test(minimumRemoval([3,6,1,9,4,2,8,7,5]), 20, 'Test 99');
test(minimumRemoval([50, 40, 30, 20, 10, 50, 40, 30, 20, 10, 50, 40, 30, 20, 10, 50, 40, 30, 20, 10]), 240, 'Test 100');
test(minimumRemoval([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50]), 312, 'Test 101');
test(minimumRemoval([1, 100, 1000, 10000, 100000]), 11101, 'Test 102');
test(minimumRemoval([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 1]), 1, 'Test 103');
test(minimumRemoval([1,100,2,99,3,98,4,97,5,96]), 25, 'Test 104');
test(minimumRemoval([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5]), 24, 'Test 105');
test(minimumRemoval([10, 10, 20, 20, 30, 30, 40, 40]), 80, 'Test 106');
test(minimumRemoval([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6]), 31, 'Test 107');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

