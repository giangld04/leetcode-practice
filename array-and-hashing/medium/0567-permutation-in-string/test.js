// Test: 567. Permutation In String
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { checkInclusion } = require("./solution");

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

console.log("\n567. Permutation In String\n");

test(checkInclusion("abc", "bbbccca"), false, 'Test 1');
test(checkInclusion("adc", "dcda"), true, 'Test 2');
test(checkInclusion("abc", "bbbccba"), true, 'Test 3');
test(checkInclusion("abcde", "adecb"), true, 'Test 4');
test(checkInclusion("test", "ttewest"), false, 'Test 5');
test(checkInclusion("abc", "cbadef"), true, 'Test 6');
test(checkInclusion("abc", "defabc"), true, 'Test 7');
test(checkInclusion("xyz", "zyxwvut"), true, 'Test 8');
test(checkInclusion("hello", "ooollehed"), true, 'Test 9');
test(checkInclusion("ab", "eidboaoo"), false, 'Test 10');
test(checkInclusion("aabbcc", "abcabc"), true, 'Test 11');
test(checkInclusion("hello", "ooolleoooleh"), false, 'Test 12');
test(checkInclusion("xyz", "ayzxbcd"), true, 'Test 13');
test(checkInclusion("hello", "ooollehdl"), true, 'Test 14');
test(checkInclusion("a", "ab"), true, 'Test 15');
test(checkInclusion("z", "abcz"), true, 'Test 16');
test(checkInclusion("a", "b"), false, 'Test 17');
test(checkInclusion("abcd", "dcba"), true, 'Test 18');
test(checkInclusion("ab", "eidbaooo"), true, 'Test 19');
test(checkInclusion("abcd", "dcbaefg"), true, 'Test 20');
test(checkInclusion("abc", "cccccbabb"), true, 'Test 21');
test(checkInclusion("aaaa", "aaabaaaa"), true, 'Test 22');
test(checkInclusion("abcd", "abcdxzyw"), true, 'Test 23');
test(checkInclusion("a", "a"), true, 'Test 24');
test(checkInclusion("abracadabra", "cadabraabra"), true, 'Test 25');
test(checkInclusion("unique", "enquci"), false, 'Test 26');
test(checkInclusion("complexity", "itpelxcmoytz"), true, 'Test 27');
test(checkInclusion("python", "nothpy"), true, 'Test 28');
test(checkInclusion("permutation", "aeronpmutitno"), true, 'Test 29');
test(checkInclusion("pqrstuvw", "stuvwpqrxyz"), true, 'Test 30');
test(checkInclusion("zzzzz", "zzzzzzzzzzzzzzzzzzzzzz"), true, 'Test 31');
test(checkInclusion("aabbccddeeff", "bbccddeeffaabb"), true, 'Test 32');
test(checkInclusion("xyz", "zyxabcdef"), true, 'Test 33');
test(checkInclusion("permutation", "terumtnipxo"), false, 'Test 34');
test(checkInclusion("characters", "trchaesrhc"), false, 'Test 35');
test(checkInclusion("aabbcc", "baccabdefg"), true, 'Test 36');
test(checkInclusion("algorithm", "logarithma"), true, 'Test 37');
test(checkInclusion("abcdef", "fedcba"), true, 'Test 38');
test(checkInclusion("substring", "tstringsub"), true, 'Test 39');
test(checkInclusion("mnopqr", "qrstuvwxyzmnopqr"), true, 'Test 40');
test(checkInclusion("aabbccddeeff", "fedcbazyxwvutsrqponmlkjihgfedcba"), false, 'Test 41');
test(checkInclusion("unique", "eniquu"), true, 'Test 42');
test(checkInclusion("abcdefghij", "abcdefghijabcdefghij"), true, 'Test 43');
test(checkInclusion("xyz", "axbyczd"), false, 'Test 44');
test(checkInclusion("abcdefghij", "jihgfedcbaefghijkl"), true, 'Test 45');
test(checkInclusion("hello", "ohellonow"), true, 'Test 46');
test(checkInclusion("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcbaabcde"), true, 'Test 47');
test(checkInclusion("substring", "stringgnusbs"), false, 'Test 48');
test(checkInclusion("permutation", "tnuatipremot"), true, 'Test 49');
test(checkInclusion("testcase", "stceatcases"), false, 'Test 50');
test(checkInclusion("unique", "euqnieabcd"), false, 'Test 51');
test(checkInclusion("longstring", "gnirtsolongstring"), true, 'Test 52');
test(checkInclusion("abcdabcd", "dcbaabcd"), true, 'Test 53');
test(checkInclusion("mississippi", "isppiimsss"), false, 'Test 54');
test(checkInclusion("abcdef", "ghfedcbijklm"), false, 'Test 55');
test(checkInclusion("substringpermutation", "permutationsubstring"), true, 'Test 56');
test(checkInclusion("variation", "atinoriva"), true, 'Test 57');
test(checkInclusion("abcdefghijk", "jihgfedcbaklmnopqrs"), true, 'Test 58');
test(checkInclusion("abcd", "dcbaefghijklmnopqrstuvwxyz"), true, 'Test 59');
test(checkInclusion("permutation", "tporemutani"), true, 'Test 60');
test(checkInclusion("complexity", "xxlpeicmtostiy"), false, 'Test 61');
test(checkInclusion("unique", "ueiqnunc"), true, 'Test 62');
test(checkInclusion("aabbcc", "cbacbacbacbacbacbacbacbacb"), true, 'Test 63');
test(checkInclusion("abcdefg", "ghijklmnopabcdefg"), true, 'Test 64');
test(checkInclusion("abcdefghiklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyz"), false, 'Test 65');
test(checkInclusion("aabbccddeeff", "fedcbafedcbafedcba"), true, 'Test 66');
test(checkInclusion("challenge", "hgelangecllon"), false, 'Test 67');
test(checkInclusion("abcdefg", "gfedcbahijklmnopqrstuvwxyz"), true, 'Test 68');
test(checkInclusion("permutation", "tpremnoiuat"), true, 'Test 69');
test(checkInclusion("hello", "oellhworld"), true, 'Test 70');
test(checkInclusion("test", "tsetabcd"), true, 'Test 71');
test(checkInclusion("abcdefghijk", "kljihgfedcbazyxwvutsrqponml"), false, 'Test 72');
test(checkInclusion("abcdef", "fedcbaxyzabcdef"), true, 'Test 73');
test(checkInclusion("example", "melpaxe"), true, 'Test 74');
test(checkInclusion("interview", "wterevinirt"), true, 'Test 75');
test(checkInclusion("zyxw", "wxyzabcd"), true, 'Test 76');
test(checkInclusion("permutation", "ttnremuapoi"), true, 'Test 77');
test(checkInclusion("xyzz", "zzzyxzzzzzyx"), true, 'Test 78');
test(checkInclusion("hello", "ohellworld"), true, 'Test 79');
test(checkInclusion("longstring", "tgnirlongs"), true, 'Test 80');
test(checkInclusion("aabbcc", "bbccaaabcdef"), true, 'Test 81');
test(checkInclusion("aaaaabbbbb", "ababababab"), true, 'Test 82');
test(checkInclusion("complexpermutation", "xmplxcmpotrenuati"), false, 'Test 83');
test(checkInclusion("xyz", "zyxzyxzyxzyxzyx"), true, 'Test 84');
test(checkInclusion("mississippi", "ssippiimis"), false, 'Test 85');
test(checkInclusion("aabbbccc", "cccbbbaaabbbcccaabb"), true, 'Test 86');
test(checkInclusion("xyz", "zyxwvutsrqponmlkjihgfedcba"), true, 'Test 87');
test(checkInclusion("abcdefg", "zyxwvutsrqponmlkjihgfedcba"), true, 'Test 88');
test(checkInclusion("permutationexample", "xamplepermutation"), false, 'Test 89');
test(checkInclusion("substring", "ggnirtsabcd"), false, 'Test 90');
test(checkInclusion("abcdefgh", "hgfedcbaijkl"), true, 'Test 91');
test(checkInclusion("abacabadabacaba", "badacababacabadaba"), true, 'Test 92');
test(checkInclusion("characters", "tcsrhaec"), false, 'Test 93');
test(checkInclusion("longerstring", "stringlongeron"), true, 'Test 94');
test(checkInclusion("aabbcc", "baccab"), true, 'Test 95');

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
