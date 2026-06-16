// Test: 1806. Minimum Number Of Operations To Reinitialize A Permutation
// 38 test cases from LeetCodeDataset
// Run: node test.js

const { reinitializePermutation } = require("./solution");

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

console.log("\n1806. Minimum Number Of Operations To Reinitialize A Permutation\n");

test(reinitializePermutation(8), 3, 'Test 1');
test(reinitializePermutation(4), 2, 'Test 2');
test(reinitializePermutation(12), 10, 'Test 3');
test(reinitializePermutation(14), 12, 'Test 4');
test(reinitializePermutation(16), 4, 'Test 5');
test(reinitializePermutation(18), 8, 'Test 6');
test(reinitializePermutation(6), 4, 'Test 7');
test(reinitializePermutation(2), 1, 'Test 8');
test(reinitializePermutation(20), 18, 'Test 9');
test(reinitializePermutation(100), 30, 'Test 10');
test(reinitializePermutation(500), 166, 'Test 11');
test(reinitializePermutation(1000), 36, 'Test 12');
test(reinitializePermutation(10), 6, 'Test 13');
test(reinitializePermutation(896), 356, 'Test 14');
test(reinitializePermutation(992), 495, 'Test 15');
test(reinitializePermutation(988), 138, 'Test 16');
test(reinitializePermutation(50), 21, 'Test 17');
test(reinitializePermutation(300), 132, 'Test 18');
test(reinitializePermutation(384), 191, 'Test 19');
test(reinitializePermutation(600), 299, 'Test 20');
test(reinitializePermutation(64), 6, 'Test 21');
test(reinitializePermutation(72), 35, 'Test 22');
test(reinitializePermutation(192), 95, 'Test 23');
test(reinitializePermutation(888), 443, 'Test 24');
test(reinitializePermutation(1024), 10, 'Test 25');
test(reinitializePermutation(128), 7, 'Test 26');
test(reinitializePermutation(22), 6, 'Test 27');
test(reinitializePermutation(46), 12, 'Test 28');
test(reinitializePermutation(256), 8, 'Test 29');
test(reinitializePermutation(768), 348, 'Test 30');
test(reinitializePermutation(32), 5, 'Test 31');
test(reinitializePermutation(48), 23, 'Test 32');
test(reinitializePermutation(800), 184, 'Test 33');
test(reinitializePermutation(200), 99, 'Test 34');
test(reinitializePermutation(400), 18, 'Test 35');
test(reinitializePermutation(512), 9, 'Test 36');
test(reinitializePermutation(750), 318, 'Test 37');
test(reinitializePermutation(998), 332, 'Test 38');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

