// Test: 509. Fibonacci Number
// 17 test cases from LeetCodeDataset
// Run: node test.js

const { fib } = require("./solution");

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

console.log("\n509. Fibonacci Number\n");

test(fib(0), 0, 'Test 1');
test(fib(3), 2, 'Test 2');
test(fib(30), 832040, 'Test 3');
test(fib(4), 3, 'Test 4');
test(fib(2), 1, 'Test 5');
test(fib(20), 6765, 'Test 6');
test(fib(1), 1, 'Test 7');
test(fib(10), 55, 'Test 8');
test(fib(5), 5, 'Test 9');
test(fib(8), 21, 'Test 10');
test(fib(29), 514229, 'Test 11');
test(fib(15), 610, 'Test 12');
test(fib(12), 144, 'Test 13');
test(fib(18), 2584, 'Test 14');
test(fib(6), 8, 'Test 15');
test(fib(25), 75025, 'Test 16');
test(fib(28), 317811, 'Test 17');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

