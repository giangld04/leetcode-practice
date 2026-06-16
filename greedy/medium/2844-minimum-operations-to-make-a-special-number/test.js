// Test: 2844. Minimum Operations To Make A Special Number
// 188 test cases from LeetCodeDataset
// Run: node test.js

const { minimumOperations } = require("./solution");

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

console.log("\n2844. Minimum Operations To Make A Special Number\n");

test(minimumOperations("10"), 1, 'Test 1');
test(minimumOperations("00000"), 0, 'Test 2');
test(minimumOperations("75"), 0, 'Test 3');
test(minimumOperations("52"), 2, 'Test 4');
test(minimumOperations("500000"), 0, 'Test 5');
test(minimumOperations("5252525252"), 1, 'Test 6');
test(minimumOperations("1111111111"), 10, 'Test 7');
test(minimumOperations("000"), 0, 'Test 8');
test(minimumOperations("333"), 3, 'Test 9');
test(minimumOperations("2468024680"), 4, 'Test 10');
test(minimumOperations("99999"), 5, 'Test 11');
test(minimumOperations("98765432109876543210"), 4, 'Test 12');
test(minimumOperations("0246802468"), 8, 'Test 13');
test(minimumOperations("55555"), 5, 'Test 14');
test(minimumOperations("875"), 0, 'Test 15');
test(minimumOperations("2245047"), 2, 'Test 16');
test(minimumOperations("9876543210"), 4, 'Test 17');
test(minimumOperations("0"), 0, 'Test 18');
test(minimumOperations("2908305"), 3, 'Test 19');
test(minimumOperations("2500"), 0, 'Test 20');
test(minimumOperations("99999999999999999999"), 20, 'Test 21');
test(minimumOperations("2050"), 0, 'Test 22');
test(minimumOperations("55"), 2, 'Test 23');
test(minimumOperations("375"), 0, 'Test 24');
test(minimumOperations("999999999"), 9, 'Test 25');
test(minimumOperations("625"), 0, 'Test 26');
test(minimumOperations("123056789"), 6, 'Test 27');
test(minimumOperations("11223344556677889900"), 0, 'Test 28');
test(minimumOperations("100"), 0, 'Test 29');
test(minimumOperations("5555555555"), 10, 'Test 30');
test(minimumOperations("300"), 0, 'Test 31');
test(minimumOperations("24680"), 4, 'Test 32');
test(minimumOperations("00"), 0, 'Test 33');
test(minimumOperations("1234567890"), 4, 'Test 34');
test(minimumOperations("125"), 0, 'Test 35');
test(minimumOperations("13579"), 5, 'Test 36');
test(minimumOperations("50"), 0, 'Test 37');
test(minimumOperations("1357913579"), 5, 'Test 38');
test(minimumOperations("9999999999"), 10, 'Test 39');
test(minimumOperations("25"), 0, 'Test 40');
test(minimumOperations("57"), 2, 'Test 41');
test(minimumOperations("2000"), 0, 'Test 42');
test(minimumOperations("200"), 0, 'Test 43');
test(minimumOperations("999999999999999999999999999999999999999999999999999"), 51, 'Test 44');
test(minimumOperations("135792468050"), 0, 'Test 45');
test(minimumOperations("246824682468"), 12, 'Test 46');
test(minimumOperations("789012345678901234567890"), 4, 'Test 47');
test(minimumOperations("500500500500500"), 0, 'Test 48');
test(minimumOperations("33333333333333333333"), 20, 'Test 49');
test(minimumOperations("11223344556677889900112233445566778899"), 13, 'Test 50');
test(minimumOperations("7525105025007525105025007525105025007525105025"), 0, 'Test 51');
test(minimumOperations("5050505050505050"), 0, 'Test 52');
test(minimumOperations("246802468024680246802468024680246802468024680"), 4, 'Test 53');
test(minimumOperations("9999000099990000"), 0, 'Test 54');
test(minimumOperations("50050050050050050050"), 0, 'Test 55');
test(minimumOperations("25000000000000000000000000000000000000000000000000"), 0, 'Test 56');
test(minimumOperations("387625387625387625387625387625"), 0, 'Test 57');
test(minimumOperations("97531975319753197531"), 2, 'Test 58');
test(minimumOperations("257001025"), 0, 'Test 59');
test(minimumOperations("0000000000"), 0, 'Test 60');
test(minimumOperations("9999999990"), 9, 'Test 61');
test(minimumOperations("50505050505050505050"), 0, 'Test 62');
test(minimumOperations("135791357913579135791357913579135791357913579"), 5, 'Test 63');
test(minimumOperations("99887766554433221100"), 0, 'Test 64');
test(minimumOperations("499999999999999999999999999999999999999999999999999"), 51, 'Test 65');
test(minimumOperations("111111111100"), 0, 'Test 66');
test(minimumOperations("500500500500500500500500500500500500500500500500500"), 0, 'Test 67');
test(minimumOperations("19387654321098765432101234567890"), 4, 'Test 68');
test(minimumOperations("1234567890123456789012345678901234567890"), 4, 'Test 69');
test(minimumOperations("959595959595959595959595959595959595959595959595959"), 51, 'Test 70');
test(minimumOperations("579135791357913579135791357910"), 3, 'Test 71');
test(minimumOperations("135791357913579135791357913579135791357913579135791"), 6, 'Test 72');
test(minimumOperations("50000000000000000000000000000000000000000000000000"), 0, 'Test 73');
test(minimumOperations("975319753197531975"), 0, 'Test 74');
test(minimumOperations("2525252525252525252525252525252525252525"), 0, 'Test 75');
test(minimumOperations("345678901234567890"), 4, 'Test 76');
test(minimumOperations("3333333333333333333333333333333333333333333335"), 46, 'Test 77');
test(minimumOperations("98765432109876543210987654321098765432109876543210"), 4, 'Test 78');
test(minimumOperations("9876543210987654321098765432109876543210987654321098"), 6, 'Test 79');
test(minimumOperations("2575257525752575257525752575257525752575"), 0, 'Test 80');
test(minimumOperations("8888888888888888888888888888888888888888888888"), 46, 'Test 81');
test(minimumOperations("0000000000000000000000000000000000000000000000000000"), 0, 'Test 82');
test(minimumOperations("12345678905"), 3, 'Test 83');
test(minimumOperations("5432109876543210"), 4, 'Test 84');
test(minimumOperations("4321098765432109876543210987654321098765"), 1, 'Test 85');
test(minimumOperations("8765432109876543210987654321098765432109"), 5, 'Test 86');
test(minimumOperations("3333333333333333333333333333333333333333333330"), 45, 'Test 87');
test(minimumOperations("77777777777777777777777777777777777777777777777777"), 50, 'Test 88');
test(minimumOperations("52505250525052505250525052505250"), 0, 'Test 89');
test(minimumOperations("55555555555555555555"), 20, 'Test 90');
test(minimumOperations("864208642086420864208642086420864208642086420864208"), 5, 'Test 91');
test(minimumOperations("2468135792468135792468"), 11, 'Test 92');
test(minimumOperations("2525252525252525252525252525252525252525252525252525"), 0, 'Test 93');
test(minimumOperations("20000000000000000000000000000000000000000000000000"), 0, 'Test 94');
test(minimumOperations("999999999999999999999999999999999999999999999999990"), 50, 'Test 95');
test(minimumOperations("8765432109876543210"), 4, 'Test 96');
test(minimumOperations("0000000000000000000000000000000000000000"), 0, 'Test 97');
test(minimumOperations("5050505050505050505050505050505050505050505050"), 0, 'Test 98');
test(minimumOperations("8246824682468246"), 16, 'Test 99');
test(minimumOperations("36925814703692581470"), 4, 'Test 100');
test(minimumOperations("10101010101010101010101010101010101010101010101010101010"), 1, 'Test 101');
test(minimumOperations("753153753153753153"), 4, 'Test 102');
test(minimumOperations("1001001001001001001001001001001"), 1, 'Test 103');
test(minimumOperations("246802468024680246802468024680246802468024680246802"), 5, 'Test 104');
test(minimumOperations("000000000000000000000000000000000000000000000"), 0, 'Test 105');
test(minimumOperations("30000000000000000000000000000000000000000000000000"), 0, 'Test 106');
test(minimumOperations("2525252525252525252525252525252525252525252525"), 0, 'Test 107');
test(minimumOperations("4876543210987654321098765432109876543210"), 4, 'Test 108');
test(minimumOperations("9999990"), 6, 'Test 109');
test(minimumOperations("25002500250025002500250025002500250025002500"), 0, 'Test 110');
test(minimumOperations("204861012141618202224262830323436384042444648"), 17, 'Test 111');
test(minimumOperations("000111000222000333000444000555000666000777000"), 0, 'Test 112');
test(minimumOperations("000000000000000000000000000000"), 0, 'Test 113');
test(minimumOperations("11111111111111111111111111111111111111111111"), 44, 'Test 114');
test(minimumOperations("805"), 2, 'Test 115');
test(minimumOperations("50000000000000000000"), 0, 'Test 116');
test(minimumOperations("19283746555555555555"), 13, 'Test 117');
test(minimumOperations("5555555555555555555555555555555555555555"), 40, 'Test 118');
test(minimumOperations("12345678909876543210123456789098765432101234567890"), 4, 'Test 119');
test(minimumOperations("13579135791357913579"), 5, 'Test 120');
test(minimumOperations("2222222222222222222222222222222222222222"), 40, 'Test 121');
test(minimumOperations("25000000250000000025000000000000000025"), 0, 'Test 122');
test(minimumOperations("2222222222222222222222222222222222222222222222"), 46, 'Test 123');
test(minimumOperations("252525252525252525252525252525"), 0, 'Test 124');
test(minimumOperations("5050505050505050505050505050505050505050"), 0, 'Test 125');
test(minimumOperations("111111111111111111110"), 20, 'Test 126');
test(minimumOperations("987654321098765432109876543210"), 4, 'Test 127');
test(minimumOperations("222222222222222222222"), 21, 'Test 128');
test(minimumOperations("12345678909876543210"), 4, 'Test 129');
test(minimumOperations("012345678901234567890123456789012345678901234567890"), 4, 'Test 130');
test(minimumOperations("222222222250"), 0, 'Test 131');
test(minimumOperations("9999099990999909999099990999909999099990"), 4, 'Test 132');
test(minimumOperations("5000000000000000000000000000000000000000"), 0, 'Test 133');
test(minimumOperations("9876543210987654321098765432109876543210"), 4, 'Test 134');
test(minimumOperations("5734094321098765432100"), 0, 'Test 135');
test(minimumOperations("101010101010101010101010101010101010101010"), 1, 'Test 136');
test(minimumOperations("98765432101234567890"), 4, 'Test 137');
test(minimumOperations("987654321098765432101234567890"), 4, 'Test 138');
test(minimumOperations("02502502502502502502"), 1, 'Test 139');
test(minimumOperations("19293949596979899909192939495969798999091929394"), 17, 'Test 140');
test(minimumOperations("0101010101010101010101010101010101010101010101010101010101010"), 1, 'Test 141');
test(minimumOperations("0123456789012345678901234567890123456789"), 6, 'Test 142');
test(minimumOperations("555555555525"), 0, 'Test 143');
test(minimumOperations("404040404040404040404040404040404040404040404040400"), 0, 'Test 144');
test(minimumOperations("5555555555555525"), 0, 'Test 145');
test(minimumOperations("25252525252525252525252525252525252525252525"), 0, 'Test 146');
test(minimumOperations("86420864208642086420"), 4, 'Test 147');
test(minimumOperations("25252525252525252525"), 0, 'Test 148');
test(minimumOperations("555555555555555555555555555555555555555555555555555"), 51, 'Test 149');
test(minimumOperations("01234567890123456789"), 6, 'Test 150');
test(minimumOperations("55555555555555555555555555555555555555555555555550"), 0, 'Test 151');
test(minimumOperations("24680246802468024680"), 4, 'Test 152');
test(minimumOperations("50505050505050505050505050505050505050505050505050"), 0, 'Test 153');
test(minimumOperations("1234567890123456789012345678901234567890123456"), 3, 'Test 154');
test(minimumOperations("82468024680246802468"), 8, 'Test 155');
test(minimumOperations("123456789012345678901234567890"), 4, 'Test 156');
test(minimumOperations("222222222222222222222222222222222222222222222222225"), 0, 'Test 157');
test(minimumOperations("33333353333333333335"), 20, 'Test 158');
test(minimumOperations("62626262626262626262"), 20, 'Test 159');
test(minimumOperations("123450"), 0, 'Test 160');
test(minimumOperations("12345678901234567890123456789012345678901234567890"), 4, 'Test 161');
test(minimumOperations("025025025025"), 0, 'Test 162');
test(minimumOperations("112233445566778899"), 13, 'Test 163');
test(minimumOperations("9438765432109876543210123456789050"), 0, 'Test 164');
test(minimumOperations("12345678900"), 0, 'Test 165');
test(minimumOperations("18642086420864208640"), 3, 'Test 166');
test(minimumOperations("52357845968275982450"), 0, 'Test 167');
test(minimumOperations("777777777777777777777777777777777777777777777777770"), 50, 'Test 168');
test(minimumOperations("00000000000000000000"), 0, 'Test 169');
test(minimumOperations("25252525252525"), 0, 'Test 170');
test(minimumOperations("975310"), 2, 'Test 171');
test(minimumOperations("10101010101010101010"), 1, 'Test 172');
test(minimumOperations("333333333333333333333333333333333333333333333333335"), 51, 'Test 173');
test(minimumOperations("11111111111111111111"), 20, 'Test 174');
test(minimumOperations("1234567890123456789012345678901234567890123456789012"), 6, 'Test 175');
test(minimumOperations("55555555555525"), 0, 'Test 176');
test(minimumOperations("94387126540054321689745261098743652109876543210"), 4, 'Test 177');
test(minimumOperations("12345678901234567890"), 4, 'Test 178');
test(minimumOperations("555555555500"), 0, 'Test 179');
test(minimumOperations("52525252525252525252"), 1, 'Test 180');
test(minimumOperations("952595259525952595259525952595"), 2, 'Test 181');
test(minimumOperations("09876543210987654321"), 5, 'Test 182');
test(minimumOperations("77777777777777777777"), 20, 'Test 183');
test(minimumOperations("10000000000000000000000000000000000000000000000000"), 0, 'Test 184');
test(minimumOperations("1000000"), 0, 'Test 185');
test(minimumOperations("0000000000000000"), 0, 'Test 186');
test(minimumOperations("22450478900"), 0, 'Test 187');
test(minimumOperations("22222222222222222222"), 20, 'Test 188');

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
