// Test: 3229. Minimum Operations To Make Array Equal To Target
// 118 test cases from LeetCodeDataset
// Run: node test.js

const { minimumOperations } = require("./solution");

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

console.log("\n3229. Minimum Operations To Make Array Equal To Target\n");

test(minimumOperations([1,100000000,1], [100000000,1,100000000]), 299999997, 'Test 1');
test(minimumOperations([1,3,2], [2,1,4]), 5, 'Test 2');
test(minimumOperations([3,5,1,2], [4,6,2,4]), 2, 'Test 3');
test(minimumOperations([100000000, 100000000, 100000000], [1, 1, 1]), 99999999, 'Test 4');
test(minimumOperations([1,1,1,1], [2,2,2,2]), 1, 'Test 5');
test(minimumOperations([10, 20, 30], [15, 25, 25]), 10, 'Test 6');
test(minimumOperations([10,20,30], [15,25,35]), 5, 'Test 7');
test(minimumOperations([1,2,3], [4,5,6]), 3, 'Test 8');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 18, 'Test 9');
test(minimumOperations([5,5,5,5,5], [5,5,5,5,5]), 0, 'Test 10');
test(minimumOperations([5,5,5,5,5], [3,4,5,6,7]), 4, 'Test 11');
test(minimumOperations([1, 2, 3], [4, 5, 6]), 3, 'Test 12');
test(minimumOperations([5,5,5,5,5], [1,1,1,1,1]), 4, 'Test 13');
test(minimumOperations([1,1,1,1], [1,1,1,1]), 0, 'Test 14');
test(minimumOperations([1,1,1,1,1,1,1,1,1,1], [2,2,2,2,2,2,2,2,2,2]), 1, 'Test 15');
test(minimumOperations([100000000], [100000000]), 0, 'Test 16');
test(minimumOperations([100,200,300,400], [400,300,200,100]), 600, 'Test 17');
test(minimumOperations([100000000, 100000000], [1, 1]), 99999999, 'Test 18');
test(minimumOperations([1,2,3,4,5], [5,4,3,2,1]), 8, 'Test 19');
test(minimumOperations([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [5, 5, 4, 4, 3, 3, 2, 2, 1, 1]), 8, 'Test 20');
test(minimumOperations([10,20,30,40,50,60,70,80,90,100], [100,90,80,70,60,50,40,30,20,10]), 180, 'Test 21');
test(minimumOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]), Error: list index out of range, 'Test 22');
test(minimumOperations([10,10,10,10,10,10,10,10,10,10], [1,2,3,4,5,6,7,8,9,10]), 9, 'Test 23');
test(minimumOperations([1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1]), 0, 'Test 24');
test(minimumOperations([1,3,5,7,9,11,13,15,17,19], [19,17,15,13,11,9,7,5,3,1]), 36, 'Test 25');
test(minimumOperations([1,2,3,4,5], [2,3,4,5,6]), 1, 'Test 26');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,5,4,3,2,1]), 9, 'Test 27');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 38, 'Test 28');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,10,9,8,7,6]), 8, 'Test 29');
test(minimumOperations([1,1,1,1,1], [2,2,2,2,2]), 1, 'Test 30');
test(minimumOperations([2,3,5,7,11,13,17,19,23,29], [31,37,41,43,47,53,59,61,67,71]), 44, 'Test 31');
test(minimumOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 99, 'Test 32');
test(minimumOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 9, 'Test 33');
test(minimumOperations([10,20,30,40,50,60,70,80,90,100], [10,30,50,70,90,110,130,150,170,190]), 90, 'Test 34');
test(minimumOperations([1,1,2,2,3,3], [3,3,2,2,1,1]), 4, 'Test 35');
test(minimumOperations([1,2,3,4,5], [5,1,5,1,5]), 10, 'Test 36');
test(minimumOperations([1,3,5,7,9], [2,4,6,8,10]), 1, 'Test 37');
test(minimumOperations([1,10,100,1000,10000], [10000,1000,100,10,1]), 19998, 'Test 38');
test(minimumOperations([2,2,2,2,2,2,2,2,2,2], [1,2,3,4,5,4,3,2,1,2]), 5, 'Test 39');
test(minimumOperations([1,1,1,1,1,1,1,1,1,1], [2,3,4,5,6,7,8,9,10,11]), 10, 'Test 40');
test(minimumOperations([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 19, 'Test 41');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 28, 'Test 42');
test(minimumOperations([1, 2, 3, 4, 5, 4, 3, 2, 1], [9, 8, 7, 6, 5, 6, 7, 8, 9]), 16, 'Test 43');
test(minimumOperations([10,20,30,40,50,60,70,80,90,100], [5,15,25,35,45,55,65,75,85,95]), 5, 'Test 44');
test(minimumOperations([10,10,10,10,10], [1,2,3,4,5]), 9, 'Test 45');
test(minimumOperations([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 0, 'Test 46');
test(minimumOperations([1, 1, 1, 1, 1], [1, 1, 1, 1, 100000000]), 99999999, 'Test 47');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10], [1,1,1,1,1,10,10,10,10,10]), 8, 'Test 48');
test(minimumOperations([5,4,3,2,1], [1,2,3,4,5]), 8, 'Test 49');
test(minimumOperations([100,200,300,400,500,600,700,800,900,1000], [1000,900,800,700,600,500,400,300,200,100]), 1800, 'Test 50');
test(minimumOperations([1, 1, 2, 2, 3, 3, 4, 4], [4, 4, 3, 3, 2, 2, 1, 1]), 6, 'Test 51');
test(minimumOperations([1, 3, 5, 7, 9], [9, 7, 5, 3, 1]), 16, 'Test 52');
test(minimumOperations([1, 10, 100, 1000, 10000], [10000, 1000, 100, 10, 1]), 19998, 'Test 53');
test(minimumOperations([1,3,5,7,9,11,13,15,17,19], [9,9,9,9,9,9,9,9,9,9]), 18, 'Test 54');
test(minimumOperations([2,4,6,8,10,12,14,16,18,20], [1,3,5,7,9,11,13,15,17,19]), 1, 'Test 55');
test(minimumOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,30]), 29, 'Test 56');
test(minimumOperations([10,20,30,40,50], [1,2,3,4,5]), 45, 'Test 57');
test(minimumOperations([1,3,5,7,9,11,13,15,17,19], [2,4,6,8,10,12,14,16,18,20]), 1, 'Test 58');
test(minimumOperations([1,2,2,3,3,3,4,4,4,4], [4,4,4,4,3,3,3,2,2,1]), 6, 'Test 59');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 38, 'Test 60');
test(minimumOperations([1, 100, 10000, 1000000], [1000000, 10000, 100, 1]), 1999998, 'Test 61');
test(minimumOperations([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 9, 'Test 62');
test(minimumOperations([10,20,30,40,50], [50,40,30,20,10]), 80, 'Test 63');
test(minimumOperations([100000000, 99999999, 99999998, 99999997, 99999996], [1, 2, 3, 4, 5]), 99999999, 'Test 64');
test(minimumOperations([1,1,2,2,3,3,4,4], [4,4,3,3,2,2,1,1]), 6, 'Test 65');
test(minimumOperations([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 18, 'Test 66');
test(minimumOperations([10,10,10,10,10,10,10,10,10,10], [5,6,7,8,9,10,9,8,7,6]), 9, 'Test 67');
test(minimumOperations([1,1,1,1,1,1,1,1,1,1], [9,9,9,9,9,9,9,9,9,9]), 8, 'Test 68');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,9,10]), 0, 'Test 69');
test(minimumOperations([1,2,3,4,5], [10,10,10,10,10]), 9, 'Test 70');
test(minimumOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 4, 'Test 71');
test(minimumOperations([1,1,1,1,1], [10,10,10,10,10]), 9, 'Test 72');
test(minimumOperations([9,9,9,9,9], [1,2,3,4,5]), 8, 'Test 73');
test(minimumOperations([5,5,5,5,5,5,5,5,5,5], [1,2,3,4,5,6,7,8,9,10]), 9, 'Test 74');
test(minimumOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000]), 99999999, 'Test 75');
test(minimumOperations([2,4,6,8,10], [1,3,5,7,9]), 1, 'Test 76');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10], [20,19,18,17,16,15,14,13,12,11]), 19, 'Test 77');
test(minimumOperations([10,20,30,40,50,60,70,80,90,100], [1,2,3,4,5,6,7,8,9,10]), 90, 'Test 78');
test(minimumOperations([10, 20, 30, 40, 50], [50, 40, 30, 20, 10]), 80, 'Test 79');
test(minimumOperations([9,9,9,9,9,9,9,9,9,9], [1,3,5,7,9,11,13,15,17,19]), 18, 'Test 80');
test(minimumOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 9, 'Test 81');
test(minimumOperations([5,10,15,20,25,30,35,40,45,50], [50,45,40,35,30,25,20,15,10,5]), 90, 'Test 82');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10], [2,4,6,8,10,12,14,16,18,20]), 10, 'Test 83');
test(minimumOperations([1,1,1,1,2,2,2,2,3,3,3,3], [3,3,3,3,2,2,2,2,1,1,1,1]), 4, 'Test 84');
test(minimumOperations([10,20,30,40,50,60,70,80,90,100], [100,200,300,400,500,600,700,800,900,1000]), 900, 'Test 85');
test(minimumOperations([3,5,2,8,4], [6,8,7,4,3]), 9, 'Test 86');
test(minimumOperations([100,200,300,400,500], [500,400,300,200,100]), 800, 'Test 87');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 18, 'Test 88');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10], [2,3,4,5,6,7,8,9,10,11]), 1, 'Test 89');
test(minimumOperations([1,1,1,1,1,1,1,1,1,1], [10,10,10,10,10,10,10,10,10,10]), 9, 'Test 90');
test(minimumOperations([5,10,15,20,25,30,35,40,45,50], [5,10,15,20,25,30,35,40,45,50]), 0, 'Test 91');
test(minimumOperations([5,10,15,20,25], [25,20,15,10,5]), 40, 'Test 92');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10], [10,1,10,1,10,1,10,1,10,1]), 50, 'Test 93');
test(minimumOperations([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], [4, 4, 4, 4, 3, 3, 3, 2, 2, 1]), 6, 'Test 94');
test(minimumOperations([10,20,30,40,50], [15,25,35,45,55]), 5, 'Test 95');
test(minimumOperations([1,1,1,1,1,1,1,1,1,1], [10,9,8,7,6,5,4,3,2,1]), 9, 'Test 96');
test(minimumOperations([2,4,6,8,10,12,14,16,18,20], [1,2,3,4,5,6,7,8,9,10]), 10, 'Test 97');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10], [5,5,5,5,5,5,5,5,5,5]), 9, 'Test 98');
test(minimumOperations([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 9, 'Test 99');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 9, 'Test 100');
test(minimumOperations([1,1,1,1,1,1,1,1,1,1], [5,5,5,5,5,5,5,5,5,5]), 4, 'Test 101');
test(minimumOperations([9,8,7,6,5,4,3,2,1], [1,2,3,4,5,6,7,8,9]), 16, 'Test 102');
test(minimumOperations([10,10,10,10,10], [1,1,1,1,1]), 9, 'Test 103');
test(minimumOperations([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 9, 'Test 104');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10], [1,3,5,7,9,11,13,15,17,19]), 9, 'Test 105');
test(minimumOperations([5,5,5,5,5,5,5,5,5,5], [1,3,5,7,9,11,13,15,17,19]), 18, 'Test 106');
test(minimumOperations([5,5,5,5,5,5,5,5,5,5], [1,1,1,1,1,1,1,1,1,1]), 4, 'Test 107');
test(minimumOperations([1,3,5,7,9], [9,7,5,3,1]), 16, 'Test 108');
test(minimumOperations([100000000, 90000000, 80000000, 70000000, 60000000], [10000000, 20000000, 30000000, 40000000, 50000000]), 90000000, 'Test 109');
test(minimumOperations([5,5,5,5,5], [10,9,8,7,6]), 5, 'Test 110');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10], [10,10,10,10,10,10,10,10,10,10]), 9, 'Test 111');
test(minimumOperations([5,5,5,5,5,5,5,5,5,5], [10,10,10,10,10,10,10,10,10,10]), 5, 'Test 112');
test(minimumOperations([5, 5, 5, 5, 5], [10, 5, 10, 5, 10]), 15, 'Test 113');
test(minimumOperations([1,3,5,7,9,11,13], [13,11,9,7,5,3,1]), 24, 'Test 114');
test(minimumOperations([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), 36, 'Test 115');
test(minimumOperations([10,20,30,40,50], [5,15,25,35,45]), 5, 'Test 116');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 100000000]), 100000006, 'Test 117');
test(minimumOperations([1,1,2,2,3,3,4,4,5,5], [5,5,4,4,3,3,2,2,1,1]), 8, 'Test 118');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

