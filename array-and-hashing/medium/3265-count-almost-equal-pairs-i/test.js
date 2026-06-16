// Test: 3265. Count Almost Equal Pairs I
// 124 test cases from LeetCodeDataset
// Run: node test.js

const { countPairs } = require("./solution");

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

console.log("\n3265. Count Almost Equal Pairs I\n");

test(countPairs([111,222,333,444,555,666,777,888,999]), 0, 'Test 1');
test(countPairs([101,110,111,1001,1100]), 5, 'Test 2');
test(countPairs([12,21,13,31,14]), 2, 'Test 3');
test(countPairs([12,21,13,31,23,32,45,54]), 4, 'Test 4');
test(countPairs([999999, 99999, 9999, 999, 99, 9]), 0, 'Test 5');
test(countPairs([1,2,3,4,5,6,7,8,9,10]), 1, 'Test 6');
test(countPairs([123,321,213,231,312,132]), 9, 'Test 7');
test(countPairs([1234,4321,2134,3412]), 1, 'Test 8');
test(countPairs([5,55,555,5555]), 0, 'Test 9');
test(countPairs([10,100,1000]), 3, 'Test 10');
test(countPairs([1111,1112,1121,1211,2111]), 6, 'Test 11');
test(countPairs([1234,4321,2341,3412,4123,1423,1324,2413,2134,3421,3124,1342,2431,4312,4213,1243,1432,2143,2314,3214,3142,4132,3241,4231]), 72, 'Test 12');
test(countPairs([999,9999,99999,999999]), 0, 'Test 13');
test(countPairs([123,321,231,123,132,213]), 10, 'Test 14');
test(countPairs([456,654,465,546,564,645]), 9, 'Test 15');
test(countPairs([12,21,34,43,56,65]), 3, 'Test 16');
test(countPairs([10,20,30,40,50,60,70,80,90,100]), 1, 'Test 17');
test(countPairs([12,21,13,31,14,41]), 3, 'Test 18');
test(countPairs([12,21,34,43,56]), 2, 'Test 19');
test(countPairs([3,12,30,17,21]), 2, 'Test 20');
test(countPairs([11,22,33,44,55,66,77,88,99]), 0, 'Test 21');
test(countPairs([123,321,231,132,213,312]), 9, 'Test 22');
test(countPairs([1234,4321,2134,3412,1423,2314]), 2, 'Test 23');
test(countPairs([123,231]), 0, 'Test 24');
test(countPairs([1,1,1,1,1]), 10, 'Test 25');
test(countPairs([10,100,1000,10000]), 6, 'Test 26');
test(countPairs([100,101,110,111]), 1, 'Test 27');
test(countPairs([1234,4321,3214,2341]), 2, 'Test 28');
test(countPairs([123,321,213,132,231,312]), 9, 'Test 29');
test(countPairs([1000,1001,1010,1100,10,1]), 6, 'Test 30');
test(countPairs([123456,654321,123654,456321,213456,345612,564321]), 4, 'Test 31');
test(countPairs([10203, 30201, 20301, 20103, 30102, 10302, 12300, 12003]), 12, 'Test 32');
test(countPairs([987654, 456789, 978654, 897654, 765432]), 2, 'Test 33');
test(countPairs([101, 110, 11, 111, 1001, 1010]), 8, 'Test 34');
test(countPairs([12345, 54321, 21435, 35421, 42153, 51324]), 1, 'Test 35');
test(countPairs([101,110,1001,1010,1100,10001]), 10, 'Test 36');
test(countPairs([987654, 987645, 987564, 987546, 987465, 987456]), 9, 'Test 37');
test(countPairs([111222, 222111, 112211, 211211, 122111, 112121]), 4, 'Test 38');
test(countPairs([123456,234561,345612,456123,561234,612345]), 0, 'Test 39');
test(countPairs([123456789, 987654321, 918273645, 543216789, 132456789, 123465789]), 2, 'Test 40');
test(countPairs([999, 899, 989, 998, 889, 898]), 4, 'Test 41');
test(countPairs([123,321,231,132,213,312,123,321,231,132,213,312]), 42, 'Test 42');
test(countPairs([10203,30201,20301,10302,20103,32100]), 6, 'Test 43');
test(countPairs([1122,2211,1221,2112,2121,1212]), 12, 'Test 44');
test(countPairs([1234567,7654321,6543217,5432176,4321765,3217654,2176543,1765432]), 0, 'Test 45');
test(countPairs([111222,222111,121221,212112,112212,212211]), 7, 'Test 46');
test(countPairs([1002,2001,1020,2010,1200,2100,20001,10002]), 12, 'Test 47');
test(countPairs([101010, 101001, 110010, 100110, 100101, 111000, 000111]), Error: Solution.countPairs[] missing 1 required positional argument: 'nums', 'Test 48');
test(countPairs([111111,222222,333333,444444,555555,666666]), 0, 'Test 49');
test(countPairs([987654,456789,876549,765498,654987,549876,498765,987654]), 1, 'Test 50');
test(countPairs([123456,654321,126543,342156,564321,213456]), 2, 'Test 51');
test(countPairs([111222,222111,122122,211221,221122,121222,222121,122211]), 7, 'Test 52');
test(countPairs([123456789,987654321,234567891,198765432,345678912,219876543]), 0, 'Test 53');
test(countPairs([111111,111112,111121,111211,112111,121111,211111]), 15, 'Test 54');
test(countPairs([112233, 332211, 221133, 132211, 312211]), 1, 'Test 55');
test(countPairs([1234,4321,3412,2143,1324,2413]), 4, 'Test 56');
test(countPairs([567,675,756,576,657,765,123,321,213,231,312,132]), 18, 'Test 57');
test(countPairs([12345, 54321, 13245, 24135, 35142, 42153, 53214]), 1, 'Test 58');
test(countPairs([999999,99999,9999,999,99,9]), 0, 'Test 59');
test(countPairs([11112222, 22221111, 12121212, 21212121, 11221122]), 0, 'Test 60');
test(countPairs([10001,10010,10100,11000,10001,10010]), 15, 'Test 61');
test(countPairs([12345,54321,43215,32154,21543,15432,51432,41532,31542,21543,14532,54132,45132,35142,25143,15243,51243,41253,31254,21254]), 25, 'Test 62');
test(countPairs([1234,4321,2134,3421,2341,4123,1423,3241]), 8, 'Test 63');
test(countPairs([987654,897654,789654,678954,567894,456789,956784,985674,987564]), 5, 'Test 64');
test(countPairs([123456,654321,123546,654123,123465,654312,125346,653124]), 6, 'Test 65');
test(countPairs([123456,123457,123465,123546,124356,123645,125346,132456,124536,134256]), 12, 'Test 66');
test(countPairs([12345,54321,23415,31425,42135,15234,51432,21453]), 0, 'Test 67');
test(countPairs([54321,45321,35421,25431,15432,54231,54312,54132,52431,53421]), 13, 'Test 68');
test(countPairs([999999,111222,222111,333444,444333,555666]), 0, 'Test 69');
test(countPairs([101010,101100,110010,100110,101001,110100,100101,110001,100011,100101]), 31, 'Test 70');
test(countPairs([123456,654321,234561,165432,345612,126543]), 0, 'Test 71');
test(countPairs([987654,456789,876954,769854,678945,954876]), 0, 'Test 72');
test(countPairs([1001, 1010, 1100, 10010, 10100]), 6, 'Test 73');
test(countPairs([100,10,1,110,11,101,1110,1101,1011,111]), 12, 'Test 74');
test(countPairs([111,222,333,444,555,666,777,888,999,101]), 0, 'Test 75');
test(countPairs([1234,2341,3412,4123,1423,2143]), 3, 'Test 76');
test(countPairs([123456, 123465, 124356, 132456, 213456]), 4, 'Test 77');
test(countPairs([100101,101001,110010,110100,101100,100110]), 10, 'Test 78');
test(countPairs([101,110,1001,1010,1100,1]), 8, 'Test 79');
test(countPairs([101010,202020,303030,404040,505050,606060]), 0, 'Test 80');
test(countPairs([123456,654321,564321,456321,345621,234561,123465,654312]), 4, 'Test 81');
test(countPairs([12345,23451,34512,45123,51234,21345,13245,12435,12354,12345]), 9, 'Test 82');
test(countPairs([123456789,987654321,876543219,192837465,219876543,345678192,465789321,578912346,689123457,791234568]), 0, 'Test 83');
test(countPairs([1234,2341,4321,3421,2143,3214]), 4, 'Test 84');
test(countPairs([102,201,120,210,10,1]), 5, 'Test 85');
test(countPairs([12345, 54321, 13524, 24153, 35412, 41235]), 0, 'Test 86');
test(countPairs([111111,111112,111121,111211,112111,121111]), 10, 'Test 87');
test(countPairs([1000002,2000010,1000200,2001000,1020000,2100000,2000001,1000012]), 10, 'Test 88');
test(countPairs([123456, 654321, 123465, 123546, 124356]), 3, 'Test 89');
test(countPairs([112233,332211,221133,123321,213123,321321,312132,231231]), 1, 'Test 90');
test(countPairs([101010,101100,110010,110100,100110,100101]), 11, 'Test 91');
test(countPairs([100001,100010,100100,101000,110000,1]), 10, 'Test 92');
test(countPairs([999,989,998,899,988,889]), 4, 'Test 93');
test(countPairs([111222,222111,112212,221121,121122]), 4, 'Test 94');
test(countPairs([987654,456789,986754,457689,987564,456879]), 4, 'Test 95');
test(countPairs([123456,234561,345612,456123,561234,612345,162345,126345,123645,123465]), 5, 'Test 96');
test(countPairs([12345,23451,34512,45123,51234,15234]), 1, 'Test 97');
test(countPairs([987654, 876549, 765489, 654789, 546789]), 0, 'Test 98');
test(countPairs([112233,331122,223311,113322,221133,332211]), 0, 'Test 99');
test(countPairs([101010,100101,101100,110010,110100,111000]), 10, 'Test 100');
test(countPairs([1234, 4321, 1423, 2143, 3124, 2314, 1342, 3412, 4132, 4213]), 0, 'Test 101');
test(countPairs([1000001,1000010,1000100,1001000,1010000,1100000]), 15, 'Test 102');
test(countPairs([101,110,1001,1010,1100]), 8, 'Test 103');
test(countPairs([101, 110, 1001, 1010, 1100]), 8, 'Test 104');
test(countPairs([1001,1100,1010,1001,1101,1110]), 7, 'Test 105');
test(countPairs([1234,4321,3412,2143,2314,4123]), 2, 'Test 106');
test(countPairs([1, 10, 100, 1000, 10000, 100000]), 15, 'Test 107');
test(countPairs([1112, 1211, 2111, 1121, 2211, 2121, 1221]), 9, 'Test 108');
test(countPairs([123, 321, 213, 132, 231, 312, 111, 222, 333, 444]), 9, 'Test 109');
test(countPairs([123, 213, 321, 132, 231, 312, 456, 546, 465, 564, 645, 654]), 18, 'Test 110');
test(countPairs([1234, 4321, 2341, 1423, 3142]), 1, 'Test 111');
test(countPairs([100, 1000, 10000, 100000, 1000000]), 10, 'Test 112');
test(countPairs([10000001,10000010,10000100,10001000,10010000,10100000,11000000,20000001]), 21, 'Test 113');
test(countPairs([111111, 111112, 111121, 111211, 112111, 121111]), 10, 'Test 114');
test(countPairs([1234567, 7654321, 2314567, 3546721, 4678901, 5789012]), 0, 'Test 115');
test(countPairs([100001,100100,101000,110000,100010,100110]), 10, 'Test 116');
test(countPairs([987654,456789,654321,789654,897654,567894]), 2, 'Test 117');
test(countPairs([1234,4321,2143,3412,1342,2413,4123,3214,2341,4231]), 11, 'Test 118');
test(countPairs([11112,21111,12111,11211,11121,11111]), 10, 'Test 119');
test(countPairs([1001,1010,1100,1,10,100,101,11,111,1111]), 11, 'Test 120');
test(countPairs([123456,654321,123654,123456,654123,126543]), 4, 'Test 121');
test(countPairs([999999, 888888, 777777, 666666, 555555, 444444, 333333]), 0, 'Test 122');
test(countPairs([123456789,987654321,897654321,789654321,654321789,543216789]), 2, 'Test 123');
test(countPairs([1234, 1324, 2134, 2314, 3124, 3214, 4123, 4213, 4312, 4321]), 17, 'Test 124');

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
