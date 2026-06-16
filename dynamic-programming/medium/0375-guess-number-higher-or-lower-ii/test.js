// Test: 375. Guess Number Higher Or Lower Ii
// 28 test cases from LeetCodeDataset
// Run: node test.js

const { getMoneyAmount } = require("./solution");

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

console.log("\n375. Guess Number Higher Or Lower Ii\n");

test(getMoneyAmount(100), 400, 'Test 1');
test(getMoneyAmount(15), 30, 'Test 2');
test(getMoneyAmount(200), 952, 'Test 3');
test(getMoneyAmount(2), 1, 'Test 4');
test(getMoneyAmount(1), 0, 'Test 5');
test(getMoneyAmount(10), 16, 'Test 6');
test(getMoneyAmount(5), 6, 'Test 7');
test(getMoneyAmount(150), 692, 'Test 8');
test(getMoneyAmount(3), 2, 'Test 9');
test(getMoneyAmount(130), 585, 'Test 10');
test(getMoneyAmount(125), 560, 'Test 11');
test(getMoneyAmount(12), 21, 'Test 12');
test(getMoneyAmount(110), 460, 'Test 13');
test(getMoneyAmount(50), 172, 'Test 14');
test(getMoneyAmount(60), 214, 'Test 15');
test(getMoneyAmount(155), 718, 'Test 16');
test(getMoneyAmount(30), 79, 'Test 17');
test(getMoneyAmount(40), 119, 'Test 18');
test(getMoneyAmount(4), 4, 'Test 19');
test(getMoneyAmount(80), 295, 'Test 20');
test(getMoneyAmount(75), 274, 'Test 21');
test(getMoneyAmount(140), 635, 'Test 22');
test(getMoneyAmount(18), 42, 'Test 23');
test(getMoneyAmount(120), 529, 'Test 24');
test(getMoneyAmount(160), 743, 'Test 25');
test(getMoneyAmount(199), 946, 'Test 26');
test(getMoneyAmount(180), 843, 'Test 27');
test(getMoneyAmount(90), 345, 'Test 28');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

