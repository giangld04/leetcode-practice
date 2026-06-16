// Test: 481. Magical String
// 41 test cases from LeetCodeDataset
// Run: node test.js

const { magicalString } = require("./solution");

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

console.log("\n481. Magical String\n");

test(magicalString(100000), 49972, 'Test 1');
test(magicalString(100), 49, 'Test 2');
test(magicalString(15), 7, 'Test 3');
test(magicalString(10000), 4996, 'Test 4');
test(magicalString(6), 3, 'Test 5');
test(magicalString(20), 10, 'Test 6');
test(magicalString(1), 1, 'Test 7');
test(magicalString(1000), 502, 'Test 8');
test(magicalString(10), 5, 'Test 9');
test(magicalString(32000), 15996, 'Test 10');
test(magicalString(99999), 49972, 'Test 11');
test(magicalString(15000), 7501, 'Test 12');
test(magicalString(3), 1, 'Test 13');
test(magicalString(12345), 6172, 'Test 14');
test(magicalString(7500), 3747, 'Test 15');
test(magicalString(90000), 44975, 'Test 16');
test(magicalString(50000), 24985, 'Test 17');
test(magicalString(50), 25, 'Test 18');
test(magicalString(5), 3, 'Test 19');
test(magicalString(300), 150, 'Test 20');
test(magicalString(30), 15, 'Test 21');
test(magicalString(60000), 29976, 'Test 22');
test(magicalString(40), 20, 'Test 23');
test(magicalString(4), 2, 'Test 24');
test(magicalString(30000), 14993, 'Test 25');
test(magicalString(2), 1, 'Test 26');
test(magicalString(45000), 22491, 'Test 27');
test(magicalString(85000), 42478, 'Test 28');
test(magicalString(80000), 39982, 'Test 29');
test(magicalString(8), 4, 'Test 30');
test(magicalString(20000), 9996, 'Test 31');
test(magicalString(5000), 2500, 'Test 32');
test(magicalString(75000), 37487, 'Test 33');
test(magicalString(9999), 4995, 'Test 34');
test(magicalString(50001), 24986, 'Test 35');
test(magicalString(200), 100, 'Test 36');
test(magicalString(400), 199, 'Test 37');
test(magicalString(9), 4, 'Test 38');
test(magicalString(500), 249, 'Test 39');
test(magicalString(7), 4, 'Test 40');
test(magicalString(25000), 12495, 'Test 41');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

