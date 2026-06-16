// Test: 3234. Count The Number Of Substrings With Dominant Ones
// 165 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfSubstrings } = require("./solution");

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

console.log("\n3234. Count The Number Of Substrings With Dominant Ones\n");

test(numberOfSubstrings("1111"), 10, 'Test 1');
test(numberOfSubstrings("100100100"), 8, 'Test 2');
test(numberOfSubstrings("1111010101"), 33, 'Test 3');
test(numberOfSubstrings("000111000"), 12, 'Test 4');
test(numberOfSubstrings("11110000"), 15, 'Test 5');
test(numberOfSubstrings("0000"), 0, 'Test 6');
test(numberOfSubstrings("111000"), 9, 'Test 7');
test(numberOfSubstrings("01010101111"), 34, 'Test 8');
test(numberOfSubstrings("0011110011"), 31, 'Test 9');
test(numberOfSubstrings("0000101010"), 11, 'Test 10');
test(numberOfSubstrings("00001111"), 15, 'Test 11');
test(numberOfSubstrings("000111"), 9, 'Test 12');
test(numberOfSubstrings("1001001001"), 10, 'Test 13');
test(numberOfSubstrings("11111"), 15, 'Test 14');
test(numberOfSubstrings("01010101"), 14, 'Test 15');
test(numberOfSubstrings("11010101"), 18, 'Test 16');
test(numberOfSubstrings("10101010"), 14, 'Test 17');
test(numberOfSubstrings("1010100000"), 10, 'Test 18');
test(numberOfSubstrings("010101"), 10, 'Test 19');
test(numberOfSubstrings("1100111100"), 31, 'Test 20');
test(numberOfSubstrings("101010"), 10, 'Test 21');
test(numberOfSubstrings("00011"), 5, 'Test 22');
test(numberOfSubstrings("11001100"), 13, 'Test 23');
test(numberOfSubstrings("101101"), 16, 'Test 24');
test(numberOfSubstrings("111000111"), 18, 'Test 25');
test(numberOfSubstrings("1010101010101010"), 30, 'Test 26');
test(numberOfSubstrings("00000"), 0, 'Test 27');
test(numberOfSubstrings("10010010"), 8, 'Test 28');
test(numberOfSubstrings("000111000111000111000"), 36, 'Test 29');
test(numberOfSubstrings("111111111111111111111111"), 300, 'Test 30');
test(numberOfSubstrings("000011000110001100011000"), 28, 'Test 31');
test(numberOfSubstrings("1111110000000011"), 35, 'Test 32');
test(numberOfSubstrings("111000111000111000"), 33, 'Test 33');
test(numberOfSubstrings("1111000000000011111"), 37, 'Test 34');
test(numberOfSubstrings("000000111111000000111111"), 70, 'Test 35');
test(numberOfSubstrings("0110110110110110110"), 88, 'Test 36');
test(numberOfSubstrings("1101010101010101"), 34, 'Test 37');
test(numberOfSubstrings("111111111100000000000000000000"), 74, 'Test 38');
test(numberOfSubstrings("10101010101010101010101010101010101010101010101010"), 98, 'Test 39');
test(numberOfSubstrings("11000000001111111111"), 79, 'Test 40');
test(numberOfSubstrings("00111111001111110011111100111111001111110011111100111111001111110011"), 657, 'Test 41');
test(numberOfSubstrings("11110000000000000000000000000000000"), 15, 'Test 42');
test(numberOfSubstrings("111110000011111000001111100000"), 82, 'Test 43');
test(numberOfSubstrings("1100110011001100"), 29, 'Test 44');
test(numberOfSubstrings("00000000000000000000000000001111111"), 39, 'Test 45');
test(numberOfSubstrings("010101010101010101010101"), 46, 'Test 46');
test(numberOfSubstrings("1100110011001100110011001100110011001100110011001100110011001100110"), 133, 'Test 47');
test(numberOfSubstrings("0001110001110001"), 26, 'Test 48');
test(numberOfSubstrings("1001001001001001001001001001001001001001001001001001001001001001"), 64, 'Test 49');
test(numberOfSubstrings("000111000111000111"), 33, 'Test 50');
test(numberOfSubstrings("101010101010101010101010"), 46, 'Test 51');
test(numberOfSubstrings("1100000000000011"), 10, 'Test 52');
test(numberOfSubstrings("1000000000001000"), 5, 'Test 53');
test(numberOfSubstrings("111111111111111111111111111100000000000000000000"), 496, 'Test 54');
test(numberOfSubstrings("1000000000000011"), 7, 'Test 55');
test(numberOfSubstrings("010101010101010101"), 34, 'Test 56');
test(numberOfSubstrings("1000000000000000000000000000"), 2, 'Test 57');
test(numberOfSubstrings("111000111000111000111000111000"), 57, 'Test 58');
test(numberOfSubstrings("1111111000000000000"), 39, 'Test 59');
test(numberOfSubstrings("0000000000000000"), 0, 'Test 60');
test(numberOfSubstrings("11111000001111100000111110000011111"), 104, 'Test 61');
test(numberOfSubstrings("101010101010101010101010101010"), 58, 'Test 62');
test(numberOfSubstrings("0100111101110010"), 60, 'Test 63');
test(numberOfSubstrings("100100100100100100100"), 20, 'Test 64');
test(numberOfSubstrings("111100001111000011110000"), 57, 'Test 65');
test(numberOfSubstrings("0000000001111111110000000000"), 80, 'Test 66');
test(numberOfSubstrings("0011001100110011"), 29, 'Test 67');
test(numberOfSubstrings("11000011000011000011000011"), 31, 'Test 68');
test(numberOfSubstrings("0000111100001111000011110000"), 63, 'Test 69');
test(numberOfSubstrings("1000000010000000100000001"), 10, 'Test 70');
test(numberOfSubstrings("0000000000000000000000000000000000000000000000000000000000000000"), 0, 'Test 71');
test(numberOfSubstrings("11111000000000001111111111"), 96, 'Test 72');
test(numberOfSubstrings("000000010000000100000001"), 8, 'Test 73');
test(numberOfSubstrings("100010001000100010001000"), 17, 'Test 74');
test(numberOfSubstrings("11111111111111111111000000000000"), 264, 'Test 75');
test(numberOfSubstrings("1001001001001001001001001001001"), 31, 'Test 76');
test(numberOfSubstrings("0000000000000000000000000000000000000000"), 0, 'Test 77');
test(numberOfSubstrings("11110000111100001111"), 51, 'Test 78');
test(numberOfSubstrings("1111111110000000000000000000"), 61, 'Test 79');
test(numberOfSubstrings("010101010101010101010101010101010101010101010101"), 94, 'Test 80');
test(numberOfSubstrings("11111000001111100000111110000011111000001111100000111110000011111"), 194, 'Test 81');
test(numberOfSubstrings("111111111100000000001111111111"), 148, 'Test 82');
test(numberOfSubstrings("01010101010101010101010101010101010101010101010101"), 98, 'Test 83');
test(numberOfSubstrings("000000000000000000000000000000001111111111111111111111111111111"), 601, 'Test 84');
test(numberOfSubstrings("111000011111000"), 39, 'Test 85');
test(numberOfSubstrings("11111111111111111111"), 210, 'Test 86');
test(numberOfSubstrings("1001001001001001001001001001001001001001001001001001"), 52, 'Test 87');
test(numberOfSubstrings("0000000000000000000000000000001111111111111111111111111111111"), 601, 'Test 88');
test(numberOfSubstrings("1111111111111111"), 136, 'Test 89');
test(numberOfSubstrings("1111111111111111111111111111111111111111111111111111111111111111"), 2080, 'Test 90');
test(numberOfSubstrings("0000000111111111111"), 103, 'Test 91');
test(numberOfSubstrings("0101010111111111"), 96, 'Test 92');
test(numberOfSubstrings("00000000000000000000000000000000111111111111111111111111111111111"), 676, 'Test 93');
test(numberOfSubstrings("111111000000111111000000111111"), 100, 'Test 94');
test(numberOfSubstrings("0000000001111111"), 39, 'Test 95');
test(numberOfSubstrings("0001010101101011"), 37, 'Test 96');
test(numberOfSubstrings("00000000001111111111"), 74, 'Test 97');
test(numberOfSubstrings("0011001100110011001100110011001100110011001100110011001100110011001"), 129, 'Test 98');
test(numberOfSubstrings("1111100000111110000011111"), 74, 'Test 99');
test(numberOfSubstrings("111000111000111000111"), 42, 'Test 100');
test(numberOfSubstrings("1001001001001001"), 16, 'Test 101');
test(numberOfSubstrings("11001100110011001100"), 37, 'Test 102');
test(numberOfSubstrings("01010101010101010101010101010101"), 62, 'Test 103');
test(numberOfSubstrings("1110010001100011110"), 40, 'Test 104');
test(numberOfSubstrings("1111000000000000000000000000000000000000"), 15, 'Test 105');
test(numberOfSubstrings("00000000000000000000000000000000000000000000000000"), 0, 'Test 106');
test(numberOfSubstrings("1001001001001001001001"), 22, 'Test 107');
test(numberOfSubstrings("111000111000111000111000111"), 54, 'Test 108');
test(numberOfSubstrings("0000111111110000"), 63, 'Test 109');
test(numberOfSubstrings("0011110011110011"), 65, 'Test 110');
test(numberOfSubstrings("1111111100000000"), 49, 'Test 111');
test(numberOfSubstrings("1111000011110000111100001111000011110000"), 99, 'Test 112');
test(numberOfSubstrings("11100111001110011100111001110011100111001110011100"), 171, 'Test 113');
test(numberOfSubstrings("111110000111100001111"), 58, 'Test 114');
test(numberOfSubstrings("110000110000110000110000110000"), 33, 'Test 115');
test(numberOfSubstrings("0101010101010101"), 30, 'Test 116');
test(numberOfSubstrings("000000000000000000000000"), 0, 'Test 117');
test(numberOfSubstrings("111000111000111000111000111000111000111000111000"), 93, 'Test 118');
test(numberOfSubstrings("00000000000000000000000000000000000111111111111111"), 154, 'Test 119');
test(numberOfSubstrings("0000011111111100000"), 80, 'Test 120');
test(numberOfSubstrings("0000111111111111"), 103, 'Test 121');
test(numberOfSubstrings("000111000111000111000111000111"), 57, 'Test 122');
test(numberOfSubstrings("1000100010001000100"), 14, 'Test 123');
test(numberOfSubstrings("1001001001001001001"), 19, 'Test 124');
test(numberOfSubstrings("0110011001100110011001"), 41, 'Test 125');
test(numberOfSubstrings("11111111111111111000000000000000000000000000000000000000000000011"), 200, 'Test 126');
test(numberOfSubstrings("0010110101101011"), 46, 'Test 127');
test(numberOfSubstrings("000000000011111111110000000000"), 96, 'Test 128');
test(numberOfSubstrings("00000111110000011111000001111100000111110000011111000001111100000"), 180, 'Test 129');
test(numberOfSubstrings("11111111111111111111111111111111111111111111111111"), 1275, 'Test 130');
test(numberOfSubstrings("11011011011011011011011011011011011"), 184, 'Test 131');
test(numberOfSubstrings("1110001110001110"), 33, 'Test 132');
test(numberOfSubstrings("10010010010010010010010010010010"), 32, 'Test 133');
test(numberOfSubstrings("1110011100011100011"), 44, 'Test 134');
test(numberOfSubstrings("00000000000000000000"), 0, 'Test 135');
test(numberOfSubstrings("1111000011110000"), 36, 'Test 136');
test(numberOfSubstrings("10101010101010101010101010101010"), 62, 'Test 137');
test(numberOfSubstrings("01001001001001001001001"), 23, 'Test 138');
test(numberOfSubstrings("1111111111000000"), 74, 'Test 139');
test(numberOfSubstrings("0000000011111111"), 49, 'Test 140');
test(numberOfSubstrings("1111000000001111"), 30, 'Test 141');
test(numberOfSubstrings("01001001001001001001001001001001"), 32, 'Test 142');
test(numberOfSubstrings("1000001111110000"), 42, 'Test 143');
test(numberOfSubstrings("000000000011111111111111111111"), 264, 'Test 144');
test(numberOfSubstrings("1100001100001100"), 19, 'Test 145');
test(numberOfSubstrings("1111111111"), 55, 'Test 146');
test(numberOfSubstrings("1010101010101010101010101010101010101010"), 78, 'Test 147');
test(numberOfSubstrings("0110011001100110"), 31, 'Test 148');
test(numberOfSubstrings("1111000000000000111111111111"), 118, 'Test 149');
test(numberOfSubstrings("1111000011110000111100001111"), 72, 'Test 150');
test(numberOfSubstrings("00000000000000000001"), 2, 'Test 151');
test(numberOfSubstrings("0000000000111111"), 30, 'Test 152');
test(numberOfSubstrings("0011001100110011001100110011"), 53, 'Test 153');
test(numberOfSubstrings("01010101010101010101"), 38, 'Test 154');
test(numberOfSubstrings("111110111110111110111110111110"), 453, 'Test 155');
test(numberOfSubstrings("111110000000"), 22, 'Test 156');
test(numberOfSubstrings("1111111101010101"), 84, 'Test 157');
test(numberOfSubstrings("1101001010010100"), 24, 'Test 158');
test(numberOfSubstrings("1111010101010101"), 45, 'Test 159');
test(numberOfSubstrings("000001111100000111110000011111"), 82, 'Test 160');
test(numberOfSubstrings("0000000000000000000000000001"), 2, 'Test 161');
test(numberOfSubstrings("10101010101010101010"), 38, 'Test 162');
test(numberOfSubstrings("0110110110110110110110110110110"), 156, 'Test 163');
test(numberOfSubstrings("11111111111111110000000000"), 174, 'Test 164');
test(numberOfSubstrings("0000111100001111"), 36, 'Test 165');

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
