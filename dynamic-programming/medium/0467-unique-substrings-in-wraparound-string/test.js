// Test: 467. Unique Substrings In Wraparound String
// 66 test cases from LeetCodeDataset
// Run: node test.js

const { findSubstringInWraproundString } = require("./solution");

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

console.log("\n467. Unique Substrings In Wraparound String\n");

test(findSubstringInWraproundString("qpqprstuvwxyzqpqprstuvwxyzqpqprstuvwxyz"), 48, 'Test 1');
test(findSubstringInWraproundString("abczabczabcz"), 10, 'Test 2');
test(findSubstringInWraproundString("abcdefghijklmnopqrstuvwxyz"), 351, 'Test 3');
test(findSubstringInWraproundString("azza"), 3, 'Test 4');
test(findSubstringInWraproundString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 5');
test(findSubstringInWraproundString("za"), 3, 'Test 6');
test(findSubstringInWraproundString("qpqprstuvwxyz"), 48, 'Test 7');
test(findSubstringInWraproundString("zaabcdefghijklmnopqrstuvwxyz"), 352, 'Test 8');
test(findSubstringInWraproundString("a"), 1, 'Test 9');
test(findSubstringInWraproundString("abcabcabc"), 6, 'Test 10');
test(findSubstringInWraproundString("zabcdefghijklmnopqrstuvwxyz"), 377, 'Test 11');
test(findSubstringInWraproundString("zzzzzzzzzzzzzzzzzzzz"), 1, 'Test 12');
test(findSubstringInWraproundString("xyzxyzxyz"), 6, 'Test 13');
test(findSubstringInWraproundString("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 1027, 'Test 14');
test(findSubstringInWraproundString("abcd"), 10, 'Test 15');
test(findSubstringInWraproundString("abczab"), 9, 'Test 16');
test(findSubstringInWraproundString("cac"), 2, 'Test 17');
test(findSubstringInWraproundString("cab"), 4, 'Test 18');
test(findSubstringInWraproundString("zab"), 6, 'Test 19');
test(findSubstringInWraproundString("zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 1053, 'Test 20');
test(findSubstringInWraproundString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 21');
test(findSubstringInWraproundString("abcabcdabcdeabcdefabcdefg"), 28, 'Test 22');
test(findSubstringInWraproundString("mnopqrstuvwxyza"), 120, 'Test 23');
test(findSubstringInWraproundString("pqrstuvwxyzabcdefghijklmno"), 351, 'Test 24');
test(findSubstringInWraproundString("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz"), 48, 'Test 25');
test(findSubstringInWraproundString("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 10, 'Test 26');
test(findSubstringInWraproundString("mnopqrstuvwxyzabcdefghijkl"), 351, 'Test 27');
test(findSubstringInWraproundString("nopqrstuvwxyzabcdefghijklmno"), 403, 'Test 28');
test(findSubstringInWraproundString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 29');
test(findSubstringInWraproundString("aaaaaaaaaabbbbbbbbcccccccc"), 5, 'Test 30');
test(findSubstringInWraproundString("qrstuvqrstuvqrstuvqrstuvqrstuvqrstuvqrstuvqrstuvqrstuv"), 21, 'Test 31');
test(findSubstringInWraproundString("vwxyzabcdefghijklmnopqrstu"), 351, 'Test 32');
test(findSubstringInWraproundString("abcdbca"), 10, 'Test 33');
test(findSubstringInWraproundString("zabzabzabzabzabzabzabzabzabzabzabzabzabzabzab"), 6, 'Test 34');
test(findSubstringInWraproundString("abacabadabacaba"), 5, 'Test 35');
test(findSubstringInWraproundString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 36');
test(findSubstringInWraproundString("abcabcabcabc"), 6, 'Test 37');
test(findSubstringInWraproundString("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 1703, 'Test 38');
test(findSubstringInWraproundString("cdefghijklmnopqrstuvwxyzab"), 351, 'Test 39');
test(findSubstringInWraproundString("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"), 55, 'Test 40');
test(findSubstringInWraproundString("abababababababababababababababababababab"), 3, 'Test 41');
test(findSubstringInWraproundString("abcdefgabcdefgabcdefgabcdefg"), 28, 'Test 42');
test(findSubstringInWraproundString("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 3055, 'Test 43');
test(findSubstringInWraproundString("abcdzabcde"), 21, 'Test 44');
test(findSubstringInWraproundString("abcdefghijklmnopqrstuvwxyzaabcdefghijklmnopqrstuvwxyzab"), 403, 'Test 45');
test(findSubstringInWraproundString("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 351, 'Test 46');
test(findSubstringInWraproundString("abcdefghijklmnopqrstuvwxyza"), 377, 'Test 47');
test(findSubstringInWraproundString("zzzzzzzzzz"), 1, 'Test 48');
test(findSubstringInWraproundString("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 2379, 'Test 49');
test(findSubstringInWraproundString("qpqrstuvwxyzabcdefghijklmno"), 351, 'Test 50');
test(findSubstringInWraproundString("xyzabcdezyxabcdezyxabcdezyxabcdezyxabcdezyxabcdezyx"), 36, 'Test 51');
test(findSubstringInWraproundString("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz"), 51, 'Test 52');
test(findSubstringInWraproundString("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz"), 6, 'Test 53');
test(findSubstringInWraproundString("qpqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), 27, 'Test 54');
test(findSubstringInWraproundString("abcdabcdeabcdefabcdefgabcdefg"), 28, 'Test 55');
test(findSubstringInWraproundString("abcdzabcdezabcdefzabcdefgzabcdefgz"), 36, 'Test 56');
test(findSubstringInWraproundString("zyxwvutsrqponmlkjihgfedcba"), 26, 'Test 57');
test(findSubstringInWraproundString("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyz"), 351, 'Test 58');
test(findSubstringInWraproundString("mnopqrstuvwxyzabcdefghijklmnop"), 455, 'Test 59');
test(findSubstringInWraproundString("zyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyz"), 351, 'Test 60');
test(findSubstringInWraproundString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 51, 'Test 61');
test(findSubstringInWraproundString("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), 351, 'Test 62');
test(findSubstringInWraproundString("zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), 26, 'Test 63');
test(findSubstringInWraproundString("xyzabcdefghijklmnopqrstuvwxyz"), 429, 'Test 64');
test(findSubstringInWraproundString("xyzabc"), 21, 'Test 65');
test(findSubstringInWraproundString("zzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 66');

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
