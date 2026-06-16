// Test: 3100. Water Bottles Ii
// 86 test cases from LeetCodeDataset
// Run: node test.js

const { maxBottlesDrunk } = require("./solution");

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

console.log("\n3100. Water Bottles Ii\n");

test(maxBottlesDrunk(10, 3), 13, 'Test 1');
test(maxBottlesDrunk(2, 3), 2, 'Test 2');
test(maxBottlesDrunk(13, 6), 15, 'Test 3');
test(maxBottlesDrunk(100, 1), 114, 'Test 4');
test(maxBottlesDrunk(5, 5), 6, 'Test 5');
test(maxBottlesDrunk(1, 1), 2, 'Test 6');
test(maxBottlesDrunk(20, 4), 24, 'Test 7');
test(maxBottlesDrunk(50, 10), 54, 'Test 8');
test(maxBottlesDrunk(1, 100), 1, 'Test 9');
test(maxBottlesDrunk(1, 10), 1, 'Test 10');
test(maxBottlesDrunk(99, 2), 112, 'Test 11');
test(maxBottlesDrunk(70, 6), 78, 'Test 12');
test(maxBottlesDrunk(60, 2), 70, 'Test 13');
test(maxBottlesDrunk(45, 20), 47, 'Test 14');
test(maxBottlesDrunk(60, 8), 66, 'Test 15');
test(maxBottlesDrunk(90, 9), 97, 'Test 16');
test(maxBottlesDrunk(80, 8), 87, 'Test 17');
test(maxBottlesDrunk(90, 18), 94, 'Test 18');
test(maxBottlesDrunk(75, 15), 79, 'Test 19');
test(maxBottlesDrunk(40, 50), 40, 'Test 20');
test(maxBottlesDrunk(30, 2), 37, 'Test 21');
test(maxBottlesDrunk(90, 5), 100, 'Test 22');
test(maxBottlesDrunk(55, 8), 60, 'Test 23');
test(maxBottlesDrunk(15, 15), 16, 'Test 24');
test(maxBottlesDrunk(40, 7), 44, 'Test 25');
test(maxBottlesDrunk(55, 6), 61, 'Test 26');
test(maxBottlesDrunk(80, 3), 91, 'Test 27');
test(maxBottlesDrunk(60, 15), 63, 'Test 28');
test(maxBottlesDrunk(60, 7), 66, 'Test 29');
test(maxBottlesDrunk(30, 5), 34, 'Test 30');
test(maxBottlesDrunk(80, 10), 86, 'Test 31');
test(maxBottlesDrunk(80, 20), 83, 'Test 32');
test(maxBottlesDrunk(95, 5), 105, 'Test 33');
test(maxBottlesDrunk(40, 12), 43, 'Test 34');
test(maxBottlesDrunk(40, 25), 41, 'Test 35');
test(maxBottlesDrunk(50, 5), 57, 'Test 36');
test(maxBottlesDrunk(85, 4), 95, 'Test 37');
test(maxBottlesDrunk(45, 12), 48, 'Test 38');
test(maxBottlesDrunk(25, 3), 30, 'Test 39');
test(maxBottlesDrunk(80, 5), 89, 'Test 40');
test(maxBottlesDrunk(45, 6), 50, 'Test 41');
test(maxBottlesDrunk(30, 7), 33, 'Test 42');
test(maxBottlesDrunk(7, 8), 7, 'Test 43');
test(maxBottlesDrunk(70, 8), 76, 'Test 44');
test(maxBottlesDrunk(75, 5), 84, 'Test 45');
test(maxBottlesDrunk(75, 7), 82, 'Test 46');
test(maxBottlesDrunk(85, 5), 94, 'Test 47');
test(maxBottlesDrunk(45, 10), 49, 'Test 48');
test(maxBottlesDrunk(30, 30), 31, 'Test 49');
test(maxBottlesDrunk(90, 4), 101, 'Test 50');
test(maxBottlesDrunk(40, 30), 41, 'Test 51');
test(maxBottlesDrunk(75, 10), 81, 'Test 52');
test(maxBottlesDrunk(100, 2), 113, 'Test 53');
test(maxBottlesDrunk(35, 18), 36, 'Test 54');
test(maxBottlesDrunk(55, 12), 59, 'Test 55');
test(maxBottlesDrunk(100, 50), 102, 'Test 56');
test(maxBottlesDrunk(8, 4), 10, 'Test 57');
test(maxBottlesDrunk(80, 15), 84, 'Test 58');
test(maxBottlesDrunk(60, 20), 62, 'Test 59');
test(maxBottlesDrunk(99, 3), 111, 'Test 60');
test(maxBottlesDrunk(99, 20), 103, 'Test 61');
test(maxBottlesDrunk(100, 20), 104, 'Test 62');
test(maxBottlesDrunk(3, 3), 4, 'Test 63');
test(maxBottlesDrunk(50, 1), 60, 'Test 64');
test(maxBottlesDrunk(70, 25), 72, 'Test 65');
test(maxBottlesDrunk(6, 6), 7, 'Test 66');
test(maxBottlesDrunk(65, 12), 69, 'Test 67');
test(maxBottlesDrunk(55, 20), 57, 'Test 68');
test(maxBottlesDrunk(25, 2), 31, 'Test 69');
test(maxBottlesDrunk(95, 7), 104, 'Test 70');
test(maxBottlesDrunk(45, 2), 53, 'Test 71');
test(maxBottlesDrunk(90, 25), 93, 'Test 72');
test(maxBottlesDrunk(95, 15), 100, 'Test 73');
test(maxBottlesDrunk(45, 4), 52, 'Test 74');
test(maxBottlesDrunk(99, 9), 107, 'Test 75');
test(maxBottlesDrunk(25, 7), 28, 'Test 76');
test(maxBottlesDrunk(30, 3), 36, 'Test 77');
test(maxBottlesDrunk(5, 2), 7, 'Test 78');
test(maxBottlesDrunk(60, 3), 69, 'Test 79');
test(maxBottlesDrunk(45, 3), 53, 'Test 80');
test(maxBottlesDrunk(25, 9), 27, 'Test 81');
test(maxBottlesDrunk(90, 6), 99, 'Test 82');
test(maxBottlesDrunk(90, 10), 97, 'Test 83');
test(maxBottlesDrunk(70, 7), 77, 'Test 84');
test(maxBottlesDrunk(90, 15), 95, 'Test 85');
test(maxBottlesDrunk(50, 2), 59, 'Test 86');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

