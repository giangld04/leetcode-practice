// Test: 3016. Minimum Number Of Pushes To Type Word Ii
// 47 test cases from LeetCodeDataset
// Run: node test.js

const { minimumPushes } = require("./solution");

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

console.log("\n3016. Minimum Number Of Pushes To Type Word Ii\n");

test(minimumPushes("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 52, 'Test 1');
test(minimumPushes("abcde"), 5, 'Test 2');
test(minimumPushes("zyxwvutsrqponmlkjihgfedcba"), 56, 'Test 3');
test(minimumPushes("mississippi"), 11, 'Test 4');
test(minimumPushes("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"), 52, 'Test 5');
test(minimumPushes("aaaabbbbccccddddeeeeffffgggghhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkkllllllllllllmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnoooooooppppppppppppppppqqqqqqqqqqqqqqqqrrrrrrrrrrrrrrrrrsssssssssssssssstttttttttttttttttuuuuuuuuuuuuuuuuuvvvvvvvvvvvvvvvvvwwwwwwwwwwwwwwwwwxxxxxxxxxyyyyyyyyyyyyyyyyyzzzzzzzzzzzzzzzzz"), 499, 'Test 6');
test(minimumPushes("hellohellohellohellohellohellohellohellohellohello"), 50, 'Test 7');
test(minimumPushes("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), 88, 'Test 8');
test(minimumPushes("xyzxyzxyzxyz"), 12, 'Test 9');
test(minimumPushes("abcdefghijklmnopqrstuvwxyz"), 56, 'Test 10');
test(minimumPushes("a"), 1, 'Test 11');
test(minimumPushes("aaabbbcccdddeeefffggghhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz"), 198, 'Test 12');
test(minimumPushes("ababababababababababababababababababababab"), 42, 'Test 13');
test(minimumPushes("aabbccddeeffgghhiiiiii"), 24, 'Test 14');
test(minimumPushes("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 98, 'Test 15');
test(minimumPushes("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 168, 'Test 16');
test(minimumPushes("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), 104, 'Test 17');
test(minimumPushes("ppppppppppppppppppppppppppppppppppppppppppppppppppppqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"), 104, 'Test 18');
test(minimumPushes("mississippimississippimississippimississippi"), 44, 'Test 19');
test(minimumPushes("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 162, 'Test 20');
test(minimumPushes("loremipsumdolorsitametconsecteturadipiscingelitloremipsumdolorsitametconsecteturadipiscingelitloremipsumdolorsitametconsecteturadipiscingelit"), 183, 'Test 21');
test(minimumPushes("abcdefghijklmnopqrstuvwxyzzzzzzzzzzzzzzzzzzzzzzzz"), 79, 'Test 22');
test(minimumPushes("abcdefghijklmnopqrstuvwxyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 143, 'Test 23');
test(minimumPushes("onelongwordwithoutrepetitionsonelongwordwithoutrepetitions"), 70, 'Test 24');
test(minimumPushes("thequickbrownfoxjumpsoverthelazydogthequickbrownfoxjumpsoverthelazydog"), 130, 'Test 25');
test(minimumPushes("uniquelettersabcdefghijklmnopqrstuvwxyzuniqueletters"), 84, 'Test 26');
test(minimumPushes("aaaaaaaaaabbbbbbbbccccccccddddddddeeeeeeeffffffffggggggghhhhhhhh"), 64, 'Test 27');
test(minimumPushes("nnnnneeeeffffddddeeeeffffddddddddddddeeeeeeeeeeeeeeeeffffffddddddddddddddeeeeeeeeeeeeeeeeffffffdddddddddddddeeeeeeeeeeeeee"), 122, 'Test 28');
test(minimumPushes("equalprobabilityabcdefghijklmnopqrstuvwxyz"), 76, 'Test 29');
test(minimumPushes("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzz"), 136, 'Test 30');
test(minimumPushes("ppppoooolllliiiihhhhggggffffeeeeeeeedddddccccbbbaaa"), 65, 'Test 31');
test(minimumPushes("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzz"), 114, 'Test 32');
test(minimumPushes("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm"), 112, 'Test 33');
test(minimumPushes("mnbvcxzvbnmzxcvbnmxcvbnmxcvbnmxcvbnmxcvbnmxcvbnmxcvbnmxcvbnmxcvbnmxcvbnmxcvbnmxcvbnmxcvbnmxcvbnmxcvbnm"), 102, 'Test 34');
test(minimumPushes("aaaabbbbccccddddeeeeffffgggghhhhiiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz"), 225, 'Test 35');
test(minimumPushes("repeatedrepeatedrepeatedrepeatedrepeatedrepeated"), 48, 'Test 36');
test(minimumPushes("aabbcdeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 104, 'Test 37');
test(minimumPushes("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 112, 'Test 38');
test(minimumPushes("frequencydistributionfrequencydistribution"), 54, 'Test 39');
test(minimumPushes("programmingproblemsolvingprogramming"), 42, 'Test 40');
test(minimumPushes("qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiop"), 132, 'Test 41');
test(minimumPushes("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 56, 'Test 42');
test(minimumPushes("mississippiissippiissippi"), 25, 'Test 43');
test(minimumPushes("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 170, 'Test 44');
test(minimumPushes("abcdefghijklnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 108, 'Test 45');
test(minimumPushes("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzz"), 120, 'Test 46');
test(minimumPushes("frequentfrequentfrequentfrequentfrequentfrequentfrequentfrequentfrequentfrequent"), 80, 'Test 47');

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
