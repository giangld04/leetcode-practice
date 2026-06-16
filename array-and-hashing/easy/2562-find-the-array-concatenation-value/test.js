// Test: 2562. Find The Array Concatenation Value
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { findTheArrayConcVal } = require("./solution");

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

console.log("\n2562. Find The Array Concatenation Value\n");

test(findTheArrayConcVal([5,14,13,8,12]), 673, 'Test 1');
test(findTheArrayConcVal([1,1,1,1]), 22, 'Test 2');
test(findTheArrayConcVal([111,222,333,444,555]), 334332, 'Test 3');
test(findTheArrayConcVal([9,8,7,6,5,4,3,2,1]), 315, 'Test 4');
test(findTheArrayConcVal([1,2,3,4,5,6,7,8,9,10]), 280, 'Test 5');
test(findTheArrayConcVal([9]), 9, 'Test 6');
test(findTheArrayConcVal([1]), 1, 'Test 7');
test(findTheArrayConcVal([56,78,90,12,34]), 13536, 'Test 8');
test(findTheArrayConcVal([7,52,2,4]), 596, 'Test 9');
test(findTheArrayConcVal([9999]), 9999, 'Test 10');
test(findTheArrayConcVal([1234,5678,9101]), 12354779, 'Test 11');
test(findTheArrayConcVal([1,2,3,4,5]), 42, 'Test 12');
test(findTheArrayConcVal([123,456,789]), 124245, 'Test 13');
test(findTheArrayConcVal([9,99,999,9999]), 199998, 'Test 14');
test(findTheArrayConcVal([1,2,3,4,5,6]), 75, 'Test 15');
test(findTheArrayConcVal([100,200,300,400,500]), 301200, 'Test 16');
test(findTheArrayConcVal([9876,5432,1234]), 98766666, 'Test 17');
test(findTheArrayConcVal([1000,2000,3000,4000,5000]), 30012000, 'Test 18');
test(findTheArrayConcVal([10,20]), 1020, 'Test 19');
test(findTheArrayConcVal([111,222,333]), 111555, 'Test 20');
test(findTheArrayConcVal([123,456,789,101,112]), 580002, 'Test 21');
test(findTheArrayConcVal([1,2,3]), 15, 'Test 22');
test(findTheArrayConcVal([10000]), 10000, 'Test 23');
test(findTheArrayConcVal([10000,9999,9998,9997,9996]), 200019991, 'Test 24');
test(findTheArrayConcVal([123,456,789,101]), 579890, 'Test 25');
test(findTheArrayConcVal([10,20,30,40]), 3070, 'Test 26');
test(findTheArrayConcVal([111,222,333,444,555,666,777,888,999]), 1113885, 'Test 27');
test(findTheArrayConcVal([1,10,100,1000,10000,100000,1000000]), 31111000, 'Test 28');
test(findTheArrayConcVal([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 32775, 'Test 29');
test(findTheArrayConcVal([54321,67890,12345,98760,43215]), 12221254320, 'Test 30');
test(findTheArrayConcVal([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 2404000, 'Test 31');
test(findTheArrayConcVal([123, 456, 789, 101112, 131415, 161718, 192021, 222324]), 102480707478, 'Test 32');
test(findTheArrayConcVal([98765,43210,13579,24680]), 14197538259, 'Test 33');
test(findTheArrayConcVal([123,456,789,1011,1213]), 5793013, 'Test 34');
test(findTheArrayConcVal([11, 22, 33, 44, 55, 66, 77, 88, 99, 11, 22, 33, 44, 55]), 31152, 'Test 35');
test(findTheArrayConcVal([9, 8, 7, 6, 5, 4, 3, 2, 1]), 315, 'Test 36');
test(findTheArrayConcVal([10000, 10001, 10002, 10003, 10004, 10005]), 3000330012, 'Test 37');
test(findTheArrayConcVal([1000000000,1,2,3,4,5,1000000000]), 10000000001000000042, 'Test 38');
test(findTheArrayConcVal([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300]), 11107000, 'Test 39');
test(findTheArrayConcVal([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6]), 678, 'Test 40');
test(findTheArrayConcVal([123, 456, 789, 1011, 1213, 1415, 1617, 1819, 2021, 2223]), 35929095, 'Test 41');
test(findTheArrayConcVal([987654, 321098, 765432, 109876]), 1308752875308, 'Test 42');
test(findTheArrayConcVal([55555, 44444, 33333, 22222, 11111]), 9999966666, 'Test 43');
test(findTheArrayConcVal([555, 555, 555, 555, 555, 555, 555, 555, 555, 555]), 2777775, 'Test 44');
test(findTheArrayConcVal([1001,2002,3003,4004,5005,6006,7007,8008,9009]), 100135035, 'Test 45');
test(findTheArrayConcVal([9999, 1, 222, 33, 4444, 555]), 10036232, 'Test 46');
test(findTheArrayConcVal([1, 11, 111, 1111, 11111, 111111, 1111111, 11111111, 111111111, 1111111111]), 55555555555, 'Test 47');
test(findTheArrayConcVal([10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]), 16818, 'Test 48');
test(findTheArrayConcVal([98765, 43210, 1111, 2222, 3333, 4444]), 1430869999, 'Test 49');
test(findTheArrayConcVal([123,456,789,101112,131415,161718,192021,222324,252627,282930]), 233896111620, 'Test 50');
test(findTheArrayConcVal([1, 22, 333, 4444, 55555, 66666, 777777, 8888888, 99999999]), 1207188885, 'Test 51');
test(findTheArrayConcVal([10000, 9999, 8888, 7777, 6666, 5555, 4444, 3333, 2222, 1111]), 433316665, 'Test 52');
test(findTheArrayConcVal([12345, 67890, 12345, 67890, 12345, 67890, 12345, 67890, 12345]), 16047172815, 'Test 53');
test(findTheArrayConcVal([1, 10, 100, 1000, 10000, 9999, 999, 99, 9, 8888, 888, 88, 8, 7777, 777, 77, 7]), 13208429, 'Test 54');
test(findTheArrayConcVal([1, 9, 8, 7, 6, 5, 4, 3, 2]), 270, 'Test 55');
test(findTheArrayConcVal([1, 10, 100, 1000, 10000, 9999, 999, 99, 9]), 10122116, 'Test 56');
test(findTheArrayConcVal([9999, 8888, 7777, 6666, 5555, 4444, 3333, 2222, 1111]), 333316665, 'Test 57');
test(findTheArrayConcVal([123, 456, 789, 101112, 131415, 161718, 192021]), 1368586266, 'Test 58');
test(findTheArrayConcVal([123456789, 987654321, 112233445, 556677889, 998877665, 554433221, 110011223, 334455667, 778899110]), 1780022446776676886, 'Test 59');
test(findTheArrayConcVal([555,555,555,555,555,555,555,555]), 2222220, 'Test 60');
test(findTheArrayConcVal([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]), 42510, 'Test 61');
test(findTheArrayConcVal([10000, 9999, 8888, 7777, 6666, 5555, 4444, 3333, 2222, 1111, 0]), 333416665, 'Test 62');
test(findTheArrayConcVal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 5655, 'Test 63');
test(findTheArrayConcVal([1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999, 101010, 111111, 121212]), 6833009997, 'Test 64');
test(findTheArrayConcVal([10000, 1, 10000, 1, 10000, 1, 10000]), 2000020012, 'Test 65');
test(findTheArrayConcVal([101010,202020,303030,404040,505050,606060]), 606061515150, 'Test 66');
test(findTheArrayConcVal([50000, 40000, 30000, 20000, 10000, 10001, 20002, 30003, 40004, 50005]), 15000150015, 'Test 67');
test(findTheArrayConcVal([12345, 67890, 12, 345]), 19134357, 'Test 68');
test(findTheArrayConcVal([10, 20, 30, 40, 50, 60, 70, 80, 90]), 10350, 'Test 69');
test(findTheArrayConcVal([104729, 209458, 314187, 418926, 523665, 628404, 733143, 837882, 942621]), 1047303665715, 'Test 70');
test(findTheArrayConcVal([9876, 5432, 1234, 8765, 4321]), 153094320, 'Test 71');
test(findTheArrayConcVal([777, 888, 999, 111, 222, 333, 444, 555, 666, 0, 1]), 1350649, 'Test 72');
test(findTheArrayConcVal([123, 456, 789, 101112, 131415, 161718, 192021, 222324, 252627, 282930]), 233896111620, 'Test 73');
test(findTheArrayConcVal([12, 34, 56, 78, 90, 87, 65, 43, 21]), 18306, 'Test 74');
test(findTheArrayConcVal([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]), 51111100000, 'Test 75');
test(findTheArrayConcVal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 8047, 'Test 76');
test(findTheArrayConcVal([1, 22, 333, 4444, 55555, 66666, 777777, 8888888, 99999999, 1]), 15639233341, 'Test 77');
test(findTheArrayConcVal([1000, 200, 30, 4, 500, 60, 7000, 800]), 3015360, 'Test 78');
test(findTheArrayConcVal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 2262, 'Test 79');
test(findTheArrayConcVal([100000, 99999, 88888, 77777, 66666, 55555, 44444, 33333, 22222, 11111, 1]), 33334166666, 'Test 80');
test(findTheArrayConcVal([505, 404, 303, 202, 101, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 151845, 'Test 81');
test(findTheArrayConcVal([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 551550, 'Test 82');
test(findTheArrayConcVal([1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999]), 111138885, 'Test 83');
test(findTheArrayConcVal([9, 99, 999, 9999, 99999, 999999]), 29999997, 'Test 84');
test(findTheArrayConcVal([9,8,7,6,5,4,3,2,1,0]), 360, 'Test 85');
test(findTheArrayConcVal([111, 222, 333, 444, 555, 666, 777, 888, 999, 1010, 1111, 2222]), 8332007, 'Test 86');
test(findTheArrayConcVal([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]), 75570, 'Test 87');
test(findTheArrayConcVal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 5655, 'Test 88');
test(findTheArrayConcVal([9876, 5432, 1098, 7654, 3210, 98765, 43210, 12345, 67890]), 2406225420, 'Test 89');
test(findTheArrayConcVal([12345, 67890, 11111, 22222, 33333, 44444]), 9134699999, 'Test 90');
test(findTheArrayConcVal([123, 456, 789, 101, 112, 131, 141, 151]), 1469535, 'Test 91');
test(findTheArrayConcVal([10000, 1000, 100, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 1000, 10000]), 1010112245, 'Test 92');
test(findTheArrayConcVal([54321, 67890, 11111, 22222, 33333, 44444, 55555]), 13332355554, 'Test 93');
test(findTheArrayConcVal([9999, 8888, 7777, 6666, 5555, 4444, 3333, 2222, 1111, 1234]), 388862344, 'Test 94');
test(findTheArrayConcVal([11111, 22222, 33333, 44444, 55555]), 3333433332, 'Test 95');
test(findTheArrayConcVal([111, 222, 333, 444, 555, 666, 777, 888, 999, 1111, 2222, 3333]), 8334330, 'Test 96');
test(findTheArrayConcVal([11111, 2222, 333, 44, 5, 6, 77, 888, 9999, 111111]), 11133679531, 'Test 97');
test(findTheArrayConcVal([1010, 2020, 3030, 4040, 5050, 6060, 7070, 8080, 9090, 101010]), 1151531310, 'Test 98');
test(findTheArrayConcVal([104, 205, 306, 407, 508, 609, 710, 811, 912, 1013, 1114, 1215, 1316, 1417, 1518]), 22109316, 'Test 99');
test(findTheArrayConcVal([12345, 67890, 101112, 131415]), 80235232527, 'Test 100');
test(findTheArrayConcVal([23, 45, 67, 89, 12, 34, 56, 78, 90, 11, 22, 33, 44, 55, 66, 77, 88, 99]), 49895, 'Test 101');
test(findTheArrayConcVal([9, 99, 999, 9999, 99999, 999999, 9999999, 99999999, 999999999, 9999999999]), 499999999995, 'Test 102');
test(findTheArrayConcVal([876, 543, 210, 987, 654, 321]), 1630962, 'Test 103');
test(findTheArrayConcVal([1001,2002,3003,4004,5005,6006]), 60075015, 'Test 104');
test(findTheArrayConcVal([5, 25, 125, 625, 3125, 15625, 78125, 390625, 1953125, 9765625, 48828125]), 2998531250, 'Test 105');
test(findTheArrayConcVal([11,22,33,44,55,66,77,88,99,100,110,120,130,140,150,160,170,180,190]), 496450, 'Test 106');
test(findTheArrayConcVal([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 275, 'Test 107');
test(findTheArrayConcVal([10, 200, 3000, 40000, 500000, 6000000]), 606540000, 'Test 108');
test(findTheArrayConcVal([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 110, 'Test 109');
test(findTheArrayConcVal([12345, 67890, 11111, 22222, 33333, 44444, 55555, 66666, 77777, 88888, 99999]), 14690533329, 'Test 110');
test(findTheArrayConcVal([987654321, 123456789, 987654, 12345, 9876, 1234, 987, 123, 98, 12, 9]), 22343210973, 'Test 111');
test(findTheArrayConcVal([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 360, 'Test 112');
test(findTheArrayConcVal([1111,2222,3333,4444,5555,6666,7777,8888,9999]), 111138885, 'Test 113');
test(findTheArrayConcVal([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000]), 411110000, 'Test 114');
test(findTheArrayConcVal([101, 202, 303, 404, 505, 606, 707, 808, 909, 1010]), 2428040, 'Test 115');
test(findTheArrayConcVal([9,99,999,9999,99999,9999,999,99,9]), 101110095, 'Test 116');
test(findTheArrayConcVal([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]), 240040000, 'Test 117');
test(findTheArrayConcVal([1111, 2222, 3333, 4444, 5555, 4444, 3333, 2222, 1111]), 111116665, 'Test 118');
test(findTheArrayConcVal([1, 22, 333, 4444, 55555, 666666, 7777777, 88888888, 999999999]), 12071388885, 'Test 119');
test(findTheArrayConcVal([1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,9999,8888,7777]), 570060664, 'Test 120');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

