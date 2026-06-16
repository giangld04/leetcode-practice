// Test: 1460. Make Two Arrays Equal By Reversing Subarrays
// 122 test cases from LeetCodeDataset
// Run: node test.js

const { canBeEqual } = require("./solution");

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

console.log("\n1460. Make Two Arrays Equal By Reversing Subarrays\n");

test(canBeEqual([4,3,2,1], [1,2,3,4]), true, 'Test 1');
test(canBeEqual([5,6,7,8], [8,7,6,5]), true, 'Test 2');
test(canBeEqual([1,1,1,1], [1,1,1,1]), true, 'Test 3');
test(canBeEqual([1,3,5,7], [7,5,3,1]), true, 'Test 4');
test(canBeEqual([1000,1000,1000], [1000,1000,1000]), true, 'Test 5');
test(canBeEqual([10,20,30,40], [40,30,20,10]), true, 'Test 6');
test(canBeEqual([1,2,3], [3,2,1]), true, 'Test 7');
test(canBeEqual([5,4,3,2,1], [1,2,3,4,5]), true, 'Test 8');
test(canBeEqual([1,2,3,4,5], [5,4,3,2,1]), true, 'Test 9');
test(canBeEqual([10,20,30], [30,20,10]), true, 'Test 10');
test(canBeEqual([5,1,3,2], [2,1,3,5]), true, 'Test 11');
test(canBeEqual([1000,1,1000], [1,1000,1000]), true, 'Test 12');
test(canBeEqual([1,2,2,3], [2,1,3,2]), true, 'Test 13');
test(canBeEqual([10,20,30,40,50], [50,40,30,20,10]), true, 'Test 14');
test(canBeEqual([1,3,5,7,9], [9,7,5,3,1]), true, 'Test 15');
test(canBeEqual([3,7,9], [3,7,11]), false, 'Test 16');
test(canBeEqual([5,3,1], [1,3,5]), true, 'Test 17');
test(canBeEqual([1,2,3,4], [2,4,1,3]), true, 'Test 18');
test(canBeEqual([1,2,2,3], [3,2,2,1]), true, 'Test 19');
test(canBeEqual([4,4,4,4], [4,4,4,4]), true, 'Test 20');
test(canBeEqual([1000,1,1000,1], [1,1000,1,1000]), true, 'Test 21');
test(canBeEqual([10,9,8,7], [7,8,9,10]), true, 'Test 22');
test(canBeEqual([1,3,2], [2,1,3]), true, 'Test 23');
test(canBeEqual([1,2,3], [4,5,6]), false, 'Test 24');
test(canBeEqual([7], [7]), true, 'Test 25');
test(canBeEqual([999,998,997], [997,998,999]), true, 'Test 26');
test(canBeEqual([5,6,7], [7,6,5]), true, 'Test 27');
test(canBeEqual([1,2,3,4,5,6,7,8,9,10], [10,1,2,3,4,5,6,7,8,9]), true, 'Test 28');
test(canBeEqual([10, 20, 30, 40, 50], [50, 40, 30, 20, 10]), true, 'Test 29');
test(canBeEqual([1,2,3,4,5,6,7,8,9,10], [2,3,4,5,6,7,8,9,10,1]), true, 'Test 30');
test(canBeEqual([5, 5, 5, 5, 5], [5, 5, 5, 5, 5]), true, 'Test 31');
test(canBeEqual([1,1,2,2,3,3], [3,2,1,3,1,2]), true, 'Test 32');
test(canBeEqual([1,2,3,4,5,6,7,8,9,10], [5,6,7,8,9,10,1,2,3,4]), true, 'Test 33');
test(canBeEqual([1,1,2,2,3,3,4,4,5,5,6,6], [6,6,5,5,4,4,3,3,2,2,1,1]), true, 'Test 34');
test(canBeEqual([1000,999,998,997,996,995,994,993,992,991], [991,992,993,994,995,996,997,998,999,1000]), true, 'Test 35');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 36');
test(canBeEqual([500,400,300,200,100], [100,200,300,400,500]), true, 'Test 37');
test(canBeEqual([5,5,5,5,5], [5,5,5,5,5]), true, 'Test 38');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 10, 9]), true, 'Test 39');
test(canBeEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), true, 'Test 40');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 2, 8, 4, 6, 5, 9, 7, 3, 1]), true, 'Test 41');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), false, 'Test 42');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 10, 9, 8, 7, 6, 5, 4, 3, 2]), true, 'Test 43');
test(canBeEqual([5, 10, 15, 20, 25], [25, 20, 15, 10, 5]), true, 'Test 44');
test(canBeEqual([250,200,150,100,50,0,-50,-100,-150,-200,-250], [-250,-200,-150,-100,-50,0,50,100,150,200,250]), true, 'Test 45');
test(canBeEqual([1, 2, 2, 3, 3, 4, 4], [4, 4, 3, 3, 2, 2, 1]), true, 'Test 46');
test(canBeEqual([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], [2,1,4,3,6,5,8,7,10,9,12,11,14,13,16,15,18,17]), false, 'Test 47');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 11, 1]), false, 'Test 48');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 49');
test(canBeEqual([999,1000,999,1000,999,1000,999,1000], [1000,999,1000,999,1000,999,1000,999]), true, 'Test 50');
test(canBeEqual([4, 4, 4, 4, 4, 4, 4], [4, 4, 4, 4, 4, 4, 4]), true, 'Test 51');
test(canBeEqual([5,1,4,3,2], [2,3,1,5,4]), true, 'Test 52');
test(canBeEqual([5,3,1,4,2], [2,1,4,3,5]), true, 'Test 53');
test(canBeEqual([3,2,1,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,1,2,3]), true, 'Test 54');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 2, 5, 4, 7, 6, 9, 8, 10]), true, 'Test 55');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 1, 2]), true, 'Test 56');
test(canBeEqual([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,1,2,3,4,5]), true, 'Test 57');
test(canBeEqual([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 58');
test(canBeEqual([3, 3, 3, 3, 3], [3, 3, 3, 3, 3]), true, 'Test 59');
test(canBeEqual([1000, 500, 250, 125], [125, 250, 500, 1000]), true, 'Test 60');
test(canBeEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 61');
test(canBeEqual([1, 1, 1, 2, 2, 2, 3, 3, 3], [3, 2, 1, 3, 2, 1, 3, 2, 1]), true, 'Test 62');
test(canBeEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), true, 'Test 63');
test(canBeEqual([1,2,3,4,5,6,7,8,9,10], [2,1,4,3,6,5,8,7,10,9]), true, 'Test 64');
test(canBeEqual([100,200,100,200,100], [200,100,200,100,200]), false, 'Test 65');
test(canBeEqual([1,1,2,2,3,3,4,4,5,5], [5,5,4,4,3,3,2,2,1,1]), true, 'Test 66');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 1, 4, 3, 6, 5, 8, 7, 10, 9]), true, 'Test 67');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 68');
test(canBeEqual([5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5]), true, 'Test 69');
test(canBeEqual([5,6,7,8,9,1,2,3,4,10], [1,2,3,4,5,6,7,8,9,10]), true, 'Test 70');
test(canBeEqual([5,4,3,2,1,1,2,3,4,5], [1,2,3,4,5,5,4,3,2,1]), true, 'Test 71');
test(canBeEqual([4,4,4,4,4,4,4,4,4,4], [4,4,4,4,4,4,4,4,4,4]), true, 'Test 72');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 1, 2, 3, 4]), true, 'Test 73');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 2, 3, 1]), true, 'Test 74');
test(canBeEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), true, 'Test 75');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]), false, 'Test 76');
test(canBeEqual([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), true, 'Test 77');
test(canBeEqual([100, 200, 300, 400, 500], [500, 400, 300, 200, 100]), true, 'Test 78');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 2, 1, 4, 5, 6, 7, 8, 9, 10]), true, 'Test 79');
test(canBeEqual([1,2,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,2,1]), true, 'Test 80');
test(canBeEqual([1000,500,1000,500,1000,500,1000,500,1000,500], [500,1000,500,1000,500,1000,500,1000,500,1000]), true, 'Test 81');
test(canBeEqual([1,3,5,7,9,11,13,15,17,19,21], [21,19,17,15,13,11,9,7,5,3,1]), true, 'Test 82');
test(canBeEqual([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], [10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), true, 'Test 83');
test(canBeEqual([7, 8, 9, 10, 11], [11, 10, 9, 8, 7]), true, 'Test 84');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 85');
test(canBeEqual([1, 2, 2, 1, 3, 3, 4, 4, 5, 5], [5, 5, 4, 4, 3, 3, 2, 2, 1, 1]), true, 'Test 86');
test(canBeEqual([1, 3, 5, 7, 9], [9, 7, 5, 3, 1]), true, 'Test 87');
test(canBeEqual([234,234,234,234,234,234,234,234,234,234], [234,234,234,234,234,234,234,234,234,234]), true, 'Test 88');
test(canBeEqual([9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10], [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9]), true, 'Test 89');
test(canBeEqual([100,90,80,70,60,50,40,30,20,10], [10,20,30,40,50,60,70,80,90,100]), true, 'Test 90');
test(canBeEqual([1000,999,998,997,996], [996,997,998,999,1000]), true, 'Test 91');
test(canBeEqual([1,2,2,3,4,5,6,7,8,9,10], [1,2,2,3,4,5,6,7,8,9,11]), false, 'Test 92');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 10, 9, 8, 7, 6, 5, 4]), true, 'Test 93');
test(canBeEqual([300,200,100,400,500,600,700,800,900,1000], [1000,900,800,700,600,500,400,100,200,300]), true, 'Test 94');
test(canBeEqual([7,8,9,10,11,12,13,14,15,16], [16,15,14,13,12,11,10,9,8,7]), true, 'Test 95');
test(canBeEqual([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]), true, 'Test 96');
test(canBeEqual([10,20,30,40,50,60,70,80,90,100], [100,90,80,70,60,50,40,30,20,10]), true, 'Test 97');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 2, 1, 6, 5, 4, 9, 8, 7, 10]), true, 'Test 98');
test(canBeEqual([1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1]), true, 'Test 99');
test(canBeEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 100');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 1, 4, 3, 6, 5, 8, 7, 10, 9, 11]), false, 'Test 101');
test(canBeEqual([10, 20, 30, 40, 50], [50, 10, 30, 20, 40]), true, 'Test 102');
test(canBeEqual([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100]), true, 'Test 103');
test(canBeEqual([1000,999,998,997,996,995], [995,996,997,998,999,1000]), true, 'Test 104');
test(canBeEqual([1,2,2,3,3,3,4,4,4,4], [4,4,3,3,4,3,2,1,2,4]), true, 'Test 105');
test(canBeEqual([3,1,4,1,5,9,2,6,5,3,5,9], [3,1,4,1,5,9,2,6,5,3,5,8]), false, 'Test 106');
test(canBeEqual([7, 8, 9, 10, 11, 12, 13, 14, 15, 16], [16, 15, 14, 13, 12, 11, 10, 9, 8, 7]), true, 'Test 107');
test(canBeEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], [30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 108');
test(canBeEqual([50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50], [50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50]), true, 'Test 109');
test(canBeEqual([5, 3, 4, 1, 2], [2, 1, 4, 3, 5]), true, 'Test 110');
test(canBeEqual([1, 1, 1, 1, 1], [1, 1, 1, 1, 1]), true, 'Test 111');
test(canBeEqual([10,20,30,40,50,60,70,80,90,100], [10,20,30,40,50,60,70,100,90,80]), true, 'Test 112');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2]), false, 'Test 113');
test(canBeEqual([1, 3, 2, 4, 5], [2, 1, 4, 5, 3]), true, 'Test 114');
test(canBeEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 115');
test(canBeEqual([1, 2, 3, 4, 3, 2, 1], [1, 2, 3, 4, 3, 2, 1]), true, 'Test 116');
test(canBeEqual([200,300,100,400,500,600], [100,200,300,400,500,600]), true, 'Test 117');
test(canBeEqual([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], [10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1]), true, 'Test 118');
test(canBeEqual([3,1,4,1,5,9,2,6,5,3,5,9], [9,5,3,5,2,6,9,5,1,4,1,3]), true, 'Test 119');
test(canBeEqual([1, 1, 2, 2, 3, 3, 4, 4], [4, 4, 3, 3, 2, 2, 1, 1]), true, 'Test 120');
test(canBeEqual([1, 1, 2, 2, 3, 3], [3, 3, 2, 2, 1, 1]), true, 'Test 121');
test(canBeEqual([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 122');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

