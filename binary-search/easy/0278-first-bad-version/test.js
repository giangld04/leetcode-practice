// Test: 278. First Bad Version
// 64 test cases from LeetCodeDataset
// Run: node test.js

const { solution } = require("./solution");

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

console.log("\n278. First Bad Version\n");

test(solution(10, 3), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 1');
test(solution(2147483647, 1702766719), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 2');
test(solution(10, 2), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 3');
test(solution(5, 4), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 4');
test(solution(1, 1), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 5');
test(solution(100, 50), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 6');
test(solution(10, 10), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 7');
test(solution(10, 7), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 8');
test(solution(2147483647, 1), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 9');
test(solution(10, 1), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 10');
test(solution(30, 16), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 11');
test(solution(1000, 1), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 12');
test(solution(100000, 1), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 13');
test(solution(10000, 9999), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 14');
test(solution(100, 51), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 15');
test(solution(100, 99), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 16');
test(solution(1000000000, 500000000), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 17');
test(solution(1000000, 999999), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 18');
test(solution(1000, 500), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 19');
test(solution(2147483647, 1073741824), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 20');
test(solution(2147483647, 1073741823), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 21');
test(solution(500000, 250000), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 22');
test(solution(100000, 100), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 23');
test(solution(3, 2), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 24');
test(solution(100, 100), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 25');
test(solution(5000, 2500), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 26');
test(solution(10000, 2), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 27');
test(solution(50, 25), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 28');
test(solution(5000000, 2), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 29');
test(solution(10000, 5000), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 30');
test(solution(100, 1), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 31');
test(solution(1000, 999), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 32');
test(solution(5, 1), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 33');
test(solution(1000, 1000), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 34');
test(solution(5000000, 4999999), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 35');
test(solution(2, 2), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 36');
test(solution(500000, 499999), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 37');
test(solution(999999, 999998), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 38');
test(solution(1000000, 1), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 39');
test(solution(1000000, 1000000), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 40');
test(solution(20, 15), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 41');
test(solution(100000, 99999), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 42');
test(solution(2, 1), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 43');
test(solution(200, 150), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 44');
test(solution(2147483647, 2147483647), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 45');
test(solution(1000000, 500000), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 46');
test(solution(1000, 2), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 47');
test(solution(1000000, 1000), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 48');
test(solution(1000000, 999000), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 49');
test(solution(10000, 10000), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 50');
test(solution(50, 49), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 51');
test(solution(1000, 10), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 52');
test(solution(5000000, 2500000), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 53');
test(solution(50, 1), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 54');
test(solution(100000, 100000), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 55');
test(solution(5), Error: name 'isBadVersion' is not defined, 'Test 56');
test(solution(1000, 750), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 57');
test(solution(9, 9), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 58');
test(solution(10, 5), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 59');
test(solution(2126753390, 1702766719), Error: Solution.firstBadVersion[] got an unexpected keyword argument 'bad', 'Test 60');
test(solution(2147483647), Error: name 'isBadVersion' is not defined, 'Test 61');
test(solution(10), Error: name 'isBadVersion' is not defined, 'Test 62');
test(solution(1), 1, 'Test 63');
test(solution(100), Error: name 'isBadVersion' is not defined, 'Test 64');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

