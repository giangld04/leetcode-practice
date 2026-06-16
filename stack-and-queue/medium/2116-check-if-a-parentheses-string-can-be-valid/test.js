// Test: 2116. Check If A Parentheses String Can Be Valid
// 126 test cases from LeetCodeDataset
// Run: node test.js

const { canBeValid } = require("./solution");

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

console.log("\n2116. Check If A Parentheses String Can Be Valid\n");

test(canBeValid("[[[[]][[[[]]", "111111010111"), true, 'Test 1');
test(canBeValid("[]]][]", "010100"), true, 'Test 2');
test(canBeValid("[][]", "0000"), true, 'Test 3');
test(canBeValid("[]]][]]]", "010100"), Error: string index out of range, 'Test 4');
test(canBeValid("]", "0"), false, 'Test 5');
test(canBeValid("[][][][][][][][]", "0000000000000000"), true, 'Test 6');
test(canBeValid("][][[][][[][][][]]", "10010101010101"), false, 'Test 7');
test(canBeValid("[[[[[[[[[[[[[]]]]]]]]][]][[[[]]]]]]", "1111111111111100000000001000001001"), false, 'Test 8');
test(canBeValid("[[][][][][]]", "0101010101"), Error: string index out of range, 'Test 9');
test(canBeValid("[][[[[[[[]]]]]]]", "00111111111100"), Error: string index out of range, 'Test 10');
test(canBeValid("[[[[[[]]]]]]", "000000000000"), true, 'Test 11');
test(canBeValid("[[[[[]]]]]]]", "000111000111"), true, 'Test 12');
test(canBeValid("[[][]]", "100101"), true, 'Test 13');
test(canBeValid("][[[[[[][][][][[]]]]]]", "10000100100001000010"), false, 'Test 14');
test(canBeValid("[[[][][[]]]", "10000000000"), false, 'Test 15');
test(canBeValid("[[[[]]]][][]", "000010000000"), true, 'Test 16');
test(canBeValid("[][[[]]][][[[]]]", "0011110000111100"), true, 'Test 17');
test(canBeValid("[]]][[[[]]]", "010011100"), false, 'Test 18');
test(canBeValid("[[][]]", "000000"), true, 'Test 19');
test(canBeValid("[[[[]]][[[[]]]", "010111110100"), Error: string index out of range, 'Test 20');
test(canBeValid("[][[]]][[][[]]]", "100101100101"), false, 'Test 21');
test(canBeValid("[[][[]]]", "00101000"), true, 'Test 22');
test(canBeValid("[[][[][[]]]][][][][]", "0100010000100000"), Error: string index out of range, 'Test 23');
test(canBeValid("[[][]][]", "010101"), Error: string index out of range, 'Test 24');
test(canBeValid("[[[[]]][[[]][]]]", "111111010110100100"), true, 'Test 25');
test(canBeValid("[[]]][[]", "110010"), Error: string index out of range, 'Test 26');
test(canBeValid("[[[][][[]]]]", "010000101001"), true, 'Test 27');
test(canBeValid("[][[][[]]]", "01100110"), Error: string index out of range, 'Test 28');
test(canBeValid("[[[[[[[]]]]]", "000000000001"), true, 'Test 29');
test(canBeValid("[[][][[]]]", "01100100"), Error: string index out of range, 'Test 30');
test(canBeValid("[[[[[[[]]]]]]][]", "11111111111100"), Error: string index out of range, 'Test 31');
test(canBeValid("[[]]][", "101010"), true, 'Test 32');
test(canBeValid("[[[[[[[[[[[[[]]]]]]]]]]]", "111111111111110000000000"), false, 'Test 33');
test(canBeValid("[[[[[[]]]][][]]", "010010000001000"), false, 'Test 34');
test(canBeValid("[[[]]][[]]", "10010100"), Error: string index out of range, 'Test 35');
test(canBeValid("[][[][[][[]]]", "010001000000"), false, 'Test 36');
test(canBeValid("[[[]][]]", "10010010"), true, 'Test 37');
test(canBeValid("[[][[][[]]]", "000000000"), false, 'Test 38');
test(canBeValid("[[[]][]][]", "001010000001"), true, 'Test 39');
test(canBeValid("[[[[[[[]]]]]]]", "111111111111"), Error: string index out of range, 'Test 40');
test(canBeValid("[[[[[]]]]][[[[[]]]]]", "11111111111111111111"), true, 'Test 41');
test(canBeValid("[[[[]]]]][][][][]", "11111100000"), false, 'Test 42');
test(canBeValid("[[[]][]]", "000000"), Error: string index out of range, 'Test 43');
test(canBeValid("[[[[[[]]]]][[[[]][]]]]", "1111111111110101010101010101"), true, 'Test 44');
test(canBeValid("[][][[][[]]]", "000001100100"), true, 'Test 45');
test(canBeValid("[[][][][[]]]", "1000000000"), Error: string index out of range, 'Test 46');
test(canBeValid("[[[[[[]]][[][[]]]]][][]", "1111110100101000001000"), false, 'Test 47');
test(canBeValid("[]][[[[]]]", "01100100"), false, 'Test 48');
test(canBeValid("[[][[][[][[]]]]]", "1010101010101010"), true, 'Test 49');
test(canBeValid("][[][[]]]", "0000000"), false, 'Test 50');
test(canBeValid("[[[[[[[]]]]]]]", "01010101010101"), true, 'Test 51');
test(canBeValid("[[[[]]]][[[[]]]]", "1111111111111111"), true, 'Test 52');
test(canBeValid("[]][[]", "001010"), true, 'Test 53');
test(canBeValid("[[]]][[]", "110110"), Error: string index out of range, 'Test 54');
test(canBeValid("[[[][]][]]", "10010010"), Error: string index out of range, 'Test 55');
test(canBeValid("[[[[]]]]", "11111111"), true, 'Test 56');
test(canBeValid("[[[]]]", "000000"), true, 'Test 57');
test(canBeValid("][[[[[[][[]]][]][[[[]]]]]", "11100101001001001001"), false, 'Test 58');
test(canBeValid("][[[][[]]]", "01010011"), Error: string index out of range, 'Test 59');
test(canBeValid("[[][[]]]", "000100"), Error: string index out of range, 'Test 60');
test(canBeValid("[[][][[]]]", "10101010"), Error: string index out of range, 'Test 61');
test(canBeValid("[][][][][][]", "000000"), Error: string index out of range, 'Test 62');
test(canBeValid("[[[]][][[]]]", "110101001101"), true, 'Test 63');
test(canBeValid("[[[[[[]]]]]]", "111111100001"), true, 'Test 64');
test(canBeValid("[[][[][[][[][[]]]]]", "01001010100010"), false, 'Test 65');
test(canBeValid("[[[]][][[]]]", "101010101010"), true, 'Test 66');
test(canBeValid("[[[[[[[[[]]]]]]]", "000000000000000001"), true, 'Test 67');
test(canBeValid("[[[][[]]]]", "110100110110"), true, 'Test 68');
test(canBeValid("[[][[][[]]][[][[]]]", "01010101010101"), false, 'Test 69');
test(canBeValid("[[[[[[[]]]]]", "1110000111"), Error: string index out of range, 'Test 70');
test(canBeValid("[[[[[[]]]]]]", "111100001111"), true, 'Test 71');
test(canBeValid("[[][]][[[]]]", "1000100000"), Error: string index out of range, 'Test 72');
test(canBeValid("[[[[[[[[]]]]]]]]", "0101010101010101"), true, 'Test 73');
test(canBeValid("[][][][]", "11111111"), true, 'Test 74');
test(canBeValid("[][][][][][][][][][][][][][][][][][][][][]", "0000000000000000000000000000"), Error: string index out of range, 'Test 75');
test(canBeValid("[[[[[]]]]][][]", "111111000000"), Error: string index out of range, 'Test 76');
test(canBeValid("[[[[[[]]][[][[]]][[]]][]]", "1111110100101010010010101001"), false, 'Test 77');
test(canBeValid("][[[[[][[]]]]]", "110001010010"), false, 'Test 78');
test(canBeValid("[[[[]]]]", "100100"), Error: string index out of range, 'Test 79');
test(canBeValid("[[[[[[[[[[]]][[]]]]]]]]]", "1111111111100010010000000000"), true, 'Test 80');
test(canBeValid("[[[[[]]]]]", "10000000"), Error: string index out of range, 'Test 81');
test(canBeValid("][][[][[]]][", "010101010100"), true, 'Test 82');
test(canBeValid("[][][][][][][][][][]", "00000000000000000000"), true, 'Test 83');
test(canBeValid("[[[[[[[]]]]]]]", "111111111110"), Error: string index out of range, 'Test 84');
test(canBeValid("[[][[]]][][]", "010100101000"), true, 'Test 85');
test(canBeValid("[[[[]]]]", "010010"), Error: string index out of range, 'Test 86');
test(canBeValid("[[[[][[]]][[][[]]]]]", "010101010101010101010101"), true, 'Test 87');
test(canBeValid("[[]]][[]]]", "100110010010"), true, 'Test 88');
test(canBeValid("][[]]][[][[]]]", "010101010101"), Error: string index out of range, 'Test 89');
test(canBeValid("[[][[]]][[[][[]]]]", "010010010010110010"), true, 'Test 90');
test(canBeValid("[[[[[]]]]]", "101010101010"), true, 'Test 91');
test(canBeValid("[[][[]]][]", "10001101"), Error: string index out of range, 'Test 92');
test(canBeValid("[][[][]]", "10010010"), true, 'Test 93');
test(canBeValid("[[][][][]]", "10101010"), Error: string index out of range, 'Test 94');
test(canBeValid("[[[[]]][[]]]", "1110001000"), Error: string index out of range, 'Test 95');
test(canBeValid("[[][]][[]]", "10101010"), Error: string index out of range, 'Test 96');
test(canBeValid("[[][[]]][[[]]]", "100000100000"), Error: string index out of range, 'Test 97');
test(canBeValid("[[]]][[]]][[]]]", "100110010010001100"), false, 'Test 98');
test(canBeValid("[[[[[]]]][[][][[][[]]]]", "1110000010010101010"), false, 'Test 99');
test(canBeValid("[[][]][[[]]]", "000000000000"), true, 'Test 100');
test(canBeValid("[[]]][[]]][[]]][[]]]", "100110010010001100100110"), true, 'Test 101');
test(canBeValid("[[][[]]][]", "10000000"), Error: string index out of range, 'Test 102');
test(canBeValid("[]][[]]][[[]]", "000010001000"), false, 'Test 103');
test(canBeValid("[][[][[]]]", "00000000"), Error: string index out of range, 'Test 104');
test(canBeValid("[[[]][][[]]]", "101001010100"), true, 'Test 105');
test(canBeValid("[[[[]]]]", "000111"), Error: string index out of range, 'Test 106');
test(canBeValid("[[[][[[]][]][[][[]]]]", "101010101010101010"), false, 'Test 107');
test(canBeValid("[][[[[][]]]][]", "0000100010000001"), true, 'Test 108');
test(canBeValid("[[][[][][[]]]]", "101010101010"), Error: string index out of range, 'Test 109');
test(canBeValid("[[]]][[]", "000110"), Error: string index out of range, 'Test 110');
test(canBeValid("[[[]][[]]]", "10000000"), Error: string index out of range, 'Test 111');
test(canBeValid("[[]]][[]]]", "010010100100"), true, 'Test 112');
test(canBeValid("][][][][][][][][][][][][][][][][][][][][][]", "100000000000000000000000000000"), false, 'Test 113');
test(canBeValid("[[[]][][[]]]", "000000000000"), true, 'Test 114');
test(canBeValid("[[][[[]]]", "1011001"), false, 'Test 115');
test(canBeValid("]]]]]]][[[[[[", "000000000000"), false, 'Test 116');
test(canBeValid("[][][][]", "00000000"), true, 'Test 117');
test(canBeValid("[[[[[[[]]]]]]]", "111111000000"), Error: string index out of range, 'Test 118');
test(canBeValid("[][][][]", "101010"), Error: string index out of range, 'Test 119');
test(canBeValid("[[[[[[]]]]]]", "011100111001"), true, 'Test 120');
test(canBeValid("[]][[[[]]]", "001101010110"), true, 'Test 121');
test(canBeValid("[][][][][][][][][][]", "0000000000"), Error: string index out of range, 'Test 122');
test(canBeValid("[[[[[[]][]]]]]", "111111111111"), Error: string index out of range, 'Test 123');
test(canBeValid("[[][]][][][]", "000000000000"), true, 'Test 124');
test(canBeValid("[[[]][[]]]", "10101010"), Error: string index out of range, 'Test 125');
test(canBeValid("][[][[][[]]]", "011001101001"), true, 'Test 126');

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
