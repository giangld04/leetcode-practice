// Test: 700. Search In A Binary Search Tree
// 62 test cases from LeetCodeDataset
// Run: node test.js

const { searchBST } = require("./solution");

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

console.log("\n700. Search In A Binary Search Tree\n");

test(searchBST(val), Error: Solution.searchBST[] missing 2 required positional arguments: 'root' and 'val', 'Test 1');
test(searchBST(root), Error: Solution.searchBST[] missing 2 required positional arguments: 'root' and 'val', 'Test 2');
test(searchBST([1,2,3,4,5,6,7], 8), null, 'Test 3');
test(searchBST({"root": [2,1,3], "val": 2}), Error: Solution.searchBST[] missing 2 required positional arguments: 'root' and 'val', 'Test 4');
test(searchBST([5], 3), null, 'Test 5');
test(searchBST([10,5,15,3,7,12,18], 7), [7], 'Test 6');
test(searchBST({"root": [10,5,15,3,7,null,18], "val": 7}), Error: Solution.searchBST[] missing 2 required positional arguments: 'root' and 'val', 'Test 7');
test(searchBST([2,1,3], 1), [1], 'Test 8');
test(searchBST([5,3,6,2,4,null,7], 6), [6, null, 7], 'Test 9');
test(searchBST([1], 2), null, 'Test 10');
test(searchBST([6,2,8,0,4,7,9,null,null,3,5], 10), null, 'Test 11');
test(searchBST([25,15,50,10,22,35,70,5,12,18,24,30,40,60,80], 35), [35, 30, 40], 'Test 12');
test(searchBST({"root": [1,0,2], "val": 3}), Error: Solution.searchBST[] missing 2 required positional arguments: 'root' and 'val', 'Test 13');
test(searchBST([1,0,2], 3), null, 'Test 14');
test(searchBST([4,2,7,1,3], 2), [2, 1, 3], 'Test 15');
test(searchBST({"root": [5,3,6,2,4,null,7], "val": 5}), Error: Solution.searchBST[] missing 2 required positional arguments: 'root' and 'val', 'Test 16');
test(searchBST([1,0,2], 1), [1, 0, 2], 'Test 17');
test(searchBST([10,5,15,3,7,null,18], 7), [7], 'Test 18');
test(searchBST([10,5,15,3,7,12,18], 20), null, 'Test 19');
test(searchBST([2,1,3], 2), [2, 1, 3], 'Test 20');
test(searchBST([10,5,15,3,7,12,18], 10), [10, 5, 15, 3, 7, 12, 18], 'Test 21');
test(searchBST([1,2,3,4,5,6,7], 4), null, 'Test 22');
test(searchBST([10,5,15,3,7,13,18,1,4,6,8,12,14,17,19], 13), [13, 12, 14], 'Test 23');
test(searchBST([20,10,30,5,15,25,35,3,7,12,18,22,28,32,38], 28), [28], 'Test 24');
test(searchBST([5,3,6,2,4,null,7], 3), [3, 2, 4], 'Test 25');
test(searchBST([5,3,6,2,4,null,null,1], 4), [4], 'Test 26');
test(searchBST([2,1,3], 4), null, 'Test 27');
test(searchBST([1,0,15,null,null,14,17], 15), [15, 14, 17], 'Test 28');
test(searchBST([5,3,6,2,4,null,null,1], 6), [6], 'Test 29');
test(searchBST([10,5,15,3,7,null,18], 15), [15, null, 18], 'Test 30');
test(searchBST([25,15,50,10,22,35,70,5,12,18,24,30,40,60,80], 100), null, 'Test 31');
test(searchBST([50,25,75,10,30,60,90,5,20,28,35,55,65,85,95], 30), [30, 28, 35], 'Test 32');
test(searchBST([15,9,21,7,13,18,23,5,null,10,14,null,null,null,null,11,null], 14), [14], 'Test 33');
test(searchBST([20,10,30,5,15,25,35,3,7,12,18,22,28,32,38], 15), [15, 12, 18], 'Test 34');
test(searchBST({"root": [10,5,15,3,7,null,18], "val": 15}), Error: Solution.searchBST[] missing 2 required positional arguments: 'root' and 'val', 'Test 35');
test(searchBST([3,1,4,null,2], 2), [2], 'Test 36');
test(searchBST({"root": [4,2,7,1,3], "val": 5}), Error: Solution.searchBST[] missing 2 required positional arguments: 'root' and 'val', 'Test 37');
test(searchBST([5,3,6,2,4,null,7], 1), null, 'Test 38');
test(searchBST([10,5,15,3,7,13,18,1,4,6,8,12,14,17,19], 20), null, 'Test 39');
test(searchBST([20,10,30,5,15,25,35,3,7,12,18,22,28,32,38], 29), null, 'Test 40');
test(searchBST([2,1,3,4,null,null,7], 2), [2, 1, 3, 4, null, null, 7], 'Test 41');
test(searchBST([5,3,6,2,4,null,null,1], 1), [1], 'Test 42');
test(searchBST([20,10,30,5,15,25,35,3,7,12,18,22,28,32,38], 30), [30, 25, 35, 22, 28, 32, 38], 'Test 43');
test(searchBST([25,15,50,10,22,35,70,5,12,18,24,30,40,60,80], 5), [5], 'Test 44');
test(searchBST({"root": [5,3,6,2,4,null,7], "val": 7}), Error: Solution.searchBST[] missing 2 required positional arguments: 'root' and 'val', 'Test 45');
test(searchBST({"root": [1,0,2], "val": 1}), Error: Solution.searchBST[] missing 2 required positional arguments: 'root' and 'val', 'Test 46');
test(searchBST({"root": [5,3,6,2,4,null,7], "val": 8}), Error: Solution.searchBST[] missing 2 required positional arguments: 'root' and 'val', 'Test 47');
test(searchBST([8,3,10,null,1,6,null,4,7,13,null,null,null,null,null,null], 1), null, 'Test 48');
test(searchBST([1,2,3,4,5,6,7,8,9,10], 5), null, 'Test 49');
test(searchBST([4,2,7,1,3], 5), null, 'Test 50');
test(searchBST([1,2], 2), null, 'Test 51');
test(searchBST({"root": [10,5,15,3,7,null,18], "val": 20}), Error: Solution.searchBST[] missing 2 required positional arguments: 'root' and 'val', 'Test 52');
test(searchBST([5,3,6,2,4,null,7], 8), null, 'Test 53');
test(searchBST([1,null,2], 2), [2], 'Test 54');
test(searchBST([1], 1), [1], 'Test 55');
test(searchBST([5], 5), [5], 'Test 56');
test(searchBST([10,5,15,3,7,12,18], 18), [18], 'Test 57');
test(searchBST({"root": [5,3,6,2,4,null,7], "val": 2}), Error: Solution.searchBST[] missing 2 required positional arguments: 'root' and 'val', 'Test 58');
test(searchBST([5,3,6,2,4,null,null,1], 0), null, 'Test 59');
test(searchBST([1,2,3,4,5,6,7], 6), null, 'Test 60');
test(searchBST({"root": [4,2,7,1,3], "val": 2}), Error: Solution.searchBST[] missing 2 required positional arguments: 'root' and 'val', 'Test 61');
test(searchBST([10,5,15,3,7,null,18], 20), null, 'Test 62');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

