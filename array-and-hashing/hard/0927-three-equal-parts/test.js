// Test: 927. Three Equal Parts
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { threeEqualParts } = require("./solution");

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

console.log("\n927. Three Equal Parts\n");

test(threeEqualParts([1,0,1,0,1]), [0, 3], 'Test 1');
test(threeEqualParts([0,0,0]), [0, 2], 'Test 2');
test(threeEqualParts([1,1,0,1,1]), [-1, -1], 'Test 3');
test(threeEqualParts([1,1,1,0,0,1,1,1]), [-1, -1], 'Test 4');
test(threeEqualParts([1,0,0,1,0,0,1,0,0]), [2, 6], 'Test 5');
test(threeEqualParts([1,1,1,0,0,1,1,1,0,0,1,1,1]), [2, 8], 'Test 6');
test(threeEqualParts([0,0,0,0,0,0]), [0, 5], 'Test 7');
test(threeEqualParts([1,0,1,1,0,0,1,0,1]), [-1, -1], 'Test 8');
test(threeEqualParts([1,1,0,0,1]), [0, 2], 'Test 9');
test(threeEqualParts([1,0,1,1,0,0,1,0,1,0,1]), [-1, -1], 'Test 10');
test(threeEqualParts([0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1]), [11, 16], 'Test 11');
test(threeEqualParts([0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0]), [-1, -1], 'Test 12');
test(threeEqualParts([1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1]), [-1, -1], 'Test 13');
test(threeEqualParts([1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]), [-1, -1], 'Test 14');
test(threeEqualParts([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]), [4, 13], 'Test 15');
test(threeEqualParts([0,0,0,1,0,1,0,0,0,1,0,1,0,0,0]), [-1, -1], 'Test 16');
test(threeEqualParts([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]), [6, 11], 'Test 17');
test(threeEqualParts([1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1]), [2, 13], 'Test 18');
test(threeEqualParts([1,1,0,0,1,0,1,0,1,0,0,1,1]), [-1, -1], 'Test 19');
test(threeEqualParts([1,0,1,0,1,0,1,0,1,1,0,1,0,1]), [-1, -1], 'Test 20');
test(threeEqualParts([1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), [-1, -1], 'Test 21');
test(threeEqualParts([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), [-1, -1], 'Test 22');
test(threeEqualParts([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), [-1, -1], 'Test 23');
test(threeEqualParts([1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1]), [2, 12], 'Test 24');
test(threeEqualParts([1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1]), [0, 13], 'Test 25');
test(threeEqualParts([1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1]), [-1, -1], 'Test 26');
test(threeEqualParts([1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1]), [-1, -1], 'Test 27');
test(threeEqualParts([1,0,0,1,0,0,1,0,0,1,0,0,1]), [-1, -1], 'Test 28');
test(threeEqualParts([1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1]), [-1, -1], 'Test 29');
test(threeEqualParts([1,1,0,1,0,1,0,1,0,1,0,1,0,1]), [-1, -1], 'Test 30');
test(threeEqualParts([0,0,1,0,0,1,0,0,1,0,0]), [4, 8], 'Test 31');
test(threeEqualParts([0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]), [5, 11], 'Test 32');
test(threeEqualParts([1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1]), [-1, -1], 'Test 33');
test(threeEqualParts([0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]), [-1, -1], 'Test 34');
test(threeEqualParts([1,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), [-1, -1], 'Test 35');
test(threeEqualParts([1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1]), [-1, -1], 'Test 36');
test(threeEqualParts([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), [-1, -1], 'Test 37');
test(threeEqualParts([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), [-1, -1], 'Test 38');
test(threeEqualParts([1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1]), [-1, -1], 'Test 39');
test(threeEqualParts([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), [-1, -1], 'Test 40');
test(threeEqualParts([1,0,1,0,1,0,1,0,1,0,1,0]), [3, 8], 'Test 41');
test(threeEqualParts([1,0,1,0,1,0,1,0,1,0,1,0,1]), [-1, -1], 'Test 42');
test(threeEqualParts([1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), [-1, -1], 'Test 43');
test(threeEqualParts([0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0]), [-1, -1], 'Test 44');
test(threeEqualParts([1,1,0,0,1,0,0,1,0,0,1,0]), [-1, -1], 'Test 45');
test(threeEqualParts([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), [-1, -1], 'Test 46');
test(threeEqualParts([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]), [7, 14], 'Test 47');
test(threeEqualParts([1,1,0,0,1,1,0,0,1,1,0,0,1,1]), [-1, -1], 'Test 48');
test(threeEqualParts([1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1]), [-1, -1], 'Test 49');
test(threeEqualParts([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]), [-1, -1], 'Test 50');
test(threeEqualParts([0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0]), [-1, -1], 'Test 51');
test(threeEqualParts([1,0,0,1,0,0,1,0,0,1]), [-1, -1], 'Test 52');
test(threeEqualParts([1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1]), [-1, -1], 'Test 53');
test(threeEqualParts([1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0]), [-1, -1], 'Test 54');
test(threeEqualParts([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]), [3, 10], 'Test 55');
test(threeEqualParts([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), [-1, -1], 'Test 56');
test(threeEqualParts([1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1]), [-1, -1], 'Test 57');
test(threeEqualParts([1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1]), [-1, -1], 'Test 58');
test(threeEqualParts([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]), [-1, -1], 'Test 59');
test(threeEqualParts([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), [-1, -1], 'Test 60');
test(threeEqualParts([1,1,1,0,0,0,1,1,1,0,0,0]), [-1, -1], 'Test 61');
test(threeEqualParts([0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0]), [-1, -1], 'Test 62');
test(threeEqualParts([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), [0, 19], 'Test 63');
test(threeEqualParts([1,0,1,0,0,0,0,1,0,0,0,0,1,0,1]), [-1, -1], 'Test 64');
test(threeEqualParts([1,1,1,0,0,0,1,1,1,0,0,0,1,1,1]), [2, 9], 'Test 65');
test(threeEqualParts([0,1,0,1,0,1,0,1,0,1,0,0,0,0,0]), [-1, -1], 'Test 66');
test(threeEqualParts([0,1,0,1,0,1,0,1,0,1,0,1]), [3, 8], 'Test 67');
test(threeEqualParts([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]), [5, 14], 'Test 68');
test(threeEqualParts([1,0,1,0,1,0,1,0,1,0,1]), [2, 7], 'Test 69');
test(threeEqualParts([1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1]), [-1, -1], 'Test 70');
test(threeEqualParts([1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1]), [-1, -1], 'Test 71');
test(threeEqualParts([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]), [-1, -1], 'Test 72');
test(threeEqualParts([0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1]), [-1, -1], 'Test 73');
test(threeEqualParts([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), [-1, -1], 'Test 74');
test(threeEqualParts([0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0]), [6, 12], 'Test 75');
test(threeEqualParts([0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]), [-1, -1], 'Test 76');
test(threeEqualParts([1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1]), [0, 13], 'Test 77');
test(threeEqualParts([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]), [-1, -1], 'Test 78');
test(threeEqualParts([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), [-1, -1], 'Test 79');
test(threeEqualParts([0,1,0,0,1,0,0,1,0,0,1,0,0]), [-1, -1], 'Test 80');
test(threeEqualParts([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), [6, 15], 'Test 81');
test(threeEqualParts([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), [5, 12], 'Test 82');
test(threeEqualParts([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), [-1, -1], 'Test 83');
test(threeEqualParts([1,0,1,0,0,1,0,1,0,0,1,0,1,0]), [3, 9], 'Test 84');
test(threeEqualParts([0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]), [-1, -1], 'Test 85');
test(threeEqualParts([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]), [-1, -1], 'Test 86');
test(threeEqualParts([0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0]), [7, 14], 'Test 87');
test(threeEqualParts([1,1,0,0,1,0,0,1,1,0,1,0,0,1,1]), [-1, -1], 'Test 88');
test(threeEqualParts([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), [-1, -1], 'Test 89');
test(threeEqualParts([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), [-1, -1], 'Test 90');
test(threeEqualParts([1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0]), [7, 16], 'Test 91');
test(threeEqualParts([0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0]), [-1, -1], 'Test 92');
test(threeEqualParts([1,0,0,0,1,0,0,0,1,0,0,0,1]), [-1, -1], 'Test 93');
test(threeEqualParts([1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0]), [-1, -1], 'Test 94');
test(threeEqualParts([0,0,1,0,1,0,0,1,0,1,0,0,1,0,1]), [4, 10], 'Test 95');
test(threeEqualParts([1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1]), [-1, -1], 'Test 96');
test(threeEqualParts([1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1]), [-1, -1], 'Test 97');
test(threeEqualParts([1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]), [-1, -1], 'Test 98');
test(threeEqualParts([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), [5, 12], 'Test 99');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

