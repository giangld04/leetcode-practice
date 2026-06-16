// Test: 1595. Minimum Cost To Connect Two Groups Of Points
// 78 test cases from LeetCodeDataset
// Run: node test.js

const { connectTwoGroups } = require("./solution");

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

console.log("\n1595. Minimum Cost To Connect Two Groups Of Points\n");

test(connectTwoGroups([[2, 5, 1], [3, 4, 7], [8, 1, 2], [6, 2, 4], [3, 8, 8]]), 10, 'Test 1');
test(connectTwoGroups([[1, 3, 5], [4, 1, 1], [1, 5, 3]]), 4, 'Test 2');
test(connectTwoGroups({"cost": [[1, 3, 5], [4, 1, 1], [1, 5, 3]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 3');
test(connectTwoGroups([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]]), 16, 'Test 4');
test(connectTwoGroups([[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6]]), 13, 'Test 5');
test(connectTwoGroups({"cost": [[15, 96], [36, 2]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 6');
test(connectTwoGroups({"cost": [[2, 5, 1], [3, 4, 7], [8, 1, 2], [6, 2, 4], [3, 8, 8]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 7');
test(connectTwoGroups([[15, 96], [36, 2]]), 17, 'Test 8');
test(connectTwoGroups([[10, 10, 10], [10, 10, 10], [10, 10, 10], [10, 10, 10]]), 40, 'Test 9');
test(connectTwoGroups([[10, 20], [30, 40], [50, 60]]), 100, 'Test 10');
test(connectTwoGroups([[5, 5, 5], [5, 5, 5]]), 15, 'Test 11');
test(connectTwoGroups({"cost": [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 5, 3, 2, 4], [3, 1, 2, 5, 4], [4, 3, 1, 4, 2]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 12');
test(connectTwoGroups({"cost": [[100, 50, 25, 10, 5], [5, 10, 25, 50, 100], [100, 75, 50, 25, 10], [10, 25, 50, 75, 100]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 13');
test(connectTwoGroups({"cost": [[25, 50, 75], [10, 30, 40], [5, 20, 60], [15, 25, 35]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 14');
test(connectTwoGroups({"cost": [[100, 90, 80], [70, 60, 50], [40, 30, 20], [10, 0, 10]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 15');
test(connectTwoGroups({"cost": [[100, 50, 20], [60, 10, 10], [5, 50, 20], [10, 100, 60], [70, 10, 20]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 16');
test(connectTwoGroups({"cost": [[12, 15, 20], [18, 13, 23], [25, 17, 16], [19, 22, 28], [14, 27, 19]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 17');
test(connectTwoGroups({"cost": [[100, 0, 50], [25, 75, 5], [75, 25, 100], [50, 100, 25], [100, 50, 75]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 18');
test(connectTwoGroups({"cost": [[5, 8, 6], [3, 9, 4], [6, 2, 7], [4, 5, 9], [7, 1, 3]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 19');
test(connectTwoGroups({"cost": [[9, 2, 8, 1], [3, 4, 6, 5], [7, 8, 1, 2], [6, 5, 3, 4], [2, 1, 4, 3]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 20');
test(connectTwoGroups({"cost": [[12, 45, 23, 56, 89, 10, 34], [21, 33, 44, 55, 66, 77, 88], [99, 87, 76, 65, 54, 43, 32], [22, 33, 44, 55, 66, 77, 88], [11, 22, 33, 44, 55, 66, 77]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 21');
test(connectTwoGroups({"cost": [[1, 2, 3], [2, 3, 1], [3, 1, 2], [1, 3, 2], [2, 1, 3], [3, 2, 1]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 22');
test(connectTwoGroups({"cost": [[5, 15, 10, 20], [10, 25, 15, 5], [15, 5, 25, 10]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 23');
test(connectTwoGroups({"cost": [[1, 99, 99, 99], [99, 99, 99, 99], [99, 99, 99, 99], [2, 99, 99, 99], [3, 99, 99, 99], [4, 99, 99, 99]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 24');
test(connectTwoGroups({"cost": [[10, 20, 30, 40], [15, 25, 35, 45], [20, 30, 40, 50], [25, 35, 45, 55], [30, 40, 50, 60]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 25');
test(connectTwoGroups({"cost": [[9, 7, 5, 3, 1], [8, 6, 4, 2, 0], [7, 5, 3, 1, 9], [6, 4, 2, 0, 8], [5, 3, 1, 9, 7]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 26');
test(connectTwoGroups({"cost": [[5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 27');
test(connectTwoGroups({"cost": [[7, 4, 3, 6, 2, 8], [9, 5, 7, 2, 4, 6], [1, 8, 5, 7, 9, 3], [5, 1, 9, 3, 8, 4], [8, 5, 4, 9, 1, 7]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 28');
test(connectTwoGroups({"cost": [[10, 20, 30, 40], [5, 15, 25, 35], [2, 8, 14, 20]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 29');
test(connectTwoGroups({"cost": [[5, 3, 8, 6], [9, 2, 4, 7], [1, 6, 5, 3], [8, 4, 2, 1], [7, 1, 9, 5]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 30');
test(connectTwoGroups({"cost": [[0, 10, 20, 30], [10, 0, 10, 20], [20, 10, 0, 10], [30, 20, 10, 0], [40, 30, 20, 10], [50, 40, 30, 20]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 31');
test(connectTwoGroups({"cost": [[1, 1, 1, 1, 1], [1, 2, 2, 2, 2], [1, 2, 3, 3, 3], [1, 2, 3, 4, 4], [1, 2, 3, 4, 5]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 32');
test(connectTwoGroups({"cost": [[0, 1, 2, 3, 4], [1, 0, 3, 2, 4], [2, 3, 0, 1, 4], [3, 2, 1, 0, 4], [4, 3, 2, 1, 0]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 33');
test(connectTwoGroups({"cost": [[10, 20], [30, 40], [50, 60], [70, 80], [90, 100], [110, 120]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 34');
test(connectTwoGroups({"cost": [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 35');
test(connectTwoGroups({"cost": [[3, 6, 9, 12], [15, 18, 21, 24], [27, 30, 33, 36], [39, 42, 45, 48], [51, 54, 57, 60]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 36');
test(connectTwoGroups({"cost": [[2, 9, 5, 8, 3, 7, 6], [4, 1, 8, 5, 2, 6, 9], [1, 7, 4, 6, 8, 2, 5], [5, 3, 6, 9, 7, 8, 1], [8, 6, 7, 2, 5, 4, 9]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 37');
test(connectTwoGroups({"cost": [[99, 0, 1], [2, 99, 3], [4, 5, 99], [6, 7, 8]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 38');
test(connectTwoGroups({"cost": [[10, 20], [30, 40], [50, 60], [70, 80], [90, 100]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 39');
test(connectTwoGroups({"cost": [[10, 20, 30, 40], [50, 60, 70, 80], [90, 100, 110, 120]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 40');
test(connectTwoGroups({"cost": [[10, 20, 30, 40], [50, 60, 70, 80], [90, 100, 110, 120], [130, 140, 150, 160], [170, 180, 190, 200]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 41');
test(connectTwoGroups({"cost": [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 42');
test(connectTwoGroups({"cost": [[10, 20, 30, 40, 50], [5, 15, 25, 35, 45], [4, 14, 24, 34, 44], [3, 13, 23, 33, 43]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 43');
test(connectTwoGroups({"cost": [[10, 20, 30, 40], [5, 6, 7, 8], [1, 2, 3, 4]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 44');
test(connectTwoGroups({"cost": [[5, 15, 25, 35, 45], [6, 16, 26, 36, 46], [7, 17, 27, 37, 47], [8, 18, 28, 38, 48]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 45');
test(connectTwoGroups({"cost": [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [2, 3, 4, 5, 6], [6, 5, 4, 3, 2], [3, 4, 5, 6, 7]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 46');
test(connectTwoGroups({"cost": [[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 47');
test(connectTwoGroups({"cost": [[5, 20, 30, 10], [15, 1, 9, 18], [7, 12, 4, 25]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 48');
test(connectTwoGroups({"cost": [[12, 11, 10, 9], [9, 8, 7, 6], [6, 5, 4, 3], [3, 2, 1, 0], [0, 1, 2, 3], [3, 4, 5, 6], [6, 7, 8, 9], [9, 10, 11, 12]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 49');
test(connectTwoGroups({"cost": [[100, 50, 25], [75, 60, 40], [20, 10, 5], [80, 40, 20]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 50');
test(connectTwoGroups({"cost": [[5, 8, 6, 10], [3, 4, 7, 2], [8, 1, 5, 6], [2, 6, 8, 4], [7, 3, 9, 1], [4, 5, 1, 2]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 51');
test(connectTwoGroups({"cost": [[10], [20], [30], [40], [50], [60], [70], [80], [90], [100]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 52');
test(connectTwoGroups({"cost": [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 53');
test(connectTwoGroups({"cost": [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 54');
test(connectTwoGroups({"cost": [[1, 99, 99, 99], [99, 1, 99, 99], [99, 99, 1, 99], [99, 99, 99, 1]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 55');
test(connectTwoGroups({"cost": [[10, 11, 12, 13], [14, 15, 16, 17], [18, 19, 20, 21], [22, 23, 24, 25], [26, 27, 28, 29], [30, 31, 32, 33]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 56');
test(connectTwoGroups({"cost": [[99, 99, 99], [0, 0, 0], [99, 99, 99], [0, 0, 0]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 57');
test(connectTwoGroups({"cost": [[1, 3, 2, 4], [4, 1, 3, 2], [2, 4, 1, 3], [3, 2, 4, 1]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 58');
test(connectTwoGroups({"cost": [[50, 50, 50], [50, 50, 50], [50, 50, 50], [50, 50, 50], [50, 50, 50]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 59');
test(connectTwoGroups({"cost": [[5, 5, 5], [5, 5, 5], [5, 5, 5], [5, 5, 5], [5, 5, 5], [5, 5, 5], [5, 5, 5], [5, 5, 5], [5, 5, 5], [5, 5, 5], [5, 5, 5], [5, 5, 5]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 60');
test(connectTwoGroups({"cost": [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7], [6, 7, 8], [7, 8, 9], [8, 9, 10], [9, 10, 11], [10, 11, 12]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 61');
test(connectTwoGroups({"cost": [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 62');
test(connectTwoGroups({"cost": [[11, 22, 33], [44, 55, 66], [77, 88, 99], [10, 20, 30], [40, 50, 60]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 63');
test(connectTwoGroups({"cost": [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 64');
test(connectTwoGroups({"cost": [[10, 20, 30, 40, 50], [50, 40, 30, 20, 10], [10, 30, 50, 20, 40], [20, 40, 10, 50, 30], [30, 50, 20, 40, 10]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 65');
test(connectTwoGroups({"cost": [[100, 50, 25, 10], [75, 25, 5, 2], [50, 10, 50, 10], [1, 5, 2, 8], [10, 20, 30, 40]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 66');
test(connectTwoGroups({"cost": [[3, 8, 12, 4, 9], [6, 1, 5, 10, 15], [2, 7, 1, 8, 6], [4, 3, 9, 1, 12]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 67');
test(connectTwoGroups({"cost": [[100, 50], [75, 25], [60, 10], [40, 60], [30, 70], [20, 80], [10, 90]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 68');
test(connectTwoGroups({"cost": [[8, 6, 4], [2, 4, 6], [0, 2, 4], [2, 4, 6], [4, 6, 8]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 69');
test(connectTwoGroups({"cost": [[12, 34, 56, 78], [87, 65, 43, 21], [12, 34, 56, 78], [87, 65, 43, 21], [12, 34, 56, 78], [87, 65, 43, 21]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 70');
test(connectTwoGroups({"cost": [[10, 30, 20, 40, 50], [5, 25, 15, 35, 45], [20, 10, 30, 20, 50], [40, 50, 10, 20, 30]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 71');
test(connectTwoGroups({"cost": [[10, 20, 30], [25, 5, 15], [35, 25, 5], [15, 30, 20]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 72');
test(connectTwoGroups({"cost": [[1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [3, 3, 3, 3, 3], [4, 4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 73');
test(connectTwoGroups({"cost": [[1, 2], [2, 1], [3, 4], [4, 3], [5, 6], [6, 5]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 74');
test(connectTwoGroups({"cost": [[99, 1, 1], [1, 99, 1], [1, 1, 99], [1, 1, 1], [1, 1, 1], [1, 1, 1]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 75');
test(connectTwoGroups({"cost": [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7], [5, 6, 7, 8]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 76');
test(connectTwoGroups({"cost": [[1, 2, 3, 4, 5, 6], [2, 1, 4, 3, 6, 5], [3, 4, 1, 2, 5, 6], [4, 3, 2, 1, 6, 5], [5, 6, 3, 4, 1, 2], [6, 5, 4, 3, 2, 1]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 77');
test(connectTwoGroups({"cost": [[10, 20], [20, 10], [30, 40], [40, 30], [50, 60], [60, 50], [70, 80], [80, 70]]}), Error: Solution.connectTwoGroups[] missing 1 required positional argument: 'cost', 'Test 78');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

