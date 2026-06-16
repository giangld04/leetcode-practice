// Test: 1953. Maximum Number Of Weeks For Which You Can Work
// 80 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfWeeks } = require("./solution");

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

console.log("\n1953. Maximum Number Of Weeks For Which You Can Work\n");

test(numberOfWeeks([10,9,8,7,6,5,4,3,2,1]), 55, 'Test 1');
test(numberOfWeeks([3,3,3]), 9, 'Test 2');
test(numberOfWeeks([1,1,1,1,1]), 5, 'Test 3');
test(numberOfWeeks([10,5,1]), 13, 'Test 4');
test(numberOfWeeks([1000000000,1,1]), 5, 'Test 5');
test(numberOfWeeks([1,2,3]), 6, 'Test 6');
test(numberOfWeeks([5,2,1]), 7, 'Test 7');
test(numberOfWeeks([1000000000,1000000000,1000000000]), 3000000000, 'Test 8');
test(numberOfWeeks([1,1,1000000000]), 5, 'Test 9');
test(numberOfWeeks([1,2,3,4,5,6,7,8,9,10]), 55, 'Test 10');
test(numberOfWeeks([1]), 1, 'Test 11');
test(numberOfWeeks([1,1000000000]), 3, 'Test 12');
test(numberOfWeeks([5,5,5,5,5,5]), 30, 'Test 13');
test(numberOfWeeks([10,1,1]), 5, 'Test 14');
test(numberOfWeeks([1,1000000000,1]), 5, 'Test 15');
test(numberOfWeeks([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 1200, 'Test 16');
test(numberOfWeeks([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 20, 'Test 17');
test(numberOfWeeks([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 200, 'Test 18');
test(numberOfWeeks([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 1023, 'Test 19');
test(numberOfWeeks([1000000000, 1000000000, 1000000000]), 3000000000, 'Test 20');
test(numberOfWeeks([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 150, 'Test 21');
test(numberOfWeeks([1000000000,1,1,1,1,1,1,1,1,1]), 19, 'Test 22');
test(numberOfWeeks([1000000000, 500000000, 100000000, 50000000, 10000000, 5000000, 1000000, 500000, 100000, 50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1]), 1333333333, 'Test 23');
test(numberOfWeeks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55, 'Test 24');
test(numberOfWeeks([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]), 10000, 'Test 25');
test(numberOfWeeks([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 50, 'Test 26');
test(numberOfWeeks([1000000000, 999999999, 1, 2, 3, 4, 5]), 2000000014, 'Test 27');
test(numberOfWeeks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 120, 'Test 28');
test(numberOfWeeks([100, 200, 300, 400]), 1000, 'Test 29');
test(numberOfWeeks([1000000000, 999999999, 888888888]), 2888888887, 'Test 30');
test(numberOfWeeks([1, 2, 3, 4, 5]), 15, 'Test 31');
test(numberOfWeeks([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]), 1596, 'Test 32');
test(numberOfWeeks([500000000, 500000000, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1000000009, 'Test 33');
test(numberOfWeeks([100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 1000, 'Test 34');
test(numberOfWeeks([10, 10, 10, 10, 10, 10, 10, 10, 10, 100]), 181, 'Test 35');
test(numberOfWeeks([10, 10, 10, 10, 10]), 50, 'Test 36');
test(numberOfWeeks([100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 550, 'Test 37');
test(numberOfWeeks([999999999, 1, 1, 1]), 7, 'Test 38');
test(numberOfWeeks([10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000]), 550000, 'Test 39');
test(numberOfWeeks([1000000000, 1000000000, 1000000000, 1]), 3000000001, 'Test 40');
test(numberOfWeeks([10,20,30,40,50]), 150, 'Test 41');
test(numberOfWeeks([5, 5, 5, 5, 5, 5]), 30, 'Test 42');
test(numberOfWeeks([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1]), 5000000001, 'Test 43');
test(numberOfWeeks([10, 20, 30, 40, 50]), 150, 'Test 44');
test(numberOfWeeks([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 55, 'Test 45');
test(numberOfWeeks([9, 8, 7, 6, 5, 4, 3, 2, 1]), 45, 'Test 46');
test(numberOfWeeks([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1]), 10000000001, 'Test 47');
test(numberOfWeeks([1,1,1,1,1,1,1,1,1,1,2,3,4,5,6,7,8,9,10]), 64, 'Test 48');
test(numberOfWeeks([100,99,98,97,96,95]), 585, 'Test 49');
test(numberOfWeeks([999999999, 999999999, 1]), 1999999999, 'Test 50');
test(numberOfWeeks([1000000000, 500000000, 250000000, 125000000]), 1750000001, 'Test 51');
test(numberOfWeeks([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), 32767, 'Test 52');
test(numberOfWeeks([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]), 90, 'Test 53');
test(numberOfWeeks([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 5500, 'Test 54');
test(numberOfWeeks([1000, 900, 800, 700, 600, 500, 400, 300, 200, 100]), 5500, 'Test 55');
test(numberOfWeeks([999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991, 999999990]), 9999999945, 'Test 56');
test(numberOfWeeks([100, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 39, 'Test 57');
test(numberOfWeeks([1000000000, 1000000000, 1000000000, 1000000000, 1]), 4000000001, 'Test 58');
test(numberOfWeeks([10,10,10,10,10,10,10,10,10,10,1]), 101, 'Test 59');
test(numberOfWeeks([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 40, 'Test 60');
test(numberOfWeeks([2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1]), 35, 'Test 61');
test(numberOfWeeks([500000000, 500000000, 1]), 1000000001, 'Test 62');
test(numberOfWeeks([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 80, 'Test 63');
test(numberOfWeeks([999999999,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 39, 'Test 64');
test(numberOfWeeks([100, 150, 200, 250]), 700, 'Test 65');
test(numberOfWeeks([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 50, 'Test 66');
test(numberOfWeeks([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 77, 'Test 67');
test(numberOfWeeks([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 110, 'Test 68');
test(numberOfWeeks([500, 400, 300, 200, 100, 50, 25, 12, 6, 3, 1]), 1597, 'Test 69');
test(numberOfWeeks([1000000000, 1, 1000000000, 1, 1000000000, 1, 1000000000]), 4000000003, 'Test 70');
test(numberOfWeeks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 210, 'Test 71');
test(numberOfWeeks([500000000,500000000,500000000,500000000]), 2000000000, 'Test 72');
test(numberOfWeeks([1000000000, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 19, 'Test 73');
test(numberOfWeeks([1, 2, 4, 8, 16, 32, 64]), 127, 'Test 74');
test(numberOfWeeks([2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711]), 46365, 'Test 75');
test(numberOfWeeks([1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120]), 680, 'Test 76');
test(numberOfWeeks([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]), 376, 'Test 77');
test(numberOfWeeks([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 30, 'Test 78');
test(numberOfWeeks([333333333, 333333333, 333333333, 333333333, 333333333, 333333333, 333333333, 333333333, 333333333, 333333333]), 3333333330, 'Test 79');
test(numberOfWeeks([100, 1, 100, 1, 100, 1]), 303, 'Test 80');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

