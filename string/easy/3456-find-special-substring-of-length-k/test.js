// Test: 3456. Find Special Substring Of Length K
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { hasSpecialSubstring } = require("./solution");

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

console.log("\n3456. Find Special Substring Of Length K\n");

test(hasSpecialSubstring("abc", 2), false, 'Test 1');
test(hasSpecialSubstring("aabbccddeeff", 2), true, 'Test 2');
test(hasSpecialSubstring("abcde", 1), true, 'Test 3');
test(hasSpecialSubstring("zzzz", 4), true, 'Test 4');
test(hasSpecialSubstring("xyzxyz", 1), true, 'Test 5');
test(hasSpecialSubstring("abcdabcd", 2), false, 'Test 6');
test(hasSpecialSubstring("aaaaa", 3), false, 'Test 7');
test(hasSpecialSubstring("zzzzz", 5), true, 'Test 8');
test(hasSpecialSubstring("aabbcc", 2), true, 'Test 9');
test(hasSpecialSubstring("aaabaaa", 3), true, 'Test 10');
test(hasSpecialSubstring("xyzxxxxxzyx", 6), false, 'Test 11');
test(hasSpecialSubstring("aaabbbcccddd", 4), false, 'Test 12');
test(hasSpecialSubstring("xyzxxxxxyzzzzzzzzz", 4), false, 'Test 13');
test(hasSpecialSubstring("mmmmnmmmmm", 5), true, 'Test 14');
test(hasSpecialSubstring("mnopqrrrrrstuvwxyz", 5), true, 'Test 15');
test(hasSpecialSubstring("pppppqqqqqqppppp", 5), true, 'Test 16');
test(hasSpecialSubstring("llllllllllllllllllll", 10), false, 'Test 17');
test(hasSpecialSubstring("aabbbcccccddddd", 5), true, 'Test 18');
test(hasSpecialSubstring("aabbccddeeffgghhhiii", 3), true, 'Test 19');
test(hasSpecialSubstring("abababababababa", 3), false, 'Test 20');
test(hasSpecialSubstring("aaaabbbbaaaa", 3), false, 'Test 21');
test(hasSpecialSubstring("xyzxyzxyzxyzxyz", 3), false, 'Test 22');
test(hasSpecialSubstring("abcdefghijjjjklmnop", 5), false, 'Test 23');
test(hasSpecialSubstring("abcdefghijjjjjjklmnopqr", 6), true, 'Test 24');
test(hasSpecialSubstring("aabbaaabbbaaa", 3), true, 'Test 25');
test(hasSpecialSubstring("aabbccddeeffgghhiijjkk", 2), true, 'Test 26');
test(hasSpecialSubstring("xyzzzzzyx", 4), false, 'Test 27');
test(hasSpecialSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 40), false, 'Test 28');
test(hasSpecialSubstring("mnopqrssssstuvw", 5), true, 'Test 29');
test(hasSpecialSubstring("ppppqqqqrrrr", 4), true, 'Test 30');
test(hasSpecialSubstring("aaaaabbbbbbcccccc", 5), true, 'Test 31');
test(hasSpecialSubstring("abccccba", 4), true, 'Test 32');
test(hasSpecialSubstring("abcdeeeefgh", 4), true, 'Test 33');
test(hasSpecialSubstring("abcdefffgghijklmnoooppqrstuvwwxyz", 3), true, 'Test 34');
test(hasSpecialSubstring("abcdeffghiiijjjjjklmnop", 5), true, 'Test 35');
test(hasSpecialSubstring("qweeeeeeret", 5), false, 'Test 36');
test(hasSpecialSubstring("abcdefffffghijkl", 5), true, 'Test 37');
test(hasSpecialSubstring("abccbaabccba", 2), true, 'Test 38');
test(hasSpecialSubstring("mnopqrstuvwxyzjjjjjjjjjjjjjjjjmnopqrstuvwxyz", 15), false, 'Test 39');
test(hasSpecialSubstring("xyzzyzx", 2), true, 'Test 40');
test(hasSpecialSubstring("zzzaaaazzz", 3), true, 'Test 41');
test(hasSpecialSubstring("ababababab", 2), false, 'Test 42');
test(hasSpecialSubstring("abcdefghijaaaaaaaaaaaabcdefghij", 12), true, 'Test 43');
test(hasSpecialSubstring("abcccba", 3), true, 'Test 44');
test(hasSpecialSubstring("tttttttttt", 10), true, 'Test 45');
test(hasSpecialSubstring("ccccabcccc", 4), true, 'Test 46');
test(hasSpecialSubstring("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", 10), false, 'Test 47');
test(hasSpecialSubstring("abcdefghijklmnopqrstuvwxyzzzzzzzzzzzzyxwvutsrqponmlkjihgfedcba", 11), false, 'Test 48');
test(hasSpecialSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 50), false, 'Test 49');
test(hasSpecialSubstring("aabbbaaacc", 3), true, 'Test 50');
test(hasSpecialSubstring("abcdefghijaaaaaaaaaabcdefghij", 10), true, 'Test 51');
test(hasSpecialSubstring("mnopqrstuuuuuuvwxyzz", 5), false, 'Test 52');
test(hasSpecialSubstring("xxxyyyzzz", 3), true, 'Test 53');
test(hasSpecialSubstring("mnonononononono", 7), false, 'Test 54');
test(hasSpecialSubstring("abccccd", 4), true, 'Test 55');
test(hasSpecialSubstring("abcdefghijjjjjjjjjklmnopqrstuvwxyz", 8), false, 'Test 56');
test(hasSpecialSubstring("aaaaabaaaabaaa", 5), true, 'Test 57');
test(hasSpecialSubstring("xxyyyyyyz", 5), false, 'Test 58');
test(hasSpecialSubstring("zzzzzzzzzzz", 10), false, 'Test 59');
test(hasSpecialSubstring("mnopqrrrpqmn", 3), true, 'Test 60');
test(hasSpecialSubstring("aabaaaabaa", 4), true, 'Test 61');
test(hasSpecialSubstring("aabbbaa", 3), true, 'Test 62');
test(hasSpecialSubstring("aaabbbcccddd", 3), true, 'Test 63');
test(hasSpecialSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 30), false, 'Test 64');
test(hasSpecialSubstring("dddddeeeee", 5), true, 'Test 65');
test(hasSpecialSubstring("xyzzzyxyzzzy", 4), false, 'Test 66');
test(hasSpecialSubstring("abcdefghi", 1), true, 'Test 67');
test(hasSpecialSubstring("mnopqrrrrrrstuv", 6), true, 'Test 68');
test(hasSpecialSubstring("aaaaabbbbbcccccdddddeeeee", 5), true, 'Test 69');
test(hasSpecialSubstring("aaaaaaaaaabbbbbbbbbb", 10), true, 'Test 70');
test(hasSpecialSubstring("abababababababababab", 1), true, 'Test 71');
test(hasSpecialSubstring("zzzzzzzzzzzzzzzzzzzz", 1), false, 'Test 72');
test(hasSpecialSubstring("aaaaaabbbaaaaa", 3), true, 'Test 73');
test(hasSpecialSubstring("xyxyxyxyxyxyxyxyxyxyxy", 3), false, 'Test 74');
test(hasSpecialSubstring("abcdefghijkllllllmnop", 6), true, 'Test 75');
test(hasSpecialSubstring("abcdeeeeefghijjjjkl", 4), true, 'Test 76');
test(hasSpecialSubstring("xyzzzzzzxy", 6), true, 'Test 77');
test(hasSpecialSubstring("aaaaaabaaaaaabaaa", 6), true, 'Test 78');
test(hasSpecialSubstring("mnopqrstuvwxyzmnopqrstuvwxyzmnopqrstuvwxyz", 26), false, 'Test 79');
test(hasSpecialSubstring("zzzzzzzzzzzzzzzzzzzz", 10), false, 'Test 80');
test(hasSpecialSubstring("abcabcabc", 1), true, 'Test 81');
test(hasSpecialSubstring("abcdefg", 1), true, 'Test 82');
test(hasSpecialSubstring("abcabcabcabcabc", 1), true, 'Test 83');
test(hasSpecialSubstring("mmmmmnnnnn", 5), true, 'Test 84');
test(hasSpecialSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzz", 15), false, 'Test 85');
test(hasSpecialSubstring("abcabcabcabcabcabc", 2), false, 'Test 86');
test(hasSpecialSubstring("abcdabcdabcdabcdabcd", 4), false, 'Test 87');
test(hasSpecialSubstring("aaaaaaaaaabbbbbbbbbc", 9), true, 'Test 88');
test(hasSpecialSubstring("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", 30), false, 'Test 89');
test(hasSpecialSubstring("mnopqrstu", 4), false, 'Test 90');
test(hasSpecialSubstring("xyzxyzzzzzzxyz", 5), false, 'Test 91');
test(hasSpecialSubstring("qqqqqqqqqqqqqqqqqqqq", 10), false, 'Test 92');
test(hasSpecialSubstring("abacadaeaf", 2), false, 'Test 93');
test(hasSpecialSubstring("njjjjjjjjjjnj", 10), true, 'Test 94');
test(hasSpecialSubstring("kjjjjjjjjjjjjjjjkl", 13), false, 'Test 95');
test(hasSpecialSubstring("mmmmnnnnnnmmmm", 6), true, 'Test 96');
test(hasSpecialSubstring("aabbccddeeeeffffgggghhhh", 4), true, 'Test 97');
test(hasSpecialSubstring("abcdefghijjjjjjklmnop", 7), false, 'Test 98');
test(hasSpecialSubstring("abccccccab", 6), true, 'Test 99');
test(hasSpecialSubstring("aaaabbbbccccddddeeeeffff", 3), false, 'Test 100');
test(hasSpecialSubstring("aabbbaaabbbaaabbbaaa", 4), false, 'Test 101');
test(hasSpecialSubstring("xyzzyxzyxzyxzyxzyx", 2), true, 'Test 102');
test(hasSpecialSubstring("pppppqqqqqppppp", 5), true, 'Test 103');
test(hasSpecialSubstring("abcdefghijkllllllmnopqrstuv", 6), true, 'Test 104');
test(hasSpecialSubstring("abcddeeeffggggghij", 4), false, 'Test 105');
test(hasSpecialSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10), false, 'Test 106');
test(hasSpecialSubstring("zzzzzaaaaazzzzz", 4), false, 'Test 107');
test(hasSpecialSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 2), true, 'Test 108');
test(hasSpecialSubstring("aabbbcccddd", 3), true, 'Test 109');
test(hasSpecialSubstring("ababababababababababababababababab", 3), false, 'Test 110');
test(hasSpecialSubstring("zzzzzazzzzz", 5), true, 'Test 111');

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
