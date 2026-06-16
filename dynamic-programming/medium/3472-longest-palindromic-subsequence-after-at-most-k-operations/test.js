// Test: 3472. Longest Palindromic Subsequence After At Most K Operations
// 153 test cases from LeetCodeDataset
// Run: node test.js

const { longestPalindromicSubsequence } = require("./solution");

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

console.log("\n3472. Longest Palindromic Subsequence After At Most K Operations\n");

test(longestPalindromicSubsequence("zxy", 1), 3, 'Test 1');
test(longestPalindromicSubsequence("a", 5), 1, 'Test 2');
test(longestPalindromicSubsequence("abced", 2), 3, 'Test 3');
test(longestPalindromicSubsequence("abcdefghijklmnopqrstuvwxyz", 25), 14, 'Test 4');
test(longestPalindromicSubsequence("zzzzz", 1), 5, 'Test 5');
test(longestPalindromicSubsequence("abcdeedcba", 5), 10, 'Test 6');
test(longestPalindromicSubsequence("zzzzz", 10), 5, 'Test 7');
test(longestPalindromicSubsequence("abcba", 0), 5, 'Test 8');
test(longestPalindromicSubsequence("aaazzz", 4), 6, 'Test 9');
test(longestPalindromicSubsequence("abcdef", 3), 3, 'Test 10');
test(longestPalindromicSubsequence("adadd", 2), 3, 'Test 11');
test(longestPalindromicSubsequence("mamad", 3), 3, 'Test 12');
test(longestPalindromicSubsequence("zyxwvutsrqponmlkjihgfedcba", 200), 26, 'Test 13');
test(longestPalindromicSubsequence("xyz", 1), 2, 'Test 14');
test(longestPalindromicSubsequence("abba", 1), 4, 'Test 15');
test(longestPalindromicSubsequence("abcdedcba", 0), 9, 'Test 16');
test(longestPalindromicSubsequence("aabaa", 2), 5, 'Test 17');
test(longestPalindromicSubsequence("mnopqr", 10), 6, 'Test 18');
test(longestPalindromicSubsequence("a", 0), 1, 'Test 19');
test(longestPalindromicSubsequence("abcdefg", 3), 3, 'Test 20');
test(longestPalindromicSubsequence("abcdabcdabcd", 6), 11, 'Test 21');
test(longestPalindromicSubsequence("a", 1), 1, 'Test 22');
test(longestPalindromicSubsequence("abcdedcba", 5), 9, 'Test 23');
test(longestPalindromicSubsequence("zzzzzzzzzz", 0), 10, 'Test 24');
test(longestPalindromicSubsequence("zzzzzzzzzzzzzzzzzzzz", 100), 20, 'Test 25');
test(longestPalindromicSubsequence("racecar", 10), 7, 'Test 26');
test(longestPalindromicSubsequence("zzyzxzyzxzyzxzyzxzyz", 30), 20, 'Test 27');
test(longestPalindromicSubsequence("abcdefghijklmnopqrstuvwxyzz", 50), 20, 'Test 28');
test(longestPalindromicSubsequence("aaaabbbb", 5), 8, 'Test 29');
test(longestPalindromicSubsequence("abcabcabcabcabcabcabcabcabcabc", 25), 30, 'Test 30');
test(longestPalindromicSubsequence("aaaaabbbbbcccc", 5), 10, 'Test 31');
test(longestPalindromicSubsequence("aaaaabbbbbaaaa", 50), 14, 'Test 32');
test(longestPalindromicSubsequence("aaaaabbbbbaaaaa", 10), 15, 'Test 33');
test(longestPalindromicSubsequence("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba", 180), 51, 'Test 34');
test(longestPalindromicSubsequence("level", 5), 5, 'Test 35');
test(longestPalindromicSubsequence("racecar", 5), 7, 'Test 36');
test(longestPalindromicSubsequence("abcdefgabcdefgabcdefgabcdefg", 10), 17, 'Test 37');
test(longestPalindromicSubsequence("abcdedcba", 1), 9, 'Test 38');
test(longestPalindromicSubsequence("qwertyuioplkjhgfdsazxcvbnmqwertyuioplkjhgfdsazxcvb", 100), 47, 'Test 39');
test(longestPalindromicSubsequence("abxyzabcxyzabcxyz", 25), 17, 'Test 40');
test(longestPalindromicSubsequence("level", 1), 5, 'Test 41');
test(longestPalindromicSubsequence("abcba", 1), 5, 'Test 42');
test(longestPalindromicSubsequence("ababababababababababababababababababab", 75), 38, 'Test 43');
test(longestPalindromicSubsequence("abcdefgxyzzyxgfedcba", 15), 20, 'Test 44');
test(longestPalindromicSubsequence("refer", 0), 5, 'Test 45');
test(longestPalindromicSubsequence("aabbccddeeffggzzzyyxxwwvvuuttsrqponmlkjihgfedcba", 100), 47, 'Test 46');
test(longestPalindromicSubsequence("palindrome", 15), 9, 'Test 47');
test(longestPalindromicSubsequence("amanaplanacanalpanama", 100), 21, 'Test 48');
test(longestPalindromicSubsequence("qwertyuiopasdfghjklzxcvbnm", 50), 23, 'Test 49');
test(longestPalindromicSubsequence("aaaabbbbcccc", 15), 12, 'Test 50');
test(longestPalindromicSubsequence("mnonmonmomnonmonmonmomnonm", 15), 26, 'Test 51');
test(longestPalindromicSubsequence("mississippi", 7), 10, 'Test 52');
test(longestPalindromicSubsequence("banana", 10), 5, 'Test 53');
test(longestPalindromicSubsequence("aabacbebebe", 5), 8, 'Test 54');
test(longestPalindromicSubsequence("madamimadam", 10), 11, 'Test 55');
test(longestPalindromicSubsequence("abcdexyzabcdexyzabcdexyz", 50), 24, 'Test 56');
test(longestPalindromicSubsequence("mississippi", 10), 10, 'Test 57');
test(longestPalindromicSubsequence("deified", 4), 7, 'Test 58');
test(longestPalindromicSubsequence("abcdedcba", 2), 9, 'Test 59');
test(longestPalindromicSubsequence("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 50), 28, 'Test 60');
test(longestPalindromicSubsequence("abcdedcba", 3), 9, 'Test 61');
test(longestPalindromicSubsequence("mnopqrstuvwxyzyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba", 200), 60, 'Test 62');
test(longestPalindromicSubsequence("aabbccabcabcabcabcabc", 50), 21, 'Test 63');
test(longestPalindromicSubsequence("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1), 50, 'Test 64');
test(longestPalindromicSubsequence("abcdeedcba", 0), 10, 'Test 65');
test(longestPalindromicSubsequence("abbaacddcabb", 4), 11, 'Test 66');
test(longestPalindromicSubsequence("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 200), 52, 'Test 67');
test(longestPalindromicSubsequence("zzzyzzyzzyzzyzzyzzyz", 200), 20, 'Test 68');
test(longestPalindromicSubsequence("mississippi", 5), 9, 'Test 69');
test(longestPalindromicSubsequence("level", 2), 5, 'Test 70');
test(longestPalindromicSubsequence("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 0), 32, 'Test 71');
test(longestPalindromicSubsequence("ababbabbbabaaa", 15), 14, 'Test 72');
test(longestPalindromicSubsequence("rotor", 15), 5, 'Test 73');
test(longestPalindromicSubsequence("noon", 1), 4, 'Test 74');
test(longestPalindromicSubsequence("noonhighnoon", 5), 12, 'Test 75');
test(longestPalindromicSubsequence("abcdbca", 2), 7, 'Test 76');
test(longestPalindromicSubsequence("abcdxyzabcdxyzabcdxyz", 30), 21, 'Test 77');
test(longestPalindromicSubsequence("banana", 3), 5, 'Test 78');
test(longestPalindromicSubsequence("qwertyuiopasdfghjklzxcvbnmnbvcxzlkjhgfdsapoiuytrewq", 50), 51, 'Test 79');
test(longestPalindromicSubsequence("abacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacb", 20), 50, 'Test 80');
test(longestPalindromicSubsequence("abacaba", 3), 7, 'Test 81');
test(longestPalindromicSubsequence("mamamamamamamamamamamamamamamamama", 50), 33, 'Test 82');
test(longestPalindromicSubsequence("racecar", 2), 7, 'Test 83');
test(longestPalindromicSubsequence("noon", 2), 4, 'Test 84');
test(longestPalindromicSubsequence("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba", 250), 51, 'Test 85');
test(longestPalindromicSubsequence("abcdefg", 6), 5, 'Test 86');
test(longestPalindromicSubsequence("zyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 300), 84, 'Test 87');
test(longestPalindromicSubsequence("madam", 1), 5, 'Test 88');
test(longestPalindromicSubsequence("zyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyx", 100), 57, 'Test 89');
test(longestPalindromicSubsequence("zyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyx", 200), 39, 'Test 90');
test(longestPalindromicSubsequence("rotor", 0), 5, 'Test 91');
test(longestPalindromicSubsequence("abcdefgzyxwvutsrqponmlkjihgfedcba", 50), 29, 'Test 92');
test(longestPalindromicSubsequence("abcdefghzyxwvutsrqponmlkjihgfedcba", 150), 34, 'Test 93');
test(longestPalindromicSubsequence("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm", 100), 47, 'Test 94');
test(longestPalindromicSubsequence("abcdefghizyxwvutsrqponmlkjihgfedcba", 100), 35, 'Test 95');
test(longestPalindromicSubsequence("deified", 2), 7, 'Test 96');
test(longestPalindromicSubsequence("aaaabbbbccccdddd", 10), 13, 'Test 97');
test(longestPalindromicSubsequence("madam", 2), 5, 'Test 98');
test(longestPalindromicSubsequence("rotor", 3), 5, 'Test 99');
test(longestPalindromicSubsequence("abcdefgihgfedcb", 15), 15, 'Test 100');
test(longestPalindromicSubsequence("abcdefghihgfedcba", 10), 17, 'Test 101');
test(longestPalindromicSubsequence("pqrstuvwxyzabcdefghijklmno", 50), 20, 'Test 102');
test(longestPalindromicSubsequence("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 0), 30, 'Test 103');
test(longestPalindromicSubsequence("abcdefghijklmnopqrstuvwxyz", 10), 9, 'Test 104');
test(longestPalindromicSubsequence("abcdefghijklmnopqrstuvwxzy", 100), 26, 'Test 105');
test(longestPalindromicSubsequence("zzzzzzzzzzzzzzzzzzzz", 10), 20, 'Test 106');
test(longestPalindromicSubsequence("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 150), 49, 'Test 107');
test(longestPalindromicSubsequence("abcabcabcabcabcabcabcabcabcabc", 100), 30, 'Test 108');
test(longestPalindromicSubsequence("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 5), 52, 'Test 109');
test(longestPalindromicSubsequence("reviled", 7), 5, 'Test 110');
test(longestPalindromicSubsequence("abccba", 0), 6, 'Test 111');
test(longestPalindromicSubsequence("zyxzyxzyxzyxzyxzyxzyx", 100), 21, 'Test 112');
test(longestPalindromicSubsequence("pneumonoultramicroscopicsilicovolcanoconiosis", 50), 37, 'Test 113');
test(longestPalindromicSubsequence("mnopqrstuvwxyz", 10), 6, 'Test 114');
test(longestPalindromicSubsequence("step on no pets", 10), 15, 'Test 115');
test(longestPalindromicSubsequence("zyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyx", 100), 42, 'Test 116');
test(longestPalindromicSubsequence("abababababababababababababababab", 50), 32, 'Test 117');
test(longestPalindromicSubsequence("abcdefghijklmnopqrstuvwxyz", 50), 20, 'Test 118');
test(longestPalindromicSubsequence("mississippi", 3), 9, 'Test 119');
test(longestPalindromicSubsequence("abacabadabacaba", 5), 15, 'Test 120');
test(longestPalindromicSubsequence("mnopqrstuvwxyzzyxwvutsrqponmlk", 80), 30, 'Test 121');
test(longestPalindromicSubsequence("abcdezyxwvutsrqponmlkjihgf", 50), 20, 'Test 122');
test(longestPalindromicSubsequence("abacabadabacaba", 10), 15, 'Test 123');
test(longestPalindromicSubsequence("abcabcabc", 4), 8, 'Test 124');
test(longestPalindromicSubsequence("abababababababababab", 10), 20, 'Test 125');
test(longestPalindromicSubsequence("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 100), 40, 'Test 126');
test(longestPalindromicSubsequence("abcabcabcabcabcabcabc", 20), 21, 'Test 127');
test(longestPalindromicSubsequence("qwertyuiopasdfghjklzxcvbnm", 25), 18, 'Test 128');
test(longestPalindromicSubsequence("aaaaabbbbb", 10), 10, 'Test 129');
test(longestPalindromicSubsequence("zabacabadabacaba", 10), 15, 'Test 130');
test(longestPalindromicSubsequence("abcdefedcbaabcdefedcbaabcdefedcba", 60), 33, 'Test 131');
test(longestPalindromicSubsequence("mnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba", 150), 36, 'Test 132');
test(longestPalindromicSubsequence("abcdxyzzyxcba", 10), 13, 'Test 133');
test(longestPalindromicSubsequence("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba", 100), 51, 'Test 134');
test(longestPalindromicSubsequence("kayak", 20), 5, 'Test 135');
test(longestPalindromicSubsequence("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 100), 40, 'Test 136');
test(longestPalindromicSubsequence("abcdzdcba", 3), 9, 'Test 137');
test(longestPalindromicSubsequence("aababaaa", 2), 8, 'Test 138');
test(longestPalindromicSubsequence("deed", 3), 4, 'Test 139');
test(longestPalindromicSubsequence("ababababababababababababababababababababababababababab", 100), 54, 'Test 140');
test(longestPalindromicSubsequence("abcdefghijkmlkjihgfedcba", 50), 24, 'Test 141');
test(longestPalindromicSubsequence("abcdeedcba", 3), 10, 'Test 142');
test(longestPalindromicSubsequence("abcdefg", 10), 6, 'Test 143');
test(longestPalindromicSubsequence("mnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba", 50), 30, 'Test 144');
test(longestPalindromicSubsequence("racecar", 0), 7, 'Test 145');
test(longestPalindromicSubsequence("zyxwvutsrqponmlkjihgfedcba", 150), 26, 'Test 146');
test(longestPalindromicSubsequence("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba", 50), 51, 'Test 147');
test(longestPalindromicSubsequence("abcdefghijabcdefghij", 15), 13, 'Test 148');
test(longestPalindromicSubsequence("abacabadabacabadabacaba", 20), 23, 'Test 149');
test(longestPalindromicSubsequence("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 5), 52, 'Test 150');
test(longestPalindromicSubsequence("abcdabcdabcdabcd", 20), 16, 'Test 151');
test(longestPalindromicSubsequence("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 180), 52, 'Test 152');
test(longestPalindromicSubsequence("abcdefghijjihgfedcba", 5), 20, 'Test 153');

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
