// Test: 3352. Count K Reducible Numbers Less Than N
// 37 test cases from LeetCodeDataset
// Run: node test.js

const { countKReducibleNumbers } = require("./solution");

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

console.log("\n3352. Count K Reducible Numbers Less Than N\n");

test(countKReducibleNumbers("1101101", 4), 108, 'Test 1');
test(countKReducibleNumbers("1100100", 3), 99, 'Test 2');
test(countKReducibleNumbers("11001100", 4), 203, 'Test 3');
test(countKReducibleNumbers("11001001001001001001001001001001001001001001001001001001001001001", 4), 343683436, 'Test 4');
test(countKReducibleNumbers("111111111111111111111111111111111111111111111111111111111111111", 5), 291172002, 'Test 5');
test(countKReducibleNumbers("11111111", 5), 254, 'Test 6');
test(countKReducibleNumbers("1", 3), 0, 'Test 7');
test(countKReducibleNumbers("10000000", 5), 127, 'Test 8');
test(countKReducibleNumbers("101010", 3), 41, 'Test 9');
test(countKReducibleNumbers("111", 1), 3, 'Test 10');
test(countKReducibleNumbers("1111111111111111111111111111111111111111111111111111111111111111", 5), 582344006, 'Test 11');
test(countKReducibleNumbers("1000", 2), 6, 'Test 12');
test(countKReducibleNumbers("10101010101010101010101010101010101010101010101010101010101010101", 3), 592177251, 'Test 13');
test(countKReducibleNumbers("11010101010101010101010101010101010101010101010101010101010101010", 4), 970573345, 'Test 14');
test(countKReducibleNumbers("111100001111000011110000111100001111000011110000111100001111000011", 5), 427648016, 'Test 15');
test(countKReducibleNumbers("101101110111011101110111011101110111011101110111011101110111011101", 4), 469386146, 'Test 16');
test(countKReducibleNumbers("1000100010001000100010001000100010001000100010001000100010001000", 3), 809688104, 'Test 17');
test(countKReducibleNumbers("100010001000100010001000100010001000100010001000100010001000100010", 2), 263516929, 'Test 18');
test(countKReducibleNumbers("11111111111111111111111111111111111111111111111111111111111111111", 5), 164688007, 'Test 19');
test(countKReducibleNumbers("1111000011110000111100001111000011110000111100001111000011110000", 4), 606912006, 'Test 20');
test(countKReducibleNumbers("110101010101010101010101010101010101010101010101010101010101010101", 4), 941146685, 'Test 21');
test(countKReducibleNumbers("1010101010101010101010101010101010101010101010101010101010101010", 4), 388229337, 'Test 22');
test(countKReducibleNumbers("111010101010101010101010101010101010101010101010101010101010101", 3), 802138855, 'Test 23');
test(countKReducibleNumbers("110110110110110110110110110110110110110110110110110110110110110110", 4), 568036587, 'Test 24');
test(countKReducibleNumbers("11011011011011011011011011011011011011011011011011011011011011011", 3), 67823251, 'Test 25');
test(countKReducibleNumbers("11111111111111111111111111111111111111111111111111111111111111110", 2), 720600285, 'Test 26');
test(countKReducibleNumbers("1111111111111111111111111111111111111111111111111111111111111110", 5), 582344005, 'Test 27');
test(countKReducibleNumbers("10110110110110110110110110110110110110110110110110110110110110110", 5), 403348578, 'Test 28');
test(countKReducibleNumbers("1000000000000000000000000000000000000000000000000000000000000000", 5), 291172003, 'Test 29');
test(countKReducibleNumbers("10010010010010010010010010010010010010010010010010010010010010010", 4), 522678864, 'Test 30');
test(countKReducibleNumbers("111000111000111000111000111000111000111000111000111000111000111000", 5), 70556457, 'Test 31');
test(countKReducibleNumbers("11111111111111111111111111111111111111111111111111111111111111111", 3), 158578985, 'Test 32');
test(countKReducibleNumbers("101110111011101110111011101110111011101110111011101110111011101110", 5), 108209077, 'Test 33');
test(countKReducibleNumbers("1111100001111100001111100001111100001111100001111100001111100001", 5), 306932732, 'Test 34');
test(countKReducibleNumbers("100110011001100110011001100110011001100110011001100110011001100110", 3), 207889528, 'Test 35');
test(countKReducibleNumbers("10101010101010101010101010101010101010101010101010101010101010101", 5), 776458676, 'Test 36');
test(countKReducibleNumbers("1111100001111100001111100001111100001111100001111100001111100001111", 4), 455461856, 'Test 37');

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
