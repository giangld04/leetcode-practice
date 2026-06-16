// Test: 1408. String Matching In An Array
// 97 test cases from LeetCodeDataset
// Run: node test.js

const { stringMatching } = require("./solution");

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

console.log("\n1408. String Matching In An Array\n");

test(stringMatching(["leetcode","et","code"]), ['et', 'code'], 'Test 1');
test(stringMatching(["blue","green","bu"]), [], 'Test 2');
test(stringMatching(["mass","as","hero","superhero"]), ['as', 'hero'], 'Test 3');
test(stringMatching(["nested","nest","sted","stednested","nestedsted","st"]), ['nested', 'nest', 'sted', 'st'], 'Test 4');
test(stringMatching(["computer","com","puter","put","ter","er","r","software","soft","ware","awe","awe","re"]), ['com', 'puter', 'put', 'ter', 'er', 'r', 'soft', 'ware', 'awe', 'awe', 're'], 'Test 5');
test(stringMatching(["apple","pineapple","banana","app","pine"]), ['apple', 'app', 'pine'], 'Test 6');
test(stringMatching(["apple","app","pineapple","pie","pine"]), ['apple', 'app', 'pine'], 'Test 7');
test(stringMatching(["hello","world","hello world","world hello","owor","dlrow","lohel"]), ['hello', 'world'], 'Test 8');
test(stringMatching(["abcdefgh","abcdef","abcde","abcd","abc","ab","a"]), ['abcdef', 'abcde', 'abcd', 'abc', 'ab', 'a'], 'Test 9');
test(stringMatching(["one","once","only","no","on","o","onceuponatime","time","upon"]), ['once', 'on', 'o', 'time', 'upon'], 'Test 10');
test(stringMatching(["interview","view","terview","enter","viewer","inter"]), ['view', 'terview', 'inter'], 'Test 11');
test(stringMatching(["hello","hell","ello","lo","ll","he","oh","el","le","hellos","los"]), ['hello', 'hell', 'ello', 'lo', 'll', 'he', 'el', 'los'], 'Test 12');
test(stringMatching(["adventure","venture","adven","advenu","tu","tre","ven","ure","enture","venu"]), ['venture', 'adven', 'tu', 'ven', 'ure', 'enture', 'venu'], 'Test 13');
test(stringMatching(["abcdef","def","ghij","jkl","ghijkl","defgh"]), ['def', 'ghij', 'jkl'], 'Test 14');
test(stringMatching(["hello","world","hello_world","helloworld"]), ['hello', 'world'], 'Test 15');
test(stringMatching(["algorithm","algo","rhythm","thm","hythm","ythm","thm","hm","m","rythm"]), ['algo', 'thm', 'hythm', 'ythm', 'thm', 'hm', 'm'], 'Test 16');
test(stringMatching(["abc","bca","cab","abcd","bcda","cdab","dabc"]), ['abc'], 'Test 17');
test(stringMatching(["amazing","zing","zinga","zingalingo"]), ['zing', 'zinga'], 'Test 18');
test(stringMatching(["xyz","zyx","xyzz","zzxy","yxz","zyxz","xyzzyx"]), ['xyz', 'zyx', 'xyzz', 'yxz'], 'Test 19');
test(stringMatching(["algorithms","algo","rithm","log","thm","gms"]), ['algo', 'rithm', 'thm'], 'Test 20');
test(stringMatching(["extraterrestrial","extra","terrestrial","restrial","estrial","trial","rial","ial","al","l"]), ['extra', 'terrestrial', 'restrial', 'estrial', 'trial', 'rial', 'ial', 'al', 'l'], 'Test 21');
test(stringMatching(["substring","super","sub","superstring","string","ingsub"]), ['super', 'sub', 'string'], 'Test 22');
test(stringMatching(["a","b","ab","abc","abcd","abcde","abcdef","abcdefg","abcdefgh"]), ['a', 'b', 'ab', 'abc', 'abcd', 'abcde', 'abcdef', 'abcdefg'], 'Test 23');
test(stringMatching(["unique","unicorn","unicore","uniques","unicorns","unicornicorns"]), ['unique', 'unicorn'], 'Test 24');
test(stringMatching(["programming","gram","gramming","pro","ming"]), ['gram', 'gramming', 'pro', 'ming'], 'Test 25');
test(stringMatching(["python","java","c","c++","javascript","typescript","script","type","java","script","scripting"]), ['java', 'c', 'script', 'type', 'java', 'script'], 'Test 26');
test(stringMatching(["one","two","three","onetwo","twothree","onetwothree","threeonetwo"]), ['one', 'two', 'three', 'onetwo', 'twothree'], 'Test 27');
test(stringMatching(["abc","bcd","abcd","ab","cde","def","abcdefg"]), ['abc', 'bcd', 'abcd', 'ab', 'cde', 'def'], 'Test 28');
test(stringMatching(["abcd","abcde","abcdef","def","cde","bcde"]), ['abcd', 'abcde', 'def', 'cde', 'bcde'], 'Test 29');
test(stringMatching(["substring","string","sub","str","st","s"]), ['string', 'sub', 'str', 'st', 's'], 'Test 30');
test(stringMatching(["abc","def","abcdef","ghijkl","mnop","mnopqr","abcde"]), ['abc', 'def', 'mnop', 'abcde'], 'Test 31');
test(stringMatching(["python","java","javascript","pythonic","code","script"]), ['python', 'java', 'script'], 'Test 32');
test(stringMatching(["microcosm","micro","cosm","co","sm","microscopic","scop","scope","opic","pic"]), ['micro', 'cosm', 'co', 'sm', 'scop', 'opic', 'pic'], 'Test 33');
test(stringMatching(["elephant","elephantium","phant","phantom","ele","fantastic"]), ['elephant', 'phant', 'ele'], 'Test 34');
test(stringMatching(["incomprehensible","in","comprehensible","prehensible","prehens","hensible","ensible","sible","ible","ble"]), ['in', 'comprehensible', 'prehensible', 'prehens', 'hensible', 'ensible', 'sible', 'ible', 'ble'], 'Test 35');
test(stringMatching(["algorithm","log","arithm","rhythm","mthm","them"]), [], 'Test 36');
test(stringMatching(["repetition","petition","iteration","repeat","pet","tion","peti","petit","petiti","petitio"]), ['petition', 'pet', 'tion', 'peti', 'petit', 'petiti', 'petitio'], 'Test 37');
test(stringMatching(["substring","string","sub","substringing","ing"]), ['substring', 'string', 'sub', 'ing'], 'Test 38');
test(stringMatching(["quick","brown","fox","the","quickbrownfoxjumpsoverthelazydog"]), ['quick', 'brown', 'fox', 'the'], 'Test 39');
test(stringMatching(["substring","string","sub","ing","substr","str","ingstr","substrin"]), ['string', 'sub', 'ing', 'substr', 'str', 'substrin'], 'Test 40');
test(stringMatching(["hello","world","hel","lo","wor","rld","ldo"]), ['hel', 'lo', 'wor', 'rld'], 'Test 41');
test(stringMatching(["programming","gram","ming","pro","gramming"]), ['gram', 'ming', 'pro', 'gramming'], 'Test 42');
test(stringMatching(["aabbcc","bbaa","ccaa","aabb","bbcc","ccaabb","aabbccaa"]), ['aabbcc', 'ccaa', 'aabb', 'bbcc'], 'Test 43');
test(stringMatching(["tiny","tinier","tinytinier","tinytiny","tinieriny"]), ['tiny', 'tinier'], 'Test 44');
test(stringMatching(["apple","app","le","banana","nan","batman","man","at"]), ['app', 'le', 'nan', 'man', 'at'], 'Test 45');
test(stringMatching(["aabbcc","aabb","abbc","bbcc","abcc","aabc","bccc","ccaa","aacc","bbca"]), ['aabb', 'abbc', 'bbcc'], 'Test 46');
test(stringMatching(["random","rand","dom","ra","doma","mon","ndom","and","ran","domi"]), ['rand', 'dom', 'ra', 'ndom', 'and', 'ran'], 'Test 47');
test(stringMatching(["xylophone","xylo","phone","pho","ne","xy","lo","lopho","phone"]), ['xylo', 'phone', 'pho', 'ne', 'xy', 'lo', 'lopho', 'phone'], 'Test 48');
test(stringMatching(["algorithm","logarithm","rhythm","algorithmic","logarithmic","rhythmic"]), ['algorithm', 'logarithm', 'rhythm'], 'Test 49');
test(stringMatching(["abcd","abc","ab","a","bcde","cde","de","e"]), ['abc', 'ab', 'a', 'cde', 'de', 'e'], 'Test 50');
test(stringMatching(["substring","string","sub","str","ing","sun","set","net","get","ten"]), ['string', 'sub', 'str', 'ing'], 'Test 51');
test(stringMatching(["photography","photo","graphy","graph","graphy","photo","graphi","graphis","photo","photog"]), ['photo', 'graphy', 'graph', 'graphy', 'photo', 'graphi', 'photo', 'photog'], 'Test 52');
test(stringMatching(["subsequence","sequence","sub","ence","quen"]), ['sequence', 'sub', 'ence', 'quen'], 'Test 53');
test(stringMatching(["abcdefg","bcdef","cdefg","defgh","efghi","fghij","ghijk","hijkl","ijklm","jklmn"]), ['bcdef', 'cdefg'], 'Test 54');
test(stringMatching(["tiny","tinytiny","tinytinytiny","tinytinytinytiny","tinytinytinytinytiny"]), ['tiny', 'tinytiny', 'tinytinytiny', 'tinytinytinytiny'], 'Test 55');
test(stringMatching(["substring","substr","string","str","tri","ing","sub","subtr","ing","subtrin"]), ['substr', 'string', 'str', 'tri', 'ing', 'sub', 'subtr', 'ing'], 'Test 56');
test(stringMatching(["submarine","sub","marine","submar","in","a","mar","ne"]), ['sub', 'marine', 'submar', 'in', 'a', 'mar', 'ne'], 'Test 57');
test(stringMatching(["abcd","abc","ab","a","bcde","cde","de"]), ['abc', 'ab', 'a', 'cde', 'de'], 'Test 58');
test(stringMatching(["abcdef","abcde","abcd","abc","ab","a","b","c","d","e","f"]), ['abcde', 'abcd', 'abc', 'ab', 'a', 'b', 'c', 'd', 'e', 'f'], 'Test 59');
test(stringMatching(["a","ab","abc","abcd","abcde","abcdef","abcdefg"]), ['a', 'ab', 'abc', 'abcd', 'abcde', 'abcdef'], 'Test 60');
test(stringMatching(["programming","gram","ming","pro","am","ing","gramming","program"]), ['gram', 'ming', 'pro', 'am', 'ing', 'gramming', 'program'], 'Test 61');
test(stringMatching(["hello","he","hell","lo","he","ello","hel","ell","llo","lo"]), ['he', 'hell', 'lo', 'he', 'ello', 'hel', 'ell', 'llo', 'lo'], 'Test 62');
test(stringMatching(["apple","plea","ple","applepie"]), ['apple', 'ple'], 'Test 63');
test(stringMatching(["fantastic","fant","ast","astic","tic"]), ['fant', 'ast', 'astic', 'tic'], 'Test 64');
test(stringMatching(["supercalifragilisticexpialidocious","cali","frag","listic","expiali","docious","super"]), ['cali', 'frag', 'listic', 'expiali', 'docious', 'super'], 'Test 65');
test(stringMatching(["subsequence","sequence","sub","seq","subseq","quen","ence","quence","suben","queseq"]), ['sequence', 'sub', 'seq', 'subseq', 'quen', 'ence', 'quence'], 'Test 66');
test(stringMatching(["a","ab","abc","abcd","abcde","abcdef","abcdefg","abcdefgh"]), ['a', 'ab', 'abc', 'abcd', 'abcde', 'abcdef', 'abcdefg'], 'Test 67');
test(stringMatching(["abcdabcd","ab","abc","abcd","abcde","abcdef"]), ['ab', 'abc', 'abcd', 'abcde'], 'Test 68');
test(stringMatching(["banana","ana","nan","ban","an"]), ['ana', 'nan', 'ban', 'an'], 'Test 69');
test(stringMatching(["hello","world","hello world","helloworld","lowor","wor"]), ['hello', 'world', 'lowor', 'wor'], 'Test 70');
test(stringMatching(["programming","gram","ming","pro","gramming","program"]), ['gram', 'ming', 'pro', 'gramming', 'program'], 'Test 71');
test(stringMatching(["interdisciplinary","inter","disciplinary","disci","plinary","sci","sciency","interdisci","plin","sciencyplin"]), ['inter', 'disciplinary', 'disci', 'plinary', 'sci', 'sciency', 'interdisci', 'plin'], 'Test 72');
test(stringMatching(["abcdefg","abcde","abcd","abc","ab","a","abcdefgh","efg","hij","ijk"]), ['abcdefg', 'abcde', 'abcd', 'abc', 'ab', 'a', 'efg'], 'Test 73');
test(stringMatching(["tiny","tinytiny","tinytinytiny","tinytinytinytiny"]), ['tiny', 'tinytiny', 'tinytinytiny'], 'Test 74');
test(stringMatching(["overlap","lapping","lap","lappping","lapppinglap"]), ['lap', 'lappping'], 'Test 75');
test(stringMatching(["programming","program","ming","code","coding"]), ['program', 'ming'], 'Test 76');
test(stringMatching(["algorithm","algo","rhythm","rhythmic","algothm","rhyth","thm"]), ['algo', 'rhythm', 'rhyth', 'thm'], 'Test 77');
test(stringMatching(["substring","string","sub","substrings","str"]), ['substring', 'string', 'sub', 'str'], 'Test 78');
test(stringMatching(["abcdef","bcde","cde","de","e","f"]), ['bcde', 'cde', 'de', 'e', 'f'], 'Test 79');
test(stringMatching(["nested","nest","nestedword","word","edword","st","sted"]), ['nested', 'nest', 'word', 'edword', 'st', 'sted'], 'Test 80');
test(stringMatching(["photographically","photo","graphically","graphic","ically","ally","ly","y"]), ['photo', 'graphically', 'graphic', 'ically', 'ally', 'ly', 'y'], 'Test 81');
test(stringMatching(["xylophone","phone","lophone","xylo","loph","pho","hon","xyl","one","phe"]), ['phone', 'lophone', 'xylo', 'loph', 'pho', 'hon', 'xyl', 'one'], 'Test 82');
test(stringMatching(["programming","gram","ming","mingo","prog","ingram","program","gramming","programm","progr"]), ['gram', 'ming', 'prog', 'program', 'gramming', 'programm', 'progr'], 'Test 83');
test(stringMatching(["abcdef","abcde","abcd","abc","ab","a","b","c","d","e","f","abcdefg","gh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz"]), ['abcdef', 'abcde', 'abcd', 'abc', 'ab', 'a', 'b', 'c', 'd', 'e', 'f', 'gh'], 'Test 84');
test(stringMatching(["algorithm","log","rithm","algo","thm"]), ['rithm', 'algo', 'thm'], 'Test 85');
test(stringMatching(["unique","uni","ique","un","que","nique","niqe","neiq","uqei","inqeu"]), ['uni', 'ique', 'un', 'que', 'nique'], 'Test 86');
test(stringMatching(["programming","gram","pro","ming","ring"]), ['gram', 'pro', 'ming'], 'Test 87');
test(stringMatching(["water","watermelon","melon","wa","ter","melonade","ade"]), ['water', 'melon', 'wa', 'ter', 'ade'], 'Test 88');
test(stringMatching(["apple","pineapple","grape","pinegrape","grapefruit","pineapplegrape"]), ['apple', 'pineapple', 'grape'], 'Test 89');
test(stringMatching(["abc","def","abcd","abcde","abcdef"]), ['abc', 'def', 'abcd', 'abcde'], 'Test 90');
test(stringMatching(["supercalifragilisticexpialidocious","super","cali","fragi","listic","expiali","docious","fragilisticexpialidocious"]), ['super', 'cali', 'fragi', 'listic', 'expiali', 'docious', 'fragilisticexpialidocious'], 'Test 91');
test(stringMatching(["unbelievable","un","believe","able","e","a","i","o","u"]), ['un', 'able', 'e', 'a', 'i', 'u'], 'Test 92');
test(stringMatching(["encyclopedia","encyclop","yclopedia","cloped","lopedia","pedia","dia","dialect","logic","encyclopediaic"]), ['encyclopedia', 'encyclop', 'yclopedia', 'cloped', 'lopedia', 'pedia', 'dia'], 'Test 93');
test(stringMatching(["abcdefghijklmnopqrstuvwxyz","abcdefghijklmnop","qrstuvwxyz","mnopqrstu","vwxyz"]), ['abcdefghijklmnop', 'qrstuvwxyz', 'mnopqrstu', 'vwxyz'], 'Test 94');
test(stringMatching(["supercalifragilisticexpialidocious","fragilistic","expialidocious","docious","ious","ous","us","s"]), ['fragilistic', 'expialidocious', 'docious', 'ious', 'ous', 'us', 's'], 'Test 95');
test(stringMatching(["a","ab","abc","abcd","abcde","abcdef"]), ['a', 'ab', 'abc', 'abcd', 'abcde'], 'Test 96');
test(stringMatching(["algorithm","algo","rhythm","thm","rthm","hythmthm"]), ['algo', 'thm'], 'Test 97');

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
