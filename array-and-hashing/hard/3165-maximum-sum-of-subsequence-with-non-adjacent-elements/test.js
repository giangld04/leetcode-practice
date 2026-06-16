// Test: 3165. Maximum Sum Of Subsequence With Non Adjacent Elements
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { maximumSumSubsequence } = require("./solution");

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

console.log("\n3165. Maximum Sum Of Subsequence With Non Adjacent Elements\n");

test(maximumSumSubsequence([100,200,300,400,500], [[0,-100],[2,-200],[4,-300]]), 2100, 'Test 1');
test(maximumSumSubsequence([1,2,3,4,5], [[0,10],[4,-10],[2,0]]), 46, 'Test 2');
test(maximumSumSubsequence([-1,-2,-3,-4,-5], [[1,2],[3,4],[4,5]]), 15, 'Test 3');
test(maximumSumSubsequence([3,5,9], [[1,-2],[0,-3]]), 21, 'Test 4');
test(maximumSumSubsequence([0,-1], [[0,-5]]), 0, 'Test 5');
test(maximumSumSubsequence([100000,-100000,100000,-100000,100000], [[0,-100000],[2,-100000],[4,-100000]]), 300000, 'Test 6');
test(maximumSumSubsequence([1,2,3,4,5], [[0,5],[2,1],[4,-1]]), 33, 'Test 7');
test(maximumSumSubsequence([100000, -100000, 50000, -50000], [[0,50000],[1,-50000],[2,100000],[3,-100000]]), 500000, 'Test 8');
test(maximumSumSubsequence([1,2,3,4,5], [[0,5],[2,-1],[4,10]]), 38, 'Test 9');
test(maximumSumSubsequence([-10,-20,-30,-40], [[1,10],[3,20]]), 40, 'Test 10');
test(maximumSumSubsequence([-5,-4,-3,-2,-1], [[0,1],[1,2],[2,3],[3,4],[4,5]]), 22, 'Test 11');
test(maximumSumSubsequence([1, -1, 1, -1, 1, -1, 1, -1, 1, -1], [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0]]), 20, 'Test 12');
test(maximumSumSubsequence([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [[0, -100000], [1, -99999], [2, -99998], [3, -99997], [4, -99996], [5, -99995], [6, -99994], [7, -99993], [8, -99992], [9, -99991]]), 1900, 'Test 13');
test(maximumSumSubsequence([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000], [[0, -100000], [1, -100000], [2, -100000], [3, -100000], [4, -100000]]), 1900000, 'Test 14');
test(maximumSumSubsequence([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], [[0, 30], [1, 28], [2, 26], [3, 24], [4, 22], [5, 20], [6, 18], [7, 16], [8, 14], [9, 12], [10, 10], [11, 8], [12, 6], [13, 4], [14, 2]]), 2536, 'Test 15');
test(maximumSumSubsequence([i * [-1]**i for i in range[1, 50001]], [[i, i * 2] for i in range[0, 50000, 1000]]), Error: Solution.maximumSumSubsequence[] missing 2 required positional arguments: 'nums' and 'queries', 'Test 16');
test(maximumSumSubsequence([1, 3, 2, 1, 100, 1, 1, 1, 1, 1], [[4,200],[4,300],[4,400],[4,500],[4,600]]), 2025, 'Test 17');
test(maximumSumSubsequence([-100000, -90000, -80000, -70000, -60000, -50000, -40000, -30000, -20000, -10000], [[0, -50000], [2, -30000], [4, -10000]]), 0, 'Test 18');
test(maximumSumSubsequence([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [[1, 0], [3, 0], [5, 0], [7, 0], [9, 0]]), 1350, 'Test 19');
test(maximumSumSubsequence([9, 8, 7, 6, 5, 4, 3, 2, 1], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]]), 153, 'Test 20');
test(maximumSumSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [[0, -1], [1, -2], [2, -3], [3, -4], [4, -5], [5, -6], [6, -7], [7, -8], [8, -9], [9, -10]]), 190, 'Test 21');
test(maximumSumSubsequence([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [[0, 0], [2, 0], [4, 0], [6, 0], [8, 0]]), 15000, 'Test 22');
test(maximumSumSubsequence([1] * 50000, [[i, -1] for i in range[0, 50000, 1000]]), Error: Solution.maximumSumSubsequence[] missing 2 required positional arguments: 'nums' and 'queries', 'Test 23');
test(maximumSumSubsequence([1, -1, 2, -2, 3, -3, 4, -4, 5, -5], [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0]]), 80, 'Test 24');
test(maximumSumSubsequence([i for i in range[50000]], [[i, -i] for i in range[0, 50000, 1000]]), Error: Solution.maximumSumSubsequence[] missing 2 required positional arguments: 'nums' and 'queries', 'Test 25');
test(maximumSumSubsequence([0] * 50000, [[i, i % 2 * 100000 - 50000] for i in range[0, 50000, 1000]]), Error: Solution.maximumSumSubsequence[] missing 2 required positional arguments: 'nums' and 'queries', 'Test 26');
test(maximumSumSubsequence([100000, 99999, 99998, 99997, 99996], [[0,99995],[4,99994],[2,99993],[1,99992],[3,99991]]), 1499922, 'Test 27');
test(maximumSumSubsequence([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]]), 125, 'Test 28');
test(maximumSumSubsequence([1, 2, 3, 4, 5], [[0, 10], [0, 20], [0, 30], [0, 40], [0, 50]]), 190, 'Test 29');
test(maximumSumSubsequence([1, -2, 3, -4, 5, -6, 7, -8, 9, -10], [[0,10],[1,-10],[2,10],[3,-10],[4,10],[5,-10],[6,10],[7,-10],[8,10],[9,-10]]), 440, 'Test 30');
test(maximumSumSubsequence([10, -10, 20, -20, 30, -30, 40, -40, 50, -50], [[0,100],[1,-100],[2,200],[3,-200],[4,300],[5,-300],[6,400],[7,-400],[8,500],[9,-500]]), 7800, 'Test 31');
test(maximumSumSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [[0, -1], [2, -1], [4, -1], [6, -1], [8, -1]]), 150, 'Test 32');
test(maximumSumSubsequence([-1, 1, -1, 1, -1, 1, -1, 1, -1, 1], [[0, 100000], [1, 100000], [2, 100000], [3, 100000], [4, 100000], [5, 100000], [6, 100000], [7, 100000], [8, 100000], [9, 100000]]), 3000020, 'Test 33');
test(maximumSumSubsequence([-99999, 99999, -99998, 99998, -99997, 99997, -99996, 99996, -99995, 99995], [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0]]), 2499905, 'Test 34');
test(maximumSumSubsequence([i % 100000 for i in range[50000]], [[i, -100000 + [i % 100000]] for i in range[50000]]), Error: Solution.maximumSumSubsequence[] missing 2 required positional arguments: 'nums' and 'queries', 'Test 35');
test(maximumSumSubsequence([-100000, -100000, -100000, -100000, -100000], [[0,100000],[1,100000],[2,100000],[3,100000],[4,100000]]), 900000, 'Test 36');
test(maximumSumSubsequence([0,0,0,0,0,0,0,0,0,0], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]]), 125, 'Test 37');
test(maximumSumSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [[0,10],[1,10],[2,10],[3,10],[4,10],[5,10],[6,10],[7,10],[8,10],[9,10]]), 460, 'Test 38');
test(maximumSumSubsequence([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5], [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15]]), 430, 'Test 39');
test(maximumSumSubsequence([1, -1, 2, -2, 3, -3, 4, -4, 5, -5], [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9]]), 165, 'Test 40');
test(maximumSumSubsequence([100000, -100000, 90000, -90000, 80000, -80000, 70000, -70000, 60000, -60000], [[0, 100000], [1, -100000], [2, 90000], [3, -90000], [4, 80000], [5, -80000], [6, 70000], [7, -70000], [8, 60000], [9, -60000]]), 4000000, 'Test 41');
test(maximumSumSubsequence([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10]]), 125, 'Test 42');
test(maximumSumSubsequence([10,20,30,40,50,60,70,80,90,100], [[0,-100],[1,100],[2,-200],[3,200],[4,-300],[5,300],[6,-400],[7,400],[8,-500],[9,500]]), 7400, 'Test 43');
test(maximumSumSubsequence([100000] * 50000, [[i, i % 2 * 100000 - 50000] for i in range[0, 50000, 1000]]), Error: Solution.maximumSumSubsequence[] missing 2 required positional arguments: 'nums' and 'queries', 'Test 44');
test(maximumSumSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]]), 150, 'Test 45');
test(maximumSumSubsequence([-100000] * 50000, [[i, i % 100000] for i in range[50000]]), Error: Solution.maximumSumSubsequence[] missing 2 required positional arguments: 'nums' and 'queries', 'Test 46');
test(maximumSumSubsequence([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [[0, 5], [1, 15], [2, 25], [3, 35], [4, 45], [5, 55], [6, 65], [7, 75], [8, 85], [9, 95]]), 2875, 'Test 47');
test(maximumSumSubsequence([100000,-100000,50000,-50000,25000,-25000], [[0,100000],[1,0],[2,-50000],[3,0],[4,25000],[5,0]]), 850000, 'Test 48');
test(maximumSumSubsequence([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [[0,1000],[1,900],[2,800],[3,700],[4,600],[5,500],[6,400],[7,300],[8,200],[9,100]]), 39200, 'Test 49');
test(maximumSumSubsequence([-1,0,1,2,3,4,5,6,7,8,9,10], [[0,10],[1,-10],[2,20],[3,-20],[4,30],[5,-30]]), 364, 'Test 50');
test(maximumSumSubsequence([1,2,3,4,5,6,7,8,9,10], [[0,-1],[9,-10],[5,-6],[2,-3]]), 101, 'Test 51');
test(maximumSumSubsequence([100000, 100000, 100000, 100000, 100000], [[0,-100000],[1,-100000],[2,-100000],[3,-100000],[4,-100000]]), 600000, 'Test 52');
test(maximumSumSubsequence([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [[0, 1], [2, 2], [4, 3], [6, 4], [8, 5], [1, 5], [3, 4], [5, 3], [7, 2], [9, 1]]), 124, 'Test 53');
test(maximumSumSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [[0, 10], [1, 20], [2, 30], [3, 40], [4, 50], [5, 60], [6, 70], [7, 80], [8, 90], [9, 100]]), 1410, 'Test 54');
test(maximumSumSubsequence([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991], [[0, 0], [2, 0], [4, 0], [6, 0], [8, 0]]), 2499875, 'Test 55');
test(maximumSumSubsequence([1, 2, 3, 4, 5], [[0,5],[1,4],[2,3],[3,2],[4,1],[0,1],[1,2],[2,3],[3,4],[4,5]]), 92, 'Test 56');
test(maximumSumSubsequence([50000, -50000, 50000, -50000, 50000], [[0,0],[1,0],[2,0],[3,0],[4,0]]), 300000, 'Test 57');
test(maximumSumSubsequence([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [[0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2]]), 80, 'Test 58');
test(maximumSumSubsequence([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0]]), 0, 'Test 59');
test(maximumSumSubsequence([1, 2, 3, 4, 5], [[0, -1], [1, -2], [2, -3], [3, -4], [4, -5], [0, 5], [1, 4], [2, 3], [3, 2], [4, 1]]), 61, 'Test 60');
test(maximumSumSubsequence([0] * 50000, [[i, i % 100000] for i in range[50000]]), Error: Solution.maximumSumSubsequence[] missing 2 required positional arguments: 'nums' and 'queries', 'Test 61');
test(maximumSumSubsequence([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0]]), 19000, 'Test 62');
test(maximumSumSubsequence([1, -1, 1, -1, 1, -1, 1, -1, 1, -1], [[0, 1000], [1, 1000], [2, 1000], [3, 1000], [4, 1000]]), 9016, 'Test 63');
test(maximumSumSubsequence([5, 8, 2, 7, 10, 1, 5, 3, 4, 6], [[0,-5],[1,-8],[2,-2],[3,-7],[4,-10],[5,-1],[6,-5],[7,-3],[8,-4],[9,-6]]), 137, 'Test 64');
test(maximumSumSubsequence([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [[0,-100],[1,-200],[2,-300],[3,-400],[4,-500],[5,-600],[6,-700],[7,-800],[8,-900],[9,-1000]]), 19000, 'Test 65');
test(maximumSumSubsequence([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [[1, 1], [3, 1], [5, 1], [7, 1], [9, 1]]), 15, 'Test 66');
test(maximumSumSubsequence([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9], [1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]), 2370, 'Test 67');
test(maximumSumSubsequence([-100000] * 50000, [[i, i % 2 * 100000 - 50000] for i in range[0, 50000, 1000]]), Error: Solution.maximumSumSubsequence[] missing 2 required positional arguments: 'nums' and 'queries', 'Test 68');
test(maximumSumSubsequence([1,2,3,4,5,6,7,8,9,10], [[0,10],[2,20],[4,30],[6,40],[8,50],[9,60]]), 590, 'Test 69');
test(maximumSumSubsequence([10000, -20000, 30000, -40000, 50000, -60000, 70000, -80000, 90000, -100000], [[0, 10000], [1, -10000], [2, 10000], [3, -10000], [4, 10000], [5, -10000], [6, 10000], [7, -10000], [8, 10000], [9, -10000]]), 1700000, 'Test 70');
test(maximumSumSubsequence([i % 2 for i in range[50000]], [[i, -1] for i in range[50000]]), Error: Solution.maximumSumSubsequence[] missing 2 required positional arguments: 'nums' and 'queries', 'Test 71');
test(maximumSumSubsequence([100000, -100000, 100000, -100000, 100000, -100000, 100000, -100000], [[0,-1],[1,1],[2,-1],[3,1],[4,-1],[5,1],[6,-1],[7,1]]), 1200013, 'Test 72');
test(maximumSumSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [[0, -1], [2, -3], [4, -5], [6, -7], [8, -9]]), 150, 'Test 73');
test(maximumSumSubsequence([50000, -50000, 50000, -50000, 50000, -50000, 50000, -50000, 50000, -50000], [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0]]), 1000000, 'Test 74');
test(maximumSumSubsequence([10, -10, 20, -20, 30, -30, 40, -40, 50, -50], [[0, 50000], [1, 50000], [2, 50000], [3, 50000], [4, 50000], [5, 50000], [6, 50000], [7, 50000], [8, 50000], [9, 50000]]), 1500800, 'Test 75');
test(maximumSumSubsequence([100000, -100000, 50000, -50000, 25000, -25000, 75000, -75000, 125000, -125000], [[0, -100000], [1, 100000], [2, -50000], [3, 50000], [4, -25000], [5, 25000], [6, -75000], [7, 75000], [8, -125000], [9, 125000]]), 3200000, 'Test 76');
test(maximumSumSubsequence([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [[0,15],[1,10],[2,5],[3,0],[4,-5],[5,-10],[6,-15],[7,-20],[8,-25],[9,-30]]), 1125, 'Test 77');
test(maximumSumSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [[0,100],[2,200],[4,300],[6,400],[8,500]]), 3580, 'Test 78');
test(maximumSumSubsequence([100000, -100000] * 25000, [[i, i * 2] for i in range[0, 50000, 1000]]), Error: Solution.maximumSumSubsequence[] missing 2 required positional arguments: 'nums' and 'queries', 'Test 79');
test(maximumSumSubsequence([100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000], [[0,-100000],[1,-90000],[2,-80000],[3,-70000],[4,-60000],[5,-50000],[6,-40000],[7,-30000],[8,-20000],[9,-10000]]), 950000, 'Test 80');
test(maximumSumSubsequence([123456], [[0, -123456]]), 0, 'Test 81');
test(maximumSumSubsequence([i * [-1]**i for i in range[50000]], [[i, i] for i in range[0, 50000, 1000]]), Error: Solution.maximumSumSubsequence[] missing 2 required positional arguments: 'nums' and 'queries', 'Test 82');
test(maximumSumSubsequence([1, 2, 3, -1, -2, -3, 4, 5, 6, -4, -5, -6], [[0,10],[3,20],[6,30],[9,40],[11,50]]), 379, 'Test 83');
test(maximumSumSubsequence([i for i in range[1, 50001]], [[i, -i] for i in range[0, 50000, 1000]]), Error: Solution.maximumSumSubsequence[] missing 2 required positional arguments: 'nums' and 'queries', 'Test 84');
test(maximumSumSubsequence([100, -200, 300, -400, 500, -600, 700, -800, 900, -1000], [[0,-1000],[1,200],[2,-300],[3,400],[4,-500],[5,600],[6,-700],[7,800],[8,-900],[9,1000]]), 23000, 'Test 85');
test(maximumSumSubsequence([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [[0,20],[1,18],[2,16],[3,14],[4,12],[5,10],[6,8],[7,6],[8,4],[9,2]]), 762, 'Test 86');
test(maximumSumSubsequence([i * [-1] ** i for i in range[50000]], [[i, i % 100000] for i in range[50000]]), Error: Solution.maximumSumSubsequence[] missing 2 required positional arguments: 'nums' and 'queries', 'Test 87');
test(maximumSumSubsequence([1, -10, 2, -20, 3, -30, 4, -40, 5, -50], [[0, 10], [2, 20], [4, 30], [6, 40], [8, 50]]), 390, 'Test 88');
test(maximumSumSubsequence([-100000, -99999, -99998, -99997, -99996], [[0,-99995],[4,-99994],[2,-99993],[1,-99992],[3,-99991]]), 0, 'Test 89');
test(maximumSumSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [[0,-1],[1,0],[2,-1],[3,0],[4,-1],[5,0],[6,-1],[7,0],[8,-1],[9,0],[10,-1],[11,0],[12,-1],[13,0],[14,-1]]), 616, 'Test 90');
test(maximumSumSubsequence([100000] * 50000, [[i, 0] for i in range[50000]]), Error: Solution.maximumSumSubsequence[] missing 2 required positional arguments: 'nums' and 'queries', 'Test 91');
test(maximumSumSubsequence([1, -2, 3, -4, 5, -6, 7, -8, 9, -10], [[0, 10], [1, -10], [2, 20], [3, -20], [4, 30], [5, -30], [6, 40], [7, -40], [8, 50], [9, -50]]), 840, 'Test 92');
test(maximumSumSubsequence([-100, 200, -300, 400, -500, 600, -700, 800, -900, 1000], [[1, -1000], [3, 1000], [5, -1000], [7, 1000], [9, -1000]]), 14000, 'Test 93');
test(maximumSumSubsequence([5, 1, 5, 1, 5, 1, 5, 1, 5, 1], [[0, 10], [1, 20], [2, 30], [3, 40], [4, 50], [5, 60], [6, 70], [7, 80], [8, 90], [9, 100]]), 1331, 'Test 94');
test(maximumSumSubsequence([0, -1, 1, -2, 2, -3, 3, -4, 4, -5, 5], [[0, -100], [1, 100], [2, -200], [3, 200], [4, -300], [5, 300], [6, -400], [7, 400], [8, -500], [9, 500], [10, -600]]), 7095, 'Test 95');
test(maximumSumSubsequence([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], [[0,-5],[1,-10],[2,-15],[3,-20],[4,-25],[5,-30],[6,-35],[7,-40],[8,-45],[9,-50]]), 950, 'Test 96');
test(maximumSumSubsequence([0, 1, 0, 1, 0, 1, 0, 1, 0, 1], [[0,1],[1,0],[2,1],[3,0],[4,1],[5,0],[6,1],[7,0],[8,1],[9,0]]), 50, 'Test 97');
test(maximumSumSubsequence([i for i in range[50000]], [[i, -[i + 1]] for i in range[50000]]), Error: Solution.maximumSumSubsequence[] missing 2 required positional arguments: 'nums' and 'queries', 'Test 98');
test(maximumSumSubsequence([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [[0, 10], [1, 20], [2, 30], [3, 40], [4, 50]]), 300, 'Test 99');
test(maximumSumSubsequence([0, 1, 0, -1, 0, 1, 0, -1, 0, 1], [[0, 1], [2, 1], [4, 1], [6, 1], [8, 1]]), 21, 'Test 100');
test(maximumSumSubsequence([1,2,3,4,5,6,7,8,9,10], [[0,-10],[2,0],[4,20],[6,-20],[8,30]]), 192, 'Test 101');
test(maximumSumSubsequence([5,-1,4,2,3], [[1,100],[2,-5],[0,0],[3,300]]), 709, 'Test 102');
test(maximumSumSubsequence([5, -5, 5, -5, 5, -5, 5, -5, 5, -5], [[0,10],[1,-10],[2,10],[3,-10],[4,10],[5,-10],[6,10],[7,-10],[8,10],[9,-10]]), 400, 'Test 103');

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
