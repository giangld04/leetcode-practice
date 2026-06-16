// Test: 898. Bitwise Ors Of Subarrays
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { subarrayBitwiseORs } = require("./solution");

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

console.log("\n898. Bitwise Ors Of Subarrays\n");

test(subarrayBitwiseORs([0,1,1,3]), 3, 'Test 1');
test(subarrayBitwiseORs([2,1,0,3,2]), 4, 'Test 2');
test(subarrayBitwiseORs([5,5,5,5,5,5]), 1, 'Test 3');
test(subarrayBitwiseORs([8,16,32]), 6, 'Test 4');
test(subarrayBitwiseORs([1,1,2]), 3, 'Test 5');
test(subarrayBitwiseORs([10,20,30,40,50]), 7, 'Test 6');
test(subarrayBitwiseORs([0]), 1, 'Test 7');
test(subarrayBitwiseORs([8,16,32,64,128]), 15, 'Test 8');
test(subarrayBitwiseORs([1,0,1]), 2, 'Test 9');
test(subarrayBitwiseORs([1,1,1,1,1]), 1, 'Test 10');
test(subarrayBitwiseORs([1,3,7,15,31]), 5, 'Test 11');
test(subarrayBitwiseORs([1,2,3,4,5]), 6, 'Test 12');
test(subarrayBitwiseORs([1,2,4]), 6, 'Test 13');
test(subarrayBitwiseORs([3,2,1,5,4]), 6, 'Test 14');
test(subarrayBitwiseORs([3,2,1,1,2,3]), 3, 'Test 15');
test(subarrayBitwiseORs([0,0,0]), 1, 'Test 16');
test(subarrayBitwiseORs([0,0,0,0,0,0,0]), 1, 'Test 17');
test(subarrayBitwiseORs([0,1,2,3,4]), 6, 'Test 18');
test(subarrayBitwiseORs([5,1,4,2,1]), 7, 'Test 19');
test(subarrayBitwiseORs([0,1,2,3]), 4, 'Test 20');
test(subarrayBitwiseORs([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7]), 7, 'Test 21');
test(subarrayBitwiseORs([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 0]), 11, 'Test 22');
test(subarrayBitwiseORs([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 11, 'Test 23');
test(subarrayBitwiseORs([1, 3, 7, 15, 31, 63, 127, 255]), 8, 'Test 24');
test(subarrayBitwiseORs([8, 4, 2, 1, 0, 1, 2, 4, 8, 16]), 16, 'Test 25');
test(subarrayBitwiseORs([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 1, 'Test 26');
test(subarrayBitwiseORs([17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]), 15, 'Test 27');
test(subarrayBitwiseORs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 15, 'Test 28');
test(subarrayBitwiseORs([1,2,4,8,16,32,64,128]), 36, 'Test 29');
test(subarrayBitwiseORs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 11, 'Test 30');
test(subarrayBitwiseORs([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 55, 'Test 31');
test(subarrayBitwiseORs([89, 55, 34, 21, 13, 8, 5, 3, 2, 1, 1]), 16, 'Test 32');
test(subarrayBitwiseORs([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), 2, 'Test 33');
test(subarrayBitwiseORs([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 34');
test(subarrayBitwiseORs([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), 15, 'Test 35');
test(subarrayBitwiseORs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 15, 'Test 36');
test(subarrayBitwiseORs([255, 127, 63, 31, 15, 7, 3, 1]), 8, 'Test 37');
test(subarrayBitwiseORs([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]), 16, 'Test 38');
test(subarrayBitwiseORs([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]), 17, 'Test 39');
test(subarrayBitwiseORs([1,3,7,15,31,63,127,255]), 8, 'Test 40');
test(subarrayBitwiseORs([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), 1, 'Test 41');
test(subarrayBitwiseORs([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125]), 55, 'Test 42');
test(subarrayBitwiseORs([255,127,63,31,15,7,3,1,0]), 9, 'Test 43');
test(subarrayBitwiseORs([29, 17, 3, 19, 23, 5, 11, 2, 7, 29, 17, 3, 19, 23, 5, 11, 2, 7]), 11, 'Test 44');
test(subarrayBitwiseORs([13, 14, 15, 16, 17, 18, 19, 20, 21, 22]), 12, 'Test 45');
test(subarrayBitwiseORs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]), 78, 'Test 46');
test(subarrayBitwiseORs([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]), 29, 'Test 47');
test(subarrayBitwiseORs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 55, 'Test 48');
test(subarrayBitwiseORs([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023]), 10, 'Test 49');
test(subarrayBitwiseORs([7,7,7,7,7,7,7,7,7,7]), 1, 'Test 50');
test(subarrayBitwiseORs([1, 2, 4, 8, 16, 32, 64, 128, 256]), 45, 'Test 51');
test(subarrayBitwiseORs([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 52');
test(subarrayBitwiseORs([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 53');
test(subarrayBitwiseORs([0, 1, 3, 7, 15, 31, 63, 127]), 8, 'Test 54');
test(subarrayBitwiseORs([0, 1, 3, 7, 15, 31, 63]), 7, 'Test 55');
test(subarrayBitwiseORs([1, 4, 7, 10, 13, 16, 19, 22, 25, 28]), 15, 'Test 56');
test(subarrayBitwiseORs([123, 456, 789, 123, 456, 789, 123, 456, 789, 123]), 7, 'Test 57');
test(subarrayBitwiseORs([1,1,2,2,3,3,4,4,5,5,6,6]), 7, 'Test 58');
test(subarrayBitwiseORs([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]), 24, 'Test 59');
test(subarrayBitwiseORs([255, 127, 63, 31, 15, 7, 3, 1, 0, 1, 3, 7, 15, 31, 63, 127, 255]), 9, 'Test 60');
test(subarrayBitwiseORs([2147483647, 2147483646, 2147483645, 2147483644, 2147483643, 2147483642, 2147483641, 2147483640, 2147483639, 2147483638]), 10, 'Test 61');
test(subarrayBitwiseORs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288]), 210, 'Test 62');
test(subarrayBitwiseORs([1, 3, 7, 15, 31, 63, 127]), 7, 'Test 63');
test(subarrayBitwiseORs([1, 3, 2, 7, 6, 14, 13, 31, 30, 29]), 11, 'Test 64');
test(subarrayBitwiseORs([99, 88, 77, 66, 55, 44, 33, 22, 11, 0, 11, 22, 33, 44, 55, 66, 77, 88, 99]), 19, 'Test 65');
test(subarrayBitwiseORs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 22, 'Test 66');
test(subarrayBitwiseORs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 24, 'Test 67');
test(subarrayBitwiseORs([13, 7, 14, 13, 7, 14, 13, 7, 14, 13]), 4, 'Test 68');
test(subarrayBitwiseORs([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1]), 10, 'Test 69');
test(subarrayBitwiseORs([1,10,100,1000,10000,100000,1000000]), 28, 'Test 70');
test(subarrayBitwiseORs([5,6,7,8,9,10,11,12,13,14,15]), 11, 'Test 71');
test(subarrayBitwiseORs([1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1]), 2, 'Test 72');
test(subarrayBitwiseORs([1000000000, 500000000, 250000000, 125000000, 62500000]), 15, 'Test 73');
test(subarrayBitwiseORs([2147483647,2147483647,2147483647,2147483647]), 1, 'Test 74');
test(subarrayBitwiseORs([8,16,32,64,128,256,512,1024,2048,4096]), 55, 'Test 75');
test(subarrayBitwiseORs([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 6, 'Test 76');
test(subarrayBitwiseORs([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]), 9, 'Test 77');
test(subarrayBitwiseORs([1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), 2, 'Test 78');
test(subarrayBitwiseORs([0, 1, 3, 7, 15, 31, 63, 127, 255]), 9, 'Test 79');
test(subarrayBitwiseORs([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 16, 'Test 80');
test(subarrayBitwiseORs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]), 91, 'Test 81');
test(subarrayBitwiseORs([0,1,2,3,4,5,6,7,8,9,10]), 13, 'Test 82');
test(subarrayBitwiseORs([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 19, 'Test 83');
test(subarrayBitwiseORs([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]), 55, 'Test 84');
test(subarrayBitwiseORs([31, 15, 7, 3, 1, 3, 7, 15, 31, 63]), 6, 'Test 85');
test(subarrayBitwiseORs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), 120, 'Test 86');
test(subarrayBitwiseORs([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 1, 'Test 87');
test(subarrayBitwiseORs([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]), 120, 'Test 88');
test(subarrayBitwiseORs([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 1, 'Test 89');
test(subarrayBitwiseORs([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023]), 11, 'Test 90');
test(subarrayBitwiseORs([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 1, 'Test 91');
test(subarrayBitwiseORs([255, 127, 63, 31, 15, 7, 3, 1, 0]), 9, 'Test 92');
test(subarrayBitwiseORs([999, 888, 777, 666, 555, 444, 333, 222, 111, 0, 111, 222, 333, 444, 555, 666, 777, 888, 999]), 21, 'Test 93');

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
