// Test: 3123. Find Edges In Shortest Paths
// 67 test cases from LeetCodeDataset
// Run: node test.js

const { findAnswer } = require("./solution");

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

console.log("\n3123. Find Edges In Shortest Paths\n");

test(findAnswer(5, [[0,1,2],[0,2,2],[1,2,3],[1,3,2],[2,3,1],[2,4,4],[3,4,2]]), [false, true, false, false, true, false, true], 'Test 1');
test(findAnswer(7, [[0,1,2],[0,2,5],[1,2,1],[1,3,4],[2,3,2],[3,4,1],[4,5,3],[5,6,2]]), [true, false, true, false, true, true, true, true], 'Test 2');
test(findAnswer(5, [[0,1,2],[0,2,3],[1,2,1],[1,3,4],[2,3,2],[3,4,1]]), [true, true, true, false, true, true], 'Test 3');
test(findAnswer(10, [[0,1,1],[0,2,1],[0,3,1],[1,4,1],[1,5,1],[2,6,1],[2,7,1],[3,8,1],[3,9,1],[4,5,1],[6,7,1],[8,9,1]]), [false, false, true, false, false, false, false, false, true, false, false, false], 'Test 4');
test(findAnswer(7, [[0,1,3],[1,2,2],[2,3,1],[3,4,1],[4,5,2],[5,6,3]]), [true, true, true, true, true, true], 'Test 5');
test(findAnswer(5, [[0,1,1],[1,2,2],[2,3,3],[3,4,4],[0,4,10]]), [true, true, true, true, true], 'Test 6');
test(findAnswer(3, [[0,1,1],[0,2,5],[1,2,2]]), [true, false, true], 'Test 7');
test(findAnswer(4, [[2,0,1],[0,1,1],[0,3,4],[3,2,2]]), [true, false, false, true], 'Test 8');
test(findAnswer(6, [[0,1,4],[0,2,1],[1,3,2],[1,4,3],[1,5,1],[2,3,1],[3,5,3],[4,5,2]]), [true, true, true, false, true, true, true, false], 'Test 9');
test(findAnswer(3, [[0,1,1],[1,2,1],[0,2,4]]), [true, true, false], 'Test 10');
test(findAnswer(15, [[0,1,1],[0,2,1],[1,3,1],[1,4,1],[2,5,1],[2,6,1],[3,7,1],[3,8,1],[4,9,1],[4,10,1],[5,11,1],[5,12,1],[6,13,1],[6,14,1],[7,8,1],[9,10,1],[11,12,1],[13,14,1]]), [false, true, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false, false], 'Test 11');
test(findAnswer(25, [[0,1,5],[0,2,5],[1,3,3],[1,4,2],[2,5,3],[2,6,4],[3,7,1],[3,8,2],[4,9,1],[5,10,2],[5,11,3],[6,12,1],[6,13,4],[7,14,1],[7,15,2],[8,16,1],[8,17,2],[9,18,2],[10,19,1],[10,20,2],[11,21,2],[11,22,1],[12,23,1],[12,24,2],[13,23,2],[13,24,3]]), [false, true, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false], 'Test 12');
test(findAnswer(10, [[0,1,5],[0,2,2],[1,3,1],[1,4,6],[2,5,3],[3,6,2],[4,7,4],[5,8,5],[6,9,1],[7,9,3],[8,9,2]]), [true, false, true, false, false, true, false, false, true, false, false], 'Test 13');
test(findAnswer(15, [[0,1,10],[0,2,20],[1,3,5],[1,4,10],[2,5,15],[3,6,20],[4,7,25],[5,8,30],[6,9,35],[7,10,40],[8,11,45],[9,12,50],[10,13,55],[11,14,60],[0,6,65],[1,7,70],[2,8,75],[3,9,80],[4,10,85],[5,11,90],[6,12,95],[7,13,100],[8,14,105]]), [false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, false, false, false, false, false, false, true], 'Test 14');
test(findAnswer(12, [[0,1,3],[0,2,2],[1,3,1],[2,4,4],[3,5,2],[4,6,3],[5,7,1],[6,8,5],[7,9,2],[8,10,1],[9,11,3],[10,11,2],[0,5,7],[1,6,8],[2,7,9],[3,8,10],[4,9,11]]), [true, false, true, false, true, false, true, false, true, false, true, false, false, false, false, false, false], 'Test 15');
test(findAnswer(10, [[0,1,2],[1,2,2],[2,3,1],[3,4,3],[4,5,2],[5,6,1],[6,7,2],[7,8,3],[8,9,2],[0,9,10]]), [false, false, false, false, false, false, false, false, false, true], 'Test 16');
test(findAnswer(15, [[0,1,1],[0,2,2],[1,3,1],[1,4,2],[2,5,3],[2,6,4],[3,7,2],[3,8,3],[4,9,1],[4,10,4],[5,11,2],[5,12,3],[6,13,4],[6,14,5],[7,8,1],[9,10,2],[11,12,3],[13,14,4]]), [false, true, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false, false], 'Test 17');
test(findAnswer(10, [[0,1,2],[0,2,4],[0,3,1],[1,4,3],[1,5,1],[2,3,2],[2,6,5],[3,7,1],[4,8,2],[5,8,3],[6,9,4],[7,9,3],[8,9,1]]), [false, false, true, false, false, false, false, true, false, false, false, true, false], 'Test 18');
test(findAnswer(7, [[0,1,5],[0,2,10],[1,2,1],[1,3,4],[2,3,2],[3,4,3],[4,5,2],[5,6,1],[6,0,3]]), [false, false, false, false, false, false, false, false, true], 'Test 19');
test(findAnswer(12, [[0,1,2],[0,2,4],[1,3,3],[1,4,1],[2,4,2],[2,5,5],[3,6,2],[4,6,1],[4,7,4],[5,8,3],[6,9,2],[7,10,1],[8,10,3],[9,11,2],[10,11,1]]), [true, false, false, true, false, false, false, true, false, false, true, false, false, true, false], 'Test 20');
test(findAnswer(7, [[0,1,1],[0,2,2],[0,3,3],[1,2,4],[1,3,5],[2,4,6],[2,5,7],[3,4,8],[3,5,9],[4,6,10],[5,6,11]]), [false, true, false, false, false, true, false, false, false, true, false], 'Test 21');
test(findAnswer(7, [[0,1,5],[0,2,3],[1,3,2],[2,3,1],[3,4,4],[4,5,2],[5,6,1],[2,4,6],[0,5,7],[1,6,8]]), [false, false, false, false, false, false, true, false, true, false], 'Test 22');
test(findAnswer(9, [[0,1,1],[0,2,2],[0,3,3],[1,4,4],[1,5,5],[2,6,6],[2,7,7],[3,8,8],[4,5,9],[4,6,10],[5,7,11],[6,8,12],[7,8,13]]), [false, false, true, false, false, false, false, true, false, false, false, false, false], 'Test 23');
test(findAnswer(10, [[0,1,5],[0,2,3],[1,3,2],[1,4,6],[2,5,4],[2,6,2],[3,7,3],[4,8,1],[5,8,3],[6,9,5],[7,9,2],[8,9,4]]), [false, true, false, false, false, true, false, false, false, true, false, false], 'Test 24');
test(findAnswer(8, [[0,1,10],[0,2,5],[1,3,2],[1,4,1],[2,3,3],[2,4,7],[3,5,1],[4,6,4],[5,7,2],[6,7,1]]), [false, true, false, false, true, false, true, false, true, false], 'Test 25');
test(findAnswer(8, [[0,1,10],[0,2,20],[1,3,5],[1,4,15],[2,3,20],[2,5,10],[3,6,15],[4,6,5],[5,7,5],[6,7,10]]), [false, true, false, false, false, true, false, false, true, false], 'Test 26');
test(findAnswer(10, [[0,1,3],[0,2,1],[1,3,2],[1,4,4],[2,5,2],[3,6,1],[4,6,1],[5,7,2],[6,8,3],[7,9,1],[8,9,2]]), [false, true, false, false, true, false, false, true, false, true, false], 'Test 27');
test(findAnswer(15, [[0,1,1],[0,2,2],[1,3,3],[1,4,4],[2,5,2],[3,6,5],[4,7,1],[5,8,3],[6,9,4],[7,10,2],[8,11,1],[9,12,3],[10,13,4],[11,14,2],[12,14,5]]), [false, true, false, false, true, false, false, true, false, false, true, false, false, true, false], 'Test 28');
test(findAnswer(7, [[0,1,5],[0,2,3],[1,2,2],[1,3,6],[2,3,4],[2,4,3],[3,4,1],[3,5,2],[4,5,3],[4,6,4],[5,6,2]]), [false, true, false, false, false, true, false, false, false, true, false], 'Test 29');
test(findAnswer(8, [[0,1,5],[0,2,10],[1,3,2],[1,4,3],[2,3,1],[2,5,4],[3,6,3],[4,6,2],[5,6,1],[6,7,5]]), [true, false, true, true, false, false, true, true, false, true], 'Test 30');
test(findAnswer(20, [[0,1,5],[0,2,3],[1,3,4],[1,4,2],[2,5,1],[2,6,3],[3,7,2],[3,8,4],[4,9,2],[5,10,3],[5,11,1],[6,12,4],[6,13,1],[7,14,2],[7,15,3],[8,16,1],[8,17,4],[9,18,2],[10,19,3],[11,12,2],[13,14,1],[15,16,2],[17,18,3],[18,19,4]]), [false, true, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, true, false, false, false, false, false], 'Test 31');
test(findAnswer(10, [[0,1,1],[0,2,2],[0,3,3],[1,4,1],[2,5,2],[3,6,3],[4,7,1],[5,8,2],[6,9,3],[7,8,1],[7,9,2],[8,9,3]]), [true, false, false, true, false, false, true, false, false, false, true, false], 'Test 32');
test(findAnswer(11, [[0,1,2],[0,2,3],[1,2,1],[1,3,4],[1,4,5],[2,5,2],[2,6,3],[3,6,1],[3,7,4],[4,8,2],[4,9,3],[5,9,1],[5,10,2],[6,10,3],[7,8,1],[8,9,2],[8,10,1],[9,10,2]]), [true, true, true, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false], 'Test 33');
test(findAnswer(12, [[0,1,2],[0,2,3],[1,3,4],[1,4,5],[2,3,6],[2,4,7],[3,5,8],[4,5,9],[5,6,10],[5,7,11],[5,8,12],[6,9,13],[7,10,14],[8,11,15],[9,10,16],[10,11,17]]), [true, false, true, false, false, false, true, false, false, false, true, false, false, true, false, false], 'Test 34');
test(findAnswer(10, [[0,1,1],[0,2,2],[1,3,3],[1,4,4],[2,5,5],[2,6,6],[3,7,7],[4,8,8],[5,9,9],[6,9,9],[7,8,10]]), [false, true, false, false, true, false, false, false, true, false, false], 'Test 35');
test(findAnswer(8, [[0,1,1],[0,2,2],[0,3,3],[1,4,1],[2,4,1],[3,4,1],[4,5,2],[5,6,1],[6,7,2],[4,7,3]]), [true, false, false, true, false, false, false, false, false, true], 'Test 36');
test(findAnswer(10, [[0,1,1],[0,2,1],[0,3,1],[1,4,1],[1,5,1],[2,4,1],[2,6,1],[3,5,1],[3,7,1],[4,8,1],[5,8,1],[6,9,1],[7,9,1],[8,9,1],[0,4,1],[0,5,1],[0,6,1],[0,7,1],[0,8,1],[0,9,1]]), [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true], 'Test 37');
test(findAnswer(20, [[0,1,2],[0,2,4],[1,3,1],[1,4,3],[2,5,2],[2,6,4],[3,7,1],[4,8,1],[5,9,2],[6,10,1],[7,11,3],[8,12,2],[9,13,3],[10,14,1],[11,15,2],[12,16,1],[13,17,3],[14,18,2],[15,19,1],[16,18,2],[17,19,3]]), [true, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false, false], 'Test 38');
test(findAnswer(7, [[0,1,1],[0,2,2],[1,2,1],[1,3,3],[2,3,1],[2,4,2],[3,4,1],[3,5,3],[4,5,1],[4,6,2],[5,6,1]]), [true, true, true, false, true, true, true, false, true, true, true], 'Test 39');
test(findAnswer(9, [[0,1,1],[0,2,2],[0,3,3],[0,4,4],[1,5,1],[2,5,2],[3,5,3],[4,5,4],[5,6,5],[5,7,6],[5,8,7],[6,8,8],[7,8,9]]), [true, false, false, false, true, false, false, false, false, false, true, false, false], 'Test 40');
test(findAnswer(12, [[0,1,2],[0,2,3],[1,3,4],[1,4,5],[2,5,6],[2,6,7],[3,7,8],[3,8,9],[4,8,10],[4,9,11],[5,10,12],[5,11,13],[6,10,14],[6,11,15],[7,11,16],[8,11,17],[9,11,18]]), [false, true, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false], 'Test 41');
test(findAnswer(10, [[0,1,5],[0,2,3],[1,3,2],[2,4,1],[3,5,4],[4,6,2],[5,7,3],[6,8,1],[7,9,2],[8,9,4]]), [false, true, false, true, false, true, false, true, false, true], 'Test 42');
test(findAnswer(8, [[0,1,2],[0,2,3],[1,3,1],[1,4,4],[2,5,2],[3,6,3],[4,7,2],[5,6,1],[6,7,4]]), [true, false, false, true, false, false, true, false, false], 'Test 43');
test(findAnswer(9, [[0,1,2],[0,2,1],[0,3,3],[1,4,2],[1,5,4],[2,4,1],[2,6,3],[3,7,2],[3,8,1],[4,5,2],[5,6,3],[6,7,2],[7,8,1],[8,5,1]]), [false, false, true, false, false, false, false, false, true, false, false, false, false, false], 'Test 44');
test(findAnswer(12, [[0,1,2],[1,2,2],[2,3,2],[3,4,2],[4,5,2],[5,6,2],[6,7,2],[7,8,2],[8,9,2],[9,10,2],[10,11,2]]), [true, true, true, true, true, true, true, true, true, true, true], 'Test 45');
test(findAnswer(12, [[0,1,3],[0,2,5],[0,3,4],[1,4,2],[1,5,6],[2,4,3],[2,6,4],[3,7,5],[3,8,7],[4,9,2],[5,9,1],[6,9,3],[7,10,2],[8,10,3],[9,11,2]]), [true, false, false, true, false, false, false, false, false, true, false, false, false, false, true], 'Test 46');
test(findAnswer(8, [[0,1,10],[0,2,5],[1,3,4],[1,4,6],[2,3,3],[2,4,5],[3,5,2],[4,5,1],[5,6,7],[5,7,8],[6,7,9]]), [false, true, false, false, true, false, true, false, false, true, false], 'Test 47');
test(findAnswer(7, [[0,1,5],[0,2,3],[1,3,2],[1,4,1],[2,4,1],[2,5,4],[3,6,3],[4,6,2],[5,6,1]]), [false, true, false, false, true, false, false, true, false], 'Test 48');
test(findAnswer(10, [[0,1,5],[0,2,2],[1,3,3],[1,4,7],[2,3,1],[2,4,6],[3,5,4],[3,6,2],[4,7,5],[5,8,3],[6,8,2],[7,9,1],[8,9,4]]), [false, true, false, false, true, false, false, true, false, false, true, false, true], 'Test 49');
test(findAnswer(20, [[0,1,10],[0,2,20],[1,2,5],[1,3,15],[2,3,10],[2,4,20],[3,4,5],[3,5,15],[4,5,10],[4,6,20],[5,6,5],[5,7,15],[6,7,10],[6,8,20],[7,8,5],[7,9,15],[8,9,10],[8,10,20],[9,10,5],[9,11,15],[10,11,10],[10,12,20],[11,12,5],[11,13,15],[12,13,10],[12,14,20],[13,14,5],[14,15,10],[14,16,20],[15,16,5],[15,17,15],[16,17,10],[16,18,20],[17,18,5],[17,19,15],[18,19,10]]), [true, false, true, true, true, false, true, true, true, false, true, true, true, false, true, true, true, false, true, true, true, false, true, true, true, false, true, true, false, true, true, true, false, true, true, true], 'Test 50');
test(findAnswer(9, [[0,1,1],[0,2,2],[1,3,1],[1,4,2],[2,5,1],[2,6,2],[3,7,1],[4,7,2],[5,8,1],[6,8,2],[7,8,1]]), [true, true, true, false, true, false, true, false, true, false, true], 'Test 51');
test(findAnswer(12, [[0,1,10],[0,2,5],[1,3,2],[1,4,8],[2,5,3],[3,6,4],[4,7,3],[5,8,2],[6,9,5],[7,10,4],[8,11,3],[9,11,2]]), [false, true, false, false, true, false, false, true, false, false, true, false], 'Test 52');
test(findAnswer(30, [[0,1,1],[1,2,2],[2,3,3],[3,4,4],[4,5,5],[5,6,6],[6,7,7],[7,8,8],[8,9,9],[9,10,10],[10,11,11],[11,12,12],[12,13,13],[13,14,14],[14,15,15],[15,16,16],[16,17,17],[17,18,18],[18,19,19],[19,20,20],[20,21,21],[21,22,22],[22,23,23],[23,24,24],[24,25,25],[25,26,26],[26,27,27],[27,28,28],[28,29,29],[0,29,100]]), [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true], 'Test 53');
test(findAnswer(7, [[0,1,2],[0,2,3],[1,2,1],[1,3,4],[1,4,6],[2,4,5],[2,5,3],[3,5,1],[3,6,2],[4,6,3],[5,6,4]]), [true, false, false, true, false, false, false, false, true, false, false], 'Test 54');
test(findAnswer(8, [[0,1,4],[0,2,3],[1,3,2],[1,4,5],[2,5,1],[3,6,3],[4,6,2],[5,7,4],[6,7,1],[0,3,6],[1,2,7]]), [false, true, false, false, true, false, false, true, false, false, false], 'Test 55');
test(findAnswer(15, [[0,1,1],[0,2,2],[1,3,1],[1,4,3],[2,5,2],[2,6,4],[3,7,1],[4,8,1],[5,9,2],[6,10,1],[7,11,3],[8,12,2],[9,13,3],[10,14,1],[11,12,2],[12,13,1],[13,14,2]]), [false, true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false], 'Test 56');
test(findAnswer(15, [[0,1,10],[0,2,15],[1,2,5],[1,3,20],[2,3,10],[2,4,15],[3,4,5],[3,5,25],[4,5,10],[4,6,15],[5,6,5],[5,7,20],[6,7,10],[6,8,15],[7,8,5],[7,9,25],[8,9,10],[8,10,15],[9,10,5],[9,11,20],[10,11,10],[10,12,15],[11,12,5],[11,13,20],[12,13,10],[12,14,15],[13,14,5]]), [true, true, true, false, true, true, true, false, true, true, true, false, true, true, true, false, true, true, true, false, true, true, true, false, true, true, true], 'Test 57');
test(findAnswer(7, [[0,1,10],[0,2,5],[0,3,20],[1,4,2],[2,4,15],[2,5,1],[3,6,5],[4,6,10],[5,6,2]]), [false, true, false, false, false, true, false, false, true], 'Test 58');
test(findAnswer(8, [[0,1,2],[0,2,3],[1,3,4],[1,4,5],[2,3,1],[2,4,6],[3,5,7],[3,6,8],[4,5,9],[4,6,10],[5,7,11],[6,7,12]]), [false, true, false, false, true, false, true, false, false, false, true, false], 'Test 59');
test(findAnswer(10, [[0,1,5],[0,2,3],[1,2,2],[1,3,6],[2,3,1],[2,4,4],[3,4,2],[3,5,3],[4,5,1],[5,6,2],[6,7,3],[7,8,4],[8,9,5],[6,9,7]]), [false, true, false, false, true, false, true, true, true, true, false, false, false, true], 'Test 60');
test(findAnswer(8, [[0,1,1],[0,2,4],[1,2,2],[1,3,5],[2,3,1],[2,4,2],[3,4,3],[3,5,6],[4,5,1],[4,6,4],[5,6,2],[5,7,3],[6,7,1]]), [true, false, true, false, false, true, false, false, true, false, true, true, true], 'Test 61');
test(findAnswer(15, [[0,1,1],[0,2,2],[0,3,3],[1,4,1],[1,5,2],[2,6,1],[2,7,2],[3,8,1],[3,9,2],[4,10,1],[5,11,1],[6,12,1],[7,13,1],[8,14,1],[9,14,2],[10,11,1],[11,12,1],[12,13,1],[13,14,1]]), [false, false, true, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false], 'Test 62');
test(findAnswer(15, [[0,1,1],[0,2,2],[1,3,1],[1,4,1],[2,4,2],[2,5,2],[3,6,1],[4,6,1],[4,7,1],[5,8,2],[6,9,1],[7,9,1],[8,10,2],[9,11,1],[10,12,1],[11,13,2],[12,13,1],[13,14,1]]), [true, false, true, true, false, false, true, true, true, false, true, true, false, true, false, true, false, true], 'Test 63');
test(findAnswer(10, [[0,1,5],[0,2,10],[1,3,3],[1,4,7],[2,3,2],[2,5,8],[3,4,1],[3,6,4],[4,7,6],[5,6,1],[6,7,2],[6,8,3],[7,9,5],[8,9,1]]), [true, false, true, false, false, false, false, true, false, false, false, true, false, true], 'Test 64');
test(findAnswer(7, [[0,1,10],[0,2,20],[0,3,30],[1,4,10],[2,4,10],[3,4,10],[4,5,10],[4,6,20],[5,6,10]]), [true, false, false, true, false, false, true, true, true], 'Test 65');
test(findAnswer(9, [[0,1,1],[0,2,2],[1,3,3],[1,4,1],[2,4,2],[2,5,2],[3,6,4],[4,6,3],[4,7,2],[5,8,3],[6,8,2],[7,8,1]]), [true, false, false, true, false, false, false, false, true, false, false, true], 'Test 66');
test(findAnswer(6, [[0,1,1],[0,2,1],[1,3,1],[1,4,1],[2,3,1],[2,4,1],[3,5,1],[4,5,1]]), [true, true, true, true, true, true, true, true], 'Test 67');

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
