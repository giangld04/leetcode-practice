// Test: 3095. Shortest Subarray With Or At Least K I
// 109 test cases from LeetCodeDataset
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

console.log("\n3095. Shortest Subarray With Or At Least K I\n");

test(minimumSubarrayLength([0,0,0], 1), -1, 'Test 1');
test(minimumSubarrayLength([5,5,5,5], 5), 1, 'Test 2');
test(minimumSubarrayLength([1,2], 0), 1, 'Test 3');
test(minimumSubarrayLength([4,5,6,7], 12), -1, 'Test 4');
test(minimumSubarrayLength([1,2,3], 2), 1, 'Test 5');
test(minimumSubarrayLength([30,1,4,3,2,5], 6), 1, 'Test 6');
test(minimumSubarrayLength([7,14,21,28,35], 21), 1, 'Test 7');
test(minimumSubarrayLength([1,3,5,7,9], 15), 2, 'Test 8');
test(minimumSubarrayLength([30,1,4,3], 7), 1, 'Test 9');
test(minimumSubarrayLength([3,3,3,3,3], 2), 1, 'Test 10');
test(minimumSubarrayLength([10,20,30,40,50], 100), -1, 'Test 11');
test(minimumSubarrayLength([0,0,0,0], 1), -1, 'Test 12');
test(minimumSubarrayLength([32,16,8,4,2,1], 31), 1, 'Test 13');
test(minimumSubarrayLength([2,1,8], 10), 3, 'Test 14');
test(minimumSubarrayLength([30,40,10,50], 70), -1, 'Test 15');
test(minimumSubarrayLength([30,1,4,2], 31), 2, 'Test 16');
test(minimumSubarrayLength([42,24,8,16], 48), 2, 'Test 17');
test(minimumSubarrayLength([2,4,6,8,10], 30), -1, 'Test 18');
test(minimumSubarrayLength([42,21,17,8,2], 42), 1, 'Test 19');
test(minimumSubarrayLength([31,31,31,31], 31), 1, 'Test 20');
test(minimumSubarrayLength([16,8,4,2,1], 31), 5, 'Test 21');
test(minimumSubarrayLength([31,15,7,3,1], 31), 1, 'Test 22');
test(minimumSubarrayLength([15, 31, 63, 127, 255, 511, 1023, 2047], 1024), 1, 'Test 23');
test(minimumSubarrayLength([1, 3, 5, 7, 9, 11, 13], 15), 2, 'Test 24');
test(minimumSubarrayLength([5, 13, 7, 2, 8], 20), -1, 'Test 25');
test(minimumSubarrayLength([5, 3, 1, 4, 2, 8, 16, 32], 31), 1, 'Test 26');
test(minimumSubarrayLength([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 1, 'Test 27');
test(minimumSubarrayLength([25, 12, 6, 3, 1, 0], 25), 1, 'Test 28');
test(minimumSubarrayLength([25, 50, 75, 100, 125, 150, 175, 200, 225, 250], 255), 2, 'Test 29');
test(minimumSubarrayLength([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1023), 10, 'Test 30');
test(minimumSubarrayLength([32, 16, 8, 4, 2, 1], 63), 6, 'Test 31');
test(minimumSubarrayLength([1, 3, 5, 7, 9, 11, 13, 15], 15), 1, 'Test 32');
test(minimumSubarrayLength([42, 15, 28, 24, 21, 49, 56, 7, 35, 32, 63, 1, 8, 64, 16, 128, 3, 2, 4, 8, 16], 255), 6, 'Test 33');
test(minimumSubarrayLength([48, 24, 12, 6, 3, 1], 50), 2, 'Test 34');
test(minimumSubarrayLength([4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 0], 4095), 1, 'Test 35');
test(minimumSubarrayLength([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 31), 2, 'Test 36');
test(minimumSubarrayLength([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 1, 'Test 37');
test(minimumSubarrayLength([3, 5, 6, 9, 12, 15, 18], 30), 2, 'Test 38');
test(minimumSubarrayLength([42, 21, 10, 5, 2, 1], 42), 1, 'Test 39');
test(minimumSubarrayLength([48, 49, 50, 51, 52, 53, 54, 55, 56, 57], 60), 2, 'Test 40');
test(minimumSubarrayLength([50, 25, 12, 6, 3, 1], 80), -1, 'Test 41');
test(minimumSubarrayLength([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 1, 'Test 42');
test(minimumSubarrayLength([0, 0, 0, 0, 0, 0, 0], 0), 1, 'Test 43');
test(minimumSubarrayLength([3, 6, 12, 24, 48, 96, 192, 384, 512], 513), 2, 'Test 44');
test(minimumSubarrayLength([32, 16, 8, 4, 2, 1], 31), 1, 'Test 45');
test(minimumSubarrayLength([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288], 1048575), 20, 'Test 46');
test(minimumSubarrayLength([31, 14, 7, 3, 1], 30), 1, 'Test 47');
test(minimumSubarrayLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), 1, 'Test 48');
test(minimumSubarrayLength([5, 7, 11, 13, 17, 19, 23, 29], 40), -1, 'Test 49');
test(minimumSubarrayLength([10, 20, 30, 40, 50], 120), -1, 'Test 50');
test(minimumSubarrayLength([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575], 1048575), 1, 'Test 51');
test(minimumSubarrayLength([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 55), 2, 'Test 52');
test(minimumSubarrayLength([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 511), 1, 'Test 53');
test(minimumSubarrayLength([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1024), -1, 'Test 54');
test(minimumSubarrayLength([5, 10, 15, 20, 25, 30], 45), -1, 'Test 55');
test(minimumSubarrayLength([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 60), 2, 'Test 56');
test(minimumSubarrayLength([6, 12, 18, 24, 30], 30), 1, 'Test 57');
test(minimumSubarrayLength([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 50), -1, 'Test 58');
test(minimumSubarrayLength([50, 25, 12, 6, 3, 1], 49), 1, 'Test 59');
test(minimumSubarrayLength([30, 29, 28, 27, 26, 25, 24, 23, 22, 21], 60), -1, 'Test 60');
test(minimumSubarrayLength([3, 5, 7, 11, 13, 17, 19, 23, 29, 31], 31), 1, 'Test 61');
test(minimumSubarrayLength([10, 20, 30, 40, 50, 60, 70, 80], 150), -1, 'Test 62');
test(minimumSubarrayLength([3, 5, 7, 9, 11, 13], 13), 1, 'Test 63');
test(minimumSubarrayLength([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 1, 'Test 64');
test(minimumSubarrayLength([31, 14, 7, 3, 1], 31), 1, 'Test 65');
test(minimumSubarrayLength([7, 14, 21, 28, 35], 35), 1, 'Test 66');
test(minimumSubarrayLength([63, 31, 15, 7, 3, 1, 0], 63), 1, 'Test 67');
test(minimumSubarrayLength([31, 31, 31, 31, 31], 15), 1, 'Test 68');
test(minimumSubarrayLength([1, 3, 7, 15, 31, 63], 63), 1, 'Test 69');
test(minimumSubarrayLength([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 31), -1, 'Test 70');
test(minimumSubarrayLength([33, 66, 132, 264, 528, 1056, 2112, 4224, 8448, 16896], 8000), 1, 'Test 71');
test(minimumSubarrayLength([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023], 512), 1, 'Test 72');
test(minimumSubarrayLength([128, 64, 32, 16, 8, 4, 2, 1], 255), 8, 'Test 73');
test(minimumSubarrayLength([7, 14, 21, 28, 35, 42], 42), 1, 'Test 74');
test(minimumSubarrayLength([45, 35, 25, 15, 5], 60), 3, 'Test 75');
test(minimumSubarrayLength([1, 1, 1, 1, 1, 1, 1], 1), 1, 'Test 76');
test(minimumSubarrayLength([31, 31, 31, 31, 31, 31, 31, 31, 31, 31], 31), 1, 'Test 77');
test(minimumSubarrayLength([16, 8, 4, 2, 1, 32, 64, 128, 256, 512, 1024], 1536), 2, 'Test 78');
test(minimumSubarrayLength([50, 49, 48, 47, 46, 45, 44, 43, 42, 41], 60), 2, 'Test 79');
test(minimumSubarrayLength([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096], 8192), -1, 'Test 80');
test(minimumSubarrayLength([1, 3, 7, 15, 31, 63], 62), 1, 'Test 81');
test(minimumSubarrayLength([7, 14, 28, 56, 112, 224, 448, 896], 1000), 4, 'Test 82');
test(minimumSubarrayLength([31, 15, 7, 3, 1, 0, 0, 0, 0, 0, 1, 3, 7, 15, 31], 31), 1, 'Test 83');
test(minimumSubarrayLength([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765], 6765), 1, 'Test 84');
test(minimumSubarrayLength([4, 8, 12, 16, 20, 24, 28, 32, 36, 40], 44), 2, 'Test 85');
test(minimumSubarrayLength([4, 8, 12, 16, 20, 24, 28, 32], 31), 1, 'Test 86');
test(minimumSubarrayLength([1, 2, 4, 8, 16, 32, 64], 64), 1, 'Test 87');
test(minimumSubarrayLength([2, 6, 18, 54, 162], 242), -1, 'Test 88');
test(minimumSubarrayLength([8, 16, 24, 32, 40, 48, 56, 64, 72, 80], 96), 2, 'Test 89');
test(minimumSubarrayLength([10, 20, 30, 40, 50], 70), -1, 'Test 90');
test(minimumSubarrayLength([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 1023), -1, 'Test 91');
test(minimumSubarrayLength([1, 3, 7, 15, 31, 63, 127], 127), 1, 'Test 92');
test(minimumSubarrayLength([45, 35, 25, 15, 5], 40), 1, 'Test 93');
test(minimumSubarrayLength([7, 14, 21, 28, 35, 42, 49, 56, 63, 70], 70), 1, 'Test 94');
test(minimumSubarrayLength([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], 31), 1, 'Test 95');
test(minimumSubarrayLength([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0), 1, 'Test 96');
test(minimumSubarrayLength([1, 2, 4, 8, 16, 32, 64], 127), 7, 'Test 97');
test(minimumSubarrayLength([5, 10, 15, 20, 25, 30], 40), -1, 'Test 98');
test(minimumSubarrayLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 15), 1, 'Test 99');
test(minimumSubarrayLength([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 1, 'Test 100');
test(minimumSubarrayLength([31, 14, 7, 3, 1, 0, 0, 0, 0, 0], 31), 1, 'Test 101');
test(minimumSubarrayLength([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36], 50), 1, 'Test 102');
test(minimumSubarrayLength([16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576], 1048576), 1, 'Test 103');
test(minimumSubarrayLength([29, 15, 7, 3, 1], 31), 2, 'Test 104');
test(minimumSubarrayLength([63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32], 63), 1, 'Test 105');
test(minimumSubarrayLength([4, 6, 8, 10, 12, 14], 14), 1, 'Test 106');
test(minimumSubarrayLength([5, 10, 15, 20, 25, 30, 35], 35), 1, 'Test 107');
test(minimumSubarrayLength([5, 10, 15, 20, 25, 30], 30), 1, 'Test 108');
test(minimumSubarrayLength([31, 14, 7, 3, 1, 0, 15, 28, 16], 31), 1, 'Test 109');

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
