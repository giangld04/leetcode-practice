// Test: 447. Number Of Boomerangs
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfBoomerangs } = require("./solution");

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

console.log("\n447. Number Of Boomerangs\n");

test(numberOfBoomerangs([[0,0],[1,0],[2,0],[3,0],[4,0]]), 8, 'Test 1');
test(numberOfBoomerangs([[1,0],[0,0],[0,1]]), 2, 'Test 2');
test(numberOfBoomerangs([[1,2],[2,3],[3,4],[4,5]]), 4, 'Test 3');
test(numberOfBoomerangs([[0,0],[1,0],[0,1],[0,2]]), 4, 'Test 4');
test(numberOfBoomerangs([[0,0],[1,0],[2,0]]), 2, 'Test 5');
test(numberOfBoomerangs([[0,0],[1,0],[-1,0],[0,1],[0,-1]]), 20, 'Test 6');
test(numberOfBoomerangs([[1,1],[1,2],[1,3],[1,4]]), 4, 'Test 7');
test(numberOfBoomerangs([[0,0],[1,1],[1,2],[2,0]]), 4, 'Test 8');
test(numberOfBoomerangs([[10000,10000],[-10000,-10000],[0,0]]), 2, 'Test 9');
test(numberOfBoomerangs([[1,1],[2,2],[3,3]]), 2, 'Test 10');
test(numberOfBoomerangs([[1,1],[2,2],[1,1],[2,2]]), 16, 'Test 11');
test(numberOfBoomerangs([[0,0],[1,0],[0,1],[1,1]]), 8, 'Test 12');
test(numberOfBoomerangs([[0,0],[1,1],[2,2],[3,3]]), 4, 'Test 13');
test(numberOfBoomerangs([[0,0],[0,1],[1,0],[1,1]]), 8, 'Test 14');
test(numberOfBoomerangs([[0,0],[1,0],[1,1],[2,0]]), 8, 'Test 15');
test(numberOfBoomerangs([[-1,0],[0,0],[1,0]]), 2, 'Test 16');
test(numberOfBoomerangs([[1,1]]), 0, 'Test 17');
test(numberOfBoomerangs([[1,1],[2,2],[3,3],[2,3],[3,2],[1,2],[2,1]]), 38, 'Test 18');
test(numberOfBoomerangs([[0,0],[1,0],[0,1],[1,1],[2,2],[2,1],[1,2]]), 38, 'Test 19');
test(numberOfBoomerangs([[-2,-2],[-1,-1],[1,1],[2,2],[-3,-3],[3,3],[-4,-4],[4,4]]), 16, 'Test 20');
test(numberOfBoomerangs([[1,2],[2,4],[3,6],[4,8],[5,10]]), 8, 'Test 21');
test(numberOfBoomerangs([[-1,0],[0,-1],[1,0],[0,1],[0,0]]), 20, 'Test 22');
test(numberOfBoomerangs([[-1,-1],[1,1],[2,2],[3,3],[4,4],[-1,1],[1,-1],[-2,-2],[-3,-3],[-4,-4]]), 48, 'Test 23');
test(numberOfBoomerangs([[0,0],[1,0],[0,1],[1,1],[2,0],[2,1]]), 24, 'Test 24');
test(numberOfBoomerangs([[0,0],[1,1],[1,0],[2,0],[0,1],[0,2],[2,1],[2,2],[1,2],[2,1]]), 136, 'Test 25');
test(numberOfBoomerangs([[-1,-1],[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8]]), 40, 'Test 26');
test(numberOfBoomerangs([[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]]), 40, 'Test 27');
test(numberOfBoomerangs([[0,0],[1,1],[2,2],[3,3],[4,4]]), 8, 'Test 28');
test(numberOfBoomerangs([[0,0],[0,1],[0,2],[0,3],[0,4],[1,0],[1,1],[1,2],[1,3],[1,4]]), 64, 'Test 29');
test(numberOfBoomerangs([[1,0],[2,0],[3,0],[4,0],[5,0]]), 8, 'Test 30');
test(numberOfBoomerangs([[1, 1], [2, 2], [3, 3], [1, 2], [2, 3], [3, 4], [4, 5]]), 16, 'Test 31');
test(numberOfBoomerangs([[0,0],[0,2],[2,0],[2,2],[4,0],[4,2],[0,4],[2,4],[4,4]]), 88, 'Test 32');
test(numberOfBoomerangs([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]]), 40, 'Test 33');
test(numberOfBoomerangs([[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2]]), 40, 'Test 34');
test(numberOfBoomerangs([[5,5],[5,10],[10,5],[10,10],[7,7],[8,8]]), 16, 'Test 35');
test(numberOfBoomerangs([[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]]), 24, 'Test 36');
test(numberOfBoomerangs([[-1,0],[1,0],[0,-1],[0,1],[1,1],[-1,-1],[-1,1],[1,-1]]), 48, 'Test 37');
test(numberOfBoomerangs([[1,1],[2,2],[3,3],[1,2],[2,1],[1,3],[3,1],[2,3],[3,2],[2,0],[0,2],[3,0],[0,3]]), 192, 'Test 38');
test(numberOfBoomerangs([[-10000,-10000],[10000,10000],[0,0],[5000,5000],[-5000,-5000],[2000,2000],[-2000,-2000]]), 10, 'Test 39');
test(numberOfBoomerangs([[0,0],[1,0],[2,0],[3,0],[0,1],[0,2],[0,3],[0,4]]), 18, 'Test 40');
test(numberOfBoomerangs([[0,0],[1,1],[1,0],[2,0],[2,1],[0,1],[0,2],[1,2],[2,2],[3,2]]), 104, 'Test 41');
test(numberOfBoomerangs([[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3],[4,4]]), 104, 'Test 42');
test(numberOfBoomerangs([[-1, -1], [0, 0], [1, 1], [2, 2], [3, 3], [4, 4]]), 12, 'Test 43');
test(numberOfBoomerangs([[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]), 18, 'Test 44');
test(numberOfBoomerangs([[10000, 10000], [10001, 10001], [10002, 10002], [10003, 10003], [10004, 10004]]), 8, 'Test 45');
test(numberOfBoomerangs([[100, 100], [101, 101], [102, 102], [100, 102], [102, 100], [101, 100], [100, 101], [102, 101], [101, 102]]), 88, 'Test 46');
test(numberOfBoomerangs([[-1,-1],[0,0],[1,1],[2,2],[3,3],[4,4]]), 12, 'Test 47');
test(numberOfBoomerangs([[-1,-1],[0,0],[1,1],[2,2],[3,3],[-1,1],[-2,2],[-3,3],[1,-1],[2,-2],[3,-3]]), 78, 'Test 48');
test(numberOfBoomerangs([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11]]), 40, 'Test 49');
test(numberOfBoomerangs([[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0]]), 40, 'Test 50');
test(numberOfBoomerangs([[0,0],[1,1],[1,-1],[-1,1],[-1,-1]]), 20, 'Test 51');
test(numberOfBoomerangs([[0,0],[1,0],[0,1],[-1,0],[0,-1]]), 20, 'Test 52');
test(numberOfBoomerangs([[-1,0],[0,0],[1,0],[0,-1],[0,1]]), 20, 'Test 53');
test(numberOfBoomerangs([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13]]), 72, 'Test 54');
test(numberOfBoomerangs([[0,0],[10000,10000],[-10000,-10000],[10000,-10000],[-10000,10000]]), 20, 'Test 55');
test(numberOfBoomerangs([[-1,0],[1,0],[0,-1],[0,1],[1,1]]), 12, 'Test 56');
test(numberOfBoomerangs([[0,0],[0,5],[5,0],[5,5],[2,2],[3,3],[4,4]]), 24, 'Test 57');
test(numberOfBoomerangs([[0,0],[1,0],[1,1],[2,1],[2,2],[3,2],[3,3],[4,3],[4,4],[5,4]]), 40, 'Test 58');
test(numberOfBoomerangs([[0,0],[0,1],[1,0],[1,1],[2,2],[2,1],[1,2]]), 38, 'Test 59');
test(numberOfBoomerangs([[0,1],[1,0],[1,2],[2,1],[2,3],[3,2]]), 24, 'Test 60');
test(numberOfBoomerangs([[0,0],[1,2],[1,-2],[2,4],[2,-4],[-1,2],[-1,-2]]), 18, 'Test 61');
test(numberOfBoomerangs([[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9]]), 40, 'Test 62');
test(numberOfBoomerangs([[0,0],[10,0],[20,0],[0,10],[10,10],[20,10],[0,20],[10,20],[20,20]]), 88, 'Test 63');
test(numberOfBoomerangs([[1,2],[2,3],[3,4],[4,5],[5,6]]), 8, 'Test 64');
test(numberOfBoomerangs([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7]]), 18, 'Test 65');
test(numberOfBoomerangs([[0,0],[1,0],[2,0],[3,0],[0,1],[1,1],[2,1],[3,1],[0,2],[1,2],[2,2],[3,2]]), 164, 'Test 66');
test(numberOfBoomerangs([[0,0],[1,0],[2,0],[1,1],[1,-1]]), 20, 'Test 67');
test(numberOfBoomerangs([[0,0],[0,2],[2,0],[2,2],[1,1]]), 20, 'Test 68');
test(numberOfBoomerangs([[0,0],[1,1],[1,0],[0,1],[2,2],[2,0],[0,2]]), 42, 'Test 69');
test(numberOfBoomerangs([[-1000,-1000],[-1000,-999],[-999,-1000],[-999,-999],[-1001,-1001],[-1001,-1000],[-1000,-1001]]), 38, 'Test 70');
test(numberOfBoomerangs([[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1]]), 40, 'Test 71');
test(numberOfBoomerangs([[0,0],[1,0],[1,1],[0,1],[0.5,0.5],[1.5,0.5],[1.5,1.5],[0.5,1.5]]), 60, 'Test 72');
test(numberOfBoomerangs([[-5,5],[-3,-3],[-1,1],[-2,-2],[0,0],[2,2],[3,3],[5,-5],[4,4]]), 32, 'Test 73');
test(numberOfBoomerangs([[-1,0],[0,0],[1,0],[0,1],[0,-1]]), 20, 'Test 74');
test(numberOfBoomerangs([[10,10],[10,20],[20,20],[20,10],[10,15]]), 12, 'Test 75');
test(numberOfBoomerangs([[0,0],[1,1],[2,2],[1,0],[0,1],[2,0],[0,2]]), 42, 'Test 76');
test(numberOfBoomerangs([[-1,-1],[0,-1],[1,-1],[-1,0],[0,0],[1,0],[-1,1],[0,1],[1,1],[-1,2],[0,2],[1,2]]), 164, 'Test 77');
test(numberOfBoomerangs([[-1,0],[0,1],[1,-1],[-2,0],[0,2],[2,-2],[-3,0],[0,3],[3,-3],[-4,0]]), 32, 'Test 78');
test(numberOfBoomerangs([[-10000, -10000], [-9999, -9999], [-9998, -9998], [-9997, -9997], [-9996, -9996]]), 8, 'Test 79');
test(numberOfBoomerangs([[0,0],[1,0],[2,0],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2]]), 88, 'Test 80');
test(numberOfBoomerangs([[0,0],[1,0],[2,0],[3,0],[0,1]]), 6, 'Test 81');
test(numberOfBoomerangs([[0,0],[1,0],[0,1],[1,1],[2,0],[0,2]]), 24, 'Test 82');
test(numberOfBoomerangs([[0,0],[1,1],[1,2],[2,1],[2,2]]), 12, 'Test 83');
test(numberOfBoomerangs([[1,2],[2,4],[3,6],[4,8],[5,10],[6,12]]), 12, 'Test 84');
test(numberOfBoomerangs([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]), 12, 'Test 85');
test(numberOfBoomerangs([[0,0],[1,0],[0,1],[1,1],[2,0],[0,2],[2,1],[1,2],[2,2],[3,3]]), 104, 'Test 86');
test(numberOfBoomerangs([[100,100],[101,100],[100,101],[101,101],[102,102],[102,101],[101,102]]), 38, 'Test 87');
test(numberOfBoomerangs([[0,0],[0,2],[2,0],[2,2],[1,1],[1,3],[3,1],[3,3],[2,3],[3,2]]), 92, 'Test 88');
test(numberOfBoomerangs([[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0]]), 40, 'Test 89');
test(numberOfBoomerangs([[0,0],[1,0],[2,0],[3,0],[4,0],[5,0]]), 12, 'Test 90');
test(numberOfBoomerangs([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]]), 24, 'Test 91');
test(numberOfBoomerangs([[-1,0],[1,0],[0,-1],[0,1],[0,0]]), 20, 'Test 92');
test(numberOfBoomerangs([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12]]), 60, 'Test 93');
test(numberOfBoomerangs([[1,1],[2,2],[3,3],[4,4],[5,5]]), 8, 'Test 94');
test(numberOfBoomerangs([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10]]), 40, 'Test 95');
test(numberOfBoomerangs([[0,0],[1,1],[2,2],[1,2],[2,1]]), 12, 'Test 96');
test(numberOfBoomerangs([[0, 0], [1, 0], [0, 1], [1, 1], [2, 0], [0, 2], [1, 2]]), 38, 'Test 97');
test(numberOfBoomerangs([[100,100],[101,100],[100,101],[101,101],[100,99],[101,99],[99,100],[99,101],[99,99]]), 88, 'Test 98');
test(numberOfBoomerangs([[-2,-2],[-1,-1],[0,0],[1,1],[2,2],[1,0],[0,1]]), 26, 'Test 99');
test(numberOfBoomerangs([[0,0],[1,2],[2,1],[2,3],[3,2],[1,3]]), 18, 'Test 100');
test(numberOfBoomerangs([[0,0],[1,1],[1,2],[2,0],[2,1],[2,2],[3,0],[3,1],[3,2],[4,0]]), 94, 'Test 101');
test(numberOfBoomerangs([[-1,0],[0,0],[1,0],[0,-1],[0,1],[1,1],[-1,-1],[1,-1],[-1,1]]), 88, 'Test 102');
test(numberOfBoomerangs([[0, 0], [1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [-1, -1]]), 38, 'Test 103');
test(numberOfBoomerangs([[-5,-5],[-5,0],[0,-5],[0,0],[2,2],[3,3],[4,4]]), 18, 'Test 104');
test(numberOfBoomerangs([[0,0],[1,0],[0,1],[1,1],[-1,0],[-1,-1],[0,-1],[1,-1]]), 60, 'Test 105');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

