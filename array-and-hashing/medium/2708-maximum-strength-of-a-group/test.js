// Test: 2708. Maximum Strength Of A Group
// 124 test cases from LeetCodeDataset
// Run: node test.js

const { maxStrength } = require("./solution");

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

console.log("\n2708. Maximum Strength Of A Group\n");

test(maxStrength([1,-1,2,-2,3,-3]), 36, 'Test 1');
test(maxStrength([-9]), -9, 'Test 2');
test(maxStrength([0,0,0,1,-1]), 1, 'Test 3');
test(maxStrength([-4,-5,-4]), 20, 'Test 4');
test(maxStrength([0,2,3,4]), 24, 'Test 5');
test(maxStrength([0,1,-1]), 1, 'Test 6');
test(maxStrength([-1]), -1, 'Test 7');
test(maxStrength([9,8,7,6,5,4,3,2,1]), 362880, 'Test 8');
test(maxStrength([-3,0,3]), 3, 'Test 9');
test(maxStrength([9]), 9, 'Test 10');
test(maxStrength([1]), 1, 'Test 11');
test(maxStrength([1,-1,1,-1]), 1, 'Test 12');
test(maxStrength([1,-1]), 1, 'Test 13');
test(maxStrength([1,-2,3,-4,5,-6,7,-8,9,-10,11,-12,13]), 6227020800, 'Test 14');
test(maxStrength([10,0,-10,0]), 10, 'Test 15');
test(maxStrength([1,2,0,3,4]), 24, 'Test 16');
test(maxStrength([-1,-2,-3,-4,-5]), 120, 'Test 17');
test(maxStrength([5,5,5,5,5]), 3125, 'Test 18');
test(maxStrength([1,2,3,4,5]), 120, 'Test 19');
test(maxStrength([0,1,-1,2,-2]), 4, 'Test 20');
test(maxStrength([0,0,0]), 0, 'Test 21');
test(maxStrength([-1,-1,0,1,1]), 1, 'Test 22');
test(maxStrength([0]), 0, 'Test 23');
test(maxStrength([-1,2,-3,4,-5,6,-7,8,-9]), 362880, 'Test 24');
test(maxStrength([2,3,-1,-2,-3]), 36, 'Test 25');
test(maxStrength([0,0,0,0]), 0, 'Test 26');
test(maxStrength([-1,-2,-3,-4]), 24, 'Test 27');
test(maxStrength([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13]), 6227020800, 'Test 28');
test(maxStrength([-9,-8,-7,-6,-5,-4,-3,-2,-1]), 362880, 'Test 29');
test(maxStrength([3,-1,-5,2,5,-9]), 1350, 'Test 30');
test(maxStrength([-1,1,0]), 1, 'Test 31');
test(maxStrength([-1,0,1]), 1, 'Test 32');
test(maxStrength([-9,9,-8,8,-7,7,-6,6,-5,5,-4,4,-3,3]), 10973491200, 'Test 33');
test(maxStrength([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0]), 362880, 'Test 34');
test(maxStrength([1,2,3,4,5,6,7,8,9,-9,-8,-7,-6]), 1097349120, 'Test 35');
test(maxStrength([7, 3, -2, -5, 0, 1, 4, -6]), 2520, 'Test 36');
test(maxStrength([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 531441, 'Test 37');
test(maxStrength([-2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2]), 4096, 'Test 38');
test(maxStrength([-9, 9, 0, -1, 1, -2, 2]), 324, 'Test 39');
test(maxStrength([2, 3, 5, 7, 11, 13, 17, 19, 23]), 223092870, 'Test 40');
test(maxStrength([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 1, 'Test 41');
test(maxStrength([3, -1, -5, 2, 5, -9, 7]), 9450, 'Test 42');
test(maxStrength([0,0,0,0,0,0,0]), 0, 'Test 43');
test(maxStrength([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 1220703125, 'Test 44');
test(maxStrength([9, -8, 7, -6, 5, -4, 3, -2, 1, -9]), 1632960, 'Test 45');
test(maxStrength([-1, 0, 1, 0, -1, 0, 1, 0, -1, 0, 1]), 1, 'Test 46');
test(maxStrength([1, -2, 3, -4, 5, -6]), 360, 'Test 47');
test(maxStrength([0, 1, -1, 2, -2, 3]), 12, 'Test 48');
test(maxStrength([-9, -8, -7, -6, -5, -4, -3, -2, -1]), 362880, 'Test 49');
test(maxStrength([0, -1, 2, -2, 3, -3]), 36, 'Test 50');
test(maxStrength([-3,-2,-1,0,1,2,3]), 36, 'Test 51');
test(maxStrength([-1, 0, 1]), 1, 'Test 52');
test(maxStrength([0, 0, 0, 0]), 0, 'Test 53');
test(maxStrength([9, 7, 5, 3, 1, -1, -3, -5, -7, -9]), 893025, 'Test 54');
test(maxStrength([-1, -3, -5, -7, -9]), 945, 'Test 55');
test(maxStrength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3]), 21772800, 'Test 56');
test(maxStrength([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), 1, 'Test 57');
test(maxStrength([-8, -6, -4, -2, 0, 2, 4, 6, 8]), 147456, 'Test 58');
test(maxStrength([0, 0, 0, 0, 1]), 1, 'Test 59');
test(maxStrength([-1, -2, -3, -4, -5, -6, -7, -8, -9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 131681894400, 'Test 60');
test(maxStrength([-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3]), 2177280, 'Test 61');
test(maxStrength([0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 62');
test(maxStrength([7, -8, 9, -2, 3, 0, 4, -5, 6, -1]), 362880, 'Test 63');
test(maxStrength([1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2]), 725760, 'Test 64');
test(maxStrength([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 65');
test(maxStrength([9, -9, 8, -8, 7, -7]), 36288, 'Test 66');
test(maxStrength([0, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), 14400, 'Test 67');
test(maxStrength([-3, -3, -3, -3, -3, -3, -3, -3, -3]), 6561, 'Test 68');
test(maxStrength([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 362880, 'Test 69');
test(maxStrength([0, 1, -1, 2, -2, 3, -3, 4, -4]), 576, 'Test 70');
test(maxStrength([3, -1, 0, -5, 2, 5, -9, 0, 4, -2, 6, -8, 7]), 3628800, 'Test 71');
test(maxStrength([0, 0, 0, 0, 0, 0, 1, -1, 2, -2, 3, -3, 4]), 144, 'Test 72');
test(maxStrength([-9, 9, -8, 8, -7, 7, -6, 6, -5, 5, -4, 4, -3, 3, -2, 2, -1, 1]), 131681894400, 'Test 73');
test(maxStrength([0, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6]), 518400, 'Test 74');
test(maxStrength([0, 0, 0, 0, 0, 0, 0]), 0, 'Test 75');
test(maxStrength([-3, -2, -1, 0, 1, 2, 3]), 36, 'Test 76');
test(maxStrength([-5, 0, 5]), 5, 'Test 77');
test(maxStrength([-1, -2, -3, -4, -5]), 120, 'Test 78');
test(maxStrength([-1, -2, -3, -4, -5, -6, -7]), 5040, 'Test 79');
test(maxStrength([1, -2, 3, -4, 5, -6, 7]), 2520, 'Test 80');
test(maxStrength([-2, 2, -3, 3, -4, 4, -5, 5, -6, 6, -7, 7, -8]), 101606400, 'Test 81');
test(maxStrength([-1, 0, 0, 0, 0, 0, -2]), 2, 'Test 82');
test(maxStrength([-1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 1, 'Test 83');
test(maxStrength([1, -1, 1, -1, 1, -1, 1, -1, 1]), 1, 'Test 84');
test(maxStrength([3, -1, -5, 2, 5, -9, 7, -8]), 75600, 'Test 85');
test(maxStrength([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 2177280, 'Test 86');
test(maxStrength([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 8192, 'Test 87');
test(maxStrength([3, -3, 3, -3, 3, -3, 3, -3, 3, -3, 3, -3, 3]), 1594323, 'Test 88');
test(maxStrength([1, 0, -1, 0, 1, 0, -1, 0]), 1, 'Test 89');
test(maxStrength([9, -8, 7, -6, 5, -4, 3, -2, 1, 0, -1, 2, -3]), 2177280, 'Test 90');
test(maxStrength([9, 0, -9, 0, 9, -9, 9, -9, 9]), 531441, 'Test 91');
test(maxStrength([-3, -5, 0, 2, 4, 6, 8, 10]), 57600, 'Test 92');
test(maxStrength([1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4]), 8709120, 'Test 93');
test(maxStrength([3, -1, 0, 5, -2, 4, -6]), 720, 'Test 94');
test(maxStrength([-3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3]), 531441, 'Test 95');
test(maxStrength([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 96');
test(maxStrength([2, 4, -6, 8, -10, 12, -14, 16, -18]), 185794560, 'Test 97');
test(maxStrength([-2, -3, -4, 0, 0, 0, 0, 0, 0]), 12, 'Test 98');
test(maxStrength([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3]), 2177280, 'Test 99');
test(maxStrength([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1]), 1, 'Test 100');
test(maxStrength([-1, 1, -1, 1, -1]), 1, 'Test 101');
test(maxStrength([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]), 1, 'Test 102');
test(maxStrength([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 1, 'Test 103');
test(maxStrength([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7]), 3628800, 'Test 104');
test(maxStrength([-1, -2, -3, -4, -5, 0, 1, 2, 3, 4, 5]), 14400, 'Test 105');
test(maxStrength([5, -1, 3, -2, 0, 4, -3]), 360, 'Test 106');
test(maxStrength([1, 2, 3, 4, 5, 6, 7, 8, 9]), 362880, 'Test 107');
test(maxStrength([-3, 3, -3, 3, -3, 3, -3, 3, -3, 3, -3, 3, -3]), 531441, 'Test 108');
test(maxStrength([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), 14400, 'Test 109');
test(maxStrength([-1, -2, -3, -4, -5, -6, -7, -8, -9]), 362880, 'Test 110');
test(maxStrength([-1,-2,-3,-4,-5,-6,-7,-8,-9,9,8,7,6,5,4,3,2,1]), 131681894400, 'Test 111');
test(maxStrength([-9,0,9,-8,0,8,-7,0,7,-6,0,6,-5,0,5,-4,0,4,-3,0,3,-2,0,2,-1,0,1]), Execution timed out, 'Test 112');
test(maxStrength([5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8]), 609638400, 'Test 113');
test(maxStrength([1, -2, 3, -4, 5, -6, 7, -8, 9]), 362880, 'Test 114');
test(maxStrength([9, -8, 7, -6, 5, -4, 3, -2, 1]), 362880, 'Test 115');
test(maxStrength([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 1594323, 'Test 116');
test(maxStrength([2, -3, 4, -5, 6, -7, 8, -9, 1]), 362880, 'Test 117');
test(maxStrength([-2, -3, -4, -5, -6, -7, -8, -9]), 362880, 'Test 118');
test(maxStrength([-9, 9, -8, 8, -7, 7, -6, 6, -5, 5, -4, 4, -3]), 3657830400, 'Test 119');
test(maxStrength([-2, -3, -5, 0, 0, 0, 0, 0, 0]), 15, 'Test 120');
test(maxStrength([9, -8, 7, -6, 5, -4, 3, -2, 1, -1, 0]), 362880, 'Test 121');
test(maxStrength([1, 0, -1, 2, 0, -2, 3, 0, -3]), 36, 'Test 122');
test(maxStrength([-9, 8, -7, 6, -5, 4, -3, 2, -1]), 362880, 'Test 123');
test(maxStrength([-9, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4]), 8709120, 'Test 124');

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
