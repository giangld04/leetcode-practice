// Test: 2767. Partition String Into Minimum Beautiful Substrings
// 148 test cases from LeetCodeDataset
// Run: node test.js

const { minimumBeautifulSubstrings } = require("./solution");

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

console.log("\n2767. Partition String Into Minimum Beautiful Substrings\n");

test(minimumBeautifulSubstrings("1100101"), -1, 'Test 1');
test(minimumBeautifulSubstrings("100000000000000"), -1, 'Test 2');
test(minimumBeautifulSubstrings("101010101010101"), -1, 'Test 3');
test(minimumBeautifulSubstrings("101010101"), -1, 'Test 4');
test(minimumBeautifulSubstrings("111"), 3, 'Test 5');
test(minimumBeautifulSubstrings("100000"), -1, 'Test 6');
test(minimumBeautifulSubstrings("111111111"), 9, 'Test 7');
test(minimumBeautifulSubstrings("0"), -1, 'Test 8');
test(minimumBeautifulSubstrings("1010101"), -1, 'Test 9');
test(minimumBeautifulSubstrings("1111111"), 7, 'Test 10');
test(minimumBeautifulSubstrings("111111111111111"), 15, 'Test 11');
test(minimumBeautifulSubstrings("1100001"), -1, 'Test 12');
test(minimumBeautifulSubstrings("1011"), 2, 'Test 13');
test(minimumBeautifulSubstrings("100111"), -1, 'Test 14');
test(minimumBeautifulSubstrings("100111011"), -1, 'Test 15');
test(minimumBeautifulSubstrings("1"), 1, 'Test 16');
test(minimumBeautifulSubstrings("110000"), -1, 'Test 17');
test(minimumBeautifulSubstrings("1000000"), -1, 'Test 18');
test(minimumBeautifulSubstrings("1110111"), 5, 'Test 19');
test(minimumBeautifulSubstrings("100000000"), -1, 'Test 20');
test(minimumBeautifulSubstrings("110011001"), -1, 'Test 21');
test(minimumBeautifulSubstrings("11001"), 1, 'Test 22');
test(minimumBeautifulSubstrings("0111000111000111000111000111000"), -1, 'Test 23');
test(minimumBeautifulSubstrings("10101010101"), -1, 'Test 24');
test(minimumBeautifulSubstrings("100010001000100"), -1, 'Test 25');
test(minimumBeautifulSubstrings("01101101101101101"), -1, 'Test 26');
test(minimumBeautifulSubstrings("1101010101010101"), -1, 'Test 27');
test(minimumBeautifulSubstrings("1010101010101010101010101"), -1, 'Test 28');
test(minimumBeautifulSubstrings("1111111111111111111"), 19, 'Test 29');
test(minimumBeautifulSubstrings("1010101010101010101"), -1, 'Test 30');
test(minimumBeautifulSubstrings("00001000010000100001"), -1, 'Test 31');
test(minimumBeautifulSubstrings("101010101010001"), -1, 'Test 32');
test(minimumBeautifulSubstrings("111011011001111"), -1, 'Test 33');
test(minimumBeautifulSubstrings("1011011011011011011"), 7, 'Test 34');
test(minimumBeautifulSubstrings("100000000000001"), -1, 'Test 35');
test(minimumBeautifulSubstrings("111000111000111"), -1, 'Test 36');
test(minimumBeautifulSubstrings("10000000000000"), -1, 'Test 37');
test(minimumBeautifulSubstrings("1001101"), -1, 'Test 38');
test(minimumBeautifulSubstrings("00110011001100110011001100110011001"), -1, 'Test 39');
test(minimumBeautifulSubstrings("110101011010101"), -1, 'Test 40');
test(minimumBeautifulSubstrings("111101111"), 7, 'Test 41');
test(minimumBeautifulSubstrings("1111111111111111111111111111111111111"), 37, 'Test 42');
test(minimumBeautifulSubstrings("101010101010101010101"), -1, 'Test 43');
test(minimumBeautifulSubstrings("1010101010"), -1, 'Test 44');
test(minimumBeautifulSubstrings("1100011"), -1, 'Test 45');
test(minimumBeautifulSubstrings("111111111111111111111"), 21, 'Test 46');
test(minimumBeautifulSubstrings("11010110101101101"), -1, 'Test 47');
test(minimumBeautifulSubstrings("10001000100010001000100010001"), -1, 'Test 48');
test(minimumBeautifulSubstrings("11000011000011000011"), -1, 'Test 49');
test(minimumBeautifulSubstrings("1010101010101010"), -1, 'Test 50');
test(minimumBeautifulSubstrings("11010101101"), -1, 'Test 51');
test(minimumBeautifulSubstrings("110011001100110011"), -1, 'Test 52');
test(minimumBeautifulSubstrings("10100001001"), -1, 'Test 53');
test(minimumBeautifulSubstrings("1111100000001"), -1, 'Test 54');
test(minimumBeautifulSubstrings("1011101110111011101110111011101"), 15, 'Test 55');
test(minimumBeautifulSubstrings("11111111111111101"), 11, 'Test 56');
test(minimumBeautifulSubstrings("111110111110111"), 7, 'Test 57');
test(minimumBeautifulSubstrings("010001"), -1, 'Test 58');
test(minimumBeautifulSubstrings("110011"), 2, 'Test 59');
test(minimumBeautifulSubstrings("10000000000000000"), -1, 'Test 60');
test(minimumBeautifulSubstrings("11110000111100001111"), -1, 'Test 61');
test(minimumBeautifulSubstrings("10011101"), -1, 'Test 62');
test(minimumBeautifulSubstrings("100100100100100"), -1, 'Test 63');
test(minimumBeautifulSubstrings("11111111111111111111111"), 23, 'Test 64');
test(minimumBeautifulSubstrings("1111111111111111111111111111111"), 31, 'Test 65');
test(minimumBeautifulSubstrings("11111111111111111111111111111111111"), 35, 'Test 66');
test(minimumBeautifulSubstrings("1011101"), 3, 'Test 67');
test(minimumBeautifulSubstrings("11001100110011001"), -1, 'Test 68');
test(minimumBeautifulSubstrings("111001110011100"), -1, 'Test 69');
test(minimumBeautifulSubstrings("1111111111111111"), 16, 'Test 70');
test(minimumBeautifulSubstrings("11101110111011101"), 9, 'Test 71');
test(minimumBeautifulSubstrings("110011001100110"), -1, 'Test 72');
test(minimumBeautifulSubstrings("10101010101010101010101010101010101"), -1, 'Test 73');
test(minimumBeautifulSubstrings("11111100111"), 7, 'Test 74');
test(minimumBeautifulSubstrings("101010101010101010101010101010101010101"), -1, 'Test 75');
test(minimumBeautifulSubstrings("1111101111101"), 5, 'Test 76');
test(minimumBeautifulSubstrings("010101010101010101010101010101"), -1, 'Test 77');
test(minimumBeautifulSubstrings("11100111001110011"), 5, 'Test 78');
test(minimumBeautifulSubstrings("1010010101010"), -1, 'Test 79');
test(minimumBeautifulSubstrings("11111111111111011"), 11, 'Test 80');
test(minimumBeautifulSubstrings("11010110111"), -1, 'Test 81');
test(minimumBeautifulSubstrings("11001101"), 2, 'Test 82');
test(minimumBeautifulSubstrings("101101001"), -1, 'Test 83');
test(minimumBeautifulSubstrings("100100010010001"), -1, 'Test 84');
test(minimumBeautifulSubstrings("111100001111"), -1, 'Test 85');
test(minimumBeautifulSubstrings("110010"), -1, 'Test 86');
test(minimumBeautifulSubstrings("1001001"), -1, 'Test 87');
test(minimumBeautifulSubstrings("100110010011001"), -1, 'Test 88');
test(minimumBeautifulSubstrings("1100110011001100110"), -1, 'Test 89');
test(minimumBeautifulSubstrings("1100100110001"), -1, 'Test 90');
test(minimumBeautifulSubstrings("1000000000000"), -1, 'Test 91');
test(minimumBeautifulSubstrings("1111100111"), 6, 'Test 92');
test(minimumBeautifulSubstrings("111111111111110"), -1, 'Test 93');
test(minimumBeautifulSubstrings("111011101110111"), 9, 'Test 94');
test(minimumBeautifulSubstrings("1011101110111011101110111"), 13, 'Test 95');
test(minimumBeautifulSubstrings("1111111111111111111111111"), 25, 'Test 96');
test(minimumBeautifulSubstrings("000000000000000"), -1, 'Test 97');
test(minimumBeautifulSubstrings("11010101010"), -1, 'Test 98');
test(minimumBeautifulSubstrings("111111111111111111111111111111111"), 33, 'Test 99');
test(minimumBeautifulSubstrings("1111111111111"), 13, 'Test 100');
test(minimumBeautifulSubstrings("111110111100001"), -1, 'Test 101');
test(minimumBeautifulSubstrings("1111000011110000111"), -1, 'Test 102');
test(minimumBeautifulSubstrings("10000100001"), -1, 'Test 103');
test(minimumBeautifulSubstrings("11101001101"), -1, 'Test 104');
test(minimumBeautifulSubstrings("0101010101"), -1, 'Test 105');
test(minimumBeautifulSubstrings("11001001001001001"), -1, 'Test 106');
test(minimumBeautifulSubstrings("11001000110101"), -1, 'Test 107');
test(minimumBeautifulSubstrings("111111111111111111111111111111111111111"), 39, 'Test 108');
test(minimumBeautifulSubstrings("10101010101010101"), -1, 'Test 109');
test(minimumBeautifulSubstrings("10110110110"), -1, 'Test 110');
test(minimumBeautifulSubstrings("11011011011"), 5, 'Test 111');
test(minimumBeautifulSubstrings("101010101010110"), -1, 'Test 112');
test(minimumBeautifulSubstrings("11111111101"), 5, 'Test 113');
test(minimumBeautifulSubstrings("101101101101101101"), 6, 'Test 114');
test(minimumBeautifulSubstrings("1010101010101"), -1, 'Test 115');
test(minimumBeautifulSubstrings("1100010000100"), -1, 'Test 116');
test(minimumBeautifulSubstrings("1110011100111"), 5, 'Test 117');
test(minimumBeautifulSubstrings("11111111101111111"), 11, 'Test 118');
test(minimumBeautifulSubstrings("1111100001"), -1, 'Test 119');
test(minimumBeautifulSubstrings("10011001"), -1, 'Test 120');
test(minimumBeautifulSubstrings("11111011111011111"), 9, 'Test 121');
test(minimumBeautifulSubstrings("110010111011101"), -1, 'Test 122');
test(minimumBeautifulSubstrings("110011101100111"), -1, 'Test 123');
test(minimumBeautifulSubstrings("111101110111011"), 9, 'Test 124');
test(minimumBeautifulSubstrings("1100110011001100110011001100110"), -1, 'Test 125');
test(minimumBeautifulSubstrings("1001001001001"), -1, 'Test 126');
test(minimumBeautifulSubstrings("11111111111"), 11, 'Test 127');
test(minimumBeautifulSubstrings("100101010100101"), -1, 'Test 128');
test(minimumBeautifulSubstrings("101111111111111"), 13, 'Test 129');
test(minimumBeautifulSubstrings("111100001111000"), -1, 'Test 130');
test(minimumBeautifulSubstrings("1100110011001100110011"), -1, 'Test 131');
test(minimumBeautifulSubstrings("111111000111111"), -1, 'Test 132');
test(minimumBeautifulSubstrings("1010101010101011"), -1, 'Test 133');
test(minimumBeautifulSubstrings("1111101"), 1, 'Test 134');
test(minimumBeautifulSubstrings("11011011011011011"), 7, 'Test 135');
test(minimumBeautifulSubstrings("000000"), -1, 'Test 136');
test(minimumBeautifulSubstrings("100100001001000100"), -1, 'Test 137');
test(minimumBeautifulSubstrings("111111000000111"), -1, 'Test 138');
test(minimumBeautifulSubstrings("10001000100010001"), -1, 'Test 139');
test(minimumBeautifulSubstrings("110110110110110"), -1, 'Test 140');
test(minimumBeautifulSubstrings("111111111111111111111111111"), 27, 'Test 141');
test(minimumBeautifulSubstrings("1000000000001"), -1, 'Test 142');
test(minimumBeautifulSubstrings("0000000000000000000000"), -1, 'Test 143');
test(minimumBeautifulSubstrings("110010111"), -1, 'Test 144');
test(minimumBeautifulSubstrings("1010010001101010"), -1, 'Test 145');
test(minimumBeautifulSubstrings("11001100110011001100110011"), -1, 'Test 146');
test(minimumBeautifulSubstrings("100000100000100"), -1, 'Test 147');
test(minimumBeautifulSubstrings("1001110001"), 1, 'Test 148');

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
