// Test: 2416. Sum Of Prefix Scores Of Strings
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { sumPrefixScores } = require("./solution");

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

console.log("\n2416. Sum Of Prefix Scores Of Strings\n");

test(sumPrefixScores(["hello","hell","he","h"]), [12, 11, 7, 4], 'Test 1');
test(sumPrefixScores(["abc","ab","bc","b"]), [5, 4, 3, 2], 'Test 2');
test(sumPrefixScores(["a","b","c","d"]), [1, 1, 1, 1], 'Test 3');
test(sumPrefixScores(["aa","aaa","aaaa","aaaaa"]), [8, 11, 13, 14], 'Test 4');
test(sumPrefixScores(["a","ab","abc","abcd"]), [4, 7, 9, 10], 'Test 5');
test(sumPrefixScores(["abcde","abcd","abc","ab","a"]), [15, 14, 12, 9, 5], 'Test 6');
test(sumPrefixScores(["b","bb","bbb","bbbb"]), [4, 7, 9, 10], 'Test 7');
test(sumPrefixScores(["xyz","xy","x"]), [6, 5, 3], 'Test 8');
test(sumPrefixScores(["abcd"]), [4], 'Test 9');
test(sumPrefixScores(["xyz","xy","x","xyzabc"]), [9, 7, 4, 12], 'Test 10');
test(sumPrefixScores(["aa","ab","ac","ba","bb","bc","ca","cb","cc"]), [4, 4, 4, 4, 4, 4, 4, 4, 4], 'Test 11');
test(sumPrefixScores(["aaaa","aa","a"]), [7, 5, 3], 'Test 12');
test(sumPrefixScores(["dynamic","dyn","dynam","dynamicp","dynamicpr","dynamicpro","dynamicprogra","dynamicprogram","dynamicprogramming"]), [57, 27, 43, 63, 68, 72, 81, 83, 87], 'Test 13');
test(sumPrefixScores(["optimization","optimize","opt","opti","optim","optimi"]), [37, 33, 18, 23, 27, 30], 'Test 14');
test(sumPrefixScores(["xylophone", "xylo", "xylophon", "xy", "xyl", "xylophonist", "xylophoneplayer", "xylophoneplayerperformance"]), [52, 29, 49, 16, 23, 52, 64, 75], 'Test 15');
test(sumPrefixScores(["xylophone","xylography","xylo","xylophoneography","xyl","xylonate"]), [33, 29, 23, 40, 18, 27], 'Test 16');
test(sumPrefixScores(["aabbcc", "aabbc", "aabb", "aa", "a", "aabbbccc", "aabbbbcccc", "aabbbbccccd"]), [30, 29, 27, 15, 8, 33, 40, 41], 'Test 17');
test(sumPrefixScores(["aaaa", "aaab", "aaac", "aabb", "aabc", "abaa", "abab", "abac", "abba", "abbb", "abbc", "abca", "abcb", "abcc", "acaa", "acab", "acac", "acba", "acbb", "acbc", "acca", "accc"]), [31, 31, 31, 30, 30, 35, 35, 35, 35, 35, 35, 35, 35, 35, 34, 34, 34, 34, 34, 34, 33, 33], 'Test 18');
test(sumPrefixScores(["abacax", "abaca", "bacax", "abac", "ab"]), [17, 16, 5, 14, 8], 'Test 19');
test(sumPrefixScores(["apple","app","application","applesauce","appetizer"]), [20, 15, 25, 25, 21], 'Test 20');
test(sumPrefixScores(["pneumonoultramicroscopicsilicovolcanoconiosis", "pneumo", "pneumonoultra", "pneumonoultramicro", "pneumonoultramicroscopicsilico", "pneumonoultramicroscopicsilicovolcano", "pneumo"]), [155, 42, 77, 97, 133, 147, 42], 'Test 21');
test(sumPrefixScores(["programming","program","pro","prog","progr"]), [30, 26, 15, 19, 22], 'Test 22');
test(sumPrefixScores(["algorithm","algo","al","alex","ale","all"]), [21, 16, 12, 15, 14, 13], 'Test 23');
test(sumPrefixScores(["abcdabcd","abcabc","ababab","aaaaaa","bbbbbb","cccccc","dddddd"]), [14, 12, 11, 9, 6, 6, 6], 'Test 24');
test(sumPrefixScores(["algorithm","algo","alg","algor","algorith","algori"]), [35, 23, 18, 27, 34, 30], 'Test 25');
test(sumPrefixScores(["aabbcc","aabbc","aabb","aab","aa","a","aabbbcc","aabbb","aabbbb"]), [33, 32, 30, 24, 17, 9, 35, 33, 34], 'Test 26');
test(sumPrefixScores(["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa"]), [9, 17, 24, 30, 35, 39, 42, 44, 45], 'Test 27');
test(sumPrefixScores(["prefix","pre","prefer","preference","presentation","president","presidency"]), [26, 21, 28, 32, 32, 33, 34], 'Test 28');
test(sumPrefixScores(["hello","hell","he","h","hero","helium","helper"]), [20, 19, 13, 7, 15, 20, 20], 'Test 29');
test(sumPrefixScores(["unique","un","uni","unic","uniqu","uniquee","uniqueee","uniqueeee"]), [37, 16, 23, 24, 33, 40, 42, 43], 'Test 30');
test(sumPrefixScores(["prefix","pre","pref","prefi","prefin","prefixation","prefixes","prefixing","prefixes","preference","prefer"]), [55, 33, 43, 50, 51, 60, 59, 58, 59, 51, 47], 'Test 31');
test(sumPrefixScores(["apple","app","ap","application","appetite"]), [17, 14, 10, 23, 19], 'Test 32');
test(sumPrefixScores(["aabbcc","aab","abc","aac","acc","aaa","bbb","ccc","aabbc","aabbbc","aabbbcc","aabbbccc"]), [32, 24, 12, 19, 12, 19, 3, 3, 31, 35, 37, 38], 'Test 33');
test(sumPrefixScores(["complex","com","compl","complexity","composite"]), [26, 15, 22, 29, 24], 'Test 34');
test(sumPrefixScores(["cat","cater","caterpillar","catering","caterer","caterers","catered","catering"]), [24, 38, 44, 44, 43, 44, 42, 44], 'Test 35');
test(sumPrefixScores(["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]), [10, 19, 27, 34, 40, 45, 49, 52, 54, 55], 'Test 36');
test(sumPrefixScores(["optimization","opt","opti","optim","optimiz","optimise","optimized"]), [44, 21, 27, 32, 39, 38, 41], 'Test 37');
test(sumPrefixScores(["data","dat","database","datascience","datastructure"]), [19, 15, 23, 27, 29], 'Test 38');
test(sumPrefixScores(["car","cat","catch","cart","card","carpet"]), [16, 14, 16, 17, 17, 19], 'Test 39');
test(sumPrefixScores(["banana","band","ball","bat","basketball"]), [15, 13, 12, 11, 18], 'Test 40');
test(sumPrefixScores(["programming","program","pro","pr","p","prefix","pre","preprocessing"]), [30, 26, 18, 15, 8, 21, 18, 28], 'Test 41');
test(sumPrefixScores(["longword","longworder","longworderer","longwordererest","longwordereresterest"]), [40, 48, 54, 60, 65], 'Test 42');
test(sumPrefixScores(["algorithm","algo","al","alex","algorithmic","algorithms"]), [35, 20, 12, 14, 37, 36], 'Test 43');
test(sumPrefixScores(["aaa", "aab", "aac", "aba", "abb", "abc", "aca", "acb", "acc", "baa", "bab", "bac", "bba", "bbb", "bbc", "bca", "bcb", "bcc", "caa", "cab", "cac", "cba", "cbb", "cbc", "cca", "ccb", "ccc"]), [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13], 'Test 44');
test(sumPrefixScores(["backtracking","back","backt","backtr","backtra","backtrac","backtrack","backtracki","backtrackin","backtrackin","backtrackinga","backtrackingal","backtrackingalg","backtrackingalgo"]), [131, 56, 69, 81, 92, 102, 111, 119, 126, 126, 135, 138, 140, 141], 'Test 45');
test(sumPrefixScores(["prefix","pre","pres","presum","pressure"]), [18, 15, 18, 20, 22], 'Test 46');
test(sumPrefixScores(["interview","inter","inte","interw","interv","intervi","interviewe"]), [45, 34, 28, 35, 38, 41, 46], 'Test 47');
test(sumPrefixScores(["zebra", "zoo", "zookeeper", "zoozoo", "ze", "zee", "z"]), [13, 13, 19, 16, 10, 11, 7], 'Test 48');
test(sumPrefixScores(["repeated","repeat","rep","re","r","peated","eat","e","t","ted","tedious","tediousness"]), [20, 18, 12, 9, 5, 6, 4, 2, 4, 10, 18, 22], 'Test 49');
test(sumPrefixScores(["banana","ban","bananas","band","bandana","bandwidth"]), [24, 18, 25, 21, 24, 26], 'Test 50');
test(sumPrefixScores(["repeated","repeats","repeat","repeating","repeatedly","repeatability"]), [40, 37, 36, 39, 42, 43], 'Test 51');
test(sumPrefixScores(["algorithm","al","algo","all","algorithms","application","app"]), [28, 12, 18, 13, 29, 19, 11], 'Test 52');
test(sumPrefixScores(["flower","flow","flight","flour","flourish","flourishingly"]), [21, 19, 16, 23, 29, 34], 'Test 53');
test(sumPrefixScores(["banana", "ban", "band", "bandana", "bandanna", "banda"]), [21, 18, 22, 28, 29, 25], 'Test 54');
test(sumPrefixScores(["hello","hell","he","h","helicopter","helium","help","hero","her","hemoglobin"]), [27, 26, 19, 10, 32, 28, 25, 22, 21, 27], 'Test 55');
test(sumPrefixScores(["unique","uniques","unicorn","unicycle","universality"]), [21, 22, 20, 21, 24], 'Test 56');
test(sumPrefixScores(["optimization","optimizer","optimize","optimal","optimism","optimist","optimistic","optimum","opt","optional"]), [61, 59, 58, 49, 57, 58, 60, 49, 30, 43], 'Test 57');
test(sumPrefixScores(["complex","complicated","complicate","complexity","complexion","complexing","complexified","complexify","complexifies","complexing"]), [66, 61, 60, 75, 75, 77, 81, 77, 81, 77], 'Test 58');
test(sumPrefixScores(["abracadabra","abra","bracadabra","bracada","braca","bracad","bracadab","bracadabr","bracadabra","bracadabram","bracadabramm"]), [15, 8, 75, 60, 45, 53, 66, 71, 75, 77, 78], 'Test 59');
test(sumPrefixScores(["hello","hell","help","hero","her","hers","he","hem","hemoglobin"]), [24, 23, 22, 22, 21, 22, 18, 20, 27], 'Test 60');
test(sumPrefixScores(["trie","tr","tree","tries","trigger","trig"]), [18, 12, 14, 19, 21, 18], 'Test 61');
test(sumPrefixScores(["aabbcc","aabbc","aabb","aab","aa","a"]), [21, 20, 18, 15, 11, 6], 'Test 62');
test(sumPrefixScores(["abcdefghijklmnopqrstuvwxyz", "abcde", "abcdef", "abcdefghij", "a"]), [48, 21, 24, 32, 5], 'Test 63');
test(sumPrefixScores(["algorithm","algo","algor","algorit","algorith","algorithme","algori","algorithmically"]), [57, 32, 39, 50, 54, 58, 45, 63], 'Test 64');
test(sumPrefixScores(["banana","ban","band","bandana","bandwidth"]), [18, 15, 18, 21, 23], 'Test 65');
test(sumPrefixScores(["algorithm", "algebra", "alien", "alliance", "alibi", "allocate", "allot", "allow", "allude", "allure", "alloy", "ally"]), [32, 30, 28, 37, 28, 40, 37, 37, 36, 36, 37, 33], 'Test 66');
test(sumPrefixScores(["prefix","pre","pref","prefer","preference","preferred","preferring"]), [29, 21, 27, 35, 39, 39, 40], 'Test 67');
test(sumPrefixScores(["data","database","datastructure","datamining","dataviz","datascience","datamodel"]), [28, 32, 38, 35, 31, 36, 34], 'Test 68');
test(sumPrefixScores(["programming","program","pro","progress","profound","process","progressive"]), [37, 33, 21, 35, 26, 25, 38], 'Test 69');
test(sumPrefixScores(["programming", "program", "pro", "programminglanguage", "prolog", "protocol"]), [38, 30, 18, 46, 21, 23], 'Test 70');
test(sumPrefixScores(["abacaxi","abacax","abac","aba","ab","a","abc","abcd","abcde"]), [29, 28, 24, 21, 17, 9, 20, 22, 23], 'Test 71');
test(sumPrefixScores(["zebra","ze","zoo","zookeeper","zest","zippy","zeta","zone"]), [15, 12, 13, 19, 14, 12, 14, 13], 'Test 72');
test(sumPrefixScores(["complexity","comp","compl","comple","complex","complexe","complexit"]), [48, 28, 34, 39, 43, 44, 47], 'Test 73');
test(sumPrefixScores(["algorithm", "algebra", "al", "algorithmically", "algo"]), [27, 18, 10, 33, 17], 'Test 74');
test(sumPrefixScores(["unique","un","uni","unic","uniqu","uniqueness","uniquely","uniques"]), [37, 16, 23, 24, 33, 41, 39, 38], 'Test 75');
test(sumPrefixScores(["datastructure","data","datas","datast","datastr","datastru","datastruc"]), [52, 28, 34, 39, 43, 46, 48], 'Test 76');
test(sumPrefixScores(["prefix","prefixes","pref","prefer","prefixing"]), [26, 28, 20, 22, 29], 'Test 77');
test(sumPrefixScores(["apple","app","ap","a","application"]), [15, 12, 9, 5, 21], 'Test 78');
test(sumPrefixScores(["banana", "bandana", "band", "bandwidth", "bandage"]), [18, 23, 19, 24, 23], 'Test 79');
test(sumPrefixScores(["abacaxi","abac","aba","ab","a","abacax","abacaxs","abacaxus"]), [35, 26, 21, 15, 8, 34, 35, 36], 'Test 80');
test(sumPrefixScores(["interview","inter","interac","interactive","interact","interactivity"]), [34, 30, 38, 46, 41, 48], 'Test 81');
test(sumPrefixScores(["prefix", "prefixing", "prefixation", "prefixer", "pref", "pre", "p"]), [32, 35, 37, 34, 24, 19, 7], 'Test 82');
test(sumPrefixScores(["zebra","zebr","zeb","ze","z","zebraa","zebrab","zebrac","zebrad"]), [35, 30, 24, 17, 9, 36, 36, 36, 36], 'Test 83');
test(sumPrefixScores(["cat","cater","category","categories","caterpillar","catering","catered","caterer","caterers","catering"]), [30, 46, 46, 48, 52, 52, 50, 51, 52, 52], 'Test 84');
test(sumPrefixScores(["abacaxi","abacax","abac","aba","ab","a","bacaxi","bacax","bac","ba","b"]), [23, 22, 18, 15, 11, 6, 17, 16, 12, 9, 5], 'Test 85');
test(sumPrefixScores(["abacax", "abaca", "ab", "abc", "abcd", "abcde", "abcdef"]), [21, 20, 14, 18, 21, 23, 24], 'Test 86');
test(sumPrefixScores(["xylophone","xylo","xylophon","xylophone","xylophones","xylophonist","xylophonists","xylophonistic","xylophonistically","xylophonists","xylophonist"]), [87, 44, 84, 87, 88, 102, 104, 106, 110, 104, 102], 'Test 87');
test(sumPrefixScores(["algorithm","algo","al","alex","alert"]), [19, 14, 10, 13, 14], 'Test 88');
test(sumPrefixScores(["banana","ban","band","bandana","bandwidth","bandage"]), [21, 18, 22, 26, 27, 26], 'Test 89');
test(sumPrefixScores(["test","testing","tested","testify","testimony","testimonial","testament","testamentary","testator","testatrix"]), [40, 46, 42, 46, 51, 53, 52, 55, 48, 49], 'Test 90');
test(sumPrefixScores(["banana","band","bandana","bandanna","bandage","bandaid"]), [21, 23, 30, 31, 29, 29], 'Test 91');
test(sumPrefixScores(["abcd","abc","ab","a","zyx","zy","z","mnop","mno","mn","m"]), [10, 9, 7, 4, 6, 5, 3, 10, 9, 7, 4], 'Test 92');
test(sumPrefixScores(["optimization", "optimizer", "optimize", "optimal", "optimism", "optimist", "optimum", "option", "optional", "opt", "optic", "optics"]), [67, 65, 64, 56, 62, 62, 56, 51, 53, 36, 49, 50], 'Test 93');
test(sumPrefixScores(["banana", "ban", "band", "bandana", "bandanna", "banda", "bandanaaa"]), [24, 21, 26, 35, 35, 30, 37], 'Test 94');
test(sumPrefixScores(["supercalifragilisticexpialidocious","super","supercal","supercalifrag","supercalifragilistic","supercalifragilisticex","supercalifragilisticexp","supercalifragilisticexpia","supercalifragilisticexpiali","supercalifragilisticexpialidoc","supercalifragilisticexpialidociou","supercalifragilisticexpialidociousness"]), [274, 60, 93, 143, 206, 222, 229, 241, 251, 263, 272, 278], 'Test 95');
test(sumPrefixScores(["interspecies","inter","interstellar","interact","interaction","interference","internet","interim"]), [48, 40, 48, 46, 49, 47, 43, 42], 'Test 96');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

