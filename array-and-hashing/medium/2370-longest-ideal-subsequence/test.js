// Test: 2370. Longest Ideal Subsequence
// 85 test cases from LeetCodeDataset
// Run: node test.js

const { longestIdealString } = require("./solution");

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

console.log("\n2370. Longest Ideal Subsequence\n");

test(longestIdealString("zzzzzzzzzzzzzzzzzzzz", 25), 20, 'Test 1');
test(longestIdealString("a", 0), 1, 'Test 2');
test(longestIdealString("abcdefghijklmnopqrstuvwxyz", 0), 1, 'Test 3');
test(longestIdealString("abcd", 3), 4, 'Test 4');
test(longestIdealString("zyxwvutsrqponmlkjihgfedcba", 1), 26, 'Test 5');
test(longestIdealString("a", 5), 1, 'Test 6');
test(longestIdealString("abacabadabacaba", 1), 12, 'Test 7');
test(longestIdealString("pqrspqrstuv", 2), 10, 'Test 8');
test(longestIdealString("abcabcabcabc", 2), 12, 'Test 9');
test(longestIdealString("abcdefghijklmnopqrstuvwxyza", 25), 27, 'Test 10');
test(longestIdealString("acfgbd", 2), 4, 'Test 11');
test(longestIdealString("aaaabbbbcccc", 25), 12, 'Test 12');
test(longestIdealString("zzzzzzzzz", 25), 9, 'Test 13');
test(longestIdealString("leetcode", 2), 5, 'Test 14');
test(longestIdealString("abcabcabc", 2), 9, 'Test 15');
test(longestIdealString("zyzyzyzyzyzyzyzyzyzy", 1), 20, 'Test 16');
test(longestIdealString("triplebyte", 2), 3, 'Test 17');
test(longestIdealString("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba", 1), 52, 'Test 18');
test(longestIdealString("aabbaabbaabbaabbaabbaabbaabbaabb", 1), 32, 'Test 19');
test(longestIdealString("aaaabbbbccccddddeeeeffffgggg", 2), 28, 'Test 20');
test(longestIdealString("aabcdefghijklmnopqrstuvwxyz", 24), 27, 'Test 21');
test(longestIdealString("abcdefghijabcdefghijabcdefghij", 2), 16, 'Test 22');
test(longestIdealString("abcdefghijklmnopqrstuvwxyz", 1), 26, 'Test 23');
test(longestIdealString("abacabadabacaba", 0), 8, 'Test 24');
test(longestIdealString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 0), 50, 'Test 25');
test(longestIdealString("abcdefghijklmnopqrstuvwxyz", 25), 26, 'Test 26');
test(longestIdealString("zyxwvutsrqponmlkjihgfedcba", 5), 26, 'Test 27');
test(longestIdealString("aaaabbbbccccddddeeeeffffgggghhhh", 3), 32, 'Test 28');
test(longestIdealString("aabcdefghijklmnopqrstuvwxyz", 1), 27, 'Test 29');
test(longestIdealString("abababababababababababababababab", 0), 16, 'Test 30');
test(longestIdealString("abcdabcdabcdabcdabcdabcdabcdabcd", 3), 32, 'Test 31');
test(longestIdealString("ababababababababababababababababab", 0), 17, 'Test 32');
test(longestIdealString("abcdxyzabcdxyzabcdxyz", 4), 12, 'Test 33');
test(longestIdealString("z", 25), 1, 'Test 34');
test(longestIdealString("zyxwvutsrqponmlkjihgfedcba", 0), 1, 'Test 35');
test(longestIdealString("mississippiissipi", 4), 9, 'Test 36');
test(longestIdealString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 0), 60, 'Test 37');
test(longestIdealString("thisisaverylongstringthatneedstobechecked", 3), 17, 'Test 38');
test(longestIdealString("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba", 25), 51, 'Test 39');
test(longestIdealString("zzzzyyyyxxxwwvvuttsrrqqppoonnmmllkkjjiihhggffeeddccbbbaaa", 3), 57, 'Test 40');
test(longestIdealString("qpwoeirutyalskdjfhgzmxncbv", 4), 11, 'Test 41');
test(longestIdealString("aaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaab", 0), 40, 'Test 42');
test(longestIdealString("abcdabcdabcdabcdabcdabcdabcd", 3), 28, 'Test 43');
test(longestIdealString("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 2), 29, 'Test 44');
test(longestIdealString("zzzyyyxxxwwwwvvvuuutttsssrrrqqqpPPPoonnmmlkkjjiihhhgggfffeeeddccbbbaaa", 3), 67, 'Test 45');
test(longestIdealString("abcdabcdabcdabcdabcdabcd", 3), 24, 'Test 46');
test(longestIdealString("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm", 5), 21, 'Test 47');
test(longestIdealString("abacabacabacaba", 1), 12, 'Test 48');
test(longestIdealString("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 25), 52, 'Test 49');
test(longestIdealString("zzzyyyxxxwwwwvvvuutttsssrqqppoonnmlkkjjiihhggffeeddccbbaaa", 2), 58, 'Test 50');
test(longestIdealString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 1), 52, 'Test 51');
test(longestIdealString("zabcdefghijklmnopqrstuvwxyz", 24), 26, 'Test 52');
test(longestIdealString("bdfhjlnprtvxz", 2), 13, 'Test 53');
test(longestIdealString("mnopqrsmnopqrsmnopqrsmnopqrs", 2), 16, 'Test 54');
test(longestIdealString("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 0), 120, 'Test 55');
test(longestIdealString("qwertypoiuytrewqazxcvbnmnbvcxz", 5), 15, 'Test 56');
test(longestIdealString("abcdefghijabcdefghijabcdefghij", 5), 22, 'Test 57');
test(longestIdealString("qpqprqqpqrqpqrqpqrqpq", 1), 20, 'Test 58');
test(longestIdealString("abcdxyzabcdxyzabcdxyz", 3), 12, 'Test 59');
test(longestIdealString("mnopqrstuvwxyzabcdefghijkl", 10), 14, 'Test 60');
test(longestIdealString("mmppqqrrssttuuvvwwxxyyzz", 1), 22, 'Test 61');
test(longestIdealString("zzzzzzzzzzzzzzzzzzzz", 0), 20, 'Test 62');
test(longestIdealString("abababababababababababababababab", 1), 32, 'Test 63');
test(longestIdealString("abcdefgabcdefgabcdefg", 5), 19, 'Test 64');
test(longestIdealString("abcdefghijklmnopqrstuvwxyz", 24), 26, 'Test 65');
test(longestIdealString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 0), 2, 'Test 66');
test(longestIdealString("abacabadabacabadabacabad", 1), 18, 'Test 67');
test(longestIdealString("zyxwvutsrqponmlkjihgfedcba", 2), 26, 'Test 68');
test(longestIdealString("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 3), 30, 'Test 69');
test(longestIdealString("zyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyz", 12), 52, 'Test 70');
test(longestIdealString("aeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", 0), 63, 'Test 71');
test(longestIdealString("qpwoeirutyalskdjfhgxcvbnm", 5), 11, 'Test 72');
test(longestIdealString("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 2), 97, 'Test 73');
test(longestIdealString("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 10), 37, 'Test 74');
test(longestIdealString("abcdefghijkalmnopqrstuvwxyz", 2), 26, 'Test 75');
test(longestIdealString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 25), 84, 'Test 76');
test(longestIdealString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 2), 52, 'Test 77');
test(longestIdealString("abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab", 1), 128, 'Test 78');
test(longestIdealString("abcdabcdabcdabcd", 3), 16, 'Test 79');
test(longestIdealString("qwertyuiopasdfghjklzxcvbnmqwertyuiop", 5), 17, 'Test 80');
test(longestIdealString("a", 25), 1, 'Test 81');
test(longestIdealString("aquickbrownfoxjumpsoverthelazydog", 5), 14, 'Test 82');
test(longestIdealString("mjmnjmmnjmnmjmmnj", 0), 8, 'Test 83');
test(longestIdealString("zyxwvutsrqponmlkjihgfedcba", 24), 26, 'Test 84');
test(longestIdealString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 24), 52, 'Test 85');

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
