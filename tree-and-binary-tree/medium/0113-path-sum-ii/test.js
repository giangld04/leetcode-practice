// Test: 113. Path Sum Ii
// 41 test cases from LeetCodeDataset
// Run: node test.js

const { pathSum } = require("./solution");

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

console.log("\n113. Path Sum Ii\n");

test(pathSum(targetSum), Error: Solution.pathSum[] missing 2 required positional arguments: 'root' and 'targetSum', 'Test 1');
test(pathSum(root), Error: Solution.pathSum[] missing 2 required positional arguments: 'root' and 'targetSum', 'Test 2');
test(pathSum([0,1,1], 1), [[0, 1], [0, 1]], 'Test 3');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 45), [], 'Test 4');
test(pathSum([1,null,2,null,3,null,4,null,5,null,6], 21), [[1, 2, 3, 4, 5, 6]], 'Test 5');
test(pathSum([-2,null,-3], -5), [[-2, -3]], 'Test 6');
test(pathSum([1,2,3,4,5,6,7], 15), [], 'Test 7');
test(pathSum([1,2,3], 5), [], 'Test 8');
test(pathSum([1,-2,-3,1,3,-2,null,-1,-1], -1), [[1, -2, 1, -1], [1, -2, 1, -1]], 'Test 9');
test(pathSum([5,4,8,11,null,13,4,7,2,null,null,5,1], 27), [[5, 4, 11, 7]], 'Test 10');
test(pathSum([1,2,null,3,null,4,null,5,null,6], 15), [], 'Test 11');
test(pathSum([10,5,-3,3,2,null,11,3,-2,null,1], 8), [], 'Test 12');
test(pathSum([10,5,15,3,7,null,18], 22), [[10, 5, 7]], 'Test 13');
test(pathSum([0,1,1,2,2,3,3,4,4,5,5,6,6,7,7], 15), [], 'Test 14');
test(pathSum([1,2], 0), [], 'Test 15');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 27), [], 'Test 16');
test(pathSum([0,0,0,0,0], 0), [[0, 0, 0], [0, 0, 0], [0, 0]], 'Test 17');
test(pathSum([1], 1), [[1]], 'Test 18');
test(pathSum([], 0), [], 'Test 19');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 30), [], 'Test 20');
test(pathSum([-1,2,-3,4,-5,6,-7,8,-9,10,-11,12,-13,14,-15], -15), [[-1, 2, -5, -11]], 'Test 21');
test(pathSum([10,5,15,3,7,null,18], 25), [], 'Test 22');
test(pathSum([10,5,15,3,7,12,18], 25), [], 'Test 23');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 60), [], 'Test 24');
test(pathSum([1,-2,-3,1,3,-2,null,-1], 2), [[1, -2, 3]], 'Test 25');
test(pathSum([1,null,2,null,3,null,4,null,5], 15), [[1, 2, 3, 4, 5]], 'Test 26');
test(pathSum([], 5), [], 'Test 27');
test(pathSum([5,4,8,11,null,13,4,7,2,null,null,5,1], 26), [[5, 8, 13]], 'Test 28');
test(pathSum([0,1,1], 0), [], 'Test 29');
test(pathSum([1,2,3,4,5], 10), [], 'Test 30');
test(pathSum([5,4,8,11,null,13,4,7,2,null,null,5,1], 22), [[5, 4, 11, 2], [5, 8, 4, 5]], 'Test 31');
test(pathSum([5,4,8,11,null,13,4,7,2,null,null,5,1], 18), [[5, 8, 4, 1]], 'Test 32');
test(pathSum([5,4,8,11,null,13,4,7,2,null,null,5,1], 21), [], 'Test 33');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 100), [], 'Test 34');
test(pathSum([1,-2,-3,1,3,-2,null,-1], 3), [], 'Test 35');
test(pathSum([1,2,3,4,5,6,7], 9), [], 'Test 36');
test(pathSum([100,50,150,25,75,125,175,10,30,60,80,110,140,160,190], 300), [], 'Test 37');
test(pathSum([8,6,10,5,7,9,11,4,null,null,null,null,null,3], 26), [], 'Test 38');
test(pathSum([100,50,150,25,75,125,175,10,40,60,90,110,140,160,190], 250), [], 'Test 39');
test(pathSum([], 1), [], 'Test 40');
test(pathSum([1,2,3,4,5,6,7], 10), [[1, 3, 6]], 'Test 41');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

