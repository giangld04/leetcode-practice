// Test: 1686. Stone Game Vi
// 106 test cases from LeetCodeDataset
// Run: node test.js

const { stoneGameVI } = require("./solution");

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

console.log("\n1686. Stone Game Vi\n");

test(stoneGameVI([1,2], [3,1]), 0, 'Test 1');
test(stoneGameVI([1,2,3,4,5], [5,4,3,2,1]), 1, 'Test 2');
test(stoneGameVI([9,9,9,9,9], [1,1,1,1,1]), 1, 'Test 3');
test(stoneGameVI([5,3,1,4], [4,1,2,3]), 1, 'Test 4');
test(stoneGameVI([10,20,30], [30,20,10]), 1, 'Test 5');
test(stoneGameVI([1,3], [2,1]), 1, 'Test 6');
test(stoneGameVI([2,2,2,2,2], [3,3,3,3,3]), 0, 'Test 7');
test(stoneGameVI([1,1,1,1], [1,1,1,1]), 0, 'Test 8');
test(stoneGameVI([1,1,1,1,1], [9,9,9,9,9]), -1, 'Test 9');
test(stoneGameVI([7,8,9], [9,8,7]), 1, 'Test 10');
test(stoneGameVI([2,4,3], [1,6,7]), -1, 'Test 11');
test(stoneGameVI([10,10,10,10], [10,10,10,10]), 0, 'Test 12');
test(stoneGameVI([5,3,8,2], [4,1,7,3]), 1, 'Test 13');
test(stoneGameVI([100,100,100], [100,100,100]), 1, 'Test 14');
test(stoneGameVI([99,98,97], [1,2,3]), 1, 'Test 15');
test(stoneGameVI([100,1,1,1], [1,100,1,1]), 0, 'Test 16');
test(stoneGameVI([30,20,10], [10,20,30]), 1, 'Test 17');
test(stoneGameVI([5,5,5,5], [5,5,5,5]), 0, 'Test 18');
test(stoneGameVI([1,1,1,1,1], [1,1,1,1,1]), 1, 'Test 19');
test(stoneGameVI([99, 1, 99, 1, 99, 1], [1, 99, 1, 99, 1, 99]), 0, 'Test 20');
test(stoneGameVI([1, 100, 1, 100, 1, 100, 1, 100, 1, 100], [100, 1, 100, 1, 100, 1, 100, 1, 100, 1]), 0, 'Test 21');
test(stoneGameVI([80,70,60,50,40,30,20,10], [10,20,30,40,50,60,70,80]), 0, 'Test 22');
test(stoneGameVI([99, 50, 25, 10, 5], [1, 1, 1, 1, 1]), 1, 'Test 23');
test(stoneGameVI([100, 50, 25, 12, 6], [5, 20, 40, 60, 80]), 1, 'Test 24');
test(stoneGameVI([100, 1, 100, 1, 100], [1, 100, 1, 100, 1]), 1, 'Test 25');
test(stoneGameVI([5,8,7,12,9], [4,6,5,10,7]), 1, 'Test 26');
test(stoneGameVI([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 1, 'Test 27');
test(stoneGameVI([10,10,10,10,10,10,10,10,10,10], [9,9,9,9,9,9,9,9,9,9]), 1, 'Test 28');
test(stoneGameVI([3,2,3,4,5], [5,4,3,2,3]), 1, 'Test 29');
test(stoneGameVI([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 30');
test(stoneGameVI([100,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,100]), 0, 'Test 31');
test(stoneGameVI([50, 30, 20], [1, 20, 30]), 1, 'Test 32');
test(stoneGameVI([100, 99, 98, 97, 96], [95, 94, 93, 92, 91]), 1, 'Test 33');
test(stoneGameVI([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 0, 'Test 34');
test(stoneGameVI([5, 5, 5, 5], [6, 6, 6, 6]), -1, 'Test 35');
test(stoneGameVI([1, 5, 9, 13, 17], [16, 12, 8, 4, 0]), 1, 'Test 36');
test(stoneGameVI([23,45,67,89,10], [10,89,67,45,23]), 1, 'Test 37');
test(stoneGameVI([23, 45, 67, 89, 12], [12, 89, 67, 45, 23]), 1, 'Test 38');
test(stoneGameVI([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 0, 'Test 39');
test(stoneGameVI([50, 30, 20, 10, 1], [10, 20, 30, 40, 50]), 1, 'Test 40');
test(stoneGameVI([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1, 'Test 41');
test(stoneGameVI([99, 98, 97, 96, 95], [1, 2, 3, 4, 5]), 1, 'Test 42');
test(stoneGameVI([50, 50, 50, 50, 50], [50, 50, 50, 50, 50]), 1, 'Test 43');
test(stoneGameVI([1,10,2,9,3,8,4,7,5,6], [10,1,9,2,8,3,7,4,6,5]), 0, 'Test 44');
test(stoneGameVI([5,2,3,3,4], [4,3,2,3,5]), 1, 'Test 45');
test(stoneGameVI([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 1, 'Test 46');
test(stoneGameVI([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75], [75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5]), 1, 'Test 47');
test(stoneGameVI([100, 50, 25, 10, 5], [5, 10, 25, 50, 100]), 1, 'Test 48');
test(stoneGameVI([30,20,10,50,40,60,70], [70,60,50,40,30,20,10]), 1, 'Test 49');
test(stoneGameVI([50, 50, 50], [100, 100, 100]), 0, 'Test 50');
test(stoneGameVI([99, 1, 98, 2, 97, 3, 96, 4, 95, 5], [5, 95, 4, 96, 3, 97, 2, 98, 1, 99]), 0, 'Test 51');
test(stoneGameVI([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86], [86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]), 1, 'Test 52');
test(stoneGameVI([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1, 'Test 53');
test(stoneGameVI([100, 100, 100, 100, 100], [99, 99, 99, 99, 99]), 1, 'Test 54');
test(stoneGameVI([80, 20, 60, 40, 100, 50, 70], [70, 50, 100, 60, 20, 40, 80]), 1, 'Test 55');
test(stoneGameVI([7, 14, 21, 28, 35, 42], [6, 12, 18, 24, 30, 36]), 1, 'Test 56');
test(stoneGameVI([10, 10, 10, 10], [20, 20, 20, 20]), -1, 'Test 57');
test(stoneGameVI([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 0, 'Test 58');
test(stoneGameVI([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 59');
test(stoneGameVI([100, 90, 80, 70, 60], [60, 70, 80, 90, 100]), 1, 'Test 60');
test(stoneGameVI([100,100,1,1,1], [1,1,100,100,100]), 1, 'Test 61');
test(stoneGameVI([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]), 1, 'Test 62');
test(stoneGameVI([5, 15, 25, 35, 45, 55], [55, 45, 35, 25, 15, 5]), 0, 'Test 63');
test(stoneGameVI([99, 98, 97, 96, 95, 94, 93, 92, 91, 90], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1, 'Test 64');
test(stoneGameVI([1,3,5,7,9,11,13,15,17,19], [19,17,15,13,11,9,7,5,3,1]), 0, 'Test 65');
test(stoneGameVI([100, 100, 100, 100, 100], [50, 50, 50, 50, 50]), 1, 'Test 66');
test(stoneGameVI([90, 20, 30, 10, 50], [50, 90, 10, 30, 20]), 1, 'Test 67');
test(stoneGameVI([10, 10, 10, 10, 10, 10], [9, 9, 9, 9, 9, 9]), 1, 'Test 68');
test(stoneGameVI([99,98,97,96,95,94,93,92,91,90], [1,2,3,4,5,6,7,8,9,10]), 1, 'Test 69');
test(stoneGameVI([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 0, 'Test 70');
test(stoneGameVI([5,5,5,5,5,5,5,5,5,5], [5,5,5,5,5,5,5,5,5,5]), 0, 'Test 71');
test(stoneGameVI([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 1, 'Test 72');
test(stoneGameVI([100, 1, 2, 3, 4], [1, 100, 2, 3, 4]), 1, 'Test 73');
test(stoneGameVI([100, 1, 50, 25, 75], [90, 99, 5, 20, 70]), 1, 'Test 74');
test(stoneGameVI([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 0, 'Test 75');
test(stoneGameVI([90,90,90,90,90,90,90,90,90,90], [91,91,91,91,91,91,91,91,91,91]), -1, 'Test 76');
test(stoneGameVI([2, 3, 5, 7, 11], [11, 7, 5, 3, 2]), 1, 'Test 77');
test(stoneGameVI([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 0, 'Test 78');
test(stoneGameVI([30, 30, 30, 30, 30], [30, 30, 30, 30, 30]), 1, 'Test 79');
test(stoneGameVI([30, 20, 10], [10, 20, 30]), 1, 'Test 80');
test(stoneGameVI([10, 1, 10, 1, 10, 1, 10, 1], [1, 10, 1, 10, 1, 10, 1, 10]), 0, 'Test 81');
test(stoneGameVI([10,20,30,40,50,60,70,80,90,100], [100,90,80,70,60,50,40,30,20,10]), 0, 'Test 82');
test(stoneGameVI([1, 3, 5, 7, 9, 11, 13], [2, 4, 6, 8, 10, 12, 14]), 1, 'Test 83');
test(stoneGameVI([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), -1, 'Test 84');
test(stoneGameVI([10, 20, 30, 40, 50], [50, 40, 30, 20, 10]), 1, 'Test 85');
test(stoneGameVI([50, 50, 50, 50, 50], [40, 40, 40, 40, 60]), 1, 'Test 86');
test(stoneGameVI([50,40,30,20,10,10,20,30,40,50], [10,20,30,40,50,50,40,30,20,10]), 0, 'Test 87');
test(stoneGameVI([99, 1, 2, 3, 4], [4, 3, 2, 1, 99]), 1, 'Test 88');
test(stoneGameVI([50, 40, 30, 20, 10], [10, 20, 30, 40, 50]), 1, 'Test 89');
test(stoneGameVI([10, 30, 20, 50, 40], [40, 20, 30, 10, 50]), 1, 'Test 90');
test(stoneGameVI([50, 50, 50, 50, 50], [50, 50, 50, 50, 51]), 1, 'Test 91');
test(stoneGameVI([5, 15, 25, 35, 45, 55, 65], [65, 55, 45, 35, 25, 15, 5]), 1, 'Test 92');
test(stoneGameVI([10,20,30,40,50], [50,40,30,20,10]), 1, 'Test 93');
test(stoneGameVI([50,25,50,75,25], [75,50,25,25,50]), 1, 'Test 94');
test(stoneGameVI([1, 1, 1, 2, 2, 2, 3, 3, 3], [3, 3, 3, 2, 2, 2, 1, 1, 1]), 1, 'Test 95');
test(stoneGameVI([100,1,1,1,1], [1,1,1,1,100]), 1, 'Test 96');
test(stoneGameVI([90, 80, 70, 60, 50, 40, 30, 20, 10], [10, 20, 30, 40, 50, 60, 70, 80, 90]), 1, 'Test 97');
test(stoneGameVI([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 98');
test(stoneGameVI([90,10,90,10,90], [10,90,10,90,10]), 1, 'Test 99');
test(stoneGameVI([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 1, 'Test 100');
test(stoneGameVI([42, 23, 17, 5, 99], [99, 5, 17, 23, 42]), 1, 'Test 101');
test(stoneGameVI([100,50,1,1,1,1,1,1,1,1], [1,1,99,99,99,99,99,99,99,99]), -1, 'Test 102');
test(stoneGameVI([30,40,50,60,70,80,90,100,110,120], [10,20,30,40,50,60,70,80,90,100]), 1, 'Test 103');
test(stoneGameVI([70, 60, 50, 40, 30, 20, 10], [10, 20, 30, 40, 50, 60, 70]), 1, 'Test 104');
test(stoneGameVI([90,10,20,30,40,50,60,70,80], [10,90,80,70,60,50,40,30,20]), 1, 'Test 105');
test(stoneGameVI([100], [1]), 1, 'Test 106');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

