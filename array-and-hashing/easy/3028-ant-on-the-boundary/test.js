// Test: 3028. Ant On The Boundary
// 123 test cases from LeetCodeDataset
// Run: node test.js

const { returnToBoundaryCount } = require("./solution");

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

console.log("\n3028. Ant On The Boundary\n");

test(returnToBoundaryCount([-1,1,-1,1]), 2, 'Test 1');
test(returnToBoundaryCount([10]), 0, 'Test 2');
test(returnToBoundaryCount([1]), 0, 'Test 3');
test(returnToBoundaryCount([-2,2,-2,2]), 2, 'Test 4');
test(returnToBoundaryCount([1,-1,1,-1]), 2, 'Test 5');
test(returnToBoundaryCount([2,3,-5]), 1, 'Test 6');
test(returnToBoundaryCount([5,5,-10]), 1, 'Test 7');
test(returnToBoundaryCount([10,10,10,-30]), 1, 'Test 8');
test(returnToBoundaryCount([1,2,3,-6]), 1, 'Test 9');
test(returnToBoundaryCount([10,20,-30,10]), 1, 'Test 10');
test(returnToBoundaryCount([10,-5,-5]), 1, 'Test 11');
test(returnToBoundaryCount([10,-10,10,-10]), 2, 'Test 12');
test(returnToBoundaryCount([1,1,1,1,-4]), 1, 'Test 13');
test(returnToBoundaryCount([-5,5,-5,5]), 2, 'Test 14');
test(returnToBoundaryCount([-10]), 0, 'Test 15');
test(returnToBoundaryCount([-1,-2,-3,6]), 1, 'Test 16');
test(returnToBoundaryCount([3,2,-3,-4]), 0, 'Test 17');
test(returnToBoundaryCount([5,-2,-3,1,4,-4]), 1, 'Test 18');
test(returnToBoundaryCount([-5,-5,10]), 1, 'Test 19');
test(returnToBoundaryCount([7, -3, 2, -4, 1, -1, 3, -3, 2, -2]), 0, 'Test 20');
test(returnToBoundaryCount([5, -2, -3, 1, 4, -4, -6, 6]), 1, 'Test 21');
test(returnToBoundaryCount([-1, -1, -1, -1, -1, 5, -1, -1, -1, -1, -1]), 1, 'Test 22');
test(returnToBoundaryCount([2, -2, 2, -2, 2, -2, 2, -2, 2, -2, 2, -2]), 6, 'Test 23');
test(returnToBoundaryCount([5, -2, 3, -3, 2, -5, 1]), 1, 'Test 24');
test(returnToBoundaryCount([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -20]), 0, 'Test 25');
test(returnToBoundaryCount([1, 2, 3, 4, -10, 1, 2, 3, 4, -10]), 2, 'Test 26');
test(returnToBoundaryCount([-2, -2, -2, 6, -2, -2, -2, 6, -2, -2, -2]), 2, 'Test 27');
test(returnToBoundaryCount([2, -1, 2, -1, 2, -1, 2, -1, 2, -1]), 0, 'Test 28');
test(returnToBoundaryCount([1, 2, 3, 4, 5, -15]), 1, 'Test 29');
test(returnToBoundaryCount([5, 5, -10, 1, -1, 1]), 2, 'Test 30');
test(returnToBoundaryCount([5, -2, 3, -6, 4, -1, -6]), 1, 'Test 31');
test(returnToBoundaryCount([1, -1, 2, -2, 3, -3, 4, -4]), 4, 'Test 32');
test(returnToBoundaryCount([10, -10, 10, -10, 10, -10]), 3, 'Test 33');
test(returnToBoundaryCount([-3, 3, -3, 3, -3, 3]), 3, 'Test 34');
test(returnToBoundaryCount([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 1]), 0, 'Test 35');
test(returnToBoundaryCount([1, 1, 1, 1, -4, 1, 1, 1, 1, -4, 1, 1, 1, 1, -4]), 3, 'Test 36');
test(returnToBoundaryCount([7, -3, 2, -6, 1, 1, 1, -1, 1]), 1, 'Test 37');
test(returnToBoundaryCount([5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5]), 8, 'Test 38');
test(returnToBoundaryCount([5, -5, 5, -5, 5, -5, 5, -5, 5, -5]), 5, 'Test 39');
test(returnToBoundaryCount([2, -2, 2, -2, 2, -2, 2, -2, 2, -2, 2, -2, 2, -2, 2, -2, 2, -2, 2, -2, 2, -2]), 11, 'Test 40');
test(returnToBoundaryCount([4, -1, -3, 2, 2, -4]), 2, 'Test 41');
test(returnToBoundaryCount([7, -3, 3, -7, 4, -2, 2, -4]), 2, 'Test 42');
test(returnToBoundaryCount([-7, 3, 4, -1, -2, 2, 1, -4, 6, -2]), 3, 'Test 43');
test(returnToBoundaryCount([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20]), 0, 'Test 44');
test(returnToBoundaryCount([-1, -1, -1, -1, -1, -1, -1, -1, -1, 9]), 1, 'Test 45');
test(returnToBoundaryCount([-2, 4, -2, -2, 4, -2, -2, 4]), 2, 'Test 46');
test(returnToBoundaryCount([-1, -1, 2, 2, -4, 4, -5, 5, -6, 6]), 1, 'Test 47');
test(returnToBoundaryCount([1, 1, 1, 1, 1, 1, 1, 1, 1, -9]), 1, 'Test 48');
test(returnToBoundaryCount([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), 5, 'Test 49');
test(returnToBoundaryCount([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 10, 'Test 50');
test(returnToBoundaryCount([5, 5, -10, 5, -5, 5, -5]), 3, 'Test 51');
test(returnToBoundaryCount([-3, -2, 5, -1, 4, -6, 2, 3]), 1, 'Test 52');
test(returnToBoundaryCount([-3, 1, 2, -4, 1, 1, 1, -1]), 1, 'Test 53');
test(returnToBoundaryCount([-10, 5, 5, -5, 5, -5, 5, -5, 5]), 4, 'Test 54');
test(returnToBoundaryCount([-1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6]), 0, 'Test 55');
test(returnToBoundaryCount([1, 2, 3, -3, -2, -1, 4, -4, 5, -5]), 3, 'Test 56');
test(returnToBoundaryCount([1, 1, 1, 1, 1, -5, 1, 1, 1, -4, 1, 1, 1]), 2, 'Test 57');
test(returnToBoundaryCount([1, 2, 3, 4, 5, 6, 7, 8, 9, -45]), 1, 'Test 58');
test(returnToBoundaryCount([2, 2, 2, -6, 1, -1, 1, -1, 1]), 3, 'Test 59');
test(returnToBoundaryCount([5, -3, 2, -2, 2, -2, -2, 2]), 1, 'Test 60');
test(returnToBoundaryCount([-2, 2, -2, 2, -2, 2]), 3, 'Test 61');
test(returnToBoundaryCount([10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]), 1, 'Test 62');
test(returnToBoundaryCount([-5, 5, -5, 5, -5, 5, -5]), 3, 'Test 63');
test(returnToBoundaryCount([-10, 5, 5, -3, 3, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 3, 'Test 64');
test(returnToBoundaryCount([7, -2, -2, -2, -1, 8, -1, -2, -2, -2]), 1, 'Test 65');
test(returnToBoundaryCount([1, -1, 1, -1, 1, -1, 1]), 3, 'Test 66');
test(returnToBoundaryCount([4, -1, 2, -5, 0, 3, -3]), 3, 'Test 67');
test(returnToBoundaryCount([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]), 1, 'Test 68');
test(returnToBoundaryCount([5, -2, -2, -1, 10, -5, 5]), 1, 'Test 69');
test(returnToBoundaryCount([3, -1, -2, 3, -1, -2, 3, -1, -2, 3, -1, -2]), 4, 'Test 70');
test(returnToBoundaryCount([7, -3, -1, -2, 3, -4, 1, 1, 1, -3, 5, -2, -1, 1, -1, -1, -1, -1, -1, 1]), 3, 'Test 71');
test(returnToBoundaryCount([1, -1, 2, -2, 3, -3]), 3, 'Test 72');
test(returnToBoundaryCount([-10, 10, -5, 5, -3, 3, -2, 2]), 4, 'Test 73');
test(returnToBoundaryCount([4, -3, 2, -1, 4, -3, 2, -1]), 0, 'Test 74');
test(returnToBoundaryCount([5, -2, 3, -6, 4, -1, -2, 3]), 1, 'Test 75');
test(returnToBoundaryCount([10, -1, -2, -3, -4, -5, -6, -7, -8, -9, 45]), 1, 'Test 76');
test(returnToBoundaryCount([10, -5, 3, -8, 2, -2, 4, -4, 6, -6, 5, -5]), 5, 'Test 77');
test(returnToBoundaryCount([2, 2, 2, 2, -8, 2, 2, 2, 2, -8]), 2, 'Test 78');
test(returnToBoundaryCount([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -100]), 0, 'Test 79');
test(returnToBoundaryCount([2, 3, -5, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), 9, 'Test 80');
test(returnToBoundaryCount([-10, 5, 3, -8, 2, 1, -2, 2, 1, -1]), 0, 'Test 81');
test(returnToBoundaryCount([3, -3, 3, -3, 3, -3, 3, -3, 3, -3]), 5, 'Test 82');
test(returnToBoundaryCount([10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 10, -10]), 10, 'Test 83');
test(returnToBoundaryCount([10, -10, 10, -10, 10, -10, 10, -10]), 4, 'Test 84');
test(returnToBoundaryCount([1, 1, -2, 1, -1, 3, -3, 2, -1, -1]), 4, 'Test 85');
test(returnToBoundaryCount([-1, -2, -3, -4, -5, 15]), 1, 'Test 86');
test(returnToBoundaryCount([2, 3, -5, 4, -4, -3, 3, 2, -2, 1, -1]), 5, 'Test 87');
test(returnToBoundaryCount([-10, 5, 5, -1, 1, -1, 1, 0, 3, -3]), 5, 'Test 88');
test(returnToBoundaryCount([1, -2, 3, -4, 5, -6, 7, -8, 9, -10]), 0, 'Test 89');
test(returnToBoundaryCount([10, -10, 5, -5, 3, -3, 2, -2, 1, -1]), 5, 'Test 90');
test(returnToBoundaryCount([-10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10]), 1, 'Test 91');
test(returnToBoundaryCount([1, 1, 1, 1, 1, -5, 5, -5, 5, -5]), 3, 'Test 92');
test(returnToBoundaryCount([7, -3, -4, 1, 2, -2, -1, 4, -6, 2]), 3, 'Test 93');
test(returnToBoundaryCount([2, -2, 3, -3, 4, -4]), 3, 'Test 94');
test(returnToBoundaryCount([5, -2, -2, -1, 1, 5, -5, 2, -2, 2, -2, 2, -2, 2, -2, 2, -2, 2, -2, 2]), 1, 'Test 95');
test(returnToBoundaryCount([5, -2, 3, -6, 1, 2, -3]), 2, 'Test 96');
test(returnToBoundaryCount([7, -3, -2, 1, 2, -1, 2, -2]), 0, 'Test 97');
test(returnToBoundaryCount([10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]), 1, 'Test 98');
test(returnToBoundaryCount([2, -1, -1, 2, -2, 2, -1, 1, -2, 2]), 3, 'Test 99');
test(returnToBoundaryCount([10, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]), 0, 'Test 100');
test(returnToBoundaryCount([1, 2, 3, 4, 5, -15, 5, 5, 5, -15]), 2, 'Test 101');
test(returnToBoundaryCount([4, -1, -3, 2, 1, -3]), 2, 'Test 102');
test(returnToBoundaryCount([-1, -1, -1, -1, 4, -1, -1, -1, -1, 4, -1, -1, -1, -1, 4]), 3, 'Test 103');
test(returnToBoundaryCount([1, 2, 3, 4, -1, -2, -3, -4]), 1, 'Test 104');
test(returnToBoundaryCount([2, -2, 2, -2, 2, -2, 2, -2, 2, -2]), 5, 'Test 105');
test(returnToBoundaryCount([5, -2, -3, 1, 2, -1, 3, -3, 2, -2, 5, -5]), 1, 'Test 106');
test(returnToBoundaryCount([3, -1, -2, -1, 4, -4, 1, 1, 1, -3]), 2, 'Test 107');
test(returnToBoundaryCount([-10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 108');
test(returnToBoundaryCount([7, -3, 2, -2, 2, -2, 3, -7]), 1, 'Test 109');
test(returnToBoundaryCount([7, 2, -9, 4, -5, 3, -2, 1]), 2, 'Test 110');
test(returnToBoundaryCount([7, 7, -14, 7, -7, 7, -7]), 3, 'Test 111');
test(returnToBoundaryCount([-1, -2, -3, -4, 5, 5, 6, 6, -7, 7]), 1, 'Test 112');
test(returnToBoundaryCount([1, -1, 1, -1, 1, -1, 1, -1]), 4, 'Test 113');
test(returnToBoundaryCount([1, -1, 1, -1, 1, -1]), 3, 'Test 114');
test(returnToBoundaryCount([5, -10, 5, 5, -10, 5]), 2, 'Test 115');
test(returnToBoundaryCount([10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, 1, -1, 1, -1]), 1, 'Test 116');
test(returnToBoundaryCount([1, 1, 1, 1, 1, -5, 1, 1, 1, 1, 1]), 1, 'Test 117');
test(returnToBoundaryCount([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 8, 'Test 118');
test(returnToBoundaryCount([3, 3, 3, -9, 3, -3, 3, -3, 3, -3]), 4, 'Test 119');
test(returnToBoundaryCount([-1, 2, -2, 1, -1, 3, -3, 2, -2]), 1, 'Test 120');
test(returnToBoundaryCount([2, 3, -1, -2, 1, -3, 4, -4, 5, -5, 6, -6, 7, -7]), 5, 'Test 121');
test(returnToBoundaryCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -55]), 1, 'Test 122');
test(returnToBoundaryCount([4, -1, 2, -5, 6, -3, 2, -1, 5, -10]), 1, 'Test 123');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

