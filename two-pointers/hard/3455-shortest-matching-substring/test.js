// Test: 3455. Shortest Matching Substring
// 172 test cases from LeetCodeDataset
// Run: node test.js

const { shortestMatchingSubstring } = require("./solution");

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

console.log("\n3455. Shortest Matching Substring\n");

test(shortestMatchingSubstring("ab", "a*b"), Error: not enough values to unpack [expected 3, got 2], 'Test 1');
test(shortestMatchingSubstring("abcdefg", "*bcd*fg"), 6, 'Test 2');
test(shortestMatchingSubstring("abcabcabc", "*bc*bc"), 5, 'Test 3');
test(shortestMatchingSubstring("mississippi", "mis*si*"), 5, 'Test 4');
test(shortestMatchingSubstring("baccbaadbc", "cc*baa*adb"), -1, 'Test 5');
test(shortestMatchingSubstring("aaaaa", "*aaa*"), 3, 'Test 6');
test(shortestMatchingSubstring("xyz", "*x*z"), -1, 'Test 7');
test(shortestMatchingSubstring("xyxyxyxy", "xy*xy*"), 4, 'Test 8');
test(shortestMatchingSubstring("abcdefg", "*c*e*"), Error: too many values to unpack [expected 3], 'Test 9');
test(shortestMatchingSubstring("abaacbaecebce", "ba*c*ce"), 8, 'Test 10');
test(shortestMatchingSubstring("a", "*a"), Error: not enough values to unpack [expected 3, got 2], 'Test 11');
test(shortestMatchingSubstring("hello", "he*lo"), Error: not enough values to unpack [expected 3, got 2], 'Test 12');
test(shortestMatchingSubstring("aaaa", "aa*aa"), Error: not enough values to unpack [expected 3, got 2], 'Test 13');
test(shortestMatchingSubstring("aaaaaa", "a*a*a"), 3, 'Test 14');
test(shortestMatchingSubstring("abcdefg", "*c*f*"), Error: too many values to unpack [expected 3], 'Test 15');
test(shortestMatchingSubstring("hellothere", "he*lo*re"), 10, 'Test 16');
test(shortestMatchingSubstring("a", "**"), 0, 'Test 17');
test(shortestMatchingSubstring("abcde", "*c*"), 1, 'Test 18');
test(shortestMatchingSubstring("test", "*est"), Error: not enough values to unpack [expected 3, got 2], 'Test 19');
test(shortestMatchingSubstring("abababab", "a*b*a*"), Error: too many values to unpack [expected 3], 'Test 20');
test(shortestMatchingSubstring("xyz", "*z*"), 1, 'Test 21');
test(shortestMatchingSubstring("madlogic", "*adlogi*"), 6, 'Test 22');
test(shortestMatchingSubstring("", "**"), -1, 'Test 23');
test(shortestMatchingSubstring("a", "a*"), Error: not enough values to unpack [expected 3, got 2], 'Test 24');
test(shortestMatchingSubstring("mississippi", "*iss*ippi*"), Error: too many values to unpack [expected 3], 'Test 25');
test(shortestMatchingSubstring("mississippi", "mis*is*ip"), 9, 'Test 26');
test(shortestMatchingSubstring("mississippi", "*issi*"), 4, 'Test 27');
test(shortestMatchingSubstring("abracadabra", "*bra*bra"), 10, 'Test 28');
test(shortestMatchingSubstring("zxyabcabcdezy", "*abc*abc*"), Error: too many values to unpack [expected 3], 'Test 29');
test(shortestMatchingSubstring("aabbccddeeffgg", "*bbcc*eeff"), 10, 'Test 30');
test(shortestMatchingSubstring("abcdefghijk", "*def*g*j*"), Error: too many values to unpack [expected 3], 'Test 31');
test(shortestMatchingSubstring("hellohellohello", "*llohe*llo"), 8, 'Test 32');
test(shortestMatchingSubstring("aaaaabaaaaaaabaaaaa", "*aaaa*a*"), Error: too many values to unpack [expected 3], 'Test 33');
test(shortestMatchingSubstring("thisisatest", "*sis*est*"), Error: too many values to unpack [expected 3], 'Test 34');
test(shortestMatchingSubstring("aaaaaaabbbbbbb", "*aaa*bbb*"), Error: too many values to unpack [expected 3], 'Test 35');
test(shortestMatchingSubstring("abracadabra", "*bra*cad*"), Error: too many values to unpack [expected 3], 'Test 36');
test(shortestMatchingSubstring("hellohellohello", "*ell*lo*"), Error: too many values to unpack [expected 3], 'Test 37');
test(shortestMatchingSubstring("mississippi", "*iss*iss"), 6, 'Test 38');
test(shortestMatchingSubstring("xyxxyxyxyx", "*xyx*yx*"), Error: too many values to unpack [expected 3], 'Test 39');
test(shortestMatchingSubstring("xxyyxxyyxxyy", "x*y*x*"), Error: too many values to unpack [expected 3], 'Test 40');
test(shortestMatchingSubstring("aaaaabbbbbcccc", "*bbb*ccc*"), Error: too many values to unpack [expected 3], 'Test 41');
test(shortestMatchingSubstring("abracadabra", "*ra*c*bra"), Error: too many values to unpack [expected 3], 'Test 42');
test(shortestMatchingSubstring("multimatches", "*ult*mat*hes*"), Error: too many values to unpack [expected 3], 'Test 43');
test(shortestMatchingSubstring("overlappingpatterns", "*ver*lap*patt*"), Error: too many values to unpack [expected 3], 'Test 44');
test(shortestMatchingSubstring("aaaaaaabbbb", "*aaaa*bbb"), 7, 'Test 45');
test(shortestMatchingSubstring("abcabcabcabc", "*abc*abc*"), Error: too many values to unpack [expected 3], 'Test 46');
test(shortestMatchingSubstring("aaaabaaaabaaaa", "*aaa*a*aaa*"), Error: too many values to unpack [expected 3], 'Test 47');
test(shortestMatchingSubstring("abcdefghabcdefgh", "*cde*fgh*"), Error: too many values to unpack [expected 3], 'Test 48');
test(shortestMatchingSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zz*zz*zz"), 6, 'Test 49');
test(shortestMatchingSubstring("algorithm", "*log*i*"), Error: too many values to unpack [expected 3], 'Test 50');
test(shortestMatchingSubstring("repeatedcharacters", "*eat*char*"), Error: too many values to unpack [expected 3], 'Test 51');
test(shortestMatchingSubstring("abcdabcdabcdabcdabcdabcd", "*bcd*abc*"), Error: too many values to unpack [expected 3], 'Test 52');
test(shortestMatchingSubstring("xyxxyxyxyx", "*xx*yy*"), Error: too many values to unpack [expected 3], 'Test 53');
test(shortestMatchingSubstring("abcdefghijkxyz", "*def*xyz"), 11, 'Test 54');
test(shortestMatchingSubstring("abababab", "*aba*ba*"), Error: too many values to unpack [expected 3], 'Test 55');
test(shortestMatchingSubstring("abcabcabcabcabcabc", "*abc*abc*abc*abc*"), Error: too many values to unpack [expected 3], 'Test 56');
test(shortestMatchingSubstring("patternmatchingexample", "*ern*ampl*"), Error: too many values to unpack [expected 3], 'Test 57');
test(shortestMatchingSubstring("aabbccddeeff", "*bb*ee*"), Error: too many values to unpack [expected 3], 'Test 58');
test(shortestMatchingSubstring("abcxyzabcxyzabcxyz", "*bc*xy*z*"), Error: too many values to unpack [expected 3], 'Test 59');
test(shortestMatchingSubstring("mississippiissi", "*iss*issi*"), Error: too many values to unpack [expected 3], 'Test 60');
test(shortestMatchingSubstring("hellohellohello", "he*ll*ohello"), 10, 'Test 61');
test(shortestMatchingSubstring("abcdefghij", "*def*ghi*"), Error: too many values to unpack [expected 3], 'Test 62');
test(shortestMatchingSubstring("repeatedpattern", "*peat*pat*"), Error: too many values to unpack [expected 3], 'Test 63');
test(shortestMatchingSubstring("longestsubstring", "*long*string*"), Error: too many values to unpack [expected 3], 'Test 64');
test(shortestMatchingSubstring("complexpattern", "*plex*ern*"), Error: too many values to unpack [expected 3], 'Test 65');
test(shortestMatchingSubstring("patternmatching", "*tern*match*"), Error: too many values to unpack [expected 3], 'Test 66');
test(shortestMatchingSubstring("aabbccddeeff", "*bb*cc*dd*"), Error: too many values to unpack [expected 3], 'Test 67');
test(shortestMatchingSubstring("mississippi", "*issi*ppi"), 7, 'Test 68');
test(shortestMatchingSubstring("abcabcabcabc", "*abc*abc"), 6, 'Test 69');
test(shortestMatchingSubstring("thisisateststring", "*test*string"), 10, 'Test 70');
test(shortestMatchingSubstring("repeatedsubstring", "*peat*string*"), Error: too many values to unpack [expected 3], 'Test 71');
test(shortestMatchingSubstring("thelongestsubstring", "*long*sub*"), Error: too many values to unpack [expected 3], 'Test 72');
test(shortestMatchingSubstring("abracadabra", "*bra*bra*"), Error: too many values to unpack [expected 3], 'Test 73');
test(shortestMatchingSubstring("noonnoon", "*on*on*"), Error: too many values to unpack [expected 3], 'Test 74');
test(shortestMatchingSubstring("abcdeabcdeabcde", "*bc*de*"), Error: too many values to unpack [expected 3], 'Test 75');
test(shortestMatchingSubstring("abacabadabacaba", "*aca*aba*"), Error: too many values to unpack [expected 3], 'Test 76');
test(shortestMatchingSubstring("abcdefghij", "*de*f*"), Error: too many values to unpack [expected 3], 'Test 77');
test(shortestMatchingSubstring("mississipi", "*iss*issi"), 7, 'Test 78');
test(shortestMatchingSubstring("abcdabcdabcd", "*bcd*abcd*"), Error: too many values to unpack [expected 3], 'Test 79');
test(shortestMatchingSubstring("algorithm", "*log*a*th*"), Error: too many values to unpack [expected 3], 'Test 80');
test(shortestMatchingSubstring("abcdefghijabcdefghijabcdefghij", "abc*efg*ij"), 10, 'Test 81');
test(shortestMatchingSubstring("hellohellohello", "*ell*ello*"), Error: too many values to unpack [expected 3], 'Test 82');
test(shortestMatchingSubstring("substringsearch", "*bstr*sea*"), Error: too many values to unpack [expected 3], 'Test 83');
test(shortestMatchingSubstring("repeatedstringrepeatedstring", "*ated*s*ing*"), Error: too many values to unpack [expected 3], 'Test 84');
test(shortestMatchingSubstring("aaaaabbbbb", "*aaa*bbb*"), Error: too many values to unpack [expected 3], 'Test 85');
test(shortestMatchingSubstring("abcdefgh", "*bc*d*f*"), Error: too many values to unpack [expected 3], 'Test 86');
test(shortestMatchingSubstring("racecar", "*ace*car"), 6, 'Test 87');
test(shortestMatchingSubstring("repeatedrepeated", "*peat*eat*"), Error: too many values to unpack [expected 3], 'Test 88');
test(shortestMatchingSubstring("banana", "*na*na"), 4, 'Test 89');
test(shortestMatchingSubstring("abxycxyzb", "*xy*z*"), Error: too many values to unpack [expected 3], 'Test 90');
test(shortestMatchingSubstring("abcdefghij", "*def*g*i*j*"), Error: too many values to unpack [expected 3], 'Test 91');
test(shortestMatchingSubstring("nestednestednestednested", "*est*nest*"), Error: too many values to unpack [expected 3], 'Test 92');
test(shortestMatchingSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "aa*bb*cc"), 6, 'Test 93');
test(shortestMatchingSubstring("pneumonoultramicroscopicsilicovolcanoconiosis", "*micro*cono*"), Error: too many values to unpack [expected 3], 'Test 94');
test(shortestMatchingSubstring("mississippiissippi", "*iss*ppi*"), Error: too many values to unpack [expected 3], 'Test 95');
test(shortestMatchingSubstring("patternmatchings", "*tern*match*ings"), Error: too many values to unpack [expected 3], 'Test 96');
test(shortestMatchingSubstring("aaaaabbbbb", "*aaaa*b*"), Error: too many values to unpack [expected 3], 'Test 97');
test(shortestMatchingSubstring("abcdefghijabcdefghij", "*def*ghijghij"), -1, 'Test 98');
test(shortestMatchingSubstring("ababababab", "*aba*aba"), 7, 'Test 99');
test(shortestMatchingSubstring("aaaabbbbccccdddd", "*bbb*ccc*"), Error: too many values to unpack [expected 3], 'Test 100');
test(shortestMatchingSubstring("thisisateststring", "*test*str*"), Error: too many values to unpack [expected 3], 'Test 101');
test(shortestMatchingSubstring("xyxyxyxyxyxy", "*xyx*yxy*"), Error: too many values to unpack [expected 3], 'Test 102');
test(shortestMatchingSubstring("racecar", "*ace*ca*"), Error: too many values to unpack [expected 3], 'Test 103');
test(shortestMatchingSubstring("ababababab", "ab*a*ab"), 6, 'Test 104');
test(shortestMatchingSubstring("ababababa", "*aba*aba"), 7, 'Test 105');
test(shortestMatchingSubstring("xyzxyzxyz", "*yz*x*"), Error: too many values to unpack [expected 3], 'Test 106');
test(shortestMatchingSubstring("abcdefgh", "*cde*ghi*"), Error: too many values to unpack [expected 3], 'Test 107');
test(shortestMatchingSubstring("programming", "*gram*ming*"), Error: too many values to unpack [expected 3], 'Test 108');
test(shortestMatchingSubstring("zzzzzzzzzzz", "zz*zz*zz"), 6, 'Test 109');
test(shortestMatchingSubstring("sequenceofcharacters", "*qu*ar*"), Error: too many values to unpack [expected 3], 'Test 110');
test(shortestMatchingSubstring("abababab", "*bab*ab"), 5, 'Test 111');
test(shortestMatchingSubstring("aaaaaaaaaa", "*aaaaa*aa"), 7, 'Test 112');
test(shortestMatchingSubstring("abcdefghij", "*c*gh*"), Error: too many values to unpack [expected 3], 'Test 113');
test(shortestMatchingSubstring("thisisaverylongstringwithseveraloccurrencesofthesubstring", "*is*a*ng*"), Error: too many values to unpack [expected 3], 'Test 114');
test(shortestMatchingSubstring("xyxzyzyx", "*xyz*zyx"), -1, 'Test 115');
test(shortestMatchingSubstring("banana", "*na*na*"), Error: too many values to unpack [expected 3], 'Test 116');
test(shortestMatchingSubstring("aaaabaaaabaaaab", "*aaa*b*"), Error: too many values to unpack [expected 3], 'Test 117');
test(shortestMatchingSubstring("abcdefghijabcdefghij", "*def*ghi*"), Error: too many values to unpack [expected 3], 'Test 118');
test(shortestMatchingSubstring("abcdeabcdeabcde", "*bc*d*e*"), Error: too many values to unpack [expected 3], 'Test 119');
test(shortestMatchingSubstring("uniquestring", "*niq*ing*"), Error: too many values to unpack [expected 3], 'Test 120');
test(shortestMatchingSubstring("abcdabcd", "*bcd*abc*"), Error: too many values to unpack [expected 3], 'Test 121');
test(shortestMatchingSubstring("abcabcabcabcabcabc", "*bc*a*bc*"), Error: too many values to unpack [expected 3], 'Test 122');
test(shortestMatchingSubstring("ababababab", "*aba*aba*"), Error: too many values to unpack [expected 3], 'Test 123');
test(shortestMatchingSubstring("xylophone", "*pho*ne*"), Error: too many values to unpack [expected 3], 'Test 124');
test(shortestMatchingSubstring("banana", "*an*a*"), Error: too many values to unpack [expected 3], 'Test 125');
test(shortestMatchingSubstring("hellohellohello", "ello*hello*"), 9, 'Test 126');
test(shortestMatchingSubstring("ababababa", "*aba*aba*"), Error: too many values to unpack [expected 3], 'Test 127');
test(shortestMatchingSubstring("abcdefghijk", "*def*ghi*"), Error: too many values to unpack [expected 3], 'Test 128');
test(shortestMatchingSubstring("complexpattern", "*ple*pat*"), Error: too many values to unpack [expected 3], 'Test 129');
test(shortestMatchingSubstring("xyxxyxyxyxyx", "*xyx*yx*xyx*"), Error: too many values to unpack [expected 3], 'Test 130');
test(shortestMatchingSubstring("longerstringhere", "*onge*here*"), Error: too many values to unpack [expected 3], 'Test 131');
test(shortestMatchingSubstring("aabbccddeeffgghhiijj", "*bbcc*ddee*"), Error: too many values to unpack [expected 3], 'Test 132');
test(shortestMatchingSubstring("exampleexample", "*amp*ple*"), Error: too many values to unpack [expected 3], 'Test 133');
test(shortestMatchingSubstring("xyzyzyzyzyz", "*zyz*zyz"), 7, 'Test 134');
test(shortestMatchingSubstring("nestednested", "*nes*t*es*"), Error: too many values to unpack [expected 3], 'Test 135');
test(shortestMatchingSubstring("abcdeabcde", "*bcde*bc"), 7, 'Test 136');
test(shortestMatchingSubstring("zzzzyyyxxxwwww", "*yyy*xxx"), 6, 'Test 137');
test(shortestMatchingSubstring("xylophone", "*pho*ne"), 5, 'Test 138');
test(shortestMatchingSubstring("xyzzzzxyzzzzxyzzzz", "*zzzz*x*y*"), Error: too many values to unpack [expected 3], 'Test 139');
test(shortestMatchingSubstring("qwertyuiopasdfghjklzxcvbnm", "qw*rt*yui*"), Error: too many values to unpack [expected 3], 'Test 140');
test(shortestMatchingSubstring("abcdefghijklmnopqrstuvwxyz", "*def*g*"), Error: too many values to unpack [expected 3], 'Test 141');
test(shortestMatchingSubstring("mississippi", "*iss*si*"), Error: too many values to unpack [expected 3], 'Test 142');
test(shortestMatchingSubstring("abcabcabcabcabcabc", "*bc*ca*"), Error: too many values to unpack [expected 3], 'Test 143');
test(shortestMatchingSubstring("pneumonoultramicroscopicsilicovolcanoconiosis", "*ultra*micro*"), Error: too many values to unpack [expected 3], 'Test 144');
test(shortestMatchingSubstring("abcdefghijabcdefghij", "*def*ghi*def*ghi*"), Error: too many values to unpack [expected 3], 'Test 145');
test(shortestMatchingSubstring("abcdefghijabcdefghij", "*def*ghi*j*"), Error: too many values to unpack [expected 3], 'Test 146');
test(shortestMatchingSubstring("abcdef", "*bcd*ef*"), Error: too many values to unpack [expected 3], 'Test 147');
test(shortestMatchingSubstring("abcdabcdabcd", "*bcd*abc*"), Error: too many values to unpack [expected 3], 'Test 148');
test(shortestMatchingSubstring("aaaaaaaabbbbaaaaa", "*bbb*aaa*"), Error: too many values to unpack [expected 3], 'Test 149');
test(shortestMatchingSubstring("aquickbrownfoxjumpsoverthelazydog", "*quick*dog*"), Error: too many values to unpack [expected 3], 'Test 150');
test(shortestMatchingSubstring("abcdefghijklmnopqrstuvwxyz", "abc*xyz*"), 26, 'Test 151');
test(shortestMatchingSubstring("1234567890", "*34*78*"), Error: too many values to unpack [expected 3], 'Test 152');
test(shortestMatchingSubstring("abcdefghijk", "*cde*ghi*"), Error: too many values to unpack [expected 3], 'Test 153');
test(shortestMatchingSubstring("hellohellohello", "*ello*lo*"), Error: too many values to unpack [expected 3], 'Test 154');
test(shortestMatchingSubstring("aabbccddeeffgghhiijjkk", "*bb*ff*jj*"), Error: too many values to unpack [expected 3], 'Test 155');
test(shortestMatchingSubstring("abcdefghij", "*def*ghij"), 7, 'Test 156');
test(shortestMatchingSubstring("abcabcabcabcabc", "*abc*abcabc"), 9, 'Test 157');
test(shortestMatchingSubstring("aabbccddeeff", "*bbcc*ccdd"), -1, 'Test 158');
test(shortestMatchingSubstring("qwertyuiopasdfghjklzxcvbnm", "*ghj*k*xc*"), Error: too many values to unpack [expected 3], 'Test 159');
test(shortestMatchingSubstring("abcdefghij", "*abc*def*"), Error: too many values to unpack [expected 3], 'Test 160');
test(shortestMatchingSubstring("qwertyuiopasdfghjklzxcvbnm", "*qwe*cvb*"), Error: too many values to unpack [expected 3], 'Test 161');
test(shortestMatchingSubstring("abcdefghijabcdefghij", "*def*g*h*"), Error: too many values to unpack [expected 3], 'Test 162');
test(shortestMatchingSubstring("abcdeabcdeabcde", "*bcde*bcde"), 9, 'Test 163');
test(shortestMatchingSubstring("thisisaverylongteststring", "*very*test*"), Error: too many values to unpack [expected 3], 'Test 164');
test(shortestMatchingSubstring("mississippi", "*iss*ss*"), Error: too many values to unpack [expected 3], 'Test 165');
test(shortestMatchingSubstring("longstringwithvariouscharacters", "*with*char*"), Error: too many values to unpack [expected 3], 'Test 166');
test(shortestMatchingSubstring("mississippi", "miss*ss*"), 7, 'Test 167');
test(shortestMatchingSubstring("abcdabcdabcd", "*abc*d*d*"), Error: too many values to unpack [expected 3], 'Test 168');
test(shortestMatchingSubstring("banana", "*an*na*"), Error: too many values to unpack [expected 3], 'Test 169');
test(shortestMatchingSubstring("patternmatching", "*tern*atch*"), Error: too many values to unpack [expected 3], 'Test 170');
test(shortestMatchingSubstring("abcdefgabcdefg", "*abc*def*g*"), Error: too many values to unpack [expected 3], 'Test 171');
test(shortestMatchingSubstring("hellohellohello", "*hello*lo"), 10, 'Test 172');

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
