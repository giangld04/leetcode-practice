// Test: 34. Find First And Last Position Of Element In Sorted Array
// 137 test cases from LeetCodeDataset
// Run: node test.js

const { searchRange } = require("./solution");

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

console.log("\n34. Find First And Last Position Of Element In Sorted Array\n");

test(searchRange([1,1,1,1,1,1,1], 1), [0, 6], 'Test 1');
test(searchRange([2,2,2,2,3,3,4,4,4,4], 2), [0, 3], 'Test 2');
test(searchRange([1,2,3,4,5], 5), [4, 4], 'Test 3');
test(searchRange([5,7,7,8,8,10], 8), [3, 4], 'Test 4');
test(searchRange([1,2,3,4,5,6,7], 1), [0, 0], 'Test 5');
test(searchRange([-10,-5,-3,0,3,5,9,10], 3), [4, 4], 'Test 6');
test(searchRange([1,3,5,7,9], 0), [-1, -1], 'Test 7');
test(searchRange([1,2,2,2,3,4,5], 2), [1, 3], 'Test 8');
test(searchRange([1], 1), [0, 0], 'Test 9');
test(searchRange([1,2,2,3,4,4,4,5,6], 4), [4, 6], 'Test 10');
test(searchRange([1,2,3,4,5,6,7], 7), [6, 6], 'Test 11');
test(searchRange([5,7,7,8,8,10], 6), [-1, -1], 'Test 12');
test(searchRange([1,2,3,4,5,6,7,8,9,10], 1), [0, 0], 'Test 13');
test(searchRange([1,2,3,4,5,6,7], 5), [4, 4], 'Test 14');
test(searchRange([1,2,3,4,5,6,7,8,9,10], 5), [4, 4], 'Test 15');
test(searchRange([1,1,1,1,1], 1), [0, 4], 'Test 16');
test(searchRange([1,2,2,2,2,3,4,5], 2), [1, 4], 'Test 17');
test(searchRange([1,3,5,7,9], 2), [-1, -1], 'Test 18');
test(searchRange([1,1,1,1,1,1,1,1,1,1], 1), [0, 9], 'Test 19');
test(searchRange([], 0), [-1, -1], 'Test 20');
test(searchRange([1], 0), [-1, -1], 'Test 21');
test(searchRange([1,2,3,4,5], 1), [0, 0], 'Test 22');
test(searchRange([1,3,5,7,9], 10), [-1, -1], 'Test 23');
test(searchRange([1], 2), [-1, -1], 'Test 24');
test(searchRange([1,2,3,4,5,6,7,8,9,10], 11), [-1, -1], 'Test 25');
test(searchRange([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 20), [19, 19], 'Test 26');
test(searchRange([1,3,5,7,9,11,13,15,17,19,21], 4), [-1, -1], 'Test 27');
test(searchRange([1,2,3,4,5,6,7,8,9,10], 6), [5, 5], 'Test 28');
test(searchRange([-10,-8,-5,-3,-1,0,1,3,5,7,9,11,13], 15), [-1, -1], 'Test 29');
test(searchRange([1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6], 5), [9, 11], 'Test 30');
test(searchRange([1, 2, 2, 2, 3, 3, 4, 4, 5], 2), [1, 3], 'Test 31');
test(searchRange([-10, -5, -5, -5, 0, 3, 5, 5, 5, 9], 5), [6, 8], 'Test 32');
test(searchRange([1,2,3,4,5,6,7,8,9,10], 0), [-1, -1], 'Test 33');
test(searchRange([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 7), [11, 12], 'Test 34');
test(searchRange([1,2,2,2,3,4,5,5,5,5,6,7,8,9,9,10], 5), [6, 9], 'Test 35');
test(searchRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 0), [-1, -1], 'Test 36');
test(searchRange([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 4), [-1, -1], 'Test 37');
test(searchRange([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10], 4), [15, 19], 'Test 38');
test(searchRange([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0), [0, 9], 'Test 39');
test(searchRange([1,2,2,2,3,3,3,3,4,4,4,5,5], 3), [4, 7], 'Test 40');
test(searchRange([2, 2, 2, 2, 2, 2, 2, 2], 2), [0, 7], 'Test 41');
test(searchRange([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 3), [3, 4], 'Test 42');
test(searchRange([-100,-99,-98,-97,-96,-95,-94,-93,-92,-91,-90], -100), [0, 0], 'Test 43');
test(searchRange([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), [0, 19], 'Test 44');
test(searchRange([1,2,2,3,4,4,4,4,4,4,5,6,7,8,9], 4), [4, 9], 'Test 45');
test(searchRange([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 0), [-1, -1], 'Test 46');
test(searchRange([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 21), [-1, -1], 'Test 47');
test(searchRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 16), [-1, -1], 'Test 48');
test(searchRange([1,2,2,3,3,3,4,5,5,5,5,6,7], 5), [7, 10], 'Test 49');
test(searchRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1), [0, 0], 'Test 50');
test(searchRange([1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6], 2), [2, 4], 'Test 51');
test(searchRange([1,2,3,3,3,3,4,5,5,5,5,6,7,8,9,10], 3), [2, 5], 'Test 52');
test(searchRange([1, 2, 2, 2, 2, 3, 4, 5], 2), [1, 4], 'Test 53');
test(searchRange([1,2,3,3,3,3,4,5,6], 2), [1, 1], 'Test 54');
test(searchRange([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 4), [5, 6], 'Test 55');
test(searchRange([1,2,2,3,3,3,4,4,5,5,5,5,5,6,6,7,7,8,8,8,9,9,10], 10), [22, 22], 'Test 56');
test(searchRange([-10, -5, -5, -5, 0, 3, 5, 5, 5, 9], -6), [-1, -1], 'Test 57');
test(searchRange([1, 3, 3, 3, 3, 5, 7, 9], 3), [1, 4], 'Test 58');
test(searchRange([1,2,2,2,2,3,4,5,5,5,6,7,8,9,10], 5), [7, 9], 'Test 59');
test(searchRange([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 22), [-1, -1], 'Test 60');
test(searchRange([1,2,2,3,4,4,4,5,6,6,7], 4), [4, 6], 'Test 61');
test(searchRange([-10, -5, 0, 5, 10, 15, 20], -1), [-1, -1], 'Test 62');
test(searchRange([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 15), [7, 7], 'Test 63');
test(searchRange([1,2,3,4,5,6,7,8,9,10], 2), [1, 1], 'Test 64');
test(searchRange([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,7,7,8,8,8,8,9,9,10,10], 7), [18, 19], 'Test 65');
test(searchRange([-10, -5, -5, -5, 0, 3, 5, 5, 5, 9], -5), [1, 3], 'Test 66');
test(searchRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), [9, 9], 'Test 67');
test(searchRange([-100,-99,-98,-97,-96,-95,-94,-93,-92,-91,-90], -90), [10, 10], 'Test 68');
test(searchRange([1,1,2,2,2,3,3,3,3,4,4,4,5,5,5,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10], 1), [0, 1], 'Test 69');
test(searchRange([1,2,2,3,3,3,4,4,5,5,5,5,5,6,6,7,7,8,8,8,9,9,10], 0), [-1, -1], 'Test 70');
test(searchRange([-10, -5, 0, 5, 10, 15, 20], 20), [6, 6], 'Test 71');
test(searchRange([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 1), [0, 0], 'Test 72');
test(searchRange([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 13), [6, 6], 'Test 73');
test(searchRange([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2), [-1, -1], 'Test 74');
test(searchRange([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 2), [1, 2], 'Test 75');
test(searchRange([-10,-5,-5,-1,0,1,1,2,2,3,4,5,6,7,8,9,10], -5), [1, 2], 'Test 76');
test(searchRange([1,2,2,2,3,3,4,4,5,5,5,5,6,7,8], 5), [8, 11], 'Test 77');
test(searchRange([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 5), [7, 8], 'Test 78');
test(searchRange([1,2,2,2,3,4,5,5,6,7,8,9,10,10,10,10], 10), [12, 15], 'Test 79');
test(searchRange([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 2), [1, 20], 'Test 80');
test(searchRange([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 10), [-1, -1], 'Test 81');
test(searchRange([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 8), [13, 14], 'Test 82');
test(searchRange([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), [9, 9], 'Test 83');
test(searchRange([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 1), [0, 0], 'Test 84');
test(searchRange([1,2,3,4,5,6,7,8,9,10], 10), [9, 9], 'Test 85');
test(searchRange([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), [0, 19], 'Test 86');
test(searchRange([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 2), [0, 31], 'Test 87');
test(searchRange([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), [-1, -1], 'Test 88');
test(searchRange([-10, -5, -5, -5, 0, 3, 5, 5, 5, 9], 0), [4, 4], 'Test 89');
test(searchRange([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 15), [14, 14], 'Test 90');
test(searchRange([1,2,2,2,2,2,2,2,2,2,2,2,2], 2), [1, 12], 'Test 91');
test(searchRange([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 1), [0, 0], 'Test 92');
test(searchRange([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 10), [17, 18], 'Test 93');
test(searchRange([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 6), [9, 10], 'Test 94');
test(searchRange([-10, -5, 0, 5, 10, 15, 20], -10), [0, 0], 'Test 95');
test(searchRange([1,2,3,4,5,6,7,8,9,10], 7), [6, 6], 'Test 96');
test(searchRange([-10,-8,-5,-3,-1,0,1,3,5,7,9,11,13], -3), [3, 3], 'Test 97');
test(searchRange([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 29), [14, 14], 'Test 98');
test(searchRange([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5), [4, 4], 'Test 99');
test(searchRange([-10, -5, 0, 5, 10, 15, 20], 0), [2, 2], 'Test 100');
test(searchRange([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 21), [10, 10], 'Test 101');
test(searchRange([1,2,2,3,3,3,4,4,5,5,5,5,5,6,6,7,7,8,8,8,9,9,10], 2), [1, 2], 'Test 102');
test(searchRange([1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5], 3), [1, 21], 'Test 103');
test(searchRange([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4], 3), [6, 8], 'Test 104');
test(searchRange([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), [0, 14], 'Test 105');
test(searchRange([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 0), [-1, -1], 'Test 106');
test(searchRange([-10, -5, 0, 5, 10, 15, 20], 25), [-1, -1], 'Test 107');
test(searchRange([1, 2, 2, 2, 3, 4, 4, 5, 5, 5, 5, 6, 7, 8, 8, 8, 8, 9], 5), [7, 10], 'Test 108');
test(searchRange([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 25), [12, 12], 'Test 109');
test(searchRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7), [6, 6], 'Test 110');
test(searchRange([1, 1, 1, 1, 1, 1, 1], 1), [0, 6], 'Test 111');
test(searchRange([1,2,3,4,5,6,7,8,9,10], 9), [8, 8], 'Test 112');
test(searchRange([1, 2, 2, 2, 3, 4, 4, 5, 5, 5, 5, 6, 7, 8, 8, 8, 8, 9], 8), [13, 16], 'Test 113');
test(searchRange([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 10), [0, 14], 'Test 114');
test(searchRange([1,2,2,3,3,3,4,4,5,5,5,5,5,6,6,7,7,8,8,8,9,9,10], 5), [8, 12], 'Test 115');
test(searchRange([-10,-5,-5,-5,0,0,0,1,2,3,3,3,3,4,5,6], -5), [1, 3], 'Test 116');
test(searchRange([1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6], 0), [-1, -1], 'Test 117');
test(searchRange([2,2,2,2,2,2,2,2,2,2], 2), [0, 9], 'Test 118');
test(searchRange([1,1,2,2,2,3,3,3,3,4,4,4,5,5,5,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10], 5), [12, 16], 'Test 119');
test(searchRange([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 1), [0, 0], 'Test 120');
test(searchRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 21), [-1, -1], 'Test 121');
test(searchRange([1,2,3,3,3,3,4,5,6], 3), [2, 5], 'Test 122');
test(searchRange([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 6), [10, 11], 'Test 123');
test(searchRange([-10, -5, -5, -5, 0, 3, 5, 5, 5, 9], 9), [9, 9], 'Test 124');
test(searchRange([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), [0, 29], 'Test 125');
test(searchRange([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 0), [-1, -1], 'Test 126');
test(searchRange([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 25), [-1, -1], 'Test 127');
test(searchRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10), [9, 9], 'Test 128');
test(searchRange([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 11), [-1, -1], 'Test 129');
test(searchRange([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 11), [10, 10], 'Test 130');
test(searchRange([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 3), [-1, -1], 'Test 131');
test(searchRange([-10, -5, -5, -5, 0, 3, 5, 5, 5, 9], -10), [0, 0], 'Test 132');
test(searchRange([0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1], 0), [0, 4], 'Test 133');
test(searchRange([1, 2, 2, 3, 3, 3, 3, 3, 3, 4, 5], 3), [3, 8], 'Test 134');
test(searchRange([1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6], 7), [-1, -1], 'Test 135');
test(searchRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), [4, 4], 'Test 136');
test(searchRange([1,1,1,1,1,1,1,1,1,1,1], 1), [0, 10], 'Test 137');

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
