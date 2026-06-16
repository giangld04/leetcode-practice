// Test: 3333. Find The Original Typed String Ii
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { possibleStringCount } = require("./solution");

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

console.log("\n3333. Find The Original Typed String Ii\n");

test(possibleStringCount("aaaaaa", 1), 6, 'Test 1');
test(possibleStringCount("aaabbcccddddeeeeeffffffggggghhhhhhiiiiijjjjjkkkkklllllmmmmmnnnnnooooo", 100), 0, 'Test 2');
test(possibleStringCount("aabbccc", 5), 8, 'Test 3');
test(possibleStringCount("aaaabbbbcccc", 10), 10, 'Test 4');
test(possibleStringCount("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 10), 67108864, 'Test 5');
test(possibleStringCount("aaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 20), 100663296, 'Test 6');
test(possibleStringCount("mississippi", 7), 8, 'Test 7');
test(possibleStringCount("aabbbccccc", 5), 26, 'Test 8');
test(possibleStringCount("zzzz", 2), 3, 'Test 9');
test(possibleStringCount("ababababab", 5), 1, 'Test 10');
test(possibleStringCount("abcabcabc", 6), 1, 'Test 11');
test(possibleStringCount("ababab", 2), 1, 'Test 12');
test(possibleStringCount("aabbbbccccddddeeeee", 15), 102, 'Test 13');
test(possibleStringCount("aabbc", 3), 4, 'Test 14');
test(possibleStringCount("abcd", 2), 1, 'Test 15');
test(possibleStringCount("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 26), 67108864, 'Test 16');
test(possibleStringCount("abcabcabc", 5), 1, 'Test 17');
test(possibleStringCount("aaabbb", 3), 8, 'Test 18');
test(possibleStringCount("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 10), 31, 'Test 19');
test(possibleStringCount("aaaabbbbcccc", 12), 1, 'Test 20');
test(possibleStringCount("abcabcabcabc", 12), 1, 'Test 21');
test(possibleStringCount("zzzzzzzz", 4), 5, 'Test 22');
test(possibleStringCount("abcdefghijklmnopqrstuvwxyz", 26), 1, 'Test 23');
test(possibleStringCount("aaaaaaaaaa", 5), 6, 'Test 24');
test(possibleStringCount("abcdefg", 7), 1, 'Test 25');
test(possibleStringCount("aaaaaaa", 2), 6, 'Test 26');
test(possibleStringCount("aabbaabbccddeeff", 8), 256, 'Test 27');
test(possibleStringCount("xyz", 2), 1, 'Test 28');
test(possibleStringCount("aaabaaa", 5), 6, 'Test 29');
test(possibleStringCount("aaaaaaa", 5), 3, 'Test 30');
test(possibleStringCount("abacabadabacaba", 10), 1, 'Test 31');
test(possibleStringCount("aabbccdd", 7), 5, 'Test 32');
test(possibleStringCount("qqqqqwwweeerrrtttyyuuiiooppaaasssddffgg", 10), 933120, 'Test 33');
test(possibleStringCount("abcde", 1), 1, 'Test 34');
test(possibleStringCount("aabbccddeeff", 6), 64, 'Test 35');
test(possibleStringCount("xyxyxyxy", 4), 1, 'Test 36');
test(possibleStringCount("mississippi", 5), 8, 'Test 37');
test(possibleStringCount("abcdefghijklmnopqrstuvwxyzz", 20), 2, 'Test 38');
test(possibleStringCount("aaaaaaaaaa", 10), 1, 'Test 39');
test(possibleStringCount("abcdefghijklmnopqrstuvwxyzaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 26), 67108864, 'Test 40');
test(possibleStringCount("abcdefghijklmnopqrst", 10), 1, 'Test 41');
test(possibleStringCount("abcabcabcabc", 4), 1, 'Test 42');
test(possibleStringCount("zzzzz", 4), 2, 'Test 43');
test(possibleStringCount("zzzzz", 3), 3, 'Test 44');
test(possibleStringCount("abcdefghij", 3), 1, 'Test 45');
test(possibleStringCount("abc", 1), 1, 'Test 46');
test(possibleStringCount("abcdefghij", 5), 1, 'Test 47');
test(possibleStringCount("aa", 1), 2, 'Test 48');
test(possibleStringCount("aab", 2), 2, 'Test 49');
test(possibleStringCount("qqqqqwwwwweeeee", 10), 53, 'Test 50');
test(possibleStringCount("abacabadaba", 10), 1, 'Test 51');
test(possibleStringCount("a", 1), 1, 'Test 52');
test(possibleStringCount("abcde", 5), 1, 'Test 53');
test(possibleStringCount("banana", 4), 1, 'Test 54');
test(possibleStringCount("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 100), 0, 'Test 55');
test(possibleStringCount("abcdefghijklmnopqrstuvwxyz", 25), 1, 'Test 56');
test(possibleStringCount("abcde", 3), 1, 'Test 57');
test(possibleStringCount("abcdefghijklmnopqrstuvwxyz", 2000), 0, 'Test 58');
test(possibleStringCount("pppppppppp", 10), 1, 'Test 59');
test(possibleStringCount("abcabcabcabc", 9), 1, 'Test 60');
test(possibleStringCount("abcd", 4), 1, 'Test 61');
test(possibleStringCount("abcdef", 4), 1, 'Test 62');
test(possibleStringCount("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", 100), 91, 'Test 63');
test(possibleStringCount("banana", 3), 1, 'Test 64');
test(possibleStringCount("zzzzzzzzzz", 10), 1, 'Test 65');
test(possibleStringCount("aabbccdd", 8), 1, 'Test 66');
test(possibleStringCount("abcde", 2), 1, 'Test 67');
test(possibleStringCount("aabbaa", 3), 8, 'Test 68');
test(possibleStringCount("abcdabcdabcd", 12), 1, 'Test 69');
test(possibleStringCount("mississippi", 11), 1, 'Test 70');
test(possibleStringCount("bbaaaabbbb", 5), 28, 'Test 71');
test(possibleStringCount("aabbcde", 5), 4, 'Test 72');
test(possibleStringCount("zzzzzzzzzz", 5), 6, 'Test 73');
test(possibleStringCount("aabbccddeeffgghhiijj", 10), 1024, 'Test 74');
test(possibleStringCount("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 100), 0, 'Test 75');
test(possibleStringCount("mississippi", 10), 4, 'Test 76');
test(possibleStringCount("abcdefghij", 10), 1, 'Test 77');
test(possibleStringCount("qqqqqwwwwweeeee", 5), 121, 'Test 78');
test(possibleStringCount("abcabcabcabcabcabcabcabcabcabc", 10), 1, 'Test 79');
test(possibleStringCount("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 20), 67108864, 'Test 80');
test(possibleStringCount("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 20), 1, 'Test 81');
test(possibleStringCount("abcdef", 6), 1, 'Test 82');
test(possibleStringCount("aaabbcccc", 6), 15, 'Test 83');
test(possibleStringCount("m", 1), 1, 'Test 84');
test(possibleStringCount("abcdefghijklmnopqrstuvwxyzzzz", 20), 4, 'Test 85');
test(possibleStringCount("abacabadabacaba", 5), 1, 'Test 86');
test(possibleStringCount("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 50), 352, 'Test 87');
test(possibleStringCount("abcabcabcabc", 6), 1, 'Test 88');
test(possibleStringCount("abcdefg", 4), 1, 'Test 89');
test(possibleStringCount("zzzzz", 1), 5, 'Test 90');
test(possibleStringCount("hello", 3), 2, 'Test 91');
test(possibleStringCount("abcdefghijklmnopqrstuvwxyzzzzzzzzzz", 20), 10, 'Test 92');
test(possibleStringCount("abcdabcdabcdabcd", 7), 1, 'Test 93');
test(possibleStringCount("abcdefghijklmnopqrstuvwxyz", 10), 1, 'Test 94');
test(possibleStringCount("abcdefghijklmnop", 5), 1, 'Test 95');
test(possibleStringCount("", 1), 1, 'Test 96');
test(possibleStringCount("aabbcccddd", 5), 35, 'Test 97');
test(possibleStringCount("aabb", 2), 4, 'Test 98');
test(possibleStringCount("abcdabcdabcd", 6), 1, 'Test 99');
test(possibleStringCount("abcdefghijklmnopqrstuvwxyza", 20), 1, 'Test 100');
test(possibleStringCount("aaaaaaaaaa", 2), 9, 'Test 101');
test(possibleStringCount("aaaaa", 3), 3, 'Test 102');
test(possibleStringCount("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 100), 17, 'Test 103');
test(possibleStringCount("xyxxyxyxyx", 3), 2, 'Test 104');

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
