// Test: 521. Longest Uncommon Subsequence I
// 125 test cases from LeetCodeDataset
// Run: node test.js

const { findLUSlength } = require("./solution");

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

console.log("\n521. Longest Uncommon Subsequence I\n");

test(findLUSlength("aaa", "bbb"), 3, 'Test 1');
test(findLUSlength("same", "same"), -1, 'Test 2');
test(findLUSlength("test", "testing"), 7, 'Test 3');
test(findLUSlength("a", "b"), 1, 'Test 4');
test(findLUSlength("abcde", "fghij"), 5, 'Test 5');
test(findLUSlength("abc", "abcde"), 5, 'Test 6');
test(findLUSlength("a", "a"), -1, 'Test 7');
test(findLUSlength("abab", "baba"), 4, 'Test 8');
test(findLUSlength("abcabc", "abc"), 6, 'Test 9');
test(findLUSlength("abcd", "ab"), 4, 'Test 10');
test(findLUSlength("aaa", "aaa"), -1, 'Test 11');
test(findLUSlength("aba", "cdc"), 3, 'Test 12');
test(findLUSlength("aaaa", "aa"), 4, 'Test 13');
test(findLUSlength("abcd", "dcba"), 4, 'Test 14');
test(findLUSlength("xyz", "zyx"), 3, 'Test 15');
test(findLUSlength("hello", "world"), 5, 'Test 16');
test(findLUSlength("", ""), -1, 'Test 17');
test(findLUSlength("abc", "def"), 3, 'Test 18');
test(findLUSlength("samecharacters", "samecharacters"), -1, 'Test 19');
test(findLUSlength("aabbccddeeffgghhii", "abcabcabcabcabcabcabcabcabcabc"), 30, 'Test 20');
test(findLUSlength("sameple", "sample"), 7, 'Test 21');
test(findLUSlength("aaaaabbbb", "bbbbbaaaa"), 9, 'Test 22');
test(findLUSlength("pqrstuvwxyz", "mnopqrstuvwxyz"), 14, 'Test 23');
test(findLUSlength("mississippi", "mississippiiss"), 14, 'Test 24');
test(findLUSlength("xylophone", "polymorph"), 9, 'Test 25');
test(findLUSlength("aabbcc", "bbccaa"), 6, 'Test 26');
test(findLUSlength("pqr", "pqrstu"), 6, 'Test 27');
test(findLUSlength("abcdabcdabcd", "dcba"), 12, 'Test 28');
test(findLUSlength("abcdefgh", "abcd"), 8, 'Test 29');
test(findLUSlength("thisisatest", "thisisatesting"), 14, 'Test 30');
test(findLUSlength("uniquecharacters", "differentcharacters"), 19, 'Test 31');
test(findLUSlength("abc", "defg"), 4, 'Test 32');
test(findLUSlength("aaaaabbbb", "bbbbbcccc"), 9, 'Test 33');
test(findLUSlength("abracadabra", "avadakedavra"), 12, 'Test 34');
test(findLUSlength("mississippi", "ississippi"), 11, 'Test 35');
test(findLUSlength("patternmatching", "ternmpahcinoat"), 15, 'Test 36');
test(findLUSlength("aaaaaaaab", "bbbbbbbba"), 9, 'Test 37');
test(findLUSlength("uniquecharacters", "distinctcharacters"), 18, 'Test 38');
test(findLUSlength("abcabcabcabc", "defdefdefdef"), 12, 'Test 39');
test(findLUSlength("aaaaaaa", "aaaaaaaa"), 8, 'Test 40');
test(findLUSlength("aabbccddeeff", "ffeeddccbaa"), 12, 'Test 41');
test(findLUSlength("abacabadabacaba", "abcabcabcabc"), 15, 'Test 42');
test(findLUSlength("aabbccddeeffgghhii", "jklmnopqrstuvwxyzz"), 18, 'Test 43');
test(findLUSlength("abcdefghijk", "mnopqrstuvw"), 11, 'Test 44');
test(findLUSlength("abacabadabacaba", "abacabadabacab"), 15, 'Test 45');
test(findLUSlength("abcabcabc", "bcabcabca"), 9, 'Test 46');
test(findLUSlength("aabbccddeeffgg", "ffggeeccddbbbaaa"), 16, 'Test 47');
test(findLUSlength("aaaaaaaaaa", "bbbbbbbbbb"), 10, 'Test 48');
test(findLUSlength("abcabcabc", "abcabc"), 9, 'Test 49');
test(findLUSlength("aabbccddeeffgghhii", "aabbccddeeffgghhii"), -1, 'Test 50');
test(findLUSlength("abcabcabcabc", "abcabcabc"), 12, 'Test 51');
test(findLUSlength("", "abcdef"), 6, 'Test 52');
test(findLUSlength("abcabcabcabcabcabcabcabcabcabc", "defdefdefdefdefdefdefdefdefdef"), 30, 'Test 53');
test(findLUSlength("abababab", "babababa"), 8, 'Test 54');
test(findLUSlength("xyzabc", "xyzdef"), 6, 'Test 55');
test(findLUSlength("abcabcabc", "defdefdef"), 9, 'Test 56');
test(findLUSlength("repeatedrepeated", "repeatedrepeatt"), 16, 'Test 57');
test(findLUSlength("abcabcabc", "abc"), 9, 'Test 58');
test(findLUSlength("xyxyxyxyxy", "yxyxyxyxyx"), 10, 'Test 59');
test(findLUSlength("", "a"), 1, 'Test 60');
test(findLUSlength("longestuncommonsubsequence", "short"), 26, 'Test 61');
test(findLUSlength("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), 26, 'Test 62');
test(findLUSlength("mississippi", "mississipp"), 11, 'Test 63');
test(findLUSlength("abacax", "bacxab"), 6, 'Test 64');
test(findLUSlength("abracadabra", "cabracadabr"), 11, 'Test 65');
test(findLUSlength("pneumonoultramicroscopicsilicovolcanoconiosis", "antidisestablishmentarianism"), 45, 'Test 66');
test(findLUSlength("thisisatest", "isatestthis"), 11, 'Test 67');
test(findLUSlength("aabbccddeeff", "aabbccddeeffgghh"), 16, 'Test 68');
test(findLUSlength("xyzxyz", "zyxzyx"), 6, 'Test 69');
test(findLUSlength("abcdexyz", "abcdexyz"), -1, 'Test 70');
test(findLUSlength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa"), 52, 'Test 71');
test(findLUSlength("differentstrings", "different"), 16, 'Test 72');
test(findLUSlength("abacabadabacaba", "bacabadabacabaa"), 15, 'Test 73');
test(findLUSlength("repeatedrepeated", "repeated"), 16, 'Test 74');
test(findLUSlength("aaaaaaabbbbcccc", "ccccbbbbaaaaaa"), 15, 'Test 75');
test(findLUSlength("abcabcabcabc", "abcabc"), 12, 'Test 76');
test(findLUSlength("differentstring", "differentstringxyz"), 18, 'Test 77');
test(findLUSlength("abcd", "abcdabcd"), 8, 'Test 78');
test(findLUSlength("abracadabra", "abracadabrac"), 12, 'Test 79');
test(findLUSlength("aaaaa", "baaaa"), 5, 'Test 80');
test(findLUSlength("repeatedsubstringrepeatedsubstring", "substring"), 34, 'Test 81');
test(findLUSlength("aaabbbcccdddeee", "eeeedddcccbbbbaaa"), 17, 'Test 82');
test(findLUSlength("abcdefghijabcdefghij", "jihgfedcbajihgfedcba"), 20, 'Test 83');
test(findLUSlength("abcdefg", "ghijklm"), 7, 'Test 84');
test(findLUSlength("aaaabbbbcccc", "ccccbbbbaaaa"), 12, 'Test 85');
test(findLUSlength("abcdeabcdeabcde", "deabcdeabcdeabc"), 15, 'Test 86');
test(findLUSlength("aaaaaa", "aaaaa"), 6, 'Test 87');
test(findLUSlength("abcdabcdabcd", "dcbaabdc"), 12, 'Test 88');
test(findLUSlength("aaaaaaab", "aaaaaaac"), 8, 'Test 89');
test(findLUSlength("samestring", "samestring"), -1, 'Test 90');
test(findLUSlength("abcde", "edcba"), 5, 'Test 91');
test(findLUSlength("aaaabaaa", "aaabaaaa"), 8, 'Test 92');
test(findLUSlength("abcdef", "ghijkl"), 6, 'Test 93');
test(findLUSlength("abacabadabacaba", "babacabadabacab"), 15, 'Test 94');
test(findLUSlength("unique", "distinct"), 8, 'Test 95');
test(findLUSlength("abababababababab", "babababababababa"), 16, 'Test 96');
test(findLUSlength("aabbccddeeff", "ffeeddccbbaa"), 12, 'Test 97');
test(findLUSlength("aaaaaabbbbbbbbbbcccccc", "ccccccdddddeeeeeeffffff"), 23, 'Test 98');
test(findLUSlength("aaaaaaaab", "aaaaaaaac"), 9, 'Test 99');
test(findLUSlength("longestuncommonsubsequence", "subsequencelongestuncom"), 26, 'Test 100');
test(findLUSlength("a", ""), 1, 'Test 101');
test(findLUSlength("banana", "bananab"), 7, 'Test 102');
test(findLUSlength("aabbccddeeffgghhiijj", "bbccddeeffgghhiijjkk"), 20, 'Test 103');
test(findLUSlength("aabbcc", "ccbbaa"), 6, 'Test 104');
test(findLUSlength("aaaaabaaaaabaaaaab", "baaaaabaaaaabaaaaa"), 18, 'Test 105');
test(findLUSlength("aaaaaabbbbb", "bbbbbaaaaaa"), 11, 'Test 106');
test(findLUSlength("longestuncommonsubsequence", "longestcommonsubsequence"), 26, 'Test 107');
test(findLUSlength("longerstringexample", "short"), 19, 'Test 108');
test(findLUSlength("thisisatest", "testthisis"), 11, 'Test 109');
test(findLUSlength("abcdabcdabcd", "dcbaabcdabcd"), 12, 'Test 110');
test(findLUSlength("uniqueuncommonstring", "stringuncommonunique"), 20, 'Test 111');
test(findLUSlength("aaaaabbbbb", "bbbbbccccc"), 10, 'Test 112');
test(findLUSlength("overlappingcharactersoverlap", "overlapoverlappingcharacters"), 28, 'Test 113');
test(findLUSlength("abcabcabcabc", "abcabcabcabcabcabc"), 18, 'Test 114');
test(findLUSlength("aabbccddeeffgghhii", "aabbccddeeffgg"), 18, 'Test 115');
test(findLUSlength("aabbcc", "abbccc"), 6, 'Test 116');
test(findLUSlength("aaaaaaa", "aaaaaab"), 7, 'Test 117');
test(findLUSlength("abcdabcd", "dcba"), 8, 'Test 118');
test(findLUSlength("identicalstrings", "identicalstrings"), -1, 'Test 119');
test(findLUSlength("abcdabcdabcd", "cdabcdabcdab"), 12, 'Test 120');
test(findLUSlength("aaaaa", "bbbbb"), 5, 'Test 121');
test(findLUSlength("aabbccddeeffgg", "ggffeeeeddccbaaabb"), 18, 'Test 122');
test(findLUSlength("longerstring", "longerstringabc"), 15, 'Test 123');
test(findLUSlength("xyzabc", "abcxyz"), 6, 'Test 124');
test(findLUSlength("aabbccddeeffgghhii", "zzzzzzzzzzzzzzzzzzzzzzzz"), 24, 'Test 125');

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
