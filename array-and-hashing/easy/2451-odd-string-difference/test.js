// Test: 2451. Odd String Difference
// 85 test cases from LeetCodeDataset
// Run: node test.js

const { oddString } = require("./solution");

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

console.log("\n2451. Odd String Difference\n");

test(oddString(["adc","wzy","abc"]), abc, 'Test 1');
test(oddString(["zzz","zyx","zwy","zvx"]), zzz, 'Test 2');
test(oddString(["xyz","abc","uvw","uvw"]), null, 'Test 3');
test(oddString(["zzz","zyz","zxz","wyz"]), zzz, 'Test 4');
test(oddString(["aaa","bob","ccc","ddd"]), bob, 'Test 5');
test(oddString(["aab","aac","aad","abe"]), aab, 'Test 6');
test(oddString(["xyz","abc","uvw","aaa"]), aaa, 'Test 7');
test(oddString(["aaa","aaa","aab","aaa"]), aab, 'Test 8');
test(oddString(["zzz","aaa","zzz","aaa","zzz","aab"]), aab, 'Test 9');
test(oddString(["xyz","uvw","rst","qpo"]), qpo, 'Test 10');
test(oddString(["aab","aac","aba","aaa"]), aab, 'Test 11');
test(oddString(["qrs","rst","stu","tuv","uvw","vwx","wxy","xyz","yza","zab","cba","bac"]), yza, 'Test 12');
test(oddString(["qrst","qrsu","rstv","rstw"]), qrst, 'Test 13');
test(oddString(["qrst","qrst","qrst","qrsu","qrst"]), qrsu, 'Test 14');
test(oddString(["abc","bcd","cde","ade"]), ade, 'Test 15');
test(oddString(["aab","aac","aba","aaa","aab","aac","aba","aac","aba","aab","aac","aba","aac","aba","aac","aba","aac","aba","aac","aba","aac","aba","aac","aba","aac","aba","aac","aba","aac","aba","aac","aba"]), aaa, 'Test 16');
test(oddString(["abc","bcd","cde","xyz"]), null, 'Test 17');
test(oddString(["abc","bcd","cde","bce"]), bce, 'Test 18');
test(oddString(["qrs","rst","stu","tuv","uvw","vwx","wxy","xyz","yza"]), yza, 'Test 19');
test(oddString(["abc","bde","cef","dfg","efh","fij","gjk","hkl","ilm","jmn","kno","lop","mqr","nrs","ots","puv","qvw","rxy","syz","tza","uab","vbc","wcd","xey","yfz","zga"]), abc, 'Test 20');
test(oddString(["jkl","klm","lmn","mno","jklm"]), jklm, 'Test 21');
test(oddString(["mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz","yza","zab","abc","bcd","cde"]), yza, 'Test 22');
test(oddString(["uvw","vwx","wxy","vxz","wyz"]), vxz, 'Test 23');
test(oddString(["xyz","wxy","vwx","uvw","tuv","stu","rst","qrs","pqr","opq","nop","mno","lnm","klj","ijk","hgf","fed","edc","dcb","cba","bca","cab","abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz","yza","zab","bac"]), lnm, 'Test 24');
test(oddString(["pqr","qrs","rst","uvw","vwx","wxy","xyz","xya"]), xya, 'Test 25');
test(oddString(["abcdefg","abcdefh","abcdefi","abcdefj","abcdefg"]), abcdefh, 'Test 26');
test(oddString(["aaa","abb","acc","add","aee","aff","agg","aeh","aei","aej","aek","ael","aem","aen","aeo","aep","aeq","aer","aes","aet","aeu","aev","aew","aex","aey","aez","afa","afb","afc","afd","afe","aff","afg","afh"]), aaa, 'Test 27');
test(oddString(["xyz","xza","ywb","ywa"]), xyz, 'Test 28');
test(oddString(["zzz","zzy","zzx","zzw","zzv"]), zzz, 'Test 29');
test(oddString(["mnop","nqpo","opqr","qrst","rstu","stuv","tuvw","uvwz","vwxy","wxza","xyzb","yzca","zcab","cabc","abcd","bcde","cdef","defg","efgh","fghi","ghij","hijk","ijkl","jklm","klmn","lmno","mnop","nopq","opqr","pqrt","qrst","rstu","stuv","tuvw","uvwz","vwxy","wxza","xyzb","yzca","zcab","cabc","abcd","bcde","cdef","defg","efgh","fghi","ghij","hijk","ijkl","jklm","klmn","lmno"]), nqpo, 'Test 30');
test(oddString(["aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz","bbaacceeddffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz","ccaabbeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz","aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzz"]), aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz, 'Test 31');
test(oddString(["xyz","uvw","vut","tsr"]), null, 'Test 32');
test(oddString(["abc","bcd","cde","def","geh","hif","iji","jik"]), geh, 'Test 33');
test(oddString(["qwert","wertr","ertty","rtyui","tyuio"]), qwert, 'Test 34');
test(oddString(["aaa","aab","aac","aad","zaa"]), aaa, 'Test 35');
test(oddString(["zzzzzzzzzz","zzzzzzzzzz","zzzzzzzzzz","zzzzzzzzza"]), zzzzzzzzza, 'Test 36');
test(oddString(["zzz","zyz","xyx","wxw","vuq","tsr"]), zzz, 'Test 37');
test(oddString(["mnop","mnoq","mnop","mnoo","mnop"]), mnoq, 'Test 38');
test(oddString(["mno","nop","opo","npp","mqq"]), opo, 'Test 39');
test(oddString(["aaa","aba","aca","ada","aea","afa","aga","aha"]), aaa, 'Test 40');
test(oddString(["mnopqr","mnopqs","mnopqt","mnopqu","mnopqv"]), mnopqr, 'Test 41');
test(oddString(["qwe","rft","sgh","tij","ukl","vmo"]), qwe, 'Test 42');
test(oddString(["abcdef","abcefg","abcdgg","abcdef","abcdeg"]), abcefg, 'Test 43');
test(oddString(["abz","bca","cab","bac","acb","baa","aaa","aab"]), abz, 'Test 44');
test(oddString(["abz","bca","cab","abc"]), abz, 'Test 45');
test(oddString(["aaa","aab","aac","aad","aae","aaf","aag","aah","aai","aaj","aak","aal","aam","aan","aao","aap","aaq","aar","aas","aat","aau","aav","aaw","aax","aay","aaz","abb","abc"]), aaa, 'Test 46');
test(oddString(["aab","aac","aab","aac","aab","aac","aad","aac"]), aad, 'Test 47');
test(oddString(["zzz","zyz","zyx","zzx","zyw"]), zzz, 'Test 48');
test(oddString(["uvw","uvx","uwy","uxz"]), uvw, 'Test 49');
test(oddString(["mnop","nqpr","opqs","pqrt"]), mnop, 'Test 50');
test(oddString(["zzzzzzzzzzzzzzzzzzzz","zzzzzzzzzzzzzzzzzzzz","zzzzzzzzzzzzzzzzzzzz","zzzzzzzzzzzzzzzzzzza"]), zzzzzzzzzzzzzzzzzzza, 'Test 51');
test(oddString(["xyz","yza","zab","xba","xza"]), xyz, 'Test 52');
test(oddString(["abc","bcd","cde","def","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz","yza"]), yza, 'Test 53');
test(oddString(["mnop","mnoq","mnop","mnop"]), mnoq, 'Test 54');
test(oddString(["pqr","qrs","rst","qst","qrt"]), qst, 'Test 55');
test(oddString(["aaa","aba","aca","ada","aea"]), aaa, 'Test 56');
test(oddString(["aaa","aab","aba","aca","baa"]), aaa, 'Test 57');
test(oddString(["abcdefghijklmnopqrstuvwxyz","abcdefghijklmnopqrstuvwxyz","abcdefghijklmnopqrstuvwxyz","abcdefghijklmnopqrstuvwxzz"]), abcdefghijklmnopqrstuvwxzz, 'Test 58');
test(oddString(["pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz","yza","zaa","aab","abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz","yza","zaa","aab","abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz","yza","zaa","aab","abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz","yza","zaa","aab","abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz","yza","zaa"]), null, 'Test 59');
test(oddString(["abcdef","bcdefg","cdefgh","defghi","aefghi"]), aefghi, 'Test 60');
test(oddString(["xyz","yza","zab","abc"]), yza, 'Test 61');
test(oddString(["xyz","xwv","xut","xsr"]), xyz, 'Test 62');
test(oddString(["uvw","vwx","wxy","xyz","yza","zab","abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz","yza","zab","aaa","aab","aac","aad","abe","acd"]), aaa, 'Test 63');
test(oddString(["abcdef","bcdefg","cdefgh","defghi","efghij","fghijk","ghijkl","hijklm","ijklmn","jklmno","klmnop","lmnopq","mnopqr","nopqrs","opqrst","pqrstu","qrstuv","rstuvw","stuvwx","tuvwxy","uvwxyx","vwxyxw","wxyxwy","xyxwyx","yxwyxy"]), uvwxyx, 'Test 64');
test(oddString(["aaaab","aaaba","aabaa","abaaa","baaaa"]), aaaab, 'Test 65');
test(oddString(["abcdefghijklmnop","bcdefghijklmno","cdefghijklmnop","dEefghijklmnop","efghijklmnopqr","fghijklmnopqrs","ghijklmnopqrst","hijklmnopqrstu","ijklmnopqrstuv","jklmnopqrstuvw","klmnopqrstuvwx","lmnopqrstuvwxy","mnopqrstuvwxyz"]), abcdefghijklmnop, 'Test 66');
test(oddString(["abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz","yza","zab","aaa","aab","aac","aad","abe"]), yza, 'Test 67');
test(oddString(["zzz","zzy","zyz","yzz","zyx","yxz","xzy","xyz","yxw","xyw","xwy","ywx","wxy","wyz","xzy","xyz","xwy","ywx","wxy","wyz","xzy","xyz","xwy","ywx"]), zzz, 'Test 68');
test(oddString(["mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyx","yzy","zzz","yzy","xyx","vwx","uvw","tuv","stu","qrs","pqr","opq","nop","mno","zyz","zzz"]), zyz, 'Test 69');
test(oddString(["zzz","aaa","aab","aac","aad"]), aab, 'Test 70');
test(oddString(["hello","hero","helq","herl"]), hello, 'Test 71');
test(oddString(["xyz","yza","zab","cab","bcd"]), yza, 'Test 72');
test(oddString(["pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz","yza","zab","aba","bab","bba","aab","aaa","aab","aba","abb","abc"]), yza, 'Test 73');
test(oddString(["zzz","yyy","xxz","xxy"]), xxz, 'Test 74');
test(oddString(["xyz","xza","xya","xwa"]), xyz, 'Test 75');
test(oddString(["ghi","hij","ijk","jkl","gij"]), gij, 'Test 76');
test(oddString(["pqr","qrs","rst","str"]), str, 'Test 77');
test(oddString(["zxy","zyx","yxz","yzy"]), zxy, 'Test 78');
test(oddString(["abcd","abce","abcf","abcd","abcg"]), abce, 'Test 79');
test(oddString(["abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz","yza","zab","cab","bca","abc","bca","cab","bac","acb","baa","aaa","aab","aac","aad","aba","abb","abc","aca","acb","acc"]), yza, 'Test 80');
test(oddString(["apple","applf","applg","applh"]), apple, 'Test 81');
test(oddString(["zzz","yyz","xxz","wwz","vvz","uuz","ttz","ssz","rrz","qqz","ppz","opo","ono","nnm","nml","nkl","nlj","nik","ihj","igh","ifh","ieh","idh","ich","ibh","iah","azg","azy","ayx","axw","avv","auu","att","ass","arr","aqq","app","aoo","ano","aml","akl","ajk","aik","aih","aig","aif","aie","aid","aic","abh","aag","aaf","aae","aad","aac","aab"]), zzz, 'Test 82');
test(oddString(["qwe","rty","uio","pas","qdf"]), qwe, 'Test 83');
test(oddString(["aab","aac","aad","abe","bbf","ccg","ddd"]), aab, 'Test 84');
test(oddString(["aaa","aab","aac","aad","aba","abb","abc","aca","acb","acc","aca","aba","aaa","aab","aac","aad","aba","abb","abc","aca","acb","acc"]), null, 'Test 85');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

