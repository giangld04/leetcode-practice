// Test: 2399. Check Distances Between Same Letters
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { checkDistances } = require("./solution");

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

console.log("\n2399. Check Distances Between Same Letters\n");

test(checkDistances("abcdefghijklmnopqrztuvwxyz", [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), false, 'Test 1');
test(checkDistances("zz", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50]), false, 'Test 2');
test(checkDistances("zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba", [50,48,46,44,42,40,38,36,34,32,30,28,26,24,22,20,18,16,14,12,10,8,6,4,2,0]), false, 'Test 3');
test(checkDistances("abcdcba", [3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 4');
test(checkDistances("bbcaac", [3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 5');
test(checkDistances("zyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyz", [50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,0]), false, 'Test 6');
test(checkDistances("abcabc", [2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 7');
test(checkDistances("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 8');
test(checkDistances("abba", [2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 9');
test(checkDistances("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), false, 'Test 10');
test(checkDistances("aa", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 11');
test(checkDistances("abaccb", [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 12');
test(checkDistances("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba", [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), false, 'Test 13');
test(checkDistances("zyxwvutsrqponmlkjihgfedcba", [5,4,3,2,1,0,1,2,3,4,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 14');
test(checkDistances("abcdefghijklmnopqrstuvwxyzabcde", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 15');
test(checkDistances("zazbzczdzdzczbza", [2,3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 16');
test(checkDistances("abcdefghijkllkjihgfedcba", [9,8,7,6,5,4,3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 17');
test(checkDistances("zxyxzyxzyx", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9]), false, 'Test 18');
test(checkDistances("zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba", [50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 19');
test(checkDistances("aabbaa", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 20');
test(checkDistances("qrstuvwxyzzzyxwvutsrqp", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 21');
test(checkDistances("zyxzyxzyxzyx", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]), false, 'Test 22');
test(checkDistances("acbacbacbacbacbacb", [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 23');
test(checkDistances("abcdefghijabcdefghij", [9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 24');
test(checkDistances("zamnzamn", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]), false, 'Test 25');
test(checkDistances("abcdefghijzyxwvutsrqponmlk", [9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 26');
test(checkDistances("mnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), false, 'Test 27');
test(checkDistances("abcdefggfedcba", [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 28');
test(checkDistances("abcdefgabcdefg", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 29');
test(checkDistances("lkjihglkjh", [0,0,0,0,0,0,0,0,0,0,0,3,2,1,0,1,2,3,0,0,0,0,0,0,0,0]), false, 'Test 30');
test(checkDistances("aaaabbbbccccddddeeeeffffgggghhhhiiii", [3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 31');
test(checkDistances("abcdefgghgfedcba", [6,5,4,3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 32');
test(checkDistances("abababababababab", [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 33');
test(checkDistances("abababababababababababab", [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 34');
test(checkDistances("pqrstuvwxyzzzyxwvutsrqp", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,10,9,8,7,6,5,4,3,2,1]), false, 'Test 35');
test(checkDistances("abacabadabacabad", [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 36');
test(checkDistances("abcdefghijklmabcdefghijklm", [25,24,23,22,21,20,19,18,17,16,15,14,13,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 37');
test(checkDistances("abcdefgihgfedcba", [6,5,4,3,2,1,0,7,6,5,4,3,2,1,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 38');
test(checkDistances("qponmlkjihgfedcbazyxwvutsr", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 39');
test(checkDistances("zzzyyxxwwvvuuttssrrqqppoonnmmlkkjjiihhggffeeddccbaa", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50]), false, 'Test 40');
test(checkDistances("acbacbacbacb", [2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 41');
test(checkDistances("zzzzzzzzzzzzzzzzzzzzzzzz", [25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 42');
test(checkDistances("zyxzyxzyxzyxzyxzyx", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]), false, 'Test 43');
test(checkDistances("qrstuvwxzyabcdefghijklmnop", [23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,0]), true, 'Test 44');
test(checkDistances("mnopqrstuvwxzzyxwvutsrqponmlkjihgfedcba", [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 45');
test(checkDistances("zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba", [50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25]), false, 'Test 46');
test(checkDistances("zyxwvutsrqponmlkjihgfedcbazyxw", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,7,6,5]), false, 'Test 47');
test(checkDistances("abcdabcd", [3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 48');
test(checkDistances("abcdefgihgfedcba", [0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 49');
test(checkDistances("abcdefgabcdefg", [5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 50');
test(checkDistances("qrstuvqr", [0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 51');
test(checkDistances("mnopqrsmnopqr", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 52');
test(checkDistances("mnopmnop", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,0,0,0,0,0,0,0]), false, 'Test 53');
test(checkDistances("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba", [50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25]), false, 'Test 54');
test(checkDistances("qrstuvqrstuv", [0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0]), false, 'Test 55');
test(checkDistances("abcdefgabcdefg", [1,2,3,4,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 56');
test(checkDistances("zebrazebra", [23,0,0,0,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 57');
test(checkDistances("abcdefghijhgfedcba", [9,8,7,6,5,4,3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 58');
test(checkDistances("ababababababababababababababababababababab", [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 59');
test(checkDistances("mnopqrsvwxyzxyzwvrsqponm", [0,0,0,0,0,0,0,0,0,0,0,5,4,3,2,1,0,1,2,3,4,5,0,0,0,0,0]), false, 'Test 60');
test(checkDistances("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 61');
test(checkDistances("lmnopqrstuvw", [0,0,0,0,0,0,0,0,0,0,0,0,2,3,4,5,6,7,8,9,0,0,0,0,0,0]), true, 'Test 62');
test(checkDistances("abcdefgihgfedcba", [1,2,3,4,5,6,7,6,5,4,3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 63');
test(checkDistances("mnopqrstuvwxyzz", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5]), false, 'Test 64');
test(checkDistances("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), false, 'Test 65');
test(checkDistances("pqrsrqpq", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0]), false, 'Test 66');
test(checkDistances("zabyxwvutsrqponmlkjihgfedcba", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 67');
test(checkDistances("abcdabcdabcdabcdabcdabcd", [3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 68');
test(checkDistances("qrstuvrstu", [0,0,0,0,0,0,0,5,4,3,2,1,0,1,2,3,4,0,0,0,0,0,0,0,0,0]), false, 'Test 69');
test(checkDistances("acbacbacbacbacbacb", [1,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 70');
test(checkDistances("lkjhlkjhlkjh", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0]), false, 'Test 71');
test(checkDistances("mnopqrsmnopqr", [0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 72');
test(checkDistances("abcdeffedcba", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0]), false, 'Test 73');
test(checkDistances("zabzyabzyabzyabz", [0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]), false, 'Test 74');
test(checkDistances("abcdefghigfedcba", [7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 75');
test(checkDistances("aabbaaccddaaff", [2,2,2,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 76');
test(checkDistances("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", [50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50]), false, 'Test 77');
test(checkDistances("abcdefghijabcdefghij", [9,8,7,6,5,4,3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 78');
test(checkDistances("abcdabcdeff", [1,1,1,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 79');
test(checkDistances("mnopqrstuvtwxzyabcdeffedcba", [10,9,8,7,6,5,4,3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 80');
test(checkDistances("abcdefghijklmnopqrstuvwxyz", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), true, 'Test 81');
test(checkDistances("abcdefghijklmnopqrstuvwxyzza", [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), false, 'Test 82');
test(checkDistances("mnopqrstuv", [0,0,0,0,10,10,10,10,10,10,10,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 83');
test(checkDistances("mnopqrmpqr", [0,0,0,0,0,0,0,0,0,0,0,4,3,2,1,0,1,2,3,4,0,0,0,0,0,0]), false, 'Test 84');
test(checkDistances("lmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba", [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), false, 'Test 85');
test(checkDistances("mnopmnop", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0]), false, 'Test 86');
test(checkDistances("acbacbacba", [0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 87');
test(checkDistances("mnopqrsmnopqrsmnopqrs", [0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0]), false, 'Test 88');
test(checkDistances("fedcbafedcba", [5,4,3,2,1,0,1,2,3,4,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 89');
test(checkDistances("abcdefabcdefabcdefabcdefabcdefabcdef", [5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 90');
test(checkDistances("abcdefghijklmnopqrstuvwxzy", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,0,0]), true, 'Test 91');
test(checkDistances("qrstuvqponmlkjihgfedcbazyxw", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,8,7,6]), false, 'Test 92');
test(checkDistances("abcdabcdabcd", [3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 93');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

