// Test: 345. Reverse Vowels Of A String
// 38 test cases from LeetCodeDataset
// Run: node test.js

const { reverseVowels } = require("./solution");

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

console.log("\n345. Reverse Vowels Of A String\n");

test(reverseVowels("hello"), "holle", 'Test 1');
test(reverseVowels("leetcode"), "leotcede", 'Test 2');
test(reverseVowels("HELLO world"), HoLLO wErld, 'Test 3');
test(reverseVowels("Fly High"), Fly High, 'Test 4');
test(reverseVowels("AbcdeEfghI"), IbcdEefghA, 'Test 5');
test(reverseVowels("Rhythmhythm"), Rhythmhythm, 'Test 6');
test(reverseVowels("AEIOUaeiou"), uoieaUOIEA, 'Test 7');
test(reverseVowels("uAeiouAeiou"), uoieAuoieAu, 'Test 8');
test(reverseVowels("abcdefghijklmnopqrstuvwxyz"), ubcdofghijklmnepqrstavwxyz, 'Test 9');
test(reverseVowels("bcdEfghIjklmNoPQRSTUvwxyz"), bcdUfghojklmNIPQRSTEvwxyz, 'Test 10');
test(reverseVowels("Programming"), Prigrammong, 'Test 11');
test(reverseVowels("Umbrella"), ambrellU, 'Test 12');
test(reverseVowels("Programming is fun!"), Prugrimming as fon!, 'Test 13');
test(reverseVowels("Reverse all the vowels in this sentence"), Reverse ill thi vewols en thas sentence, 'Test 14');
test(reverseVowels("HELLO WORLD"), HOLLO WERLD, 'Test 15');
test(reverseVowels("Mazatlan is a beautiful city"), Mizutlin us a beaitafal caty, 'Test 16');
test(reverseVowels("rhythm"), rhythm, 'Test 17');
test(reverseVowels("1234567890"), 1234567890, 'Test 18');
test(reverseVowels("A quick brown fox jumps over the lazy dog"), o qaeck brewn fox jumps ovor thi luzy dAg, 'Test 19');
test(reverseVowels("The quick brown fox jumps over a lazy dog"), Tho qaack brewn fox jumps ovor i luzy deg, 'Test 20');
test(reverseVowels("M4rs1 l1nd3a2 r0ck5 s0und5 7r1ll"), M4rs1 l1nd3u2 r0ck5 s0and5 7r1ll, 'Test 21');
test(reverseVowels("Python Programming"), Pythin Pragrommong, 'Test 22');
test(reverseVowels("The quick brown fox jumps over the lazy dog"), Tho qaeck brewn fox jumps ovor thi luzy deg, 'Test 23');
test(reverseVowels("aeiouAEIOU"), UOIEAuoiea, 'Test 24');
test(reverseVowels("!@#$%^&*[]"), !@#$%^&*[], 'Test 25');
test(reverseVowels("AeIoU"), UoIeA, 'Test 26');
test(reverseVowels("Reverse Vowels In This Sentence"), Reverse ViwIls en Thos Sentence, 'Test 27');
test(reverseVowels("12345aeiouAEIOU67890"), 12345UOIEAuoiea67890, 'Test 28');
test(reverseVowels("Python"), Python, 'Test 29');
test(reverseVowels("Beautiful Day"), Bauitufal Dey, 'Test 30');
test(reverseVowels("AeiOu"), uOieA, 'Test 31');
test(reverseVowels("FLY HIGH"), FLY HIGH, 'Test 32');
test(reverseVowels("S1e2n3a4n5c6e7"), S1e2n3a4n5c6e7, 'Test 33');
test(reverseVowels("This is an example with multiple AEIOU characters"), Thes as an UxOmplI wEth mAltepli uieae charictirs, 'Test 34');
test(reverseVowels("ThIs Is A tEsT"), ThEs As I tIsT, 'Test 35');
test(reverseVowels("NoVowelsHere"), NeVewelsHoro, 'Test 36');
test(reverseVowels("12345!@#$%^&*[]"), 12345!@#$%^&*[], 'Test 37');
test(reverseVowels("Uoiea"), aeioU, 'Test 38');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

