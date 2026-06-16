// Test: 2977. Minimum Cost To Convert String Ii
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { minimumCost } = require("./solution");

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

console.log("\n2977. Minimum Cost To Convert String Ii\n");

test(minimumCost("abcdefgh", "acdeeghh", ["bcd","fgh","thh"], ["cde","thh","ghh"], [1,3,5]), 9, 'Test 1');
test(minimumCost("abcd", "acbe", ["a","b","c","c","e","d"], ["b","c","b","e","b","e"], [2,5,5,1,2,20]), 28, 'Test 2');
test(minimumCost("abcdefgh", "addddddd", ["bcd","defgh"], ["ddd","ddddd"], [100,1578]), -1, 'Test 3');
test(minimumCost("mississippi", "massissippi", ["issi","miss"], ["assi","mass"], [20,30]), 20, 'Test 4');
test(minimumCost("xyzxyzxyz", "zyxzyxzyx", ["xyz","zyx"], ["zyx","xyz"], [500,500]), 1500, 'Test 5');
test(minimumCost("abcdeffedcba", "zyxwvutsrqponmlkjihgfedcba", ["abc","def","fed","cba"], ["zyx","wvu","tsr","pon"], [50, 60, 70, 80]), -1, 'Test 6');
test(minimumCost("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzxxwwvvuuttrrssqqppoonnmmllkkjjiihhggffeeeeddccbbaa", ["ab","bc","cd","de","ef","fg","gh","hi","ij","jk","kl","lm","mn","no","op","pq","qr","rs","st","tu","uv","vw","wx","xy","yz"], ["yx","xw","wg","vf","fu","et","ts","sr","rq","qp","po","on","nm","ml","lk","kj","ji","ih","hg","gf","fe","ed","dc","cb","ba"], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250]), -1, 'Test 7');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], ["zyx","wvu","tsr","pon","mlk","jih","gf","edc","ba"], [200, 150, 100, 50, 150, 200, 50, 100, 150]), -1, 'Test 8');
test(minimumCost("mnopqr", "rqpomn", ["mnop","opqr","pqro","qrop","rpoq","poqm"], ["rpoq","poqm","mnop","opqr","pqro","qrop"], [100,200,300,400,500,600]), -1, 'Test 9');
test(minimumCost("abcdefgabcdefgabcdefg", "zyxwvutzyxwvutzyxwvut", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], ["zyx","wvu","tsr","pon","mlk","jih","fed","cba","ba"], [1,2,3,4,5,6,7,8,9]), -1, 'Test 10');
test(minimumCost("mnopqrst", "nopqrstu", ["mnop","qrst","rstu"], ["nopq","mnop","rstv"], [100,200,300]), -1, 'Test 11');
test(minimumCost("abracadabra", "abracabadaa", ["ra"], ["aa"], [3]), -1, 'Test 12');
test(minimumCost("abcabcabcabc", "defdefdefdef", ["abc","def"], ["def","abc"], [1000,1000]), 4000, 'Test 13');
test(minimumCost("aaaaabbbbb", "bbbbbbaaaa", ["aaaaa","bbbbb"], ["bbbbb","aaaaa"], [2000,1000]), -1, 'Test 14');
test(minimumCost("mississippi", "mssssssssss", ["issi","ssis","ippi","ppi","missi","ssipp"], ["ssss","ssss","ppp","pp","sssss","sssss"], [50,55,30,35,40,45]), -1, 'Test 15');
test(minimumCost("aaaaabbbbb", "bbbbbbaaaa", ["aaaaa","bbbbb"], ["bbbbb","aaaaa"], [1000,1000]), -1, 'Test 16');
test(minimumCost("abcdefabcdefabcdef", "ghijklghijklghijkl", ["abc","def","ghi","jkl"], ["ghi","jkl","abc","def"], [10, 20, 30, 40]), 90, 'Test 17');
test(minimumCost("qwertyuiopqwertyuiopqwertyuiop", "asdfghjklasdfghjklasdfghjkl", ["qwerty","uiop","asdf","ghjkl","qwertyuiop","asdfghjkl"], ["asdfgh","jklasdf","qwerty","uiopqw","asdfghjkl","qwertyui"], [150, 250, 350, 450, 550, 650]), -1, 'Test 18');
test(minimumCost("ababababab", "bababababa", ["aba","bab"], ["bab","aba"], [5,10]), -1, 'Test 19');
test(minimumCost("ababababab", "cdcdcdcdcd", ["ab","ba"], ["cd","dc"], [1,2]), 5, 'Test 20');
test(minimumCost("abababababababababababab", "babababababababababababa", ["ab", "ba"], ["ba", "ab"], [1, 2]), 12, 'Test 21');
test(minimumCost("abcdefgabcdefg", "gfedcbagfedcba", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], ["cba","fed","ihg","lkj","onm","rqp","uts","xwv","zy"], [10,20,30,40,50,60,70,80,90]), -1, 'Test 22');
test(minimumCost("aabbccddeeffgg", "ffeeddccbbaa", ["aa","bb","cc","dd","ee","ff","gg"], ["ff","ee","dd","cc","bb","aa","gg"], [10,20,30,40,50,60,70]), Error: string index out of range, 'Test 23');
test(minimumCost("abcabcabcabcabcabc", "defdefdefdefdefdef", ["abc","def"], ["def","abc"], [1,2]), 6, 'Test 24');
test(minimumCost("abcdef", "fedcba", ["abc","def","fed"], ["def","fed","abc"], [100,200,300]), -1, 'Test 25');
test(minimumCost("abcabcabcabc", "cbacbacbacba", ["abc","cba"], ["cba","abc"], [25,35]), 100, 'Test 26');
test(minimumCost("aaaabbbbccccddddeeeeffff", "zzzzzzzzzzzzzzzzzzzzzzzzzz", ["aaaa", "bbbb", "cccc", "dddd", "eeee", "ffff"], ["zzzz", "zzzz", "zzzz", "zzzz", "zzzz", "zzzz"], [100, 200, 300, 400, 500, 600]), 2100, 'Test 27');
test(minimumCost("abababab", "cdcdcdcd", ["ab","ba","abcd","cd","dc"], ["cd","cd","cdcd","ab","ab"], [10,20,30,40,50]), 40, 'Test 28');
test(minimumCost("abcdefghij", "jihgfedcba", ["abcdefghi","hgfedcba"], ["jihgfedcba","abcdefghij"], [500,600]), -1, 'Test 29');
test(minimumCost("abcdefghijkl", "abcklmnopq", ["def","ghi","jkl","mnop"], ["ghi","jkl","mnop","nopq"], [10,15,20,25]), -1, 'Test 30');
test(minimumCost("abcdefghij", "jihgfedcba", ["abcdefghi","bcdefgh","cdefgh","defgh","efgh","fgh","gh","h"], ["ihgfedcb","ihgfedc","ihgfed","ihgfe","ihgf","ihg","ih","i"], [1000,900,800,700,600,500,400,300]), -1, 'Test 31');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], ["xyz","wvu","tsr","qpo","nml","kji","hgf","edc","ba"], [10,20,30,40,50,60,70,80,90]), -1, 'Test 32');
test(minimumCost("abcdefgabcdefg", "ghijklmghijklm", ["abc","def","ghi","jkl"], ["ghi","jkl","mno","pqr"], [50,75,100,125]), -1, 'Test 33');
test(minimumCost("aaaaaaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbbbb", ["aaa","bbb","aab","abb"], ["bbb","aaa","abb","aab"], [10, 5, 20, 15]), -1, 'Test 34');
test(minimumCost("mississippi", "maddessippi", ["issi","ippi","ippi","issi"], ["addi","essi","ppii","ppii"], [100,200,50,300]), -1, 'Test 35');
test(minimumCost("abcdefg", "abcdefg", ["abc","def","ghi"], ["bcd","efg","hij"], [10,20,30]), 0, 'Test 36');
test(minimumCost("thisisatargetstring", "thisisanoriginalstr", ["target","string","atarget","original"], ["original","str","isan","target"], [12, 15, 7, 18]), -1, 'Test 37');
test(minimumCost("aaaaaabbbbbbccccccdddddd", "ddddddddccccccccbbbbbaaaaa", ["aaaaaa", "bbbbbb", "cccccc", "dddddd"], ["dddddd", "cccccc", "bbbbbb", "aaaaaa"], [1000, 2000, 3000, 4000]), -1, 'Test 38');
test(minimumCost("ababababab", "bababababa", ["aba","bab"], ["bab","aba"], [5,7]), -1, 'Test 39');
test(minimumCost("mississippi", "missezzzzzzzzzz", ["issi","ssis","ssiss","ippi","ppi","ippii"], ["zzzz","pppi","issip","zzzz","ippp","zzzzz"], [100, 200, 300, 400, 500, 600]), -1, 'Test 40');
test(minimumCost("abcdabcdabcd", "zzzzzzzzzzzz", ["abcd","abc","bcd","cd","d","ab"], ["zzzz","zzz","zzz","zz","z","zz"], [100,110,120,130,140,150]), 300, 'Test 41');
test(minimumCost("transform", "reformant", ["trans","form","ant"], ["reform","orm","tant"], [150,250,350]), -1, 'Test 42');
test(minimumCost("aabbcc", "bbaaccaa", ["aa","bb","cc","bb","aa"], ["bb","cc","bb","aa","cc"], [5,10,15,20,25]), 25, 'Test 43');
test(minimumCost("abcde", "edcba", ["abc","cde","edc","cba"], ["cde","edc","cba","abc"], [10,20,30,40]), -1, 'Test 44');
test(minimumCost("abcdefgabcdefgabcdefg", "bcdefgbcdefgbcdefga", ["abcdefg"], ["bcdefga"], [500]), -1, 'Test 45');
test(minimumCost("complexproblemcomplexproblem", "simpleproblemcomplexproblem", ["complex","problem","simple"], ["simple","solution","complex"], [100, 200, 50]), -1, 'Test 46');
test(minimumCost("abababab", "babababa", ["aba","bab","aab"], ["bab","aba","bab"], [2,3,1]), -1, 'Test 47');
test(minimumCost("abcdefabcdef", "fedcbafedcba", ["abc","def"], ["def","abc"], [50,60]), -1, 'Test 48');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yza"], ["uvw", "rst", "opq", "lmn", "fed", "cba", "zyx", "wvu", "tsr"], [10, 20, 30, 40, 50, 60, 70, 80, 90]), -1, 'Test 49');
test(minimumCost("aaaabbbbcccc", "bbbbaaaaaccc", ["aaa","bbb","ccc"], ["bbb","aaa","ccc"], [10,20,30]), -1, 'Test 50');
test(minimumCost("hellohellohello", "worldworldworld", ["hello","world"], ["world","hello"], [500,300]), 1500, 'Test 51');
test(minimumCost("abcabcabcabc", "xyzxyzxyzxyz", ["abc","ab","bc"], ["xyz","yx","zx"], [100,50,30]), 400, 'Test 52');
test(minimumCost("abcdefghij", "jihgfedcba", ["abc","def","ghi","jkl"], ["cba","fed","ihg","lkj"], [10,20,30,40]), -1, 'Test 53');
test(minimumCost("abcdefg", "zzzzzzz", ["abc","def","gh","a","b","c","d","e","f","g"], ["zzz","zzz","zzz","z","z","z","z","z","z","z"], [100,100,100,1,2,3,4,5,6,7]), 28, 'Test 54');
test(minimumCost("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa", ["ab","cd","ef","gh","ij","kl","mn","op","qr","st","uv","wx","yz"], ["ba","dc","fe","hg","ji","lk","no","po","rq","ts","vu","xw","zy"], [111,222,333,444,555,666,777,888,999,1111,2222,3333,4444]), -1, 'Test 55');
test(minimumCost("aaaaabbbbbcccc", "bbbbbcccccddddd", ["aaa","bbb","ccc"], ["bbb","ccc","ddd"], [1,2,3]), -1, 'Test 56');
test(minimumCost("abcdefghij", "ijabcdefgh", ["abcdefgh","ijkl"], ["ijkl","abcdefgh"], [2000000,2000000]), -1, 'Test 57');
test(minimumCost("abcdef", "fedcba", ["abc","def"], ["def","abc"], [10,20]), -1, 'Test 58');
test(minimumCost("abacabadabacaba", "xyzxyzxyzxyzxyz", ["aba","bac","cab","abc"], ["xyz","zyx","yxz","yzx"], [1000,2000,3000,4000]), -1, 'Test 59');
test(minimumCost("zzzzzzzzzz", "zzzzzzzzzz", ["zzz","zzzz"], ["zzzz","zzz"], [1000,2000]), 0, 'Test 60');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], ["zyx","wvu","tsr","pon","mlk","jih","fed","cba","ba"], [10,20,30,40,50,60,70,80,90]), -1, 'Test 61');
test(minimumCost("abcdefghij", "zabcdefghi", ["a","z"], ["z","a"], [1000000]), -1, 'Test 62');
test(minimumCost("xyxyxyxyxy", "yxyxyxyxyx", ["xy","yx"], ["yx","xy"], [10,5]), 50, 'Test 63');
test(minimumCost("abcdefghij", "abcdefghij", ["abc","def","ghi","jkl"], ["abc","def","ghi","jkl"], [1,1,1,1]), 0, 'Test 64');
test(minimumCost("xyzxyzxyz", "zyxzyxzyx", ["xyz","zyx"], ["zyx","xyz"], [1,2]), 3, 'Test 65');
test(minimumCost("mississippi", "hellohello", ["issi","issipp","ippi","issipp","issipp"], ["ello","ello","ello","ello","ello"], [1,2,3,4,5]), -1, 'Test 66');
test(minimumCost("aabbccddeeff", "ffeeddccbbaa", ["aa","bb","cc","dd","ee","ff"], ["ff","ee","dd","cc","bb","aa"], [1,2,3,4,5,6]), 21, 'Test 67');
test(minimumCost("zzzzzzzz", "yyyyyyyy", ["zzz","zyz","yzy"], ["yyy","yyy","yyy"], [10,20,5]), -1, 'Test 68');
test(minimumCost("aabbccddeeff", "ffeeddccbbaa", ["ab","bc","cd","de","ef"], ["fe","ed","dc","cb","ba"], [1,2,3,4,5]), -1, 'Test 69');
test(minimumCost("aabbccddeeff", "zzzzzzzzzzzz", ["aa","bb","cc","dd","ee","ff","abcdef"], ["zz","zz","zz","zz","zz","zz","zzzzzz"], [10,10,10,10,10,10,50]), 60, 'Test 70');
test(minimumCost("zzzzzzzzzz", "abcdefghij", ["zzzz","zzz","zz","z"], ["abcd","bcde","cdef","defg"], [1000,500,250,125]), -1, 'Test 71');
test(minimumCost("thisisaverylongstringthatweneedtoconvert", "toreallyconvertthislongstring", ["this", "very", "long", "string", "that", "need", "to"], ["to", "need", "that", "convert", "very", "long", "this"], [1, 2, 3, 4, 5, 6, 7]), -1, 'Test 72');
test(minimumCost("abcdefghij", "jihgfedcba", ["abc","def","ghi","jih","fed","cba"], ["jih","fed","cba","abc","def","ghi"], [100,200,300,400,500,600]), -1, 'Test 73');
test(minimumCost("aabbccddeeff", "ffeeddccbbaa", ["aab","bcc","dde","eff"], ["ff","ee","dd","cc"], [1,2,3,4]), -1, 'Test 74');
test(minimumCost("aaaaabbbbbcccccdddddeeeee", "eeeeeaaaaabbbbcccccd", ["aaaaa","bbbbb","ccccc","ddddd","eeeee"], ["eeeee","aaaaa","bbbbb","ccccc","ddddd"], [100,200,300,400,500]), -1, 'Test 75');
test(minimumCost("abcabcabcabcabcabcabcabcabcabc", "xyzxyzxyzxyzxyzxyzxyzxyzxyzxyz", ["abc","bc","c","a","b","ab","bc","ca"], ["xyz","yz","z","x","y","xy","yz","zx"], [10, 20, 30, 40, 50, 60, 70, 80]), 100, 'Test 76');
test(minimumCost("conversionexampleexample", "transformationexampleexample", ["conversion","transformation"], ["transformation","conversion"], [40, 60]), -1, 'Test 77');
test(minimumCost("abacabadabacaba", "zzzzzzzzzzzzzzz", ["aba","abc","aca","bca","cab"], ["zzz","zzz","zzz","zzz","zzz"], [10,20,30,40,50]), -1, 'Test 78');
test(minimumCost("abacabadabacabad", "xyzxyzxyzxyz", ["aba","bac","cad","bad","abc","acb","bcd","bca","cab","cba"], ["xyz","zyx","yzx","xyz","zyx","yzx","xyz","zyx","yzx","xyz"], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), -1, 'Test 79');
test(minimumCost("xyzxyzxyz", "uvwuvwuvw", ["xyz","yzx","zxy","xy","yz","zx","x","y","z"], ["uvw","uvw","uvw","uv","uw","vw","u","v","w"], [100,150,200,10,20,30,1,2,3]), 18, 'Test 80');
test(minimumCost("aaaaabbbbb", "bbbbbbaaaa", ["aaaa","bbbb"], ["bbbb","aaaa"], [1000,2000]), -1, 'Test 81');
test(minimumCost("aabbccddeeff", "aabbccddeeff", ["aa","bb","cc","dd","ee","ff"], ["bb","cc","dd","ee","ff","aa"], [10,20,30,40,50,60]), 0, 'Test 82');
test(minimumCost("abababababababababab", "babababababababababa", ["ab","ba"], ["ba","ab"], [3, 2]), 30, 'Test 83');
test(minimumCost("abcdabcdabcd", "dcbaabcbab", ["abcd","dcba","abcb"], ["dcba","abcd","abcb"], [10,20,30]), Error: string index out of range, 'Test 84');
test(minimumCost("repeatedsubstringsubstring", "differentsubstringsubstring", ["repeated","different"], ["different","repeated"], [100, 120]), -1, 'Test 85');
test(minimumCost("qwertyuiop", "zxcvbnmzxc", ["qw","er","ty","ui","op","zxc","cv","bn","m","zx","xc"], ["zx","xc","cv","bn","m","qw","er","ty","ui","op","zxc"], [1,2,3,4,5,6,7,8,9,10,11]), -1, 'Test 86');
test(minimumCost("mississippi", "mississippa", ["ippi"], ["appa"], [5]), -1, 'Test 87');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], ["zyx","wvu","tsr","pon","mlk","jih","gf","ed","cb"], [100,200,300,400,500,600,700,800,900]), -1, 'Test 88');
test(minimumCost("aaaaabbbbbaaaaabbbbbaaaaabbbbbaaaaa", "zzzzzxxxxxzzzzzxxxxxzzzzzxxxxxzzzzz", ["aaaaa","bbbbb","xxxxx","zzzzz"], ["zzzzz","aaaaa","zzzzz","xxxxx"], [100, 200, 300, 400]), 2500, 'Test 89');
test(minimumCost("xyxyxyxyxyxyxyxyxy", "yxyxyxyxyxyxyxyxyx", ["xy","yx"], ["yx","xy"], [1,2]), 9, 'Test 90');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], ["zyx","wvu","tsr","pon","mlk","jih","fed","cba","abc"], [100, 200, 300, 400, 500, 600, 700, 800, 900]), -1, 'Test 91');
test(minimumCost("nestednestednested", "deepdeepdeep", ["nested","deep"], ["deep","nested"], [50, 30]), -1, 'Test 92');
test(minimumCost("thisisatest", "tistiatest", ["this","test"], ["tist","taste"], [50,70]), -1, 'Test 93');

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
