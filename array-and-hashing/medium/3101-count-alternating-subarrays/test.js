// Test: 3101. Count Alternating Subarrays
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { countAlternatingSubarrays } = require("./solution");

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

console.log("\n3101. Count Alternating Subarrays\n");

test(countAlternatingSubarrays([0,0,1,1,0,0]), 8, 'Test 1');
test(countAlternatingSubarrays([0,1,0,1,0,1]), 21, 'Test 2');
test(countAlternatingSubarrays([1,0,1,0,1]), 15, 'Test 3');
test(countAlternatingSubarrays([1,1,1,1]), 4, 'Test 4');
test(countAlternatingSubarrays([1,0,0,1,0,1,1,0]), 16, 'Test 5');
test(countAlternatingSubarrays([0,1,0,1,0]), 15, 'Test 6');
test(countAlternatingSubarrays([1]), 1, 'Test 7');
test(countAlternatingSubarrays([0,1]), 3, 'Test 8');
test(countAlternatingSubarrays([0,0,0,0,0]), 5, 'Test 9');
test(countAlternatingSubarrays([0,1,1,1]), 5, 'Test 10');
test(countAlternatingSubarrays([1,0]), 3, 'Test 11');
test(countAlternatingSubarrays([1,0,0,1,0,1]), 13, 'Test 12');
test(countAlternatingSubarrays([1,1,0,1,0,1]), 16, 'Test 13');
test(countAlternatingSubarrays([1,1,1,1,1]), 5, 'Test 14');
test(countAlternatingSubarrays([0]), 1, 'Test 15');
test(countAlternatingSubarrays([1,0,1,0,1,0]), 21, 'Test 16');
test(countAlternatingSubarrays([0,0,0,0]), 4, 'Test 17');
test(countAlternatingSubarrays([0,1,0,1,0,1,0,1]), 36, 'Test 18');
test(countAlternatingSubarrays([1,1,0,0,1,1]), 8, 'Test 19');
test(countAlternatingSubarrays([0,1,1,0,1,0]), 13, 'Test 20');
test(countAlternatingSubarrays([0,0,1,0,1,0]), 16, 'Test 21');
test(countAlternatingSubarrays([1,0,1,0]), 10, 'Test 22');
test(countAlternatingSubarrays([0,1,1,0,0,1]), 9, 'Test 23');
test(countAlternatingSubarrays([1,0,0,1,1,0,0,1,1,0]), 15, 'Test 24');
test(countAlternatingSubarrays([0,1,1,0,0,1,1,0,0,1,0,1,0,1]), 33, 'Test 25');
test(countAlternatingSubarrays([0,1,0,1,0,1,0,1,0,1,0]), 66, 'Test 26');
test(countAlternatingSubarrays([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 120, 'Test 27');
test(countAlternatingSubarrays([0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1]), 27, 'Test 28');
test(countAlternatingSubarrays([0,1,1,0,1,1,0,1,1,0]), 18, 'Test 29');
test(countAlternatingSubarrays([0,0,0,1,1,1,0,0,1,1,0,0,0]), 17, 'Test 30');
test(countAlternatingSubarrays([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 16, 'Test 31');
test(countAlternatingSubarrays([1,1,0,1,0,1,0,1,1,0]), 32, 'Test 32');
test(countAlternatingSubarrays([0,1,0,1,1,0,1,0,1]), 25, 'Test 33');
test(countAlternatingSubarrays([1,0,1,0,1,0,1,0,1,0,1,0,1]), 91, 'Test 34');
test(countAlternatingSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 16, 'Test 35');
test(countAlternatingSubarrays([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 253, 'Test 36');
test(countAlternatingSubarrays([0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1]), 29, 'Test 37');
test(countAlternatingSubarrays([1,0,0,1,1,0,0,1,1,0,0,1,1]), 19, 'Test 38');
test(countAlternatingSubarrays([1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1]), 34, 'Test 39');
test(countAlternatingSubarrays([1,1,1,1,0,0,0,0,1,1,1,1]), 14, 'Test 40');
test(countAlternatingSubarrays([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 22, 'Test 41');
test(countAlternatingSubarrays([1,0,1,1,0,1,0,1,0,1,0,1,0,1,0]), 84, 'Test 42');
test(countAlternatingSubarrays([0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1]), 19, 'Test 43');
test(countAlternatingSubarrays([1,1,0,0,1,0,1,1,0]), 17, 'Test 44');
test(countAlternatingSubarrays([1,0,1,0,1,0,1]), 28, 'Test 45');
test(countAlternatingSubarrays([1,0,0,1,1,0,0,1,1,0,0,1]), 18, 'Test 46');
test(countAlternatingSubarrays([1,1,1,0,0,1,1,0,0,0,1,1,0]), 18, 'Test 47');
test(countAlternatingSubarrays([0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 105, 'Test 48');
test(countAlternatingSubarrays([1,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 106, 'Test 49');
test(countAlternatingSubarrays([1,0,1,1,0,1,0,1,0,0,1,0,1,0,1]), 48, 'Test 50');
test(countAlternatingSubarrays([0,1,1,0,0,1,1,0,0,1]), 15, 'Test 51');
test(countAlternatingSubarrays([0,1,0,1,0,1,1,0,1,0]), 31, 'Test 52');
test(countAlternatingSubarrays([0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 121, 'Test 53');
test(countAlternatingSubarrays([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 190, 'Test 54');
test(countAlternatingSubarrays([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), 29, 'Test 55');
test(countAlternatingSubarrays([0,0,0,1,1,1,0,0,0,1,1,1]), 15, 'Test 56');
test(countAlternatingSubarrays([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 528, 'Test 57');
test(countAlternatingSubarrays([0,0,0,0,0,1,1,1,1,1]), 11, 'Test 58');
test(countAlternatingSubarrays([1,0,1,0,1,0,0,1,0,1]), 31, 'Test 59');
test(countAlternatingSubarrays([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), 41, 'Test 60');
test(countAlternatingSubarrays([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 136, 'Test 61');
test(countAlternatingSubarrays([0,1,0,0,1,0,1,1,0,1,0,1,0,1]), 44, 'Test 62');
test(countAlternatingSubarrays([1,0,1,0,0,1,0,1,0,0]), 26, 'Test 63');
test(countAlternatingSubarrays([1,1,1,1,0,0,0,0,1,1]), 12, 'Test 64');
test(countAlternatingSubarrays([1,0,1,1,0,1,0,1,0,1,0,1]), 51, 'Test 65');
test(countAlternatingSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 22, 'Test 66');
test(countAlternatingSubarrays([1,0,1,1,0,1,0,1,0,1]), 34, 'Test 67');
test(countAlternatingSubarrays([0,0,0,1,1,1,0,0,0,1,1,1,0,0,0]), 19, 'Test 68');
test(countAlternatingSubarrays([1,0,1,0,1,1,0,1,0,1,0,0,1,0,1]), 46, 'Test 69');
test(countAlternatingSubarrays([0,1,0,0,1,1,0,0,1,0,1,0,1,0,1]), 48, 'Test 70');
test(countAlternatingSubarrays([0,1,0,1,1,0,1,0,1,1]), 26, 'Test 71');
test(countAlternatingSubarrays([0,0,0,1,1,1,0,0,0,1]), 13, 'Test 72');
test(countAlternatingSubarrays([1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1]), 34, 'Test 73');
test(countAlternatingSubarrays([1,1,0,0,1,1,0,0]), 11, 'Test 74');
test(countAlternatingSubarrays([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 136, 'Test 75');
test(countAlternatingSubarrays([0,1,0,1,0,1,1,0,1,0,1,0,1]), 49, 'Test 76');
test(countAlternatingSubarrays([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 210, 'Test 77');
test(countAlternatingSubarrays([1,0,1,0,1,0,1,0,1,0]), 55, 'Test 78');
test(countAlternatingSubarrays([1,1,1,1,1,0,0,0,0,0]), 11, 'Test 79');
test(countAlternatingSubarrays([1,0,1,0,1,0,1,0,1,0,1,0]), 78, 'Test 80');
test(countAlternatingSubarrays([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 171, 'Test 81');
test(countAlternatingSubarrays([1,1,1,0,0,0,1,1,1,0]), 13, 'Test 82');
test(countAlternatingSubarrays([0,1,0,0,1,1,1,0,0,0,1,0,1,0,1]), 35, 'Test 83');
test(countAlternatingSubarrays([0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1]), 33, 'Test 84');
test(countAlternatingSubarrays([0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), 46, 'Test 85');
test(countAlternatingSubarrays([1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1]), 38, 'Test 86');
test(countAlternatingSubarrays([0,1,0,0,1,0,1,0,0,1]), 24, 'Test 87');
test(countAlternatingSubarrays([1,1,0,0,1,1,0,0,1,1]), 14, 'Test 88');
test(countAlternatingSubarrays([0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1]), 19, 'Test 89');
test(countAlternatingSubarrays([1,0,0,1,0,0,1,0,0,1]), 18, 'Test 90');
test(countAlternatingSubarrays([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 351, 'Test 91');
test(countAlternatingSubarrays([1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0]), 52, 'Test 92');
test(countAlternatingSubarrays([0,1,1,0,0,1,1,0,0,1,1,0,0]), 19, 'Test 93');
test(countAlternatingSubarrays([0,1,1,1,0,1,0,1,0,1,1,1,0,0,0]), 38, 'Test 94');
test(countAlternatingSubarrays([0,0,1,1,1,0,1,0,0,1]), 18, 'Test 95');
test(countAlternatingSubarrays([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 325, 'Test 96');
test(countAlternatingSubarrays([1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), 23, 'Test 97');
test(countAlternatingSubarrays([0,0,0,0,0,1,1,1,1,1,0,0,0,0,0]), 17, 'Test 98');
test(countAlternatingSubarrays([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 595, 'Test 99');
test(countAlternatingSubarrays([0,1,1,0,1,0,1,1,0,0]), 22, 'Test 100');
test(countAlternatingSubarrays([1,1,1,0,0,0,1,1,1,0,0,0,1,1,1]), 19, 'Test 101');
test(countAlternatingSubarrays([1,1,0,0,1,1,0,0,1]), 13, 'Test 102');
test(countAlternatingSubarrays([1,1,1,0,0,0,1,1,1,0,0,0]), 15, 'Test 103');
test(countAlternatingSubarrays([0,0,1,1,0,0,1,1,0,0,1,1,0]), 19, 'Test 104');
test(countAlternatingSubarrays([0,1,0,1,0,1,0,1,0,1]), 55, 'Test 105');
test(countAlternatingSubarrays([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 210, 'Test 106');
test(countAlternatingSubarrays([0,0,1,0,1,0,0,1,0,1,0,1,0]), 44, 'Test 107');
test(countAlternatingSubarrays([1,0,1,1,0,1,0,0,1,0]), 22, 'Test 108');
test(countAlternatingSubarrays([0,1,0,1,0,1,0,1,0]), 45, 'Test 109');
test(countAlternatingSubarrays([0,1,1,0,1,0,1,0,1,0,1,1]), 49, 'Test 110');

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
