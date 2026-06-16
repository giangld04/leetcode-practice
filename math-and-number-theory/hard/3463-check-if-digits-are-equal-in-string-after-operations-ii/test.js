// Test: 3463. Check If Digits Are Equal In String After Operations Ii
// 108 test cases from LeetCodeDataset
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

console.log("\n3463. Check If Digits Are Equal In String After Operations Ii\n");

test(hasSameDigits("9876543210"), false, 'Test 1');
test(hasSameDigits("111"), true, 'Test 2');
test(hasSameDigits("1234567890"), false, 'Test 3');
test(hasSameDigits("898989898"), true, 'Test 4');
test(hasSameDigits("1111111111"), true, 'Test 5');
test(hasSameDigits("99999"), true, 'Test 6');
test(hasSameDigits("999999999"), true, 'Test 7');
test(hasSameDigits("3902"), true, 'Test 8');
test(hasSameDigits("000000000"), true, 'Test 9');
test(hasSameDigits("121212121"), true, 'Test 10');
test(hasSameDigits("11111"), true, 'Test 11');
test(hasSameDigits("34789"), false, 'Test 12');
test(hasSameDigits("5555555555"), true, 'Test 13');
test(hasSameDigits("555555"), true, 'Test 14');
test(hasSameDigits("1357913579"), false, 'Test 15');
test(hasSameDigits("1010101010"), true, 'Test 16');
test(hasSameDigits("0000000000"), true, 'Test 17');
test(hasSameDigits("909090"), true, 'Test 18');
test(hasSameDigits("98765"), false, 'Test 19');
test(hasSameDigits("9999999999"), true, 'Test 20');
test(hasSameDigits("1212121212"), true, 'Test 21');
test(hasSameDigits("00000"), true, 'Test 22');
test(hasSameDigits("2468024680"), false, 'Test 23');
test(hasSameDigits("555555555"), true, 'Test 24');
test(hasSameDigits("121212"), true, 'Test 25');
test(hasSameDigits("123456789"), false, 'Test 26');
test(hasSameDigits("12121212121212121212"), true, 'Test 27');
test(hasSameDigits("8642086420"), false, 'Test 28');
test(hasSameDigits("13579135791357913579"), false, 'Test 29');
test(hasSameDigits("123123123123123123123123123"), false, 'Test 30');
test(hasSameDigits("98765432"), false, 'Test 31');
test(hasSameDigits("44444444444444444444"), true, 'Test 32');
test(hasSameDigits("1919191919"), true, 'Test 33');
test(hasSameDigits("54321098765432109876543210"), false, 'Test 34');
test(hasSameDigits("10101010101010101010101010"), true, 'Test 35');
test(hasSameDigits("1357924680135792468"), false, 'Test 36');
test(hasSameDigits("99887766554433221100"), false, 'Test 37');
test(hasSameDigits("5959595959595959595959595959"), true, 'Test 38');
test(hasSameDigits("3333333333333"), true, 'Test 39');
test(hasSameDigits("9988776655443322110099887766"), false, 'Test 40');
test(hasSameDigits("54321098765432109876"), false, 'Test 41');
test(hasSameDigits("999000999000999000999000"), false, 'Test 42');
test(hasSameDigits("101010101010101010101010101010"), true, 'Test 43');
test(hasSameDigits("86420864208642086420"), false, 'Test 44');
test(hasSameDigits("123321123321"), true, 'Test 45');
test(hasSameDigits("555555555555555555"), true, 'Test 46');
test(hasSameDigits("97531975319753197531"), false, 'Test 47');
test(hasSameDigits("9080706050"), false, 'Test 48');
test(hasSameDigits("999888777666555444333222111000"), false, 'Test 49');
test(hasSameDigits("1234321123432112343211234321"), true, 'Test 50');
test(hasSameDigits("1122334455"), false, 'Test 51');
test(hasSameDigits("111222333444555"), true, 'Test 52');
test(hasSameDigits("82828282828282828282"), true, 'Test 53');
test(hasSameDigits("88888888888888888888"), true, 'Test 54');
test(hasSameDigits("00112233445566778899001122"), false, 'Test 55');
test(hasSameDigits("01234567890123456789"), false, 'Test 56');
test(hasSameDigits("505050505050505050505050505050"), true, 'Test 57');
test(hasSameDigits("012345678901234567890123456789"), false, 'Test 58');
test(hasSameDigits("56789012345678901234567890"), false, 'Test 59');
test(hasSameDigits("11223344556677889900"), false, 'Test 60');
test(hasSameDigits("1020304050"), false, 'Test 61');
test(hasSameDigits("0909090909090909090909090909"), true, 'Test 62');
test(hasSameDigits("1357924680"), false, 'Test 63');
test(hasSameDigits("1234567890123"), false, 'Test 64');
test(hasSameDigits("12345678901234567890"), false, 'Test 65');
test(hasSameDigits("0246813579"), false, 'Test 66');
test(hasSameDigits("98765432109876543210"), false, 'Test 67');
test(hasSameDigits("987654321"), false, 'Test 68');
test(hasSameDigits("36363636363636363636"), true, 'Test 69');
test(hasSameDigits("12345678"), false, 'Test 70');
test(hasSameDigits("59595959595959595959"), true, 'Test 71');
test(hasSameDigits("111222333444555666777888999"), true, 'Test 72');
test(hasSameDigits("1010101010101010101010101010"), true, 'Test 73');
test(hasSameDigits("987987987987987987987987987"), false, 'Test 74');
test(hasSameDigits("13579246801"), false, 'Test 75');
test(hasSameDigits("9012345678901234567890123456"), false, 'Test 76');
test(hasSameDigits("9182736450"), false, 'Test 77');
test(hasSameDigits("24680246802468024680"), false, 'Test 78');
test(hasSameDigits("0246802468024680246"), false, 'Test 79');
test(hasSameDigits("594872631478523690"), false, 'Test 80');
test(hasSameDigits("19191919191919191919"), true, 'Test 81');
test(hasSameDigits("9876543210987654321"), false, 'Test 82');
test(hasSameDigits("9876543210987"), false, 'Test 83');
test(hasSameDigits("9182736451"), false, 'Test 84');
test(hasSameDigits("98765432109876"), false, 'Test 85');
test(hasSameDigits("111222333444555666777888999000"), false, 'Test 86');
test(hasSameDigits("1111111111111"), true, 'Test 87');
test(hasSameDigits("90909090909090909090"), true, 'Test 88');
test(hasSameDigits("0101010101"), true, 'Test 89');
test(hasSameDigits("1928374655647382910918273645"), false, 'Test 90');
test(hasSameDigits("111222333444"), false, 'Test 91');
test(hasSameDigits("5555555555555555555555555555"), true, 'Test 92');
test(hasSameDigits("121212121212121212"), true, 'Test 93');
test(hasSameDigits("55555555555555555555"), true, 'Test 94');
test(hasSameDigits("123321123321123321123321123321"), true, 'Test 95');
test(hasSameDigits("1212121212121212121212121212"), true, 'Test 96');
test(hasSameDigits("2222222222222"), true, 'Test 97');
test(hasSameDigits("50505050505050505050505050"), true, 'Test 98');
test(hasSameDigits("87654321098765432109876543210"), false, 'Test 99');
test(hasSameDigits("2468013579"), false, 'Test 100');
test(hasSameDigits("8080808080"), true, 'Test 101');
test(hasSameDigits("918273645191827364519182736451"), false, 'Test 102');
test(hasSameDigits("77777777777777777777"), true, 'Test 103');
test(hasSameDigits("111222333444555666777888999000111"), false, 'Test 104');
test(hasSameDigits("30303030303030303030"), true, 'Test 105');
test(hasSameDigits("99009900990099009900"), false, 'Test 106');
test(hasSameDigits("09876543210987654321"), false, 'Test 107');
test(hasSameDigits("10101010101010101010"), true, 'Test 108');

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
