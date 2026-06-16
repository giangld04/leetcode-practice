// Test: 1347. Minimum Number Of Steps To Make Two Strings Anagram
// 113 test cases from LeetCodeDataset
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

console.log("\n1347. Minimum Number Of Steps To Make Two Strings Anagram\n");

test(minSteps("abacabadabacaba", "abcadbabacabaab"), 1, 'Test 1');
test(minSteps("transform", "formartin"), 1, 'Test 2');
test(minSteps("hello", "billion"), 4, 'Test 3');
test(minSteps("aabbcc", "ccbbaa"), 0, 'Test 4');
test(minSteps("minimum", "numinum"), 2, 'Test 5');
test(minSteps("hello", "bello"), 1, 'Test 6');
test(minSteps("leetcode", "practice"), 5, 'Test 7');
test(minSteps("aaabbb", "bbbaaa"), 0, 'Test 8');
test(minSteps("transform", "formtrans"), 0, 'Test 9');
test(minSteps("anagram", "mangaar"), 0, 'Test 10');
test(minSteps("abcd", "dcba"), 0, 'Test 11');
test(minSteps("transform", "formant"), 0, 'Test 12');
test(minSteps("bab", "aba"), 1, 'Test 13');
test(minSteps("aaa", "bbb"), 3, 'Test 14');
test(minSteps("abc", "def"), 3, 'Test 15');
test(minSteps("abcde", "edcba"), 0, 'Test 16');
test(minSteps("xyz", "zyx"), 0, 'Test 17');
test(minSteps("antidisestablishmentarianism", "staimnariesmedtahilbesdisantii"), 3, 'Test 18');
test(minSteps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxwwvvuuttrrssqqppoonnmmllkkjjiihhggffeeeeddccbbaa"), 2, 'Test 19');
test(minSteps("optimization", "inipotizaton"), 1, 'Test 20');
test(minSteps("pneumonoultramicroscopicsilicovolcanoconiosis", "sinsivocnoclaocivlospercimicroscopoultraomneupnc"), 5, 'Test 21');
test(minSteps("thisisaverylongstringthatwearetesting", "testingaverylongstringthatwesarethis"), 0, 'Test 22');
test(minSteps("pythonprogramming", "gnimmargorpnohtyp"), 0, 'Test 23');
test(minSteps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxwwvvuuttrrssqqppoonnmmllkkjjiihhggeeffddccbbaa"), 0, 'Test 24');
test(minSteps("floccinaucinihilipilification", "nicihilopilicifinaucinnilociflloa"), 5, 'Test 25');
test(minSteps("zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwzyx"), 0, 'Test 26');
test(minSteps("mississippi", "ppissimissim"), 1, 'Test 27');
test(minSteps("aquickbrownfoxjumpsoverthelazydog", "aquickbrownfoxjumpsoverthelazydog"), 0, 'Test 28');
test(minSteps("aaaaabbbbccccddddd", "dddddaaaaabbbcccc"), 0, 'Test 29');
test(minSteps("bbaacc", "aabacc"), 1, 'Test 30');
test(minSteps("aabbccddeeff", "fedcbafedcba"), 0, 'Test 31');
test(minSteps("xylophone", "poloxynhe"), 0, 'Test 32');
test(minSteps("almostthere", "lmostahere"), 0, 'Test 33');
test(minSteps("abcdabcdabcd", "ddddccccbbbaaa"), 2, 'Test 34');
test(minSteps("strength", "grenstht"), 0, 'Test 35');
test(minSteps("pythonprogramming", "prognimmargyphnot"), 0, 'Test 36');
test(minSteps("algorithms", "logarithms"), 0, 'Test 37');
test(minSteps("pythonprogramming", "programmingpython"), 0, 'Test 38');
test(minSteps("supercalifragilisticexpialidocious", "pseudopseudohypoparathyroidism"), 11, 'Test 39');
test(minSteps("characterization", "carricahztinoe"), 0, 'Test 40');
test(minSteps("thequickbrownfoxjumpsoverthelazydog", "doglazythequickbrownfoxjumpsoverthelazy"), 4, 'Test 41');
test(minSteps("longestword", "wordlongset"), 0, 'Test 42');
test(minSteps("photosynthesis", "synthesphotosis"), 1, 'Test 43');
test(minSteps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttrrssqqppoonnmmllkkjjiihhggffeeddccbbaa"), 0, 'Test 44');
test(minSteps("supercalifragilisticexpialidocious", "ecilafragisticexpialidocuosspr"), 0, 'Test 45');
test(minSteps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeeeddccbbaa"), 2, 'Test 46');
test(minSteps("onomatopoeia", "pneumonoultramicroscopicsilicovolcanoconiosis"), 33, 'Test 47');
test(minSteps("mississippi", "ppissimisss"), 1, 'Test 48');
test(minSteps("mississippi", "pississippi"), 1, 'Test 49');
test(minSteps("abcdefghij", "jihgfedcba"), 0, 'Test 50');
test(minSteps("abracadabra", "arabracadab"), 0, 'Test 51');
test(minSteps("permutations", "interpromust"), 1, 'Test 52');
test(minSteps("aabbcceeddffee", "eeddffccbbbaaa"), 2, 'Test 53');
test(minSteps("programmingisfun", "funprogrammingis"), 0, 'Test 54');
test(minSteps("abracadabra", "occipital"), 7, 'Test 55');
test(minSteps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa"), 0, 'Test 56');
test(minSteps("aabbccddeeff", "zzzzyyxxwwvvuutt"), 16, 'Test 57');
test(minSteps("elephant", "tehlanpe"), 0, 'Test 58');
test(minSteps("elephant", "talehpen"), 0, 'Test 59');
test(minSteps("permutations", "pertumations"), 0, 'Test 60');
test(minSteps("synchronized", "chronizedsyn"), 0, 'Test 61');
test(minSteps("elevenletters", "twelvethletters"), 4, 'Test 62');
test(minSteps("thisisaverylongstring", "stringlongaverythisis"), 0, 'Test 63');
test(minSteps("interstellar", "stellarestri"), 1, 'Test 64');
test(minSteps("mississippi", "pisissmipis"), 0, 'Test 65');
test(minSteps("supercalifragilisticexpialidocious", "ciousiliexpalodicisgratefulsuper"), 2, 'Test 66');
test(minSteps("xylophone", "polyphonex"), 1, 'Test 67');
test(minSteps("elephant", "telephone"), 2, 'Test 68');
test(minSteps("mississippi", "psissimippi"), 1, 'Test 69');
test(minSteps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklmnopqrstuvwxyzzzyxwvutsrqponmlkjihgfedcba"), 1, 'Test 70');
test(minSteps("mississippi", "pissimissi"), 0, 'Test 71');
test(minSteps("amazingrace", "raceingazam"), 0, 'Test 72');
test(minSteps("mississippi", "pississimissm"), 3, 'Test 73');
test(minSteps("algorithm", "logarithmxx"), 2, 'Test 74');
test(minSteps("reducibility", "reducibility"), 0, 'Test 75');
test(minSteps("recharacterization", "characterizationre"), 0, 'Test 76');
test(minSteps("programming", "gimmnoprram"), 1, 'Test 77');
test(minSteps("frequencydistribution", "charactercount"), 5, 'Test 78');
test(minSteps("thecommunistmanifesto", "theCommunistManifesto"), 2, 'Test 79');
test(minSteps("characterization", "intercharacterization"), 5, 'Test 80');
test(minSteps("aaaaabbbbcccccdddddeeeee", "eeeeeaaaaabbbbbcccccddddd"), 1, 'Test 81');
test(minSteps("xylophone", "polyphonicx"), 3, 'Test 82');
test(minSteps("thisisaverylongstringwithvariouscharacters", "thisisanotherlongstringwithdifferentcharacters"), 10, 'Test 83');
test(minSteps("supercalifragilisticexpialidocious", "ecilapersixfulicadogstcilxpiaiodisu"), 2, 'Test 84');
test(minSteps("characterization", "charizmatation"), 1, 'Test 85');
test(minSteps("programming", "remmprogain"), 1, 'Test 86');
test(minSteps("supercalifragilisticexpialidocious", "pronunciationdictionary"), 7, 'Test 87');
test(minSteps("multimedia", "meediamult"), 1, 'Test 88');
test(minSteps("xylophone", "phonexylo"), 0, 'Test 89');
test(minSteps("mississippi", "ssissippiim"), 0, 'Test 90');
test(minSteps("development", "elopmentd"), 0, 'Test 91');
test(minSteps("interviewquestion", "questioverntein"), 0, 'Test 92');
test(minSteps("anagramanagram", "mangaarmangaar"), 0, 'Test 93');
test(minSteps("congratulations", "congratulations"), 0, 'Test 94');
test(minSteps("programming", "pgmromanig"), 0, 'Test 95');
test(minSteps("thequickbrownfox", "quickbrownfoxt"), 0, 'Test 96');
test(minSteps("algorithm", "logarithm"), 0, 'Test 97');
test(minSteps("racecar", "carrace"), 0, 'Test 98');
test(minSteps("congratulations", "gratulationscon"), 0, 'Test 99');
test(minSteps("optimization", "tionsimipazy"), 2, 'Test 100');
test(minSteps("rhythm", "myrthh"), 0, 'Test 101');
test(minSteps("qwertyuiopasdfghjklzxcvbnm", "mnbvcxzlkjhgfdsapoiuytrewq"), 0, 'Test 102');
test(minSteps("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), 0, 'Test 103');
test(minSteps("aabbccddeeff", "ffeeddccbbaa"), 0, 'Test 104');
test(minSteps("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), 0, 'Test 105');
test(minSteps("unitedstates", "statedinutes"), 0, 'Test 106');
test(minSteps("supercalifragilisticexpialidocious", "expialidocioussupercalifragilistic"), 0, 'Test 107');
test(minSteps("unanimous", "manusiousun"), 2, 'Test 108');
test(minSteps("abacabadabacabadabacabad", "bacdabcdabcdabcdabcdabcd"), 6, 'Test 109');
test(minSteps("characterization", "recharacterization"), 2, 'Test 110');
test(minSteps("abacaxi", "xicabaa"), 0, 'Test 111');
test(minSteps("programming", "gnimmargorp"), 0, 'Test 112');
test(minSteps("mississippi", "ppiimississ"), 0, 'Test 113');

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
