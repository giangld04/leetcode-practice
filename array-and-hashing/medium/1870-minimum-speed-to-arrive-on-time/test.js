// Test: 1870. Minimum Speed To Arrive On Time
// 98 test cases from LeetCodeDataset
// Run: node test.js

const { minSpeedOnTime } = require("./solution");

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

console.log("\n1870. Minimum Speed To Arrive On Time\n");

test(minSpeedOnTime([5,4,3,2,1], 5.5), 4, 'Test 1');
test(minSpeedOnTime([5,4,1,2], 3.5), 5, 'Test 2');
test(minSpeedOnTime([1,2,3,4,5], 9.0), 2, 'Test 3');
test(minSpeedOnTime([9], 0.5), 18, 'Test 4');
test(minSpeedOnTime([1,3,2], 1.9), -1, 'Test 5');
test(minSpeedOnTime([1,1,100000], 2.01), 10000000, 'Test 6');
test(minSpeedOnTime([5,5,5,5,5], 9.0), 5, 'Test 7');
test(minSpeedOnTime([100000], 2.5), 40000, 'Test 8');
test(minSpeedOnTime([100000], 1.0), 100000, 'Test 9');
test(minSpeedOnTime([10,10,10], 3.5), 10, 'Test 10');
test(minSpeedOnTime([1,3,2], 2.7), 3, 'Test 11');
test(minSpeedOnTime([1,2,3,4,5], 10.0), 2, 'Test 12');
test(minSpeedOnTime([10,10,10], 2.5), 20, 'Test 13');
test(minSpeedOnTime([1], 1.0), 1, 'Test 14');
test(minSpeedOnTime([10,10,10], 29.99), 2, 'Test 15');
test(minSpeedOnTime([1,3,2], 6), 1, 'Test 16');
test(minSpeedOnTime([10,10,10], 3.0), 10, 'Test 17');
test(minSpeedOnTime([5,5,5,5], 10.0), 3, 'Test 18');
test(minSpeedOnTime([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 100000.0), 1, 'Test 19');
test(minSpeedOnTime([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 19.99), 11, 'Test 20');
test(minSpeedOnTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4.5), -1, 'Test 21');
test(minSpeedOnTime([99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999], 50.0), 20000, 'Test 22');
test(minSpeedOnTime([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 30.0), 50, 'Test 23');
test(minSpeedOnTime([100, 200, 300, 400, 500], 15.5), 100, 'Test 24');
test(minSpeedOnTime([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 15.0), 100, 'Test 25');
test(minSpeedOnTime([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10.1), 1, 'Test 26');
test(minSpeedOnTime([10,20,30,40,50,60,70,80,90,100], 50.0), 12, 'Test 27');
test(minSpeedOnTime([1,2,3,4,5,6,7,8,9,10], 9.5), 20, 'Test 28');
test(minSpeedOnTime([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 20.0), 10, 'Test 29');
test(minSpeedOnTime([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 9.0), -1, 'Test 30');
test(minSpeedOnTime([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 10.5), 20, 'Test 31');
test(minSpeedOnTime([100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000], 45.0), 13334, 'Test 32');
test(minSpeedOnTime([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 15.0), 25, 'Test 33');
test(minSpeedOnTime([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 30.5), 20, 'Test 34');
test(minSpeedOnTime([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 14.0), -1, 'Test 35');
test(minSpeedOnTime([100000,100000,100000,100000,100000,100000,100000,100000,100000,100000], 10.0), 100000, 'Test 36');
test(minSpeedOnTime([100000, 100000, 100000, 100000, 100000], 25.0), 20000, 'Test 37');
test(minSpeedOnTime([100000, 1, 1, 1, 1], 10.1), 14286, 'Test 38');
test(minSpeedOnTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9.99), 11, 'Test 39');
test(minSpeedOnTime([100000, 200000, 300000, 400000, 500000], 100.0), 15385, 'Test 40');
test(minSpeedOnTime([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2.5), -1, 'Test 41');
test(minSpeedOnTime([100000, 200000, 300000, 400000], 25.0), 42858, 'Test 42');
test(minSpeedOnTime([1, 2, 3, 4, 5], 2.0), -1, 'Test 43');
test(minSpeedOnTime([99999, 99999, 99999, 99999], 20.0), 20000, 'Test 44');
test(minSpeedOnTime([1000,2000,3000,4000,5000,6000,7000,8000,9000,10000], 50.0), 1200, 'Test 45');
test(minSpeedOnTime([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 15.0), 5, 'Test 46');
test(minSpeedOnTime([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 49.99), 12, 'Test 47');
test(minSpeedOnTime([1000,2000,3000], 7.0), 1000, 'Test 48');
test(minSpeedOnTime([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5.5), -1, 'Test 49');
test(minSpeedOnTime([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 25.5), 14, 'Test 50');
test(minSpeedOnTime([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 15.0), 5, 'Test 51');
test(minSpeedOnTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5.5), -1, 'Test 52');
test(minSpeedOnTime([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 25.0), -1, 'Test 53');
test(minSpeedOnTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20.0), 4, 'Test 54');
test(minSpeedOnTime([99999,99999,99999,99999,99999,99999,99999,99999,99999,99999], 9.99), 101010, 'Test 55');
test(minSpeedOnTime([1,2,3,4,5,6,7,8,9,10], 15.0), 5, 'Test 56');
test(minSpeedOnTime([1, 10, 100, 1000, 10000], 12.0), 1250, 'Test 57');
test(minSpeedOnTime([10000, 20000, 30000, 40000, 50000], 12.5), 14286, 'Test 58');
test(minSpeedOnTime([10,20,30,40,50], 12.5), 15, 'Test 59');
test(minSpeedOnTime([10, 20, 30, 40, 50], 12.5), 15, 'Test 60');
test(minSpeedOnTime([1,1,1,1,1,1,1,1,1,1], 10.0), 1, 'Test 61');
test(minSpeedOnTime([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 19.0), -1, 'Test 62');
test(minSpeedOnTime([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 18.0), 40, 'Test 63');
test(minSpeedOnTime([10,20,30,40,50,60,70,80,90,100], 18.0), 40, 'Test 64');
test(minSpeedOnTime([1, 10, 1, 10, 1, 10, 1, 10, 1, 10], 9.0), -1, 'Test 65');
test(minSpeedOnTime([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1.0), -1, 'Test 66');
test(minSpeedOnTime([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 20.0), 1, 'Test 67');
test(minSpeedOnTime([10,9,8,7,6,5,4,3,2,1], 15.25), 5, 'Test 68');
test(minSpeedOnTime([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 4.0), -1, 'Test 69');
test(minSpeedOnTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5.0), -1, 'Test 70');
test(minSpeedOnTime([1, 3, 2, 4, 5, 6, 7, 8, 9, 10], 15.5), 5, 'Test 71');
test(minSpeedOnTime([10,9,8,7,6,5,4,3,2,1], 9.5), 10, 'Test 72');
test(minSpeedOnTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9.0), -1, 'Test 73');
test(minSpeedOnTime([99999, 99999, 99999, 99999, 99999], 25.0), 20000, 'Test 74');
test(minSpeedOnTime([100,200,300,400,500], 10.0), 200, 'Test 75');
test(minSpeedOnTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 19.99), 21, 'Test 76');
test(minSpeedOnTime([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 50.5), 118, 'Test 77');
test(minSpeedOnTime([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 11.0), 9, 'Test 78');
test(minSpeedOnTime([100,200,300,400,500], 14.0), 125, 'Test 79');
test(minSpeedOnTime([100, 200, 300, 400, 500], 20.0), 84, 'Test 80');
test(minSpeedOnTime([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 50.0), -1, 'Test 81');
test(minSpeedOnTime([1, 10000, 1, 10000, 1, 10000, 1, 10000, 1, 10000], 10.5), 10000, 'Test 82');
test(minSpeedOnTime([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10.0), 19, 'Test 83');
test(minSpeedOnTime([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 25.0), 70, 'Test 84');
test(minSpeedOnTime([100000, 99999, 99998, 99997, 99996], 5.0), 100000, 'Test 85');
test(minSpeedOnTime([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 21.5), 18, 'Test 86');
test(minSpeedOnTime([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 9.5), 2, 'Test 87');
test(minSpeedOnTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2.99), -1, 'Test 88');
test(minSpeedOnTime([5, 10, 15, 20, 25], 9.0), 10, 'Test 89');
test(minSpeedOnTime([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 9.99), 102, 'Test 90');
test(minSpeedOnTime([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5.0), -1, 'Test 91');
test(minSpeedOnTime([1, 100000, 1, 1, 1], 10.1), 14286, 'Test 92');
test(minSpeedOnTime([10,20,30,40,50,60,70,80,90,100], 20.0), 35, 'Test 93');
test(minSpeedOnTime([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 30.5), 200, 'Test 94');
test(minSpeedOnTime([99999, 99999, 99999], 3.5), 99999, 'Test 95');
test(minSpeedOnTime([10000, 10000, 10000, 10000, 10000], 25.0), 2000, 'Test 96');
test(minSpeedOnTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7.5), -1, 'Test 97');
test(minSpeedOnTime([1,2,3,4,5,6,7,8,9,10], 1.5), -1, 'Test 98');

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
