// Test: 2980. Check If Bitwise Or Has Trailing Zeros
// 119 test cases from LeetCodeDataset
// Run: node test.js

const { hasTrailingZeros } = require("./solution");

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

console.log("\n2980. Check If Bitwise Or Has Trailing Zeros\n");

test(hasTrailingZeros([1,1,1,1]), false, 'Test 1');
test(hasTrailingZeros([1,3,5,7,9]), false, 'Test 2');
test(hasTrailingZeros([5,7,9,11]), false, 'Test 3');
test(hasTrailingZeros([7,11,13,14]), false, 'Test 4');
test(hasTrailingZeros([3,6,9,12,15]), true, 'Test 5');
test(hasTrailingZeros([11,13,15,17]), false, 'Test 6');
test(hasTrailingZeros([1,2,3,4,5]), true, 'Test 7');
test(hasTrailingZeros([2,4,8,16]), true, 'Test 8');
test(hasTrailingZeros([6,12,18,24,30]), true, 'Test 9');
test(hasTrailingZeros([5,7,11,13]), false, 'Test 10');
test(hasTrailingZeros([9,18,27,36]), true, 'Test 11');
test(hasTrailingZeros([2,2,2,2]), true, 'Test 12');
test(hasTrailingZeros([8,16,32]), true, 'Test 13');
test(hasTrailingZeros([6,12,18,24]), true, 'Test 14');
test(hasTrailingZeros([32,64,128,256]), true, 'Test 15');
test(hasTrailingZeros([3,5]), false, 'Test 16');
test(hasTrailingZeros([5,10,15,20]), true, 'Test 17');
test(hasTrailingZeros([1,2,4,8,16,32]), true, 'Test 18');
test(hasTrailingZeros([1,2]), false, 'Test 19');
test(hasTrailingZeros([5,7,9,11,13]), false, 'Test 20');
test(hasTrailingZeros([7,14,21,28]), true, 'Test 21');
test(hasTrailingZeros([10,20,30,40]), true, 'Test 22');
test(hasTrailingZeros([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]), false, 'Test 23');
test(hasTrailingZeros([10, 18, 22, 34, 50, 62]), true, 'Test 24');
test(hasTrailingZeros([1, 2, 3, 4, 5, 6, 7, 8]), true, 'Test 25');
test(hasTrailingZeros([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]), true, 'Test 26');
test(hasTrailingZeros([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), true, 'Test 27');
test(hasTrailingZeros([32, 64, 128, 256]), true, 'Test 28');
test(hasTrailingZeros([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), true, 'Test 29');
test(hasTrailingZeros([7, 15, 23, 31, 39, 47, 55, 63, 71, 79]), false, 'Test 30');
test(hasTrailingZeros([31, 63, 127, 255, 511, 1023, 2047]), false, 'Test 31');
test(hasTrailingZeros([1, 5, 9, 13, 17, 21, 25, 29, 33, 37]), false, 'Test 32');
test(hasTrailingZeros([2, 3, 4, 6, 8, 10]), true, 'Test 33');
test(hasTrailingZeros([14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119, 126, 133]), true, 'Test 34');
test(hasTrailingZeros([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), true, 'Test 35');
test(hasTrailingZeros([32, 64, 128, 256, 512, 1024]), true, 'Test 36');
test(hasTrailingZeros([1, 2, 4, 8, 16, 32, 64]), true, 'Test 37');
test(hasTrailingZeros([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48]), true, 'Test 38');
test(hasTrailingZeros([8, 16, 24, 32, 40, 48, 56, 64, 72, 80]), true, 'Test 39');
test(hasTrailingZeros([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]), true, 'Test 40');
test(hasTrailingZeros([10, 20, 40, 80, 160, 320]), true, 'Test 41');
test(hasTrailingZeros([101, 102, 104, 108, 112]), true, 'Test 42');
test(hasTrailingZeros([2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), true, 'Test 43');
test(hasTrailingZeros([15, 30, 45, 60, 75, 90, 105, 120, 135, 150]), true, 'Test 44');
test(hasTrailingZeros([3, 6, 9, 12, 15]), true, 'Test 45');
test(hasTrailingZeros([3, 7, 11, 15, 19, 23, 27, 31, 35, 39]), false, 'Test 46');
test(hasTrailingZeros([16, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240]), true, 'Test 47');
test(hasTrailingZeros([15, 23, 31, 39, 47, 55, 63, 71, 79, 87, 95, 103, 111, 119, 127]), false, 'Test 48');
test(hasTrailingZeros([7, 14, 21, 28, 35]), true, 'Test 49');
test(hasTrailingZeros([8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]), true, 'Test 50');
test(hasTrailingZeros([2, 4, 8, 16, 32, 64, 128, 256, 512]), true, 'Test 51');
test(hasTrailingZeros([2, 3, 5, 6, 7, 8, 9, 10]), true, 'Test 52');
test(hasTrailingZeros([30, 60, 90, 120, 150, 180, 210, 240, 270, 300]), true, 'Test 53');
test(hasTrailingZeros([6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72]), true, 'Test 54');
test(hasTrailingZeros([11, 14, 19, 22, 27, 30, 35, 38, 43]), true, 'Test 55');
test(hasTrailingZeros([15, 25, 35, 45, 55, 65, 75, 85, 95, 105]), false, 'Test 56');
test(hasTrailingZeros([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]), true, 'Test 57');
test(hasTrailingZeros([1, 2, 4, 8, 16, 32, 64, 128]), true, 'Test 58');
test(hasTrailingZeros([25, 50, 75, 100, 125, 150, 175, 200, 225, 250]), true, 'Test 59');
test(hasTrailingZeros([100, 99, 98, 97, 96, 95, 94, 93, 92, 91]), true, 'Test 60');
test(hasTrailingZeros([8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120]), true, 'Test 61');
test(hasTrailingZeros([101, 102, 103, 104, 105, 106, 107, 108, 109, 110]), true, 'Test 62');
test(hasTrailingZeros([10, 14, 18, 22, 26]), true, 'Test 63');
test(hasTrailingZeros([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]), true, 'Test 64');
test(hasTrailingZeros([17, 33, 65, 129, 257]), false, 'Test 65');
test(hasTrailingZeros([4, 8, 16, 32, 64, 128, 256, 512, 1024]), true, 'Test 66');
test(hasTrailingZeros([10, 12, 14, 16, 18, 20, 22]), true, 'Test 67');
test(hasTrailingZeros([31, 62, 124, 248, 496, 992, 1984, 3968, 7936, 15872, 31744, 63488, 126976, 253952, 507904]), true, 'Test 68');
test(hasTrailingZeros([8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536]), true, 'Test 69');
test(hasTrailingZeros([101, 102, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 148, 152, 156, 160, 164, 168, 172, 176, 180, 184, 188, 192]), true, 'Test 70');
test(hasTrailingZeros([50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78]), true, 'Test 71');
test(hasTrailingZeros([17, 34, 51, 68, 85]), true, 'Test 72');
test(hasTrailingZeros([63, 62, 61, 60, 59, 58, 57, 56, 55, 54]), true, 'Test 73');
test(hasTrailingZeros([17, 19, 21, 23, 25, 27, 29, 31]), false, 'Test 74');
test(hasTrailingZeros([65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]), true, 'Test 75');
test(hasTrailingZeros([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), false, 'Test 76');
test(hasTrailingZeros([3, 6, 9, 12, 15, 18, 21]), true, 'Test 77');
test(hasTrailingZeros([3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049]), false, 'Test 78');
test(hasTrailingZeros([1, 1, 2, 2, 4, 4, 8, 8, 16, 16]), true, 'Test 79');
test(hasTrailingZeros([2, 3, 6, 12, 24, 48]), true, 'Test 80');
test(hasTrailingZeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), true, 'Test 81');
test(hasTrailingZeros([25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), true, 'Test 82');
test(hasTrailingZeros([1, 3, 5, 7, 9, 11, 13, 15]), false, 'Test 83');
test(hasTrailingZeros([10, 20, 30, 40, 50]), true, 'Test 84');
test(hasTrailingZeros([8, 16, 32, 64, 128, 256, 512]), true, 'Test 85');
test(hasTrailingZeros([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), true, 'Test 86');
test(hasTrailingZeros([4, 12, 20, 28, 36, 44, 52]), true, 'Test 87');
test(hasTrailingZeros([129, 131, 133, 135, 137, 139, 141, 143, 145, 147, 149, 151, 153, 155, 157]), false, 'Test 88');
test(hasTrailingZeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), true, 'Test 89');
test(hasTrailingZeros([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85]), true, 'Test 90');
test(hasTrailingZeros([1, 4, 9, 16, 25, 36, 49, 64, 81]), true, 'Test 91');
test(hasTrailingZeros([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), false, 'Test 92');
test(hasTrailingZeros([33, 35, 37, 39, 41, 43, 45, 47, 49, 51]), false, 'Test 93');
test(hasTrailingZeros([6, 12, 18, 24, 30, 36, 42]), true, 'Test 94');
test(hasTrailingZeros([1, 3, 5, 7, 8, 9, 11]), false, 'Test 95');
test(hasTrailingZeros([2, 6, 10, 14, 18, 22, 26, 30, 34, 38]), true, 'Test 96');
test(hasTrailingZeros([101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128]), true, 'Test 97');
test(hasTrailingZeros([99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109]), true, 'Test 98');
test(hasTrailingZeros([6, 12, 18, 24, 30, 36, 42, 48, 54, 60]), true, 'Test 99');
test(hasTrailingZeros([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]), true, 'Test 100');
test(hasTrailingZeros([32, 64, 128, 256, 512]), true, 'Test 101');
test(hasTrailingZeros([3, 6, 12, 24, 48, 96, 192, 384, 768, 1536, 3072, 6144, 12288, 24576, 49152]), true, 'Test 102');
test(hasTrailingZeros([3, 5, 7, 9, 11, 13, 15, 17, 19, 21]), false, 'Test 103');
test(hasTrailingZeros([10, 12, 14, 16, 18, 20]), true, 'Test 104');
test(hasTrailingZeros([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), true, 'Test 105');
test(hasTrailingZeros([1, 2, 3, 5, 6, 7, 10, 11, 13, 14, 15]), true, 'Test 106');
test(hasTrailingZeros([101, 102, 104, 105, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126]), true, 'Test 107');
test(hasTrailingZeros([25, 30, 40, 50, 60, 70]), true, 'Test 108');
test(hasTrailingZeros([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), true, 'Test 109');
test(hasTrailingZeros([16, 32, 64, 128, 256]), true, 'Test 110');
test(hasTrailingZeros([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]), false, 'Test 111');
test(hasTrailingZeros([25, 26, 27, 28, 29, 30, 31, 32, 33, 34]), true, 'Test 112');
test(hasTrailingZeros([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61]), false, 'Test 113');
test(hasTrailingZeros([101, 104, 109, 112, 117, 120, 125, 128]), true, 'Test 114');
test(hasTrailingZeros([30, 42, 54, 66, 78, 90]), true, 'Test 115');
test(hasTrailingZeros([10, 12, 14, 16, 18, 20, 22, 24]), true, 'Test 116');
test(hasTrailingZeros([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]), true, 'Test 117');
test(hasTrailingZeros([51, 53, 57, 61, 65, 69, 73, 77]), false, 'Test 118');
test(hasTrailingZeros([65, 130, 195, 260, 325, 390, 455, 520, 585, 650]), true, 'Test 119');

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
