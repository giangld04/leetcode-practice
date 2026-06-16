// Test: 686. Repeated String Match
// 144 test cases from LeetCodeDataset
// Run: node test.js

const { repeatedStringMatch } = require("./solution");

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

console.log("\n686. Repeated String Match\n");

test(repeatedStringMatch("abab", "abababab"), 2, 'Test 1');
test(repeatedStringMatch("ab", "aba"), 2, 'Test 2');
test(repeatedStringMatch("abc", "def"), -1, 'Test 3');
test(repeatedStringMatch("abc", "abcabc"), 2, 'Test 4');
test(repeatedStringMatch("aaaaaaaaaaaaaaaaaaaaaab", "ba"), 2, 'Test 5');
test(repeatedStringMatch("abcd", "cdabcdab"), 3, 'Test 6');
test(repeatedStringMatch("abc", "ac"), -1, 'Test 7');
test(repeatedStringMatch("abcd", "abcdabcd"), 2, 'Test 8');
test(repeatedStringMatch("xyz", "xyzxyzxyz"), 3, 'Test 9');
test(repeatedStringMatch("abc", "abcabcabc"), 3, 'Test 10');
test(repeatedStringMatch("abc", "bca"), 2, 'Test 11');
test(repeatedStringMatch("abc", "cab"), 2, 'Test 12');
test(repeatedStringMatch("a", "a"), 1, 'Test 13');
test(repeatedStringMatch("a", "aa"), 2, 'Test 14');
test(repeatedStringMatch("abc", "acbac"), -1, 'Test 15');
test(repeatedStringMatch("aaaa", "aa"), 1, 'Test 16');
test(repeatedStringMatch("abcd", "dddd"), -1, 'Test 17');
test(repeatedStringMatch("hello", "ohell"), 2, 'Test 18');
test(repeatedStringMatch("abcd", "cabd"), -1, 'Test 19');
test(repeatedStringMatch("abcd", "dabcabcdabc"), -1, 'Test 20');
test(repeatedStringMatch("a", "b"), -1, 'Test 21');
test(repeatedStringMatch("xyz", "xyzyzyzx"), -1, 'Test 22');
test(repeatedStringMatch("abc", "cabcabca"), 4, 'Test 23');
test(repeatedStringMatch("abcd", "dabcdabcdabcdabc"), 5, 'Test 24');
test(repeatedStringMatch("qrstuv", "uvqrstuvqrstuv"), 3, 'Test 25');
test(repeatedStringMatch("abc", "abcabcabcabcabcabcabcabcabcabc"), 10, 'Test 26');
test(repeatedStringMatch("abcd", "dcba"), -1, 'Test 27');
test(repeatedStringMatch("sequence", "encesequ"), 2, 'Test 28');
test(repeatedStringMatch("hello", "lohellohel"), 3, 'Test 29');
test(repeatedStringMatch("abcabcabc", "cababcabcab"), -1, 'Test 30');
test(repeatedStringMatch("hello", "lohelohello"), -1, 'Test 31');
test(repeatedStringMatch("abcd", "cdabc"), 2, 'Test 32');
test(repeatedStringMatch("repeat", "peatreprea"), -1, 'Test 33');
test(repeatedStringMatch("ab", "babababababab"), 7, 'Test 34');
test(repeatedStringMatch("abcdefg", "efgabcdefgabc"), 3, 'Test 35');
test(repeatedStringMatch("abcde", "cdeabcd"), 2, 'Test 36');
test(repeatedStringMatch("aabb", "bbaabbaa"), 3, 'Test 37');
test(repeatedStringMatch("zzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 11, 'Test 38');
test(repeatedStringMatch("abcdefg", "efgabcdefgabcd"), 3, 'Test 39');
test(repeatedStringMatch("ab", "babababab"), 5, 'Test 40');
test(repeatedStringMatch("abcde", "cdeabcdeabcde"), 3, 'Test 41');
test(repeatedStringMatch("abcd", "abcdabcdabcdabcdabcdab"), 6, 'Test 42');
test(repeatedStringMatch("abcabc", "bcabcabc"), 2, 'Test 43');
test(repeatedStringMatch("algorithm", "rithmalgorith"), 2, 'Test 44');
test(repeatedStringMatch("unique", "queuniqueuni"), 3, 'Test 45');
test(repeatedStringMatch("xyz", "xyzxyzxyzxyzxyz"), 5, 'Test 46');
test(repeatedStringMatch("abcd", "dabcdabcdabc"), 4, 'Test 47');
test(repeatedStringMatch("zzz", "zzzzzzzz"), 3, 'Test 48');
test(repeatedStringMatch("xyz", "yzxyzxyzyx"), -1, 'Test 49');
test(repeatedStringMatch("aaa", "aaaaaaaaaaaa"), 4, 'Test 50');
test(repeatedStringMatch("abcdefg", "defgabcdefgab"), 3, 'Test 51');
test(repeatedStringMatch("aaaab", "babaaabaaaab"), -1, 'Test 52');
test(repeatedStringMatch("abcdefg", "fgabcdefgabc"), 3, 'Test 53');
test(repeatedStringMatch("repeat", "atrepeatrepeatrep"), 4, 'Test 54');
test(repeatedStringMatch("abcde", "cdeabcdea"), 3, 'Test 55');
test(repeatedStringMatch("uvwxy", "xyuvwxyuvwx"), 3, 'Test 56');
test(repeatedStringMatch("aaaa", "aaaaaaaaa"), 3, 'Test 57');
test(repeatedStringMatch("ab", "babababababababab"), 9, 'Test 58');
test(repeatedStringMatch("repeat", "atrepeatrep"), 3, 'Test 59');
test(repeatedStringMatch("aabbcc", "ccccaabbaabbcccc"), -1, 'Test 60');
test(repeatedStringMatch("test", "sttestte"), 3, 'Test 61');
test(repeatedStringMatch("ab", "bababababa"), 6, 'Test 62');
test(repeatedStringMatch("abcdef", "defabcdeabcf"), -1, 'Test 63');
test(repeatedStringMatch("zyxwv", "wvzyxwvzyxwv"), 3, 'Test 64');
test(repeatedStringMatch("abac", "acabacaba"), 3, 'Test 65');
test(repeatedStringMatch("abcdef", "defabcdefabc"), 3, 'Test 66');
test(repeatedStringMatch("ababab", "babababababab"), 3, 'Test 67');
test(repeatedStringMatch("aabb", "bbaabbbaab"), -1, 'Test 68');
test(repeatedStringMatch("zzz", "zzzzzzzzzzzzzzzzzzzz"), 7, 'Test 69');
test(repeatedStringMatch("complex", "lexcomplexc"), 3, 'Test 70');
test(repeatedStringMatch("abcde", "eabcdeabcdeabcd"), 4, 'Test 71');
test(repeatedStringMatch("abcd", "abcdabcdabcdabcdabcd"), 5, 'Test 72');
test(repeatedStringMatch("abcdefg", "fgabcdefgabcde"), 3, 'Test 73');
test(repeatedStringMatch("abcde", "cdecdecdec"), -1, 'Test 74');
test(repeatedStringMatch("pattern", "ternpatternpat"), 3, 'Test 75');
test(repeatedStringMatch("abcabc", "cabcabcabc"), 2, 'Test 76');
test(repeatedStringMatch("ab", "babababa"), 5, 'Test 77');
test(repeatedStringMatch("xyz", "zzzzxyzzz"), -1, 'Test 78');
test(repeatedStringMatch("abcd", "ddddddddddddddddddd"), -1, 'Test 79');
test(repeatedStringMatch("aabb", "bbaabbbaabb"), -1, 'Test 80');
test(repeatedStringMatch("abac", "cabacaba"), 3, 'Test 81');
test(repeatedStringMatch("xyz", "zyxzyxzyxzyx"), -1, 'Test 82');
test(repeatedStringMatch("pattern", "ternpatte"), 2, 'Test 83');
test(repeatedStringMatch("test", "sttesttest"), 3, 'Test 84');
test(repeatedStringMatch("abcd", "cdabcdabcdabcdab"), 5, 'Test 85');
test(repeatedStringMatch("abcabc", "cabcabcabcabcab"), 3, 'Test 86');
test(repeatedStringMatch("xyz", "xyzxyzxyzxyz"), 4, 'Test 87');
test(repeatedStringMatch("abcd", "dddddddd"), -1, 'Test 88');
test(repeatedStringMatch("abcd", "cdabcda"), 3, 'Test 89');
test(repeatedStringMatch("abc", "bcabcabc"), 3, 'Test 90');
test(repeatedStringMatch("ace", "aceaceaceace"), 4, 'Test 91');
test(repeatedStringMatch("xyzxyz", "zyxzyxzyxzyxzyxzyxzyx"), -1, 'Test 92');
test(repeatedStringMatch("abc", "cababc"), -1, 'Test 93');
test(repeatedStringMatch("abcdefgh", "habcdefghabc"), 3, 'Test 94');
test(repeatedStringMatch("a", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 40, 'Test 95');
test(repeatedStringMatch("abcabcabc", "cccc"), -1, 'Test 96');
test(repeatedStringMatch("abcd", "dabcdabc"), 3, 'Test 97');
test(repeatedStringMatch("mnopqr", "qrmonpqrmon"), -1, 'Test 98');
test(repeatedStringMatch("xyzabc", "bcxyzabcxy"), 3, 'Test 99');
test(repeatedStringMatch("pattern", "ternpattern"), 2, 'Test 100');
test(repeatedStringMatch("abcabc", "cabcabcab"), 2, 'Test 101');
test(repeatedStringMatch("unique", "niqueuniq"), 2, 'Test 102');
test(repeatedStringMatch("substring", "stringsubstr"), 2, 'Test 103');
test(repeatedStringMatch("mnop", "onmnoponmnop"), -1, 'Test 104');
test(repeatedStringMatch("abcdefg", "efgabcdefgabcdefgabcdefg"), 4, 'Test 105');
test(repeatedStringMatch("abcdabcd", "cdabcdabcdabcd"), 2, 'Test 106');
test(repeatedStringMatch("ab", "bababababab"), 6, 'Test 107');
test(repeatedStringMatch("abcabc", "cabcabcabca"), 3, 'Test 108');
test(repeatedStringMatch("abcd", "dcbaabcdabcda"), -1, 'Test 109');
test(repeatedStringMatch("ab", "ababababab"), 5, 'Test 110');
test(repeatedStringMatch("abcdabcdabcd", "dabcdabcdabc"), 2, 'Test 111');
test(repeatedStringMatch("xyzyzyz", "zyzyzyzyzyzy"), -1, 'Test 112');
test(repeatedStringMatch("abcde", "eabcdeabcd"), 3, 'Test 113');
test(repeatedStringMatch("a", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 32, 'Test 114');
test(repeatedStringMatch("a", "abababababababab"), -1, 'Test 115');
test(repeatedStringMatch("abcde", "deabcdeabcdeabcdeabcd"), 5, 'Test 116');
test(repeatedStringMatch("aaaa", "aaaaaaaaaa"), 3, 'Test 117');
test(repeatedStringMatch("pattern", "ernpatternpatt"), 3, 'Test 118');
test(repeatedStringMatch("abcdef", "defabcdeabc"), -1, 'Test 119');
test(repeatedStringMatch("abcdefabcdef", "defabcdefabc"), 2, 'Test 120');
test(repeatedStringMatch("abcdefgh", "fghabcdefgha"), 3, 'Test 121');
test(repeatedStringMatch("a", "aaaaaaaaaaaaa"), 13, 'Test 122');
test(repeatedStringMatch("abcdef", "defabcde"), 2, 'Test 123');
test(repeatedStringMatch("xy", "yxyxyxyxyxyxyx"), 8, 'Test 124');
test(repeatedStringMatch("abcdeabcde", "cdecdecdecdec"), -1, 'Test 125');
test(repeatedStringMatch("abcdefgabcdefg", "fgabcdefgabcdefgabc"), 2, 'Test 126');
test(repeatedStringMatch("ababab", "bababa"), 2, 'Test 127');
test(repeatedStringMatch("abcabcabc", "bcabcabcabcabc"), 2, 'Test 128');
test(repeatedStringMatch("abcde", "eabcdeabcdeabc"), 4, 'Test 129');
test(repeatedStringMatch("abcdef", "fedcbafedcba"), -1, 'Test 130');
test(repeatedStringMatch("aaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 19, 'Test 131');
test(repeatedStringMatch("abababa", "babababababab"), -1, 'Test 132');
test(repeatedStringMatch("ab", ""), 0, 'Test 133');
test(repeatedStringMatch("abc", "cba"), -1, 'Test 134');
test(repeatedStringMatch("abcde", "deabcdeabc"), 3, 'Test 135');
test(repeatedStringMatch("abab", "babbababbababbababbababbababbaba"), -1, 'Test 136');
test(repeatedStringMatch("xyzxyz", "zyxzyxzyxzyxzyxzyx"), -1, 'Test 137');
test(repeatedStringMatch("abcabcabc", "abcabcabcabcabcabcabcabc"), 3, 'Test 138');
test(repeatedStringMatch("xy", "yxyxyxyx"), 5, 'Test 139');
test(repeatedStringMatch("repeat", "peatrepeatre"), 3, 'Test 140');
test(repeatedStringMatch("hello", "hellohellohello"), 3, 'Test 141');
test(repeatedStringMatch("abc", "cabcabcabcabcab"), 6, 'Test 142');
test(repeatedStringMatch("abc", "cbaabcab"), -1, 'Test 143');
test(repeatedStringMatch("xyz", "zyxzyxzyx"), -1, 'Test 144');

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
