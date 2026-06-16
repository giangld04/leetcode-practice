// Test: 3393. Count Paths With The Given Xor Value
// 106 test cases from LeetCodeDataset
// Run: node test.js

const { countPathsWithXorValue } = require("./solution");

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

console.log("\n3393. Count Paths With The Given Xor Value\n");

test(countPathsWithXorValue([[1, 3, 3, 3], [0, 3, 3, 2], [3, 0, 1, 1]], 2), 5, 'Test 1');
test(countPathsWithXorValue([[15, 15], [15, 15]], 14), 0, 'Test 2');
test(countPathsWithXorValue([[1], [1], [1]], 1), 1, 'Test 3');
test(countPathsWithXorValue([[1]], 1), 1, 'Test 4');
test(countPathsWithXorValue([[0]], 0), 1, 'Test 5');
test(countPathsWithXorValue([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 15), 2, 'Test 6');
test(countPathsWithXorValue([[0, 0, 0], [0, 0, 0], [0, 0, 0]], 0), 6, 'Test 7');
test(countPathsWithXorValue([[1, 2], [3, 4]], 7), 1, 'Test 8');
test(countPathsWithXorValue([[1, 1, 1], [1, 1, 1], [1, 1, 1]], 3), 0, 'Test 9');
test(countPathsWithXorValue([[1, 1, 1, 2], [3, 0, 3, 2], [3, 0, 2, 2]], 10), 0, 'Test 10');
test(countPathsWithXorValue([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], 0), 20, 'Test 11');
test(countPathsWithXorValue([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 7), 1, 'Test 12');
test(countPathsWithXorValue([[15, 15, 15], [15, 15, 15], [15, 15, 15]], 0), 0, 'Test 13');
test(countPathsWithXorValue([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0), 0, 'Test 14');
test(countPathsWithXorValue([[2, 1, 5], [7, 10, 0], [12, 6, 4]], 11), 3, 'Test 15');
test(countPathsWithXorValue([[0, 0], [0, 0]], 0), 2, 'Test 16');
test(countPathsWithXorValue([[15, 15, 15], [15, 15, 15], [15, 15, 15]], 15), 6, 'Test 17');
test(countPathsWithXorValue([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]], 15), 1, 'Test 18');
test(countPathsWithXorValue([[1, 0, 1], [0, 1, 0], [1, 0, 1]], 0), 0, 'Test 19');
test(countPathsWithXorValue([[14, 13, 12, 11, 10, 9], [8, 7, 6, 5, 4, 3], [2, 1, 0, 15, 14, 13], [12, 11, 10, 9, 8, 7]], 6), 0, 'Test 20');
test(countPathsWithXorValue([[1, 2, 3, 4, 5, 6, 7, 8], [8, 7, 6, 5, 4, 3, 2, 1], [1, 3, 5, 7, 9, 11, 13, 15], [15, 13, 11, 9, 7, 5, 3, 1]], 4), 7, 'Test 21');
test(countPathsWithXorValue([[1, 3, 5, 7], [9, 11, 13, 15], [1, 3, 5, 7], [9, 11, 13, 15]], 7), 5, 'Test 22');
test(countPathsWithXorValue([[0, 1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 0]], 7), 0, 'Test 23');
test(countPathsWithXorValue([[15, 14, 13, 12, 11], [10, 9, 8, 7, 6], [5, 4, 3, 2, 1]], 1), 0, 'Test 24');
test(countPathsWithXorValue([[8, 6, 4, 2, 0], [1, 3, 5, 7, 9], [10, 12, 14, 16, 18], [19, 21, 23, 25, 27]], 10), 0, 'Test 25');
test(countPathsWithXorValue([[1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14], [15, 16, 17, 18, 19, 20, 21], [22, 23, 24, 25, 26, 27, 28]], 3), 8, 'Test 26');
test(countPathsWithXorValue([[1, 3, 2, 0], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]], 30), 0, 'Test 27');
test(countPathsWithXorValue([[8, 7, 6], [5, 4, 3], [2, 1, 0], [9, 8, 7], [6, 5, 4]], 5), 1, 'Test 28');
test(countPathsWithXorValue([[10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [25, 26, 27, 28, 29]], 12), 2, 'Test 29');
test(countPathsWithXorValue([[14, 2, 10], [1, 3, 13], [12, 8, 4], [6, 14, 10]], 5), 2, 'Test 30');
test(countPathsWithXorValue([[2, 1, 5, 7], [10, 0, 12, 6], [4, 3, 3, 3], [3, 0, 1, 1]], 11), 3, 'Test 31');
test(countPathsWithXorValue([[8, 8, 8, 8, 8], [8, 8, 8, 8, 8], [8, 8, 8, 8, 8], [8, 8, 8, 8, 8], [8, 8, 8, 8, 8]], 0), 0, 'Test 32');
test(countPathsWithXorValue([[15, 14, 13, 12, 11, 10], [9, 8, 7, 6, 5, 4], [3, 2, 1, 0, 15, 14], [13, 12, 11, 10, 9, 8], [7, 6, 5, 4, 3, 2], [1, 0, 15, 14, 13, 12]], 15), 17, 'Test 33');
test(countPathsWithXorValue([[1, 3, 3, 3, 2], [3, 3, 2, 2, 1], [2, 2, 1, 1, 3], [1, 1, 3, 3, 2]], 4), 0, 'Test 34');
test(countPathsWithXorValue([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]], 5), 2, 'Test 35');
test(countPathsWithXorValue([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]], 15), 0, 'Test 36');
test(countPathsWithXorValue([[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 2, 3, 4, 5]], 5), 7, 'Test 37');
test(countPathsWithXorValue([[0, 1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 0]], 5), 0, 'Test 38');
test(countPathsWithXorValue([[3, 6, 12, 15], [10, 7, 1, 4], [8, 11, 13, 5], [14, 2, 9, 13]], 3), 3, 'Test 39');
test(countPathsWithXorValue([[7, 8, 9, 10, 11], [12, 13, 14, 15, 0], [1, 2, 3, 4, 5], [6, 7, 8, 9, 10]], 12), 10, 'Test 40');
test(countPathsWithXorValue([[0, 1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5]], 3), 28, 'Test 41');
test(countPathsWithXorValue([[15, 14, 13, 12, 11], [10, 9, 8, 7, 6], [5, 4, 3, 2, 1], [0, 1, 2, 3, 4]], 15), 0, 'Test 42');
test(countPathsWithXorValue([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16]], 7), 0, 'Test 43');
test(countPathsWithXorValue([[5, 3, 2, 1], [6, 0, 4, 5], [7, 8, 9, 1], [10, 11, 12, 13]], 10), 1, 'Test 44');
test(countPathsWithXorValue([[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], 1), 0, 'Test 45');
test(countPathsWithXorValue([[8, 15, 10, 5], [13, 7, 6, 11], [2, 9, 4, 12], [3, 14, 1, 8]], 10), 0, 'Test 46');
test(countPathsWithXorValue([[1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [3, 3, 3, 3, 3], [4, 4, 4, 4, 4]], 0), 1, 'Test 47');
test(countPathsWithXorValue([[0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 0, 1], [2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13]], 8), 8, 'Test 48');
test(countPathsWithXorValue([[14, 14, 14, 14], [14, 14, 14, 14], [14, 14, 14, 14], [14, 14, 14, 14]], 14), 20, 'Test 49');
test(countPathsWithXorValue([[15, 14, 13, 12], [11, 10, 9, 8], [7, 6, 5, 4], [3, 2, 1, 0]], 10), 0, 'Test 50');
test(countPathsWithXorValue([[15, 14, 13, 12, 11], [10, 9, 8, 7, 6], [5, 4, 3, 2, 1]], 5), 0, 'Test 51');
test(countPathsWithXorValue([[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 1, 1]], 0), 8, 'Test 52');
test(countPathsWithXorValue([[2, 4, 8, 16], [32, 64, 128, 256], [512, 1024, 2048, 4096], [8192, 16384, 32768, 65536]], 2), 0, 'Test 53');
test(countPathsWithXorValue([[5, 9, 10], [9, 8, 1], [10, 1, 3], [1, 3, 5]], 13), 0, 'Test 54');
test(countPathsWithXorValue([[1, 0, 1, 1], [0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1]], 14), 0, 'Test 55');
test(countPathsWithXorValue([[3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3]], 3), 70, 'Test 56');
test(countPathsWithXorValue([[0, 1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13], [14, 15, 0, 1, 2, 3, 4], [5, 6, 7, 8, 9, 10, 11]], 5), 8, 'Test 57');
test(countPathsWithXorValue([[2, 4, 8, 16, 32, 64], [128, 256, 512, 1024, 2048, 4096], [8192, 16384, 32768, 65536, 131072, 262144]], 1023), 0, 'Test 58');
test(countPathsWithXorValue([[2, 4, 6, 8, 10], [1, 3, 5, 7, 9], [0, 0, 0, 0, 0], [15, 13, 11, 9, 7]], 7), 2, 'Test 59');
test(countPathsWithXorValue([[15, 14, 13, 12, 11, 10, 9, 8, 7, 6], [5, 4, 3, 2, 1, 0, 15, 14, 13, 12], [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]], 10), 4, 'Test 60');
test(countPathsWithXorValue([[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1]], 0), 8, 'Test 61');
test(countPathsWithXorValue([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]], 0), 0, 'Test 62');
test(countPathsWithXorValue([[0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0], [0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0]], 1), 0, 'Test 63');
test(countPathsWithXorValue([[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]], 2), 70, 'Test 64');
test(countPathsWithXorValue([[11, 12, 13], [14, 15, 10], [9, 8, 7], [6, 5, 4]], 9), 0, 'Test 65');
test(countPathsWithXorValue([[2, 3, 1, 5], [1, 4, 2, 3], [5, 6, 7, 8], [0, 1, 2, 3]], 7), 1, 'Test 66');
test(countPathsWithXorValue([[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]], 5), 0, 'Test 67');
test(countPathsWithXorValue([[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]], 0), 35, 'Test 68');
test(countPathsWithXorValue([[15, 14, 13, 12], [11, 10, 9, 8], [7, 6, 5, 4], [3, 2, 1, 0]], 15), 0, 'Test 69');
test(countPathsWithXorValue([[1, 2, 3], [0, 1, 2], [3, 0, 1], [2, 3, 0]], 3), 6, 'Test 70');
test(countPathsWithXorValue([[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], 2), 0, 'Test 71');
test(countPathsWithXorValue([[15, 0, 1, 1], [1, 15, 1, 1], [1, 1, 15, 1], [1, 1, 1, 15]], 15), 4, 'Test 72');
test(countPathsWithXorValue([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [0, 1, 2, 3, 4], [5, 6, 7, 8, 9]], 7), 0, 'Test 73');
test(countPathsWithXorValue([[1, 3, 5, 7, 9], [2, 4, 6, 8, 10], [1, 3, 5, 7, 9], [2, 4, 6, 8, 10], [1, 3, 5, 7, 9]], 15), 0, 'Test 74');
test(countPathsWithXorValue([[1, 3, 3, 3, 3], [0, 3, 3, 2, 2], [3, 0, 1, 1, 1], [1, 1, 2, 2, 3]], 2), 0, 'Test 75');
test(countPathsWithXorValue([[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]], 0), 252, 'Test 76');
test(countPathsWithXorValue([[14, 4, 14, 4], [14, 4, 14, 4], [14, 4, 14, 4], [14, 4, 14, 4]], 8), 0, 'Test 77');
test(countPathsWithXorValue([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]], 0), 0, 'Test 78');
test(countPathsWithXorValue([[0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 0, 1], [2, 3, 4, 5, 6, 7]], 12), 9, 'Test 79');
test(countPathsWithXorValue([[0, 1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 0]], 5), 68, 'Test 80');
test(countPathsWithXorValue([[1, 3, 5, 7], [9, 11, 13, 15], [17, 19, 21, 23], [25, 27, 29, 31]], 10), 0, 'Test 81');
test(countPathsWithXorValue([[2, 1, 5, 7], [7, 10, 0, 12], [12, 6, 4, 3], [3, 14, 1, 8]], 11), 1, 'Test 82');
test(countPathsWithXorValue([[2, 4, 6, 8, 10], [12, 14, 16, 18, 20], [22, 24, 26, 28, 30], [32, 34, 36, 38, 40]], 7), 0, 'Test 83');
test(countPathsWithXorValue([[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]], 1), 15, 'Test 84');
test(countPathsWithXorValue([[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]], 10), 0, 'Test 85');
test(countPathsWithXorValue([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]], 4), 0, 'Test 86');
test(countPathsWithXorValue([[0, 1, 2, 3, 4], [4, 3, 2, 1, 0], [0, 1, 2, 3, 4], [4, 3, 2, 1, 0]], 6), 6, 'Test 87');
test(countPathsWithXorValue([[1, 0, 1, 0, 1], [0, 1, 0, 1, 0], [1, 0, 1, 0, 1], [0, 1, 0, 1, 0], [1, 0, 1, 0, 1]], 1), 70, 'Test 88');
test(countPathsWithXorValue([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], 0), 70, 'Test 89');
test(countPathsWithXorValue([[2, 3, 5, 7, 11], [13, 17, 19, 23, 29], [31, 37, 41, 43, 47], [53, 59, 61, 67, 71]], 60), 0, 'Test 90');
test(countPathsWithXorValue([[14, 1, 11, 3, 13, 7], [12, 4, 6, 8, 5, 9], [10, 2, 0, 15, 1, 14], [3, 13, 7, 11, 4, 6], [8, 5, 9, 12, 2, 0], [15, 1, 14, 10, 3, 8]], 15), 13, 'Test 91');
test(countPathsWithXorValue([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18], [19, 20, 21], [22, 23, 24]], 14), 0, 'Test 92');
test(countPathsWithXorValue([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]], 0), 126, 'Test 93');
test(countPathsWithXorValue([[1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1]], 3), 0, 'Test 94');
test(countPathsWithXorValue([[15, 0, 15, 0], [0, 15, 0, 15], [15, 0, 15, 0], [0, 15, 0, 15]], 14), 0, 'Test 95');
test(countPathsWithXorValue([[2, 3, 1, 4], [1, 2, 3, 4], [4, 3, 2, 1], [3, 4, 1, 2]], 5), 4, 'Test 96');
test(countPathsWithXorValue([[15, 15, 15, 15], [15, 15, 15, 15], [15, 15, 15, 15], [15, 15, 15, 15]], 15), 20, 'Test 97');
test(countPathsWithXorValue([[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]], 2), 0, 'Test 98');
test(countPathsWithXorValue([[3, 3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3, 3]], 14), 0, 'Test 99');
test(countPathsWithXorValue([[8, 5, 7], [5, 8, 5], [7, 5, 8]], 7), 2, 'Test 100');
test(countPathsWithXorValue([[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]], 5), 0, 'Test 101');
test(countPathsWithXorValue([[1, 0, 1, 0, 1, 0, 1], [0, 1, 0, 1, 0, 1, 0], [1, 0, 1, 0, 1, 0, 1], [0, 1, 0, 1, 0, 1, 0]], 0), 0, 'Test 102');
test(countPathsWithXorValue([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], 15), 0, 'Test 103');
test(countPathsWithXorValue([[1, 1, 1, 1], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 1]], 1), 16, 'Test 104');
test(countPathsWithXorValue([[5, 9, 15], [10, 7, 11], [8, 12, 14]], 13), 1, 'Test 105');
test(countPathsWithXorValue([[15, 14, 13, 12, 11], [10, 9, 8, 7, 6], [5, 4, 3, 2, 1], [0, 0, 0, 0, 0], [15, 14, 13, 12, 11]], 13), 3, 'Test 106');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

