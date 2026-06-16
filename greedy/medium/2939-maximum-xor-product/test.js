// Test: 2939. Maximum Xor Product
// 88 test cases from LeetCodeDataset
// Run: node test.js

const { maximumXorProduct } = require("./solution");

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

console.log("\n2939. Maximum Xor Product\n");

test(maximumXorProduct(7, 14, 4), 98, 'Test 1');
test(maximumXorProduct(15, 9, 4), 143, 'Test 2');
test(maximumXorProduct(1, 2, 1), 2, 'Test 3');
test(maximumXorProduct(6, 7, 5), 930, 'Test 4');
test(maximumXorProduct(1024, 512, 11), 1570305, 'Test 5');
test(maximumXorProduct(3, 12, 4), 56, 'Test 6');
test(maximumXorProduct(12, 5, 4), 98, 'Test 7');
test(maximumXorProduct(249, 249, 50), 178448631, 'Test 8');
test(maximumXorProduct(0, 0, 50), 178448631, 'Test 9');
test(maximumXorProduct(0, 0, 5), 961, 'Test 10');
test(maximumXorProduct(3, 3, 2), 9, 'Test 11');
test(maximumXorProduct(8, 8, 4), 225, 'Test 12');
test(maximumXorProduct(1024, 512, 10), 1570305, 'Test 13');
test(maximumXorProduct(249, 248, 50), 279487308, 'Test 14');
test(maximumXorProduct(7, 3, 3), 21, 'Test 15');
test(maximumXorProduct(1, 1, 1), 1, 'Test 16');
test(maximumXorProduct(1, 6, 3), 12, 'Test 17');
test(maximumXorProduct(1099511627776, 2199023255552, 42), 421746426, 'Test 18');
test(maximumXorProduct(123, 456, 10), 647348, 'Test 19');
test(maximumXorProduct(1000000000, 1000000000, 30), 388912871, 'Test 20');
test(maximumXorProduct(1023456789, 9876543210, 30), 443244632, 'Test 21');
test(maximumXorProduct(4294967295, 1, 32), 145586001, 'Test 22');
test(maximumXorProduct(256, 1024, 11), 1832193, 'Test 23');
test(maximumXorProduct(25, 25, 5), 961, 'Test 24');
test(maximumXorProduct(2**30 + 2**29 + 2**28 + 2**27, 2**31 + 2**30, 32), Error: Solution.maximumXorProduct[] missing 2 required positional arguments: 'a' and 'b', 'Test 25');
test(maximumXorProduct(1, 2499999999999, 50), 63711638, 'Test 26');
test(maximumXorProduct(4294967295, 4294967295, 32), 992409480, 'Test 27');
test(maximumXorProduct(0, 1, 50), 279487308, 'Test 28');
test(maximumXorProduct(2**15 + 2**14 + 2**13, 2**16 + 2**15, 17), Error: Solution.maximumXorProduct[] missing 2 required positional arguments: 'a' and 'b', 'Test 29');
test(maximumXorProduct(1023, 512, 10), 589056, 'Test 30');
test(maximumXorProduct(123456, 654321, 20), 306001604, 'Test 31');
test(maximumXorProduct(123456789, 987654321, 35), 251423918, 'Test 32');
test(maximumXorProduct(2**30 - 1, 2**30 - 2, 30), Error: Solution.maximumXorProduct[] missing 2 required positional arguments: 'a' and 'b', 'Test 33');
test(maximumXorProduct(2**25 - 1, 2**25, 26), Error: Solution.maximumXorProduct[] missing 2 required positional arguments: 'a' and 'b', 'Test 34');
test(maximumXorProduct(4294967294, 4294967295, 32), 697442213, 'Test 35');
test(maximumXorProduct(2**49 - 1, 2**49 - 2, 50), Error: Solution.maximumXorProduct[] missing 2 required positional arguments: 'a' and 'b', 'Test 36');
test(maximumXorProduct(8, 15, 4), 132, 'Test 37');
test(maximumXorProduct(2, 3, 50), 279487308, 'Test 38');
test(maximumXorProduct(500000000, 500000001, 30), 315171055, 'Test 39');
test(maximumXorProduct(45, 28, 6), 1426, 'Test 40');
test(maximumXorProduct(500000000, 1000000000, 35), 632039372, 'Test 41');
test(maximumXorProduct(2**35 - 1, 2**35, 35), Error: Solution.maximumXorProduct[] missing 2 required positional arguments: 'a' and 'b', 'Test 42');
test(maximumXorProduct(8, 4, 3), 77, 'Test 43');
test(maximumXorProduct(9876543210987654, 1234567890123456, 50), 300686351, 'Test 44');
test(maximumXorProduct(1023, 2047, 11), 2094081, 'Test 45');
test(maximumXorProduct(456789123, 234567891, 35), 765343141, 'Test 46');
test(maximumXorProduct(999999999, 888888888, 45), 179328999, 'Test 47');
test(maximumXorProduct(789, 101112, 15), 211542482, 'Test 48');
test(maximumXorProduct(123456789, 987654321, 20), 309102622, 'Test 49');
test(maximumXorProduct(67890, 13579, 15), 715925548, 'Test 50');
test(maximumXorProduct(31, 15, 5), 465, 'Test 51');
test(maximumXorProduct(1000000000, 500000000, 30), 446861332, 'Test 52');
test(maximumXorProduct(2**48 - 1, 2**48, 49), Error: Solution.maximumXorProduct[] missing 2 required positional arguments: 'a' and 'b', 'Test 53');
test(maximumXorProduct(2**20, 2**20 + 1, 21), Error: Solution.maximumXorProduct[] missing 2 required positional arguments: 'a' and 'b', 'Test 54');
test(maximumXorProduct(111111111, 222222222, 40), 554920250, 'Test 55');
test(maximumXorProduct(1000000000, 2000000000, 49), 857287546, 'Test 56');
test(maximumXorProduct(1, 2147483647, 30), 536396503, 'Test 57');
test(maximumXorProduct(987654321, 123456789, 30), 664805056, 'Test 58');
test(maximumXorProduct(555555555, 666666666, 48), 651387213, 'Test 59');
test(maximumXorProduct(2**15, 2**15 - 1, 15), Error: Solution.maximumXorProduct[] missing 2 required positional arguments: 'a' and 'b', 'Test 60');
test(maximumXorProduct(299999999, 299999998, 28), 523486406, 'Test 61');
test(maximumXorProduct(2**20 - 1, 0, 20), Error: Solution.maximumXorProduct[] missing 1 required positional argument: 'a', 'Test 62');
test(maximumXorProduct(2**40 + 2**39 + 2**38 + 2**37, 2**41 + 2**40, 42), Error: Solution.maximumXorProduct[] missing 2 required positional arguments: 'a' and 'b', 'Test 63');
test(maximumXorProduct(1048576, 2097152, 22), 64477598, 'Test 64');
test(maximumXorProduct(2147483647, 1073741823, 31), 851567558, 'Test 65');
test(maximumXorProduct(1, 2147483647, 50), 519485508, 'Test 66');
test(maximumXorProduct(135792468, 246813579, 32), 736568943, 'Test 67');
test(maximumXorProduct(1000000000000, 999999999999, 40), 810111777, 'Test 68');
test(maximumXorProduct(1, 2, 50), 481564664, 'Test 69');
test(maximumXorProduct(18446744073709551615, 18446744073709551614, 50), 532600269, 'Test 70');
test(maximumXorProduct(50, 50, 10), 1046529, 'Test 71');
test(maximumXorProduct(2147483647, 2147483647, 32), 992409480, 'Test 72');
test(maximumXorProduct(65535, 131071, 17), 589737929, 'Test 73');
test(maximumXorProduct(13, 29, 5), 465, 'Test 74');
test(maximumXorProduct(123456789, 987654321, 30), 664805056, 'Test 75');
test(maximumXorProduct(2147483647, 1, 30), 536396503, 'Test 76');
test(maximumXorProduct(1000000000, 1000000000, 31), 850618742, 'Test 77');
test(maximumXorProduct(123, 456, 8), 84660, 'Test 78');
test(maximumXorProduct(12345, 67890, 15), 742597886, 'Test 79');
test(maximumXorProduct(2**25 - 1, 2**25 - 2, 25), Error: Solution.maximumXorProduct[] missing 2 required positional arguments: 'a' and 'b', 'Test 80');
test(maximumXorProduct(2, 3, 1), 6, 'Test 81');
test(maximumXorProduct(1, 2147483647, 31), 536396503, 'Test 82');
test(maximumXorProduct(248, 231, 10), 1015056, 'Test 83');
test(maximumXorProduct(999999999, 999999998, 30), 315171055, 'Test 84');
test(maximumXorProduct(511, 1023, 10), 522753, 'Test 85');
test(maximumXorProduct(1, 0, 50), 279487308, 'Test 86');
test(maximumXorProduct(1, 2**50 - 1, 50), Error: Solution.maximumXorProduct[] missing 1 required positional argument: 'b', 'Test 87');
test(maximumXorProduct(2**40, 2**40 - 1, 45), Error: Solution.maximumXorProduct[] missing 2 required positional arguments: 'a' and 'b', 'Test 88');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

