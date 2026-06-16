// Test: 3441. Minimum Cost Good Caption
// 80 test cases from LeetCodeDataset
// Run: node test.js

const { minCostGoodCaption } = require("./solution");

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

console.log("\n3441. Minimum Cost Good Caption\n");

test(minCostGoodCaption("cdcd"), cccc, 'Test 1');
test(minCostGoodCaption("xyz"), yyy, 'Test 2');
test(minCostGoodCaption("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), aaaaccceeefffhhhiiikkklllnnnoooqqqrrrtttuuuwwwxxxzzz, 'Test 3');
test(minCostGoodCaption("aabbbccc"), bbbbbccc, 'Test 4');
test(minCostGoodCaption("abcdefghijklmnopqrstuvwxyz"), bbbbffffjjjmmmpppsssvvvyyy, 'Test 5');
test(minCostGoodCaption("cccccc"), cccccc, 'Test 6');
test(minCostGoodCaption("abcdefg"), bbbbfff, 'Test 7');
test(minCostGoodCaption("aaabbbccc"), aaabbbccc, 'Test 8');
test(minCostGoodCaption("aaa"), aaa, 'Test 9');
test(minCostGoodCaption("aabbaa"), aaaaaa, 'Test 10');
test(minCostGoodCaption("abca"), aaaa, 'Test 11');
test(minCostGoodCaption("aabbcc"), aaaccc, 'Test 12');
test(minCostGoodCaption("zzz"), zzz, 'Test 13');
test(minCostGoodCaption("zzzzzzzzz"), zzzzzzzzz, 'Test 14');
test(minCostGoodCaption("abacaba"), aaaaaaa, 'Test 15');
test(minCostGoodCaption("aaabbb"), aaabbb, 'Test 16');
test(minCostGoodCaption("aca"), aaa, 'Test 17');
test(minCostGoodCaption("bc"), , 'Test 18');
test(minCostGoodCaption("abcabcabc"), aaaabbbbb, 'Test 19');
test(minCostGoodCaption("cccbbbaaaa"), cccbbbaaaa, 'Test 20');
test(minCostGoodCaption("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), bbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyy, 'Test 21');
test(minCostGoodCaption("abcdefabcfedcba"), bbbeeebbbeeebbb, 'Test 22');
test(minCostGoodCaption("bcdfghjklmnpqrstvwxyzbcdfghjklmnpqrstvwxyz"), cccgggkkknnnrrrvvvyyycccgggkkknnnrrrvvvyyy, 'Test 23');
test(minCostGoodCaption("abcdcba"), bbbbbbb, 'Test 24');
test(minCostGoodCaption("aaaaabbbbbcccccc"), aaaaabbbbbcccccc, 'Test 25');
test(minCostGoodCaption("abcdabcdabcd"), bbbbbbcccccc, 'Test 26');
test(minCostGoodCaption("qweqweqwe"), qqqqqeeee, 'Test 27');
test(minCostGoodCaption("abcabcabcabcabcabcabcabc"), aaaabbbbbaaaabbbbbbbbbbb, 'Test 28');
test(minCostGoodCaption("mnopqrstuvw"), nnnnrrrrvvv, 'Test 29');
test(minCostGoodCaption("aaaabbbaaaa"), aaaabbbaaaa, 'Test 30');
test(minCostGoodCaption("zzzyzzyzz"), zzzzzzzzz, 'Test 31');
test(minCostGoodCaption("mnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrs"), nnnnrrrnnnnrrrnnnnrrrnnnnrrrnnnnrrrnnnnrrrnnnnrrrnnnnrrrnnnnrrrnnnnrrrnnnnrrrnnnnrrrnnnnrrrnnnnrrrnnnnrrrnnnnrrrnnnnrrrnnnnrrrnnnnrrr, 'Test 32');
test(minCostGoodCaption("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba"), bbbeeehhhkkknnnqqqtttwwwyyywwwtttqqqnnnkkkhhheeebbb, 'Test 33');
test(minCostGoodCaption("mnopqr"), nnnqqq, 'Test 34');
test(minCostGoodCaption("aaaabbbbcccc"), aaaabbbbcccc, 'Test 35');
test(minCostGoodCaption("aaabbbccccddddeeeeffff"), aaabbbccccddddeeeeffff, 'Test 36');
test(minCostGoodCaption("aaaabbaaa"), aaabbbaaa, 'Test 37');
test(minCostGoodCaption("xyzxyzxyz"), xxxxyyyyy, 'Test 38');
test(minCostGoodCaption("abcdeedcba"), bbbddddbbb, 'Test 39');
test(minCostGoodCaption("zyxzyxzyxzyxzyx"), yyyyyxxxxyyyyyy, 'Test 40');
test(minCostGoodCaption("aaaazzzzzzzzzzzz"), aaaazzzzzzzzzzzz, 'Test 41');
test(minCostGoodCaption("xyzzzzzzzzzzzzzyx"), yyyzzzzzzzzzzzyyy, 'Test 42');
test(minCostGoodCaption("aabbaabbaabb"), aaaaaabbbbbb, 'Test 43');
test(minCostGoodCaption("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 44');
test(minCostGoodCaption("aabbccddeeff"), aaacccdddfff, 'Test 45');
test(minCostGoodCaption("abcdefghi"), bbbeeehhh, 'Test 46');
test(minCostGoodCaption("aaaabbbbccccdddd"), aaaabbbbccccdddd, 'Test 47');
test(minCostGoodCaption("mnopqrs"), nnnnrrr, 'Test 48');
test(minCostGoodCaption("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 49');
test(minCostGoodCaption("ababababab"), aaaaaaabbb, 'Test 50');
test(minCostGoodCaption("yzabcyzabcyzabc"), yyycccbbbyyybbb, 'Test 51');
test(minCostGoodCaption("zzzzzzyyy"), zzzzzzyyy, 'Test 52');
test(minCostGoodCaption("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 53');
test(minCostGoodCaption("zyxwvutsrqponmlkjihgfedcba"), xxxxttttqqqnnnkkkhhheeebbb, 'Test 54');
test(minCostGoodCaption("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzz"), aaaacccceeeggghhhjjjkkkmmmnnnpppqqqssstttvvvwwwyyyzzz, 'Test 55');
test(minCostGoodCaption("mnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuv"), nnnnrrruuunnnnrrruuunnnnrrruuunnnnrrruuunnnnrrruuunnnnrrruuu, 'Test 56');
test(minCostGoodCaption("aaazzz"), aaazzz, 'Test 57');
test(minCostGoodCaption("fedcbazyxwvutsrqponmlkjihgfedcba"), eeebbbxxxxttttqqqnnnkkkhhheeebbb, 'Test 58');
test(minCostGoodCaption("abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef"), bbbeeebbbeeebbbeeebbbeeebbbeeebbbeeebbbeeebbbeeebbbeeebbbeeebbbeeebbbeeebbbeeebbbeeebbbeeebbbeeebbbeeebbbeeebbbeeebbbeeebbbeeebbbeeebbbeee, 'Test 59');
test(minCostGoodCaption("aabbaabbcc"), aaaaaaaccc, 'Test 60');
test(minCostGoodCaption("xyzyxzyxzyxzyx"), yyyyxxxxyyyyyy, 'Test 61');
test(minCostGoodCaption("abcdefghijk"), bbbbffffjjj, 'Test 62');
test(minCostGoodCaption("zzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzz, 'Test 63');
test(minCostGoodCaption("zzzzzyyyy"), zzzzzyyyy, 'Test 64');
test(minCostGoodCaption("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 65');
test(minCostGoodCaption("xyzzxyzzxyzz"), yyyyyyzzzzzz, 'Test 66');
test(minCostGoodCaption("xyzabc"), yyybbb, 'Test 67');
test(minCostGoodCaption("aabccccaaa"), aaaccccaaa, 'Test 68');
test(minCostGoodCaption("aaaaaaaaaaa"), aaaaaaaaaaa, 'Test 69');
test(minCostGoodCaption("mnopqrstu"), nnnqqqttt, 'Test 70');
test(minCostGoodCaption("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz"), aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz, 'Test 71');
test(minCostGoodCaption("abcdefgabcdefgabcdefg"), bbbbfffbbbbfffbbbbfff, 'Test 72');
test(minCostGoodCaption("zzzzzyyyyy"), zzzzzyyyyy, 'Test 73');
test(minCostGoodCaption("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), bbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyybbbbffffjjjmmmpppsssvvvyyy, 'Test 74');
test(minCostGoodCaption("mnopqrsmnopqrs"), nnnnrrrnnnnrrr, 'Test 75');
test(minCostGoodCaption("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), aaaaccceeefffhhhiiikkklllnnnoooqqqrrrtttuuuwwwxxxzzzaaaaccceeefffhhhiiikkklllnnnoooqqqrrrtttuuuwwwxxxzzz, 'Test 76');
test(minCostGoodCaption("zzzzz"), zzzzz, 'Test 77');
test(minCostGoodCaption("zzzzzzzzzzzzaaa"), zzzzzzzzzzzzaaa, 'Test 78');
test(minCostGoodCaption("zzzaaa"), zzzaaa, 'Test 79');
test(minCostGoodCaption("abcdabcde"), bbbbbbddd, 'Test 80');

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
