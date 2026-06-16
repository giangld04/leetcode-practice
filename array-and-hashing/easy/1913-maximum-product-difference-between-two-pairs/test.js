// Test: 1913. Maximum Product Difference Between Two Pairs
// 98 test cases from LeetCodeDataset
// Run: node test.js

const { maxProductDifference } = require("./solution");

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

console.log("\n1913. Maximum Product Difference Between Two Pairs\n");

test(maxProductDifference([5,6,2,7,4]), 34, 'Test 1');
test(maxProductDifference([9,5,8,6,7,3,2,1,4]), 70, 'Test 2');
test(maxProductDifference([1,2,3,4]), 10, 'Test 3');
test(maxProductDifference([4,2,5,9,7,4,8]), 64, 'Test 4');
test(maxProductDifference([10000,1,10000,1]), 99999999, 'Test 5');
test(maxProductDifference([9,8,7,6,5,4,3,2,1,0]), 72, 'Test 6');
test(maxProductDifference([9,5,8,6,7,3,4,2,1]), 70, 'Test 7');
test(maxProductDifference([9,5,8,3,7]), 57, 'Test 8');
test(maxProductDifference([10000,1,10000,1,10000,1]), 99999999, 'Test 9');
test(maxProductDifference([1000,2000,3000,4000,5000,6000,7000,8000,9000,10000]), 88000000, 'Test 10');
test(maxProductDifference([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]), 2080000, 'Test 11');
test(maxProductDifference([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]), 896, 'Test 12');
test(maxProductDifference([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 880000, 'Test 13');
test(maxProductDifference([2345,1234,5678,6789,3456,4567,7890,8901]), 67335160, 'Test 14');
test(maxProductDifference([100,101,102,103,104,105,106,107,108,109,2,3,4,5,6,7,8,9,10,11]), 11766, 'Test 15');
test(maxProductDifference([5000, 5000, 5000, 5000, 1, 1, 1, 1]), 24999999, 'Test 16');
test(maxProductDifference([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 17');
test(maxProductDifference([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10000, 10000, 10000, 10000, 10000]), 99999999, 'Test 18');
test(maxProductDifference([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), 832, 'Test 19');
test(maxProductDifference([10000, 10000, 10000, 10000, 9999, 9999, 9999, 9999]), 19999, 'Test 20');
test(maxProductDifference([5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,1,9999]), 49990000, 'Test 21');
test(maxProductDifference([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 780, 'Test 22');
test(maxProductDifference([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2, 3, 8, 4, 6]), 80, 'Test 23');
test(maxProductDifference([10000, 1, 9999, 2, 9998, 3, 9997, 4, 9996, 5]), 99989998, 'Test 24');
test(maxProductDifference([1,10000,2,9999,3,9998,4,9997,5,9996]), 99989998, 'Test 25');
test(maxProductDifference([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81]), 3258, 'Test 26');
test(maxProductDifference([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10000, 10000, 10000, 10000, 10000]), 99999975, 'Test 27');
test(maxProductDifference([10000,9999,1,2]), 99989998, 'Test 28');
test(maxProductDifference([10000,9999,9998,9997,9996,9995,9994,9993,9992,9991]), 159928, 'Test 29');
test(maxProductDifference([8000,7000,6000,5000,4000,3000,2000,1000,100,200,300,400,500,600,700,800]), 55980000, 'Test 30');
test(maxProductDifference([2, 2, 3, 3, 5, 5, 7, 7, 11, 11, 13, 13, 17, 17, 19, 19]), 357, 'Test 31');
test(maxProductDifference([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 10, 20, 30, 40, 50]), 899800, 'Test 32');
test(maxProductDifference([5000, 5000, 5000, 5000, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 24999999, 'Test 33');
test(maxProductDifference([1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009]), 16072, 'Test 34');
test(maxProductDifference([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 99, 'Test 35');
test(maxProductDifference([10000, 10000, 10000, 10000, 1, 1, 1, 1]), 99999999, 'Test 36');
test(maxProductDifference([5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000]), 0, 'Test 37');
test(maxProductDifference([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]), 2015, 'Test 38');
test(maxProductDifference([3333,6666,4444,7777,2222,8888,1111,9999]), 86402470, 'Test 39');
test(maxProductDifference([5000, 5000, 4999, 4999, 4998, 4998, 4997, 4997, 4996, 4996]), 39984, 'Test 40');
test(maxProductDifference([8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 500, 100, 50, 10, 5, 1, 2, 3, 4, 6, 7, 8]), 55999998, 'Test 41');
test(maxProductDifference([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86]), 2418, 'Test 42');
test(maxProductDifference([1,10000,2,9999,3,9998,4,9997,5,9996,6,9995,7,9994,8,9993,9,9992,10,9991]), 99989998, 'Test 43');
test(maxProductDifference([2,3,6,7,8,10,5,4,1,9]), 88, 'Test 44');
test(maxProductDifference([10000, 10000, 10000, 1, 1, 1, 9999, 9999, 9999, 2]), 99999999, 'Test 45');
test(maxProductDifference([9999, 9998, 9997, 9996, 2, 3, 4, 5]), 99969996, 'Test 46');
test(maxProductDifference([100,101,102,103,104,105,106,107,108,109]), 1672, 'Test 47');
test(maxProductDifference([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 378, 'Test 48');
test(maxProductDifference([3,9,10,2,18,15,11,1,17,7]), 304, 'Test 49');
test(maxProductDifference([1, 10000, 2, 9999, 3, 9998, 4, 9997, 5, 9996, 6, 9995, 7, 9994, 8]), 99989998, 'Test 50');
test(maxProductDifference([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1, 2, 3, 4]), 899998, 'Test 51');
test(maxProductDifference([1, 1, 1, 1, 10000, 10000, 10000, 10000, 9999, 9999, 9999, 9999]), 99999999, 'Test 52');
test(maxProductDifference([10000, 9999, 9998, 9997, 1, 2, 3, 4, 5, 6]), 99989998, 'Test 53');
test(maxProductDifference([1, 10000, 2, 9999, 3, 9998, 4, 9997]), 99989998, 'Test 54');
test(maxProductDifference([5000, 5001, 4999, 4998, 5002, 5003]), 40004, 'Test 55');
test(maxProductDifference([1,10,100,1000,10000,1,10,100,1000,10000]), 99999999, 'Test 56');
test(maxProductDifference([5000, 5001, 5002, 5003, 5004, 1, 2, 3, 4, 5]), 25035010, 'Test 57');
test(maxProductDifference([10000, 9999, 9998, 9997, 1, 2, 3, 4]), 99989998, 'Test 58');
test(maxProductDifference([3, 3, 3, 3, 3, 3, 3, 3, 10000, 10000]), 99999991, 'Test 59');
test(maxProductDifference([1, 10000, 1, 10000, 1, 10000, 1, 10000]), 99999999, 'Test 60');
test(maxProductDifference([10,20,30,40,50,60,70,80,90,100]), 8800, 'Test 61');
test(maxProductDifference([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500]), 2080000, 'Test 62');
test(maxProductDifference([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]), 8627, 'Test 63');
test(maxProductDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 208, 'Test 64');
test(maxProductDifference([1500,1400,1300,1200,1100,1000,900,800,700,600,500,400,300,200,100]), 2080000, 'Test 65');
test(maxProductDifference([1, 10000, 2, 9999, 3, 9998, 4, 9997, 5, 9996]), 99989998, 'Test 66');
test(maxProductDifference([1000, 900, 800, 700, 600, 500, 400, 300, 200, 100]), 880000, 'Test 67');
test(maxProductDifference([1,100,2,99,3,98,4,97]), 9898, 'Test 68');
test(maxProductDifference([1, 2, 3, 4, 5, 10000, 9999, 9998, 9997, 9996]), 99989998, 'Test 69');
test(maxProductDifference([1, 1, 1, 1, 10000, 10000, 10000, 10000, 10000, 10000]), 99999999, 'Test 70');
test(maxProductDifference([2500, 2501, 2502, 2503, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 6262504, 'Test 71');
test(maxProductDifference([5000,4000,3000,2000,1000,500,250,125,62,31,15,7,3,1]), 19999997, 'Test 72');
test(maxProductDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 378, 'Test 73');
test(maxProductDifference([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 360, 'Test 74');
test(maxProductDifference([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,10000,9999]), 99989999, 'Test 75');
test(maxProductDifference([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1, 2, 3, 4, 5]), 899998, 'Test 76');
test(maxProductDifference([10000,9999,9998,9997,9996,9995,9994,9993,9992,9991,9990,9989,9988,9987,9986,9985]), 279790, 'Test 77');
test(maxProductDifference([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3]), 8, 'Test 78');
test(maxProductDifference([9999,1,9998,2,9997,3,9996,4,9995,5,9994,6,9993,7,9992,8,9991,9,9990,10]), 99970000, 'Test 79');
test(maxProductDifference([5000,5001,5002,5003,5004,5005,5006,5007,5008,5009,5010,5011,5012,5013,5014,5015]), 140210, 'Test 80');
test(maxProductDifference([10000,1,9999,2,9998,3,9997,4,9996,5]), 99989998, 'Test 81');
test(maxProductDifference([1,2,3,4,5,6,7,8,9,10,10000,9999,9998,9997,9996,9995,9994,9993,9992,9991]), 99989998, 'Test 82');
test(maxProductDifference([10000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 189998, 'Test 83');
test(maxProductDifference([5000, 5000, 5000, 5000, 5000, 1, 2, 3, 4, 5]), 24999998, 'Test 84');
test(maxProductDifference([3000,6000,9000,12000,15000,18000,21000,24000,27000,30000,33000,36000,39000,42000,45000,48000,51000,54000,57000,60000,1,2,3,4,5]), 3419999998, 'Test 85');
test(maxProductDifference([9999, 9998, 9997, 9996, 9995, 9994, 9993, 9992, 9991, 9990, 1, 2, 3, 4, 5]), 99970000, 'Test 86');
test(maxProductDifference([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 8800, 'Test 87');
test(maxProductDifference([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10000]), 49975, 'Test 88');
test(maxProductDifference([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90]), 1810, 'Test 89');
test(maxProductDifference([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]), 2485, 'Test 90');
test(maxProductDifference([9999, 9998, 9997, 9996, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 99970000, 'Test 91');
test(maxProductDifference([2500,5000,7500,10000,12500,15000,17500,20000,22500,25000,1,2,3,4,5,6,7,8,9,10]), 562499998, 'Test 92');
test(maxProductDifference([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 89, 'Test 93');
test(maxProductDifference([2,3,5,7,11,13,17,19,23,29]), 661, 'Test 94');
test(maxProductDifference([5000, 5001, 5002, 5003, 1, 2, 3, 4]), 25025004, 'Test 95');
test(maxProductDifference([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 20800, 'Test 96');
test(maxProductDifference([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]), 5200, 'Test 97');
test(maxProductDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10000]), 89998, 'Test 98');

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
