// Test: 3021. Alice And Bob Playing Flower Game
// 66 test cases from LeetCodeDataset
// Run: node test.js

const { flowerGame } = require("./solution");

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

console.log("\n3021. Alice And Bob Playing Flower Game\n");

test(flowerGame(5, 7), 17, 'Test 1');
test(flowerGame(5, 4), 10, 'Test 2');
test(flowerGame(1, 1), 0, 'Test 3');
test(flowerGame(100, 200), 10000, 'Test 4');
test(flowerGame(4, 3), 6, 'Test 5');
test(flowerGame(100000, 100000), 5000000000, 'Test 6');
test(flowerGame(3, 2), 3, 'Test 7');
test(flowerGame(10, 10), 50, 'Test 8');
test(flowerGame(5, 5), 12, 'Test 9');
test(flowerGame(2, 2), 2, 'Test 10');
test(flowerGame(75000, 25000), 937500000, 'Test 11');
test(flowerGame(7, 11), 38, 'Test 12');
test(flowerGame(25000, 75000), 937500000, 'Test 13');
test(flowerGame(99, 101), 4999, 'Test 14');
test(flowerGame(30000, 40000), 600000000, 'Test 15');
test(flowerGame(1, 200000), 100000, 'Test 16');
test(flowerGame(99999, 2), 99999, 'Test 17');
test(flowerGame(50000, 100000), 2500000000, 'Test 18');
test(flowerGame(10, 1), 5, 'Test 19');
test(flowerGame(1000, 1000), 500000, 'Test 20');
test(flowerGame(33333, 66667), 1111105555, 'Test 21');
test(flowerGame(7, 8), 28, 'Test 22');
test(flowerGame(33333, 66666), 1111088889, 'Test 23');
test(flowerGame(75000, 85000), 3187500000, 'Test 24');
test(flowerGame(99999, 99999), 4999900000, 'Test 25');
test(flowerGame(10000, 5000), 25000000, 'Test 26');
test(flowerGame(99999, 100000), 4999950000, 'Test 27');
test(flowerGame(3, 3), 4, 'Test 28');
test(flowerGame(500, 500), 125000, 'Test 29');
test(flowerGame(100, 100), 5000, 'Test 30');
test(flowerGame(15, 25), 187, 'Test 31');
test(flowerGame(50000, 50000), 1250000000, 'Test 32');
test(flowerGame(60000, 40000), 1200000000, 'Test 33');
test(flowerGame(20000, 10000), 100000000, 'Test 34');
test(flowerGame(5000, 5000), 12500000, 'Test 35');
test(flowerGame(1, 99999), 49999, 'Test 36');
test(flowerGame(55, 88), 2420, 'Test 37');
test(flowerGame(1, 10), 5, 'Test 38');
test(flowerGame(20, 15), 150, 'Test 39');
test(flowerGame(50, 60), 1500, 'Test 40');
test(flowerGame(2, 99999), 99999, 'Test 41');
test(flowerGame(1, 100000), 50000, 'Test 42');
test(flowerGame(300, 200), 30000, 'Test 43');
test(flowerGame(20000, 20000), 200000000, 'Test 44');
test(flowerGame(50000, 1), 25000, 'Test 45');
test(flowerGame(10, 15), 75, 'Test 46');
test(flowerGame(50, 50), 1250, 'Test 47');
test(flowerGame(7, 5), 17, 'Test 48');
test(flowerGame(1000, 500), 250000, 'Test 49');
test(flowerGame(200000, 1), 100000, 'Test 50');
test(flowerGame(20000, 30000), 300000000, 'Test 51');
test(flowerGame(200, 300), 30000, 'Test 52');
test(flowerGame(150, 150), 11250, 'Test 53');
test(flowerGame(23456, 65432), 767386496, 'Test 54');
test(flowerGame(30000, 20000), 300000000, 'Test 55');
test(flowerGame(1000, 1500), 750000, 'Test 56');
test(flowerGame(49999, 50001), 1249999999, 'Test 57');
test(flowerGame(2, 3), 3, 'Test 58');
test(flowerGame(80000, 20000), 800000000, 'Test 59');
test(flowerGame(25, 30), 375, 'Test 60');
test(flowerGame(99999, 1), 49999, 'Test 61');
test(flowerGame(10000, 10000), 50000000, 'Test 62');
test(flowerGame(12345, 67890), 419051025, 'Test 63');
test(flowerGame(15, 15), 112, 'Test 64');
test(flowerGame(66667, 33333), 1111105555, 'Test 65');
test(flowerGame(100000, 1), 50000, 'Test 66');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

