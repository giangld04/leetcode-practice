// Test: 972. Equal Rational Numbers
// 169 test cases from LeetCodeDataset
// Run: node test.js

const { isRationalEqual } = require("./solution");

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

console.log("\n972. Equal Rational Numbers\n");

test(isRationalEqual("0.123", "0.123"), true, 'Test 1');
test(isRationalEqual("0.[9]", "1"), true, 'Test 2');
test(isRationalEqual("0.0[0]", "0"), true, 'Test 3');
test(isRationalEqual("0.9[99]", "1.0"), true, 'Test 4');
test(isRationalEqual("0.00[1]", "0.01"), false, 'Test 5');
test(isRationalEqual("0.", "0.[0]"), true, 'Test 6');
test(isRationalEqual("0.[52]", "0.5[25]"), true, 'Test 7');
test(isRationalEqual("0.5", "0.5"), true, 'Test 8');
test(isRationalEqual("1.0[0]", "1.0"), true, 'Test 9');
test(isRationalEqual("0.1666[6]", "0.166[66]"), true, 'Test 10');
test(isRationalEqual("123.", "123"), true, 'Test 11');
test(isRationalEqual("0.[123]", "0.123123"), false, 'Test 12');
test(isRationalEqual("0.5", "0.50000"), true, 'Test 13');
test(isRationalEqual("123.456", "123.456[0]"), true, 'Test 14');
test(isRationalEqual("3.[14]", "3.141414"), false, 'Test 15');
test(isRationalEqual("0.", "0.0[0]"), true, 'Test 16');
test(isRationalEqual("0.1[1]", "0.1111"), false, 'Test 17');
test(isRationalEqual("3.14159", "3.14159"), true, 'Test 18');
test(isRationalEqual("0.0[1]", "0.0101"), false, 'Test 19');
test(isRationalEqual("0.9[9]", "1."), true, 'Test 20');
test(isRationalEqual("2.5[0]", "2.5"), true, 'Test 21');
test(isRationalEqual("1.", "1.0"), true, 'Test 22');
test(isRationalEqual("0.[1]", "0.1111[1]"), true, 'Test 23');
test(isRationalEqual("123.0001", "123.0[001]"), false, 'Test 24');
test(isRationalEqual("0.1[9]", "0.2"), true, 'Test 25');
test(isRationalEqual("0.0[5]", "0.050505"), false, 'Test 26');
test(isRationalEqual("0.[123]", "0.123[123]"), true, 'Test 27');
test(isRationalEqual("1[0]", "1.0"), true, 'Test 28');
test(isRationalEqual("3.[3]", "3.333333[3]"), true, 'Test 29');
test(isRationalEqual("0.[999]", "1"), true, 'Test 30');
test(isRationalEqual("0.[0]", "0.000000000000000000000000000000000000000000000000000000000000000000000"), true, 'Test 31');
test(isRationalEqual("0.3333[3]", "1/3"), Error: could not convert string to float: '1/3', 'Test 32');
test(isRationalEqual("0.[111]", "0.111111111111111"), true, 'Test 33');
test(isRationalEqual("0.[111]", "0.111[111]"), true, 'Test 34');
test(isRationalEqual("0.[123456789]", "0.123456789[123456789]"), Error: list index out of range, 'Test 35');
test(isRationalEqual("5.0[00]", "5.0"), true, 'Test 36');
test(isRationalEqual("0.[12]", "0.121212121212"), true, 'Test 37');
test(isRationalEqual("0.[1]", "0.11111111111111111111"), true, 'Test 38');
test(isRationalEqual("999.[9]", "1000"), true, 'Test 39');
test(isRationalEqual("3.14159[26]", "3.1415926[26]"), true, 'Test 40');
test(isRationalEqual("0.00001[0]", "0.00001"), true, 'Test 41');
test(isRationalEqual("0.0[0001]", "0.0001[0001]"), false, 'Test 42');
test(isRationalEqual("0.0[0]", "0.0"), true, 'Test 43');
test(isRationalEqual("0.1[234]", "0.1234234"), false, 'Test 44');
test(isRationalEqual("999999.[9]", "1000000."), true, 'Test 45');
test(isRationalEqual("0.0001[00001]", "0.000100001[00001]"), Error: list index out of range, 'Test 46');
test(isRationalEqual("0.[012]", "0.012012012"), true, 'Test 47');
test(isRationalEqual("0.[0123456789]", "0.0123456789[0123456789]"), Error: list index out of range, 'Test 48');
test(isRationalEqual("3.141592653589[793238462643]", "3.141592653589793238462643793238462643"), Error: list index out of range, 'Test 49');
test(isRationalEqual("0.0[9]", "0.1"), true, 'Test 50');
test(isRationalEqual("4.5[00]", "4.5"), true, 'Test 51');
test(isRationalEqual("999.999[9]", "1000.0"), true, 'Test 52');
test(isRationalEqual("123.123[123]", "123.123123123"), true, 'Test 53');
test(isRationalEqual("2.345[678]", "2.345678678"), true, 'Test 54');
test(isRationalEqual("2.5[9]", "2.6"), true, 'Test 55');
test(isRationalEqual("123456789.999[9]", "123456790.0"), true, 'Test 56');
test(isRationalEqual("0.[1]", "0.1111111111111111"), true, 'Test 57');
test(isRationalEqual("0.123456[789]", "0.123456789789"), true, 'Test 58');
test(isRationalEqual("0.000[999]", "0.001"), true, 'Test 59');
test(isRationalEqual("123.4567[8901]", "123.45678901[8901]"), true, 'Test 60');
test(isRationalEqual("0.[001]", "0.001001"), false, 'Test 61');
test(isRationalEqual("0.1[01]", "0.101[01]"), true, 'Test 62');
test(isRationalEqual("0.00001[0]", "0.00001[00]"), true, 'Test 63');
test(isRationalEqual("0.111[1]", "0.1111[1]"), true, 'Test 64');
test(isRationalEqual("0.0[123]", "0.0123123123"), true, 'Test 65');
test(isRationalEqual("0.1[2]", "0.121212"), false, 'Test 66');
test(isRationalEqual("0.123[456]", "0.123456456456"), true, 'Test 67');
test(isRationalEqual("0.[1234]", "0.123412341234"), true, 'Test 68');
test(isRationalEqual("0.[01]", "0.010101"), false, 'Test 69');
test(isRationalEqual("12.[34]", "12.3434[34]"), true, 'Test 70');
test(isRationalEqual("999.999[9]", "1000"), true, 'Test 71');
test(isRationalEqual("0.[111]", "0.1111[111]"), true, 'Test 72');
test(isRationalEqual("1.0[0]", "1"), true, 'Test 73');
test(isRationalEqual("100.[001]", "100.001001001"), true, 'Test 74');
test(isRationalEqual("0.123456789[123456789]", "0.123456789123456789[123456789]"), Error: list index out of range, 'Test 75');
test(isRationalEqual("0.0[000001]", "0.000001[000001]"), Error: list index out of range, 'Test 76');
test(isRationalEqual("0.[0]", "0"), true, 'Test 77');
test(isRationalEqual("0.123[456]", "0.123456456"), true, 'Test 78');
test(isRationalEqual("0.12[345]", "0.12345[345]"), true, 'Test 79');
test(isRationalEqual("100.[0]", "100"), true, 'Test 80');
test(isRationalEqual("1000.0001[0]", "1000.0001"), true, 'Test 81');
test(isRationalEqual("0.000[001]", "0.000001001001001001001001001001001001001001001001001001001001001"), true, 'Test 82');
test(isRationalEqual("0.1[2345]", "0.123452345"), true, 'Test 83');
test(isRationalEqual("1.23[456]", "1.23456456"), false, 'Test 84');
test(isRationalEqual("3.14159[265359]", "3.14159265359[265359]"), Error: list index out of range, 'Test 85');
test(isRationalEqual("0.5555[5]", "0.5556[5]"), false, 'Test 86');
test(isRationalEqual("0.[999]", "1.0"), true, 'Test 87');
test(isRationalEqual("123456789.000[0001]", "123456789.0000001000100010001"), true, 'Test 88');
test(isRationalEqual("123.[456]", "123.456456"), false, 'Test 89');
test(isRationalEqual("0.9[99]", "1"), true, 'Test 90');
test(isRationalEqual("0.[999]", "1.000"), true, 'Test 91');
test(isRationalEqual("5.0[5]", "5.05[5]"), true, 'Test 92');
test(isRationalEqual("1.[0]", "1"), true, 'Test 93');
test(isRationalEqual("0.1[1]", "0.1111111111111111"), true, 'Test 94');
test(isRationalEqual("0.[12]", "0.1212121212121212"), true, 'Test 95');
test(isRationalEqual("0.1234[567]", "0.1234567567"), true, 'Test 96');
test(isRationalEqual("123456789.000000[000000]", "123456789.0"), Error: list index out of range, 'Test 97');
test(isRationalEqual("0.1[0]", "0.1"), true, 'Test 98');
test(isRationalEqual("0.000[0]", "0"), true, 'Test 99');
test(isRationalEqual("0.5[0]", "0.5"), true, 'Test 100');
test(isRationalEqual("0.000[009]", "0.000009009"), true, 'Test 101');
test(isRationalEqual("0.[5]", "0.5[5]"), true, 'Test 102');
test(isRationalEqual("0.[3]", "0.333[3]"), true, 'Test 103');
test(isRationalEqual("0.[1]", "0.111111111111111111111111111111111111111111111111111111111111111111111"), true, 'Test 104');
test(isRationalEqual("0.0000001[0]", "0.0000001"), true, 'Test 105');
test(isRationalEqual("0.00[123]", "0.00123123123"), true, 'Test 106');
test(isRationalEqual("0.0[999]", "0.1"), true, 'Test 107');
test(isRationalEqual("0.[01]", "0.01010101"), true, 'Test 108');
test(isRationalEqual("0.1[2345]", "0.12345[2345]"), true, 'Test 109');
test(isRationalEqual("0.1[3]", "0.133333333333333333333333333333333333333333333333333333333333333333333"), true, 'Test 110');
test(isRationalEqual("999.[9]", "1000.0"), true, 'Test 111');
test(isRationalEqual("0.12345678[9]", "0.12345678989"), true, 'Test 112');
test(isRationalEqual("10.0[000]", "10.0"), true, 'Test 113');
test(isRationalEqual("123.[0]", "123"), true, 'Test 114');
test(isRationalEqual("100.0001[0]", "100.0001"), true, 'Test 115');
test(isRationalEqual("0.9[9]", "1"), true, 'Test 116');
test(isRationalEqual("3.14159[26535]", "3.1415926535[26535]"), Error: list index out of range, 'Test 117');
test(isRationalEqual("0.999[999]", "1.000"), true, 'Test 118');
test(isRationalEqual("0.0000[1]", "0.0001"), false, 'Test 119');
test(isRationalEqual("1.000[0]", "1"), true, 'Test 120');
test(isRationalEqual("0.0[000]", "0"), true, 'Test 121');
test(isRationalEqual("0.[111]", "0.11111111"), false, 'Test 122');
test(isRationalEqual("0.0[001]", "0.0001[001]"), true, 'Test 123');
test(isRationalEqual("0.00[1]", "0.001[0]"), false, 'Test 124');
test(isRationalEqual("42.[0]", "42.0"), true, 'Test 125');
test(isRationalEqual("0.000[9]", "0.001"), true, 'Test 126');
test(isRationalEqual("0.0000[0001]", "0.000000010001"), true, 'Test 127');
test(isRationalEqual("0.000[00001]", "0.00000000001"), Error: list index out of range, 'Test 128');
test(isRationalEqual("0.1[6]", "0.166666666666"), true, 'Test 129');
test(isRationalEqual("3.0000[0]", "3.0"), true, 'Test 130');
test(isRationalEqual("0.000[001]", "0.000001[001]"), true, 'Test 131');
test(isRationalEqual("1.9[9]", "2.0"), true, 'Test 132');
test(isRationalEqual("123.456[789]", "123.456789789789"), true, 'Test 133');
test(isRationalEqual("0.12[34]", "0.12343434"), false, 'Test 134');
test(isRationalEqual("0.[00009]", "0.00009[00009]"), Error: list index out of range, 'Test 135');
test(isRationalEqual("0.5[00]", "0.5"), true, 'Test 136');
test(isRationalEqual("0.999[9]", "1.0"), true, 'Test 137');
test(isRationalEqual("0.999[9]", "0.999999[999]"), true, 'Test 138');
test(isRationalEqual("123.456[789012]", "123.456789012789012"), Error: list index out of range, 'Test 139');
test(isRationalEqual("0.999[9]", "1"), true, 'Test 140');
test(isRationalEqual("1.0[0]", "1.00[0]"), true, 'Test 141');
test(isRationalEqual("123.456[789]", "123.456789789"), true, 'Test 142');
test(isRationalEqual("1.234[567]", "1.234567[567]"), true, 'Test 143');
test(isRationalEqual("0.[010]", "0.0101010"), false, 'Test 144');
test(isRationalEqual("0.1234[5678]", "0.12345678[5678]"), true, 'Test 145');
test(isRationalEqual("0.000[1]", "0.0001[0]"), false, 'Test 146');
test(isRationalEqual("0.0001[0001]", "0.000100010001"), true, 'Test 147');
test(isRationalEqual("123.456[7890]", "123.45678907890"), true, 'Test 148');
test(isRationalEqual("0.[01]", "0.0101010101"), true, 'Test 149');
test(isRationalEqual("0.999999[9]", "1.0"), true, 'Test 150');
test(isRationalEqual("0.[001]", "0.001[001]"), true, 'Test 151');
test(isRationalEqual("0.[12]", "0.121212"), false, 'Test 152');
test(isRationalEqual("0.0[99]", "0.1"), true, 'Test 153');
test(isRationalEqual("12.[34]", "12.34[34]"), true, 'Test 154');
test(isRationalEqual("0.00[9]", "0.01"), true, 'Test 155');
test(isRationalEqual("0.9[999]", "1"), true, 'Test 156');
test(isRationalEqual("0.1[234]", "0.1234[234]"), true, 'Test 157');
test(isRationalEqual("5.000[0]", "5.0"), true, 'Test 158');
test(isRationalEqual("100.0000[9]", "100.0001"), true, 'Test 159');
test(isRationalEqual("1234.5678[9]", "1234.5679[0]"), true, 'Test 160');
test(isRationalEqual("0.5[5]", "0.55[55]"), true, 'Test 161');
test(isRationalEqual("1.234[5678]", "1.23456785678"), true, 'Test 162');
test(isRationalEqual("123.456[789]", "123.456789[789]"), true, 'Test 163');
test(isRationalEqual("0.[0]", "0.0"), true, 'Test 164');
test(isRationalEqual("0.00[000]", "0.0"), true, 'Test 165');
test(isRationalEqual("0.123[456]", "0.123456[456]"), true, 'Test 166');
test(isRationalEqual("0.0000[00001]", "0.0000000010000100001000010000100001000010000100001000010000100001"), Error: list index out of range, 'Test 167');
test(isRationalEqual("0.001[002]", "0.001002[002]"), true, 'Test 168');
test(isRationalEqual("2.4[9]", "2.5"), true, 'Test 169');

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
