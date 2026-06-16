// Test: 1998. Gcd Sort Of An Array
// 169 test cases from LeetCodeDataset
// Run: node test.js

const { gcdSort } = require("./solution");

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

console.log("\n1998. Gcd Sort Of An Array\n");

test(gcdSort([12,15,18,20,25]), true, 'Test 1');
test(gcdSort([7,21,3]), true, 'Test 2');
test(gcdSort([8,4,12,6]), true, 'Test 3');
test(gcdSort([2,3,5,7,11]), true, 'Test 4');
test(gcdSort([2,4,6,8,10]), true, 'Test 5');
test(gcdSort([1,2,3,4]), true, 'Test 6');
test(gcdSort([18,9,27,3,6]), true, 'Test 7');
test(gcdSort([3,9,6,18,27]), true, 'Test 8');
test(gcdSort([1,2,3,4,5]), true, 'Test 9');
test(gcdSort([37,49,111,143,169]), true, 'Test 10');
test(gcdSort([100,200,400,800,1600]), true, 'Test 11');
test(gcdSort([22,44,11,66,33]), true, 'Test 12');
test(gcdSort([100,200,300,400,500]), true, 'Test 13');
test(gcdSort([83,97,101,103,107]), true, 'Test 14');
test(gcdSort([100000,99998,99999,99997,99996]), false, 'Test 15');
test(gcdSort([10,5,9,3,15]), true, 'Test 16');
test(gcdSort([105,70,30,210,42]), true, 'Test 17');
test(gcdSort([30,42,70,105,35]), true, 'Test 18');
test(gcdSort([5,2,6,2]), false, 'Test 19');
test(gcdSort([56, 72, 88, 104, 120, 136, 152]), true, 'Test 20');
test(gcdSort([121, 132, 143, 154, 165, 176, 187, 198, 209]), true, 'Test 21');
test(gcdSort([48, 64, 80, 96, 112]), true, 'Test 22');
test(gcdSort([17, 34, 51, 68, 85, 102, 119]), true, 'Test 23');
test(gcdSort([210, 315, 420, 525, 630, 735]), true, 'Test 24');
test(gcdSort([105, 45, 63, 21, 315]), true, 'Test 25');
test(gcdSort([100, 50, 25, 125, 200, 150]), true, 'Test 26');
test(gcdSort([91, 182, 273, 364, 455]), true, 'Test 27');
test(gcdSort([121, 132, 143, 154, 165, 176]), true, 'Test 28');
test(gcdSort([16, 32, 48, 64, 80, 96, 112, 128, 144]), true, 'Test 29');
test(gcdSort([70, 35, 28, 56, 14, 18]), true, 'Test 30');
test(gcdSort([14, 21, 28, 35, 42, 49, 56, 63, 70]), true, 'Test 31');
test(gcdSort([32, 48, 64, 80, 96, 112]), true, 'Test 32');
test(gcdSort([31, 62, 93, 124, 155, 186, 217, 248, 279, 310]), true, 'Test 33');
test(gcdSort([30, 25, 20, 15, 10, 5]), true, 'Test 34');
test(gcdSort([30, 45, 60, 75, 90, 105]), true, 'Test 35');
test(gcdSort([44, 55, 66, 77, 88, 99, 110, 121]), true, 'Test 36');
test(gcdSort([15, 20, 25, 30, 35]), true, 'Test 37');
test(gcdSort([33, 66, 99, 132, 165]), true, 'Test 38');
test(gcdSort([49, 14, 7, 98, 28]), true, 'Test 39');
test(gcdSort([6, 8, 10, 12, 14, 16, 18, 20]), true, 'Test 40');
test(gcdSort([21, 42, 63, 84, 105, 126, 147, 168, 189]), true, 'Test 41');
test(gcdSort([49, 42, 28, 35, 70]), true, 'Test 42');
test(gcdSort([123, 246, 369, 492, 615, 738, 861, 984]), true, 'Test 43');
test(gcdSort([84, 126, 168, 210, 252, 294, 336, 378, 420]), true, 'Test 44');
test(gcdSort([84, 28, 42, 70, 56]), true, 'Test 45');
test(gcdSort([101, 202, 303, 404, 505, 606]), true, 'Test 46');
test(gcdSort([56, 14, 28, 7, 98, 49]), true, 'Test 47');
test(gcdSort([45, 30, 60, 90, 120, 150]), true, 'Test 48');
test(gcdSort([100, 50, 75, 25, 150]), true, 'Test 49');
test(gcdSort([15, 25, 35, 45, 55, 65]), true, 'Test 50');
test(gcdSort([23, 46, 69, 92, 115, 138, 161, 184]), true, 'Test 51');
test(gcdSort([121, 221, 143, 169, 13]), true, 'Test 52');
test(gcdSort([100, 200, 300, 400, 500]), true, 'Test 53');
test(gcdSort([462, 882, 924, 1092, 1260]), true, 'Test 54');
test(gcdSort([360, 720, 1080, 1440, 1800, 2160]), true, 'Test 55');
test(gcdSort([1000, 500, 250, 125, 625]), true, 'Test 56');
test(gcdSort([48, 120, 180, 240, 300]), true, 'Test 57');
test(gcdSort([16, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240]), true, 'Test 58');
test(gcdSort([210, 70, 35, 14, 105]), true, 'Test 59');
test(gcdSort([1024, 2048, 512, 256, 128]), true, 'Test 60');
test(gcdSort([56, 112, 168, 224, 280]), true, 'Test 61');
test(gcdSort([100, 25, 50, 20, 40]), true, 'Test 62');
test(gcdSort([24, 36, 48, 12, 60]), true, 'Test 63');
test(gcdSort([99, 33, 66, 22, 11, 132]), true, 'Test 64');
test(gcdSort([21, 42, 63, 84, 105]), true, 'Test 65');
test(gcdSort([13, 26, 39, 52, 65, 78]), true, 'Test 66');
test(gcdSort([30, 45, 60, 75, 90]), true, 'Test 67');
test(gcdSort([77, 154, 231, 308, 385]), true, 'Test 68');
test(gcdSort([91, 130, 169, 182, 273, 338]), true, 'Test 69');
test(gcdSort([22, 15, 45, 33, 10, 55]), true, 'Test 70');
test(gcdSort([18, 27, 36, 45, 54, 63, 72, 81, 90]), true, 'Test 71');
test(gcdSort([111, 222, 333, 444, 555, 666, 777, 888, 999]), true, 'Test 72');
test(gcdSort([171, 342, 513, 684, 855]), true, 'Test 73');
test(gcdSort([33, 55, 66, 88, 110, 121, 132, 143]), true, 'Test 74');
test(gcdSort([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28]), true, 'Test 75');
test(gcdSort([45, 90, 135, 180, 225]), true, 'Test 76');
test(gcdSort([20, 40, 60, 80, 100, 120, 140, 160, 180]), true, 'Test 77');
test(gcdSort([100, 50, 25, 20, 125]), true, 'Test 78');
test(gcdSort([18, 24, 30, 36, 42]), true, 'Test 79');
test(gcdSort([1000, 250, 500, 200, 750, 125, 375, 625, 875, 1250]), true, 'Test 80');
test(gcdSort([102, 136, 170, 204, 238, 272, 306, 340, 374]), true, 'Test 81');
test(gcdSort([19, 38, 57, 76, 95, 114, 133, 152, 171, 190]), true, 'Test 82');
test(gcdSort([27, 54, 81, 108, 135, 162, 189, 216]), true, 'Test 83');
test(gcdSort([119, 238, 357, 476, 595]), true, 'Test 84');
test(gcdSort([81, 27, 54, 162, 324, 486]), true, 'Test 85');
test(gcdSort([84, 12, 14, 21, 63]), true, 'Test 86');
test(gcdSort([15, 30, 45, 60, 75, 90, 105]), true, 'Test 87');
test(gcdSort([18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108]), true, 'Test 88');
test(gcdSort([49, 63, 77, 91, 105, 119, 133, 147, 161, 175, 189, 203, 217]), true, 'Test 89');
test(gcdSort([72, 108, 144, 180, 216, 252, 288, 324, 360, 396]), true, 'Test 90');
test(gcdSort([225, 150, 100, 50, 25, 75]), true, 'Test 91');
test(gcdSort([121, 110, 99, 88, 77, 66, 55, 44, 33, 22, 11]), true, 'Test 92');
test(gcdSort([22, 44, 66, 88, 110, 132, 154, 176, 198]), true, 'Test 93');
test(gcdSort([1000, 500, 250, 125, 2000]), true, 'Test 94');
test(gcdSort([135, 90, 45, 60, 30]), true, 'Test 95');
test(gcdSort([9, 18, 27, 36, 45, 54]), true, 'Test 96');
test(gcdSort([17, 34, 51, 68, 85]), true, 'Test 97');
test(gcdSort([105, 15, 35, 21, 63]), true, 'Test 98');
test(gcdSort([81, 135, 207, 279, 351, 423]), true, 'Test 99');
test(gcdSort([36, 48, 60, 72, 84, 96]), true, 'Test 100');
test(gcdSort([180, 120, 90, 60, 45, 30, 20, 15, 10, 5]), true, 'Test 101');
test(gcdSort([28, 14, 42, 70, 98]), true, 'Test 102');
test(gcdSort([17, 19, 23, 29, 31, 37]), true, 'Test 103');
test(gcdSort([81, 27, 54, 108, 162]), true, 'Test 104');
test(gcdSort([121, 11, 22, 33, 44, 55]), true, 'Test 105');
test(gcdSort([165, 330, 495, 660, 825]), true, 'Test 106');
test(gcdSort([49, 98, 147, 196, 245]), true, 'Test 107');
test(gcdSort([121, 44, 88, 22, 176]), true, 'Test 108');
test(gcdSort([15, 25, 35, 45, 55, 65, 75, 85]), true, 'Test 109');
test(gcdSort([100, 101, 102, 103, 104, 105]), true, 'Test 110');
test(gcdSort([17, 19, 23, 29, 31]), true, 'Test 111');
test(gcdSort([315, 105, 35, 7, 14, 21, 42, 63, 84]), true, 'Test 112');
test(gcdSort([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), true, 'Test 113');
test(gcdSort([13, 26, 39, 52, 65]), true, 'Test 114');
test(gcdSort([15, 25, 35, 45, 55]), true, 'Test 115');
test(gcdSort([1001, 10010, 100100, 1001000, 10010000]), Error: list index out of range, 'Test 116');
test(gcdSort([7, 49, 343, 2401, 16807]), true, 'Test 117');
test(gcdSort([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), true, 'Test 118');
test(gcdSort([19, 38, 57, 76, 95, 114, 133, 152]), true, 'Test 119');
test(gcdSort([14, 21, 35, 49, 70]), true, 'Test 120');
test(gcdSort([33, 66, 99, 132, 165, 198]), true, 'Test 121');
test(gcdSort([18, 24, 30, 36, 42, 48]), true, 'Test 122');
test(gcdSort([22, 44, 66, 88, 110]), true, 'Test 123');
test(gcdSort([84, 56, 28, 14, 7, 49, 35]), true, 'Test 124');
test(gcdSort([48, 64, 80, 96, 112, 128]), true, 'Test 125');
test(gcdSort([1024, 2048, 4096, 8192, 16384, 32768]), true, 'Test 126');
test(gcdSort([56, 63, 70, 77, 84, 91]), true, 'Test 127');
test(gcdSort([99, 33, 66, 132, 264]), true, 'Test 128');
test(gcdSort([100000, 50000, 25000, 12500, 6250]), true, 'Test 129');
test(gcdSort([77, 91, 143, 1001, 1001, 143]), true, 'Test 130');
test(gcdSort([100, 200, 300, 400, 500, 600, 700]), true, 'Test 131');
test(gcdSort([77, 55, 99, 110, 132]), true, 'Test 132');
test(gcdSort([30, 45, 60, 15, 90]), true, 'Test 133');
test(gcdSort([72, 24, 16, 8, 40]), true, 'Test 134');
test(gcdSort([42, 21, 7, 14, 28]), true, 'Test 135');
test(gcdSort([77, 143, 169, 187, 209, 221, 247, 299, 323, 341]), true, 'Test 136');
test(gcdSort([15, 20, 25, 30, 35, 40, 45, 50]), true, 'Test 137');
test(gcdSort([121, 143, 169, 187, 209]), true, 'Test 138');
test(gcdSort([14, 21, 28, 35, 42, 49, 56, 63]), true, 'Test 139');
test(gcdSort([14, 21, 28, 35, 42, 49]), true, 'Test 140');
test(gcdSort([49, 147, 245, 343, 441, 539]), true, 'Test 141');
test(gcdSort([22, 15, 10, 18, 30]), true, 'Test 142');
test(gcdSort([64, 32, 16, 8, 4, 2, 1]), false, 'Test 143');
test(gcdSort([101, 103, 107, 109, 113, 127, 131, 137, 139, 149]), true, 'Test 144');
test(gcdSort([9, 18, 27, 36, 45, 54, 63, 72, 81]), true, 'Test 145');
test(gcdSort([16, 32, 64, 128, 256, 512, 1024]), true, 'Test 146');
test(gcdSort([102, 204, 306, 408, 510]), true, 'Test 147');
test(gcdSort([1000, 2000, 3000, 4000, 5000]), true, 'Test 148');
test(gcdSort([60, 120, 180, 240, 300, 360]), true, 'Test 149');
test(gcdSort([42, 28, 70, 14, 35]), true, 'Test 150');
test(gcdSort([22, 33, 44, 55, 66]), true, 'Test 151');
test(gcdSort([77, 49, 35, 21, 14, 7]), true, 'Test 152');
test(gcdSort([23, 46, 69, 92, 115]), true, 'Test 153');
test(gcdSort([16, 8, 4, 2, 1]), false, 'Test 154');
test(gcdSort([101, 202, 303, 404, 505]), true, 'Test 155');
test(gcdSort([102, 68, 34, 17, 51, 85]), true, 'Test 156');
test(gcdSort([13, 26, 39, 52, 65, 78, 91, 104, 117]), true, 'Test 157');
test(gcdSort([100, 105, 140, 210, 70]), true, 'Test 158');
test(gcdSort([11, 22, 33, 44, 55, 66]), true, 'Test 159');
test(gcdSort([17, 34, 51, 68, 85, 102, 119, 136, 153]), true, 'Test 160');
test(gcdSort([256, 512, 1024, 2048, 4096, 8192, 16384]), true, 'Test 161');
test(gcdSort([1000, 500, 250, 125, 2000, 10000, 2500]), true, 'Test 162');
test(gcdSort([30, 45, 60, 75, 90, 105, 120]), true, 'Test 163');
test(gcdSort([12, 18, 24, 30, 36, 42]), true, 'Test 164');
test(gcdSort([25, 45, 65, 85, 105]), true, 'Test 165');
test(gcdSort([100, 200, 150, 300, 250]), true, 'Test 166');
test(gcdSort([14, 28, 42, 56, 70]), true, 'Test 167');
test(gcdSort([81, 135, 225, 315, 405, 525, 675]), true, 'Test 168');
test(gcdSort([121, 132, 220, 110, 55]), true, 'Test 169');

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
