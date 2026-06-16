// Test: 1413. Minimum Value To Get Positive Step By Step Sum
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { minStartValue } = require("./solution");

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

console.log("\n1413. Minimum Value To Get Positive Step By Step Sum\n");

test(minStartValue([-1,1,-1,1]), 2, 'Test 1');
test(minStartValue([100,100,100]), 1, 'Test 2');
test(minStartValue([-3,2,-3,4,2]), 5, 'Test 3');
test(minStartValue([1,-2,-3]), 5, 'Test 4');
test(minStartValue([-1]), 2, 'Test 5');
test(minStartValue([1]), 1, 'Test 6');
test(minStartValue([100]), 1, 'Test 7');
test(minStartValue([-100,100,-100,100]), 101, 'Test 8');
test(minStartValue([50,50,50]), 1, 'Test 9');
test(minStartValue([-100,-50,-25,-12,-6,-3,-1]), 198, 'Test 10');
test(minStartValue([0,0,0]), 1, 'Test 11');
test(minStartValue([-1,-2,-3,-4]), 11, 'Test 12');
test(minStartValue([-100]), 101, 'Test 13');
test(minStartValue([1,2]), 1, 'Test 14');
test(minStartValue([100,50,25,12,6,3,1]), 1, 'Test 15');
test(minStartValue([50,-50,50,-50]), 1, 'Test 16');
test(minStartValue([-50,-50,-50]), 151, 'Test 17');
test(minStartValue([-1,0,1]), 2, 'Test 18');
test(minStartValue([10,20,30,40]), 1, 'Test 19');
test(minStartValue([10, 20, -30, 40, -50, 60, -70, 80]), 21, 'Test 20');
test(minStartValue([5, -3, -4, 2, 0, 1, -2, -3, 4, 5]), 5, 'Test 21');
test(minStartValue([10, -5, -15, 20, -10, 5]), 11, 'Test 22');
test(minStartValue([0, -1, -2, -3, -4, -5, 6]), 16, 'Test 23');
test(minStartValue([-1, -1, -1, -1, -1, 10]), 6, 'Test 24');
test(minStartValue([100, -100, 100, -100, 100, -100]), 1, 'Test 25');
test(minStartValue([-10, 20, -30, 40, -50, 60, -70, 80, -90, 100]), 51, 'Test 26');
test(minStartValue([0, 0, 0, 0, 0, -1, 1]), 2, 'Test 27');
test(minStartValue([10, 20, 30, 40, 50, -150, 60]), 1, 'Test 28');
test(minStartValue([100, -50, 25, -12, 62, -31, 15, -7, 3, -1]), 1, 'Test 29');
test(minStartValue([5, -3, 2, -8, 6, -1, 4, -7]), 5, 'Test 30');
test(minStartValue([1, -100, 100, -200, 200, -300, 300]), 300, 'Test 31');
test(minStartValue([10, -20, 30, -40, 50, -60]), 31, 'Test 32');
test(minStartValue([100, -50, -50, 50, -25, 25, -12, 12]), 1, 'Test 33');
test(minStartValue([-99, -98, -97, -96, -95, -94, -93, -92, -91, -90]), 946, 'Test 34');
test(minStartValue([5, -15, 20, -25, 30, -35, 40]), 21, 'Test 35');
test(minStartValue([-1, 1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6, -7, 7, -8, 8, -9, 9, -10, 10]), 11, 'Test 36');
test(minStartValue([1, -100, 100, -100, 100, -100, 100, -100]), 100, 'Test 37');
test(minStartValue([-50, 50, -25, 25, -12, 12, -6, 6, -3, 3]), 51, 'Test 38');
test(minStartValue([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]), 6, 'Test 39');
test(minStartValue([-10, 20, -30, 40, -50, 60]), 31, 'Test 40');
test(minStartValue([-50, 50, -50, 50, -50, 50]), 51, 'Test 41');
test(minStartValue([-1, -2, -3, -4, -5]), 16, 'Test 42');
test(minStartValue([-1, 0, 1, -2, 2, -3, 3]), 4, 'Test 43');
test(minStartValue([100, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]), 1, 'Test 44');
test(minStartValue([10, -10, 10, -10, 10, -10, 10, -10, 10, -10]), 1, 'Test 45');
test(minStartValue([5, 5, 5, 5, -20, 5, 5, 5, 5]), 1, 'Test 46');
test(minStartValue([100, -200, 300, -400, 500, -600, 700]), 301, 'Test 47');
test(minStartValue([1, 2, 3, 4, 5, -15, 6, 7, 8, 9, 10]), 1, 'Test 48');
test(minStartValue([5, -10, 15, -20, 25, -30, 35, -40, 45, -50]), 26, 'Test 49');
test(minStartValue([10, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, 10]), 41, 'Test 50');
test(minStartValue([5, -5, 10, -10, 15, -15, 20, -20, 25, -25]), 1, 'Test 51');
test(minStartValue([0, -1, 1, -1, 1, -1]), 2, 'Test 52');
test(minStartValue([-10, 0, 10, -20, 20, -30, 30]), 31, 'Test 53');
test(minStartValue([1, -1, 2, -2, 3, -3, 4, -4, 5]), 1, 'Test 54');
test(minStartValue([-1, -2, -3, -4, -5, 15]), 16, 'Test 55');
test(minStartValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1, 'Test 56');
test(minStartValue([-10, -20, -30, 40, 50, -15]), 61, 'Test 57');
test(minStartValue([0, 0, 0, 0, 0, 0, -1]), 2, 'Test 58');
test(minStartValue([-1, 1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6]), 7, 'Test 59');
test(minStartValue([-1, -2, -3, -4, -5, 15, -1, -1, -1, -1]), 16, 'Test 60');
test(minStartValue([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), 1, 'Test 61');
test(minStartValue([-20, 10, 0, -10, 20, 0, -10, 0, 20]), 21, 'Test 62');
test(minStartValue([-10, 20, -30, 40, -50, 60, -70, 80]), 41, 'Test 63');
test(minStartValue([-50, -20, -30, 100, -10, 20]), 101, 'Test 64');
test(minStartValue([1, -1, 1, -1, 1, -1, 1]), 1, 'Test 65');
test(minStartValue([10, 20, 30, 40, 50, -150]), 1, 'Test 66');
test(minStartValue([-50, 50, -50, 50, -50, 50, -50, 50, -50, 50]), 51, 'Test 67');
test(minStartValue([10, -20, 30, -40, 50, -60, 70]), 31, 'Test 68');
test(minStartValue([-10, -20, -30, -40, -50, 100]), 151, 'Test 69');
test(minStartValue([30, -10, 20, -15, 5, -5, 10, -10, 15, -20]), 1, 'Test 70');
test(minStartValue([1, -2, 3, -4, 5, -6, 7, -8, 9, -10]), 6, 'Test 71');
test(minStartValue([5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5]), 1, 'Test 72');
test(minStartValue([10, 20, 30, -50, 40, -10, -20, -30, 50]), 11, 'Test 73');
test(minStartValue([1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 1, 'Test 74');
test(minStartValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 75');
test(minStartValue([3, -5, 2, -1, 4, -6]), 4, 'Test 76');
test(minStartValue([1, 1, 1, 1, 1, -5, 1, 1, 1, 1, 1]), 1, 'Test 77');
test(minStartValue([1, -1, 1, -1, 1, -1, 1, -1, 1]), 1, 'Test 78');
test(minStartValue([0, -1, 1, -2, 2, -3, 3]), 4, 'Test 79');
test(minStartValue([-50, -50, -50, 50, 50]), 151, 'Test 80');
test(minStartValue([10, -1, -2, -3, -4, -5, -6, -7, -8, -9]), 36, 'Test 81');
test(minStartValue([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 1, 'Test 82');
test(minStartValue([10, -1, 10, -1, 10, -1, 10, -1, 10, -1, 10, -1, 10, -1]), 1, 'Test 83');
test(minStartValue([1, 2, 3, 4, 5, -15, 10, 20, -50, 100]), 21, 'Test 84');
test(minStartValue([-10,-20,-30,-40,-50]), 151, 'Test 85');
test(minStartValue([0, -1, 0, -2, 0, -3, 0, -4, 0, -5]), 16, 'Test 86');
test(minStartValue([-5, -5, -5, -5, 20, -5, -5, -5, -5]), 21, 'Test 87');
test(minStartValue([100, -50, 25, -75, 10, -10, 5, -5]), 1, 'Test 88');
test(minStartValue([100, -50, -50, -50, -50, 200]), 101, 'Test 89');
test(minStartValue([0, 0, 0, 0, 0]), 1, 'Test 90');
test(minStartValue([100, -50, 25, -20, 10, -5, 1]), 1, 'Test 91');
test(minStartValue([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100]), 551, 'Test 92');
test(minStartValue([-9, -8, -7, -6, -5, -4, -3, -2, -1, 1]), 46, 'Test 93');
test(minStartValue([-5, -4, -3, -2, -1]), 16, 'Test 94');
test(minStartValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -55]), 1, 'Test 95');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

