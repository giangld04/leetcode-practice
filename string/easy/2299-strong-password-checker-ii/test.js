// Test: 2299. Strong Password Checker Ii
// 70 test cases from LeetCodeDataset
// Run: node test.js

const { strongPasswordCheckerII } = require("./solution");

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

console.log("\n2299. Strong Password Checker Ii\n");

test(strongPasswordCheckerII("IloveLe3tcode!"), true, 'Test 1');
test(strongPasswordCheckerII("Me+You--IsMyDream"), false, 'Test 2');
test(strongPasswordCheckerII("1aB!"), false, 'Test 3');
test(strongPasswordCheckerII("OneSpecialChar@"), false, 'Test 4');
test(strongPasswordCheckerII("EndsWithSpecialChar!"), false, 'Test 5');
test(strongPasswordCheckerII("ValidPass1@"), false, 'Test 6');
test(strongPasswordCheckerII("lowercaseonly"), false, 'Test 7');
test(strongPasswordCheckerII("Short!1A"), true, 'Test 8');
test(strongPasswordCheckerII("Correct!2@3#"), false, 'Test 9');
test(strongPasswordCheckerII("NoSpecialChar1"), false, 'Test 10');
test(strongPasswordCheckerII("A1b!2c@3D#4e$5f^"), true, 'Test 11');
test(strongPasswordCheckerII("MixedContentA1!A1!A1!"), true, 'Test 12');
test(strongPasswordCheckerII("ValidPassword1!ButTooShort"), false, 'Test 13');
test(strongPasswordCheckerII("Valid123@#Aa"), true, 'Test 14');
test(strongPasswordCheckerII("Special$%^&*[]"), false, 'Test 15');
test(strongPasswordCheckerII("OnlyNumbers12345678"), false, 'Test 16');
test(strongPasswordCheckerII("EndWithSpecial!@#$%^&*[]"), false, 'Test 17');
test(strongPasswordCheckerII("ValidP@ssw0rd123"), false, 'Test 18');
test(strongPasswordCheckerII("Valid1!Password"), false, 'Test 19');
test(strongPasswordCheckerII("1234567890!Aa"), true, 'Test 20');
test(strongPasswordCheckerII("!@#$%^&*[]-+"), false, 'Test 21');
test(strongPasswordCheckerII("A1!A1!A1!A1!"), false, 'Test 22');
test(strongPasswordCheckerII("Abc123!@Def456#$"), true, 'Test 23');
test(strongPasswordCheckerII("Password_1!"), false, 'Test 24');
test(strongPasswordCheckerII("AllSame1111!!!"), false, 'Test 25');
test(strongPasswordCheckerII("MissingUpperaa1@"), false, 'Test 26');
test(strongPasswordCheckerII("TooShort1!aA"), false, 'Test 27');
test(strongPasswordCheckerII("Aa1!Aa1!"), true, 'Test 28');
test(strongPasswordCheckerII("MissingLowerAA1@"), false, 'Test 29');
test(strongPasswordCheckerII("abcdefghABCDEFGH12345678!@#$%^&*[]-+"), true, 'Test 30');
test(strongPasswordCheckerII("ValidPassword123!"), false, 'Test 31');
test(strongPasswordCheckerII("Valid!1Password"), false, 'Test 32');
test(strongPasswordCheckerII("TooManyDigits123456!"), false, 'Test 33');
test(strongPasswordCheckerII("!@#$%^&*[]"), false, 'Test 34');
test(strongPasswordCheckerII("A1A1A1A1A1A1A1A1"), false, 'Test 35');
test(strongPasswordCheckerII("NoSpecialCharacters12345"), false, 'Test 36');
test(strongPasswordCheckerII("ValidPassword1!ValidPassword1!"), false, 'Test 37');
test(strongPasswordCheckerII("Valid1Password!"), false, 'Test 38');
test(strongPasswordCheckerII("UPPERCASEONLY"), false, 'Test 39');
test(strongPasswordCheckerII("SpecialCharsOnly!@#$%^&*[]-+"), false, 'Test 40');
test(strongPasswordCheckerII("Abcdefgh123@"), true, 'Test 41');
test(strongPasswordCheckerII("SecureP@55w0rd"), false, 'Test 42');
test(strongPasswordCheckerII("Valid1!2@3#4$5%6^7&8*"), true, 'Test 43');
test(strongPasswordCheckerII("SameChar@@@bbb1"), false, 'Test 44');
test(strongPasswordCheckerII("A1!a2@b3#c4$d5%^"), true, 'Test 45');
test(strongPasswordCheckerII("alllowercase1!"), false, 'Test 46');
test(strongPasswordCheckerII("Aaaaaaaaaa1!"), false, 'Test 47');
test(strongPasswordCheckerII("MissingDigitAa!"), false, 'Test 48');
test(strongPasswordCheckerII("Aa1!Aa1!Aa1!Aa1!"), true, 'Test 49');
test(strongPasswordCheckerII("Valid!ButTooShort"), false, 'Test 50');
test(strongPasswordCheckerII("A1!A2@A3#A4$A5%^"), false, 'Test 51');
test(strongPasswordCheckerII("Aa1!Aa1!Aa1!"), true, 'Test 52');
test(strongPasswordCheckerII("AaBbCcDdEeFfGg1!"), true, 'Test 53');
test(strongPasswordCheckerII("TwoAdjacent22!"), false, 'Test 54');
test(strongPasswordCheckerII("ValidPassword!2@3#4$5%^"), false, 'Test 55');
test(strongPasswordCheckerII("NoSpecialChars123"), false, 'Test 56');
test(strongPasswordCheckerII("RepetitiveAaaaaa1!"), false, 'Test 57');
test(strongPasswordCheckerII("1234567890!"), false, 'Test 58');
test(strongPasswordCheckerII("A1!A1!A1!A1!A1!"), false, 'Test 59');
test(strongPasswordCheckerII("A1b2C3d4!"), true, 'Test 60');
test(strongPasswordCheckerII("NoTwoSame!!"), false, 'Test 61');
test(strongPasswordCheckerII("TooManySpecials!!!"), false, 'Test 62');
test(strongPasswordCheckerII("LongEnoughPasswordWithDigits123456"), false, 'Test 63');
test(strongPasswordCheckerII("AlmostValid1!AlmostValid"), true, 'Test 64');
test(strongPasswordCheckerII("Complex!@#Password1A2B3C"), false, 'Test 65');
test(strongPasswordCheckerII("StartWithSpecialChar!Valid"), false, 'Test 66');
test(strongPasswordCheckerII("TooShort1!"), false, 'Test 67');
test(strongPasswordCheckerII("1234567890"), false, 'Test 68');
test(strongPasswordCheckerII("M1!s2@m3#p4$l5%^"), true, 'Test 69');
test(strongPasswordCheckerII("ALLCAPS1!"), false, 'Test 70');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

