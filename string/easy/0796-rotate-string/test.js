// Test: 796. Rotate String
// 113 test cases from LeetCodeDataset
// Run: node test.js

const { rotateString } = require("./solution");

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

console.log("\n796. Rotate String\n");

test(rotateString("aaa", "aaa"), true, 'Test 1');
test(rotateString("abcdefg", "efgabcd"), true, 'Test 2');
test(rotateString("abab", "abba"), false, 'Test 3');
test(rotateString("abcd", "dcba"), false, 'Test 4');
test(rotateString("abcd", "dabc"), true, 'Test 5');
test(rotateString("hello", "lohel"), true, 'Test 6');
test(rotateString("aa", "aa"), true, 'Test 7');
test(rotateString("abcdef", "defabc"), true, 'Test 8');
test(rotateString("a", "b"), false, 'Test 9');
test(rotateString("aaaa", "aaaa"), true, 'Test 10');
test(rotateString("abab", "abab"), true, 'Test 11');
test(rotateString("aaa", "aab"), false, 'Test 12');
test(rotateString("xyz", "zyx"), false, 'Test 13');
test(rotateString("abcabcabc", "abcabcabc"), true, 'Test 14');
test(rotateString("whassup", "psus"), false, 'Test 15');
test(rotateString("abcde", "abced"), false, 'Test 16');
test(rotateString("a", "a"), true, 'Test 17');
test(rotateString("abcd", "bcda"), true, 'Test 18');
test(rotateString("abcd", "abcd"), true, 'Test 19');
test(rotateString("hello", "llohe"), true, 'Test 20');
test(rotateString("waterbottle", "erbottlewat"), true, 'Test 21');
test(rotateString("ab", "ba"), true, 'Test 22');
test(rotateString("abcd", "cdab"), true, 'Test 23');
test(rotateString("abcde", "cdeab"), true, 'Test 24');
test(rotateString("abcdef", "ghijkl"), false, 'Test 25');
test(rotateString("aabbccdd", "ccddaabb"), true, 'Test 26');
test(rotateString("abcdefgabcdefg", "efgabcdefgabcd"), true, 'Test 27');
test(rotateString("onetwothree", "threeonetwo"), true, 'Test 28');
test(rotateString("rotationexample", "examplerotation"), true, 'Test 29');
test(rotateString("abcdefabcdef", "fabcdefabcde"), true, 'Test 30');
test(rotateString("testtesttest", "sttesttestte"), true, 'Test 31');
test(rotateString("xyzxyz", "xyzxyz"), true, 'Test 32');
test(rotateString("pattern", "ternpat"), true, 'Test 33');
test(rotateString("algorithm", "rithmalgo"), true, 'Test 34');
test(rotateString("aaaaaaa", "aaaaaaa"), true, 'Test 35');
test(rotateString("identicalstring", "identicalstring"), true, 'Test 36');
test(rotateString("longerstringhere", "stringhereelong"), false, 'Test 37');
test(rotateString("mnopqr", "nopqrm"), true, 'Test 38');
test(rotateString("aabbccddeeff", "ccddeeffaabb"), true, 'Test 39');
test(rotateString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzzyyxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa"), false, 'Test 40');
test(rotateString("uniqueword", "wordunique"), true, 'Test 41');
test(rotateString("abcdefghij", "ghijklmnopqr"), false, 'Test 42');
test(rotateString("banana", "ananab"), true, 'Test 43');
test(rotateString("uniquestring", "nguniquestri"), true, 'Test 44');
test(rotateString("aaaaabbbbb", "bbbbbAAAAA"), false, 'Test 45');
test(rotateString("longstringfortesting", "testinglongstringfor"), true, 'Test 46');
test(rotateString("interview", "erviewint"), true, 'Test 47');
test(rotateString("xyzabcxyz", "abcxyzxyz"), true, 'Test 48');
test(rotateString("onesymbola", "symbolaone"), true, 'Test 49');
test(rotateString("repeatedrepeated", "atedrepeatedrepe"), true, 'Test 50');
test(rotateString("aquickbrownfoxjumpsoverthelazydog", "thelazydogaquickbrownfoxjumpsover"), true, 'Test 51');
test(rotateString("xyzxyzxyz", "xyzxyzxyz"), true, 'Test 52');
test(rotateString("unique", "queuni"), true, 'Test 53');
test(rotateString("banana", "anabna"), false, 'Test 54');
test(rotateString("abcdefghijk", "ghijkabcdef"), true, 'Test 55');
test(rotateString("programming", "ammingprogr"), true, 'Test 56');
test(rotateString("quickbrownfox", "oxquickbrownf"), true, 'Test 57');
test(rotateString("xyzxyzxyz", "yzxyzxyzx"), true, 'Test 58');
test(rotateString("almostmatchingbutnotquite", "almostmatchingbutnotquit"), false, 'Test 59');
test(rotateString("abcdabcdabcd", "cdabcdabcda"), false, 'Test 60');
test(rotateString("rotatestring", "stringrotate"), true, 'Test 61');
test(rotateString("thisisaverylongstringthatshouldworkwell", "wellthisisaverylongstringthatshoul"), false, 'Test 62');
test(rotateString("aaaabbbbccccddddeeeeffff", "ffffaaaabbbbccccddddeeee"), true, 'Test 63');
test(rotateString("mississippi", "pimississi"), false, 'Test 64');
test(rotateString("interview", "erviewin"), false, 'Test 65');
test(rotateString("aabbccdd", "ccddaabbaa"), false, 'Test 66');
test(rotateString("xyzabc", "abcxyz"), true, 'Test 67');
test(rotateString("singleletter", "singleletter"), true, 'Test 68');
test(rotateString("repeated", "atedrepe"), true, 'Test 69');
test(rotateString("abcdefghij", "ghijklabce"), false, 'Test 70');
test(rotateString("xyzxyz", "zxyzxy"), true, 'Test 71');
test(rotateString("algorithms", "msalgorith"), true, 'Test 72');
test(rotateString("shiftthisstring", "stringshiftthis"), true, 'Test 73');
test(rotateString("abcdabcdabcd", "dabcdabcda"), false, 'Test 74');
test(rotateString("abcde", "deabc"), true, 'Test 75');
test(rotateString("stackoverflow", "flowoversta"), false, 'Test 76');
test(rotateString("shiftandrotate", "androtateshift"), true, 'Test 77');
test(rotateString("onetwothreefourfivesixseveneightnine", "nineonetwothreefourfivesixseveneigh"), false, 'Test 78');
test(rotateString("abcdefghijklmnopqrstuvwxyz", "zabcdefghijklmnopqrstuvwxy"), true, 'Test 79');
test(rotateString("xyxyxyxyxyxy", "xyxyxyxyxyyx"), false, 'Test 80');
test(rotateString("programming", "mingprogram"), true, 'Test 81');
test(rotateString("abcdefgh", "efghabcd"), true, 'Test 82');
test(rotateString("repeatedcharacterszzzz", "zzzzrepeatedcharacters"), true, 'Test 83');
test(rotateString("almostdone", "nearlycom"), false, 'Test 84');
test(rotateString("samestring", "stringames"), false, 'Test 85');
test(rotateString("complexproblem", "lecomplexprobo"), false, 'Test 86');
test(rotateString("abababab", "babababa"), true, 'Test 87');
test(rotateString("ababab", "bababa"), true, 'Test 88');
test(rotateString("algorithm", "rithalgo"), false, 'Test 89');
test(rotateString("aabbccddeeff", "ddeeffaabbcc"), true, 'Test 90');
test(rotateString("qwertyuiop", "uiopqwerty"), true, 'Test 91');
test(rotateString("uniquestring", "stringunique"), true, 'Test 92');
test(rotateString("longstringexample", "examplelongstring"), true, 'Test 93');
test(rotateString("abcdefg", "abcdefg"), true, 'Test 94');
test(rotateString("repeatedpatternabcabcabc", "abcabcabcrepeatedpattern"), true, 'Test 95');
test(rotateString("ababababababababababab", "bababababababababababa"), true, 'Test 96');
test(rotateString("uniquecharacters", "charactersunique"), true, 'Test 97');
test(rotateString("shiftmearound", "roundshiftmea"), true, 'Test 98');
test(rotateString("cryptography", "graphycryp"), false, 'Test 99');
test(rotateString("complexstring", "stringcomplex"), true, 'Test 100');
test(rotateString("1234567890", "5678901234"), true, 'Test 101');
test(rotateString("thisisatest", "stthisisa"), false, 'Test 102');
test(rotateString("circularrotation", "ircularrotationc"), true, 'Test 103');
test(rotateString("longstringexample", "plelongstringex"), false, 'Test 104');
test(rotateString("shiftleft", "ftleftshi"), true, 'Test 105');
test(rotateString("abcdabcd", "cdabcdab"), true, 'Test 106');
test(rotateString("aninterestingcase", "caseaninteresting"), true, 'Test 107');
test(rotateString("question", "uestionq"), true, 'Test 108');
test(rotateString("almostsame", "lmostsamea"), true, 'Test 109');
test(rotateString("verylongstringthatneedstobeshifted", "edverylongstringthatneedstobeshift"), true, 'Test 110');
test(rotateString("rotation", "tationro"), true, 'Test 111');
test(rotateString("repeatedwordsrepeated", "wordsrepeatedrepeated"), true, 'Test 112');
test(rotateString("example", "mpleexa"), true, 'Test 113');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

