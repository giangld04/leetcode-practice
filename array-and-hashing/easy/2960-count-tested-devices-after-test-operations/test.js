// Test: 2960. Count Tested Devices After Test Operations
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { countTestedDevices } = require("./solution");

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

console.log("\n2960. Count Tested Devices After Test Operations\n");

test(countTestedDevices([100,99,98,97,96]), 5, 'Test 1');
test(countTestedDevices([50,49,48,47,46]), 5, 'Test 2');
test(countTestedDevices([100,100,100]), 3, 'Test 3');
test(countTestedDevices([100,0,100,0,100]), 3, 'Test 4');
test(countTestedDevices([3,2,1,0,4,3,2,1]), 3, 'Test 5');
test(countTestedDevices([3,0,2,0,1]), 2, 'Test 6');
test(countTestedDevices([1,1,2,1,3]), 3, 'Test 7');
test(countTestedDevices([0,1,0,1,0]), 1, 'Test 8');
test(countTestedDevices([1]), 1, 'Test 9');
test(countTestedDevices([1,2,3,4,5]), 5, 'Test 10');
test(countTestedDevices([0,0,0]), 0, 'Test 11');
test(countTestedDevices([3,2,1,0,4,3,2,1,0]), 3, 'Test 12');
test(countTestedDevices([50,40,30,20,10]), 5, 'Test 13');
test(countTestedDevices([50,0,50,0,50]), 3, 'Test 14');
test(countTestedDevices([0,1,2]), 2, 'Test 15');
test(countTestedDevices([100]), 1, 'Test 16');
test(countTestedDevices([0,0,0,0,0]), 0, 'Test 17');
test(countTestedDevices([100,99,98,97]), 4, 'Test 18');
test(countTestedDevices([50,50,50,50,50]), 5, 'Test 19');
test(countTestedDevices([1,0,1,0,1]), 1, 'Test 20');
test(countTestedDevices([0,0,0,0]), 0, 'Test 21');
test(countTestedDevices([1,0,1,0,1,0,1]), 1, 'Test 22');
test(countTestedDevices([1,2,3,4,5,6,7,8,9,10]), 10, 'Test 23');
test(countTestedDevices([0]), 0, 'Test 24');
test(countTestedDevices([10,20,30,40,50]), 5, 'Test 25');
test(countTestedDevices([5,5,5,5,5]), 5, 'Test 26');
test(countTestedDevices([1,0,2,0,3,0,4]), 4, 'Test 27');
test(countTestedDevices([1, 0, 2, 0, 3, 0, 4, 0, 5, 0]), 5, 'Test 28');
test(countTestedDevices([5, 3, 0, 2, 1, 0, 4, 0, 3]), 3, 'Test 29');
test(countTestedDevices([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), 1, 'Test 30');
test(countTestedDevices([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 5, 'Test 31');
test(countTestedDevices([0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), 1, 'Test 32');
test(countTestedDevices([1,0,1,0,1,0,1,0,1,0]), 1, 'Test 33');
test(countTestedDevices([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 10, 'Test 34');
test(countTestedDevices([3, 0, 3, 0, 3, 0, 3, 0, 3, 0]), 3, 'Test 35');
test(countTestedDevices([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 5, 'Test 36');
test(countTestedDevices([5,0,5,0,5,0,5,0]), 4, 'Test 37');
test(countTestedDevices([0,1,0,2,0,3,0,4]), 4, 'Test 38');
test(countTestedDevices([0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0]), 1, 'Test 39');
test(countTestedDevices([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 10, 'Test 40');
test(countTestedDevices([100, 0, 99, 1, 98, 2, 97, 3, 96, 4]), 5, 'Test 41');
test(countTestedDevices([2,1,2,1,2,1,2,1,2,1,2,1]), 2, 'Test 42');
test(countTestedDevices([3,2,1,0,5,4,3,2,1]), 4, 'Test 43');
test(countTestedDevices([0, 10, 0, 20, 0, 30, 0, 40, 0, 50]), 5, 'Test 44');
test(countTestedDevices([20, 20, 19, 19, 18, 18, 17, 17, 16, 16]), 10, 'Test 45');
test(countTestedDevices([99, 98, 97, 96, 95, 94, 93, 92, 91, 90]), 10, 'Test 46');
test(countTestedDevices([5,10,5,10,5,10,5,10,5,10]), 8, 'Test 47');
test(countTestedDevices([10, 0, 10, 0, 10, 0, 10]), 4, 'Test 48');
test(countTestedDevices([10, 15, 20, 25, 30, 35, 40, 45, 50, 55]), 10, 'Test 49');
test(countTestedDevices([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0]), 5, 'Test 50');
test(countTestedDevices([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 51');
test(countTestedDevices([5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5]), 5, 'Test 52');
test(countTestedDevices([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80]), 20, 'Test 53');
test(countTestedDevices([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 54');
test(countTestedDevices([3, 0, 5, 2, 8, 0, 6]), 4, 'Test 55');
test(countTestedDevices([3, 2, 1, 0, 4, 5]), 4, 'Test 56');
test(countTestedDevices([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 9, 'Test 57');
test(countTestedDevices([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 58');
test(countTestedDevices([100, 0, 100, 0, 100, 0, 100]), 4, 'Test 59');
test(countTestedDevices([20, 0, 15, 5, 0, 10, 0, 0, 0, 5]), 5, 'Test 60');
test(countTestedDevices([50, 25, 0, 75, 100, 0, 0, 25, 50, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 7, 'Test 61');
test(countTestedDevices([1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0, 10, 0]), 10, 'Test 62');
test(countTestedDevices([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 63');
test(countTestedDevices([100, 99, 98, 97, 96, 95, 94, 93, 92, 91]), 10, 'Test 64');
test(countTestedDevices([1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), 1, 'Test 65');
test(countTestedDevices([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 5, 'Test 66');
test(countTestedDevices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 67');
test(countTestedDevices([3, 2, 2, 1, 1, 0, 0, 1, 1, 0]), 2, 'Test 68');
test(countTestedDevices([10,9,8,7,6,5,4,3,2,1,0]), 5, 'Test 69');
test(countTestedDevices([100,99,98,97,96,95,94]), 7, 'Test 70');
test(countTestedDevices([5,5,5,5,5,5,5,5,5,5]), 5, 'Test 71');
test(countTestedDevices([10,20,30,40,50,60,70,80,90,100]), 10, 'Test 72');
test(countTestedDevices([0, 1, 0, 2, 0, 3, 0, 4, 0, 5]), 5, 'Test 73');
test(countTestedDevices([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 74');
test(countTestedDevices([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 5, 'Test 75');
test(countTestedDevices([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 3, 'Test 76');
test(countTestedDevices([0, 0, 1, 0, 0, 2, 0, 0, 3, 0, 0]), 3, 'Test 77');
test(countTestedDevices([0,100,0,100,0,100,0,100]), 4, 'Test 78');
test(countTestedDevices([1,2,3,4,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0]), 7, 'Test 79');
test(countTestedDevices([50, 25, 0, 75, 50, 25, 0, 75, 50, 25]), 8, 'Test 80');
test(countTestedDevices([0,1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10]), 10, 'Test 81');
test(countTestedDevices([50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100]), 20, 'Test 82');
test(countTestedDevices([10, 0, 10, 0, 10, 0, 10, 0, 10, 0]), 5, 'Test 83');
test(countTestedDevices([90, 0, 90, 0, 90, 0, 90, 0, 90, 0, 90, 0, 90, 0, 90, 0, 90, 0, 90, 0, 90, 0, 90, 0, 90, 0, 90, 0, 90, 0]), 15, 'Test 84');
test(countTestedDevices([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 10, 'Test 85');
test(countTestedDevices([0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6]), 6, 'Test 86');
test(countTestedDevices([100,0,99,0,98,0,97,0,96,0]), 5, 'Test 87');
test(countTestedDevices([3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1]), 3, 'Test 88');
test(countTestedDevices([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), 1, 'Test 89');
test(countTestedDevices([2, 1, 0, 2, 1, 0, 2, 1, 0, 2, 1]), 2, 'Test 90');
test(countTestedDevices([100, 99, 98, 97, 96, 95]), 6, 'Test 91');
test(countTestedDevices([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100]), 5, 'Test 92');
test(countTestedDevices([0, 0, 0, 1, 0, 0, 2, 0, 0, 3, 0, 0, 4, 0, 0, 5, 0, 0, 6, 0]), 6, 'Test 93');
test(countTestedDevices([3, 2, 1, 0, 4, 5, 0, 6]), 5, 'Test 94');
test(countTestedDevices([5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0]), 5, 'Test 95');
test(countTestedDevices([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70]), 31, 'Test 96');
test(countTestedDevices([3,2,1,0,1,2,3]), 3, 'Test 97');
test(countTestedDevices([100, 100, 0, 0, 50, 50, 0, 0, 25, 25]), 6, 'Test 98');
test(countTestedDevices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 10, 'Test 99');
test(countTestedDevices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 100');
test(countTestedDevices([0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0]), 5, 'Test 101');
test(countTestedDevices([10,9,8,7,6,5,4,3,2,1]), 5, 'Test 102');
test(countTestedDevices([0,0,1,0,0,1,0,0,1,0,0,1,0,0]), 1, 'Test 103');
test(countTestedDevices([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]), 29, 'Test 104');
test(countTestedDevices([1, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0, 10, 0, 1]), 10, 'Test 105');
test(countTestedDevices([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 106');
test(countTestedDevices([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 10, 'Test 107');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

