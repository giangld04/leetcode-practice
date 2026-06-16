// Test: 477. Total Hamming Distance
// 98 test cases from LeetCodeDataset
// Run: node test.js

const { totalHammingDistance } = require("./solution");

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

console.log("\n477. Total Hamming Distance\n");

test(totalHammingDistance([1,3,5,7,9,11,13,15]), 48, 'Test 1');
test(totalHammingDistance([4,14,4]), 4, 'Test 2');
test(totalHammingDistance([0,1,2,3,4,5,6,7,8,9,10]), 112, 'Test 3');
test(totalHammingDistance([31,14,7,3,1]), 24, 'Test 4');
test(totalHammingDistance([1,3,5]), 4, 'Test 5');
test(totalHammingDistance([1,2,4,8,16]), 20, 'Test 6');
test(totalHammingDistance([3,3,3,3,3,3,3,3,3,3]), 0, 'Test 7');
test(totalHammingDistance([1000000000,1000000000,1000000000,1000000000]), 0, 'Test 8');
test(totalHammingDistance([1,3,5,7,9]), 16, 'Test 9');
test(totalHammingDistance([1,2,3,4]), 11, 'Test 10');
test(totalHammingDistance([1,2,3,4,5]), 18, 'Test 11');
test(totalHammingDistance([0,1,2,3,4]), 16, 'Test 12');
test(totalHammingDistance([1,1,1,1,1,1,1,1,1,1]), 0, 'Test 13');
test(totalHammingDistance([0,0,0]), 0, 'Test 14');
test(totalHammingDistance([1,0,1,0,1,0]), 9, 'Test 15');
test(totalHammingDistance([0,0,0,0]), 0, 'Test 16');
test(totalHammingDistance([3,5,6,7,9,10,11,12]), 62, 'Test 17');
test(totalHammingDistance([255,128,64,32,16,8,4,2,1,0]), 128, 'Test 18');
test(totalHammingDistance([31,14,7,3]), 13, 'Test 19');
test(totalHammingDistance([1000000000,999999999,999999998,999999997]), 32, 'Test 20');
test(totalHammingDistance([4,14,2]), 6, 'Test 21');
test(totalHammingDistance([0,1,2,3]), 8, 'Test 22');
test(totalHammingDistance([1,2,4,8,16,32,64,128,256,512]), 90, 'Test 23');
test(totalHammingDistance([123456789, 987654321, 111222333, 444555666, 777888999]), 152, 'Test 24');
test(totalHammingDistance([536870911, 268435455, 134217727, 67108863, 33554431, 16777215, 8388607, 4194303, 2097151, 1048575]), 165, 'Test 25');
test(totalHammingDistance([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), 210, 'Test 26');
test(totalHammingDistance([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200]), 304, 'Test 27');
test(totalHammingDistance([1023, 2047, 4095, 8191, 16383, 32767, 65535]), 56, 'Test 28');
test(totalHammingDistance([1000000000, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005]), 25, 'Test 29');
test(totalHammingDistance([134217727, 134217726, 134217725, 134217724, 134217723, 134217722, 134217721, 134217720]), 48, 'Test 30');
test(totalHammingDistance([1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000]), 228, 'Test 31');
test(totalHammingDistance([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 90, 'Test 32');
test(totalHammingDistance([123, 456, 789, 101112, 131415, 161718, 192021, 222324]), 250, 'Test 33');
test(totalHammingDistance([255, 127, 63, 31, 15, 7, 3, 1]), 84, 'Test 34');
test(totalHammingDistance([1023, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), 180, 'Test 35');
test(totalHammingDistance([67305985, 134611970, 269223940, 538447880, 1076895760, 2153791520]), 140, 'Test 36');
test(totalHammingDistance([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]), 156, 'Test 37');
test(totalHammingDistance([123456789, 987654321, 1122334455, 5566778899, 9988776655]), 154, 'Test 38');
test(totalHammingDistance([999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991, 999999990, 999999989, 999999988, 999999987, 999999986, 999999985, 999999984, 999999983, 999999982, 999999981, 999999980]), 456, 'Test 39');
test(totalHammingDistance([2147483647, 2147483646, 2147483645, 2147483644, 2147483643]), 16, 'Test 40');
test(totalHammingDistance([1000000, 1000001, 1000010, 1000011, 1000100, 1000101, 1000110, 1000111]), 112, 'Test 41');
test(totalHammingDistance([128, 64, 32, 16, 8, 4, 2, 1, 255, 127, 63, 31, 15, 7, 3, 1, 0]), 464, 'Test 42');
test(totalHammingDistance([1023, 2047, 4095, 8191, 16383]), 20, 'Test 43');
test(totalHammingDistance([123456789, 987654321, 112233445, 556677889, 998877665, 543216789, 876543210]), 322, 'Test 44');
test(totalHammingDistance([2147483647, 2147483646, 2147483645, 2147483644]), 8, 'Test 45');
test(totalHammingDistance([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]), 455, 'Test 46');
test(totalHammingDistance([1048576, 524288, 262144, 131072, 65536, 32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), 420, 'Test 47');
test(totalHammingDistance([8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]), 90, 'Test 48');
test(totalHammingDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 49');
test(totalHammingDistance([2147483647, 2147483646, 2147483645, 2147483644, 2147483643, 2147483642, 2147483641, 2147483640, 2147483639, 2147483638]), 89, 'Test 50');
test(totalHammingDistance([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000]), 324, 'Test 51');
test(totalHammingDistance([131071, 131072, 131073, 131074, 131075, 131076, 131077]), 126, 'Test 52');
test(totalHammingDistance([123456789, 987654321, 111111111, 222222222, 333333333, 444444444, 555555555, 666666666]), 411, 'Test 53');
test(totalHammingDistance([0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864, 134217728, 268435456, 536870912]), 900, 'Test 54');
test(totalHammingDistance([1048575, 524287, 262143, 131071, 65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1]), 1330, 'Test 55');
test(totalHammingDistance([0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 121, 'Test 56');
test(totalHammingDistance([2147483647, 2147483646, 2147483645, 2147483644, 2147483643, 2147483642, 2147483641, 2147483640]), 48, 'Test 57');
test(totalHammingDistance([536870911, 536870910, 536870909, 536870908, 536870907, 536870906]), 25, 'Test 58');
test(totalHammingDistance([123456789, 987654321, 1122334455, 5544332211, 1357924680, 2468013579]), 239, 'Test 59');
test(totalHammingDistance([8388607, 4194303, 2097151, 1048575, 524287, 262143, 131071, 65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1]), 2024, 'Test 60');
test(totalHammingDistance([100000000, 100000001, 100000002, 100000003, 100000004, 100000005, 100000006, 100000007, 100000008, 100000009, 100000010]), 112, 'Test 61');
test(totalHammingDistance([1023, 2047, 3071, 4095, 5119]), 16, 'Test 62');
test(totalHammingDistance([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1]), 165, 'Test 63');
test(totalHammingDistance([33554431, 16777215, 8388607, 4194303, 2097151, 1048575, 524287, 262143]), 84, 'Test 64');
test(totalHammingDistance([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 686, 'Test 65');
test(totalHammingDistance([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]), 168, 'Test 66');
test(totalHammingDistance([2147483647, 2147483646, 2147483645, 2147483644, 2147483643, 2147483642]), 25, 'Test 67');
test(totalHammingDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 68');
test(totalHammingDistance([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991]), 145, 'Test 69');
test(totalHammingDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 768, 'Test 70');
test(totalHammingDistance([8388607, 16777215, 33554431, 67108863, 134217727, 268435455, 536870911, 1073741823]), 84, 'Test 71');
test(totalHammingDistance([123456789, 987654321, 111111111, 222222222, 333333333, 444444444, 555555555]), 304, 'Test 72');
test(totalHammingDistance([1048575, 1048574, 1048573, 1048572, 1048571, 1048570, 1048569, 1048568]), 48, 'Test 73');
test(totalHammingDistance([7, 77, 777, 7777, 77777, 777777, 7777777, 77777777, 777777777, 7777777777]), 557, 'Test 74');
test(totalHammingDistance([1073741823, 536870911, 268435455, 134217727, 67108863, 33554431, 16777215, 8388607, 4194303, 2097151, 1048575, 524287, 262143, 131071, 65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1]), 4495, 'Test 75');
test(totalHammingDistance([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125]), 634, 'Test 76');
test(totalHammingDistance([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 512, 'Test 77');
test(totalHammingDistance([8, 4, 2, 1, 16, 8, 4, 2, 1, 32, 16, 8, 4, 2, 1, 64, 32, 16, 8, 4, 2, 1]), 406, 'Test 78');
test(totalHammingDistance([123456789, 987654321, 1122334455, 5566778899, 9988776655, 4433221100]), 248, 'Test 79');
test(totalHammingDistance([8388607, 8388606, 8388605, 8388604, 8388603, 8388602]), 25, 'Test 80');
test(totalHammingDistance([500000000, 500000001, 500000002, 500000003, 500000004, 500000005, 500000006, 500000007]), 48, 'Test 81');
test(totalHammingDistance([1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287]), 165, 'Test 82');
test(totalHammingDistance([5318008, 4618459, 4646774, 8777780, 8777736, 6218305, 4649788, 1048585, 4649456, 4618459]), 459, 'Test 83');
test(totalHammingDistance([134217728, 67108864, 33554432, 16777216, 8388608, 4194304, 2097152, 1048576, 524288, 262144, 131072, 65536, 32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), 756, 'Test 84');
test(totalHammingDistance([268435455, 268435454, 268435453, 268435452, 268435451, 268435450, 268435449, 268435448, 268435447, 268435446, 268435445]), 112, 'Test 85');
test(totalHammingDistance([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000]), 548, 'Test 86');
test(totalHammingDistance([1000000001, 1000000002, 1000000003, 1000000004, 1000000005, 1000000006, 1000000007, 1000000008]), 55, 'Test 87');
test(totalHammingDistance([255, 127, 63, 31, 15, 7, 3, 1, 0]), 120, 'Test 88');
test(totalHammingDistance([8388607, 4194303, 2097151, 1048575, 524287, 262143, 131071, 65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1, 0]), 2300, 'Test 89');
test(totalHammingDistance([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 256, 'Test 90');
test(totalHammingDistance([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]), 392, 'Test 91');
test(totalHammingDistance([123456789, 987654321, 234567891, 1234567890, 9876543210]), 158, 'Test 92');
test(totalHammingDistance([135792468, 246813579, 357924681, 468135792, 579246813, 681357924, 792468135, 813579246, 924681357]), 542, 'Test 93');
test(totalHammingDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 470, 'Test 94');
test(totalHammingDistance([536870911, 536870910, 536870909, 536870908, 536870907, 536870906, 536870905, 536870904]), 48, 'Test 95');
test(totalHammingDistance([1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000]), 381, 'Test 96');
test(totalHammingDistance([8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), 132, 'Test 97');
test(totalHammingDistance([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]), 240, 'Test 98');

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
