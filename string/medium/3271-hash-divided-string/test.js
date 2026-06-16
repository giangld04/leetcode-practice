// Test: 3271. Hash Divided String
// 68 test cases from LeetCodeDataset
// Run: node test.js

const { stringHash } = require("./solution");

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

console.log("\n3271. Hash Divided String\n");

test(stringHash("aaaa", 2), aa, 'Test 1');
test(stringHash("mnopqr", 3), nw, 'Test 2');
test(stringHash("hellohellohellohello", 5), vvvv, 'Test 3');
test(stringHash("ababababababababababababab", 3), Error: string index out of range, 'Test 4');
test(stringHash("ababababab", 2), bbbbb, 'Test 5');
test(stringHash("zzzz", 4), w, 'Test 6');
test(stringHash("abcd", 2), bf, 'Test 7');
test(stringHash("mxz", 3), i, 'Test 8');
test(stringHash("abcdefghijklmnopqrstuvwxyzaa", 5), Error: string index out of range, 'Test 9');
test(stringHash("zzzz", 2), yy, 'Test 10');
test(stringHash("zzzzzzzzzzzzzzzzzzzzzzzz", 26), Error: string index out of range, 'Test 11');
test(stringHash("aaaabbbbcccc", 4), aei, 'Test 12');
test(stringHash("abcdefghijklmnopqrstuvwxyz", 26), n, 'Test 13');
test(stringHash("aaabbbcccdddeeefffggghhhiiiijjjkkkllllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxxyyyyzzzz", 4), Error: string index out of range, 'Test 14');
test(stringHash("abcdefghijklmnopqrstuvwxyza", 1), abcdefghijklmnopqrstuvwxyza, 'Test 15');
test(stringHash("pythonprogrammingisfun", 6), Error: string index out of range, 'Test 16');
test(stringHash("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 3), dddddddddddddddddd, 'Test 17');
test(stringHash("hellohellohellohellohellohellohellohellohellohello", 5), vvvvvvvvvv, 'Test 18');
test(stringHash("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 5), ghijghij, 'Test 19');
test(stringHash("zzzzzzzzzzzzzzzzzzzzzzzzzz", 26), a, 'Test 20');
test(stringHash("abacabadabacaba", 5), dfd, 'Test 21');
test(stringHash("abacabadabacabadabacaba", 3), Error: string index out of range, 'Test 22');
test(stringHash("quickbrownfoxjumpsoverthelazydog", 5), Error: string index out of range, 'Test 23');
test(stringHash("mnbvcxzlkjhgfdsapoiuytrewq", 8), Error: string index out of range, 'Test 24');
test(stringHash("qrstuvwx", 4), si, 'Test 25');
test(stringHash("thisisanotherexampleofstrings", 7), Error: string index out of range, 'Test 26');
test(stringHash("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 4), gggggggggg, 'Test 27');
test(stringHash("onetwothreefourfivesixseveneightninetenonetwothreefourfivesixseveneightnine", 9), Error: string index out of range, 'Test 28');
test(stringHash("thequickbrownfoxjumpsoverthelazydog", 4), Error: string index out of range, 'Test 29');
test(stringHash("thisisaverylongstringthatwillbehashed", 7), Error: string index out of range, 'Test 30');
test(stringHash("pythonprogrammingisfunandchallenging", 8), Error: string index out of range, 'Test 31');
test(stringHash("hellotherehellothere", 5), vzvz, 'Test 32');
test(stringHash("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 3), dddddddddddddddddddddddd, 'Test 33');
test(stringHash("qwertqwertqwertqwertqwertqwertqwertqwertqwertqwertqwert", 5), aaaaaaaaaaa, 'Test 34');
test(stringHash("mnopqrnopqrmnopqrnopqrmnopqr", 7), wxca, 'Test 35');
test(stringHash("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 26), aa, 'Test 36');
test(stringHash("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba", 25), Error: string index out of range, 'Test 37');
test(stringHash("xylophoneisaveryfuninstrument", 4), Error: string index out of range, 'Test 38');
test(stringHash("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 13), kqxd, 'Test 39');
test(stringHash("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 26), nn, 'Test 40');
test(stringHash("aaabbbcccdddeeefffggghhhiii", 3), adgjmpsvy, 'Test 41');
test(stringHash("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 25), Error: string index out of range, 'Test 42');
test(stringHash("thisisaverylongstringforhashing", 10), Error: string index out of range, 'Test 43');
test(stringHash("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 26), Error: string index out of range, 'Test 44');
test(stringHash("zyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyz", 13), naan, 'Test 45');
test(stringHash("qwerasdfzxcvqwertyuiopasdfghjklzxcvbnmqwertyuiop", 10), Error: string index out of range, 'Test 46');
test(stringHash("jqphmdfucybzvochwnygexskfr", 5), Error: string index out of range, 'Test 47');
test(stringHash("ababababababababababababababababab", 5), Error: string index out of range, 'Test 48');
test(stringHash("mnopqrabcdefg", 7), Error: string index out of range, 'Test 49');
test(stringHash("thisisaverylongstringthatneedstobehashedproperly", 7), Error: string index out of range, 'Test 50');
test(stringHash("allthesmalllettersofthealphabetarehereeverywhere", 8), ebgfav, 'Test 51');
test(stringHash("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 10), nrnr, 'Test 52');
test(stringHash("thisteststringisaverylongstringthatwillhashproperly", 7), Error: string index out of range, 'Test 53');
test(stringHash("qpwoeirutyalskdjfhgzmxncbv", 5), Error: string index out of range, 'Test 54');
test(stringHash("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10), Error: string index out of range, 'Test 55');
test(stringHash("quickbrownfoxjumpsoverthelazydogquickbrownfoxjumpsoverthelazydog", 9), Error: string index out of range, 'Test 56');
test(stringHash("zyxwvutsrqponmlkjihgfedcba", 13), na, 'Test 57');
test(stringHash("zyxwvutsrqponmlkjihgfedcba", 1), zyxwvutsrqponmlkjihgfedcba, 'Test 58');
test(stringHash("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 100), Error: string index out of range, 'Test 59');
test(stringHash("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 78), n, 'Test 60');
test(stringHash("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 52), a, 'Test 61');
test(stringHash("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 52), a, 'Test 62');
test(stringHash("thisisanotherlongteststringthatwillbehashedcorrectly", 6), Error: string index out of range, 'Test 63');
test(stringHash("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 4), cksaiqygowemu, 'Test 64');
test(stringHash("xyzxyzxyz", 3), uuu, 'Test 65');
test(stringHash("thequickbrownfoxjumpsoverthelazydog", 9), Error: string index out of range, 'Test 66');
test(stringHash("mnopqrxyzuvw", 3), nwul, 'Test 67');
test(stringHash("zyxwvutsrqponmlkjihgfedcba", 26), n, 'Test 68');

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
