// Test: 2563. Count The Number Of Fair Pairs
// 89 test cases from LeetCodeDataset
// Run: node test.js

const { countFairPairs } = require("./solution");

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

console.log("\n2563. Count The Number Of Fair Pairs\n");

test(countFairPairs([1000000000,-1000000000,500000000,-500000000], 0, 0), 2, 'Test 1');
test(countFairPairs([0,1,7,4,4,5], 3, 6), 6, 'Test 2');
test(countFairPairs([5,5,5,5,5], 10, 10), 10, 'Test 3');
test(countFairPairs([-1,0,1,2,3], 0, 4), 8, 'Test 4');
test(countFairPairs([-1,0,1,2,3], -2, 2), 6, 'Test 5');
test(countFairPairs([10,20,30,40,50], 50, 70), 6, 'Test 6');
test(countFairPairs([1000000000, -1000000000, 500000000, -500000000], -1500000000, 1500000000), 6, 'Test 7');
test(countFairPairs([-1,0,1,2,3], 0, 2), 5, 'Test 8');
test(countFairPairs([1,7,9,2,5], 11, 11), 1, 'Test 9');
test(countFairPairs([1,2,3,4,5,6,7,8,9,10], 5, 15), 37, 'Test 10');
test(countFairPairs([5, 5, 5, 5, 5], 10, 10), 10, 'Test 11');
test(countFairPairs([-1, 0, 1, 2, 3], 0, 2), 5, 'Test 12');
test(countFairPairs([-10,-20,-30,-40,-50], -80, -50), 7, 'Test 13');
test(countFairPairs([1,2,3,4,5], 5, 8), 7, 'Test 14');
test(countFairPairs([-1, 0, 1, 2, 3], 0, 4), 8, 'Test 15');
test(countFairPairs([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 1, 38), 189, 'Test 16');
test(countFairPairs([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0, 0), 190, 'Test 17');
test(countFairPairs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50, 150), 37, 'Test 18');
test(countFairPairs([-100, -90, -80, -70, -60, -50, -40, -30, -20, -10], -150, -50), 37, 'Test 19');
test(countFairPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10, 20), 64, 'Test 20');
test(countFairPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10, 30), 37, 'Test 21');
test(countFairPairs([1000000000, -1000000000, 500000000, -500000000, 250000000, -250000000], -1000000000, 1000000000), 11, 'Test 22');
test(countFairPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 15, 35), 57, 'Test 23');
test(countFairPairs([1000000000, -1000000000, 500000000, -500000000, 0], -1000000000, 1000000000), 8, 'Test 24');
test(countFairPairs([1000000000, -1000000000, 500000000, -500000000, 250000000, -250000000, 750000000, -750000000, 125000000, -125000000], -1500000000, 1500000000), 43, 'Test 25');
test(countFairPairs([5, -5, 15, -15, 25, -25, 35, -35, 45, -45], -50, 50), 37, 'Test 26');
test(countFairPairs([10,10,10,10,10,10,10,10,10,10], 15, 20), 45, 'Test 27');
test(countFairPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5, 10), 18, 'Test 28');
test(countFairPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10, 28), 35, 'Test 29');
test(countFairPairs([-1000000000, 1000000000, 0, -500000000, 500000000], -1500000000, 1500000000), 10, 'Test 30');
test(countFairPairs([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 3, 7), 34, 'Test 31');
test(countFairPairs([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], -10, 10), 55, 'Test 32');
test(countFairPairs([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2, 2), 45, 'Test 33');
test(countFairPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10, 20), 21, 'Test 34');
test(countFairPairs([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 10, 20), 18, 'Test 35');
test(countFairPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 1, 38), 45, 'Test 36');
test(countFairPairs([10, -10, 20, -20, 30, -30, 40, -40], -50, 50), 24, 'Test 37');
test(countFairPairs([-10,-20,-30,-40,-50,-60,-70,-80,-90,-100], -150, -50), 37, 'Test 38');
test(countFairPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 10, 50), 97, 'Test 39');
test(countFairPairs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 100, 300), 149, 'Test 40');
test(countFairPairs([50, 40, 30, 20, 10, 0, -10, -20, -30, -40], -50, 50), 37, 'Test 41');
test(countFairPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 15), 37, 'Test 42');
test(countFairPairs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 30, 170), 43, 'Test 43');
test(countFairPairs([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 500, 1500), 37, 'Test 44');
test(countFairPairs([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 20, 80), 16, 'Test 45');
test(countFairPairs([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 10, 20), 64, 'Test 46');
test(countFairPairs([5, 2, 8, 3, 1, 9, 6, 4, 7, 10], 5, 15), 37, 'Test 47');
test(countFairPairs([1, 2, 3, 4, 5], 3, 9), 10, 'Test 48');
test(countFairPairs([10, 20, 30, 40, 50], 50, 80), 7, 'Test 49');
test(countFairPairs([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2, 2), 105, 'Test 50');
test(countFairPairs([-5, -4, -3, -2, -1], -8, -2), 9, 'Test 51');
test(countFairPairs([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 5, 10), 37, 'Test 52');
test(countFairPairs([1000000000, -1000000000, 500000000, -500000000, 250000000, -250000000], -1500000000, 1500000000), 15, 'Test 53');
test(countFairPairs([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 2), 190, 'Test 54');
test(countFairPairs([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 1000, 2000), 29, 'Test 55');
test(countFairPairs([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 20, 20), 105, 'Test 56');
test(countFairPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15, 18), 8, 'Test 57');
test(countFairPairs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 100, 200), 29, 'Test 58');
test(countFairPairs([1,3,5,7,9,11,13,15,17,19], 10, 20), 21, 'Test 59');
test(countFairPairs([1000000000, -1000000000, 500000000, -500000000, 0], -1500000000, 1500000000), 10, 'Test 60');
test(countFairPairs([5,-5,15,-15,25,-25,35,-35,45,-45], -30, 30), 27, 'Test 61');
test(countFairPairs([1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9, 10], 6, 12), 40, 'Test 62');
test(countFairPairs([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100], -200, -100), 29, 'Test 63');
test(countFairPairs([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], 5000, 15000), 37, 'Test 64');
test(countFairPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 18, 20), 26, 'Test 65');
test(countFairPairs([0,0,0,0,0,0,0,0,0,0], 0, 0), 45, 'Test 66');
test(countFairPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10, 30), 149, 'Test 67');
test(countFairPairs([1000000000, -1000000000, 500000000, -500000000, 250000000], -1500000000, 1500000000), 10, 'Test 68');
test(countFairPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15, 20), 9, 'Test 69');
test(countFairPairs([-5, 0, 5, 10, 15, 20, 25, 30, 35, 40], 10, 60), 37, 'Test 70');
test(countFairPairs([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2, 2), 190, 'Test 71');
test(countFairPairs([5, -5, 15, -15, 25, -25, 35, -35], -20, 20), 16, 'Test 72');
test(countFairPairs([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], -20, -10), 29, 'Test 73');
test(countFairPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 20, 30), 84, 'Test 74');
test(countFairPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 30, 40), 30, 'Test 75');
test(countFairPairs([1, 2, 3, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10], 6, 12), 49, 'Test 76');
test(countFairPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5, 15), 47, 'Test 77');
test(countFairPairs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 190, 200), 1, 'Test 78');
test(countFairPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 18, 30), 25, 'Test 79');
test(countFairPairs([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 1000, 1900), 29, 'Test 80');
test(countFairPairs([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 5, 10), 23, 'Test 81');
test(countFairPairs([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100], -150, -50), 37, 'Test 82');
test(countFairPairs([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 3, 19), 188, 'Test 83');
test(countFairPairs([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 5, 15), 37, 'Test 84');
test(countFairPairs([-1,-3,-5,-7,-9,-11,-13,-15,-17,-19], -20, -10), 21, 'Test 85');
test(countFairPairs([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105], 100, 200), 35, 'Test 86');
test(countFairPairs([-9, -7, -5, -3, -1, 1, 3, 5, 7, 9], -18, 18), 45, 'Test 87');
test(countFairPairs([10,20,30,40,50,60,70,80,90,100], 50, 150), 37, 'Test 88');
test(countFairPairs([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0, 0), 45, 'Test 89');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

