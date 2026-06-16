// Test: 227. Basic Calculator Ii
// 171 test cases from LeetCodeDataset
// Run: node test.js

const { calculate } = require("./solution");

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

console.log("\n227. Basic Calculator Ii\n");

test(calculate("2 - 3 + 4"), 3, 'Test 1');
test(calculate(" 1000000000 - 500000000 + 250000000"), 750000000, 'Test 2');
test(calculate("30 + 2 * 6 / [3 - 1]"), 33, 'Test 3');
test(calculate("100 * [ 2 + 12 ] / 14"), 200, 'Test 4');
test(calculate("1 + 1 * 1 + 1"), 3, 'Test 5');
test(calculate("2*3+4/5"), 6, 'Test 6');
test(calculate("3 + 5 / [ 2 + 3 ]"), 8, 'Test 7');
test(calculate("0 + 0"), 0, 'Test 8');
test(calculate("100*2+12"), 212, 'Test 9');
test(calculate("2147483647 + 1 - 1"), 2147483647, 'Test 10');
test(calculate("100000 + 100000 - 50000 * 2 + 25000 * 4 / 5"), 120000, 'Test 11');
test(calculate("100 * 2 + 12"), 212, 'Test 12');
test(calculate(" 200 - 3 * 50 + 25"), 75, 'Test 13');
test(calculate("10 + 2 * 6"), 22, 'Test 14');
test(calculate("3+2*2"), 7, 'Test 15');
test(calculate(" 30 + 2 * 6 - 12 / 3 "), 38, 'Test 16');
test(calculate("100*[2+12]/14"), 200, 'Test 17');
test(calculate(" 3+5 / 2 "), 5, 'Test 18');
test(calculate("1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10"), 3628800, 'Test 19');
test(calculate("100 * 2 / 25"), 8, 'Test 20');
test(calculate(" 0 + 0 * 1 / 1"), 0, 'Test 21');
test(calculate(" 3/2 "), 1, 'Test 22');
test(calculate("3 + 5 - [ 2 + 3 ]"), 9, 'Test 23');
test(calculate("2147483647 - 2147483646"), 1, 'Test 24');
test(calculate("3+5 / 2 * 3"), 9, 'Test 25');
test(calculate("3 + 2 * 2 + 1 - 5 / 2"), 6, 'Test 26');
test(calculate("10 * 5 + 3"), 53, 'Test 27');
test(calculate("3+5-2*3/4"), 7, 'Test 28');
test(calculate("3 + 5 / 2 + 3"), 8, 'Test 29');
test(calculate("1000 / 10 / 10"), 10, 'Test 30');
test(calculate("3 + 5 / 2 - 8 * 3 + 4 / 2"), -17, 'Test 31');
test(calculate("1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1"), 10, 'Test 32');
test(calculate(" 30 / 3 + 10 * 2 - 5"), 25, 'Test 33');
test(calculate("100*[2+12]"), 212, 'Test 34');
test(calculate("100 * [ 2 + 12 ]"), 212, 'Test 35');
test(calculate(" 1 + 2 * 3 / 4 + 5 * 6 - 7"), 25, 'Test 36');
test(calculate("[ 2 + 6 ] * 3 + 8"), 28, 'Test 37');
test(calculate("[2 + 6 * 3 + 5 - [3 * 14 / 7 + 2] * 5] + 3"), 32, 'Test 38');
test(calculate("2147483647 / 1"), 2147483647, 'Test 39');
test(calculate("1 - 1 + 1"), 1, 'Test 40');
test(calculate("2*3+4/5*6-7+8"), 7, 'Test 41');
test(calculate("10 + 2 - 5"), 7, 'Test 42');
test(calculate(" 30 /3 + 10 * 2 "), 30, 'Test 43');
test(calculate("2 * 3 + 4 / 5"), 6, 'Test 44');
test(calculate("3 + 2 * 2 + 1"), 8, 'Test 45');
test(calculate("10+2*6"), 22, 'Test 46');
test(calculate("3 + [ 2 * 2 ]"), 7, 'Test 47');
test(calculate("123 + 456 * 789 / 100 - 987"), 2733, 'Test 48');
test(calculate("1000 - 500 * 2 + 250 / 5"), 50, 'Test 49');
test(calculate(" 100000 - 50000 * 2 + 25000 / 5000 * 20000"), 100000, 'Test 50');
test(calculate("987654 * 321 / 123 - 456789 + 987654"), 3108401, 'Test 51');
test(calculate(" 1 + 2 - 3 * [4 / 5] + 6 - 7 * 8 / 9"), 1, 'Test 52');
test(calculate("   8 *    5 / 4 + 3 - 1"), 12, 'Test 53');
test(calculate(" 2000 / 10 + 50 * 2 - 300 "), 0, 'Test 54');
test(calculate(" 1234 + 567 * 89 - 101112 / 1314"), 51621, 'Test 55');
test(calculate(" [123 + 456] * 789 - 101112 / [13 * 14] "), 251029, 'Test 56');
test(calculate("1 * 2 + 3 * 4 + 5 * 6 + 7 * 8 + 9 * 10"), 190, 'Test 57');
test(calculate("100 / 10 - 90 * 0 + 80 / 8"), 20, 'Test 58');
test(calculate(" 1000000 - 500000 + 250000 * 2 - 125000 "), 875000, 'Test 59');
test(calculate("1000 - 500 * 2 / 5 + 300 / 3"), 900, 'Test 60');
test(calculate(" 1000 + 2000 - [3000 / 4000 + 5000 - 6000 * [7000 / 8000]]"), 2750, 'Test 61');
test(calculate(" 200 * 5 + 300 / 100 - 10 "), 993, 'Test 62');
test(calculate("123 + 456 * 789 - 101112 / 1314"), 359831, 'Test 63');
test(calculate(" 5 + 4 - 3 * 2 + 1 / 1"), 4, 'Test 64');
test(calculate(" [ 100 + 200 ] * [ 300 - 100 ] / 50"), 60098, 'Test 65');
test(calculate("7 * 8 * 9 / 6 + 5 - 3 * 2"), 83, 'Test 66');
test(calculate("300 + 200 * 5 / 10 - 25"), 375, 'Test 67');
test(calculate("100 * 200 / 500 + 200 - 100"), 140, 'Test 68');
test(calculate("100000 / 100 - 99999 * 0 + 1"), 1001, 'Test 69');
test(calculate("   42   *   [5 - 3] / 2 + 8  "), 217, 'Test 70');
test(calculate("   23 + 56 * 99 / 77 - 44   "), 51, 'Test 71');
test(calculate("100 * 2 + 12 / 3 - 5"), 199, 'Test 72');
test(calculate("   123 + 456 - 789 * 0 / 1 + 1000   "), 1579, 'Test 73');
test(calculate("33 + 22 * 11 - 44 / 11 + 55"), 326, 'Test 74');
test(calculate("3 * 3 * 3 * 3 * 3 - 3 * 3 * 3 + 3"), 219, 'Test 75');
test(calculate("2147483647 - 2147483646 + 1"), 2, 'Test 76');
test(calculate("10 + 2 * 6 / [ 1 - 2 ] * 3"), 16, 'Test 77');
test(calculate("999999 + 1 - 999999 * 0 + 999999 / 1"), 1999999, 'Test 78');
test(calculate("12 + 34 * 56 / 78 - 90 + 12"), -42, 'Test 79');
test(calculate(" 2 * [3 + 4 * [5 - 6 / 2]] + 7"), 30, 'Test 80');
test(calculate("2 + 3 * 5 / 2 - 8 / 4 + 6"), 13, 'Test 81');
test(calculate("5 * 5 * 5 * 5 * 5 / 5 + 5 - 5"), 625, 'Test 82');
test(calculate("3 * 3 + 3 / 3 * 3 - 3"), 9, 'Test 83');
test(calculate(" 100 - 25 * 2 + 50 / 5 - 10"), 50, 'Test 84');
test(calculate(" 2 * 3 + [ 2 * [ 1 + 4 ] / 2 ] - 5 "), 5, 'Test 85');
test(calculate("333333 + 222222 * 1 - 111111 / 1"), 444444, 'Test 86');
test(calculate("2222 + 1111 * 2 - 3333 / 11 + 4444"), 8585, 'Test 87');
test(calculate(" 1000 - 500 * 2 + 250 / 50 * 20"), 100, 'Test 88');
test(calculate(" 99 * 100 - 99 * 99 + 99 * 98"), 9801, 'Test 89');
test(calculate("10 / 2 + 15 * 3 - 7 * [5 - 3] + 20"), 32, 'Test 90');
test(calculate("10000 / 1000 + 200 * 2 - 500"), -90, 'Test 91');
test(calculate(" 33333 + 22222 - 11111 + 44444 * 55555 / 66666"), 81480, 'Test 92');
test(calculate("1000 * 2 / 25 + 100 - 50"), 130, 'Test 93');
test(calculate("123456789 + 987654321 * 1 - 123456789 / 1"), 987654321, 'Test 94');
test(calculate("100 * 2 + 3 * 5 / 15 - 10"), 191, 'Test 95');
test(calculate(" 2 * [ 3 + 4 * [ 5 - 6 ] / 7 ] - 8 "), 18, 'Test 96');
test(calculate("1000 * 5 / 25 + 20 - 40"), 180, 'Test 97');
test(calculate(" 200 + 50 / 5 - 30 * 2 + 10"), 160, 'Test 98');
test(calculate("32 / 2 * 2 + 1 - 1"), 32, 'Test 99');
test(calculate(" 987654321 - 123456789 + 98765 * 43210 / 54321"), 864276095, 'Test 100');
test(calculate("    1234 + 5678 * 90 / 100 - 12345 / 5    "), 3875, 'Test 101');
test(calculate(" 3 + 8 * 10 / 5 - 2 "), 17, 'Test 102');
test(calculate(" 7 + 3 * [ 10 / 2 ] - 5"), 17, 'Test 103');
test(calculate("  100 * 2 / 5 + 3 * [20 - 15]  "), 85, 'Test 104');
test(calculate(" 10 * 20 - 5 * 4 + 3 * 2 - 1 / 1 + 8 * 2"), 201, 'Test 105');
test(calculate("  8  *  [  4  /  2  ]  +  12  -  6"), 22, 'Test 106');
test(calculate(" 99 + 99 * 99 / 99 - 99 "), 99, 'Test 107');
test(calculate("100 - 50 + 25 - 12 + 6 - 3 + 1"), 67, 'Test 108');
test(calculate("1000 * 2 + 300 - 50 / 2"), 2275, 'Test 109');
test(calculate("100 + 200 * [300 - 150 / 50] - 400"), 59697, 'Test 110');
test(calculate("333 * 111 + 222 * 444 / 666 - 777 + 888"), 37222, 'Test 111');
test(calculate("7 + 3 * [10 / 2] - 1"), 21, 'Test 112');
test(calculate("2 * 3 + 4 * 5 - 6 / 2 + 7"), 30, 'Test 113');
test(calculate("[1 + 2] * 3 / 4 + 5 - 6"), 1, 'Test 114');
test(calculate(" 123 + 456 * 789 / 321 "), 1243, 'Test 115');
test(calculate("3 + 5 * 2 / 2 - 1"), 7, 'Test 116');
test(calculate("   1000 + 2000 * 3000 - 4000 / 5000 + 6000 - 7000 * 8000 / 9000  "), 6000778, 'Test 117');
test(calculate(" 1000 + 2000 - 3000 * [4000 / 5000] + 6000 - 7000 * [8000 / 9000]"), 378, 'Test 118');
test(calculate("10 * 10 - 9 * 9 + 8 * 8 - 7 * 7 + 6 * 6"), 70, 'Test 119');
test(calculate(" 1000 * 2000 - 3000 + 4000 / 5000 * 6000"), 1997000, 'Test 120');
test(calculate(" 2147483647 + 1 * 2 - 3 / 4"), 2147483649, 'Test 121');
test(calculate(" [10 + [20 + [30 + [40 + [50 + [60 + [70 + [80 + [90 + 100]]]]]]]] "), 550, 'Test 122');
test(calculate(" 100 + 200 - 300 * 400 / 500 + 600 * 700 / 800"), 585, 'Test 123');
test(calculate(" 4 + 5 * 6 / 3 - 7 + 8 * 2"), 23, 'Test 124');
test(calculate(" 1 + 2 * [ 3 + 4 ] / 2 - 1 "), 8, 'Test 125');
test(calculate(" 1234 + 5678 - 91011 * 121314 / 151617"), -65909, 'Test 126');
test(calculate(" 999 + 1 * 1000 - 500 / 2 "), 1749, 'Test 127');
test(calculate(" 100 * 2 + 3 - 4 / 2 "), 201, 'Test 128');
test(calculate(" 0 + 0 * 0 - 0 / 1"), 0, 'Test 129');
test(calculate(" 7 + 14 / 7 - 3 + 6 * 2"), 18, 'Test 130');
test(calculate("0 * 1 + 2 - 3 / 4 * 5"), 2, 'Test 131');
test(calculate(" 123 + 456 * 789 / 101 - 234"), 3451, 'Test 132');
test(calculate(" 12345 + 67890 - 54321 / 1234 * 5678  "), -169597, 'Test 133');
test(calculate(" 123 + 456 - 789 * 1011 / 1213"), -78, 'Test 134');
test(calculate("   3   *   5   /   15   +   10   -   7   "), 4, 'Test 135');
test(calculate(" 100 - 50 + 25 * 4 / 2 "), 100, 'Test 136');
test(calculate("10 + 20 * [30 / 10] - 5"), 65, 'Test 137');
test(calculate(" 99999 + 88888 - 77777 * 66666 / 55555"), 95555, 'Test 138');
test(calculate(" 100 + 200 * [300 / 50] - 600 + 700 * 800 / 900 "), 1322, 'Test 139');
test(calculate("999999 / 3 + 999999 / 3 - 999999 / 3"), 333333, 'Test 140');
test(calculate(" 1000 / [ 500 / 250 ] - 250 + 125 * [ 500 / 250 ]"), 0, 'Test 141');
test(calculate(" 2 * 3 + 4 * 5 - 6 / 3 + 8"), 32, 'Test 142');
test(calculate("987654 * 321 / 1000 + 123456 - 789012 / 3"), 177488, 'Test 143');
test(calculate(" 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 "), 3628800, 'Test 144');
test(calculate("   42  *   2   -   5   /   1   +   3   "), 82, 'Test 145');
test(calculate(" 2 * [ 3 + 5 ] * 4"), 26, 'Test 146');
test(calculate("30 / 5 * 2 - 1 + 4 * 8 - 3"), 40, 'Test 147');
test(calculate(" 1 + [2 + [3 + [4 + [5 + 6]]]]"), 21, 'Test 148');
test(calculate(" 123456789 + 987654321 - 111111111 * 222222222 / 333333333"), 1037037036, 'Test 149');
test(calculate("123 + 456 * 789 / 101 - 234"), 3451, 'Test 150');
test(calculate("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10"), 55, 'Test 151');
test(calculate(" 1000 / [ 25 / 5 ] + 50 - 20"), 38, 'Test 152');
test(calculate(" 5 + 3 * [2 - 8] + 4 / 2"), 5, 'Test 153');
test(calculate("987654321 - 123456789 + 111111111 * 222222222 / 333333333  "), 938271606, 'Test 154');
test(calculate(" 8 / 3 + 4 * [ 5 - 3 ] / 2 "), 21, 'Test 155');
test(calculate(" 5 * 6 + 20 / 4 - 8"), 27, 'Test 156');
test(calculate(" 3 + 8 * [ 4 - 2 ] / 2"), 34, 'Test 157');
test(calculate(" 5 + 3 * [ 20 / 4 ] "), 20, 'Test 158');
test(calculate("1000000 + 500000 * 2 - 250000 / 5 + 125000"), 2075000, 'Test 159');
test(calculate("2 + 3 * 4 - 5 / 2 + 6 * 7 - 8 / 4"), 52, 'Test 160');
test(calculate(" 1000 - 500 + 250 * 2 - 125 "), 875, 'Test 161');
test(calculate("0 * 0 + 0 / 1 + 100 - 50"), 50, 'Test 162');
test(calculate(" 10 + 20 + 30 + 40 + 50 - [ 10 * 5 ]"), 100, 'Test 163');
test(calculate(" 7 * 8 - 3 + 2 * 4 "), 61, 'Test 164');
test(calculate("9 * 3 + 2 - 1 / 1 + 8 * 2"), 44, 'Test 165');
test(calculate("50 * 50 - 50 / 50 + 50 * 50 - 50 / 50"), 4998, 'Test 166');
test(calculate(" 3 + [2 * [2 + [2 * [2 + 2]]]]"), 13, 'Test 167');
test(calculate("100 * 2 + 12 / 3 - 50"), 154, 'Test 168');
test(calculate("3 + 33 + 333 + 3333 + 33333 + 333333 + 3333333 + 33333333 + 333333333"), 370370367, 'Test 169');
test(calculate("1 + 2 * 3 + 4 / 2 - 5"), 4, 'Test 170');
test(calculate(" 3 + 5 * [ 2 + 8 ] / 4 - 2 "), 13, 'Test 171');

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
