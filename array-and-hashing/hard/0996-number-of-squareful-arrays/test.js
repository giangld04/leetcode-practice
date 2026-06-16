// Test: 996. Number Of Squareful Arrays
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { numSquarefulPerms } = require("./solution");

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

console.log("\n996. Number Of Squareful Arrays\n");

test(numSquarefulPerms([9,0,16,25,36]), 0, 'Test 1');
test(numSquarefulPerms([2,2,2]), 1, 'Test 2');
test(numSquarefulPerms([1,17,8]), 2, 'Test 3');
test(numSquarefulPerms([9,0,9]), 1, 'Test 4');
test(numSquarefulPerms([0,0,0]), 1, 'Test 5');
test(numSquarefulPerms([4,6,15,33,50]), 0, 'Test 6');
test(numSquarefulPerms([0,1,1,0]), 3, 'Test 7');
test(numSquarefulPerms([16,9,4,0,25]), 0, 'Test 8');
test(numSquarefulPerms([1,3,5,7,9,11,13,15,17,19,21,23]), 0, 'Test 9');
test(numSquarefulPerms([1,1,1,1]), 0, 'Test 10');
test(numSquarefulPerms([4,6,15,33]), 0, 'Test 11');
test(numSquarefulPerms([9,0,4,10,9]), 0, 'Test 12');
test(numSquarefulPerms([0,0,0,0]), 1, 'Test 13');
test(numSquarefulPerms([1,2,3,6,10]), 0, 'Test 14');
test(numSquarefulPerms([25,10,5,15,20]), 0, 'Test 15');
test(numSquarefulPerms([9,4,1,4,9]), 0, 'Test 16');
test(numSquarefulPerms([1,3,5,7,9]), 0, 'Test 17');
test(numSquarefulPerms([2,8,10,18,26]), 0, 'Test 18');
test(numSquarefulPerms([1, 2, 5, 10, 17, 26, 37, 50, 65, 82]), 0, 'Test 19');
test(numSquarefulPerms([0,1,3,6,10,15,21,28,36,45,55,66]), 12, 'Test 20');
test(numSquarefulPerms([0, 4, 9, 16, 25, 36, 49]), 0, 'Test 21');
test(numSquarefulPerms([2,7,8,18,20,25]), 0, 'Test 22');
test(numSquarefulPerms([1,2,3,4,5,6,7,8,9,10,11,12]), 0, 'Test 23');
test(numSquarefulPerms([1, 3, 6, 10, 15, 21, 28, 36, 45]), 4, 'Test 24');
test(numSquarefulPerms([4,6,9,11,14,16,19,21,25,27,30,32]), 0, 'Test 25');
test(numSquarefulPerms([100,121,144,169,196,225,256,289,324,361,400,441]), 0, 'Test 26');
test(numSquarefulPerms([0,1,2,3,4,5,6,7,8,9,10,11]), 0, 'Test 27');
test(numSquarefulPerms([2, 6, 12, 20, 30, 42, 56, 72, 90, 110, 132, 156]), 0, 'Test 28');
test(numSquarefulPerms([10, 15, 21, 26, 30, 35, 40]), 0, 'Test 29');
test(numSquarefulPerms([16, 9, 0, 4, 25, 1]), 0, 'Test 30');
test(numSquarefulPerms([25, 36, 49, 64, 81, 100, 121]), 0, 'Test 31');
test(numSquarefulPerms([4,6,9,10,15,21,30,36,45,55]), 0, 'Test 32');
test(numSquarefulPerms([1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144]), 0, 'Test 33');
test(numSquarefulPerms([0,0,1,2,3,4,5,6,7,8,9,10]), 0, 'Test 34');
test(numSquarefulPerms([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 0, 'Test 35');
test(numSquarefulPerms([4,9,16,25,36,49,64,81,100,121,144,169]), 0, 'Test 36');
test(numSquarefulPerms([18, 20, 22, 24, 26, 28, 30, 32, 34, 36]), 0, 'Test 37');
test(numSquarefulPerms([4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169]), 0, 'Test 38');
test(numSquarefulPerms([1, 2, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66]), 0, 'Test 39');
test(numSquarefulPerms([3,6,9,12,15,18,21]), 0, 'Test 40');
test(numSquarefulPerms([0,1,2,3,4,5,6,7,8,9,10,100]), 0, 'Test 41');
test(numSquarefulPerms([8,18,28,38,48,58,68,78,88,98]), 0, 'Test 42');
test(numSquarefulPerms([1,2,3,5,6,7,8,9,10,11,12,13]), 0, 'Test 43');
test(numSquarefulPerms([0,0,1,1,2,2,3,3,4,4,5,5]), 0, 'Test 44');
test(numSquarefulPerms([10,15,20,25,30,35,40,45,50,55,60]), 0, 'Test 45');
test(numSquarefulPerms([5, 13, 29, 34, 37, 41, 50, 53, 61, 65, 72, 74]), 0, 'Test 46');
test(numSquarefulPerms([2, 3, 6, 11, 15, 20]), 0, 'Test 47');
test(numSquarefulPerms([0, 2, 8, 18, 32, 50, 72, 98, 128, 162, 200, 242]), 0, 'Test 48');
test(numSquarefulPerms([2,3,5,7,11,13,17,19,23,29,31,37]), 0, 'Test 49');
test(numSquarefulPerms([4, 1, 3, 0, 9, 16, 25, 36, 49]), 0, 'Test 50');
test(numSquarefulPerms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 0, 'Test 51');
test(numSquarefulPerms([25,36,49,64,81,100,121,144,169,196,225,256]), 0, 'Test 52');
test(numSquarefulPerms([2,7,11,15,20,25]), 0, 'Test 53');
test(numSquarefulPerms([81,180,144,121,100,25,0]), 0, 'Test 54');
test(numSquarefulPerms([0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66]), 12, 'Test 55');
test(numSquarefulPerms([1, 2, 3, 6, 10, 15, 21]), 0, 'Test 56');
test(numSquarefulPerms([81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400]), 0, 'Test 57');
test(numSquarefulPerms([1,2,3,4,5,6,7,8,9,10,11,121]), 0, 'Test 58');
test(numSquarefulPerms([2, 8, 14, 20, 26, 32, 38, 44, 50, 56, 62, 68]), 0, 'Test 59');
test(numSquarefulPerms([8, 17, 28, 39, 50, 61, 72, 83]), 0, 'Test 60');
test(numSquarefulPerms([2, 3, 6, 7, 8, 15, 21, 30, 35, 42, 48, 55]), 0, 'Test 61');
test(numSquarefulPerms([5,7,8,12,13,16,17,24,25,28,32,33]), 0, 'Test 62');
test(numSquarefulPerms([1,16,81,144,121,100,25]), 0, 'Test 63');
test(numSquarefulPerms([50,100,150,200,250,300,350,400,450,500,550,600]), 0, 'Test 64');
test(numSquarefulPerms([1,16,9,4,0,36,25,10]), 0, 'Test 65');
test(numSquarefulPerms([49, 52, 55, 58, 61, 64, 67, 70, 73, 76, 79, 82]), 0, 'Test 66');
test(numSquarefulPerms([4, 6, 9, 10, 15, 21, 25]), 0, 'Test 67');
test(numSquarefulPerms([1,2,4,8,16,32,64,128,256]), 0, 'Test 68');
test(numSquarefulPerms([0,0,1,1,4,4,9,9,16,16,25,25]), 0, 'Test 69');
test(numSquarefulPerms([4, 6, 9, 13, 15, 17, 21, 25, 27, 31]), 0, 'Test 70');
test(numSquarefulPerms([5, 13, 25, 41, 61, 85, 113, 145, 181, 221, 265]), 0, 'Test 71');
test(numSquarefulPerms([8,15,18,23,26,32,35,38,41]), 0, 'Test 72');
test(numSquarefulPerms([0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121]), 0, 'Test 73');
test(numSquarefulPerms([2,3,6,5,9,10]), 0, 'Test 74');
test(numSquarefulPerms([8, 7, 15, 1, 28, 25, 24]), 0, 'Test 75');
test(numSquarefulPerms([3, 6, 9, 12, 15, 18, 21]), 0, 'Test 76');
test(numSquarefulPerms([1, 2, 2, 3, 6, 10]), 0, 'Test 77');
test(numSquarefulPerms([144, 169, 196, 225, 256, 289, 324, 361]), 0, 'Test 78');
test(numSquarefulPerms([3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]), 0, 'Test 79');
test(numSquarefulPerms([8,18,28,38,48,58,68,78,88,98,108,118]), 0, 'Test 80');
test(numSquarefulPerms([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]), 0, 'Test 81');
test(numSquarefulPerms([1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78]), 12, 'Test 82');
test(numSquarefulPerms([1, 4, 9, 16, 25, 36, 49]), 0, 'Test 83');
test(numSquarefulPerms([8,7,3,12,5,13,25,16,9]), 0, 'Test 84');
test(numSquarefulPerms([16,9,4,1,0,25,36,49,64,81]), 0, 'Test 85');
test(numSquarefulPerms([0, 1, 4, 9, 16, 25, 36, 49]), 0, 'Test 86');
test(numSquarefulPerms([0, 1, 4, 9, 16, 25, 36, 49, 64, 81]), 0, 'Test 87');
test(numSquarefulPerms([36,100,144,196,256,324,400,484,576,676,784,900]), 0, 'Test 88');
test(numSquarefulPerms([1,2,3,4,5,6,7,8,9,10,11,120]), 0, 'Test 89');
test(numSquarefulPerms([0,0,1,1,2,2,3,3,4,4]), 0, 'Test 90');
test(numSquarefulPerms([4,6,9,10,13,15,16,18,19,20,25,28]), 0, 'Test 91');
test(numSquarefulPerms([1,4,9,16,25,36,49,64,81,100,121,144]), 0, 'Test 92');
test(numSquarefulPerms([3, 12, 27, 48, 75, 108, 147, 192, 243, 300, 363, 432]), 0, 'Test 93');
test(numSquarefulPerms([49,36,25,16,9,4,1,0,81,64,49,36]), 0, 'Test 94');
test(numSquarefulPerms([2,4,6,8,10,12,14,16,18,20,22,24]), 0, 'Test 95');
test(numSquarefulPerms([10, 21, 35, 51, 70, 92, 117, 144, 173, 204, 237]), 0, 'Test 96');
test(numSquarefulPerms([2, 3, 6, 11, 19, 20]), 0, 'Test 97');
test(numSquarefulPerms([8, 15, 24, 35, 46, 57, 68, 79, 90, 101, 112, 123]), 0, 'Test 98');
test(numSquarefulPerms([5,10,15,20,25,30,35,40,45]), 0, 'Test 99');
test(numSquarefulPerms([1, 4, 9, 16, 25, 36, 49, 64, 81, 100]), 0, 'Test 100');
test(numSquarefulPerms([1,4,9,16,25,36,49,64,81]), 0, 'Test 101');
test(numSquarefulPerms([1,4,9,16,25,36,49,64,81,100]), 0, 'Test 102');
test(numSquarefulPerms([2,2,2,2,2,2,2,2,2,2,2,2]), 1, 'Test 103');
test(numSquarefulPerms([1,17,8,2,18,20,32,50,33,6]), 0, 'Test 104');
test(numSquarefulPerms([1, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91, 100]), 0, 'Test 105');
test(numSquarefulPerms([50, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324]), 0, 'Test 106');
test(numSquarefulPerms([10, 15, 21, 26, 35, 40, 51, 56, 65, 70, 85, 90]), 0, 'Test 107');
test(numSquarefulPerms([0,1,4,9,16,25,36,49]), 0, 'Test 108');
test(numSquarefulPerms([1,3,6,10,15,21,28,36,45,55,66,78]), 12, 'Test 109');

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
