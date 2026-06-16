// Test: 152. Maximum Product Subarray
// 91 test cases from LeetCodeDataset
// Run: node test.js

const { maxProduct } = require("./solution");

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

console.log("\n152. Maximum Product Subarray\n");

test(maxProduct([2,-5,-2,-4,3]), 24, 'Test 1');
test(maxProduct([1]), 1, 'Test 2');
test(maxProduct([-2,3,-4]), 24, 'Test 3');
test(maxProduct([10,-20,0,5,1]), 10, 'Test 4');
test(maxProduct([3,-1,4]), 4, 'Test 5');
test(maxProduct([-1,-2,-3,0]), 6, 'Test 6');
test(maxProduct([0,2]), 2, 'Test 7');
test(maxProduct([-1,2,-3,4,-5,6,-7,8,-9,10]), 3628800, 'Test 8');
test(maxProduct([2,3,-2,4]), 6, 'Test 9');
test(maxProduct([1,2,-1,4]), 4, 'Test 10');
test(maxProduct([0,2,0]), 2, 'Test 11');
test(maxProduct([-1,-2,-3,-4]), 24, 'Test 12');
test(maxProduct([-1]), -1, 'Test 13');
test(maxProduct([-2,0,-1]), 0, 'Test 14');
test(maxProduct([-2,3,-4,5,7,-8,2,3]), 20160, 'Test 15');
test(maxProduct([1,2,3,4,5]), 120, 'Test 16');
test(maxProduct([1,2,3,4,5,6,7,8,9,10]), 3628800, 'Test 17');
test(maxProduct([0,2,3,-2,4,-1,5]), 240, 'Test 18');
test(maxProduct([-10,0,10,20,30,-40,50,60,-70,80]), 4032000000000, 'Test 19');
test(maxProduct([-1,0,-1,0,-1,0,-1,0,-1,0]), 0, 'Test 20');
test(maxProduct([2,3,-2,4,-1,5,6]), 1440, 'Test 21');
test(maxProduct([1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), 1, 'Test 22');
test(maxProduct([10,-10,20,-20,30,-30,40,-40,50]), 2880000000000, 'Test 23');
test(maxProduct([1,-1,1,-1,1,-1,1,-1]), 1, 'Test 24');
test(maxProduct([-2,-3,7,-4,0,5,-8,3,6]), 84, 'Test 25');
test(maxProduct([5,0,5,-1,0,5,-1,0,5,-1]), 5, 'Test 26');
test(maxProduct([0, 2, -3, 4, -5, 6]), 720, 'Test 27');
test(maxProduct([0,2,-3,4,-5,6]), 720, 'Test 28');
test(maxProduct([2, 3, 0, -1, 4, 5, 0, -2, 3, 0]), 20, 'Test 29');
test(maxProduct([2,3,0,-1,-2,4,0,5,6,0,-7,8,-9]), 504, 'Test 30');
test(maxProduct([1,0,-1,0,1,-1,0,1,0]), 1, 'Test 31');
test(maxProduct([5,6,-3,4,0,2,3,-2,4]), 30, 'Test 32');
test(maxProduct([10, -10, 10, -10, 10, -10]), 100000, 'Test 33');
test(maxProduct([5, 6, -3, 4, 0, -1, 2, -5]), 30, 'Test 34');
test(maxProduct([0,2,3,-2,4,-1,5,6]), 1440, 'Test 35');
test(maxProduct([2,-5,3,1,-4,2]), 240, 'Test 36');
test(maxProduct([5,3,-1,2,0,-6,-2,0,5,3,-1,2,0,-6,-2]), 15, 'Test 37');
test(maxProduct([0,0,0,0,0,0,0,0,0,0]), 0, 'Test 38');
test(maxProduct([-2,-3,0,-2,-40,0,-10]), 80, 'Test 39');
test(maxProduct([0,2,-3,4,-1,2,1,-5,4]), 160, 'Test 40');
test(maxProduct([10,-2,-3,5,-10,0,9,6]), 300, 'Test 41');
test(maxProduct([100,-100,50,-50,25,-25,10,-10,5,-5]), 7812500000000, 'Test 42');
test(maxProduct([-2,0,-1,0,1,2,-3]), 2, 'Test 43');
test(maxProduct([5,-2,-3,-4,-5,-6,-7,-8,-9,-10]), 1814400, 'Test 44');
test(maxProduct([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]), 2880, 'Test 45');
test(maxProduct([-1,-2,0,1,-3,4,-5,6,-7,8,-9,10]), 1814400, 'Test 46');
test(maxProduct([1, 0, -1, 0, 1, 0, -1, 0, 1]), 1, 'Test 47');
test(maxProduct([10,-10,10,-10,10,-10,10]), 100000, 'Test 48');
test(maxProduct([-10,0,0,0,0,0,0,0,0,-10]), 0, 'Test 49');
test(maxProduct([-10, 0, 10, 0, -10, 0, 10, 0, -10, 0]), 10, 'Test 50');
test(maxProduct([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 3628800, 'Test 51');
test(maxProduct([1,0,1,0,1,0,1,0,1,0]), 1, 'Test 52');
test(maxProduct([-3,-1,0,2,4,-2,0,-1]), 8, 'Test 53');
test(maxProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 3628800, 'Test 54');
test(maxProduct([3,-1,4,1,5,-9,2,6,5,3,5]), 486000, 'Test 55');
test(maxProduct([5,3,-2,5,-1,5,-1,0,5]), 750, 'Test 56');
test(maxProduct([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]), 1, 'Test 57');
test(maxProduct([1, -2, 3, -4, 5, -6, 7, -8, 9, -10]), 1814400, 'Test 58');
test(maxProduct([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]), 120, 'Test 59');
test(maxProduct([-10,0,5,2,-3,-2,4,5,0,-1,2]), 1200, 'Test 60');
test(maxProduct([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 61');
test(maxProduct([1,-2,3,-4,5,-6,7,-8,9,-10]), 1814400, 'Test 62');
test(maxProduct([3,-1,4,1,5,-9,2,6,-5,3,5]), 162000, 'Test 63');
test(maxProduct([0,2,-3,4,-1,0,5,-2]), 24, 'Test 64');
test(maxProduct([2, -5, -2, -4, 3]), 24, 'Test 65');
test(maxProduct([-10, 9, -10, 10, -1, -100]), 900000, 'Test 66');
test(maxProduct([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]), 3628800, 'Test 67');
test(maxProduct([3,-1,4,-1,5,-9,2,6,-5,3,5]), 486000, 'Test 68');
test(maxProduct([1,0,-1,0,-2,0,1,0,-1,0,-2,0]), 1, 'Test 69');
test(maxProduct([-1,-1,-1,-1,-1,-1,-1,-1]), 1, 'Test 70');
test(maxProduct([100,-100,100,-100,100,-100,100,-100,100,-100]), 1000000000000000000, 'Test 71');
test(maxProduct([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]), 3628800, 'Test 72');
test(maxProduct([10, -10, 0, 10, -10, 0, 10]), 10, 'Test 73');
test(maxProduct([1,-2,3,-4,5,-6,7,-8,9]), 362880, 'Test 74');
test(maxProduct([0,2,-3,-4,5,0,1]), 120, 'Test 75');
test(maxProduct([1,-1,1,-1,1,-1,1,-1,1,-1]), 1, 'Test 76');
test(maxProduct([-10,-10,-10,-10,-10]), 10000, 'Test 77');
test(maxProduct([-2,3,-4,5,-6,7,-8,9,-10,11]), 19958400, 'Test 78');
test(maxProduct([1,1,1,1,1,1,1,1,1,1]), 1, 'Test 79');
test(maxProduct([-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]), 3628800, 'Test 80');
test(maxProduct([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]), 1, 'Test 81');
test(maxProduct([1,2,3,-4,-5,-6,7,8,9,10,-11]), 39916800, 'Test 82');
test(maxProduct([10,-10,10,-10,10]), 100000, 'Test 83');
test(maxProduct([5, -3, 1, -2, 0, 4, -2, 3, -1]), 30, 'Test 84');
test(maxProduct([10,-10,10,-10,10,-10]), 100000, 'Test 85');
test(maxProduct([-10, -20, 0, -5, -7, 0, 2, -1]), 200, 'Test 86');
test(maxProduct([1,2,3,0,-1,-2,-3,-4,5,6]), 720, 'Test 87');
test(maxProduct([1,2,3,0,-1,-2,-3,0,4,5,6,0,-7,-8,-9,0,10,11,12]), 1320, 'Test 88');
test(maxProduct([1, -2, 3, -4, 5, -6, 7, -8]), 40320, 'Test 89');
test(maxProduct([10,-10,10,-10,10,-10,10,-10]), 100000000, 'Test 90');
test(maxProduct([2,0,1,0,2,3,-2,4,-1,5]), 240, 'Test 91');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

