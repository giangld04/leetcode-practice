// Test: 1625. Lexicographically Smallest String After Applying Operations
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { findLexSmallestString } = require("./solution");

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

console.log("\n1625. Lexicographically Smallest String After Applying Operations\n");

test(findLexSmallestString("5525", 9, 2), 2050, 'Test 1');
test(findLexSmallestString("9876543210", 7, 4), 1098765432, 'Test 2');
test(findLexSmallestString("74", 5, 1), 24, 'Test 3');
test(findLexSmallestString("8900", 3, 3), 0018, 'Test 4');
test(findLexSmallestString("1234567890", 7, 3), 0022446688, 'Test 5');
test(findLexSmallestString("3456", 5, 1), 0189, 'Test 6');
test(findLexSmallestString("0011", 4, 2), 0011, 'Test 7');
test(findLexSmallestString("1234567890", 3, 3), 0022446688, 'Test 8');
test(findLexSmallestString("9876543210", 3, 4), 1098765432, 'Test 9');
test(findLexSmallestString("1234567890", 1, 5), 0022446688, 'Test 10');
test(findLexSmallestString("5432109876", 6, 7), 0189674523, 'Test 11');
test(findLexSmallestString("0246802468", 4, 2), 0044882266, 'Test 12');
test(findLexSmallestString("908070605040302010", 5, 7), 000908070604030201, 'Test 13');
test(findLexSmallestString("3692581470", 4, 2), 1076329854, 'Test 14');
test(findLexSmallestString("1111111111", 1, 2), 1010101010, 'Test 15');
test(findLexSmallestString("2222222222", 5, 6), 2222222222, 'Test 16');
test(findLexSmallestString("0246813579", 4, 2), 0044893377, 'Test 17');
test(findLexSmallestString("9999999999", 2, 7), 1111111111, 'Test 18');
test(findLexSmallestString("8274635910", 3, 3), 0017365544, 'Test 19');
test(findLexSmallestString("123412341234", 2, 4), 103210321032, 'Test 20');
test(findLexSmallestString("2468024680", 3, 3), 0044882266, 'Test 21');
test(findLexSmallestString("0987654321", 7, 3), 0088664422, 'Test 22');
test(findLexSmallestString("9135791357", 8, 12), 9135791357, 'Test 23');
test(findLexSmallestString("3333333333", 3, 2), 3030303030, 'Test 24');
test(findLexSmallestString("9999999999", 1, 4), 9090909090, 'Test 25');
test(findLexSmallestString("12345678901234567890", 9, 10), 10325476981032547698, 'Test 26');
test(findLexSmallestString("1111111111", 7, 9), 0000000000, 'Test 27');
test(findLexSmallestString("595959", 3, 3), 000000, 'Test 28');
test(findLexSmallestString("9753186420", 7, 6), 1066229955, 'Test 29');
test(findLexSmallestString("0246802468", 5, 7), 0246802468, 'Test 30');
test(findLexSmallestString("1357924680", 5, 10), 1357924680, 'Test 31');
test(findLexSmallestString("9999999999", 2, 1), 1111111111, 'Test 32');
test(findLexSmallestString("5959595959", 2, 1), 1111111111, 'Test 33');
test(findLexSmallestString("6420875319", 9, 7), 0055117844, 'Test 34');
test(findLexSmallestString("6666666666", 6, 8), 6060606060, 'Test 35');
test(findLexSmallestString("2828282828", 3, 13), 2020202020, 'Test 36');
test(findLexSmallestString("8642086420", 7, 25), 8046026824, 'Test 37');
test(findLexSmallestString("00000000000000000000", 7, 15), 00000000000000000000, 'Test 38');
test(findLexSmallestString("3333333333", 7, 11), 3030303030, 'Test 39');
test(findLexSmallestString("1212121212", 4, 6), 1010101010, 'Test 40');
test(findLexSmallestString("5678901234", 2, 3), 0123456789, 'Test 41');
test(findLexSmallestString("8642086420", 5, 9), 0369258147, 'Test 42');
test(findLexSmallestString("11223344556677889900", 7, 8), 10213243546576879809, 'Test 43');
test(findLexSmallestString("676767676767676767676767", 9, 17), 000000000000000000000000, 'Test 44');
test(findLexSmallestString("9876543210", 1, 3), 0088664422, 'Test 45');
test(findLexSmallestString("999999", 5, 3), 444444, 'Test 46');
test(findLexSmallestString("0987654321", 9, 10), 0088664422, 'Test 47');
test(findLexSmallestString("5937160482", 4, 6), 0088553312, 'Test 48');
test(findLexSmallestString("8642086420", 3, 3), 0066228844, 'Test 49');
test(findLexSmallestString("4321098765", 6, 10), 4129078563, 'Test 50');
test(findLexSmallestString("112233445566778899", 4, 8), 112233445566778899, 'Test 51');
test(findLexSmallestString("1212121212", 5, 5), 1212121212, 'Test 52');
test(findLexSmallestString("3141592653589793238462643383", 3, 10), 2057529197278866683787354553, 'Test 53');
test(findLexSmallestString("135791357913579135", 6, 5), 115533771155993377, 'Test 54');
test(findLexSmallestString("86420", 3, 2), 00000, 'Test 55');
test(findLexSmallestString("2468024680", 9, 4), 0044882266, 'Test 56');
test(findLexSmallestString("0246813579", 6, 3), 0044893377, 'Test 57');
test(findLexSmallestString("0123456789", 9, 8), 0022446688, 'Test 58');
test(findLexSmallestString("8765432109", 6, 7), 0189674523, 'Test 59');
test(findLexSmallestString("3692581470", 4, 14), 3096521874, 'Test 60');
test(findLexSmallestString("020406080020406080020406", 8, 11), 000204000204060828486888, 'Test 61');
test(findLexSmallestString("0123456789", 9, 11), 0022446688, 'Test 62');
test(findLexSmallestString("4545454545", 5, 15), 4040404040, 'Test 63');
test(findLexSmallestString("4949494949", 2, 10), 4141414141, 'Test 64');
test(findLexSmallestString("1212121212", 5, 6), 1212121212, 'Test 65');
test(findLexSmallestString("9360258174", 5, 9), 0258174936, 'Test 66');
test(findLexSmallestString("2468024680", 8, 4), 0044882266, 'Test 67');
test(findLexSmallestString("1122334455", 6, 5), 1021379809, 'Test 68');
test(findLexSmallestString("246802468024680246802468", 7, 13), 004400448822660044882266, 'Test 69');
test(findLexSmallestString("2244668800", 3, 7), 0022446688, 'Test 70');
test(findLexSmallestString("1357913579", 4, 2), 1155993377, 'Test 71');
test(findLexSmallestString("9999999999", 3, 3), 0000000000, 'Test 72');
test(findLexSmallestString("0246813579", 4, 3), 0044893377, 'Test 73');
test(findLexSmallestString("0000000000", 9, 5), 0000000000, 'Test 74');
test(findLexSmallestString("8642097531", 6, 8), 0177338844, 'Test 75');
test(findLexSmallestString("0918273645", 2, 3), 0091827819, 'Test 76');
test(findLexSmallestString("0246813579", 8, 2), 0044893377, 'Test 77');
test(findLexSmallestString("1122334455", 7, 8), 1021324354, 'Test 78');
test(findLexSmallestString("7777777777", 3, 2), 7070707070, 'Test 79');
test(findLexSmallestString("86420", 9, 1), 00000, 'Test 80');
test(findLexSmallestString("1357924680", 5, 1), 0135792468, 'Test 81');
test(findLexSmallestString("4826037195", 2, 7), 0077599422, 'Test 82');
test(findLexSmallestString("5050505050", 9, 6), 5050505050, 'Test 83');
test(findLexSmallestString("595959595959595959", 4, 2), 515151515151515151, 'Test 84');
test(findLexSmallestString("7035298461", 8, 5), 1068392574, 'Test 85');
test(findLexSmallestString("1928374655", 3, 3), 0019283746, 'Test 86');
test(findLexSmallestString("5973159731", 2, 7), 1135775993, 'Test 87');
test(findLexSmallestString("99887766554433221100", 3, 6), 00998877665544332211, 'Test 88');
test(findLexSmallestString("9999999999", 9, 3), 0000000000, 'Test 89');
test(findLexSmallestString("1231231231", 8, 4), 1039103921, 'Test 90');
test(findLexSmallestString("2468035791", 2, 8), 0155992266, 'Test 91');
test(findLexSmallestString("8642086420", 5, 5), 3197531975, 'Test 92');
test(findLexSmallestString("2468024680", 6, 5), 0044882266, 'Test 93');
test(findLexSmallestString("5319753197", 6, 7), 1177339955, 'Test 94');
test(findLexSmallestString("9999999999", 2, 10), 9191919191, 'Test 95');
test(findLexSmallestString("1357924680", 2, 7), 0033771266, 'Test 96');
test(findLexSmallestString("0123456789", 9, 9), 0022446688, 'Test 97');
test(findLexSmallestString("2468024680", 5, 8), 0246802468, 'Test 98');
test(findLexSmallestString("1111111111", 8, 1), 1111111111, 'Test 99');
test(findLexSmallestString("99999999999999999999999999", 2, 19), 11111111111111111111111111, 'Test 100');
test(findLexSmallestString("1357924680", 3, 3), 0033771266, 'Test 101');
test(findLexSmallestString("2736814950", 3, 8), 2039844253, 'Test 102');
test(findLexSmallestString("1357913579", 8, 6), 1155993377, 'Test 103');
test(findLexSmallestString("2468013579", 7, 4), 0034782367, 'Test 104');
test(findLexSmallestString("1111111111", 9, 9), 0000000000, 'Test 105');
test(findLexSmallestString("9182736450", 4, 2), 5091827364, 'Test 106');
test(findLexSmallestString("5317902468", 6, 4), 1194286257, 'Test 107');
test(findLexSmallestString("9080706050", 8, 5), 0009030201, 'Test 108');
test(findLexSmallestString("4826093751", 5, 10), 4321043256, 'Test 109');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

