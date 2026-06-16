// Test: 2405. Optimal Partition Of String
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { partitionString } = require("./solution");

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

console.log("\n2405. Optimal Partition Of String\n");

test(partitionString("abcdefg"), 1, 'Test 1');
test(partitionString("abac"), 2, 'Test 2');
test(partitionString("abcdabcdeabcdefabcdefg"), 4, 'Test 3');
test(partitionString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 44, 'Test 4');
test(partitionString("abababab"), 4, 'Test 5');
test(partitionString("aaaaa"), 5, 'Test 6');
test(partitionString("a"), 1, 'Test 7');
test(partitionString("optimal"), 1, 'Test 8');
test(partitionString("abcabcabc"), 3, 'Test 9');
test(partitionString("ssssss"), 6, 'Test 10');
test(partitionString("abcabcabcabc"), 4, 'Test 11');
test(partitionString("ab"), 1, 'Test 12');
test(partitionString("partition"), 2, 'Test 13');
test(partitionString("racecar"), 2, 'Test 14');
test(partitionString("xyzxyzxyz"), 3, 'Test 15');
test(partitionString("abcadef"), 2, 'Test 16');
test(partitionString("banana"), 3, 'Test 17');
test(partitionString("abc"), 1, 'Test 18');
test(partitionString("pqrspqrspqrs"), 3, 'Test 19');
test(partitionString("aabbccddeeff"), 7, 'Test 20');
test(partitionString("abcdeabcde"), 2, 'Test 21');
test(partitionString("aabbcc"), 4, 'Test 22');
test(partitionString("unique"), 2, 'Test 23');
test(partitionString("characters"), 2, 'Test 24');
test(partitionString("aaaaaaaaa"), 9, 'Test 25');
test(partitionString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 27, 'Test 26');
test(partitionString("abacaba"), 4, 'Test 27');
test(partitionString("abca"), 2, 'Test 28');
test(partitionString("zxyxzyxz"), 3, 'Test 29');
test(partitionString("xyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzxy"), 40, 'Test 30');
test(partitionString("abcdeabcdeabcdeabcdeabcde"), 5, 'Test 31');
test(partitionString("xyxxyxyxyxxyxyxyxyxyx"), 12, 'Test 32');
test(partitionString("repeatrepeatrepeatrepeatrepeat"), 10, 'Test 33');
test(partitionString("uniquecharacterswithoutrepeating"), 6, 'Test 34');
test(partitionString("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 23, 'Test 35');
test(partitionString("abacabadabacabaeabacabafabacabadabacabaeabacabaf"), 24, 'Test 36');
test(partitionString("abacabadabacabaeabacabafabacabadabacabaeabacabafabacabadabacabaeabacabafabacabadabacabaeabacabafabacabadabacabaeabacabafabacabadabacabaeabacabaf"), 72, 'Test 37');
test(partitionString("abacabadabacabad"), 8, 'Test 38');
test(partitionString("aaaaabbbbbccccdddd"), 15, 'Test 39');
test(partitionString("abcdabcdeabcdabcdef"), 4, 'Test 40');
test(partitionString("aaaabbbbccccddddeeeeffffgggghhhhiiiiiiijjjjjjkkkkkkklllllllmmmmmmmnnnnnnnooooooooppppppppqqqqqqqqrrrrrrrrssssssssttttttttuuuuuuuuvvvvvvvvwwwwwwwwxxxxxxxxxyyyyyyyyzzzzzzzz"), 145, 'Test 41');
test(partitionString("longerstringwithoutrepeats"), 5, 'Test 42');
test(partitionString("abcba"), 2, 'Test 43');
test(partitionString("mississippimississippimississippi"), 15, 'Test 44');
test(partitionString("aaaaabbbbbcccccdddddeeeeeeaaaaabbbbbcccccdddddeeeeeeaaaaabbbbbcccccdddddeeeeeeaaaaabbbbbcccccdddddeeeeee"), 85, 'Test 45');
test(partitionString("aaaaabbbbbcccccdddddeeeee"), 21, 'Test 46');
test(partitionString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 30, 'Test 47');
test(partitionString("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 16, 'Test 48');
test(partitionString("abracadabraabracadabraabracadabra"), 15, 'Test 49');
test(partitionString("aaaaaaaaaabbbbbbbbccccccccddddddddeeeeeeeeffffffffgggggggghhhhhhhh"), 59, 'Test 50');
test(partitionString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzz"), 29, 'Test 51');
test(partitionString("noon"), 2, 'Test 52');
test(partitionString("abcabcabcabcabcabc"), 6, 'Test 53');
test(partitionString("thisisaverylongstringthatwilltestthealgorithm"), 9, 'Test 54');
test(partitionString("hellohellohellohellohellohello"), 12, 'Test 55');
test(partitionString("abcdefghijklmnopqrstuvwxyzzzzzzzzzzzzzzzzzzzzzzzz"), 24, 'Test 56');
test(partitionString("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm"), 4, 'Test 57');
test(partitionString("abcdedcbaabcdedcbaabcdedcbaabcdedcbaabcdedcbaabcdedcbaabcdedcbaabcdedcbaabcdedcbaabcdedcba"), 20, 'Test 58');
test(partitionString("abacdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 3, 'Test 59');
test(partitionString("abacaxbabax"), 5, 'Test 60');
test(partitionString("aaaaaaaabbbbbbbbccccccccddddddddeeeeeeee"), 36, 'Test 61');
test(partitionString("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"), 40, 'Test 62');
test(partitionString("abababababababababab"), 10, 'Test 63');
test(partitionString("abacabadabacaba"), 8, 'Test 64');
test(partitionString("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), 36, 'Test 65');
test(partitionString("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 3, 'Test 66');
test(partitionString("thecuriouscaseofjeffersonraisethetrapdoor"), 8, 'Test 67');
test(partitionString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzabcdefghijklmnopqrstuvwxyz"), 28, 'Test 68');
test(partitionString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 70, 'Test 69');
test(partitionString("aaaaabbbbbccccddddeeeeffffgggg"), 24, 'Test 70');
test(partitionString("xyzzysabcabcabcabcabcabcabcabc"), 9, 'Test 71');
test(partitionString("abcdefghijklaaaaaaaaaabbbbbbbbbbccccccccccdddddddddd"), 38, 'Test 72');
test(partitionString("abracadabraabracadabra"), 10, 'Test 73');
test(partitionString("ababcbabcab"), 5, 'Test 74');
test(partitionString("abacabadabacabadabacabadabacabadabacabadabacabadabacabad"), 28, 'Test 75');
test(partitionString("mnopqrstuvwxyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 61, 'Test 76');
test(partitionString("abacabadabacabaeabacabafabacabadabacabaeabacabafabacabadabacabaeabacabaf"), 36, 'Test 77');
test(partitionString("aabbccddeeffaabbccddeeff"), 13, 'Test 78');
test(partitionString("zyxwvutsrqponmlkjihgfedcba"), 1, 'Test 79');
test(partitionString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 40, 'Test 80');
test(partitionString("abcdefghijklmnopqrstuvwxyz"), 1, 'Test 81');
test(partitionString("abcdabcdabcdabcdabcdabcdabcdabcdabcd"), 9, 'Test 82');
test(partitionString("thisisanexamplestringthatneedstobepartitionedproperly"), 9, 'Test 83');
test(partitionString("abacabadabacabaeabacabaf"), 12, 'Test 84');
test(partitionString("abacabadabacabaeabacabafabacabadabacabaeabacabafabacabadabacabaeabacabafabacabadabacabaeabacabafabacabadabacabaeabacabaf"), 60, 'Test 85');
test(partitionString("aabcbcbcbaabcabcbcbcba"), 10, 'Test 86');
test(partitionString("mnopqrsmnopqrsmnopqrsmnopqrs"), 4, 'Test 87');
test(partitionString("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm"), 2, 'Test 88');
test(partitionString("abcdabcdabcdabcdabcdabcdabcdabcd"), 8, 'Test 89');
test(partitionString("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 5, 'Test 90');
test(partitionString("aaaaaabbcccddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnoooo"), 43, 'Test 91');
test(partitionString("abcabcabcabcabcabcabcabc"), 8, 'Test 92');
test(partitionString("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 2, 'Test 93');
test(partitionString("abcdabcdaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 29, 'Test 94');
test(partitionString("abacabadabacabaeabacabafabacabadabacabaeabacabafabacabadabacabaeabacabafabacabadabacabaeabacabaf"), 48, 'Test 95');
test(partitionString("ppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxxyyyyzzzz"), 35, 'Test 96');
test(partitionString("aabbaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 29, 'Test 97');
test(partitionString("xyzzxyzzxyzzxyzzxyzzxyzz"), 12, 'Test 98');
test(partitionString("mississippi"), 5, 'Test 99');
test(partitionString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzz"), 43, 'Test 100');
test(partitionString("abcabcabcabcabc"), 5, 'Test 101');
test(partitionString("aaaaabbbbbbbaaaabbbbbbbaaaabbbbbbbaaaabbbbb"), 36, 'Test 102');
test(partitionString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 50, 'Test 103');

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
