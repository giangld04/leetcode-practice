// Test: 2582. Pass The Pillow
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { passThePillow } = require("./solution");

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

console.log("\n2582. Pass The Pillow\n");

test(passThePillow(2, 5), 2, 'Test 1');
test(passThePillow(10, 15), 4, 'Test 2');
test(passThePillow(500, 750), 249, 'Test 3');
test(passThePillow(2, 1), 2, 'Test 4');
test(passThePillow(7, 20), 5, 'Test 5');
test(passThePillow(8, 20), 7, 'Test 6');
test(passThePillow(5, 7), 2, 'Test 7');
test(passThePillow(3, 2), 3, 'Test 8');
test(passThePillow(6, 12), 3, 'Test 9');
test(passThePillow(2, 2), 1, 'Test 10');
test(passThePillow(1000, 1000), 999, 'Test 11');
test(passThePillow(6, 1), 2, 'Test 12');
test(passThePillow(8, 12), 3, 'Test 13');
test(passThePillow(4, 5), 2, 'Test 14');
test(passThePillow(600, 800), 399, 'Test 15');
test(passThePillow(7, 49), 2, 'Test 16');
test(passThePillow(15, 500), 5, 'Test 17');
test(passThePillow(9, 50), 3, 'Test 18');
test(passThePillow(15, 120), 9, 'Test 19');
test(passThePillow(15, 100), 13, 'Test 20');
test(passThePillow(100, 800), 9, 'Test 21');
test(passThePillow(50, 1000), 21, 'Test 22');
test(passThePillow(499, 1002), 7, 'Test 23');
test(passThePillow(8, 45), 4, 'Test 24');
test(passThePillow(20, 150), 3, 'Test 25');
test(passThePillow(550, 725), 374, 'Test 26');
test(passThePillow(500, 2500), 495, 'Test 27');
test(passThePillow(15, 25), 4, 'Test 28');
test(passThePillow(12, 150), 5, 'Test 29');
test(passThePillow(499, 500), 497, 'Test 30');
test(passThePillow(12, 60), 7, 'Test 31');
test(passThePillow(15, 225), 2, 'Test 32');
test(passThePillow(200, 400), 3, 'Test 33');
test(passThePillow(999, 999), 998, 'Test 34');
test(passThePillow(7, 1000), 5, 'Test 35');
test(passThePillow(500, 1250), 253, 'Test 36');
test(passThePillow(10, 100), 9, 'Test 37');
test(passThePillow(20, 500), 7, 'Test 38');
test(passThePillow(999, 998), 999, 'Test 39');
test(passThePillow(6, 11), 2, 'Test 40');
test(passThePillow(250, 1000), 5, 'Test 41');
test(passThePillow(100, 150), 49, 'Test 42');
test(passThePillow(2, 1000), 1, 'Test 43');
test(passThePillow(1000, 2000), 3, 'Test 44');
test(passThePillow(12, 30), 9, 'Test 45');
test(passThePillow(850, 1500), 199, 'Test 46');
test(passThePillow(450, 999), 102, 'Test 47');
test(passThePillow(250, 1250), 245, 'Test 48');
test(passThePillow(450, 675), 224, 'Test 49');
test(passThePillow(100, 250), 53, 'Test 50');
test(passThePillow(3, 9), 2, 'Test 51');
test(passThePillow(450, 500), 399, 'Test 52');
test(passThePillow(150, 500), 97, 'Test 53');
test(passThePillow(18, 90), 13, 'Test 54');
test(passThePillow(6, 13), 4, 'Test 55');
test(passThePillow(12, 100), 11, 'Test 56');
test(passThePillow(2, 100), 1, 'Test 57');
test(passThePillow(250, 750), 247, 'Test 58');
test(passThePillow(9, 150), 7, 'Test 59');
test(passThePillow(20, 1000), 13, 'Test 60');
test(passThePillow(6, 30), 1, 'Test 61');
test(passThePillow(20, 199), 10, 'Test 62');
test(passThePillow(100, 500), 95, 'Test 63');
test(passThePillow(9, 40), 9, 'Test 64');
test(passThePillow(8, 31), 4, 'Test 65');
test(passThePillow(9, 25), 8, 'Test 66');
test(passThePillow(20, 50), 13, 'Test 67');
test(passThePillow(2, 2000), 1, 'Test 68');
test(passThePillow(333, 998), 331, 'Test 69');
test(passThePillow(8, 24), 5, 'Test 70');
test(passThePillow(10, 25), 8, 'Test 71');
test(passThePillow(30, 150), 25, 'Test 72');
test(passThePillow(3, 999), 2, 'Test 73');
test(passThePillow(999, 1998), 3, 'Test 74');
test(passThePillow(9, 81), 2, 'Test 75');
test(passThePillow(300, 550), 49, 'Test 76');
test(passThePillow(300, 600), 3, 'Test 77');
test(passThePillow(6, 101), 2, 'Test 78');
test(passThePillow(25, 625), 2, 'Test 79');
test(passThePillow(250, 1001), 6, 'Test 80');
test(passThePillow(9, 18), 3, 'Test 81');
test(passThePillow(1000, 999), 1000, 'Test 82');
test(passThePillow(5, 25), 2, 'Test 83');
test(passThePillow(12, 25), 4, 'Test 84');
test(passThePillow(600, 999), 200, 'Test 85');
test(passThePillow(8, 27), 2, 'Test 86');
test(passThePillow(999, 1000), 997, 'Test 87');
test(passThePillow(8, 100), 3, 'Test 88');
test(passThePillow(750, 2001), 504, 'Test 89');
test(passThePillow(2, 500), 1, 'Test 90');
test(passThePillow(8, 30), 3, 'Test 91');
test(passThePillow(600, 900), 299, 'Test 92');
test(passThePillow(25, 250), 11, 'Test 93');
test(passThePillow(500, 1001), 4, 'Test 94');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

