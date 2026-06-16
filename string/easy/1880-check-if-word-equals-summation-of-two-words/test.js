// Test: 1880. Check If Word Equals Summation Of Two Words
// 73 test cases from LeetCodeDataset
// Run: node test.js

const { isSumEqual } = require("./solution");

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

console.log("\n1880. Check If Word Equals Summation Of Two Words\n");

test(isSumEqual("ij", "ji", "ii"), false, 'Test 1');
test(isSumEqual("fgh", "ghf", "ggg"), false, 'Test 2');
test(isSumEqual("ij", "ji", "jjj"), false, 'Test 3');
test(isSumEqual("b", "c", "d"), true, 'Test 4');
test(isSumEqual("abcdefghij", "abcdefghij", "aaaaaaaaaa"), false, 'Test 5');
test(isSumEqual("i", "j", "ji"), false, 'Test 6');
test(isSumEqual("ab", "ba", "bb"), true, 'Test 7');
test(isSumEqual("j", "j", "i"), false, 'Test 8');
test(isSumEqual("a", "a", "b"), false, 'Test 9');
test(isSumEqual("aaa", "a", "aab"), false, 'Test 10');
test(isSumEqual("aaa", "a", "aaaa"), true, 'Test 11');
test(isSumEqual("acb", "cba", "cdb"), true, 'Test 12');
test(isSumEqual("j", "j", "jj"), false, 'Test 13');
test(isSumEqual("acacacac", "bdbdbdbd", "cececece"), false, 'Test 14');
test(isSumEqual("aaaabbbb", "ccccdddd", "aaaabbbbccccdddd"), false, 'Test 15');
test(isSumEqual("ijijijij", "jijijiji", "jjjjjjjjjj"), false, 'Test 16');
test(isSumEqual("ijijij", "jijiji", "jjjjjjjj"), false, 'Test 17');
test(isSumEqual("j", "jj", "jjj"), false, 'Test 18');
test(isSumEqual("abcdefghij", "abcdefghi", "aaaaaaaaaa"), false, 'Test 19');
test(isSumEqual("babcbabcba", "cbabcbabcb", "bbbbbbaaaa"), false, 'Test 20');
test(isSumEqual("jihgfedcba", "abcdefghij", "aaaaaaaaaa"), false, 'Test 21');
test(isSumEqual("abcdefghij", "abcdefghij", "jjjjjjjjjj"), false, 'Test 22');
test(isSumEqual("ijkl", "lkji", "jjjjjj"), false, 'Test 23');
test(isSumEqual("ijijij", "ijijij", "jjjjjjjj"), false, 'Test 24');
test(isSumEqual("hjihj", "ihjih", "jjjjj"), false, 'Test 25');
test(isSumEqual("aabbcc", "ddeeff", "gggggh"), false, 'Test 26');
test(isSumEqual("abcdefgh", "abcdefgh", "hhhhhhhh"), false, 'Test 27');
test(isSumEqual("babababa", "babababa", "cacacaca"), true, 'Test 28');
test(isSumEqual("aaa", "bbb", "ccc"), false, 'Test 29');
test(isSumEqual("iiii", "jjjj", "jjjjjjjj"), false, 'Test 30');
test(isSumEqual("abcdefghi", "j", "abcdefghij"), false, 'Test 31');
test(isSumEqual("abcdefghij", "abcdefghi", "jjjjjjjjj"), false, 'Test 32');
test(isSumEqual("abcdefghijabcdefghij", "abcdefghijabcdefghij", "jjjjjjjjjjjjjjjjjjjj"), false, 'Test 33');
test(isSumEqual("abcdefgh", "hgfedcba", "aaaaaaaaaa"), false, 'Test 34');
test(isSumEqual("abcdefgh", "hgfedcba", "abcdefghhgfedcba"), false, 'Test 35');
test(isSumEqual("abcdefgh", "abcdefgh", "ggggggggg"), false, 'Test 36');
test(isSumEqual("abc", "def", "defabc"), false, 'Test 37');
test(isSumEqual("abcdefghij", "abcdefghi", "abcdefghijj"), false, 'Test 38');
test(isSumEqual("abcdefgh", "abcdefgh", "aaaaaaaaaaaaaaaa"), false, 'Test 39');
test(isSumEqual("aabbccddeeff", "ffeeddccbbaa", "feebbaaccdd"), false, 'Test 40');
test(isSumEqual("a", "b", "c"), false, 'Test 41');
test(isSumEqual("abcdefgh", "hgfedcba", "jjjjjjjj"), false, 'Test 42');
test(isSumEqual("abcd", "efgh", "ijkl"), false, 'Test 43');
test(isSumEqual("jjjjj", "jjjjj", "jjjjjjj"), false, 'Test 44');
test(isSumEqual("aaaaaaaa", "bbbbbbbb", "cccccccc"), false, 'Test 45');
test(isSumEqual("aabbccdd", "dccbbaaa", "dddddddd"), false, 'Test 46');
test(isSumEqual("abcdefghij", "abcdefghij", "iiiiiiiiii"), false, 'Test 47');
test(isSumEqual("abcabcabc", "cbacbacba", "bbbcccbbb"), false, 'Test 48');
test(isSumEqual("iiii", "jjjj", "jjjjjj"), false, 'Test 49');
test(isSumEqual("abcdefghi", "abcdefghj", "jjjjjjjjj"), false, 'Test 50');
test(isSumEqual("ijijijijij", "jijijijiji", "jjjjjjjjjjj"), false, 'Test 51');
test(isSumEqual("abcde", "edcba", "abcdeedcba"), false, 'Test 52');
test(isSumEqual("ijijijij", "hghghghg", "gggggggg"), false, 'Test 53');
test(isSumEqual("abcdefghij", "abcdefghija", "jjjjjjjjjjj"), false, 'Test 54');
test(isSumEqual("jijij", "ijiji", "jjjjjjj"), false, 'Test 55');
test(isSumEqual("abcdefghij", "abcdefghij", "abcdefghijabcdefghij"), false, 'Test 56');
test(isSumEqual("ijijij", "jijiji", "jjjjjjjjjjjj"), false, 'Test 57');
test(isSumEqual("abcdefghij", "abcdefghij", "aaaaaaaaaab"), false, 'Test 58');
test(isSumEqual("abcdefgh", "hgfedcba", "abcdefghij"), false, 'Test 59');
test(isSumEqual("abcdefghij", "abcdefghij", "aaaaaaaaaabbbbbbbbbb"), false, 'Test 60');
test(isSumEqual("abcdefghi", "hgfedcba", "jjjjjjjjj"), false, 'Test 61');
test(isSumEqual("jihgfedcba", "abcdefghij", "jjjjjjjjjj"), true, 'Test 62');
test(isSumEqual("abcdefghij", "abcdefghij", "ijijijijij"), false, 'Test 63');
test(isSumEqual("jijijijijij", "jijijijijij", "jjjjjjjjjjjjjjjjjjj"), false, 'Test 64');
test(isSumEqual("aabbccddeeffgg", "hhiijjkkllmm", "jjjjjjjjjjjj"), false, 'Test 65');
test(isSumEqual("abcdefghij", "abcdefghij", "aaaaaaaaaaab"), false, 'Test 66');
test(isSumEqual("abcdefgh", "hgfedcba", "jjjjjjj"), false, 'Test 67');
test(isSumEqual("abcde", "edcba", "jjjjj"), false, 'Test 68');
test(isSumEqual("hgfedcba", "abcdefgh", "iiiiiiii"), false, 'Test 69');
test(isSumEqual("jijij", "ijiji", "jjjjj"), false, 'Test 70');
test(isSumEqual("j", "ij", "ji"), true, 'Test 71');
test(isSumEqual("aabbccdd", "ddeeffgg", "hhiijjkk"), false, 'Test 72');
test(isSumEqual("jij", "iji", "jjjj"), false, 'Test 73');

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
