// Test: 2866. Beautiful Towers Ii
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { maximumSumOfHeights } = require("./solution");

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

console.log("\n2866. Beautiful Towers Ii\n");

test(maximumSumOfHeights([1,2,3,4,5]), 15, 'Test 1');
test(maximumSumOfHeights([5,4,3,2,1]), 15, 'Test 2');
test(maximumSumOfHeights([1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), 5000000000, 'Test 3');
test(maximumSumOfHeights([1, 3, 2, 4, 3, 5, 4, 6, 5]), 30, 'Test 4');
test(maximumSumOfHeights([10,10,10,10,10]), 50, 'Test 5');
test(maximumSumOfHeights([10,9,8,7,6,5,4,3,2,1]), 55, 'Test 6');
test(maximumSumOfHeights([1,2,3,4,5,6,7,8,9,10]), 55, 'Test 7');
test(maximumSumOfHeights([1,3,2,3,1]), 9, 'Test 8');
test(maximumSumOfHeights([1,3,2,1,2,3,1,2,1]), 12, 'Test 9');
test(maximumSumOfHeights([1000000000,1000000000,1000000000,1000000000,1000000000]), 5000000000, 'Test 10');
test(maximumSumOfHeights([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 55, 'Test 11');
test(maximumSumOfHeights([3,2,5,5,2,3]), 18, 'Test 12');
test(maximumSumOfHeights([7,8,9,10,9,8,7]), 58, 'Test 13');
test(maximumSumOfHeights([5,3,4,1,1]), 13, 'Test 14');
test(maximumSumOfHeights([4,4,4,4,4,4,4]), 28, 'Test 15');
test(maximumSumOfHeights([1, 2, 3, 4, 5, 4, 3, 2, 1]), 25, 'Test 16');
test(maximumSumOfHeights([1,2,3,4,5,4,3,2,1]), 25, 'Test 17');
test(maximumSumOfHeights([1,1,1,1,1]), 5, 'Test 18');
test(maximumSumOfHeights([6,5,3,9,2,7]), 22, 'Test 19');
test(maximumSumOfHeights([1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 5, 6, 4, 7, 3, 8, 2, 9, 1, 10]), 66, 'Test 20');
test(maximumSumOfHeights([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 114, 'Test 21');
test(maximumSumOfHeights([5, 5, 5, 5, 9, 5, 5, 5, 5]), 49, 'Test 22');
test(maximumSumOfHeights([7, 7, 7, 7, 7, 7, 7, 7, 7, 7]), 70, 'Test 23');
test(maximumSumOfHeights([1, 10, 2, 8, 3, 7, 4, 6, 5]), 30, 'Test 24');
test(maximumSumOfHeights([3, 6, 6, 6, 6, 6, 3, 3, 3, 3, 3, 6, 6]), 54, 'Test 25');
test(maximumSumOfHeights([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 120, 'Test 26');
test(maximumSumOfHeights([1,2,3,4,5,6,5,4,3,2,1]), 36, 'Test 27');
test(maximumSumOfHeights([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 20, 'Test 28');
test(maximumSumOfHeights([1, 2, 3, 4, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 4, 3, 2, 1]), 34, 'Test 29');
test(maximumSumOfHeights([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 40, 'Test 30');
test(maximumSumOfHeights([1, 3, 2, 4, 3, 5, 4, 6, 5, 7]), 36, 'Test 31');
test(maximumSumOfHeights([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 5, 4, 3]), 44, 'Test 32');
test(maximumSumOfHeights([5, 6, 7, 8, 9, 10, 10, 10, 10, 9, 8, 7, 6, 5, 4]), 114, 'Test 33');
test(maximumSumOfHeights([1, 1, 2, 3, 4, 5, 4, 3, 2, 1]), 26, 'Test 34');
test(maximumSumOfHeights([1, 2, 3, 4, 5, 4, 3, 4, 5, 4, 3, 4, 5, 4, 3]), 46, 'Test 35');
test(maximumSumOfHeights([2, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10]), 111, 'Test 36');
test(maximumSumOfHeights([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 118, 'Test 37');
test(maximumSumOfHeights([1, 3, 2, 5, 4, 6, 5, 7, 6, 8]), 43, 'Test 38');
test(maximumSumOfHeights([3, 3, 3, 3, 3, 5, 5, 5, 5, 5]), 40, 'Test 39');
test(maximumSumOfHeights([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5]), 500, 'Test 40');
test(maximumSumOfHeights([5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5]), 44, 'Test 41');
test(maximumSumOfHeights([7, 7, 7, 7, 1, 7, 7, 7, 7, 7]), 40, 'Test 42');
test(maximumSumOfHeights([5, 4, 4, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7]), 85, 'Test 43');
test(maximumSumOfHeights([1, 2, 3, 4, 5, 5, 5, 5, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 120, 'Test 44');
test(maximumSumOfHeights([5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 1, 1, 1, 1]), 39, 'Test 45');
test(maximumSumOfHeights([1, 5, 3, 7, 5, 9, 7, 11, 9, 13, 11, 9, 7, 5, 3, 1]), 98, 'Test 46');
test(maximumSumOfHeights([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 60, 'Test 47');
test(maximumSumOfHeights([10, 20, 30, 40, 50, 40, 30, 20, 10, 5, 10, 15, 20, 25, 30, 25, 20, 15, 10]), 300, 'Test 48');
test(maximumSumOfHeights([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 120, 'Test 49');
test(maximumSumOfHeights([3, 3, 3, 3, 5, 5, 5, 5, 3, 3, 3, 3, 5, 5, 5, 5, 3, 3, 3, 3]), 68, 'Test 50');
test(maximumSumOfHeights([5, 4, 3, 2, 1, 2, 3, 4, 5, 6]), 25, 'Test 51');
test(maximumSumOfHeights([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 45, 'Test 52');
test(maximumSumOfHeights([2, 2, 2, 3, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 2, 2]), 73, 'Test 53');
test(maximumSumOfHeights([1, 1, 1, 1, 10, 1, 1, 1, 1, 1]), 19, 'Test 54');
test(maximumSumOfHeights([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 120, 'Test 55');
test(maximumSumOfHeights([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 26, 'Test 56');
test(maximumSumOfHeights([10, 20, 30, 40, 50, 40, 30, 20, 10]), 250, 'Test 57');
test(maximumSumOfHeights([1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 5, 7, 4, 8, 3, 9, 2, 10, 1]), 65, 'Test 58');
test(maximumSumOfHeights([1, 3, 5, 7, 9, 11, 9, 7, 5, 3, 1, 3, 5, 7, 9, 11, 9, 7, 5]), 69, 'Test 59');
test(maximumSumOfHeights([1, 2, 3, 4, 5, 4, 5, 4, 5, 4, 3, 2, 1]), 41, 'Test 60');
test(maximumSumOfHeights([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 110, 'Test 61');
test(maximumSumOfHeights([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3]), 35, 'Test 62');
test(maximumSumOfHeights([1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 1, 8, 1, 9, 1, 10, 1, 11, 1, 12, 1, 13, 1, 14, 1, 15]), 42, 'Test 63');
test(maximumSumOfHeights([5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 90, 'Test 64');
test(maximumSumOfHeights([5, 5, 5, 5, 6, 5, 5, 5, 5]), 46, 'Test 65');
test(maximumSumOfHeights([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5]), 29, 'Test 66');
test(maximumSumOfHeights([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 100, 'Test 67');
test(maximumSumOfHeights([5,5,5,5,5,1,5,5,5,5,5,5,5,5,5]), 51, 'Test 68');
test(maximumSumOfHeights([1, 10, 1, 10, 1, 10, 1, 10, 1, 10]), 19, 'Test 69');
test(maximumSumOfHeights([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10]), 110, 'Test 70');
test(maximumSumOfHeights([1, 1, 1, 10, 1, 1, 10, 1, 1, 10, 1, 1, 1]), 22, 'Test 71');
test(maximumSumOfHeights([1,1,1,1,10,1,1,1,1,1,1,1,1,1,10,1,1,1,1,1]), 29, 'Test 72');
test(maximumSumOfHeights([10, 20, 30, 40, 50, 60, 50, 40, 30, 20, 10]), 360, 'Test 73');
test(maximumSumOfHeights([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1]), 104, 'Test 74');
test(maximumSumOfHeights([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3, 2, 1]), 70, 'Test 75');
test(maximumSumOfHeights([9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7]), 68, 'Test 76');
test(maximumSumOfHeights([5, 4, 3, 2, 1, 2, 3, 4, 5]), 19, 'Test 77');
test(maximumSumOfHeights([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 210, 'Test 78');
test(maximumSumOfHeights([5, 5, 5, 5, 1, 5, 5, 5, 5]), 25, 'Test 79');
test(maximumSumOfHeights([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 1000, 'Test 80');
test(maximumSumOfHeights([5, 5, 5, 5, 5, 10, 5, 5, 5, 5, 5, 10, 5, 5, 5, 5, 5]), 90, 'Test 81');
test(maximumSumOfHeights([3, 1, 3, 1, 3, 1, 3]), 9, 'Test 82');
test(maximumSumOfHeights([1, 5, 3, 8, 7, 2, 6, 4, 9, 0]), 30, 'Test 83');
test(maximumSumOfHeights([5,4,3,2,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 85, 'Test 84');
test(maximumSumOfHeights([3, 3, 3, 3, 10, 3, 3, 3, 3, 10, 3, 3, 3, 3]), 49, 'Test 85');
test(maximumSumOfHeights([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 210, 'Test 86');
test(maximumSumOfHeights([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3, 2, 1]), 65, 'Test 87');
test(maximumSumOfHeights([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 650, 'Test 88');
test(maximumSumOfHeights([1, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1]), 20, 'Test 89');
test(maximumSumOfHeights([2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2]), 20, 'Test 90');
test(maximumSumOfHeights([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 150, 'Test 91');
test(maximumSumOfHeights([1, 3, 2, 3, 4, 3, 2, 3, 1]), 20, 'Test 92');
test(maximumSumOfHeights([1,3,5,7,9,11,13,15,13,11,9,7,5,3,1]), 113, 'Test 93');
test(maximumSumOfHeights([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 65, 'Test 94');
test(maximumSumOfHeights([2, 2, 3, 4, 5, 6, 5, 5, 5, 5, 6, 7, 8, 9, 10]), 81, 'Test 95');
test(maximumSumOfHeights([10,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 101, 'Test 96');
test(maximumSumOfHeights([9, 8, 7, 6, 5, 6, 7, 8, 9, 8, 7, 6, 5, 6, 7, 8, 9, 8, 7]), 111, 'Test 97');
test(maximumSumOfHeights([1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 103, 'Test 98');
test(maximumSumOfHeights([9, 9, 9, 9, 9, 1, 1, 1, 1, 1]), 50, 'Test 99');
test(maximumSumOfHeights([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]), 36, 'Test 100');
test(maximumSumOfHeights([100, 90, 80, 70, 60, 50, 60, 70, 80, 90, 100]), 700, 'Test 101');
test(maximumSumOfHeights([9, 7, 5, 3, 1, 1, 3, 5, 7, 9]), 30, 'Test 102');
test(maximumSumOfHeights([1, 3, 5, 7, 9, 7, 5, 3, 1]), 41, 'Test 103');
test(maximumSumOfHeights([1, 3, 5, 7, 9, 7, 5, 3, 1, 1, 3, 5, 7, 9, 7, 5, 3, 1]), 50, 'Test 104');
test(maximumSumOfHeights([1, 1, 2, 3, 4, 5, 4, 3, 2, 1, 1]), 27, 'Test 105');
test(maximumSumOfHeights([9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 53, 'Test 106');
test(maximumSumOfHeights([100, 50, 50, 100, 50, 50, 100, 50, 50, 100]), 550, 'Test 107');
test(maximumSumOfHeights([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 64, 'Test 108');
test(maximumSumOfHeights([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3]), 19, 'Test 109');
test(maximumSumOfHeights([1,1000000000,1,1000000000,1,1000000000,1,1000000000,1]), 1000000008, 'Test 110');
test(maximumSumOfHeights([1, 2, 2, 3, 3, 3, 2, 2, 1, 1, 2, 2, 3, 3, 3, 2, 2, 1]), 28, 'Test 111');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

