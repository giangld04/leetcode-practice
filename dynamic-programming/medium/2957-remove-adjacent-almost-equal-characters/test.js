// Test: 2957. Remove Adjacent Almost Equal Characters
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { removeAlmostEqualCharacters } = require("./solution");

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

console.log("\n2957. Remove Adjacent Almost Equal Characters\n");

test(removeAlmostEqualCharacters("abddez"), 2, 'Test 1');
test(removeAlmostEqualCharacters("qrstuvwpqrstuvwxyz"), 8, 'Test 2');
test(removeAlmostEqualCharacters("abecidof"), 1, 'Test 3');
test(removeAlmostEqualCharacters("zzz"), 1, 'Test 4');
test(removeAlmostEqualCharacters("abacaba"), 2, 'Test 5');
test(removeAlmostEqualCharacters("abababab"), 4, 'Test 6');
test(removeAlmostEqualCharacters("acacacac"), 0, 'Test 7');
test(removeAlmostEqualCharacters("xyz"), 1, 'Test 8');
test(removeAlmostEqualCharacters("abcde"), 2, 'Test 9');
test(removeAlmostEqualCharacters("aabbcc"), 3, 'Test 10');
test(removeAlmostEqualCharacters("zzzzz"), 2, 'Test 11');
test(removeAlmostEqualCharacters("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 26, 'Test 12');
test(removeAlmostEqualCharacters("abcdefg"), 3, 'Test 13');
test(removeAlmostEqualCharacters("a"), 0, 'Test 14');
test(removeAlmostEqualCharacters("mnonmo"), 2, 'Test 15');
test(removeAlmostEqualCharacters("abc"), 1, 'Test 16');
test(removeAlmostEqualCharacters("acxz"), 0, 'Test 17');
test(removeAlmostEqualCharacters("zyxwvutsrqponmlkjihgfedcba"), 13, 'Test 18');
test(removeAlmostEqualCharacters("aaaaa"), 2, 'Test 19');
test(removeAlmostEqualCharacters("abcdefghijklmnopqrstuvwxyz"), 13, 'Test 20');
test(removeAlmostEqualCharacters("qwert"), 0, 'Test 21');
test(removeAlmostEqualCharacters("zyxyxyz"), 3, 'Test 22');
test(removeAlmostEqualCharacters("aabbaabbaabbaabbaabbaabb"), 12, 'Test 23');
test(removeAlmostEqualCharacters("aaabbbccc"), 4, 'Test 24');
test(removeAlmostEqualCharacters("aaaaabbbbbaaaa"), 7, 'Test 25');
test(removeAlmostEqualCharacters("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 39, 'Test 26');
test(removeAlmostEqualCharacters("zzzyyxxwwvvuuttrrssqqppoonnllkkjjiihhggffeeddccbbaa"), 25, 'Test 27');
test(removeAlmostEqualCharacters("abbbccddeeefffggghhhhiiiiijjjjkkkkllllmmmmmnnnnnooooo"), 26, 'Test 28');
test(removeAlmostEqualCharacters("mississippi"), 3, 'Test 29');
test(removeAlmostEqualCharacters("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmnnnooopppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz"), 50, 'Test 30');
test(removeAlmostEqualCharacters("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyyyxxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbbaaaa"), 54, 'Test 31');
test(removeAlmostEqualCharacters("aabbbcccddddeeeeffffgggghhhhiiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwwxxxxxyyyyyzzzzz"), 52, 'Test 32');
test(removeAlmostEqualCharacters("aazzbbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 27, 'Test 33');
test(removeAlmostEqualCharacters("zzzzyyyyxxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbbaaaa"), 30, 'Test 34');
test(removeAlmostEqualCharacters("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba"), 25, 'Test 35');
test(removeAlmostEqualCharacters("aaaabbbbcccc"), 6, 'Test 36');
test(removeAlmostEqualCharacters("qwerttyuiiooppllkkiijjhhggffeedcvvbbnnaassddffgghhjjiikkllppoouuyyttrewqq"), 32, 'Test 37');
test(removeAlmostEqualCharacters("aaaabbbbccccaaaabbbbcccc"), 12, 'Test 38');
test(removeAlmostEqualCharacters("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmnnnooopppqqqqrrrrssssttttuuuuuvvvvwwwwxxxxyyyyzzzz"), 50, 'Test 39');
test(removeAlmostEqualCharacters("zyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 39, 'Test 40');
test(removeAlmostEqualCharacters("aabbaaabbbaaa"), 6, 'Test 41');
test(removeAlmostEqualCharacters("banana"), 1, 'Test 42');
test(removeAlmostEqualCharacters("abcabcabcabcabcabc"), 6, 'Test 43');
test(removeAlmostEqualCharacters("abcdeedcba"), 5, 'Test 44');
test(removeAlmostEqualCharacters("zyxzyxzyx"), 3, 'Test 45');
test(removeAlmostEqualCharacters("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 50, 'Test 46');
test(removeAlmostEqualCharacters("ababababababababababc"), 10, 'Test 47');
test(removeAlmostEqualCharacters("zyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyx"), 18, 'Test 48');
test(removeAlmostEqualCharacters("aaabbbcccdddeeefffggghhhiiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxxyyyzzz"), 40, 'Test 49');
test(removeAlmostEqualCharacters("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 26, 'Test 50');
test(removeAlmostEqualCharacters("aabbccddeeaabbccddee"), 10, 'Test 51');
test(removeAlmostEqualCharacters("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzz"), 27, 'Test 52');
test(removeAlmostEqualCharacters("ababababababababababababababababababababab"), 21, 'Test 53');
test(removeAlmostEqualCharacters("zyxzyxzyxzyxzyxzyxzyxzyx"), 8, 'Test 54');
test(removeAlmostEqualCharacters("mnopqrspqrstmnopqrspqrstmnopqrspqrst"), 15, 'Test 55');
test(removeAlmostEqualCharacters("aaaaabbbbbaaaaabbbbbaaaa"), 12, 'Test 56');
test(removeAlmostEqualCharacters("aaaabbbbccccdddd"), 8, 'Test 57');
test(removeAlmostEqualCharacters("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 26, 'Test 58');
test(removeAlmostEqualCharacters("abzycxyxbwaxavauatassarapaoanamaalakajaiagafae"), 5, 'Test 59');
test(removeAlmostEqualCharacters("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyxwvutsrqponmlkjihgfedcba"), 39, 'Test 60');
test(removeAlmostEqualCharacters("ababababab"), 5, 'Test 61');
test(removeAlmostEqualCharacters("abzabzabzabzabz"), 5, 'Test 62');
test(removeAlmostEqualCharacters("aabbaabbccddeeffaabbccddeeff"), 14, 'Test 63');
test(removeAlmostEqualCharacters("zzzzzzzzzzzzzzzzzzzz"), 10, 'Test 64');
test(removeAlmostEqualCharacters("abacabcabacabcabacabcabacabcabacabcabacabc"), 12, 'Test 65');
test(removeAlmostEqualCharacters("abacabadabacabadaba"), 5, 'Test 66');
test(removeAlmostEqualCharacters("zyxwvutsrqponmlkjihgfedcbaaaaaaaaaaaaa"), 19, 'Test 67');
test(removeAlmostEqualCharacters("aaaaabbbbbccccc"), 7, 'Test 68');
test(removeAlmostEqualCharacters("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcb"), 25, 'Test 69');
test(removeAlmostEqualCharacters("zzzyyyxxxwwwwvvvuuuuttttssssrrrrqqqqppppllllooooiiiihhhhhgggggffffffeeeeeeeedddddccccbbbbaaa"), 46, 'Test 70');
test(removeAlmostEqualCharacters("abcabcabc"), 3, 'Test 71');
test(removeAlmostEqualCharacters("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 25, 'Test 72');
test(removeAlmostEqualCharacters("acxzacxzacxzacxzacxzacxz"), 0, 'Test 73');
test(removeAlmostEqualCharacters("zzzyyxxwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbbaaa"), 27, 'Test 74');
test(removeAlmostEqualCharacters("zazazazazazazazazaza"), 0, 'Test 75');
test(removeAlmostEqualCharacters("ababababababababababababababababababababababababababababababab"), 31, 'Test 76');
test(removeAlmostEqualCharacters("bookkeeper"), 3, 'Test 77');
test(removeAlmostEqualCharacters("abababababababababababababababababab"), 18, 'Test 78');
test(removeAlmostEqualCharacters("abababababababababababababab"), 14, 'Test 79');
test(removeAlmostEqualCharacters("zazazazazazazazazaabc"), 2, 'Test 80');
test(removeAlmostEqualCharacters("abczyxabczyxabczyx"), 6, 'Test 81');
test(removeAlmostEqualCharacters("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 41, 'Test 82');
test(removeAlmostEqualCharacters("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 21, 'Test 83');
test(removeAlmostEqualCharacters("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzaa"), 27, 'Test 84');
test(removeAlmostEqualCharacters("zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), 26, 'Test 85');
test(removeAlmostEqualCharacters("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 52, 'Test 86');
test(removeAlmostEqualCharacters("abzabzabz"), 3, 'Test 87');
test(removeAlmostEqualCharacters("abacabadabacabadabacabad"), 6, 'Test 88');
test(removeAlmostEqualCharacters("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 22, 'Test 89');
test(removeAlmostEqualCharacters("abcdabcdabcdabcdabcdabcd"), 12, 'Test 90');
test(removeAlmostEqualCharacters("abcabcabcabc"), 4, 'Test 91');
test(removeAlmostEqualCharacters("abacabadabacabadabacabadabacabad"), 8, 'Test 92');
test(removeAlmostEqualCharacters("abacabadabacaba"), 4, 'Test 93');
test(removeAlmostEqualCharacters("abababababababababab"), 10, 'Test 94');
test(removeAlmostEqualCharacters("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 26, 'Test 95');

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
