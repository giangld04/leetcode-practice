// Test: 1898. Maximum Number Of Removable Characters
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { maximumRemovals } = require("./solution");

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

console.log("\n1898. Maximum Number Of Removable Characters\n");

test(maximumRemovals("pqrstu", "psu", [5,4,3,2,1,0]), 0, 'Test 1');
test(maximumRemovals("abcdefghij", "acegi", [0,1,2,3,4,5,6,7,8,9]), 0, 'Test 2');
test(maximumRemovals("deeddeede", "dee", [5,3,4,6]), 4, 'Test 3');
test(maximumRemovals("deeedbbcccbdaa", "ddccbb", [8,2,3,0,7]), 0, 'Test 4');
test(maximumRemovals("abcdefghijklmnopqrstuvwxyz", "acegikmoqsuwy", [1,3,5,7,9,11,13,15,17,19,21,23,25]), 13, 'Test 5');
test(maximumRemovals("zzzzzzzzzz", "zz", [1,3,5,7]), 4, 'Test 6');
test(maximumRemovals("aaaabbbb", "ab", [2,3,4,5]), 4, 'Test 7');
test(maximumRemovals("abcdef", "abc", [5,4,3,2,1,0]), 3, 'Test 8');
test(maximumRemovals("aabcbcb", "abc", [3,1,0,4]), 2, 'Test 9');
test(maximumRemovals("abcdxyz", "ad", [0,1,2,3,4,5,6]), 0, 'Test 10');
test(maximumRemovals("abcabcabc", "abc", [0,9,5,7]), Error: list assignment index out of range, 'Test 11');
test(maximumRemovals("abcacb", "ab", [3,1,0]), 2, 'Test 12');
test(maximumRemovals("abcdefghijklmnopqrstuvwxyz", "acegikmoqsuwy", [0,2,4,6,8,10,12,14,16,18,20,22,24]), 0, 'Test 13');
test(maximumRemovals("ababababab", "aaaa", [0,2,4,6,8]), 1, 'Test 14');
test(maximumRemovals("mississippi", "issi", [0,1,2,3,4,5,6,7,8,9,10]), 4, 'Test 15');
test(maximumRemovals("zpqom", "z", [0,1,2,3,4]), 0, 'Test 16');
test(maximumRemovals("abcab", "abc", [0,1,2,3,4]), 0, 'Test 17');
test(maximumRemovals("xyz", "xyz", [0,1,2]), 0, 'Test 18');
test(maximumRemovals("abcdef", "af", [1,2,3,4]), 4, 'Test 19');
test(maximumRemovals("abcbddddd", "abcd", [3,2,1,4,5,6]), 1, 'Test 20');
test(maximumRemovals("zazbzczdzezfzgzhzi", "abcdefg", [0,2,4,6,8,10,12,14,16]), 9, 'Test 21');
test(maximumRemovals("pythonprogramming", "ppn", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]), 0, 'Test 22');
test(maximumRemovals("thisisaverylongstringthatweneedtoremovesomecharactersfrom", "thisisalong", [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 0, 'Test 23');
test(maximumRemovals("mississippi", "miss", [0,1,2,3,4,5,6,7,8,9,10]), 0, 'Test 24');
test(maximumRemovals("onetwothreefourfivesixseveneightnine", "onefivesix", [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41]), 0, 'Test 25');
test(maximumRemovals("abcdefghijklnmopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 0, 'Test 26');
test(maximumRemovals("abracadabra", "aca", [1,3,5,7,9,10]), 5, 'Test 27');
test(maximumRemovals("aaaaaaaaaaaaaaaaaaaaaaaaaaab", "aaaab", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), Error: list assignment index out of range, 'Test 28');
test(maximumRemovals("leetcodeleetcodeleetcode", "leetcode", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]), 16, 'Test 29');
test(maximumRemovals("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklnopqrstuvwxyz", [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59]), Error: list assignment index out of range, 'Test 30');
test(maximumRemovals("qwertyuiopasdfghjklzxcvbnm", "qwerty", [0,1,2,3,4,5,10,11,12,13,14,15,20,21,22,23,24,25,30,31,32,33,34,35]), 0, 'Test 31');
test(maximumRemovals("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzz", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]), 30, 'Test 32');
test(maximumRemovals("abracadabra", "aa", [0,2,4,6,8,10]), 6, 'Test 33');
test(maximumRemovals("thisisaverylongstringtocheckfortheedgecases", "this", [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96]), Error: list assignment index out of range, 'Test 34');
test(maximumRemovals("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklmnopqrstuvxyz", [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70]), Error: list assignment index out of range, 'Test 35');
test(maximumRemovals("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzz", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]), 29, 'Test 36');
test(maximumRemovals("abcdefghijabcdefghijabcdefghij", "acegi", [0,3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,80,81,82,83,84,85,86,87,88,89]), Error: list assignment index out of range, 'Test 37');
test(maximumRemovals("abacabadabacaba", "abc", [2, 5, 8, 11, 14]), 5, 'Test 38');
test(maximumRemovals("abcdefghijklm", "abc", [0,1,2,3,4,5,6,7,8,9,10]), 0, 'Test 39');
test(maximumRemovals("zzzzzzzzzz", "zz", [1,3,5,7,9]), 5, 'Test 40');
test(maximumRemovals("thequickbrownfoxjumpsoverthelazydog", "quickbrownfox", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), 3, 'Test 41');
test(maximumRemovals("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklmnopqrstuvwxyz", [50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), 2, 'Test 42');
test(maximumRemovals("zzzzzzzzzzzzzzzzzzzz", "zzzzz", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 15, 'Test 43');
test(maximumRemovals("abcdefghijklmnopqrstuvwxyz", "az", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]), 0, 'Test 44');
test(maximumRemovals("abcdeffedcba", "abcdef", [0,1,2,3,4,5,6,7,8,9,10,11]), 0, 'Test 45');
test(maximumRemovals("mississippi", "issi", [2,3,4,5,6,7,8,9,10]), 3, 'Test 46');
test(maximumRemovals("abcdefghijklmno", "def", [0,1,2,3,4,5,6,7,8,9,10,11,12,13]), 3, 'Test 47');
test(maximumRemovals("zzzzzzzzzzzzzzzzzzzz", "zzzz", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 16, 'Test 48');
test(maximumRemovals("pneumonoultramicroscopicsilicovolcanoconiosis", "pus", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]), 7, 'Test 49');
test(maximumRemovals("aaaaaaabbbbbbb", "aabbb", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 5, 'Test 50');
test(maximumRemovals("abcdefghijklmnop", "mnop", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 12, 'Test 51');
test(maximumRemovals("abcdefgabcdefgabcdefg", "abcdefgabcdefg", [7, 14, 21, 28, 35, 42, 49]), Error: list assignment index out of range, 'Test 52');
test(maximumRemovals("xyxzyzyzyxzyzyzyx", "xyz", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 9, 'Test 53');
test(maximumRemovals("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "acegikmoqsuwy", [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59]), Error: list assignment index out of range, 'Test 54');
test(maximumRemovals("banana", "ban", [0, 2, 4]), 0, 'Test 55');
test(maximumRemovals("aaaabbbbccccdddd", "abcd", [3,7,11,15]), 4, 'Test 56');
test(maximumRemovals("abracadabra", "aca", [1,3,5,7,9]), 5, 'Test 57');
test(maximumRemovals("banana", "ban", [0,1,2,3,4,5]), 0, 'Test 58');
test(maximumRemovals("ababababababababa", "aaa", [1,3,5,7,9,11,13,15,17]), Error: list assignment index out of range, 'Test 59');
test(maximumRemovals("abcdefffffghijklmnopqrstuvwxyz", "acegikmoqsuwy", [5,5,5,5,5,5,5,5,5,5,10,10,10,10,10,10,10,10,10,10,15,15,15,15,15,15,15,15,15,15,20,20,20,20,20,20,20,20,20,20]), 10, 'Test 60');
test(maximumRemovals("aabbccddeeffgghhii", "abcdefghi", [1, 3, 5, 7, 9, 11, 13, 15, 17]), 9, 'Test 61');
test(maximumRemovals("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklmnopqrstuvwxzy", [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38]), 0, 'Test 62');
test(maximumRemovals("abcdabcdabcd", "abc", [0,1,2,3,4,5,6,7,8,9,10,11]), 8, 'Test 63');
test(maximumRemovals("abcdabcdabcdabcdabcd", "abcdabcdabcd", [4, 8, 12, 16, 20, 24, 28, 32, 36]), Error: list assignment index out of range, 'Test 64');
test(maximumRemovals("thisisateststring", "tst", [1,3,5,7,9,11,13,15,17,19,20,21,22,23,24]), 5, 'Test 65');
test(maximumRemovals("xyzxyzxyzxyzxyzxyz", "xyz", [0,3,6,9,12,15,18,1,4,7,10,13,16,19,2,5,8,11,14,17,20]), Error: list assignment index out of range, 'Test 66');
test(maximumRemovals("qwertyuiopasdfghjklzxcvbnm", "qz", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 0, 'Test 67');
test(maximumRemovals("abcabcabcabcabc", "abcabcabc", [1, 3, 5, 7, 9, 11, 13, 15, 17]), 4, 'Test 68');
test(maximumRemovals("xyzzxyzzxyzz", "xyz", [0,2,4,6,8,10]), 4, 'Test 69');
test(maximumRemovals("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zz", [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254]), Error: list assignment index out of range, 'Test 70');
test(maximumRemovals("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklmnopqrstuvwxyz", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]), 1, 'Test 71');
test(maximumRemovals("aaaaaaaaaaa", "aaaaa", [1,3,5,7,9]), 5, 'Test 72');
test(maximumRemovals("abcdabcdabcdabcdabcdabcd", "abcd", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]), 20, 'Test 73');
test(maximumRemovals("abababababababababab", "aabbaabb", [0,2,4,6,8,10,12,14,16,18]), 4, 'Test 74');
test(maximumRemovals("hellohellohellohello", "heo", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]), 15, 'Test 75');
test(maximumRemovals("xyzzxyzzxyzz", "xyz", [1,3,5,7,9,11]), 4, 'Test 76');
test(maximumRemovals("mississippi", "issi", [3,1,0,4,5,2,6,7,8,9,10]), 3, 'Test 77');
test(maximumRemovals("ababababababababababababababababab", "aaaaaaa", [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59]), Error: list assignment index out of range, 'Test 78');
test(maximumRemovals("xyzzxyzzxyzz", "xyz", [1, 4, 7, 10, 13, 16]), Error: list assignment index out of range, 'Test 79');
test(maximumRemovals("abracadabra", "ac", [0,1,2,3,4,5,6,7,8,9,10]), 3, 'Test 80');
test(maximumRemovals("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzz", [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59]), Error: list assignment index out of range, 'Test 81');
test(maximumRemovals("bcaabcbabcabc", "abc", [0,1,2,3,4,5,6,7,8,9,10,11]), 10, 'Test 82');
test(maximumRemovals("zzzzzzzzzzzzzzzzzzzz", "zzz", [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 10, 'Test 83');
test(maximumRemovals("abcdefghijklmnopqrstuvwxyz", "bdfhjlnprtvxz", [1,5,9,13,17,21,25]), 0, 'Test 84');
test(maximumRemovals("abcdeffedcba", "abcdef", [0,2,4,6,8,10]), 0, 'Test 85');
test(maximumRemovals("findinganagrams", "anag", [1,3,5,7,9,11,13,15,17]), 3, 'Test 86');
test(maximumRemovals("xyzxyzxyzxyzxyzxyz", "xyz", [0,3,6,9,12,15,18,21,24,27,1,4,7,10,13,16,19,22,25,28,2,5,8,11,14,17,20,23,26,29]), Error: list assignment index out of range, 'Test 87');
test(maximumRemovals("mississippi", "miss", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0, 'Test 88');
test(maximumRemovals("abcdefghijklmnopqrstuvwxyz", "adgjmpsvy", [0,2,4,6,8,10,12,14,16,18,20,22,24]), 0, 'Test 89');
test(maximumRemovals("aaaaabbbbbccccdddddeeeee", "abcde", [5,10,15,20,25]), Error: list assignment index out of range, 'Test 90');
test(maximumRemovals("hellotherehowareyou", "heoy", [1,3,5,7,9,11,13,15,17]), 4, 'Test 91');
test(maximumRemovals("xyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "xyz", [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59]), 0, 'Test 92');
test(maximumRemovals("aaaaabbbbbcccc", "abc", [5,6,7,8,9,10]), 4, 'Test 93');
test(maximumRemovals("pneumonoultramicroscopicsilicovolcanoconiosis", "pneumo", [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54]), 0, 'Test 94');
test(maximumRemovals("thisisaverylongstring", "tils", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 3, 'Test 95');
test(maximumRemovals("leetcodeleetcodeleetcodeleetcode", "leetcodelt", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), 16, 'Test 96');
test(maximumRemovals("abcdefghijklmnopqrstuvwxyz", "acegikmoqsuwy", [1,3,5,7,9,11,13,15,17,19,21,23]), 12, 'Test 97');
test(maximumRemovals("aaaaaaabbbbbbcccccc", "abc", [0,7,14,1,8,15,2,9,16,3,10,17,4,11,18,5,12,19,6,13,20]), Error: list assignment index out of range, 'Test 98');
test(maximumRemovals("abcdefghijabcdefghij", "acegik", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 0, 'Test 99');
test(maximumRemovals("nnnnoooooommmm", "nom", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 3, 'Test 100');

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
