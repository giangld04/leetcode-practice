// Test: 3248. Snake In Matrix
// 81 test cases from LeetCodeDataset
// Run: node test.js

const { finalPositionOfSnake } = require("./solution");

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

console.log("\n3248. Snake In Matrix\n");

test(finalPositionOfSnake(2, ["RIGHT","DOWN"]), 3, 'Test 1');
test(finalPositionOfSnake(5, ["RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN"]), 18, 'Test 2');
test(finalPositionOfSnake(10, ["UP", "LEFT", "DOWN", "RIGHT", "UP", "LEFT", "DOWN", "RIGHT"]), 0, 'Test 3');
test(finalPositionOfSnake(2, ["RIGHT", "DOWN"]), 3, 'Test 4');
test(finalPositionOfSnake(4, ["RIGHT","RIGHT","DOWN","DOWN","LEFT","UP"]), 5, 'Test 5');
test(finalPositionOfSnake(3, ["DOWN", "RIGHT", "UP"]), 1, 'Test 6');
test(finalPositionOfSnake(6, ["DOWN","DOWN","RIGHT","RIGHT","UP","UP","LEFT","LEFT"]), 0, 'Test 7');
test(finalPositionOfSnake(10, ["RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP"]), 0, 'Test 8');
test(finalPositionOfSnake(5, ["UP","LEFT","DOWN","RIGHT"]), 0, 'Test 9');
test(finalPositionOfSnake(4, ["LEFT", "DOWN", "LEFT", "UP"]), -2, 'Test 10');
test(finalPositionOfSnake(5, ["DOWN","DOWN","RIGHT","RIGHT","UP","UP","LEFT","LEFT"]), 0, 'Test 11');
test(finalPositionOfSnake(3, ["DOWN","RIGHT","UP"]), 1, 'Test 12');
test(finalPositionOfSnake(4, ["RIGHT","DOWN","LEFT","UP"]), 0, 'Test 13');
test(finalPositionOfSnake(10, ["DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT"]), -33, 'Test 14');
test(finalPositionOfSnake(10, ["RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP"]), 0, 'Test 15');
test(finalPositionOfSnake(7, ["DOWN", "RIGHT", "RIGHT", "DOWN", "LEFT", "UP", "UP", "LEFT", "DOWN", "RIGHT", "DOWN", "LEFT", "UP"]), 7, 'Test 16');
test(finalPositionOfSnake(8, ["RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP"]), 0, 'Test 17');
test(finalPositionOfSnake(7, ["RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP"]), 0, 'Test 18');
test(finalPositionOfSnake(6, ["RIGHT","RIGHT","DOWN","DOWN","LEFT","LEFT","UP","UP"]), 0, 'Test 19');
test(finalPositionOfSnake(9, ["DOWN","DOWN","RIGHT","RIGHT","UP","UP","LEFT","LEFT","DOWN","DOWN","RIGHT","RIGHT","UP","UP","LEFT","LEFT"]), 0, 'Test 20');
test(finalPositionOfSnake(9, ["UP","UP","LEFT","LEFT","DOWN","DOWN","RIGHT","RIGHT","UP","UP","LEFT","LEFT","DOWN","DOWN","RIGHT","RIGHT","UP","UP","LEFT","LEFT","DOWN","DOWN","RIGHT","RIGHT"]), 0, 'Test 21');
test(finalPositionOfSnake(8, ["RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP"]), 0, 'Test 22');
test(finalPositionOfSnake(5, ["RIGHT","RIGHT","RIGHT","DOWN","DOWN","LEFT","UP","UP","UP","RIGHT","DOWN","LEFT","LEFT","UP","UP","RIGHT"]), -8, 'Test 23');
test(finalPositionOfSnake(5, ["RIGHT", "DOWN", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP", "LEFT"]), 4, 'Test 24');
test(finalPositionOfSnake(5, ["RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP"]), -18, 'Test 25');
test(finalPositionOfSnake(9, ["RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "LEFT", "UP", "LEFT", "UP"]), -10, 'Test 26');
test(finalPositionOfSnake(4, ["DOWN", "RIGHT", "RIGHT", "DOWN", "LEFT", "LEFT", "UP", "UP", "RIGHT", "RIGHT", "DOWN", "DOWN"]), 10, 'Test 27');
test(finalPositionOfSnake(4, ["DOWN","DOWN","RIGHT","RIGHT","UP","UP","LEFT","LEFT"]), 0, 'Test 28');
test(finalPositionOfSnake(4, ["RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP"]), 0, 'Test 29');
test(finalPositionOfSnake(7, ["RIGHT","RIGHT","RIGHT","DOWN","DOWN","DOWN","LEFT","LEFT","LEFT","UP","UP","UP","RIGHT","DOWN","LEFT","UP"]), 0, 'Test 30');
test(finalPositionOfSnake(9, ["DOWN", "DOWN", "DOWN", "RIGHT", "RIGHT", "RIGHT", "UP", "UP", "UP", "LEFT", "LEFT", "LEFT", "DOWN", "DOWN", "DOWN", "RIGHT", "RIGHT", "RIGHT", "UP", "UP", "UP", "LEFT", "LEFT", "LEFT"]), 0, 'Test 31');
test(finalPositionOfSnake(7, ["DOWN","RIGHT","UP","LEFT","DOWN","RIGHT","UP","LEFT","DOWN","RIGHT","UP","LEFT","DOWN","RIGHT","UP","LEFT"]), 0, 'Test 32');
test(finalPositionOfSnake(5, ["RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP"]), 0, 'Test 33');
test(finalPositionOfSnake(7, ["RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP"]), 0, 'Test 34');
test(finalPositionOfSnake(5, ["RIGHT", "RIGHT", "DOWN", "DOWN", "LEFT", "UP", "UP", "LEFT"]), 0, 'Test 35');
test(finalPositionOfSnake(9, ["DOWN","RIGHT","UP","LEFT","DOWN","RIGHT","UP","LEFT","DOWN","RIGHT","UP","LEFT","DOWN","RIGHT","UP","LEFT","DOWN","RIGHT","UP","LEFT"]), 0, 'Test 36');
test(finalPositionOfSnake(5, ["DOWN", "DOWN", "RIGHT", "RIGHT", "UP", "LEFT", "LEFT", "UP"]), 0, 'Test 37');
test(finalPositionOfSnake(5, ["DOWN","DOWN","RIGHT","RIGHT","UP","UP","LEFT","LEFT","DOWN","RIGHT","UP","LEFT"]), 0, 'Test 38');
test(finalPositionOfSnake(10, ["DOWN","DOWN","DOWN","DOWN","DOWN","DOWN","DOWN","DOWN","DOWN","DOWN","UP","UP","UP","UP","UP","UP","UP","UP","UP","UP","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT","LEFT","LEFT","LEFT","LEFT","LEFT","LEFT","LEFT","LEFT","LEFT","LEFT"]), 0, 'Test 39');
test(finalPositionOfSnake(8, ["RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP"]), 0, 'Test 40');
test(finalPositionOfSnake(6, ["DOWN","RIGHT","DOWN","RIGHT","UP","LEFT","UP","LEFT","DOWN","RIGHT"]), 7, 'Test 41');
test(finalPositionOfSnake(9, ["RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP"]), 0, 'Test 42');
test(finalPositionOfSnake(4, ["RIGHT", "DOWN", "LEFT", "DOWN", "RIGHT", "UP", "RIGHT", "DOWN", "LEFT", "UP", "LEFT", "DOWN", "RIGHT", "UP"]), 5, 'Test 43');
test(finalPositionOfSnake(5, ["RIGHT", "RIGHT", "DOWN", "DOWN", "LEFT", "LEFT", "UP", "UP"]), 0, 'Test 44');
test(finalPositionOfSnake(2, ["RIGHT", "DOWN", "UP", "LEFT", "RIGHT", "DOWN", "UP", "LEFT", "RIGHT", "DOWN", "UP", "LEFT", "RIGHT", "DOWN", "UP", "LEFT", "RIGHT", "DOWN", "UP", "LEFT"]), 0, 'Test 45');
test(finalPositionOfSnake(4, ["RIGHT", "RIGHT", "DOWN", "DOWN", "LEFT", "UP", "UP", "LEFT", "LEFT", "DOWN", "DOWN", "RIGHT", "UP", "LEFT"]), 3, 'Test 46');
test(finalPositionOfSnake(7, ["RIGHT", "RIGHT", "RIGHT", "DOWN", "DOWN", "DOWN", "LEFT", "LEFT", "LEFT", "UP", "UP", "UP", "RIGHT", "RIGHT", "RIGHT", "DOWN", "DOWN", "DOWN", "LEFT", "LEFT", "LEFT", "UP", "UP", "UP"]), 0, 'Test 47');
test(finalPositionOfSnake(4, ["RIGHT", "RIGHT", "RIGHT", "RIGHT", "DOWN", "DOWN", "DOWN", "DOWN", "LEFT", "LEFT", "LEFT", "LEFT", "UP", "UP", "UP", "UP"]), 0, 'Test 48');
test(finalPositionOfSnake(8, ["UP", "LEFT", "DOWN", "RIGHT", "UP", "LEFT", "DOWN", "RIGHT", "UP", "LEFT", "DOWN", "RIGHT", "UP", "LEFT", "DOWN", "RIGHT", "UP", "LEFT", "DOWN", "RIGHT", "UP", "LEFT", "DOWN", "RIGHT"]), 0, 'Test 49');
test(finalPositionOfSnake(4, ["RIGHT","DOWN","RIGHT","DOWN","LEFT","UP","LEFT","UP"]), 0, 'Test 50');
test(finalPositionOfSnake(5, ["RIGHT","DOWN","LEFT","DOWN","RIGHT","UP","LEFT","UP","RIGHT","DOWN"]), 6, 'Test 51');
test(finalPositionOfSnake(8, ["RIGHT","RIGHT","DOWN","DOWN","LEFT","LEFT","UP","UP"]), 0, 'Test 52');
test(finalPositionOfSnake(3, ["DOWN", "RIGHT", "UP", "LEFT", "DOWN", "RIGHT", "UP", "LEFT", "DOWN", "RIGHT", "UP", "LEFT", "DOWN", "RIGHT", "UP", "LEFT", "DOWN", "RIGHT", "UP", "LEFT"]), 0, 'Test 53');
test(finalPositionOfSnake(9, ["RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP"]), 0, 'Test 54');
test(finalPositionOfSnake(6, ["RIGHT","RIGHT","RIGHT","DOWN","DOWN","DOWN","LEFT","LEFT","LEFT","UP","UP","UP","RIGHT","DOWN","LEFT","UP"]), 0, 'Test 55');
test(finalPositionOfSnake(5, ["RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP"]), 0, 'Test 56');
test(finalPositionOfSnake(6, ["UP", "UP", "LEFT", "LEFT", "DOWN", "DOWN", "RIGHT", "RIGHT", "UP", "UP", "LEFT", "LEFT", "DOWN", "DOWN", "RIGHT", "RIGHT"]), 0, 'Test 57');
test(finalPositionOfSnake(6, ["DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT"]), 0, 'Test 58');
test(finalPositionOfSnake(8, ["DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT"]), 0, 'Test 59');
test(finalPositionOfSnake(5, ["RIGHT","RIGHT","RIGHT","RIGHT","DOWN","DOWN","DOWN","DOWN","LEFT","LEFT","LEFT","LEFT","UP","UP","UP","UP"]), 0, 'Test 60');
test(finalPositionOfSnake(8, ["DOWN", "RIGHT", "UP", "LEFT", "DOWN", "RIGHT", "UP", "LEFT", "DOWN", "RIGHT", "UP", "LEFT", "DOWN", "RIGHT", "UP", "LEFT", "DOWN", "RIGHT", "UP", "LEFT", "DOWN", "RIGHT", "UP", "LEFT", "DOWN", "RIGHT", "UP", "LEFT"]), 0, 'Test 61');
test(finalPositionOfSnake(8, ["DOWN","DOWN","RIGHT","RIGHT","UP","UP","LEFT","LEFT","DOWN","RIGHT","UP","LEFT","DOWN","RIGHT","UP","LEFT","DOWN","RIGHT","UP","LEFT","DOWN","RIGHT","UP","LEFT"]), 0, 'Test 62');
test(finalPositionOfSnake(4, ["DOWN", "DOWN", "RIGHT", "RIGHT", "UP", "UP", "LEFT", "LEFT", "DOWN", "RIGHT", "UP", "LEFT"]), 0, 'Test 63');
test(finalPositionOfSnake(6, ["DOWN", "RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "UP", "LEFT", "DOWN", "RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "UP", "LEFT"]), 0, 'Test 64');
test(finalPositionOfSnake(7, ["RIGHT","RIGHT","RIGHT","DOWN","DOWN","DOWN","LEFT","LEFT","UP","UP","UP","RIGHT","DOWN","LEFT","UP"]), 1, 'Test 65');
test(finalPositionOfSnake(9, ["RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP"]), 0, 'Test 66');
test(finalPositionOfSnake(8, ["DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT"]), -18, 'Test 67');
test(finalPositionOfSnake(7, ["RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "UP", "UP", "UP", "UP", "LEFT", "LEFT", "LEFT", "LEFT", "DOWN"]), 0, 'Test 68');
test(finalPositionOfSnake(8, ["UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT"]), 0, 'Test 69');
test(finalPositionOfSnake(6, ["DOWN","DOWN","DOWN","DOWN","RIGHT","RIGHT","RIGHT","UP","UP","UP","LEFT","LEFT","DOWN","DOWN","RIGHT","RIGHT","UP","UP","LEFT","LEFT"]), 7, 'Test 70');
test(finalPositionOfSnake(6, ["DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "RIGHT", "DOWN"]), -7, 'Test 71');
test(finalPositionOfSnake(7, ["DOWN","RIGHT","UP","LEFT","DOWN","RIGHT","UP","LEFT","DOWN","RIGHT","UP","LEFT"]), 0, 'Test 72');
test(finalPositionOfSnake(10, ["DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "LEFT"]), -55, 'Test 73');
test(finalPositionOfSnake(4, ["RIGHT","RIGHT","DOWN","DOWN","LEFT","LEFT","UP","UP"]), 0, 'Test 74');
test(finalPositionOfSnake(6, ["RIGHT","DOWN","RIGHT","DOWN","UP","LEFT","UP","LEFT","RIGHT","DOWN","UP","LEFT","DOWN","RIGHT","UP","LEFT"]), 0, 'Test 75');
test(finalPositionOfSnake(4, ["DOWN","DOWN","RIGHT","RIGHT","UP","UP","LEFT","LEFT","DOWN","DOWN","RIGHT","RIGHT","UP","UP","LEFT","LEFT"]), 0, 'Test 76');
test(finalPositionOfSnake(10, ["RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP","RIGHT","DOWN","LEFT","UP"]), 0, 'Test 77');
test(finalPositionOfSnake(5, ["RIGHT","DOWN","RIGHT","DOWN","RIGHT","DOWN","RIGHT","DOWN"]), 24, 'Test 78');
test(finalPositionOfSnake(4, ["RIGHT", "DOWN", "RIGHT", "DOWN", "LEFT", "UP", "LEFT", "UP", "RIGHT", "DOWN", "RIGHT", "DOWN", "LEFT", "UP", "LEFT", "UP", "RIGHT", "DOWN", "RIGHT", "DOWN", "LEFT", "UP", "LEFT", "UP", "RIGHT", "DOWN", "RIGHT", "DOWN", "LEFT", "UP", "LEFT", "UP"]), 0, 'Test 79');
test(finalPositionOfSnake(9, ["RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP", "RIGHT", "DOWN", "RIGHT", "DOWN", "RIGHT", "DOWN", "LEFT", "UP", "LEFT", "UP", "LEFT", "UP"]), 0, 'Test 80');
test(finalPositionOfSnake(6, ["DOWN", "RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP", "RIGHT", "DOWN", "LEFT", "UP"]), 6, 'Test 81');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

