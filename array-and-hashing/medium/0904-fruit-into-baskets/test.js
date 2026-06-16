// Test: 904. Fruit Into Baskets
// 98 test cases from LeetCodeDataset
// Run: node test.js

const { totalFruit } = require("./solution");

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

console.log("\n904. Fruit Into Baskets\n");

test(totalFruit([0]), 1, 'Test 1');
test(totalFruit([1,2,3,2,2]), 4, 'Test 2');
test(totalFruit([1,2,3,4,5,6,7,8,9]), 2, 'Test 3');
test(totalFruit([1,0,1,4,1,4,1,2,3]), 5, 'Test 4');
test(totalFruit([0,0,1,1]), 4, 'Test 5');
test(totalFruit([1]), 1, 'Test 6');
test(totalFruit([1,2,2,3,3,3,4,4,4,4]), 7, 'Test 7');
test(totalFruit([1,2,3,4,5]), 2, 'Test 8');
test(totalFruit([1,2,1]), 3, 'Test 9');
test(totalFruit([0,0,0,0,0]), 5, 'Test 10');
test(totalFruit([1,2,1,2,1,2,1,2,1]), 9, 'Test 11');
test(totalFruit([5,5,5,5,5,6,6,6,6,6,7,7,7,7,7]), 10, 'Test 12');
test(totalFruit([3,3,3,1,2,1,1,2,3,3,4]), 5, 'Test 13');
test(totalFruit([0,1,2,2]), 3, 'Test 14');
test(totalFruit([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 3, 'Test 15');
test(totalFruit([1,1,1,2,2,2,3,3,3,1,1,1,2,2,2]), 6, 'Test 16');
test(totalFruit([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 22, 'Test 17');
test(totalFruit([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,2]), 21, 'Test 18');
test(totalFruit([1,1,1,2,2,2,3,3,3]), 6, 'Test 19');
test(totalFruit([1,1,1,1,2,2,2,2,1,1,1,1,2,2,2,2,1,1,1,1]), 20, 'Test 20');
test(totalFruit([1,2,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3]), 3, 'Test 21');
test(totalFruit([5,4,3,2,1,2,3,4,5,4,3,2,1,2]), 3, 'Test 22');
test(totalFruit([1,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1]), 3, 'Test 23');
test(totalFruit([1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), 3, 'Test 24');
test(totalFruit([1,2,3,4,5,6,7,8,9,10]), 2, 'Test 25');
test(totalFruit([1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 30, 'Test 26');
test(totalFruit([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 20, 'Test 27');
test(totalFruit([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3]), 2, 'Test 28');
test(totalFruit([1,2,3,4,2,1,2,3,4]), 3, 'Test 29');
test(totalFruit([10, 20, 10, 20, 30, 40, 50, 10, 20, 30, 10, 20, 10, 20, 10]), 5, 'Test 30');
test(totalFruit([1,2,3,4,5,5,5,4,4,4,3,3,2,2,1]), 7, 'Test 31');
test(totalFruit([1,2,2,1,2,2,2,3,3,3,3,3,1,1,1,1,1]), 10, 'Test 32');
test(totalFruit([1,2,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2]), 3, 'Test 33');
test(totalFruit([5,5,5,6,6,5,6,5,5,5,7,7,7,5,5]), 10, 'Test 34');
test(totalFruit([1,2,3,3,2,1,1,2,2,1,3,3,3,2,1,1,2,2,3,3]), 6, 'Test 35');
test(totalFruit([1,2,3,1,2,3,1,2,3]), 2, 'Test 36');
test(totalFruit([1, 2, 3, 4, 5, 3, 4, 5, 6, 7, 8, 9, 5, 6, 7]), 2, 'Test 37');
test(totalFruit([3,3,3,1,2,1,1,2,3,3,3]), 5, 'Test 38');
test(totalFruit([1,2,1,2,1,2,1,3,1,3,1,3]), 7, 'Test 39');
test(totalFruit([9,8,7,6,5,4,3,2,1,0,0,1,1,2,2,3,3]), 5, 'Test 40');
test(totalFruit([1,2,3,4,5,4,3,2,1]), 3, 'Test 41');
test(totalFruit([1,1,2,2,3,3,4,4,5,5]), 4, 'Test 42');
test(totalFruit([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10]), 3, 'Test 43');
test(totalFruit([1,2,2,1,2,1,2,2,1,1,2,2]), 12, 'Test 44');
test(totalFruit([1, 2, 1, 2, 1, 2, 3, 4, 5, 3, 4, 5, 6, 7, 8, 9, 5, 6, 7]), 6, 'Test 45');
test(totalFruit([1,2,2,1,2,1,1,2,2,1,2,1,1,2,2,1,2,1,1,2]), 20, 'Test 46');
test(totalFruit([3,3,3,1,2,2,1,1,1,2,3,3,3]), 7, 'Test 47');
test(totalFruit([1,2,1,2,1,3,3,3,2,2,2,1,1,1,2,2,2]), 9, 'Test 48');
test(totalFruit([1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 29, 'Test 49');
test(totalFruit([0,1,0,1,0,1,0,1,0,1]), 10, 'Test 50');
test(totalFruit([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]), 4, 'Test 51');
test(totalFruit([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 2, 'Test 52');
test(totalFruit([1,2,3,3,3,2,1,1,1,2,3,3,3,1,2,1]), 5, 'Test 53');
test(totalFruit([1,2,1,1,2,1,2,2,2,2,1,1,1,2]), 14, 'Test 54');
test(totalFruit([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 18, 'Test 55');
test(totalFruit([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 15, 'Test 56');
test(totalFruit([0,1,1,0,1,2,2,1,0,0]), 5, 'Test 57');
test(totalFruit([1,1,1,2,2,3,3,3,3,2,2,1,1]), 8, 'Test 58');
test(totalFruit([1,1,2,2,3,3,2,2,1,1]), 6, 'Test 59');
test(totalFruit([5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,6,6,6,6,6]), 15, 'Test 60');
test(totalFruit([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,3,2,2,2,2,1,1,1,1]), 16, 'Test 61');
test(totalFruit([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 46, 'Test 62');
test(totalFruit([1,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1]), 3, 'Test 63');
test(totalFruit([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), 2, 'Test 64');
test(totalFruit([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 20, 'Test 65');
test(totalFruit([1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2]), 30, 'Test 66');
test(totalFruit([1,2,3,1,2,3,1,2,3,1,2,3]), 2, 'Test 67');
test(totalFruit([1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1,2]), 18, 'Test 68');
test(totalFruit([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 16, 'Test 69');
test(totalFruit([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4]), 8, 'Test 70');
test(totalFruit([1,2,2,1,2,2,1,2,2,1,2,2]), 12, 'Test 71');
test(totalFruit([1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 62, 'Test 72');
test(totalFruit([1,2,1,2,1,2,3,3,3,3,3,3,2,2,2,1,1]), 10, 'Test 73');
test(totalFruit([1,1,1,1,1,1,1,1,1,1]), 10, 'Test 74');
test(totalFruit([1,2,1,2,1,2,1,2,1,2,1,2]), 12, 'Test 75');
test(totalFruit([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 2, 'Test 76');
test(totalFruit([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 4, 'Test 77');
test(totalFruit([1,1,1,2,2,2,2,2,1,1,1,1,1,2,2,2,2,1,1,1,1,1,2,2]), 24, 'Test 78');
test(totalFruit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 2, 'Test 79');
test(totalFruit([5,4,3,2,1,0,1,2,3,4,5]), 3, 'Test 80');
test(totalFruit([0,0,1,1,2,2,3,3,4,4,5,5]), 4, 'Test 81');
test(totalFruit([1,2,2,3,3,3,2,2,2,1,1,1,2,2,2,3,3,3,1,1,1]), 9, 'Test 82');
test(totalFruit([1,2,1,2,1,2,1,2,1,2]), 10, 'Test 83');
test(totalFruit([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), 31, 'Test 84');
test(totalFruit([1,2,2,3,3,3,2,1,1,1,1,1]), 6, 'Test 85');
test(totalFruit([1,1,2,2,3,3,1,1,2,2,3,3]), 4, 'Test 86');
test(totalFruit([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 26, 'Test 87');
test(totalFruit([3,3,3,1,2,2,1,1,1,2,2,2]), 9, 'Test 88');
test(totalFruit([0,0,0,1,1,1,2,2,2,0,0,0,1,1,1]), 6, 'Test 89');
test(totalFruit([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 2, 'Test 90');
test(totalFruit([1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1]), 3, 'Test 91');
test(totalFruit([1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2,1]), 3, 'Test 92');
test(totalFruit([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]), 71, 'Test 93');
test(totalFruit([1,1,2,2,3,3,2,2,1,1,2,2,3,3]), 6, 'Test 94');
test(totalFruit([1,2,1,3,2,1,2,1,2]), 5, 'Test 95');
test(totalFruit([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 2, 'Test 96');
test(totalFruit([0,0,1,1,0,0,1,1,0,0,1,1]), 12, 'Test 97');
test(totalFruit([1,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3]), 4, 'Test 98');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

