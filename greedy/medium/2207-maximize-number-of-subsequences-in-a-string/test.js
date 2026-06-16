// Test: 2207. Maximize Number Of Subsequences In A String
// 138 test cases from LeetCodeDataset
// Run: node test.js

const { maximumSubsequenceCount } = require("./solution");

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

console.log("\n2207. Maximize Number Of Subsequences In A String\n");

test(maximumSubsequenceCount("bbbb", "bb"), 10, 'Test 1');
test(maximumSubsequenceCount("aaaaa", "aa"), 15, 'Test 2');
test(maximumSubsequenceCount("zzzz", "zz"), 10, 'Test 3');
test(maximumSubsequenceCount("abdcdbc", "ac"), 4, 'Test 4');
test(maximumSubsequenceCount("abc", "ca"), 1, 'Test 5');
test(maximumSubsequenceCount("babab", "ba"), 6, 'Test 6');
test(maximumSubsequenceCount("zzz", "zz"), 6, 'Test 7');
test(maximumSubsequenceCount("abcabc", "aa"), 3, 'Test 8');
test(maximumSubsequenceCount("a", "ab"), 1, 'Test 9');
test(maximumSubsequenceCount("ab", "ba"), 1, 'Test 10');
test(maximumSubsequenceCount("aabb", "ab"), 6, 'Test 11');
test(maximumSubsequenceCount("aaa", "aa"), 6, 'Test 12');
test(maximumSubsequenceCount("b", "ab"), 1, 'Test 13');
test(maximumSubsequenceCount("aaaa", "aa"), 10, 'Test 14');
test(maximumSubsequenceCount("xyzxyz", "yx"), 3, 'Test 15');
test(maximumSubsequenceCount("abcabc", "ac"), 5, 'Test 16');
test(maximumSubsequenceCount("xyz", "xz"), 2, 'Test 17');
test(maximumSubsequenceCount("", "ab"), 0, 'Test 18');
test(maximumSubsequenceCount("", "xy"), 0, 'Test 19');
test(maximumSubsequenceCount("abxyabxyabxy", "bx"), 9, 'Test 20');
test(maximumSubsequenceCount("zxyzxyzxyz", "yz"), 10, 'Test 21');
test(maximumSubsequenceCount("xyzyzyzyzyzx", "yx"), 10, 'Test 22');
test(maximumSubsequenceCount("zzzzzzzzzzz", "zz"), 66, 'Test 23');
test(maximumSubsequenceCount("pqrsrstq", "pq"), 4, 'Test 24');
test(maximumSubsequenceCount("bbabbaaa", "ba"), 18, 'Test 25');
test(maximumSubsequenceCount("ababababab", "ba"), 15, 'Test 26');
test(maximumSubsequenceCount("aaaaabbbbb", "ab"), 30, 'Test 27');
test(maximumSubsequenceCount("aaabbbccc", "ac"), 12, 'Test 28');
test(maximumSubsequenceCount("abacabacaba", "ac"), 12, 'Test 29');
test(maximumSubsequenceCount("abcdefabcdef", "cf"), 5, 'Test 30');
test(maximumSubsequenceCount("bbaabb", "ba"), 8, 'Test 31');
test(maximumSubsequenceCount("bcbcbcbcbb", "bc"), 16, 'Test 32');
test(maximumSubsequenceCount("bbaabaabaabbb", "ab"), 31, 'Test 33');
test(maximumSubsequenceCount("bbbbba", "ba"), 10, 'Test 34');
test(maximumSubsequenceCount("acbacbacba", "ac"), 10, 'Test 35');
test(maximumSubsequenceCount("mnopqr", "pq"), 2, 'Test 36');
test(maximumSubsequenceCount("xyxzyxzyxzyx", "yx"), 15, 'Test 37');
test(maximumSubsequenceCount("zzyzxzyzxzy", "yz"), 12, 'Test 38');
test(maximumSubsequenceCount("xyyxxyyxxyy", "yx"), 18, 'Test 39');
test(maximumSubsequenceCount("aabbccdd", "ac"), 6, 'Test 40');
test(maximumSubsequenceCount("abcdabcdabcd", "ac"), 9, 'Test 41');
test(maximumSubsequenceCount("mississippi", "is"), 10, 'Test 42');
test(maximumSubsequenceCount("zzzzzzzzzz", "zz"), 55, 'Test 43');
test(maximumSubsequenceCount("ababababab", "ab"), 20, 'Test 44');
test(maximumSubsequenceCount("aabbaabbaabbaabbaabbaabbaabbaabb", "bb"), 136, 'Test 45');
test(maximumSubsequenceCount("qwertyuiop", "qp"), 2, 'Test 46');
test(maximumSubsequenceCount("aaaaaaa", "aa"), 28, 'Test 47');
test(maximumSubsequenceCount("abcdabcdabcd", "da"), 6, 'Test 48');
test(maximumSubsequenceCount("zzzzz", "zz"), 15, 'Test 49');
test(maximumSubsequenceCount("abababababab", "ba"), 21, 'Test 50');
test(maximumSubsequenceCount("abababababa", "ab"), 21, 'Test 51');
test(maximumSubsequenceCount("abcabcabcabc", "ac"), 14, 'Test 52');
test(maximumSubsequenceCount("aabbbcc", "ac"), 6, 'Test 53');
test(maximumSubsequenceCount("aabbaabbaabbaabbaabb", "aa"), 55, 'Test 54');
test(maximumSubsequenceCount("babcbabcba", "bc"), 11, 'Test 55');
test(maximumSubsequenceCount("aabbccddeeff", "bf"), 6, 'Test 56');
test(maximumSubsequenceCount("abcabcabc", "ab"), 9, 'Test 57');
test(maximumSubsequenceCount("bcbcbcbcbc", "bc"), 20, 'Test 58');
test(maximumSubsequenceCount("xyxxyxyxyx", "yx"), 17, 'Test 59');
test(maximumSubsequenceCount("abcabcabcabcabcabc", "ca"), 21, 'Test 60');
test(maximumSubsequenceCount("xzyxzyxzyz", "zy"), 10, 'Test 61');
test(maximumSubsequenceCount("zzzzzz", "zz"), 21, 'Test 62');
test(maximumSubsequenceCount("aabbbaaabbbb", "ab"), 33, 'Test 63');
test(maximumSubsequenceCount("aaabbb", "ab"), 12, 'Test 64');
test(maximumSubsequenceCount("nnaaaannaa", "an"), 14, 'Test 65');
test(maximumSubsequenceCount("xyxyxyxyxy", "yx"), 15, 'Test 66');
test(maximumSubsequenceCount("cccccc", "cc"), 21, 'Test 67');
test(maximumSubsequenceCount("abacabadabacaba", "ba"), 24, 'Test 68');
test(maximumSubsequenceCount("bababababababababa", "bb"), 45, 'Test 69');
test(maximumSubsequenceCount("dcbabcdabcba", "ab"), 9, 'Test 70');
test(maximumSubsequenceCount("xyzzyxzyxzyxzyx", "zy"), 19, 'Test 71');
test(maximumSubsequenceCount("aaaaaabbbb", "ab"), 30, 'Test 72');
test(maximumSubsequenceCount("cccccccc", "cc"), 36, 'Test 73');
test(maximumSubsequenceCount("babcbacbab", "bc"), 10, 'Test 74');
test(maximumSubsequenceCount("abcdefghijklmnopqrstuvwxyz", "zy"), 1, 'Test 75');
test(maximumSubsequenceCount("zzzyyy", "yz"), 3, 'Test 76');
test(maximumSubsequenceCount("zzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zz"), 406, 'Test 77');
test(maximumSubsequenceCount("mnopqrqpomn", "mn"), 5, 'Test 78');
test(maximumSubsequenceCount("aabbaabb", "bb"), 10, 'Test 79');
test(maximumSubsequenceCount("aabbccddeeffgg", "ag"), 6, 'Test 80');
test(maximumSubsequenceCount("ccbaaa", "ab"), 3, 'Test 81');
test(maximumSubsequenceCount("xyzzyxzyzxzyxzyx", "yz"), 20, 'Test 82');
test(maximumSubsequenceCount("aaaaaaaaa", "aa"), 45, 'Test 83');
test(maximumSubsequenceCount("aabbaabb", "ab"), 16, 'Test 84');
test(maximumSubsequenceCount("bababababababa", "ba"), 35, 'Test 85');
test(maximumSubsequenceCount("bababababa", "ba"), 20, 'Test 86');
test(maximumSubsequenceCount("zyxwvutsrqponmlkjihgfedcba", "yz"), 1, 'Test 87');
test(maximumSubsequenceCount("qqqqqqqqqq", "qp"), 10, 'Test 88');
test(maximumSubsequenceCount("qwertyuiopasdfghjklzxcvbnm", "mn"), 1, 'Test 89');
test(maximumSubsequenceCount("abcabcdabc", "bc"), 9, 'Test 90');
test(maximumSubsequenceCount("zzzzyyyy", "zy"), 20, 'Test 91');
test(maximumSubsequenceCount("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "xz"), 6, 'Test 92');
test(maximumSubsequenceCount("abacabacab", "ac"), 11, 'Test 93');
test(maximumSubsequenceCount("fedcba", "ab"), 1, 'Test 94');
test(maximumSubsequenceCount("ccccbbbaaa", "ba"), 12, 'Test 95');
test(maximumSubsequenceCount("mmnnnmmnnm", "mn"), 19, 'Test 96');
test(maximumSubsequenceCount("abcabcabc", "ba"), 6, 'Test 97');
test(maximumSubsequenceCount("xyzxyzxyzxyz", "yx"), 10, 'Test 98');
test(maximumSubsequenceCount("qqqqqppppp", "pq"), 5, 'Test 99');
test(maximumSubsequenceCount("aaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbb", "ba"), 20, 'Test 100');
test(maximumSubsequenceCount("abbaba", "ab"), 7, 'Test 101');
test(maximumSubsequenceCount("zzzzzzzzzzzzz", "zz"), 91, 'Test 102');
test(maximumSubsequenceCount("zzyzxzyzxzyz", "yz"), 16, 'Test 103');
test(maximumSubsequenceCount("aabbaabb", "aa"), 10, 'Test 104');
test(maximumSubsequenceCount("abcabcabcabcabc", "ab"), 20, 'Test 105');
test(maximumSubsequenceCount("babbabababababababa", "ba"), 63, 'Test 106');
test(maximumSubsequenceCount("aaabbbcccddd", "ad"), 12, 'Test 107');
test(maximumSubsequenceCount("abcdef", "fe"), 1, 'Test 108');
test(maximumSubsequenceCount("bbbbbbbbbb", "bb"), 55, 'Test 109');
test(maximumSubsequenceCount("bbbbbaaaaa", "ab"), 5, 'Test 110');
test(maximumSubsequenceCount("abcde", "ae"), 2, 'Test 111');
test(maximumSubsequenceCount("abracadabra", "ra"), 10, 'Test 112');
test(maximumSubsequenceCount("abcdefghij", "ae"), 2, 'Test 113');
test(maximumSubsequenceCount("aaabbbccc", "ab"), 12, 'Test 114');
test(maximumSubsequenceCount("abcdefghij", "aj"), 2, 'Test 115');
test(maximumSubsequenceCount("xyzzyxzyxzyxzyxzyxzyxzyx", "zx"), 43, 'Test 116');
test(maximumSubsequenceCount("mmnmmnmmn", "mn"), 18, 'Test 117');
test(maximumSubsequenceCount("aabbccddeeff", "ef"), 6, 'Test 118');
test(maximumSubsequenceCount("zzzzzzzz", "zz"), 36, 'Test 119');
test(maximumSubsequenceCount("ccccccc", "cc"), 28, 'Test 120');
test(maximumSubsequenceCount("abcabcabc", "bc"), 9, 'Test 121');
test(maximumSubsequenceCount("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "az"), 6, 'Test 122');
test(maximumSubsequenceCount("abcdefghij", "af"), 2, 'Test 123');
test(maximumSubsequenceCount("bbbbbaaaaa", "ba"), 30, 'Test 124');
test(maximumSubsequenceCount("xyzyxzyxzy", "yx"), 9, 'Test 125');
test(maximumSubsequenceCount("aabccbaa", "ac"), 8, 'Test 126');
test(maximumSubsequenceCount("abacabadabacaba", "ab"), 24, 'Test 127');
test(maximumSubsequenceCount("aabccccdddd", "cd"), 20, 'Test 128');
test(maximumSubsequenceCount("aaaaaaaaaa", "aa"), 55, 'Test 129');
test(maximumSubsequenceCount("aaaabbbb", "ab"), 20, 'Test 130');
test(maximumSubsequenceCount("aaaaaaaaaaaabbbbbbbbbbbb", "ab"), 156, 'Test 131');
test(maximumSubsequenceCount("abcdefghijklnmopqrstuvwxyz", "az"), 2, 'Test 132');
test(maximumSubsequenceCount("abcd", "da"), 1, 'Test 133');
test(maximumSubsequenceCount("abcdabcdabcd", "ad"), 9, 'Test 134');
test(maximumSubsequenceCount("lkjqwpmr", "qw"), 2, 'Test 135');
test(maximumSubsequenceCount("aabbaabbcc", "ab"), 16, 'Test 136');
test(maximumSubsequenceCount("abcabcabc", "ac"), 9, 'Test 137');
test(maximumSubsequenceCount("baabbaab", "ba"), 12, 'Test 138');

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
