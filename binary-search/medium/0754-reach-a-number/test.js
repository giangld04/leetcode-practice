// Test: 754. Reach A Number
// 70 test cases from LeetCodeDataset
// Run: node test.js

const { reachNumber } = require("./solution");

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

console.log("\n754. Reach A Number\n");

test(reachNumber(2), 3, 'Test 1');
test(reachNumber(-20), 7, 'Test 2');
test(reachNumber(15), 5, 'Test 3');
test(reachNumber(10), 4, 'Test 4');
test(reachNumber(-5), 5, 'Test 5');
test(reachNumber(1), 1, 'Test 6');
test(reachNumber(-1), 1, 'Test 7');
test(reachNumber(3), 2, 'Test 8');
test(reachNumber(20), 7, 'Test 9');
test(reachNumber(-10), 4, 'Test 10');
test(reachNumber(5000), 100, 'Test 11');
test(reachNumber(8), 4, 'Test 12');
test(reachNumber(123456789), 15713, 'Test 13');
test(reachNumber(-21), 6, 'Test 14');
test(reachNumber(-123456), 499, 'Test 15');
test(reachNumber(25), 9, 'Test 16');
test(reachNumber(-987654), 1407, 'Test 17');
test(reachNumber(65535), 362, 'Test 18');
test(reachNumber(-17), 6, 'Test 19');
test(reachNumber(999999999), 44721, 'Test 20');
test(reachNumber(60), 11, 'Test 21');
test(reachNumber(45), 9, 'Test 22');
test(reachNumber(500000001), 31625, 'Test 23');
test(reachNumber(1000), 47, 'Test 24');
test(reachNumber(987654321), 44445, 'Test 25');
test(reachNumber(500000), 1000, 'Test 26');
test(reachNumber(-987654321), 44445, 'Test 27');
test(reachNumber(-101), 14, 'Test 28');
test(reachNumber(5), 5, 'Test 29');
test(reachNumber(55), 10, 'Test 30');
test(reachNumber(12345), 157, 'Test 31');
test(reachNumber(17), 6, 'Test 32');
test(reachNumber(-500000), 1000, 'Test 33');
test(reachNumber(1000000), 1415, 'Test 34');
test(reachNumber(-501), 33, 'Test 35');
test(reachNumber(-2147483647), 65537, 'Test 36');
test(reachNumber(-15), 5, 'Test 37');
test(reachNumber(-100), 15, 'Test 38');
test(reachNumber(13), 5, 'Test 39');
test(reachNumber(81), 13, 'Test 40');
test(reachNumber(500), 32, 'Test 41');
test(reachNumber(-5000), 100, 'Test 42');
test(reachNumber(-1024), 47, 'Test 43');
test(reachNumber(101), 14, 'Test 44');
test(reachNumber(-75), 13, 'Test 45');
test(reachNumber(7), 5, 'Test 46');
test(reachNumber(-123456789), 15713, 'Test 47');
test(reachNumber(1023), 45, 'Test 48');
test(reachNumber(100), 15, 'Test 49');
test(reachNumber(2048), 64, 'Test 50');
test(reachNumber(1024), 47, 'Test 51');
test(reachNumber(-25), 9, 'Test 52');
test(reachNumber(-1000000000), 44723, 'Test 53');
test(reachNumber(1000000000), 44723, 'Test 54');
test(reachNumber(50), 11, 'Test 55');
test(reachNumber(499999999), 31625, 'Test 56');
test(reachNumber(-500), 32, 'Test 57');
test(reachNumber(-1023), 45, 'Test 58');
test(reachNumber(-999999999), 44721, 'Test 59');
test(reachNumber(14), 7, 'Test 60');
test(reachNumber(4096), 91, 'Test 61');
test(reachNumber(501), 33, 'Test 62');
test(reachNumber(-1000), 47, 'Test 63');
test(reachNumber(123456), 499, 'Test 64');
test(reachNumber(100000000), 14143, 'Test 65');
test(reachNumber(-100000000), 14143, 'Test 66');
test(reachNumber(-65535), 362, 'Test 67');
test(reachNumber(-12), 7, 'Test 68');
test(reachNumber(-999999), 1414, 'Test 69');
test(reachNumber(200), 20, 'Test 70');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

