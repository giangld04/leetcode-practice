// Test: 2427. Number Of Common Factors
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { commonFactors } = require("./solution");

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

console.log("\n2427. Number Of Common Factors\n");

test(commonFactors(7, 13), 1, 'Test 1');
test(commonFactors(500, 500), 12, 'Test 2');
test(commonFactors(42, 56), 4, 'Test 3');
test(commonFactors(999, 1000), 1, 'Test 4');
test(commonFactors(77, 14), 2, 'Test 5');
test(commonFactors(98, 42), 4, 'Test 6');
test(commonFactors(77, 143), 2, 'Test 7');
test(commonFactors(12, 6), 4, 'Test 8');
test(commonFactors(500, 250), 8, 'Test 9');
test(commonFactors(25, 30), 2, 'Test 10');
test(commonFactors(500, 200), 9, 'Test 11');
test(commonFactors(100, 10), 4, 'Test 12');
test(commonFactors(1, 1), 1, 'Test 13');
test(commonFactors(60, 120), 12, 'Test 14');
test(commonFactors(7, 14), 2, 'Test 15');
test(commonFactors(49, 7), 2, 'Test 16');
test(commonFactors(1000, 1000), 16, 'Test 17');
test(commonFactors(81, 27), 4, 'Test 18');
test(commonFactors(999, 333), 6, 'Test 19');
test(commonFactors(2, 3), 1, 'Test 20');
test(commonFactors(987, 651), 4, 'Test 21');
test(commonFactors(315, 105), 8, 'Test 22');
test(commonFactors(600, 400), 12, 'Test 23');
test(commonFactors(675, 900), 9, 'Test 24');
test(commonFactors(675, 375), 6, 'Test 25');
test(commonFactors(777, 111), 4, 'Test 26');
test(commonFactors(789, 321), 2, 'Test 27');
test(commonFactors(456, 123), 2, 'Test 28');
test(commonFactors(360, 180), 18, 'Test 29');
test(commonFactors(221, 143), 2, 'Test 30');
test(commonFactors(504, 1008), 24, 'Test 31');
test(commonFactors(840, 420), 24, 'Test 32');
test(commonFactors(495, 135), 6, 'Test 33');
test(commonFactors(999, 111), 4, 'Test 34');
test(commonFactors(999, 891), 4, 'Test 35');
test(commonFactors(543, 234), 2, 'Test 36');
test(commonFactors(960, 720), 20, 'Test 37');
test(commonFactors(777, 222), 4, 'Test 38');
test(commonFactors(500, 1000), 12, 'Test 39');
test(commonFactors(987, 654), 2, 'Test 40');
test(commonFactors(450, 150), 12, 'Test 41');
test(commonFactors(560, 315), 4, 'Test 42');
test(commonFactors(420, 560), 12, 'Test 43');
test(commonFactors(840, 1008), 16, 'Test 44');
test(commonFactors(432, 504), 12, 'Test 45');
test(commonFactors(100, 150), 6, 'Test 46');
test(commonFactors(420, 168), 12, 'Test 47');
test(commonFactors(729, 243), 6, 'Test 48');
test(commonFactors(400, 500), 9, 'Test 49');
test(commonFactors(504, 252), 18, 'Test 50');
test(commonFactors(500, 100), 9, 'Test 51');
test(commonFactors(495, 363), 4, 'Test 52');
test(commonFactors(84, 105), 4, 'Test 53');
test(commonFactors(315, 135), 6, 'Test 54');
test(commonFactors(729, 2187), 7, 'Test 55');
test(commonFactors(48, 180), 6, 'Test 56');
test(commonFactors(333, 111), 4, 'Test 57');
test(commonFactors(121, 220), 2, 'Test 58');
test(commonFactors(1024, 512), 10, 'Test 59');
test(commonFactors(560, 240), 10, 'Test 60');
test(commonFactors(143, 169), 2, 'Test 61');
test(commonFactors(440, 88), 8, 'Test 62');
test(commonFactors(441, 147), 6, 'Test 63');
test(commonFactors(675, 225), 9, 'Test 64');
test(commonFactors(560, 840), 16, 'Test 65');
test(commonFactors(729, 81), 5, 'Test 66');
test(commonFactors(500, 400), 9, 'Test 67');
test(commonFactors(210, 140), 8, 'Test 68');
test(commonFactors(576, 288), 18, 'Test 69');
test(commonFactors(777, 555), 4, 'Test 70');
test(commonFactors(220, 88), 6, 'Test 71');
test(commonFactors(720, 540), 18, 'Test 72');
test(commonFactors(882, 147), 6, 'Test 73');
test(commonFactors(210, 420), 16, 'Test 74');
test(commonFactors(987, 329), 4, 'Test 75');
test(commonFactors(1024, 256), 9, 'Test 76');
test(commonFactors(675, 1025), 3, 'Test 77');
test(commonFactors(882, 630), 12, 'Test 78');
test(commonFactors(840, 1050), 16, 'Test 79');
test(commonFactors(890, 345), 2, 'Test 80');
test(commonFactors(462, 231), 8, 'Test 81');
test(commonFactors(84, 28), 6, 'Test 82');
test(commonFactors(450, 180), 12, 'Test 83');
test(commonFactors(504, 168), 16, 'Test 84');
test(commonFactors(100, 200), 9, 'Test 85');
test(commonFactors(400, 160), 10, 'Test 86');
test(commonFactors(1000, 750), 8, 'Test 87');
test(commonFactors(840, 700), 12, 'Test 88');
test(commonFactors(456, 342), 8, 'Test 89');
test(commonFactors(650, 260), 8, 'Test 90');
test(commonFactors(101, 103), 1, 'Test 91');
test(commonFactors(128, 256), 8, 'Test 92');
test(commonFactors(1234, 456), 2, 'Test 93');
test(commonFactors(987, 323), 1, 'Test 94');
test(commonFactors(729, 486), 6, 'Test 95');
test(commonFactors(987, 567), 4, 'Test 96');
test(commonFactors(600, 750), 12, 'Test 97');
test(commonFactors(987, 399), 4, 'Test 98');
test(commonFactors(360, 720), 24, 'Test 99');
test(commonFactors(882, 98), 6, 'Test 100');
test(commonFactors(612, 468), 9, 'Test 101');
test(commonFactors(360, 240), 16, 'Test 102');
test(commonFactors(900, 450), 18, 'Test 103');
test(commonFactors(960, 480), 24, 'Test 104');
test(commonFactors(504, 756), 18, 'Test 105');
test(commonFactors(1000, 900), 9, 'Test 106');
test(commonFactors(678, 456), 4, 'Test 107');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

