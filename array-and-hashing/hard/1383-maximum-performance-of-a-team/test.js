// Test: 1383. Maximum Performance Of A Team
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { maxPerformance } = require("./solution");

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

console.log("\n1383. Maximum Performance Of A Team\n");

test(maxPerformance(6, [2,10,3,1,5,8], [5,4,3,9,7,2], 2), 60, 'Test 1');
test(maxPerformance(6, [2,10,3,1,5,8], [5,4,3,9,7,2], 3), 68, 'Test 2');
test(maxPerformance(5, [4,1,12,7,8], [2,10,8,19,4], 3), 160, 'Test 3');
test(maxPerformance(1, [1], [1], 1), 1, 'Test 4');
test(maxPerformance(10, [9,7,6,5,4,3,2,1,10,8], [1,1,1,1,1,1,1,1,1,1], 5), 40, 'Test 5');
test(maxPerformance(3, [2,8,2], [2,7,1], 2), 56, 'Test 6');
test(maxPerformance(10, [1,3,5,7,9,11,13,15,17,19], [10,9,8,7,6,5,4,3,2,1], 5), 180, 'Test 7');
test(maxPerformance(5, [3,5,9,7,6], [5,3,8,6,2], 4), 96, 'Test 8');
test(maxPerformance(5, [5,4,3,2,1], [1,2,3,4,5], 3), 18, 'Test 9');
test(maxPerformance(5, [10,20,30,40,50], [50,40,30,20,10], 3), 1800, 'Test 10');
test(maxPerformance(3, [1,2,3], [3,2,1], 2), 6, 'Test 11');
test(maxPerformance(10, [10,9,8,7,6,5,4,3,2,1], [1,2,3,4,5,6,7,8,9,10], 5), 100, 'Test 12');
test(maxPerformance(6, [2,10,3,1,5,8], [5,4,3,9,7,2], 4), 72, 'Test 13');
test(maxPerformance(5, [1,1,1,1,1], [1,1,1,1,1], 5), 5, 'Test 14');
test(maxPerformance(10, [99999,99998,99997,99996,99995,99994,99993,99992,99991,99990], [100000,99999,99998,99997,99996,99995,99994,99993,99992,99991], 5), 996499717, 'Test 15');
test(maxPerformance(10, [5,15,25,35,45,55,65,75,85,95], [50,40,30,20,10,90,80,70,60,50], 3), 13650, 'Test 16');
test(maxPerformance(100, [i for i in range[1,101]], [100]*100, 50), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 17');
test(maxPerformance(100, [i for i in range[1, 101]], [i for i in range[100, 0, -1]], 60), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 18');
test(maxPerformance(50, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 10, 'Test 19');
test(maxPerformance(75, [100000] * 75, [100000] * 75, 25), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 20');
test(maxPerformance(100, [50000] * 100, [100000] * 100, 50), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 21');
test(maxPerformance(25, [10000,20000,30000,40000,50000,60000,70000,80000,90000,100000,110000,120000,130000,140000,150000,160000,170000,180000,190000,200000,210000,220000,230000,240000,250000], [250000,240000,230000,220000,210000,200000,190000,180000,170000,160000,150000,140000,130000,120000,110000,100000,90000,80000,70000,60000,50000,40000,30000,20000,10000], 15), 999999062, 'Test 22');
test(maxPerformance(90000, [100000 - i for i in range[90000]], [100000000 - i for i in range[90000]], 45000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 23');
test(maxPerformance(20, [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], [39,37,35,33,31,29,27,25,23,21,19,17,15,13,11,9,7,5,3,1], 10), 2400, 'Test 24');
test(maxPerformance(100, [100000] * 100, list[range[1, 101]], 50), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 25');
test(maxPerformance(100000, list[range[1, 100001]], list[range[100000, 0, -1]], 100000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 26');
test(maxPerformance(1000, [1]*1000, [i for i in range[1, 1001]], 10), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 27');
test(maxPerformance(50, [1] * 50, [1] * 50, 25), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 28');
test(maxPerformance(50000, [i % 100000 for i in range[50000]], [i % 100000000 for i in range[50000]], 25000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 29');
test(maxPerformance(50000, [1] * 50000, [i for i in range[1, 50001]], 50000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 30');
test(maxPerformance(500, [1]*500, [i for i in range[1, 501]], 50), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 31');
test(maxPerformance(100, [1, 2, 3, ..., 100], [100000000, 99999999, ..., 99900001], 10), Error: bad operand type for unary -: 'ellipsis', 'Test 32');
test(maxPerformance(20, [100000,90000,80000,70000,60000,50000,40000,30000,20000,10000,5000,4000,3000,2000,1000,500,400,300,200,100], [10,9,8,7,6,5,4,3,2,1,100000,90000,80000,70000,60000,50000,40000,30000,20000,10000], 10), 980000000, 'Test 33');
test(maxPerformance(5, [10,10,10,10,10], [10,10,10,10,10], 3), 300, 'Test 34');
test(maxPerformance(25, [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000, 105000, 110000, 115000, 120000, 125000], [125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5], 15), 33750000, 'Test 35');
test(maxPerformance(10, [1,1,1,1,1,1,1,1,1,1], [1,2,3,4,5,6,7,8,9,10], 5), 30, 'Test 36');
test(maxPerformance(1000, [100000] * 1000, [1] * 1000, 500), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 37');
test(maxPerformance(50, [1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,11000,12000,13000,14000,15000,16000,17000,18000,19000,20000,21000,22000,23000,24000,25000,26000,27000,28000,29000,30000,31000,32000,33000,34000,35000,36000,37000,38000,39000,40000,41000,42000,43000,44000,45000,46000,47000,48000,49000,50000], [50000,49000,48000,47000,46000,45000,44000,43000,42000,41000,40000,39000,38000,37000,36000,35000,34000,33000,32000,31000,30000,29000,28000,27000,26000,25000,24000,23000,22000,21000,20000,19000,18000,17000,16000,15000,14000,13000,12000,11000,10000,9000,8000,7000,6000,5000,4000,3000,2000,1000], 25), 499999937, 'Test 38');
test(maxPerformance(8, [100000,90000,80000,70000,60000,50000,40000,30000], [100,150,200,250,300,350,400,450], 4), 55000000, 'Test 39');
test(maxPerformance(15, [2,4,5,7,8,10,12,15,18,20,25,30,35,40,45], [3,5,2,8,7,4,6,9,10,11,13,12,15,14,16], 6), 2145, 'Test 40');
test(maxPerformance(50, [100000] * 50, [1] * 50, 25), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 41');
test(maxPerformance(100, [100000]*100, [100000]*100, 50), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 42');
test(maxPerformance(100000, [100000] * 100000, [100000] * 100000, 50000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 43');
test(maxPerformance(75000, [i*2 for i in range[1, 75001]], [i for i in range[1, 75001]], 30000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 44');
test(maxPerformance(50000, [100000]*50000, [i for i in range[1,50001]], 25000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 45');
test(maxPerformance(50000, [i for i in range[1, 50001]], [1 for i in range[50000]], 50000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 46');
test(maxPerformance(15, [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75], [100,95,90,85,80,75,70,65,60,55,50,45,40,35,30], 8), 15300, 'Test 47');
test(maxPerformance(1000, [100000]*1000, [100000000]*1000, 500), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 48');
test(maxPerformance(100000, [i for i in range[100000]], [i for i in range[100000, 0, -1]], 30000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 49');
test(maxPerformance(1000, [i for i in range[1, 1001]], [i for i in range[1000, 0, -1]], 100), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 50');
test(maxPerformance(95000, [i*10 for i in range[1, 9501]], [100000-i*10 for i in range[1, 9501]], 4500), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 51');
test(maxPerformance(15, [150,140,130,120,110,100,90,80,70,60,50,40,30,20,10], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5), 2450, 'Test 52');
test(maxPerformance(1000, [random.randint[1, 100000] for _ in range[1000]], [random.randint[1, 100000] for _ in range[1000]], 250), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 53');
test(maxPerformance(50, [100000,90000,80000,70000,60000,50000,40000,30000,20000,10000,5000,4000,3000,2000,1000,500,400,300,200,100,99,88,77,66,55,44,33,22,11,1,2,3,4,5,6,7,8,9,10,100,200,300,400,500,600,700,800,900], [1,2,3,4,5,6,7,8,9,10,100,200,300,400,500,600,700,800,900,1000,10000,9000,8000,7000,6000,5000,4000,3000,2000,1000,999,888,777,666,555,444,333,222,111,11,22,33,44,55,66,77,88,99,100], 15), 2388600, 'Test 54');
test(maxPerformance(100, [10] * 50 + [5] * 50, [1] * 25 + [2] * 25 + [3] * 25 + [4] * 25, 50), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 55');
test(maxPerformance(20, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 10), 680, 'Test 56');
test(maxPerformance(50, [50000] * 25 + [1] * 25, [1] * 25 + [100000] * 25, 20), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 57');
test(maxPerformance(25, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 15), 1350, 'Test 58');
test(maxPerformance(100, [100000, 90000] * 50, [100000, 1] * 50, 30), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 59');
test(maxPerformance(20, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], [200, 190, 180, 170, 160, 150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 10), 68000, 'Test 60');
test(maxPerformance(50, [100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400,2500,2600,2700,2800,2900,3000,3100,3200,3300,3400,3500,3600,3700,3800,3900,4000,4100,4200,4300,4400,4500,4600,4700,4800,4900,5000], [5000,4900,4800,4700,4600,4500,4400,4300,4200,4100,4000,3900,3800,3700,3600,3500,3400,3300,3200,3100,3000,2900,2800,2700,2600,2500,2400,2300,2200,2100,2000,1900,1800,1700,1600,1500,1400,1300,1200,1100,1000,900,800,700,600,500,400,300,200,100], 25), 95000000, 'Test 61');
test(maxPerformance(12, [100,200,300,400,500,600,700,800,900,1000,1100,1200], [1,3,2,5,4,7,6,9,8,11,10,12], 6), 40000, 'Test 62');
test(maxPerformance(1000, [i for i in range[1, 1001]], [i for i in range[100000000, 99900001, -100000]], 50), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 63');
test(maxPerformance(50, [99999] * 50, [100000] * 50, 25), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 64');
test(maxPerformance(100, [i*10 for i in range[1, 101]], [i*10 for i in range[1, 101]], 30), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 65');
test(maxPerformance(50, [100000]*50, [100000000, 50000000, 25000000, 12500000, 6250000, 3125000, 1562500, 781250, 390625, 195312, 97656, 48828, 24414, 12207, 6103, 3051, 1525, 762, 381, 190, 95, 47, 23, 11, 5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 25), Error: Solution.maxPerformance[] missing 1 required positional argument: 'speed', 'Test 66');
test(maxPerformance(1000, [1] * 1000, [random.randint[1, 100000] for _ in range[1000]], 1000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 67');
test(maxPerformance(10, [100,200,300,400,500,600,700,800,900,1000], [10,9,8,7,6,5,4,3,2,1], 2), 5500, 'Test 68');
test(maxPerformance(15, [5,3,8,2,7,6,4,9,1,11,10,12,13,14,15], [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 5), 290, 'Test 69');
test(maxPerformance(100, [i for i in range[1, 101]], [i for i in range[100, 0, -1]], 75), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 70');
test(maxPerformance(60000, [i*3 for i in range[1, 20001]] + [i*4 for i in range[20001, 40001]] + [i*5 for i in range[40001, 60001]], [i for i in range[1, 60001]], 15000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 71');
test(maxPerformance(100, [1, 100000] * 50, [100000, 1] * 50, 50), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 72');
test(maxPerformance(100000, [100000-i for i in range[100000]], [i for i in range[1, 100001]], 5000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 73');
test(maxPerformance(10, [1, 100000, 100, 1000, 10000, 10, 100000, 10000, 1000, 1], [100000, 1, 10000, 100, 1000, 100000, 1000, 100, 10, 1], 5), 110111000, 'Test 74');
test(maxPerformance(50000, [i for i in range[1, 50001]], [i for i in range[1, 50001]], 10000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 75');
test(maxPerformance(100000, [i*10 for i in range[1, 10001]], [100000-i*10 for i in range[1, 10001]], 5000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 76');
test(maxPerformance(25, [1, 2, 3, 4, 5] * 5, [5, 4, 3, 2, 1] * 5, 10), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 77');
test(maxPerformance(30, [1] * 10 + [10] * 10 + [100] * 10, [100] * 10 + [10] * 10 + [1] * 10, 15), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 78');
test(maxPerformance(50, [100000]*50, [100000000]*50, 25), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 79');
test(maxPerformance(20, [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100], [100,95,90,85,80,75,70,65,60,55,50,45,40,35,30,25,20,15,10,5], 10), 17000, 'Test 80');
test(maxPerformance(100, [100000]*100, [100000000]*100, 50), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 81');
test(maxPerformance(15, [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 7), 2940, 'Test 82');
test(maxPerformance(500, [i for i in range[1, 501]], [i for i in range[100000000, 99900001, -200000]], 250), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 83');
test(maxPerformance(50000, [i for i in range[1, 50001]], [100000 - i for i in range[50000]], 10000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 84');
test(maxPerformance(100, list[range[1, 101]], [1] * 100, 20), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 85');
test(maxPerformance(100, [100]*100, [i for i in range[1,101]], 30), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 86');
test(maxPerformance(90000, [90000-i for i in range[90000]], [i for i in range[1, 90001]], 20000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 87');
test(maxPerformance(1000, [1] * 1000, [100000] * 1000, 500), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 88');
test(maxPerformance(10000, list[range[1, 10001]] + list[range[10000, 0, -1]], list[range[10000, 0, -1]] + list[range[1, 10001]], 5000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 89');
test(maxPerformance(100000, [i for i in range[1, 100001]], [i*5 for i in range[1, 100001]], 5000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 90');
test(maxPerformance(1000, [i for i in range[1, 1001]], [100000000]*1000, 10), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 91');
test(maxPerformance(80, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] * 8, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] * 8, 40), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 92');
test(maxPerformance(100, [i for i in range[100, 0, -1]], [i for i in range[1, 101]], 70), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 93');
test(maxPerformance(100, [100000]*100, [100000000]*100, 10), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 94');
test(maxPerformance(200, [100000] * 100 + [1] * 100, [1] * 100 + [100000] * 100, 100), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 95');
test(maxPerformance(50, [100000]*50, [i for i in range[1, 51]], 20), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 96');
test(maxPerformance(20, [100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000], [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 10), 68000, 'Test 97');
test(maxPerformance(75, [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500,510,520,530,540,550,560,570,580,590,600,610,620,630,640,650,660,670,680,690,700,710,720,730,740,750], [750,740,730,720,710,700,690,680,670,660,650,640,630,620,610,600,590,580,570,560,550,540,530,520,510,500,490,480,470,460,450,440,430,420,410,400,390,380,370,360,350,340,330,320,310,300,290,280,270,260,250,240,230,220,210,200,190,180,170,160,150,140,130,120,110,100,90,80,70,60,50,40,30,20,10], 50), 3315000, 'Test 98');
test(maxPerformance(1000, [100000]*500 + [50000]*500, [100000000]*1000, 500), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 99');
test(maxPerformance(100, [98765] * 100, [12345] * 100, 50), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 100');
test(maxPerformance(50000, [i for i in range[1,50001]], [100000]*50000, 30000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 101');
test(maxPerformance(1000, [random.randint[1, 100000] for _ in range[1000]], [1] * 1000, 500), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 102');
test(maxPerformance(20000, [1]*20000, [i for i in range[1, 20001]], 5000), Error: Solution.maxPerformance[] missing 2 required positional arguments: 'speed' and 'efficiency', 'Test 103');

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
