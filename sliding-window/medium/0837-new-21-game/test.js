// Test: 837. New 21 Game
// 81 test cases from LeetCodeDataset
// Run: node test.js

const { new21Game } = require("./solution");

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

console.log("\n837. New 21 Game\n");

test(new21Game(10000, 5000, 500), Error: maximum recursion depth exceeded, 'Test 1');
test(new21Game(10, 5, 5), 1.0, 'Test 2');
test(new21Game(100, 50, 20), 1.0, 'Test 3');
test(new21Game(100, 50, 5), 1.0, 'Test 4');
test(new21Game(6, 1, 10), 0.6, 'Test 5');
test(new21Game(10000, 0, 10000), 1, 'Test 6');
test(new21Game(10, 1, 10), 1.0, 'Test 7');
test(new21Game(21, 17, 10), 0.7327777870686083, 'Test 8');
test(new21Game(20, 15, 5), 1.0, 'Test 9');
test(new21Game(10000, 10000, 1), Error: maximum recursion depth exceeded, 'Test 10');
test(new21Game(0, 0, 1), 1, 'Test 11');
test(new21Game(100, 90, 5), 1.0, 'Test 12');
test(new21Game(5, 3, 2), 1.0, 'Test 13');
test(new21Game(20, 0, 10), 1, 'Test 14');
test(new21Game(15, 15, 10), 0.18009983358324094, 'Test 15');
test(new21Game(800, 800, 5), Error: maximum recursion depth exceeded, 'Test 16');
test(new21Game(75, 50, 20), 1.0, 'Test 17');
test(new21Game(25, 25, 5), 0.3333044673513253, 'Test 18');
test(new21Game(100, 100, 1), 1.0, 'Test 19');
test(new21Game(100, 50, 50), 1.0, 'Test 20');
test(new21Game(30, 25, 5), 1.0, 'Test 21');
test(new21Game(200, 150, 50), 1.0, 'Test 22');
test(new21Game(75, 30, 30), 1.0, 'Test 23');
test(new21Game(9999, 0, 100), 1, 'Test 24');
test(new21Game(45, 45, 10), 0.18183615529245928, 'Test 25');
test(new21Game(50, 30, 20), 1.0, 'Test 26');
test(new21Game(8000, 4000, 1000), Error: maximum recursion depth exceeded, 'Test 27');
test(new21Game(100, 80, 20), 1.0, 'Test 28');
test(new21Game(500, 400, 50), 1.0, 'Test 29');
test(new21Game(50, 40, 10), 1.0, 'Test 30');
test(new21Game(60, 55, 10), 0.818177813346613, 'Test 31');
test(new21Game(60, 30, 10), 1.0, 'Test 32');
test(new21Game(100, 0, 1), 1, 'Test 33');
test(new21Game(1000, 500, 500), Error: maximum recursion depth exceeded, 'Test 34');
test(new21Game(200, 150, 30), 1.0, 'Test 35');
test(new21Game(15, 10, 5), 1.0, 'Test 36');
test(new21Game(100, 50, 25), 1.0, 'Test 37');
test(new21Game(50, 25, 20), 1.0, 'Test 38');
test(new21Game(5000, 2500, 100), Error: maximum recursion depth exceeded, 'Test 39');
test(new21Game(3000, 2500, 100), Error: maximum recursion depth exceeded, 'Test 40');
test(new21Game(80, 40, 15), 1.0, 'Test 41');
test(new21Game(80, 70, 10), 1.0, 'Test 42');
test(new21Game(5000, 4000, 1000), Error: maximum recursion depth exceeded, 'Test 43');
test(new21Game(90, 85, 5), 1.0, 'Test 44');
test(new21Game(4000, 3500, 500), Error: maximum recursion depth exceeded, 'Test 45');
test(new21Game(750, 300, 50), 1.0, 'Test 46');
test(new21Game(30, 25, 10), 0.8193954028011721, 'Test 47');
test(new21Game(500, 250, 100), 1.0, 'Test 48');
test(new21Game(5000, 4999, 1), Error: maximum recursion depth exceeded, 'Test 49');
test(new21Game(15, 7, 5), 1.0, 'Test 50');
test(new21Game(1000, 500, 100), Error: maximum recursion depth exceeded, 'Test 51');
test(new21Game(80, 20, 3), 1.0, 'Test 52');
test(new21Game(15, 15, 1), 1.0, 'Test 53');
test(new21Game(80, 60, 10), 1.0, 'Test 54');
test(new21Game(9999, 9999, 1), Error: maximum recursion depth exceeded, 'Test 55');
test(new21Game(5000, 5000, 10000), Error: maximum recursion depth exceeded, 'Test 56');
test(new21Game(15000, 7500, 500), Error: maximum recursion depth exceeded, 'Test 57');
test(new21Game(25, 25, 1), 1.0, 'Test 58');
test(new21Game(25, 0, 25), 1, 'Test 59');
test(new21Game(9999, 9990, 10), Error: maximum recursion depth exceeded, 'Test 60');
test(new21Game(300, 1, 100), 1.0, 'Test 61');
test(new21Game(30, 20, 10), 1.0, 'Test 62');
test(new21Game(5000, 5000, 1), Error: maximum recursion depth exceeded, 'Test 63');
test(new21Game(25, 20, 15), 0.6217079716932831, 'Test 64');
test(new21Game(1000, 500, 200), Error: maximum recursion depth exceeded, 'Test 65');
test(new21Game(25, 20, 5), 1.0, 'Test 66');
test(new21Game(120, 90, 20), 1.0, 'Test 67');
test(new21Game(70, 60, 3), 1.0, 'Test 68');
test(new21Game(15, 10, 3), 1.0, 'Test 69');
test(new21Game(90, 75, 12), 1.0, 'Test 70');
test(new21Game(50, 25, 5), 1.0, 'Test 71');
test(new21Game(75, 50, 25), 1.0, 'Test 72');
test(new21Game(10000, 9999, 10), Error: maximum recursion depth exceeded, 'Test 73');
test(new21Game(40, 0, 5), 1, 'Test 74');
test(new21Game(200, 150, 10), 1.0, 'Test 75');
test(new21Game(70, 10, 30), 1.0, 'Test 76');
test(new21Game(150, 100, 15), 1.0, 'Test 77');
test(new21Game(30, 15, 10), 1.0, 'Test 78');
test(new21Game(100, 90, 10), 1.0, 'Test 79');
test(new21Game(30, 15, 5), 1.0, 'Test 80');
test(new21Game(90, 80, 5), 1.0, 'Test 81');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

