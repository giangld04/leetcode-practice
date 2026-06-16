// Test: 854. K Similar Strings
// 69 test cases from LeetCodeDataset
// Run: node test.js

const { kSimilarity } = require("./solution");

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

console.log("\n854. K Similar Strings\n");

test(kSimilarity("aabbcc", "ccbbaa"), 2, 'Test 1');
test(kSimilarity("abac", "baca"), 2, 'Test 2');
test(kSimilarity("abcd", "dcba"), 2, 'Test 3');
test(kSimilarity("abc", "bca"), 2, 'Test 4');
test(kSimilarity("abcdef", "fedcba"), 3, 'Test 5');
test(kSimilarity("aabc", "abac"), 1, 'Test 6');
test(kSimilarity("abcde", "edcba"), 2, 'Test 7');
test(kSimilarity("ab", "ba"), 1, 'Test 8');
test(kSimilarity("aabbcc", "abcabc"), 2, 'Test 9');
test(kSimilarity("aabbaabbcc", "ccbbaabbaa"), 2, 'Test 10');
test(kSimilarity("aabbccddeeff", "ffeeddccbbaa"), 6, 'Test 11');
test(kSimilarity("abcdeffedcba", "fedcbadeffcba"), Execution timed out, 'Test 12');
test(kSimilarity("aabbccddeeff", "fedcbbaabbcc"), Execution timed out, 'Test 13');
test(kSimilarity("abacabad", "dcbadcba"), Execution timed out, 'Test 14');
test(kSimilarity("abcabcabc", "cbacbacba"), 3, 'Test 15');
test(kSimilarity("abacabadabacaba", "babacababacabaa"), Execution timed out, 'Test 16');
test(kSimilarity("abcdeabcde", "edcbaedcba"), 4, 'Test 17');
test(kSimilarity("abcdeabcde", "edcbadcbad"), Execution timed out, 'Test 18');
test(kSimilarity("aabbccddeeff", "fedcbafedcba"), 7, 'Test 19');
test(kSimilarity("abcdeffedcba", "fedcbaffedcba"), Execution timed out, 'Test 20');
test(kSimilarity("aabbcc", "bbaacc"), 2, 'Test 21');
test(kSimilarity("aabbccddeeffgghh", "hhggeffeeddcbaab"), Execution timed out, 'Test 22');
test(kSimilarity("aabbccdd", "ddccbaab"), 5, 'Test 23');
test(kSimilarity("abacabad", "dabcabac"), Execution timed out, 'Test 24');
test(kSimilarity("abcdeffedcbaabcdeffedcbaabcdeffedcba", "fedcbadeffcbafeedcbadeffcbafeedcbadeffcba"), Execution timed out, 'Test 25');
test(kSimilarity("abcdefgh", "hgfedcba"), 4, 'Test 26');
test(kSimilarity("aabbcc", "ccbaab"), 3, 'Test 27');
test(kSimilarity("abcdefabc", "cbadefabc"), 1, 'Test 28');
test(kSimilarity("abcabcabc", "bcbacabac"), 4, 'Test 29');
test(kSimilarity("abcabcabc", "cbaabcabc"), 1, 'Test 30');
test(kSimilarity("abcdabcd", "dcbaabcd"), 2, 'Test 31');
test(kSimilarity("abcdefabc", "fdecbaabc"), 4, 'Test 32');
test(kSimilarity("abcdefghij", "jihgfedcba"), 5, 'Test 33');
test(kSimilarity("aabbccddeeffgghhii", "ihhgfeedccbaab"), Error: string index out of range, 'Test 34');
test(kSimilarity("abcdabcd", "dcbadcba"), 4, 'Test 35');
test(kSimilarity("abcdef", "fabcde"), 5, 'Test 36');
test(kSimilarity("abcdefabc", "fedcbafed"), Execution timed out, 'Test 37');
test(kSimilarity("aabbccddeeffgghh", "hhgfedcbbaabbcc"), Error: string index out of range, 'Test 38');
test(kSimilarity("abcdefabcdeffedcba", "fedcbaabccbaabefdcba"), Execution timed out, 'Test 39');
test(kSimilarity("abcdeffedcbaabcdeffedcba", "fedcbadeffcbafeedcbadeffcba"), Execution timed out, 'Test 40');
test(kSimilarity("aabbccddeeffgghh", "hhggeeffddbbaa"), Error: string index out of range, 'Test 41');
test(kSimilarity("abacabad", "dabcabab"), Execution timed out, 'Test 42');
test(kSimilarity("aabbccddeeffgg", "ggfedcbbaabbcc"), Execution timed out, 'Test 43');
test(kSimilarity("abcdabcdabcd", "dcbaedcbadcb"), Execution timed out, 'Test 44');
test(kSimilarity("aabbc", "bbaca"), 3, 'Test 45');
test(kSimilarity("abcdefg", "gfedcba"), 3, 'Test 46');
test(kSimilarity("aabbbccc", "cccbbbaa"), 3, 'Test 47');
test(kSimilarity("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyz"), Execution timed out, 'Test 48');
test(kSimilarity("aabbcc", "cbacba"), 3, 'Test 49');
test(kSimilarity("abababab", "babababa"), 4, 'Test 50');
test(kSimilarity("abcabcabcabc", "cbacbacbacba"), 4, 'Test 51');
test(kSimilarity("aabbccddeeff", "abcdefabcdef"), 7, 'Test 52');
test(kSimilarity("abcdabcdabcd", "dcbaabcdabcd"), 2, 'Test 53');
test(kSimilarity("aabbccddeeff", "ffeeddccbaab"), 7, 'Test 54');
test(kSimilarity("abcabdc", "dcbaacb"), 4, 'Test 55');
test(kSimilarity("abcabc", "cbacba"), 2, 'Test 56');
test(kSimilarity("abcabc", "bcbaca"), 3, 'Test 57');
test(kSimilarity("aabbccddeeff", "ffeeddcbaabb"), Execution timed out, 'Test 58');
test(kSimilarity("abcdefabcdef", "defabcfedcba"), 6, 'Test 59');
test(kSimilarity("aabbaabbaabb", "bbabbababbab"), Execution timed out, 'Test 60');
test(kSimilarity("abcabc", "cbabac"), 2, 'Test 61');
test(kSimilarity("abcabcabc", "cccbaabba"), 4, 'Test 62');
test(kSimilarity("aabbcdef", "defbbaac"), 4, 'Test 63');
test(kSimilarity("abcdefabcdef", "fedcbafedcba"), 6, 'Test 64');
test(kSimilarity("aaaabbbb", "bbbbaaaa"), 4, 'Test 65');
test(kSimilarity("abcdabcdeabcd", "dcbadcbadcbad"), Execution timed out, 'Test 66');
test(kSimilarity("abac", "caba"), 2, 'Test 67');
test(kSimilarity("abcdefgabcdefg", "gfedcbagfedcba"), 6, 'Test 68');
test(kSimilarity("abcbca", "bcbaca"), 2, 'Test 69');

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
