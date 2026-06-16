// Test: 466. Count The Repetitions
// 108 test cases from LeetCodeDataset
// Run: node test.js

const { getMaxRepetitions } = require("./solution");

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

console.log("\n466. Count The Repetitions\n");

test(getMaxRepetitions("acb", 1, "acb", 1), 1, 'Test 1');
test(getMaxRepetitions("aaa", 3, "a", 1), 9, 'Test 2');
test(getMaxRepetitions("aabaacaabaab", 8, "aab", 1), 24, 'Test 3');
test(getMaxRepetitions("acb", 4, "ab", 2), 2, 'Test 4');
test(getMaxRepetitions("abcde", 2, "ace", 1), 2, 'Test 5');
test(getMaxRepetitions("banana", 10, "nan", 1), 10, 'Test 6');
test(getMaxRepetitions("abcdabcd", 5, "abc", 2), 5, 'Test 7');
test(getMaxRepetitions("aabbccddeeff", 5, "abcdef", 1), 5, 'Test 8');
test(getMaxRepetitions("zzzzzzzz", 1000, "zz", 100), 40, 'Test 9');
test(getMaxRepetitions("aabbcc", 1000, "abcabcabcabcabcabcabcabc", 50), 2, 'Test 10');
test(getMaxRepetitions("abcdefg", 500, "aceg", 100), 5, 'Test 11');
test(getMaxRepetitions("aabbccdd", 25, "abcdabcd", 2), 6, 'Test 12');
test(getMaxRepetitions("hello", 20, "lohel", 4), 4, 'Test 13');
test(getMaxRepetitions("pqrs", 100, "rqpqsr", 5), 5, 'Test 14');
test(getMaxRepetitions("abcdefg", 100, "aceg", 5), 20, 'Test 15');
test(getMaxRepetitions("zzzzz", 1000000, "z", 1), 5000000, 'Test 16');
test(getMaxRepetitions("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 100, "zyxwvutsrqponmlkjihgfedcba", 1), 3, 'Test 17');
test(getMaxRepetitions("zabzabczb", 10, "abc", 2), 5, 'Test 18');
test(getMaxRepetitions("xyzxyzxyz", 5, "xyz", 1), 15, 'Test 19');
test(getMaxRepetitions("abcdefghijklmnopqrstuvwxyz", 100, "zyxwvutsrqponmlkjihgfedcba", 50), 0, 'Test 20');
test(getMaxRepetitions("abcd", 100000, "dabc", 1000), 99, 'Test 21');
test(getMaxRepetitions("abcdef", 20, "fedcba", 1), 3, 'Test 22');
test(getMaxRepetitions("xyzxyz", 3, "xyzxyzxyz", 1), 2, 'Test 23');
test(getMaxRepetitions("hellohello", 10, "lohe", 1), 19, 'Test 24');
test(getMaxRepetitions("abcdefgh", 10, "aceg", 1), 10, 'Test 25');
test(getMaxRepetitions("xyzxyzxyz", 100, "xyzxyzxyz", 20), 5, 'Test 26');
test(getMaxRepetitions("xyz", 50000, "xzy", 10000), 2, 'Test 27');
test(getMaxRepetitions("abcdef", 15, "defabc", 3), 4, 'Test 28');
test(getMaxRepetitions("abcabcabcabcabcabcabcabc", 10, "abcabcabcabcabcabcabcabc", 1), 10, 'Test 29');
test(getMaxRepetitions("acb", 10, "acbacb", 1), 5, 'Test 30');
test(getMaxRepetitions("abcdefg", 10, "xyz", 1), 0, 'Test 31');
test(getMaxRepetitions("ababababab", 20, "abab", 5), 10, 'Test 32');
test(getMaxRepetitions("abcabcabcabcabc", 999, "abab", 125), 19, 'Test 33');
test(getMaxRepetitions("aaa", 10, "aa", 2), 7, 'Test 34');
test(getMaxRepetitions("mississippi", 100, "issi", 5), 20, 'Test 35');
test(getMaxRepetitions("aabbccddeeffgg", 20, "abcdefg", 2), 10, 'Test 36');
test(getMaxRepetitions("zzzzzzzzzz", 1000, "zz", 100), 50, 'Test 37');
test(getMaxRepetitions("qwertyuiop", 50, "qrp", 10), 5, 'Test 38');
test(getMaxRepetitions("xyzxyzxyz", 15, "zyxzyx", 1), 11, 'Test 39');
test(getMaxRepetitions("abcabcabc", 500, "cab", 250), 5, 'Test 40');
test(getMaxRepetitions("xyz", 5, "xz", 1), 5, 'Test 41');
test(getMaxRepetitions("abcabcabcabcabcabcabcabc", 10, "abc", 1), 80, 'Test 42');
test(getMaxRepetitions("xyz", 1000000, "xyzz", 1000), 500, 'Test 43');
test(getMaxRepetitions("hello", 10, "heo", 1), 10, 'Test 44');
test(getMaxRepetitions("abcabcabcabc", 12, "abcabc", 2), 12, 'Test 45');
test(getMaxRepetitions("abacabadabacaba", 200, "abad", 10), 20, 'Test 46');
test(getMaxRepetitions("xyz", 10, "yxz", 1), 5, 'Test 47');
test(getMaxRepetitions("abacabadaba", 1000, "abad", 250), 4, 'Test 48');
test(getMaxRepetitions("abababa", 10, "aba", 2), 10, 'Test 49');
test(getMaxRepetitions("abcd", 50, "bd", 10), 5, 'Test 50');
test(getMaxRepetitions("abcde", 1, "edcba", 1), 0, 'Test 51');
test(getMaxRepetitions("zabzabczabc", 10, "abc", 3), 6, 'Test 52');
test(getMaxRepetitions("aaaaaaab", 1000, "aab", 100), 10, 'Test 53');
test(getMaxRepetitions("abcdef", 6, "fed", 1), 2, 'Test 54');
test(getMaxRepetitions("aabbcc", 10, "abc", 2), 5, 'Test 55');
test(getMaxRepetitions("ababcabc", 10, "abc", 2), 10, 'Test 56');
test(getMaxRepetitions("aaaa", 1000000, "aa", 100000), 20, 'Test 57');
test(getMaxRepetitions("abcdef", 999999, "fabcde", 100000), 9, 'Test 58');
test(getMaxRepetitions("aaaaa", 100000, "aa", 10000), 25, 'Test 59');
test(getMaxRepetitions("abccbaabccba", 20, "abc", 4), 10, 'Test 60');
test(getMaxRepetitions("ababababababababababab", 100, "baba", 25), 21, 'Test 61');
test(getMaxRepetitions("aeiou", 10000, "aeiouaeiou", 500), 10, 'Test 62');
test(getMaxRepetitions("mississippi", 3, "issi", 1), 3, 'Test 63');
test(getMaxRepetitions("abcdabcdabcd", 3, "abcd", 1), 9, 'Test 64');
test(getMaxRepetitions("qwertyuiop", 50, "qo", 10), 5, 'Test 65');
test(getMaxRepetitions("abcdefghijklmnopqrstuvwxyz", 1000, "abcdefghijklmnopqrstuvwxyz", 10), 100, 'Test 66');
test(getMaxRepetitions("abcdabcdabcdabcd", 20, "abc", 5), 16, 'Test 67');
test(getMaxRepetitions("abcd", 100, "dabc", 50), 1, 'Test 68');
test(getMaxRepetitions("abababa", 1000, "aba", 10), 200, 'Test 69');
test(getMaxRepetitions("banana", 20, "ban", 5), 4, 'Test 70');
test(getMaxRepetitions("xyzabc", 5, "cab", 2), 2, 'Test 71');
test(getMaxRepetitions("aaa", 500, "a", 100), 15, 'Test 72');
test(getMaxRepetitions("xyxzyxyxyxy", 2, "xyz", 1), 2, 'Test 73');
test(getMaxRepetitions("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1000000, "zzz", 100000), 113, 'Test 74');
test(getMaxRepetitions("ababab", 5, "ab", 2), 7, 'Test 75');
test(getMaxRepetitions("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 10, "abcdefghijklmnopqrstuvwxyz", 1), 10, 'Test 76');
test(getMaxRepetitions("aabbcc", 3, "abc", 1), 3, 'Test 77');
test(getMaxRepetitions("ababcabcabc", 6, "abcabc", 1), 9, 'Test 78');
test(getMaxRepetitions("abcdabcdabcd", 500, "abcd", 125), 12, 'Test 79');
test(getMaxRepetitions("aabbccddeeff", 1000, "abcdef", 10), 100, 'Test 80');
test(getMaxRepetitions("abcabcabcabc", 10, "abcabc", 1), 20, 'Test 81');
test(getMaxRepetitions("aaaabbbbcccc", 10, "abccba", 2), 2, 'Test 82');
test(getMaxRepetitions("abababab", 100, "aba", 15), 13, 'Test 83');
test(getMaxRepetitions("abcdefghij", 50, "adgj", 5), 10, 'Test 84');
test(getMaxRepetitions("mississippi", 10, "issi", 1), 10, 'Test 85');
test(getMaxRepetitions("aaaaaa", 1000000, "aa", 100000), 30, 'Test 86');
test(getMaxRepetitions("abcd", 10000, "dcba", 1000), 3, 'Test 87');
test(getMaxRepetitions("aaaaaaaa", 100000, "aa", 10000), 40, 'Test 88');
test(getMaxRepetitions("ab", 1000000, "a", 500000), 2, 'Test 89');
test(getMaxRepetitions("aaaabaabaabaaaaaa", 5, "aab", 1), 15, 'Test 90');
test(getMaxRepetitions("xyzabc", 5, "xz", 1), 5, 'Test 91');
test(getMaxRepetitions("abababa", 7, "baab", 1), 7, 'Test 92');
test(getMaxRepetitions("banana", 10, "an", 2), 10, 'Test 93');
test(getMaxRepetitions("abcabcabcabc", 500, "bcab", 125), 8, 'Test 94');
test(getMaxRepetitions("abcdabcd", 100, "cdab", 10), 19, 'Test 95');
test(getMaxRepetitions("abcabcabc", 1000, "abcabc", 200), 7, 'Test 96');
test(getMaxRepetitions("abcabcabc", 1000, "abc", 100), 30, 'Test 97');
test(getMaxRepetitions("aaa", 1000000, "a", 1), 3000000, 'Test 98');
test(getMaxRepetitions("abcdefghijklmnopqrstuvwxyz", 10000, "zyxwvutsrqponmlkjihgfedcba", 5000), 0, 'Test 99');
test(getMaxRepetitions("zzzzzzzzzz", 1000, "z", 100), 100, 'Test 100');
test(getMaxRepetitions("abcdefghijklmnopqrstuvwxyz", 1000, "zyxwvutsrqponmlkjihgfedcba", 10), 3, 'Test 101');
test(getMaxRepetitions("mnopqrstuvwxyz", 10000, "mnop", 2000), 5, 'Test 102');
test(getMaxRepetitions("abcdabcdabcdabcd", 500, "dcbadcbadcbadcba", 100), 1, 'Test 103');
test(getMaxRepetitions("abcabcabcabc", 100, "abcabc", 5), 40, 'Test 104');
test(getMaxRepetitions("abab", 3, "ab", 2), 3, 'Test 105');
test(getMaxRepetitions("abacabacabacabac", 1000, "acabacabacabacab", 250), 3, 'Test 106');
test(getMaxRepetitions("baba", 20, "ab", 5), 7, 'Test 107');
test(getMaxRepetitions("babccbababcabbbabcbbabbbbabcbbb", 100, "babccbabab", 10), 10, 'Test 108');

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
