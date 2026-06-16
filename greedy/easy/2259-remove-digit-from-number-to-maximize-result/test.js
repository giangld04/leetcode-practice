// Test: 2259. Remove Digit From Number To Maximize Result
// 126 test cases from LeetCodeDataset
// Run: node test.js

const { removeDigit } = require("./solution");

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

console.log("\n2259. Remove Digit From Number To Maximize Result\n");

test(removeDigit("222333", "2"), 22333, 'Test 1');
test(removeDigit("99999", "9"), 9999, 'Test 2');
test(removeDigit("999", "9"), 99, 'Test 3');
test(removeDigit("551", "5"), 51, 'Test 4');
test(removeDigit("10001", "0"), 1001, 'Test 5');
test(removeDigit("987654321", "9"), 87654321, 'Test 6');
test(removeDigit("123456789", "5"), 12346789, 'Test 7');
test(removeDigit("11111", "1"), 1111, 'Test 8');
test(removeDigit("123456789123456789", "4"), 12356789123456789, 'Test 9');
test(removeDigit("1000001", "0"), 100001, 'Test 10');
test(removeDigit("11211", "1"), 1211, 'Test 11');
test(removeDigit("123", "3"), 12, 'Test 12');
test(removeDigit("111111111", "1"), 11111111, 'Test 13');
test(removeDigit("1112", "1"), 112, 'Test 14');
test(removeDigit("999999999", "9"), 99999999, 'Test 15');
test(removeDigit("1231", "1"), 231, 'Test 16');
test(removeDigit("1221", "1"), 221, 'Test 17');
test(removeDigit("100000001", "0"), 10000001, 'Test 18');
test(removeDigit("87654321", "8"), 7654321, 'Test 19');
test(removeDigit("3141592653589793", "1"), 341592653589793, 'Test 20');
test(removeDigit("123456789", "8"), 12345679, 'Test 21');
test(removeDigit("987654321", "2"), 98765431, 'Test 22');
test(removeDigit("1221", "2"), 121, 'Test 23');
test(removeDigit("2222222", "2"), 222222, 'Test 24');
test(removeDigit("1111", "1"), 111, 'Test 25');
test(removeDigit("123456789", "9"), 12345678, 'Test 26');
test(removeDigit("5656565656", "6"), 565656565, 'Test 27');
test(removeDigit("987654321123456789", "4"), 98765432112356789, 'Test 28');
test(removeDigit("123123123123", "2"), 13123123123, 'Test 29');
test(removeDigit("10101010101010101010101010101010101010101010101010", "1"), 1010101010101010101010101010101010101010101010100, 'Test 30');
test(removeDigit("9898989898", "8"), 998989898, 'Test 31');
test(removeDigit("1122334455", "1"), 122334455, 'Test 32');
test(removeDigit("333333333", "3"), 33333333, 'Test 33');
test(removeDigit("1000000000", "1"), 000000000, 'Test 34');
test(removeDigit("9876543210", "5"), 987643210, 'Test 35');
test(removeDigit("12345654321", "3"), 1245654321, 'Test 36');
test(removeDigit("112233445566778899", "5"), 11223344566778899, 'Test 37');
test(removeDigit("100000000", "0"), 10000000, 'Test 38');
test(removeDigit("987987987", "7"), 98987987, 'Test 39');
test(removeDigit("101010101010", "0"), 11010101010, 'Test 40');
test(removeDigit("5959595959", "9"), 595959595, 'Test 41');
test(removeDigit("11223344556677889900", "1"), 1223344556677889900, 'Test 42');
test(removeDigit("987654321123456789987654321", "3"), 98765432112456789987654321, 'Test 43');
test(removeDigit("12345678901234567890", "0"), 1234567891234567890, 'Test 44');
test(removeDigit("122122122", "2"), 12212212, 'Test 45');
test(removeDigit("12345678901234567890", "4"), 1235678901234567890, 'Test 46');
test(removeDigit("123456789101112", "1"), 23456789101112, 'Test 47');
test(removeDigit("98765432109876543210", "5"), 9876543210987643210, 'Test 48');
test(removeDigit("11111111111111111111111111111111111111111111111111", "1"), 1111111111111111111111111111111111111111111111111, 'Test 49');
test(removeDigit("1919191919191919", "9"), 191919191919191, 'Test 50');
test(removeDigit("1000000001", "0"), 100000001, 'Test 51');
test(removeDigit("543219876", "9"), 54321876, 'Test 52');
test(removeDigit("56789101112131415161718192021", "1"), 5678910112131415161718192021, 'Test 53');
test(removeDigit("987654321987654321987654321987654321", "8"), 98765432198765432198765432197654321, 'Test 54');
test(removeDigit("123412341234", "2"), 13412341234, 'Test 55');
test(removeDigit("11223344556677889900", "0"), 1122334455667788990, 'Test 56');
test(removeDigit("12345678901234567890123456789012345678901234567890", "0"), 1234567891234567890123456789012345678901234567890, 'Test 57');
test(removeDigit("1919191919", "9"), 191919191, 'Test 58');
test(removeDigit("1919191919191919191919191919191919191919191919191", "9"), 191919191919191919191919191919191919191919191911, 'Test 59');
test(removeDigit("9999999999", "9"), 999999999, 'Test 60');
test(removeDigit("543219876987654321", "9"), 54321987687654321, 'Test 61');
test(removeDigit("987654321123456789", "1"), 98765432123456789, 'Test 62');
test(removeDigit("3131313131", "1"), 331313131, 'Test 63');
test(removeDigit("555555555555555555555", "5"), 55555555555555555555, 'Test 64');
test(removeDigit("123456789876543210987654321", "9"), 12345678987654321087654321, 'Test 65');
test(removeDigit("9999999999999999999", "9"), 999999999999999999, 'Test 66');
test(removeDigit("1212121212", "2"), 121212121, 'Test 67');
test(removeDigit("12345123451234512345", "4"), 1235123451234512345, 'Test 68');
test(removeDigit("91827364591827364591", "1"), 9827364591827364591, 'Test 69');
test(removeDigit("567567567", "7"), 56756756, 'Test 70');
test(removeDigit("999888777666555444333222111", "9"), 99888777666555444333222111, 'Test 71');
test(removeDigit("10000000001", "0"), 1000000001, 'Test 72');
test(removeDigit("876543210", "0"), 87654321, 'Test 73');
test(removeDigit("5645645645645645645645645645645645645645645645645", "5"), 645645645645645645645645645645645645645645645645, 'Test 74');
test(removeDigit("1234321", "3"), 124321, 'Test 75');
test(removeDigit("123456789123456789123456789", "8"), 12345679123456789123456789, 'Test 76');
test(removeDigit("123123123123123", "1"), 23123123123123, 'Test 77');
test(removeDigit("5656565656", "5"), 656565656, 'Test 78');
test(removeDigit("20202020202020202020202020202020202020202020202020", "2"), 2020202020202020202020202020202020202020202020200, 'Test 79');
test(removeDigit("2345678901234567890", "0"), 234567891234567890, 'Test 80');
test(removeDigit("918273645", "9"), 18273645, 'Test 81');
test(removeDigit("12233445566778899", "9"), 1223344556677889, 'Test 82');
test(removeDigit("5555555555555555555", "5"), 555555555555555555, 'Test 83');
test(removeDigit("101010101", "0"), 11010101, 'Test 84');
test(removeDigit("999999999999999999999", "9"), 99999999999999999999, 'Test 85');
test(removeDigit("8765432109876543210", "5"), 876543210987643210, 'Test 86');
test(removeDigit("33333333333333333333333333333333333333333333333333", "3"), 3333333333333333333333333333333333333333333333333, 'Test 87');
test(removeDigit("98765432109876543210", "6"), 9876543210987543210, 'Test 88');
test(removeDigit("100000000000000000000", "0"), 10000000000000000000, 'Test 89');
test(removeDigit("12345678901234567890", "7"), 1234568901234567890, 'Test 90');
test(removeDigit("3232323232323232", "3"), 323232323232322, 'Test 91');
test(removeDigit("123456789", "2"), 13456789, 'Test 92');
test(removeDigit("19191919191919191919", "9"), 1919191919191919191, 'Test 93');
test(removeDigit("123123123", "1"), 23123123, 'Test 94');
test(removeDigit("5645645645645645645645645645645645645645645645645", "6"), 564564564564564564564564564564564564564564564545, 'Test 95');
test(removeDigit("123987654321987654321987654321", "9"), 12398765432198765432187654321, 'Test 96');
test(removeDigit("1212121212121212121", "2"), 121212121212121211, 'Test 97');
test(removeDigit("123123123123123123123", "3"), 12312312312312312312, 'Test 98');
test(removeDigit("11111111111111111111", "1"), 1111111111111111111, 'Test 99');
test(removeDigit("112233445566778899", "1"), 12233445566778899, 'Test 100');
test(removeDigit("2222222222222222222222222222222", "2"), 222222222222222222222222222222, 'Test 101');
test(removeDigit("123987654321987654321987654321", "1"), 23987654321987654321987654321, 'Test 102');
test(removeDigit("987654321987654321", "9"), 98765432187654321, 'Test 103');
test(removeDigit("11111111111111111111111111111111111111111111", "1"), 1111111111111111111111111111111111111111111, 'Test 104');
test(removeDigit("9999999999999999999999999999999999999999999999999", "9"), 999999999999999999999999999999999999999999999999, 'Test 105');
test(removeDigit("111222333444555666777888999", "3"), 11122233444555666777888999, 'Test 106');
test(removeDigit("23333332", "3"), 2333332, 'Test 107');
test(removeDigit("22222222222222222222222222222222222222222222", "2"), 2222222222222222222222222222222222222222222, 'Test 108');
test(removeDigit("99999999991", "9"), 9999999991, 'Test 109');
test(removeDigit("333333", "3"), 33333, 'Test 110');
test(removeDigit("123456789123456789123456789", "9"), 12345678912345678912345678, 'Test 111');
test(removeDigit("123412341234", "1"), 23412341234, 'Test 112');
test(removeDigit("987654321123456789", "9"), 98765432112345678, 'Test 113');
test(removeDigit("543212345", "2"), 54321345, 'Test 114');
test(removeDigit("1111111111", "1"), 111111111, 'Test 115');
test(removeDigit("432143214321", "2"), 43214321431, 'Test 116');
test(removeDigit("12233445566778899", "1"), 2233445566778899, 'Test 117');
test(removeDigit("5555555555555555555555555555555555555555555555555", "5"), 555555555555555555555555555555555555555555555555, 'Test 118');
test(removeDigit("9876543210123456789", "9"), 987654321012345678, 'Test 119');
test(removeDigit("11112222", "2"), 1111222, 'Test 120');
test(removeDigit("31415926535", "1"), 3415926535, 'Test 121');
test(removeDigit("1234567890987654321", "5"), 123467890987654321, 'Test 122');
test(removeDigit("98877665544332211", "8"), 9877665544332211, 'Test 123');
test(removeDigit("1000000000", "0"), 100000000, 'Test 124');
test(removeDigit("2468135791113151719", "1"), 246835791113151719, 'Test 125');
test(removeDigit("12345678987654321", "7"), 1234568987654321, 'Test 126');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

// Auto-mark DONE when all tests pass
if (!failed) {
  const path = require("path");
  const fs = require("fs");
  const dir = __dirname;
  const folder = path.basename(dir);
  if (!folder.startsWith("DONE-")) {
    const parent = path.dirname(dir);
    const newDir = path.join(parent, "DONE-" + folder);
    fs.renameSync(dir, newDir);
    const readme = path.join(newDir, "README.md");
    if (fs.existsSync(readme)) {
      let c = fs.readFileSync(readme, "utf-8");
      if (!c.includes("<!-- SOLVED -->")) {
        c = c.replace(/^(# .+)$/m, "$1 ✅\n<!-- SOLVED -->");
        fs.writeFileSync(readme, c);
      }
    }
    console.log("✅ DONE → " + "DONE-" + folder);
  }
}
