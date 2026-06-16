// Test: 1317. Convert Integer To The Sum Of Two No Zero Integers
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { getNoZeroIntegers } = require("./solution");

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

console.log("\n1317. Convert Integer To The Sum Of Two No Zero Integers\n");

test(getNoZeroIntegers(101), [2, 99], 'Test 1');
test(getNoZeroIntegers(1010), [11, 999], 'Test 2');
test(getNoZeroIntegers(11), [2, 9], 'Test 3');
test(getNoZeroIntegers(104), [5, 99], 'Test 4');
test(getNoZeroIntegers(1001), [2, 999], 'Test 5');
test(getNoZeroIntegers(2), [1, 1], 'Test 6');
test(getNoZeroIntegers(9999), [1, 9998], 'Test 7');
test(getNoZeroIntegers(100), [1, 99], 'Test 8');
test(getNoZeroIntegers(210), [11, 199], 'Test 9');
test(getNoZeroIntegers(9801), [2, 9799], 'Test 10');
test(getNoZeroIntegers(2345), [1, 2344], 'Test 11');
test(getNoZeroIntegers(2100), [111, 1989], 'Test 12');
test(getNoZeroIntegers(1111), [112, 999], 'Test 13');
test(getNoZeroIntegers(10606), [611, 9995], 'Test 14');
test(getNoZeroIntegers(8888), [1, 8887], 'Test 15');
test(getNoZeroIntegers(1000), [1, 999], 'Test 16');
test(getNoZeroIntegers(43), [1, 42], 'Test 17');
test(getNoZeroIntegers(10202), [211, 9991], 'Test 18');
test(getNoZeroIntegers(1357), [1, 1356], 'Test 19');
test(getNoZeroIntegers(10001), [2, 9999], 'Test 20');
test(getNoZeroIntegers(32109), [111, 31998], 'Test 21');
test(getNoZeroIntegers(6789), [1, 6788], 'Test 22');
test(getNoZeroIntegers(6005), [6, 5999], 'Test 23');
test(getNoZeroIntegers(8181), [2, 8179], 'Test 24');
test(getNoZeroIntegers(2468), [1, 2467], 'Test 25');
test(getNoZeroIntegers(2048), [49, 1999], 'Test 26');
test(getNoZeroIntegers(999), [1, 998], 'Test 27');
test(getNoZeroIntegers(3030), [31, 2999], 'Test 28');
test(getNoZeroIntegers(9012), [13, 8999], 'Test 29');
test(getNoZeroIntegers(87654), [1, 87653], 'Test 30');
test(getNoZeroIntegers(43210), [11, 43199], 'Test 31');
test(getNoZeroIntegers(54321), [2, 54319], 'Test 32');
test(getNoZeroIntegers(9090), [91, 8999], 'Test 33');
test(getNoZeroIntegers(65), [1, 64], 'Test 34');
test(getNoZeroIntegers(12345), [1, 12344], 'Test 35');
test(getNoZeroIntegers(21), [2, 19], 'Test 36');
test(getNoZeroIntegers(432), [1, 431], 'Test 37');
test(getNoZeroIntegers(543), [1, 542], 'Test 38');
test(getNoZeroIntegers(87), [1, 86], 'Test 39');
test(getNoZeroIntegers(98), [1, 97], 'Test 40');
test(getNoZeroIntegers(10303), [311, 9992], 'Test 41');
test(getNoZeroIntegers(2023), [24, 1999], 'Test 42');
test(getNoZeroIntegers(10505), [511, 9994], 'Test 43');
test(getNoZeroIntegers(65432), [1, 65431], 'Test 44');
test(getNoZeroIntegers(9998), [1, 9997], 'Test 45');
test(getNoZeroIntegers(7007), [8, 6999], 'Test 46');
test(getNoZeroIntegers(10101), [112, 9989], 'Test 47');
test(getNoZeroIntegers(7070), [71, 6999], 'Test 48');
test(getNoZeroIntegers(6543), [1, 6542], 'Test 49');
test(getNoZeroIntegers(10404), [411, 9993], 'Test 50');
test(getNoZeroIntegers(7777), [1, 7776], 'Test 51');
test(getNoZeroIntegers(8080), [81, 7999], 'Test 52');
test(getNoZeroIntegers(4999), [1, 4998], 'Test 53');
test(getNoZeroIntegers(98765), [1, 98764], 'Test 54');
test(getNoZeroIntegers(9876), [1, 9875], 'Test 55');
test(getNoZeroIntegers(987), [1, 986], 'Test 56');
test(getNoZeroIntegers(76543), [1, 76542], 'Test 57');
test(getNoZeroIntegers(8901), [2, 8899], 'Test 58');
test(getNoZeroIntegers(5678), [1, 5677], 'Test 59');
test(getNoZeroIntegers(67890), [1, 67889], 'Test 60');
test(getNoZeroIntegers(4004), [5, 3999], 'Test 61');
test(getNoZeroIntegers(2000), [1, 1999], 'Test 62');
test(getNoZeroIntegers(4567), [1, 4566], 'Test 63');
test(getNoZeroIntegers(6006), [7, 5999], 'Test 64');
test(getNoZeroIntegers(8008), [9, 7999], 'Test 65');
test(getNoZeroIntegers(6666), [1, 6665], 'Test 66');
test(getNoZeroIntegers(76), [1, 75], 'Test 67');
test(getNoZeroIntegers(4680), [1, 4679], 'Test 68');
test(getNoZeroIntegers(765), [1, 764], 'Test 69');
test(getNoZeroIntegers(2020), [21, 1999], 'Test 70');
test(getNoZeroIntegers(3050), [51, 2999], 'Test 71');
test(getNoZeroIntegers(32), [1, 31], 'Test 72');
test(getNoZeroIntegers(1023), [24, 999], 'Test 73');
test(getNoZeroIntegers(7890), [1, 7889], 'Test 74');
test(getNoZeroIntegers(90123), [124, 89999], 'Test 75');
test(getNoZeroIntegers(7654), [1, 7653], 'Test 76');
test(getNoZeroIntegers(876), [1, 875], 'Test 77');
test(getNoZeroIntegers(7006), [7, 6999], 'Test 78');
test(getNoZeroIntegers(21098), [1111, 19987], 'Test 79');
test(getNoZeroIntegers(5050), [51, 4999], 'Test 80');
test(getNoZeroIntegers(5002), [3, 4999], 'Test 81');
test(getNoZeroIntegers(9997), [1, 9996], 'Test 82');
test(getNoZeroIntegers(3003), [4, 2999], 'Test 83');
test(getNoZeroIntegers(8765), [1, 8764], 'Test 84');
test(getNoZeroIntegers(10987), [988, 9999], 'Test 85');
test(getNoZeroIntegers(321), [2, 319], 'Test 86');
test(getNoZeroIntegers(23456), [1, 23455], 'Test 87');
test(getNoZeroIntegers(56789), [1, 56788], 'Test 88');
test(getNoZeroIntegers(89012), [13, 88999], 'Test 89');
test(getNoZeroIntegers(3333), [1, 3332], 'Test 90');
test(getNoZeroIntegers(3456), [1, 3455], 'Test 91');
test(getNoZeroIntegers(1098), [99, 999], 'Test 92');
test(getNoZeroIntegers(10000), [1, 9999], 'Test 93');
test(getNoZeroIntegers(5432), [1, 5431], 'Test 94');
test(getNoZeroIntegers(2109), [111, 1998], 'Test 95');
test(getNoZeroIntegers(54), [1, 53], 'Test 96');
test(getNoZeroIntegers(654), [1, 653], 'Test 97');
test(getNoZeroIntegers(8642), [1, 8641], 'Test 98');
test(getNoZeroIntegers(5555), [1, 5554], 'Test 99');
test(getNoZeroIntegers(3210), [11, 3199], 'Test 100');
test(getNoZeroIntegers(9009), [11, 8998], 'Test 101');
test(getNoZeroIntegers(6060), [61, 5999], 'Test 102');
test(getNoZeroIntegers(5005), [6, 4999], 'Test 103');
test(getNoZeroIntegers(4444), [1, 4443], 'Test 104');
test(getNoZeroIntegers(4321), [2, 4319], 'Test 105');
test(getNoZeroIntegers(34567), [1, 34566], 'Test 106');
test(getNoZeroIntegers(2222), [1, 2221], 'Test 107');
test(getNoZeroIntegers(6234), [1, 6233], 'Test 108');
test(getNoZeroIntegers(10707), [711, 9996], 'Test 109');
test(getNoZeroIntegers(109), [11, 98], 'Test 110');
test(getNoZeroIntegers(4040), [41, 3999], 'Test 111');
test(getNoZeroIntegers(1234), [1, 1233], 'Test 112');
test(getNoZeroIntegers(7272), [1, 7271], 'Test 113');
test(getNoZeroIntegers(45678), [1, 45677], 'Test 114');
test(getNoZeroIntegers(78901), [2, 78899], 'Test 115');

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
