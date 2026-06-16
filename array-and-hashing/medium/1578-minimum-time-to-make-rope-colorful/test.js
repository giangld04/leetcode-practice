// Test: 1578. Minimum Time To Make Rope Colorful
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { minCost } = require("./solution");

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

console.log("\n1578. Minimum Time To Make Rope Colorful\n");

test(minCost("abcabc", [1,2,3,1,2,3]), 0, 'Test 1');
test(minCost("aaaaa", [5,4,3,2,1]), 10, 'Test 2');
test(minCost("abacabadabacaba", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 0, 'Test 3');
test(minCost("aabaa", [1,2,3,4,1]), 2, 'Test 4');
test(minCost("zzzz", [1,1,1,1]), 3, 'Test 5');
test(minCost("aaaa", [10,5,4,2]), 11, 'Test 6');
test(minCost("abcdef", [1,1,1,1,1,1]), 0, 'Test 7');
test(minCost("abaac", [1,2,3,4,5]), 3, 'Test 8');
test(minCost("abc", [1,2,3]), 0, 'Test 9');
test(minCost("abcdefg", [1,1,1,1,1,1,1]), 0, 'Test 10');
test(minCost("aaabbb", [1,2,3,4,5,6]), 12, 'Test 11');
test(minCost("aabbcc", [1,2,3,1,2,3]), 4, 'Test 12');
test(minCost("abcd", [4,3,2,1]), 0, 'Test 13');
test(minCost("bbbaaa", [4,9,3,8,8,9]), 23, 'Test 14');
test(minCost("ababab", [1,2,3,4,5,6]), 0, 'Test 15');
test(minCost("a", [5]), 0, 'Test 16');
test(minCost("aabab", [3,5,10,7,5]), 3, 'Test 17');
test(minCost("aaabbb", [3,5,10,7,5,3]), 16, 'Test 18');
test(minCost("a", [1]), 0, 'Test 19');
test(minCost("zzzz", [10,1,1,100]), 12, 'Test 20');
test(minCost("abcabcabcabc", [1,2,3,4,5,6,7,8,9,10,11,12]), 0, 'Test 21');
test(minCost("ababababab", [1,10,2,9,3,8,4,7,5,6]), 0, 'Test 22');
test(minCost("aaaaaaaaaabbbbbbbbbb", [1,1,1,1,1,1,1,1,1,10,1,1,1,1,1,1,1,1,1,10]), 18, 'Test 23');
test(minCost("aaabbbcccdddeee", [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]), 30, 'Test 24');
test(minCost("aaabaaaabaaaaaaaabaa", [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]), 28, 'Test 25');
test(minCost("aabbccddeeaabbccddeeaabbccddeeaabbccdd", [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), Error: list index out of range, 'Test 26');
test(minCost("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), Error: list index out of range, 'Test 27');
test(minCost("ababaababaaba", [1,3,5,2,4,6,3,5,7,4,6,8,5]), 8, 'Test 28');
test(minCost("aabbaa", [1,2,3,4,5,6]), 9, 'Test 29');
test(minCost("aaaabbbbccccdddd", [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4]), 30, 'Test 30');
test(minCost("abacabadabacabadabacabadabacabadabacabad", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 0, 'Test 31');
test(minCost("aabbbcccdddeeefff", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), Error: list index out of range, 'Test 32');
test(minCost("aabaaabbaaaabaaa", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 76, 'Test 33');
test(minCost("aaaabbbbcccc", [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3]), 18, 'Test 34');
test(minCost("abababababab", [5,4,3,2,1,5,4,3,2,1,5,4]), 0, 'Test 35');
test(minCost("aabbccddeeff", [1,1,1,1,1,1,2,2,2,2,2,2]), 9, 'Test 36');
test(minCost("aabccbaa", [3, 5, 10, 7, 5, 3, 5, 3]), 11, 'Test 37');
test(minCost("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), Error: list index out of range, 'Test 38');
test(minCost("aabbccddeeffgg", [1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 49, 'Test 39');
test(minCost("aaaaaaaaaa", [1,10,100,1000,10000,1,10,100,1000,10000]), 12222, 'Test 40');
test(minCost("zzzzzzzzzz", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 45, 'Test 41');
test(minCost("bbbaaabbb", [10,1,1,1,10,10,1,1,10]), 15, 'Test 42');
test(minCost("xyzzzyx", [1,2,3,4,5,6,7]), 7, 'Test 43');
test(minCost("aaaaaaaaaaaa", [10000,9999,9998,9997,9996,9995,9994,9993,9992,9991,9990,9989]), 109934, 'Test 44');
test(minCost("aabbbaaabbbaaa", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 65, 'Test 45');
test(minCost("aabacaa", [10,1,1,10,1,10]), Error: list index out of range, 'Test 46');
test(minCost("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]), 0, 'Test 47');
test(minCost("aaaaaaaaaabbbbbbbbbbccccccccccdddddddddd", [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 180, 'Test 48');
test(minCost("abccbaabccba", [1,2,3,4,5,6,1,2,3,4,5,6]), 7, 'Test 49');
test(minCost("aabbbaaa", [1,2,3,4,5,6,7]), Error: list index out of range, 'Test 50');
test(minCost("bbbaaaaccc", [2,2,2,1,1,1,3,3,3]), Error: list index out of range, 'Test 51');
test(minCost("aabbaa", [10, 5, 1, 1, 5, 10]), 11, 'Test 52');
test(minCost("abcabcabc", [9,8,7,6,5,4,3,2,1]), 0, 'Test 53');
test(minCost("abcdefghij", [10000,10000,10000,10000,10000,10000,10000,10000,10000,10000]), 0, 'Test 54');
test(minCost("aabbccddeeffgghhiijjkk", [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 11, 'Test 55');
test(minCost("abcabcabcabc", [1,2,3,1,2,3,1,2,3,1,2,3]), 0, 'Test 56');
test(minCost("aaabbbcccddd", [1,1,1,2,2,2,3,3,3,4,4,4]), 20, 'Test 57');
test(minCost("aabbccddeeffgghhiijjkk", [1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), Error: list index out of range, 'Test 58');
test(minCost("aaaabbbb", [1,2,3,4,5,6,7,8]), 24, 'Test 59');
test(minCost("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]), 676, 'Test 60');
test(minCost("abababababababababab", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 0, 'Test 61');
test(minCost("aabccbaabccbaabc", [1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), 13, 'Test 62');
test(minCost("aaaaabbbbbcccc", [5,4,3,2,1,5,4,3,2,1,5,4,3]), Error: list index out of range, 'Test 63');
test(minCost("abcabcabcabcabcabcabc", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]), 0, 'Test 64');
test(minCost("abababababababababab", [1,9,2,8,3,7,4,6,5,5,4,6,3,7,2,8,1,9,1,9]), 0, 'Test 65');
test(minCost("aabaaaaba", [1,2,1,1,1,1,1,2,1]), 4, 'Test 66');
test(minCost("ababababab", [5,4,5,4,5,4,5,4,5,4]), 0, 'Test 67');
test(minCost("aabbaa", [10,1,10,2,10,3]), 6, 'Test 68');
test(minCost("abcabcabcabc", [10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3]), 0, 'Test 69');
test(minCost("ababaababa", [1,2,3,4,5,6,7,8,9,10]), 5, 'Test 70');
test(minCost("abcabcabcabcabcabc", [6,5,4,3,2,1,6,5,4,3,2,1,6,5,4,3,2,1,6,5,4,3,2,1]), 0, 'Test 71');
test(minCost("aaaabbbbccccdddd", [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]), 24, 'Test 72');
test(minCost("aabbccddeeffgg", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]), 49, 'Test 73');
test(minCost("aabbccddeeffgg", [9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1]), 33, 'Test 74');
test(minCost("aaaaaaaaaabbbbbbbbbb", [1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10]), 18, 'Test 75');
test(minCost("aabbaabbcc", [1,2,3,4,5,6,7,8,9,10]), 25, 'Test 76');
test(minCost("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", [1]*100), Error: Solution.minCost[] missing 1 required positional argument: 'neededTime', 'Test 77');
test(minCost("aaabaaaaba", [5,5,5,1,1,5,5,1,1,5]), 17, 'Test 78');
test(minCost("zzzzzzzzz", [1,2,3,4,5,6,7,8,9]), 36, 'Test 79');
test(minCost("abcdabcde", [1,2,3,4,1,2,3,4,5]), 0, 'Test 80');
test(minCost("abcdefghijklmnopqrstuvwxyz", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]), 0, 'Test 81');
test(minCost("aaabaaaabaaab", [3,2,1,1,2,3,1,2,3,1,2,3,1]), 11, 'Test 82');
test(minCost("abcdeffedcba", [1,2,3,4,5,6,7,8,7,6,5,4,3,2,1]), 6, 'Test 83');
test(minCost("aabbaaabbbaaa", [1,2,2,1,1,2,2,1,1,2,2,1,1]), 9, 'Test 84');
test(minCost("zzzzzzzzzz", [10,9,8,7,6,5,4,3,2,1]), 45, 'Test 85');
test(minCost("abcabcabcabc", [10,20,30,10,20,30,10,20,30,10,20,30]), 0, 'Test 86');
test(minCost("ababababab", [100, 1, 100, 1, 100, 1, 100, 1, 100, 1]), 0, 'Test 87');
test(minCost("abababababab", [1,9,2,8,3,7,4,6,5,10,6,1]), 0, 'Test 88');
test(minCost("abcdefghijklmnopqrstuvwxyza", [i for i in range[1, 27]] + [1]), Error: Solution.minCost[] missing 1 required positional argument: 'neededTime', 'Test 89');
test(minCost("abcabcabcabcabcabcabcabcabcabc", [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 90');
test(minCost("aabbbcccaabbcc", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]), 54, 'Test 91');
test(minCost("aabbaabbaabb", [10,20,30,40,10,20,30,40,10,20,30,40]), 120, 'Test 92');
test(minCost("aabbbccdddeeefffggghhhiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz", [i for i in range[1, 101]]), Error: Solution.minCost[] missing 1 required positional argument: 'neededTime', 'Test 93');
test(minCost("aabbccddeeff", [10,1,1,1,1,1,1,1,1,1,1,1]), 6, 'Test 94');
test(minCost("abcabcabcabc", [2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1]), 0, 'Test 95');
test(minCost("zzzzz", [1,2,3,4,5]), 10, 'Test 96');
test(minCost("aabbccddeeffgg", [1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 7, 'Test 97');
test(minCost("zzzzzzzzzz", [1,2,3,4,5,6,7,8,9,10]), 45, 'Test 98');
test(minCost("aabacbacba", [1,2,1,2,1,2,1,2,1,2]), 1, 'Test 99');
test(minCost("abcdabcda", [1,2,3,4,1,2,3,4,1]), 0, 'Test 100');
test(minCost("aabbccddeeff", [1,10,1,10,1,10,1,10,1,10,1,10]), 6, 'Test 101');
test(minCost("aaaabbbb", [1,2,3,4,1,2,3,4]), 12, 'Test 102');
test(minCost("abcdefghij", [10,20,30,40,50,60,70,80,90,100]), 0, 'Test 103');

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
