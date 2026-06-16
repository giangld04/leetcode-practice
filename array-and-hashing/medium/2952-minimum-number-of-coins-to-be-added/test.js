// Test: 2952. Minimum Number Of Coins To Be Added
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { minimumAddedCoins } = require("./solution");

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

console.log("\n2952. Minimum Number Of Coins To Be Added\n");

test(minimumAddedCoins([3,6,9], 15), 2, 'Test 1');
test(minimumAddedCoins([2,5,10], 20), 2, 'Test 2');
test(minimumAddedCoins([1,4,10], 19), 2, 'Test 3');
test(minimumAddedCoins([1,1,1], 20), 3, 'Test 4');
test(minimumAddedCoins([1,4,10,5,7,19], 19), 1, 'Test 5');
test(minimumAddedCoins([1,2,4,8,16], 31), 0, 'Test 6');
test(minimumAddedCoins([1,3,7,15,31,63,127], 256), 2, 'Test 7');
test(minimumAddedCoins([1,2,5,10,20], 99), 3, 'Test 8');
test(minimumAddedCoins([1,5,10,25,50,100], 500), 5, 'Test 9');
test(minimumAddedCoins([1,10,25,50,100], 300), 4, 'Test 10');
test(minimumAddedCoins([2,3,5,7,11,13,17,19,23,29,31], 150), 1, 'Test 11');
test(minimumAddedCoins([1,3,6,13,26,52], 100), 1, 'Test 12');
test(minimumAddedCoins([1,2,3,4,5,6,7,8,9,10], 100), 1, 'Test 13');
test(minimumAddedCoins([2,3,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101], 100000), 8, 'Test 14');
test(minimumAddedCoins([1,2,3,5,10,20,50,100], 1000), 4, 'Test 15');
test(minimumAddedCoins([10,20,30,40,50], 150), 4, 'Test 16');
test(minimumAddedCoins([1,3,6,12,24,48], 100), 2, 'Test 17');
test(minimumAddedCoins([5,11,17,23,29,35,41,47,53], 200), 3, 'Test 18');
test(minimumAddedCoins([1,2,4,8,16,32,64,128,256], 512), 1, 'Test 19');
test(minimumAddedCoins([1,2,4,8,16,32,64,128,256,512], 1023), 0, 'Test 20');
test(minimumAddedCoins([1,2,5,10,20,50], 99), 2, 'Test 21');
test(minimumAddedCoins([2,6,18,54], 150), 5, 'Test 22');
test(minimumAddedCoins([7,14,21,28,35,42,49,56,63,70], 400), 4, 'Test 23');
test(minimumAddedCoins([1,2,4,8,16,32,64,128,256,512,1024], 2048), 1, 'Test 24');
test(minimumAddedCoins([1,3,6,12,24,48,96,192,384,768,1536,3072,6144,12288,24576,49152,98304,196608,393216,786432], 1000000), 1, 'Test 25');
test(minimumAddedCoins([1,1,2,2,5,5,10,10], 50), 1, 'Test 26');
test(minimumAddedCoins([1,2,3,5,7,11,13,17,19,23], 100), 0, 'Test 27');
test(minimumAddedCoins([1,2,5,10,20,50,100], 500), 4, 'Test 28');
test(minimumAddedCoins([2,4,6,8,10], 25), 1, 'Test 29');
test(minimumAddedCoins([1,2,5,10,20,50,100,200,500,1000,2000,5000,10000,20000,50000], 100000), 5, 'Test 30');
test(minimumAddedCoins([3,7,15,23], 50), 3, 'Test 31');
test(minimumAddedCoins([1,2,3,4,5,6,7,8,9,10], 30), 0, 'Test 32');
test(minimumAddedCoins([1, 3, 6, 12], 50), 3, 'Test 33');
test(minimumAddedCoins([2,6,10,14,18,22], 50), 2, 'Test 34');
test(minimumAddedCoins([2,6,10,14,18,22], 100), 3, 'Test 35');
test(minimumAddedCoins([3,7,11,15,19,23,27,31,35,39,43,47,51,55,59,63,67,71,75,79,83,87,91,95,99], 100), 2, 'Test 36');
test(minimumAddedCoins([3,6,9,12,15,18,21,24,27], 100), 2, 'Test 37');
test(minimumAddedCoins([1, 2, 4, 8, 16, 32, 64], 128), 1, 'Test 38');
test(minimumAddedCoins([1,2,3,6,12,24,48], 100), 1, 'Test 39');
test(minimumAddedCoins([5,12,19,26,33,40,47,54,61,68,75], 200), 3, 'Test 40');
test(minimumAddedCoins([1,3,5,7,9,11,13,15,17,19], 250), 3, 'Test 41');
test(minimumAddedCoins([1,3,7,11,15], 30), 1, 'Test 42');
test(minimumAddedCoins([2,3,6,9,18], 50), 2, 'Test 43');
test(minimumAddedCoins([3, 6, 9, 12], 45), 3, 'Test 44');
test(minimumAddedCoins([1,3,5,7,9,11], 50), 2, 'Test 45');
test(minimumAddedCoins([5,9,12,18,23,34,41,50,65,78,90,100,120,150,200], 500), 3, 'Test 46');
test(minimumAddedCoins([1,3,6,12,24,48,96,192], 500), 2, 'Test 47');
test(minimumAddedCoins([1,1,1,2,2,2,4,4,4,8,8,8,16,16,16], 100), 1, 'Test 48');
test(minimumAddedCoins([1,2,3,5,11,21,41], 100), 1, 'Test 49');
test(minimumAddedCoins([1,2,5,10,20,50,100,200,500,1000,2000,5000,10000,20000,50000,100000], 100000), 5, 'Test 50');
test(minimumAddedCoins([1,1,1,1,1,1,1,1,1,1], 100), 4, 'Test 51');
test(minimumAddedCoins([2,6,18,54], 100), 4, 'Test 52');
test(minimumAddedCoins([3,6,9,12,15,18,21,24,27,30], 200), 3, 'Test 53');
test(minimumAddedCoins([1,5,10,25,50], 120), 3, 'Test 54');
test(minimumAddedCoins([2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536,131072,262144,524288], 999999), 1, 'Test 55');
test(minimumAddedCoins([1,2,4,8,16,32,64], 127), 0, 'Test 56');
test(minimumAddedCoins([2,3,5,7,11,13], 50), 2, 'Test 57');
test(minimumAddedCoins([1,5,10,25], 100), 4, 'Test 58');
test(minimumAddedCoins([1,1,2,2,5,5], 50), 2, 'Test 59');
test(minimumAddedCoins([5,10,20,50], 100), 4, 'Test 60');
test(minimumAddedCoins([2, 3, 5, 7, 11], 30), 2, 'Test 61');
test(minimumAddedCoins([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384], 32767), 0, 'Test 62');
test(minimumAddedCoins([1,1,2,3,5,8,13,21,34,55,89], 200), 0, 'Test 63');
test(minimumAddedCoins([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 50), 0, 'Test 64');
test(minimumAddedCoins([1,5,10,25,50], 99), 3, 'Test 65');
test(minimumAddedCoins([1,2,4,8,16,32,64,128,256,512], 1024), 1, 'Test 66');
test(minimumAddedCoins([5,7,11,23], 100), 4, 'Test 67');
test(minimumAddedCoins([1,3,9,30], 50), 3, 'Test 68');
test(minimumAddedCoins([1,5,10,25,50], 100), 3, 'Test 69');
test(minimumAddedCoins([1,3,7,15,31,63,127,255,511,1023], 2047), 2, 'Test 70');
test(minimumAddedCoins([1,2,4,8,16,32,64,128], 255), 0, 'Test 71');
test(minimumAddedCoins([1,5,10,25,50,100,200,500,1000,2000,5000,10000,20000,50000,100000,200000,500000], 99999), 6, 'Test 72');
test(minimumAddedCoins([7,14,21,28,35,42,49], 100), 3, 'Test 73');
test(minimumAddedCoins([5,10,20,50,100], 200), 4, 'Test 74');
test(minimumAddedCoins([1,3,4,7,10,12,15,18], 100), 2, 'Test 75');
test(minimumAddedCoins([5,10,20,50,100,200], 1000), 6, 'Test 76');
test(minimumAddedCoins([1,5,10,20,50,100], 300), 4, 'Test 77');
test(minimumAddedCoins([1,1,2,4,8,16,32,64,128], 255), 0, 'Test 78');
test(minimumAddedCoins([10,20,30,40,50], 100), 4, 'Test 79');
test(minimumAddedCoins([1,2,5,10,20,50], 100), 2, 'Test 80');
test(minimumAddedCoins([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100], 100), 3, 'Test 81');
test(minimumAddedCoins([10,20,30,40,50,60,70,80,90,100], 550), 4, 'Test 82');
test(minimumAddedCoins([1,5,10,25,50,100], 300), 4, 'Test 83');
test(minimumAddedCoins([1, 5, 10, 25], 100), 4, 'Test 84');
test(minimumAddedCoins([2, 4, 8, 16, 32], 100), 2, 'Test 85');
test(minimumAddedCoins([2,3,6,11], 30), 2, 'Test 86');
test(minimumAddedCoins([1, 2, 5, 10, 20, 50], 100), 2, 'Test 87');
test(minimumAddedCoins([1,2,5,10,20,50,100,200,500,1000,2000,5000,10000,20000,50000,100000,200000,500000,1000000,2000000], 5000000), 7, 'Test 88');
test(minimumAddedCoins([1,2,3,4,5,6,7,8,9,10], 55), 0, 'Test 89');
test(minimumAddedCoins([1,2,4,8,16], 100), 2, 'Test 90');
test(minimumAddedCoins([1,3,5,7,9,11,13,15], 100), 2, 'Test 91');
test(minimumAddedCoins([7, 14, 28, 56], 100), 3, 'Test 92');
test(minimumAddedCoins([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60], 60), 2, 'Test 93');
test(minimumAddedCoins([7,14,21,28,35,42,49,56,63,70,77,84,91,98,105,112,119,126,133,140,147,154,161,168,175,182,189,196,203,210], 210), 3, 'Test 94');
test(minimumAddedCoins([1,2,3,5,8,13,21], 50), 0, 'Test 95');
test(minimumAddedCoins([1,3,7,15,31,63], 128), 2, 'Test 96');
test(minimumAddedCoins([10,20,30,40,50], 200), 5, 'Test 97');
test(minimumAddedCoins([5, 10, 20, 40, 80], 200), 4, 'Test 98');
test(minimumAddedCoins([1,2,6,14,30], 63), 2, 'Test 99');
test(minimumAddedCoins([2,6,14,30,62,126], 255), 3, 'Test 100');
test(minimumAddedCoins([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60], 60), 1, 'Test 101');
test(minimumAddedCoins([3, 9, 27, 81], 243), 6, 'Test 102');
test(minimumAddedCoins([7,14,21,28,35,42,49,56,63,70,77,84,91,98], 100), 3, 'Test 103');
test(minimumAddedCoins([1,3,6,12,24], 100), 3, 'Test 104');
test(minimumAddedCoins([1,4,9,16,25,36,49,64,81,100], 200), 2, 'Test 105');
test(minimumAddedCoins([1,2,3,4,5,6,7,8,9,10], 50), 0, 'Test 106');
test(minimumAddedCoins([3,7,11,25], 60), 3, 'Test 107');
test(minimumAddedCoins([1,2,5,10,25], 100), 3, 'Test 108');
test(minimumAddedCoins([5,10,25], 100), 5, 'Test 109');
test(minimumAddedCoins([1,3,6,10,15,21,28,36,45,55,66,78,91,105,120,136,153,171,190,210,231,253,276,300], 300), 1, 'Test 110');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

