// Test: 1759. Count Number Of Homogenous Substrings
// 80 test cases from LeetCodeDataset
// Run: node test.js

const { countHomogenous } = require("./solution");

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

console.log("\n1759. Count Number Of Homogenous Substrings\n");

test(countHomogenous("aaabbbccc"), 18, 'Test 1');
test(countHomogenous("aabbccddeeefffggghhhiiii"), 46, 'Test 2');
test(countHomogenous("abcdefghijklmnopqrstuvwxyz"), 26, 'Test 3');
test(countHomogenous("xy"), 2, 'Test 4');
test(countHomogenous("aabbaa"), 9, 'Test 5');
test(countHomogenous("aaaaa"), 15, 'Test 6');
test(countHomogenous("pppppppppp"), 55, 'Test 7');
test(countHomogenous("abcdeffffff"), 26, 'Test 8');
test(countHomogenous("a"), 1, 'Test 9');
test(countHomogenous("qqqqqwwweeeerrrrtttttyyyyyuuuuuiooooo"), 102, 'Test 10');
test(countHomogenous("abcabcabc"), 9, 'Test 11');
test(countHomogenous("ababababab"), 10, 'Test 12');
test(countHomogenous("abcde"), 5, 'Test 13');
test(countHomogenous("ababababa"), 9, 'Test 14');
test(countHomogenous("zzzzyyyyxxxwwwwvvvvuuuuttttsrrrqqqppoonnmlkjihgfedcba"), 101, 'Test 15');
test(countHomogenous("ccccccccc"), 45, 'Test 16');
test(countHomogenous("abbcccaa"), 13, 'Test 17');
test(countHomogenous("abcd"), 4, 'Test 18');
test(countHomogenous("zzzzz"), 15, 'Test 19');
test(countHomogenous("ababab"), 6, 'Test 20');
test(countHomogenous("aaaaaabb"), 24, 'Test 21');
test(countHomogenous("aabbccddeeeeffff"), 32, 'Test 22');
test(countHomogenous("abcabcabcabcabcabcabc"), 21, 'Test 23');
test(countHomogenous("aabbbccccdddd"), 29, 'Test 24');
test(countHomogenous("mmmmmlllllkkkkkkjjjjjjjjiiiiiiiiiiiihhhhhhhhhhhh"), 243, 'Test 25');
test(countHomogenous("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1326, 'Test 26');
test(countHomogenous("aaabaaaabaaaaabaaaaaaabaaaaaaaabaaaaaaaaabaaaaaaaaaabaaaaaaaaaa"), 257, 'Test 27');
test(countHomogenous("aaaaaaaaaabbbbbbbbccccccccddddddddeeeeeeeee"), 208, 'Test 28');
test(countHomogenous("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 903, 'Test 29');
test(countHomogenous("aabbcccddddeeeee"), 37, 'Test 30');
test(countHomogenous("pppppqqqqqqrrrrrrsssssstttttuuuuuuvvvvvvvvvwwwwwwwww"), 204, 'Test 31');
test(countHomogenous("aabbbcccc"), 19, 'Test 32');
test(countHomogenous("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 676, 'Test 33');
test(countHomogenous("aaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaa"), 252, 'Test 34');
test(countHomogenous("mmmmmmmmmmmmmmmnnnnnnnnnnnnnnnoooooooooooopppppppppppp"), 396, 'Test 35');
test(countHomogenous("aabbccddeeefffggg"), 30, 'Test 36');
test(countHomogenous("abcabcabcabc"), 12, 'Test 37');
test(countHomogenous("aaabbaaaabbaaa"), 28, 'Test 38');
test(countHomogenous("aaaaaaaaaabbbbbbbbbbcccccccccc"), 165, 'Test 39');
test(countHomogenous("aabbccddeeefffggghhhh"), 40, 'Test 40');
test(countHomogenous("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 277140, 'Test 41');
test(countHomogenous("zzzzyyyyzzzz"), 30, 'Test 42');
test(countHomogenous("aaaaabbbbccccc"), 40, 'Test 43');
test(countHomogenous("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 29403, 'Test 44');
test(countHomogenous("xyzxyzxyzxyzxyzxyzxyzxyz"), 24, 'Test 45');
test(countHomogenous("aabbccddeeeeffffggggghhhhiiiii"), 72, 'Test 46');
test(countHomogenous("pppppppppppppppppppppppppppppppppp"), 595, 'Test 47');
test(countHomogenous("ababababababababababababababab"), 30, 'Test 48');
test(countHomogenous("aaaaabbbbccccdddddeeeee"), 65, 'Test 49');
test(countHomogenous("aabbccddeeefffggghhhhiiiiijjjjjkkkkklllllmmmmmnnnnnooooo"), 145, 'Test 50');
test(countHomogenous("pppppppppppppppppppppppppppppppppppppppppppqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"), 1892, 'Test 51');
test(countHomogenous("ppppppppppppppppppppppp"), 276, 'Test 52');
test(countHomogenous("xyzzyzxzyzxyz"), 14, 'Test 53');
test(countHomogenous("ababababababab"), 14, 'Test 54');
test(countHomogenous("aabbccddeeeefffghhhiiiijjjjkkkkllllmmmmmnnnnnooooo"), 120, 'Test 55');
test(countHomogenous("abcdefghijklmnopqrstuvwxyza"), 27, 'Test 56');
test(countHomogenous("aabbccddeeefffggghhhiiiijjjjkkkkllllmmmmmnnnnnooooooo"), 134, 'Test 57');
test(countHomogenous("aaaaaaaaabbbbbbbbbbcccccccccc"), 155, 'Test 58');
test(countHomogenous("zzzzzyyyxxxwwwwvvvvuuuuu"), 62, 'Test 59');
test(countHomogenous("aabbccddeeeeffffggggghhhiiijjjkkklllmmnnooopppqqqrrsssttuuuvvvwwwwwxxxxxyyyyyzzzz"), 180, 'Test 60');
test(countHomogenous("abcdefffffffffffffffffffffffffghijklmnopqrstuvwxyz"), 350, 'Test 61');
test(countHomogenous("abcdabcdbcdabcd"), 15, 'Test 62');
test(countHomogenous("aabbbbccccc"), 28, 'Test 63');
test(countHomogenous("aaaaaaaaaaaabbaaaaaaa"), 109, 'Test 64');
test(countHomogenous("aabbbccccc"), 24, 'Test 65');
test(countHomogenous("xyxyxyxyxyxyxyx"), 15, 'Test 66');
test(countHomogenous("aabbaaabbbaaa"), 24, 'Test 67');
test(countHomogenous("aabbaaabbcccddeee"), 30, 'Test 68');
test(countHomogenous("aabbccddeeffgg"), 21, 'Test 69');
test(countHomogenous("aaaaabbbbbbbbbbcccccccccc"), 125, 'Test 70');
test(countHomogenous("pppppppppppppppppppppppppppppppppppppppp"), 820, 'Test 71');
test(countHomogenous("aabbaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 84, 'Test 72');
test(countHomogenous("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), 160, 'Test 73');
test(countHomogenous("qwerqwerqwerqwerqwerqwerqwer"), 28, 'Test 74');
test(countHomogenous("aaabbaaa"), 15, 'Test 75');
test(countHomogenous("aaabbaaabbaaa"), 24, 'Test 76');
test(countHomogenous("abcabcabcabcabc"), 15, 'Test 77');
test(countHomogenous("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 21736, 'Test 78');
test(countHomogenous("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1275, 'Test 79');
test(countHomogenous("abcdefg"), 7, 'Test 80');

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
