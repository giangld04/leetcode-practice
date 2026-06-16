// Test: 1411. Number Of Ways To Paint N 3 Grid
// 37 test cases from LeetCodeDataset
// Run: node test.js

const { numOfWays } = require("./solution");

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

console.log("\n1411. Number Of Ways To Paint N 3 Grid\n");

test(numOfWays(3), 246, 'Test 1');
test(numOfWays(1000), 650420578, 'Test 2');
test(numOfWays(100), 905790447, 'Test 3');
test(numOfWays(2500), 80958521, 'Test 4');
test(numOfWays(4), 1122, 'Test 5');
test(numOfWays(4999), 134620719, 'Test 6');
test(numOfWays(5000), 30228214, 'Test 7');
test(numOfWays(2), 54, 'Test 8');
test(numOfWays(1), 12, 'Test 9');
test(numOfWays(500), 350959293, 'Test 10');
test(numOfWays(50), 151149117, 'Test 11');
test(numOfWays(10), 10107954, 'Test 12');
test(numOfWays(5), 5118, 'Test 13');
test(numOfWays(4000), 685933196, 'Test 14');
test(numOfWays(12), 210323922, 'Test 15');
test(numOfWays(2000), 897054912, 'Test 16');
test(numOfWays(3750), 477003884, 'Test 17');
test(numOfWays(3500), 28484708, 'Test 18');
test(numOfWays(3000), 313837042, 'Test 19');
test(numOfWays(30), 462032897, 'Test 20');
test(numOfWays(16), 62485141, 'Test 21');
test(numOfWays(10000), 779575021, 'Test 22');
test(numOfWays(8), 485778, 'Test 23');
test(numOfWays(250), 601916395, 'Test 24');
test(numOfWays(999), 672393158, 'Test 25');
test(numOfWays(32), 554911778, 'Test 26');
test(numOfWays(20), 690883140, 'Test 27');
test(numOfWays(11), 46107966, 'Test 28');
test(numOfWays(15), 963045241, 'Test 29');
test(numOfWays(200), 693684710, 'Test 30');
test(numOfWays(1234), 18988659, 'Test 31');
test(numOfWays(750), 493513580, 'Test 32');
test(numOfWays(4500), 471193061, 'Test 33');
test(numOfWays(6), 23346, 'Test 34');
test(numOfWays(7), 106494, 'Test 35');
test(numOfWays(25), 676744457, 'Test 36');
test(numOfWays(1500), 814277332, 'Test 37');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

