// Test: 806. Number Of Lines To Write String
// 46 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfLines } = require("./solution");

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

console.log("\n806. Number Of Lines To Write String\n");

test(numberOfLines([2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7], "examplestring"), [1, 76], 'Test 1');
test(numberOfLines([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"), [1, 43], 'Test 2');
test(numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "bbbcccdddaaa"), [2, 4], 'Test 3');
test(numberOfLines([5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55], "abcdefghijklmnopqrstuvwxyz"), [10, 55], 'Test 4');
test(numberOfLines([2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7], "akjflsajflsajfljsaljfljsalfjsalkfjsalkfjsalkfjsalkfjsalkfj"), [3, 38], 'Test 5');
test(numberOfLines([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), [3, 62], 'Test 6');
test(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "a"), [1, 10], 'Test 7');
test(numberOfLines([2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7], "abcdefghijklmnopqrstuvwxyz"), [2, 38], 'Test 8');
test(numberOfLines([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6], "abcdefghij"), [1, 55], 'Test 9');
test(numberOfLines([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26], "zyxwvutsrqponmlkjihgfedcba"), [4, 55], 'Test 10');
test(numberOfLines([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], "equalpairsofequalrowsandcolumnsinamatrix"), [2, 100], 'Test 11');
test(numberOfLines([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), [4, 16], 'Test 12');
test(numberOfLines([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], "samewidthforallcharacters"), [2, 25], 'Test 13');
test(numberOfLines([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6], "abcdefghijklmnopqrstuvwxyz"), [2, 31], 'Test 14');
test(numberOfLines([5,7,9,3,5,7,9,3,5,7,9,3,5,7,9,3,5,7,9,3,5,7,9,3,5,7], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), [4, 24], 'Test 15');
test(numberOfLines([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6], "abacabadabacabad"), [1, 30], 'Test 16');
test(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "abcdefghijklmnopqrstuvwxyz"), [3, 60], 'Test 17');
test(numberOfLines([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8], "qwertyuiopasdfghjklzxcvbnm"), [2, 36], 'Test 18');
test(numberOfLines([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], "equalwidthseachletter"), [1, 63], 'Test 19');
test(numberOfLines([2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7], "thisstringwillhavesomeunevenwidthsandshouldtesttheboundarycases"), [4, 70], 'Test 20');
test(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzz"), [26, 90], 'Test 21');
test(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "ababababababababababababababababababababababababababababababababababababab"), [8, 40], 'Test 22');
test(numberOfLines([9,2,2,8,4,4,7,6,6,2,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6], "narrowwidthsshouldwrapquickly"), [2, 76], 'Test 23');
test(numberOfLines([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), [1, 96], 'Test 24');
test(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "mississippi"), [2, 10], 'Test 25');
test(numberOfLines([8,6,10,10,5,5,7,3,7,2,8,10,4,4,3,3,6,14,8,5,11,11,5,10,4,10], "thisisaverylongstringthatwillrequiremultiplelines"), [4, 64], 'Test 26');
test(numberOfLines([10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80], "abcdefghijklmnopqrstuvwxyza"), [17, 90], 'Test 27');
test(numberOfLines([9,7,5,3,1,9,7,5,3,1,9,7,5,3,1,9,7,5,3,1,9,7,5,3,1,9], "atlasatlasmapping"), [2, 7], 'Test 28');
test(numberOfLines([10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80], "zyxwvutsrqponmlkjihgfedcba"), [17, 60], 'Test 29');
test(numberOfLines([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), [3, 60], 'Test 30');
test(numberOfLines([2,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], "aaaaaaaaaabbbbbbbbccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhh"), [2, 16], 'Test 31');
test(numberOfLines([10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80], "abcdefghijabcdefghijabcdefghijabcdefghij"), [24, 100], 'Test 32');
test(numberOfLines([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5], "zyxwvutsrqponmlkjihgfedcba"), [2, 55], 'Test 33');
test(numberOfLines([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5], "thisstringwillalsoneedmultiplelinesandshouldtestvariouscasesontheedges"), [4, 88], 'Test 34');
test(numberOfLines([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), [8, 52], 'Test 35');
test(numberOfLines([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), [1, 52], 'Test 36');
test(numberOfLines([3,1,4,1,5,9,2,6,5,3,5,9,2,6,5,3,5,9,7,9,3,2,3,8,4,6], "qzweasxcrtyplkjhgfiodnmbvcxz"), [2, 40], 'Test 37');
test(numberOfLines([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), [1, 78], 'Test 38');
test(numberOfLines([26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], "abcdefghijklmnopqrstuvwxyz"), [4, 55], 'Test 39');
test(numberOfLines([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], "wonderfulwizardwithawonderfulwizardofoz"), [1, 78], 'Test 40');
test(numberOfLines([5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5], "shortstringsarefun"), [1, 47], 'Test 41');
test(numberOfLines([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], "abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), [2, 14], 'Test 42');
test(numberOfLines([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), [2, 4], 'Test 43');
test(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), [6, 20], 'Test 44');
test(numberOfLines([5,10,15,20,25,5,10,15,20,25,5,10,15,20,25,5,10,15,20,25,5,10,15,20,25,5], "optimization"), [3, 20], 'Test 45');
test(numberOfLines([8,6,4,2,10,6,4,2,8,6,4,2,10,6,4,2,8,6,4,2,10,6,4,2,8,6], "algorithmsanddatastructures"), [2, 46], 'Test 46');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

