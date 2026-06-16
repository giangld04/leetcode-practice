// Test: 3340. Check Balanced String
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { isBalanced } = require("./solution");

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

console.log("\n3340. Check Balanced String\n");

test(isBalanced("1111"), true, 'Test 1');
test(isBalanced("4321"), false, 'Test 2');
test(isBalanced("654321"), false, 'Test 3');
test(isBalanced("55555"), false, 'Test 4');
test(isBalanced("9876543210"), false, 'Test 5');
test(isBalanced("98765"), false, 'Test 6');
test(isBalanced("4321234"), false, 'Test 7');
test(isBalanced("24123"), true, 'Test 8');
test(isBalanced("1357924680"), false, 'Test 9');
test(isBalanced("1234"), false, 'Test 10');
test(isBalanced("2222"), true, 'Test 11');
test(isBalanced("5555555555"), true, 'Test 12');
test(isBalanced("12121212"), false, 'Test 13');
test(isBalanced("24680"), false, 'Test 14');
test(isBalanced("567890"), false, 'Test 15');
test(isBalanced("1221"), true, 'Test 16');
test(isBalanced("123456"), false, 'Test 17');
test(isBalanced("1234567890"), false, 'Test 18');
test(isBalanced("11223344"), true, 'Test 19');
test(isBalanced("13579"), false, 'Test 20');
test(isBalanced("222222"), true, 'Test 21');
test(isBalanced("0000"), true, 'Test 22');
test(isBalanced("54321012345"), false, 'Test 23');
test(isBalanced("123321456654789987"), true, 'Test 24');
test(isBalanced("24681357900000000000"), false, 'Test 25');
test(isBalanced("98765432109876543210"), false, 'Test 26');
test(isBalanced("5937593759375937"), false, 'Test 27');
test(isBalanced("1357911131517192123252729"), false, 'Test 28');
test(isBalanced("0000000000"), true, 'Test 29');
test(isBalanced("33366699912121515181821212424272727323232525282828111111111111111111"), false, 'Test 30');
test(isBalanced("99887766554433221100"), true, 'Test 31');
test(isBalanced("444444444444"), true, 'Test 32');
test(isBalanced("12343212343212343212343212343212"), false, 'Test 33');
test(isBalanced("123456789"), false, 'Test 34');
test(isBalanced("91929394959697989900"), false, 'Test 35');
test(isBalanced("333444555666777888999"), false, 'Test 36');
test(isBalanced("50505050505050505050505050505050505050505050"), false, 'Test 37');
test(isBalanced("12321"), false, 'Test 38');
test(isBalanced("555555555555555555555555"), true, 'Test 39');
test(isBalanced("5959595959"), false, 'Test 40');
test(isBalanced("1234567890987654321"), false, 'Test 41');
test(isBalanced("555555555555555555"), true, 'Test 42');
test(isBalanced("90000000000000000000000000000000000000000000"), false, 'Test 43');
test(isBalanced("8642013579"), false, 'Test 44');
test(isBalanced("8642086420"), true, 'Test 45');
test(isBalanced("123123123123123123"), true, 'Test 46');
test(isBalanced("123456789876543210"), false, 'Test 47');
test(isBalanced("12345678900987654321"), true, 'Test 48');
test(isBalanced("2468135791"), true, 'Test 49');
test(isBalanced("123454321"), false, 'Test 50');
test(isBalanced("1122334455667788990011223344556677889900"), true, 'Test 51');
test(isBalanced("864209753186420975"), false, 'Test 52');
test(isBalanced("88888888888888888888"), true, 'Test 53');
test(isBalanced("1122113311441155116611771188119911"), true, 'Test 54');
test(isBalanced("543210123454321012345"), false, 'Test 55');
test(isBalanced("12321232123212321232"), true, 'Test 56');
test(isBalanced("3141592653"), false, 'Test 57');
test(isBalanced("202020202020"), false, 'Test 58');
test(isBalanced("246813579"), false, 'Test 59');
test(isBalanced("98765432100123456789"), true, 'Test 60');
test(isBalanced("10203040506070809010"), false, 'Test 61');
test(isBalanced("111222333444555666777888999000"), false, 'Test 62');
test(isBalanced("7359135791"), false, 'Test 63');
test(isBalanced("0000000000000000000000000000"), true, 'Test 64');
test(isBalanced("999099909990999099"), false, 'Test 65');
test(isBalanced("1122334455667788990011"), true, 'Test 66');
test(isBalanced("11111111111111111111111111111111111111111111"), true, 'Test 67');
test(isBalanced("123123123123123"), false, 'Test 68');
test(isBalanced("3214567890123456789"), false, 'Test 69');
test(isBalanced("223344556677889900"), true, 'Test 70');
test(isBalanced("555555555555"), true, 'Test 71');
test(isBalanced("1357924680135792468"), false, 'Test 72');
test(isBalanced("2468024680"), true, 'Test 73');
test(isBalanced("1234567891011121314151617181920"), false, 'Test 74');
test(isBalanced("987654321098765432109876543210"), false, 'Test 75');
test(isBalanced("5555555555555555555555555555"), true, 'Test 76');
test(isBalanced("999999999999999999"), true, 'Test 77');
test(isBalanced("1000100010001000"), false, 'Test 78');
test(isBalanced("1001001001001"), false, 'Test 79');
test(isBalanced("12345678909876543210"), false, 'Test 80');
test(isBalanced("2222222222"), true, 'Test 81');
test(isBalanced("19191919191919191919"), false, 'Test 82');
test(isBalanced("11223344556677889900"), true, 'Test 83');
test(isBalanced("1212121212121212121212121212121212"), false, 'Test 84');
test(isBalanced("102030405060708090"), false, 'Test 85');
test(isBalanced("4321432143214321"), false, 'Test 86');
test(isBalanced("890890890890890"), false, 'Test 87');
test(isBalanced("59595959595959595959"), false, 'Test 88');
test(isBalanced("000000000000000000"), true, 'Test 89');
test(isBalanced("121212121212121212"), false, 'Test 90');
test(isBalanced("10101010101010101010101010101010"), false, 'Test 91');
test(isBalanced("1122112211221122"), true, 'Test 92');
test(isBalanced("1010101010101010"), false, 'Test 93');
test(isBalanced("987654321987654321"), true, 'Test 94');
test(isBalanced("112233445566778899"), true, 'Test 95');
test(isBalanced("00000000000000000000"), true, 'Test 96');
test(isBalanced("10101010101010101010"), false, 'Test 97');
test(isBalanced("1010101010"), false, 'Test 98');
test(isBalanced("12345678901234567890"), false, 'Test 99');
test(isBalanced("20202020202020202020"), false, 'Test 100');
test(isBalanced("246813579246813579246813579246813579"), true, 'Test 101');
test(isBalanced("1357913579"), true, 'Test 102');
test(isBalanced("22222222222222222222"), true, 'Test 103');

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
