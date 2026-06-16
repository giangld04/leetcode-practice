// Test: 2466. Count Ways To Build Good Strings
// 45 test cases from LeetCodeDataset
// Run: node test.js

const { countGoodStrings } = require("./solution");

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

console.log("\n2466. Count Ways To Build Good Strings\n");

test(countGoodStrings(5, 7, 1, 1), 224, 'Test 1');
test(countGoodStrings(100, 200, 10, 20), 28513, 'Test 2');
test(countGoodStrings(1, 5, 2, 3), 5, 'Test 3');
test(countGoodStrings(5, 10, 2, 4), 16, 'Test 4');
test(countGoodStrings(10, 15, 3, 2), 93, 'Test 5');
test(countGoodStrings(5, 5, 2, 3), 2, 'Test 6');
test(countGoodStrings(5, 10, 3, 4), 8, 'Test 7');
test(countGoodStrings(1, 5, 1, 1), 62, 'Test 8');
test(countGoodStrings(5, 5, 2, 2), 0, 'Test 9');
test(countGoodStrings(4, 6, 2, 2), 12, 'Test 10');
test(countGoodStrings(4, 4, 2, 2), 4, 'Test 11');
test(countGoodStrings(2, 3, 1, 2), 5, 'Test 12');
test(countGoodStrings(3, 7, 3, 3), 6, 'Test 13');
test(countGoodStrings(50000, 50000, 5000, 5000), 1024, 'Test 14');
test(countGoodStrings(7, 9, 3, 2), 12, 'Test 15');
test(countGoodStrings(50, 100, 5, 7), 177635, 'Test 16');
test(countGoodStrings(4, 6, 2, 3), 5, 'Test 17');
test(countGoodStrings(6, 10, 2, 3), 21, 'Test 18');
test(countGoodStrings(20, 25, 5, 6), 17, 'Test 19');
test(countGoodStrings(10, 15, 2, 2), 224, 'Test 20');
test(countGoodStrings(10, 100, 5, 7), 178096, 'Test 21');
test(countGoodStrings(4, 8, 2, 2), 28, 'Test 22');
test(countGoodStrings(6, 10, 3, 4), 8, 'Test 23');
test(countGoodStrings(5, 10, 2, 3), 23, 'Test 24');
test(countGoodStrings(20, 30, 3, 5), 283, 'Test 25');
test(countGoodStrings(1, 5, 1, 5), 6, 'Test 26');
test(countGoodStrings(3, 9, 2, 2), 28, 'Test 27');
test(countGoodStrings(1, 10, 1, 1), 2046, 'Test 28');
test(countGoodStrings(1, 5, 2, 2), 6, 'Test 29');
test(countGoodStrings(10, 15, 3, 4), 23, 'Test 30');
test(countGoodStrings(10, 15, 5, 6), 5, 'Test 31');
test(countGoodStrings(10, 15, 4, 5), 9, 'Test 32');
test(countGoodStrings(5, 7, 2, 3), 7, 'Test 33');
test(countGoodStrings(10, 15, 2, 3), 93, 'Test 34');
test(countGoodStrings(10, 10, 3, 4), 3, 'Test 35');
test(countGoodStrings(10, 15, 1, 1), 64512, 'Test 36');
test(countGoodStrings(2, 5, 1, 3), 10, 'Test 37');
test(countGoodStrings(10, 10, 5, 5), 4, 'Test 38');
test(countGoodStrings(50, 100, 10, 15), 444, 'Test 39');
test(countGoodStrings(3, 3, 1, 1), 8, 'Test 40');
test(countGoodStrings(10, 15, 5, 5), 12, 'Test 41');
test(countGoodStrings(6, 8, 4, 5), 1, 'Test 42');
test(countGoodStrings(1, 4, 1, 1), 30, 'Test 43');
test(countGoodStrings(1, 100, 1, 1), 952742561, 'Test 44');
test(countGoodStrings(1, 100, 25, 25), 30, 'Test 45');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

