// Test: 3129. Find All Possible Stable Binary Arrays I
// 128 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfStableArrays } = require("./solution");

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

console.log("\n3129. Find All Possible Stable Binary Arrays I\n");

test(numberOfStableArrays(3, 5, 3), 40, 'Test 1');
test(numberOfStableArrays(5, 5, 4), 242, 'Test 2');
test(numberOfStableArrays(5, 5, 2), 84, 'Test 3');
test(numberOfStableArrays(1, 1, 1), 2, 'Test 4');
test(numberOfStableArrays(2, 2, 3), 6, 'Test 5');
test(numberOfStableArrays(1, 5, 1), 0, 'Test 6');
test(numberOfStableArrays(200, 200, 200), 587893473, 'Test 7');
test(numberOfStableArrays(4, 4, 2), 34, 'Test 8');
test(numberOfStableArrays(5, 4, 2), 45, 'Test 9');
test(numberOfStableArrays(3, 4, 2), 18, 'Test 10');
test(numberOfStableArrays(2, 3, 3), 10, 'Test 11');
test(numberOfStableArrays(10, 10, 5), 165114, 'Test 12');
test(numberOfStableArrays(4, 4, 4), 70, 'Test 13');
test(numberOfStableArrays(2, 2, 2), 6, 'Test 14');
test(numberOfStableArrays(6, 3, 2), 10, 'Test 15');
test(numberOfStableArrays(1, 1, 2), 2, 'Test 16');
test(numberOfStableArrays(2, 5, 2), 3, 'Test 17');
test(numberOfStableArrays(4, 5, 3), 99, 'Test 18');
test(numberOfStableArrays(3, 3, 2), 14, 'Test 19');
test(numberOfStableArrays(5, 5, 3), 194, 'Test 20');
test(numberOfStableArrays(7, 7, 6), 3418, 'Test 21');
test(numberOfStableArrays(4, 3, 2), 18, 'Test 22');
test(numberOfStableArrays(20, 20, 10), 431683431, 'Test 23');
test(numberOfStableArrays(2, 3, 2), 7, 'Test 24');
test(numberOfStableArrays(1, 2, 1), 1, 'Test 25');
test(numberOfStableArrays(3, 4, 3), 31, 'Test 26');
test(numberOfStableArrays(6, 6, 5), 912, 'Test 27');
test(numberOfStableArrays(3, 2, 2), 7, 'Test 28');
test(numberOfStableArrays(100, 100, 50), 375840050, 'Test 29');
test(numberOfStableArrays(190, 10, 2), 0, 'Test 30');
test(numberOfStableArrays(180, 120, 15), 662485902, 'Test 31');
test(numberOfStableArrays(190, 10, 5), 0, 'Test 32');
test(numberOfStableArrays(10, 15, 5), 2249276, 'Test 33');
test(numberOfStableArrays(120, 180, 15), 662485902, 'Test 34');
test(numberOfStableArrays(100, 150, 5), 357829666, 'Test 35');
test(numberOfStableArrays(175, 125, 30), 482940468, 'Test 36');
test(numberOfStableArrays(10, 20, 2), 66, 'Test 37');
test(numberOfStableArrays(100, 200, 10), 796458380, 'Test 38');
test(numberOfStableArrays(100, 50, 15), 814679806, 'Test 39');
test(numberOfStableArrays(100, 50, 2), 1326, 'Test 40');
test(numberOfStableArrays(200, 1, 1), 0, 'Test 41');
test(numberOfStableArrays(100, 150, 30), 462327057, 'Test 42');
test(numberOfStableArrays(100, 1, 2), 0, 'Test 43');
test(numberOfStableArrays(200, 100, 25), 672942188, 'Test 44');
test(numberOfStableArrays(15, 15, 2), 860142, 'Test 45');
test(numberOfStableArrays(190, 10, 4), 0, 'Test 46');
test(numberOfStableArrays(3, 7, 4), 80, 'Test 47');
test(numberOfStableArrays(50, 50, 1), 2, 'Test 48');
test(numberOfStableArrays(200, 200, 2), 609176335, 'Test 49');
test(numberOfStableArrays(150, 50, 10), 701105470, 'Test 50');
test(numberOfStableArrays(200, 1, 200), 201, 'Test 51');
test(numberOfStableArrays(5, 4, 4), 121, 'Test 52');
test(numberOfStableArrays(20, 180, 4), 0, 'Test 53');
test(numberOfStableArrays(199, 199, 199), 387943228, 'Test 54');
test(numberOfStableArrays(7, 3, 4), 80, 'Test 55');
test(numberOfStableArrays(50, 50, 2), 642129773, 'Test 56');
test(numberOfStableArrays(100, 100, 2), 572804009, 'Test 57');
test(numberOfStableArrays(50, 50, 10), 430250984, 'Test 58');
test(numberOfStableArrays(2, 100, 3), 0, 'Test 59');
test(numberOfStableArrays(150, 50, 1), 0, 'Test 60');
test(numberOfStableArrays(20, 10, 4), 3741210, 'Test 61');
test(numberOfStableArrays(150, 100, 50), 746397052, 'Test 62');
test(numberOfStableArrays(101, 100, 3), 922524303, 'Test 63');
test(numberOfStableArrays(10, 190, 2), 0, 'Test 64');
test(numberOfStableArrays(150, 150, 5), 670611061, 'Test 65');
test(numberOfStableArrays(1, 200, 200), 201, 'Test 66');
test(numberOfStableArrays(199, 200, 100), 287809711, 'Test 67');
test(numberOfStableArrays(150, 200, 75), 592136303, 'Test 68');
test(numberOfStableArrays(200, 200, 10), 346661055, 'Test 69');
test(numberOfStableArrays(4, 4, 3), 62, 'Test 70');
test(numberOfStableArrays(200, 199, 100), 287809711, 'Test 71');
test(numberOfStableArrays(150, 120, 10), 860251283, 'Test 72');
test(numberOfStableArrays(150, 150, 10), 966001232, 'Test 73');
test(numberOfStableArrays(15, 15, 4), 77607590, 'Test 74');
test(numberOfStableArrays(100, 100, 200), 407336795, 'Test 75');
test(numberOfStableArrays(1, 200, 1), 0, 'Test 76');
test(numberOfStableArrays(150, 150, 1), 2, 'Test 77');
test(numberOfStableArrays(15, 10, 5), 2249276, 'Test 78');
test(numberOfStableArrays(150, 5, 10), 0, 'Test 79');
test(numberOfStableArrays(190, 10, 10), 0, 'Test 80');
test(numberOfStableArrays(20, 20, 3), 702925689, 'Test 81');
test(numberOfStableArrays(10, 20, 1), 0, 'Test 82');
test(numberOfStableArrays(1, 1, 200), 2, 'Test 83');
test(numberOfStableArrays(200, 100, 10), 796458380, 'Test 84');
test(numberOfStableArrays(80, 20, 5), 666262799, 'Test 85');
test(numberOfStableArrays(100, 101, 3), 922524303, 'Test 86');
test(numberOfStableArrays(150, 50, 8), 139177940, 'Test 87');
test(numberOfStableArrays(20, 20, 6), 140887996, 'Test 88');
test(numberOfStableArrays(50, 50, 200), 538992043, 'Test 89');
test(numberOfStableArrays(100, 100, 10), 474184186, 'Test 90');
test(numberOfStableArrays(10, 10, 1), 2, 'Test 91');
test(numberOfStableArrays(20, 20, 5), 89895606, 'Test 92');
test(numberOfStableArrays(50, 50, 20), 644307023, 'Test 93');
test(numberOfStableArrays(180, 20, 4), 0, 'Test 94');
test(numberOfStableArrays(199, 199, 198), 387942830, 'Test 95');
test(numberOfStableArrays(199, 199, 100), 541514263, 'Test 96');
test(numberOfStableArrays(50, 150, 2), 0, 'Test 97');
test(numberOfStableArrays(100, 10, 3), 0, 'Test 98');
test(numberOfStableArrays(100, 50, 150), 713790273, 'Test 99');
test(numberOfStableArrays(180, 150, 60), 850799592, 'Test 100');
test(numberOfStableArrays(100, 100, 1), 2, 'Test 101');
test(numberOfStableArrays(120, 80, 6), 885202743, 'Test 102');
test(numberOfStableArrays(5, 150, 10), 0, 'Test 103');
test(numberOfStableArrays(200, 200, 3), 894330409, 'Test 104');
test(numberOfStableArrays(15, 15, 3), 24857864, 'Test 105');
test(numberOfStableArrays(10, 190, 10), 0, 'Test 106');
test(numberOfStableArrays(1, 100, 2), 0, 'Test 107');
test(numberOfStableArrays(100, 100, 5), 20078082, 'Test 108');
test(numberOfStableArrays(180, 20, 200), 680498188, 'Test 109');
test(numberOfStableArrays(180, 20, 2), 0, 'Test 110');
test(numberOfStableArrays(10, 15, 4), 1360424, 'Test 111');
test(numberOfStableArrays(50, 150, 5), 245337662, 'Test 112');
test(numberOfStableArrays(125, 175, 80), 30909440, 'Test 113');
test(numberOfStableArrays(100, 1, 50), 1, 'Test 114');
test(numberOfStableArrays(10, 190, 5), 0, 'Test 115');
test(numberOfStableArrays(150, 50, 5), 245337662, 'Test 116');
test(numberOfStableArrays(80, 120, 9), 674949759, 'Test 117');
test(numberOfStableArrays(50, 150, 10), 701105470, 'Test 118');
test(numberOfStableArrays(15, 10, 4), 1360424, 'Test 119');
test(numberOfStableArrays(150, 100, 5), 357829666, 'Test 120');
test(numberOfStableArrays(150, 50, 2), 0, 'Test 121');
test(numberOfStableArrays(100, 100, 20), 294133308, 'Test 122');
test(numberOfStableArrays(50, 100, 10), 10967566, 'Test 123');
test(numberOfStableArrays(150, 200, 199), 777184933, 'Test 124');
test(numberOfStableArrays(50, 150, 7), 536640420, 'Test 125');
test(numberOfStableArrays(5, 200, 4), 0, 'Test 126');
test(numberOfStableArrays(50, 200, 20), 192149064, 'Test 127');
test(numberOfStableArrays(180, 180, 50), 911610311, 'Test 128');

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
