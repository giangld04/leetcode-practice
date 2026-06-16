// Test: 458. Poor Pigs
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { poorPigs } = require("./solution");

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

console.log("\n458. Poor Pigs\n");

test(poorPigs(4, 15, 15), 2, 'Test 1');
test(poorPigs(1, 1, 1), 0, 'Test 2');
test(poorPigs(1000, 1, 100), 2, 'Test 3');
test(poorPigs(4, 15, 30), 2, 'Test 4');
test(poorPigs(1, 10, 10), 0, 'Test 5');
test(poorPigs(8, 10, 40), 2, 'Test 6');
test(poorPigs(10, 5, 10), 3, 'Test 7');
test(poorPigs(1, 10, 100), 0, 'Test 8');
test(poorPigs(1000, 1, 1), 10, 'Test 9');
test(poorPigs(10, 5, 20), 2, 'Test 10');
test(poorPigs(100, 10, 60), 3, 'Test 11');
test(poorPigs(10, 5, 25), 2, 'Test 12');
test(poorPigs(8, 10, 30), 2, 'Test 13');
test(poorPigs(1024, 1, 10), 3, 'Test 14');
test(poorPigs(9, 25, 75), 2, 'Test 15');
test(poorPigs(27, 3, 9), 3, 'Test 16');
test(poorPigs(500, 5, 20), 4, 'Test 17');
test(poorPigs(81, 2, 4), 4, 'Test 18');
test(poorPigs(250, 25, 100), 4, 'Test 19');
test(poorPigs(625, 20, 100), 4, 'Test 20');
test(poorPigs(625, 10, 30), 5, 'Test 21');
test(poorPigs(3125, 5, 20), 5, 'Test 22');
test(poorPigs(999, 1, 99), 2, 'Test 23');
test(poorPigs(243, 1, 5), 4, 'Test 24');
test(poorPigs(1296, 6, 18), 6, 'Test 25');
test(poorPigs(243, 18, 90), 4, 'Test 26');
test(poorPigs(729, 3, 9), 5, 'Test 27');
test(poorPigs(512, 5, 25), 4, 'Test 28');
test(poorPigs(64, 4, 16), 3, 'Test 29');
test(poorPigs(256, 5, 10), 6, 'Test 30');
test(poorPigs(350, 7, 35), 4, 'Test 31');
test(poorPigs(500, 20, 100), 4, 'Test 32');
test(poorPigs(343, 7, 21), 5, 'Test 33');
test(poorPigs(128, 8, 32), 4, 'Test 34');
test(poorPigs(64, 2, 6), 3, 'Test 35');
test(poorPigs(81, 9, 27), 4, 'Test 36');
test(poorPigs(125, 25, 125), 3, 'Test 37');
test(poorPigs(450, 12, 60), 4, 'Test 38');
test(poorPigs(441, 20, 60), 5, 'Test 39');
test(poorPigs(3125, 15, 60), 5, 'Test 40');
test(poorPigs(512, 15, 30), 6, 'Test 41');
test(poorPigs(729, 9, 27), 5, 'Test 42');
test(poorPigs(216, 10, 50), 3, 'Test 43');
test(poorPigs(27, 1, 3), 3, 'Test 44');
test(poorPigs(243, 9, 27), 4, 'Test 45');
test(poorPigs(1024, 4, 12), 5, 'Test 46');
test(poorPigs(512, 5, 20), 4, 'Test 47');
test(poorPigs(81, 30, 90), 4, 'Test 48');
test(poorPigs(512, 2, 10), 4, 'Test 49');
test(poorPigs(128, 15, 60), 4, 'Test 50');
test(poorPigs(300, 3, 9), 5, 'Test 51');
test(poorPigs(999, 2, 20), 3, 'Test 52');
test(poorPigs(999, 1, 10), 3, 'Test 53');
test(poorPigs(16, 4, 16), 2, 'Test 54');
test(poorPigs(343, 7, 42), 3, 'Test 55');
test(poorPigs(343, 2, 14), 3, 'Test 56');
test(poorPigs(125, 5, 25), 3, 'Test 57');
test(poorPigs(9, 3, 9), 2, 'Test 58');
test(poorPigs(600, 10, 50), 4, 'Test 59');
test(poorPigs(750, 20, 100), 4, 'Test 60');
test(poorPigs(216, 6, 30), 3, 'Test 61');
test(poorPigs(961, 30, 90), 5, 'Test 62');
test(poorPigs(125, 10, 50), 3, 'Test 63');
test(poorPigs(256, 15, 75), 4, 'Test 64');
test(poorPigs(800, 15, 75), 4, 'Test 65');
test(poorPigs(729, 10, 30), 5, 'Test 66');
test(poorPigs(750, 15, 45), 5, 'Test 67');
test(poorPigs(100, 1, 10), 2, 'Test 68');
test(poorPigs(500, 5, 30), 4, 'Test 69');
test(poorPigs(500, 5, 25), 4, 'Test 70');
test(poorPigs(1024, 10, 40), 5, 'Test 71');
test(poorPigs(9, 3, 6), 2, 'Test 72');
test(poorPigs(27, 6, 18), 3, 'Test 73');
test(poorPigs(27, 5, 15), 3, 'Test 74');
test(poorPigs(256, 10, 40), 4, 'Test 75');
test(poorPigs(81, 4, 16), 3, 'Test 76');
test(poorPigs(441, 7, 49), 3, 'Test 77');
test(poorPigs(441, 14, 70), 4, 'Test 78');
test(poorPigs(64, 20, 100), 3, 'Test 79');
test(poorPigs(256, 1, 7), 3, 'Test 80');
test(poorPigs(999, 2, 4), 7, 'Test 81');
test(poorPigs(81, 10, 50), 3, 'Test 82');
test(poorPigs(64, 1, 6), 3, 'Test 83');
test(poorPigs(128, 2, 16), 3, 'Test 84');
test(poorPigs(999, 2, 100), 2, 'Test 85');
test(poorPigs(1024, 8, 32), 5, 'Test 86');
test(poorPigs(81, 3, 9), 4, 'Test 87');
test(poorPigs(81, 5, 15), 4, 'Test 88');
test(poorPigs(125, 5, 20), 3, 'Test 89');
test(poorPigs(961, 6, 36), 4, 'Test 90');
test(poorPigs(729, 1, 5), 4, 'Test 91');
test(poorPigs(169, 13, 39), 4, 'Test 92');
test(poorPigs(750, 10, 50), 4, 'Test 93');
test(poorPigs(625, 10, 40), 4, 'Test 94');
test(poorPigs(256, 4, 16), 4, 'Test 95');
test(poorPigs(256, 15, 45), 4, 'Test 96');
test(poorPigs(729, 12, 36), 5, 'Test 97');
test(poorPigs(3125, 4, 20), 5, 'Test 98');
test(poorPigs(200, 4, 20), 3, 'Test 99');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

