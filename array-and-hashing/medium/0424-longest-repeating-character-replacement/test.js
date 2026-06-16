// Test: 424. Longest Repeating Character Replacement
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { characterReplacement } = require("./solution");

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

console.log("\n424. Longest Repeating Character Replacement\n");

test(characterReplacement("ABABABAB", 3), 7, 'Test 1');
test(characterReplacement("AAAAAAAAAAAAABBBAABBCCDDEE", 5), 20, 'Test 2');
test(characterReplacement("AABBCCDD", 2), 4, 'Test 3');
test(characterReplacement("", 0), 0, 'Test 4');
test(characterReplacement("A", 1), 1, 'Test 5');
test(characterReplacement("AABAABBBCCCC", 3), 7, 'Test 6');
test(characterReplacement("ABBBB", 0), 4, 'Test 7');
test(characterReplacement("ABCCDEEEEE", 3), 8, 'Test 8');
test(characterReplacement("ABAB", 2), 4, 'Test 9');
test(characterReplacement("AABBB", 2), 5, 'Test 10');
test(characterReplacement("ZYXWVUTSRQPONMLKJIHGFEDCBA", 25), 26, 'Test 11');
test(characterReplacement("ABACBCAB", 2), 4, 'Test 12');
test(characterReplacement("ABBB", 0), 3, 'Test 13');
test(characterReplacement("ABBB", 1), 4, 'Test 14');
test(characterReplacement("ABCDE", 1), 2, 'Test 15');
test(characterReplacement("AABABBA", 1), 4, 'Test 16');
test(characterReplacement("AAABBBCCC", 3), 6, 'Test 17');
test(characterReplacement("AAAA", 2), 4, 'Test 18');
test(characterReplacement("ABCDE", 3), 4, 'Test 19');
test(characterReplacement("ABCDE", 2), 3, 'Test 20');
test(characterReplacement("AABBBBCCDDDDD", 2), 7, 'Test 21');
test(characterReplacement("ACBACBACBACBACBACBACBACBACBACBAC", 5), 8, 'Test 22');
test(characterReplacement("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", 0), 40, 'Test 23');
test(characterReplacement("AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDD", 15), 26, 'Test 24');
test(characterReplacement("AAAAAAAAAA", 5), 10, 'Test 25');
test(characterReplacement("ABCABCABCABCABCABCABCABCABCABC", 10), 16, 'Test 26');
test(characterReplacement("AAAAAAAAAAAABBBBCCCC", 10), 20, 'Test 27');
test(characterReplacement("ABABABAB", 1), 3, 'Test 28');
test(characterReplacement("ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ", 25), 27, 'Test 29');
test(characterReplacement("AAABBBCCCDDDAAABBBCCCDDD", 7), 10, 'Test 30');
test(characterReplacement("QWERTYUIOPASDFGHJKLZXCVBNM", 24), 25, 'Test 31');
test(characterReplacement("AAAAAAAAAAAABBBCCCCCCAAAAAAAAAAA", 6), 18, 'Test 32');
test(characterReplacement("AAABBBAABBCCDDDDDDDEEFFGGHHIIJJJKKKLLLMMMNNN", 25), 32, 'Test 33');
test(characterReplacement("AAAAAAAAAABBBBBBBBBBBCCCCCCDDDDDDDDDDD", 25), 36, 'Test 34');
test(characterReplacement("MMMMNNNNOOOO", 5), 9, 'Test 35');
test(characterReplacement("AAAAAAAAABBB", 2), 11, 'Test 36');
test(characterReplacement("AABABABABAB", 5), 11, 'Test 37');
test(characterReplacement("ABABABABABABABABABABABABABABABABAB", 15), 31, 'Test 38');
test(characterReplacement("ABACABAACBACABCABACBACABCABACBACABCABACBACABCABACBACAB", 20), 36, 'Test 39');
test(characterReplacement("AAAAAAAAAABBBBBBBBCCCCCCCCCC", 10), 20, 'Test 40');
test(characterReplacement("ABCDEABCDEABCDEABCDEABCDE", 10), 13, 'Test 41');
test(characterReplacement("ABBCCCDDDDEEEEEFFFFFF", 6), 12, 'Test 42');
test(characterReplacement("ABABABABABABABABAB", 10), 18, 'Test 43');
test(characterReplacement("ABACABACABACABACABACABACABACABACABACABAC", 15), 31, 'Test 44');
test(characterReplacement("ABABABABABABABABABABABABABABABABABABABAB", 15), 31, 'Test 45');
test(characterReplacement("ABABABABABABABABABABABABABABABAB", 0), 1, 'Test 46');
test(characterReplacement("AABABABABABABABABABABABABABABABAB", 5), 12, 'Test 47');
test(characterReplacement("AABCABCABCABCABCABC", 4), 8, 'Test 48');
test(characterReplacement("BAAAAAAAAAABAAAAAAAAAAB", 5), 23, 'Test 49');
test(characterReplacement("AABBCCDDEEFFGG", 3), 5, 'Test 50');
test(characterReplacement("ACACACACACACAC", 2), 5, 'Test 51');
test(characterReplacement("AAABBBCCCDDDAAABBBCCCDDDAAABBBCCCDDD", 20), 29, 'Test 52');
test(characterReplacement("ABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABAB", 10), 21, 'Test 53');
test(characterReplacement("ABACABACABACABACABACABACABACABAC", 5), 11, 'Test 54');
test(characterReplacement("AAABBBCCCDDD", 4), 7, 'Test 55');
test(characterReplacement("XYZXYZXYZXYZXYZXYZXYZXYZ", 15), 23, 'Test 56');
test(characterReplacement("ABCDEABCDEABCDEABCDEABCDEABCDE", 6), 8, 'Test 57');
test(characterReplacement("ABBBABAABBBBBBBBAAABBB", 5), 17, 'Test 58');
test(characterReplacement("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", 100), 60, 'Test 59');
test(characterReplacement("AAAAAAAAAAABBBBBBBBBBB", 10), 21, 'Test 60');
test(characterReplacement("ABABABABAB", 5), 10, 'Test 61');
test(characterReplacement("AAABBCCDDEEFFF", 4), 7, 'Test 62');
test(characterReplacement("AAAAAAAAAAAAAAAAAAAAAAAB", 1), 24, 'Test 63');
test(characterReplacement("XYZXYZXYZXYZ", 3), 5, 'Test 64');
test(characterReplacement("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 26), 26, 'Test 65');
test(characterReplacement("ABABABABABABABAB", 8), 16, 'Test 66');
test(characterReplacement("AAAAAAAAAAAAAAAAAAAA", 0), 20, 'Test 67');
test(characterReplacement("AABBBCCCDDDDDEEEEFFFFFFGGGGGGHHHHHIIIJJJKKKLLLLMMMMNNNNOOOOPPPP", 30), 36, 'Test 68');
test(characterReplacement("BBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAA", 5), 26, 'Test 69');
test(characterReplacement("AABABBAACCCDDDEEE", 3), 8, 'Test 70');
test(characterReplacement("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", 0), 106, 'Test 71');
test(characterReplacement("AAAAAAAABBBBBBBB", 0), 8, 'Test 72');
test(characterReplacement("ABABABABABABAB", 7), 14, 'Test 73');
test(characterReplacement("AAABBBCCCDDDEEEFFFGGGHHHIIIJJJKKKLLLMMMNNNOOOPPPQQQRRRSSSTTTUUUVVVWWWXXXXYYYYZZZZ", 50), 54, 'Test 74');
test(characterReplacement("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB", 50), 41, 'Test 75');
test(characterReplacement("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM", 100), 44, 'Test 76');
test(characterReplacement("ABCABCABCABCABCABCABCABC", 15), 23, 'Test 77');
test(characterReplacement("AABBBCCDDEE", 2), 5, 'Test 78');
test(characterReplacement("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", 1000), 31, 'Test 79');
test(characterReplacement("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", 100), 108, 'Test 80');
test(characterReplacement("AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ", 20), 22, 'Test 81');
test(characterReplacement("AAABBBCCCDDD", 3), 6, 'Test 82');
test(characterReplacement("AAAAA", 0), 5, 'Test 83');
test(characterReplacement("AABBBCCCDDDD", 3), 7, 'Test 84');
test(characterReplacement("AAABBBCCCDDDEEEFFF", 6), 9, 'Test 85');
test(characterReplacement("AAAAAAAAABBBBBBBBCCCCCCCCCC", 10), 20, 'Test 86');
test(characterReplacement("BBBAAAABBBAAAABBBAAAABBB", 5), 13, 'Test 87');
test(characterReplacement("ABABABABABABABABABAB", 5), 11, 'Test 88');
test(characterReplacement("ACACACACACACACACACACACAC", 5), 11, 'Test 89');
test(characterReplacement("ABACABACABAC", 4), 9, 'Test 90');
test(characterReplacement("ABABABABABABABABABAB", 10), 20, 'Test 91');
test(characterReplacement("AAAAAAABBBCCCDDDDDD", 5), 12, 'Test 92');
test(characterReplacement("BBBBAAAACCCD", 4), 8, 'Test 93');
test(characterReplacement("QWERTYUIOPASDFGHJKLZXCVBNM", 26), 26, 'Test 94');
test(characterReplacement("XYZXYZXYZXYZXYZXYZ", 6), 10, 'Test 95');
test(characterReplacement("AAAAAAAAAAABBBBCCCCCDDDD", 10), 21, 'Test 96');
test(characterReplacement("BBBBAAAACCCCDDDD", 5), 9, 'Test 97');
test(characterReplacement("XYZXYZXYZXYZXYZXYZXYZXYZ", 20), 24, 'Test 98');
test(characterReplacement("AAAAAAAABBBBBBBB", 3), 11, 'Test 99');
test(characterReplacement("AAAAAAAAAAAAAAAABBB", 2), 18, 'Test 100');
test(characterReplacement("XYZXYZXYZ", 3), 5, 'Test 101');
test(characterReplacement("AABBCDEEFGHIJKLLMNOPQRSTUVWXYZ", 25), 27, 'Test 102');
test(characterReplacement("AABABBAABBCCDDEEFFGG", 4), 9, 'Test 103');
test(characterReplacement("AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ", 25), 27, 'Test 104');
test(characterReplacement("AAABBBCCCDDD", 6), 9, 'Test 105');

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
