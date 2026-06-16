// Test: 457. Circular Array Loop
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { circularArrayLoop } = require("./solution");

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

console.log("\n457. Circular Array Loop\n");

test(circularArrayLoop([-5,1,1,4,2]), true, 'Test 1');
test(circularArrayLoop([-1,2,-1,2,-1]), false, 'Test 2');
test(circularArrayLoop([-1,-2,-3,-4,-5,6]), false, 'Test 3');
test(circularArrayLoop([-2,-3,-4,-5,-6]), false, 'Test 4');
test(circularArrayLoop([1,2,-1,-2,3]), false, 'Test 5');
test(circularArrayLoop([5,1,1,2,2]), false, 'Test 6');
test(circularArrayLoop([1]), false, 'Test 7');
test(circularArrayLoop([5,-1,1,4,2]), true, 'Test 8');
test(circularArrayLoop([-1,-1,-1,-1,-1]), true, 'Test 9');
test(circularArrayLoop([-1,2]), false, 'Test 10');
test(circularArrayLoop([-1,2,-1,-2,-1]), false, 'Test 11');
test(circularArrayLoop([-1,-2,-3,-4,-5]), false, 'Test 12');
test(circularArrayLoop([-5,-4,-3,-2,-1]), true, 'Test 13');
test(circularArrayLoop([-1,1,-1,1,-1]), false, 'Test 14');
test(circularArrayLoop([2,-1,1,2,2]), true, 'Test 15');
test(circularArrayLoop([1,2,3,4,5]), true, 'Test 16');
test(circularArrayLoop([3,1,2,4,3]), true, 'Test 17');
test(circularArrayLoop([1,-1,5,1,4]), true, 'Test 18');
test(circularArrayLoop([-2,1,-1,-2,-2]), false, 'Test 19');
test(circularArrayLoop([-2,-2,-2,-2,-2]), true, 'Test 20');
test(circularArrayLoop([3,1,2]), true, 'Test 21');
test(circularArrayLoop([5,2,3,4,-1]), false, 'Test 22');
test(circularArrayLoop([2,2,2,2,2]), true, 'Test 23');
test(circularArrayLoop([1,2,-3,-4,5,6,-7,-8,9,10,-11,-12,13,14,-15,-16,17,18,-19,-20]), false, 'Test 24');
test(circularArrayLoop([-10,9,8,-7,6,-5,4,-3,2,-1]), false, 'Test 25');
test(circularArrayLoop([-2, -3, -1, 3, 2, 1, 5]), true, 'Test 26');
test(circularArrayLoop([10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -11]), false, 'Test 27');
test(circularArrayLoop([10, -10, 20, -20, 30, -30, 40, -40, 50, -50, 60, -60, 70, -70, 80, -80, 90, -90, 100, -100]), false, 'Test 28');
test(circularArrayLoop([1,2,3,4,5,6,7,8,9,10]), true, 'Test 29');
test(circularArrayLoop([3,2,1,1,1,1,1,1]), true, 'Test 30');
test(circularArrayLoop([1,2,3,4,5,6,7,8,9,10,1]), true, 'Test 31');
test(circularArrayLoop([3, 1, 2, -2, -5, 6, -1]), false, 'Test 32');
test(circularArrayLoop([5,4,3,2,1,-1,-2,-3,-4,-5]), false, 'Test 33');
test(circularArrayLoop([5,1,4,2,0,6,3]), true, 'Test 34');
test(circularArrayLoop([5, -1, 5, -1, 5, -1, 5, -1, 5, -1]), false, 'Test 35');
test(circularArrayLoop([1,2,3,4,-1,-2,-3,-4]), false, 'Test 36');
test(circularArrayLoop([5,-5,5,-5,5,-5,5,-5,5,-5]), false, 'Test 37');
test(circularArrayLoop([2, 3, 1, -4, -4, 2]), false, 'Test 38');
test(circularArrayLoop([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 39');
test(circularArrayLoop([4, 2, 3, 1, 1, -1, -1]), false, 'Test 40');
test(circularArrayLoop([-3, -1, -2, -3, -1, -2, -3, -1, -2, -3]), true, 'Test 41');
test(circularArrayLoop([2,3,-1,4,-1,-2]), false, 'Test 42');
test(circularArrayLoop([-3, 3, 2, 1, -2, -1, 4, -4]), false, 'Test 43');
test(circularArrayLoop([1, 2, 3, 4, 5, -6, -5, -4, -3, -2, -1]), false, 'Test 44');
test(circularArrayLoop([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]), true, 'Test 45');
test(circularArrayLoop([3,1,2,3,1,2,3]), true, 'Test 46');
test(circularArrayLoop([1,2,3,4,5,6,7,8,9,1]), true, 'Test 47');
test(circularArrayLoop([1,2,-1,-2,1,2,-1,-2,1,2,-1,-2]), false, 'Test 48');
test(circularArrayLoop([0, 1, 1, 4, -1, 2, -1, -3, -2, 4, -5, 5, 6, 7, -7, 8, 9, 10, 11, -11, 12, -12, 13, -13, 14, -14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, 22, -22, 23, -23, 24, -24, 25, -25, 26, -26, 27, -27, 28, -28, 29, -29, 30, -30, 31, -31, 32, -32, 33, -33, 34, -34, 35, -35, 36, -36, 37, -37, 38, -38, 39, -39, 40, -40, 41, -41, 42, -42, 43, -43, 44, -44, 45, -45, 46, -46, 47, -47, 48, -48, 49, -49, 50, -50]), false, 'Test 49');
test(circularArrayLoop([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]), true, 'Test 50');
test(circularArrayLoop([5, 4, 3, 2, 1, -5, -4, -3, -2, -1]), false, 'Test 51');
test(circularArrayLoop([5, -1, 3, 2, -3, 4, -4, 2, 1, -1]), false, 'Test 52');
test(circularArrayLoop([-2, 1, -1, -2, -2, 2, -1, 2, 1, -1]), false, 'Test 53');
test(circularArrayLoop([1, 2, 3, 4, 5, -10]), true, 'Test 54');
test(circularArrayLoop([1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1]), false, 'Test 55');
test(circularArrayLoop([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), false, 'Test 56');
test(circularArrayLoop([10,20,30,40,50,60,70,80,90,-10,-20,-30,-40,-50,-60,-70,-80,-90]), false, 'Test 57');
test(circularArrayLoop([2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15, -16, 17, -18, 19, -20]), false, 'Test 58');
test(circularArrayLoop([1,-2,3,-4,5,-6,7,-8,9,-10,11,-12,13,-14,15,-16,17,-18,19,-20]), false, 'Test 59');
test(circularArrayLoop([10, -10, 20, -20, 30, -30, 40, -40, 50, -50]), false, 'Test 60');
test(circularArrayLoop([3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), true, 'Test 61');
test(circularArrayLoop([5,-2,5,-2,5,-2,5,-2]), true, 'Test 62');
test(circularArrayLoop([3,1,2,-3,4,2,1,-4,2,3]), false, 'Test 63');
test(circularArrayLoop([3, 1, 2, -1, -2, 4]), false, 'Test 64');
test(circularArrayLoop([1, 2, -1, 2, -1, 2, -1, 2, -1, 2]), true, 'Test 65');
test(circularArrayLoop([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]), false, 'Test 66');
test(circularArrayLoop([-1, 2, 2, -1, -2, 1]), false, 'Test 67');
test(circularArrayLoop([1,2,3,4,5,6,7,8,9,10,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]), false, 'Test 68');
test(circularArrayLoop([3, 1, 2, -2, -1]), false, 'Test 69');
test(circularArrayLoop([2,1,-1,-2,2,3,-3,-2,1]), false, 'Test 70');
test(circularArrayLoop([1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,-9]), false, 'Test 71');
test(circularArrayLoop([2, 3, -2, 2, -3, 2, -2, 3, -3, 1]), false, 'Test 72');
test(circularArrayLoop([5,3,2,1,4,-2,-1,-3,-1]), false, 'Test 73');
test(circularArrayLoop([2,-2,2,-2,2,-2,2,-2,2,-2,2,-2,2,-2,2,-2,2,-2,2,-2]), true, 'Test 74');
test(circularArrayLoop([1,2,3,4,5,1]), true, 'Test 75');
test(circularArrayLoop([10,-10,10,-10,10,-10,10,-10,10,-10]), false, 'Test 76');
test(circularArrayLoop([5, 5, 2, 1, -2, -1, -3, -5, 4, 4, 3, 2, -2, -3, -4, -5, 1, 1, 2, 3]), false, 'Test 77');
test(circularArrayLoop([1,2,-3,4,-5,6,-7,8,-9,10]), true, 'Test 78');
test(circularArrayLoop([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), false, 'Test 79');
test(circularArrayLoop([10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 10, -10]), true, 'Test 80');
test(circularArrayLoop([-10,-20,-30,-40,-50,-60,-70,-80,-90,10,20,30,40,50,60,70,80,90]), false, 'Test 81');
test(circularArrayLoop([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1]), false, 'Test 82');
test(circularArrayLoop([3,1,2,4,-1]), false, 'Test 83');
test(circularArrayLoop([1, -2, 3, -4, 5, -6, 7, -8, 9, -10]), false, 'Test 84');
test(circularArrayLoop([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20, -21, -22, -23, -24, -25, -26, -27, -28, -29, -30, -31, -32, -33, -34, -35, -36, -37, -38, -39, -40, -41, -42, -43, -44, -45, -46, -47, -48, -49, -50]), false, 'Test 85');
test(circularArrayLoop([-2, -3, -4, -5, 6, 7]), false, 'Test 86');
test(circularArrayLoop([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), true, 'Test 87');
test(circularArrayLoop([-2,-3,-4,-5,-6,-1]), false, 'Test 88');
test(circularArrayLoop([1,2,3,4,5,-1,-2,-3,-4,-5]), false, 'Test 89');
test(circularArrayLoop([5, 1, 3, 2, 2, -1, 4]), false, 'Test 90');
test(circularArrayLoop([10,10,-10,-10,10,-10,10,-10]), false, 'Test 91');
test(circularArrayLoop([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), true, 'Test 92');
test(circularArrayLoop([-1,1,-1,1,-1,1,-1,1]), false, 'Test 93');
test(circularArrayLoop([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]), true, 'Test 94');
test(circularArrayLoop([5,4,3,2,1,0,1,2,3,4,5]), false, 'Test 95');
test(circularArrayLoop([3,1,2,-2,4,2]), true, 'Test 96');
test(circularArrayLoop([3,1,2,4,0,2,-1,-3,-1]), false, 'Test 97');
test(circularArrayLoop([-1,2,1,-2,2,-1,2,-1]), false, 'Test 98');
test(circularArrayLoop([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), true, 'Test 99');
test(circularArrayLoop([5,4,3,2,1,-1]), false, 'Test 100');
test(circularArrayLoop([2,2,-2,-2,2,2,-2,-2]), false, 'Test 101');
test(circularArrayLoop([1,2,-1,-2,3,2,-3,3]), false, 'Test 102');
test(circularArrayLoop([2,-1,1,2,2,3,3,4,4,5,5]), false, 'Test 103');
test(circularArrayLoop([-5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5]), true, 'Test 104');
test(circularArrayLoop([4,-1,2,-1,-1,2,-1,4]), false, 'Test 105');
test(circularArrayLoop([1,-1,2,-2,3,-3,4,-4]), false, 'Test 106');
test(circularArrayLoop([1,1,1,1,1,1,1,1,1,1]), true, 'Test 107');
test(circularArrayLoop([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), false, 'Test 108');
test(circularArrayLoop([1, -1, 1, -1, 1, -1]), false, 'Test 109');
test(circularArrayLoop([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), true, 'Test 110');
test(circularArrayLoop([1, 2, 3, -4, -3, -2, -1, 4, 3, 2]), false, 'Test 111');
test(circularArrayLoop([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]), true, 'Test 112');
test(circularArrayLoop([10,-10,10,-10,10,-10]), true, 'Test 113');
test(circularArrayLoop([-2, -3, -4, -5, -6, -7, -8, -9, -10, -1]), false, 'Test 114');
test(circularArrayLoop([-2,-3,-4,0,-1,-6]), false, 'Test 115');
test(circularArrayLoop([1, 1, 1, 1, 1, -1, -1, -1, -1, -1]), false, 'Test 116');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

