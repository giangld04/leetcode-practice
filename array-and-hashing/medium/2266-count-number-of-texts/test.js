// Test: 2266. Count Number Of Texts
// 38 test cases from LeetCodeDataset
// Run: node test.js

const { countTexts } = require("./solution");

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

console.log("\n2266. Count Number Of Texts\n");

test(countTexts("99999999"), 108, 'Test 1');
test(countTexts("3333"), 7, 'Test 2');
test(countTexts("33"), 2, 'Test 3');
test(countTexts("4444"), 7, 'Test 4');
test(countTexts("555555"), 24, 'Test 5');
test(countTexts("9999999"), 56, 'Test 6');
test(countTexts("888888888"), 149, 'Test 7');
test(countTexts("888888"), 24, 'Test 8');
test(countTexts("7777777"), 56, 'Test 9');
test(countTexts("66"), 2, 'Test 10');
test(countTexts("55555"), 13, 'Test 11');
test(countTexts("888"), 4, 'Test 12');
test(countTexts("33344455566677778889999"), 65536, 'Test 13');
test(countTexts("2222"), 7, 'Test 14');
test(countTexts("7777"), 8, 'Test 15');
test(countTexts("77777777"), 108, 'Test 16');
test(countTexts("8888"), 7, 'Test 17');
test(countTexts("6666666"), 44, 'Test 18');
test(countTexts("23456789"), 1, 'Test 19');
test(countTexts("666"), 4, 'Test 20');
test(countTexts("22233"), 8, 'Test 21');
test(countTexts("555"), 4, 'Test 22');
test(countTexts("9999999999"), 401, 'Test 23');
test(countTexts("44444"), 13, 'Test 24');
test(countTexts("333333"), 24, 'Test 25');
test(countTexts("99999"), 15, 'Test 26');
test(countTexts("88888"), 13, 'Test 27');
test(countTexts("222222222222222222222222222222222222"), 82876089, 'Test 28');
test(countTexts("9999888777666555444333222111"), 524288, 'Test 29');
test(countTexts("777777777777777777777777777777777777"), 312882411, 'Test 30');
test(countTexts("2222222222222222222222222222222222227777777777777777777777777777777"), 168766023, 'Test 31');
test(countTexts("2223333333333333333333333333333333334444444444444444444444444444444"), 151530826, 'Test 32');
test(countTexts("234567898765432345678987654323456789876543234567898765432"), 1, 'Test 33');
test(countTexts("7773333322225555555555444446666688888"), 219119992, 'Test 34');
test(countTexts("222222222222222222222222222222222222444444444444444444444444444"), 964547839, 'Test 35');
test(countTexts("9999999999999999999999999999999999999999999999999999999999999999999"), 831813694, 'Test 36');
test(countTexts("55555555555555555555555555555555555577777777777777777777777777777778888888888888888888888888888888"), 60492310, 'Test 37');
test(countTexts("333322225555444466668888"), 117649, 'Test 38');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

