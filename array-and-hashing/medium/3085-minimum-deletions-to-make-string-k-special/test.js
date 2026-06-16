// Test: 3085. Minimum Deletions To Make String K Special
// 53 test cases from LeetCodeDataset
// Run: node test.js

const { minimumDeletions } = require("./solution");

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

console.log("\n3085. Minimum Deletions To Make String K Special\n");

test(minimumDeletions("abacabadaba", 2), 3, 'Test 1');
test(minimumDeletions("abacabadabacaba", 3), 4, 'Test 2');
test(minimumDeletions("xyz", 0), 0, 'Test 3');
test(minimumDeletions("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 10), 0, 'Test 4');
test(minimumDeletions("abcabcabc", 1), 0, 'Test 5');
test(minimumDeletions("mnbvcxzlkjhgfdsapoiuytrewq", 5), 0, 'Test 6');
test(minimumDeletions("aabcaba", 0), 3, 'Test 7');
test(minimumDeletions("dabdcbdcdcd", 2), 2, 'Test 8');
test(minimumDeletions("zzzzz", 0), 0, 'Test 9');
test(minimumDeletions("aaabaaa", 2), 1, 'Test 10');
test(minimumDeletions("abcdabcdabcd", 1), 0, 'Test 11');
test(minimumDeletions("aaaaa", 0), 0, 'Test 12');
test(minimumDeletions("xyz", 1), 0, 'Test 13');
test(minimumDeletions("abcde", 3), 0, 'Test 14');
test(minimumDeletions("abacabadabacaba", 1), 6, 'Test 15');
test(minimumDeletions("qqwweerrttyyuuiioopp", 2), 0, 'Test 16');
test(minimumDeletions("aabcccdddd", 1), 2, 'Test 17');
test(minimumDeletions("xyxxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy", 2), 0, 'Test 18');
test(minimumDeletions("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 0), 0, 'Test 19');
test(minimumDeletions("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10), 0, 'Test 20');
test(minimumDeletions("lkjghwertyuiopasdfghjklzxcvbnmlkjhgfdwsazxcvbnmlkjhgfdwsazxcvbnmlkjhgfdwsa", 15), 0, 'Test 21');
test(minimumDeletions("zzzzzyyyyyxxxxxwwwwvvvvuttttssssrrrrqqqqppppooooonnnnmmmmmllllkkkkjjjjiiiihhhhggggffffffeeeeee", 5), 0, 'Test 22');
test(minimumDeletions("xyzzzzzzzzzyxyzzzzzzzzzyxyzzzzzzzzzy", 5), 9, 'Test 23');
test(minimumDeletions("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 3), 0, 'Test 24');
test(minimumDeletions("mnbvcxzlkjhgfdsapoiuytrewqmnbvcxzlkjhgfdsapoiuytrewqmnbvcxzlkjhgfdsapoiuytrewq", 8), 0, 'Test 25');
test(minimumDeletions("aaabbbcccddddeeeffffffgggggggg", 4), 1, 'Test 26');
test(minimumDeletions("thisisanexamplestringwithvariousfrequencies", 3), 4, 'Test 27');
test(minimumDeletions("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 5), 0, 'Test 28');
test(minimumDeletions("almosteveryletterisusedbutnotallabcdefghijklmnopqrstuvwxyzzzzzzzzzzz", 2), 17, 'Test 29');
test(minimumDeletions("thisisaverylongwordthatcontainsmanycharactersandneedscomplexprocessing", 10), 0, 'Test 30');
test(minimumDeletions("aaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbcccccccccccccccc", 2), 0, 'Test 31');
test(minimumDeletions("aaaaaaaaaaabbbbbbbbbbbccccccccccdddddddddd", 5), 0, 'Test 32');
test(minimumDeletions("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 25), 0, 'Test 33');
test(minimumDeletions("zzzzzzzzzzzzzzzzzzzz", 0), 0, 'Test 34');
test(minimumDeletions("abcdefghijklmnopqrstuvwxyz", 0), 0, 'Test 35');
test(minimumDeletions("abcdefghijklmnopqrstuvwxyzzzzzzzzzz", 5), 4, 'Test 36');
test(minimumDeletions("aaaaaaaaaabbbbbbbbccccccccddddddddeeeeeeeffffffffggggggghhhhhhhhiiiiiiiiii", 3), 0, 'Test 37');
test(minimumDeletions("unevenfrequenciesaxbxcxdxeuxyvxuyvyvxvyvxvyvxvyvxvyvxvyvxyvxyvxyvxyvxyvxyvxyvxyvxyvxyvxyvxy", 10), 23, 'Test 38');
test(minimumDeletions("aaaaaabbbccccdddddeeeeeffffffffggggghhhhhiiiiijjjjjkkkkklllllmmmmmnnnnnooooo", 5), 0, 'Test 39');
test(minimumDeletions("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzz", 1), 17, 'Test 40');
test(minimumDeletions("abcdefghij", 0), 0, 'Test 41');
test(minimumDeletions("ppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxxyyyyyyyyyyzzzzzzzzzz", 10), 0, 'Test 42');
test(minimumDeletions("qwertyuiopasdfghjklzxcvbnm", 10), 0, 'Test 43');
test(minimumDeletions("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 10), 0, 'Test 44');
test(minimumDeletions("verylongstringwithrepeatingcharactersaaaaaaaaaabbbbbbbbbbcccccccccc", 4), 20, 'Test 45');
test(minimumDeletions("ppppppppppppppppppppppppppppppppppppppppppppppppppppp", 0), 0, 'Test 46');
test(minimumDeletions("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1), 0, 'Test 47');
test(minimumDeletions("abcdeabcdabcdeabcdeabcdeabcdeabcde", 2), 0, 'Test 48');
test(minimumDeletions("ppppqqqqrrrsssttttuuuuvvvvwwwwxxxxxyyyyyzzzzzaaaaabbbbccccddddeeeeffffgggghhhhiiii", 5), 0, 'Test 49');
test(minimumDeletions("aabbaaccddccbbbaaadddcccbbaaa", 1), 6, 'Test 50');
test(minimumDeletions("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 0), 0, 'Test 51');
test(minimumDeletions("abcabcabcabcabcabcabcabcabcabc", 1), 0, 'Test 52');
test(minimumDeletions("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzqqqqqqqqqq", 4), 6, 'Test 53');

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
