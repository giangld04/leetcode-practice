// Test: 515. Find Largest Value In Each Tree Row
// 77 test cases from LeetCodeDataset
// Run: node test.js

const { largestValues } = require("./solution");

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

console.log("\n515. Find Largest Value In Each Tree Row\n");

test(largestValues([1,null,2,null,3,null,4,null,5]), [1, 2, 3, 4, 5], 'Test 1');
test(largestValues([1,2,3]), [1, 3], 'Test 2');
test(largestValues([1,3,2,5,3,null,9]), [1, 3, 9], 'Test 3');
test(largestValues([0]), [0], 'Test 4');
test(largestValues([]), [], 'Test 5');
test(largestValues([1,2,3,4,5,6,7]), [1, 3, 7], 'Test 6');
test(largestValues([3,1,4,3,null,1,5]), [3, 4, 5], 'Test 7');
test(largestValues([3,1,4,null,2]), [3, 4, 2], 'Test 8');
test(largestValues([1,2,3,4,5,6,7,null,8,9,10,11,12,13,null,null,14]), [1, 3, 7, 13, 14], 'Test 9');
test(largestValues([1,2,3,4,5,6,7,null,null,8,9,10,11,null,null,null,12,null,null,13,null,null,14,null,null,15]), [1, 3, 7, 11, 14, 15], 'Test 10');
test(largestValues([0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14]), [0, -1, -3, -7], 'Test 11');
test(largestValues([3,1,4,null,null,2]), [3, 4, 2], 'Test 12');
test(largestValues([1,3,2,5,3,9,7,8,6,4,null,11,13,null,10,null,null,12]), [1, 3, 9, 13, 12], 'Test 13');
test(largestValues([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 14');
test(largestValues([100,90,80,70,60,50,40,30,20,10,-10,-20,-30,-40,-50]), [100, 90, 70, 30], 'Test 15');
test(largestValues([1,null,3,2,4,null,5,6,null,null,7]), [1, 3, 4, 6, 7], 'Test 16');
test(largestValues([2147483647,-2147483648,null,2147483647]), [2147483647, -2147483648, 2147483647], 'Test 17');
test(largestValues([1,3,2,5,3,null,9,6,null,7,null,10,null,null,8]), [1, 3, 9, 10, 8], 'Test 18');
test(largestValues([3,9,20,null,null,15,7,null,null,8,12]), [3, 20, 15, 12], 'Test 19');
test(largestValues([5,3,8,1,4,7,9,null,null,2,null,null,null,null,10]), [5, 8, 9, 10], 'Test 20');
test(largestValues([-10,-5,-3,-6,-20,0,5,null,null,-8,null,-15,-1]), [-10, -3, 5, -1], 'Test 21');
test(largestValues([2,1,3,0,7,9,1,2,null,1,0,null,null,8,8,null,null,null,null,7]), [2, 3, 9, 8, 7], 'Test 22');
test(largestValues([1,3,2,5,3,null,9,6,7,null,null,null,null,8,10,11,12,13,14,15]), [1, 3, 9, 7, 12, 15], 'Test 23');
test(largestValues([-10,-5,-15,-3,-8,-18,-12,-20,-4,-7,-17,-13,null,-6]), [-10, -5, -3, -4], 'Test 24');
test(largestValues([3,9,20,null,null,15,7]), [3, 20, 15], 'Test 25');
test(largestValues([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), [1, 3, 7, 15, 31, 40], 'Test 26');
test(largestValues([10,5,15,null,null,6,20]), [10, 15, 20], 'Test 27');
test(largestValues([1,null,3,null,5,null,7,null,9,null,11,null,13]), [1, 3, 5, 7, 9, 11, 13], 'Test 28');
test(largestValues([100,-100,50,-50,25,0,25,null,null,-25,0,25,null,null,null,-25,null,null,25]), [100, 50, 25, 25, 25], 'Test 29');
test(largestValues([0,0,0,null,0,0,null,null,0,0,null,null,0]), [0, 0, 0, 0, 0], 'Test 30');
test(largestValues([1,3,2,5,3,9,8,6,7,4,10]), [1, 3, 9, 10], 'Test 31');
test(largestValues([5,3,9,1,7,8,10,0,2,6,4,null,null,null,null,null,11]), [5, 9, 10, 6, 11], 'Test 32');
test(largestValues([10,5,15,3,7,null,18]), [10, 15, 18], 'Test 33');
test(largestValues([10,5,15,3,7,12,20,1,null,6,null,null,null,14,18]), [10, 15, 20, 18], 'Test 34');
test(largestValues([1,2,2,3,3,null,null,4,4,4,4]), [1, 2, 3, 4], 'Test 35');
test(largestValues([10,5,15,3,7,13,18,1,4,6,8,12,14,17,20]), [10, 15, 18, 20], 'Test 36');
test(largestValues([1000000000,999999999,1000000001,999999998,999999997,1000000002,1000000003]), [1000000000, 1000000001, 1000000003], 'Test 37');
test(largestValues([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,null,null,null,null,21]), [1, 3, 7, 15, 21], 'Test 38');
test(largestValues([1,null,2,null,3,null,4,null,5,null,6,null,7]), [1, 2, 3, 4, 5, 6, 7], 'Test 39');
test(largestValues([1,3,2,5,3,null,9,6,null,8,null,10,null,11,null,12,-13,null,-14,null,-15]), [1, 3, 9, 10, 12, -15], 'Test 40');
test(largestValues([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 41');
test(largestValues([1,3,2,5,3,null,9,6,7]), [1, 3, 9, 7], 'Test 42');
test(largestValues([1,3,2,5,3,null,9,6,7,null,null,null,null,8,10]), [1, 3, 9, 7, 10], 'Test 43');
test(largestValues([1,3,2,5,3,null,9,6,7,null,null,null,11,12,null,13,14]), [1, 3, 9, 11, 14], 'Test 44');
test(largestValues([5,1,null,4,null,2,null,null,3]), [5, 1, 4, 2, 3], 'Test 45');
test(largestValues([1,3,2,5,3,null,9,6,null,8,null,10,null,11,null,12]), [1, 3, 9, 10, 12], 'Test 46');
test(largestValues([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8]), [1, 2, 3, 4, 5, 6, 7, 8], 'Test 47');
test(largestValues([5,1,4,null,null,3,6]), [5, 4, 6], 'Test 48');
test(largestValues([7,5,8,3,6,9,10,null,null,4,null,null,11]), [7, 8, 10, 11], 'Test 49');
test(largestValues([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180]), [100, 150, 175, 180], 'Test 50');
test(largestValues([2147483647]), [2147483647], 'Test 51');
test(largestValues([1,3,2,5,3,null,9,6,null,7,null,10,null,null,null,11]), [1, 3, 9, 10, 11], 'Test 52');
test(largestValues([9,3,12,null,null,11,13]), [9, 12, 13], 'Test 53');
test(largestValues([-100,50,-50,25,75,-25,25]), [-100, 50, 75], 'Test 54');
test(largestValues([1,2,3,4,null,null,7,8,null,10,null,12,null,14,null,16]), [1, 3, 7, 10, 14, 16], 'Test 55');
test(largestValues([7,10,null,5,null,1,null,null,-1,null,-3,null,6,null,null,-5,null]), [7, 10, 5, 1, -1, -3, 6], 'Test 56');
test(largestValues([5,3,6,2,4,null,7]), [5, 6, 7], 'Test 57');
test(largestValues([1,2,3,4,null,null,5,6,null,7,null,8,null,9]), [1, 3, 5, 7, 9], 'Test 58');
test(largestValues([2147483647,-2147483648,null,-2147483648,null,null,2147483647]), [2147483647, -2147483648, -2147483648, 2147483647], 'Test 59');
test(largestValues([1,3,2,5,3,null,9,6,7,null,null,null,8]), [1, 3, 9, 8], 'Test 60');
test(largestValues([5,3,7,2,4,6,8,null,null,null,null,null,null,null,9]), [5, 7, 8, 9], 'Test 61');
test(largestValues([-10,-20,-30,-40,-50,-60,-70,-80,-90,-100]), [-10, -20, -40, -80], 'Test 62');
test(largestValues([10,null,5,null,null,null,15,null,7]), [10, 5], 'Test 63');
test(largestValues([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [1, 3, 7, 15, 20], 'Test 64');
test(largestValues([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [1, 3, 7, 15], 'Test 65');
test(largestValues([100,50,150,25,75,125,175,10,40,60,90,110,140,160,190]), [100, 150, 175, 190], 'Test 66');
test(largestValues([1,2,2,3,4,4,3]), [1, 2, 4], 'Test 67');
test(largestValues([1,2,2,3,3,3,3,4,4,4,4,4,4,4,4]), [1, 2, 3, 4], 'Test 68');
test(largestValues([5,3,6,2,4,null,null,1]), [5, 6, 4, 1], 'Test 69');
test(largestValues([5,3,9,-10,null,2,8,6,null,null,null,null,4,null,null,-1]), [5, 9, 8, 6, -1], 'Test 70');
test(largestValues([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), [1, 3, 7, 15, 31], 'Test 71');
test(largestValues([-1,-2,-3,-4,null,-5,-6]), [-1, -2, -4], 'Test 72');
test(largestValues([5,8,5,8,null,null,5,null,4,null,9,7,6]), [5, 8, 8, 9, 7], 'Test 73');
test(largestValues([1,null,null,2,null,null,3,null,null,4,null,null,5,null,null,6,null,null,7,null,null,8,null,null,9]), [1], 'Test 74');
test(largestValues([1,null,3,null,null,2,null,null,4,null,null,null,5,null,null,null,null,null,6]), [1, 3], 'Test 75');
test(largestValues([-100,-200,-300,-400,null,-500,-600]), [-100, -200, -400], 'Test 76');
test(largestValues([5,4,8,11,null,13,4,7,2,null,null,5,1]), [5, 8, 13, 7], 'Test 77');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

