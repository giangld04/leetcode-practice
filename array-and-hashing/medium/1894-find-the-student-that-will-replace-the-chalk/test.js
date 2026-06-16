// Test: 1894. Find The Student That Will Replace The Chalk
// 92 test cases from LeetCodeDataset
// Run: node test.js

const { chalkReplacer } = require("./solution");

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

console.log("\n1894. Find The Student That Will Replace The Chalk\n");

test(chalkReplacer([1,2,3,4,5], 15), 0, 'Test 1');
test(chalkReplacer([1], 1000000000), 0, 'Test 2');
test(chalkReplacer([1,1,1,1,1,1,1,1,1,1], 999999999), 9, 'Test 3');
test(chalkReplacer([10,10,10], 100), 1, 'Test 4');
test(chalkReplacer([100000], 1000000000), 0, 'Test 5');
test(chalkReplacer([1,1,1,1,1,1,1,1,1,1], 1000000000), 0, 'Test 6');
test(chalkReplacer([3,4,1,2], 25), 1, 'Test 7');
test(chalkReplacer([5,1,5], 22), 0, 'Test 8');
test(chalkReplacer([5,1,5], 1000000000), 2, 'Test 9');
test(chalkReplacer([10000,9000,8000,7000,6000,5000,4000,3000,2000,1000], 1000000000), 6, 'Test 10');
test(chalkReplacer([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 9999999999), 19, 'Test 11');
test(chalkReplacer([100000, 200000, 300000], 1000000000), 2, 'Test 12');
test(chalkReplacer([9, 8, 7, 6, 5, 4, 3, 2, 1], 123456789), 1, 'Test 13');
test(chalkReplacer([5,8,12,3,7], 500000000), 1, 'Test 14');
test(chalkReplacer([7, 3, 2, 8, 6, 4], 987654321), 4, 'Test 15');
test(chalkReplacer([1, 10, 100, 1000, 10000, 100000], 123456789), 5, 'Test 16');
test(chalkReplacer([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000], 987654321), 8, 'Test 17');
test(chalkReplacer([9,8,7,6,5,4,3,2,1], 1200000000), 4, 'Test 18');
test(chalkReplacer([100000, 200000, 300000, 400000, 500000], 1000000000), 4, 'Test 19');
test(chalkReplacer([2,3,4,5,6,7,8,9,10], 100000000), 8, 'Test 20');
test(chalkReplacer([10,20,30,40,50], 123456789), 2, 'Test 21');
test(chalkReplacer([100,200,300,400,500], 999999999), 3, 'Test 22');
test(chalkReplacer([10,20,30,40,50,60,70,80,90,100], 123456789), 9, 'Test 23');
test(chalkReplacer([5,1,5,2,8], 1000000000), 4, 'Test 24');
test(chalkReplacer([10,20,30,40,50,60,70,80,90,100], 1000000000), 9, 'Test 25');
test(chalkReplacer([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 999999998), 1, 'Test 26');
test(chalkReplacer([7, 14, 21, 28, 35], 123456789), 4, 'Test 27');
test(chalkReplacer([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 999999997), 2, 'Test 28');
test(chalkReplacer([12345, 54321, 23456, 65432, 34567], 1234567890), 3, 'Test 29');
test(chalkReplacer([5, 8, 3, 7, 2], 1000000001), 0, 'Test 30');
test(chalkReplacer([2,3,5,7,11,13,17,19,23,29,31], 1000000000), 0, 'Test 31');
test(chalkReplacer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 543210), 7, 'Test 32');
test(chalkReplacer([5,1,5,2,6], 1000000000), 4, 'Test 33');
test(chalkReplacer([5, 8, 3, 7, 2], 500000000), 0, 'Test 34');
test(chalkReplacer([5, 8, 15, 3], 1000000007), 2, 'Test 35');
test(chalkReplacer([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 8675309), 6, 'Test 36');
test(chalkReplacer([5,3,7,11], 50), 3, 'Test 37');
test(chalkReplacer([987654321, 123456789, 987654321, 123456789], 2000000000), 2, 'Test 38');
test(chalkReplacer([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 897654321), 12, 'Test 39');
test(chalkReplacer([1,2,3,4,5,6,7,8,9,10], 500000000), 2, 'Test 40');
test(chalkReplacer([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 900000000), 5, 'Test 41');
test(chalkReplacer([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1000000000), 5, 'Test 42');
test(chalkReplacer([10, 20, 30, 40, 50], 999999999), 3, 'Test 43');
test(chalkReplacer([100000,100000,100000,100000,100000], 950000000), 0, 'Test 44');
test(chalkReplacer([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 999999999), 9, 'Test 45');
test(chalkReplacer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 1000000000), 8, 'Test 46');
test(chalkReplacer([100, 200, 300, 400, 500], 1000000001), 4, 'Test 47');
test(chalkReplacer([99999, 99998, 99997, 99996, 99995], 99999999999), 0, 'Test 48');
test(chalkReplacer([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 1700000000), 26, 'Test 49');
test(chalkReplacer([2,4,6,8,10], 999999999), 2, 'Test 50');
test(chalkReplacer([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 987654321), 1, 'Test 51');
test(chalkReplacer([100000, 200000, 300000, 400000], 1234567890), 2, 'Test 52');
test(chalkReplacer([100000000, 200000000, 300000000], 1000000000), 2, 'Test 53');
test(chalkReplacer([7, 14, 21, 28, 35, 42, 49, 56, 63, 70], 999999999), 7, 'Test 54');
test(chalkReplacer([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 9876543210), 5, 'Test 55');
test(chalkReplacer([5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1], 1300000000), 12, 'Test 56');
test(chalkReplacer([100, 200, 300, 400, 500], 9876543210), 1, 'Test 57');
test(chalkReplacer([5,8,12,3,6], 1000000000), 2, 'Test 58');
test(chalkReplacer([10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100], 800000000), 8, 'Test 59');
test(chalkReplacer([99999, 99998, 99997, 99996, 99995], 1000000000), 0, 'Test 60');
test(chalkReplacer([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 987654321), 2, 'Test 61');
test(chalkReplacer([1, 10, 100, 1000, 10000, 100000], 999999999), 3, 'Test 62');
test(chalkReplacer([7,14,21,28,35,42,49,56,63,70,77,84,91,98,105], 123456789), 8, 'Test 63');
test(chalkReplacer([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 987654321), 18, 'Test 64');
test(chalkReplacer([100, 200, 300, 400, 500], 1000000000), 4, 'Test 65');
test(chalkReplacer([100000000, 200000000, 300000000, 400000000, 500000000], 1000000000), 4, 'Test 66');
test(chalkReplacer([12345, 67890, 13579, 24680, 97531], 987654321), 4, 'Test 67');
test(chalkReplacer([50000, 50000, 50000, 50000, 50000], 1000000000), 0, 'Test 68');
test(chalkReplacer([3,6,1,8,4,7], 999999999), 3, 'Test 69');
test(chalkReplacer([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100000000), 9, 'Test 70');
test(chalkReplacer([5,10,15,20,25,30,35,40,45,50], 543210987), 8, 'Test 71');
test(chalkReplacer([1,2,4,8,16,32,64,128,256,512,1024], 1073741823), 8, 'Test 72');
test(chalkReplacer([10, 15, 20, 25, 30], 123456789), 4, 'Test 73');
test(chalkReplacer([3,4,1,2,5,7,8,9,10,11], 987654321), 5, 'Test 74');
test(chalkReplacer([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 1600000000), 24, 'Test 75');
test(chalkReplacer([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 500000000), 0, 'Test 76');
test(chalkReplacer([100000, 200000, 300000, 400000], 1000000000000), 0, 'Test 77');
test(chalkReplacer([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 456789123), 7, 'Test 78');
test(chalkReplacer([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 999999999), 8, 'Test 79');
test(chalkReplacer([5,10,15,20,25,30,35,40,45,50], 9876543210), 7, 'Test 80');
test(chalkReplacer([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 1000000000), 2, 'Test 81');
test(chalkReplacer([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 1000000000), 0, 'Test 82');
test(chalkReplacer([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 876543210), 12, 'Test 83');
test(chalkReplacer([100000, 100000, 100000, 100000, 100000], 999999999), 4, 'Test 84');
test(chalkReplacer([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384], 1800000000), 13, 'Test 85');
test(chalkReplacer([5000, 10000, 15000, 20000, 25000], 500000000), 4, 'Test 86');
test(chalkReplacer([10, 20, 30, 40, 50], 9999999999), 3, 'Test 87');
test(chalkReplacer([100,200,300,400,500], 1500000000), 0, 'Test 88');
test(chalkReplacer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 500000000), 2, 'Test 89');
test(chalkReplacer([100000000, 200000000, 300000000], 6000000000), 0, 'Test 90');
test(chalkReplacer([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 123456789), 11, 'Test 91');
test(chalkReplacer([99999, 1, 99998, 2, 99997, 3, 99996, 4, 99995, 5], 1000000000), 0, 'Test 92');

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
