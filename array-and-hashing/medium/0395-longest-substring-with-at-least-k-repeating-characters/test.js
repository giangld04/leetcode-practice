// Test: 395. Longest Substring With At Least K Repeating Characters
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { longestSubstring } = require("./solution");

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

console.log("\n395. Longest Substring With At Least K Repeating Characters\n");

test(longestSubstring("abcabcabc", 3), 9, 'Test 1');
test(longestSubstring("abcdefg", 1), 7, 'Test 2');
test(longestSubstring("bbaaacccddddeee", 4), 4, 'Test 3');
test(longestSubstring("", 1), 0, 'Test 4');
test(longestSubstring("aabcabb", 2), 2, 'Test 5');
test(longestSubstring("aaa", 4), 0, 'Test 6');
test(longestSubstring("a", 1), 1, 'Test 7');
test(longestSubstring("aaaabbbbcccc", 5), 0, 'Test 8');
test(longestSubstring("a", 2), 0, 'Test 9');
test(longestSubstring("aabbcc", 1), 6, 'Test 10');
test(longestSubstring("abcde", 2), 0, 'Test 11');
test(longestSubstring("aabbbccc", 3), 6, 'Test 12');
test(longestSubstring("aabbbcccc", 3), 7, 'Test 13');
test(longestSubstring("aaabb", 3), 3, 'Test 14');
test(longestSubstring("zzzzzzzz", 5), 8, 'Test 15');
test(longestSubstring("abcd", 1), 4, 'Test 16');
test(longestSubstring("ababbc", 2), 5, 'Test 17');
test(longestSubstring("aabcccddddeee", 2), 10, 'Test 18');
test(longestSubstring("aaabbbcccddd", 4), 0, 'Test 19');
test(longestSubstring("abcabcabcabc", 3), 12, 'Test 20');
test(longestSubstring("zzzzzzzzzz", 1), 10, 'Test 21');
test(longestSubstring("aabbccddeeff", 1), 12, 'Test 22');
test(longestSubstring("abcdefabcdefabcdef", 3), 18, 'Test 23');
test(longestSubstring("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy", 2), 36, 'Test 24');
test(longestSubstring("aabbccddeeffgghhii", 2), 18, 'Test 25');
test(longestSubstring("qwertyuiopasdfghjklzxcvbnm", 1), 26, 'Test 26');
test(longestSubstring("aabbccddeeffgghhiijjkk", 2), 22, 'Test 27');
test(longestSubstring("aabccceeddd", 3), 3, 'Test 28');
test(longestSubstring("abacabadabacabadabacabad", 2), 24, 'Test 29');
test(longestSubstring("qqwweerrttyyuuiiooppaassddffgg", 3), 0, 'Test 30');
test(longestSubstring("zzzzzzzzzzzzzzzzzzzz", 5), 20, 'Test 31');
test(longestSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 1), 52, 'Test 32');
test(longestSubstring("aabbccddeeeefff", 3), 7, 'Test 33');
test(longestSubstring("aabaaaabbbaaaabb", 3), 16, 'Test 34');
test(longestSubstring("aabbccddeeff", 2), 12, 'Test 35');
test(longestSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1), 56, 'Test 36');
test(longestSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1), 34, 'Test 37');
test(longestSubstring("xyzzzzzzzzzzxy", 10), 10, 'Test 38');
test(longestSubstring("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz", 3), 60, 'Test 39');
test(longestSubstring("abcdabcabcabcd", 2), 14, 'Test 40');
test(longestSubstring("abcdabcdbcdabcd", 2), 15, 'Test 41');
test(longestSubstring("aabaaaabbbaabbccbbbaaacccaa", 3), 27, 'Test 42');
test(longestSubstring("abccbaabccba", 2), 12, 'Test 43');
test(longestSubstring("mississippi", 2), 10, 'Test 44');
test(longestSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 5), 0, 'Test 45');
test(longestSubstring("abcabcabcabcabc", 2), 15, 'Test 46');
test(longestSubstring("bbaaacccddddeee", 3), 13, 'Test 47');
test(longestSubstring("abcdabcdabcdabcdabcd", 5), 20, 'Test 48');
test(longestSubstring("aaaaaaaaaabbbbbbbbbbcccccccccc", 10), 30, 'Test 49');
test(longestSubstring("abababababab", 3), 12, 'Test 50');
test(longestSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 26), 0, 'Test 51');
test(longestSubstring("ababababababababababababababababababababababababababababababab", 2), 62, 'Test 52');
test(longestSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 50), 60, 'Test 53');
test(longestSubstring("aabbaaaccbbccaaaaccccbbbbaaaaa", 6), 30, 'Test 54');
test(longestSubstring("abacabadabacaba", 2), 0, 'Test 55');
test(longestSubstring("abcbacbabcbabc", 3), 14, 'Test 56');
test(longestSubstring("bbaaacccddddeeeeffffgggghhhh", 4), 20, 'Test 57');
test(longestSubstring("abcabcabcabcabcabcabcabcabcabc", 1), 30, 'Test 58');
test(longestSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 25), 60, 'Test 59');
test(longestSubstring("aaabbbcccddd", 3), 12, 'Test 60');
test(longestSubstring("abcdabcdabcdabcdabcdabcd", 2), 24, 'Test 61');
test(longestSubstring("abcabcabcabc", 2), 12, 'Test 62');
test(longestSubstring("bbaaacccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz", 4), 92, 'Test 63');
test(longestSubstring("abcabcabcabcabcabcabcabcabcabc", 10), 30, 'Test 64');
test(longestSubstring("xyzzzzzyx", 3), 5, 'Test 65');
test(longestSubstring("zzzzzyyyyxxxxwwwwvvvv", 5), 5, 'Test 66');
test(longestSubstring("aabbccddeeffgg", 2), 14, 'Test 67');
test(longestSubstring("aabbccddeeffgg", 3), 0, 'Test 68');
test(longestSubstring("aabbaaabbbaaaabb", 3), 16, 'Test 69');
test(longestSubstring("ababababababababababababababab", 3), 30, 'Test 70');
test(longestSubstring("mnopqrstuv", 1), 10, 'Test 71');
test(longestSubstring("abcabcabcabc", 1), 12, 'Test 72');
test(longestSubstring("xyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 30), 58, 'Test 73');
test(longestSubstring("abcdefghigklmnopqrstuvwxyz", 1), 26, 'Test 74');
test(longestSubstring("aabbccddeeffgghhiijjkk", 3), 0, 'Test 75');
test(longestSubstring("zzzzzzzzzzzzzz", 12), 14, 'Test 76');
test(longestSubstring("xyzzazaxxzyzyzyzyzxzyzyzyzxzyzyzyz", 2), 34, 'Test 77');
test(longestSubstring("aabbaaaccbbccaaaaccccbbbbaaaaa", 3), 30, 'Test 78');
test(longestSubstring("aabaaaadaaabaaaadaaabaaaa", 3), 4, 'Test 79');
test(longestSubstring("aabbccddeeffgg", 4), 0, 'Test 80');
test(longestSubstring("zzzzzzzzzzzzzzzzzzzz", 10), 20, 'Test 81');
test(longestSubstring("abccbaabccccddddeeeee", 2), 21, 'Test 82');
test(longestSubstring("abcabcabcabcabcabcabcabcabcabc", 2), 30, 'Test 83');
test(longestSubstring("thisisjustaverylongteststring", 3), 0, 'Test 84');
test(longestSubstring("abababababababababababababababab", 5), 32, 'Test 85');
test(longestSubstring("zzzzzyyyyyxxxx", 4), 14, 'Test 86');
test(longestSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 15), 60, 'Test 87');
test(longestSubstring("abcbcbcbcbcbcbcbcbcbcbcbcbcb", 2), 27, 'Test 88');
test(longestSubstring("xyzzxyzzxyzz", 3), 12, 'Test 89');
test(longestSubstring("aabbbccccdddd", 4), 8, 'Test 90');
test(longestSubstring("mississippi", 3), 7, 'Test 91');
test(longestSubstring("aabacbebebe", 3), 6, 'Test 92');
test(longestSubstring("zzzzzyyyyyxxxxwwwwvvvvuuuuttttssssrrrrqqqqpppplllloooonnnnmmmkkkjjjiiihhhhggggffffeeeeddddccccbbbbaaaaa", 5), 10, 'Test 93');
test(longestSubstring("abcdefghijklmnopqrstuvwxyz", 1), 26, 'Test 94');
test(longestSubstring("abacabadabacaba", 3), 0, 'Test 95');
test(longestSubstring("xyzzzzzzzzzyx", 2), 13, 'Test 96');
test(longestSubstring("aabbcdefgghijklmno", 2), 4, 'Test 97');
test(longestSubstring("ppppppqqqqrrrssstttuuuvvvvwwwwwxxxxxyyyyyzzzz", 5), 15, 'Test 98');
test(longestSubstring("abcabcabcabcabcabc", 2), 18, 'Test 99');
test(longestSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1), 60, 'Test 100');
test(longestSubstring("zzzzzaaazzzzzzzzzz", 5), 10, 'Test 101');
test(longestSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 3), 0, 'Test 102');
test(longestSubstring("zzzzzzzzzzzzzzzzzz", 5), 18, 'Test 103');
test(longestSubstring("abababababababababababababababababababab", 5), 40, 'Test 104');
test(longestSubstring("xyzzzxyzzzxyzzz", 3), 15, 'Test 105');
test(longestSubstring("aabababababababababababababababa", 5), 32, 'Test 106');
test(longestSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 2), 52, 'Test 107');
test(longestSubstring("aabbccddeeffgghhiijjkk", 4), 0, 'Test 108');
test(longestSubstring("abcdefgh", 2), 0, 'Test 109');

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
