// Test: 1486. Xor Operation In An Array
// 92 test cases from LeetCodeDataset
// Run: node test.js

const { xorOperation } = require("./solution");

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

console.log("\n1486. Xor Operation In An Array\n");

test(xorOperation(4, 3), 8, 'Test 1');
test(xorOperation(8, 12), 0, 'Test 2');
test(xorOperation(7, 2), 0, 'Test 3');
test(xorOperation(3, 2), 0, 'Test 4');
test(xorOperation(10, 1), 2, 'Test 5');
test(xorOperation(5, 0), 8, 'Test 6');
test(xorOperation(1, 7), 7, 'Test 7');
test(xorOperation(10, 5), 2, 'Test 8');
test(xorOperation(8, 2), 16, 'Test 9');
test(xorOperation(7, 5), 19, 'Test 10');
test(xorOperation(1, 5), 5, 'Test 11');
test(xorOperation(10, 999), 30, 'Test 12');
test(xorOperation(50, 25), 2, 'Test 13');
test(xorOperation(100, 200), 0, 'Test 14');
test(xorOperation(15, 2), 0, 'Test 15');
test(xorOperation(33, 17), 81, 'Test 16');
test(xorOperation(12, 8), 0, 'Test 17');
test(xorOperation(750, 10), 1518, 'Test 18');
test(xorOperation(750, 50), 1598, 'Test 19');
test(xorOperation(3, 333), 339, 'Test 20');
test(xorOperation(666, 333), 2, 'Test 21');
test(xorOperation(500, 250), 1048, 'Test 22');
test(xorOperation(12, 3), 24, 'Test 23');
test(xorOperation(9, 1), 17, 'Test 24');
test(xorOperation(50, 10), 102, 'Test 25');
test(xorOperation(6, 999), 22, 'Test 26');
test(xorOperation(8, 11), 16, 'Test 27');
test(xorOperation(64, 42), 128, 'Test 28');
test(xorOperation(15, 7), 5, 'Test 29');
test(xorOperation(80, 600), 0, 'Test 30');
test(xorOperation(250, 100), 2, 'Test 31');
test(xorOperation(20, 10), 56, 'Test 32');
test(xorOperation(30, 42), 78, 'Test 33');
test(xorOperation(7, 25), 39, 'Test 34');
test(xorOperation(256, 128), 0, 'Test 35');
test(xorOperation(400, 400), 0, 'Test 36');
test(xorOperation(11, 8), 30, 'Test 37');
test(xorOperation(100, 250), 312, 'Test 38');
test(xorOperation(20, 11), 56, 'Test 39');
test(xorOperation(500, 750), 1080, 'Test 40');
test(xorOperation(500, 500), 0, 'Test 41');
test(xorOperation(700, 600), 0, 'Test 42');
test(xorOperation(60, 8), 0, 'Test 43');
test(xorOperation(100, 999), 1864, 'Test 44');
test(xorOperation(250, 250), 534, 'Test 45');
test(xorOperation(8, 15), 16, 'Test 46');
test(xorOperation(18, 4), 2, 'Test 47');
test(xorOperation(1000, 0), 0, 'Test 48');
test(xorOperation(333, 256), 920, 'Test 49');
test(xorOperation(75, 300), 450, 'Test 50');
test(xorOperation(128, 99), 256, 'Test 51');
test(xorOperation(500, 999), 1064, 'Test 52');
test(xorOperation(100, 50), 200, 'Test 53');
test(xorOperation(50, 50), 166, 'Test 54');
test(xorOperation(250, 123), 534, 'Test 55');
test(xorOperation(999, 0), 1998, 'Test 56');
test(xorOperation(999, 500), 2498, 'Test 57');
test(xorOperation(25, 6), 6, 'Test 58');
test(xorOperation(64, 32), 0, 'Test 59');
test(xorOperation(20, 12), 0, 'Test 60');
test(xorOperation(50, 100), 2, 'Test 61');
test(xorOperation(8, 1), 0, 'Test 62');
test(xorOperation(30, 15), 70, 'Test 63');
test(xorOperation(9, 7), 7, 'Test 64');
test(xorOperation(13, 11), 11, 'Test 65');
test(xorOperation(20, 3), 40, 'Test 66');
test(xorOperation(100, 25), 0, 'Test 67');
test(xorOperation(500, 0), 0, 'Test 68');
test(xorOperation(120, 750), 304, 'Test 69');
test(xorOperation(7, 1), 15, 'Test 70');
test(xorOperation(15, 12), 42, 'Test 71');
test(xorOperation(50, 0), 2, 'Test 72');
test(xorOperation(1000, 1), 0, 'Test 73');
test(xorOperation(333, 222), 222, 'Test 74');
test(xorOperation(20, 15), 56, 'Test 75');
test(xorOperation(7, 14), 12, 'Test 76');
test(xorOperation(1000, 1000), 0, 'Test 77');
test(xorOperation(800, 150), 1600, 'Test 78');
test(xorOperation(300, 300), 0, 'Test 79');
test(xorOperation(8, 100), 0, 'Test 80');
test(xorOperation(7, 17), 31, 'Test 81');
test(xorOperation(7, 10), 8, 'Test 82');
test(xorOperation(666, 128), 2, 'Test 83');
test(xorOperation(20, 2), 40, 'Test 84');
test(xorOperation(300, 600), 0, 'Test 85');
test(xorOperation(12, 42), 104, 'Test 86');
test(xorOperation(40, 0), 0, 'Test 87');
test(xorOperation(20, 0), 0, 'Test 88');
test(xorOperation(80, 12), 0, 'Test 89');
test(xorOperation(300, 450), 1496, 'Test 90');
test(xorOperation(999, 1), 1999, 'Test 91');
test(xorOperation(600, 300), 0, 'Test 92');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

