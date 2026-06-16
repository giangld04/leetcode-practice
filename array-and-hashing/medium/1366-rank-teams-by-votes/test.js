// Test: 1366. Rank Teams By Votes
// 79 test cases from LeetCodeDataset
// Run: node test.js

const { rankTeams } = require("./solution");

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

console.log("\n1366. Rank Teams By Votes\n");

test(rankTeams(["ABC","ACB","ABC","ACB","ACB"]), ACB, 'Test 1');
test(rankTeams(["WXYZ","XYZW"]), XWYZ, 'Test 2');
test(rankTeams(["BCA","CAB","ACB","BAC","CBA","ABC"]), ABC, 'Test 3');
test(rankTeams(["A","B","C","D","E"]), ABCDE, 'Test 4');
test(rankTeams(["ABCDEF","BCDEFA","CDEFAB","DEFABC","EFABCD","FABCDE"]), ABCDEF, 'Test 5');
test(rankTeams(["BCA","CAB","CBA","ABC","ACB","BAC"]), ABC, 'Test 6');
test(rankTeams(["A","A","A","A","A"]), A, 'Test 7');
test(rankTeams(["BCA","CAB","ACB","ABC","ABC","ACB"]), ACB, 'Test 8');
test(rankTeams(["A","A","A","A"]), A, 'Test 9');
test(rankTeams(["ZMNAGUEDSJYLBOPHRQICWFXTVK"]), ZMNAGUEDSJYLBOPHRQICWFXTVK, 'Test 10');
test(rankTeams(["RGB","GBR","BRG","RBB","BBR","RBB","RRG","GRR"]), RBG, 'Test 11');
test(rankTeams(["ABCDEFGHIJKLMNOPQRSTUVWXYZ","ZYXWVUTSRQPONMLKJIHGFEDCBA"]), AZBYCXDWEVFUGTHSIRJQKPLOMN, 'Test 12');
test(rankTeams(["BCA","CAB","ABC","ACB","BAC"]), ABC, 'Test 13');
test(rankTeams(["GHIJKL", "LKHGJI", "HKLGJI", "IGJLKH", "JIGKHL", "KGLHJI", "GHILJK"]), GHKILJ, 'Test 14');
test(rankTeams(["LMNO","NOLM","OLMN","MNLO","LNMO","ONML","MLOL","LONM","MOLN","NOML","OMNL","LMON","NLMO","OMLN","LMNO","NOLM","OLMN","MNLO","LNMO","ONML","MLOL","LONM","MOLN","NOML","OMNL"]), OLMN, 'Test 15');
test(rankTeams(["ABCDEFGH","BCDEFGHA","CDEFGHAB","DEFGHABC","EFGHABCD","FGHABCDE","GHABCDEF","HABCDEFG"]), ABCDEFGH, 'Test 16');
test(rankTeams(["ABCDEFG", "GFEDCBA", "FBCDEAG", "BCDEAFG", "CDEABGF", "DEABCFG", "EABCDFG"]), BCEDAFG, 'Test 17');
test(rankTeams(["ABCD","BCDA","CDAB","DABC","ABCD","ABCD"]), ABCD, 'Test 18');
test(rankTeams(["QWOP","WOPQ","OPQW","PQWO","QWPO","WPOQ","OPWQ","POWQ"]), PWOQ, 'Test 19');
test(rankTeams(["QWERTYUIOPASDFGHJKLZXCVBNM","MNBVCXZLKJHGFDSAPOIUYTREWQ","QWERTYUIOPASDFGHJKLZXCVBNM","MNBVCXZLKJHGFDSAPOIUYTREWQ","QWERTYUIOPASDFGHJKLZXCVBNM","MNBVCXZLKJHGFDSAPOIUYTREWQ","QWERTYUIOPASDFGHJKLZXCVBNM","MNBVCXZLKJHGFDSAPOIUYTREWQ","QWERTYUIOPASDFGHJKLZXCVBNM","MNBVCXZLKJHGFDSAPOIUYTREWQ"]), MQNWBERVCTXYUZILKOJPAHGSDF, 'Test 20');
test(rankTeams(["MNO","OMN","NMO","MON","NMN","OMM","NMM","MMM"]), MNO, 'Test 21');
test(rankTeams(["UVWXYZ","VWXYZU","WXYZUV","XYZUVW","YZUVWX","ZUVWXY","UVWXYZ","VWXYZU","WXYZUV","XYZUVW","YZUVWX","ZUVWXY","UVWXYZ","VWXYZU","WXYZUV","XYZUVW","YZUVWX","ZUVWXY","UVWXYZ"]), UVWXYZ, 'Test 22');
test(rankTeams(["MATH", "TEAM", "META", "HATE", "HEAT", "MATE", "TAME", "TIME"]), TMHAEI, 'Test 23');
test(rankTeams(["ZYX","XYZ","YZX","XZY","YXZ","ZXY"]), XYZ, 'Test 24');
test(rankTeams(["PQRST","QPRST","RQPST","SPQRT","TQPRS","PQRST","QPRST","RQPST","SPQRT","TQPRS","PQRST","QPRST","RQPST","SPQRT","TQPRS"]), QPRST, 'Test 25');
test(rankTeams(["LION","LION","LION","LION","LION","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES","EARTHTONES"]), Error: list index out of range, 'Test 26');
test(rankTeams(["ABCD","BCDA","CDAB","DABC","ACBD"]), ACBD, 'Test 27');
test(rankTeams(["PQR","QPR","RQP","PRQ","RPQ","QRP","PQR","RQP","QRP","PRQ"]), PQR, 'Test 28');
test(rankTeams(["ZYX","YZX","XZY","XYZ","YXZ","ZXY","YZX","ZXY"]), ZYX, 'Test 29');
test(rankTeams(["ABCDE","EDCBA","CBADE","BCADE","DECAB"]), BCDEA, 'Test 30');
test(rankTeams(["ABC","BAC","BCA","CAB","CBA","ACB","BAC","CAB","CBA","BCA","ACB","CAB","CBA","BCA","ACB","BAC","CAB","CBA","BCA","ACB","BAC","CAB","CBA","BCA","ACB"]), CBA, 'Test 31');
test(rankTeams(["TEAM","MEAT","TEAM","EMAT","AMTE","MATE","ATEM","TAME","EMTA","ETAM","METE","MATE","TEMA","TEAM","MATETE","AMTE","ETAM","TAME","EMTA","ETAM","METE","MATE","TEMA","TEAM"]), Error: list index out of range, 'Test 32');
test(rankTeams(["ABCD", "BCDA", "CDAB", "DABC"]), ABCD, 'Test 33');
test(rankTeams(["AB","BA","AB","BA","AB","BA","AB","BA","AB","BA","AB","BA","AB","BA","AB","BA","AB","BA","AB","BA"]), AB, 'Test 34');
test(rankTeams(["QWERTYUIOPASDFGHJKLZXCVBNM","QWERTYUIOPASDFGHJKLZXCVBNM","QWERTYUIOPASDFGHJKLZXCVBNM"]), QWERTYUIOPASDFGHJKLZXCVBNM, 'Test 35');
test(rankTeams(["XYZ","YZX","ZXY","XYZ","YZX","ZXY","XYZ","YZX","ZXY","XYZ","YZX","ZXY","XYZ","YZX","ZXY","XYZ","YZX","ZXY","XYZ","YZX","ZXY","XYZ","YZX","ZXY","XYZ","YZX","ZXY","XYZ","YZX","ZXY","XYZ","YZX","ZXY","XYZ","YZX","ZXY","XYZ","YZX","ZXY","XYZ","YZX","ZXY","XYZ","YZX","ZXY","XYZ","YZX","ZXY","XYZ","YZX","ZXY","XYZ","YZX","ZXY","XYZ","YZX","ZXY","XYZ","YZX","ZXY","XYZ","YZX","ZXY"]), XYZ, 'Test 36');
test(rankTeams(["QWERTYUIOPASDFGHJKLZXCVBNM","MNBVCXZLKJHGFDSAPORIUYTREWQ","WQERTYUIOPASDFGHJKLZXCVBNM","ZXCVBNMLKJHGFDSAPOIUYTREWQ"]), Error: list index out of range, 'Test 37');
test(rankTeams(["ABCDEF","BCDEFA","CDEFAB","DEFABC","EFGABC","FGABCDE","GABCDEF","HABCDEFG","IABCDEFG","JABCDEFG"]), Error: list index out of range, 'Test 38');
test(rankTeams(["EFGHI","FGHIJ","GHIJE","HIJEF","IJEFG","EFGHI","FGHIJ","GHIJE","HIJEF","IJEFG","EFGHI","FGHIJ","GHIJE","HIJEF","IJEFG","EFGHI","FGHIJ","GHIJE","HIJEF","IJEFG","EFGHI","FGHIJ","GHIJE","HIJEF","IJEFG","EFGHI","FGHIJ","GHIJE","HIJEF","IJEFG","EFGHI","FGHIJ","GHIJE","HIJEF","IJEFG"]), IHGFEJ, 'Test 39');
test(rankTeams(["XYZ","YZX","ZXY","YXZ","XZY","ZYX","XYZ","YZX"]), YXZ, 'Test 40');
test(rankTeams(["AB","BA","AB","BA","AB","BA","AB","BA","AB","BA","AB","BA"]), AB, 'Test 41');
test(rankTeams(["TLI","LIT","ITL","TIL","ILT","LTI","TIL","LTI","ILT","TLI"]), TLI, 'Test 42');
test(rankTeams(["QWERTY", "QWRETY", "QWRTEY", "QWRTYE", "QWRYTE"]), QWRETY, 'Test 43');
test(rankTeams(["ZEBRA", "BRACE", "BEZAR", "RABZE", "AREBZ", "ZERBA"]), BZRAEC, 'Test 44');
test(rankTeams(["ZYX","YXZ","XYZ","YZX","XZY","ZXY"]), XYZ, 'Test 45');
test(rankTeams(["GHIJK","HIJKG","IJKGH","JKGHI","KGIJH","GHIJK","HGIJK","IGHJK","JGIHK","KGIJH"]), GHIJK, 'Test 46');
test(rankTeams(["WXYZ","YZWX","ZWXY","XWYZ","WZYX","XYZW"]), WXZY, 'Test 47');
test(rankTeams(["PQRSTU","QPRSTU","QRPTSU","QRSTUP","QPRTSU","QTRPSU","QTRSPU","QTSRPU","QTSPUR","QTPRSU","QTPSUR","QTUSPR","QTUSRP","QTURPS","QTURSP","QTUPRS","QTUPSR","QTRSPU","QTSRPU","QTRPUS","QTRUPS","QTPRSU","QTPSUR","QTUSPR","QTURPS","QTURSP","QTUPRS","QTUPSR"]), QPTRUS, 'Test 48');
test(rankTeams(["ABCD","DCBA","BCAD","CADB","ACDB","DABC","BCDA"]), ABDC, 'Test 49');
test(rankTeams(["LOVE", "VOTE", "LEVO", "OVEL", "VOLE", "ELOV"]), VLOET, 'Test 50');
test(rankTeams(["LMNO","MLON","OLNM","NOLM","ONML","MNLO","LOMN","LONM","NMLO","OMNL","NOLM","OLNM"]), OLNM, 'Test 51');
test(rankTeams(["A","A","A","A","B","B","B","B","C","C","C","C","D","D","D","D","E","E","E","E","F","F","F","F","G","G","G","G","H","H","H","H","I","I","I","I","J","J","J","J","K","K","K","K","L","L","L","L","M","M","M","M","N","N","N","N","O","O","O","O","P","P","P","P","Q","Q","Q","Q","R","R","R","R","S","S","S","S","T","T","T","T","U","U","U","U","V","V","V","V","W","W","W","W","X","X","X","X","Y","Y","Y","Y","Z","Z","Z","Z"]), ABCDEFGHIJKLMNOPQRSTUVWXYZ, 'Test 52');
test(rankTeams(["ABCDEF", "FEDCBA", "DEFABC", "BCDAFE", "CBAFED", "AFECBD", "BDFECA"]), BAFDCE, 'Test 53');
test(rankTeams(["AC","CA","AC","CA","AC","CA","AC","CA","AC","CA"]), AC, 'Test 54');
test(rankTeams(["LMNO","MLNO","NOLM","OLMN","NOML","OMNL","LONM","OLNM","MOLN","LNOM","LOMN","MONL","NLOM","LNMO","LNMN","OMLN","NOLM","NLMO","MOLN","ONLM","OMNL","LONM","OLNM","MOLN","LNOM","LOMN","MONL","NLOM","LNMO","LNMN"]), LONM, 'Test 55');
test(rankTeams(["PQRST","QPRST","RSPTQ","TRPQS","SQPTR","PRQST","PQRST","RQPTS","TQRS","SPRQT"]), PRSTQ, 'Test 56');
test(rankTeams(["PQR","QRP","RPQ","PRQ","QPR","RQP","PQR","QRP","RPQ","PRQ","QPR","RQP"]), PQR, 'Test 57');
test(rankTeams(["ABCDE","ACBDE","CABDE","BCADE","DCABE"]), ACBDE, 'Test 58');
test(rankTeams(["ABCDEFGHIJKL","LJKJIHGFEDCBA","ABCDEFGHIJKL","LJKJIHGFEDCBA","ABCDEFGHIJKL","LJKJIHGFEDCBA"]), Error: list index out of range, 'Test 59');
test(rankTeams(["XYZ","YXZ","YZX","ZXY","ZYX","XZY","YZX","ZYX","XYZ","YXZ","XZY","XYZ"]), XYZ, 'Test 60');
test(rankTeams(["FGHIJK","GHIJKF","HIJKFG","IJKFGH","JKFGHI","KFGHIJ","FGHIJK","GHIJKF","HIJKFG","IJKFGH"]), IHGFJK, 'Test 61');
test(rankTeams(["QWERTYUIOPASDFGHJKLZXCVBNM","ASDFGHJKLZXCVBNMQWERTYUIOP","ZXCVBNMQWERTYUIOPASDFGHJKL","WERTYUIOPASDFGHJKLZXCVBNM","QWERTYUIOPZXCVBNMLKJIHGFDSA","ASDFGHJKLZXCVBNMPOIUYTREWQ","ZXCVBNMPOIUYTREWQASDFGHJKL","WERTYUIOPZXCVBNMLKJIHGFDSA","QWERTYUIOPZXCVBNMLKJIHGFDSA","ASDFGHJKLZXCVBNMPOIUYTREWQ","ZXCVBNMPOIUYTREWQASDFGHJKL","WERTYUIOPZXCVBNMLKJIHGFDSA"]), Error: list index out of range, 'Test 62');
test(rankTeams(["ACBD","BDAC","CDAB","DABC","ABCD","BACD","CABD","DABC","ACDB","BCDA"]), ABCD, 'Test 63');
test(rankTeams(["ABCD","ABDC","ACBD","ACDB","ADBC","ADCB","BACD","BADC","BCAD","BCDA","BDAC","BDCA","CABD","CADB","CBAD","CBDA","CDAB","CDBA","DABC","DACB","DBAC","DBCA","DCAB","DCBA"]), ABCD, 'Test 64');
test(rankTeams(["UVWX","VWXU","WXUV","XUVW","UVWX","VWXU","WXUV","XUVW","UVWX","VWXU"]), VUWX, 'Test 65');
test(rankTeams(["ZR","RZ","ZR","RZ","ZR"]), ZR, 'Test 66');
test(rankTeams(["SUNNY", "UNNYS", "NUNYS", "NNYSU", "NUYNS", "USNNY", "NSUNY"]), NUSY, 'Test 67');
test(rankTeams(["HELLO","OLLEH","LOHEL","LLOEH","HLOEL","ELOHL","ELLOH","OLEHL","LELOH","OHELL"]), LOEH, 'Test 68');
test(rankTeams(["ACB","BAC","CBA","BCA","CAB","ACB","BAC","CBA","BCA","CAB","ACB","BAC","CBA"]), CBA, 'Test 69');
test(rankTeams(["EFGHI","FGHIJ","GHIJE","HIJEF","IJEFG","JEFGH","EFGIH","FGHIJ","GHIJE","HIJEF","IJEFG","JEFGH","EFGIH","FGHIJ","GHIJE","HIJEF","IJEFG","JEFGH","EFGIH","FGHIJ","GHIJE","HIJEF","IJEFG","JEFGH","EFGIH"]), EFGIJH, 'Test 70');
test(rankTeams(["QWRTY","QWYRT","WQRTY","WQYRT","RTQWY","RTYQW","YRQWT","YRTQW","TWQRY","TYWQR"]), WQRTY, 'Test 71');
test(rankTeams(["PYTHON", "TYHONP", "YHTNPO", "HNOTYP", "NOTYHP", "OTHNYP"]), YTHONP, 'Test 72');
test(rankTeams(["MNO","NOM","OMN","MON","NMO","OMN","MNO"]), MNO, 'Test 73');
test(rankTeams(["MNO","OMN","NMO","MON","NOM","OMN"]), MON, 'Test 74');
test(rankTeams(["ABCD","DCBA","BCDA","CBAD","ADBC","BDAC","ACBD","CADB","DABC","DBCA"]), ADBC, 'Test 75');
test(rankTeams(["FGHIJ","IJFGH","JFGHI","HGIJF","IGHFJ","GFHIJ"]), IGFJH, 'Test 76');
test(rankTeams(["VWXYZ","YZWXV","ZWXYV","XWYZV","WZYXV","XYZWV","VWYZX","WVXYZ","XYZVW","YZXVW","ZXYVW","VZWXY","WXYVZ","XVZXY","YZVWX","ZVXYW","VXYWZ","XYWVZ","YWVZX","YVZXW","VZXWY","ZXWYV","XWYVZ"]), XVYZW, 'Test 77');
test(rankTeams(["ABCDE","ABCDE","ABCDE","EABCD","DEABC"]), AEDBC, 'Test 78');
test(rankTeams(["UV","VU","UV","UV","VU","UV","UV","VU","VU","VU","UV","VU","VU","VU","VU","VU","VU","VU","VU","VU"]), VU, 'Test 79');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

