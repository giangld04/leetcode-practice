// Test: 3300. Minimum Element After Replacement With Digit Sum
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { minElement } = require("./solution");

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

console.log("\n3300. Minimum Element After Replacement With Digit Sum\n");

test(minElement([9999,1001,1111]), 2, 'Test 1');
test(minElement([111,222,333]), 3, 'Test 2');
test(minElement([1234,4321,2134,3412]), 10, 'Test 3');
test(minElement([10,12,13,14]), 1, 'Test 4');
test(minElement([100,200,300,400]), 1, 'Test 5');
test(minElement([1111,2222,3333,4444]), 4, 'Test 6');
test(minElement([1,2,3,4]), 1, 'Test 7');
test(minElement([9999,1111,2222,3333]), 4, 'Test 8');
test(minElement([9,99,999,9999]), 9, 'Test 9');
test(minElement([5050,550,50,5]), 5, 'Test 10');
test(minElement([899,989,998,123]), 6, 'Test 11');
test(minElement([9999,1001,2002,3003]), 2, 'Test 12');
test(minElement([1234,5678,91011]), 10, 'Test 13');
test(minElement([1000,100,10,1]), 1, 'Test 14');
test(minElement([9999,8888,7777,6666]), 24, 'Test 15');
test(minElement([5050,6060,7070,8080]), 10, 'Test 16');
test(minElement([999,19,199]), 10, 'Test 17');
test(minElement([56,78,90,12]), 3, 'Test 18');
test(minElement([9090, 8080, 7070, 6060]), 12, 'Test 19');
test(minElement([9999, 1, 22, 333, 4444, 55555]), 1, 'Test 20');
test(minElement([1001, 1101, 1110, 1011, 1111]), 2, 'Test 21');
test(minElement([9876, 6789, 3456, 6543]), 18, 'Test 22');
test(minElement([10000, 9999, 9998, 9997, 9996, 9995]), 1, 'Test 23');
test(minElement([4321, 3214, 2143, 1432]), 10, 'Test 24');
test(minElement([123, 456, 789, 101]), 2, 'Test 25');
test(minElement([9999, 1111, 2222, 3333]), 4, 'Test 26');
test(minElement([1099, 2099, 3099, 4099]), 19, 'Test 27');
test(minElement([99999, 11111, 12345, 54321]), 5, 'Test 28');
test(minElement([9876, 6543, 3210, 1234, 4321]), 6, 'Test 29');
test(minElement([9876, 6543, 3210, 1111]), 4, 'Test 30');
test(minElement([1111, 2222, 3333, 4444, 5555]), 4, 'Test 31');
test(minElement([555, 555, 555, 555, 555]), 15, 'Test 32');
test(minElement([9999, 9999, 9999, 9999, 9999]), 36, 'Test 33');
test(minElement([10000, 20000, 30000, 40000]), 1, 'Test 34');
test(minElement([10000, 5000, 2500, 1250]), 1, 'Test 35');
test(minElement([9900, 9800, 9700, 9600]), 15, 'Test 36');
test(minElement([5000, 500, 50, 5, 5555]), 5, 'Test 37');
test(minElement([1, 10, 100, 1000, 10000]), 1, 'Test 38');
test(minElement([9999, 8888, 7777, 6666, 5555]), 20, 'Test 39');
test(minElement([9999, 999, 99, 9]), 9, 'Test 40');
test(minElement([10001, 20002, 30003, 40004]), 2, 'Test 41');
test(minElement([9999, 1234, 4321, 1111, 2222]), 4, 'Test 42');
test(minElement([4567, 1234, 890, 3333]), 10, 'Test 43');
test(minElement([1234, 4321, 2341, 1432, 3412]), 10, 'Test 44');
test(minElement([99999, 99998, 99997, 99996, 99995]), 41, 'Test 45');
test(minElement([789, 897, 978, 879]), 24, 'Test 46');
test(minElement([43210, 54321, 654321, 7654321, 87654321]), 10, 'Test 47');
test(minElement([5555, 555, 55, 5]), 5, 'Test 48');
test(minElement([99999, 88888, 77777, 66666]), 30, 'Test 49');
test(minElement([5678, 8765, 7890, 9012]), 12, 'Test 50');
test(minElement([1234, 5678, 91011, 121314]), 10, 'Test 51');
test(minElement([12345, 54321, 98765, 56789]), 15, 'Test 52');
test(minElement([888, 777, 666, 555, 444]), 12, 'Test 53');
test(minElement([111, 222, 333, 444, 555, 666, 777, 888, 999]), 3, 'Test 54');
test(minElement([9, 99, 999, 9999, 99999]), 9, 'Test 55');
test(minElement([123, 456, 789, 101, 202]), 2, 'Test 56');
test(minElement([12345, 67890, 13579, 24680, 97531]), 15, 'Test 57');
test(minElement([10101, 20202, 30303, 40404]), 3, 'Test 58');
test(minElement([9999, 8888, 7777, 6666]), 24, 'Test 59');
test(minElement([123, 234, 345, 456, 567, 678, 789, 890, 901]), 6, 'Test 60');
test(minElement([12345, 54321, 21435, 35412, 41523]), 15, 'Test 61');
test(minElement([8888, 7777, 6666, 5555]), 20, 'Test 62');
test(minElement([12345, 67890, 54321, 98765]), 15, 'Test 63');
test(minElement([99, 81, 72, 63, 54, 45, 36, 27, 18, 9]), 9, 'Test 64');
test(minElement([5000, 4000, 3000, 2000, 1000]), 1, 'Test 65');
test(minElement([321, 432, 543, 654, 765]), 6, 'Test 66');
test(minElement([123, 321, 213, 132, 312, 231]), 6, 'Test 67');
test(minElement([9999, 4321, 1111, 8765]), 4, 'Test 68');
test(minElement([54321, 43210, 32109, 21098]), 10, 'Test 69');
test(minElement([9876, 6789, 4321, 1234]), 10, 'Test 70');
test(minElement([555, 5555, 55555, 555555]), 15, 'Test 71');
test(minElement([555, 5555, 55555, 555555, 5555555]), 15, 'Test 72');
test(minElement([12345, 23456, 34567, 45678, 56789]), 15, 'Test 73');
test(minElement([1001, 1010, 1100, 111, 11, 1]), 1, 'Test 74');
test(minElement([1999, 2999, 3999, 4999]), 28, 'Test 75');
test(minElement([43210, 43201, 43021, 42310]), 10, 'Test 76');
test(minElement([1, 22, 333, 4444, 55555]), 1, 'Test 77');
test(minElement([2345, 3456, 4567, 5678, 6789]), 14, 'Test 78');
test(minElement([4567, 3456, 2345, 1234]), 10, 'Test 79');
test(minElement([9000, 900, 90, 9, 9990, 990, 909, 99]), 9, 'Test 80');
test(minElement([9876, 8765, 7654, 6543, 5432]), 14, 'Test 81');
test(minElement([1234, 4321, 5678, 8765]), 10, 'Test 82');
test(minElement([1234, 4321, 2134, 3412]), 10, 'Test 83');
test(minElement([12345, 54321, 11111, 99999]), 5, 'Test 84');
test(minElement([1999, 2998, 3997, 4996]), 28, 'Test 85');
test(minElement([1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999]), 4, 'Test 86');
test(minElement([10101, 10010, 11001, 10110]), 2, 'Test 87');
test(minElement([99999, 9999, 999, 99, 9]), 9, 'Test 88');
test(minElement([12345, 67890, 13579, 24680]), 15, 'Test 89');
test(minElement([9876, 8765, 7654, 6543, 5432, 4321, 3210, 2109, 1098, 987]), 6, 'Test 90');
test(minElement([98765, 98764, 98763, 98762]), 32, 'Test 91');
test(minElement([123456, 654321, 111111, 999999]), 6, 'Test 92');
test(minElement([99999, 100000, 100001, 100002, 100003]), 1, 'Test 93');
test(minElement([11111, 22222, 33333, 44444, 55555]), 5, 'Test 94');
test(minElement([10000, 9999, 8888, 7777, 6666]), 1, 'Test 95');
test(minElement([9999, 8888, 7777, 6666, 5555, 4444, 3333, 2222, 1111, 1]), 1, 'Test 96');
test(minElement([1010, 2020, 3030, 4040, 5050]), 2, 'Test 97');
test(minElement([999999, 888888, 777777, 666666]), 36, 'Test 98');
test(minElement([9, 99, 999, 9999]), 9, 'Test 99');
test(minElement([10000, 1000, 100, 10, 1]), 1, 'Test 100');
test(minElement([5001, 6001, 7001, 8001]), 6, 'Test 101');
test(minElement([599, 488, 377, 266]), 14, 'Test 102');
test(minElement([999, 1001, 1010, 1100]), 2, 'Test 103');
test(minElement([1001, 1010, 1100, 10001]), 2, 'Test 104');
test(minElement([11111, 22222, 33333, 44444, 55555, 66666, 77777, 88888, 99999]), 5, 'Test 105');
test(minElement([599, 123, 456, 789]), 6, 'Test 106');
test(minElement([55555, 66666, 77777, 88888]), 25, 'Test 107');
test(minElement([11111, 22222, 33333, 44444]), 5, 'Test 108');
test(minElement([100, 101, 102, 103, 104]), 1, 'Test 109');

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
