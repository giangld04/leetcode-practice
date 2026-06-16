// Test: 2011. Final Value Of Variable After Performing Operations
// 88 test cases from LeetCodeDataset
// Run: node test.js

const { finalValueAfterOperations } = require("./solution");

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

console.log("\n2011. Final Value Of Variable After Performing Operations\n");

test(finalValueAfterOperations(["X++","++X","--X","X--"]), 0, 'Test 1');
test(finalValueAfterOperations(["X++","X++","X++","X++","X++"]), 5, 'Test 2');
test(finalValueAfterOperations(["--X","--X","X--","X--"]), -4, 'Test 3');
test(finalValueAfterOperations(["++X","++X","++X","++X"]), 4, 'Test 4');
test(finalValueAfterOperations(["X++","X++","X++","X++"]), 4, 'Test 5');
test(finalValueAfterOperations(["--X","X++","X++"]), 1, 'Test 6');
test(finalValueAfterOperations(["--X","--X","--X","--X"]), -4, 'Test 7');
test(finalValueAfterOperations(["--X","--X","--X","--X","--X"]), -5, 'Test 8');
test(finalValueAfterOperations(["--X","--X","X++","++X"]), 0, 'Test 9');
test(finalValueAfterOperations(["++X","++X","X++"]), 3, 'Test 10');
test(finalValueAfterOperations(["--X","--X","X++","++X","--X"]), -1, 'Test 11');
test(finalValueAfterOperations(["++X","X--","--X","X++"]), 0, 'Test 12');
test(finalValueAfterOperations(["X++","X--","++X","--X"]), 0, 'Test 13');
test(finalValueAfterOperations(["++X", "++X", "++X", "++X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X"]), -12, 'Test 14');
test(finalValueAfterOperations(["X++","X++","X++","--X","--X","--X","--X","--X","X++","X++","X++"]), 1, 'Test 15');
test(finalValueAfterOperations(["--X","--X","X++","X++","X--","X--","X++","++X","--X","X++","--X","++X","X--","--X","X++","X++"]), 0, 'Test 16');
test(finalValueAfterOperations(["X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","--X","--X","--X","--X","--X","--X","--X","--X","--X","--X"]), 0, 'Test 17');
test(finalValueAfterOperations(["++X","++X","++X","++X","X--","X--","X--","X--","X--","X--","X--","X--","X--","X--"]), -6, 'Test 18');
test(finalValueAfterOperations(["--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++"]), 0, 'Test 19');
test(finalValueAfterOperations(["X--", "--X", "X--", "--X", "X--", "--X", "X--", "--X", "X--", "--X", "X--", "--X", "X--", "--X", "X--", "--X"]), -16, 'Test 20');
test(finalValueAfterOperations(["++X","--X","++X","--X","++X","--X"]), 0, 'Test 21');
test(finalValueAfterOperations(["++X", "X++", "--X", "X--", "++X", "X++", "--X", "X--", "++X", "X++", "--X", "X--"]), 0, 'Test 22');
test(finalValueAfterOperations(["X--", "--X", "X++", "++X", "--X", "X--", "--X", "++X", "X++"]), -1, 'Test 23');
test(finalValueAfterOperations(["++X", "X--", "--X", "X++", "++X", "X--", "--X", "X++"]), 0, 'Test 24');
test(finalValueAfterOperations(["X++","X++","--X","X++","X++","--X","--X","X++","--X","X++","--X","X++","X++","--X","--X","X++","X++","--X","--X"]), 1, 'Test 25');
test(finalValueAfterOperations(["--X","--X","X--","X++","++X","++X","X--","--X","++X","--X"]), -2, 'Test 26');
test(finalValueAfterOperations(["++X","X--","--X","X++","X--","++X","X--","--X","X++","++X"]), 0, 'Test 27');
test(finalValueAfterOperations(["++X","X++","--X","X--","++X","X++","--X","X--","++X","X++","--X","X--","++X","X++","--X","X--","++X","X++"]), 2, 'Test 28');
test(finalValueAfterOperations(["++X", "X--", "--X", "X++", "++X", "--X", "X++"]), 1, 'Test 29');
test(finalValueAfterOperations(["--X","--X","--X","--X","--X","--X","--X","--X","--X","--X","--X","--X","--X","--X","--X","++X","++X","++X","++X","++X","++X","++X","++X","++X","++X"]), -5, 'Test 30');
test(finalValueAfterOperations(["++X", "--X", "++X", "--X", "++X", "--X", "++X", "--X", "++X", "--X", "++X", "--X", "++X", "--X", "++X", "--X"]), 0, 'Test 31');
test(finalValueAfterOperations(["++X", "++X", "--X", "--X", "++X", "++X", "--X", "--X", "++X", "++X", "--X", "--X", "++X", "++X", "--X", "--X", "++X", "++X"]), 2, 'Test 32');
test(finalValueAfterOperations(["--X","--X","--X","--X","--X","--X","--X","--X","--X","--X","--X","--X"]), -12, 'Test 33');
test(finalValueAfterOperations(["X++", "++X", "X--", "--X", "X++", "++X", "X--", "--X", "X++", "++X", "X--", "--X", "X++", "++X", "X--", "--X"]), 0, 'Test 34');
test(finalValueAfterOperations(["++X","--X","++X","--X","++X","--X","++X","--X","++X","--X","++X","--X","++X","--X","++X","--X","++X","--X","++X","--X"]), 0, 'Test 35');
test(finalValueAfterOperations(["X++","--X","++X","X--","++X","X++","--X","--X","++X","X++"]), 2, 'Test 36');
test(finalValueAfterOperations(["++X", "++X", "++X", "++X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X"]), -4, 'Test 37');
test(finalValueAfterOperations(["X++","++X","X--","--X","X++","++X","X--","--X","X++","++X","X--","--X","X++","++X","X--","--X"]), 0, 'Test 38');
test(finalValueAfterOperations(["--X","X++","++X","--X","X++","--X","X--","X++","--X","++X"]), 0, 'Test 39');
test(finalValueAfterOperations(["++X","++X","++X","--X","--X","--X","++X","X++","--X"]), 1, 'Test 40');
test(finalValueAfterOperations(["++X","X--","--X","X++","++X","X--","--X","X++","++X","X--","--X","X++","++X","X--","--X","X++","++X","X--","--X","X++","++X","X--","--X","X++","++X","X--","--X","X++","++X","X--","--X","X++","++X","X--","--X","X++","++X","X--","--X","X++","++X","X--","--X","X++","++X","X--","--X","X++","++X","X--","--X","X++","++X","X--","--X","X++","++X","X--","--X"]), -1, 'Test 41');
test(finalValueAfterOperations(["--X","--X","X++","X--","X--","X--","X--","X--","X++","X++","X++","X++","X++","X++"]), 0, 'Test 42');
test(finalValueAfterOperations(["++X", "--X", "X++", "++X", "--X", "X--", "++X", "X++"]), 2, 'Test 43');
test(finalValueAfterOperations(["--X", "X--", "--X", "X--", "--X", "X--", "++X", "X++", "++X", "X++", "++X", "X++", "++X", "X++"]), 2, 'Test 44');
test(finalValueAfterOperations(["X++","--X","X++","--X","X++","--X","X++","--X","X++","--X"]), 0, 'Test 45');
test(finalValueAfterOperations(["--X","++X","--X","++X","--X","++X","--X","++X"]), 0, 'Test 46');
test(finalValueAfterOperations(["X++","X++","X++","X++","X--","X--","X--","X--","X++","X++","X--","X--"]), 0, 'Test 47');
test(finalValueAfterOperations(["X--", "--X", "++X", "X++", "X--", "--X", "++X", "X++", "X--", "--X", "++X", "X++", "X--", "--X", "++X", "X++", "X--", "--X", "++X", "X++"]), 0, 'Test 48');
test(finalValueAfterOperations(["X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X"]), -4, 'Test 49');
test(finalValueAfterOperations(["X++","X++","--X","--X","X++","--X","X++","--X","X--","X++","--X","X++","--X","X--","X++","--X","X++","--X","X--","X++","--X","X++","--X","X--","X++","--X","X++","--X","X--","X++","--X"]), -5, 'Test 50');
test(finalValueAfterOperations(["X++", "X++", "--X", "--X", "++X", "X--", "++X", "--X", "++X", "--X"]), 0, 'Test 51');
test(finalValueAfterOperations(["X++","X++","++X","--X","X--","X--","--X","++X","X--","--X"]), -2, 'Test 52');
test(finalValueAfterOperations(["X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++"]), 12, 'Test 53');
test(finalValueAfterOperations(["--X", "X--", "--X", "X++", "++X", "X--", "--X", "X++", "++X", "--X", "X++", "--X", "++X", "X--", "--X", "X++"]), -2, 'Test 54');
test(finalValueAfterOperations(["--X", "--X", "--X", "--X", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++"]), 4, 'Test 55');
test(finalValueAfterOperations(["--X", "X++", "++X", "X--", "--X", "X++", "++X", "X--", "--X", "X++", "++X", "X--", "--X", "X++", "++X", "X--", "--X"]), -1, 'Test 56');
test(finalValueAfterOperations(["X--","--X","++X","X++","X--","--X","++X","X++"]), 0, 'Test 57');
test(finalValueAfterOperations(["X++","X++","--X","--X","X++","X++","--X","--X","++X","X++","--X","--X","++X","X++"]), 2, 'Test 58');
test(finalValueAfterOperations(["--X","--X","--X","--X","--X","--X","++X","++X","++X","++X","++X","++X","X++","X++","X++","X++","X++","X++","X++","X++"]), 8, 'Test 59');
test(finalValueAfterOperations(["--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++"]), 0, 'Test 60');
test(finalValueAfterOperations(["X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++","X++"]), 57, 'Test 61');
test(finalValueAfterOperations(["X++","--X","++X","X--","++X","--X","X++","++X","--X","X--"]), 0, 'Test 62');
test(finalValueAfterOperations(["--X", "--X", "--X", "--X", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++"]), 37, 'Test 63');
test(finalValueAfterOperations(["X++", "X++", "--X", "--X", "X++", "X++", "--X", "--X", "X++", "X++", "--X", "--X", "X++", "X++", "--X", "--X", "X++", "X++"]), 2, 'Test 64');
test(finalValueAfterOperations(["X++","X++","--X","--X","X++","X++","--X","--X","X++","X++","--X","--X","X++","X++","--X","--X","X++","X++","--X","--X","X++","X++","--X","--X","X++","X++","--X","--X","X++","X++","--X","--X","X++","X++","--X","--X","X++","X++","--X","--X","X++","X++","--X","--X"]), 0, 'Test 65');
test(finalValueAfterOperations(["X++", "++X", "X--", "--X", "X++", "++X", "X--", "--X", "X++", "++X", "X--", "--X"]), 0, 'Test 66');
test(finalValueAfterOperations(["--X","--X","--X","X++","X++","X++","--X","--X","X++","X++","--X","--X","X++","X++","X--","X--","++X","++X"]), 0, 'Test 67');
test(finalValueAfterOperations(["X++", "X--", "++X", "--X", "X++", "X--", "++X", "--X", "X++", "X--", "++X", "--X", "X++", "X--", "++X", "--X", "X++", "X--", "++X", "--X"]), 0, 'Test 68');
test(finalValueAfterOperations(["X++","X--","++X","--X","X--","++X","X--","++X","X--","++X","X--","++X"]), 0, 'Test 69');
test(finalValueAfterOperations(["X++","--X","++X","--X","X++","--X","X--"]), -1, 'Test 70');
test(finalValueAfterOperations(["--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++"]), 0, 'Test 71');
test(finalValueAfterOperations(["X++","X++","X++","X++","X++","--X","--X","--X","--X","--X","--X","--X","--X","--X","X++","X++","X++","X++","X++","X++"]), 2, 'Test 72');
test(finalValueAfterOperations(["X--","X--","--X","--X","X++","X++","++X"]), -1, 'Test 73');
test(finalValueAfterOperations(["X++","X++","X++","--X","--X","--X","X++","X++","--X","--X","X++","X++","X++","--X","--X"]), 1, 'Test 74');
test(finalValueAfterOperations(["++X","++X","++X","X--","--X","X++","++X","X--","--X","X++"]), 2, 'Test 75');
test(finalValueAfterOperations(["--X","--X","--X","--X","--X","++X","++X","++X","++X","++X","X++","X++","X++"]), 3, 'Test 76');
test(finalValueAfterOperations(["++X","X++","--X","X--","++X","--X","X++","++X"]), 2, 'Test 77');
test(finalValueAfterOperations(["X++", "++X", "X--", "--X", "X++", "++X", "X--", "--X", "X++", "++X", "X--", "--X", "X++", "++X", "X--", "--X", "X++", "++X", "X--", "--X", "X++", "++X", "X--", "--X", "X++", "++X", "X--", "--X", "X++", "++X", "X--", "--X", "X++", "++X", "X--", "--X", "X++", "++X", "X--", "--X", "X++", "++X", "X--", "--X", "X++", "++X"]), 2, 'Test 78');
test(finalValueAfterOperations(["X++", "++X", "X++", "++X", "--X", "--X", "X--", "--X", "X++", "++X", "--X", "X--", "++X", "X++"]), 2, 'Test 79');
test(finalValueAfterOperations(["X++", "X++", "X++", "X++", "X++", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X"]), -4, 'Test 80');
test(finalValueAfterOperations(["X++", "X++", "--X", "--X", "X++", "X++", "X++", "--X", "--X", "--X"]), 0, 'Test 81');
test(finalValueAfterOperations(["X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "X++", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X", "--X"]), 0, 'Test 82');
test(finalValueAfterOperations(["X--","--X","X++","++X","X--","X--","--X","++X","X--","X--","X++","++X"]), -2, 'Test 83');
test(finalValueAfterOperations(["X++","X++","--X","--X","X++","X--","X++","--X","X++","X--","++X","--X"]), 0, 'Test 84');
test(finalValueAfterOperations(["++X","X--","++X","X--","++X","X--","++X","X--","++X","X--","++X","X--"]), 0, 'Test 85');
test(finalValueAfterOperations(["X++","--X","X++","--X","X++","--X","X++","--X","X++","--X","X++","--X"]), 0, 'Test 86');
test(finalValueAfterOperations(["--X", "X--", "++X", "X++", "--X", "X--", "++X", "X++", "--X", "X--", "++X", "X++"]), 0, 'Test 87');
test(finalValueAfterOperations(["++X","++X","++X","--X","X--","--X","X--","--X","++X","--X"]), -2, 'Test 88');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

