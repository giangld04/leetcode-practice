// Test: 1367. Linked List In Binary Tree
// 85 test cases from LeetCodeDataset
// Run: node test.js

const { isSubPath } = require("./solution");

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

console.log("\n1367. Linked List In Binary Tree\n");

test(isSubPath([4,2,8], [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]), true, 'Test 1');
test(isSubPath([1,4,2,6], [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]), true, 'Test 2');
test(isSubPath([1,4,2,6,8], [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]), false, 'Test 3');
test(isSubPath([10,1,3,7], [10,5,15,3,7,13,18,1,null,2,null,4,null,6,null,14,null,17]), false, 'Test 4');
test(isSubPath([7,8,9], [5,4,1,null,null,7,8,null,null,null,9]), false, 'Test 5');
test(isSubPath([20,21,22,23,24,25], [10,15,20,12,16,18,22,8,13,17,19,21,23,7,9,11,14,24,25]), false, 'Test 6');
test(isSubPath([1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 7');
test(isSubPath([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,9,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), false, 'Test 8');
test(isSubPath([1,3,5,7,9], [1,null,3,null,5,null,7,null,9]), true, 'Test 9');
test(isSubPath([1,3,5,7,9], [1,3,5,7,9,1,3,5,7,9,1,3,5,7,9,1,3,5,7,9,1,3,5,7,9,1,3,5,7,9]), false, 'Test 10');
test(isSubPath([9,8,7,6,5], [9,8,7,6,5,null,null,null,null,null,null]), false, 'Test 11');
test(isSubPath([2,1,3], [1,2,3,null,null,4,5]), false, 'Test 12');
test(isSubPath([3,2,1], [3,2,1,null,null,2,null,null,1]), false, 'Test 13');
test(isSubPath([5,4,3,2,1], [5,4,3,2,1,null,null,null,null,null,null]), false, 'Test 14');
test(isSubPath([1,2,3,4,5], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), false, 'Test 15');
test(isSubPath([1,2,3,4,5,6,7], [1,2,3,4,5,6,7]), false, 'Test 16');
test(isSubPath([1,2,3,4,5], [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), true, 'Test 17');
test(isSubPath([3,6,9,12], [3,6,9,12,15,18,21,24,27,30,33,36,39,42,45]), false, 'Test 18');
test(isSubPath([8,9,10,11], [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), false, 'Test 19');
test(isSubPath([10,9,8], [10,9,8,8,null,9,8,7,null,8,null,6,8,null,8,5,null,8,null,8,4,null,8,null,8,3,null,8,null,8,2,null,8,null,8,1,null,8]), true, 'Test 20');
test(isSubPath([3,3,3], [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), true, 'Test 21');
test(isSubPath([15,16,17,18,19,20], [10,15,20,12,16,18,22,8,13,17,19,21,23,7,9,11,14,24,25]), false, 'Test 22');
test(isSubPath([5,6,7], [5,3,6,2,4,null,7,null,null,6,null,null,null,null,7]), true, 'Test 23');
test(isSubPath([4,2,1,3], [4,2,1,null,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), false, 'Test 24');
test(isSubPath([2,1,3], [1,2,3,2,1,null,4,null,null,1,null,null,3,null,null,2,null,null,1]), false, 'Test 25');
test(isSubPath([5,8,9,7,3], [5,3,8,5,8,9,1,null,7,null,null,null,9,null,null,null,7,null,null,null,3,null,null,null,null,null,null,null,null,null,null,null,null]), false, 'Test 26');
test(isSubPath([10,20,30,40], [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,null,null,160,170,180,190,200,210,220,230,240,250]), false, 'Test 27');
test(isSubPath([8,7,6], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), false, 'Test 28');
test(isSubPath([25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), false, 'Test 29');
test(isSubPath([7,1,5], [3,7,7,null,1,null,null,null,5,null,6,null,null,8]), true, 'Test 30');
test(isSubPath([10,5,3], [10,5,10,5,3,10,10,null,null,3,null,null,10,10,10,3,null,null,10,null,null,null,null,10,10,null,null,null,null,10]), true, 'Test 31');
test(isSubPath([1,2,3,4,5], [1,2,3,null,4,null,5,null,6,null,7]), false, 'Test 32');
test(isSubPath([5,3,8,6], [5,3,8,6,2,8,6,2,8,6,2,8,6,2,8,6,2,8,6,2,8,6,2,8,6,2,8,6,2,8,6,2,8,6]), false, 'Test 33');
test(isSubPath([3,1,2], [1,null,2,null,3]), false, 'Test 34');
test(isSubPath([2,3,4], [5,2,1,null,3,null,4,null,null,null,6,7,8]), false, 'Test 35');
test(isSubPath([2,5,6,7], [2,1,3,2,5,null,null,2,5,null,null,null,null,6,null,null,null,null,7,null,null,null,null,null,null,null,null,null,null,null,null]), false, 'Test 36');
test(isSubPath([3,4,5,6], [1,null,3,null,4,null,5,null,6,null,7]), true, 'Test 37');
test(isSubPath([9,8,7,6,5,4,3,2,1], [9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20]), false, 'Test 38');
test(isSubPath([10,20,30,40], [10,5,10,null,null,20,null,null,30,null,40]), true, 'Test 39');
test(isSubPath([1,2,3,4,5], [1,2,1,2,3,null,null,2,3,null,null,null,null,null,null,null,null,null,4,null,null,null,null,null,null,null,null,5]), false, 'Test 40');
test(isSubPath([7,8,9], [5,6,7,8,9,10,11,12,13,14,15,1,2,3,4]), false, 'Test 41');
test(isSubPath([10,20,30,40,50], [10,20,30,null,40,null,50,null,60,null,70]), false, 'Test 42');
test(isSubPath([1,2,3,2,1], [1,2,3,2,1,null,null,2,null,1,null,null,1,null,null,1,null,null,1,null,null,1,null,null,1]), false, 'Test 43');
test(isSubPath([10,9,8,7], [5,3,8,10,9,6,7,null,null,null,null,null,8,null,null]), false, 'Test 44');
test(isSubPath([100,99,98,97,96], [100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71]), false, 'Test 45');
test(isSubPath([1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), false, 'Test 46');
test(isSubPath([11,3,4], [11,3,14,3,4,9,14,3,4,null,null,9,14,null,null,null,null,4,null,null,null,null,null,null,4,null,null,null,null,null,4,null,null,null]), true, 'Test 47');
test(isSubPath([1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 48');
test(isSubPath([1], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), true, 'Test 49');
test(isSubPath([5,6,7,8,9], [1,5,6,7,8,9,null,null,null,null,null,null]), false, 'Test 50');
test(isSubPath([3,7,9], [5,3,8,7,9,null,null,2,null,null,null,6,null]), false, 'Test 51');
test(isSubPath([1,3,5,7,9,11], [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59]), false, 'Test 52');
test(isSubPath([5,5,5], [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), true, 'Test 53');
test(isSubPath([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), false, 'Test 54');
test(isSubPath([2,4,6,8,10], [2,null,4,null,6,null,8,null,10]), true, 'Test 55');
test(isSubPath([1,2,3,4,5], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), false, 'Test 56');
test(isSubPath([6,7,8,9], [1,2,3,4,5,6,7,null,null,null,null,null,null,8,9]), false, 'Test 57');
test(isSubPath([7,3,1], [5,7,6,3,null,null,1,null,null,null,null]), false, 'Test 58');
test(isSubPath([5,6,7,8,9], [3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]), false, 'Test 59');
test(isSubPath([7,8,9], [1,2,3,4,5,6,7,null,null,null,null,null,null,8,null,null,9]), true, 'Test 60');
test(isSubPath([7,3,1,5], [5,7,5,null,3,7,5,null,null,1,null,null,2,null,null,null,8]), false, 'Test 61');
test(isSubPath([1,2,1,2,3], [1,2,1,2,3,null,null,null,null,null,null]), false, 'Test 62');
test(isSubPath([1,2,3,4,5], [1,null,2,null,3,null,4,null,5]), true, 'Test 63');
test(isSubPath([25,24,23,22,21,20], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), false, 'Test 64');
test(isSubPath([9,8,7,6,5,4,3,2,1], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), false, 'Test 65');
test(isSubPath([1,2,3,4,5,6,7,8,9,10,11], [1,2,3,4,5,6,7,8,9,10,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), false, 'Test 66');
test(isSubPath([10,11,12], [5,10,15,8,11,13,18,7,12,9,14,16,19,6,17,20]), false, 'Test 67');
test(isSubPath([3,2,1], [1,null,3,null,2,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), false, 'Test 68');
test(isSubPath([1,3,2,3,1], [1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1]), false, 'Test 69');
test(isSubPath([5,6,7,8], [5,1,4,6,null,2,null,7,null,3,null,8,null,4,null,9,null,5]), false, 'Test 70');
test(isSubPath([2,3,4,5,6,7,8], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), false, 'Test 71');
test(isSubPath([9,5,1], [9,3,11,1,null,5,null,9,null,5,null,1,null,1,null,1,null,9,null,1,null,1,null,1,null,1]), false, 'Test 72');
test(isSubPath([1,2,3,2,1], [1,2,1,2,3,2,1,3,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), true, 'Test 73');
test(isSubPath([1,2,3], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), false, 'Test 74');
test(isSubPath([6,7,8,9], [6,2,6,7,8,6,6,9,null,null,null,7,8,null,null,null,8,9,null,null,null,null,null,9,null,null,null,null,null,9,null,null,null]), false, 'Test 75');
test(isSubPath([5,6,7], [1,2,3,4,5,null,null,null,null,6,null,null,7,null,null,8,null,null,9,null,null,10,null,null,11,null,null,12,null,null,13]), true, 'Test 76');
test(isSubPath([1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 77');
test(isSubPath([3,5,7,9], [3,5,7,1,5,7,9,null,null,1,null,null,9,3,5,null,9]), false, 'Test 78');
test(isSubPath([2,3,6], [1,2,3,4,2,6,3,4,2,6,3,4,2,6,null,null,null,null,null,null,null,null,null]), false, 'Test 79');
test(isSubPath([2,3,4,5], [2,3,null,4,null,5,null,6,null,7,null,8]), true, 'Test 80');
test(isSubPath([10,11,12,13], [10,null,11,null,12,null,13,null,10]), true, 'Test 81');
test(isSubPath([7,5,2], [7,5,2,7,5,2,7,5,2,7,5,2,7,5,2,7,5,2,7,5,2,7,5,2,7,5,2,7,5,2,7,5,2,7,5,2,7,5,2]), false, 'Test 82');
test(isSubPath([9,8,7,6,5,4,3,2,1], [9,8,7,6,5,4,3,2,1,null,null,8,7,6,5,4,3,2,1,null,null,7,6,5,4,3,2,1]), false, 'Test 83');
test(isSubPath([7,1,2,1], [7,1,2,1,2,2,null,2,null,2,null,1,null,1,null,2,null,1,null,1,null,2,null,2,null,2]), false, 'Test 84');
test(isSubPath([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,9,10]), false, 'Test 85');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

