// Test: 2740. Find The Value Of The Partition
// 106 test cases from LeetCodeDataset
// Run: node test.js

const { findValueOfPartition } = require("./solution");

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

console.log("\n2740. Find The Value Of The Partition\n");

test(findValueOfPartition([1,1000000000]), 999999999, 'Test 1');
test(findValueOfPartition([5,1,3,2,4]), 1, 'Test 2');
test(findValueOfPartition([7,6,5,4,3,2,1]), 1, 'Test 3');
test(findValueOfPartition([2,2,2,2,2]), 0, 'Test 4');
test(findValueOfPartition([5,1,3,19,18]), 1, 'Test 5');
test(findValueOfPartition([5,6,1,4,2]), 1, 'Test 6');
test(findValueOfPartition([4,2,1,3]), 1, 'Test 7');
test(findValueOfPartition([10,20,30,40,50]), 10, 'Test 8');
test(findValueOfPartition([5,2,3,1,4]), 1, 'Test 9');
test(findValueOfPartition([2,3,1,2]), 0, 'Test 10');
test(findValueOfPartition([2,2,2,2]), 0, 'Test 11');
test(findValueOfPartition([9,8,7,6,5,4,3,2,1]), 1, 'Test 12');
test(findValueOfPartition([100,1,10]), 9, 'Test 13');
test(findValueOfPartition([1,3,2,4]), 1, 'Test 14');
test(findValueOfPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]), 1, 'Test 15');
test(findValueOfPartition([500000000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1000000000]), 1, 'Test 16');
test(findValueOfPartition([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 5, 'Test 17');
test(findValueOfPartition([1000000000,1,1000000000,1,1000000000,1,1000000000,1,1000000000,1]), 0, 'Test 18');
test(findValueOfPartition([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 100, 'Test 19');
test(findValueOfPartition([1000000000, 1, 1000000000, 1, 1000000000, 1, 1000000000, 1, 1000000000, 1, 1000000000]), 0, 'Test 20');
test(findValueOfPartition([1,2,3,4,5,6,7,8,9,10]), 1, 'Test 21');
test(findValueOfPartition([50, 20, 30, 10, 40, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 10, 'Test 22');
test(findValueOfPartition([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 1, 'Test 23');
test(findValueOfPartition([50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 1, 'Test 24');
test(findValueOfPartition([9, 8, 7, 6, 5, 4, 3, 2, 1]), 1, 'Test 25');
test(findValueOfPartition([99, 100, 98, 97, 96, 95]), 1, 'Test 26');
test(findValueOfPartition([9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]), 1, 'Test 27');
test(findValueOfPartition([1, 1000000000, 2, 999999999, 3, 999999998, 4, 999999997]), 1, 'Test 28');
test(findValueOfPartition([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 2, 'Test 29');
test(findValueOfPartition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]), 0, 'Test 30');
test(findValueOfPartition([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 999999999, 99999999, 9999999, 999999, 99999, 9999, 999, 99, 9, 8]), 1, 'Test 31');
test(findValueOfPartition([5, 5, 5, 5, 5, 6, 6, 6, 6, 6]), 0, 'Test 32');
test(findValueOfPartition([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 0, 'Test 33');
test(findValueOfPartition([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 1, 'Test 34');
test(findValueOfPartition([5, 3, 1, 9, 7, 2, 8, 6, 4, 10, 12, 11, 13, 14, 15, 16, 17, 18, 19, 20]), 1, 'Test 35');
test(findValueOfPartition([1000000000,1,2,3,4,5,6,7,8,9]), 1, 'Test 36');
test(findValueOfPartition([1000000000, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 1, 'Test 37');
test(findValueOfPartition([1, 1000000000, 2, 999999999, 3, 999999998, 4, 999999997, 5, 999999996, 6, 999999995, 7, 999999994, 8, 999999993, 9, 999999992]), 1, 'Test 38');
test(findValueOfPartition([7, 12, 1, 5, 3, 8, 6, 10, 2, 4, 9, 11]), 1, 'Test 39');
test(findValueOfPartition([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), 2, 'Test 40');
test(findValueOfPartition([999999999, 1000000000, 1, 2, 3, 4, 5, 6, 7, 8]), 1, 'Test 41');
test(findValueOfPartition([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15]), 0, 'Test 42');
test(findValueOfPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 100]), 1, 'Test 43');
test(findValueOfPartition([9, 8, 7, 6, 5, 4, 3, 2, 1, 10]), 1, 'Test 44');
test(findValueOfPartition([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]), 1, 'Test 45');
test(findValueOfPartition([500000000, 400000000, 300000000, 200000000, 100000000, 1, 2, 3, 4, 5]), 1, 'Test 46');
test(findValueOfPartition([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4]), 0, 'Test 47');
test(findValueOfPartition([100, 99, 98, 97, 96, 95, 94, 93, 92, 91]), 1, 'Test 48');
test(findValueOfPartition([100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119]), 1, 'Test 49');
test(findValueOfPartition([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]), 2, 'Test 50');
test(findValueOfPartition([5,5,5,5,5,5,5,5,5,5]), 0, 'Test 51');
test(findValueOfPartition([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1]), 9, 'Test 52');
test(findValueOfPartition([150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 10, 'Test 53');
test(findValueOfPartition([1000000000, 1, 999999999, 2, 999999998, 3, 999999997, 4, 999999996, 5]), 1, 'Test 54');
test(findValueOfPartition([1, 500000000, 2, 400000000, 3, 300000000, 4, 200000000, 5, 100000000]), 1, 'Test 55');
test(findValueOfPartition([10,9,8,7,6,5,4,3,2,1,11,12,13,14,15,16,17,18,19,20]), 1, 'Test 56');
test(findValueOfPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 1, 'Test 57');
test(findValueOfPartition([10,9,8,7,6,5,4,3,2,1]), 1, 'Test 58');
test(findValueOfPartition([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 59');
test(findValueOfPartition([1, 1, 1, 1, 1, 1, 1, 1, 1, 2]), 0, 'Test 60');
test(findValueOfPartition([7, 3, 10, 1, 5, 8, 6, 9, 2, 4]), 1, 'Test 61');
test(findValueOfPartition([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]), 2, 'Test 62');
test(findValueOfPartition([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 2, 'Test 63');
test(findValueOfPartition([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]), 9, 'Test 64');
test(findValueOfPartition([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), 0, 'Test 65');
test(findValueOfPartition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1000000000]), 0, 'Test 66');
test(findValueOfPartition([10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000]), 10000, 'Test 67');
test(findValueOfPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1, 'Test 68');
test(findValueOfPartition([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 10, 'Test 69');
test(findValueOfPartition([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]), 2, 'Test 70');
test(findValueOfPartition([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 2, 'Test 71');
test(findValueOfPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 1000000000]), 1, 'Test 72');
test(findValueOfPartition([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10]), 0, 'Test 73');
test(findValueOfPartition([1,10,2,9,3,8,4,7,5,6]), 1, 'Test 74');
test(findValueOfPartition([9, 7, 5, 3, 1, 10, 8, 6, 4, 2]), 1, 'Test 75');
test(findValueOfPartition([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 5]), 5, 'Test 76');
test(findValueOfPartition([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70]), 1, 'Test 77');
test(findValueOfPartition([1,2,3,1000000000]), 1, 'Test 78');
test(findValueOfPartition([100,50,150,200,250,300,350,400,450,500,550,600]), 50, 'Test 79');
test(findValueOfPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 1, 'Test 80');
test(findValueOfPartition([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1]), 0, 'Test 81');
test(findValueOfPartition([1000000000, 1, 999999999, 2, 999999998, 3, 999999997]), 1, 'Test 82');
test(findValueOfPartition([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50]), 2, 'Test 83');
test(findValueOfPartition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 84');
test(findValueOfPartition([1,100,2,99,3,98,4,97,5,96]), 1, 'Test 85');
test(findValueOfPartition([1, 1000000000, 2, 999999999, 3, 999999998, 4, 999999997, 5, 999999996]), 1, 'Test 86');
test(findValueOfPartition([50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]), 1, 'Test 87');
test(findValueOfPartition([500000000, 500000001, 500000002, 500000003, 500000004, 500000005, 500000006, 500000007, 500000008, 500000009]), 1, 'Test 88');
test(findValueOfPartition([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 2, 'Test 89');
test(findValueOfPartition([7, 15, 2, 8, 9, 10, 11, 12, 3, 6, 4, 5]), 1, 'Test 90');
test(findValueOfPartition([10, 20, 30, 40, 50, 51, 60, 70, 80, 90]), 1, 'Test 91');
test(findValueOfPartition([1000000000, 1, 2, 3, 4, 5]), 1, 'Test 92');
test(findValueOfPartition([1000000000, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 1, 'Test 93');
test(findValueOfPartition([1,1000000000,2,999999999,3,999999998,4,999999997,5,999999996]), 1, 'Test 94');
test(findValueOfPartition([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 0, 'Test 95');
test(findValueOfPartition([1, 1000000000, 2, 999999999, 3, 999999998]), 1, 'Test 96');
test(findValueOfPartition([1, 1, 1, 1, 1, 1, 1, 2]), 0, 'Test 97');
test(findValueOfPartition([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 10, 'Test 98');
test(findValueOfPartition([1000000000, 1, 2, 3, 999999999]), 1, 'Test 99');
test(findValueOfPartition([7, 10, 3, 15, 8, 12]), 1, 'Test 100');
test(findValueOfPartition([10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 30, 30, 30, 30, 30]), 0, 'Test 101');
test(findValueOfPartition([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 1, 'Test 102');
test(findValueOfPartition([1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,1000000000]), 0, 'Test 103');
test(findValueOfPartition([7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8]), 0, 'Test 104');
test(findValueOfPartition([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 10, 'Test 105');
test(findValueOfPartition([999999999,999999998,999999997,999999996,999999995]), 1, 'Test 106');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

