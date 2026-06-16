// Test: 979. Distribute Coins In Binary Tree
// 46 test cases from LeetCodeDataset
// Run: node test.js

const { distributeCoins } = require("./solution");

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

console.log("\n979. Distribute Coins In Binary Tree\n");

test(distributeCoins([3,0,0]), 2, 'Test 1');
test(distributeCoins([0,0,0,3,0,0,4]), 8, 'Test 2');
test(distributeCoins([1,0,0,null,3,0,0]), 8, 'Test 3');
test(distributeCoins([1,0,0,null,3,0,0,null,4]), 17, 'Test 4');
test(distributeCoins([1,0,2]), 2, 'Test 5');
test(distributeCoins([1,0,0,null,3]), 4, 'Test 6');
test(distributeCoins([0,0,0,3,3]), 8, 'Test 7');
test(distributeCoins([0,3,0]), 3, 'Test 8');
test(distributeCoins([1,0,0,null,3,0,2]), 6, 'Test 9');
test(distributeCoins([0,0,0,0,0,0,0,0,9]), 25, 'Test 10');
test(distributeCoins([2,0,1,3,0,0,0,null,null,null,1]), 7, 'Test 11');
test(distributeCoins([0,0,5,0,0,0,0,0,0,0,0,0,0,0,0]), 29, 'Test 12');
test(distributeCoins([0,1,1,0,0,0,0,1,0,0,0,0,0,0,0]), 29, 'Test 13');
test(distributeCoins([1,0,0,2,0,0,1,null,2,0,0,0,0,1,0]), 22, 'Test 14');
test(distributeCoins([1,2,2,3,3,3,3]), 18, 'Test 15');
test(distributeCoins([0,0,0,0,0,0,7]), 16, 'Test 16');
test(distributeCoins([4,1,1,1,1,1,1]), 0, 'Test 17');
test(distributeCoins([0,0,0,0,0,0,0,0,0,0,0,0,0,0,9]), 39, 'Test 18');
test(distributeCoins([3,0,0,1,0,0,0,null,null,2,0,0,0,0,0]), 22, 'Test 19');
test(distributeCoins([1,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 31, 'Test 20');
test(distributeCoins([0,3,0,0,0,2,0,null,null,0,0,0,1]), 12, 'Test 21');
test(distributeCoins([2,3,3,null,null,null,4,0,0,null,null,5,0,0,null]), 17, 'Test 22');
test(distributeCoins([0,1,1,2,0,0,0,null,null,0,0,1,0,0,0]), 21, 'Test 23');
test(distributeCoins([1,2,3,4,5,6,7,null,null,null,null,null,null,8,9]), 84, 'Test 24');
test(distributeCoins([1,0,0,0,0,2,2,null,null,0,0,0,0,1,0]), 17, 'Test 25');
test(distributeCoins([0,1,0,0,3,0,0,null,null,null,0,0,0,0,5]), 17, 'Test 26');
test(distributeCoins([5,3,null,3,null,2,1]), 9, 'Test 27');
test(distributeCoins([5,3,3,0,0,0,0,0,0,0,0,0,0,0,0]), 28, 'Test 28');
test(distributeCoins([0,0,0,0,0,0,4,0,0,3,0,0,0,0,0]), 23, 'Test 29');
test(distributeCoins([2,3,0,3,0,null,2,null,0]), 6, 'Test 30');
test(distributeCoins([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 17, 'Test 31');
test(distributeCoins([0,0,0,0,0,0,0,null,8]), 23, 'Test 32');
test(distributeCoins([0,0,0,3,0,0,2,null,0,0,0,1]), 13, 'Test 33');
test(distributeCoins([5,0,0,0,4,0,0,null,null,3,0,0,0,2,0]), 23, 'Test 34');
test(distributeCoins([5,2,2,1,0,0,3,null,null,0,0,0,0]), 14, 'Test 35');
test(distributeCoins([0,0,3,0,0,0,0,null,4]), 8, 'Test 36');
test(distributeCoins([0,0,0,0,0,0,0,0,0,0,0,0,0,0,10]), 42, 'Test 37');
test(distributeCoins([1,2,2,null,4,1,2,null,null,null,1,null,null,1,2]), 14, 'Test 38');
test(distributeCoins([3,1,2,0,0,0,0,0,0,0,0,0,0,0,0]), 31, 'Test 39');
test(distributeCoins([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 40');
test(distributeCoins([1,0,0,0,0,0,0,0,1,0,0,0,0,0,1]), 28, 'Test 41');
test(distributeCoins([1,2,3,4,5,6,0]), 27, 'Test 42');
test(distributeCoins([1,0,0,0,1,0,0,null,3,0,0,0,0,0,2]), 22, 'Test 43');
test(distributeCoins([0,2,0,0,0,3,0,null,null,0,0,0,0,0,1]), 17, 'Test 44');
test(distributeCoins([0,2,0,0,0,0,7]), 14, 'Test 45');
test(distributeCoins([0,0,0,4,0,0,0,null,0,2,0,0,0,0,2]), 19, 'Test 46');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

