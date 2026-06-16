// Test: 1640. Check Array Formation Through Concatenation
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { canFormArray } = require("./solution");

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

console.log("\n1640. Check Array Formation Through Concatenation\n");

test(canFormArray([10,20,30,40,50], [[10,20],[30,40,50]]), true, 'Test 1');
test(canFormArray([1,2,3,4,5], [[2,3],[1,4],[5]]), false, 'Test 2');
test(canFormArray([91,4,64,78], [[78],[4,64],[91]]), true, 'Test 3');
test(canFormArray([49,18,16], [[16,18,49]]), false, 'Test 4');
test(canFormArray([15,88], [[88],[15]]), true, 'Test 5');
test(canFormArray([1,2,3,4,5], [[2],[4,5],[3],[1]]), true, 'Test 6');
test(canFormArray([5,9,13,17,21,25], [[5,9,13],[17,21,25]]), true, 'Test 7');
test(canFormArray([101,102,103,104,105,106,107,108,109,110], [[101,102],[103,104],[105,106],[107,108],[109,110]]), true, 'Test 8');
test(canFormArray([2,4,6,8,10,12,14], [[2,4],[6,8],[10,12],[14]]), true, 'Test 9');
test(canFormArray([100,99,98,97,96,95,94,93,92,91], [[100,99],[98,97],[96,95,94],[93,92],[91]]), true, 'Test 10');
test(canFormArray([91, 4, 64, 78, 100, 50], [[78, 100], [91, 4], [64], [50]]), true, 'Test 11');
test(canFormArray([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], [[1,3,5,7],[9,11],[13,15,17,19],[21,23,25],[27,29]]), true, 'Test 12');
test(canFormArray([8,16,24,32,40,48,56,64], [[8,16,24],[32,40,48],[56,64]]), true, 'Test 13');
test(canFormArray([100, 200, 300, 400, 500, 600], [[100, 200], [300, 400], [500, 600]]), true, 'Test 14');
test(canFormArray([11, 22, 33, 44, 55, 66, 77, 88, 99], [[11, 22], [33, 44, 55], [66, 77, 88, 99]]), true, 'Test 15');
test(canFormArray([5, 10, 15, 20, 25, 30, 35, 40], [[5, 10, 15], [20, 25], [30, 35, 40]]), true, 'Test 16');
test(canFormArray([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [[100], [200, 300], [400, 500, 600], [700, 800], [900, 1000]]), true, 'Test 17');
test(canFormArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15]]), true, 'Test 18');
test(canFormArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [[1, 3, 5], [7, 9, 11], [13, 15, 17, 19]]), true, 'Test 19');
test(canFormArray([1,2,3,4,5,6,7,8,9,10], [[1,2,3],[4,5],[6,7,8,9,10]]), true, 'Test 20');
test(canFormArray([23,32,45,54,67,76,89,98], [[23,32],[45,54,67],[76,89],[98]]), true, 'Test 21');
test(canFormArray([1,3,5,7,9,11,13,15,17,19], [[1,3],[5,7,9],[11,13],[15,17,19]]), true, 'Test 22');
test(canFormArray([3, 1, 2, 5, 4], [[3, 1], [2, 5], [4]]), true, 'Test 23');
test(canFormArray([1, 2, 3, 4, 5, 6, 7, 8, 9], [[1, 2], [3, 4, 5], [6], [7, 8, 9]]), true, 'Test 24');
test(canFormArray([8, 6, 7, 5, 3, 0, 9], [[8, 6], [7, 5], [3, 0], [9]]), true, 'Test 25');
test(canFormArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [[10, 20], [30, 40], [50, 60], [70, 80], [90, 100]]), true, 'Test 26');
test(canFormArray([100,99,98,97,96,95,94,93,92,91], [[100,99],[98,97,96],[95,94,93],[92,91]]), true, 'Test 27');
test(canFormArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [[1,2,3],[4,5,6],[7,8,9],[10,11],[12,13,14,15]]), true, 'Test 28');
test(canFormArray([2,4,6,8,10,12,14,16,18,20], [[2,4],[6,8,10],[12,14],[16,18,20]]), true, 'Test 29');
test(canFormArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [[1, 2, 3], [4, 5], [6, 7, 8], [9, 10, 11], [12, 13, 14, 15]]), true, 'Test 30');
test(canFormArray([9, 8, 7, 6, 5, 4, 3, 2, 1], [[9], [8], [7], [6], [5], [4], [3], [2], [1]]), true, 'Test 31');
test(canFormArray([42, 13, 56, 78, 91, 100], [[42], [13, 56], [78], [91, 100]]), true, 'Test 32');
test(canFormArray([21, 22, 23, 24, 25, 26, 27, 28, 29, 30], [[21, 22], [23, 24], [25, 26], [27, 28], [29, 30]]), true, 'Test 33');
test(canFormArray([10,20,30,40,50,60,70,80,90], [[10,20,30],[40,50],[60,70,80,90]]), true, 'Test 34');
test(canFormArray([12, 14, 16, 18, 20, 22, 24, 26, 28, 30], [[12, 14, 16], [18, 20], [22, 24, 26, 28, 30]]), true, 'Test 35');
test(canFormArray([1,2,3,4,5,6,7,8,9,10], [[1,2],[3,4],[5,6],[7,8],[9,10]]), true, 'Test 36');
test(canFormArray([99,88,77,66,55,44,33,22,11], [[99],[88],[77],[66],[55],[44],[33],[22],[11]]), true, 'Test 37');
test(canFormArray([20, 30, 10, 50, 40], [[20, 30], [10, 50], [40]]), true, 'Test 38');
test(canFormArray([7,14,28,21,42], [[7,14,28],[21,42]]), true, 'Test 39');
test(canFormArray([100,90,80,70,60,50,40,30,20,10], [[100,90],[80,70,60,50],[40,30,20,10]]), true, 'Test 40');
test(canFormArray([1,2,3,4,5,6,7,8,9,10], [[3,4],[1,2],[7,8],[5,6],[9,10]]), true, 'Test 41');
test(canFormArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]), true, 'Test 42');
test(canFormArray([42, 43, 44, 45, 46, 47, 48, 49, 50], [[42, 43], [44, 45, 46], [47, 48], [49, 50]]), true, 'Test 43');
test(canFormArray([1,3,5,7,9,11,13,15,17,19], [[1,3,5],[7,9],[11,13],[15,17,19]]), true, 'Test 44');
test(canFormArray([5, 10, 15, 20, 25, 30, 35, 40], [[5], [10, 15], [20, 25, 30], [35, 40]]), true, 'Test 45');
test(canFormArray([1, 3, 5, 7, 9, 11, 13, 15], [[1, 3, 5], [7, 9], [11, 13, 15]]), true, 'Test 46');
test(canFormArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [[1], [3, 5], [7, 9], [11, 13], [15, 17, 19]]), true, 'Test 47');
test(canFormArray([10,20,30,40,50,60,70,80,90], [[10],[20],[30],[40],[50],[60],[70],[80],[90]]), true, 'Test 48');
test(canFormArray([101, 102, 103, 104, 105, 106], [[101, 102, 103], [104, 105], [106]]), true, 'Test 49');
test(canFormArray([2, 5, 3, 8, 9, 4], [[2, 5], [3], [8, 9], [4]]), true, 'Test 50');
test(canFormArray([99, 98, 97, 96, 95, 94, 93, 92, 91, 90], [[99, 98, 97], [96, 95, 94], [93, 92, 91, 90]]), true, 'Test 51');
test(canFormArray([3, 6, 9, 12, 15, 18, 21, 24, 27], [[3, 6, 9], [12, 15], [18, 21, 24, 27]]), true, 'Test 52');
test(canFormArray([1, 2, 3, 4, 5, 6, 7, 8, 9], [[1, 2], [3, 4, 5], [6, 7, 8], [9]]), true, 'Test 53');
test(canFormArray([3,5,7,9,11,13,15], [[3,5,7],[9,11],[13,15]]), true, 'Test 54');
test(canFormArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [[1, 2], [3, 4, 5], [6, 7], [8, 9, 10]]), true, 'Test 55');
test(canFormArray([3,5,7,9,11,13,15], [[3,5,7],[9],[11,13,15]]), true, 'Test 56');
test(canFormArray([100,99,98,97,96], [[97,98],[96],[99],[100]]), false, 'Test 57');
test(canFormArray([7,14,21,28,35,42], [[7],[14],[21],[28],[35],[42]]), true, 'Test 58');
test(canFormArray([5, 10, 15, 20, 25, 30], [[10, 15], [5], [20, 25, 30]]), true, 'Test 59');
test(canFormArray([5,6,1,2,3,4], [[5,6],[1,2],[3,4]]), true, 'Test 60');
test(canFormArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]), true, 'Test 61');
test(canFormArray([100, 99, 98, 97, 96, 95], [[100], [99, 98], [97, 96, 95]]), true, 'Test 62');
test(canFormArray([1,2,3,4,5,6,7,8,9,10], [[1,2],[3,4,5],[6,7,8,9,10]]), true, 'Test 63');
test(canFormArray([100, 99, 98, 97, 96, 95], [[100, 99], [98, 97], [96, 95]]), true, 'Test 64');
test(canFormArray([1,3,5,7,9,11,13,15,17,19,21], [[1,3,5],[7,9,11],[13,15,17],[19,21]]), true, 'Test 65');
test(canFormArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]), true, 'Test 66');
test(canFormArray([5,10,15,20,25,30,35], [[5,10,15],[20],[25,30,35]]), true, 'Test 67');
test(canFormArray([11,22,33,44,55,66,77,88,99], [[11,22,33],[44,55],[66,77,88,99]]), true, 'Test 68');
test(canFormArray([70, 80, 90, 100, 110, 120], [[70, 80], [90, 100], [110, 120]]), true, 'Test 69');
test(canFormArray([10, 20, 30, 40, 50, 60, 70], [[10, 20], [30, 40, 50], [60, 70]]), true, 'Test 70');
test(canFormArray([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], [[10,20,30],[40,50,60],[70,80,90],[100,110],[120,130,140,150]]), true, 'Test 71');
test(canFormArray([10,20,30,40,50,60,70,80,90,100], [[10,20],[30,40],[50,60],[70,80],[90,100]]), true, 'Test 72');
test(canFormArray([25,26,27,28,29,30,31,32,33,34], [[25,26],[27,28,29],[30,31,32,33],[34]]), true, 'Test 73');
test(canFormArray([5,10,15,20,25,30,35,40,45,50], [[5,10,15],[20,25,30],[35,40,45],[50]]), true, 'Test 74');
test(canFormArray([2, 4, 6, 8, 10, 12, 14, 16], [[2, 4], [6, 8, 10], [12, 14, 16]]), true, 'Test 75');
test(canFormArray([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], [[2, 4], [6, 8, 10], [12, 14], [16, 18, 20]]), true, 'Test 76');
test(canFormArray([2,4,6,8,10,12,14,16,18,20], [[2,4,6],[8,10,12],[14,16,18],[20]]), true, 'Test 77');
test(canFormArray([3,6,9,12,15,18,21], [[3,6],[9,12],[15,18],[21]]), true, 'Test 78');
test(canFormArray([5,4,3,2,1], [[5],[4,3],[2,1]]), true, 'Test 79');
test(canFormArray([31,32,33,34,35,36,37,38,39,40], [[31,32],[33,34],[35,36],[37,38],[39,40]]), true, 'Test 80');
test(canFormArray([100,99,98,97,96,95,94,93,92,91], [[100,99],[98,97],[96,95],[94,93],[92,91]]), true, 'Test 81');
test(canFormArray([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], [[2, 4, 6], [8, 10], [12, 14, 16, 18, 20]]), true, 'Test 82');
test(canFormArray([23,29,20,32,45,67], [[23,29,20],[32],[45,67]]), true, 'Test 83');
test(canFormArray([7,14,21,28,35,42,49,56], [[7,14,21,28],[35,42],[49,56]]), true, 'Test 84');
test(canFormArray([1, 2, 3, 4, 5, 6, 7, 8, 9], [[1, 2], [3, 4], [5, 6], [7, 8], [9]]), true, 'Test 85');
test(canFormArray([1, 3, 5, 7, 9, 2, 4, 6, 8, 10], [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]]), true, 'Test 86');
test(canFormArray([9, 8, 7, 6, 5, 4, 3, 2, 1], [[9, 8, 7], [6, 5], [4, 3, 2], [1]]), true, 'Test 87');
test(canFormArray([5,1,3,7,8,2,4,9,6], [[1,3],[5],[7,8],[2,4],[9,6]]), true, 'Test 88');
test(canFormArray([100, 200, 300, 400, 500], [[100], [200, 300], [400, 500]]), true, 'Test 89');
test(canFormArray([5, 3, 8, 9, 10, 15, 20], [[5], [3, 8, 9], [10, 15], [20]]), true, 'Test 90');
test(canFormArray([4,2,5,3,6,1,7], [[4,2],[5],[3,6],[1,7]]), true, 'Test 91');
test(canFormArray([11,22,33,44,55,66,77,88,99], [[11,22],[33,44],[55,66],[77,88,99]]), true, 'Test 92');
test(canFormArray([42, 24, 66, 33, 55, 77], [[42], [24, 66], [33, 55], [77]]), true, 'Test 93');
test(canFormArray([8, 6, 7, 5, 3, 0, 9], [[8, 6], [7, 5, 3], [0, 9]]), true, 'Test 94');
test(canFormArray([5, 1, 3, 9, 7, 6], [[5, 1], [3, 9], [7, 6]]), true, 'Test 95');
test(canFormArray([11,22,33,44,55,66,77,88,99,100], [[11,22],[33,44],[55,66],[77,88],[99,100]]), true, 'Test 96');
test(canFormArray([60, 70, 80, 90, 100, 110, 120], [[60, 70, 80], [90, 100], [110, 120]]), true, 'Test 97');
test(canFormArray([8, 6, 7, 5, 3, 0, 9], [[8, 6, 7], [5, 3], [0, 9]]), true, 'Test 98');
test(canFormArray([23,45,67,89,90,12,34,56], [[23,45],[67,89,90],[12,34,56]]), true, 'Test 99');

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
