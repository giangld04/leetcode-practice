// Test: 991. Broken Calculator
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { brokenCalc } = require("./solution");

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

console.log("\n991. Broken Calculator\n");

test(brokenCalc(2, 3), 2, 'Test 1');
test(brokenCalc(1000000000, 1), 999999999, 'Test 2');
test(brokenCalc(7, 15), 6, 'Test 3');
test(brokenCalc(2, 1), 1, 'Test 4');
test(brokenCalc(3, 10), 3, 'Test 5');
test(brokenCalc(100, 99), 1, 'Test 6');
test(brokenCalc(10, 1), 9, 'Test 7');
test(brokenCalc(1, 2), 1, 'Test 8');
test(brokenCalc(1, 1000000000), 39, 'Test 9');
test(brokenCalc(5, 8), 2, 'Test 10');
test(brokenCalc(1, 1), 0, 'Test 11');
test(brokenCalc(4, 7), 2, 'Test 12');
test(brokenCalc(100, 100), 0, 'Test 13');
test(brokenCalc(7, 19), 5, 'Test 14');
test(brokenCalc(8, 16), 1, 'Test 15');
test(brokenCalc(9, 28), 4, 'Test 16');
test(brokenCalc(1000000, 1000000), 0, 'Test 17');
test(brokenCalc(123456, 654321), 41671, 'Test 18');
test(brokenCalc(2, 3000000000), 43, 'Test 19');
test(brokenCalc(1000, 1001), 501, 'Test 20');
test(brokenCalc(15, 1), 14, 'Test 21');
test(brokenCalc(1000000, 999999), 1, 'Test 22');
test(brokenCalc(2, 1024), 9, 'Test 23');
test(brokenCalc(1024, 1), 1023, 'Test 24');
test(brokenCalc(2, 1023), 10, 'Test 25');
test(brokenCalc(10, 11), 6, 'Test 26');
test(brokenCalc(50, 1000), 25, 'Test 27');
test(brokenCalc(7, 128), 8, 'Test 28');
test(brokenCalc(3, 1023), 11, 'Test 29');
test(brokenCalc(23, 17), 6, 'Test 30');
test(brokenCalc(500, 1000000), 26, 'Test 31');
test(brokenCalc(2, 100), 9, 'Test 32');
test(brokenCalc(50, 101), 28, 'Test 33');
test(brokenCalc(15, 20), 6, 'Test 34');
test(brokenCalc(12, 32), 6, 'Test 35');
test(brokenCalc(3, 33), 8, 'Test 36');
test(brokenCalc(1000000, 1000001), 500001, 'Test 37');
test(brokenCalc(500, 1023), 247, 'Test 38');
test(brokenCalc(7, 47), 5, 'Test 39');
test(brokenCalc(13, 1), 12, 'Test 40');
test(brokenCalc(15, 97), 8, 'Test 41');
test(brokenCalc(123456789, 987654321), 61728401, 'Test 42');
test(brokenCalc(25, 24), 1, 'Test 43');
test(brokenCalc(2345678, 8765432), 154322, 'Test 44');
test(brokenCalc(256, 2048), 3, 'Test 45');
test(brokenCalc(12345, 54321), 5560, 'Test 46');
test(brokenCalc(20, 25), 9, 'Test 47');
test(brokenCalc(6, 9), 3, 'Test 48');
test(brokenCalc(500000000, 750000000), 125000001, 'Test 49');
test(brokenCalc(15, 10), 5, 'Test 50');
test(brokenCalc(1000, 500), 500, 'Test 51');
test(brokenCalc(9, 18), 1, 'Test 52');
test(brokenCalc(7, 1000), 13, 'Test 53');
test(brokenCalc(31, 15), 16, 'Test 54');
test(brokenCalc(15, 300), 12, 'Test 55');
test(brokenCalc(2, 2048), 10, 'Test 56');
test(brokenCalc(10, 15), 4, 'Test 57');
test(brokenCalc(5, 1023), 10, 'Test 58');
test(brokenCalc(25, 100), 2, 'Test 59');
test(brokenCalc(20, 5), 15, 'Test 60');
test(brokenCalc(15, 31), 10, 'Test 61');
test(brokenCalc(7, 1), 6, 'Test 62');
test(brokenCalc(8, 20), 5, 'Test 63');
test(brokenCalc(7, 100), 6, 'Test 64');
test(brokenCalc(999999999, 1000000000), 500000000, 'Test 65');
test(brokenCalc(64, 32), 32, 'Test 66');
test(brokenCalc(8, 1000), 9, 'Test 67');
test(brokenCalc(15, 7), 8, 'Test 68');
test(brokenCalc(12345, 67890), 3863, 'Test 69');
test(brokenCalc(3, 123456789), 39, 'Test 70');
test(brokenCalc(5, 123), 8, 'Test 71');
test(brokenCalc(1024, 512), 512, 'Test 72');
test(brokenCalc(1000000, 10000000), 375004, 'Test 73');
test(brokenCalc(12345, 98765), 6178, 'Test 74');
test(brokenCalc(10, 31), 5, 'Test 75');
test(brokenCalc(1, 1000000), 28, 'Test 76');
test(brokenCalc(8, 1), 7, 'Test 77');
test(brokenCalc(123, 456), 11, 'Test 78');
test(brokenCalc(100, 1), 99, 'Test 79');
test(brokenCalc(2, 1025), 20, 'Test 80');
test(brokenCalc(3456, 6789), 63, 'Test 81');
test(brokenCalc(500000000, 1000000000), 1, 'Test 82');
test(brokenCalc(1023, 1024), 512, 'Test 83');
test(brokenCalc(8, 15), 2, 'Test 84');
test(brokenCalc(7, 101), 7, 'Test 85');
test(brokenCalc(31, 8), 23, 'Test 86');
test(brokenCalc(3, 9), 4, 'Test 87');
test(brokenCalc(500, 250), 250, 'Test 88');
test(brokenCalc(987654321, 123456789), 864197532, 'Test 89');
test(brokenCalc(500, 1024), 246, 'Test 90');
test(brokenCalc(7, 150), 9, 'Test 91');
test(brokenCalc(8, 64), 3, 'Test 92');
test(brokenCalc(6, 32), 5, 'Test 93');
test(brokenCalc(10, 1023), 10, 'Test 94');
test(brokenCalc(13, 169), 9, 'Test 95');
test(brokenCalc(8, 1024), 7, 'Test 96');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

