// Test: 2274. Maximum Consecutive Floors Without Special Floors
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { maxConsecutive } = require("./solution");

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

console.log("\n2274. Maximum Consecutive Floors Without Special Floors\n");

test(maxConsecutive(3, 7, [3,4,5,6,7]), 0, 'Test 1');
test(maxConsecutive(1, 1, [1]), 0, 'Test 2');
test(maxConsecutive(1, 10, [3,5,7,9]), 2, 'Test 3');
test(maxConsecutive(6, 8, [7, 6, 8]), 0, 'Test 4');
test(maxConsecutive(5, 15, [10]), 5, 'Test 5');
test(maxConsecutive(3, 15, [3, 5, 7, 9, 11, 15]), 3, 'Test 6');
test(maxConsecutive(1, 1, []), Error: list index out of range, 'Test 7');
test(maxConsecutive(1, 10, [2,5,8]), 2, 'Test 8');
test(maxConsecutive(10, 20, [12, 14, 16, 18]), 2, 'Test 9');
test(maxConsecutive(6, 8, [7,6,8]), 0, 'Test 10');
test(maxConsecutive(2, 9, [4,6]), 3, 'Test 11');
test(maxConsecutive(10, 20, [12,15,18]), 2, 'Test 12');
test(maxConsecutive(1, 10, [5]), 5, 'Test 13');
test(maxConsecutive(10, 10, [10]), 0, 'Test 14');
test(maxConsecutive(1, 1000000000, [500000000]), 500000000, 'Test 15');
test(maxConsecutive(3, 7, [3, 4, 5, 6, 7]), 0, 'Test 16');
test(maxConsecutive(1, 10, [3, 5, 7]), 3, 'Test 17');
test(maxConsecutive(2, 9, [4, 6]), 3, 'Test 18');
test(maxConsecutive(1, 100, [5, 15, 25, 35, 45, 55, 65, 75, 85, 95]), 9, 'Test 19');
test(maxConsecutive(1, 1000000, [100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000]), 100000, 'Test 20');
test(maxConsecutive(2, 100, [10, 20, 30, 40, 50, 60, 70, 80, 90]), 10, 'Test 21');
test(maxConsecutive(50, 200, [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190]), 10, 'Test 22');
test(maxConsecutive(1, 1000, [1, 500, 1000]), 499, 'Test 23');
test(maxConsecutive(10, 20, [11, 13, 15, 17]), 3, 'Test 24');
test(maxConsecutive(50, 200, [100, 150, 125]), 50, 'Test 25');
test(maxConsecutive(5, 50, [10, 20, 30, 40]), 10, 'Test 26');
test(maxConsecutive(1, 1000000000, [1000000000]), 999999999, 'Test 27');
test(maxConsecutive(1, 1000000000, [1, 1000000000]), 999999998, 'Test 28');
test(maxConsecutive(5, 25, [7, 13, 19]), 6, 'Test 29');
test(maxConsecutive(1, 500, [250]), 250, 'Test 30');
test(maxConsecutive(5, 20, [6, 8, 10, 12, 14, 16, 18]), 2, 'Test 31');
test(maxConsecutive(1, 1000, [500, 750]), 499, 'Test 32');
test(maxConsecutive(1, 1000, [500]), 500, 'Test 33');
test(maxConsecutive(1, 50, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48]), 2, 'Test 34');
test(maxConsecutive(5, 15, [6, 11]), 4, 'Test 35');
test(maxConsecutive(5, 15, [7, 10, 13]), 2, 'Test 36');
test(maxConsecutive(10, 50, [15, 25, 35, 45]), 9, 'Test 37');
test(maxConsecutive(10, 50, [15, 25, 35]), 15, 'Test 38');
test(maxConsecutive(1, 50, [50]), 49, 'Test 39');
test(maxConsecutive(1, 100, [2, 98]), 95, 'Test 40');
test(maxConsecutive(5, 25, [10, 20]), 9, 'Test 41');
test(maxConsecutive(1, 100, [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100]), 3, 'Test 42');
test(maxConsecutive(1, 100, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 81, 'Test 43');
test(maxConsecutive(1, 100, [50]), 50, 'Test 44');
test(maxConsecutive(1, 1000, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99]), 901, 'Test 45');
test(maxConsecutive(1, 100, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99, 100]), 1, 'Test 46');
test(maxConsecutive(10, 20, [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 0, 'Test 47');
test(maxConsecutive(1, 1000000000, [100000000, 200000000, 300000000, 400000000, 500000000, 600000000, 700000000, 800000000, 900000000]), 100000000, 'Test 48');
test(maxConsecutive(1, 1000, [10, 200, 300, 400, 500, 600, 700, 800, 900]), 189, 'Test 49');
test(maxConsecutive(1, 50, [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47]), 3, 'Test 50');
test(maxConsecutive(100, 200, [120, 130, 140, 150, 160, 170, 180, 190]), 20, 'Test 51');
test(maxConsecutive(1, 1000, [1, 1000]), 998, 'Test 52');
test(maxConsecutive(1, 1000000000, [1, 500000000, 1000000000]), 499999999, 'Test 53');
test(maxConsecutive(10, 20, [10, 12, 14, 16, 18, 20]), 1, 'Test 54');
test(maxConsecutive(1, 1000, [100, 200, 300, 400, 500, 600, 700, 800, 900]), 100, 'Test 55');
test(maxConsecutive(1, 1000000, [500000]), 500000, 'Test 56');
test(maxConsecutive(5, 50, [15, 25, 35, 45]), 10, 'Test 57');
test(maxConsecutive(50, 150, [51, 52, 53, 54, 55, 56, 57, 58, 59, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149]), 40, 'Test 58');
test(maxConsecutive(1, 50, [25]), 25, 'Test 59');
test(maxConsecutive(1, 2000000000, [1000000000]), 1000000000, 'Test 60');
test(maxConsecutive(10, 100, [15, 35, 60, 85]), 24, 'Test 61');
test(maxConsecutive(1, 100, [1, 2, 3, 4, 5, 96, 97, 98, 99, 100]), 90, 'Test 62');
test(maxConsecutive(10, 1000, [150, 250, 350, 450, 550, 650, 750, 850, 950]), 140, 'Test 63');
test(maxConsecutive(5, 50, [10, 15, 20, 25, 30, 35, 40, 45]), 5, 'Test 64');
test(maxConsecutive(10, 20, [12, 15, 18]), 2, 'Test 65');
test(maxConsecutive(1, 100, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100]), 1, 'Test 66');
test(maxConsecutive(1, 100, [10, 20, 30, 40, 50, 60, 70, 80, 90]), 10, 'Test 67');
test(maxConsecutive(10, 50, [12, 15, 20, 25, 30, 35, 40, 45]), 5, 'Test 68');
test(maxConsecutive(10, 10000, [500, 2500, 4500, 6500, 8500]), 1999, 'Test 69');
test(maxConsecutive(1, 100, [99]), 98, 'Test 70');
test(maxConsecutive(1, 100, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 61, 'Test 71');
test(maxConsecutive(1, 100, [1, 100]), 98, 'Test 72');
test(maxConsecutive(10, 100, [20, 40, 60, 80]), 20, 'Test 73');
test(maxConsecutive(1, 1000000, [1, 2, 3, 4, 5, 999995, 999996, 999997, 999998, 999999]), 999989, 'Test 74');
test(maxConsecutive(1, 20, [2, 4, 6, 8, 10, 12, 14, 16, 18]), 2, 'Test 75');
test(maxConsecutive(1, 20, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 1, 'Test 76');
test(maxConsecutive(1, 10, [2, 4, 6, 8]), 2, 'Test 77');
test(maxConsecutive(100, 200, [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200]), 1, 'Test 78');
test(maxConsecutive(100, 500, [200, 300, 400]), 100, 'Test 79');
test(maxConsecutive(1, 100, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 9, 'Test 80');
test(maxConsecutive(1, 20, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 1, 'Test 81');
test(maxConsecutive(10, 1000, [100, 200, 300, 400, 500, 600, 700, 800, 900]), 100, 'Test 82');
test(maxConsecutive(1, 100, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99]), 1, 'Test 83');
test(maxConsecutive(1, 50, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]), 29, 'Test 84');
test(maxConsecutive(20, 200, [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190]), 10, 'Test 85');
test(maxConsecutive(5, 50, [15, 25, 35, 45, 5, 40]), 9, 'Test 86');
test(maxConsecutive(1, 100, [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95]), 5, 'Test 87');
test(maxConsecutive(10, 50, [20, 30, 40]), 10, 'Test 88');
test(maxConsecutive(1, 100, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]), 7, 'Test 89');
test(maxConsecutive(1, 10, [1, 3, 5, 7, 9]), 1, 'Test 90');
test(maxConsecutive(1, 100, [5, 25, 45, 65, 85, 95]), 19, 'Test 91');
test(maxConsecutive(10, 100, [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 75, 'Test 92');
test(maxConsecutive(1, 100, [2, 25, 50, 75, 100]), 24, 'Test 93');
test(maxConsecutive(1, 10, [2, 4, 6, 8, 10]), 1, 'Test 94');

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
