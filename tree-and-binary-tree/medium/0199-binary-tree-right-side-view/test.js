// Test: 199. Binary Tree Right Side View
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { rightSideView } = require("./solution");

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

console.log("\n199. Binary Tree Right Side View\n");

test(rightSideView([1,null,3]), [1, 3], 'Test 1');
test(rightSideView([1,2,3,4,null,null,null,5]), [1, 3, 4, 5], 'Test 2');
test(rightSideView([]), [], 'Test 3');
test(rightSideView([1,2,3,null,5,null,4]), [1, 3, 4], 'Test 4');
test(rightSideView([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 5');
test(rightSideView([1,2,3,null,null,4,null,null,null,5,null,null,null,6,null,null,null,7,null,null,null,8,null,null,null,9,null,null,null,10]), [1, 3, 4], 'Test 6');
test(rightSideView([1,2,3,4,null,null,5,null,null,6,null,null,7]), [1, 3, 5, 6, 7], 'Test 7');
test(rightSideView([10,5,15,3,7,null,18,1,null,6,9]), [10, 15, 18, 9], 'Test 8');
test(rightSideView([1,2,3,4,null,null,5,null,6,null,7,8,9,null,null,10,11,12,null,null,13,null,null,14]), [1, 3, 5, 7, 9, 12, 14], 'Test 9');
test(rightSideView([5,3,8,1,4,null,9,2,null,null,null,null,10]), [5, 8, 9, 10], 'Test 10');
test(rightSideView([1,2,3,4,5,6,7,null,null,null,null,null,null,8,9]), [1, 3, 7, 9], 'Test 11');
test(rightSideView([1,2,null,3,null,4,null,5,null,6]), [1, 2, 3, 4, 5, 6], 'Test 12');
test(rightSideView([1,2,3,null,5,null,4,null,6,null,7,null,8,null,9]), [1, 3, 4, 7, 9], 'Test 13');
test(rightSideView([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 14');
test(rightSideView([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 15');
test(rightSideView([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8]), [1, 2, 3, 4, 5, 6, 7, 8], 'Test 16');
test(rightSideView([1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,14,15]), [1, 3, 7, 13, 15], 'Test 17');
test(rightSideView([1,null,2,3,null,4,null,5,null,6,null,7,null,8,null,9]), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 18');
test(rightSideView([1,null,2,3,null,null,4,5,6,null,null,null,null,7,null,8,9]), [1, 2, 3, 4, 6], 'Test 19');
test(rightSideView([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,16]), [1, 3, 7, 15, 16], 'Test 20');
test(rightSideView([1,2,3,4,null,5,6,7,null,8,9,null,10,null,null,11,null,12]), [1, 3, 6, 10, 12], 'Test 21');
test(rightSideView([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), [1, 3, 7, 15, 31], 'Test 22');
test(rightSideView([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 'Test 23');
test(rightSideView([1,2,3,4,5,6,7,null,null,8,9,10,11,null,null,null,null,12,13,14,15]), [1, 3, 7, 11, 15], 'Test 24');
test(rightSideView([1,2,3,4,5,null,6,7,null,null,null,null,8]), [1, 3, 6, 8], 'Test 25');
test(rightSideView([1,2,3,null,null,null,4,null,null,5,null,null,6,null,null,7]), [1, 3, 4], 'Test 26');
test(rightSideView([100,-50,50,-75,-25,25,75,-100,0,0,100]), [100, 50, 75, 100], 'Test 27');
test(rightSideView([1,null,2,3,4,5,6,null,null,7,8,9,10,null,null,11,12,13,14,15]), [1, 2, 4, 6, 10, 15], 'Test 28');
test(rightSideView([3,9,20,null,null,15,7]), [3, 20, 7], 'Test 29');
test(rightSideView([1,2,3,4,5,null,null,6,null,7,null,8,null,9]), [1, 3, 5, 7, 9], 'Test 30');
test(rightSideView([1,2,3,null,null,4,5,null,null,null,6,7,8,9]), [1, 3, 5, 6, 8, 9], 'Test 31');
test(rightSideView([1,2,3,4,null,5,null,6,null,7,null,8,null,9]), [1, 3, 5, 7, 9], 'Test 32');
test(rightSideView([1,2,3,4,null,5,null,6,7,null,8,null,9,null,10]), [1, 3, 5, 8, 10], 'Test 33');
test(rightSideView([1,2,3,null,5,6,null,7,null,8,null,9,null,10,null,11]), [1, 3, 6, 8, 10, 11], 'Test 34');
test(rightSideView([1,2,3,4,5,null,null,null,null,null,null,6,7,8,9,10,11]), [1, 3, 5], 'Test 35');
test(rightSideView([1,2,3,null,null,4,5,null,null,6,7]), [1, 3, 5, 7], 'Test 36');
test(rightSideView([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [1, 3, 7, 15, 20], 'Test 37');
test(rightSideView([1,2,null,3,4,5,6,7,null,null,null,null,null,null,8]), [1, 2, 4, 7, 8], 'Test 38');
test(rightSideView([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [1, 3, 7, 15], 'Test 39');
test(rightSideView([1,2,null,3,null,4,null,5]), [1, 2, 3, 4, 5], 'Test 40');
test(rightSideView([1,2,3,4,5,6,7]), [1, 3, 7], 'Test 41');
test(rightSideView([1,null,2,null,3,null,4,null,5]), [1, 2, 3, 4, 5], 'Test 42');
test(rightSideView([1,2,3,null,4,5,6,7,null,null,null,null,null,8,9]), [1, 3, 6, 7, 9], 'Test 43');
test(rightSideView([1,2,3,4,null,5,6,7,null,8,9,null,10,null,null,11]), [1, 3, 6, 10, 11], 'Test 44');
test(rightSideView([1,2,3,4,5,6,7,null,null,null,8,null,null,null,9]), [1, 3, 7, 9], 'Test 45');
test(rightSideView([1,2,3,null,5,6,null,7,null,8,9]), [1, 3, 6, 9], 'Test 46');
test(rightSideView([1,2,3,4,null,6,7,8,9,10,11,12,13,null,null,null,null,14]), [1, 3, 7, 13, 14], 'Test 47');
test(rightSideView([1,null,2,3,null,null,4,null,null,5,6]), [1, 2, 3, 4], 'Test 48');
test(rightSideView([1,2,3,4,5,6,7,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,9]), [1, 3, 7, 8], 'Test 49');
test(rightSideView([1,2,3,4,5,null,null,6,7,8,9,null,10,null,null,null,null,11,12,null,null,13,null,14]), [1, 3, 5, 9, 12, 14], 'Test 50');
test(rightSideView([1,2,null,3,4,null,null,5,6]), [1, 2, 4, 6], 'Test 51');
test(rightSideView([1,2,3,null,5,null,4,6,7]), [1, 3, 4, 7], 'Test 52');
test(rightSideView([1,2,null,4,null,6,7,null,null,null,8]), [1, 2, 4, 7, 8], 'Test 53');
test(rightSideView([1,2,3,4,null,5,null,6,7,8,null,9,null,10,11]), [1, 3, 5, 8, 11], 'Test 54');
test(rightSideView([1,2,3,4,5,6,7,8,9,10,null,11,12,13,14,15]), [1, 3, 7, 14, 15], 'Test 55');
test(rightSideView([1,null,2,null,null,null,null,3,null,null,null,4,null,null,null,5]), [1, 2], 'Test 56');
test(rightSideView([5,1,4,null,null,3,6]), [5, 4, 6], 'Test 57');
test(rightSideView([1,2,null,3,4,null,5,null,null,6,7,null,8,9,null,null,null,null,10]), [1, 2, 4, 5, 7, 9, 10], 'Test 58');
test(rightSideView([1,2,3,4,null,5,6,null,null,7,8,null,null,9,10,null,null,11,12]), [1, 3, 6, 8, 10, 12], 'Test 59');
test(rightSideView([1,2,null,3,4,null,null,5,6,null,null,7,8,null,null,9,10,null,null,11,12]), [1, 2, 4, 6, 8, 10, 12], 'Test 60');
test(rightSideView([1,null,2,3,null,null,4,5,null,null,6,7,null,null,8,9]), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 61');
test(rightSideView([1,2,3,null,4,5,6,null,null,7,8,9,10,null,null,11,12]), [1, 3, 6, 10, 12], 'Test 62');
test(rightSideView([1,null,2,null,null,3,4]), [1, 2], 'Test 63');
test(rightSideView([1,2,null,3,null,4,null,5,null,6,null,7]), [1, 2, 3, 4, 5, 6, 7], 'Test 64');
test(rightSideView([1,2,3,null,null,4,5,null,null,null,null,6,7,null,null,8,9]), [1, 3, 5], 'Test 65');
test(rightSideView([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9]), [1, 3, 5, 7, 9], 'Test 66');
test(rightSideView([0,2,4,1,null,3,-1,5,1,null,6,null,8]), [0, 4, -1, 8], 'Test 67');
test(rightSideView([1,2,3,null,null,4,5,6,null,7,8,9,10,null,null,11,12]), [1, 3, 5, 8, 12], 'Test 68');
test(rightSideView([1,null,2,null,3,null,4,null,5,null,6]), [1, 2, 3, 4, 5, 6], 'Test 69');
test(rightSideView([1,2,3,4,5,null,6,null,7,8,9,null,null,null,10]), [1, 3, 6, 9, 10], 'Test 70');
test(rightSideView([1,2,null,3,4,null,5,6,7,null,null,8,null,9,10]), [1, 2, 4, 7, 10], 'Test 71');
test(rightSideView([1,2,3,4,5,null,6,7,null,8,9,10,null,11]), [1, 3, 6, 10, 11], 'Test 72');
test(rightSideView([1,2,3,4,5,6,7,8,9,10,11,null,13,null,null,14]), [1, 3, 7, 13, 14], 'Test 73');
test(rightSideView([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,16]), [1, 3, 7, 15, 16], 'Test 74');
test(rightSideView([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9,null,null,10,11]), [1, 3, 5, 7, 9, 11], 'Test 75');
test(rightSideView([1,2,3,null,4,5,6,null,null,7,8,null,null,9,10]), [1, 3, 6, 8, 10], 'Test 76');
test(rightSideView([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 77');
test(rightSideView([1,2,3,null,4,null,5,6,7,8,9,10,11,12,13]), [1, 3, 5, 9, 13], 'Test 78');
test(rightSideView([1,2,3,null,4,null,5,null,6,null,7,null,8]), [1, 3, 5, 7, 8], 'Test 79');
test(rightSideView([1,2,null,3,4,null,5,null,null,6,null,null,null,7]), [1, 2, 4, 5, 6], 'Test 80');
test(rightSideView([-10,-5,-15,-3,-8,-20,-18,-1,-4,null,-9,null,null,-6,-7]), [-10, -15, -18, -7], 'Test 81');
test(rightSideView([1,2,3,4,null,5,6,null,7,8,null,9,10,null,11]), [1, 3, 6, 10, 11], 'Test 82');
test(rightSideView([1,2,3,4,null,6,7,null,8,null,null,null,9]), [1, 3, 7, 9], 'Test 83');
test(rightSideView([1,2,3,4,5,6,7,null,8,9,10,11,12,13,14]), [1, 3, 7, 14], 'Test 84');
test(rightSideView([1,2,3,null,5,6,null,7,8]), [1, 3, 6, 8], 'Test 85');
test(rightSideView([1,2,3,4,null,5,null,null,6,null,7,null,8,null,9]), [1, 3, 5, 7, 9], 'Test 86');
test(rightSideView([1,2,3,null,4,null,5,null,6,null,7]), [1, 3, 5, 7], 'Test 87');
test(rightSideView([1,2,3,4,5,null,6,null,null,7,8]), [1, 3, 6, 8], 'Test 88');
test(rightSideView([1,2,3,4,null,6,7,null,8,9,null,null,null,10,11]), [1, 3, 7, 9, 11], 'Test 89');
test(rightSideView([1,2,3,null,null,4,5,null,null,null,null,6,null,null,7]), [1, 3, 5], 'Test 90');
test(rightSideView([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,16,null,null,17,null,18,null,null,19,null,null,20]), [1, 3, 7, 15, 20], 'Test 91');
test(rightSideView([1,2,null,3,4,5,null,6,7,null,null,8,null,null,9,null,10]), [1, 2, 4, 7, 9, 10], 'Test 92');
test(rightSideView([1,2,3,4,5,null,null,6,7,null,8,9,null,null,10]), [1, 3, 5, 8, 10], 'Test 93');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

