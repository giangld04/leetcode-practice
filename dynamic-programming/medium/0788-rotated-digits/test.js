// Test: 788. Rotated Digits
// 55 test cases from LeetCodeDataset
// Run: node test.js

const { rotatedDigits } = require("./solution");

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

console.log("\n788. Rotated Digits\n");

test(rotatedDigits(100), 40, 'Test 1');
test(rotatedDigits(10000), 2320, 'Test 2');
test(rotatedDigits(104), 41, 'Test 3');
test(rotatedDigits(20), 9, 'Test 4');
test(rotatedDigits(2), 1, 'Test 5');
test(rotatedDigits(1), 0, 'Test 6');
test(rotatedDigits(1000), 316, 'Test 7');
test(rotatedDigits(10), 4, 'Test 8');
test(rotatedDigits(50), 16, 'Test 9');
test(rotatedDigits(4000), 975, 'Test 10');
test(rotatedDigits(1010), 320, 'Test 11');
test(rotatedDigits(8765), 1888, 'Test 12');
test(rotatedDigits(5678), 1206, 'Test 13');
test(rotatedDigits(5959), 1297, 'Test 14');
test(rotatedDigits(1111), 360, 'Test 15');
test(rotatedDigits(7000), 1661, 'Test 16');
test(rotatedDigits(6172), 1402, 'Test 17');
test(rotatedDigits(2000), 633, 'Test 18');
test(rotatedDigits(7500), 1661, 'Test 19');
test(rotatedDigits(8888), 1920, 'Test 20');
test(rotatedDigits(3333), 975, 'Test 21');
test(rotatedDigits(2525), 797, 'Test 22');
test(rotatedDigits(6969), 1647, 'Test 23');
test(rotatedDigits(3500), 975, 'Test 24');
test(rotatedDigits(300), 129, 'Test 25');
test(rotatedDigits(3000), 975, 'Test 26');
test(rotatedDigits(3456), 975, 'Test 27');
test(rotatedDigits(6789), 1563, 'Test 28');
test(rotatedDigits(6666), 1547, 'Test 29');
test(rotatedDigits(9652), 2197, 'Test 30');
test(rotatedDigits(1024), 327, 'Test 31');
test(rotatedDigits(2020), 647, 'Test 32');
test(rotatedDigits(789), 227, 'Test 33');
test(rotatedDigits(999), 316, 'Test 34');
test(rotatedDigits(5555), 1147, 'Test 35');
test(rotatedDigits(8000), 1661, 'Test 36');
test(rotatedDigits(5000), 976, 'Test 37');
test(rotatedDigits(9999), 2320, 'Test 38');
test(rotatedDigits(4444), 975, 'Test 39');
test(rotatedDigits(7890), 1661, 'Test 40');
test(rotatedDigits(6174), 1402, 'Test 41');
test(rotatedDigits(4321), 975, 'Test 42');
test(rotatedDigits(7654), 1661, 'Test 43');
test(rotatedDigits(7777), 1661, 'Test 44');
test(rotatedDigits(2222), 747, 'Test 45');
test(rotatedDigits(8080), 1690, 'Test 46');
test(rotatedDigits(9265), 2107, 'Test 47');
test(rotatedDigits(2500), 780, 'Test 48');
test(rotatedDigits(9000), 1978, 'Test 49');
test(rotatedDigits(1234), 417, 'Test 50');
test(rotatedDigits(750), 227, 'Test 51');
test(rotatedDigits(6000), 1319, 'Test 52');
test(rotatedDigits(2569), 814, 'Test 53');
test(rotatedDigits(500), 130, 'Test 54');
test(rotatedDigits(9090), 2020, 'Test 55');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

