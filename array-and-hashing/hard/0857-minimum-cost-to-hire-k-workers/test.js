// Test: 857. Minimum Cost To Hire K Workers
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { mincostToHireWorkers } = require("./solution");

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

console.log("\n857. Minimum Cost To Hire K Workers\n");

test(mincostToHireWorkers([1,2,3,4,5], [5,4,3,2,1], 3), 12.0, 'Test 1');
test(mincostToHireWorkers([1,1,1,1,1], [1,1,1,1,1], 2), 2.0, 'Test 2');
test(mincostToHireWorkers([100,200,300,400,500], [1000,2000,3000,4000,5000], 4), 10000.0, 'Test 3');
test(mincostToHireWorkers([1,1,1,1], [1,2,3,4], 2), 4.0, 'Test 4');
test(mincostToHireWorkers([100,200,300,400,500], [500,400,300,200,100], 2), 450.0, 'Test 5');
test(mincostToHireWorkers([10,10,10,10], [10,10,10,10], 4), 40.0, 'Test 6');
test(mincostToHireWorkers([3,1,10,10,1], [4,8,2,2,7], 3), 30.666666666666664, 'Test 7');
test(mincostToHireWorkers([1,2,3,4,5], [1,2,3,4,5], 4), 10.0, 'Test 8');
test(mincostToHireWorkers([10,10,10,10,10], [10,10,10,10,10], 5), 50.0, 'Test 9');
test(mincostToHireWorkers([4,1,3,2], [20,10,30,20], 2), 30.0, 'Test 10');
test(mincostToHireWorkers([6,12,10,10], [48,48,30,60], 3), 192.0, 'Test 11');
test(mincostToHireWorkers([10,20,5], [70,50,30], 2), 105.0, 'Test 12');
test(mincostToHireWorkers([15, 10, 25, 5, 30, 20, 35, 40], [150, 100, 250, 50, 300, 200, 350, 400], 4), 500.0, 'Test 13');
test(mincostToHireWorkers([100, 200, 300, 400, 500], [500, 1000, 1500, 2000, 2500], 2), 1500.0, 'Test 14');
test(mincostToHireWorkers([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6), 36.0, 'Test 15');
test(mincostToHireWorkers([100,200,300,400,500], [500,1000,1500,2000,2500], 4), 5000.0, 'Test 16');
test(mincostToHireWorkers([7,5,3,8,2], [70,50,30,80,20], 2), 50.0, 'Test 17');
test(mincostToHireWorkers([12,15,18,21,24,27,30], [60,75,90,105,120,135,150], 4), 330.0, 'Test 18');
test(mincostToHireWorkers([50, 40, 30, 20, 10], [200, 160, 120, 80, 40], 2), 120.0, 'Test 19');
test(mincostToHireWorkers([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [20, 30, 40, 50, 60, 70, 80, 90, 100, 110], 6), 420.0, 'Test 20');
test(mincostToHireWorkers([15, 20, 5, 10, 30], [105, 150, 30, 70, 210], 3), 210.0, 'Test 21');
test(mincostToHireWorkers([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 5), 250.0, 'Test 22');
test(mincostToHireWorkers([9,18,27,36,45,54,63], [81,162,243,324,405,486,567], 5), 1215.0, 'Test 23');
test(mincostToHireWorkers([8,8,8,8,8,8,8,8,8,8], [32,32,32,32,32,32,32,32,32,32], 5), 160.0, 'Test 24');
test(mincostToHireWorkers([5, 15, 25, 35, 45, 55], [35, 105, 175, 245, 315, 385], 4), 560.0, 'Test 25');
test(mincostToHireWorkers([20, 10, 30, 40, 50, 60, 70, 80, 90, 100], [140, 70, 210, 280, 350, 420, 490, 560, 630, 700], 6), 1470.0, 'Test 26');
test(mincostToHireWorkers([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], 5), 15000.0, 'Test 27');
test(mincostToHireWorkers([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), 100.0, 'Test 28');
test(mincostToHireWorkers([1,3,2,5,4,6], [1,9,4,25,16,36], 5), 75.0, 'Test 29');
test(mincostToHireWorkers([15,20,5,10,25], [120,160,40,80,200], 5), 600.0, 'Test 30');
test(mincostToHireWorkers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 8), 360.0, 'Test 31');
test(mincostToHireWorkers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225], 7), 196.0, 'Test 32');
test(mincostToHireWorkers([1,1,1,1,1,1,1,1,1,1], [1,2,3,4,5,6,7,8,9,10], 5), 25.0, 'Test 33');
test(mincostToHireWorkers([1, 3, 5, 7, 9, 11, 13], [2, 6, 10, 14, 18, 22, 26], 5), 50.0, 'Test 34');
test(mincostToHireWorkers([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7), 49.0, 'Test 35');
test(mincostToHireWorkers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 8), 3600.0, 'Test 36');
test(mincostToHireWorkers([100,200,300,400,500,600,700,800,900,1000], [100,200,300,400,500,600,700,800,900,1000], 5), 1500.0, 'Test 37');
test(mincostToHireWorkers([1, 3, 5, 7, 9, 11, 13], [2, 6, 10, 14, 18, 22, 26], 4), 32.0, 'Test 38');
test(mincostToHireWorkers([4,7,2,5,6], [32,56,16,40,48], 2), 48.0, 'Test 39');
test(mincostToHireWorkers([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 25.0, 'Test 40');
test(mincostToHireWorkers([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], [6, 12, 18, 24, 30, 36, 42, 48, 54, 60], 9), 270.0, 'Test 41');
test(mincostToHireWorkers([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 3), 6.0, 'Test 42');
test(mincostToHireWorkers([4, 5, 1, 2, 3], [40, 50, 10, 20, 30], 2), 30.0, 'Test 43');
test(mincostToHireWorkers([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [25, 50, 75, 100, 125, 150, 175, 200, 225, 250], 7), 700.0, 'Test 44');
test(mincostToHireWorkers([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 5), 1500.0, 'Test 45');
test(mincostToHireWorkers([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], [50,100,150,200,250,300,350,400,450,500,550,600,650,700,750], 8), 1800.0, 'Test 46');
test(mincostToHireWorkers([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7), 28.0, 'Test 47');
test(mincostToHireWorkers([10, 12, 14, 16, 18, 20], [70, 84, 98, 112, 126, 140], 5), 490.0, 'Test 48');
test(mincostToHireWorkers([2, 3, 5, 7, 11, 13], [14, 21, 35, 49, 77, 91], 4), 119.0, 'Test 49');
test(mincostToHireWorkers([30, 10, 40, 20, 50], [90, 30, 120, 60, 150], 3), 180.0, 'Test 50');
test(mincostToHireWorkers([2,4,6,8,10], [10,20,30,40,50], 3), 60.0, 'Test 51');
test(mincostToHireWorkers([100, 200, 300, 400, 500], [1000, 2000, 3000, 4000, 5000], 4), 10000.0, 'Test 52');
test(mincostToHireWorkers([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 25.0, 'Test 53');
test(mincostToHireWorkers([4, 5, 6, 7, 8, 9], [24, 30, 36, 42, 48, 54], 4), 132.0, 'Test 54');
test(mincostToHireWorkers([4,3,2,1], [16,12,8,4], 2), 12.0, 'Test 55');
test(mincostToHireWorkers([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [19, 17, 15, 13, 11, 9, 7, 5, 3, 1], 4), 34.46153846153846, 'Test 56');
test(mincostToHireWorkers([20, 30, 10, 40, 50], [100, 150, 50, 200, 250], 4), 500.0, 'Test 57');
test(mincostToHireWorkers([15, 25, 35, 45, 55], [105, 175, 245, 315, 385], 3), 525.0, 'Test 58');
test(mincostToHireWorkers([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 3), 30.0, 'Test 59');
test(mincostToHireWorkers([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 5), 27.0, 'Test 60');
test(mincostToHireWorkers([7, 14, 21, 28, 35, 42, 49, 56, 63], [14, 28, 42, 56, 70, 84, 98, 112, 126], 6), 294.0, 'Test 61');
test(mincostToHireWorkers([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [70, 140, 210, 280, 350, 420, 490, 560, 630, 700], 7), 1960.0, 'Test 62');
test(mincostToHireWorkers([10,20,30,40,50], [50,40,30,20,10], 3), 120.0, 'Test 63');
test(mincostToHireWorkers([4, 2, 8, 5, 10, 7], [40, 20, 80, 50, 100, 70], 4), 180.0, 'Test 64');
test(mincostToHireWorkers([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 3), 33.75, 'Test 65');
test(mincostToHireWorkers([10,20,30,40,50,60], [50,100,150,200,250,300], 6), 1050.0, 'Test 66');
test(mincostToHireWorkers([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 6), 210.0, 'Test 67');
test(mincostToHireWorkers([5,3,8,6,2], [45,30,60,48,12], 3), 100.0, 'Test 68');
test(mincostToHireWorkers([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 5), 25.0, 'Test 69');
test(mincostToHireWorkers([5, 10, 15, 20, 25, 30, 35], [50, 100, 150, 200, 250, 300, 350], 4), 500.0, 'Test 70');
test(mincostToHireWorkers([1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 3, 4, 5, 6, 7, 8], 5), 25.0, 'Test 71');
test(mincostToHireWorkers([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [700, 1400, 2100, 2800, 3500, 4200, 4900, 5600, 6300, 7000], 7), 19600.0, 'Test 72');
test(mincostToHireWorkers([15, 30, 45, 60, 75, 90, 105], [45, 90, 135, 180, 225, 270, 315], 5), 675.0, 'Test 73');
test(mincostToHireWorkers([5,2,10,15,20,1], [100,60,200,300,400,50], 3), 400.0, 'Test 74');
test(mincostToHireWorkers([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 7), 2800.0, 'Test 75');
test(mincostToHireWorkers([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000], 5), 3000.0, 'Test 76');
test(mincostToHireWorkers([100,200,150,50,250], [500,1000,750,250,1250], 3), 1500.0, 'Test 77');
test(mincostToHireWorkers([1,2,3,4,5,6,7,8,9,10], [10,20,30,40,50,60,70,80,90,100], 7), 280.0, 'Test 78');
test(mincostToHireWorkers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5), 150.0, 'Test 79');
test(mincostToHireWorkers([1,3,5,7,9,11,13,15,17,19], [5,15,25,35,45,55,65,75,85,95], 6), 180.0, 'Test 80');
test(mincostToHireWorkers([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 8), 360.0, 'Test 81');
test(mincostToHireWorkers([1, 3, 2, 4, 5], [3, 9, 6, 12, 15], 3), 18.0, 'Test 82');
test(mincostToHireWorkers([3, 6, 15, 20, 12], [9, 18, 45, 60, 36], 3), 63.0, 'Test 83');
test(mincostToHireWorkers([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 3), 9.0, 'Test 84');
test(mincostToHireWorkers([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], [14, 28, 42, 56, 70, 84, 98, 112, 126, 140, 154, 168, 182, 196, 210], 7), 392.0, 'Test 85');
test(mincostToHireWorkers([5,15,10,20,25], [75,225,150,300,375], 3), 450.0, 'Test 86');
test(mincostToHireWorkers([2,4,6,8,10], [10,20,30,40,50], 4), 100.0, 'Test 87');
test(mincostToHireWorkers([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [50, 100, 150, 200, 250, 300, 350, 400, 450, 500], 6), 1050.0, 'Test 88');
test(mincostToHireWorkers([1, 2, 4, 8, 16, 32, 64], [1, 2, 4, 8, 16, 32, 64], 4), 15.0, 'Test 89');
test(mincostToHireWorkers([3,6,9,12,15,18,21,24,27,30], [6,12,18,24,30,36,42,48,54,60], 6), 126.0, 'Test 90');
test(mincostToHireWorkers([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145], 6), 180.0, 'Test 91');
test(mincostToHireWorkers([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], [1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 5), 31.0, 'Test 92');
test(mincostToHireWorkers([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 10), 100.0, 'Test 93');
test(mincostToHireWorkers([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41], [4, 6, 10, 14, 22, 26, 34, 38, 46, 58, 62, 74, 82], 8), 154.0, 'Test 94');
test(mincostToHireWorkers([5, 8, 12, 15, 20, 25, 30], [10, 16, 24, 30, 40, 50, 60], 3), 50.0, 'Test 95');
test(mincostToHireWorkers([15, 10, 5, 25, 20], [90, 60, 30, 150, 120], 3), 180.0, 'Test 96');
test(mincostToHireWorkers([15, 25, 10, 40, 30], [105, 175, 70, 280, 210], 3), 350.0, 'Test 97');
test(mincostToHireWorkers([6, 12, 18, 24, 30, 36, 42, 48, 54, 60], [12, 24, 36, 48, 60, 72, 84, 96, 108, 120], 8), 432.0, 'Test 98');
test(mincostToHireWorkers([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [10, 40, 90, 160, 250, 360, 490, 640, 810, 1000], 6), 1260.0, 'Test 99');
test(mincostToHireWorkers([8,6,4,2,10], [96,72,48,24,120], 4), 240.0, 'Test 100');
test(mincostToHireWorkers([7,14,3,11,9], [28,56,12,44,36], 4), 120.0, 'Test 101');
test(mincostToHireWorkers([100, 200, 300, 400, 500, 600, 700], [700, 1400, 2100, 2800, 3500, 4200, 4900], 5), 10500.0, 'Test 102');
test(mincostToHireWorkers([3, 5, 2, 8, 7], [6, 10, 4, 16, 14], 3), 20.0, 'Test 103');
test(mincostToHireWorkers([5,3,10,2,4], [50,30,100,20,40], 3), 90.0, 'Test 104');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

