// Test: 3. Longest Substring Without Repeating Characters
// 36 test cases from LeetCodeDataset
// Run: node test.js

const { lengthOfLongestSubstring } = require("./solution");

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

console.log("\n3. Longest Substring Without Repeating Characters\n");

test(lengthOfLongestSubstring("abcabcbb"), 3, 'Test 1');
test(lengthOfLongestSubstring("bbbbb"), 1, 'Test 2');
test(lengthOfLongestSubstring("pwwkew"), 3, 'Test 3');
test(lengthOfLongestSubstring("abcdabcabcabcd"), 4, 'Test 4');
test(lengthOfLongestSubstring("abcdefgabcdefgabcdefgabcdefg"), 7, 'Test 5');
test(lengthOfLongestSubstring("aabbccddeeff"), 2, 'Test 6');
test(lengthOfLongestSubstring("sldfjldskfjdslkfjsdkljflkjsdfljfsdlkflskdjflsdjflskdjflsdkjflsdfjlsd"), 6, 'Test 7');
test(lengthOfLongestSubstring("racecar"), 4, 'Test 8');
test(lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyz"), 26, 'Test 9');
test(lengthOfLongestSubstring("aabacbebebe"), 4, 'Test 10');
test(lengthOfLongestSubstring("ekdvdfis"), 5, 'Test 11');
test(lengthOfLongestSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz1234567890abcdefghijklmnopqrstuvwxyz"), 36, 'Test 12');
test(lengthOfLongestSubstring("abbaabbaabba"), 2, 'Test 13');
test(lengthOfLongestSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 2, 'Test 14');
test(lengthOfLongestSubstring("abcdefghihgfedcba"), 9, 'Test 15');
test(lengthOfLongestSubstring("abcdeffedcba"), 6, 'Test 16');
test(lengthOfLongestSubstring("aaaaaaaabbbbbbbccccccdddddeeeeeeffffffffggggggg"), 2, 'Test 17');
test(lengthOfLongestSubstring("tmmzuxt"), 5, 'Test 18');
test(lengthOfLongestSubstring("nfpdmpi"), 5, 'Test 19');
test(lengthOfLongestSubstring("anviaj"), 5, 'Test 20');
test(lengthOfLongestSubstring("abcdeabcde"), 5, 'Test 21');
test(lengthOfLongestSubstring("abcdabcabcd"), 4, 'Test 22');
test(lengthOfLongestSubstring("dvdf"), 3, 'Test 23');
test(lengthOfLongestSubstring("zyxwvutsrqponmlkjihgfedcba"), 26, 'Test 24');
test(lengthOfLongestSubstring("abcdabcdeabcdabcdeabcd"), 5, 'Test 25');
test(lengthOfLongestSubstring("rjqzupkoz"), 8, 'Test 26');
test(lengthOfLongestSubstring("ababababababababab"), 2, 'Test 27');
test(lengthOfLongestSubstring("!@#$%^&*[]_+!@#$%^&*[]_+"), 12, 'Test 28');
test(lengthOfLongestSubstring("cdddddddddddddd"), 2, 'Test 29');
test(lengthOfLongestSubstring("wobgrovw"), 6, 'Test 30');
test(lengthOfLongestSubstring("abba"), 2, 'Test 31');
test(lengthOfLongestSubstring("abcbacabc"), 3, 'Test 32');
test(lengthOfLongestSubstring("ohvhjdml"), 6, 'Test 33');
test(lengthOfLongestSubstring("123456789012345678901234567890"), 10, 'Test 34');
test(lengthOfLongestSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz1234567890!@#$%^&*[]_+"), 23, 'Test 35');
test(lengthOfLongestSubstring("12345678901234567890"), 10, 'Test 36');

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
