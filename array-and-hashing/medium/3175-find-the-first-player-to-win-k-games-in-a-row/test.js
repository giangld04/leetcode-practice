// Test: 3175. Find The First Player To Win K Games In A Row
// 128 test cases from LeetCodeDataset
// Run: node test.js

const { findWinningPlayer } = require("./solution");

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

console.log("\n3175. Find The First Player To Win K Games In A Row\n");

test(findWinningPlayer([5, 1, 9, 2, 8, 3, 7, 4, 6], 3), 2, 'Test 1');
test(findWinningPlayer([1000000, 999999, 999998, 999997], 4), 0, 'Test 2');
test(findWinningPlayer([2,5,4], 3), 1, 'Test 3');
test(findWinningPlayer([1,3,2,5,4], 1), 1, 'Test 4');
test(findWinningPlayer([10,20,30,40,50], 5), 4, 'Test 5');
test(findWinningPlayer([10,9,8,7,6,5,4,3,2,1], 5), 0, 'Test 6');
test(findWinningPlayer([1000000, 1, 2, 3, 4], 4), 0, 'Test 7');
test(findWinningPlayer([5,10,15,20,25,30], 2), 5, 'Test 8');
test(findWinningPlayer([50,40,30,20,10], 4), 0, 'Test 9');
test(findWinningPlayer([4,2,6,3,9], 2), 2, 'Test 10');
test(findWinningPlayer([5,4,3,2,1], 5), 0, 'Test 11');
test(findWinningPlayer([1,2,3,4,5,6,7,8,9,10], 10), 9, 'Test 12');
test(findWinningPlayer([1,3,5,7,9], 1), 1, 'Test 13');
test(findWinningPlayer([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 9), 9, 'Test 14');
test(findWinningPlayer([3, 1, 2, 5, 4, 6, 7], 3), 6, 'Test 15');
test(findWinningPlayer([9,8,7,6,5,4,3,2,1], 8), 0, 'Test 16');
test(findWinningPlayer([1, 3, 5, 7, 9, 2, 4, 6, 8, 10], 3), 4, 'Test 17');
test(findWinningPlayer([2,1,5,4,3,6], 2), 2, 'Test 18');
test(findWinningPlayer([2, 4, 6, 8, 10, 1, 3, 5, 7, 9], 2), 4, 'Test 19');
test(findWinningPlayer([9, 1, 8, 2, 7, 3, 6, 4, 5, 10], 3), 0, 'Test 20');
test(findWinningPlayer([500, 400, 300, 200, 100, 600, 700, 800, 900, 1000], 4), 0, 'Test 21');
test(findWinningPlayer([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 19), 0, 'Test 22');
test(findWinningPlayer([2, 1, 4, 3, 6, 5, 8, 7, 10, 9], 10), 8, 'Test 23');
test(findWinningPlayer([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 10), 14, 'Test 24');
test(findWinningPlayer([5,10,15,20,25,30,35,40,45,50], 5), 9, 'Test 25');
test(findWinningPlayer([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 100000), 9, 'Test 26');
test(findWinningPlayer([3,1,4,1,5,9,2,6,5,3,5], 5), 5, 'Test 27');
test(findWinningPlayer([1000, 100, 10, 1], 100), 0, 'Test 28');
test(findWinningPlayer([5, 1, 9, 2, 8, 3, 7, 4, 6, 10], 5), 2, 'Test 29');
test(findWinningPlayer([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10), 0, 'Test 30');
test(findWinningPlayer([15, 25, 35, 45, 55, 65, 75, 85, 95, 105], 7), 9, 'Test 31');
test(findWinningPlayer([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 0, 'Test 32');
test(findWinningPlayer([5,3,1,4,2], 3), 0, 'Test 33');
test(findWinningPlayer([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 5), 0, 'Test 34');
test(findWinningPlayer([1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019], 10), 19, 'Test 35');
test(findWinningPlayer([1, 10, 3, 4, 7, 5, 6, 9, 8, 2], 4), 1, 'Test 36');
test(findWinningPlayer([8, 4, 6, 2, 7, 3, 9, 1, 5, 10], 9), 9, 'Test 37');
test(findWinningPlayer([1, 10, 3, 8, 5, 6, 7, 2, 4, 9], 7), 1, 'Test 38');
test(findWinningPlayer([2, 1, 4, 3, 6, 5, 8, 7, 10, 9], 4), 8, 'Test 39');
test(findWinningPlayer([50, 51, 48, 49, 46, 47, 44, 45, 42, 43, 40, 41, 38, 39, 36, 37, 34, 35, 32, 33], 10), 1, 'Test 40');
test(findWinningPlayer([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5), 9, 'Test 41');
test(findWinningPlayer([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10), 9, 'Test 42');
test(findWinningPlayer([3, 1, 2, 5, 4, 7, 6, 9, 8, 10], 3), 9, 'Test 43');
test(findWinningPlayer([100000, 99999, 99998, 99997, 99996], 100000), 0, 'Test 44');
test(findWinningPlayer([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 1), 0, 'Test 45');
test(findWinningPlayer([1000000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1000000), 0, 'Test 46');
test(findWinningPlayer([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10), 0, 'Test 47');
test(findWinningPlayer([1, 3, 2, 5, 4, 7, 6, 9, 8, 10], 5), 9, 'Test 48');
test(findWinningPlayer([23, 45, 12, 56, 89, 43, 21, 67, 8, 90], 5), 4, 'Test 49');
test(findWinningPlayer([100, 101, 102, 103, 104, 105, 106, 107, 108, 109], 2), 9, 'Test 50');
test(findWinningPlayer([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 3), 5, 'Test 51');
test(findWinningPlayer([1000,500,250,125,62,31,15,7,3,1], 5), 0, 'Test 52');
test(findWinningPlayer([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991], 10), 0, 'Test 53');
test(findWinningPlayer([10, 2, 15, 3, 20, 5, 25, 7, 30, 9], 5), 8, 'Test 54');
test(findWinningPlayer([1000,900,800,700,600,500,400,300,200,100], 5), 0, 'Test 55');
test(findWinningPlayer([1, 1000000], 1000000), 1, 'Test 56');
test(findWinningPlayer([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991], 100), 0, 'Test 57');
test(findWinningPlayer([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 9), 0, 'Test 58');
test(findWinningPlayer([9,8,7,6,5,4,3,2,1,0,11,12,13,14,15], 5), 0, 'Test 59');
test(findWinningPlayer([500000, 500001, 500002, 500003, 500004, 500005, 500006, 500007, 500008, 500009], 5), 9, 'Test 60');
test(findWinningPlayer([2,4,6,8,10,12,14,16,18,20,1,3,5,7,9,11,13,15,17,19], 10), 9, 'Test 61');
test(findWinningPlayer([1, 3, 5, 7, 9, 2, 4, 6, 8, 10], 5), 4, 'Test 62');
test(findWinningPlayer([8,7,6,5,4,3,2,1], 7), 0, 'Test 63');
test(findWinningPlayer([7, 6, 5, 4, 3, 2, 1], 6), 0, 'Test 64');
test(findWinningPlayer([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 10), 14, 'Test 65');
test(findWinningPlayer([2, 3, 1, 5, 4], 4), 3, 'Test 66');
test(findWinningPlayer([20, 30, 10, 40, 50, 60, 70, 80, 90, 100], 3), 9, 'Test 67');
test(findWinningPlayer([20, 19, 18, 17, 16, 15, 14, 13, 12, 11], 8), 0, 'Test 68');
test(findWinningPlayer([999999, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9), 0, 'Test 69');
test(findWinningPlayer([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90], 10), 0, 'Test 70');
test(findWinningPlayer([9, 1, 2, 8, 3, 7, 4, 6, 5, 10], 4), 0, 'Test 71');
test(findWinningPlayer([100,200,300,400,500,600,700,800,900,1000,50,40,30,20,10], 5), 9, 'Test 72');
test(findWinningPlayer([1, 3, 2, 4, 6, 5, 7, 9, 8, 10], 7), 9, 'Test 73');
test(findWinningPlayer([7,8,9,10,11,12,13,14,15,16,17,18,19,20], 12), 13, 'Test 74');
test(findWinningPlayer([4,6,8,10,12,14,16,18,20,22,24,26,28,30,32], 8), 14, 'Test 75');
test(findWinningPlayer([5, 4, 3, 2, 1, 6, 7, 8, 9, 10], 5), 9, 'Test 76');
test(findWinningPlayer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 15), 19, 'Test 77');
test(findWinningPlayer([5, 4, 3, 2, 1, 10, 9, 8, 7, 6], 8), 5, 'Test 78');
test(findWinningPlayer([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 10), 19, 'Test 79');
test(findWinningPlayer([1000000, 999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991], 999990), 0, 'Test 80');
test(findWinningPlayer([5, 4, 3, 2, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5), 14, 'Test 81');
test(findWinningPlayer([1, 100, 2, 99, 3, 98, 4, 97, 5, 96, 6, 95], 6), 1, 'Test 82');
test(findWinningPlayer([1,3,5,7,9,11,13,15,17,19], 5), 9, 'Test 83');
test(findWinningPlayer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), 19, 'Test 84');
test(findWinningPlayer([500, 250, 750, 125, 875, 375, 625, 687, 937, 187, 437, 787, 287, 1125, 1062], 7), 13, 'Test 85');
test(findWinningPlayer([9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 0, 'Test 86');
test(findWinningPlayer([10, 1, 9, 2, 8, 3, 7, 4, 6, 5], 5), 0, 'Test 87');
test(findWinningPlayer([1, 1, 1, 1, 1, 1, 1, 1, 1, 2], 1), 0, 'Test 88');
test(findWinningPlayer([1000000, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1), 0, 'Test 89');
test(findWinningPlayer([10,20,30,40,50,60,70,80,90,100], 1), 1, 'Test 90');
test(findWinningPlayer([5, 4, 3, 2, 1, 10, 9, 8, 7, 6], 6), 5, 'Test 91');
test(findWinningPlayer([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 20), 19, 'Test 92');
test(findWinningPlayer([1, 1, 1, 1, 1, 1, 1, 1, 1, 100], 1), 0, 'Test 93');
test(findWinningPlayer([3, 1, 2, 5, 4, 8, 7, 10, 9, 6], 3), 7, 'Test 94');
test(findWinningPlayer([1, 3, 2, 5, 4, 7, 6, 9, 8, 10], 10), 9, 'Test 95');
test(findWinningPlayer([5, 3, 8, 1, 9, 2, 7, 4, 6, 10], 7), 9, 'Test 96');
test(findWinningPlayer([1, 100, 2, 99, 3, 98, 4, 97, 5, 96, 6, 95, 7, 94, 8, 93, 9, 92, 10, 91], 90), 1, 'Test 97');
test(findWinningPlayer([1000, 100, 10, 1, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 8), 9, 'Test 98');
test(findWinningPlayer([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991], 6), 0, 'Test 99');
test(findWinningPlayer([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 1), 1, 'Test 100');
test(findWinningPlayer([10, 20, 30, 40, 50, 60, 70, 80, 90, 1], 9), 8, 'Test 101');
test(findWinningPlayer([32,30,28,26,24,22,20,18,16,14,12,10,8,6,4], 7), 0, 'Test 102');
test(findWinningPlayer([9, 3, 1, 7, 5, 2, 8, 6, 4, 10], 5), 0, 'Test 103');
test(findWinningPlayer([3,1,2,5,4,6], 3), 5, 'Test 104');
test(findWinningPlayer([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 4), 1, 'Test 105');
test(findWinningPlayer([1,3,2,5,4,7,6,9,8,11,10,13,12,15,14], 6), 13, 'Test 106');
test(findWinningPlayer([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 25), 29, 'Test 107');
test(findWinningPlayer([99,98,97,96,95,94,93,92,91,90], 9), 0, 'Test 108');
test(findWinningPlayer([100, 99, 98, 97, 96, 95, 94, 93, 92, 91], 1), 0, 'Test 109');
test(findWinningPlayer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 19), 19, 'Test 110');
test(findWinningPlayer([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 5), 9, 'Test 111');
test(findWinningPlayer([4, 1, 3, 2, 5, 7, 6, 8, 10, 9], 4), 8, 'Test 112');
test(findWinningPlayer([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], 9), 9, 'Test 113');
test(findWinningPlayer([1, 100, 2, 99, 3, 98, 4, 97, 5, 96], 8), 1, 'Test 114');
test(findWinningPlayer([25,50,75,100,125,150,175,200,225,250], 8), 9, 'Test 115');
test(findWinningPlayer([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 1), 0, 'Test 116');
test(findWinningPlayer([1, 100, 2, 99, 3, 98, 4, 97, 5, 96], 5), 1, 'Test 117');
test(findWinningPlayer([7, 3, 9, 2, 8, 4, 6, 1, 5], 3), 2, 'Test 118');
test(findWinningPlayer([200, 150, 300, 100, 250, 400, 50, 350, 500], 5), 8, 'Test 119');
test(findWinningPlayer([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10), 9, 'Test 120');
test(findWinningPlayer([100, 101, 99, 102, 98, 103, 97, 104, 96, 105], 5), 9, 'Test 121');
test(findWinningPlayer([10, 2, 8, 4, 6, 1, 3, 5, 7, 9], 3), 0, 'Test 122');
test(findWinningPlayer([100,200,300,400,500,600,700,800,900,1000], 100), 9, 'Test 123');
test(findWinningPlayer([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 2), 0, 'Test 124');
test(findWinningPlayer([3,6,9,12,15,18,21,24,27,30,1,2,4,5,7,8,10,11,13,14,16,17,19,20,22,23,25,26,28,29], 15), 9, 'Test 125');
test(findWinningPlayer([100, 101, 102, 103, 104, 105, 106, 107, 108, 109], 10), 9, 'Test 126');
test(findWinningPlayer([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 15), 14, 'Test 127');
test(findWinningPlayer([1,10,2,9,3,8,4,7,5,6], 3), 1, 'Test 128');

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
