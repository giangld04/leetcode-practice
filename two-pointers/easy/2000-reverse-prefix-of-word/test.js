// Test: 2000. Reverse Prefix Of Word
// 133 test cases from LeetCodeDataset
// Run: node test.js

const { reversePrefix } = require("./solution");

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

console.log("\n2000. Reverse Prefix Of Word\n");

test(reversePrefix("abcdef", "f"), fedcba, 'Test 1');
test(reversePrefix("madam", "d"), damam, 'Test 2');
test(reversePrefix("abcdefd", "d"), dcbaefd, 'Test 3');
test(reversePrefix("abcd", "z"), abcd, 'Test 4');
test(reversePrefix("a", "a"), a, 'Test 5');
test(reversePrefix("python", "y"), ypthon, 'Test 6');
test(reversePrefix("operation", "p"), poeration, 'Test 7');
test(reversePrefix("xyxzxe", "z"), zxyxxe, 'Test 8');
test(reversePrefix("segment", "t"), tnemges, 'Test 9');
test(reversePrefix("hello", "l"), lehlo, 'Test 10');
test(reversePrefix("racecar", "e"), ecarcar, 'Test 11');
test(reversePrefix("abcdef", "g"), abcdef, 'Test 12');
test(reversePrefix("example", "m"), maxeple, 'Test 13');
test(reversePrefix("reverse", "r"), reverse, 'Test 14');
test(reversePrefix("abcdef", "a"), abcdef, 'Test 15');
test(reversePrefix("supercalifragilisticexpialidocious", "x"), xecitsiligarfilacrepuspialidocious, 'Test 16');
test(reversePrefix("abracadabra", "r"), rbaacadabra, 'Test 17');
test(reversePrefix("zyxwvutsrqponmlkjihgfedcba", "a"), abcdefghijklmnopqrstuvwxyz, 'Test 18');
test(reversePrefix("", "a"), , 'Test 19');
test(reversePrefix("unbelievable", "e"), ebnulievable, 'Test 20');
test(reversePrefix("abcdefghijklmnopqrstuvwxyz", "m"), mlkjihgfedcbanopqrstuvwxyz, 'Test 21');
test(reversePrefix("supercalifragilisticexpialidocious", "c"), crepusalifragilisticexpialidocious, 'Test 22');
test(reversePrefix("interview", "w"), weivretni, 'Test 23');
test(reversePrefix("unpredictable", "d"), derpnuictable, 'Test 24');
test(reversePrefix("beautifulization", "z"), zilufituaebation, 'Test 25');
test(reversePrefix("characterization", "c"), characterization, 'Test 26');
test(reversePrefix("communication", "m"), mocmunication, 'Test 27');
test(reversePrefix("reversethispart", "e"), erversethispart, 'Test 28');
test(reversePrefix("reInfinityorce", "e"), erInfinityorce, 'Test 29');
test(reversePrefix("zyxwvutsrqponmlkjihgfedcba", "q"), qrstuvwxyzponmlkjihgfedcba, 'Test 30');
test(reversePrefix("unbelievable", "l"), lebnuievable, 'Test 31');
test(reversePrefix("nothingtoreverse", "x"), nothingtoreverse, 'Test 32');
test(reversePrefix("characterization", "a"), ahcracterization, 'Test 33');
test(reversePrefix("quickbrownfox", "o"), orbkciuqwnfox, 'Test 34');
test(reversePrefix("banana", "n"), nabana, 'Test 35');
test(reversePrefix("qwertyuiop", "p"), poiuytrewq, 'Test 36');
test(reversePrefix("qwertyuiop", "q"), qwertyuiop, 'Test 37');
test(reversePrefix("boundary", "d"), dnuobary, 'Test 38');
test(reversePrefix("continuous", "s"), suounitnoc, 'Test 39');
test(reversePrefix("interoperability", "i"), interoperability, 'Test 40');
test(reversePrefix("aaaaaa", "a"), aaaaaa, 'Test 41');
test(reversePrefix("quizzically", "q"), quizzically, 'Test 42');
test(reversePrefix("congratulations", "g"), gnocratulations, 'Test 43');
test(reversePrefix("aabbccddeeff", "f"), feeddccbbaaf, 'Test 44');
test(reversePrefix("zyxwvutsrqponmlkjihgfedcba", "m"), mnopqrstuvwxyzlkjihgfedcba, 'Test 45');
test(reversePrefix("concatenation", "c"), concatenation, 'Test 46');
test(reversePrefix("implementation", "i"), implementation, 'Test 47');
test(reversePrefix("establishment", "b"), batselishment, 'Test 48');
test(reversePrefix("abcdefghijkllllllllllllllllllllllllllllllllllllllllllllllll", "l"), lkjihgfedcballlllllllllllllllllllllllllllllllllllllllllllll, 'Test 49');
test(reversePrefix("abcdefg", "g"), gfedcba, 'Test 50');
test(reversePrefix("development", "p"), polevedment, 'Test 51');
test(reversePrefix("unfortunately", "r"), rofnutunately, 'Test 52');
test(reversePrefix("challenges", "e"), ellahcnges, 'Test 53');
test(reversePrefix("thisisaverylongwordthatneedstoreversed", "n"), nolyrevasisihtgwordthatneedstoreversed, 'Test 54');
test(reversePrefix("interview", "e"), etnirview, 'Test 55');
test(reversePrefix("abcdeffedcba", "f"), fedcbafedcba, 'Test 56');
test(reversePrefix("classification", "l"), lcassification, 'Test 57');
test(reversePrefix("thisisateststring", "t"), thisisateststring, 'Test 58');
test(reversePrefix("mississippi", "i"), imssissippi, 'Test 59');
test(reversePrefix("unbelievable", "b"), bnuelievable, 'Test 60');
test(reversePrefix("mississippi", "s"), simsissippi, 'Test 61');
test(reversePrefix("congratulations", "l"), lutargnocations, 'Test 62');
test(reversePrefix("synchronous", "c"), cnyshronous, 'Test 63');
test(reversePrefix("algorithm", "l"), lagorithm, 'Test 64');
test(reversePrefix("abracadabra", "c"), carbaadabra, 'Test 65');
test(reversePrefix("zzzzzzzzzzzzzzzz", "z"), zzzzzzzzzzzzzzzz, 'Test 66');
test(reversePrefix("development", "l"), levedopment, 'Test 67');
test(reversePrefix("identification", "i"), identification, 'Test 68');
test(reversePrefix("beautiful", "t"), tuaebiful, 'Test 69');
test(reversePrefix("asdfghjklzxcvbnm", "m"), mnbvcxzlkjhgfdsa, 'Test 70');
test(reversePrefix("representation", "r"), representation, 'Test 71');
test(reversePrefix("congratulations", "t"), targnoculations, 'Test 72');
test(reversePrefix("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "q"), qppoonnmmllkkjjiihhggffeeddccbbaaqrrssttuuvvwwxxyyzz, 'Test 73');
test(reversePrefix("sequence", "q"), qesuence, 'Test 74');
test(reversePrefix("environment", "v"), vneironment, 'Test 75');
test(reversePrefix("algorithm", "g"), glaorithm, 'Test 76');
test(reversePrefix("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "z"), zyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaaz, 'Test 77');
test(reversePrefix("abcdefghijklmnopqrstuvwxyz", "z"), zyxwvutsrqponmlkjihgfedcba, 'Test 78');
test(reversePrefix("abcdefghij", "e"), edcbafghij, 'Test 79');
test(reversePrefix("solution", "u"), ulostion, 'Test 80');
test(reversePrefix("environment", "n"), nevironment, 'Test 81');
test(reversePrefix("environmentally", "v"), vneironmentally, 'Test 82');
test(reversePrefix("algorithm", "o"), oglarithm, 'Test 83');
test(reversePrefix("single", "l"), lgnise, 'Test 84');
test(reversePrefix("supercalifragilisticexpialidocious", "f"), filacrepusragilisticexpialidocious, 'Test 85');
test(reversePrefix("abcdefg", "z"), abcdefg, 'Test 86');
test(reversePrefix("double", "x"), double, 'Test 87');
test(reversePrefix("algorithms", "a"), algorithms, 'Test 88');
test(reversePrefix("algorithm", "r"), roglaithm, 'Test 89');
test(reversePrefix("characterization", "h"), hcaracterization, 'Test 90');
test(reversePrefix("xyzzyx", "z"), zyxzyx, 'Test 91');
test(reversePrefix("subsequence", "q"), qesbusuence, 'Test 92');
test(reversePrefix("reversal", "a"), asreverl, 'Test 93');
test(reversePrefix("a", "b"), a, 'Test 94');
test(reversePrefix("visualization", "i"), ivsualization, 'Test 95');
test(reversePrefix("incomprehensible", "h"), herpmocniensible, 'Test 96');
test(reversePrefix("hellothere", "e"), ehllothere, 'Test 97');
test(reversePrefix("reverseprefix", "r"), reverseprefix, 'Test 98');
test(reversePrefix("pneumonoultramicroscopicsilicovolcanoconiosis", "o"), omuenpnoultramicroscopicsilicovolcanoconiosis, 'Test 99');
test(reversePrefix("uniquecharacters", "u"), uniquecharacters, 'Test 100');
test(reversePrefix("alphabetization", "b"), bahplaetization, 'Test 101');
test(reversePrefix("standardization", "i"), idradnatszation, 'Test 102');
test(reversePrefix("automation", "o"), otuamation, 'Test 103');
test(reversePrefix("mnopqr", "r"), rqponm, 'Test 104');
test(reversePrefix("pronunciation", "u"), unorpnciation, 'Test 105');
test(reversePrefix("abacaxa", "a"), abacaxa, 'Test 106');
test(reversePrefix("reversal", "r"), reversal, 'Test 107');
test(reversePrefix("congratulations", "u"), utargnoclations, 'Test 108');
test(reversePrefix("performance", "f"), frepormance, 'Test 109');
test(reversePrefix("nevertheless", "n"), nevertheless, 'Test 110');
test(reversePrefix("multifaceted", "f"), fitlumaceted, 'Test 111');
test(reversePrefix("reversal", "v"), verersal, 'Test 112');
test(reversePrefix("thisisaverylongwordthatshouldtestthelimitsofthefunction", "t"), thisisaverylongwordthatshouldtestthelimitsofthefunction, 'Test 113');
test(reversePrefix("sophistication", "s"), sophistication, 'Test 114');
test(reversePrefix("xylophone", "o"), olyxphone, 'Test 115');
test(reversePrefix("visualization", "z"), zilausivation, 'Test 116');
test(reversePrefix("pneumonoultramicroscopicsilicovolcanoconiosis", "u"), uenpmonoultramicroscopicsilicovolcanoconiosis, 'Test 117');
test(reversePrefix("xyzxyzxyz", "x"), xyzxyzxyz, 'Test 118');
test(reversePrefix("challenge", "e"), ellahcnge, 'Test 119');
test(reversePrefix("perseverance", "v"), vesreperance, 'Test 120');
test(reversePrefix("abcdefghijk", "i"), ihgfedcbajk, 'Test 121');
test(reversePrefix("mississippi", "p"), pississimpi, 'Test 122');
test(reversePrefix("programming", "g"), gorpramming, 'Test 123');
test(reversePrefix("responsibilities", "s"), serponsibilities, 'Test 124');
test(reversePrefix("synchronization", "n"), nyschronization, 'Test 125');
test(reversePrefix("floccinaucinihilipilification", "f"), floccinaucinihilipilification, 'Test 126');
test(reversePrefix("operationalization", "o"), operationalization, 'Test 127');
test(reversePrefix("specializations", "a"), aicepslizations, 'Test 128');
test(reversePrefix("optimization", "t"), tpoimization, 'Test 129');
test(reversePrefix("abcdefghijk", "h"), hgfedcbaijk, 'Test 130');
test(reversePrefix("xylophone", "p"), polyxhone, 'Test 131');
test(reversePrefix("hellohellohello", "l"), lehlohellohello, 'Test 132');
test(reversePrefix("concatenation", "n"), noccatenation, 'Test 133');

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
