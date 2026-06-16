// Test: 3210. Find The Encrypted String
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { getEncryptedString } = require("./solution");

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

console.log("\n3210. Find The Encrypted String\n");

test(getEncryptedString("hello", 10), hello, 'Test 1');
test(getEncryptedString("abc", 2), cab, 'Test 2');
test(getEncryptedString("hello", 7), llohe, 'Test 3');
test(getEncryptedString("abcdef", 2), cdefab, 'Test 4');
test(getEncryptedString("world", 5), world, 'Test 5');
test(getEncryptedString("dart", 3), tdar, 'Test 6');
test(getEncryptedString({"s": "dart", "k": 3}), Error: Solution.getEncryptedString[] missing 2 required positional arguments: 's' and 'k', 'Test 7');
test(getEncryptedString("aaa", 1), aaa, 'Test 8');
test(getEncryptedString({"s": "abc", "k": 2}), Error: Solution.getEncryptedString[] missing 2 required positional arguments: 's' and 'k', 'Test 9');
test(getEncryptedString("abcxyz", 10), yzabcx, 'Test 10');
test(getEncryptedString({"s": "xyz", "k": 4}), Error: Solution.getEncryptedString[] missing 2 required positional arguments: 's' and 'k', 'Test 11');
test(getEncryptedString({"s": "hello", "k": 5}), Error: Solution.getEncryptedString[] missing 2 required positional arguments: 's' and 'k', 'Test 12');
test(getEncryptedString({"s": "aaa", "k": 1}), Error: Solution.getEncryptedString[] missing 2 required positional arguments: 's' and 'k', 'Test 13');
test(getEncryptedString("xyz", 5), zxy, 'Test 14');
test(getEncryptedString("hello", 2), llohe, 'Test 15');
test(getEncryptedString("z", 10000), z, 'Test 16');
test(getEncryptedString("wraparound", 15), roundwrapa, 'Test 17');
test(getEncryptedString("jumps", 30), jumps, 'Test 18');
test(getEncryptedString("cryptography", 20), aphycryptogr, 'Test 19');
test(getEncryptedString("securedata", 1234), redatasecu, 'Test 20');
test(getEncryptedString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 1), abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzza, 'Test 21');
test(getEncryptedString("abcdefg", 1000), gabcdef, 'Test 22');
test(getEncryptedString("cryptography", 11), ycryptograph, 'Test 23');
test(getEncryptedString("mfvnhg", 9999), nhgmfv, 'Test 24');
test(getEncryptedString("alibabacloud", 15), babacloudali, 'Test 25');
test(getEncryptedString("abacaxi", 1), bacaxia, 'Test 26');
test(getEncryptedString("zyxwvutsrqponmlkjihgfedcba", 13), mlkjihgfedcbazyxwvutsrqpon, 'Test 27');
test(getEncryptedString("cryptography", 7), raphycryptog, 'Test 28');
test(getEncryptedString("programming", 15), rammingprog, 'Test 29');
test(getEncryptedString("zebra", 3), razeb, 'Test 30');
test(getEncryptedString("quickbrownfox", 12), xquickbrownfo, 'Test 31');
test(getEncryptedString("programming", 10), gprogrammin, 'Test 32');
test(getEncryptedString("cryptography", 8), aphycryptogr, 'Test 33');
test(getEncryptedString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 20), kkllmmnnooppqqrrssttuuvvwwxxyyzzaabbccddeeffgghhiijj, 'Test 34');
test(getEncryptedString("abcdefghijklmnopqrstuvwxyz", 25), zabcdefghijklmnopqrstuvwxy, 'Test 35');
test(getEncryptedString("quickbrownfox", 8), wnfoxquickbro, 'Test 36');
test(getEncryptedString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 50), zzaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyy, 'Test 37');
test(getEncryptedString("abcdabcd", 4), abcdabcd, 'Test 38');
test(getEncryptedString("overthelazydog", 28), overthelazydog, 'Test 39');
test(getEncryptedString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1000), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 40');
test(getEncryptedString("thequickbrownfoxjumpsoverthelazydog", 13), foxjumpsoverthelazydogthequickbrown, 'Test 41');
test(getEncryptedString("python", 1), ythonp, 'Test 42');
test(getEncryptedString("cryptography", 15), ptographycry, 'Test 43');
test(getEncryptedString("pythonprogramming", 25), ogrammingpythonpr, 'Test 44');
test(getEncryptedString("abcdefghijklmnopqrstuvwxyz", 27), bcdefghijklmnopqrstuvwxyza, 'Test 45');
test(getEncryptedString("thesecretcode", 20), etcodethesecr, 'Test 46');
test(getEncryptedString("mississippi", 9), pimississip, 'Test 47');
test(getEncryptedString("abcabcabc", 9), abcabcabc, 'Test 48');
test(getEncryptedString("programming", 97), ngprogrammi, 'Test 49');
test(getEncryptedString("programming", 7), mingprogram, 'Test 50');
test(getEncryptedString("zyxwvutsrqponmlkjihgfedcba", 27), yxwvutsrqponmlkjihgfedcbaz, 'Test 51');
test(getEncryptedString("thisisatest", 13), isisatestth, 'Test 52');
test(getEncryptedString("hello world", 10), dhello worl, 'Test 53');
test(getEncryptedString("alibabacloud", 100), abacloudalib, 'Test 54');
test(getEncryptedString("zebra", 10), zebra, 'Test 55');
test(getEncryptedString("thequickbrownfoxjumpsoverthelazydog", 10), ownfoxjumpsoverthelazydogthequickbr, 'Test 56');
test(getEncryptedString("repeatedcharactersssssss", 7), dcharactersssssssrepeate, 'Test 57');
test(getEncryptedString("zabcdefghijklmnopqrstuvwxyz", 26), zzabcdefghijklmnopqrstuvwxy, 'Test 58');
test(getEncryptedString("abracadabra", 7), abraabracad, 'Test 59');
test(getEncryptedString("quickbrownfox", 50), oxquickbrownf, 'Test 60');
test(getEncryptedString("mississippi", 26), issippimiss, 'Test 61');
test(getEncryptedString("aabbccddeeff", 5), cddeeffaabbc, 'Test 62');
test(getEncryptedString("world", 500), world, 'Test 63');
test(getEncryptedString("hello", 100), hello, 'Test 64');
test(getEncryptedString("hello_world", 4), o_worldhell, 'Test 65');
test(getEncryptedString("pneumonoultramicroscopicsilicovolcanoconiosis", 26), licovolcanoconiosispneumonoultramicroscopicsi, 'Test 66');
test(getEncryptedString("abcdefg", 10000), efgabcd, 'Test 67');
test(getEncryptedString("hello", 1000), hello, 'Test 68');
test(getEncryptedString("programmingisfun", 10), gisfunprogrammin, 'Test 69');
test(getEncryptedString("algorithms", 50), algorithms, 'Test 70');
test(getEncryptedString("mississippi", 3), sissippimis, 'Test 71');
test(getEncryptedString("abcdefghijklmnopqrstuvwxyz", 1), bcdefghijklmnopqrstuvwxyza, 'Test 72');
test(getEncryptedString("programming", 5), ammingprogr, 'Test 73');
test(getEncryptedString("qwen", 50), enqw, 'Test 74');
test(getEncryptedString("thisisateststring", 50), gthisisateststrin, 'Test 75');
test(getEncryptedString("cryptography", 4), tographycryp, 'Test 76');
test(getEncryptedString("cycliccycliccycliccyclic", 50), cliccycliccycliccycliccy, 'Test 77');
test(getEncryptedString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 3), bccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzaab, 'Test 78');
test(getEncryptedString("abcdefg", 105), abcdefg, 'Test 79');
test(getEncryptedString("abacaxi", 7), abacaxi, 'Test 80');
test(getEncryptedString("aabbccddeeff", 123), bccddeeffaab, 'Test 81');
test(getEncryptedString("supercalifragilisticexpialidocious", 9), fragilisticexpialidocioussupercali, 'Test 82');
test(getEncryptedString("quickbrownfoxjumpsoverthelazydog", 13), jumpsoverthelazydogquickbrownfox, 'Test 83');
test(getEncryptedString("hello world", 15), o worldhell, 'Test 84');
test(getEncryptedString("thisisaverylongstringthatweneedtocrypt", 15), stringthatweneedtocryptthisisaverylong, 'Test 85');
test(getEncryptedString("repeatedcharacters", 50), tersrepeatedcharac, 'Test 86');
test(getEncryptedString("hello", 10000), hello, 'Test 87');
test(getEncryptedString("abcdefghij", 30), abcdefghij, 'Test 88');
test(getEncryptedString("zyxwvutsrqponmlkjihgfedcba", 3), wvutsrqponmlkjihgfedcbazyx, 'Test 89');
test(getEncryptedString("abcdefg", 10), defgabc, 'Test 90');
test(getEncryptedString("abcdefghijklmnopqrstuvwxyz", 26), abcdefghijklmnopqrstuvwxyz, 'Test 91');
test(getEncryptedString("qwen", 12), qwen, 'Test 92');
test(getEncryptedString("ab", 9999), ba, 'Test 93');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

