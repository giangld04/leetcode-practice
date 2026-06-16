// Test: 420. Strong Password Checker
// 174 test cases from LeetCodeDataset
// Run: node test.js

const { strongPasswordChecker } = require("./solution");

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

console.log("\n420. Strong Password Checker\n");

test(strongPasswordChecker("AAAbbb"), 2, 'Test 1');
test(strongPasswordChecker("aA1"), 3, 'Test 2');
test(strongPasswordChecker("Aa1234567890"), 0, 'Test 3');
test(strongPasswordChecker("........##@"), 3, 'Test 4');
test(strongPasswordChecker("Aaaaaa1A"), 1, 'Test 5');
test(strongPasswordChecker("Passwo0rd!!"), 0, 'Test 6');
test(strongPasswordChecker("A1b2C3"), 0, 'Test 7');
test(strongPasswordChecker("...!!!"), 3, 'Test 8');
test(strongPasswordChecker("A1b2C3d4E5f6G7"), 0, 'Test 9');
test(strongPasswordChecker("111111111111111111"), 6, 'Test 10');
test(strongPasswordChecker("A1B2C3D4E5F6G7H8I9J0"), 1, 'Test 11');
test(strongPasswordChecker("Aa1234567890!@#$%^"), 0, 'Test 12');
test(strongPasswordChecker("Aa1!Aa1!Aa1!Aa1!"), 0, 'Test 13');
test(strongPasswordChecker("Aa1111111111111111"), 5, 'Test 14');
test(strongPasswordChecker("A1A1A1A1"), 1, 'Test 15');
test(strongPasswordChecker("password"), 2, 'Test 16');
test(strongPasswordChecker("Aaaaaa"), 1, 'Test 17');
test(strongPasswordChecker("AAAAAaaaaaaa"), 3, 'Test 18');
test(strongPasswordChecker("Aa1234567890Aa1"), 0, 'Test 19');
test(strongPasswordChecker("Aa111"), 1, 'Test 20');
test(strongPasswordChecker("AaAaAaAaAaAaAaAaAaAa"), 1, 'Test 21');
test(strongPasswordChecker("aaa111"), 2, 'Test 22');
test(strongPasswordChecker("A1B2C3D4E5F6G7H8I9J0K"), 2, 'Test 23');
test(strongPasswordChecker("Aa1234567890123456"), 0, 'Test 24');
test(strongPasswordChecker("A1b2C3d4"), 0, 'Test 25');
test(strongPasswordChecker("12345678901234567890"), 2, 'Test 26');
test(strongPasswordChecker("aaaaaaa"), 2, 'Test 27');
test(strongPasswordChecker("Aa1234567890123"), 0, 'Test 28');
test(strongPasswordChecker("!@#$%^&*[]_+"), 3, 'Test 29');
test(strongPasswordChecker("Aaa111"), 1, 'Test 30');
test(strongPasswordChecker("a"), 5, 'Test 31');
test(strongPasswordChecker("Aa1234567890Aa1234567890"), 4, 'Test 32');
test(strongPasswordChecker("AaAaAaAaAaAaAaAaAaA1"), 0, 'Test 33');
test(strongPasswordChecker("Aaaaaa1"), 1, 'Test 34');
test(strongPasswordChecker("............aaa"), 5, 'Test 35');
test(strongPasswordChecker("Aa1234567890!@#$%^&*[]"), 2, 'Test 36');
test(strongPasswordChecker("Aa1234567890Aa123456"), 0, 'Test 37');
test(strongPasswordChecker("11111111111111111111"), 6, 'Test 38');
test(strongPasswordChecker("1337C0d3"), 0, 'Test 39');
test(strongPasswordChecker("Password123"), 0, 'Test 40');
test(strongPasswordChecker("aaaaaaaaaaaaaaaaaaaaa"), 7, 'Test 41');
test(strongPasswordChecker("Aa123456"), 0, 'Test 42');
test(strongPasswordChecker("ABABABABABABABABAB"), 2, 'Test 43');
test(strongPasswordChecker("ABABABABABABABABABAB1"), 2, 'Test 44');
test(strongPasswordChecker("Aa1234567890Aa123"), 0, 'Test 45');
test(strongPasswordChecker("aaaaaaaaaaaaaa1A"), 4, 'Test 46');
test(strongPasswordChecker("abcABC123!@#"), 0, 'Test 47');
test(strongPasswordChecker("A1b2C3D4E5F6G7H8I9J0"), 0, 'Test 48');
test(strongPasswordChecker("AAAbbbccc111111111111111111"), 11, 'Test 49');
test(strongPasswordChecker("AAAbbbCCCddd1111111111111111111"), 15, 'Test 50');
test(strongPasswordChecker("aaaabbbbccccddddeee"), 5, 'Test 51');
test(strongPasswordChecker("111222333444555666777888999000"), 12, 'Test 52');
test(strongPasswordChecker("abcABC123!!!123!!!123!!!123!!!"), 10, 'Test 53');
test(strongPasswordChecker("P@ssw0rd!"), 0, 'Test 54');
test(strongPasswordChecker("!@#$%^&*[]_+~`|}{[]:;?><,./-=!@#$%^&*[]"), 22, 'Test 55');
test(strongPasswordChecker("AaBbCc1234567890123456789012345678901234567890"), 26, 'Test 56');
test(strongPasswordChecker("AAAbbbCCCddd11111111111111111111"), 16, 'Test 57');
test(strongPasswordChecker("Aa1Aa1Aa1Aa1Aa1Aa1Aa1"), 1, 'Test 58');
test(strongPasswordChecker("A1A1A1A1A1A1A1A1A1A1"), 1, 'Test 59');
test(strongPasswordChecker("A1A1A1A1A1A1A1A1A1A1A1A1A"), 6, 'Test 60');
test(strongPasswordChecker("Aaaaaaaaaa1111111111!!!!!!!!!"), 14, 'Test 61');
test(strongPasswordChecker("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), 15, 'Test 62');
test(strongPasswordChecker("abcdefgH1!"), 0, 'Test 63');
test(strongPasswordChecker("123456789012345678901234567890"), 12, 'Test 64');
test(strongPasswordChecker("aaaaaaaAAAAAA1111111"), 6, 'Test 65');
test(strongPasswordChecker("Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!"), 28, 'Test 66');
test(strongPasswordChecker("Password123Password123"), 2, 'Test 67');
test(strongPasswordChecker("abcABC123!@#abcABC123!@#abcABC123!@#"), 16, 'Test 68');
test(strongPasswordChecker("Aa1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!"), 56, 'Test 69');
test(strongPasswordChecker("aA1aA1aA1aA1aA1aA1aA1aA1aA1aA1aA1aA1aA1aA1aA1aA1"), 28, 'Test 70');
test(strongPasswordChecker("!@#$%^&*[]_+~`|}{[]:;?><,./-="), 12, 'Test 71');
test(strongPasswordChecker("AaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAa"), 55, 'Test 72');
test(strongPasswordChecker("AAAbbbCCCddd1111111111111111111111"), 18, 'Test 73');
test(strongPasswordChecker("abcdefghijklmnopqrstuvwxyz"), 8, 'Test 74');
test(strongPasswordChecker("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"), 19, 'Test 75');
test(strongPasswordChecker("xX1234567890Xx1234567890Xx1234567890"), 16, 'Test 76');
test(strongPasswordChecker("Aa1Bb2Cc3Dd4Ee5Ff6Gg7Hh8Ii9Jj0KkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), 42, 'Test 77');
test(strongPasswordChecker("aA1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1"), 23, 'Test 78');
test(strongPasswordChecker("aabababababababababa"), 2, 'Test 79');
test(strongPasswordChecker("Aa123456789012345"), 0, 'Test 80');
test(strongPasswordChecker("Password!Password!Pass"), 3, 'Test 81');
test(strongPasswordChecker("A1!aA1!aA1!aA1!aA1!aA1!aA1!a"), 8, 'Test 82');
test(strongPasswordChecker("A1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!"), 11, 'Test 83');
test(strongPasswordChecker("aaaaaaaaaaaaaaaaaaaa"), 6, 'Test 84');
test(strongPasswordChecker("1234567890!@#$%^&*[]_+~`|}{[]:;?><,./-="), 21, 'Test 85');
test(strongPasswordChecker("A1A1A1A1A1A1A1A1A1A1A1A1A1"), 7, 'Test 86');
test(strongPasswordChecker("A1B1C1D1E1F1G1H1I1J1K1L1M1N1O1P1Q1R1S1T1U1V1W1X1Y1Z1"), 33, 'Test 87');
test(strongPasswordChecker("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 40, 'Test 88');
test(strongPasswordChecker("bbbbbbbbbbbbbbbbb"), 5, 'Test 89');
test(strongPasswordChecker("Aa1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!"), 20, 'Test 90');
test(strongPasswordChecker("A1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!a"), 12, 'Test 91');
test(strongPasswordChecker("!aA1!aA1!aA1!aA1!aA1"), 0, 'Test 92');
test(strongPasswordChecker("AaaBBB111"), 2, 'Test 93');
test(strongPasswordChecker("Aa!aAa!aAa!aAa!aAa!aAa!aAa!aAa!aAa!aAa!aAa!aAa!aAa!aAa!aAa!aAa!"), 44, 'Test 94');
test(strongPasswordChecker("A1A1A1A1A1A1A1A1A1A1A1"), 3, 'Test 95');
test(strongPasswordChecker("AAAbbbCCCddd11111111111111111111111"), 19, 'Test 96');
test(strongPasswordChecker("aAaAaAaAaAaAaAaAaAaAaAaAaA"), 7, 'Test 97');
test(strongPasswordChecker("aaAAaaAAaaAAaaAAaa"), 1, 'Test 98');
test(strongPasswordChecker("Aa!b@c#d$e%f^g&h*i[j]k"), 3, 'Test 99');
test(strongPasswordChecker("A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1"), 23, 'Test 100');
test(strongPasswordChecker("Aa1!Aa1!Aa1!"), 0, 'Test 101');
test(strongPasswordChecker("Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1A"), 23, 'Test 102');
test(strongPasswordChecker("aA1!aA1!aA1!aA1!aA1!"), 0, 'Test 103');
test(strongPasswordChecker("abAB1111111111111111"), 5, 'Test 104');
test(strongPasswordChecker("cccccccccccccccccccccccccccccccccccccccccccccccccccc"), 38, 'Test 105');
test(strongPasswordChecker("aaaaaaaAAAAAA666666"), 6, 'Test 106');
test(strongPasswordChecker("aaaAAA111!!!"), 4, 'Test 107');
test(strongPasswordChecker("aAaAaAaAaAaAaAaAaAaAaAaA"), 5, 'Test 108');
test(strongPasswordChecker("Aa111111111111111111"), 6, 'Test 109');
test(strongPasswordChecker("a!b@c#d$e%f^g&h*i[j]"), 2, 'Test 110');
test(strongPasswordChecker("aaAA111111111111111"), 5, 'Test 111');
test(strongPasswordChecker("A1!aA1!aA1!aA1!aA1!aA1!aA1!aA1"), 10, 'Test 112');
test(strongPasswordChecker("abcABC123abcABC123"), 0, 'Test 113');
test(strongPasswordChecker("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 28, 'Test 114');
test(strongPasswordChecker("abcABC123!@#abcABC123!@#"), 4, 'Test 115');
test(strongPasswordChecker("Aa1Bb2Ccc3Ddd"), 0, 'Test 116');
test(strongPasswordChecker("AAAbbbCCCccc111111111"), 7, 'Test 117');
test(strongPasswordChecker("abcABC!@#abcABC!@#abcABC!@#"), 8, 'Test 118');
test(strongPasswordChecker("Abcde!23456789"), 0, 'Test 119');
test(strongPasswordChecker("aAaAaAaAaAaAaAaAaAaAaAaAaAaA"), 9, 'Test 120');
test(strongPasswordChecker("AAAbbbCCCddd111111111111111111111111"), 20, 'Test 121');
test(strongPasswordChecker("aaabbbccc111222333"), 6, 'Test 122');
test(strongPasswordChecker("aA1bB2cC3dD4eE5fF6"), 0, 'Test 123');
test(strongPasswordChecker("aaaaaaaAAAAAA6666666"), 6, 'Test 124');
test(strongPasswordChecker("Aa1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!"), 40, 'Test 125');
test(strongPasswordChecker("Aa!b@c#d$e%f^g&h*i[j]"), 2, 'Test 126');
test(strongPasswordChecker("abcABC123abcABC123abcABC123"), 7, 'Test 127');
test(strongPasswordChecker("Aa1234567890123456789"), 1, 'Test 128');
test(strongPasswordChecker("!@#$%^&*[]"), 3, 'Test 129');
test(strongPasswordChecker("!@#$%^&*[]_+~`1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"), 56, 'Test 130');
test(strongPasswordChecker("aA1!aA1!aA1!aA1!"), 0, 'Test 131');
test(strongPasswordChecker("aA1aA1aA1aA1aA1aA1"), 0, 'Test 132');
test(strongPasswordChecker("111222333444555666777888999000111222333"), 21, 'Test 133');
test(strongPasswordChecker("123!@#abcDEF"), 0, 'Test 134');
test(strongPasswordChecker("aA1aA1aA1aA1aA1aA1aA1aA1aA1aA1aA1aA1aA1aA1"), 22, 'Test 135');
test(strongPasswordChecker("Aa1Aa1Aa1Aa1Aa1Aa1"), 0, 'Test 136');
test(strongPasswordChecker("Abc!1"), 1, 'Test 137');
test(strongPasswordChecker("aaaAAAbBBB11111111111111"), 8, 'Test 138');
test(strongPasswordChecker("AaaBBBcccDDD123"), 3, 'Test 139');
test(strongPasswordChecker("AAAbbccccdddEEF1234567890"), 5, 'Test 140');
test(strongPasswordChecker("aA111aA111aA111aA111"), 4, 'Test 141');
test(strongPasswordChecker("aaaaaaaAAAAAA66666666666666666666"), 18, 'Test 142');
test(strongPasswordChecker("0123456789012345678901234567890"), 13, 'Test 143');
test(strongPasswordChecker("aA1!aA1!aA1!aA1!aA1!aA1!"), 4, 'Test 144');
test(strongPasswordChecker("A1b2C3d4E5f6G7H8I9J0KLMN"), 4, 'Test 145');
test(strongPasswordChecker("aA1234567890Aa1234567890aA1234567890"), 16, 'Test 146');
test(strongPasswordChecker("1234567890AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), 42, 'Test 147');
test(strongPasswordChecker("abcdefghijABCD1234567890"), 4, 'Test 148');
test(strongPasswordChecker("Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!"), 32, 'Test 149');
test(strongPasswordChecker("AaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAa"), 15, 'Test 150');
test(strongPasswordChecker("Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!"), 12, 'Test 151');
test(strongPasswordChecker("1234567890!@#$%^&*[]_+"), 4, 'Test 152');
test(strongPasswordChecker("AAAbbbCCCddd111111111111111111"), 14, 'Test 153');
test(strongPasswordChecker("Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1"), 31, 'Test 154');
test(strongPasswordChecker("123!@#abcDEF123!@#abcDEF"), 4, 'Test 155');
test(strongPasswordChecker("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), 13, 'Test 156');
test(strongPasswordChecker("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), 8, 'Test 157');
test(strongPasswordChecker("AAAbbbCCCddd111111111111111111111"), 17, 'Test 158');
test(strongPasswordChecker("abcdefgHIJKLmnopQR1234567890!@#$%^&*[]"), 18, 'Test 159');
test(strongPasswordChecker("A1!aA1!aA1!aA1!aA1!aA1!aA1!aA"), 9, 'Test 160');
test(strongPasswordChecker("a!B@c#D$e%F^G&H*I[J]"), 1, 'Test 161');
test(strongPasswordChecker("!@#$%^&*[]!@#$%^&*[]!@#$%^&*[]!@#$%^&*[]!@#$%^&*[]!@#$%^&*[]!@#$%^&*[]"), 53, 'Test 162');
test(strongPasswordChecker("xXyYzZ0987654321@#"), 0, 'Test 163');
test(strongPasswordChecker("Password1Password1"), 0, 'Test 164');
test(strongPasswordChecker("Aa1aA1aA1aA1aA1aA1aA1"), 1, 'Test 165');
test(strongPasswordChecker("Aa12345678901234567890"), 2, 'Test 166');
test(strongPasswordChecker("Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1"), 46, 'Test 167');
test(strongPasswordChecker("aaAaaaAaaaAaaaAaaaAaaaA"), 5, 'Test 168');
test(strongPasswordChecker("00000000000000000000000000000000"), 18, 'Test 169');
test(strongPasswordChecker("aaaaaaaaaAAA9"), 4, 'Test 170');
test(strongPasswordChecker("Aaaaabbbb1"), 2, 'Test 171');
test(strongPasswordChecker("111222333444555666777888999000111222333444555666777888999000"), 42, 'Test 172');
test(strongPasswordChecker("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), 11, 'Test 173');
test(strongPasswordChecker("Aa1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!aA1!"), 16, 'Test 174');

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
