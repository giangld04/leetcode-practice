// Test: 2825. Make String A Subsequence Using Cyclic Increments
// 153 test cases from LeetCodeDataset
// Run: node test.js

const { canMakeSubsequence } = require("./solution");

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

console.log("\n2825. Make String A Subsequence Using Cyclic Increments\n");

test(canMakeSubsequence("aaa", "a"), true, 'Test 1');
test(canMakeSubsequence("hello", "heo"), true, 'Test 2');
test(canMakeSubsequence("abcd", "bd"), true, 'Test 3');
test(canMakeSubsequence("zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz"), false, 'Test 4');
test(canMakeSubsequence("abacaba", "aaa"), true, 'Test 5');
test(canMakeSubsequence("xyz", "yza"), true, 'Test 6');
test(canMakeSubsequence("abc", "abc"), true, 'Test 7');
test(canMakeSubsequence("ab", "d"), false, 'Test 8');
test(canMakeSubsequence("az", "ba"), true, 'Test 9');
test(canMakeSubsequence("abcde", "aec"), false, 'Test 10');
test(canMakeSubsequence("azazaz", "zzz"), true, 'Test 11');
test(canMakeSubsequence("abcde", "ae"), true, 'Test 12');
test(canMakeSubsequence("aabbccddeeff", "abcdef"), true, 'Test 13');
test(canMakeSubsequence("abcde", "ace"), true, 'Test 14');
test(canMakeSubsequence("a", "b"), true, 'Test 15');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"), true, 'Test 16');
test(canMakeSubsequence("aabbcc", "abc"), true, 'Test 17');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "z"), true, 'Test 18');
test(canMakeSubsequence("aaa", "b"), true, 'Test 19');
test(canMakeSubsequence("abc", "acb"), false, 'Test 20');
test(canMakeSubsequence("zc", "ad"), true, 'Test 21');
test(canMakeSubsequence("abcxyz", "adz"), true, 'Test 22');
test(canMakeSubsequence("abc", "ad"), true, 'Test 23');
test(canMakeSubsequence("abcd", "dddd"), false, 'Test 24');
test(canMakeSubsequence("a", "a"), true, 'Test 25');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "za"), true, 'Test 26');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "gh"), true, 'Test 27');
test(canMakeSubsequence("mnopqrstuvwxyza", "mnopqr"), true, 'Test 28');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "adaceg"), false, 'Test 29');
test(canMakeSubsequence("acegikmoqsuwy", "abcdefghijklmnopqrstuvwxyz"), false, 'Test 30');
test(canMakeSubsequence("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", "abcabcabc"), true, 'Test 31');
test(canMakeSubsequence("a", "z"), false, 'Test 32');
test(canMakeSubsequence("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", "acegikmoqsuwy"), false, 'Test 33');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), false, 'Test 34');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyza", "abcdefghijklmnopqrstuvwxyza"), true, 'Test 35');
test(canMakeSubsequence("b", "a"), false, 'Test 36');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "op"), true, 'Test 37');
test(canMakeSubsequence("aaabbbcccdddeeefffggghhhiiiijjjjkkkkllllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz", "abcdefghijklmnopqrstuvwxyz"), true, 'Test 38');
test(canMakeSubsequence("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz", "xyzxyzxyz"), false, 'Test 39');
test(canMakeSubsequence("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), false, 'Test 40');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), true, 'Test 41');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "wx"), true, 'Test 42');
test(canMakeSubsequence("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), true, 'Test 43');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "acegikmoqsuwy"), true, 'Test 44');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "qr"), true, 'Test 45');
test(canMakeSubsequence("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), true, 'Test 46');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyzaaa", "abcdefghijklmnopqrstuvwxyz"), true, 'Test 47');
test(canMakeSubsequence("abczyxwvutsrqponmlkjihgfedcba", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), false, 'Test 48');
test(canMakeSubsequence("mnopqrstuvwxyza", "monp"), false, 'Test 49');
test(canMakeSubsequence("mnopqrstuvwxyza", "mno"), true, 'Test 50');
test(canMakeSubsequence("zyxwvutsrqponmlkjihgfedcba", "a"), true, 'Test 51');
test(canMakeSubsequence("abcabcabcabcabcabc", "accaaa"), false, 'Test 52');
test(canMakeSubsequence("abz", "abc"), false, 'Test 53');
test(canMakeSubsequence("abacabadabacaba", "abcd"), true, 'Test 54');
test(canMakeSubsequence("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), true, 'Test 55');
test(canMakeSubsequence("mnopqrstuvwxyza", "nopqrstuvwxyz"), true, 'Test 56');
test(canMakeSubsequence("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), true, 'Test 57');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "zxcvbnmlkjhgfedcba"), false, 'Test 58');
test(canMakeSubsequence("abcdabcdabcdabcdabcdabcdabcd", "dddddddddd"), true, 'Test 59');
test(canMakeSubsequence("mnopqrstuvwxyza", "nopqrstuvwy"), true, 'Test 60');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "zzz"), true, 'Test 61');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "zz"), true, 'Test 62');
test(canMakeSubsequence("zyxwvutsrqponmlkjihgfedcba", "mnopqrst"), false, 'Test 63');
test(canMakeSubsequence("aaaaabbbbbaaaaabbbbbaaaaabbbbb", "aaaaaabbbbb"), false, 'Test 64');
test(canMakeSubsequence("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), false, 'Test 65');
test(canMakeSubsequence("zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz"), false, 'Test 66');
test(canMakeSubsequence("abcdeffedcbaz", "zzzz"), false, 'Test 67');
test(canMakeSubsequence("ababababababababababababababab", "bababa"), true, 'Test 68');
test(canMakeSubsequence("mnopqrstuvwxyza", "mn"), true, 'Test 69');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyza"), false, 'Test 70');
test(canMakeSubsequence("abcdabcdabcd", "abdc"), true, 'Test 71');
test(canMakeSubsequence("mnopqrstuvwxyza", "mnopqrstu"), true, 'Test 72');
test(canMakeSubsequence("aaabbbccc", "abc"), true, 'Test 73');
test(canMakeSubsequence("zyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyx", "zyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyx"), true, 'Test 74');
test(canMakeSubsequence("bdfhjlnprtvxz", "abcdefghijklmnopqrstuvwxyz"), false, 'Test 75');
test(canMakeSubsequence("abcdeffedcba", "abcdef"), true, 'Test 76');
test(canMakeSubsequence("abcabcabcabcabcabcabcabc", "acbacbacbacbacbacbacbacbac"), false, 'Test 77');
test(canMakeSubsequence("mnopqrstuvwxyza", "mnopqrs"), true, 'Test 78');
test(canMakeSubsequence("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzz"), true, 'Test 79');
test(canMakeSubsequence("zzzzzzzzzzzzzzzzzzzzzzzzzzzz", "aaaaaa"), true, 'Test 80');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "ef"), true, 'Test 81');
test(canMakeSubsequence("abcdeffedcba", "ace"), true, 'Test 82');
test(canMakeSubsequence("abcabcabcabcabcabcabcabcabcabc", "aaa"), true, 'Test 83');
test(canMakeSubsequence("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), false, 'Test 84');
test(canMakeSubsequence("z", "a"), true, 'Test 85');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), false, 'Test 86');
test(canMakeSubsequence("xyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "ad"), false, 'Test 87');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyzaabcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), true, 'Test 88');
test(canMakeSubsequence("zyxwvutsrqponmlkjihgfedcba", "zaa"), false, 'Test 89');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "bd"), true, 'Test 90');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyzaabcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"), true, 'Test 91');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "zabc"), true, 'Test 92');
test(canMakeSubsequence("aaaabbbbccccddddaaaabbbbccccdddd", "abcdabcd"), true, 'Test 93');
test(canMakeSubsequence("abcxyz", "abcxyz"), true, 'Test 94');
test(canMakeSubsequence("abcde", "edcba"), false, 'Test 95');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), false, 'Test 96');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "mn"), true, 'Test 97');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "zzz"), false, 'Test 98');
test(canMakeSubsequence("mnopqrsmnopqrsmnopqrs", "mnopqrspqrsmn"), true, 'Test 99');
test(canMakeSubsequence("mnopqrstuvwxyza", "mnopqrstv"), true, 'Test 100');
test(canMakeSubsequence("zyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyx", "zyxzyxzyx"), true, 'Test 101');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "zzzzzzzzzz"), false, 'Test 102');
test(canMakeSubsequence("abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde", "abcdabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), false, 'Test 103');
test(canMakeSubsequence("mnopqrstuvwxyza", "mnopqrst"), true, 'Test 104');
test(canMakeSubsequence("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklmnopqrstuvwxyz"), true, 'Test 105');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"), true, 'Test 106');
test(canMakeSubsequence("aaaabbbbcccc", "abac"), true, 'Test 107');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "uv"), true, 'Test 108');
test(canMakeSubsequence("xyzz", "az"), true, 'Test 109');
test(canMakeSubsequence("mnopqrstuvwxyza", "mnop"), true, 'Test 110');
test(canMakeSubsequence("mnopqrstuvwxyzabcdefghijk", "mnopqrstuvwxyz"), true, 'Test 111');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), false, 'Test 112');
test(canMakeSubsequence("zzzzzzzzzzzzzzzzzzzz", "aaaaaaaaaa"), true, 'Test 113');
test(canMakeSubsequence("zyxwvutsrqponmlkjihgfedcba", "az"), true, 'Test 114');
test(canMakeSubsequence("abz", "acz"), true, 'Test 115');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), false, 'Test 116');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "kl"), true, 'Test 117');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyza", "abcdefghijklmnopqrstuvwxz"), false, 'Test 118');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyza", "abcdefghijklmnopqrstuvwxyz"), true, 'Test 119');
test(canMakeSubsequence("mnopqrstuvwxyza", "m"), true, 'Test 120');
test(canMakeSubsequence("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), true, 'Test 121');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "ij"), true, 'Test 122');
test(canMakeSubsequence("abcdexyz", "acz"), true, 'Test 123');
test(canMakeSubsequence("zzz", "aaa"), true, 'Test 124');
test(canMakeSubsequence("mnopqrstuvwxyza", "mnopqrstvw"), true, 'Test 125');
test(canMakeSubsequence("abcxyz", "zzz"), false, 'Test 126');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "ac"), true, 'Test 127');
test(canMakeSubsequence("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), false, 'Test 128');
test(canMakeSubsequence("zaaaaaaaaabcdezzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "ad"), true, 'Test 129');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyza", "abcdefghijklmnopqrstuvwxyzz"), false, 'Test 130');
test(canMakeSubsequence("aaaaazzzzzaaaaazzzzzaaaaazzzzz", "zzzzzaaaaazzzzz"), false, 'Test 131');
test(canMakeSubsequence("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", "adadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadad"), false, 'Test 132');
test(canMakeSubsequence("bxyz", "abcd"), false, 'Test 133');
test(canMakeSubsequence("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), false, 'Test 134');
test(canMakeSubsequence("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), false, 'Test 135');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "bdfhjlnprtvxz"), true, 'Test 136');
test(canMakeSubsequence("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklmnopqrstuvwxyza"), true, 'Test 137');
test(canMakeSubsequence("yzabcd", "ad"), true, 'Test 138');
test(canMakeSubsequence("abcabcabcabcabcabcabcabc", "aaabbbccc"), true, 'Test 139');
test(canMakeSubsequence("mnopqrstuvwxyza", ""), true, 'Test 140');
test(canMakeSubsequence("aaaabbbbccccddddeeeeffffgggghhhhiiii", "abcdefghi"), true, 'Test 141');
test(canMakeSubsequence("aaaabbbbcccc", "abc"), true, 'Test 142');
test(canMakeSubsequence("abacabadabacaba", "abc"), true, 'Test 143');
test(canMakeSubsequence("aaaabbbbcccc", "abcb"), false, 'Test 144');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "zabcdefghijklmnopqrstuvwxyz"), false, 'Test 145');
test(canMakeSubsequence("zyzzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyz", "zyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyz"), false, 'Test 146');
test(canMakeSubsequence("mnopqrstuvwxyza", "mnopq"), true, 'Test 147');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyza", "xyz"), true, 'Test 148');
test(canMakeSubsequence("abcdabcdabcdabcdabcdabcdabcdabcd", "abcdabcdabcd"), false, 'Test 149');
test(canMakeSubsequence("zyxwvutsrqponmlkjihgfedcba", "azbycxdwevfugthsisrjrqponmlkjihgfedcba"), false, 'Test 150');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "yz"), true, 'Test 151');
test(canMakeSubsequence("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), true, 'Test 152');
test(canMakeSubsequence("abcdefghijklmnopqrstuvwxyz", "st"), true, 'Test 153');

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
