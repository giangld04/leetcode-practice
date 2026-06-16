// Test: 828. Count Unique Characters Of All Substrings Of A Given String
// 160 test cases from LeetCodeDataset
// Run: node test.js

const { uniqueLetterString } = require("./solution");

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

console.log("\n828. Count Unique Characters Of All Substrings Of A Given String\n");

test(uniqueLetterString("ABCDEFG"), 84, 'Test 1');
test(uniqueLetterString("ABAC"), 16, 'Test 2');
test(uniqueLetterString("ABAB"), 12, 'Test 3');
test(uniqueLetterString("JXWTRVABFBJSFNWFTTTOWEJXSGZSWQSZSQXRXRJTSFO"), 4609, 'Test 4');
test(uniqueLetterString("ABCABC"), 36, 'Test 5');
test(uniqueLetterString("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), 3276, 'Test 6');
test(uniqueLetterString("LEETCODE"), 92, 'Test 7');
test(uniqueLetterString("ABABAB"), 20, 'Test 8');
test(uniqueLetterString("AA"), 2, 'Test 9');
test(uniqueLetterString("UPPERCASEENGLISHLETTERS"), 1236, 'Test 10');
test(uniqueLetterString("ABC"), 10, 'Test 11');
test(uniqueLetterString("AABAA"), 15, 'Test 12');
test(uniqueLetterString("GCIYVUTETZTEKFREERERREERETEEEEEEDDDB"), 2050, 'Test 13');
test(uniqueLetterString("A"), 1, 'Test 14');
test(uniqueLetterString("ZZZ"), 3, 'Test 15');
test(uniqueLetterString("ABA"), 8, 'Test 16');
test(uniqueLetterString("ABABABABAB"), 36, 'Test 17');
test(uniqueLetterString("AAABBBCCC"), 27, 'Test 18');
test(uniqueLetterString("ZYXWVUTSRQPONMLKJIHGFEDCBA"), 3276, 'Test 19');
test(uniqueLetterString("ABCA"), 18, 'Test 20');
test(uniqueLetterString("ZZZZZZZZZZ"), 10, 'Test 21');
test(uniqueLetterString("ABCDEFGHIJKLMNOPQRST"), 1540, 'Test 22');
test(uniqueLetterString("UVRMCGWAHTRWWQRRQRQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ"), 3333, 'Test 23');
test(uniqueLetterString("ABCDABCD"), 80, 'Test 24');
test(uniqueLetterString("ZZZZZZZZZZZZZZZZZZZZZZZZZZ"), 26, 'Test 25');
test(uniqueLetterString("SUPERLONGSTRINGWITHMANYCHARACTERSTOTESTTHEFUNCTIONALITYOFTHISSOLUTION"), 11748, 'Test 26');
test(uniqueLetterString("UPPERCASEISUSEDUPPERCASEISUSEDUPPERCASEISUSEDUPPERCASEISUSED"), 4352, 'Test 27');
test(uniqueLetterString("PYTHON"), 56, 'Test 28');
test(uniqueLetterString("ALGORITHMSDESIGN"), 688, 'Test 29');
test(uniqueLetterString("TESTTESTTESTTESTTEST"), 166, 'Test 30');
test(uniqueLetterString("LONGSTRINGLONGSTRINGLONGSTRINGLONGSTRINGLONGSTRINGLONGSTRINGLONGSTRINGLONGSTRING"), 4992, 'Test 31');
test(uniqueLetterString("VARYINGVARYINGVARYINGVARYINGVARYINGVARYINGVARYING"), 2107, 'Test 32');
test(uniqueLetterString("REALLYLONGSTRINGWITHVARYINGCHARACTERFREQUENCIES"), 6279, 'Test 33');
test(uniqueLetterString("XYZXYZXYZXYZXYZXYZXYZXYZXYZXYZXYZXYZXYZXYZXYZXYZXYZXYZXYZXYZXYZXYZ"), 576, 'Test 34');
test(uniqueLetterString("DATASTRUCTURESANDALGORITHMS"), 2087, 'Test 35');
test(uniqueLetterString("ALMOSTUNIQUEALMOSTUNIQUEALMOSTUNIQUEALMOSTUNIQUE"), 4668, 'Test 36');
test(uniqueLetterString("AAABBBCCCDDDEEEFFFGGGHHHIIIJJJKKKLLLMMMNNNOOOPPPQQQRRRSSSTTTUUUVVVWWWXXXXXXYYYYYYZZZZZZ"), 2262, 'Test 37');
test(uniqueLetterString("HIGHFREQUENCYHIGHFREQUENCYHIGHFREQUENCY"), 3465, 'Test 38');
test(uniqueLetterString("THISPROBLEMMIGHTBEHARDTOSOLVEBUTITISNOTTHISPROBLEMMIGHTBEHARDTOSOLVEBUTITISNOT"), 17778, 'Test 39');
test(uniqueLetterString("BUNCHOFOFTHEBUNCHOFTHEBUNCHOFTHE"), 1902, 'Test 40');
test(uniqueLetterString(""), 0, 'Test 41');
test(uniqueLetterString("HIGHFREQHIGHFREQHIGHFREQHIGHFREQHIGHFREQHIGHFREQHIGHFREQ"), 2550, 'Test 42');
test(uniqueLetterString("AACBBBCCCCDDDDEEEEEFFFFFFFFGGGGGGHHHHHHHIIIIIIIIIJJJJJJJJ"), 579, 'Test 43');
test(uniqueLetterString("UPPERCASELOWERCASEUPPERCASELOWERCASEUPPERCASELOWERCASE"), 4631, 'Test 44');
test(uniqueLetterString("SAMECHARSSAMECHARSSAMECHARSSAMECHARS"), 1469, 'Test 45');
test(uniqueLetterString("UPPERCASELOWERCASE"), 723, 'Test 46');
test(uniqueLetterString("QWERTYUIOPASDFGHJKLZXCVBNMQWERTYUIOPASDFGHJKLZXCVBNM"), 18252, 'Test 47');
test(uniqueLetterString("ABACADAEAFAG"), 204, 'Test 48');
test(uniqueLetterString("MMMMMMMMMMMMAAAAAAAAAA"), 44, 'Test 49');
test(uniqueLetterString("ALONGSTRINGWITHSOMEUNIQUECHARACTERSTHROUGHOUT"), 5238, 'Test 50');
test(uniqueLetterString("LEETCODELEETCODELEETCODE"), 726, 'Test 51');
test(uniqueLetterString("HELLOHELLOHELLOHELLOHELLO"), 352, 'Test 52');
test(uniqueLetterString("UPPERCASEUPPERCASEUPPERCASE"), 1001, 'Test 53');
test(uniqueLetterString("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"), 52, 'Test 54');
test(uniqueLetterString("HELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLOHELLO"), 684, 'Test 55');
test(uniqueLetterString("ABCDEFGHIJKLMNOPQRSTABCDEFGHIJKLMNOPQRST"), 8400, 'Test 56');
test(uniqueLetterString("AAABBBCCCDDD"), 48, 'Test 57');
test(uniqueLetterString("THETREESAREBIGANDGREEN"), 1035, 'Test 58');
test(uniqueLetterString("PYTHONPROGRAMMINGPYTHONPROGRAMMINGPYTHONPROGRAMMINGPYTHONPROGRAMMINGPYTHONPROGRAMMING"), 8740, 'Test 59');
test(uniqueLetterString("REPEATSREPEATSREPEATSREPEATSREPEATSREPEATSREPEATSREPEATSREPEATSREPEATS"), 2432, 'Test 60');
test(uniqueLetterString("COMPLEXSTRINGWITHMIXEDCHARACTERSDGFFFVGDVHFDGDFJGDFGDFGDFGDFGDFGDFGDFG"), 10601, 'Test 61');
test(uniqueLetterString("ZABZACZADBZADCZADEZAEFZAFGZAFHZAGIZAHJZAKZALZAMZANZAOZAPZAQZARZASZATAUAVAWAXAYAZ"), 22977, 'Test 62');
test(uniqueLetterString("REPEATREPEATREPEATREPEATREPEATREPEAT"), 834, 'Test 63');
test(uniqueLetterString("ABCDEFGHIJKLMNOPQRSTUPONMLKJIHGFEDCBA"), 6147, 'Test 64');
test(uniqueLetterString("XYZXYZXYZXYZXYZ"), 117, 'Test 65');
test(uniqueLetterString("UNIQUECHARACTER"), 468, 'Test 66');
test(uniqueLetterString("ABCDEFGHABCDEFGHABCDEFGHABCDEFGHABCDEFGHABCDEFGHABCDEFGHABCDEFGH"), 3648, 'Test 67');
test(uniqueLetterString("AABCCDDEEFFGHHIJKLMMNOOPPQQRRSSTTUUVVWWXXYYZZ"), 3859, 'Test 68');
test(uniqueLetterString("CONTAINSREPETITIONSCONTAINSREPETITIONSCONTAINSREPETITIONS"), 4748, 'Test 69');
test(uniqueLetterString("KOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOK"), 368, 'Test 70');
test(uniqueLetterString("SOMEVARIETYOFCHARSHEREANDTHERE"), 2687, 'Test 71');
test(uniqueLetterString("SUPERLONGSTRINGWITHVARYINGCHARACTERFREQUENCIES"), 6393, 'Test 72');
test(uniqueLetterString("UPPERCASEUPPERCASEUPPERCASEUPPERCASE"), 1462, 'Test 73');
test(uniqueLetterString("PYTHONPROGRAMMING"), 597, 'Test 74');
test(uniqueLetterString("AABCCDEEFFGHIJKLMMNOOPQRSTUUVWXYZ"), 4065, 'Test 75');
test(uniqueLetterString("MISINTERPRETATIONMISINTERPRETATION"), 2247, 'Test 76');
test(uniqueLetterString("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"), 72, 'Test 77');
test(uniqueLetterString("VARYINGCASESabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 42384, 'Test 78');
test(uniqueLetterString("EXAMPLEWITHREPEATEDCHARSEXAMPLEWITHREPEATEDCHARSEXAMPLEWITHREPEATEDCHARS"), 12926, 'Test 79');
test(uniqueLetterString("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"), 90, 'Test 80');
test(uniqueLetterString("AAAAAAAAABBBBBBBBCCCCCCCCCC"), 81, 'Test 81');
test(uniqueLetterString("AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ"), 1352, 'Test 82');
test(uniqueLetterString("SHORTLONGSHORTLONGSHORTLONGSHORTLONGSHORTLONG"), 2515, 'Test 83');
test(uniqueLetterString("REALLYLONGSTRINGTOCHECKEFFICIENCYREALLYLONGSTRINGTOCHECKEFFICIENCY"), 9311, 'Test 84');
test(uniqueLetterString("AABABABABABABABABABABABABABABABABABABABAB"), 159, 'Test 85');
test(uniqueLetterString("MULTIPLEOCCURRENCESOFTHESAMELETTER"), 3148, 'Test 86');
test(uniqueLetterString("UPPERCASEANDLOWERCASEANDNUMBERS1234567890"), 6362, 'Test 87');
test(uniqueLetterString("AABBCCEEE"), 36, 'Test 88');
test(uniqueLetterString("AAAAABBBBBCCCCC"), 45, 'Test 89');
test(uniqueLetterString("AABCCDEE"), 60, 'Test 90');
test(uniqueLetterString("AABBCCDDEEFFGGAABBCCDDEEFFGG"), 280, 'Test 91');
test(uniqueLetterString("ALLTHELETTERSOFTHEALPHABETALLTHELETTERSOFTHEALPHABET"), 5626, 'Test 92');
test(uniqueLetterString("XYZXYZXYZ"), 63, 'Test 93');
test(uniqueLetterString("NINCOMPOOP"), 138, 'Test 94');
test(uniqueLetterString("ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"), 18252, 'Test 95');
test(uniqueLetterString("UNIQUEUNIQUEUNIQUE"), 356, 'Test 96');
test(uniqueLetterString("ABACABACABAC"), 94, 'Test 97');
test(uniqueLetterString("NOTSOEASYNOTSOEASYNOTSOEASY"), 1052, 'Test 98');
test(uniqueLetterString("ABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABAB"), 244, 'Test 99');
test(uniqueLetterString("ZZZZZZZZZZYYYYYYYYYYXXXXXXXXXXWWWWWWWWVVVVVVVVUUUUUU"), 312, 'Test 100');
test(uniqueLetterString("XYZXYZXYZXYZXYZXYZXYZXYZ"), 198, 'Test 101');
test(uniqueLetterString("THISISTHEMOSTCOMPLEXTESTCASE"), 1699, 'Test 102');
test(uniqueLetterString("AABCAAABCAAAABC"), 132, 'Test 103');
test(uniqueLetterString("NOCOLLISIONNOCOLLISIONNOCOLLISIONNOCOLLISIONNOCOLLISIONNOCOLLISION"), 1871, 'Test 104');
test(uniqueLetterString("AAAAABBBBBCCCCCDDDDD"), 80, 'Test 105');
test(uniqueLetterString("ABACADAEAFAGAHAIAJAKALAMANAOAPAQAQARASATAUAVAWAXAYAZ"), 11288, 'Test 106');
test(uniqueLetterString("X"), 1, 'Test 107');
test(uniqueLetterString("AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYZZ"), 1422, 'Test 108');
test(uniqueLetterString("ABACADAEAFAGAHAIAJAKALAMANAOAPAQARASATAUAVA"), 7168, 'Test 109');
test(uniqueLetterString("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"), 40, 'Test 110');
test(uniqueLetterString("SIMPLESTRING"), 340, 'Test 111');
test(uniqueLetterString("LEETCODEISAWESOMEEVERYTHINGISPOSSIBLE"), 4975, 'Test 112');
test(uniqueLetterString("SUBSTRINGCALCULATIONSARETRICKYTOGETRIGHT"), 4360, 'Test 113');
test(uniqueLetterString("ABABABABABABABABABABABABAB"), 100, 'Test 114');
test(uniqueLetterString("MIXEDCASEMIXEDCASEMIXEDCASE"), 1302, 'Test 115');
test(uniqueLetterString("HELLOWORLDHELLOWORLDHELLOWORLD"), 1208, 'Test 116');
test(uniqueLetterString("SUBSTRINGSUBSTRINGSUBSTRINGSUBSTRING"), 1893, 'Test 117');
test(uniqueLetterString("SIMPLECOMPLEXSIMPLECOMPLEXSIMPLECOMPLEXSIMPLECOMPLEXSIMPLECOMPLEX"), 4981, 'Test 118');
test(uniqueLetterString("REPEATEDCHARACTERSCONTINUOUSLYAAAAAAAAAAAAAAAA"), 4381, 'Test 119');
test(uniqueLetterString("SUBSTRINGCALCULATIONISEXTRAORDINARY"), 3303, 'Test 120');
test(uniqueLetterString("IDENTICALBLOCKSIDENTICALBLOCKSIDENTICALBLOCKS"), 4848, 'Test 121');
test(uniqueLetterString("QWJRTYUPASDFGHJKLZXCVBNM"), 2540, 'Test 122');
test(uniqueLetterString("HELLOWORLDHELLOWORLD"), 647, 'Test 123');
test(uniqueLetterString("ABCDEFGHIJABCDEFGHIJ"), 1100, 'Test 124');
test(uniqueLetterString("WASITATRATITASAWASITATRATITASAWASITATRATITASA"), 1696, 'Test 125');
test(uniqueLetterString("AVOIDREPETITIONSINHEREAVOIDREPETITIONSINHEREAVOIDREPETITIONSINHERE"), 8106, 'Test 126');
test(uniqueLetterString("ABCDEFGHJIJKLMNOPQRSTUVWXYZ"), 3348, 'Test 127');
test(uniqueLetterString("ZBCDEFGHIJKLMNOPQRSTUVWXYZZYXWVUTSRQPONMLKJIHGFEDCBA"), 12376, 'Test 128');
test(uniqueLetterString("MISSISSIPPI"), 61, 'Test 129');
test(uniqueLetterString("PYTHONPYTHONPYTHONPYTHON"), 684, 'Test 130');
test(uniqueLetterString("ALPHABETALPHABETALPHABETALPHABET"), 1316, 'Test 131');
test(uniqueLetterString("REPEATREPEATREPEATREPEATREPEATREPEATREPEATREPEATREPEAT"), 1314, 'Test 132');
test(uniqueLetterString("CHECKINGUNIQUECHARSCHECKINGUNIQUECHARSCHECKINGUNIQUECHARS"), 6460, 'Test 133');
test(uniqueLetterString("AAAABBBBCCCCDDDDEEEEFFFFGGGGHHHHIIIIJJJJKKKKLLLLMMMMNNNNOOOOPPPPQQQQRRRRSSSSTTTTUUUUVVVVWWWWXXXXYYYYZZZZ"), 2704, 'Test 134');
test(uniqueLetterString("AAABBBCCCDDDEEEFFFGGGHHHHIIIJJJKKKLLLMMMNNNOOOPPPPQQQQRRRRSSSSTTTTUUUVVVWWWXXXYYYYZZZZ"), 2236, 'Test 135');
test(uniqueLetterString("UNIQUECHARACTERSCOUNTUNIQUECHARACTERSCOUNTUNIQUECHARACTERSCOUNT"), 7133, 'Test 136');
test(uniqueLetterString("HELLOOOWORLD"), 156, 'Test 137');
test(uniqueLetterString("PYTHONPYTHONPYTHON"), 468, 'Test 138');
test(uniqueLetterString("TESTSTRINGTESTSTRINGTESTSTRINGTESTSTRING"), 1776, 'Test 139');
test(uniqueLetterString("ABCABCABCABCABCABCABCABCABCABCABCABCABCABC"), 360, 'Test 140');
test(uniqueLetterString("CONSECUTIVECHARSAREHERECONSECUTIVECHARSAREHERECONSECUTIVECHARSAREHERE"), 9088, 'Test 141');
test(uniqueLetterString("REPEATEDLETTERSARETRICKY"), 1108, 'Test 142');
test(uniqueLetterString("RECURSION"), 155, 'Test 143');
test(uniqueLetterString("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"), 104, 'Test 144');
test(uniqueLetterString("SUPERDUPERLONGSTRINGWITHMANYCHARACTERS"), 4375, 'Test 145');
test(uniqueLetterString("AGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTAGCT"), 720, 'Test 146');
test(uniqueLetterString("COMPUTERSCIENCE"), 557, 'Test 147');
test(uniqueLetterString("LOWFREQLOWFREQLOWFREQLOWFREQLOWFREQLOWFREQLOWFREQLOWFREQLOWFREQLOWFREQLOWFREQLOWFREQ"), 3822, 'Test 148');
test(uniqueLetterString("THETRUTHISTHETRUTH"), 567, 'Test 149');
test(uniqueLetterString("QWERTYUIOPASDFGHJKLZXCVBNM"), 3276, 'Test 150');
test(uniqueLetterString("UNIQUECHARACTERFUNCTION"), 1232, 'Test 151');
test(uniqueLetterString("ZYXWVUTSRQPONMLKJIHGFEDCBAZYXWVUTSRQPONMLKJIHGFEDCBA"), 18252, 'Test 152');
test(uniqueLetterString("LONGSTRINGSOMETIMESCONTAINMANYLETTERS"), 2957, 'Test 153');
test(uniqueLetterString("MIXEDCASEBUTSAMECHARSMIXEDCASEBUTSAMECHARSMIXEDCASEBUTSAMECHARS"), 9433, 'Test 154');
test(uniqueLetterString("LOWFREQUENCYLOWFREQUENCYLOWFREQUENCY"), 3138, 'Test 155');
test(uniqueLetterString("ABACABA"), 44, 'Test 156');
test(uniqueLetterString("AAABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ"), 1378, 'Test 157');
test(uniqueLetterString("MNONMMNONMMNONMMNONMMNONMMNONMMNONMMNONMMNONMMNONMMNONMMNONMMNONM"), 561, 'Test 158');
test(uniqueLetterString("AAAAAAAAAAAAAAAAAAAAAAAA"), 24, 'Test 159');
test(uniqueLetterString("ABACADAEAFAGAHAIAJAKALAMANAOAPAQAQARASATAUAUAVAWAXAYAZ"), 11698, 'Test 160');

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
