// Test: 2407. Longest Increasing Subsequence Ii
// 113 test cases from LeetCodeDataset
// Run: node test.js

const { lengthOfLIS } = require("./solution");

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

console.log("\n2407. Longest Increasing Subsequence Ii\n");

test(lengthOfLIS([10,9,2,5,3,7,101,18], 10), 3, 'Test 1');
test(lengthOfLIS([5,4,3,2,1], 2), 1, 'Test 2');
test(lengthOfLIS([10,9,2,5,3,7,101,18], 5), 3, 'Test 3');
test(lengthOfLIS([7,4,5,1,8,12,4,7], 5), 4, 'Test 4');
test(lengthOfLIS([5,4,3,2,1], 1), 1, 'Test 5');
test(lengthOfLIS([10,9,2,5,3,7,101,18], 2), 2, 'Test 6');
test(lengthOfLIS([10,9,2,5,3,7,101,18], 4), 3, 'Test 7');
test(lengthOfLIS([9,7,5,3,1], 2), 1, 'Test 8');
test(lengthOfLIS([1,3,5,7,9], 2), 5, 'Test 9');
test(lengthOfLIS([4,2,1,4,3,4,5,8,15], 3), 5, 'Test 10');
test(lengthOfLIS([1,2,3,4,5], 1), 5, 'Test 11');
test(lengthOfLIS([1,5], 1), 1, 'Test 12');
test(lengthOfLIS([5,8,7,1,9,1,5,10,4,3,2,1], 2), 4, 'Test 13');
test(lengthOfLIS([3, 1, 2, 4, 6, 5, 9, 7, 8, 11, 10, 13, 12, 15, 14, 17, 16, 19, 18, 20], 3), 12, 'Test 14');
test(lengthOfLIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 4), 15, 'Test 15');
test(lengthOfLIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 19), 20, 'Test 16');
test(lengthOfLIS([1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10], 9), 2, 'Test 17');
test(lengthOfLIS([3, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5), 19, 'Test 18');
test(lengthOfLIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 10, 'Test 19');
test(lengthOfLIS([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 9), 1, 'Test 20');
test(lengthOfLIS([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 2), 11, 'Test 21');
test(lengthOfLIS([100, 200, 300, 400, 500, 401, 402, 403, 501, 502, 503, 504], 10), 5, 'Test 22');
test(lengthOfLIS([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 1), 2, 'Test 23');
test(lengthOfLIS([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 15), 1, 'Test 24');
test(lengthOfLIS([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 1), 1, 'Test 25');
test(lengthOfLIS([1,3,5,7,9,11,13,15,17,19], 2), 10, 'Test 26');
test(lengthOfLIS([10,20,30,40,50,60,70,80,90,100], 15), 10, 'Test 27');
test(lengthOfLIS([5, 8, 7, 1, 9, 12, 10, 13, 14, 15], 4), 7, 'Test 28');
test(lengthOfLIS([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 2), 20, 'Test 29');
test(lengthOfLIS([5,6,7,8,9,10,1,2,3,4], 4), 6, 'Test 30');
test(lengthOfLIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 10, 'Test 31');
test(lengthOfLIS([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50), 10, 'Test 32');
test(lengthOfLIS([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 1, 'Test 33');
test(lengthOfLIS([1,2,3,4,5,6,7,8,9,10], 1), 10, 'Test 34');
test(lengthOfLIS([1,3,2,4,3,5,4,6,5,7,6,8,7,9], 2), 8, 'Test 35');
test(lengthOfLIS([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 10, 'Test 36');
test(lengthOfLIS([1, 4, 3, 5, 6, 2, 8, 7, 10, 9, 12, 11, 14, 13, 16, 15, 18, 17, 20, 19], 4), 11, 'Test 37');
test(lengthOfLIS([10,9,8,7,6,5,4,3,2,1], 3), 1, 'Test 38');
test(lengthOfLIS([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 1), 20, 'Test 39');
test(lengthOfLIS([9, 1, 4, 7, 3, 2, 5, 8, 6], 3), 4, 'Test 40');
test(lengthOfLIS([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 1), 1, 'Test 41');
test(lengthOfLIS([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2], 1), 3, 'Test 42');
test(lengthOfLIS([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 9), 1, 'Test 43');
test(lengthOfLIS([20,10,30,40,50,60,70,80,90,100,1,2,3,4,5,6,7,8,9,10], 10), 10, 'Test 44');
test(lengthOfLIS([1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 3), 30, 'Test 45');
test(lengthOfLIS([1, 6, 7, 8, 4, 5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 9, 10, 11, 12], 3), 10, 'Test 46');
test(lengthOfLIS([1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6, 5, 6, 7, 6, 7, 8, 7, 8], 2), 8, 'Test 47');
test(lengthOfLIS([1,100000,2,99999,3,99998,4,99997,5,99996], 99999), 6, 'Test 48');
test(lengthOfLIS([2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4], 1), 3, 'Test 49');
test(lengthOfLIS([1,10,1,10,1,10,1,10,1,10], 9), 2, 'Test 50');
test(lengthOfLIS([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 2), 15, 'Test 51');
test(lengthOfLIS([2,3,1,5,4,6,7,8,9,10,11,12,13,14,15], 3), 13, 'Test 52');
test(lengthOfLIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5), 20, 'Test 53');
test(lengthOfLIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 5), 30, 'Test 54');
test(lengthOfLIS([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 14), 15, 'Test 55');
test(lengthOfLIS([3, 1, 5, 2, 6, 4, 7], 3), 4, 'Test 56');
test(lengthOfLIS([1,10,2,9,3,8,4,7,5,6,11,12,13,14,15,16,17,18,19,20], 9), 16, 'Test 57');
test(lengthOfLIS([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1), 1, 'Test 58');
test(lengthOfLIS([5, 4, 3, 2, 1, 2, 3, 4, 5, 6], 3), 6, 'Test 59');
test(lengthOfLIS([100,90,80,70,60,50,40,30,20,10], 10), 1, 'Test 60');
test(lengthOfLIS([5,1,5,1,5,1,5,1,5,1], 4), 2, 'Test 61');
test(lengthOfLIS([3,1,2,3,4,5,6,7,8,9,10], 2), 10, 'Test 62');
test(lengthOfLIS([3,1,2,5,4,8,7,6,10,9], 3), 5, 'Test 63');
test(lengthOfLIS([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991], 10), 1, 'Test 64');
test(lengthOfLIS([1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 1), 2, 'Test 65');
test(lengthOfLIS([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 19), 20, 'Test 66');
test(lengthOfLIS([10,20,30,40,50,60,70,80,90,100], 100), 10, 'Test 67');
test(lengthOfLIS([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 0), 1, 'Test 68');
test(lengthOfLIS([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 1), 1, 'Test 69');
test(lengthOfLIS([5,5,5,5,5,5,5,5,5,5], 0), 1, 'Test 70');
test(lengthOfLIS([100000,99999,99998,99997,99996,99995,99994,99993,99992,99991,99990], 10), 1, 'Test 71');
test(lengthOfLIS([99999,99998,99997,99996,99995,99994,99993,99992,99991,99990,99989,99988,99987,99986,99985], 5), 1, 'Test 72');
test(lengthOfLIS([1,10,19,28,37,46,55,64,73,82,91,100,92,83,74,65,56,47,38,29], 9), 12, 'Test 73');
test(lengthOfLIS([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 2), 10, 'Test 74');
test(lengthOfLIS([3,1,5,4,7,6,9,8,11,10], 2), 5, 'Test 75');
test(lengthOfLIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5), 15, 'Test 76');
test(lengthOfLIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 2), 20, 'Test 77');
test(lengthOfLIS([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 1), 2, 'Test 78');
test(lengthOfLIS([3, 10, 2, 1, 20, 15, 25, 28, 30, 100], 10), 6, 'Test 79');
test(lengthOfLIS([10,20,30,40,50,1,2,3,4,5], 10), 5, 'Test 80');
test(lengthOfLIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 10, 'Test 81');
test(lengthOfLIS([100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1,0], 10), Error: list index out of range, 'Test 82');
test(lengthOfLIS([20,19,18,17,16,15,14,13,12,11,10], 5), 1, 'Test 83');
test(lengthOfLIS([19, 17, 15, 13, 11, 9, 7, 5, 3, 1], 4), 1, 'Test 84');
test(lengthOfLIS([50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000], 0), 1, 'Test 85');
test(lengthOfLIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], 2), 40, 'Test 86');
test(lengthOfLIS([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10], 5), 20, 'Test 87');
test(lengthOfLIS([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10], 3), 10, 'Test 88');
test(lengthOfLIS([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 90), 10, 'Test 89');
test(lengthOfLIS([5, 4, 3, 2, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5), 16, 'Test 90');
test(lengthOfLIS([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 0), 1, 'Test 91');
test(lengthOfLIS([1, 100, 2, 99, 3, 98, 4, 97, 5, 96, 6, 95, 7, 94, 8, 93], 90), 9, 'Test 92');
test(lengthOfLIS([50000, 50001, 50002, ..., 100000, 49999, 49998, ..., 1], 50000), Error: '>' not supported between instances of 'ellipsis' and 'int', 'Test 93');
test(lengthOfLIS([5, 3, 4, 8, 9, 10, 20, 30, 15, 25, 35, 45, 55, 65, 75], 20), 12, 'Test 94');
test(lengthOfLIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2), 10, 'Test 95');
test(lengthOfLIS([1, 2, 1, 3, 2, 4, 3, 5, 4, 6], 2), 6, 'Test 96');
test(lengthOfLIS([1, 2, 3, 4, 5, 3, 4, 5, 6, 7, 8, 6, 7, 8, 9, 10], 3), 10, 'Test 97');
test(lengthOfLIS([1,4,7,10,13,16,19,22,25,28,31,34,37,40,43,46,49,52,55,58], 2), 1, 'Test 98');
test(lengthOfLIS([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 2), 20, 'Test 99');
test(lengthOfLIS([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5], 3), 1, 'Test 100');
test(lengthOfLIS([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1), 1, 'Test 101');
test(lengthOfLIS([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 5), 10, 'Test 102');
test(lengthOfLIS([4, 3, 5, 4, 7, 6, 8, 9, 10, 11, 12], 3), 8, 'Test 103');
test(lengthOfLIS([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 1), 1, 'Test 104');
test(lengthOfLIS([1000, 900, 800, 700, 600, 500, 400, 300, 200, 100], 100), 1, 'Test 105');
test(lengthOfLIS([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 1, 'Test 106');
test(lengthOfLIS([4, 3, 2, 1, 100, 101, 102, 103, 104], 3), 5, 'Test 107');
test(lengthOfLIS([3,10,2,1,20,1,15,5,17,6,8,9,11,13,14], 4), 8, 'Test 108');
test(lengthOfLIS([1,2,3,4,5,6,7,8,9,10], 2), 10, 'Test 109');
test(lengthOfLIS([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5], 5), 20, 'Test 110');
test(lengthOfLIS([20,19,18,17,16,15,14,13,12,11], 3), 1, 'Test 111');
test(lengthOfLIS([100000, 99999, 99998, ..., 1], 1000), Error: '>' not supported between instances of 'ellipsis' and 'int', 'Test 112');
test(lengthOfLIS([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 50), 15, 'Test 113');

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
