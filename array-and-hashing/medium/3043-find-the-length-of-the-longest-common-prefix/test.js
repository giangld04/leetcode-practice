// Test: 3043. Find The Length Of The Longest Common Prefix
// 121 test cases from LeetCodeDataset
// Run: node test.js

const { longestCommonPrefix } = require("./solution");

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

console.log("\n3043. Find The Length Of The Longest Common Prefix\n");

test(longestCommonPrefix([100000, 99999, 88888], [10000, 9999, 8888]), 5, 'Test 1');
test(longestCommonPrefix([1, 10, 100, 1000], [1000, 10000, 100000]), 4, 'Test 2');
test(longestCommonPrefix([1, 1, 1], [1, 1, 1]), 1, 'Test 3');
test(longestCommonPrefix([100000000], [10000000, 1000000, 100000]), 8, 'Test 4');
test(longestCommonPrefix([123, 456, 789], [12345, 45678, 78901]), 3, 'Test 5');
test(longestCommonPrefix([1,2,3], [4,4,4]), 0, 'Test 6');
test(longestCommonPrefix([1], [2]), 0, 'Test 7');
test(longestCommonPrefix([10, 20, 30], [100, 200, 300]), 2, 'Test 8');
test(longestCommonPrefix([5, 55, 555], [5, 50, 55]), 2, 'Test 9');
test(longestCommonPrefix([987654321], [987654321, 98765432, 987654]), 9, 'Test 10');
test(longestCommonPrefix([5678, 567, 56], [56789, 56780, 5670]), 4, 'Test 11');
test(longestCommonPrefix([1], [10, 100, 1000]), 1, 'Test 12');
test(longestCommonPrefix([5655359, 56554], [565, 5655]), 4, 'Test 13');
test(longestCommonPrefix([1, 11, 111], [111, 11, 1]), 3, 'Test 14');
test(longestCommonPrefix([123, 12, 1], [1234, 12, 123]), 3, 'Test 15');
test(longestCommonPrefix([111, 222, 333], [1111, 2222, 3333]), 3, 'Test 16');
test(longestCommonPrefix([123456789], [987654321]), 0, 'Test 17');
test(longestCommonPrefix([123, 456, 789], [1234, 4567, 7890]), 3, 'Test 18');
test(longestCommonPrefix([987654321], [9876543210]), 9, 'Test 19');
test(longestCommonPrefix([1234, 123, 12], [12345, 1230, 120]), 4, 'Test 20');
test(longestCommonPrefix([12345, 67890, 1234], [123456, 1234, 112233]), 5, 'Test 21');
test(longestCommonPrefix([1,10,100], [1000]), 3, 'Test 22');
test(longestCommonPrefix([100, 200, 300], [100, 200, 300]), 3, 'Test 23');
test(longestCommonPrefix([123456789, 987654321], [1234567890, 9876543210, 123456789, 987654321]), 9, 'Test 24');
test(longestCommonPrefix([101010101, 202020202, 303030303], [1010101010, 2020202020, 3030303030]), 9, 'Test 25');
test(longestCommonPrefix([1234567, 123456, 12345, 1234, 123], [12345678, 1234567, 123456, 12345, 1234]), 7, 'Test 26');
test(longestCommonPrefix([111111, 222222, 333333], [1111111, 2222222, 3333333, 111111, 222222, 333333]), 6, 'Test 27');
test(longestCommonPrefix([56789012, 98765432, 12345678, 87654321], [567890123, 987654321, 123456789, 876543210]), 8, 'Test 28');
test(longestCommonPrefix([1, 101, 1001, 10001], [10, 100, 1000, 10000]), 4, 'Test 29');
test(longestCommonPrefix([888888, 777777, 666666, 555555], [8888888, 7777777, 6666666, 5555555, 8888880, 7777770, 6666660, 5555550]), 6, 'Test 30');
test(longestCommonPrefix([12345678, 87654321, 11223344], [123456789, 876543210, 112233445, 12345678, 87654321, 11223344]), 8, 'Test 31');
test(longestCommonPrefix([12345678, 87654321, 135792468, 246813579], [123456789, 876543210, 1357924680, 2468135790]), 9, 'Test 32');
test(longestCommonPrefix([111, 222, 333, 444, 555], [111111111, 222222222, 333333333, 444444444, 555555555]), 3, 'Test 33');
test(longestCommonPrefix([12345, 54321, 67890, 98765], [123456, 654321, 678901, 567890]), 5, 'Test 34');
test(longestCommonPrefix([123456789, 987654321, 1122334455], [1234567890, 9876543210, 112233445566]), 10, 'Test 35');
test(longestCommonPrefix([99999999, 88888888, 77777777], [999999999, 888888888, 777777777]), 8, 'Test 36');
test(longestCommonPrefix([100000000, 200000000, 300000000], [1000000000, 2000000000, 3000000000]), 9, 'Test 37');
test(longestCommonPrefix([1, 10, 100, 1000, 10000], [1, 10, 100, 1000, 10000, 100000]), 5, 'Test 38');
test(longestCommonPrefix([987654, 876543, 765432, 654321], [987654321, 876543210, 765432109, 654321098]), 6, 'Test 39');
test(longestCommonPrefix([111111111, 222222222, 333333333], [1111111111, 2222222222, 3333333333]), 9, 'Test 40');
test(longestCommonPrefix([123456789, 987654321], [1234567890, 9876543210]), 9, 'Test 41');
test(longestCommonPrefix([12345, 54321, 13579], [123456, 543210, 135790]), 5, 'Test 42');
test(longestCommonPrefix([1, 10, 100, 1000, 10000], [10000, 1000, 100, 10, 1]), 5, 'Test 43');
test(longestCommonPrefix([101010, 202020, 303030, 404040], [101010101, 202020202, 303030303, 404040404]), 6, 'Test 44');
test(longestCommonPrefix([1001, 2002, 3003, 4004], [10010, 20020, 30030, 40040]), 4, 'Test 45');
test(longestCommonPrefix([5, 55, 555, 5555, 55555], [555555, 555550, 55550, 5550, 550]), 5, 'Test 46');
test(longestCommonPrefix([123456, 654321, 234567], [1234567, 6543217, 2345678]), 6, 'Test 47');
test(longestCommonPrefix([11111111, 22222222, 33333333], [111111111, 222222222, 333333333]), 8, 'Test 48');
test(longestCommonPrefix([987654321, 987654, 9876], [9876543210, 9876540, 98760]), 9, 'Test 49');
test(longestCommonPrefix([1010, 10101, 101010, 1010101], [10101010, 101010101, 1010101010, 10101010101]), 7, 'Test 50');
test(longestCommonPrefix([55555, 66666, 77777], [555555, 666666, 777777]), 5, 'Test 51');
test(longestCommonPrefix([987654321, 123456789, 101010101], [9876543210, 1234567890, 1010101010]), 9, 'Test 52');
test(longestCommonPrefix([123456, 654321, 111111, 222222], [1234560, 6543210, 1111110, 2222220]), 6, 'Test 53');
test(longestCommonPrefix([1, 10, 100, 1000, 10000], [10, 100, 1000, 10000, 100000]), 5, 'Test 54');
test(longestCommonPrefix([100000, 200000, 300000, 400000], [1000001, 2000002, 3000003, 4000004]), 6, 'Test 55');
test(longestCommonPrefix([111111111, 222222222, 333333333], [1111111110, 2222222220, 3333333330]), 9, 'Test 56');
test(longestCommonPrefix([1234, 4321, 1111, 2222], [12345, 43210, 11111, 22222]), 4, 'Test 57');
test(longestCommonPrefix([987654321, 876543219, 765432198, 654321987], [9876543210, 8765432190, 7654321980, 6543219870]), 9, 'Test 58');
test(longestCommonPrefix([12345, 23456, 34567], [54321, 65432, 76543]), 0, 'Test 59');
test(longestCommonPrefix([123456789, 987654321, 1122334455], [1234567890, 9876543210, 11223344550]), 10, 'Test 60');
test(longestCommonPrefix([99999, 888888, 7777777], [999999, 8888888, 77777777]), 7, 'Test 61');
test(longestCommonPrefix([99999, 88888, 77777, 66666], [999999, 888888, 777777, 666666]), 5, 'Test 62');
test(longestCommonPrefix([123456789, 987654321, 111222333], [1234567890, 1112223334, 9876543210]), 9, 'Test 63');
test(longestCommonPrefix([987654321, 876543210, 765432109, 654321098], [987654321, 876543210, 765432109, 654321098]), 9, 'Test 64');
test(longestCommonPrefix([100100100, 200200200, 300300300], [1001001001, 2002002002, 3003003003]), 9, 'Test 65');
test(longestCommonPrefix([1, 10, 100, 1000], [10000, 100000, 1000000]), 4, 'Test 66');
test(longestCommonPrefix([123123, 234234, 345345, 456456], [123123123, 234234234, 345345345, 456456456]), 6, 'Test 67');
test(longestCommonPrefix([123456789, 987654321], [123456789, 987654321]), 9, 'Test 68');
test(longestCommonPrefix([10101010, 20202020, 30303030], [101010101, 202020202, 303030303]), 8, 'Test 69');
test(longestCommonPrefix([112233, 223344, 334455], [11223311, 22334422, 33445533]), 6, 'Test 70');
test(longestCommonPrefix([1001001, 2002002, 3003003], [10010010, 20020020, 30030030]), 7, 'Test 71');
test(longestCommonPrefix([1, 10, 100, 1000], [10000, 1000, 100, 10]), 4, 'Test 72');
test(longestCommonPrefix([123456789, 987654321, 111222333], [1234567890, 9876543210, 1112223330]), 9, 'Test 73');
test(longestCommonPrefix([55555555, 66666666, 77777777, 88888888], [555555555, 666666666, 777777777, 888888888, 55555555, 66666666, 77777777, 88888888]), 8, 'Test 74');
test(longestCommonPrefix([12345678, 123456, 123], [123456789, 1234567, 12]), 8, 'Test 75');
test(longestCommonPrefix([1001001, 1010101, 1101101], [10010010, 10101010, 11011010]), 7, 'Test 76');
test(longestCommonPrefix([123456, 234567, 345678, 456789], [123456789, 234567890, 345678901, 456789012]), 6, 'Test 77');
test(longestCommonPrefix([112233, 223344, 334455, 445566], [112233112233, 223344223344, 334455334455, 445566445566]), 6, 'Test 78');
test(longestCommonPrefix([10101010, 1010101, 101010, 10101, 1010, 101, 10, 1], [101010101, 101010100, 10101010, 1010101, 101010, 10101, 1010, 101, 10, 1]), 8, 'Test 79');
test(longestCommonPrefix([1111111, 22222222, 333333333], [11111111, 222222222, 3333333333]), 9, 'Test 80');
test(longestCommonPrefix([10101010, 11001100, 11100011], [101010101, 110011001, 111000111]), 8, 'Test 81');
test(longestCommonPrefix([9, 99, 999, 9999], [99999, 999999, 9999999]), 4, 'Test 82');
test(longestCommonPrefix([10101010, 101010, 1010], [101010101, 1010101, 101]), 8, 'Test 83');
test(longestCommonPrefix([123, 456, 789, 101112], [123456, 456789, 789101, 10111213]), 6, 'Test 84');
test(longestCommonPrefix([987654321, 876543210, 765432109], [9876543210, 8765432109, 7654321098]), 9, 'Test 85');
test(longestCommonPrefix([101010, 202020, 303030], [1010101, 2020202, 3030303]), 6, 'Test 86');
test(longestCommonPrefix([9999999, 8888888, 7777777], [99999999, 88888888, 77777777]), 7, 'Test 87');
test(longestCommonPrefix([1, 22, 333, 4444, 55555], [10, 220, 3330, 44440, 555550]), 5, 'Test 88');
test(longestCommonPrefix([1010101010, 2020202020, 3030303030], [10101010101, 20202020202, 30303030303]), 10, 'Test 89');
test(longestCommonPrefix([123456789, 987654321, 112233445], [1234567890, 9876543210, 1122334450]), 9, 'Test 90');
test(longestCommonPrefix([111111, 222222, 333333, 444444], [111111111, 222222222, 333333333, 444444444]), 6, 'Test 91');
test(longestCommonPrefix([54321, 12345, 55555], [543210, 123450, 555550]), 5, 'Test 92');
test(longestCommonPrefix([1, 11, 111, 1111], [11111, 111111, 1111111, 11111111]), 4, 'Test 93');
test(longestCommonPrefix([101010, 1010, 10], [1010101, 10101, 101]), 6, 'Test 94');
test(longestCommonPrefix([1, 11, 111, 1111, 11111, 111111], [10, 110, 1110, 11110, 111110, 1111110]), 6, 'Test 95');
test(longestCommonPrefix([111222333, 444555666, 777888999], [1112223330, 4445556660, 7778889990, 111222333, 444555666, 777888999]), 9, 'Test 96');
test(longestCommonPrefix([11, 22, 33, 44, 55], [111, 222, 333, 444, 555]), 2, 'Test 97');
test(longestCommonPrefix([123, 456, 789, 101112, 131415], [1234, 4567, 7890, 10111213, 13141516]), 6, 'Test 98');
test(longestCommonPrefix([123, 456, 789], [123123, 456456, 789789]), 3, 'Test 99');
test(longestCommonPrefix([1111111, 2222222, 3333333], [11111111, 22222222, 33333333]), 7, 'Test 100');
test(longestCommonPrefix([99999999, 8888888, 777777, 66666, 5555], [999999999, 88888888, 7777777, 666666, 55555]), 8, 'Test 101');
test(longestCommonPrefix([100000000, 200000000, 300000000], [1000000001, 2000000002, 3000000003]), 9, 'Test 102');
test(longestCommonPrefix([98765432, 87654321, 76543210, 65432109, 54321098], [987654321, 876543210, 765432109, 654321098, 543210987]), 8, 'Test 103');
test(longestCommonPrefix([123456, 12345, 1234, 123, 12, 1], [1234567, 1234560, 123450, 12340, 1230, 120]), 6, 'Test 104');
test(longestCommonPrefix([1122334455, 2233445566, 3344556677], [112233445566, 223344556677, 334455667788, 1122334455, 2233445566, 3344556677]), 10, 'Test 105');
test(longestCommonPrefix([12121212, 21212121, 34343434], [121212120, 212121210, 343434340]), 8, 'Test 106');
test(longestCommonPrefix([987654321, 98765432, 9876543, 987654, 98765, 9876, 987, 98, 9], [9876543210, 987654320, 98765430, 9876540, 987650, 98760, 9870, 980, 90]), 9, 'Test 107');
test(longestCommonPrefix([999, 888, 777, 666, 555, 444, 333, 222, 111], [9999, 8888, 7777, 6666, 5555, 4444, 3333, 2222, 1111]), 3, 'Test 108');
test(longestCommonPrefix([987654321, 876543210, 765432109], [9876543210, 8765432100, 7654321090]), 9, 'Test 109');
test(longestCommonPrefix([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]), 1, 'Test 110');
test(longestCommonPrefix([123456789, 12345, 12], [1234567890, 123450, 120]), 9, 'Test 111');
test(longestCommonPrefix([111111111, 222222222, 333333333], [111111112, 222222223, 333333334]), 8, 'Test 112');
test(longestCommonPrefix([1, 2, 3, 4, 5], [10, 20, 30, 40, 50, 12, 21, 32, 43, 54]), 1, 'Test 113');
test(longestCommonPrefix([1, 2, 3, 4, 5, 6, 7, 8, 9], [10, 20, 30, 40, 50, 60, 70, 80, 90]), 1, 'Test 114');
test(longestCommonPrefix([111, 222, 333, 444, 555], [1111, 2222, 3333, 4444, 5555]), 3, 'Test 115');
test(longestCommonPrefix([123123, 234234, 345345, 456456], [1231231, 2342342, 3453453, 4564564]), 6, 'Test 116');
test(longestCommonPrefix([111111111, 222222222, 333333333], [11111111, 22222222, 33333333]), 8, 'Test 117');
test(longestCommonPrefix([555555555, 666666666, 777777777], [5555555555, 6666666666, 7777777777]), 9, 'Test 118');
test(longestCommonPrefix([111111111, 222222222, 333333333], [111111111, 222222222, 333333333]), 9, 'Test 119');
test(longestCommonPrefix([1, 11, 111, 1111], [1, 11, 111, 1111, 11111, 111111]), 4, 'Test 120');
test(longestCommonPrefix([123456789, 987654321, 1122334455], [1234567890, 1234567, 1122334]), 9, 'Test 121');

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
