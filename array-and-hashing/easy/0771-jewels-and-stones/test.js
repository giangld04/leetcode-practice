// Test: 771. Jewels And Stones
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { numJewelsInStones } = require("./solution");

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

console.log("\n771. Jewels And Stones\n");

test(numJewelsInStones("aA", "aAAbbbb"), 3, 'Test 1');
test(numJewelsInStones("xyz", "aabbcc"), 0, 'Test 2');
test(numJewelsInStones("xyz", ""), 0, 'Test 3');
test(numJewelsInStones("aA", ""), 0, 'Test 4');
test(numJewelsInStones("abcdefg", "aghfbadcegf"), 10, 'Test 5');
test(numJewelsInStones("abcdefg", "aghgfedcba"), 9, 'Test 6');
test(numJewelsInStones("", "abcdefg"), 0, 'Test 7');
test(numJewelsInStones("XYZ", "xyzbxyz"), 0, 'Test 8');
test(numJewelsInStones("abcdef", "fedcba"), 6, 'Test 9');
test(numJewelsInStones("J", "jjjjjJ"), 1, 'Test 10');
test(numJewelsInStones("aBcD", "abCdEfGhIjKlMnOpQrStUvWxYz"), 1, 'Test 11');
test(numJewelsInStones("A", "aAaAaA"), 3, 'Test 12');
test(numJewelsInStones("XYZ", "xyzXYZxyz"), 3, 'Test 13');
test(numJewelsInStones("J", "Jjjjjjjjjjj"), 1, 'Test 14');
test(numJewelsInStones("A", "aA"), 1, 'Test 15');
test(numJewelsInStones("xyz", "xyzzxyzz"), 8, 'Test 16');
test(numJewelsInStones("", "aAAbbbb"), 0, 'Test 17');
test(numJewelsInStones("z", "ZZ"), 0, 'Test 18');
test(numJewelsInStones("abc", "acbacba"), 7, 'Test 19');
test(numJewelsInStones("abc", "aaabbbccc"), 9, 'Test 20');
test(numJewelsInStones("abcdefg", ""), 0, 'Test 21');
test(numJewelsInStones("xyz", "xyzzzyx"), 7, 'Test 22');
test(numJewelsInStones("ABC", "abcABC"), 3, 'Test 23');
test(numJewelsInStones("abc", "aabbcc"), 6, 'Test 24');
test(numJewelsInStones("xyzXYZ", "zyxwvutsrqponmlkjihgfedcbaZXCVBNMLKJIHGFEDCBA"), 5, 'Test 25');
test(numJewelsInStones("xyzXYZ", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 6, 'Test 26');
test(numJewelsInStones("ABCDEFGHIJK", "ABCDEFGHIJKabcdefghijk"), 11, 'Test 27');
test(numJewelsInStones("mnopqr", "mnopqrzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 6, 'Test 28');
test(numJewelsInStones("abcdef", "aabbccddeeff"), 12, 'Test 29');
test(numJewelsInStones("mnopqr", "mnopqrstuvwxyz"), 6, 'Test 30');
test(numJewelsInStones("ABCDEFGHIJKL", "LJKIHFEDCBA"), 11, 'Test 31');
test(numJewelsInStones("mnopqr", "rstuvwrstuvwrstuvwrstuvw"), 4, 'Test 32');
test(numJewelsInStones("JKLMNO", "PQRSTUJKLMNOPQRSTUJKLMNOPQRSTUJKLMNOPQRSTUJKLMNOPQRSTUJKL"), 27, 'Test 33');
test(numJewelsInStones("yza", "yzayzayzayza"), 12, 'Test 34');
test(numJewelsInStones("1234567890", "09876543210123456789"), 20, 'Test 35');
test(numJewelsInStones("LMNOPQ", "mnopqrLMNOPQ"), 6, 'Test 36');
test(numJewelsInStones("LMNOPQRSTU", "LMNOPQRSTULMNOPQRSTUVWXYZ"), 20, 'Test 37');
test(numJewelsInStones("QWERTY", "qwertyuiopasdfghjklzxcvbnmQWERTY"), 6, 'Test 38');
test(numJewelsInStones("aAbBcC", "aabbccAAzz"), 8, 'Test 39');
test(numJewelsInStones("pythonPYTHON", "pythooonPYTHOOONpy"), 18, 'Test 40');
test(numJewelsInStones("ABCDEFGHIJKL", "abcdefghijlkjihgfedcba"), 0, 'Test 41');
test(numJewelsInStones("javaJAVA", "jjjaaaaavvvaaaAAAVVVAAA"), 23, 'Test 42');
test(numJewelsInStones("abcdefghij", "zzzzzzzzzzzzzzzzzzzz"), 0, 'Test 43');
test(numJewelsInStones("AEIOU", "aeiouAEIOUaeiouAEIOU"), 10, 'Test 44');
test(numJewelsInStones("fghij", "jihgf"), 5, 'Test 45');
test(numJewelsInStones("xyzXYZ", "zzzzzyyyxXxXyYy"), 15, 'Test 46');
test(numJewelsInStones("pqrst", "tsrpq"), 5, 'Test 47');
test(numJewelsInStones("abcdefghijk", "ABCDEFGHIJKabcdefghijk"), 11, 'Test 48');
test(numJewelsInStones("ghijkl", "lkjihg"), 6, 'Test 49');
test(numJewelsInStones("abcdefg", "abcdefgabcdefgabcdefg"), 21, 'Test 50');
test(numJewelsInStones("abcde", "edcba"), 5, 'Test 51');
test(numJewelsInStones("QRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 10, 'Test 52');
test(numJewelsInStones("123456", "111222333444555666"), 18, 'Test 53');
test(numJewelsInStones("z", "zzzzzzzzzzzzzzzzzzzz"), 20, 'Test 54');
test(numJewelsInStones("mnopqr", "mnopqrnopqrxyz"), 11, 'Test 55');
test(numJewelsInStones("aAbBcC", "aAbBcCxxxyyyzzz"), 6, 'Test 56');
test(numJewelsInStones("uvwxy", "yxwvu"), 5, 'Test 57');
test(numJewelsInStones("aAbBcC", "abcABCabcABC"), 12, 'Test 58');
test(numJewelsInStones("mnopqr", "mnoqrpmnopqrmmmnopqr"), 20, 'Test 59');
test(numJewelsInStones("QWJRTY", "QWJRTYqwerty"), 6, 'Test 60');
test(numJewelsInStones("Z", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 61');
test(numJewelsInStones("JKLM", "ABCDEFGHIJKLmnopqrstu"), 3, 'Test 62');
test(numJewelsInStones("abcABC", "aAbBcCabcABC"), 12, 'Test 63');
test(numJewelsInStones("qwertyuiopASDFGHJKLZXCVBNM", "qwertyuiopASDFGHJKLZXCVBNMqwertyuiopASDFGHJKLZXCVBNM"), 52, 'Test 64');
test(numJewelsInStones("", "abcdefghijklmnopqrstuvwxyz"), 0, 'Test 65');
test(numJewelsInStones("QRSTU", "UTSRQ"), 5, 'Test 66');
test(numJewelsInStones("abcdefgABCDEFG", "gfedcbaGFEDCBAgfedcba"), 21, 'Test 67');
test(numJewelsInStones("LMNOPQ", "PQLNOM"), 6, 'Test 68');
test(numJewelsInStones("abcABC", "aBcDeFgHiJkLmNoPqRsTuVwXyZ"), 3, 'Test 69');
test(numJewelsInStones("xyzXYZ", "zyxZYXzyxZYXzyxZYX"), 18, 'Test 70');
test(numJewelsInStones("abcdef", "fedcbafedcbafedcba"), 18, 'Test 71');
test(numJewelsInStones("xyzXYZ", "xyzzzzyyxXXYYZZZ"), 16, 'Test 72');
test(numJewelsInStones("abcdefg", "hijklmnopqrstuvwxyz"), 0, 'Test 73');
test(numJewelsInStones("MNOPQR", "ZYXWVUTSRQPONMLKJIHGFEDCBA"), 6, 'Test 74');
test(numJewelsInStones("abcdefghijkABCDEFGHIJK", "abcdefghijkABCDEFGHIJK"), 22, 'Test 75');
test(numJewelsInStones("GHIJKL", "ghijklGHJKLMN"), 5, 'Test 76');
test(numJewelsInStones("xyzXYZ", "aAbBcCxyzXYZ"), 6, 'Test 77');
test(numJewelsInStones("abcdef", "abcdefabcdefabcdefabcdef"), 24, 'Test 78');
test(numJewelsInStones("klmnopqrKLMNOPQR", "klmnopqrKLMNOPQR"), 16, 'Test 79');
test(numJewelsInStones("mnopqr", "mnopqrstoopqrmmn"), 14, 'Test 80');
test(numJewelsInStones("abcdefghijABCDEFGHIJ", "abcdefghijABCDEFGHIJ"), 20, 'Test 81');
test(numJewelsInStones("mnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"), 14, 'Test 82');
test(numJewelsInStones("mnopqrstuv", "mlkjihgfdsazxcvbnm"), 5, 'Test 83');
test(numJewelsInStones("klmno", "onmlk"), 5, 'Test 84');
test(numJewelsInStones("123456", "112233445566"), 12, 'Test 85');
test(numJewelsInStones("rstuvw", "vwutsr"), 6, 'Test 86');
test(numJewelsInStones("abcABC", "abcABCabcABC"), 12, 'Test 87');
test(numJewelsInStones("stuvwxyzSTUVWXYZ", "stuvwxyzSTUVWXYZ"), 16, 'Test 88');
test(numJewelsInStones("", "abcdefgABCDEFG"), 0, 'Test 89');
test(numJewelsInStones("xyzXYZ", "xyzzzXXYyyZZZ"), 13, 'Test 90');
test(numJewelsInStones("worldWORLD", "wwoorrllddWWOOORRLLDD"), 21, 'Test 91');
test(numJewelsInStones("qrstuv", "qwertyuiopasdfghjklzxcvbnm"), 6, 'Test 92');
test(numJewelsInStones("abcdef", "fedcbaghijklmnopqrstuvwxyz"), 6, 'Test 93');
test(numJewelsInStones("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ", "zZyYxXwWvVuUtTsSrRqQpPoOnNmMlLkKjJiIhHgGfFeEdDcCbBaA"), 52, 'Test 94');
test(numJewelsInStones("ABCDEFG", "abcdefgABCDEFG"), 7, 'Test 95');
test(numJewelsInStones("xyzXYZ", "xYzXyZxYzXyZxYzXyZ"), 18, 'Test 96');
test(numJewelsInStones("helloHELLO", "hheelloollleeHHHELLO"), 20, 'Test 97');
test(numJewelsInStones("ABCDEFGHIJ", "ABCDEFGHIJabcdefghij"), 10, 'Test 98');
test(numJewelsInStones("asdfghjklzxcvbnm", "qwertyuiopzxcvbnmasdfghjklqwertyuiop"), 16, 'Test 99');
test(numJewelsInStones("VWXYZ", "ZYXWV"), 5, 'Test 100');
test(numJewelsInStones("hijklmnopqrstuvwxyz", "abcdefg"), 0, 'Test 101');
test(numJewelsInStones("abcdefghijklmnopqrstuvwxyz", ""), 0, 'Test 102');
test(numJewelsInStones("12345", "5432167890"), 5, 'Test 103');

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
