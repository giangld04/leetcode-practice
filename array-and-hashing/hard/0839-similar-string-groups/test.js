// Test: 839. Similar String Groups
// 62 test cases from LeetCodeDataset
// Run: node test.js

const { numSimilarGroups } = require("./solution");

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

console.log("\n839. Similar String Groups\n");

test(numSimilarGroups(["abc","bca","cab","cba","bac","acb"]), 1, 'Test 1');
test(numSimilarGroups(["ab","ba","abc","cab","bca"]), 1, 'Test 2');
test(numSimilarGroups(["aaaaa","aaabb","aaabc","aaaba","aaaaa"]), 1, 'Test 3');
test(numSimilarGroups(["tars","rats","arts","star"]), 2, 'Test 4');
test(numSimilarGroups(["abcd","abdc","acbd","acdb","adbc","adcb","bacd","badc","bcad","bcda","bdac","bdca","cabd","cadb","cbad","cbda","cdab","cdba","dabc","dacb","dbac","dbca","dcab","dcba"]), 1, 'Test 5');
test(numSimilarGroups(["abc","bca","cab","cba","acb","bac"]), 1, 'Test 6');
test(numSimilarGroups(["abcde","edcba","abced","decba","decab"]), 2, 'Test 7');
test(numSimilarGroups(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yzw"]), 9, 'Test 8');
test(numSimilarGroups(["omv","ovm"]), 1, 'Test 9');
test(numSimilarGroups(["kite","peek","pink","pite","side","like","pipe","pike","lipk","kite","tape","pelt","pite","pink","pite"]), 1, 'Test 10');
test(numSimilarGroups(["aaa","aab","aba","baa","abb","bba","bab","bba","bbb","bbb"]), 1, 'Test 11');
test(numSimilarGroups(["aaaaaa","aaaabb","aaaabc","aaaaba","aaaaaa"]), 1, 'Test 12');
test(numSimilarGroups(["abc","bca","cab","acb","bac","cba"]), 1, 'Test 13');
test(numSimilarGroups(["abcdef","bcdefa","cdefab","defabc","efabcd","fabcde"]), 6, 'Test 14');
test(numSimilarGroups(["abcde","edcba","abced","deabc","decab","cdeab"]), 5, 'Test 15');
test(numSimilarGroups(["abc","acb","bac","bca","cab","cba"]), 1, 'Test 16');
test(numSimilarGroups(["a","a","a","a","a"]), 1, 'Test 17');
test(numSimilarGroups(["abcdefghijklmnopqrstuvwxyz","bcadefghijklmnopqrstuvwxyza","cdefghijklmnopqrstuvwxyzab"]), 3, 'Test 18');
test(numSimilarGroups(["aaaa","aada","aadaa","aadda","aaddd","adaaa","adaad","adaad","addaa","adada","adada","addaa","daaaa","daada","daada","dadaa","dadad","daada","dadaa","dadad","daada","ddaaa","ddada","ddaad","ddada","dddda"]), 1, 'Test 19');
test(numSimilarGroups(["zzzzzzzzzz","zzzzzzzzzy","zzzzzzzzzx","zzzzzzzzzw","zzzzzzzzzv","zzzzzzzzzu","zzzzzzzzzt","zzzzzzzzzs","zzzzzzzzzr","zzzzzzzzzq"]), 1, 'Test 20');
test(numSimilarGroups(["mnopqr","nopqmr","opqmnr","pqomnr","qpomnr","mnopqr","mnopqr","mnopqr","mnopqr","mnopqr","mnopqr","mnopqr","mnopqr","mnopqr","mnopqr","mnopqr","mnopqr","mnopqr","mnopqr","mnopqr"]), 3, 'Test 21');
test(numSimilarGroups(["abcde","edcba","abced","decba","decab","abcde","edcba","abced","decba","decab"]), 2, 'Test 22');
test(numSimilarGroups(["abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij"]), 1, 'Test 23');
test(numSimilarGroups(["abcdefgh","bcdefgha","cdefghab","defghabc","efghabcd","fghabcde","ghabcdef","habcdefg"]), 8, 'Test 24');
test(numSimilarGroups(["zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz","zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz","zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz","zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz","zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz","zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz","zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz","zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz","zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"]), 1, 'Test 25');
test(numSimilarGroups(["abcdeabcde","edcbaedcba","abcedabced","decbaedcba","decabdecab","abcdeabced","abcdeabcdx"]), 3, 'Test 26');
test(numSimilarGroups(["abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik","abcdefghik"]), 1, 'Test 27');
test(numSimilarGroups(["aabbcc","ccaabb","bbaacc","aabbbc","bcaabb","abcabc","babcac","cabcab","bacbac","acbacb","acbbac","abacbc","cababc","cbaabc","acabbc","bcabac","abcbac","cabbac","bcacab","acbbca"]), 1, 'Test 28');
test(numSimilarGroups(["qwertyuiop","qeywrtuiop","qwrtypuioe","qwertyuiop","qwertyuipo"]), 3, 'Test 29');
test(numSimilarGroups(["abcabcabcabc","cbacbacbacba","bacbacbacbac","abcabcabcacb","cbacbacbacac","bacbacbacabc","abcabcabcaba","cbacbacbacad","bacbacbacaba","abcabcabcaca","cbacbacbacad","bacbacbacaca","abcabcabacba","cbacbacbacba","bacbacbacacb","abcabcabcabc","cbacbacbacac","bacbacbacabc"]), 3, 'Test 30');
test(numSimilarGroups(["abacabad","babadaba","bacabada","acabadab","adabacab","cabadaba","abadabac","badabaca"]), 4, 'Test 31');
test(numSimilarGroups(["abcdefghij","abcdefghji","abcdefghif","abcdefghig","abcdefghih"]), 1, 'Test 32');
test(numSimilarGroups(["abcdefghij","abcdefghik","abcdefghil","abcdefghim","abcdefghin","abcdefghio"]), 1, 'Test 33');
test(numSimilarGroups(["xyzzxy","zyxzyx","zzzyxy","zyzzxz","xyzzzx","zyxzyy","zyzzxy","zyzzxy"]), 1, 'Test 34');
test(numSimilarGroups(["abcdefg","gfedcba","fedcbag","gabcdef","bacdefg","gfeabcd","bcdefga","gfabcde","gefedcb","defgabc","gdefcab","fgedcba","gfabced","gfadebc","gbafced","gfacedb","gfebacd","gfbaced","gfbcdea","gfbedac","gfeadcb","gfecdba","gfdbeca","gfdecba"]), 13, 'Test 35');
test(numSimilarGroups(["abcdefghij","abcdefghik","abcdefghil","abcdefghim","abcdefghin"]), 1, 'Test 36');
test(numSimilarGroups(["abcdefgh","abcdefgh","bcdefgha","cdefghab","defghabc","efghabcd","fghabcde","ghabcdef","habcdefg","abcdefgha","abcdefghb","abcdefghc","abcdefghd","abcdefghi","abcdefghj"]), 8, 'Test 37');
test(numSimilarGroups(["abcdefgh","abcdefgh","aefghbcd","bcdefgha","ghabcdef","hgfedcba","abcdefgh"]), 5, 'Test 38');
test(numSimilarGroups(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","yxwvutsrqponmlkjihgfedcba","xwvutsrqponmlkjihgfedcba","wvutsrqponmlkjihgfedcba","vutsrqponmlkjihgfedcba","utsrqponmlkjihgfedcba","tsrqponmlkjihgfedcba","srqponmlkjihgfedcba","rqponmlkjihgfedcba","qponmlkjihgfedcba","ponmlkjihgfedcba","onmlkjihgfedcba","nmlkjihgfedcba","mlkjihgfedcba","lkjihgfedcba","kjihgfedcba","jihgfedcba","ihgfedcba","hgfedcba","gfedcba","fedcba","edcba","dcba","cba","ba","a"]), Error: string index out of range, 'Test 39');
test(numSimilarGroups(["xyzxyz","yzxyxz","zxyxyz","xyxzyz","yxzxzy","zxzyxy","xzyzxy","zyxzyx"]), 6, 'Test 40');
test(numSimilarGroups(["abcde","abced","abdec","abdec","abced","abcde","abced","abdec","abced","abcde","abced","abdec","abced","abcde","abced","abdec","abced","abcde"]), 1, 'Test 41');
test(numSimilarGroups(["abcdefghijabcdefghij","jihgfedcbaijhg","abcdefghijabcdefghij","ijhgfedcbaigjh","abcdefghijabcdefghij","jihgfedcbajihg","abcdefghijabcdefghij","ijhgfedcbajigh","abcdefghijabcdefghij","jihgfedcbaighj","abcdefghijabcdefghij","ijhgfedcbahijg","abcdefghijabcdefghij","jihgfedcbahigh","abcdefghijabcdefghij","ijhgfedcbahgij"]), Error: string index out of range, 'Test 42');
test(numSimilarGroups(["abcdefghij","jihgfedcba","abcdefghij","abcdefghik","abcdefghil","abcdefghij","abcdefghim","abcdefghij","abcdefghin","abcdefghio"]), 2, 'Test 43');
test(numSimilarGroups(["abcdef","fedcba","abfced","decbae","decabe","dacebf","edcba","fedcb","efdcba","abcdeg","bcadef","cdefab","defabc","efabcd","fabcde","abcdef","fedcba","abfced","decbae","decabe","dacebf","edcba","fedcb","efdcba","abcdeg","bcadef","cdefab","defabc","efabcd","fabcde"]), Error: string index out of range, 'Test 44');
test(numSimilarGroups(["abcdefg","bacdefg","cbadefg","dcabefg","edcabfg","fedcabc","gfedcab","hgfedca"]), 6, 'Test 45');
test(numSimilarGroups(["abcdefghij","bacdefghij","cabdefghij","abcdfehgij","abcdefghij","abcdefghik","abcdefghji"]), 2, 'Test 46');
test(numSimilarGroups(["abcd","dcba","cdab","bacd","cabd","acdb","adcb","bcda","cdba","bdca","dacb","cadb","bdac","abcd","dcba","cdab","bacd","cabd","acdb","adcb","bcda","cdba","bdca","dacb","cadb","bdac"]), 1, 'Test 47');
test(numSimilarGroups(["abc","acb","bac","bca","cab","cba","abc","acb","bac","bca","cab","cba","abc","acb","bac","bca","cab","cba","abc","acb","bac","bca","cab","cba","abc","acb","bac","bca","cab","cba","abc","acb","bac","bca","cab","cba"]), 1, 'Test 48');
test(numSimilarGroups(["aaaaabbbbb","aaaabbbbba","aaabbbbaaa","aabbbbaaaa","abbbbaaaaa","baaaaabbbb","baaaaabbbb","bbbbbaaaaa","bbbbbaaaab","bbbbbaaabb","bbbbbaabba","bbbbbaabbb","bbbbabbbbb","bbbbbaabaa","bbbbaabbbb","bbaaaaabbb","bbaaaabbbb","bbaaabbbbb","bbbaaaaabb","bbbaaaabbb","bbbaaabbbb","bbbbaaaabb","bbbbaaabbb","bbbbaabbbb","bbbbbaaaab","bbbbbaaabbb","bbbbbaabbb","bbbbabbbba","bbbbabbaaa","bbbbbaabaa","bbbbbaaabb","bbbbaaaaaa","bbbbaaaaba","bbbbaaabaa","bbbbaaabab","bbbbaaabra","bbbbbaaaaa","bbbbbaaaab","bbbbbaaaba","bbbbbaabaa","bbbbbaaabb"]), 1, 'Test 49');
test(numSimilarGroups(["abcd","acbd","adbc","cabd","dbca","dcba","dcab"]), 1, 'Test 50');
test(numSimilarGroups(["abababab","babababa","aabbaabb","bbaabbaa","abbaabba","baabbaab","abbaabba","baabbaab","bbaabbaa","aabbaabb","babababa","abababab"]), 6, 'Test 51');
test(numSimilarGroups(["abcdefghij","ihgfedcba","jihgfedcba","abcdefghij","abcdefghik"]), Error: string index out of range, 'Test 52');
test(numSimilarGroups(["lkjhgfedcba","lkjhgfedcba","lkjhgfedcba","lkjhgfedcba","lkjhgfedcba"]), 1, 'Test 53');
test(numSimilarGroups(["abcde","edcba","dbeca","decba","decab","cedab","aebcd","bcdea","debac","baced","acebd","bdeca","acdeb","bacde","abced","decba","edabc","abcde","acbde","baced","bcaed"]), 5, 'Test 54');
test(numSimilarGroups(["qwertyuiop","wertyuiopq","ertyuiopqw","rtyuiopqwe","tyuiopqrst","yuiopqrstu","uiopqrstuv","iopqrstuvw","opqrstuvwx","pqrstuvwxy","qrstuvwxyz","rstuvwxyzp","stuvwxyzpr","tuvwxyzprs","uvwxyzprst","vwxyzprstq","wxyzprstqu","xyzprstquv","yzprstquvx","zprstquvxy","prstquvxyz","rstquvxyza","stquvxyzab","tquvxyzabc","quvxyzabcd","uvxyzabcde","vxyzabcdef","xyzabcdefg","yzabcdefgq","zabcdefgqr","abcdefgqrs","bcdefgqrst","cdefgqrstu","defgqrstuv","efgqrstuvw","fgqrstuvwxyz","gqrstuvwxyzx","hqrstuvwxyzx","qrstuvwxyzxy","rstuvwxyzxyq","stuvwxyzxyqp","tuvwxyzxyqpr","uvwxyzxyqprs","vwxyzxyqprst","wxyzxyqprstu","xyzxyqprstuv","yzxyqprstuvw","zxyqprstuvwx","xyqprstuvwxy","yqprstuvwxyz","qprstuvwxyzx","prstuvwxyzxy","rstuvwxyzxyz","stuvwxyzxyza","tuvwxyzxyqza"]), 44, 'Test 55');
test(numSimilarGroups(["abcdefg","gfedcba","bacdefg","abcdefg","gfedcbx","abcdefg","gfedcbw"]), 2, 'Test 56');
test(numSimilarGroups(["aabbccddeeff","ffeeddccbaaa","aabbccddeeff","ffeeddccbaaa","aabbccddeeff","ffeeddccbaaa","aabbccddeeff","ffeeddccbaaa","aabbccddeeff","ffeeddccbaaa","aabbccddeeff","ffeeddccbaaa","aabbccddeeff","ffeeddccbaaa","aabbccddeeff","ffeeddccbaaa","aabbccddeeff","ffeeddccbaaa","aabbccddeeff","ffeeddccbaaa","aabbccddeeff","ffeeddccbaaa","aabbccddeeff","ffeeddccbaaa","aabbccddeeff","ffeeddccbaaa","aabbccddeeff","ffeeddccbaaa","aabbccddeeff","ffeeddccbaaa"]), 2, 'Test 57');
test(numSimilarGroups(["ababab","bababa","bbaaab","aababb","ababba","abbaab","aabbab","ababab","aabbaa"]), 1, 'Test 58');
test(numSimilarGroups(["abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz","bcadefghijklmnopqrstuvwxyzabcdefg","cdefghijklmnopqrstuvwxyzabcdefghi","defghijklmnopqrstuvwxyzabcdefghij","efghijklmnopqrstuvwxyzabcdefghijk"]), Error: string index out of range, 'Test 59');
test(numSimilarGroups(["aaaaaaaa","aaaaabaa","aaaabaab","aaabaaba","aabaaaba","abaabaaa","baaaaaab","baaabaaa","baabaaab","babaaaaa","abaaaaab","abaaabaa","abaabaab","baabaaba","aabaaaba","aaabaaba","baaabaaa","baaaaaab","abaaaaab","baaaabaa","aabaaaba","abaabaab","baabaaba","aabaaaba","baaaabaa","baaaaaab","abaaaaab","abaabaab","baabaaba","aabaaaba","baaaabaa","baaaaaab","abaaaaab","abaabaab","baabaaba","aabaaaba","baaaabaa","baaaaaab","abaaaaab"]), 1, 'Test 60');
test(numSimilarGroups(["abcdefghij","jihgfedcba","abcdefghij","ijhgfedcba","abcdefghij","jihgfedcba","abcdefghij","ijhgfedcba"]), 2, 'Test 61');
test(numSimilarGroups(["abacax","aacxab","abacax","bacaxa","cacxab","abcaxa"]), 3, 'Test 62');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

