// Test: 1979. Find Greatest Common Divisor Of Array
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { findGCD } = require("./solution");

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

console.log("\n1979. Find Greatest Common Divisor Of Array\n");

test(findGCD([42,56,14]), 14, 'Test 1');
test(findGCD([1,1000]), 1, 'Test 2');
test(findGCD([17,23,37,41]), 1, 'Test 3');
test(findGCD([3,3]), 3, 'Test 4');
test(findGCD([7,5,6,8,3]), 1, 'Test 5');
test(findGCD([1000,1000]), 1000, 'Test 6');
test(findGCD([48,18,30]), 6, 'Test 7');
test(findGCD([10,20,30,40,50]), 10, 'Test 8');
test(findGCD([100,200,300,400,500]), 100, 'Test 9');
test(findGCD([17,23,19,29,31]), 1, 'Test 10');
test(findGCD([5,5,5,5,5]), 5, 'Test 11');
test(findGCD([1000,1]), 1, 'Test 12');
test(findGCD([48,18]), 6, 'Test 13');
test(findGCD([2,5,6,9,10]), 2, 'Test 14');
test(findGCD([48,180,120,240]), 48, 'Test 15');
test(findGCD([54,24,36]), 6, 'Test 16');
test(findGCD([1,2,3,4,5,6,7,8,9,10]), 1, 'Test 17');
test(findGCD([56, 98, 140, 224, 336]), 56, 'Test 18');
test(findGCD([81, 27, 9, 3, 1]), 1, 'Test 19');
test(findGCD([22, 44, 66, 88, 110, 132, 154]), 22, 'Test 20');
test(findGCD([27, 54, 81, 108, 135, 162, 189]), 27, 'Test 21');
test(findGCD([1024, 512, 256, 128, 64]), 64, 'Test 22');
test(findGCD([999, 1000]), 1, 'Test 23');
test(findGCD([4096, 2048, 1024, 512, 256, 128]), 128, 'Test 24');
test(findGCD([84, 60, 48, 36, 24]), 12, 'Test 25');
test(findGCD([81, 27, 54, 162, 81]), 27, 'Test 26');
test(findGCD([29, 29, 29, 29, 29, 29]), 29, 'Test 27');
test(findGCD([83, 166, 332, 664, 996]), 83, 'Test 28');
test(findGCD([123456, 234567, 345678, 456789, 567891, 678912, 789123, 891234, 912345]), 3, 'Test 29');
test(findGCD([999, 333, 666, 111, 222]), 111, 'Test 30');
test(findGCD([17, 34, 51, 68, 85, 102, 119, 136]), 17, 'Test 31');
test(findGCD([1000, 1, 500, 250, 750, 200]), 1, 'Test 32');
test(findGCD([60, 48, 36, 24, 12, 6, 3, 1]), 1, 'Test 33');
test(findGCD([441, 49, 147, 343, 735]), 49, 'Test 34');
test(findGCD([1, 1000, 2, 999, 3, 998]), 1, 'Test 35');
test(findGCD([1000, 10, 50, 250, 500]), 10, 'Test 36');
test(findGCD([44, 55, 66, 77, 88, 99]), 11, 'Test 37');
test(findGCD([15, 30, 45, 60, 75, 90, 105, 120, 135, 150]), 15, 'Test 38');
test(findGCD([999, 998, 997, 996, 995]), 1, 'Test 39');
test(findGCD([100, 200, 300, 400, 500]), 100, 'Test 40');
test(findGCD([31, 62, 93, 124, 155]), 31, 'Test 41');
test(findGCD([77, 143, 209, 286, 187]), 11, 'Test 42');
test(findGCD([42, 42, 42, 42, 42]), 42, 'Test 43');
test(findGCD([98, 49, 147, 245, 343, 441, 539]), 49, 'Test 44');
test(findGCD([17, 23, 29, 31, 37]), 1, 'Test 45');
test(findGCD([13, 13, 13, 13, 13, 13, 13]), 13, 'Test 46');
test(findGCD([13, 26, 39, 52, 65, 78, 91, 104, 117, 130]), 13, 'Test 47');
test(findGCD([999, 888, 777, 666, 555]), 111, 'Test 48');
test(findGCD([1000, 750, 500, 250]), 250, 'Test 49');
test(findGCD([13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143, 156, 169, 182, 195, 208, 221, 234, 247, 260]), 13, 'Test 50');
test(findGCD([999999, 888888, 777777, 666666, 555555, 444444, 333333, 222222, 111111]), 111111, 'Test 51');
test(findGCD([987654, 876543, 765432, 654321, 543210, 432109, 321098, 210987, 109876]), 2, 'Test 52');
test(findGCD([123, 246, 369, 492, 615, 738, 861, 984, 1107, 1230, 1353, 1476, 1599, 1722, 1845, 1968, 2091, 2214, 2337, 2460]), 123, 'Test 53');
test(findGCD([54, 24, 36, 48, 60]), 12, 'Test 54');
test(findGCD([1000, 1000, 1000, 1000]), 1000, 'Test 55');
test(findGCD([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2]), 2, 'Test 56');
test(findGCD([999, 333, 111, 37, 1]), 1, 'Test 57');
test(findGCD([231, 105, 77, 49, 33, 11, 7]), 7, 'Test 58');
test(findGCD([77, 49, 14, 21, 28]), 7, 'Test 59');
test(findGCD([997, 991, 983, 977, 971, 967, 953, 941, 929, 919, 907, 887, 883]), 1, 'Test 60');
test(findGCD([50, 75, 100, 125, 150, 175, 200]), 50, 'Test 61');
test(findGCD([123456, 234567, 345678, 456789, 567890]), 2, 'Test 62');
test(findGCD([210, 231, 273, 308, 357, 399]), 21, 'Test 63');
test(findGCD([17, 34, 51, 68, 85]), 17, 'Test 64');
test(findGCD([1, 1000]), 1, 'Test 65');
test(findGCD([17, 34, 51, 68, 85, 102, 119, 136, 153, 170]), 17, 'Test 66');
test(findGCD([100, 150, 200, 250, 300]), 100, 'Test 67');
test(findGCD([650, 520, 390, 780, 260]), 260, 'Test 68');
test(findGCD([100, 200, 300, 400, 500, 600]), 100, 'Test 69');
test(findGCD([17, 19, 23, 29, 31]), 1, 'Test 70');
test(findGCD([123456, 987654, 111111, 222222, 333333]), 3, 'Test 71');
test(findGCD([123, 456, 789, 987, 654]), 3, 'Test 72');
test(findGCD([33, 66, 99, 132, 165, 198, 231, 264]), 33, 'Test 73');
test(findGCD([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1, 'Test 74');
test(findGCD([101010, 202020, 303030, 404040, 505050, 606060, 707070, 808080, 909090]), 101010, 'Test 75');
test(findGCD([13, 26, 39, 52, 65]), 13, 'Test 76');
test(findGCD([12, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]), 12, 'Test 77');
test(findGCD([17, 34, 51, 68, 85, 102]), 17, 'Test 78');
test(findGCD([1, 1000, 2, 500, 4]), 1, 'Test 79');
test(findGCD([29, 58, 87, 116, 145, 174, 203, 232, 261, 290, 319, 348, 377, 406, 435, 464, 493, 522, 551, 580]), 29, 'Test 80');
test(findGCD([1, 1000, 2, 999, 3, 998, 4, 997, 5, 996]), 1, 'Test 81');
test(findGCD([256, 512, 1024, 2048, 4096]), 256, 'Test 82');
test(findGCD([77, 49, 14, 28, 35, 56]), 7, 'Test 83');
test(findGCD([123, 456, 789, 1011, 1213]), 1, 'Test 84');
test(findGCD([500, 500, 500, 500, 500, 500]), 500, 'Test 85');
test(findGCD([24, 36, 48, 60, 72, 84, 96]), 24, 'Test 86');
test(findGCD([1000, 750, 500, 250, 125, 62, 31]), 1, 'Test 87');
test(findGCD([999, 888, 777, 666, 555, 444, 333, 222, 111]), 111, 'Test 88');
test(findGCD([41, 82, 123, 164, 205, 246, 287, 328]), 41, 'Test 89');
test(findGCD([1001, 2002, 3003, 4004, 5005, 6006]), 1001, 'Test 90');
test(findGCD([1, 1000, 500, 250, 125, 62, 31, 15]), 1, 'Test 91');
test(findGCD([84, 112, 168, 224, 280]), 28, 'Test 92');
test(findGCD([56, 98, 140, 182, 224]), 56, 'Test 93');
test(findGCD([840, 1764, 4620, 10920]), 840, 'Test 94');
test(findGCD([77, 154, 231, 308, 385, 462, 539, 616]), 77, 'Test 95');
test(findGCD([60, 120, 180, 240, 300, 360]), 60, 'Test 96');
test(findGCD([840, 756, 630, 504, 420]), 420, 'Test 97');
test(findGCD([12, 24, 36, 48, 60, 72, 84, 96, 108]), 12, 'Test 98');
test(findGCD([49, 63, 28, 91, 35]), 7, 'Test 99');
test(findGCD([1000, 500, 250, 125, 62]), 2, 'Test 100');
test(findGCD([1000, 500, 250, 125, 62, 31, 15, 7, 3, 1]), 1, 'Test 101');
test(findGCD([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 10, 'Test 102');
test(findGCD([27, 81, 54, 162, 243]), 27, 'Test 103');
test(findGCD([101, 202, 303, 404, 505]), 101, 'Test 104');
test(findGCD([27, 81, 243, 729, 2187, 6561, 19683, 59049, 177147, 531441]), 27, 'Test 105');
test(findGCD([29, 58, 87, 116, 145, 174, 203]), 29, 'Test 106');
test(findGCD([1024, 2048, 3072, 4096, 5120]), 1024, 'Test 107');
test(findGCD([24, 36, 48, 60, 72, 84]), 12, 'Test 108');
test(findGCD([840, 756, 672, 588, 504, 420, 336, 252, 168, 84]), 84, 'Test 109');
test(findGCD([101, 202, 303, 404, 505, 606, 707, 808, 909]), 101, 'Test 110');
test(findGCD([997, 991, 983, 977, 971]), 1, 'Test 111');
test(findGCD([8317, 16634, 24951, 33268, 41585, 49902, 58219]), 8317, 'Test 112');
test(findGCD([101, 202, 303, 404, 505, 606, 707, 808, 909, 1010]), 101, 'Test 113');
test(findGCD([101, 103, 107, 109, 113, 127, 131, 137]), 1, 'Test 114');
test(findGCD([987, 654, 321, 123, 456, 789]), 3, 'Test 115');
test(findGCD([101, 103, 107, 109, 113]), 1, 'Test 116');
test(findGCD([23, 47, 17, 53, 31, 19, 89, 73]), 1, 'Test 117');

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
