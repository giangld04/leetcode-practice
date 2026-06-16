// Test: 3389. Minimum Operations To Make Character Frequencies Equal
// 40 test cases from LeetCodeDataset
// Run: node test.js

const { makeStringGood } = require("./solution");

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

console.log("\n3389. Minimum Operations To Make Character Frequencies Equal\n");

test(makeStringGood("acab"), 1, 'Test 1');
test(makeStringGood("aaabc"), 2, 'Test 2');
test(makeStringGood("aabbbccc"), 1, 'Test 3');
test(makeStringGood("zzzz"), 0, 'Test 4');
test(makeStringGood("aabbcc"), 0, 'Test 5');
test(makeStringGood("abcdefghijklmnopqrstuvwxyz"), 0, 'Test 6');
test(makeStringGood("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 0, 'Test 7');
test(makeStringGood("abc"), 0, 'Test 8');
test(makeStringGood("zyxwvutsrqponmlkjihgfedcba"), 0, 'Test 9');
test(makeStringGood("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 0, 'Test 10');
test(makeStringGood("aabbbcc"), 1, 'Test 11');
test(makeStringGood("abcde"), 0, 'Test 12');
test(makeStringGood("aabbbcccc"), 2, 'Test 13');
test(makeStringGood("zzz"), 0, 'Test 14');
test(makeStringGood("wddw"), 0, 'Test 15');
test(makeStringGood("aabbbcccddddeeeee"), 4, 'Test 16');
test(makeStringGood("aabbbcccdddd"), 2, 'Test 17');
test(makeStringGood("zyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyx"), 0, 'Test 18');
test(makeStringGood("abacabadabacabadabacabad"), 9, 'Test 19');
test(makeStringGood("zyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 28, 'Test 20');
test(makeStringGood("ababababababababababab"), 0, 'Test 21');
test(makeStringGood("aabbaa"), 1, 'Test 22');
test(makeStringGood("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 23');
test(makeStringGood("aabbbcccddddeeeeefffffgggg"), 5, 'Test 24');
test(makeStringGood("abcdabcde"), 1, 'Test 25');
test(makeStringGood("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 0, 'Test 26');
test(makeStringGood("aabbbccccddddeeeeeffffffffgggggggg"), 10, 'Test 27');
test(makeStringGood("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 0, 'Test 28');
test(makeStringGood("aabbaaabbbaaaabbbbaaaa"), 2, 'Test 29');
test(makeStringGood("aaaaabbbbbcccc"), 1, 'Test 30');
test(makeStringGood("aabbaabbaabbaabb"), 0, 'Test 31');
test(makeStringGood("mnopqrstuvwxyzmnopqrstuvwxyzmnopqrstuvwxyzmnopqrstuvwxyz"), 0, 'Test 32');
test(makeStringGood("aaaabbbbccccddddaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 16, 'Test 33');
test(makeStringGood("aabccccdddddeeeeeeeeeee"), 9, 'Test 34');
test(makeStringGood("abcdabcdabcdabcd"), 0, 'Test 35');
test(makeStringGood("qqqwwweeeerrrrttttyyyyuuuuiiiiooooppppllllnnnnmmmmbbbb"), 2, 'Test 36');
test(makeStringGood("aabbccdd"), 0, 'Test 37');
test(makeStringGood("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 38');
test(makeStringGood("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 26, 'Test 39');
test(makeStringGood("zzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 40');

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
