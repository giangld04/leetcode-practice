// Test: 3179. Find The N Th Value After K Seconds
// 63 test cases from LeetCodeDataset
// Run: node test.js

const { valueAfterKSeconds } = require("./solution");

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

console.log("\n3179. Find The N Th Value After K Seconds\n");

test(valueAfterKSeconds(7, 4), 210, 'Test 1');
test(valueAfterKSeconds(2, 4), 5, 'Test 2');
test(valueAfterKSeconds(2, 5), 6, 'Test 3');
test(valueAfterKSeconds(8, 4), 330, 'Test 4');
test(valueAfterKSeconds(2, 1), 2, 'Test 5');
test(valueAfterKSeconds(1, 1), 1, 'Test 6');
test(valueAfterKSeconds(3, 2), 6, 'Test 7');
test(valueAfterKSeconds(6, 2), 21, 'Test 8');
test(valueAfterKSeconds(4, 5), 56, 'Test 9');
test(valueAfterKSeconds(3, 7), 36, 'Test 10');
test(valueAfterKSeconds(10, 10), 92378, 'Test 11');
test(valueAfterKSeconds(5, 3), 35, 'Test 12');
test(valueAfterKSeconds(3, 100), 5151, 'Test 13');
test(valueAfterKSeconds(9, 4), 495, 'Test 14');
test(valueAfterKSeconds(200, 200), 793946740, 'Test 15');
test(valueAfterKSeconds(6, 8), 1287, 'Test 16');
test(valueAfterKSeconds(200, 100), 824578740, 'Test 17');
test(valueAfterKSeconds(15, 15), 77558760, 'Test 18');
test(valueAfterKSeconds(9, 18), 1562275, 'Test 19');
test(valueAfterKSeconds(7, 3), 84, 'Test 20');
test(valueAfterKSeconds(15, 3), 680, 'Test 21');
test(valueAfterKSeconds(15, 1), 15, 'Test 22');
test(valueAfterKSeconds(30, 20), 527148437, 'Test 23');
test(valueAfterKSeconds(20, 20), 923263934, 'Test 24');
test(valueAfterKSeconds(10, 1), 10, 'Test 25');
test(valueAfterKSeconds(2, 1000), 1001, 'Test 26');
test(valueAfterKSeconds(7, 15), 54264, 'Test 27');
test(valueAfterKSeconds(8, 1), 8, 'Test 28');
test(valueAfterKSeconds(100, 50), 475860182, 'Test 29');
test(valueAfterKSeconds(250, 500), 540818587, 'Test 30');
test(valueAfterKSeconds(999, 999), 482800871, 'Test 31');
test(valueAfterKSeconds(30, 25), 462115415, 'Test 32');
test(valueAfterKSeconds(10, 5), 2002, 'Test 33');
test(valueAfterKSeconds(5, 10), 1001, 'Test 34');
test(valueAfterKSeconds(8, 3), 120, 'Test 35');
test(valueAfterKSeconds(15, 10), 1961256, 'Test 36');
test(valueAfterKSeconds(6, 15), 15504, 'Test 37');
test(valueAfterKSeconds(30, 30), 368504682, 'Test 38');
test(valueAfterKSeconds(75, 75), 133231804, 'Test 39');
test(valueAfterKSeconds(8, 7), 3432, 'Test 40');
test(valueAfterKSeconds(7, 7), 1716, 'Test 41');
test(valueAfterKSeconds(500, 500), 579917918, 'Test 42');
test(valueAfterKSeconds(20, 5), 42504, 'Test 43');
test(valueAfterKSeconds(5, 5), 126, 'Test 44');
test(valueAfterKSeconds(20, 15), 855967513, 'Test 45');
test(valueAfterKSeconds(4, 20), 1771, 'Test 46');
test(valueAfterKSeconds(7, 5), 462, 'Test 47');
test(valueAfterKSeconds(50, 50), 769496025, 'Test 48');
test(valueAfterKSeconds(1000, 1000), 36237869, 'Test 49');
test(valueAfterKSeconds(6, 3), 56, 'Test 50');
test(valueAfterKSeconds(15, 7), 116280, 'Test 51');
test(valueAfterKSeconds(250, 50), 46410598, 'Test 52');
test(valueAfterKSeconds(6, 6), 462, 'Test 53');
test(valueAfterKSeconds(1000, 1), 1000, 'Test 54');
test(valueAfterKSeconds(8, 8), 6435, 'Test 55');
test(valueAfterKSeconds(300, 250), 244556185, 'Test 56');
test(valueAfterKSeconds(11, 25), 183579396, 'Test 57');
test(valueAfterKSeconds(7, 20), 230230, 'Test 58');
test(valueAfterKSeconds(12, 12), 1352078, 'Test 59');
test(valueAfterKSeconds(50, 40), 280099481, 'Test 60');
test(valueAfterKSeconds(1, 1000), 1, 'Test 61');
test(valueAfterKSeconds(100, 100), 703668401, 'Test 62');
test(valueAfterKSeconds(500, 250), 81637167, 'Test 63');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

