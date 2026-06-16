// Test: 2943. Maximize Area Of Square Hole In Grid
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { maximizeSquareHoleArea } = require("./solution");

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

console.log("\n2943. Maximize Area Of Square Hole In Grid\n");

test(maximizeSquareHoleArea(1, 1, [2], [2]), 4, 'Test 1');
test(maximizeSquareHoleArea(2, 3, [2,3], [2,4]), 4, 'Test 2');
test(maximizeSquareHoleArea(2, 1, [2,3], [2]), 4, 'Test 3');
test(maximizeSquareHoleArea(5, 5, [2,3,4], [2,3,4]), 16, 'Test 4');
test(maximizeSquareHoleArea(10, 10, [3,5,7], [4,6,8]), 4, 'Test 5');
test(maximizeSquareHoleArea(20, 10, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [2, 4, 6, 8, 10]), 4, 'Test 6');
test(maximizeSquareHoleArea(15, 15, [3, 5, 7, 9, 11], [3, 5, 7, 9, 11]), 4, 'Test 7');
test(maximizeSquareHoleArea(20, 15, [5,7,9,11,13,15,17,19], [6,8,10,12,14,16,18,20]), 4, 'Test 8');
test(maximizeSquareHoleArea(15, 15, [3, 5, 7, 9, 11, 13, 15], [3, 5, 7, 9, 11, 13, 15]), 4, 'Test 9');
test(maximizeSquareHoleArea(10, 10, [2, 3, 5, 6], [3, 5, 7]), 4, 'Test 10');
test(maximizeSquareHoleArea(20, 10, [2, 4, 6, 8, 10], [3, 6, 9]), 4, 'Test 11');
test(maximizeSquareHoleArea(8, 6, [2, 3, 5, 7, 8], [2, 4, 6]), 4, 'Test 12');
test(maximizeSquareHoleArea(100, 50, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [10, 20, 30, 40, 50]), 4, 'Test 13');
test(maximizeSquareHoleArea(20, 20, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 4, 'Test 14');
test(maximizeSquareHoleArea(20, 20, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 400, 'Test 15');
test(maximizeSquareHoleArea(6, 4, [2, 3, 4, 5, 6], [2, 4]), 4, 'Test 16');
test(maximizeSquareHoleArea(7, 6, [2, 4, 5, 7], [2, 4, 5]), 9, 'Test 17');
test(maximizeSquareHoleArea(3, 2, [2, 3], [2]), 4, 'Test 18');
test(maximizeSquareHoleArea(40, 30, [5, 6, 7, 8, 9, 10, 11, 12, 13, 14], [5, 7, 9, 11, 13, 15]), 4, 'Test 19');
test(maximizeSquareHoleArea(300, 200, [50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100], [40, 60, 80, 100, 120, 140, 160, 180, 200]), 4, 'Test 20');
test(maximizeSquareHoleArea(25, 25, [5, 10, 15, 20, 25], [5, 10, 15, 20, 25]), 4, 'Test 21');
test(maximizeSquareHoleArea(10, 10, [2, 3, 5, 7, 9], [2, 3, 5, 7, 9]), 9, 'Test 22');
test(maximizeSquareHoleArea(25, 25, [2, 5, 7, 10, 13, 15, 18, 20, 23], [3, 6, 9, 12, 15, 18, 21, 24]), 4, 'Test 23');
test(maximizeSquareHoleArea(9, 9, [2, 3, 5, 7, 8, 9], [2, 4, 6, 8]), 4, 'Test 24');
test(maximizeSquareHoleArea(9, 9, [3, 6, 9], [3, 6, 9]), 4, 'Test 25');
test(maximizeSquareHoleArea(50, 50, [10, 15, 20, 25, 30, 35, 40, 45, 50], [10, 15, 20, 25, 30, 35, 40, 45, 50]), 4, 'Test 26');
test(maximizeSquareHoleArea(200, 150, [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 4, 'Test 27');
test(maximizeSquareHoleArea(20, 15, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], [2, 4, 6, 8, 10, 12, 14]), 4, 'Test 28');
test(maximizeSquareHoleArea(100, 100, [2, 50, 51, 52, 100], [2, 50, 51, 52, 100]), 16, 'Test 29');
test(maximizeSquareHoleArea(10, 10, [3, 5, 7], [3, 5, 7]), 4, 'Test 30');
test(maximizeSquareHoleArea(3, 3, [2, 3], [2, 3, 4]), 9, 'Test 31');
test(maximizeSquareHoleArea(25, 20, [2, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25], [2, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]), 9, 'Test 32');
test(maximizeSquareHoleArea(30, 25, [6,12,18,24], [5,10,15,20]), 4, 'Test 33');
test(maximizeSquareHoleArea(10, 10, [2, 3, 5, 7, 9], [2, 4, 6, 8, 10]), 4, 'Test 34');
test(maximizeSquareHoleArea(8, 8, [2, 3, 5, 6, 7], [2, 3, 5, 6, 7]), 16, 'Test 35');
test(maximizeSquareHoleArea(5, 5, [2, 4, 5], [2, 4]), 4, 'Test 36');
test(maximizeSquareHoleArea(150, 100, [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38], [20, 30, 40, 50, 60, 70, 80, 90, 100]), 4, 'Test 37');
test(maximizeSquareHoleArea(6, 3, [2, 3, 4, 5], [2, 3]), 9, 'Test 38');
test(maximizeSquareHoleArea(50, 50, [2, 25, 26, 50], [2, 25, 26, 50]), 9, 'Test 39');
test(maximizeSquareHoleArea(50, 50, [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50], [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50]), 4, 'Test 40');
test(maximizeSquareHoleArea(5, 5, [2, 3, 4, 5], [2, 3, 4]), 16, 'Test 41');
test(maximizeSquareHoleArea(10, 20, [2, 3, 4, 5, 6], [5, 10, 15, 20]), 4, 'Test 42');
test(maximizeSquareHoleArea(15, 10, [3, 5, 7, 9, 11, 13, 15], [3, 5, 7, 9]), 4, 'Test 43');
test(maximizeSquareHoleArea(9, 9, [2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 5, 6, 7, 8, 9, 10]), 100, 'Test 44');
test(maximizeSquareHoleArea(7, 7, [3, 4, 5], [3, 4, 5]), 16, 'Test 45');
test(maximizeSquareHoleArea(30, 20, [2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 4, 6, 8, 10, 12]), 4, 'Test 46');
test(maximizeSquareHoleArea(5, 4, [2, 4, 5], [2, 4]), 4, 'Test 47');
test(maximizeSquareHoleArea(50, 50, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50]), 4, 'Test 48');
test(maximizeSquareHoleArea(10, 10, [2, 4, 6, 8], [2, 4, 6, 8]), 4, 'Test 49');
test(maximizeSquareHoleArea(7, 7, [2, 3, 5, 6], [2, 4, 5, 7]), 9, 'Test 50');
test(maximizeSquareHoleArea(7, 7, [3, 4, 5, 6], [3, 4, 5, 6]), 25, 'Test 51');
test(maximizeSquareHoleArea(10, 10, [2, 4, 6, 8, 10, 12], [2, 4, 6, 8, 10, 12]), 4, 'Test 52');
test(maximizeSquareHoleArea(10, 5, [3,4,5,7,8], [2,4,5,7]), 9, 'Test 53');
test(maximizeSquareHoleArea(9, 9, [2, 3, 5, 6, 8, 9], [2, 3, 5, 6, 8, 9]), 9, 'Test 54');
test(maximizeSquareHoleArea(12, 12, [2,4,6,8,10], [2,4,6,8,10]), 4, 'Test 55');
test(maximizeSquareHoleArea(15, 10, [2, 4, 6, 8, 10, 12, 14], [2, 4, 6, 8, 10]), 4, 'Test 56');
test(maximizeSquareHoleArea(10, 10, [2, 3, 4, 5], [2, 3, 4, 5]), 25, 'Test 57');
test(maximizeSquareHoleArea(7, 7, [3,5,6], [3,5,6]), 9, 'Test 58');
test(maximizeSquareHoleArea(25, 20, [5,10,15,20], [4,8,12,16]), 4, 'Test 59');
test(maximizeSquareHoleArea(100, 100, [10, 20, 30, 40, 50], [15, 25, 35, 45, 55]), 4, 'Test 60');
test(maximizeSquareHoleArea(8, 8, [2, 4, 6, 8], [2, 4, 6, 8]), 4, 'Test 61');
test(maximizeSquareHoleArea(6, 6, [2, 3, 4, 5], [2, 3, 4, 5]), 25, 'Test 62');
test(maximizeSquareHoleArea(3, 3, [2, 3, 4], [2, 3, 4]), 16, 'Test 63');
test(maximizeSquareHoleArea(4, 3, [2, 3, 4], [2, 3]), 9, 'Test 64');
test(maximizeSquareHoleArea(10, 10, [2, 4, 6, 8, 10], [2, 4, 6, 8, 10]), 4, 'Test 65');
test(maximizeSquareHoleArea(10, 8, [2, 4, 6, 8], [2, 4, 6, 8]), 4, 'Test 66');
test(maximizeSquareHoleArea(100, 100, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 4, 'Test 67');
test(maximizeSquareHoleArea(8, 6, [2,3,4,5,6,7,8], [2,3,4,5,6,7,8]), 64, 'Test 68');
test(maximizeSquareHoleArea(5, 4, [2, 3, 4], [2, 3, 4]), 16, 'Test 69');
test(maximizeSquareHoleArea(20, 15, [3, 6, 9, 12, 15, 18, 21], [3, 6, 9, 12, 15, 18]), 4, 'Test 70');
test(maximizeSquareHoleArea(12, 12, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 121, 'Test 71');
test(maximizeSquareHoleArea(7, 6, [2, 3, 4, 5, 6], [2, 3, 4, 5]), 25, 'Test 72');
test(maximizeSquareHoleArea(9, 9, [2, 3, 5, 7, 9], [2, 4, 6, 8]), 4, 'Test 73');
test(maximizeSquareHoleArea(15, 12, [2, 3, 5, 7, 9, 11, 13, 15], [2, 3, 5, 7, 9, 11, 13, 15]), 9, 'Test 74');
test(maximizeSquareHoleArea(15, 10, [5,6,7,8,9,10,12], [4,6,7,9,10,12,14]), 9, 'Test 75');
test(maximizeSquareHoleArea(3, 4, [2, 3], [2, 3, 4]), 9, 'Test 76');
test(maximizeSquareHoleArea(100, 100, [50,51,52,53,54], [50,51,52,53,54]), 36, 'Test 77');
test(maximizeSquareHoleArea(7, 3, [2, 3, 4, 5], [2, 3]), 9, 'Test 78');
test(maximizeSquareHoleArea(7, 7, [2, 3, 5, 6], [2, 3, 5, 6]), 9, 'Test 79');
test(maximizeSquareHoleArea(3, 3, [2, 3], [2, 3]), 9, 'Test 80');
test(maximizeSquareHoleArea(20, 30, [10, 12, 13, 15], [15, 16, 18, 20]), 9, 'Test 81');
test(maximizeSquareHoleArea(5, 5, [2, 3, 4], [2, 3, 4]), 16, 'Test 82');
test(maximizeSquareHoleArea(5, 4, [2,3,5], [2,3,4]), 9, 'Test 83');
test(maximizeSquareHoleArea(8, 7, [3, 5, 6], [3, 5, 6, 7]), 9, 'Test 84');
test(maximizeSquareHoleArea(15, 10, [2, 3, 5, 7, 9, 11, 13, 15], [2, 4, 6, 8, 10]), 4, 'Test 85');
test(maximizeSquareHoleArea(6, 5, [2, 3, 5], [2, 4, 5]), 9, 'Test 86');
test(maximizeSquareHoleArea(5, 4, [2, 3, 4], [2, 3]), 9, 'Test 87');
test(maximizeSquareHoleArea(12, 15, [2, 3, 4, 6, 8, 10, 12], [3, 5, 7, 9, 11, 13, 15]), 4, 'Test 88');
test(maximizeSquareHoleArea(1, 1, [], []), 4, 'Test 89');
test(maximizeSquareHoleArea(4, 2, [2, 3, 4], [2]), 4, 'Test 90');
test(maximizeSquareHoleArea(30, 40, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]), 961, 'Test 91');
test(maximizeSquareHoleArea(100, 100, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 4, 'Test 92');
test(maximizeSquareHoleArea(100, 50, [20, 22, 24, 26, 28, 30, 32, 34, 36, 38], [10, 15, 20, 25, 30, 35, 40]), 4, 'Test 93');
test(maximizeSquareHoleArea(10, 5, [3, 4, 5, 6], [3, 4]), 9, 'Test 94');
test(maximizeSquareHoleArea(5, 5, [2, 3, 4, 5, 6], [2, 3, 4, 5, 6]), 36, 'Test 95');
test(maximizeSquareHoleArea(4, 6, [2, 4], [2, 3, 4, 5, 6]), 4, 'Test 96');
test(maximizeSquareHoleArea(12, 12, [3, 6, 9, 12], [3, 6, 9, 12]), 4, 'Test 97');
test(maximizeSquareHoleArea(8, 6, [2, 3, 5, 6], [2, 4, 6]), 4, 'Test 98');
test(maximizeSquareHoleArea(9, 9, [2, 3, 4, 5, 6, 7, 8], [2, 3, 4, 5, 6, 7, 8]), 64, 'Test 99');
test(maximizeSquareHoleArea(15, 15, [3, 4, 5, 7, 8], [5, 6, 7, 9, 10]), 16, 'Test 100');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

