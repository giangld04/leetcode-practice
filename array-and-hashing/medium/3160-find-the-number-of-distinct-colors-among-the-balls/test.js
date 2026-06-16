// Test: 3160. Find The Number Of Distinct Colors Among The Balls
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { queryResults } = require("./solution");

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

console.log("\n3160. Find The Number Of Distinct Colors Among The Balls\n");

test(queryResults(3, [[0,1],[1,2],[2,3],[0,1]]), [1, 2, 3, 3], 'Test 1');
test(queryResults(1, [[0,1],[1,2]]), [1, 2], 'Test 2');
test(queryResults(4, [[0,1],[1,2],[2,2],[3,4],[4,5]]), [1, 2, 2, 3, 4], 'Test 3');
test(queryResults(10, [[0,10],[1,10],[2,10],[3,10],[4,10]]), [1, 1, 1, 1, 1], 'Test 4');
test(queryResults(5, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]]), [1, 2, 3, 4, 5, 6], 'Test 5');
test(queryResults(1, [[0,1],[0,2],[0,3],[0,4]]), [1, 1, 1, 1], 'Test 6');
test(queryResults(3, [[0,1],[1,1],[2,1],[3,1]]), [1, 1, 1, 1], 'Test 7');
test(queryResults(5, [[0,2],[1,2],[2,3],[3,4],[4,5]]), [1, 1, 2, 3, 4], 'Test 8');
test(queryResults(100000, [[0,1]] * 100000), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 9');
test(queryResults(4, [[1,4],[2,5],[1,3],[3,4]]), [1, 2, 2, 3], 'Test 10');
test(queryResults(10, [[0,10],[1,20],[2,30],[3,40],[4,50],[5,60],[6,70],[7,80],[8,90],[9,100]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 11');
test(queryResults(100, [[0,1],[50,2],[100,3]]), [1, 2, 3], 'Test 12');
test(queryResults(100000, [[i,i] for i in range[100001]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 13');
test(queryResults(10, [[0,1],[2,2],[4,3],[6,4],[8,5]]), [1, 2, 3, 4, 5], 'Test 14');
test(queryResults(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 15');
test(queryResults(10, [[0,10],[1,9],[2,8],[3,7],[4,6],[5,5]]), [1, 2, 3, 4, 5, 6], 'Test 16');
test(queryResults(5, [[0,10],[1,20],[2,10],[3,30],[4,40],[5,50]]), [1, 2, 2, 3, 4, 5], 'Test 17');
test(queryResults(10, [[i%5,i%5] for i in range[10]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 18');
test(queryResults(9, [[0,9],[1,8],[2,7],[3,6],[4,5],[5,4],[6,3],[7,2],[8,1],[9,9]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 9], 'Test 19');
test(queryResults(5, [[i, 5] for i in range[5]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 20');
test(queryResults(10, [[1,5],[2,6],[1,6],[3,7],[4,8],[2,8],[5,9],[6,9],[7,10],[8,10],[9,11]]), [1, 2, 1, 2, 3, 3, 4, 4, 5, 5, 6], 'Test 21');
test(queryResults(100000, [[i, [i * 1000] % 100000] for i in range[100000]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 22');
test(queryResults(50, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,1],[6,2],[7,3],[8,4],[9,5],[0,2],[1,3],[2,4],[3,5],[4,6]]), [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6], 'Test 23');
test(queryResults(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,1],[1,2],[2,3]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10], 'Test 24');
test(queryResults(100000, [[i, i % 10000] for i in range[100001]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 25');
test(queryResults(50, [[i, i+1] for i in range[50]] + [[i, i+2] for i in range[0, 50, 2]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 26');
test(queryResults(100, [[i, i % 10 + 1] for i in range[100]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 27');
test(queryResults(50, [[i, i+1] for i in range[50]] + [[i, i+1] for i in range[0, 50, 2]] + [[i, i+1] for i in range[1, 50, 2]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 28');
test(queryResults(1000000, [[i, 1000001 + i] for i in range[1000000]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 29');
test(queryResults(100, [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10]] + [[i, i+1] for i in range[10, 100]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 30');
test(queryResults(20, [[i, i+1] for i in range[20]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 31');
test(queryResults(5, [[0,1],[0,2],[0,3],[0,4],[0,5],[1,1],[2,2],[3,3],[4,4],[5,5]]), [1, 1, 1, 1, 1, 2, 3, 4, 5, 5], 'Test 32');
test(queryResults(100, [[i, 1] for i in range[101]] + [[i, 2] for i in range[101]] + [[i, 3] for i in range[101]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 33');
test(queryResults(100, [[i,i%10] for i in range[100]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 34');
test(queryResults(50, [[i, i+1] for i in range[50]] + [[i, i] for i in range[50]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 35');
test(queryResults(100000, [[i,i%1000] for i in range[100000]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 36');
test(queryResults(25, [[i, i+1] for i in range[25]] + [[i, i+2] for i in range[25]] + [[i, i+3] for i in range[25]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 37');
test(queryResults(100000, [[i, i % 1000] for i in range[100000]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 38');
test(queryResults(20, [[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],[13,1],[14,1],[15,1],[16,1],[17,1],[18,1],[19,1]]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 39');
test(queryResults(10, [[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1]]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 40');
test(queryResults(20, [[5,2],[5,3],[10,4],[15,5],[15,6],[10,7],[5,8],[5,9],[10,10],[15,11]]), [1, 1, 2, 3, 3, 3, 3, 3, 3, 3], 'Test 41');
test(queryResults(10, [[i, i%3+1] for i in range[10]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 42');
test(queryResults(100, [[i%50,i%50] for i in range[100]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 43');
test(queryResults(1000, [[i,i%10] for i in range[1000]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 44');
test(queryResults(10, [[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10]]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 45');
test(queryResults(10, [[0,1],[1,2],[2,1],[3,2],[4,3],[5,4],[6,5],[7,6],[8,7],[9,8],[10,9]]), [1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 46');
test(queryResults(500, [[i, [i*i] % 100] for i in range[500]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 47');
test(queryResults(1000, [[i, [i%50] + 1] for i in range[1000]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 48');
test(queryResults(500, [[i, i % 5 + 1] for i in range[500]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 49');
test(queryResults(5, [[i, i] for i in range[6]] + [[i, i+1] for i in range[5]] + [[i, i+2] for i in range[4]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 50');
test(queryResults(200, [[i, i] for i in range[200]] + [[i, i+100] for i in range[100]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 51');
test(queryResults(20, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,1],[1,3],[3,5],[5,2],[2,4]]), [1, 2, 3, 4, 5, 5, 4, 3, 4, 5], 'Test 52');
test(queryResults(10, [[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1]]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 53');
test(queryResults(100, [[i,1] for i in range[100]] + [[i,2] for i in range[100]] + [[i,3] for i in range[100]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 54');
test(queryResults(1000, [[i, 1] for i in range[500]] + [[i, 2] for i in range[500, 1000]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 55');
test(queryResults(1000, [[i, [i // 10] % 10 + 1] for i in range[1000]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 56');
test(queryResults(10, [[1,10],[2,10],[3,10],[4,10],[5,10],[6,10],[7,10],[8,10],[9,10],[10,10]]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 57');
test(queryResults(100000, [[i, i+1] for i in range[0, 100000, 10000]] + [[i, i+2] for i in range[1, 100000, 10000]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 58');
test(queryResults(1000000, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]] * 10000), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 59');
test(queryResults(100, [[i, i%10+1] for i in range[100]] + [[i, i%5+1] for i in range[100]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 60');
test(queryResults(10, [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10]]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 61');
test(queryResults(100000, [[i, [i * i * i] % 100000] for i in range[100000]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 62');
test(queryResults(1000000, [[i, i % 100000] for i in range[100001]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 63');
test(queryResults(5, [[1,1],[1,1],[1,1],[1,1],[1,1]]), [1, 1, 1, 1, 1], 'Test 64');
test(queryResults(50000, [[i, [i%100] + 1] for i in range[50000]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 65');
test(queryResults(1000, [[i, i] for i in range[1000]] + [[i, i+1] for i in range[999]] + [[i, i+2] for i in range[998]] + [[i, i+3] for i in range[997]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 66');
test(queryResults(20, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 67');
test(queryResults(1000, [[i, [i%100] + 1] for i in range[1000]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 68');
test(queryResults(100000, [[i, [i * i] % 100000] for i in range[100000]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 69');
test(queryResults(20, [[i, i+1] for i in range[11]] + [[i, i+1] for i in range[10, 21]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 70');
test(queryResults(100000, [[0,1]] * 50000 + [[i, i + 1] for i in range[50000]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 71');
test(queryResults(9, [[9,10],[8,10],[7,10],[6,10],[5,10],[4,10],[3,10],[2,10],[1,10],[0,10]]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 72');
test(queryResults(100, [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,25],[25,26],[26,27],[27,28],[28,29],[29,30],[30,31],[31,32],[32,33],[33,34],[34,35],[35,36],[36,37],[37,38],[38,39],[39,40],[40,41],[41,42],[42,43],[43,44],[44,45],[45,46],[46,47],[47,48],[48,49],[49,50]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 'Test 73');
test(queryResults(100, [[i, i % 10] * 10 for i in range[10]] + [[i, i % 5] * 5 for i in range[10, 20]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 74');
test(queryResults(10, [[0,1],[0,2],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1]]), [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 'Test 75');
test(queryResults(50, [[i, i+1] for i in range[50]] + [[i, i%5+1] for i in range[50]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 76');
test(queryResults(50, [[i,i+1] for i in range[50]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 77');
test(queryResults(5, [[i, i % 3 + 1] for i in range[6]] + [[i, i % 2 + 1] for i in range[6]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 78');
test(queryResults(9, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 8, 8, 8, 8, 8, 8, 8], 'Test 79');
test(queryResults(100, [[i, [i % 5] + 1] for i in range[101]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 80');
test(queryResults(1000, [[i%500,i%500] for i in range[1000]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 81');
test(queryResults(1000, [[i, 1] for i in range[1001]] + [[i, 2] for i in range[500, 1501] if i <= 1000]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 82');
test(queryResults(1000, [[i,i] for i in range[500]] + [[i,i+500] for i in range[500]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 83');
test(queryResults(10, [[0,1],[0,2],[1,2],[1,3],[2,3],[2,4],[3,4],[3,5],[4,5],[4,6],[5,6]]), [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 'Test 84');
test(queryResults(500, [[i, 1] for i in range[500]] + [[i, 2] for i in range[500]] + [[i, 3] for i in range[500]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 85');
test(queryResults(50, [[10,1],[15,2],[20,3],[25,4],[30,5],[35,6],[40,7],[45,8],[50,9]]), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 86');
test(queryResults(50, [[i,i] for i in range[50]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 87');
test(queryResults(50, [[10,100],[20,100],[30,100],[40,100],[50,100],[0,101],[5,102],[15,103],[25,104],[35,105],[45,106]]), [1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7], 'Test 88');
test(queryResults(100, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,1],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,10]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 'Test 89');
test(queryResults(10, [[0,10],[1,20],[2,10],[3,30],[4,10],[5,20],[6,30],[7,40],[8,50],[9,60],[10,70]]), [1, 2, 2, 3, 3, 3, 3, 4, 5, 6, 7], 'Test 90');
test(queryResults(100000, [[i, i + 1] for i in range[50000]] + [[i, i + 1] for i in range[50000, 100000]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 91');
test(queryResults(10, [[0,10],[1,2],[2,3],[3,10],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]]), [1, 2, 3, 3, 4, 5, 6, 7, 8, 8], 'Test 92');
test(queryResults(500, [[i,i%5] for i in range[500]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 93');
test(queryResults(100000, [[i, i + 1] for i in range[100000]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 94');
test(queryResults(20, [[0,1],[1,1],[2,2],[2,3],[3,3],[3,2],[4,4],[4,5],[5,5],[5,6],[6,6],[6,7],[7,7],[7,8],[8,8],[8,9]]), [1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 5, 6, 6, 7, 7, 8], 'Test 95');
test(queryResults(100, [[i, i+1] for i in range[50]] + [[i, i+2] for i in range[50, 100]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 96');
test(queryResults(10, [[0,1],[1,2],[1,1],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11]]), [1, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 97');
test(queryResults(1000, [[1,1001],[100,2002],[200,3003],[300,4004],[400,5005],[500,6006],[600,7007],[700,8008],[800,9009],[900,10010]] * 100), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 98');
test(queryResults(100, [[i, 100-i] for i in range[100]] + [[i, 101-i] for i in range[100]] + [[i, 102-i] for i in range[100]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 99');
test(queryResults(1, [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10]]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 100');
test(queryResults(20, [[i%10,i%10] for i in range[20]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 101');
test(queryResults(1000000, [[500000, 1000001],[500001, 1000002],[500002, 1000003],[500003, 1000004],[500004, 1000005]] * 200000), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 102');
test(queryResults(10000, [[i, i % 1000] for i in range[10001]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 103');
test(queryResults(10, [[i, i+1] for i in range[10]] + [[i, i+2] for i in range[10]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 104');
test(queryResults(500, [[i, i] for i in range[500]] + [[i, i+1] for i in range[499]] + [[i, i+2] for i in range[498]] + [[i, i+3] for i in range[497]] + [[i, i+4] for i in range[496]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 105');
test(queryResults(100, [[i, i*2] for i in range[100]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 106');
test(queryResults(100, [[i, i] for i in range[100]] + [[i, i+1] for i in range[99]] + [[i, i+2] for i in range[98]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 107');
test(queryResults(10, [[0,10],[1,20],[2,10],[3,30],[4,10],[5,50],[6,10],[7,70],[8,10],[9,90],[10,100]]), [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7], 'Test 108');
test(queryResults(10, [[1,1],[2,2],[3,3],[4,4],[5,5],[1,6],[2,7],[3,8],[4,9],[5,10]]), [1, 2, 3, 4, 5, 5, 5, 5, 5, 5], 'Test 109');
test(queryResults(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,1],[1,3],[3,5],[5,2],[2,4],[0,10],[1,10],[2,10],[3,10],[4,10]]), [1, 2, 3, 4, 5, 5, 4, 3, 4, 5, 5, 4, 3, 3, 2], 'Test 110');
test(queryResults(200, [[i, i%10+1] for i in range[200]]), Error: Solution.queryResults[] missing 1 required positional argument: 'queries', 'Test 111');

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
