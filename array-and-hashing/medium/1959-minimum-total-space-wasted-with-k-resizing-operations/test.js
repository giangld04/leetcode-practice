// Test: 1959. Minimum Total Space Wasted With K Resizing Operations
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { minSpaceWastedKResizing } = require("./solution");

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

console.log("\n1959. Minimum Total Space Wasted With K Resizing Operations\n");

test(minSpaceWastedKResizing([10,10,10,10,10], 2), 0, 'Test 1');
test(minSpaceWastedKResizing([5,10,15,20,25,30], 3), 10, 'Test 2');
test(minSpaceWastedKResizing([10,20,30], 1), 10, 'Test 3');
test(minSpaceWastedKResizing([1,3,2,4,5,6,7,8,9,10], 0), 45, 'Test 4');
test(minSpaceWastedKResizing([1,3,2,4,5,6,7], 3), 3, 'Test 5');
test(minSpaceWastedKResizing([100,200,150,300,200,350], 2), 250, 'Test 6');
test(minSpaceWastedKResizing([10,20,15,30,20], 2), 15, 'Test 7');
test(minSpaceWastedKResizing([1,3,5,7,9,11,13,15,17,19], 0), 90, 'Test 8');
test(minSpaceWastedKResizing([1,2,3,4,5], 4), 0, 'Test 9');
test(minSpaceWastedKResizing([1,1,1,1,1,1,1,1,1,1], 0), 0, 'Test 10');
test(minSpaceWastedKResizing([100,200,300,400,500], 0), 1000, 'Test 11');
test(minSpaceWastedKResizing([1,2,3,4,5,6,7,8,9,10], 3), 8, 'Test 12');
test(minSpaceWastedKResizing([10,20,30,40,50,60,70,80,90,100], 0), 450, 'Test 13');
test(minSpaceWastedKResizing([1000000,500000,250000,125000,62500], 4), 0, 'Test 14');
test(minSpaceWastedKResizing([1,3,5,7,9,11,13,15,17,19], 4), 10, 'Test 15');
test(minSpaceWastedKResizing([5,8,6,10], 1), 5, 'Test 16');
test(minSpaceWastedKResizing([1,3,5,7,9], 4), 0, 'Test 17');
test(minSpaceWastedKResizing([1,1,1,1,1,1,1,1,1,1], 9), 0, 'Test 18');
test(minSpaceWastedKResizing([10,20,30,40,50,60,70,80,90,100], 9), 0, 'Test 19');
test(minSpaceWastedKResizing([5,5,5,5,5], 0), 0, 'Test 20');
test(minSpaceWastedKResizing([1000000,1000000,1000000], 2), 0, 'Test 21');
test(minSpaceWastedKResizing([10,20,30,40,50,60,70,80,90,100], 5), 40, 'Test 22');
test(minSpaceWastedKResizing([10,20], 0), 10, 'Test 23');
test(minSpaceWastedKResizing([1,2,3,4,5,6,7,8,9,10], 4), 5, 'Test 24');
test(minSpaceWastedKResizing([10,10,10,10,10,10,10,10,10,10], 5), 0, 'Test 25');
test(minSpaceWastedKResizing([20,10,30,25,40], 2), 15, 'Test 26');
test(minSpaceWastedKResizing([5,5,5,5,5,5], 0), 0, 'Test 27');
test(minSpaceWastedKResizing([20,10,30,25,15], 2), 15, 'Test 28');
test(minSpaceWastedKResizing([1,1,2,2,3,3,4,4,5,5], 2), 4, 'Test 29');
test(minSpaceWastedKResizing([300, 200, 100, 400, 300, 200, 500, 400, 300, 600, 500, 400, 700, 600, 500, 800, 700, 600, 900, 800, 700, 1000, 900, 800, 1100, 1000, 900, 1200, 1100, 1000, 1300, 1200, 1100, 1400, 1300, 1200, 1500, 1400, 1300, 1600, 1500, 1400, 1700, 1600, 1500, 1800, 1700, 1600, 1900, 1800, 1700, 2000, 1900, 1800, 2100, 2000, 1900, 2200, 2100, 2000, 2300, 2200, 2100, 2400, 2300, 2200], 30), 4800, 'Test 30');
test(minSpaceWastedKResizing([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 100), Infinity, 'Test 31');
test(minSpaceWastedKResizing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 14), 15, 'Test 32');
test(minSpaceWastedKResizing([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384], 10), 33, 'Test 33');
test(minSpaceWastedKResizing([3,5,4,7,8,6,9], 2), 6, 'Test 34');
test(minSpaceWastedKResizing([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 10), 18, 'Test 35');
test(minSpaceWastedKResizing([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 5), 120, 'Test 36');
test(minSpaceWastedKResizing([20, 15, 10, 5, 15, 20, 25, 30, 35, 40, 45, 50], 2), 65, 'Test 37');
test(minSpaceWastedKResizing([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 4), 50, 'Test 38');
test(minSpaceWastedKResizing([300, 200, 100, 50, 25, 125, 62, 31, 15, 7, 3, 1], 5), 186, 'Test 39');
test(minSpaceWastedKResizing([100, 200, 150, 300, 250, 350, 400], 2), 250, 'Test 40');
test(minSpaceWastedKResizing([50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 5), 50, 'Test 41');
test(minSpaceWastedKResizing([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 9), 0, 'Test 42');
test(minSpaceWastedKResizing([10, 20, 30, 25, 40, 35, 50, 45, 60, 55], 4), 30, 'Test 43');
test(minSpaceWastedKResizing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 0), 190, 'Test 44');
test(minSpaceWastedKResizing([500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000], 9), 5000, 'Test 45');
test(minSpaceWastedKResizing([500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500], 0), 0, 'Test 46');
test(minSpaceWastedKResizing([10, 20, 10, 20, 10, 20, 10, 20, 10, 20], 3), 30, 'Test 47');
test(minSpaceWastedKResizing([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], 4), 90, 'Test 48');
test(minSpaceWastedKResizing([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 5), 24, 'Test 49');
test(minSpaceWastedKResizing([1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100], 9), 495, 'Test 50');
test(minSpaceWastedKResizing([1000000, 999999, 999998, 999997, 999996, 999995, 999994], 3), 3, 'Test 51');
test(minSpaceWastedKResizing([1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000], 0), 0, 'Test 52');
test(minSpaceWastedKResizing([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71], 9), 29, 'Test 53');
test(minSpaceWastedKResizing([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 4), 50, 'Test 54');
test(minSpaceWastedKResizing([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 200), Infinity, 'Test 55');
test(minSpaceWastedKResizing([20, 10, 30, 25, 40, 35, 50, 45, 60, 55, 70, 65, 80, 75, 90, 85, 100, 95, 110, 105], 3), 215, 'Test 56');
test(minSpaceWastedKResizing([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 0, 'Test 57');
test(minSpaceWastedKResizing([100, 200, 150, 100, 300, 250, 200, 350, 400, 300], 3), 450, 'Test 58');
test(minSpaceWastedKResizing([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288], 10), 1985, 'Test 59');
test(minSpaceWastedKResizing([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 0), 1900, 'Test 60');
test(minSpaceWastedKResizing([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 9), 90, 'Test 61');
test(minSpaceWastedKResizing([1000000, 500000, 750000, 250000, 100000], 2), 400000, 'Test 62');
test(minSpaceWastedKResizing([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 9), 0, 'Test 63');
test(minSpaceWastedKResizing([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 19), 0, 'Test 64');
test(minSpaceWastedKResizing([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 0), 0, 'Test 65');
test(minSpaceWastedKResizing([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 4), 150, 'Test 66');
test(minSpaceWastedKResizing([10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 35, 30, 40, 35, 45], 6), 45, 'Test 67');
test(minSpaceWastedKResizing([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100), 0, 'Test 68');
test(minSpaceWastedKResizing([1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812, 3906, 1953, 976, 488, 244, 122, 61, 30, 15, 7, 3, 1], 5), 140629, 'Test 69');
test(minSpaceWastedKResizing([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25], 6), 12, 'Test 70');
test(minSpaceWastedKResizing([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288], 5), 73729, 'Test 71');
test(minSpaceWastedKResizing([100, 200, 150, 300, 250, 400, 350], 2), 250, 'Test 72');
test(minSpaceWastedKResizing([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0), 0, 'Test 73');
test(minSpaceWastedKResizing([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 5), 120, 'Test 74');
test(minSpaceWastedKResizing([100, 200, 150, 300, 250, 400, 350, 500], 2), 450, 'Test 75');
test(minSpaceWastedKResizing([10, 10, 20, 20, 30, 30, 40, 40, 50, 50, 60, 60, 70, 70, 80, 80, 90, 90, 100, 100], 5), 80, 'Test 76');
test(minSpaceWastedKResizing([10, 20, 30, 20, 10, 40, 30, 20, 50, 40, 30, 20, 60, 50, 40, 30], 5), 130, 'Test 77');
test(minSpaceWastedKResizing([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 9), 977778, 'Test 78');
test(minSpaceWastedKResizing([200, 150, 100, 50, 150, 200, 250, 300, 350, 400], 3), 350, 'Test 79');
test(minSpaceWastedKResizing([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000], 0), 0, 'Test 80');
test(minSpaceWastedKResizing([500000, 400000, 300000, 200000, 100000, 100000, 200000, 300000, 400000, 500000, 100000, 200000, 300000, 400000, 500000, 100000, 200000, 300000, 400000, 500000], 7), 1400000, 'Test 81');
test(minSpaceWastedKResizing([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 5), 81, 'Test 82');
test(minSpaceWastedKResizing([15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155, 165, 175, 185, 195, 205], 7), 160, 'Test 83');
test(minSpaceWastedKResizing([1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812, 3906, 1953, 976, 488, 244, 122, 61, 30, 15, 7, 3, 1], 10), 3788, 'Test 84');
test(minSpaceWastedKResizing([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000], 5), 0, 'Test 85');
test(minSpaceWastedKResizing([20, 10, 30, 5, 40, 25, 60, 35, 70, 45, 80, 55, 90, 65, 100, 75, 110, 85, 120, 95, 130, 105, 140, 115, 150, 125, 160, 135, 170, 145, 180, 155], 8), 515, 'Test 86');
test(minSpaceWastedKResizing([10, 20, 10, 30, 10, 20, 30, 40, 50], 3), 50, 'Test 87');
test(minSpaceWastedKResizing([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100), 0, 'Test 88');
test(minSpaceWastedKResizing([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100], 25), 48, 'Test 89');
test(minSpaceWastedKResizing([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 4), 10, 'Test 90');
test(minSpaceWastedKResizing([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 4), 488889, 'Test 91');
test(minSpaceWastedKResizing([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000], 0), 0, 'Test 92');
test(minSpaceWastedKResizing([100, 200, 150, 300, 250, 400], 2), 200, 'Test 93');
test(minSpaceWastedKResizing([10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 9), 45, 'Test 94');
test(minSpaceWastedKResizing([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5, 9], 25), 119, 'Test 95');
test(minSpaceWastedKResizing([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300], 15), 140, 'Test 96');
test(minSpaceWastedKResizing([100, 200, 150, 100, 250, 200, 150, 300], 2), 400, 'Test 97');
test(minSpaceWastedKResizing([200, 100, 200, 100, 200, 100, 200, 100, 200, 100], 4), 300, 'Test 98');
test(minSpaceWastedKResizing([1000000, 999999, 999998, 999997, 999996], 0), 10, 'Test 99');
test(minSpaceWastedKResizing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], 10), 90, 'Test 100');
test(minSpaceWastedKResizing([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 2), 1200, 'Test 101');
test(minSpaceWastedKResizing([500, 400, 300, 200, 100, 50, 25, 10, 5, 2, 1, 1, 2, 5, 10, 25, 50, 100, 200, 300, 400, 500], 10), 264, 'Test 102');
test(minSpaceWastedKResizing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15), 4, 'Test 103');
test(minSpaceWastedKResizing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), 9, 'Test 104');
test(minSpaceWastedKResizing([10, 20, 30, 25, 40, 35, 50, 45, 60, 55, 70, 65, 80, 75, 90, 85, 100, 95, 110, 105, 120, 115, 130, 125, 140, 135, 150, 145, 160, 155, 170, 165, 180, 175, 190, 185, 200, 195, 210, 205, 220, 215, 230, 225, 240, 235, 250, 245, 260, 255, 270, 265, 280, 275, 290, 285, 300, 295, 310, 305, 320, 315, 330, 325, 340, 335, 350, 345, 360, 355, 370, 365, 380, 375, 390, 385, 400, 395, 410, 405], 100), Infinity, 'Test 105');
test(minSpaceWastedKResizing([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 10), 90, 'Test 106');
test(minSpaceWastedKResizing([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 5), 8, 'Test 107');
test(minSpaceWastedKResizing([100, 90, 110, 80, 120, 70, 130, 60, 140, 50, 150, 40, 160, 30, 170, 20, 180, 10, 190, 0], 5), 820, 'Test 108');
test(minSpaceWastedKResizing([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31], 7), 16, 'Test 109');
test(minSpaceWastedKResizing([10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20], 10), 100, 'Test 110');
test(minSpaceWastedKResizing([10, 20, 15, 30, 20, 25, 35, 40, 45, 50], 4), 30, 'Test 111');
test(minSpaceWastedKResizing([1, 10, 100, 1000, 10000, 100000, 1000000], 5), 9, 'Test 112');
test(minSpaceWastedKResizing([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 0), 450, 'Test 113');
test(minSpaceWastedKResizing([9, 8, 7, 6, 5, 4, 3, 2, 1], 3), 6, 'Test 114');
test(minSpaceWastedKResizing([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 5), 0, 'Test 115');
test(minSpaceWastedKResizing([20, 15, 10, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85], 5), 100, 'Test 116');
test(minSpaceWastedKResizing([1000, 2000, 1500, 3000, 2500, 4000, 3500, 5000, 4500, 6000], 5), 2000, 'Test 117');
test(minSpaceWastedKResizing([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 0), 0, 'Test 118');
test(minSpaceWastedKResizing([9, 8, 7, 6, 5, 4, 3, 2, 1], 2), 9, 'Test 119');
test(minSpaceWastedKResizing([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 0, 'Test 120');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

