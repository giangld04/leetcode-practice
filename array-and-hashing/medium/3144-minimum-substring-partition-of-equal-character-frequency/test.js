// Test: 3144. Minimum Substring Partition Of Equal Character Frequency
// 72 test cases from LeetCodeDataset
// Run: node test.js

const { minimumSubstringsInPartition } = require("./solution");

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

console.log("\n3144. Minimum Substring Partition Of Equal Character Frequency\n");

test(minimumSubstringsInPartition("zzzzzzzzz"), 1, 'Test 1');
test(minimumSubstringsInPartition("aaabbbccc"), 1, 'Test 2');
test(minimumSubstringsInPartition("abcdefghijklmnopqrstuvwxyz"), 1, 'Test 3');
test(minimumSubstringsInPartition("aabbaabbccddccdd"), 1, 'Test 4');
test(minimumSubstringsInPartition("abcdef"), 1, 'Test 5');
test(minimumSubstringsInPartition("abababab"), 1, 'Test 6');
test(minimumSubstringsInPartition("a"), 1, 'Test 7');
test(minimumSubstringsInPartition("abcdefghi"), 1, 'Test 8');
test(minimumSubstringsInPartition("abacabadabacaba"), 8, 'Test 9');
test(minimumSubstringsInPartition("abab"), 1, 'Test 10');
test(minimumSubstringsInPartition("abcabcabc"), 1, 'Test 11');
test(minimumSubstringsInPartition("ab"), 1, 'Test 12');
test(minimumSubstringsInPartition("aa"), 1, 'Test 13');
test(minimumSubstringsInPartition("abcdefabcdef"), 1, 'Test 14');
test(minimumSubstringsInPartition("abcde"), 1, 'Test 15');
test(minimumSubstringsInPartition("abcabc"), 1, 'Test 16');
test(minimumSubstringsInPartition("qwertyuiopasdfghjklzxcvbnm"), 1, 'Test 17');
test(minimumSubstringsInPartition("abababaccddb"), 2, 'Test 18');
test(minimumSubstringsInPartition("zzzzzzzzzz"), 1, 'Test 19');
test(minimumSubstringsInPartition("abcdabcdabcd"), 1, 'Test 20');
test(minimumSubstringsInPartition("fabccddg"), 3, 'Test 21');
test(minimumSubstringsInPartition("aabbcc"), 1, 'Test 22');
test(minimumSubstringsInPartition("abcdefghij"), 1, 'Test 23');
test(minimumSubstringsInPartition("aabbccddeeffgghhiijj"), 1, 'Test 24');
test(minimumSubstringsInPartition("abcdabcdabcdabcd"), 1, 'Test 25');
test(minimumSubstringsInPartition("zyxwvutsrqponmlkjihgfedcba"), 1, 'Test 26');
test(minimumSubstringsInPartition("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 27');
test(minimumSubstringsInPartition("abacabadabacabadabacabad"), 12, 'Test 28');
test(minimumSubstringsInPartition("aabbaabbaabbaabbaabb"), 1, 'Test 29');
test(minimumSubstringsInPartition("abcdefggfedcbafedcbafedcba"), 2, 'Test 30');
test(minimumSubstringsInPartition("aabbcdeefgghhijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 6, 'Test 31');
test(minimumSubstringsInPartition("aabbaabbccddeeffgg"), 2, 'Test 32');
test(minimumSubstringsInPartition("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzaaa"), 2, 'Test 33');
test(minimumSubstringsInPartition("abcdefghijklmnopqrstuvwxyzaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 1, 'Test 34');
test(minimumSubstringsInPartition("abcdefghijklaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzyyyyxxxxwwwwvvvuuutttsssrqqppoonnmmllkkjjiihhhgggfffeeedddcccbbaa"), 9, 'Test 35');
test(minimumSubstringsInPartition("aaabbbcccdddcccbbbbaaa"), 4, 'Test 36');
test(minimumSubstringsInPartition("abcabcabcabcabcabcabcabcabcabc"), 1, 'Test 37');
test(minimumSubstringsInPartition("zzzzzyyyyxxxxwwwwvvvuuutttsssrqqppoonnmmllkkjjiihhhgggfffeeedddcccbbaa"), 7, 'Test 38');
test(minimumSubstringsInPartition("abcdefabcdefabcdefabcdefabcdef"), 1, 'Test 39');
test(minimumSubstringsInPartition("abcdefghabcdefghabcdefghabcdefgh"), 1, 'Test 40');
test(minimumSubstringsInPartition("zzzzzzzzzzzzzzzzzzzz"), 1, 'Test 41');
test(minimumSubstringsInPartition("xyzxyzxyzxyzxyzxyzxyzxyz"), 1, 'Test 42');
test(minimumSubstringsInPartition("aaaaaaaaaabbbbbbbbbbccccccccccdddddddddd"), 1, 'Test 43');
test(minimumSubstringsInPartition("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzabcdefghijklmnopqrstuvwxyz"), 1, 'Test 44');
test(minimumSubstringsInPartition("aabbaaabbbaaaabbbcccdddeeefffggg"), 3, 'Test 45');
test(minimumSubstringsInPartition("ababababababababababababababababab"), 1, 'Test 46');
test(minimumSubstringsInPartition("abcdefgabcdefgabcdefgabcdefg"), 1, 'Test 47');
test(minimumSubstringsInPartition("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"), 1, 'Test 48');
test(minimumSubstringsInPartition("aabbbccccddddeeeeeffffffgggggghhhhhiiiiijjjjjkkkkklllllmmmmmnnnnnooooo"), 6, 'Test 49');
test(minimumSubstringsInPartition("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzaabb"), 2, 'Test 50');
test(minimumSubstringsInPartition("aabbaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 2, 'Test 51');
test(minimumSubstringsInPartition("abcdefabcdefabcdefabcdef"), 1, 'Test 52');
test(minimumSubstringsInPartition("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 1, 'Test 53');
test(minimumSubstringsInPartition("qqwweerrttyyuuuuummmiiiinnnngggg"), 3, 'Test 54');
test(minimumSubstringsInPartition("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 1, 'Test 55');
test(minimumSubstringsInPartition("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 1, 'Test 56');
test(minimumSubstringsInPartition("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz"), 1, 'Test 57');
test(minimumSubstringsInPartition("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzabcdefg"), 2, 'Test 58');
test(minimumSubstringsInPartition("abcabcabcabcabcabc"), 1, 'Test 59');
test(minimumSubstringsInPartition("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzyyyyxxxxwwwwvvvuuutttsssrqqppoonnmmllkkjjiihhhgggfffeeedddcccbbaa"), 8, 'Test 60');
test(minimumSubstringsInPartition("aabbaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzz"), 3, 'Test 61');
test(minimumSubstringsInPartition("aabbaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyxwvutsrqponmlkjihgfedcba"), 2, 'Test 62');
test(minimumSubstringsInPartition("xyzzzyxzzzyxzzzyxzzzyxzzz"), 10, 'Test 63');
test(minimumSubstringsInPartition("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 1, 'Test 64');
test(minimumSubstringsInPartition("aaabbbcccddd"), 1, 'Test 65');
test(minimumSubstringsInPartition("abcabcababcabc"), 2, 'Test 66');
test(minimumSubstringsInPartition("abcabcabcabcabcabcabcabcabcabcabcabcabc"), 1, 'Test 67');
test(minimumSubstringsInPartition("aaaaaaaaaaabbbbbbbbbc"), 3, 'Test 68');
test(minimumSubstringsInPartition("abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef"), 1, 'Test 69');
test(minimumSubstringsInPartition("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba"), 3, 'Test 70');
test(minimumSubstringsInPartition("aabbccddeeffaabbccddeeff"), 1, 'Test 71');
test(minimumSubstringsInPartition("abcabcdabcabcdeabcdefabcdefg"), 5, 'Test 72');

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
