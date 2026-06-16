// Test: 2232. Minimize Result By Adding Parentheses To Expression
// 134 test cases from LeetCodeDataset
// Run: node test.js

const { minimizeResult } = require("./solution");

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

console.log("\n2232. Minimize Result By Adding Parentheses To Expression\n");

test(minimizeResult("56+78"), [56+78], 'Test 1');
test(minimizeResult("5+6"), [5+6], 'Test 2');
test(minimizeResult("3+8"), [3+8], 'Test 3');
test(minimizeResult("111+222"), 1[11+22]2, 'Test 4');
test(minimizeResult("3+2"), [3+2], 'Test 5');
test(minimizeResult("5+678"), [5+67]8, 'Test 6');
test(minimizeResult("247+38"), 2[47+38], 'Test 7');
test(minimizeResult("3+12"), [3+1]2, 'Test 8');
test(minimizeResult("11+11"), 1[1+1]1, 'Test 9');
test(minimizeResult("8+9"), [8+9], 'Test 10');
test(minimizeResult("1+2"), [1+2], 'Test 11');
test(minimizeResult("123+456"), 1[23+45]6, 'Test 12');
test(minimizeResult("9+9"), [9+9], 'Test 13');
test(minimizeResult("12+34"), 1[2+3]4, 'Test 14');
test(minimizeResult("88+11"), 8[8+1]1, 'Test 15');
test(minimizeResult("999+999"), [999+999], 'Test 16');
test(minimizeResult("1+9"), [1+9], 'Test 17');
test(minimizeResult("333+444"), [333+444], 'Test 18');
test(minimizeResult("555+666"), [555+666], 'Test 19');
test(minimizeResult("9+99"), [9+99], 'Test 20');
test(minimizeResult("9+1"), [9+1], 'Test 21');
test(minimizeResult("5+9"), [5+9], 'Test 22');
test(minimizeResult("1+1"), [1+1], 'Test 23');
test(minimizeResult("10+1"), 1[0+1], 'Test 24');
test(minimizeResult("12+3"), 1[2+3], 'Test 25');
test(minimizeResult("555+555"), [555+555], 'Test 26');
test(minimizeResult("123+4"), 1[23+4], 'Test 27');
test(minimizeResult("9+876"), [9+87]6, 'Test 28');
test(minimizeResult("12345+6789"), 1[2345+6789], 'Test 29');
test(minimizeResult("56+789"), [56+789], 'Test 30');
test(minimizeResult("1111+2222"), 1[111+222]2, 'Test 31');
test(minimizeResult("123+4567"), 1[23+456]7, 'Test 32');
test(minimizeResult("6666+7777"), [6666+7777], 'Test 33');
test(minimizeResult("9999+1"), 9[999+1], 'Test 34');
test(minimizeResult("12+345"), 1[2+34]5, 'Test 35');
test(minimizeResult("567+89"), [567+89], 'Test 36');
test(minimizeResult("8+7654"), [8+765]4, 'Test 37');
test(minimizeResult("987+654"), [987+654], 'Test 38');
test(minimizeResult("33+44"), [33+44], 'Test 39');
test(minimizeResult("1234+56789"), 1[234+5678]9, 'Test 40');
test(minimizeResult("7000+8000"), [7000+8]000, 'Test 41');
test(minimizeResult("99+11"), 9[9+1]1, 'Test 42');
test(minimizeResult("333+666"), [333+666], 'Test 43');
test(minimizeResult("345+678"), [345+678], 'Test 44');
test(minimizeResult("50+50"), [50+5]0, 'Test 45');
test(minimizeResult("123+45"), 1[23+45], 'Test 46');
test(minimizeResult("5+55"), [5+5]5, 'Test 47');
test(minimizeResult("678+9"), 6[78+9], 'Test 48');
test(minimizeResult("12+345678"), 1[2+34]5678, 'Test 49');
test(minimizeResult("900000+100000"), [900000+1]00000, 'Test 50');
test(minimizeResult("10+20"), [10+2]0, 'Test 51');
test(minimizeResult("12+3456789"), 1[2+34]56789, 'Test 52');
test(minimizeResult("123456+789012"), 1[23456+78901]2, 'Test 53');
test(minimizeResult("99+88"), [99+88], 'Test 54');
test(minimizeResult("56+7890"), [56+789]0, 'Test 55');
test(minimizeResult("9+1234"), [9+123]4, 'Test 56');
test(minimizeResult("55555+66666"), [55555+66666], 'Test 57');
test(minimizeResult("1234+56"), 1[234+56], 'Test 58');
test(minimizeResult("678+90123"), [678+9012]3, 'Test 59');
test(minimizeResult("44+555"), [44+55]5, 'Test 60');
test(minimizeResult("9+87654321"), [9+8765432]1, 'Test 61');
test(minimizeResult("2222+3333"), 2[222+333]3, 'Test 62');
test(minimizeResult("1+999"), [1+99]9, 'Test 63');
test(minimizeResult("9876+5432"), [9876+5432], 'Test 64');
test(minimizeResult("4321+9"), 43[21+9], 'Test 65');
test(minimizeResult("5678+910"), [5678+91]0, 'Test 66');
test(minimizeResult("987654+321098"), [987654+321098], 'Test 67');
test(minimizeResult("100000+200000"), [100000+2]00000, 'Test 68');
test(minimizeResult("3000+4000"), [3000+4]000, 'Test 69');
test(minimizeResult("300000+400000"), [300000+4]00000, 'Test 70');
test(minimizeResult("100+100"), [100+1]00, 'Test 71');
test(minimizeResult("10+999"), 1[0+9]99, 'Test 72');
test(minimizeResult("500000+600000"), [500000+6]00000, 'Test 73');
test(minimizeResult("5432+1"), 543[2+1], 'Test 74');
test(minimizeResult("1+9999"), [1+999]9, 'Test 75');
test(minimizeResult("3456+789"), 3[456+789], 'Test 76');
test(minimizeResult("5555+666"), 5[555+666], 'Test 77');
test(minimizeResult("123+6"), 1[23+6], 'Test 78');
test(minimizeResult("8888+9999"), [8888+9999], 'Test 79');
test(minimizeResult("213+456"), [213+456], 'Test 80');
test(minimizeResult("23+4567"), [23+456]7, 'Test 81');
test(minimizeResult("100+200"), [100+2]00, 'Test 82');
test(minimizeResult("9+8765432"), [9+876543]2, 'Test 83');
test(minimizeResult("111+111"), 1[11+11]1, 'Test 84');
test(minimizeResult("77777+88888"), [77777+88888], 'Test 85');
test(minimizeResult("99+1"), 9[9+1], 'Test 86');
test(minimizeResult("3+9999"), [3+999]9, 'Test 87');
test(minimizeResult("234+567"), [234+567], 'Test 88');
test(minimizeResult("2+9999"), [2+999]9, 'Test 89');
test(minimizeResult("4321+876"), 4[321+876], 'Test 90');
test(minimizeResult("9000+1000"), [9000+1]000, 'Test 91');
test(minimizeResult("11+111"), 1[1+11]1, 'Test 92');
test(minimizeResult("5+6789"), [5+678]9, 'Test 93');
test(minimizeResult("1+23456"), [1+2]3456, 'Test 94');
test(minimizeResult("1098+231"), 1[098+23]1, 'Test 95');
test(minimizeResult("999+1"), 9[99+1], 'Test 96');
test(minimizeResult("4444+5555"), [4444+5555], 'Test 97');
test(minimizeResult("55+55"), [55+55], 'Test 98');
test(minimizeResult("777+888"), [777+888], 'Test 99');
test(minimizeResult("98765+4321"), 9[8765+432]1, 'Test 100');
test(minimizeResult("654+321"), 6[54+32]1, 'Test 101');
test(minimizeResult("77+88"), [77+88], 'Test 102');
test(minimizeResult("33333+44444"), [33333+44444], 'Test 103');
test(minimizeResult("222+333"), 2[22+33]3, 'Test 104');
test(minimizeResult("2+987654321"), [2+98765432]1, 'Test 105');
test(minimizeResult("123+45678"), 1[23+4567]8, 'Test 106');
test(minimizeResult("9+8765"), [9+876]5, 'Test 107');
test(minimizeResult("5678+123"), 5[678+123], 'Test 108');
test(minimizeResult("1234+567"), 1[234+567], 'Test 109');
test(minimizeResult("234+56789"), [234+5678]9, 'Test 110');
test(minimizeResult("987654+321"), 987[654+32]1, 'Test 111');
test(minimizeResult("876+54"), [876+54], 'Test 112');
test(minimizeResult("123456+789"), 1[23456+789], 'Test 113');
test(minimizeResult("2000+1000"), [2000+1]000, 'Test 114');
test(minimizeResult("99999+11111"), 9[9999+1111]1, 'Test 115');
test(minimizeResult("9876+543"), [9876+543], 'Test 116');
test(minimizeResult("5000+6000"), [5000+6]000, 'Test 117');
test(minimizeResult("789+12"), 7[89+12], 'Test 118');
test(minimizeResult("1111+1111"), 1[111+111]1, 'Test 119');
test(minimizeResult("700000+800000"), [700000+8]00000, 'Test 120');
test(minimizeResult("55+5"), 5[5+5], 'Test 121');
test(minimizeResult("1+99999"), [1+9999]9, 'Test 122');
test(minimizeResult("11+22"), 1[1+2]2, 'Test 123');
test(minimizeResult("321+654"), [321+654], 'Test 124');
test(minimizeResult("55+66"), [55+66], 'Test 125');
test(minimizeResult("56789+12"), 5[6789+12], 'Test 126');
test(minimizeResult("1000+2000"), [1000+2]000, 'Test 127');
test(minimizeResult("1234+5678"), 1[234+5678], 'Test 128');
test(minimizeResult("11111+22222"), 1[1111+2222]2, 'Test 129');
test(minimizeResult("6+66"), [6+6]6, 'Test 130');
test(minimizeResult("54321+6789"), 5[4321+6789], 'Test 131');
test(minimizeResult("123+456789"), 1[23+456]789, 'Test 132');
test(minimizeResult("54+32"), 5[4+3]2, 'Test 133');
test(minimizeResult("21+89"), [21+89], 'Test 134');

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
