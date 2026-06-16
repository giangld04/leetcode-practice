// Test: 3130. Find All Possible Stable Binary Arrays Ii
// 95 test cases from LeetCodeDataset
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

console.log("\n3130. Find All Possible Stable Binary Arrays Ii\n");

test(numberOfStableArrays(5, 5, 4), 242, 'Test 1');
test(numberOfStableArrays(100, 100, 50), 375840050, 'Test 2');
test(numberOfStableArrays(5, 5, 2), 84, 'Test 3');
test(numberOfStableArrays(4, 4, 3), 62, 'Test 4');
test(numberOfStableArrays(2, 2, 3), 6, 'Test 5');
test(numberOfStableArrays(1000, 1000, 500), Error: maximum recursion depth exceeded, 'Test 6');
test(numberOfStableArrays(3, 2, 1), 1, 'Test 7');
test(numberOfStableArrays(5, 4, 2), 45, 'Test 8');
test(numberOfStableArrays(4, 4, 4), 70, 'Test 9');
test(numberOfStableArrays(10, 10, 5), 165114, 'Test 10');
test(numberOfStableArrays(500, 500, 250), Error: maximum recursion depth exceeded, 'Test 11');
test(numberOfStableArrays(1, 1, 2), 2, 'Test 12');
test(numberOfStableArrays(4, 5, 3), 99, 'Test 13');
test(numberOfStableArrays(3, 3, 2), 14, 'Test 14');
test(numberOfStableArrays(5, 5, 3), 194, 'Test 15');
test(numberOfStableArrays(100, 100, 10), 474184186, 'Test 16');
test(numberOfStableArrays(500, 500, 50), Error: maximum recursion depth exceeded, 'Test 17');
test(numberOfStableArrays(4, 3, 4), 35, 'Test 18');
test(numberOfStableArrays(2, 3, 2), 7, 'Test 19');
test(numberOfStableArrays(1, 2, 1), 1, 'Test 20');
test(numberOfStableArrays(7, 8, 4), 5250, 'Test 21');
test(numberOfStableArrays(100, 50, 10), 10967566, 'Test 22');
test(numberOfStableArrays(300, 700, 100), Error: maximum recursion depth exceeded, 'Test 23');
test(numberOfStableArrays(75, 25, 3), 3276, 'Test 24');
test(numberOfStableArrays(7, 10, 4), 12948, 'Test 25');
test(numberOfStableArrays(9, 7, 3), 4848, 'Test 26');
test(numberOfStableArrays(20, 15, 4), 30552957, 'Test 27');
test(numberOfStableArrays(100, 100, 100), 407336795, 'Test 28');
test(numberOfStableArrays(400, 400, 25), Error: maximum recursion depth exceeded, 'Test 29');
test(numberOfStableArrays(10, 15, 3), 378412, 'Test 30');
test(numberOfStableArrays(999, 999, 500), Error: maximum recursion depth exceeded, 'Test 31');
test(numberOfStableArrays(1, 1000, 1), Error: maximum recursion depth exceeded, 'Test 32');
test(numberOfStableArrays(800, 200, 50), Error: maximum recursion depth exceeded, 'Test 33');
test(numberOfStableArrays(1000, 1000, 100), Error: maximum recursion depth exceeded, 'Test 34');
test(numberOfStableArrays(500, 500, 200), Error: maximum recursion depth exceeded, 'Test 35');
test(numberOfStableArrays(9, 11, 2), 5344, 'Test 36');
test(numberOfStableArrays(150, 150, 25), 469749347, 'Test 37');
test(numberOfStableArrays(12, 9, 4), 174530, 'Test 38');
test(numberOfStableArrays(10, 10, 3), 66486, 'Test 39');
test(numberOfStableArrays(12, 12, 10), 2703832, 'Test 40');
test(numberOfStableArrays(50, 50, 10), 430250984, 'Test 41');
test(numberOfStableArrays(50, 50, 5), 256686735, 'Test 42');
test(numberOfStableArrays(750, 250, 100), Error: maximum recursion depth exceeded, 'Test 43');
test(numberOfStableArrays(1000, 1, 1), Error: maximum recursion depth exceeded, 'Test 44');
test(numberOfStableArrays(20, 10, 4), 3741210, 'Test 45');
test(numberOfStableArrays(20, 18, 6), 378141764, 'Test 46');
test(numberOfStableArrays(10, 5, 3), 546, 'Test 47');
test(numberOfStableArrays(8, 6, 4), 2386, 'Test 48');
test(numberOfStableArrays(20, 20, 10), 431683431, 'Test 49');
test(numberOfStableArrays(450, 550, 75), Error: maximum recursion depth exceeded, 'Test 50');
test(numberOfStableArrays(600, 400, 50), Error: maximum recursion depth exceeded, 'Test 51');
test(numberOfStableArrays(14, 14, 4), 21533230, 'Test 52');
test(numberOfStableArrays(300, 300, 20), Error: maximum recursion depth exceeded, 'Test 53');
test(numberOfStableArrays(800, 200, 200), Error: maximum recursion depth exceeded, 'Test 54');
test(numberOfStableArrays(15, 12, 5), 13147531, 'Test 55');
test(numberOfStableArrays(20, 10, 2), 66, 'Test 56');
test(numberOfStableArrays(200, 150, 15), 120261210, 'Test 57');
test(numberOfStableArrays(150, 150, 15), 416993889, 'Test 58');
test(numberOfStableArrays(75, 25, 5), 769798783, 'Test 59');
test(numberOfStableArrays(15, 10, 5), 2249276, 'Test 60');
test(numberOfStableArrays(7, 5, 2), 114, 'Test 61');
test(numberOfStableArrays(750, 750, 75), Error: maximum recursion depth exceeded, 'Test 62');
test(numberOfStableArrays(13, 10, 5), 914333, 'Test 63');
test(numberOfStableArrays(25, 25, 1), 2, 'Test 64');
test(numberOfStableArrays(800, 800, 500), Error: maximum recursion depth exceeded, 'Test 65');
test(numberOfStableArrays(900, 100, 100), Error: maximum recursion depth exceeded, 'Test 66');
test(numberOfStableArrays(300, 300, 1), Error: maximum recursion depth exceeded, 'Test 67');
test(numberOfStableArrays(750, 250, 75), Error: maximum recursion depth exceeded, 'Test 68');
test(numberOfStableArrays(17, 15, 7), 539683360, 'Test 69');
test(numberOfStableArrays(400, 600, 30), Error: maximum recursion depth exceeded, 'Test 70');
test(numberOfStableArrays(8, 12, 2), 1391, 'Test 71');
test(numberOfStableArrays(20, 20, 5), 89895606, 'Test 72');
test(numberOfStableArrays(12, 12, 6), 2555112, 'Test 73');
test(numberOfStableArrays(20, 15, 7), 957788108, 'Test 74');
test(numberOfStableArrays(8, 7, 3), 3296, 'Test 75');
test(numberOfStableArrays(7, 5, 1), 0, 'Test 76');
test(numberOfStableArrays(50, 50, 4), 507669790, 'Test 77');
test(numberOfStableArrays(7, 8, 2), 720, 'Test 78');
test(numberOfStableArrays(500, 300, 50), Error: maximum recursion depth exceeded, 'Test 79');
test(numberOfStableArrays(15, 20, 5), 983489078, 'Test 80');
test(numberOfStableArrays(6, 8, 2), 300, 'Test 81');
test(numberOfStableArrays(500, 500, 100), Error: maximum recursion depth exceeded, 'Test 82');
test(numberOfStableArrays(1000, 1000, 1000), Error: maximum recursion depth exceeded, 'Test 83');
test(numberOfStableArrays(200, 300, 150), Error: maximum recursion depth exceeded, 'Test 84');
test(numberOfStableArrays(250, 250, 20), Error: maximum recursion depth exceeded, 'Test 85');
test(numberOfStableArrays(7, 5, 4), 664, 'Test 86');
test(numberOfStableArrays(6, 6, 1), 2, 'Test 87');
test(numberOfStableArrays(15, 15, 5), 119126132, 'Test 88');
test(numberOfStableArrays(15, 8, 5), 277298, 'Test 89');
test(numberOfStableArrays(900, 900, 900), Error: maximum recursion depth exceeded, 'Test 90');
test(numberOfStableArrays(1000, 1000, 10), Error: maximum recursion depth exceeded, 'Test 91');
test(numberOfStableArrays(9, 15, 3), 112216, 'Test 92');
test(numberOfStableArrays(10, 8, 3), 16025, 'Test 93');
test(numberOfStableArrays(12, 8, 6), 114332, 'Test 94');
test(numberOfStableArrays(18, 12, 5), 52051889, 'Test 95');

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
