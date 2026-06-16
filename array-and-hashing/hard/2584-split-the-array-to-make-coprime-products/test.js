// Test: 2584. Split The Array To Make Coprime Products
// 118 test cases from LeetCodeDataset
// Run: node test.js

const { findValidSplit } = require("./solution");

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

console.log("\n2584. Split The Array To Make Coprime Products\n");

test(findValidSplit([60,1,2,3]), -1, 'Test 1');
test(findValidSplit([2,2,2,2,2,2,2,2,2,2]), -1, 'Test 2');
test(findValidSplit([2,3,5,7,11,13]), 0, 'Test 3');
test(findValidSplit([2,4,6,8,10,12]), -1, 'Test 4');
test(findValidSplit([30, 35, 14]), -1, 'Test 5');
test(findValidSplit([1,2,3,4,5,6,7,8,9,10]), 0, 'Test 6');
test(findValidSplit([60, 45, 10]), -1, 'Test 7');
test(findValidSplit([1000000, 1000000]), -1, 'Test 8');
test(findValidSplit([18,5,100]), -1, 'Test 9');
test(findValidSplit([10,20,30,40,50]), -1, 'Test 10');
test(findValidSplit([1, 2, 3, 4, 5, 6]), 0, 'Test 11');
test(findValidSplit([4,7,15,8,3,5]), -1, 'Test 12');
test(findValidSplit([4,7,8,15,3,5]), 2, 'Test 13');
test(findValidSplit([13,17,19,23,29]), 0, 'Test 14');
test(findValidSplit([7,3,5,2,10]), 0, 'Test 15');
test(findValidSplit([1,1,1,1,1,1,1,1,1,1]), 0, 'Test 16');
test(findValidSplit([1,2,3,4,5,6]), 0, 'Test 17');
test(findValidSplit([6,10,15,21,28,35]), -1, 'Test 18');
test(findValidSplit([30,30,30,30]), -1, 'Test 19');
test(findValidSplit([2,3,4,5,6,7,8,9,10,11]), 8, 'Test 20');
test(findValidSplit([100,200,300,400,500,600]), -1, 'Test 21');
test(findValidSplit([2,2,2,2]), -1, 'Test 22');
test(findValidSplit([7,11,13,17,19,23]), 0, 'Test 23');
test(findValidSplit([60,45,105,30,20]), -1, 'Test 24');
test(findValidSplit([1,1,1,1,1,1]), 0, 'Test 25');
test(findValidSplit([2, 3, 5, 7, 11]), 0, 'Test 26');
test(findValidSplit([30,30,30,30,30,30]), -1, 'Test 27');
test(findValidSplit([3,9,7,11,13]), 1, 'Test 28');
test(findValidSplit([100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110]), -1, 'Test 29');
test(findValidSplit([2*3*5*7*11, 13*17*19*23, 29*31*37*41, 43*47*53*59, 61*67*71*73, 79*83*89*97, 101*103*107*109, 113*127*131*137, 139*149*151*157, 163*167*173*179]), Error: Solution.findValidSplit[] missing 1 required positional argument: 'nums', 'Test 30');
test(findValidSplit([60, 105, 210, 315, 420, 525, 630, 735, 840, 945]), -1, 'Test 31');
test(findValidSplit([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), -1, 'Test 32');
test(findValidSplit([2*3*5*7, 11*13*17*19, 23*29*31*37, 41*43*47*53, 59*61*67*71, 73*79*83*89, 97*101*103*107, 109*113*127*131, 137*139*149*151, 157*163*167*173]), Error: Solution.findValidSplit[] missing 1 required positional argument: 'nums', 'Test 33');
test(findValidSplit([18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90]), -1, 'Test 34');
test(findValidSplit([1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097, 1103, 1109, 1117, 1123, 1129]), 0, 'Test 35');
test(findValidSplit([101*103, 107*109, 113*127, 131*137, 139*149, 151*157, 163*167, 173*179, 181*191, 193*197]), Error: Solution.findValidSplit[] missing 1 required positional argument: 'nums', 'Test 36');
test(findValidSplit([999983, 999989, 999991, 999997, 1000003, 1000033, 1000037, 1000039, 1000081, 1000099]), 0, 'Test 37');
test(findValidSplit([60, 105, 56, 21, 10, 14]), -1, 'Test 38');
test(findValidSplit([31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173]), 0, 'Test 39');
test(findValidSplit([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), -1, 'Test 40');
test(findValidSplit([2*3*5*7*11*13, 17*19*23*29*31*37, 41*43*47*53*59*61, 67*71*73*79*83*89, 97*101*103*107*109*113, 127*131*137*139*149*151, 157*163*167*173*179*181, 191*193*197*199*211*223, 227*229*233*239*241*251, 257*263*269*271*277*281]), Error: Solution.findValidSplit[] missing 1 required positional argument: 'nums', 'Test 41');
test(findValidSplit([2, 3, 4, 6, 8, 12, 18, 24, 36, 48, 72, 144]), -1, 'Test 42');
test(findValidSplit([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]), -1, 'Test 43');
test(findValidSplit([4, 6, 8, 10, 12, 14, 16, 18, 20, 22]), -1, 'Test 44');
test(findValidSplit([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), -1, 'Test 45');
test(findValidSplit([1000000, 999999, 999998, 999997, 999996]), -1, 'Test 46');
test(findValidSplit([8, 12, 18, 24, 30, 36]), -1, 'Test 47');
test(findValidSplit([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]), -1, 'Test 48');
test(findValidSplit([997*1009, 1013*1019, 1021*1031, 1033*1039, 1049*1051, 1061*1063, 1069*1087, 1091*1093, 1097*1103, 1109*1117, 1123*1129, 1151*1153, 1163*1171, 1181*1187, 1193*1201, 1213*1217, 1223*1229, 1231*1237, 1249*1259, 1277*1279]), Error: Solution.findValidSplit[] missing 1 required positional argument: 'nums', 'Test 49');
test(findValidSplit([210, 330, 420, 462, 546, 630, 714, 840, 924, 1092, 1260]), -1, 'Test 50');
test(findValidSplit([30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180]), -1, 'Test 51');
test(findValidSplit([6, 10, 14, 15, 21, 22, 26, 33, 35, 38, 39, 45, 46, 51, 55]), -1, 'Test 52');
test(findValidSplit([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), -1, 'Test 53');
test(findValidSplit([97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167]), 0, 'Test 54');
test(findValidSplit([2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3]), -1, 'Test 55');
test(findValidSplit([2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), -1, 'Test 56');
test(findValidSplit([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]), -1, 'Test 57');
test(findValidSplit([3, 9, 27, 81, 243, 729, 2187]), -1, 'Test 58');
test(findValidSplit([1000000, 500000, 250000, 125000, 62500, 31250, 15625]), -1, 'Test 59');
test(findValidSplit([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 60');
test(findValidSplit([11, 22, 33, 44, 55, 66, 77, 88, 99]), -1, 'Test 61');
test(findValidSplit([18, 24, 30, 42, 56, 70, 84, 98, 112, 126]), -1, 'Test 62');
test(findValidSplit([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 63');
test(findValidSplit([999999, 888888, 777777, 666666, 555555, 444444, 333333, 222222, 111111]), -1, 'Test 64');
test(findValidSplit([6, 10, 15, 21, 35, 70]), -1, 'Test 65');
test(findValidSplit([101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191]), 0, 'Test 66');
test(findValidSplit([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]), 0, 'Test 67');
test(findValidSplit([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]), 0, 'Test 68');
test(findValidSplit([6, 10, 15, 21, 28, 35, 42, 50, 56, 63, 70, 77, 84, 90, 91]), -1, 'Test 69');
test(findValidSplit([987654, 321654, 123456, 654321, 789012, 369258, 456789]), -1, 'Test 70');
test(findValidSplit([15, 21, 35, 14, 30, 63, 70, 90, 105, 140]), -1, 'Test 71');
test(findValidSplit([9973, 9967, 9979, 9983, 9971, 9989]), 0, 'Test 72');
test(findValidSplit([1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020]), -1, 'Test 73');
test(findValidSplit([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26]), -1, 'Test 74');
test(findValidSplit([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]), -1, 'Test 75');
test(findValidSplit([1000000, 999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991]), 8, 'Test 76');
test(findValidSplit([1024, 512, 256, 128, 64, 32]), -1, 'Test 77');
test(findValidSplit([2, 3, 4, 5, 6, 7, 8, 9, 10, 10]), -1, 'Test 78');
test(findValidSplit([60, 70, 84, 90, 105, 110, 130, 154, 165, 210, 220, 231, 286, 315, 330, 385, 462, 495, 550, 770, 840, 924, 990, 1155, 1320, 1430, 1540, 1650, 2145, 2310, 2640, 2772, 2970, 3300, 3960, 4290, 4620, 4950, 6600, 7260, 7920, 8580, 9900]), -1, 'Test 79');
test(findValidSplit([999983, 999989, 999991, 999997, 1000003, 1000009, 1000021, 1000033, 1000037, 1000039]), 0, 'Test 80');
test(findValidSplit([840, 720, 600, 480, 360, 240, 120, 60, 30, 15, 5]), -1, 'Test 81');
test(findValidSplit([1001, 2002, 3003, 4004, 5005]), -1, 'Test 82');
test(findValidSplit([2**2*3, 2**3*5, 2**2*5*7, 3**2*5, 2*3*5*7, 2**4*7, 3*5**2, 2*7**2, 3*2*5*7, 2**2*3*7, 5**2*7]), Error: Solution.findValidSplit[] missing 1 required positional argument: 'nums', 'Test 83');
test(findValidSplit([2310, 30030, 510510, 9699690, 223092870, 6469693230]), -1, 'Test 84');
test(findValidSplit([2*3*5, 7*11, 13*17, 19*23, 29*31, 37*41, 43*47]), Error: Solution.findValidSplit[] missing 1 required positional argument: 'nums', 'Test 85');
test(findValidSplit([2**10, 3**10, 5**10, 7**10, 11**10, 13**10, 17**10, 19**10, 23**10, 29**10]), Error: Solution.findValidSplit[] missing 1 required positional argument: 'nums', 'Test 86');
test(findValidSplit([60, 35, 28, 15, 45, 70]), -1, 'Test 87');
test(findValidSplit([1000000, 999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991, 999990]), -1, 'Test 88');
test(findValidSplit([99, 121, 165, 495, 605, 1210]), -1, 'Test 89');
test(findValidSplit([3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049]), -1, 'Test 90');
test(findValidSplit([121, 143, 169, 187, 209, 221, 247, 253, 299, 323, 341]), -1, 'Test 91');
test(findValidSplit([2*3, 3*5, 5*7, 7*11, 11*13, 13*17, 17*19, 19*23, 23*29, 29*31, 31*37, 37*41, 41*43, 43*47, 47*53, 53*59, 59*61, 61*67, 67*71, 71*73]), Error: Solution.findValidSplit[] missing 1 required positional argument: 'nums', 'Test 92');
test(findValidSplit([143, 169, 187, 221, 247, 299, 323, 341, 377, 391, 437, 451, 481, 493, 529]), -1, 'Test 93');
test(findValidSplit([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), 0, 'Test 94');
test(findValidSplit([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]), 0, 'Test 95');
test(findValidSplit([2*3*5, 2*7, 3*11, 5*13, 7*17, 11*19, 13*23, 17*29, 19*31, 23*37]), Error: Solution.findValidSplit[] missing 1 required positional argument: 'nums', 'Test 96');
test(findValidSplit([50, 75, 100, 125, 150, 175, 200, 225, 250, 275]), -1, 'Test 97');
test(findValidSplit([1000000, 999999, 999998, 999997, 999996, 999995]), -1, 'Test 98');
test(findValidSplit([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]), 0, 'Test 99');
test(findValidSplit([23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23]), -1, 'Test 100');
test(findValidSplit([840, 924, 1008, 1092, 1176, 1260, 1344, 1428, 1512, 1608]), -1, 'Test 101');
test(findValidSplit([100, 101, 102, 103, 104, 105, 106, 107, 108, 109]), 8, 'Test 102');
test(findValidSplit([101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]), 0, 'Test 103');
test(findValidSplit([60, 100, 150, 200, 250, 300, 350, 400, 450, 500]), -1, 'Test 104');
test(findValidSplit([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50]), -1, 'Test 105');
test(findValidSplit([84, 132, 220, 154, 385]), -1, 'Test 106');
test(findValidSplit([12, 15, 21, 25, 30, 35, 42]), -1, 'Test 107');
test(findValidSplit([2*2*3*3*5*5, 7*7*11*11*13*13, 17*17*19*19*23*23, 29*29*31*31*37*37, 41*41*43*43*47*47]), Error: Solution.findValidSplit[] missing 1 required positional argument: 'nums', 'Test 108');
test(findValidSplit([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192]), -1, 'Test 109');
test(findValidSplit([3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049, 177147]), -1, 'Test 110');
test(findValidSplit([999983, 999979, 999961, 999959, 999953, 999943]), 0, 'Test 111');
test(findValidSplit([60, 105, 140, 210, 35, 10]), -1, 'Test 112');
test(findValidSplit([42, 63, 84, 105, 126, 147]), -1, 'Test 113');
test(findValidSplit([121, 143, 169, 187, 209, 221, 247, 253, 299, 319]), -1, 'Test 114');
test(findValidSplit([60, 120, 180, 240, 300, 360, 420, 480]), -1, 'Test 115');
test(findValidSplit([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), 9, 'Test 116');
test(findValidSplit([1000000, 2000000, 3000000, 4000000, 5000000, 6000000]), -1, 'Test 117');
test(findValidSplit([210, 330, 55, 14, 22, 110]), -1, 'Test 118');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

