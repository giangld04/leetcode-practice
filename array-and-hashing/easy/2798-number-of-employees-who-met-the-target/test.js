// Test: 2798. Number Of Employees Who Met The Target
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfEmployeesWhoMetTarget } = require("./solution");

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

console.log("\n2798. Number Of Employees Who Met The Target\n");

test(numberOfEmployeesWhoMetTarget([5,5,5,5,5], 5), 5, 'Test 1');
test(numberOfEmployeesWhoMetTarget([3,4,5,6,7], 4), 4, 'Test 2');
test(numberOfEmployeesWhoMetTarget([1,5,7,9], 8), 1, 'Test 3');
test(numberOfEmployeesWhoMetTarget([10,10,10], 10), 3, 'Test 4');
test(numberOfEmployeesWhoMetTarget([0,1,2,3,4], 2), 3, 'Test 5');
test(numberOfEmployeesWhoMetTarget([10,20,30,40,50], 25), 3, 'Test 6');
test(numberOfEmployeesWhoMetTarget([50,50,50,50,50], 50), 5, 'Test 7');
test(numberOfEmployeesWhoMetTarget([1], 1), 1, 'Test 8');
test(numberOfEmployeesWhoMetTarget([3,5,7,9,11], 10), 1, 'Test 9');
test(numberOfEmployeesWhoMetTarget([1,2,3,4,5], 0), 5, 'Test 10');
test(numberOfEmployeesWhoMetTarget([100,200,300], 150), 2, 'Test 11');
test(numberOfEmployeesWhoMetTarget([1,2,3,4,5,6,7,8,9,10], 5), 6, 'Test 12');
test(numberOfEmployeesWhoMetTarget([1,1,1,1,1], 1), 5, 'Test 13');
test(numberOfEmployeesWhoMetTarget([3,3,3,3,3], 3), 5, 'Test 14');
test(numberOfEmployeesWhoMetTarget([0,0,0,0,0], 1), 0, 'Test 15');
test(numberOfEmployeesWhoMetTarget([5,1,4,2,2], 6), 0, 'Test 16');
test(numberOfEmployeesWhoMetTarget([100, 200, 300, 400, 500], 150), 4, 'Test 17');
test(numberOfEmployeesWhoMetTarget([100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000], 55000), 5, 'Test 18');
test(numberOfEmployeesWhoMetTarget([25, 25, 25, 25, 25, 25, 25, 25, 25, 25], 25), 10, 'Test 19');
test(numberOfEmployeesWhoMetTarget([10000, 20000, 30000, 40000, 50000], 30000), 3, 'Test 20');
test(numberOfEmployeesWhoMetTarget([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1), 0, 'Test 21');
test(numberOfEmployeesWhoMetTarget([50, 49, 48, 47, 46, 45, 44, 43, 42, 41], 45), 6, 'Test 22');
test(numberOfEmployeesWhoMetTarget([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 150), 6, 'Test 23');
test(numberOfEmployeesWhoMetTarget([33, 66, 99, 132, 165, 198, 231, 264, 297, 330], 198), 5, 'Test 24');
test(numberOfEmployeesWhoMetTarget([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 5), 10, 'Test 25');
test(numberOfEmployeesWhoMetTarget([55, 55, 55, 55, 55, 55, 55, 55, 55, 55], 54), 10, 'Test 26');
test(numberOfEmployeesWhoMetTarget([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 101), 0, 'Test 27');
test(numberOfEmployeesWhoMetTarget([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50], 25), 13, 'Test 28');
test(numberOfEmployeesWhoMetTarget([100000, 50000, 75000, 25000, 0], 50000), 3, 'Test 29');
test(numberOfEmployeesWhoMetTarget([0, 100000, 50000, 75000, 25000], 50000), 3, 'Test 30');
test(numberOfEmployeesWhoMetTarget([15, 25, 35, 45, 55], 35), 3, 'Test 31');
test(numberOfEmployeesWhoMetTarget([100, 200, 300, 400, 500], 500), 1, 'Test 32');
test(numberOfEmployeesWhoMetTarget([99, 98, 97, 96, 95, 94, 93, 92, 91, 90], 95), 5, 'Test 33');
test(numberOfEmployeesWhoMetTarget([50, 50, 50, 50, 50], 50), 5, 'Test 34');
test(numberOfEmployeesWhoMetTarget([99995, 99996, 99997, 99998, 99999, 100000], 99995), 6, 'Test 35');
test(numberOfEmployeesWhoMetTarget([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 50), 11, 'Test 36');
test(numberOfEmployeesWhoMetTarget([1, 10, 100, 1000, 10000, 100000, 0, 0, 0, 0], 100), 4, 'Test 37');
test(numberOfEmployeesWhoMetTarget([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 6, 'Test 38');
test(numberOfEmployeesWhoMetTarget([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 25), 8, 'Test 39');
test(numberOfEmployeesWhoMetTarget([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 0), 10, 'Test 40');
test(numberOfEmployeesWhoMetTarget([50, 40, 30, 20, 10, 0, 10, 20, 30, 40], 25), 5, 'Test 41');
test(numberOfEmployeesWhoMetTarget([25, 50, 75, 100, 125, 150, 175, 200, 225, 250], 100), 7, 'Test 42');
test(numberOfEmployeesWhoMetTarget([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 9), 30, 'Test 43');
test(numberOfEmployeesWhoMetTarget([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 5), 5, 'Test 44');
test(numberOfEmployeesWhoMetTarget([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000], 100000), 10, 'Test 45');
test(numberOfEmployeesWhoMetTarget([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 15), 16, 'Test 46');
test(numberOfEmployeesWhoMetTarget([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 2), 9, 'Test 47');
test(numberOfEmployeesWhoMetTarget([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10), 5, 'Test 48');
test(numberOfEmployeesWhoMetTarget([50, 40, 30, 20, 10, 0], 25), 3, 'Test 49');
test(numberOfEmployeesWhoMetTarget([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 39), 1, 'Test 50');
test(numberOfEmployeesWhoMetTarget([10, 20, 30, 40, 50], 25), 3, 'Test 51');
test(numberOfEmployeesWhoMetTarget([1, 10, 100, 1000, 10000], 50), 3, 'Test 52');
test(numberOfEmployeesWhoMetTarget([10, 20, 30, 40, 50], 100), 0, 'Test 53');
test(numberOfEmployeesWhoMetTarget([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 10), 26, 'Test 54');
test(numberOfEmployeesWhoMetTarget([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 10, 'Test 55');
test(numberOfEmployeesWhoMetTarget([19, 17, 15, 13, 11, 9, 7, 5, 3, 1], 10), 5, 'Test 56');
test(numberOfEmployeesWhoMetTarget([15, 25, 35, 45, 55, 65, 75, 85, 95, 105], 60), 5, 'Test 57');
test(numberOfEmployeesWhoMetTarget([25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25], 25), 20, 'Test 58');
test(numberOfEmployeesWhoMetTarget([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 20), 10, 'Test 59');
test(numberOfEmployeesWhoMetTarget([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1), 0, 'Test 60');
test(numberOfEmployeesWhoMetTarget([5, 15, 25, 35, 45], 25), 3, 'Test 61');
test(numberOfEmployeesWhoMetTarget([99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991, 99990], 99995), 5, 'Test 62');
test(numberOfEmployeesWhoMetTarget([9, 9, 9, 9, 9], 9), 5, 'Test 63');
test(numberOfEmployeesWhoMetTarget([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50), 6, 'Test 64');
test(numberOfEmployeesWhoMetTarget([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59], 30), 15, 'Test 65');
test(numberOfEmployeesWhoMetTarget([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), 1, 'Test 66');
test(numberOfEmployeesWhoMetTarget([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 1000), 1, 'Test 67');
test(numberOfEmployeesWhoMetTarget([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 17], 8), 18, 'Test 68');
test(numberOfEmployeesWhoMetTarget([1, 3, 2, 5, 4, 7, 6, 9, 8, 10], 5), 6, 'Test 69');
test(numberOfEmployeesWhoMetTarget([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 50], 25), 14, 'Test 70');
test(numberOfEmployeesWhoMetTarget([100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000], 50000), 6, 'Test 71');
test(numberOfEmployeesWhoMetTarget([50, 40, 30, 20, 10, 0, 10, 20, 30, 40], 10), 9, 'Test 72');
test(numberOfEmployeesWhoMetTarget([15, 20, 25, 30, 35, 40, 45, 50, 55, 60], 25), 8, 'Test 73');
test(numberOfEmployeesWhoMetTarget([50, 40, 30, 20, 10], 25), 3, 'Test 74');
test(numberOfEmployeesWhoMetTarget([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 40), 6, 'Test 75');
test(numberOfEmployeesWhoMetTarget([25, 50, 75, 100, 125, 150, 175, 200, 225, 250], 125), 6, 'Test 76');
test(numberOfEmployeesWhoMetTarget([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], 25), 26, 'Test 77');
test(numberOfEmployeesWhoMetTarget([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 25), 6, 'Test 78');
test(numberOfEmployeesWhoMetTarget([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 6, 'Test 79');
test(numberOfEmployeesWhoMetTarget([100000, 99999, 99998, 99997, 99996], 100000), 1, 'Test 80');
test(numberOfEmployeesWhoMetTarget([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 500), 6, 'Test 81');
test(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9), 1, 'Test 82');
test(numberOfEmployeesWhoMetTarget([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 5), 6, 'Test 83');
test(numberOfEmployeesWhoMetTarget([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 99), 1, 'Test 84');
test(numberOfEmployeesWhoMetTarget([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 3), 6, 'Test 85');
test(numberOfEmployeesWhoMetTarget([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 2), 16, 'Test 86');
test(numberOfEmployeesWhoMetTarget([100000, 99999, 100000, 100000, 99999], 100000), 3, 'Test 87');
test(numberOfEmployeesWhoMetTarget([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4], 3), 10, 'Test 88');
test(numberOfEmployeesWhoMetTarget([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 10, 'Test 89');
test(numberOfEmployeesWhoMetTarget([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10), 1, 'Test 90');
test(numberOfEmployeesWhoMetTarget([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), 11, 'Test 91');
test(numberOfEmployeesWhoMetTarget([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49], 20), 15, 'Test 92');
test(numberOfEmployeesWhoMetTarget([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 105), 0, 'Test 93');
test(numberOfEmployeesWhoMetTarget([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 99), 52, 'Test 94');
test(numberOfEmployeesWhoMetTarget([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), 39, 'Test 95');
test(numberOfEmployeesWhoMetTarget([0, 0, 0, 0, 0], 1), 0, 'Test 96');
test(numberOfEmployeesWhoMetTarget([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 11), 5, 'Test 97');
test(numberOfEmployeesWhoMetTarget([50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000], 50000), 30, 'Test 98');
test(numberOfEmployeesWhoMetTarget([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0), 57, 'Test 99');
test(numberOfEmployeesWhoMetTarget([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1), 0, 'Test 100');
test(numberOfEmployeesWhoMetTarget([12, 34, 56, 78, 90], 50), 3, 'Test 101');
test(numberOfEmployeesWhoMetTarget([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 55), 5, 'Test 102');
test(numberOfEmployeesWhoMetTarget([30, 25, 20, 15, 10], 20), 3, 'Test 103');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

