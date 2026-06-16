// Test: 978. Longest Turbulent Subarray
// 150 test cases from LeetCodeDataset
// Run: node test.js

const { maxTurbulenceSize } = require("./solution");

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

console.log("\n978. Longest Turbulent Subarray\n");

test(maxTurbulenceSize([9,9]), 1, 'Test 1');
test(maxTurbulenceSize([9,4,2,10,7,8,8,1,9]), 5, 'Test 2');
test(maxTurbulenceSize([9,8,7,6,7,8,9,8,7,6]), 3, 'Test 3');
test(maxTurbulenceSize([1,2,1,2,1,2,1,2,3]), 8, 'Test 4');
test(maxTurbulenceSize([1,2,1,2,1,2,1,2,1]), 9, 'Test 5');
test(maxTurbulenceSize([9,4,2,10,7,8,7,1,9,4,2,10,7,8,8,1,9]), 6, 'Test 6');
test(maxTurbulenceSize([10,9,4,5,4,8,9,3,5]), 5, 'Test 7');
test(maxTurbulenceSize([10,9,8,7,6,5,4,3,2,1]), 2, 'Test 8');
test(maxTurbulenceSize([1,2,3,4,5,6,7,8,9,10]), 2, 'Test 9');
test(maxTurbulenceSize([0,0,0,0,0,0,0,0,0]), 1, 'Test 10');
test(maxTurbulenceSize([1,2,2,1,2,2,1,2,2]), 3, 'Test 11');
test(maxTurbulenceSize([2,1,2,1,2,1,2,1,2]), 9, 'Test 12');
test(maxTurbulenceSize([1,2,3,4,5,4,3,2,1]), 3, 'Test 13');
test(maxTurbulenceSize([0,8,45,88,48,68,28,55,17,24]), 8, 'Test 14');
test(maxTurbulenceSize([100]), 1, 'Test 15');
test(maxTurbulenceSize([8,8,8,8,8,8]), 1, 'Test 16');
test(maxTurbulenceSize([9,8,7,6,5,4,3,2,1]), 2, 'Test 17');
test(maxTurbulenceSize([1,2,3,2,1,2,3,2,1]), 3, 'Test 18');
test(maxTurbulenceSize([4,8,12,16]), 2, 'Test 19');
test(maxTurbulenceSize([1,3,2,5,4,7,6,9,8,10]), 10, 'Test 20');
test(maxTurbulenceSize([1,2,3,4,5,6,7,8,9]), 2, 'Test 21');
test(maxTurbulenceSize([1,3,2,5,4,7,6,9,8]), 9, 'Test 22');
test(maxTurbulenceSize([1,3,2,4,3,5,4,6,5]), 9, 'Test 23');
test(maxTurbulenceSize([1,2,3,2,1,2,1,2,3,4,3,2,1,2,1]), 5, 'Test 24');
test(maxTurbulenceSize([1,4,5,6,7,8,9,10,8,6,4,2,1]), 3, 'Test 25');
test(maxTurbulenceSize([9,9,9,9,9,9,9,10]), 2, 'Test 26');
test(maxTurbulenceSize([1,2,1,2,1,2,1,2]), 8, 'Test 27');
test(maxTurbulenceSize([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1]), 3, 'Test 28');
test(maxTurbulenceSize([5,3,8,6,7,4,9,2,10,1,11,0,12,-1,13,-2,14,-3]), 18, 'Test 29');
test(maxTurbulenceSize([5,3,8,6,10,7,12,9,14,11,16,13,18,15]), 14, 'Test 30');
test(maxTurbulenceSize([5, 3, 8, 1, 4, 7, 2, 6, 9, 0, 11]), 5, 'Test 31');
test(maxTurbulenceSize([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 3, 'Test 32');
test(maxTurbulenceSize([1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 3, 'Test 33');
test(maxTurbulenceSize([100,90,80,70,60,50,40,30,20,10,1,2,3,4,5,6,7,8,9,10]), 3, 'Test 34');
test(maxTurbulenceSize([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 2, 'Test 35');
test(maxTurbulenceSize([1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1]), 3, 'Test 36');
test(maxTurbulenceSize([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 37');
test(maxTurbulenceSize([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11,13,12,14,13]), 27, 'Test 38');
test(maxTurbulenceSize([3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4]), 14, 'Test 39');
test(maxTurbulenceSize([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 3, 'Test 40');
test(maxTurbulenceSize([3,8,5,11,6,10,7,12,8,14,9,15]), 12, 'Test 41');
test(maxTurbulenceSize([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9]), 19, 'Test 42');
test(maxTurbulenceSize([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 43');
test(maxTurbulenceSize([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3]), 3, 'Test 44');
test(maxTurbulenceSize([1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4]), 3, 'Test 45');
test(maxTurbulenceSize([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11]), 21, 'Test 46');
test(maxTurbulenceSize([1,2,1,2,3,2,3,2,1,2,1,2,1,2,3,2,3,2,1,2]), 7, 'Test 47');
test(maxTurbulenceSize([10,9,8,9,10,9,8,9,10,9,8,9,10,9,8,9,10,9,8,9,10,9,8,9,10,9,8,9]), 3, 'Test 48');
test(maxTurbulenceSize([21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), 2, 'Test 49');
test(maxTurbulenceSize([9, 8, 7, 6, 7, 8, 9, 8, 7, 6, 7, 8, 9, 8, 7, 6, 7, 8, 9, 8, 7, 6, 7, 8, 9]), 3, 'Test 50');
test(maxTurbulenceSize([1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 3, 4, 5, 6]), 3, 'Test 51');
test(maxTurbulenceSize([1,2,2,1,2,3,2,1,2,3,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5]), 3, 'Test 52');
test(maxTurbulenceSize([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 2, 'Test 53');
test(maxTurbulenceSize([1,2,3,4,5,4,3,2,3,4,5,4,3,2,3,4,5,4,3,2,3,4,5,4,3,2,3,4]), 3, 'Test 54');
test(maxTurbulenceSize([10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 35]), 11, 'Test 55');
test(maxTurbulenceSize([8,9,6,7,4,5,2,3,0,1,8,9,6,7,4,5,2,3,0,1]), 10, 'Test 56');
test(maxTurbulenceSize([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), 3, 'Test 57');
test(maxTurbulenceSize([1, 3, 2, 5, 4, 7, 6, 9, 8, 10, 9, 11, 10, 13, 12, 15, 14, 17, 16, 19, 18]), 21, 'Test 58');
test(maxTurbulenceSize([10,1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9]), 20, 'Test 59');
test(maxTurbulenceSize([5,3,8,10,6,5,7,9,3,1,2,4,6,5,4,3,2,1,2,3,4,5,6,7,8,9]), 3, 'Test 60');
test(maxTurbulenceSize([2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11]), 19, 'Test 61');
test(maxTurbulenceSize([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 29, 'Test 62');
test(maxTurbulenceSize([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10]), 3, 'Test 63');
test(maxTurbulenceSize([5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1]), 20, 'Test 64');
test(maxTurbulenceSize([1,2,3,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), 3, 'Test 65');
test(maxTurbulenceSize([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 2, 'Test 66');
test(maxTurbulenceSize([10, 9, 10, 8, 9, 7, 8, 6, 7, 5, 6, 4, 5, 6, 4, 3, 4, 2, 1]), 13, 'Test 67');
test(maxTurbulenceSize([1, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5, 3]), 13, 'Test 68');
test(maxTurbulenceSize([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4]), 3, 'Test 69');
test(maxTurbulenceSize([2,3,1,4,2,5,3,6,4,7,5,8,6,9,7,10,8,11,9,12]), 20, 'Test 70');
test(maxTurbulenceSize([1,3,5,7,9,8,6,4,2,0,2,4,6,8,10,9,7,5,3,1]), 3, 'Test 71');
test(maxTurbulenceSize([5,1,2,3,4,5,4,3,2,1,2,3,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4]), 3, 'Test 72');
test(maxTurbulenceSize([10,9,10,8,9,7,8,6,7,5,6,4,5,3,4,2,3,1,2,0,1,2,3,4,3,2,1,2,3,2,1]), 21, 'Test 73');
test(maxTurbulenceSize([1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,5,4]), 3, 'Test 74');
test(maxTurbulenceSize([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 75');
test(maxTurbulenceSize([1,2,3,4,5,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 4, 'Test 76');
test(maxTurbulenceSize([3,8,1,6,4,9,2,7,3,8,1,6,4,9,2,7,3,8]), 18, 'Test 77');
test(maxTurbulenceSize([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16]), 2, 'Test 78');
test(maxTurbulenceSize([3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1]), 16, 'Test 79');
test(maxTurbulenceSize([1, 2, 3, 4, 3, 2, 1, 2, 3, 2, 1]), 3, 'Test 80');
test(maxTurbulenceSize([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), 2, 'Test 81');
test(maxTurbulenceSize([1,2,2,1,2,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11,13,12,14,13,15]), 26, 'Test 82');
test(maxTurbulenceSize([3,8,6,5,10,7,1,9,2,8,5,7,6,1,5,1,4,3]), 8, 'Test 83');
test(maxTurbulenceSize([10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5]), 2, 'Test 84');
test(maxTurbulenceSize([1,3,2,5,4,7,6,9,8,10,11,10,9,8,7,6,5,4,3,2,1]), 10, 'Test 85');
test(maxTurbulenceSize([2,4,2,6,4,8,6,10,8,12,10,14,12,16,14,18,16]), 17, 'Test 86');
test(maxTurbulenceSize([10,9,10,8,10,7,10,6,10,5,10,4,10,3,10,2,10,1]), 18, 'Test 87');
test(maxTurbulenceSize([100,90,100,90,100,90,100,90,100,90,100,90,100,90,100,90]), 16, 'Test 88');
test(maxTurbulenceSize([1,1,1,1,1,1,1,1,1,1]), 1, 'Test 89');
test(maxTurbulenceSize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2]), 3, 'Test 90');
test(maxTurbulenceSize([5,8,6,7,3,4,2,3,1,4,3,2,1,5,4,3,2,1,6,5,4,3]), 11, 'Test 91');
test(maxTurbulenceSize([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 28, 'Test 92');
test(maxTurbulenceSize([5,6,5,4,3,2,1,0,-1,-2,-3,-4,-3,-2,-1,0,1,2,3,4]), 3, 'Test 93');
test(maxTurbulenceSize([200,190,180,170,160,150,140,130,120,110,100,90,80,70,60,50,40,30,20,10,0]), 2, 'Test 94');
test(maxTurbulenceSize([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 2, 'Test 95');
test(maxTurbulenceSize([10,20,30,25,20,15,10,5,10,15,20,25,30,25,20,15,10]), 3, 'Test 96');
test(maxTurbulenceSize([1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3]), 20, 'Test 97');
test(maxTurbulenceSize([3,5,4,3,5,4,3,5,4,3,5,4,3,5,4,3]), 4, 'Test 98');
test(maxTurbulenceSize([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]), 2, 'Test 99');
test(maxTurbulenceSize([10,9,8,7,6,5,4,3,2,1,0]), 2, 'Test 100');
test(maxTurbulenceSize([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 101');
test(maxTurbulenceSize([1, 2, 1, 3, 2, 1, 4, 3, 2, 1, 5, 4, 3, 2]), 5, 'Test 102');
test(maxTurbulenceSize([1,3,2,3,4,5,4,3,2,1,2,3,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4]), 4, 'Test 103');
test(maxTurbulenceSize([1,7,4,9,2,8,3,10,5,11,6]), 11, 'Test 104');
test(maxTurbulenceSize([9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6]), 3, 'Test 105');
test(maxTurbulenceSize([1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4]), 3, 'Test 106');
test(maxTurbulenceSize([10, 20, 10, 30, 20, 40, 30, 50, 40, 60, 50]), 11, 'Test 107');
test(maxTurbulenceSize([2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 11, 'Test 108');
test(maxTurbulenceSize([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10]), 3, 'Test 109');
test(maxTurbulenceSize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6]), 3, 'Test 110');
test(maxTurbulenceSize([9,3,8,3,8,3,9,3,9,3,8,3,8]), 13, 'Test 111');
test(maxTurbulenceSize([5, 8, 5, 10, 7, 12, 9, 14, 11, 16, 13, 18]), 12, 'Test 112');
test(maxTurbulenceSize([1,1,1,1,1,1,1,1,1]), 1, 'Test 113');
test(maxTurbulenceSize([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81]), 2, 'Test 114');
test(maxTurbulenceSize([10,9,10,8,9,10,8,9,10,8,9,10,8,9,10,8,9,10,8,9]), 5, 'Test 115');
test(maxTurbulenceSize([5,1,4,1,4,1,5,1,5,1,4]), 11, 'Test 116');
test(maxTurbulenceSize([5,6,5,7,6,5,7,6,5,7,6,5,7,6,5,7,6,5,7,6]), 5, 'Test 117');
test(maxTurbulenceSize([5,3,1,2,4,6,8,7,9,11,13,15,14,16,18,17,19,21,23,22,24,26,25,27,29,28,30]), 4, 'Test 118');
test(maxTurbulenceSize([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9]), 3, 'Test 119');
test(maxTurbulenceSize([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 120');
test(maxTurbulenceSize([4,5,6,1,2,3,7,8,9,2,3,4,5,6,7,3,4,5,6,7,8,9]), 4, 'Test 121');
test(maxTurbulenceSize([9,8,7,6,5,4,3,2,1,0]), 2, 'Test 122');
test(maxTurbulenceSize([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 123');
test(maxTurbulenceSize([1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2]), 3, 'Test 124');
test(maxTurbulenceSize([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]), 2, 'Test 125');
test(maxTurbulenceSize([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 4, 'Test 126');
test(maxTurbulenceSize([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2]), 3, 'Test 127');
test(maxTurbulenceSize([8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 4, 'Test 128');
test(maxTurbulenceSize([1,2,3,2,1,2,3,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1]), 3, 'Test 129');
test(maxTurbulenceSize([8,6,10,5,9,4,12,3,13,2,14,1]), 12, 'Test 130');
test(maxTurbulenceSize([1,2,3,2,3,4,3,4,5,4,5,6,5,6,7,6,7,8,7,8,9,8,9,10,9,10,11,10,11,12]), 4, 'Test 131');
test(maxTurbulenceSize([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 3, 'Test 132');
test(maxTurbulenceSize([2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11]), 16, 'Test 133');
test(maxTurbulenceSize([8,10,6,5,7,9,3,1,2,4,6,5,4,3,2,1,2,3,4,5,6]), 3, 'Test 134');
test(maxTurbulenceSize([9,10,8,11,7,12,6,13,5,14,4,15,3,16,2,17,1]), 17, 'Test 135');
test(maxTurbulenceSize([10, 20, 10, 30, 20, 40, 30, 50, 40, 60, 50, 70, 60, 80, 70]), 15, 'Test 136');
test(maxTurbulenceSize([1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3]), 32, 'Test 137');
test(maxTurbulenceSize([5, 8, 6, 7, 4, 5, 3, 4, 2, 1, 4, 3, 5, 6, 4, 7]), 9, 'Test 138');
test(maxTurbulenceSize([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 30, 'Test 139');
test(maxTurbulenceSize([1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1]), 2, 'Test 140');
test(maxTurbulenceSize([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12]), 20, 'Test 141');
test(maxTurbulenceSize([1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4]), 3, 'Test 142');
test(maxTurbulenceSize([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 2, 'Test 143');
test(maxTurbulenceSize([3, 1, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10]), 17, 'Test 144');
test(maxTurbulenceSize([10,5,15,0,10,5,15,0,10,5,15,0,10,5,15]), 15, 'Test 145');
test(maxTurbulenceSize([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12,11,13,12,14,13]), 25, 'Test 146');
test(maxTurbulenceSize([5,3,1,4,2,6,4,8,6,10,8,12,10,14,12,16,14,18,16,20,18]), 20, 'Test 147');
test(maxTurbulenceSize([2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2]), 3, 'Test 148');
test(maxTurbulenceSize([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3]), 3, 'Test 149');
test(maxTurbulenceSize([1,2,3,2,1,3,4,3,2,1,3,4,5,4,3,2,1,3,4,5,6,5,4,3,2,1,3,4]), 3, 'Test 150');

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
