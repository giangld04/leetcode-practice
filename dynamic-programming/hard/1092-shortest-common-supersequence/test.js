// Test: 1092. Shortest Common Supersequence
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { shortestCommonSupersequence } = require("./solution");

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

console.log("\n1092. Shortest Common Supersequence\n");

test(shortestCommonSupersequence("xyz", "xyx"), xyxz, 'Test 1');
test(shortestCommonSupersequence("short", "sorts"), shorts, 'Test 2');
test(shortestCommonSupersequence("algorithm", "altruistic"), altgoruistichm, 'Test 3');
test(shortestCommonSupersequence("ab", "ba"), bab, 'Test 4');
test(shortestCommonSupersequence("abc", "def"), defabc, 'Test 5');
test(shortestCommonSupersequence("aaaaaaaa", "aaaaaaaa"), aaaaaaaa, 'Test 6');
test(shortestCommonSupersequence("abc", "cba"), cbabc, 'Test 7');
test(shortestCommonSupersequence("abc", "abc"), abc, 'Test 8');
test(shortestCommonSupersequence("sequence", "subsequence"), subsequence, 'Test 9');
test(shortestCommonSupersequence("dynamic", "programming"), progrdynammingc, 'Test 10');
test(shortestCommonSupersequence("abac", "cab"), cabac, 'Test 11');
test(shortestCommonSupersequence("xyz", "zyx"), zyxyz, 'Test 12');
test(shortestCommonSupersequence("abcde", "ace"), abcde, 'Test 13');
test(shortestCommonSupersequence("a", "b"), ba, 'Test 14');
test(shortestCommonSupersequence("abcd", "aebd"), aebcd, 'Test 15');
test(shortestCommonSupersequence("datastructure", "algorithm"), dalgotastriucthmure, 'Test 16');
test(shortestCommonSupersequence("xyzuvw", "uvwzyx"), xyzuvwzyx, 'Test 17');
test(shortestCommonSupersequence("kitten", "sitting"), skittieng, 'Test 18');
test(shortestCommonSupersequence("intersection", "introduction"), interodusection, 'Test 19');
test(shortestCommonSupersequence("sequences", "supersequence"), supersequences, 'Test 20');
test(shortestCommonSupersequence("abracadabra", "cadabraabra"), cadabracadabra, 'Test 21');
test(shortestCommonSupersequence("mississippi", "missouri"), missourissippi, 'Test 22');
test(shortestCommonSupersequence("interview", "environment"), eintervironmentw, 'Test 23');
test(shortestCommonSupersequence("abcdabcdabcd", "cdabcdabcdab"), cdabcdabcdabcd, 'Test 24');
test(shortestCommonSupersequence("abcdefghij", "jihgfedcba"), jihgfedcbabcdefghij, 'Test 25');
test(shortestCommonSupersequence("ababab", "bababa"), bababab, 'Test 26');
test(shortestCommonSupersequence("abcdabcdabcd", "bcdabcda"), abcdabcdabcd, 'Test 27');
test(shortestCommonSupersequence("optimization", "generalization"), generaloptimization, 'Test 28');
test(shortestCommonSupersequence("interview", "intermission"), intermvissionew, 'Test 29');
test(shortestCommonSupersequence("partiallyoverlapping", "overlapping"), partiallyoverlapping, 'Test 30');
test(shortestCommonSupersequence("abcdabcd", "dcbaabcd"), dcabcdaabcd, 'Test 31');
test(shortestCommonSupersequence("uniquecharacters", "charactersunique"), uniquecharactersunique, 'Test 32');
test(shortestCommonSupersequence("abcxyz", "xyzabc"), xyzabcxyz, 'Test 33');
test(shortestCommonSupersequence("longest", "longestcommonsubsequence"), longestcommonsubsequence, 'Test 34');
test(shortestCommonSupersequence("abcdefgxyz", "zyxabcdefg"), zyxabcdefgxyz, 'Test 35');
test(shortestCommonSupersequence("longestcommonsubsequence", "shortestuncommonsupersequence"), shlortngestuncommonsuperbsequence, 'Test 36');
test(shortestCommonSupersequence("abracadabra", "bracadabrac"), abracadabrac, 'Test 37');
test(shortestCommonSupersequence("abcde", "fghij"), fghijabcde, 'Test 38');
test(shortestCommonSupersequence("mississippi", "pississippi"), pmississippi, 'Test 39');
test(shortestCommonSupersequence("abcdabcdabcd", "dcba"), dabcdabcdabcd, 'Test 40');
test(shortestCommonSupersequence("abcdefghiklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihgfedcbabcdefghiklmnopqrstuvwxyz, 'Test 41');
test(shortestCommonSupersequence("complexity", "simplicity"), sicomplexicity, 'Test 42');
test(shortestCommonSupersequence("longest", "shortest"), shlortngest, 'Test 43');
test(shortestCommonSupersequence("programming", "grammingpro"), programmingpro, 'Test 44');
test(shortestCommonSupersequence("abcdefghijk", "mnopqrstuvwxyz"), mnopqrstuvwxyzabcdefghijk, 'Test 45');
test(shortestCommonSupersequence("supercalifragilisticexpialidocious", "california"), supercalifornagilisticexpialidocious, 'Test 46');
test(shortestCommonSupersequence("aabbccddeeff", "ffeeddccbbaa"), ffeeddccbbaabbccddeeff, 'Test 47');
test(shortestCommonSupersequence("abcdefg", "xyzabc"), xyzabcdefg, 'Test 48');
test(shortestCommonSupersequence("pneumonoultramicroscopicsilicovolcanoconiosis", "congratulations"), cpneumongratoulatramicroscopicsilicovolcanoconiosis, 'Test 49');
test(shortestCommonSupersequence("supersequence", "subsequence"), subpersequence, 'Test 50');
test(shortestCommonSupersequence("abababab", "babababa"), babababab, 'Test 51');
test(shortestCommonSupersequence("abracadabra", "bracadabra"), abracadabra, 'Test 52');
test(shortestCommonSupersequence("abcdexyz", "xyzab"), abcdexyzab, 'Test 53');
test(shortestCommonSupersequence("abcdefgh", "efghijkl"), abcdefghijkl, 'Test 54');
test(shortestCommonSupersequence("shortest", "common"), cshommonrtest, 'Test 55');
test(shortestCommonSupersequence("abcdxyz", "xyzabcd"), xyzabcdxyz, 'Test 56');
test(shortestCommonSupersequence("abracadabra", "avadakedavra"), avbradcakedavbra, 'Test 57');
test(shortestCommonSupersequence("abcdefgh", "efghabcd"), efghabcdefgh, 'Test 58');
test(shortestCommonSupersequence("super", "supercalifragilisticexpialidocious"), supercalifragilisticexpialidocious, 'Test 59');
test(shortestCommonSupersequence("overlapping", "lappingover"), overlappingover, 'Test 60');
test(shortestCommonSupersequence("abracadabra", "cabracadabrac"), cabracadabrac, 'Test 61');
test(shortestCommonSupersequence("programming", "development"), developrogramemintg, 'Test 62');
test(shortestCommonSupersequence("abcd", "abcdeabcde"), abcdeabcde, 'Test 63');
test(shortestCommonSupersequence("abcdexyz", "yzabcdex"), yzabcdexyz, 'Test 64');
test(shortestCommonSupersequence("programming", "gramming"), programming, 'Test 65');
test(shortestCommonSupersequence("aabbccdd", "dddccccbbbaa"), dddccccbbbaabbccdd, 'Test 66');
test(shortestCommonSupersequence("longestcommonsubsequence", "shortestcommonsupersequence"), shlortngestcommonsuperbsequence, 'Test 67');
test(shortestCommonSupersequence("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihgfedcbabcdefghijklmnopqrstuvwxyz, 'Test 68');
test(shortestCommonSupersequence("longest", "longer"), longerst, 'Test 69');
test(shortestCommonSupersequence("abcdefghijk", "abcdefghij"), abcdefghijk, 'Test 70');
test(shortestCommonSupersequence("abcd", "efgh"), efghabcd, 'Test 71');
test(shortestCommonSupersequence("abcdabcdabcd", "abcd"), abcdabcdabcd, 'Test 72');
test(shortestCommonSupersequence("abcdabcdabcd", "dcbaabcdabcd"), dcabcdaabcdabcd, 'Test 73');
test(shortestCommonSupersequence("abcdexyz", "yzabcd"), yzabcdexyz, 'Test 74');
test(shortestCommonSupersequence("repeatedcharactersin", "charactersinrepeated"), repeatedcharactersinrepeated, 'Test 75');
test(shortestCommonSupersequence("abcdefgh", "hgfedcba"), hgfedcbabcdefgh, 'Test 76');
test(shortestCommonSupersequence("repeatedcharacters", "charactersrepeated"), repeatedcharactersrepeated, 'Test 77');
test(shortestCommonSupersequence("thisisatest", "atestisthis"), atehistisathiest, 'Test 78');
test(shortestCommonSupersequence("shortest", "subsequence"), subshortequencest, 'Test 79');
test(shortestCommonSupersequence("aaaaabbbbb", "bbbbbbaaaa"), aaaaabbbbbbaaaa, 'Test 80');
test(shortestCommonSupersequence("abcabcabc", "cbacbacba"), cbacbacabcabc, 'Test 81');
test(shortestCommonSupersequence("interview", "interstellar"), interstviellarw, 'Test 82');
test(shortestCommonSupersequence("abcdexyz", "xyzabcd"), xyzabcdexyz, 'Test 83');
test(shortestCommonSupersequence("longest", "longshort"), longeshort, 'Test 84');
test(shortestCommonSupersequence("aaaaabbbb", "bbbaaaaa"), bbbaaaaabbbb, 'Test 85');
test(shortestCommonSupersequence("abcd", "dcba"), dcbabcd, 'Test 86');
test(shortestCommonSupersequence("abcdexyz", "xyzabcdexyz"), xyzabcdexyz, 'Test 87');
test(shortestCommonSupersequence("aaaaaaaaaa", "bbbbbbbbbb"), bbbbbbbbbbaaaaaaaaaa, 'Test 88');
test(shortestCommonSupersequence("abcd", "efghijklmnopqrstuvwxyz"), efghijklmnopqrstuvwxyzabcd, 'Test 89');
test(shortestCommonSupersequence("abcdefghijk", "jihgfedcba"), jihgfedcbabcdefghijk, 'Test 90');
test(shortestCommonSupersequence("aabbcc", "abcabc"), abcabbcc, 'Test 91');
test(shortestCommonSupersequence("abcabcabc", "bcabcabc"), abcabcabc, 'Test 92');
test(shortestCommonSupersequence("intersection", "interstellar"), interstellarction, 'Test 93');
test(shortestCommonSupersequence("abcdabcdabcd", "abcdabcdabcdabcd"), abcdabcdabcdabcd, 'Test 94');
test(shortestCommonSupersequence("abcdeffedcba", "defgfedcba"), abcdefgfedcba, 'Test 95');
test(shortestCommonSupersequence("supercalifragilisticexpialidocious", "supercalifragilisticexpialidocious"), supercalifragilisticexpialidocious, 'Test 96');
test(shortestCommonSupersequence("dynamic", "program"), progrdynamic, 'Test 97');
test(shortestCommonSupersequence("interview", "terviewin"), interviewin, 'Test 98');
test(shortestCommonSupersequence("longerstring", "short"), shlongerstring, 'Test 99');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

