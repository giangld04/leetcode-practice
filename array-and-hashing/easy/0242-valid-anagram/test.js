// Test: 242. Valid Anagram
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { isAnagram } = require("./solution");

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

console.log("\n242. Valid Anagram\n");

test(isAnagram("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), true, 'Test 1');
test(isAnagram("abcde", "edcba"), true, 'Test 2');
test(isAnagram("abc", "abcd"), false, 'Test 3');
test(isAnagram("apple", "pale"), false, 'Test 4');
test(isAnagram("hello", "bello"), false, 'Test 5');
test(isAnagram("aacc", "ccac"), false, 'Test 6');
test(isAnagram("abc", "def"), false, 'Test 7');
test(isAnagram("abc", "cba"), true, 'Test 8');
test(isAnagram("abcd", "abce"), false, 'Test 9');
test(isAnagram("anagram", "nagaram"), true, 'Test 10');
test(isAnagram("rat", "car"), false, 'Test 11');
test(isAnagram("a", "a"), true, 'Test 12');
test(isAnagram("ab", "ba"), true, 'Test 13');
test(isAnagram("listen", "silent"), true, 'Test 14');
test(isAnagram("abcd", "dcba"), true, 'Test 15');
test(isAnagram("triangle", "integral"), true, 'Test 16');
test(isAnagram("aabbcc", "abcabc"), true, 'Test 17');
test(isAnagram("", ""), true, 'Test 18');
test(isAnagram("ababababababababab", "bababababababababa"), true, 'Test 19');
test(isAnagram("hello world", "worldhello"), false, 'Test 20');
test(isAnagram("theeyes", "theysee"), true, 'Test 21');
test(isAnagram("a" * 50000, "a" * 50000), Error: Solution.isAnagram[] missing 2 required positional arguments: 's' and 't', 'Test 22');
test(isAnagram("repeatedcharactershere", "repeatedcharactershere"), true, 'Test 23');
test(isAnagram("ababababab", "bababababa"), true, 'Test 24');
test(isAnagram("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzxxyywwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa"), true, 'Test 25');
test(isAnagram("the quick brown fox", "xof nworb kciuq eht"), true, 'Test 26');
test(isAnagram("astronomer", "moonstarer"), true, 'Test 27');
test(isAnagram("thisisananagram", "isanagramthis"), false, 'Test 28');
test(isAnagram("spaces should be ignored", "should be ignored spaces"), true, 'Test 29');
test(isAnagram("aabbcc", "ccbbaa"), true, 'Test 30');
test(isAnagram("special!@#$%^&*[]characters", "characters]!@#$%^&*[]special"), false, 'Test 31');
test(isAnagram("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz", "zzzzyyyxxxwwwwvvvvuuuuttttssssrrrrqqqqppppooooonnnnmmmmllllkkkkjjjjiiiigggghhhhffffffeeeeeeeeddccccbbbbaaaa"), false, 'Test 32');
test(isAnagram("anagram", "nagarams"), false, 'Test 33');
test(isAnagram("dormitory", "dirtyroom"), true, 'Test 34');
test(isAnagram("1234567890", "0987654321"), true, 'Test 35');
test(isAnagram("anananana", "naanaanna"), true, 'Test 36');
test(isAnagram("", "a"), false, 'Test 37');
test(isAnagram("thisisanagramtest", "agamnartisiesttst"), false, 'Test 38');
test(isAnagram("hello world", "world hello"), true, 'Test 39');
test(isAnagram("a gentleman", "elegant man"), true, 'Test 40');
test(isAnagram("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttrrssqqppoonnmmllkkjjiihhggffeeddccbbaa"), true, 'Test 41');
test(isAnagram("aabbcc", "aabbc"), false, 'Test 42');
test(isAnagram("b" * 50000, "a" * 50000), Error: Solution.isAnagram[] missing 2 required positional arguments: 's' and 't', 'Test 43');
test(isAnagram("school master", "the classroom"), true, 'Test 44');
test(isAnagram("thisisaverylongstringthatwearetesting", "averylongstringthatwearetestingthisis"), true, 'Test 45');
test(isAnagram("a" * 50000, "a" * 49999 + "b"), Error: Solution.isAnagram[] missing 2 required positional arguments: 's' and 't', 'Test 46');
test(isAnagram("thequickbrownfoxjumpsoverthelazydog", "godzylathedelvropmusfixnworbquickthe"), false, 'Test 47');
test(isAnagram("thisisananagram", "isananagramthis"), true, 'Test 48');
test(isAnagram("funeral", "real fun"), false, 'Test 49');
test(isAnagram("unitedstates", "adtenisestatesu"), false, 'Test 50');
test(isAnagram("mississippi", "mississipi"), false, 'Test 51');
test(isAnagram("a" * 25000 + "b" * 25000, "b" * 25000 + "a" * 25000), Error: Solution.isAnagram[] missing 2 required positional arguments: 's' and 't', 'Test 52');
test(isAnagram("elevenplus", "twelvestop"), false, 'Test 53');
test(isAnagram("a", "b"), false, 'Test 54');
test(isAnagram("anagramanagramanagram", "nagaramnagaramnagaram"), true, 'Test 55');
test(isAnagram("aabbccdd", "ddbbaacc"), true, 'Test 56');
test(isAnagram("aquickbrownfoxjumpsoverthelazydog", "quickbrownfoxjumpsoverthelazydoga"), true, 'Test 57');
test(isAnagram("abcdeabced", "abcedabcde"), true, 'Test 58');
test(isAnagram("aquickbrownfoxjumpsoverthelazydog", "thelazydogjumpsoveraquickbrownfox"), true, 'Test 59');
test(isAnagram("pythonprogramming", "nohtypgnimmargorp"), true, 'Test 60');
test(isAnagram("forty five", "over fifty"), true, 'Test 61');
test(isAnagram("a!@#b$%^c&*[]", "c&*[]b$%^a!@#"), true, 'Test 62');
test(isAnagram("aquickbrownfoxjumpsoverthelazydog", "quickbrownfoxjumpsoverthelazygod"), false, 'Test 63');
test(isAnagram("noon", "noon"), true, 'Test 64');
test(isAnagram("anagrammatic", "icnagarammat"), true, 'Test 65');
test(isAnagram("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zyxwvutsrqponmlkjihgfedcba"), false, 'Test 66');
test(isAnagram("abacabadabacaba", "bacabacabacaba"), false, 'Test 67');
test(isAnagram("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggeeffddeebbaa"), false, 'Test 68');
test(isAnagram("the quick brown fox jumps over the lazy dog", "dog lazy the over jumps fox brown quick the"), true, 'Test 69');
test(isAnagram("conversation", "voices rant on"), false, 'Test 70');
test(isAnagram("eleven plus two", "twelve plus one"), true, 'Test 71');
test(isAnagram("the eyes", "they see"), true, 'Test 72');
test(isAnagram("a" * 50000 + "b", "a" * 50000), Error: Solution.isAnagram[] missing 2 required positional arguments: 's' and 't', 'Test 73');
test(isAnagram("conversation", "voicesranton"), true, 'Test 74');
test(isAnagram("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggeeffddccbbbaa"), false, 'Test 75');
test(isAnagram("anagramanagram", "nagaramnagaram"), true, 'Test 76');
test(isAnagram("a" * 49999 + "b", "a" * 50000), Error: Solution.isAnagram[] missing 2 required positional arguments: 's' and 't', 'Test 77');
test(isAnagram("this is a test", "test a is this"), true, 'Test 78');
test(isAnagram("night", "thing"), true, 'Test 79');
test(isAnagram("aaabbbccc", "bbbaaacc"), false, 'Test 80');
test(isAnagram("samecharacters", "charactersames"), true, 'Test 81');
test(isAnagram("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyxwvuttsrqponmlkjihgfeddcbaabbccddeeffgghhiijjkkllmmnnooppqqrrss"), false, 'Test 82');
test(isAnagram("mississippi", "ssmissippii"), true, 'Test 83');
test(isAnagram("abcabcabcabcabcabc", "abcabcabcabcabcabc"), true, 'Test 84');
test(isAnagram("xxyyzz", "zzxxyy"), true, 'Test 85');
test(isAnagram("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazygod"), true, 'Test 86');
test(isAnagram("elevenpluszwo", "twelvezillion"), false, 'Test 87');
test(isAnagram("notanagramhere", "anagramherenot"), true, 'Test 88');
test(isAnagram("uniqueanagram", "nagramuniqueanagram"), false, 'Test 89');
test(isAnagram("fluster", "restful"), true, 'Test 90');
test(isAnagram("dormitory", "dirty room"), false, 'Test 91');
test(isAnagram("aaaaaa", "aaaaa"), false, 'Test 92');
test(isAnagram("punishments", "ninepunishment"), false, 'Test 93');
test(isAnagram("thirty", "typhrirt"), false, 'Test 94');
test(isAnagram("racecar", "carrace"), true, 'Test 95');
test(isAnagram("ab", "aabb"), false, 'Test 96');
test(isAnagram("a", ""), false, 'Test 97');
test(isAnagram("qwertyuiopasdfghjklzxcvbnm", "mnbvcxzlkjhgfdsapoiuytrewq"), true, 'Test 98');
test(isAnagram("abacax", "aacxab"), true, 'Test 99');
test(isAnagram("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), true, 'Test 100');
test(isAnagram("questionnaire", "reinquirequest"), false, 'Test 101');
test(isAnagram("anagramatically", "gramaticallyanagram"), false, 'Test 102');
test(isAnagram("uniquecharacters", "uniquecharactersx"), false, 'Test 103');
test(isAnagram("abcdabcdabcd", "dcbaabcdabcd"), true, 'Test 104');
test(isAnagram("adobe", "abode"), true, 'Test 105');
test(isAnagram("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzyyxwwvvuuttssrrqqppoonnmlkkjjiihhggffeeeeddccbaab"), false, 'Test 106');
test(isAnagram("clint eastwood", "old west action"), false, 'Test 107');
test(isAnagram("abcabcabcabc", "cbacbacbacba"), true, 'Test 108');
test(isAnagram("schoolmaster", "theclassroom"), true, 'Test 109');
test(isAnagram("embarrassing", "backgroundsere"), false, 'Test 110');
test(isAnagram("racecar", "racecar"), true, 'Test 111');
test(isAnagram("nematocysts", "cytoplasmnets"), false, 'Test 112');
test(isAnagram("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcbaa"), false, 'Test 113');
test(isAnagram("thequickbrownfoxjumpsoverthelazydog" * 1000, "godzylathedelvropmusfixnworbquickthe" * 1000), Error: Solution.isAnagram[] missing 2 required positional arguments: 's' and 't', 'Test 114');

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
