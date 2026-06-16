// Test: 1862. Sum Of Floored Pairs
// 60 test cases from LeetCodeDataset
// Run: node test.js

const { sumOfFlooredPairs } = require("./solution");

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

console.log("\n1862. Sum Of Floored Pairs\n");

test(sumOfFlooredPairs([7,7,7,7,7,7,7]), 49, 'Test 1');
test(sumOfFlooredPairs([1,1,1,1,1,1,1,1,1,1]), 100, 'Test 2');
test(sumOfFlooredPairs([2,5,9]), 10, 'Test 3');
test(sumOfFlooredPairs([100000, 1, 100000]), 200005, 'Test 4');
test(sumOfFlooredPairs([100000, 50000, 25000, 12500, 6250]), 57, 'Test 5');
test(sumOfFlooredPairs([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 400, 'Test 6');
test(sumOfFlooredPairs([10,20,30,40,50]), 27, 'Test 7');
test(sumOfFlooredPairs([1,3,5,7,9,11,13,15,17,19]), 178, 'Test 8');
test(sumOfFlooredPairs([1,2,3,4,5]), 27, 'Test 9');
test(sumOfFlooredPairs([100000,100000,100000]), 9, 'Test 10');
test(sumOfFlooredPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), 65519, 'Test 11');
test(sumOfFlooredPairs([99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991, 99990, 99989, 99988, 99987, 99986, 99985, 99984, 99983, 99982, 99981, 99980]), 210, 'Test 12');
test(sumOfFlooredPairs([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 600, 'Test 13');
test(sumOfFlooredPairs([100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000]), 127, 'Test 14');
test(sumOfFlooredPairs([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 3249, 'Test 15');
test(sumOfFlooredPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576]), 4194281, 'Test 16');
test(sumOfFlooredPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 1492, 'Test 17');
test(sumOfFlooredPairs([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 127, 'Test 18');
test(sumOfFlooredPairs([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20]), 2400, 'Test 19');
test(sumOfFlooredPairs([100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000]), 127, 'Test 20');
test(sumOfFlooredPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99]), 6268, 'Test 21');
test(sumOfFlooredPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 834, 'Test 22');
test(sumOfFlooredPairs([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288]), 2097130, 'Test 23');
test(sumOfFlooredPairs([15, 15, 15, 30, 30, 45, 45, 60, 60, 75, 75, 90, 90, 105, 105]), 287, 'Test 24');
test(sumOfFlooredPairs([99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991, 99990]), 55, 'Test 25');
test(sumOfFlooredPairs([50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000]), 100, 'Test 26');
test(sumOfFlooredPairs([123, 456, 789, 101112, 131415, 161718, 192021, 222324, 252627, 282930]), 15615, 'Test 27');
test(sumOfFlooredPairs([1, 3, 6, 10, 15, 21, 28, 36, 45, 55]), 371, 'Test 28');
test(sumOfFlooredPairs([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 508, 'Test 29');
test(sumOfFlooredPairs([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000]), 600, 'Test 30');
test(sumOfFlooredPairs([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45]), 314, 'Test 31');
test(sumOfFlooredPairs([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000, 24000, 25000]), 991, 'Test 32');
test(sumOfFlooredPairs([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]), 508, 'Test 33');
test(sumOfFlooredPairs([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]), 1650, 'Test 34');
test(sumOfFlooredPairs([1, 10, 100, 1000, 10000, 100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000]), 623578, 'Test 35');
test(sumOfFlooredPairs([1, 10, 100, 1000, 10000, 100000]), 123456, 'Test 36');
test(sumOfFlooredPairs([10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000]), 127, 'Test 37');
test(sumOfFlooredPairs([100000, 100000, 50000, 50000, 25000, 25000, 12500, 12500, 6250, 6250]), 228, 'Test 38');
test(sumOfFlooredPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 127, 'Test 39');
test(sumOfFlooredPairs([50000, 40000, 30000, 20000, 10000, 5000, 2500, 1250, 625, 312, 156, 78, 39, 19, 9, 4, 2, 1]), 314353, 'Test 40');
test(sumOfFlooredPairs([5, 5, 10, 10, 15, 15, 20, 20, 25, 25, 30, 30, 35, 35, 40, 40, 45, 45, 50, 50]), 508, 'Test 41');
test(sumOfFlooredPairs([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7]), 513, 'Test 42');
test(sumOfFlooredPairs([50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000]), 400, 'Test 43');
test(sumOfFlooredPairs([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 2036, 'Test 44');
test(sumOfFlooredPairs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 127, 'Test 45');
test(sumOfFlooredPairs([1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190, 210]), 2806, 'Test 46');
test(sumOfFlooredPairs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 600, 'Test 47');
test(sumOfFlooredPairs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 100000, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 313945, 'Test 48');
test(sumOfFlooredPairs([150000, 140000, 130000, 120000, 110000, 100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000]), 314, 'Test 49');
test(sumOfFlooredPairs([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]), 949, 'Test 50');
test(sumOfFlooredPairs([50000, 25000, 12500, 6250, 3125, 1562, 781, 390, 195, 97, 48, 24, 12, 6, 3, 1]), 166591, 'Test 51');
test(sumOfFlooredPairs([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 6400, 'Test 52');
test(sumOfFlooredPairs([15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225]), 314, 'Test 53');
test(sumOfFlooredPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]), 2841, 'Test 54');
test(sumOfFlooredPairs([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]), 65519, 'Test 55');
test(sumOfFlooredPairs([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 1024, 'Test 56');
test(sumOfFlooredPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 600, 'Test 57');
test(sumOfFlooredPairs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 314, 'Test 58');
test(sumOfFlooredPairs([3, 3, 3, 5, 5, 5, 7, 7, 7, 11, 11, 11, 13, 13, 13, 17, 17, 17, 19, 19]), 412, 'Test 59');
test(sumOfFlooredPairs([99999, 88888, 77777, 66666, 55555, 44444, 33333, 22222, 11111, 1]), 500096, 'Test 60');

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
