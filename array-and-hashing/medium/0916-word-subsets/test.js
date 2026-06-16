// Test: 916. Word Subsets
// 69 test cases from LeetCodeDataset
// Run: node test.js

const { wordSubsets } = require("./solution");

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

console.log("\n916. Word Subsets\n");

test(wordSubsets(["acaac","cccbb","aacbb","caacc","bcbbb"], ["c","cc","b"]), ['cccbb'], 'Test 1');
test(wordSubsets(["amazon","apple","facebook","google","leetcode"], ["e","o"]), ['facebook', 'google', 'leetcode'], 'Test 2');
test(wordSubsets(["amazon","apple","facebook","google","leetcode"], ["lc","eo"]), ['leetcode'], 'Test 3');
test(wordSubsets(["abcdefg","bcdefga","cdefgab","defgabc","efgabcd","fgabcde","gabcdef"], ["def","efg","fgh","ghi","hij","ijk","jkl"]), [], 'Test 4');
test(wordSubsets(["abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij"], ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa"]), [], 'Test 5');
test(wordSubsets(["hello","world","python","programming"], ["hello","world","helo","rowdl"]), [], 'Test 6');
test(wordSubsets(["aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz","zzzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa"], ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz","zyx","wvu","tsr","qpo","nml","kji","hgf","edc","baa","ccc","bb","aa"]), [], 'Test 7');
test(wordSubsets(["aaaaaa","bbbbbb","cccccc","dddddd","eeeeee"], ["a","b","c","d","e"]), [], 'Test 8');
test(wordSubsets(["aaaaaaaaaa","bbbbbbbbbb","cccccccccc","dddddddddd","eeeeeeeeee"], ["aabbccddeeffgghhii","bbaacceeggiikkooss","ccccdddddddddddddd","eeeeddddccccbbbaaa"]), [], 'Test 9');
test(wordSubsets(["abacax","bacaba","caxaba","axbaca"], ["aba","bac","cab","abc"]), ['abacax', 'bacaba', 'caxaba', 'axbaca'], 'Test 10');
test(wordSubsets(["aabbccddeeff","ffeeddccbb","aabbccddeeff","eeddccbb","bbccdd","ccddeeff","ddeeff","eeff","ff","ffeedd","eeddcc","bbcc","ccdd","ddeeff","ee","ff"], ["abc","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz"]), [], 'Test 11');
test(wordSubsets(["abcd","abdc","cabd","dabc","adbc"], ["aabb","bbcc","ccdd","aabbccdd"]), [], 'Test 12');
test(wordSubsets(["unique","strings","for","testing","purposes"], ["un","iq","st","ri","gs","for","tes","tin","ing","pur","pose"]), [], 'Test 13');
test(wordSubsets(["supercalifragilisticexpialidocious","pseudopseudohypoparathyroidism","floccinaucinihilipilification","antidisestablishmentarianism","honorificabilitudinitatibus"], ["super","pseudo","floccinaucinihilipilification","antidisestablishmentarianism","honorificabilitudinitatibus"]), [], 'Test 14');
test(wordSubsets(["zzzzzzzzzz","yyyyyyyyyy","xxxxxxxxxx","wwwwwwwwww","vvvvvvvvvv"], ["zz","yy","xx","ww","vv"]), [], 'Test 15');
test(wordSubsets(["aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz","zyxwvutsrqponmlkjihgfedcba","bbaacckkddffgghhiijj","mmmnnnoooppqqrrsssttuuvvwwxx","aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"], ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz","abcd","efgh","ijkl","mnop","qrst","uvwx","yzab","cdef","ghij","klmn","opqr","stuv","wxyz","mnopqr","stuvwx","yzabcd","efghij","klmnop","qrstuv","wxyzab","cdefgh","ijklmn","opqrst","vwxyz","abcdefghijklmnop","qrstuvwxyz","mnopqrstuvwx","abcdefg","hijklmn","opqrstu","vwxyzab","cdefghij","klmnopqr","stuvwxyz","abcdefghijklmnopqr","stuvwx","yzabcd","efghij","klmnop","qrstuv","wxyzab","cdefghij","klmnopqr","stuvwxyz","abcdefghijklmnopqr","stuvwx","yzabcd","efghij","klmnop","qrstuv","wxyzab","cdefghij","klmnopqr","stuvwxyz"]), ['aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz', 'zyxwvutsrqponmlkjihgfedcba', 'aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz'], 'Test 16');
test(wordSubsets(["zyxwvutsrqponmlkjihgfedcba","qwertyuiopasdfghjklzxcvbnm","mnbvcxzlkjhgfdsapoiuytrewq"], ["zzz","yyy","xxx","www"]), [], 'Test 17');
test(wordSubsets(["supercalifragilisticexpialidocious","pneumonoultramicroscopicsilicovolcanoconiosis","floccinaucinihilipilification","antidisestablishmentarianism"], ["super","cali","fragilistic","expiali","docious","pneumo","ultra","micro","scopic","silico","volcano","conio","sisi","flocci","nauci","nihili","pipili","anti","dis","establish","ment","aria","nism"]), [], 'Test 18');
test(wordSubsets(["abcdabcdabcd","efefefefef","ghighighighi","jkljkljklj"], ["abcd","ef","ghi","jkl","aabbccdd"]), [], 'Test 19');
test(wordSubsets(["example","samples","problems","challenges","code","interview"], ["e","m","p","l","e","s","a","m","p","l","e","s"]), ['samples'], 'Test 20');
test(wordSubsets(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"], ["xyz","zyx","aaa","zzz","mnopqr"]), [], 'Test 21');
test(wordSubsets(["aaaaa","bbbbbb","cccccc","dddddddd","eeeeeeee"], ["aa","bb","cc","dd","ee","abcd"]), [], 'Test 22');
test(wordSubsets(["programming","coding","debugging","optimization","algorithm"], ["gram","code","debug","algo","opti"]), [], 'Test 23');
test(wordSubsets(["aaaaaaaaaa","bbbbbbbbbb","cccccccccc","dddddddddd","eeeeeeeeee","ffffffffff","gggggggggg","hhhhhhhhhh","iiiiiiiiii","jjjjjjjjjj"], ["a","b","c","d","e","f","g","h","i","j","aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","aaa","bbb","ccc","ddd","eee","fff","ggg","hhh","iii","jjj","aaaa","bbbb","cccc","dddd","eeee","ffff","gggg","hhhh","iiii","jjjj","aaaaa","bbbbb","ccccc","ddddd","eeeee","fffff","ggggg","hhhhh","iiiii","jjjjj"]), [], 'Test 24');
test(wordSubsets(["quick","brown","fox","jumps","over","lazy","dogs"], ["qu","ck","bro","wn","fox","jum","ps","ove","r","laz","y","dog","s"]), [], 'Test 25');
test(wordSubsets(["abacabacab","bacabacaba","cabcabcabc","ababcabcab","bcabcabcab"], ["abac","bcab","cabc","abcabc"]), ['abacabacab', 'bacabacaba', 'cabcabcabc', 'ababcabcab', 'bcabcabcab'], 'Test 26');
test(wordSubsets(["abacabadaba","bacbab","cab","abcabcabcabcabc","bcabcabcabcabcab"], ["ab","ba","abc","cba","bca"]), ['abacabadaba', 'bacbab', 'cab', 'abcabcabcabcabc', 'bcabcabcabcabcab'], 'Test 27');
test(wordSubsets(["internationalization","universality","generalization","specificity"], ["inter","nation","alize"]), ['internationalization', 'generalization'], 'Test 28');
test(wordSubsets(["aabbccddeeffgghhii","bbaacceeggiikkooss","ccccdddddddddddddd","eeeeddddccccbbbaaa"], ["abcdefghi","ijklmnopq","qrstuvwxyz","mnopqrstuvwxyz","vwxyzuvwxy","stuvwxyzstuvwx","rstuvwrstuvw","qrsrtqrsrstq"]), [], 'Test 29');
test(wordSubsets(["abababa","bbbbbbb","acacaca","cacacac","abcabcabc"], ["aab","bb","ac","aaa"]), ['abcabcabc'], 'Test 30');
test(wordSubsets(["xylophone","piano","guitar","drum","violin"], ["x","y","p","i","o"]), [], 'Test 31');
test(wordSubsets(["aaaaaaaaaa","bbbbbbbbbb","cccccccccc","dddddddddd","eeeeeeeeee"], ["abcde","fghij","klmno","pqrst","uvwxy"]), [], 'Test 32');
test(wordSubsets(["xyzz","xyzy","zzxy","zyxz","xzzy"], ["xyz","zz","xy","zyx"]), ['xyzz', 'zzxy', 'zyxz', 'xzzy'], 'Test 33');
test(wordSubsets(["abracadabra","supercalifragilisticexpialidocious","antidisestablishmentarianism","honorificabilitudinitatibus","pneumonoultramicroscopicsilicovolcanoconiosis"], ["abra","supercali","disestablish","honorifica","pneumono","microscopic","silicovolcano","coniosis"]), [], 'Test 34');
test(wordSubsets(["unique","words","arrays","strings","characters"], ["unique","words","strings","chars","arrays"]), [], 'Test 35');
test(wordSubsets(["aabbccddeeff","bbccddeeffgg","ccddeeffgghh","ddeeffgghhiijj","eeffgghhiijjkk"], ["abc","bcd","cde","def","efg"]), [], 'Test 36');
test(wordSubsets(["xenodochial","quisquillious","floccinaucinihilipilification","antidisestablishmentarianism","supercalifragilisticexpialidocious"], ["xeno","dox","chial","qui","squillious","floc","cinau","cinhi","lili","pipili","anti","dis","est","abe","lish","ment","aria","nism","super","cali","fragilistic","expiali","docious"]), [], 'Test 37');
test(wordSubsets(["abcdefghijklmnopqrstuvwxyz","abcdefghijklmnopqrstuvwxyz","abcdefghijklmnopqrstuvwxyz"], ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), ['abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz'], 'Test 38');
test(wordSubsets(["abcdefghijklmnop","bcdefghijklmno","cdefghijklmnop","defghijklmnopq","efghijklmnopqr"], ["abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr"]), [], 'Test 39');
test(wordSubsets(["aabb","ccdd","eefg","hhiijj","kkll","mmnn","oopp","qqrr","sstt","uuvv","wwxx","yyzz"], ["aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz"]), [], 'Test 40');
test(wordSubsets(["supercalifragilisticexpialidocious","antidisestablishmentarianism","honorificabilitudinitatibus","pneumonoultramicroscopicsilicovolcanoconiosis"], ["super","califragilistic","expialidocious","anti","establishment","arianism","honorificabilitudinitatibus","pneumonoultramicroscopicsilicovolcanoconiosis"]), [], 'Test 41');
test(wordSubsets(["abcd","abdc","dabc","cabd","bcad"], ["a","b","c","d","ab","bc","cd","da","ac","bd","dc","ad","ba","cb"]), ['abcd', 'abdc', 'dabc', 'cabd', 'bcad'], 'Test 42');
test(wordSubsets(["hello","world","python","programming","code","challenge"], ["hello","world","python","programming","code","challenge","cpp","java","javascript","ruby","swift","go","rust","typescript","php"]), [], 'Test 43');
test(wordSubsets(["this","is","a","complex","testcase"], ["this","is","a","complex","test","case"]), [], 'Test 44');
test(wordSubsets(["aabb","ccdd","eeff","gghh","iijj","kkll","mmnn","oopp","qqrr","sstt","uuvv","wwxx","yyzz"], ["ab","cd","ef","gh","ij","kl","mn","op","qr","st","uv","wx","yz","aab","ccd","eeff","gghh","iijj","kkll","mmnn","oopp","qqrr","sstt","uuvv","wwxx","yyzz"]), [], 'Test 45');
test(wordSubsets(["universe","galaxy","cosmos","planet","star","nebula"], ["u","v","e","r","s","e"]), ['universe'], 'Test 46');
test(wordSubsets(["zzzzzzzzzz","yyyyyyyyyy","xxxxxxxxxx","wwwwwwwwww","vvvvvvvvvv","uuuuuuuuuu"], ["zzzzz","yyyyy","xxxxx","wwwww","vvvvv","uuuuu"]), [], 'Test 47');
test(wordSubsets(["alphabet","brazil","critical","dynamic","economic"], ["a","b","c","d","e"]), [], 'Test 48');
test(wordSubsets(["mississippi","elephant","alligator","hippopotamus"], ["issi","lpha","gat","popo","tamu","hipo"]), [], 'Test 49');
test(wordSubsets(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"], ["zyxwvutsrqponmlkjihgfedcba","aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"]), ['aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz'], 'Test 50');
test(wordSubsets(["aaaabbbbccccddddeeeeffffgggghhhhiiii","jjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwwxxxxxyyyyyzzzzz"], ["abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz"]), [], 'Test 51');
test(wordSubsets(["abacaxi","manga","naruto","onepiece","dragonball"], ["aba","nan","ope","dra"]), [], 'Test 52');
test(wordSubsets(["abcdefghijk","bcdefghijkl","cdefghijklm","defghijklmn","efghijklmno"], ["abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno"]), [], 'Test 53');
test(wordSubsets(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","example","universal","programming"], ["abc","xyz","mnop","qrst"]), ['abcdefghijklmnopqrstuvwxyz', 'zyxwvutsrqponmlkjihgfedcba'], 'Test 54');
test(wordSubsets(["zebra","elephant","giraffe","hippopotamus","antelope"], ["e","ee","alp","h"]), ['elephant'], 'Test 55');
test(wordSubsets(["aaaaaaaaaa","bbbbbbbbbb","cccccccccc","dddddddddd","eeeeeeeeee"], ["abc","bcd","cde","def","efg"]), [], 'Test 56');
test(wordSubsets(["programming","python","java","csharp","javascript","ruby"], ["pro","gram","ming","py","th","on","java","script","ruby","csharp"]), [], 'Test 57');
test(wordSubsets(["abcdefghijklmnopqrstuvwxyz","zzzzzzzzzz","aaaaaaaaaa","bbbbbbbbbb"], ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), ['abcdefghijklmnopqrstuvwxyz'], 'Test 58');
test(wordSubsets(["this","is","a","test","of","subset","matching"], ["is","a","test","this","of","subset","matching","mm","ss","tt","ee"]), [], 'Test 59');
test(wordSubsets(["mnopqrstuvwxyza","nopqrstuvwxyzb","opqrstuvwxyzc","pqrstuvwxyzd","qrstuvwxyze","rstuvwxyzf","stuvwxy zg","tuvwxyzh","uvwxyzi","vwxyzj","wxyzk","xyzl","yzm","zno","opq","rst","uvw","xyz"], ["mnop","qrst","uvwx","yz","no","pq","rs","tu","vw","xy","z"]), ['mnopqrstuvwxyza'], 'Test 60');
test(wordSubsets(["data","science","machine","learning","artificial"], ["data","art","sci","learn"]), [], 'Test 61');
test(wordSubsets(["onomatopoeia","panegyric","philanthropy","antidisestablishmentarianism","supercalifragilisticexpialidocious"], ["ono","mat","peo","poe","i","pa","ne","gy","ric","ph","ila","nth","ropy","dis","anti","est","abe","lish","ment","aria","nism","super","cali","fragilistic","expiali","docious"]), [], 'Test 62');
test(wordSubsets(["aaaaaaaa","bbbbbbbb","cccccccc","dddddddd","eeeeeeee","ffffffff"], ["a","b","c","d","e","f","aa","bb","cc","dd","ee","ff","aaa","bbb","ccc","ddd","eee","fff","aaaa","bbbb","cccc","dddd","eeee","ffff"]), [], 'Test 63');
test(wordSubsets(["characterization","representation","classification","standardization"], ["char","act","repre","sent","class","stan","dard","iz"]), [], 'Test 64');
test(wordSubsets(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), [], 'Test 65');
test(wordSubsets(["zzzzzzzzzz","zzzzzzzzzz","zzzzzzzzzz","zzzzzzzzzz"], ["zzzz","zzzzz","zzzzzz","zzzzzzz"]), ['zzzzzzzzzz', 'zzzzzzzzzz', 'zzzzzzzzzz', 'zzzzzzzzzz'], 'Test 66');
test(wordSubsets(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), [], 'Test 67');
test(wordSubsets(["zzzzzzzzzz","zzzzzzzzz","zzzzzzzz","zzzzzzz","zzzzzz","zzzzz","zzzz","zzz","zz","z"], ["zzzzzzzzzz","zzzzzzzzz","zzzzzzzz","zzzzzzz","zzzzzz","zzzzz","zzzz","zzz","zz","z"]), ['zzzzzzzzzz'], 'Test 68');
test(wordSubsets(["aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz","zyxwvutsrqponmlkjihgfedcba","abcd","efgh","ijkl","mnop","qrst","uvwx","yz"], ["az","bx","cy","dw","ev","fu","gt","hs","ir","jq","kp","lo","mn","op","qr","st","uv","wx","yz"]), ['aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz', 'zyxwvutsrqponmlkjihgfedcba'], 'Test 69');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

