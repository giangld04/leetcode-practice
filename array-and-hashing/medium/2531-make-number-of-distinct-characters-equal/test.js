// Test: 2531. Make Number Of Distinct Characters Equal
// 119 test cases from LeetCodeDataset
// Run: node test.js

const { isItPossible } = require("./solution");

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

console.log("\n2531. Make Number Of Distinct Characters Equal\n");

test(isItPossible("abcde", "fghij"), true, 'Test 1');
test(isItPossible("xyz", "zyx"), true, 'Test 2');
test(isItPossible("aaa", "bbb"), true, 'Test 3');
test(isItPossible("ac", "b"), false, 'Test 4');
test(isItPossible("unique", "letters"), true, 'Test 5');
test(isItPossible("abcc", "aab"), true, 'Test 6');
test(isItPossible("aabb", "ccdd"), true, 'Test 7');
test(isItPossible("hello", "world"), true, 'Test 8');
test(isItPossible("ab", "cd"), true, 'Test 9');
test(isItPossible("xyz", "xyz"), true, 'Test 10');
test(isItPossible("abcd", "efgh"), true, 'Test 11');
test(isItPossible("aabbcc", "xyz"), false, 'Test 12');
test(isItPossible("abcd", "dcba"), true, 'Test 13');
test(isItPossible("same", "same"), true, 'Test 14');
test(isItPossible("aabbcc", "xxxyyzz"), true, 'Test 15');
test(isItPossible("aaaa", "bbbb"), true, 'Test 16');
test(isItPossible("qrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"), false, 'Test 17');
test(isItPossible("single", "letter"), true, 'Test 18');
test(isItPossible("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), true, 'Test 19');
test(isItPossible("mississippi", "missouri"), true, 'Test 20');
test(isItPossible("mississippi", "penelope"), true, 'Test 21');
test(isItPossible("xyzz", "zzxx"), true, 'Test 22');
test(isItPossible("aaaaaaa", "bbbbbbb"), true, 'Test 23');
test(isItPossible("oneonetwo", "twotwoone"), true, 'Test 24');
test(isItPossible("uniquecharacters", "distinctcharacters"), true, 'Test 25');
test(isItPossible("aaaaabbbbbaaaa", "cccccbccccbcccc"), true, 'Test 26');
test(isItPossible("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijlkmnopqrstuvwxyz"), true, 'Test 27');
test(isItPossible("aabbccddeeff", "aabbccddeeff"), true, 'Test 28');
test(isItPossible("repeatedletters", "differentletters"), true, 'Test 29');
test(isItPossible("unique", "distinct"), true, 'Test 30');
test(isItPossible("aaaaabbbbbccccc", "dddddeeeeeffffff"), true, 'Test 31');
test(isItPossible("onetwothreefour", "five"), false, 'Test 32');
test(isItPossible("almost", "almost"), true, 'Test 33');
test(isItPossible("aaaabbbb", "cccddd"), true, 'Test 34');
test(isItPossible("abacabadabacaba", "bacbabacbacbacb"), false, 'Test 35');
test(isItPossible("aaaaabbbb", "ccccc"), false, 'Test 36');
test(isItPossible("abcd", "efghijklmnopqrstuvwxyz"), false, 'Test 37');
test(isItPossible("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzxxwwvvttrrssppoonnmmllkkjjiihhggffeeddccbbaa"), false, 'Test 38');
test(isItPossible("abcdefghijklmnopqrstuvwxy", "zyxwvutsrqponmlkjihgfedcba"), true, 'Test 39');
test(isItPossible("samechars", "samechars"), true, 'Test 40');
test(isItPossible("abcdefghij", "jihgfedcba"), true, 'Test 41');
test(isItPossible("abcdefg", "hijklmnopqrstuv"), false, 'Test 42');
test(isItPossible("longerstringwithrepeatedcharacters", "short"), false, 'Test 43');
test(isItPossible("xyz", "zyxwvut"), false, 'Test 44');
test(isItPossible("abcdefgh", "hgfedcba"), true, 'Test 45');
test(isItPossible("abcdef", "ghijklmnopqrstuvwxyz"), false, 'Test 46');
test(isItPossible("abcdefg", "hijklmnop"), false, 'Test 47');
test(isItPossible("abacabadabacaba", "bcadcbadcbadcbc"), true, 'Test 48');
test(isItPossible("xyxzyzxzyx", "zyxzyzxzyz"), true, 'Test 49');
test(isItPossible("abcdabcdabcd", "dcbaabcdabcd"), true, 'Test 50');
test(isItPossible("xyzz", "xxxyyyzzzz"), true, 'Test 51');
test(isItPossible("abracadabra", "alakazam"), true, 'Test 52');
test(isItPossible("aabbccddeeffgghhiijj", "zzzzzyyyxxwwvvuuttssrrqqppoonnmmllijkkihgfedcba"), false, 'Test 53');
test(isItPossible("abacabadabacaba", "zzzzzzzzzzzzzzzzz"), false, 'Test 54');
test(isItPossible("abcabcabcabc", "abcabcabcabc"), true, 'Test 55');
test(isItPossible("aaaaaa", "bbbbbb"), true, 'Test 56');
test(isItPossible("almost", "equal"), true, 'Test 57');
test(isItPossible("abcabcabc", "defdefdef"), true, 'Test 58');
test(isItPossible("ababababab", "bababababa"), true, 'Test 59');
test(isItPossible("almostthesame", "almostthesamee"), true, 'Test 60');
test(isItPossible("abcdefghij", "mnopqrstuv"), true, 'Test 61');
test(isItPossible("zzzzzzzzzzzz", "aaaaaaaaaaab"), true, 'Test 62');
test(isItPossible("almostthesame", "almostthesame"), true, 'Test 63');
test(isItPossible("xyzz", "xyz"), true, 'Test 64');
test(isItPossible("thisisaverylongwordwithrepeatedcharacters", "anotherlongwordwithdifferentcharacters"), true, 'Test 65');
test(isItPossible("unique", "words"), true, 'Test 66');
test(isItPossible("unique", "characters"), false, 'Test 67');
test(isItPossible("aabbcc", "aabbcd"), true, 'Test 68');
test(isItPossible("abcdef", "ghijkl"), true, 'Test 69');
test(isItPossible("thisisaverylongword", "whichhasmanycharacters"), false, 'Test 70');
test(isItPossible("mnopqr", "rstuvw"), true, 'Test 71');
test(isItPossible("aaaaaaaabbbbbbb", "ccccccccddddd"), true, 'Test 72');
test(isItPossible("mississippi", "louisiana"), false, 'Test 73');
test(isItPossible("aabbcceeddee", "fghhiijjkk"), true, 'Test 74');
test(isItPossible("abcdefghijklmnop", "qrstuvwxyz"), false, 'Test 75');
test(isItPossible("aaaaabbbbcccc", "bbbbccccdddd"), true, 'Test 76');
test(isItPossible("aaaaaaaa", "bbbbbbbb"), true, 'Test 77');
test(isItPossible("aaaaaabbbbbcccccdddddeeeee", "eeeeeaaaaabbbbbcccccddddd"), true, 'Test 78');
test(isItPossible("mississippi", "pennsylvania"), false, 'Test 79');
test(isItPossible("xyzz", "zzxy"), true, 'Test 80');
test(isItPossible("aabbccdd", "efgghhii"), true, 'Test 81');
test(isItPossible("aaaaabbbbbcccccdddddeeeee", "fffffggggghhhhhiiiii"), false, 'Test 82');
test(isItPossible("abcdefgh", "ijklmnop"), true, 'Test 83');
test(isItPossible("repeatrepeat", "repeatrepeat"), true, 'Test 84');
test(isItPossible("aabbcc", "ddeeff"), true, 'Test 85');
test(isItPossible("abcdefghijk", "klmnopqrstu"), true, 'Test 86');
test(isItPossible("aabbc", "ccdde"), true, 'Test 87');
test(isItPossible("complex", "inputs"), true, 'Test 88');
test(isItPossible("abcdabcdabcd", "dcbaabcdabdc"), true, 'Test 89');
test(isItPossible("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa"), true, 'Test 90');
test(isItPossible("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzyyxxwwvvuuttoosssrrqqppoonnmlkkjjiihhggffeeddccbbaa"), true, 'Test 91');
test(isItPossible("one", "twothreefour"), false, 'Test 92');
test(isItPossible("xyz", "zyxwvutsrqponmlkjihgfedcba"), false, 'Test 93');
test(isItPossible("xyzz", "yzxx"), true, 'Test 94');
test(isItPossible("singlechar", "different"), false, 'Test 95');
test(isItPossible("aabbcc", "ddeeffgghhiijj"), false, 'Test 96');
test(isItPossible("abcdefg", "abcdefg"), true, 'Test 97');
test(isItPossible("characters", "words"), false, 'Test 98');
test(isItPossible("mississippi", "banana"), true, 'Test 99');
test(isItPossible("hellohello", "worldworld"), true, 'Test 100');
test(isItPossible("aabbccddeeff", "ggffeeddccbaaa"), true, 'Test 101');
test(isItPossible("python", "programming"), false, 'Test 102');
test(isItPossible("aaaaaa", "bbbbbbbbb"), true, 'Test 103');
test(isItPossible("aaaaaaaaaa", "bbbbbbbbbb"), true, 'Test 104');
test(isItPossible("xyzzxyzz", "mnopmnop"), false, 'Test 105');
test(isItPossible("mississippi", "elephant"), false, 'Test 106');
test(isItPossible("qqqq", "pppq"), true, 'Test 107');
test(isItPossible("aabbcc", "xxxyyy"), false, 'Test 108');
test(isItPossible("aabbcc", "bbccdd"), true, 'Test 109');
test(isItPossible("zzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzz"), true, 'Test 110');
test(isItPossible("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa"), true, 'Test 111');
test(isItPossible("a", "b"), true, 'Test 112');
test(isItPossible("aabbaa", "aabbaa"), true, 'Test 113');
test(isItPossible("abcabcabcabc", "defdefdefdef"), true, 'Test 114');
test(isItPossible("aabbcc", "abc"), true, 'Test 115');
test(isItPossible("aabbbcc", "dddeeefff"), true, 'Test 116');
test(isItPossible("abacabadaba", "acaacaaca"), true, 'Test 117');
test(isItPossible("abcdabcd", "abcdabcd"), true, 'Test 118');
test(isItPossible("aabbccddeeffgghh", "iiiiijjjjjkkkkkk"), false, 'Test 119');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

