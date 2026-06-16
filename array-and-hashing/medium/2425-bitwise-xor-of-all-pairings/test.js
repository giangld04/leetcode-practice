// Test: 2425. Bitwise Xor Of All Pairings
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { xorAllNums } = require("./solution");

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

console.log("\n2425. Bitwise Xor Of All Pairings\n");

test(xorAllNums([8,16,24,32], [4,8,12,16,20]), 32, 'Test 1');
test(xorAllNums([1,2,3,4,5,6,7,8,9,10], [1]), 11, 'Test 2');
test(xorAllNums([2,1,3], [10,2,5,0]), 13, 'Test 3');
test(xorAllNums([7,8,9], [10,11,12,13]), 0, 'Test 4');
test(xorAllNums([14,15,16], [17,18]), 3, 'Test 5');
test(xorAllNums([5], [5]), 0, 'Test 6');
test(xorAllNums([1,1,1,1], [1,1,1,1]), 0, 'Test 7');
test(xorAllNums([1,1,1], [1,1,1]), 0, 'Test 8');
test(xorAllNums([1,3,5,7], [2,4,6,8]), 0, 'Test 9');
test(xorAllNums([1], [1,2,3,4,5,6,7,8,9,10]), 11, 'Test 10');
test(xorAllNums([1,2,3,4,5], [5,4,3,2,1]), 0, 'Test 11');
test(xorAllNums([1000000000], [1000000000]), 0, 'Test 12');
test(xorAllNums([1,2,3,4,5], [1]), 0, 'Test 13');
test(xorAllNums([1,2,3,4,5], [1,2,3,4,5]), 0, 'Test 14');
test(xorAllNums([9,8,7,6], [5,4,3,2,1]), 0, 'Test 15');
test(xorAllNums([0,1,2,3,4,5,6,7,8,9], [9,8,7,6,5,4,3,2,1,0]), 0, 'Test 16');
test(xorAllNums([9,8,7], [6,5,4,3,2,1]), 7, 'Test 17');
test(xorAllNums([1,2], [3,4]), 0, 'Test 18');
test(xorAllNums([1], [1,2,3,4,5]), 0, 'Test 19');
test(xorAllNums([1,2,3], [6,5,4,3,2,1]), 7, 'Test 20');
test(xorAllNums([0,0,0], [0,0,0]), 0, 'Test 21');
test(xorAllNums([5], [5,5,5,5,5]), 0, 'Test 22');
test(xorAllNums([7,14,21], [3,6,9,12]), 0, 'Test 23');
test(xorAllNums([10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]), 0, 'Test 24');
test(xorAllNums([i for i in range[1, 100000]], [i for i in range[1, 100000]]), Error: Solution.xorAllNums[] missing 2 required positional arguments: 'nums1' and 'nums2', 'Test 25');
test(xorAllNums([13, 29, 37, 41, 53], [67, 71, 73, 79, 83, 89, 97, 101]), 12, 'Test 26');
test(xorAllNums([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 27');
test(xorAllNums([2**i for i in range[20]], [2**i for i in range[20, 40]]), Error: Solution.xorAllNums[] missing 2 required positional arguments: 'nums1' and 'nums2', 'Test 28');
test(xorAllNums([7, 11, 13, 14], [18, 19, 20, 21, 22]), 15, 'Test 29');
test(xorAllNums([2**i for i in range[10]], [2**i for i in range[5, 15]]), Error: Solution.xorAllNums[] missing 2 required positional arguments: 'nums1' and 'nums2', 'Test 30');
test(xorAllNums([0, 0, 0, 0], [1, 2, 3, 4, 5]), 0, 'Test 31');
test(xorAllNums([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 682, 'Test 32');
test(xorAllNums([1, 1, 1, 1], [1, 1, 1, 1]), 0, 'Test 33');
test(xorAllNums([15, 30, 45, 60, 75], [1, 3, 5, 7, 9, 11, 13]), 68, 'Test 34');
test(xorAllNums([255, 127, 63, 31], [1, 2, 4, 8, 16, 32]), 0, 'Test 35');
test(xorAllNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 0, 'Test 36');
test(xorAllNums([7, 8, 9, 10], [11, 12, 13, 14, 15]), 12, 'Test 37');
test(xorAllNums([13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143, 156, 169, 182, 195], [199, 299, 399, 499, 599, 699]), 380, 'Test 38');
test(xorAllNums([1000000000], [1000000000, 1000000000, 1000000000, 1000000000]), 0, 'Test 39');
test(xorAllNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 31, 'Test 40');
test(xorAllNums([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], [1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 0, 'Test 41');
test(xorAllNums([7, 8, 9, 10], [3, 1, 4, 1, 5, 9]), 0, 'Test 42');
test(xorAllNums([i for i in range[1, 1001]], [i for i in range[1000, 0, -1]]), Error: Solution.xorAllNums[] missing 2 required positional arguments: 'nums1' and 'nums2', 'Test 43');
test(xorAllNums([0, 0, 0, 0], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0, 'Test 44');
test(xorAllNums([1431655765, 1431655765, 1431655765, 1431655765], [1431655765]), 0, 'Test 45');
test(xorAllNums([10**9, 10**9-1, 10**9-2], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), Error: Solution.xorAllNums[] missing 1 required positional argument: 'nums1', 'Test 46');
test(xorAllNums([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 3, 5, 7, 9]), 1, 'Test 47');
test(xorAllNums([100, 200, 300], [101, 202, 303, 404]), 20, 'Test 48');
test(xorAllNums([123456789, 987654321, 1122334455], [554433221, 987654321, 123456789, 1000000000]), 655660385, 'Test 49');
test(xorAllNums([0, 0, 0, 0, 0], [1, 2, 3, 4, 5]), 1, 'Test 50');
test(xorAllNums([1, 3, 5, 7, 9, 11, 13, 15], [2, 4, 6, 8, 10, 12, 14, 16]), 0, 'Test 51');
test(xorAllNums([1000000000], [500000000, 600000000, 700000000, 800000000, 900000000]), 908472064, 'Test 52');
test(xorAllNums([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 0, 'Test 53');
test(xorAllNums([100, 200, 300], [101, 202, 303, 404, 505]), 109, 'Test 54');
test(xorAllNums([6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90], [96, 102, 108, 114, 120, 126]), 30, 'Test 55');
test(xorAllNums([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 0, 'Test 56');
test(xorAllNums([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], [512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), 0, 'Test 57');
test(xorAllNums([255, 254, 253, 252, 251], [127, 63, 31, 15, 7]), 172, 'Test 58');
test(xorAllNums([0, 255, 511, 1023, 2047], [1, 128, 256, 512, 1024]), 641, 'Test 59');
test(xorAllNums([1, 1000000000], [1, 1000000000, 1000000000, 1000000000, 1000000000]), 1000000001, 'Test 60');
test(xorAllNums([7, 15, 21], [9, 3, 12, 8]), 14, 'Test 61');
test(xorAllNums([255, 128, 64, 32, 16], [1, 2, 4, 8, 16, 32]), 63, 'Test 62');
test(xorAllNums([999999999, 888888888, 777777777], [666666666, 555555555, 444444444, 333333333, 222222222]), 587645496, 'Test 63');
test(xorAllNums([123456789, 987654321, 456789123], [321654987, 789123456, 654987321, 123456789]), 477404263, 'Test 64');
test(xorAllNums([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 0, 'Test 65');
test(xorAllNums([1, 1, 1, 1, 1], [1, 1, 1, 1, 1]), 0, 'Test 66');
test(xorAllNums([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 2046, 'Test 67');
test(xorAllNums([1, 3, 5, 7, 9, 11, 13], [2, 4, 6, 8, 10, 12, 14, 16]), 16, 'Test 68');
test(xorAllNums([13, 17, 19, 23, 29, 31], [37, 41, 43, 47, 53, 59, 61, 67, 71]), 26, 'Test 69');
test(xorAllNums([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [15, 25, 35, 45, 55, 65, 75, 85, 95, 105]), 0, 'Test 70');
test(xorAllNums([1000000000], [1000000000, 1000000000]), 0, 'Test 71');
test(xorAllNums([13, 29, 31, 47, 53, 59, 61, 67, 71, 73], [79, 83, 89, 97, 101, 103, 107, 109, 113, 127]), 0, 'Test 72');
test(xorAllNums([255, 128, 64, 32, 16, 8, 4, 2, 1], [1, 3, 7, 15, 31, 63, 127, 255]), 170, 'Test 73');
test(xorAllNums([255, 511, 765, 1023, 1279], [15, 31, 47, 63, 79]), 1202, 'Test 74');
test(xorAllNums([255, 128, 64, 32, 16, 8, 4, 2, 1], [1, 3, 5, 7, 9, 11, 13, 15, 17]), 17, 'Test 75');
test(xorAllNums([7, 8, 9, 10], [1, 2, 3, 4, 5, 6]), 0, 'Test 76');
test(xorAllNums([123456789], [987654321, 1122334455, 6677889900]), 8345112639, 'Test 77');
test(xorAllNums([999999999, 888888888, 777777777, 666666666], [555555555, 444444444, 333333333, 222222222]), 0, 'Test 78');
test(xorAllNums([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]), 11, 'Test 79');
test(xorAllNums([1000000000, 2000000000, 3000000000], [1, 1000000000, 2000000000]), 3000000001, 'Test 80');
test(xorAllNums([1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 81');
test(xorAllNums([666], [666, 666, 666, 666, 666, 666]), 0, 'Test 82');
test(xorAllNums([1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 83');
test(xorAllNums([100, 200, 300, 400, 500], [500, 400, 300, 200, 100]), 0, 'Test 84');
test(xorAllNums([1024, 2048, 4096, 8192, 16384], [1, 2, 4, 8, 16]), 31775, 'Test 85');
test(xorAllNums([7, 11, 13, 17, 19], [3, 6, 9, 12, 15]), 12, 'Test 86');
test(xorAllNums([1], [2^30-1]), Error: Solution.xorAllNums[] missing 1 required positional argument: 'nums2', 'Test 87');
test(xorAllNums([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], [1024, 2048, 4096, 8192, 16384]), 1023, 'Test 88');
test(xorAllNums([123456789, 987654321], [1000000007, 1111111111]), 0, 'Test 89');
test(xorAllNums([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683]), 0, 'Test 90');
test(xorAllNums([100, 200, 300, 400], [50, 60, 70]), 16, 'Test 91');
test(xorAllNums([255, 128, 64, 32], [16, 8, 4, 2, 1]), 31, 'Test 92');
test(xorAllNums([0, 0, 0, 0], [0, 0, 0, 0]), 0, 'Test 93');
test(xorAllNums([111, 222, 333, 444, 555, 666, 777, 888, 999], [100, 200, 300, 400, 500, 600, 700, 800, 900]), 707, 'Test 94');
test(xorAllNums([123456789, 987654321, 111111111, 222222222], [333333333, 444444444, 555555555]), 908335597, 'Test 95');
test(xorAllNums([0, 1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13]), 1, 'Test 96');
test(xorAllNums([1, 1, 1, 1, 1], [2, 2, 2, 2, 2]), 3, 'Test 97');
test(xorAllNums([1000000, 2000000, 3000000, 4000000], [500000, 600000, 700000]), 67840, 'Test 98');
test(xorAllNums([100, 200, 300], [50, 150, 250, 350, 450]), 322, 'Test 99');
test(xorAllNums([1, 3, 5, 7, 9, 11], [2, 4, 6, 8, 10]), 2, 'Test 100');
test(xorAllNums([10^9], [10^9]), Error: Solution.xorAllNums[] missing 2 required positional arguments: 'nums1' and 'nums2', 'Test 101');
test(xorAllNums([2147483647, 2147483646, 2147483645], [1073741823, 1073741824, 1073741825]), 1073741826, 'Test 102');
test(xorAllNums([13, 23, 33, 43, 53, 63, 73, 83, 93, 103, 113], [11, 21, 31, 41, 51, 61, 71, 81, 91, 101, 111]), 42, 'Test 103');
test(xorAllNums([0, 0, 0, 0], [1, 1, 1, 1, 1]), 0, 'Test 104');
test(xorAllNums([13, 14, 15, 16, 17, 18, 19, 20], [21, 22, 23, 24, 25, 26, 27, 28]), 0, 'Test 105');
test(xorAllNums([2^31-1, 2^31-2, 2^31-3], [2^31-4, 2^31-5, 2^31-6, 2^31-7]), Error: Solution.xorAllNums[] missing 2 required positional arguments: 'nums1' and 'nums2', 'Test 106');
test(xorAllNums([15, 23, 42, 8, 16], [32, 19, 10, 7, 11]), 31, 'Test 107');
test(xorAllNums([1, 3, 5, 7, 9], [2, 4, 6, 8, 10, 12, 14]), 9, 'Test 108');
test(xorAllNums([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 0, 'Test 109');
test(xorAllNums([1024, 512, 256, 128], [64, 32, 16, 8, 4, 2, 1]), 1920, 'Test 110');

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
