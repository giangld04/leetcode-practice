// Test: 1551. Minimum Operations To Make Array Equal
// 53 test cases from LeetCodeDataset
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n1551. Minimum Operations To Make Array Equal\n");

test(minOperations(3), 2, 'Test 1');
test(minOperations(100), 2500, 'Test 2');
test(minOperations(10000), 25000000, 'Test 3');
test(minOperations(6), 9, 'Test 4');
test(minOperations(1), 0, 'Test 5');
test(minOperations(1000), 250000, 'Test 6');
test(minOperations(10), 25, 'Test 7');
test(minOperations(15000), 56250000, 'Test 8');
test(minOperations(12345), 38099756, 'Test 9');
test(minOperations(7000), 12250000, 'Test 10');
test(minOperations(49), 600, 'Test 11');
test(minOperations(2000), 1000000, 'Test 12');
test(minOperations(7500), 14062500, 'Test 13');
test(minOperations(8888), 19749136, 'Test 14');
test(minOperations(50), 625, 'Test 15');
test(minOperations(3333), 2777222, 'Test 16');
test(minOperations(5), 6, 'Test 17');
test(minOperations(3000), 2250000, 'Test 18');
test(minOperations(6789), 11522630, 'Test 19');
test(minOperations(1200), 360000, 'Test 20');
test(minOperations(99), 2450, 'Test 21');
test(minOperations(5001), 6252500, 'Test 22');
test(minOperations(1001), 250500, 'Test 23');
test(minOperations(2), 1, 'Test 24');
test(minOperations(101), 2550, 'Test 25');
test(minOperations(8), 16, 'Test 26');
test(minOperations(9998), 24990001, 'Test 27');
test(minOperations(20000), 100000000, 'Test 28');
test(minOperations(999), 249500, 'Test 29');
test(minOperations(5555), 7714506, 'Test 30');
test(minOperations(8000), 16000000, 'Test 31');
test(minOperations(5000), 6250000, 'Test 32');
test(minOperations(9999), 24995000, 'Test 33');
test(minOperations(19), 90, 'Test 34');
test(minOperations(77), 1482, 'Test 35');
test(minOperations(12000), 36000000, 'Test 36');
test(minOperations(6667), 11112222, 'Test 37');
test(minOperations(150), 5625, 'Test 38');
test(minOperations(13), 42, 'Test 39');
test(minOperations(7654), 14645929, 'Test 40');
test(minOperations(11111), 30863580, 'Test 41');
test(minOperations(11), 30, 'Test 42');
test(minOperations(15), 56, 'Test 43');
test(minOperations(2500), 1562500, 'Test 44');
test(minOperations(9000), 20250000, 'Test 45');
test(minOperations(4999), 6247500, 'Test 46');
test(minOperations(200), 10000, 'Test 47');
test(minOperations(6000), 9000000, 'Test 48');
test(minOperations(499), 62250, 'Test 49');
test(minOperations(500), 62500, 'Test 50');
test(minOperations(7), 12, 'Test 51');
test(minOperations(25), 156, 'Test 52');
test(minOperations(1500), 562500, 'Test 53');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

