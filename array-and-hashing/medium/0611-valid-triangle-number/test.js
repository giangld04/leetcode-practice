// Test: 611. Valid Triangle Number
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { triangleNumber } = require("./solution");

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

console.log("\n611. Valid Triangle Number\n");

test(triangleNumber([1,2,2,3,4,5]), 7, 'Test 1');
test(triangleNumber([1,3,5,7,9,11,13,15]), 22, 'Test 2');
test(triangleNumber([1,1,1,1]), 4, 'Test 3');
test(triangleNumber([4,2,3,4]), 4, 'Test 4');
test(triangleNumber([0,1,0,1]), 0, 'Test 5');
test(triangleNumber([10,21,32,43,54,65]), 7, 'Test 6');
test(triangleNumber([1,1,1,2,3,5,8,13,21,34]), 1, 'Test 7');
test(triangleNumber([1,1,2,2,3,3,4,4,5,5]), 52, 'Test 8');
test(triangleNumber([10,20,30,40,50]), 3, 'Test 9');
test(triangleNumber([5,5,5,5]), 4, 'Test 10');
test(triangleNumber([2,2,3,4]), 3, 'Test 11');
test(triangleNumber([1,2,3,4,5]), 3, 'Test 12');
test(triangleNumber([0,1,1,1]), 1, 'Test 13');
test(triangleNumber([10,21,22,100,101,200,300]), 6, 'Test 14');
test(triangleNumber([1,1,1,1,1,1,1,1,1,1]), 120, 'Test 15');
test(triangleNumber([0,0,0]), 0, 'Test 16');
test(triangleNumber([1,2,3,4,5,6]), 7, 'Test 17');
test(triangleNumber([0,0,0,0]), 0, 'Test 18');
test(triangleNumber([5,10,15,20,25]), 3, 'Test 19');
test(triangleNumber([1,2,2,3,4]), 4, 'Test 20');
test(triangleNumber([1000,1000,1000,1000]), 4, 'Test 21');
test(triangleNumber([1,2,2,3,4,6]), 5, 'Test 22');
test(triangleNumber([1,2,3]), 0, 'Test 23');
test(triangleNumber([0,0,0,1,1,1,1,1,2]), 10, 'Test 24');
test(triangleNumber([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6]), 1028, 'Test 25');
test(triangleNumber([1,10,100,1000,10000,100000,1000000]), 0, 'Test 26');
test(triangleNumber([1,2,2,3,4,4,5,5,5,6,7,8,8,9,10,10,11]), 333, 'Test 27');
test(triangleNumber([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99]), 9500, 'Test 28');
test(triangleNumber([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]), 252, 'Test 29');
test(triangleNumber([5,5,5,5,5,5,6,7,8,9,10]), 150, 'Test 30');
test(triangleNumber([500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515]), 560, 'Test 31');
test(triangleNumber([1,2,3,4,5,6,7,8,9,10]), 50, 'Test 32');
test(triangleNumber([3,4,5,6,7,8]), 17, 'Test 33');
test(triangleNumber([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36]), 372, 'Test 34');
test(triangleNumber([5,6,7,8,9,10]), 20, 'Test 35');
test(triangleNumber([0,0,0,0,1,2,3,4,5]), 3, 'Test 36');
test(triangleNumber([10,21,31,41,51,61,71,81,91,101]), 62, 'Test 37');
test(triangleNumber([1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9]), 1370, 'Test 38');
test(triangleNumber([0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3]), 230, 'Test 39');
test(triangleNumber([1, 2, 2, 3, 4, 5]), 7, 'Test 40');
test(triangleNumber([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1140, 'Test 41');
test(triangleNumber([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 525, 'Test 42');
test(triangleNumber([990,991,992,993,994,995,996,997,998,999,1000]), 165, 'Test 43');
test(triangleNumber([5, 10, 25, 50, 100]), 0, 'Test 44');
test(triangleNumber([5,4,3,2,1]), 3, 'Test 45');
test(triangleNumber([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9]), 1395, 'Test 46');
test(triangleNumber([1,2,2,3,4,4,5,6,7,8]), 48, 'Test 47');
test(triangleNumber([3,3,3,3,3]), 10, 'Test 48');
test(triangleNumber([1,3,3,4,5,6,7,8,9]), 40, 'Test 49');
test(triangleNumber([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 203, 'Test 50');
test(triangleNumber([1, 3, 5, 7, 9, 11]), 7, 'Test 51');
test(triangleNumber([0,0,0,0,0,0,0,0,0,0]), 0, 'Test 52');
test(triangleNumber([1,2,3,4,5,6,7,8,9,10,10,10,10]), 156, 'Test 53');
test(triangleNumber([2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 512, 'Test 54');
test(triangleNumber([1, 1000, 500, 300, 200, 100, 50, 25, 10, 5, 1]), 0, 'Test 55');
test(triangleNumber([0,0,0,1,1,2,2,3,3,4,4]), 24, 'Test 56');
test(triangleNumber([1,1,2,2,2,3,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), 486, 'Test 57');
test(triangleNumber([250,500,750,1000,250,500,750,1000,250,500]), 45, 'Test 58');
test(triangleNumber([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 530, 'Test 59');
test(triangleNumber([1,3,5,7,9,11]), 7, 'Test 60');
test(triangleNumber([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71]), 367, 'Test 61');
test(triangleNumber([5,10,15,20,25,30,35,40]), 22, 'Test 62');
test(triangleNumber([1,2,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]), 602, 'Test 63');
test(triangleNumber([1,1,2,2,2,3,3,4,5]), 31, 'Test 64');
test(triangleNumber([10,20,25,30,35,40,50,60,70,80,90,100]), 94, 'Test 65');
test(triangleNumber([0, 1, 1, 1, 1, 1]), 10, 'Test 66');
test(triangleNumber([100,150,200,250,300,350,400,450,500]), 50, 'Test 67');
test(triangleNumber([33,33,33,66,66,66,99,99,99,132,132,132]), 103, 'Test 68');
test(triangleNumber([100,200,300,400,500,600,700,800,900]), 34, 'Test 69');
test(triangleNumber([100,101,102,103,104,105,106,107,108,109,110]), 165, 'Test 70');
test(triangleNumber([1,5,9,13,17,21,25,29,33,37,41,45,49,53,57,61,65,69,73,77]), 525, 'Test 71');
test(triangleNumber([1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190]), 444, 'Test 72');
test(triangleNumber([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35]), 372, 'Test 73');
test(triangleNumber([5,5,5,5,5,5,5,5,5,5]), 120, 'Test 74');
test(triangleNumber([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90]), 372, 'Test 75');
test(triangleNumber([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 444, 'Test 76');
test(triangleNumber([0,0,0,1,1,1,2,2,2]), 11, 'Test 77');
test(triangleNumber([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 525, 'Test 78');
test(triangleNumber([5,25,45,65,85,105,125,145,165,185,205]), 70, 'Test 79');
test(triangleNumber([1,1,2,2,3,3,4,4]), 24, 'Test 80');
test(triangleNumber([998,999,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000]), 220, 'Test 81');
test(triangleNumber([333,333,333,333,333,333,333,333,333,333,333,333,333]), 286, 'Test 82');
test(triangleNumber([0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), 1945, 'Test 83');
test(triangleNumber([2,2,3,3,3,4,4,4,4,5,5,5,5,5]), 325, 'Test 84');
test(triangleNumber([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 1078, 'Test 85');
test(triangleNumber([10,20,30,40,50,60,70,80,90,100]), 50, 'Test 86');
test(triangleNumber([8, 15, 17, 10, 12, 6, 9, 11, 7, 4, 3, 2, 1]), 108, 'Test 87');
test(triangleNumber([10,20,20,20,30,30,40,50,60]), 35, 'Test 88');
test(triangleNumber([1,1,1,1,1,1,1,1]), 56, 'Test 89');
test(triangleNumber([10,10,10,11,12,13,14,15,16,17,18,19,20]), 283, 'Test 90');
test(triangleNumber([500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500]), 1140, 'Test 91');
test(triangleNumber([0,1,2,3,4,5,6]), 7, 'Test 92');
test(triangleNumber([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]), 203, 'Test 93');
test(triangleNumber([3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 508, 'Test 94');
test(triangleNumber([50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50]), 1140, 'Test 95');
test(triangleNumber([1,2,4,8,16,32,64,128]), 0, 'Test 96');
test(triangleNumber([0,0,1,1,2,2,3,3,4,4]), 24, 'Test 97');
test(triangleNumber([3, 3, 3, 3, 3, 3]), 20, 'Test 98');
test(triangleNumber([2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8]), 898, 'Test 99');
test(triangleNumber([2,3,3,4,5,6,7,8,9,10]), 65, 'Test 100');
test(triangleNumber([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]), 525, 'Test 101');
test(triangleNumber([1000, 0, 500, 500, 0, 500, 500, 0, 500, 500]), 20, 'Test 102');
test(triangleNumber([3,3,3,3,3,3,2,2,2,2,2,2,1,1,1,1,1,1]), 420, 'Test 103');
test(triangleNumber([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 1140, 'Test 104');
test(triangleNumber([1,3,6,10,15,21,28,36,45,55,66,78,91,105,120,136,153,171,190,210]), 211, 'Test 105');
test(triangleNumber([5,6,7,8,9]), 10, 'Test 106');
test(triangleNumber([1,10,100,1000,2,20,200,2000,3,30,300,3000,4,40,400,4000]), 4, 'Test 107');
test(triangleNumber([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 50, 'Test 108');
test(triangleNumber([300, 200, 100, 400, 500, 600, 700, 800, 900, 1000]), 50, 'Test 109');
test(triangleNumber([1,1,1,2,2,3,4,5]), 10, 'Test 110');
test(triangleNumber([1,1,1,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,8,8,8,9,9,9,10,10,10]), 1591, 'Test 111');
test(triangleNumber([100,200,300,400,500,600,700,800,900,1000]), 50, 'Test 112');
test(triangleNumber([999,1000,1000,1000,1000,999,999,999,999,998,998,998,998]), 286, 'Test 113');
test(triangleNumber([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 455, 'Test 114');
test(triangleNumber([1,10,100,1000,10,100,1000,10,100,1000]), 39, 'Test 115');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

