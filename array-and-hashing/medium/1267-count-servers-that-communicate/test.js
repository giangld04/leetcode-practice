// Test: 1267. Count Servers That Communicate
// 50 test cases from LeetCodeDataset
// Run: node test.js

const { countServers } = require("./solution");

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

console.log("\n1267. Count Servers That Communicate\n");

test(countServers([[1,1,1,0],[0,0,0,0],[1,1,1,0],[0,0,0,0]]), 6, 'Test 1');
test(countServers([[1,0],[1,1]]), 3, 'Test 2');
test(countServers([[1,1,0,0,0],[1,0,1,0,0],[0,0,0,1,1],[0,0,0,1,1]]), 8, 'Test 3');
test(countServers([[1,1,1,1],[1,1,1,1],[1,1,1,1]]), 12, 'Test 4');
test(countServers([[1,0,0,1],[0,0,0,0],[0,0,0,1],[1,0,0,0]]), 4, 'Test 5');
test(countServers([[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]]), 13, 'Test 6');
test(countServers([[1,0,1,0],[0,1,0,1],[1,0,1,0],[0,1,0,1]]), 8, 'Test 7');
test(countServers([[1,1,0,0,0],[0,0,1,1,0],[0,0,0,0,1]]), 4, 'Test 8');
test(countServers([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]), 0, 'Test 9');
test(countServers([[0,1,0,1],[1,0,1,0],[0,1,0,1],[1,0,1,0]]), 8, 'Test 10');
test(countServers([[0,0,0],[0,0,0],[0,0,0]]), 0, 'Test 11');
test(countServers([[1,0,0,1],[1,0,0,0],[0,0,0,1],[0,0,0,0]]), 4, 'Test 12');
test(countServers([[1,0,0],[0,1,0],[0,0,1]]), 0, 'Test 13');
test(countServers([[1,1,1],[1,0,1],[1,1,1]]), 8, 'Test 14');
test(countServers([[1,0,0,0],[0,1,0,0],[0,0,1,1],[0,0,0,0]]), 2, 'Test 15');
test(countServers([[1,0,1],[0,0,0],[1,0,1]]), 4, 'Test 16');
test(countServers([[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1]]), 0, 'Test 17');
test(countServers([[1,1,0,0,0],[0,0,0,0,0],[0,0,1,1,0],[0,0,0,0,0],[0,0,0,0,1]]), 4, 'Test 18');
test(countServers([[1,0,0,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,0,0,0,1]]), 0, 'Test 19');
test(countServers([[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]]), 10, 'Test 20');
test(countServers([[0,0,0,0],[0,0,0,0],[0,0,0,0]]), 0, 'Test 21');
test(countServers([[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1]]), 0, 'Test 22');
test(countServers([[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]), 4, 'Test 23');
test(countServers([[0,1,0,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,0,0,1]]), 0, 'Test 24');
test(countServers([[0,0,0],[0,0,1],[1,0,0],[0,1,0]]), 0, 'Test 25');
test(countServers([[1,1,0,0,0],[1,1,0,0,0],[0,0,1,1,0],[0,0,1,1,0],[0,0,0,0,1]]), 8, 'Test 26');
test(countServers([[0,1,0,1],[1,0,1,0],[0,1,0,1]]), 6, 'Test 27');
test(countServers([[1,1,0,0,0,0],[0,1,0,0,0,0],[0,0,1,1,0,0],[0,0,0,0,1,1],[0,0,0,0,0,0]]), 7, 'Test 28');
test(countServers([[1,0,1],[0,1,0],[1,0,1]]), 4, 'Test 29');
test(countServers([[1,0,0,1],[0,0,0,0],[0,1,0,0],[1,0,0,1]]), 4, 'Test 30');
test(countServers([[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1]]), 8, 'Test 31');
test(countServers([[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]), 0, 'Test 32');
test(countServers([[1,0,0,0],[0,0,0,1],[0,0,1,0],[0,1,0,0]]), 0, 'Test 33');
test(countServers([[0,0,0,0,0],[0,1,0,0,0],[0,0,0,1,0],[0,0,0,0,1]]), 0, 'Test 34');
test(countServers([[0]]), 0, 'Test 35');
test(countServers([[1,0,0,1],[0,1,1,0],[0,1,1,0],[1,0,0,1]]), 8, 'Test 36');
test(countServers([[1,1,0],[1,0,0],[0,0,1]]), 3, 'Test 37');
test(countServers([[1,1,0],[1,0,1],[0,1,1]]), 6, 'Test 38');
test(countServers([[1,0],[0,1]]), 0, 'Test 39');
test(countServers([[1,1,0],[0,0,0],[0,0,1]]), 2, 'Test 40');
test(countServers([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]), 16, 'Test 41');
test(countServers([[1,1,0,0,0],[0,0,0,1,0],[0,0,0,0,1],[1,0,0,0,0],[0,1,0,0,0]]), 4, 'Test 42');
test(countServers([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]), 0, 'Test 43');
test(countServers([[1]]), 0, 'Test 44');
test(countServers([[0,0,0],[0,1,0],[0,0,0]]), 0, 'Test 45');
test(countServers([[1,1,1],[1,1,1],[1,1,1]]), 9, 'Test 46');
test(countServers([[1,1],[1,1],[1,1]]), 6, 'Test 47');
test(countServers([[1,0,0,1],[1,0,0,0],[0,0,0,0],[0,0,0,1]]), 4, 'Test 48');
test(countServers([[1,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,1]]), 4, 'Test 49');
test(countServers([[1,1,0,0,0],[0,0,0,0,0],[0,0,0,1,1]]), 4, 'Test 50');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

