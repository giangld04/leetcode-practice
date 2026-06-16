// Test: 129. Sum Root To Leaf Numbers
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { sumNumbers } = require("./solution");

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

console.log("\n129. Sum Root To Leaf Numbers\n");

test(sumNumbers([1,2,3,4,5,6,7]), 522, 'Test 1');
test(sumNumbers([9,3,20,null,null,15,7]), 2315, 'Test 2');
test(sumNumbers([1,2,3]), 25, 'Test 3');
test(sumNumbers([1,0,0]), 20, 'Test 4');
test(sumNumbers([1,0]), 10, 'Test 5');
test(sumNumbers([5,2,8,3,5,4,9,0,null,null,6]), 11659, 'Test 6');
test(sumNumbers([1,0,1]), 21, 'Test 7');
test(sumNumbers([1,0,1,0,1,0,1]), 422, 'Test 8');
test(sumNumbers([4,9,0,5,1]), 1026, 'Test 9');
test(sumNumbers([1,null,2]), 12, 'Test 10');
test(sumNumbers([5,3,6,2,4,null,8,1,null,null,null,7,9]), 17231, 'Test 11');
test(sumNumbers([0]), 0, 'Test 12');
test(sumNumbers([5,3,7,2,4,6,8]), 2220, 'Test 13');
test(sumNumbers([4,3,null,1,2]), 863, 'Test 14');
test(sumNumbers([2,3,4,5,6,7,8,9,0,1,2,3,4,5,6]), 19350, 'Test 15');
test(sumNumbers([9,8,7,6,5,4,3,2,1]), 22655, 'Test 16');
test(sumNumbers([3,1,5,null,2,4,6,7,8,9]), 10160, 'Test 17');
test(sumNumbers([8,null,5,null,3,null,1]), 8531, 'Test 18');
test(sumNumbers([2,3,5,6,4,null,9,8,7,1,0,null,null,null,null,null,null,5]), 30749, 'Test 19');
test(sumNumbers([9,4,0,9,8,6,0,1,3,8,9,0,6,7,9]), 74103, 'Test 20');
test(sumNumbers([5,5,5,5,5,null,5,5,null,5,5,5,5,null,null,5]), 77775, 'Test 21');
test(sumNumbers([1,3,null,null,5,2,null,null,8,6,9]), 270575, 'Test 22');
test(sumNumbers([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null]), 123456789, 'Test 23');
test(sumNumbers([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 157777, 'Test 24');
test(sumNumbers([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 123456789, 'Test 25');
test(sumNumbers([5,4,3,2,1,0,9,8,7,6,5,4,3,2,1]), 43076, 'Test 26');
test(sumNumbers([1,9,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]), 123485, 'Test 27');
test(sumNumbers([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), 541795, 'Test 28');
test(sumNumbers([1,2,3,4,5,null,6,7,null,8,9,null,null,0,1]), 27594, 'Test 29');
test(sumNumbers([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5]), 10472, 'Test 30');
test(sumNumbers([9,8,7,6,5,4,3,2,1,0,null,null,null,null,null,null,null,null,null]), 31520, 'Test 31');
test(sumNumbers([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5]), 78398, 'Test 32');
test(sumNumbers([6,0,8,null,7,1,3,null,null,2,5,null,null,null,4]), 76229, 'Test 33');
test(sumNumbers([1,9,8,7,6,5,4,3,2,1,null,null,0,9,8,7,6,5,4,3]), 104082, 'Test 34');
test(sumNumbers([2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 23456789, 'Test 35');
test(sumNumbers([5,9,6,7,4,0,2,null,null,8,1,null,null,3,9]), 24298, 'Test 36');
test(sumNumbers([1,9,8,2,8,7,9,4,4,6,8,3,0,7,9,null,null,null,null,null,4,null,null,null,null,0,null,3,null,null,2,null,1,null,9]), 431324, 'Test 37');
test(sumNumbers([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), 1499985, 'Test 38');
test(sumNumbers([1,null,3,null,5,null,7,null,9,null,11,null,13,null,15,null,17,null,19]), 1358024689, 'Test 39');
test(sumNumbers([8,15,7,1,null,10,2,8,null,null,5,null,10,null,9]), 112724, 'Test 40');
test(sumNumbers([6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]), 27790, 'Test 41');
test(sumNumbers([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 8444, 'Test 42');
test(sumNumbers([7,0,8,null,2,3,null,9]), 7812, 'Test 43');
test(sumNumbers([5,9,1,null,3,null,null,null,2]), 5983, 'Test 44');
test(sumNumbers([7,5,6,0,1,2,8,4,null,3,null,null,null,null,null,9]), 84092, 'Test 45');
test(sumNumbers([9,8,7,6,5,4,3,2,1,0,null,null,null,null,null,null,9]), 120287, 'Test 46');
test(sumNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 69405, 'Test 47');
test(sumNumbers([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,0]), 1234567890, 'Test 48');
test(sumNumbers([9,8,7,6,5,4,3,2,1,0]), 31520, 'Test 49');
test(sumNumbers([1,2,3,4,5,6,7,8,9,0,null,1,2,null,3,4,null,5,6,null,7,8,null,9,0,null,1]), 104580, 'Test 50');
test(sumNumbers([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]), 150745, 'Test 51');
test(sumNumbers([7,6,7,4,3,6,7,8,7,4,7,8,7,3,7]), 61651, 'Test 52');
test(sumNumbers([7,3,6,1,5,8,2,0,9,null,null,null,null,null,null]), 16894, 'Test 53');
test(sumNumbers([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]), 69195, 'Test 54');
test(sumNumbers([3,9,8,4,0,1,2,null,null,null,5,null,null,6,7]), 12333, 'Test 55');
test(sumNumbers([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5]), 131357, 'Test 56');
test(sumNumbers([7,1,4,6,9,null,3,null,null,null,5]), 8654, 'Test 57');
test(sumNumbers([2,3,5,4,1,6,8,7,null,9,null,null,null,0,null]), 7502, 'Test 58');
test(sumNumbers([5,3,6,2,4,8,9,1,7,null,null,0,null,null,0,0,null,null,0,0]), 169504, 'Test 59');
test(sumNumbers([5,3,2,8,9,7,1,4,6,null,null,null,null,null,null]), 12357, 'Test 60');
test(sumNumbers([3,9,20,null,null,15,7,1,null,2,null,3,null,4,null,5]), 565898, 'Test 61');
test(sumNumbers([9,4,5,1,6,7,2,null,null,null,null,8,3,0,null]), 30558, 'Test 62');
test(sumNumbers([5,4,5,4,5,4,5,4,5,4,5,4,5,4,5]), 43996, 'Test 63');
test(sumNumbers([6,7,8,0,1,2,3,4,5,null,null,null,null,null,null,9]), 75790, 'Test 64');
test(sumNumbers([4,9,0,5,1,0,0,null,null,3,2,0,0]), 18720, 'Test 65');
test(sumNumbers([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), 12176, 'Test 66');
test(sumNumbers([2,3,5,1,9,4,6,7,8,0,2,5,8,9,3]), 19642, 'Test 67');
test(sumNumbers([1,0,2,3,4,5,6,7,8,9]), 3375, 'Test 68');
test(sumNumbers([3,9,20,null,null,15,7,25,26,30,31,32,33,34,35]), 217394, 'Test 69');
test(sumNumbers([3,9,20,null,null,15,7,2,5,10,11,12,13,14,15]), 216394, 'Test 70');
test(sumNumbers([7,3,4,1,5,8,2,9,6,null,null,0,null,null,0,null,null,0,null,null,0]), 163434, 'Test 71');
test(sumNumbers([8,5,9,7,3,null,1,null,6,2,4]), 26533, 'Test 72');
test(sumNumbers([6,7,8,9,0,1,2,3,4,5,null,null,null,null,null,null,null,null,null]), 21655, 'Test 73');
test(sumNumbers([0,1,2,3,4,5,6,7,8,9,null,null,null,null,null,null,null,null,null]), 475, 'Test 74');
test(sumNumbers([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]), 195765, 'Test 75');
test(sumNumbers([3,1,8,null,4,2,7,null,null,null,5]), 4526, 'Test 76');
test(sumNumbers([0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5]), 19397, 'Test 77');
test(sumNumbers([0,1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 123456789, 'Test 78');
test(sumNumbers([6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]), 54282, 'Test 79');
test(sumNumbers([9,8,7,6,5,4,3,2,1,0,null,9,8,7,6]), 68543, 'Test 80');
test(sumNumbers([7,3,8,null,null,1,4,6,2,null,null,5,9]), 165003, 'Test 81');
test(sumNumbers([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), 79992, 'Test 82');
test(sumNumbers([0,1,2,3,4,5,6,7,8,9,0,1,2,3,4]), 1594, 'Test 83');
test(sumNumbers([1,2,3,null,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]), 93345, 'Test 84');
test(sumNumbers([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), 1599984, 'Test 85');
test(sumNumbers([1,9,null,2,8,null,7,null,3,6,null,4,5,null,null,null,null]), 58945, 'Test 86');
test(sumNumbers([6,7,8,2,7,1,3,9,null,1,4,null,5,null,null,null,null,null,5]), 88716, 'Test 87');
test(sumNumbers([1,null,9,2,null,8,4,null,null,null,5,null,null,6,3]), 21173, 'Test 88');
test(sumNumbers([1,0,1,null,1,0,1,null,null,null,1]), 1313, 'Test 89');
test(sumNumbers([3,0,1,null,null,0,2,1,4,null,null,6,9,null,null,8,null,null,null,null,null]), 344633, 'Test 90');
test(sumNumbers([1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9]), 105550, 'Test 91');
test(sumNumbers([0,1,2,3,4,5,6,7,8,9]), 475, 'Test 92');
test(sumNumbers([5,4,8,11,null,13,4,7,2,null,null,5,1]), 23308, 'Test 93');

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
