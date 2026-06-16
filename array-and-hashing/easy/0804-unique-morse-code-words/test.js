// Test: 804. Unique Morse Code Words
// 83 test cases from LeetCodeDataset
// Run: node test.js

const { uniqueMorseRepresentations } = require("./solution");

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

console.log("\n804. Unique Morse Code Words\n");

test(uniqueMorseRepresentations(["s","u","n"]), 3, 'Test 1');
test(uniqueMorseRepresentations(["mnop","qrst","uvwx","yz"]), 4, 'Test 2');
test(uniqueMorseRepresentations(["hello", "world"]), 2, 'Test 3');
test(uniqueMorseRepresentations(["a"]), 1, 'Test 4');
test(uniqueMorseRepresentations(["morse", "coding", "challenge"]), 3, 'Test 5');
test(uniqueMorseRepresentations(["hello","world"]), 2, 'Test 6');
test(uniqueMorseRepresentations(["test", "code", "abcd"]), 3, 'Test 7');
test(uniqueMorseRepresentations(["abcdefghijklmnopqrstuvwxyz"]), 1, 'Test 8');
test(uniqueMorseRepresentations(["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]), 7, 'Test 9');
test(uniqueMorseRepresentations(["abcd","efgh","ijkl"]), 3, 'Test 10');
test(uniqueMorseRepresentations(["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]), 8, 'Test 11');
test(uniqueMorseRepresentations(["gin","zen","gig","msg"]), 2, 'Test 12');
test(uniqueMorseRepresentations(["abcd","dcba","abba","baab"]), 4, 'Test 13');
test(uniqueMorseRepresentations(["hello", "world", "python", "challenge"]), 4, 'Test 14');
test(uniqueMorseRepresentations(["single", "letter", "words", "testcase", "unique", "morse", "alphabet"]), 7, 'Test 15');
test(uniqueMorseRepresentations(["abcd", "dcba", "mnop", "ponm", "qrst", "tsrq", "wxyz", "zyxw"]), 8, 'Test 16');
test(uniqueMorseRepresentations(["abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"]), 2, 'Test 17');
test(uniqueMorseRepresentations(["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee", "fffff", "ggggg", "hhhhh", "iiiii", "jjjjj"]), 10, 'Test 18');
test(uniqueMorseRepresentations(["internationalization", "globalization", "localization", "standardization", "representation"]), 5, 'Test 19');
test(uniqueMorseRepresentations(["programming", "is", "fun"]), 3, 'Test 20');
test(uniqueMorseRepresentations(["unique", "representation", "morse", "code", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]), 12, 'Test 21');
test(uniqueMorseRepresentations(["aabbcc", "bbaacc", "ccabba", "abacab", "cabacb"]), 5, 'Test 22');
test(uniqueMorseRepresentations(["zzzzzzzzzzzz", "aaaaaaaaaaaa", "bbbbbbbbbbbb", "cccccccccccc", "dddddddddddd", "eeeeeeeeeeee", "ffffffffffff"]), 7, 'Test 23');
test(uniqueMorseRepresentations(["transform", "transformation", "form", "formation"]), 4, 'Test 24');
test(uniqueMorseRepresentations(["alice", "bob", "charlie", "david"]), 4, 'Test 25');
test(uniqueMorseRepresentations(["aabbcc", "ddeeff", "gghhiijj", "kkllmm", "nnoopp", "qqrrss", "ttuuvv", "wwxxyy", "zz"]), 9, 'Test 26');
test(uniqueMorseRepresentations(["international", "morse", "code", "challenge"]), 4, 'Test 27');
test(uniqueMorseRepresentations(["hello", "world", "python", "programming"]), 4, 'Test 28');
test(uniqueMorseRepresentations(["abcdefghijk", "lmnopqrst", "uvwxyz"]), 3, 'Test 29');
test(uniqueMorseRepresentations(["quick", "brown", "fox", "jumps", "over", "lazy", "dogs"]), 7, 'Test 30');
test(uniqueMorseRepresentations(["short", "longerword", "averyverylongwordindeed", "tiny", "big"]), 5, 'Test 31');
test(uniqueMorseRepresentations(["aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"]), 1, 'Test 32');
test(uniqueMorseRepresentations(["abcd", "bcde", "cdef", "defg", "efgh", "fghi", "ghij", "hijk", "ijkl", "jklm"]), 10, 'Test 33');
test(uniqueMorseRepresentations(["abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "mnopqrstuvwxyzabcde"]), 3, 'Test 34');
test(uniqueMorseRepresentations(["short", "longerword", "evenlongerword", "thelongestwordinthislist"]), 4, 'Test 35');
test(uniqueMorseRepresentations(["qwen", "alibaba", "cloud", "computing", "solution", "developer", "engineer"]), 7, 'Test 36');
test(uniqueMorseRepresentations(["alice", "bob", "charlie", "david", "eve", "frank", "grace", "heidi", "ivan", "judy"]), 10, 'Test 37');
test(uniqueMorseRepresentations(["repeated", "words", "in", "this", "list", "repeated", "words"]), 5, 'Test 38');
test(uniqueMorseRepresentations(["unique", "transformations", "morse", "code"]), 4, 'Test 39');
test(uniqueMorseRepresentations(["algorithm", "datastructure", "interview", "challenge"]), 4, 'Test 40');
test(uniqueMorseRepresentations(["abracadabra", "xylophone", "quizzing", "algorithm", "datastructure"]), 5, 'Test 41');
test(uniqueMorseRepresentations(["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg", "hhh", "iii", "jjj", "kkk", "lll", "mmm", "nnn", "ooo", "ppp", "qqq", "rrr", "sss", "ttt", "uuu", "vvv", "www", "xxx", "yyy", "zzz"]), 26, 'Test 42');
test(uniqueMorseRepresentations(["aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzyyxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa"]), 2, 'Test 43');
test(uniqueMorseRepresentations(["unique", "morse", "code", "representations", "different", "transformations", "concatenation", "english", "alphabet", "lowercase", "letters"]), 11, 'Test 44');
test(uniqueMorseRepresentations(["morse", "code", "test", "challenge", "unique", "representations", "programming"]), 7, 'Test 45');
test(uniqueMorseRepresentations(["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee", "fffff", "ggggg", "hhhhh", "iiiii", "jjjjj", "kkkkk", "lllll", "mmmmm", "nnnnn", "ooooo", "ppppp", "qqqqq", "rrrrr", "sssss", "ttttt", "uuuuu", "vvvvv", "wwwww", "xxxxx", "yyyyy", "zzzzz"]), 26, 'Test 46');
test(uniqueMorseRepresentations(["repeat", "repeat", "repeat", "repeat", "unique"]), 2, 'Test 47');
test(uniqueMorseRepresentations(["hello","world","this","is","a","test","case"]), 7, 'Test 48');
test(uniqueMorseRepresentations(["repeated", "words", "are", "here", "repeated", "words"]), 4, 'Test 49');
test(uniqueMorseRepresentations(["repeated", "words", "are", "transformed", "into", "morse", "code", "and", "we", "count", "unique", "representations"]), 12, 'Test 50');
test(uniqueMorseRepresentations(["qz", "jx", "vk", "bf"]), 4, 'Test 51');
test(uniqueMorseRepresentations(["mississippi", "bookkeeper", "anagram", "controller", "algorithm"]), 5, 'Test 52');
test(uniqueMorseRepresentations(["algorithms","data","structures","machine","learning"]), 5, 'Test 53');
test(uniqueMorseRepresentations(["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"]), 5, 'Test 54');
test(uniqueMorseRepresentations(["qzj","xlt","bkw","fmo","hmu","fsz","qqt","ztl","rgj","zhm","gmo","bwz","pqt","kcu","wqt","hmr","pgt","xqt","nzm","nhu","xzm","cmu","pqh","pgj","xju","zmh","xmu"]), 27, 'Test 55');
test(uniqueMorseRepresentations(["single", "unique", "distinct", "different"]), 4, 'Test 56');
test(uniqueMorseRepresentations(["same", "same", "same", "same", "same", "different"]), 2, 'Test 57');
test(uniqueMorseRepresentations(["singleword", "anotherword", "yetanotherword", "onemoreword", "lastword"]), 5, 'Test 58');
test(uniqueMorseRepresentations(["transformation", "representation", "unique", "words", "list"]), 5, 'Test 59');
test(uniqueMorseRepresentations(["morsetest", "codeforces", "competitive", "algorithm"]), 4, 'Test 60');
test(uniqueMorseRepresentations(["morse", "code", "morsecode", "codemorse"]), 4, 'Test 61');
test(uniqueMorseRepresentations(["repeat", "repeat", "repeat", "different", "words"]), 3, 'Test 62');
test(uniqueMorseRepresentations(["zebra", "yak", "antelope", "hippopotamus", "elephant", "giraffe"]), 6, 'Test 63');
test(uniqueMorseRepresentations(["this", "is", "a", "simple", "test", "case"]), 6, 'Test 64');
test(uniqueMorseRepresentations(["amazingrace", "triathlon", "cycling", "running", "swimming", "tri", "duathlon", "aquathlon"]), 8, 'Test 65');
test(uniqueMorseRepresentations(["alice", "bob", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliett", "kilo", "lima", "mike", "november", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whiskey", "xray", "yankee", "zulu"]), 26, 'Test 66');
test(uniqueMorseRepresentations(["karen", "mike", "nancy", "olivia", "peter", "quincy", "rachel", "steve", "tina", "ulysses", "victor", "wendy", "xander", "yvonne", "zach"]), 15, 'Test 67');
test(uniqueMorseRepresentations(["qzj", "xmv", "nkt", "hbw", "lyf"]), 5, 'Test 68');
test(uniqueMorseRepresentations(["programming","is","fun"]), 3, 'Test 69');
test(uniqueMorseRepresentations(["unique", "representations", "morse", "code", "challenge"]), 5, 'Test 70');
test(uniqueMorseRepresentations(["abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"]), 3, 'Test 71');
test(uniqueMorseRepresentations(["programming", "challenge", "python", "codeforces"]), 4, 'Test 72');
test(uniqueMorseRepresentations(["abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "mnopqrstuvwxyzabcdefghijkl"]), 3, 'Test 73');
test(uniqueMorseRepresentations(["racecar", "level", "rotor", "radar", "deified", "noon", "kayak", "reviler"]), 8, 'Test 74');
test(uniqueMorseRepresentations(["qzcv", "wqop", "rgmo", "mnlx", "axta", "qwkl", "qzcv", "wqop", "rgmo", "mnlx", "axta", "qwkl"]), 6, 'Test 75');
test(uniqueMorseRepresentations(["unique", "morse", "representations", "are", "calculated", "from", "the", "given", "words"]), 9, 'Test 76');
test(uniqueMorseRepresentations(["aabbccdd", "bbaaddcc", "ccddeeff", "ddeeffcc", "eeffccdd", "ffccddeeff", "ccddeeff", "ddeeffcc", "eeffccdd", "ffccddeeff"]), 6, 'Test 77');
test(uniqueMorseRepresentations(["transform", "transformation", "translate", "translator", "coding", "decoding"]), 6, 'Test 78');
test(uniqueMorseRepresentations(["python","java","csharp","javascript"]), 4, 'Test 79');
test(uniqueMorseRepresentations(["repeat", "repeat", "repeat", "repeat"]), 1, 'Test 80');
test(uniqueMorseRepresentations(["aabbccdd", "ddeeffgg", "hhiijjkk", "llmmnnoo", "ppqqrrss", "ttuuvvww", "xx yyzz"]), Error: list index out of range, 'Test 81');
test(uniqueMorseRepresentations(["hello", "world", "python", "programming", "challenge"]), 5, 'Test 82');
test(uniqueMorseRepresentations(["abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "mnopqrstuvwxyzabcdefghijkl", "fedcbazyxwvutsrqponmlkijgh"]), 4, 'Test 83');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

