// Test: 1269. Number Of Ways To Stay In The Same Place After Some Steps
// 77 test cases from LeetCodeDataset
// Run: node test.js

const { numWays } = require("./solution");

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

console.log("\n1269. Number Of Ways To Stay In The Same Place After Some Steps\n");

test(numWays(5, 3), 21, 'Test 1');
test(numWays(500, 1000000), Error: maximum recursion depth exceeded, 'Test 2');
test(numWays(10, 5), 2187, 'Test 3');
test(numWays(5, 5), 21, 'Test 4');
test(numWays(2, 4), 2, 'Test 5');
test(numWays(3, 2), 4, 'Test 6');
test(numWays(500, 100000), Error: maximum recursion depth exceeded, 'Test 7');
test(numWays(10, 1), 1, 'Test 8');
test(numWays(10, 3), 1682, 'Test 9');
test(numWays(1, 3), 1, 'Test 10');
test(numWays(4, 2), 8, 'Test 11');
test(numWays(500, 3), Error: maximum recursion depth exceeded, 'Test 12');
test(numWays(350, 150), 426619980, 'Test 13');
test(numWays(500, 500), Error: maximum recursion depth exceeded, 'Test 14');
test(numWays(20, 10), 50852018, 'Test 15');
test(numWays(100, 1000000), 345787718, 'Test 16');
test(numWays(200, 10), 27369014, 'Test 17');
test(numWays(300, 500), 337584699, 'Test 18');
test(numWays(200, 1000), 404113244, 'Test 19');
test(numWays(250, 100000), 266783101, 'Test 20');
test(numWays(250, 250), 266783101, 'Test 21');
test(numWays(1, 5), 1, 'Test 22');
test(numWays(200, 50), 228436718, 'Test 23');
test(numWays(400, 150), 792402924, 'Test 24');
test(numWays(100, 5), 361798919, 'Test 25');
test(numWays(300, 300), 337584699, 'Test 26');
test(numWays(150, 100), 924870032, 'Test 27');
test(numWays(500, 200), Error: maximum recursion depth exceeded, 'Test 28');
test(numWays(500, 1000), Error: maximum recursion depth exceeded, 'Test 29');
test(numWays(300, 1), 1, 'Test 30');
test(numWays(400, 10000), 990505357, 'Test 31');
test(numWays(100, 20), 227326058, 'Test 32');
test(numWays(400, 500), 990505357, 'Test 33');
test(numWays(400, 20), 378873335, 'Test 34');
test(numWays(450, 1000), 679622497, 'Test 35');
test(numWays(100, 250), 345787718, 'Test 36');
test(numWays(7, 7), 127, 'Test 37');
test(numWays(300, 10), 202608062, 'Test 38');
test(numWays(100, 500), 345787718, 'Test 39');
test(numWays(250, 2), 771819109, 'Test 40');
test(numWays(200, 300), 404113244, 'Test 41');
test(numWays(450, 900), 679622497, 'Test 42');
test(numWays(150, 50), 700273839, 'Test 43');
test(numWays(400, 1), 1, 'Test 44');
test(numWays(50, 5), 316310597, 'Test 45');
test(numWays(200, 5), 143744346, 'Test 46');
test(numWays(30, 5), 559846999, 'Test 47');
test(numWays(300, 1000), 337584699, 'Test 48');
test(numWays(150, 200), 924870032, 'Test 49');
test(numWays(20, 5), 44991659, 'Test 50');
test(numWays(100, 1000), 345787718, 'Test 51');
test(numWays(300, 100), 266213554, 'Test 52');
test(numWays(500, 100), Error: maximum recursion depth exceeded, 'Test 53');
test(numWays(350, 350), 47176184, 'Test 54');
test(numWays(125, 75), 534594928, 'Test 55');
test(numWays(150, 10), 809029961, 'Test 56');
test(numWays(499, 500), Error: maximum recursion depth exceeded, 'Test 57');
test(numWays(450, 250), 679622497, 'Test 58');
test(numWays(250, 1000), 266783101, 'Test 59');
test(numWays(150, 1), 1, 'Test 60');
test(numWays(400, 200), 990505356, 'Test 61');
test(numWays(120, 300), 991528385, 'Test 62');
test(numWays(200, 500000), 404113244, 'Test 63');
test(numWays(450, 500), 679622497, 'Test 64');
test(numWays(500, 2), Error: maximum recursion depth exceeded, 'Test 65');
test(numWays(180, 10), 513914322, 'Test 66');
test(numWays(3, 10), 4, 'Test 67');
test(numWays(100, 10), 836991026, 'Test 68');
test(numWays(500, 1), Error: maximum recursion depth exceeded, 'Test 69');
test(numWays(500, 250), Error: maximum recursion depth exceeded, 'Test 70');
test(numWays(250, 100), 694490842, 'Test 71');
test(numWays(250, 5000), 266783101, 'Test 72');
test(numWays(250, 10), 321394621, 'Test 73');
test(numWays(50, 10), 48059843, 'Test 74');
test(numWays(250, 50), 739582172, 'Test 75');
test(numWays(500, 10), Error: maximum recursion depth exceeded, 'Test 76');
test(numWays(400, 2), 99483769, 'Test 77');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

