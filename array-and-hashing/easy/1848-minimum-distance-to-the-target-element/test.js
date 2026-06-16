// Test: 1848. Minimum Distance To The Target Element
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { getMinDistance } = require("./solution");

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

console.log("\n1848. Minimum Distance To The Target Element\n");

test(getMinDistance([5,1,4,1], 1, 2), 1, 'Test 1');
test(getMinDistance([1,5,3,4,5], 5, 2), 1, 'Test 2');
test(getMinDistance([4,1,3,5,2], 2, 1), 3, 'Test 3');
test(getMinDistance([4,1,3,5,6], 3, 1), 1, 'Test 4');
test(getMinDistance([4,1,3,5,2], 1, 2), 1, 'Test 5');
test(getMinDistance([5,1,4,1,2], 1, 0), 1, 'Test 6');
test(getMinDistance([1], 1, 0), 0, 'Test 7');
test(getMinDistance([4,1,3,5,6], 1, 2), 1, 'Test 8');
test(getMinDistance([5,1,4,1,2], 1, 1), 0, 'Test 9');
test(getMinDistance([5,1,4,1,2], 1, 2), 1, 'Test 10');
test(getMinDistance([1,1,1,1,1,1,1,1,1,1], 1, 0), 0, 'Test 11');
test(getMinDistance([1,2,3,4,5], 5, 3), 1, 'Test 12');
test(getMinDistance([7,8,9,5,6,5,4,5,3,5], 5, 4), 1, 'Test 13');
test(getMinDistance([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 15, 9), 5, 'Test 14');
test(getMinDistance([5,5,5,5,5,5,5,5,5,5], 5, 9), 0, 'Test 15');
test(getMinDistance([100,200,300,400,500,600,700,800,900,1000], 500, 3), 1, 'Test 16');
test(getMinDistance([7,2,5,8,3,9,1,5], 5, 4), 2, 'Test 17');
test(getMinDistance([3,6,9,12,15,18,21,24,27,30], 18, 8), 3, 'Test 18');
test(getMinDistance([5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5], 3, 5), 3, 'Test 19');
test(getMinDistance([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 19, 4), 5, 'Test 20');
test(getMinDistance([10,20,30,40,50,60,70,80,90,100], 30, 0), 2, 'Test 21');
test(getMinDistance([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 2, 15), 0, 'Test 22');
test(getMinDistance([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 6, 9), 6, 'Test 23');
test(getMinDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10, 19), 10, 'Test 24');
test(getMinDistance([1, 3, 5, 2, 4, 3, 2, 1, 3], 3, 5), 0, 'Test 25');
test(getMinDistance([10,23,56,78,90,12,34,56,78,90], 56, 5), 2, 'Test 26');
test(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2, 10), 0, 'Test 27');
test(getMinDistance([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 15, 20), 6, 'Test 28');
test(getMinDistance([100,200,300,400,500,600,700,800,900,1000], 700, 0), 6, 'Test 29');
test(getMinDistance([10,20,30,40,50,60,70,80,90,100], 60, 5), 0, 'Test 30');
test(getMinDistance([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 20, 15), 15, 'Test 31');
test(getMinDistance([5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5], -3, 8), 0, 'Test 32');
test(getMinDistance([10,9,8,7,6,5,4,3,2,1], 7, 9), 6, 'Test 33');
test(getMinDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10, 14), 5, 'Test 34');
test(getMinDistance([1,2,3,4,5,6,7,8,9,10], 1, 9), 9, 'Test 35');
test(getMinDistance([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 15, 9), 4, 'Test 36');
test(getMinDistance([1,3,5,7,9,11,13,15,17,19], 15, 4), 3, 'Test 37');
test(getMinDistance([5,3,8,6,2,10,1,4], 10, 3), 2, 'Test 38');
test(getMinDistance([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 12, 10), 1, 'Test 39');
test(getMinDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 15, 0), 14, 'Test 40');
test(getMinDistance([10,9,8,7,6,5,4,3,2,1], 1, 5), 4, 'Test 41');
test(getMinDistance([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50, 2), 2, 'Test 42');
test(getMinDistance([8,7,6,5,4,3,2,1,0,-1], 0, 4), 4, 'Test 43');
test(getMinDistance([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991], 997, 2), 1, 'Test 44');
test(getMinDistance([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 35, 9), 3, 'Test 45');
test(getMinDistance([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 3, 15), 0, 'Test 46');
test(getMinDistance([2,5,4,7,8,6,1,3,9,0], 3, 8), 1, 'Test 47');
test(getMinDistance([5,2,3,4,5,1,5], 5, 3), 1, 'Test 48');
test(getMinDistance([2,4,6,8,10,12,14,16,18,20], 16, 0), 7, 'Test 49');
test(getMinDistance([7, 8, 9, 10, 11, 12, 13, 14, 15, 7], 7, 5), 4, 'Test 50');
test(getMinDistance([5, 4, 3, 2, 1, 2, 3, 4, 5], 1, 4), 0, 'Test 51');
test(getMinDistance([2,4,6,8,10,12,14,16,18,20], 2, 9), 9, 'Test 52');
test(getMinDistance([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4], 4, 10), 0, 'Test 53');
test(getMinDistance([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 10, 7), 2, 'Test 54');
test(getMinDistance([99,98,97,96,95,94,93,92,91,90], 93, 8), 2, 'Test 55');
test(getMinDistance([2,4,6,8,10,12,14,16,18,20], 12, 3), 2, 'Test 56');
test(getMinDistance([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 13, 19), 7, 'Test 57');
test(getMinDistance([1,3,5,7,9,11,13,15,17,19,21], 15, 0), 7, 'Test 58');
test(getMinDistance([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 39, 0), 19, 'Test 59');
test(getMinDistance([5,15,25,35,45,55,65,75,85,95,105], 65, 5), 1, 'Test 60');
test(getMinDistance([1000, 500, 250, 125, 63, 31, 16, 8, 4, 2, 1], 16, 5), 1, 'Test 61');
test(getMinDistance([100,200,300,400,500,600,700,800,900,1000], 500, 9), 5, 'Test 62');
test(getMinDistance([45,46,47,48,49,50,51,52,53,54,55,56,57,58,59], 50, 14), 9, 'Test 63');
test(getMinDistance([3,2,1,3,2,1,3,2,1,3], 1, 4), 1, 'Test 64');
test(getMinDistance([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 18, 16, 14, 12, 10, 8, 6, 4, 2], 10, 9), 5, 'Test 65');
test(getMinDistance([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10, 0), 10, 'Test 66');
test(getMinDistance([100,90,80,70,60,50,40,30,20,10], 60, 4), 0, 'Test 67');
test(getMinDistance([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 7, 7), 0, 'Test 68');
test(getMinDistance([10,20,30,40,50,60,70,80,90,100], 40, 0), 3, 'Test 69');
test(getMinDistance([9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10], 5, 10), 4, 'Test 70');
test(getMinDistance([1,3,5,7,9,11,13,15,17,19], 19, 9), 0, 'Test 71');
test(getMinDistance([1,2,3,4,5,6,7,8,9,10], 10, 0), 9, 'Test 72');
test(getMinDistance([39,37,35,33,31,29,27,25,23,21,19,17,15,13,11,9,7,5,3,1], 1, 19), 0, 'Test 73');
test(getMinDistance([1, 3, 5, 7, 9, 7, 5, 3, 1], 9, 4), 0, 'Test 74');
test(getMinDistance([5, 3, 2, 5, 3, 5, 2, 5, 3, 5], 3, 4), 0, 'Test 75');
test(getMinDistance([1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2, 7), 3, 'Test 76');
test(getMinDistance([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 19, 12), 3, 'Test 77');
test(getMinDistance([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991, 990, 989, 988, 987, 986, 985, 984, 983, 982, 981], 985, 15), 0, 'Test 78');
test(getMinDistance([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 500, 9), 5, 'Test 79');
test(getMinDistance([3, 4, 2, 5, 1, 5, 3, 2, 5], 5, 4), 1, 'Test 80');
test(getMinDistance([7,1,3,4,2,5,7,6,7,8], 7, 5), 1, 'Test 81');
test(getMinDistance([7,6,5,4,3,2,1,0,9,8], 0, 5), 2, 'Test 82');
test(getMinDistance([5,4,3,2,1,2,3,4,5,6,7,8,9,10], 10, 5), 8, 'Test 83');
test(getMinDistance([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 5, 10), 0, 'Test 84');
test(getMinDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 15, 10), 4, 'Test 85');
test(getMinDistance([7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7], 2, 6), 1, 'Test 86');
test(getMinDistance([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 4, 9), 0, 'Test 87');
test(getMinDistance([1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009], 1009, 2), 7, 'Test 88');
test(getMinDistance([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 9), 0, 'Test 89');
test(getMinDistance([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 18, 10), 2, 'Test 90');
test(getMinDistance([5,4,3,2,1,2,3,4,5], 2, 4), 1, 'Test 91');
test(getMinDistance([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 6, 9, 3, 9, 9, 3, 7], 5, 10), 0, 'Test 92');
test(getMinDistance([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 1, 19), 19, 'Test 93');
test(getMinDistance([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 7, 15), 0, 'Test 94');
test(getMinDistance([1,3,5,7,9,11,13,15,17,19], 13, 5), 1, 'Test 95');
test(getMinDistance([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], 23, 0), 8, 'Test 96');
test(getMinDistance([20,19,18,17,16,15,14,13,12,11], 15, 5), 0, 'Test 97');
test(getMinDistance([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 10, 7), 2, 'Test 98');
test(getMinDistance([7,8,9,10,11,12,13,14,15], 12, 3), 2, 'Test 99');
test(getMinDistance([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 30, 5), 3, 'Test 100');
test(getMinDistance([1,2,3,4,5,6,7,8,9,10], 7, 0), 6, 'Test 101');
test(getMinDistance([8, 6, 4, 2, 0, 2, 4, 6, 8], 0, 4), 0, 'Test 102');
test(getMinDistance([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 10), 1, 'Test 103');
test(getMinDistance([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 3, 8), 7, 'Test 104');
test(getMinDistance([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 25, 15), 9, 'Test 105');
test(getMinDistance([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 10, 0), 9, 'Test 106');
test(getMinDistance([1000,500,250,125,62,31,15,7,3,1], 3, 6), 2, 'Test 107');
test(getMinDistance([5,5,5,5,5,5,5,5,5,5], 5, 5), 0, 'Test 108');
test(getMinDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1, 19), 19, 'Test 109');
test(getMinDistance([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9], -4, 8), 5, 'Test 110');
test(getMinDistance([2,4,6,8,10,12,14,16,18,20], 18, 9), 1, 'Test 111');
test(getMinDistance([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30], 18, 12), 4, 'Test 112');
test(getMinDistance([9,8,7,6,5,4,3,2,1], 7, 3), 1, 'Test 113');
test(getMinDistance([9,8,7,6,5,4,3,2,1,0], 5, 5), 1, 'Test 114');
test(getMinDistance([9,8,7,6,5,4,3,2,1,0], 5, 9), 5, 'Test 115');
test(getMinDistance([2,5,8,11,14,17,20,23,26,29], 20, 4), 2, 'Test 116');
test(getMinDistance([10, 22, 33, 44, 55, 66, 77, 88, 99], 88, 0), 7, 'Test 117');

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
