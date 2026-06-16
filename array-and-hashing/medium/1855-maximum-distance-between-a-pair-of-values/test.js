// Test: 1855. Maximum Distance Between A Pair Of Values
// 75 test cases from LeetCodeDataset
// Run: node test.js

const { maxDistance } = require("./solution");

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

console.log("\n1855. Maximum Distance Between A Pair Of Values\n");

test(maxDistance([100], [101]), 0, 'Test 1');
test(maxDistance([30,29,19,5], [25,25,25,25,25]), 2, 'Test 2');
test(maxDistance([5,4,3,2,1], [5,4,3,2,1]), 0, 'Test 3');
test(maxDistance([10,9,8,7,6], [10,9,8,7,6]), 0, 'Test 4');
test(maxDistance([5], [10]), 0, 'Test 5');
test(maxDistance([10,9,8,7], [7,7,7,7]), 0, 'Test 6');
test(maxDistance([5], [5]), 0, 'Test 7');
test(maxDistance([1,1,1,1], [1,1,1,1]), 3, 'Test 8');
test(maxDistance([10], [5]), 0, 'Test 9');
test(maxDistance([5,5,5,5], [5,5,5,5,5,5]), 5, 'Test 10');
test(maxDistance([10,9,8,7,6], [6,5,4,3,2,1]), 0, 'Test 11');
test(maxDistance([1,1,1,1,1], [10,9,8,7,6,5,4,3,2,1]), 9, 'Test 12');
test(maxDistance([10,9,8,7,6], [5,4,3,2,1]), 0, 'Test 13');
test(maxDistance([100,90], [95,85]), 0, 'Test 14');
test(maxDistance([100,90,80], [100,90,80,70,60]), 0, 'Test 15');
test(maxDistance([99999,99998,99997], [100000,99999,99998]), 1, 'Test 16');
test(maxDistance([1], [2]), 0, 'Test 17');
test(maxDistance([1,1,1,1,1], [5,5,5,5,5]), 4, 'Test 18');
test(maxDistance([2,2,2], [10,10,1]), 1, 'Test 19');
test(maxDistance([100,50,25,10], [100,100,100,100]), 3, 'Test 20');
test(maxDistance([55,30,5,4,2], [100,20,10,10,5]), 2, 'Test 21');
test(maxDistance([1], [1]), 0, 'Test 22');
test(maxDistance([10,9,8,7,6], [15,14,13,12,11]), 4, 'Test 23');
test(maxDistance([100000], [100000]), 0, 'Test 24');
test(maxDistance([50,40,30,20,10], [100,80,60,40,20]), 2, 'Test 25');
test(maxDistance([1,2,3,4,5], [10,9,8,7,6,5,4,3,2,1]), 9, 'Test 26');
test(maxDistance([30, 29, 19, 5], [25, 25, 25, 25, 25, 20, 15, 10, 5]), 5, 'Test 27');
test(maxDistance([100,90,80,70,60,50,40,30,20,10], [100,100,100,100,100,100,100,100,100,100]), 9, 'Test 28');
test(maxDistance([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 9, 'Test 29');
test(maxDistance([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [20, 19, 18, 17, 16, 15, 14, 13, 12, 11]), 9, 'Test 30');
test(maxDistance([95, 85, 75, 65, 55], [95, 85, 75, 65, 55, 45, 35, 25, 15, 5]), 0, 'Test 31');
test(maxDistance([1, 1, 1, 1, 1], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 9, 'Test 32');
test(maxDistance([10,9,8,7,6,5,4,3,2,1], [10,9,8,7,6,5,4,3,2,1]), 0, 'Test 33');
test(maxDistance([100000,100000,100000,100000,100000], [100000,100000,100000,100000,100000,100000,100000,100000,100000,100000]), 9, 'Test 34');
test(maxDistance([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5, 4, 3, 2, 1]), 9, 'Test 35');
test(maxDistance([5,5,5,5,5,5,5,5,5,5], [5,5,5,5,5,5,5,5,5,5]), 9, 'Test 36');
test(maxDistance([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5]), 9, 'Test 37');
test(maxDistance([1000,500,250,125,62,31,15,7,3,1], [1000,900,800,700,600,500,400,300,200,100]), 5, 'Test 38');
test(maxDistance([1], [100000]), 0, 'Test 39');
test(maxDistance([50, 40, 30, 20, 10], [55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5]), 5, 'Test 40');
test(maxDistance([5,5,5,5,5,5,5,5,5,5], [10,9,8,7,6,5,4,3,2,1]), 5, 'Test 41');
test(maxDistance([100,90,80,70,60,50,40,30,20,10], [99,89,79,69,59,49,39,29,19,9]), 0, 'Test 42');
test(maxDistance([999,888,777,666,555,444,333,222,111,0], [999,888,777,666,555,444,333,222,111,0]), 0, 'Test 43');
test(maxDistance([50, 25, 10, 1], [50, 40, 30, 25, 20, 15, 10, 5, 1]), 5, 'Test 44');
test(maxDistance([1, 1, 1, 1, 1], [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 1]), 10, 'Test 45');
test(maxDistance([90, 80, 70, 60, 50], [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 1, 'Test 46');
test(maxDistance([1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1]), 9, 'Test 47');
test(maxDistance([99,98,97,96,95,94,93,92,91,90], [100,99,98,97,96,95,94,93,92,91,90]), 1, 'Test 48');
test(maxDistance([10, 5, 3, 2], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 5, 'Test 49');
test(maxDistance([1,2,3,4,5], [5,4,3,2,1]), 4, 'Test 50');
test(maxDistance([100,90,80,70,60,50,40,30,20,10], [10,20,30,40,50,60,70,80,90,100]), 4, 'Test 51');
test(maxDistance([20,10,5,2,1], [50,40,30,20,10,5,2,1]), 3, 'Test 52');
test(maxDistance([50,40,30,20,10], [100,90,80,70,60,50,40,30,20,10]), 5, 'Test 53');
test(maxDistance([100], [100,100,100,100,100,100,100,100,100,100]), 9, 'Test 54');
test(maxDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1]), 10, 'Test 55');
test(maxDistance([50,30,10], [60,50,40,30,20,10]), 3, 'Test 56');
test(maxDistance([10, 9, 8, 7, 6], [10, 9, 8, 7, 6]), 0, 'Test 57');
test(maxDistance([90,70,50,30,10], [100,80,60,40,20]), 0, 'Test 58');
test(maxDistance([100, 50, 25], [150, 120, 90, 70, 50, 30, 10]), 3, 'Test 59');
test(maxDistance([99,98,97,96,95,94,93,92,91,90], [100,100,100,100,100,100,100,100,100,100]), 9, 'Test 60');
test(maxDistance([1000, 900, 800, 700, 600], [1000, 950, 900, 850, 800, 750, 700, 650, 600, 550, 500]), 4, 'Test 61');
test(maxDistance([99999,88888,77777,66666,55555,44444,33333,22222,11111,1], [100000,99999,88888,77777,66666,55555,44444,33333,22222,11111]), 1, 'Test 62');
test(maxDistance([9, 8, 7, 6, 5, 4, 3, 2, 1], [9, 8, 7, 6, 5, 4, 3, 2, 1]), 0, 'Test 63');
test(maxDistance([10, 10, 10, 10, 10, 10], [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]), 14, 'Test 64');
test(maxDistance([5, 4, 3, 2, 1], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 5, 'Test 65');
test(maxDistance([1000,900,800,700,600,500,400,300,200,100], [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000]), 9, 'Test 66');
test(maxDistance([100, 50, 25, 10, 1], [200, 150, 100, 90, 80, 70, 60, 50, 40, 30, 25, 20, 15, 10, 5]), 10, 'Test 67');
test(maxDistance([10, 5, 5, 5, 5], [20, 15, 15, 10, 10, 10, 5, 5, 5, 5]), 8, 'Test 68');
test(maxDistance([10,9,8,7,6,5,4,3,2,1], [1,2,3,4,5,6,7,8,9,10]), 4, 'Test 69');
test(maxDistance([5, 4, 4, 3, 3, 3, 2, 1], [9, 8, 7, 6, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1]), 9, 'Test 70');
test(maxDistance([100,50,30,20,10], [150,140,130,120,110,100,90,80,70,60,50,40,30,20,10]), 10, 'Test 71');
test(maxDistance([100, 50, 25, 10, 5], [100, 75, 50, 25, 10, 5, 2]), 1, 'Test 72');
test(maxDistance([10,10,10,10,10], [20,20,20,20,20]), 4, 'Test 73');
test(maxDistance([100000], [1]), 0, 'Test 74');
test(maxDistance([100, 90, 80, 70, 60], [100, 95, 90, 85, 80, 75, 70, 65, 60, 55]), 4, 'Test 75');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

