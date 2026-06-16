// Test: 3121. Count The Number Of Special Characters Ii
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfSpecialChars } = require("./solution");

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

console.log("\n3121. Count The Number Of Special Characters Ii\n");

test(numberOfSpecialChars("aAbBcCdDeEfFgG"), 7, 'Test 1');
test(numberOfSpecialChars("AaBbCc"), 0, 'Test 2');
test(numberOfSpecialChars("aabbCC"), 0, 'Test 3');
test(numberOfSpecialChars("Aabbcc"), 0, 'Test 4');
test(numberOfSpecialChars("abABcdCD"), 4, 'Test 5');
test(numberOfSpecialChars("zZaA"), 2, 'Test 6');
test(numberOfSpecialChars("aAbBcC"), 3, 'Test 7');
test(numberOfSpecialChars("aAb"), 1, 'Test 8');
test(numberOfSpecialChars("abcABC"), 3, 'Test 9');
test(numberOfSpecialChars("ZzYyXxWwVvUuTtSsRrQqPpOoNnMmLlKkJjIiHhGgFfEeDdCcBbAa"), 0, 'Test 10');
test(numberOfSpecialChars("AbBCab"), 0, 'Test 11');
test(numberOfSpecialChars("ZzYyXx"), 0, 'Test 12');
test(numberOfSpecialChars("ZzYyXxWwVvUuTtSsRrQqPpOoNnMmLlKkJjiIhHgGfFeEdDcCbBaA"), 9, 'Test 13');
test(numberOfSpecialChars("aA"), 1, 'Test 14');
test(numberOfSpecialChars("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), 0, 'Test 15');
test(numberOfSpecialChars("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 0, 'Test 16');
test(numberOfSpecialChars("abcdefgHIJKLmnopqrstuvwxyz"), 0, 'Test 17');
test(numberOfSpecialChars("aaAbcBC"), 3, 'Test 18');
test(numberOfSpecialChars("aabB"), 1, 'Test 19');
test(numberOfSpecialChars("abc"), 0, 'Test 20');
test(numberOfSpecialChars("Aa"), 0, 'Test 21');
test(numberOfSpecialChars("aabbccAABBCC"), 3, 'Test 22');
test(numberOfSpecialChars("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 26, 'Test 23');
test(numberOfSpecialChars("AaBbCcDdEeFf"), 0, 'Test 24');
test(numberOfSpecialChars("aBcDeFgHiJkLmNoPqRsTuVwXyZ"), 0, 'Test 25');
test(numberOfSpecialChars("AaBbCcDd"), 0, 'Test 26');
test(numberOfSpecialChars("zZyYxXwWvVuUtTsSrRqQpPoOnNmMlLkKjJiIhHgGfFeEdDcCbBaA"), 26, 'Test 27');
test(numberOfSpecialChars("aabbccAAABBBCCC"), 3, 'Test 28');
test(numberOfSpecialChars("zZyYxXwWvVuUtTsSrRpPqQoOnNmMlLkKjJiIhHgGfFeEdDcCbBaA"), 26, 'Test 29');
test(numberOfSpecialChars("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), 0, 'Test 30');
test(numberOfSpecialChars("aaaaaAAAAAaaaaaAAAAA"), 0, 'Test 31');
test(numberOfSpecialChars("abcXYZabcXYZ"), 0, 'Test 32');
test(numberOfSpecialChars("zzzzZ"), 1, 'Test 33');
test(numberOfSpecialChars("abcdEFGhijklmNOPqrSTuvWXYZ"), 0, 'Test 34');
test(numberOfSpecialChars("aAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), 0, 'Test 35');
test(numberOfSpecialChars("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), 0, 'Test 36');
test(numberOfSpecialChars("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), 0, 'Test 37');
test(numberOfSpecialChars("AbCdEfGhIjKlMnOpQrStUvWxYz"), 0, 'Test 38');
test(numberOfSpecialChars("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), 0, 'Test 39');
test(numberOfSpecialChars("aAaAaAaAaAaAaAaAaAaA"), 0, 'Test 40');
test(numberOfSpecialChars("aAbBcCddeEfffGggHhhIiiJjjKkkLllMmmNnnOooPppQqqRrrSssTttUuuVvvWwwXxxYyyZzz"), 4, 'Test 41');
test(numberOfSpecialChars("Zabcdefghijklmnopqrstuvwxyz"), 0, 'Test 42');
test(numberOfSpecialChars("zZyYxXwWvVuUtTsSrRpPoOnNmMlLkKjJiIhHgGfFeEdDcCbBaA"), 25, 'Test 43');
test(numberOfSpecialChars("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), 0, 'Test 44');
test(numberOfSpecialChars("aBcD"), 0, 'Test 45');
test(numberOfSpecialChars("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaAbB"), 24, 'Test 46');
test(numberOfSpecialChars("AbCdeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZ"), 2, 'Test 47');
test(numberOfSpecialChars("xyzXYZabcABC"), 6, 'Test 48');
test(numberOfSpecialChars("zzzzZzzzZzzzzzzz"), 0, 'Test 49');
test(numberOfSpecialChars("AbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYz"), 0, 'Test 50');
test(numberOfSpecialChars("AbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), 25, 'Test 51');
test(numberOfSpecialChars("abcABCabcABCabcABC"), 0, 'Test 52');
test(numberOfSpecialChars("abABcdCDefEfghGhijIJklKLmMnopNOPqrstQRstUVuvwVwxWXyzYZ"), 20, 'Test 53');
test(numberOfSpecialChars("AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYZZZ"), 0, 'Test 54');
test(numberOfSpecialChars("aAAAbBBBcCCCCdDDDD"), 4, 'Test 55');
test(numberOfSpecialChars("AbcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 25, 'Test 56');
test(numberOfSpecialChars("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), 0, 'Test 57');
test(numberOfSpecialChars("abCDcdEFefGHghIJijKLklMNmnOPopQRqrSTstUVuvWXwxYZyz"), 0, 'Test 58');
test(numberOfSpecialChars("abcdefABCDEFghijklGHJKLmnopQRStuTUvwVWXyYZ"), 16, 'Test 59');
test(numberOfSpecialChars("AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ"), 0, 'Test 60');
test(numberOfSpecialChars("aAAaBBBbcccC"), 1, 'Test 61');
test(numberOfSpecialChars("aBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), 0, 'Test 62');
test(numberOfSpecialChars("aaaBBBcccDDD"), 0, 'Test 63');
test(numberOfSpecialChars("abABcdE"), 2, 'Test 64');
test(numberOfSpecialChars("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"), 0, 'Test 65');
test(numberOfSpecialChars("aBcDDefFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), 21, 'Test 66');
test(numberOfSpecialChars("aAbBcCdefGhIjKlMnopQrstUvwXyz"), 3, 'Test 67');
test(numberOfSpecialChars("aaaBBBcccDDDeeeFFFgggHHHiiiJJJkkkLLLmmmNNNoooPPPqqqRRRsssTTTuuuVVVwwwXXXyyyZZZ"), 0, 'Test 68');
test(numberOfSpecialChars("aBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzabcdefghijklmnopqrstuvwxyz"), 0, 'Test 69');
test(numberOfSpecialChars("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCc"), 0, 'Test 70');
test(numberOfSpecialChars("ZZZZzzzzYYYYyyyyXXXXXXXXxxWWWWwwwwVVVVvvvvUUUUuuuuTTTTttttSSSSssssRRRRrrrrQQQQqqqqPPPPppppOOOOooooNNNNnnnnMMMMmmmmLLLLllllKKKKkkkkJJJJjjjjIIIIiiiiHHHHhhhhGGGGggggFFFFFFffffEEEEeeeeDDDDddddCCCCccccBBBBbbbbAAAAAAAAaaaa"), 0, 'Test 71');
test(numberOfSpecialChars("aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZ"), 0, 'Test 72');
test(numberOfSpecialChars("abcdefgHIJKLMNopqrstuvwxyz"), 0, 'Test 73');
test(numberOfSpecialChars("AbCdEfGhIjKlMnOpQrStUvWxYzABCD"), 2, 'Test 74');
test(numberOfSpecialChars("zZyYxXwWvVuUtTrRsSqQpPnNmMlLkKiIhHgGfFeEdDcCbBaA"), 24, 'Test 75');
test(numberOfSpecialChars("aAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 0, 'Test 76');
test(numberOfSpecialChars("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzAA"), 1, 'Test 77');
test(numberOfSpecialChars("aB"), 0, 'Test 78');
test(numberOfSpecialChars("aBcDeFgHiJkLmNoPqRsTuVwXyZaA"), 1, 'Test 79');
test(numberOfSpecialChars("aBcDEfGHiJKlMNopQRsTuVwXyZ"), 0, 'Test 80');
test(numberOfSpecialChars("aaaAAAaaaAAAaaaAAA"), 0, 'Test 81');
test(numberOfSpecialChars("aBbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"), 0, 'Test 82');
test(numberOfSpecialChars("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), 0, 'Test 83');
test(numberOfSpecialChars("zzzZZZyyyYYYxxxXXXwwwWWWvvvVVVuuuUUUtttTTTsssSSSrrrRRRqqqQQQpppPPPoooOOOnnnNNNmmmMMMlllLLLkkkKKKjjjJJJiiiIIIhhhHHHgggGGGfffFFFeeeEEEdddDDDcccCCCbbbBBBaaaAAA"), 26, 'Test 84');
test(numberOfSpecialChars("aBcDefGhiJklMnoPqrStuVwxYz"), 0, 'Test 85');
test(numberOfSpecialChars("abcdefghijklmnopqrstuvwxyz"), 0, 'Test 86');
test(numberOfSpecialChars("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 'Test 87');
test(numberOfSpecialChars("aaBBccDDeeFFggHHiiJJkkLLmmNNooPPqqRRssTTuuVVwwXXyyZZ"), 0, 'Test 88');
test(numberOfSpecialChars("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 'Test 89');
test(numberOfSpecialChars("aaBBccDDeeFFggHHiiJjkkLLmmNNooPPqqRRssTTuuVVwwXXyyZZ"), 0, 'Test 90');
test(numberOfSpecialChars("aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZ"), 0, 'Test 91');
test(numberOfSpecialChars("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzZ"), 1, 'Test 92');
test(numberOfSpecialChars("aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZ"), 0, 'Test 93');
test(numberOfSpecialChars("mnopqrstuNOPQRS"), 6, 'Test 94');
test(numberOfSpecialChars("aAbC"), 1, 'Test 95');
test(numberOfSpecialChars("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), 0, 'Test 96');
test(numberOfSpecialChars("abcdefghijklmnopqrstuvwxyzZ"), 1, 'Test 97');
test(numberOfSpecialChars("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), 26, 'Test 98');
test(numberOfSpecialChars("aAbCdeFghIjKlmNoPqRsTuVwXyZ"), 1, 'Test 99');
test(numberOfSpecialChars("aaAaabBBccCCCd"), 2, 'Test 100');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

