// Test: 1641. Count Sorted Vowel Strings
// 24 test cases from LeetCodeDataset
// Run: node test.js

const { countVowelStrings } = require("./solution");

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

console.log("\n1641. Count Sorted Vowel Strings\n");

test(countVowelStrings(3), 35, 'Test 1');
test(countVowelStrings(4), 70, 'Test 2');
test(countVowelStrings(33), 66045, 'Test 3');
test(countVowelStrings(2), 15, 'Test 4');
test(countVowelStrings(20), 10626, 'Test 5');
test(countVowelStrings(1), 5, 'Test 6');
test(countVowelStrings(50), 316251, 'Test 7');
test(countVowelStrings(10), 1001, 'Test 8');
test(countVowelStrings(5), 126, 'Test 9');
test(countVowelStrings(45), 211876, 'Test 10');
test(countVowelStrings(49), 292825, 'Test 11');
test(countVowelStrings(12), 1820, 'Test 12');
test(countVowelStrings(28), 35960, 'Test 13');
test(countVowelStrings(30), 46376, 'Test 14');
test(countVowelStrings(40), 135751, 'Test 15');
test(countVowelStrings(8), 495, 'Test 16');
test(countVowelStrings(22), 14950, 'Test 17');
test(countVowelStrings(27), 31465, 'Test 18');
test(countVowelStrings(35), 82251, 'Test 19');
test(countVowelStrings(15), 3876, 'Test 20');
test(countVowelStrings(9), 715, 'Test 21');
test(countVowelStrings(6), 210, 'Test 22');
test(countVowelStrings(7), 330, 'Test 23');
test(countVowelStrings(25), 23751, 'Test 24');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

