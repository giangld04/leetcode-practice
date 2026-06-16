// Test: 483. Smallest Good Base
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { smallestGoodBase } = require("./solution");

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

console.log("\n483. Smallest Good Base\n");

test(smallestGoodBase("4681"), 8, 'Test 1');
test(smallestGoodBase("9"), 8, 'Test 2');
test(smallestGoodBase("104729"), 104728, 'Test 3');
test(smallestGoodBase("15"), 2, 'Test 4');
test(smallestGoodBase("218"), 217, 'Test 5');
test(smallestGoodBase("13"), 3, 'Test 6');
test(smallestGoodBase("81"), 80, 'Test 7');
test(smallestGoodBase("7"), 2, 'Test 8');
test(smallestGoodBase("3"), 2, 'Test 9');
test(smallestGoodBase("4"), 3, 'Test 10');
test(smallestGoodBase("121"), 3, 'Test 11');
test(smallestGoodBase("8"), 7, 'Test 12');
test(smallestGoodBase("21"), 4, 'Test 13');
test(smallestGoodBase("1023"), 2, 'Test 14');
test(smallestGoodBase("255"), 2, 'Test 15');
test(smallestGoodBase("91"), 9, 'Test 16');
test(smallestGoodBase("1000"), 999, 'Test 17');
test(smallestGoodBase("999"), 998, 'Test 18');
test(smallestGoodBase("1000000000000000000"), 999999999999999999, 'Test 19');
test(smallestGoodBase("2187"), 2186, 'Test 20');
test(smallestGoodBase("100"), 99, 'Test 21');
test(smallestGoodBase("343"), 18, 'Test 22');
test(smallestGoodBase("1801088541"), 1801088540, 'Test 23');
test(smallestGoodBase("2222222222222222222"), 2222222222222222221, 'Test 24');
test(smallestGoodBase("14348907"), 14348906, 'Test 25');
test(smallestGoodBase("59048"), 59047, 'Test 26');
test(smallestGoodBase("1125899906842623"), 2, 'Test 27');
test(smallestGoodBase("100000000"), 99999999, 'Test 28');
test(smallestGoodBase("79228162514264337593543950336"), 79228162514264337593543950335, 'Test 29');
test(smallestGoodBase("348678440099710752"), 348678440099710751, 'Test 30');
test(smallestGoodBase("222222222222222222"), 222222222222222221, 'Test 31');
test(smallestGoodBase("1234567890123456789"), 1234567890123456788, 'Test 32');
test(smallestGoodBase("617673396283947"), 617673396283946, 'Test 33');
test(smallestGoodBase("1000000000"), 999999999, 'Test 34');
test(smallestGoodBase("987654321"), 987654320, 'Test 35');
test(smallestGoodBase("298023223876953125"), 298023223876953124, 'Test 36');
test(smallestGoodBase("98765432109876543"), 98765432109876542, 'Test 37');
test(smallestGoodBase("3486784401"), 3486784400, 'Test 38');
test(smallestGoodBase("8191"), 2, 'Test 39');
test(smallestGoodBase("19683"), 19682, 'Test 40');
test(smallestGoodBase("12345678987654321"), 12345678987654320, 'Test 41');
test(smallestGoodBase("68719476736"), 68719476735, 'Test 42');
test(smallestGoodBase("549755813888"), 549755813887, 'Test 43');
test(smallestGoodBase("99999999999999999999999999999999999999999999999999999999999999999999999999999999999"), 99999999999999999999999999999999999999999999999999999999999999999999999999999999998, 'Test 44');
test(smallestGoodBase("3125"), 3124, 'Test 45');
test(smallestGoodBase("555555555555555555"), 555555555555555554, 'Test 46');
test(smallestGoodBase("281474976710656"), 281474976710655, 'Test 47');
test(smallestGoodBase("10000000000000000000000000000000000000000000000000000"), 9999999999999999999999999999999999999999999999999999, 'Test 48');
test(smallestGoodBase("18446744073709551615"), 2, 'Test 49');
test(smallestGoodBase("18014398509481984"), 18014398509481983, 'Test 50');
test(smallestGoodBase("193836733056657"), 193836733056656, 'Test 51');
test(smallestGoodBase("387420488"), 387420487, 'Test 52');
test(smallestGoodBase("8916100448256"), 8916100448255, 'Test 53');
test(smallestGoodBase("98765432109876543210987654321"), 98765432109876543210987654320, 'Test 54');
test(smallestGoodBase("6789101112131415161718192021222324252627282930"), 6789101112131415161718192021222324252627282929, 'Test 55');
test(smallestGoodBase("68719476735"), 2, 'Test 56');
test(smallestGoodBase("2357947691"), 2357947690, 'Test 57');
test(smallestGoodBase("1000000000000000000000000000000"), 999999999999999999999999999999, 'Test 58');
test(smallestGoodBase("4095"), 2, 'Test 59');
test(smallestGoodBase("65535"), 2, 'Test 60');
test(smallestGoodBase("16777216"), 16777215, 'Test 61');
test(smallestGoodBase("65537"), 65536, 'Test 62');
test(smallestGoodBase("111111111"), 10, 'Test 63');
test(smallestGoodBase("4398046511104"), 4398046511103, 'Test 64');
test(smallestGoodBase("111111111111111111"), 10, 'Test 65');
test(smallestGoodBase("823543"), 823542, 'Test 66');
test(smallestGoodBase("123456789101112131415"), 123456789101112131414, 'Test 67');
test(smallestGoodBase("101110111"), 101110110, 'Test 68');
test(smallestGoodBase("1111111111111111111"), 10, 'Test 69');
test(smallestGoodBase("38127987654321"), 38127987654320, 'Test 70');
test(smallestGoodBase("1111111111111111111111111111111"), 10, 'Test 71');
test(smallestGoodBase("161051"), 161050, 'Test 72');
test(smallestGoodBase("4294967295"), 2, 'Test 73');
test(smallestGoodBase("2305843009213693952"), 2305843009213693951, 'Test 74');
test(smallestGoodBase("1134903170"), 1134903169, 'Test 75');
test(smallestGoodBase("797161"), 3, 'Test 76');
test(smallestGoodBase("59049"), 59048, 'Test 77');
test(smallestGoodBase("678223072849"), 678223072848, 'Test 78');
test(smallestGoodBase("134217728"), 134217727, 'Test 79');
test(smallestGoodBase("999999999999999998"), 999999999999999997, 'Test 80');
test(smallestGoodBase("2000000000000000000"), 1999999999999999999, 'Test 81');
test(smallestGoodBase("999999999999999997"), 999999999999999996, 'Test 82');
test(smallestGoodBase("9223372036854775807"), 2, 'Test 83');
test(smallestGoodBase("123456789012345678"), 123456789012345677, 'Test 84');
test(smallestGoodBase("987654321987654321"), 987654321987654320, 'Test 85');
test(smallestGoodBase("515377520732011329"), 515377520732011328, 'Test 86');
test(smallestGoodBase("387420489"), 387420488, 'Test 87');
test(smallestGoodBase("282429536481"), 282429536480, 'Test 88');
test(smallestGoodBase("57896044618658097711785492504343953926634992332820282019728792003956564819949"), 57896044618658097711785492504343953926634992332820282019728792003956564819948, 'Test 89');
test(smallestGoodBase("268435455"), 2, 'Test 90');
test(smallestGoodBase("999999999"), 999999998, 'Test 91');
test(smallestGoodBase("9811"), 9810, 'Test 92');
test(smallestGoodBase("123456789"), 123456788, 'Test 93');
test(smallestGoodBase("3689348814741910323"), 3689348814741910322, 'Test 94');
test(smallestGoodBase("5555555555555555555"), 5555555555555555554, 'Test 95');
test(smallestGoodBase("999999999999999981"), 999999999999999980, 'Test 96');
test(smallestGoodBase("1024"), 1023, 'Test 97');
test(smallestGoodBase("1010101010101010101"), 100, 'Test 98');
test(smallestGoodBase("1111111111111111112"), 1111111111111111111, 'Test 99');
test(smallestGoodBase("555555555555555555555555555555"), 555555555555555555555555555554, 'Test 100');
test(smallestGoodBase("1000000000000000001"), 1000000000000000000, 'Test 101');
test(smallestGoodBase("78364164096"), 78364164095, 'Test 102');
test(smallestGoodBase("123456789012345678901234567890"), 123456789012345678901234567889, 'Test 103');
test(smallestGoodBase("1125899906842624"), 1125899906842623, 'Test 104');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

