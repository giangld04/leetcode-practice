// Test: 141. Linked List Cycle
// 123 test cases from LeetCodeDataset
// Run: node test.js

const { hasCycle } = require("./solution");

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

console.log("\n141. Linked List Cycle\n");

test(hasCycle([3,2,0,-4], 1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 1');
test(hasCycle([1,2,3,4,5], 2), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 2');
test(hasCycle([], -1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 3');
test(hasCycle([1,2,3,4,5], 3), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 4');
test(hasCycle([1,2], 0), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 5');
test(hasCycle([1,2,3,4,5], -1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 6');
test(hasCycle([1], -1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 7');
test(hasCycle([10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15], 15), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 8');
test(hasCycle([1,2,3,4,5,6,7,8,9,10], 6), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 9');
test(hasCycle([0,-1,-2,-3,-4,-5,-6,-7,-8,-9], 7), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 10');
test(hasCycle([5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5,5,-5], 18), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 11');
test(hasCycle([10,9,8,7,6,5,4,3,2,1], 5), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 12');
test(hasCycle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], -1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 13');
test(hasCycle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], -1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 14');
test(hasCycle([5,4,3,2,1,0,-1,-2,-3,-4,-5], 3), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 15');
test(hasCycle([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], 5), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 16');
test(hasCycle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 10), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 17');
test(hasCycle([100,90,80,70,60,50,40,30,20,10,0,-10,-20,-30,-40,-50], 14), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 18');
test(hasCycle([5,5,5,5,5,5,5,5,5,5,5,5], 11), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 19');
test(hasCycle([100,200,300,400,500,600,700,800,900,1000], 3), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 20');
test(hasCycle([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20], 15), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 21');
test(hasCycle([1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,11000,12000,13000,14000,15000,16000,17000,18000,19000,20000], 10), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 22');
test(hasCycle([1,2,3,4,5,6,7,8,9,10], 5), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 23');
test(hasCycle([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 24');
test(hasCycle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 39), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 25');
test(hasCycle([5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], 10), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 26');
test(hasCycle([1,2,3,4,5,6,7,8,9,10], 4), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 27');
test(hasCycle([1,3,5,7,9,11,13,15,17,19], 9), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 28');
test(hasCycle([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], 0), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 29');
test(hasCycle([0,0,0,0,0,0,0,0,0,0], 2), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 30');
test(hasCycle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 10), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 31');
test(hasCycle([1,1,1,1,1,1,1,1,1,1], 5), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 32');
test(hasCycle([10,20,30,40,50,60,70], 4), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 33');
test(hasCycle([100000,-100000,50000,-50000,25000,-25000,12500,-12500,6250,-6250,3125,-3125,1562,-1562,781,-781,390,-390,195,-195], -1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 34');
test(hasCycle([1,1,1,1,1,1,1,1,1,1], 3), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 35');
test(hasCycle([100000,-100000,50000,-50000,25000,-25000,12500,-12500,6250,-6250,3125,-3125,1562,-1562,781,-781,390,-390,195,-195], 18), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 36');
test(hasCycle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 0), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 37');
test(hasCycle([100000,-100000,50000,-50000,25000,-25000], 2), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 38');
test(hasCycle([1,2,2,2,2,2,2,2,2,2], 1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 39');
test(hasCycle([1000,2000,3000,4000,5000,6000,7000,8000,9000,10000], 9), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 40');
test(hasCycle([1,2,3,4,5,6,7,8,9,10], -1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 41');
test(hasCycle([1,2,3,4,5,6,7,8,9,10], 7), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 42');
test(hasCycle([1,2,3,4,5,6,7,8,9,10], 0), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 43');
test(hasCycle([1,2,2,3,4,5,6,7,8,9,10], 2), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 44');
test(hasCycle([0,-1,-2,-3,-4,-5,-6], 6), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 45');
test(hasCycle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 20), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 46');
test(hasCycle([1], 0), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 47');
test(hasCycle([5,5,5,5,5,5,5,5,5,5], 8), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 48');
test(hasCycle([5,4,3,2,1,0,-1,-2,-3,-4,-5], 0), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 49');
test(hasCycle([100,200,300,400,500,600,700,800,900,1000], 7), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 50');
test(hasCycle([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 20), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 51');
test(hasCycle([10,20,30,40,50,60,70,80,90,100], 0), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 52');
test(hasCycle([5,4,3,2,1], 0), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 53');
test(hasCycle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 0), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 54');
test(hasCycle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 55');
test(hasCycle([1,2], 1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 56');
test(hasCycle([0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15], 8), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 57');
test(hasCycle([100,99,98,97,96,95,94,93,92,91,90], 10), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 58');
test(hasCycle([5,4,3,2,1,0,-1,-2,-3,-4,-5], 9), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 59');
test(hasCycle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 0), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 60');
test(hasCycle([10,20,30,40,50,60,70,80,90,100], 5), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 61');
test(hasCycle([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 7), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 62');
test(hasCycle([1,2,3,4,5,6,7,8,9,10], 3), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 63');
test(hasCycle([5,5,5,5,5,5,5,5,5,5], 5), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 64');
test(hasCycle([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20], -1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 65');
test(hasCycle([1,3,2,4,5,6,7,8,9,10], 8), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 66');
test(hasCycle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 19), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 67');
test(hasCycle([0,0,0,0,0,0,0,0,0,0], 4), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 68');
test(hasCycle([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 50), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 69');
test(hasCycle([1,2,3,4,5,6,7,8,9,10], 8), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 70');
test(hasCycle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 15), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 71');
test(hasCycle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], -1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 72');
test(hasCycle([1,2,3,4,5,6,7,8,9,10], 2), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 73');
test(hasCycle([10,-20,30,40,50,60,70,80,90,100], 5), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 74');
test(hasCycle([10,9,8,7,6,5,4,3,2,1], 0), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 75');
test(hasCycle([10,9,8,7,6,5,4,3,2,1], 7), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 76');
test(hasCycle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 25), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 77');
test(hasCycle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 78');
test(hasCycle([1000,2000,3000,4000,5000,6000,7000,8000,9000,10000], 0), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 79');
test(hasCycle([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500], 7), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 80');
test(hasCycle([1,2,3,4,5,6,7,8,9,10], 1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 81');
test(hasCycle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 15), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 82');
test(hasCycle([1,2,3,4,5,6,7,8,9,10], 9), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 83');
test(hasCycle([1,3,5,7,9,11,13,15,17,19,21], 10), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 84');
test(hasCycle([-1,-7,7,-4,19,6,-9,-5,-2,-5], 6), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 85');
test(hasCycle([1,1,1,1,1,1], 3), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 86');
test(hasCycle([1,1,1,1,1,1], 1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 87');
test(hasCycle([1,3,4,2,2], 3), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 88');
test(hasCycle([1,2,3], 0), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 89');
test(hasCycle([-1,-2,-3,-4,-5], 2), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 90');
test(hasCycle([0], 0), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 91');
test(hasCycle([5,4,3,2,1], 2), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 92');
test(hasCycle([1,1,1,1,1,1,1,1,1,1], -1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 93');
test(hasCycle([1,1,1,1,1,1,1], 4), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 94');
test(hasCycle([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], 3), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 95');
test(hasCycle([1,1,1,1,1], 2), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 96');
test(hasCycle([1,1,1,1,1], 4), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 97');
test(hasCycle([1,1,1,1,1,1], -1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 98');
test(hasCycle([1,2]), false, 'Test 99');
test(hasCycle([1,3,4,5,6,1,3], 2), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 100');
test(hasCycle([1,1,1,1,1,1,1,1,1,1], 7), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 101');
test(hasCycle([1,3,2], 1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 102');
test(hasCycle([1,2,3,4,5,6], 2), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 103');
test(hasCycle([10,20,30,40,50], -1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 104');
test(hasCycle([1,1,1,1,1], -1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 105');
test(hasCycle([1]), false, 'Test 106');
test(hasCycle([-1,-2,-3,-4,-5], 3), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 107');
test(hasCycle([0], -1), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 108');
test(hasCycle([1,1,1,1,1], 0), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 109');
test(hasCycle([1,2,3], 2), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 110');
test(hasCycle([1,2,3,4,5,6,7,8,9,10,11,12], 11), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 111');
test(hasCycle([0,1,2,3,4,5,6,7,8,9], 5), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 112');
test(hasCycle([1,2,3,4,5,6], 3), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 113');
test(hasCycle([]), false, 'Test 114');
test(hasCycle([1,2,3,4,5,6,7,8,9,10,11,12], 0), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 115');
test(hasCycle([1,2,3,4,5], 4), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 116');
test(hasCycle([1,2,3,4,5,6,7,8,9,10,1]), false, 'Test 117');
test(hasCycle([3,2,0,-4]), false, 'Test 118');
test(hasCycle([1,2,3,4,5,6,7,8,9,10]), false, 'Test 119');
test(hasCycle([2,2,2,2], 2), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 120');
test(hasCycle([10,9,8,7,6,5,4,3,2,1], 4), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 121');
test(hasCycle([10,9,8,7,6,5,4,3,2,1], 3), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 122');
test(hasCycle([1,1,1,1], 0), Error: Solution.hasCycle[] got an unexpected keyword argument 'pos', 'Test 123');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

