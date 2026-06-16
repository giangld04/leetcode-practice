// Test: 1542. Find Longest Awesome Substring
// 133 test cases from LeetCodeDataset
// Run: node test.js

const { longestAwesome } = require("./solution");

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

console.log("\n1542. Find Longest Awesome Substring\n");

test(longestAwesome("1111"), 4, 'Test 1');
test(longestAwesome("1000000001"), 10, 'Test 2');
test(longestAwesome("9876543210"), 1, 'Test 3');
test(longestAwesome("213123"), 6, 'Test 4');
test(longestAwesome("9437493749"), 9, 'Test 5');
test(longestAwesome("1221"), 4, 'Test 6');
test(longestAwesome("1232112321"), 10, 'Test 7');
test(longestAwesome("122112211"), 9, 'Test 8');
test(longestAwesome("123454321"), 9, 'Test 9');
test(longestAwesome("98765432100123456789"), 20, 'Test 10');
test(longestAwesome("1111111111"), 10, 'Test 11');
test(longestAwesome("0000000000000000000"), 19, 'Test 12');
test(longestAwesome("2020202020"), 9, 'Test 13');
test(longestAwesome("1111111"), 7, 'Test 14');
test(longestAwesome("0123456789"), 1, 'Test 15');
test(longestAwesome("3242415"), 5, 'Test 16');
test(longestAwesome("2002"), 4, 'Test 17');
test(longestAwesome("0123210"), 7, 'Test 18');
test(longestAwesome("1234567890987654321"), 19, 'Test 19');
test(longestAwesome("00"), 2, 'Test 20');
test(longestAwesome("12321"), 5, 'Test 21');
test(longestAwesome("202020202"), 9, 'Test 22');
test(longestAwesome("12345678"), 1, 'Test 23');
test(longestAwesome("12345432101234543210"), 20, 'Test 24');
test(longestAwesome("123454321123454321"), 18, 'Test 25');
test(longestAwesome("2211001122110011221"), 19, 'Test 26');
test(longestAwesome("12345678901234567890123456789012345678901234567890"), 41, 'Test 27');
test(longestAwesome("1234321987897898765456543213212345654321234321"), 27, 'Test 28');
test(longestAwesome("99887766554433221100000000112233445566778899"), 44, 'Test 29');
test(longestAwesome("9876543211234567890"), 19, 'Test 30');
test(longestAwesome("1111111111111111111"), 19, 'Test 31');
test(longestAwesome("111112222233333444445555566666777778888899999"), 13, 'Test 32');
test(longestAwesome("999999999999999999999999999999999999999999999999999"), 51, 'Test 33');
test(longestAwesome("123321122132123321122132123321122132123321"), 39, 'Test 34');
test(longestAwesome("1232100000000000000012321"), 25, 'Test 35');
test(longestAwesome("123456543210101"), 15, 'Test 36');
test(longestAwesome("000000111111222222333333"), 24, 'Test 37');
test(longestAwesome("112233445566778899"), 18, 'Test 38');
test(longestAwesome("1122334455667788990000998877665544332211"), 40, 'Test 39');
test(longestAwesome("0000000000"), 10, 'Test 40');
test(longestAwesome("5959595959595959595"), 19, 'Test 41');
test(longestAwesome("2211221133443344"), 16, 'Test 42');
test(longestAwesome("1221333122133312213331221"), 25, 'Test 43');
test(longestAwesome("99887766554433221100112233445566778899"), 38, 'Test 44');
test(longestAwesome("123456789098765432101234567890"), 21, 'Test 45');
test(longestAwesome("1234543210987654321"), 9, 'Test 46');
test(longestAwesome("54321098765432109876543210987654321098765432109876"), 41, 'Test 47');
test(longestAwesome("1234567890123456789012345678901234567890"), 40, 'Test 48');
test(longestAwesome("01234567890987654321"), 20, 'Test 49');
test(longestAwesome("987654321098765432109876543210987654321098765432109876543210987654321098765432109876543210"), 81, 'Test 50');
test(longestAwesome("22221111000033334444"), 20, 'Test 51');
test(longestAwesome("12345678900000000001"), 11, 'Test 52');
test(longestAwesome("9090909090909090909090909090909090909090909090909090"), 52, 'Test 53');
test(longestAwesome("123123123123123123123123123123123123123123123123123"), 49, 'Test 54');
test(longestAwesome("99999999999999999999"), 20, 'Test 55');
test(longestAwesome("1234567898765432112345678987654321"), 34, 'Test 56');
test(longestAwesome("11111111111111111111"), 20, 'Test 57');
test(longestAwesome("11223344556677889900"), 20, 'Test 58');
test(longestAwesome("1122334455667788990099887766554433221100001100"), 46, 'Test 59');
test(longestAwesome("1221122112211221122112211221122112211221122112211221"), 52, 'Test 60');
test(longestAwesome("999988887777666655554444333322221111"), 36, 'Test 61');
test(longestAwesome("5555555555"), 10, 'Test 62');
test(longestAwesome("32165498798546123"), 17, 'Test 63');
test(longestAwesome("00000000000000000000000000000000000000000000000"), 47, 'Test 64');
test(longestAwesome("2468024680246802468"), 19, 'Test 65');
test(longestAwesome("123432101234321"), 15, 'Test 66');
test(longestAwesome("98765432109876543210"), 20, 'Test 67');
test(longestAwesome("3332222211111000000"), 15, 'Test 68');
test(longestAwesome("12345678909876543210123456789098765432101234567890"), 41, 'Test 69');
test(longestAwesome("111222333444555666777888999"), 7, 'Test 70');
test(longestAwesome("020406080080604020"), 18, 'Test 71');
test(longestAwesome("98765432123456789"), 17, 'Test 72');
test(longestAwesome("1122334455667788990011"), 22, 'Test 73');
test(longestAwesome("01234567898765432101234567890"), 21, 'Test 74');
test(longestAwesome("1221122112211"), 13, 'Test 75');
test(longestAwesome("111222333444555666777"), 7, 'Test 76');
test(longestAwesome("12213332211233333312"), 19, 'Test 77');
test(longestAwesome("998877665544332211000112233445566778899"), 39, 'Test 78');
test(longestAwesome("11112222333344445555"), 20, 'Test 79');
test(longestAwesome("12345432112345432100"), 20, 'Test 80');
test(longestAwesome("0246802468024680246"), 19, 'Test 81');
test(longestAwesome("101010101010101010101010101010101010101010101010101"), 51, 'Test 82');
test(longestAwesome("0121021012321012321"), 19, 'Test 83');
test(longestAwesome("9999888877776666555544443333222211110000"), 40, 'Test 84');
test(longestAwesome("9876543210987654321"), 19, 'Test 85');
test(longestAwesome("98765432109876543210987654321098765432109876543210"), 41, 'Test 86');
test(longestAwesome("12321232123212321"), 17, 'Test 87');
test(longestAwesome("0101010101010101010"), 19, 'Test 88');
test(longestAwesome("789789789"), 7, 'Test 89');
test(longestAwesome("12332145654"), 11, 'Test 90');
test(longestAwesome("123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890"), 81, 'Test 91');
test(longestAwesome("111222333444555666777888999000"), 7, 'Test 92');
test(longestAwesome("98765432100000000009"), 11, 'Test 93');
test(longestAwesome("9999999999"), 10, 'Test 94');
test(longestAwesome("0000000000111111111122222222223333333333"), 40, 'Test 95');
test(longestAwesome("1357913579135791357"), 19, 'Test 96');
test(longestAwesome("10203040504030201"), 17, 'Test 97');
test(longestAwesome("123454321012321"), 9, 'Test 98');
test(longestAwesome("55555555555555555555"), 20, 'Test 99');
test(longestAwesome("12345678900987654321"), 20, 'Test 100');
test(longestAwesome("0101010101010101010101010101010101010101010101010101"), 52, 'Test 101');
test(longestAwesome("00000000000000000000"), 20, 'Test 102');
test(longestAwesome("123123123123123123"), 18, 'Test 103');
test(longestAwesome("111222333444555666"), 7, 'Test 104');
test(longestAwesome("12213332122133321"), 17, 'Test 105');
test(longestAwesome("01010101010101"), 13, 'Test 106');
test(longestAwesome("1122334455667788990011223344556677889900"), 40, 'Test 107');
test(longestAwesome("555555555555555555555555555555555555"), 36, 'Test 108');
test(longestAwesome("9876543210123456789"), 19, 'Test 109');
test(longestAwesome("001122334455667788990099887766554433221100"), 42, 'Test 110');
test(longestAwesome("5555555555555555555555"), 22, 'Test 111');
test(longestAwesome("1010101010101010101010101010101010101010"), 40, 'Test 112');
test(longestAwesome("9988776655443322110099887766554433221100"), 40, 'Test 113');
test(longestAwesome("1122334455667788990099887766554433221100000000"), 46, 'Test 114');
test(longestAwesome("00112233445566778899"), 20, 'Test 115');
test(longestAwesome("122112333211"), 11, 'Test 116');
test(longestAwesome("00000000000000000001"), 19, 'Test 117');
test(longestAwesome("1223344556677889900998877665544332211"), 37, 'Test 118');
test(longestAwesome("1234567890098765432112345678900987654321"), 40, 'Test 119');
test(longestAwesome("111122223333444455556666"), 24, 'Test 120');
test(longestAwesome("00000111112222233333444445555566666777778888899999"), 13, 'Test 121');
test(longestAwesome("10000000000000000001"), 20, 'Test 122');
test(longestAwesome("000111222333444555666"), 7, 'Test 123');
test(longestAwesome("12345678900987654321012345678998765432101234567890"), 41, 'Test 124');
test(longestAwesome("12345678900000000000"), 11, 'Test 125');
test(longestAwesome("0220220120"), 7, 'Test 126');
test(longestAwesome("123123123123123"), 13, 'Test 127');
test(longestAwesome("10101010101010101010"), 20, 'Test 128');
test(longestAwesome("1122334455667788991111222233334444"), 34, 'Test 129');
test(longestAwesome("98765432100123456789987654321001234567899876543210"), 41, 'Test 130');
test(longestAwesome("121312131213121312131213121312131213"), 35, 'Test 131');
test(longestAwesome("5554443332221110000"), 9, 'Test 132');
test(longestAwesome("010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101"), 96, 'Test 133');

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
