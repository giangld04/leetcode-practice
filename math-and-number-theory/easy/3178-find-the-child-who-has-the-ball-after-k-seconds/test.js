// Test: 3178. Find The Child Who Has The Ball After K Seconds
// 82 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfChild } = require("./solution");

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

console.log("\n3178. Find The Child Who Has The Ball After K Seconds\n");

test(numberOfChild(50, 50), 48, 'Test 1');
test(numberOfChild(3, 5), 1, 'Test 2');
test(numberOfChild(2, 1), 1, 'Test 3');
test(numberOfChild(40, 20), 20, 'Test 4');
test(numberOfChild(5, 6), 2, 'Test 5');
test(numberOfChild(10, 15), 3, 'Test 6');
test(numberOfChild(2, 2), 0, 'Test 7');
test(numberOfChild(2, 50), 0, 'Test 8');
test(numberOfChild(4, 2), 2, 'Test 9');
test(numberOfChild(25, 50), 2, 'Test 10');
test(numberOfChild(49, 75), 21, 'Test 11');
test(numberOfChild(18, 36), 2, 'Test 12');
test(numberOfChild(20, 300), 4, 'Test 13');
test(numberOfChild(45, 270), 6, 'Test 14');
test(numberOfChild(45, 101), 13, 'Test 15');
test(numberOfChild(35, 99), 31, 'Test 16');
test(numberOfChild(33, 231), 25, 'Test 17');
test(numberOfChild(23, 60), 16, 'Test 18');
test(numberOfChild(15, 47), 9, 'Test 19');
test(numberOfChild(30, 85), 27, 'Test 20');
test(numberOfChild(12, 150), 4, 'Test 21');
test(numberOfChild(40, 199), 35, 'Test 22');
test(numberOfChild(49, 99), 3, 'Test 23');
test(numberOfChild(30, 90), 26, 'Test 24');
test(numberOfChild(50, 100), 2, 'Test 25');
test(numberOfChild(28, 99), 9, 'Test 26');
test(numberOfChild(17, 75), 11, 'Test 27');
test(numberOfChild(20, 60), 16, 'Test 28');
test(numberOfChild(45, 100), 12, 'Test 29');
test(numberOfChild(23, 115), 17, 'Test 30');
test(numberOfChild(29, 87), 25, 'Test 31');
test(numberOfChild(20, 75), 1, 'Test 32');
test(numberOfChild(40, 200), 34, 'Test 33');
test(numberOfChild(8, 100), 2, 'Test 34');
test(numberOfChild(35, 49), 19, 'Test 35');
test(numberOfChild(32, 150), 26, 'Test 36');
test(numberOfChild(18, 80), 12, 'Test 37');
test(numberOfChild(37, 110), 34, 'Test 38');
test(numberOfChild(30, 250), 18, 'Test 39');
test(numberOfChild(40, 85), 7, 'Test 40');
test(numberOfChild(17, 85), 11, 'Test 41');
test(numberOfChild(15, 225), 1, 'Test 42');
test(numberOfChild(41, 90), 10, 'Test 43');
test(numberOfChild(35, 140), 4, 'Test 44');
test(numberOfChild(15, 150), 10, 'Test 45');
test(numberOfChild(35, 100), 32, 'Test 46');
test(numberOfChild(18, 180), 10, 'Test 47');
test(numberOfChild(22, 55), 13, 'Test 48');
test(numberOfChild(50, 123), 25, 'Test 49');
test(numberOfChild(15, 60), 4, 'Test 50');
test(numberOfChild(28, 63), 9, 'Test 51');
test(numberOfChild(49, 49), 47, 'Test 52');
test(numberOfChild(35, 120), 16, 'Test 53');
test(numberOfChild(28, 100), 8, 'Test 54');
test(numberOfChild(50, 250), 44, 'Test 55');
test(numberOfChild(28, 196), 20, 'Test 56');
test(numberOfChild(18, 90), 12, 'Test 57');
test(numberOfChild(50, 125), 27, 'Test 58');
test(numberOfChild(30, 225), 7, 'Test 59');
test(numberOfChild(30, 98), 18, 'Test 60');
test(numberOfChild(35, 70), 2, 'Test 61');
test(numberOfChild(49, 48), 48, 'Test 62');
test(numberOfChild(35, 350), 10, 'Test 63');
test(numberOfChild(45, 120), 32, 'Test 64');
test(numberOfChild(28, 140), 22, 'Test 65');
test(numberOfChild(45, 200), 24, 'Test 66');
test(numberOfChild(20, 99), 15, 'Test 67');
test(numberOfChild(50, 49), 49, 'Test 68');
test(numberOfChild(20, 49), 11, 'Test 69');
test(numberOfChild(13, 195), 3, 'Test 70');
test(numberOfChild(45, 180), 4, 'Test 71');
test(numberOfChild(20, 199), 9, 'Test 72');
test(numberOfChild(40, 400), 10, 'Test 73');
test(numberOfChild(49, 225), 33, 'Test 74');
test(numberOfChild(35, 175), 29, 'Test 75');
test(numberOfChild(27, 70), 18, 'Test 76');
test(numberOfChild(49, 98), 2, 'Test 77');
test(numberOfChild(15, 120), 8, 'Test 78');
test(numberOfChild(28, 120), 12, 'Test 79');
test(numberOfChild(50, 25), 25, 'Test 80');
test(numberOfChild(30, 100), 16, 'Test 81');
test(numberOfChild(30, 180), 6, 'Test 82');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

