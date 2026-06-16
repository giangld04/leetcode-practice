// Test: 1689. Partitioning Into Minimum Number Of Deci Binary Numbers
// 72 test cases from LeetCodeDataset
// Run: node test.js

const { minPartitions } = require("./solution");

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

console.log("\n1689. Partitioning Into Minimum Number Of Deci Binary Numbers\n");

test(minPartitions("9876543210"), 9, 'Test 1');
test(minPartitions("111"), 1, 'Test 2');
test(minPartitions("123456789"), 9, 'Test 3');
test(minPartitions("1"), 1, 'Test 4');
test(minPartitions("82734"), 8, 'Test 5');
test(minPartitions("32"), 3, 'Test 6');
test(minPartitions("11111"), 1, 'Test 7');
test(minPartitions("555555555"), 5, 'Test 8');
test(minPartitions("9"), 9, 'Test 9');
test(minPartitions("27346209830709182346"), 9, 'Test 10');
test(minPartitions("1000000000"), 1, 'Test 11');
test(minPartitions("55555"), 5, 'Test 12');
test(minPartitions("987654321"), 9, 'Test 13');
test(minPartitions("987654321098765432109876543210"), 9, 'Test 14');
test(minPartitions("1999199919991999199919991999199919991999199919991999"), 9, 'Test 15');
test(minPartitions("11111111112222222222333333333333444444444444555555555"), 5, 'Test 16');
test(minPartitions("111999888777666555444333222111"), 9, 'Test 17');
test(minPartitions("8888888888888888888888888888888888888888"), 8, 'Test 18');
test(minPartitions("87654321098765432109"), 9, 'Test 19');
test(minPartitions("999999999"), 9, 'Test 20');
test(minPartitions("11111111111111111111"), 1, 'Test 21');
test(minPartitions("11111111111111111111111111111111111111111111111111111111111111111111111111111111111"), 1, 'Test 22');
test(minPartitions("999999999999999999999999999999"), 9, 'Test 23');
test(minPartitions("44444444444444444444444444444444444444444444444444"), 4, 'Test 24');
test(minPartitions("101010101010101010101010101010"), 1, 'Test 25');
test(minPartitions("5432105432105432105432105432105432105432105432105432"), 5, 'Test 26');
test(minPartitions("10000000000000000000"), 1, 'Test 27');
test(minPartitions("19191919191919191919"), 9, 'Test 28');
test(minPartitions("77777777777777777777777777777777777777777777777777"), 7, 'Test 29');
test(minPartitions("222222222222222222222222222222222222222222222222222"), 2, 'Test 30');
test(minPartitions("99999999999999999999"), 9, 'Test 31');
test(minPartitions("8456391728391657813265813265"), 9, 'Test 32');
test(minPartitions("9999999999"), 9, 'Test 33');
test(minPartitions("918273645091827364509182736450"), 9, 'Test 34');
test(minPartitions("12345678901234567890"), 9, 'Test 35');
test(minPartitions("9999111199991111999911119999111199991111999911119999"), 9, 'Test 36');
test(minPartitions("19191919191919191919191919191919191919191919191919191919191919191919191919191919"), 9, 'Test 37');
test(minPartitions("10000000000000000000000000000000000000000000"), 1, 'Test 38');
test(minPartitions("55555555555555555555"), 5, 'Test 39');
test(minPartitions("888888888888888888888888888888888888888888888888888"), 8, 'Test 40');
test(minPartitions("99999"), 9, 'Test 41');
test(minPartitions("1111111111"), 1, 'Test 42');
test(minPartitions("987654321012345678987654321"), 9, 'Test 43');
test(minPartitions("10101010101010101010101010101010"), 1, 'Test 44');
test(minPartitions("24681357924681357924"), 9, 'Test 45');
test(minPartitions("123456789876543210000000000000000000000000000000000"), 9, 'Test 46');
test(minPartitions("12345678987654321"), 9, 'Test 47');
test(minPartitions("10101010101010101010"), 1, 'Test 48');
test(minPartitions("111222333444555666777888999"), 9, 'Test 49');
test(minPartitions("18181818181818181818"), 8, 'Test 50');
test(minPartitions("13579135791357913579"), 9, 'Test 51');
test(minPartitions("101010101010101010101010101"), 1, 'Test 52');
test(minPartitions("100000000000000000000000000000"), 1, 'Test 53');
test(minPartitions("765432101023456765432101023456765432101023456765432"), 7, 'Test 54');
test(minPartitions("8765432109876543210987654321"), 9, 'Test 55');
test(minPartitions("918273645432187654321"), 9, 'Test 56');
test(minPartitions("2468135791113151719"), 9, 'Test 57');
test(minPartitions("1234567890"), 9, 'Test 58');
test(minPartitions("22222222222222222222"), 2, 'Test 59');
test(minPartitions("98765432109876543210"), 9, 'Test 60');
test(minPartitions("123123123123123123123123123"), 3, 'Test 61');
test(minPartitions("191919191919191919191919191919191919191919191919191"), 9, 'Test 62');
test(minPartitions("24680246802468024680"), 8, 'Test 63');
test(minPartitions("111122223333444455556666777788889999"), 9, 'Test 64');
test(minPartitions("50505050505050505050505050505050505050505050"), 5, 'Test 65');
test(minPartitions("123456789012345678901234567890"), 9, 'Test 66');
test(minPartitions("50000000000000000005"), 5, 'Test 67');
test(minPartitions("5555555555"), 5, 'Test 68');
test(minPartitions("192837465056473829109876543210"), 9, 'Test 69');
test(minPartitions("87654321987654321098"), 9, 'Test 70');
test(minPartitions("90000000000000000000900000000000000000000009"), 9, 'Test 71');
test(minPartitions("987654321987654321987654321987654321"), 9, 'Test 72');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

