// Test: 2333. Minimum Sum Of Squared Difference
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { minSumSquareDiff } = require("./solution");

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

console.log("\n2333. Minimum Sum Of Squared Difference\n");

test(minSumSquareDiff([5,5,5,5], [5,5,5,5], 100, 100), 0, 'Test 1');
test(minSumSquareDiff([10,20,30,40,50], [5,15,25,35,45], 50, 50), 0, 'Test 2');
test(minSumSquareDiff([100000, 100000], [0, 0], 100000, 100000), 0, 'Test 3');
test(minSumSquareDiff([1,3,5,7,9], [2,4,6,8,10], 1, 1), 3, 'Test 4');
test(minSumSquareDiff([1,2,3], [3,2,1], 3, 3), 0, 'Test 5');
test(minSumSquareDiff([0,0,0,0], [100,100,100,100], 200, 200), 0, 'Test 6');
test(minSumSquareDiff([1,2,3], [3,2,1], 10, 10), 0, 'Test 7');
test(minSumSquareDiff([1,2,3,4], [2,10,20,19], 0, 0), 579, 'Test 8');
test(minSumSquareDiff([1,2,3], [3,2,1], 2, 2), 0, 'Test 9');
test(minSumSquareDiff([5,5,5,5], [1,1,1,1], 4, 4), 16, 'Test 10');
test(minSumSquareDiff([1,1,1,1,1], [5,5,5,5,5], 5, 5), 20, 'Test 11');
test(minSumSquareDiff([0,0,0,0], [0,0,0,0], 5, 5), 0, 'Test 12');
test(minSumSquareDiff([1,2,3,4,5], [5,4,3,2,1], 5, 5), 2, 'Test 13');
test(minSumSquareDiff([1,1,1,1,1,1,1,1,1,1], [9,9,9,9,9,9,9,9,9,9], 50, 50), 0, 'Test 14');
test(minSumSquareDiff([0,0,0,0], [10,10,10,10], 20, 20), 0, 'Test 15');
test(minSumSquareDiff([1,2,3,4,5], [5,4,3,2,1], 3, 3), 10, 'Test 16');
test(minSumSquareDiff([0,0,0], [100,100,100], 150, 150), 0, 'Test 17');
test(minSumSquareDiff([10,20,30], [1,2,3], 25, 25), 6, 'Test 18');
test(minSumSquareDiff([1,1,1,1], [1,1,1,1], 5, 5), 0, 'Test 19');
test(minSumSquareDiff([0,0,0,0], [1,1,1,1], 2, 2), 0, 'Test 20');
test(minSumSquareDiff([1,1,1,1], [10,10,10,10], 10, 10), 64, 'Test 21');
test(minSumSquareDiff([3,5,7,9], [4,6,8,10], 3, 3), 0, 'Test 22');
test(minSumSquareDiff([100000,100000,100000], [0,0,0], 300000, 300000), 0, 'Test 23');
test(minSumSquareDiff([1,4,10,12], [5,8,6,9], 1, 1), 43, 'Test 24');
test(minSumSquareDiff([100000,100000,100000], [0,0,0], 100000, 100000), 3333333334, 'Test 25');
test(minSumSquareDiff([5,5,5,5], [1,1,1,1], 10, 10), 0, 'Test 26');
test(minSumSquareDiff([100000, 100000, 100000], [0, 0, 0], 100000, 100000), 3333333334, 'Test 27');
test(minSumSquareDiff([1000, 2000, 3000, 4000, 5000], [5000, 4000, 3000, 2000, 1000], 2000, 2000), 16000000, 'Test 28');
test(minSumSquareDiff([10, 20, 30, 40, 50], [15, 25, 35, 45, 55], 100, 100), 0, 'Test 29');
test(minSumSquareDiff([100000, 90000, 80000, 70000], [60000, 50000, 40000, 30000], 500000, 500000), 0, 'Test 30');
test(minSumSquareDiff([100000, 50000, 25000, 10000], [90000, 60000, 35000, 15000], 50000, 50000), 0, 'Test 31');
test(minSumSquareDiff([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999], 1000000, 1000000), 0, 'Test 32');
test(minSumSquareDiff([100000, 50000, 25000], [0, 0, 0], 500000, 500000), 0, 'Test 33');
test(minSumSquareDiff([10, 20, 30, 40, 50], [1, 2, 3, 4, 5], 50, 50), 245, 'Test 34');
test(minSumSquareDiff([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1000, 1000), 1298535, 'Test 35');
test(minSumSquareDiff([5, 10, 15, 20, 25], [100, 100, 100, 100, 100], 300, 300), 0, 'Test 36');
test(minSumSquareDiff([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 100, 100), 0, 'Test 37');
test(minSumSquareDiff([1, 1, 1, 1, 1], [1, 1, 1, 1, 1], 1000000000, 1000000000), 0, 'Test 38');
test(minSumSquareDiff([9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9], 10, 10), 52, 'Test 39');
test(minSumSquareDiff([1,1,1,1,1,1,1,1,1,1], [10,10,10,10,10,10,10,10,10,10], 50, 50), 0, 'Test 40');
test(minSumSquareDiff([1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1], 0, 0), 0, 'Test 41');
test(minSumSquareDiff([10, 20, 30, 40, 50], [1, 2, 3, 4, 5], 100, 100), 0, 'Test 42');
test(minSumSquareDiff([50000, 50000, 50000], [0, 0, 0], 150000, 150000), 0, 'Test 43');
test(minSumSquareDiff([1000, 2000, 3000, 4000, 5000], [500, 1000, 1500, 2000, 2500], 1000, 1000), 6583334, 'Test 44');
test(minSumSquareDiff([100, 200, 300], [300, 200, 100], 150, 150), 5000, 'Test 45');
test(minSumSquareDiff([1000, 2000, 3000, 4000, 5000], [500, 1500, 2500, 3500, 4500], 100000, 100000), 0, 'Test 46');
test(minSumSquareDiff([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 150, 150), 4252, 'Test 47');
test(minSumSquareDiff([5, 10, 15, 20, 25, 30], [3, 6, 9, 12, 15, 18], 20, 25), 0, 'Test 48');
test(minSumSquareDiff([1,3,5,7,9,11,13,15,17,19], [2,4,6,8,10,12,14,16,18,20], 100, 100), 0, 'Test 49');
test(minSumSquareDiff([10, 20, 30, 40, 50], [5, 15, 25, 35, 45], 10, 10), 5, 'Test 50');
test(minSumSquareDiff([100, 200, 300, 400], [150, 250, 350, 450], 100, 100), 0, 'Test 51');
test(minSumSquareDiff([1,2,3,4,5], [5,4,3,2,1], 10, 10), 0, 'Test 52');
test(minSumSquareDiff([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 50, 50), 0, 'Test 53');
test(minSumSquareDiff([100, 200, 300, 400], [105, 205, 305, 405], 10, 10), 0, 'Test 54');
test(minSumSquareDiff([50, 50, 50, 50, 50], [1, 2, 3, 4, 5], 200, 200), 0, 'Test 55');
test(minSumSquareDiff([0,0,0,0,0,0,0,0,0,0], [10,10,10,10,10,10,10,10,10,10], 5, 5), 810, 'Test 56');
test(minSumSquareDiff([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100, 100), 0, 'Test 57');
test(minSumSquareDiff([100000, 0, 50000], [0, 100000, 50000], 100000, 100000), 0, 'Test 58');
test(minSumSquareDiff([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 100, 100), 12728, 'Test 59');
test(minSumSquareDiff([5, 5, 5, 5, 5], [1, 2, 3, 4, 5], 20, 20), 0, 'Test 60');
test(minSumSquareDiff([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0, 0), 0, 'Test 61');
test(minSumSquareDiff([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1], 0, 0), 330, 'Test 62');
test(minSumSquareDiff([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 500, 500), 0, 'Test 63');
test(minSumSquareDiff([1, 2, 3, 4, 5], [5, 4, 3, 2, 1], 10, 10), 0, 'Test 64');
test(minSumSquareDiff([50, 50, 50, 50, 50], [0, 0, 0, 0, 0], 50, 50), 4500, 'Test 65');
test(minSumSquareDiff([1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1], 100, 100), 0, 'Test 66');
test(minSumSquareDiff([5,5,5,5,5,5,5,5,5,5], [10,10,10,10,10,10,10,10,10,10], 20, 20), 10, 'Test 67');
test(minSumSquareDiff([1,1,1,1,1,1,1,1,1,1], [10,10,10,10,10,10,10,10,10,10], 100, 100), 0, 'Test 68');
test(minSumSquareDiff([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1000, 1000), 0, 'Test 69');
test(minSumSquareDiff([100, 200, 300, 400, 500], [100, 100, 100, 100, 100], 100, 100), 175000, 'Test 70');
test(minSumSquareDiff([10000, 20000, 30000, 40000, 50000], [50000, 40000, 30000, 20000, 10000], 1000000, 1000000), 0, 'Test 71');
test(minSumSquareDiff([100, 100, 100, 100, 100, 100], [1, 1, 1, 1, 1, 1], 300, 300), 0, 'Test 72');
test(minSumSquareDiff([1000, 2000, 3000, 4000, 5000], [500, 1500, 2500, 3500, 4500], 2000, 2000), 0, 'Test 73');
test(minSumSquareDiff([10, 20, 30], [30, 20, 10], 20, 20), 0, 'Test 74');
test(minSumSquareDiff([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 50, 50), 0, 'Test 75');
test(minSumSquareDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 50, 50), 0, 'Test 76');
test(minSumSquareDiff([1, 2, 3, 4, 5], [1, 1, 1, 1, 1], 10, 10), 0, 'Test 77');
test(minSumSquareDiff([50000, 40000, 30000, 20000, 10000], [50000, 40000, 30000, 20000, 10000], 0, 0), 0, 'Test 78');
test(minSumSquareDiff([100, 200, 300, 400, 500], [1, 2, 3, 4, 5], 1000, 1000), 0, 'Test 79');
test(minSumSquareDiff([1, 1, 1, 1, 1], [100000, 100000, 100000, 100000, 100000], 50000, 50000), 31999200005, 'Test 80');
test(minSumSquareDiff([10, 20, 30, 40, 50], [15, 25, 35, 45, 55], 15, 20), 0, 'Test 81');
test(minSumSquareDiff([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 100, 100), 0, 'Test 82');
test(minSumSquareDiff([100, 200, 300, 400, 500], [10, 20, 30, 40, 50], 10000, 10000), 0, 'Test 83');
test(minSumSquareDiff([1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1], 10, 10), 0, 'Test 84');
test(minSumSquareDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 0, 0), 330, 'Test 85');
test(minSumSquareDiff([1,2,3,4,5,6,7,8,9,10], [10,20,30,40,50,60,70,80,90,100], 500, 500), 0, 'Test 86');
test(minSumSquareDiff([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1], 20, 20), 10, 'Test 87');
test(minSumSquareDiff([50, 50, 50, 50, 50], [100, 100, 100, 100, 100], 150, 150), 0, 'Test 88');
test(minSumSquareDiff([100000, 90000, 80000, 70000], [60000, 50000, 40000, 30000], 1000000, 1000000), 0, 'Test 89');
test(minSumSquareDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 100, 100), 0, 'Test 90');
test(minSumSquareDiff([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 1000, 1000), 0, 'Test 91');
test(minSumSquareDiff([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 5, 5), 160, 'Test 92');
test(minSumSquareDiff([100, 200, 300, 400, 500], [90, 190, 290, 390, 490], 5, 5), 320, 'Test 93');
test(minSumSquareDiff([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 500, 500), 0, 'Test 94');
test(minSumSquareDiff([100000, 90000, 80000, 70000, 60000], [1, 2, 3, 4, 5], 1000000, 1000000), 0, 'Test 95');
test(minSumSquareDiff([100000, 90000, 80000, 70000, 60000], [50000, 40000, 30000, 20000, 10000], 1000000, 1000000), 0, 'Test 96');
test(minSumSquareDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 20, 20), 10, 'Test 97');
test(minSumSquareDiff([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100, 100), 0, 'Test 98');
test(minSumSquareDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100, 100), 0, 'Test 99');
test(minSumSquareDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 50, 50), 0, 'Test 100');
test(minSumSquareDiff([100, 200, 300], [1, 1, 1], 500, 500), 0, 'Test 101');
test(minSumSquareDiff([100, 200, 300, 400, 500], [50, 150, 250, 350, 450], 1000, 1000), 0, 'Test 102');
test(minSumSquareDiff([100000, 100000, 100000], [0, 0, 0], 150000, 150000), 0, 'Test 103');
test(minSumSquareDiff([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1], 50, 50), 0, 'Test 104');
test(minSumSquareDiff([100000, 100000, 100000, 100000, 100000], [0, 0, 0, 0, 0], 1000000, 1000000), 0, 'Test 105');
test(minSumSquareDiff([10, 20, 30, 40, 50], [5, 15, 25, 35, 45], 25, 25), 0, 'Test 106');
test(minSumSquareDiff([10, 20, 30, 40, 50], [100, 90, 80, 70, 60], 500, 500), 0, 'Test 107');
test(minSumSquareDiff([10,20,30,40,50,60,70,80,90,100], [10,20,30,40,50,60,70,80,90,100], 500, 500), 0, 'Test 108');
test(minSumSquareDiff([5,5,5,5,5], [5,5,5,5,5], 100, 100), 0, 'Test 109');
test(minSumSquareDiff([5, 10, 15, 20, 25], [3, 8, 13, 18, 23], 25, 25), 0, 'Test 110');
test(minSumSquareDiff([10000, 20000, 30000, 40000, 50000], [1, 2, 3, 4, 5], 1000000, 1000000), 0, 'Test 111');
test(minSumSquareDiff([100,200,300,400,500], [500,400,300,200,100], 1000, 1000), 0, 'Test 112');
test(minSumSquareDiff([100,200,300,400,500], [1,2,3,4,5], 1000, 1000), 0, 'Test 113');
test(minSumSquareDiff([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000], 1500000, 1500000), 0, 'Test 114');
test(minSumSquareDiff([1, 1, 1, 1, 1], [10, 20, 30, 40, 50], 250, 250), 0, 'Test 115');
test(minSumSquareDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 1000, 1000), 0, 'Test 116');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

