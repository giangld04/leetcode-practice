// Test: 1464. Maximum Product Of Two Elements In An Array
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { maxProduct } = require("./solution");

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

console.log("\n1464. Maximum Product Of Two Elements In An Array\n");

test(maxProduct([10,10,10,10]), 81, 'Test 1');
test(maxProduct([2,3,5,7,11,13]), 120, 'Test 2');
test(maxProduct([1,2,3,4,5,6,7,8,9,10]), 72, 'Test 3');
test(maxProduct([1,1000,2,999,3,998]), 997002, 'Test 4');
test(maxProduct([2,3,4,5,6,7,8,9,10]), 72, 'Test 5');
test(maxProduct([10,20,30,40,50]), 1911, 'Test 6');
test(maxProduct([5,6,7,8,9]), 56, 'Test 7');
test(maxProduct([5,5,5,5]), 16, 'Test 8');
test(maxProduct([1,2,3,4,5]), 12, 'Test 9');
test(maxProduct([500,500,500,500,500]), 249001, 'Test 10');
test(maxProduct([999,1000]), 997002, 'Test 11');
test(maxProduct([1,5,4,5]), 16, 'Test 12');
test(maxProduct([10,2,3,8]), 63, 'Test 13');
test(maxProduct([1,1000,1,1000]), 998001, 'Test 14');
test(maxProduct([2,3,100,101,99]), 9900, 'Test 15');
test(maxProduct([2,3,5,7,11,13,17,19,23,29]), 616, 'Test 16');
test(maxProduct([100,100]), 9801, 'Test 17');
test(maxProduct([500,500,1,1]), 249001, 'Test 18');
test(maxProduct([3,7]), 12, 'Test 19');
test(maxProduct([3,4,5,2]), 12, 'Test 20');
test(maxProduct([500, 500, 499, 499, 498, 498, 497, 497, 496, 496]), 249001, 'Test 21');
test(maxProduct([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127]), 14112, 'Test 22');
test(maxProduct([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 898101, 'Test 23');
test(maxProduct([500, 500, 500, 500, 499, 499, 499, 499, 498, 498]), 249001, 'Test 24');
test(maxProduct([42, 84, 126, 168, 210, 252, 294, 336, 378, 420]), 157963, 'Test 25');
test(maxProduct([500, 250, 125, 625, 312, 156, 78, 39, 19, 9, 4, 2]), 311376, 'Test 26');
test(maxProduct([500, 400, 300, 200, 100, 50, 40, 30, 20, 10]), 199101, 'Test 27');
test(maxProduct([100, 200, 300, 400, 500, 400, 300, 200, 100, 50, 25, 12, 6, 3, 1, 1, 1, 1, 1, 1]), 199101, 'Test 28');
test(maxProduct([333, 666, 999, 334, 667, 998, 335, 668, 997]), 995006, 'Test 29');
test(maxProduct([1, 1000, 2, 999, 3, 998, 4, 997, 5, 996, 6, 995, 7, 994, 8]), 997002, 'Test 30');
test(maxProduct([1000, 999, 998, 997, 996]), 997002, 'Test 31');
test(maxProduct([999, 998, 997, 996, 995, 994, 993, 992, 991, 1000]), 997002, 'Test 32');
test(maxProduct([300, 301, 302, 303, 304, 305, 306, 307, 308, 309]), 94556, 'Test 33');
test(maxProduct([1000, 1000, 999, 999, 998, 998, 997, 997]), 998001, 'Test 34');
test(maxProduct([300, 300, 300, 300, 300, 300, 299, 299, 299, 299]), 89401, 'Test 35');
test(maxProduct([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]), 754, 'Test 36');
test(maxProduct([500, 500, 450, 450, 400, 400, 350, 350, 300, 300]), 249001, 'Test 37');
test(maxProduct([250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265]), 69432, 'Test 38');
test(maxProduct([1000, 1000, 999, 999, 998, 998, 997, 997, 996, 996]), 998001, 'Test 39');
test(maxProduct([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1000, 1000, 1000, 1000, 1000]), 998001, 'Test 40');
test(maxProduct([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]), 1932, 'Test 41');
test(maxProduct([500, 450, 400, 350, 300, 250, 200, 150, 100, 50]), 224051, 'Test 42');
test(maxProduct([500, 499, 498, 497, 496, 495, 494, 493, 492, 491]), 248502, 'Test 43');
test(maxProduct([1000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 17982, 'Test 44');
test(maxProduct([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]), 4620, 'Test 45');
test(maxProduct([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4]), 6, 'Test 46');
test(maxProduct([300, 300, 300, 300, 300, 300, 300, 300, 300, 1]), 89401, 'Test 47');
test(maxProduct([100, 99, 98, 97, 96, 95, 94, 93, 92, 91]), 9702, 'Test 48');
test(maxProduct([23, 45, 67, 89, 12, 34, 56, 78]), 6776, 'Test 49');
test(maxProduct([100, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 99]), 9702, 'Test 50');
test(maxProduct([500, 500, 500, 500, 500, 500, 500, 500, 500, 500]), 249001, 'Test 51');
test(maxProduct([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991]), 997002, 'Test 52');
test(maxProduct([999, 999, 999, 999, 999, 999, 999, 999, 999, 1000]), 997002, 'Test 53');
test(maxProduct([100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 8811, 'Test 54');
test(maxProduct([999, 998, 997, 996, 995, 994, 993, 992, 991, 990, 989, 988, 987, 986, 985, 984, 983, 982, 981, 980]), 995006, 'Test 55');
test(maxProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1000]), 0, 'Test 56');
test(maxProduct([1, 1000, 500, 250, 125, 62, 31, 15, 7, 3, 1]), 498501, 'Test 57');
test(maxProduct([500, 500, 500, 1, 2, 3, 4, 5]), 249001, 'Test 58');
test(maxProduct([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 288, 'Test 59');
test(maxProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]), 0, 'Test 60');
test(maxProduct([999, 1, 999, 2, 999, 3, 999, 4, 999, 5]), 996004, 'Test 61');
test(maxProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 182, 'Test 62');
test(maxProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 72, 'Test 63');
test(maxProduct([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), 616, 'Test 64');
test(maxProduct([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 37611, 'Test 65');
test(maxProduct([500, 501, 502, 503, 504, 505, 506, 507, 508, 509]), 257556, 'Test 66');
test(maxProduct([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 323, 'Test 67');
test(maxProduct([1, 1000, 2, 999, 3, 998, 4, 997, 5, 996]), 997002, 'Test 68');
test(maxProduct([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]), 12971, 'Test 69');
test(maxProduct([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991, 990, 989, 988, 987, 986, 985]), 997002, 'Test 70');
test(maxProduct([500, 501, 499, 502, 498, 503, 497, 504, 496, 505]), 253512, 'Test 71');
test(maxProduct([100, 101, 102, 103, 104, 105, 106, 107, 108, 109]), 11556, 'Test 72');
test(maxProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 342, 'Test 73');
test(maxProduct([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 100]), 4851, 'Test 74');
test(maxProduct([1000, 999, 998, 1, 2, 3]), 997002, 'Test 75');
test(maxProduct([999, 998, 997, 996, 995, 994, 993, 992, 991, 990]), 995006, 'Test 76');
test(maxProduct([1000, 1, 1000, 1, 1000, 1, 1000, 1, 1000, 1, 1000, 1, 1000, 1, 1000, 1, 1000, 1, 1000, 1]), 998001, 'Test 77');
test(maxProduct([1, 10, 100, 1000, 100, 10, 1]), 98901, 'Test 78');
test(maxProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1000]), 0, 'Test 79');
test(maxProduct([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 1368, 'Test 80');
test(maxProduct([333, 666, 999, 222, 555, 888, 111, 444, 777, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 885226, 'Test 81');
test(maxProduct([500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4]), 199101, 'Test 82');
test(maxProduct([3, 3, 3, 3, 3, 1000, 1000, 1000, 1000, 1000]), 998001, 'Test 83');
test(maxProduct([1, 2, 3, 1000, 4, 5, 6, 7, 8, 9]), 7992, 'Test 84');
test(maxProduct([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 8811, 'Test 85');
test(maxProduct([999, 999, 998, 998, 997, 997, 996, 996, 995, 995]), 996004, 'Test 86');
test(maxProduct([999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 1000]), 997002, 'Test 87');
test(maxProduct([999, 1000, 1, 2, 3, 4, 5, 6, 7, 8]), 997002, 'Test 88');
test(maxProduct([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 81, 'Test 89');
test(maxProduct([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1000]), 8991, 'Test 90');
test(maxProduct([250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269]), 71556, 'Test 91');
test(maxProduct([1, 2, 3, 4, 5, 1000, 1001, 1002, 1003, 1004]), 1005006, 'Test 92');
test(maxProduct([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 20711, 'Test 93');
test(maxProduct([2, 2, 3, 3, 4, 4, 5, 5, 6, 6]), 25, 'Test 94');
test(maxProduct([1000, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 7992, 'Test 95');
test(maxProduct([999, 1000, 998, 1000, 997]), 998001, 'Test 96');

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
