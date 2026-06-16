// Test: 438. Find All Anagrams In A String
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { findAnagrams } = require("./solution");

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

console.log("\n438. Find All Anagrams In A String\n");

test(findAnagrams("hello", "billion"), [], 'Test 1');
test(findAnagrams("aaaaa", "a"), [0, 1, 2, 3, 4], 'Test 2');
test(findAnagrams("bbaa", "ab"), [1], 'Test 3');
test(findAnagrams("abab", "ab"), [0, 1, 2], 'Test 4');
test(findAnagrams("abacbabc", "abc"), [1, 2, 3, 5], 'Test 5');
test(findAnagrams("a", "a"), [0], 'Test 6');
test(findAnagrams("aaaaaa", "aa"), [0, 1, 2, 3, 4], 'Test 7');
test(findAnagrams("cbaebabacd", "abc"), [0, 6], 'Test 8');
test(findAnagrams("xyz", "zyx"), [0], 'Test 9');
test(findAnagrams("aaaaaaaaaa", "aaa"), [0, 1, 2, 3, 4, 5, 6, 7], 'Test 10');
test(findAnagrams("mississippi", "issi"), [1, 4], 'Test 11');
test(findAnagrams("abcabcabc", "abc"), [0, 1, 2, 3, 4, 5, 6], 'Test 12');
test(findAnagrams("aabbcc", "abc"), [], 'Test 13');
test(findAnagrams("mississippi", "issip"), [4], 'Test 14');
test(findAnagrams("abcd", "efgh"), [], 'Test 15');
test(findAnagrams("abcde", "fgh"), [], 'Test 16');
test(findAnagrams("abcdefg", "gfedcba"), [0], 'Test 17');
test(findAnagrams("aabbccdd", "abcd"), [], 'Test 18');
test(findAnagrams("hello", "oll"), [2], 'Test 19');
test(findAnagrams("p", "p"), [0], 'Test 20');
test(findAnagrams("zdhfkahfewrfsad", "fes"), [], 'Test 21');
test(findAnagrams("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzz"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], 'Test 22');
test(findAnagrams("ananananan", "nana"), [0, 1, 2, 3, 4, 5, 6], 'Test 23');
test(findAnagrams("ababababababababababababababababababababababababababababababababab", "baba"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62], 'Test 24');
test(findAnagrams("zzzzzzzzzzzzzzzz", "zzzz"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'Test 25');
test(findAnagrams("anagramanagramanagram", "anagramanagram"), [0, 1, 2, 3, 4, 5, 6, 7], 'Test 26');
test(findAnagrams("xxyyzzxxyyzzxxyyzzxxyyzzxxyyzzxxyyzzxxyyzzxxyyzzxxyyzzxxyyzzxxyyzzxxyyzz", "xxyyzz"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66], 'Test 27');
test(findAnagrams("aquickbrownfoxjumpsoverthelazydog", "quick"), [1], 'Test 28');
test(findAnagrams("xyzzxyzz", "xyz"), [0, 3, 4], 'Test 29');
test(findAnagrams("almostanagram", "anagram"), [6], 'Test 30');
test(findAnagrams("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "abcdefghijklmnop"), [0, 26], 'Test 31');
test(findAnagrams("abcdabcdeabcdabcdeabcdabcde", "abcde"), [4, 5, 6, 7, 8, 13, 14, 15, 16, 17, 22], 'Test 32');
test(findAnagrams("aabbccddeeffgghhii", "abcdefghi"), [], 'Test 33');
test(findAnagrams("aquickbrownfoxjumpsoverlazydog", "lazy"), [23], 'Test 34');
test(findAnagrams("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzz"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110], 'Test 35');
test(findAnagrams("thisisaverylongstringtocheckanagrams", "strings"), [], 'Test 36');
test(findAnagrams("xyxzyzyx", "zyx"), [1, 2, 5], 'Test 37');
test(findAnagrams("bbaaaaab", "ab"), [1, 6], 'Test 38');
test(findAnagrams("bcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbc", "bbccbb"), [], 'Test 39');
test(findAnagrams("abababababababababababababababababababababababababababababababababababababababababababab", "bab"), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85], 'Test 40');
test(findAnagrams("abcabcabcabcabcabc", "abcabc"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'Test 41');
test(findAnagrams("abcdabcdabcdabcd", "dcba"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'Test 42');
test(findAnagrams("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "mnopqrstuvwxyz"), [], 'Test 43');
test(findAnagrams("thisisanotherexample", "ample"), [15], 'Test 44');
test(findAnagrams("acbabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", "bcab"), [1, 2, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61], 'Test 45');
test(findAnagrams("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zyxwvutsrqponmlkjihgfedcba"), [], 'Test 46');
test(findAnagrams("xyzzzzzyxyzzzzzyxyzzzzzy", "zzzzzyxy"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 'Test 47');
test(findAnagrams("repeatedpatternrepeatedpatternrepeated", "repeatedpattern"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 'Test 48');
test(findAnagrams("eidbaooo", "ab"), [3], 'Test 49');
test(findAnagrams("acdfgdcagdfgdsf", "gcd"), [4], 'Test 50');
test(findAnagrams("abcdefgabcdefg", "gfedcba"), [0, 1, 2, 3, 4, 5, 6, 7], 'Test 51');
test(findAnagrams("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "mnopqrstuvwxzy"), [], 'Test 52');
test(findAnagrams("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz", "xyz"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42], 'Test 53');
test(findAnagrams("bcbcbcbcbcbc", "bccb"), [0, 1, 2, 3, 4, 5, 6, 7, 8], 'Test 54');
test(findAnagrams("abcdefghij", "ihgfedcba"), [0], 'Test 55');
test(findAnagrams("abcabcabcabcabcabcabcabcabcabc", "cba"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], 'Test 56');
test(findAnagrams("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzz"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], 'Test 57');
test(findAnagrams("aaaaaaaaaabbbbbbbbbbcccccccccc", "abc"), [], 'Test 58');
test(findAnagrams("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), [0], 'Test 59');
test(findAnagrams("pneumonoultramicroscopicsilicovolcanoconiosis", "pneumonia"), [], 'Test 60');
test(findAnagrams("counterexampletofindallanagramsinaverylargeinputstring", "example"), [7], 'Test 61');
test(findAnagrams("zazazazazaz", "aaa"), [], 'Test 62');
test(findAnagrams("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), [0], 'Test 63');
test(findAnagrams("thisisateststring", "test"), [7], 'Test 64');
test(findAnagrams("ababababababababababababababababa", "baba"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], 'Test 65');
test(findAnagrams("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz", "xyzzyx"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], 'Test 66');
test(findAnagrams("anagramananagramanagramanagramanagram", "nagaram"), [0, 1, 2, 3, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 'Test 67');
test(findAnagrams("abcdabcde", "cde"), [6], 'Test 68');
test(findAnagrams("abacbabcabcab", "abc"), [1, 2, 3, 5, 6, 7, 8, 9, 10], 'Test 69');
test(findAnagrams("anananananananananananananananananananananana", "nana"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41], 'Test 70');
test(findAnagrams("aaaaaaaaaaaaaaaaaaaaaaaaaaab", "ba"), [26], 'Test 71');
test(findAnagrams("acbabcabcabcabcabcabcabcabcabcabc", "bac"), [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 'Test 72');
test(findAnagrams("aaaaaaaaaaaab", "aaaab"), [8], 'Test 73');
test(findAnagrams("ldfldjflsdkflsdkjfldsjkfldsjfldsjflsdkjfldskjflds", "sdkjf"), [13, 19, 35, 41], 'Test 74');
test(findAnagrams("abababababababababab", "abab"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 'Test 75');
test(findAnagrams("aabbccddeeffaabbccddeeff", "abcdef"), [], 'Test 76');
test(findAnagrams("zzzzzzzzzz", "zzz"), [0, 1, 2, 3, 4, 5, 6, 7], 'Test 77');
test(findAnagrams("zxyzzxyz", "xyz"), [0, 1, 4, 5], 'Test 78');
test(findAnagrams("thisisanexampleofaverylongstringwherefindinganagramsisnotthatstraightforward", "anagram"), [44], 'Test 79');
test(findAnagrams("anagramananagramananagram", "anagram"), [0, 1, 2, 3, 9, 10, 11, 12, 18], 'Test 80');
test(findAnagrams("anananananananananananananananananana", "anana"), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32], 'Test 81');
test(findAnagrams("abcdefghij", "jihgfedcba"), [0], 'Test 82');
test(findAnagrams("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaa"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], 'Test 83');
test(findAnagrams("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "mnopqr"), [], 'Test 84');
test(findAnagrams("qwertyuiopasdfghjklzxcvbnm", "mnbvcxzlkjhgfdsapoiuytrewq"), [0], 'Test 85');
test(findAnagrams("acbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacb", "acbac"), [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63], 'Test 86');
test(findAnagrams("hellohellohellohellohellohellohellohellohellohello", "world"), [], 'Test 87');
test(findAnagrams("anagramanagramanagram", "nagaram"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 88');
test(findAnagrams("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm", "mnbvcxzlkjhgfdsapoiuytrewq"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], 'Test 89');
test(findAnagrams("layer", "relay"), [0], 'Test 90');
test(findAnagrams("quickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsover"), [0], 'Test 91');
test(findAnagrams("llllllllllllllllllllllllllllllllllllll", "ll"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], 'Test 92');
test(findAnagrams("abababababababababab", "baba"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 'Test 93');
test(findAnagrams("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", "aab"), [62], 'Test 94');
test(findAnagrams("qazwsxedcrfvtgbyhnujmikolp", "lopihgfytvremkluzxwqjncbv"), [], 'Test 95');
test(findAnagrams("abacabadabacaba", "abacab"), [0, 1, 8, 9], 'Test 96');
test(findAnagrams("thisisaverylongstringwithseveralrepeatingcharacters", "characters"), [41], 'Test 97');
test(findAnagrams("aabbccddeeffgghhii", "iihhggffeeddccbbaa"), [0], 'Test 98');
test(findAnagrams("thisisanagram", "nagaram"), [6], 'Test 99');
test(findAnagrams("ababababababababababababababababababababababababababab", "baba"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], 'Test 100');
test(findAnagrams("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], 'Test 101');
test(findAnagrams("aabbccddeeff", "abcdef"), [], 'Test 102');

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
