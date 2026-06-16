// Test: 3316. Find Maximum Removals From Source String
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { maxRemovals } = require("./solution");

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

console.log("\n3316. Find Maximum Removals From Source String\n");

test(maxRemovals("abbaa", "aba", [0,1,2]), 1, 'Test 1');
test(maxRemovals("abracadabra", "abc", [0,1,5,7,10]), 3, 'Test 2');
test(maxRemovals("bcda", "d", [0,3]), 2, 'Test 3');
test(maxRemovals("aaaaa", "aaa", [0,1,2,3,4]), 2, 'Test 4');
test(maxRemovals("dda", "dda", [0,1,2]), 0, 'Test 5');
test(maxRemovals("abcd", "ac", [0,1,2,3]), 2, 'Test 6');
test(maxRemovals("zzzz", "z", [0,1,2,3]), 3, 'Test 7');
test(maxRemovals("aaaaabbbbb", "ab", [0,1,2,3,4,5,6,7,8,9]), 8, 'Test 8');
test(maxRemovals("mississippi", "issi", [0,1,2,3,4,5,6,7,8,9,10,11,12]), 7, 'Test 9');
test(maxRemovals("abcabcabc", "abc", [0,1,2,3,4,5,6,7,8]), 6, 'Test 10');
test(maxRemovals("abcde", "ae", [1,2,3]), 3, 'Test 11');
test(maxRemovals("yeyeykyded", "yeyyd", [0,2,3,4]), 2, 'Test 12');
test(maxRemovals("abracadabra", "abc", [0,1,2,3,4,5,6,7,8,9,10]), 8, 'Test 13');
test(maxRemovals("abcdefghij", "aceg", [0,2,4,6,8]), 1, 'Test 14');
test(maxRemovals("ababababababababababababababababababababa", "abab", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]), 36, 'Test 15');
test(maxRemovals("aaaaabbbbbccccc", "abc", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 12, 'Test 16');
test(maxRemovals("abcdefghijk", "acegik", [1,3,5,7,9]), 5, 'Test 17');
test(maxRemovals("xyzxyzxyz", "xyz", [1,2,4,5,7,8]), 4, 'Test 18');
test(maxRemovals("aaaaabbbbbcccccdddddeeeeeffffffggggghhhhhh", "abcdefg", [0,5,10,15,20,25,30,35,40,45]), 9, 'Test 19');
test(maxRemovals("abcabcabcabc", "abcabc", [0,1,2,3,4,5,6,7,8,9,10,11]), 6, 'Test 20');
test(maxRemovals("abcdabcdabcdabcd", "abcdabcd", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 8, 'Test 21');
test(maxRemovals("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklmnopqrstuvwxyz", [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98]), 26, 'Test 22');
test(maxRemovals("xyzxyzxyz", "xyz", [0,3,6,9,12,15]), 2, 'Test 23');
test(maxRemovals("abcdefghijabcdefghij", "abcdefghij", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 10, 'Test 24');
test(maxRemovals("xxyyzzxxyyzzxxyyzzxxyyzzxxyyzzxxyyzz", "xyz", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]), 33, 'Test 25');
test(maxRemovals("abacabadabacaba", "aca", [0,2,4,6,8,10,12,14]), 6, 'Test 26');
test(maxRemovals("abacabacabacaba", "acaba", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 10, 'Test 27');
test(maxRemovals("zzyzxzyzxzyz", "zzz", [0,1,2,3,4,5,6,7,8,9,10,11]), 9, 'Test 28');
test(maxRemovals("helloworldhelloworldhelloworld", "howrd", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]), 25, 'Test 29');
test(maxRemovals("aabbccddeeff", "abcdef", [0,1,2,3,4,5,6,7,8,9,10,11]), 6, 'Test 30');
test(maxRemovals("abcabcabcabcabc", "abcabc", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 9, 'Test 31');
test(maxRemovals("ababababababababababababababababababababa", "aab", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]), 37, 'Test 32');
test(maxRemovals("zzzzzzzzzz", "zzz", [0,1,2,3,4,5,6,7,8,9]), 7, 'Test 33');
test(maxRemovals("abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab", "aba", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]), 100, 'Test 34');
test(maxRemovals("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzz", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]), 99, 'Test 35');
test(maxRemovals("abcdabcdabcdabcd", "abcd", [0,1,2,3,4,5,6,7,8,9,10,11,12,13]), 12, 'Test 36');
test(maxRemovals("abcdabcdabcdabcd", "abdc", [0,1,2,3,4,5,6,7,8,9,10,11,12,13]), 11, 'Test 37');
test(maxRemovals("aaaaaabbbbcccc", "abc", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 11, 'Test 38');
test(maxRemovals("ababababab", "aba", [0,1,2,3,4,5,6,7,8,9]), 7, 'Test 39');
test(maxRemovals("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", "abc", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]), 100, 'Test 40');
test(maxRemovals("zzzzzzzzzz", "zzzz", [0,1,2,3,4,5,6,7,8,9]), 6, 'Test 41');
test(maxRemovals("abcabcabcabcabcabcabcabcabcabc", "abcabc", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]), 24, 'Test 42');
test(maxRemovals("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefg", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55]), 45, 'Test 43');
test(maxRemovals("pneumonoultramicroscopicsilicovolcanoconiosis", "pum", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]), 42, 'Test 44');
test(maxRemovals("ababababab", "aaaa", [0,1,2,3,4,5,6,7,8,9]), 6, 'Test 45');
test(maxRemovals("aaaaaaaab", "a", [0,1,2,3,4,5,6,7]), 7, 'Test 46');
test(maxRemovals("aaaabbbbccccdddd", "abcd", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 12, 'Test 47');
test(maxRemovals("xxyyzzxxyyzz", "xyz", [0,2,4,6,8,10]), 6, 'Test 48');
test(maxRemovals("abracadabra", "abra", [0,1,2,3,5,6,8,9,10]), 6, 'Test 49');
test(maxRemovals("mississippiissippi", "issi", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 14, 'Test 50');
test(maxRemovals("aaaabbbbcccc", "abc", [0,1,2,3,4,5,6,7,8,9,10,11]), 9, 'Test 51');
test(maxRemovals("abcdefgabcdefg", "abcde", [0,1,2,3,4,8,9,10,11,12]), 6, 'Test 52');
test(maxRemovals("abcdefghijklmnopqrstuvwxyz", "acegikmoqsuwy", [0,2,4,6,8,10,12,14,16,18,20,22,24]), 0, 'Test 53');
test(maxRemovals("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm", "qwerty", [0,1,2,3,4,5,10,11,12,13,14,15,20,21,22,23,24,25,30,31,32,33,34,35]), 22, 'Test 54');
test(maxRemovals("pneumonoultramicroscopicsilicovolcanoconiosis", "nos", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199]), 42, 'Test 55');
test(maxRemovals("abcdefghijklmnopqrstuvwxyz", "adgjmpsvy", [1,3,5,7,9,11,13,15,17,19,21,23,25]), 9, 'Test 56');
test(maxRemovals("aabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabb", "aabbaabbaabb", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75]), 56, 'Test 57');
test(maxRemovals("xyzzxyzzxyzz", "xzy", [0,1,2,3,4,5,6,7,8,9,10,11]), 9, 'Test 58');
test(maxRemovals("abcdefghijklmnopqrstuvwxyz", "acegikmoqsuwy", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 13, 'Test 59');
test(maxRemovals("aabbbcccc", "abc", [0,1,2,3,4,5,6,7,8]), 6, 'Test 60');
test(maxRemovals("aaaaaaaaaaa", "aaaa", [1,2,3,5,6,7,9,10]), 7, 'Test 61');
test(maxRemovals("abacabadabacaba", "abc", [0,2,4,6,8,10,12,14]), 7, 'Test 62');
test(maxRemovals("abcdefghijabcdefghij", "acegi", [0,2,4,6,8,10,12,14,16,18]), 5, 'Test 63');
test(maxRemovals("mnopqrstuvwxyzabcdefghijkl", "mnopqrstuvwxyz", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 12, 'Test 64');
test(maxRemovals("aaaaaa", "a", [0,1,2,3,4,5]), 5, 'Test 65');
test(maxRemovals("abcdabcdabcd", "abcd", [0,1,2,3,8,9,10,11]), 8, 'Test 66');
test(maxRemovals("banana", "baa", [0,1,2,3,4,5]), 3, 'Test 67');
test(maxRemovals("abracadabra", "abracadabra", [0,1,2,3,4,5,6,7,8,9,10]), 0, 'Test 68');
test(maxRemovals("xyzzazxzyz", "xyz", [0,2,3,4,5,6,7,8,9]), 7, 'Test 69');
test(maxRemovals("zxyxyxyxyxyxyxyxyxyxyxzyxzyxzyxzyxzyxzyx", "zyxzyxzyxzyx", [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46]), 15, 'Test 70');
test(maxRemovals("pppppqqqqqrrrrrssssstttttuuuuuvvvvvwwwwwxxxxxyyyyyzzzzz", "pqrsuvwxzy", [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70]), -Infinity, 'Test 71');
test(maxRemovals("zzzzzzzzzzz", "zzz", [0,1,2,3,4,5,6,7,8,9,10]), 8, 'Test 72');
test(maxRemovals("abracadabra", "aca", [0,2,5,8,10]), 5, 'Test 73');
test(maxRemovals("abcdabcdeabcdabcde", "abcde", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 13, 'Test 74');
test(maxRemovals("abacabadabacaba", "ababa", [0,1,2,3,4,5,6,7,8,9,10,11,12]), 10, 'Test 75');
test(maxRemovals("programming", "pin", [0,2,3,5,7,9,10,11]), 5, 'Test 76');
test(maxRemovals("abcdefghij", "acegi", [0,1,2,3,4,5,6,7,8,9]), 5, 'Test 77');
test(maxRemovals("zzzzzzzzzzzzzzzzzzzzzzzzzz", "zzz", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 23, 'Test 78');
test(maxRemovals("xyxxyxyxyx", "xyx", [0,1,2,3,4,5,6,7,8,9]), 7, 'Test 79');
test(maxRemovals("xyxyxyxyxyxyxy", "xyxy", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 10, 'Test 80');
test(maxRemovals("mamamamamamama", "mam", [0,1,2,3,4,5,6,7,8,9,10,11]), 10, 'Test 81');
test(maxRemovals("xyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyz", "zyzyz", [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60]), 20, 'Test 82');
test(maxRemovals("algorithms", "als", [0,1,2,3,4,5,6,7,8,9]), 7, 'Test 83');
test(maxRemovals("aabbaabbaabbaabb", "aab", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 13, 'Test 84');
test(maxRemovals("abacabadabacaba", "abc", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 12, 'Test 85');
test(maxRemovals("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzz", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]), 50, 'Test 86');
test(maxRemovals("aabbccddeeffgg", "abcdefg", [0,2,4,6,8,10,12,14]), 7, 'Test 87');

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
