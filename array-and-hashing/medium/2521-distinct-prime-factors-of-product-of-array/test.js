// Test: 2521. Distinct Prime Factors Of Product Of Array
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { distinctPrimeFactors } = require("./solution");

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

console.log("\n2521. Distinct Prime Factors Of Product Of Array\n");

test(distinctPrimeFactors([100,200,300,400]), 3, 'Test 1');
test(distinctPrimeFactors([2,2,2,2,2,2,2,2,2,2]), 1, 'Test 2');
test(distinctPrimeFactors([256,512,1024,2048]), 1, 'Test 3');
test(distinctPrimeFactors([1000, 500, 250, 125]), 2, 'Test 4');
test(distinctPrimeFactors([2,3,5,7,11,13]), 6, 'Test 5');
test(distinctPrimeFactors([60,120,180,240,300]), 3, 'Test 6');
test(distinctPrimeFactors([31,37,41,43,47,53]), 6, 'Test 7');
test(distinctPrimeFactors([2,4,3,7,10,6]), 4, 'Test 8');
test(distinctPrimeFactors([29,31,37,41]), 4, 'Test 9');
test(distinctPrimeFactors([1000,500,250,125]), 2, 'Test 10');
test(distinctPrimeFactors([10,20,30,40,50]), 3, 'Test 11');
test(distinctPrimeFactors([100,200,300]), 3, 'Test 12');
test(distinctPrimeFactors([2,4,8,16]), 1, 'Test 13');
test(distinctPrimeFactors([997,991,983,977,971]), 5, 'Test 14');
test(distinctPrimeFactors([3,5,7,11,13]), 5, 'Test 15');
test(distinctPrimeFactors([60,120,180,240]), 3, 'Test 16');
test(distinctPrimeFactors([49,49,49,49]), 1, 'Test 17');
test(distinctPrimeFactors([999,1000]), 4, 'Test 18');
test(distinctPrimeFactors([7,14,21,28,35]), 4, 'Test 19');
test(distinctPrimeFactors([31,31,31,31,31]), 1, 'Test 20');
test(distinctPrimeFactors([2,3,5,7,11,13,17,19,23,29]), 10, 'Test 21');
test(distinctPrimeFactors([5,10,15,20]), 3, 'Test 22');
test(distinctPrimeFactors([3,9,27,81]), 1, 'Test 23');
test(distinctPrimeFactors([2,2,2,2,2]), 1, 'Test 24');
test(distinctPrimeFactors([61, 67, 71, 73, 79, 83, 89, 97]), 8, 'Test 25');
test(distinctPrimeFactors([15, 21, 27, 33, 39]), 5, 'Test 26');
test(distinctPrimeFactors([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 4, 'Test 27');
test(distinctPrimeFactors([17, 19, 23, 29, 31, 37, 41]), 7, 'Test 28');
test(distinctPrimeFactors([1023, 2046, 3069, 4092, 5115]), 5, 'Test 29');
test(distinctPrimeFactors([111, 222, 333, 444, 555]), 4, 'Test 30');
test(distinctPrimeFactors([15, 21, 35, 55, 77, 105]), 4, 'Test 31');
test(distinctPrimeFactors([221, 247, 299, 323, 377, 413]), 7, 'Test 32');
test(distinctPrimeFactors([29, 29, 29, 29, 29, 29, 29, 29, 29, 29]), 1, 'Test 33');
test(distinctPrimeFactors([1009, 1013, 1019, 1021, 1031]), 5, 'Test 34');
test(distinctPrimeFactors([84, 90, 120, 140, 182]), 5, 'Test 35');
test(distinctPrimeFactors([987, 1597, 2584, 4181, 6765]), 12, 'Test 36');
test(distinctPrimeFactors([50, 75, 100, 125, 150]), 3, 'Test 37');
test(distinctPrimeFactors([60, 105, 140, 210, 231]), 5, 'Test 38');
test(distinctPrimeFactors([101, 103, 107, 109, 113, 127]), 6, 'Test 39');
test(distinctPrimeFactors([210, 154, 90]), 5, 'Test 40');
test(distinctPrimeFactors([29, 31, 37, 41, 43]), 5, 'Test 41');
test(distinctPrimeFactors([3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73]), 20, 'Test 42');
test(distinctPrimeFactors([19, 23, 29, 31, 37, 41, 43, 47]), 8, 'Test 43');
test(distinctPrimeFactors([123, 456, 789, 101112, 131415]), 9, 'Test 44');
test(distinctPrimeFactors([36, 45, 60, 72, 84, 90]), 4, 'Test 45');
test(distinctPrimeFactors([121, 143, 169, 187, 221]), 3, 'Test 46');
test(distinctPrimeFactors([100, 200, 300, 400, 500]), 3, 'Test 47');
test(distinctPrimeFactors([1024, 2048, 4096, 8192, 16384]), 1, 'Test 48');
test(distinctPrimeFactors([13195, 206772, 3249006, 5125130]), 12, 'Test 49');
test(distinctPrimeFactors([17, 18, 19, 20, 21, 22, 23, 24, 25, 26]), 9, 'Test 50');
test(distinctPrimeFactors([500, 700, 900, 1100, 1300, 1500]), 6, 'Test 51');
test(distinctPrimeFactors([2310, 30030, 510510, 9699690]), 8, 'Test 52');
test(distinctPrimeFactors([123, 456, 789, 101112]), 7, 'Test 53');
test(distinctPrimeFactors([121, 144, 169, 196, 225, 256, 289, 324, 361, 400]), 8, 'Test 54');
test(distinctPrimeFactors([60, 84, 90, 120, 180, 240]), 4, 'Test 55');
test(distinctPrimeFactors([500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000]), 4, 'Test 56');
test(distinctPrimeFactors([30, 45, 60, 75, 90]), 3, 'Test 57');
test(distinctPrimeFactors([29, 31, 37, 41, 43, 47]), 6, 'Test 58');
test(distinctPrimeFactors([840, 945, 1260, 1575]), 4, 'Test 59');
test(distinctPrimeFactors([98, 112, 147, 196, 294]), 3, 'Test 60');
test(distinctPrimeFactors([961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975]), 19, 'Test 61');
test(distinctPrimeFactors([231, 308, 396, 462]), 4, 'Test 62');
test(distinctPrimeFactors([987, 654, 321, 876, 543, 210]), 9, 'Test 63');
test(distinctPrimeFactors([231, 462, 693, 924, 1155]), 5, 'Test 64');
test(distinctPrimeFactors([1024, 512, 256, 128]), 1, 'Test 65');
test(distinctPrimeFactors([8, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102]), 7, 'Test 66');
test(distinctPrimeFactors([49, 64, 81, 100, 121, 144, 169, 196, 225]), 6, 'Test 67');
test(distinctPrimeFactors([128, 256, 512, 1024, 2048]), 1, 'Test 68');
test(distinctPrimeFactors([17, 19, 23, 29, 31, 37, 41, 43, 47, 53]), 10, 'Test 69');
test(distinctPrimeFactors([30, 42, 60, 70, 105]), 4, 'Test 70');
test(distinctPrimeFactors([19, 31, 37, 41, 43, 47, 53, 59]), 8, 'Test 71');
test(distinctPrimeFactors([25, 49, 121, 169, 289, 361]), 6, 'Test 72');
test(distinctPrimeFactors([729, 512, 343, 243, 125]), 4, 'Test 73');
test(distinctPrimeFactors([1024, 2048, 4096, 8192]), 1, 'Test 74');
test(distinctPrimeFactors([169, 441, 729, 1089, 1369]), 5, 'Test 75');
test(distinctPrimeFactors([15, 21, 33, 55, 77]), 4, 'Test 76');
test(distinctPrimeFactors([997, 991, 983, 977, 971, 967, 953, 947, 941, 937]), 10, 'Test 77');
test(distinctPrimeFactors([1000, 500, 250, 125, 62, 31]), 3, 'Test 78');
test(distinctPrimeFactors([171, 195, 221, 255, 285, 323]), 5, 'Test 79');
test(distinctPrimeFactors([18, 30, 45, 60, 75]), 3, 'Test 80');
test(distinctPrimeFactors([81, 125, 243, 343, 625]), 3, 'Test 81');
test(distinctPrimeFactors([840, 924, 1008, 1092, 1176, 1260]), 6, 'Test 82');
test(distinctPrimeFactors([37, 41, 43, 47, 53, 59, 61, 67, 71, 73]), 10, 'Test 83');
test(distinctPrimeFactors([100, 200, 300, 400, 500, 600]), 3, 'Test 84');
test(distinctPrimeFactors([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]), 25, 'Test 85');
test(distinctPrimeFactors([210, 231, 273, 308, 330, 364]), 6, 'Test 86');
test(distinctPrimeFactors([60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 8, 'Test 87');
test(distinctPrimeFactors([60, 105, 140, 210, 300]), 4, 'Test 88');
test(distinctPrimeFactors([97, 101, 103, 107, 109, 113]), 6, 'Test 89');
test(distinctPrimeFactors([81, 243, 729, 2187, 6561]), 1, 'Test 90');
test(distinctPrimeFactors([2310, 5005, 7735, 1155]), 7, 'Test 91');
test(distinctPrimeFactors([840, 1260, 720, 5040]), 4, 'Test 92');
test(distinctPrimeFactors([65, 130, 260, 520, 1040, 2080]), 3, 'Test 93');
test(distinctPrimeFactors([256, 512, 1024, 2048, 4096]), 1, 'Test 94');
test(distinctPrimeFactors([83, 89, 97, 101, 103, 107, 109, 113, 127, 131]), 10, 'Test 95');
test(distinctPrimeFactors([100, 200, 300, 400, 500, 600, 700]), 4, 'Test 96');
test(distinctPrimeFactors([123, 456, 789, 1011, 1213]), 7, 'Test 97');
test(distinctPrimeFactors([7, 11, 13, 17, 19, 23, 29, 31]), 8, 'Test 98');
test(distinctPrimeFactors([8192, 16384, 32768, 65536]), 1, 'Test 99');
test(distinctPrimeFactors([3125, 625, 125, 25]), 1, 'Test 100');
test(distinctPrimeFactors([256, 512, 1024, 2048, 4096, 8192]), 1, 'Test 101');
test(distinctPrimeFactors([97, 98, 99, 100, 101]), 7, 'Test 102');
test(distinctPrimeFactors([89, 107, 127, 137, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229]), 20, 'Test 103');
test(distinctPrimeFactors([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 5, 'Test 104');
test(distinctPrimeFactors([504, 1008, 2016, 4032]), 3, 'Test 105');
test(distinctPrimeFactors([1023, 500, 729]), 5, 'Test 106');
test(distinctPrimeFactors([2, 2, 2, 3, 3, 3, 5, 5, 5, 7, 7, 7, 11, 11, 11]), 5, 'Test 107');
test(distinctPrimeFactors([60, 84, 90, 120, 210]), 4, 'Test 108');
test(distinctPrimeFactors([2**2, 3**3, 5**4, 7**5, 11**6]), Error: Solution.distinctPrimeFactors[] missing 1 required positional argument: 'nums', 'Test 109');
test(distinctPrimeFactors([13, 17, 19, 23, 29, 31, 37, 41, 43, 47]), 10, 'Test 110');
test(distinctPrimeFactors([49, 64, 81, 100, 121, 144]), 5, 'Test 111');
test(distinctPrimeFactors([997, 991, 983, 977, 971]), 5, 'Test 112');
test(distinctPrimeFactors([30030, 30030, 30030, 30030, 30030]), 6, 'Test 113');
test(distinctPrimeFactors([12, 15, 21, 28, 45]), 4, 'Test 114');
test(distinctPrimeFactors([55, 77, 91, 1001, 1365]), 5, 'Test 115');
test(distinctPrimeFactors([625, 1250, 2500, 5000, 10000]), 2, 'Test 116');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

