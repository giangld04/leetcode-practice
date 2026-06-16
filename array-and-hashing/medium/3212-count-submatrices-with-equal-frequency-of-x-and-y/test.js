// Test: 3212. Count Submatrices With Equal Frequency Of X And Y
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfSubmatrices } = require("./solution");

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

console.log("\n3212. Count Submatrices With Equal Frequency Of X And Y\n");

test(numberOfSubmatrices([["X","X","X"],["X","X","X"],["X","X","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 1');
test(numberOfSubmatrices([["X","Y","X"],["Y","X","Y"],["X","Y","X"]]), 5, 'Test 2');
test(numberOfSubmatrices([[".","."],[".","."]]), 0, 'Test 3');
test(numberOfSubmatrices([["X","Y","."],["Y",".","]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 4');
test(numberOfSubmatrices([["X","X"],["X","Y"]]), 0, 'Test 5');
test(numberOfSubmatrices([["X",".","Y"],[".","X","."],["Y",".","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 6');
test(numberOfSubmatrices([["X","X","Y","Y"],["Y","Y","X","X"]]), 5, 'Test 7');
test(numberOfSubmatrices([["X","X","X","X"],["X","Y","Y","X"],["X","Y","Y","X"],["X","X","X","X"]]), 0, 'Test 8');
test(numberOfSubmatrices([[".","."],[".","]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 9');
test(numberOfSubmatrices([["X","Y","X","Y"],["Y","X","Y","X"],["X","Y","X","Y"]]), 8, 'Test 10');
test(numberOfSubmatrices([["X",".","Y"],[".","X","Y"],["Y",".","X"]]), 4, 'Test 11');
test(numberOfSubmatrices([["X","Y","X"],["Y","X","Y"],["X","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 12');
test(numberOfSubmatrices([["X"],["Y"],["X"]]), 1, 'Test 13');
test(numberOfSubmatrices([["X","Y","."],["Y",".","."]]), 3, 'Test 14');
test(numberOfSubmatrices([["X","X"],["X","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 15');
test(numberOfSubmatrices([["X","Y"],["X","Y"],["X","Y"]]), 3, 'Test 16');
test(numberOfSubmatrices([["X","Y","X","Y"],["Y","X","Y","X"],["X","Y","X","Y"],["Y","X","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 17');
test(numberOfSubmatrices([["X","X","Y"],["Y","Y","X"],["X","Y","X"]]), 4, 'Test 18');
test(numberOfSubmatrices([["Y","Y","Y"],["Y","Y","Y"],["Y","Y","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 19');
test(numberOfSubmatrices([["X","X","Y","Y"],["Y","Y","X","X"],["X","X","Y","Y"]]), 6, 'Test 20');
test(numberOfSubmatrices([["X","X","X"],["X","X","X"],["X","X","X"]]), 0, 'Test 21');
test(numberOfSubmatrices([["X","Y"],["Y","X"]]), 3, 'Test 22');
test(numberOfSubmatrices([["X","X","X"],["Y","Y","Y"],[".",".","."]]), 6, 'Test 23');
test(numberOfSubmatrices([["X",".","Y"],[".","X","."],["Y",".","X"]]), 2, 'Test 24');
test(numberOfSubmatrices([["X","Y","."],[".","X","Y"],["Y","X","."]]), 5, 'Test 25');
test(numberOfSubmatrices([["X","Y","X"],["X","Y","X"],["X","Y","X"]]), 3, 'Test 26');
test(numberOfSubmatrices([["X","Y","X","X","Y","Y"],["Y","Y","X","Y","X","X"],["X","X","Y","Y","X","Y"],["X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X"],["X","Y","X","Y","X","Y"]]), 19, 'Test 27');
test(numberOfSubmatrices([["X","X","Y","Y"],["X","X","Y","Y"],["X","X","Y","Y"],["X","X","Y","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 28');
test(numberOfSubmatrices([["Y","Y","Y","Y","Y"],["Y","Y","Y","Y","Y"],["Y","Y","Y","Y","Y"],["Y","Y","Y","Y","Y"],["Y","Y","Y","Y","Y"]]), 0, 'Test 29');
test(numberOfSubmatrices([["X","Y","X"],["Y",".","X"],["X","Y","."]]), 2, 'Test 30');
test(numberOfSubmatrices([[".",".",".","X","Y"],[".","X","Y",".","."],[".","Y","X",".","."],["X",".",".","Y","."],["Y",".",".",".","X"]]), 12, 'Test 31');
test(numberOfSubmatrices([["X","Y","X","Y","X"],["Y","X","Y","X","Y"],["X","Y","X","Y","X"],["Y","X","Y","X","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 32');
test(numberOfSubmatrices([["X","X","X","X","X"],["X","X","X","X","X"],["X","X","X","X","X"],["X","X","X","X","X"],["X","X","X","X","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 33');
test(numberOfSubmatrices([["X","Y","X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X","Y","X"],["X","Y","X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 34');
test(numberOfSubmatrices([["X","Y","X","Y","X","Y","X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X","Y","X","Y","X","Y","X"],["X","Y","X","Y","X","Y","X","Y","X","Y","X","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 35');
test(numberOfSubmatrices([["X",".","Y",".","X",".","Y",".","X"],[".","Y","X","Y",".","Y","X","Y","."],["Y","X",".","X","Y","X",".","X","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 36');
test(numberOfSubmatrices([["X","X","X","X"],["X","Y","Y","Y"],["Y","Y","X","X"],["Y","X","X","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 37');
test(numberOfSubmatrices([["X","Y","X","Y","X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X","Y","X","Y","X"]]), 15, 'Test 38');
test(numberOfSubmatrices([[".",".",".","X"],[".","X","X","."],["Y","Y","Y","Y"],[".","Y","Y","."]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 39');
test(numberOfSubmatrices([["X",".","X",".","X"],["Y","Y",".","Y","Y"],["X","Y","X","Y","X"],[".","X","Y","X","."],["Y",".","X","Y","."]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 40');
test(numberOfSubmatrices([["X","X","X","X","X","X","X","X","X","X"],["Y","Y","Y","Y","Y","Y","Y","Y","Y","Y"],["X","X","X","X","X","X","X","X","X","X"],["Y","Y","Y","Y","Y","Y","Y","Y","Y","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 41');
test(numberOfSubmatrices([["X","X","Y","Y"],["Y","X","X","Y"],["X","Y","X","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 42');
test(numberOfSubmatrices([[".",".",".","X","Y"],["X","X","Y","Y","Y"],["Y","Y","X","X","X"],["X","Y","X","Y","X"],[".",".",".","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 43');
test(numberOfSubmatrices([["X","Y","X","Y"],["Y","X","Y","X"],["X","Y","X","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 44');
test(numberOfSubmatrices([["X","Y",".","X"],[".","X","Y","."],["Y",".","X","Y"],[".","Y","X","."]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 45');
test(numberOfSubmatrices([["X",".","Y",".","X"],[".","X","Y","X","."],["Y","X",".","Y","X"],[".","Y","X","Y","."],["X","Y","X","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 46');
test(numberOfSubmatrices([["X","Y",".","Y","X"],["X",".","X",".","Y"],[".","X","Y","X","."],["Y",".","X","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 47');
test(numberOfSubmatrices([["X","X","X"],["Y","Y","Y"],["X","Y","X"],["Y","X","Y"]]), 7, 'Test 48');
test(numberOfSubmatrices([["X","Y","X","X","Y"],["Y","X","Y","X","Y"],["X","Y","X","X","Y"],["X","X","Y","Y","X"],["Y","X","Y","X","Y"]]), 6, 'Test 49');
test(numberOfSubmatrices([["X","Y","X","Y","X","Y","X","Y","X"],["Y","X","Y","X","Y","X","Y","X","Y"],["X","Y","X","Y","X","Y","X","Y","X"],["Y","X","Y","X","Y","X","Y","X","Y"],["X","Y","X","Y","X","Y","X","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 50');
test(numberOfSubmatrices([["X","Y","Y","X"],["Y","X","X","Y"],["X","Y","X","Y"],["Y","X","Y","X"]]), 12, 'Test 51');
test(numberOfSubmatrices([["X","Y","X","Y","X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X","Y","X","Y","X"],["X","Y","X","Y","X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X","Y","X","Y","X"],["X","Y","X","Y","X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X","Y","X","Y","X"],["X","Y","X","Y","X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X","Y","X","Y","X"],["X","Y","X","Y","X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X","Y","X","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 52');
test(numberOfSubmatrices([["X","Y",".","X","Y","."],["Y","X",".","Y","X","."],[".",".",".",".",".","."],["X","Y","X","Y","X","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 53');
test(numberOfSubmatrices([["X",".","X","Y"],["Y","X","Y","."],[".","Y","X","X"],["X","Y",".","Y"]]), 6, 'Test 54');
test(numberOfSubmatrices([["X","X","X","X","X"],["X","X","X","X","X"],["X","X","X","X","X"],["X","X","X","X","X"],["X","X","X","X","X"]]), 0, 'Test 55');
test(numberOfSubmatrices([["X","Y",".","X",".","Y"],["Y",".","X","Y","X","."],[".","X","Y",".","Y","X"],["X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X"],["X",".","Y","X",".","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 56');
test(numberOfSubmatrices([[".",".",".","."],["X","X","Y","Y"],["Y","Y","X","X"],["X","Y","X","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 57');
test(numberOfSubmatrices([["X",".",".","Y"],[".","X","Y","."],[".","Y","X","."],["Y",".",".","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 58');
test(numberOfSubmatrices([["X","Y","X","Y","X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X","Y","X","Y","X"],["X","Y","X","Y","X","Y","X","Y","X","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 59');
test(numberOfSubmatrices([[".",".","X","Y","."],["X","Y",".","X","Y"],["Y","X","X","Y","X"],[".","Y","X",".","Y"],["X",".","Y","X","."]]), 9, 'Test 60');
test(numberOfSubmatrices([[".","X","Y",".","X","Y",".","X","Y","."],["X","Y",".","X","Y",".","X","Y",".","X"],["Y",".","X","Y",".","X","Y",".","X","Y"],[".","X","Y",".","X","Y",".","X","Y","."]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 61');
test(numberOfSubmatrices([["X","X","X","Y"],["Y","Y","X","X"],["X","Y","X","X"],["Y","X","Y","Y"]]), 5, 'Test 62');
test(numberOfSubmatrices([["X",".","Y",".","X",".","Y",".","X",".","Y","."],[".","X",".","Y",".","X",".","Y",".","X",".","Y"],["Y",".","X",".","Y",".","X",".","Y",".","X","."]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 63');
test(numberOfSubmatrices([["X","Y","X","Y","X","Y","X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X","Y","X","Y","X","Y","X"],["X","Y","X","Y","X","Y","X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X","Y","X","Y","X","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 64');
test(numberOfSubmatrices([["X","X","X","X","X","X","X","X","X","X"],["X","Y","X","Y","X","Y","X","Y","X","Y"],["X","Y","X","Y","X","Y","X","Y","X","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 65');
test(numberOfSubmatrices([["X","Y","X","Y","X","Y","X"],["Y","X","Y","X","Y","X","Y"],["X","Y","X","Y","X","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 66');
test(numberOfSubmatrices([["X","Y",".","X","Y"],["Y","X",".","Y","X"],["X",".","X",".","Y"],["Y","X",".","Y","X"],["X","Y",".","X","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 67');
test(numberOfSubmatrices([["X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X"],["X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 68');
test(numberOfSubmatrices([["X","X","X","Y","Y","Y"],["Y","Y","Y","X","X","X"],["X","Y","X","Y","X","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 69');
test(numberOfSubmatrices([["X","X","Y","X"],["Y","Y","X","Y"],["X","X","Y","X"],["Y","Y","X","Y"]]), 8, 'Test 70');
test(numberOfSubmatrices([["X","Y",".","X","Y",".","X","Y"],["Y","X","Y","X","Y","X","Y","X"],[".","X","X","X","X","X","X","X"],["X","Y","X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X","Y","X"],[".","X","X","X","X","X","X","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 71');
test(numberOfSubmatrices([["X","Y","X",".","Y","X","Y",".","X","Y"],["X",".","X","Y","X",".","X","Y","X","."],["X","Y",".","X","Y","X",".","X","Y","X"],[".","X","Y","X",".","X","Y","X",".","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 72');
test(numberOfSubmatrices([["X",".","Y","X"],[".","X","X","Y"],["Y","X",".","X"],["X","Y","X","."]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 73');
test(numberOfSubmatrices([["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","X","X","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 74');
test(numberOfSubmatrices([["X","Y","X","Y"],["Y","X","Y","X"],["X","Y","X","Y"],["Y","X","Y","X"]]), 12, 'Test 75');
test(numberOfSubmatrices([["X","Y","X","Y","X","Y","X","Y","X"],["Y","X","Y","X","Y","X","Y","X","Y"]]), 13, 'Test 76');
test(numberOfSubmatrices([["X","Y",".","X","Y"],["Y","X","Y","X","Y"],["X","Y","X","Y","X"],["Y","X","Y","X","Y"],["X","Y","X","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 77');
test(numberOfSubmatrices([["X","X","X"],["Y","Y","Y"],["X","X","X"],["Y","Y","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 78');
test(numberOfSubmatrices([["X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X"],["X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X"],["X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 79');
test(numberOfSubmatrices([["X","Y",".","X"],["Y",".","Y","X"],[".","X","Y","."],["X","Y","X","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 80');
test(numberOfSubmatrices([["X","X","X","Y","Y"],["X","X","Y","Y","Y"],["Y","Y","Y","X","X"],["Y","Y","X","X","X"],["X","Y","X","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 81');
test(numberOfSubmatrices([["X","X","Y","Y"],["X","Y","X","Y"],["Y","X","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 82');
test(numberOfSubmatrices([["X",".","X","Y","X",".","X","Y"],[".","Y","X",".","Y","X",".","Y"],["X",".","X","Y","X",".","X","Y"],["Y","X",".","Y","X",".","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 83');
test(numberOfSubmatrices([["X","X","X","X","X"],["Y","Y","Y","Y","Y"],["X","X","X","X","X"],["Y","Y","Y","Y","Y"],["X","X","X","X","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 84');
test(numberOfSubmatrices([["X","Y","X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X","Y","X"],["X","Y","X","Y","X","Y","X","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 85');
test(numberOfSubmatrices([["X","X","X","X","X","X"],["X","X","X","X","X","X"],["Y","Y","Y","Y","Y","Y"],["Y","Y","Y","Y","Y","Y"],["X","X","X","X","X","X"],["X","X","X","X","X","X"]]), 6, 'Test 86');
test(numberOfSubmatrices([["X",".",".","Y",".",".","X",".","Y","."],[".","X",".",".","Y",".",".","X",".","Y"],[".",".","X",".",".","Y",".",".","X","."],["Y",".",".","X",".",".","Y",".",".","X"]]), 12, 'Test 87');
test(numberOfSubmatrices([["X","X","Y","Y","X","X","Y","Y"],["Y","Y","X","X","Y","Y","X","X"],["X","X","Y","Y","X","X","Y","Y"]]), 12, 'Test 88');
test(numberOfSubmatrices([["X","Y",".","X"],["Y","X",".","Y"],["X",".","X","Y"],["Y","X","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 89');
test(numberOfSubmatrices([["X","X","X","X","X","X","X","X","X","X"],["Y","Y","Y","Y","Y","Y","Y","Y","Y","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 90');
test(numberOfSubmatrices([["X","Y","X","Y","X"],["Y","X","Y","X","Y"],["X","Y","X","Y","X"],["Y","X","Y","X","Y"],["X","Y","X","Y","X"]]), 16, 'Test 91');
test(numberOfSubmatrices([["X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X","X","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 92');
test(numberOfSubmatrices([["X","Y","."],["X","Y","."],[".",".","."]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 93');
test(numberOfSubmatrices([["X","Y","X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X","Y","X"],["X","Y","X","Y","X","Y","X","Y"]]), 16, 'Test 94');
test(numberOfSubmatrices([["X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X"],["X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X"],["X","Y","X","Y","X","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 95');
test(numberOfSubmatrices([["X","Y",".","X"],[".","X","Y","."],["Y",".","X","Y"],["X","Y",".","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 96');
test(numberOfSubmatrices([["X","Y","X","Y","X","Y","X","Y","X","Y","X","Y","X","Y","X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X","Y","X","Y","X","Y","X","Y","X","Y","X","Y","X","Y","X"],["X","Y","X","Y","X","Y","X","Y","X","Y","X","Y","X","Y","X","Y","X","Y","X","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 97');
test(numberOfSubmatrices([["X","X","X"],["Y","Y","Y"],["X","X","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 98');
test(numberOfSubmatrices([["X","X","X","X","X","X","X"],["Y","Y","Y","Y","Y","Y","Y"],["X","X","X","X","X","X","X"],["Y","Y","Y","Y","Y","Y","Y"],["X","X","X","X","X","X","X"],["Y","Y","Y","Y","Y","Y","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 99');
test(numberOfSubmatrices([["X","Y","X","Y","X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X","Y","X","Y","X"],["X","Y","X","Y","X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X","Y","X","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 100');
test(numberOfSubmatrices([["X","Y","X","Y","X"],["Y","X","Y","X","Y"],["X","Y","X","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 101');
test(numberOfSubmatrices([["X","Y","X","Y","X","Y","X","Y","X","Y"],["Y","X","Y","X","Y","X","Y","X","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 102');
test(numberOfSubmatrices([["X","Y","X","Y"],["X","Y","X","Y"],["X","Y","X","Y"],["X","Y","X","Y"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 103');
test(numberOfSubmatrices([["X","Y","X","Y","X","Y","X","Y","X"],["Y","X","Y","X","Y","X","Y","X","Y"],["X","Y","X","Y","X","Y","X","Y","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 104');
test(numberOfSubmatrices([["X","Y",".","X"],["Y","X",".","Y"],[".",".",".","."],["X","Y","X","Y"]]), 12, 'Test 105');
test(numberOfSubmatrices([["X",".","Y",".","X"],[".","Y","X","Y","."],["Y","X",".","X","Y"],[".","Y","X","Y","."],["X",".","Y",".","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 106');
test(numberOfSubmatrices([["X","Y","Y","Y"],["X","Y","X","X"],["X","X","Y","Y"],["X","X","X","X"]]), 5, 'Test 107');
test(numberOfSubmatrices([[".",".","X"],["Y","X","Y"],["X","Y","X"],["Y",".","Y"]]), 4, 'Test 108');
test(numberOfSubmatrices([["X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 109');
test(numberOfSubmatrices([["X",".","Y","X"],["Y","X","Y","X"],["X","Y","X","."],[".","X","Y","X"]]), 4, 'Test 110');
test(numberOfSubmatrices([[".",".",".","."],[".","X","Y","."],[".","Y","X","."],[".",".",".","."]]), 8, 'Test 111');
test(numberOfSubmatrices([["X",".","Y",".","X",".","Y","."],[".","X",".","Y",".","X",".","Y"],["Y",".","X",".","Y",".","X","."],[".","Y",".","X",".","Y",".","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 112');
test(numberOfSubmatrices([[".",".","X","Y","."],["X","Y","X","Y","X"],["Y","X","Y","X","Y"],[".","X","Y","X","Y"]]), 10, 'Test 113');
test(numberOfSubmatrices([["X","Y","X","Y","X","Y","X","Y","X","Y","X","Y","X","Y","X","Y","X","Y","X","Y"]]), 10, 'Test 114');
test(numberOfSubmatrices([[".",".",".",".","."],[".",".",".",".","."],[".",".",".",".","."],[".",".",".",".","."],[".",".",".",".","."]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 115');
test(numberOfSubmatrices([["X","X","X","X","X","X","X"],["X","Y","X","Y","X","Y","X"],["X","X","X","X","X","X","X"],["X","Y","X","Y","X","Y","X"],["X","X","X","X","X","X","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 116');
test(numberOfSubmatrices([["X",".","X",".","X",".","X",".","X"],[".","Y",".","Y",".","Y",".","Y","."],["X",".","X",".","X",".","X",".","X"],[".","Y",".","Y",".","Y",".","Y","."],["X",".","X",".","X",".","X",".","X"]]"), Error: Solution.numberOfSubmatrices[] missing 1 required positional argument: 'grid', 'Test 117');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

