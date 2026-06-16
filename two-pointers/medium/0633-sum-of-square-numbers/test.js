// Test: 633. Sum Of Square Numbers
// 53 test cases from LeetCodeDataset
// Run: node test.js

const { judgeSquareSum } = require("./solution");

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

console.log("\n633. Sum Of Square Numbers\n");

test(judgeSquareSum(0), true, 'Test 1');
test(judgeSquareSum(1000000001), false, 'Test 2');
test(judgeSquareSum(25), true, 'Test 3');
test(judgeSquareSum(2), true, 'Test 4');
test(judgeSquareSum(3), false, 'Test 5');
test(judgeSquareSum(5), true, 'Test 6');
test(judgeSquareSum(1), true, 'Test 7');
test(judgeSquareSum(2147483647), false, 'Test 8');
test(judgeSquareSum(4), true, 'Test 9');
test(judgeSquareSum(1000000000), true, 'Test 10');
test(judgeSquareSum(999999999), false, 'Test 11');
test(judgeSquareSum(500000000), true, 'Test 12');
test(judgeSquareSum(100000000000), true, 'Test 13');
test(judgeSquareSum(846625), true, 'Test 14');
test(judgeSquareSum(314159265), false, 'Test 15');
test(judgeSquareSum(840000000), false, 'Test 16');
test(judgeSquareSum(80779853361), false, 'Test 17');
test(judgeSquareSum(16777217), true, 'Test 18');
test(judgeSquareSum(1000000), true, 'Test 19');
test(judgeSquareSum(1215436930), false, 'Test 20');
test(judgeSquareSum(999999999999), false, 'Test 21');
test(judgeSquareSum(16777216), true, 'Test 22');
test(judgeSquareSum(100), true, 'Test 23');
test(judgeSquareSum(10000), true, 'Test 24');
test(judgeSquareSum(325), true, 'Test 25');
test(judgeSquareSum(1805306457), false, 'Test 26');
test(judgeSquareSum(1000000003), false, 'Test 27');
test(judgeSquareSum(2147483600), true, 'Test 28');
test(judgeSquareSum(2000000000), true, 'Test 29');
test(judgeSquareSum(10000000000), true, 'Test 30');
test(judgeSquareSum(18014398509481982), Execution timed out, 'Test 31');
test(judgeSquareSum(4294967296), true, 'Test 32');
test(judgeSquareSum(1800000000), true, 'Test 33');
test(judgeSquareSum(250000000), true, 'Test 34');
test(judgeSquareSum(1000000002), false, 'Test 35');
test(judgeSquareSum(846456943), false, 'Test 36');
test(judgeSquareSum(3249000000), true, 'Test 37');
test(judgeSquareSum(13), true, 'Test 38');
test(judgeSquareSum(846269696200635625), true, 'Test 39');
test(judgeSquareSum(18014398509481984), true, 'Test 40');
test(judgeSquareSum(123456789), false, 'Test 41');
test(judgeSquareSum(1805355528), false, 'Test 42');
test(judgeSquareSum(675), false, 'Test 43');
test(judgeSquareSum(4294967295), false, 'Test 44');
test(judgeSquareSum(65535), false, 'Test 45');
test(judgeSquareSum(50), true, 'Test 46');
test(judgeSquareSum(1600000000), true, 'Test 47');
test(judgeSquareSum(500), true, 'Test 48');
test(judgeSquareSum(1234567890), false, 'Test 49');
test(judgeSquareSum(10001), true, 'Test 50');
test(judgeSquareSum(9876543210), true, 'Test 51');
test(judgeSquareSum(82), true, 'Test 52');
test(judgeSquareSum(67280421310721), true, 'Test 53');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

