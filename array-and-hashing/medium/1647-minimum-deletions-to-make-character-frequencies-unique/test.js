// Test: 1647. Minimum Deletions To Make Character Frequencies Unique
// 23 test cases from LeetCodeDataset
// Run: node test.js

const { minDeletions } = require("./solution");

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

console.log("\n1647. Minimum Deletions To Make Character Frequencies Unique\n");

test(minDeletions("aab"), 0, 'Test 1');
test(minDeletions("aabacabadabaeabafabagabahabaiabajabakabalabamabanabaoabapabaqabarabasabataabuabavabawabaxabayabajabaz"), 22, 'Test 2');
test(minDeletions("abcabcabc"), 3, 'Test 3');
test(minDeletions("aabbbcccddddeeeeeffffffggggggghhhhhhhhiiiiiiiii"), 2, 'Test 4');
test(minDeletions("zzzzzzzzzz"), 0, 'Test 5');
test(minDeletions("abcdefghijklmnopqrstuvwxyzz"), 24, 'Test 6');
test(minDeletions("abcdefghijklmnopqrstuvwxyz"), 25, 'Test 7');
test(minDeletions("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 49, 'Test 8');
test(minDeletions("ceabaacb"), 2, 'Test 9');
test(minDeletions("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 10');
test(minDeletions("aaabbbcc"), 2, 'Test 11');
test(minDeletions("aabbccddeeffgghhii"), 15, 'Test 12');
test(minDeletions("zyxwvutsrqponmlkjihgfedcba"), 25, 'Test 13');
test(minDeletions("a"), 0, 'Test 14');
test(minDeletions("zzzzzzzzzzyyyyyyyyyxxxxxxxwwwwwwvvvvuuuuutttttsssssrrrrqqqqppppooooonnnnmmmmlllkkkjjjiii"), 41, 'Test 15');
test(minDeletions("aabbccddeeefffggg"), 11, 'Test 16');
test(minDeletions("aabbccddeeefffhhhiiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 48, 'Test 17');
test(minDeletions("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzz"), 47, 'Test 18');
test(minDeletions("pppppppppooooooonnnnnmmmllllllkkkkjjjjiiiiiiiihhhhhhhggggggg"), 15, 'Test 19');
test(minDeletions("aabbbccccddddeeeee"), 3, 'Test 20');
test(minDeletions("abababababababababab"), 1, 'Test 21');
test(minDeletions("zzzzzzzzzzzyyyyyyyxxxxxxxwwwwwwvvvvuuuutttssrrqponmlkjihgfedcba"), 24, 'Test 22');
test(minDeletions("aabbbcccddddeeeeeffffffggggggghhhhhhhhiiiiiiiiijjjjjjjjjj"), 2, 'Test 23');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

