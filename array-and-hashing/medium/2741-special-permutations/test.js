// Test: 2741. Special Permutations
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { specialPerm } = require("./solution");

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

console.log("\n2741. Special Permutations\n");

test(specialPerm([31,62,93,124,155]), 0, 'Test 1');
test(specialPerm([2,3,6]), 2, 'Test 2');
test(specialPerm([17,34,51,68,85]), 0, 'Test 3');
test(specialPerm([7,14,28,56,112]), 120, 'Test 4');
test(specialPerm([1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 0, 'Test 5');
test(specialPerm([5,10,20,40]), 24, 'Test 6');
test(specialPerm([11,22,33,44]), 4, 'Test 7');
test(specialPerm([1,4,3]), 2, 'Test 8');
test(specialPerm([2,4,8,16]), 24, 'Test 9');
test(specialPerm([19,38,57,76,95]), 0, 'Test 10');
test(specialPerm([10,20,30,40,50,60,70,80,90,100,110,120,130,140]), 0, 'Test 11');
test(specialPerm([3,5,15,7]), 0, 'Test 12');
test(specialPerm([4,2,6,3]), 2, 'Test 13');
test(specialPerm([7,14,28,56,112,224]), 720, 'Test 14');
test(specialPerm([2,4,8,16,32]), 120, 'Test 15');
test(specialPerm([7,14,28,21]), 4, 'Test 16');
test(specialPerm([13,26,39,52,65]), 0, 'Test 17');
test(specialPerm([5,10,15,20,25]), 0, 'Test 18');
test(specialPerm([29,58,87,116,145]), 0, 'Test 19');
test(specialPerm([11,22,33,44,55]), 0, 'Test 20');
test(specialPerm([23,46,69,92,115]), 0, 'Test 21');
test(specialPerm([3,9,27,81]), 24, 'Test 22');
test(specialPerm([3,5,15,75]), 12, 'Test 23');
test(specialPerm([4,6,12,24]), 12, 'Test 24');
test(specialPerm([2,4,6,8]), 4, 'Test 25');
test(specialPerm([2,3,6,12,18,36]), 336, 'Test 26');
test(specialPerm([5,10,20,40,80,160,320,640,1280,2560,5120,10240,20480]), 227020758, 'Test 27');
test(specialPerm([9,18,27,36,45,54,63,72,81,90,99,108,117,126]), 0, 'Test 28');
test(specialPerm([13,26,39,52,65,78,91,104,117,130,143,156,169,182]), 0, 'Test 29');
test(specialPerm([17, 34, 51, 68, 85, 102, 119, 136, 153, 170, 187, 204, 221, 238]), 0, 'Test 30');
test(specialPerm([8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112]), 0, 'Test 31');
test(specialPerm([2, 3, 5, 6, 10, 15, 30]), 120, 'Test 32');
test(specialPerm([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98]), 0, 'Test 33');
test(specialPerm([19,38,57,76,95,114,133,152,171,190,209,228,247,266]), 0, 'Test 34');
test(specialPerm([7,14,21,28,35,42,49,56]), 0, 'Test 35');
test(specialPerm([11,22,33,44,55,66,77,88,99,110,121,132,143,154,165,176,187,198,209,220]), Execution timed out, 'Test 36');
test(specialPerm([17,34,51,68,85,102,119,136,153,170,187,204,221,238]), 0, 'Test 37');
test(specialPerm([3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049, 177147, 531441, 1594323, 4782969]), 178290591, 'Test 38');
test(specialPerm([11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154]), 0, 'Test 39');
test(specialPerm([15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210]), 0, 'Test 40');
test(specialPerm([5,10,15,20,25,30,35]), 0, 'Test 41');
test(specialPerm([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43]), 0, 'Test 42');
test(specialPerm([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108, 117, 126]), 0, 'Test 43');
test(specialPerm([5, 10, 20, 25, 50, 100, 125, 200, 250, 500]), 136208, 'Test 44');
test(specialPerm([5,10,15,20,25,30,35,40,45,50,55,60,65,70]), 0, 'Test 45');
test(specialPerm([12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90]), 0, 'Test 46');
test(specialPerm([11,22,33,44,55,66,77,88,99,110]), 0, 'Test 47');
test(specialPerm([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53]), 0, 'Test 48');
test(specialPerm([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42]), 0, 'Test 49');
test(specialPerm([11, 22, 33, 44, 55, 66, 77, 88, 99]), 0, 'Test 50');
test(specialPerm([7,14,21,28,35,42,49,56,63,70,77,84,91,98,105,112,119,126,133]), 0, 'Test 51');
test(specialPerm([3,9,27,81,243,729,2187,6561,19683,59049,177147,531441,1594323,4782969]), 178290591, 'Test 52');
test(specialPerm([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70]), 0, 'Test 53');
test(specialPerm([13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143, 156]), 0, 'Test 54');
test(specialPerm([7, 14, 21, 28, 35]), 0, 'Test 55');
test(specialPerm([12, 24, 48, 96, 192, 384, 768, 1536, 3072, 6144, 12288, 24576, 49152, 98304]), 178290591, 'Test 56');
test(specialPerm([2,3,6,9,12,18,24]), 280, 'Test 57');
test(specialPerm([1,3,9,27,81,243]), 720, 'Test 58');
test(specialPerm([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140]), 0, 'Test 59');
test(specialPerm([25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350]), 0, 'Test 60');
test(specialPerm([1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512]), 334499784, 'Test 61');
test(specialPerm([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192]), 178290591, 'Test 62');
test(specialPerm([4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]), 178290591, 'Test 63');
test(specialPerm([3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049]), 3628800, 'Test 64');
test(specialPerm([19, 38, 57, 76, 95, 114, 133, 152, 171, 190, 209, 228, 247, 266]), 0, 'Test 65');
test(specialPerm([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80]), 0, 'Test 66');
test(specialPerm([13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143, 156, 169, 182]), 0, 'Test 67');
test(specialPerm([1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049, 177147, 531441, 1594323]), 178290591, 'Test 68');
test(specialPerm([11,22,33,44,55,66,77,88,99]), 0, 'Test 69');
test(specialPerm([4,8,16,32,64,128,256,512]), 40320, 'Test 70');
test(specialPerm([5, 25, 125, 625, 3125, 15625, 78125, 390625, 1953125]), 362880, 'Test 71');
test(specialPerm([2,6,12,18,24,30,36,42,48,54,60,66,72,78]), 0, 'Test 72');
test(specialPerm([23,46,69,92,115,138,161,184,207,230,253,276,299,322]), 0, 'Test 73');
test(specialPerm([7,14,21,28,35,42]), 4, 'Test 74');
test(specialPerm([9, 18, 27, 36, 45, 54, 63]), 0, 'Test 75');
test(specialPerm([2,4,6,8,10,12,14,16,18,20,22,24,26,28]), 0, 'Test 76');
test(specialPerm([8,16,32,64,128,256,512,1024]), 40320, 'Test 77');
test(specialPerm([21,42,63,84,105,126,147,168,189,210,231,252,273,294]), 0, 'Test 78');
test(specialPerm([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 3628800, 'Test 79');
test(specialPerm([10, 20, 40, 80, 160, 320, 640, 1280, 2560, 5120, 10240]), 39916800, 'Test 80');
test(specialPerm([5,15,25,35,45,55,65,75,85,95,105,115,125,135]), 0, 'Test 81');
test(specialPerm([4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768]), 178290591, 'Test 82');
test(specialPerm([5,10,20,40,80,160,320,640,1280,2560,5120,10240,20480,40960]), 178290591, 'Test 83');
test(specialPerm([23, 46, 69, 92, 115, 138, 161, 184, 207, 230, 253, 276, 299, 322]), 0, 'Test 84');
test(specialPerm([7, 14, 28, 56, 112, 224, 448, 896, 1792, 3584, 7168, 14336, 28672, 57344]), 178290591, 'Test 85');
test(specialPerm([7,14,21,28,35,42,49,56,63,70,77,84,91,98]), 0, 'Test 86');
test(specialPerm([19,38,57,76,95,114,133,152,171,190,209,228,247,266,285]), 0, 'Test 87');
test(specialPerm([3, 6, 12, 24, 48, 96, 192, 384, 768, 1536]), 3628800, 'Test 88');
test(specialPerm([2, 3, 5, 6, 10, 15, 30, 60, 120, 240, 480, 720, 1440, 2880]), 180479895, 'Test 89');
test(specialPerm([5,10,20,25,50]), 20, 'Test 90');
test(specialPerm([11,22,33,44,55,66,77,88,99,110,121,132,143,154]), 0, 'Test 91');
test(specialPerm([2, 6, 18, 54, 162, 486, 1458, 4374, 13122, 39366, 118098, 354294, 1062882, 3188646]), 178290591, 'Test 92');
test(specialPerm([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192]), 178290591, 'Test 93');
test(specialPerm([13,26,39,52,65,78,91,104,117,130,143,156]), 0, 'Test 94');
test(specialPerm([6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84]), 0, 'Test 95');
test(specialPerm([7,14,21,28,35,42,49,56,63,70,77,84,91,98,105,112]), 0, 'Test 96');
test(specialPerm([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45]), 0, 'Test 97');
test(specialPerm([1,3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51]), 0, 'Test 98');
test(specialPerm([29,58,87,116,145,174,203,232,261,290,319,348,377,406]), 0, 'Test 99');
test(specialPerm([11,22,33,44,55,66,77,88,99,110,121,132,143,154,165,176]), 0, 'Test 100');

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
