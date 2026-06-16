// Test: 2683. Neighboring Bitwise Xor
// 91 test cases from LeetCodeDataset
// Run: node test.js

const { doesValidArrayExist } = require("./solution");

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

console.log("\n2683. Neighboring Bitwise Xor\n");

test(doesValidArrayExist([0,0,0]), true, 'Test 1');
test(doesValidArrayExist([0,0,1,1]), true, 'Test 2');
test(doesValidArrayExist([0,1,1,0,1]), false, 'Test 3');
test(doesValidArrayExist([1,0,1,0]), true, 'Test 4');
test(doesValidArrayExist([0,1,0,1]), true, 'Test 5');
test(doesValidArrayExist([1,0,0,1]), true, 'Test 6');
test(doesValidArrayExist([0,1,1,0]), true, 'Test 7');
test(doesValidArrayExist([1]), false, 'Test 8');
test(doesValidArrayExist([0]), true, 'Test 9');
test(doesValidArrayExist([1,1,1,1,1]), false, 'Test 10');
test(doesValidArrayExist([1,0]), false, 'Test 11');
test(doesValidArrayExist([1,1,1,1]), true, 'Test 12');
test(doesValidArrayExist([1,0,1,0,1]), false, 'Test 13');
test(doesValidArrayExist([1,1]), true, 'Test 14');
test(doesValidArrayExist([0,1,0,1,0]), true, 'Test 15');
test(doesValidArrayExist([1,1,0]), true, 'Test 16');
test(doesValidArrayExist([0,0,1,1,0,0,1,1,0,0,1,1,0,0]), true, 'Test 17');
test(doesValidArrayExist([1,0,0,0,1,1,1,0,1,0,0,1,1]), false, 'Test 18');
test(doesValidArrayExist([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), true, 'Test 19');
test(doesValidArrayExist([0,0,1,0,1,0,1,0]), false, 'Test 20');
test(doesValidArrayExist([1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0]), true, 'Test 21');
test(doesValidArrayExist([0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0]), true, 'Test 22');
test(doesValidArrayExist([1,1,1,1,0,0,0,0,1,1,1,1]), true, 'Test 23');
test(doesValidArrayExist([0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 24');
test(doesValidArrayExist([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 25');
test(doesValidArrayExist([1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), false, 'Test 26');
test(doesValidArrayExist([0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1]), true, 'Test 27');
test(doesValidArrayExist([0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1]), true, 'Test 28');
test(doesValidArrayExist([0,0,0,0,0,0,0,0,0]), true, 'Test 29');
test(doesValidArrayExist([0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0]), false, 'Test 30');
test(doesValidArrayExist([1,1,0,1,0,1,0,1,0,1,0]), true, 'Test 31');
test(doesValidArrayExist([0,0,0,0,0,0,0,0]), true, 'Test 32');
test(doesValidArrayExist([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), true, 'Test 33');
test(doesValidArrayExist([0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 34');
test(doesValidArrayExist([1,0,1,0,1,0,1,0]), true, 'Test 35');
test(doesValidArrayExist([1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), false, 'Test 36');
test(doesValidArrayExist([1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0]), true, 'Test 37');
test(doesValidArrayExist([1,0,1,0,1,0,1,0,1]), false, 'Test 38');
test(doesValidArrayExist([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 39');
test(doesValidArrayExist([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), false, 'Test 40');
test(doesValidArrayExist([1,1,0,1,0,1,1,0]), false, 'Test 41');
test(doesValidArrayExist([0,1,1,0,0,1,1,0,0,1,1,0,0]), true, 'Test 42');
test(doesValidArrayExist([1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 43');
test(doesValidArrayExist([1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1]), true, 'Test 44');
test(doesValidArrayExist([1,1,1,0,0,0,1,1,1,0,0,0]), true, 'Test 45');
test(doesValidArrayExist([1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1]), false, 'Test 46');
test(doesValidArrayExist([1,0,0,1,0,0,1,0,0,1,0,0,1,0]), false, 'Test 47');
test(doesValidArrayExist([0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]), true, 'Test 48');
test(doesValidArrayExist([1,0,1,1,0,1,1,0]), false, 'Test 49');
test(doesValidArrayExist([1,0,1,0,1,0,1,0,1,0]), false, 'Test 50');
test(doesValidArrayExist([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), true, 'Test 51');
test(doesValidArrayExist([0,1,0,1,0,1,0,1,0,1]), false, 'Test 52');
test(doesValidArrayExist([0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0]), true, 'Test 53');
test(doesValidArrayExist([1,0,1,0,1,0,1,0,1,0,1,0,1,0]), false, 'Test 54');
test(doesValidArrayExist([1,1,1,0,0,0,1,1,1,0]), true, 'Test 55');
test(doesValidArrayExist([1,0,1,0,1,0,1,0,1,0,1,0,1]), false, 'Test 56');
test(doesValidArrayExist([1,1,1,1,1,0,0,0,0,0,1,1,1,1,1]), true, 'Test 57');
test(doesValidArrayExist([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), true, 'Test 58');
test(doesValidArrayExist([1,1,0,1,1,0,1,1,0,1]), false, 'Test 59');
test(doesValidArrayExist([0,1,1,0,0,1,1,0,0,1,1,0]), true, 'Test 60');
test(doesValidArrayExist([1,1,1,0,0,1,1,1,0,0,1,1,1]), false, 'Test 61');
test(doesValidArrayExist([1,0,1,0,1,0,1]), true, 'Test 62');
test(doesValidArrayExist([0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0]), true, 'Test 63');
test(doesValidArrayExist([1,1,0,0,1,1,0,0,1,1,0,0,1,1]), true, 'Test 64');
test(doesValidArrayExist([1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0]), false, 'Test 65');
test(doesValidArrayExist([1,1,0,0,1,1,0,0,1]), false, 'Test 66');
test(doesValidArrayExist([1,1,0,0,1,1,0,0,1,1]), true, 'Test 67');
test(doesValidArrayExist([1,1,1,0,0,0,1,1,1,0,0,0,1,1,1]), false, 'Test 68');
test(doesValidArrayExist([0,1,1,1,0,1,1,1,0,1,1,1,0,1,1]), false, 'Test 69');
test(doesValidArrayExist([0,1,0,1,0,1,0,1]), true, 'Test 70');
test(doesValidArrayExist([1,0,0,1,0,0,1,0,0,1]), true, 'Test 71');
test(doesValidArrayExist([1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1]), false, 'Test 72');
test(doesValidArrayExist([0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]), false, 'Test 73');
test(doesValidArrayExist([1,1,1,0,0,0,1,1,1,0,0,0,1]), false, 'Test 74');
test(doesValidArrayExist([0,1,1,1,0,0,0,1,1,1,0,0]), true, 'Test 75');
test(doesValidArrayExist([1,0,1,1,0,1,0,1,0,1]), true, 'Test 76');
test(doesValidArrayExist([0,1,0,1,0,1,0,1,0,1,0,1]), true, 'Test 77');
test(doesValidArrayExist([0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0]), true, 'Test 78');
test(doesValidArrayExist([1,1,0,0,1,1,0,0]), true, 'Test 79');
test(doesValidArrayExist([0,0,0,0,0,0,0,0,0,0]), true, 'Test 80');
test(doesValidArrayExist([1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1]), false, 'Test 81');
test(doesValidArrayExist([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), true, 'Test 82');
test(doesValidArrayExist([0,1,0,1,0,1,0,1,0,1,0]), false, 'Test 83');
test(doesValidArrayExist([0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), true, 'Test 84');
test(doesValidArrayExist([0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0]), true, 'Test 85');
test(doesValidArrayExist([1,0,1,0,1,0,1,0,1,0,1,0]), true, 'Test 86');
test(doesValidArrayExist([0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1]), true, 'Test 87');
test(doesValidArrayExist([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), false, 'Test 88');
test(doesValidArrayExist([1,1,1,1,0,0,0,0,1,1]), true, 'Test 89');
test(doesValidArrayExist([1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1]), true, 'Test 90');
test(doesValidArrayExist([1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1]), true, 'Test 91');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

