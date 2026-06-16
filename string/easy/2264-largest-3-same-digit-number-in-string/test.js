// Test: 2264. Largest 3 Same Digit Number In String
// 133 test cases from LeetCodeDataset
// Run: node test.js

const { largestGoodInteger } = require("./solution");

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

console.log("\n2264. Largest 3 Same Digit Number In String\n");

test(largestGoodInteger("999888777666555444333222111000"), 999, 'Test 1');
test(largestGoodInteger("000"), 000, 'Test 2');
test(largestGoodInteger("42352338"), , 'Test 3');
test(largestGoodInteger("9876543210"), , 'Test 4');
test(largestGoodInteger("555444555"), 555, 'Test 5');
test(largestGoodInteger("112233445566778899"), , 'Test 6');
test(largestGoodInteger("888777666555444333222111000"), 888, 'Test 7');
test(largestGoodInteger("2300019"), 000, 'Test 8');
test(largestGoodInteger("10000001"), 000, 'Test 9');
test(largestGoodInteger("123"), , 'Test 10');
test(largestGoodInteger("6777133339"), 777, 'Test 11');
test(largestGoodInteger("1222333444555666777888999000"), 999, 'Test 12');
test(largestGoodInteger("888777666555444333222111"), 888, 'Test 13');
test(largestGoodInteger("333333333"), 333, 'Test 14');
test(largestGoodInteger("999999999"), 999, 'Test 15');
test(largestGoodInteger("999999"), 999, 'Test 16');
test(largestGoodInteger("11223344556677889900"), , 'Test 17');
test(largestGoodInteger("9999999"), 999, 'Test 18');
test(largestGoodInteger("1234567890"), , 'Test 19');
test(largestGoodInteger("000111222333444555666777888999"), 999, 'Test 20');
test(largestGoodInteger("111222333"), 333, 'Test 21');
test(largestGoodInteger("888888888888888888888"), 888, 'Test 22');
test(largestGoodInteger("100100100"), , 'Test 23');
test(largestGoodInteger("000000000"), 000, 'Test 24');
test(largestGoodInteger("111111111"), 111, 'Test 25');
test(largestGoodInteger("111"), 111, 'Test 26');
test(largestGoodInteger("123123123123123123123123123123123123"), , 'Test 27');
test(largestGoodInteger("1234444321111234444321"), 444, 'Test 28');
test(largestGoodInteger("12345678987654321000000123456789"), 000, 'Test 29');
test(largestGoodInteger("555444333222111000000000000111222333444"), 555, 'Test 30');
test(largestGoodInteger("123456789123456789123456789123456789123456789"), , 'Test 31');
test(largestGoodInteger("1233344445555566666777777"), 777, 'Test 32');
test(largestGoodInteger("555444333222111000000111222333444555"), 555, 'Test 33');
test(largestGoodInteger("1222222222222222222222222222221"), 222, 'Test 34');
test(largestGoodInteger("555444333222111000999888777666555"), 999, 'Test 35');
test(largestGoodInteger("10000001000000100000010000001000000"), 000, 'Test 36');
test(largestGoodInteger("987654321111111111111111111111987654321000000000"), 111, 'Test 37');
test(largestGoodInteger("88888888888888888888888888888888888888888888"), 888, 'Test 38');
test(largestGoodInteger("1234567890123456789012345678901234567890"), , 'Test 39');
test(largestGoodInteger("12345678987654321012345678987654321"), , 'Test 40');
test(largestGoodInteger("999000111222333444555666777888999"), 999, 'Test 41');
test(largestGoodInteger("000123456789"), 000, 'Test 42');
test(largestGoodInteger("111111222222333333444444555555666666777777888888999999"), 999, 'Test 43');
test(largestGoodInteger("1111111111111111111111111111111111111111111111111"), 111, 'Test 44');
test(largestGoodInteger("123123123123123123123123"), , 'Test 45');
test(largestGoodInteger("123123123123123123123123123123"), , 'Test 46');
test(largestGoodInteger("1000000000000000000000000000000000000000000000000"), 000, 'Test 47');
test(largestGoodInteger("01234567890123456789012345678901234567890"), , 'Test 48');
test(largestGoodInteger("999999999999999999999999999999"), 999, 'Test 49');
test(largestGoodInteger("987654321111111111111111111111987654321"), 111, 'Test 50');
test(largestGoodInteger("111222333444555666777888999000111222333444555666777888999"), 999, 'Test 51');
test(largestGoodInteger("1221221221221221221221221"), , 'Test 52');
test(largestGoodInteger("000000000000000000000000000"), 000, 'Test 53');
test(largestGoodInteger("123123123123123123123123123"), , 'Test 54');
test(largestGoodInteger("55555555555555555555555555555555555555555555555555555555"), 555, 'Test 55');
test(largestGoodInteger("123333456789000123456789"), 333, 'Test 56');
test(largestGoodInteger("00000000000000000000000000000000000000000000"), 000, 'Test 57');
test(largestGoodInteger("99999999999999999999999999999999999999999999"), 999, 'Test 58');
test(largestGoodInteger("333333333333333333333333333333"), 333, 'Test 59');
test(largestGoodInteger("9990000000000000000000000000000000000000000000000000000000"), 999, 'Test 60');
test(largestGoodInteger("1122334455667788990011223344556677889900"), , 'Test 61');
test(largestGoodInteger("33333333333333333333333333333333333333333333"), 333, 'Test 62');
test(largestGoodInteger("987654321000000000987654321"), 000, 'Test 63');
test(largestGoodInteger("122333444555666777888999"), 999, 'Test 64');
test(largestGoodInteger("888999777666555444333222111000"), 999, 'Test 65');
test(largestGoodInteger("111222333444555666777888999000"), 999, 'Test 66');
test(largestGoodInteger("123332111112222233333"), 333, 'Test 67');
test(largestGoodInteger("98765432109876543210987654321"), , 'Test 68');
test(largestGoodInteger("000000000000000000000000000000"), 000, 'Test 69');
test(largestGoodInteger("11111111111111111111111111111111111111111111"), 111, 'Test 70');
test(largestGoodInteger("98765432111111111111111111111111111111111111"), 111, 'Test 71');
test(largestGoodInteger("999111222333444555666777888"), 999, 'Test 72');
test(largestGoodInteger("123332111222222111111"), 333, 'Test 73');
test(largestGoodInteger("111222333444555666777888999111222333444555"), 999, 'Test 74');
test(largestGoodInteger("10101010101010101010101010101010101010101010"), , 'Test 75');
test(largestGoodInteger("12345678987654321111100000000222222333333"), 333, 'Test 76');
test(largestGoodInteger("1000000000000000000000000000000"), 000, 'Test 77');
test(largestGoodInteger("111222333444555666777888999000111222"), 999, 'Test 78');
test(largestGoodInteger("98765432111123456789000000"), 111, 'Test 79');
test(largestGoodInteger("999000999000999"), 999, 'Test 80');
test(largestGoodInteger("0000000000000000000000000000000000000000000000000"), 000, 'Test 81');
test(largestGoodInteger("000000111111222222333333444444555555666666777777888888999999"), 999, 'Test 82');
test(largestGoodInteger("111222333444555666777888999111"), 999, 'Test 83');
test(largestGoodInteger("987654321098765432109876543210"), , 'Test 84');
test(largestGoodInteger("888999888999888999888999888999"), 999, 'Test 85');
test(largestGoodInteger("111000111000111000111000"), 111, 'Test 86');
test(largestGoodInteger("1234555554321"), 555, 'Test 87');
test(largestGoodInteger("123456789123456789123456789"), , 'Test 88');
test(largestGoodInteger("111000111000111000111000111000"), 111, 'Test 89');
test(largestGoodInteger("111000222333444555666777888999"), 999, 'Test 90');
test(largestGoodInteger("333222111333222111333222111"), 333, 'Test 91');
test(largestGoodInteger("101010101010101010101010101"), , 'Test 92');
test(largestGoodInteger("1111111111111111111111111111111"), 111, 'Test 93');
test(largestGoodInteger("12345678999987654321"), 999, 'Test 94');
test(largestGoodInteger("111122223333444455556666777788889999"), 999, 'Test 95');
test(largestGoodInteger("123456789000000987654321"), 000, 'Test 96');
test(largestGoodInteger("999888777666555444333222111"), 999, 'Test 97');
test(largestGoodInteger("555555555555555555555555555555555555555555555555"), 555, 'Test 98');
test(largestGoodInteger("111222333444555666777888999"), 999, 'Test 99');
test(largestGoodInteger("999888777666555444333222111000999888777"), 999, 'Test 100');
test(largestGoodInteger("111000111222333"), 333, 'Test 101');
test(largestGoodInteger("123456789876543211222333444555666777888999"), 999, 'Test 102');
test(largestGoodInteger("123456789876543211111111111111"), 111, 'Test 103');
test(largestGoodInteger("9999999999999999999999999999999999999999999999999"), 999, 'Test 104');
test(largestGoodInteger("123456789000000000000000000"), 000, 'Test 105');
test(largestGoodInteger("987654321000000123456789"), 000, 'Test 106');
test(largestGoodInteger("111999888777666555444333222111"), 999, 'Test 107');
test(largestGoodInteger("5555555555555555555555555555555"), 555, 'Test 108');
test(largestGoodInteger("333222111000999888777666555444333222111000"), 999, 'Test 109');
test(largestGoodInteger("1233321111222223333"), 333, 'Test 110');
test(largestGoodInteger("0011223344556677889900112233445566"), , 'Test 111');
test(largestGoodInteger("123456789012345678901234567890"), , 'Test 112');
test(largestGoodInteger("000111222333444555666777888999000111222333"), 999, 'Test 113');
test(largestGoodInteger("1111122223333444455556666777788889999"), 999, 'Test 114');
test(largestGoodInteger("5555555555555555555555555"), 555, 'Test 115');
test(largestGoodInteger("111222333444555666777888999000111"), 999, 'Test 116');
test(largestGoodInteger("999000999000999000999000999000999000"), 999, 'Test 117');
test(largestGoodInteger("1234567890000000000000000000000000000000"), 000, 'Test 118');
test(largestGoodInteger("123456789123456789123456789123456789"), , 'Test 119');
test(largestGoodInteger("11111111111111111111111111111100000000000000000"), 111, 'Test 120');
test(largestGoodInteger("555555444444333333222222111111"), 555, 'Test 121');
test(largestGoodInteger("333222111000777888999"), 999, 'Test 122');
test(largestGoodInteger("555555555555555555555555555555"), 555, 'Test 123');
test(largestGoodInteger("1222233333444444555555566666667"), 666, 'Test 124');
test(largestGoodInteger("123123123123123123123123123123123123123123123123123123123123"), , 'Test 125');
test(largestGoodInteger("123456789999987654321"), 999, 'Test 126');
test(largestGoodInteger("990990990990990990"), , 'Test 127');
test(largestGoodInteger("123455567890123456789012345678"), 555, 'Test 128');
test(largestGoodInteger("111111111111111111111111111111"), 111, 'Test 129');
test(largestGoodInteger("12345556789000987654321000000"), 555, 'Test 130');
test(largestGoodInteger("22222222222222222222222222222222222222222222"), 222, 'Test 131');
test(largestGoodInteger("10000000000000000000000000000001"), 000, 'Test 132');
test(largestGoodInteger("000111000111000111000111000111"), 111, 'Test 133');

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
