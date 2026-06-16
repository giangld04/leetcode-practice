// Test: 2029. Stone Game Ix
// 108 test cases from LeetCodeDataset
// Run: node test.js

const { stoneGameIX } = require("./solution");

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

console.log("\n2029. Stone Game Ix\n");

test(stoneGameIX([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), true, 'Test 1');
test(stoneGameIX([2,2,2,2,2,2,2,2,2,2,2,2]), false, 'Test 2');
test(stoneGameIX([3,6,9,12,15]), false, 'Test 3');
test(stoneGameIX([2,1]), true, 'Test 4');
test(stoneGameIX([1,2,3,6,9,12,15]), false, 'Test 5');
test(stoneGameIX([1,1,1,1,1,1,1,1,1,1]), false, 'Test 6');
test(stoneGameIX([3,3,3]), false, 'Test 7');
test(stoneGameIX([3,3,3,3,3,3,3,3,1]), false, 'Test 8');
test(stoneGameIX([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), false, 'Test 9');
test(stoneGameIX([1,5,9,13,17,21]), true, 'Test 10');
test(stoneGameIX([10000,9999,9998,9997,9996,9995,9994,9993,9992,9991]), false, 'Test 11');
test(stoneGameIX([1,2,3,4,5,6,7,8,9,10]), false, 'Test 12');
test(stoneGameIX([1,1,1,1,1,1,1,1,1]), false, 'Test 13');
test(stoneGameIX([5,1,2,4,3]), false, 'Test 14');
test(stoneGameIX([1,2,3,4,5,6,7,8,9]), false, 'Test 15');
test(stoneGameIX([3,6,9,12,15,18,21]), false, 'Test 16');
test(stoneGameIX([1,5,7,11,13,17,19]), true, 'Test 17');
test(stoneGameIX([10,20,30,40,50]), false, 'Test 18');
test(stoneGameIX([3,6,9]), false, 'Test 19');
test(stoneGameIX([1,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73]), true, 'Test 20');
test(stoneGameIX([1,2,2,3,3,3,4,4,4,4]), true, 'Test 21');
test(stoneGameIX([2]), false, 'Test 22');
test(stoneGameIX([2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), true, 'Test 23');
test(stoneGameIX([1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]), false, 'Test 24');
test(stoneGameIX([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2, 3, 8, 4, 6]), false, 'Test 25');
test(stoneGameIX([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), true, 'Test 26');
test(stoneGameIX([0, 3, 6, 9, 12, 15, 18, 21, 24, 27]), false, 'Test 27');
test(stoneGameIX([3, 9, 27, 81, 243, 729, 2187, 6561, 19683]), false, 'Test 28');
test(stoneGameIX([1, 2, 2, 1, 2, 2, 1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 2, 1, 1, 2]), true, 'Test 29');
test(stoneGameIX([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]), false, 'Test 30');
test(stoneGameIX([1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3]), true, 'Test 31');
test(stoneGameIX([2, 2, 2, 1, 1, 1, 0, 0, 0]), false, 'Test 32');
test(stoneGameIX([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45]), false, 'Test 33');
test(stoneGameIX([1, 2, 4, 5, 7, 8, 10, 11]), true, 'Test 34');
test(stoneGameIX([1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), true, 'Test 35');
test(stoneGameIX([10, 15, 20, 25, 30, 35, 40, 45, 50, 55]), false, 'Test 36');
test(stoneGameIX([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]), false, 'Test 37');
test(stoneGameIX([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86]), false, 'Test 38');
test(stoneGameIX([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), true, 'Test 39');
test(stoneGameIX([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150]), true, 'Test 40');
test(stoneGameIX([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80]), false, 'Test 41');
test(stoneGameIX([1, 1, 1, 2, 2, 2, 3, 3, 3, 1, 1, 1, 2, 2, 2, 3, 3, 3, 1, 1]), true, 'Test 42');
test(stoneGameIX([1, 4, 7, 10, 13, 16, 19, 22, 25, 28]), false, 'Test 43');
test(stoneGameIX([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90]), false, 'Test 44');
test(stoneGameIX([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), false, 'Test 45');
test(stoneGameIX([2, 5, 8, 11, 14, 17, 20, 23, 26, 29]), false, 'Test 46');
test(stoneGameIX([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), false, 'Test 47');
test(stoneGameIX([5, 1, 2, 4, 3, 5, 1, 2, 4, 3, 5, 1, 2, 4, 3, 5, 1, 2, 4, 3, 5, 1, 2, 4, 3, 5, 1, 2, 4, 3]), true, 'Test 48');
test(stoneGameIX([1,2,2,3,4,4,5,5,5,6,6,6,7,8,8,8,9,10,10,10,11,12,12,12,13,14,15,16,16,17,18,18,19,19,20]), false, 'Test 49');
test(stoneGameIX([10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000]), false, 'Test 50');
test(stoneGameIX([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), false, 'Test 51');
test(stoneGameIX([3,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51]), false, 'Test 52');
test(stoneGameIX([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), false, 'Test 53');
test(stoneGameIX([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), true, 'Test 54');
test(stoneGameIX([1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17]), true, 'Test 55');
test(stoneGameIX([1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4]), true, 'Test 56');
test(stoneGameIX([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]), true, 'Test 57');
test(stoneGameIX([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9]), false, 'Test 58');
test(stoneGameIX([1, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 1]), true, 'Test 59');
test(stoneGameIX([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]), false, 'Test 60');
test(stoneGameIX([1,4,7,10,13,16,19,22,25,28,31,34,37,40,43,46,49,52,55,58,61,64,67,70,73,76,79,82,85,88]), false, 'Test 61');
test(stoneGameIX([1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 8, 8]), false, 'Test 62');
test(stoneGameIX([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), true, 'Test 63');
test(stoneGameIX([3, 6, 9, 12, 15, 1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22]), false, 'Test 64');
test(stoneGameIX([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]), true, 'Test 65');
test(stoneGameIX([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87]), false, 'Test 66');
test(stoneGameIX([99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119]), false, 'Test 67');
test(stoneGameIX([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), true, 'Test 68');
test(stoneGameIX([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), false, 'Test 69');
test(stoneGameIX([1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3]), true, 'Test 70');
test(stoneGameIX([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14]), true, 'Test 71');
test(stoneGameIX([3, 6, 9, 2, 5, 8, 11, 14, 17, 20]), true, 'Test 72');
test(stoneGameIX([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), false, 'Test 73');
test(stoneGameIX([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60]), false, 'Test 74');
test(stoneGameIX([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), false, 'Test 75');
test(stoneGameIX([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), true, 'Test 76');
test(stoneGameIX([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), false, 'Test 77');
test(stoneGameIX([1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23, 25, 26, 28, 29]), true, 'Test 78');
test(stoneGameIX([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), false, 'Test 79');
test(stoneGameIX([1, 2, 2, 1, 2, 1, 2, 2, 1]), true, 'Test 80');
test(stoneGameIX([1, 2, 2, 2, 3, 3, 3, 3, 4, 5, 6, 6, 6, 6, 7, 8, 9]), false, 'Test 81');
test(stoneGameIX([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]), false, 'Test 82');
test(stoneGameIX([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59]), false, 'Test 83');
test(stoneGameIX([1001,1004,1007,1010,1013,1016,1019,1022,1025,1028,1031,1034,1037,1040,1043,1046,1049,1052,1055,1058]), false, 'Test 84');
test(stoneGameIX([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7]), true, 'Test 85');
test(stoneGameIX([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), false, 'Test 86');
test(stoneGameIX([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]), true, 'Test 87');
test(stoneGameIX([30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]), false, 'Test 88');
test(stoneGameIX([2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), true, 'Test 89');
test(stoneGameIX([1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6]), true, 'Test 90');
test(stoneGameIX([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), false, 'Test 91');
test(stoneGameIX([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108, 117, 126, 135, 144, 153, 162, 171, 180]), false, 'Test 92');
test(stoneGameIX([100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119]), true, 'Test 93');
test(stoneGameIX([1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), true, 'Test 94');
test(stoneGameIX([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1]), true, 'Test 95');
test(stoneGameIX([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7]), true, 'Test 96');
test(stoneGameIX([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), false, 'Test 97');
test(stoneGameIX([2,5,8,11,14,17,20,23,26,29,32,35,38,41,44,47,50,53,56,59,62,65,68,71,74,77,80,83,86,89]), false, 'Test 98');
test(stoneGameIX([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), false, 'Test 99');
test(stoneGameIX([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58]), false, 'Test 100');
test(stoneGameIX([1, 2, 2, 1, 2, 2, 1, 2]), true, 'Test 101');
test(stoneGameIX([3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), false, 'Test 102');
test(stoneGameIX([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), false, 'Test 103');
test(stoneGameIX([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]), false, 'Test 104');
test(stoneGameIX([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), false, 'Test 105');
test(stoneGameIX([3, 5, 7, 9, 11, 13, 15, 17, 19, 21]), true, 'Test 106');
test(stoneGameIX([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11]), true, 'Test 107');
test(stoneGameIX([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5]), true, 'Test 108');

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
