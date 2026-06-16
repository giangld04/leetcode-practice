// Test: 190. Reverse Bits
// 44 test cases from LeetCodeDataset
// Run: node test.js

const { reverseBits } = require("./solution");

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

console.log("\n190. Reverse Bits\n");

test(reverseBits(0), 0, 'Test 1');
test(reverseBits(00000000000000000000000000000001), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 2');
test(reverseBits(11111111111111111111111111111111), 3817748707, 'Test 3');
test(reverseBits(00000000000000000000000000000000), 0, 'Test 4');
test(reverseBits(10000000000000000000000000000000), 1, 'Test 5');
test(reverseBits(2147483648), 1, 'Test 6');
test(reverseBits(00000010100101000001111010011100), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 7');
test(reverseBits(43261596), 964176192, 'Test 8');
test(reverseBits(4294967293), 3221225471, 'Test 9');
test(reverseBits(1), 2147483648, 'Test 10');
test(reverseBits(11111111111111111111111111111101), 3180214499, 'Test 11');
test(reverseBits(00010001000100010001000100010001), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 12');
test(reverseBits(00010010000100100001001000010010), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 13');
test(reverseBits(00110011001100110011001100110011), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 14');
test(reverseBits(10100101001010010100101001010010), 1524246408, 'Test 15');
test(reverseBits(01010101010101010101010101010101), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 16');
test(reverseBits(11110000111100001111000011110000), 242192076, 'Test 17');
test(reverseBits(01101001100001111000010110111001), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 18');
test(reverseBits(00000000000000001111111111111111), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 19');
test(reverseBits(01001001001001001001001001001001), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 20');
test(reverseBits(11110000000011111111000000001111), 3928946530, 'Test 21');
test(reverseBits(00000000111111110000000011111111), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 22');
test(reverseBits(00011110001111000111100011110001), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 23');
test(reverseBits(11111111111111110000000000000000), 57352, 'Test 24');
test(reverseBits(00010010001101000101011001111000), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 25');
test(reverseBits(11011011011011011011011011011011), 3280443572, 'Test 26');
test(reverseBits(10011100100001011011100110000110), 2012287233, 'Test 27');
test(reverseBits(00000000000000000000000000001111), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 28');
test(reverseBits(01010101001010100011001100110011), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 29');
test(reverseBits(11100000111000001110000011100000), 117259735, 'Test 30');
test(reverseBits(00001111111100000000111111110000), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 31');
test(reverseBits(11100001111000011110000111100001), 2248527424, 'Test 32');
test(reverseBits(00010010001100100100010101010111), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 33');
test(reverseBits(10010010010010010010010010010010), 1501692052, 'Test 34');
test(reverseBits(10101010101010100101010101010101), 2910733234, 'Test 35');
test(reverseBits(10101010101010101010101010101010), 1221553761, 'Test 36');
test(reverseBits(11111111000000001111111100000000), 15193787, 'Test 37');
test(reverseBits(11110000000000000000000000000000), 14, 'Test 38');
test(reverseBits(00001111000011110000111100001111), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 39');
test(reverseBits(01100110011001100110011001100110), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 40');
test(reverseBits(10001000100010001000100010001000), 373324907, 'Test 41');
test(reverseBits(01011010110101101011010110101101), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 42');
test(reverseBits(01010101010101011010101010101010), Error: Solution.reverseBits[] missing 1 required positional argument: 'n', 'Test 43');
test(reverseBits(11001100110011001100110011001100), 815197725, 'Test 44');

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
