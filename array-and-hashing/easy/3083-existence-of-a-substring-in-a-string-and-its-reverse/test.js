// Test: 3083. Existence Of A Substring In A String And Its Reverse
// 122 test cases from LeetCodeDataset
// Run: node test.js

const { isSubstringPresent } = require("./solution");

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

console.log("\n3083. Existence Of A Substring In A String And Its Reverse\n");

test(isSubstringPresent("abcba"), true, 'Test 1');
test(isSubstringPresent("deified"), true, 'Test 2');
test(isSubstringPresent("abab"), true, 'Test 3');
test(isSubstringPresent("ab"), false, 'Test 4');
test(isSubstringPresent("mnopqr"), false, 'Test 5');
test(isSubstringPresent("aa"), true, 'Test 6');
test(isSubstringPresent("rotor"), true, 'Test 7');
test(isSubstringPresent("zzz"), true, 'Test 8');
test(isSubstringPresent("leetcode"), true, 'Test 9');
test(isSubstringPresent("racecar"), true, 'Test 10');
test(isSubstringPresent("aabb"), true, 'Test 11');
test(isSubstringPresent("gfedcba"), false, 'Test 12');
test(isSubstringPresent("world"), false, 'Test 13');
test(isSubstringPresent("noon"), true, 'Test 14');
test(isSubstringPresent("reviled"), false, 'Test 15');
test(isSubstringPresent("abcd"), false, 'Test 16');
test(isSubstringPresent("hello"), true, 'Test 17');
test(isSubstringPresent("aabbcc"), true, 'Test 18');
test(isSubstringPresent("level"), true, 'Test 19');
test(isSubstringPresent("abcdefg"), false, 'Test 20');
test(isSubstringPresent("xyzzxyzzxyzz"), true, 'Test 21');
test(isSubstringPresent("detartrateddetartrated"), true, 'Test 22');
test(isSubstringPresent("repaperrepaper"), true, 'Test 23');
test(isSubstringPresent("xyzzyxxyzzyx"), true, 'Test 24');
test(isSubstringPresent("referrefer"), true, 'Test 25');
test(isSubstringPresent("rotorrotor"), true, 'Test 26');
test(isSubstringPresent("abracadabra"), true, 'Test 27');
test(isSubstringPresent("noonnoon"), true, 'Test 28');
test(isSubstringPresent("reviverreviver"), true, 'Test 29');
test(isSubstringPresent("deifieddeifieddeified"), true, 'Test 30');
test(isSubstringPresent("abacaxabacax"), true, 'Test 31');
test(isSubstringPresent("palindromemordnilap"), true, 'Test 32');
test(isSubstringPresent("stepikiktepset"), true, 'Test 33');
test(isSubstringPresent("qwertyuiopoiuytrewq"), true, 'Test 34');
test(isSubstringPresent("algorithm"), false, 'Test 35');
test(isSubstringPresent("abccbaabccba"), true, 'Test 36');
test(isSubstringPresent("redder"), true, 'Test 37');
test(isSubstringPresent("repelrepel"), true, 'Test 38');
test(isSubstringPresent("noonnoonnoonnoon"), true, 'Test 39');
test(isSubstringPresent("xyzzyx"), true, 'Test 40');
test(isSubstringPresent("peep"), true, 'Test 41');
test(isSubstringPresent("abacaba"), true, 'Test 42');
test(isSubstringPresent("tamelephant"), true, 'Test 43');
test(isSubstringPresent("rotavator"), true, 'Test 44');
test(isSubstringPresent("revolver"), true, 'Test 45');
test(isSubstringPresent("qwertyuioplkjhgfdsazxcvbnmnbvcxzgfdsahjklpoiuytrewq"), true, 'Test 46');
test(isSubstringPresent("helloolleh"), true, 'Test 47');
test(isSubstringPresent("palindrome"), false, 'Test 48');
test(isSubstringPresent("dessertsstressed"), true, 'Test 49');
test(isSubstringPresent("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), false, 'Test 50');
test(isSubstringPresent("kayak"), true, 'Test 51');
test(isSubstringPresent("abccbaabccbaabccba"), true, 'Test 52');
test(isSubstringPresent("levelup"), true, 'Test 53');
test(isSubstringPresent("deedeed"), true, 'Test 54');
test(isSubstringPresent("sagassagasagasag"), true, 'Test 55');
test(isSubstringPresent("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), true, 'Test 56');
test(isSubstringPresent("semordnilap"), false, 'Test 57');
test(isSubstringPresent("reviler"), true, 'Test 58');
test(isSubstringPresent("nursesrun"), true, 'Test 59');
test(isSubstringPresent("abcdeffedcba"), true, 'Test 60');
test(isSubstringPresent("wasitacaroracatisaw"), true, 'Test 61');
test(isSubstringPresent("levellevel"), true, 'Test 62');
test(isSubstringPresent("aibohphobia"), true, 'Test 63');
test(isSubstringPresent("stepontostep"), false, 'Test 64');
test(isSubstringPresent("programming"), true, 'Test 65');
test(isSubstringPresent("aabbccdd"), true, 'Test 66');
test(isSubstringPresent("madam"), true, 'Test 67');
test(isSubstringPresent("desserts"), true, 'Test 68');
test(isSubstringPresent("refer"), true, 'Test 69');
test(isSubstringPresent("radar"), true, 'Test 70');
test(isSubstringPresent("abcdefgihgfedcba"), true, 'Test 71');
test(isSubstringPresent("xyzyx"), true, 'Test 72');
test(isSubstringPresent("repelrepelrepel"), true, 'Test 73');
test(isSubstringPresent("step on no pets"), true, 'Test 74');
test(isSubstringPresent("redivider"), true, 'Test 75');
test(isSubstringPresent("redderredder"), true, 'Test 76');
test(isSubstringPresent("racecarabc"), true, 'Test 77');
test(isSubstringPresent("abcdabcddcbaabcd"), true, 'Test 78');
test(isSubstringPresent("abba"), true, 'Test 79');
test(isSubstringPresent("abcdefgfedcba"), true, 'Test 80');
test(isSubstringPresent("banana"), true, 'Test 81');
test(isSubstringPresent("abcdefghijutsavajihgfedcba"), true, 'Test 82');
test(isSubstringPresent("ananab"), true, 'Test 83');
test(isSubstringPresent("aabbccddeeffgg"), true, 'Test 84');
test(isSubstringPresent("detartrated"), true, 'Test 85');
test(isSubstringPresent("civiccivic"), true, 'Test 86');
test(isSubstringPresent("abccba"), true, 'Test 87');
test(isSubstringPresent("aabbccddeeff"), true, 'Test 88');
test(isSubstringPresent("xyzzyxwvutsrqponmlkjihgfedcba"), true, 'Test 89');
test(isSubstringPresent("xyzyzyzyx"), true, 'Test 90');
test(isSubstringPresent("reviver"), true, 'Test 91');
test(isSubstringPresent("madamimadam"), true, 'Test 92');
test(isSubstringPresent("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), true, 'Test 93');
test(isSubstringPresent("aabbccddeeffgghhiijj"), true, 'Test 94');
test(isSubstringPresent("zxcvbnmlkjhgfdsapoiuytrewq"), false, 'Test 95');
test(isSubstringPresent("amanaplanacanalpanama"), true, 'Test 96');
test(isSubstringPresent("sagasagasag"), true, 'Test 97');
test(isSubstringPresent("racecarracecar"), true, 'Test 98');
test(isSubstringPresent("noonnoonnoon"), true, 'Test 99');
test(isSubstringPresent("repaper"), true, 'Test 100');
test(isSubstringPresent("abcdedcba"), true, 'Test 101');
test(isSubstringPresent("hellokayak"), true, 'Test 102');
test(isSubstringPresent("stressed"), true, 'Test 103');
test(isSubstringPresent("ababababab"), true, 'Test 104');
test(isSubstringPresent("deifieddeified"), true, 'Test 105');
test(isSubstringPresent("elephanttame"), true, 'Test 106');
test(isSubstringPresent("civic"), true, 'Test 107');
test(isSubstringPresent("abcdefghihgfedcba"), true, 'Test 108');
test(isSubstringPresent("xyzyxzyxzyx"), true, 'Test 109');
test(isSubstringPresent("xyxzyx"), true, 'Test 110');
test(isSubstringPresent("abacaxa"), true, 'Test 111');
test(isSubstringPresent("pneumonoultramicroscopicsilicovolcanoconiosis"), true, 'Test 112');
test(isSubstringPresent("abacabadaba"), true, 'Test 113');
test(isSubstringPresent("xyzyxzyx"), true, 'Test 114');
test(isSubstringPresent("tacocat"), true, 'Test 115');
test(isSubstringPresent("thisisatest"), true, 'Test 116');
test(isSubstringPresent("mississippi"), true, 'Test 117');
test(isSubstringPresent("xyzyxyzyx"), true, 'Test 118');
test(isSubstringPresent("testset"), true, 'Test 119');
test(isSubstringPresent("deed"), true, 'Test 120');
test(isSubstringPresent("abacaxaba"), true, 'Test 121');
test(isSubstringPresent("asdfghjklkljhgfdsa"), true, 'Test 122');

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
