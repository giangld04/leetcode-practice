// Test: 780. Reaching Points
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { reachingPoints } = require("./solution");

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

console.log("\n780. Reaching Points\n");

test(reachingPoints(1, 1, 3, 5), true, 'Test 1');
test(reachingPoints(3, 4, 3, 12), false, 'Test 2');
test(reachingPoints(3, 7, 31, 19), false, 'Test 3');
test(reachingPoints(1, 1, 1000000000, 1000000000), false, 'Test 4');
test(reachingPoints(5, 5, 5, 5), true, 'Test 5');
test(reachingPoints(1, 1, 1, 1), true, 'Test 6');
test(reachingPoints(1, 1, 2, 2), false, 'Test 7');
test(reachingPoints(2, 3, 8, 11), true, 'Test 8');
test(reachingPoints(5, 1, 1000000000, 1000000000), false, 'Test 9');
test(reachingPoints(2, 3, 10, 15), false, 'Test 10');
test(reachingPoints(5, 5, 100, 100), false, 'Test 11');
test(reachingPoints(1, 1, 1000000000, 1), true, 'Test 12');
test(reachingPoints(2, 3, 10, 3), false, 'Test 13');
test(reachingPoints(7, 11, 412, 575), false, 'Test 14');
test(reachingPoints(10, 15, 55, 70), true, 'Test 15');
test(reachingPoints(2, 5, 27, 35), false, 'Test 16');
test(reachingPoints(5, 7, 29, 41), true, 'Test 17');
test(reachingPoints(3, 1, 10, 28), false, 'Test 18');
test(reachingPoints(3, 10, 81, 270), false, 'Test 19');
test(reachingPoints(1, 1, 987654321, 123456789), false, 'Test 20');
test(reachingPoints(15, 10, 225, 150), false, 'Test 21');
test(reachingPoints(17, 29, 306, 511), false, 'Test 22');
test(reachingPoints(2, 5, 23, 47), false, 'Test 23');
test(reachingPoints(7, 9, 161, 208), false, 'Test 24');
test(reachingPoints(2, 7, 113, 287), false, 'Test 25');
test(reachingPoints(21, 34, 1597, 2584), false, 'Test 26');
test(reachingPoints(8, 5, 144, 95), false, 'Test 27');
test(reachingPoints(3, 3, 18, 27), false, 'Test 28');
test(reachingPoints(2, 3, 50, 83), false, 'Test 29');
test(reachingPoints(12345, 67890, 56789, 45678), false, 'Test 30');
test(reachingPoints(13, 8, 65, 40), false, 'Test 31');
test(reachingPoints(7, 3, 49, 24), false, 'Test 32');
test(reachingPoints(5, 5, 35, 35), false, 'Test 33');
test(reachingPoints(2, 5, 17, 27), false, 'Test 34');
test(reachingPoints(3, 2, 18, 33), false, 'Test 35');
test(reachingPoints(999999999, 1, 1000000000, 1), true, 'Test 36');
test(reachingPoints(7, 17, 128, 17), false, 'Test 37');
test(reachingPoints(2, 5, 18, 47), false, 'Test 38');
test(reachingPoints(2, 5, 29, 44), false, 'Test 39');
test(reachingPoints(2, 7, 10, 17), false, 'Test 40');
test(reachingPoints(8, 7, 1000, 875), false, 'Test 41');
test(reachingPoints(13, 21, 286, 455), false, 'Test 42');
test(reachingPoints(3, 1, 39, 19), false, 'Test 43');
test(reachingPoints(5, 7, 22, 37), false, 'Test 44');
test(reachingPoints(6, 19, 114, 175), false, 'Test 45');
test(reachingPoints(10, 10, 110, 110), false, 'Test 46');
test(reachingPoints(5, 7, 35, 56), false, 'Test 47');
test(reachingPoints(1, 1, 19, 29), true, 'Test 48');
test(reachingPoints(5, 7, 46, 33), false, 'Test 49');
test(reachingPoints(10, 10, 100000000, 100000000), false, 'Test 50');
test(reachingPoints(5, 6, 60, 55), false, 'Test 51');
test(reachingPoints(10, 4, 100, 64), false, 'Test 52');
test(reachingPoints(8, 13, 104, 169), false, 'Test 53');
test(reachingPoints(13, 8, 104, 80), false, 'Test 54');
test(reachingPoints(7, 17, 119, 203), false, 'Test 55');
test(reachingPoints(2, 3, 1046527, 165580141), false, 'Test 56');
test(reachingPoints(4, 9, 100, 225), false, 'Test 57');
test(reachingPoints(1, 2, 47, 70), true, 'Test 58');
test(reachingPoints(1, 1, 55, 89), true, 'Test 59');
test(reachingPoints(3, 9, 27, 81), false, 'Test 60');
test(reachingPoints(4, 6, 144, 216), false, 'Test 61');
test(reachingPoints(3, 9, 81, 243), false, 'Test 62');
test(reachingPoints(8, 13, 233, 377), false, 'Test 63');
test(reachingPoints(5, 5, 125, 125), false, 'Test 64');
test(reachingPoints(11, 22, 121, 242), false, 'Test 65');
test(reachingPoints(13, 21, 34, 55), true, 'Test 66');
test(reachingPoints(3, 11, 121, 55), false, 'Test 67');
test(reachingPoints(10, 10, 100, 100), false, 'Test 68');
test(reachingPoints(12, 18, 108, 162), false, 'Test 69');
test(reachingPoints(10, 15, 150, 225), false, 'Test 70');
test(reachingPoints(3, 1, 10, 7), true, 'Test 71');
test(reachingPoints(11, 23, 132, 303), false, 'Test 72');
test(reachingPoints(1, 2, 5, 8), false, 'Test 73');
test(reachingPoints(7, 11, 217, 352), false, 'Test 74');
test(reachingPoints(7, 3, 31, 9), false, 'Test 75');
test(reachingPoints(5, 10, 100, 150), false, 'Test 76');
test(reachingPoints(8, 5, 8, 13), true, 'Test 77');
test(reachingPoints(12, 18, 324, 486), false, 'Test 78');
test(reachingPoints(3, 5, 100, 150), false, 'Test 79');
test(reachingPoints(1, 1, 987654321, 987654321), false, 'Test 80');
test(reachingPoints(1, 2, 1, 1046527), true, 'Test 81');
test(reachingPoints(21, 34, 55, 89), true, 'Test 82');
test(reachingPoints(5, 2, 27, 11), false, 'Test 83');
test(reachingPoints(2, 5, 29, 37), false, 'Test 84');
test(reachingPoints(5, 7, 1235, 1907), false, 'Test 85');
test(reachingPoints(100, 1, 999999999, 1000000000), true, 'Test 86');
test(reachingPoints(21, 14, 420, 280), false, 'Test 87');
test(reachingPoints(3, 3, 99, 99), false, 'Test 88');
test(reachingPoints(8, 3, 217, 58), false, 'Test 89');
test(reachingPoints(1, 2, 1000000000, 999999999), true, 'Test 90');
test(reachingPoints(10, 15, 110, 165), false, 'Test 91');
test(reachingPoints(5, 8, 165, 280), false, 'Test 92');
test(reachingPoints(10, 15, 100, 150), false, 'Test 93');
test(reachingPoints(1, 1, 1, 1000000000), true, 'Test 94');
test(reachingPoints(5, 17, 104, 193), false, 'Test 95');
test(reachingPoints(7, 3, 105, 45), false, 'Test 96');
test(reachingPoints(8, 13, 184, 299), false, 'Test 97');
test(reachingPoints(7, 17, 196, 511), false, 'Test 98');
test(reachingPoints(2, 5, 29, 17), true, 'Test 99');
test(reachingPoints(1, 10, 100, 91), false, 'Test 100');
test(reachingPoints(2, 1, 1046527, 1), true, 'Test 101');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

