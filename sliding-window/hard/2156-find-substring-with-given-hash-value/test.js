// Test: 2156. Find Substring With Given Hash Value
// 98 test cases from LeetCodeDataset
// Run: node test.js

const { subStrHash } = require("./solution");

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

console.log("\n2156. Find Substring With Given Hash Value\n");

test(subStrHash("zxcvbnm", 10, 1000000007, 4, 807311072), vbnm, 'Test 1');
test(subStrHash("abracadabra", 5, 11, 3, 4), dab, 'Test 2');
test(subStrHash("zzzzzzzzzz", 29, 1000000007, 4, 78608631), zzzz, 'Test 3');
test(subStrHash("leetcode", 7, 20, 2, 0), ee, 'Test 4');
test(subStrHash("fbxzaad", 31, 100, 3, 32), fbx, 'Test 5');
test(subStrHash("abcdefghijklmnopqrstuvwxyz", 26, 101, 5, 53), vwxyz, 'Test 6');
test(subStrHash("a", 1, 1, 1, 0), a, 'Test 7');
test(subStrHash("zaz", 26, 29, 2, 27), az, 'Test 8');
test(subStrHash("a", 13, 97, 1, 1), a, 'Test 9');
test(subStrHash("abcdefghijklmnopqrstuvwxyz", 13, 50, 5, 37), klmno, 'Test 10');
test(subStrHash("abcde", 2, 11, 3, 7), cde, 'Test 11');
test(subStrHash("a", 5, 13, 1, 1), a, 'Test 12');
test(subStrHash("mmcp", 13, 457, 2, 33), cp, 'Test 13');
test(subStrHash("thisisaverylongstringthatweneedtofindasubstringwithagivenhashvalue", 5, 1000000009, 12, 543), venhashvalue, 'Test 14');
test(subStrHash("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 29, 101, 20, 95), zzzzzzzzzzzzzzzzzzzz, 'Test 15');
test(subStrHash("hellothereeveryone", 37, 101, 6, 74), eryone, 'Test 16');
test(subStrHash("complexityisimportantinbigdatatechnology", 19, 1000000009, 8, 543210987), chnology, 'Test 17');
test(subStrHash("zxcvbnmasdfghjklqwertyuiop", 29, 1000000007, 6, 563872), tyuiop, 'Test 18');
test(subStrHash("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 19, 1000000007, 26, 267973410), abcdefghijklmnopqrstuvwxyz, 'Test 19');
test(subStrHash("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 17, 1000000009, 7, 123456789), wxxyyzz, 'Test 20');
test(subStrHash("abababababababababababababababababababababababababab", 5, 1000000003, 11, 543210987), bababababab, 'Test 21');
test(subStrHash("a", 7, 13, 1, 1), a, 'Test 22');
test(subStrHash("mississippi", 19, 1000000007, 4, 683), ippi, 'Test 23');
test(subStrHash("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 11, 79, 20, 10), zzzzzzzzzzzzzzzzzzzz, 'Test 24');
test(subStrHash("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 19, 83, 15, 28), abcabcabcabcabc, 'Test 25');
test(subStrHash("lkjihgfedcbazyxwvutsrqponml", 41, 1000000009, 14, 102474831), yxwvutsrqponml, 'Test 26');
test(subStrHash("ababababababababababababababababababababababababababababababab", 11, 1000000007, 10, 543210987), ababababab, 'Test 27');
test(subStrHash("powerrangers", 29, 97, 4, 53), gers, 'Test 28');
test(subStrHash("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 17, 53, 10, 49), qrstuvwxyz, 'Test 29');
test(subStrHash("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij", 2, 13, 8, 7), bcdefghi, 'Test 30');
test(subStrHash("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 999999937, 1000000007, 10000, 123456789), Error: string index out of range, 'Test 31');
test(subStrHash("mmmmmmmmmabcdefghimnopqrstuvwxyz", 37, 1000000007, 8, 987654321), stuvwxyz, 'Test 32');
test(subStrHash("thisisaverylongstringthatweneedtofindthesubstringwiththespecifiedhashvalue", 13, 1000000007, 20, 345234657), hespecifiedhashvalue, 'Test 33');
test(subStrHash("thisisjustanexampleofalongsstringwithseveralhashvalues", 3, 100, 4, 15), lues, 'Test 34');
test(subStrHash("qponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyz", 43, 1000000007, 22, 872889924), efghijklmnopqrstuvwxyz, 'Test 35');
test(subStrHash("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 37, 100000007, 50, 876543210), bbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz, 'Test 36');
test(subStrHash("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba", 43, 1000000007, 25, 54321), yxwvutsrqponmlkjihgfedcba, 'Test 37');
test(subStrHash("xylophonepianoxylophonepianoxylophonepianoxyloph", 23, 1000000009, 9, 765432109), anoxyloph, 'Test 38');
test(subStrHash("abcdefghijkabcdefghijkabcdefghijk", 19, 1000000009, 11, 123456789), abcdefghijk, 'Test 39');
test(subStrHash("mississippiissi", 5, 1000000007, 7, 432109876), ppiissi, 'Test 40');
test(subStrHash("bcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbc", 17, 1000000007, 12, 617980928), bcbcbcbcbcbc, 'Test 41');
test(subStrHash("aquickbrownfoxjumpsoverthelazydog", 37, 1000000007, 15, 756839574), soverthelazydog, 'Test 42');
test(subStrHash("mississippiisaverypopularstring", 23, 107, 9, 62), larstring, 'Test 43');
test(subStrHash("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij", 29, 999983, 9, 456789), bcdefghij, 'Test 44');
test(subStrHash("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10, 10007, 10, 7007), zzzzzzzzzz, 'Test 45');
test(subStrHash("abacabadabacaba", 10, 61, 5, 31), acaba, 'Test 46');
test(subStrHash("programmingisfun", 5, 1000000009, 8, 77777777), ingisfun, 'Test 47');
test(subStrHash("thisisaverylongstringthatwillbeusedtohashandfindthesubstring", 19, 1000003, 12, 876543), thesubstring, 'Test 48');
test(subStrHash("xyzabcxyz", 17, 101, 4, 70), cxyz, 'Test 49');
test(subStrHash("aquickbrownfoxjumpsoverthelazydog", 11, 997, 12, 896), erthelazydog, 'Test 50');
test(subStrHash("banana", 5, 10007, 2, 22), na, 'Test 51');
test(subStrHash("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba", 19, 47, 15, 29), onmlkjihgfedcba, 'Test 52');
test(subStrHash("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 31, 1000000007, 5, 35852459), zzzzz, 'Test 53');
test(subStrHash("kjfslafjslkafjslkfjslkfjlskjflskjflskfjslkfjslkfjslk", 11, 1000000001, 8, 987654321), slkfjslk, 'Test 54');
test(subStrHash("zyxwvutsrqponmlkjihgfedcba", 13, 1000000007, 20, 689648594), tsrqponmlkjihgfedcba, 'Test 55');
test(subStrHash("abcdefghijklmnopqrstuvwxyzzzzzzzzzzzzzzzzzzzzzzzzzz", 23, 999983, 15, 123456), zzzzzzzzzzzzzzz, 'Test 56');
test(subStrHash("quickbrownfoxjumpsoverthelazydog", 41, 1000000009, 6, 345678), azydog, 'Test 57');
test(subStrHash("thisisaverylongstringthatcontainsmanywordsandcharactersforhashing", 41, 1000000009, 18, 897530987), aractersforhashing, 'Test 58');
test(subStrHash("thepowerofhashing", 17, 10007, 9, 9999), ofhashing, 'Test 59');
test(subStrHash("racecar", 17, 1000000009, 3, 113), car, 'Test 60');
test(subStrHash("abcdefghijklmnopqrstuvwxyza", 23, 1000000009, 21, 850494334), ghijklmnopqrstuvwxyza, 'Test 61');
test(subStrHash("racecarannakayak", 37, 109, 7, 87), nakayak, 'Test 62');
test(subStrHash("rollinghashingisaveryefficientalgorithm", 29, 1000000007, 10, 987654321), talgorithm, 'Test 63');
test(subStrHash("hashfunctionexample", 31, 1000000007, 13, 234567890), nctionexample, 'Test 64');
test(subStrHash("abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde", 7, 13, 5, 5), eabcd, 'Test 65');
test(subStrHash("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghij", 31, 1000000009, 10, 109876543), abcdefghij, 'Test 66');
test(subStrHash("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 27, 10007, 26, 4750), abcdefghijklmnopqrstuvwxyz, 'Test 67');
test(subStrHash("thisproblemisfunandchallengingandfunandchallenging", 41, 1000000011, 14, 543210987), andchallenging, 'Test 68');
test(subStrHash("jqwertyuiopasdfghjklzxcvbnmnbvcxzlkjhgfdsapoiuytrewq", 17, 1000000009, 15, 765432109), gfdsapoiuytrewq, 'Test 69');
test(subStrHash("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1000000007, 1000000009, 10, 999999939), zzzzzzzzzz, 'Test 70');
test(subStrHash("acacacacacacacacacacacacacacacacacacacacacacacacacacac", 19, 1000000007, 12, 876543210), acacacacacac, 'Test 71');
test(subStrHash("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1000000007, 1000000009, 10000, 123456789), Error: string index out of range, 'Test 72');
test(subStrHash("loremipsumdolorsitametloremipsumdolorsitametlorem", 43, 1000000017, 15, 432109876), lorsitametlorem, 'Test 73');
test(subStrHash("mnopqrstuvwxyzaabcdefghijklmnopqr", 37, 1000000007, 25, 519164833), uvwxyzaabcdefghijklmnopqr, 'Test 74');
test(subStrHash("thesoundofsilencethesoundofsilencethesoundofsilence", 37, 1000000013, 13, 654321098), oundofsilence, 'Test 75');
test(subStrHash("ababababababababababababababababababababababababab", 23, 29, 7, 17), bababab, 'Test 76');
test(subStrHash("xyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzxy", 31, 1000000009, 15, 987654321), zzzzzzzzzzzzzxy, 'Test 77');
test(subStrHash("aaaaabbbbbccccdddddeeeeefffffggggghhhhiiiiijjjjjkkkkklllllmmmmmnnnnnooooo", 11, 100000007, 13, 111222), mmmnnnnnooooo, 'Test 78');
test(subStrHash("thisisaverylongstringthatshouldworkwiththehashingfunctioncorrectly", 13, 107, 25, 67), ehashingfunctioncorrectly, 'Test 79');
test(subStrHash("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 97, 10007, 6, 10001), cdabcd, 'Test 80');
test(subStrHash("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 17, 89, 10, 67), qrstuvwxyz, 'Test 81');
test(subStrHash("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 7, 1000000009, 15, 324434711), sttuuvvwwxxyyzz, 'Test 82');
test(subStrHash("xyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzz", 11, 97, 6, 76), xyzzxy, 'Test 83');
test(subStrHash("abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde", 5, 17, 14, 11), abcdeabcdeabcd, 'Test 84');
test(subStrHash("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 13, 101, 10, 97), qrstuvwxyz, 'Test 85');
test(subStrHash("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 13, 101, 10, 60), xyzabcdefg, 'Test 86');
test(subStrHash("hashingisawesome", 37, 1000000007, 7, 88888888), awesome, 'Test 87');
test(subStrHash("abcdefghijklmnopqrstuvwxyz", 23, 41, 7, 35), cdefghi, 'Test 88');
test(subStrHash("thefastbrownfoxjumpedoverthelazydog", 43, 1000000007, 5, 234567), zydog, 'Test 89');
test(subStrHash("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba", 26, 1000000009, 26, 987654321), zyxwvutsrqponmlkjihgfedcba, 'Test 90');
test(subStrHash("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 1000000007, 1000000009, 10, 876543210), qrstuvwxyz, 'Test 91');
test(subStrHash("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 31, 1000000007, 26, 680151233), abcdefghijklmnopqrstuvwxyz, 'Test 92');
test(subStrHash("onetwothreefourfivesixseveneightnineseveneightsixfiv foureventhreetwooneonetwothreefourfivesix", 13, 103, 8, 45), veneight, 'Test 93');
test(subStrHash("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 5, 1000000009, 10, 740006228), cabcabcabc, 'Test 94');
test(subStrHash("aquickbrownfoxjumpsoverthelazydog", 33, 1000000007, 4, 123), ydog, 'Test 95');
test(subStrHash("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 5, 1000, 7, 500), wxxyyzz, 'Test 96');
test(subStrHash("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 31, 1000000007, 15, 123456789), zzzzzzzzzzzzzzz, 'Test 97');
test(subStrHash("abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef", 41, 997, 12, 500), abcdefabcdef, 'Test 98');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

