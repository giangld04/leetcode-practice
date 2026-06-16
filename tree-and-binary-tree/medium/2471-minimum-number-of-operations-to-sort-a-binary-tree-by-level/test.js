// Test: 2471. Minimum Number Of Operations To Sort A Binary Tree By Level
// 97 test cases from LeetCodeDataset
// Run: node test.js

const { minimumOperations } = require("./solution");

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

console.log("\n2471. Minimum Number Of Operations To Sort A Binary Tree By Level\n");

test(minimumOperations([2,3,1]), 1, 'Test 1');
test(minimumOperations([1,3,2,7,6,5,4]), 3, 'Test 2');
test(minimumOperations([5,6,7,8,9,10,11]), 0, 'Test 3');
test(minimumOperations([1,2,3,4,5,6]), 0, 'Test 4');
test(minimumOperations([10,9,8,7,6,5,4,3,2,1]), 4, 'Test 5');
test(minimumOperations([5,3,8,1,4,null,7]), 0, 'Test 6');
test(minimumOperations([1,4,3,7,6,8,5,null,null,null,null,9,null,10]), 3, 'Test 7');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,15,14]), 1, 'Test 8');
test(minimumOperations([1,3,2,6,5,4,7,9,8,13,12,11,10,15,14]), 6, 'Test 9');
test(minimumOperations([30,15,45,7,22,37,52,3,11,18,26,32,40,46,54,1,2,4,5,6,8,9,10,12,13,14,16,17,19,20,21,23,24,25,27,28,29,31,33,34,35,36,38,39,41,42,43,44,47,48,49,50,51,53,55,56,57,58,59,60]), 0, 'Test 10');
test(minimumOperations([40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 19, 'Test 11');
test(minimumOperations([20,10,30,5,15,25,35,2,7,12,18,22,28,32,38,1,4,6,8,11,13,17,19,21,23,27,29,31,33,37,39,41,43,47,49]), 0, 'Test 12');
test(minimumOperations([20,10,30,5,15,25,35,2,7,12,17,22,27,32,37,1,3,4,6,8,11,13,16,18,21,23,26,28,31,33,36,38]), 0, 'Test 13');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), 0, 'Test 14');
test(minimumOperations([1,3,2,4,6,5,9,8,10,13,15,14,12,16,18,17,19,21,23,22,20,24,26,25,27,29,31,30,32,34,33,35,37,36,38,40,39,41,43,42,44,46,45,47,49,48,50]), 14, 'Test 15');
test(minimumOperations([1,3,2,5,4,7,6,9,8,11,10,13,12,15,14]), 7, 'Test 16');
test(minimumOperations([99,49,149,24,74,124,174,12,36,58,66,92,112,134,158,188,204,6,18,28,42,52,54,62,80,88,100,108,120,132,142,152,168,176,192,200,208,216,224,3,9,15,21,27,33,39,45,48,51,57,63,69,75,81,87,93,99,105,111,117,123,129,135,141,147,153,159,165,171,177,183,189,195,201,207,213,219,225]), 38, 'Test 17');
test(minimumOperations([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15]), 0, 'Test 18');
test(minimumOperations([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 24, 'Test 19');
test(minimumOperations([1,2,3,4,5,6,7,null,null,null,null,null,null,8,9,null,null,null,null,null,10,11]), 0, 'Test 20');
test(minimumOperations([2,3,1,4,5,6,7,8,9,10,11,12,13,14,15]), 1, 'Test 21');
test(minimumOperations([1,15,2,14,3,13,4,12,5,11,6,10,7,9,8,null,null,null,null,null,null,null,null,16,17]), 9, 'Test 22');
test(minimumOperations([5,4,3,2,1,null,null,0]), 2, 'Test 23');
test(minimumOperations([1,5,2,9,7,6,3,12,10,11,14,8,13,4,15]), 8, 'Test 24');
test(minimumOperations([100,50,150,25,75,125,175,10,35,60,90,110,140,160,190,5,15,25,40,55,70,80,95,105,130,135,155,165,180,185,195,200]), 0, 'Test 25');
test(minimumOperations([5,3,8,1,4,6,10,null,2,null,null,7,9,11,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,13,14]), 0, 'Test 26');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), 0, 'Test 27');
test(minimumOperations([1,2,3,null,4,5,6,7,8,9,10,11,12,13,14]), 0, 'Test 28');
test(minimumOperations([100,50,150,25,75,125,175,10,35,65,85,115,145,165,185,5,15,20,30,40,55,60,70,80,90,105,110,130,140,150,160,170,180,190]), 0, 'Test 29');
test(minimumOperations([15,10,20,5,12,17,25,3,7,11,13,16,18,22,28,2,4,6,8,9,10.5,11.5,12.5,14,15,16.5,17.5,19,21,23,24,26,27,29,30]), 0, 'Test 30');
test(minimumOperations([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180,5,15,20,28,40,55,65,72,78,85,95,105,115,130,135,145,155,165,175,185,190,200]), 0, 'Test 31');
test(minimumOperations([30,15,45,7,22,37,52,3,11,18,27,32,42,47,57,1,5,8,10,14,17,20,25,26,31,35,40,41,46,48,53,55,56,59,60]), 0, 'Test 32');
test(minimumOperations([1,2,3,4,null,6,7,null,null,8,null,null,9,10]), 0, 'Test 33');
test(minimumOperations([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15,0,1.5,2.5,3.5,4.5,5.5,6.5,7.5,8.5,9.5,10.5,11.5,12.5,13.5,14.5,15.5]), 0, 'Test 34');
test(minimumOperations([15,12,18,9,13,16,20,6,10,14,15,17,19,21,null,null,null,null,null,null,null,22]), 0, 'Test 35');
test(minimumOperations([50,20,30,10,40,25,35,5,15,32,38,22,28,33,37,1,9,11,14,18,21,24,27,29,31,34,36,39,42,45,48,2,6,7,8,12,13,16,17,19,23,26,30,41,43,44,46,47,49,51]), 6, 'Test 36');
test(minimumOperations([20,10,30,5,15,25,35,2,7,12,17,22,27,32,37,1,3,6,8,11,13,16,18,21,23,26,28,31,33,36,38]), 0, 'Test 37');
test(minimumOperations([2,3,4,6,5,7,8,9,11,10,13,12,15,14,16]), 4, 'Test 38');
test(minimumOperations([1,2,3,null,5,6,7,8,9,10,11,12,13,14,15]), 0, 'Test 39');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 0, 'Test 40');
test(minimumOperations([15,10,25,5,13,20,30,3,7,11,14,17,23,28,32,1,4,6,8,12,16,18,22,26,31,33]), 0, 'Test 41');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 0, 'Test 42');
test(minimumOperations([100,50,150,25,75,125,175,10,30,60,80,110,130,160,180,5,15,20,35,65,70,85,105,120,135,155,170,185,190,195,200]), 0, 'Test 43');
test(minimumOperations([20,10,30,5,15,25,35,1,7,13,17,23,27,33,37,null,6,8,12,14,18,22,26,28,32,34,38,40]), 0, 'Test 44');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 0, 'Test 45');
test(minimumOperations([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15,null,16]), 0, 'Test 46');
test(minimumOperations([2,3,1,null,4,5,null,7,6,null,null,9,8,null,null,null,10,11,null,null,null,null,12,13,null,null,null,null,null,null,null,null,14,15]), 3, 'Test 47');
test(minimumOperations([1,3,2,6,5,4,7,8,9,11,10,13,12,15,14]), 5, 'Test 48');
test(minimumOperations([3,1,2,6,5,4,7,10,9,12,11,14,13,16,15]), 5, 'Test 49');
test(minimumOperations([25,20,30,15,22,28,32,10,17,21,23,27,31,35,40]), 0, 'Test 50');
test(minimumOperations([1,3,2,7,6,5,4,15,14,13,12,11,10,9,8,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16]), 15, 'Test 51');
test(minimumOperations([1,3,2,5,4,7,6,null,null,8,9,null,null,10,11]), 3, 'Test 52');
test(minimumOperations([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 9, 'Test 53');
test(minimumOperations([1,2,3,4,5,6,7,15,14,13,12,11,10,9,8]), 4, 'Test 54');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 0, 'Test 55');
test(minimumOperations([30,20,50,10,25,40,60,5,15,22,28,35,45,55,65,1,8,12,18,21,26,30,34,38,42,48,52,58,62,67,70]), 0, 'Test 56');
test(minimumOperations([6,3,10,1,5,8,12,2,4,7,9,11,13,null,null,null,null,null,null,null,14]), 0, 'Test 57');
test(minimumOperations([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 7, 'Test 58');
test(minimumOperations([1,3,2,6,5,4,null,null,null,null,null,7,8,9,10]), 2, 'Test 59');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,16,17]), 0, 'Test 60');
test(minimumOperations([5,9,3,11,6,7,8,null,12,10,null,null,13,null,null,14]), 5, 'Test 61');
test(minimumOperations([1,3,2,6,5,4,7,9,8,11,10,13,12,15,14]), 6, 'Test 62');
test(minimumOperations([1,3,2,6,5,4,7,9,8,13,12,11,10,15,14,16,18,17,20,19,22,21,24,23,26,25,28,27,30,29,32,31,34,33,36,35,38,37,40,39]), 17, 'Test 63');
test(minimumOperations([15,10,20,5,12,16,25,3,8,11,14,17,23,26,30]), 0, 'Test 64');
test(minimumOperations([64,32,96,16,48,68,112,8,24,36,44,56,60,72,80,92,104,116,128,4,12,20,28,32,38,42,50,54,62,66,74,78,84,88,96,100,108,112,120,124,132,136,140,144,148,152,156,160,164,168,172,176,180,184,188,192,196,200,204,208,212,216,220,224,228,232,236,240,244,248,252,256]), 12, 'Test 65');
test(minimumOperations([32,16,48,8,24,36,56,4,12,20,28,32,40,44,52,58,62,2,6,10,14,18,22,26,30,34,38,42,46,50,54,59,61,63,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,60,62,63]), 45, 'Test 66');
test(minimumOperations([25,15,35,10,20,30,40,5,12,18,22,28,32,38,42,null,6,8,11,13,17,19,21,23,27,29,31,33,37,39,41,43,47,49]), 0, 'Test 67');
test(minimumOperations([1,3,2,7,6,5,4,15,14,13,12,11,10,9,8,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), 7, 'Test 68');
test(minimumOperations([42,21,63,10,31,53,74,5,15,25,35,45,50,60,70,1,7,12,18,23,28,33,38,43,48,55,58,65,68,72,73,76,77,78,79]), 0, 'Test 69');
test(minimumOperations([1,2,2,3,3,3,3,4,4,4,4,4,4,4,4]), Execution timed out, 'Test 70');
test(minimumOperations([31,24,27,18,22,25,29,16,19,21,23,26,28,30,32]), 0, 'Test 71');
test(minimumOperations([25,15,35,10,20,30,40,5,12,18,22,28,38,45,50,1,6,8,11,14,17,19,21,23,26,29,31,34,37,39,42,44,47,49,52]), 0, 'Test 72');
test(minimumOperations([7,4,10,2,5,8,12,null,3,6,9,11,13,null,null,null,null,null,null,null,15]), 0, 'Test 73');
test(minimumOperations([32,16,48,8,24,36,56,4,12,20,28,32,40,44,52,60,2,6,10,14,18,22,26,30,34,38,42,46,50,54,58,62]), 15, 'Test 74');
test(minimumOperations([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9]), 0, 'Test 75');
test(minimumOperations([15,11,20,9,13,18,22,7,10,12,14,16,19,21,23,5,8,null,1,null,null,null,null,null,null,null,null,6,4,null,null,null,null,null,null,null,null,null,null,null]), 2, 'Test 76');
test(minimumOperations([1,3,2,null,6,5,4,null,null,null,null,8,7,null,10,9]), 4, 'Test 77');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]), 0, 'Test 78');
test(minimumOperations([3,9,20,null,null,15,7,11,13,null,null,null,8]), 1, 'Test 79');
test(minimumOperations([7,3,11,1,5,9,13,null,2,4,6,8,10,12,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), 0, 'Test 80');
test(minimumOperations([100,90,110,80,95,105,120,70,85,93,97,103,115,117,130,60,75,83,88,92,96,101,104,108,112,116,125,127,132]), 0, 'Test 81');
test(minimumOperations([2,3,1,5,4,8,7,11,10,9,12,15,14,13,16]), 5, 'Test 82');
test(minimumOperations([5,2,7,1,4,6,8,3,null,null,null,null,null,null,9]), 0, 'Test 83');
test(minimumOperations([50,25,75,12,37,62,88,6,18,30,40,55,60,70,92,3,9,15,21,27,35,38,45,50,58,65,68,74,80,90,95]), 0, 'Test 84');
test(minimumOperations([25,15,35,10,20,30,40,5,12,18,22,28,32,38,42,null,7,11,13,17,19,21,23,27,29,31,33,37,39,41,43,null,1,6,null,8,9,14,16,null,null,null,24,26,null,36,38,null,44,46,null,null,null,null,45,47,null,null,48,49,null,50,51,null,52,53,null,54,55,null,56,57,null,58,59,null,60]), 1, 'Test 85');
test(minimumOperations([20,15,25,10,17,22,30,5,12,16,18,21,24,28,32,1,6,9,11,13,14,19,23,27,29,31,33]), 0, 'Test 86');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 0, 'Test 87');
test(minimumOperations([3,9,20,null,null,15,7,16,8,25,18]), 3, 'Test 88');
test(minimumOperations([10,20,5,null,15,17,7,null,null,null,null,16,null,6]), 3, 'Test 89');
test(minimumOperations([1,2,3,4,5,null,null,6,7,8,9,10,11,12,13]), 0, 'Test 90');
test(minimumOperations([1,3,2,7,6,5,4,15,14,13,12,11,10,9,8,23,22,21,20,19,18,17,16]), 11, 'Test 91');
test(minimumOperations([2,1,5,10,3,7,6,15,12,8,9,11,null,14,13,20,null,18,16,17,19,22,21]), 11, 'Test 92');
test(minimumOperations([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15,0,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 0, 'Test 93');
test(minimumOperations([20,10,30,5,15,25,35,3,7,12,17,22,27,32,37,1,4,6,8,11,13,14,16,18,19,21,23,24,26,28,29,31,33,34,36,38]), 0, 'Test 94');
test(minimumOperations([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180,5,15,20,35,40,55,65,70,85,90,105,115,135,145,155,175,185]), 0, 'Test 95');
test(minimumOperations([5,15,3,10,1,20,8,null,9,4,null,null,null,null,14,null,null,7,11,6,null,null,13,12,null,null,null,null,16,18,null,null,17,19]), 8, 'Test 96');
test(minimumOperations([1,3,2,4,6,5,7,9,8,11,10,13,12,15,14]), 6, 'Test 97');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

