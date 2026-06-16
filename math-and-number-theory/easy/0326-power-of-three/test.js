// Test: 326. Power Of Three
// 78 test cases from LeetCodeDataset
// Run: node test.js

const { isPowerOfThree } = require("./solution");

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

console.log("\n326. Power Of Three\n");

test(isPowerOfThree(3), true, 'Test 1');
test(isPowerOfThree(45), false, 'Test 2');
test(isPowerOfThree(729), true, 'Test 3');
test(isPowerOfThree(2147483647), false, 'Test 4');
test(isPowerOfThree(19683), true, 'Test 5');
test(isPowerOfThree(100), false, 'Test 6');
test(isPowerOfThree(244), false, 'Test 7');
test(isPowerOfThree(10), false, 'Test 8');
test(isPowerOfThree(-1), false, 'Test 9');
test(isPowerOfThree(-27), false, 'Test 10');
test(isPowerOfThree(3**19), Error: Solution.isPowerOfThree[] missing 1 required positional argument: 'n', 'Test 11');
test(isPowerOfThree(0), false, 'Test 12');
test(isPowerOfThree(-2147483648), false, 'Test 13');
test(isPowerOfThree(27), true, 'Test 14');
test(isPowerOfThree(6561), true, 'Test 15');
test(isPowerOfThree(2187), true, 'Test 16');
test(isPowerOfThree(1000000000), false, 'Test 17');
test(isPowerOfThree(81), true, 'Test 18');
test(isPowerOfThree(-81), false, 'Test 19');
test(isPowerOfThree(-3**19), Error: Solution.isPowerOfThree[] missing 1 required positional argument: 'n', 'Test 20');
test(isPowerOfThree(-243), false, 'Test 21');
test(isPowerOfThree(9), true, 'Test 22');
test(isPowerOfThree(-3), false, 'Test 23');
test(isPowerOfThree(1), true, 'Test 24');
test(isPowerOfThree(243), true, 'Test 25');
test(isPowerOfThree(59049), true, 'Test 26');
test(isPowerOfThree(14124), false, 'Test 27');
test(isPowerOfThree(239148450531289), false, 'Test 28');
test(isPowerOfThree(32805), false, 'Test 29');
test(isPowerOfThree(2147483646), false, 'Test 30');
test(isPowerOfThree(797161567330890596), false, 'Test 31');
test(isPowerOfThree(12157665459056928802), false, 'Test 32');
test(isPowerOfThree(4096), false, 'Test 33');
test(isPowerOfThree(-9), false, 'Test 34');
test(isPowerOfThree(82), false, 'Test 35');
test(isPowerOfThree(387420489), true, 'Test 36');
test(isPowerOfThree(1594323), true, 'Test 37');
test(isPowerOfThree(1000), false, 'Test 38');
test(isPowerOfThree(5), false, 'Test 39');
test(isPowerOfThree(28), false, 'Test 40');
test(isPowerOfThree(12157665459056928801), true, 'Test 41');
test(isPowerOfThree(-19683), false, 'Test 42');
test(isPowerOfThree(-162), false, 'Test 43');
test(isPowerOfThree(4), false, 'Test 44');
test(isPowerOfThree(59050), false, 'Test 45');
test(isPowerOfThree(2), false, 'Test 46');
test(isPowerOfThree(1162261469), false, 'Test 47');
test(isPowerOfThree(-6561), false, 'Test 48');
test(isPowerOfThree(80), false, 'Test 49');
test(isPowerOfThree(14348907), true, 'Test 50');
test(isPowerOfThree(1073741824), false, 'Test 51');
test(isPowerOfThree(282429536481), true, 'Test 52');
test(isPowerOfThree(100000), false, 'Test 53');
test(isPowerOfThree(231), false, 'Test 54');
test(isPowerOfThree(4052555153018976267), true, 'Test 55');
test(isPowerOfThree(3645), false, 'Test 56');
test(isPowerOfThree(-59049), false, 'Test 57');
test(isPowerOfThree(18), false, 'Test 58');
test(isPowerOfThree(500), false, 'Test 59');
test(isPowerOfThree(1594322), false, 'Test 60');
test(isPowerOfThree(20), false, 'Test 61');
test(isPowerOfThree(177147), true, 'Test 62');
test(isPowerOfThree(-45), false, 'Test 63');
test(isPowerOfThree(19), false, 'Test 64');
test(isPowerOfThree(1162261467), true, 'Test 65');
test(isPowerOfThree(2188), false, 'Test 66');
test(isPowerOfThree(531441), true, 'Test 67');
test(isPowerOfThree(24), false, 'Test 68');
test(isPowerOfThree(129140163), true, 'Test 69');
test(isPowerOfThree(43046721), true, 'Test 70');
test(isPowerOfThree(-1046527), false, 'Test 71');
test(isPowerOfThree(1162261468), false, 'Test 72');
test(isPowerOfThree(1162261466), false, 'Test 73');
test(isPowerOfThree(3486784401), true, 'Test 74');
test(isPowerOfThree(200), false, 'Test 75');
test(isPowerOfThree(6), false, 'Test 76');
test(isPowerOfThree(1111111111), false, 'Test 77');
test(isPowerOfThree(2125764400), false, 'Test 78');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

