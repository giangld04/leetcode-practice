// Test: 3409. Longest Subsequence With Decreasing Adjacent Difference
// 121 test cases from LeetCodeDataset
// Run: node test.js

const { longestSubsequence } = require("./solution");

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

console.log("\n3409. Longest Subsequence With Decreasing Adjacent Difference\n");

test(longestSubsequence([1,3,2,4,3,5,4,6,5,7]), 6, 'Test 1');
test(longestSubsequence([1,10,1,10,1,10,1,10]), 8, 'Test 2');
test(longestSubsequence([300,1,300,2,300,3,300]), 7, 'Test 3');
test(longestSubsequence([3,3,3,3,3,3,3,3,3,3]), 10, 'Test 4');
test(longestSubsequence([100,150,100,200,100,200,100]), 5, 'Test 5');
test(longestSubsequence([300,299,298,297,296,295,294]), 7, 'Test 6');
test(longestSubsequence([6,5,3,4,2,1]), 4, 'Test 7');
test(longestSubsequence([1,300,2,299,3,298,4,297]), 8, 'Test 8');
test(longestSubsequence([10,10,10,10,10,10,10,10,10,10]), 10, 'Test 9');
test(longestSubsequence([300,1,300,1,300]), 5, 'Test 10');
test(longestSubsequence([1,2,3,4,5]), 5, 'Test 11');
test(longestSubsequence([1,100,2,99,3,98,4,97]), 8, 'Test 12');
test(longestSubsequence([1,1,1,1,1]), 5, 'Test 13');
test(longestSubsequence([100,100,100,100,100]), 5, 'Test 14');
test(longestSubsequence([1,2,1,2,1,2]), 6, 'Test 15');
test(longestSubsequence([1,2,3,2,1,2,3,2,1,2]), 10, 'Test 16');
test(longestSubsequence([5,4,3,2,1]), 5, 'Test 17');
test(longestSubsequence([10,20,10,19,10,20]), 5, 'Test 18');
test(longestSubsequence([1,2,3,2,1,2,3]), 7, 'Test 19');
test(longestSubsequence([16,6,3]), 3, 'Test 20');
test(longestSubsequence([1,2,2,3,3,4,4,5,5]), 6, 'Test 21');
test(longestSubsequence([300,299,298,297,296,295,294,293,292,291]), 10, 'Test 22');
test(longestSubsequence([100,200,100,150,50,250,150]), 5, 'Test 23');
test(longestSubsequence([1,2,3,4,3,2,1,2,3,4]), 10, 'Test 24');
test(longestSubsequence([1,3,2,4,3,5,4]), 5, 'Test 25');
test(longestSubsequence([150, 100, 150, 200, 100, 150, 200, 250, 150]), 7, 'Test 26');
test(longestSubsequence([150, 149, 148, 147, 146, 145, 144, 143, 142, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132, 131]), 20, 'Test 27');
test(longestSubsequence([10, 20, 15, 30, 25, 35, 30, 40, 35, 45, 40, 50, 45, 55, 50, 60, 55, 65, 60, 70, 65, 75, 70, 80, 75, 85, 80, 90, 85, 95]), 16, 'Test 28');
test(longestSubsequence([300, 200, 100, 150, 250, 50, 350, 250, 200]), 6, 'Test 29');
test(longestSubsequence([300, 1, 299, 2, 298, 3, 297, 4, 296, 5, 295, 6, 294, 7, 293, 8]), 16, 'Test 30');
test(longestSubsequence([150, 200, 100, 250, 50, 300, 75, 175, 125, 225, 275, 325, 350, 375, 400, 425, 450, 475, 500]), 14, 'Test 31');
test(longestSubsequence([150, 250, 100, 200, 50, 150, 250, 100, 200, 50, 150, 250, 100, 200, 50]), 8, 'Test 32');
test(longestSubsequence([300, 1, 299, 2, 298, 3, 297, 4, 296, 5]), 10, 'Test 33');
test(longestSubsequence([150, 200, 250, 300, 250, 200, 150, 100, 50, 0, 50, 100, 150, 200, 250]), 13, 'Test 34');
test(longestSubsequence([1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 1, 10, 2, 9, 3, 8, 4, 7, 5, 6]), 13, 'Test 35');
test(longestSubsequence([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4]), 20, 'Test 36');
test(longestSubsequence([10, 20, 30, 25, 40, 50, 60, 55, 70, 80, 75, 90, 100, 95, 110]), 11, 'Test 37');
test(longestSubsequence([1, 3, 5, 2, 4, 6, 3, 5, 7, 4, 6, 8, 5, 7, 9, 6, 8, 10]), 11, 'Test 38');
test(longestSubsequence([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10]), 9, 'Test 39');
test(longestSubsequence([10, 20, 30, 40, 50, 40, 30, 20, 10, 20, 30, 40, 50, 40, 30, 20, 10]), 17, 'Test 40');
test(longestSubsequence([200, 150, 100, 150, 200, 250, 200, 150, 100, 150, 200]), 11, 'Test 41');
test(longestSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 19, 'Test 42');
test(longestSubsequence([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 15, 'Test 43');
test(longestSubsequence([250, 200, 225, 150, 175, 100, 125, 50, 75, 0, 25, 100, 50, 75, 25]), 8, 'Test 44');
test(longestSubsequence([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14, 17, 16, 19, 18, 21, 20]), 12, 'Test 45');
test(longestSubsequence([100, 200, 300, 200, 100, 200, 300, 200, 100, 200, 300, 200, 100]), 13, 'Test 46');
test(longestSubsequence([150, 200, 100, 150, 250, 200, 150, 100, 50, 100, 150, 200, 250, 300, 250, 200, 150, 100, 50, 100, 150, 200, 250]), 21, 'Test 47');
test(longestSubsequence([50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 15, 'Test 48');
test(longestSubsequence([10, 20, 30, 25, 15, 10, 5, 15, 25, 35, 45]), 8, 'Test 49');
test(longestSubsequence([120, 140, 130, 150, 160, 170, 180, 190, 200, 190, 180, 170, 160, 150, 140]), 14, 'Test 50');
test(longestSubsequence([20, 40, 30, 50, 40, 60, 50, 70, 60, 80, 70, 90, 80, 100, 90, 110, 100]), 10, 'Test 51');
test(longestSubsequence([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 14, 'Test 52');
test(longestSubsequence([300, 250, 200, 150, 100, 50, 0]), 7, 'Test 53');
test(longestSubsequence([300, 299, 298, 297, 296, 295, 294, 293, 292, 291]), 10, 'Test 54');
test(longestSubsequence([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10]), 11, 'Test 55');
test(longestSubsequence([50, 100, 150, 200, 250, 300, 250, 200, 150, 100, 50, 100, 150, 200, 250, 300, 250, 200, 150, 100, 50]), 21, 'Test 56');
test(longestSubsequence([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15]), 16, 'Test 57');
test(longestSubsequence([300, 200, 100, 50, 25, 10, 5, 2, 1]), 9, 'Test 58');
test(longestSubsequence([20, 10, 30, 25, 40, 15, 50, 35, 10, 5, 60]), 5, 'Test 59');
test(longestSubsequence([5, 10, 5, 10, 5, 10, 5, 10, 5, 10, 5]), 11, 'Test 60');
test(longestSubsequence([10, 30, 20, 40, 30, 50, 40, 60, 50, 70, 60, 80, 70, 90, 80]), 9, 'Test 61');
test(longestSubsequence([1, 5, 3, 9, 7, 13, 11, 17, 15, 21, 19, 25, 23, 29, 27, 33, 31, 37, 35, 41, 39, 45, 43, 49, 47, 53, 51, 57, 55, 61, 59, 65]), 17, 'Test 62');
test(longestSubsequence([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 18, 'Test 63');
test(longestSubsequence([150, 200, 250, 300, 250, 200, 150, 100, 50, 0]), 10, 'Test 64');
test(longestSubsequence([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 19, 'Test 65');
test(longestSubsequence([10, 15, 10, 20, 15, 25, 20, 30, 25, 35, 30, 40, 35, 45, 40, 50, 45]), 10, 'Test 66');
test(longestSubsequence([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99]), 50, 'Test 67');
test(longestSubsequence([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 28, 'Test 68');
test(longestSubsequence([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1]), 21, 'Test 69');
test(longestSubsequence([300, 1, 300, 2, 300, 3, 300, 4, 300, 5]), 10, 'Test 70');
test(longestSubsequence([299, 200, 199, 150, 250, 100, 50, 200, 100]), 6, 'Test 71');
test(longestSubsequence([1, 3, 5, 7, 9, 8, 6, 4, 2, 1]), 7, 'Test 72');
test(longestSubsequence([1, 3, 2, 4, 3, 5, 4, 6, 5, 7]), 6, 'Test 73');
test(longestSubsequence([10, 20, 30, 25, 40, 35, 50, 45, 60, 55, 70, 65, 80, 75]), 9, 'Test 74');
test(longestSubsequence([300, 200, 100, 200, 300, 200, 100, 200, 300, 200, 100]), 11, 'Test 75');
test(longestSubsequence([1, 10, 1, 20, 1, 30, 1, 40, 1, 50, 1, 60, 1, 70, 1, 80, 1, 90, 1, 100]), 11, 'Test 76');
test(longestSubsequence([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 37, 'Test 77');
test(longestSubsequence([10, 20, 15, 25, 30, 20, 10, 30, 20, 10, 40, 30, 20, 10, 50, 40, 30, 20, 10]), 11, 'Test 78');
test(longestSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 15, 'Test 79');
test(longestSubsequence([10, 20, 15, 30, 25, 40, 35, 50, 45, 60]), 6, 'Test 80');
test(longestSubsequence([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]), 25, 'Test 81');
test(longestSubsequence([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12]), 8, 'Test 82');
test(longestSubsequence([300, 1, 300, 2, 300, 3, 300, 4, 300]), 9, 'Test 83');
test(longestSubsequence([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 20, 'Test 84');
test(longestSubsequence([15, 30, 15, 45, 30, 60, 45, 75, 60, 90, 75, 105, 90, 120, 105]), 9, 'Test 85');
test(longestSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 86');
test(longestSubsequence([150, 100, 50, 100, 150, 200, 250, 300, 250, 200, 150, 100, 50]), 13, 'Test 87');
test(longestSubsequence([300, 100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200]), 11, 'Test 88');
test(longestSubsequence([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 10, 'Test 89');
test(longestSubsequence([100, 100, 200, 200, 100, 100, 200, 200, 100, 100]), 6, 'Test 90');
test(longestSubsequence([150, 200, 150, 100, 150, 200, 150, 100, 150]), 9, 'Test 91');
test(longestSubsequence([100, 150, 100, 200, 100, 150, 100, 200, 100, 150, 100, 200, 100, 150]), 8, 'Test 92');
test(longestSubsequence([10, 20, 10, 30, 20, 40, 30, 50, 40, 60, 50, 70, 60, 80, 70]), 9, 'Test 93');
test(longestSubsequence([15, 10, 12, 5, 8, 7, 3, 6, 4, 9, 2, 11, 1, 14, 13]), 8, 'Test 94');
test(longestSubsequence([150, 100, 200, 150, 100, 250, 150, 100, 300, 200]), 6, 'Test 95');
test(longestSubsequence([250, 100, 150, 200, 100, 150, 200, 100, 150, 200]), 8, 'Test 96');
test(longestSubsequence([300, 299, 298, 297, 296, 295, 294, 293, 292, 291, 290, 289, 288, 287, 286, 285, 284, 283, 282, 281, 280]), 21, 'Test 97');
test(longestSubsequence([50, 100, 50, 150, 100, 200, 150, 250, 200, 300]), 6, 'Test 98');
test(longestSubsequence([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]), 17, 'Test 99');
test(longestSubsequence([300, 299, 298, 297, 296, 295, 294, 293, 292, 291, 290]), 11, 'Test 100');
test(longestSubsequence([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11]), 10, 'Test 101');
test(longestSubsequence([200, 150, 250, 100, 300, 50, 150, 250, 200, 100, 300, 50]), 6, 'Test 102');
test(longestSubsequence([1, 3, 5, 3, 1, 3, 5, 3, 1, 3, 5, 3, 1, 3, 5, 3, 1, 3, 5, 3, 1, 3, 5, 3, 1]), 25, 'Test 103');
test(longestSubsequence([1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 5, 7, 4, 8, 3, 9, 2, 10, 1, 11]), 15, 'Test 104');
test(longestSubsequence([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5]), 19, 'Test 105');
test(longestSubsequence([100, 150, 100, 150, 100, 150, 100, 150, 100, 150]), 10, 'Test 106');
test(longestSubsequence([1, 300, 2, 299, 3, 298, 4, 297, 5, 296, 6, 295, 7, 294, 8, 293]), 16, 'Test 107');
test(longestSubsequence([200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100]), 14, 'Test 108');
test(longestSubsequence([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12]), 11, 'Test 109');
test(longestSubsequence([1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2]), 13, 'Test 110');
test(longestSubsequence([300, 250, 200, 150, 100, 50, 100, 150, 200, 250, 300, 250, 200, 150, 100, 50]), 16, 'Test 111');
test(longestSubsequence([2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), 20, 'Test 112');
test(longestSubsequence([300, 250, 200, 150, 100, 50, 100, 150, 200, 250, 300]), 11, 'Test 113');
test(longestSubsequence([300, 299, 298, 297, 296, 295, 294, 293, 292, 291, 290, 289, 288, 287, 286, 285]), 16, 'Test 114');
test(longestSubsequence([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 20, 'Test 115');
test(longestSubsequence([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16, 15, 17, 16, 18, 17]), 18, 'Test 116');
test(longestSubsequence([100, 150, 200, 250, 300, 250, 200, 150, 100, 50, 0, 50, 100, 150, 200]), 13, 'Test 117');
test(longestSubsequence([50, 100, 75, 125, 100, 150, 125, 175, 150, 200, 175, 225, 200]), 8, 'Test 118');
test(longestSubsequence([300, 290, 280, 270, 260, 250, 240, 230, 220, 210, 200, 190, 180, 170, 160, 150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 1]), 31, 'Test 119');
test(longestSubsequence([300, 250, 200, 150, 100, 50, 100, 150, 200, 250, 300, 250, 200, 150, 100, 50, 100, 150, 200, 250, 300, 250, 200]), 23, 'Test 120');
test(longestSubsequence([50, 100, 150, 100, 50, 100, 150, 100, 50, 100, 150, 100, 50]), 13, 'Test 121');

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
