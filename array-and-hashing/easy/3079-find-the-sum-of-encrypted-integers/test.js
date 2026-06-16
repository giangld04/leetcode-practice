// Test: 3079. Find The Sum Of Encrypted Integers
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { sumOfEncryptedInt } = require("./solution");

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

console.log("\n3079. Find The Sum Of Encrypted Integers\n");

test(sumOfEncryptedInt([523, 213, 111]), 999, 'Test 1');
test(sumOfEncryptedInt([523,213,111]), 999, 'Test 2');
test(sumOfEncryptedInt([1, 10, 100, 1000]), 1234, 'Test 3');
test(sumOfEncryptedInt([999, 100, 101]), 1221, 'Test 4');
test(sumOfEncryptedInt([9,8,7,6,5,4,3,2,1]), 45, 'Test 5');
test(sumOfEncryptedInt([456,789,321]), 1998, 'Test 6');
test(sumOfEncryptedInt([1111,2222,3333,4444,5555]), 16665, 'Test 7');
test(sumOfEncryptedInt([987,654,321]), 1998, 'Test 8');
test(sumOfEncryptedInt([5,15,25,35]), 170, 'Test 9');
test(sumOfEncryptedInt([100,200,300]), 666, 'Test 10');
test(sumOfEncryptedInt([12,21,34,43,56,65]), 264, 'Test 11');
test(sumOfEncryptedInt([11,22,33,44,55,66,77,88,99]), 495, 'Test 12');
test(sumOfEncryptedInt([123,456,789]), 1998, 'Test 13');
test(sumOfEncryptedInt([9,99,999,9999]), 11106, 'Test 14');
test(sumOfEncryptedInt([999,888,777]), 2664, 'Test 15');
test(sumOfEncryptedInt([123, 456, 789]), 1998, 'Test 16');
test(sumOfEncryptedInt([999,123,456]), 1998, 'Test 17');
test(sumOfEncryptedInt([1000,100,10,1]), 1234, 'Test 18');
test(sumOfEncryptedInt([12,23,34,45,56,67,78,89]), 484, 'Test 19');
test(sumOfEncryptedInt([999,888,777,666]), 3330, 'Test 20');
test(sumOfEncryptedInt([5,15,25]), 115, 'Test 21');
test(sumOfEncryptedInt([111,222,333]), 666, 'Test 22');
test(sumOfEncryptedInt([11,22,33,44,55]), 165, 'Test 23');
test(sumOfEncryptedInt([999,100,200]), 1332, 'Test 24');
test(sumOfEncryptedInt([1,2,3]), 6, 'Test 25');
test(sumOfEncryptedInt([10,21,31]), 66, 'Test 26');
test(sumOfEncryptedInt([99, 999, 9999, 99999]), 111096, 'Test 27');
test(sumOfEncryptedInt([1, 11, 111, 1111, 11111]), 12345, 'Test 28');
test(sumOfEncryptedInt([567, 890, 1234, 54321, 98765]), 161774, 'Test 29');
test(sumOfEncryptedInt([1234, 4321, 1199, 2288, 3377]), 35552, 'Test 30');
test(sumOfEncryptedInt([987654, 321, 4321, 111, 222, 333]), 1005442, 'Test 31');
test(sumOfEncryptedInt([199, 299, 399, 499, 599, 699, 799, 899, 991]), 8991, 'Test 32');
test(sumOfEncryptedInt([987, 654, 321, 123, 456, 789, 101112]), 226218, 'Test 33');
test(sumOfEncryptedInt([865, 743, 219, 987, 567, 432, 321]), 5217, 'Test 34');
test(sumOfEncryptedInt([12345, 67890, 11122, 33344, 55566]), 288886, 'Test 35');
test(sumOfEncryptedInt([123456, 789012, 345678, 901234]), 3555552, 'Test 36');
test(sumOfEncryptedInt([901, 892, 783, 674, 567]), 4440, 'Test 37');
test(sumOfEncryptedInt([199, 288, 377, 466, 555, 644, 733, 822, 911]), 7215, 'Test 38');
test(sumOfEncryptedInt([345, 6789, 101112]), 232776, 'Test 39');
test(sumOfEncryptedInt([12345, 98765, 54321, 654321, 112233]), 1211108, 'Test 40');
test(sumOfEncryptedInt([987, 654, 321, 123, 456, 789, 876, 543, 210]), 5661, 'Test 41');
test(sumOfEncryptedInt([4321, 1111, 9999, 8765, 5432]), 29997, 'Test 42');
test(sumOfEncryptedInt([987, 654, 321, 987]), 2997, 'Test 43');
test(sumOfEncryptedInt([9876, 8765, 7654, 6543, 5432, 4321]), 43329, 'Test 44');
test(sumOfEncryptedInt([123, 122, 121, 120, 119]), 1998, 'Test 45');
test(sumOfEncryptedInt([1, 10, 100, 1000, 10000]), 12345, 'Test 46');
test(sumOfEncryptedInt([100, 200, 300, 400, 500]), 1665, 'Test 47');
test(sumOfEncryptedInt([12345, 67890, 111111, 222222]), 488887, 'Test 48');
test(sumOfEncryptedInt([1000, 999, 888, 777, 666]), 4441, 'Test 49');
test(sumOfEncryptedInt([123, 321, 456, 654, 789, 987, 111, 222, 333]), 4662, 'Test 50');
test(sumOfEncryptedInt([100, 200, 300, 400, 500, 600, 700, 800, 900]), 4995, 'Test 51');
test(sumOfEncryptedInt([50, 51, 52, 53, 54]), 275, 'Test 52');
test(sumOfEncryptedInt([1234, 5678, 91011, 121314]), 557775, 'Test 53');
test(sumOfEncryptedInt([987, 654, 321, 123, 456]), 2997, 'Test 54');
test(sumOfEncryptedInt([111, 222, 333, 444, 555, 666, 777, 888, 999]), 4995, 'Test 55');
test(sumOfEncryptedInt([9, 99, 999, 9999, 99999]), 111105, 'Test 56');
test(sumOfEncryptedInt([123, 234, 345, 456, 567, 678, 789, 890, 901]), 6660, 'Test 57');
test(sumOfEncryptedInt([1001, 2002, 3003, 4004]), 11110, 'Test 58');
test(sumOfEncryptedInt([123, 456, 789, 101112, 321, 654, 987]), 226218, 'Test 59');
test(sumOfEncryptedInt([56, 78, 90, 123, 456, 789]), 2251, 'Test 60');
test(sumOfEncryptedInt([12, 23, 34, 45, 56, 67, 78, 89, 90]), 583, 'Test 61');
test(sumOfEncryptedInt([9876, 5432, 1111, 2222, 3333]), 22220, 'Test 62');
test(sumOfEncryptedInt([19, 92, 299, 9992, 123456]), 677862, 'Test 63');
test(sumOfEncryptedInt([1234, 5678, 9012]), 23331, 'Test 64');
test(sumOfEncryptedInt([12, 345, 6789, 9876]), 20575, 'Test 65');
test(sumOfEncryptedInt([10203, 40506, 70809]), 199998, 'Test 66');
test(sumOfEncryptedInt([1234, 4321, 2341, 3412, 1243]), 22220, 'Test 67');
test(sumOfEncryptedInt([12, 123, 1234, 12345, 123456]), 727020, 'Test 68');
test(sumOfEncryptedInt([1234, 5678, 91011]), 113331, 'Test 69');
test(sumOfEncryptedInt([9876, 8765, 7654, 6543, 5432]), 38885, 'Test 70');
test(sumOfEncryptedInt([12, 21, 345, 543, 654]), 1820, 'Test 71');
test(sumOfEncryptedInt([100, 2000, 30000, 400000, 5000000]), 6035665, 'Test 72');
test(sumOfEncryptedInt([990, 881, 772, 663, 554, 445, 336, 227, 118]), 6771, 'Test 73');
test(sumOfEncryptedInt([101010, 202020, 303030, 404040, 505050, 606060, 707070, 808080, 909090]), 4999995, 'Test 74');
test(sumOfEncryptedInt([1000, 200, 30, 4, 56, 7890, 12345]), 66990, 'Test 75');
test(sumOfEncryptedInt([12, 345, 6789, 101, 202, 303, 404, 505, 606, 707, 808, 909]), 15571, 'Test 76');
test(sumOfEncryptedInt([59, 68, 77, 86, 95, 104, 213, 322, 431]), 2005, 'Test 77');
test(sumOfEncryptedInt([9876, 8765, 7654, 6543, 5432, 4321, 3210, 2109, 1098]), 66660, 'Test 78');
test(sumOfEncryptedInt([888, 887, 886, 885, 884]), 4440, 'Test 79');
test(sumOfEncryptedInt([12, 345, 6789, 101112]), 232798, 'Test 80');
test(sumOfEncryptedInt([98765, 43210, 11223, 44556, 77889]), 344441, 'Test 81');
test(sumOfEncryptedInt([101, 102, 103, 104, 105]), 1665, 'Test 82');
test(sumOfEncryptedInt([1001, 2002, 3003, 4004, 5005, 6006, 7007, 8008, 9009]), 49995, 'Test 83');
test(sumOfEncryptedInt([1010, 2020, 3030, 4040, 5050, 6060, 7070, 8080, 9090]), 49995, 'Test 84');
test(sumOfEncryptedInt([1234, 4321, 2341, 3412, 1243, 2134, 4123, 3214]), 35552, 'Test 85');
test(sumOfEncryptedInt([12, 234, 3456, 45678, 567890]), 1096019, 'Test 86');
test(sumOfEncryptedInt([112233, 223344, 334455, 445566, 556677, 667788, 778899]), 4666662, 'Test 87');
test(sumOfEncryptedInt([199, 299, 399, 499, 599]), 4995, 'Test 88');
test(sumOfEncryptedInt([1234, 5678, 9012, 3456, 7890]), 39996, 'Test 89');
test(sumOfEncryptedInt([1000, 2000, 3000, 4000, 5000]), 16665, 'Test 90');
test(sumOfEncryptedInt([56, 65, 78, 87, 90, 900]), 1406, 'Test 91');
test(sumOfEncryptedInt([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 606, 'Test 92');
test(sumOfEncryptedInt([101, 202, 303, 404, 505]), 1665, 'Test 93');
test(sumOfEncryptedInt([199, 299, 399, 499, 599, 699, 799, 899, 999]), 8991, 'Test 94');
test(sumOfEncryptedInt([101, 202, 303, 404, 505, 606, 707, 808, 909]), 4995, 'Test 95');
test(sumOfEncryptedInt([987, 654, 321, 111, 222, 333]), 2664, 'Test 96');
test(sumOfEncryptedInt([98765, 87654, 76543, 65432, 54321]), 388885, 'Test 97');
test(sumOfEncryptedInt([123456789, 987654321, 112233445566778899, 1000000000]), 1000000003111111108, 'Test 98');
test(sumOfEncryptedInt([12, 345, 6789, 101]), 10687, 'Test 99');
test(sumOfEncryptedInt([1, 22, 333, 4444, 55555, 666666, 7777777, 88888888, 999999999]), 1097393685, 'Test 100');
test(sumOfEncryptedInt([111111, 222222, 333333, 444444, 555555]), 1666665, 'Test 101');
test(sumOfEncryptedInt([12345, 67890, 54321]), 211109, 'Test 102');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

