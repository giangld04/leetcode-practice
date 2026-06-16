// Test: 1387. Sort Integers By The Power Value
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { getKth } = require("./solution");

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

console.log("\n1387. Sort Integers By The Power Value\n");

test(getKth(1, 10, 1), 1, 'Test 1');
test(getKth(5, 5, 1), 5, 'Test 2');
test(getKth(12, 15, 2), 13, 'Test 3');
test(getKth(1, 10, 5), 5, 'Test 4');
test(getKth(10, 20, 5), 13, 'Test 5');
test(getKth(7, 11, 4), 7, 'Test 6');
test(getKth(10, 20, 3), 20, 'Test 7');
test(getKth(1, 10, 3), 4, 'Test 8');
test(getKth(300, 500, 100), 370, 'Test 9');
test(getKth(100, 200, 1), 128, 'Test 10');
test(getKth(300, 700, 150), 613, 'Test 11');
test(getKth(700, 800, 18), 794, 'Test 12');
test(getKth(100, 200, 75), 183, 'Test 13');
test(getKth(1, 100, 100), 97, 'Test 14');
test(getKth(700, 800, 50), 766, 'Test 15');
test(getKth(800, 900, 5), 802, 'Test 16');
test(getKth(900, 1000, 50), 988, 'Test 17');
test(getKth(600, 800, 150), 756, 'Test 18');
test(getKth(800, 1000, 50), 912, 'Test 19');
test(getKth(500, 900, 100), 692, 'Test 20');
test(getKth(400, 600, 100), 489, 'Test 21');
test(getKth(400, 700, 120), 418, 'Test 22');
test(getKth(750, 850, 50), 758, 'Test 23');
test(getKth(300, 400, 100), 313, 'Test 24');
test(getKth(5, 25, 1), 8, 'Test 25');
test(getKth(300, 350, 30), 338, 'Test 26');
test(getKth(950, 1000, 25), 984, 'Test 27');
test(getKth(200, 300, 1), 256, 'Test 28');
test(getKth(800, 900, 50), 855, 'Test 29');
test(getKth(800, 900, 85), 898, 'Test 30');
test(getKth(500, 600, 50), 509, 'Test 31');
test(getKth(250, 450, 150), 428, 'Test 32');
test(getKth(150, 450, 100), 173, 'Test 33');
test(getKth(300, 350, 10), 309, 'Test 34');
test(getKth(300, 600, 150), 374, 'Test 35');
test(getKth(100, 200, 10), 138, 'Test 36');
test(getKth(400, 600, 150), 486, 'Test 37');
test(getKth(900, 1000, 10), 965, 'Test 38');
test(getKth(250, 500, 100), 312, 'Test 39');
test(getKth(300, 400, 50), 367, 'Test 40');
test(getKth(500, 1000, 250), 658, 'Test 41');
test(getKth(300, 350, 25), 315, 'Test 42');
test(getKth(200, 300, 75), 242, 'Test 43');
test(getKth(50, 150, 25), 56, 'Test 44');
test(getKth(250, 350, 100), 313, 'Test 45');
test(getKth(50, 75, 1), 64, 'Test 46');
test(getKth(500, 1000, 150), 943, 'Test 47');
test(getKth(100, 800, 200), 547, 'Test 48');
test(getKth(100, 500, 30), 150, 'Test 49');
test(getKth(1, 500, 250), 465, 'Test 50');
test(getKth(400, 600, 120), 590, 'Test 51');
test(getKth(1, 100, 10), 3, 'Test 52');
test(getKth(200, 300, 50), 271, 'Test 53');
test(getKth(250, 750, 250), 741, 'Test 54');
test(getKth(300, 400, 5), 384, 'Test 55');
test(getKth(400, 600, 200), 487, 'Test 56');
test(getKth(1, 500, 150), 163, 'Test 57');
test(getKth(150, 250, 20), 234, 'Test 58');
test(getKth(800, 1000, 200), 937, 'Test 59');
test(getKth(1, 1000, 1), 1, 'Test 60');
test(getKth(999, 1000, 1), 999, 'Test 61');
test(getKth(1, 1000, 500), 606, 'Test 62');
test(getKth(200, 300, 100), 231, 'Test 63');
test(getKth(200, 300, 10), 280, 'Test 64');
test(getKth(300, 700, 250), 699, 'Test 65');
test(getKth(250, 400, 100), 263, 'Test 66');
test(getKth(750, 850, 30), 813, 'Test 67');
test(getKth(100, 300, 150), 242, 'Test 68');
test(getKth(5, 25, 25), Error: list index out of range, 'Test 69');
test(getKth(25, 75, 25), 36, 'Test 70');
test(getKth(400, 500, 100), 487, 'Test 71');
test(getKth(800, 900, 80), 874, 'Test 72');
test(getKth(50, 75, 25), 55, 'Test 73');
test(getKth(150, 300, 75), 210, 'Test 74');
test(getKth(1, 100, 1), 1, 'Test 75');
test(getKth(500, 1000, 300), 754, 'Test 76');
test(getKth(600, 700, 20), 663, 'Test 77');
test(getKth(800, 900, 100), 889, 'Test 78');
test(getKth(200, 400, 150), 243, 'Test 79');
test(getKth(100, 200, 100), 129, 'Test 80');
test(getKth(100, 200, 50), 114, 'Test 81');
test(getKth(800, 900, 25), 882, 'Test 82');
test(getKth(1, 100, 50), 9, 'Test 83');
test(getKth(500, 600, 25), 538, 'Test 84');
test(getKth(50, 150, 50), 66, 'Test 85');
test(getKth(1000, 1000, 1), 1000, 'Test 86');
test(getKth(1, 100, 75), 67, 'Test 87');
test(getKth(900, 999, 15), 985, 'Test 88');
test(getKth(2, 10, 5), 10, 'Test 89');
test(getKth(1, 1000, 750), 322, 'Test 90');
test(getKth(600, 900, 150), 718, 'Test 91');
test(getKth(50, 100, 15), 93, 'Test 92');
test(getKth(1, 1, 1), 1, 'Test 93');
test(getKth(600, 800, 100), 676, 'Test 94');

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
