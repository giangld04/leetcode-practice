// Test: 3011. Find If Array Can Be Sorted
// 135 test cases from LeetCodeDataset
// Run: node test.js

const { canSortArray } = require("./solution");

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

console.log("\n3011. Find If Array Can Be Sorted\n");

test(canSortArray([1,3,2,7,6,5,4,8]), false, 'Test 1');
test(canSortArray([31,14,7,3,1]), false, 'Test 2');
test(canSortArray([5,3,1,4,2]), false, 'Test 3');
test(canSortArray([5,3,9,6,12]), true, 'Test 4');
test(canSortArray([4,4,4,4,4]), true, 'Test 5');
test(canSortArray([8,4,2,30,15]), true, 'Test 6');
test(canSortArray([7,6,5,4,3,2,1]), false, 'Test 7');
test(canSortArray([30,30,30,30,30]), true, 'Test 8');
test(canSortArray([8,8,8,8,8]), true, 'Test 9');
test(canSortArray([16,8,4,2,32,1]), true, 'Test 10');
test(canSortArray([1,2,3,4,5]), true, 'Test 11');
test(canSortArray([2,1,4,3,8,6]), false, 'Test 12');
test(canSortArray([28,14,7,3,1,2,4,8,16]), false, 'Test 13');
test(canSortArray([2,1,4,3,8,7,6,5]), false, 'Test 14');
test(canSortArray([16,8,4,2,1]), true, 'Test 15');
test(canSortArray([5,3,9,6,12,4,8]), false, 'Test 16');
test(canSortArray([7,14,28,21,18]), false, 'Test 17');
test(canSortArray([15,30,60,120,240]), true, 'Test 18');
test(canSortArray([2,2,2,2,2,2]), true, 'Test 19');
test(canSortArray([1,1,1,1,1]), true, 'Test 20');
test(canSortArray([5,3,6,8,2]), false, 'Test 21');
test(canSortArray([2,4,8,16,32]), true, 'Test 22');
test(canSortArray([10,12,15,7,3]), false, 'Test 23');
test(canSortArray([31,29,28,27,26]), false, 'Test 24');
test(canSortArray([3,16,8,4,2]), false, 'Test 25');
test(canSortArray([4,2,1,3,8,6]), false, 'Test 26');
test(canSortArray([31,15,7,3,1]), false, 'Test 27');
test(canSortArray([31,15,7,3,1,2,4,8,16]), false, 'Test 28');
test(canSortArray([16,8,4,2,30,15]), false, 'Test 29');
test(canSortArray([28,14,7,3,1,14,28]), false, 'Test 30');
test(canSortArray([2,2,2,2,2]), true, 'Test 31');
test(canSortArray([2,1,4,3,6,5,8,7]), false, 'Test 32');
test(canSortArray([15,15,15,15,15]), true, 'Test 33');
test(canSortArray([29, 27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), false, 'Test 34');
test(canSortArray([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), true, 'Test 35');
test(canSortArray([5, 3, 9, 6, 12, 10, 14, 7, 11]), false, 'Test 36');
test(canSortArray([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]), true, 'Test 37');
test(canSortArray([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), true, 'Test 38');
test(canSortArray([128,64,32,16,8,4,2,1,3,5,7,14,28,56,112]), false, 'Test 39');
test(canSortArray([2, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]), true, 'Test 40');
test(canSortArray([10, 13, 11, 14, 15, 7, 8, 12]), false, 'Test 41');
test(canSortArray([31, 23, 15, 7, 3, 1, 127, 63, 31, 15, 7, 3, 1]), false, 'Test 42');
test(canSortArray([255, 127, 63, 31, 15, 7, 3, 1, 2, 4, 8, 16, 32, 64, 128, 256]), false, 'Test 43');
test(canSortArray([15, 30, 21, 28, 7, 14, 3, 6, 12, 24]), false, 'Test 44');
test(canSortArray([255, 254, 253, 252, 251, 250, 249, 248, 247, 246]), false, 'Test 45');
test(canSortArray([17, 25, 29, 31, 30, 14, 6, 3, 1, 2]), false, 'Test 46');
test(canSortArray([255, 256, 128, 64, 32, 16, 8, 4, 2, 1]), false, 'Test 47');
test(canSortArray([1, 3, 7, 15, 31, 30, 14, 7, 3, 1, 2, 4, 8, 16, 32]), false, 'Test 48');
test(canSortArray([13, 11, 7, 3, 15, 30, 60, 120, 240, 480, 960, 1920, 3840, 7680]), false, 'Test 49');
test(canSortArray([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), false, 'Test 50');
test(canSortArray([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), true, 'Test 51');
test(canSortArray([3, 6, 12, 9, 15, 30, 60, 5, 10]), false, 'Test 52');
test(canSortArray([512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 3, 5, 7, 9, 11, 13, 15]), false, 'Test 53');
test(canSortArray([127, 63, 31, 15, 7, 3, 1, 2, 4, 8, 16, 32, 64, 128]), false, 'Test 54');
test(canSortArray([10, 9, 5, 6, 2, 3, 1]), false, 'Test 55');
test(canSortArray([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192]), true, 'Test 56');
test(canSortArray([32,16,8,4,2,1,30,15,7,14,28,12,6,3]), false, 'Test 57');
test(canSortArray([5, 3, 6, 12, 24, 48, 96, 192, 3, 6, 12]), true, 'Test 58');
test(canSortArray([28, 14, 7, 3, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]), false, 'Test 59');
test(canSortArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), true, 'Test 60');
test(canSortArray([24, 12, 6, 3, 1, 48, 24, 12, 6, 3, 1, 96, 48, 24, 12, 6, 3, 1]), false, 'Test 61');
test(canSortArray([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]), true, 'Test 62');
test(canSortArray([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]), true, 'Test 63');
test(canSortArray([3, 5, 6, 9, 10, 12, 15, 17, 18, 20, 24, 25, 30, 33, 36, 40, 45, 48, 50, 60, 66, 72, 75, 80, 90, 100]), true, 'Test 64');
test(canSortArray([8, 16, 2, 4, 1, 32, 64, 128, 256, 512]), true, 'Test 65');
test(canSortArray([5, 3, 9, 6, 10, 12, 15]), true, 'Test 66');
test(canSortArray([14, 7, 28, 21, 3, 6, 12, 24, 48, 96, 192, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), false, 'Test 67');
test(canSortArray([25,10,5,3,1,2,4,8,16,32,64]), false, 'Test 68');
test(canSortArray([21, 21, 14, 14, 7, 7, 3, 3, 15, 15, 30, 30, 60, 60, 120, 120, 240, 240]), false, 'Test 69');
test(canSortArray([18, 9, 4, 2, 1, 3, 6, 12, 24, 48, 96, 192]), false, 'Test 70');
test(canSortArray([1,16,2,8,32,4,64,128,256,512,1024,2048,4096,8192,16384,32768]), true, 'Test 71');
test(canSortArray([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,1,2,4,8,16,32,64]), true, 'Test 72');
test(canSortArray([15, 30, 18, 21, 7, 14, 28]), false, 'Test 73');
test(canSortArray([31, 15, 7, 3, 1, 2, 4, 8, 16, 32]), false, 'Test 74');
test(canSortArray([13,10,9,6,3,2,4,8,16]), false, 'Test 75');
test(canSortArray([30, 15, 8, 4, 2, 1]), false, 'Test 76');
test(canSortArray([64,32,16,8,4,2,1]), true, 'Test 77');
test(canSortArray([2,4,8,16,32,64,128,256,512]), true, 'Test 78');
test(canSortArray([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112]), true, 'Test 79');
test(canSortArray([127, 125, 123, 121, 119, 117, 115, 113, 111, 109, 107, 105, 103, 101, 99, 97, 95, 93, 91, 89, 87, 85, 83, 81, 79, 77, 75, 73, 71, 69, 67, 65, 63, 61, 59, 57, 55, 53, 51, 49, 47, 45, 43, 41, 39, 37, 35, 33, 31, 29, 27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), false, 'Test 80');
test(canSortArray([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), true, 'Test 81');
test(canSortArray([15,30,1,2,4,8]), false, 'Test 82');
test(canSortArray([17, 34, 68, 136, 272, 544, 1088, 2176, 4352, 8704, 17408, 34816]), true, 'Test 83');
test(canSortArray([21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]), true, 'Test 84');
test(canSortArray([255,254,252,248,240,224,192,128,64,32,16,8,4,2,1]), false, 'Test 85');
test(canSortArray([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), true, 'Test 86');
test(canSortArray([31, 15, 7, 3, 1, 30, 28, 14, 6, 2]), false, 'Test 87');
test(canSortArray([5,3,9,12,6,15,7]), false, 'Test 88');
test(canSortArray([16, 32, 8, 4, 2, 1, 128, 64, 15, 30, 21, 28, 7, 14, 3, 6, 12, 24]), false, 'Test 89');
test(canSortArray([13, 11, 7, 3, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), false, 'Test 90');
test(canSortArray([12, 5, 6, 3, 9, 18, 36, 45]), true, 'Test 91');
test(canSortArray([9,18,27,36,45,54,63,72,81,90,99,108,117,126,135,144]), true, 'Test 92');
test(canSortArray([31, 15, 7, 3, 1, 2, 4, 8, 16, 32, 64]), false, 'Test 93');
test(canSortArray([5, 3, 1, 12, 4, 6, 18, 9, 15, 30]), false, 'Test 94');
test(canSortArray([8, 4, 2, 30, 15, 7, 14, 28, 21, 18]), false, 'Test 95');
test(canSortArray([240, 192, 96, 48, 24, 12, 6, 3, 15, 30, 60, 120, 240, 480, 960]), false, 'Test 96');
test(canSortArray([5, 3, 11, 7, 13, 9, 14, 10, 6, 2]), false, 'Test 97');
test(canSortArray([31, 15, 7, 3, 1, 2, 4, 8, 16, 32, 64, 128, 256]), false, 'Test 98');
test(canSortArray([5, 10, 20, 40, 80, 160, 320, 640, 1280, 2560, 5120, 10240, 20480, 40960, 81920]), true, 'Test 99');
test(canSortArray([31,29,27,25,23,21,19,17,15]), false, 'Test 100');
test(canSortArray([18, 28, 21, 7, 14, 3, 6, 12, 24, 48]), false, 'Test 101');
test(canSortArray([8, 4, 2, 16, 8, 4, 2, 1, 32, 16]), true, 'Test 102');
test(canSortArray([8, 4, 2, 1, 16, 8, 4, 2, 1, 32, 16, 8, 4, 2, 1]), true, 'Test 103');
test(canSortArray([5,2,9,6,17,12,34,21,27]), false, 'Test 104');
test(canSortArray([3, 19, 11, 5, 13, 7, 15, 31, 29, 27, 23, 19, 15, 7, 3]), false, 'Test 105');
test(canSortArray([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), false, 'Test 106');
test(canSortArray([8, 4, 2, 1, 16, 8, 4, 2, 1]), true, 'Test 107');
test(canSortArray([31,29,27,23,19,17,13,11,7,5,3]), false, 'Test 108');
test(canSortArray([28,24,20,16,12,8,4,2,14,10,6,30,26,22,18,31,15,7,11,19,27,23,3,1,5,9,13]), false, 'Test 109');
test(canSortArray([255, 127, 63, 31, 15, 7, 3, 1, 2, 4, 8, 16, 32, 64, 128]), false, 'Test 110');
test(canSortArray([128, 64, 32, 16, 8, 4, 2, 1, 255, 127, 63, 31, 15, 7, 3, 1]), false, 'Test 111');
test(canSortArray([6, 3, 5, 9, 12, 10, 15, 30, 1, 2]), false, 'Test 112');
test(canSortArray([31,15,7,3,1,2,4,8,16,32,64,128,256]), false, 'Test 113');
test(canSortArray([2, 8, 4, 16, 32, 64, 128, 1, 3]), false, 'Test 114');
test(canSortArray([15,7,14,28,21,3,6,12]), false, 'Test 115');
test(canSortArray([5,3,9,6,12,18,24,30,31,15,7,14]), false, 'Test 116');
test(canSortArray([17,34,68,136,272,544,1088,2176,4352,8704]), true, 'Test 117');
test(canSortArray([18, 9, 6, 12, 24, 48, 96, 192, 384, 768, 1536, 3072, 6144, 12288]), true, 'Test 118');
test(canSortArray([135,144,117,126,99,108,90,81,72,63,54,45,36,27,18,9]), false, 'Test 119');
test(canSortArray([10,6,5,3,2,4,8,16,32]), false, 'Test 120');
test(canSortArray([100, 50, 25, 12, 6, 3, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), false, 'Test 121');
test(canSortArray([11,7,13,5,3,9,1,2,4]), false, 'Test 122');
test(canSortArray([5,3,12,9,18,30,24]), false, 'Test 123');
test(canSortArray([1, 3, 2, 6, 4, 12, 8, 24, 16, 48, 32, 96, 64, 192, 128, 384]), false, 'Test 124');
test(canSortArray([3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101]), true, 'Test 125');
test(canSortArray([128, 64, 32, 16, 8, 4, 2, 1]), true, 'Test 126');
test(canSortArray([5, 10, 15, 7, 14, 28, 31, 27, 23, 11, 22, 44, 88, 176, 352]), false, 'Test 127');
test(canSortArray([255, 127, 63, 31, 15, 7, 3, 1, 254, 126, 62, 30, 14, 6, 2, 0]), false, 'Test 128');
test(canSortArray([3, 5, 7, 9, 11, 13, 15, 31, 30, 29, 27, 25, 23, 21, 19]), false, 'Test 129');
test(canSortArray([1,8,4,2,16,32,64,128,256]), true, 'Test 130');
test(canSortArray([5, 3, 12, 15, 30, 60, 240]), true, 'Test 131');
test(canSortArray([63, 55, 47, 39, 31, 23, 15, 7, 3, 1]), false, 'Test 132');
test(canSortArray([32, 16, 8, 4, 2, 1, 128, 64, 32, 16, 8, 4, 2, 1]), true, 'Test 133');
test(canSortArray([100, 200, 50, 25, 125, 625, 3125, 15625, 78125, 390625]), false, 'Test 134');
test(canSortArray([15, 30, 15, 30, 15, 30, 15, 30, 15, 30, 15, 30, 15, 30, 15, 30]), true, 'Test 135');

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
