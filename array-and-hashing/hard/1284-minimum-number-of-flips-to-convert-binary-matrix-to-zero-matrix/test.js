// Test: 1284. Minimum Number Of Flips To Convert Binary Matrix To Zero Matrix
// 65 test cases from LeetCodeDataset
// Run: node test.js

const { minFlips } = require("./solution");

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

console.log("\n1284. Minimum Number Of Flips To Convert Binary Matrix To Zero Matrix\n");

test(minFlips([[0,0],[0,1]]), 3, 'Test 1');
test(minFlips([[1,1,1],[1,1,1],[1,1,1]]), 5, 'Test 2');
test(minFlips([[1,1],[1,1]]), 4, 'Test 3');
test(minFlips([[0]]), 0, 'Test 4');
test(minFlips([[1,1,0],[0,0,0],[0,0,1]]), 6, 'Test 5');
test(minFlips([[0,1,0],[1,0,1],[0,1,0]]), 4, 'Test 6');
test(minFlips([[1,0,0],[1,0,0]]), -1, 'Test 7');
test(minFlips([[1,1,0,0],[1,1,0,0],[0,0,1,1],[0,0,1,1]]), -1, 'Test 8');
test(minFlips([[1,0,1,1],[0,1,0,0],[1,0,1,0],[1,0,0,1]]), -1, 'Test 9');
test(minFlips([[1,1,0,0],[0,1,1,1],[1,0,1,0],[0,1,0,1]]), -1, 'Test 10');
test(minFlips([[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1]]), Execution timed out, 'Test 11');
test(minFlips([[1,1,0,1],[1,0,1,0],[0,1,0,1],[1,0,1,0]]), -1, 'Test 12');
test(minFlips([[1,1,0,0,1],[1,1,0,0,1],[0,0,1,1,0],[0,0,1,1,0],[1,1,0,0,1]]), Execution timed out, 'Test 13');
test(minFlips([[1,0,1,1],[0,1,0,0],[1,0,1,1],[0,0,0,1]]), -1, 'Test 14');
test(minFlips([[1,1,1,1],[1,0,0,1],[1,0,0,1],[1,1,1,1]]), 4, 'Test 15');
test(minFlips([[0,1,1],[1,1,0],[1,0,1]]), 8, 'Test 16');
test(minFlips([[1,1,1,0],[0,0,1,1],[1,0,0,1],[0,1,1,0]]), -1, 'Test 17');
test(minFlips([[1,1,0,1],[0,0,0,1],[1,0,1,1],[0,1,1,0]]), -1, 'Test 18');
test(minFlips([[0,0,1,0],[0,1,0,0],[1,0,0,1],[0,0,1,0]]), -1, 'Test 19');
test(minFlips([[1,1,1,0],[1,0,0,1],[0,1,1,0],[0,0,1,1]]), -1, 'Test 20');
test(minFlips([[0,1,1,0],[1,0,0,1],[1,0,0,1],[0,1,1,0]]), 4, 'Test 21');
test(minFlips([[1,0,0,1],[0,1,1,0],[0,1,1,0],[1,0,0,1]]), 4, 'Test 22');
test(minFlips([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]), 0, 'Test 23');
test(minFlips([[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]), 6, 'Test 24');
test(minFlips([[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]]), Execution timed out, 'Test 25');
test(minFlips([[0,1,0,1],[1,0,1,0],[0,1,0,1],[1,0,1,0]]), -1, 'Test 26');
test(minFlips([[1,0,1],[0,1,0],[1,0,1],[0,1,0]]), 7, 'Test 27');
test(minFlips([[1,0,1],[0,1,0],[1,0,1]]), 9, 'Test 28');
test(minFlips([[1,1,1],[0,1,0],[1,1,1]]), 3, 'Test 29');
test(minFlips([[0,1,0],[1,1,1],[0,1,0]]), 1, 'Test 30');
test(minFlips([[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]]), Execution timed out, 'Test 31');
test(minFlips([[0,1,1],[1,0,1],[1,1,0]]), 2, 'Test 32');
test(minFlips([[1,1,1,0,0],[0,0,1,1,1],[1,0,0,1,0],[0,1,0,0,1],[1,0,1,1,0]]), Execution timed out, 'Test 33');
test(minFlips([[1,1,0],[1,0,1],[0,1,1]]), 2, 'Test 34');
test(minFlips([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]), 4, 'Test 35');
test(minFlips([[1,1,1],[1,1,0],[1,0,1]]), 5, 'Test 36');
test(minFlips([[1,1,1],[1,1,1],[1,0,1],[1,1,1]]), 8, 'Test 37');
test(minFlips([[1,1,0,1],[1,0,1,0],[0,1,0,1],[1,0,1,1]]), 6, 'Test 38');
test(minFlips([[1,1,1],[1,0,1],[1,1,1]]), 8, 'Test 39');
test(minFlips([[0,0,0,0,0],[0,1,1,1,0],[0,1,1,1,0],[0,1,1,1,0],[0,0,0,0,0]]), Execution timed out, 'Test 40');
test(minFlips([[1,1,1,0,0],[0,0,0,1,1],[1,1,1,0,0],[0,0,0,1,1],[1,1,1,0,0]]), Execution timed out, 'Test 41');
test(minFlips([[0,0,0,0],[0,0,0,0],[0,0,0,0]]), 0, 'Test 42');
test(minFlips([[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]), -1, 'Test 43');
test(minFlips([[0,0,1,1],[1,1,0,0],[1,0,1,0],[0,1,0,1]]), 5, 'Test 44');
test(minFlips([[1,1,0,0],[0,0,1,1],[1,1,0,0],[0,0,1,1]]), -1, 'Test 45');
test(minFlips([[1,1,1],[1,0,1],[1,1,1],[1,0,1]]), 9, 'Test 46');
test(minFlips([[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]]), Execution timed out, 'Test 47');
test(minFlips([[0,0,1,1],[0,0,1,1],[1,1,0,0],[1,1,0,0]]), -1, 'Test 48');
test(minFlips([[0,0,1,1],[0,1,0,1],[1,0,1,0],[1,1,0,0]]), -1, 'Test 49');
test(minFlips([[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]), Execution timed out, 'Test 50');
test(minFlips([[0,1,1,1,0],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[0,1,1,1,0]]), 5, 'Test 51');
test(minFlips([[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]]), 7, 'Test 52');
test(minFlips([[1,0,0],[0,1,0],[0,0,1]]), 3, 'Test 53');
test(minFlips([[0,0,1,1],[1,1,0,0],[0,0,1,1],[1,1,0,0]]), -1, 'Test 54');
test(minFlips([[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]]), Execution timed out, 'Test 55');
test(minFlips([[1,0,1,0],[0,1,0,1],[1,0,1,0],[0,1,0,1]]), -1, 'Test 56');
test(minFlips([[0,0,0],[0,1,0],[0,0,0]]), 5, 'Test 57');
test(minFlips([[1,0,0,0,1],[0,1,1,1,0],[0,1,0,1,0],[0,1,1,1,0],[1,0,0,0,1]]), Execution timed out, 'Test 58');
test(minFlips([[1,0,1,1],[0,1,0,0],[1,0,1,1],[0,0,0,0]]), -1, 'Test 59');
test(minFlips([[1,1,1,0],[0,0,0,1],[1,0,1,0],[0,1,0,1]]), -1, 'Test 60');
test(minFlips([[1,1,0],[1,1,0],[0,0,0]]), 6, 'Test 61');
test(minFlips([[1,0,1,0,1,0],[0,1,0,1,0,1],[1,0,1,0,1,0],[0,1,0,1,0,1],[1,0,1,0,1,0]]), Execution timed out, 'Test 62');
test(minFlips([[1,1,1],[0,0,0],[1,1,1]]), 2, 'Test 63');
test(minFlips([[1,1,1,0],[0,1,0,1],[1,0,0,1],[0,1,1,0]]), -1, 'Test 64');
test(minFlips([[0,0,1],[0,1,0],[1,0,0]]), 3, 'Test 65');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

