// Test: 3039. Apply Operations To Make String Empty
// 40 test cases from LeetCodeDataset
// Run: node test.js

const { lastNonEmptyString } = require("./solution");

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

console.log("\n3039. Apply Operations To Make String Empty\n");

test(lastNonEmptyString("zzzzzzzzzz"), z, 'Test 1');
test(lastNonEmptyString("aabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccdd"), abcd, 'Test 2');
test(lastNonEmptyString("abcabcabcabcabcabcabcabcabcabc"), abc, 'Test 3');
test(lastNonEmptyString("ababababababababababababababababababababababababab"), ab, 'Test 4');
test(lastNonEmptyString("abcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyz, 'Test 5');
test(lastNonEmptyString("aaabbbcccdddeeefffggghhhiiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyyzzzz"), iyz, 'Test 6');
test(lastNonEmptyString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), abcdefghijklmnopqrstuvwxyz, 'Test 7');
test(lastNonEmptyString("abcabcabcabcabc"), abc, 'Test 8');
test(lastNonEmptyString("aabcbbca"), ba, 'Test 9');
test(lastNonEmptyString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), z, 'Test 10');
test(lastNonEmptyString("abcd"), abcd, 'Test 11');
test(lastNonEmptyString("aaabbbcccdddeeefffggghhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxyyyyzzzz"), ijklmnopqrstuvwyz, 'Test 12');
test(lastNonEmptyString("zyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihgfedcba, 'Test 13');
test(lastNonEmptyString("bbaaccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), bacdefghijklmnopqrstuvwxyz, 'Test 14');
test(lastNonEmptyString("mnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnlmlnl"), l, 'Test 15');
test(lastNonEmptyString("uniquecharacterswithoutrepeats"), et, 'Test 16');
test(lastNonEmptyString("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz"), xyz, 'Test 17');
test(lastNonEmptyString("abcdefghijklmnopqrstuvwxyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), z, 'Test 18');
test(lastNonEmptyString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), z, 'Test 19');
test(lastNonEmptyString("zyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihgfedcba, 'Test 20');
test(lastNonEmptyString("aaaaaaaaabbbbbbbbccccccccddddddddeeeeeeeeeffffffffggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmmnnnnnnnnnnnooooooooooooppppppppppppqqqqqqqqqqqqrrrrrrrrrrrrsssssssssssstttttttttttttuuuuuuuuuuuuuvvvvvvvvvvvvvwwwwwwwwwwwwwxxxxxxxxxxxxxyyyyyyyyyyyyyyzzzzzzzzzzzzzz"), yz, 'Test 21');
test(lastNonEmptyString("qwertqwertqwertqwertqwertqwertqwertqwertqwertqwertqwertqwertqwertqwertqwertqwertqwertqwertqwertqwert"), qwert, 'Test 22');
test(lastNonEmptyString("zzzzzyyyyxxxwwvvvuuutttssrrqqppoonnmmmlllkkkjjjiiiighhhgggfffeeedddccccbbbaaaa"), z, 'Test 23');
test(lastNonEmptyString("zzzzzyyyyxxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaaa"), z, 'Test 24');
test(lastNonEmptyString("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyz, 'Test 25');
test(lastNonEmptyString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihgfedcba, 'Test 26');
test(lastNonEmptyString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyyyyxxxwwvvvuuutttssrrqqppoonnmmmlllkkkjjjiiiighhhgggfffeeedddccccbbbaaaa"), yigca, 'Test 27');
test(lastNonEmptyString("aaaaaaaaaabbbbbbbbbccccccccddddddddddeeeeeeeeefffffffffggggggggghhhhhhhhhhiiiiiiiiijjjjjjjjkkkkkkkkklllllllllmmmmmmmmmnnnnnnnnnooooooooooppppppppppqqqqqqqqqrrrrrrrrrssssssssstttttttttuuuuuuuuuvvvvvvvvvwwwwwwwwwxxxxxxxxxyyyyyyyyyzzzzzzzzz"), adhop, 'Test 28');
test(lastNonEmptyString("aaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbccccccccccccccccdddddddddddddd"), a, 'Test 29');
test(lastNonEmptyString("zzyyxxwwvvttuusssrrrqqqpppoonnnmmmllllkkkkjjjjiiiidddddhhhgggeeeefffccccba"), d, 'Test 30');
test(lastNonEmptyString("thisisaverylongstringwithmanycharactersrepeatingoverandoveragainoverandoveragain"), a, 'Test 31');
test(lastNonEmptyString("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), abc, 'Test 32');
test(lastNonEmptyString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyyyyxxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaaa"), y, 'Test 33');
test(lastNonEmptyString("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), a, 'Test 34');
test(lastNonEmptyString("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), abc, 'Test 35');
test(lastNonEmptyString("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihgfedcba, 'Test 36');
test(lastNonEmptyString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), z, 'Test 37');
test(lastNonEmptyString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihgfedcba, 'Test 38');
test(lastNonEmptyString("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihgfedcba, 'Test 39');
test(lastNonEmptyString("repeatedrepeatedrepeatedrepeatedrepeatedrepeatedrepeatedrepeatedrepeatedrepeatedrepeatedrepeatedrepeatedrepeatedrepeatedrepeatedrepeated"), e, 'Test 40');

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
