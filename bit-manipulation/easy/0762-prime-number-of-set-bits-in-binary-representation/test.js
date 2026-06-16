// Test: 762. Prime Number Of Set Bits In Binary Representation
// 79 test cases from LeetCodeDataset
// Run: node test.js

const { countPrimeSetBits } = require("./solution");

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

console.log("\n762. Prime Number Of Set Bits In Binary Representation\n");

test(countPrimeSetBits(100, 105), 3, 'Test 1');
test(countPrimeSetBits(500, 1000), 253, 'Test 2');
test(countPrimeSetBits(1, 100), 65, 'Test 3');
test(countPrimeSetBits(6, 10), 4, 'Test 4');
test(countPrimeSetBits(999900, 1000000), 30, 'Test 5');
test(countPrimeSetBits(1, 20), 14, 'Test 6');
test(countPrimeSetBits(5, 5), 1, 'Test 7');
test(countPrimeSetBits(10, 15), 5, 'Test 8');
test(countPrimeSetBits(1000, 10000), 3722, 'Test 9');
test(countPrimeSetBits(500, 750), 132, 'Test 10');
test(countPrimeSetBits(100000, 100010), 4, 'Test 11');
test(countPrimeSetBits(222222, 222322), 18, 'Test 12');
test(countPrimeSetBits(25000, 30000), 1450, 'Test 13');
test(countPrimeSetBits(1024, 2048), 476, 'Test 14');
test(countPrimeSetBits(100000, 100100), 20, 'Test 15');
test(countPrimeSetBits(750000, 750100), 40, 'Test 16');
test(countPrimeSetBits(262143, 262243), 56, 'Test 17');
test(countPrimeSetBits(1048576, 1048676), 56, 'Test 18');
test(countPrimeSetBits(1000, 1100), 51, 'Test 19');
test(countPrimeSetBits(5000, 5500), 217, 'Test 20');
test(countPrimeSetBits(876543, 876643), 25, 'Test 21');
test(countPrimeSetBits(1000000, 1000010), 1, 'Test 22');
test(countPrimeSetBits(6000, 7000), 389, 'Test 23');
test(countPrimeSetBits(999990, 1000000), 5, 'Test 24');
test(countPrimeSetBits(12345, 12445), 49, 'Test 25');
test(countPrimeSetBits(1048575, 1048675), 56, 'Test 26');
test(countPrimeSetBits(131072, 131272), 107, 'Test 27');
test(countPrimeSetBits(99999, 100010), 4, 'Test 28');
test(countPrimeSetBits(555555, 555655), 23, 'Test 29');
test(countPrimeSetBits(10000, 10100), 34, 'Test 30');
test(countPrimeSetBits(50000, 50100), 26, 'Test 31');
test(countPrimeSetBits(9999, 10010), 6, 'Test 32');
test(countPrimeSetBits(1000, 1050), 24, 'Test 33');
test(countPrimeSetBits(999990, 999999), 4, 'Test 34');
test(countPrimeSetBits(200000, 200100), 19, 'Test 35');
test(countPrimeSetBits(1000, 1024), 7, 'Test 36');
test(countPrimeSetBits(524288, 524388), 56, 'Test 37');
test(countPrimeSetBits(100000, 101000), 295, 'Test 38');
test(countPrimeSetBits(999999, 1000099), 23, 'Test 39');
test(countPrimeSetBits(9999, 10099), 34, 'Test 40');
test(countPrimeSetBits(200000, 201000), 290, 'Test 41');
test(countPrimeSetBits(999, 2000), 473, 'Test 42');
test(countPrimeSetBits(250000, 250100), 19, 'Test 43');
test(countPrimeSetBits(1, 1000), 530, 'Test 44');
test(countPrimeSetBits(3000, 4000), 393, 'Test 45');
test(countPrimeSetBits(10000, 10050), 19, 'Test 46');
test(countPrimeSetBits(5000, 6000), 402, 'Test 47');
test(countPrimeSetBits(990000, 990100), 48, 'Test 48');
test(countPrimeSetBits(987654, 987680), 4, 'Test 49');
test(countPrimeSetBits(1023, 2048), 476, 'Test 50');
test(countPrimeSetBits(262144, 262244), 56, 'Test 51');
test(countPrimeSetBits(123456, 123556), 19, 'Test 52');
test(countPrimeSetBits(1023, 2047), 476, 'Test 53');
test(countPrimeSetBits(800000, 801000), 291, 'Test 54');
test(countPrimeSetBits(5000, 5100), 37, 'Test 55');
test(countPrimeSetBits(800000, 800100), 18, 'Test 56');
test(countPrimeSetBits(131070, 131080), 8, 'Test 57');
test(countPrimeSetBits(1234, 5678), 1954, 'Test 58');
test(countPrimeSetBits(999, 1010), 5, 'Test 59');
test(countPrimeSetBits(543210, 543310), 38, 'Test 60');
test(countPrimeSetBits(111111, 111211), 20, 'Test 61');
test(countPrimeSetBits(1000, 2000), 473, 'Test 62');
test(countPrimeSetBits(999950, 1000000), 9, 'Test 63');
test(countPrimeSetBits(500000, 500100), 24, 'Test 64');
test(countPrimeSetBits(500, 800), 157, 'Test 65');
test(countPrimeSetBits(765432, 765532), 40, 'Test 66');
test(countPrimeSetBits(65535, 65635), 56, 'Test 67');
test(countPrimeSetBits(1000, 1200), 102, 'Test 68');
test(countPrimeSetBits(75000, 80000), 1371, 'Test 69');
test(countPrimeSetBits(5, 10000), 4251, 'Test 70');
test(countPrimeSetBits(987654, 987754), 16, 'Test 71');
test(countPrimeSetBits(999999, 1000010), 1, 'Test 72');
test(countPrimeSetBits(5000, 5050), 22, 'Test 73');
test(countPrimeSetBits(500000, 501000), 310, 'Test 74');
test(countPrimeSetBits(50000, 60000), 2742, 'Test 75');
test(countPrimeSetBits(104743, 104843), 19, 'Test 76');
test(countPrimeSetBits(8192, 16384), 2821, 'Test 77');
test(countPrimeSetBits(200, 300), 55, 'Test 78');
test(countPrimeSetBits(999990, 1000010), 5, 'Test 79');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

