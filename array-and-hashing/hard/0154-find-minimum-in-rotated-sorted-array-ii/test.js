// Test: 154. Find Minimum In Rotated Sorted Array Ii
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { findMin } = require("./solution");

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

console.log("\n154. Find Minimum In Rotated Sorted Array Ii\n");

test(findMin([0,0,1,1,2,2,3,3,4,4]), 0, 'Test 1');
test(findMin([1,3,5]), 1, 'Test 2');
test(findMin([2,2,2,0,1]), 0, 'Test 3');
test(findMin([5,1,2,3,4]), 1, 'Test 4');
test(findMin([3,4,5,1,2]), 1, 'Test 5');
test(findMin([15,17,11,13]), 11, 'Test 6');
test(findMin([1]), 1, 'Test 7');
test(findMin([1,2,3,4,5,6,7,8,9,0]), 0, 'Test 8');
test(findMin([0,1,4,4,5,6,7]), 0, 'Test 9');
test(findMin([3,3,3,3,3,1,3]), 1, 'Test 10');
test(findMin([4,4,5,6,7,0,1,2,3]), 0, 'Test 11');
test(findMin([11,13,15,17]), 11, 'Test 12');
test(findMin([1,1,1,1,1,1,1]), 1, 'Test 13');
test(findMin([2,2,2,2,2,2,2,2,2,2,0,1,2,2,2]), 0, 'Test 14');
test(findMin([5,6,7,8,9,1,2,3,4]), 1, 'Test 15');
test(findMin([4,4,4,4,0,1,2,3,4]), 0, 'Test 16');
test(findMin([1,1,2,0,0,0,0,0,0,0,0]), 0, 'Test 17');
test(findMin([10,1,10,10,10]), 1, 'Test 18');
test(findMin([4,5,6,7,0,1,4]), 0, 'Test 19');
test(findMin([2,2,2,2,2,2,2,2,0,1]), 0, 'Test 20');
test(findMin([10,10,10,10,10,10,10]), 10, 'Test 21');
test(findMin([2,2,2,2,2,2,2]), 2, 'Test 22');
test(findMin([100,200,300,400,500,1,2,3,4,5]), 1, 'Test 23');
test(findMin([104,105,106,107,108,109,0,100,101,102,103]), 0, 'Test 24');
test(findMin([0,0,1,1,1,2,2,2,3,3,3]), 0, 'Test 25');
test(findMin([7,8,9,10,1,2,3,4,5,6]), 1, 'Test 26');
test(findMin([3,4,5,1,2,2,2,2,2]), 1, 'Test 27');
test(findMin([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,5,5,5,5,5,5,5,5]), 0, 'Test 28');
test(findMin([10,0,1,2,3,4,5,6,7,8,9]), 0, 'Test 29');
test(findMin([6,7,1,2,3,4,5]), 1, 'Test 30');
test(findMin([6,7,0,1,2,4,5]), 0, 'Test 31');
test(findMin([108,109,0,100,101,102,103,104,105,106,107]), 0, 'Test 32');
test(findMin([106,107,108,109,0,100,101,102,103,104,105]), 0, 'Test 33');
test(findMin([2,5,6,0,0,1,2]), 0, 'Test 34');
test(findMin([4,5,6,7,0,1,1,1,1,1,2,2,2,2,2]), 0, 'Test 35');
test(findMin([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,0,1]), 0, 'Test 36');
test(findMin([11,13,15,17,19,2,5,7]), 2, 'Test 37');
test(findMin([8,9,10,0,1,2,3,4,5,6,7]), 0, 'Test 38');
test(findMin([1,2,3,4,5,0]), 0, 'Test 39');
test(findMin([3,3,3,3,3,0,1,2,2,3]), 0, 'Test 40');
test(findMin([1,2,3,4,5,1,1,1]), 1, 'Test 41');
test(findMin([9,9,9,9,9,9,9,9,9,9,0,1,2,3,4,5,6,7,8,9]), 0, 'Test 42');
test(findMin([11,13,15,17,19,1,3,5,7]), 1, 'Test 43');
test(findMin([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]), 1, 'Test 44');
test(findMin([2,3,4,5,1]), 1, 'Test 45');
test(findMin([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,0]), 0, 'Test 46');
test(findMin([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]), 0, 'Test 47');
test(findMin([5,6,7,0,1,2,3]), 0, 'Test 48');
test(findMin([1,1,1,1,1,0,1]), 0, 'Test 49');
test(findMin([103,104,105,106,107,108,109,0,100,101,102]), 0, 'Test 50');
test(findMin([1,0,1,1,1,1]), 0, 'Test 51');
test(findMin([6,7,8,9,10,0,1,2,3,4,5]), 0, 'Test 52');
test(findMin([2,2,2,2,2,2,2,2,1]), 1, 'Test 53');
test(findMin([3,3,3,3,1,3,3,3,3,3,3]), 1, 'Test 54');
test(findMin([9,10,0,1,2,3,4,5,6,7,8]), 0, 'Test 55');
test(findMin([7,8,9,10,0,1,2,3,4,5,6]), 0, 'Test 56');
test(findMin([1,0,1,1,1,1,1,1,1,1,1]), 0, 'Test 57');
test(findMin([4,4,4,4,4,0,1,2,3]), 0, 'Test 58');
test(findMin([1,2,2,2,0,1,1,1,1,1]), 0, 'Test 59');
test(findMin([1,3,5,7,9,11,13,15,17,19,0]), 0, 'Test 60');
test(findMin([1,1,2,2,3,3,4,4,5,5,0,0,0,0,0]), 0, 'Test 61');
test(findMin([109,0,100,101,102,103,104,105,106,107,108]), 0, 'Test 62');
test(findMin([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0,1,2,3,4]), 0, 'Test 63');
test(findMin([5,5,5,5,5,1,2,3,4]), 1, 'Test 64');
test(findMin([4,5,6,7,0,1,2]), 0, 'Test 65');
test(findMin([100,101,102,0,1,2,3,4,5,6,7,8,9]), 0, 'Test 66');
test(findMin([15,17,19,0,1,3,5,7,9,11,13]), 0, 'Test 67');
test(findMin([2,2,2,2,1,2,2,2]), 1, 'Test 68');
test(findMin([2,0,1,1,1,2,2]), 0, 'Test 69');
test(findMin([2,3,4,5,6,7,8,9,1,2]), 1, 'Test 70');
test(findMin([107,108,109,0,100,101,102,103,104,105,106]), 0, 'Test 71');
test(findMin([2,2,2,0,1,2]), 0, 'Test 72');
test(findMin([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0]), 0, 'Test 73');
test(findMin([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]), 0, 'Test 74');
test(findMin([3,3,3,3,3,3,3,3,3,3,3,3,3,1,2]), 1, 'Test 75');
test(findMin([1,2,3,4,5,6,7,8,9,10,0]), 0, 'Test 76');
test(findMin([105,106,107,108,109,0,100,101,102,103,104]), 0, 'Test 77');
test(findMin([2,2,2,0,1,1,2]), 0, 'Test 78');
test(findMin([1,1,1,1,1,1,1,1,0,1]), 0, 'Test 79');
test(findMin([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 0, 'Test 80');
test(findMin([1,2,3,4,5,6,7,0,0,0]), 0, 'Test 81');
test(findMin([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1]), 0, 'Test 82');
test(findMin([5,6,7,8,9,10,0,1,2,3,4]), 0, 'Test 83');
test(findMin([4,5,6,7,8,9,10,0,1,2,3]), 0, 'Test 84');
test(findMin([101,102,103,104,105,106,107,108,109,0,100]), 0, 'Test 85');
test(findMin([3,3,3,3,3,3,1,3,3,3]), 1, 'Test 86');
test(findMin([5,5,5,5,5,5,5,5,0,5]), 0, 'Test 87');
test(findMin([0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 0, 'Test 88');
test(findMin([4,4,4,4,0,1,4]), 0, 'Test 89');
test(findMin([1,2,0,1,1,1]), 0, 'Test 90');
test(findMin([1,1,1,1,0,0,1]), 0, 'Test 91');
test(findMin([1,2,3,4,5,6,7,0,0,0,0,0,0]), 0, 'Test 92');
test(findMin([2,3,4,5,6,7,8,9,10,0,1]), 0, 'Test 93');
test(findMin([6,7,1,2,2,2,2,2,2]), 1, 'Test 94');
test(findMin([0,1,2,3,4,5,6,7,8,9,10]), 0, 'Test 95');
test(findMin([11,13,15,17,19,0,1,3,5,7,9]), 0, 'Test 96');
test(findMin([102,103,104,105,106,107,108,109,0,100,101]), 0, 'Test 97');
test(findMin([10,20,30,40,50,5,10]), 5, 'Test 98');
test(findMin([9,9,9,9,9,9,9,0,1,2,3,4,5,6,7,8]), 0, 'Test 99');
test(findMin([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1]), 0, 'Test 100');
test(findMin([1,2,3,4,5,6,7,0]), 0, 'Test 101');
test(findMin([2,2,0,2,2,2,2,2,2,2]), 0, 'Test 102');
test(findMin([3,4,5,6,7,8,9,10,0,1,2]), 0, 'Test 103');
test(findMin([1,2,3,4,5,6,6,6,6,0,1,2]), 0, 'Test 104');
test(findMin([0,1,1,1,1,1,1]), 0, 'Test 105');
test(findMin([1,1,1,1,1,0,1,1,1,1]), 0, 'Test 106');
test(findMin([1,2,3,4,5]), 1, 'Test 107');
test(findMin([5,5,5,5,5,5,5,1,2,3,4,5]), 1, 'Test 108');
test(findMin([2,2,2,2,2,1,2,2,2,2,2]), 1, 'Test 109');
test(findMin([2,2,2,0,1,2,2,2,2,2]), 0, 'Test 110');
test(findMin([1,1,0,1,1,1,1]), 0, 'Test 111');
test(findMin([1,2,3,4,1,1,1,1,1,1,1]), 1, 'Test 112');
test(findMin([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1]), 0, 'Test 113');
test(findMin([11,13,15,17,19,21,2,3,5,7,9]), 2, 'Test 114');
test(findMin([15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15]), 0, 'Test 115');
test(findMin([0,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 116');
test(findMin([4,5,1,2,3]), 1, 'Test 117');
test(findMin([0,100,101,102,103,104,105,106,107,108,109]), 0, 'Test 118');
test(findMin([3,3,3,3,3,1,3,3]), 1, 'Test 119');
test(findMin([15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 0, 'Test 120');

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
