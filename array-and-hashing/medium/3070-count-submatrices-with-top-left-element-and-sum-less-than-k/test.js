// Test: 3070. Count Submatrices With Top Left Element And Sum Less Than K
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { countSubmatrices } = require("./solution");

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

console.log("\n3070. Count Submatrices With Top Left Element And Sum Less Than K\n");

test(countSubmatrices([[5,5,5],[5,5,5],[5,5,5]], 15), 5, 'Test 1');
test(countSubmatrices([[1,2],[3,4]], 10), 4, 'Test 2');
test(countSubmatrices([[1,0,1],[0,1,0],[1,0,1]], 2), 6, 'Test 3');
test(countSubmatrices([[1,1,1],[1,1,1],[1,1,1]], 5), 6, 'Test 4');
test(countSubmatrices([[1,2,3],[4,5,6]], 15), 5, 'Test 5');
test(countSubmatrices([[1]], 1), 1, 'Test 6');
test(countSubmatrices([[7,2,9],[1,5,0],[2,6,6]], 20), 6, 'Test 7');
test(countSubmatrices([[7,6,3],[6,6,1]], 18), 4, 'Test 8');
test(countSubmatrices([[1,2,3],[4,5,6],[7,8,9]], 15), 6, 'Test 9');
test(countSubmatrices([[0,0,0],[0,0,0],[0,0,0]], 1), 9, 'Test 10');
test(countSubmatrices([[1,2,3],[4,5,6]], 10), 4, 'Test 11');
test(countSubmatrices([[1000,1000],[1000,1000]], 3000), 3, 'Test 12');
test(countSubmatrices([[1,1,1],[1,1,1]], 2), 3, 'Test 13');
test(countSubmatrices([[1000,1000],[1000,1000]], 2000), 3, 'Test 14');
test(countSubmatrices([[5,5,5],[5,5,5],[5,5,5]], 25), 6, 'Test 15');
test(countSubmatrices([[5,5,5],[5,5,5],[5,5,5]], 50), 9, 'Test 16');
test(countSubmatrices([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]], 50), 11, 'Test 17');
test(countSubmatrices([[9,8,7,6,5],[4,3,2,1,0],[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]], 100), 23, 'Test 18');
test(countSubmatrices([[5,10,15],[20,25,30],[35,40,45],[50,55,60]], 100), 6, 'Test 19');
test(countSubmatrices([[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]], 5), 8, 'Test 20');
test(countSubmatrices([[5,10,15,20],[25,30,35,40],[45,50,55,60],[65,70,75,80]], 150), 9, 'Test 21');
test(countSubmatrices([[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15]], 30), 9, 'Test 22');
test(countSubmatrices([[1000,0,0,0,0],[0,1000,0,0,0],[0,0,1000,0,0],[0,0,0,1000,0],[0,0,0,0,1000]], 4000), 24, 'Test 23');
test(countSubmatrices([[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15]], 40), 10, 'Test 24');
test(countSubmatrices([[900,100,100],[100,900,100],[100,100,900]], 1500), 5, 'Test 25');
test(countSubmatrices([[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2]], 16), 12, 'Test 26');
test(countSubmatrices([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], 0), 20, 'Test 27');
test(countSubmatrices([[1000,1000,1000],[1000,1000,1000],[1000,1000,1000],[1000,1000,1000]], 10000), 11, 'Test 28');
test(countSubmatrices([[10,10,10,10,10],[10,10,10,10,10],[10,10,10,10,10],[10,10,10,10,10],[10,10,10,10,10]], 100), 17, 'Test 29');
test(countSubmatrices([[3,6,9,12,15,18,21],[24,27,30,33,36,39,42],[45,48,51,54,57,60,63]], 200), 14, 'Test 30');
test(countSubmatrices([[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]], 10), 17, 'Test 31');
test(countSubmatrices([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], 2), 12, 'Test 32');
test(countSubmatrices([[999,999],[999,999],[999,999]], 2997), 4, 'Test 33');
test(countSubmatrices([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]], 5), 20, 'Test 34');
test(countSubmatrices([[9, 9, 9], [9, 9, 9], [9, 9, 9]], 81), 9, 'Test 35');
test(countSubmatrices([[1,2,3,4,5],[5,4,3,2,1],[6,7,8,9,10]], 50), 13, 'Test 36');
test(countSubmatrices([[1, 3, 5, 7, 9], [2, 4, 6, 8, 10], [3, 5, 7, 9, 11]], 30), 10, 'Test 37');
test(countSubmatrices([[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], 15), 22, 'Test 38');
test(countSubmatrices([[9,8,7],[6,5,4],[3,2,1]], 20), 4, 'Test 39');
test(countSubmatrices([[5,5,5,5],[5,5,5,5],[5,5,5,5],[5,5,5,5]], 50), 13, 'Test 40');
test(countSubmatrices([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], 20), 6, 'Test 41');
test(countSubmatrices([[300,400,500,600],[700,800,900,1000],[1100,1200,1300,1400],[1500,1600,1700,1800]], 5000), 10, 'Test 42');
test(countSubmatrices([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]], 100), 20, 'Test 43');
test(countSubmatrices([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], 1), 25, 'Test 44');
test(countSubmatrices([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]], 0), 20, 'Test 45');
test(countSubmatrices([[5,5,5,5],[5,5,5,5],[5,5,5,5],[5,5,5,5]], 20), 8, 'Test 46');
test(countSubmatrices([[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]], 0), 30, 'Test 47');
test(countSubmatrices([[1,1,1,1,1,1,1],[1,1,1,1,1,1,1],[1,1,1,1,1,1,1]], 7), 12, 'Test 48');
test(countSubmatrices([[100, 200], [300, 400], [500, 600]], 1200), 5, 'Test 49');
test(countSubmatrices([[7, 6, 3, 4], [6, 6, 1, 2], [5, 3, 8, 1], [4, 2, 7, 5]], 25), 8, 'Test 50');
test(countSubmatrices([[100, 200, 300], [400, 500, 600], [700, 800, 900]], 1500), 6, 'Test 51');
test(countSubmatrices([[5,10,15],[20,25,30],[35,40,45]], 100), 6, 'Test 52');
test(countSubmatrices([[999,999,999],[999,999,999],[999,999,999],[999,999,999]], 3000), 5, 'Test 53');
test(countSubmatrices([[10, 20, 30, 40], [40, 30, 20, 10], [5, 5, 5, 5]], 50), 3, 'Test 54');
test(countSubmatrices([[10,20,30],[40,50,60],[70,80,90]], 200), 6, 'Test 55');
test(countSubmatrices([[999,999],[999,999]], 1998), 3, 'Test 56');
test(countSubmatrices([[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]], 10), 15, 'Test 57');
test(countSubmatrices([[100,200,300],[400,500,600],[700,800,900]], 1500), 6, 'Test 58');
test(countSubmatrices([[0,0,0,0],[0,0,0,0],[0,0,0,0]], 0), 12, 'Test 59');
test(countSubmatrices([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]], 1), 16, 'Test 60');
test(countSubmatrices([[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]], 10), 17, 'Test 61');
test(countSubmatrices([[500, 500, 500, 500], [500, 500, 500, 500], [500, 500, 500, 500], [500, 500, 500, 500]], 5000), 13, 'Test 62');
test(countSubmatrices([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]], 30), 9, 'Test 63');
test(countSubmatrices([[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [2, 3, 4, 5, 6], [6, 5, 4, 3, 2]], 25), 12, 'Test 64');
test(countSubmatrices([[1,2,3,4,5],[5,4,3,2,1],[2,3,4,5,6],[6,5,4,3,2],[3,4,5,6,7]], 50), 20, 'Test 65');
test(countSubmatrices([[500,500],[500,500],[500,500],[500,500],[500,500]], 1500), 4, 'Test 66');
test(countSubmatrices([[1,2,3,4,5,6,7,8,9,10],[10,9,8,7,6,5,4,3,2,1],[2,3,4,5,6,7,8,9,10,11]], 100), 25, 'Test 67');
test(countSubmatrices([[10,20,30],[40,50,60],[70,80,90]], 100), 4, 'Test 68');
test(countSubmatrices([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]], 10), 16, 'Test 69');
test(countSubmatrices([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]], 10), 14, 'Test 70');
test(countSubmatrices([[100,200,300],[200,100,400],[300,400,500]], 1500), 8, 'Test 71');
test(countSubmatrices([[1000,900,800],[700,600,500],[400,300,200]], 3000), 5, 'Test 72');
test(countSubmatrices([[10,20,30,40],[5,15,25,35],[50,60,70,80]], 100), 7, 'Test 73');
test(countSubmatrices([[5,10],[15,20],[25,30],[35,40],[45,50]], 100), 6, 'Test 74');
test(countSubmatrices([[100,200],[300,400],[500,600],[700,800]], 1000), 5, 'Test 75');
test(countSubmatrices([[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]], 20), 31, 'Test 76');
test(countSubmatrices([[5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5]], 40), 10, 'Test 77');
test(countSubmatrices([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]], 100), 16, 'Test 78');
test(countSubmatrices([[5,5,5,5,5,5,5],[5,5,5,5,5,5,5],[5,5,5,5,5,5,5]], 100), 20, 'Test 79');
test(countSubmatrices([[5,10,15,20],[25,30,35,40],[45,50,55,60],[65,70,75,80]], 100), 7, 'Test 80');
test(countSubmatrices([[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5]], 25), 9, 'Test 81');
test(countSubmatrices([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]], 50), 12, 'Test 82');
test(countSubmatrices([[100,200,300],[400,500,600],[700,800,900]], 2500), 7, 'Test 83');
test(countSubmatrices([[1,2,3,4],[5,6,7,8],[9,10,11,12]], 30), 8, 'Test 84');
test(countSubmatrices([[3,1,2],[1,4,5],[5,2,3]], 25), 8, 'Test 85');
test(countSubmatrices([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]], 30), 9, 'Test 86');
test(countSubmatrices([[10,20,30,40],[50,60,70,80],[90,100,110,120]], 250), 8, 'Test 87');
test(countSubmatrices([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]], 50), 11, 'Test 88');
test(countSubmatrices([[3,3,3,3],[3,3,3,3],[3,3,3,3],[3,3,3,3]], 30), 13, 'Test 89');
test(countSubmatrices([[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]], 25), 34, 'Test 90');
test(countSubmatrices([[9,8,7,6],[5,4,3,2],[1,0,1,0],[2,3,4,5]], 25), 6, 'Test 91');
test(countSubmatrices([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]], 10), 25, 'Test 92');
test(countSubmatrices([[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]], 20), 35, 'Test 93');
test(countSubmatrices([[10,20,30],[40,50,60],[70,80,90]], 150), 6, 'Test 94');
test(countSubmatrices([[10,20,30,40],[50,60,70,80],[90,100,110,120],[130,140,150,160]], 500), 11, 'Test 95');
test(countSubmatrices([[250,250,250,250],[250,250,250,250],[250,250,250,250]], 750), 5, 'Test 96');
test(countSubmatrices([[999, 998, 997], [996, 995, 994], [993, 992, 991]], 3000), 5, 'Test 97');
test(countSubmatrices([[10, 20, 30], [40, 50, 60], [70, 80, 90], [100, 110, 120]], 100), 4, 'Test 98');
test(countSubmatrices([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12]], 20), 6, 'Test 99');
test(countSubmatrices([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 20), 7, 'Test 100');
test(countSubmatrices([[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]], 20), 30, 'Test 101');
test(countSubmatrices([[10,20,30,40,50],[60,70,80,90,100],[110,120,130,140,150],[160,170,180,190,200]], 500), 12, 'Test 102');
test(countSubmatrices([[1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20]], 150), 17, 'Test 103');
test(countSubmatrices([[900,100,200],[300,400,500],[600,700,800]], 2000), 6, 'Test 104');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

