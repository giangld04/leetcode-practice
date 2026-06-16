// Test: 2452. Words Within Two Edits Of Dictionary
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { twoEditWords } = require("./solution");

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

console.log("\n2452. Words Within Two Edits Of Dictionary\n");

test(twoEditWords(["test","text","sett"], ["test","text","sett","best"]), ['test', 'text', 'sett'], 'Test 1');
test(twoEditWords(["abc","bcd","cde"], ["xyz","zyx","abc"]), ['abc'], 'Test 2');
test(twoEditWords(["apple","apply"], ["appla","apple","apply"]), ['apple', 'apply'], 'Test 3');
test(twoEditWords(["test","text","sett"], ["text","test","sett","best"]), ['test', 'text', 'sett'], 'Test 4');
test(twoEditWords(["hello","world"], ["hallo","wurld","holdo"]), ['hello', 'world'], 'Test 5');
test(twoEditWords(["word","note","ants","wood"], ["wood","joke","moat"]), ['word', 'note', 'wood'], 'Test 6');
test(twoEditWords(["test","sett","best"], ["rest","test","best"]), ['test', 'sett', 'best'], 'Test 7');
test(twoEditWords(["abcd","abce","abcf"], ["abef","abcf","abcd"]), ['abcd', 'abce', 'abcf'], 'Test 8');
test(twoEditWords(["apple","apply","spoil"], ["appla","appie","spoil"]), ['apple', 'apply', 'spoil'], 'Test 9');
test(twoEditWords(["hello","world"], ["hallo","werld"]), ['hello', 'world'], 'Test 10');
test(twoEditWords(["apple","apply","happy"], ["pally","apple","happy"]), ['apple', 'apply', 'happy'], 'Test 11');
test(twoEditWords(["test","text","sett"], ["best","text","west"]), ['test', 'text', 'sett'], 'Test 12');
test(twoEditWords(["apple","apply"], ["spale","spaly"]), ['apple', 'apply'], 'Test 13');
test(twoEditWords(["aabb","abab","baba"], ["aaaa","bbbb","abab"]), ['aabb', 'abab', 'baba'], 'Test 14');
test(twoEditWords(["yes"], ["not"]), [], 'Test 15');
test(twoEditWords(["test"], ["tast","test","sett"]), ['test'], 'Test 16');
test(twoEditWords(["elephant","giraffe","hippo"], ["elefant","giraff","hippo"]), ['giraffe', 'hippo'], 'Test 17');
test(twoEditWords(["xylophone","balloon","umbrella"], ["xylofune","baloone","umbrelia","xylophine","balloon"]), ['xylophone', 'balloon', 'umbrella'], 'Test 18');
test(twoEditWords(["abcdefgh","abcdefghi","abcdefghj"], ["abcdefghj","abcdefghi","abcdefghk"]), ['abcdefgh', 'abcdefghi', 'abcdefghj'], 'Test 19');
test(twoEditWords(["banana","bananb","bananc"], ["banana","bananb","bananc","banand"]), ['banana', 'bananb', 'bananc'], 'Test 20');
test(twoEditWords(["abcdefgh","abcdefgh"], ["abcdefgh","abcdefgh","abcdefgh"]), ['abcdefgh', 'abcdefgh'], 'Test 21');
test(twoEditWords(["algorithm","datastructure","binarysearch"], ["alorithm","datstructure","binrysearch"]), [], 'Test 22');
test(twoEditWords(["banana","ananas"], ["banana","ananas","bandana","panama","kanana"]), ['banana', 'ananas'], 'Test 23');
test(twoEditWords(["racecar","level","rotor"], ["racecer","levek","roter"]), ['racecar', 'level', 'rotor'], 'Test 24');
test(twoEditWords(["xylophone","clarinet"], ["xylophon","clarinat","xylopane","clarinet","xylophen"]), ['xylophone', 'clarinet'], 'Test 25');
test(twoEditWords(["abcdef","fedcba"], ["fedcba","abcdefg","bacdef"]), ['abcdef', 'fedcba'], 'Test 26');
test(twoEditWords(["abcdefghij","klmnopqrst"], ["abcdeffhij","klmnopqrts","abcdefghij"]), ['abcdefghij', 'klmnopqrst'], 'Test 27');
test(twoEditWords(["abcdef", "ghijkl", "mnopqr"], ["abcdeg", "ghijkm", "mnopqs"]), ['abcdef', 'ghijkl', 'mnopqr'], 'Test 28');
test(twoEditWords(["abcd","abce","abcf"], ["abcf","abcg","abcd","abch"]), ['abcd', 'abce', 'abcf'], 'Test 29');
test(twoEditWords(["abcdefghij","jihgfedcba"], ["abcdefghij","jihgfedcba","abcdefghij","jihgfedcba","abcdefghij"]), ['abcdefghij', 'jihgfedcba'], 'Test 30');
test(twoEditWords(["abcd", "abdc", "acbd", "acdb"], ["abcd", "abdc", "acbd", "acdb", "dcba", "bdca"]), ['abcd', 'abdc', 'acbd', 'acdb'], 'Test 31');
test(twoEditWords(["abcdefgh","abcdefghi"], ["abcdefgh","abcdefghij","abcdefghi","abcdefghijj"]), ['abcdefgh', 'abcdefghi'], 'Test 32');
test(twoEditWords(["abcdefghij","abcdefghij","abcdefghij"], ["abcdefghij","abcdefghik","abcdefghil","abcdefghim","abcdefghin"]), ['abcdefghij', 'abcdefghij', 'abcdefghij'], 'Test 33');
test(twoEditWords(["abcdef","ghijkl"], ["abchef","ghijkl","abcdeg","ghijkl","abcfeg"]), ['abcdef', 'ghijkl'], 'Test 34');
test(twoEditWords(["algorithm","data","structure"], ["algorith","datq","strcuture"]), ['algorithm', 'data', 'structure'], 'Test 35');
test(twoEditWords(["abcdefghij","jihgfedcba"], ["abcdefghij","jihgfedcba","abcdefghij","jihgfedcba"]), ['abcdefghij', 'jihgfedcba'], 'Test 36');
test(twoEditWords(["abcdefghij","jihgfedcba"], ["abcdefghij","jihgfedcba","abcdefghij","abcdefghij"]), ['abcdefghij', 'jihgfedcba'], 'Test 37');
test(twoEditWords(["abcdefgh","abceghij","abcdefij"], ["abcdefgh","abceghij","abcdefij","abcdefgj"]), ['abcdefgh', 'abceghij', 'abcdefij'], 'Test 38');
test(twoEditWords(["testcase","unittest","performance"], ["testcases","unitstest","performence"]), ['testcase', 'performance'], 'Test 39');
test(twoEditWords(["abcdefghij","klmnopqrst","uvwxyz"], ["abcdefghig","klmnopqrsu","uvwxyg"]), ['abcdefghij', 'klmnopqrst', 'uvwxyz'], 'Test 40');
test(twoEditWords(["abcde", "edcba", "bacde"], ["abcde", "edcba", "bacde", "cabed", "abcde", "edcba", "bacde", "cabed"]), ['abcde', 'edcba', 'bacde'], 'Test 41');
test(twoEditWords(["sequence","consequence","subsequence"], ["sequences","consequense","subsequense","sequence"]), ['sequence', 'consequence', 'subsequence'], 'Test 42');
test(twoEditWords(["abcdef","ghijkl"], ["abcgef","ghikjl","abcdef"]), ['abcdef', 'ghijkl'], 'Test 43');
test(twoEditWords(["abcd","abce","abcf"], ["abcf","abce","abcc"]), ['abcd', 'abce', 'abcf'], 'Test 44');
test(twoEditWords(["programming","development","debugging"], ["proogramming","develpopment","debguggin"]), [], 'Test 45');
test(twoEditWords(["programming","python"], ["programmmg","pythoon","progrqmig"]), ['programming', 'python'], 'Test 46');
test(twoEditWords(["python","pyhton","pythpn"], ["python","pyhton","pythpn","pythun"]), ['python', 'pyhton', 'pythpn'], 'Test 47');
test(twoEditWords(["cat", "bat", "rat"], ["cap", "bap", "rap", "tap"]), ['cat', 'bat', 'rat'], 'Test 48');
test(twoEditWords(["abcdefghij","klmnopqrst"], ["abcdefghij","klmnopqrts","abcdefghik","klmnopqrst","abcdefghim"]), ['abcdefghij', 'klmnopqrst'], 'Test 49');
test(twoEditWords(["programming","programing","progrmaing"], ["programming","programing","progrmaing","prograaming"]), ['programming', 'programing', 'progrmaing'], 'Test 50');
test(twoEditWords(["kitten","sitten","bitten"], ["sitten","kitten","biting","bitten"]), ['kitten', 'sitten', 'bitten'], 'Test 51');
test(twoEditWords(["test","tast","rest"], ["best","rest","tast","test"]), ['test', 'tast', 'rest'], 'Test 52');
test(twoEditWords(["algorithm","data","structure"], ["algorithim","datum","struckture"]), ['algorithm', 'data'], 'Test 53');
test(twoEditWords(["apple","banana","cherry"], ["appla","banna","chhery"]), ['apple', 'banana', 'cherry'], 'Test 54');
test(twoEditWords(["programming","coding","debugging"], ["programing","codding","debagging"]), ['debugging'], 'Test 55');
test(twoEditWords(["transform","transforn","tranformt"], ["transfarm","transform","transfurm"]), ['transform', 'transforn'], 'Test 56');
test(twoEditWords(["mississippi","delaware","rhodeisland"], ["mississipp","delawere","rhodeiland"]), ['mississippi', 'delaware'], 'Test 57');
test(twoEditWords(["abcdef", "ghijkl", "mnopqr", "stuvwx"], ["abcdef", "ghijkl", "mnopqr", "stuvwx"]), ['abcdef', 'ghijkl', 'mnopqr', 'stuvwx'], 'Test 58');
test(twoEditWords(["hello","hallo","hxllo"], ["hallo","hell","hxllo","hxllx"]), ['hello', 'hallo', 'hxllo'], 'Test 59');
test(twoEditWords(["kitten","sitting","flask"], ["kitchen","sitting","fask"]), ['kitten', 'sitting'], 'Test 60');
test(twoEditWords(["abcdefghij","abcdefghik","abcdefghil"], ["abcdefghio","abcdefghij","abcdefghim"]), ['abcdefghij', 'abcdefghik', 'abcdefghil'], 'Test 61');
test(twoEditWords(["qwertyuiop","asdfghjklz","xcvbnm"], ["qwertyuioz","asdfghjklx","xcvbnml"]), ['qwertyuiop', 'asdfghjklz', 'xcvbnm'], 'Test 62');
test(twoEditWords(["algorithm", "algorith", "algoritm"], ["algorithm", "algorith", "algoritm", "algorithn", "aloritum"]), ['algorithm', 'algorith', 'algoritm'], 'Test 63');
test(twoEditWords(["elephant","giraffe","hippopotamus"], ["elephont","giraff","hippopotamuse","elephant"]), ['elephant', 'giraffe', 'hippopotamus'], 'Test 64');
test(twoEditWords(["apple","apply","pally"], ["appel","abble","appie"]), ['apple', 'apply'], 'Test 65');
test(twoEditWords(["zzzzzz", "yyyyyy", "xxxxxx"], ["zzzzzz", "yyyyyy", "xxxxxx", "wwwwww", "vvvvvv", "uuuuuu", "tttttt"]), ['zzzzzz', 'yyyyyy', 'xxxxxx'], 'Test 66');
test(twoEditWords(["apple","apply","pally"], ["appla","appli","apple","pally","polly"]), ['apple', 'apply', 'pally'], 'Test 67');
test(twoEditWords(["apple","apply","appla"], ["apple","apply","appel","appla"]), ['apple', 'apply', 'appla'], 'Test 68');
test(twoEditWords(["aaaaaa", "bbbbbb", "cccccc"], ["aaaaab", "bbbbc", "cccccd"]), ['aaaaaa', 'bbbbbb', 'cccccc'], 'Test 69');
test(twoEditWords(["kitten","sitting"], ["sitting","kitten","bitten","biting"]), ['kitten', 'sitting'], 'Test 70');
test(twoEditWords(["abcdef", "ghijkl", "mnopqr", "stuvwx", "yzabcd"], ["abcdeg", "ghijkm", "mnopqs", "stuvwx", "yzabcd"]), ['abcdef', 'ghijkl', 'mnopqr', 'stuvwx', 'yzabcd'], 'Test 71');
test(twoEditWords(["abcdefgh", "hgfedcba", "abcdefgh"], ["abcdefgh", "hgfedcba", "zyxwvuts", "qrstuvwx"]), ['abcdefgh', 'hgfedcba', 'abcdefgh'], 'Test 72');
test(twoEditWords(["kitten", "sitting", "kitten"], ["sitting", "kitten", "bitten", "kettle"]), ['kitten', 'sitting', 'kitten'], 'Test 73');
test(twoEditWords(["abcdefghijk","lmnopqrstuv"], ["abcdefghij","lmnopqrstv","abcdefghijk","lmnopqrstuv","abcdefghikl"]), ['abcdefghijk', 'lmnopqrstuv'], 'Test 74');
test(twoEditWords(["abcdefghij","abcdefghij","abcdefghij"], ["abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij"]), ['abcdefghij', 'abcdefghij', 'abcdefghij'], 'Test 75');
test(twoEditWords(["unbelievable","incredible","believable"], ["unbelieveble","incredibile","believeble"]), ['unbelievable', 'incredible', 'believable'], 'Test 76');
test(twoEditWords(["abcde", "fghij", "klmno"], ["abxde", "fghij", "klmnp"]), ['abcde', 'fghij', 'klmno'], 'Test 77');
test(twoEditWords(["repetition","repetitions","repetitive"], ["repetion","repetitons","repetite"]), ['repetition', 'repetitions', 'repetitive'], 'Test 78');
test(twoEditWords(["apple", "apply", "appla"], ["appel", "apply", "ample"]), ['apple', 'apply', 'appla'], 'Test 79');
test(twoEditWords(["abcdefgh","abcdefgh","abcdefgh"], ["abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh"]), ['abcdefgh', 'abcdefgh', 'abcdefgh'], 'Test 80');
test(twoEditWords(["abcdef","ghijkl","mnopqr"], ["abcdeg","ghikjl","mnopqg"]), ['abcdef', 'ghijkl', 'mnopqr'], 'Test 81');
test(twoEditWords(["abcdef","abcdeg","abcdeh"], ["abcdef","abcdeg","abcdeh","abcdei"]), ['abcdef', 'abcdeg', 'abcdeh'], 'Test 82');
test(twoEditWords(["aabbcc", "ddeeff", "gghhii"], ["aabbcc", "ddeeff", "gghhij"]), ['aabbcc', 'ddeeff', 'gghhii'], 'Test 83');
test(twoEditWords(["abcdefgh","hgfedcba"], ["abcdefgh","hgfedcba","abcdefgh"]), ['abcdefgh', 'hgfedcba'], 'Test 84');
test(twoEditWords(["kitten","sitting","flask"], ["kitchen","kitten","flasky"]), ['kitten', 'sitting', 'flask'], 'Test 85');
test(twoEditWords(["cat","dog","rat"], ["bat","bag","rat","tag"]), ['cat', 'dog', 'rat'], 'Test 86');
test(twoEditWords(["abcdef","ghijkl"], ["fedcba","lkjihg","abcdeg","ghijkl","mnopqr","stuvwx","yzabcd"]), ['abcdef', 'ghijkl'], 'Test 87');
test(twoEditWords(["aaaaaaaaaa","bbbbbbbbbb","cccccccccc"], ["aaaaaaaaaa","aaaaaaaabb","aaaaaaabbb","aaaaaabbbb","aaaaabbbbb","aaaabbbbbb","aabbbbbbbb","abbbbbbbbb","bbbbbbbbbb"]), ['aaaaaaaaaa', 'bbbbbbbbbb'], 'Test 88');
test(twoEditWords(["abcdefghij","abcdefghik"], ["abcdefghix","abcdefghiy","abcdefghij"]), ['abcdefghij', 'abcdefghik'], 'Test 89');
test(twoEditWords(["abcdef","ghijkl","mnopqr"], ["abcdej","ghijkl","mnopqr","mnopqs","mnopqt"]), ['abcdef', 'ghijkl', 'mnopqr'], 'Test 90');
test(twoEditWords(["dictionary","queries","solution"], ["dictionry","querries","soultion"]), ['dictionary', 'solution'], 'Test 91');
test(twoEditWords(["abcdef", "ghijkl", "mnopqr"], ["abcdef", "ghijkl", "mnopqt"]), ['abcdef', 'ghijkl', 'mnopqr'], 'Test 92');
test(twoEditWords(["mississippi","mississipp","mississippa"], ["mississippi","mississippa","mississippb"]), ['mississippi', 'mississipp', 'mississippa'], 'Test 93');
test(twoEditWords(["abcdefg", "hijklmn", "opqrstu"], ["abcdefg", "hijklmn", "opqrsuv"]), ['abcdefg', 'hijklmn', 'opqrstu'], 'Test 94');
test(twoEditWords(["abcdefgh","abcdefgh"], ["abcdwxyz","abcdefgz","abcdefgh"]), ['abcdefgh', 'abcdefgh'], 'Test 95');
test(twoEditWords(["qwerty","asdfgh","zxcvbn"], ["qwerty","qwertr","asdwgh","zxcvbn","qwertx"]), ['qwerty', 'asdfgh', 'zxcvbn'], 'Test 96');
test(twoEditWords(["aaaaaa", "bbbbbb", "cccccc"], ["aaaaaa", "bbbbbb", "cccccc", "dddddd", "eeeeee", "ffffff"]), ['aaaaaa', 'bbbbbb', 'cccccc'], 'Test 97');
test(twoEditWords(["abcdefghij", "jihgfedcba", "abcdefghij"], ["abcdefghij", "jihgfedcba", "abcdefghji", "jihgfedcbj", "abcdefghii", "jihgfedcbi"]), ['abcdefghij', 'jihgfedcba', 'abcdefghij'], 'Test 98');
test(twoEditWords(["abcdefgh","abcdefgh"], ["abcdefgh","abcdefgh","abcdefgh","abcdefgh"]), ['abcdefgh', 'abcdefgh'], 'Test 99');
test(twoEditWords(["algorithm","alorithgm","alohrithm"], ["algorithm","alorithgm","alohrithm","aloritrhm"]), ['algorithm', 'alorithgm', 'alohrithm'], 'Test 100');
test(twoEditWords(["programming","prograiming","prograimng"], ["programming","prograiming","prograimng","prograimnig"]), ['programming', 'prograiming', 'prograimng'], 'Test 101');
test(twoEditWords(["education","educatiom","educatiin"], ["education","educatiom","educatiin","educatiomn"]), ['education', 'educatiom', 'educatiin'], 'Test 102');
test(twoEditWords(["abcdef","ghijkl","mnopqr","stuvwx","yzabcd"], ["abcdefg","ghijklm","nopqrs","stuvwxy","yzabcdf"]), ['abcdef', 'ghijkl', 'stuvwx', 'yzabcd'], 'Test 103');
test(twoEditWords(["compiler","comipler","comipler"], ["compiler","comipler","compilir","comiplir"]), ['compiler', 'comipler', 'comipler'], 'Test 104');
test(twoEditWords(["zzzzz", "yyyyy", "xxxxx"], ["zzzzz", "xyzyx", "zxyxz"]), ['zzzzz'], 'Test 105');
test(twoEditWords(["zxywvutsrqponmlkjihgfedcba"], ["zyxwvutsrqponmlkjihgfedcba","zxywvutsrqponmlkjihgfedcbb"]), ['zxywvutsrqponmlkjihgfedcba'], 'Test 106');
test(twoEditWords(["programming","language"], ["progrgmmg","langauge","programming"]), ['programming', 'language'], 'Test 107');
test(twoEditWords(["apple","apply","ample"], ["ample","appli","appel"]), ['apple', 'apply', 'ample'], 'Test 108');
test(twoEditWords(["kitten","sitting"], ["kitten","sitting","biting","kiting","kitting"]), ['kitten', 'sitting'], 'Test 109');
test(twoEditWords(["abcdef", "ghijkl", "mnopqr", "stuvwx", "yzabcd"], ["abcdef", "ghijkl", "mnopqr", "stuvwx", "yzabcd"]), ['abcdef', 'ghijkl', 'mnopqr', 'stuvwx', 'yzabcd'], 'Test 110');
test(twoEditWords(["algorithm","algorith","algoritm"], ["algorithm","algorith","algoritm","algorimt"]), ['algorithm', 'algorith', 'algoritm'], 'Test 111');
test(twoEditWords(["aaaaaa","bbbbbb","cccccc"], ["aabbaa","bbccbb","ccddcc"]), ['aaaaaa', 'bbbbbb', 'cccccc'], 'Test 112');
test(twoEditWords(["abcdefghij","abcdefghij","abcdefghij"], ["abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij"]), ['abcdefghij', 'abcdefghij', 'abcdefghij'], 'Test 113');
test(twoEditWords(["sunshine","rainbow","cloud"], ["sunshn","rainbw","clodu"]), ['sunshine', 'rainbow', 'cloud'], 'Test 114');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

