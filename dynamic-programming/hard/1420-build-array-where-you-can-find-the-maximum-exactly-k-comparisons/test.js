// Test: 1420. Build Array Where You Can Find The Maximum Exactly K Comparisons
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { numOfArrays } = require("./solution");

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

console.log("\n1420. Build Array Where You Can Find The Maximum Exactly K Comparisons\n");

test(numOfArrays(1, 1, 1), 1, 'Test 1');
test(numOfArrays(4, 5, 2), 305, 'Test 2');
test(numOfArrays(3, 3, 0), 0, 'Test 3');
test(numOfArrays(3, 5, 2), 60, 'Test 4');
test(numOfArrays(5, 2, 3), 0, 'Test 5');
test(numOfArrays(4, 4, 2), 125, 'Test 6');
test(numOfArrays(1, 1, 0), 0, 'Test 7');
test(numOfArrays(50, 100, 50), 538992043, 'Test 8');
test(numOfArrays(10, 10, 5), 282622725, 'Test 9');
test(numOfArrays(4, 4, 0), 0, 'Test 10');
test(numOfArrays(2, 3, 1), 6, 'Test 11');
test(numOfArrays(50, 100, 0), 0, 'Test 12');
test(numOfArrays(9, 1, 1), 1, 'Test 13');
test(numOfArrays(40, 30, 20), 620836495, 'Test 14');
test(numOfArrays(25, 10, 15), 0, 'Test 15');
test(numOfArrays(45, 5, 2), 741424886, 'Test 16');
test(numOfArrays(40, 20, 15), 992287753, 'Test 17');
test(numOfArrays(50, 50, 25), 60065601, 'Test 18');
test(numOfArrays(10, 4, 3), 241950, 'Test 19');
test(numOfArrays(25, 10, 5), 513807183, 'Test 20');
test(numOfArrays(10, 1, 0), 0, 'Test 21');
test(numOfArrays(20, 15, 19), 0, 'Test 22');
test(numOfArrays(10, 5, 4), 595775, 'Test 23');
test(numOfArrays(6, 3, 3), 90, 'Test 24');
test(numOfArrays(40, 15, 7), 487352486, 'Test 25');
test(numOfArrays(30, 10, 10), 967895731, 'Test 26');
test(numOfArrays(35, 50, 15), 67294554, 'Test 27');
test(numOfArrays(15, 3, 2), 7174452, 'Test 28');
test(numOfArrays(25, 5, 5), 957053963, 'Test 29');
test(numOfArrays(50, 100, 25), 34549172, 'Test 30');
test(numOfArrays(35, 25, 5), 706635531, 'Test 31');
test(numOfArrays(50, 50, 50), 1, 'Test 32');
test(numOfArrays(30, 30, 15), 153434023, 'Test 33');
test(numOfArrays(5, 5, 3), 585, 'Test 34');
test(numOfArrays(15, 8, 4), 997233503, 'Test 35');
test(numOfArrays(25, 2, 1), 16777217, 'Test 36');
test(numOfArrays(35, 1, 1), 1, 'Test 37');
test(numOfArrays(15, 7, 5), 128631420, 'Test 38');
test(numOfArrays(35, 50, 20), 604238599, 'Test 39');
test(numOfArrays(30, 20, 10), 91721467, 'Test 40');
test(numOfArrays(15, 30, 7), 115201714, 'Test 41');
test(numOfArrays(25, 40, 9), 701520657, 'Test 42');
test(numOfArrays(40, 25, 6), 775163810, 'Test 43');
test(numOfArrays(40, 25, 20), 121510237, 'Test 44');
test(numOfArrays(5, 100, 3), 874379186, 'Test 45');
test(numOfArrays(42, 50, 15), 300194714, 'Test 46');
test(numOfArrays(15, 15, 7), 687790825, 'Test 47');
test(numOfArrays(30, 50, 10), 467663134, 'Test 48');
test(numOfArrays(45, 50, 18), 362047302, 'Test 49');
test(numOfArrays(20, 15, 10), 836223400, 'Test 50');
test(numOfArrays(5, 10, 3), 24420, 'Test 51');
test(numOfArrays(35, 40, 25), 920448080, 'Test 52');
test(numOfArrays(10, 10, 10), 1, 'Test 53');
test(numOfArrays(20, 2, 0), 0, 'Test 54');
test(numOfArrays(15, 1, 0), 0, 'Test 55');
test(numOfArrays(7, 6, 4), 15435, 'Test 56');
test(numOfArrays(20, 15, 5), 290343834, 'Test 57');
test(numOfArrays(40, 20, 20), 494331990, 'Test 58');
test(numOfArrays(10, 10, 3), 141166029, 'Test 59');
test(numOfArrays(30, 100, 29), 66522256, 'Test 60');
test(numOfArrays(45, 5, 10), 0, 'Test 61');
test(numOfArrays(5, 4, 2), 500, 'Test 62');
test(numOfArrays(50, 100, 10), 329962470, 'Test 63');
test(numOfArrays(50, 100, 20), 90726602, 'Test 64');
test(numOfArrays(20, 5, 5), 206085257, 'Test 65');
test(numOfArrays(45, 10, 5), 505926106, 'Test 66');
test(numOfArrays(45, 40, 25), 391896760, 'Test 67');
test(numOfArrays(25, 20, 4), 983809007, 'Test 68');
test(numOfArrays(50, 100, 30), 724411167, 'Test 69');
test(numOfArrays(30, 3, 0), 0, 'Test 70');
test(numOfArrays(20, 20, 10), 802034327, 'Test 71');
test(numOfArrays(10, 5, 3), 2604825, 'Test 72');
test(numOfArrays(10, 7, 3), 84246120, 'Test 73');
test(numOfArrays(30, 15, 10), 934932290, 'Test 74');
test(numOfArrays(5, 3, 2), 120, 'Test 75');
test(numOfArrays(50, 1, 1), 1, 'Test 76');
test(numOfArrays(40, 20, 1), 615177897, 'Test 77');
test(numOfArrays(15, 5, 4), 319448936, 'Test 78');
test(numOfArrays(50, 1, 0), 0, 'Test 79');
test(numOfArrays(35, 7, 7), 888706682, 'Test 80');
test(numOfArrays(50, 10, 0), 0, 'Test 81');
test(numOfArrays(20, 15, 4), 581619126, 'Test 82');
test(numOfArrays(8, 8, 4), 1511559, 'Test 83');
test(numOfArrays(25, 50, 15), 576291422, 'Test 84');
test(numOfArrays(25, 20, 6), 286391446, 'Test 85');
test(numOfArrays(40, 10, 5), 403011874, 'Test 86');
test(numOfArrays(30, 100, 10), 182325231, 'Test 87');
test(numOfArrays(30, 20, 6), 661827822, 'Test 88');
test(numOfArrays(40, 40, 20), 387728551, 'Test 89');
test(numOfArrays(45, 5, 0), 0, 'Test 90');
test(numOfArrays(45, 30, 8), 208992079, 'Test 91');
test(numOfArrays(20, 10, 5), 650197027, 'Test 92');
test(numOfArrays(15, 15, 15), 1, 'Test 93');
test(numOfArrays(20, 5, 3), 982515902, 'Test 94');
test(numOfArrays(40, 20, 10), 728982973, 'Test 95');
test(numOfArrays(45, 9, 9), 102251773, 'Test 96');
test(numOfArrays(45, 5, 1), 675218148, 'Test 97');
test(numOfArrays(30, 10, 15), 0, 'Test 98');
test(numOfArrays(15, 10, 5), 483153304, 'Test 99');
test(numOfArrays(45, 90, 40), 920197928, 'Test 100');
test(numOfArrays(7, 7, 5), 5320, 'Test 101');
test(numOfArrays(20, 50, 5), 46582970, 'Test 102');
test(numOfArrays(40, 15, 15), 696143324, 'Test 103');
test(numOfArrays(25, 25, 10), 458548979, 'Test 104');
test(numOfArrays(35, 15, 25), 0, 'Test 105');
test(numOfArrays(45, 25, 20), 820427360, 'Test 106');
test(numOfArrays(40, 25, 0), 0, 'Test 107');
test(numOfArrays(20, 3, 2), 743392192, 'Test 108');
test(numOfArrays(30, 20, 15), 845454640, 'Test 109');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

