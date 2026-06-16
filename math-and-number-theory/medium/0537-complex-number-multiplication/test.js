// Test: 537. Complex Number Multiplication
// 148 test cases from LeetCodeDataset
// Run: node test.js

const { complexNumberMultiply } = require("./solution");

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

console.log("\n537. Complex Number Multiplication\n");

test(complexNumberMultiply("-50-50i", "-50+50i"), Error: invalid literal for int[] with base 10: '-50-50', 'Test 1');
test(complexNumberMultiply("75+25i", "25-75i"), Error: invalid literal for int[] with base 10: '25-75', 'Test 2');
test(complexNumberMultiply("100+0i", "0+100i"), 0+10000i, 'Test 3');
test(complexNumberMultiply("7+-8i", "-9+2i"), -47+86i, 'Test 4');
test(complexNumberMultiply("-1+2i", "-3-4i"), Error: invalid literal for int[] with base 10: '-3-4', 'Test 5');
test(complexNumberMultiply("-50+-50i", "50+50i"), 0+-5000i, 'Test 6');
test(complexNumberMultiply("-100+100i", "100-100i"), Error: invalid literal for int[] with base 10: '100-100', 'Test 7');
test(complexNumberMultiply("1+-1i", "1+-1i"), 0+-2i, 'Test 8');
test(complexNumberMultiply("1+1i", "1+1i"), 0+2i, 'Test 9');
test(complexNumberMultiply("50-50i", "50+50i"), Error: invalid literal for int[] with base 10: '50-50', 'Test 10');
test(complexNumberMultiply("-50-50i", "50+50i"), Error: invalid literal for int[] with base 10: '-50-50', 'Test 11');
test(complexNumberMultiply("-1+1i", "1-1i"), Error: invalid literal for int[] with base 10: '1-1', 'Test 12');
test(complexNumberMultiply("-99+99i", "99-99i"), Error: invalid literal for int[] with base 10: '99-99', 'Test 13');
test(complexNumberMultiply("2+3i", "3+4i"), -6+17i, 'Test 14');
test(complexNumberMultiply("-100+-100i", "100+100i"), 0+-20000i, 'Test 15');
test(complexNumberMultiply("50+50i", "50+50i"), 0+5000i, 'Test 16');
test(complexNumberMultiply("33+-50i", "-20+77i"), 3190+3541i, 'Test 17');
test(complexNumberMultiply("0+0i", "0+0i"), 0+0i, 'Test 18');
test(complexNumberMultiply("0+0i", "5+6i"), 0+0i, 'Test 19');
test(complexNumberMultiply("100+100i", "-100-100i"), Error: invalid literal for int[] with base 10: '-100-100', 'Test 20');
test(complexNumberMultiply("3+4i", "-4+3i"), -24+-7i, 'Test 21');
test(complexNumberMultiply("-1+2i", "3+-4i"), 5+10i, 'Test 22');
test(complexNumberMultiply("99+99i", "-99-99i"), Error: invalid literal for int[] with base 10: '-99-99', 'Test 23');
test(complexNumberMultiply("2+3i", "3+2i"), 0+13i, 'Test 24');
test(complexNumberMultiply("10+-10i", "-10+10i"), 0+200i, 'Test 25');
test(complexNumberMultiply("100+100i", "-100+-100i"), 0+-20000i, 'Test 26');
test(complexNumberMultiply("-1+1i", "1+1i"), -2+0i, 'Test 27');
test(complexNumberMultiply("-50+50i", "50-50i"), Error: invalid literal for int[] with base 10: '50-50', 'Test 28');
test(complexNumberMultiply("-12+34i", "56-78i"), Error: invalid literal for int[] with base 10: '56-78', 'Test 29');
test(complexNumberMultiply("-1+-1i", "-1+-1i"), 0+2i, 'Test 30');
test(complexNumberMultiply("-123+456i", "789-1011i"), Error: invalid literal for int[] with base 10: '789-1011', 'Test 31');
test(complexNumberMultiply("12+34i", "56+78i"), -1980+2840i, 'Test 32');
test(complexNumberMultiply("25+75i", "-75+25i"), -3750+-5000i, 'Test 33');
test(complexNumberMultiply("99+99i", "1-1i"), Error: invalid literal for int[] with base 10: '1-1', 'Test 34');
test(complexNumberMultiply("23+77i", "-45-67i"), Error: invalid literal for int[] with base 10: '-45-67', 'Test 35');
test(complexNumberMultiply("-66-88i", "88+66i"), Error: invalid literal for int[] with base 10: '-66-88', 'Test 36');
test(complexNumberMultiply("0+50i", "0-50i"), Error: invalid literal for int[] with base 10: '0-50', 'Test 37');
test(complexNumberMultiply("-45+35i", "35-45i"), Error: invalid literal for int[] with base 10: '35-45', 'Test 38');
test(complexNumberMultiply("-50+25i", "50-25i"), Error: invalid literal for int[] with base 10: '50-25', 'Test 39');
test(complexNumberMultiply("-50+50i", "50+50i"), -5000+0i, 'Test 40');
test(complexNumberMultiply("50+50i", "50-50i"), Error: invalid literal for int[] with base 10: '50-50', 'Test 41');
test(complexNumberMultiply("50-50i", "-50+50i"), Error: invalid literal for int[] with base 10: '50-50', 'Test 42');
test(complexNumberMultiply("-42+0i", "0-42i"), Error: invalid literal for int[] with base 10: '0-42', 'Test 43');
test(complexNumberMultiply("99-99i", "99+99i"), Error: invalid literal for int[] with base 10: '99-99', 'Test 44');
test(complexNumberMultiply("1+0i", "1+0i"), 1+0i, 'Test 45');
test(complexNumberMultiply("-30+-40i", "20-50i"), Error: invalid literal for int[] with base 10: '20-50', 'Test 46');
test(complexNumberMultiply("-100+0i", "0-100i"), Error: invalid literal for int[] with base 10: '0-100', 'Test 47');
test(complexNumberMultiply("0+0i", "100+100i"), 0+0i, 'Test 48');
test(complexNumberMultiply("100+0i", "-100+0i"), -10000+0i, 'Test 49');
test(complexNumberMultiply("-25+25i", "25+25i"), -1250+0i, 'Test 50');
test(complexNumberMultiply("42+0i", "0+42i"), 0+1764i, 'Test 51');
test(complexNumberMultiply("100-100i", "100+100i"), Error: invalid literal for int[] with base 10: '100-100', 'Test 52');
test(complexNumberMultiply("0+1i", "1+0i"), 0+1i, 'Test 53');
test(complexNumberMultiply("1011+789i", "-456-123i"), Error: invalid literal for int[] with base 10: '-456-123', 'Test 54');
test(complexNumberMultiply("0-1i", "0+1i"), Error: invalid literal for int[] with base 10: '0-1', 'Test 55');
test(complexNumberMultiply("0+50i", "50+0i"), 0+2500i, 'Test 56');
test(complexNumberMultiply("-50+0i", "0+-50i"), 0+2500i, 'Test 57');
test(complexNumberMultiply("50+0i", "-50+0i"), -2500+0i, 'Test 58');
test(complexNumberMultiply("-66+88i", "-88-66i"), Error: invalid literal for int[] with base 10: '-88-66', 'Test 59');
test(complexNumberMultiply("-1-1i", "1+1i"), Error: invalid literal for int[] with base 10: '-1-1', 'Test 60');
test(complexNumberMultiply("-88-55i", "88+55i"), Error: invalid literal for int[] with base 10: '-88-55', 'Test 61');
test(complexNumberMultiply("-50-50i", "-50-50i"), Error: invalid literal for int[] with base 10: '-50-50', 'Test 62');
test(complexNumberMultiply("30-40i", "-60+80i"), Error: invalid literal for int[] with base 10: '30-40', 'Test 63');
test(complexNumberMultiply("-23-56i", "78+90i"), Error: invalid literal for int[] with base 10: '-23-56', 'Test 64');
test(complexNumberMultiply("25-75i", "75+25i"), Error: invalid literal for int[] with base 10: '25-75', 'Test 65');
test(complexNumberMultiply("-1011-789i", "456-123i"), Error: invalid literal for int[] with base 10: '-1011-789', 'Test 66');
test(complexNumberMultiply("-66-33i", "66+33i"), Error: invalid literal for int[] with base 10: '-66-33', 'Test 67');
test(complexNumberMultiply("0+1i", "0-1i"), Error: invalid literal for int[] with base 10: '0-1', 'Test 68');
test(complexNumberMultiply("-78+90i", "34-56i"), Error: invalid literal for int[] with base 10: '34-56', 'Test 69');
test(complexNumberMultiply("-99-99i", "-99-99i"), Error: invalid literal for int[] with base 10: '-99-99', 'Test 70');
test(complexNumberMultiply("0+100i", "0-100i"), Error: invalid literal for int[] with base 10: '0-100', 'Test 71');
test(complexNumberMultiply("0+0i", "50-50i"), Error: invalid literal for int[] with base 10: '50-50', 'Test 72');
test(complexNumberMultiply("88+11i", "-44+22i"), -4114+1452i, 'Test 73');
test(complexNumberMultiply("0+0i", "-100-100i"), Error: invalid literal for int[] with base 10: '-100-100', 'Test 74');
test(complexNumberMultiply("-99-99i", "99+99i"), Error: invalid literal for int[] with base 10: '-99-99', 'Test 75');
test(complexNumberMultiply("50+30i", "-20+40i"), -2200+1400i, 'Test 76');
test(complexNumberMultiply("-99+99i", "99+99i"), -19602+0i, 'Test 77');
test(complexNumberMultiply("75+25i", "-25+75i"), -3750+5000i, 'Test 78');
test(complexNumberMultiply("-99+-99i", "99+99i"), 0+-19602i, 'Test 79');
test(complexNumberMultiply("23-17i", "-23+17i"), Error: invalid literal for int[] with base 10: '23-17', 'Test 80');
test(complexNumberMultiply("0-100i", "0-100i"), Error: invalid literal for int[] with base 10: '0-100', 'Test 81');
test(complexNumberMultiply("-75+25i", "25-75i"), Error: invalid literal for int[] with base 10: '25-75', 'Test 82');
test(complexNumberMultiply("-75-25i", "-25+75i"), Error: invalid literal for int[] with base 10: '-75-25', 'Test 83');
test(complexNumberMultiply("-1011+789i", "456+123i"), -558063+235431i, 'Test 84');
test(complexNumberMultiply("-1+1i", "-100-100i"), Error: invalid literal for int[] with base 10: '-100-100', 'Test 85');
test(complexNumberMultiply("-1+0i", "0-1i"), Error: invalid literal for int[] with base 10: '0-1', 'Test 86');
test(complexNumberMultiply("-99-99i", "99-99i"), Error: invalid literal for int[] with base 10: '-99-99', 'Test 87');
test(complexNumberMultiply("88+88i", "11+11i"), 0+1936i, 'Test 88');
test(complexNumberMultiply("-100+0i", "-100+0i"), 10000+0i, 'Test 89');
test(complexNumberMultiply("123+-456i", "-789+101i"), -50991+372207i, 'Test 90');
test(complexNumberMultiply("-1+0i", "-1+0i"), 1+0i, 'Test 91');
test(complexNumberMultiply("12-34i", "-56+78i"), Error: invalid literal for int[] with base 10: '12-34', 'Test 92');
test(complexNumberMultiply("50+0i", "0+50i"), 0+2500i, 'Test 93');
test(complexNumberMultiply("-75+-25i", "75-25i"), Error: invalid literal for int[] with base 10: '75-25', 'Test 94');
test(complexNumberMultiply("1+1i", "-1-1i"), Error: invalid literal for int[] with base 10: '-1-1', 'Test 95');
test(complexNumberMultiply("-89+34i", "56+-23i"), -4202+3951i, 'Test 96');
test(complexNumberMultiply("77+44i", "-44-77i"), Error: invalid literal for int[] with base 10: '-44-77', 'Test 97');
test(complexNumberMultiply("60+80i", "-90-120i"), Error: invalid literal for int[] with base 10: '-90-120', 'Test 98');
test(complexNumberMultiply("99-99i", "-99+99i"), Error: invalid literal for int[] with base 10: '99-99', 'Test 99');
test(complexNumberMultiply("-88+33i", "11-44i"), Error: invalid literal for int[] with base 10: '11-44', 'Test 100');
test(complexNumberMultiply("63-22i", "-31+44i"), Error: invalid literal for int[] with base 10: '63-22', 'Test 101');
test(complexNumberMultiply("-123+456i", "789-101i"), Error: invalid literal for int[] with base 10: '789-101', 'Test 102');
test(complexNumberMultiply("0-100i", "-100+0i"), Error: invalid literal for int[] with base 10: '0-100', 'Test 103');
test(complexNumberMultiply("0+-50i", "-50+0i"), 0+2500i, 'Test 104');
test(complexNumberMultiply("-34-56i", "-78-90i"), Error: invalid literal for int[] with base 10: '-34-56', 'Test 105');
test(complexNumberMultiply("-5+3i", "3-5i"), Error: invalid literal for int[] with base 10: '3-5', 'Test 106');
test(complexNumberMultiply("-34-56i", "78-90i"), Error: invalid literal for int[] with base 10: '-34-56', 'Test 107');
test(complexNumberMultiply("10+20i", "30-40i"), Error: invalid literal for int[] with base 10: '30-40', 'Test 108');
test(complexNumberMultiply("-100+0i", "0+100i"), 0+-10000i, 'Test 109');
test(complexNumberMultiply("100+100i", "1-1i"), Error: invalid literal for int[] with base 10: '1-1', 'Test 110');
test(complexNumberMultiply("56-78i", "23+45i"), Error: invalid literal for int[] with base 10: '56-78', 'Test 111');
test(complexNumberMultiply("123-456i", "-789+101i"), Error: invalid literal for int[] with base 10: '123-456', 'Test 112');
test(complexNumberMultiply("66+88i", "88+66i"), 0+12100i, 'Test 113');
test(complexNumberMultiply("99+99i", "1+1i"), 0+198i, 'Test 114');
test(complexNumberMultiply("-88-88i", "-11-11i"), Error: invalid literal for int[] with base 10: '-88-88', 'Test 115');
test(complexNumberMultiply("-1+1i", "-1+1i"), 0+-2i, 'Test 116');
test(complexNumberMultiply("34+56i", "-78+90i"), -7692+-1308i, 'Test 117');
test(complexNumberMultiply("100+0i", "0-100i"), Error: invalid literal for int[] with base 10: '0-100', 'Test 118');
test(complexNumberMultiply("50+50i", "-50-50i"), Error: invalid literal for int[] with base 10: '-50-50', 'Test 119');
test(complexNumberMultiply("-100+0i", "0+-100i"), 0+10000i, 'Test 120');
test(complexNumberMultiply("32-45i", "-67+89i"), Error: invalid literal for int[] with base 10: '32-45', 'Test 121');
test(complexNumberMultiply("0+0i", "-100+-100i"), 0+0i, 'Test 122');
test(complexNumberMultiply("50+-50i", "-50+50i"), 0+5000i, 'Test 123');
test(complexNumberMultiply("0-1i", "-1+0i"), Error: invalid literal for int[] with base 10: '0-1', 'Test 124');
test(complexNumberMultiply("-1+99i", "99-1i"), Error: invalid literal for int[] with base 10: '99-1', 'Test 125');
test(complexNumberMultiply("-50+0i", "0-50i"), Error: invalid literal for int[] with base 10: '0-50', 'Test 126');
test(complexNumberMultiply("-25+75i", "25-75i"), Error: invalid literal for int[] with base 10: '25-75', 'Test 127');
test(complexNumberMultiply("99+99i", "-99+99i"), -19602+0i, 'Test 128');
test(complexNumberMultiply("0+100i", "0+100i"), -10000+0i, 'Test 129');
test(complexNumberMultiply("100-100i", "-1+1i"), Error: invalid literal for int[] with base 10: '100-100', 'Test 130');
test(complexNumberMultiply("-66-88i", "66-88i"), Error: invalid literal for int[] with base 10: '-66-88', 'Test 131');
test(complexNumberMultiply("-10+-20i", "10+20i"), 300+-400i, 'Test 132');
test(complexNumberMultiply("0+-100i", "0+-100i"), -10000+0i, 'Test 133');
test(complexNumberMultiply("-99-99i", "-1-1i"), Error: invalid literal for int[] with base 10: '-99-99', 'Test 134');
test(complexNumberMultiply("100+0i", "100+0i"), 10000+0i, 'Test 135');
test(complexNumberMultiply("10-20i", "20+30i"), Error: invalid literal for int[] with base 10: '10-20', 'Test 136');
test(complexNumberMultiply("-20+-30i", "20+30i"), 500+-1200i, 'Test 137');
test(complexNumberMultiply("-100-100i", "100+100i"), Error: invalid literal for int[] with base 10: '-100-100', 'Test 138');
test(complexNumberMultiply("20+30i", "-20-30i"), Error: invalid literal for int[] with base 10: '-20-30', 'Test 139');
test(complexNumberMultiply("-30+40i", "50-60i"), Error: invalid literal for int[] with base 10: '50-60', 'Test 140');
test(complexNumberMultiply("1011-789i", "-456+123i"), Error: invalid literal for int[] with base 10: '1011-789', 'Test 141');
test(complexNumberMultiply("1+0i", "-1+0i"), -1+0i, 'Test 142');
test(complexNumberMultiply("1+0i", "0+1i"), 0+1i, 'Test 143');
test(complexNumberMultiply("99+1i", "1+99i"), 0+9802i, 'Test 144');
test(complexNumberMultiply("0+100i", "100+0i"), 0+10000i, 'Test 145');
test(complexNumberMultiply("100-100i", "-100+100i"), Error: invalid literal for int[] with base 10: '100-100', 'Test 146');
test(complexNumberMultiply("1+-1i", "-100+100i"), 0+200i, 'Test 147');
test(complexNumberMultiply("-99-99i", "-1+1i"), Error: invalid literal for int[] with base 10: '-99-99', 'Test 148');

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
