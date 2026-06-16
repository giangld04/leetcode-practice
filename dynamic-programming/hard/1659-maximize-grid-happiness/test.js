// Test: 1659. Maximize Grid Happiness
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { getMaxGridHappiness } = require("./solution");

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

console.log("\n1659. Maximize Grid Happiness\n");

test(getMaxGridHappiness(5, 5, 6, 6), 1240, 'Test 1');
test(getMaxGridHappiness(1, 1, 0, 1), 40, 'Test 2');
test(getMaxGridHappiness(5, 1, 0, 0), 0, 'Test 3');
test(getMaxGridHappiness(2, 3, 1, 2), 240, 'Test 4');
test(getMaxGridHappiness(1, 1, 1, 0), 120, 'Test 5');
test(getMaxGridHappiness(4, 4, 6, 0), 720, 'Test 6');
test(getMaxGridHappiness(2, 2, 4, 0), 240, 'Test 7');
test(getMaxGridHappiness(3, 1, 2, 1), 260, 'Test 8');
test(getMaxGridHappiness(1, 1, 0, 0), 0, 'Test 9');
test(getMaxGridHappiness(5, 1, 0, 5), 360, 'Test 10');
test(getMaxGridHappiness(4, 4, 3, 3), 560, 'Test 11');
test(getMaxGridHappiness(5, 5, 3, 3), 560, 'Test 12');
test(getMaxGridHappiness(1, 5, 5, 0), 360, 'Test 13');
test(getMaxGridHappiness(4, 5, 3, 2), 480, 'Test 14');
test(getMaxGridHappiness(2, 5, 5, 5), 770, 'Test 15');
test(getMaxGridHappiness(3, 5, 0, 6), 520, 'Test 16');
test(getMaxGridHappiness(2, 5, 2, 4), 560, 'Test 17');
test(getMaxGridHappiness(2, 2, 6, 0), 240, 'Test 18');
test(getMaxGridHappiness(5, 2, 4, 2), 590, 'Test 19');
test(getMaxGridHappiness(3, 3, 4, 1), 520, 'Test 20');
test(getMaxGridHappiness(4, 3, 4, 3), 680, 'Test 21');
test(getMaxGridHappiness(5, 2, 5, 1), 620, 'Test 22');
test(getMaxGridHappiness(5, 2, 3, 2), 480, 'Test 23');
test(getMaxGridHappiness(5, 5, 0, 0), 0, 'Test 24');
test(getMaxGridHappiness(4, 4, 3, 4), 680, 'Test 25');
test(getMaxGridHappiness(4, 4, 1, 6), 640, 'Test 26');
test(getMaxGridHappiness(4, 4, 6, 6), 1140, 'Test 27');
test(getMaxGridHappiness(3, 2, 0, 6), 520, 'Test 28');
test(getMaxGridHappiness(5, 5, 6, 5), 1120, 'Test 29');
test(getMaxGridHappiness(4, 4, 2, 2), 360, 'Test 30');
test(getMaxGridHappiness(1, 5, 1, 4), 390, 'Test 31');
test(getMaxGridHappiness(4, 4, 4, 4), 800, 'Test 32');
test(getMaxGridHappiness(2, 5, 2, 3), 440, 'Test 33');
test(getMaxGridHappiness(5, 2, 4, 1), 520, 'Test 34');
test(getMaxGridHappiness(3, 5, 3, 3), 560, 'Test 35');
test(getMaxGridHappiness(2, 5, 2, 2), 360, 'Test 36');
test(getMaxGridHappiness(3, 3, 4, 3), 640, 'Test 37');
test(getMaxGridHappiness(3, 4, 2, 4), 560, 'Test 38');
test(getMaxGridHappiness(5, 3, 1, 4), 440, 'Test 39');
test(getMaxGridHappiness(4, 3, 2, 3), 440, 'Test 40');
test(getMaxGridHappiness(3, 2, 0, 3), 200, 'Test 41');
test(getMaxGridHappiness(5, 4, 3, 2), 480, 'Test 42');
test(getMaxGridHappiness(3, 3, 0, 6), 520, 'Test 43');
test(getMaxGridHappiness(3, 3, 5, 1), 610, 'Test 44');
test(getMaxGridHappiness(5, 1, 5, 1), 380, 'Test 45');
test(getMaxGridHappiness(5, 5, 5, 1), 640, 'Test 46');
test(getMaxGridHappiness(4, 4, 2, 4), 560, 'Test 47');
test(getMaxGridHappiness(4, 3, 5, 1), 640, 'Test 48');
test(getMaxGridHappiness(4, 2, 4, 2), 520, 'Test 49');
test(getMaxGridHappiness(5, 3, 2, 4), 560, 'Test 50');
test(getMaxGridHappiness(4, 3, 3, 3), 560, 'Test 51');
test(getMaxGridHappiness(3, 5, 3, 2), 480, 'Test 52');
test(getMaxGridHappiness(3, 3, 3, 3), 550, 'Test 53');
test(getMaxGridHappiness(4, 2, 3, 2), 470, 'Test 54');
test(getMaxGridHappiness(5, 3, 4, 2), 600, 'Test 55');
test(getMaxGridHappiness(4, 2, 2, 4), 550, 'Test 56');
test(getMaxGridHappiness(5, 3, 6, 0), 720, 'Test 57');
test(getMaxGridHappiness(5, 2, 0, 6), 520, 'Test 58');
test(getMaxGridHappiness(4, 2, 1, 5), 520, 'Test 59');
test(getMaxGridHappiness(4, 5, 1, 4), 440, 'Test 60');
test(getMaxGridHappiness(4, 4, 4, 3), 680, 'Test 61');
test(getMaxGridHappiness(4, 1, 2, 2), 340, 'Test 62');
test(getMaxGridHappiness(4, 3, 5, 2), 710, 'Test 63');
test(getMaxGridHappiness(5, 3, 3, 3), 560, 'Test 64');
test(getMaxGridHappiness(2, 5, 1, 5), 520, 'Test 65');
test(getMaxGridHappiness(5, 3, 3, 4), 680, 'Test 66');
test(getMaxGridHappiness(4, 4, 4, 2), 600, 'Test 67');
test(getMaxGridHappiness(4, 5, 6, 2), 840, 'Test 68');
test(getMaxGridHappiness(3, 4, 2, 3), 440, 'Test 69');
test(getMaxGridHappiness(3, 4, 0, 6), 520, 'Test 70');
test(getMaxGridHappiness(3, 3, 4, 4), 700, 'Test 71');
test(getMaxGridHappiness(2, 2, 2, 2), 280, 'Test 72');
test(getMaxGridHappiness(5, 4, 2, 3), 440, 'Test 73');
test(getMaxGridHappiness(3, 3, 6, 0), 600, 'Test 74');
test(getMaxGridHappiness(4, 3, 2, 4), 560, 'Test 75');
test(getMaxGridHappiness(5, 1, 5, 0), 360, 'Test 76');
test(getMaxGridHappiness(2, 4, 3, 2), 470, 'Test 77');
test(getMaxGridHappiness(2, 2, 0, 0), 0, 'Test 78');
test(getMaxGridHappiness(3, 3, 1, 1), 160, 'Test 79');
test(getMaxGridHappiness(1, 5, 3, 3), 420, 'Test 80');
test(getMaxGridHappiness(3, 3, 2, 2), 360, 'Test 81');
test(getMaxGridHappiness(3, 3, 2, 4), 550, 'Test 82');
test(getMaxGridHappiness(2, 2, 0, 1), 40, 'Test 83');
test(getMaxGridHappiness(2, 2, 0, 2), 120, 'Test 84');
test(getMaxGridHappiness(3, 3, 0, 0), 0, 'Test 85');
test(getMaxGridHappiness(3, 3, 2, 3), 440, 'Test 86');
test(getMaxGridHappiness(5, 2, 5, 5), 770, 'Test 87');
test(getMaxGridHappiness(5, 1, 3, 3), 420, 'Test 88');
test(getMaxGridHappiness(5, 2, 5, 0), 600, 'Test 89');
test(getMaxGridHappiness(4, 4, 2, 3), 440, 'Test 90');
test(getMaxGridHappiness(5, 1, 1, 0), 120, 'Test 91');
test(getMaxGridHappiness(2, 2, 1, 1), 160, 'Test 92');
test(getMaxGridHappiness(1, 5, 0, 5), 360, 'Test 93');
test(getMaxGridHappiness(4, 4, 0, 0), 0, 'Test 94');
test(getMaxGridHappiness(4, 4, 3, 2), 480, 'Test 95');
test(getMaxGridHappiness(4, 5, 5, 4), 920, 'Test 96');
test(getMaxGridHappiness(1, 1, 1, 1), 120, 'Test 97');
test(getMaxGridHappiness(5, 5, 1, 1), 160, 'Test 98');
test(getMaxGridHappiness(1, 5, 1, 0), 120, 'Test 99');
test(getMaxGridHappiness(1, 5, 0, 1), 40, 'Test 100');
test(getMaxGridHappiness(5, 1, 0, 1), 40, 'Test 101');
test(getMaxGridHappiness(2, 5, 3, 2), 480, 'Test 102');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

