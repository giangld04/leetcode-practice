// Test: 1326. Minimum Number Of Taps To Open To Water A Garden
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { minTaps } = require("./solution");

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

console.log("\n1326. Minimum Number Of Taps To Open To Water A Garden\n");

test(minTaps(10, [0,0,0,0,0,0,0,0,0,0,0]), -1, 'Test 1');
test(minTaps(5, [3,4,1,1,0,0]), 1, 'Test 2');
test(minTaps(8, [4,0,0,0,0,0,0,0,4]), 2, 'Test 3');
test(minTaps(3, [0,0,0,0]), -1, 'Test 4');
test(minTaps(2, [1,0,1]), 2, 'Test 5');
test(minTaps(6, [1,2,3,4,5,6,7]), 1, 'Test 6');
test(minTaps(8, [4,0,0,0,0,0,1,0,1]), -1, 'Test 7');
test(minTaps(7, [1,2,1,0,2,1,0,1]), 3, 'Test 8');
test(minTaps(10, [1,1,1,1,1,1,1,1,1,1]), 5, 'Test 9');
test(minTaps(6, [1,2,1,0,2,1,0]), 2, 'Test 10');
test(minTaps(1, [1,1]), 1, 'Test 11');
test(minTaps(6, [1,2,2,1,0,1,0]), 2, 'Test 12');
test(minTaps(20, [0,2,1,1,0,2,1,0,1,0,1,0,1,0,2,1,0,1,0,1,0]), 8, 'Test 13');
test(minTaps(7, [1,2,2,2,2,2,2,2]), 2, 'Test 14');
test(minTaps(12, [0,2,1,0,1,0,1,0,1,0,1,0,2]), 6, 'Test 15');
test(minTaps(20, [1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 6, 'Test 16');
test(minTaps(20, [5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), -1, 'Test 17');
test(minTaps(20, [4,0,0,0,0,1,0,2,0,0,0,1,2,0,1,0,0,1,0,1,0]), -1, 'Test 18');
test(minTaps(10, [2,3,1,2,3,2,1,2,3,2,1]), 3, 'Test 19');
test(minTaps(20, [5,4,3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5]), -1, 'Test 20');
test(minTaps(15, [3,0,0,1,1,2,0,0,0,0,0,0,0,2,2,0]), -1, 'Test 21');
test(minTaps(14, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), -1, 'Test 22');
test(minTaps(7, [3,2,2,3,2,2,1,1]), 2, 'Test 23');
test(minTaps(10, [2,3,0,2,1,0,1,0,1,0,1]), 5, 'Test 24');
test(minTaps(14, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,1]), 1, 'Test 25');
test(minTaps(25, [4,2,1,1,0,0,0,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0]), -1, 'Test 26');
test(minTaps(7, [0,1,0,0,1,0,1,0]), -1, 'Test 27');
test(minTaps(12, [1,1,1,1,1,1,1,1,1,1,1,1,1]), 6, 'Test 28');
test(minTaps(12, [3,3,3,3,3,3,3,3,3,3,3,3,3]), 2, 'Test 29');
test(minTaps(15, [1,2,2,3,1,2,3,0,1,2,1,0,1,2,1,0]), 4, 'Test 30');
test(minTaps(9, [0,0,2,0,0,0,2,0,0,2]), 3, 'Test 31');
test(minTaps(11, [0,2,1,0,1,0,1,0,1,0,1,0]), 5, 'Test 32');
test(minTaps(12, [4,1,0,0,0,0,0,0,0,0,0,0,4]), -1, 'Test 33');
test(minTaps(12, [1,0,0,0,0,0,0,0,0,0,0,0,1]), -1, 'Test 34');
test(minTaps(9, [0,1,0,1,0,1,0,1,0,1]), 5, 'Test 35');
test(minTaps(10, [2,2,0,2,2,0,1,0,1,2,0]), 4, 'Test 36');
test(minTaps(12, [2,2,2,2,2,2,2,2,2,2,2,2,2]), 3, 'Test 37');
test(minTaps(10, [3,1,1,1,1,1,1,1,1,1,1]), 5, 'Test 38');
test(minTaps(9, [0,0,1,0,0,0,0,0,1,1]), -1, 'Test 39');
test(minTaps(25, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), -1, 'Test 40');
test(minTaps(8, [1,1,1,1,1,1,1,1,1]), 4, 'Test 41');
test(minTaps(15, [3,1,4,2,1,0,1,0,0,2,3,0,1,0,1,0]), 4, 'Test 42');
test(minTaps(8, [0,1,2,3,4,3,2,1,0]), 1, 'Test 43');
test(minTaps(13, [3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 3, 'Test 44');
test(minTaps(12, [0,0,0,4,0,0,0,0,0,0,0,0,4]), -1, 'Test 45');
test(minTaps(20, [3,1,0,0,0,0,0,2,2,1,0,1,0,0,0,1,0,0,0,1,0]), -1, 'Test 46');
test(minTaps(7, [3,2,1,0,0,0,2,1]), -1, 'Test 47');
test(minTaps(100, [50] + [0]*98 + [50]), Error: Solution.minTaps[] missing 1 required positional argument: 'ranges', 'Test 48');
test(minTaps(7, [3,0,1,2,0,1,0,1]), 4, 'Test 49');
test(minTaps(12, [0,1,2,3,4,5,6,5,4,3,2,1,0]), 1, 'Test 50');
test(minTaps(20, [10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), -1, 'Test 51');
test(minTaps(8, [0,1,0,0,0,2,1,0,1]), -1, 'Test 52');
test(minTaps(15, [3,0,1,1,0,2,1,0,0,2,3,1,0,1,0,1]), 5, 'Test 53');
test(minTaps(9, [1,0,0,0,0,0,0,0,0,1]), -1, 'Test 54');
test(minTaps(15, [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 8, 'Test 55');
test(minTaps(12, [2,3,0,1,0,3,0,1,0,0,1,0,1]), -1, 'Test 56');
test(minTaps(10, [3,1,2,1,3,2,1,1,2,3,1]), 3, 'Test 57');
test(minTaps(12, [0,0,3,0,0,2,0,1,0,0,0,0,0]), -1, 'Test 58');
test(minTaps(25, [0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), -1, 'Test 59');
test(minTaps(20, [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10]), 2, 'Test 60');
test(minTaps(11, [1,0,1,0,1,0,1,0,1,0,1,0]), 6, 'Test 61');
test(minTaps(8, [3,0,2,1,1,0,2,1,1]), 2, 'Test 62');
test(minTaps(50, [25] + [0]*48 + [25]), Error: Solution.minTaps[] missing 1 required positional argument: 'ranges', 'Test 63');
test(minTaps(10, [2,3,1,1,0,2,1,0,1,2,1]), 3, 'Test 64');
test(minTaps(18, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), -1, 'Test 65');
test(minTaps(10, [1,2,3,4,5,4,3,2,1,0,1]), 2, 'Test 66');
test(minTaps(8, [0,0,2,0,0,0,2,1,1]), 2, 'Test 67');
test(minTaps(18, [5,0,3,0,0,0,0,2,1,0,1,0,1,0,1,0,0,0,4]), 6, 'Test 68');
test(minTaps(14, [0,1,1,0,1,0,0,1,0,1,0,1,0,0,0]), -1, 'Test 69');
test(minTaps(18, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]), Error: list index out of range, 'Test 70');
test(minTaps(10, [2,3,1,4,0,1,2,0,3,1,2]), 2, 'Test 71');
test(minTaps(11, [0,0,1,0,0,0,0,0,0,0,0,1]), -1, 'Test 72');
test(minTaps(8, [1,0,1,1,0,0,0,1,1]), -1, 'Test 73');
test(minTaps(15, [3,0,0,0,3,2,0,1,0,0,2,0,0,0,1]), -1, 'Test 74');
test(minTaps(10, [1,2,1,2,1,2,1,2,1,2,1]), 3, 'Test 75');
test(minTaps(13, [0,0,0,0,0,0,0,0,0,0,0,0,0,0]), -1, 'Test 76');
test(minTaps(9, [4,0,0,0,4,0,0,0,4,0]), 2, 'Test 77');
test(minTaps(10, [2,3,1,4,0,0,2,0,1,0,1]), 3, 'Test 78');
test(minTaps(15, [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 8, 'Test 79');
test(minTaps(18, [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), -1, 'Test 80');
test(minTaps(15, [3,0,1,1,0,0,0,1,2,1,0,1,1,0,0,3]), -1, 'Test 81');
test(minTaps(14, [2,3,4,5,6,7,8,9,10,11,12,13,14,0,1]), 1, 'Test 82');
test(minTaps(9, [0,2,1,3,1,2,0,1,0,2]), 3, 'Test 83');
test(minTaps(14, [3,2,0,0,0,1,1,0,0,0,0,0,1,1,1]), -1, 'Test 84');
test(minTaps(20, [5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5]), -1, 'Test 85');
test(minTaps(7, [3,2,0,0,1,0,1,1]), 3, 'Test 86');
test(minTaps(12, [0,1,2,3,4,5,6,7,8,9,10,11,12]), 1, 'Test 87');
test(minTaps(50, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]), -1, 'Test 88');
test(minTaps(12, [0,1,0,0,0,0,1,0,0,0,0,0,1]), -1, 'Test 89');
test(minTaps(15, [1,2,2,3,1,2,3,2,1,1,1,1,1,1,1]), 5, 'Test 90');
test(minTaps(20, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), -1, 'Test 91');
test(minTaps(25, [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 3, 'Test 92');
test(minTaps(20, [4,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 9, 'Test 93');
test(minTaps(10, [2,3,1,0,0,1,2,1,0,2,0]), 3, 'Test 94');
test(minTaps(20, [2,0,0,0,2,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0]), -1, 'Test 95');
test(minTaps(20, [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 2, 'Test 96');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

