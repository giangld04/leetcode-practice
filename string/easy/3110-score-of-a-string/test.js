// Test: 3110. Score Of A String
// 88 test cases from LeetCodeDataset
// Run: node test.js

const { scoreOfString } = require("./solution");

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

console.log("\n3110. Score Of A String\n");

test(scoreOfString("abcdefghijklmnopqrstuvwxyz"), 25, 'Test 1');
test(scoreOfString("a"), 0, 'Test 2');
test(scoreOfString("abracadabra"), 78, 'Test 3');
test(scoreOfString("zzzz"), 0, 'Test 4');
test(scoreOfString("zyx"), 2, 'Test 5');
test(scoreOfString("mnopqr"), 5, 'Test 6');
test(scoreOfString("python"), 34, 'Test 7');
test(scoreOfString("aaa"), 0, 'Test 8');
test(scoreOfString("abcdabcd"), 9, 'Test 9');
test(scoreOfString("zzz"), 0, 'Test 10');
test(scoreOfString("xyz"), 2, 'Test 11');
test(scoreOfString("zaz"), 50, 'Test 12');
test(scoreOfString("zyxwvut"), 6, 'Test 13');
test(scoreOfString("abc"), 2, 'Test 14');
test(scoreOfString("hello"), 13, 'Test 15');
test(scoreOfString("aabbcc"), 2, 'Test 16');
test(scoreOfString("mississippi"), 58, 'Test 17');
test(scoreOfString("qpqpqpqp"), 7, 'Test 18');
test(scoreOfString("zyxwvutsrqponmlkjihgfedcba"), 25, 'Test 19');
test(scoreOfString("qwerty"), 44, 'Test 20');
test(scoreOfString("aaaabbbbccccdddd"), 3, 'Test 21');
test(scoreOfString("qwertyuiopasdfghjklzxcvbnmqwertyui"), 276, 'Test 22');
test(scoreOfString("abcdabcdabcdabcdabcd"), 27, 'Test 23');
test(scoreOfString("lkjlkjlkjlkjlkjlkjlkjlkjlkjlkjlkjlkjlkj"), 50, 'Test 24');
test(scoreOfString("abcdefghijabcdefghijabcdefghijabcdefghij"), 63, 'Test 25');
test(scoreOfString("learning"), 49, 'Test 26');
test(scoreOfString("helloalibaba"), 51, 'Test 27');
test(scoreOfString("aaabbbcccdddeeefffggghhhiiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz"), 25, 'Test 28');
test(scoreOfString("thisisaverylongstringwithavarietyofcharacters"), 447, 'Test 29');
test(scoreOfString("abacabadabacaba"), 22, 'Test 30');
test(scoreOfString("code"), 24, 'Test 31');
test(scoreOfString("abcdefghijklmnopqrstuvwxyzzzzzyxwvutsrqponmlkjihgfedcba"), 50, 'Test 32');
test(scoreOfString("abcabcabcabcabcabcabcabcabcabc"), 38, 'Test 33');
test(scoreOfString("hellohellohellohellohello"), 93, 'Test 34');
test(scoreOfString("a" * 50 + "z" * 50), Error: Solution.scoreOfString[] missing 1 required positional argument: 's', 'Test 35');
test(scoreOfString("abcdabcda"), 12, 'Test 36');
test(scoreOfString("data"), 41, 'Test 37');
test(scoreOfString("challenge"), 48, 'Test 38');
test(scoreOfString("artificial"), 67, 'Test 39');
test(scoreOfString("abcabcabcabc"), 14, 'Test 40');
test(scoreOfString("mnopqrstmnopqrstmnopqr"), 33, 'Test 41');
test(scoreOfString("hellotherefriends"), 119, 'Test 42');
test(scoreOfString("quickbrownfoxjumpsoverthelazydog"), 282, 'Test 43');
test(scoreOfString("qrstuvpqponmlkjihgfedcba"), 28, 'Test 44');
test(scoreOfString("aaaabbbbccccddddeeeeffff"), 5, 'Test 45');
test(scoreOfString("abczzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 25, 'Test 46');
test(scoreOfString("science"), 48, 'Test 47');
test(scoreOfString("thefiveboxingwizardsjumpquickly"), 295, 'Test 48');
test(scoreOfString("aaaaabbbbbcccccdddddee"), 4, 'Test 49');
test(scoreOfString("qwertyuiopasdfghjklzxcvbnm"), 212, 'Test 50');
test(scoreOfString("mnbvcxzlkjhgfdsapoiuytrewqmnbvcxzlkjhgfdsapoiuytrewq"), 428, 'Test 51');
test(scoreOfString("zazazazazazazazazazazazazazazazazazazazazazazazaza"), 1225, 'Test 52');
test(scoreOfString("ejhjhehjhejhejhejhejhej"), 69, 'Test 53');
test(scoreOfString("developer"), 70, 'Test 54');
test(scoreOfString("abababababababab"), 15, 'Test 55');
test(scoreOfString("abcdefghijklmnopqrstuvwxyza"), 50, 'Test 56');
test(scoreOfString("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 75, 'Test 57');
test(scoreOfString("noon"), 2, 'Test 58');
test(scoreOfString("solution"), 35, 'Test 59');
test(scoreOfString("lkjasdlfkjsadlkfjasdlkfjasdlkfjasdlkfjsadlkfj"), 340, 'Test 60');
test(scoreOfString("qpwoeirutyalskdjfhgzmxcvbnm"), 234, 'Test 61');
test(scoreOfString("abcabcabcabcabcabc"), 22, 'Test 62');
test(scoreOfString("abcdefgfe_dcba"), 22, 'Test 63');
test(scoreOfString("algorithm"), 64, 'Test 64');
test(scoreOfString("sdjfnwiehfuiwehfiuhweihufew"), 242, 'Test 65');
test(scoreOfString("thisisaverylongstringwithvariouscharacters"), 417, 'Test 66');
test(scoreOfString("jfkienfehndsjdfhienfhisodfns"), 151, 'Test 67');
test(scoreOfString("intelligence"), 62, 'Test 68');
test(scoreOfString("qwen"), 33, 'Test 69');
test(scoreOfString("alibabacloud"), 61, 'Test 70');
test(scoreOfString("fun"), 22, 'Test 71');
test(scoreOfString("hellothereitisacoldwinter"), 210, 'Test 72');
test(scoreOfString("aaabbbcccdddeeefffggghhhiiiijjjjkkkkllllmmmmnnnnooopppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz"), 25, 'Test 73');
test(scoreOfString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 25, 'Test 74');
test(scoreOfString("asciiisawesome"), 136, 'Test 75');
test(scoreOfString("programming"), 69, 'Test 76');
test(scoreOfString("qwertypoiuytrewq"), 120, 'Test 77');
test(scoreOfString("abczabcyabcbabczabcyabcbabcz"), 229, 'Test 78');
test(scoreOfString("level"), 48, 'Test 79');
test(scoreOfString("thisisaverylongstringthatcontainsmanycharacters"), 461, 'Test 80');
test(scoreOfString("qazwsxedcrfvtgbyhnujmiklop"), 215, 'Test 81');
test(scoreOfString("thisisaverylongstringwithmanycharacters"), 389, 'Test 82');
test(scoreOfString("azbycxdwevfugthsijrkqlponm"), 314, 'Test 83');
test(scoreOfString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 84');
test(scoreOfString("thequickbrownfoxjumpsoverthelazydog"), 309, 'Test 85');
test(scoreOfString("mnopqrstmnopqrst"), 21, 'Test 86');
test(scoreOfString("abcdefg"), 6, 'Test 87');
test(scoreOfString("expert"), 53, 'Test 88');

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
