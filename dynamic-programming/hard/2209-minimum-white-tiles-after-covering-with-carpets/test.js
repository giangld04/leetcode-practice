// Test: 2209. Minimum White Tiles After Covering With Carpets
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { minimumWhiteTiles } = require("./solution");

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

console.log("\n2209. Minimum White Tiles After Covering With Carpets\n");

test(minimumWhiteTiles("111100001111", 4, 4), 0, 'Test 1');
test(minimumWhiteTiles("110011", 3, 2), 0, 'Test 2');
test(minimumWhiteTiles("11111", 2, 3), 0, 'Test 3');
test(minimumWhiteTiles("1010101010", 5, 1), 0, 'Test 4');
test(minimumWhiteTiles("11001100", 3, 2), 0, 'Test 5');
test(minimumWhiteTiles("11010110", 3, 1), 2, 'Test 6');
test(minimumWhiteTiles("10110101", 2, 2), 2, 'Test 7');
test(minimumWhiteTiles("1110111", 1, 4), 3, 'Test 8');
test(minimumWhiteTiles("111000111", 2, 4), 0, 'Test 9');
test(minimumWhiteTiles("00000", 1, 1), 0, 'Test 10');
test(minimumWhiteTiles("00000", 1, 2), 0, 'Test 11');
test(minimumWhiteTiles("1111001111001111001111001111001111001111001111001111001111", 12, 5), 0, 'Test 12');
test(minimumWhiteTiles("110011001100110011001100110011001100110011001100", 5, 3), 14, 'Test 13');
test(minimumWhiteTiles("10101010101010101010101010101010101010101010", 20, 5), 0, 'Test 14');
test(minimumWhiteTiles("110011001100110011001100110011001100110011001100", 15, 4), 0, 'Test 15');
test(minimumWhiteTiles("010101010101010101010101010101010101010101010101", 10, 5), 0, 'Test 16');
test(minimumWhiteTiles("111101010101010101010101010101010101010101", 10, 7), 0, 'Test 17');
test(minimumWhiteTiles("110001001001001001001001001001001001001001001001", 20, 4), 0, 'Test 18');
test(minimumWhiteTiles("1010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010", 20, 5), 0, 'Test 19');
test(minimumWhiteTiles("1111000011110000111100001111", 6, 4), 0, 'Test 20');
test(minimumWhiteTiles("0000000000000000000000000000", 10, 10), 0, 'Test 21');
test(minimumWhiteTiles("11111111111111111111111111111111111111", 1000, 1), 0, 'Test 22');
test(minimumWhiteTiles("11111000001111111100", 4, 4), 0, 'Test 23');
test(minimumWhiteTiles("11110111101111011110111101", 10, 2), 1, 'Test 24');
test(minimumWhiteTiles("010101010101010101010101010101010101010101010101", 18, 7), 0, 'Test 25');
test(minimumWhiteTiles("101010101010101010101010101010101010101010101010", 25, 2), 0, 'Test 26');
test(minimumWhiteTiles("10000000000000000000000000", 1, 10), 0, 'Test 27');
test(minimumWhiteTiles("11100011111000111000", 5, 4), 0, 'Test 28');
test(minimumWhiteTiles("111111111111111111111111111111111111111111111111", 10, 5), 0, 'Test 29');
test(minimumWhiteTiles("10101010101010101010101010101010101010101010101010", 15, 4), 0, 'Test 30');
test(minimumWhiteTiles("10001000100010001000100010001000100010001000100010001000100010001000100010001000100010001000", 25, 8), 0, 'Test 31');
test(minimumWhiteTiles("00001111000011110000111100001111", 12, 4), 0, 'Test 32');
test(minimumWhiteTiles("1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", 50, 10), 0, 'Test 33');
test(minimumWhiteTiles("0000000000000000000000000000000000000000", 20, 5), 0, 'Test 34');
test(minimumWhiteTiles("1010101010101010101010101010101010101010101010101010", 10, 2), 16, 'Test 35');
test(minimumWhiteTiles("10010010010010010010010010010010010010", 10, 3), 3, 'Test 36');
test(minimumWhiteTiles("01010101010101010101", 5, 4), 0, 'Test 37');
test(minimumWhiteTiles("0001111111000111111000111111", 6, 5), 0, 'Test 38');
test(minimumWhiteTiles("01010101010101010101010101010101010101", 8, 2), 11, 'Test 39');
test(minimumWhiteTiles("11111000011111000011111000011111", 4, 5), 0, 'Test 40');
test(minimumWhiteTiles("11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", 100, 10), 0, 'Test 41');
test(minimumWhiteTiles("0101010101010101010101010101", 10, 3), 0, 'Test 42');
test(minimumWhiteTiles("11100011100011100011", 6, 3), 0, 'Test 43');
test(minimumWhiteTiles("11111111111111111111", 3, 5), 5, 'Test 44');
test(minimumWhiteTiles("111111000011111100001111110000111111", 8, 5), 0, 'Test 45');
test(minimumWhiteTiles("1111111111111111111111111111111111111111", 16, 10), 0, 'Test 46');
test(minimumWhiteTiles("1010101010101010101010101010101010101010101010101010101010101010", 20, 6), 0, 'Test 47');
test(minimumWhiteTiles("11001100110011001100110011001100", 8, 2), 0, 'Test 48');
test(minimumWhiteTiles("00100100100100100100100100", 10, 3), 0, 'Test 49');
test(minimumWhiteTiles("11111111111111111111111111", 15, 2), 0, 'Test 50');
test(minimumWhiteTiles("1111011011111100001101110111", 5, 6), 0, 'Test 51');
test(minimumWhiteTiles("111111111111111111111111111111111111111111111111", 50, 1), 0, 'Test 52');
test(minimumWhiteTiles("110011001100110011001100110011001100110011001100110011001100110011001100110011001100110011001100110011001100", 15, 4), 24, 'Test 53');
test(minimumWhiteTiles("11101110111011101110111011", 7, 4), 0, 'Test 54');
test(minimumWhiteTiles("101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010", 15, 4), 18, 'Test 55');
test(minimumWhiteTiles("100110011001100110011001100110011001", 8, 4), 2, 'Test 56');
test(minimumWhiteTiles("10101010101010101010101010101010", 7, 4), 2, 'Test 57');
test(minimumWhiteTiles("1111000011110000111100001111000011110000111100001111000011110000111100001111000011110000", 10, 7), 4, 'Test 58');
test(minimumWhiteTiles("111100001111000011110000111100001111000011110000", 5, 4), 4, 'Test 59');
test(minimumWhiteTiles("11111111111111111111111111", 10, 6), 0, 'Test 60');
test(minimumWhiteTiles("10001000100010001000100010001000", 9, 3), 0, 'Test 61');
test(minimumWhiteTiles("111000111000111000111000111000111000", 10, 2), 2, 'Test 62');
test(minimumWhiteTiles("111111000000111111000000111111000000111111000000111111", 15, 7), 0, 'Test 63');
test(minimumWhiteTiles("111111111111111111111111111111111111", 10, 7), 0, 'Test 64');
test(minimumWhiteTiles("11111111111111111111111111111111", 5, 5), 7, 'Test 65');
test(minimumWhiteTiles("01010101010101010101010101", 10, 5), 0, 'Test 66');
test(minimumWhiteTiles("1010101010101010101010101010101010101010101010101010101010101010", 30, 4), 0, 'Test 67');
test(minimumWhiteTiles("1010101010101010101010101010", 10, 5), 0, 'Test 68');
test(minimumWhiteTiles("01010101010101010101", 3, 2), 7, 'Test 69');
test(minimumWhiteTiles("11111111111111111111", 5, 5), 0, 'Test 70');
test(minimumWhiteTiles("1111000011110000111100001111000011110000111100001111000011110000111100001111000011110000", 30, 5), 0, 'Test 71');
test(minimumWhiteTiles("11110000111100001111", 4, 5), 0, 'Test 72');
test(minimumWhiteTiles("1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", 50, 12), 0, 'Test 73');
test(minimumWhiteTiles("10101010101010101010101010", 15, 2), 0, 'Test 74');
test(minimumWhiteTiles("11010101010101010101", 5, 3), 1, 'Test 75');
test(minimumWhiteTiles("11101110111011101110111011101110", 10, 2), 6, 'Test 76');
test(minimumWhiteTiles("000000000000000000000000000000000000000000000000", 10, 15), 0, 'Test 77');
test(minimumWhiteTiles("11111111111111111111111111111111", 15, 5), 0, 'Test 78');
test(minimumWhiteTiles("111111111111111111111111111111111111111111111111", 25, 10), 0, 'Test 79');
test(minimumWhiteTiles("11111111000000001111111100000000", 3, 8), 0, 'Test 80');
test(minimumWhiteTiles("0000000000000000000000000000000000000000000000000000", 1, 1000), 0, 'Test 81');
test(minimumWhiteTiles("110110110110110110110110110110110110110110110110", 12, 6), 0, 'Test 82');
test(minimumWhiteTiles("1111000011110000111100001111000011110000111100001111", 10, 8), 0, 'Test 83');
test(minimumWhiteTiles("01010101010101010101010101010101010101010101", 4, 7), 6, 'Test 84');
test(minimumWhiteTiles("1111111111111111111111111111", 15, 4), 0, 'Test 85');
test(minimumWhiteTiles("11111111111111111111", 6, 5), 0, 'Test 86');
test(minimumWhiteTiles("111111111100000000000000111111111111111111111111", 5, 10), 0, 'Test 87');
test(minimumWhiteTiles("100100100100100100100100100100100100100100100100100100100100100100100100100100100100100100100100", 20, 6), 0, 'Test 88');
test(minimumWhiteTiles("1111100000111110000011111", 3, 6), 0, 'Test 89');
test(minimumWhiteTiles("01010101010101010101010101010101", 10, 3), 0, 'Test 90');
test(minimumWhiteTiles("11110111101111011110", 5, 3), 2, 'Test 91');
test(minimumWhiteTiles("00101010101010101010", 5, 3), 0, 'Test 92');
test(minimumWhiteTiles("11111111111111111111", 10, 2), 0, 'Test 93');
test(minimumWhiteTiles("111000111000111000111000111000111", 8, 4), 0, 'Test 94');
test(minimumWhiteTiles("10101010101010101010", 5, 3), 0, 'Test 95');
test(minimumWhiteTiles("00000000000000000000000000000000000000", 1000, 1000), 0, 'Test 96');
test(minimumWhiteTiles("11110000111100001111000011110000", 6, 4), 0, 'Test 97');
test(minimumWhiteTiles("10101010101010101010101010101010101010101010101010101010101010101010101010101010", 20, 5), 0, 'Test 98');
test(minimumWhiteTiles("111000111000111000111", 4, 3), 0, 'Test 99');
test(minimumWhiteTiles("10101010101010101010", 3, 4), 4, 'Test 100');
test(minimumWhiteTiles("000000000000000000000000000000000000000000000000", 10, 3), 0, 'Test 101');
test(minimumWhiteTiles("1001001001001001001001001", 7, 4), 0, 'Test 102');
test(minimumWhiteTiles("01010101010101010101010101010101010101010101010101010101010", 25, 3), 0, 'Test 103');
test(minimumWhiteTiles("11111111111111111111", 5, 3), 5, 'Test 104');
test(minimumWhiteTiles("101010101010101010101010101010101010", 15, 6), 0, 'Test 105');
test(minimumWhiteTiles("111101110111011101110111011101110111", 5, 4), 12, 'Test 106');
test(minimumWhiteTiles("1010101010101010101010101010", 8, 3), 0, 'Test 107');
test(minimumWhiteTiles("000101001010100110010010001000101010010101010101", 15, 3), 0, 'Test 108');
test(minimumWhiteTiles("11001100110011001100", 8, 3), 0, 'Test 109');
test(minimumWhiteTiles("1110111011101110111011101110111011101110111011101110111011101110", 8, 3), 24, 'Test 110');

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
