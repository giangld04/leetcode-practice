// Test: 858. Mirror Reflection
// 84 test cases from LeetCodeDataset
// Run: node test.js

const { mirrorReflection } = require("./solution");

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

console.log("\n858. Mirror Reflection\n");

test(mirrorReflection(2, 1), 2, 'Test 1');
test(mirrorReflection(10, 3), 2, 'Test 2');
test(mirrorReflection(6, 2), 1, 'Test 3');
test(mirrorReflection(4, 2), 2, 'Test 4');
test(mirrorReflection(10, 4), 0, 'Test 5');
test(mirrorReflection(5, 3), 1, 'Test 6');
test(mirrorReflection(3, 1), 1, 'Test 7');
test(mirrorReflection(7, 5), 1, 'Test 8');
test(mirrorReflection(5, 2), 0, 'Test 9');
test(mirrorReflection(6, 4), 0, 'Test 10');
test(mirrorReflection(10, 7), 2, 'Test 11');
test(mirrorReflection(72, 27), 2, 'Test 12');
test(mirrorReflection(75, 33), 1, 'Test 13');
test(mirrorReflection(500, 250), 2, 'Test 14');
test(mirrorReflection(720, 180), 2, 'Test 15');
test(mirrorReflection(999, 499), 1, 'Test 16');
test(mirrorReflection(999, 333), 1, 'Test 17');
test(mirrorReflection(999, 1), 1, 'Test 18');
test(mirrorReflection(997, 333), 1, 'Test 19');
test(mirrorReflection(450, 135), 2, 'Test 20');
test(mirrorReflection(500, 200), 0, 'Test 21');
test(mirrorReflection(500, 249), 2, 'Test 22');
test(mirrorReflection(64, 15), 2, 'Test 23');
test(mirrorReflection(999, 421), 1, 'Test 24');
test(mirrorReflection(1000, 333), 2, 'Test 25');
test(mirrorReflection(123, 45), 1, 'Test 26');
test(mirrorReflection(640, 160), 2, 'Test 27');
test(mirrorReflection(100, 37), 2, 'Test 28');
test(mirrorReflection(999, 998), 0, 'Test 29');
test(mirrorReflection(888, 352), 0, 'Test 30');
test(mirrorReflection(100, 33), 2, 'Test 31');
test(mirrorReflection(667, 222), 0, 'Test 32');
test(mirrorReflection(600, 150), 2, 'Test 33');
test(mirrorReflection(1000, 500), 2, 'Test 34');
test(mirrorReflection(300, 220), 1, 'Test 35');
test(mirrorReflection(85, 21), 1, 'Test 36');
test(mirrorReflection(199, 71), 1, 'Test 37');
test(mirrorReflection(987, 123), 1, 'Test 38');
test(mirrorReflection(500, 450), 2, 'Test 39');
test(mirrorReflection(800, 300), 2, 'Test 40');
test(mirrorReflection(97, 42), 0, 'Test 41');
test(mirrorReflection(550, 110), 1, 'Test 42');
test(mirrorReflection(999, 999), 1, 'Test 43');
test(mirrorReflection(360, 121), 2, 'Test 44');
test(mirrorReflection(81, 27), 1, 'Test 45');
test(mirrorReflection(777, 388), 0, 'Test 46');
test(mirrorReflection(600, 161), 2, 'Test 47');
test(mirrorReflection(720, 199), 2, 'Test 48');
test(mirrorReflection(625, 125), 1, 'Test 49');
test(mirrorReflection(997, 1), 1, 'Test 50');
test(mirrorReflection(400, 100), 2, 'Test 51');
test(mirrorReflection(45, 18), 0, 'Test 52');
test(mirrorReflection(725, 297), 1, 'Test 53');
test(mirrorReflection(750, 250), 1, 'Test 54');
test(mirrorReflection(20, 3), 2, 'Test 55');
test(mirrorReflection(501, 167), 1, 'Test 56');
test(mirrorReflection(880, 198), 2, 'Test 57');
test(mirrorReflection(450, 125), 2, 'Test 58');
test(mirrorReflection(777, 333), 1, 'Test 59');
test(mirrorReflection(120, 49), 2, 'Test 60');
test(mirrorReflection(450, 225), 2, 'Test 61');
test(mirrorReflection(450, 181), 2, 'Test 62');
test(mirrorReflection(25, 15), 1, 'Test 63');
test(mirrorReflection(999, 777), 1, 'Test 64');
test(mirrorReflection(450, 150), 1, 'Test 65');
test(mirrorReflection(15, 6), 0, 'Test 66');
test(mirrorReflection(50, 12), 0, 'Test 67');
test(mirrorReflection(700, 175), 2, 'Test 68');
test(mirrorReflection(555, 111), 1, 'Test 69');
test(mirrorReflection(819, 273), 1, 'Test 70');
test(mirrorReflection(256, 192), 2, 'Test 71');
test(mirrorReflection(100, 1), 2, 'Test 72');
test(mirrorReflection(80, 21), 2, 'Test 73');
test(mirrorReflection(99, 66), 0, 'Test 74');
test(mirrorReflection(576, 384), 0, 'Test 75');
test(mirrorReflection(200, 77), 2, 'Test 76');
test(mirrorReflection(500, 125), 2, 'Test 77');
test(mirrorReflection(729, 243), 1, 'Test 78');
test(mirrorReflection(600, 400), 0, 'Test 79');
test(mirrorReflection(450, 113), 2, 'Test 80');
test(mirrorReflection(600, 200), 1, 'Test 81');
test(mirrorReflection(800, 150), 2, 'Test 82');
test(mirrorReflection(256, 128), 2, 'Test 83');
test(mirrorReflection(256, 93), 2, 'Test 84');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

