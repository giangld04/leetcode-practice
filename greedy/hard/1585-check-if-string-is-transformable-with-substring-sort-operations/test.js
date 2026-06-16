// Test: 1585. Check If String Is Transformable With Substring Sort Operations
// 147 test cases from LeetCodeDataset
// Run: node test.js

const { isTransformable } = require("./solution");

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

console.log("\n1585. Check If String Is Transformable With Substring Sort Operations\n");

test(isTransformable("9876543210", "0123456789"), true, 'Test 1');
test(isTransformable("1221", "1122"), true, 'Test 2');
test(isTransformable("987654321", "123456789"), true, 'Test 3');
test(isTransformable("123", "321"), false, 'Test 4');
test(isTransformable("9876543210", "9876543211"), false, 'Test 5');
test(isTransformable("98765", "56789"), true, 'Test 6');
test(isTransformable("11111", "11111"), true, 'Test 7');
test(isTransformable("34521", "23415"), true, 'Test 8');
test(isTransformable("12345", "12435"), false, 'Test 9');
test(isTransformable("12", "21"), false, 'Test 10');
test(isTransformable("1", "1"), true, 'Test 11');
test(isTransformable("123", "132"), false, 'Test 12');
test(isTransformable("12345", "54321"), false, 'Test 13');
test(isTransformable("123456789", "123456789"), true, 'Test 14');
test(isTransformable("1234567890", "0987654321"), false, 'Test 15');
test(isTransformable("4321", "1234"), true, 'Test 16');
test(isTransformable("13579", "97531"), false, 'Test 17');
test(isTransformable("84532", "34852"), true, 'Test 18');
test(isTransformable("1221", "2112"), false, 'Test 19');
test(isTransformable("123123", "112233"), true, 'Test 20');
test(isTransformable("111222333", "333222111"), false, 'Test 21');
test(isTransformable("12345678909876543210", "12345678909876543210"), true, 'Test 22');
test(isTransformable("100200300400500600700800900", "0000000000000000000123456789"), false, 'Test 23');
test(isTransformable("12345678909876543210", "09876543210123456789"), false, 'Test 24');
test(isTransformable("111122223333", "123123123123"), false, 'Test 25');
test(isTransformable("31415926535", "11233455569"), true, 'Test 26');
test(isTransformable("000111222333444555666777888999", "111122223333444455556666777788889999"), false, 'Test 27');
test(isTransformable("555544443333222211110000", "000011112222333344445555"), true, 'Test 28');
test(isTransformable("321123", "112233"), true, 'Test 29');
test(isTransformable("987654321987654321", "111122223333444455556666777788889999"), false, 'Test 30');
test(isTransformable("987654321009876543210", "00112233445566778899"), true, 'Test 31');
test(isTransformable("44443333222211110000", "00001111222233334444"), true, 'Test 32');
test(isTransformable("56321456", "12345566"), true, 'Test 33');
test(isTransformable("5432167890", "1234567890"), true, 'Test 34');
test(isTransformable("112233445566778899", "98765432101234567890"), false, 'Test 35');
test(isTransformable("632541", "123456"), true, 'Test 36');
test(isTransformable("11111111112222222222", "22222222221111111111"), false, 'Test 37');
test(isTransformable("0000111122223333", "3333222211110000"), false, 'Test 38');
test(isTransformable("234234234", "222333444"), true, 'Test 39');
test(isTransformable("33322111", "11122333"), true, 'Test 40');
test(isTransformable("98765432100123456789", "01234567890987654321"), false, 'Test 41');
test(isTransformable("654321654321", "111222333444555666"), false, 'Test 42');
test(isTransformable("987654321098765432109876543210", "000111222333444555666777888999"), true, 'Test 43');
test(isTransformable("98765432101234567890", "09876543210123456789"), true, 'Test 44');
test(isTransformable("123454321", "122113454"), false, 'Test 45');
test(isTransformable("3211123123", "111223332"), false, 'Test 46');
test(isTransformable("1222222222", "2222222221"), false, 'Test 47');
test(isTransformable("9876543210", "1098765432"), true, 'Test 48');
test(isTransformable("122112211", "111222112"), true, 'Test 49');
test(isTransformable("123456789012345678901234567890", "000111222333444555666777888999"), true, 'Test 50');
test(isTransformable("5432112345", "1122334455"), true, 'Test 51');
test(isTransformable("012345678901234567890123456789", "0011223344556677889900112233445566778899"), false, 'Test 52');
test(isTransformable("6677889900", "0011223344"), false, 'Test 53');
test(isTransformable("1234512345", "1122334455"), true, 'Test 54');
test(isTransformable("543216789", "123456789"), true, 'Test 55');
test(isTransformable("12345678909876543210", "01234567890123456789"), true, 'Test 56');
test(isTransformable("999888777666555444333222111000", "000111222333444555666777888999"), true, 'Test 57');
test(isTransformable("765432109876543210", "00112233445566778899"), false, 'Test 58');
test(isTransformable("99887766554433221100", "00112233445566778899"), true, 'Test 59');
test(isTransformable("98765432109876543210", "00112233445566778899"), true, 'Test 60');
test(isTransformable("333333333", "333333333"), true, 'Test 61');
test(isTransformable("1332211", "1112233"), true, 'Test 62');
test(isTransformable("567891234", "123456789"), true, 'Test 63');
test(isTransformable("12341234", "11223344"), true, 'Test 64');
test(isTransformable("35421", "12345"), true, 'Test 65');
test(isTransformable("5432109876", "0123456789"), true, 'Test 66');
test(isTransformable("54321", "12345"), true, 'Test 67');
test(isTransformable("534987621", "123456789"), true, 'Test 68');
test(isTransformable("111122223333", "333322221111"), false, 'Test 69');
test(isTransformable("11111111112222222222", "11111111112222222222"), true, 'Test 70');
test(isTransformable("98765432100987654321", "00112233445566778899"), true, 'Test 71');
test(isTransformable("99887766554433221100", "0011223344556677889900112233445566778899"), false, 'Test 72');
test(isTransformable("54321098765432109876543210", "0000111122223333444455556666777788889999"), false, 'Test 73');
test(isTransformable("5555555555", "5555555555"), true, 'Test 74');
test(isTransformable("65432123456", "12345623456"), true, 'Test 75');
test(isTransformable("432143214321", "111222333"), true, 'Test 76');
test(isTransformable("102030405060708090", "0000000000123456789"), false, 'Test 77');
test(isTransformable("111111111111", "111111111111"), true, 'Test 78');
test(isTransformable("98765432109876543210", "01234567890123456789"), true, 'Test 79');
test(isTransformable("9876543210", "1234567890"), true, 'Test 80');
test(isTransformable("432143214321", "111222333444"), true, 'Test 81');
test(isTransformable("10987654321", "12345678901"), false, 'Test 82');
test(isTransformable("5931246870", "0123456789"), true, 'Test 83');
test(isTransformable("111222333444555666777888999000", "000111222333444555666777888999"), true, 'Test 84');
test(isTransformable("9999888877776666555544443333222211110000", "0000111122223333444455556666777788889999"), true, 'Test 85');
test(isTransformable("123456789012345678901234567890", "000111222333444555666777888999111222333444555666777888999000"), false, 'Test 86');
test(isTransformable("55554444333322221111", "11112222333344445555"), true, 'Test 87');
test(isTransformable("1011121314151617181920", "1011121314151617181920"), true, 'Test 88');
test(isTransformable("333222111", "111222333"), true, 'Test 89');
test(isTransformable("12345678900987654321", "01234567899876543210"), false, 'Test 90');
test(isTransformable("111222333", "312312312"), false, 'Test 91');
test(isTransformable("23232323232323232323", "22222222223333333333"), true, 'Test 92');
test(isTransformable("123321", "112233"), true, 'Test 93');
test(isTransformable("12345678901234567890", "09876543210987654321"), false, 'Test 94');
test(isTransformable("99999888887777766666555554444433333222221111100000", "00000111112222233333444445555566666777778888899999"), true, 'Test 95');
test(isTransformable("654321123456", "112233445566"), true, 'Test 96');
test(isTransformable("010203040506070809", "00112233445566778899"), false, 'Test 97');
test(isTransformable("333222111222333111222333", "111111222222333333222"), true, 'Test 98');
test(isTransformable("321321321", "111222333"), true, 'Test 99');
test(isTransformable("12345678900987654321", "00123456789123456789"), true, 'Test 100');
test(isTransformable("11111111111111111111", "11111111111111111111"), true, 'Test 101');
test(isTransformable("111222333", "123123123"), false, 'Test 102');
test(isTransformable("2121212121", "1212121212"), true, 'Test 103');
test(isTransformable("2222211111", "1111122222"), true, 'Test 104');
test(isTransformable("12345678909876543210", "000111222333444555666777888999"), false, 'Test 105');
test(isTransformable("1111111111", "1111111111"), true, 'Test 106');
test(isTransformable("628491375", "123456789"), true, 'Test 107');
test(isTransformable("5317246", "1234567"), true, 'Test 108');
test(isTransformable("12345678901234567890", "01234567890123456789"), true, 'Test 109');
test(isTransformable("11223344556677889900", "00112233445566778899"), true, 'Test 110');
test(isTransformable("654321098765", "012345657896"), true, 'Test 111');
test(isTransformable("1234567890987654321012345678909876543210", "000000111111222222333333444444555555666666777777888888999999"), false, 'Test 112');
test(isTransformable("989898989898989898", "88888888888888888899"), false, 'Test 113');
test(isTransformable("321456987", "123456789"), true, 'Test 114');
test(isTransformable("143425", "123445"), true, 'Test 115');
test(isTransformable("98765432100123456789", "00112233445566778899"), true, 'Test 116');
test(isTransformable("12345678901234567890", "01020304050607080919"), false, 'Test 117');
test(isTransformable("321321321321321321", "111112222233333333"), false, 'Test 118');
test(isTransformable("12345678900123456789", "01234567891234567890"), false, 'Test 119');
test(isTransformable("12332121321321321", "11112222333323333"), false, 'Test 120');
test(isTransformable("98765432109876543210", "0011223344556677889900112233445566778899"), false, 'Test 121');
test(isTransformable("312312312", "111222333"), true, 'Test 122');
test(isTransformable("5555555555555555555555", "5555555555555555555555"), true, 'Test 123');
test(isTransformable("987654321010203040506070809", "0000111122223333444455556666777788889999"), false, 'Test 124');
test(isTransformable("9345728160", "0123456789"), true, 'Test 125');
test(isTransformable("43214321", "11223344"), true, 'Test 126');
test(isTransformable("1357924680", "0123456789"), true, 'Test 127');
test(isTransformable("98765432100123456789", "00123456789876543210"), false, 'Test 128');
test(isTransformable("123123123", "111222333"), true, 'Test 129');
test(isTransformable("123123123", "312312312"), false, 'Test 130');
test(isTransformable("543215432154321", "11112222333344445555"), false, 'Test 131');
test(isTransformable("98765432101111111111", "0111111111123456789"), true, 'Test 132');
test(isTransformable("43211234", "11223344"), true, 'Test 133');
test(isTransformable("6543210987", "7890123456"), false, 'Test 134');
test(isTransformable("12345678901234567890", "00112233445566778899"), true, 'Test 135');
test(isTransformable("555444333222111000", "000111222333444555"), true, 'Test 136');
test(isTransformable("98765432100123456789", "00123456789987654321"), false, 'Test 137');
test(isTransformable("0123456789876543210123456789", "0011223344556677889900112233445566778899"), false, 'Test 138');
test(isTransformable("55555555555555555555", "55555555555555555555"), true, 'Test 139');
test(isTransformable("11223344556677889900", "00998877665544332211"), false, 'Test 140');
test(isTransformable("1234567890987654321", "1234567890123456789"), true, 'Test 141');
test(isTransformable("6666666666", "6666666666"), true, 'Test 142');
test(isTransformable("6543212132435465768798", "11223344556677889965432"), false, 'Test 143');
test(isTransformable("333322211", "112223333"), true, 'Test 144');
test(isTransformable("4321111111234", "1111111234432"), false, 'Test 145');
test(isTransformable("87654321098765432109876543210", "0000001111112222223333334444445555556666667777778888889999999"), false, 'Test 146');
test(isTransformable("53142", "12345"), true, 'Test 147');

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
