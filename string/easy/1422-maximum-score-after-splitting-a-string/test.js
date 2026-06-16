// Test: 1422. Maximum Score After Splitting A String
// 143 test cases from LeetCodeDataset
// Run: node test.js

const { maxScore } = require("./solution");

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

console.log("\n1422. Maximum Score After Splitting A String\n");

test(maxScore("1111"), 3, 'Test 1');
test(maxScore("00111"), 5, 'Test 2');
test(maxScore("100100"), 3, 'Test 3');
test(maxScore("110011"), 4, 'Test 4');
test(maxScore("001001"), 5, 'Test 5');
test(maxScore("11110000"), 3, 'Test 6');
test(maxScore("0000"), 3, 'Test 7');
test(maxScore("111000"), 2, 'Test 8');
test(maxScore("1001001"), 5, 'Test 9');
test(maxScore("1100"), 1, 'Test 10');
test(maxScore("100001"), 5, 'Test 11');
test(maxScore("00001111"), 8, 'Test 12');
test(maxScore("000111"), 6, 'Test 13');
test(maxScore("1001001001"), 7, 'Test 14');
test(maxScore("001100"), 4, 'Test 15');
test(maxScore("01010101"), 5, 'Test 16');
test(maxScore("010101"), 4, 'Test 17');
test(maxScore("101010"), 3, 'Test 18');
test(maxScore("11001100"), 4, 'Test 19');
test(maxScore("011101"), 5, 'Test 20');
test(maxScore("000111000111000111000"), 12, 'Test 21');
test(maxScore("101010101010101010"), 9, 'Test 22');
test(maxScore("00000000000000000000000001"), 26, 'Test 23');
test(maxScore("1000000000000000001"), 18, 'Test 24');
test(maxScore("000000111111000000111111"), 18, 'Test 25');
test(maxScore("01010101010101010101010101010101010101010"), 21, 'Test 26');
test(maxScore("1000100010001"), 10, 'Test 27');
test(maxScore("11111111110000000001111111111100000000"), 20, 'Test 28');
test(maxScore("0110110110110110110110110110"), 19, 'Test 29');
test(maxScore("0000000011111111111111"), 22, 'Test 30');
test(maxScore("000011110000111100001111000011110000111100001111"), 28, 'Test 31');
test(maxScore("1111111110"), 8, 'Test 32');
test(maxScore("111110000011111000001111100000"), 15, 'Test 33');
test(maxScore("10000000001111111111000000001111111111"), 29, 'Test 34');
test(maxScore("010101010101010101010101"), 13, 'Test 35');
test(maxScore("0110110110"), 7, 'Test 36');
test(maxScore("10101010101010101010101010"), 13, 'Test 37');
test(maxScore("00000000000000001111111111111111"), 32, 'Test 38');
test(maxScore("111000111000111"), 9, 'Test 39');
test(maxScore("111111111111111110"), 16, 'Test 40');
test(maxScore("10011111000111"), 10, 'Test 41');
test(maxScore("000111000111000111"), 12, 'Test 42');
test(maxScore("101010101010101010101010"), 12, 'Test 43');
test(maxScore("1010101010"), 5, 'Test 44');
test(maxScore("010010010010010"), 10, 'Test 45');
test(maxScore("0000000000"), 9, 'Test 46');
test(maxScore("0000000000000000"), 15, 'Test 47');
test(maxScore("1010101010101010"), 8, 'Test 48');
test(maxScore("111100001111000011110000111100001111"), 20, 'Test 49');
test(maxScore("111111000000111111000000"), 12, 'Test 50');
test(maxScore("111100001111000011110000"), 12, 'Test 51');
test(maxScore("000000000000001"), 15, 'Test 52');
test(maxScore("011101110111011101"), 14, 'Test 53');
test(maxScore("111100000000"), 7, 'Test 54');
test(maxScore("101010010101001010100101010010101"), 19, 'Test 55');
test(maxScore("11111000001111100000"), 10, 'Test 56');
test(maxScore("000011110000111100001111000011110000"), 20, 'Test 57');
test(maxScore("1111110000000001"), 10, 'Test 58');
test(maxScore("111111100000001111111100000000111111"), 21, 'Test 59');
test(maxScore("110011001100110011001100110011001100110011001100110011001100110011001100"), 36, 'Test 60');
test(maxScore("010101010101010101010101010"), 14, 'Test 61');
test(maxScore("000000011111110000000011111111000000"), 23, 'Test 62');
test(maxScore("0110110110110110"), 11, 'Test 63');
test(maxScore("0000000001"), 10, 'Test 64');
test(maxScore("11111111111111111110000000000000000"), 18, 'Test 65');
test(maxScore("010100101001010010100101001"), 17, 'Test 66');
test(maxScore("000001111111111111"), 18, 'Test 67');
test(maxScore("101010101010"), 6, 'Test 68');
test(maxScore("0001111000"), 7, 'Test 69');
test(maxScore("1001001001001001001001001001001001001001001001"), 31, 'Test 70');
test(maxScore("0000011111"), 10, 'Test 71');
test(maxScore("11111111111111111111"), 19, 'Test 72');
test(maxScore("1000000000"), 8, 'Test 73');
test(maxScore("1111111111111111"), 15, 'Test 74');
test(maxScore("000111000111000"), 9, 'Test 75');
test(maxScore("0110110110110110110110110110110110110110110110"), 31, 'Test 76');
test(maxScore("110001010101101010010101011110000101010101"), 22, 'Test 77');
test(maxScore("111001010101010"), 7, 'Test 78');
test(maxScore("01000110011001100110"), 12, 'Test 79');
test(maxScore("101010101010101010101010101010101010101"), 20, 'Test 80');
test(maxScore("0000001111111111"), 16, 'Test 81');
test(maxScore("000111111110000"), 11, 'Test 82');
test(maxScore("00000000001111111111"), 20, 'Test 83');
test(maxScore("100100100100100100100100100100100100"), 23, 'Test 84');
test(maxScore("00000000000000000001111111111111111"), 35, 'Test 85');
test(maxScore("111111111111111111111111111111111111111111111"), 44, 'Test 86');
test(maxScore("111000111000111000111"), 12, 'Test 87');
test(maxScore("11001100110011001100"), 10, 'Test 88');
test(maxScore("11111111110000000000"), 9, 'Test 89');
test(maxScore("11100011100011100011"), 11, 'Test 90');
test(maxScore("01010101010101010101010101010101"), 17, 'Test 91');
test(maxScore("0000000001111111110000000001111111110000000000111111111"), 37, 'Test 92');
test(maxScore("0101010101010101010101010101010101010101"), 21, 'Test 93');
test(maxScore("10010010010010010010"), 13, 'Test 94');
test(maxScore("1010101010101010101010101010"), 14, 'Test 95');
test(maxScore("00000000000000000000000000000000000000000000"), 43, 'Test 96');
test(maxScore("111000111000"), 6, 'Test 97');
test(maxScore("111000011111100"), 10, 'Test 98');
test(maxScore("1000000000000000"), 14, 'Test 99');
test(maxScore("000011111111"), 12, 'Test 100');
test(maxScore("1100110011001100110011001100"), 14, 'Test 101');
test(maxScore("0100101010101010"), 9, 'Test 102');
test(maxScore("0101010101010101"), 9, 'Test 103');
test(maxScore("1111111111111101"), 14, 'Test 104');
test(maxScore("0101010101010101010"), 10, 'Test 105');
test(maxScore("00010001000100010001"), 16, 'Test 106');
test(maxScore("000011110000111100001111"), 16, 'Test 107');
test(maxScore("0000111000111000"), 10, 'Test 108');
test(maxScore("0101010101"), 6, 'Test 109');
test(maxScore("11111111111111111111111110"), 24, 'Test 110');
test(maxScore("00110011001100110011"), 12, 'Test 111');
test(maxScore("0111111111000000"), 10, 'Test 112');
test(maxScore("00000000000000000000"), 19, 'Test 113');
test(maxScore("1111000011110000"), 8, 'Test 114');
test(maxScore("10101010101010101010101010101010"), 16, 'Test 115');
test(maxScore("1111100000"), 4, 'Test 116');
test(maxScore("1111000000001111000000001111000000001111000000001111"), 36, 'Test 117');
test(maxScore("0000000000000001"), 16, 'Test 118');
test(maxScore("01010101010101"), 8, 'Test 119');
test(maxScore("1101101101"), 6, 'Test 120');
test(maxScore("1010101010101010101010101010101010101010"), 20, 'Test 121');
test(maxScore("1111111111"), 9, 'Test 122');
test(maxScore("111110000011111"), 10, 'Test 123');
test(maxScore("00011100011100011100"), 12, 'Test 124');
test(maxScore("11101110111011101110"), 14, 'Test 125');
test(maxScore("000100010001000100"), 13, 'Test 126');
test(maxScore("01010101010101010101"), 11, 'Test 127');
test(maxScore("0101010101010101010101010101010101010101010101010101010101010101010101"), 36, 'Test 128');
test(maxScore("1001001001001001001001001001"), 19, 'Test 129');
test(maxScore("000001111100000111110000011111"), 20, 'Test 130');
test(maxScore("0010100101001010010100101001010010"), 21, 'Test 131');
test(maxScore("010101010101010"), 8, 'Test 132');
test(maxScore("00011110001111"), 11, 'Test 133');
test(maxScore("01101101101101101101"), 14, 'Test 134');
test(maxScore("10101010101010101010"), 10, 'Test 135');
test(maxScore("11111111111111110000000000000000"), 15, 'Test 136');
test(maxScore("0001100110"), 7, 'Test 137');
test(maxScore("0000000000011111111111"), 22, 'Test 138');
test(maxScore("11111111111111110000000000"), 15, 'Test 139');
test(maxScore("001100110011001100110011001100"), 16, 'Test 140');
test(maxScore("001100110011"), 8, 'Test 141');
test(maxScore("0111000001"), 7, 'Test 142');
test(maxScore("0000111100001111"), 12, 'Test 143');

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
