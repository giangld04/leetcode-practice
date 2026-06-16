// Test: 3200. Maximum Height Of A Triangle
// 67 test cases from LeetCodeDataset
// Run: node test.js

const { maxHeightOfTriangle } = require("./solution");

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

console.log("\n3200. Maximum Height Of A Triangle\n");

test(maxHeightOfTriangle(100, 1), 2, 'Test 1');
test(maxHeightOfTriangle(3, 7), 3, 'Test 2');
test(maxHeightOfTriangle(50, 50), 13, 'Test 3');
test(maxHeightOfTriangle(5, 5), 3, 'Test 4');
test(maxHeightOfTriangle(1, 1), 1, 'Test 5');
test(maxHeightOfTriangle(10, 1), 2, 'Test 6');
test(maxHeightOfTriangle(1, 100), 2, 'Test 7');
test(maxHeightOfTriangle(2, 1), 2, 'Test 8');
test(maxHeightOfTriangle(2, 4), 3, 'Test 9');
test(maxHeightOfTriangle(100, 100), 19, 'Test 10');
test(maxHeightOfTriangle(15, 10), 6, 'Test 11');
test(maxHeightOfTriangle(20, 15), 7, 'Test 12');
test(maxHeightOfTriangle(30, 30), 10, 'Test 13');
test(maxHeightOfTriangle(25, 25), 9, 'Test 14');
test(maxHeightOfTriangle(8, 8), 4, 'Test 15');
test(maxHeightOfTriangle(15, 14), 6, 'Test 16');
test(maxHeightOfTriangle(30, 10), 6, 'Test 17');
test(maxHeightOfTriangle(33, 66), 11, 'Test 18');
test(maxHeightOfTriangle(7, 12), 5, 'Test 19');
test(maxHeightOfTriangle(40, 40), 11, 'Test 20');
test(maxHeightOfTriangle(15, 85), 7, 'Test 21');
test(maxHeightOfTriangle(10, 15), 6, 'Test 22');
test(maxHeightOfTriangle(70, 30), 11, 'Test 23');
test(maxHeightOfTriangle(30, 70), 11, 'Test 24');
test(maxHeightOfTriangle(50, 30), 11, 'Test 25');
test(maxHeightOfTriangle(40, 39), 11, 'Test 26');
test(maxHeightOfTriangle(49, 49), 13, 'Test 27');
test(maxHeightOfTriangle(10, 90), 6, 'Test 28');
test(maxHeightOfTriangle(3, 5), 3, 'Test 29');
test(maxHeightOfTriangle(42, 42), 12, 'Test 30');
test(maxHeightOfTriangle(7, 9), 5, 'Test 31');
test(maxHeightOfTriangle(7, 3), 3, 'Test 32');
test(maxHeightOfTriangle(15, 15), 6, 'Test 33');
test(maxHeightOfTriangle(30, 20), 9, 'Test 34');
test(maxHeightOfTriangle(55, 45), 13, 'Test 35');
test(maxHeightOfTriangle(40, 60), 12, 'Test 36');
test(maxHeightOfTriangle(12, 12), 6, 'Test 37');
test(maxHeightOfTriangle(50, 60), 14, 'Test 38');
test(maxHeightOfTriangle(30, 40), 11, 'Test 39');
test(maxHeightOfTriangle(20, 20), 8, 'Test 40');
test(maxHeightOfTriangle(10, 20), 6, 'Test 41');
test(maxHeightOfTriangle(99, 99), 18, 'Test 42');
test(maxHeightOfTriangle(3, 97), 3, 'Test 43');
test(maxHeightOfTriangle(99, 100), 19, 'Test 44');
test(maxHeightOfTriangle(90, 10), 6, 'Test 45');
test(maxHeightOfTriangle(99, 2), 3, 'Test 46');
test(maxHeightOfTriangle(45, 55), 13, 'Test 47');
test(maxHeightOfTriangle(99, 1), 2, 'Test 48');
test(maxHeightOfTriangle(35, 65), 11, 'Test 49');
test(maxHeightOfTriangle(60, 40), 12, 'Test 50');
test(maxHeightOfTriangle(25, 75), 10, 'Test 51');
test(maxHeightOfTriangle(2, 2), 2, 'Test 52');
test(maxHeightOfTriangle(50, 100), 14, 'Test 53');
test(maxHeightOfTriangle(1, 99), 2, 'Test 54');
test(maxHeightOfTriangle(20, 10), 6, 'Test 55');
test(maxHeightOfTriangle(100, 50), 14, 'Test 56');
test(maxHeightOfTriangle(8, 7), 4, 'Test 57');
test(maxHeightOfTriangle(50, 25), 10, 'Test 58');
test(maxHeightOfTriangle(10, 10), 5, 'Test 59');
test(maxHeightOfTriangle(15, 20), 7, 'Test 60');
test(maxHeightOfTriangle(75, 25), 10, 'Test 61');
test(maxHeightOfTriangle(5, 95), 4, 'Test 62');
test(maxHeightOfTriangle(80, 20), 9, 'Test 63');
test(maxHeightOfTriangle(20, 80), 9, 'Test 64');
test(maxHeightOfTriangle(30, 50), 11, 'Test 65');
test(maxHeightOfTriangle(33, 67), 11, 'Test 66');
test(maxHeightOfTriangle(100, 99), 19, 'Test 67');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

