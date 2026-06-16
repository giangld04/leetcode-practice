// Test: 1957. Delete Characters To Make Fancy String
// 34 test cases from LeetCodeDataset
// Run: node test.js

const { makeFancyString } = require("./solution");

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

console.log("\n1957. Delete Characters To Make Fancy String\n");

test(makeFancyString("zzzzzzzzz"), zz, 'Test 1');
test(makeFancyString("aaabbbccc"), aabbcc, 'Test 2');
test(makeFancyString("abcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyz, 'Test 3');
test(makeFancyString("aabbaa"), aabbaa, 'Test 4');
test(makeFancyString("leeetcode"), leetcode, 'Test 5');
test(makeFancyString("aaaaa"), aa, 'Test 6');
test(makeFancyString("ccccccaaa"), ccaa, 'Test 7');
test(makeFancyString("aabbccddd"), aabbccdd, 'Test 8');
test(makeFancyString("cccaaa"), ccaa, 'Test 9');
test(makeFancyString("aaa"), aa, 'Test 10');
test(makeFancyString("aababab"), aababab, 'Test 11');
test(makeFancyString("aaaabbbcccaa"), aabbccaa, 'Test 12');
test(makeFancyString("aaaabbbbcccc"), aabbcc, 'Test 13');
test(makeFancyString("zzzzzzzzzz"), zz, 'Test 14');
test(makeFancyString("ababababc"), ababababc, 'Test 15');
test(makeFancyString("abacadaeafag"), abacadaeafag, 'Test 16');
test(makeFancyString("abc"), abc, 'Test 17');
test(makeFancyString("aabbaaabbbaaa"), aabbaabbaa, 'Test 18');
test(makeFancyString("aab"), aab, 'Test 19');
test(makeFancyString("aabbcc"), aabbcc, 'Test 20');
test(makeFancyString("mississippi"), mississippi, 'Test 21');
test(makeFancyString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz, 'Test 22');
test(makeFancyString("xyzzzxxzzzz"), xyzzxxzz, 'Test 23');
test(makeFancyString("aaabaaaa"), aabaa, 'Test 24');
test(makeFancyString("abcdefg"), abcdefg, 'Test 25');
test(makeFancyString("aabbccddeeefffggghhhiiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwwwxxxxyyyzzz"), aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz, 'Test 26');
test(makeFancyString("abcabcabcabc"), abcabcabcabc, 'Test 27');
test(makeFancyString("pppaaabbbcccddddeeeffffggghhhhiiiijjjjjkkkkklllllmmmmmnnnnnooooooopppppqqqqqrrrrrssssstttttuuuuuuvvvvvvvvvvwwwwwwxxxxxyyyyzzzzz"), ppaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz, 'Test 28');
test(makeFancyString("xyzzzzzzzzzyx"), xyzzyx, 'Test 29');
test(makeFancyString("mnonononojmnonononojmnonononoj"), mnonononojmnonononojmnonononoj, 'Test 30');
test(makeFancyString("pppqqqrssstttuuuvvvwwwxxyyyzzz"), ppqqrssttuuvvwwxxyyzz, 'Test 31');
test(makeFancyString("aabbccddeeefff"), aabbccddeeff, 'Test 32');
test(makeFancyString("abcdefghijjjjjklmnopqrstuvwxyz"), abcdefghijjklmnopqrstuvwxyz, 'Test 33');
test(makeFancyString("nnneennneennneennn"), nneenneenneenn, 'Test 34');

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
