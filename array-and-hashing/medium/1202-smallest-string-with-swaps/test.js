// Test: 1202. Smallest String With Swaps
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { smallestStringWithSwaps } = require("./solution");

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

console.log("\n1202. Smallest String With Swaps\n");

test(smallestStringWithSwaps("acbd", [[0,3],[1,2]]), abcd, 'Test 1');
test(smallestStringWithSwaps("cba", [[0,1],[1,2]]), abc, 'Test 2');
test(smallestStringWithSwaps("aabbcc", [[0,1],[2,3],[4,5]]), aabbcc, 'Test 3');
test(smallestStringWithSwaps("zyx", [[0,1],[1,2]]), xyz, 'Test 4');
test(smallestStringWithSwaps("abcd", [[0,1],[1,2],[2,3]]), abcd, 'Test 5');
test(smallestStringWithSwaps("leetcode", [[0,2],[1,3]]), eeltcode, 'Test 6');
test(smallestStringWithSwaps("dcab", [[0,3],[1,2]]), bacd, 'Test 7');
test(smallestStringWithSwaps("dcab", [[0,3],[1,2],[0,2]]), abcd, 'Test 8');
test(smallestStringWithSwaps("qwe", [[0,2]]), ewq, 'Test 9');
test(smallestStringWithSwaps("abdc", [[0,3]]), abdc, 'Test 10');
test(smallestStringWithSwaps("vokh", [[0,1],[1,3],[0,3]]), hokv, 'Test 11');
test(smallestStringWithSwaps("abcdefgh", [[0,7],[1,6],[2,5],[3,4],[0,6],[1,5],[2,4]]), abcdefgh, 'Test 12');
test(smallestStringWithSwaps("mnopqr", [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]), Error: list index out of range, 'Test 13');
test(smallestStringWithSwaps("jklmno", [[0,3],[1,4],[2,5],[0,5],[1,3]]), jklmno, 'Test 14');
test(smallestStringWithSwaps("dcabxy", [[0,3],[1,2],[4,5],[0,2]]), abcdxy, 'Test 15');
test(smallestStringWithSwaps("aazaa", [[0,1],[1,2],[2,3],[3,4]]), aaaaz, 'Test 16');
test(smallestStringWithSwaps("aefdcba", [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]]), aabcdef, 'Test 17');
test(smallestStringWithSwaps("xyzabc", [[0,5],[1,4],[2,3],[0,2]]), abcxyz, 'Test 18');
test(smallestStringWithSwaps("xyzabc", [[0,5],[1,4],[2,3]]), cbazyx, 'Test 19');
test(smallestStringWithSwaps("abcdeffedcba", [[0,11],[1,10],[2,9],[3,8],[4,7],[5,6],[5,7],[6,7]]), abcdeeffdcba, 'Test 20');
test(smallestStringWithSwaps("qwertyuiopasdfghjklzxcvbnm", [[0,25],[1,24],[2,23],[3,22],[4,21],[5,20],[6,19],[7,18],[8,17],[9,16],[10,15],[11,14],[12,13]]), mnbrcxuikjagdfshpolzytvewq, 'Test 21');
test(smallestStringWithSwaps("bdcagf", [[0,3],[1,4],[2,5]]), adcbgf, 'Test 22');
test(smallestStringWithSwaps("racecar", [[0,6],[1,5],[2,4]]), racecar, 'Test 23');
test(smallestStringWithSwaps("abcdefghijk", [[0,3],[1,4],[2,5],[3,6],[4,7],[5,8],[6,9],[7,10]]), abcdefghijk, 'Test 24');
test(smallestStringWithSwaps("leetcodeproblems", [[0,11],[1,10],[2,9],[3,8],[4,7],[5,6],[12,20],[13,19],[14,18],[15,17]]), Error: list index out of range, 'Test 25');
test(smallestStringWithSwaps("abcdefg", [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]]), abcdefg, 'Test 26');
test(smallestStringWithSwaps("leetcode", [[0,2],[1,3],[4,5],[6,7]]), eeltcode, 'Test 27');
test(smallestStringWithSwaps("zyxzyx", [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]]), xxyyzz, 'Test 28');
test(smallestStringWithSwaps("abcdefghijk", [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10]]), abcdefghijk, 'Test 29');
test(smallestStringWithSwaps("challenge", [[0,9],[1,8],[2,7],[3,6],[4,5],[0,8],[1,7],[2,6],[3,5]]), Error: list index out of range, 'Test 30');
test(smallestStringWithSwaps("abacabad", [[0,2],[1,3],[4,6],[5,7]]), abacabad, 'Test 31');
test(smallestStringWithSwaps("lkjihgfedcba", [[0,10],[1,9],[2,8],[3,7],[4,6],[0,5],[1,6]]), bcdefghijkla, 'Test 32');
test(smallestStringWithSwaps("algorithm", [[0,6],[1,5],[2,4],[3,7]]), aighrltom, 'Test 33');
test(smallestStringWithSwaps("mnopqr", [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]]), Error: list index out of range, 'Test 34');
test(smallestStringWithSwaps("abcd", [[0,1],[1,2],[2,3],[0,3],[1,2]]), abcd, 'Test 35');
test(smallestStringWithSwaps("acbdf", [[0,1],[0,2],[1,2],[3,4]]), abcdf, 'Test 36');
test(smallestStringWithSwaps("aabbccddeeff", [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[0,2],[1,3],[4,6],[5,7],[8,10],[9,11]]), aabbccddeeff, 'Test 37');
test(smallestStringWithSwaps("jklmnopqrst", [[0,2],[3,5],[6,8],[9,11],[1,4],[5,7],[8,10],[11,13]]), Error: list index out of range, 'Test 38');
test(smallestStringWithSwaps("stuvwx", [[0,3],[1,4],[2,5],[0,5],[1,3],[2,4]]), stuvwx, 'Test 39');
test(smallestStringWithSwaps("abcde", [[0,1],[0,4],[1,2],[2,3]]), abcde, 'Test 40');
test(smallestStringWithSwaps("ympxz", [[0,1],[1,2],[2,3],[3,4]]), mpxyz, 'Test 41');
test(smallestStringWithSwaps("ekzpz", [[0,1],[1,2],[2,3],[3,4]]), ekpzz, 'Test 42');
test(smallestStringWithSwaps("abcdefghijklmnopqrstuvwxyz", [[0,25],[1,24],[2,23],[3,22],[4,21]]), abcdefghijklmnopqrstuvwxyz, 'Test 43');
test(smallestStringWithSwaps("fedcba", [[0,1],[1,2],[2,3],[3,4],[4,5]]), abcdef, 'Test 44');
test(smallestStringWithSwaps("abacabadabacaba", [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[0,2],[2,4],[4,6],[6,8],[8,10],[10,12],[1,3],[3,5],[5,7],[7,9],[9,11],[1,13]]), aaaaaaabbbbccda, 'Test 45');
test(smallestStringWithSwaps("abcdefg", [[0,3],[1,4],[2,5],[0,5],[1,2],[3,4]]), abcdefg, 'Test 46');
test(smallestStringWithSwaps("hellothereeveryone", [[0,8],[1,3],[2,9],[5,11],[6,7],[12,16],[13,14],[15,17]]), heelotehrleveryeno, 'Test 47');
test(smallestStringWithSwaps("dcabxyz", [[0,3],[1,2],[3,5],[4,6]]), bacdxyz, 'Test 48');
test(smallestStringWithSwaps("xyzab", [[0,1],[1,2],[2,3],[3,4],[0,3]]), abxyz, 'Test 49');
test(smallestStringWithSwaps("uvuuvuvuvu", [[0,1],[2,3],[4,5],[6,7],[8,9],[0,2],[2,4],[4,6],[6,8],[1,3],[3,5],[5,7],[7,9],[0,9]]), uuuuuuvvvv, 'Test 50');
test(smallestStringWithSwaps("abcdefghijk", [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]]), abcdefghijk, 'Test 51');
test(smallestStringWithSwaps("uvazyx", [[0,5],[1,4],[2,3]]), uvazyx, 'Test 52');
test(smallestStringWithSwaps("xyzxyz", [[0,3],[1,4],[2,5]]), xyzxyz, 'Test 53');
test(smallestStringWithSwaps("abcdefghij", [[0,9],[1,8],[2,7],[3,6],[4,5],[0,8],[1,7],[2,6],[3,5]]), abcdefghij, 'Test 54');
test(smallestStringWithSwaps("programming", [[0,8],[1,7],[2,6],[3,5],[4,9]]), immangorprg, 'Test 55');
test(smallestStringWithSwaps("abacabadabacaba", [[0,2],[1,3],[4,6],[5,7],[8,10],[9,11],[12,14],[13,15]]), Error: list index out of range, 'Test 56');
test(smallestStringWithSwaps("ufyx", [[0,3],[1,2],[0,2],[1,3]]), fuxy, 'Test 57');
test(smallestStringWithSwaps("lkjhgfedcba", [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]]), abcdefghjkl, 'Test 58');
test(smallestStringWithSwaps("aaaabbbbccccdddd", [[0,8],[1,9],[2,10],[3,11],[4,12],[5,13],[6,14],[7,15],[0,4],[1,5],[2,6],[3,7],[0,1],[2,3],[4,5],[6,7]]), aaaabbbbccccdddd, 'Test 59');
test(smallestStringWithSwaps("zzzzzzzzzzzzzzzzzzzz", [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20]]), Error: list index out of range, 'Test 60');
test(smallestStringWithSwaps("abcdef", [[0,1],[1,2],[2,3],[3,4],[4,5],[0,5]]), abcdef, 'Test 61');
test(smallestStringWithSwaps("nmosq", [[0,3],[1,2],[2,3],[3,4]]), mnoqs, 'Test 62');
test(smallestStringWithSwaps("abcdefgh", [[0,7],[1,6],[2,5],[3,4],[0,3],[1,4]]), abcdefgh, 'Test 63');
test(smallestStringWithSwaps("helloworld", [[0,8],[1,7],[2,6],[3,5]]), helloworld, 'Test 64');
test(smallestStringWithSwaps("abcdefghij", [[0,9],[1,8],[2,7],[3,6],[4,5],[0,5],[1,4],[2,3],[0,1],[8,9]]), abcdefghij, 'Test 65');
test(smallestStringWithSwaps("thisisateststring", [[0,4],[2,6],[3,9],[5,10],[7,11],[12,15],[13,16],[14,17],[18,20]]), Error: list index out of range, 'Test 66');
test(smallestStringWithSwaps("abacabadaba", [[0,10],[1,9],[2,8],[3,7],[4,6],[0,5],[1,4],[2,3],[0,1],[8,9],[5,6]]), aaaaaabbbcd, 'Test 67');
test(smallestStringWithSwaps("programming", [[0,8],[1,7],[2,6],[3,5],[1,9]]), immargonprg, 'Test 68');
test(smallestStringWithSwaps("zxcvbnmlkjhgfdsapoiuytrewq", [[0,23],[1,22],[2,21],[3,20],[4,19],[5,18],[6,17],[7,16],[8,15],[9,14],[10,13],[11,12]]), ercvbimlajdfghskponuytxzwq, 'Test 69');
test(smallestStringWithSwaps("abcdefghij", [[0,9],[1,8],[2,7],[3,6],[4,5]]), abcdefghij, 'Test 70');
test(smallestStringWithSwaps("xyz", [[0,1],[1,2],[2,0]]), xyz, 'Test 71');
test(smallestStringWithSwaps("fedcbaz", [[0,1],[2,3],[4,5],[6,7]]), Error: list index out of range, 'Test 72');
test(smallestStringWithSwaps("mnopqr", [[0,2],[0,4],[0,6],[1,3],[1,5],[2,4],[3,5]]), Error: list index out of range, 'Test 73');
test(smallestStringWithSwaps("xzy", [[0,1],[1,2],[0,2],[1,2],[0,1]]), xyz, 'Test 74');
test(smallestStringWithSwaps("abcdefghijk", [[0,10],[1,9],[2,8],[3,7],[4,6],[0,9],[1,8],[2,7],[3,6],[4,5]]), abcdefghijk, 'Test 75');
test(smallestStringWithSwaps("aabbccddeeffgghhii", [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,15],[16,17],[0,2],[1,3],[4,6],[5,7],[8,10],[9,11],[12,14],[13,15],[16,18]]), Error: list index out of range, 'Test 76');
test(smallestStringWithSwaps("abcdefghijklmnopqrstuvwxyz", [[0,25],[1,24],[2,23],[3,22],[4,21],[5,20],[6,19],[7,18],[8,17],[9,16],[10,15],[11,14],[12,13]]), abcdefghijklmnopqrstuvwxyz, 'Test 77');
test(smallestStringWithSwaps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,2],[1,3],[4,6],[5,7],[8,10],[9,11],[12,14],[13,15],[16,18],[17,19],[20,22],[21,23],[24,26],[25,27],[28,30],[29,31],[32,34],[33,35],[36,38],[37,39],[40,42],[41,43],[44,46],[45,47],[48,50],[49,51],[52,54],[53,55],[56,58],[57,59],[58,60],[59,61],[60,62],[61,63],[62,64],[63,65],[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,15],[16,17],[18,19],[20,21],[22,23],[24,25],[26,27],[28,29],[30,31],[32,33],[34,35],[36,37],[38,39],[40,41],[42,43],[44,45],[46,47],[48,49],[50,51],[52,53],[54,55],[56,57]]), Error: list index out of range, 'Test 78');
test(smallestStringWithSwaps("jklmnopqrstuvwxyza", [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[0,19]]), Error: list index out of range, 'Test 79');
test(smallestStringWithSwaps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,25],[1,24],[2,23],[3,22],[4,21],[5,20],[6,19],[7,18],[8,17],[9,16],[10,15],[11,14],[12,13],[0,13],[1,14],[2,15],[3,16],[4,17],[5,18],[6,19],[7,20],[8,21],[9,22],[10,23],[11,24],[12,25]]), aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz, 'Test 80');
test(smallestStringWithSwaps("abcdefgh", [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[0,7]]), abcdefgh, 'Test 81');
test(smallestStringWithSwaps("aaabbbccc", [[0,1],[2,3],[4,5],[0,5],[1,4],[2,8]]), aaabbbccc, 'Test 82');
test(smallestStringWithSwaps("abcdexyz", [[0,7],[1,6],[2,5],[3,4]]), abcdexyz, 'Test 83');
test(smallestStringWithSwaps("abcdefghijklmnopqrstuvwxyz", [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25]]), abcdefghijklmnopqrstuvwxyz, 'Test 84');
test(smallestStringWithSwaps("abcdefghij", [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]]), abcdefghij, 'Test 85');
test(smallestStringWithSwaps("abcdef", [[0,5],[1,4],[2,3]]), abcdef, 'Test 86');
test(smallestStringWithSwaps("zyxwvutsrqponmlkjihgfedcba", [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25]]), abcdefghijklmnopqrstuvwxyz, 'Test 87');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

