// Test: 893. Groups Of Special Equivalent Strings
// 81 test cases from LeetCodeDataset
// Run: node test.js

const { numSpecialEquivGroups } = require("./solution");

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

console.log("\n893. Groups Of Special Equivalent Strings\n");

test(numSpecialEquivGroups(["abcd","abdc","cdab","cdba","dcba","bacd"]), 4, 'Test 1');
test(numSpecialEquivGroups(["abcd","abdc","cdab","cdba"]), 3, 'Test 2');
test(numSpecialEquivGroups(["abc","def","ghi","jkl","mno","pqr"]), 6, 'Test 3');
test(numSpecialEquivGroups(["aabb","bbaa","abab","baba","abba","baab"]), 3, 'Test 4');
test(numSpecialEquivGroups(["aabb","abab","baba","bbaa","abba","baab"]), 3, 'Test 5');
test(numSpecialEquivGroups(["abcde","edcba","acebd","decab","bdeca","cabed"]), 4, 'Test 6');
test(numSpecialEquivGroups(["abc","acb","bac","bca","cab","cba"]), 3, 'Test 7');
test(numSpecialEquivGroups(["abcde","abced","adcbe","aebcd","eabcd","ebacd"]), 5, 'Test 8');
test(numSpecialEquivGroups(["aabb","bbaa","abab","baba","aaaa","bbbb"]), 5, 'Test 9');
test(numSpecialEquivGroups(["abcd","cdab","cbad","xyzz","zzxy","zzyx"]), 3, 'Test 10');
test(numSpecialEquivGroups(["abcde","edcba","abced","decba"]), 2, 'Test 11');
test(numSpecialEquivGroups(["aabb","bbaa","abab","baba"]), 3, 'Test 12');
test(numSpecialEquivGroups(["mnopqr","nopqr","opqr","pqr","qr","r","mnopqrs","nopqrs","opqrs","pqr","qr","r","mnopqrst","nopqrst","opqrst","pqrst","qrst","rst","st","t"]), 17, 'Test 13');
test(numSpecialEquivGroups(["abcdeabcde","cdeabcdeab","deabcdeabc","eabcdeabcd","abcdecdeab","bacdecdeba","cabdecdeab","cbadecdeba","abcdefedcb","fedcbaedcb","gfedcbedcb","bacdefedcb","defabcdecb","cabfedecba","cbafedecba","dcbaefdcba","efabcdecba","fedcbaecba","gfedcbedcb","bacdefecba"]), 12, 'Test 14');
test(numSpecialEquivGroups(["abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij"]), 1, 'Test 15');
test(numSpecialEquivGroups(["xxyyzz","yyzzxx","zzxxyy","yxzyxz","yzyxzx","zyzyyx","zyxzyx","xyzzyx"]), 3, 'Test 16');
test(numSpecialEquivGroups(["aabbcc","bbaacc","ccabba","aabbcc","bbaacc","ccabba","aabbcc","bbaacc"]), 1, 'Test 17');
test(numSpecialEquivGroups(["aabbcc","bbaacc","ababcc","babcac","cabcab","acbacb"]), 3, 'Test 18');
test(numSpecialEquivGroups(["zzzzzzzzzz","zzzzzzzzzz","zzzzzzzzzz","zzzzzzzzzz","zzzzzzzzzz","zzzzzzzzzz"]), 1, 'Test 19');
test(numSpecialEquivGroups(["abcdef","bacdef","decfab","fedcba","fedbac","defacb"]), 6, 'Test 20');
test(numSpecialEquivGroups(["aabbccddeeff","bbaaccddeeff","aacbbddeeff","ddffeeaabbbc","effeeddabbcc","bbccddfeea","ccddeeffaabb","effddcbaabbb"]), 6, 'Test 21');
test(numSpecialEquivGroups(["abcdefg","gfedcba","bdfhace","fhdbaec","acegfb","bfhacd","fhbdcae","gacfbde"]), 7, 'Test 22');
test(numSpecialEquivGroups(["xyzzxy","zzxyxy","zxyzyx","xyzyzx","zyxzyx","yxzyxz","zyxzyx","zxzyzx"]), 5, 'Test 23');
test(numSpecialEquivGroups(["xyxzyxzyx","yxzyxzyxy","xzyxzyxzy","zyxzyxzyx","yxyxzyxzy","xyzzyxzyx"]), 4, 'Test 24');
test(numSpecialEquivGroups(["aabbcc","bbaacc","abacbc","babcac","aabbccdd","ddccbb","abcdabcd","cdabcdab","abcdabdc","abcdabcd","abcdabcd","abcdabcd","abcdabcd","abcdabcd","abcdabcd","abcdabcd","abcdabcd","abcdabcd","abcdabcd","abcdabcd"]), 7, 'Test 25');
test(numSpecialEquivGroups(["abcdefghij","abcdefghji","jihgfedcba","ihgfedcbaj","jihgfedabc","abcdefghij","cbadefghij"]), 3, 'Test 26');
test(numSpecialEquivGroups(["aaaabbbb","bbbaaa","abababab","babaabab","bababaab","abababba"]), 5, 'Test 27');
test(numSpecialEquivGroups(["abcdabcd","cdabcdab","bacdbacd","dcbadabc","badcabcd","dcababcd","abcdadcb"]), 5, 'Test 28');
test(numSpecialEquivGroups(["abcdef","fedcba","gfedcb","bacdef","defabc","cabfed","cbafed","dcbaef","efabcd","fedabc","gfedcb","bacdef","defabc","cabfed","cbafed","dcbaef","efabcd","fedabc","gfedcb","bacdef"]), 5, 'Test 29');
test(numSpecialEquivGroups(["abcdefghij","bacdefghij","cbadefghij","abcdefghij","ijabcdefgh","hgfedcba","abcdefghij","bacdefghij"]), 3, 'Test 30');
test(numSpecialEquivGroups(["aabbcc","bbaaccaabb","ababcc","aabcbcba","ccbaab","bccabaab","abccbaab","baccbaab","aabbccba","bbaabbcc"]), 7, 'Test 31');
test(numSpecialEquivGroups(["abcdabcd","cdabcdab","cbadabcd","xyzzxyzz","zzxyzzxy","zzyxzzyx"]), 3, 'Test 32');
test(numSpecialEquivGroups(["abac","baca","caba","acba","abca","baca","caba","acba"]), 4, 'Test 33');
test(numSpecialEquivGroups(["abcdef","bacdef","cbadef","abcdefg","gfedcba","fedcbag","gfedabc","gfdecba"]), 5, 'Test 34');
test(numSpecialEquivGroups(["abcdefgh","ghfedcba","abcdghfe","bacdefgh","hgfedcba","abcdefgh","ghfedcba","bacdefgh"]), 5, 'Test 35');
test(numSpecialEquivGroups(["aabbcc","bbaacc","abacbc","accabb","abcabc","cbaabc"]), 2, 'Test 36');
test(numSpecialEquivGroups(["mnopqr","qrpmno","pqmron","opmqrn","rnmqpo","nqrpom","mnopqr","qrpmno","pqmron","opmqrn","rnmqpo","nqrpom"]), 6, 'Test 37');
test(numSpecialEquivGroups(["abcdef","acbedf","abefcd","efabcd","cbadef","fedcba"]), 3, 'Test 38');
test(numSpecialEquivGroups(["abcdefghij","jihgfedcba","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij"]), 2, 'Test 39');
test(numSpecialEquivGroups(["abcde","edcba","deabc","cdeab","bcdea","aebcd","abced","bcdea","cdeab","deabc","edcba","abcde"]), 4, 'Test 40');
test(numSpecialEquivGroups(["abcdefg","bacdefg","cbadefg","dcbaefg","edcbafg","fedcgb","gfedcba"]), 4, 'Test 41');
test(numSpecialEquivGroups(["aabbccddeeff","bbaaccddeeff","aacbbddeeff","deeffaabbcc","efdeaabbcc","ccddeeffaabb"]), 4, 'Test 42');
test(numSpecialEquivGroups(["aabbccddeeff","bbaaccddeeff","abbaccddeeff","aabbccceeffd","aabbccddeff","bbaaccddeeff","abbaccddeeff","aabbccceeffd","aabbccddeff","bbaaccddeeff","abbaccddeeff","aabbccceeffd","aabbccddeff","bbaaccddeeff","abbaccddeeff","aabbccceeffd","aabbccddeff","bbaaccddeeff","abbaccddeeff","aabbccceeffd"]), 3, 'Test 43');
test(numSpecialEquivGroups(["abcdef","defabc","bcdefa","efabcd","fabcde","abcdefg","defabce","bcdefag","efabcdg","fabcdeg","abcdefh","defabceg","bcdefagh","efabcdgh","fabcdegh","abcdef","defabc","bcdefa","efabcd","fabcde","abcdefg","defabce","bcdefag","efabcdg","fabcdeg","abcdefh","defabceg","bcdefagh","efabcdgh","fabcdegh"]), 9, 'Test 44');
test(numSpecialEquivGroups(["abcdef","fedcba","bdfeca","fdbeca","acefbd","bfecad","fdbeca","gacfbde","abcdefg","gfedcba","bdfhace","fhdbaec","acegfb","bfhacd","fhbdcae","gacfbde","mnopqr","qrpmno","pqmron","opmqrn","rnmqpo","nqrpom","mnopqr","qrpmno","pqmron","opmqrn","rnmqpo","nqrpom"]), 17, 'Test 45');
test(numSpecialEquivGroups(["aabbccddeeff","bbaaddccffee","aacccbbbddffee","ddffeeaaabbbcc","bbccddaaffee","ffeeddaabbcc","ccddeeffaabbbb","ddeeffaacccbbbbb"]), 5, 'Test 46');
test(numSpecialEquivGroups(["abcabc","bacbac","cababc","abcbac","baccab","acbacb","acbbac","bacbac"]), 4, 'Test 47');
test(numSpecialEquivGroups(["abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh"]), 1, 'Test 48');
test(numSpecialEquivGroups(["pqrstuvw","qrstuvwp","rstuvwqp","stuvwqpr","tuvwqprs","uvwqprst","vwqprstu","wqprstuv","qprstuvw","prstuvqw","rstuvqwp","stuvqprw","tuvqprws","uvqprwst","vqprwstu","qprwstuv"]), 8, 'Test 49');
test(numSpecialEquivGroups(["mnopqr","opqrmn","pqrmon","qrmpno","rmpnoq","mpnoqr","nqrmpo","qrpmno"]), 5, 'Test 50');
test(numSpecialEquivGroups(["abcdef","defabc","bcadef","fedcba","defacb","efabcd"]), 4, 'Test 51');
test(numSpecialEquivGroups(["abcdef","fedcba","efabcd","cdefab","bacdef","defabc","fabcde","abcdefg","gfedcba","zzzzzz","zzzzzz","zzzzzz","zzzzzz","zzzzzz","zzzzzz","zzzzzz","zzzzzz","zzzzzz","zzzzzz","zzzzzz"]), 5, 'Test 52');
test(numSpecialEquivGroups(["abcdefgh","efghabcd","hgfedcba","cdabefgh","bacdefgh","cbadefgh","fedcbaab","ghfedcba","abcdabef","efghabcdab"]), 7, 'Test 53');
test(numSpecialEquivGroups(["abcdefg","gfedcba","cdabefg","efgabcd","fedcbag","bacdefg"]), 4, 'Test 54');
test(numSpecialEquivGroups(["abcdefghijk","abcdefghijk","abcdefghijk","abcdefghijk","abcdefghijk","abcdefghijk"]), 1, 'Test 55');
test(numSpecialEquivGroups(["abcdefg","gfedcba","cebgfad","bacdfeg","adgfceb","fdgecab"]), 4, 'Test 56');
test(numSpecialEquivGroups(["aaabbbccc","bbbaaaccc","aabbccabb","bbccaaabb","ccbbbaaab","aabbbccc","bbbaaaccc","aabbccabb"]), 5, 'Test 57');
test(numSpecialEquivGroups(["xyzxyz","zyxzyx","yzxyzx","xzyzxz","zyxzxy","zxyxzy"]), 4, 'Test 58');
test(numSpecialEquivGroups(["aabbccdd","bbaaddcc","ababcdcd","babcadcd","cbadcbad","dcbadabc","abcdabcd","badcabcd"]), 4, 'Test 59');
test(numSpecialEquivGroups(["abcdabcd","cdabcdab","bacdbacd","abcdcdab","cdababcd","bacdabcd","abcdabcd","cdabcdab"]), 3, 'Test 60');
test(numSpecialEquivGroups(["zzzzzzzz","zzzzzzzz","zzzzzzzz","zzzzzzzz","zzzzzzzz","zzzzzzzz"]), 1, 'Test 61');
test(numSpecialEquivGroups(["abcdefgh","bacdefgh","decfghab","fedghabc","fedcbagh","defghacb","gfedcbah","hgfedcba"]), 6, 'Test 62');
test(numSpecialEquivGroups(["aabbccddeeff","bbaaddeeccff","ababcdcdefef","babaabcdcdef","ccddeeffabcd","ddaabbccdefe","abcdccddeeff","ccddeeffaabb","bbccddeeffaa","aabbddeeffcc","fedcbafedcba","defcbafedcba","efcbadfedcba","cdefbafedcba","bacdefedcba","abcdefedcba","fedcbadefcba","defcbadefcba","efcbadfedcba","cdefbafedcba","bacdefedcba","abcdebcdfa","defcbedabcfa","efcbadefabcf","cdefbafedabcf","bacdefedabcf","abcdebcfabcf"]), 14, 'Test 63');
test(numSpecialEquivGroups(["abcdefgh","hgfedcba","efghabcd","cdefghab","bacdefgh","defghcab","fghabcde","ghabcdef","habcdefg","abcdefghg","gfedcbaa","efghabcd","cdefghab","bacdefgh","defghcab","fghabcde","ghabcdef","habcdefg","abcdefghh","gfedcbab"]), 8, 'Test 64');
test(numSpecialEquivGroups(["abcdefghij","jihgfedcba","bacdefghij","jihgfedcba","bacdefghij","jihgfedcba"]), 3, 'Test 65');
test(numSpecialEquivGroups(["abcdefghij","jihgfedcba","bdfhjacegi","fhjdgbacae","acegfbidhj","bfhacdijeg","fhbdcaejg","gacfbdehji"]), 8, 'Test 66');
test(numSpecialEquivGroups(["aabbcc","bbaacc","abacbc","cababc","acbacb","bcabac","cabcab","abcabc"]), 3, 'Test 67');
test(numSpecialEquivGroups(["aabbccdd","bbaaddcc","ababcdcd","babaabcd","ccddabcd","ddaabbcc","abcdccdd","ccddabba","bbccddaa","aabbddcc"]), 4, 'Test 68');
test(numSpecialEquivGroups(["abcdefgh","bacdefgh","cbadefgh","abcdfehg","gfedcba","hgfedcba","abcdefgh","bacdefgh"]), 5, 'Test 69');
test(numSpecialEquivGroups(["aabbccddeeff","bbaacceeddff","aabcbceddeff","aabbccddfeef","bbaacceeddff","aabcbceddeff","aabbccddeeff","bbaacceeddff"]), 2, 'Test 70');
test(numSpecialEquivGroups(["abcdefgh","acegbdfh","agbfcehd","hgfedcba","efghabcd","ceafghbd"]), 5, 'Test 71');
test(numSpecialEquivGroups(["aabbccddeeff","ffeeddccbbaa","bbaaccddffee","ffeeddccbbaa","aabbccddeeff","ffeeddccbbaa"]), 1, 'Test 72');
test(numSpecialEquivGroups(["zzzzzz","zzzzzz","zzzzzz","zzzzzz","zzzzzz","zzzzzz"]), 1, 'Test 73');
test(numSpecialEquivGroups(["abcdef","bacdef","cbadef","defabc","fedcba","efdcba","fabced"]), 5, 'Test 74');
test(numSpecialEquivGroups(["abcdefgh","bacdefgh","cbadefgh","defghabc","fedcbagh","efdcgbah","gahfedcb","hgfedcba"]), 6, 'Test 75');
test(numSpecialEquivGroups(["aabbccddeeff","bbaaccddeeff","ababccddeeff","bbacacddeeff","aabbccddeeff","aabbcdeeffcc","aaabbbcccddd"]), 5, 'Test 76');
test(numSpecialEquivGroups(["xyzxyz","yzxzyx","zxyxyz","xyzyxz","yzxyzx","zxyzxy","xyzxzy","yzzxyx","zyxxyz","xzyzyx"]), 5, 'Test 77');
test(numSpecialEquivGroups(["xyzabc","yzxcba","zxcbya","zyxcba","yxzabc","yxzcba","zxycba"]), 4, 'Test 78');
test(numSpecialEquivGroups(["abcdefg","gfedcba","bacdefg","gfedcba","bacdefg","gfedcba"]), 2, 'Test 79');
test(numSpecialEquivGroups(["ababab","bababa","ababab","bababa","ababab","bababa","ababab","bababa","ababab","bababa","ababab","bababa"]), 2, 'Test 80');
test(numSpecialEquivGroups(["mnopqr","mopnqr","mpnoqr","mnopqr","pmonqr","pmqnor","npoqmr","qmonpr"]), 5, 'Test 81');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

