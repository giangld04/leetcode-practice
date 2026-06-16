// Test: 3105. Longest Strictly Increasing Or Strictly Decreasing Subarray
// 139 test cases from LeetCodeDataset
// Run: node test.js

const { longestMonotonicSubarray } = require("./solution");

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

console.log("\n3105. Longest Strictly Increasing Or Strictly Decreasing Subarray\n");

test(longestMonotonicSubarray([1,3,5,4,7,8,6,9]), 3, 'Test 1');
test(longestMonotonicSubarray([1,2,2,3,4,5]), 4, 'Test 2');
test(longestMonotonicSubarray([10,9,4,3,3,2,1]), 4, 'Test 3');
test(longestMonotonicSubarray([10,9,8,7,6,5,4,3,2,1]), 10, 'Test 4');
test(longestMonotonicSubarray([3,3,3,3]), 1, 'Test 5');
test(longestMonotonicSubarray([1,2,3,4,5,6,7,8,9,10]), 10, 'Test 6');
test(longestMonotonicSubarray([10,9,4,3,5,7,6,8,1]), 4, 'Test 7');
test(longestMonotonicSubarray([1]), 1, 'Test 8');
test(longestMonotonicSubarray([1,3,2,4,3,5]), 2, 'Test 9');
test(longestMonotonicSubarray([1,3,5,4,7]), 3, 'Test 10');
test(longestMonotonicSubarray([1,2,3,2,1,2,3,4,3,2,1]), 4, 'Test 11');
test(longestMonotonicSubarray([1,2,3,4,5]), 5, 'Test 12');
test(longestMonotonicSubarray([4,5,6,3,2,1,2,3]), 4, 'Test 13');
test(longestMonotonicSubarray([1,2,2,3,4,5,5,6]), 4, 'Test 14');
test(longestMonotonicSubarray([1,4,3,3,2]), 2, 'Test 15');
test(longestMonotonicSubarray([1,3,5,4,2]), 3, 'Test 16');
test(longestMonotonicSubarray([3,2,1]), 3, 'Test 17');
test(longestMonotonicSubarray([4,3,3,2,1]), 3, 'Test 18');
test(longestMonotonicSubarray([5,4,3,2,1]), 5, 'Test 19');
test(longestMonotonicSubarray([1,3,2,4,3]), 2, 'Test 20');
test(longestMonotonicSubarray([1,2,2,3,4]), 3, 'Test 21');
test(longestMonotonicSubarray([1,2,3,2,1,2,3]), 3, 'Test 22');
test(longestMonotonicSubarray([1,2,3,2,1]), 3, 'Test 23');
test(longestMonotonicSubarray([2,2,2,2,2]), 1, 'Test 24');
test(longestMonotonicSubarray([1,3,2,4,3,5,4]), 2, 'Test 25');
test(longestMonotonicSubarray([5,4,3,2,1,1,2,3,4,5,5,4,3,2,1]), 5, 'Test 26');
test(longestMonotonicSubarray([1,2,3,2,1,2,3,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), 6, 'Test 27');
test(longestMonotonicSubarray([10,9,8,7,6,5,6,7,8,9]), 6, 'Test 28');
test(longestMonotonicSubarray([1,2,2,3,4,5,6,7,8,9]), 8, 'Test 29');
test(longestMonotonicSubarray([1, 2, 2, 3, 4, 5, 6, 7, 8, 9]), 8, 'Test 30');
test(longestMonotonicSubarray([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 2, 'Test 31');
test(longestMonotonicSubarray([1, 2, 3, 4, 3, 2, 3, 4, 5, 6, 7, 8, 9]), 8, 'Test 32');
test(longestMonotonicSubarray([1,3,2,4,3,5,4,6,5,7,6,8,7,9]), 2, 'Test 33');
test(longestMonotonicSubarray([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 2, 'Test 34');
test(longestMonotonicSubarray([3,2,1,2,3,4,5,6,7,8]), 8, 'Test 35');
test(longestMonotonicSubarray([1,1,2,2,3,3,4,4,5,5,4,4,3,3,2,2,1,1]), 2, 'Test 36');
test(longestMonotonicSubarray([9,8,7,6,5,5,5,4,3,2]), 5, 'Test 37');
test(longestMonotonicSubarray([10,9,8,7,8,9,10,9,8,7,8,9,10,9,8,7]), 4, 'Test 38');
test(longestMonotonicSubarray([1, 2, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5]), 8, 'Test 39');
test(longestMonotonicSubarray([1,2,3,2,1,2,3,4,3,2]), 4, 'Test 40');
test(longestMonotonicSubarray([1,2,2,2,2,2,2,2,2,3]), 2, 'Test 41');
test(longestMonotonicSubarray([9,8,7,6,5,3,4,5,6,7,5,4,3,2,1,2,3]), 6, 'Test 42');
test(longestMonotonicSubarray([2, 1, 3, 2, 4, 3, 5, 4, 6, 5]), 2, 'Test 43');
test(longestMonotonicSubarray([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 50, 'Test 44');
test(longestMonotonicSubarray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 10, 'Test 45');
test(longestMonotonicSubarray([1,2,2,3,4,5,6,7,8,9,10]), 9, 'Test 46');
test(longestMonotonicSubarray([2,1,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 47');
test(longestMonotonicSubarray([1,2,2,3,4,5,5,4,3,2,1,2,3,4,5,5,4,3,2,1]), 5, 'Test 48');
test(longestMonotonicSubarray([50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1]), 2, 'Test 49');
test(longestMonotonicSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 50');
test(longestMonotonicSubarray([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3]), 5, 'Test 51');
test(longestMonotonicSubarray([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10]), 2, 'Test 52');
test(longestMonotonicSubarray([5,4,3,2,1,2,3,4,5,4,3,2,1]), 5, 'Test 53');
test(longestMonotonicSubarray([1,2,3,4,5,6,7,8,9,1]), 9, 'Test 54');
test(longestMonotonicSubarray([1,2,2,3,4,5,4,3,2,1]), 5, 'Test 55');
test(longestMonotonicSubarray([1,1,2,3,4,5,5,6,7,8]), 5, 'Test 56');
test(longestMonotonicSubarray([1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]), 6, 'Test 57');
test(longestMonotonicSubarray([10,20,15,10,5,10,15,20,25,20,15,10,5]), 5, 'Test 58');
test(longestMonotonicSubarray([2,1,3,4,5,6,7,8,9,10,8,7,6,5,4,3,2,1]), 9, 'Test 59');
test(longestMonotonicSubarray([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 5, 'Test 60');
test(longestMonotonicSubarray([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5]), 5, 'Test 61');
test(longestMonotonicSubarray([5, 4, 3, 2, 1, 2, 3, 4, 5, 6]), 6, 'Test 62');
test(longestMonotonicSubarray([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8]), 2, 'Test 63');
test(longestMonotonicSubarray([1, 2, 3, 4, 3, 2, 1, 2, 3, 4]), 4, 'Test 64');
test(longestMonotonicSubarray([1,2,3,4,5,4,3,4,5,6,7,8,9,10]), 8, 'Test 65');
test(longestMonotonicSubarray([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10]), 2, 'Test 66');
test(longestMonotonicSubarray([1,2,3,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5]), 10, 'Test 67');
test(longestMonotonicSubarray([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7]), 2, 'Test 68');
test(longestMonotonicSubarray([1,1,2,2,3,3,4,4,5,5]), 2, 'Test 69');
test(longestMonotonicSubarray([5,6,7,8,9,8,7,6,5,4,5,6,7,8,9]), 6, 'Test 70');
test(longestMonotonicSubarray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 71');
test(longestMonotonicSubarray([5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2]), 2, 'Test 72');
test(longestMonotonicSubarray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 2, 'Test 73');
test(longestMonotonicSubarray([10,9,9,9,9,9,9,9,9,8]), 2, 'Test 74');
test(longestMonotonicSubarray([1,3,5,7,9,11,13,15,17,19]), 10, 'Test 75');
test(longestMonotonicSubarray([5,4,3,2,1,2,1,2,3,4,3,4,5,4,5,6]), 5, 'Test 76');
test(longestMonotonicSubarray([1,3,5,7,9,8,6,4,2,1,3,5,7,9,8,6,4,2,1]), 6, 'Test 77');
test(longestMonotonicSubarray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]), 2, 'Test 78');
test(longestMonotonicSubarray([1,2,1,2,1,2,1,2,1,2]), 2, 'Test 79');
test(longestMonotonicSubarray([1,2,2,1,2,3,3,2,1,2,3,4,4,3,2,1]), 4, 'Test 80');
test(longestMonotonicSubarray([1,3,5,7,9,7,5,3,1,3,5,7]), 5, 'Test 81');
test(longestMonotonicSubarray([1,2,3,2,1,2,3,2,1,2]), 3, 'Test 82');
test(longestMonotonicSubarray([1,2,3,2,1,2,3,2,1]), 3, 'Test 83');
test(longestMonotonicSubarray([50,49,48,47,46,45,44,43,42,41]), 10, 'Test 84');
test(longestMonotonicSubarray([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 85');
test(longestMonotonicSubarray([5,5,5,5,5,5,5,5,5,5]), 1, 'Test 86');
test(longestMonotonicSubarray([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,50]), 26, 'Test 87');
test(longestMonotonicSubarray([9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 88');
test(longestMonotonicSubarray([9, 8, 7, 6, 7, 8, 9, 10, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 11, 'Test 89');
test(longestMonotonicSubarray([1,3,2,4,5,3,6,7,8,5,9]), 4, 'Test 90');
test(longestMonotonicSubarray([1,3,2,4,5,7,6,8,9,10]), 4, 'Test 91');
test(longestMonotonicSubarray([5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6]), 10, 'Test 92');
test(longestMonotonicSubarray([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9]), 2, 'Test 93');
test(longestMonotonicSubarray([1,3,2,4,5,3,6,7,5,8]), 3, 'Test 94');
test(longestMonotonicSubarray([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11]), 2, 'Test 95');
test(longestMonotonicSubarray([1,2,3,4,5,5,4,3,2,1,1,2,3,4,5,5,4,3,2,1]), 5, 'Test 96');
test(longestMonotonicSubarray([10,20,15,10,5,1,2,3,4,5]), 5, 'Test 97');
test(longestMonotonicSubarray([1,2,3,2,1,2,3,4,3,2,1,2,3,4,5]), 5, 'Test 98');
test(longestMonotonicSubarray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 99');
test(longestMonotonicSubarray([1, 2, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]), 6, 'Test 100');
test(longestMonotonicSubarray([1, 3, 2, 4, 3, 5, 4, 6, 5, 7]), 2, 'Test 101');
test(longestMonotonicSubarray([5,4,5,4,5,4,5,4,5,4,5,4,5,4,5]), 2, 'Test 102');
test(longestMonotonicSubarray([10,9,8,7,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4]), 10, 'Test 103');
test(longestMonotonicSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 104');
test(longestMonotonicSubarray([1,2,3,4,5,4,5,6,5,6,7,8,7,8,9,10]), 5, 'Test 105');
test(longestMonotonicSubarray([1, 3, 5, 7, 9, 11, 13, 15, 14, 12, 10, 8, 6, 4, 2, 4, 6, 8, 10, 12, 14, 16, 18]), 9, 'Test 106');
test(longestMonotonicSubarray([5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5]), 5, 'Test 107');
test(longestMonotonicSubarray([1,1,1,2,2,2,3,3,3,2,2,2,1,1,1]), 2, 'Test 108');
test(longestMonotonicSubarray([1,2,3,4,5,5,4,3,2,1,2,3,4,5]), 5, 'Test 109');
test(longestMonotonicSubarray([5,4,3,2,1,2,3,4,3,2,1]), 5, 'Test 110');
test(longestMonotonicSubarray([2,4,6,8,10,9,7,5,3,1,2,4,6,8,10,9,7,5,3,1]), 6, 'Test 111');
test(longestMonotonicSubarray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5]), 5, 'Test 112');
test(longestMonotonicSubarray([3,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 3, 'Test 113');
test(longestMonotonicSubarray([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 5, 'Test 114');
test(longestMonotonicSubarray([1,2,3,4,5,4,3,2,1,2,3,4,5]), 5, 'Test 115');
test(longestMonotonicSubarray([1,10,2,9,3,8,4,7,5,6,1,10,2,9,3,8,4,7,5,6]), 2, 'Test 116');
test(longestMonotonicSubarray([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), 9, 'Test 117');
test(longestMonotonicSubarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 50, 'Test 118');
test(longestMonotonicSubarray([10,9,8,7,7,6,5,4,3,2]), 6, 'Test 119');
test(longestMonotonicSubarray([1,2,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 120');
test(longestMonotonicSubarray([1,2,3,4,5,6,7,8,9,8]), 9, 'Test 121');
test(longestMonotonicSubarray([5,6,5,6,7,6,7,8,7,8,9,8,9,10,9]), 3, 'Test 122');
test(longestMonotonicSubarray([5,4,3,2,1,2,3,4,5,6]), 6, 'Test 123');
test(longestMonotonicSubarray([2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10]), 2, 'Test 124');
test(longestMonotonicSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 11, 'Test 125');
test(longestMonotonicSubarray([9,8,7,6,5,4,3,2,1,2]), 9, 'Test 126');
test(longestMonotonicSubarray([1, 3, 5, 7, 9, 10, 8, 6, 4, 2]), 6, 'Test 127');
test(longestMonotonicSubarray([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8]), 8, 'Test 128');
test(longestMonotonicSubarray([1, 2, 3, 4, 5, 4, 3, 2, 1, 0]), 6, 'Test 129');
test(longestMonotonicSubarray([3, 3, 2, 2, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1]), 2, 'Test 130');
test(longestMonotonicSubarray([5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), 5, 'Test 131');
test(longestMonotonicSubarray([1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 9, 'Test 132');
test(longestMonotonicSubarray([1,2,3,4,5,3,2,1,2,3,4,5,6,7,8,9]), 9, 'Test 133');
test(longestMonotonicSubarray([50,49,47,45,43,41,39,37,35,33,31,29,27,25,23,21,19,17,15,13,11,9,7,5,3,1]), 26, 'Test 134');
test(longestMonotonicSubarray([10, 20, 30, 25, 20, 15, 10, 5, 1, 2, 3, 4, 5, 6]), 7, 'Test 135');
test(longestMonotonicSubarray([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 3, 'Test 136');
test(longestMonotonicSubarray([2, 3, 1, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11]), 2, 'Test 137');
test(longestMonotonicSubarray([5,6,7,8,9,8,7,6,5,6]), 5, 'Test 138');
test(longestMonotonicSubarray([1,2,3,4,3,2,1,2,3,4]), 4, 'Test 139');

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
