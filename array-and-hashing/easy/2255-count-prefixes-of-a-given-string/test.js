// Test: 2255. Count Prefixes Of A Given String
// 146 test cases from LeetCodeDataset
// Run: node test.js

const { countPrefixes } = require("./solution");

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

console.log("\n2255. Count Prefixes Of A Given String\n");

test(countPrefixes(["hello","hell","he","h"], "hello"), 4, 'Test 1');
test(countPrefixes(["short"], "shorter"), 1, 'Test 2');
test(countPrefixes(["same","same"], "same"), 2, 'Test 3');
test(countPrefixes(["hello"], "h"), 0, 'Test 4');
test(countPrefixes(["hello"], "hello"), 1, 'Test 5');
test(countPrefixes(["d","do","dog","doge"], "doge"), 4, 'Test 6');
test(countPrefixes(["prefix"], "prefix"), 1, 'Test 7');
test(countPrefixes(["same","same","same"], "same"), 3, 'Test 8');
test(countPrefixes(["world"], "world"), 1, 'Test 9');
test(countPrefixes(["a","b","c"], "abcde"), 1, 'Test 10');
test(countPrefixes(["a"], "a"), 1, 'Test 11');
test(countPrefixes(["not","a","prefix"], "example"), 0, 'Test 12');
test(countPrefixes(["test","testing","t"], "testing"), 3, 'Test 13');
test(countPrefixes(["xyz","xy","x"], "xyz"), 3, 'Test 14');
test(countPrefixes(["abcd"], "abc"), 0, 'Test 15');
test(countPrefixes(["a","b","c"], "d"), 0, 'Test 16');
test(countPrefixes(["test","testing","tested"], "testing"), 2, 'Test 17');
test(countPrefixes(["a","a"], "aa"), 2, 'Test 18');
test(countPrefixes(["abc"], "abc"), 1, 'Test 19');
test(countPrefixes(["abc","abcd","abcde"], "abcdef"), 3, 'Test 20');
test(countPrefixes(["z","zz","zzz"], "zzzz"), 3, 'Test 21');
test(countPrefixes(["cat","bat","rat"], "car"), 0, 'Test 22');
test(countPrefixes(["a","b","c","ab","bc","abc"], "abc"), 3, 'Test 23');
test(countPrefixes(["h"], "hello"), 1, 'Test 24');
test(countPrefixes(["a"], "b"), 0, 'Test 25');
test(countPrefixes(["yes","no"], "yesman"), 1, 'Test 26');
test(countPrefixes(["prefix"], "prefixing"), 1, 'Test 27');
test(countPrefixes(["hello","he","h"], "hello"), 3, 'Test 28');
test(countPrefixes(["test"], "testing"), 1, 'Test 29');
test(countPrefixes(["a","ab","abc","abcd"], "abcd"), 4, 'Test 30');
test(countPrefixes(["subsequence","subsequen","subsequen","subsequ","subsequ","subseq"], "subsequence"), 6, 'Test 31');
test(countPrefixes(["ab", "abc", "abcd"], "abcd"), 3, 'Test 32');
test(countPrefixes(["test","testing","tested","te"], "testing"), 3, 'Test 33');
test(countPrefixes(["unique", "uniq", "un"], "unique"), 3, 'Test 34');
test(countPrefixes(["different", "dif", "diff", "differ"], "different"), 4, 'Test 35');
test(countPrefixes(["partial", "parti", "part", "par"], "partialmatch"), 4, 'Test 36');
test(countPrefixes(["prefix", "pre", "pred"], "predicate"), 2, 'Test 37');
test(countPrefixes(["example","examp","exam","exa","ex","e"], "example"), 6, 'Test 38');
test(countPrefixes(["prefix", "prefi", "pref", "pre"], "prefix"), 4, 'Test 39');
test(countPrefixes(["abc", "abcd", "ab", "a"], "abcd"), 4, 'Test 40');
test(countPrefixes(["complex", "com", "comp", "comple", "complexe"], "complex"), 4, 'Test 41');
test(countPrefixes(["prefix", "prefi", "prefixe", "prefixex"], "prefixextension"), 4, 'Test 42');
test(countPrefixes(["a", "aa", "aaa", "aaaa"], "aaaaa"), 4, 'Test 43');
test(countPrefixes(["example", "ex", "exa", "exam", "examp", "examp"], "example"), 6, 'Test 44');
test(countPrefixes(["complex", "comple", "compl", "comp"], "complexity"), 4, 'Test 45');
test(countPrefixes(["hello", "hell", "he"], "hello"), 3, 'Test 46');
test(countPrefixes(["abcde", "bcde", "cde", "de", "e"], "abcde"), 1, 'Test 47');
test(countPrefixes(["abc", "def", "ghi"], "abcdefghi"), 1, 'Test 48');
test(countPrefixes(["not","no","n"], "note"), 3, 'Test 49');
test(countPrefixes(["multiple", "multip", "multi", "mult", "mult"], "multiple"), 5, 'Test 50');
test(countPrefixes(["word", "words", "wording"], "word"), 1, 'Test 51');
test(countPrefixes(["prefix","pre","p"], "prefix"), 3, 'Test 52');
test(countPrefixes(["overlap", "over", "ov", "o"], "overlap"), 4, 'Test 53');
test(countPrefixes(["a", "aa", "aaa", "aaaa", "aaaaa"], "aaaaaaaa"), 5, 'Test 54');
test(countPrefixes(["a", "aa", "aaa", "aaaa", "aaaaa"], "aaaaa"), 5, 'Test 55');
test(countPrefixes(["short", "shorter", "shortest"], "short"), 1, 'Test 56');
test(countPrefixes(["a", "ab", "abc", "abcd", "abcde", "abcdef", "abcdefg"], "abcdefgh"), 7, 'Test 57');
test(countPrefixes(["short", "shot", "sh", "s"], "shortstory"), 3, 'Test 58');
test(countPrefixes(["abcd", "abc", "ab", "a"], "a"), 1, 'Test 59');
test(countPrefixes(["longword", "long", "lo", "l", "lon", "longw"], "longword"), 6, 'Test 60');
test(countPrefixes(["a", "b", "c", "d", "e"], "abcde"), 1, 'Test 61');
test(countPrefixes(["prefix", "pre", "p"], "prefix"), 3, 'Test 62');
test(countPrefixes(["prefix", "pre", "pref", "prefi", "prefixe"], "prefix"), 4, 'Test 63');
test(countPrefixes(["aaa", "aa", "a"], "aaaaa"), 3, 'Test 64');
test(countPrefixes(["word", "wording", "worded", "wordingword"], "wordingword"), 3, 'Test 65');
test(countPrefixes(["test", "testing", "testi", "testin"], "testingstring"), 4, 'Test 66');
test(countPrefixes(["one","two","three","four"], "one"), 1, 'Test 67');
test(countPrefixes(["different", "diff", "diffe", "differen", "differen"], "different"), 5, 'Test 68');
test(countPrefixes(["unique", "uniq", "un", "u"], "unique"), 4, 'Test 69');
test(countPrefixes(["aaa", "aa", "a", "aaaa"], "aaa"), 3, 'Test 70');
test(countPrefixes(["abcd", "bcde", "cdef", "defg"], "abcd"), 1, 'Test 71');
test(countPrefixes(["not", "no", "n"], "note"), 3, 'Test 72');
test(countPrefixes(["same", "same", "same", "same"], "same"), 4, 'Test 73');
test(countPrefixes(["test", "testing", "tea", "te"], "testing"), 3, 'Test 74');
test(countPrefixes(["longword", "long", "lo", "l"], "longwordexample"), 4, 'Test 75');
test(countPrefixes(["begin", "beg", "be", "b"], "beginning"), 4, 'Test 76');
test(countPrefixes(["overlap", "over", "o"], "overlap"), 3, 'Test 77');
test(countPrefixes(["test", "testing", "tes", "t"], "testing"), 4, 'Test 78');
test(countPrefixes(["xy", "xyz", "xyzz"], "xy"), 1, 'Test 79');
test(countPrefixes(["one", "two", "three", "four", "five"], "fives"), 1, 'Test 80');
test(countPrefixes(["longword", "long", "lo", "l"], "longword"), 4, 'Test 81');
test(countPrefixes(["example", "ex", "exa", "exam", "examp"], "example"), 5, 'Test 82');
test(countPrefixes(["one", "two", "three"], "onetwothree"), 1, 'Test 83');
test(countPrefixes(["abc", "abcd", "abcde"], "abcdef"), 3, 'Test 84');
test(countPrefixes(["multiple", "multi", "mul", "mu"], "multiples"), 4, 'Test 85');
test(countPrefixes(["word", "wor", "wo", "w"], "word"), 4, 'Test 86');
test(countPrefixes(["banana", "ban", "ba", "b"], "bananarama"), 4, 'Test 87');
test(countPrefixes(["abcd","abc","ab","a"], "abcd"), 4, 'Test 88');
test(countPrefixes(["a", "aa", "aaa", "aaaa"], "aaaa"), 4, 'Test 89');
test(countPrefixes(["prefix", "pre", "prefixx", "prefixxx", "prefixxxx"], "prefixx"), 3, 'Test 90');
test(countPrefixes(["quick", "qui", "quic", "quicks", "quickb"], "quickbrownfox"), 4, 'Test 91');
test(countPrefixes(["test", "testing", "tested"], "testing"), 2, 'Test 92');
test(countPrefixes(["one", "onetwo", "onetwothree"], "onetwothree"), 3, 'Test 93');
test(countPrefixes(["programming", "prog", "pro"], "programming"), 3, 'Test 94');
test(countPrefixes(["part", "partial", "partially"], "partially"), 3, 'Test 95');
test(countPrefixes(["aaa", "aa", "a", "aaaa"], "aaaa"), 4, 'Test 96');
test(countPrefixes(["one", "two", "three", "four"], "one"), 1, 'Test 97');
test(countPrefixes(["prefix", "pre", "prex", "abc"], "prefix"), 2, 'Test 98');
test(countPrefixes(["abc","abcd","abcde"], "abcdefg"), 3, 'Test 99');
test(countPrefixes(["repeat","repe","rep","re","r"], "repeat"), 5, 'Test 100');
test(countPrefixes(["a","ab","abc","abcd","abcde"], "a"), 1, 'Test 101');
test(countPrefixes(["a", "aa", "aaa", "aaaa", "aaaaa"], "aaaaaa"), 5, 'Test 102');
test(countPrefixes(["complex", "comp", "com", "co", "c"], "complexity"), 5, 'Test 103');
test(countPrefixes(["python", "pyth", "py"], "python"), 3, 'Test 104');
test(countPrefixes(["xyz","xy","x"], "xy"), 2, 'Test 105');
test(countPrefixes(["xyz", "xy", "x", ""], "xyz"), 4, 'Test 106');
test(countPrefixes(["complex", "com", "co", "c"], "complex"), 4, 'Test 107');
test(countPrefixes(["prefix", "prefixx", "prefixxx", "prefixxxx"], "prefix"), 1, 'Test 108');
test(countPrefixes(["abc", "abcd", "abcde"], "abcdefg"), 3, 'Test 109');
test(countPrefixes(["abc", "def", "ghi", "abc"], "abcdefghi"), 2, 'Test 110');
test(countPrefixes(["cat", "cattle", "cattleman"], "cattleman"), 3, 'Test 111');
test(countPrefixes(["xyz", "xy", "x"], "xyz"), 3, 'Test 112');
test(countPrefixes(["same", "same", "same"], "same"), 3, 'Test 113');
test(countPrefixes(["prefix", "pre", "pref"], "prefix"), 3, 'Test 114');
test(countPrefixes(["a", "ab", "abc", "abcd", "abcde", "abcdef"], "fghijkl"), 0, 'Test 115');
test(countPrefixes(["small", "smaller", "smallest", "smallerest"], "smallerest"), 3, 'Test 116');
test(countPrefixes(["substring", "subs", "sub", "su"], "substringexample"), 4, 'Test 117');
test(countPrefixes(["abc", "abcd", "abcde", "abcdef"], "abcdefg"), 4, 'Test 118');
test(countPrefixes(["test", "testing", "testi"], "test"), 1, 'Test 119');
test(countPrefixes(["zz", "zzz", "zzzz"], "zzzz"), 3, 'Test 120');
test(countPrefixes(["hello", "he", "hell"], "hello"), 3, 'Test 121');
test(countPrefixes(["prefix", "pre", "pref", "prex"], "prefix"), 3, 'Test 122');
test(countPrefixes(["z", "zz", "zzz", "zzzz"], "zzzzzz"), 4, 'Test 123');
test(countPrefixes(["unique","uniq","uni","un","u"], "unique"), 5, 'Test 124');
test(countPrefixes(["cat", "dog", "car", "catch", "cart"], "catch"), 2, 'Test 125');
test(countPrefixes(["consistent", "consist", "consi", "cons"], "consistency"), 3, 'Test 126');
test(countPrefixes(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], "abcdefghij"), 1, 'Test 127');
test(countPrefixes(["unique", "uniq", "uni", "un"], "uniques"), 4, 'Test 128');
test(countPrefixes(["hello", "world", "hel", "wo", "wor"], "helloworld"), 2, 'Test 129');
test(countPrefixes(["overlap", "over", "ov", "overlaplap"], "overlap"), 3, 'Test 130');
test(countPrefixes(["matching","match","mat","ma","m"], "matching"), 5, 'Test 131');
test(countPrefixes(["hello", "hell", "he", "h", "hellohello"], "hellohello"), 5, 'Test 132');
test(countPrefixes(["a", "aa", "aaa", "aaaa"], "aaaaaaaaa"), 4, 'Test 133');
test(countPrefixes(["test", "testing", "testing123"], "test"), 1, 'Test 134');
test(countPrefixes(["match", "mat", "ma", "m"], "match"), 4, 'Test 135');
test(countPrefixes(["example", "exa", "ex", "e"], "example"), 4, 'Test 136');
test(countPrefixes(["hello", "hell", "he", "h"], "hello"), 4, 'Test 137');
test(countPrefixes(["word", "wording", "wordings"], "word"), 1, 'Test 138');
test(countPrefixes(["prefix","pre","p","programming"], "prefix"), 3, 'Test 139');
test(countPrefixes(["a", "ab", "abc", "abcd"], "abcde"), 4, 'Test 140');
test(countPrefixes(["unique", "uniqueness", "uni", "un"], "uniqueness"), 4, 'Test 141');
test(countPrefixes(["one", "on", "o", "ones"], "one"), 3, 'Test 142');
test(countPrefixes(["word", "wo", "w"], "word"), 3, 'Test 143');
test(countPrefixes(["prefix", "pre", "pr", "p"], "prefix"), 4, 'Test 144');
test(countPrefixes(["example", "exam", "ex", "e"], "examples"), 4, 'Test 145');
test(countPrefixes(["common","commo","comm","com","co","c"], "common"), 6, 'Test 146');

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
