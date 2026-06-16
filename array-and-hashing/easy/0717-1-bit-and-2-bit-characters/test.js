// Test: 717. 1 Bit And 2 Bit Characters
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { isOneBitCharacter } = require("./solution");

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

console.log("\n717. 1 Bit And 2 Bit Characters\n");

test(isOneBitCharacter([1,1,1,0]), false, 'Test 1');
test(isOneBitCharacter([0,0,0,0]), true, 'Test 2');
test(isOneBitCharacter([1,0,1,1,0]), true, 'Test 3');
test(isOneBitCharacter([0]), true, 'Test 4');
test(isOneBitCharacter([1,1,1,1,0]), true, 'Test 5');
test(isOneBitCharacter([1,0,1,1,0,0]), true, 'Test 6');
test(isOneBitCharacter([1,0,1,0]), false, 'Test 7');
test(isOneBitCharacter([1,0,0]), true, 'Test 8');
test(isOneBitCharacter([1,0,1,0,1,0]), false, 'Test 9');
test(isOneBitCharacter([1,1,1,0,0,0]), true, 'Test 10');
test(isOneBitCharacter([1,1,0,0]), true, 'Test 11');
test(isOneBitCharacter([1,0,0,1,0]), false, 'Test 12');
test(isOneBitCharacter([1,1,0,1,0]), false, 'Test 13');
test(isOneBitCharacter([1,1,1,1,1,0]), false, 'Test 14');
test(isOneBitCharacter([0,0,0,0,0]), true, 'Test 15');
test(isOneBitCharacter([1,0,0,1,0,0]), true, 'Test 16');
test(isOneBitCharacter([1,1,0,1,1,0]), true, 'Test 17');
test(isOneBitCharacter([0,1,1,0,0,1,0]), false, 'Test 18');
test(isOneBitCharacter([1,1,1,1,1,1,1,1,0]), true, 'Test 19');
test(isOneBitCharacter([1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0]), true, 'Test 20');
test(isOneBitCharacter([1,1,0,1,1,0,1,1,0,1,0,0]), true, 'Test 21');
test(isOneBitCharacter([1,0,1,0,1,1,0,0,0]), true, 'Test 22');
test(isOneBitCharacter([1,1,0,0,1,0,1,1,0,0]), true, 'Test 23');
test(isOneBitCharacter([1,0,1,1,0,1,1,0,1,0,1,1,0,1,0]), false, 'Test 24');
test(isOneBitCharacter([1,1,0,1,1,0,0]), true, 'Test 25');
test(isOneBitCharacter([1,0,1,0,1,0,1,0,0]), true, 'Test 26');
test(isOneBitCharacter([1,0,1,1,0,1,1,1,0,0]), true, 'Test 27');
test(isOneBitCharacter([0,0,0,0,0,0,0,0,0,0]), true, 'Test 28');
test(isOneBitCharacter([0,1,0,1,0,1,0,1,0,1,0,0]), true, 'Test 29');
test(isOneBitCharacter([1,0,1,0,1,1,0,1,0]), false, 'Test 30');
test(isOneBitCharacter([1,0,1,0,1,0,1,0,1,0,0]), true, 'Test 31');
test(isOneBitCharacter([1,0,1,0,1,0,1,0,1,0,1,0,0]), true, 'Test 32');
test(isOneBitCharacter([1,0,1,1,0,0,1,1,0,0]), true, 'Test 33');
test(isOneBitCharacter([1,1,1,1,0,1,1,1,0,1,0,0]), true, 'Test 34');
test(isOneBitCharacter([1,1,0,1,0,1,1,0]), true, 'Test 35');
test(isOneBitCharacter([1,1,0,1,0,1,0,0,1,1,0,0]), true, 'Test 36');
test(isOneBitCharacter([1,0,0,1,0,0,1,0,0,1,0,0]), true, 'Test 37');
test(isOneBitCharacter([1,1,1,1,1,1,1,1,0,1,0,0]), true, 'Test 38');
test(isOneBitCharacter([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0]), true, 'Test 39');
test(isOneBitCharacter([1,1,1,1,0,1,0,0]), true, 'Test 40');
test(isOneBitCharacter([1,1,0,1,0,0]), true, 'Test 41');
test(isOneBitCharacter([1,1,1,0,1,0,0]), true, 'Test 42');
test(isOneBitCharacter([1,1,1,0,0,1,1,0,0]), true, 'Test 43');
test(isOneBitCharacter([1,1,1,1,0,1,0,1,0,1,0,1,0,0]), true, 'Test 44');
test(isOneBitCharacter([1,0,1,1,0,0,1,0]), false, 'Test 45');
test(isOneBitCharacter([1,1,0,0,1,0,1]), true, 'Test 46');
test(isOneBitCharacter([0,1,0,1,1,0,0]), true, 'Test 47');
test(isOneBitCharacter([1,0,1,1,0,1,0,0]), true, 'Test 48');
test(isOneBitCharacter([1,0,1,1,1,1,0,1,0,0]), true, 'Test 49');
test(isOneBitCharacter([1,0,1,1,0,1,0]), false, 'Test 50');
test(isOneBitCharacter([1,0,0,1,1,0,0,1,0]), false, 'Test 51');
test(isOneBitCharacter([1,1,1,0,1,0,1,1,0,0]), true, 'Test 52');
test(isOneBitCharacter([1,0,1,0,1,0,1,0]), false, 'Test 53');
test(isOneBitCharacter([1,0,1,0,1,0,1,0,1,0,1,0,1,0,0]), true, 'Test 54');
test(isOneBitCharacter([1,0,1,1,0,1,1,0,1,0,0]), true, 'Test 55');
test(isOneBitCharacter([1,0,1,1,1,0,1,1,0,0]), true, 'Test 56');
test(isOneBitCharacter([1,1,1,1,0,1,0,1,1,0,0,1,0]), false, 'Test 57');
test(isOneBitCharacter([0,0,0,0,0,0,0]), true, 'Test 58');
test(isOneBitCharacter([1,0,1,1,1,0,0]), true, 'Test 59');
test(isOneBitCharacter([1,1,1,0,1,1,0,1,1,0,1,0,0]), true, 'Test 60');
test(isOneBitCharacter([1,1,1,1,0,1,0,0,1,0]), false, 'Test 61');
test(isOneBitCharacter([1,0,1,1,1,1,0,0]), true, 'Test 62');
test(isOneBitCharacter([1,1,1,0,1,0,0,0,0]), true, 'Test 63');
test(isOneBitCharacter([0,0,1,0,1,0,0,1,1,0,1,0]), false, 'Test 64');
test(isOneBitCharacter([1,1,0,0,1,0,1,0]), false, 'Test 65');
test(isOneBitCharacter([1,1,1,0,1,1,1,0,1,0,1,1,0,0]), true, 'Test 66');
test(isOneBitCharacter([1,0,1,1,1,0,1,0,1,1,0,1,0,0]), true, 'Test 67');
test(isOneBitCharacter([1,1,1,0,1,1,0,0]), true, 'Test 68');
test(isOneBitCharacter([1,1,0,1,1,0,1,0]), false, 'Test 69');
test(isOneBitCharacter([1,1,1,0,1,0,1,0]), false, 'Test 70');
test(isOneBitCharacter([1,1,0,1,0,1,1,0,0,1,0]), false, 'Test 71');
test(isOneBitCharacter([1,1,1,1,0,1,0,1,1,0,1,0,0]), true, 'Test 72');
test(isOneBitCharacter([1,1,0,1,0,0,0]), true, 'Test 73');
test(isOneBitCharacter([1,0,1,0,1,1,0,0]), true, 'Test 74');
test(isOneBitCharacter([1,1,0,1,1,0,1,1,0,1,0,1,0,0]), true, 'Test 75');
test(isOneBitCharacter([1,1,0,0,1,0,1,1,0,1,1,0,0]), true, 'Test 76');
test(isOneBitCharacter([0,0,0,0,0,0,0,0]), true, 'Test 77');
test(isOneBitCharacter([0,1,1,0,1,1,0]), true, 'Test 78');
test(isOneBitCharacter([1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0]), true, 'Test 79');
test(isOneBitCharacter([1,0,1,1,0,1,0,0,0]), true, 'Test 80');
test(isOneBitCharacter([1,0,1,1,1,0,1,0,0]), true, 'Test 81');
test(isOneBitCharacter([1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]), true, 'Test 82');
test(isOneBitCharacter([1,0,1,1,1,0,1,1,1,0,0]), true, 'Test 83');
test(isOneBitCharacter([1,1,1,0,1,1,0,1,0,0]), true, 'Test 84');
test(isOneBitCharacter([1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0]), true, 'Test 85');
test(isOneBitCharacter([1,1,1,1,1,1,1,1,1,1,0]), true, 'Test 86');
test(isOneBitCharacter([1,1,1,0,1,1,0,1,0,0,0]), true, 'Test 87');
test(isOneBitCharacter([0,1,0,1,0,1,0]), false, 'Test 88');
test(isOneBitCharacter([1,1,0,0,1,1,0,0,1,1,0,0,1,0,0]), true, 'Test 89');
test(isOneBitCharacter([1,1,0,0,1,0,1,1,0,1,0]), false, 'Test 90');
test(isOneBitCharacter([1,0,1,0,1,1,0,1,0,1,1,0,0]), true, 'Test 91');
test(isOneBitCharacter([0,1,1,0,1,1,0,0]), true, 'Test 92');
test(isOneBitCharacter([1,0,1,1,0,1,1,0,0]), true, 'Test 93');
test(isOneBitCharacter([1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0]), true, 'Test 94');
test(isOneBitCharacter([1,0,1,1,0,1,0,1,1,0,1,0,1,0,0]), true, 'Test 95');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

