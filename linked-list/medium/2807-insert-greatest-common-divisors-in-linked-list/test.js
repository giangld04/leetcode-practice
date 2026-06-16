// Test: 2807. Insert Greatest Common Divisors In Linked List
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { insertGreatestCommonDivisors } = require("./solution");

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

console.log("\n2807. Insert Greatest Common Divisors In Linked List\n");

test(insertGreatestCommonDivisors([7,14,28,56]), [7, 7, 14, 14, 28, 28, 56], 'Test 1');
test(insertGreatestCommonDivisors([33,51,68]), [33, 3, 51, 17, 68], 'Test 2');
test(insertGreatestCommonDivisors([1,2,3,4,5]), [1, 1, 2, 1, 3, 1, 4, 1, 5], 'Test 3');
test(insertGreatestCommonDivisors([10,20,30,40,50]), [10, 10, 20, 10, 30, 10, 40, 10, 50], 'Test 4');
test(insertGreatestCommonDivisors([1000,1000]), [1000, 1000, 1000], 'Test 5');
test(insertGreatestCommonDivisors([3,9,27,81]), [3, 3, 9, 9, 27, 27, 81], 'Test 6');
test(insertGreatestCommonDivisors([48,18,30]), [48, 6, 18, 6, 30], 'Test 7');
test(insertGreatestCommonDivisors([100,200,300]), [100, 100, 200, 100, 300], 'Test 8');
test(insertGreatestCommonDivisors([100,50,25,10]), [100, 50, 50, 25, 25, 5, 10], 'Test 9');
test(insertGreatestCommonDivisors([3,3,3,3,3]), [3, 3, 3, 3, 3, 3, 3, 3, 3], 'Test 10');
test(insertGreatestCommonDivisors([7]), [7], 'Test 11');
test(insertGreatestCommonDivisors([12,15,20]), [12, 3, 15, 5, 20], 'Test 12');
test(insertGreatestCommonDivisors([42,56,14]), [42, 14, 56, 14, 14], 'Test 13');
test(insertGreatestCommonDivisors([7,7,7,7]), [7, 7, 7, 7, 7, 7, 7], 'Test 14');
test(insertGreatestCommonDivisors([18,6,10,3]), [18, 6, 6, 2, 10, 1, 3], 'Test 15');
test(insertGreatestCommonDivisors([8,12,16,20]), [8, 4, 12, 4, 16, 4, 20], 'Test 16');
test(insertGreatestCommonDivisors([99,81,27]), [99, 9, 81, 27, 27], 'Test 17');
test(insertGreatestCommonDivisors([5,15,25,35]), [5, 5, 15, 5, 25, 5, 35], 'Test 18');
test(insertGreatestCommonDivisors([5,10,15,20,25]), [5, 5, 10, 5, 15, 5, 20, 5, 25], 'Test 19');
test(insertGreatestCommonDivisors([12,15,21]), [12, 3, 15, 3, 21], 'Test 20');
test(insertGreatestCommonDivisors([1000,500,250,125]), [1000, 500, 500, 250, 250, 125, 125], 'Test 21');
test(insertGreatestCommonDivisors([3,5,8,12]), [3, 1, 5, 1, 8, 4, 12], 'Test 22');
test(insertGreatestCommonDivisors([1000,1000,1000]), [1000, 1000, 1000, 1000, 1000], 'Test 23');
test(insertGreatestCommonDivisors([98, 49, 24, 12, 6, 3]), [98, 49, 49, 1, 24, 12, 12, 6, 6, 3, 3], 'Test 24');
test(insertGreatestCommonDivisors([13, 17, 19, 23, 29]), [13, 1, 17, 1, 19, 1, 23, 1, 29], 'Test 25');
test(insertGreatestCommonDivisors([11,22,33,44,55,66,77,88,99]), [11, 11, 22, 11, 33, 11, 44, 11, 55, 11, 66, 11, 77, 11, 88, 11, 99], 'Test 26');
test(insertGreatestCommonDivisors([2023,2021,2019,2017,2015]), [2023, 1, 2021, 1, 2019, 1, 2017, 1, 2015], 'Test 27');
test(insertGreatestCommonDivisors([21, 14, 49, 35, 70, 56]), [21, 7, 14, 7, 49, 7, 35, 35, 70, 14, 56], 'Test 28');
test(insertGreatestCommonDivisors([77,49,35,91,63]), [77, 7, 49, 7, 35, 7, 91, 7, 63], 'Test 29');
test(insertGreatestCommonDivisors([60,45,30,15]), [60, 15, 45, 15, 30, 15, 15], 'Test 30');
test(insertGreatestCommonDivisors([60,30,15,5,1]), [60, 30, 30, 15, 15, 5, 5, 1, 1], 'Test 31');
test(insertGreatestCommonDivisors([1000,500,250,125,62,31,15,7,3,1]), [1000, 500, 500, 250, 250, 125, 125, 1, 62, 31, 31, 1, 15, 1, 7, 1, 3, 1, 1], 'Test 32');
test(insertGreatestCommonDivisors([112,128,144,160,176]), [112, 16, 128, 16, 144, 16, 160, 16, 176], 'Test 33');
test(insertGreatestCommonDivisors([77,14,28,49]), [77, 7, 14, 14, 28, 7, 49], 'Test 34');
test(insertGreatestCommonDivisors([21,35,105,175]), [21, 7, 35, 35, 105, 35, 175], 'Test 35');
test(insertGreatestCommonDivisors([8,12,18,24]), [8, 4, 12, 6, 18, 6, 24], 'Test 36');
test(insertGreatestCommonDivisors([8,12,16,20,24,28]), [8, 4, 12, 4, 16, 4, 20, 4, 24, 4, 28], 'Test 37');
test(insertGreatestCommonDivisors([11, 22, 33, 44, 55, 66, 77]), [11, 11, 22, 11, 33, 11, 44, 11, 55, 11, 66, 11, 77], 'Test 38');
test(insertGreatestCommonDivisors([21, 14, 7, 49, 35, 28]), [21, 7, 14, 7, 7, 7, 49, 7, 35, 7, 28], 'Test 39');
test(insertGreatestCommonDivisors([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), [1024, 512, 512, 256, 256, 128, 128, 64, 64, 32, 32, 16, 16, 8, 8, 4, 4, 2, 2, 1, 1], 'Test 40');
test(insertGreatestCommonDivisors([54,27,9,3,1,3,9,27,54]), [54, 27, 27, 9, 9, 3, 3, 1, 1, 1, 3, 3, 9, 9, 27, 27, 54], 'Test 41');
test(insertGreatestCommonDivisors([11, 22, 33, 44, 55, 66, 77, 88, 99, 110]), [11, 11, 22, 11, 33, 11, 44, 11, 55, 11, 66, 11, 77, 11, 88, 11, 99, 11, 110], 'Test 42');
test(insertGreatestCommonDivisors([150, 120, 90, 60, 30, 15, 5]), [150, 30, 120, 30, 90, 30, 60, 30, 30, 15, 15, 5, 5], 'Test 43');
test(insertGreatestCommonDivisors([111,222,333,444,555,666,777,888,999]), [111, 111, 222, 111, 333, 111, 444, 111, 555, 111, 666, 111, 777, 111, 888, 111, 999], 'Test 44');
test(insertGreatestCommonDivisors([1024,512,256,128,64,32,16,8,4,2,1]), [1024, 512, 512, 256, 256, 128, 128, 64, 64, 32, 32, 16, 16, 8, 8, 4, 4, 2, 2, 1, 1], 'Test 45');
test(insertGreatestCommonDivisors([1,2,3,4,5,6,7,8,9,10]), [1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 1, 8, 1, 9, 1, 10], 'Test 46');
test(insertGreatestCommonDivisors([30,15,5,25]), [30, 15, 15, 5, 5, 5, 25], 'Test 47');
test(insertGreatestCommonDivisors([72, 48, 60, 36, 90]), [72, 24, 48, 12, 60, 12, 36, 18, 90], 'Test 48');
test(insertGreatestCommonDivisors([101,103,107,109]), [101, 1, 103, 1, 107, 1, 109], 'Test 49');
test(insertGreatestCommonDivisors([55, 110, 220, 440, 880, 1760, 3520]), [55, 55, 110, 110, 220, 220, 440, 440, 880, 880, 1760, 1760, 3520], 'Test 50');
test(insertGreatestCommonDivisors([81, 27, 9, 3, 1]), [81, 27, 27, 9, 9, 3, 3, 1, 1], 'Test 51');
test(insertGreatestCommonDivisors([120,80,40,20,10]), [120, 40, 80, 40, 40, 20, 20, 10, 10], 'Test 52');
test(insertGreatestCommonDivisors([48,64,80,96,112,128]), [48, 16, 64, 16, 80, 16, 96, 16, 112, 16, 128], 'Test 53');
test(insertGreatestCommonDivisors([100,25,45,15,30]), [100, 25, 25, 5, 45, 15, 15, 15, 30], 'Test 54');
test(insertGreatestCommonDivisors([1000, 500, 250, 125, 62, 31, 1]), [1000, 500, 500, 250, 250, 125, 125, 1, 62, 31, 31, 1, 1], 'Test 55');
test(insertGreatestCommonDivisors([8,12,18,24,30]), [8, 4, 12, 6, 18, 6, 24, 6, 30], 'Test 56');
test(insertGreatestCommonDivisors([44, 66, 88, 110, 132]), [44, 22, 66, 22, 88, 22, 110, 22, 132], 'Test 57');
test(insertGreatestCommonDivisors([225,150,100,50]), [225, 75, 150, 50, 100, 50, 50], 'Test 58');
test(insertGreatestCommonDivisors([19,38,76,152]), [19, 19, 38, 38, 76, 76, 152], 'Test 59');
test(insertGreatestCommonDivisors([1000, 500, 250, 125, 62, 31, 15, 7, 3, 1]), [1000, 500, 500, 250, 250, 125, 125, 1, 62, 31, 31, 1, 15, 1, 7, 1, 3, 1, 1], 'Test 60');
test(insertGreatestCommonDivisors([1,2,4,8,16,32]), [1, 1, 2, 2, 4, 4, 8, 8, 16, 16, 32], 'Test 61');
test(insertGreatestCommonDivisors([24, 36, 48, 60, 72, 84]), [24, 12, 36, 12, 48, 12, 60, 12, 72, 12, 84], 'Test 62');
test(insertGreatestCommonDivisors([77, 14, 49, 7, 21, 35]), [77, 7, 14, 7, 49, 7, 7, 7, 21, 7, 35], 'Test 63');
test(insertGreatestCommonDivisors([99, 33, 66, 11, 22]), [99, 33, 33, 33, 66, 11, 11, 11, 22], 'Test 64');
test(insertGreatestCommonDivisors([15, 30, 45, 60, 75, 90]), [15, 15, 30, 15, 45, 15, 60, 15, 75, 15, 90], 'Test 65');
test(insertGreatestCommonDivisors([23, 46, 69, 92, 115, 138]), [23, 23, 46, 23, 69, 23, 92, 23, 115, 23, 138], 'Test 66');
test(insertGreatestCommonDivisors([72,48,24,12,6]), [72, 24, 48, 24, 24, 12, 12, 6, 6], 'Test 67');
test(insertGreatestCommonDivisors([56,98,154,224]), [56, 14, 98, 14, 154, 14, 224], 'Test 68');
test(insertGreatestCommonDivisors([100, 25, 50, 20, 40]), [100, 25, 25, 25, 50, 10, 20, 20, 40], 'Test 69');
test(insertGreatestCommonDivisors([2000, 1000, 500, 250, 125, 62, 31]), [2000, 1000, 1000, 500, 500, 250, 250, 125, 125, 1, 62, 31, 31], 'Test 70');
test(insertGreatestCommonDivisors([6,12,18,24,30,36,42,48,54]), [6, 6, 12, 6, 18, 6, 24, 6, 30, 6, 36, 6, 42, 6, 48, 6, 54], 'Test 71');
test(insertGreatestCommonDivisors([144,72,36,18,9,3,1]), [144, 72, 72, 36, 36, 18, 18, 9, 9, 3, 3, 1, 1], 'Test 72');
test(insertGreatestCommonDivisors([84,42,21,105]), [84, 42, 42, 21, 21, 21, 105], 'Test 73');
test(insertGreatestCommonDivisors([315,360,405,450]), [315, 45, 360, 45, 405, 45, 450], 'Test 74');
test(insertGreatestCommonDivisors([999,1000,998,997,996,995]), [999, 1, 1000, 2, 998, 1, 997, 1, 996, 1, 995], 'Test 75');
test(insertGreatestCommonDivisors([84,105,140,175]), [84, 21, 105, 35, 140, 35, 175], 'Test 76');
test(insertGreatestCommonDivisors([100,50,25,5]), [100, 50, 50, 25, 25, 5, 5], 'Test 77');
test(insertGreatestCommonDivisors([13,26,39,52,65]), [13, 13, 26, 13, 39, 13, 52, 13, 65], 'Test 78');
test(insertGreatestCommonDivisors([100, 25, 10, 50]), [100, 25, 25, 5, 10, 10, 50], 'Test 79');
test(insertGreatestCommonDivisors([101,103,107,109,113]), [101, 1, 103, 1, 107, 1, 109, 1, 113], 'Test 80');
test(insertGreatestCommonDivisors([54,24,36,18,90,60]), [54, 6, 24, 12, 36, 18, 18, 18, 90, 30, 60], 'Test 81');
test(insertGreatestCommonDivisors([144,120,96,72]), [144, 24, 120, 24, 96, 24, 72], 'Test 82');
test(insertGreatestCommonDivisors([45,90,135,180,225,270]), [45, 45, 90, 45, 135, 45, 180, 45, 225, 45, 270], 'Test 83');
test(insertGreatestCommonDivisors([210,105,35,7,1]), [210, 105, 105, 35, 35, 7, 7, 1, 1], 'Test 84');
test(insertGreatestCommonDivisors([100,25,10,5]), [100, 25, 25, 5, 10, 5, 5], 'Test 85');
test(insertGreatestCommonDivisors([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 1, 8, 1, 9, 1, 10], 'Test 86');
test(insertGreatestCommonDivisors([100, 25, 50, 75, 125]), [100, 25, 25, 25, 50, 25, 75, 25, 125], 'Test 87');
test(insertGreatestCommonDivisors([500,250,125,25]), [500, 250, 250, 125, 125, 25, 25], 'Test 88');
test(insertGreatestCommonDivisors([100, 25, 50, 125, 200]), [100, 25, 25, 25, 50, 25, 125, 25, 200], 'Test 89');
test(insertGreatestCommonDivisors([100,25,50,125,200]), [100, 25, 25, 25, 50, 25, 125, 25, 200], 'Test 90');
test(insertGreatestCommonDivisors([144, 108, 72, 36, 18]), [144, 36, 108, 36, 72, 36, 36, 18, 18], 'Test 91');
test(insertGreatestCommonDivisors([17,19,23,29,31,37,41,43,47]), [17, 1, 19, 1, 23, 1, 29, 1, 31, 1, 37, 1, 41, 1, 43, 1, 47], 'Test 92');
test(insertGreatestCommonDivisors([120,180,300,420]), [120, 60, 180, 60, 300, 60, 420], 'Test 93');
test(insertGreatestCommonDivisors([210,231,252,273,294]), [210, 21, 231, 21, 252, 21, 273, 21, 294], 'Test 94');
test(insertGreatestCommonDivisors([128, 64, 32, 16, 8, 4, 2, 1]), [128, 64, 64, 32, 32, 16, 16, 8, 8, 4, 4, 2, 2, 1, 1], 'Test 95');
test(insertGreatestCommonDivisors([13, 26, 39, 52, 65, 78]), [13, 13, 26, 13, 39, 13, 52, 13, 65, 13, 78], 'Test 96');
test(insertGreatestCommonDivisors([44,55,66,77,88,99,110]), [44, 11, 55, 11, 66, 11, 77, 11, 88, 11, 99, 11, 110], 'Test 97');
test(insertGreatestCommonDivisors([13, 13, 13, 13, 13]), [13, 13, 13, 13, 13, 13, 13, 13, 13], 'Test 98');
test(insertGreatestCommonDivisors([99, 33, 11, 55, 22]), [99, 33, 33, 11, 11, 11, 55, 11, 22], 'Test 99');
test(insertGreatestCommonDivisors([17,34,51,68]), [17, 17, 34, 17, 51, 17, 68], 'Test 100');
test(insertGreatestCommonDivisors([17,19,23,29,31,37,41,43]), [17, 1, 19, 1, 23, 1, 29, 1, 31, 1, 37, 1, 41, 1, 43], 'Test 101');
test(insertGreatestCommonDivisors([9,27,81,243,729]), [9, 9, 27, 27, 81, 81, 243, 243, 729], 'Test 102');
test(insertGreatestCommonDivisors([72, 48, 64, 32, 16]), [72, 24, 48, 16, 64, 32, 32, 16, 16], 'Test 103');
test(insertGreatestCommonDivisors([17, 34, 51, 68, 85]), [17, 17, 34, 17, 51, 17, 68, 17, 85], 'Test 104');
test(insertGreatestCommonDivisors([84, 56, 42, 28, 14]), [84, 28, 56, 14, 42, 14, 28, 14, 14], 'Test 105');
test(insertGreatestCommonDivisors([101, 202, 303, 404, 505]), [101, 101, 202, 101, 303, 101, 404, 101, 505], 'Test 106');
test(insertGreatestCommonDivisors([13,26,39,52]), [13, 13, 26, 13, 39, 13, 52], 'Test 107');
test(insertGreatestCommonDivisors([99, 98, 97, 96, 95, 94, 93, 92, 91, 90]), [99, 1, 98, 1, 97, 1, 96, 1, 95, 1, 94, 1, 93, 1, 92, 1, 91, 1, 90], 'Test 108');
test(insertGreatestCommonDivisors([101, 103, 107, 109, 113]), [101, 1, 103, 1, 107, 1, 109, 1, 113], 'Test 109');
test(insertGreatestCommonDivisors([1000, 500, 250, 125, 62, 31]), [1000, 500, 500, 250, 250, 125, 125, 1, 62, 31, 31], 'Test 110');
test(insertGreatestCommonDivisors([144,72,36,18,9]), [144, 72, 72, 36, 36, 18, 18, 9, 9], 'Test 111');
test(insertGreatestCommonDivisors([99,33,11,3]), [99, 33, 33, 11, 11, 1, 3], 'Test 112');
test(insertGreatestCommonDivisors([101, 103, 107, 109, 113, 127, 131, 137, 139]), [101, 1, 103, 1, 107, 1, 109, 1, 113, 1, 127, 1, 131, 1, 137, 1, 139], 'Test 113');
test(insertGreatestCommonDivisors([81, 27, 54, 108, 162]), [81, 27, 27, 27, 54, 54, 108, 54, 162], 'Test 114');
test(insertGreatestCommonDivisors([123, 246, 369, 492, 615]), [123, 123, 246, 123, 369, 123, 492, 123, 615], 'Test 115');
test(insertGreatestCommonDivisors([99,77,55,33,11]), [99, 11, 77, 11, 55, 11, 33, 11, 11], 'Test 116');
test(insertGreatestCommonDivisors([300,150,75,375,1875]), [300, 150, 150, 75, 75, 75, 375, 375, 1875], 'Test 117');
test(insertGreatestCommonDivisors([441,147,49,7]), [441, 147, 147, 49, 49, 7, 7], 'Test 118');
test(insertGreatestCommonDivisors([81,27,9,3,1]), [81, 27, 27, 9, 9, 3, 3, 1, 1], 'Test 119');
test(insertGreatestCommonDivisors([21, 28, 35, 42, 49, 56]), [21, 7, 28, 7, 35, 7, 42, 7, 49, 7, 56], 'Test 120');

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
