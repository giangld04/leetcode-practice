// Test: 2154. Keep Multiplying Found Values By Two
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { findFinalValue } = require("./solution");

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

console.log("\n2154. Keep Multiplying Found Values By Two\n");

test(findFinalValue([10,20,30,40,50], 5), 5, 'Test 1');
test(findFinalValue([1000,500,250,125,625], 5), 5, 'Test 2');
test(findFinalValue([3,6,9,12,15], 3), 24, 'Test 3');
test(findFinalValue([1,2,4,8], 1), 16, 'Test 4');
test(findFinalValue([8,16,32,64,128], 8), 256, 'Test 5');
test(findFinalValue([2,7,9], 4), 4, 'Test 6');
test(findFinalValue([1000,1000,1000,1000,1000], 1000), 2000, 'Test 7');
test(findFinalValue([1,3,5,7,9], 2), 2, 'Test 8');
test(findFinalValue([10,20,30,40,50], 10), 80, 'Test 9');
test(findFinalValue([2,2,2,2,2], 2), 4, 'Test 10');
test(findFinalValue([8,16,32,64,128,256,512], 4), 4, 'Test 11');
test(findFinalValue([1000,500,250,125,62,31], 1), 1, 'Test 12');
test(findFinalValue([1,1,1,1,1], 1), 2, 'Test 13');
test(findFinalValue([1,2,4,8,16], 1), 32, 'Test 14');
test(findFinalValue([4,8,16,32,64], 2), 2, 'Test 15');
test(findFinalValue([5,3,6,1,12], 3), 24, 'Test 16');
test(findFinalValue([1000,500,250,125], 125), 2000, 'Test 17');
test(findFinalValue([10,20,40,80,160], 10), 320, 'Test 18');
test(findFinalValue([7,14,28,56,112], 7), 224, 'Test 19');
test(findFinalValue([1,3,5,7,9], 1), 2, 'Test 20');
test(findFinalValue([7,14,28,56,112,224,448], 7), 896, 'Test 21');
test(findFinalValue([3,6,9,12,15,18,21], 3), 24, 'Test 22');
test(findFinalValue([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 10), 160, 'Test 23');
test(findFinalValue([13,26,52,104,208,416,832,1664,3328,6656], 13), 13312, 'Test 24');
test(findFinalValue([9,18,36,72,144,288,576,1152,2304], 9), 4608, 'Test 25');
test(findFinalValue([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), 2, 'Test 26');
test(findFinalValue([2,3,5,6,7,10,11,13,14,17,19,21,22,23,26,29,31], 2), 4, 'Test 27');
test(findFinalValue([9,18,27,36,45,54,63,72,81,90,99,108,117,126,135,144,153,162,171,180], 9), 288, 'Test 28');
test(findFinalValue([11,22,44,88,176,352,704,1408,2816,5632], 11), 11264, 'Test 29');
test(findFinalValue([4,8,16,32,64,128,256,512,1024], 4), 2048, 'Test 30');
test(findFinalValue([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 2), 32, 'Test 31');
test(findFinalValue([1,3,5,7,9,11,13,15,17,19], 2), 2, 'Test 32');
test(findFinalValue([4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80], 4), 128, 'Test 33');
test(findFinalValue([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59], 1), 2, 'Test 34');
test(findFinalValue([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 1), 2, 'Test 35');
test(findFinalValue([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 1), 2048, 'Test 36');
test(findFinalValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 2, 'Test 37');
test(findFinalValue([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71], 2), 4, 'Test 38');
test(findFinalValue([4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768], 4), 65536, 'Test 39');
test(findFinalValue([15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,255,270,285,300], 15), 480, 'Test 40');
test(findFinalValue([10,20,30,40,50,60,70,80,90,100], 10), 160, 'Test 41');
test(findFinalValue([1,2,4,8,16,32,64,128,256,512], 1), 1024, 'Test 42');
test(findFinalValue([4,9,16,25,36,49,64,81,100,121,144], 4), 8, 'Test 43');
test(findFinalValue([6,12,24,48,96,192,384,768,1536,3072,6144,12288,24576,49152], 6), 98304, 'Test 44');
test(findFinalValue([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 1), 32, 'Test 45');
test(findFinalValue([13,26,52,104,208,416,832,1664,3328], 13), 6656, 'Test 46');
test(findFinalValue([500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000], 500), 8000, 'Test 47');
test(findFinalValue([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300], 10), 320, 'Test 48');
test(findFinalValue([3,9,27,81,243,729], 3), 6, 'Test 49');
test(findFinalValue([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49], 1), 2, 'Test 50');
test(findFinalValue([29,58,116,232,464,928,1856], 29), 3712, 'Test 51');
test(findFinalValue([13,26,39,52,65,78,91,104,117,130], 13), 208, 'Test 52');
test(findFinalValue([7,14,21,28,35,42,49,56,63,70], 7), 112, 'Test 53');
test(findFinalValue([5,10,20,40,80,160,320,640,1280], 5), 2560, 'Test 54');
test(findFinalValue([3,9,27,81,243,729,2187,6561], 3), 6, 'Test 55');
test(findFinalValue([11,22,44,88,176,352,704,1408,2816,5632,11264,22528,45056,90112], 11), 180224, 'Test 56');
test(findFinalValue([10, 20, 40, 80, 160, 320, 640, 1280, 2560], 10), 5120, 'Test 57');
test(findFinalValue([11,22,33,44,55,66,77,88,99,110,121,132,143,154,165,176,187,198,209,220], 11), 352, 'Test 58');
test(findFinalValue([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 10), 320, 'Test 59');
test(findFinalValue([500,1000,1500,2000,2500,3000,3500,4000,4500,5000], 500), 8000, 'Test 60');
test(findFinalValue([5,10,15,20,25,30,35,40,45,50], 5), 80, 'Test 61');
test(findFinalValue([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105], 7), 112, 'Test 62');
test(findFinalValue([13,26,52,104,208,416,832,1664,3328,6656,13312], 13), 26624, 'Test 63');
test(findFinalValue([250, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 128000], 250), 256000, 'Test 64');
test(findFinalValue([15,30,60,120,240,480,960,1920,3840], 15), 7680, 'Test 65');
test(findFinalValue([19,38,76,152,304,608,1216,2432,4864,9728], 19), 19456, 'Test 66');
test(findFinalValue([2,4,6,8,10,12,14,16,18,20], 1), 1, 'Test 67');
test(findFinalValue([1,2,3,4,5,6,7,8,9,10], 1), 16, 'Test 68');
test(findFinalValue([6,12,18,24,30,36,42,48,54,60,66], 6), 96, 'Test 69');
test(findFinalValue([7,14,28,56,112,224,448,896,1792], 7), 3584, 'Test 70');
test(findFinalValue([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99], 1), 2, 'Test 71');
test(findFinalValue([6,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96,102,108,114,120,126,132,138,144,150,156,162,168,174,180], 6), 192, 'Test 72');
test(findFinalValue([13,26,52,104,208,416,832], 13), 1664, 'Test 73');
test(findFinalValue([2, 6, 18, 54, 162, 486, 1458, 4374, 13122, 39366], 2), 4, 'Test 74');
test(findFinalValue([1, 3, 9, 27, 81, 243, 729, 2187, 6561], 1), 2, 'Test 75');
test(findFinalValue([11,22,44,88,176,352,704,1408,2816], 11), 5632, 'Test 76');
test(findFinalValue([1000,500,250,125,62,31,15,7,3,1], 1), 2, 'Test 77');
test(findFinalValue([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 5), 80, 'Test 78');
test(findFinalValue([7,14,28,56,112,224,448,896,1792,3584], 7), 7168, 'Test 79');
test(findFinalValue([15,30,45,60,75,90,105,120,135,150], 15), 240, 'Test 80');
test(findFinalValue([7,14,21,28,35,42,49,56,63,70,77,84,91,98,105,112,119,126,133,140], 7), 224, 'Test 81');
test(findFinalValue([999,998,997,996,995,994,993,992,991,990], 990), 1980, 'Test 82');
test(findFinalValue([3, 9, 27, 81, 243, 729, 2187, 6561, 19683], 3), 6, 'Test 83');
test(findFinalValue([13,26,39,52,65,78,91,104,117,130,143,156,169,182,195,208,221,234,247,260], 13), 416, 'Test 84');
test(findFinalValue([7, 14, 28, 56, 112, 224, 448, 896, 1792], 7), 3584, 'Test 85');
test(findFinalValue([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100], 5), 160, 'Test 86');
test(findFinalValue([9,18,27,36,45,54,63,72,81,90], 9), 144, 'Test 87');
test(findFinalValue([2,4,8,16,32,64,128,256,512,1024], 2), 2048, 'Test 88');
test(findFinalValue([17,34,68,136,272,544,1088,2176,4352], 17), 8704, 'Test 89');
test(findFinalValue([10,20,40,80,160,320,640,1280,2560,5120], 10), 10240, 'Test 90');
test(findFinalValue([500,501,502,503,504,505,506,507,508,509], 500), 1000, 'Test 91');
test(findFinalValue([13,26,52,104,208,416,832,1664,3328,6656,13312,26624,53248,106496], 13), 212992, 'Test 92');
test(findFinalValue([7,14,21,28,35,42,49,56,63,70,77,84,91,98,105], 7), 112, 'Test 93');
test(findFinalValue([17,34,51,68,85,102,119,136,153,170,187,204,221,238,255,272,289,306,323,340], 17), 544, 'Test 94');
test(findFinalValue([19,38,76,152,304,608,1216], 19), 2432, 'Test 95');
test(findFinalValue([4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80,84,88,92,96,100], 4), 128, 'Test 96');
test(findFinalValue([100,200,400,800,1600,3200,6400,12800,25600,51200,102400], 100), 204800, 'Test 97');
test(findFinalValue([23,46,92,184,368,736,1472], 23), 2944, 'Test 98');
test(findFinalValue([2,3,5,7,11,13,17,19,23,29,31], 2), 4, 'Test 99');
test(findFinalValue([1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400], 1), 2, 'Test 100');
test(findFinalValue([1,2,4,8,16,32,64,128,256,512,1024], 1), 2048, 'Test 101');
test(findFinalValue([999,998,997,996,995,994,993,992,991,990,989,988,987,986,985,984,983,982,981,980], 980), 1960, 'Test 102');
test(findFinalValue([3,9,27,81,243,729,2187,6561,19683,59049], 3), 6, 'Test 103');
test(findFinalValue([6,12,24,48,96,192,384,768,1536], 6), 3072, 'Test 104');
test(findFinalValue([1, 2, 3, 5, 6, 10, 12, 15, 20, 30, 60, 120, 240, 480, 960], 1), 4, 'Test 105');
test(findFinalValue([7,14,28,56,112,224,448,896], 7), 1792, 'Test 106');
test(findFinalValue([9, 18, 36, 72, 144, 288, 576, 1152, 2304], 9), 4608, 'Test 107');
test(findFinalValue([5,15,45,135,405,1215,3645,10935,32805], 5), 10, 'Test 108');
test(findFinalValue([8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120], 8), 128, 'Test 109');
test(findFinalValue([10,20,40,80,160,320,640,1280,2560,5120,10240], 10), 20480, 'Test 110');
test(findFinalValue([11,22,44,88,176,352,704], 11), 1408, 'Test 111');
test(findFinalValue([2,4,8,16,32,64,128,256,512], 2), 1024, 'Test 112');
test(findFinalValue([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 3), 6, 'Test 113');
test(findFinalValue([3,9,27,81,243,729,2187,6561,19683], 3), 6, 'Test 114');
test(findFinalValue([14,28,56,112,224,448,896,1792,3584], 14), 7168, 'Test 115');

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
