// Test: 1234. Replace The Substring For Balanced String
// 158 test cases from LeetCodeDataset
// Run: node test.js

const { balancedString } = require("./solution");

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

console.log("\n1234. Replace The Substring For Balanced String\n");

test(balancedString("QQQQQQQQWWWWEEEEEEEERRRRRRRR"), 14, 'Test 1');
test(balancedString("QQQQWWER"), 2, 'Test 2');
test(balancedString("WQQQQQERQQ"), 5, 'Test 3');
test(balancedString("WWEERRQQQWEEERRQQQWEEERRQQQWEEERR"), 5, 'Test 4');
test(balancedString("QQWQWQQWEEWEEWRRWRRWRRW"), 7, 'Test 5');
test(balancedString("QQQQWWWWEEEERRRR"), 0, 'Test 6');
test(balancedString("WQWRQQQWQWQQQQRRWEWRRWQQQWQRWEQWQWRRRRWQQQWRRQWEQWQQWRWRRWQQWEWRRQWQWQWQWQW"), 24, 'Test 7');
test(balancedString("QQWWRRER"), 1, 'Test 8');
test(balancedString("QQQQWWWEERRR"), 1, 'Test 9');
test(balancedString("QQQQQQQQWWWWWWWWEEEEEEEERRRRRRRR"), 0, 'Test 10');
test(balancedString("QQQWEEERRRQQQWEEERRR"), 5, 'Test 11');
test(balancedString("QWERQWERQWERQWER"), 0, 'Test 12');
test(balancedString("QQQWEEEERRRQ"), 3, 'Test 13');
test(balancedString("QQWE"), 1, 'Test 14');
test(balancedString("QQQW"), 2, 'Test 15');
test(balancedString("QQWEQRQQQQEEEEWWRR"), 4, 'Test 16');
test(balancedString("QWER"), 0, 'Test 17');
test(balancedString("QQQQEEEERRRR"), 6, 'Test 18');
test(balancedString("WQEEWRQQQWEEEERRR"), 2, 'Test 19');
test(balancedString("QQWWEERRRR"), 2, 'Test 20');
test(balancedString("WQWRQQQW"), 3, 'Test 21');
test(balancedString("QQQQWEEEWWRR"), 1, 'Test 22');
test(balancedString("QWQWQWQW"), 4, 'Test 23');
test(balancedString("QQQQEEEEWWWWRRRR"), 0, 'Test 24');
test(balancedString("QQQQWWEERR"), 2, 'Test 25');
test(balancedString("QQQQWEEEERRR"), 3, 'Test 26');
test(balancedString("QQQQWWRRRRWWRRRQQQ"), 6, 'Test 27');
test(balancedString("QQQQWWEERRRRQQQQ"), 4, 'Test 28');
test(balancedString("QQQWEEEERRRR"), 2, 'Test 29');
test(balancedString("QQQQQQQQQQWWWWWWWWQQQQQQQQWWWWWWWWEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRR"), 4, 'Test 30');
test(balancedString("QQWWEERRRRQQWWEERRRRQQWWEERRRR"), 11, 'Test 31');
test(balancedString("QQQQWWWEEERRRR"), 8, 'Test 32');
test(balancedString("QQQQWEEEEEERRRRQQQWEEEERRRRWWWWQQQQQQQQWWWWEEEEQQQQRRRRWWWWEEEEQQQQ"), 13, 'Test 33');
test(balancedString("QQQQQQQQWWWWWWWWEEEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRQQQQQQQQWWWWWWWWEEEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"), 42, 'Test 34');
test(balancedString("QQQQQQQQQQQQQQQQEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"), 32, 'Test 35');
test(balancedString("QQQQWWEERRQQWWEERRQQWWEERRQQWWEERR"), 2, 'Test 36');
test(balancedString("QQQQWEEEEEERRRRQQQ"), 6, 'Test 37');
test(balancedString("QQQWEEEEERRRRRRRRRRRRRRRRRRRR"), 13, 'Test 38');
test(balancedString("QQQWEEEERRRRQQ"), 7, 'Test 39');
test(balancedString("QQQQQWWEERRRQQ"), 4, 'Test 40');
test(balancedString("QQQQQQQQWWWWWWWWEEEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRQQQQQQQQWWWWWWWWEEEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRQQQQQQQQWWWWWWWWEEEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"), 87, 'Test 41');
test(balancedString("QQQQWEEEEEERRRRQQQWEEEERRRRWWWWQQQQ"), 6, 'Test 42');
test(balancedString("QWEQRWEQRWEQRWEQWEQRWEQRWEQRWE"), 3, 'Test 43');
test(balancedString("QQWWEERRQQWWEERRQQWWEERR"), 0, 'Test 44');
test(balancedString("QQQQQQQQQQWWWWWWWWWWEEEEEEEEEEERRRRRRRRRR"), 1, 'Test 45');
test(balancedString("QQQQQWEEEEERRRRR"), 8, 'Test 46');
test(balancedString("QQQQWEEEERRRR"), 7, 'Test 47');
test(balancedString("WWWWWWWWQQQQEEEERRRR"), 3, 'Test 48');
test(balancedString("QQQQQQQQQQWWWWWWWWWWWEEEEEEEEEEEERRRRRRRRRRRRRRRR"), 4, 'Test 49');
test(balancedString("QWQWQWQWQWQWQWQWQWQWQWQWQWQWQWQW"), 16, 'Test 50');
test(balancedString("EEEEWWRRQQQQEEEEWWRRQQQQ"), 4, 'Test 51');
test(balancedString("QQQQWEEEEEERRRRQQQWEEEERRRRWWWWQQQQQQQQWWWW"), 5, 'Test 52');
test(balancedString("QQQQWWWWEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRR"), 14, 'Test 53');
test(balancedString("QQQQWEEEEEERRRRWWW"), 2, 'Test 54');
test(balancedString("EEEEEEEEWWWWWWWWRRRRRRRRQQQQQQQQ"), 0, 'Test 55');
test(balancedString("QQQQWEEEEEERRRRQQQWEEEERRRRWWWWQQQQQQQQWWWWEEEE"), 8, 'Test 56');
test(balancedString("QQQQWEEEEEERRRRQQQWEEEERRRRWWW"), 4, 'Test 57');
test(balancedString("WWWWWWWWWWEEEEEEEEQQQQQQQQQQRRRRRRRRRR"), 20, 'Test 58');
test(balancedString("QQQQWEEEEEERRRRQQQWEEEERRRRWWWWQQQQQQQQWWWWEEEEQQQQ"), 13, 'Test 59');
test(balancedString("QQQQQQQQWWWWWWWWEEEEEEEEERRRRRRRRR"), 2, 'Test 60');
test(balancedString("QWQWQWQWQWQWQWQW"), 8, 'Test 61');
test(balancedString("QQQWEEERRQQQWEEERRQQQWEEERRQQQWEEERRQQQWEEERRQQQWEEERR"), 14, 'Test 62');
test(balancedString("QQQQWEEEERRRRRRRRRRRR"), 7, 'Test 63');
test(balancedString("QQQQQQWWEERRRRWWWWRRRRQQQQQQWWEERRRRWWWWRRRRQQQQQQWWEERRRRWWWWRRRR"), 14, 'Test 64');
test(balancedString("QQQQQQQQQQQQQQEEEEWWRR"), 9, 'Test 65');
test(balancedString("QQQQQQQQWWWWWWWWWEEEEEEEEEEEEEEEEERRRRRRRRRRRRRR"), 7, 'Test 66');
test(balancedString("QQQQWEEEEEERRRRQQQWEEEERRRRWWWWQQQQQQQQ"), 15, 'Test 67');
test(balancedString("QWEQQWEQQWEQQWEQQWEQQWEQQWEQQWE"), 14, 'Test 68');
test(balancedString("QQQQQQQQQQWWWWWWWWWWEEEEEEEEERRRRRRRRRR"), 21, 'Test 69');
test(balancedString("QQQQQQQQQQQQQQQQEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRR"), 32, 'Test 70');
test(balancedString("QQQQQQQQWWWWWWWWEEEEEEEERRRRRRRRRRRRRRRRRRRR"), 9, 'Test 71');
test(balancedString("QQQWEEEEEEERRRR"), 5, 'Test 72');
test(balancedString("QQQQQQQQQQQQQQQQEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"), 31, 'Test 73');
test(balancedString("QQQQQQQQWWWWWWWWQQQQQQQQWWWWWWWWQQQQQQQQWWWWWWWWEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"), 10, 'Test 74');
test(balancedString("QQWWEERRRRWWWWRRRRWWWWRRRRWWWWRRRR"), 14, 'Test 75');
test(balancedString("WWWWQQQEEEERRR"), 5, 'Test 76');
test(balancedString("QQQQQQQQQQQQQQQQWWWWWWWWWWWWWWWWEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRR"), 5, 'Test 77');
test(balancedString("QQQQQWEEEEERRRRRR"), 9, 'Test 78');
test(balancedString("QQQQWWEERRRRQQQWWEERRRR"), 5, 'Test 79');
test(balancedString("QQQQQQWWWEEEEEEEEEERRRRRRRR"), 6, 'Test 80');
test(balancedString("WWWWWQQQQQQQQQQQQQQQQQQEEEERRRRRRRRRRRRRRRRRRRRRRRR"), 22, 'Test 81');
test(balancedString("QQQQWEEEEEERRRRQQQWEEEERRRRWWWW"), 4, 'Test 82');
test(balancedString("QQQWWWWWWWWEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRR"), 11, 'Test 83');
test(balancedString("QQWWEERRRRWWWWRRRRWWWWRRRRWWWWRRRRQQQWEEERRRRWWWWRRRR"), 19, 'Test 84');
test(balancedString("WQQQWEWQERWREWER"), 1, 'Test 85');
test(balancedString("QWQWQWQWQQQQQQQQEEEEWWRRQQQQ"), 10, 'Test 86');
test(balancedString("QQQQQQQQQQQQQQQQWWEERRRRRRRRRRRRRR"), 18, 'Test 87');
test(balancedString("QQQWEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"), 23, 'Test 88');
test(balancedString("QQQQQQQQWEEEEEEEEEERRRRRRRRR"), 14, 'Test 89');
test(balancedString("QQQQQQWWEEEERRRR"), 2, 'Test 90');
test(balancedString("QQQQQQQQWWWWWWWWEEEEEEEERRRRRR"), 10, 'Test 91');
test(balancedString("QQQQQQQQWWWWWWWWEEEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRQQQQQQQQWWWWWWWWEEEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRQQQQQQQQWWWWWWWWEEEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRQQQQQQQQWWWWWWWWEEEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"), 102, 'Test 92');
test(balancedString("QQQQWWEEREEE"), 5, 'Test 93');
test(balancedString("QQWWEERRQQWWEERR"), 0, 'Test 94');
test(balancedString("QQQWWWWWEEEEERRRRRQQQWWWWWEEEEERRRRRQQQWWWWWEEEEERRRRR"), 9, 'Test 95');
test(balancedString("QQQQWWWWEEEERRRRQQQQWWWWEEEE"), 6, 'Test 96');
test(balancedString("QQQWWEERRRRQQQQWWEERRRRQQQQWWEERRRR"), 7, 'Test 97');
test(balancedString("QWQWQWQWQWQWQWQWQWQWQWQWQWQWQWQWQW"), 18, 'Test 98');
test(balancedString("QQQWEEERRRRRRRRRRRRRRRRRR"), 12, 'Test 99');
test(balancedString("QQQWEEEERRRRQQQWEEEERRRR"), 4, 'Test 100');
test(balancedString("QQQQQQQQQQQQQQEEEEWWRRQQQQQQQQQQQQ"), 26, 'Test 101');
test(balancedString("QQQQWEEEERRRRWWWWQQQQWEEEERRRRWWWW"), 2, 'Test 102');
test(balancedString("QQQWQQQQQQQQQQEEEEWWRRQQQQ"), 12, 'Test 103');
test(balancedString("QQQQWWWWWWWWEEEEERRRRRRRR"), 9, 'Test 104');
test(balancedString("QQQWEEERQQQWEEERRQQQWEEERRQQQWEEERR"), 11, 'Test 105');
test(balancedString("QQQQQQQQWEEEEEEEEEEEEEERRRRRRRRRRRR"), 10, 'Test 106');
test(balancedString("QQQWEEERRQQQWEEERRQQQWEEERRQQQWEEERRQQQWEEERRQQQWEEERRQQQWEEERRQQQWEEERR"), 16, 'Test 107');
test(balancedString("QQQWEEERRQQQWEEERRQQQWEEERRQQQWEEEERR"), 8, 'Test 108');
test(balancedString("QQQWEEERRRRQQQWEEERRRRQQQWEEERRRRQQQWEEERRRRQQQWEEERRRRQQQWEEERRRRQQQWEEERRRRQQQWEEERRRRQQQWEEERRRR"), 26, 'Test 109');
test(balancedString("QQQQQQQQQQQQWWWWWWWWWWWWEEEEEEEEEEEEERRRRRRRRRRRR"), 1, 'Test 110');
test(balancedString("QQQWEEERRRRQQQWEEERRRRQQQWEEERRRRQQQWEEERRRRQQQWEEERRRRQQQWEEERRRRQQQWEEERRRRQQQWEEERRRR"), 24, 'Test 111');
test(balancedString("QQQQQQQQQQQQQQQQEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"), 31, 'Test 112');
test(balancedString("QQQQQQQQEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRR"), 14, 'Test 113');
test(balancedString("QQQQWEEEEEERRRRQQQWEEEERRRRWWWWQQQQQQQQWWWWEEEEQQQQRRRR"), 11, 'Test 114');
test(balancedString("QQQQWEEEERRRRRRRRR"), 5, 'Test 115');
test(balancedString("QQQQQQQQWWEERRRRRR"), 10, 'Test 116');
test(balancedString("QQQWQWQWQWQWQWQWQWQWQWQWQWQWQW"), 16, 'Test 117');
test(balancedString("QQQWWEERRRRQQQQWWEERRRR"), 5, 'Test 118');
test(balancedString("WQQQWQQQWQQQWQQQEEEEWWRRQQQQ"), 11, 'Test 119');
test(balancedString("QQQWEEEERRRRRR"), 4, 'Test 120');
test(balancedString("QQQQQQQQQQQQQQQQEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"), 31, 'Test 121');
test(balancedString("QQQWEEEEEERRRR"), 4, 'Test 122');
test(balancedString("QQQQQQWEEEEEEEEEEEEERRRRRRRRRR"), 9, 'Test 123');
test(balancedString("QQQQWEEEEEERRRRQQQWEEEERRRRWWWWQQQQQQQQWWWWEEEEQQQQRRRRWWWWEEEE"), 7, 'Test 124');
test(balancedString("QQQWEEEEWWRRQQQQEEEEWWRR"), 3, 'Test 125');
test(balancedString("QWQWQWQWQWQWQQQQWWRRQQQQ"), 12, 'Test 126');
test(balancedString("QQQQQQWWWWWWEEEEEEEEEERRRRRRRRRRRRRR"), 6, 'Test 127');
test(balancedString("QQQQWQQQQWQQQQEEEEWWRRQQQQEEEEWWRR"), 9, 'Test 128');
test(balancedString("QQQQQQQWEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRR"), 17, 'Test 129');
test(balancedString("WWWWQQQEEERRRR"), 8, 'Test 130');
test(balancedString("QQQQWEEEEEERRRRQQQWEEEERRRRWWWWQQQQQQQQWWWWEEEEQQQQRRRRWWWWEEEEQQQQRRRR"), 11, 'Test 131');
test(balancedString("QWQQQQQQQQQWEWEWEWRR"), 5, 'Test 132');
test(balancedString("QQQWEEEERRR"), 7, 'Test 133');
test(balancedString("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"), 68, 'Test 134');
test(balancedString("QQQWWEERQQRRQWRE"), 2, 'Test 135');
test(balancedString("QQQQEEEEWWRR"), 2, 'Test 136');
test(balancedString("QQQQQQQQQQQQQQQQEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"), 30, 'Test 137');
test(balancedString("QQQWEEERRQQQWEEERRQQQWEEERRQQQWEEERRQQQWEEERRQQQWEEERRQQQWEEERR"), 16, 'Test 138');
test(balancedString("QQQQQQQQQQQQQQQQEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"), 28, 'Test 139');
test(balancedString("QQQQWWEERRRRQQQQWWEERRRR"), 4, 'Test 140');
test(balancedString("QQQQQQWWWEEEEERRRR"), 6, 'Test 141');
test(balancedString("QQQQWWEERRRRQQQQWWEERRRRQQQQWWEERRRR"), 6, 'Test 142');
test(balancedString("QQQQWEEEEEERRRRR"), 3, 'Test 143');
test(balancedString("WQWRQQQQEERRRR"), 6, 'Test 144');
test(balancedString("QQQQQQQQWWWWWWWWWWWWWWWWWWEEEEEERRRR"), 9, 'Test 145');
test(balancedString("QQQQWEEEEEERRRRQQQWEEEERRRRWWWWQQQQQQQQWWWWEEEEQQQQRRRRWWWW"), 5, 'Test 146');
test(balancedString("QQQWEEEEEERRRRQQ"), 4, 'Test 147');
test(balancedString("QQQWEEERRRRRRRRRR"), 6, 'Test 148');
test(balancedString("RRRRRRRRQQQQQQQQWWWWWWWWEEEEEEEE"), 0, 'Test 149');
test(balancedString("QQQQQQQQWWWWQQQQWWWWEEEEEEEEEEEEEEEERRRRRRRRRRRRRR"), 6, 'Test 150');
test(balancedString("QQWWEERRRRWWWWRRRRQQQWEEERRRRWWWWRRRRQQQWEEERRRRWWWWRRRR"), 21, 'Test 151');
test(balancedString("QQQQQQQQWWWWWWEEEERRRRRRRRRRRR"), 16, 'Test 152');
test(balancedString("QQWWEERRRRWWWWRRRRWWWWRRRRWWWWRRRRQQWWEERRRRWWWWRRRR"), 19, 'Test 153');
test(balancedString("WWWWQQQQEEEERRRRWWWWQQQQEEEERRRR"), 0, 'Test 154');
test(balancedString("QQQQQQQQWWEERRRR"), 4, 'Test 155');
test(balancedString("QQWWEERRWWEERRWWEERRWWEERR"), 6, 'Test 156');
test(balancedString("QQWWEERRRRWWWWRRRRQQQWEEERRRRWWWWRRRRQQQWEEERRRRWWWWRRRRQQQWEEERRRRWWWWRRRR"), 29, 'Test 157');
test(balancedString("QQQWEEERRQQQWEEERRQQQWEEERRQQQWEEERRQQQWEEERR"), 12, 'Test 158');

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
