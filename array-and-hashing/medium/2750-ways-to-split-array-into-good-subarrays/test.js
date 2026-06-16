// Test: 2750. Ways To Split Array Into Good Subarrays
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfGoodSubarraySplits } = require("./solution");

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

console.log("\n2750. Ways To Split Array Into Good Subarrays\n");

test(numberOfGoodSubarraySplits([0,1,0,0,1]), 3, 'Test 1');
test(numberOfGoodSubarraySplits([1]), 1, 'Test 2');
test(numberOfGoodSubarraySplits([1,0,0,0,1,0,1]), 8, 'Test 3');
test(numberOfGoodSubarraySplits([1,0,0,1,0,0,1]), 9, 'Test 4');
test(numberOfGoodSubarraySplits([0,0,1,0,0,0,1,0,0]), 4, 'Test 5');
test(numberOfGoodSubarraySplits([1,1,1,1,1]), 1, 'Test 6');
test(numberOfGoodSubarraySplits([0]), 0, 'Test 7');
test(numberOfGoodSubarraySplits([0,1,0,1,0,1,0]), 4, 'Test 8');
test(numberOfGoodSubarraySplits([1,0,1,0,1]), 4, 'Test 9');
test(numberOfGoodSubarraySplits([1,1,1,1]), 1, 'Test 10');
test(numberOfGoodSubarraySplits([1,0,0,0,0]), 1, 'Test 11');
test(numberOfGoodSubarraySplits([0,0,0,0]), 0, 'Test 12');
test(numberOfGoodSubarraySplits([0,0,0,0,0]), 0, 'Test 13');
test(numberOfGoodSubarraySplits([0,0,0,1,0,0,0]), 1, 'Test 14');
test(numberOfGoodSubarraySplits([0,1,0]), 1, 'Test 15');
test(numberOfGoodSubarraySplits([0,0,0,1]), 1, 'Test 16');
test(numberOfGoodSubarraySplits([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 63, 'Test 17');
test(numberOfGoodSubarraySplits([1,0,0,0,1,0,0,1,0,0,0,0,1]), 60, 'Test 18');
test(numberOfGoodSubarraySplits([0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1]), 63, 'Test 19');
test(numberOfGoodSubarraySplits([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 38, 'Test 20');
test(numberOfGoodSubarraySplits([1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]), 75, 'Test 21');
test(numberOfGoodSubarraySplits([1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0]), 96, 'Test 22');
test(numberOfGoodSubarraySplits([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 31, 'Test 23');
test(numberOfGoodSubarraySplits([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]), 59049, 'Test 24');
test(numberOfGoodSubarraySplits([0,0,0,1,0,0,0,0,1,0,0,0,0,1]), 25, 'Test 25');
test(numberOfGoodSubarraySplits([0,1,0,0,1,0,0,0,1,0,0,1]), 36, 'Test 26');
test(numberOfGoodSubarraySplits([1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1]), 900, 'Test 27');
test(numberOfGoodSubarraySplits([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 16, 'Test 28');
test(numberOfGoodSubarraySplits([0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 29');
test(numberOfGoodSubarraySplits([0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1]), 423, 'Test 30');
test(numberOfGoodSubarraySplits([1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 36, 'Test 31');
test(numberOfGoodSubarraySplits([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 128, 'Test 32');
test(numberOfGoodSubarraySplits([1,0,0,0,1,0,0,1,0,0,0,0,1,0]), 60, 'Test 33');
test(numberOfGoodSubarraySplits([0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]), 41, 'Test 34');
test(numberOfGoodSubarraySplits([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 17, 'Test 35');
test(numberOfGoodSubarraySplits([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]), 1, 'Test 36');
test(numberOfGoodSubarraySplits([0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0]), 25, 'Test 37');
test(numberOfGoodSubarraySplits([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 39, 'Test 38');
test(numberOfGoodSubarraySplits([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 43, 'Test 39');
test(numberOfGoodSubarraySplits([0,1,0,1,0,1,0,1,0,1,0,1]), 32, 'Test 40');
test(numberOfGoodSubarraySplits([0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 18, 'Test 41');
test(numberOfGoodSubarraySplits([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]), 59049, 'Test 42');
test(numberOfGoodSubarraySplits([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 128, 'Test 43');
test(numberOfGoodSubarraySplits([1,0,1,0,1,0,1,0,1,0]), 16, 'Test 44');
test(numberOfGoodSubarraySplits([0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]), 100, 'Test 45');
test(numberOfGoodSubarraySplits([0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0]), 30, 'Test 46');
test(numberOfGoodSubarraySplits([1,0,1,0,1,0,1,0,1,0,1,0]), 32, 'Test 47');
test(numberOfGoodSubarraySplits([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 60, 'Test 48');
test(numberOfGoodSubarraySplits([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 320, 'Test 49');
test(numberOfGoodSubarraySplits([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 22, 'Test 50');
test(numberOfGoodSubarraySplits([0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 17, 'Test 51');
test(numberOfGoodSubarraySplits([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 54, 'Test 52');
test(numberOfGoodSubarraySplits([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]), 4096, 'Test 53');
test(numberOfGoodSubarraySplits([1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1]), 486, 'Test 54');
test(numberOfGoodSubarraySplits([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]), 1, 'Test 55');
test(numberOfGoodSubarraySplits([0,0,1,0,0,0,1,0,1]), 8, 'Test 56');
test(numberOfGoodSubarraySplits([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 16384, 'Test 57');
test(numberOfGoodSubarraySplits([0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0]), 9, 'Test 58');
test(numberOfGoodSubarraySplits([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]), 19683, 'Test 59');
test(numberOfGoodSubarraySplits([0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1]), 49, 'Test 60');
test(numberOfGoodSubarraySplits([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 1, 'Test 61');
test(numberOfGoodSubarraySplits([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 15, 'Test 62');
test(numberOfGoodSubarraySplits([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]), 729, 'Test 63');
test(numberOfGoodSubarraySplits([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]), 177147, 'Test 64');
test(numberOfGoodSubarraySplits([1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 147, 'Test 65');
test(numberOfGoodSubarraySplits([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 19, 'Test 66');
test(numberOfGoodSubarraySplits([0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 17, 'Test 67');
test(numberOfGoodSubarraySplits([0,0,0,1,0,0,0,1,0,0,0,1]), 16, 'Test 68');
test(numberOfGoodSubarraySplits([1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1]), 288, 'Test 69');
test(numberOfGoodSubarraySplits([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]), 729, 'Test 70');
test(numberOfGoodSubarraySplits([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 47, 'Test 71');
test(numberOfGoodSubarraySplits([0,0,0,0,0,0,1,0,0,0,0,0,0]), 1, 'Test 72');
test(numberOfGoodSubarraySplits([0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0]), 7, 'Test 73');
test(numberOfGoodSubarraySplits([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 74');
test(numberOfGoodSubarraySplits([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 75');
test(numberOfGoodSubarraySplits([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 20, 'Test 76');
test(numberOfGoodSubarraySplits([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 29, 'Test 77');
test(numberOfGoodSubarraySplits([1,0,1,0,1,0,1,0,1,0,1]), 32, 'Test 78');
test(numberOfGoodSubarraySplits([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 2048, 'Test 79');
test(numberOfGoodSubarraySplits([1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1]), 288, 'Test 80');
test(numberOfGoodSubarraySplits([0,0,1,0,0,0,1,0,0,0,0,1,0]), 20, 'Test 81');
test(numberOfGoodSubarraySplits([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 16384, 'Test 82');
test(numberOfGoodSubarraySplits([1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1]), 110, 'Test 83');
test(numberOfGoodSubarraySplits([1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]), 18, 'Test 84');
test(numberOfGoodSubarraySplits([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 30, 'Test 85');
test(numberOfGoodSubarraySplits([0,0,1,0,0,0,1,0,0,0,1]), 16, 'Test 86');
test(numberOfGoodSubarraySplits([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 268435456, 'Test 87');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

