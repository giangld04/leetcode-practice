// Test: 872. Leaf Similar Trees
// 88 test cases from LeetCodeDataset
// Run: node test.js

const { leafSimilar } = require("./solution");

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

console.log("\n872. Leaf Similar Trees\n");

test(leafSimilar([1,2,3], [1,3,2]), false, 'Test 1');
test(leafSimilar([3,5,1,6,2,9,8,null,null,7,4], [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]), true, 'Test 2');
test(leafSimilar([5,3,8,1,4,7,9,null,2,6,null,null,null,null,null,null,null], [5,3,8,1,4,7,9,null,2,6,null,null,null,null,null,null,null]), true, 'Test 3');
test(leafSimilar([5,1,4,null,2,null,3], [5,1,3,null,2,null,4]), false, 'Test 4');
test(leafSimilar([1,2,3,4,5,6,7,null,null,null,null,null,8], [1,2,3,4,5,7,6,null,null,null,null,null,8]), false, 'Test 5');
test(leafSimilar([3,5,1,6,2,9,8,null,null,7,4,10,11,12,13,14,15], [3,5,1,6,2,9,8,null,null,7,4,10,11,12,13,14,15]), true, 'Test 6');
test(leafSimilar([5,1,5,5,null,5,null,5,5,null,5], [5,5,1,null,5,5,null,5,5,null,5]), true, 'Test 7');
test(leafSimilar([1,2,null,3,null,4,null,5], [1,2,null,4,null,3,null,5]), true, 'Test 8');
test(leafSimilar([1,null,2,null,3,null,4,null,5], [1,2,3,4,5]), false, 'Test 9');
test(leafSimilar([1,2,3,4,null,5,null,null,6], [1,2,3,null,5,4,null,null,null,6]), false, 'Test 10');
test(leafSimilar([4,3,null,1,2], [4,3,null,2,1]), false, 'Test 11');
test(leafSimilar([1,2,3,null,null,null,4], [1,2,3,null,4]), false, 'Test 12');
test(leafSimilar([4,2,7,1,3,6,9], [4,2,7,1,3,9,6]), false, 'Test 13');
test(leafSimilar([5,3,8,1,4,null,9,null,null,2,6,null,null,null,null,null,7], [5,3,8,1,null,null,9,null,4,null,7,null,null,2,6]), false, 'Test 14');
test(leafSimilar([5,4,6,3,8,7,9,2,null,null,null,null,null,null,1], [5,4,7,3,8,6,9,2,null,null,null,null,null,null,1]), false, 'Test 15');
test(leafSimilar([2,1,4,null,null,3,6], [2,1,6,null,null,3,4]), false, 'Test 16');
test(leafSimilar([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21]), false, 'Test 17');
test(leafSimilar([15,11,12,13,14,15,16,17,18,19,20,21,22,23,24], [15,11,12,13,14,15,16,17,18,19,20,21,22,23,25]), false, 'Test 18');
test(leafSimilar([1,2,3,4,5,null,6,7,null,null,null,null,8,9,10,11,12,null,null,13,14,15,16], [1,2,3,4,5,null,6,7,null,null,null,11,8,9,10,null,null,null,12,13,14,15,16]), false, 'Test 19');
test(leafSimilar([3,5,1,6,2,9,8,null,null,7,4,10,11], [3,5,1,6,10,11,2,null,null,null,null,null,7,4,9,8]), false, 'Test 20');
test(leafSimilar([8,5,9,3,7,null,null,1,4,6,null], [8,5,9,3,7,null,null,1,null,4,6]), true, 'Test 21');
test(leafSimilar([5,1,9,null,4,3,null,7,6,null,8,null,null,2,null], [9,5,1,3,4,null,null,2,6,null,7,null,null,null,8]), false, 'Test 22');
test(leafSimilar([1,2,3,4,5,6,7,8,9,null,null,null,null,null,10], [1,2,3,4,5,6,7,8,null,9,null,null,null,null,10]), false, 'Test 23');
test(leafSimilar([1,2,3,4,null,6,7,8,9,10,11,12,13,14,15], [1,2,3,4,null,6,7,8,9,10,11,12,13,14,16]), false, 'Test 24');
test(leafSimilar([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,19]), false, 'Test 25');
test(leafSimilar([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,16,17,18,19,20], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), true, 'Test 26');
test(leafSimilar([7,13,10,1,2,null,5,null,null,null,null,null,4], [10,13,5,1,null,2,4,7]), false, 'Test 27');
test(leafSimilar([3,5,1,6,2,9,8,null,null,7,4,10,11,12,13,14,15,null,null,null,null,16,null,null,17,null,null,null,18], [3,5,1,6,2,9,8,null,null,7,4,10,11,12,13,14,15,null,null,null,null,16,null,null,17,null,null,null,18]), true, 'Test 28');
test(leafSimilar([3,5,1,6,2,9,8,null,null,7,4,11,12], [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8,null,null,11,12]), false, 'Test 29');
test(leafSimilar([3,5,1,6,2,9,8,null,null,7,4,10,11,12,13,14,15,null,null,null,null,16], [3,5,1,6,2,9,8,null,null,7,4,10,11,12,13,14,15,null,null,null,null,16]), true, 'Test 30');
test(leafSimilar([1,2,3,4,5,6,7,8,9], [1,3,2,6,7,4,5,null,null,null,null,8,9]), false, 'Test 31');
test(leafSimilar([1,2,3,4,5,null,6,7,null,null,8,9,10,null,null,11,12], [1,2,3,4,5,null,6,7,null,null,8,9,10,null,null,11,13]), false, 'Test 32');
test(leafSimilar([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], [1,2,3,4,5,6,7,8,9,10]), false, 'Test 33');
test(leafSimilar([2,3,4,5,6,7,8,9,null,null,null,null,null,null,null,10], [2,3,4,5,6,7,8,9,null,null,null,null,null,null,10,null]), false, 'Test 34');
test(leafSimilar([10,5,15,null,null,6,20], [10,5,15,null,null,20,6]), false, 'Test 35');
test(leafSimilar([3,5,1,6,2,9,8,null,null,7,4,10,11,12,13], [3,5,1,6,7,4,2,10,11,12,13,null,null,null,null,null,null,9,8]), false, 'Test 36');
test(leafSimilar([3,5,1,6,2,9,8,null,null,7,4,10,null,null,11], [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8,11,10]), false, 'Test 37');
test(leafSimilar([5,null,3,null,4,null,6], [5,null,3,null,4,null,7]), false, 'Test 38');
test(leafSimilar([1,null,2,null,3,null,4,null,5], [5,4,3,2,1]), false, 'Test 39');
test(leafSimilar([3,5,1,6,2,9,8,null,null,7,4,10,11,12,13,14,15,null,null,null,null,16,null,null,17,null,null,null,18,19], [3,5,1,6,2,9,8,null,null,7,4,10,11,12,13,14,15,null,null,null,null,16,null,null,17,null,null,null,18,19]), true, 'Test 40');
test(leafSimilar([1,2,3,4,5,null,null,6,7,null,null,8,9], [1,2,3,4,5,null,null,9,8,null,null,7,6]), false, 'Test 41');
test(leafSimilar([100,50,150,25,75,125,175,10,35,65,85,115,135,165,185], [100,50,150,25,75,125,175,10,35,65,85,115,135,165,185]), true, 'Test 42');
test(leafSimilar([3,5,1,6,2,9,8,null,null,7,4], [5,1,5,6,2,9,8,null,null,7,4]), true, 'Test 43');
test(leafSimilar([1], [1]), true, 'Test 44');
test(leafSimilar([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75], [5,15,10,25,20,35,30,55,50,65,60,75,70,45,40]), false, 'Test 45');
test(leafSimilar([5,1,4,null,null,3,6], [5,1,4,null,null,3,null,null,6]), false, 'Test 46');
test(leafSimilar([1,2,3,4,5,null,6,7,null,8,9,10,null,null,11,12], [1,2,3,null,4,5,6,7,8,9,10,null,null,11,12]), false, 'Test 47');
test(leafSimilar([1,2,null,3,null,4,null,5,null,6,null,7,null], [1,null,2,null,3,null,4,null,5,null,6,null,7]), true, 'Test 48');
test(leafSimilar([4,10,null,3,2], [4,10,null,3,null,null,2]), false, 'Test 49');
test(leafSimilar([1,2,3,null,4,null,5,null,6], [1,2,3,null,4,null,5,null,6]), true, 'Test 50');
test(leafSimilar([1,null,2,null,3,null,4,null,5,null,6], [6,5,4,3,2,1]), false, 'Test 51');
test(leafSimilar([10,5,6,null,null,3,7,null,null,null,4], [10,5,6,null,null,3,null,null,4,null,7]), false, 'Test 52');
test(leafSimilar([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16]), false, 'Test 53');
test(leafSimilar([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), true, 'Test 54');
test(leafSimilar([4,2,6,1,3,5,7], [4,2,6,1,null,5,null,3,null,7]), false, 'Test 55');
test(leafSimilar([7,5,6,1,4,3,2,null,null,null,null,null,null,8,9], [7,5,6,1,4,3,null,8,9,null,null,2]), false, 'Test 56');
test(leafSimilar([1,2,3,null,4,5,6,7,8,9,10,11,12], [1,2,3,4,5,6,7,8,9,10,11,12]), false, 'Test 57');
test(leafSimilar([4,2,6,1,3,5,7], [4,1,6,null,2,5,7]), false, 'Test 58');
test(leafSimilar([1,2,null,3,4,5,6,7,8,9,10], [1,2,null,3,10,4,5,6,7,8,9]), false, 'Test 59');
test(leafSimilar([1,2,null,3,null,4,null,5], [1,null,2,null,3,null,4,null,5]), true, 'Test 60');
test(leafSimilar([10,20,30,40,50,60,70,null,80,90,100,110,120,130,140], [10,20,30,40,50,60,70,null,80,90,100,110,120,130,140]), true, 'Test 61');
test(leafSimilar([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), true, 'Test 62');
test(leafSimilar([3,5,1,6,2,9,8,null,null,7,4,11,12], [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8,11,12]), true, 'Test 63');
test(leafSimilar([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), true, 'Test 64');
test(leafSimilar([3,5,1,6,2,9,8,null,null,7,4,10,11,12,13,14,15,null,null,null,null,16,null,null,17], [3,5,1,6,2,9,8,null,null,7,4,10,11,12,13,14,15,null,null,null,null,16,null,null,17]), true, 'Test 65');
test(leafSimilar([8,3,5,6,7,9,2,10,null,null,1,null,null,null,null,11], [8,3,5,6,7,9,2,null,null,null,null,null,null,10,11]), false, 'Test 66');
test(leafSimilar([1,null,2,null,3,null,4,null,5,null,6,null,7], [7,null,6,null,5,null,4,null,3,null,2,null,1]), false, 'Test 67');
test(leafSimilar([3,5,1,6,2,9,8,null,null,7,4,10,11,12,13,14,15,null,null,null,null,16,null,null,17,null,null,null,18,19,20], [3,5,1,6,2,9,8,null,null,7,4,10,11,12,13,14,15,null,null,null,null,16,null,null,17,null,null,null,18,19,20]), true, 'Test 68');
test(leafSimilar([1,2,3,4,null,null,5,6,7,8,9], [1,2,3,4,5,6,7,8,9]), false, 'Test 69');
test(leafSimilar([2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], [2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), true, 'Test 70');
test(leafSimilar([2,1,null,3], [2,null,1,null,3]), true, 'Test 71');
test(leafSimilar([1,2,null,3,4,null,5,6,null,7], [1,2,null,3,4,null,5,6,null,7]), true, 'Test 72');
test(leafSimilar([10,5,15,3,7,13,18,1,4,null,null,11,14,null,null,null,null,null], [10,5,15,3,7,null,18,1,4,null,13,null,null,11,14]), false, 'Test 73');
test(leafSimilar([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,29]), false, 'Test 74');
test(leafSimilar([10,5,15,3,7,null,18], [10,5,15,null,7,18,null,3]), false, 'Test 75');
test(leafSimilar([3,5,1,6,2,9,8,null,null,7,4,10,11], [3,5,1,6,7,4,2,10,11,null,null,null,null,null,null,9,8]), false, 'Test 76');
test(leafSimilar([1,2,null,3,4], [1,null,2,3,4]), true, 'Test 77');
test(leafSimilar([8,6,7,null,5,null,4,null,3,null,2,null,1], [8,7,6,null,5,null,4,null,3,null,2,null,1]), true, 'Test 78');
test(leafSimilar([10,5,15,3,7,null,18], [10,15,5,18,null,3,7]), false, 'Test 79');
test(leafSimilar([3,9,20,null,null,15,7], [3,9,20,null,null,15,7]), true, 'Test 80');
test(leafSimilar([2,3,null,1], [2,1,null,3]), false, 'Test 81');
test(leafSimilar([1,2,null,3,null,4,null,5,null], [1,2,null,3,null,5,null,4,null]), false, 'Test 82');
test(leafSimilar([4,2,7,1,3,6,9], [4,2,7,3,1,9,6]), false, 'Test 83');
test(leafSimilar([10,5,15,3,7,13,18,1,null,6], [10,5,15,3,6,7,null,1,null,13,18]), false, 'Test 84');
test(leafSimilar([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15], [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), false, 'Test 85');
test(leafSimilar([10,5,15,3,7,13,18,1,4,6,8,12,14,17,19], [10,5,15,1,4,3,7,6,8,13,18,12,14,17,19]), false, 'Test 86');
test(leafSimilar([4,7,11,5,8,14,null,null,null,null,2,null,9,1,12,null,null,null,6,10,13,null,null,null,null,null,null,null,null,3], [4,7,11,5,8,14,null,null,null,null,3,null,9,1,12,null,null,null,6,10,13,null,null,null,null,null,null,null,null,2]), true, 'Test 87');
test(leafSimilar([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,2,6,7,5,4,15,14,13,12,11,10,9,8]), false, 'Test 88');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

