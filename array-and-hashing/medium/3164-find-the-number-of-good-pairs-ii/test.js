// Test: 3164. Find The Number Of Good Pairs Ii
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfPairs } = require("./solution");

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

console.log("\n3164. Find The Number Of Good Pairs Ii\n");

test(numberOfPairs([7,14,21], [1,7,14], 7), 3, 'Test 1');
test(numberOfPairs([1,3,4], [1,3,4], 1), 5, 'Test 2');
test(numberOfPairs([100,200,300], [10,20,30], 10), 5, 'Test 3');
test(numberOfPairs([5,10,15], [1,5,10], 1), 7, 'Test 4');
test(numberOfPairs([7,14,28], [1,2,4], 7), 6, 'Test 5');
test(numberOfPairs([1,2,4,12], [2,4], 3), 2, 'Test 6');
test(numberOfPairs([100,200,300], [5,10,15], 5), 7, 'Test 7');
test(numberOfPairs([5,10,15,20], [1,2,5], 2), 5, 'Test 8');
test(numberOfPairs([999999,999998,999997,999996,999995], [1,2,3,4,5], 100), 0, 'Test 9');
test(numberOfPairs([7, 14, 21, 28, 35], [1, 2, 3, 4, 5, 6, 7], 7), 10, 'Test 10');
test(numberOfPairs([7, 14, 21, 28, 35], [1, 7, 14, 21, 28, 35], 1), 15, 'Test 11');
test(numberOfPairs([6,12,18,24,30], [2,3,6], 2), 9, 'Test 12');
test(numberOfPairs([999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991, 999990], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100), 0, 'Test 13');
test(numberOfPairs([1000,2000,3000,4000,5000], [5,10,15,20,25,30], 10), 22, 'Test 14');
test(numberOfPairs([12,24,36,48,60], [1,2,3,4,5,6], 2), 23, 'Test 15');
test(numberOfPairs([100000, 200000, 300000, 400000], [100, 200, 300, 400], 10), 13, 'Test 16');
test(numberOfPairs([120, 180, 240, 300], [5, 10, 15, 20, 25, 30], 6), 13, 'Test 17');
test(numberOfPairs([72,144,216,288,360], [8,12,24,36], 3), 16, 'Test 18');
test(numberOfPairs([810, 1620, 2430, 3240, 4050, 4860, 5490, 6120, 6840, 7560], [5, 10, 15, 18, 20, 25, 30, 45, 60, 90], 5), 16, 'Test 19');
test(numberOfPairs([500000, 750000, 1000000, 1250000, 1500000], [100, 250, 500, 1250, 2500], 20), 25, 'Test 20');
test(numberOfPairs([987654, 876543, 765432, 654321, 543210], [98765, 87654, 76543, 65432, 54321], 10), 1, 'Test 21');
test(numberOfPairs([210, 330, 450, 570], [3, 6, 9, 12], 5), 9, 'Test 22');
test(numberOfPairs([101,202,303,404,505], [1,101,202,303,404], 1), 14, 'Test 23');
test(numberOfPairs([333, 666, 999, 1332, 1665], [3, 6, 9, 12, 15], 3), 10, 'Test 24');
test(numberOfPairs([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1], 1), 50, 'Test 25');
test(numberOfPairs([999999, 999998, 999997], [999, 998, 997], 1), 1, 'Test 26');
test(numberOfPairs([1, 1, 1, 1, 1], [1, 1, 1, 1, 1], 1), 25, 'Test 27');
test(numberOfPairs([987654321, 987654322, 987654323, 987654324], [987, 988, 989, 990], 987), 0, 'Test 28');
test(numberOfPairs([999999,999998,999997,999996,999995], [999,998,997,996,995], 1000), 0, 'Test 29');
test(numberOfPairs([104729, 209458, 314187, 418916, 523645, 628374, 733103, 837832, 942561], [104729, 209458, 314187], 1), 16, 'Test 30');
test(numberOfPairs([120, 150, 180, 210], [3, 5, 6, 7], 4), 5, 'Test 31');
test(numberOfPairs([1000000,2000000,3000000,4000000,5000000], [1000,2000,3000,4000,5000], 500), 14, 'Test 32');
test(numberOfPairs([333,666,999,1332,1665], [3,9,27,81], 3), 6, 'Test 33');
test(numberOfPairs([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 100, 'Test 34');
test(numberOfPairs([999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991, 999990], [999, 998, 997, 996, 995, 994, 993, 992, 991, 990], 10), 0, 'Test 35');
test(numberOfPairs([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 55, 'Test 36');
test(numberOfPairs([1000000, 999999, 999998], [1, 2, 3, 4, 5], 1000), 4, 'Test 37');
test(numberOfPairs([1000000, 2000000, 3000000], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1000), 20, 'Test 38');
test(numberOfPairs([500,1000,1500,2000,2500], [5,10,25], 4), 12, 'Test 39');
test(numberOfPairs([1000000, 1000000, 1000000, 1000000], [1, 2, 4, 5], 1000), 16, 'Test 40');
test(numberOfPairs([100,200,300,400,500], [10,20,30,40,50], 5), 14, 'Test 41');
test(numberOfPairs([7, 14, 21, 28, 35, 42, 49, 56, 63, 70], [1, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70], 7), 11, 'Test 42');
test(numberOfPairs([1000000] * 100000, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1000), Error: Solution.numberOfPairs[] missing 1 required positional argument: 'nums1', 'Test 43');
test(numberOfPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [1] * 100000, 1), Error: Solution.numberOfPairs[] missing 1 required positional argument: 'nums2', 'Test 44');
test(numberOfPairs([500, 1000, 1500, 2000, 2500], [25, 50, 75], 2), 11, 'Test 45');
test(numberOfPairs([987654, 321456, 789123, 123456, 456789], [123, 321, 654, 456, 789], 23), 0, 'Test 46');
test(numberOfPairs([111111,222222,333333,444444,555555], [11,22,33,44,55], 11), 0, 'Test 47');
test(numberOfPairs([555555, 666666, 777777, 888888, 999999], [5, 6, 7, 8, 9, 55, 66, 77, 88, 99], 111), 18, 'Test 48');
test(numberOfPairs([300000, 300000, 300000, 300000, 300000], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 15000), 25, 'Test 49');
test(numberOfPairs([101, 202, 303, 404, 505, 606, 707, 808, 909], [1, 10, 100, 1000], 1), 9, 'Test 50');
test(numberOfPairs([999999, 888888, 777777, 666666, 555555], [111111, 222222, 333333, 444444, 555555], 111), 0, 'Test 51');
test(numberOfPairs([1024, 2048, 4096, 8192], [32, 64, 128], 16), 11, 'Test 52');
test(numberOfPairs([123456, 234567, 345678, 456789], [123, 234, 345, 456], 7), 0, 'Test 53');
test(numberOfPairs([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 100, 'Test 54');
test(numberOfPairs([999999, 888888, 777777, 666666], [333333, 222222, 111111], 3), 4, 'Test 55');
test(numberOfPairs([1000, 2000, 3000, 4000, 5000], [10, 20, 30, 40, 50], 10), 18, 'Test 56');
test(numberOfPairs([1000000,500000,250000,125000,62500], [125,250,500], 2), 14, 'Test 57');
test(numberOfPairs([210, 420, 630, 840, 1050], [1, 2, 3, 5, 6, 7, 10, 14, 15, 21, 30, 35, 42, 70, 105, 210], 2), 56, 'Test 58');
test(numberOfPairs([100000, 200000, 300000, 400000, 500000], [50000, 100000, 150000, 200000, 250000], 1000), 0, 'Test 59');
test(numberOfPairs([1,1,1,1,1], [1,1,1,1,1], 1), 25, 'Test 60');
test(numberOfPairs([999999], [1,3,9,27,81], 10000), 0, 'Test 61');
test(numberOfPairs([123456,234567,345678,456789,567890], [123,456,789], 12), 0, 'Test 62');
test(numberOfPairs([12345, 67890, 11111, 22222, 33333], [3, 9, 27, 81, 243], 3), 0, 'Test 63');
test(numberOfPairs([1000, 2000, 3000, 4000, 5000], [1, 2, 5, 10, 20], 25), 25, 'Test 64');
test(numberOfPairs([101, 202, 303, 404, 505], [1, 2, 3, 4, 5, 6], 101), 10, 'Test 65');
test(numberOfPairs([1000000, 1000000, 1000000], [1, 10, 100, 1000], 100), 12, 'Test 66');
test(numberOfPairs([500000, 600000, 700000, 800000], [50000, 60000, 70000, 80000], 10), 4, 'Test 67');
test(numberOfPairs([987654, 456789, 123456, 654321], [6, 12, 18, 24, 30, 36, 42], 7), 0, 'Test 68');
test(numberOfPairs([987654, 987654, 987654, 987654, 987654], [123456, 246912, 370368, 493824, 617280], 61728), 0, 'Test 69');
test(numberOfPairs([97,194,291,388,485], [1,97,194], 1), 12, 'Test 70');
test(numberOfPairs([77, 143, 209, 275], [7, 11, 13, 17], 1), 6, 'Test 71');
test(numberOfPairs([1000000, 1000000, 1000000, 1000000, 1000000], [1, 1, 1, 1, 1], 1000000), 25, 'Test 72');
test(numberOfPairs([555555, 444444, 333333, 222222, 111111], [111111, 222222, 333333, 444444, 555555], 11111), 0, 'Test 73');
test(numberOfPairs([21,42,63,84,105], [3,7,21], 1), 15, 'Test 74');
test(numberOfPairs([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], [1, 2, 4, 5, 10, 20, 25, 50, 100], 1), 90, 'Test 75');
test(numberOfPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5], 1), 22, 'Test 76');
test(numberOfPairs([7, 14, 21, 28, 35, 42, 49], [1, 2, 3, 4, 5, 6, 7], 7), 16, 'Test 77');
test(numberOfPairs([1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812, 3906, 1953], [5, 10, 15, 20, 25], 50), 21, 'Test 78');
test(numberOfPairs([1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100000), 40, 'Test 79');
test(numberOfPairs([123456, 234567, 345678, 456789], [123, 234, 345, 456], 3), 0, 'Test 80');
test(numberOfPairs([123456, 234567, 345678, 456789], [123, 234, 345], 6), 0, 'Test 81');
test(numberOfPairs([12, 24, 36, 48, 60], [1, 2, 3, 4, 5, 6], 2), 23, 'Test 82');
test(numberOfPairs([123456, 654321, 111111, 222222], [123, 321, 111, 222, 444], 3), 0, 'Test 83');
test(numberOfPairs([1024, 2048, 4096, 8192, 16384], [16, 32, 64, 128, 256], 32), 19, 'Test 84');
test(numberOfPairs([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 100), 67, 'Test 85');
test(numberOfPairs([100000, 200000, 300000, 400000], [1, 2, 3, 4, 5], 100), 17, 'Test 86');
test(numberOfPairs([1000000, 900000, 800000, 700000], [100, 200, 300, 400], 25), 13, 'Test 87');
test(numberOfPairs([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 40, 'Test 88');
test(numberOfPairs([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], [1, 2, 3, 4, 5, 6, 9, 10, 12, 15, 18, 30], 4), 6, 'Test 89');
test(numberOfPairs([123456, 234567, 345678, 456789, 567890], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 123), 0, 'Test 90');
test(numberOfPairs([5, 10, 15, 20, 25, 30], [1, 5, 10, 15, 20, 25, 30], 5), 7, 'Test 91');
test(numberOfPairs([1,2,3,4,5,6,7,8,9,10], [1,3,5,7,9], 1), 17, 'Test 92');
test(numberOfPairs([111111, 222222, 333333, 444444, 555555], [111, 222, 333, 444, 555], 111), 0, 'Test 93');
test(numberOfPairs([100000, 200000, 300000, 400000, 500000, 600000], [100, 200, 300, 400, 500, 600], 1000), 14, 'Test 94');
test(numberOfPairs([777777, 888888, 999999], [7, 8, 9, 77, 88, 99, 777, 888, 999], 11), 10, 'Test 95');

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
