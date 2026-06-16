// Test: 1189. Maximum Number Of Balloons
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { maxNumberOfBalloons } = require("./solution");

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

console.log("\n1189. Maximum Number Of Balloons\n");

test(maxNumberOfBalloons(""), 0, 'Test 1');
test(maxNumberOfBalloons("bbaalllooonn"), 1, 'Test 2');
test(maxNumberOfBalloons("ppooaallbboonn"), 1, 'Test 3');
test(maxNumberOfBalloons("leetcode"), 0, 'Test 4');
test(maxNumberOfBalloons("balloonballoonballoonballoonballoon"), 5, 'Test 5');
test(maxNumberOfBalloons("loonbalxballpoon"), 2, 'Test 6');
test(maxNumberOfBalloons("aabbccddeeffgghhiijjkklmmooppqqrrssttuuvvwwxxyyzz"), 0, 'Test 7');
test(maxNumberOfBalloons("axbxcxdxeoylno"), 0, 'Test 8');
test(maxNumberOfBalloons("bbonnallloo"), 1, 'Test 9');
test(maxNumberOfBalloons("bal"), 0, 'Test 10');
test(maxNumberOfBalloons("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 1, 'Test 11');
test(maxNumberOfBalloons("ballon"), 0, 'Test 12');
test(maxNumberOfBalloons("balon"), 0, 'Test 13');
test(maxNumberOfBalloons("bnlbaonlbaonlbaon"), 1, 'Test 14');
test(maxNumberOfBalloons("balloonballoon"), 2, 'Test 15');
test(maxNumberOfBalloons("abcde"), 0, 'Test 16');
test(maxNumberOfBalloons("nlaebolko"), 1, 'Test 17');
test(maxNumberOfBalloons("balblablaballlaalllooonnnnnnnnn"), 1, 'Test 18');
test(maxNumberOfBalloons("balloonballoonballoon"), 3, 'Test 19');
test(maxNumberOfBalloons("bbbaalllllooooonnnnballoonballoonballoonballoonballoonballoonballoonballoonballoonballoon"), 12, 'Test 20');
test(maxNumberOfBalloons("balloonballoonballoonballoonballoonballoonballoonballoonballoonballoon"), 10, 'Test 21');
test(maxNumberOfBalloons("bbbbbaaaaaallllllloooooonnnnnn"), 3, 'Test 22');
test(maxNumberOfBalloons("abracadabraballoonballoon"), 2, 'Test 23');
test(maxNumberOfBalloons("bnlaebolkoonnballoon"), 2, 'Test 24');
test(maxNumberOfBalloons("blbaloonnnballoonballoonballoonballoonballoonballoonballoonballoon"), 9, 'Test 25');
test(maxNumberOfBalloons("bablllooonnnballoon"), 2, 'Test 26');
test(maxNumberOfBalloons("blllllaaaaoonnballoon"), 2, 'Test 27');
test(maxNumberOfBalloons("bnaloonballoonballoonballoon"), 3, 'Test 28');
test(maxNumberOfBalloons("balllllllllooooooonnnnnnnnn"), 1, 'Test 29');
test(maxNumberOfBalloons("balbalbalbalbal"), 0, 'Test 30');
test(maxNumberOfBalloons("baloonballoonballoon"), 2, 'Test 31');
test(maxNumberOfBalloons("bnllobbannolllobnballoon"), 2, 'Test 32');
test(maxNumberOfBalloons("balloonballlooballlloon"), 2, 'Test 33');
test(maxNumberOfBalloons("baanlloonnn"), 1, 'Test 34');
test(maxNumberOfBalloons("balloonballoonbaloonballoonbaloonballoonballoonbaloon"), 6, 'Test 35');
test(maxNumberOfBalloons("balloonballoonballoonballoonballoonballoonballoon"), 7, 'Test 36');
test(maxNumberOfBalloons("balooba"), 0, 'Test 37');
test(maxNumberOfBalloons("balloonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoon"), 16, 'Test 38');
test(maxNumberOfBalloons("balloonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoon"), 11, 'Test 39');
test(maxNumberOfBalloons("abcdeballoonabcde"), 1, 'Test 40');
test(maxNumberOfBalloons("bbaallonnnbballoonnballoonballoon"), 3, 'Test 41');
test(maxNumberOfBalloons("lnoobaalllnobo"), 2, 'Test 42');
test(maxNumberOfBalloons("balloonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoon"), 14, 'Test 43');
test(maxNumberOfBalloons("blbaloonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoon"), 16, 'Test 44');
test(maxNumberOfBalloons("balonbalonbalonbalon"), 2, 'Test 45');
test(maxNumberOfBalloons("balloonyballoonballoon"), 3, 'Test 46');
test(maxNumberOfBalloons("balloonballoonballoonballoonballoonballoon"), 6, 'Test 47');
test(maxNumberOfBalloons("blbloonnbaalononballoon"), 2, 'Test 48');
test(maxNumberOfBalloons("ballbaloonn"), 1, 'Test 49');
test(maxNumberOfBalloons("loballoonbaloonballoon"), 3, 'Test 50');
test(maxNumberOfBalloons("balloonballoonballoonbaloonbaloonballoon"), 5, 'Test 51');
test(maxNumberOfBalloons("balloonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoon"), 17, 'Test 52');
test(maxNumberOfBalloons("ballbalbalbalbalbalbal"), 0, 'Test 53');
test(maxNumberOfBalloons("balloonballoonbaloon"), 2, 'Test 54');
test(maxNumberOfBalloons("nballoonballoonballoonbaloon"), 3, 'Test 55');
test(maxNumberOfBalloons("abbblllooonnnn"), 1, 'Test 56');
test(maxNumberOfBalloons("balllllllllooooonnnnnn"), 1, 'Test 57');
test(maxNumberOfBalloons("balonbalonbalonbalonbalonbalonbalon"), 3, 'Test 58');
test(maxNumberOfBalloons("balloonbaloon"), 1, 'Test 59');
test(maxNumberOfBalloons("balllonballlonballlon"), 1, 'Test 60');
test(maxNumberOfBalloons("balloonbaloonballoonballoonballoon"), 4, 'Test 61');
test(maxNumberOfBalloons("balloonbaloonballoonballoon"), 3, 'Test 62');
test(maxNumberOfBalloons("balloonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoon"), 12, 'Test 63');
test(maxNumberOfBalloons("baloobaloobalooballoonballoon"), 2, 'Test 64');
test(maxNumberOfBalloons("noenolbballo"), 1, 'Test 65');
test(maxNumberOfBalloons("bllbaaoonnnballoon"), 2, 'Test 66');
test(maxNumberOfBalloons("baloonbaloonbaloonbaloonbaloonbaloonbaloonbaloon"), 4, 'Test 67');
test(maxNumberOfBalloons("bbbbbaaaaalllllooooonn"), 2, 'Test 68');
test(maxNumberOfBalloons("balloonballoonbaloonballoonbaloonballoonballoonbaloonballoon"), 7, 'Test 69');
test(maxNumberOfBalloons("ballooballloonballoonbaloon"), 3, 'Test 70');
test(maxNumberOfBalloons("balloonballoonbaloonballoonbaloonballoonballoonbaloonbaloonballoon"), 8, 'Test 71');
test(maxNumberOfBalloons("balbaloobnoallnoobbaalllnoonnoob"), 3, 'Test 72');
test(maxNumberOfBalloons("balloonballoonballoonbaloonbaloon"), 4, 'Test 73');
test(maxNumberOfBalloons("abcbabcabcabc"), 0, 'Test 74');
test(maxNumberOfBalloons("blablablablablablablablablablaloboon"), 1, 'Test 75');
test(maxNumberOfBalloons("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzballoon"), 2, 'Test 76');
test(maxNumberOfBalloons("bloonboonballoonbalo"), 2, 'Test 77');
test(maxNumberOfBalloons("balloonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoon"), 15, 'Test 78');
test(maxNumberOfBalloons("ballonballoonballoon"), 2, 'Test 79');
test(maxNumberOfBalloons("balloonballoonballoonballoon"), 4, 'Test 80');
test(maxNumberOfBalloons("ballooonnballoon"), 2, 'Test 81');
test(maxNumberOfBalloons("balloonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoon"), 13, 'Test 82');
test(maxNumberOfBalloons("bloonbaloonballonballoonballoon"), 4, 'Test 83');
test(maxNumberOfBalloons("bnaloonballoonballoon"), 2, 'Test 84');
test(maxNumberOfBalloons("loonballballoon"), 2, 'Test 85');
test(maxNumberOfBalloons("baloobaloobaloobalooballoona"), 1, 'Test 86');
test(maxNumberOfBalloons("blllaaooonnballoon"), 2, 'Test 87');
test(maxNumberOfBalloons("lalalallballboonbaloon"), 2, 'Test 88');
test(maxNumberOfBalloons("balllonballlonballlonballlon"), 2, 'Test 89');
test(maxNumberOfBalloons("ballooonballoonballoonballoon"), 4, 'Test 90');
test(maxNumberOfBalloons("bbbbbaaaaalllllooooonnnn"), 2, 'Test 91');
test(maxNumberOfBalloons("balllllllllllooonnnnballoon"), 2, 'Test 92');
test(maxNumberOfBalloons("ballooonballoonballoonballoonballoon"), 5, 'Test 93');
test(maxNumberOfBalloons("xxxxxyyyyyzzzzzbbaalllooonn"), 1, 'Test 94');
test(maxNumberOfBalloons("balloonballoonballoonballoonballoonballoonballoonballoon"), 8, 'Test 95');
test(maxNumberOfBalloons("abbaalllllooonnxxxx"), 1, 'Test 96');
test(maxNumberOfBalloons("balonbalonbalon"), 1, 'Test 97');
test(maxNumberOfBalloons("baaalllooonnballoonballoon"), 3, 'Test 98');
test(maxNumberOfBalloons("abcdefghijklmnopqrstuvwxyzballoon"), 1, 'Test 99');
test(maxNumberOfBalloons("lllaaabbbooonnn"), 1, 'Test 100');
test(maxNumberOfBalloons("bbaalllllooonnballoon"), 2, 'Test 101');
test(maxNumberOfBalloons("baloonbaloonbaloonbaloonbaloon"), 2, 'Test 102');
test(maxNumberOfBalloons("baloobaloobaloobaloobalooballoon"), 1, 'Test 103');
test(maxNumberOfBalloons("balloonbaloonbaloonbaloonbaloon"), 3, 'Test 104');
test(maxNumberOfBalloons("balloonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoonballoon"), 18, 'Test 105');
test(maxNumberOfBalloons("balloonballoonballoonbaloonbaloonbaloonballoon"), 5, 'Test 106');
test(maxNumberOfBalloons("balllllloooneeeennn"), 1, 'Test 107');
test(maxNumberOfBalloons("lloonnbbaaallooonnxx"), 2, 'Test 108');
test(maxNumberOfBalloons("ballballoonloonballoon"), 3, 'Test 109');
test(maxNumberOfBalloons("balltooloon"), 1, 'Test 110');
test(maxNumberOfBalloons("xxxxxxxxxxxxxxxx"), 0, 'Test 111');
test(maxNumberOfBalloons("balloonballoonballoonballoonballoonballoonballoonballoonballoon"), 9, 'Test 112');
test(maxNumberOfBalloons("ballllooooooonnn"), 1, 'Test 113');
test(maxNumberOfBalloons("balllllooonnnnballoon"), 2, 'Test 114');
test(maxNumberOfBalloons("looballonnoballoon"), 2, 'Test 115');
test(maxNumberOfBalloons("balllllllllllllllllllllllllllllllllooonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnballoon"), 2, 'Test 116');
test(maxNumberOfBalloons("bnllobbannolllobnballoonbnllobbannolllobnballoon"), 4, 'Test 117');

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
