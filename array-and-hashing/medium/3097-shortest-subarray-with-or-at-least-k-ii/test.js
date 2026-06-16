// Test: 3097. Shortest Subarray With Or At Least K Ii
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { minimumSubarrayLength } = require("./solution");

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

console.log("\n3097. Shortest Subarray With Or At Least K Ii\n");

test(minimumSubarrayLength([5,5,5,5,5], 5), 1, 'Test 1');
test(minimumSubarrayLength([0,0,0], 1), -1, 'Test 2');
test(minimumSubarrayLength([3,1,4,1,5,9,2,6,5,3,5], 10), 2, 'Test 3');
test(minimumSubarrayLength([5,5,5,5], 5), 1, 'Test 4');
test(minimumSubarrayLength([5,3,1,1,1], 8), -1, 'Test 5');
test(minimumSubarrayLength([1,2], 0), 1, 'Test 6');
test(minimumSubarrayLength([1,2,3], 2), 1, 'Test 7');
test(minimumSubarrayLength([3,5,7,9], 15), 2, 'Test 8');
test(minimumSubarrayLength([1,0,1,0,1], 1), 1, 'Test 9');
test(minimumSubarrayLength([1000000000,500000000,250000000], 1500000000), -1, 'Test 10');
test(minimumSubarrayLength([1,3,7,15,31], 31), 1, 'Test 11');
test(minimumSubarrayLength([7,10,4,3,15], 14), 1, 'Test 12');
test(minimumSubarrayLength([1,1,1,1], 1), 1, 'Test 13');
test(minimumSubarrayLength([3,3,3,3], 3), 1, 'Test 14');
test(minimumSubarrayLength([5,9,1,8], 15), -1, 'Test 15');
test(minimumSubarrayLength([4,7,1,9,3,8], 11), 2, 'Test 16');
test(minimumSubarrayLength([1,3,4,8,16], 15), 1, 'Test 17');
test(minimumSubarrayLength([1000000000], 1000000000), 1, 'Test 18');
test(minimumSubarrayLength([30,1,4,3], 31), 2, 'Test 19');
test(minimumSubarrayLength([0,0,0,0], 1), -1, 'Test 20');
test(minimumSubarrayLength([2,1,8], 10), 3, 'Test 21');
test(minimumSubarrayLength([3,1,4,1,5,9,2,6,5,3,5], 7), 1, 'Test 22');
test(minimumSubarrayLength([1073741824], 1073741824), 1, 'Test 23');
test(minimumSubarrayLength([1,1,1,1,1], 1), 1, 'Test 24');
test(minimumSubarrayLength([1024,512,256], 1024), 1, 'Test 25');
test(minimumSubarrayLength([3,5,7,9,11], 15), 2, 'Test 26');
test(minimumSubarrayLength([10,9,8,7,6,5,4,3,2,1], 1023), -1, 'Test 27');
test(minimumSubarrayLength([31,15,7,3,1], 31), 1, 'Test 28');
test(minimumSubarrayLength([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288], 1048575), 20, 'Test 29');
test(minimumSubarrayLength([31, 15, 7, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 31), 1, 'Test 30');
test(minimumSubarrayLength([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 1), 1, 'Test 31');
test(minimumSubarrayLength([255, 127, 63, 31, 15, 7, 3, 1, 0, 0, 0, 0, 0, 0, 0], 255), 1, 'Test 32');
test(minimumSubarrayLength([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023], 511), 1, 'Test 33');
test(minimumSubarrayLength([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 45), 1, 'Test 34');
test(minimumSubarrayLength([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384], 32767), 15, 'Test 35');
test(minimumSubarrayLength([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023], 512), 1, 'Test 36');
test(minimumSubarrayLength([128, 64, 32, 16, 8, 4, 2, 1], 255), 8, 'Test 37');
test(minimumSubarrayLength([987654321, 876543210, 765432109, 654321098, 543210987, 432109876, 321098765, 210987654, 109876543, 98765432], 987654321), 1, 'Test 38');
test(minimumSubarrayLength([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384], 16383), 1, 'Test 39');
test(minimumSubarrayLength([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 1023), 1, 'Test 40');
test(minimumSubarrayLength([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0), 1, 'Test 41');
test(minimumSubarrayLength([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575], 1048575), 1, 'Test 42');
test(minimumSubarrayLength([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 1), 1, 'Test 43');
test(minimumSubarrayLength([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048], 2047), 1, 'Test 44');
test(minimumSubarrayLength([1000000000, 999999999, 999999998, 999999997, 999999996], 1000000000), 1, 'Test 45');
test(minimumSubarrayLength([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 1), 1, 'Test 46');
test(minimumSubarrayLength([8, 4, 2, 1, 16, 8, 4, 2, 1, 32, 16, 8, 4, 2, 1], 31), 1, 'Test 47');
test(minimumSubarrayLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 20), 1, 'Test 48');
test(minimumSubarrayLength([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71], 100), 2, 'Test 49');
test(minimumSubarrayLength([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000], 15625000), 1, 'Test 50');
test(minimumSubarrayLength([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 30), 2, 'Test 51');
test(minimumSubarrayLength([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1], 2047), 11, 'Test 52');
test(minimumSubarrayLength([1048576, 524288, 262144, 131072, 65536, 32768, 16384, 8192, 4096, 2048], 2097151), -1, 'Test 53');
test(minimumSubarrayLength([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], 1023), 1, 'Test 54');
test(minimumSubarrayLength([2147483647, 1073741823, 536870911, 268435455, 134217727], 4000000000), -1, 'Test 55');
test(minimumSubarrayLength([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125], 1000000000), 1, 'Test 56');
test(minimumSubarrayLength([1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 1000000000), 1, 'Test 57');
test(minimumSubarrayLength([31, 15, 7, 3, 1, 63, 127, 255, 511, 1023], 1023), 1, 'Test 58');
test(minimumSubarrayLength([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1023), 10, 'Test 59');
test(minimumSubarrayLength([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125], 1953125), 1, 'Test 60');
test(minimumSubarrayLength([1023, 1023, 1023, 1023, 1023], 1023), 1, 'Test 61');
test(minimumSubarrayLength([123456789, 987654321, 111111111, 222222222, 333333333], 123456789), 1, 'Test 62');
test(minimumSubarrayLength([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 1, 'Test 63');
test(minimumSubarrayLength([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767], 32767), 1, 'Test 64');
test(minimumSubarrayLength([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 1), 1, 'Test 65');
test(minimumSubarrayLength([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1), -1, 'Test 66');
test(minimumSubarrayLength([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2147483647], 2147483647), 1, 'Test 67');
test(minimumSubarrayLength([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 1, 'Test 68');
test(minimumSubarrayLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1023), -1, 'Test 69');
test(minimumSubarrayLength([256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072], 262143), -1, 'Test 70');
test(minimumSubarrayLength([9, 5, 3, 7, 11, 13, 17, 19, 23, 29], 50), -1, 'Test 71');
test(minimumSubarrayLength([31, 29, 27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1], 31), 1, 'Test 72');
test(minimumSubarrayLength([128, 64, 32, 16, 8, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 255), 8, 'Test 73');
test(minimumSubarrayLength([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288], 1048576), -1, 'Test 74');
test(minimumSubarrayLength([1048575, 524287, 262143, 131071, 65535, 32767, 16383, 8191, 4095, 2047], 1048575), 1, 'Test 75');
test(minimumSubarrayLength([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 2047), 11, 'Test 76');
test(minimumSubarrayLength([500000000, 500000000, 500000000, 500000000, 500000000, 500000000, 500000000], 500000000), 1, 'Test 77');
test(minimumSubarrayLength([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048], 2048), 1, 'Test 78');
test(minimumSubarrayLength([255, 255, 255, 255, 255, 255, 255, 255, 255, 255], 255), 1, 'Test 79');
test(minimumSubarrayLength([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 1000000000), 1, 'Test 80');
test(minimumSubarrayLength([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1], 1023), 1, 'Test 81');
test(minimumSubarrayLength([2147483647, 2147483647, 2147483647, 2147483647, 2147483647], 2147483647), 1, 'Test 82');
test(minimumSubarrayLength([31, 15, 7, 3, 1, 0, 0, 0, 0, 0], 31), 1, 'Test 83');
test(minimumSubarrayLength([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1), -1, 'Test 84');
test(minimumSubarrayLength([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047], 2047), 1, 'Test 85');
test(minimumSubarrayLength([128, 64, 32, 16, 8, 4, 2, 1, 256, 128, 64, 32, 16, 8, 4, 2, 1, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1], 1023), 10, 'Test 86');
test(minimumSubarrayLength([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 1), 1, 'Test 87');
test(minimumSubarrayLength([256, 128, 64, 32, 16, 8, 4, 2, 1], 511), 9, 'Test 88');
test(minimumSubarrayLength([31, 15, 7, 3, 1], 31), 1, 'Test 89');
test(minimumSubarrayLength([1000000000, 1000000000, 1000000000], 1000000000), 1, 'Test 90');
test(minimumSubarrayLength([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1), -1, 'Test 91');
test(minimumSubarrayLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 500), -1, 'Test 92');
test(minimumSubarrayLength([31, 7, 5, 9, 20, 15, 8, 2], 25), 1, 'Test 93');
test(minimumSubarrayLength([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 2), 1, 'Test 94');
test(minimumSubarrayLength([0, 0, 0, 0, 0, 0, 0, 0], 1), -1, 'Test 95');

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
