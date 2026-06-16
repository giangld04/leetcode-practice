// Test: 416. Partition Equal Subset Sum
// 86 test cases from LeetCodeDataset
// Run: node test.js

const { canPartition } = require("./solution");

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

console.log("\n416. Partition Equal Subset Sum\n");

test(canPartition([1,2,3,4,5,5,5]), false, 'Test 1');
test(canPartition([1,5,11,5]), true, 'Test 2');
test(canPartition([1,2,2,3]), true, 'Test 3');
test(canPartition([1,2,3,4]), true, 'Test 4');
test(canPartition([2,2,3,3]), true, 'Test 5');
test(canPartition([1,1,1,1,1,1,1,1]), true, 'Test 6');
test(canPartition([1,2,3,4,5,6,7]), true, 'Test 7');
test(canPartition([2,2,3,5]), false, 'Test 8');
test(canPartition([2,2,3,6]), false, 'Test 9');
test(canPartition([1,2,3,5]), false, 'Test 10');
test(canPartition([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]), true, 'Test 11');
test(canPartition([99, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), false, 'Test 12');
test(canPartition([1, 2, 3, 6, 12, 24, 48, 96, 192, 384, 768, 1536, 3072, 6144, 12288, 24576, 49152, 98304, 196608]), true, 'Test 13');
test(canPartition([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), true, 'Test 14');
test(canPartition([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190]), false, 'Test 15');
test(canPartition([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), false, 'Test 16');
test(canPartition([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), false, 'Test 17');
test(canPartition([100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100]), true, 'Test 18');
test(canPartition([1,2,3,4,5,6,7,8,9,10]), false, 'Test 19');
test(canPartition([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288]), false, 'Test 20');
test(canPartition([100,200,300,400,500,500]), true, 'Test 21');
test(canPartition([1,2,5,6,8,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54]), false, 'Test 22');
test(canPartition([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 23');
test(canPartition([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), true, 'Test 24');
test(canPartition([7,14,3,9,1,4,13,2,3,10,5,3,5,8,6,9,6,5,14,4,5,8,6,4,10,1,4,9,1,3,1,5,4,3,9,1,5,9,1,2,9,1,8,1,14,5,8,3,13,14,1,10,1,1,1,5,14,1,14,5,14,1,8,10,9,5,14,10,13]), false, 'Test 25');
test(canPartition([5,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), false, 'Test 26');
test(canPartition([10,20,15,5,5]), false, 'Test 27');
test(canPartition([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 28');
test(canPartition([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), true, 'Test 29');
test(canPartition([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]), true, 'Test 30');
test(canPartition([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), false, 'Test 31');
test(canPartition([10, 15, 20, 25, 30, 35, 40]), false, 'Test 32');
test(canPartition([1,2,4,8,16,32,64,128,256,512]), false, 'Test 33');
test(canPartition([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]), true, 'Test 34');
test(canPartition([10, 20, 15, 5, 5]), false, 'Test 35');
test(canPartition([15,10,20,30,50,50]), false, 'Test 36');
test(canPartition([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000]), true, 'Test 37');
test(canPartition([8,15,3,7,15,16,9,16,8,15,7,13,16,3,14,1,1,1,1,1]), true, 'Test 38');
test(canPartition([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), true, 'Test 39');
test(canPartition([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), true, 'Test 40');
test(canPartition([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), true, 'Test 41');
test(canPartition([3,3,3,3,10,5,5,5]), false, 'Test 42');
test(canPartition([1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000, 2000000]), false, 'Test 43');
test(canPartition([23, 13, 2, 16, 21, 5, 14, 11, 7, 9, 4, 18, 3, 6, 8, 10, 12, 15, 17, 20]), true, 'Test 44');
test(canPartition([15, 20, 25, 30, 35, 40, 45, 50, 55, 60]), false, 'Test 45');
test(canPartition([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]), true, 'Test 46');
test(canPartition([33,14,60,22,5,9,38,35,7,3,19,25,36,29,28,17,41,21,18,19]), false, 'Test 47');
test(canPartition([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300]), false, 'Test 48');
test(canPartition([1, 2, 3, 4, 5, 6, 7]), true, 'Test 49');
test(canPartition([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), true, 'Test 50');
test(canPartition([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), false, 'Test 51');
test(canPartition([99, 98, 97, 96, 95, 94, 93, 92, 91, 90]), false, 'Test 52');
test(canPartition([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,16]), false, 'Test 53');
test(canPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), false, 'Test 54');
test(canPartition([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), true, 'Test 55');
test(canPartition([10,2,30,12,3,1]), false, 'Test 56');
test(canPartition([100, 200, 300, 400, 500, 100, 200, 300, 400, 500]), true, 'Test 57');
test(canPartition([10,10,10,10,10,10,10,10,10,10]), true, 'Test 58');
test(canPartition([99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]), true, 'Test 59');
test(canPartition([7,15,6,5,9,8,3,5,4,4,5,7,9,6,5,4,5,9,10,5]), false, 'Test 60');
test(canPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), false, 'Test 61');
test(canPartition([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), true, 'Test 62');
test(canPartition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100]), false, 'Test 63');
test(canPartition([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250]), false, 'Test 64');
test(canPartition([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536,131072,262144,524288]), false, 'Test 65');
test(canPartition([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536]), false, 'Test 66');
test(canPartition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), true, 'Test 67');
test(canPartition([4,4,4,4,4,4,4,4,4,4]), true, 'Test 68');
test(canPartition([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,10]), true, 'Test 69');
test(canPartition([15, 20, 25, 30, 35, 40, 45, 50]), true, 'Test 70');
test(canPartition([100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), true, 'Test 71');
test(canPartition([10, 20, 30, 40, 50, 60, 70]), true, 'Test 72');
test(canPartition([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]), true, 'Test 73');
test(canPartition([99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118]), true, 'Test 74');
test(canPartition([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), true, 'Test 75');
test(canPartition([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]), true, 'Test 76');
test(canPartition([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 55]), false, 'Test 77');
test(canPartition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10]), false, 'Test 78');
test(canPartition([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), false, 'Test 79');
test(canPartition([50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350]), true, 'Test 80');
test(canPartition([42,39,27,27,38,29,37,29,43,42,27,26,28,38,37,29,30,29,39,26]), true, 'Test 81');
test(canPartition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), true, 'Test 82');
test(canPartition([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), true, 'Test 83');
test(canPartition([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), true, 'Test 84');
test(canPartition([100,200,300,400,500,600,700,800,900,1000]), false, 'Test 85');
test(canPartition([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), true, 'Test 86');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

