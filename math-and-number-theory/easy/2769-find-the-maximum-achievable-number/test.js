// Test: 2769. Find The Maximum Achievable Number
// 82 test cases from LeetCodeDataset
// Run: node test.js

const { theMaximumAchievableX } = require("./solution");

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

console.log("\n2769. Find The Maximum Achievable Number\n");

test(theMaximumAchievableX(1, 50), 101, 'Test 1');
test(theMaximumAchievableX(10, 5), 20, 'Test 2');
test(theMaximumAchievableX(50, 50), 150, 'Test 3');
test(theMaximumAchievableX(1, 1), 3, 'Test 4');
test(theMaximumAchievableX(25, 25), 75, 'Test 5');
test(theMaximumAchievableX(3, 2), 7, 'Test 6');
test(theMaximumAchievableX(4, 1), 6, 'Test 7');
test(theMaximumAchievableX(25, 10), 45, 'Test 8');
test(theMaximumAchievableX(2, 45), 92, 'Test 9');
test(theMaximumAchievableX(28, 12), 52, 'Test 10');
test(theMaximumAchievableX(42, 15), 72, 'Test 11');
test(theMaximumAchievableX(45, 4), 53, 'Test 12');
test(theMaximumAchievableX(35, 28), 91, 'Test 13');
test(theMaximumAchievableX(7, 20), 47, 'Test 14');
test(theMaximumAchievableX(40, 1), 42, 'Test 15');
test(theMaximumAchievableX(27, 15), 57, 'Test 16');
test(theMaximumAchievableX(30, 15), 60, 'Test 17');
test(theMaximumAchievableX(28, 28), 84, 'Test 18');
test(theMaximumAchievableX(18, 49), 116, 'Test 19');
test(theMaximumAchievableX(29, 17), 63, 'Test 20');
test(theMaximumAchievableX(30, 29), 88, 'Test 21');
test(theMaximumAchievableX(35, 10), 55, 'Test 22');
test(theMaximumAchievableX(8, 8), 24, 'Test 23');
test(theMaximumAchievableX(49, 50), 149, 'Test 24');
test(theMaximumAchievableX(30, 45), 120, 'Test 25');
test(theMaximumAchievableX(28, 30), 88, 'Test 26');
test(theMaximumAchievableX(20, 35), 90, 'Test 27');
test(theMaximumAchievableX(5, 50), 105, 'Test 28');
test(theMaximumAchievableX(10, 40), 90, 'Test 29');
test(theMaximumAchievableX(29, 15), 59, 'Test 30');
test(theMaximumAchievableX(33, 18), 69, 'Test 31');
test(theMaximumAchievableX(27, 30), 87, 'Test 32');
test(theMaximumAchievableX(40, 10), 60, 'Test 33');
test(theMaximumAchievableX(2, 25), 52, 'Test 34');
test(theMaximumAchievableX(45, 15), 75, 'Test 35');
test(theMaximumAchievableX(23, 48), 119, 'Test 36');
test(theMaximumAchievableX(49, 10), 69, 'Test 37');
test(theMaximumAchievableX(20, 45), 110, 'Test 38');
test(theMaximumAchievableX(15, 45), 105, 'Test 39');
test(theMaximumAchievableX(12, 10), 32, 'Test 40');
test(theMaximumAchievableX(2, 30), 62, 'Test 41');
test(theMaximumAchievableX(12, 40), 92, 'Test 42');
test(theMaximumAchievableX(37, 30), 97, 'Test 43');
test(theMaximumAchievableX(7, 7), 21, 'Test 44');
test(theMaximumAchievableX(1, 20), 41, 'Test 45');
test(theMaximumAchievableX(7, 43), 93, 'Test 46');
test(theMaximumAchievableX(20, 1), 22, 'Test 47');
test(theMaximumAchievableX(10, 1), 12, 'Test 48');
test(theMaximumAchievableX(42, 9), 60, 'Test 49');
test(theMaximumAchievableX(45, 20), 85, 'Test 50');
test(theMaximumAchievableX(45, 45), 135, 'Test 51');
test(theMaximumAchievableX(45, 10), 65, 'Test 52');
test(theMaximumAchievableX(1, 25), 51, 'Test 53');
test(theMaximumAchievableX(30, 25), 80, 'Test 54');
test(theMaximumAchievableX(5, 30), 65, 'Test 55');
test(theMaximumAchievableX(45, 1), 47, 'Test 56');
test(theMaximumAchievableX(12, 38), 88, 'Test 57');
test(theMaximumAchievableX(15, 20), 55, 'Test 58');
test(theMaximumAchievableX(20, 30), 80, 'Test 59');
test(theMaximumAchievableX(7, 35), 77, 'Test 60');
test(theMaximumAchievableX(50, 2), 54, 'Test 61');
test(theMaximumAchievableX(40, 5), 50, 'Test 62');
test(theMaximumAchievableX(35, 15), 65, 'Test 63');
test(theMaximumAchievableX(27, 27), 81, 'Test 64');
test(theMaximumAchievableX(22, 35), 92, 'Test 65');
test(theMaximumAchievableX(50, 25), 100, 'Test 66');
test(theMaximumAchievableX(49, 25), 99, 'Test 67');
test(theMaximumAchievableX(2, 40), 82, 'Test 68');
test(theMaximumAchievableX(15, 30), 75, 'Test 69');
test(theMaximumAchievableX(30, 30), 90, 'Test 70');
test(theMaximumAchievableX(33, 15), 63, 'Test 71');
test(theMaximumAchievableX(35, 18), 71, 'Test 72');
test(theMaximumAchievableX(15, 40), 95, 'Test 73');
test(theMaximumAchievableX(23, 3), 29, 'Test 74');
test(theMaximumAchievableX(40, 20), 80, 'Test 75');
test(theMaximumAchievableX(30, 20), 70, 'Test 76');
test(theMaximumAchievableX(33, 17), 67, 'Test 77');
test(theMaximumAchievableX(7, 25), 57, 'Test 78');
test(theMaximumAchievableX(47, 5), 57, 'Test 79');
test(theMaximumAchievableX(50, 1), 52, 'Test 80');
test(theMaximumAchievableX(29, 21), 71, 'Test 81');
test(theMaximumAchievableX(20, 25), 70, 'Test 82');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

