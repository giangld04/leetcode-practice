// Test: 2381. Shifting Letters Ii
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { shiftingLetters } = require("./solution");

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

console.log("\n2381. Shifting Letters Ii\n");

test(shiftingLetters("world", [[0,4,0],[0,4,0],[0,4,0],[0,4,0]]), sknhz, 'Test 1');
test(shiftingLetters("abc", [[0,1,0],[1,2,1],[0,2,1]]), ace, 'Test 2');
test(shiftingLetters("xyz", [[0,2,0]]), wxy, 'Test 3');
test(shiftingLetters("abcdef", [[1,4,1],[2,3,0]]), accdff, 'Test 4');
test(shiftingLetters("aaa", [[0,2,1],[0,2,1],[0,2,1]]), ddd, 'Test 5');
test(shiftingLetters("hello", [[0,4,1],[1,3,0]]), iellp, 'Test 6');
test(shiftingLetters("hello", [[0,1,1],[1,2,1],[2,3,1],[3,4,1]]), ignnp, 'Test 7');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [[0,25,1]]), bcdefghijklmnopqrstuvwxyza, 'Test 8');
test(shiftingLetters("dztz", [[0,0,0],[1,1,1]]), catz, 'Test 9');
test(shiftingLetters("zyxwvutsrqponmlkjihgfedcba", [[0,25,0]]), yxwvutsrqponmlkjihgfedcbaz, 'Test 10');
test(shiftingLetters("a", [[0,0,1],[0,0,0]]), a, 'Test 11');
test(shiftingLetters("abcd", [[0,3,1],[1,2,0],[2,3,1]]), bbdf, 'Test 12');
test(shiftingLetters("zzz", [[0,2,0],[0,2,0],[0,2,0]]), www, 'Test 13');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [[0,25,0]]), zabcdefghijklmnopqrstuvwxy, 'Test 14');
test(shiftingLetters("hello", [[0,4,1]]), ifmmp, 'Test 15');
test(shiftingLetters("aquickbrownfox", [[0,3,1],[4,7,0],[8,10,1],[11,12,0],[13,14,1],[15,15,0]]), Error: list index out of range, 'Test 16');
test(shiftingLetters("shiftthisstring", [[0,5,1],[6,11,0],[12,18,1],[5,12,1],[6,18,0]]), Error: list index out of range, 'Test 17');
test(shiftingLetters("zzzzzzzzzz", [[0,4,0],[5,9,1],[0,9,1],[3,6,0]]), zzzyyaabbb, 'Test 18');
test(shiftingLetters("alphabet", [[0,0,1],[1,1,0],[2,2,1],[3,3,0],[4,4,1],[5,5,0],[5,5,1]]), bkqgbbet, 'Test 19');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [[0,25,1],[5,10,0],[15,20,1]]), bcdeffghijkmnoprstuvwwxyza, 'Test 20');
test(shiftingLetters("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,51,1],[10,40,0],[20,30,1],[30,40,0]]), bbccddeeffffgghhiijjllmmnnoopppoppqqrrsstvwwxxyyzzaa, 'Test 21');
test(shiftingLetters("programming", [[0,4,1],[1,5,0],[2,6,1],[3,7,0],[4,8,1],[5,9,0],[6,10,1],[7,11,0],[8,12,1]]), Error: list index out of range, 'Test 22');
test(shiftingLetters("abacax", [[0,5,1],[1,4,0],[2,3,1],[0,5,0]]), aaaczx, 'Test 23');
test(shiftingLetters("programming", [[0,9,1],[1,8,0],[2,7,1],[3,6,0],[4,5,1],[5,5,0],[6,6,1],[7,7,0],[8,8,1],[9,9,0]]), qrpgsanmjng, 'Test 24');
test(shiftingLetters("abcdefghij", [[0,9,0],[1,8,1],[2,7,0],[3,6,1],[4,5,0]]), zbbddeggii, 'Test 25');
test(shiftingLetters("mnopqrstuvwxyzabcdefghijkl", [[0,25,1],[5,15,0],[10,20,1],[15,25,0]]), nopqrrstuvxyzabbdefghhijkl, 'Test 26');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [[0,25,1],[0,25,1],[0,25,1],[0,25,0]]), cdefghijklmnopqrstuvwxyzab, 'Test 27');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [[0,25,1],[0,25,0],[0,25,1],[0,25,0]]), abcdefghijklmnopqrstuvwxyz, 'Test 28');
test(shiftingLetters("abababab", [[0,7,1],[1,6,0],[2,5,1],[3,4,0]]), bbbbacac, 'Test 29');
test(shiftingLetters("zzzzzzzzzz", [[0,9,1],[2,8,0],[4,6,1]]), aazzaaazza, 'Test 30');
test(shiftingLetters("xylophone", [[0,2,0],[3,5,1],[6,8,0],[9,10,1],[0,10,1]]), Error: list index out of range, 'Test 31');
test(shiftingLetters("thisisaverylongstringthatneedstomeshiftedproperly", [[0,5,1],[5,10,0],[10,15,1],[15,20,0],[20,25,1],[25,30,0],[30,35,1],[35,40,0],[40,45,1],[45,50,0],[50,55,1]]), Error: list index out of range, 'Test 32');
test(shiftingLetters("algorithm", [[0,2,1],[3,5,0],[6,8,1],[1,4,0],[2,3,1],[5,7,0],[7,8,1]]), blhnpgtio, 'Test 33');
test(shiftingLetters("abcdefghij", [[0,9,1],[0,9,0],[0,9,1],[0,9,0],[0,9,1],[0,9,0],[0,9,1],[0,9,0],[0,9,1],[0,9,0]]), abcdefghij, 'Test 34');
test(shiftingLetters("codingame", [[0,1,1],[2,3,0],[4,5,1],[6,7,0],[8,8,1],[0,8,0],[0,8,1],[0,8,0],[0,8,1]]), dpchohzlf, 'Test 35');
test(shiftingLetters("abacabadabacaba", [[0,14,1],[1,13,0],[2,12,1],[3,11,0],[4,10,1],[5,9,0]]), bbbcbbadabbcbbb, 'Test 36');
test(shiftingLetters("abcdefghij", [[0,4,1],[5,9,0],[0,4,0],[5,9,1],[0,9,1]]), bcdefghijk, 'Test 37');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [[0,25,1],[1,24,0],[2,23,1],[3,22,0],[4,21,1]]), bbddfghijklmnopqrstuvwwyya, 'Test 38');
test(shiftingLetters("zyxwvutsrqponmlkjihgfedcba", [[0,25,0],[5,10,1],[15,20,0]]), yxwvuutsrqpnmlkihgfeddcbaz, 'Test 39');
test(shiftingLetters("zzzzz", [[0,4,0],[0,4,0],[0,4,0],[0,4,0],[0,4,1]]), wwwww, 'Test 40');
test(shiftingLetters("abcdefghij", [[0,9,1],[1,8,0],[2,7,1],[3,6,0],[4,5,1]]), bbddfggiik, 'Test 41');
test(shiftingLetters("abcdefghij", [[0,9,1],[0,9,0],[0,9,1],[0,9,0],[0,9,1]]), bcdefghijk, 'Test 42');
test(shiftingLetters("zzzzzzzzzzzzzzzzzzzzzzzzzz", [[0,25,1],[5,15,0],[10,20,1]]), aaaaazzzzzaaaaaabbbbbaaaaa, 'Test 43');
test(shiftingLetters("abcdefghijklmnop", [[0,0,1],[1,1,1],[2,2,1],[3,3,1],[4,4,1],[5,5,1],[6,6,1],[7,7,1],[8,8,1],[9,9,1],[10,10,1],[11,11,1],[12,12,1],[13,13,1],[14,14,1],[15,15,1]]), bcdefghijklmnopq, 'Test 44');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [[0,12,1],[13,25,0],[0,25,1],[0,25,0],[0,25,1]]), cdefghijklmnonopqrstuvwxyz, 'Test 45');
test(shiftingLetters("alibabacloud", [[0,9,1],[2,4,0],[5,7,1],[8,11,0],[0,3,1],[6,9,0],[1,8,1],[2,7,0]]), cojcadbdlntc, 'Test 46');
test(shiftingLetters("xyz", [[0,2,1],[0,2,1],[0,2,0],[0,2,0]]), xyz, 'Test 47');
test(shiftingLetters("abcdefg", [[0,1,1],[1,2,1],[2,3,1],[3,4,1],[4,5,1],[5,6,1]]), bdefghh, 'Test 48');
test(shiftingLetters("abacabadabacaba", [[0,4,1],[5,9,0],[10,14,1],[0,14,0],[0,14,1]]), bcbdbazczabdbcb, 'Test 49');
test(shiftingLetters("hello world", [[0,4,1],[6,10,0],[3,8,1],[1,9,0],[0,10,1]]), jfmnqoworkd, 'Test 50');
test(shiftingLetters("example", [[0,6,1],[1,5,0],[2,4,1],[3,6,0]]), fxbmpke, 'Test 51');
test(shiftingLetters("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,25,1],[26,51,0],[52,77,1],[0,77,0],[0,77,1]]), Error: list index out of range, 'Test 52');
test(shiftingLetters("abcdefghij", [[0,9,1],[1,8,0],[2,7,1],[3,6,0],[4,5,1],[5,4,0],[6,3,1],[7,2,0],[8,1,1],[9,0,0]]), bcdefghijk, 'Test 53');
test(shiftingLetters("abcdefg", [[0,6,1],[1,5,0],[2,4,1],[3,3,0]]), bbddffh, 'Test 54');
test(shiftingLetters("hellozworld", [[0,4,1],[5,9,0],[6,10,1],[7,8,0],[9,10,1],[10,10,0]]), ifmmpywnqme, 'Test 55');
test(shiftingLetters("abcde", [[0,2,1],[3,4,0],[1,3,1],[0,1,0],[4,4,1],[2,2,0]]), acdde, 'Test 56');
test(shiftingLetters("xylophone", [[0,8,1],[1,7,0],[2,6,1],[3,5,0],[4,4,1]]), yymoqhpnf, 'Test 57');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [[0,25,1],[0,25,0],[0,25,1],[0,25,0],[0,25,1]]), bcdefghijklmnopqrstuvwxyza, 'Test 58');
test(shiftingLetters("programming", [[0,9,1],[4,8,0],[2,6,1],[1,7,0],[0,8,1]]), rsqisbnmjog, 'Test 59');
test(shiftingLetters("shiftmeplease", [[0,1,1],[2,3,0],[4,5,1],[6,7,0],[8,9,1],[10,11,0],[12,12,1]]), tiheundomfzrf, 'Test 60');
test(shiftingLetters("algorithms", [[0,9,1],[1,8,0],[2,7,1],[3,6,0],[4,5,1],[5,4,0],[6,3,1],[7,2,0],[8,1,1],[9,0,0]]), bmhpsjuint, 'Test 61');
test(shiftingLetters("quickbrownfox", [[0,12,1],[1,11,0],[2,10,1],[3,9,0],[4,8,1],[5,7,0]]), rujclbroxngoy, 'Test 62');
test(shiftingLetters("mnopqr", [[0,2,1],[3,5,0],[0,5,1],[1,4,0]]), oopopr, 'Test 63');
test(shiftingLetters("abcdefghijklmnop", [[0,15,1],[1,14,0],[2,13,1],[3,12,0],[4,11,1],[5,10,0],[6,9,1],[7,8,0]]), bbddffhhikkmmooq, 'Test 64');
test(shiftingLetters("zzzzzzzzzz", [[0,9,1],[1,8,0],[2,7,1],[3,6,0],[4,5,1]]), azazaazaza, 'Test 65');
test(shiftingLetters("mississippi", [[0,4,0],[1,3,1],[2,2,0],[3,5,1],[6,8,0],[7,7,1],[8,10,0],[9,9,1],[10,10,0]]), lirtitrinpg, 'Test 66');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [[0,0,0],[1,1,0],[2,2,0],[3,3,0],[4,4,0],[5,5,0],[6,6,0],[7,7,0],[8,8,0],[9,9,0],[10,10,0],[11,11,0],[12,12,0],[13,13,0],[14,14,0],[15,15,0],[16,16,0],[17,17,0],[18,18,0],[19,19,0],[20,20,0],[21,21,0],[22,22,0],[23,23,0],[24,24,1],[25,25,1]]), zabcdefghijklmnopqrstuvwza, 'Test 67');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [[0,25,1],[5,15,0],[10,20,1]]), bcdeffghijlmnopqstuvwwxyza, 'Test 68');
test(shiftingLetters("programming", [[0,8,1],[3,7,0],[2,5,1],[4,10,0],[1,9,1]]), qtrisbmmjnf, 'Test 69');
test(shiftingLetters("programmingisfun", [[0,4,1],[5,9,0],[10,14,1],[15,17,0],[0,17,1]]), Error: list index out of range, 'Test 70');
test(shiftingLetters("aabbccddeeffgg", [[0,2,1],[3,5,0],[6,8,1],[9,11,0],[12,14,1],[15,17,0]]), Error: list index out of range, 'Test 71');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [[0,0,1],[1,1,1],[2,2,1],[3,3,1],[4,4,1],[5,5,1],[6,6,1],[7,7,1],[8,8,1],[9,9,1],[10,10,1],[11,11,1],[12,12,1],[13,13,1],[14,14,1],[15,15,1],[16,16,1],[17,17,1],[18,18,1],[19,19,1],[20,20,1],[21,21,1],[22,22,1],[23,23,1],[24,24,1],[25,25,1]]), bcdefghijklmnopqrstuvwxyza, 'Test 72');
test(shiftingLetters("abcdefgh", [[0,0,0],[7,7,1],[2,2,1],[5,5,0],[3,3,1]]), zbdeeegi, 'Test 73');
test(shiftingLetters("a", [[0,0,1],[0,0,0],[0,0,1],[0,0,0]]), a, 'Test 74');
test(shiftingLetters("quickbrownfox", [[0,4,1],[5,9,0],[10,14,1],[4,14,0],[0,14,1]]), Error: list index out of range, 'Test 75');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [[0,25,1],[0,25,1],[0,25,1],[0,25,1],[0,25,1]]), fghijklmnopqrstuvwxyzabcde, 'Test 76');
test(shiftingLetters("abcdefg", [[0,1,0],[1,2,0],[2,3,0],[3,4,0],[4,5,0],[5,6,0]]), zzabcdf, 'Test 77');
test(shiftingLetters("mnopqr", [[0,0,1],[1,1,0],[2,2,1],[3,3,0],[4,4,1],[5,5,0]]), nmporq, 'Test 78');
test(shiftingLetters("abcdefghij", [[0,4,0],[5,9,1],[0,9,1],[1,8,0],[2,7,1],[3,6,0],[4,5,1]]), aaccehhjjl, 'Test 79');
test(shiftingLetters("abcdefghij", [[0,1,1],[2,3,0],[4,5,1],[6,7,0],[8,9,1]]), bcbcfgfgjk, 'Test 80');
test(shiftingLetters("mississippi", [[0,2,1],[2,4,0],[4,6,1],[6,8,0],[8,10,1]]), njsritshpqj, 'Test 81');
test(shiftingLetters("qwertyuiopasdfghjklzxcvbnm", [[0,9,1],[10,19,0],[20,25,1],[0,19,0],[10,25,1],[0,25,0],[0,25,1]]), qwertyuiopzrcefgijkyzexdpo, 'Test 82');
test(shiftingLetters("aaaabbbbcccc", [[0,3,1],[4,7,0],[8,11,1],[0,11,1]]), ccccbbbbeeee, 'Test 83');
test(shiftingLetters("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,51,1],[0,51,0],[0,51,1],[0,51,0],[0,51,1]]), bbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzaa, 'Test 84');
test(shiftingLetters("zyxwvutsrqponmlkjihgfedcba", [[0,13,0],[13,25,1],[0,25,0],[0,25,1]]), yxwvutsrqponmmmlkjihgfedcb, 'Test 85');
test(shiftingLetters("zyxwvutsrqponmlkjihgfedcba", [[0,25,0],[0,25,0],[0,25,0],[0,25,0],[0,25,0]]), utsrqponmlkjihgfedcbazyxwv, 'Test 86');
test(shiftingLetters("shiftthis", [[0,0,1],[1,1,0],[2,2,1],[3,3,0],[4,4,1],[5,5,0],[6,6,1],[7,7,0],[8,8,1]]), tgjeusiht, 'Test 87');
test(shiftingLetters("abcd", [[0,3,1],[0,2,0],[1,3,1],[1,2,0],[2,3,1]]), abdg, 'Test 88');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyza", [[0,25,1],[1,24,0],[2,23,1],[3,22,0]]), bbddefghijklmnopqrstuvwyyaa, 'Test 89');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [[0,0,1],[1,1,1],[2,2,1],[3,3,1],[4,4,1],[5,5,1],[6,6,1],[7,7,1],[8,8,1],[9,9,1],[10,10,1],[11,11,1],[12,12,1],[13,13,1],[14,14,1],[15,15,1],[16,16,1],[17,17,1],[18,18,1],[19,19,1],[20,20,1],[21,21,1],[22,22,1],[23,23,1],[24,24,0],[25,25,0]]), bcdefghijklmnopqrstuvwxyxy, 'Test 90');
test(shiftingLetters("python", [[0,5,1],[1,4,0],[2,3,1],[0,5,0],[1,4,1]]), pyuion, 'Test 91');
test(shiftingLetters("abcdefghij", [[0,0,1],[1,1,0],[2,2,1],[3,3,0],[4,4,1],[5,5,0],[6,6,1],[7,7,0],[8,8,1],[9,9,0]]), badcfehgji, 'Test 92');
test(shiftingLetters("zzzzzzzzzz", [[0,9,1],[0,9,1],[0,9,1],[0,9,1],[0,9,1],[0,9,1],[0,9,1],[0,9,1],[0,9,1],[0,9,1]]), jjjjjjjjjj, 'Test 93');
test(shiftingLetters("xyzxyzxyz", [[0,2,1],[3,5,0],[6,8,1],[0,5,1],[3,8,0],[0,8,1]]), abcxyzyza, 'Test 94');
test(shiftingLetters("aaaabbbb", [[0,3,1],[4,7,0],[2,5,1],[1,6,0]]), babbaaza, 'Test 95');
test(shiftingLetters("quickbrownfox", [[0,4,1],[5,9,0],[10,14,1],[0,9,0],[10,14,1],[0,14,1]]), Error: list index out of range, 'Test 96');
test(shiftingLetters("zzzzzzzz", [[0,7,1],[1,6,0],[2,5,1],[3,4,0]]), azazzaza, 'Test 97');
test(shiftingLetters("abcdefghij", [[0,4,1],[1,8,0],[2,7,1],[3,6,0],[4,5,1]]), bbddfffhhj, 'Test 98');
test(shiftingLetters("abcdabcdabcd", [[0,3,1],[4,7,0],[8,11,1],[0,11,0],[0,11,1]]), bcdezabcbcde, 'Test 99');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [[0,25,0],[1,24,0],[2,23,0],[3,22,0],[4,21,0],[5,20,0],[6,19,0],[7,18,0],[8,17,0],[9,16,0],[10,15,0],[11,14,0],[12,13,0],[13,12,1],[14,11,1],[15,10,1],[16,9,1],[17,8,1],[18,7,1],[19,6,1],[20,5,1],[21,4,1],[22,3,1],[23,2,1],[24,1,1],[25,0,1]]), zyxwvutsrqponoruxadgjmpsvy, 'Test 100');
test(shiftingLetters("zzzzzzzzzz", [[0,9,1],[0,9,0],[1,8,1],[1,8,0],[2,7,1],[2,7,0],[3,6,1],[3,6,0],[4,5,1],[4,5,0]]), zzzzzzzzzz, 'Test 101');
test(shiftingLetters("abcdefghijklmnopqrstuvwxyz", [[0,0,1],[1,1,0],[2,2,1],[3,3,0],[4,4,1],[5,5,0],[6,6,1],[7,7,0],[8,8,1],[9,9,0],[10,10,1],[11,11,0],[12,12,1],[13,13,0],[14,14,1],[15,15,0],[16,16,1],[17,17,0],[18,18,1],[19,19,0],[20,20,1],[21,21,0],[22,22,1],[23,23,0],[24,24,1],[25,25,0]]), badcfehgjilknmporqtsvuxwzy, 'Test 102');
test(shiftingLetters("xyzabc", [[0,2,1],[3,5,0],[1,4,1],[2,5,0],[0,5,1]]), zbbabb, 'Test 103');
test(shiftingLetters("programming", [[0,3,1],[4,8,0],[6,10,1],[7,9,0],[1,5,1]]), qtqiramlhnh, 'Test 104');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

