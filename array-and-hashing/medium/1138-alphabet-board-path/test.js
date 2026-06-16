// Test: 1138. Alphabet Board Path
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { alphabetBoardPath } = require("./solution");

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

console.log("\n1138. Alphabet Board Path\n");

test(alphabetBoardPath("azaz"), !DDDDD!UUUUU!DDDDD!, 'Test 1');
test(alphabetBoardPath("zm"), DDDDD!UUURR!, 'Test 2');
test(alphabetBoardPath("abcde"), !R!R!R!R!, 'Test 3');
test(alphabetBoardPath("leet"), RDD!UURRR!!DDD!, 'Test 4');
test(alphabetBoardPath("zuz"), DDDDD!U!D!, 'Test 5');
test(alphabetBoardPath("abc"), !R!R!, 'Test 6');
test(alphabetBoardPath("zb"), DDDDD!UUUUUR!, 'Test 7');
test(alphabetBoardPath("abcdefghijklmnopqrstuvwxyzzzzz"), !R!R!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!!!!!, 'Test 8');
test(alphabetBoardPath("zz"), DDDDD!!, 'Test 9');
test(alphabetBoardPath("abcdefghijklmnopqrstuvwxy"), !R!R!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!, 'Test 10');
test(alphabetBoardPath("xyz"), RRRDDDD!R!LLLLD!, 'Test 11');
test(alphabetBoardPath("zyxwvutsrqponmlkjihgfedcba"), DDDDD!URRRR!L!L!L!L!URRRR!L!L!L!L!URRRR!L!L!L!L!URRRR!L!L!L!L!URRRR!L!L!L!L!, 'Test 12');
test(alphabetBoardPath("zbcd"), DDDDD!UUUUUR!R!R!, 'Test 13');
test(alphabetBoardPath("zdz"), DDDDD!UUUUURRR!LLLDDDDD!, 'Test 14');
test(alphabetBoardPath("a"), !, 'Test 15');
test(alphabetBoardPath("mnopqrstuvwxyzz"), RRDD!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!!, 'Test 16');
test(alphabetBoardPath("zzz"), DDDDD!!!, 'Test 17');
test(alphabetBoardPath("code"), RR!RRDD!LUU!R!, 'Test 18');
test(alphabetBoardPath("zzzzz"), DDDDD!!!!!, 'Test 19');
test(alphabetBoardPath("az"), !DDDDD!, 'Test 20');
test(alphabetBoardPath("algorithms"), !RDD!U!RRRD!LLD!UUR!RDD!LLUU!D!RD!, 'Test 21');
test(alphabetBoardPath("inputs"), RRRD!D!LLLD!D!URRRR!L!, 'Test 22');
test(alphabetBoardPath("hello"), RRD!URR!LLLDD!!RRR!, 'Test 23');
test(alphabetBoardPath("elephant"), RRRR!LLLDD!UURRR!LLLLDDD!UURR!LLU!RRRDD!RD!, 'Test 24');
test(alphabetBoardPath("alphabet"), !RDD!LD!UURR!LLU!R!RRR!DDD!, 'Test 25');
test(alphabetBoardPath("aaaaaaaaaaaabbbbbbbbbbbbccccccccccccddddddddddddeeeeeeeeeeeefffffffffffgggggggggggghhhhhhhhhhhhiiiiiiiiiiiijjjjjjjjjjjjkkkkkkkkkkklllllllllllmmmmmmmmmmmnnnnnnnnnnnoooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwxxxyyyyyyyyzzzzzzzz"), !!!!!!!!!!!!R!!!!!!!!!!!!R!!!!!!!!!!!!R!!!!!!!!!!!!R!!!!!!!!!!!!LLLLD!!!!!!!!!!!R!!!!!!!!!!!!R!!!!!!!!!!!!R!!!!!!!!!!!!R!!!!!!!!!!!!LLLLD!!!!!!!!!!!R!!!!!!!!!!!R!!!!!!!!!!!R!!!!!!!!!!!R!!!!!!!!!LLLLD!!!!!!!!!!R!!!!!!!!!!R!!!!!!!!!!R!!!!!!!!!!R!!!!!!!!!!LLLLD!!!!!!!!!!R!!!!!!!!!!R!!!!!!!!!R!!!R!!!!!!!!LLLLD!!!!!!!!, 'Test 26');
test(alphabetBoardPath("qrstuvwxyza"), RDDD!R!R!R!LLLLD!R!R!R!R!LLLLD!UUUUU!, 'Test 27');
test(alphabetBoardPath("minimum"), RRDD!UR!D!U!LD!LLDD!UURR!, 'Test 28');
test(alphabetBoardPath("zxywvutsrqponmlkjihgfedcba"), DDDDD!URRR!R!LL!L!L!URRRR!L!L!L!L!URRRR!L!L!L!L!URRRR!L!L!L!L!URRRR!L!L!L!L!, 'Test 29');
test(alphabetBoardPath("fish"), D!RRR!DD!LUU!, 'Test 30');
test(alphabetBoardPath("snake"), RRRDDD!U!LLLUU!DD!UURRRR!, 'Test 31');
test(alphabetBoardPath("uvwxyz"), DDDD!R!R!R!R!LLLLD!, 'Test 32');
test(alphabetBoardPath("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), DDDDD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!, 'Test 33');
test(alphabetBoardPath("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"), !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!R!, 'Test 34');
test(alphabetBoardPath("whale"), RRDDDD!UUU!LLU!RDD!UURRR!, 'Test 35');
test(alphabetBoardPath("mnopqrstuvwxyzabcde"), RRDD!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!UUUUU!R!R!R!R!, 'Test 36');
test(alphabetBoardPath("rhythm"), RRDDD!UU!RRDDD!U!LLUU!D!, 'Test 37');
test(alphabetBoardPath("abcdefghijklmnopqrstuvwxyz"), !R!R!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!, 'Test 38');
test(alphabetBoardPath("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), DDDDD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!, 'Test 39');
test(alphabetBoardPath("testcase"), RRRRDDD!UUU!LDDD!R!LLUUU!LL!RRRDDD!UUUR!, 'Test 40');
test(alphabetBoardPath("hellofromtheotherside"), RRD!URR!LLLDD!!RRR!LLLLU!RRDD!URR!LL!RRD!LLUU!URR!DD!D!LLUU!URR!LLDDD!R!UU!U!R!, 'Test 41');
test(alphabetBoardPath("pythonprogramming"), DDD!RRRRD!U!LLUU!RRD!L!LLLD!RR!URR!LLLU!RDD!LLUUU!RRDD!!UR!D!LLU!, 'Test 42');
test(alphabetBoardPath("qpwoeiuytrmnbvcxzlkjhgfdsaz"), RDDD!L!RRD!UURR!UU!LD!LLLDDD!RRRR!U!LL!U!R!LLUU!DDDD!UUUUR!RDDDD!LLLD!UUUR!L!URRRR!LL!L!L!URRR!DDD!LLLUUU!DDDDD!, 'Test 43');
test(alphabetBoardPath("quicksand"), RDDD!LD!UUURRR!LU!LLDD!RRRD!LLLUUU!RRRDD!UU!, 'Test 44');
test(alphabetBoardPath("abacaxabacax"), !R!L!RR!LL!RRRDDDD!LLLUUUU!R!L!RR!LL!RRRDDDD!, 'Test 45');
test(alphabetBoardPath("movesteps"), RRDD!RR!LLLDD!UUUURRR!LDDD!R!UUU!LLLLDDD!RRR!, 'Test 46');
test(alphabetBoardPath("zzazzazzazz"), DDDDD!!UUUUU!DDDDD!!UUUUU!DDDDD!!UUUUU!DDDDD!!, 'Test 47');
test(alphabetBoardPath("ddddddddeeeeeeeeedddddddd"), RRR!!!!!!!!R!!!!!!!!!L!!!!!!!!, 'Test 48');
test(alphabetBoardPath("crocodile"), RR!DDD!URR!LLUU!RRDD!LUU!D!LLD!UURRR!, 'Test 49');
test(alphabetBoardPath("aaabbbcccddd"), !!!R!!!R!!!R!!!, 'Test 50');
test(alphabetBoardPath("microsoft"), RRDD!UR!LU!DDD!URR!LD!UR!LLLLU!RRRRDD!, 'Test 51');
test(alphabetBoardPath("mnopqrstuvwxyza"), RRDD!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!UUUUU!, 'Test 52');
test(alphabetBoardPath("uvwxyzz"), DDDD!R!R!R!R!LLLLD!!, 'Test 53');
test(alphabetBoardPath("board"), R!RRRDD!LLLLUU!RRDDD!UUUR!, 'Test 54');
test(alphabetBoardPath("solution"), RRRDDD!UR!LLL!LDD!URRRR!LUU!RD!L!, 'Test 55');
test(alphabetBoardPath("abcdefghijklmnopqrstuvwxyzaa"), !R!R!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!UUUUU!!, 'Test 56');
test(alphabetBoardPath("qpwoeirutyalskdjfhgzxcvbnm"), RDDD!L!RRD!UURR!UU!LD!LDD!LLD!URRRR!D!LLLLUUUU!RDD!RRD!LLLU!UURRR!RD!LLLL!RR!L!LDDDD!URRR!LUUUU!LDDDD!UUUU!RRDD!L!, 'Test 57');
test(alphabetBoardPath("xyzzzyxyzzz"), RRRDDDD!R!LLLLD!!!URRRR!L!R!LLLLD!!!, 'Test 58');
test(alphabetBoardPath("mnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba"), RRDD!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!URRRR!L!L!L!L!URRRR!L!L!L!L!URRRR!L!L!L!L!URRRR!L!L!L!L!URRRR!L!L!L!L!, 'Test 59');
test(alphabetBoardPath("challenge"), RR!D!LLU!RDD!!UURRR!LDD!LLU!URRR!, 'Test 60');
test(alphabetBoardPath("mnopqrstu"), RRDD!R!R!LLLLD!R!R!R!R!LLLLD!, 'Test 61');
test(alphabetBoardPath("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), DDDDD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!, 'Test 62');
test(alphabetBoardPath("giraffe"), RD!RR!LDD!LLUUU!D!!URRRR!, 'Test 63');
test(alphabetBoardPath("zyxwvutsrqponmlkjihgfedcbaaabbbcccddd"), DDDDD!URRRR!L!L!L!L!URRRR!L!L!L!L!URRRR!L!L!L!L!URRRR!L!L!L!L!URRRR!L!L!L!L!!!R!!!R!!!R!!!, 'Test 64');
test(alphabetBoardPath("dolphin"), RRR!RDD!LLL!LD!UURR!R!D!, 'Test 65');
test(alphabetBoardPath("efficient"), RRRR!LLLLD!!RRR!LU!RD!UR!LDD!RD!, 'Test 66');
test(alphabetBoardPath("hellothere"), RRD!URR!LLLDD!!RRR!D!LLUU!URR!LLDDD!UUURR!, 'Test 67');
test(alphabetBoardPath("thequickbrownfoxjumpsoverthelazydog"), RRRRDDD!LLUU!URR!LLLDDD!LD!UUURRR!LU!LLDD!UUR!RDDD!URR!LLDD!UUR!LLLU!RRRRD!LDD!UUUR!LLLLDDD!UURR!LLD!RRR!UR!LLLDD!UUUURRR!LLDDD!RR!LLUU!URR!LLLDD!LUU!DDDDD!URRRR!LUUUU!RDD!LLLU!, 'Test 68');
test(alphabetBoardPath("mississippi"), RRDD!UR!DD!!UU!DD!!UU!LLLDD!!UURRR!, 'Test 69');
test(alphabetBoardPath("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), !!R!!R!!R!!R!!LLLLD!!R!!R!!R!!R!!LLLLD!!R!!R!!R!!R!!LLLLD!!R!!R!!R!!R!!LLLLD!!R!!R!!R!!R!!LLLLD!!, 'Test 70');
test(alphabetBoardPath("dynamic"), RRR!RDDDD!LUU!LLLUU!RRDD!UR!LU!, 'Test 71');
test(alphabetBoardPath("programming"), DDD!RR!URR!LLLU!RDD!LLUUU!RRDD!!UR!D!LLU!, 'Test 72');
test(alphabetBoardPath("world"), RRDDDD!UURR!LLD!LU!UURR!, 'Test 73');
test(alphabetBoardPath("alphabetboardpath"), !RDD!LD!UURR!LLU!R!RRR!DDD!LLLUUU!RRRDD!LLLLUU!RRDDD!UUUR!LLLDDD!UUU!RRRRDDD!LLUU!, 'Test 74');
test(alphabetBoardPath("zzzz"), DDDDD!!!!, 'Test 75');
test(alphabetBoardPath("jump"), RRRRD!LLLLDDD!UURR!LLD!, 'Test 76');
test(alphabetBoardPath("interview"), RRRD!D!RD!UUU!LLDDD!LD!UUURR!UR!LLDDDD!, 'Test 77');
test(alphabetBoardPath("python"), DDD!RRRRD!U!LLUU!RRD!L!, 'Test 78');
test(alphabetBoardPath("qrstuvwxyzaa"), RDDD!R!R!R!LLLLD!R!R!R!R!LLLLD!UUUUU!!, 'Test 79');
test(alphabetBoardPath("xylophone"), RRRDDDD!R!LLLUU!RRR!LLLLD!UURR!RRD!L!UUR!, 'Test 80');
test(alphabetBoardPath("supercalifragilisticexpialidocious"), RRRDDD!LLLD!U!UUURRRR!LLDDD!UUU!LL!RDD!URR!LLL!RRDD!LLUUU!RD!RR!LLD!URR!DD!R!LUU!LU!RR!LDDDD!LLLU!UURRR!LLLU!RDD!URR!U!RDD!LLUU!RD!RD!LLLLDD!URRR!, 'Test 81');
test(alphabetBoardPath("quickbrownfox"), RDDD!LD!UUURRR!LU!LLDD!UUR!RDDD!URR!LLDD!UUR!LLLU!RRRRD!LDD!, 'Test 82');
test(alphabetBoardPath("complex"), RR!RRDD!LL!LLD!UR!UURRR!LDDDD!, 'Test 83');
test(alphabetBoardPath("hellozworld"), RRD!URR!LLLDD!!RRR!LLLLDDD!URR!UURR!LLD!LU!UURR!, 'Test 84');
test(alphabetBoardPath("abcdefghijklmnopqrstuvwxyzz"), !R!R!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!!, 'Test 85');
test(alphabetBoardPath("tiger"), RRRRDDD!LUU!LL!URRR!LLDDD!, 'Test 86');
test(alphabetBoardPath("lxyzzzz"), RDD!RRDD!R!LLLLD!!!!, 'Test 87');
test(alphabetBoardPath("abcdefghiz"), !R!R!R!R!LLLLD!R!R!R!LLLDDDD!, 'Test 88');
test(alphabetBoardPath("leetcode"), RDD!UURRR!!DDD!LLUUU!RRDD!LUU!R!, 'Test 89');
test(alphabetBoardPath("xyzzyx"), RRRDDDD!R!LLLLD!!URRRR!L!, 'Test 90');
test(alphabetBoardPath("bza"), R!LDDDDD!UUUUU!, 'Test 91');
test(alphabetBoardPath("mnonmlkjihgfedcba"), RRDD!R!R!L!L!L!L!URRRR!L!L!L!L!URRRR!L!L!L!L!, 'Test 92');
test(alphabetBoardPath("algorithm"), !RDD!U!RRRD!LLD!UUR!RDD!LLUU!D!, 'Test 93');
test(alphabetBoardPath("sequence"), RRRDDD!UUUR!LLLDDD!LD!UUUURRRR!LDD!LUU!RR!, 'Test 94');
test(alphabetBoardPath("leetcodeisfun"), RDD!UURRR!!DDD!LLUUU!RRDD!LUU!R!LD!DD!LLLUU!DDD!UURRR!, 'Test 95');
test(alphabetBoardPath("abcdefgHIJKLmnopqrstuvwxyz"), !R!R!R!R!LLLLD!R!LUUUUUU!R!R!R!R!LLDDDDDDD!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!, 'Test 96');
test(alphabetBoardPath("programmingisfun"), DDD!RR!URR!LLLU!RDD!LLUUU!RRDD!!UR!D!LLU!RR!DD!LLLUU!DDD!UURRR!, 'Test 97');
test(alphabetBoardPath("datastructures"), RRR!LLL!RRRRDDD!LLLLUUU!RRRDDD!R!LL!LLD!UUUURR!RRDDD!LLLLD!URR!UUURR!LDDD!, 'Test 98');
test(alphabetBoardPath("zzzzzzzzzz"), DDDDD!!!!!!!!!!, 'Test 99');
test(alphabetBoardPath("example"), RRRR!LDDDD!LLLUUUU!RRDD!LLD!UR!UURRR!, 'Test 100');
test(alphabetBoardPath("mnonmonmnonmo"), RRDD!R!R!L!L!RR!L!L!R!R!L!L!RR!, 'Test 101');
test(alphabetBoardPath("abcdefghijklmnopqrstuvwxyza"), !R!R!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!R!R!R!R!LLLLD!UUUUU!, 'Test 102');
test(alphabetBoardPath("question"), RDDD!LD!UUUURRRR!LDDD!R!LUU!RD!L!, 'Test 103');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

