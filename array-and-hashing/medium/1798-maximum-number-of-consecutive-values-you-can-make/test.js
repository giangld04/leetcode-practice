// Test: 1798. Maximum Number Of Consecutive Values You Can Make
// 98 test cases from LeetCodeDataset
// Run: node test.js

const { getMaximumConsecutive } = require("./solution");

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

console.log("\n1798. Maximum Number Of Consecutive Values You Can Make\n");

test(getMaximumConsecutive([1,3]), 2, 'Test 1');
test(getMaximumConsecutive([1,2,5]), 4, 'Test 2');
test(getMaximumConsecutive([2,2,2,2]), 1, 'Test 3');
test(getMaximumConsecutive([10,9,8,7,6,5,4,3,2,1]), 56, 'Test 4');
test(getMaximumConsecutive([1]), 2, 'Test 5');
test(getMaximumConsecutive([1,4,10,3,1]), 20, 'Test 6');
test(getMaximumConsecutive([40000, 40000, 40000, 40000]), 1, 'Test 7');
test(getMaximumConsecutive([4,3,2,1]), 11, 'Test 8');
test(getMaximumConsecutive([100,200,300,400,500]), 1, 'Test 9');
test(getMaximumConsecutive([1,2,3,4,5]), 16, 'Test 10');
test(getMaximumConsecutive([1,1,1,1,1]), 6, 'Test 11');
test(getMaximumConsecutive([1,2,4,8,16,32,64,128,256,512]), 1024, 'Test 12');
test(getMaximumConsecutive([1,1,3,4]), 10, 'Test 13');
test(getMaximumConsecutive([1,2,5,10]), 4, 'Test 14');
test(getMaximumConsecutive([100,400,200,300]), 1, 'Test 15');
test(getMaximumConsecutive([4,4,4,4,4,4,4,4,4,4]), 1, 'Test 16');
test(getMaximumConsecutive([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 21, 'Test 17');
test(getMaximumConsecutive([2]), 1, 'Test 18');
test(getMaximumConsecutive([1,1,1,1,1,1,1,1,1,1]), 11, 'Test 19');
test(getMaximumConsecutive([10000,20000,30000,40000]), 1, 'Test 20');
test(getMaximumConsecutive([100,400,1,1,1]), 4, 'Test 21');
test(getMaximumConsecutive([2,2,3,3,3,4]), 1, 'Test 22');
test(getMaximumConsecutive([1,1,3,4,10]), 20, 'Test 23');
test(getMaximumConsecutive([1,2,3,4,5,6,7,8,9,10]), 56, 'Test 24');
test(getMaximumConsecutive([1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7]), 84, 'Test 25');
test(getMaximumConsecutive([1,1,1,4]), 8, 'Test 26');
test(getMaximumConsecutive([2,4,6,8]), 1, 'Test 27');
test(getMaximumConsecutive([1,1,2,2,3,3]), 13, 'Test 28');
test(getMaximumConsecutive([40000]), 1, 'Test 29');
test(getMaximumConsecutive([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]), 2, 'Test 30');
test(getMaximumConsecutive([10000,9999,9998,9997,9996,9995,9994,9993,9992,9991]), 1, 'Test 31');
test(getMaximumConsecutive([1,2,5,10,20,50,100]), 4, 'Test 32');
test(getMaximumConsecutive([5,7,11,13,17,19,23,29,31]), 1, 'Test 33');
test(getMaximumConsecutive([1,1,2,2,3,3,4,4,5,5]), 31, 'Test 34');
test(getMaximumConsecutive([2,3,6,12,24,48,96,192,384,768,1536,3072,6144]), 1, 'Test 35');
test(getMaximumConsecutive([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]), 1, 'Test 36');
test(getMaximumConsecutive([1,2,3,6,12,24,48,96,192,384,768,1536]), 3073, 'Test 37');
test(getMaximumConsecutive([1,2,5,10,20,50,100,200,500,1000]), 4, 'Test 38');
test(getMaximumConsecutive([1,5,10,25,50,100,200,500,1000]), 2, 'Test 39');
test(getMaximumConsecutive([1000,2000,3000,4000,5000,6000,7000,8000,9000,10000]), 1, 'Test 40');
test(getMaximumConsecutive([3,6,9,12,15,18,21,24,27]), 1, 'Test 41');
test(getMaximumConsecutive([1,2,4,8,16,32,64,128,256,512,1024]), 2048, 'Test 42');
test(getMaximumConsecutive([2,3,6,12,24,48,96,192,384,768]), 1, 'Test 43');
test(getMaximumConsecutive([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 111, 'Test 44');
test(getMaximumConsecutive([1,1,1,1,1,2,2,2,2,2,5,5,5,5,5]), 41, 'Test 45');
test(getMaximumConsecutive([1,3,6,12,24,48,96,192,384,768,1536,3072,6144,12288,24576]), 2, 'Test 46');
test(getMaximumConsecutive([10,20,30,40,50,60,70,80,90]), 1, 'Test 47');
test(getMaximumConsecutive([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]), 73, 'Test 48');
test(getMaximumConsecutive([1,1,2,2,4,4,8,8,16,16,32,32,64,64,128,128,256,256]), 1023, 'Test 49');
test(getMaximumConsecutive([1,3,5,7,9,11,13,15,17,19]), 2, 'Test 50');
test(getMaximumConsecutive([1,1,2,3,5,8,13,21,34,55,89,144,233,377,610]), 1597, 'Test 51');
test(getMaximumConsecutive([1,2,3,6,11,20,37,68,129,254]), 532, 'Test 52');
test(getMaximumConsecutive([5,5,5,5,5,5,5,5,5,5]), 1, 'Test 53');
test(getMaximumConsecutive([3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]), 1, 'Test 54');
test(getMaximumConsecutive([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 1, 'Test 55');
test(getMaximumConsecutive([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), 821, 'Test 56');
test(getMaximumConsecutive([100,200,200,300,400,400,400,500,600,600,700,800,800,900,1000]), 1, 'Test 57');
test(getMaximumConsecutive([2,2,3,3,3,5,5,5,5,7,7,7,7,7]), 1, 'Test 58');
test(getMaximumConsecutive([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]), 46, 'Test 59');
test(getMaximumConsecutive([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 1, 'Test 60');
test(getMaximumConsecutive([10,100,1000,10000,100000,1000000,10000000,100000000,1000000000,1,2,3,4,5,6,7,8,9]), 56, 'Test 61');
test(getMaximumConsecutive([1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 2, 'Test 62');
test(getMaximumConsecutive([1,10,100,1000,10000,100000,1000000]), 2, 'Test 63');
test(getMaximumConsecutive([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536,131072,262144,524288]), 1048576, 'Test 64');
test(getMaximumConsecutive([1,2,4,8,16,32,64,128,256,512,1024,2048,4096]), 8192, 'Test 65');
test(getMaximumConsecutive([1,2,5,10,20,50,100,200,500,1000,2000,5000,10000,20000,50000]), 4, 'Test 66');
test(getMaximumConsecutive([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]), 1, 'Test 67');
test(getMaximumConsecutive([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 2, 'Test 68');
test(getMaximumConsecutive([10,25,50,100,200,500,1000,2000,5000,10000]), 1, 'Test 69');
test(getMaximumConsecutive([1,1,2,3,5,8,13,21,34,55]), 144, 'Test 70');
test(getMaximumConsecutive([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 121, 'Test 71');
test(getMaximumConsecutive([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60]), 1, 'Test 72');
test(getMaximumConsecutive([2,4,6,8,10,12,14,16,18,20]), 1, 'Test 73');
test(getMaximumConsecutive([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), 166, 'Test 74');
test(getMaximumConsecutive([1,2,4,8,16,32,64]), 128, 'Test 75');
test(getMaximumConsecutive([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 111, 'Test 76');
test(getMaximumConsecutive([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]), 2, 'Test 77');
test(getMaximumConsecutive([1,3,6,10,15,21,28,36,45,55,66,78,91,105,120,136,153,171,190,210]), 2, 'Test 78');
test(getMaximumConsecutive([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 1, 'Test 79');
test(getMaximumConsecutive([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75]), 1, 'Test 80');
test(getMaximumConsecutive([1,3,6,10,15,21,28,36,45,55]), 2, 'Test 81');
test(getMaximumConsecutive([1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946]), 28656, 'Test 82');
test(getMaximumConsecutive([1,2,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 213, 'Test 83');
test(getMaximumConsecutive([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 26, 'Test 84');
test(getMaximumConsecutive([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]), 1, 'Test 85');
test(getMaximumConsecutive([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384]), 32768, 'Test 86');
test(getMaximumConsecutive([1,2,3,4,5,10,20,50,100,200]), 46, 'Test 87');
test(getMaximumConsecutive([1,1,2,2,4,4,8,8,16,16,32,32,64,64,128,128]), 511, 'Test 88');
test(getMaximumConsecutive([3,1,4,1,5,9,2,6,5,3,5,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5,0,2,8,8,4,1,9,7,1,6,9,3,9,9,3,7,5,1,0,5,8,2,0,9,7,4,9,4,4,5,9,2,3,0,7,8,1,6,4,0,6,2,8,6,2,0,4,9,6,2,4,9]), 395, 'Test 89');
test(getMaximumConsecutive([1,1,2,2,4,4,8,8,16,16]), 63, 'Test 90');
test(getMaximumConsecutive([1,2,4,8,16,32,64,128]), 256, 'Test 91');
test(getMaximumConsecutive([1,10,100,1000,10000,100000]), 2, 'Test 92');
test(getMaximumConsecutive([10,20,30,40,50,60,70,80,90,100]), 1, 'Test 93');
test(getMaximumConsecutive([1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), 164, 'Test 94');
test(getMaximumConsecutive([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), 151, 'Test 95');
test(getMaximumConsecutive([4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8]), 1, 'Test 96');
test(getMaximumConsecutive([1,2,5,10,20,50,100,200,500,1000,2000,5000,10000]), 4, 'Test 97');
test(getMaximumConsecutive([1,5,10,25,50,100,200,500,1000,2000,5000,10000]), 2, 'Test 98');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

