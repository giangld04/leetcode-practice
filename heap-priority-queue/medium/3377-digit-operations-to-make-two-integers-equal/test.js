// Test: 3377. Digit Operations To Make Two Integers Equal
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n3377. Digit Operations To Make Two Integers Equal\n");

test(minOperations(5678, 8765), 57404, 'Test 1');
test(minOperations(1009, 1010), -1, 'Test 2');
test(minOperations(1111, 2222), 6789, 'Test 3');
test(minOperations(3333, 4444), 17899, 'Test 4');
test(minOperations(1111, 2221), -1, 'Test 5');
test(minOperations(7777, 6666), 34564, 'Test 6');
test(minOperations(1001, 1011), 2012, 'Test 7');
test(minOperations(77, 88), 243, 'Test 8');
test(minOperations(2222, 1111), 6789, 'Test 9');
test(minOperations(303, 305), 912, 'Test 10');
test(minOperations(303, 303), 303, 'Test 11');
test(minOperations(10, 12), 85, 'Test 12');
test(minOperations(100, 100), 100, 'Test 13');
test(minOperations(1001, 1101), 2102, 'Test 14');
test(minOperations(2222, 3333), 13244, 'Test 15');
test(minOperations(9998, 9999), 19997, 'Test 16');
test(minOperations(99, 98), 197, 'Test 17');
test(minOperations(101, 111), -1, 'Test 18');
test(minOperations(99, 99), 99, 'Test 19');
test(minOperations(18, 16), 115, 'Test 20');
test(minOperations(444, 333), 1455, 'Test 21');
test(minOperations(100, 99), -1, 'Test 22');
test(minOperations(8080, 9090), 25260, 'Test 23');
test(minOperations(37, 37), -1, 'Test 24');
test(minOperations(25, 49), 232, 'Test 25');
test(minOperations(4, 8), -1, 'Test 26');
test(minOperations(101, 110), -1, 'Test 27');
test(minOperations(14, 20), 200, 'Test 28');
test(minOperations(2468, 1357), 8019, 'Test 29');
test(minOperations(11, 13), -1, 'Test 30');
test(minOperations(18, 22), 269, 'Test 31');
test(minOperations(123, 122), 245, 'Test 32');
test(minOperations(22, 24), 145, 'Test 33');
test(minOperations(100, 200), 300, 'Test 34');
test(minOperations(111, 113), -1, 'Test 35');
test(minOperations(4444, 5555), 23454, 'Test 36');
test(minOperations(25, 44), 127, 'Test 37');
test(minOperations(1234, 4321), 18528, 'Test 38');
test(minOperations(22, 11), -1, 'Test 39');
test(minOperations(999, 998), 1997, 'Test 40');
test(minOperations(14, 18), 144, 'Test 41');
test(minOperations(100, 104), 1020, 'Test 42');
test(minOperations(131, 133), -1, 'Test 43');
test(minOperations(20, 24), 186, 'Test 44');
test(minOperations(100, 144), 1080, 'Test 45');
test(minOperations(333, 444), 1455, 'Test 46');
test(minOperations(999, 997), -1, 'Test 47');
test(minOperations(6, 2), -1, 'Test 48');
test(minOperations(21, 21), 21, 'Test 49');
test(minOperations(100, 102), 535, 'Test 50');
test(minOperations(1024, 1024), 1024, 'Test 51');
test(minOperations(5555, 4444), 23454, 'Test 52');
test(minOperations(100, 101), -1, 'Test 53');
test(minOperations(1357, 2468), 8019, 'Test 54');
test(minOperations(1112, 1111), 2223, 'Test 55');
test(minOperations(1111, 1110), 2221, 'Test 56');
test(minOperations(222, 224), 815, 'Test 57');
test(minOperations(2345, 5432), 26184, 'Test 58');
test(minOperations(14, 28), 126, 'Test 59');
test(minOperations(123, 321), 908, 'Test 60');
test(minOperations(2020, 1919), 28539, 'Test 61');
test(minOperations(2020, 2021), 4041, 'Test 62');
test(minOperations(111, 222), 567, 'Test 63');
test(minOperations(88, 88), 88, 'Test 64');
test(minOperations(11, 33), -1, 'Test 65');
test(minOperations(789, 879), 2447, 'Test 66');
test(minOperations(200, 202), 603, 'Test 67');
test(minOperations(18, 20), 310, 'Test 68');
test(minOperations(22, 22), 22, 'Test 69');
test(minOperations(999, 999), 999, 'Test 70');
test(minOperations(111, 121), 232, 'Test 71');
test(minOperations(1111, 1113), 3336, 'Test 72');
test(minOperations(200, 210), 410, 'Test 73');
test(minOperations(222, 111), 567, 'Test 74');
test(minOperations(111, 111), 111, 'Test 75');
test(minOperations(1001, 1004), 4010, 'Test 76');
test(minOperations(456, 654), 2573, 'Test 77');
test(minOperations(6666, 7777), 34564, 'Test 78');
test(minOperations(4321, 1234), 18528, 'Test 79');
test(minOperations(123, 456), 2004, 'Test 80');
test(minOperations(88, 89), -1, 'Test 81');
test(minOperations(1001, 1002), 2003, 'Test 82');
test(minOperations(4567, 7654), -1, 'Test 83');
test(minOperations(999, 888), 3675, 'Test 84');
test(minOperations(9999, 8888), 46574, 'Test 85');
test(minOperations(303, 333), 1895, 'Test 86');
test(minOperations(8888, 9999), 46574, 'Test 87');
test(minOperations(14, 22), 159, 'Test 88');
test(minOperations(14, 16), 45, 'Test 89');
test(minOperations(11, 22), -1, 'Test 90');
test(minOperations(99, 88), 285, 'Test 91');
test(minOperations(99, 100), -1, 'Test 92');
test(minOperations(1000, 1002), 3003, 'Test 93');
test(minOperations(3456, 6543), 37406, 'Test 94');
test(minOperations(1001, 1001), 1001, 'Test 95');
test(minOperations(1001, 2002), 4005, 'Test 96');
test(minOperations(22, 28), 251, 'Test 97');
test(minOperations(11, 11), -1, 'Test 98');
test(minOperations(100, 110), 210, 'Test 99');
test(minOperations(37, 39), -1, 'Test 100');
test(minOperations(202, 202), 202, 'Test 101');
test(minOperations(55, 66), 177, 'Test 102');
test(minOperations(999, 111), 8196, 'Test 103');
test(minOperations(30, 36), 263, 'Test 104');
test(minOperations(1001, 1111), 3123, 'Test 105');
test(minOperations(333, 484), 2971, 'Test 106');
test(minOperations(33, 44), 111, 'Test 107');
test(minOperations(3030, 3032), 9093, 'Test 108');
test(minOperations(23, 23), -1, 'Test 109');
test(minOperations(777, 888), 3231, 'Test 110');
test(minOperations(22, 25), 170, 'Test 111');

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
