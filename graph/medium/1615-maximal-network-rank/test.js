// Test: 1615. Maximal Network Rank
// 90 test cases from LeetCodeDataset
// Run: node test.js

const { maximalNetworkRank } = require("./solution");

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

console.log("\n1615. Maximal Network Rank\n");

test(maximalNetworkRank(4, [[0,1],[0,3],[1,2],[1,3]]), 4, 'Test 1');
test(maximalNetworkRank(100, []), 0, 'Test 2');
test(maximalNetworkRank(6, [[0,1],[0,2],[0,3],[0,4],[0,5]]), 5, 'Test 3');
test(maximalNetworkRank(10, [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9]]), 9, 'Test 4');
test(maximalNetworkRank(5, [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]), 5, 'Test 5');
test(maximalNetworkRank(3, [[0,1],[1,2]]), 2, 'Test 6');
test(maximalNetworkRank(6, [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]]), 5, 'Test 7');
test(maximalNetworkRank(10, [[0,1],[2,3],[4,5],[6,7],[8,9]]), 2, 'Test 8');
test(maximalNetworkRank(10, []), 0, 'Test 9');
test(maximalNetworkRank(8, [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]]), 5, 'Test 10');
test(maximalNetworkRank(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]]), 4, 'Test 11');
test(maximalNetworkRank(7, [[0,1],[0,2],[1,3],[2,4],[3,5],[4,6]]), 4, 'Test 12');
test(maximalNetworkRank(15, [[0,1],[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[8,10],[9,11],[10,12],[11,13],[12,14]]), 4, 'Test 13');
test(maximalNetworkRank(90, [[i, [i+2] % 90] for i in range[90]] + [[i, [i+3] % 90] for i in range[90]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 14');
test(maximalNetworkRank(25, [[i,j] for i in range[24] for j in range[i+1, 25]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 15');
test(maximalNetworkRank(15, [[0,1],[0,2],[0,3],[1,4],[2,5],[3,6],[4,7],[5,8],[6,9],[7,10],[8,11],[9,12],[10,13],[11,14]]), 5, 'Test 16');
test(maximalNetworkRank(90, [[i,j] for i in range[90] for j in range[i+1, 90] if [i+j] %, = 0]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 17');
test(maximalNetworkRank(15, [[0,1],[0,2],[0,3],[1,4],[1,5],[2,6],[3,7],[4,8],[5,9],[6,10],[7,11],[8,12],[9,13],[10,14],[11,12],[12,13],[13,14]]), 6, 'Test 18');
test(maximalNetworkRank(80, [[i, j] for i in range[80] for j in range[i+1, 80] if [i + j] %, = 0]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 19');
test(maximalNetworkRank(15, [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14]]), 14, 'Test 20');
test(maximalNetworkRank(40, [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3],[4,5],[4,6],[4,7],[5,6],[5,7],[6,7],[8,9],[8,10],[8,11],[9,10],[9,11],[10,11],[12,13],[12,14],[12,15],[13,14],[13,15],[14,15]]), 6, 'Test 21');
test(maximalNetworkRank(100, [[i,j] for i in range[100] for j in range[i+1, 100] if [i*j] %, = 0]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 22');
test(maximalNetworkRank(50, [[i, [i+1] % 50] for i in range[50]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 23');
test(maximalNetworkRank(12, [[i,j] for i in range[12] for j in range[i+1, 12] if i != j and [i+j] % 4 != 0]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 24');
test(maximalNetworkRank(7, [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,2],[1,3],[1,4],[1,5],[1,6],[2,3],[2,4],[2,5],[2,6],[3,4],[3,5],[3,6],[4,5],[4,6],[5,6]]), 11, 'Test 25');
test(maximalNetworkRank(10, [[0,1],[0,2],[0,3],[0,4],[1,5],[1,6],[2,7],[3,8],[4,9],[5,6],[7,8],[8,9]]), 7, 'Test 26');
test(maximalNetworkRank(10, [[i,[i+1]%10] for i in range[10]] + [[i,[i+2]%10] for i in range[10] if [i+[i+2]]%10 != 1 and [i+[i+2]]%10 != 9]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 27');
test(maximalNetworkRank(60, [[i,i+1] for i in range[59]] + [[i,i+2] for i in range[58]] + [[i,i+3] for i in range[57]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 28');
test(maximalNetworkRank(8, [[i,[i+1]%8] for i in range[8]] + [[0,4],[2,6]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 29');
test(maximalNetworkRank(30, [[i,[i+1]%30] for i in range[30]] + [[i,[i+2]%30] for i in range[30]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 30');
test(maximalNetworkRank(60, [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,15],[16,17],[18,19],[20,21],[22,23],[24,25],[26,27],[28,29],[30,31],[32,33],[34,35],[36,37],[38,39],[40,41],[42,43],[44,45],[46,47],[48,49],[50,51],[52,53],[54,55],[56,57],[58,59]]), 2, 'Test 31');
test(maximalNetworkRank(70, [[i,j] for i in range[70] for j in range[i+1, 70] if [i+j] %, = 0]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 32');
test(maximalNetworkRank(90, [[i,i+1] for i in range[89]] + [[i,i+2] for i in range[88]] + [[i,i+3] for i in range[87]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 33');
test(maximalNetworkRank(40, [[i, [i+1] % 40] for i in range[40]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 34');
test(maximalNetworkRank(90, [[i, j] for i in range[90] for j in range[i+1, 90] if [i - j] %, = 0]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 35');
test(maximalNetworkRank(20, [[0,1],[0,2],[1,2],[3,4],[3,5],[4,5],[6,7],[6,8],[7,8],[9,10],[9,11],[10,11],[12,13],[12,14],[13,14],[15,16],[15,17],[16,17],[18,19]]), 4, 'Test 36');
test(maximalNetworkRank(20, [[0,1],[0,2],[0,3],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19]]), 7, 'Test 37');
test(maximalNetworkRank(40, [[i, j] for i in range[40] for j in range[i+1, 40] if [i ^ j] %, = 0]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 38');
test(maximalNetworkRank(25, [[0,1],[1,2],[2,3],[3,4],[4,0],[5,6],[6,7],[7,8],[8,9],[9,5],[10,11],[11,12],[12,13],[13,14],[14,10],[15,16],[16,17],[17,18],[18,19],[19,15],[20,21],[21,22],[22,23],[23,24],[24,20],[0,15],[5,10],[10,15],[20,25]]), 7, 'Test 39');
test(maximalNetworkRank(11, [[i,i+1] for i in range[10]] + [[0,5],[1,6],[2,7],[3,8],[4,9]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 40');
test(maximalNetworkRank(10, [[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]), 7, 'Test 41');
test(maximalNetworkRank(75, [[i, i+1] for i in range[74]] + [[i, i+2] for i in range[73]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 42');
test(maximalNetworkRank(10, [[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]]), 7, 'Test 43');
test(maximalNetworkRank(50, [[i, [i+1] % 50] for i in range[50]] + [[i, [i+2] % 50] for i in range[50]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 44');
test(maximalNetworkRank(70, [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,2],[2,3],[3,4],[4,5],[5,6],[6,1],[1,7],[2,8],[3,9],[4,10],[5,11],[6,12],[7,8],[8,9],[9,10],[10,11],[11,12],[12,7],[7,13],[8,14],[9,15],[10,16],[11,17],[12,18],[13,14],[14,15],[15,16],[16,17],[17,18],[18,13]]), 10, 'Test 45');
test(maximalNetworkRank(15, [[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4],[5,6],[5,7],[5,8],[5,9],[6,7],[6,8],[6,9],[7,8],[7,9],[8,9]]), 8, 'Test 46');
test(maximalNetworkRank(70, [[i, j] for i in range[70] for j in range[i+1, 70] if [i + j] %, = 1]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 47');
test(maximalNetworkRank(70, [[i,j] for i in range[35] for j in range[i+1, 70] if [i*j] %, = 0]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 48');
test(maximalNetworkRank(20, [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,9],[4,10],[5,11],[5,12],[6,13],[6,14],[7,15],[7,16],[8,17],[8,18],[9,19]]), 6, 'Test 49');
test(maximalNetworkRank(50, [[i, i+1] for i in range[49]] + [[0,49], [1,48], [2,47], [3,46], [4,45]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 50');
test(maximalNetworkRank(25, [[i, i+1] for i in range[24]] + [[0, 12], [12, 24]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 51');
test(maximalNetworkRank(30, [[i,j] for i in range[30] for j in range[i+1, 30] if [i+j] %, = 0]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 52');
test(maximalNetworkRank(50, [[i, i+1] for i in range[49]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 53');
test(maximalNetworkRank(20, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[0,19]]), 4, 'Test 54');
test(maximalNetworkRank(30, [[i, j] for i in range[30] for j in range[i+1, 30] if [i + j] %, = 0]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 55');
test(maximalNetworkRank(80, [[i,[i+1]%80] for i in range[80]] + [[i,[i+2]%80] for i in range[80]] + [[i,[i+3]%80] for i in range[80]] + [[i,[i+4]%80] for i in range[80]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 56');
test(maximalNetworkRank(80, [[i, i+1] for i in range[0, 80, 2]] + [[i, i+2] for i in range[0, 79, 2]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 57');
test(maximalNetworkRank(50, [[i, i+1] for i in range[49]] + [[i, 49] for i in range[49]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 58');
test(maximalNetworkRank(60, [[i, [i+3] % 60] for i in range[60]] + [[i, [i+5] % 60] for i in range[60]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 59');
test(maximalNetworkRank(15, [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3],[4,5],[4,6],[5,6],[7,8],[7,9],[8,9],[10,11],[10,12],[11,12],[13,14]]), 5, 'Test 60');
test(maximalNetworkRank(20, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19]]), 4, 'Test 61');
test(maximalNetworkRank(10, [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3],[4,5],[4,6],[5,6],[7,8],[7,9],[8,9]]), 5, 'Test 62');
test(maximalNetworkRank(10, [[0,1],[0,2],[0,3],[0,4],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]]), 6, 'Test 63');
test(maximalNetworkRank(70, [[i, [i*3] % 70] for i in range[70]] + [[i, [i*5] % 70] for i in range[70]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 64');
test(maximalNetworkRank(90, [[0, i] for i in range[1, 90] if i %, = 1] + [[1, i] for i in range[2, 90] if i %, = 0]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 65');
test(maximalNetworkRank(20, [[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4],[5,6],[5,7],[5,8],[5,9],[6,7],[6,8],[6,9],[7,8],[7,9],[8,9],[10,11],[10,12],[10,13],[10,14],[11,12],[11,13],[11,14],[12,13],[12,14],[13,14]]), 8, 'Test 66');
test(maximalNetworkRank(30, [[0,1],[0,2],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25],[25,26],[26,27],[27,28],[28,29]]), 5, 'Test 67');
test(maximalNetworkRank(20, [[i, i+1] for i in range[19]] + [[0, 19]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 68');
test(maximalNetworkRank(25, [[0,1],[0,2],[0,3],[0,4],[0,5],[1,6],[1,7],[1,8],[1,9],[2,10],[2,11],[2,12],[3,13],[3,14],[4,15],[4,16],[5,17],[5,18],[6,19],[6,20],[7,21],[7,22],[8,23],[8,24],[9,10],[11,12],[13,14],[15,16],[17,18],[19,20],[21,22],[23,24]]), 9, 'Test 69');
test(maximalNetworkRank(10, [[0,1],[0,2],[0,3],[1,4],[1,5],[2,6],[3,7],[4,8],[5,9]]), 5, 'Test 70');
test(maximalNetworkRank(75, [[i,j] for i in range[30] for j in range[i+1, 60] if [i+j] %, = 0]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 71');
test(maximalNetworkRank(50, [[i,i+1] for i in range[49]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 72');
test(maximalNetworkRank(55, [[i, [i*2] % 55] for i in range[55]] + [[i, [i*3] % 55] for i in range[55]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 73');
test(maximalNetworkRank(80, [[i,j] for i in range[40] for j in range[i+1, 80] if [i*j] %, = 0]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 74');
test(maximalNetworkRank(70, [[i, [i+1] % 70] for i in range[70]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 75');
test(maximalNetworkRank(30, [[0,i] for i in range[1, 30]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 76');
test(maximalNetworkRank(15, [[0,1],[0,2],[0,3],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4],[5,6],[5,7],[5,8],[6,7],[6,8],[7,8],[9,10],[9,11],[9,12],[10,11],[10,12],[11,12],[13,14]]), 7, 'Test 77');
test(maximalNetworkRank(40, [[i, j] for i in range[40] for j in range[i+1, 40] if [i + j] %, = 0]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 78');
test(maximalNetworkRank(40, [[i,j] for i in range[40] for j in range[i+1, 40] if [i+j] %, = 0]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 79');
test(maximalNetworkRank(9, [[i,i+1] for i in range[8]] + [[0,8],[1,6],[2,5],[3,4]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 80');
test(maximalNetworkRank(50, [[i,j] for i in range[49] for j in range[i+1, 50]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 81');
test(maximalNetworkRank(95, [[i, [i*3] % 95] for i in range[95]] + [[i, [i*7] % 95] for i in range[95]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 82');
test(maximalNetworkRank(20, [[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4],[5,6],[5,7],[5,8],[5,9],[6,7],[6,8],[6,9],[7,8],[7,9],[8,9],[10,11],[10,12],[10,13],[10,14],[11,12],[11,13],[11,14],[12,13],[12,14],[13,14],[15,16],[15,17],[15,18],[15,19],[16,17],[16,18],[16,19],[17,18],[17,19],[18,19]]), 8, 'Test 83');
test(maximalNetworkRank(30, [[i, [i+1] % 30] for i in range[30]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 84');
test(maximalNetworkRank(60, [[i, j] for i in range[60] for j in range[i+1, 60] if [i * j] %, = 0]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 85');
test(maximalNetworkRank(99, [[i, 98] for i in range[98]] + [[i, 97] for i in range[96]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 86');
test(maximalNetworkRank(80, [[i, j] for i in range[80] for j in range[i+1, 80] if [i //, = j // 10] or [i %, = j % 10]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 87');
test(maximalNetworkRank(60, [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3],[4,5],[4,6],[4,7],[5,6],[5,7],[6,7],[8,9],[8,10],[8,11],[9,10],[9,11],[10,11],[12,13],[12,14],[12,15],[13,14],[13,15],[14,15]]), 6, 'Test 88');
test(maximalNetworkRank(60, [[i, [i+1] % 60] for i in range[60]] + [[i, [i+2] % 60] for i in range[60]]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 89');
test(maximalNetworkRank(65, [[i,j] for i in range[32] for j in range[i+1, 65] if [i+j] %, = 0]), Error: Solution.maximalNetworkRank[] missing 1 required positional argument: 'roads', 'Test 90');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

