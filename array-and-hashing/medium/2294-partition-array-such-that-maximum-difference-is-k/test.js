// Test: 2294. Partition Array Such That Maximum Difference Is K
// 112 test cases from LeetCodeDataset
// Run: node test.js

const { partitionArray } = require("./solution");

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

console.log("\n2294. Partition Array Such That Maximum Difference Is K\n");

test(partitionArray([1,100000], 99999), 1, 'Test 1');
test(partitionArray([1,2,3,4,5,6,7,8,9,10], 2), 4, 'Test 2');
test(partitionArray([10,20,30,40,50], 10), 3, 'Test 3');
test(partitionArray([1,3,5,7,9,11,13,15,17,19], 4), 4, 'Test 4');
test(partitionArray([5,5,5,5,5], 0), 1, 'Test 5');
test(partitionArray([1,2,3], 1), 2, 'Test 6');
test(partitionArray([1,3,5,7,9], 1), 5, 'Test 7');
test(partitionArray([1,2,3,4,5,6,7,8,9,10], 1), 5, 'Test 8');
test(partitionArray([1,3,5,7,9,11,13,15,17,19], 2), 5, 'Test 9');
test(partitionArray([3,6,1,2,5], 2), 2, 'Test 10');
test(partitionArray([5,5,5,5,5], 1), 1, 'Test 11');
test(partitionArray([2,2,4,5], 0), 3, 'Test 12');
test(partitionArray([1,2,3,4,5], 4), 1, 'Test 13');
test(partitionArray([5,4,3,2,1], 3), 2, 'Test 14');
test(partitionArray([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100), 5, 'Test 15');
test(partitionArray([1,100,101,200,201,300,301], 1), 4, 'Test 16');
test(partitionArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 2), 9, 'Test 17');
test(partitionArray([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61], 4), 8, 'Test 18');
test(partitionArray([5,5,5,10,10,10,15,15,15,20,20,20,25,25,25,30,30,30,35,35,35,40,40,40,45,45,45], 5), 5, 'Test 19');
test(partitionArray([1, 101, 201, 301, 401, 501, 601, 701, 801, 901], 100), 5, 'Test 20');
test(partitionArray([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 20), 4, 'Test 21');
test(partitionArray([100,200,300,400,500,600,700,800,900,1000,1100,1200], 150), 6, 'Test 22');
test(partitionArray([1,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100], 5), 11, 'Test 23');
test(partitionArray([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100], 10), 7, 'Test 24');
test(partitionArray([1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009], 1), 5, 'Test 25');
test(partitionArray([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 5), 5, 'Test 26');
test(partitionArray([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 99), 10, 'Test 27');
test(partitionArray([5,1,9,3,7,2,8,4,6], 1), 5, 'Test 28');
test(partitionArray([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 15), 5, 'Test 29');
test(partitionArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1000), 1, 'Test 30');
test(partitionArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 2), 9, 'Test 31');
test(partitionArray([3,1,2,6,5,4,9,7,8,12,10,11,15,13,14,18,16,17,21,19,20], 3), 6, 'Test 32');
test(partitionArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 1), 5, 'Test 33');
test(partitionArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 1), 20, 'Test 34');
test(partitionArray([1, 100000, 2, 99999, 3, 99998], 99998), 2, 'Test 35');
test(partitionArray([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 6, 'Test 36');
test(partitionArray([10,10,20,20,30,30,40,40,50,50,60,60,70,70,80,80,90,90,100,100], 10), 5, 'Test 37');
test(partitionArray([8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84], 4), 10, 'Test 38');
test(partitionArray([5,4,3,2,1,0,-1,-2,-3,-4,-5], 1), 6, 'Test 39');
test(partitionArray([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10], 1), 5, 'Test 40');
test(partitionArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 2), 10, 'Test 41');
test(partitionArray([100, 105, 110, 115, 120, 125, 130, 135, 140, 145], 10), 4, 'Test 42');
test(partitionArray([1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10], 1), 5, 'Test 43');
test(partitionArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 20), 5, 'Test 44');
test(partitionArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 24), 1, 'Test 45');
test(partitionArray([5,8,12,15,20,25,30,35,40,45,50], 5), 6, 'Test 46');
test(partitionArray([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6], 1), 3, 'Test 47');
test(partitionArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 1), 10, 'Test 48');
test(partitionArray([100,200,300,400,500,600,700,800,900,1000], 200), 4, 'Test 49');
test(partitionArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 4), 4, 'Test 50');
test(partitionArray([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 0), 1, 'Test 51');
test(partitionArray([1, 3, 6, 8, 10, 15, 18, 20, 22, 25], 4), 5, 'Test 52');
test(partitionArray([10, 21, 32, 43, 54, 65, 76, 87, 98, 109, 120, 131, 142, 153, 164], 11), 8, 'Test 53');
test(partitionArray([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991], 1), 5, 'Test 54');
test(partitionArray([1, 4, 7, 10, 13, 16, 19, 22, 25, 28], 3), 5, 'Test 55');
test(partitionArray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 0), 1, 'Test 56');
test(partitionArray([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31], 4), 6, 'Test 57');
test(partitionArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 2), 10, 'Test 58');
test(partitionArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 2), 8, 'Test 59');
test(partitionArray([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93, 97, 101], 4), 13, 'Test 60');
test(partitionArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5), 4, 'Test 61');
test(partitionArray([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5], 1), 3, 'Test 62');
test(partitionArray([1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 21, 22, 23, 24, 25], 10), 3, 'Test 63');
test(partitionArray([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 150), 5, 'Test 64');
test(partitionArray([1,3,5,7,9,11,13,15,17,19,21], 2), 6, 'Test 65');
test(partitionArray([5,10,15,20,25,30,35,40,45,50], 5), 5, 'Test 66');
test(partitionArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1), 10, 'Test 67');
test(partitionArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 0), 25, 'Test 68');
test(partitionArray([1,3,6,9,12,15,18,21,24,27,30], 3), 6, 'Test 69');
test(partitionArray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 1), 5, 'Test 70');
test(partitionArray([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 2), 8, 'Test 71');
test(partitionArray([1, 5, 9, 14, 18, 22, 26, 30], 4), 5, 'Test 72');
test(partitionArray([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155, 165, 175, 185, 195], 10), 10, 'Test 73');
test(partitionArray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 0), 1, 'Test 74');
test(partitionArray([1, 3, 6, 8, 10, 15, 18, 20, 25, 28], 3), 6, 'Test 75');
test(partitionArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 25), 5, 'Test 76');
test(partitionArray([100,200,300,400,500,600,700,800,900,1000], 50), 10, 'Test 77');
test(partitionArray([5, 8, 3, 9, 1, 4, 7, 6, 2, 10], 3), 3, 'Test 78');
test(partitionArray([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 5), 4, 'Test 79');
test(partitionArray([5, 1, 9, 3, 7, 11, 6, 4, 8, 2, 10, 12], 3), 3, 'Test 80');
test(partitionArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 2), 5, 'Test 81');
test(partitionArray([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77], 4), 10, 'Test 82');
test(partitionArray([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 10), 10, 'Test 83');
test(partitionArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 15), 8, 'Test 84');
test(partitionArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 2), 7, 'Test 85');
test(partitionArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 3), 7, 'Test 86');
test(partitionArray([100000, 99999, 99998, 99997, 99996, 99995, 99994], 3), 2, 'Test 87');
test(partitionArray([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93, 97, 101, 105, 109, 113, 117, 121, 125, 129, 133, 137, 141, 145, 149, 153, 157, 161, 165, 169, 173, 177, 181, 185, 189, 193, 197], 4), 25, 'Test 88');
test(partitionArray([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49], 2), 13, 'Test 89');
test(partitionArray([1,4,6,8,10,12,14,16,18,20,22,24,26,28,30], 3), 8, 'Test 90');
test(partitionArray([100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000], 10000), 5, 'Test 91');
test(partitionArray([4, 8, 15, 16, 23, 42, 50, 55, 60, 65], 10), 4, 'Test 92');
test(partitionArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 3), 10, 'Test 93');
test(partitionArray([1,10,20,30,40,50,60,70,80,90,100], 5), 11, 'Test 94');
test(partitionArray([1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 10, 10, 10, 10], 1), 5, 'Test 95');
test(partitionArray([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50], 5), 9, 'Test 96');
test(partitionArray([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6], 1), 3, 'Test 97');
test(partitionArray([7, 14, 21, 28, 35, 42, 49, 56, 63, 70], 7), 5, 'Test 98');
test(partitionArray([5, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48], 5), 6, 'Test 99');
test(partitionArray([10,20,30,40,50,60,70,80,90,100], 0), 10, 'Test 100');
test(partitionArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 10), 10, 'Test 101');
test(partitionArray([1,3,6,10,15,21,28,36,45,55,66,78,91,105,120], 15), 6, 'Test 102');
test(partitionArray([30, 40, 20, 50, 60, 10, 70, 80, 90, 100], 10), 5, 'Test 103');
test(partitionArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 2), 5, 'Test 104');
test(partitionArray([90,80,70,60,50,40,30,20,10,0,-10,-20,-30,-40,-50], 20), 5, 'Test 105');
test(partitionArray([5, 2, 9, 1, 5, 6], 4), 2, 'Test 106');
test(partitionArray([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 10), 7, 'Test 107');
test(partitionArray([1, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91, 100], 9), 6, 'Test 108');
test(partitionArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], 1), 20, 'Test 109');
test(partitionArray([15, 8, 20, 12, 18, 25, 5, 10, 30, 22], 5), 4, 'Test 110');
test(partitionArray([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40], 4), 7, 'Test 111');
test(partitionArray([1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 10), 8, 'Test 112');

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
