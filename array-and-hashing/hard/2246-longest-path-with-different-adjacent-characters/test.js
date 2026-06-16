// Test: 2246. Longest Path With Different Adjacent Characters
// 73 test cases from LeetCodeDataset
// Run: node test.js

const { longestPath } = require("./solution");

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

console.log("\n2246. Longest Path With Different Adjacent Characters\n");

test(longestPath([-1,0,0,0,0,1,2,2], "abcdeff"), Error: string index out of range, 'Test 1');
test(longestPath([-1,0,1,2,3], "abac"), Error: string index out of range, 'Test 2');
test(longestPath([-1,0,0,2,2,2], "abbccc"), 4, 'Test 3');
test(longestPath([-1,0,1,2,2,2], "abcde"), Error: string index out of range, 'Test 4');
test(longestPath([-1,0,0,0,0,1,1,2,2], "abacabad"), Error: string index out of range, 'Test 5');
test(longestPath([-1,0,0,2,2,2], "abcde"), Error: string index out of range, 'Test 6');
test(longestPath([-1,0,0,1,1,2,2], "abcdef"), Error: string index out of range, 'Test 7');
test(longestPath([-1,0,0,0], "aabc"), 3, 'Test 8');
test(longestPath([-1,0,0,1,1,2], "abacbe"), 3, 'Test 9');
test(longestPath([-1,0,1,2,3,4,5], "abcdefg"), 7, 'Test 10');
test(longestPath([-1,0,0,0,0,0,0], "abcdefg"), 3, 'Test 11');
test(longestPath([-1,0,0,1,1], "abac"), Error: string index out of range, 'Test 12');
test(longestPath([-1,0,1,2,3,4], "abcde"), Error: string index out of range, 'Test 13');
test(longestPath([-1,0,1,1,3,3,3,4,4], "abccabcc"), Error: string index out of range, 'Test 14');
test(longestPath([-1,0,1,2,2], "aaaa"), Error: string index out of range, 'Test 15');
test(longestPath([-1,0,0,0,0,1,1,1,1,2,2,2,2], "aabbbbcccc"), Error: string index out of range, 'Test 16');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6], "abcdefgabcdefg"), Error: string index out of range, 'Test 17');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14], "aabbaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 5, 'Test 18');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "abcdefghijklmnopqrstuvwxyz"), 8, 'Test 19');
test(longestPath([-1,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3], "aaaaaaabbbbbbbcccccccd"), Error: string index out of range, 'Test 20');
test(longestPath([-1,0,1,2,3,0,6,7,8,2,10,11,12,1,14,15,16,0,18,19,20,3,22,23,24,4,26,27,28,5,30,31,32,6,34,35,36,7,38,39,40,8,42,43,44,9,46,47,48,10,50,51,52,11,54,55,56,12,58,59,60], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 8, 'Test 21');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7], "aabbaacccddeeeff"), Error: string index out of range, 'Test 22');
test(longestPath([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], "abcdefghijklmnopqrstuvwxyz"), 21, 'Test 23');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "aabbccddeeffgghhiiiijjjjkkkkllllmmmmnnnnoooppqqrrssttuuvvwwxxyyzz"), 7, 'Test 24');
test(longestPath([-1,0,1,2,3,4,5,6,7,8,9,10,11,12], "abcdefghijklmno"), 14, 'Test 25');
test(longestPath([-1,0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], "abcdefghijklmnopqrstuvwxyz"), 7, 'Test 26');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 10, 'Test 27');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21], "zyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 10, 'Test 28');
test(longestPath([-1,0,0,0,0,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13], "abcdefghijklmnopqrstuvwxyzabcdefghijk"), 8, 'Test 29');
test(longestPath([-1,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6], "aabbaaccddcceeddffgeee"), 5, 'Test 30');
test(longestPath([-1,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4], "abcabcabcabcabcabc"), 5, 'Test 31');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14], "zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), 9, 'Test 32');
test(longestPath([-1,0,0,0,1,1,1,2,2,3], "abacabadaba"), 5, 'Test 33');
test(longestPath([-1,0,0,0,1,2,2,2,3,3,3,4,4,4], "abacabadacac"), Error: string index out of range, 'Test 34');
test(longestPath([-1,0,0,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14], "abacabadacadaeafagahaiajakalalamanaoapaqara"), 7, 'Test 35');
test(longestPath([-1,0,0,1,2,2,3,4,5,6,7,8,9], "abcdefghijk"), Error: string index out of range, 'Test 36');
test(longestPath([-1,0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5], "ababababababababababababababababababababababababababababababababababababababababababa"), 5, 'Test 37');
test(longestPath([-1,0,0,0,1,1,2,2,3,4], "abcdefghij"), 6, 'Test 38');
test(longestPath([-1,0,0,1,1,2,2,3,4,5,6], "aabbccddeee"), 5, 'Test 39');
test(longestPath([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], "abcdefghijklmno"), Error: string index out of range, 'Test 40');
test(longestPath([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,0,21,22,23,24,25,26,27,28,29], "zyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyz"), 26, 'Test 41');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6], "abacbacbacbac"), Error: string index out of range, 'Test 42');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29], "abcdefghijklmnopqrstuvabcdefghijklmnopqrstuvabcdefghijklmnopqrstuvabcdefghijklmnopqrstuv"), 11, 'Test 43');
test(longestPath([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], "abacabadabacabadabacabadabacabadabacabadabacaba"), 32, 'Test 44');
test(longestPath([-1,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), Error: string index out of range, 'Test 45');
test(longestPath([-1,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21], "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 1, 'Test 46');
test(longestPath([-1,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7], "abcdefghijklmnopqrstuvwx"), 7, 'Test 47');
test(longestPath([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], "abcdefghijklmnopqrstuvwxypq"), 21, 'Test 48');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,0,37,38,39,40,41,42,43,44,45], "abcdefghijklmnopqrstuvwxypqabcdefghijklmnopqrstuvwxypq"), 13, 'Test 49');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnop"), 9, 'Test 50');
test(longestPath([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], "abcdefghijklmnopqrstuvwxyz"), 16, 'Test 51');
test(longestPath([-1,0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3], "aaaaabbbbbcccccddeeeeffffgghhhhiijjjj"), 3, 'Test 52');
test(longestPath([-1,0,0,0,1,1,2,2,3,3], "aababbccdd"), 3, 'Test 53');
test(longestPath([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 31, 'Test 54');
test(longestPath([-1,0,0,1,1,2,2,3,3,4], "abcdefghij"), 6, 'Test 55');
test(longestPath([-1,0,0,1,1,2,2,2,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 8, 'Test 56');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14], "abacabadacadaeafagahaiajakalalamanaoapaqara"), 7, 'Test 57');
test(longestPath([-1,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4], "abcdefghijklmnopqrstuvwxyz"), 5, 'Test 58');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4], "aaabbbcccdd"), 5, 'Test 59');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4,5,5], "abacabadabacaba"), 5, 'Test 60');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4], "abcdefghij"), Error: string index out of range, 'Test 61');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 8, 'Test 62');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4], "abcdefghia"), Error: string index out of range, 'Test 63');
test(longestPath([-1,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,0,49,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 11, 'Test 64');
test(longestPath([-1,0,0,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14], "abcdefghijklmnopqrstuvwxyzzzzzzzzzzzzzzzzzzzz"), 10, 'Test 65');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14], "abcdefghijklmnopqrstuvwxyzzzzzzzzzzzzzzzzzzzz"), 9, 'Test 66');
test(longestPath([-1,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 9, 'Test 67');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 7, 'Test 68');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13], "abcdefghijklmnopqrstuvwxyz"), Error: string index out of range, 'Test 69');
test(longestPath([-1,0,0,0,0,1,1,1,1,2,2,2,2], "abcdeabcdeabcde"), 5, 'Test 70');
test(longestPath([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,40,40,41,41,42,42,43,43,44,44,45,45,46,46,47,47,48,48,49,49], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 13, 'Test 71');
test(longestPath([-1,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4], "aaaaaaaaaabbccccdddd"), Error: string index out of range, 'Test 72');
test(longestPath([-1,0,0,0,1,1,2,2,3,3,4,4], "abcdefghij"), Error: string index out of range, 'Test 73');

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
