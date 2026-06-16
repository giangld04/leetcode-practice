// Test: 2419. Longest Subarray With Maximum Bitwise And
// 42 test cases from LeetCodeDataset
// Run: node test.js

const { longestSubarray } = require("./solution");

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

console.log("\n2419. Longest Subarray With Maximum Bitwise And\n");

test(longestSubarray([8,9,10,11,12,13,14,15,16]), 1, 'Test 1');
test(longestSubarray([1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812, 3906, 1953]), 1, 'Test 2');
test(longestSubarray([8,9,10,10,10,8]), 3, 'Test 3');
test(longestSubarray([2,1,2,3,2,3,4,5,4,5,6,7,8,7,6,5,4,3,2,1]), 1, 'Test 4');
test(longestSubarray([1048576,1048576,1048576,1048575,1048574]), 3, 'Test 5');
test(longestSubarray([1024,512,256,128,64,32,16,8,4,2,1]), 1, 'Test 6');
test(longestSubarray([8,1,2,3,7,8,8]), 2, 'Test 7');
test(longestSubarray([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 20, 'Test 8');
test(longestSubarray([8,9,7,6,8,9,9,8]), 2, 'Test 9');
test(longestSubarray([1]), 1, 'Test 10');
test(longestSubarray([1,2,3,4]), 1, 'Test 11');
test(longestSubarray([1048576, 524288, 262144, 131072, 65536, 32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), 1, 'Test 12');
test(longestSubarray([1048575,1048575,1048575,1048575]), 4, 'Test 13');
test(longestSubarray([5,5,5,5,5]), 5, 'Test 14');
test(longestSubarray([1000000,1,2,3,1000000,1000000]), 2, 'Test 15');
test(longestSubarray([3,1,3,3,2,3,3,3,2,3,3,3,3,3,2,3,3,3,2,3,3,3,3,3,3,3,3,3,3]), 10, 'Test 16');
test(longestSubarray([1,2,3,3,2,2]), 2, 'Test 17');
test(longestSubarray([1000000,999999,999998,999997,999996,999995]), 1, 'Test 18');
test(longestSubarray([2,2,2,3,3,3,2,2,2,4,4,4,4,4,4,2,2,2,2,2]), 6, 'Test 19');
test(longestSubarray([32,32,32,32,31,30,29,28,27,26]), 4, 'Test 20');
test(longestSubarray([2,3,7,8,7,8,7,8,7,8,7,8]), 1, 'Test 21');
test(longestSubarray([8,7,6,5,4,3,2,1]), 1, 'Test 22');
test(longestSubarray([1,1,1,1,1,1]), 6, 'Test 23');
test(longestSubarray([1, 10, 10, 2, 10, 10, 10, 5, 5, 5, 5, 10, 10, 10, 10, 1, 1, 1, 1]), 4, 'Test 24');
test(longestSubarray([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]), 30, 'Test 25');
test(longestSubarray([17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 19, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19]), 10, 'Test 26');
test(longestSubarray([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288]), 1, 'Test 27');
test(longestSubarray([13, 13, 13, 14, 14, 14, 14, 13, 13, 14, 14, 14, 14, 14, 13, 13, 13, 14, 14, 14]), 5, 'Test 28');
test(longestSubarray([2147483647, 2147483647, 2147483647, 2147483646, 2147483647, 2147483647, 2147483647, 2147483646]), 3, 'Test 29');
test(longestSubarray([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 55, 'Test 30');
test(longestSubarray([32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32]), 30, 'Test 31');
test(longestSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]), 16, 'Test 32');
test(longestSubarray([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]), 22, 'Test 33');
test(longestSubarray([1000000, 1000000, 500000, 500000, 250000, 250000, 125000, 125000, 62500, 62500, 31250, 31250, 15625, 15625, 7812, 7812, 3906, 3906, 1953, 1953]), 2, 'Test 34');
test(longestSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 10, 'Test 35');
test(longestSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 10, 'Test 36');
test(longestSubarray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 1000000, 1000000, 1000000, 1000000]), 4, 'Test 37');
test(longestSubarray([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 49, 'Test 38');
test(longestSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 51, 'Test 39');
test(longestSubarray([128, 255, 255, 128, 255, 255, 255, 128, 128, 255, 255, 255, 255, 255, 128]), 5, 'Test 40');
test(longestSubarray([5, 5, 6, 6, 6, 5, 6, 6, 6, 6, 6, 5, 6, 6, 6, 6, 5, 5, 6, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6, 6]), 8, 'Test 41');
test(longestSubarray([999999, 999998, 999999, 999997, 999999, 999999, 999996, 999999, 999999, 999999]), 3, 'Test 42');

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
