// Test: 2240. Number Of Ways To Buy Pens And Pencils
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { waysToBuyPensPencils } = require("./solution");

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

console.log("\n2240. Number Of Ways To Buy Pens And Pencils\n");

test(waysToBuyPensPencils(20, 10, 5), 9, 'Test 1');
test(waysToBuyPensPencils(1000, 1, 1), 501501, 'Test 2');
test(waysToBuyPensPencils(5, 10, 10), 1, 'Test 3');
test(waysToBuyPensPencils(5, 10, 10), 1, 'Test 4');
test(waysToBuyPensPencils(100, 1, 1), 5151, 'Test 5');
test(waysToBuyPensPencils(50, 7, 11), 23, 'Test 6');
test(waysToBuyPensPencils(100, 20, 30), 14, 'Test 7');
test(waysToBuyPensPencils(50, 10, 20), 12, 'Test 8');
test(waysToBuyPensPencils(1000000, 500000, 500000), 6, 'Test 9');
test(waysToBuyPensPencils(20, 10, 5), 9, 'Test 10');
test(waysToBuyPensPencils(1000000, 500000, 500000), 6, 'Test 11');
test(waysToBuyPensPencils(1000000, 500000, 300000), 7, 'Test 12');
test(waysToBuyPensPencils(10, 3, 7), 6, 'Test 13');
test(waysToBuyPensPencils(10, 5, 2), 10, 'Test 14');
test(waysToBuyPensPencils(1, 1, 1), 3, 'Test 15');
test(waysToBuyPensPencils(50, 25, 20), 6, 'Test 16');
test(waysToBuyPensPencils(100, 1, 1), 5151, 'Test 17');
test(waysToBuyPensPencils(500, 250, 250), 6, 'Test 18');
test(waysToBuyPensPencils(1, 2, 3), 1, 'Test 19');
test(waysToBuyPensPencils(500, 5, 7), 3665, 'Test 20');
test(waysToBuyPensPencils(150, 25, 15), 40, 'Test 21');
test(waysToBuyPensPencils(100, 100, 100), 3, 'Test 22');
test(waysToBuyPensPencils(1234, 123, 456), 21, 'Test 23');
test(waysToBuyPensPencils(800, 120, 30), 105, 'Test 24');
test(waysToBuyPensPencils(100, 50, 100), 4, 'Test 25');
test(waysToBuyPensPencils(100, 50, 50), 6, 'Test 26');
test(waysToBuyPensPencils(1000, 100, 200), 36, 'Test 27');
test(waysToBuyPensPencils(100000, 1000, 500), 10201, 'Test 28');
test(waysToBuyPensPencils(999999, 99999, 1), 5500055, 'Test 29');
test(waysToBuyPensPencils(80, 8, 5), 95, 'Test 30');
test(waysToBuyPensPencils(200, 15, 4), 368, 'Test 31');
test(waysToBuyPensPencils(1000, 150, 100), 44, 'Test 32');
test(waysToBuyPensPencils(100, 7, 3), 265, 'Test 33');
test(waysToBuyPensPencils(1000, 150, 75), 56, 'Test 34');
test(waysToBuyPensPencils(1000000, 999999, 999999), 3, 'Test 35');
test(waysToBuyPensPencils(123456, 11111, 22222), 42, 'Test 36');
test(waysToBuyPensPencils(100000, 33333, 33333), 10, 'Test 37');
test(waysToBuyPensPencils(999999, 1000, 999), 501501, 'Test 38');
test(waysToBuyPensPencils(10000, 100, 50), 10201, 'Test 39');
test(waysToBuyPensPencils(200, 50, 25), 25, 'Test 40');
test(waysToBuyPensPencils(500000, 999999, 1), 500001, 'Test 41');
test(waysToBuyPensPencils(150, 5, 3), 796, 'Test 42');
test(waysToBuyPensPencils(999999, 100000, 50000), 110, 'Test 43');
test(waysToBuyPensPencils(123456, 12345, 6543), 109, 'Test 44');
test(waysToBuyPensPencils(10000, 50, 30), 33634, 'Test 45');
test(waysToBuyPensPencils(500, 250, 100), 10, 'Test 46');
test(waysToBuyPensPencils(100000, 1, 1), 5000150001, 'Test 47');
test(waysToBuyPensPencils(250, 75, 25), 26, 'Test 48');
test(waysToBuyPensPencils(500, 150, 125), 11, 'Test 49');
test(waysToBuyPensPencils(1000, 10, 1), 50601, 'Test 50');
test(waysToBuyPensPencils(999, 1, 1), 500500, 'Test 51');
test(waysToBuyPensPencils(1000, 500, 250), 9, 'Test 52');
test(waysToBuyPensPencils(200, 10, 100), 33, 'Test 53');
test(waysToBuyPensPencils(120, 30, 20), 19, 'Test 54');
test(waysToBuyPensPencils(60, 20, 30), 7, 'Test 55');
test(waysToBuyPensPencils(999999, 1, 2), 250000500000, 'Test 56');
test(waysToBuyPensPencils(300, 150, 100), 7, 'Test 57');
test(waysToBuyPensPencils(150, 50, 50), 10, 'Test 58');
test(waysToBuyPensPencils(1000, 333, 111), 22, 'Test 59');
test(waysToBuyPensPencils(100, 25, 30), 11, 'Test 60');
test(waysToBuyPensPencils(500, 150, 50), 26, 'Test 61');
test(waysToBuyPensPencils(999999, 99999, 99999), 66, 'Test 62');
test(waysToBuyPensPencils(800, 400, 200), 9, 'Test 63');
test(waysToBuyPensPencils(120, 40, 60), 7, 'Test 64');
test(waysToBuyPensPencils(600, 100, 150), 19, 'Test 65');
test(waysToBuyPensPencils(500, 250, 200), 6, 'Test 66');
test(waysToBuyPensPencils(500000, 1, 2), 62500500001, 'Test 67');
test(waysToBuyPensPencils(999999, 1, 1), 500000500000, 'Test 68');
test(waysToBuyPensPencils(1500000, 300000, 400000), 15, 'Test 69');
test(waysToBuyPensPencils(75, 15, 10), 27, 'Test 70');
test(waysToBuyPensPencils(200, 1, 1), 20301, 'Test 71');
test(waysToBuyPensPencils(1000, 500, 100), 18, 'Test 72');
test(waysToBuyPensPencils(100, 1, 2), 2601, 'Test 73');
test(waysToBuyPensPencils(70, 5, 3), 185, 'Test 74');
test(waysToBuyPensPencils(300, 100, 150), 7, 'Test 75');
test(waysToBuyPensPencils(1000, 300, 500), 7, 'Test 76');
test(waysToBuyPensPencils(999999, 999999, 1), 1000001, 'Test 77');
test(waysToBuyPensPencils(1000000, 1, 1), 500001500001, 'Test 78');
test(waysToBuyPensPencils(1000000, 1, 1000000), 1000002, 'Test 79');
test(waysToBuyPensPencils(1000, 5, 3), 33634, 'Test 80');
test(waysToBuyPensPencils(5000, 50, 100), 2601, 'Test 81');
test(waysToBuyPensPencils(100000, 20000, 30000), 14, 'Test 82');
test(waysToBuyPensPencils(1000, 100, 10), 561, 'Test 83');
test(waysToBuyPensPencils(100, 30, 70), 6, 'Test 84');
test(waysToBuyPensPencils(100, 30, 7), 34, 'Test 85');
test(waysToBuyPensPencils(123456, 123, 456), 136511, 'Test 86');
test(waysToBuyPensPencils(300, 50, 25), 49, 'Test 87');
test(waysToBuyPensPencils(100, 5, 3), 364, 'Test 88');
test(waysToBuyPensPencils(10000, 100, 10), 50601, 'Test 89');
test(waysToBuyPensPencils(200, 150, 50), 7, 'Test 90');
test(waysToBuyPensPencils(500, 100, 50), 36, 'Test 91');
test(waysToBuyPensPencils(999999, 100000, 10000), 550, 'Test 92');
test(waysToBuyPensPencils(500, 100, 10), 156, 'Test 93');
test(waysToBuyPensPencils(300, 50, 75), 19, 'Test 94');
test(waysToBuyPensPencils(100, 99, 1), 103, 'Test 95');
test(waysToBuyPensPencils(100, 25, 7), 39, 'Test 96');
test(waysToBuyPensPencils(200, 7, 11), 285, 'Test 97');
test(waysToBuyPensPencils(300, 150, 50), 12, 'Test 98');
test(waysToBuyPensPencils(100, 50, 25), 9, 'Test 99');
test(waysToBuyPensPencils(120, 20, 15), 33, 'Test 100');
test(waysToBuyPensPencils(500, 200, 150), 8, 'Test 101');
test(waysToBuyPensPencils(1, 1, 2), 2, 'Test 102');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

