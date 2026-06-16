// Test: 1521. Find A Value Of A Mysterious Function Closest To Target
// 119 test cases from LeetCodeDataset
// Run: node test.js

const { closestToTarget } = require("./solution");

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

console.log("\n1521. Find A Value Of A Mysterious Function Closest To Target\n");

test(closestToTarget([7,7,7,7,7,7], 8), 1, 'Test 1');
test(closestToTarget([1000000], 1000000), 0, 'Test 2');
test(closestToTarget([2,4,6,8,10], 7), 1, 'Test 3');
test(closestToTarget([5,5,5,5,5], 5), 0, 'Test 4');
test(closestToTarget([1,1,1,1,1], 2), 1, 'Test 5');
test(closestToTarget([1,2,4,8,16], 0), 0, 'Test 6');
test(closestToTarget([10,20,30,40,50], 25), 5, 'Test 7');
test(closestToTarget([9,12,3,7,15], 5), 2, 'Test 8');
test(closestToTarget([5,5,5,5,5], 3), 2, 'Test 9');
test(closestToTarget([3,6,9,12,15], 13), 1, 'Test 10');
test(closestToTarget([1000000,1000000,1000000], 1), 999999, 'Test 11');
test(closestToTarget([2,4,6,8,10], 5), 1, 'Test 12');
test(closestToTarget([1,3,5,7,9], 6), 1, 'Test 13');
test(closestToTarget([10,20,30,40,50], 0), 0, 'Test 14');
test(closestToTarget([7,14,21,28,35], 20), 0, 'Test 15');
test(closestToTarget([3,6,9,12,15], 7), 1, 'Test 16');
test(closestToTarget([1,1,1,1,1], 0), 1, 'Test 17');
test(closestToTarget([10,20,30,40,50], 15), 5, 'Test 18');
test(closestToTarget([100,200,300,400,500], 250), 6, 'Test 19');
test(closestToTarget([2,4,8,16,32], 10), 2, 'Test 20');
test(closestToTarget([23,46,69,92,115,138,161,184,207,230], 150), 10, 'Test 21');
test(closestToTarget([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 100), 28, 'Test 22');
test(closestToTarget([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7), 0, 'Test 23');
test(closestToTarget([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288], 50000), 15536, 'Test 24');
test(closestToTarget([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], 100), 53, 'Test 25');
test(closestToTarget([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108, 117, 126, 135, 144, 153, 162, 171, 180], 100), 0, 'Test 26');
test(closestToTarget([16,8,4,2,1,32,16,8,4,2,1], 15), 1, 'Test 27');
test(closestToTarget([999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991, 999990], 1), 999983, 'Test 28');
test(closestToTarget([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 500000000), 400000000, 'Test 29');
test(closestToTarget([1000000, 999999, 999998, 999997, 999996, 999995], 1000000), 0, 'Test 30');
test(closestToTarget([4294967295, 2147483647, 1073741823, 536870911, 268435455, 134217727, 67108863, 33554431, 16777215, 8388607], 1000000), 7388607, 'Test 31');
test(closestToTarget([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 100), 28, 'Test 32');
test(closestToTarget([5,3,8,12,14,2,11], 10), 1, 'Test 33');
test(closestToTarget([5,3,8,6,2,7,4,1], 5), 0, 'Test 34');
test(closestToTarget([9, 12, 3, 7, 15, 8, 6, 4, 2, 1], 5), 1, 'Test 35');
test(closestToTarget([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10), 1, 'Test 36');
test(closestToTarget([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023], 512), 1, 'Test 37');
test(closestToTarget([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023], 1), 0, 'Test 38');
test(closestToTarget([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767], 10000), 1809, 'Test 39');
test(closestToTarget([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384], 1000), 24, 'Test 40');
test(closestToTarget([1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812, 3906, 1953, 976, 488, 244, 122, 61, 30, 15, 7, 3, 1], 100000), 1696, 'Test 41');
test(closestToTarget([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 3), 2, 'Test 42');
test(closestToTarget([1, 5, 25, 125, 625, 3125, 15625, 78125, 390625, 1953125], 1000000), 609375, 'Test 43');
test(closestToTarget([7,14,21,28,35,42,49,56], 30), 2, 'Test 44');
test(closestToTarget([5,10,15,20,25,30,35,40], 22), 2, 'Test 45');
test(closestToTarget([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384], 1000), 24, 'Test 46');
test(closestToTarget([1234567,2345678,3456789,4567890,5678901,6789012,7890123,8901234,9012345], 5000000), 377900, 'Test 47');
test(closestToTarget([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], 20), 1, 'Test 48');
test(closestToTarget([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 1000), 24, 'Test 49');
test(closestToTarget([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 500), 12, 'Test 50');
test(closestToTarget([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], 500), 11, 'Test 51');
test(closestToTarget([3,6,9,12,15,18,21], 10), 1, 'Test 52');
test(closestToTarget([83552, 83552, 83552, 83552, 83552, 83552, 83552, 83552], 50000), 33552, 'Test 53');
test(closestToTarget([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 1), 2, 'Test 54');
test(closestToTarget([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105], 50), 1, 'Test 55');
test(closestToTarget([2, 6, 14, 30, 62, 126, 254, 510, 1022, 2046], 1024), 2, 'Test 56');
test(closestToTarget([7,7,7,7,7,7,7,7,7,7], 5), 2, 'Test 57');
test(closestToTarget([1048576, 524288, 262144, 131072, 65536, 32768, 16384, 8192, 4096, 2048], 100000), 31072, 'Test 58');
test(closestToTarget([13, 23, 33, 43, 53, 63, 73, 83, 93, 103, 113, 123, 133, 143, 153], 75), 2, 'Test 59');
test(closestToTarget([999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991, 999990], 500000), 499984, 'Test 60');
test(closestToTarget([111111, 222222, 333333, 444444, 555555, 666666, 777777, 888888, 999999, 1111111], 500000), 24320, 'Test 61');
test(closestToTarget([31, 15, 7, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 16), 1, 'Test 62');
test(closestToTarget([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 1), 2, 'Test 63');
test(closestToTarget([1023, 1022, 1021, 1020, 1019, 1018, 1017, 1016, 1015, 1014, 1013, 1012, 1011, 1010, 1009, 1008, 1007, 1006, 1005, 1004, 1003, 1002, 1001, 1000], 500), 492, 'Test 64');
test(closestToTarget([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023], 500), 11, 'Test 65');
test(closestToTarget([31,13,7,1,9,15,8,10,18,6], 12), 1, 'Test 66');
test(closestToTarget([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000], 5000), 0, 'Test 67');
test(closestToTarget([987654,321654,654321,123456,654123,321987,987321,123654,456789,789123], 500000), 43211, 'Test 68');
test(closestToTarget([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384], 8190), 2, 'Test 69');
test(closestToTarget([100000, 200000, 300000, 400000, 500000], 350000), 43216, 'Test 70');
test(closestToTarget([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], 50), 1, 'Test 71');
test(closestToTarget([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 50000000), 23736448, 'Test 72');
test(closestToTarget([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 0), 0, 'Test 73');
test(closestToTarget([1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812, 3906, 1953, 976, 488, 244, 122, 61, 30, 15, 7, 3, 1], 1000), 24, 'Test 74');
test(closestToTarget([987654, 876543, 765432, 654321, 543210, 432109, 321098, 210987, 109876, 98765], 500000), 24288, 'Test 75');
test(closestToTarget([8, 4, 2, 1, 16, 32, 64, 128, 256, 512], 100), 28, 'Test 76');
test(closestToTarget([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 10), 1, 'Test 77');
test(closestToTarget([1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812, 3906, 1953], 100000), 1696, 'Test 78');
test(closestToTarget([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], 200), 55, 'Test 79');
test(closestToTarget([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1], 511), 1, 'Test 80');
test(closestToTarget([123456, 654321, 111111, 222222, 333333, 444444, 555555, 666666, 777777, 888888], 333333), 0, 'Test 81');
test(closestToTarget([31, 15, 7, 3, 1, 1, 3, 7, 15, 31, 15, 7, 3, 1, 1, 3, 7, 15, 31, 15, 7, 3, 1, 1, 3, 7, 15, 31, 15, 7, 3, 1], 10), 3, 'Test 82');
test(closestToTarget([1048576,524288,262144,131072,65536,32768,16384,8192,4096,2048,1024,512,256,128,64,32,16,8,4,2,1], 100000), 31072, 'Test 83');
test(closestToTarget([1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000], 1000000), 0, 'Test 84');
test(closestToTarget([1048576, 524288, 262144, 131072, 65536, 32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1], 1000000), 48576, 'Test 85');
test(closestToTarget([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575], 1000000), 48575, 'Test 86');
test(closestToTarget([1048576, 524288, 262144, 131072, 65536, 32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1], 1023), 1, 'Test 87');
test(closestToTarget([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 27), 2, 'Test 88');
test(closestToTarget([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 4), 3, 'Test 89');
test(closestToTarget([123, 456, 789, 101112, 131415, 161718, 192021, 222324, 252627, 282930], 100000), 1112, 'Test 90');
test(closestToTarget([1000000, 1000000, 1000000, 1, 1, 1, 2, 3, 4, 5], 1000005), 5, 'Test 91');
test(closestToTarget([2147483647, 2147483646, 2147483645, 2147483644, 2147483643, 2147483642, 2147483641, 2147483640], 2147483640), 0, 'Test 92');
test(closestToTarget([3, 5, 7, 11, 13, 17, 19, 23, 29, 31], 15), 2, 'Test 93');
test(closestToTarget([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 123456789), 23456789, 'Test 94');
test(closestToTarget([1,2,3,4,5,6,7,8,9,10], 15), 5, 'Test 95');
test(closestToTarget([33,33,33,33,33,33,33,33,33,33,33,33,33,33,33], 32), 1, 'Test 96');
test(closestToTarget([512, 256, 128, 64, 32, 16, 8, 4, 2, 1], 300), 44, 'Test 97');
test(closestToTarget([999999, 999999, 999999, 999999, 999999, 999999, 999999, 999999, 999999, 999999], 1), 999998, 'Test 98');
test(closestToTarget([6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 3), 3, 'Test 99');
test(closestToTarget([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 5), 0, 'Test 100');
test(closestToTarget([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1], 10), 2, 'Test 101');
test(closestToTarget([9, 18, 27, 36, 45, 54, 63, 72, 81, 90], 50), 4, 'Test 102');
test(closestToTarget([123, 456, 789, 101, 112, 131, 44, 55, 66, 77, 88, 99], 200), 56, 'Test 103');
test(closestToTarget([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 20), 1, 'Test 104');
test(closestToTarget([2,4,8,16,32,64,128,256], 100), 28, 'Test 105');
test(closestToTarget([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1], 10), 3, 'Test 106');
test(closestToTarget([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 75), 5, 'Test 107');
test(closestToTarget([987654,876543,765432,654321,543210,432109,321098,210987,109876], 300000), 3480, 'Test 108');
test(closestToTarget([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500], 750), 18, 'Test 109');
test(closestToTarget([1,3,7,15,31,63,127,255], 123), 4, 'Test 110');
test(closestToTarget([255, 127, 63, 31, 15, 7, 3, 1], 10), 3, 'Test 111');
test(closestToTarget([1000000,500000,250000,125000,62500,31250,15625,7812,3906,1953], 1000), 24, 'Test 112');
test(closestToTarget([9,18,27,36,45,54,63,72,81,90], 50), 4, 'Test 113');
test(closestToTarget([1000000, 900000, 800000, 700000, 600000, 500000, 400000, 300000, 200000, 100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 45000), 4728, 'Test 114');
test(closestToTarget([123456, 234567, 345678, 456789, 567890, 678901, 789012, 890123, 901234, 101234], 400000), 54322, 'Test 115');
test(closestToTarget([1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767], 1024), 1, 'Test 116');
test(closestToTarget([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 85), 5, 'Test 117');
test(closestToTarget([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 50), 50, 'Test 118');
test(closestToTarget([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7), 0, 'Test 119');

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
