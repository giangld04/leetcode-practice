// Test: 769. Max Chunks To Make Sorted
// 127 test cases from LeetCodeDataset
// Run: node test.js

const { maxChunksToSorted } = require("./solution");

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

console.log("\n769. Max Chunks To Make Sorted\n");

test(maxChunksToSorted([9,8,7,6,5,4,3,2,1,0]), 1, 'Test 1');
test(maxChunksToSorted([1,2,0,3,4]), 3, 'Test 2');
test(maxChunksToSorted([5,4,3,2,1,0]), 1, 'Test 3');
test(maxChunksToSorted([3,1,0,2,4]), 2, 'Test 4');
test(maxChunksToSorted([2,0,1,3,4]), 3, 'Test 5');
test(maxChunksToSorted([2,1,0,3,4]), 3, 'Test 6');
test(maxChunksToSorted([4,3,2,1,0]), 1, 'Test 7');
test(maxChunksToSorted([3,2,1,0,4]), 2, 'Test 8');
test(maxChunksToSorted([1,2,3,0,4]), 2, 'Test 9');
test(maxChunksToSorted([2,1,0,5,4,3]), 2, 'Test 10');
test(maxChunksToSorted([3,2,0,1,4]), 2, 'Test 11');
test(maxChunksToSorted([1,2,3,4,0]), 1, 'Test 12');
test(maxChunksToSorted([3,2,1,6,5,4,0]), 1, 'Test 13');
test(maxChunksToSorted([0,1,3,2,4]), 4, 'Test 14');
test(maxChunksToSorted([1,0,2,3,4]), 4, 'Test 15');
test(maxChunksToSorted([3,0,1,4,2]), 1, 'Test 16');
test(maxChunksToSorted([4,0,1,2,3]), 1, 'Test 17');
test(maxChunksToSorted([1,2,4,3,0]), 1, 'Test 18');
test(maxChunksToSorted([0,1,2,3,4,5]), 6, 'Test 19');
test(maxChunksToSorted([0,1,2,3,4]), 5, 'Test 20');
test(maxChunksToSorted([0,2,1,3,4]), 4, 'Test 21');
test(maxChunksToSorted([0,1,2,4,3]), 4, 'Test 22');
test(maxChunksToSorted([2,1,0,4,3]), 2, 'Test 23');
test(maxChunksToSorted([2,0,1,4,3]), 2, 'Test 24');
test(maxChunksToSorted([5,6,7,8,9,0,1,2,3,4]), 1, 'Test 25');
test(maxChunksToSorted([0,1,3,2,4,5]), 5, 'Test 26');
test(maxChunksToSorted([4,3,2,1,0,9,8,7,6,5]), 2, 'Test 27');
test(maxChunksToSorted([2,1,3,0,4,5]), 3, 'Test 28');
test(maxChunksToSorted([3,2,1,4,0,5]), 2, 'Test 29');
test(maxChunksToSorted([0,1,2,4,5,3]), 4, 'Test 30');
test(maxChunksToSorted([6,5,4,3,2,1,0]), 1, 'Test 31');
test(maxChunksToSorted([5,0,1,2,4,3,9,8,7,6]), 2, 'Test 32');
test(maxChunksToSorted([0,1,5,2,3,4]), 3, 'Test 33');
test(maxChunksToSorted([0,1,5,3,2,4]), 3, 'Test 34');
test(maxChunksToSorted([5,1,2,3,0,4,7,6,9,8]), 3, 'Test 35');
test(maxChunksToSorted([2,1,4,3,0,5]), 2, 'Test 36');
test(maxChunksToSorted([5,0,1,2,4,3]), 1, 'Test 37');
test(maxChunksToSorted([8,0,1,2,3,4,5,6,7,9]), 2, 'Test 38');
test(maxChunksToSorted([0,1,2,3,8,7,6,5,4,9]), 6, 'Test 39');
test(maxChunksToSorted([0,2,1,3,5,4]), 4, 'Test 40');
test(maxChunksToSorted([0,1,2,3,4,5,6,7,9,8]), 9, 'Test 41');
test(maxChunksToSorted([2,0,1,4,3,6,5,8,7,9]), 5, 'Test 42');
test(maxChunksToSorted([1,3,2,0,5,4,6,8,7,9]), 5, 'Test 43');
test(maxChunksToSorted([1,2,0,4,5,3,7,8,9,6]), 3, 'Test 44');
test(maxChunksToSorted([1,2,0,3,5,4,7,6,9,8]), 5, 'Test 45');
test(maxChunksToSorted([0,4,5,2,3,1]), 2, 'Test 46');
test(maxChunksToSorted([3,1,2,0,5,4,7,6,9,8]), 4, 'Test 47');
test(maxChunksToSorted([1,2,3,4,5,6,7,8,9,0]), 1, 'Test 48');
test(maxChunksToSorted([1,0,3,2,4,5]), 4, 'Test 49');
test(maxChunksToSorted([8,6,7,5,3,0,9,2,1,4]), 1, 'Test 50');
test(maxChunksToSorted([0,1,4,3,2,5]), 4, 'Test 51');
test(maxChunksToSorted([1,3,2,0,4,6,5,8,7,9]), 5, 'Test 52');
test(maxChunksToSorted([0,4,1,3,2,7,6,9,8,5]), 3, 'Test 53');
test(maxChunksToSorted([2,3,0,1,4,5]), 3, 'Test 54');
test(maxChunksToSorted([7,6,5,4,3,2,9,8,1,0]), 1, 'Test 55');
test(maxChunksToSorted([1,2,3,0,4,5,6,7,8,9]), 7, 'Test 56');
test(maxChunksToSorted([3,2,1,0,4,5,8,7,10,9]), 3, 'Test 57');
test(maxChunksToSorted([1,2,0,3,4,6,5,7,9,8]), 6, 'Test 58');
test(maxChunksToSorted([5,1,4,3,2,0]), 1, 'Test 59');
test(maxChunksToSorted([3,2,5,4,1,0]), 1, 'Test 60');
test(maxChunksToSorted([1,0,2,5,4,3]), 3, 'Test 61');
test(maxChunksToSorted([0,2,1,3,5,4,6,8,7,9]), 7, 'Test 62');
test(maxChunksToSorted([5,1,2,3,4,0,6,7,8,9]), 5, 'Test 63');
test(maxChunksToSorted([0,3,2,1,5,4]), 3, 'Test 64');
test(maxChunksToSorted([5,4,0,1,2,3,9,8,6,7]), 2, 'Test 65');
test(maxChunksToSorted([5,4,3,2,1,0,9,8,7,6]), 2, 'Test 66');
test(maxChunksToSorted([4,2,0,1,3,8,6,7,5,9]), 3, 'Test 67');
test(maxChunksToSorted([0,1,3,2,5,4,6]), 5, 'Test 68');
test(maxChunksToSorted([0,1,4,3,5,2]), 3, 'Test 69');
test(maxChunksToSorted([0,3,2,1,4,5]), 4, 'Test 70');
test(maxChunksToSorted([3,0,1,2,5,4,6]), 3, 'Test 71');
test(maxChunksToSorted([1,2,0,4,5,3,8,7,9,6]), 3, 'Test 72');
test(maxChunksToSorted([6,0,2,1,4,3,8,5,9,7]), 1, 'Test 73');
test(maxChunksToSorted([2,0,1,3,5,4,6]), 4, 'Test 74');
test(maxChunksToSorted([0,2,1,4,3,6,5,8,7,9]), 6, 'Test 75');
test(maxChunksToSorted([2,0,1,5,4,3,7,6,9,8]), 4, 'Test 76');
test(maxChunksToSorted([1,0,2,3,5,4,6]), 5, 'Test 77');
test(maxChunksToSorted([6,0,1,2,3,5,4]), 1, 'Test 78');
test(maxChunksToSorted([1,0,4,3,2,5]), 3, 'Test 79');
test(maxChunksToSorted([10,9,8,7,6,5,4,3,2,1,0]), 1, 'Test 80');
test(maxChunksToSorted([4,3,2,1,0,5,6,7,8,9]), 6, 'Test 81');
test(maxChunksToSorted([0,3,1,2,4,5,6,7,8,9]), 8, 'Test 82');
test(maxChunksToSorted([3,1,0,2,5,4]), 2, 'Test 83');
test(maxChunksToSorted([1,3,0,2,5,4,7,6,9,8]), 4, 'Test 84');
test(maxChunksToSorted([0,3,2,1,4]), 3, 'Test 85');
test(maxChunksToSorted([0,2,4,6,8,10,1,3,5,7,9]), 2, 'Test 86');
test(maxChunksToSorted([3,0,1,2,7,4,6,5,9,8]), 3, 'Test 87');
test(maxChunksToSorted([2,0,1,4,3,5]), 3, 'Test 88');
test(maxChunksToSorted([0,1,4,5,2,3]), 3, 'Test 89');
test(maxChunksToSorted([0,1,3,5,2,4]), 3, 'Test 90');
test(maxChunksToSorted([5,4,0,1,2,3,9,8,7,6]), 2, 'Test 91');
test(maxChunksToSorted([0,2,4,1,3,5,7,6,8,9]), 6, 'Test 92');
test(maxChunksToSorted([0,3,2,1,4,7,6,5,8,9]), 6, 'Test 93');
test(maxChunksToSorted([1,0,4,3,2,5,6,7,8,9]), 7, 'Test 94');
test(maxChunksToSorted([9,7,8,6,5,4,3,2,1,0]), 1, 'Test 95');
test(maxChunksToSorted([2,3,0,1,6,7,4,5,9,8]), 3, 'Test 96');
test(maxChunksToSorted([0,1,2,3,4,5,6,7,8,9]), 10, 'Test 97');
test(maxChunksToSorted([1,4,0,3,2,5]), 2, 'Test 98');
test(maxChunksToSorted([0,3,1,2,6,5,4,7,9,8]), 5, 'Test 99');
test(maxChunksToSorted([3,0,1,2,5,4,7,6,9,8]), 4, 'Test 100');
test(maxChunksToSorted([3,2,1,0,7,6,5,4,9,8]), 3, 'Test 101');
test(maxChunksToSorted([8,9,6,7,4,5,2,3,0,1]), 1, 'Test 102');
test(maxChunksToSorted([1,2,0,4,5,3]), 2, 'Test 103');
test(maxChunksToSorted([1,2,0,3,5,4]), 3, 'Test 104');
test(maxChunksToSorted([3,0,2,1,5,4]), 2, 'Test 105');
test(maxChunksToSorted([6,5,4,3,2,1,0,9,8,7]), 2, 'Test 106');
test(maxChunksToSorted([5,0,1,2,3,4]), 1, 'Test 107');
test(maxChunksToSorted([4,2,3,1,0,5]), 2, 'Test 108');
test(maxChunksToSorted([2,0,1,4,3,6,5,9,7,8]), 4, 'Test 109');
test(maxChunksToSorted([0,5,1,3,2,4]), 2, 'Test 110');
test(maxChunksToSorted([0,1,3,5,4,2]), 3, 'Test 111');
test(maxChunksToSorted([2,1,0,3,4,5]), 4, 'Test 112');
test(maxChunksToSorted([0,1,3,2,4,5,7,6,8,9]), 8, 'Test 113');
test(maxChunksToSorted([6,5,0,1,3,4,2]), 1, 'Test 114');
test(maxChunksToSorted([1,2,0,3,4,5]), 4, 'Test 115');
test(maxChunksToSorted([5,3,2,4,0,1]), 1, 'Test 116');
test(maxChunksToSorted([0,1,3,2,5,4]), 4, 'Test 117');
test(maxChunksToSorted([1,0,3,2,5,4,7,6,9,8]), 5, 'Test 118');
test(maxChunksToSorted([0,1,2,5,3,4]), 4, 'Test 119');
test(maxChunksToSorted([1,3,2,0,5,4]), 2, 'Test 120');
test(maxChunksToSorted([1,2,0,4,5,3,7,8,6,9]), 4, 'Test 121');
test(maxChunksToSorted([1,2,0,4,3,6,5]), 3, 'Test 122');
test(maxChunksToSorted([0,5,1,2,3,4]), 2, 'Test 123');
test(maxChunksToSorted([0,1,2,3,5,4]), 5, 'Test 124');
test(maxChunksToSorted([0,1,4,2,3,5]), 4, 'Test 125');
test(maxChunksToSorted([3,1,2,0,4,5,8,6,9,7]), 4, 'Test 126');
test(maxChunksToSorted([3,2,1,0,5,4]), 2, 'Test 127');

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
