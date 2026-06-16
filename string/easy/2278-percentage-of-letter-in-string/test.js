// Test: 2278. Percentage Of Letter In String
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { percentageLetter } = require("./solution");

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

console.log("\n2278. Percentage Of Letter In String\n");

test(percentageLetter("jjjj", "k"), 0, 'Test 1');
test(percentageLetter("foobar", "o"), 33, 'Test 2');
test(percentageLetter("mississippi", "i"), 36, 'Test 3');
test(percentageLetter("python", "y"), 16, 'Test 4');
test(percentageLetter("abcabcabc", "a"), 33, 'Test 5');
test(percentageLetter("hello", "l"), 40, 'Test 6');
test(percentageLetter("world", "d"), 20, 'Test 7');
test(percentageLetter("zzzz", "z"), 100, 'Test 8');
test(percentageLetter("b", "a"), 0, 'Test 9');
test(percentageLetter("solution", "o"), 25, 'Test 10');
test(percentageLetter("aaaaabbbbb", "b"), 50, 'Test 11');
test(percentageLetter("a", "a"), 100, 'Test 12');
test(percentageLetter("abcdefg", "h"), 0, 'Test 13');
test(percentageLetter("zzzzzz", "z"), 100, 'Test 14');
test(percentageLetter("aabbcc", "b"), 33, 'Test 15');
test(percentageLetter("aabbccddeeff", "c"), 16, 'Test 16');
test(percentageLetter("abcdefg", "a"), 14, 'Test 17');
test(percentageLetter("zzzzzzzzz", "z"), 100, 'Test 18');
test(percentageLetter("abcdefg", "x"), 0, 'Test 19');
test(percentageLetter("characterization", "c"), 12, 'Test 20');
test(percentageLetter("examplewithrepeatedletterzzzz", "z"), 13, 'Test 21');
test(percentageLetter("qwertypoiuytrewqasdfghjklzxcvbnmasdfghjklzxcvbnm", "q"), 4, 'Test 22');
test(percentageLetter("oneletterone", "n"), 16, 'Test 23');
test(percentageLetter("parameter", "r"), 22, 'Test 24');
test(percentageLetter("alphabet", "p"), 12, 'Test 25');
test(percentageLetter("determinethepercentage", "e"), 31, 'Test 26');
test(percentageLetter("programming", "m"), 18, 'Test 27');
test(percentageLetter("supercalifragilisticexpialidocious", "i"), 20, 'Test 28');
test(percentageLetter("abracadabra", "a"), 45, 'Test 29');
test(percentageLetter("development", "e"), 27, 'Test 30');
test(percentageLetter("abcdefghij", "a"), 10, 'Test 31');
test(percentageLetter("abcdefghijk", "a"), 9, 'Test 32');
test(percentageLetter("zzzzzzzzzzzzzzzzzzzzzzzzzzzz", "z"), 100, 'Test 33');
test(percentageLetter("abcdefghij", "j"), 10, 'Test 34');
test(percentageLetter("visualization", "i"), 23, 'Test 35');
test(percentageLetter("programming", "g"), 18, 'Test 36');
test(percentageLetter("development", "d"), 9, 'Test 37');
test(percentageLetter("charactercounting", "c"), 17, 'Test 38');
test(percentageLetter("percentage", "e"), 30, 'Test 39');
test(percentageLetter("classification", "f"), 7, 'Test 40');
test(percentageLetter("environment", "n"), 27, 'Test 41');
test(percentageLetter("xyz", "z"), 33, 'Test 42');
test(percentageLetter("charactercountexample", "e"), 14, 'Test 43');
test(percentageLetter("testtesttesttest", "t"), 50, 'Test 44');
test(percentageLetter("computation", "i"), 9, 'Test 45');
test(percentageLetter("performance", "n"), 9, 'Test 46');
test(percentageLetter("understanding", "d"), 15, 'Test 47');
test(percentageLetter("consistencyiskey", "i"), 12, 'Test 48');
test(percentageLetter("xyxzyzyzxzyzyzxzyzyzxzyzyzxzyzyzxzyzyzxzyzyzxzyzyzxzyzyzxzyzyzxzyzyzxzyzyzxzyzyzxzyzyzxzyzyz", "y"), 33, 'Test 49');
test(percentageLetter("algorithm", "g"), 11, 'Test 50');
test(percentageLetter("representation", "r"), 14, 'Test 51');
test(percentageLetter("communication", "m"), 15, 'Test 52');
test(percentageLetter("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "z"), 3, 'Test 53');
test(percentageLetter("mississippi", "s"), 36, 'Test 54');
test(percentageLetter("thisisaverylongstringwithrandomcharacters", "t"), 9, 'Test 55');
test(percentageLetter("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "z"), 100, 'Test 56');
test(percentageLetter("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "z"), 100, 'Test 57');
test(percentageLetter("variable", "b"), 12, 'Test 58');
test(percentageLetter("pythonprogramming", "p"), 11, 'Test 59');
test(percentageLetter("xyzzxyzz", "z"), 50, 'Test 60');
test(percentageLetter("abcdefghijklmnopqrstuvwxyz", "a"), 3, 'Test 61');
test(percentageLetter("qwertyuiopasdfghjklzxcvbnm", "m"), 3, 'Test 62');
test(percentageLetter("xylophone", "p"), 11, 'Test 63');
test(percentageLetter("characterization", "t"), 12, 'Test 64');
test(percentageLetter("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "z"), 100, 'Test 65');
test(percentageLetter("synchronous", "s"), 18, 'Test 66');
test(percentageLetter("congratulations", "t"), 13, 'Test 67');
test(percentageLetter("mississippi", "x"), 0, 'Test 68');
test(percentageLetter("example", "a"), 14, 'Test 69');
test(percentageLetter("development", "l"), 9, 'Test 70');
test(percentageLetter("averylongstringwithvariouscharacters", "a"), 11, 'Test 71');
test(percentageLetter("zyxwvutsrqponmlkjihgfedcba", "z"), 3, 'Test 72');
test(percentageLetter("thequickbrownfoxjumpsoverthelazydog", "e"), 8, 'Test 73');
test(percentageLetter("uniquecharacters", "u"), 12, 'Test 74');
test(percentageLetter("hello world", "l"), 27, 'Test 75');
test(percentageLetter("hellotheregeneralkenobi", "l"), 13, 'Test 76');
test(percentageLetter("asynchronous", "y"), 8, 'Test 77');
test(percentageLetter("helloalibabacloud", "a"), 17, 'Test 78');
test(percentageLetter("mathematics", "a"), 18, 'Test 79');
test(percentageLetter("function", "u"), 12, 'Test 80');
test(percentageLetter("expression", "s"), 20, 'Test 81');
test(percentageLetter("thisisaverylongstringthatshouldtestthemaximumlengthoftheinputwhichisonehundredcharacters", "s"), 7, 'Test 82');
test(percentageLetter("lkjashdflkjhaskldjfhlasjdhflkajshdfjklsahjfdlkjahs", "l"), 14, 'Test 83');
test(percentageLetter("xyxyxyxyxyxyxyxyxyxyxyxy", "x"), 50, 'Test 84');
test(percentageLetter("programminglanguage", "g"), 21, 'Test 85');
test(percentageLetter("abcdefghij", "m"), 0, 'Test 86');
test(percentageLetter("percentageletter", "t"), 18, 'Test 87');
test(percentageLetter("encyclopedia", "o"), 8, 'Test 88');
test(percentageLetter("alphanumericcharacters123", "a"), 16, 'Test 89');
test(percentageLetter("thisisaverylongstringindeedtoseeifitworks", "s"), 12, 'Test 90');
test(percentageLetter("alphabet", "z"), 0, 'Test 91');
test(percentageLetter("programminglanguage", "a"), 15, 'Test 92');
test(percentageLetter("statistics", "s"), 30, 'Test 93');
test(percentageLetter("xylophone", "x"), 11, 'Test 94');
test(percentageLetter("encyclopedia", "e"), 16, 'Test 95');
test(percentageLetter("nolettersmatch", "z"), 0, 'Test 96');
test(percentageLetter("elephant", "l"), 12, 'Test 97');
test(percentageLetter("character", "c"), 22, 'Test 98');
test(percentageLetter("banana", "a"), 50, 'Test 99');
test(percentageLetter("congratulations", "o"), 13, 'Test 100');
test(percentageLetter("longstringwithvariouscharacters", "v"), 3, 'Test 101');
test(percentageLetter("algorithm", "l"), 11, 'Test 102');
test(percentageLetter("abcabcabcabcabcabcabcabcabcabc", "b"), 33, 'Test 103');
test(percentageLetter("alabama", "b"), 14, 'Test 104');
test(percentageLetter("zzzzzzzzzz", "z"), 100, 'Test 105');
test(percentageLetter("sequence", "q"), 12, 'Test 106');
test(percentageLetter("banana", "n"), 33, 'Test 107');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

