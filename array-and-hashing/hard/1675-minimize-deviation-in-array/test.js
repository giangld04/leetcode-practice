// Test: 1675. Minimize Deviation In Array
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { minimumDeviation } = require("./solution");

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

console.log("\n1675. Minimize Deviation In Array\n");

test(minimumDeviation([1,1000000000]), 1953123, 'Test 1');
test(minimumDeviation([3,9,6,12]), 3, 'Test 2');
test(minimumDeviation([3,9,7,3]), 3, 'Test 3');
test(minimumDeviation([2,10,8]), 3, 'Test 4');
test(minimumDeviation([5,3,11,24,2]), 9, 'Test 5');
test(minimumDeviation([1000000000,1,1000000000]), 1953123, 'Test 6');
test(minimumDeviation([1,3,5,7,9]), 7, 'Test 7');
test(minimumDeviation([15,15,15,15]), 0, 'Test 8');
test(minimumDeviation([1,2,3,4]), 1, 'Test 9');
test(minimumDeviation([10,20,30,40,50]), 15, 'Test 10');
test(minimumDeviation([6,1,3,4,2,8]), 1, 'Test 11');
test(minimumDeviation([8,12,24,6]), 1, 'Test 12');
test(minimumDeviation([6,10,18,24]), 4, 'Test 13');
test(minimumDeviation([4,1,5,20,3]), 3, 'Test 14');
test(minimumDeviation([7,4,1,8,12]), 5, 'Test 15');
test(minimumDeviation([10,10,10]), 0, 'Test 16');
test(minimumDeviation([3,5,6,10,15]), 9, 'Test 17');
test(minimumDeviation([10,4,3,5]), 2, 'Test 18');
test(minimumDeviation([7,4,3,7]), 3, 'Test 19');
test(minimumDeviation([1,2,9,16]), 7, 'Test 20');
test(minimumDeviation([5,17,100,1]), 23, 'Test 21');
test(minimumDeviation([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]), 29, 'Test 22');
test(minimumDeviation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]), 29, 'Test 23');
test(minimumDeviation([100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110]), 10, 'Test 24');
test(minimumDeviation([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576]), 0, 'Test 25');
test(minimumDeviation([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]), 275, 'Test 26');
test(minimumDeviation([1024, 2048, 3072, 4096, 5120, 6144, 7168, 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, 16384, 17408, 18432, 19456, 20480]), 9, 'Test 27');
test(minimumDeviation([1,2,3,4,5,6,7,8,9,10]), 7, 'Test 28');
test(minimumDeviation([101, 202, 303, 404, 505, 606, 707, 808, 909, 1010, 1111, 1212, 1313, 1414, 1515, 1616, 1717, 1818, 1919, 2020]), 1717, 'Test 29');
test(minimumDeviation([999999999,1000000000,999999998,1000000001,999999997,1000000002]), 5, 'Test 30');
test(minimumDeviation([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]), 4, 'Test 31');
test(minimumDeviation([17, 23, 31, 37, 41, 43, 47, 53, 59, 61]), 28, 'Test 32');
test(minimumDeviation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), 13, 'Test 33');
test(minimumDeviation([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 0, 'Test 34');
test(minimumDeviation([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 27, 'Test 35');
test(minimumDeviation([123456789, 987654321, 111111111, 222222222, 333333333, 444444444, 555555555]), 765432099, 'Test 36');
test(minimumDeviation([1000000, 900000, 800000, 700000, 600000, 500000, 400000, 300000, 200000, 100000]), 12500, 'Test 37');
test(minimumDeviation([2, 14, 18, 26, 34, 42, 50, 58, 66, 74]), 35, 'Test 38');
test(minimumDeviation([1,2,4,8,16,32,64,128,256,512]), 0, 'Test 39');
test(minimumDeviation([10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150]), 135, 'Test 40');
test(minimumDeviation([15, 30, 45, 60, 75, 90, 105, 120, 135, 150]), 105, 'Test 41');
test(minimumDeviation([64, 32, 16, 8, 4, 2, 1, 2, 4, 8, 16, 32, 64]), 0, 'Test 42');
test(minimumDeviation([1000000000, 999999999, 999999998, 999999997]), 3, 'Test 43');
test(minimumDeviation([2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78]), 37, 'Test 44');
test(minimumDeviation([1, 1000000000, 2, 500000000, 3, 333333333, 4, 250000000, 5, 200000000]), 333333331, 'Test 45');
test(minimumDeviation([8,16,32,64,128,256,512,1024,2048,4096]), 0, 'Test 46');
test(minimumDeviation([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 47');
test(minimumDeviation([1000000000, 500000000, 250000000, 125000000, 62500000]), 0, 'Test 48');
test(minimumDeviation([11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220]), 187, 'Test 49');
test(minimumDeviation([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]), 45, 'Test 50');
test(minimumDeviation([1,3,5,7,9,11,13,15,17,19]), 17, 'Test 51');
test(minimumDeviation([999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991, 999999990]), 9, 'Test 52');
test(minimumDeviation([1000000, 2000000, 3000000, 4000000, 5000000]), 31250, 'Test 53');
test(minimumDeviation([2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768]), 0, 'Test 54');
test(minimumDeviation([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]), 69, 'Test 55');
test(minimumDeviation([123456789, 987654321, 456789123, 321987654, 654321987, 789123456]), 740740743, 'Test 56');
test(minimumDeviation([11,22,33,44,55,66,77,88,99,110,121,132,143,154,165]), 143, 'Test 57');
test(minimumDeviation([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125]), 0, 'Test 58');
test(minimumDeviation([1, 1000000000, 2, 2000000000, 3, 3000000000, 4, 4000000000, 5, 5000000000, 6, 6000000000, 7, 7000000000, 8, 8000000000, 9, 9000000000]), 17578123, 'Test 59');
test(minimumDeviation([1, 1000000000, 2, 500000000, 3, 1500000000]), 5859373, 'Test 60');
test(minimumDeviation([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2]), 0, 'Test 61');
test(minimumDeviation([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60]), 51, 'Test 62');
test(minimumDeviation([13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143, 156, 169, 182, 195]), 169, 'Test 63');
test(minimumDeviation([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), 0, 'Test 64');
test(minimumDeviation([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32]), 13, 'Test 65');
test(minimumDeviation([2, 6, 18, 54, 162, 486, 1458, 4374, 13122, 39366, 118098, 354294, 1062882, 3188646, 9565938]), 4782967, 'Test 66');
test(minimumDeviation([13579, 24681, 35791, 46813, 57915, 68137, 79159, 81379, 91591, 113791]), 86633, 'Test 67');
test(minimumDeviation([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500]), 525, 'Test 68');
test(minimumDeviation([1023, 2047, 4095, 8191, 16383]), 14337, 'Test 69');
test(minimumDeviation([5, 25, 125, 625, 3125, 15625, 78125, 390625, 1953125, 9765625]), 9765615, 'Test 70');
test(minimumDeviation([2,4,8,16,32,64,128,256,512,1024]), 0, 'Test 71');
test(minimumDeviation([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 17, 'Test 72');
test(minimumDeviation([3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049]), 59043, 'Test 73');
test(minimumDeviation([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500]), 275, 'Test 74');
test(minimumDeviation([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45]), 39, 'Test 75');
test(minimumDeviation([13, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]), 71, 'Test 76');
test(minimumDeviation([1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010]), 9, 'Test 77');
test(minimumDeviation([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768]), 0, 'Test 78');
test(minimumDeviation([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75]), 65, 'Test 79');
test(minimumDeviation([1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287]), 522241, 'Test 80');
test(minimumDeviation([1000000000, 999999999, 999999998, 999999997, 999999996]), 4, 'Test 81');
test(minimumDeviation([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536]), 0, 'Test 82');
test(minimumDeviation([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]), 0, 'Test 83');
test(minimumDeviation([3,6,9,12,15,18,21,24,27,30]), 21, 'Test 84');
test(minimumDeviation([1, 1000000000, 2, 999999999, 3, 999999998, 4, 999999997, 5, 999999996]), 999999997, 'Test 85');
test(minimumDeviation([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]), 85, 'Test 86');
test(minimumDeviation([5, 15, 25, 35, 45, 55]), 45, 'Test 87');
test(minimumDeviation([1024,512,256,128,64,32,16,8,4,2,1]), 0, 'Test 88');
test(minimumDeviation([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 37, 'Test 89');
test(minimumDeviation([2147483647, 2147483646, 2147483645, 2147483644, 2147483643]), 4, 'Test 90');
test(minimumDeviation([999999999, 999999998, 999999997, 999999996, 999999995]), 4, 'Test 91');
test(minimumDeviation([1000000000, 1, 2, 3, 4, 5]), 1953123, 'Test 92');
test(minimumDeviation([9, 18, 27, 36, 45, 54, 63, 72, 81, 90]), 63, 'Test 93');
test(minimumDeviation([1024, 2048, 512, 128, 64, 32, 16, 8, 4, 2, 1]), 0, 'Test 94');
test(minimumDeviation([1000000000,1,2,3,4,5]), 1953123, 'Test 95');
test(minimumDeviation([1023, 2046, 511, 255, 127, 63, 31, 15, 7, 3, 1]), 1021, 'Test 96');
test(minimumDeviation([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 0, 'Test 97');
test(minimumDeviation([9,18,27,36,45,54]), 27, 'Test 98');
test(minimumDeviation([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), 0, 'Test 99');
test(minimumDeviation([83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181]), 84, 'Test 100');
test(minimumDeviation([25, 26, 27, 28, 29, 30, 31, 32, 33, 34]), 9, 'Test 101');
test(minimumDeviation([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864, 134217728, 268435456, 536870912, 1073741824]), 0, 'Test 102');
test(minimumDeviation([101, 202, 303, 404, 505, 606, 707, 808, 909, 1010]), 707, 'Test 103');
test(minimumDeviation([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]), 0, 'Test 104');
test(minimumDeviation([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 65, 'Test 105');

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
