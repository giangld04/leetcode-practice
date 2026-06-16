// Test: 2748. Number Of Beautiful Pairs
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { countBeautifulPairs } = require("./solution");

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

console.log("\n2748. Number Of Beautiful Pairs\n");

test(countBeautifulPairs([100,200,300,400]), 3, 'Test 1');
test(countBeautifulPairs([34,23,12,45,56]), 5, 'Test 2');
test(countBeautifulPairs([33,14,25,78]), 5, 'Test 3');
test(countBeautifulPairs([123,456,789,101,202]), 9, 'Test 4');
test(countBeautifulPairs([13,31,17,71]), 6, 'Test 5');
test(countBeautifulPairs([78,89,90,12]), 3, 'Test 6');
test(countBeautifulPairs([111,222,333,444]), 5, 'Test 7');
test(countBeautifulPairs([34,23,12,45]), 4, 'Test 8');
test(countBeautifulPairs([12,23,34,45,56]), 6, 'Test 9');
test(countBeautifulPairs([1,2,3,4,5]), 9, 'Test 10');
test(countBeautifulPairs([11,21,12]), 2, 'Test 11');
test(countBeautifulPairs([2,5,1,4]), 5, 'Test 12');
test(countBeautifulPairs([10,20,30,40,50,60,70,80,90]), 8, 'Test 13');
test(countBeautifulPairs([1,2,3,4,5,6,7,8,9]), 27, 'Test 14');
test(countBeautifulPairs([29,97,79,92]), 4, 'Test 15');
test(countBeautifulPairs([123,456,789,101]), 6, 'Test 16');
test(countBeautifulPairs([33,14,25,77]), 6, 'Test 17');
test(countBeautifulPairs([987,876,765,654,543]), 6, 'Test 18');
test(countBeautifulPairs([9876,6543,3210,1234]), 2, 'Test 19');
test(countBeautifulPairs([98,17,31,44]), 6, 'Test 20');
test(countBeautifulPairs([991, 992, 993, 994, 995, 996, 997, 998, 999]), 21, 'Test 21');
test(countBeautifulPairs([987, 876, 765, 654, 543, 432, 321, 210, 109]), 20, 'Test 22');
test(countBeautifulPairs([12, 21, 13, 31, 14, 41, 15, 51, 16, 61]), 41, 'Test 23');
test(countBeautifulPairs([15, 21, 33, 40, 55]), 8, 'Test 24');
test(countBeautifulPairs([13, 26, 39, 52, 65, 78, 91]), 17, 'Test 25');
test(countBeautifulPairs([111, 222, 333, 444, 555]), 9, 'Test 26');
test(countBeautifulPairs([9876, 6543, 3210, 123, 456, 789]), 3, 'Test 27');
test(countBeautifulPairs([31, 73, 17, 79, 97, 37, 71, 13, 39]), 23, 'Test 28');
test(countBeautifulPairs([2468, 1357, 8642, 7531, 9753]), 9, 'Test 29');
test(countBeautifulPairs([22, 44, 88, 16, 32, 64]), 3, 'Test 30');
test(countBeautifulPairs([89, 76, 53, 20, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 55, 'Test 31');
test(countBeautifulPairs([12345, 54321, 98765, 56789, 13579]), 7, 'Test 32');
test(countBeautifulPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 128, 'Test 33');
test(countBeautifulPairs([135, 246, 357, 468, 579, 681, 792, 813, 924]), 25, 'Test 34');
test(countBeautifulPairs([9876, 8765, 7654, 6543, 5432, 4321]), 11, 'Test 35');
test(countBeautifulPairs([12345, 23456, 34567, 45678, 56789, 67890, 78901, 89012, 90123]), 25, 'Test 36');
test(countBeautifulPairs([12, 23, 34, 45, 56, 67, 78, 89, 91]), 27, 'Test 37');
test(countBeautifulPairs([1234, 2345, 3456, 4567, 5678]), 7, 'Test 38');
test(countBeautifulPairs([9998, 9997, 9996, 9995, 9994, 9993, 9992, 9991, 9989, 9988, 9987, 9986]), 40, 'Test 39');
test(countBeautifulPairs([12, 34, 56, 78, 90, 21, 43, 65, 87, 99]), 34, 'Test 40');
test(countBeautifulPairs([1234, 5678, 9101, 1112, 1314]), 10, 'Test 41');
test(countBeautifulPairs([11, 22, 33, 44, 55, 66, 77, 88, 99]), 27, 'Test 42');
test(countBeautifulPairs([987, 654, 321, 111, 222]), 9, 'Test 43');
test(countBeautifulPairs([123, 456, 789, 101, 112, 131]), 14, 'Test 44');
test(countBeautifulPairs([101, 202, 303, 404, 505, 606, 707, 808, 909, 1010, 2020, 3030, 4040]), 34, 'Test 45');
test(countBeautifulPairs([1234, 5678, 9101, 11213, 141516]), 8, 'Test 46');
test(countBeautifulPairs([25, 50, 75, 100, 125]), 4, 'Test 47');
test(countBeautifulPairs([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84]), 73, 'Test 48');
test(countBeautifulPairs([6789, 5678, 4567, 3456, 2345, 1234]), 8, 'Test 49');
test(countBeautifulPairs([111, 222, 333, 444, 555, 666, 777, 888, 999]), 27, 'Test 50');
test(countBeautifulPairs([89, 76, 54, 32, 10]), 3, 'Test 51');
test(countBeautifulPairs([123, 456, 789, 101, 202]), 9, 'Test 52');
test(countBeautifulPairs([9876, 5432, 1234, 5678, 9012]), 10, 'Test 53');
test(countBeautifulPairs([10101, 20202, 30303, 40404, 50505, 60606, 70707, 80808, 90909]), 27, 'Test 54');
test(countBeautifulPairs([12, 21, 34, 43, 56, 65, 78, 87, 90]), 19, 'Test 55');
test(countBeautifulPairs([123, 234, 345, 456, 567, 678, 789, 890, 901]), 24, 'Test 56');
test(countBeautifulPairs([8888, 7777, 6666, 5555]), 5, 'Test 57');
test(countBeautifulPairs([9999, 8888, 7777, 6666, 5555, 4444, 3333, 2222, 1111]), 27, 'Test 58');
test(countBeautifulPairs([9876, 6543, 3210, 9876, 6543]), 0, 'Test 59');
test(countBeautifulPairs([999, 888, 777, 666, 555, 444]), 11, 'Test 60');
test(countBeautifulPairs([2357, 1113, 1719, 2329, 3137]), 10, 'Test 61');
test(countBeautifulPairs([135, 246, 357, 468, 579]), 8, 'Test 62');
test(countBeautifulPairs([29, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79]), 57, 'Test 63');
test(countBeautifulPairs([19, 29, 39, 49, 59, 69, 79, 89, 97, 98, 96, 95, 94, 93, 92, 91]), 85, 'Test 64');
test(countBeautifulPairs([10, 20, 30, 40, 50, 60, 70, 80, 90]), 8, 'Test 65');
test(countBeautifulPairs([1234, 4321, 5678, 8765, 9012]), 6, 'Test 66');
test(countBeautifulPairs([1234, 4321, 5678, 8765, 9876]), 6, 'Test 67');
test(countBeautifulPairs([101, 203, 305, 407, 509]), 9, 'Test 68');
test(countBeautifulPairs([9876, 8765, 7654, 6543, 5432]), 6, 'Test 69');
test(countBeautifulPairs([234, 345, 456, 567, 678, 789, 890, 901]), 16, 'Test 70');
test(countBeautifulPairs([13, 31, 37, 73, 79, 97]), 9, 'Test 71');
test(countBeautifulPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 76, 'Test 72');
test(countBeautifulPairs([9876, 6543, 3210, 9870]), 0, 'Test 73');
test(countBeautifulPairs([1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999]), 27, 'Test 74');
test(countBeautifulPairs([123, 321, 456, 654, 789, 987, 246, 642]), 16, 'Test 75');
test(countBeautifulPairs([1009, 2008, 3007, 4006, 5005]), 8, 'Test 76');
test(countBeautifulPairs([21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]), 59, 'Test 77');
test(countBeautifulPairs([9876, 8765, 7654, 6543, 5432, 4321, 3210, 2109, 1098]), 19, 'Test 78');
test(countBeautifulPairs([89, 97, 75, 53, 31, 19, 98, 87]), 23, 'Test 79');
test(countBeautifulPairs([113, 224, 335, 446, 557]), 8, 'Test 80');
test(countBeautifulPairs([101, 234, 357, 479, 591]), 9, 'Test 81');
test(countBeautifulPairs([23, 32, 45, 54, 67, 76, 89, 98, 10]), 15, 'Test 82');
test(countBeautifulPairs([1001, 2002, 3003, 4004, 5005, 6006, 7007, 8008, 9009]), 27, 'Test 83');
test(countBeautifulPairs([1111, 2223, 3335, 4447]), 6, 'Test 84');
test(countBeautifulPairs([1234, 5678, 9101, 1121, 2132, 3143]), 14, 'Test 85');
test(countBeautifulPairs([13579, 24680, 97531, 86420, 1029384756]), 5, 'Test 86');
test(countBeautifulPairs([911, 822, 733, 644, 555, 466]), 10, 'Test 87');
test(countBeautifulPairs([13579, 2468, 97531, 86420, 7539, 6428, 5317, 4206]), 18, 'Test 88');
test(countBeautifulPairs([9876, 5432, 3210, 1098, 7654]), 8, 'Test 89');
test(countBeautifulPairs([19, 28, 37, 46, 55, 64, 73, 82, 91]), 27, 'Test 90');
test(countBeautifulPairs([89, 97, 103, 107, 109]), 8, 'Test 91');
test(countBeautifulPairs([111, 222, 333, 444, 555, 666]), 11, 'Test 92');
test(countBeautifulPairs([99, 88, 77, 66, 55, 44, 33, 22, 11]), 27, 'Test 93');
test(countBeautifulPairs([111222, 222333, 333444, 444555, 555666, 666777, 777888, 888999, 999111]), 27, 'Test 94');
test(countBeautifulPairs([101, 202, 303, 404, 505]), 9, 'Test 95');
test(countBeautifulPairs([101, 202, 303, 404, 505, 606, 707, 808, 909]), 27, 'Test 96');
test(countBeautifulPairs([12, 24, 36, 48, 60, 72, 84, 96]), 12, 'Test 97');
test(countBeautifulPairs([12345, 67890, 54321, 90876, 23456]), 7, 'Test 98');
test(countBeautifulPairs([11111, 22222, 33333, 44444, 55555, 66666, 77777, 88888, 99999]), 27, 'Test 99');
test(countBeautifulPairs([987, 654, 321, 123, 456, 789]), 6, 'Test 100');
test(countBeautifulPairs([9998, 7775, 5552, 3337, 1111]), 9, 'Test 101');
test(countBeautifulPairs([1023, 4567, 8910, 1123]), 5, 'Test 102');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

