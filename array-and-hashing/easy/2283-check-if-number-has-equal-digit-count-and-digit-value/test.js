// Test: 2283. Check If Number Has Equal Digit Count And Digit Value
// 150 test cases from LeetCodeDataset
// Run: node test.js

const { digitCount } = require("./solution");

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

console.log("\n2283. Check If Number Has Equal Digit Count And Digit Value\n");

test(digitCount("1111"), false, 'Test 1');
test(digitCount("00000"), false, 'Test 2');
test(digitCount("10"), false, 'Test 3');
test(digitCount("1111111111"), false, 'Test 4');
test(digitCount("000"), false, 'Test 5');
test(digitCount("6200000000"), false, 'Test 6');
test(digitCount("0100100010"), false, 'Test 7');
test(digitCount("6210001000"), true, 'Test 8');
test(digitCount("030"), false, 'Test 9');
test(digitCount("9876543210"), false, 'Test 10');
test(digitCount("2020202020"), false, 'Test 11');
test(digitCount("0"), false, 'Test 12');
test(digitCount("5000000000"), false, 'Test 13');
test(digitCount("21200"), true, 'Test 14');
test(digitCount("0987654321"), false, 'Test 15');
test(digitCount("2020"), true, 'Test 16');
test(digitCount("11200"), false, 'Test 17');
test(digitCount("1010101010"), false, 'Test 18');
test(digitCount("1210"), true, 'Test 19');
test(digitCount("6543210"), false, 'Test 20');
test(digitCount("50000"), false, 'Test 21');
test(digitCount("5000001000"), false, 'Test 22');
test(digitCount("1234567890"), false, 'Test 23');
test(digitCount("1221111111"), false, 'Test 24');
test(digitCount("1001"), false, 'Test 25');
test(digitCount("0000"), false, 'Test 26');
test(digitCount("2120000000"), false, 'Test 27');
test(digitCount("4000400040"), false, 'Test 28');
test(digitCount("101010101"), false, 'Test 29');
test(digitCount("0000100000"), false, 'Test 30');
test(digitCount("1112212100"), false, 'Test 31');
test(digitCount("0000000000"), false, 'Test 32');
test(digitCount("400000000004"), false, 'Test 33');
test(digitCount("0000000100"), false, 'Test 34');
test(digitCount("0101010101"), false, 'Test 35');
test(digitCount("00100000010"), false, 'Test 36');
test(digitCount("00000000400"), false, 'Test 37');
test(digitCount("9000000000"), false, 'Test 38');
test(digitCount("3110001000"), false, 'Test 39');
test(digitCount("0100101010"), false, 'Test 40');
test(digitCount("100010000"), false, 'Test 41');
test(digitCount("000020000"), false, 'Test 42');
test(digitCount("100201000"), false, 'Test 43');
test(digitCount("30003"), false, 'Test 44');
test(digitCount("1221"), false, 'Test 45');
test(digitCount("12101000"), false, 'Test 46');
test(digitCount("000010001"), false, 'Test 47');
test(digitCount("3000000000"), false, 'Test 48');
test(digitCount("0010000000"), false, 'Test 49');
test(digitCount("0000101000"), false, 'Test 50');
test(digitCount("3100000"), false, 'Test 51');
test(digitCount("3000000010"), false, 'Test 52');
test(digitCount("0100000001"), false, 'Test 53');
test(digitCount("00001001000"), false, 'Test 54');
test(digitCount("121010000"), false, 'Test 55');
test(digitCount("0123400000"), false, 'Test 56');
test(digitCount("2010000000"), false, 'Test 57');
test(digitCount("0010000010"), false, 'Test 58');
test(digitCount("102020100"), false, 'Test 59');
test(digitCount("000300003"), false, 'Test 60');
test(digitCount("500000000"), false, 'Test 61');
test(digitCount("40000000"), false, 'Test 62');
test(digitCount("5000011000"), false, 'Test 63');
test(digitCount("1001001001"), false, 'Test 64');
test(digitCount("1221100000"), false, 'Test 65');
test(digitCount("1212121212"), false, 'Test 66');
test(digitCount("0001000100"), false, 'Test 67');
test(digitCount("0000000010"), false, 'Test 68');
test(digitCount("3000100002"), false, 'Test 69');
test(digitCount("100002000"), false, 'Test 70');
test(digitCount("200000010"), false, 'Test 71');
test(digitCount("0012002001"), false, 'Test 72');
test(digitCount("13010003"), false, 'Test 73');
test(digitCount("42101000"), true, 'Test 74');
test(digitCount("7000000000"), false, 'Test 75');
test(digitCount("6543210000"), false, 'Test 76');
test(digitCount("5000001400"), false, 'Test 77');
test(digitCount("00000000050"), false, 'Test 78');
test(digitCount("210010010"), false, 'Test 79');
test(digitCount("012020200"), false, 'Test 80');
test(digitCount("0000000004"), false, 'Test 81');
test(digitCount("000030000"), false, 'Test 82');
test(digitCount("12101"), false, 'Test 83');
test(digitCount("4000010000"), false, 'Test 84');
test(digitCount("2220000000"), false, 'Test 85');
test(digitCount("1210101010"), false, 'Test 86');
test(digitCount("000000003"), false, 'Test 87');
test(digitCount("0210000110"), false, 'Test 88');
test(digitCount("1000100010"), false, 'Test 89');
test(digitCount("100000002"), false, 'Test 90');
test(digitCount("3000300000"), false, 'Test 91');
test(digitCount("400001000"), false, 'Test 92');
test(digitCount("0123456789"), false, 'Test 93');
test(digitCount("0000001001"), false, 'Test 94');
test(digitCount("00000110000"), false, 'Test 95');
test(digitCount("2100100000"), false, 'Test 96');
test(digitCount("3110000"), false, 'Test 97');
test(digitCount("00000020000"), false, 'Test 98');
test(digitCount("0000000020"), false, 'Test 99');
test(digitCount("200100100"), false, 'Test 100');
test(digitCount("1210100"), false, 'Test 101');
test(digitCount("1020304050"), false, 'Test 102');
test(digitCount("6000000000"), false, 'Test 103');
test(digitCount("001010101"), false, 'Test 104');
test(digitCount("0000000002"), false, 'Test 105');
test(digitCount("000001011"), false, 'Test 106');
test(digitCount("20200"), false, 'Test 107');
test(digitCount("1111111110"), false, 'Test 108');
test(digitCount("1300102000"), false, 'Test 109');
test(digitCount("10000000001"), false, 'Test 110');
test(digitCount("2020200"), false, 'Test 111');
test(digitCount("41210000"), false, 'Test 112');
test(digitCount("0000000009"), false, 'Test 113');
test(digitCount("0020200"), false, 'Test 114');
test(digitCount("200001"), false, 'Test 115');
test(digitCount("100000101"), false, 'Test 116');
test(digitCount("010200200"), false, 'Test 117');
test(digitCount("1000000001"), false, 'Test 118');
test(digitCount("0123210"), false, 'Test 119');
test(digitCount("3000100000"), false, 'Test 120');
test(digitCount("200000000"), false, 'Test 121');
test(digitCount("021001001"), false, 'Test 122');
test(digitCount("30000003"), false, 'Test 123');
test(digitCount("300020000"), false, 'Test 124');
test(digitCount("0000000001"), false, 'Test 125');
test(digitCount("300000000"), false, 'Test 126');
test(digitCount("00000000006"), false, 'Test 127');
test(digitCount("0000000110"), false, 'Test 128');
test(digitCount("5000000005"), false, 'Test 129');
test(digitCount("4000000000"), false, 'Test 130');
test(digitCount("2010011000"), false, 'Test 131');
test(digitCount("201010101"), false, 'Test 132');
test(digitCount("001100110"), false, 'Test 133');
test(digitCount("1000000010"), false, 'Test 134');
test(digitCount("0112233445"), false, 'Test 135');
test(digitCount("5000000100"), false, 'Test 136');
test(digitCount("0110001000"), false, 'Test 137');
test(digitCount("01000000001"), false, 'Test 138');
test(digitCount("3110000000"), false, 'Test 139');
test(digitCount("100010001"), false, 'Test 140');
test(digitCount("0000010010"), false, 'Test 141');
test(digitCount("00010000100"), false, 'Test 142');
test(digitCount("00000003000"), false, 'Test 143');
test(digitCount("8000000000"), false, 'Test 144');
test(digitCount("00001111"), false, 'Test 145');
test(digitCount("600000000000"), false, 'Test 146');
test(digitCount("1200100000"), false, 'Test 147');
test(digitCount("3330000000"), false, 'Test 148');
test(digitCount("011110000"), false, 'Test 149');
test(digitCount("2120001000"), false, 'Test 150');

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
