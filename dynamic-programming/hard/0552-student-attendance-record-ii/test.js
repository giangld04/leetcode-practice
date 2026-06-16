// Test: 552. Student Attendance Record Ii
// 41 test cases from LeetCodeDataset
// Run: node test.js

const { checkRecord } = require("./solution");

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

console.log("\n552. Student Attendance Record Ii\n");

test(checkRecord(3), 19, 'Test 1');
test(checkRecord(100000), Error: maximum recursion depth exceeded, 'Test 2');
test(checkRecord(100), 985598218, 'Test 3');
test(checkRecord(10101), Error: maximum recursion depth exceeded, 'Test 4');
test(checkRecord(10000), Error: maximum recursion depth exceeded, 'Test 5');
test(checkRecord(2), 8, 'Test 6');
test(checkRecord(1), 3, 'Test 7');
test(checkRecord(50000), Error: maximum recursion depth exceeded, 'Test 8');
test(checkRecord(1000), Error: maximum recursion depth exceeded, 'Test 9');
test(checkRecord(10), 3536, 'Test 10');
test(checkRecord(5), 94, 'Test 11');
test(checkRecord(15000), Error: maximum recursion depth exceeded, 'Test 12');
test(checkRecord(99999), Error: maximum recursion depth exceeded, 'Test 13');
test(checkRecord(2000), Error: maximum recursion depth exceeded, 'Test 14');
test(checkRecord(90000), Error: maximum recursion depth exceeded, 'Test 15');
test(checkRecord(100004), Error: maximum recursion depth exceeded, 'Test 16');
test(checkRecord(100005), Error: maximum recursion depth exceeded, 'Test 17');
test(checkRecord(50), 100469819, 'Test 18');
test(checkRecord(300), 921822362, 'Test 19');
test(checkRecord(100002), Error: maximum recursion depth exceeded, 'Test 20');
test(checkRecord(60000), Error: maximum recursion depth exceeded, 'Test 21');
test(checkRecord(4), 43, 'Test 22');
test(checkRecord(30000), Error: maximum recursion depth exceeded, 'Test 23');
test(checkRecord(45000), Error: maximum recursion depth exceeded, 'Test 24');
test(checkRecord(35000), Error: maximum recursion depth exceeded, 'Test 25');
test(checkRecord(85000), Error: maximum recursion depth exceeded, 'Test 26');
test(checkRecord(100003), Error: maximum recursion depth exceeded, 'Test 27');
test(checkRecord(80000), Error: maximum recursion depth exceeded, 'Test 28');
test(checkRecord(20000), Error: maximum recursion depth exceeded, 'Test 29');
test(checkRecord(5000), Error: maximum recursion depth exceeded, 'Test 30');
test(checkRecord(75000), Error: maximum recursion depth exceeded, 'Test 31');
test(checkRecord(20), 2947811, 'Test 32');
test(checkRecord(55000), Error: maximum recursion depth exceeded, 'Test 33');
test(checkRecord(40000), Error: maximum recursion depth exceeded, 'Test 34');
test(checkRecord(95000), Error: maximum recursion depth exceeded, 'Test 35');
test(checkRecord(65000), Error: maximum recursion depth exceeded, 'Test 36');
test(checkRecord(200), 110821862, 'Test 37');
test(checkRecord(100001), Error: maximum recursion depth exceeded, 'Test 38');
test(checkRecord(500), Error: maximum recursion depth exceeded, 'Test 39');
test(checkRecord(70000), Error: maximum recursion depth exceeded, 'Test 40');
test(checkRecord(25000), Error: maximum recursion depth exceeded, 'Test 41');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

