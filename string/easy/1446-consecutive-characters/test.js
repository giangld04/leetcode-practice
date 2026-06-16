// Test: 1446. Consecutive Characters
// 70 test cases from LeetCodeDataset
// Run: node test.js

const { maxPower } = require("./solution");

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

console.log("\n1446. Consecutive Characters\n");

test(maxPower("abcdefghijklmnopqrstuvwxyz"), 1, 'Test 1');
test(maxPower("tourist"), 1, 'Test 2');
test(maxPower("a"), 1, 'Test 3');
test(maxPower("aabbbbccc"), 4, 'Test 4');
test(maxPower("cccccaaaa"), 5, 'Test 5');
test(maxPower("bbaaaaacccddddeeeefffggghhhiiijjjkkkllmmnnnooopppqqrrssttuuvvwwwxxxyyyzzz"), 5, 'Test 6');
test(maxPower("leetcode"), 2, 'Test 7');
test(maxPower("zzzzzzzzzz"), 10, 'Test 8');
test(maxPower("hooray"), 2, 'Test 9');
test(maxPower("ccbccbbbaaaa"), 4, 'Test 10');
test(maxPower("triplepilloooooo"), 6, 'Test 11');
test(maxPower("aabbbcccccdd"), 5, 'Test 12');
test(maxPower("abcd"), 1, 'Test 13');
test(maxPower("ccbccbb"), 2, 'Test 14');
test(maxPower("aabbcc"), 2, 'Test 15');
test(maxPower("cc"), 2, 'Test 16');
test(maxPower("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 2, 'Test 17');
test(maxPower("zyxwvutsrqponmlkjihgfedcba"), 1, 'Test 18');
test(maxPower("abbcccddddeeeeedcba"), 5, 'Test 19');
test(maxPower("abcdeffffffffghijklmnopqrstuvwxyz"), 8, 'Test 20');
test(maxPower("aaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaab"), 4, 'Test 21');
test(maxPower("pppppqqqqqrrrrrsssss"), 5, 'Test 22');
test(maxPower("aaabbaaabbbaaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaa"), 4, 'Test 23');
test(maxPower("ababababababababababab"), 1, 'Test 24');
test(maxPower("aaaaaaaaaaa"), 11, 'Test 25');
test(maxPower("mmmmmmnnnnnnooooooppppppqqqqqqrrrrrrssssssttttttuuuuuuvvvvvvwwwwwwxxxxxxxxxyyyyyyzzzzzz"), 9, 'Test 26');
test(maxPower("aaaabbbbccccddddeeeeffffgggghhhiiijjjkkklllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 28, 'Test 27');
test(maxPower("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 96, 'Test 28');
test(maxPower("aaaaaaabbbbbbcccccc"), 7, 'Test 29');
test(maxPower("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 1, 'Test 30');
test(maxPower("abcdefffffffffghijklmnopqrstuvwxyz"), 9, 'Test 31');
test(maxPower("aaabbbcccdddeeefffggghhhiiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz"), 4, 'Test 32');
test(maxPower("abacabadabacaba"), 1, 'Test 33');
test(maxPower("aabbbccccdddddeeeeeeeeefffffffffggggggggggg"), 11, 'Test 34');
test(maxPower("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 188, 'Test 35');
test(maxPower("abcabcabcabcabcabcabcabcabcabc"), 1, 'Test 36');
test(maxPower("abcdddddddddddabcdddddddddddabcddddddddddd"), 11, 'Test 37');
test(maxPower("aaaaaaaaaabbbbbbbbbbcccccccccc"), 10, 'Test 38');
test(maxPower("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 88, 'Test 39');
test(maxPower("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 1, 'Test 40');
test(maxPower("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 202, 'Test 41');
test(maxPower("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"), 180, 'Test 42');
test(maxPower("aabaaaaccaaaaabbb"), 5, 'Test 43');
test(maxPower("aaaaaaaaaabbbbbbbbbbccccccccccdddddddddd"), 10, 'Test 44');
test(maxPower("mnopqrstuvwxyzaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbccccccccccccccccccdddddddddddddddddddd"), 26, 'Test 45');
test(maxPower("aabcccccaaaaddddddeeeeffffggggghhhhiiiiijjjjjkkkkklllllmmmmmnnnnnooooo"), 6, 'Test 46');
test(maxPower("zzzzzyyyyyzzzzzzzzz"), 9, 'Test 47');
test(maxPower("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 1, 'Test 48');
test(maxPower("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 1, 'Test 49');
test(maxPower("aabbaabbccbbccddeeffggffhhiiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 3, 'Test 50');
test(maxPower("aabbccddeeeefffbbbccc"), 4, 'Test 51');
test(maxPower("aabbaaabbbaaaabbbaaabbaaaabbbaaaabbbaaabbaaaabbbaaaabbbaaabbaaaabbbaaaabbbaaabbaaaabbbaaaabbbaaabbaaaabbbaaaabbbaaabbaaaabbbaaaabbbaaabbaaaabbbaaaabbbaaabbaaaabbbaaaa"), 4, 'Test 52');
test(maxPower("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 152, 'Test 53');
test(maxPower("aaaaabbbbbccccccdddddeeeeeeffffffgggggghhhhhiiiiiijjjjjkkkkklllllmmmmmnnnnnooooo"), 6, 'Test 54');
test(maxPower("abcabcabcabcabcabc"), 1, 'Test 55');
test(maxPower("abccbaabccbaabccbaabccbaabccbaabccbaabccbaabccba"), 2, 'Test 56');
test(maxPower("aabbbcccdddeeefffggghhh"), 3, 'Test 57');
test(maxPower("zzzzzyyyyxxwwwwvvvuuutttsssrqqpponnmmllkkjjiihhggffeeddccbbaa"), 5, 'Test 58');
test(maxPower("aaabbbcccddddeeeeffffggggg"), 5, 'Test 59');
test(maxPower("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 51, 'Test 60');
test(maxPower("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 34, 'Test 61');
test(maxPower("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzz"), 6, 'Test 62');
test(maxPower("pppppaaaabbbbccccdddddeeeeeeeeeffffffggggggggggghhhhhhhhhiiiiiiiijjjjjjjkkkkkkllllllmmmmmmnnnnnoooooopppppqqqqrrrrsssttttuuuuuuuuuuuuvvvvvvvvvvvvvvvwwwwwwwwwwwxxxxxyyyyyyyyyyyyyzzzzzzzzzzzzzzzzz"), 17, 'Test 63');
test(maxPower("aabbbccccdddddeeeee"), 5, 'Test 64');
test(maxPower("abcabcabcabcabc"), 1, 'Test 65');
test(maxPower("sssssssqqqqqqqqqqppppppooooonnnnnnmmmmmmm"), 10, 'Test 66');
test(maxPower("abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab"), 1, 'Test 67');
test(maxPower("mnonononoqpqrstuvwxyzzzzzzzz"), 8, 'Test 68');
test(maxPower("aabbccddeeffaabbccddeeff"), 2, 'Test 69');
test(maxPower("aabbbcccddddeeeeeffffffggggg"), 6, 'Test 70');

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
