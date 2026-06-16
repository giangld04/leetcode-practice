// Test: 2423. Remove Letter To Equalize Frequency
// 74 test cases from LeetCodeDataset
// Run: node test.js

const { equalFrequency } = require("./solution");

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

console.log("\n2423. Remove Letter To Equalize Frequency\n");

test(equalFrequency("aabbccd"), true, 'Test 1');
test(equalFrequency("aaabbbccc"), false, 'Test 2');
test(equalFrequency("zazaza"), false, 'Test 3');
test(equalFrequency("aaaaabbbbbcccc"), false, 'Test 4');
test(equalFrequency("zzzzzzzz"), true, 'Test 5');
test(equalFrequency("aabbccddeff"), true, 'Test 6');
test(equalFrequency("aabbbbcccc"), false, 'Test 7');
test(equalFrequency("aazz"), false, 'Test 8');
test(equalFrequency("aabbbccccc"), false, 'Test 9');
test(equalFrequency("aaa"), true, 'Test 10');
test(equalFrequency("aabbbccddd"), false, 'Test 11');
test(equalFrequency("abcdef"), true, 'Test 12');
test(equalFrequency("aabbcccddd"), false, 'Test 13');
test(equalFrequency("aabbc"), true, 'Test 14');
test(equalFrequency("aabbccddeee"), true, 'Test 15');
test(equalFrequency("abacabad"), false, 'Test 16');
test(equalFrequency("abcdabcd"), false, 'Test 17');
test(equalFrequency("aabbbccc"), false, 'Test 18');
test(equalFrequency("aabbccdde"), true, 'Test 19');
test(equalFrequency("aabbbcccc"), false, 'Test 20');
test(equalFrequency("aabbbcccccc"), false, 'Test 21');
test(equalFrequency("zzzz"), true, 'Test 22');
test(equalFrequency("abcc"), true, 'Test 23');
test(equalFrequency("xyyz"), true, 'Test 24');
test(equalFrequency("aab"), true, 'Test 25');
test(equalFrequency("aabbcc"), false, 'Test 26');
test(equalFrequency("abcde"), true, 'Test 27');
test(equalFrequency("aaabbbb"), true, 'Test 28');
test(equalFrequency("aabbbb"), false, 'Test 29');
test(equalFrequency("abcd"), true, 'Test 30');
test(equalFrequency("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), false, 'Test 31');
test(equalFrequency("abbbccddde"), false, 'Test 32');
test(equalFrequency("abcabcabc"), false, 'Test 33');
test(equalFrequency("qwerty"), true, 'Test 34');
test(equalFrequency("aabbbcccd"), false, 'Test 35');
test(equalFrequency("aabbccddd"), true, 'Test 36');
test(equalFrequency("abc"), true, 'Test 37');
test(equalFrequency("abcddd"), false, 'Test 38');
test(equalFrequency("abcdefghijklmnopqrstuvwxzy"), true, 'Test 39');
test(equalFrequency("aaaabbbb"), false, 'Test 40');
test(equalFrequency("aabbccc"), true, 'Test 41');
test(equalFrequency("abcdabcdabcd"), false, 'Test 42');
test(equalFrequency("abcdefghi"), true, 'Test 43');
test(equalFrequency("aabbcccd"), false, 'Test 44');
test(equalFrequency("abcdefghijj"), true, 'Test 45');
test(equalFrequency("aabbbcccdddde"), false, 'Test 46');
test(equalFrequency("aabbcccc"), false, 'Test 47');
test(equalFrequency("aabbccddeeefffg"), false, 'Test 48');
test(equalFrequency("aabbccddeeeffffgggg"), false, 'Test 49');
test(equalFrequency("aabbbccccddddeeeeeffffffggggg"), false, 'Test 50');
test(equalFrequency("aabbccddeeffg"), true, 'Test 51');
test(equalFrequency("zzzzzzzzzz"), true, 'Test 52');
test(equalFrequency("aabbbccccdddde"), false, 'Test 53');
test(equalFrequency("aabbccddeeffgg"), false, 'Test 54');
test(equalFrequency("abcdefghij"), true, 'Test 55');
test(equalFrequency("aabbccddeeffgggh"), false, 'Test 56');
test(equalFrequency("aabbccddeeff"), false, 'Test 57');
test(equalFrequency("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), true, 'Test 58');
test(equalFrequency("abcabcabcabcabcabcabcabc"), false, 'Test 59');
test(equalFrequency("zzzzzyyyyy"), false, 'Test 60');
test(equalFrequency("aaaabbbbccccdddd"), false, 'Test 61');
test(equalFrequency("aabbbccccdddd"), false, 'Test 62');
test(equalFrequency("aabbbcccddd"), false, 'Test 63');
test(equalFrequency("abcdefg"), true, 'Test 64');
test(equalFrequency("aabbbccccddddeeeeeffffff"), false, 'Test 65');
test(equalFrequency("abcdefghijjk"), true, 'Test 66');
test(equalFrequency("aabbbcccde"), false, 'Test 67');
test(equalFrequency("abbbbcccccdddddeeeeee"), false, 'Test 68');
test(equalFrequency("aabbccddeeeffff"), false, 'Test 69');
test(equalFrequency("aabbbccccddddeeeee"), false, 'Test 70');
test(equalFrequency("aabbccddeeffggghhhh"), false, 'Test 71');
test(equalFrequency("abcabcabcabc"), false, 'Test 72');
test(equalFrequency("aabbbcccdddd"), false, 'Test 73');
test(equalFrequency("aabbcddd"), false, 'Test 74');

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
