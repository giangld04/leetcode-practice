// Test: 1520. Maximum Number Of Non Overlapping Substrings
// 59 test cases from LeetCodeDataset
// Run: node test.js

const { maxNumOfSubstrings } = require("./solution");

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

console.log("\n1520. Maximum Number Of Non Overlapping Substrings\n");

test(maxNumOfSubstrings("zazbzczdzezfzgzhzi"), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], 'Test 1');
test(maxNumOfSubstrings("abcdefghijklmnopqrstuvwxyz"), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], 'Test 2');
test(maxNumOfSubstrings("aabbccaaaabbbbcccc"), ['aabbccaaaabbbbcccc'], 'Test 3');
test(maxNumOfSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj', 'kk', 'll', 'mm', 'nn', 'oo', 'pp', 'qq', 'rr', 'ss', 'tt', 'uu', 'vv', 'ww', 'xx', 'yy', 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'], 'Test 4');
test(maxNumOfSubstrings("abcdcba"), ['d'], 'Test 5');
test(maxNumOfSubstrings("aaaabaaaabaaaabaaaabaaaa"), ['aaaabaaaabaaaabaaaabaaaa'], 'Test 6');
test(maxNumOfSubstrings("abababab"), ['abababab'], 'Test 7');
test(maxNumOfSubstrings("aaaaa"), ['aaaaa'], 'Test 8');
test(maxNumOfSubstrings("zzzzzzz"), ['zzzzzzz'], 'Test 9');
test(maxNumOfSubstrings("abcdaabcdabdcabc"), ['abcdaabcdabdcabc'], 'Test 10');
test(maxNumOfSubstrings("abcabcabc"), ['abcabcabc'], 'Test 11');
test(maxNumOfSubstrings("adefaddaccc"), ['e', 'f', 'ccc'], 'Test 12');
test(maxNumOfSubstrings("abcde"), ['a', 'b', 'c', 'd', 'e'], 'Test 13');
test(maxNumOfSubstrings("aaa"), ['aaa'], 'Test 14');
test(maxNumOfSubstrings("abcdabcdeabcd"), ['e'], 'Test 15');
test(maxNumOfSubstrings("xyz"), ['x', 'y', 'z'], 'Test 16');
test(maxNumOfSubstrings("ababababa"), ['ababababa'], 'Test 17');
test(maxNumOfSubstrings("xyzxyzxyz"), ['xyzxyzxyz'], 'Test 18');
test(maxNumOfSubstrings("mnopqrstuvmnopqrstuvmnopqrstuv"), ['mnopqrstuvmnopqrstuvmnopqrstuv'], 'Test 19');
test(maxNumOfSubstrings("zzzzzzzzzz"), ['zzzzzzzzzz'], 'Test 20');
test(maxNumOfSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), ['zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'], 'Test 21');
test(maxNumOfSubstrings("cacaca"), ['cacaca'], 'Test 22');
test(maxNumOfSubstrings("abbaccd"), ['bb', 'cc', 'd'], 'Test 23');
test(maxNumOfSubstrings("zzzzyzxyz"), ['x'], 'Test 24');
test(maxNumOfSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj', 'kk', 'll', 'mm', 'nn', 'oo', 'pp', 'qq', 'rr', 'ss', 'tt', 'uu', 'vv', 'ww', 'xx', 'yy', 'zz'], 'Test 25');
test(maxNumOfSubstrings("abcdefg"), ['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'Test 26');
test(maxNumOfSubstrings("aaaaaaaaaaabbbbbbbbbbccccccccccdddddddddeeeeeeeeeeffffffffffgggggggggg"), ['aaaaaaaaaaa', 'bbbbbbbbbb', 'cccccccccc', 'ddddddddd', 'eeeeeeeeee', 'ffffffffff', 'gggggggggg'], 'Test 27');
test(maxNumOfSubstrings("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), ['abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc'], 'Test 28');
test(maxNumOfSubstrings("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), ['abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc'], 'Test 29');
test(maxNumOfSubstrings("aaaabbbbccccaaaabbbbccccaaaabbbbccccaaaabbbbccccaaaabbbbcccc"), ['aaaabbbbccccaaaabbbbccccaaaabbbbccccaaaabbbbccccaaaabbbbcccc'], 'Test 30');
test(maxNumOfSubstrings("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), ['abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd'], 'Test 31');
test(maxNumOfSubstrings("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), ['abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc'], 'Test 32');
test(maxNumOfSubstrings("zzzzzyyyyyxxxxwwwwvvvuuutttsssrqqppoonnnmmlkkjjiihhggffeedcba"), ['zzzzz', 'yyyyy', 'xxxx', 'wwww', 'vvv', 'uuu', 'ttt', 'sss', 'r', 'qq', 'pp', 'oo', 'nnn', 'mm', 'l', 'kk', 'jj', 'ii', 'hh', 'gg', 'ff', 'ee', 'd', 'c', 'b', 'a'], 'Test 33');
test(maxNumOfSubstrings("mnopqrstuvwxyzyxwvutsrqponmlkjihgfedcbamnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba"), ['mnopqrstuvwxyzyxwvutsrqponmlkjihgfedcbamnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba'], 'Test 34');
test(maxNumOfSubstrings("abracadabraacadabra"), ['abracadabraacadabra'], 'Test 35');
test(maxNumOfSubstrings("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), ['abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'], 'Test 36');
test(maxNumOfSubstrings("abacabadabcabaabacabadabcaba"), ['abacabadabcabaabacabadabcaba'], 'Test 37');
test(maxNumOfSubstrings("abacabadabcabaabacabadabcabaabacabadabcabaabacabadabcabaabacabadabcabaabacabadabcaba"), ['abacabadabcabaabacabadabcabaabacabadabcabaabacabadabcabaabacabadabcabaabacabadabcaba'], 'Test 38');
test(maxNumOfSubstrings("aabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabb"), ['aabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabb'], 'Test 39');
test(maxNumOfSubstrings("mnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuv"), ['mnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuv'], 'Test 40');
test(maxNumOfSubstrings("abababababababababababababababababababababababababababababababababababababababababababababababab"), ['abababababababababababababababababababababababababababababababababababababababababababababababab'], 'Test 41');
test(maxNumOfSubstrings("abcabcabcabcabcabcabcabc"), ['abcabcabcabcabcabcabcabc'], 'Test 42');
test(maxNumOfSubstrings("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), ['zz'], 'Test 43');
test(maxNumOfSubstrings("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), ['abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'], 'Test 44');
test(maxNumOfSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), ['zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'], 'Test 45');
test(maxNumOfSubstrings("abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef"), ['abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef'], 'Test 46');
test(maxNumOfSubstrings("aababbabacabcabcadabcdeabcdeafaghafaiabakabalacamadanaeafaagaagaa"), ['h', 'i', 'k', 'l', 'm', 'n'], 'Test 47');
test(maxNumOfSubstrings("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz"), ['xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz'], 'Test 48');
test(maxNumOfSubstrings("aabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeff"), ['aabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeff'], 'Test 49');
test(maxNumOfSubstrings("aaaaaabbbbbccccdddddeeeee"), ['aaaaaa', 'bbbbb', 'cccc', 'ddddd', 'eeeee'], 'Test 50');
test(maxNumOfSubstrings("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'], 'Test 51');
test(maxNumOfSubstrings("aaaaaaaaaabbbbbbbbccccccccddddddddeeeeeeeeffffffffgggggggghhhhhhhhiiiiiiiiijjjjjjjjkkkkkkkkkllllllllmmmmmmmmnnnnnnnnooooooooppppppppqqqqqqqqrrrrrrrrssssssssttttttttuuuuuuuuvvvvvvvvwwwwwwwwwxxxxxxxxxyyyyyyyyyzzzzzzzzz"), ['aaaaaaaaaa', 'bbbbbbbb', 'cccccccc', 'dddddddd', 'eeeeeeee', 'ffffffff', 'gggggggg', 'hhhhhhhh', 'iiiiiiiii', 'jjjjjjjj', 'kkkkkkkkk', 'llllllll', 'mmmmmmmm', 'nnnnnnnn', 'oooooooo', 'pppppppp', 'qqqqqqqq', 'rrrrrrrr', 'ssssssss', 'tttttttt', 'uuuuuuuu', 'vvvvvvvv', 'wwwwwwwww', 'xxxxxxxxx', 'yyyyyyyyy', 'zzzzzzzzz'], 'Test 52');
test(maxNumOfSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj', 'kk', 'll', 'mm', 'nn', 'oo', 'pp', 'qq', 'rr', 'ss', 'tt', 'uu', 'vv', 'ww', 'xx', 'yy', 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'], 'Test 53');
test(maxNumOfSubstrings("zyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyz"), ['aa'], 'Test 54');
test(maxNumOfSubstrings("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz"), ['xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz'], 'Test 55');
test(maxNumOfSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), ['zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'], 'Test 56');
test(maxNumOfSubstrings("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), ['abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd'], 'Test 57');
test(maxNumOfSubstrings("abacabadabacabadabacabadabacabadabacabadabacabad"), ['abacabadabacabadabacabadabacabadabacabadabacabad'], 'Test 58');
test(maxNumOfSubstrings("zzzzzyyyyyxxxxwwwwvvvvuuuuttttssssrrrrqqqqpppplllloooonnnnmmmm"), ['zzzzz', 'yyyyy', 'xxxx', 'wwww', 'vvvv', 'uuuu', 'tttt', 'ssss', 'rrrr', 'qqqq', 'pppp', 'llll', 'oooo', 'nnnn', 'mmmm'], 'Test 59');

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
