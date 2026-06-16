// Test: 1253. Reconstruct A 2 Row Binary Matrix
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { reconstructMatrix } = require("./solution");

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

console.log("\n1253. Reconstruct A 2 Row Binary Matrix\n");

test(reconstructMatrix(100000, 100000, [2 for _ in range[100000]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 1');
test(reconstructMatrix(2, 3, [2,2,1,1]), [], 'Test 2');
test(reconstructMatrix(1, 1, [1,0,1]), [[0, 0, 1], [1, 0, 0]], 'Test 3');
test(reconstructMatrix(4, 2, [2,1,1,0,0]), [], 'Test 4');
test(reconstructMatrix(3, 3, [2,0,2,0,2]), [[1, 0, 1, 0, 1], [1, 0, 1, 0, 1]], 'Test 5');
test(reconstructMatrix(0, 0, [0,0,0,0]), [[0, 0, 0, 0], [0, 0, 0, 0]], 'Test 6');
test(reconstructMatrix(5, 5, [2,1,2,0,1,0,1,2,0,1]), [[1, 0, 1, 0, 1, 0, 0, 1, 0, 1], [1, 1, 1, 0, 0, 0, 1, 1, 0, 0]], 'Test 7');
test(reconstructMatrix(2, 1, [1,1,1]), [[1, 0, 1], [0, 1, 0]], 'Test 8');
test(reconstructMatrix(10, 10, [2,1,1,1,1,1,1,1,1,1]), [], 'Test 9');
test(reconstructMatrix(20, 30, [2 for _ in range[10]] + [1 for _ in range[20]] + [0 for _ in range[10]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 10');
test(reconstructMatrix(0, 0, [0,0,0,0,0]), [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], 'Test 11');
test(reconstructMatrix(5, 5, [2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), [], 'Test 12');
test(reconstructMatrix(20, 15, [1] * 10 + [2] * 10 + [0] * 5), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 13');
test(reconstructMatrix(50, 50, [2 for _ in range[25]] + [0 for _ in range[25]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 14');
test(reconstructMatrix(50, 50, [2 for _ in range[50]] + [1 for _ in range[50]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 15');
test(reconstructMatrix(15, 5, [2,1,2,1,2,1,0,0,0,0,0,0,0,0,0]), [], 'Test 16');
test(reconstructMatrix(3, 2, [2, 1, 1, 0, 1]), [[1, 1, 0, 0, 1], [1, 0, 1, 0, 0]], 'Test 17');
test(reconstructMatrix(3, 3, [1,1,1,1,1,1]), [[0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0]], 'Test 18');
test(reconstructMatrix(50000, 50000, [1 if i %, = 0 else 0 for i in range[100000]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 19');
test(reconstructMatrix(6, 4, [2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), [], 'Test 20');
test(reconstructMatrix(5, 5, [2,1,1,0,0,0,1,1,1,1]), [], 'Test 21');
test(reconstructMatrix(6, 4, [2, 2, 1, 1, 0, 0, 1]), [], 'Test 22');
test(reconstructMatrix(45, 55, [2] * 30 + [1] * 20 + [0] * 30), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 23');
test(reconstructMatrix(100, 50, [2 for _ in range[50]] + [1 for _ in range[50]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 24');
test(reconstructMatrix(100000, 0, [1 for _ in range[100000]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 25');
test(reconstructMatrix(10, 6, [2,0,0,1,1,1,1,1,1,1,0,0]), [], 'Test 26');
test(reconstructMatrix(7, 5, [1, 2, 1, 2, 1, 1, 1]), [], 'Test 27');
test(reconstructMatrix(5, 5, [2, 1, 2, 0, 1, 0, 1, 2, 0, 1]), [[1, 0, 1, 0, 1, 0, 0, 1, 0, 1], [1, 1, 1, 0, 0, 0, 1, 1, 0, 0]], 'Test 28');
test(reconstructMatrix(5, 5, [0,1,2,0,0,1,2,1,0]), [], 'Test 29');
test(reconstructMatrix(10, 0, [1 for _ in range[10]] + [0 for _ in range[10]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 30');
test(reconstructMatrix(8, 2, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), [], 'Test 31');
test(reconstructMatrix(1, 1, [1 for _ in range[1000]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 32');
test(reconstructMatrix(3, 1, [1, 2, 1, 1, 0]), [], 'Test 33');
test(reconstructMatrix(3, 2, [1, 1, 1, 1, 0]), [], 'Test 34');
test(reconstructMatrix(1, 1, [2]), [[1], [1]], 'Test 35');
test(reconstructMatrix(0, 0, [0 for _ in range[100000]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 36');
test(reconstructMatrix(3, 6, [2, 2, 1, 1, 1, 2, 1]), [], 'Test 37');
test(reconstructMatrix(50, 50, [2 for _ in range[25]] + [1 for _ in range[50]] + [0 for _ in range[25]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 38');
test(reconstructMatrix(5, 5, [2, 1, 0, 1, 0, 2, 1, 0]), [], 'Test 39');
test(reconstructMatrix(50, 50, [2 for _ in range[25]] + [1 for _ in range[25]] + [0 for _ in range[50]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 40');
test(reconstructMatrix(2, 2, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), [], 'Test 41');
test(reconstructMatrix(1, 2, [1, 1, 0, 0, 1]), [[0, 0, 0, 0, 1], [1, 1, 0, 0, 0]], 'Test 42');
test(reconstructMatrix(0, 0, [0 for _ in range[100]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 43');
test(reconstructMatrix(80, 70, [0, 0, 1, 2] * 20 + [1, 2, 1, 0] * 10 + [2, 1, 0, 1] * 10), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 44');
test(reconstructMatrix(4, 4, [2, 0, 1, 1, 2, 1, 1, 0]), [[1, 0, 0, 1, 1, 0, 1, 0], [1, 0, 1, 0, 1, 1, 0, 0]], 'Test 45');
test(reconstructMatrix(50, 50, [1 for _ in range[25]] + [2 for _ in range[25]] + [1 for _ in range[25]] + [0 for _ in range[25]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 46');
test(reconstructMatrix(1, 1, [2,0,0,0,0,0,0,0,0,0]), [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]], 'Test 47');
test(reconstructMatrix(50000, 50000, [2 for _ in range[25000]] + [0 for _ in range[25000]] + [1 for _ in range[50000]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 48');
test(reconstructMatrix(0, 100000, [1 for _ in range[100000]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 49');
test(reconstructMatrix(2, 2, [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]), [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]], 'Test 50');
test(reconstructMatrix(3, 3, [2,0,1,1,2]), [[1, 0, 0, 1, 1], [1, 0, 1, 0, 1]], 'Test 51');
test(reconstructMatrix(100, 100, [1 for _ in range[100]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 52');
test(reconstructMatrix(5, 5, [1, 2, 0, 2, 1, 0, 1]), [], 'Test 53');
test(reconstructMatrix(8, 8, [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), [], 'Test 54');
test(reconstructMatrix(4, 4, [2,2,2,2,1,1,1,1,0,0,0,0]), [], 'Test 55');
test(reconstructMatrix(6, 6, [2, 1, 0, 2, 1, 0, 1, 1, 0, 0, 2, 1]), [], 'Test 56');
test(reconstructMatrix(7, 3, [1, 0, 1, 2, 1, 0, 1, 1, 0]), [], 'Test 57');
test(reconstructMatrix(3, 3, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), [], 'Test 58');
test(reconstructMatrix(50, 50, [2 for _ in range[50]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 59');
test(reconstructMatrix(3, 2, [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0]), [], 'Test 60');
test(reconstructMatrix(5, 5, [0, 1, 2, 1, 1, 0, 2, 0]), [], 'Test 61');
test(reconstructMatrix(100000, 0, [1 if i %, = 0 else 0 for i in range[100000]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 62');
test(reconstructMatrix(3, 4, [1, 2, 1, 1, 0, 1]), [], 'Test 63');
test(reconstructMatrix(50000, 50000, [0 if i %, = 0 else 1 for i in range[100000]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 64');
test(reconstructMatrix(6, 4, [2,1,1,1,1,2,0,1,1,0]), [[1, 1, 1, 0, 1, 1, 0, 0, 1, 0], [1, 0, 0, 1, 0, 1, 0, 1, 0, 0]], 'Test 65');
test(reconstructMatrix(7, 3, [1, 2, 1, 1, 1, 0, 0, 2]), [], 'Test 66');
test(reconstructMatrix(60, 40, [1, 1, 0] * 30 + [0, 1, 1] * 10 + [2] * 20), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 67');
test(reconstructMatrix(10, 10, [2, 2, 2, 2, 2, 0, 0, 0, 0, 0]), [], 'Test 68');
test(reconstructMatrix(5, 3, [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), [], 'Test 69');
test(reconstructMatrix(5, 5, [0,0,0,2,0,0,0,0,2,0,0,0,0,0,0]), [], 'Test 70');
test(reconstructMatrix(9, 9, [2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2]), [], 'Test 71');
test(reconstructMatrix(8, 6, [2,1,1,2,1,1,1,1,1,1,1,1,1,1,0,0]), [], 'Test 72');
test(reconstructMatrix(8, 7, [2, 2, 2, 0, 1, 1, 0, 1]), [], 'Test 73');
test(reconstructMatrix(10, 10, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2]), [], 'Test 74');
test(reconstructMatrix(5, 4, [2,1,1,1,0,1]), [], 'Test 75');
test(reconstructMatrix(8, 4, [2, 2, 2, 2, 0, 0, 0, 0]), [], 'Test 76');
test(reconstructMatrix(4, 5, [1, 1, 1, 1, 2, 1, 0, 1]), [], 'Test 77');
test(reconstructMatrix(5, 3, [1,1,1,2,1,2,0,0]), [[1, 1, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 0, 1, 0, 0]], 'Test 78');
test(reconstructMatrix(10, 5, [1,1,1,1,1,1,1,1,1,1,0,0,0,0,0]), [], 'Test 79');
test(reconstructMatrix(100, 100, [2] * 50 + [1] * 50 + [0] * 50), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 80');
test(reconstructMatrix(7, 3, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), [[1, 1, 1, 1, 0, 1, 0, 1, 0, 1], [0, 0, 0, 0, 1, 0, 1, 0, 1, 0]], 'Test 81');
test(reconstructMatrix(3, 3, [1,0,1,0,1,0,1,0,1,0,1,0]), [[0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0], [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]], 'Test 82');
test(reconstructMatrix(30, 20, [2, 0, 1] * 20 + [1, 1, 0] * 10 + [0, 0, 1] * 10), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 83');
test(reconstructMatrix(10, 10, [2,2,2,2,1,1,1,1,1,1]), [], 'Test 84');
test(reconstructMatrix(8, 8, [1, 2, 2, 1, 2, 1, 1, 2]), [], 'Test 85');
test(reconstructMatrix(1, 1, [0, 0, 0, 0, 0, 2]), [[0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 1]], 'Test 86');
test(reconstructMatrix(15, 15, [2 for _ in range[5]] + [1 for _ in range[20]] + [0 for _ in range[5]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 87');
test(reconstructMatrix(0, 0, [0, 0, 0, 0, 0]), [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], 'Test 88');
test(reconstructMatrix(3, 4, [2, 1, 2, 0, 1]), [], 'Test 89');
test(reconstructMatrix(10, 10, [2,1,2,1,0,0,0,0,0,1,1,2,1,1,0,0,0,1,1,0]), [], 'Test 90');
test(reconstructMatrix(7, 3, [1,2,1,1,0,2,1,0]), [], 'Test 91');
test(reconstructMatrix(7, 8, [2, 2, 1, 1, 1, 1, 1, 1, 1, 1]), [], 'Test 92');
test(reconstructMatrix(7, 5, [1,2,2,1,1,0,0,0,1,1]), [], 'Test 93');
test(reconstructMatrix(10, 10, [2 for _ in range[5]] + [1 for _ in range[10]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 94');
test(reconstructMatrix(3, 3, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), [], 'Test 95');
test(reconstructMatrix(5, 5, [2, 0, 2, 0, 1, 1]), [], 'Test 96');
test(reconstructMatrix(7, 3, [2,1,2,1,0,0,0,1,1,0,0,1]), [], 'Test 97');
test(reconstructMatrix(10, 5, [2,2,2,1,1,1,1,1,1,0]), [], 'Test 98');
test(reconstructMatrix(6, 6, [2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), [], 'Test 99');
test(reconstructMatrix(4, 4, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), [], 'Test 100');
test(reconstructMatrix(90, 10, [1] * 50 + [2] * 20 + [0] * 30), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 101');
test(reconstructMatrix(0, 100000, [1 if i %, = 1 else 0 for i in range[100000]]), Error: Solution.reconstructMatrix[] missing 1 required positional argument: 'colsum', 'Test 102');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

