// Test: 3442. Maximum Difference Between Even And Odd Frequency I
// 49 test cases from LeetCodeDataset
// Run: node test.js

const { maxDifference } = require("./solution");

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

console.log("\n3442. Maximum Difference Between Even And Odd Frequency I\n");

test(maxDifference("pqrstuvwabcdef"), -Infinity, 'Test 1');
test(maxDifference("mnopqrstuvwxyza"), -Infinity, 'Test 2');
test(maxDifference("abcdefghijklmnopqrstuvwxyz"), -Infinity, 'Test 3');
test(maxDifference("abcdefghi"), -Infinity, 'Test 4');
test(maxDifference("abacabadabacaba"), -1, 'Test 5');
test(maxDifference("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnoooo"), -4, 'Test 6');
test(maxDifference("aabbc"), -1, 'Test 7');
test(maxDifference("aaabbbcccdddeeefffgghhhiiiijjjjkkkkllllmmmmmnnnnooooo"), 3, 'Test 8');
test(maxDifference("abcdefghijklmnopqrstuvwxyzaa"), -Infinity, 'Test 9');
test(maxDifference("aabbccdde"), -1, 'Test 10');
test(maxDifference("aabbccddeeffg"), -1, 'Test 11');
test(maxDifference("xyzxyzxyz"), -Infinity, 'Test 12');
test(maxDifference("aabbbbccccddddeeeefffgghhiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwww"), 1, 'Test 13');
test(maxDifference("mmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxxyyyyzzzz"), 3, 'Test 14');
test(maxDifference("aabbbccddeeff"), 1, 'Test 15');
test(maxDifference("abcdefgabcdefg"), -2, 'Test 16');
test(maxDifference("aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz"), -Infinity, 'Test 17');
test(maxDifference("zzzzzzzzzzyyyyxxwwvvuuttssrrqqppoonnmmlkkjjiihhggffeeddccbbaa"), -1, 'Test 18');
test(maxDifference("qqqqwwwweeeerrrrtttt"), -4, 'Test 19');
test(maxDifference("xyzxyzxyzxyzxyz"), -Infinity, 'Test 20');
test(maxDifference("abcabcab"), 1, 'Test 21');
test(maxDifference("xyzxyzxyzxyz"), -4, 'Test 22');
test(maxDifference("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), -2, 'Test 23');
test(maxDifference("aabbccdd"), -2, 'Test 24');
test(maxDifference("aabbccddeffgghh"), -1, 'Test 25');
test(maxDifference("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), -92, 'Test 26');
test(maxDifference("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), -50, 'Test 27');
test(maxDifference("aaaaabbc"), 3, 'Test 28');
test(maxDifference("qqqqqqqqqqppppppoooollllkkkkjjjjiii"), -1, 'Test 29');
test(maxDifference("qqqqqqpppppooooonnnnmmmmllllkkkjjjjiiihhhhggggffffffeeeeeeedddddccccbbbba"), 3, 'Test 30');
test(maxDifference("ppppppqqqqqqrrrrrsssssdddddeeefffccccbbbaaaazzzzzyyyyxxxxwwvvuuttssrrqqpo"), 5, 'Test 31');
test(maxDifference("nnnnnnnnnnnoooooooooooommllkkjjiihhggffeeddccbaaaaaaaaaaaaaaaaaaaaaaaa"), 9, 'Test 32');
test(maxDifference("zzzzzzzzzzyyyyyyyyxxxxxxxxwwwwwwvvvvuuuuuutttttssssssrrrrrrqqqqqqppppppooooooo"), 3, 'Test 33');
test(maxDifference("zzzzzzzzzzzzzzzyyyyyyyxxxxxxwwwwvvvvuuttttssssrrrrqqqqppppoolllkkkjjjiii"), 13, 'Test 34');
test(maxDifference("pppppooooooonnnnnmmmmllllkkkkjjjjiiihhhhggggffffffeeeeee"), 3, 'Test 35');
test(maxDifference("aaaaaaaaaabbbbbbbbccccccccdddddddd"), -8, 'Test 36');
test(maxDifference("ppppoooollllkjjiihhhgggffeeddccba"), 1, 'Test 37');
test(maxDifference("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzz"), -2, 'Test 38');
test(maxDifference("abcdefghijklmnopqrstuvwxyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), -43, 'Test 39');
test(maxDifference("aabbbbbcccccdddddeeeeeffffffffggggggggghhhhhhhiiiiiiijjjjjjjjkkkkkkkkklllllllll"), 7, 'Test 40');
test(maxDifference("abababababababababababababababababababababababababababababb"), -1, 'Test 41');
test(maxDifference("mmmmmmmmmllllllllkkkkkkkkjjjjjjiiihhhhggggfffeeeddccba"), 7, 'Test 42');
test(maxDifference("abcdefghijklmnopqrstuvwxyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), -51, 'Test 43');
test(maxDifference("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzz"), -2, 'Test 44');
test(maxDifference("nnnnnnnnnnmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjiiiiiiiii"), -1, 'Test 45');
test(maxDifference("aabbbccccdddddeeeeeffffffggggghhhhhiiiijjjjkkkkklllllmmmmmnnnnnooooooooo"), 7, 'Test 46');
test(maxDifference("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrr"), -4, 'Test 47');
test(maxDifference("zzzzzzzzzyyyyyyyyxxxxxwwwwwvvvvvuuuuuttttssssrrrrqqqqppppooooonnnnmmmm"), 5, 'Test 48');
test(maxDifference("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"), -Infinity, 'Test 49');

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
