// Test: 2301. Match Substring After Replacement
// 79 test cases from LeetCodeDataset
// Run: node test.js

const { matchReplacement } = require("./solution");

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

console.log("\n2301. Match Substring After Replacement\n");

test(matchReplacement("fooleetbar", "f00l", [["o","0"]]), false, 'Test 1');
test(matchReplacement("fool3e7bar", "leet", [["e","3"],["t","7"],["t","8"]]), true, 'Test 2');
test(matchReplacement("Fool33tbaR", "leetd", [["e","3"],["t","7"],["t","8"],["d","b"],["p","b"]]), true, 'Test 3');
test(matchReplacement("1234567890", "120", [["3","4"],["5","6"],["7","8"],["9","0"]]), false, 'Test 4');
test(matchReplacement("thisisaverylongstringwithmanycharacters", "thisisaverylongstringwithmanychar1", [["a","1"]]), false, 'Test 5');
test(matchReplacement("abcABC123", "aBc12", [["a","A"],["b","B"],["c","C"],["1","2"],["2","3"]]), true, 'Test 6');
test(matchReplacement("A1B2C3D4E5F6G7H8I9J0", "abcdefghij", [["1","a"],["2","b"],["3","c"],["4","d"],["5","e"],["6","f"],["7","g"],["8","h"],["9","i"],["0","j"]]), false, 'Test 7');
test(matchReplacement("abcde", "edcba", [["a","e"],["b","d"],["c","c"],["d","b"],["e","a"]]), true, 'Test 8');
test(matchReplacement("AaBbCc", "abc", [["A","a"],["B","b"],["C","c"]]), false, 'Test 9');
test(matchReplacement("UPPERlower", "lower", [["U","l"],["P","o"],["E","w"],["R","r"]]), true, 'Test 10');
test(matchReplacement("12345678901234567890", "13579", [["1","2"],["3","4"],["5","6"],["7","8"],["9","0"]]), false, 'Test 11');
test(matchReplacement("xyzuvw", "xyzz", [["z","w"],["z","u"]]), true, 'Test 12');
test(matchReplacement("aaaaaaa", "aaab", [["a","b"]]), false, 'Test 13');
test(matchReplacement("aaaaabbbbcccc", "abc", [["a","b"],["b","c"],["c","a"]]), true, 'Test 14');
test(matchReplacement("1234567890qwertyuiopasdfghjklzxcvbnm", "QWERTYUIOPASDFGHJKLZXCVBNM", [["q","Q"],["w","W"],["e","E"],["r","R"],["t","T"],["y","Y"],["u","U"],["i","I"],["o","O"],["p","P"],["a","A"],["s","S"],["d","D"],["f","F"],["g","G"],["h","H"],["j","J"],["k","K"],["l","L"],["z","Z"],["x","X"],["c","C"],["v","V"],["b","B"],["n","N"],["m","M"]]), false, 'Test 15');
test(matchReplacement("1234567890abcdefghijklmnopqrstuvwxyz", "123abc", [["1","a"],["2","b"],["3","c"],["a","1"],["b","2"],["c","3"]]), false, 'Test 16');
test(matchReplacement("mississippi", "misp", [["i","s"],["s","i"]]), false, 'Test 17');
test(matchReplacement("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789", "abcdef", [["a","A"],["b","B"],["c","C"],["d","D"],["e","E"],["f","F"],["0","a"],["1","b"]]), false, 'Test 18');
test(matchReplacement("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzz", []), true, 'Test 19');
test(matchReplacement("PythonProgrammingIsFun", "PythnPrgrammngIsFn", [["o","0"],["r","4"],["g","9"],["m","n"],["n","m"],["u","1"]]), false, 'Test 20');
test(matchReplacement("abcXYZabcXYZabc", "XYZ", [["X","a"],["Y","b"],["Z","c"]]), true, 'Test 21');
test(matchReplacement("abcXYZ123defGHI456", "xyz", [["x","X"],["y","Y"],["z","Z"]]), true, 'Test 22');
test(matchReplacement("abcdefghijklmnopqrstuvwxyz", "mnoPQR", [["m","M"],["n","N"],["o","O"],["p","P"],["q","Q"],["r","R"],["s","S"],["t","T"]]), false, 'Test 23');
test(matchReplacement("QwErTyUiOpAsDfGhJkLzXcVbNm", "qwertyuiopasdfghjklzxcvbnm", [["Q","q"],["W","w"],["E","e"],["R","r"],["T","t"],["Y","y"],["U","u"],["I","i"],["O","o"],["P","p"],["A","a"],["S","s"],["D","d"],["F","f"],["G","g"],["H","h"],["J","j"],["K","k"],["L","l"],["Z","z"],["X","x"],["C","c"],["V","v"],["B","b"],["N","n"],["M","m"]]), false, 'Test 24');
test(matchReplacement("xyzabcxyz", "zyx", [["x","y"],["y","z"],["z","x"]]), false, 'Test 25');
test(matchReplacement("Python3.8", "Python3.8", []), true, 'Test 26');
test(matchReplacement("abcdefghijklmnopqrstuvwxyz0123456789", "zyxwvutsrqp", [["z","9"],["y","8"],["x","7"],["w","6"],["v","5"],["u","4"],["t","3"],["s","2"],["r","1"],["q","0"]]), false, 'Test 27');
test(matchReplacement("aabbccddeeff", "abc", [["a","b"],["b","c"],["c","d"]]), true, 'Test 28');
test(matchReplacement("9876543210", "123", [["1","9"],["2","8"],["3","7"]]), true, 'Test 29');
test(matchReplacement("mississippi", "miss", [["m","i"],["i","s"],["s","p"]]), true, 'Test 30');
test(matchReplacement("mississippi", "MISS", [["m","M"],["i","I"],["s","S"]]), false, 'Test 31');
test(matchReplacement("ababababababab", "AB", [["a","A"],["b","B"]]), false, 'Test 32');
test(matchReplacement("nestedparentheses", "nest1dpar3ntheses", [["e","1"],["o","3"]]), false, 'Test 33');
test(matchReplacement("zzzzzzzzzzzzzzzzzzzz", "aaaaaaaaaa", [["z","a"]]), false, 'Test 34');
test(matchReplacement("abcabcabcabcabcabc", "abababa", [["a","b"],["b","a"]]), false, 'Test 35');
test(matchReplacement("MULTIPLEMAPPINGS", "MAPPING", [["M","N"],["A","B"],["P","Q"],["I","J"],["G","H"]]), true, 'Test 36');
test(matchReplacement("12345678901234567890", "111111", [["1","2"],["2","3"],["3","4"],["4","5"],["5","6"],["6","7"]]), false, 'Test 37');
test(matchReplacement("abracadabra123", "acad", [["a","1"],["d","3"],["a","b"]]), true, 'Test 38');
test(matchReplacement("TheQuickBrownFox", "TheQucikBrwnFks", [["u","i"],["i","k"],["B","r"],["r","n"],["F","k"],["o","u"]]), false, 'Test 39');
test(matchReplacement("MAPPINGmappings", "mapping", [["M","m"],["A","a"],["P","p"],["P","p"],["I","i"],["N","n"],["G","g"]]), true, 'Test 40');
test(matchReplacement("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "fedcba", [["f","Z"],["e","Y"],["d","X"],["c","W"],["b","V"],["a","U"]]), false, 'Test 41');
test(matchReplacement("mississippi", "missi5", [["i","5"]]), false, 'Test 42');
test(matchReplacement("ababababab", "abab", [["a","b"],["b","a"]]), true, 'Test 43');
test(matchReplacement("xyz123xyz123xyz123", "abc", [["a","x"],["b","y"],["c","z"],["1","a"],["2","b"],["3","c"]]), true, 'Test 44');
test(matchReplacement("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "ABCD123", [["E","1"],["F","2"],["G","3"]]), false, 'Test 45');
test(matchReplacement("00000000000000000000", "1111111111", [["0","1"]]), false, 'Test 46');
test(matchReplacement("abcabcabcabcabcabc", "aBc", [["a","A"],["b","B"],["c","C"]]), false, 'Test 47');
test(matchReplacement("HELLOworld", "H3LL0", [["E","3"],["O","0"]]), false, 'Test 48');
test(matchReplacement("1234567890", "123", [["1","9"],["2","8"],["3","7"]]), true, 'Test 49');
test(matchReplacement("a1b2c3d4e5f6g7h8i9j0", "abcdefghij", [["a","1"],["b","2"],["c","3"],["d","4"],["e","5"],["f","6"],["g","7"],["h","8"],["i","9"],["j","0"]]), false, 'Test 50');
test(matchReplacement("abcXYZdefUVW", "xyzuvw", [["a","x"],["b","y"],["c","z"],["d","u"],["e","v"],["f","w"]]), false, 'Test 51');
test(matchReplacement("xyxyxyxyxy", "xyz", [["x","y"],["y","x"]]), false, 'Test 52');
test(matchReplacement("thisisaverylongstringwithmanymappings", "short", [["s","t"],["h","i"],["o","s"],["r","r"],["t","o"]]), false, 'Test 53');
test(matchReplacement("abcdefghijklmnopqrstuvwxyz", "xyz", [["x","v"],["y","w"],["z","x"]]), true, 'Test 54');
test(matchReplacement("A1B2C3D4E5F6G7H8I9J0", "abcd", [["a","A"],["b","B"],["c","C"],["d","D"]]), false, 'Test 55');
test(matchReplacement("1234567890", "abcdefghij", [["1","a"],["2","b"],["3","c"],["4","d"],["5","e"],["6","f"],["7","g"],["8","h"],["9","i"]]), false, 'Test 56');
test(matchReplacement("abcdefabcdefabcdef", "xyz", [["a","x"],["b","y"],["c","z"]]), false, 'Test 57');
test(matchReplacement("zzzzzzzzzzzzzzzzzzzz", "zzzz", [["z","Z"],["Z","z"]]), true, 'Test 58');
test(matchReplacement("aaaaaa", "bbbbb", [["a","b"]]), false, 'Test 59');
test(matchReplacement("abcabcabcabc", "abca", [["a","b"],["b","c"],["c","a"]]), true, 'Test 60');
test(matchReplacement("111222333444555666777888999", "123456789", [["1","2"],["2","3"],["3","4"],["4","5"],["5","6"],["6","7"],["7","8"],["8","9"]]), false, 'Test 61');
test(matchReplacement("1234567890", "123abc", [["4","a"],["5","b"],["6","c"]]), false, 'Test 62');
test(matchReplacement("abcabcabcabcabc", "abdc", [["a","d"],["b","c"]]), false, 'Test 63');
test(matchReplacement("AAABBBCCCDDD", "abc", [["A","a"],["B","b"],["C","c"]]), false, 'Test 64');
test(matchReplacement("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", [["a","z"],["b","y"],["c","x"],["d","w"],["e","v"],["f","u"],["g","t"],["h","s"],["i","r"],["j","q"],["k","p"],["l","o"],["m","n"]]), false, 'Test 65');
test(matchReplacement("Python3.8", "Python3.8", [["3","2"]]), true, 'Test 66');
test(matchReplacement("abcdefghij", "abcd12", [["e","1"],["f","2"],["g","3"]]), false, 'Test 67');
test(matchReplacement("HelloWorld123", "hello123", [["H","h"],["W","w"],["o","0"],["r","4"],["l","1"]]), false, 'Test 68');
test(matchReplacement("aabbccddeeffgg", "abc", [["a","b"],["b","c"],["c","d"]]), true, 'Test 69');
test(matchReplacement("abcdeABCDEabcdeABCDE", "abcde", [["a","A"],["b","B"],["c","C"],["d","D"],["e","E"]]), true, 'Test 70');
test(matchReplacement("patternmatching", "patt3rn", [["a","3"]]), false, 'Test 71');
test(matchReplacement("abcdefgABCDEFG", "aBcDeFg", [["a","A"],["b","B"],["c","C"],["d","D"],["e","E"],["f","F"],["g","G"]]), true, 'Test 72');
test(matchReplacement("abcdefghijk", "abc123", [["d","1"],["e","2"],["f","3"]]), false, 'Test 73');
test(matchReplacement("zzzzzzzzzz", "aaa", [["z","a"]]), false, 'Test 74');
test(matchReplacement("hello123world456", "hell12", [["l","1"],["o","2"]]), false, 'Test 75');
test(matchReplacement("helloWorld123", "he1oW3ld", [["l","1"],["o","0"],["W","3"],["r","2"]]), false, 'Test 76');
test(matchReplacement("hellohellohello", "world", [["w","h"],["o","e"],["r","l"],["l","l"],["d","o"]]), true, 'Test 77');
test(matchReplacement("Python38", "pyth0n39", [["P","p"],["Y","y"],["t","0"],["h","h"],["o","3"],["n","9"]]), false, 'Test 78');
test(matchReplacement("12345678901234567890", "12345", [["1","2"],["2","3"],["3","4"],["4","5"],["5","6"]]), true, 'Test 79');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

