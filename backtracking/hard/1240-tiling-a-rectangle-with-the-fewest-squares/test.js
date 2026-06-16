// Test: 1240. Tiling A Rectangle With The Fewest Squares
// 66 test cases from LeetCodeDataset
// Run: node test.js

const { tilingRectangle } = require("./solution");

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

console.log("\n1240. Tiling A Rectangle With The Fewest Squares\n");

test(tilingRectangle(8, 8), 1, 'Test 1');
test(tilingRectangle(1, 1), 1, 'Test 2');
test(tilingRectangle(10, 14), 5, 'Test 3');
test(tilingRectangle(7, 7), 1, 'Test 4');
test(tilingRectangle(9, 10), 6, 'Test 5');
test(tilingRectangle(7, 8), 7, 'Test 6');
test(tilingRectangle(6, 7), 5, 'Test 7');
test(tilingRectangle(6, 10), 4, 'Test 8');
test(tilingRectangle(8, 9), 7, 'Test 9');
test(tilingRectangle(3, 3), 1, 'Test 10');
test(tilingRectangle(4, 10), 4, 'Test 11');
test(tilingRectangle(11, 13), 6, 'Test 12');
test(tilingRectangle(5, 8), 5, 'Test 13');
test(tilingRectangle(12, 13), 7, 'Test 14');
test(tilingRectangle(4, 6), 3, 'Test 15');
test(tilingRectangle(10, 11), 6, 'Test 16');
test(tilingRectangle(9, 12), 4, 'Test 17');
test(tilingRectangle(9, 11), 7, 'Test 18');
test(tilingRectangle(13, 13), 1, 'Test 19');
test(tilingRectangle(3, 5), 4, 'Test 20');
test(tilingRectangle(2, 3), 3, 'Test 21');
test(tilingRectangle(10, 10), 1, 'Test 22');
test(tilingRectangle(6, 6), 1, 'Test 23');
test(tilingRectangle(7, 12), 6, 'Test 24');
test(tilingRectangle(3, 11), 6, 'Test 25');
test(tilingRectangle(11, 10), 6, 'Test 26');
test(tilingRectangle(13, 5), 6, 'Test 27');
test(tilingRectangle(12, 7), 6, 'Test 28');
test(tilingRectangle(13, 7), 6, 'Test 29');
test(tilingRectangle(5, 11), 6, 'Test 30');
test(tilingRectangle(5, 12), 6, 'Test 31');
test(tilingRectangle(3, 14), 7, 'Test 32');
test(tilingRectangle(8, 15), 8, 'Test 33');
test(tilingRectangle(7, 13), 6, 'Test 34');
test(tilingRectangle(9, 9), 1, 'Test 35');
test(tilingRectangle(3, 7), 5, 'Test 36');
test(tilingRectangle(4, 15), 7, 'Test 37');
test(tilingRectangle(6, 11), 6, 'Test 38');
test(tilingRectangle(14, 14), 1, 'Test 39');
test(tilingRectangle(2, 13), 8, 'Test 40');
test(tilingRectangle(6, 13), 6, 'Test 41');
test(tilingRectangle(6, 9), 3, 'Test 42');
test(tilingRectangle(4, 9), 6, 'Test 43');
test(tilingRectangle(8, 12), 3, 'Test 44');
test(tilingRectangle(4, 11), 6, 'Test 45');
test(tilingRectangle(13, 12), 7, 'Test 46');
test(tilingRectangle(10, 5), 2, 'Test 47');
test(tilingRectangle(4, 7), 5, 'Test 48');
test(tilingRectangle(7, 10), 6, 'Test 49');
test(tilingRectangle(12, 5), 6, 'Test 50');
test(tilingRectangle(12, 14), 5, 'Test 51');
test(tilingRectangle(9, 7), 6, 'Test 52');
test(tilingRectangle(10, 12), 5, 'Test 53');
test(tilingRectangle(8, 13), 6, 'Test 54');
test(tilingRectangle(12, 11), 7, 'Test 55');
test(tilingRectangle(10, 15), 3, 'Test 56');
test(tilingRectangle(9, 14), 7, 'Test 57');
test(tilingRectangle(8, 10), 5, 'Test 58');
test(tilingRectangle(3, 10), 6, 'Test 59');
test(tilingRectangle(11, 9), 7, 'Test 60');
test(tilingRectangle(8, 11), 6, 'Test 61');
test(tilingRectangle(13, 6), 6, 'Test 62');
test(tilingRectangle(5, 9), 6, 'Test 63');
test(tilingRectangle(4, 13), 7, 'Test 64');
test(tilingRectangle(12, 15), 5, 'Test 65');
test(tilingRectangle(12, 10), 5, 'Test 66');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

