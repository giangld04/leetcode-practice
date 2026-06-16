// Test: 2262. Total Appeal Of A String
// 69 test cases from LeetCodeDataset
// Run: node test.js

const { appealSum } = require("./solution");

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

console.log("\n2262. Total Appeal Of A String\n");

test(appealSum("abcdefghijklmnopqrstuvwxyz"), 3276, 'Test 1');
test(appealSum("zzzaaa"), 30, 'Test 2');
test(appealSum("a"), 1, 'Test 3');
test(appealSum("abacabadabacaba"), 357, 'Test 4');
test(appealSum("abcabcabc"), 109, 'Test 5');
test(appealSum("abbca"), 28, 'Test 6');
test(appealSum("ababababab"), 100, 'Test 7');
test(appealSum("zzzzzzzzzzzzzzzzzzzz"), 210, 'Test 8');
test(appealSum("aaa"), 6, 'Test 9');
test(appealSum("python"), 56, 'Test 10');
test(appealSum("abcabc"), 46, 'Test 11');
test(appealSum("world"), 35, 'Test 12');
test(appealSum("zzzzzzzzzz"), 55, 'Test 13');
test(appealSum("abcdabcdabcd"), 244, 'Test 14');
test(appealSum("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyz"), 1306, 'Test 15');
test(appealSum("abc"), 10, 'Test 16');
test(appealSum("abcd"), 20, 'Test 17');
test(appealSum("aaaa"), 10, 'Test 18');
test(appealSum("hello"), 29, 'Test 19');
test(appealSum("mississippi"), 148, 'Test 20');
test(appealSum("zzzzz"), 15, 'Test 21');
test(appealSum("z"), 1, 'Test 22');
test(appealSum("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 13078, 'Test 23');
test(appealSum("longstringwithvariouscharacters"), 3921, 'Test 24');
test(appealSum("code"), 20, 'Test 25');
test(appealSum("zyxwvutsrqponmlkjihgfedcba"), 3276, 'Test 26');
test(appealSum("xyzzxyzzxyzz"), 191, 'Test 27');
test(appealSum("aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeefffffffffgggggggggghhhhhhhhhh"), 11380, 'Test 28');
test(appealSum("abcdefg"), 84, 'Test 29');
test(appealSum("aabbccaaabbbccc"), 274, 'Test 30');
test(appealSum("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzz"), 18730, 'Test 31');
test(appealSum("abcdefghijabcdefghijabcdefghijabcdefghij"), 6520, 'Test 32');
test(appealSum("bbaaccddeeffgg"), 329, 'Test 33');
test(appealSum("aabbaabbaabbccddeeefffggghhhiiijjjkkklllmnnnooopppqqqrrrsssttuuuuuuuuvvwxyz"), 26940, 'Test 34');
test(appealSum("abracadabra"), 210, 'Test 35');
test(appealSum("abcabcabcabcabcabcabcabcabcabc"), 1306, 'Test 36');
test(appealSum("uniquecharacters"), 677, 'Test 37');
test(appealSum("aabbc"), 25, 'Test 38');
test(appealSum("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzz"), 23011, 'Test 39');
test(appealSum("aabbaabbaabbaabbaabbaabbaabbaabb"), 1008, 'Test 40');
test(appealSum("aaaaaaaaaabbbbbbbbbbcccccccccc"), 865, 'Test 41');
test(appealSum("abacabadabacabadabacabadabacabad"), 1838, 'Test 42');
test(appealSum("ababababababababababababababa"), 841, 'Test 43');
test(appealSum("ninetyninebottlesofbeer"), 1564, 'Test 44');
test(appealSum("abcdabcdbcadbacdbac"), 646, 'Test 45');
test(appealSum("aaaaaaaaaabbbbbbbbbbccccccccccdddddddddd"), 1820, 'Test 46');
test(appealSum("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzabcdefghijklmnopqrstuvwxyz"), 46306, 'Test 47');
test(appealSum("xyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 5345, 'Test 48');
test(appealSum("qwertyuiopasdfghjklzxcvbnm"), 3276, 'Test 49');
test(appealSum("abcabcabcabcabcabcabcabcabc"), 1054, 'Test 50');
test(appealSum("abababababababab"), 256, 'Test 51');
test(appealSum("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 21528, 'Test 52');
test(appealSum("xyxzyzyzyxzyxzyzyxzyxzyzyxzyxzyzyxzyxzyzyxzyxzyzyxzyxzyzyxz"), 5105, 'Test 53');
test(appealSum("hellohellohello"), 377, 'Test 54');
test(appealSum("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"), 46120, 'Test 55');
test(appealSum("banana"), 40, 'Test 56');
test(appealSum("hellohellobyebye"), 513, 'Test 57');
test(appealSum("pneumonoultramicroscopicsilicovolcanoconiosis"), 8230, 'Test 58');
test(appealSum("abacabadaba"), 177, 'Test 59');
test(appealSum("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1378, 'Test 60');
test(appealSum("thisisareallylongteststringwithmanydistinctcharactersandrepeatedones"), 25027, 'Test 61');
test(appealSum("thisisaverylongstringwithmanycopiesofthissubstringthissubstringthissubstring"), 35609, 'Test 62');
test(appealSum("xyxzyxyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyz"), 2363, 'Test 63');
test(appealSum("aaaaabbbbbccccc"), 220, 'Test 64');
test(appealSum("xyzzzyxzyzyzyxzyzyxzyzyzyzyxzyzyzyzyzyzyzyzyzyzyzyzyzyz"), 4088, 'Test 65');
test(appealSum("amazingappeal"), 374, 'Test 66');
test(appealSum("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1275, 'Test 67');
test(appealSum("aabbccaaaabbbccc"), 309, 'Test 68');
test(appealSum("abacabadabacabaabacabadabacaba"), 1555, 'Test 69');

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
