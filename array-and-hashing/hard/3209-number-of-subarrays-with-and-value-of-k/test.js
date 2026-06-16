// Test: 3209. Number Of Subarrays With And Value Of K
// 127 test cases from LeetCodeDataset
// Run: node test.js

const { countSubarrays } = require("./solution");

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

console.log("\n3209. Number Of Subarrays With And Value Of K\n");

test(countSubarrays([5,5,5,5,5], 5), 15, 'Test 1');
test(countSubarrays([10,9,8,7,6], 10), 1, 'Test 2');
test(countSubarrays([5,5,5,5], 5), 10, 'Test 3');
test(countSubarrays([3,3,3,3,3,3], 3), 21, 'Test 4');
test(countSubarrays([8,8,8,8,8], 8), 15, 'Test 5');
test(countSubarrays([4,6,3,7,1], 3), 2, 'Test 6');
test(countSubarrays([1,2,3], 2), 2, 'Test 7');
test(countSubarrays([1000000000,1000000000,1000000000], 1000000000), 6, 'Test 8');
test(countSubarrays([0,0,0,0,0], 0), 15, 'Test 9');
test(countSubarrays([10,5,3,1], 1), 4, 'Test 10');
test(countSubarrays([7,7,7,7], 7), 10, 'Test 11');
test(countSubarrays([1,3,5,7,9], 3), 1, 'Test 12');
test(countSubarrays([8,4,2,1], 8), 1, 'Test 13');
test(countSubarrays([10,9,8,7,6,5,4,3,2,1], 1), 1, 'Test 14');
test(countSubarrays([1,1,1], 1), 6, 'Test 15');
test(countSubarrays([1,3,5,7,9], 1), 10, 'Test 16');
test(countSubarrays([5,3,1,4,2], 0), 7, 'Test 17');
test(countSubarrays([3,3,3,3,3], 3), 15, 'Test 18');
test(countSubarrays([5,3,2,1,4], 1), 2, 'Test 19');
test(countSubarrays([1,1,2], 1), 3, 'Test 20');
test(countSubarrays([10,20,30,40,50], 10), 1, 'Test 21');
test(countSubarrays([7,14,28,56,112], 7), 1, 'Test 22');
test(countSubarrays([2,4,6,8], 2), 1, 'Test 23');
test(countSubarrays([4,6,7,8], 6), 2, 'Test 24');
test(countSubarrays([0,0,0], 0), 6, 'Test 25');
test(countSubarrays([1,2,4,8,16], 8), 1, 'Test 26');
test(countSubarrays([4,6,5,3,3,2], 3), 3, 'Test 27');
test(countSubarrays([0,0,0,0], 0), 10, 'Test 28');
test(countSubarrays([1000000000, 1000000000, 1000000000], 1000000000), 6, 'Test 29');
test(countSubarrays([7,6,5,4,3,2,1], 1), 1, 'Test 30');
test(countSubarrays([1, 1, 1, 2, 2, 2, 4, 4, 4, 8, 8, 8], 2), 6, 'Test 31');
test(countSubarrays([1023, 1023, 1023, 1022, 1023, 1022, 1022], 1022), 21, 'Test 32');
test(countSubarrays([0,0,0,0,0,0,0,0,0,0], 0), 55, 'Test 33');
test(countSubarrays([255, 255, 255, 255, 255, 255], 255), 21, 'Test 34');
test(countSubarrays([7,3,15,8,8], 8), 5, 'Test 35');
test(countSubarrays([31, 31, 31, 31, 31, 31, 31, 31], 31), 36, 'Test 36');
test(countSubarrays([7, 7, 3, 7, 7, 7, 7], 7), 13, 'Test 37');
test(countSubarrays([31, 31, 31, 31, 30, 31], 30), 10, 'Test 38');
test(countSubarrays([8, 4, 2, 1, 0], 0), 11, 'Test 39');
test(countSubarrays([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096], 1), 1, 'Test 40');
test(countSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), 210, 'Test 41');
test(countSubarrays([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 0), 512, 'Test 42');
test(countSubarrays([15, 30, 30, 60, 60, 120], 30), 3, 'Test 43');
test(countSubarrays([8, 8, 12, 8, 8, 8], 8), 20, 'Test 44');
test(countSubarrays([2147483647,2147483647,2147483647], 2147483647), 6, 'Test 45');
test(countSubarrays([1,2,4,8,16,32], 4), 1, 'Test 46');
test(countSubarrays([1023, 1023, 1023, 1023, 1023], 1023), 15, 'Test 47');
test(countSubarrays([1023, 1023, 1023, 1022, 1023, 1023], 1022), 12, 'Test 48');
test(countSubarrays([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4], 1), 6, 'Test 49');
test(countSubarrays([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 5), 1, 'Test 50');
test(countSubarrays([15, 15, 15, 15, 15, 15], 15), 21, 'Test 51');
test(countSubarrays([15, 15, 15, 15, 15, 0, 15, 15], 15), 18, 'Test 52');
test(countSubarrays([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 0, 0, 0, 0, 0], 0), 65, 'Test 53');
test(countSubarrays([15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15], 15), 496, 'Test 54');
test(countSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 210, 'Test 55');
test(countSubarrays([100,200,300,400,500,600,700,800,900,1000], 100), 1, 'Test 56');
test(countSubarrays([8, 8, 8, 8, 8, 8, 8, 8, 8, 8], 8), 55, 'Test 57');
test(countSubarrays([255, 255, 255, 255, 255, 255, 255, 255, 255, 255], 255), 55, 'Test 58');
test(countSubarrays([31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 0, 31], 31), 56, 'Test 59');
test(countSubarrays([7, 6, 7, 6, 7], 6), 12, 'Test 60');
test(countSubarrays([3, 6, 12, 24, 48, 96, 192, 384, 768, 1536], 3), 1, 'Test 61');
test(countSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 1, 'Test 62');
test(countSubarrays([1,3,7,15,31,63,127], 1), 7, 'Test 63');
test(countSubarrays([7, 7, 3, 7, 3, 3, 7], 3), 23, 'Test 64');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10], 1), 1, 'Test 65');
test(countSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 1, 'Test 66');
test(countSubarrays([15, 15, 15, 15, 15, 15, 15, 15], 15), 36, 'Test 67');
test(countSubarrays([15, 14, 13, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 15), 2, 'Test 68');
test(countSubarrays([8,12,8,12,8,12,8,12,8,12], 8), 50, 'Test 69');
test(countSubarrays([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0), 55, 'Test 70');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 1), 1, 'Test 71');
test(countSubarrays([1, 1, 2, 2, 4, 4, 8, 8, 16, 16, 32, 32, 64, 64, 128, 128, 256, 256, 512, 512, 1024, 1024], 1), 3, 'Test 72');
test(countSubarrays([255,255,255,255,255,255,255,255,255,255], 255), 55, 'Test 73');
test(countSubarrays([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1), 1, 'Test 74');
test(countSubarrays([1, 3, 5, 7, 9, 11, 13, 15], 1), 22, 'Test 75');
test(countSubarrays([3,7,5,3,7,5,3,7,5], 5), 6, 'Test 76');
test(countSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 1), 1, 'Test 77');
test(countSubarrays([7, 7, 7, 0, 7, 7], 7), 9, 'Test 78');
test(countSubarrays([15, 15, 15, 15, 14, 14, 15], 14), 17, 'Test 79');
test(countSubarrays([31, 31, 31, 31, 31, 31, 31], 31), 28, 'Test 80');
test(countSubarrays([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 10), 210, 'Test 81');
test(countSubarrays([31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31], 31), 210, 'Test 82');
test(countSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 1225, 'Test 83');
test(countSubarrays([1,3,7,15,31,63,127,255,511,1023], 1), 10, 'Test 84');
test(countSubarrays([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575], 1), 20, 'Test 85');
test(countSubarrays([63, 63, 63, 62, 63, 63, 63], 62), 16, 'Test 86');
test(countSubarrays([31,15,7,3,1,1,3,7,15,31], 3), 8, 'Test 87');
test(countSubarrays([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 7), 465, 'Test 88');
test(countSubarrays([64, 32, 16, 8, 4, 2, 1, 2, 4, 8, 16, 32, 64], 1), 1, 'Test 89');
test(countSubarrays([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023], 1), 120, 'Test 90');
test(countSubarrays([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8], 8), 210, 'Test 91');
test(countSubarrays([31,31,31,31,31,31,31], 31), 28, 'Test 92');
test(countSubarrays([1073741824, 1073741824, 1073741824, 1073741824, 1073741824], 1073741824), 15, 'Test 93');
test(countSubarrays([123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123], 123), 496, 'Test 94');
test(countSubarrays([7, 14, 28, 28, 56], 28), 3, 'Test 95');
test(countSubarrays([2, 4, 6, 8, 10, 12, 14, 16], 2), 1, 'Test 96');
test(countSubarrays([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0), 1128, 'Test 97');
test(countSubarrays([4, 8, 8, 16, 32, 32, 64], 32), 3, 'Test 98');
test(countSubarrays([1,2,4,8,16,32,64,128,256,512], 4), 1, 'Test 99');
test(countSubarrays([255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255], 255), 79, 'Test 100');
test(countSubarrays([1023, 1023, 1023, 1023, 1023, 1023, 1023], 1023), 28, 'Test 101');
test(countSubarrays([255, 255, 255, 254, 255, 255, 255], 254), 16, 'Test 102');
test(countSubarrays([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 3), 1128, 'Test 103');
test(countSubarrays([7, 14, 28, 14, 7], 7), 2, 'Test 104');
test(countSubarrays([15, 15, 15, 14, 15, 15, 14, 15], 14), 26, 'Test 105');
test(countSubarrays([1, 2, 4, 8, 16, 32, 64, 128, 256], 2), 1, 'Test 106');
test(countSubarrays([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 2), 210, 'Test 107');
test(countSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0), 0, 'Test 108');
test(countSubarrays([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 1024), 1, 'Test 109');
test(countSubarrays([255, 255, 255, 254, 255, 254, 255, 254, 255, 254], 254), 46, 'Test 110');
test(countSubarrays([8, 4, 2, 1, 2, 4, 8], 4), 2, 'Test 111');
test(countSubarrays([2, 6, 2, 2, 6, 2, 2, 6, 2, 2], 2), 52, 'Test 112');
test(countSubarrays([3, 5, 7, 9, 11, 13, 15], 3), 1, 'Test 113');
test(countSubarrays([255, 127, 63, 31, 15, 7, 3, 1], 1), 8, 'Test 114');
test(countSubarrays([1023,511,255,127,63,31,15,7,3,1], 1), 10, 'Test 115');
test(countSubarrays([7, 7, 11, 7, 7, 7, 11, 11, 7], 7), 10, 'Test 116');
test(countSubarrays([2, 4, 8, 16, 32, 64, 128], 2), 1, 'Test 117');
test(countSubarrays([255,255,255,255,255], 255), 15, 'Test 118');
test(countSubarrays([2, 3, 1, 2, 1, 1, 2, 3], 1), 5, 'Test 119');
test(countSubarrays([2, 6, 10, 14, 18, 22, 26, 30, 34, 38], 2), 38, 'Test 120');
test(countSubarrays([6, 6, 6, 6, 6, 7, 6, 6, 6, 6], 6), 54, 'Test 121');
test(countSubarrays([1023, 1023, 1023, 1023, 1023, 1023, 1023, 1023, 1023, 1023, 0, 1023], 1023), 56, 'Test 122');
test(countSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 1), 38, 'Test 123');
test(countSubarrays([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8], 8), 1326, 'Test 124');
test(countSubarrays([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023], 1), 10, 'Test 125');
test(countSubarrays([1000000000, 1000000000, 1000000000, 1000000000], 1000000000), 10, 'Test 126');
test(countSubarrays([2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6], 2), 72, 'Test 127');

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
