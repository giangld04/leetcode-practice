// Test: 85. Maximal Rectangle
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { maximalRectangle } = require("./solution");

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

console.log("\n85. Maximal Rectangle\n");

test(maximalRectangle([["1"]]), 1, 'Test 1');
test(maximalRectangle([["0","1","0","1"],["1","0","1","0"],["0","1","0","1"]]), 1, 'Test 2');
test(maximalRectangle([["1","1"],["1","1"]]), 4, 'Test 3');
test(maximalRectangle([["0"]]), 0, 'Test 4');
test(maximalRectangle([["1","1","0","0","1"],["1","1","1","1","1"],["1","1","1","1","1"],["0","0","1","1","1"]]), 10, 'Test 5');
test(maximalRectangle([["0","0","0"],["0","0","0"]]), 0, 'Test 6');
test(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]), 6, 'Test 7');
test(maximalRectangle([["1","1","1","1"],["1","1","1","1"],["1","1","1","1"],["1","1","1","1"]]), 16, 'Test 8');
test(maximalRectangle([["1","0"],["0","1"]]), 1, 'Test 9');
test(maximalRectangle([["1","0","1"],["0","0","1"],["1","0","1"]]), 3, 'Test 10');
test(maximalRectangle([["1","1","1"],["1","1","1"],["1","1","1"]]), 9, 'Test 11');
test(maximalRectangle([["0","0"],["0","0"]]), 0, 'Test 12');
test(maximalRectangle([["1","1","0","1"],["1","1","0","1"],["1","1","1","1"]]), 6, 'Test 13');
test(maximalRectangle([["1","0","1","0","1"],["0","1","0","1","0"],["1","0","1","0","1"],["0","1","0","1","0"]]), 1, 'Test 14');
test(maximalRectangle([["1","1","1","1"],["1","1","1","1"],["1","1","0","0"],["1","1","0","0"]]), 8, 'Test 15');
test(maximalRectangle([["0","1","1","0"],["1","1","1","1"],["1","1","1","1"],["0","1","1","0"]]), 8, 'Test 16');
test(maximalRectangle([["1","0","1","0","1"],["1","1","1","1","1"],["1","0","0","1","0"],["1","1","1","1","1"]]), 5, 'Test 17');
test(maximalRectangle([["1","0","1","0","1","1"],["1","0","1","1","1","1"],["1","1","1","1","1","1"],["1","0","0","1","0","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 18');
test(maximalRectangle([["0","1","0","1","0"],["1","0","1","0","1"],["0","1","0","1","0"],["1","0","1","0","1"]]), 1, 'Test 19');
test(maximalRectangle([["1","1","0","0"],["1","1","0","0"],["0","0","1","1"],["0","0","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 20');
test(maximalRectangle([["1","0","0","1"],["1","0","0","1"],["1","1","1","1"],["1","1","1","1"]]), 8, 'Test 21');
test(maximalRectangle([["1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1"],["0","0","0","0","0","0","0","0"],["1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1"]]), 16, 'Test 22');
test(maximalRectangle([["1","1","1","1","1","1","1","1","1","1"],["0","0","0","0","0","0","0","0","0","0"],["1","1","1","1","1","1","1","1","1","1"]]), 10, 'Test 23');
test(maximalRectangle([["1","1","1","1","1"],["1","1","1","0","1"],["1","0","0","1","1"],["1","1","1","1","1"],["1","1","1","1","1"]]), 10, 'Test 24');
test(maximalRectangle([["0","1","1","1","0"],["0","1","1","1","0"],["0","1","1","1","0"],["0","1","1","1","0"],["0","1","1","1","0"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 25');
test(maximalRectangle([["1","1","0","0","1"],["1","1","0","0","1"],["0","0","1","1","0"],["0","0","1","1","0"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 26');
test(maximalRectangle([["1","1","1","1","1","1"],["1","1","1","1","1","1"],["1","1","1","1","1","1"],["1","1","1","1","1","1"],["1","1","1","1","1","1"]]), 30, 'Test 27');
test(maximalRectangle([["0","1","0","1"],["1","0","1","0"],["0","1","0","1"],["1","0","1","0"]]), 1, 'Test 28');
test(maximalRectangle([["1","1","1","1","1"],["1","1","0","1","1"],["1","1","1","1","1"],["1","0","1","0","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 29');
test(maximalRectangle([["1","1","1","1","1"],["1","1","0","0","1"],["1","1","0","0","1"],["1","1","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 30');
test(maximalRectangle([["1","1","0","1"],["1","1","1","1"],["0","1","1","0"],["1","1","1","1"],["1","0","1","0"]]), 6, 'Test 31');
test(maximalRectangle([["1","1","1","1","1"],["1","1","1","1","1"],["1","1","1","1","1"],["1","1","1","1","1"],["1","1","1","1","1"]]), 25, 'Test 32');
test(maximalRectangle([["1","1","0","0"],["1","1","0","0"],["0","0","1","1"],["0","0","1","1"]]), 4, 'Test 33');
test(maximalRectangle([["1","1","1","1","1","1","1","1","1"],["1","0","0","0","0","0","0","0","1"],["1","0","0","0","0","0","0","0","1"],["1","1","1","1","1","1","1","1","1"]]), 9, 'Test 34');
test(maximalRectangle([["1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","0","0","0","0","1","1"],["1","1","1","1","0","0","0","0","1","1"],["1","1","1","1","1","1","1","1","1","1"]]), 16, 'Test 35');
test(maximalRectangle([["1","1","1","1","1"],["1","1","1","1","1"],["0","0","0","0","0"],["1","1","1","1","1"]]), 10, 'Test 36');
test(maximalRectangle([["1","0","1","0","1"],["1","0","1","0","1"],["1","0","1","0","1"],["1","0","1","0","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 37');
test(maximalRectangle([["1","0","1","0","1","0","1","0"],["0","1","0","1","0","1","0","1"],["1","0","1","0","1","0","1","0"],["0","1","0","1","0","1","0","1"]]), 1, 'Test 38');
test(maximalRectangle([["1","1","0","0","1"],["1","1","1","1","1"],["0","1","0","1","0"],["1","1","1","1","1"]]), 5, 'Test 39');
test(maximalRectangle([["1","0","1","0","1"],["0","1","0","1","0"],["1","0","1","0","1"],["0","1","0","1","0"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 40');
test(maximalRectangle([["1","0","1","1","1"],["1","1","1","1","1"],["1","1","1","1","1"],["1","0","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 41');
test(maximalRectangle([["1","1","1","1","1","1"],["1","0","0","0","0","1"],["1","0","1","1","0","1"],["1","0","1","1","0","1"],["1","0","0","0","0","1"],["1","1","1","1","1","1"]]), 6, 'Test 42');
test(maximalRectangle([["1","0","1","0","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1"],["1","0","0","0","1","0","0","0","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 43');
test(maximalRectangle([["0","0","0","0","0","0"],["0","1","1","1","1","0"],["0","1","1","1","1","0"],["0","1","1","1","1","0"],["0","0","0","0","0","0"]]), 12, 'Test 44');
test(maximalRectangle([["1","1","1","1","1"],["1","1","1","1","1"],["1","1","1","0","1"],["1","1","1","1","1"]]), 12, 'Test 45');
test(maximalRectangle([["1","1","0","0","1","1"],["1","1","0","0","1","1"],["0","0","1","1","1","1"],["0","0","1","1","1","1"],["1","1","0","0","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 46');
test(maximalRectangle([["1","1","1","1","1"],["1","0","0","0","1"],["1","0","0","0","1"],["1","1","1","1","1"],["1","0","0","0","1"]]), 5, 'Test 47');
test(maximalRectangle([["0","0","0","0","0","0"],["0","0","1","1","0","0"],["0","1","1","1","1","0"],["0","1","1","1","1","0"],["0","0","1","1","0","0"],["0","0","0","0","0","0"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 48');
test(maximalRectangle([["1","0","0","1","1","0","1"],["1","0","0","1","1","0","1"],["1","1","1","1","1","1","1"],["1","0","0","1","1","0","1"],["1","1","1","1","1","1","1"]]), 10, 'Test 49');
test(maximalRectangle([["1","1","1","0","0"],["1","1","1","0","0"],["1","1","1","1","1"],["0","0","0","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 50');
test(maximalRectangle([["1","0","1","0","1","0","1","0","1","0"],["0","1","0","1","0","1","0","1","0","1"],["1","0","1","0","1","0","1","0","1","0"],["0","1","0","1","0","1","0","1","0","1"],["1","0","1","0","1","0","1","0","1","0"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 51');
test(maximalRectangle([["1","1","1","1","1"],["1","1","1","1","1"],["1","1","0","0","1"],["1","1","0","0","1"],["1","1","1","1","1"],["1","1","1","1","1"]]), 12, 'Test 52');
test(maximalRectangle([["1","0","1","0","1"],["1","1","1","1","1"],["0","1","1","0","1"],["1","1","1","1","1"],["1","0","1","0","1"]]), 6, 'Test 53');
test(maximalRectangle([["1","0","0","0","1"],["1","1","1","1","1"],["1","1","1","1","1"],["1","0","0","0","1"]]), 10, 'Test 54');
test(maximalRectangle([["1","1","1","1"],["1","1","0","1"],["1","1","1","1"],["0","1","1","1"]]), 6, 'Test 55');
test(maximalRectangle([["1","1","1","1","0"],["1","1","1","1","0"],["1","1","1","1","1"],["0","0","0","0","0"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 56');
test(maximalRectangle([["0","1","1","1","0"],["1","1","1","1","1"],["1","1","1","1","1"],["0","1","1","1","0"]]), 12, 'Test 57');
test(maximalRectangle([["1","1","1","1","1"],["1","1","1","1","1"],["1","1","1","1","1"],["1","1","1","1","1"]]), 20, 'Test 58');
test(maximalRectangle([["1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1"],["0","0","0","0","0","0","0","0","0","0"],["1","1","1","1","1","1","1","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 59');
test(maximalRectangle([["1","1","1","1","1"],["1","0","0","0","1"],["1","0","0","0","1"],["1","1","1","1","1"]]), 5, 'Test 60');
test(maximalRectangle([["1","1","1"],["1","1","1"],["1","1","1"],["0","0","0"],["1","1","1"],["1","1","1"],["1","1","1"]]), 9, 'Test 61');
test(maximalRectangle([["0","0","0","1","0"],["0","0","1","1","1"],["1","1","1","1","1"],["0","0","0","1","0"]]), 6, 'Test 62');
test(maximalRectangle([["1","1","1","1","1","1"],["1","1","1","1","1","1"],["0","0","0","0","0","0"],["1","1","1","1","1","1"],["1","1","1","1","1","1"],["1","1","1","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 63');
test(maximalRectangle([["1","0","1","0","1"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 64');
test(maximalRectangle([["1","0","0","1","0"],["1","1","1","1","1"],["0","1","1","1","0"],["1","1","1","1","1"],["1","0","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 65');
test(maximalRectangle([["1","1","1","1","1","1","1"],["1","1","1","1","1","1","1"],["1","1","1","1","1","1","1"],["1","1","1","1","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 66');
test(maximalRectangle([["1","1","1","1","1"],["1","1","1","1","1"],["1","1","1","1","1"],["1","1","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 67');
test(maximalRectangle([["1","1","0","1","1","1","1"],["1","1","0","1","1","1","1"],["1","1","1","1","1","1","1"],["1","0","0","1","0","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 68');
test(maximalRectangle([["1","0","1","0","1","0","1"],["1","1","1","1","1","1","1"],["1","0","1","0","1","0","1"],["1","1","1","1","1","1","1"]]), 7, 'Test 69');
test(maximalRectangle([["1","1","0","1","1"],["1","1","0","1","1"],["0","0","0","0","0"],["1","1","0","1","1"],["1","1","0","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 70');
test(maximalRectangle([["0","1","0","1","0"],["1","0","1","0","1"],["0","1","0","1","0"],["1","0","1","0","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 71');
test(maximalRectangle([["1","1","1","1"],["1","1","1","1"],["0","0","0","0"],["1","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 72');
test(maximalRectangle([["1","1","1","1"],["1","1","1","1"],["1","1","1","1"],["0","0","0","0"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 73');
test(maximalRectangle([["1","1","0","0","1"],["1","1","0","0","1"],["1","1","1","1","1"],["1","0","1","0","1"]]), 6, 'Test 74');
test(maximalRectangle([["0","1","0","1","0"],["1","1","1","1","1"],["0","1","0","1","0"],["1","1","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 75');
test(maximalRectangle([["1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 76');
test(maximalRectangle([["1","0","0","1","0"],["1","1","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]), 10, 'Test 77');
test(maximalRectangle([["0","1","1","0"],["1","1","1","1"],["0","1","1","0"],["1","1","1","1"]]), 8, 'Test 78');
test(maximalRectangle([["1","1","1","1","1","1","1"],["1","0","0","0","0","0","1"],["1","0","1","1","1","0","1"],["1","0","1","1","1","0","1"],["1","0","0","0","0","0","1"],["1","1","1","1","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 79');
test(maximalRectangle([["1","1","0","1","0","1"],["1","1","1","1","1","1"],["0","1","1","1","1","0"],["1","1","1","1","1","1"],["1","1","0","1","0","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 80');
test(maximalRectangle([["1","1","1","1","1","1","1"],["1","1","1","1","1","1","1"],["1","1","1","1","1","1","1"],["1","1","0","0","1","1","1"]]), 21, 'Test 81');
test(maximalRectangle([["1","1","1","0"],["1","1","1","0"],["1","1","1","1"],["0","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 82');
test(maximalRectangle([["1","1","1","1","1"],["1","0","0","0","1"],["1","0","1","0","1"],["1","0","0","0","1"],["1","1","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 83');
test(maximalRectangle([["1","1","1","1","1","1"],["1","1","0","0","1","1"],["1","1","0","0","1","1"],["1","1","1","1","1","1"],["1","1","0","0","1","1"],["1","1","0","0","1","1"]]), 12, 'Test 84');
test(maximalRectangle([["1","0","1","0","1","1"],["1","0","1","1","1","1"],["1","1","1","1","1","1"],["0","0","1","1","0","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 85');
test(maximalRectangle([["1","0","1","1"],["1","1","1","1"],["0","1","1","1"],["1","0","1","1"]]), 8, 'Test 86');
test(maximalRectangle([["1","0","0","1"],["0","0","0","0"],["1","0","0","1"],["1","1","1","1"]]), 4, 'Test 87');
test(maximalRectangle([["1","1","1","1","1"],["1","1","1","1","1"],["0","0","1","1","1"],["1","1","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 88');
test(maximalRectangle([["1","0","1","1","1"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 89');
test(maximalRectangle([["1","0","1","0","1","0","1","0","1","0"],["0","1","0","1","0","1","0","1","0","1"],["1","0","1","0","1","0","1","0","1","0"],["0","1","0","1","0","1","0","1","0","1"]]), 1, 'Test 90');
test(maximalRectangle([["1","1","1","0","0"],["1","1","1","1","1"],["1","1","1","0","0"],["0","0","0","0","0"]]), 9, 'Test 91');
test(maximalRectangle([["1","0","1","0","0","0"],["1","0","1","1","1","1"],["1","1","1","1","1","1"],["1","0","0","1","0","0"],["1","1","1","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 92');
test(maximalRectangle([["1","1","1","1","1"],["0","0","0","0","0"],["1","1","1","1","1"],["1","1","1","1","1"],["1","1","1","1","1"]]), 15, 'Test 93');
test(maximalRectangle([["1","1","1","1"],["1","1","0","1"],["1","1","1","1"],["1","1","1","1"]]), 8, 'Test 94');
test(maximalRectangle([["1","0","1","0","1","0"],["1","0","1","0","1","0"],["1","1","1","1","1","1"],["0","0","0","0","0","0"]]), 6, 'Test 95');
test(maximalRectangle([["0","1","1","1","0","0","1"],["0","1","1","1","1","1","1"],["1","1","1","0","1","1","1"],["1","1","1","1","1","1","1"],["0","1","1","1","1","1","0"]]), 10, 'Test 96');
test(maximalRectangle([["1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1"],["1","1","0","0","0","0","1","1"],["1","1","0","0","0","0","1","1"],["1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1"]]), 16, 'Test 97');
test(maximalRectangle([["1","0","1","1","1"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"],["1","1","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 98');
test(maximalRectangle([["1","0","1","0","1","1"],["1","0","1","1","1","1"],["1","0","1","1","1","1"],["1","0","0","0","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 99');
test(maximalRectangle([["1","1","1","1","1"],["0","0","1","1","1"],["0","0","1","1","1"],["0","0","1","1","1"]]), 12, 'Test 100');
test(maximalRectangle([["1","1","1","1"],["1","1","0","1"],["1","1","1","1"],["0","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 101');
test(maximalRectangle([["1","1","1","0"],["1","1","1","1"],["1","1","1","0"],["1","1","0","0"],["1","1","0","0"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 102');
test(maximalRectangle([["1","1","1","1","0"],["1","1","1","1","0"],["0","0","0","0","0"],["1","1","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 103');
test(maximalRectangle([["1","1","1","1","1","1","1","1","1"],["0","0","0","0","0","0","0","0","0"],["1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1"],["0","0","0","0","0","0","0","0","0"],["1","1","1","1","1","1","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 104');
test(maximalRectangle([["1","1","1","1","0"],["1","1","1","1","0"],["1","1","1","1","0"],["0","0","0","0","0"],["1","1","1","1","0"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 105');
test(maximalRectangle([["1","1","1","1","1","1","1"],["0","0","0","0","0","0","0"],["1","1","1","1","1","1","1"],["1","1","1","1","1","1","1"],["0","0","0","0","0","0","0"],["1","1","1","1","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 106');
test(maximalRectangle([["1","0","1","0","1","0","1"],["0","1","0","1","0","1","0"],["1","0","1","0","1","0","1"],["0","1","0","1","0","1","0"]]), 1, 'Test 107');
test(maximalRectangle([["1","0","0","0","1"],["1","0","1","0","1"],["1","0","1","0","1"],["1","0","0","0","1"]]), 4, 'Test 108');
test(maximalRectangle([["1","1","1","1","1","1","1"],["0","0","0","0","0","0","0"],["1","1","1","1","1","1","1"],["0","0","0","0","0","0","0"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 109');
test(maximalRectangle([["1","1","1","1","1"],["1","0","0","0","1"],["1","0","0","0","1"],["1","1","1","1","1"]]), 5, 'Test 110');
test(maximalRectangle([["1","1","1","1"],["1","1","1","1"],["1","1","1","1"],["1","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 111');
test(maximalRectangle([["0","0","0","0"],["1","1","1","1"],["1","1","1","1"],["0","0","0","0"]]), 8, 'Test 112');
test(maximalRectangle([["1","1","1","0","0","1"],["1","1","1","1","1","1"],["1","0","1","1","0","1"],["1","1","1","1","1","1"],["1","1","0","1","1","1"],["0","0","1","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 113');
test(maximalRectangle([["1","1","1","1","1","1","1","1"],["0","0","0","0","0","0","0","0"],["1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1"],["0","0","0","0","0","0","0","0"],["1","1","1","1","1","1","1","1"]]"), Error: Solution.maximalRectangle[] missing 1 required positional argument: 'matrix', 'Test 114');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

// Auto-mark DONE when all tests pass
if (!failed) {
  const path = require("path");
  const fs = require("fs");
  const dir = __dirname;
  const folder = path.basename(dir);
  if (!folder.startsWith("DONE-")) {
    const parent = path.dirname(dir);
    const newDir = path.join(parent, "DONE-" + folder);
    fs.renameSync(dir, newDir);
    const readme = path.join(newDir, "README.md");
    if (fs.existsSync(readme)) {
      let c = fs.readFileSync(readme, "utf-8");
      if (!c.includes("<!-- SOLVED -->")) {
        c = c.replace(/^(# .+)$/m, "$1 ✅\n<!-- SOLVED -->");
        fs.writeFileSync(readme, c);
      }
    }
    console.log("✅ DONE → " + "DONE-" + folder);
  }
}
