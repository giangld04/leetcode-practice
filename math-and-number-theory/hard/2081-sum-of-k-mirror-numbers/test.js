// Test: 2081. Sum Of K Mirror Numbers
// 63 test cases from LeetCodeDataset
// Run: node test.js

const { kMirror } = require("./solution");

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

console.log("\n2081. Sum Of K Mirror Numbers\n");

test(kMirror(2, 1), 1, 'Test 1');
test(kMirror(5, 8), 638, 'Test 2');
test(kMirror(8, 15), 5818, 'Test 3');
test(kMirror(9, 5), 15, 'Test 4');
test(kMirror(9, 6), 21, 'Test 5');
test(kMirror(8, 9), 158, 'Test 6');
test(kMirror(4, 8), 1498, 'Test 7');
test(kMirror(9, 30), 18627530, 'Test 8');
test(kMirror(2, 10), 1772, 'Test 9');
test(kMirror(4, 10), 3224, 'Test 10');
test(kMirror(3, 7), 499, 'Test 11');
test(kMirror(5, 10), 1940, 'Test 12');
test(kMirror(9, 10), 509, 'Test 13');
test(kMirror(9, 20), 156242, 'Test 14');
test(kMirror(4, 15), 233041, 'Test 15');
test(kMirror(6, 12), 1297, 'Test 16');
test(kMirror(8, 20), 94182, 'Test 17');
test(kMirror(3, 5), 136, 'Test 18');
test(kMirror(5, 15), 20526195, 'Test 19');
test(kMirror(2, 5), 25, 'Test 20');
test(kMirror(2, 30), 2609044274, 'Test 21');
test(kMirror(7, 17), 20379000, 'Test 22');
test(kMirror(7, 28), 115121130305, 'Test 23');
test(kMirror(5, 25), 6849225412, 'Test 24');
test(kMirror(3, 20), 2863752, 'Test 25');
test(kMirror(8, 28), 7054305, 'Test 26');
test(kMirror(7, 35), 639048703165, 'Test 27');
test(kMirror(9, 15), 3203, 'Test 28');
test(kMirror(5, 20), 1000828708, 'Test 29');
test(kMirror(7, 15), 6822448, 'Test 30');
test(kMirror(6, 25), 7009551, 'Test 31');
test(kMirror(8, 25), 1651182, 'Test 32');
test(kMirror(6, 30), 28888231, 'Test 33');
test(kMirror(4, 50), Execution timed out, 'Test 34');
test(kMirror(2, 25), 20005383, 'Test 35');
test(kMirror(6, 28), 19806423, 'Test 36');
test(kMirror(4, 22), 22726545, 'Test 37');
test(kMirror(2, 100), Execution timed out, 'Test 38');
test(kMirror(9, 29), 16185088, 'Test 39');
test(kMirror(5, 28), 19101218022, 'Test 40');
test(kMirror(9, 27), 11349704, 'Test 41');
test(kMirror(8, 17), 27727, 'Test 42');
test(kMirror(6, 15), 4383, 'Test 43');
test(kMirror(5, 30), 43401017264, 'Test 44');
test(kMirror(4, 28), 721411086, 'Test 45');
test(kMirror(3, 28), 44192979, 'Test 46');
test(kMirror(4, 20), 12448815, 'Test 47');
test(kMirror(9, 25), 7586042, 'Test 48');
test(kMirror(7, 19), 91104965, 'Test 49');
test(kMirror(9, 35), 33584024, 'Test 50');
test(kMirror(9, 28), 13750746, 'Test 51');
test(kMirror(2, 28), 759196316, 'Test 52');
test(kMirror(4, 25), 38898160, 'Test 53');
test(kMirror(6, 20), 156389, 'Test 54');
test(kMirror(5, 50), Execution timed out, 'Test 55');
test(kMirror(3, 30), 155059889, 'Test 56');
test(kMirror(8, 18), 41058, 'Test 57');
test(kMirror(7, 20), 321578997, 'Test 58');
test(kMirror(7, 25), 3428700695, 'Test 59');
test(kMirror(8, 30), 66619574, 'Test 60');
test(kMirror(6, 18), 41849, 'Test 61');
test(kMirror(3, 100), Execution timed out, 'Test 62');
test(kMirror(7, 30), 241030621167, 'Test 63');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

