// Test: 949. Largest Time For Given Digits
// 123 test cases from LeetCodeDataset
// Run: node test.js

const { largestTimeFromDigits } = require("./solution");

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

console.log("\n949. Largest Time For Given Digits\n");

test(largestTimeFromDigits([2,9,0,3]), 23:09, 'Test 1');
test(largestTimeFromDigits([1,9,6,0]), 19:06, 'Test 2');
test(largestTimeFromDigits([0,2,6,6]), 06:26, 'Test 3');
test(largestTimeFromDigits([4,2,4,4]), , 'Test 4');
test(largestTimeFromDigits([2,2,9,6]), , 'Test 5');
test(largestTimeFromDigits([2,3,5,9]), 23:59, 'Test 6');
test(largestTimeFromDigits([4,2,0,0]), 20:40, 'Test 7');
test(largestTimeFromDigits([1,9,9,9]), , 'Test 8');
test(largestTimeFromDigits([9,1,6,0]), 19:06, 'Test 9');
test(largestTimeFromDigits([1,9,6,3]), 19:36, 'Test 10');
test(largestTimeFromDigits([5,5,5,5]), , 'Test 11');
test(largestTimeFromDigits([2,0,6,6]), 06:26, 'Test 12');
test(largestTimeFromDigits([1,2,3,4]), 23:41, 'Test 13');
test(largestTimeFromDigits([0,4,0,0]), 04:00, 'Test 14');
test(largestTimeFromDigits([0,1,5,9]), 19:50, 'Test 15');
test(largestTimeFromDigits([0,0,1,0]), 10:00, 'Test 16');
test(largestTimeFromDigits([0,9,5,7]), 09:57, 'Test 17');
test(largestTimeFromDigits([0,0,0,0]), 00:00, 'Test 18');
test(largestTimeFromDigits([3,9,5,6]), , 'Test 19');
test(largestTimeFromDigits([1,9,6,8]), , 'Test 20');
test(largestTimeFromDigits([9,6,3,2]), , 'Test 21');
test(largestTimeFromDigits([5,0,7,0]), 07:50, 'Test 22');
test(largestTimeFromDigits([3,0,7,0]), 07:30, 'Test 23');
test(largestTimeFromDigits([1,3,5,7]), 17:53, 'Test 24');
test(largestTimeFromDigits([9,9,9,0]), , 'Test 25');
test(largestTimeFromDigits([9,0,4,3]), 09:43, 'Test 26');
test(largestTimeFromDigits([9,0,8,7]), , 'Test 27');
test(largestTimeFromDigits([9,9,8,8]), , 'Test 28');
test(largestTimeFromDigits([1,2,8,9]), 19:28, 'Test 29');
test(largestTimeFromDigits([1,2,3,3]), 23:31, 'Test 30');
test(largestTimeFromDigits([4,2,6,9]), , 'Test 31');
test(largestTimeFromDigits([2,2,3,4]), 23:42, 'Test 32');
test(largestTimeFromDigits([2,2,3,3]), 23:32, 'Test 33');
test(largestTimeFromDigits([3,4,9,1]), 19:43, 'Test 34');
test(largestTimeFromDigits([2,9,3,4]), 23:49, 'Test 35');
test(largestTimeFromDigits([5,0,9,2]), 20:59, 'Test 36');
test(largestTimeFromDigits([2,9,5,1]), 21:59, 'Test 37');
test(largestTimeFromDigits([6,6,6,6]), , 'Test 38');
test(largestTimeFromDigits([2,4,0,6]), 20:46, 'Test 39');
test(largestTimeFromDigits([2,2,2,2]), 22:22, 'Test 40');
test(largestTimeFromDigits([4,5,9,8]), , 'Test 41');
test(largestTimeFromDigits([3,9,1,0]), 19:30, 'Test 42');
test(largestTimeFromDigits([2,2,4,4]), 22:44, 'Test 43');
test(largestTimeFromDigits([0,1,2,3]), 23:10, 'Test 44');
test(largestTimeFromDigits([4,1,4,0]), 14:40, 'Test 45');
test(largestTimeFromDigits([1, 1, 1, 1]), 11:11, 'Test 46');
test(largestTimeFromDigits([8,4,2,1]), 21:48, 'Test 47');
test(largestTimeFromDigits([0,4,2,3]), 23:40, 'Test 48');
test(largestTimeFromDigits([2,9,0,5]), 20:59, 'Test 49');
test(largestTimeFromDigits([3,8,4,1]), 18:43, 'Test 50');
test(largestTimeFromDigits([3,8,4,7]), , 'Test 51');
test(largestTimeFromDigits([2,3,0,3]), 23:30, 'Test 52');
test(largestTimeFromDigits([3,5,0,7]), 07:53, 'Test 53');
test(largestTimeFromDigits([2,3,0,0]), 23:00, 'Test 54');
test(largestTimeFromDigits([2,4,0,0]), 20:40, 'Test 55');
test(largestTimeFromDigits([1,2,5,9]), 21:59, 'Test 56');
test(largestTimeFromDigits([3,9,4,0]), 09:43, 'Test 57');
test(largestTimeFromDigits([1,1,9,9]), 19:19, 'Test 58');
test(largestTimeFromDigits([1,8,8,8]), , 'Test 59');
test(largestTimeFromDigits([1,8,4,6]), 18:46, 'Test 60');
test(largestTimeFromDigits([1,0,7,6]), 17:06, 'Test 61');
test(largestTimeFromDigits([2,0,6,4]), 20:46, 'Test 62');
test(largestTimeFromDigits([5,8,5,8]), , 'Test 63');
test(largestTimeFromDigits([2,3,4,5]), 23:54, 'Test 64');
test(largestTimeFromDigits([8,7,7,9]), , 'Test 65');
test(largestTimeFromDigits([1,1,1,2]), 21:11, 'Test 66');
test(largestTimeFromDigits([2,7,6,0]), 07:26, 'Test 67');
test(largestTimeFromDigits([0,2,6,4]), 20:46, 'Test 68');
test(largestTimeFromDigits([4, 1, 4, 2]), 21:44, 'Test 69');
test(largestTimeFromDigits([0,0,1,2]), 21:00, 'Test 70');
test(largestTimeFromDigits([5,9,5,9]), , 'Test 71');
test(largestTimeFromDigits([2,3,6,8]), , 'Test 72');
test(largestTimeFromDigits([0,7,6,6]), , 'Test 73');
test(largestTimeFromDigits([4,1,3,5]), 15:43, 'Test 74');
test(largestTimeFromDigits([8,5,9,0]), 09:58, 'Test 75');
test(largestTimeFromDigits([7, 6, 4, 0]), 07:46, 'Test 76');
test(largestTimeFromDigits([2,3,2,3]), 23:32, 'Test 77');
test(largestTimeFromDigits([0,9,0,9]), 09:09, 'Test 78');
test(largestTimeFromDigits([7,9,5,2]), , 'Test 79');
test(largestTimeFromDigits([1,0,0,0]), 10:00, 'Test 80');
test(largestTimeFromDigits([0, 3, 5, 5]), 05:53, 'Test 81');
test(largestTimeFromDigits([3,8,4,5]), , 'Test 82');
test(largestTimeFromDigits([0,5,9,6]), 09:56, 'Test 83');
test(largestTimeFromDigits([0,0,0,1]), 10:00, 'Test 84');
test(largestTimeFromDigits([5,8,5,9]), , 'Test 85');
test(largestTimeFromDigits([1,1,1,1]), 11:11, 'Test 86');
test(largestTimeFromDigits([8,8,8,8]), , 'Test 87');
test(largestTimeFromDigits([2, 4, 6, 8]), , 'Test 88');
test(largestTimeFromDigits([3,3,3,3]), , 'Test 89');
test(largestTimeFromDigits([1,8,7,7]), , 'Test 90');
test(largestTimeFromDigits([6,8,5,4]), , 'Test 91');
test(largestTimeFromDigits([6,6,9,0]), , 'Test 92');
test(largestTimeFromDigits([2, 2, 2, 2]), 22:22, 'Test 93');
test(largestTimeFromDigits([7,8,6,1]), , 'Test 94');
test(largestTimeFromDigits([5,3,6,0]), 06:53, 'Test 95');
test(largestTimeFromDigits([0,3,5,9]), 09:53, 'Test 96');
test(largestTimeFromDigits([3, 0, 7, 0]), 07:30, 'Test 97');
test(largestTimeFromDigits([5,9,6,4]), , 'Test 98');
test(largestTimeFromDigits([0,9,3,5]), 09:53, 'Test 99');
test(largestTimeFromDigits([7,7,7,7]), , 'Test 100');
test(largestTimeFromDigits([2,3,3,2]), 23:32, 'Test 101');
test(largestTimeFromDigits([5,9,6,3]), , 'Test 102');
test(largestTimeFromDigits([0,9,1,1]), 19:10, 'Test 103');
test(largestTimeFromDigits([5, 0, 5, 2]), 20:55, 'Test 104');
test(largestTimeFromDigits([3, 3, 3, 3]), , 'Test 105');
test(largestTimeFromDigits([0,5,5,9]), 09:55, 'Test 106');
test(largestTimeFromDigits([1, 2, 8, 9]), 19:28, 'Test 107');
test(largestTimeFromDigits([2,2,1,1]), 22:11, 'Test 108');
test(largestTimeFromDigits([1, 2, 3, 0]), 23:10, 'Test 109');
test(largestTimeFromDigits([0, 4, 0, 0]), 04:00, 'Test 110');
test(largestTimeFromDigits([3,3,0,1]), 13:30, 'Test 111');
test(largestTimeFromDigits([6,1,4,2]), 21:46, 'Test 112');
test(largestTimeFromDigits([0,4,4,5]), 05:44, 'Test 113');
test(largestTimeFromDigits([9,0,0,0]), 09:00, 'Test 114');
test(largestTimeFromDigits([0,0,1,1]), 11:00, 'Test 115');
test(largestTimeFromDigits([5, 6, 7, 8]), , 'Test 116');
test(largestTimeFromDigits([1,2,9,0]), 21:09, 'Test 117');
test(largestTimeFromDigits([3,3,4,5]), , 'Test 118');
test(largestTimeFromDigits([9,9,9,9]), , 'Test 119');
test(largestTimeFromDigits([5,2,8,9]), , 'Test 120');
test(largestTimeFromDigits([9, 8, 7, 6]), , 'Test 121');
test(largestTimeFromDigits([9, 9, 9, 9]), , 'Test 122');
test(largestTimeFromDigits([0,1,7,7]), 17:07, 'Test 123');

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
