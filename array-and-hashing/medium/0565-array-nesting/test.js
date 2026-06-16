// Test: 565. Array Nesting
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { arrayNesting } = require("./solution");

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

console.log("\n565. Array Nesting\n");

test(arrayNesting([1,0,3,4,2]), 3, 'Test 1');
test(arrayNesting([5,1,4,2,0,6,3]), 6, 'Test 2');
test(arrayNesting([3,2,1,0]), 2, 'Test 3');
test(arrayNesting([1,2,0,3]), 3, 'Test 4');
test(arrayNesting([0,2,1]), 2, 'Test 5');
test(arrayNesting([0,2,1,3]), 2, 'Test 6');
test(arrayNesting([10,5,0,2,8,6,7,3,4,9]), Error: list assignment index out of range, 'Test 7');
test(arrayNesting([0,2,1,5,3,4]), 3, 'Test 8');
test(arrayNesting([10,5,3,4,8,6,1,7,9,2,0]), 5, 'Test 9');
test(arrayNesting([0,1,2]), 1, 'Test 10');
test(arrayNesting([3,0,1,2]), 4, 'Test 11');
test(arrayNesting([5,0,1,4,3,2]), 4, 'Test 12');
test(arrayNesting([3,0,2,1]), 3, 'Test 13');
test(arrayNesting([5,4,0,3,1,6,2]), 4, 'Test 14');
test(arrayNesting([1,2,0]), 3, 'Test 15');
test(arrayNesting([1,0]), 2, 'Test 16');
test(arrayNesting([0,2,1,4,3,5,7,6]), 2, 'Test 17');
test(arrayNesting([2,3,1,0,5,6,4]), 4, 'Test 18');
test(arrayNesting([1,3,0,2]), 4, 'Test 19');
test(arrayNesting([9,5,4,0,8,1,6,3,7,2]), 7, 'Test 20');
test(arrayNesting([0,2,1,4,3,5,6,7,8,9]), 2, 'Test 21');
test(arrayNesting([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), 2, 'Test 22');
test(arrayNesting([10,9,8,7,6,5,4,3,2,1,0]), 2, 'Test 23');
test(arrayNesting([7,6,5,4,3,2,1,0]), 2, 'Test 24');
test(arrayNesting([3,2,1,0,7,6,5,4]), 2, 'Test 25');
test(arrayNesting([10,6,3,8,2,5,1,4,9,7,0]), 6, 'Test 26');
test(arrayNesting([1,3,5,7,9,0,2,4,6,8]), 10, 'Test 27');
test(arrayNesting([10,5,6,3,2,7,8,9,4,1]), Error: list assignment index out of range, 'Test 28');
test(arrayNesting([2,3,4,5,0,1]), 3, 'Test 29');
test(arrayNesting([2,0,1,4,3,5,7,6,8,9,11,10,13,12,15,14]), 3, 'Test 30');
test(arrayNesting([15,13,12,1,9,14,10,0,8,5,11,4,7,3,2,6]), 12, 'Test 31');
test(arrayNesting([5,6,4,3,0,2,1]), 4, 'Test 32');
test(arrayNesting([1,0,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 2, 'Test 33');
test(arrayNesting([4,0,2,5,3,6,1,7]), 6, 'Test 34');
test(arrayNesting([0,2,1,4,3,6,5,8,7,10,9]), 2, 'Test 35');
test(arrayNesting([1,2,3,4,0,6,5]), 5, 'Test 36');
test(arrayNesting([1,0,3,5,4,2]), 3, 'Test 37');
test(arrayNesting([15,13,11,10,9,8,7,6,5,4,3,2,1,0,12,14]), 6, 'Test 38');
test(arrayNesting([8,2,3,1,5,6,7,0,4]), 6, 'Test 39');
test(arrayNesting([9,7,5,3,1,8,6,4,2,0]), 3, 'Test 40');
test(arrayNesting([4,0,2,6,7,3,1,5]), 7, 'Test 41');
test(arrayNesting([1,6,3,7,8,0,5,4,2,9]), 5, 'Test 42');
test(arrayNesting([4,5,6,7,8,9,3,0,1,2]), 10, 'Test 43');
test(arrayNesting([1,0,3,2,5,4,7,6,9,8]), 2, 'Test 44');
test(arrayNesting([1,4,3,0,2]), 5, 'Test 45');
test(arrayNesting([6,2,4,5,3,0,1]), 7, 'Test 46');
test(arrayNesting([0,2,1,3,5,4,7,6,8,10,9]), 2, 'Test 47');
test(arrayNesting([0,3,1,4,5,2,6,7,8,9]), 5, 'Test 48');
test(arrayNesting([4,0,3,5,7,2,6,1,8,9,10,11,12,13,14]), 4, 'Test 49');
test(arrayNesting([2,0,1,3,5,4,6,8,7,10,9,12,11,14,13]), 3, 'Test 50');
test(arrayNesting([3,6,0,1,2,5,4,8,7]), 6, 'Test 51');
test(arrayNesting([2,3,1,0]), 4, 'Test 52');
test(arrayNesting([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 1, 'Test 53');
test(arrayNesting([14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), 2, 'Test 54');
test(arrayNesting([2,0,1,4,5,3,7,6,9,8]), 3, 'Test 55');
test(arrayNesting([12,0,9,6,1,10,11,13,8,7,5,2,4,3]), 7, 'Test 56');
test(arrayNesting([7,5,4,1,0,6,2,3]), 8, 'Test 57');
test(arrayNesting([0,3,1,6,2,5,4,7]), 5, 'Test 58');
test(arrayNesting([0,4,3,1,2]), 4, 'Test 59');
test(arrayNesting([7,0,1,2,3,4,5,6,13,8,9,10,11,12,14]), 8, 'Test 60');
test(arrayNesting([1,2,3,4,5,6,7,8,9,0]), 10, 'Test 61');
test(arrayNesting([6,2,1,5,4,0,3,7,11,8,10,9]), 4, 'Test 62');
test(arrayNesting([8,2,0,7,3,1,6,5,4]), 8, 'Test 63');
test(arrayNesting([7,1,5,3,6,4,0,2]), 6, 'Test 64');
test(arrayNesting([8,7,6,5,4,3,2,1,0,9]), 2, 'Test 65');
test(arrayNesting([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 1, 'Test 66');
test(arrayNesting([8,2,4,6,0,3,5,7,1]), 5, 'Test 67');
test(arrayNesting([7,0,1,3,6,2,8,5,4,9]), 5, 'Test 68');
test(arrayNesting([1,5,0,4,2,3]), 6, 'Test 69');
test(arrayNesting([7,5,6,4,1,0,2,3]), 6, 'Test 70');
test(arrayNesting([8,2,3,1,4,5,7,6,0]), 3, 'Test 71');
test(arrayNesting([9,8,7,6,5,4,3,2,1,0]), 2, 'Test 72');
test(arrayNesting([2,0,3,5,1,8,7,6,4]), 7, 'Test 73');
test(arrayNesting([1,0,3,5,2,4,7,6,8]), 4, 'Test 74');
test(arrayNesting([12,13,11,10,9,8,7,6,5,4,3,2,1,0]), 4, 'Test 75');
test(arrayNesting([4,0,2,6,1,5,3,7]), 3, 'Test 76');
test(arrayNesting([2,0,1,4,5,3,6,7]), 3, 'Test 77');
test(arrayNesting([4,5,6,7,0,1,2,3]), 2, 'Test 78');
test(arrayNesting([9,3,2,1,4,5,0,6,8,7]), 4, 'Test 79');
test(arrayNesting([6,2,8,5,1,9,4,3,0,7]), 6, 'Test 80');
test(arrayNesting([6,2,4,3,5,0,1]), 6, 'Test 81');
test(arrayNesting([6,2,3,4,5,1,0]), 5, 'Test 82');
test(arrayNesting([3,1,2,0,6,5,4,9,8,7]), 2, 'Test 83');
test(arrayNesting([3,5,4,2,0,1]), 4, 'Test 84');
test(arrayNesting([1,3,5,7,9,2,4,6,8,0]), 7, 'Test 85');
test(arrayNesting([4,0,5,1,3,2,6]), 4, 'Test 86');
test(arrayNesting([0,2,1,4,3,6,5,8,7]), 2, 'Test 87');
test(arrayNesting([2,0,1,4,3,6,8,5,7,9,11,10]), 4, 'Test 88');
test(arrayNesting([1,0,3,2,5,4,7,6,9,8,11,10]), 2, 'Test 89');
test(arrayNesting([8,2,4,1,3,6,7,0,5]), 5, 'Test 90');
test(arrayNesting([10,6,7,3,8,5,2,4,9,1]), Error: list assignment index out of range, 'Test 91');
test(arrayNesting([0,2,1,4,5,3]), 3, 'Test 92');
test(arrayNesting([1,0,3,2,5,4,7,6]), 2, 'Test 93');
test(arrayNesting([4,3,2,1,0]), 2, 'Test 94');
test(arrayNesting([0,1,3,2,6,5,4,7,9,8,11,10,13,12,15,14]), 2, 'Test 95');
test(arrayNesting([0,3,2,1,6,5,4,9,8,7]), 2, 'Test 96');
test(arrayNesting([2,0,1,4,3,5]), 3, 'Test 97');
test(arrayNesting([6,3,5,1,4,0,2]), 4, 'Test 98');
test(arrayNesting([19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), 2, 'Test 99');
test(arrayNesting([9,7,8,3,10,2,6,11,4,0,5,1]), 5, 'Test 100');

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
