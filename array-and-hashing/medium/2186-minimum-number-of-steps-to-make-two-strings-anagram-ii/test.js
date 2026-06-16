// Test: 2186. Minimum Number Of Steps To Make Two Strings Anagram Ii
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { minSteps } = require("./solution");

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

console.log("\n2186. Minimum Number Of Steps To Make Two Strings Anagram Ii\n");

test(minSteps("aaaa", "bbbb"), 8, 'Test 1');
test(minSteps("aabbcc", "abc"), 3, 'Test 2');
test(minSteps("anagram", "nagaram"), 0, 'Test 3');
test(minSteps("rat", "car"), 2, 'Test 4');
test(minSteps("xyz", "zyxwvut"), 4, 'Test 5');
test(minSteps("", ""), 0, 'Test 6');
test(minSteps("leetcode", "coats"), 7, 'Test 7');
test(minSteps("aaaaa", "bbbbb"), 10, 'Test 8');
test(minSteps("ab", "ba"), 0, 'Test 9');
test(minSteps("night", "thing"), 0, 'Test 10');
test(minSteps("abacabadaba", "zzzzz"), 16, 'Test 11');
test(minSteps("aa", "bb"), 4, 'Test 12');
test(minSteps("a", "a"), 0, 'Test 13');
test(minSteps("abcd", "dcba"), 0, 'Test 14');
test(minSteps("abc", "def"), 6, 'Test 15');
test(minSteps("a", "b"), 2, 'Test 16');
test(minSteps("abacabadabacaba", "abcde"), 12, 'Test 17');
test(minSteps("same", "same"), 0, 'Test 18');
test(minSteps("aabbccddeeff", "abcdef"), 6, 'Test 19');
test(minSteps("abcdefghijklmnopqrstuvwxyz", ""), 26, 'Test 20');
test(minSteps("oneonetwothree", "threeonetwoone"), 0, 'Test 21');
test(minSteps("abcdefghijklmnopqrstuvwxyz", "aaaaaaaaaaaaaaaaaaaaaaaaaa"), 50, 'Test 22');
test(minSteps("thisisateststring", "testingstring"), 8, 'Test 23');
test(minSteps("aabbccddeeff", "ffeeddccbbAA"), 4, 'Test 24');
test(minSteps("anagram", "mangaar"), 0, 'Test 25');
test(minSteps("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"), 88, 'Test 26');
test(minSteps("hello", "world"), 6, 'Test 27');
test(minSteps("mississippi", "ississimppimiss"), 4, 'Test 28');
test(minSteps("pythonprogramming", "javaprogramming"), 10, 'Test 29');
test(minSteps("repeatrepeatrepeat", "peatpeatpeatre"), 4, 'Test 30');
test(minSteps("xxyyzz", "zzzzyyxx"), 2, 'Test 31');
test(minSteps("deified", "deified"), 0, 'Test 32');
test(minSteps("zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz"), 0, 'Test 33');
test(minSteps("pythonprogramming", "programmingpython"), 0, 'Test 34');
test(minSteps("thisisalongstringsample", "samplesamplealongstringthisis"), 6, 'Test 35');
test(minSteps("complexinputfortesting", "testingfortestingcomplex"), 6, 'Test 36');
test(minSteps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzxxccvvaabbeeffgghhiijjkkllmmnnooppqqrrssttuuvvww"), 6, 'Test 37');
test(minSteps("abracadabra", "barbarian"), 6, 'Test 38');
test(minSteps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa"), 1, 'Test 39');
test(minSteps("abracadabra", "abrakadabracadabra"), 7, 'Test 40');
test(minSteps("balancedstring", "stringbalanced"), 0, 'Test 41');
test(minSteps("abcdefghij", "abcdefghijjihgfedcba"), 10, 'Test 42');
test(minSteps("abcdefghijklmnopqrstuvwxy", "zyxwvutsrqponmlkjihgfedcba"), 1, 'Test 43');
test(minSteps("aaabbbccc", "bbbaaaccc"), 0, 'Test 44');
test(minSteps("thisisatest", "testthisis"), 1, 'Test 45');
test(minSteps("encyclopedia", "dictionary"), 8, 'Test 46');
test(minSteps("mississippi", "missisippi"), 1, 'Test 47');
test(minSteps("aaaaabbbbbcccccd", "dddddccccbbbbbaaaaa"), 5, 'Test 48');
test(minSteps("repeatedcharacterss", "charactersrepeatedss"), 1, 'Test 49');
test(minSteps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", ""), 52, 'Test 50');
test(minSteps("thisisananagram", "isananagramthis"), 0, 'Test 51');
test(minSteps("abcdefg", "hijklmn"), 14, 'Test 52');
test(minSteps("aaaabbbbccccdddd", "ddddccccbbbbaaaa"), 0, 'Test 53');
test(minSteps("rhinoceros", "orchestrer"), 6, 'Test 54');
test(minSteps("samecharacters", "characterssame"), 0, 'Test 55');
test(minSteps("onetwothreefourfivesixseveneightnine", "nineseveneightsixfvierthreeonotwo"), 3, 'Test 56');
test(minSteps("12345", "54321"), 0, 'Test 57');
test(minSteps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyz"), 1, 'Test 58');
test(minSteps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa"), 0, 'Test 59');
test(minSteps("anagram", "manga"), 2, 'Test 60');
test(minSteps("samestring", "samestring"), 0, 'Test 61');
test(minSteps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklmnopqrstuvwxyz"), 26, 'Test 62');
test(minSteps("thisisaverylongstringthatwearegoingtouseasourtestcase", "anotherlongstringthatwillbeusedasourtestcase"), 17, 'Test 63');
test(minSteps("uniquecharacters", "charactersunique"), 0, 'Test 64');
test(minSteps("elephant", "television"), 8, 'Test 65');
test(minSteps("zzzzzzzzzzzzzzzzzzzz", "abcdefghijklmnopqrstuvwxyz"), 44, 'Test 66');
test(minSteps("repeatedcharactersrepeated", "charactersrepeatedcharacters"), 10, 'Test 67');
test(minSteps("thequickbrownfoxjumpsoverthelazydog", "doglazytheoverjumpsonbrowquickthe"), 2, 'Test 68');
test(minSteps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zyxwvutsrqponmlkjihgfedcba"), 26, 'Test 69');
test(minSteps("abcd", "efghijklmnopqrstuvwxyz"), 26, 'Test 70');
test(minSteps("a", "abcdefghijklmnopqrstuvwxyz"), 25, 'Test 71');
test(minSteps("level", "level"), 0, 'Test 72');
test(minSteps("equalnumberofchars", "equalnumberofchars"), 0, 'Test 73');
test(minSteps("qwertyuiopasdfghjklzxcvbnm", "zyxwvutsrqponmlkjihgfedcba"), 0, 'Test 74');
test(minSteps("supercalifragilisticexpialidocious", "pneumonoultramicroscopicsilicovolcanoconiosis"), 25, 'Test 75');
test(minSteps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 0, 'Test 76');
test(minSteps("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "zzzzzzzzzzzzzzzzzzzz"), 68, 'Test 77');
test(minSteps("longstringwithrepeatedcharacters", "characterswithrepeatedlongstring"), 0, 'Test 78');
test(minSteps("uniquecharacters", "differentcharacters"), 9, 'Test 79');
test(minSteps("", "b"), 1, 'Test 80');
test(minSteps("mississippi", "pensil"), 11, 'Test 81');
test(minSteps("xyxxyxyxyx", "yyxyxyxyxy"), 4, 'Test 82');
test(minSteps("abracadabra", "abracadabracadabra"), 7, 'Test 83');
test(minSteps("redder", "redder"), 0, 'Test 84');
test(minSteps("hello", "billion"), 6, 'Test 85');
test(minSteps("xylophone", "xylophon"), 1, 'Test 86');
test(minSteps("thqwhrwhrwhr", "tttttttttttt"), 22, 'Test 87');
test(minSteps("xylophone", "polyrhythm"), 9, 'Test 88');
test(minSteps("unique", "distinct"), 10, 'Test 89');
test(minSteps("mississippi", "pensylvania"), 16, 'Test 90');
test(minSteps("xyzxyzxyz", "abcabcabc"), 18, 'Test 91');
test(minSteps("racecar", "carrace"), 0, 'Test 92');
test(minSteps("abcdefg", "hijklmnopqrstuvwxyz"), 26, 'Test 93');
test(minSteps("a", ""), 1, 'Test 94');
test(minSteps("qwertyuiopasdfghjklzxcvbnm", "mnbvcxzlkjhgfdsapoiuytrewq"), 0, 'Test 95');
test(minSteps("abcde", "fghij"), 10, 'Test 96');
test(minSteps("abcdabcdabcdabcd", "dcba"), 12, 'Test 97');
test(minSteps("", "abcdefghijklmnopqrstuvwxyz"), 26, 'Test 98');
test(minSteps("longerstringwithmorecharacters", "shortstring"), 19, 'Test 99');
test(minSteps("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), 0, 'Test 100');
test(minSteps("longerstringhere", "short"), 11, 'Test 101');
test(minSteps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzyyxxwwvvuuttssrrqqppoonnmlkkjjiihhggffeeeeddccbbaa"), 5, 'Test 102');
test(minSteps("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog"), 0, 'Test 103');
test(minSteps("abcdefghijkllllllllllllmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), 11, 'Test 104');
test(minSteps("xxyyzz", "xxxyyyzzz"), 3, 'Test 105');
test(minSteps("elephant", "relevant"), 4, 'Test 106');
test(minSteps("pythonprogramming", "java"), 19, 'Test 107');
test(minSteps("mississippi", "pennsylvania"), 17, 'Test 108');
test(minSteps("aaaaa", "bbbbbbaaaaa"), 6, 'Test 109');
test(minSteps("rotor", "rotor"), 0, 'Test 110');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

