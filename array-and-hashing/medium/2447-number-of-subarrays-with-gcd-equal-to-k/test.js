// Test: 2447. Number Of Subarrays With Gcd Equal To K
// 124 test cases from LeetCodeDataset
// Run: node test.js

const { subarrayGCD } = require("./solution");

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

console.log("\n2447. Number Of Subarrays With Gcd Equal To K\n");

test(subarrayGCD([10,20,30,40,50], 10), 11, 'Test 1');
test(subarrayGCD([7,14,21,28,35], 7), 11, 'Test 2');
test(subarrayGCD([5,10,15,20,25], 5), 11, 'Test 3');
test(subarrayGCD([9,3,1,2,6,3], 3), 4, 'Test 4');
test(subarrayGCD([2,4,6,8,10], 2), 11, 'Test 5');
test(subarrayGCD([3,9,27,81,243], 3), 5, 'Test 6');
test(subarrayGCD([11,22,33,44,55], 11), 11, 'Test 7');
test(subarrayGCD([1,2,3,4,5], 1), 11, 'Test 8');
test(subarrayGCD([4], 7), 0, 'Test 9');
test(subarrayGCD([3,6,9,12,15], 3), 11, 'Test 10');
test(subarrayGCD([5, 10, 15, 20, 25, 30, 35, 40], 5), 29, 'Test 11');
test(subarrayGCD([101, 202, 303, 404, 505, 606, 707, 808, 909], 101), 37, 'Test 12');
test(subarrayGCD([101, 202, 303, 404, 505, 606, 707, 808, 909, 1010], 101), 46, 'Test 13');
test(subarrayGCD([5, 10, 15, 20, 25, 30, 35, 40, 45], 5), 37, 'Test 14');
test(subarrayGCD([12,15,18,21,24,27,30,33,36,39], 3), 45, 'Test 15');
test(subarrayGCD([8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160], 8), 191, 'Test 16');
test(subarrayGCD([8, 16, 24, 32, 40, 48, 56, 64, 72], 8), 37, 'Test 17');
test(subarrayGCD([13,26,39,52,65,78,91,104,117,130], 13), 46, 'Test 18');
test(subarrayGCD([15, 45, 75, 105, 135, 165, 195, 225], 15), 29, 'Test 19');
test(subarrayGCD([31, 62, 93, 124, 155, 186, 217, 248, 279, 310, 341, 372, 403, 434, 465, 496, 527, 558, 589, 620], 31), 191, 'Test 20');
test(subarrayGCD([15, 30, 45, 60, 75, 90], 15), 16, 'Test 21');
test(subarrayGCD([13, 26, 39, 52, 65, 78, 91, 104, 117, 130], 13), 46, 'Test 22');
test(subarrayGCD([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), 5151, 'Test 23');
test(subarrayGCD([111, 222, 333, 444, 555, 666, 777, 888, 999, 1110, 1221, 1332, 1443, 1554, 1665, 1776, 1887, 1998, 2109, 2220], 111), 191, 'Test 24');
test(subarrayGCD([60, 120, 180, 240, 300], 60), 11, 'Test 25');
test(subarrayGCD([256,512,1024,2048,4096,8192,16384,32768,65536,131072], 256), 10, 'Test 26');
test(subarrayGCD([5, 15, 25, 35, 45, 55], 5), 16, 'Test 27');
test(subarrayGCD([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50], 2), 301, 'Test 28');
test(subarrayGCD([54,108,162,216,270,324,378,432,486,540,594,648,702,756,810,864,918,972,1026,1080], 54), 191, 'Test 29');
test(subarrayGCD([100,100,100,100,100,100,100,100,100,100], 100), 55, 'Test 30');
test(subarrayGCD([3,5,7,11,13,17,19,23,29,31], 1), 45, 'Test 31');
test(subarrayGCD([17, 34, 51, 68, 85, 102, 119, 136, 153], 17), 37, 'Test 32');
test(subarrayGCD([101, 202, 303, 404, 505, 606], 101), 16, 'Test 33');
test(subarrayGCD([44, 88, 132, 176, 220, 264, 308, 352, 396, 440, 484, 528, 572, 616, 660, 704, 748, 792, 836, 880, 924, 968, 1012, 1056, 1100], 44), 301, 'Test 34');
test(subarrayGCD([13, 26, 39, 52, 65, 78, 91, 104], 13), 29, 'Test 35');
test(subarrayGCD([100,200,300,400,500,600,700,800,900,1000], 100), 46, 'Test 36');
test(subarrayGCD([8,16,32,64,128,256,512,1024,2048,4096], 8), 10, 'Test 37');
test(subarrayGCD([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60], 3), 191, 'Test 38');
test(subarrayGCD([7, 14, 21, 28, 35, 42, 49], 7), 22, 'Test 39');
test(subarrayGCD([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 46, 'Test 40');
test(subarrayGCD([1000000000, 2000000000, 3000000000, 4000000000], 1000000000), 7, 'Test 41');
test(subarrayGCD([60,120,180,240,300], 60), 11, 'Test 42');
test(subarrayGCD([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97], 1), 300, 'Test 43');
test(subarrayGCD([7,14,21,28,35,42,49,56,63,70], 7), 46, 'Test 44');
test(subarrayGCD([21,42,63,84,105,126,147,168,189,210,231,252,273,294,315,336,357,378,399,420], 21), 191, 'Test 45');
test(subarrayGCD([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 1), 191, 'Test 46');
test(subarrayGCD([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1), 10, 'Test 47');
test(subarrayGCD([8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768], 8), 13, 'Test 48');
test(subarrayGCD([12, 24, 36, 48, 60, 72, 84, 96, 108], 12), 37, 'Test 49');
test(subarrayGCD([15, 25, 35, 45, 55, 65], 5), 15, 'Test 50');
test(subarrayGCD([5, 15, 25, 35, 45, 55, 65, 75], 5), 29, 'Test 51');
test(subarrayGCD([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 2), 46, 'Test 52');
test(subarrayGCD([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45], 3), 106, 'Test 53');
test(subarrayGCD([987,654,321,987,654,321,987,654,321], 3), 36, 'Test 54');
test(subarrayGCD([11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121], 11), 56, 'Test 55');
test(subarrayGCD([17, 34, 51, 68, 85, 102, 119, 136, 153, 170], 17), 46, 'Test 56');
test(subarrayGCD([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30], 2), 106, 'Test 57');
test(subarrayGCD([81,54,27,9,3,1], 3), 5, 'Test 58');
test(subarrayGCD([36,72,108,144,180,216,252,288,324,360], 36), 46, 'Test 59');
test(subarrayGCD([60, 120, 180, 240, 300, 360, 420, 480, 540], 60), 37, 'Test 60');
test(subarrayGCD([15, 30, 45, 60, 75, 90, 105, 120, 135, 150], 15), 46, 'Test 61');
test(subarrayGCD([72,96,120,144,168,192,216,240,264,288,312,336,360,384,408], 24), 105, 'Test 62');
test(subarrayGCD([15,25,35,45,55,65,75,85,95,105], 5), 45, 'Test 63');
test(subarrayGCD([45,90,135,180,225,270,315,360,405,450], 45), 46, 'Test 64');
test(subarrayGCD([7, 14, 28, 56, 112], 7), 5, 'Test 65');
test(subarrayGCD([77, 154, 231, 308, 385, 462, 539, 616, 693, 770, 847, 924, 1001, 1078, 1155, 1232, 1309, 1386, 1463, 1540], 77), 191, 'Test 66');
test(subarrayGCD([36, 72, 108, 144, 180, 216, 252, 288, 324, 360], 36), 46, 'Test 67');
test(subarrayGCD([5,10,15,20,25,30,35,40,45,50], 5), 46, 'Test 68');
test(subarrayGCD([21, 42, 63, 84, 105, 126, 147, 168, 189, 210], 21), 46, 'Test 69');
test(subarrayGCD([123456789,987654321,111222333,222333444,333444555], 9), 7, 'Test 70');
test(subarrayGCD([101,103,107,109,113,127,131,137,139,149], 1), 45, 'Test 71');
test(subarrayGCD([6, 12, 18, 24, 30], 6), 11, 'Test 72');
test(subarrayGCD([8, 12, 16, 20, 24, 28, 32], 4), 21, 'Test 73');
test(subarrayGCD([1000, 2000, 3000, 4000, 5000], 1000), 11, 'Test 74');
test(subarrayGCD([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 5), 191, 'Test 75');
test(subarrayGCD([48, 64, 80, 96, 112, 128, 144, 160, 176, 192], 16), 45, 'Test 76');
test(subarrayGCD([21,42,63,84,105,126,147,168,189,210], 21), 46, 'Test 77');
test(subarrayGCD([25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500], 25), 191, 'Test 78');
test(subarrayGCD([17,34,51,68,85,102,119,136,153,170], 17), 46, 'Test 79');
test(subarrayGCD([11, 22, 33, 44, 55, 66, 77, 88, 99, 110], 11), 46, 'Test 80');
test(subarrayGCD([9, 18, 27, 36, 45, 54, 63, 72, 81, 90], 9), 46, 'Test 81');
test(subarrayGCD([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000], 100), 191, 'Test 82');
test(subarrayGCD([42,84,126,168,210,252,294,336,378,420], 42), 46, 'Test 83');
test(subarrayGCD([8,16,32,64,128,256,512,1024], 8), 8, 'Test 84');
test(subarrayGCD([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100], 5), 191, 'Test 85');
test(subarrayGCD([72, 48, 12, 18, 6, 120], 6), 13, 'Test 86');
test(subarrayGCD([1000000,2000000,3000000,4000000,5000000], 1000000), 11, 'Test 87');
test(subarrayGCD([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 10), 191, 'Test 88');
test(subarrayGCD([7,14,28,56,112,224], 7), 6, 'Test 89');
test(subarrayGCD([7, 14, 28, 56, 112, 224, 448, 896, 1792, 3584, 7168, 14336], 7), 12, 'Test 90');
test(subarrayGCD([33,66,99,132,165,198,231,264,297,330,363,396,429,462,495], 33), 106, 'Test 91');
test(subarrayGCD([1000000000, 500000000, 250000000, 125000000, 62500000], 125000000), 4, 'Test 92');
test(subarrayGCD([8, 16, 32, 64, 128, 256, 512, 1024], 8), 8, 'Test 93');
test(subarrayGCD([12,15,21,33,48], 3), 10, 'Test 94');
test(subarrayGCD([99, 198, 297, 396, 495, 594, 693, 792], 99), 29, 'Test 95');
test(subarrayGCD([17, 34, 51, 68, 85, 102, 119, 136, 153, 170, 187, 204, 221, 238, 255, 272, 289, 306, 323, 340], 17), 191, 'Test 96');
test(subarrayGCD([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108, 117, 126, 135], 9), 106, 'Test 97');
test(subarrayGCD([13, 26, 39, 52, 65, 78, 91], 13), 22, 'Test 98');
test(subarrayGCD([7,14,21,28,35,42,49,56,63,70,77,84,91,98,105], 7), 106, 'Test 99');
test(subarrayGCD([42, 84, 126, 168, 210, 252, 294, 336, 378, 420, 462], 42), 56, 'Test 100');
test(subarrayGCD([9,18,27,36,45,54,63,72,81,90,99,108], 9), 67, 'Test 101');
test(subarrayGCD([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 2), 1, 'Test 102');
test(subarrayGCD([6, 12, 18, 24, 30, 36, 42, 48], 6), 29, 'Test 103');
test(subarrayGCD([20, 40, 60, 80, 100, 120, 140], 20), 22, 'Test 104');
test(subarrayGCD([18, 27, 36, 45, 54, 63, 72, 81, 90], 9), 36, 'Test 105');
test(subarrayGCD([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 3), 46, 'Test 106');
test(subarrayGCD([100,200,400,800,1600,3200], 100), 6, 'Test 107');
test(subarrayGCD([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384], 1), 15, 'Test 108');
test(subarrayGCD([15,30,45,60,75,90,105,120,135,150], 15), 46, 'Test 109');
test(subarrayGCD([60,120,180,240,300,360,420,480,540,600], 60), 46, 'Test 110');
test(subarrayGCD([101, 202, 303, 404, 505, 606, 707], 101), 22, 'Test 111');
test(subarrayGCD([48,64,80,96,112,128,144,160,176,192], 16), 45, 'Test 112');
test(subarrayGCD([21, 42, 63, 84, 105, 126, 147, 168, 189, 210, 231, 252, 273, 294, 315, 336, 357, 378, 399, 420], 21), 191, 'Test 113');
test(subarrayGCD([21, 14, 42, 84, 28, 56, 112], 14), 9, 'Test 114');
test(subarrayGCD([3,6,9,12,15,18,21,24,27,30], 3), 46, 'Test 115');
test(subarrayGCD([81, 27, 9, 3, 1], 1), 5, 'Test 116');
test(subarrayGCD([2,4,6,8,10,12,14,16,18,20], 2), 46, 'Test 117');
test(subarrayGCD([100, 150, 200, 250, 300, 350], 50), 15, 'Test 118');
test(subarrayGCD([6,12,18,24,30,36,42,48,54,60], 6), 46, 'Test 119');
test(subarrayGCD([17,34,51,68,85,102,119,136,153,170,187,204,221,238,255], 17), 106, 'Test 120');
test(subarrayGCD([1000000000, 500000000, 250000000, 125000000, 62500000], 62500000), 5, 'Test 121');
test(subarrayGCD([123, 246, 369, 492, 615, 738, 861, 984, 1107, 1230, 1353, 1476, 1599, 1722, 1845, 1968, 2091, 2214, 2337, 2460], 123), 191, 'Test 122');
test(subarrayGCD([999999937,999999937,999999937,999999937,999999937,999999937,999999937,999999937,999999937,999999937], 999999937), 55, 'Test 123');
test(subarrayGCD([81, 27, 9, 3, 1, 243, 729], 3), 4, 'Test 124');

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
