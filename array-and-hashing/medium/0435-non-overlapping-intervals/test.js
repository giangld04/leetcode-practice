// Test: 435. Non Overlapping Intervals
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { eraseOverlapIntervals } = require("./solution");

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

console.log("\n435. Non Overlapping Intervals\n");

test(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]), 1, 'Test 1');
test(eraseOverlapIntervals([[-2,-1],[1,2],[-1,1],[2,3]]), 0, 'Test 2');
test(eraseOverlapIntervals([[1,5],[2,3],[4,6],[7,8]]), 1, 'Test 3');
test(eraseOverlapIntervals([[1,2],[2,3]]), 0, 'Test 4');
test(eraseOverlapIntervals([[0,2],[1,3],[2,4],[3,5]]), 2, 'Test 5');
test(eraseOverlapIntervals([[-5,-4],[-4,-3],[-3,-2],[-2,-1]]), 0, 'Test 6');
test(eraseOverlapIntervals([[-2,-1],[0,1],[1,2],[2,3]]), 0, 'Test 7');
test(eraseOverlapIntervals([[1,10],[2,3],[4,5],[6,7],[8,9]]), 1, 'Test 8');
test(eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]]), 2, 'Test 9');
test(eraseOverlapIntervals([[1,10],[2,6],[3,5],[7,9]]), 2, 'Test 10');
test(eraseOverlapIntervals([[-5,5],[0,1],[1,2],[2,3],[3,4]]), 1, 'Test 11');
test(eraseOverlapIntervals([[1,3],[2,4],[3,5],[4,6]]), 2, 'Test 12');
test(eraseOverlapIntervals([[1,2],[1,2],[1,2]]), 2, 'Test 13');
test(eraseOverlapIntervals([[-1,1],[1,2],[2,3],[3,4]]), 0, 'Test 14');
test(eraseOverlapIntervals([[1,3],[3,5],[5,7],[7,9],[9,11],[11,13],[13,15],[15,17],[17,19],[19,21]]), 0, 'Test 15');
test(eraseOverlapIntervals([[-1,1], [0,2], [1,3], [2,4], [3,5], [4,6], [5,7], [6,8], [7,9]]), 4, 'Test 16');
test(eraseOverlapIntervals([[1,4],[1,2],[2,3],[3,4],[4,5],[5,6]]), 1, 'Test 17');
test(eraseOverlapIntervals([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]), 0, 'Test 18');
test(eraseOverlapIntervals([[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2]]), 6, 'Test 19');
test(eraseOverlapIntervals([[-10,0],[-5,-2],[0,5],[5,10]]), 1, 'Test 20');
test(eraseOverlapIntervals([[1, 100], [2, 99], [3, 98], [4, 97], [5, 96], [6, 95], [7, 94], [8, 93], [9, 92], [10, 91]]), 9, 'Test 21');
test(eraseOverlapIntervals([[-5,0],[0,5],[5,10],[10,15],[-4,1],[2,8]]), 2, 'Test 22');
test(eraseOverlapIntervals([[5,10],[6,8],[8,10],[9,12],[10,14]]), 2, 'Test 23');
test(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10]]), 0, 'Test 24');
test(eraseOverlapIntervals([[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9]]), 3, 'Test 25');
test(eraseOverlapIntervals([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11]]), 0, 'Test 26');
test(eraseOverlapIntervals([[-1, 1], [0, 2], [-2, 0], [1, 3]]), 2, 'Test 27');
test(eraseOverlapIntervals([[1, 10], [5, 15], [10, 20], [15, 25]]), 2, 'Test 28');
test(eraseOverlapIntervals([[1,10000], [5000,15000], [10000,20000], [15000,25000]]), 2, 'Test 29');
test(eraseOverlapIntervals([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14]]), 0, 'Test 30');
test(eraseOverlapIntervals([[-1,1],[0,2],[2,3],[-3,-2]]), 1, 'Test 31');
test(eraseOverlapIntervals([[-50000, 50000], [-49999, 49999], [0, 1], [1, 2], [2, 3]]), 2, 'Test 32');
test(eraseOverlapIntervals([[-5,5],[-4,4],[-3,3],[-2,2],[-1,1],[0,0],[1,1],[2,2],[3,3],[4,4],[5,5]]), 5, 'Test 33');
test(eraseOverlapIntervals([[1,10],[2,3],[4,5],[6,7],[8,9],[9,10]]), 1, 'Test 34');
test(eraseOverlapIntervals([[0,10],[10,20],[20,30],[30,40],[0,40]]), 1, 'Test 35');
test(eraseOverlapIntervals([[1,10],[2,9],[3,8],[4,7],[5,6]]), 4, 'Test 36');
test(eraseOverlapIntervals([[1, 3], [3, 5], [5, 7], [7, 9], [9, 11], [11, 13], [13, 15], [15, 17], [17, 19], [19, 21]]), 0, 'Test 37');
test(eraseOverlapIntervals([[-1,1],[-2,-1],[1,2],[0,1],[2,3],[3,4],[4,5]]), 1, 'Test 38');
test(eraseOverlapIntervals([[1,5],[2,3],[4,6],[7,8],[9,10],[11,12]]), 1, 'Test 39');
test(eraseOverlapIntervals([[-50000,50000],[0,1],[1,2],[2,3],[3,4]]), 1, 'Test 40');
test(eraseOverlapIntervals([[1,20],[3,5],[2,4],[6,7],[8,10],[11,12]]), 2, 'Test 41');
test(eraseOverlapIntervals([[1,10], [2,9], [3,8], [4,7], [5,6], [6,5], [7,4], [8,3], [9,2], [10,1]]), 4, 'Test 42');
test(eraseOverlapIntervals([[1,2], [3,4], [5,6], [7,8], [9,10], [11,12], [13,14], [15,16], [17,18], [19,20], [1,11], [11,21], [21,31], [31,41], [41,51]]), 2, 'Test 43');
test(eraseOverlapIntervals([[-1,1],[0,2],[2,3],[3,4],[4,5],[5,6]]), 1, 'Test 44');
test(eraseOverlapIntervals([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]]), 0, 'Test 45');
test(eraseOverlapIntervals([[1,10],[2,3],[3,5],[4,6],[5,7],[6,8],[7,9]]), 3, 'Test 46');
test(eraseOverlapIntervals([[1,3],[1,2],[2,3],[2,4],[3,5],[4,6],[5,7]]), 3, 'Test 47');
test(eraseOverlapIntervals([[1,5],[3,7],[6,10],[10,15],[14,20]]), 2, 'Test 48');
test(eraseOverlapIntervals([[5,10],[15,20],[5,15],[10,25],[25,30]]), 2, 'Test 49');
test(eraseOverlapIntervals([[1,20],[5,10],[15,25],[20,30],[25,35],[30,40],[35,45],[40,50],[45,55],[50,60]]), 5, 'Test 50');
test(eraseOverlapIntervals([[1, 4], [2, 5], [3, 6], [4, 7], [5, 8]]), 3, 'Test 51');
test(eraseOverlapIntervals([[-5,5],[0,10],[5,15],[10,20]]), 2, 'Test 52');
test(eraseOverlapIntervals([[1,4],[2,5],[3,6],[4,7]]), 2, 'Test 53');
test(eraseOverlapIntervals([[1,3],[1,2],[1,1],[1,0],[0,1],[0,0],[-1,0],[-2,-1]]), 3, 'Test 54');
test(eraseOverlapIntervals([[-1,1],[-2,-1],[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9]]), 4, 'Test 55');
test(eraseOverlapIntervals([[-5,-3],[-4,-2],[-3,-1],[-2,0],[-1,1],[0,2],[2,4],[4,6]]), 3, 'Test 56');
test(eraseOverlapIntervals([[0, 5], [1, 6], [2, 7], [3, 8], [4, 9], [5, 10], [6, 11], [7, 12], [8, 13], [9, 14]]), 8, 'Test 57');
test(eraseOverlapIntervals([[10,20],[15,25],[20,30],[25,35],[30,40],[35,45]]), 3, 'Test 58');
test(eraseOverlapIntervals([[1,100],[2,99],[3,98],[4,97],[5,96]]), 4, 'Test 59');
test(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2]]), 9, 'Test 60');
test(eraseOverlapIntervals([[1,2], [2,3], [3,4], [4,5], [5,6], [6,7], [7,8], [8,9], [9,10]]), 0, 'Test 61');
test(eraseOverlapIntervals([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]]), 0, 'Test 62');
test(eraseOverlapIntervals([[1,3],[1,4],[1,5],[2,4],[2,5],[3,5],[3,6],[4,6],[4,7],[5,7]]), 7, 'Test 63');
test(eraseOverlapIntervals([[1,100],[2,99],[3,98],[4,97],[5,96],[6,95],[7,94]]), 6, 'Test 64');
test(eraseOverlapIntervals([[1,10],[2,5],[3,7],[4,8],[5,9],[6,11]]), 4, 'Test 65');
test(eraseOverlapIntervals([[1,2], [1,3], [1,4], [1,5], [1,6], [1,7], [1,8], [1,9], [1,10], [1,11]]), 9, 'Test 66');
test(eraseOverlapIntervals([[1,10], [5,15], [10,20], [15,25], [20,30], [25,35], [30,40], [35,45], [40,50], [45,55], [50,60], [55,65], [60,70], [65,75], [70,80]]), 7, 'Test 67');
test(eraseOverlapIntervals([[1,2], [2,3], [3,4], [4,5], [5,6], [6,7], [7,8], [8,9], [9,10], [10,11], [11,12], [12,13], [13,14], [14,15], [15,16]]), 0, 'Test 68');
test(eraseOverlapIntervals([[-10000,-9000],[-8000,-7000],[-6000,-5000],[-4000,-3000],[-2000,-1000],[0,1000],[1000,2000],[2000,3000],[3000,4000]]), 0, 'Test 69');
test(eraseOverlapIntervals([[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]]), 5, 'Test 70');
test(eraseOverlapIntervals([[-1,1],[1,3],[2,4],[3,5]]), 1, 'Test 71');
test(eraseOverlapIntervals([[-50000, 50000], [49999, 50001], [-50001, -49999], [-10000, 10000]]), 1, 'Test 72');
test(eraseOverlapIntervals([[1, 3], [2, 5], [3, 7], [4, 9], [5, 11], [6, 13], [7, 15], [8, 17], [9, 19], [10, 21]]), 7, 'Test 73');
test(eraseOverlapIntervals([[1,5], [2,6], [3,7], [4,8], [5,9], [6,10], [7,11], [8,12], [9,13], [10,14], [11,15], [12,16], [13,17], [14,18], [15,19]]), 11, 'Test 74');
test(eraseOverlapIntervals([[1, 2], [3, 4], [2, 3], [4, 5], [3, 4], [5, 6]]), 1, 'Test 75');
test(eraseOverlapIntervals([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [1, 10], [11, 20]]), 1, 'Test 76');
test(eraseOverlapIntervals([[1,4],[2,5],[3,6],[4,7],[5,8],[6,9]]), 4, 'Test 77');
test(eraseOverlapIntervals([[1, 10], [2, 3], [4, 5], [6, 7], [8, 9], [10, 11]]), 1, 'Test 78');
test(eraseOverlapIntervals([[1, 3], [3, 5], [5, 7], [7, 9], [9, 11], [11, 13], [13, 15], [15, 17], [17, 19], [19, 21], [1, 21]]), 1, 'Test 79');
test(eraseOverlapIntervals([[1,4],[2,8],[3,9],[4,10],[5,11],[6,12]]), 4, 'Test 80');
test(eraseOverlapIntervals([[10,20],[20,30],[30,40],[15,25],[25,35],[35,45]]), 3, 'Test 81');
test(eraseOverlapIntervals([[1, 5], [2, 3], [3, 4], [4, 5], [5, 6]]), 1, 'Test 82');
test(eraseOverlapIntervals([[-1, 0], [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9]]), 0, 'Test 83');
test(eraseOverlapIntervals([[5,10],[10,15],[15,20],[20,25],[25,30],[30,35],[35,40],[40,45],[45,50]]), 0, 'Test 84');
test(eraseOverlapIntervals([[-5, -3], [-4, -2], [-3, -1], [-2, 0], [-1, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 6]]), 5, 'Test 85');
test(eraseOverlapIntervals([[1,10],[2,3],[4,5],[6,7],[8,9],[1,2],[3,4],[5,6],[7,8],[9,10]]), 1, 'Test 86');
test(eraseOverlapIntervals([[1,3],[1,3],[1,3],[1,3]]), 3, 'Test 87');
test(eraseOverlapIntervals([[-1,1],[0,2],[-2,-1],[1,3],[2,4],[-3,-2],[4,5]]), 2, 'Test 88');
test(eraseOverlapIntervals([[1,2],[3,4],[5,6],[7,8],[9,10],[1,11]]), 1, 'Test 89');
test(eraseOverlapIntervals([[-10,-5],[-5,0],[0,5],[5,10],[10,15],[15,20],[20,25],[25,30]]), 0, 'Test 90');
test(eraseOverlapIntervals([[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[5,9]]), 5, 'Test 91');
test(eraseOverlapIntervals([[1,3],[2,5],[4,6],[5,7],[6,8],[7,9],[8,10]]), 3, 'Test 92');
test(eraseOverlapIntervals([[1,2],[1,2],[1,2],[2,3],[2,3],[2,3],[3,4],[3,4],[3,4]]), 6, 'Test 93');
test(eraseOverlapIntervals([[1,3],[2,4],[3,5],[4,6],[5,7]]), 2, 'Test 94');
test(eraseOverlapIntervals([[10, 20], [15, 25], [20, 30], [25, 35], [30, 40], [5, 15], [25, 35]]), 4, 'Test 95');
test(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 4], [2, 5], [3, 6], [4, 7], [5, 8], [6, 9], [7, 10]]), 5, 'Test 96');
test(eraseOverlapIntervals([[-10,0],[0,10],[10,20],[-20,-10],[-10,-5],[-5,0],[0,5],[5,10],[10,15]]), 3, 'Test 97');
test(eraseOverlapIntervals([[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]]), 0, 'Test 98');
test(eraseOverlapIntervals([[1,5],[2,3],[4,6],[7,8],[8,9],[9,10]]), 1, 'Test 99');
test(eraseOverlapIntervals([[1,1000],[2,999],[3,998],[4,997],[5,996],[6,995],[7,994],[8,993]]), 7, 'Test 100');
test(eraseOverlapIntervals([[1,4],[2,6],[8,10],[15,18]]), 1, 'Test 101');
test(eraseOverlapIntervals([[-1,1],[0,2],[1,3],[2,4],[3,5],[4,6]]), 3, 'Test 102');
test(eraseOverlapIntervals([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]]), 0, 'Test 103');
test(eraseOverlapIntervals([[1,5],[5,10],[10,15],[15,20]]), 0, 'Test 104');
test(eraseOverlapIntervals([[1,2],[1,2],[1,2],[1,2],[1,2],[1,2]]), 5, 'Test 105');
test(eraseOverlapIntervals([[1, 5], [5, 10], [10, 15], [15, 20], [20, 25], [1, 25]]), 1, 'Test 106');
test(eraseOverlapIntervals([[1,5],[3,7],[4,10],[6,12]]), 2, 'Test 107');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

