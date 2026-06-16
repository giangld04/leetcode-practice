// Test: 3168. Minimum Number Of Chairs In A Waiting Room
// 144 test cases from LeetCodeDataset
// Run: node test.js

const { minimumChairs } = require("./solution");

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

console.log("\n3168. Minimum Number Of Chairs In A Waiting Room\n");

test(minimumChairs("ELEELEELLL"), 3, 'Test 1');
test(minimumChairs("EEEEEEE"), 7, 'Test 2');
test(minimumChairs("EELLEELLL"), 2, 'Test 3');
test(minimumChairs("E"), 1, 'Test 4');
test(minimumChairs("EELLEL"), 2, 'Test 5');
test(minimumChairs("ELE"), 1, 'Test 6');
test(minimumChairs("LE"), 0, 'Test 7');
test(minimumChairs("ELEEL"), 2, 'Test 8');
test(minimumChairs("ELELEEL"), 2, 'Test 9');
test(minimumChairs("ELLEEL"), 1, 'Test 10');
test(minimumChairs("EEEEELLLL"), 5, 'Test 11');
test(minimumChairs("EEEELEEL"), 5, 'Test 12');
test(minimumChairs("ELLEELLEELLE"), 1, 'Test 13');
test(minimumChairs("LELELEL"), 0, 'Test 14');
test(minimumChairs("LELELELEL"), 0, 'Test 15');
test(minimumChairs("ELELELELEL"), 1, 'Test 16');
test(minimumChairs("EL"), 1, 'Test 17');
test(minimumChairs("EEELLLL"), 3, 'Test 18');
test(minimumChairs("ELEELLEL"), 2, 'Test 19');
test(minimumChairs("ELLELE"), 1, 'Test 20');
test(minimumChairs("ELLEELLEEL"), 1, 'Test 21');
test(minimumChairs("LEELLEEL"), 1, 'Test 22');
test(minimumChairs("EEEELEEEE"), 7, 'Test 23');
test(minimumChairs("L"), 0, 'Test 24');
test(minimumChairs("LLL"), 0, 'Test 25');
test(minimumChairs("EELEEL"), 3, 'Test 26');
test(minimumChairs("ELLELELEL"), 1, 'Test 27');
test(minimumChairs("LEELLEELEELLELEEL"), 2, 'Test 28');
test(minimumChairs("EEEEEEEEEELLLLLLLLLLLL"), 10, 'Test 29');
test(minimumChairs("ELLEELLEELLEELLEELLEELLEELLEELLEELLEELLEELLEELLEELLEELLEEL"), 1, 'Test 30');
test(minimumChairs("EEEEEEEEEEEEEEEEEEELLLLLLLLLLLLLLLLLLLL"), 19, 'Test 31');
test(minimumChairs("EEEEEEEEEEEEEEEEEEEE"), 20, 'Test 32');
test(minimumChairs("EELLEELLEE"), 2, 'Test 33');
test(minimumChairs("ELEELLEELLEELLLL"), 2, 'Test 34');
test(minimumChairs("ELLEELLEEELLEELLE"), 2, 'Test 35');
test(minimumChairs("EEEEEEELEELLLLEEEE"), 8, 'Test 36');
test(minimumChairs("ELEELLEELLEELLEELLEELLE"), 2, 'Test 37');
test(minimumChairs("LEELEELLEELEELLEELEELLEELEELLEELEEL"), 6, 'Test 38');
test(minimumChairs("EEEEELLEELLEELLEELLEEE"), 6, 'Test 39');
test(minimumChairs("LELELELELELELELELELELELELELELELELELELELELELELELELELELELELELELELELELELELELELELELELELELELELELELELELE"), 0, 'Test 40');
test(minimumChairs("ELELELELELELEL"), 1, 'Test 41');
test(minimumChairs("LEEELLLLLEEEEEE"), 3, 'Test 42');
test(minimumChairs("EEEEEELLLLLL"), 6, 'Test 43');
test(minimumChairs("EEEELEEEEELEEEEELEEEEELEEEEELEEEEELEEEEELEEE"), 30, 'Test 44');
test(minimumChairs("EEEEELLLLEELLL"), 5, 'Test 45');
test(minimumChairs("LLELELELELELELEE"), 0, 'Test 46');
test(minimumChairs("EEEEEEEEEELELELELELELE"), 10, 'Test 47');
test(minimumChairs("ELELLELLELLELLELLE"), 1, 'Test 48');
test(minimumChairs("EEEEELEELLLLLE"), 6, 'Test 49');
test(minimumChairs("ELELELLELELLEL"), 1, 'Test 50');
test(minimumChairs("ELEELLEELLEELLEELLEELLEELLEELLEELLEELL"), 2, 'Test 51');
test(minimumChairs("EEEELELEELLEEEE"), 7, 'Test 52');
test(minimumChairs("ELEELLEELLEELLEL"), 2, 'Test 53');
test(minimumChairs("EEELLLLLLEELEELLEEL"), 3, 'Test 54');
test(minimumChairs("EEEEEEEEEEEEEEEEEEEEEELE"), 22, 'Test 55');
test(minimumChairs("LEEEEELELELEEL"), 5, 'Test 56');
test(minimumChairs("ELLEEELLEELLEELLEELLEELLE"), 2, 'Test 57');
test(minimumChairs("EEEELELELELELELEL"), 4, 'Test 58');
test(minimumChairs("EEEEEEEEELLLL"), 9, 'Test 59');
test(minimumChairs("ELLEELLEELLEELLE"), 1, 'Test 60');
test(minimumChairs("ELEELLEELLEELLEELLEELLEELLEELLEELLE"), 2, 'Test 61');
test(minimumChairs("EELEELEELEELEE"), 6, 'Test 62');
test(minimumChairs("EEEEELLLLEEEEEELLLLLEEE"), 7, 'Test 63');
test(minimumChairs("LEELLEELLEELLEELL"), 1, 'Test 64');
test(minimumChairs("EEEEEEEELELLELLE"), 8, 'Test 65');
test(minimumChairs("LELELELELELELELELE"), 0, 'Test 66');
test(minimumChairs("LEELLEELLEELLEEL"), 1, 'Test 67');
test(minimumChairs("LLEELLELLEELLE"), 0, 'Test 68');
test(minimumChairs("ELELELELELELE"), 1, 'Test 69');
test(minimumChairs("ELLEELLEELLEELLEELLEELLEELLEELLEELLEELLEELLEELLEELLEELLEELLEELLE"), 1, 'Test 70');
test(minimumChairs("EEEEEEEEEEELELELELELELELELELELELELELELELEEEE"), 14, 'Test 71');
test(minimumChairs("EEEEELLEELLEELLEELLE"), 5, 'Test 72');
test(minimumChairs("EEEEEEEEEEEEEEEEEEEEEEEEEEELLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"), 27, 'Test 73');
test(minimumChairs("EELLEELLEELE"), 2, 'Test 74');
test(minimumChairs("LEELLEELLEELLEELLEEL"), 1, 'Test 75');
test(minimumChairs("ELLEEELLEEELLEEELLEEELLEEELLEE"), 6, 'Test 76');
test(minimumChairs("ELELELELELEL"), 1, 'Test 77');
test(minimumChairs("EEEEELLEELLELLLL"), 5, 'Test 78');
test(minimumChairs("EELEELLEELLEEELLEELLE"), 4, 'Test 79');
test(minimumChairs("EEEEEELLLLLLLL"), 6, 'Test 80');
test(minimumChairs("ELLLLLLEEEEEEL"), 1, 'Test 81');
test(minimumChairs("EEEEELLLLEELLLLL"), 5, 'Test 82');
test(minimumChairs("LEEEEEEEEEEEEEEEEEEEEEEE"), 22, 'Test 83');
test(minimumChairs("ELLEELLEEELLEEELLEEELLEEEL"), 5, 'Test 84');
test(minimumChairs("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"), 40, 'Test 85');
test(minimumChairs("EEEEEEEEEEELLL"), 11, 'Test 86');
test(minimumChairs("EELEEEELLLLLLLEELLLL"), 5, 'Test 87');
test(minimumChairs("ELEELEELLELEEELLELEL"), 4, 'Test 88');
test(minimumChairs("EEEEELLLLLEELLLLLEEEE"), 5, 'Test 89');
test(minimumChairs("EEEELLLLLLLLEEE"), 4, 'Test 90');
test(minimumChairs("EELEEELEEELEEELEEELEEELEEELE"), 14, 'Test 91');
test(minimumChairs("EEEEELLEELLLEELL"), 5, 'Test 92');
test(minimumChairs("EEEEELLLLLEEEE"), 5, 'Test 93');
test(minimumChairs("EEEEEEEEEEEEEEEELLLLLLLLLLLLLLL"), 16, 'Test 94');
test(minimumChairs("LELLELELLELELLELELLELLEL"), 0, 'Test 95');
test(minimumChairs("ELLEELLEELLEELLEELLEEEEE"), 4, 'Test 96');
test(minimumChairs("ELLEELLEELLEELLEELLEELLEELLEELLEELLEELLEELLE"), 1, 'Test 97');
test(minimumChairs("ELELELELELELELELEL"), 1, 'Test 98');
test(minimumChairs("ELLEELLEELLEELLL"), 1, 'Test 99');
test(minimumChairs("EEEEELLLLEEEEE"), 6, 'Test 100');
test(minimumChairs("EEEELELLLL"), 4, 'Test 101');
test(minimumChairs("LEEELEEELEEELEEELEEELEEELEEELEEELEEELEEEEE"), 22, 'Test 102');
test(minimumChairs("EEEEEEEEEEEEEEEEEEEEE"), 21, 'Test 103');
test(minimumChairs("LELELELELELELELELELELELELELELELELELELELELELE"), 0, 'Test 104');
test(minimumChairs("EEEEELLEEEEEEELLLLEEEE"), 10, 'Test 105');
test(minimumChairs("LLEELLELLEELLEELLEELLEELLE"), 0, 'Test 106');
test(minimumChairs("EEELLEELLEELLEELLEELLEEL"), 3, 'Test 107');
test(minimumChairs("LELELELELELELELELELELEL"), 0, 'Test 108');
test(minimumChairs("LEELLEELLEELLELL"), 1, 'Test 109');
test(minimumChairs("ELLEELLEELLEELLLLL"), 1, 'Test 110');
test(minimumChairs("EEEEEEEEEELEEEEEEEEELEEEEEEEEEEELEEEEEEEEE"), 36, 'Test 111');
test(minimumChairs("LELELELELELELELELELELELELELELELELELELELELELELE"), 0, 'Test 112');
test(minimumChairs("ELLEELLEELLEELLEELLEELLEELLEELLE"), 1, 'Test 113');
test(minimumChairs("ELLEELLEELLEELLEELLEELLEELLEELLEELLEEL"), 1, 'Test 114');
test(minimumChairs("ELLELELLELLEELLE"), 1, 'Test 115');
test(minimumChairs("ELELLELLELLELLEL"), 1, 'Test 116');
test(minimumChairs("EEEEEEEEELLLLLLLLL"), 9, 'Test 117');
test(minimumChairs("EEEEEEEEELLLLLLLLLLLL"), 9, 'Test 118');
test(minimumChairs("LELELELELELELELELELELELELELELELELELELELELELELELEL"), 0, 'Test 119');
test(minimumChairs("ELLEELLELLEE"), 1, 'Test 120');
test(minimumChairs("ELLEELLEELLEELLEELLEELL"), 1, 'Test 121');
test(minimumChairs("EEELLEELLEELLE"), 3, 'Test 122');
test(minimumChairs("LELELELELELELELELELE"), 0, 'Test 123');
test(minimumChairs("ELEELLEELLEELLEELLEELLEELLEELLEELLEELLEELLEEL"), 2, 'Test 124');
test(minimumChairs("ELEELLEELLEELLEELLEELLEELLEELLEELLEELLEELLEELL"), 2, 'Test 125');
test(minimumChairs("EELLEELEELLEELEELLEELEELLEELEELLEE"), 6, 'Test 126');
test(minimumChairs("LEELLEELLEELLEELLEELLEELLEELLEEL"), 1, 'Test 127');
test(minimumChairs("EEEEEEELLLLLLLELLL"), 7, 'Test 128');
test(minimumChairs("ELLEELLEELLEELLEELLE"), 1, 'Test 129');
test(minimumChairs("LLLLLLLLLLEEEEEEEEEE"), 0, 'Test 130');
test(minimumChairs("EEEEEEELLLLLLLEEEE"), 7, 'Test 131');
test(minimumChairs("LEELLEELLEELLEELLEELLEEL"), 1, 'Test 132');
test(minimumChairs("EEEEELLEELLEELLEELLEELLEELLEELLEELLEEL"), 5, 'Test 133');
test(minimumChairs("ELLEELLEELLEEL"), 1, 'Test 134');
test(minimumChairs("ELLELEELLELEELLELEELLELEEL"), 1, 'Test 135');
test(minimumChairs("LEELLEEELLEL"), 2, 'Test 136');
test(minimumChairs("EEEEELLLLLLLEEELLLLLEEELLLLLLLEEEEE"), 5, 'Test 137');
test(minimumChairs("ELEELLEEL"), 2, 'Test 138');
test(minimumChairs("LEEEEEELLEEEEEELLEEEEEELLE"), 13, 'Test 139');
test(minimumChairs("EELLEELLLEELL"), 2, 'Test 140');
test(minimumChairs("EEEEEEEEEEEEEEEEEEEEEEEEEELELELELELELELELELELELELELELELELELELELELELELELELELELE"), 26, 'Test 141');
test(minimumChairs("EELLEELLLLEEEL"), 2, 'Test 142');
test(minimumChairs("LELELELELELELELELELELELE"), 0, 'Test 143');
test(minimumChairs("ELEELEELEELEELEELEE"), 7, 'Test 144');

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
