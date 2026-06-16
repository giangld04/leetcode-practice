// Test: 2059. Minimum Operations To Convert Number
// 134 test cases from LeetCodeDataset
// Run: node test.js

const { minimumOperations } = require("./solution");

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

console.log("\n2059. Minimum Operations To Convert Number\n");

test(minimumOperations([10,20,30], 100, 50), 2, 'Test 1');
test(minimumOperations([1,2,3], 5, 5), 2, 'Test 2');
test(minimumOperations([5,15,25], 10, 30), 2, 'Test 3');
test(minimumOperations([10,20,30], 100, 300), 7, 'Test 4');
test(minimumOperations([500,500,500], 1, 1001), 2, 'Test 5');
test(minimumOperations([1,3,5,7,9], 0, 10), 2, 'Test 6');
test(minimumOperations([1,3,5,7,9], 1000, 0), 112, 'Test 7');
test(minimumOperations([10,20,30,40,50], 100, 0), 2, 'Test 8');
test(minimumOperations([10,20,30], 100, 200), 4, 'Test 9');
test(minimumOperations([500,501,502], 500, 505), 4, 'Test 10');
test(minimumOperations([1000,-1000,500], 0, 1000), 1, 'Test 11');
test(minimumOperations([-1000,1000], 0, 0), 2, 'Test 12');
test(minimumOperations([7,14,28], 1, 28), 4, 'Test 13');
test(minimumOperations([100,200,300], 100, 1000), 3, 'Test 14');
test(minimumOperations([100,200,300], 500, 1000), 2, 'Test 15');
test(minimumOperations([1], 0, 1000), 1000, 'Test 16');
test(minimumOperations([500,500], 500, 1000), 1, 'Test 17');
test(minimumOperations([7,14,21], 7, 0), 1, 'Test 18');
test(minimumOperations([1000], 1000, 0), 1, 'Test 19');
test(minimumOperations([2,4,12], 2, 12), 2, 'Test 20');
test(minimumOperations([1,1000], 0, 1001), 2, 'Test 21');
test(minimumOperations([1,3,5,7,9], 500, 500), 2, 'Test 22');
test(minimumOperations([-1,-2,-3], 5, -5), 1, 'Test 23');
test(minimumOperations([100,200,300], 500, 100), 2, 'Test 24');
test(minimumOperations([1,1000], 500, 1500), 1, 'Test 25');
test(minimumOperations([3,5,7], 0, -4), 2, 'Test 26');
test(minimumOperations([1,2,3], 1000, 0), 334, 'Test 27');
test(minimumOperations([500,500,500], 100, 500), -1, 'Test 28');
test(minimumOperations([10,20,30], 50, 110), 2, 'Test 29');
test(minimumOperations([2,8,16], 0, 1), -1, 'Test 30');
test(minimumOperations([1000,500,250], 1, 1000), -1, 'Test 31');
test(minimumOperations([1,2,3,4,5], 1, 5), 1, 'Test 32');
test(minimumOperations([1,2,3,4,5], 5, 0), 1, 'Test 33');
test(minimumOperations([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 50, 1000), 10, 'Test 34');
test(minimumOperations([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987], 1, 1000), 3, 'Test 35');
test(minimumOperations([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], 1000, 0), 22, 'Test 36');
test(minimumOperations([128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768], 500, 1000), -1, 'Test 37');
test(minimumOperations([256, 512, 768, 1024], 0, 1024), 1, 'Test 38');
test(minimumOperations([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 500, 1), -1, 'Test 39');
test(minimumOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10, 1000), 10, 'Test 40');
test(minimumOperations([10, 20, 30, 40, 50], 1000, 0), 20, 'Test 41');
test(minimumOperations([9, 18, 27, 36, 45, 54, 63, 72, 81, 90], 500, 1000), 6, 'Test 42');
test(minimumOperations([7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113], 0, 999), 9, 'Test 43');
test(minimumOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10, 500), 490, 'Test 44');
test(minimumOperations([13, 21, 34, 55, 89, 144, 233, 377, 610, 987], 500, 1000), 3, 'Test 45');
test(minimumOperations([256, 128, 64, 32, 16, 8, 4, 2, 1], 500, 999), 5, 'Test 46');
test(minimumOperations([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59], 1000, 0), 18, 'Test 47');
test(minimumOperations([999, 1, 2, 3, 4, 5], 0, 999), 1, 'Test 48');
test(minimumOperations([4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048], 512, 0), 1, 'Test 49');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 100), 10, 'Test 50');
test(minimumOperations([1, 4, 9, 16, 25, 36, 49, 64, 81, 100], 50, 999), 10, 'Test 51');
test(minimumOperations([7, 14, 21, 28, 35, 42, 49, 56, 63, 70], 1, 98), 2, 'Test 52');
test(minimumOperations([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 100, 1000), 48, 'Test 53');
test(minimumOperations([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 50, 1000), 106, 'Test 54');
test(minimumOperations([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 500, 1000), 17, 'Test 55');
test(minimumOperations([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 100, 256), 3, 'Test 56');
test(minimumOperations([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 25, 1000), 20, 'Test 57');
test(minimumOperations([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 1, 999), 36, 'Test 58');
test(minimumOperations([10, 20, 30, 40, 50], 500, -100), -1, 'Test 59');
test(minimumOperations([7, 11, 13, 17, 19, 23, 29], 1, 999), 36, 'Test 60');
test(minimumOperations([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], 50, 999), 21, 'Test 61');
test(minimumOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 500, 0), 5, 'Test 62');
test(minimumOperations([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31], 1, 1000), 33, 'Test 63');
test(minimumOperations([13, 19, 23, 29, 31, 37, 41, 43, 47, 53], 200, 300), 2, 'Test 64');
test(minimumOperations([1, 10, 100, 1000], 1, 1000), 2, 'Test 65');
test(minimumOperations([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 500, 0), 3, 'Test 66');
test(minimumOperations([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 100, 1000), 10, 'Test 67');
test(minimumOperations([7, 11, 13, 17, 19, 23, 29, 31, 37, 41], 100, 999), 23, 'Test 68');
test(minimumOperations([11, 22, 33, 44, 55, 66, 77, 88, 99, 110], 10, 1000), 9, 'Test 69');
test(minimumOperations([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1, 1000), 5, 'Test 70');
test(minimumOperations([1, 100, 200, 300, 400, 500, 600, 700, 800, 900], 0, 1000), 2, 'Test 71');
test(minimumOperations([333, 667, 999], 1, 999), 2, 'Test 72');
test(minimumOperations([999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008], 1, 1000), 1, 'Test 73');
test(minimumOperations([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 0, 1000), 4, 'Test 74');
test(minimumOperations([64, 128, 256, 512], 100, 1024), -1, 'Test 75');
test(minimumOperations([2, 3, 5, 8, 13, 21, 34, 55, 89, 144], 10, 200), 3, 'Test 76');
test(minimumOperations([123, 456, 789], 321, 654), 2, 'Test 77');
test(minimumOperations([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1000, 0), 4, 'Test 78');
test(minimumOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290], 50, 1000), 4, 'Test 79');
test(minimumOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 500, 1000), 500, 'Test 80');
test(minimumOperations([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987], 100, 0), 3, 'Test 81');
test(minimumOperations([999, 1000, 1001, 1002, 1003], 500, 1500), 1, 'Test 82');
test(minimumOperations([13, 26, 39, 52, 65, 78, 91, 104, 117, 130], 100, 200), 2, 'Test 83');
test(minimumOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 0, 500), 5, 'Test 84');
test(minimumOperations([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 500, 1000), 1, 'Test 85');
test(minimumOperations([100, 200, 300, 400, 500], 10, 999), -1, 'Test 86');
test(minimumOperations([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 100, 999), 31, 'Test 87');
test(minimumOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 500, 1000), 500, 'Test 88');
test(minimumOperations([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 1024, 1), 2, 'Test 89');
test(minimumOperations([101, 102, 103, 104, 105, 106, 107, 108, 109, 110], 100, 1000), 9, 'Test 90');
test(minimumOperations([101, 202, 303, 404, 505, 606, 707, 808, 909, 1000], 500, 1500), 1, 'Test 91');
test(minimumOperations([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 100, 2048), -1, 'Test 92');
test(minimumOperations([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 100, 511), 5, 'Test 93');
test(minimumOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100, 99), 1, 'Test 94');
test(minimumOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50, 1000), 10, 'Test 95');
test(minimumOperations([123, 456, 789], 100, 900), 6, 'Test 96');
test(minimumOperations([29, 31, 37, 41, 43, 47, 53, 59, 61, 67], 5, 1000), 15, 'Test 97');
test(minimumOperations([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 50, 500), 6, 'Test 98');
test(minimumOperations([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 1, 1000000000), 2, 'Test 99');
test(minimumOperations([333, 667, 999], 500, 1000), 6, 'Test 100');
test(minimumOperations([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 500, 400), 6, 'Test 101');
test(minimumOperations([11, 22, 33, 44, 55, 66, 77, 88, 99], 500, 200), 4, 'Test 102');
test(minimumOperations([3, 7, 11, 15, 19, 23, 27, 31, 35, 39], 200, 500), 8, 'Test 103');
test(minimumOperations([17, 18, 19, 20, 21, 22, 23, 24, 25, 26], 500, 550), 2, 'Test 104');
test(minimumOperations([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], 1, 1000), 11, 'Test 105');
test(minimumOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50, 990), 10, 'Test 106');
test(minimumOperations([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 100, -100), -1, 'Test 107');
test(minimumOperations([13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], 500, 999), 7, 'Test 108');
test(minimumOperations([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 0, 500), 10, 'Test 109');
test(minimumOperations([7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], 100, 1000), 10, 'Test 110');
test(minimumOperations([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 50, 999), 11, 'Test 111');
test(minimumOperations([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 500, 1024), 3, 'Test 112');
test(minimumOperations([100, 200, 300, 400, 500], 999, 1), -1, 'Test 113');
test(minimumOperations([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 512, 1000), 3, 'Test 114');
test(minimumOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50, 150), 1, 'Test 115');
test(minimumOperations([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987], 50, 987), 3, 'Test 116');
test(minimumOperations([23, 45, 67, 89, 101], 100, 1), 1, 'Test 117');
test(minimumOperations([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 1, 1000), 200, 'Test 118');
test(minimumOperations([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 500, 1024), 3, 'Test 119');
test(minimumOperations([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 1, 999), 54, 'Test 120');
test(minimumOperations([100, 200, 300, 400, 500], 100, 500), 1, 'Test 121');
test(minimumOperations([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 500, 1005), 11, 'Test 122');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 1001), 100, 'Test 123');
test(minimumOperations([999, 998, 997, 996, 995, 994, 993, 992, 991, 990], 1, 999), 1, 'Test 124');
test(minimumOperations([100, 200, 300, 400, 500], 50, 500), -1, 'Test 125');
test(minimumOperations([-1, 1, -2, 2, -4, 4, -8, 8, -16, 16], 500, 1), 33, 'Test 126');
test(minimumOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 1000), 999, 'Test 127');
test(minimumOperations([666, 333, 111, 777, 888, 999, 222, 444, 555], 111, 777), 1, 'Test 128');
test(minimumOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0, 1000), 1000, 'Test 129');
test(minimumOperations([-100, -50, -25, 0, 25, 50, 100], 50, 250), 2, 'Test 130');
test(minimumOperations([999, 998, 997, 996, 995, 994, 993, 992, 991, 990], 1, 1000), 1, 'Test 131');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1000, 1), 50, 'Test 132');
test(minimumOperations([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 10, 99), 4, 'Test 133');
test(minimumOperations([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 500, 999), 4, 'Test 134');

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
