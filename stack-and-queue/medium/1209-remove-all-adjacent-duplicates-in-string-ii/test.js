// Test: 1209. Remove All Adjacent Duplicates In String Ii
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { removeDuplicates } = require("./solution");

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

console.log("\n1209. Remove All Adjacent Duplicates In String Ii\n");

test(removeDuplicates("a", 2), a, 'Test 1');
test(removeDuplicates("mississippi", 2), m, 'Test 2');
test(removeDuplicates("deeedbbcccbdaa", 3), aa, 'Test 3');
test(removeDuplicates("abcd", 2), abcd, 'Test 4');
test(removeDuplicates("abcde", 5), abcde, 'Test 5');
test(removeDuplicates("abcdabcdabcdabcd", 4), abcdabcdabcdabcd, 'Test 6');
test(removeDuplicates("aabbccddeee", 3), aabbccdd, 'Test 7');
test(removeDuplicates("aaaabbbccc", 4), bbbccc, 'Test 8');
test(removeDuplicates("pbbcggttciiippooaais", 2), ps, 'Test 9');
test(removeDuplicates("zzzzzzzzzzzzzzzzzz", 5), zzz, 'Test 10');
test(removeDuplicates("aabbccddeee", 2), e, 'Test 11');
test(removeDuplicates("zzzzzzzzzz", 3), z, 'Test 12');
test(removeDuplicates("abababababababab", 2), abababababababab, 'Test 13');
test(removeDuplicates("zzzzzzzzzzzzzzzzzzzz", 10), , 'Test 14');
test(removeDuplicates("abcabcabc", 3), abcabcabc, 'Test 15');
test(removeDuplicates("a", 1), , 'Test 16');
test(removeDuplicates("aaabbbcccddd", 3), , 'Test 17');
test(removeDuplicates("abcdabcdabcd", 4), abcdabcdabcd, 'Test 18');
test(removeDuplicates("abcde", 2), abcde, 'Test 19');
test(removeDuplicates("aaabbbccc", 3), , 'Test 20');
test(removeDuplicates("nnnnttttuuuu", 4), , 'Test 21');
test(removeDuplicates("aabbcc", 2), , 'Test 22');
test(removeDuplicates("bbaabaaaabbbbccccdddd", 3), bbaababcd, 'Test 23');
test(removeDuplicates("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 5), abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd, 'Test 24');
test(removeDuplicates("abcdefghijaaaabbbbccccddddeeeeffffgggghhhhiiii", 4), abcdefghij, 'Test 25');
test(removeDuplicates("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba", 26), abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba, 'Test 26');
test(removeDuplicates("mmnnmmllooonnmmllooonn", 3), mmnnmmllnnmmllnn, 'Test 27');
test(removeDuplicates("pppppqqqppppqqqqqqqqq", 5), qqqppppqqqq, 'Test 28');
test(removeDuplicates("aabbccddeeefffggghhhiiiijjjkkklllmmmnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzzzzzzz", 4), aabbccddeeefffggghhhjjjkkklllmmmnnooopppqqqrrrssstttuuuvvvwwwxxxyyy, 'Test 29');
test(removeDuplicates("xyxxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyx", 3), xyxxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyx, 'Test 30');
test(removeDuplicates("aaabbbcccdddeeefffggghhhiiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxxxyyyyyzzzzz", 3), ixxyyzz, 'Test 31');
test(removeDuplicates("nnnnooooffffgggg", 4), , 'Test 32');
test(removeDuplicates("aabbbccddeeefffggghhhiiijjjkkklllmmmnnooopppqqqrrrssstttuuuuvvvwwwxxyyzz", 3), aaccddnnuxxyyzz, 'Test 33');
test(removeDuplicates("ppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz", 5), ppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz, 'Test 34');
test(removeDuplicates("mississippiiiiiiiiii", 5), mississipp, 'Test 35');
test(removeDuplicates("aabbccddeeefffggghhhiiiijjjkkklllmmmnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz", 3), aabbccddinn, 'Test 36');
test(removeDuplicates("pppqqqrrrssstttuuuvvvwwwww", 5), pppqqqrrrssstttuuuvvv, 'Test 37');
test(removeDuplicates("aabbccddeeefffggghhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqq", 4), aabbccddeeefffggghhh, 'Test 38');
test(removeDuplicates("ppppqqqrrrssstttuuuvvvwwwwwxxxxyyyyzzzz", 4), qqqrrrssstttuuuvvvw, 'Test 39');
test(removeDuplicates("abababababababababababababababab", 3), abababababababababababababababab, 'Test 40');
test(removeDuplicates("mississippiississi", 3), mississippiississi, 'Test 41');
test(removeDuplicates("abcabcabcabc", 4), abcabcabcabc, 'Test 42');
test(removeDuplicates("zzzzyyyyyyyyyzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 7), zzzzyy, 'Test 43');
test(removeDuplicates("abababababab", 3), abababababab, 'Test 44');
test(removeDuplicates("mmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz", 3), mm, 'Test 45');
test(removeDuplicates("abcdefghijkllllllllllllmnopqrstuvwxyz", 10), abcdefghijkllmnopqrstuvwxyz, 'Test 46');
test(removeDuplicates("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 26), abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz, 'Test 47');
test(removeDuplicates("xyzzzzzzzzxy", 6), xyzzxy, 'Test 48');
test(removeDuplicates("abcdefggggggfedcba", 5), abcdefgfedcba, 'Test 49');
test(removeDuplicates("ababababababababababababababababababababababababababababababababababababab", 20), ababababababababababababababababababababababababababababababababababababab, 'Test 50');
test(removeDuplicates("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", 10), qqqq, 'Test 51');
test(removeDuplicates("zzzzzyzzzz", 5), yzzzz, 'Test 52');
test(removeDuplicates("wwzzzzzwwzzzzzwwzzzzzwwzzzzzwwzzzzzwwzzzzzwwzzzzzwwzzzzzwwzzzzzwwzzzzzwwzzzzz", 6), wwzzzzzwwzzzzzwwzzzzzwwzzzzzwwzzzzzwwzzzzzwwzzzzzwwzzzzzwwzzzzzwwzzzzzwwzzzzz, 'Test 53');
test(removeDuplicates("pppppaaaabbbbcccccccdddddddd", 4), pccc, 'Test 54');
test(removeDuplicates("aabaaaacccaaabbbcccbbccaa", 3), aababbccaa, 'Test 55');
test(removeDuplicates("abcdefghijkllllllllllllmnopqrstuv", 11), abcdefghijklmnopqrstuv, 'Test 56');
test(removeDuplicates("aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxxxxyyyyyyyyyyzzzzzzzzzz", 10), hhhhhhhhxxx, 'Test 57');
test(removeDuplicates("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzz", 6), aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyy, 'Test 58');
test(removeDuplicates("abcdabcdabcdabcdabcdabcd", 6), abcdabcdabcdabcdabcdabcd, 'Test 59');
test(removeDuplicates("xyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzy", 5), xyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzy, 'Test 60');
test(removeDuplicates("aabbccddeeefffggghhhiiiijjjjkkkk", 4), aabbccddeeefffggghhh, 'Test 61');
test(removeDuplicates("pppppppppaaaabbbbccccdddd", 4), p, 'Test 62');
test(removeDuplicates("abcabcabcabcabcabcabcabcabcabc", 10), abcabcabcabcabcabcabcabcabcabc, 'Test 63');
test(removeDuplicates("aabbccddeeefffggghhhiiijjjkkklllmnnnooopppqqqrrrssstttuuuvvvwwxxyyzz", 3), aabbccddmwwxxyyzz, 'Test 64');
test(removeDuplicates("xyzzzzzzzzzzzyyxwwwwwwwwwwwwwxvvvvvvvvvvvvvuuuuuuuuuuuuuutttttttttttttsssssssssssssrrrrrrrrrrrrrqqqqqqqqqqqqqpnnnnnnnnnnnnnoommmmmmmmmmmmmllllllllllllllkkkkkkkkkkkkkkjjjjjjjjjjjjjjiiiiiiiiiiiiiiiihhhhhhhhhhhhhhhhhgggggggggggggggggffffffffffffffffeeeeeeeeeeeeeeeeedddddddddddddddddccccccccccccccccccbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaa", 20), xyzzzzzzzzzzzyyxwwwwwwwwwwwwwxvvvvvvvvvvvvvuuuuuuuuuuuuuutttttttttttttsssssssssssssrrrrrrrrrrrrrqqqqqqqqqqqqqpnnnnnnnnnnnnnoommmmmmmmmmmmmllllllllllllllkkkkkkkkkkkkkkjjjjjjjjjjjjjjiiiiiiiiiiiiiiiihhhhhhhhhhhhhhhhhgggggggggggggggggffffffffffffffffeeeeeeeeeeeeeeeeedddddddddddddddddccccccccccccccccccbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaa, 'Test 65');
test(removeDuplicates("mnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba", 2), lkjihgfedcba, 'Test 66');
test(removeDuplicates("mississippiissiippiiissipiissipiissipiissipiissipiissipiissipiissipiis", 3), mississippiissiippssipiissipiissipiissipiissipiissipiissipiissipiis, 'Test 67');
test(removeDuplicates("aaabaaaabbbaaa", 3), ba, 'Test 68');
test(removeDuplicates("aaaabbbbccccdddd", 4), , 'Test 69');
test(removeDuplicates("zzzzzyyyxx", 4), zyyyxx, 'Test 70');
test(removeDuplicates("zzzzzzzzzzzz", 5), zz, 'Test 71');
test(removeDuplicates("zzzzzyyyyyxxxwwwwvvvvuuuuuuttttssssrrrrqqqqppppooooonnnnmmmmmllllkkkkjjjjiiihhhhggggffffeeee", 5), xxxwwwwvvvvuttttssssrrrrqqqqppppnnnnllllkkkkjjjjiiihhhhggggffffeeee, 'Test 72');
test(removeDuplicates("xyzyxyzyxyzyxyzyxyzy", 3), xyzyxyzyxyzyxyzyxyzy, 'Test 73');
test(removeDuplicates("ppppppqqqqqqrrrrrr", 6), , 'Test 74');
test(removeDuplicates("abacabadabacabadabacabadabacabad", 4), abacabadabacabadabacabadabacabad, 'Test 75');
test(removeDuplicates("xyzzzzxyzzzz", 5), xyzzzzxyzzzz, 'Test 76');
test(removeDuplicates("abababababababababababababababab", 7), abababababababababababababababab, 'Test 77');
test(removeDuplicates("abccbaabccbaabccba", 3), abccbaabccbaabccba, 'Test 78');
test(removeDuplicates("aabbbbccccddddaaaabbbbccccddddaaaabbbbccccdddd", 4), aa, 'Test 79');
test(removeDuplicates("aabbccddeeefffgghhiiijjjkkklllmmmnnooopppqqqrrrssstttuuuvvvwww", 5), aabbccddeeefffgghhiiijjjkkklllmmmnnooopppqqqrrrssstttuuuvvvwww, 'Test 80');
test(removeDuplicates("aaaabaaaabaaaabaaaab", 4), , 'Test 81');
test(removeDuplicates("aabbccddeeefff", 2), ef, 'Test 82');
test(removeDuplicates("aaaaaaaaaabbbbbbbbccccccccddddddddeeeeeeeeefffffffff", 10), bbbbbbbbccccccccddddddddeeeeeeeeefffffffff, 'Test 83');
test(removeDuplicates("zzzzzyyyyyxxxxxxwwwwvvvvvuuuuu", 5), xwwww, 'Test 84');
test(removeDuplicates("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnoooo", 4), , 'Test 85');
test(removeDuplicates("aabbccccddeeeeffffgggghhhiiijjjkkk", 4), aabbddhhhiiijjjkkk, 'Test 86');
test(removeDuplicates("mnopqrstuvw", 2), mnopqrstuvw, 'Test 87');
test(removeDuplicates("zzzxxxyyyzzzxxxyyy", 3), , 'Test 88');
test(removeDuplicates("abcdefghijklaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbb", 10), abcdefghijklabbbbbbbb, 'Test 89');
test(removeDuplicates("aabbccddeeefffggg", 3), aabbccdd, 'Test 90');
test(removeDuplicates("qqqqwwwwrrrreeee", 4), , 'Test 91');
test(removeDuplicates("mississippiissippi", 4), mississippiissippi, 'Test 92');
test(removeDuplicates("zzzzzyyyyxxxxwwwwvvvvuuuu", 5), yyyyxxxxwwwwvvvvuuuu, 'Test 93');
test(removeDuplicates("abcdefghijkllllllllllmnopqrstuvwxyz", 10), abcdefghijkmnopqrstuvwxyz, 'Test 94');
test(removeDuplicates("zzzzzzzzzz", 4), zz, 'Test 95');
test(removeDuplicates("abababababababababab", 5), abababababababababab, 'Test 96');
test(removeDuplicates("qqwweerrttyyuuiiooppaassddffgghhjjkkllzzxciwoqjfqioejqwojfioqwjfiqwjefioqwjfeiqwjeofiqwjeofiqwjefiqwjf", 2), xciwoqjfqioejqwojfioqwjfiqwjefioqwjfeiqwjeofiqwjeofiqwjefiqwjf, 'Test 97');
test(removeDuplicates("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10), zzzz, 'Test 98');
test(removeDuplicates("mmnnnnoooopprrrssstttuuuuvvvvwwxxxyyyzzzzzz", 6), mmnnnnoooopprrrssstttuuuuvvvvwwxxxyyy, 'Test 99');
test(removeDuplicates("aaaaaaaaabbbbbbbbccccccccddddddddd", 8), ad, 'Test 100');
test(removeDuplicates("abcdefghijaaaaklmnopqrstuuvwxyz", 3), abcdefghijaklmnopqrstuuvwxyz, 'Test 101');
test(removeDuplicates("aabbccddeeefffggghhhiiiijjjjkkkkllllmmmmnnnnoooopppp", 5), aabbccddeeefffggghhhiiiijjjjkkkkllllmmmmnnnnoooopppp, 'Test 102');
test(removeDuplicates("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", 20), qqqqqqqqqqqqqq, 'Test 103');
test(removeDuplicates("abbaccccbaa", 4), abbabaa, 'Test 104');
test(removeDuplicates("abcdefghijabcdefghijabcdefghij", 10), abcdefghijabcdefghijabcdefghij, 'Test 105');
test(removeDuplicates("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 2), , 'Test 106');
test(removeDuplicates("abcdabcdabcdabcd", 3), abcdabcdabcdabcd, 'Test 107');

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
