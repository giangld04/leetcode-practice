// Test: 1442. Count Triplets That Can Form Two Arrays Of Equal Xor
// 98 test cases from LeetCodeDataset
// Run: node test.js

const { countTriplets } = require("./solution");

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

console.log("\n1442. Count Triplets That Can Form Two Arrays Of Equal Xor\n");

test(countTriplets([2,3,4,1,5,6,7,8,9]), 17, 'Test 1');
test(countTriplets([5,5,5,5,5,5]), 19, 'Test 2');
test(countTriplets([8,12,3,10]), 0, 'Test 3');
test(countTriplets([1,2,3,4,5,6,7,8,9]), 24, 'Test 4');
test(countTriplets([3,3,3,3,3,3]), 19, 'Test 5');
test(countTriplets([1,2,3,4,5]), 5, 'Test 6');
test(countTriplets([2,3,1,6,7]), 4, 'Test 7');
test(countTriplets([2,3,4,5,6,7]), 6, 'Test 8');
test(countTriplets([5,3,0,1,4]), 0, 'Test 9');
test(countTriplets([8,1,6,2,1]), 0, 'Test 10');
test(countTriplets([5,1,4,1,5]), 4, 'Test 11');
test(countTriplets([1,1,1,1,1]), 10, 'Test 12');
test(countTriplets([7,11,1,2,9,5]), 0, 'Test 13');
test(countTriplets([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]), 285, 'Test 14');
test(countTriplets([1023, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), 10, 'Test 15');
test(countTriplets([100000000, 200000000, 300000000, 400000000, 500000000, 600000000, 700000000, 800000000, 900000000]), 0, 'Test 16');
test(countTriplets([2^20, 2^19, 2^18, 2^17, 2^16, 2^15, 2^14, 2^13, 2^12, 2^11, 2^10]), Error: Solution.countTriplets[] missing 1 required positional argument: 'arr', 'Test 17');
test(countTriplets([15, 3, 9, 7, 11, 6, 2, 8, 14, 5]), 8, 'Test 18');
test(countTriplets([123456789, 987654321, 135792468, 246813579, 111222333, 333222111]), 0, 'Test 19');
test(countTriplets([256, 128, 64, 32, 16, 8, 4, 2, 1]), 0, 'Test 20');
test(countTriplets([7, 5, 3, 2, 6, 8, 4, 3, 5, 2, 9, 1, 5]), 21, 'Test 21');
test(countTriplets([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]), 0, 'Test 22');
test(countTriplets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]), 245, 'Test 23');
test(countTriplets([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), 0, 'Test 24');
test(countTriplets([1, 2, 3, 4, 5, 4, 3, 2, 1, 0]), 13, 'Test 25');
test(countTriplets([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]), 47, 'Test 26');
test(countTriplets([29, 17, 23, 29, 17, 23, 29, 17, 23, 29, 17, 23, 29]), 62, 'Test 27');
test(countTriplets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 2255, 'Test 28');
test(countTriplets([31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2, 31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2]), 41, 'Test 29');
test(countTriplets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 62790, 'Test 30');
test(countTriplets([1^2^3^4, 2^3^4^5, 3^4^5^6, 4^5^6^7, 5^6^7^8, 6^7^8^9, 7^8^9^10, 8^9^10^11, 9^10^11^12, 10^11^12^13]), Error: Solution.countTriplets[] missing 1 required positional argument: 'arr', 'Test 31');
test(countTriplets([7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43]), 0, 'Test 32');
test(countTriplets([123456789, 987654321, 1122334455, 5544332211, 9988776655]), 0, 'Test 33');
test(countTriplets([2, 5, 3, 2, 1, 4, 7, 8, 9, 6]), 8, 'Test 34');
test(countTriplets([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20]), 2870, 'Test 35');
test(countTriplets([15, 13, 14, 11, 8, 7, 5, 2, 3, 4]), 19, 'Test 36');
test(countTriplets([100000000, 90000000, 80000000, 70000000, 60000000, 50000000, 40000000, 30000000, 20000000, 10000000]), 0, 'Test 37');
test(countTriplets([23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]), 0, 'Test 38');
test(countTriplets([255, 128, 64, 32, 16, 8, 4, 2, 1, 255, 128, 64, 32, 16, 8, 4, 2, 1]), 97, 'Test 39');
test(countTriplets([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), 100, 'Test 40');
test(countTriplets([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 0, 1, 2, 4, 8, 16, 32, 64, 128]), 72, 'Test 41');
test(countTriplets([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), 665, 'Test 42');
test(countTriplets([23, 45, 67, 89, 12, 34, 56, 78, 90, 11, 22, 33, 44, 55, 66, 77, 88, 99, 10, 20]), 0, 'Test 43');
test(countTriplets([100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000]), 2736, 'Test 44');
test(countTriplets([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192]), 0, 'Test 45');
test(countTriplets([100, 200, 300, 100, 200, 300, 100, 200]), 15, 'Test 46');
test(countTriplets([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]), 2255, 'Test 47');
test(countTriplets([10, 15, 3, 7, 8, 5, 2, 1]), 0, 'Test 48');
test(countTriplets([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 265, 'Test 49');
test(countTriplets([1, 3, 2, 3, 1, 5, 7, 5, 7, 9, 11, 9, 11, 13, 15]), 97, 'Test 50');
test(countTriplets([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]), 25, 'Test 51');
test(countTriplets([300, 200, 100, 50, 25, 12, 6, 3, 1, 0, 1, 3, 6, 12, 25, 50, 100, 200, 300]), 90, 'Test 52');
test(countTriplets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 2736, 'Test 53');
test(countTriplets([13, 17, 11, 14, 13, 14, 12, 11, 17, 13, 15, 16, 18, 14, 12, 15]), 11, 'Test 54');
test(countTriplets([12, 34, 56, 78, 90, 12, 34, 56, 78, 90, 12, 34, 56, 78, 90]), 54, 'Test 55');
test(countTriplets([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5]), 390, 'Test 56');
test(countTriplets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 100, 'Test 57');
test(countTriplets([15, 9, 8, 3, 6, 1, 1, 1, 1, 2]), 6, 'Test 58');
test(countTriplets([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]), 2255, 'Test 59');
test(countTriplets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 670, 'Test 60');
test(countTriplets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1156, 'Test 61');
test(countTriplets([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 2, 'Test 62');
test(countTriplets([123, 456, 789, 101112, 131415, 161718, 192021, 222324, 252627, 282930, 313233, 343536, 373839, 404142, 434445, 464748, 495051, 525354, 555657, 585960, 616263, 646566, 676869, 707172, 737475, 767778, 798081, 828384, 858687, 888990, 919293]), 0, 'Test 63');
test(countTriplets([256, 512, 1024, 2048, 4096, 8192, 16384, 32768]), 0, 'Test 64');
test(countTriplets([42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42]), 344, 'Test 65');
test(countTriplets([23, 35, 47, 59, 71, 83, 95, 107, 119, 131, 143, 155, 167, 179, 191]), 13, 'Test 66');
test(countTriplets([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864, 134217728, 268435456, 536870912, 1073741824]), 0, 'Test 67');
test(countTriplets([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 385, 'Test 68');
test(countTriplets([100000000, 99999999, 99999998, 99999997, 99999996, 99999995, 99999994, 99999993, 99999992, 99999991]), 16, 'Test 69');
test(countTriplets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 24, 'Test 70');
test(countTriplets([2^i % 100000007 for i in range[1, 100]]), Error: Solution.countTriplets[] missing 1 required positional argument: 'arr', 'Test 71');
test(countTriplets([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]), 104, 'Test 72');
test(countTriplets([i for i in range[1, 200] if i % 10 != 0]), Error: Solution.countTriplets[] missing 1 required positional argument: 'arr', 'Test 73');
test(countTriplets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 190, 'Test 74');
test(countTriplets([99999999, 88888888, 77777777, 66666666, 55555555, 44444444, 33333333, 22222222, 11111111, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 24, 'Test 75');
test(countTriplets([100000000, 99999999, 100000000, 99999999, 100000000, 99999999, 100000000]), 12, 'Test 76');
test(countTriplets([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 8, 'Test 77');
test(countTriplets([123, 456, 789, 101, 202, 303, 404, 505, 606]), 0, 'Test 78');
test(countTriplets([15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]), 110, 'Test 79');
test(countTriplets([1, 3, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1]), 384, 'Test 80');
test(countTriplets([100000000, 100000000, 100000000, 100000000, 100000000, 100000000]), 19, 'Test 81');
test(countTriplets([123456789, 987654321, 135792468, 246813579, 111222333]), 0, 'Test 82');
test(countTriplets([123456789, 987654321, 1122334455, 5544332211, 123123123, 987987987]), 0, 'Test 83');
test(countTriplets([101, 203, 307, 409, 511, 613, 719, 821, 923, 1027, 1131, 1237, 1349, 1451, 1553, 1657, 1763, 1867, 1979, 2083]), 0, 'Test 84');
test(countTriplets([256, 128, 64, 32, 16, 8, 4, 2, 1, 0]), 0, 'Test 85');
test(countTriplets([5, 3, 8, 6, 2, 7, 4, 1, 9]), 3, 'Test 86');
test(countTriplets([2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), 1127, 'Test 87');
test(countTriplets([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]), 670, 'Test 88');
test(countTriplets([255, 128, 64, 32, 16, 8, 4, 2, 1, 0]), 17, 'Test 89');
test(countTriplets([17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 136, 'Test 90');
test(countTriplets([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 34, 'Test 91');
test(countTriplets([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288]), 0, 'Test 92');
test(countTriplets([17, 17, 34, 34, 68, 68, 136, 136, 272, 272, 544, 544]), 91, 'Test 93');
test(countTriplets([2^i for i in range[1, 20]]), Error: Solution.countTriplets[] missing 1 required positional argument: 'arr', 'Test 94');
test(countTriplets([256, 128, 64, 32, 16, 8, 4, 2, 1, 2, 4, 8, 16, 32, 64, 128, 256]), 0, 'Test 95');
test(countTriplets([8, 15, 17, 4, 3, 10, 12, 7, 6, 9, 11, 5, 2, 14, 13, 1, 0, 16, 32, 64, 128, 256]), 45, 'Test 96');
test(countTriplets([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]), 0, 'Test 97');
test(countTriplets([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]), 5, 'Test 98');

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
