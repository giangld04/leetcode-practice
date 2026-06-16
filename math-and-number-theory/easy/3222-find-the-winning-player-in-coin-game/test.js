// Test: 3222. Find The Winning Player In Coin Game
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { winningPlayer } = require("./solution");

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

console.log("\n3222. Find The Winning Player In Coin Game\n");

test(winningPlayer(100, 1), Bob, 'Test 1');
test(winningPlayer(1, 100), Alice, 'Test 2');
test(winningPlayer(1, 10), Alice, 'Test 3');
test(winningPlayer(4, 11), Bob, 'Test 4');
test(winningPlayer(2, 7), Alice, 'Test 5');
test(winningPlayer(5, 5), Alice, 'Test 6');
test(winningPlayer(10, 1), Bob, 'Test 7');
test(winningPlayer(100, 100), Alice, 'Test 8');
test(winningPlayer(1, 1), Bob, 'Test 9');
test(winningPlayer(3, 5), Alice, 'Test 10');
test(winningPlayer(50, 50), Bob, 'Test 11');
test(winningPlayer(30, 50), Bob, 'Test 12');
test(winningPlayer(65, 48), Bob, 'Test 13');
test(winningPlayer(10, 30), Alice, 'Test 14');
test(winningPlayer(20, 5), Alice, 'Test 15');
test(winningPlayer(90, 5), Alice, 'Test 16');
test(winningPlayer(15, 20), Alice, 'Test 17');
test(winningPlayer(30, 30), Alice, 'Test 18');
test(winningPlayer(1, 99), Alice, 'Test 19');
test(winningPlayer(75, 75), Bob, 'Test 20');
test(winningPlayer(22, 33), Bob, 'Test 21');
test(winningPlayer(27, 8), Bob, 'Test 22');
test(winningPlayer(20, 80), Bob, 'Test 23');
test(winningPlayer(75, 5), Alice, 'Test 24');
test(winningPlayer(5, 50), Alice, 'Test 25');
test(winningPlayer(30, 60), Alice, 'Test 26');
test(winningPlayer(33, 27), Bob, 'Test 27');
test(winningPlayer(10, 100), Bob, 'Test 28');
test(winningPlayer(25, 25), Bob, 'Test 29');
test(winningPlayer(80, 20), Alice, 'Test 30');
test(winningPlayer(25, 30), Alice, 'Test 31');
test(winningPlayer(8, 17), Bob, 'Test 32');
test(winningPlayer(30, 25), Bob, 'Test 33');
test(winningPlayer(99, 1), Bob, 'Test 34');
test(winningPlayer(5, 2), Bob, 'Test 35');
test(winningPlayer(33, 66), Bob, 'Test 36');
test(winningPlayer(5, 60), Alice, 'Test 37');
test(winningPlayer(5, 95), Alice, 'Test 38');
test(winningPlayer(15, 25), Bob, 'Test 39');
test(winningPlayer(15, 70), Alice, 'Test 40');
test(winningPlayer(55, 55), Alice, 'Test 41');
test(winningPlayer(10, 15), Alice, 'Test 42');
test(winningPlayer(25, 50), Bob, 'Test 43');
test(winningPlayer(20, 25), Bob, 'Test 44');
test(winningPlayer(33, 50), Bob, 'Test 45');
test(winningPlayer(20, 30), Alice, 'Test 46');
test(winningPlayer(45, 55), Alice, 'Test 47');
test(winningPlayer(10, 10), Bob, 'Test 48');
test(winningPlayer(5, 10), Bob, 'Test 49');
test(winningPlayer(5, 20), Alice, 'Test 50');
test(winningPlayer(20, 15), Alice, 'Test 51');
test(winningPlayer(30, 70), Alice, 'Test 52');
test(winningPlayer(7, 3), Bob, 'Test 53');
test(winningPlayer(25, 75), Bob, 'Test 54');
test(winningPlayer(99, 99), Bob, 'Test 55');
test(winningPlayer(7, 14), Alice, 'Test 56');
test(winningPlayer(99, 100), Alice, 'Test 57');
test(winningPlayer(60, 40), Bob, 'Test 58');
test(winningPlayer(25, 100), Alice, 'Test 59');
test(winningPlayer(5, 90), Alice, 'Test 60');
test(winningPlayer(100, 50), Bob, 'Test 61');
test(winningPlayer(25, 20), Alice, 'Test 62');
test(winningPlayer(50, 30), Alice, 'Test 63');
test(winningPlayer(5, 15), Alice, 'Test 64');
test(winningPlayer(3, 25), Alice, 'Test 65');
test(winningPlayer(10, 75), Bob, 'Test 66');
test(winningPlayer(50, 100), Alice, 'Test 67');
test(winningPlayer(42, 13), Alice, 'Test 68');
test(winningPlayer(50, 5), Alice, 'Test 69');
test(winningPlayer(75, 10), Bob, 'Test 70');
test(winningPlayer(15, 40), Bob, 'Test 71');
test(winningPlayer(3, 8), Bob, 'Test 72');
test(winningPlayer(80, 30), Alice, 'Test 73');
test(winningPlayer(8, 3), Bob, 'Test 74');
test(winningPlayer(20, 50), Bob, 'Test 75');
test(winningPlayer(30, 5), Alice, 'Test 76');
test(winningPlayer(10, 2), Bob, 'Test 77');
test(winningPlayer(15, 0), Bob, 'Test 78');
test(winningPlayer(6, 2), Bob, 'Test 79');
test(winningPlayer(10, 20), Alice, 'Test 80');
test(winningPlayer(7, 6), Alice, 'Test 81');
test(winningPlayer(7, 2), Bob, 'Test 82');
test(winningPlayer(20, 10), Bob, 'Test 83');
test(winningPlayer(8, 15), Alice, 'Test 84');
test(winningPlayer(5, 3), Bob, 'Test 85');
test(winningPlayer(3, 10), Bob, 'Test 86');
test(winningPlayer(9, 12), Alice, 'Test 87');
test(winningPlayer(50, 25), Bob, 'Test 88');
test(winningPlayer(1, 20), Alice, 'Test 89');
test(winningPlayer(7, 7), Alice, 'Test 90');
test(winningPlayer(9, 9), Bob, 'Test 91');
test(winningPlayer(75, 11), Bob, 'Test 92');
test(winningPlayer(6, 3), Bob, 'Test 93');
test(winningPlayer(8, 2), Bob, 'Test 94');
test(winningPlayer(50, 20), Alice, 'Test 95');
test(winningPlayer(8, 5), Alice, 'Test 96');
test(winningPlayer(6, 8), Bob, 'Test 97');
test(winningPlayer(1, 15), Alice, 'Test 98');
test(winningPlayer(0, 15), Bob, 'Test 99');
test(winningPlayer(6, 9), Bob, 'Test 100');
test(winningPlayer(6, 6), Alice, 'Test 101');
test(winningPlayer(3, 3), Bob, 'Test 102');
test(winningPlayer(8, 8), Bob, 'Test 103');
test(winningPlayer(20, 20), Alice, 'Test 104');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

