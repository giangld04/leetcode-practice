// Test: 1079. Letter Tile Possibilities
// 82 test cases from LeetCodeDataset
// Run: node test.js

const { numTilePossibilities } = require("./solution");

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

console.log("\n1079. Letter Tile Possibilities\n");

test(numTilePossibilities("AAAAAAA"), 7, 'Test 1');
test(numTilePossibilities("QQQ"), 3, 'Test 2');
test(numTilePossibilities("ABCDEFG"), 13699, 'Test 3');
test(numTilePossibilities("ABC"), 15, 'Test 4');
test(numTilePossibilities("AAB"), 8, 'Test 5');
test(numTilePossibilities("AABBCC"), 270, 'Test 6');
test(numTilePossibilities("XYZ"), 15, 'Test 7');
test(numTilePossibilities("AAABBC"), 188, 'Test 8');
test(numTilePossibilities("AB"), 4, 'Test 9');
test(numTilePossibilities("AAAAAA"), 6, 'Test 10');
test(numTilePossibilities("ABCD"), 64, 'Test 11');
test(numTilePossibilities("V"), 1, 'Test 12');
test(numTilePossibilities("ABBB"), 13, 'Test 13');
test(numTilePossibilities("AAA"), 3, 'Test 14');
test(numTilePossibilities("AABC"), 34, 'Test 15');
test(numTilePossibilities("HHHHHHHH"), 8, 'Test 16');
test(numTilePossibilities("UVWXYZ"), 1956, 'Test 17');
test(numTilePossibilities("ABCDABCD"), 7364, 'Test 18');
test(numTilePossibilities("ZZZZZZZ"), 7, 'Test 19');
test(numTilePossibilities("ABCDEFGHIJKLMNOP"), Execution timed out, 'Test 20');
test(numTilePossibilities("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), Execution timed out, 'Test 21');
test(numTilePossibilities("AABBCCDDEEFFGGHH"), Execution timed out, 'Test 22');
test(numTilePossibilities("JKJKJKJKJK"), 922, 'Test 23');
test(numTilePossibilities("ZWZWZWZW"), 250, 'Test 24');
test(numTilePossibilities("AAAABBBB"), 250, 'Test 25');
test(numTilePossibilities("AAABBBCCC"), 5247, 'Test 26');
test(numTilePossibilities("AABBCCDDEEFF"), 21295782, 'Test 27');
test(numTilePossibilities("AAABBBCCCDDD"), 1107696, 'Test 28');
test(numTilePossibilities("XYZXYZ"), 270, 'Test 29');
test(numTilePossibilities("ABCDEFGH"), 109600, 'Test 30');
test(numTilePossibilities("ABACADAE"), 5188, 'Test 31');
test(numTilePossibilities("AABBCD"), 522, 'Test 32');
test(numTilePossibilities("HELLO"), 170, 'Test 33');
test(numTilePossibilities("AAAAAAAA"), 8, 'Test 34');
test(numTilePossibilities("ABCDEABCDE"), 326010, 'Test 35');
test(numTilePossibilities("QQQQRRRSSSTTTT"), 12743958, 'Test 36');
test(numTilePossibilities("AABCCDDEE"), 65201, 'Test 37');
test(numTilePossibilities("ABCDEFGHIJKLMNOPQRST"), Execution timed out, 'Test 38');
test(numTilePossibilities("PPPPQQRR"), 1350, 'Test 39');
test(numTilePossibilities("ABCDEFFFGGGHHH"), Execution timed out, 'Test 40');
test(numTilePossibilities("ABCDEFGHIJK"), Execution timed out, 'Test 41');
test(numTilePossibilities("AAAAABBCCC"), 8293, 'Test 42');
test(numTilePossibilities("ABCDABC"), 1840, 'Test 43');
test(numTilePossibilities("MISSISSIPPI"), 107898, 'Test 44');
test(numTilePossibilities("AABBCCD"), 1840, 'Test 45');
test(numTilePossibilities("ABCDEFF"), 7012, 'Test 46');
test(numTilePossibilities("REPEAT"), 1010, 'Test 47');
test(numTilePossibilities("WWWWW"), 5, 'Test 48');
test(numTilePossibilities("ZZZZAAAA"), 250, 'Test 49');
test(numTilePossibilities("AABBBCC"), 649, 'Test 50');
test(numTilePossibilities("QQQQQQQ"), 7, 'Test 51');
test(numTilePossibilities("AABBCCDD"), 7364, 'Test 52');
test(numTilePossibilities("AAABBCCCC"), 4024, 'Test 53');
test(numTilePossibilities("ABCDEFGHII"), 4986850, 'Test 54');
test(numTilePossibilities("ABCXYZ"), 1956, 'Test 55');
test(numTilePossibilities("AAAAABBBCCC"), 29887, 'Test 56');
test(numTilePossibilities("PYTHON"), 1956, 'Test 57');
test(numTilePossibilities("AABCCD"), 522, 'Test 58');
test(numTilePossibilities("AABBCCDDEEFFGG"), Execution timed out, 'Test 59');
test(numTilePossibilities("ABABABABAB"), 922, 'Test 60');
test(numTilePossibilities("AABBCCDDEE"), 326010, 'Test 61');
test(numTilePossibilities("AAAABBBCCCDDD"), 3627112, 'Test 62');
test(numTilePossibilities("AABBCCDE"), 14458, 'Test 63');
test(numTilePossibilities("ABCDEF"), 1956, 'Test 64');
test(numTilePossibilities("XYZABC"), 1956, 'Test 65');
test(numTilePossibilities("SEQUENCES"), 87185, 'Test 66');
test(numTilePossibilities("ABCDE"), 325, 'Test 67');
test(numTilePossibilities("AABCDD"), 522, 'Test 68');
test(numTilePossibilities("ABCABCABC"), 5247, 'Test 69');
test(numTilePossibilities("AAAAABBBB"), 460, 'Test 70');
test(numTilePossibilities("ABCDEFGABC"), 1274854, 'Test 71');
test(numTilePossibilities("QWRTYUIOP"), 986409, 'Test 72');
test(numTilePossibilities("AAAAABBBBBCCCCC"), 2435199, 'Test 73');
test(numTilePossibilities("UNIQUE"), 1010, 'Test 74');
test(numTilePossibilities("TILES"), 325, 'Test 75');
test(numTilePossibilities("ABACADAEA"), 9833, 'Test 76');
test(numTilePossibilities("MNOPQRST"), 109600, 'Test 77');
test(numTilePossibilities("AAAABBBCCC"), 13298, 'Test 78');
test(numTilePossibilities("COMBINATIONS"), Execution timed out, 'Test 79');
test(numTilePossibilities("FFFFFFFFF"), 9, 'Test 80');
test(numTilePossibilities("ABCDEFGHI"), 986409, 'Test 81');
test(numTilePossibilities("AAAAAABBBB"), 790, 'Test 82');

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
