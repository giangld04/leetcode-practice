// Test: 887. Super Egg Drop
// 92 test cases from LeetCodeDataset
// Run: node test.js

const { superEggDrop } = require("./solution");

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

console.log("\n887. Super Egg Drop\n");

test(superEggDrop(2, 1), 1, 'Test 1');
test(superEggDrop(5, 1000), 11, 'Test 2');
test(superEggDrop(1, 100), 100, 'Test 3');
test(superEggDrop(1, 2), 2, 'Test 4');
test(superEggDrop(2, 6), 3, 'Test 5');
test(superEggDrop(50, 10000), 14, 'Test 6');
test(superEggDrop(10, 5000), 13, 'Test 7');
test(superEggDrop(10, 1000), 10, 'Test 8');
test(superEggDrop(2, 100), 14, 'Test 9');
test(superEggDrop(2, 1000), 45, 'Test 10');
test(superEggDrop(3, 5), 3, 'Test 11');
test(superEggDrop(100, 10000), 14, 'Test 12');
test(superEggDrop(3, 25), 5, 'Test 13');
test(superEggDrop(10, 10000), 14, 'Test 14');
test(superEggDrop(3, 14), 4, 'Test 15');
test(superEggDrop(1, 1), 1, 'Test 16');
test(superEggDrop(8, 9000), 14, 'Test 17');
test(superEggDrop(3, 20), 5, 'Test 18');
test(superEggDrop(7, 5000), 13, 'Test 19');
test(superEggDrop(3, 50), 7, 'Test 20');
test(superEggDrop(2, 10), 4, 'Test 21');
test(superEggDrop(10, 200), 8, 'Test 22');
test(superEggDrop(3, 1000), 19, 'Test 23');
test(superEggDrop(4, 25), 5, 'Test 24');
test(superEggDrop(24, 450), 9, 'Test 25');
test(superEggDrop(15, 3000), 12, 'Test 26');
test(superEggDrop(6, 3000), 13, 'Test 27');
test(superEggDrop(10, 500), 9, 'Test 28');
test(superEggDrop(50, 7500), 13, 'Test 29');
test(superEggDrop(20, 3000), 12, 'Test 30');
test(superEggDrop(5, 100), 7, 'Test 31');
test(superEggDrop(5, 5000), 16, 'Test 32');
test(superEggDrop(50, 750), 10, 'Test 33');
test(superEggDrop(75, 9000), 14, 'Test 34');
test(superEggDrop(70, 950), 10, 'Test 35');
test(superEggDrop(50, 1000), 10, 'Test 36');
test(superEggDrop(75, 9900), 14, 'Test 37');
test(superEggDrop(90, 9999), 14, 'Test 38');
test(superEggDrop(4, 2000), 16, 'Test 39');
test(superEggDrop(25, 8000), 13, 'Test 40');
test(superEggDrop(4, 20), 5, 'Test 41');
test(superEggDrop(25, 7500), 13, 'Test 42');
test(superEggDrop(4, 30), 5, 'Test 43');
test(superEggDrop(50, 7000), 13, 'Test 44');
test(superEggDrop(20, 4000), 12, 'Test 45');
test(superEggDrop(40, 650), 10, 'Test 46');
test(superEggDrop(60, 8000), 13, 'Test 47');
test(superEggDrop(8, 150), 8, 'Test 48');
test(superEggDrop(90, 10000), 14, 'Test 49');
test(superEggDrop(3, 1234), 20, 'Test 50');
test(superEggDrop(5, 10000), 18, 'Test 51');
test(superEggDrop(3, 100), 9, 'Test 52');
test(superEggDrop(25, 6000), 13, 'Test 53');
test(superEggDrop(25, 500), 9, 'Test 54');
test(superEggDrop(4, 4096), 19, 'Test 55');
test(superEggDrop(75, 10000), 14, 'Test 56');
test(superEggDrop(4, 256), 10, 'Test 57');
test(superEggDrop(5, 500), 10, 'Test 58');
test(superEggDrop(30, 550), 10, 'Test 59');
test(superEggDrop(60, 9500), 14, 'Test 60');
test(superEggDrop(75, 8000), 13, 'Test 61');
test(superEggDrop(10, 3000), 12, 'Test 62');
test(superEggDrop(50, 9000), 14, 'Test 63');
test(superEggDrop(10, 2000), 11, 'Test 64');
test(superEggDrop(60, 850), 10, 'Test 65');
test(superEggDrop(2, 32), 8, 'Test 66');
test(superEggDrop(80, 9999), 14, 'Test 67');
test(superEggDrop(5, 50), 6, 'Test 68');
test(superEggDrop(20, 8000), 13, 'Test 69');
test(superEggDrop(100, 5000), 13, 'Test 70');
test(superEggDrop(99, 9999), 14, 'Test 71');
test(superEggDrop(4, 100), 8, 'Test 72');
test(superEggDrop(4, 700), 12, 'Test 73');
test(superEggDrop(100, 9999), 14, 'Test 74');
test(superEggDrop(75, 7500), 13, 'Test 75');
test(superEggDrop(6, 2000), 12, 'Test 76');
test(superEggDrop(8, 4000), 13, 'Test 77');
test(superEggDrop(100, 1), 1, 'Test 78');
test(superEggDrop(8, 8192), 14, 'Test 79');
test(superEggDrop(8, 200), 8, 'Test 80');
test(superEggDrop(50, 5000), 13, 'Test 81');
test(superEggDrop(3, 250), 12, 'Test 82');
test(superEggDrop(90, 9000), 14, 'Test 83');
test(superEggDrop(90, 9500), 14, 'Test 84');
test(superEggDrop(2, 10000), 141, 'Test 85');
test(superEggDrop(12, 250), 8, 'Test 86');
test(superEggDrop(15, 5000), 13, 'Test 87');
test(superEggDrop(20, 9000), 14, 'Test 88');
test(superEggDrop(18, 350), 9, 'Test 89');
test(superEggDrop(6, 70), 7, 'Test 90');
test(superEggDrop(20, 5000), 13, 'Test 91');
test(superEggDrop(7, 3456), 13, 'Test 92');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

