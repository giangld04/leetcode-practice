// Test: 2744. Find Maximum Number Of String Pairs
// 65 test cases from LeetCodeDataset
// Run: node test.js

const { maximumNumberOfStringPairs } = require("./solution");

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

console.log("\n2744. Find Maximum Number Of String Pairs\n");

test(maximumNumberOfStringPairs(["ab","ba","cd","dc","ef","fe","gh","hg","ij","ji"]), 5, 'Test 1');
test(maximumNumberOfStringPairs(["mn","nm","op","po","qr","rq","st","ts"]), 4, 'Test 2');
test(maximumNumberOfStringPairs(["uv","vu","wx","xw","yz","zy","ab","ba"]), 4, 'Test 3');
test(maximumNumberOfStringPairs(["xy","yx","zw","wz","mn"]), 2, 'Test 4');
test(maximumNumberOfStringPairs(["xy","yx","za","az","bw","wb","cc"]), 3, 'Test 5');
test(maximumNumberOfStringPairs(["lm","ml","no","on","pq","qp","rs","sr"]), 4, 'Test 6');
test(maximumNumberOfStringPairs(["ef","fe","gh","hg","ij","ji"]), 3, 'Test 7');
test(maximumNumberOfStringPairs(["st","ts","uv","vu","wx","xw","yz","zy"]), 4, 'Test 8');
test(maximumNumberOfStringPairs(["xy","yx","zz","zx","yx","xy"]), 4, 'Test 9');
test(maximumNumberOfStringPairs(["xy","yx","za","az","bw","wb"]), 3, 'Test 10');
test(maximumNumberOfStringPairs(["tu","ut","vw","wv","xy","yx","za","az"]), 4, 'Test 11');
test(maximumNumberOfStringPairs(["kl","lk","mn","nm","op","po","qr","rq"]), 4, 'Test 12');
test(maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"]), 2, 'Test 13');
test(maximumNumberOfStringPairs(["de","ed","fg","gf","hi","ih","jk","kj"]), 4, 'Test 14');
test(maximumNumberOfStringPairs(["aa","bb","cc","dd","ee","ff","gg","hh","ii","jj"]), 0, 'Test 15');
test(maximumNumberOfStringPairs(["aa","ab"]), 0, 'Test 16');
test(maximumNumberOfStringPairs(["mn","nm","op","po","qr","rq"]), 3, 'Test 17');
test(maximumNumberOfStringPairs(["xy","yx","za","az","bw","wb","cd","dc"]), 4, 'Test 18');
test(maximumNumberOfStringPairs(["ef","fe","gh","hg","ij","ji","kl","lk"]), 4, 'Test 19');
test(maximumNumberOfStringPairs(["qq","rr","ss","tt","uu"]), 0, 'Test 20');
test(maximumNumberOfStringPairs(["ab","ba","cc"]), 1, 'Test 21');
test(maximumNumberOfStringPairs(["qp","pq","rs","sr","tu","ut"]), 3, 'Test 22');
test(maximumNumberOfStringPairs(["ab","cd","ef","gh","ij","kl","mn","op","qr","st","uv","wx","yz"]), 0, 'Test 23');
test(maximumNumberOfStringPairs(["xy","yx","zz","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz"]), 2, 'Test 24');
test(maximumNumberOfStringPairs(["xy","yx","pq","qp","rs","sr","tu","ut","vw","wv","xy","yx","zz","aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz"]), 9, 'Test 25');
test(maximumNumberOfStringPairs(["abcd","dcba","efgh","hgef","ijkl","lkji","mnop","ponm","qrst","tqrs","uvwx","xwvu","yzab","bazY"]), 4, 'Test 26');
test(maximumNumberOfStringPairs(["aabb","bbaa","ccdd","ddcc","eeff","ffee","gghh","hhgg","iijj","jjii","kkll","llkk","mmnn","nntt","oopp","ppoo","qqr","rqq","ss tt","ttss","uuvv","vvuu","wwxx","xxww","yyzz","zzyy","aacc","ccaa","ddeeff","ffeedd","gghhiijj","jjihhg","kkllmm","mmllkk","nnooppqq","qqpoonnn","rrssttuu","uuttsrrr","vvwwxx","xxwwvv","yyzzxx","xxzzyy"]), 16, 'Test 27');
test(maximumNumberOfStringPairs(["abcd","dcba","efgh","h gef","ijkl","lkij","mnop","ponm","qrst","t srq","uvwx","xwvu","yzxy","zyzx","abcd","dcba","efgh","h gef","ijkl","lkij","mnop","ponm","qrst","t srq","uvwx","xwvu","yzxy","zyzx","mnop","ponm","qrst","t srq","ijkl","lkij","efgh","h gef","abcd","dcba"]), 22, 'Test 28');
test(maximumNumberOfStringPairs(["aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz","za","az","zb","bz","zc","cz","zd","dz","ze","ez","zf","fz","zg","gz","zh","hz","zi","iz","zj","jz","zk","kz","zl","lz","zm","mz","zn","nz","zo","oz","zp","pz","zq","qz","zr","rz","zs","sz","zt","tz","zu","uz","zv","vz","zw","wz","zx","xz","zy","yz"]), 25, 'Test 29');
test(maximumNumberOfStringPairs(["xy","yx","zz","aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz"]), 2, 'Test 30');
test(maximumNumberOfStringPairs(["xy","yx","zw","wz","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk"]), 15, 'Test 31');
test(maximumNumberOfStringPairs(["xy","yx","zz","wz","zw","uv","vu","mn","nm","op","po","qr","rq","st","ts","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","ab","ba","ef","fe"]), 16, 'Test 32');
test(maximumNumberOfStringPairs(["st", "ts", "uv", "vu", "wx", "xw", "yz", "zy", "ab", "ba", "cd", "dc", "ef", "fe", "gh", "hg", "ij", "ji", "kl", "lk", "mn", "nm", "op", "po", "qr", "rq"]), 13, 'Test 33');
test(maximumNumberOfStringPairs(["bc", "cb", "de", "ed", "fg", "gf", "hi", "ih", "jk", "kj", "lm", "ml", "no", "on", "pq", "qp", "rs", "sr", "tu", "ut"]), 10, 'Test 34');
test(maximumNumberOfStringPairs(["ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","zz","zzz","zzzz"]), 13, 'Test 35');
test(maximumNumberOfStringPairs(["abcd","dcba","efgh","hgf","ijkl","lkji","mnop","ponm","qrst","tsrq","uvwx","xwvu","yzab","baz","mnop","ponm","qrst","tsrq","mnop","ponm","qrst","tsrq","mnop","ponm","qrst","tsrq","mnop","ponm","qrst","tsrq","mnop","ponm"]), 64, 'Test 36');
test(maximumNumberOfStringPairs(["abcd","dcba","efgh","hgf","ijkl","lkji","mnop","ponm","qrst","tsrq","uvwx","xwvu","yzab","baz","mnop","ponm","qrst","tsrq","mnop","ponm"]), 16, 'Test 37');
test(maximumNumberOfStringPairs(["ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm"]), 7, 'Test 38');
test(maximumNumberOfStringPairs(["xy","yx","zv","vz","ws","sw","tr","rt","qu","uq","kp","pk","jo","oj","in","ni","mh","hm","lg","gl","kf","fk","je","ej","id","di","hc","ch","gb","bg","fa","af","xy","yx","zv","vz","ws","sw","tr","rt","qu","uq","kp","pk","jo","oj","in","ni","mh","hm","lg","gl","kf","fk","je","ej","id","di","hc","ch","gb","bg","fa","af"]), 64, 'Test 39');
test(maximumNumberOfStringPairs(["xy","yx","zx","xz","ay","ya","by","yb"]), 4, 'Test 40');
test(maximumNumberOfStringPairs(["qp","pq","rs","sr","tu","ut","vw","wv","xy","yx","za","az","by","yb","cx","xc","dl","ld","em","me","fn","nf","go","og","hp","ph","iq","qi","jr","rj","ks","sk","lt","tl","mu","um","nv","vn","ow","wo","px","xp","qy","yq","rz","zr","sa","as","tb","bt","uc","cu","vd","dv","we","ew","xf","fx","yg","gy","zh","hz"]), 31, 'Test 41');
test(maximumNumberOfStringPairs(["xy","yx","zxyx","xzzy","mn","nm","abcd","dcba","efgh","hgfe","ijkl","lkji","mnop","ponm","qrst","tsrq","uvwx","xwvu","yzab","bazy"]), 9, 'Test 42');
test(maximumNumberOfStringPairs(["ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","ab","ba","cd","dc"]), 13, 'Test 43');
test(maximumNumberOfStringPairs(["ef", "fe", "gh", "hg", "ij", "ji", "kl", "lk", "mn", "nm"]), 5, 'Test 44');
test(maximumNumberOfStringPairs(["aabb","bbaa","ccdd","ddcc","eefg","gfee","hhi j","jjih","kklm","mllk","nno p","p onn","qqrs","srqq","tuvw","xwvt","yzxy","yzzy","zzyz","xzyz","zyzx","zyzy","yxzx","zxxy","xyyx","yxyx","xyxy","yxxy","xyyx","yxyx","xyxy"]), 11, 'Test 45');
test(maximumNumberOfStringPairs(["zz","zz","zy","yz","zx","xz","zw","wz","za","az","zb","bz","zc","cz","zd","dz","ze","ez","zf","fz","zg","gz","zh","hz","zi","iz","zj","jz","zk","kz","zl","lz","zm","mz","zn","nz","zo","oz","zp","pz","zq","qz","zr","rz","zs","sz","zt","tz","zu","uz","zv","vz","zw","wz","zx","xz","zy","yz"]), 35, 'Test 46');
test(maximumNumberOfStringPairs(["xy","yx","zv","vz","ws","sw","tr","rt","qu","uq","kp","pk","jo","oj","in","ni","mh","hm","lg","gl","kf","fk","je","ej","id","di","hc","ch","gb","bg","fa","af"]), 16, 'Test 47');
test(maximumNumberOfStringPairs(["xyyx","yxxy","zwwz","wzzw","mnop","ponm","qrst","tsrq","uvwx","xwvu","yz","zy","abcd","dcba","efgh","hgf","ijk","kij","lmn","nml","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm"]), 21, 'Test 48');
test(maximumNumberOfStringPairs(["ba","ab","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","zz","za","az","bz","zb","cz","zc","dz","zd"]), 17, 'Test 49');
test(maximumNumberOfStringPairs(["xy","yz","zx","wx","vu","ts","rq","po","nm","lk","ji","hg","fe","dc","ba","za","zb","zc","zd","ze","zf","zg","zh","zi","zj","zk","zl","zm","zn","zo","zp","zq","zr","zs","zt","zu","zv","zw","zx","zy","zz","az","bz","cz","dz","ez","fz","gz","hz","iz","jz","kz","lz","mz","nz","oz","pz","qz","rz","sz","tz","uz","vz","wz","xz","yy","xx","ww","vv","uu","tt","ss","rr","qq","pp","oo","nn","mm","ll","kk","jj","ii","hh","gg","ff","ee","dd","cc","bb","aa"]), 26, 'Test 50');
test(maximumNumberOfStringPairs(["st","ts","uv","vu","wx","xw","yz","zy","ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy"]), 25, 'Test 51');
test(maximumNumberOfStringPairs(["ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","ac","ca","bd","db"]), 15, 'Test 52');
test(maximumNumberOfStringPairs(["abcd","dcba","efgh","h gef","ijkl","lkij","mnop","ponm","qrst","t srq","uvwx","xwvu","yzab","baz y","mnop","ponm","qrst","t srq","ijkl","lkij","efgh","h gef","abcd","dcba"]), 9, 'Test 53');
test(maximumNumberOfStringPairs(["ab","ba","ac","ca","ad","da","ae","ea","af","fa","ag","ga","ah","ha","ai","ia","aj","ja","ak","ka","al","la","am","ma","an","na","ao","oa","ap","pa","aq","qa","ar","ra","as","sa","at","ta","au","ua","av","va","aw","wa","ax","xa","ay","ya","az","za"]), 25, 'Test 54');
test(maximumNumberOfStringPairs(["aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz","xy","yx","zw","wz","mn","nm"]), 3, 'Test 55');
test(maximumNumberOfStringPairs(["ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy"]), 13, 'Test 56');
test(maximumNumberOfStringPairs(["aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz"]), 0, 'Test 57');
test(maximumNumberOfStringPairs(["ab", "ba", "cd", "dc", "ef", "fe", "gh", "hg", "ij", "ji", "kl", "lk", "mn", "nm", "op", "po", "qr", "rq", "st", "ts", "uv", "vu", "wx", "xw", "yz", "zy"]), 13, 'Test 58');
test(maximumNumberOfStringPairs(["ab","cd","ef","gh","ij","kl","mn","op","qr","st","uv","wx","yz","za","zb","zc","zd","ze","zf","zg","zh","zi","zj","zk","zl","zm","zn","zo","zp","zq","zr","zs","zt","zu","zv","zw","zx","zy","zz","yx","wz","vz","uz","tz","sz","rz","qz","pz","oz","nz","mz","lz","kz","jz","iz","hz","gz","fz","ez","dz","cz","bz","az","ba","dc","fe","hg","ji","lk","nm","po","rq","st","vu","wx","yz"]), 35, 'Test 59');
test(maximumNumberOfStringPairs(["ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy"]), 52, 'Test 60');
test(maximumNumberOfStringPairs(["pq", "qp", "rs", "sr", "tu", "ut", "vw", "wv", "xy", "yx", "za", "az"]), 6, 'Test 61');
test(maximumNumberOfStringPairs(["xy","yx","zw","wz","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy"]), 89, 'Test 62');
test(maximumNumberOfStringPairs(["ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po","qr","rq","st","ts","uv","vu","wx","xw","yz","zy","abcd","dcba","efgh","hgfe","ijkl","lkji"]), 16, 'Test 63');
test(maximumNumberOfStringPairs(["ab","ba","ac","ca","ad","da","ae","ea","af","fa","ag","ga","ah","ha","ai","ia"]), 8, 'Test 64');
test(maximumNumberOfStringPairs(["abc","cba","bcd","dcb","cde","edc","def","fed","efg","gfe","fgh","hgf","ghi","ihg","hij","jih","ijk","kji","jkl","lkj","klm","mlk","lmn","nml","mno","onm","nop","pon","opq","qpo","pqr","rqp","qrs","srq","rst","tsr","stu","uts","tuv","vut","uvw","wvu","vwx","xwv","wxy","yxw","xyz","zyx"]), 24, 'Test 65');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

