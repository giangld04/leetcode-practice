// Test: 2442. Count Number Of Distinct Integers After Reverse Operations
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { countDistinctIntegers } = require("./solution");

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

console.log("\n2442. Count Number Of Distinct Integers After Reverse Operations\n");

test(countDistinctIntegers([2,2,2]), 1, 'Test 1');
test(countDistinctIntegers([123,321,111,222]), 4, 'Test 2');
test(countDistinctIntegers([100,200,300,400]), 8, 'Test 3');
test(countDistinctIntegers([1,2,3,4,5,6,7,8,9]), 9, 'Test 4');
test(countDistinctIntegers([9,99,999,9999]), 4, 'Test 5');
test(countDistinctIntegers([987,654,321]), 6, 'Test 6');
test(countDistinctIntegers([111,222,333,444,555]), 5, 'Test 7');
test(countDistinctIntegers([123,321,456,654]), 4, 'Test 8');
test(countDistinctIntegers([100,200,300]), 6, 'Test 9');
test(countDistinctIntegers([120,210,130,310]), 8, 'Test 10');
test(countDistinctIntegers([111,222,333,444]), 4, 'Test 11');
test(countDistinctIntegers([1,13,10,12,31]), 6, 'Test 12');
test(countDistinctIntegers([123,321,111,456,654]), 5, 'Test 13');
test(countDistinctIntegers([123456, 654321, 111222, 222111, 101010, 100100, 200200, 300300, 400400]), 14, 'Test 14');
test(countDistinctIntegers([123456, 654321, 112233, 332211, 445566, 665544, 778899, 998877]), 8, 'Test 15');
test(countDistinctIntegers([101, 202, 303, 404, 505, 606, 707, 808, 909, 1001, 2002, 3003]), 12, 'Test 16');
test(countDistinctIntegers([10001,20002,30003,40004,50005,111111,222222,333333,444444,555555]), 10, 'Test 17');
test(countDistinctIntegers([999, 998, 997, 996, 995, 994]), 11, 'Test 18');
test(countDistinctIntegers([987654,456789,876543,345678,765432,234567]), 6, 'Test 19');
test(countDistinctIntegers([987654, 456789, 123, 321, 111, 222, 333]), 7, 'Test 20');
test(countDistinctIntegers([1234321, 2345432, 3456543, 4567654, 5678765]), 5, 'Test 21');
test(countDistinctIntegers([111111, 222222, 333333, 444444, 555555, 666666, 777777, 888888, 999999]), 9, 'Test 22');
test(countDistinctIntegers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 27, 'Test 23');
test(countDistinctIntegers([999999,888888,777777,666666,555555,444444,333333,222222,111111]), 9, 'Test 24');
test(countDistinctIntegers([101010,202020,303030,404040,505050]), 10, 'Test 25');
test(countDistinctIntegers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90]), 18, 'Test 26');
test(countDistinctIntegers([100001, 200002, 300003, 400004, 500005, 600006, 700007, 800008, 900009]), 9, 'Test 27');
test(countDistinctIntegers([123, 321, 456, 654, 789, 987, 111, 222, 333, 444, 555, 666]), 12, 'Test 28');
test(countDistinctIntegers([123,321,120,210,102,201,213,312,132,321]), 12, 'Test 29');
test(countDistinctIntegers([987654321, 123456789, 111111111, 222222222, 333333333, 444444444, 555555555, 666666666, 777777777, 888888888, 999999999]), 11, 'Test 30');
test(countDistinctIntegers([1001, 2002, 3003, 4004, 5005, 6006, 7007]), 7, 'Test 31');
test(countDistinctIntegers([987654, 876543, 765432, 654321, 543210]), 10, 'Test 32');
test(countDistinctIntegers([1001,2002,3003,4004,5005]), 5, 'Test 33');
test(countDistinctIntegers([1, 12, 123, 1234, 12345]), 9, 'Test 34');
test(countDistinctIntegers([10,100,1000,10000,100000,1000000]), 7, 'Test 35');
test(countDistinctIntegers([123,456,789,101,202,303,404,505,606,707,808,909,111,222,333,444,555,666,777,888,999]), 24, 'Test 36');
test(countDistinctIntegers([1001,2002,3003,4004,5005,6006,7007,8008,9009]), 9, 'Test 37');
test(countDistinctIntegers([999999, 111111, 222222, 333333, 444444, 555555, 666666, 777777, 888888]), 9, 'Test 38');
test(countDistinctIntegers([123, 231, 312, 132, 213, 321]), 6, 'Test 39');
test(countDistinctIntegers([123, 321, 456, 654, 789, 987, 101, 202, 303]), 9, 'Test 40');
test(countDistinctIntegers([123, 321, 120, 210, 102, 201, 132, 231, 312, 321, 123, 213]), 12, 'Test 41');
test(countDistinctIntegers([100000, 20000, 3000, 400, 50]), 10, 'Test 42');
test(countDistinctIntegers([999999, 888888, 777777, 666666, 555555, 444444, 333333, 222222, 111111]), 9, 'Test 43');
test(countDistinctIntegers([100, 200, 300, 400, 500, 600, 700, 800, 900]), 18, 'Test 44');
test(countDistinctIntegers([987654, 876543, 765432, 654321, 543210, 432109, 321098]), 14, 'Test 45');
test(countDistinctIntegers([123456,234567,345678,456789,567890]), 10, 'Test 46');
test(countDistinctIntegers([12345, 54321, 11223, 32211, 11111, 22222, 33333, 44444, 55555, 66666, 77777, 88888, 99999]), 13, 'Test 47');
test(countDistinctIntegers([987654, 876543, 765432, 654321, 543210, 432109, 321098, 210987, 109876]), 18, 'Test 48');
test(countDistinctIntegers([123, 321, 132, 213, 231, 312, 456, 654, 465, 546, 564, 645]), 12, 'Test 49');
test(countDistinctIntegers([987654, 456789, 111222, 222111, 333444]), 6, 'Test 50');
test(countDistinctIntegers([12, 21, 13, 31, 14, 41, 15, 51, 16, 61, 17, 71, 18, 81, 19, 91]), 16, 'Test 51');
test(countDistinctIntegers([100200, 200100, 101010, 110110, 202020, 220220, 303030, 330330, 404040]), 18, 'Test 52');
test(countDistinctIntegers([123, 321, 213, 132, 312, 231]), 6, 'Test 53');
test(countDistinctIntegers([999, 888, 777, 666, 555, 444, 333, 222, 111, 123, 321, 132, 213, 231, 312]), 15, 'Test 54');
test(countDistinctIntegers([12345, 54321, 11111, 22222, 33333]), 5, 'Test 55');
test(countDistinctIntegers([101, 110, 202, 220, 303, 330]), 9, 'Test 56');
test(countDistinctIntegers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 28, 'Test 57');
test(countDistinctIntegers([123456, 654321, 111111, 222222, 333333]), 5, 'Test 58');
test(countDistinctIntegers([123321, 234432, 345543, 456654, 567765]), 5, 'Test 59');
test(countDistinctIntegers([1001, 2002, 3003, 4004, 5005]), 5, 'Test 60');
test(countDistinctIntegers([123456,654321,111222,222111,1001]), 5, 'Test 61');
test(countDistinctIntegers([123456, 654321, 112233, 332211, 987654]), 6, 'Test 62');
test(countDistinctIntegers([11,22,33,44,55,66,77,88,99,101,202,303,404,505,606,707,808,909,110,210,310,410,510]), 27, 'Test 63');
test(countDistinctIntegers([1234, 4321, 1122, 2211, 1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999]), 13, 'Test 64');
test(countDistinctIntegers([100000, 200000, 300000, 400000, 500000]), 10, 'Test 65');
test(countDistinctIntegers([100, 101, 102, 103, 104, 105]), 11, 'Test 66');
test(countDistinctIntegers([10101,20202,30303,40404,50505,11111,22222,33333,44444,55555]), 10, 'Test 67');
test(countDistinctIntegers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 68');
test(countDistinctIntegers([9, 99, 999, 9999, 99999, 999999]), 6, 'Test 69');
test(countDistinctIntegers([987654, 456789, 876543, 345678]), 4, 'Test 70');
test(countDistinctIntegers([12345,54321,11122,22111,33344,44333,55556,65555,76543,34567]), 10, 'Test 71');
test(countDistinctIntegers([10, 100, 1000, 10000, 100000, 1000000]), 7, 'Test 72');
test(countDistinctIntegers([123456789, 987654321, 100000001, 110000011, 120000021, 130000031]), 6, 'Test 73');
test(countDistinctIntegers([1000000001, 1000000010, 1000000100, 1000001000, 1000010000, 1000100000, 1001000000, 1010000000, 1100000000]), 17, 'Test 74');
test(countDistinctIntegers([100000, 100001, 100010, 100100, 101000]), 9, 'Test 75');
test(countDistinctIntegers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 28, 'Test 76');
test(countDistinctIntegers([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000]), 21, 'Test 77');
test(countDistinctIntegers([123456789, 987654321, 987654312, 123456798, 876543219, 987654321, 123456789, 876543210, 109876543]), 12, 'Test 78');
test(countDistinctIntegers([111111,222222,333333,444444,555555]), 5, 'Test 79');
test(countDistinctIntegers([1234567, 7654321, 1111111, 2222222, 3333333]), 5, 'Test 80');
test(countDistinctIntegers([999999, 888888, 777777, 666666, 555555]), 5, 'Test 81');
test(countDistinctIntegers([111222, 222333, 333444, 444555, 555666]), 10, 'Test 82');
test(countDistinctIntegers([123, 321, 213, 132, 312, 231, 456, 654, 546, 465, 645, 564]), 12, 'Test 83');
test(countDistinctIntegers([1001, 2002, 3003, 4004, 5005, 6006, 7007, 8008, 9009]), 9, 'Test 84');
test(countDistinctIntegers([999, 888, 777, 666, 555, 444, 333, 222, 111, 1001, 2002, 3003, 4004, 5005]), 14, 'Test 85');
test(countDistinctIntegers([987654,876543,765432,654321,543210]), 10, 'Test 86');
test(countDistinctIntegers([123456, 654321, 111222, 222111]), 4, 'Test 87');
test(countDistinctIntegers([100021, 123456, 789012, 321654, 210987]), 8, 'Test 88');
test(countDistinctIntegers([123456, 654321, 111111, 222222, 333333, 444444]), 6, 'Test 89');
test(countDistinctIntegers([987654, 456789, 987653, 356789, 987652, 256789, 987651, 156789, 987643]), 10, 'Test 90');
test(countDistinctIntegers([1000, 2000, 3000, 4000, 5000]), 10, 'Test 91');
test(countDistinctIntegers([101010, 202020, 303030, 404040, 505050]), 10, 'Test 92');
test(countDistinctIntegers([100001, 200002, 300003, 400004, 500005]), 5, 'Test 93');
test(countDistinctIntegers([123456, 654321, 112233, 332211, 445566]), 6, 'Test 94');
test(countDistinctIntegers([123456, 654321, 111222, 222111, 101010]), 6, 'Test 95');
test(countDistinctIntegers([12345, 54321, 11122, 22111, 33344, 44333, 55566, 66555, 77788, 88777]), 10, 'Test 96');
test(countDistinctIntegers([100000,200000,300000,400000,500000]), 10, 'Test 97');
test(countDistinctIntegers([10001, 10010, 10100, 11000, 10001]), 7, 'Test 98');
test(countDistinctIntegers([12, 21, 101, 110, 1001, 1010, 1100, 2002, 2020, 2200]), 13, 'Test 99');
test(countDistinctIntegers([100,200,300,400,500,101,202,303,404,505]), 15, 'Test 100');
test(countDistinctIntegers([111111, 222222, 333333, 444444, 555555]), 5, 'Test 101');
test(countDistinctIntegers([1234, 4321, 1122, 2211, 1331, 1133, 2442, 2244, 4224, 4422]), 11, 'Test 102');
test(countDistinctIntegers([9, 98, 987, 9876, 98765]), 9, 'Test 103');

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
