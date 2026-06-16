// Test: 3184. Count Pairs That Form A Complete Day I
// 83 test cases from LeetCodeDataset
// Run: node test.js

const { countCompleteDayPairs } = require("./solution");

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

console.log("\n3184. Count Pairs That Form A Complete Day I\n");

test(countCompleteDayPairs([23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 11, 'Test 1');
test(countCompleteDayPairs([24,48,72,96,120]), 10, 'Test 2');
test(countCompleteDayPairs([1000000000, 1000000000, 1000000000, 1000000000]), 0, 'Test 3');
test(countCompleteDayPairs([10,14,10,14,48]), 4, 'Test 4');
test(countCompleteDayPairs([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]), 11, 'Test 5');
test(countCompleteDayPairs([24,48,72,96]), 6, 'Test 6');
test(countCompleteDayPairs([1,2,3,4,5]), 0, 'Test 7');
test(countCompleteDayPairs([1,2,3,4,5,6,7,8,9,10]), 0, 'Test 8');
test(countCompleteDayPairs([12,12,30,24,24]), 2, 'Test 9');
test(countCompleteDayPairs([1,2,3,23]), 1, 'Test 10');
test(countCompleteDayPairs([24,24,24,24]), 6, 'Test 11');
test(countCompleteDayPairs([24,24,24,24,24]), 10, 'Test 12');
test(countCompleteDayPairs([72,48,24,3]), 3, 'Test 13');
test(countCompleteDayPairs([23,1,23,1]), 4, 'Test 14');
test(countCompleteDayPairs([23,1,22,2,21,3,20,4,19,5]), 5, 'Test 15');
test(countCompleteDayPairs([23,1,23,1,23]), 6, 'Test 16');
test(countCompleteDayPairs([12,36,60,84]), 6, 'Test 17');
test(countCompleteDayPairs([12,24,36,48,60,72,84,96]), 12, 'Test 18');
test(countCompleteDayPairs([5,5,5,5,5]), 0, 'Test 19');
test(countCompleteDayPairs([10,14,10,14]), 4, 'Test 20');
test(countCompleteDayPairs([1,3,5,7,9,11,13,15,17,19,21,23]), 6, 'Test 21');
test(countCompleteDayPairs([24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24]), 435, 'Test 22');
test(countCompleteDayPairs([24, 48, 72, 96, 120, 144, 168]), 21, 'Test 23');
test(countCompleteDayPairs([23, 1, 47, 25, 71, 49, 95, 73, 119, 97, 143, 121]), 36, 'Test 24');
test(countCompleteDayPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 12, 'Test 25');
test(countCompleteDayPairs([8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232, 240]), 145, 'Test 26');
test(countCompleteDayPairs([20, 44, 68, 92, 116, 140, 164, 188, 212, 236]), 0, 'Test 27');
test(countCompleteDayPairs([23, 23, 23, 23, 23, 1, 1, 1, 1, 1, 47, 47, 47, 47, 47, 71, 71, 71, 71, 71]), 75, 'Test 28');
test(countCompleteDayPairs([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23]), 200, 'Test 29');
test(countCompleteDayPairs([5, 19, 10, 34, 15, 29, 20, 24, 25, 19]), 4, 'Test 30');
test(countCompleteDayPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 12, 'Test 31');
test(countCompleteDayPairs([23, 1, 23, 1, 23, 1, 23, 1, 23, 1]), 25, 'Test 32');
test(countCompleteDayPairs([23, 47, 71, 95, 119, 143, 167, 191, 215, 239, 263, 287]), 0, 'Test 33');
test(countCompleteDayPairs([12, 24, 36, 48, 60, 72, 84, 96]), 12, 'Test 34');
test(countCompleteDayPairs([10, 34, 58, 82, 106, 130, 154, 178, 202, 226]), 0, 'Test 35');
test(countCompleteDayPairs([24, 48, 72, 96, 120, 144]), 15, 'Test 36');
test(countCompleteDayPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]), 20, 'Test 37');
test(countCompleteDayPairs([120, 144, 168, 192, 216, 240, 264, 288, 312, 336, 360, 384, 408, 432, 456, 480, 504, 528, 552, 576]), 190, 'Test 38');
test(countCompleteDayPairs([2, 22, 46, 68, 94, 120, 146, 172, 198, 224, 250, 276, 302, 328, 354, 380, 406, 432]), 14, 'Test 39');
test(countCompleteDayPairs([23, 47, 71, 95, 119, 143, 167, 191, 215, 239, 263, 287, 311, 335, 359, 383, 407, 431, 455, 479]), 0, 'Test 40');
test(countCompleteDayPairs([5, 19, 33, 47, 61, 75, 89, 103, 117, 131, 145, 159, 173, 187, 201, 215, 229, 243, 257, 271]), 16, 'Test 41');
test(countCompleteDayPairs([24, 48, 72, 96, 120, 144, 168, 192, 216]), 36, 'Test 42');
test(countCompleteDayPairs([5, 19, 33, 47, 61, 75, 89, 103, 117, 131, 145, 159, 173, 187, 201, 215, 229]), 12, 'Test 43');
test(countCompleteDayPairs([24, 48, 72, 96, 120, 144, 168, 192, 216, 240, 264, 288, 312, 336, 360, 384, 408, 432, 456, 480]), 190, 'Test 44');
test(countCompleteDayPairs([12, 36, 48, 60, 84, 108, 132, 156, 180]), 28, 'Test 45');
test(countCompleteDayPairs([11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49]), 16, 'Test 46');
test(countCompleteDayPairs([24, 48, 72, 96, 120, 144, 168, 192, 216, 240]), 45, 'Test 47');
test(countCompleteDayPairs([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), 0, 'Test 48');
test(countCompleteDayPairs([2, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145]), 17, 'Test 49');
test(countCompleteDayPairs([23, 47, 71, 95, 119, 143, 167, 191, 215, 239]), 0, 'Test 50');
test(countCompleteDayPairs([24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24]), 190, 'Test 51');
test(countCompleteDayPairs([1, 5, 7, 11, 13, 17, 19, 23, 25, 29, 31, 35, 37, 41, 43, 47, 53, 59, 61, 65, 67, 71, 73, 77, 79, 83, 85, 89, 91, 95, 97, 101, 103, 107, 109, 113, 115, 119, 121, 125, 127, 131, 133, 137, 139, 143, 145, 149, 151, 155, 157, 161, 163, 167, 169, 173, 175, 179, 181, 185, 187, 191, 193, 197, 199]), 264, 'Test 52');
test(countCompleteDayPairs([10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78, 82, 86]), 34, 'Test 53');
test(countCompleteDayPairs([12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]), 435, 'Test 54');
test(countCompleteDayPairs([48, 96, 144, 192, 240, 288, 336, 384, 432, 480, 528, 576, 624, 672, 720, 768, 816, 864, 912, 960]), 190, 'Test 55');
test(countCompleteDayPairs([11, 13, 35, 47, 59, 71, 83, 95, 107, 119]), 5, 'Test 56');
test(countCompleteDayPairs([12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]), 66, 'Test 57');
test(countCompleteDayPairs([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 58');
test(countCompleteDayPairs([144, 168, 192, 216, 240, 264, 288, 312, 336, 360]), 45, 'Test 59');
test(countCompleteDayPairs([23, 1, 47, 24, 25, 48, 49, 23, 1, 24, 24, 24]), 22, 'Test 60');
test(countCompleteDayPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]), 11, 'Test 61');
test(countCompleteDayPairs([13, 11, 25, 19, 49, 23, 35, 17, 55, 15]), 5, 'Test 62');
test(countCompleteDayPairs([5, 19, 29, 43, 53, 67, 77, 91, 101, 115]), 25, 'Test 63');
test(countCompleteDayPairs([15, 9, 27, 3, 39, 51, 63, 75, 87, 99, 111, 123, 135, 147, 159, 171, 183, 195, 207, 219]), 9, 'Test 64');
test(countCompleteDayPairs([23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 1]), 29, 'Test 65');
test(countCompleteDayPairs([15, 9, 27, 39, 51, 63, 75, 87, 99, 111, 123, 135]), 6, 'Test 66');
test(countCompleteDayPairs([123456789, 987654321, 123456789, 987654321, 123456789, 987654321]), 0, 'Test 67');
test(countCompleteDayPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]), 56, 'Test 68');
test(countCompleteDayPairs([5, 19, 9, 15, 9, 15, 9, 15, 29, 11, 13, 21, 23, 47, 71, 95, 119, 143, 167, 191]), 12, 'Test 69');
test(countCompleteDayPairs([3, 21, 39, 57, 75, 93, 111, 129, 147, 165, 183, 201, 219, 237, 255, 273, 291, 309, 327, 345]), 50, 'Test 70');
test(countCompleteDayPairs([12, 12, 12, 12, 12, 12, 12, 12, 12, 12]), 45, 'Test 71');
test(countCompleteDayPairs([24, 24, 24, 24, 24, 24, 24, 24, 24, 24]), 45, 'Test 72');
test(countCompleteDayPairs([3, 21, 6, 18, 9, 15, 12, 12, 12, 12]), 9, 'Test 73');
test(countCompleteDayPairs([3, 9, 21, 39, 57, 75, 93, 111, 129, 147, 165, 183, 201, 219, 237, 255, 273, 291]), 40, 'Test 74');
test(countCompleteDayPairs([8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160]), 64, 'Test 75');
test(countCompleteDayPairs([100, 144, 48, 24, 72, 96, 120]), 15, 'Test 76');
test(countCompleteDayPairs([60, 108, 156, 204, 252, 300, 348, 396, 444, 492, 540, 588, 636, 684, 732, 780]), 120, 'Test 77');
test(countCompleteDayPairs([6, 18, 30, 42, 54, 66, 78, 90, 102, 114, 126, 138]), 36, 'Test 78');
test(countCompleteDayPairs([48, 24, 72, 96, 120, 24, 48]), 21, 'Test 79');
test(countCompleteDayPairs([59, 119, 179, 239, 299, 359, 419, 479, 539, 599, 659, 719, 779, 839, 899, 959]), 0, 'Test 80');
test(countCompleteDayPairs([12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228, 240, 252, 264, 276, 288, 300, 312, 324, 336, 348, 360]), 210, 'Test 81');
test(countCompleteDayPairs([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120]), 145, 'Test 82');
test(countCompleteDayPairs([240, 480, 720, 960, 1200, 1440, 1680, 1920, 2160, 2400, 2640, 2880, 3120, 3360, 3600, 3840, 4080, 4320, 4560, 4800, 5040, 5280, 5520, 5760, 6000, 6240, 6480, 6720, 6960, 7200]), 435, 'Test 83');

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
