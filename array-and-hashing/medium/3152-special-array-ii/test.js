// Test: 3152. Special Array Ii
// 86 test cases from LeetCodeDataset
// Run: node test.js

const { isArraySpecial } = require("./solution");

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

console.log("\n3152. Special Array Ii\n");

test(isArraySpecial([2,2,2,2,2], [[0,4]]), [false], 'Test 1');
test(isArraySpecial([2,4,6,8,10], [[0,0],[1,1],[2,2],[3,3],[4,4],[0,4]]), [true, true, true, true, true, false], 'Test 2');
test(isArraySpecial([1,3,5,7,9], [[0,1],[1,2],[2,3],[3,4]]), [false, false, false, false], 'Test 3');
test(isArraySpecial([1,3,5,7,9], [[0,0],[1,1],[2,2],[3,3],[4,4],[0,4]]), [true, true, true, true, true, false], 'Test 4');
test(isArraySpecial([1,2,3,4,5], [[0,1],[1,2],[2,3],[3,4]]), [true, true, true, true], 'Test 5');
test(isArraySpecial([1,2,3,4,5], [[0,0],[1,2],[2,4]]), [true, true, true], 'Test 6');
test(isArraySpecial([3,4,1,2,6], [[0,4]]), [false], 'Test 7');
test(isArraySpecial([1,3,5,7,9], [[0,4]]), [false], 'Test 8');
test(isArraySpecial([4,3,1,6], [[0,2],[2,3]]), [false, true], 'Test 9');
test(isArraySpecial([10,15,20,25,30], [[0,1],[1,2],[2,3],[3,4],[0,4]]), [true, true, true, true, true], 'Test 10');
test(isArraySpecial([2,2,2,2], [[0,1],[1,2],[2,3]]), [false, false, false], 'Test 11');
test(isArraySpecial([1,2,3,4,5,6,7,8,9,10], [[0,9],[1,8],[2,7],[3,6],[4,5]]), [true, true, true, true, true], 'Test 12');
test(isArraySpecial([2,4,6,8,10], [[0,4]]), [false], 'Test 13');
test(isArraySpecial([1,2,3,4,5,6], [[0,1],[1,2],[2,3],[3,4],[4,5]]), [true, true, true, true, true], 'Test 14');
test(isArraySpecial([1,2,1,2,1], [[0,0],[1,1],[2,2],[3,3],[4,4],[0,4]]), [true, true, true, true, true, true], 'Test 15');
test(isArraySpecial([10,21,32,43,54,65,76,87,98,109,120,131,142,153,164,175,186,197,208,219], [[0,19],[1,18],[2,17],[3,16],[4,15]]), [true, true, true, true, true], 'Test 16');
test(isArraySpecial([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,15],[16,17],[18,19]]), [false, false, false, false, false, false, false, false, false, false], 'Test 17');
test(isArraySpecial([1, 3, 2, 5, 4, 7, 6, 9, 8, 11], [[0,9],[2,7],[4,5],[1,8],[3,6]]), [false, true, true, true, true], 'Test 18');
test(isArraySpecial([42,23,17,34,19,28,39,44,27,56,65,74,83,92,101], [[0,14],[1,13],[2,12],[3,11],[4,10],[5,9],[6,8],[0,7],[8,14]]), [false, false, true, true, true, true, true, false, true], 'Test 19');
test(isArraySpecial([10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29], [[0,5],[5,10],[10,15],[15,20],[0,19]]), Error: list index out of range, 'Test 20');
test(isArraySpecial([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 15], [16, 16], [17, 17], [18, 18], [19, 19], [0, 19], [1, 18], [2, 17], [3, 16], [4, 15], [5, 14], [6, 13], [7, 12], [8, 11], [9, 10]]), [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 21');
test(isArraySpecial([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [[0,19],[1,18],[2,17],[3,16],[4,15],[5,14],[6,13],[7,12],[8,11],[9,10]]), [false, false, false, false, false, false, false, false, false, false], 'Test 22');
test(isArraySpecial([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [[0, 13], [2, 5], [6, 8], [10, 12]]), [true, true, true, true], 'Test 23');
test(isArraySpecial([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [[0,19],[1,18],[2,17],[3,16],[4,15],[5,14],[6,13],[7,12],[8,11],[9,10]]), [true, true, true, true, true, true, true, true, true, true], 'Test 24');
test(isArraySpecial([100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115], [[0,15],[0,14],[1,13],[2,12],[3,11],[4,10],[5,9],[6,8],[7,7],[0,0],[15,15]]), [true, true, true, true, true, true, true, true, true, true, true], 'Test 25');
test(isArraySpecial([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1], [[0, 4], [5, 9], [10, 14], [2, 8]]), [false, false, false, false], 'Test 26');
test(isArraySpecial([2, 3, 5, 8, 10, 13, 17, 20, 22, 25], [[0, 9], [1, 3], [5, 7], [8, 9]]), [false, false, false, true], 'Test 27');
test(isArraySpecial([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8], [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,15],[0,15],[1,4],[2,9]]), [false, false, false, false, false, false, false, false, false, false, false], 'Test 28');
test(isArraySpecial([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], [[0,5],[5,10],[10,15],[15,20],[20,25],[0,29]]), [true, true, true, true, true, true], 'Test 29');
test(isArraySpecial([8,10,12,14,16,18,20,22,24], [[0,1],[2,3],[4,5],[6,7],[0,8],[1,6]]), [false, false, false, false, false, false], 'Test 30');
test(isArraySpecial([10,11,10,11,10,11,10,11,10,11], [[0,9],[1,8],[2,7],[3,6],[4,5]]), [true, true, true, true, true], 'Test 31');
test(isArraySpecial([2,5,8,3,6,7,9,10], [[0,3],[1,5],[4,7],[0,7]]), [true, true, false, false], 'Test 32');
test(isArraySpecial([1,3,5,7,9,11,13,15,17,19], [[0,9],[1,8],[2,7],[3,6],[4,5]]), [false, false, false, false, false], 'Test 33');
test(isArraySpecial([100000, 99999, 100000, 99999, 100000, 99999, 100000, 99999, 100000, 99999], [[0,4],[5,9],[0,9]]), [true, true, true], 'Test 34');
test(isArraySpecial([2, 4, 6, 8, 10, 1, 3, 5, 7, 9], [[0, 9], [0, 2], [4, 5], [6, 8]]), [false, false, true, false], 'Test 35');
test(isArraySpecial([1,2,3,4,5,6,7,8,9,10], [[0,9],[2,7],[4,5],[1,8]]), [true, true, true, true], 'Test 36');
test(isArraySpecial([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [[0,19],[1,18],[2,17],[3,16],[4,15],[5,14],[6,13],[7,12],[8,11],[9,10]]), [true, true, true, true, true, true, true, true, true, true], 'Test 37');
test(isArraySpecial([2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11], [[0, 19], [1, 18], [2, 17], [3, 16], [4, 15], [5, 14]]), [false, false, false, false, false, false], 'Test 38');
test(isArraySpecial([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [[0,19],[1,18],[2,17],[3,16],[4,15]]), [true, true, true, true, true], 'Test 39');
test(isArraySpecial([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], [[0,19],[1,18],[2,17],[3,16],[4,15],[5,14],[6,13],[7,12],[8,11],[9,10],[0,1],[1,0],[18,19],[0,19],[1,18]]), [false, false, false, false, false, false, false, false, false, false, false, true, false, false, false], 'Test 40');
test(isArraySpecial([2,3,5,7,11,13], [[0,5],[1,4],[2,3],[0,1],[3,5]]), [false, false, false, true, false], 'Test 41');
test(isArraySpecial([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [[0, 19], [5, 15], [10, 14], [0, 0], [19, 19]]), [true, true, true, true, true], 'Test 42');
test(isArraySpecial([1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 12, 12, 13, 14], [[0, 19], [1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [0, 1], [2, 3], [4, 5], [6, 7], [8, 9], [10, 11], [12, 13], [14, 15], [16, 17], [18, 19]]), [false, false, true, true, false, true, true, false, true, true, true, true, false, true, true, false, true, true, false, true], 'Test 43');
test(isArraySpecial([2,3,4,5,6,7,8,9,10], [[0,8],[1,7],[2,6],[3,5],[4,4],[5,5],[6,6],[7,7],[8,8]]), [true, true, true, true, true, true, true, true, true], 'Test 44');
test(isArraySpecial([100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114], [[0,14],[1,13],[2,12],[3,11],[4,10],[5,9],[6,8]]), [true, true, true, true, true, true, true], 'Test 45');
test(isArraySpecial([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], [[0,29],[1,28],[2,27],[3,26],[4,25],[5,24],[6,23],[7,22],[8,21],[9,20]]), [true, true, true, true, true, true, true, true, true, true], 'Test 46');
test(isArraySpecial([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32], [[0,15],[1,14],[2,13],[3,12],[4,11],[5,10],[6,9],[7,8],[0,7],[7,14],[1,6],[8,15]]), [false, false, false, false, false, false, false, false, false, false, false, false], 'Test 47');
test(isArraySpecial([1,2,2,3,4,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [[0,21],[1,20],[2,19],[3,18],[4,17]]), [false, false, false, false, false], 'Test 48');
test(isArraySpecial([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], [[0,29],[1,28],[2,27],[3,26],[4,25]]), [true, true, true, true, true], 'Test 49');
test(isArraySpecial([99999,1,99998,2,99997,3,99996,4,99995,5], [[0,9],[1,8],[2,7],[3,6],[4,5],[0,4],[5,9]]), [false, false, false, false, false, false, false], 'Test 50');
test(isArraySpecial([2, 3, 4, 3, 2, 3, 4, 3, 2, 3], [[0,9],[2,7],[4,5],[1,8]]), [true, true, true, true], 'Test 51');
test(isArraySpecial([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [[0,14],[1,13],[2,12],[3,11],[4,10],[5,9],[6,8],[0,7],[8,14]]), [true, true, true, true, true, true, true, true, true], 'Test 52');
test(isArraySpecial([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991], [[0, 9], [1, 8], [3, 7], [5, 9]]), [true, true, true, true], 'Test 53');
test(isArraySpecial([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], [[0,29],[1,28],[2,27],[3,26],[4,25],[5,24],[6,23],[7,22],[8,21],[9,20]]), [true, true, true, true, true, true, true, true, true, true], 'Test 54');
test(isArraySpecial([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], [[0,19],[1,18],[2,17],[3,16],[4,15],[5,14],[6,13],[7,12],[8,11],[9,10]]), [false, false, false, false, false, false, false, false, false, false], 'Test 55');
test(isArraySpecial([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], [[0, 14], [1, 13], [2, 12], [3, 11], [4, 10], [5, 9]]), [false, false, false, false, false, false], 'Test 56');
test(isArraySpecial([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], [[0,19],[1,18],[2,17],[3,16],[4,15]]), [true, true, true, true, true], 'Test 57');
test(isArraySpecial([2,3,5,7,11,13,17,19], [[0,1],[1,2],[0,3],[3,7],[0,7]]), [true, false, false, false, false], 'Test 58');
test(isArraySpecial([100,201,102,203,104,205,106,207,108,209,110], [[0,10],[1,9],[2,8],[3,7],[4,6],[0,1],[5,5]]), [true, true, true, true, true, true, true], 'Test 59');
test(isArraySpecial([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], [[0,29],[1,28],[2,27],[3,26],[4,25]]), [true, true, true, true, true], 'Test 60');
test(isArraySpecial([10, 11, 12, 13, 14, 15, 16, 17], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[0,7]]), [true, true, true, true, true, true, true, true], 'Test 61');
test(isArraySpecial([2,4,6,8,10,12,14,16,18,20], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[0,9]]), [false, false, false, false, false, false, false, false, false, false], 'Test 62');
test(isArraySpecial([9,8,7,6,5,4,3,2,1,0], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[0,9]]), [true, true, true, true, true, true, true, true, true, true], 'Test 63');
test(isArraySpecial([1,3,5,7,9,11,13,15,17,19], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[0,9]]), [false, false, false, false, false, false, false, false, false, false], 'Test 64');
test(isArraySpecial([2,4,6,8,10,12,14,16,18,20], [[0,9],[1,3],[2,5],[3,7],[4,9]]), [false, false, false, false, false], 'Test 65');
test(isArraySpecial([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [[0,1],[2,3],[4,5],[6,7],[8,9],[0,9]]), [false, false, false, false, false, false], 'Test 66');
test(isArraySpecial([100000, 50000, 25000, 12500, 6250, 3125, 1562, 781, 390, 195], [[0, 9], [1, 3], [4, 7], [6, 8]]), [false, false, true, true], 'Test 67');
test(isArraySpecial([2,4,6,8,10,12,14,16,18,20], [[0,9],[1,8],[2,7],[3,6],[4,5]]), [false, false, false, false, false], 'Test 68');
test(isArraySpecial([2,4,6,8,10,12,14,16,18,20], [[0,3],[4,7],[5,9],[1,8]]), [false, false, false, false], 'Test 69');
test(isArraySpecial([3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], [[0,9],[5,14],[10,19],[0,19],[1,18]]), [true, true, true, true, true], 'Test 70');
test(isArraySpecial([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], [[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9]]), [false, false, false, false, false, false, false, false], 'Test 71');
test(isArraySpecial([101, 202, 303, 404, 505, 606, 707, 808, 909, 1010], [[0,9],[2,7],[4,5],[1,8]]), [true, true, true, true], 'Test 72');
test(isArraySpecial([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [[0,14],[1,13],[2,12],[3,11],[4,10],[5,9],[6,8]]), [true, true, true, true, true, true, true], 'Test 73');
test(isArraySpecial([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], [[0,29],[1,28],[2,27],[3,26],[4,25]]), Error: list index out of range, 'Test 74');
test(isArraySpecial([9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9], [[0,9],[9,18],[0,18],[8,10],[1,17],[2,16],[3,15],[4,14],[5,13],[6,12],[7,11],[0,1],[1,0],[17,18],[0,18]]), [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 75');
test(isArraySpecial([21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [[0,29],[10,29],[1,28],[2,27],[3,26]]), [true, true, true, true, true], 'Test 76');
test(isArraySpecial([101,102,103,104,105,106,107,108,109,110], [[0,9],[1,8],[2,7],[3,6],[4,5],[0,5],[5,9]]), [true, true, true, true, true, true, true], 'Test 77');
test(isArraySpecial([1,2,3,2,1,2,3,2,1,2], [[0,4],[1,5],[2,6],[3,7],[4,8],[5,9]]), [true, true, true, true, true, true], 'Test 78');
test(isArraySpecial([10,11,12,13,14,15,16,17,18,19], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]]), [true, true, true, true, true, true, true, true, true], 'Test 79');
test(isArraySpecial([2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], [[0,29],[1,28],[2,27],[3,26],[4,25]]), Error: list index out of range, 'Test 80');
test(isArraySpecial([2,4,6,8,10,12,14,16,18,20], [[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]]), [true, true, true, true, true, true, true, true, true, true], 'Test 81');
test(isArraySpecial([1,3,5,7,9,11,13,15,17,19], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]]), [false, false, false, false, false, false, false, false, false], 'Test 82');
test(isArraySpecial([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47], [[0,2],[2,4],[4,6],[6,8],[8,10],[10,12],[12,14]]), [false, false, false, false, false, false, false], 'Test 83');
test(isArraySpecial([1,2,3,2,3,4,3,4,5,4,5,6,5,6,7], [[0,2],[2,4],[4,6],[6,8],[8,10],[10,12],[12,14]]), [true, true, true, true, true, true, true], 'Test 84');
test(isArraySpecial([2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3], [[0,9],[5,14],[10,19],[0,19],[1,18]]), [true, true, true, true, true], 'Test 85');
test(isArraySpecial([1,3,5,7,9,11,13,15,17,19], [[0,3],[4,7],[5,9],[1,8]]), [false, false, false, false], 'Test 86');

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
