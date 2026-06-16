// Test: 1593. Split A String Into The Max Number Of Unique Substrings
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { maxUniqueSplit } = require("./solution");

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

console.log("\n1593. Split A String Into The Max Number Of Unique Substrings\n");

test(maxUniqueSplit("aaaabbbb"), 5, 'Test 1');
test(maxUniqueSplit("abcdefghijklmnopqrstuvwxyz"), 26, 'Test 2');
test(maxUniqueSplit("abac"), 3, 'Test 3');
test(maxUniqueSplit("abcdef"), 6, 'Test 4');
test(maxUniqueSplit("aaaaaaaab"), 4, 'Test 5');
test(maxUniqueSplit("a"), 1, 'Test 6');
test(maxUniqueSplit("zzzzzzz"), 3, 'Test 7');
test(maxUniqueSplit("abcabcabc"), 6, 'Test 8');
test(maxUniqueSplit("abcabcabcabc"), 7, 'Test 9');
test(maxUniqueSplit("ababccc"), 5, 'Test 10');
test(maxUniqueSplit("zzzzzzzzzzzzzzzz"), 5, 'Test 11');
test(maxUniqueSplit("aa"), 1, 'Test 12');
test(maxUniqueSplit("abcabc"), 4, 'Test 13');
test(maxUniqueSplit("abcdabcd"), 6, 'Test 14');
test(maxUniqueSplit("xyzxyzxyz"), 6, 'Test 15');
test(maxUniqueSplit("noon"), 3, 'Test 16');
test(maxUniqueSplit("abacabad"), 5, 'Test 17');
test(maxUniqueSplit("banana"), 4, 'Test 18');
test(maxUniqueSplit("aba"), 2, 'Test 19');
test(maxUniqueSplit("zzzzzz"), 3, 'Test 20');
test(maxUniqueSplit("aabbcc"), 4, 'Test 21');
test(maxUniqueSplit("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), Execution timed out, 'Test 22');
test(maxUniqueSplit("zabac"), 4, 'Test 23');
test(maxUniqueSplit("abcdabcdabcdabcd"), 9, 'Test 24');
test(maxUniqueSplit("abacaba"), 4, 'Test 25');
test(maxUniqueSplit("aabbccdd"), 6, 'Test 26');
test(maxUniqueSplit("abcdefg"), 7, 'Test 27');
test(maxUniqueSplit("abcdefghijabcdefghijabcdefghijabcdefghij"), Execution timed out, 'Test 28');
test(maxUniqueSplit("xyxyxyxyxyxyxyxy"), 7, 'Test 29');
test(maxUniqueSplit("ababcabcabc"), 7, 'Test 30');
test(maxUniqueSplit("abacabacabacabac"), 8, 'Test 31');
test(maxUniqueSplit("abacabadabacabadabacabadabacabad"), 13, 'Test 32');
test(maxUniqueSplit("xyzzyxzyxzy"), 7, 'Test 33');
test(maxUniqueSplit("ababababababababababababababababab"), 10, 'Test 34');
test(maxUniqueSplit("aaaaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz"), Execution timed out, 'Test 35');
test(maxUniqueSplit("abcdefghijabcdefghijabcdefghij"), 20, 'Test 36');
test(maxUniqueSplit("hellohellohello"), 9, 'Test 37');
test(maxUniqueSplit("abacabadabacabad"), 9, 'Test 38');
test(maxUniqueSplit("repaid"), 6, 'Test 39');
test(maxUniqueSplit("aaaaabbbbccccdddd"), 10, 'Test 40');
test(maxUniqueSplit("abccbaabccba"), 7, 'Test 41');
test(maxUniqueSplit("redder"), 4, 'Test 42');
test(maxUniqueSplit("aabaaaabbaabaaab"), 7, 'Test 43');
test(maxUniqueSplit("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), Execution timed out, 'Test 44');
test(maxUniqueSplit("abacaxabacaxabacax"), 10, 'Test 45');
test(maxUniqueSplit("optimization"), 10, 'Test 46');
test(maxUniqueSplit("aaaaaaaaaaaaaaa"), 5, 'Test 47');
test(maxUniqueSplit("zzzzzyyyyxxxxwwwwvvvvuuuuttttssssrrrrqqqqpppplllloooo"), Execution timed out, 'Test 48');
test(maxUniqueSplit("xyzzyxzyxzyzyxzyz"), 9, 'Test 49');
test(maxUniqueSplit("kayak"), 4, 'Test 50');
test(maxUniqueSplit("abcdabcde"), 7, 'Test 51');
test(maxUniqueSplit("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzz"), Execution timed out, 'Test 52');
test(maxUniqueSplit("qwertyuiopasdfghjklzxcvbnm"), 26, 'Test 53');
test(maxUniqueSplit("abababababababab"), 7, 'Test 54');
test(maxUniqueSplit("ababababababab"), 6, 'Test 55');
test(maxUniqueSplit("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzz"), Execution timed out, 'Test 56');
test(maxUniqueSplit("abcdefghijklmnopqrstuvqponmlkjihgfedcba"), Execution timed out, 'Test 57');
test(maxUniqueSplit("abababababab"), 6, 'Test 58');
test(maxUniqueSplit("zzzyzxzyzzzzzzzzzz"), 7, 'Test 59');
test(maxUniqueSplit("abcdefghijkabcdefghijk"), 16, 'Test 60');
test(maxUniqueSplit("abcabcabcabcabcabc"), 9, 'Test 61');
test(maxUniqueSplit("abcdefghijklmnop"), 16, 'Test 62');
test(maxUniqueSplit("level"), 4, 'Test 63');
test(maxUniqueSplit("ababababababababababababababababa"), 10, 'Test 64');
test(maxUniqueSplit("abcabcdabcdeabcde"), 10, 'Test 65');
test(maxUniqueSplit("abcdefghijjihgfedcba"), 15, 'Test 66');
test(maxUniqueSplit("aaaaaabbbbbbaaaaabbbbbbbaaaa"), 11, 'Test 67');
test(maxUniqueSplit("aabbaabbccddeeff"), 11, 'Test 68');
test(maxUniqueSplit("abacabadabacaba"), 8, 'Test 69');
test(maxUniqueSplit("xyzxyzxyzxyzxyzxyz"), 9, 'Test 70');
test(maxUniqueSplit("abcdabcdeabcdeabcd"), 11, 'Test 71');
test(maxUniqueSplit("abcdabcdaabbcc"), 9, 'Test 72');
test(maxUniqueSplit("abcdefgabcdefg"), 10, 'Test 73');
test(maxUniqueSplit("abcdeabcdeabcdeabcde"), 11, 'Test 74');
test(maxUniqueSplit("aabbaabbccdd"), 8, 'Test 75');
test(maxUniqueSplit("aabbccddeeffgg"), 10, 'Test 76');
test(maxUniqueSplit("detartrated"), 8, 'Test 77');
test(maxUniqueSplit("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), Execution timed out, 'Test 78');
test(maxUniqueSplit("abcdefghij"), 10, 'Test 79');
test(maxUniqueSplit("zyxwvutsrqponmlkjihgfedcba"), 26, 'Test 80');
test(maxUniqueSplit("aaaabbbbccccdddd"), 10, 'Test 81');
test(maxUniqueSplit("aabacabadaba"), 7, 'Test 82');
test(maxUniqueSplit("abacabadabacabadabacabad"), 11, 'Test 83');
test(maxUniqueSplit("deified"), 5, 'Test 84');
test(maxUniqueSplit("noonnoonnoon"), 6, 'Test 85');
test(maxUniqueSplit("repaper"), 5, 'Test 86');
test(maxUniqueSplit("abbaabbaabba"), 6, 'Test 87');
test(maxUniqueSplit("bcbcbcbcbcbcbcbc"), 7, 'Test 88');
test(maxUniqueSplit("aaaaaaaaaaaaaaaa"), 5, 'Test 89');
test(maxUniqueSplit("abacdfgdcaba"), 8, 'Test 90');
test(maxUniqueSplit("abcdeabcdeabcde"), 10, 'Test 91');
test(maxUniqueSplit("abcdabcabcda"), 8, 'Test 92');
test(maxUniqueSplit("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), Execution timed out, 'Test 93');
test(maxUniqueSplit("ababababab"), 5, 'Test 94');
test(maxUniqueSplit("abcdefgabcdefgabcdefg"), 14, 'Test 95');
test(maxUniqueSplit("rotor"), 4, 'Test 96');
test(maxUniqueSplit("abcdefghihgfedcba"), 13, 'Test 97');
test(maxUniqueSplit("racecar"), 5, 'Test 98');
test(maxUniqueSplit("abcdefghijabcdefghij"), 15, 'Test 99');
test(maxUniqueSplit("abcabcabcabcabcabcabcabc"), 10, 'Test 100');
test(maxUniqueSplit("aabbccddeeffggzzzz"), 13, 'Test 101');
test(maxUniqueSplit("abcdefabcdefabcdefabcdef"), 14, 'Test 102');
test(maxUniqueSplit("aaaaabbbbccccddddeeeefffggg"), 16, 'Test 103');
test(maxUniqueSplit("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), Execution timed out, 'Test 104');
test(maxUniqueSplit("reviled"), 6, 'Test 105');
test(maxUniqueSplit("abcdefghabcdefgh"), 12, 'Test 106');
test(maxUniqueSplit("pneumonoultramicroscopicsilicovolcanoconiosis"), Execution timed out, 'Test 107');
test(maxUniqueSplit("aabbccddeeffgghh"), 12, 'Test 108');
test(maxUniqueSplit("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzz"), Execution timed out, 'Test 109');
test(maxUniqueSplit("zzzzyyyxxxwwwvvvuuu"), 12, 'Test 110');
test(maxUniqueSplit("mississippi"), 7, 'Test 111');
test(maxUniqueSplit("abcdeabcdeabcdeabc"), 11, 'Test 112');
test(maxUniqueSplit("abcabcabcaabbcc"), 9, 'Test 113');
test(maxUniqueSplit("abcabcabcabcabc"), 8, 'Test 114');
test(maxUniqueSplit("xyzzzyxyzzzyxyzzzyxyzzzy"), 11, 'Test 115');

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
