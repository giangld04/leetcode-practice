// Test: 2982. Find Longest Special Substring That Occurs Thrice Ii
// 22 test cases from LeetCodeDataset
// Run: node test.js

const { maximumLength } = require("./solution");

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

console.log("\n2982. Find Longest Special Substring That Occurs Thrice Ii\n");

test(maximumLength("zzzzzzzzz"), 7, 'Test 1');
test(maximumLength("aaabbbccc"), 1, 'Test 2');
test(maximumLength("aabbbcccaaa"), 2, 'Test 3');
test(maximumLength("abcdef"), -1, 'Test 4');
test(maximumLength("abacabadabacaba"), 1, 'Test 5');
test(maximumLength("abcabcabc"), 1, 'Test 6');
test(maximumLength("abcaba"), 1, 'Test 7');
test(maximumLength("aaaaabbbbccccc"), 3, 'Test 8');
test(maximumLength("aabbaabbcc"), 1, 'Test 9');
test(maximumLength("aaaaaaaaaa"), 8, 'Test 10');
test(maximumLength("aaaabbbbcccc"), 2, 'Test 11');
test(maximumLength("abababababa"), 1, 'Test 12');
test(maximumLength("abcdabcabcd"), 1, 'Test 13');
test(maximumLength("aabbccddeeefff"), 1, 'Test 14');
test(maximumLength("aabbccddeeffgg"), -1, 'Test 15');
test(maximumLength("aaaa"), 2, 'Test 16');
test(maximumLength("aaabaaa"), 2, 'Test 17');
test(maximumLength("aaaaabbbbbaaaa"), 4, 'Test 18');
test(maximumLength("nnnhaaaannn"), 2, 'Test 19');
test(maximumLength("zzzzz"), 3, 'Test 20');
test(maximumLength("aabbaabbccddccddc"), 1, 'Test 21');
test(maximumLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), -1, 'Test 22');

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
