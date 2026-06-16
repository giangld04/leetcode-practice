// Test: 605. Can Place Flowers
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { canPlaceFlowers } = require("./solution");

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

console.log("\n605. Can Place Flowers\n");

test(canPlaceFlowers([1,0,0,0,0,1], 2), false, 'Test 1');
test(canPlaceFlowers([1,0,1,0,1], 0), true, 'Test 2');
test(canPlaceFlowers([1,0,0,0,1], 1), true, 'Test 3');
test(canPlaceFlowers([1,0,0,0,1], 2), false, 'Test 4');
test(canPlaceFlowers([1,0,0,1,0,0,1], 1), false, 'Test 5');
test(canPlaceFlowers([0,0,0,1,0,0,0], 2), true, 'Test 6');
test(canPlaceFlowers([0], 1), true, 'Test 7');
test(canPlaceFlowers([1,0,0,1,0,0,1,0,0], 2), false, 'Test 8');
test(canPlaceFlowers([0,1,0,1,0], 1), false, 'Test 9');
test(canPlaceFlowers([0,1,0,0,1,0,0,1,0], 0), true, 'Test 10');
test(canPlaceFlowers([0,0,0,0,0], 3), true, 'Test 11');
test(canPlaceFlowers([0,0,1,0,0], 1), true, 'Test 12');
test(canPlaceFlowers([0,0], 1), true, 'Test 13');
test(canPlaceFlowers([1], 0), true, 'Test 14');
test(canPlaceFlowers([1,0,0,0,0,0,1], 2), true, 'Test 15');
test(canPlaceFlowers([1,1], 0), true, 'Test 16');
test(canPlaceFlowers([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 10), false, 'Test 17');
test(canPlaceFlowers([0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0], 2), true, 'Test 18');
test(canPlaceFlowers([0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0], 5), true, 'Test 19');
test(canPlaceFlowers([0,0,0,0,0,0,1,0,0,0,0,0,0], 4), true, 'Test 20');
test(canPlaceFlowers([1,0,0,0,0,1,0,1,0,0,0,0,1,0,0], 2), true, 'Test 21');
test(canPlaceFlowers([0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], 4), true, 'Test 22');
test(canPlaceFlowers([1,0,0,0,0,1,0,0,0,0,1], 3), false, 'Test 23');
test(canPlaceFlowers([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0], 4), true, 'Test 24');
test(canPlaceFlowers([1,0,1,0,1,0,1,0,1,0,1], 0), true, 'Test 25');
test(canPlaceFlowers([1,0,0,0,0,1,0,0,0,1,0,0], 3), true, 'Test 26');
test(canPlaceFlowers([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 2), false, 'Test 27');
test(canPlaceFlowers([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0], 0), true, 'Test 28');
test(canPlaceFlowers([0,0,0,0,0,0,0,0,0,0], 5), true, 'Test 29');
test(canPlaceFlowers([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0], 3), false, 'Test 30');
test(canPlaceFlowers([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0], 2), true, 'Test 31');
test(canPlaceFlowers([0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0], 6), true, 'Test 32');
test(canPlaceFlowers([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1], 4), false, 'Test 33');
test(canPlaceFlowers([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1], 3), true, 'Test 34');
test(canPlaceFlowers([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 7), true, 'Test 35');
test(canPlaceFlowers([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 6), true, 'Test 36');
test(canPlaceFlowers([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0], 5), false, 'Test 37');
test(canPlaceFlowers([0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0], 5), true, 'Test 38');
test(canPlaceFlowers([0,0,1,0,0,0,1,0,0,0,1,0,0], 3), true, 'Test 39');
test(canPlaceFlowers([0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1], 4), true, 'Test 40');
test(canPlaceFlowers([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1], 5), false, 'Test 41');
test(canPlaceFlowers([0,0,1,0,0,1,0,0,1,0,0], 3), false, 'Test 42');
test(canPlaceFlowers([0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0], 3), true, 'Test 43');
test(canPlaceFlowers([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1], 3), true, 'Test 44');
test(canPlaceFlowers([0,0,0,0,1,0,0,0,0,1,0,0,0,0,1], 2), true, 'Test 45');
test(canPlaceFlowers([0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0], 5), true, 'Test 46');
test(canPlaceFlowers([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 15), false, 'Test 47');
test(canPlaceFlowers([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 8), true, 'Test 48');
test(canPlaceFlowers([1,0,0,0,0,0,0,0,0,0,0,0,1], 4), true, 'Test 49');
test(canPlaceFlowers([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 2), false, 'Test 50');
test(canPlaceFlowers([1,0,1,0,1,0,1,0,1], 0), true, 'Test 51');
test(canPlaceFlowers([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0], 4), true, 'Test 52');
test(canPlaceFlowers([0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0], 2), true, 'Test 53');
test(canPlaceFlowers([0,0,0,0,0,0,0,0,0,0,0,0,0,0], 5), true, 'Test 54');
test(canPlaceFlowers([0,0,0,0,0,1,0,0,0,1,0,0,0,0,0], 3), true, 'Test 55');
test(canPlaceFlowers([1,0,1,0,1,0,1,0,1,0,1,0,1,0], 2), false, 'Test 56');
test(canPlaceFlowers([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 8), true, 'Test 57');
test(canPlaceFlowers([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1], 4), true, 'Test 58');
test(canPlaceFlowers([0,0,1,0,0,0,0,1,0,0,0,0,1,0,0], 3), true, 'Test 59');
test(canPlaceFlowers([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0], 3), true, 'Test 60');
test(canPlaceFlowers([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 6), true, 'Test 61');
test(canPlaceFlowers([1,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 6), true, 'Test 62');
test(canPlaceFlowers([1,0,0,0,0,0,1,0,0,0,0,1], 3), true, 'Test 63');
test(canPlaceFlowers([0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0], 4), true, 'Test 64');
test(canPlaceFlowers([0,0,1,0,0,0,0,0,0,0,0,1,0,0], 3), true, 'Test 65');
test(canPlaceFlowers([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1], 2), false, 'Test 66');
test(canPlaceFlowers([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 0), true, 'Test 67');
test(canPlaceFlowers([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 10), true, 'Test 68');
test(canPlaceFlowers([1,0,1,0,1,0,1,0,1,0,1,0], 0), true, 'Test 69');
test(canPlaceFlowers([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1], 2), false, 'Test 70');
test(canPlaceFlowers([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 0), true, 'Test 71');
test(canPlaceFlowers([1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1], 4), true, 'Test 72');
test(canPlaceFlowers([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 0), true, 'Test 73');
test(canPlaceFlowers([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 13), true, 'Test 74');
test(canPlaceFlowers([0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0], 4), true, 'Test 75');
test(canPlaceFlowers([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0], 3), true, 'Test 76');
test(canPlaceFlowers([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1], 0), true, 'Test 77');
test(canPlaceFlowers([1,0,0,0,0,0,0,1], 3), false, 'Test 78');
test(canPlaceFlowers([0,0,1,0,0,0,0,1,0,0,0,0,1], 4), false, 'Test 79');
test(canPlaceFlowers([1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], 3), true, 'Test 80');
test(canPlaceFlowers([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 0), true, 'Test 81');
test(canPlaceFlowers([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1], 5), true, 'Test 82');
test(canPlaceFlowers([0,1,0,1,0,1,0,1,0,1,0,1], 0), true, 'Test 83');
test(canPlaceFlowers([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 0), true, 'Test 84');
test(canPlaceFlowers([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 5), true, 'Test 85');
test(canPlaceFlowers([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 0), true, 'Test 86');
test(canPlaceFlowers([1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1], 3), false, 'Test 87');
test(canPlaceFlowers([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1], 3), true, 'Test 88');
test(canPlaceFlowers([0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0], 5), true, 'Test 89');
test(canPlaceFlowers([0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0], 5), true, 'Test 90');
test(canPlaceFlowers([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1], 3), false, 'Test 91');
test(canPlaceFlowers([0,0,1,0,1,0,1,0,0], 1), true, 'Test 92');
test(canPlaceFlowers([1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0], 2), true, 'Test 93');
test(canPlaceFlowers([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 0), true, 'Test 94');
test(canPlaceFlowers([1,0,0,0,0,0,1,0,0,0], 3), true, 'Test 95');
test(canPlaceFlowers([0,0,1,0,0,0,0,0,1,0,0,0,0,0,1], 4), true, 'Test 96');
test(canPlaceFlowers([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 0), true, 'Test 97');
test(canPlaceFlowers([1,1,0,0,1,0,0,1,0,0,1,0], 2), false, 'Test 98');
test(canPlaceFlowers([0,0,1,0,0,0,0,0,0,1,0,0], 3), true, 'Test 99');
test(canPlaceFlowers([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 15), true, 'Test 100');
test(canPlaceFlowers([1,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 5), true, 'Test 101');
test(canPlaceFlowers([0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0], 4), true, 'Test 102');
test(canPlaceFlowers([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 10), true, 'Test 103');
test(canPlaceFlowers([1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0], 3), true, 'Test 104');
test(canPlaceFlowers([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 0), true, 'Test 105');
test(canPlaceFlowers([1,0,0,0,0,1,0,0,0,0,1,0,0], 3), true, 'Test 106');
test(canPlaceFlowers([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0], 6), true, 'Test 107');

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
