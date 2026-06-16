// Test: 3365. Rearrange K Substrings To Form Target String
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { isPossibleToRearrange } = require("./solution");

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

console.log("\n3365. Rearrange K Substrings To Form Target String\n");

test(isPossibleToRearrange("abcd", "cdab", 2), true, 'Test 1');
test(isPossibleToRearrange("abcdefg", "gfedcba", 1), false, 'Test 2');
test(isPossibleToRearrange("abcdefg", "gfedcba", 7), true, 'Test 3');
test(isPossibleToRearrange("aabbcc", "bbaacc", 3), true, 'Test 4');
test(isPossibleToRearrange("abcabcabc", "bcbcbcbca", 3), false, 'Test 5');
test(isPossibleToRearrange("aabbcc", "bbaacc", 2), false, 'Test 6');
test(isPossibleToRearrange("abacabad", "dcabcdab", 2), false, 'Test 7');
test(isPossibleToRearrange("abcdefghijabcdefghijabcdefghij", "fedcbafedcbafedcba", 3), false, 'Test 8');
test(isPossibleToRearrange("xyzxyzxyzxyz", "zyxzyxzyxzyx", 4), false, 'Test 9');
test(isPossibleToRearrange("xyzyxzyzyzxzyzyz", "zyzyzyzyzyzyzyzx", 7), false, 'Test 10');
test(isPossibleToRearrange("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba", 26), false, 'Test 11');
test(isPossibleToRearrange("abcdefghijabcdefghijabcdefghij", "abcdefghijabcdefghijabcdefghij", 3), true, 'Test 12');
test(isPossibleToRearrange("abababababab", "babababababa", 2), false, 'Test 13');
test(isPossibleToRearrange("aaabbbccc", "bbbaaacc", 3), false, 'Test 14');
test(isPossibleToRearrange("mississippiissi", "ssissimipissi", 5), false, 'Test 15');
test(isPossibleToRearrange("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeeeddccbbaa", 13), false, 'Test 16');
test(isPossibleToRearrange("zzyyxxwwvvuuttssrrqqppoonnmmlkkjjiihhaaggeeccbb", "bcdeeegghhiikkmnnooppqqrrssttuuvvwwxxyyzz", 26), false, 'Test 17');
test(isPossibleToRearrange("abcdabcdabcdabcdabcdabcd", "dddddddcccccbbbbaaaaaa", 6), false, 'Test 18');
test(isPossibleToRearrange("mississippiissim", "simississippiiss", 6), false, 'Test 19');
test(isPossibleToRearrange("lkjlkjlkjlkjlkjlkjlkjlkj", "llllkkkkjjjjllllkkkkjjjjllllkkkkjjjj", 16), true, 'Test 20');
test(isPossibleToRearrange("aaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaa", 10), true, 'Test 21');
test(isPossibleToRearrange("mmmmmmmmmmnnnnnnnn", "nnnnnnnnnnaaaaaaaaaa", 5), false, 'Test 22');
test(isPossibleToRearrange("abacabadabacabad", "badabacabadaba", 4), false, 'Test 23');
test(isPossibleToRearrange("aaabbbcccdddeeefffggghhh", "hgggfffeeedddcccbbaaa", 3), false, 'Test 24');
test(isPossibleToRearrange("aabbccddeeffgghhiijjkkllmmpqrs", "srqpmlkjihgfedcbazyxwvuts", 26), false, 'Test 25');
test(isPossibleToRearrange("xyzxyzxyzxyzxyzxyz", "zyxzyxzyxzyxzyxzyx", 6), false, 'Test 26');
test(isPossibleToRearrange("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzyyxxwwvvuuttrrssqqppoonnmmllkkjjiihhggffeeeeddccbbaa", 25), false, 'Test 27');
test(isPossibleToRearrange("aaaabbbbccccdddd", "abcdabcdabcdabcd", 4), false, 'Test 28');
test(isPossibleToRearrange("mnopqrsmnopqrsmnopqrsmnopqrsmnopqrs", "smnopqrsmnopqrsmnopqrsmnopqrsmnopqrs", 10), false, 'Test 29');
test(isPossibleToRearrange("aaaabbbbccccdddd", "ddddccccbbbbaaaa", 4), true, 'Test 30');
test(isPossibleToRearrange("aabbbccddeeefffggghhhiiijjjkkklllmmmnnnooopppqqqqrrrrssssttttuuuuvvvvwwwwxxxxxyyyyyzzzzz", "zzzzzyyyyyxxxxwwwwvvvvuuuuttttsssrrrrqqqqpppooonnnmmmlllkkkjjjiiihhhgggfffdddccbbbaaa", 26), false, 'Test 31');
test(isPossibleToRearrange("aaaabbbbccccddddeeeeffffgggghhhhiiii", "ihgfedcbihgfedcbihgfedcbihgfedcb", 5), false, 'Test 32');
test(isPossibleToRearrange("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm", "mnbvcxzlkjhgfdsapoiuytrewqmnbvcxzlkjhgfdsapoiuytrew", 26), false, 'Test 33');
test(isPossibleToRearrange("aaaaaaabbbbbbbcccccc", "abcabcabcabcabcabcabcabc", 12), true, 'Test 34');
test(isPossibleToRearrange("abcdefghijklmnopqrstuabcdefghijklmnopqrstu", "utsrqponmlkjihgfedcbautsrqponmlkjihgfedcba", 10), false, 'Test 35');
test(isPossibleToRearrange("abacabadabacaba", "acaabbaadabacba", 3), false, 'Test 36');
test(isPossibleToRearrange("abcdeabcdeabcdeabcdeabcdeabcde", "deabcdeabcdeabcdeabcdeabcdeabc", 6), false, 'Test 37');
test(isPossibleToRearrange("abcdefgihjklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", 26), true, 'Test 38');
test(isPossibleToRearrange("abcdefghijklmnopqrstuv", "ponmlkjihgfedcbazyxwvutsr", 10), false, 'Test 39');
test(isPossibleToRearrange("abcdefghijklmnop", "ponmlkjihgfedcba", 4), false, 'Test 40');
test(isPossibleToRearrange("abacabadabacabad", "daabcbcadabcadba", 4), false, 'Test 41');
test(isPossibleToRearrange("aabbccddeeff", "feeddcbaab", 2), false, 'Test 42');
test(isPossibleToRearrange("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnoooo", "ooooooooonnnnnmmmmllllkkkkjjjjiiiijjjjhhhhggggeeegfffeeeeddddddccccbbbbaaaa", 4), false, 'Test 43');
test(isPossibleToRearrange("zzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzz", 5), true, 'Test 44');
test(isPossibleToRearrange("abcabcabcabc", "cccbbbaaaabc", 3), false, 'Test 45');
test(isPossibleToRearrange("nnnnoooommmmpppp", "nopmnopmnopmno", 4), false, 'Test 46');
test(isPossibleToRearrange("abcdefghijabcdefghij", "fedcbafedcbafedcba", 10), false, 'Test 47');
test(isPossibleToRearrange("abcdabcdabcdabcd", "ddddccccbbbbaaaa", 4), false, 'Test 48');
test(isPossibleToRearrange("abcabcabcabcabcabcabcabc", "cbacbacbacbacbacbacbacbacbacba", 4), false, 'Test 49');
test(isPossibleToRearrange("aaaaabbbbccccc", "bbbbbcccccddddd", 3), false, 'Test 50');
test(isPossibleToRearrange("aaaabbbbccccddddeeeeffffgggghhhh", "abcdefghabcdefghabcdefghabcdefgh", 8), false, 'Test 51');
test(isPossibleToRearrange("xyzxyzxyzxyz", "zyxzyxzyxzyx", 3), false, 'Test 52');
test(isPossibleToRearrange("abcdefabcdefabcdefabcdefabcdefabcdef", "fedcbafedcbafedcbafedcbafedcba", 18), false, 'Test 53');
test(isPossibleToRearrange("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", 26), true, 'Test 54');
test(isPossibleToRearrange("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttrrssqqppoonnmmllkkjjiihhggffeeeeddccbbaa", 26), false, 'Test 55');
test(isPossibleToRearrange("mnopqrstuvwxyzabcdefghijkl", "abcdefghijklmnopqrstuvwxyz", 13), true, 'Test 56');
test(isPossibleToRearrange("abcdefghijabcdefghij", "jihgfedcbajihgfedcba", 10), false, 'Test 57');
test(isPossibleToRearrange("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 26), true, 'Test 58');
test(isPossibleToRearrange("mmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxx", "xxxxxxxxwwwwvvvvuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu", 20), false, 'Test 59');
test(isPossibleToRearrange("abcdefghabcdefghabcdefghabcdefgh", "ddddccccbbbbaaaaeeeeffffffff", 16), false, 'Test 60');
test(isPossibleToRearrange("xyxyxyxyxyxy", "yxyxyxyxyxyx", 3), false, 'Test 61');
test(isPossibleToRearrange("aaaaaaaaaaabbbbbbbbbbbccccccccccdddddddddd", "bbbbbbbbbbbbaaaaaaaaaacccccccdddddddddd", 10), false, 'Test 62');
test(isPossibleToRearrange("aaaaaaaaaabbbbbbbbccccccccdddddddd", "ddddddddccccccccbbbbbbbbaaaaaaaa", 8), false, 'Test 63');
test(isPossibleToRearrange("zzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzz", 1), true, 'Test 64');
test(isPossibleToRearrange("kkkkkkkkkk", "kkkkkkkkkk", 5), true, 'Test 65');
test(isPossibleToRearrange("abcdefabcdefabcdefabcdef", "aaaabbbbccccddddeeeeffff", 8), false, 'Test 66');
test(isPossibleToRearrange("abcabcabcabcabcabc", "cbaabcabcabcabcabc", 4), false, 'Test 67');
test(isPossibleToRearrange("abababababababababababababababab", "babababababababababababababababa", 2), false, 'Test 68');
test(isPossibleToRearrange("abcdefghijabcdefghijabcdefghij", "abcabcabcabcabcabcabcabcabcabcdeedefefefefefghighighighi", 15), false, 'Test 69');
test(isPossibleToRearrange("racecaracecaracecar", "racecaracecaracecar", 3), true, 'Test 70');
test(isPossibleToRearrange("aabbccddeeffgghhiijjkk", "jikkhhggffeeddccbbaa", 11), false, 'Test 71');
test(isPossibleToRearrange("xyzxyzxyzxyzxyzxyzxyzxyz", "zyxzyxzyxzyxzyxzyxzyxzyxzyx", 3), false, 'Test 72');
test(isPossibleToRearrange("thisisanexampleofalongstringthatweneedtosplit", "stingthatweneedtosplitthisisanexampleofalon", 7), false, 'Test 73');
test(isPossibleToRearrange("repeatthispatternrepeatthispatternrepeatthispattern", "ternpatrepeaternpatrepeaternpatrepeaternpat", 9), false, 'Test 74');
test(isPossibleToRearrange("abcdefabcdefabcdefabcdef", "fabcdfabcdfabcdfabcd", 8), false, 'Test 75');
test(isPossibleToRearrange("abcdefghijklmnopabcdefghijklmnop", "pponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba", 16), false, 'Test 76');
test(isPossibleToRearrange("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzyyxxwwvvuuttrrssqqppoonnmmllkkjjiihhggffeeeeddccbbaa", 13), false, 'Test 77');
test(isPossibleToRearrange("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 26), true, 'Test 78');
test(isPossibleToRearrange("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 20), true, 'Test 79');
test(isPossibleToRearrange("abcdefabcdefabcdefabcdefabcdef", "fedcbafedcbafedcbafedcba", 5), false, 'Test 80');
test(isPossibleToRearrange("abacabadabacabad", "aabbccdaaabbccda", 4), false, 'Test 81');
test(isPossibleToRearrange("abcabcabcabcabcabc", "cabacbacbacbacba", 6), false, 'Test 82');
test(isPossibleToRearrange("nnnnoooommmm", "mmmmnnnnoooo", 3), true, 'Test 83');
test(isPossibleToRearrange("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 26), true, 'Test 84');
test(isPossibleToRearrange("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1), true, 'Test 85');
test(isPossibleToRearrange("aabbaabbaabbaabbaabbaabbaabbaabbaabbaabb", "bbaabbaabbaabbaabbaabbaabbaabbaabbaabbaa", 10), false, 'Test 86');
test(isPossibleToRearrange("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttsrrqppoonnmlllkkjjiihhggffeeeddccbbaa", 26), false, 'Test 87');
test(isPossibleToRearrange("aaaaaaaaaaaaaa", "aaaaaaaaaaaaaa", 1), true, 'Test 88');
test(isPossibleToRearrange("qqqqwwwweeeerrrrtttt", "wqwqwqwqeertreerttrttt", 5), false, 'Test 89');
test(isPossibleToRearrange("mississippiissippiissippiissippiississippiississippiississippiississippi", "ppipipipipipipipipipipipipipipipipipipipipipipipippipi", 13), false, 'Test 90');
test(isPossibleToRearrange("abcdefghij", "jihgfedcba", 10), true, 'Test 91');
test(isPossibleToRearrange("aabbccddeeff", "ffeeddccbaab", 6), false, 'Test 92');
test(isPossibleToRearrange("onetwothreefourfivesixseveneightnineten", "eninetonwotwothreefourfivesixseveneightne", 5), false, 'Test 93');
test(isPossibleToRearrange("abcdefghabcdefghabcdefgh", "abcabcabcdeedefefefgfgfg", 9), false, 'Test 94');
test(isPossibleToRearrange("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeeeddccbbaa", 26), false, 'Test 95');
test(isPossibleToRearrange("abcdefghijklmnopqrstuvwxyza", "zyxwvutsrqponmlkjihgfedcbaa", 27), true, 'Test 96');
test(isPossibleToRearrange("abcdefabcdefabcdef", "fedcbafedcbafedcba", 3), false, 'Test 97');
test(isPossibleToRearrange("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttrrssqqppoonnllkkjjiihhggffeeddbbaa", 26), false, 'Test 98');
test(isPossibleToRearrange("qrstuvqrstuvqrstuv", "uuuuvvvvttttssssrrrrqqqqppppooonnnnmmmmllllkkkkjjjjiiiihhhhggggffffeeee", 12), false, 'Test 99');
test(isPossibleToRearrange("abcdefghijklmnopqrstuvwxyzaa", "zyxwvutsrqponmlkjihgfedcbaaa", 27), true, 'Test 100');

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
