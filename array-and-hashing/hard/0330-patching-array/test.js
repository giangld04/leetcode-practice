// Test: 330. Patching Array
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { minPatches } = require("./solution");

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

console.log("\n330. Patching Array\n");

test(minPatches([1,2,8], 8), 1, 'Test 1');
test(minPatches([1], 2), 1, 'Test 2');
test(minPatches([], 8), 4, 'Test 3');
test(minPatches([], 7), 3, 'Test 4');
test(minPatches([1,2,4,13], 30), 2, 'Test 5');
test(minPatches([1,2,4,13,43], 100), 2, 'Test 6');
test(minPatches([1,2,4,8,16,32,64,128,256,512,1024], 2047), 0, 'Test 7');
test(minPatches([1,3,5,7], 15), 1, 'Test 8');
test(minPatches([1,5,10], 20), 2, 'Test 9');
test(minPatches([1,3], 6), 1, 'Test 10');
test(minPatches([1,4,8], 10), 1, 'Test 11');
test(minPatches([1,2,3,4,5,6,7,8,9,10], 55), 0, 'Test 12');
test(minPatches([1], 1), 0, 'Test 13');
test(minPatches([1,2,3,4,5], 15), 0, 'Test 14');
test(minPatches([1,2,2], 5), 0, 'Test 15');
test(minPatches([1, 3, 9, 27, 81, 243, 729], 10000), 9, 'Test 16');
test(minPatches([1,4,13,40,100], 1000), 6, 'Test 17');
test(minPatches([1, 1, 1, 1, 1], 10), 1, 'Test 18');
test(minPatches([1,1000000000], 2000000000), 29, 'Test 19');
test(minPatches([1, 2, 4, 13, 43], 100), 2, 'Test 20');
test(minPatches([1,2,3,6,12,24,48,96,192,384,768], 1024), 0, 'Test 21');
test(minPatches([1,10,20,30,40,50,60,70,80,90,100], 500), 3, 'Test 22');
test(minPatches([1,4,9,16,25,36], 500), 5, 'Test 23');
test(minPatches([2, 6, 18, 54, 162], 500), 6, 'Test 24');
test(minPatches([1, 4, 10, 20], 30), 2, 'Test 25');
test(minPatches([1,100,10000,1000000], 2000000), 18, 'Test 26');
test(minPatches([2,3,5,7,11,13,17,19,23,29], 100), 1, 'Test 27');
test(minPatches([1, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095], 8000), 3, 'Test 28');
test(minPatches([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536], 1000000), 3, 'Test 29');
test(minPatches([1, 4, 10, 20, 50, 100], 500), 5, 'Test 30');
test(minPatches([1, 2, 5, 7], 23), 2, 'Test 31');
test(minPatches([1,10,100,1000,10000], 100000), 13, 'Test 32');
test(minPatches([1,2,4,8,16,32], 1000), 4, 'Test 33');
test(minPatches([1, 2, 2, 5], 21), 1, 'Test 34');
test(minPatches([1, 5, 10, 20, 50, 100, 200, 500], 1000), 4, 'Test 35');
test(minPatches([1,2,3,7,11,13], 100), 2, 'Test 36');
test(minPatches([1,2,8,32,128], 1024), 6, 'Test 37');
test(minPatches([1,10,100,1000,10000,100000], 1000000), 15, 'Test 38');
test(minPatches([1, 2, 5, 10, 20, 50, 100, 200, 500, 1000], 10000), 6, 'Test 39');
test(minPatches([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 2048), 1, 'Test 40');
test(minPatches([1,1,1,1,1,1,1,1,1,1], 1000), 7, 'Test 41');
test(minPatches([1, 3, 9], 50), 4, 'Test 42');
test(minPatches([5, 8, 15], 50), 4, 'Test 43');
test(minPatches([1,2,2,3,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 100), 0, 'Test 44');
test(minPatches([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096], 8192), 1, 'Test 45');
test(minPatches([1,2,5,10,20,50,100,250,500,1000], 2000), 3, 'Test 46');
test(minPatches([1,2,4,8,16,32,64,128,256,512,1024], 2048), 1, 'Test 47');
test(minPatches([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1024), 1, 'Test 48');
test(minPatches([1, 2, 8, 16, 32, 64, 128], 256), 2, 'Test 49');
test(minPatches([1, 2, 3, 5, 11, 21], 100), 2, 'Test 50');
test(minPatches([1, 4, 10], 19), 2, 'Test 51');
test(minPatches([1,5,10,20,50,100], 10000), 9, 'Test 52');
test(minPatches([1,5,10,25,50,100], 1000), 6, 'Test 53');
test(minPatches([1,4,10,20,25], 50), 2, 'Test 54');
test(minPatches([2, 4, 6, 8], 20), 1, 'Test 55');
test(minPatches([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 2047), 0, 'Test 56');
test(minPatches([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144], 200), 0, 'Test 57');
test(minPatches([1,2,4,8,16,32,64,128,256,512], 1024), 1, 'Test 58');
test(minPatches([1, 3, 9, 27, 81], 243), 5, 'Test 59');
test(minPatches([1,2,3,6,9,18,27,54,81,162,243,486,729,1458,2187,4374,6561,13122,19683,39366], 50000), 0, 'Test 60');
test(minPatches([1,4,13,36,104,284,780,2184,5964,16216,43792,118764,319524,866208,2359608,6336584,17335296,46832600,127132960,341754864], 1000000000), 15, 'Test 61');
test(minPatches([1,2,4,8,16,32,64,128,256,512,1024], 1023), 0, 'Test 62');
test(minPatches([2,6,18,54,162], 1000), 7, 'Test 63');
test(minPatches([1,5,10,25,50,100,200,500,1000], 1500), 4, 'Test 64');
test(minPatches([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536], 100000000), 10, 'Test 65');
test(minPatches([1,2,3,5,11,21,43,85,171,341,683,1365,2731,5461,10922,21845], 100000), 2, 'Test 66');
test(minPatches([1, 3, 9, 27, 81], 200), 4, 'Test 67');
test(minPatches([1,4,10,20,25,50], 100), 2, 'Test 68');
test(minPatches([1,4,10,20,25], 100), 3, 'Test 69');
test(minPatches([1,3,9,27,81,243,729], 1000000), 15, 'Test 70');
test(minPatches([2,4,8,16,32,64,128], 1000), 3, 'Test 71');
test(minPatches([1, 2, 8, 16], 31), 1, 'Test 72');
test(minPatches([1, 3, 7, 15, 31], 1000), 6, 'Test 73');
test(minPatches([1, 1, 1, 1, 1, 1], 10), 1, 'Test 74');
test(minPatches([1,1,1,1,1,1,1,1,1,1], 10), 0, 'Test 75');
test(minPatches([1, 2, 6], 14), 2, 'Test 76');
test(minPatches([1,2,6,18,54,162], 500), 5, 'Test 77');
test(minPatches([2,4,8,16,32,64,128,256,512], 1023), 1, 'Test 78');
test(minPatches([1,5,10,20,50], 1000), 6, 'Test 79');
test(minPatches([1,1,1,1,1,1,1,1,1,1], 20), 1, 'Test 80');
test(minPatches([3,7,11,15,19], 50), 2, 'Test 81');
test(minPatches([1, 5, 10, 20, 50, 100, 200, 500, 1000], 1500), 4, 'Test 82');
test(minPatches([1,3,5,7,9,11,13,15,17,19], 100), 1, 'Test 83');
test(minPatches([1, 2, 6, 24, 120], 720), 6, 'Test 84');
test(minPatches([1,5,10,20,50,100], 200), 3, 'Test 85');
test(minPatches([1,2,3,6,12,24,48,96], 1024), 3, 'Test 86');
test(minPatches([1,3,5,7,9], 20), 1, 'Test 87');
test(minPatches([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 0, 'Test 88');
test(minPatches([1,2,2,4,8,16], 31), 0, 'Test 89');
test(minPatches([1, 2, 3, 5, 7, 11, 13, 17, 19, 23], 100), 0, 'Test 90');
test(minPatches([10,20,30,40,50], 150), 4, 'Test 91');
test(minPatches([2,3,6,7,8,10], 50), 2, 'Test 92');
test(minPatches([1,3,7,15,31,63], 127), 2, 'Test 93');
test(minPatches([1,2,2,3,3,5,8,13,21,34], 100), 1, 'Test 94');
test(minPatches([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 20), 0, 'Test 95');
test(minPatches([2, 4, 8, 16, 32], 1024), 6, 'Test 96');
test(minPatches([3,7,15,31,63,127], 255), 3, 'Test 97');
test(minPatches([1,3,5,7,9], 50), 2, 'Test 98');
test(minPatches([1,7,15,31,63,127], 200), 3, 'Test 99');
test(minPatches([1, 4, 10, 20, 50, 100], 200), 3, 'Test 100');
test(minPatches([1,5,10,20,50,100], 1000), 6, 'Test 101');
test(minPatches([1, 2, 4, 8, 16, 32], 1023), 4, 'Test 102');
test(minPatches([1,2,5,10,20,50,100], 1000), 5, 'Test 103');
test(minPatches([1,2,5,10,25,50], 100), 2, 'Test 104');
test(minPatches([1,2,4,8,16], 31), 0, 'Test 105');

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
