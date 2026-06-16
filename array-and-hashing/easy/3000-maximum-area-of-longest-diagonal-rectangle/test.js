// Test: 3000. Maximum Area Of Longest Diagonal Rectangle
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { areaOfMaxDiagonal } = require("./solution");

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

console.log("\n3000. Maximum Area Of Longest Diagonal Rectangle\n");

test(areaOfMaxDiagonal([[5,12],[13,88],[20,21]]), 1144, 'Test 1');
test(areaOfMaxDiagonal([[6,8],[8,6],[10,24]]), 240, 'Test 2');
test(areaOfMaxDiagonal([[9,3],[8,6]]), 48, 'Test 3');
test(areaOfMaxDiagonal([[7,24],[24,7],[10,10]]), 168, 'Test 4');
test(areaOfMaxDiagonal([[1,1],[1,1],[1,1]]), 1, 'Test 5');
test(areaOfMaxDiagonal([[100,1],[1,100]]), 100, 'Test 6');
test(areaOfMaxDiagonal([[1,2],[2,1],[3,4],[4,3]]), 12, 'Test 7');
test(areaOfMaxDiagonal([[5,12],[12,5],[8,8]]), 60, 'Test 8');
test(areaOfMaxDiagonal([[10,10],[15,15],[20,20]]), 400, 'Test 9');
test(areaOfMaxDiagonal([[10,24],[24,10],[15,20]]), 240, 'Test 10');
test(areaOfMaxDiagonal([[1,1],[2,2],[3,3]]), 9, 'Test 11');
test(areaOfMaxDiagonal([[5,12],[12,5],[8,15]]), 120, 'Test 12');
test(areaOfMaxDiagonal([[10,10],[10,10],[10,10]]), 100, 'Test 13');
test(areaOfMaxDiagonal([[5,12],[12,5],[8,6]]), 60, 'Test 14');
test(areaOfMaxDiagonal([[3,4],[4,3]]), 12, 'Test 15');
test(areaOfMaxDiagonal([[5,12],[12,5],[8,15],[15,8],[7,24],[24,7],[9,40],[40,9],[11,60],[60,11]]), 660, 'Test 16');
test(areaOfMaxDiagonal([[9, 40], [40, 9], [12, 35], [35, 12], [15, 36], [36, 15]]), 360, 'Test 17');
test(areaOfMaxDiagonal([[20, 21], [19, 22], [21, 20], [22, 19]]), 418, 'Test 18');
test(areaOfMaxDiagonal([[48, 55], [60, 80], [33, 56], [77, 36]]), 4800, 'Test 19');
test(areaOfMaxDiagonal([[99,1],[1,99],[45,55]]), 99, 'Test 20');
test(areaOfMaxDiagonal([[10, 24], [24, 10], [7, 24], [24, 7]]), 240, 'Test 21');
test(areaOfMaxDiagonal([[12, 5], [7, 24], [9, 40]]), 360, 'Test 22');
test(areaOfMaxDiagonal([[99,1],[1,99],[49,51],[51,49],[50,50],[33,66],[66,33]]), 99, 'Test 23');
test(areaOfMaxDiagonal([[10,10],[15,20],[20,15],[10,25],[25,10]]), 250, 'Test 24');
test(areaOfMaxDiagonal([[60, 80], [80, 60], [48, 55], [55, 48]]), 4800, 'Test 25');
test(areaOfMaxDiagonal([[20, 21], [21, 20], [15, 20], [20, 15], [18, 24], [24, 18]]), 432, 'Test 26');
test(areaOfMaxDiagonal([[10, 24], [7, 24], [24, 10]]), 240, 'Test 27');
test(areaOfMaxDiagonal([[4,1],[1,4],[3,5],[5,3],[2,6],[6,2],[7,1],[1,7],[8,2],[2,8]]), 16, 'Test 28');
test(areaOfMaxDiagonal([[50,50],[40,60],[60,40],[30,70],[70,30]]), 2100, 'Test 29');
test(areaOfMaxDiagonal([[12, 16], [15, 20], [7, 24], [8, 15]]), 300, 'Test 30');
test(areaOfMaxDiagonal([[66,68],[67,67],[65,69],[68,66],[69,65]]), 4485, 'Test 31');
test(areaOfMaxDiagonal([[99,1],[1,99],[50,50],[45,45],[55,55]]), 99, 'Test 32');
test(areaOfMaxDiagonal([[1,100],[100,1],[50,50],[25,75],[75,25],[60,80],[80,60]]), 100, 'Test 33');
test(areaOfMaxDiagonal([[45,55],[55,45],[30,70],[70,30],[60,60],[20,80],[80,20],[10,90],[90,10]]), 900, 'Test 34');
test(areaOfMaxDiagonal([[3, 4], [4, 3], [5, 12], [12, 5], [8, 15], [15, 8]]), 120, 'Test 35');
test(areaOfMaxDiagonal([[7,24],[24,7],[3,4],[4,3]]), 168, 'Test 36');
test(areaOfMaxDiagonal([[50, 50], [51, 49], [49, 51], [30, 40], [40, 30], [25, 60], [60, 25]]), 2499, 'Test 37');
test(areaOfMaxDiagonal([[10,10],[20,20],[30,30],[40,40],[50,50],[60,60],[70,70],[80,80],[90,90]]), 8100, 'Test 38');
test(areaOfMaxDiagonal([[20,21],[21,20],[19,22],[22,19],[18,23],[23,18]]), 414, 'Test 39');
test(areaOfMaxDiagonal([[10,10],[11,11],[12,12],[13,13],[14,14],[15,15]]), 225, 'Test 40');
test(areaOfMaxDiagonal([[80,15],[15,80],[75,20],[20,75],[70,25],[25,70]]), 1200, 'Test 41');
test(areaOfMaxDiagonal([[99, 1], [1, 99], [45, 45], [23, 77]]), 99, 'Test 42');
test(areaOfMaxDiagonal([[50,50],[51,51],[49,49],[48,48],[52,52],[53,53],[54,54]]), 2916, 'Test 43');
test(areaOfMaxDiagonal([[10,1],[9,12],[12,9],[8,15],[15,8],[7,18],[18,7]]), 126, 'Test 44');
test(areaOfMaxDiagonal([[10,6],[6,10],[8,15],[15,8],[12,5],[5,12]]), 120, 'Test 45');
test(areaOfMaxDiagonal([[99, 1], [1, 99], [45, 45], [50, 50]]), 99, 'Test 46');
test(areaOfMaxDiagonal([[33,56],[56,33],[45,60],[60,45],[28,96],[96,28],[55,72],[72,55]]), 2688, 'Test 47');
test(areaOfMaxDiagonal([[50, 50], [40, 60], [30, 70], [20, 80]]), 1600, 'Test 48');
test(areaOfMaxDiagonal([[50,50],[60,80],[80,60],[45,45],[70,70]]), 4800, 'Test 49');
test(areaOfMaxDiagonal([[10,24],[24,10],[15,20],[20,15],[12,35],[35,12],[16,30],[30,16],[18,24],[24,18]]), 420, 'Test 50');
test(areaOfMaxDiagonal([[8,6],[6,8],[5,5],[7,7],[9,9]]), 81, 'Test 51');
test(areaOfMaxDiagonal([[1,100],[100,1],[50,50],[75,25],[25,75]]), 100, 'Test 52');
test(areaOfMaxDiagonal([[7, 24], [24, 7], [8, 15], [15, 8], [3, 4], [4, 3], [10, 24], [24, 10]]), 240, 'Test 53');
test(areaOfMaxDiagonal([[1,100],[100,1],[50,50],[30,70],[70,30],[20,80],[80,20],[10,90],[90,10],[45,55],[55,45],[60,60],[25,60],[60,25]]), 100, 'Test 54');
test(areaOfMaxDiagonal([[33, 56], [56, 33], [40, 42], [42, 40], [48, 55], [55, 48]]), 2640, 'Test 55');
test(areaOfMaxDiagonal([[8, 15], [15, 8], [7, 24], [24, 7], [5, 12], [12, 5], [9, 40], [40, 9]]), 360, 'Test 56');
test(areaOfMaxDiagonal([[1,2],[2,1],[3,4],[4,3],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]]), 100, 'Test 57');
test(areaOfMaxDiagonal([[99,1],[1,99],[50,50],[60,80],[80,60]]), 4800, 'Test 58');
test(areaOfMaxDiagonal([[5, 12], [12, 5], [8, 15], [15, 8]]), 120, 'Test 59');
test(areaOfMaxDiagonal([[8,15],[15,8],[7,24],[24,7],[12,16],[16,12],[9,40],[40,9],[6,72],[72,6]]), 432, 'Test 60');
test(areaOfMaxDiagonal([[97,1],[1,97],[98,2],[2,98],[50,50]]), 196, 'Test 61');
test(areaOfMaxDiagonal([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16]]), 240, 'Test 62');
test(areaOfMaxDiagonal([[15,20],[20,15],[25,25]]), 625, 'Test 63');
test(areaOfMaxDiagonal([[48, 55], [55, 48], [60, 80], [80, 60]]), 4800, 'Test 64');
test(areaOfMaxDiagonal([[45,55],[55,45],[40,60],[60,40],[35,65],[65,35]]), 2275, 'Test 65');
test(areaOfMaxDiagonal([[6,8],[8,6],[10,24],[24,10],[15,20],[20,15]]), 240, 'Test 66');
test(areaOfMaxDiagonal([[6, 8], [8, 6], [5, 12], [12, 5], [9, 40], [40, 9], [35, 12], [12, 35], [7, 24], [24, 7]]), 360, 'Test 67');
test(areaOfMaxDiagonal([[99, 1], [1, 99], [90, 40], [40, 90], [50, 50], [60, 60]]), 99, 'Test 68');
test(areaOfMaxDiagonal([[33, 56], [56, 33], [48, 55], [55, 48], [60, 80], [80, 60], [77, 36], [36, 77]]), 4800, 'Test 69');
test(areaOfMaxDiagonal([[30,40],[40,30],[25,50],[50,25],[20,60],[60,20]]), 1200, 'Test 70');
test(areaOfMaxDiagonal([[1,100],[100,1],[50,50],[40,60],[60,40],[30,70],[70,30]]), 100, 'Test 71');
test(areaOfMaxDiagonal([[10,24],[24,10],[15,20],[20,15],[7,24],[24,7]]), 240, 'Test 72');
test(areaOfMaxDiagonal([[3, 4], [6, 8], [5, 12], [8, 15]]), 120, 'Test 73');
test(areaOfMaxDiagonal([[10,10],[20,20],[30,30],[40,40],[50,50],[60,60]]), 3600, 'Test 74');
test(areaOfMaxDiagonal([[33,56],[56,33],[28,45],[45,28],[60,80],[80,60]]), 4800, 'Test 75');
test(areaOfMaxDiagonal([[33,56],[56,33],[40,40],[30,40],[40,30]]), 1848, 'Test 76');
test(areaOfMaxDiagonal([[10, 24], [7, 24], [24, 10], [15, 20], [30, 40], [25, 60], [60, 25]]), 1500, 'Test 77');
test(areaOfMaxDiagonal([[50, 50], [40, 80], [60, 40], [30, 70]]), 3200, 'Test 78');
test(areaOfMaxDiagonal([[99, 1], [1, 99], [50, 50], [40, 70], [70, 40]]), 99, 'Test 79');
test(areaOfMaxDiagonal([[12,16],[16,12],[10,10],[20,20]]), 400, 'Test 80');
test(areaOfMaxDiagonal([[10, 10], [15, 15], [20, 20], [25, 25], [30, 30]]), 900, 'Test 81');
test(areaOfMaxDiagonal([[30,40],[40,30],[35,35],[25,25],[45,45]]), 2025, 'Test 82');
test(areaOfMaxDiagonal([[1,100],[100,1],[50,50],[25,75],[75,25],[20,80],[80,20],[30,70],[70,30]]), 100, 'Test 83');
test(areaOfMaxDiagonal([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12]]), 144, 'Test 84');
test(areaOfMaxDiagonal([[6,8],[8,6],[7,24],[24,7],[15,20],[20,15],[12,16],[16,12]]), 300, 'Test 85');
test(areaOfMaxDiagonal([[8, 15], [15, 8], [7, 24], [24, 7], [6, 8], [8, 6]]), 168, 'Test 86');
test(areaOfMaxDiagonal([[99,1],[98,2],[97,3],[96,4],[95,5]]), 99, 'Test 87');
test(areaOfMaxDiagonal([[3,4],[4,3],[6,8],[8,6],[5,12],[12,5],[7,24],[24,7]]), 168, 'Test 88');
test(areaOfMaxDiagonal([[15,20],[20,15],[10,25],[25,10]]), 250, 'Test 89');
test(areaOfMaxDiagonal([[5, 12], [12, 5], [9, 40], [40, 9], [35, 12], [12, 35]]), 360, 'Test 90');
test(areaOfMaxDiagonal([[60,80],[80,60],[70,70],[50,90],[90,50],[65,75],[75,65]]), 4500, 'Test 91');
test(areaOfMaxDiagonal([[10, 24], [20, 21], [15, 36], [30, 40], [12, 16], [8, 15]]), 1200, 'Test 92');
test(areaOfMaxDiagonal([[33, 56], [56, 33], [22, 88], [88, 22], [44, 44]]), 1936, 'Test 93');
test(areaOfMaxDiagonal([[25, 60], [30, 40], [50, 50], [45, 55], [35, 65]]), 2275, 'Test 94');
test(areaOfMaxDiagonal([[60, 80], [80, 60], [48, 55], [55, 48], [5, 12], [12, 5], [8, 15], [15, 8]]), 4800, 'Test 95');
test(areaOfMaxDiagonal([[20,21],[21,20],[15,25],[25,15]]), 375, 'Test 96');
test(areaOfMaxDiagonal([[50,50],[70,30],[60,40]]), 2100, 'Test 97');
test(areaOfMaxDiagonal([[50,50],[49,51],[51,49],[60,8],[8,60]]), 2499, 'Test 98');
test(areaOfMaxDiagonal([[1, 100], [100, 1], [50, 50], [70, 70], [60, 80], [80, 60]]), 100, 'Test 99');
test(areaOfMaxDiagonal([[25,60],[60,25],[40,40],[30,70],[70,30],[10,90],[90,10]]), 900, 'Test 100');
test(areaOfMaxDiagonal([[10, 24], [24, 10], [15, 36], [36, 15], [20, 21], [21, 20], [25, 60], [60, 25], [30, 40], [40, 30]]), 1500, 'Test 101');
test(areaOfMaxDiagonal([[33,56],[56,33],[44,48],[48,44],[29,71],[71,29],[17,84],[84,17]]), 1428, 'Test 102');
test(areaOfMaxDiagonal([[13,84],[84,13],[16,82],[82,16],[20,79],[79,20],[24,76],[76,24],[28,73],[73,28]]), 1092, 'Test 103');
test(areaOfMaxDiagonal([[15, 20], [30, 40], [25, 60], [60, 25]]), 1500, 'Test 104');
test(areaOfMaxDiagonal([[5,12],[12,5],[8,15],[15,8],[10,24],[24,10]]), 240, 'Test 105');
test(areaOfMaxDiagonal([[28, 45], [35, 84], [65, 72], [72, 65], [50, 120], [120, 50]]), 6000, 'Test 106');
test(areaOfMaxDiagonal([[20,21],[21,20],[19,22],[22,19],[18,23],[23,18],[17,24],[24,17]]), 408, 'Test 107');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

