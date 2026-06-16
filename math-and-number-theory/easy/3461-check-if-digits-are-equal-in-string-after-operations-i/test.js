// Test: 3461. Check If Digits Are Equal In String After Operations I
// 127 test cases from LeetCodeDataset
// Run: node test.js

const { hasSameDigits } = require("./solution");

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

console.log("\n3461. Check If Digits Are Equal In String After Operations I\n");

test(hasSameDigits("9876543210"), false, 'Test 1');
test(hasSameDigits("100100"), false, 'Test 2');
test(hasSameDigits("123321"), true, 'Test 3');
test(hasSameDigits("111"), true, 'Test 4');
test(hasSameDigits("1234567890"), false, 'Test 5');
test(hasSameDigits("55555"), true, 'Test 6');
test(hasSameDigits("13579"), false, 'Test 7');
test(hasSameDigits("222222"), true, 'Test 8');
test(hasSameDigits("99999"), true, 'Test 9');
test(hasSameDigits("9999"), true, 'Test 10');
test(hasSameDigits("3902"), true, 'Test 11');
test(hasSameDigits("11111"), true, 'Test 12');
test(hasSameDigits("123456"), false, 'Test 13');
test(hasSameDigits("000"), true, 'Test 14');
test(hasSameDigits("789"), false, 'Test 15');
test(hasSameDigits("34789"), false, 'Test 16');
test(hasSameDigits("12121"), true, 'Test 17');
test(hasSameDigits("987654"), false, 'Test 18');
test(hasSameDigits("999"), true, 'Test 19');
test(hasSameDigits("24680"), false, 'Test 20');
test(hasSameDigits("55"), true, 'Test 21');
test(hasSameDigits("101010"), true, 'Test 22');
test(hasSameDigits("123"), false, 'Test 23');
test(hasSameDigits("456"), false, 'Test 24');
test(hasSameDigits("987654321"), false, 'Test 25');
test(hasSameDigits("00000"), true, 'Test 26');
test(hasSameDigits("123456789"), false, 'Test 27');
test(hasSameDigits("101010101010101010"), true, 'Test 28');
test(hasSameDigits("43210987654321098765"), false, 'Test 29');
test(hasSameDigits("989796959493929190"), false, 'Test 30');
test(hasSameDigits("5432109876543210"), false, 'Test 31');
test(hasSameDigits("9090909090"), true, 'Test 32');
test(hasSameDigits("66666666666666666666"), true, 'Test 33');
test(hasSameDigits("10987654321"), false, 'Test 34');
test(hasSameDigits("12345678987654321"), true, 'Test 35');
test(hasSameDigits("1919191919"), true, 'Test 36');
test(hasSameDigits("37373737373737373737373"), true, 'Test 37');
test(hasSameDigits("98765432101234567890"), true, 'Test 38');
test(hasSameDigits("135791357913579135791357913579"), false, 'Test 39');
test(hasSameDigits("4444444444444444444444444444444444444444444444444444444"), true, 'Test 40');
test(hasSameDigits("0000000000000000000"), true, 'Test 41');
test(hasSameDigits("6666666666"), true, 'Test 42');
test(hasSameDigits("99887766554433221100"), false, 'Test 43');
test(hasSameDigits("1232123212"), false, 'Test 44');
test(hasSameDigits("87654321098765432109876543210987654321098765432109876"), false, 'Test 45');
test(hasSameDigits("0246802468024680246802468024680"), false, 'Test 46');
test(hasSameDigits("555555555555555"), true, 'Test 47');
test(hasSameDigits("112233445566778899"), false, 'Test 48');
test(hasSameDigits("0000000000"), true, 'Test 49');
test(hasSameDigits("1223344556677889900"), false, 'Test 50');
test(hasSameDigits("12987645302198765430"), false, 'Test 51');
test(hasSameDigits("12345678901234567890123"), false, 'Test 52');
test(hasSameDigits("1010101010101010"), true, 'Test 53');
test(hasSameDigits("111122223333"), true, 'Test 54');
test(hasSameDigits("86420864208642086420"), false, 'Test 55');
test(hasSameDigits("4646464646"), true, 'Test 56');
test(hasSameDigits("12312312312312312312"), false, 'Test 57');
test(hasSameDigits("5500550055"), true, 'Test 58');
test(hasSameDigits("909090909090909090"), true, 'Test 59');
test(hasSameDigits("0000000001"), false, 'Test 60');
test(hasSameDigits("9080706050403020100"), false, 'Test 61');
test(hasSameDigits("4444444444"), true, 'Test 62');
test(hasSameDigits("8282828282"), true, 'Test 63');
test(hasSameDigits("1098765432109876543210"), false, 'Test 64');
test(hasSameDigits("135791357913579"), false, 'Test 65');
test(hasSameDigits("99999999999999999999"), true, 'Test 66');
test(hasSameDigits("11111111111111111111"), true, 'Test 67');
test(hasSameDigits("864208642086420864"), false, 'Test 68');
test(hasSameDigits("99999999999999999999999"), true, 'Test 69');
test(hasSameDigits("111111111111111111"), true, 'Test 70');
test(hasSameDigits("246802468024680"), false, 'Test 71');
test(hasSameDigits("5555555555"), true, 'Test 72');
test(hasSameDigits("3692581470369258147036925814"), false, 'Test 73');
test(hasSameDigits("12345432100987656789"), false, 'Test 74');
test(hasSameDigits("5959595959"), true, 'Test 75');
test(hasSameDigits("12345678901234567890"), false, 'Test 76');
test(hasSameDigits("28282828282828282828282"), true, 'Test 77');
test(hasSameDigits("2468024680246802468"), false, 'Test 78');
test(hasSameDigits("98765432109876543210"), false, 'Test 79');
test(hasSameDigits("2468024680"), false, 'Test 80');
test(hasSameDigits("543210987654321098"), false, 'Test 81');
test(hasSameDigits("864204680246802468024680"), false, 'Test 82');
test(hasSameDigits("3737373737"), true, 'Test 83');
test(hasSameDigits("1919191919191919"), true, 'Test 84');
test(hasSameDigits("1122334455667788990011"), false, 'Test 85');
test(hasSameDigits("5983476201"), false, 'Test 86');
test(hasSameDigits("987654321987654321"), false, 'Test 87');
test(hasSameDigits("00000000000000000000000"), true, 'Test 88');
test(hasSameDigits("1357913579"), false, 'Test 89');
test(hasSameDigits("90909090909090909090"), true, 'Test 90');
test(hasSameDigits("9999999999"), true, 'Test 91');
test(hasSameDigits("1234321234"), false, 'Test 92');
test(hasSameDigits("9898989898989898"), true, 'Test 93');
test(hasSameDigits("246802468024680246"), false, 'Test 94');
test(hasSameDigits("555555555555555555555555555555555555555555555555555"), true, 'Test 95');
test(hasSameDigits("121212121212121212"), true, 'Test 96');
test(hasSameDigits("55555555555555555555555"), true, 'Test 97');
test(hasSameDigits("1234321098767890"), false, 'Test 98');
test(hasSameDigits("111222333444"), false, 'Test 99');
test(hasSameDigits("9753197531"), false, 'Test 100');
test(hasSameDigits("55555555555555555555"), true, 'Test 101');
test(hasSameDigits("6464646464"), true, 'Test 102');
test(hasSameDigits("00000000000000000000"), true, 'Test 103');
test(hasSameDigits("90817263544536271809"), true, 'Test 104');
test(hasSameDigits("123123123123123123"), false, 'Test 105');
test(hasSameDigits("9999999999999999999999999999999999999999999999999999"), true, 'Test 106');
test(hasSameDigits("111222333444555666"), false, 'Test 107');
test(hasSameDigits("19191919191919191919191"), true, 'Test 108');
test(hasSameDigits("13579246801357924680"), false, 'Test 109');
test(hasSameDigits("9876543210987654321098"), false, 'Test 110');
test(hasSameDigits("46464646464646464646464"), true, 'Test 111');
test(hasSameDigits("1231231231"), false, 'Test 112');
test(hasSameDigits("2468135791"), false, 'Test 113');
test(hasSameDigits("432143214321432143"), true, 'Test 114');
test(hasSameDigits("1111111111"), true, 'Test 115');
test(hasSameDigits("98798798798798798798"), false, 'Test 116');
test(hasSameDigits("2828282828"), true, 'Test 117');
test(hasSameDigits("00112233445566778899"), false, 'Test 118');
test(hasSameDigits("999999999999999999999999999999"), true, 'Test 119');
test(hasSameDigits("123123123123123"), false, 'Test 120');
test(hasSameDigits("09876543210987654321"), false, 'Test 121');
test(hasSameDigits("10101010101010101010"), true, 'Test 122');
test(hasSameDigits("3693693693693693693"), false, 'Test 123');
test(hasSameDigits("1212121212"), true, 'Test 124');
test(hasSameDigits("12121212121212121212121212121212121212121212121212121212"), true, 'Test 125');
test(hasSameDigits("1212121212121212"), true, 'Test 126');
test(hasSameDigits("123456789012345678901234567890"), false, 'Test 127');

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
