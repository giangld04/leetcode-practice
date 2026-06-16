// Test: 2873. Maximum Value Of An Ordered Triplet I
// 126 test cases from LeetCodeDataset
// Run: node test.js

const { maximumTripletValue } = require("./solution");

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

console.log("\n2873. Maximum Value Of An Ordered Triplet I\n");

test(maximumTripletValue([3,2,1,5,4,6]), 12, 'Test 1');
test(maximumTripletValue([10,20,3,40,5,60,7,80,9,10]), 4240, 'Test 2');
test(maximumTripletValue([12,6,1,2,7]), 77, 'Test 3');
test(maximumTripletValue([8,6,4,2,10,9,7,5,3,1]), 60, 'Test 4');
test(maximumTripletValue([1,2,3,4,5,6,7,8,9,100]), 0, 'Test 5');
test(maximumTripletValue([10,9,8,7,6,5,4,3,2,1]), 20, 'Test 6');
test(maximumTripletValue([9,8,7,6,5,4,3,2,1]), 16, 'Test 7');
test(maximumTripletValue([1,2,3,4,5,6,7,8,9,10]), 0, 'Test 8');
test(maximumTripletValue([3,1,4,1,5,9,2,6,5,3,5]), 42, 'Test 9');
test(maximumTripletValue([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 0, 'Test 10');
test(maximumTripletValue([10,20,30,40,50]), 0, 'Test 11');
test(maximumTripletValue([5,5,5,5,5]), 0, 'Test 12');
test(maximumTripletValue([5,6,7,8,9]), 0, 'Test 13');
test(maximumTripletValue([1,1,1,1,1,1,1]), 0, 'Test 14');
test(maximumTripletValue([1,10,3,4,19]), 133, 'Test 15');
test(maximumTripletValue([10,9,8,7,6]), 18, 'Test 16');
test(maximumTripletValue([100,90,80,70,60]), 1800, 'Test 17');
test(maximumTripletValue([10,20,30,40,50,60,70,80,90]), 0, 'Test 18');
test(maximumTripletValue([1,100,2,99,3,98,4,97]), 9702, 'Test 19');
test(maximumTripletValue([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 0, 'Test 20');
test(maximumTripletValue([100,200,300,400,500]), 0, 'Test 21');
test(maximumTripletValue([3,2,1,4,5,6,7,8,9,10]), 20, 'Test 22');
test(maximumTripletValue([10,5,15,20,25]), 125, 'Test 23');
test(maximumTripletValue([9, 8, 7, 6, 5, 4, 3, 2, 1, 10]), 80, 'Test 24');
test(maximumTripletValue([3,2,1,4,5,6]), 12, 'Test 25');
test(maximumTripletValue([5,4,3,2,1]), 4, 'Test 26');
test(maximumTripletValue([3,2,1,5,4]), 10, 'Test 27');
test(maximumTripletValue([100,50,200,300,400]), 20000, 'Test 28');
test(maximumTripletValue([5,10,15,20,25,30,35,40,45,50]), 0, 'Test 29');
test(maximumTripletValue([1000000, 500000, 250000, 125000, 62500]), 125000000000, 'Test 30');
test(maximumTripletValue([1,2,3]), 0, 'Test 31');
test(maximumTripletValue([100,100,100]), 0, 'Test 32');
test(maximumTripletValue([5, 15, 10, 25, 20, 35, 30, 45, 40, 55, 50]), 275, 'Test 33');
test(maximumTripletValue([999999, 1, 999998, 2, 999997, 3, 999996, 4, 999995, 5]), 999996000004, 'Test 34');
test(maximumTripletValue([1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812, 3906, 1953]), 125000000000, 'Test 35');
test(maximumTripletValue([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 0, 'Test 36');
test(maximumTripletValue([1000000, 1, 1000000, 1, 1000000]), 999999000000, 'Test 37');
test(maximumTripletValue([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 2, 'Test 38');
test(maximumTripletValue([1, 100, 2, 99, 3, 98, 4, 97, 5, 96, 6, 95, 7, 94, 8, 93, 9, 92, 10, 91]), 9702, 'Test 39');
test(maximumTripletValue([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 6, 9, 3, 9, 9, 3, 7, 5, 1, 0, 5, 8, 2, 0, 9, 7, 4, 9, 4, 4, 5, 9, 2, 3, 0, 7, 8, 1, 6, 4, 0, 6, 2, 8, 6, 2, 0, 8, 9, 9, 8, 6]), 81, 'Test 40');
test(maximumTripletValue([500, 400, 300, 200, 100, 101, 102, 103, 104, 105]), 42000, 'Test 41');
test(maximumTripletValue([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2, 3, 8, 4, 6]), 63, 'Test 42');
test(maximumTripletValue([5, 15, 10, 20, 25, 30, 35, 40, 45, 50]), 250, 'Test 43');
test(maximumTripletValue([1000000, 500000, 1, 2, 3, 4, 5, 6, 7, 8]), 7999992, 'Test 44');
test(maximumTripletValue([1000000, 900000, 800000, 700000, 600000, 500000, 400000, 300000, 200000, 100000]), 200000000000, 'Test 45');
test(maximumTripletValue([1, 1000000, 2, 999999, 3, 999998, 4, 999997, 5, 999996]), 999997000002, 'Test 46');
test(maximumTripletValue([1, 3, 5, 7, 9, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 140, 'Test 47');
test(maximumTripletValue([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 0, 'Test 48');
test(maximumTripletValue([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 100, 90, 80, 70, 60]), 9000, 'Test 49');
test(maximumTripletValue([50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 1]), 500, 'Test 50');
test(maximumTripletValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1000000]), 0, 'Test 51');
test(maximumTripletValue([1000000, 1, 1000000, 1, 1000000, 1, 1000000]), 999999000000, 'Test 52');
test(maximumTripletValue([5, 6, 7, 8, 9, 1, 2, 3, 4, 10, 11, 12, 13, 14, 15]), 120, 'Test 53');
test(maximumTripletValue([100, 10, 200, 20, 300, 30, 400, 40, 500, 50]), 180000, 'Test 54');
test(maximumTripletValue([1, 2, 3, 2, 1, 3, 2, 1, 3, 2, 1]), 6, 'Test 55');
test(maximumTripletValue([10, 20, 10, 30, 20, 40, 30, 50, 40, 60]), 600, 'Test 56');
test(maximumTripletValue([1000000, 1000000, 1, 2, 3, 1000000, 4, 5, 6, 1000000]), 999999000000, 'Test 57');
test(maximumTripletValue([10, 5, 15, 20, 12, 25, 30, 5, 35, 40]), 1000, 'Test 58');
test(maximumTripletValue([5, 25, 15, 45, 35, 65, 55, 75, 60, 85]), 1275, 'Test 59');
test(maximumTripletValue([1, 2, 3, 10, 1, 2, 3, 10, 1, 2, 3, 10]), 90, 'Test 60');
test(maximumTripletValue([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 0, 'Test 61');
test(maximumTripletValue([10, 100, 20, 200, 30, 300, 40, 400, 50, 500]), 175000, 'Test 62');
test(maximumTripletValue([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26]), 0, 'Test 63');
test(maximumTripletValue([9, 7, 5, 3, 1, 2, 4, 6, 8, 10]), 80, 'Test 64');
test(maximumTripletValue([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]), 0, 'Test 65');
test(maximumTripletValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 0, 'Test 66');
test(maximumTripletValue([1, 2, 3, 1000000, 1000000, 1000000, 1, 2, 3, 1]), 2999997, 'Test 67');
test(maximumTripletValue([100, 50, 25, 10, 5, 2, 1]), 1250, 'Test 68');
test(maximumTripletValue([10, 20, 30, 15, 25, 35, 40, 5, 45, 50, 55, 60]), 2100, 'Test 69');
test(maximumTripletValue([1, 100, 2, 200, 3, 300, 4, 400, 5, 500]), 197500, 'Test 70');
test(maximumTripletValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 71');
test(maximumTripletValue([1000000, 999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991]), 7999928, 'Test 72');
test(maximumTripletValue([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 90, 'Test 73');
test(maximumTripletValue([1, 100, 2, 99, 3, 98, 4, 97, 5, 96]), 9702, 'Test 74');
test(maximumTripletValue([500, 500, 500, 500, 500, 500, 500, 500, 500, 500]), 0, 'Test 75');
test(maximumTripletValue([10, 20, 10, 30, 15, 40, 25, 50, 35, 60, 45, 70, 55, 80, 65, 90, 75, 100, 85, 95]), 1500, 'Test 76');
test(maximumTripletValue([100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 1980, 'Test 77');
test(maximumTripletValue([1, 2, 1, 3, 2, 4, 3, 5, 4, 6]), 6, 'Test 78');
test(maximumTripletValue([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105]), 0, 'Test 79');
test(maximumTripletValue([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 0, 'Test 80');
test(maximumTripletValue([30, 20, 10, 40, 50, 60, 5, 15, 25, 35]), 1925, 'Test 81');
test(maximumTripletValue([5, 3, 8, 6, 2, 7, 4, 9, 1, 10]), 80, 'Test 82');
test(maximumTripletValue([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 90, 'Test 83');
test(maximumTripletValue([1, 10, 100, 1000, 10000, 100000, 1000000, 100000, 10000, 1000]), 9000000000, 'Test 84');
test(maximumTripletValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 0, 'Test 85');
test(maximumTripletValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0, 'Test 86');
test(maximumTripletValue([1000, 900, 800, 700, 600, 500, 400, 300, 200, 100]), 200000, 'Test 87');
test(maximumTripletValue([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 81, 'Test 88');
test(maximumTripletValue([1000000, 500000, 100000, 50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1]), 50000000000, 'Test 89');
test(maximumTripletValue([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5, 1]), 2000, 'Test 90');
test(maximumTripletValue([1000, 2000, 1500, 3000, 2500, 4000, 3500, 5000, 4500]), 2500000, 'Test 91');
test(maximumTripletValue([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]), 42, 'Test 92');
test(maximumTripletValue([1, 1000, 2, 999, 3, 998, 4, 997, 5, 996, 6, 995, 7, 994, 8, 993, 9, 992, 10, 991]), 997002, 'Test 93');
test(maximumTripletValue([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10]), 0, 'Test 94');
test(maximumTripletValue([1, 3, 2, 4, 5, 3, 6, 4, 7, 5]), 14, 'Test 95');
test(maximumTripletValue([100, 200, 150, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000]), 50000, 'Test 96');
test(maximumTripletValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 0, 'Test 97');
test(maximumTripletValue([1000, 500, 1500, 2000, 2500, 3000, 3500]), 1750000, 'Test 98');
test(maximumTripletValue([100, 99, 1, 98, 2, 97, 3, 96, 4, 95, 5, 94, 6, 93, 7, 92, 8, 91, 9, 90]), 9702, 'Test 99');
test(maximumTripletValue([20, 18, 25, 15, 30, 10, 35, 5, 40, 0, 45, 2, 50, 1, 55, 3, 60, 4, 65, 6]), 3640, 'Test 100');
test(maximumTripletValue([5, 3, 8, 6, 2, 9, 1, 7, 4, 10]), 80, 'Test 101');
test(maximumTripletValue([100, 101, 99, 102, 98, 103, 97, 104, 96, 105]), 840, 'Test 102');
test(maximumTripletValue([100, 1, 100, 1, 100, 1, 100, 1, 100, 1]), 9900, 'Test 103');
test(maximumTripletValue([5, 100, 50, 200, 150, 300, 250, 400, 350]), 20000, 'Test 104');
test(maximumTripletValue([1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 2, 'Test 105');
test(maximumTripletValue([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 0, 'Test 106');
test(maximumTripletValue([10, 5, 20, 15, 25, 30, 35, 40, 45, 50]), 250, 'Test 107');
test(maximumTripletValue([100, 1, 200, 2, 300, 3, 400, 4, 500, 5]), 198000, 'Test 108');
test(maximumTripletValue([1, 999999, 2, 999998, 3, 999997, 4, 999996, 5, 999995]), 999995000006, 'Test 109');
test(maximumTripletValue([10, 100, 10, 100, 10, 100, 10, 100, 10, 100, 10, 100, 10, 100, 10, 100, 10, 100, 10, 100]), 9000, 'Test 110');
test(maximumTripletValue([10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1]), 90, 'Test 111');
test(maximumTripletValue([1, 3, 2, 5, 4, 7, 6, 9, 8, 11]), 11, 'Test 112');
test(maximumTripletValue([5, 10, 3, 15, 20, 2, 25, 1, 30]), 720, 'Test 113');
test(maximumTripletValue([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50]), 2250, 'Test 114');
test(maximumTripletValue([1, 200000, 2, 199999, 3, 199998, 4, 199997, 5, 199996, 6, 199995, 7, 199994, 8, 199993, 9, 199992, 10, 199991]), 39999400002, 'Test 115');
test(maximumTripletValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]), 0, 'Test 116');
test(maximumTripletValue([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 6, 9, 3, 9, 9, 3, 7, 9, 3, 2, 3, 8, 4, 6]), 81, 'Test 117');
test(maximumTripletValue([1000, 500, 750, 250, 300, 600, 400, 800, 900, 100]), 675000, 'Test 118');
test(maximumTripletValue([100, 50, 25, 12, 6, 3, 1, 0, -1, -2]), 1250, 'Test 119');
test(maximumTripletValue([5, 25, 10, 20, 15, 30, 2, 28, 29, 3]), 812, 'Test 120');
test(maximumTripletValue([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14, 17, 16, 19, 18, 20]), 20, 'Test 121');
test(maximumTripletValue([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]), 0, 'Test 122');
test(maximumTripletValue([5, 3, 1, 8, 6, 4, 7, 9, 2, 10]), 70, 'Test 123');
test(maximumTripletValue([50, 10, 100, 20, 150, 30, 200, 40, 250, 50]), 40000, 'Test 124');
test(maximumTripletValue([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 0, 'Test 125');
test(maximumTripletValue([2, 3, 1, 4, 5, 6, 7, 8, 9, 10]), 20, 'Test 126');

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
