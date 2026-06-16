// Test: 3498. Reverse Degree Of A String
// 55 test cases from LeetCodeDataset
// Run: node test.js

const { reverseDegree } = require("./solution");

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

console.log("\n3498. Reverse Degree Of A String\n");

test(reverseDegree("zzzz"), 10, 'Test 1');
test(reverseDegree("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 15678, 'Test 2');
test(reverseDegree("world"), 230, 'Test 3');
test(reverseDegree("abcdefghijklmnopqrstuvwxyz"), 3276, 'Test 4');
test(reverseDegree("z"), 1, 'Test 5');
test(reverseDegree("degree"), 405, 'Test 6');
test(reverseDegree("abc"), 148, 'Test 7');
test(reverseDegree("reverse"), 403, 'Test 8');
test(reverseDegree("aaa"), 156, 'Test 9');
test(reverseDegree("zzz"), 6, 'Test 10');
test(reverseDegree("zyxwvutsrqponmlkjihgfedcba"), 6201, 'Test 11');
test(reverseDegree("a"), 26, 'Test 12');
test(reverseDegree("zaza"), 160, 'Test 13');
test(reverseDegree("hello"), 228, 'Test 14');
test(reverseDegree("aaabbbccc"), 1107, 'Test 15');
test(reverseDegree("abcdefghijklmnopqrstuvwxyzzxywvutsrqponmlkjihgfedcba"), 18602, 'Test 16');
test(reverseDegree("thisisaverylongstringthatweneedtocheck"), 11902, 'Test 17');
test(reverseDegree("abcdefghijabcdefghijabcdefghijabcdefghij"), 17300, 'Test 18');
test(reverseDegree("letsdothisoverandover"), 3275, 'Test 19');
test(reverseDegree("repeatedcharactersss"), 3224, 'Test 20');
test(reverseDegree("complex"), 362, 'Test 21');
test(reverseDegree("abracadabra"), 1453, 'Test 22');
test(reverseDegree("pythonprogramming"), 2314, 'Test 23');
test(reverseDegree("uniquecharacters"), 2168, 'Test 24');
test(reverseDegree("randomstringswithdifferentcharactersareincludedhere"), 22682, 'Test 25');
test(reverseDegree("thisisareallylongstringwithvariouscharacters"), 14440, 'Test 26');
test(reverseDegree("quickbrownfoxjumpsoverthelazydog"), 7059, 'Test 27');
test(reverseDegree("python"), 250, 'Test 28');
test(reverseDegree("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1711, 'Test 29');
test(reverseDegree("aquickbrownfoxjumpsoverthelazydog"), 7509, 'Test 30');
test(reverseDegree("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1485, 'Test 31');
test(reverseDegree("abcdabcdabcd"), 1896, 'Test 32');
test(reverseDegree("algorithms"), 724, 'Test 33');
test(reverseDegree("exampletestcase"), 1940, 'Test 34');
test(reverseDegree("reversealphabetcalculationsarefun"), 9042, 'Test 35');
test(reverseDegree("thisisareallylongstringthatweneedtocalculatereversedegree"), 26964, 'Test 36');
test(reverseDegree("qwertypoiasdfghjklzxcvbnm"), 4708, 'Test 37');
test(reverseDegree("abacaxabacax"), 1576, 'Test 38');
test(reverseDegree("loonyspoons"), 684, 'Test 39');
test(reverseDegree("hellothere"), 880, 'Test 40');
test(reverseDegree("thisisareallylongstringwithsomerepeatedcharacters"), 19494, 'Test 41');
test(reverseDegree("pythonisfun"), 832, 'Test 42');
test(reverseDegree("programmingisfun"), 1980, 'Test 43');
test(reverseDegree("qwen"), 136, 'Test 44');
test(reverseDegree("alibabacloud"), 1461, 'Test 45');
test(reverseDegree("reversedegree"), 1634, 'Test 46');
test(reverseDegree("mississippi"), 851, 'Test 47');
test(reverseDegree("testcase"), 611, 'Test 48');
test(reverseDegree("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 12753, 'Test 49');
test(reverseDegree("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba"), 18226, 'Test 50');
test(reverseDegree("programming"), 1068, 'Test 51');
test(reverseDegree("multiplewordstringexample"), 4768, 'Test 52');
test(reverseDegree("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1275, 'Test 53');
test(reverseDegree("thequickbrownfoxjumpsoverthelazydog"), 8442, 'Test 54');
test(reverseDegree("zzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 406, 'Test 55');

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
