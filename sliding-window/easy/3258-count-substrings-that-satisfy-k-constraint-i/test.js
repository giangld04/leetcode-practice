// Test: 3258. Count Substrings That Satisfy K Constraint I
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { countKConstraintSubstrings } = require("./solution");

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

console.log("\n3258. Count Substrings That Satisfy K Constraint I\n");

test(countKConstraintSubstrings("0101010101", 5), 55, 'Test 1');
test(countKConstraintSubstrings("11111", 1), 15, 'Test 2');
test(countKConstraintSubstrings("00000", 2), 15, 'Test 3');
test(countKConstraintSubstrings("101010101010", 4), 72, 'Test 4');
test(countKConstraintSubstrings("100100100", 3), 45, 'Test 5');
test(countKConstraintSubstrings("1100110011", 1), 27, 'Test 6');
test(countKConstraintSubstrings("1111000011110000", 4), 120, 'Test 7');
test(countKConstraintSubstrings("0000111100001111", 3), 91, 'Test 8');
test(countKConstraintSubstrings("110011", 2), 21, 'Test 9');
test(countKConstraintSubstrings("111000111", 3), 45, 'Test 10');
test(countKConstraintSubstrings("111000111000", 2), 50, 'Test 11');
test(countKConstraintSubstrings("010101010101", 3), 63, 'Test 12');
test(countKConstraintSubstrings("10101", 1), 12, 'Test 13');
test(countKConstraintSubstrings("11110000", 2), 32, 'Test 14');
test(countKConstraintSubstrings("1010101", 2), 25, 'Test 15');
test(countKConstraintSubstrings("1100110011", 3), 49, 'Test 16');
test(countKConstraintSubstrings("000000000000000000000000000000", 1), 465, 'Test 17');
test(countKConstraintSubstrings("010101010101010101010101010101", 1), 87, 'Test 18');
test(countKConstraintSubstrings("110011001100110011", 5), 143, 'Test 19');
test(countKConstraintSubstrings("110000110000110000110000110000110000110000110000", 5), 626, 'Test 20');
test(countKConstraintSubstrings("10101010101010101010101010101010", 3), 203, 'Test 21');
test(countKConstraintSubstrings("10010010010010010010010010010010010010010010", 3), 394, 'Test 22');
test(countKConstraintSubstrings("1111000011110000111100001111000011110000", 3), 259, 'Test 23');
test(countKConstraintSubstrings("001100110011001100110011001100110011001100", 2), 219, 'Test 24');
test(countKConstraintSubstrings("00000000000000000000000000000000", 1), 528, 'Test 25');
test(countKConstraintSubstrings("01101101101101101101101101101101101101101101101101", 6), 778, 'Test 26');
test(countKConstraintSubstrings("000000000000000000001111111111111111", 4), 474, 'Test 27');
test(countKConstraintSubstrings("00000000000000000000000000000000000000000000", 2), 990, 'Test 28');
test(countKConstraintSubstrings("101010101010101010101010101010", 1), 87, 'Test 29');
test(countKConstraintSubstrings("000000000000000000000000000000000000000000000000", 1), 1176, 'Test 30');
test(countKConstraintSubstrings("000000000000000000000000000000", 3), 465, 'Test 31');
test(countKConstraintSubstrings("111111111111111111111111111111", 2), 465, 'Test 32');
test(countKConstraintSubstrings("11111011111011111011111011111011111", 3), 522, 'Test 33');
test(countKConstraintSubstrings("100100100100100100100", 5), 216, 'Test 34');
test(countKConstraintSubstrings("1100101100101100101100", 4), 166, 'Test 35');
test(countKConstraintSubstrings("10101010101010101010101010101010101010101010", 1), 129, 'Test 36');
test(countKConstraintSubstrings("1010101010101010101010101010101010101010101010", 5), 451, 'Test 37');
test(countKConstraintSubstrings("111110000111110000111110000111110000111110000", 4), 429, 'Test 38');
test(countKConstraintSubstrings("110010101011001100101011", 4), 183, 'Test 39');
test(countKConstraintSubstrings("1111111111000000000000000000", 2), 278, 'Test 40');
test(countKConstraintSubstrings("01001001001001001001", 3), 154, 'Test 41');
test(countKConstraintSubstrings("111111111111111111111", 2), 231, 'Test 42');
test(countKConstraintSubstrings("10101010101010101010101010101010", 6), 338, 'Test 43');
test(countKConstraintSubstrings("11001100110011001100", 4), 150, 'Test 44');
test(countKConstraintSubstrings("01010101010101010101010101", 5), 231, 'Test 45');
test(countKConstraintSubstrings("00001111000011110000111100001111000011110000", 2), 239, 'Test 46');
test(countKConstraintSubstrings("100100100100100100100100100100", 2), 189, 'Test 47');
test(countKConstraintSubstrings("0110110110110110110110110110110110110110110110", 7), 780, 'Test 48');
test(countKConstraintSubstrings("110011001100110011001100110011001100", 6), 402, 'Test 49');
test(countKConstraintSubstrings("111100001111000011110000111100", 3), 189, 'Test 50');
test(countKConstraintSubstrings("01010101010101010101010101010101010101010101", 3), 287, 'Test 51');
test(countKConstraintSubstrings("11110000111100001111000011110000111100001111000011110000", 3), 371, 'Test 52');
test(countKConstraintSubstrings("0000000001111111100000000111111110000000011111111", 5), 545, 'Test 53');
test(countKConstraintSubstrings("10101010101010101010101010101010101010101010101010101010", 7), 735, 'Test 54');
test(countKConstraintSubstrings("110010101010010101101010", 5), 214, 'Test 55');
test(countKConstraintSubstrings("00000000000000000000000000000000000000000000", 5), 990, 'Test 56');
test(countKConstraintSubstrings("01010101010101010101010101010101", 5), 297, 'Test 57');
test(countKConstraintSubstrings("10010010010010010010010010010010", 3), 274, 'Test 58');
test(countKConstraintSubstrings("111111111111111111111111111111111111111111", 4), 903, 'Test 59');
test(countKConstraintSubstrings("11111111111111111111111111111111", 1), 528, 'Test 60');
test(countKConstraintSubstrings("0101010101010101010101010101010101010101010101", 6), 520, 'Test 61');
test(countKConstraintSubstrings("10101010101010101010101010101010101010101010", 3), 287, 'Test 62');
test(countKConstraintSubstrings("000000000000000000000000001111111111", 3), 505, 'Test 63');
test(countKConstraintSubstrings("1101101101101101101101101101110110110110110110", 5), 633, 'Test 64');
test(countKConstraintSubstrings("010101010101010101010101010101010101010101", 3), 273, 'Test 65');
test(countKConstraintSubstrings("11100011100011100011100011100011100011100011", 3), 324, 'Test 66');
test(countKConstraintSubstrings("11111111111111111111", 2), 210, 'Test 67');
test(countKConstraintSubstrings("11110000111100001111000011110000", 4), 288, 'Test 68');
test(countKConstraintSubstrings("10101010101010101010", 5), 165, 'Test 69');
test(countKConstraintSubstrings("11111111111111111111111111111111111111111111", 5), 990, 'Test 70');
test(countKConstraintSubstrings("00110011001100110011001100110011", 2), 164, 'Test 71');
test(countKConstraintSubstrings("1111100000111110000011111000001111100000", 2), 238, 'Test 72');
test(countKConstraintSubstrings("0011100111001110011100111001110011100111001110011100111", 4), 559, 'Test 73');
test(countKConstraintSubstrings("00000000000000000000000000000000000000000000000000000000", 20), 1596, 'Test 74');
test(countKConstraintSubstrings("1100110011001100110011001100110011001100110011", 5), 451, 'Test 75');
test(countKConstraintSubstrings("1001001001001001001001001001001001001001001001", 6), 702, 'Test 76');
test(countKConstraintSubstrings("1111111111111111111111111111111111111111111111", 2), 1081, 'Test 77');
test(countKConstraintSubstrings("1111111111111111111111111111111111111111111111111111", 1), 1378, 'Test 78');
test(countKConstraintSubstrings("10101010101010101010101010101010101010101010", 7), 555, 'Test 79');
test(countKConstraintSubstrings("101010101010101010101010101010101010101010101010101010101010101010", 3), 441, 'Test 80');
test(countKConstraintSubstrings("010101010101010101010101010101010101010101010101", 25), 1176, 'Test 81');
test(countKConstraintSubstrings("00011100011100011100011100011100", 3), 228, 'Test 82');
test(countKConstraintSubstrings("000011110000111100001111000011", 4), 265, 'Test 83');
test(countKConstraintSubstrings("000111100011110001111000111100011110001111", 3), 323, 'Test 84');
test(countKConstraintSubstrings("01101101101101101101101101101101", 4), 337, 'Test 85');
test(countKConstraintSubstrings("11100011100011100011100011100011100011100011", 4), 383, 'Test 86');
test(countKConstraintSubstrings("110011001100110011001100110011001100110011", 2), 219, 'Test 87');
test(countKConstraintSubstrings("110011001100110011", 4), 131, 'Test 88');
test(countKConstraintSubstrings("11001001001010101010101010101010101010101010101010101010101010101010", 7), 928, 'Test 89');
test(countKConstraintSubstrings("01010101010101010101", 5), 165, 'Test 90');
test(countKConstraintSubstrings("1111111111111111111111111111111111111111111111111111111", 10), 1540, 'Test 91');
test(countKConstraintSubstrings("000000000000000000000000000000000000000000", 4), 903, 'Test 92');
test(countKConstraintSubstrings("01100110011001100110011001100110", 4), 263, 'Test 93');
test(countKConstraintSubstrings("11111111111111111111111111111111111111111111", 1), 990, 'Test 94');
test(countKConstraintSubstrings("1001001001001001001001001001001001001001001001001001001001001001", 5), 903, 'Test 95');
test(countKConstraintSubstrings("10101010101010101010101010101010101010101010", 5), 429, 'Test 96');
test(countKConstraintSubstrings("1001100110011001100110011001100110011001100110011001", 6), 617, 'Test 97');
test(countKConstraintSubstrings("111100001111000011110000111100001111000011", 4), 391, 'Test 98');
test(countKConstraintSubstrings("11111111111111111111111111111111111111111111", 10), 990, 'Test 99');
test(countKConstraintSubstrings("01010101010101010101010101010101010101010101", 2), 210, 'Test 100');
test(countKConstraintSubstrings("11110000111100001111000011110000111100001111", 2), 239, 'Test 101');
test(countKConstraintSubstrings("00000000000000000000000000000000000000000000", 10), 990, 'Test 102');
test(countKConstraintSubstrings("01010101010101010101010101010101010101010101", 5), 429, 'Test 103');
test(countKConstraintSubstrings("0011001100110011001100110011001100110011001100", 4), 397, 'Test 104');
test(countKConstraintSubstrings("00000000000000000000", 2), 210, 'Test 105');
test(countKConstraintSubstrings("111000111000111000111000111000111000111000111", 4), 393, 'Test 106');
test(countKConstraintSubstrings("10101010101010101010101010101010101010101010101010", 2), 240, 'Test 107');
test(countKConstraintSubstrings("01101101101101101101101101101101101101101101", 4), 493, 'Test 108');
test(countKConstraintSubstrings("011011011011011011011011011011", 4), 312, 'Test 109');
test(countKConstraintSubstrings("0000000000000000000000000000000000000000000000000000", 2), 1378, 'Test 110');
test(countKConstraintSubstrings("0000000000000000000000000000000000000000000000", 3), 1081, 'Test 111');
test(countKConstraintSubstrings("11001100110011001100110011001100", 6), 348, 'Test 112');
test(countKConstraintSubstrings("00000000000000000000000000000000000000000000", 1), 990, 'Test 113');
test(countKConstraintSubstrings("11110000111100001111000011110000", 3), 203, 'Test 114');
test(countKConstraintSubstrings("010101010101010101010101010101", 5), 275, 'Test 115');

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
