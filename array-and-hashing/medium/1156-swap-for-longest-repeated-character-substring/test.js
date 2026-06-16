// Test: 1156. Swap For Longest Repeated Character Substring
// 56 test cases from LeetCodeDataset
// Run: node test.js

const { maxRepOpt1 } = require("./solution");

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

console.log("\n1156. Swap For Longest Repeated Character Substring\n");

test(maxRepOpt1("ababababab"), 3, 'Test 1');
test(maxRepOpt1("abababababababab"), 3, 'Test 2');
test(maxRepOpt1("ababa"), 3, 'Test 3');
test(maxRepOpt1("aaaaa"), 5, 'Test 4');
test(maxRepOpt1("zzzzzzzzzz"), 10, 'Test 5');
test(maxRepOpt1("aabbccddeeffgg"), 2, 'Test 6');
test(maxRepOpt1("aabbccdd"), 2, 'Test 7');
test(maxRepOpt1("abacabadabacaba"), 3, 'Test 8');
test(maxRepOpt1("abbcccddddeeefffggghhh"), 4, 'Test 9');
test(maxRepOpt1("zzzxxzzz"), 4, 'Test 10');
test(maxRepOpt1("aabbaa"), 3, 'Test 11');
test(maxRepOpt1("ababababababababababababababababababababababababababababababababababababababababababababababababababab"), 3, 'Test 12');
test(maxRepOpt1("abcdefgabcdefgabcdefg"), 2, 'Test 13');
test(maxRepOpt1("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 106, 'Test 14');
test(maxRepOpt1("abcdabcabc"), 2, 'Test 15');
test(maxRepOpt1("abbcccddddeee"), 4, 'Test 16');
test(maxRepOpt1("zzzzzzzzzzzzzzzzzzzz"), 20, 'Test 17');
test(maxRepOpt1("aabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccdd"), 3, 'Test 18');
test(maxRepOpt1("ababcababcab"), 3, 'Test 19');
test(maxRepOpt1("aabbccddeeffgghhii"), 2, 'Test 20');
test(maxRepOpt1("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 2, 'Test 21');
test(maxRepOpt1("aaabaaa"), 6, 'Test 22');
test(maxRepOpt1("aabacaaa"), 5, 'Test 23');
test(maxRepOpt1("abcdefgabcdefg"), 2, 'Test 24');
test(maxRepOpt1("abcde"), 1, 'Test 25');
test(maxRepOpt1("aaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbaaab"), 4, 'Test 26');
test(maxRepOpt1("zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), 2, 'Test 27');
test(maxRepOpt1("aabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccdd"), 3, 'Test 28');
test(maxRepOpt1("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnoooo"), 4, 'Test 29');
test(maxRepOpt1("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 2, 'Test 30');
test(maxRepOpt1("abababababababababababababab"), 3, 'Test 31');
test(maxRepOpt1("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadaba"), 3, 'Test 32');
test(maxRepOpt1("aabbccccaaaabbccccaaaabbccccaaaabbccccaaaabbccccaaaabbccccaaaabbccccaaaabbccccaaaabbccccaaaa"), 5, 'Test 33');
test(maxRepOpt1("abacabadabacab"), 3, 'Test 34');
test(maxRepOpt1("aabbccccddddddaaaabbbcccc"), 6, 'Test 35');
test(maxRepOpt1("abracadabraabracadabraabracadabra"), 3, 'Test 36');
test(maxRepOpt1("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 2, 'Test 37');
test(maxRepOpt1("aaaaaaaaaabbbbbbbbbbccccccccccddddddddddaaaaaaaaaabbbbbbbbbbccccccccccddddddddddaaaaaaaaaabbbbbbbbbb"), 11, 'Test 38');
test(maxRepOpt1("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyxwvuutsrqponmlkjihgfedcba"), 3, 'Test 39');
test(maxRepOpt1("abababababababababababababababababababababababababababababababababababababababababababababab"), 3, 'Test 40');
test(maxRepOpt1("xyzyxyzyxyzyzyzyzyzyzyzyzyzyzyzyzyzyzyz"), 3, 'Test 41');
test(maxRepOpt1("aaaaabbbbbbccccccdddddeeeeeffffffffgggggghhhhhhiiiiiiijjjjjjkkkkkkklllllllmmmmmmmnnnnnnnooooooo"), 8, 'Test 42');
test(maxRepOpt1("aabccbaabbccbaabbccbaabbccbaabbccbaabbccbaabbccbaabbccbaabbccbaabbccbaabbccbaabbccbaabbccba"), 3, 'Test 43');
test(maxRepOpt1("aabbaabbaaabbbaabbaabbaabb"), 4, 'Test 44');
test(maxRepOpt1("qqqqwweerrttyyuiioopplkkjjhhggffddssaazzzxxxxccvvbbnmm"), 4, 'Test 45');
test(maxRepOpt1("aabbaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccdd"), 3, 'Test 46');
test(maxRepOpt1("ppppooooiiiiuuuueeeeooooooooaaaaaaaaaaaaaaaaaabbbbbbbbbbbb"), 18, 'Test 47');
test(maxRepOpt1("abccbaabccbaabccbaabccba"), 3, 'Test 48');
test(maxRepOpt1("abcabcabcabcabcabc"), 2, 'Test 49');
test(maxRepOpt1("abcdabcabcdabcabcdabcabcd"), 2, 'Test 50');
test(maxRepOpt1("aabbaaabbbaaabbaabbbaa"), 4, 'Test 51');
test(maxRepOpt1("aabbbccddddeeefffggg"), 4, 'Test 52');
test(maxRepOpt1("aabbaaabbbaaaabbbbaaabbbbaaaabbbbaaabbbbaaaabbbbaaabbbbaaaabbbbaaabbbbaaaabbbbaaabbbbaaaabb"), 5, 'Test 53');
test(maxRepOpt1("xyzzzzzzzzzzzzzyxzzzzzzzzzzzzzyx"), 14, 'Test 54');
test(maxRepOpt1("abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde"), 2, 'Test 55');
test(maxRepOpt1("abcdeedcbaedcbaedcba"), 3, 'Test 56');

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
