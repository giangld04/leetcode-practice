// Test: 3111. Minimum Rectangles To Cover Points
// 118 test cases from LeetCodeDataset
// Run: node test.js

const { minRectanglesToCoverPoints } = require("./solution");

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

console.log("\n3111. Minimum Rectangles To Cover Points\n");

test(minRectanglesToCoverPoints([[1,10],[2,20],[3,30],[4,40],[5,50]], 1), 3, 'Test 1');
test(minRectanglesToCoverPoints([[5,5],[10,10],[15,15]], 5), 2, 'Test 2');
test(minRectanglesToCoverPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]], 3), 3, 'Test 3');
test(minRectanglesToCoverPoints([[2,3],[1,2]], 0), 2, 'Test 4');
test(minRectanglesToCoverPoints([[5,5],[6,6],[7,7],[8,8],[9,9]], 2), 2, 'Test 5');
test(minRectanglesToCoverPoints([[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6]], 2), 3, 'Test 6');
test(minRectanglesToCoverPoints([[1,1],[2,2],[3,3],[4,4],[5,5]], 10), 1, 'Test 7');
test(minRectanglesToCoverPoints([[1,1],[2,2],[3,3],[4,4],[5,5]], 4), 1, 'Test 8');
test(minRectanglesToCoverPoints([[1,1],[3,3],[5,5],[7,7],[9,9]], 2), 3, 'Test 9');
test(minRectanglesToCoverPoints([[100,100],[200,200],[300,300],[400,400],[500,500]], 150), 3, 'Test 10');
test(minRectanglesToCoverPoints([[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]], 1), 5, 'Test 11');
test(minRectanglesToCoverPoints([[10,10],[20,20],[30,30]], 10), 2, 'Test 12');
test(minRectanglesToCoverPoints([[100,100],[101,101],[102,102],[103,103]], 2), 2, 'Test 13');
test(minRectanglesToCoverPoints([[2,1],[1,0],[1,4],[1,8],[3,5],[4,6]], 1), 2, 'Test 14');
test(minRectanglesToCoverPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]], 2), 4, 'Test 15');
test(minRectanglesToCoverPoints([[5,5],[10,10],[15,15],[20,20]], 5), 2, 'Test 16');
test(minRectanglesToCoverPoints([[1,1],[3,3],[5,5],[7,7],[9,9],[11,11],[13,13],[15,15]], 2), 4, 'Test 17');
test(minRectanglesToCoverPoints([[1,1],[1,2],[1,3],[1,4],[1,5]], 0), 1, 'Test 18');
test(minRectanglesToCoverPoints([[5, 10], [6, 20], [7, 30], [8, 40], [9, 50], [10, 60], [11, 70], [12, 80], [13, 90], [14, 100], [15, 110], [16, 120], [17, 130]], 2), 5, 'Test 19');
test(minRectanglesToCoverPoints([[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[11,5],[12,5],[13,5],[14,5],[15,5]], 3), 4, 'Test 20');
test(minRectanglesToCoverPoints([[1,5],[2,3],[4,8],[6,10],[7,6],[9,12]], 3), 2, 'Test 21');
test(minRectanglesToCoverPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]], 1), 5, 'Test 22');
test(minRectanglesToCoverPoints([[1,10],[2,9],[3,8],[4,7],[5,6],[6,5],[7,4],[8,3],[9,2],[10,1],[11,10],[12,9],[13,8],[14,7],[15,6],[16,5],[17,4],[18,3],[19,2],[20,1]], 2), 7, 'Test 23');
test(minRectanglesToCoverPoints([[1,10],[2,20],[3,30],[4,40],[5,50],[6,60],[7,70],[8,80],[9,90],[10,100]], 1), 5, 'Test 24');
test(minRectanglesToCoverPoints([[1,100],[2,90],[3,80],[4,70],[5,60],[6,50],[7,40],[8,30],[9,20],[10,10]], 1), 5, 'Test 25');
test(minRectanglesToCoverPoints([[5,5],[10,15],[15,25],[20,35],[25,45],[30,55],[35,65],[40,75],[45,85],[50,95]], 10), 4, 'Test 26');
test(minRectanglesToCoverPoints([[1,10],[2,10],[3,10],[4,10],[5,10],[6,10],[7,10],[8,10],[9,10],[10,10]], 1), 5, 'Test 27');
test(minRectanglesToCoverPoints([[5,5],[10,10],[15,15],[20,20],[25,25],[30,30],[35,35],[40,40],[45,45],[50,50],[55,55],[60,60],[65,65],[70,70],[75,75],[80,80],[85,85],[90,90],[95,95],[100,100]], 15), 5, 'Test 28');
test(minRectanglesToCoverPoints([[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10]], 0), 1, 'Test 29');
test(minRectanglesToCoverPoints([[100, 100], [101, 101], [102, 102], [103, 103], [104, 104], [105, 105], [106, 106], [107, 107], [108, 108], [109, 109]], 3), 3, 'Test 30');
test(minRectanglesToCoverPoints([[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3], [4, 1], [4, 2], [4, 3], [5, 1], [5, 2], [5, 3]], 1), 3, 'Test 31');
test(minRectanglesToCoverPoints([[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10]], 1), 1, 'Test 32');
test(minRectanglesToCoverPoints([[1000000000,1],[999999999,2],[999999998,3],[999999997,4],[999999996,5],[999999995,6]], 1), 3, 'Test 33');
test(minRectanglesToCoverPoints([[1,10],[2,9],[3,8],[4,7],[5,6],[6,5],[7,4],[8,3],[9,2],[10,1]], 3), 3, 'Test 34');
test(minRectanglesToCoverPoints([[1,5],[2,4],[3,3],[4,2],[5,1],[6,0],[7,1],[8,2],[9,3],[10,4]], 1), 5, 'Test 35');
test(minRectanglesToCoverPoints([[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10]], 2), 1, 'Test 36');
test(minRectanglesToCoverPoints([[1,10],[2,20],[3,30],[4,40],[5,50],[6,60],[7,70],[8,80],[9,90],[10,100]], 5), 2, 'Test 37');
test(minRectanglesToCoverPoints([[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],[13,1],[14,1],[15,1]], 4), 3, 'Test 38');
test(minRectanglesToCoverPoints([[1,9],[3,8],[5,7],[7,6],[9,5],[11,4],[13,3],[15,2],[17,1],[19,0]], 2), 5, 'Test 39');
test(minRectanglesToCoverPoints([[0,1],[0,2],[0,3],[0,4],[0,5],[1,1],[1,2],[1,3],[1,4],[1,5]], 0), 2, 'Test 40');
test(minRectanglesToCoverPoints([[1,5],[3,6],[5,7],[7,8],[9,9],[11,10],[13,11],[15,12],[17,13],[19,14]], 5), 4, 'Test 41');
test(minRectanglesToCoverPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 15]], 3), 4, 'Test 42');
test(minRectanglesToCoverPoints([[0,10],[1,9],[2,8],[3,7],[4,6],[5,5],[6,4],[7,3],[8,2],[9,1]], 2), 4, 'Test 43');
test(minRectanglesToCoverPoints([[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5]], 2), 4, 'Test 44');
test(minRectanglesToCoverPoints([[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],[13,1],[14,1],[15,1],[16,1],[17,1],[18,1],[19,1],[20,1],[21,1],[22,1],[23,1],[24,1],[25,1]], 3), 7, 'Test 45');
test(minRectanglesToCoverPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15],[16,16],[17,17],[18,18],[19,19],[20,20],[21,21],[22,22],[23,23],[24,24],[25,25],[26,26],[27,27],[28,28],[29,29],[30,30]], 3), 8, 'Test 46');
test(minRectanglesToCoverPoints([[1,1],[2,3],[3,5],[4,7],[5,9],[6,11],[7,13],[8,15],[9,17],[10,19]], 4), 2, 'Test 47');
test(minRectanglesToCoverPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15],[16,16],[17,17],[18,18],[19,19],[20,20]], 5), 4, 'Test 48');
test(minRectanglesToCoverPoints([[10,5],[12,7],[14,9],[16,11],[18,13],[20,15]], 5), 2, 'Test 49');
test(minRectanglesToCoverPoints([[1,1],[1,10],[1,20],[1,30],[1,40],[1,50],[1,60],[1,70],[1,80],[1,90],[1,100]], 1), 1, 'Test 50');
test(minRectanglesToCoverPoints([[0,10],[1,9],[2,8],[3,7],[4,6],[5,5],[6,4],[7,3],[8,2],[9,1]], 4), 2, 'Test 51');
test(minRectanglesToCoverPoints([[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10]], 1), 1, 'Test 52');
test(minRectanglesToCoverPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13]], 4), 3, 'Test 53');
test(minRectanglesToCoverPoints([[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],[3,0],[3,1],[3,2]], 2), 2, 'Test 54');
test(minRectanglesToCoverPoints([[0,0],[2,2],[4,4],[6,6],[8,8],[10,10],[12,12],[14,14],[16,16]], 3), 5, 'Test 55');
test(minRectanglesToCoverPoints([[1,10],[2,9],[3,8],[4,7],[5,6],[6,5],[7,4],[8,3],[9,2],[10,1]], 1), 5, 'Test 56');
test(minRectanglesToCoverPoints([[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],[13,1],[14,1],[15,1],[16,1],[17,1],[18,1],[19,1],[20,1],[21,1],[22,1],[23,1],[24,1],[25,1],[26,1],[27,1],[28,1],[29,1],[30,1]], 2), 10, 'Test 57');
test(minRectanglesToCoverPoints([[1,100],[2,90],[3,80],[4,70],[5,60],[6,50],[7,40],[8,30],[9,20],[10,10]], 5), 2, 'Test 58');
test(minRectanglesToCoverPoints([[1, 1], [3, 1], [5, 1], [7, 1], [9, 1], [11, 1], [13, 1], [15, 1], [17, 1], [19, 1], [21, 1], [23, 1], [25, 1]], 4), 5, 'Test 59');
test(minRectanglesToCoverPoints([[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1]], 1), 5, 'Test 60');
test(minRectanglesToCoverPoints([[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5]], 4), 2, 'Test 61');
test(minRectanglesToCoverPoints([[1000000000,1000000000],[500000000,500000000],[0,0],[1,1],[2,2],[3,3],[4,4]], 500000000), 2, 'Test 62');
test(minRectanglesToCoverPoints([[0, 0], [1, 1], [2, 1], [3, 2], [4, 2], [5, 3], [6, 3], [7, 4], [8, 4], [9, 5], [10, 5]], 2), 4, 'Test 63');
test(minRectanglesToCoverPoints([[10,5],[15,8],[20,12],[25,15],[30,20],[35,25],[40,30],[45,35],[50,40]], 5), 5, 'Test 64');
test(minRectanglesToCoverPoints([[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10]], 0), 1, 'Test 65');
test(minRectanglesToCoverPoints([[1,1],[10,10],[20,20],[30,30],[40,40],[50,50],[60,60],[70,70],[80,80],[90,90],[100,100]], 10), 6, 'Test 66');
test(minRectanglesToCoverPoints([[1,10],[2,11],[3,12],[4,13],[5,14],[6,15],[7,16],[8,17],[9,18],[10,19]], 5), 2, 'Test 67');
test(minRectanglesToCoverPoints([[1000000000,1000000000],[999999999,999999999],[999999998,999999998],[999999997,999999997]], 3), 1, 'Test 68');
test(minRectanglesToCoverPoints([[1,10],[1,20],[1,30],[1,40],[1,50],[1,60],[1,70],[1,80],[1,90],[1,100],[1,110]], 0), 1, 'Test 69');
test(minRectanglesToCoverPoints([[1,5],[2,4],[3,3],[4,2],[5,1]], 2), 2, 'Test 70');
test(minRectanglesToCoverPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]], 5), 2, 'Test 71');
test(minRectanglesToCoverPoints([[1,5],[2,6],[3,7],[4,8],[5,9],[6,10]], 2), 2, 'Test 72');
test(minRectanglesToCoverPoints([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25],[25,26]], 2), 9, 'Test 73');
test(minRectanglesToCoverPoints([[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],[1,15],[1,16],[1,17],[1,18],[1,19],[1,20]], 2), 1, 'Test 74');
test(minRectanglesToCoverPoints([[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],[13,1],[14,1],[15,1],[16,1],[17,1],[18,1],[19,1],[20,1]], 3), 5, 'Test 75');
test(minRectanglesToCoverPoints([[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],[13,1],[14,1],[15,1]], 3), 4, 'Test 76');
test(minRectanglesToCoverPoints([[1,10],[2,10],[3,10],[4,10],[5,10],[6,10],[7,10],[8,10],[9,10],[10,10],[11,10],[12,10],[13,10],[14,10],[15,10]], 2), 5, 'Test 77');
test(minRectanglesToCoverPoints([[1,10],[2,15],[3,20],[4,25],[5,30],[6,35]], 2), 2, 'Test 78');
test(minRectanglesToCoverPoints([[1,10],[2,9],[3,8],[4,7],[5,6],[6,5],[7,4],[8,3],[9,2],[10,1]], 2), 4, 'Test 79');
test(minRectanglesToCoverPoints([[10,1],[20,2],[30,3],[40,4],[50,5],[60,6],[70,7],[80,8],[90,9],[100,10]], 10), 5, 'Test 80');
test(minRectanglesToCoverPoints([[1, 5], [3, 10], [5, 15], [7, 20], [9, 25], [11, 30], [13, 35], [15, 40], [17, 45], [19, 50], [21, 55], [23, 60], [25, 65]], 5), 5, 'Test 81');
test(minRectanglesToCoverPoints([[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],[1,15]], 2), 1, 'Test 82');
test(minRectanglesToCoverPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15]], 7), 2, 'Test 83');
test(minRectanglesToCoverPoints([[0,10],[5,20],[10,30],[15,40],[20,50],[25,60]], 5), 3, 'Test 84');
test(minRectanglesToCoverPoints([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14],[15,16],[17,18]], 2), 5, 'Test 85');
test(minRectanglesToCoverPoints([[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],[13,1],[14,1],[15,1],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2],[13,2],[14,2],[15,2]], 2), 5, 'Test 86');
test(minRectanglesToCoverPoints([[1,10],[2,15],[3,20],[4,25],[5,30],[6,35],[7,40],[8,45],[9,50],[10,55]], 5), 2, 'Test 87');
test(minRectanglesToCoverPoints([[1,1],[10,2],[19,3],[28,4],[37,5],[46,6],[55,7],[64,8],[73,9],[82,10],[91,11],[100,12],[109,13],[118,14],[127,15],[136,16],[145,17],[154,18],[163,19],[172,20]], 9), 10, 'Test 88');
test(minRectanglesToCoverPoints([[5,10],[10,20],[15,30],[20,40],[25,50],[30,60],[35,70],[40,80],[45,90],[50,100]], 10), 4, 'Test 89');
test(minRectanglesToCoverPoints([[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]], 1), 2, 'Test 90');
test(minRectanglesToCoverPoints([[1,10],[5,5],[10,1],[20,20],[25,25],[30,30],[35,35]], 15), 2, 'Test 91');
test(minRectanglesToCoverPoints([[10,1],[11,2],[12,3],[13,4],[14,5],[15,6],[16,7]], 3), 2, 'Test 92');
test(minRectanglesToCoverPoints([[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10]], 5), 1, 'Test 93');
test(minRectanglesToCoverPoints([[100,200],[105,210],[110,220],[115,230],[120,240],[125,250],[130,260]], 5), 4, 'Test 94');
test(minRectanglesToCoverPoints([[1,1],[1,2],[1,3],[1,4],[1,5],[2,1],[2,2],[2,3],[2,4],[2,5]], 1), 1, 'Test 95');
test(minRectanglesToCoverPoints([[0,10],[1,10],[2,10],[3,10],[4,10],[5,10],[6,10],[7,10],[8,10],[9,10]], 2), 4, 'Test 96');
test(minRectanglesToCoverPoints([[10, 5], [15, 15], [20, 25], [25, 35], [30, 45], [35, 55], [40, 65], [45, 75], [50, 85], [55, 95]], 10), 4, 'Test 97');
test(minRectanglesToCoverPoints([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]], 5), 1, 'Test 98');
test(minRectanglesToCoverPoints([[1,10],[2,10],[3,10],[4,10],[5,10],[6,10],[7,10],[8,10],[9,10],[10,10]], 3), 3, 'Test 99');
test(minRectanglesToCoverPoints([[1,2],[4,5],[7,8],[10,11],[13,14],[16,17],[19,20]], 5), 4, 'Test 100');
test(minRectanglesToCoverPoints([[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],[13,1]], 3), 4, 'Test 101');
test(minRectanglesToCoverPoints([[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]], 2), 4, 'Test 102');
test(minRectanglesToCoverPoints([[5,5],[10,15],[15,25],[20,35],[25,45],[30,55],[35,65],[40,75],[45,85],[50,95]], 15), 3, 'Test 103');
test(minRectanglesToCoverPoints([[10,10],[11,10],[12,10],[13,10],[14,10],[15,10],[16,10],[17,10],[18,10],[19,10]], 1), 5, 'Test 104');
test(minRectanglesToCoverPoints([[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10]], 1), 1, 'Test 105');
test(minRectanglesToCoverPoints([[1,100],[2,150],[3,200],[4,250],[5,300],[6,350],[7,400],[8,450],[9,500],[10,550]], 300), 1, 'Test 106');
test(minRectanglesToCoverPoints([[1,100],[2,90],[3,80],[4,70],[5,60],[6,50],[7,40],[8,30],[9,20],[10,10]], 15), 1, 'Test 107');
test(minRectanglesToCoverPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15]], 2), 5, 'Test 108');
test(minRectanglesToCoverPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13]], 2), 5, 'Test 109');
test(minRectanglesToCoverPoints([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11]], 3), 3, 'Test 110');
test(minRectanglesToCoverPoints([[5,1],[6,2],[7,3],[8,4],[9,5],[10,6],[11,7],[12,8],[13,9],[14,10]], 2), 4, 'Test 111');
test(minRectanglesToCoverPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]], 10), 1, 'Test 112');
test(minRectanglesToCoverPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 15], [16, 16], [17, 17], [18, 18], [19, 19], [20, 20]], 5), 4, 'Test 113');
test(minRectanglesToCoverPoints([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15],[16,16],[17,17],[18,18],[19,19],[20,20],[21,21],[22,22],[23,23],[24,24],[25,25]], 5), 5, 'Test 114');
test(minRectanglesToCoverPoints([[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11]], 4), 3, 'Test 115');
test(minRectanglesToCoverPoints([[5,10],[10,15],[15,20],[20,25],[25,30],[30,35],[35,40],[40,45],[45,50]], 10), 3, 'Test 116');
test(minRectanglesToCoverPoints([[1, 10], [2, 11], [3, 12], [4, 13], [5, 14], [6, 15], [7, 16], [8, 17], [9, 18], [10, 19]], 4), 2, 'Test 117');
test(minRectanglesToCoverPoints([[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11]], 3), 3, 'Test 118');

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
