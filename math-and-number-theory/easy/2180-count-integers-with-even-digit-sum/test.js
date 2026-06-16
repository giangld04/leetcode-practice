// Test: 2180. Count Integers With Even Digit Sum
// 34 test cases from LeetCodeDataset
// Run: node test.js

const { countEven } = require("./solution");

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

console.log("\n2180. Count Integers With Even Digit Sum\n");

test(countEven(30), 14, 'Test 1');
test(countEven(10), 4, 'Test 2');
test(countEven(999), 499, 'Test 3');
test(countEven(500), 249, 'Test 4');
test(countEven(4), 2, 'Test 5');
test(countEven(2), 1, 'Test 6');
test(countEven(1), 0, 'Test 7');
test(countEven(100), 49, 'Test 8');
test(countEven(750), 375, 'Test 9');
test(countEven(1000), 499, 'Test 10');
test(countEven(432), 215, 'Test 11');
test(countEven(666), 333, 'Test 12');
test(countEven(456), 227, 'Test 13');
test(countEven(250), 124, 'Test 14');
test(countEven(345), 172, 'Test 15');
test(countEven(99), 49, 'Test 16');
test(countEven(222), 111, 'Test 17');
test(countEven(200), 100, 'Test 18');
test(countEven(444), 222, 'Test 19');
test(countEven(555), 277, 'Test 20');
test(countEven(888), 444, 'Test 21');
test(countEven(123), 61, 'Test 22');
test(countEven(789), 394, 'Test 23');
test(countEven(333), 166, 'Test 24');
test(countEven(375), 187, 'Test 25');
test(countEven(256), 127, 'Test 26');
test(countEven(800), 400, 'Test 27');
test(countEven(678), 338, 'Test 28');
test(countEven(623), 311, 'Test 29');
test(countEven(600), 300, 'Test 30');
test(countEven(777), 388, 'Test 31');
test(countEven(850), 424, 'Test 32');
test(countEven(899), 449, 'Test 33');
test(countEven(299), 149, 'Test 34');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

