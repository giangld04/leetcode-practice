// Test: 2609. Find The Longest Balanced Substring Of A Binary String
// 185 test cases from LeetCodeDataset
// Run: node test.js

const { findTheLongestBalancedSubstring } = require("./solution");

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

console.log("\n2609. Find The Longest Balanced Substring Of A Binary String\n");

test(findTheLongestBalancedSubstring("000000111111"), 12, 'Test 1');
test(findTheLongestBalancedSubstring("000111000111"), 6, 'Test 2');
test(findTheLongestBalancedSubstring("000110"), 4, 'Test 3');
test(findTheLongestBalancedSubstring("01"), 2, 'Test 4');
test(findTheLongestBalancedSubstring("00111"), 4, 'Test 5');
test(findTheLongestBalancedSubstring("0001100111"), 4, 'Test 6');
test(findTheLongestBalancedSubstring("111"), 0, 'Test 7');
test(findTheLongestBalancedSubstring("111111"), 0, 'Test 8');
test(findTheLongestBalancedSubstring("0"), 0, 'Test 9');
test(findTheLongestBalancedSubstring("111111000000"), 0, 'Test 10');
test(findTheLongestBalancedSubstring("1100"), 0, 'Test 11');
test(findTheLongestBalancedSubstring(""), 0, 'Test 12');
test(findTheLongestBalancedSubstring("00001111"), 8, 'Test 13');
test(findTheLongestBalancedSubstring("000000"), 0, 'Test 14');
test(findTheLongestBalancedSubstring("10"), 0, 'Test 15');
test(findTheLongestBalancedSubstring("01010101"), 2, 'Test 16');
test(findTheLongestBalancedSubstring("010101"), 2, 'Test 17');
test(findTheLongestBalancedSubstring("1"), 0, 'Test 18');
test(findTheLongestBalancedSubstring("101010"), 2, 'Test 19');
test(findTheLongestBalancedSubstring("01000111"), 6, 'Test 20');
test(findTheLongestBalancedSubstring("0000000001111111110000000111111"), 18, 'Test 21');
test(findTheLongestBalancedSubstring("101010101010101010"), 2, 'Test 22');
test(findTheLongestBalancedSubstring("0000111100000000111111110000000011111111"), 16, 'Test 23');
test(findTheLongestBalancedSubstring("111111111111111111111111"), 0, 'Test 24');
test(findTheLongestBalancedSubstring("111000111000111000"), 6, 'Test 25');
test(findTheLongestBalancedSubstring("0001110000111100001111"), 8, 'Test 26');
test(findTheLongestBalancedSubstring("000000011111110000011111"), 14, 'Test 27');
test(findTheLongestBalancedSubstring("0000000000000011111111111111"), 28, 'Test 28');
test(findTheLongestBalancedSubstring("0000000000111111111100000000001111111111"), 20, 'Test 29');
test(findTheLongestBalancedSubstring("00111111001111110011111100111111"), 4, 'Test 30');
test(findTheLongestBalancedSubstring("10101010101010101010101010101010101010101010101010"), 2, 'Test 31');
test(findTheLongestBalancedSubstring("11111111110000000000000000000000"), 0, 'Test 32');
test(findTheLongestBalancedSubstring("0001000100010001000100010001000100010001"), 2, 'Test 33');
test(findTheLongestBalancedSubstring("110011001100110011001100"), 4, 'Test 34');
test(findTheLongestBalancedSubstring("000111000111000111000111000111000111000111000111"), 6, 'Test 35');
test(findTheLongestBalancedSubstring("010101010101010101010101"), 2, 'Test 36');
test(findTheLongestBalancedSubstring("0000000000000000000000000001111111111111111111111111111111"), 54, 'Test 37');
test(findTheLongestBalancedSubstring("00000000111111110000000011111111"), 16, 'Test 38');
test(findTheLongestBalancedSubstring("000000000000111111111111"), 24, 'Test 39');
test(findTheLongestBalancedSubstring("00000000001111111111000111"), 20, 'Test 40');
test(findTheLongestBalancedSubstring("00000000000000001111111111111111"), 32, 'Test 41');
test(findTheLongestBalancedSubstring("11000111000111000111"), 6, 'Test 42');
test(findTheLongestBalancedSubstring("001100110011001100110011"), 4, 'Test 43');
test(findTheLongestBalancedSubstring("111111111100000000001111"), 8, 'Test 44');
test(findTheLongestBalancedSubstring("0000000111110011000111"), 10, 'Test 45');
test(findTheLongestBalancedSubstring("000111000111000111"), 6, 'Test 46');
test(findTheLongestBalancedSubstring("101010101010101010101010"), 2, 'Test 47');
test(findTheLongestBalancedSubstring("0001110111000111000111"), 6, 'Test 48');
test(findTheLongestBalancedSubstring("0100010001000100010001000100010"), 2, 'Test 49');
test(findTheLongestBalancedSubstring("000000000000000000001111111111111111"), 32, 'Test 50');
test(findTheLongestBalancedSubstring("110000001111111111"), 12, 'Test 51');
test(findTheLongestBalancedSubstring("00110011000000111111000000"), 12, 'Test 52');
test(findTheLongestBalancedSubstring("1010101010"), 2, 'Test 53');
test(findTheLongestBalancedSubstring("010101010101010101"), 2, 'Test 54');
test(findTheLongestBalancedSubstring("110000111100000011111100000000011111"), 12, 'Test 55');
test(findTheLongestBalancedSubstring("111000111000111000111000111000"), 6, 'Test 56');
test(findTheLongestBalancedSubstring("000111000111000111000111"), 6, 'Test 57');
test(findTheLongestBalancedSubstring("000000011111110000000111111100000001111111"), 14, 'Test 58');
test(findTheLongestBalancedSubstring("01010101010101010101010101010101010101"), 2, 'Test 59');
test(findTheLongestBalancedSubstring("000000111111000000111111000000111111"), 12, 'Test 60');
test(findTheLongestBalancedSubstring("000111000011110000011111000000111111"), 12, 'Test 61');
test(findTheLongestBalancedSubstring("111100001111000011110000"), 8, 'Test 62');
test(findTheLongestBalancedSubstring("10001100110011"), 4, 'Test 63');
test(findTheLongestBalancedSubstring("11000011000011000011000011000011"), 4, 'Test 64');
test(findTheLongestBalancedSubstring("0000111100011100001111"), 8, 'Test 65');
test(findTheLongestBalancedSubstring("111111111110000000000000000"), 0, 'Test 66');
test(findTheLongestBalancedSubstring("111111111111111111110000000000000000"), 0, 'Test 67');
test(findTheLongestBalancedSubstring("0011001100110011"), 4, 'Test 68');
test(findTheLongestBalancedSubstring("000001110000011100000111"), 6, 'Test 69');
test(findTheLongestBalancedSubstring("0000111100110011"), 8, 'Test 70');
test(findTheLongestBalancedSubstring("10101010101010101010101"), 2, 'Test 71');
test(findTheLongestBalancedSubstring("000000000001111111111111111"), 22, 'Test 72');
test(findTheLongestBalancedSubstring("0000111100001111000011110000"), 8, 'Test 73');
test(findTheLongestBalancedSubstring("0000000111111000011111"), 12, 'Test 74');
test(findTheLongestBalancedSubstring("000100010001000100010001"), 2, 'Test 75');
test(findTheLongestBalancedSubstring("00000000000001111111111111100000000001111111111111000000000"), 26, 'Test 76');
test(findTheLongestBalancedSubstring("111111111111"), 0, 'Test 77');
test(findTheLongestBalancedSubstring("000011100110001110011000111"), 6, 'Test 78');
test(findTheLongestBalancedSubstring("00011000110001100011000110001100011"), 4, 'Test 79');
test(findTheLongestBalancedSubstring("10101010101010101010101010101010101010"), 2, 'Test 80');
test(findTheLongestBalancedSubstring("00110001100011000110001100011"), 4, 'Test 81');
test(findTheLongestBalancedSubstring("101010101010"), 2, 'Test 82');
test(findTheLongestBalancedSubstring("00000001111111"), 14, 'Test 83');
test(findTheLongestBalancedSubstring("0110110110110110110110"), 2, 'Test 84');
test(findTheLongestBalancedSubstring("100000001000000010000000"), 2, 'Test 85');
test(findTheLongestBalancedSubstring("000111000001111000000111110000000111111"), 12, 'Test 86');
test(findTheLongestBalancedSubstring("000011000011000011000011"), 4, 'Test 87');
test(findTheLongestBalancedSubstring("111000111000111000111000111000111"), 6, 'Test 88');
test(findTheLongestBalancedSubstring("00010001000111111111"), 6, 'Test 89');
test(findTheLongestBalancedSubstring("000000000111111111"), 18, 'Test 90');
test(findTheLongestBalancedSubstring("0001110000111000111000111"), 6, 'Test 91');
test(findTheLongestBalancedSubstring("11111100000000000000111111111111"), 24, 'Test 92');
test(findTheLongestBalancedSubstring("1110000111100001111000"), 8, 'Test 93');
test(findTheLongestBalancedSubstring("11111100000000000000"), 0, 'Test 94');
test(findTheLongestBalancedSubstring("111111000000000000000000"), 0, 'Test 95');
test(findTheLongestBalancedSubstring("1111110000001111000000"), 8, 'Test 96');
test(findTheLongestBalancedSubstring("1010101010101010101010101010101010"), 2, 'Test 97');
test(findTheLongestBalancedSubstring("1111111100000001111111000000011111110000000111111100000000"), 14, 'Test 98');
test(findTheLongestBalancedSubstring("00000000001111111111"), 20, 'Test 99');
test(findTheLongestBalancedSubstring("00000111110000011111"), 10, 'Test 100');
test(findTheLongestBalancedSubstring("00000000000111111111100000000001111111"), 20, 'Test 101');
test(findTheLongestBalancedSubstring("000000000111100000001111000000001111"), 8, 'Test 102');
test(findTheLongestBalancedSubstring("0000000011111111000000001111111100000000"), 16, 'Test 103');
test(findTheLongestBalancedSubstring("111000111000111000111"), 6, 'Test 104');
test(findTheLongestBalancedSubstring("010010001000010000001"), 2, 'Test 105');
test(findTheLongestBalancedSubstring("1001001001001001"), 2, 'Test 106');
test(findTheLongestBalancedSubstring("00000011111000000011111000000011111"), 10, 'Test 107');
test(findTheLongestBalancedSubstring("11111111110000000000"), 0, 'Test 108');
test(findTheLongestBalancedSubstring("1111000000111111"), 12, 'Test 109');
test(findTheLongestBalancedSubstring("01010101010101010101010101010101"), 2, 'Test 110');
test(findTheLongestBalancedSubstring("11001100110011001100"), 4, 'Test 111');
test(findTheLongestBalancedSubstring("0101010101010101010101010101010101010101"), 2, 'Test 112');
test(findTheLongestBalancedSubstring("1111111100000000111111110000000011111111"), 16, 'Test 113');
test(findTheLongestBalancedSubstring("1111000001111000001111000001111000001111"), 8, 'Test 114');
test(findTheLongestBalancedSubstring("0000000111111100000001111111"), 14, 'Test 115');
test(findTheLongestBalancedSubstring("010000001111101000111010000111000011111110000011111000001111"), 10, 'Test 116');
test(findTheLongestBalancedSubstring("011111110111111101111111"), 2, 'Test 117');
test(findTheLongestBalancedSubstring("1100110011001100110011001100"), 4, 'Test 118');
test(findTheLongestBalancedSubstring("010101010101"), 2, 'Test 119');
test(findTheLongestBalancedSubstring("111110000001111100000111110000011111"), 10, 'Test 120');
test(findTheLongestBalancedSubstring("11000110001100011000110001100011"), 4, 'Test 121');
test(findTheLongestBalancedSubstring("0101010101010101"), 2, 'Test 122');
test(findTheLongestBalancedSubstring("00000011111111"), 12, 'Test 123');
test(findTheLongestBalancedSubstring("000000000000000000000000"), 0, 'Test 124');
test(findTheLongestBalancedSubstring("000111000111000111000111000111"), 6, 'Test 125');
test(findTheLongestBalancedSubstring("00010001000100010001"), 2, 'Test 126');
test(findTheLongestBalancedSubstring("1100001111000011111"), 8, 'Test 127');
test(findTheLongestBalancedSubstring("111111111111100000000000000111111111111000000000000111111111111"), 24, 'Test 128');
test(findTheLongestBalancedSubstring("000011000011000011000011000011"), 4, 'Test 129');
test(findTheLongestBalancedSubstring("000011110000111100001111"), 8, 'Test 130');
test(findTheLongestBalancedSubstring("00000111100000000111111110000011111111000001111111000"), 16, 'Test 131');
test(findTheLongestBalancedSubstring("10000000001111111111"), 18, 'Test 132');
test(findTheLongestBalancedSubstring("0101010101"), 2, 'Test 133');
test(findTheLongestBalancedSubstring("00001111000011110000111100001111"), 8, 'Test 134');
test(findTheLongestBalancedSubstring("000110001100011"), 4, 'Test 135');
test(findTheLongestBalancedSubstring("111111000000111111000000111111000000"), 12, 'Test 136');
test(findTheLongestBalancedSubstring("00110011001100110011"), 4, 'Test 137');
test(findTheLongestBalancedSubstring("00001111000111"), 8, 'Test 138');
test(findTheLongestBalancedSubstring("0000001111100111"), 10, 'Test 139');
test(findTheLongestBalancedSubstring("0110011001100110011"), 4, 'Test 140');
test(findTheLongestBalancedSubstring("0000000011111111"), 16, 'Test 141');
test(findTheLongestBalancedSubstring("1001001001001001001001001"), 2, 'Test 142');
test(findTheLongestBalancedSubstring("111111111111111111111110000000000000000000000000"), 0, 'Test 143');
test(findTheLongestBalancedSubstring("100000000000111111111111111000000000001111111111111111"), 22, 'Test 144');
test(findTheLongestBalancedSubstring("0101010101010101010101010101010101010101010101"), 2, 'Test 145');
test(findTheLongestBalancedSubstring("0000000011111100000111110000011111"), 12, 'Test 146');
test(findTheLongestBalancedSubstring("000000000000000000000001111111111111111111111111"), 46, 'Test 147');
test(findTheLongestBalancedSubstring("1010101010101010101010101010101010101010101010"), 2, 'Test 148');
test(findTheLongestBalancedSubstring("001001001001001001001001001001001001001"), 2, 'Test 149');
test(findTheLongestBalancedSubstring("00000111100001110011"), 8, 'Test 150');
test(findTheLongestBalancedSubstring("1001001001001"), 2, 'Test 151');
test(findTheLongestBalancedSubstring("010010010010010010010010010010010010010"), 2, 'Test 152');
test(findTheLongestBalancedSubstring("001010110011000111"), 6, 'Test 153');
test(findTheLongestBalancedSubstring("111000111000111000111000111000111000111000111"), 6, 'Test 154');
test(findTheLongestBalancedSubstring("0110011001100110"), 4, 'Test 155');
test(findTheLongestBalancedSubstring("0000000000001111111111111110000000000011111111111111110000000000011111111111111"), 24, 'Test 156');
test(findTheLongestBalancedSubstring("00000000000000111111111111111111"), 28, 'Test 157');
test(findTheLongestBalancedSubstring("00011100001111"), 8, 'Test 158');
test(findTheLongestBalancedSubstring("01010101010101010101010101010101010101010101"), 2, 'Test 159');
test(findTheLongestBalancedSubstring("001001001001"), 2, 'Test 160');
test(findTheLongestBalancedSubstring("0011001100110011001100110011"), 4, 'Test 161');
test(findTheLongestBalancedSubstring("01010101010101010101"), 2, 'Test 162');
test(findTheLongestBalancedSubstring("0101010101010101010101010101010101010101010101010101010101010101010101"), 2, 'Test 163');
test(findTheLongestBalancedSubstring("11001100110011"), 4, 'Test 164');
test(findTheLongestBalancedSubstring("1001001001001001001001001001"), 2, 'Test 165');
test(findTheLongestBalancedSubstring("000111010001110011"), 6, 'Test 166');
test(findTheLongestBalancedSubstring("0000011111111100000000111111000000"), 12, 'Test 167');
test(findTheLongestBalancedSubstring("000001111100000111110000011111"), 10, 'Test 168');
test(findTheLongestBalancedSubstring("000000000011111111111111"), 20, 'Test 169');
test(findTheLongestBalancedSubstring("1110000000111000000111"), 6, 'Test 170');
test(findTheLongestBalancedSubstring("11111111111111110000000000000000"), 0, 'Test 171');
test(findTheLongestBalancedSubstring("10101010101010101010"), 2, 'Test 172');
test(findTheLongestBalancedSubstring("00000000111111100000111100000111111100000000111111100000000"), 14, 'Test 173');
test(findTheLongestBalancedSubstring("000110000111000001111"), 8, 'Test 174');
test(findTheLongestBalancedSubstring("10101010101010"), 2, 'Test 175');
test(findTheLongestBalancedSubstring("111111000000000000111111111"), 18, 'Test 176');
test(findTheLongestBalancedSubstring("111000111000111000111000"), 6, 'Test 177');
test(findTheLongestBalancedSubstring("11001100110011001100110011"), 4, 'Test 178');
test(findTheLongestBalancedSubstring("000000011111000000011111000000011111"), 10, 'Test 179');
test(findTheLongestBalancedSubstring("0000000000011111111111"), 22, 'Test 180');
test(findTheLongestBalancedSubstring("010010001000010000000100000000001"), 2, 'Test 181');
test(findTheLongestBalancedSubstring("11111111111111111111111111110000000000000000000000000000000"), 0, 'Test 182');
test(findTheLongestBalancedSubstring("00111000111000111000111000111"), 6, 'Test 183');
test(findTheLongestBalancedSubstring("001100110011"), 4, 'Test 184');
test(findTheLongestBalancedSubstring("0000111100001111"), 8, 'Test 185');

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
