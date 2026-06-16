// Test: 2575. Find The Divisibility Array Of A String
// 138 test cases from LeetCodeDataset
// Run: node test.js

const { divisibilityArray } = require("./solution");

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

console.log("\n2575. Find The Divisibility Array Of A String\n");

test(divisibilityArray("987654321", 987654321"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 1');
test(divisibilityArray("123456789", 2"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 2');
test(divisibilityArray("111111", 13"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 3');
test(divisibilityArray("543210", 7"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 4');
test(divisibilityArray("1111111111", 5), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 5');
test(divisibilityArray("998244353", 3), [1, 1, 0, 0, 0, 1, 1, 0, 0], 'Test 6');
test(divisibilityArray("00000", 1), [1, 1, 1, 1, 1], 'Test 7');
test(divisibilityArray("000000", 1"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 8');
test(divisibilityArray("1", 2"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 9');
test(divisibilityArray("1010", 10), [0, 1, 0, 1], 'Test 10');
test(divisibilityArray("1111111111", 5"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 11');
test(divisibilityArray("9876543210", 11"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 12');
test(divisibilityArray("00000", 5), [1, 1, 1, 1, 1], 'Test 13');
test(divisibilityArray("1111111111", 11), [0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 'Test 14');
test(divisibilityArray("123456789012345678901234567890", 97"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 15');
test(divisibilityArray("31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679", 137"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 16');
test(divisibilityArray("98765432109876543210", 11"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 17');
test(divisibilityArray("98765432109876543210", 13"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 18');
test(divisibilityArray("12312312312312312312", 7"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 19');
test(divisibilityArray("22222222222222222222", 11"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 20');
test(divisibilityArray("987654321098765432109876543210", 123"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 21');
test(divisibilityArray("0000000000", 100000"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 22');
test(divisibilityArray("432109876543210", 23"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 23');
test(divisibilityArray("369258147", 27"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 24');
test(divisibilityArray("123456789101112131415", 7"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 25');
test(divisibilityArray("1999999999", 100000000"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 26');
test(divisibilityArray("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999", 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 27');
test(divisibilityArray("13579246801357924680", 19"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 28');
test(divisibilityArray("00000000000000000000", 1"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 29');
test(divisibilityArray("19283746556473829101112131415161718192021222324252627282930", 101"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 30');
test(divisibilityArray("55555555555555555555", 5"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 31');
test(divisibilityArray("9876543210", 7"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 32');
test(divisibilityArray("14285714285714285714", 13"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 33');
test(divisibilityArray("1231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231", 123"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 34');
test(divisibilityArray("271828182845904523536028747135266249775724709369994", 100"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 35');
test(divisibilityArray("123456789876543210123456789876543210", 88"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 36');
test(divisibilityArray("9999999999", 9"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 37');
test(divisibilityArray("900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 38');
test(divisibilityArray("9999999999999999999", 1000000000"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 39');
test(divisibilityArray("123456789123456789", 13"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 40');
test(divisibilityArray("9999999999", 8"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 41');
test(divisibilityArray("369258147", 17"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 42');
test(divisibilityArray("555555555555555555555555555555", 55"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 43');
test(divisibilityArray("1234567891011121314151617181920", 19"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 44');
test(divisibilityArray("24680246802468024680", 4"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 45');
test(divisibilityArray("9876543210", 13"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 46');
test(divisibilityArray("12345678901234567890", 12345"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 47');
test(divisibilityArray("123456789876543210", 8"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 48');
test(divisibilityArray("88888888888888888888", 19"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 49');
test(divisibilityArray("10000000000000000000", 2"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 50');
test(divisibilityArray("222222222222222222", 22"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 51');
test(divisibilityArray("99999999999999999999", 1"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 52');
test(divisibilityArray("0000000000", 7"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 53');
test(divisibilityArray("1231231231", 13"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 54');
test(divisibilityArray("8642086420", 29"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 55');
test(divisibilityArray("1111111111", 11"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 56');
test(divisibilityArray("135791357913579135791357913579", 37"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 57');
test(divisibilityArray("99999999999999999999", 11"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 58');
test(divisibilityArray("2468024680", 4"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 59');
test(divisibilityArray("11110000111100001111", 1111"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 60');
test(divisibilityArray("998877665544332211", 111"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 61');
test(divisibilityArray("314159265358979323846", 29"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 62');
test(divisibilityArray("6666666666666666666", 97"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 63');
test(divisibilityArray("10010010010010010010", 1001"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 64');
test(divisibilityArray("77777777777777777777", 17"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 65');
test(divisibilityArray("66666666666666666666", 7"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 66');
test(divisibilityArray("86420864208642086420", 17"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 67');
test(divisibilityArray("100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 1000000000"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 68');
test(divisibilityArray("513513513513513513", 51"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 69');
test(divisibilityArray("10000000000000000000", 5"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 70');
test(divisibilityArray("98765432109876543210", 101"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 71');
test(divisibilityArray("5555555555555555555", 5"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 72');
test(divisibilityArray("99999999999999999999", 9"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 73');
test(divisibilityArray("18014398509481984", 18014398509481984"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 74');
test(divisibilityArray("11111111111111111111", 11"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 75');
test(divisibilityArray("2222222222", 4"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 76');
test(divisibilityArray("987654321987654321", 17"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 77');
test(divisibilityArray("595959595959595959595959595959595959595959595959595959595959595959595959595959595959595959595959595959", 5959"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 78');
test(divisibilityArray("24680246802468024680", 41"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 79');
test(divisibilityArray("975319753197531975319753197531", 107"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 80');
test(divisibilityArray("3333333333333333333", 31"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 81');
test(divisibilityArray("2222222222", 21"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 82');
test(divisibilityArray("0000000000", 1"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 83');
test(divisibilityArray("77777777777777777777", 37"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 84');
test(divisibilityArray("10000000000000000000", 9"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 85');
test(divisibilityArray("1010101010101010101", 37"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 86');
test(divisibilityArray("24680246802468024680", 21"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 87');
test(divisibilityArray("36925814703692581470", 13"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 88');
test(divisibilityArray("10000000001000000000", 10"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 89');
test(divisibilityArray("3693693693", 37"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 90');
test(divisibilityArray("50000000000000000000", 2"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 91');
test(divisibilityArray("65432109876543210987", 12"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 92');
test(divisibilityArray("5432109876543210987", 61"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 93');
test(divisibilityArray("314159265358979323846", 13"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 94');
test(divisibilityArray("99999999999999999999", 8"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 95');
test(divisibilityArray("2468013579", 17"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 96');
test(divisibilityArray("2222222222222222222", 23"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 97');
test(divisibilityArray("123456789012345678901234567890", 77"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 98');
test(divisibilityArray("572949635103219132637204489812989495650117096595685074897937652707472795392953897905376895868034586400652082252287", 29"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 99');
test(divisibilityArray("13579246801357924680", 37"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 100');
test(divisibilityArray("12345678901234567890", 13"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 101');
test(divisibilityArray("987654321098765432109876543210", 31"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 102');
test(divisibilityArray("1357924680", 13"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 103');
test(divisibilityArray("86420864208642086420", 19"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 104');
test(divisibilityArray("918273645091827364509182736450918273645091827364509182736450918273645091827364509182736450918273645091", 3650"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 105');
test(divisibilityArray("55555555555555555555555555555555555555555555555", 101"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 106');
test(divisibilityArray("1111111111", 7"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 107');
test(divisibilityArray("12345678901234567890", 97"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 108');
test(divisibilityArray("246802468024680246802468024680", 103"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 109');
test(divisibilityArray("77777777777777777777", 77"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 110');
test(divisibilityArray("1234567891011121314151617181920", 11"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 111');
test(divisibilityArray("12121212121212121212", 3"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 112');
test(divisibilityArray("55555555555555555555", 25"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 113');
test(divisibilityArray("0000000000", 9"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 114');
test(divisibilityArray("7777777777777777777", 71"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 115');
test(divisibilityArray("11111111111111111111", 13"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 116');
test(divisibilityArray("8080808080808080808", 89"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 117');
test(divisibilityArray("999999999999999999", 99"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 118');
test(divisibilityArray("00000000000000000000", 5"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 119');
test(divisibilityArray("50505050505050505050", 25"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 120');
test(divisibilityArray("246813579", 8"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 121');
test(divisibilityArray("5555555555", 5"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 122');
test(divisibilityArray("9999999999", 1000000000"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 123');
test(divisibilityArray("1111111111", 3"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 124');
test(divisibilityArray("11111111111111111111", 2"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 125');
test(divisibilityArray("246813579", 17"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 126');
test(divisibilityArray("111111111111111111111111111111", 101"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 127');
test(divisibilityArray("87654321", 29"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 128');
test(divisibilityArray("10101010101010101010", 101"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 129');
test(divisibilityArray("4444444444444444444", 41"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 130');
test(divisibilityArray("1231231231", 3"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 131');
test(divisibilityArray("12345678901234567890", 7"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 132');
test(divisibilityArray("543215432154321543215432154321", 21"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 133');
test(divisibilityArray("12345678901234567890", 37"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 134');
test(divisibilityArray("0000000000", 5"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 135');
test(divisibilityArray("864208642086420", 25"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 136');
test(divisibilityArray("555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555", 55555"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 137');
test(divisibilityArray("12312312312312312312", 13"), Error: Solution.divisibilityArray[] missing 1 required positional argument: 'm', 'Test 138');

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
