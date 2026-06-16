// Test: 1508. Range Sum Of Sorted Subarray Sums
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { rangeSum } = require("./solution");

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

console.log("\n1508. Range Sum Of Sorted Subarray Sums\n");

test(rangeSum([1,2,3,4], 4, 3, 4), 6, 'Test 1');
test(rangeSum([10,20,30], 3, 1, 3), 60, 'Test 2');
test(rangeSum([5,1,2], 3, 1, 4), 11, 'Test 3');
test(rangeSum([1,2,3,4], 4, 1, 5), 13, 'Test 4');
test(rangeSum([3,3,3,3], 4, 2, 8), 36, 'Test 5');
test(rangeSum([1,2,3,4], 4, 1, 10), 50, 'Test 6');
test(rangeSum([3,3,3], 3, 2, 5), 18, 'Test 7');
test(rangeSum([5,2,1,4], 4, 3, 7), 24, 'Test 8');
test(rangeSum([10,20,30], 3, 2, 5), 130, 'Test 9');
test(rangeSum([5,1,4], 3, 1, 6), 31, 'Test 10');
test(rangeSum([5,1,2,3], 4, 2, 6), 18, 'Test 11');
test(rangeSum([10,20,30], 3, 1, 5), 140, 'Test 12');
test(rangeSum([15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155], 15, 60, 120), 46215, 'Test 13');
test(rangeSum([10,9,8,7,6,5,4,3,2,1], 10, 25, 50), 756, 'Test 14');
test(rangeSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10, 20, 30), 36, 'Test 15');
test(rangeSum([5, 15, 10, 20, 25], 5, 1, 15), 520, 'Test 16');
test(rangeSum([2,3,5,7,11,13,17,19,23,29], 10, 25, 55), 2334, 'Test 17');
test(rangeSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10, 15, 45), 6700, 'Test 18');
test(rangeSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10, 25, 75), 10110, 'Test 19');
test(rangeSum([100, 200, 300, 400, 500], 5, 10, 20), 6900, 'Test 20');
test(rangeSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10, 1, 100), 2200, 'Test 21');
test(rangeSum([50, 40, 30, 20, 10], 5, 5, 15), 960, 'Test 22');
test(rangeSum([3,1,4,1,5,9,2,6,5,3,5], 11, 15, 45), 460, 'Test 23');
test(rangeSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 20, 100, 200), 11368, 'Test 24');
test(rangeSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 15, 50, 100), 5098, 'Test 25');
test(rangeSum([23, 34, 45, 56, 67, 78, 89, 90, 100, 110], 10, 25, 60), 12693, 'Test 26');
test(rangeSum([9, 8, 7, 6, 5, 4, 3, 2, 1], 9, 25, 35), 250, 'Test 27');
test(rangeSum([10, 20, 30, 40, 50], 5, 3, 12), 610, 'Test 28');
test(rangeSum([5, 15, 10, 20], 4, 5, 12), 200, 'Test 29');
test(rangeSum([31,28,31,30,31,30,31,31,30,31,30,31], 12, 30, 75), 8471, 'Test 30');
test(rangeSum([30, 20, 10, 40, 50, 60, 70, 80, 90, 100], 10, 25, 75), 9910, 'Test 31');
test(rangeSum([1, 3, 5, 7, 9, 11, 13], 7, 1, 28), 588, 'Test 32');
test(rangeSum([9,7,5,3,1], 5, 6, 16), 155, 'Test 33');
test(rangeSum([5,6,7,8,9], 5, 3, 7), 48, 'Test 34');
test(rangeSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10, 1, 55), 220, 'Test 35');
test(rangeSum([5,1,7,3,8], 5, 3, 7), 34, 'Test 36');
test(rangeSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10, 15, 40), 497, 'Test 37');
test(rangeSum([5, 4, 3, 2, 1, 10, 9, 8, 7, 6], 10, 1, 100), 1210, 'Test 38');
test(rangeSum([99, 100, 98, 97, 96], 5, 10, 20), 2158, 'Test 39');
test(rangeSum([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 15, 50, 150), 9416, 'Test 40');
test(rangeSum([42,53,64,75,86,97,108,119,130,141], 10, 15, 45), 11216, 'Test 41');
test(rangeSum([10,20,30,40,50,60,70,80,90,100], 10, 30, 70), 9190, 'Test 42');
test(rangeSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10, 30, 50), 664, 'Test 43');
test(rangeSum([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100], 20, 150, 250), 46005, 'Test 44');
test(rangeSum([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 11, 20, 40), 310, 'Test 45');
test(rangeSum([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 10, 25, 50), 7560, 'Test 46');
test(rangeSum([100, 200, 300, 400, 500], 5, 1, 15), 10500, 'Test 47');
test(rangeSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10, 10, 30), 496, 'Test 48');
test(rangeSum([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 10, 50, 100), 30000, 'Test 49');
test(rangeSum([9, 8, 7, 6, 5], 5, 1, 15), 245, 'Test 50');
test(rangeSum([9, 18, 27, 36, 45, 54], 6, 10, 20), 1260, 'Test 51');
test(rangeSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10, 15, 30), 46, 'Test 52');
test(rangeSum([100,200,300,400,500,600], 6, 10, 30), 16100, 'Test 53');
test(rangeSum([100,200,300,400,500,600,700,800,900,1000], 10, 20, 40), 44500, 'Test 54');
test(rangeSum([7,7,7,7,7,7,7,7,7,7], 10, 50, 75), 364, 'Test 55');
test(rangeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 30, 50), 664, 'Test 56');
test(rangeSum([7, 3, 8, 6, 2, 5, 4, 9, 1], 9, 20, 40), 480, 'Test 57');
test(rangeSum([99, 98, 97, 96, 95, 94], 6, 20, 30), 1064, 'Test 58');
test(rangeSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 20, 150, 250), 9201, 'Test 59');
test(rangeSum([100,99,98,97,96,95,94,93,92,91], 10, 10, 30), 5233, 'Test 60');
test(rangeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 15, 50, 60), 379, 'Test 61');
test(rangeSum([7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 10, 20, 50), 1036, 'Test 62');
test(rangeSum([10,20,30,40,50,60], 6, 10, 20), 1400, 'Test 63');
test(rangeSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10, 25, 35), 421, 'Test 64');
test(rangeSum([10, 20, 30, 40, 50], 5, 1, 25), 1050, 'Test 65');
test(rangeSum([34, 78, 12, 56, 90, 23, 45, 67, 89, 10], 10, 30, 60), 8474, 'Test 66');
test(rangeSum([10, 20, 30, 40, 50, 60], 6, 10, 20), 1400, 'Test 67');
test(rangeSum([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 11, 5, 20), 95, 'Test 68');
test(rangeSum([1,3,5,7,9,11,13,15,17,19], 10, 1, 100), 2200, 'Test 69');
test(rangeSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10, 30, 40), 2810, 'Test 70');
test(rangeSum([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 10, 30, 45), 908, 'Test 71');
test(rangeSum([100,90,80,70,60,50,40,30,20,10], 10, 55, 85), 550, 'Test 72');
test(rangeSum([50, 40, 30, 20, 10], 5, 10, 20), 690, 'Test 73');
test(rangeSum([9, 7, 5, 3, 1], 5, 8, 12), 68, 'Test 74');
test(rangeSum([7, 6, 5, 4, 3, 2, 1], 7, 15, 25), 179, 'Test 75');
test(rangeSum([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 15, 100, 200), 2074, 'Test 76');
test(rangeSum([50, 40, 30, 20, 10], 5, 1, 15), 1050, 'Test 77');
test(rangeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 15, 50, 100), 2715, 'Test 78');
test(rangeSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10, 45, 75), 5010, 'Test 79');
test(rangeSum([9,3,5,7,2,8], 6, 4, 12), 89, 'Test 80');
test(rangeSum([1,1,1,1,1,1,1,1,1,1], 10, 25, 50), 133, 'Test 81');
test(rangeSum([1,3,2,5,4,7,6,9,8,11,10,13,12,15,14,17,16,19,18,20], 20, 50, 150), 6400, 'Test 82');
test(rangeSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 20, 100, 150), 8103, 'Test 83');
test(rangeSum([5, 15, 25, 35, 45], 5, 7, 14), 610, 'Test 84');
test(rangeSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 20, 50, 100), 232, 'Test 85');
test(rangeSum([1, 2, 3, 4, 5], 5, 1, 15), 105, 'Test 86');
test(rangeSum([1,1,2,2,3,3,4,4,5,5], 10, 25, 50), 410, 'Test 87');
test(rangeSum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10, 55, 75), 550, 'Test 88');
test(rangeSum([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 10, 5, 55), 21600, 'Test 89');
test(rangeSum([5,15,25,35,45], 5, 5, 15), 810, 'Test 90');
test(rangeSum([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 15, 50, 100), 5098, 'Test 91');
test(rangeSum([8,6,4,2,0,8,6,4,2,0], 10, 20, 40), 344, 'Test 92');
test(rangeSum([9, 8, 7, 6, 5, 4, 3, 2, 1], 9, 10, 30), 291, 'Test 93');
test(rangeSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10, 25, 45), 97, 'Test 94');
test(rangeSum([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60], 12, 50, 75), 6660, 'Test 95');
test(rangeSum([5, 15, 25, 35, 45, 55, 65], 7, 15, 25), 1585, 'Test 96');
test(rangeSum([5,15,10,20,25], 5, 4, 10), 195, 'Test 97');
test(rangeSum([50, 40, 30, 20, 10, 5, 2, 1], 8, 10, 35), 2000, 'Test 98');
test(rangeSum([100, 100, 100, 100, 100, 100], 6, 20, 30), 1100, 'Test 99');
test(rangeSum([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30], 15, 50, 100), 5430, 'Test 100');
test(rangeSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 15, 100, 150), 2074, 'Test 101');
test(rangeSum([1,1,1,1,1,1,1,1,1,1], 10, 5, 20), 27, 'Test 102');
test(rangeSum([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84], 12, 40, 80), 13083, 'Test 103');
test(rangeSum([100, 99, 98, 97, 96, 95, 94, 93, 92, 91], 10, 5, 15), 1520, 'Test 104');
test(rangeSum([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 20, 120, 200), 19092, 'Test 105');

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
