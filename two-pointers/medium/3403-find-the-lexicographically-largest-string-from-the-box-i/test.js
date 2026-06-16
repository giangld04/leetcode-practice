// Test: 3403. Find The Lexicographically Largest String From The Box I
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { answerString } = require("./solution");

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

console.log("\n3403. Find The Lexicographically Largest String From The Box I\n");

test(answerString("aabbcc", 2), cc, 'Test 1');
test(answerString("zxy", 1), zxy, 'Test 2');
test(answerString("zyxwvutsrqponmlkjihgfedcba", 5), zyxwvutsrqponmlkjihgfe, 'Test 3');
test(answerString("aabbccddeeff", 6), ff, 'Test 4');
test(answerString("gggg", 4), g, 'Test 5');
test(answerString("aabbcc", 6), c, 'Test 6');
test(answerString("abcdefg", 7), g, 'Test 7');
test(answerString("abcdef", 3), f, 'Test 8');
test(answerString("banana", 3), nana, 'Test 9');
test(answerString("zzzzzz", 2), zzzzz, 'Test 10');
test(answerString("racecar", 5), rac, 'Test 11');
test(answerString("abcde", 3), e, 'Test 12');
test(answerString("zyxwvut", 3), zyxwv, 'Test 13');
test(answerString("zxy", 3), z, 'Test 14');
test(answerString("abcde", 2), e, 'Test 15');
test(answerString("dbca", 2), dbc, 'Test 16');
test(answerString("abcdef", 2), f, 'Test 17');
test(answerString("aabbcc", 3), cc, 'Test 18');
test(answerString("xyzzxyzzyx", 5), zzyx, 'Test 19');
test(answerString("aaaaabbbbccccdddd", 10), dddd, 'Test 20');
test(answerString("level", 3), vel, 'Test 21');
test(answerString("aaaaabbbbccccddddeeeee", 5), eeeee, 'Test 22');
test(answerString("leetcodeisfun", 5), un, 'Test 23');
test(answerString("abcdabcdabcdabcd", 4), dabcdabcdabcd, 'Test 24');
test(answerString("abcdefghij", 5), j, 'Test 25');
test(answerString("amazingrace", 3), zingrace, 'Test 26');
test(answerString("racecar", 2), raceca, 'Test 27');
test(answerString("zzzzyyyyxxxwwwwvvvuuutttsssrrrqqqppoonn", 10), zzzzyyyyxxxwwwwvvvuuutttsssrrr, 'Test 28');
test(answerString("abcdedcba", 5), edcba, 'Test 29');
test(answerString("mamamamamamamama", 12), mamam, 'Test 30');
test(answerString("bananabananabanana", 6), nanabananaban, 'Test 31');
test(answerString("hello", 1), hello, 'Test 32');
test(answerString("abcdefghij", 10), j, 'Test 33');
test(answerString("abcabcabcabcabcabcabcabcabcabc", 9), cabcabcabcabcabcabcabc, 'Test 34');
test(answerString("zzzzzzyxwvutsrqponmlkjihgfedcba", 3), zzzzzzyxwvutsrqponmlkjihgfedc, 'Test 35');
test(answerString("abracadabra", 5), racadab, 'Test 36');
test(answerString("pneumonoultramicroscopicsilicovolcanoconiosis", 10), volcanoconiosis, 'Test 37');
test(answerString("mississippi", 4), ssissipp, 'Test 38');
test(answerString("abcdabcdabcdabcdabcdabcdabcdabcd", 4), dabcdabcdabcdabcdabcdabcdabcd, 'Test 39');
test(answerString("abcdefghijklmnopqrstuvwxyz", 5), z, 'Test 40');
test(answerString("zyxwvutsrqponmlkjihgfedcba", 10), zyxwvutsrqponmlkj, 'Test 41');
test(answerString("abcdabcdaaaa", 5), dabcdaaa, 'Test 42');
test(answerString("deified", 2), ified, 'Test 43');
test(answerString("madam", 3), mad, 'Test 44');
test(answerString("abcdabcdabcdabcd", 5), dabcdabcdabc, 'Test 45');
test(answerString("oneonetwoonethree", 4), woonethree, 'Test 46');
test(answerString("aaaabbbbcccc", 6), cccc, 'Test 47');
test(answerString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 3), zzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 48');
test(answerString("zyxwvutsrqponmlkjihgfedcba", 3), zyxwvutsrqponmlkjihgfedc, 'Test 49');
test(answerString("zzzzzzzzzzzzzzzzzzzz", 10), zzzzzzzzzzz, 'Test 50');
test(answerString("hellohellohello", 3), ohellohello, 'Test 51');
test(answerString("abcdefghijklmnopqrstuvwxyz", 26), z, 'Test 52');
test(answerString("leetcode", 3), tcode, 'Test 53');
test(answerString("abacabadabacaba", 7), dabacaba, 'Test 54');
test(answerString("aaaaaaaaaaa", 3), aaaaaaaaa, 'Test 55');
test(answerString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 10), zz, 'Test 56');
test(answerString("xyzxyzxyz", 3), zxyzxyz, 'Test 57');
test(answerString("zzzzyyyy", 4), zzzzy, 'Test 58');
test(answerString("aabbccddeeffgghh", 8), hh, 'Test 59');
test(answerString("elephant", 2), t, 'Test 60');
test(answerString("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 100), , 'Test 61');
test(answerString("xyzxyzxyzxyz", 4), zxyzxyzxy, 'Test 62');
test(answerString("zyxzyxzyxzyxzyxzyxzyx", 5), zyxzyxzyxzyxzyxzy, 'Test 63');
test(answerString("zzzzzzzz", 8), z, 'Test 64');
test(answerString("lemonadelemonade", 6), onadelemona, 'Test 65');
test(answerString("aaaabbbbccccddddeeeeffff", 10), ffff, 'Test 66');
test(answerString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 26), zz, 'Test 67');
test(answerString("abcdefghijklmnopqrstuvwxyz", 1), abcdefghijklmnopqrstuvwxyz, 'Test 68');
test(answerString("racecar", 3), racec, 'Test 69');
test(answerString("abcabcabcabc", 8), cabca, 'Test 70');
test(answerString("mississippi", 3), ssissippi, 'Test 71');
test(answerString("xyzzzxyzzzxyzzz", 3), zzzxyzzzxyzzz, 'Test 72');
test(answerString("qwertyuiopasdfghjklzxcvbnm", 5), zxcvbnm, 'Test 73');
test(answerString("refer", 5), r, 'Test 74');
test(answerString("banana", 2), nana, 'Test 75');
test(answerString("hellohellomyfriend", 7), yfriend, 'Test 76');
test(answerString("abcabcabcabcabcabc", 6), cabcabcabcabc, 'Test 77');
test(answerString("pqrsrstuv", 4), v, 'Test 78');
test(answerString("zzzzzzzzzzzzzzzzzzzz", 20), z, 'Test 79');
test(answerString("zzzzzzyyyyyy", 3), zzzzzzyyyy, 'Test 80');
test(answerString("thisisalongword", 4), word, 'Test 81');
test(answerString("abcdefghijklmnopqrstuvwxyz", 10), z, 'Test 82');
test(answerString("leetcodecontest", 4), test, 'Test 83');
test(answerString("mnopqrstu", 3), u, 'Test 84');
test(answerString("abracadabra", 3), racadabra, 'Test 85');
test(answerString("rotor", 1), rotor, 'Test 86');
test(answerString("hello", 5), o, 'Test 87');
test(answerString("hellothere", 2), there, 'Test 88');
test(answerString("zyxzyxzyx", 4), zyxzyx, 'Test 89');
test(answerString("aaaabbbbccccdddd", 4), dddd, 'Test 90');
test(answerString("aaaabbbbccccdddd", 8), dddd, 'Test 91');
test(answerString("xyzzyx", 3), zzyx, 'Test 92');
test(answerString("abacabadabacaba", 5), dabacaba, 'Test 93');

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
