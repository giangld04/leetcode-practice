// Test: 813. Largest Sum Of Averages
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { largestSumOfAverages } = require("./solution");

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

console.log("\n813. Largest Sum Of Averages\n");

test(largestSumOfAverages([1,2,3,4,5], 5), 15.0, 'Test 1');
test(largestSumOfAverages([9,1,2,3,9], 3), 20.0, 'Test 2');
test(largestSumOfAverages([1,2,3], 1), 2.0, 'Test 3');
test(largestSumOfAverages([1,2,3,4,5,6,7], 1), 4.0, 'Test 4');
test(largestSumOfAverages([1,2,3,4,5,6,7], 4), 20.5, 'Test 5');
test(largestSumOfAverages([4,1,7,5,6,2,3], 4), 18.166666666666664, 'Test 6');
test(largestSumOfAverages([10,20,30,40,50], 5), 150.0, 'Test 7');
test(largestSumOfAverages([5,5,5,5,5], 1), 5.0, 'Test 8');
test(largestSumOfAverages([10,10,10,10,10,10,10,10,10,10], 5), 50.0, 'Test 9');
test(largestSumOfAverages([5,5,5,5,5], 3), 15.0, 'Test 10');
test(largestSumOfAverages([1,2,3], 2), 4.5, 'Test 11');
test(largestSumOfAverages([100,200,300,400], 2), 600.0, 'Test 12');
test(largestSumOfAverages([1,2,3,4,5,6,7], 7), 28.0, 'Test 13');
test(largestSumOfAverages([1,2,3,4], 2), 6.0, 'Test 14');
test(largestSumOfAverages([9,8,7,6,5,4,3,2,1], 4), 27.5, 'Test 15');
test(largestSumOfAverages([1,2,3,4,5,6,7,8,9,10], 10), 55.0, 'Test 16');
test(largestSumOfAverages([5,3,8,1,9,2], 3), 16.0, 'Test 17');
test(largestSumOfAverages([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 37.5, 'Test 18');
test(largestSumOfAverages([5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 8), 125.17647058823529, 'Test 19');
test(largestSumOfAverages([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45], 8), 265.5, 'Test 20');
test(largestSumOfAverages([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5), 5.0, 'Test 21');
test(largestSumOfAverages([1,2,3,4,5,6,7,8,9,10], 5), 37.5, 'Test 22');
test(largestSumOfAverages([10,20,30,40,50], 2), 75.0, 'Test 23');
test(largestSumOfAverages([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 3), 360.0, 'Test 24');
test(largestSumOfAverages([10,20,30,40,50,60,70,80,90,100], 10), 550.0, 'Test 25');
test(largestSumOfAverages([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 3), 36.0, 'Test 26');
test(largestSumOfAverages([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 10.0, 'Test 27');
test(largestSumOfAverages([100,100,100,100,100,100,100,100,100,100], 10), 1000.0, 'Test 28');
test(largestSumOfAverages([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59], 15), 660.0, 'Test 29');
test(largestSumOfAverages([5,5,5,5,5,5,5,5,5,5], 10), 50.0, 'Test 30');
test(largestSumOfAverages([9,1,2,3,9,1,2,3,9], 3), 21.0, 'Test 31');
test(largestSumOfAverages([10,20,30,40,50,60,70,80,90,100], 5), 375.0, 'Test 32');
test(largestSumOfAverages([5,3,6,4,8,9,1,2], 3), 16.5, 'Test 33');
test(largestSumOfAverages([10,9,8,7,6,5,4,3,2,1], 2), 15.0, 'Test 34');
test(largestSumOfAverages([100,10,1,10,100,100,1,10,100,100,1,10,100], 5), 370.14285714285717, 'Test 35');
test(largestSumOfAverages([1,1,1,1,1,1,1,1,1,1], 1), 1.0, 'Test 36');
test(largestSumOfAverages([5,15,25,35,45,55,65,75,85,95,105,115,125,135,145,155,165,175,185,195], 6), 950.0, 'Test 37');
test(largestSumOfAverages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), 55.0, 'Test 38');
test(largestSumOfAverages([1,2,3,4,5,6,7,8,9,10], 1), 5.5, 'Test 39');
test(largestSumOfAverages([1,10,100,1000,10000,100000,1000000], 3), 1102222.2, 'Test 40');
test(largestSumOfAverages([9,1,2,3,9,1,2,3,9,1,2,3], 4), 23.0, 'Test 41');
test(largestSumOfAverages([1,1,1,1,1,1,1,1,1,1], 5), 5.0, 'Test 42');
test(largestSumOfAverages([4,5,6,7,8,9,10,11,12,13], 3), 32.5, 'Test 43');
test(largestSumOfAverages([10,11,12,13,14,15,16,17,18,19,20], 6), 102.5, 'Test 44');
test(largestSumOfAverages([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5), 60.0, 'Test 45');
test(largestSumOfAverages([1,2,2,3,3,3,4,4,4,4], 5), 18.333333333333332, 'Test 46');
test(largestSumOfAverages([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3), 3.0, 'Test 47');
test(largestSumOfAverages([15,10,10,10,10,10,10,10,10,10,10], 5), 55.0, 'Test 48');
test(largestSumOfAverages([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 15), 75.0, 'Test 49');
test(largestSumOfAverages([1000,100,10,1,0,1,10,100,1000,10000], 4), 12031.714285714286, 'Test 50');
test(largestSumOfAverages([1,1,1,1,1,1,1,1,1,1], 3), 3.0, 'Test 51');
test(largestSumOfAverages([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 8), 1260.0, 'Test 52');
test(largestSumOfAverages([9,1,4,3,8,7,5,6,2], 4), 24.666666666666664, 'Test 53');
test(largestSumOfAverages([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5), 375.0, 'Test 54');
test(largestSumOfAverages([5,5,5,5,5,5,5,5,5,5], 1), 5.0, 'Test 55');
test(largestSumOfAverages([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 10.0, 'Test 56');
test(largestSumOfAverages([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 20), 405.0, 'Test 57');
test(largestSumOfAverages([10,20,10,20,10,20,10,20,10,20], 5), 81.66666666666667, 'Test 58');
test(largestSumOfAverages([5,3,8,1,9,2,6,7], 3), 18.25, 'Test 59');
test(largestSumOfAverages([3, 1, 2, 4, 5, 6, 7, 8, 9, 10], 3), 23.5, 'Test 60');
test(largestSumOfAverages([9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1], 5), 35.0625, 'Test 61');
test(largestSumOfAverages([9,8,7,6,5,4,3,2,1], 5), 33.0, 'Test 62');
test(largestSumOfAverages([10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000], 5), 50000.0, 'Test 63');
test(largestSumOfAverages([9,1,2,3,9,5,7,8], 3), 21.5, 'Test 64');
test(largestSumOfAverages([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 50), 50.0, 'Test 65');
test(largestSumOfAverages([5,5,5,5,5,5,5,5,5,5], 5), 25.0, 'Test 66');
test(largestSumOfAverages([10000,9999,9998,9997,9996,9995,9994,9993,9992,9991], 5), 49987.5, 'Test 67');
test(largestSumOfAverages([4,3,2,6,2,3,4,5,1,2], 4), 15.333333333333334, 'Test 68');
test(largestSumOfAverages([100,200,300,400,500], 2), 750.0, 'Test 69');
test(largestSumOfAverages([2,3,4,5,6,7,8,9], 3), 21.5, 'Test 70');
test(largestSumOfAverages([100,200,300,400,500,600,700,800,900,1000], 10), 5500.0, 'Test 71');
test(largestSumOfAverages([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 1), 55.0, 'Test 72');
test(largestSumOfAverages([5,6,1,8,4,9], 2), 13.8, 'Test 73');
test(largestSumOfAverages([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5), 82.5, 'Test 74');
test(largestSumOfAverages([10,20,30,40,50,60,70,80,90,100], 3), 235.0, 'Test 75');
test(largestSumOfAverages([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7), 80.0, 'Test 76');
test(largestSumOfAverages([1, 100, 1, 100, 1, 100, 1, 100, 1, 100], 5), 318.5, 'Test 77');
test(largestSumOfAverages([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 15), 120.0, 'Test 78');
test(largestSumOfAverages([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 15), 15.0, 'Test 79');
test(largestSumOfAverages([5,2,3,1,5,2,3,1,5,2,3,1,5,2,3,1,5,2,3,1], 7), 24.32857142857143, 'Test 80');
test(largestSumOfAverages([9,7,5,3,1,2,4,6,8,10], 2), 15.0, 'Test 81');
test(largestSumOfAverages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 2), 22.5, 'Test 82');
test(largestSumOfAverages([10,20,30,40,50,60,70,80,90,100], 2), 150.0, 'Test 83');
test(largestSumOfAverages([5, 1, 4, 2, 3, 6, 8, 7], 3), 18.5, 'Test 84');
test(largestSumOfAverages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 20), 210.0, 'Test 85');
test(largestSumOfAverages([1,2,3,4,5,6,7,8,9,10], 3), 23.5, 'Test 86');
test(largestSumOfAverages([9,1,2,3,9,1,2,3,9,1,2,3,9,1,2,3], 6), 34.0, 'Test 87');
test(largestSumOfAverages([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 150.0, 'Test 88');
test(largestSumOfAverages([100,200,300,400,500,600,700,800,900,1000], 5), 3750.0, 'Test 89');
test(largestSumOfAverages([1,1,1,1,1,1,1,1,1,1], 10), 10.0, 'Test 90');
test(largestSumOfAverages([1,100,2,100,3,100,4,100,5,100], 5), 322.49999999999994, 'Test 91');
test(largestSumOfAverages([10000,10000,10000,10000,10000], 3), 30000.0, 'Test 92');
test(largestSumOfAverages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), 150.0, 'Test 93');
test(largestSumOfAverages([1,3,5,7,9,11,13,15,17,19], 4), 58.0, 'Test 94');
test(largestSumOfAverages([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 2), 1500.0, 'Test 95');
test(largestSumOfAverages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], 25), 937.5, 'Test 96');
test(largestSumOfAverages([9,8,7,6,5,4,3,2,1], 3), 21.0, 'Test 97');
test(largestSumOfAverages([9,1,2,3,9,8,7,6,5,4], 5), 33.5, 'Test 98');
test(largestSumOfAverages([1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100], 10), 670.0, 'Test 99');
test(largestSumOfAverages([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9], 20), 180.0, 'Test 100');
test(largestSumOfAverages([9, 8, 7, 6, 5, 4, 3, 2, 1], 9), 45.0, 'Test 101');
test(largestSumOfAverages([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), 50.0, 'Test 102');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

