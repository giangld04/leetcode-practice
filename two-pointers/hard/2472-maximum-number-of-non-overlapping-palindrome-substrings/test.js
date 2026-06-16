// Test: 2472. Maximum Number Of Non Overlapping Palindrome Substrings
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { maxPalindromes } = require("./solution");

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

console.log("\n2472. Maximum Number Of Non Overlapping Palindrome Substrings\n");

test(maxPalindromes("racecar", 2), 1, 'Test 1');
test(maxPalindromes("mnoonm", 2), 1, 'Test 2');
test(maxPalindromes("zzzzzz", 1), 6, 'Test 3');
test(maxPalindromes("abcde", 3), 0, 'Test 4');
test(maxPalindromes("abcdeedcba", 2), 1, 'Test 5');
test(maxPalindromes("zz", 1), 2, 'Test 6');
test(maxPalindromes("adbcda", 2), 0, 'Test 7');
test(maxPalindromes("", 1), 0, 'Test 8');
test(maxPalindromes("abcde", 1), 5, 'Test 9');
test(maxPalindromes("aaaaa", 2), 2, 'Test 10');
test(maxPalindromes("racecar", 3), 1, 'Test 11');
test(maxPalindromes("abbaeaeabba", 3), 3, 'Test 12');
test(maxPalindromes("abbaabba", 3), 2, 'Test 13');
test(maxPalindromes("noonhighnoon", 4), 2, 'Test 14');
test(maxPalindromes("abacdfgdcaba", 3), 2, 'Test 15');
test(maxPalindromes("aaaa", 2), 2, 'Test 16');
test(maxPalindromes("a", 1), 1, 'Test 17');
test(maxPalindromes("abcdedcba", 5), 1, 'Test 18');
test(maxPalindromes("racecarannakayak", 3), 3, 'Test 19');
test(maxPalindromes("abcba", 5), 1, 'Test 20');
test(maxPalindromes("abaccdbbd", 3), 2, 'Test 21');
test(maxPalindromes("abbaeae", 2), 2, 'Test 22');
test(maxPalindromes("z", 1), 1, 'Test 23');
test(maxPalindromes("aaabaaaabaaaa", 5), 2, 'Test 24');
test(maxPalindromes("levellevellevel", 5), 3, 'Test 25');
test(maxPalindromes("abcabcabcabc", 3), 0, 'Test 26');
test(maxPalindromes("ababababa", 3), 3, 'Test 27');
test(maxPalindromes("abcbaabccba", 3), 2, 'Test 28');
test(maxPalindromes("level", 5), 1, 'Test 29');
test(maxPalindromes("xyxxyxyxyx", 1), 10, 'Test 30');
test(maxPalindromes("aabbaaabbbaaaa", 2), 6, 'Test 31');
test(maxPalindromes("ababababababab", 2), 4, 'Test 32');
test(maxPalindromes("rotorreferredder", 4), 3, 'Test 33');
test(maxPalindromes("popopopopopop", 3), 4, 'Test 34');
test(maxPalindromes("abaaaaba", 4), 1, 'Test 35');
test(maxPalindromes("xyxzyzyzyxzyx", 3), 3, 'Test 36');
test(maxPalindromes("madamimadam", 2), 3, 'Test 37');
test(maxPalindromes("aaaaaaaaaaaaaaaaaa", 10), 1, 'Test 38');
test(maxPalindromes("abbaabbaabba", 4), 3, 'Test 39');
test(maxPalindromes("aabbccddeeff", 2), 6, 'Test 40');
test(maxPalindromes("rotor", 5), 1, 'Test 41');
test(maxPalindromes("abcddcbaabcddcba", 6), 2, 'Test 42');
test(maxPalindromes("palindromemordnilap", 6), 1, 'Test 43');
test(maxPalindromes("aabbccddeeefffggghhhiii", 4), 0, 'Test 44');
test(maxPalindromes("xyxzyzyzxzyxzyx", 3), 3, 'Test 45');
test(maxPalindromes("aaaaaaaabaaaa", 5), 2, 'Test 46');
test(maxPalindromes("levelracecaraabba", 4), 3, 'Test 47');
test(maxPalindromes("racecarannakayak", 5), 2, 'Test 48');
test(maxPalindromes("abccbaabccba", 3), 2, 'Test 49');
test(maxPalindromes("abcabcabcabcabcabcabc", 3), 0, 'Test 50');
test(maxPalindromes("abcdedcbaedcbba", 5), 1, 'Test 51');
test(maxPalindromes("noonnoonnoon", 3), 3, 'Test 52');
test(maxPalindromes("abbaaccddccaaabbbcccdd", 3), 5, 'Test 53');
test(maxPalindromes("abcbabcba", 5), 1, 'Test 54');
test(maxPalindromes("aabbabbaaabbabba", 4), 3, 'Test 55');
test(maxPalindromes("abbaaccddccbaabba", 3), 3, 'Test 56');
test(maxPalindromes("abbaacccbaaabbcc", 3), 3, 'Test 57');
test(maxPalindromes("civiccivic", 4), 2, 'Test 58');
test(maxPalindromes("aaabaaaacaaaaaa", 3), 4, 'Test 59');
test(maxPalindromes("abracadabra", 3), 1, 'Test 60');
test(maxPalindromes("abcdcbaabcdcba", 5), 2, 'Test 61');
test(maxPalindromes("xyzyzyzyzyzyzyzy", 2), 5, 'Test 62');
test(maxPalindromes("madamracecarlevel", 5), 3, 'Test 63');
test(maxPalindromes("xyxzyzyzyzxzyzyx", 3), 5, 'Test 64');
test(maxPalindromes("bananaabacaxxx", 3), 3, 'Test 65');
test(maxPalindromes("noonnoonnoon", 4), 3, 'Test 66');
test(maxPalindromes("abcdefghij", 3), 0, 'Test 67');
test(maxPalindromes("zzzzyyyyxxxx", 4), 3, 'Test 68');
test(maxPalindromes("aaaabbbbccccdddd", 4), 4, 'Test 69');
test(maxPalindromes("civicracecardeified", 3), 3, 'Test 70');
test(maxPalindromes("aabbccddeeffgg", 2), 7, 'Test 71');
test(maxPalindromes("madamimadam", 5), 2, 'Test 72');
test(maxPalindromes("aaaabaaaabaaaaabaaabaaa", 2), 9, 'Test 73');
test(maxPalindromes("racecar", 6), 1, 'Test 74');
test(maxPalindromes("xyxxyxyxyxyx", 2), 4, 'Test 75');
test(maxPalindromes("abcbabcba", 3), 2, 'Test 76');
test(maxPalindromes("abcabcabcabc", 1), 12, 'Test 77');
test(maxPalindromes("abcdefgfedcba", 7), 1, 'Test 78');
test(maxPalindromes("mamadadadadammadam", 3), 5, 'Test 79');
test(maxPalindromes("madamimadam", 3), 3, 'Test 80');
test(maxPalindromes("babaddabba", 3), 2, 'Test 81');
test(maxPalindromes("aabbabaaaabbabaab", 3), 4, 'Test 82');
test(maxPalindromes("babbbabbbab", 3), 3, 'Test 83');
test(maxPalindromes("aabaaaabbbaaa", 3), 4, 'Test 84');
test(maxPalindromes("aabbaabbaaabbbaabbaab", 3), 4, 'Test 85');
test(maxPalindromes("abccbaabc", 4), 1, 'Test 86');
test(maxPalindromes("abracadabra", 5), 0, 'Test 87');
test(maxPalindromes("abbaabbaabba", 2), 5, 'Test 88');
test(maxPalindromes("aaaaaabbbbbbaaaaaabbbbb", 5), 4, 'Test 89');
test(maxPalindromes("abcbaabababaabcba", 3), 4, 'Test 90');
test(maxPalindromes("abcabcabc", 2), 0, 'Test 91');
test(maxPalindromes("abccbaabcabcabcabcba", 5), 2, 'Test 92');
test(maxPalindromes("abccbaabcba", 5), 2, 'Test 93');
test(maxPalindromes("mississippi", 3), 2, 'Test 94');
test(maxPalindromes("abbaabbabbaabb", 2), 6, 'Test 95');
test(maxPalindromes("abcdefedcba", 5), 1, 'Test 96');
test(maxPalindromes("abcdefghihgfedcba", 7), 1, 'Test 97');
test(maxPalindromes("noonmoonnoonmoon", 4), 2, 'Test 98');
test(maxPalindromes("abcdefedcbafedcbabcdef", 5), 2, 'Test 99');
test(maxPalindromes("abbaabba", 2), 3, 'Test 100');
test(maxPalindromes("deeeeinedede", 4), 2, 'Test 101');
test(maxPalindromes("abcdedcba", 4), 1, 'Test 102');
test(maxPalindromes("aabbccddeeeffgg", 2), 7, 'Test 103');
test(maxPalindromes("abcdedcbaabacdfgdcaba", 5), 1, 'Test 104');
test(maxPalindromes("zzzzyyyxxxwwvvuuttssrrqqppoonnmmlkkjjiihhggffeeddccbbaaa", 4), 1, 'Test 105');
test(maxPalindromes("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 2), 26, 'Test 106');
test(maxPalindromes("aaaaabbbaaaaa", 4), 3, 'Test 107');
test(maxPalindromes("abacabadabacaba", 4), 2, 'Test 108');
test(maxPalindromes("madamimadam", 4), 2, 'Test 109');

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
