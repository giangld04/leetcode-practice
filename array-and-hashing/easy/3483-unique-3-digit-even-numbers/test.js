// Test: 3483. Unique 3 Digit Even Numbers
// 128 test cases from LeetCodeDataset
// Run: node test.js

const { totalNumbers } = require("./solution");

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

console.log("\n3483. Unique 3 Digit Even Numbers\n");

test(totalNumbers([1,1,1,1,1,1,1,1,1,1]), 0, 'Test 1');
test(totalNumbers([8,8,8,8,8,8,8,8,8,8]), 1, 'Test 2');
test(totalNumbers([6,6,6]), 1, 'Test 3');
test(totalNumbers([1,3,5]), 0, 'Test 4');
test(totalNumbers([2,2,2,2,2,2,2,2,2,2]), 1, 'Test 5');
test(totalNumbers([1,0,2,3,5,7,9]), 55, 'Test 6');
test(totalNumbers([9,9,9,9,9,9,9,9,9,9]), 0, 'Test 7');
test(totalNumbers([1,2,3,4,5,6,7,8,9,0]), 328, 'Test 8');
test(totalNumbers([0,0,0]), 0, 'Test 9');
test(totalNumbers([2,0,0,2]), 3, 'Test 10');
test(totalNumbers([1,2,3]), 2, 'Test 11');
test(totalNumbers([2,2,2,2]), 1, 'Test 12');
test(totalNumbers([2,1,3,4,2,4,2,4,2,2]), 28, 'Test 13');
test(totalNumbers([2,2,0,0,2,2]), 4, 'Test 14');
test(totalNumbers([0,2,2]), 2, 'Test 15');
test(totalNumbers([0,1,3,5,7,9]), 20, 'Test 16');
test(totalNumbers([8,6,8,6,8,6,8,6,8,6]), 8, 'Test 17');
test(totalNumbers([2,4,6,8,0]), 48, 'Test 18');
test(totalNumbers([1,1,1,1,1,1,1,1,1,0]), 1, 'Test 19');
test(totalNumbers([8,0,7,4,9,3,0,3,0,9]), 63, 'Test 20');
test(totalNumbers([1,0,1,0,1,0]), 2, 'Test 21');
test(totalNumbers([1,1,2,2,3,3,4,4,5,5]), 48, 'Test 22');
test(totalNumbers([0,1,2,3,4,5,6,7,8,9]), 328, 'Test 23');
test(totalNumbers([1,1,2,2,3,3]), 8, 'Test 24');
test(totalNumbers([1,2,3,4]), 12, 'Test 25');
test(totalNumbers([9,8,7,6,5,4,3,2,1,0]), 328, 'Test 26');
test(totalNumbers([1,0,0,2]), 5, 'Test 27');
test(totalNumbers([0,0,2,2,4,4,6,6,8,8]), 96, 'Test 28');
test(totalNumbers([0,0,0,0,0,0,0,0,0,3]), 1, 'Test 29');
test(totalNumbers([0,0,0,1,1,1,2,2,2]), 12, 'Test 30');
test(totalNumbers([0,1,2,3,4,5,6,7,8,9,0]), 337, 'Test 31');
test(totalNumbers([0,2,4,6,8,0,2,4,6,8,0,2,4,6]), 99, 'Test 32');
test(totalNumbers([1,1,1,1,1,1,2,2,2,2]), 4, 'Test 33');
test(totalNumbers([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]), 446, 'Test 34');
test(totalNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 0]), 260, 'Test 35');
test(totalNumbers([9,9,9,9,9,9,9,9,9,0]), 1, 'Test 36');
test(totalNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0]), 337, 'Test 37');
test(totalNumbers([0, 1, 2, 2, 3, 4, 5]), 63, 'Test 38');
test(totalNumbers([9,9,9,9,9,9,8,8,8,8]), 4, 'Test 39');
test(totalNumbers([1,1,1,2,2,2,3,3,3,4]), 24, 'Test 40');
test(totalNumbers([1,3,5,7,9,1,3,5,7,9,1]), 0, 'Test 41');
test(totalNumbers([1,2,2,3,4,4,5,6,7,8]), 202, 'Test 42');
test(totalNumbers([0,2,4,6,8,0,2,4,6,8,0,2]), 97, 'Test 43');
test(totalNumbers([5,5,5,5,5,5,5,5,5,0]), 1, 'Test 44');
test(totalNumbers([0, 0, 0, 0, 1, 1, 1, 1, 2, 2]), 11, 'Test 45');
test(totalNumbers([1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 46');
test(totalNumbers([5,5,5,5,7,7,7,7,9,9]), 0, 'Test 47');
test(totalNumbers([0,2,4,6,8,0,2,4,6,8]), 96, 'Test 48');
test(totalNumbers([0,1,1,2,2,3,3,4,4,5]), 80, 'Test 49');
test(totalNumbers([1, 3, 5, 7, 9, 1, 3, 5, 7, 9]), 0, 'Test 50');
test(totalNumbers([0,0,1,1,2,2,3,3,4,4]), 58, 'Test 51');
test(totalNumbers([1,1,1,1,2,2,2,2,3,3]), 9, 'Test 52');
test(totalNumbers([2,4,6,8,0,1,3,5,7,9,2]), 349, 'Test 53');
test(totalNumbers([2,4,6,8,1,3,5,7,9,0]), 328, 'Test 54');
test(totalNumbers([2,2,2,2,2,2,2,2,2,2,2]), 1, 'Test 55');
test(totalNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9]), 228, 'Test 56');
test(totalNumbers([1, 2, 3, 4, 5, 6]), 60, 'Test 57');
test(totalNumbers([0, 0, 1, 1, 2, 2, 3, 3, 4, 4]), 58, 'Test 58');
test(totalNumbers([1,1,1,2,2,2,3,3,3,4,4,4]), 32, 'Test 59');
test(totalNumbers([8, 8, 8, 8, 8, 8, 8, 8, 8, 8]), 1, 'Test 60');
test(totalNumbers([1,2,3,4,5,6,7,8,9,0,0,0]), 337, 'Test 61');
test(totalNumbers([5, 5, 5, 5, 5, 5, 5, 5, 5, 9]), 0, 'Test 62');
test(totalNumbers([9,9,9,9,9,9,9,9,9,9,9,9]), 0, 'Test 63');
test(totalNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0]), 337, 'Test 64');
test(totalNumbers([2,4,6,8,0,2,4,6,8,0]), 96, 'Test 65');
test(totalNumbers([1,3,5,7,9,1,3,5,7,9,1,3]), 0, 'Test 66');
test(totalNumbers([1,2,3,4,5,6,7,8,9,0,1,2,3,4]), 380, 'Test 67');
test(totalNumbers([0,2,4,6,8,2,4,6,8,0]), 96, 'Test 68');
test(totalNumbers([7,7,7,7,7,7,7,7,7,0]), 1, 'Test 69');
test(totalNumbers([0,0,0,0,0,0,0,0,0,2]), 1, 'Test 70');
test(totalNumbers([1,2,3,4,5,6,7,8,9]), 224, 'Test 71');
test(totalNumbers([2,4,6,8,0,0,0,0,0,0]), 52, 'Test 72');
test(totalNumbers([2,4,6,8,0,1,3,5,7,9]), 328, 'Test 73');
test(totalNumbers([0,0,0,0,0,0,0,0,0,0]), 0, 'Test 74');
test(totalNumbers([1,1,1,1,1,1,1,1,1,3]), 0, 'Test 75');
test(totalNumbers([1,2,3,4,5,6,7,8,9,0,2]), 349, 'Test 76');
test(totalNumbers([7,7,7,7,7,7,7,7,7,2]), 1, 'Test 77');
test(totalNumbers([1,1,1,1,1,1,1,1,1,2]), 1, 'Test 78');
test(totalNumbers([2,2,2,2,2,2,2,2,2,0]), 3, 'Test 79');
test(totalNumbers([0, 0, 0, 0, 0, 1, 1, 1, 2, 2]), 11, 'Test 80');
test(totalNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), 328, 'Test 81');
test(totalNumbers([1,3,5,7,9,1,3,5,7,9]), 0, 'Test 82');
test(totalNumbers([0,2,4,6,8,1,3,5,7,9]), 328, 'Test 83');
test(totalNumbers([1, 1, 1, 1, 1, 1, 1, 1, 1, 2]), 1, 'Test 84');
test(totalNumbers([1, 3, 5, 7, 9, 1, 3, 5, 7, 9, 9]), 0, 'Test 85');
test(totalNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]), 228, 'Test 86');
test(totalNumbers([2, 2, 4, 4, 6, 6, 8, 8, 0, 0]), 96, 'Test 87');
test(totalNumbers([0, 0, 0, 1, 1, 1, 2, 2, 2]), 12, 'Test 88');
test(totalNumbers([7,7,7,8,8,8,9,9,9,0]), 21, 'Test 89');
test(totalNumbers([1,3,5,7,9,0,2,4,6,8]), 328, 'Test 90');
test(totalNumbers([1,2,3,4,5,6,7,8,9,0,1]), 333, 'Test 91');
test(totalNumbers([0, 2, 4, 6, 8, 0, 2, 4, 6, 8]), 96, 'Test 92');
test(totalNumbers([2, 4, 6, 8, 0, 2, 4, 6, 8, 0]), 96, 'Test 93');
test(totalNumbers([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 48, 'Test 94');
test(totalNumbers([9,0,1,2,3,4,5,6,7,8]), 328, 'Test 95');
test(totalNumbers([2, 4, 6, 8, 0, 0, 0, 1, 3, 5]), 193, 'Test 96');
test(totalNumbers([2,4,6,8,0,2,4,6,8,0,2,4]), 98, 'Test 97');
test(totalNumbers([1,0,1,0,1,0,1,0,1,0]), 2, 'Test 98');
test(totalNumbers([1,2,2,3,3,3,4,5,6,6]), 87, 'Test 99');
test(totalNumbers([1, 1, 1, 2, 2, 2, 3, 3, 3, 4]), 24, 'Test 100');
test(totalNumbers([2,0,0,0,0,0,0,0,0,0]), 1, 'Test 101');
test(totalNumbers([1,1,1,1,1,1,1,1,1,1,2]), 1, 'Test 102');
test(totalNumbers([1, 3, 5, 7, 9, 2, 4, 6, 8, 0]), 328, 'Test 103');
test(totalNumbers([2,2,4,4,6,6,8,8,0,0]), 96, 'Test 104');
test(totalNumbers([1,2,2,3,3,4,4,5,5,6]), 90, 'Test 105');
test(totalNumbers([9,9,8,8,7,7,6,6,5,5]), 48, 'Test 106');
test(totalNumbers([1, 1, 1, 1, 2, 2, 2, 2, 3, 3]), 9, 'Test 107');
test(totalNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0]), 337, 'Test 108');
test(totalNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), 337, 'Test 109');
test(totalNumbers([7, 7, 8, 8, 9, 9, 0, 0]), 23, 'Test 110');
test(totalNumbers([0,1,2,3,4,4,5,6,7,8]), 271, 'Test 111');
test(totalNumbers([5,5,5,5,5,5,5,5,5,5]), 0, 'Test 112');
test(totalNumbers([1,1,1,1,1,1,1,1,2,2]), 3, 'Test 113');
test(totalNumbers([9,9,9,8,8,8,7,7,7,6,6,6]), 32, 'Test 114');
test(totalNumbers([0,0,0,0,0,0,0,0,1,3]), 4, 'Test 115');
test(totalNumbers([1,1,1,1,1,2,2,2,2,2]), 4, 'Test 116');
test(totalNumbers([1,2,3,4,5,6,7,8,9,1]), 228, 'Test 117');
test(totalNumbers([2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 1, 'Test 118');
test(totalNumbers([0,0,0,0,0,0,0,0,0,1]), 1, 'Test 119');
test(totalNumbers([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), 1, 'Test 120');
test(totalNumbers([1,2,2,3,3,4,4,5,5,6,6]), 102, 'Test 121');
test(totalNumbers([1,2,3,4,5,6,7,8,9,1,3]), 232, 'Test 122');
test(totalNumbers([2, 4, 6, 8, 2, 4, 6, 8, 0, 0]), 96, 'Test 123');
test(totalNumbers([1,2,3,4,5,6,7,8,9,0,0]), 337, 'Test 124');
test(totalNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 328, 'Test 125');
test(totalNumbers([0,1,1,1,2,2,2,3,3,3]), 21, 'Test 126');
test(totalNumbers([7,8,9,0,2,4,6,8,0,2]), 166, 'Test 127');
test(totalNumbers([0, 0, 2, 2, 4, 4, 6, 6, 8, 8]), 96, 'Test 128');

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
