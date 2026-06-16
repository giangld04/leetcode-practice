// Test: 514. Freedom Trail
// 70 test cases from LeetCodeDataset
// Run: node test.js

const { findRotateSteps } = require("./solution");

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

console.log("\n514. Freedom Trail\n");

test(findRotateSteps("caotmcaataijjxi", "oatjiioijjjxxxcx"), 42, 'Test 1');
test(findRotateSteps("godding", "gd"), 4, 'Test 2');
test(findRotateSteps("pqwcx", "cpqwx"), 13, 'Test 3');
test(findRotateSteps("edcba", "abc"), 6, 'Test 4');
test(findRotateSteps("ababcabc", "abc"), 6, 'Test 5');
test(findRotateSteps("iotfo", "fio"), 8, 'Test 6');
test(findRotateSteps("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), 52, 'Test 7');
test(findRotateSteps("iaadddfef", "dd"), 5, 'Test 8');
test(findRotateSteps("abcdefghijklmnopqrstuvwxyz", "cba"), 7, 'Test 9');
test(findRotateSteps("abcdefg", "fa"), 6, 'Test 10');
test(findRotateSteps("iaejfhfihjdghfihdddddddhddcfjghjgddf", "did"), 9, 'Test 11');
test(findRotateSteps("xyxzyzyxy", "xzyxz"), 12, 'Test 12');
test(findRotateSteps("godding", "godding"), 13, 'Test 13');
test(findRotateSteps("caotmcaataijjxi", "oatjiioijia"), 35, 'Test 14');
test(findRotateSteps("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 66, 'Test 15');
test(findRotateSteps("lkjhgfedcbazyxwvutsrqponml", "abcdefghijklmnopqrstuvwxyz"), Infinity, 'Test 16');
test(findRotateSteps("mississippi", "ppiiisssmm"), 18, 'Test 17');
test(findRotateSteps("uniquecharacters", "unique"), 11, 'Test 18');
test(findRotateSteps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zyxwvutsrqponmlkjihgfedcba"), 77, 'Test 19');
test(findRotateSteps("mississippi", "missis"), 10, 'Test 20');
test(findRotateSteps("noonnoonnoonnoonnoonnoon", "noonnoon"), 12, 'Test 21');
test(findRotateSteps("abacabadabacabadabacabadabacabad", "badabadabacaba"), 28, 'Test 22');
test(findRotateSteps("thistimeitsshouldbeaveryunusualring", "unusualring"), 30, 'Test 23');
test(findRotateSteps("thisisaverylongringwithmanysamecharacters", "thisisaverylongring"), 37, 'Test 24');
test(findRotateSteps("encyclopedia", "pediaencyclopedia"), 38, 'Test 25');
test(findRotateSteps("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", "ac"), 3, 'Test 26');
test(findRotateSteps("rotor", "rotorrotor"), 18, 'Test 27');
test(findRotateSteps("abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg", "gfedcba"), 14, 'Test 28');
test(findRotateSteps("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "zzzaa"), 7, 'Test 29');
test(findRotateSteps("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), 52, 'Test 30');
test(findRotateSteps("abababababababababab", "bababa"), 12, 'Test 31');
test(findRotateSteps("abacabadabacaba", "abcabcabc"), 20, 'Test 32');
test(findRotateSteps("rhythms", "rhythmrhythmsrhythmrhythms"), 53, 'Test 33');
test(findRotateSteps("abcdefghijklmnopqrstuvwxyzaabcdefghijklmnopqrstuvwxyza", "abcdefghijklmnopqrstuvwxyz"), 51, 'Test 34');
test(findRotateSteps("floccinaucinihilipilification", "floccinaucinihilipilification"), 57, 'Test 35');
test(findRotateSteps("abcdefghijabcdefghijabcdefghij", "jjiihhggffeeddccba"), 28, 'Test 36');
test(findRotateSteps("bcaacbcaacbcaac", "abcabc"), 15, 'Test 37');
test(findRotateSteps("qwertyuiopasdfghjklzxcvbnm", "lkjhgfdsa"), 25, 'Test 38');
test(findRotateSteps("abcabcabcabcabcabcabcabc", "abcabcabc"), 17, 'Test 39');
test(findRotateSteps("ringwithrepeatedcharactersrrrr", "ringwithrepeatedcharacters"), 51, 'Test 40');
test(findRotateSteps("repetition", "rep"), 5, 'Test 41');
test(findRotateSteps("abcdefgabcdefgabcdefgabcdefgabcdefg", "abcdefgabcdefgabcdefgabcdefg"), 55, 'Test 42');
test(findRotateSteps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzyyxxwvuttsrqponmlkjihgfedcba"), 82, 'Test 43');
test(findRotateSteps("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwvuttsrqponmlkjihgfedcba"), 81, 'Test 44');
test(findRotateSteps("abracadabra", "abcabcabc"), 25, 'Test 45');
test(findRotateSteps("qwertyuiopasdfghjklzxcvbnmqwertyuiop", "programming"), 87, 'Test 46');
test(findRotateSteps("thisisaverylongstringthatweneedtocheckanditsrepeatedthisisaverylongstringthatweneedtocheck", "check"), 12, 'Test 47');
test(findRotateSteps("thisisaverylongstringthatweneedtocheck", "string"), 26, 'Test 48');
test(findRotateSteps("rhythm", "myrhth"), 16, 'Test 49');
test(findRotateSteps("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 52, 'Test 50');
test(findRotateSteps("pqrsyzxcvbnmlkjhgfedwatpoiuy", "python"), 42, 'Test 51');
test(findRotateSteps("mnbvcxzlkjhgfdsapoiuytrewq", "qwertyuiop"), 20, 'Test 52');
test(findRotateSteps("mississippi", "mississippimississippi"), 41, 'Test 53');
test(findRotateSteps("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm", "mnbvcxzlkjhgfdsapoiuytrewq"), 52, 'Test 54');
test(findRotateSteps("abcdefgabcdefgabcdefgabcdefg", "aceg"), 10, 'Test 55');
test(findRotateSteps("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzz"), 3, 'Test 56');
test(findRotateSteps("repeatedrepeatedrepeated", "repeat"), 11, 'Test 57');
test(findRotateSteps("aaabbbcccdddeeefffggghhhiii", "abcdefghi"), 33, 'Test 58');
test(findRotateSteps("aaaaabbbbbcccccdddddeeeeefffffggggghhhhhiiiii", "abcdefghi"), 49, 'Test 59');
test(findRotateSteps("rotorrotorrotor", "rotor"), 9, 'Test 60');
test(findRotateSteps("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm", "qzam"), 31, 'Test 61');
test(findRotateSteps("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"), 51, 'Test 62');
test(findRotateSteps("aaabbbbccccddddeeeeffffgggg", "abcdefg"), 30, 'Test 63');
test(findRotateSteps("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 60, 'Test 64');
test(findRotateSteps("abcdefabcdefabcdefabcdefabcdefabcdefabcdef", "abcdefabcdefabcdefabcdefabcdefabcdefabcdef"), 83, 'Test 65');
test(findRotateSteps("abacabadabacabadabacabad", "abad"), 7, 'Test 66');
test(findRotateSteps("lmnopqrstuvwxyzabcdefghijkl", "key"), 17, 'Test 67');
test(findRotateSteps("xylophone", "oxylphoen"), 24, 'Test 68');
test(findRotateSteps("aaaaabbbbcccccdddddeeeeeffffffggggghhhhhhiiiiijjjjjjkkkkkkllllllmmmmmmnnnnnnooooooppppppqqqqqqrrrrrrssssssttttttuuuuuuvvvvvvwwwwwwwxxxxxxxxxyyyyyyyzzzzzzz", "zyxwvutsrqponmlkjihgfedcba"), 176, 'Test 69');
test(findRotateSteps("mississippi", "issi"), 7, 'Test 70');

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
