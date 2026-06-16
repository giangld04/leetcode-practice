// Test: 2707. Extra Characters In A String
// 97 test cases from LeetCodeDataset
// Run: node test.js

const { minExtraChar } = require("./solution");

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

console.log("\n2707. Extra Characters In A String\n");

test(minExtraChar("abc", ["a","b","c"]), 0, 'Test 1');
test(minExtraChar("sayhelloworld", ["hello","world"]), 3, 'Test 2');
test(minExtraChar("abc", ["d","e"]), 3, 'Test 3');
test(minExtraChar("abcabcabc", ["abcabc","abc"]), 0, 'Test 4');
test(minExtraChar("abracadabra", ["abra","cadabra","abc"]), 0, 'Test 5');
test(minExtraChar("abc", ["d","e","f"]), 3, 'Test 6');
test(minExtraChar("applepenapple", ["apple","pen"]), 0, 'Test 7');
test(minExtraChar("catsandog", ["cats","dog","sand","and","cat"]), 2, 'Test 8');
test(minExtraChar("ab", ["abc","def"]), 2, 'Test 9');
test(minExtraChar("abcde", ["a","b","c","d","e"]), 0, 'Test 10');
test(minExtraChar("programming", ["pro","gram","ming"]), 0, 'Test 11');
test(minExtraChar("a", ["b"]), 1, 'Test 12');
test(minExtraChar("mississippi", ["mis","is","ip","i","p"]), 2, 'Test 13');
test(minExtraChar("leetscode", ["leet","code","leetcode"]), 1, 'Test 14');
test(minExtraChar("aabbcc", ["a","b","c"]), 0, 'Test 15');
test(minExtraChar("programmingisfun", ["pro","gram","ming","is","fun","prog","am","ing","pr","gramm","ingis","funs"]), 0, 'Test 16');
test(minExtraChar("dynamicprogramming", ["dyn","ami","cpro","gram","ming","pro","gramming"]), 0, 'Test 17');
test(minExtraChar("algorithm", ["algo","rith","m","alg","ith","o","g","a","l","th","or","thm","al"]), 0, 'Test 18');
test(minExtraChar("abcdefghijklmnopqrstuvwxyz", ["a","z","abc","xyz","mnopqr","uvw","def","jkl"]), 5, 'Test 19');
test(minExtraChar("substringsearch", ["sub","string","search","substri","ngsea","rch","str","sea","subsearc","ubstringse"]), 0, 'Test 20');
test(minExtraChar("encyclopedia", ["ency","clop","edia","lo","pedia","cycle","en","dec","clo","opaedia"]), 0, 'Test 21');
test(minExtraChar("thisisateststring", ["this","is","a","test","string","isatest","teststr","str","ring","thi","sta","tes","ing","est","at"]), 0, 'Test 22');
test(minExtraChar("abcdefghijklmnopqrstuvwxyz", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), 0, 'Test 23');
test(minExtraChar("optimization", ["opt", "imiz", "tio", "n", "zat", "ion", "optim"]), 1, 'Test 24');
test(minExtraChar("programmingisfun", ["pro","gram","ming","is","fun","gramm","ing","program","mingis","funn"]), 0, 'Test 25');
test(minExtraChar("thisisatest", ["this","is","a","test","ate","st"]), 0, 'Test 26');
test(minExtraChar("programmingchallenge", ["pro","gram","ming","chall","lenge","ge"]), 2, 'Test 27');
test(minExtraChar("abcdefghijklmnopqrstuvwxyz", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"]), 0, 'Test 28');
test(minExtraChar("encyclopedia", ["ency","clopedia","encyclo","pedia","encyclope","dopia","edia","a","ei","lo","ope","dic","lope","dia","edia"]), 0, 'Test 29');
test(minExtraChar("minimizingextra", ["mini","min","zing","extra","ze","tra","minimize"]), 2, 'Test 30');
test(minExtraChar("repeatedcharacters", ["re","pe","at","ed","cha","rac","ters","ter","char","acters"]), 0, 'Test 31');
test(minExtraChar("findingthesolution", ["find","ing","the","solu","tion","solution","thesolu","tingthe","thesolu","solu","tionfind","ingthe","thesolution","ingthes"]), 0, 'Test 32');
test(minExtraChar("mississippi", ["mis","sis","ip","i","ss","p"]), 1, 'Test 33');
test(minExtraChar("aaaaabbbbb", ["a","b","aa","bb","ab","ba","aaa","bbb","aab","bba","aba","bab"]), 0, 'Test 34');
test(minExtraChar("mississippi", ["issi","ssippi","miss","ippi","is","s","pi","p"]), 0, 'Test 35');
test(minExtraChar("subsequences", ["sub","seq","uen","ce","s","quence","quencece"]), 0, 'Test 36');
test(minExtraChar("backtracking", ["back","track","ing","backtr","acking","tracki","ing"]), 0, 'Test 37');
test(minExtraChar("abcdefghijk", ["abc","def","gh","ijk","a","b","c","d","e","f","g","h","i","j","k"]), 0, 'Test 38');
test(minExtraChar("abcdefghijabcdefghijabcdefghij", ["abc","def","ghi","j","abcdefghij","abcdefgh","abcde","fghij","ab","cd","ef","gh","ij"]), 0, 'Test 39');
test(minExtraChar("thisisaverylongstring", ["this","is","a","very","long","string","thi","sis","verylong"]), 0, 'Test 40');
test(minExtraChar("optimallybreakingstrings", ["opti","mally","breaking","strings","opt","im","ally","break","ing","str","ing","s","optimal","breaks","allybreak"]), 0, 'Test 41');
test(minExtraChar("abracadabra", ["abra","cad","bra","abc","rac"]), 0, 'Test 42');
test(minExtraChar("mississippi", ["mis","si","issi","pi","ppi","pis","missis","sippi","ippi","issipp"]), 0, 'Test 43');
test(minExtraChar("xylophone", ["xy","lo","phone","ph","one","xo","xyl","ylo","ho","ne","pho"]), 0, 'Test 44');
test(minExtraChar("subsequences", ["sub","seq","en","ce","qu","subseq","quence"]), 2, 'Test 45');
test(minExtraChar("thecodinginterview", ["the","coding","in","terview","inter","view","codingin","erview","viewint","nterview","inerview"]), 0, 'Test 46');
test(minExtraChar("abcdefghijklmnopqrstuvwxyz", ["a","z","abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"]), 0, 'Test 47');
test(minExtraChar("abracadabra", ["abra","cad","bra","rac","ab","ad","a","b","c","d","r"]), 0, 'Test 48');
test(minExtraChar("optimization", ["opti","miz","ation","iza","ti","on"]), 0, 'Test 49');
test(minExtraChar("mississippi", ["mis","sis","ip","i","ss","is","pi","pp"]), 1, 'Test 50');
test(minExtraChar("dynamicprogramming", ["dynamic","program","gram","ming","pro","gramming"]), 0, 'Test 51');
test(minExtraChar("constraints", ["con", "straint", "stra", "ints", "t", "res", "trai", "ns", "constra"]), 0, 'Test 52');
test(minExtraChar("abcdabcdabcd", ["ab","cd","abcd","abc","bcd","dabc"]), 0, 'Test 53');
test(minExtraChar("watermelon", ["water","melon","wa","ter","melon","wa","me","lo","on","terme","lono","wate","rme","lo","non","w","a","t","e","r","m","e","l","o","n"]), 0, 'Test 54');
test(minExtraChar("breakfast", ["break","fast","bre","ak","fastbreak","breakfa","st"]), 0, 'Test 55');
test(minExtraChar("subsequence", ["sub","sequence","seq","uen","ce","subse","quen"]), 0, 'Test 56');
test(minExtraChar("optimization", ["opti","mize","optim","on","ize","miz","ization"]), 0, 'Test 57');
test(minExtraChar("programming", ["pro", "gram", "ming", "ing", "progr", "amming"]), 0, 'Test 58');
test(minExtraChar("alibabacloud", ["ali","ba","bacloud","cloud","ib","baclou","bacla","baba","clouds","alibaba"]), 0, 'Test 59');
test(minExtraChar("segmentation", ["seg","men","tation","ment","entation","segmen","t","ation"]), 0, 'Test 60');
test(minExtraChar("algorithm", ["algo","rithm","log","ith","m","a","thm","gor","orithm","ithm","gori","thmi"]), 0, 'Test 61');
test(minExtraChar("beautiful", ["be","autiful","aut","ful","at","beau","ti","ful","b","e","a","u","t","i","f","u","l","beauti","ful","auti","ful","beaut","iful","bea","utiful","be","autiful","ti","ful","bea","ut","iful","beau","tiful","beaut","ifu","l"]), 0, 'Test 62');
test(minExtraChar("quickbrownfoxjumpsoverthelazydog", ["quick","brown","fox","jumps","over","the","lazy","dog","qu","ick","br","own","fo","x","ump","so","ver","el","az","y"]), 0, 'Test 63');
test(minExtraChar("example", ["ex","ample","am","ple","e","xample"]), 0, 'Test 64');
test(minExtraChar("dynamicprogramming", ["dyn","amic","prog","ram","ming","gramming","pro","dynamic","grampro","mingprog","rammi"]), 0, 'Test 65');
test(minExtraChar("mississippi", ["mis","sis","sip","issi","ippi"]), 1, 'Test 66');
test(minExtraChar("subsequence", ["sub", "seq", "en", "ce", "subse", "quence"]), 0, 'Test 67');
test(minExtraChar("overlapping", ["over","lap","ping","lap","pingo","ver","lap","laplap"]), 0, 'Test 68');
test(minExtraChar("dynamicprogramming", ["dyn", "amic", "pro", "gram", "ming", "prog", "dyna", "micpro", "grammi", "amming"]), 0, 'Test 69');
test(minExtraChar("programming", ["pro","gram","ming","gramming","prog","program","mming","progr","gram","ming","gramm","pro","gram","ming","programming","gram","ming","pro","gram","ming","gramming","pro","gram","ming","gramm","pro","gram","ming","program","ming","pro","gramming","gram","ming","gramm","prog","ming","pro","gramming","pro","gram","ming","gramm","pro","gram","ming","gramming","prog","gram","ming","pro","gramming"]), 0, 'Test 70');
test(minExtraChar("partitioning", ["parti","tion","ion","part","itioning","parti","tion","ing"]), 0, 'Test 71');
test(minExtraChar("abcdefghijklmnopqrstuvwxyz", ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz"]), 0, 'Test 72');
test(minExtraChar("optimization", ["opt","im","iz","ation","iza","tio"]), 0, 'Test 73');
test(minExtraChar("breakintothepieces", ["break","into","the","pie","ces","iece","to","pieces","breakin","intothep"]), 0, 'Test 74');
test(minExtraChar("fuzzywuzzy", ["fuz","zy","wuz","z","wuzz","fuzzy","wuzzywuzz"]), 0, 'Test 75');
test(minExtraChar("programmingcontest", ["pro","gram","ming","con","test","gramming","est"]), 0, 'Test 76');
test(minExtraChar("abcdefgabcdefg", ["abc","def","gh","abcdef","bcde","fgh","abcd","efg","fg","abcdab","bcdefg"]), 0, 'Test 77');
test(minExtraChar("pythonprogramming", ["py","thon","pro","gram","ming","prog","python","gramming","ron","th","ing"]), 0, 'Test 78');
test(minExtraChar("helloworld", ["hello","wor","ld","hell","world","owor","orl","rld","hel","wo","rld","worl","hello","world","worldly","or","wor","ld","hell","world","hellworld","hell","wo","rld","hello","world"]), 0, 'Test 79');
test(minExtraChar("programmingcontest", ["pro","gram","ming","con","test","gramming","est","on","gramcon","estcontest"]), 0, 'Test 80');
test(minExtraChar("onomatopoeia", ["ono","mato","poei","a","ia","oeia","opoe","oe","onom","atopoeia"]), 0, 'Test 81');
test(minExtraChar("mississippi", ["mis", "issi", "ippi", "sip", "iss", "is", "i", "pi", "missis", "sippi"]), 0, 'Test 82');
test(minExtraChar("loremipsum", ["lor","em","ip","sum","lorem","rem","ems","mip","ips","pum","ipsum"]), 0, 'Test 83');
test(minExtraChar("interview", ["inter", "view", "ter", "iew", "in", "terview", "nterv", "vieww"]), 0, 'Test 84');
test(minExtraChar("abracadabra", ["ab","ra","cad","abra","brac"]), 0, 'Test 85');
test(minExtraChar("programmingcontest", ["pro","gram","ming","con","test","est","contest"]), 0, 'Test 86');
test(minExtraChar("mississippi", ["mis","sis","sip","i","ss","pi","pp"]), 0, 'Test 87');
test(minExtraChar("dynamicprogramming", ["dyn","amic","pro","gram","ming","gramm","prog","dyna","progr"]), 0, 'Test 88');
test(minExtraChar("supercalifragilisticexpialidocious", ["super","cali","fragilistic","expiali","docious","ex","pi","ali","ous"]), 0, 'Test 89');
test(minExtraChar("supercalifragilisticexpialidocious", ["super","cali","fragilistic","expiali","docious","superca","lifrag","istic","expialido","cious","superca","li","frag","ilistic","ex","pialido","california","super","superdocus"]), 0, 'Test 90');
test(minExtraChar("supercalifragilisticexpialidocious", ["super","cali","fragilistic","expiali","docious","frag","listic","exp","ali","do","cious","superca","li","fragi","list","expialidoc","supercalifrag","supercalifragilisticexpi","alidocious","istic","expialidoci","superca","lifragilisti","cexpialid","alidoc","expialido","fragilisticexpialidocious"]), 0, 'Test 91');
test(minExtraChar("optimizationproblems", ["opt","im","ization","prob","lems","ob","lem","pro","blem","blempro"]), 0, 'Test 92');
test(minExtraChar("breakfast", ["break", "fast", "bre", "ak", "fast", "reak"]), 0, 'Test 93');
test(minExtraChar("dictionary", ["dic", "tion", "tio", "nary", "dict", "ionar", "ictionary", "dictio", "n"]), 0, 'Test 94');
test(minExtraChar("backtracking", ["back","track","ing","bac","ktrack","king"]), 0, 'Test 95');
test(minExtraChar("algorithms", ["algo","rithm","thms","log","rith","ms","algothm","rithms"]), 0, 'Test 96');
test(minExtraChar("optimization", ["opt","im","ization","iz","ation","optim","ize"]), 0, 'Test 97');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

