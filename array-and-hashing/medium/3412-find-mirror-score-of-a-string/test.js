// Test: 3412. Find Mirror Score Of A String
// 74 test cases from LeetCodeDataset
// Run: node test.js

const { calculateScore } = require("./solution");

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

console.log("\n3412. Find Mirror Score Of A String\n");

test(calculateScore("b"), 0, 'Test 1');
test(calculateScore("mirror"), 1, 'Test 2');
test(calculateScore("az"), 1, 'Test 3');
test(calculateScore("abbabba"), 0, 'Test 4');
test(calculateScore("abcba"), 0, 'Test 5');
test(calculateScore("abcdefghijklmnopqrstuvwxyz"), 169, 'Test 6');
test(calculateScore("qpwoeirutyplkjhgfdsazxcvbnm"), 96, 'Test 7');
test(calculateScore("abzabzabz"), 6, 'Test 8');
test(calculateScore("abcdef"), 0, 'Test 9');
test(calculateScore("zazbzczdz"), 1, 'Test 10');
test(calculateScore("a"), 0, 'Test 11');
test(calculateScore("azbzczdzezfz"), 1, 'Test 12');
test(calculateScore("ab"), 0, 'Test 13');
test(calculateScore("aa"), 0, 'Test 14');
test(calculateScore("abcddcba"), 0, 'Test 15');
test(calculateScore("zxyyxz"), 0, 'Test 16');
test(calculateScore("racecar"), 0, 'Test 17');
test(calculateScore("abba"), 0, 'Test 18');
test(calculateScore("aczzx"), 5, 'Test 19');
test(calculateScore("azbzczdzez"), 1, 'Test 20');
test(calculateScore("aabbccddeeffgg"), 0, 'Test 21');
test(calculateScore("abccba"), 0, 'Test 22');
test(calculateScore("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 676, 'Test 23');
test(calculateScore("aaabbbccczzzyyyxxxwwwvvvuutttrrrqqqpppoonnmmlkkjjiihhggffeeddccbbaa"), 438, 'Test 24');
test(calculateScore("zazbzazbza"), 3, 'Test 25');
test(calculateScore("zyxwvutsrqponmlkjihgfedcba"), 169, 'Test 26');
test(calculateScore("qzqyqxpqowqovqouqovqowqoxpqyqz"), 0, 'Test 27');
test(calculateScore("azbzczdzdzcybxaybxaybxay"), 68, 'Test 28');
test(calculateScore("mnopqrqpomnopqrqpomn"), 3, 'Test 29');
test(calculateScore("racecarracecar"), 0, 'Test 30');
test(calculateScore("abxyzaacxyxzbcdwvutbcddwvut"), 36, 'Test 31');
test(calculateScore("qpwoeirutyplkjhgfdsazxcvbnmaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 807, 'Test 32');
test(calculateScore("mnopqrstuvwxyzabcdefghijkl"), 145, 'Test 33');
test(calculateScore("abcdwxyzzyxwvutslkjihgfeponmabcdwxyzzyxwvutslkjihgfeponm"), 194, 'Test 34');
test(calculateScore("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 35');
test(calculateScore("azbzczdzdzcybxczbxazcyaxbycxaybzcz"), 68, 'Test 36');
test(calculateScore("mnmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), 170, 'Test 37');
test(calculateScore("abacabadabacaba"), 0, 'Test 38');
test(calculateScore("abcdefgihgfedcba"), 0, 'Test 39');
test(calculateScore("xyzzyxwvutuvwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), 356, 'Test 40');
test(calculateScore("abcabcabcabcabcabcabcabcabcabc"), 0, 'Test 41');
test(calculateScore("mnbvcxzlkjhgfdsapoiuytrewqzxcvbnmlkjhgfdsapoiuytrewqmnbvcxzlkjhgfdsapoiuytrewq"), 361, 'Test 42');
test(calculateScore("thisisazerozeroscenario"), 28, 'Test 43');
test(calculateScore("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyxwvutsrqponmlkjihgfedcba"), 845, 'Test 44');
test(calculateScore("qwertypoiuzxcvbnmkjhgfdaslkjhgfdaslkjhgfdas"), 151, 'Test 45');
test(calculateScore("abcdefgihgfedcbazyxz"), 28, 'Test 46');
test(calculateScore("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 47');
test(calculateScore("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 0, 'Test 48');
test(calculateScore("mnopqrstuvwxyzzzzzxyvwutsrqpomn"), 2, 'Test 49');
test(calculateScore("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 338, 'Test 50');
test(calculateScore("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 338, 'Test 51');
test(calculateScore("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzz"), 676, 'Test 52');
test(calculateScore("zzzzzzzzzz"), 0, 'Test 53');
test(calculateScore("zyxwvutsrqponmlkjihgfedcbaedcba"), 169, 'Test 54');
test(calculateScore("qzjihgfedcbazyxwvutsrqponmlk"), 101, 'Test 55');
test(calculateScore("mnopqrstuvwxyzzxyvwutsrqpomn"), 2, 'Test 56');
test(calculateScore("abcdefghijkjihgfedcbaabcdefghijkjihgfedcbaabcdefghijkjihgfedcba"), 0, 'Test 57');
test(calculateScore("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmnnnooopppqqqrrrssstttuuuuvvvvwwwwxxxxyyyyzzzz"), 2214, 'Test 58');
test(calculateScore("abacabadabacabad"), 0, 'Test 59');
test(calculateScore("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 60');
test(calculateScore("ababababababababababababab"), 0, 'Test 61');
test(calculateScore("zzzzyyyyxxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeedcbaa"), 545, 'Test 62');
test(calculateScore("mnbvcxzlkjhgfdsapoiuytrewqamnbvcxzlkjhgfdsapoiuytrewq"), 236, 'Test 63');
test(calculateScore("amazingracecar"), 8, 'Test 64');
test(calculateScore("mnopqrstuvzxywvutsrqponmlkjihgfedcba"), 170, 'Test 65');
test(calculateScore("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 66');
test(calculateScore("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 0, 'Test 67');
test(calculateScore("zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), 338, 'Test 68');
test(calculateScore("abzyba"), 4, 'Test 69');
test(calculateScore("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzz"), 676, 'Test 70');
test(calculateScore("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba"), 313, 'Test 71');
test(calculateScore("zazazazazazazazazazazazazazazazazazazazazazazazazazazazaza"), 29, 'Test 72');
test(calculateScore("aaaazzzz"), 16, 'Test 73');
test(calculateScore("zyxwvutsrqponmlkjihgfedcbaaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 845, 'Test 74');

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
