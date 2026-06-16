// Test: 139. Word Break
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { wordBreak } = require("./solution");

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

console.log("\n139. Word Break\n");

test(wordBreak("cars", ["car","ca","rs"]), true, 'Test 1');
test(wordBreak("goals", ["go","goal","goals"]), true, 'Test 2');
test(wordBreak("pineapplepenapple", ["apple","pen","applepen","pine","pineapple"]), true, 'Test 3');
test(wordBreak("leetcode", ["leet","code"]), true, 'Test 4');
test(wordBreak("applepenapple", ["apple","pen"]), true, 'Test 5');
test(wordBreak("catsandog", ["cats","dog","sand","and","cat"]), false, 'Test 6');
test(wordBreak("abcd", ["a","abc","b","cd"]), true, 'Test 7');
test(wordBreak("supercalifragilisticexpialidocious", ["super","cali","fragi","listic","expi","ali","docious"]), true, 'Test 8');
test(wordBreak("skyscraper", ["sky","sc","raper","scra","per"]), true, 'Test 9');
test(wordBreak("wordbreakproblem", ["word","break","problem","wordbreak","breakproblem","wordbreakproblem","wordbreakpro","blem","wordprob","lem","wordb","reak","breakpro","brea","kprob","wordbre","akprob","wordbreakp","rob","reakp","reakpro","wordbre","reakproblem"]), true, 'Test 10');
test(wordBreak("cascadingsubstrings", ["cascade","sub","strings","cascade","ing","substring"]), false, 'Test 11');
test(wordBreak("breaktheglassceiling", ["break","the","glass","ceiling","breaks","theglass","ceiling"]), true, 'Test 12');
test(wordBreak("aquickbrownfoxjumpsoverthelazydog", ["a","quick","brown","fox","jumps","over","the","lazy","dog"]), true, 'Test 13');
test(wordBreak("abcdabcdabcd", ["a", "ab", "abc", "abcd"]), true, 'Test 14');
test(wordBreak("abcd", ["a","b","c","d","abc","bc","abcd","cd"]), true, 'Test 15');
test(wordBreak("wordbreakproblem", ["word","break","problem","pro","gram","wordbreak","breakprob"]), true, 'Test 16');
test(wordBreak("aaaaaaaaaaaaaab", ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]), false, 'Test 17');
test(wordBreak("interviewquestionsarehard", ["interview","questions","are","hard","inter","view","quest","ions","ques","tionsare","arehard"]), true, 'Test 18');
test(wordBreak("mississippi", ["mis","is","sip","i","pi","p","mississipp","missis","miss","issi","ippi","ssippi","ssipp","ssip","ssips","ssip","issipi","issipp","issip","issips","issip","issipp","issip","issips","issip","issipp","issip","issips","issip","issipp","issip","issips","issip","issipp","issip","issips","issip","issipp","issip","issips","issip","issipp","issip","issips","issip","issipp","issip","issips","issip","issipp","issip","issips","issip","issipp","issip","issips","issip","issipp","issip","issips","issip","issipp","issip","issips","issip","issipp","issip","issips","issip","issipp","issip","issips"]), true, 'Test 19');
test(wordBreak("complexwordbreakproblem", ["complex","word","break","problem","wordbreak","breakprob","lem","prob","lemp","complexword"]), true, 'Test 20');
test(wordBreak("mississippi", ["mis","issi","ppi","issip","ippi","missis","sip","pi","ssippi","is","ip","sipi","issipp","ippi","ippi","mississi","ppis","ippii","missi","mississipp","i","p","issippip","issiippi","mississippi"]), true, 'Test 21');
test(wordBreak("abracadabra", ["abra","cad","abra","cadabra","ra","dab","ra","cadabra"]), true, 'Test 22');
test(wordBreak("supercalifragilisticexpialidocious", ["super","cali","fragilistic","expiali","docious","superca","li","fragi","listicex","piali","do"]), true, 'Test 23');
test(wordBreak("abrakadabra", ["abra","kadabra","abra","ka","da","bra"]), true, 'Test 24');
test(wordBreak("aabbccddeeff", ["aa","bb","cc","dd","ee","ff","abc","def","ef","fe","efg","gh","abcdefgh"]), true, 'Test 25');
test(wordBreak("helplineshorthelpline", ["help", "line", "short", "helpline"]), true, 'Test 26');
test(wordBreak("leetleetcodeleet", ["leet","code","leetcode"]), true, 'Test 27');
test(wordBreak("racecar", ["race","car","racec","arc","cec","er","c","ra","ec","ce"]), true, 'Test 28');
test(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", ["a", "aa", "aaa", "aaaa", "aaaaa", "ba"]), false, 'Test 29');
test(wordBreak("mississippi", ["mis","sis","ip","is"]), false, 'Test 30');
test(wordBreak("aaaaaaa", ["aa","aaa"]), true, 'Test 31');
test(wordBreak("mississippi", ["mis","is","ip","i","ssip"]), false, 'Test 32');
test(wordBreak("supercalifragilisticexpialidocious", ["super","cali","fragilistic","expiali","docious","superfragilisticexpialidocious"]), true, 'Test 33');
test(wordBreak("banana", ["ba","na","nan","ban","nana","an"]), true, 'Test 34');
test(wordBreak("thisisatest", ["this","is","a","test","thisis","isatest"]), true, 'Test 35');
test(wordBreak("abcdefgh", ["a","abc","abcd","efg","h"]), true, 'Test 36');
test(wordBreak("abcdabcdeabcdabcde", ["abc","abcd","abcde","de","abcdabcde"]), true, 'Test 37');
test(wordBreak("ababcabcabcabab", ["ab","abc","ababc","ababcabc","ababcabcabc","abab"]), true, 'Test 38');
test(wordBreak("ababababab", ["ab","aba","bab","baba"]), true, 'Test 39');
test(wordBreak("aaaaaaa", ["aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa"]), true, 'Test 40');
test(wordBreak("dynamicprogramming", ["dynamic","programming","dyna","mic","prog","gram","ming"]), true, 'Test 41');
test(wordBreak("aquickbrownfoxjumpsoverthelazydog", ["a","quick","brown","fox","jumps","over","the","lazy","dog","aquick","brownfox","jump","sover","thelazy","zydog","quickbr","ownfo","xjump","soverth"]), true, 'Test 42');
test(wordBreak("thisisaverylongstringthatisdifficulttobreak", ["this","is","a","very","long","string","that","is","difficult","to","break","avery","longstring","isdifficult"]), true, 'Test 43');
test(wordBreak("aabbccddeeff", ["aa","bb","cc","dd","ee","ff","abc","def","ef","cd","ab","de","fe","bc","dc","ad","da","fb","bf","ba","ac","ca","ea","ae","be","eb"]), true, 'Test 44');
test(wordBreak("programmingisfun", ["pro","gram","ming","is","fun","grammi","ngis","funny","progr","amming","isfun","ogramming","grammi","ngisfu","n"]), true, 'Test 45');
test(wordBreak("mississippi", ["missi", "pi", "ssippi", "issipi", "ippi"]), true, 'Test 46');
test(wordBreak("abcdefghij", ["a","ab","abc","abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij"]), true, 'Test 47');
test(wordBreak("abcdefghijk", ["abc","def","ghi","jkl"]), false, 'Test 48');
test(wordBreak("thefastbrownfoxjumpedoverthelazydog", ["the","fast","brown","fox","jumped","over","lazy","dog"]), true, 'Test 49');
test(wordBreak("solutionsarefun", ["solution","solutions","are","fun","solu","tions","sol","u","n"]), true, 'Test 50');
test(wordBreak("thelongestword", ["the","long","longest","word","lon","gest","longes","estword","longestwo","longestwo","longes","gestwo","est","wordwo","rdwo","rdo","wo","o"]), true, 'Test 51');
test(wordBreak("bcbcbc", ["b", "c", "bc", "cb"]), true, 'Test 52');
test(wordBreak("programming", ["pro","gram","ming","gramm","ing","program"]), true, 'Test 53');
test(wordBreak("xyzzyzyxzyzyzyzyxzyz", ["xyz","zyz","zx","zyxzy","zyzyz","zyzyzy"]), false, 'Test 54');
test(wordBreak("theskyisblue", ["the","sky","is","blue","thesky","isblue","theskyisblue","theblue","theskyblue","blueis","isblue","blueisblue","theskyis"]), true, 'Test 55');
test(wordBreak("mississippi", ["miss","issi","ssippi","ppi","ipi","i"]), true, 'Test 56');
test(wordBreak("sheisbeautiful", ["she","is","beau","tiful","beauti","ful","be","auti","ful","ti","ful","shi","bea","autiful","sheis"]), true, 'Test 57');
test(wordBreak("exampleexampleexampleexample", ["ex","ample","example","pleexam","ampleex"]), true, 'Test 58');
test(wordBreak("abcdefgh", ["ab","abc","cd","efgh","abcd"]), true, 'Test 59');
test(wordBreak("abcdefghijklmnopqrstuvwxyz", ["abcdefgh","ijklmnop","qrstuvwx","yz","mnopqr","stuvwx","yzab","cdefghijklmnop","qrstuvwxyza","bcdefghijklmnopq","rstuvwxyzabcde"]), true, 'Test 60');
test(wordBreak("supercalifragilisticexpialidocious", ["super","cali","fragilistic","expiali","docious","superfragilistic"]), true, 'Test 61');
test(wordBreak("ababababab", ["a", "ab", "aba", "ababa"]), true, 'Test 62');
test(wordBreak("thisisaverylongwordthatcanbebrokenintomultiplesubwords", ["this","is","a","very","long","word","that","can","be","broken","into","multiple","sub","words","averylong","bebroken"]), true, 'Test 63');
test(wordBreak("interview", ["in","ter","view","int","ent","rview","terview","erview"]), true, 'Test 64');
test(wordBreak("abcdefghij", ["ab","abc","cd","efg","hij","abcdefghij"]), true, 'Test 65');
test(wordBreak("thisisatutorial", ["this","is","a","tu","torial","tuto","rial","ial","al"]), true, 'Test 66');
test(wordBreak("abcdabcde", ["ab","cd","ef","de","abcde","abcd"]), true, 'Test 67');
test(wordBreak("mississippi", ["mis","is","is","ppi","issi","ippi","pp","miss","mis","ippi"]), true, 'Test 68');
test(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa"]), false, 'Test 69');
test(wordBreak("findingthesolutionisfun", ["find","finding","the","solution","is","fun","solutions","funny"]), true, 'Test 70');
test(wordBreak("thelongestword", ["the","long","longest","word","longestword","oneword","endword","word","one"]), true, 'Test 71');
test(wordBreak("abcd", ["a","ab","abc","abcd","abcde"]), true, 'Test 72');
test(wordBreak("xxyzzyyx", ["xy","xyz","zy","zyx","yx","xx","zz","zyxzyx"]), false, 'Test 73');
test(wordBreak("supercalifragilisticexpialidocious", ["super","cali","fragi","listic","expi","ali","docious","supercalifragilisticexpialidoci"]), true, 'Test 74');
test(wordBreak("thelongestword", ["the","long","est","word","longest","estword","ongestwor","ngestwo","gestw","estwo","stwo","two","thelo","hello","world"]), true, 'Test 75');
test(wordBreak("programmingisawesome", ["pro","gram","ming","is","awe","some","awesome","awe","so","me"]), true, 'Test 76');
test(wordBreak("thecodecanbeanything", ["the","code","can","be","anything","any","thing"]), true, 'Test 77');
test(wordBreak("a", ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]), true, 'Test 78');
test(wordBreak("abcdabcd", ["ab","abcd","cd"]), true, 'Test 79');
test(wordBreak("thisisaverylongstringthatshouldnotmatch", ["this", "is", "very", "long", "string", "that", "should", "not", "match"]), false, 'Test 80');
test(wordBreak("programmingproblemsolver", ["pro", "gram", "ming", "problem", "problemsolver", "solver"]), true, 'Test 81');
test(wordBreak("aaaaaaa", ["aaa","aaaa","aa"]), true, 'Test 82');
test(wordBreak("skilfullyskilled", ["skill","ful","ly","ski","lly","ed"]), false, 'Test 83');
test(wordBreak("internationalization", ["inter","national","ization","inter","nationalization"]), true, 'Test 84');
test(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]), false, 'Test 85');
test(wordBreak("abracadabra", ["abra","cad","bra","a","ab","rac"]), true, 'Test 86');
test(wordBreak("complexstringwithwords", ["complex", "string", "with", "words", "complexstring", "stringwith", "withwords"]), true, 'Test 87');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

