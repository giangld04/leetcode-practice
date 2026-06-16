// Test: 3045. Count Prefix And Suffix Pairs Ii
// 69 test cases from LeetCodeDataset
// Run: node test.js

const { countPrefixSuffixPairs } = require("./solution");

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

console.log("\n3045. Count Prefix And Suffix Pairs Ii\n");

test(countPrefixSuffixPairs(["aaaa","aa","a"]), 0, 'Test 1');
test(countPrefixSuffixPairs(["a","a","a","a","a"]), 10, 'Test 2');
test(countPrefixSuffixPairs(["x","xx","xxx","xxxx"]), 6, 'Test 3');
test(countPrefixSuffixPairs(["abab","ab"]), 0, 'Test 4');
test(countPrefixSuffixPairs(["x","xx","xxx","xxxx","xxxxx"]), 10, 'Test 5');
test(countPrefixSuffixPairs(["z","zz","zzz","zzzz","zzzzz","zzzzzz"]), 15, 'Test 6');
test(countPrefixSuffixPairs(["hello","hellohello","hellohellohello","he"]), 3, 'Test 7');
test(countPrefixSuffixPairs(["abc","abcabc","abcd","abcabcabc"]), 3, 'Test 8');
test(countPrefixSuffixPairs(["a","a","a","a","a","a","a","a","a","a"]), 45, 'Test 9');
test(countPrefixSuffixPairs(["unique","uniqueword","uniquewordunique","uniq"]), 1, 'Test 10');
test(countPrefixSuffixPairs(["abc","abcabc","abcabcabc"]), 3, 'Test 11');
test(countPrefixSuffixPairs(["xyz","xyzxyz","zyxzyx"]), 1, 'Test 12');
test(countPrefixSuffixPairs(["abcd","abcdeabcda","ab"]), 0, 'Test 13');
test(countPrefixSuffixPairs(["a","aba","ababa","aa"]), 4, 'Test 14');
test(countPrefixSuffixPairs(["pa","papa","ma","mama"]), 2, 'Test 15');
test(countPrefixSuffixPairs(["test","testtest","testtesttest","t"]), 3, 'Test 16');
test(countPrefixSuffixPairs(["abc","abcabc","abcabcabc","a"]), 3, 'Test 17');
test(countPrefixSuffixPairs(["pattern","patternpattern","patternpatternpattern","patternpatternpatternpattern"]), 6, 'Test 18');
test(countPrefixSuffixPairs(["same","same","same","same","same","same","same","same","same","same"]), 45, 'Test 19');
test(countPrefixSuffixPairs(["mississippi","issis","sis","issippi","iss","missi","ippi","pi","ssippi","mississipi","ississippiissippi"]), 0, 'Test 20');
test(countPrefixSuffixPairs(["aaaabbbb","aaaabbbbcccc","aaaabbbbccccdddd","aaaabbbbccccddddaaaa","aa","bb","cc","dd"]), 0, 'Test 21');
test(countPrefixSuffixPairs(["abcabcabc","abc","abcabc","ab","a","abcabcabcabcabc"]), 4, 'Test 22');
test(countPrefixSuffixPairs(["ababab","abab","ab","a","babab","bab","b"]), 0, 'Test 23');
test(countPrefixSuffixPairs(["xyzyxyzyx","xyzyx","zyxzyx","xyz","zyx","yzy","zyzy","yzyxyzyx","yzyxyzyxyzyxyzyx"]), 1, 'Test 24');
test(countPrefixSuffixPairs(["repeat","repeatrepeat","repeatrepeatrepeat","peat","eat","at","t","rep","re","r","e","a","p","te"]), 3, 'Test 25');
test(countPrefixSuffixPairs(["abcde","edcba","abcdeabcde","edcbaedcba","abcdeedcbaabcde"]), 3, 'Test 26');
test(countPrefixSuffixPairs(["xyxyxy","xyxyxyxyxy","xyxyxyxyxyxyxy","xy","yx","x","y","xyxy","yxyx","xyyx","xxyx"]), 7, 'Test 27');
test(countPrefixSuffixPairs(["prefixsuffix","prefixsuffixprefixsuffix","prefixsuffixprefixsuffixprefixsuffix"]), 3, 'Test 28');
test(countPrefixSuffixPairs(["abcdeabcde","bcdeabcd","cdeabcde","deabcdec","eabcdabc","abcde","bcde","cde","de","e","abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz"]), 1, 'Test 29');
test(countPrefixSuffixPairs(["longwordlongword","longwordlongwordlongword","longword","word","long","wo","rd","ngwordlongword","wordlongwordlong","ngwordlongwordngwordlongword"]), 2, 'Test 30');
test(countPrefixSuffixPairs(["abcdabcdabcd","abcdabcd","abcd","abc","ab","a","abcdabcdabcdabcdabcdabcd"]), 3, 'Test 31');
test(countPrefixSuffixPairs(["pattern","ternpat","ternpatpat","pat","tern","patternpat","ternpattern","patterntern","ternpatternpat"]), 3, 'Test 32');
test(countPrefixSuffixPairs(["abcdabcdabcdabcd","abcdabcdabcd","abcdabcd","abcd","abc","ab","a","b","c","d","abcdabcdabcdabcdabcdabcdabcdabcd","abcdabcdabcdabcdabcdabcdabcd","abcdabcdabcdabcdabcdabcd","abcdabcdabcdabcdabcd","abcdabcdabcdabcd","abcdabcdabcd","abcdabcd","abcd","abc","ab","a","b","c","d"]), 32, 'Test 33');
test(countPrefixSuffixPairs(["aaaaa","aaa","aaaa","aaaaaa","aa"]), 4, 'Test 34');
test(countPrefixSuffixPairs(["prefixsuffix","prefix","suffix","prefixprefix","suffixsuffix","pre","suf"]), 2, 'Test 35');
test(countPrefixSuffixPairs(["xyxyxyxy","xyxy","xyxyxy","xy","x","xyxyxyxyxyxy"]), 5, 'Test 36');
test(countPrefixSuffixPairs(["xyxyxyxyxy","xyxyxyxy","xyxyxy","xyxy","xy","x","y","xyxyxyxyxyxyxyxy","xyxyxyxyxyxyxyxyxyxyxy","xyxyxyxyxyxyxyxyxyxyxyxyxyxyxy","xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy"]), 26, 'Test 37');
test(countPrefixSuffixPairs(["complexwordcomplexword","complexword","complex","com","co","complexwordcomplexwordcomplexword"]), 2, 'Test 38');
test(countPrefixSuffixPairs(["aaaa","aa","a","aaaaaaaaaaaa","aaaa"]), 6, 'Test 39');
test(countPrefixSuffixPairs(["abcabcabc","abc","abcabc","ab","a","b","c"]), 1, 'Test 40');
test(countPrefixSuffixPairs(["abcdabcd","abcd","cdab","dabc","bcda","cabd","bacd","abcdabcdabcd","abcdabcdabcdabcd","abcdabcdabcdabcdabcdabcdabcdabcd"]), 9, 'Test 41');
test(countPrefixSuffixPairs(["abcabcabc","abcabc","abc","a","b","c","abcabcabcabc"]), 3, 'Test 42');
test(countPrefixSuffixPairs(["longprefix","longprefixlongprefix","longprefixlongprefixlongprefix"]), 3, 'Test 43');
test(countPrefixSuffixPairs(["abc","abcabc","abcabcabc","abcabcabcabc"]), 6, 'Test 44');
test(countPrefixSuffixPairs(["abcabcabc","abcabc","abc","a","b","c"]), 0, 'Test 45');
test(countPrefixSuffixPairs(["prefixsuffix","prefix","suffix","prefixsuffixprefixsuffix","prefixprefix","suffixsuffix","prefixsuffixprefix","suffixprefixsuffix"]), 5, 'Test 46');
test(countPrefixSuffixPairs(["repeatedrepeated","repeated","repeatedrepeatedrepeated","repeatedrepeatedrepeatedrepeated","repeatedrepeatedrepeatedrepeatedrepeated","repeatedrepeatedrepeated","repeated","repeatedrepeatedrepeatedrepeatedrepeated"]), 20, 'Test 47');
test(countPrefixSuffixPairs(["aaaa","aaab","aabb","abbb","bbbb","baaa","baab","babb","bbba","bbbb","abab","baba","abba","baab","abba","baab","abba","baab"]), 10, 'Test 48');
test(countPrefixSuffixPairs(["abcd","abcdabcd","abcdabcdabcd","abcde","abcdeabcde"]), 4, 'Test 49');
test(countPrefixSuffixPairs(["abacaba","abac","acaba","aba","ba","a","abacabaabacaba","abacabaabacabaabacaba"]), 7, 'Test 50');
test(countPrefixSuffixPairs(["banana","anan","nana","anana","banana","bananaana","anana","ana","nana","banana"]), 5, 'Test 51');
test(countPrefixSuffixPairs(["aabbcc","bbccdd","ccddaa","aabb","bbaa","ccdd","aabbccdd","ddccbb","bbccddaa","aabbccbbcc","ccddbbcc","bbccddcc","aabbccddccdd","ddccbbccbbcc"]), 0, 'Test 52');
test(countPrefixSuffixPairs(["abcdabcdabcd","abcd","abc","ab","a","abcdabcd"]), 1, 'Test 53');
test(countPrefixSuffixPairs(["aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]), 10, 'Test 54');
test(countPrefixSuffixPairs(["aabb","aabbaabb","aabbaabbaabb","aabbaabbaabbaabb","aabbaabbaabbaabbaabb","aabb","aabbaabb","aabbaabbaabb","aabbaabbaabbaabbaabb"]), 27, 'Test 55');
test(countPrefixSuffixPairs(["abcabcabc","abcabc","abc","ab","a"]), 0, 'Test 56');
test(countPrefixSuffixPairs(["a","aa","aaa","aaaa","aaaaa","aaaaaa"]), 15, 'Test 57');
test(countPrefixSuffixPairs(["ababab","abab","aba","ab","a","abcabcabcabc"]), 0, 'Test 58');
test(countPrefixSuffixPairs(["longwordlongword","longword","word","long","short","longwordlong","longwordshort"]), 1, 'Test 59');
test(countPrefixSuffixPairs(["racecar","race","car","racecar","racecarcar","racecarcarcar"]), 1, 'Test 60');
test(countPrefixSuffixPairs(["ababababab","babababa","abab","bab","ab","a","abababababababababab","abababababababababababababababababab"]), 7, 'Test 61');
test(countPrefixSuffixPairs(["racecar","racecarracecar","racecarracecarracecar","racecarracecarracecarracecar","racecarracecarracecarracecarracecar","racecarracecarracecarracecarracecarracecar"]), 15, 'Test 62');
test(countPrefixSuffixPairs(["repeated","repeatedrepeated","repeatedrepeatedrepeated"]), 3, 'Test 63');
test(countPrefixSuffixPairs(["repeatrepeatrepeat","repeat","repeatrepeat","rep","re","repeatrepeatrepeatrepeat"]), 4, 'Test 64');
test(countPrefixSuffixPairs(["aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa"]), 15, 'Test 65');
test(countPrefixSuffixPairs(["repeatedrepeated","repeated","rep","eated","eat","eatereat","eatrepeat"]), 2, 'Test 66');
test(countPrefixSuffixPairs(["palindromemordnilap","mordnilap","ordnil","rnil","nil","il","l","o","d","p","emordnilap"]), 0, 'Test 67');
test(countPrefixSuffixPairs(["mixedcase","mixed","mix","edcase","edc","ase","asem","mixedcasemixed","mixedcasem","mixedcasease"]), 1, 'Test 68');
test(countPrefixSuffixPairs(["same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same","same"]), 190, 'Test 69');

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
