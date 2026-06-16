// Test: 2712. Minimum Cost To Make All Characters Equal
// 162 test cases from LeetCodeDataset
// Run: node test.js

const { minimumCost } = require("./solution");

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

console.log("\n2712. Minimum Cost To Make All Characters Equal\n");

test(minimumCost("100100100"), 13, 'Test 1');
test(minimumCost("00000000000000000000000000000000000000000000000000"), 0, 'Test 2');
test(minimumCost("110011"), 4, 'Test 3');
test(minimumCost("11110000"), 4, 'Test 4');
test(minimumCost("1000100010001"), 20, 'Test 5');
test(minimumCost("111000"), 3, 'Test 6');
test(minimumCost("101010101010"), 36, 'Test 7');
test(minimumCost("0100100100"), 17, 'Test 8');
test(minimumCost("1111111111"), 0, 'Test 9');
test(minimumCost("000111"), 3, 'Test 10');
test(minimumCost("11111"), 0, 'Test 11');
test(minimumCost("0101010101010101010101010101"), 196, 'Test 12');
test(minimumCost("01010101010"), 30, 'Test 13');
test(minimumCost("1010101010"), 25, 'Test 14');
test(minimumCost("010101"), 9, 'Test 15');
test(minimumCost("010101010101010101"), 81, 'Test 16');
test(minimumCost("0000000000"), 0, 'Test 17');
test(minimumCost("1100110011"), 12, 'Test 18');
test(minimumCost("101010"), 9, 'Test 19');
test(minimumCost("0011"), 2, 'Test 20');
test(minimumCost("0101010101"), 25, 'Test 21');
test(minimumCost("00000"), 0, 'Test 22');
test(minimumCost("101010101010101010"), 81, 'Test 23');
test(minimumCost("0000111100001111000011110000111100001111000011110000111100001111"), 256, 'Test 24');
test(minimumCost("101010101010101"), 56, 'Test 25');
test(minimumCost("000000111111000000"), 12, 'Test 26');
test(minimumCost("00000000001"), 1, 'Test 27');
test(minimumCost("10101010101"), 30, 'Test 28');
test(minimumCost("010101010101010101010101010101010101"), 324, 'Test 29');
test(minimumCost("11111111111111111111111111111111111111111111111111111111111111101"), 3, 'Test 30');
test(minimumCost("0110011001100110011001100110"), 98, 'Test 31');
test(minimumCost("1111100001111100001111100001111100001111100001111100001111100001"), 228, 'Test 32');
test(minimumCost("11111111111111111111111111111111111111111111111111111111111111010"), 6, 'Test 33');
test(minimumCost("010101010101010101010101"), 144, 'Test 34');
test(minimumCost("0100100100100100100100100100"), 131, 'Test 35');
test(minimumCost("0110110110"), 16, 'Test 36');
test(minimumCost("10101010101010101010101010"), 169, 'Test 37');
test(minimumCost("00000111111"), 5, 'Test 38');
test(minimumCost("111000111000111"), 18, 'Test 39');
test(minimumCost("0000000000000000000000000000000011111111111111111111"), 20, 'Test 40');
test(minimumCost("101010101010101010101010"), 144, 'Test 41');
test(minimumCost("00000000001000000000"), 19, 'Test 42');
test(minimumCost("00000000000000"), 0, 'Test 43');
test(minimumCost("11001100110011001100110011001100"), 128, 'Test 44');
test(minimumCost("101010101010101010101010101010"), 225, 'Test 45');
test(minimumCost("000000111111000000111111000000111111"), 54, 'Test 46');
test(minimumCost("111100001111000011110000111100001111"), 80, 'Test 47');
test(minimumCost("111100001111000011110000"), 36, 'Test 48');
test(minimumCost("111111111111111111110"), 1, 'Test 49');
test(minimumCost("000000000000000000001"), 1, 'Test 50');
test(minimumCost("00000000000000000000000000000000000000000000000000000000000000010"), 3, 'Test 51');
test(minimumCost("00000000000000000000000000000000000000000000000000000000000000000"), 0, 'Test 52');
test(minimumCost("100100100100100100100100"), 96, 'Test 53');
test(minimumCost("0011001100110011001100110011001100110011"), 200, 'Test 54');
test(minimumCost("0000111100001111000011110000"), 48, 'Test 55');
test(minimumCost("0000000000000000000000000000000000000000000000000000000000000000"), 0, 'Test 56');
test(minimumCost("00110011001100110011001100110011"), 128, 'Test 57');
test(minimumCost("111111111111"), 0, 'Test 58');
test(minimumCost("1001001001001001001001001001001"), 160, 'Test 59');
test(minimumCost("11110000111100001111"), 24, 'Test 60');
test(minimumCost("01010101010101010101010101"), 169, 'Test 61');
test(minimumCost("0000000000000000000000000000000000000000000000000000000000000001"), 1, 'Test 62');
test(minimumCost("1011011011011011011011011011"), 131, 'Test 63');
test(minimumCost("010101010101010101010101010101010101010101010101"), 576, 'Test 64');
test(minimumCost("111111111100000000001111111111"), 20, 'Test 65');
test(minimumCost("111111000000111111"), 12, 'Test 66');
test(minimumCost("010010010010010010010010010010"), 150, 'Test 67');
test(minimumCost("1111000011110000111100001111000011110000111100001111000011110000"), 256, 'Test 68');
test(minimumCost("0000011111"), 5, 'Test 69');
test(minimumCost("11111111111111111111"), 0, 'Test 70');
test(minimumCost("000011110000"), 8, 'Test 71');
test(minimumCost("101010010101010"), 50, 'Test 72');
test(minimumCost("1001001001"), 16, 'Test 73');
test(minimumCost("1111111111111111111111111111111111111111111111111111111111111111"), 0, 'Test 74');
test(minimumCost("111111111111111111"), 0, 'Test 75');
test(minimumCost("11110000001111000000"), 20, 'Test 76');
test(minimumCost("000001111000001111000001111000001111000001111000001111000001111"), 220, 'Test 77');
test(minimumCost("1010101010101010101010101010101010"), 289, 'Test 78');
test(minimumCost("10010010010010"), 33, 'Test 79');
test(minimumCost("111111000000111111000000111111"), 36, 'Test 80');
test(minimumCost("1010101010101010101010101010101010101010101010101010101010101010"), 1024, 'Test 81');
test(minimumCost("000000000000"), 0, 'Test 82');
test(minimumCost("010101010101010101010101010101"), 225, 'Test 83');
test(minimumCost("10101010101010101010101010101010101010101010101010101010101010100"), 1055, 'Test 84');
test(minimumCost("1111111111111111111111111111111111111111111111111111"), 0, 'Test 85');
test(minimumCost("1001001001001001"), 42, 'Test 86');
test(minimumCost("1111111111111111000000000000"), 12, 'Test 87');
test(minimumCost("0110011001100110011001100"), 78, 'Test 88');
test(minimumCost("11001100110011001100"), 50, 'Test 89');
test(minimumCost("110011110011001111001100111100110011"), 130, 'Test 90');
test(minimumCost("01010101010101010101010101010101"), 256, 'Test 91');
test(minimumCost("0101010101010101010101010101010101010101"), 400, 'Test 92');
test(minimumCost("1010101010101010101010101010"), 196, 'Test 93');
test(minimumCost("1000000000000000000000000000000000000000"), 1, 'Test 94');
test(minimumCost("111000111000"), 12, 'Test 95');
test(minimumCost("1111111100000000"), 8, 'Test 96');
test(minimumCost("111100001111"), 8, 'Test 97');
test(minimumCost("1100110011001100110011001100"), 98, 'Test 98');
test(minimumCost("10101001010101010101010101010101"), 250, 'Test 99');
test(minimumCost("11110000111100001111000011110000"), 64, 'Test 100');
test(minimumCost("010101010101"), 36, 'Test 101');
test(minimumCost("111111111100000000111111111100000000"), 36, 'Test 102');
test(minimumCost("11011011011011011011"), 66, 'Test 103');
test(minimumCost("101010101010101010101010101010101010101010101010101010101010101011"), 1088, 'Test 104');
test(minimumCost("00000000000000000000000000000000000000000000000000000000000000101"), 6, 'Test 105');
test(minimumCost("0101010101010101"), 64, 'Test 106');
test(minimumCost("1111111111111111111111111111"), 0, 'Test 107');
test(minimumCost("0101010101010101010101010101010101010101010101010101010101010101"), 1024, 'Test 108');
test(minimumCost("111111110000000011111111"), 16, 'Test 109');
test(minimumCost("010101010101010101010101010101010101010101010101010101"), 729, 'Test 110');
test(minimumCost("01001010010100101001010010100101001010010100101001010010100101000"), 843, 'Test 111');
test(minimumCost("111100001111000011"), 20, 'Test 112');
test(minimumCost("011001100110"), 18, 'Test 113');
test(minimumCost("000011110000111100001111"), 36, 'Test 114');
test(minimumCost("000000000011111111110000000000"), 20, 'Test 115');
test(minimumCost("10011001100110011001100110011001"), 128, 'Test 116');
test(minimumCost("11111111111111111111111111111111111111111111111111"), 0, 'Test 117');
test(minimumCost("00001111000011110000111100001111"), 64, 'Test 118');
test(minimumCost("0100110011001100110011"), 61, 'Test 119');
test(minimumCost("1100101100"), 17, 'Test 120');
test(minimumCost("00110011001100110011"), 50, 'Test 121');
test(minimumCost("11111111110"), 1, 'Test 122');
test(minimumCost("00000000000000000000"), 0, 'Test 123');
test(minimumCost("1111100000"), 5, 'Test 124');
test(minimumCost("0000000011111111"), 8, 'Test 125');
test(minimumCost("1001001001001001001001001"), 104, 'Test 126');
test(minimumCost("0000000000000000111111111111"), 12, 'Test 127');
test(minimumCost("111111111111111111111111111111111111111111111111111111111111111111"), 0, 'Test 128');
test(minimumCost("000000000000000000"), 0, 'Test 129');
test(minimumCost("01010101010101"), 49, 'Test 130');
test(minimumCost("0000000000000000000000000000000000000000000000000000"), 0, 'Test 131');
test(minimumCost("01010110101010101010101010101010"), 250, 'Test 132');
test(minimumCost("001100110011001"), 28, 'Test 133');
test(minimumCost("1010101010101010101010101010101010101010"), 400, 'Test 134');
test(minimumCost("0100101001010010100101001010010100101001010010100101001010010100"), 819, 'Test 135');
test(minimumCost("000001111111"), 5, 'Test 136');
test(minimumCost("100100100100"), 24, 'Test 137');
test(minimumCost("01010101010101010101010101010101010101010101010101010101010101010"), 1056, 'Test 138');
test(minimumCost("11111000001111"), 9, 'Test 139');
test(minimumCost("1010101010101010101010101010101010101010101010101010"), 676, 'Test 140');
test(minimumCost("110011001100110011001100110011"), 112, 'Test 141');
test(minimumCost("01010101010101010101"), 100, 'Test 142');
test(minimumCost("01111111111111111110"), 2, 'Test 143');
test(minimumCost("11001100110011"), 24, 'Test 144');
test(minimumCost("111110000000"), 5, 'Test 145');
test(minimumCost("0110011001100110011001100110011"), 120, 'Test 146');
test(minimumCost("10000000000000000001"), 2, 'Test 147');
test(minimumCost("11111000000"), 5, 'Test 148');
test(minimumCost("0000000000000000000000000000000000000001"), 1, 'Test 149');
test(minimumCost("11111111111111"), 0, 'Test 150');
test(minimumCost("010101010101010"), 56, 'Test 151');
test(minimumCost("11111111111111110000000000000000"), 16, 'Test 152');
test(minimumCost("10101010101010101010"), 100, 'Test 153');
test(minimumCost("1101010101"), 24, 'Test 154');
test(minimumCost("000000111111000000111111000000"), 36, 'Test 155');
test(minimumCost("00100100100100100100"), 66, 'Test 156');
test(minimumCost("1111111111111111111111111111111111111111111111111111111111111110"), 1, 'Test 157');
test(minimumCost("0110110110110110110110110110110"), 160, 'Test 158');
test(minimumCost("0000000000000000000000000000"), 0, 'Test 159');
test(minimumCost("001100110011001100110011001100"), 112, 'Test 160');
test(minimumCost("000111000111000"), 18, 'Test 161');
test(minimumCost("0000111100001111"), 16, 'Test 162');

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
