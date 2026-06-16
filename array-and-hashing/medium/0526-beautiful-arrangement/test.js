// Test: 526. Beautiful Arrangement
// 15 test cases from LeetCodeDataset
// Run: node test.js

const { countArrangement } = require("./solution");

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

console.log("\n526. Beautiful Arrangement\n");

test(countArrangement(8), 132, 'Test 1');
test(countArrangement(3), 3, 'Test 2');
test(countArrangement(11), 750, 'Test 3');
test(countArrangement(15), 24679, 'Test 4');
test(countArrangement(4), 8, 'Test 5');
test(countArrangement(12), 4010, 'Test 6');
test(countArrangement(14), 10680, 'Test 7');
test(countArrangement(9), 250, 'Test 8');
test(countArrangement(13), 4237, 'Test 9');
test(countArrangement(6), 36, 'Test 10');
test(countArrangement(2), 2, 'Test 11');
test(countArrangement(1), 1, 'Test 12');
test(countArrangement(7), 41, 'Test 13');
test(countArrangement(10), 700, 'Test 14');
test(countArrangement(5), 10, 'Test 15');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

