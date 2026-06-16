// Test: 1544. Make The String Great
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { makeGood } = require("./solution");

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

console.log("\n1544. Make The String Great\n");

test(makeGood("abcdefg"), abcdefg, 'Test 1');
test(makeGood("ABCDEFG"), ABCDEFG, 'Test 2');
test(makeGood("vVtTkKsSiIdDgGhHjJfFcCrRlLpPoOeEaAqQzZxXcCvVbBnNmM"), , 'Test 3');
test(makeGood("aAbBcCdDeEfFgG"), , 'Test 4');
test(makeGood("Ab"), Ab, 'Test 5');
test(makeGood("abBAcC"), , 'Test 6');
test(makeGood("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ, 'Test 7');
test(makeGood("aBbAcC"), , 'Test 8');
test(makeGood("aabAAB"), aabAAB, 'Test 9');
test(makeGood(""), , 'Test 10');
test(makeGood("AbcCdEfGhIjKlMnOpQrStUvWxYz"), AbdEfGhIjKlMnOpQrStUvWxYz, 'Test 11');
test(makeGood("aBbAcCdDeEfFgG"), , 'Test 12');
test(makeGood("ZyXwVuTsRqPoNmLkJiHgFeDcBa"), ZyXwVuTsRqPoNmLkJiHgFeDcBa, 'Test 13');
test(makeGood("abcABC"), abcABC, 'Test 14');
test(makeGood("QwErTyUiOpAsDfGhJkLzXcVbNm"), QwErTyUiOpAsDfGhJkLzXcVbNm, 'Test 15');
test(makeGood("aA"), , 'Test 16');
test(makeGood("leEeetcode"), leetcode, 'Test 17');
test(makeGood("AaAaAa"), , 'Test 18');
test(makeGood("s"), s, 'Test 19');
test(makeGood("abcAbC"), abcAbC, 'Test 20');
test(makeGood("AbcabcABC"), AbcabcABC, 'Test 21');
test(makeGood("aBcAdBeCfD"), aBcAdBeCfD, 'Test 22');
test(makeGood("AaBbCc"), , 'Test 23');
test(makeGood("aB"), aB, 'Test 24');
test(makeGood("AbCdEfGhIjKlMnOpQrStUvWxYz"), AbCdEfGhIjKlMnOpQrStUvWxYz, 'Test 25');
test(makeGood("aAbB"), , 'Test 26');
test(makeGood("aaBBccDDeeFFggHHiiJJkkLLmmNNooppQQrrSSttuuVVwwXXyyZZ"), aaBBccDDeeFFggHHiiJJkkLLmmNNooppQQrrSSttuuVVwwXXyyZZ, 'Test 27');
test(makeGood("ZzYyXxWwVvUuTtSsRrQqPpOoNnMmLlKkJjIiHhGgFfEeDdCcBbAa"), , 'Test 28');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaB"), aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaB, 'Test 29');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZzYxWvUtSrQpOnMlKjIhGfEdCbA"), , 'Test 30');
test(makeGood("aBcDaBcDaBcDaBcDaBcDaBcDaBcDaBcDaBcDaBcDaBcDaBcDaBcDaBcDaBcD"), aBcDaBcDaBcDaBcDaBcDaBcDaBcDaBcDaBcDaBcDaBcDaBcDaBcDaBcDaBcD, 'Test 31');
test(makeGood("abABabABabABabABabAB"), abABabABabABabABabAB, 'Test 32');
test(makeGood("ZzYyXxWwVvUuTtSsRrQqPpOoNnMmLlKkJiHhGgFfEeDdCcBbAa"), Ji, 'Test 33');
test(makeGood("XyZaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), XyZ, 'Test 34');
test(makeGood("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), , 'Test 35');
test(makeGood("AbCdEfGhIjKlMnOpQrStVuWxYzAbCdEfGhIjKlMnOpQrStVuWxYzAbCdEfGhIjKlMnOpQrStVuWxYzAbCdEfGhIjKlMnOpQrStVuWxYz"), AbCdEfGhIjKlMnOpQrStVuWxYzAbCdEfGhIjKlMnOpQrStVuWxYzAbCdEfGhIjKlMnOpQrStVuWxYzAbCdEfGhIjKlMnOpQrStVuWxYz, 'Test 36');
test(makeGood("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAa"), , 'Test 37');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZyXwVuTsRqPoNlKjIhGfEdCbAaB"), aBcDeFgHiJkLmNoPqRsTuVwXyZyXwVuTsRqPoNlKjIhGfEdC, 'Test 38');
test(makeGood("zZyYxXwWvVuUtTsSrRpPqQoOnNmMlLkKiIjJhHgGfFeEdDcCbBaA"), , 'Test 39');
test(makeGood("AbCdEfGhIjKlMnOpQrStUvWxYzYxWVuTsRqPoNlKjIhGfEdCbAaBc"), AbCdEfGhIjKlMnOpQrStUvWxYzYxWVuTsRqPoNlKjIhGfEd, 'Test 40');
test(makeGood("abcdefghijklmnopqrstuvwxyzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), abcdefghijklmnopqrstuvwxyz, 'Test 41');
test(makeGood("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), , 'Test 42');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJ"), aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJ, 'Test 43');
test(makeGood("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzabcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyz, 'Test 44');
test(makeGood("aBcCdDeEfFgGHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), aB, 'Test 45');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBc"), aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBc, 'Test 46');
test(makeGood("AbCDefGhIjKlMnOpQrStUvWxYzZyXwVuTsRqPoNlKjIhGfEdCbAaBcDe"), AbCDefGhIjKlMlKjIhGf, 'Test 47');
test(makeGood("aBcAbCDefEDfGhIGhIJkIkJlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), aBcAbCDefEDfGhIGhIJkIkJ, 'Test 48');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaAbBcCd"), aBcDeFgHiJkLmNoPqRsTuVwXyZd, 'Test 49');
test(makeGood("AbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYzAbCd"), AbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYzAbCd, 'Test 50');
test(makeGood("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), , 'Test 51');
test(makeGood("AbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYz"), AbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYz, 'Test 52');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZ"), aBcDeFgHiJkLmNoPqRsTuVwXyZ, 'Test 53');
test(makeGood("AbCdEfGhIjKlMnOpQrStVuWxYzABcDEfGHijKLmNoPQRSTuvWXyZ"), AbCdEfGhIjKlMnOpQrStVuWxYzABcDEfGHijKLmNoPQRSTuvWXyZ, 'Test 54');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZyXwVuTsRqPoNlKjIhGfEdCbAaBcDeFaGbHcIeJfKgHlIjKlM"), aBcDeFgHiJkLmNoPqRsTuVwXyZyXwVuTsRqPoNlKjIhGaGbHcIeJfKgHlIjKlM, 'Test 55');
test(makeGood("bBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBb"), b, 'Test 56');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890"), aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890, 'Test 57');
test(makeGood("mNbvCxzlKjHgfDsApoiuYtrewqQ"), mNbvCxzlKjHgfDsApoiuYtrew, 'Test 58');
test(makeGood("aAbBcCdDeEfFgGHh"), , 'Test 59');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZzYxWvUtSrQpOnMlKjIgFeDcBa"), aBcDeFgHgFeDcBa, 'Test 60');
test(makeGood("aBcAbCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaA"), aBcAbC, 'Test 61');
test(makeGood("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), , 'Test 62');
test(makeGood("abcdEfghIjklMNopQRstUVwxYZ"), abcdEfghIjklMNopQRstUVwxYZ, 'Test 63');
test(makeGood("AbCdeFgHijklmNoPQRstUvWxYz"), AbCdeFgHijklmNoPQRstUvWxYz, 'Test 64');
test(makeGood("bBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaAb"), b, 'Test 65');
test(makeGood("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), , 'Test 66');
test(makeGood("AbCdEfGhIjKlMnOpQrStUvWxYzABcdEFghIJklMNopQRstUVwxYZ"), AbCdEfGhIjKlMnOpQrStUvWxYzABcdEFghIJklMNopQRstUVwxYZ, 'Test 67');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaAbBcCdDe"), aBcDeFgHiJkLmNoPqRsTuVwXyZe, 'Test 68');
test(makeGood("zZyYxXwWvVuUtTsSrRpPqQoOnNmMlLkKjJiIhHgGfFeEdDcCbBaA"), , 'Test 69');
test(makeGood("AbCdEfGhIjKlMnOpQrStUvWxYzZyXwVuTsRqPoNlKjIhGfEdCbA"), AbCdEfGhIjKlMlKjIhGfEdCbA, 'Test 70');
test(makeGood("AbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYz"), AbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYz, 'Test 71');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaAbBcCdDeEf"), aBcDeFgHiJkLmNoPqRsTuVwXyZf, 'Test 72');
test(makeGood("abcdefgHIJKLMnopqrstuvwxyz"), abcdefgHIJKLMnopqrstuvwxyz, 'Test 73');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZ"), aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZ, 'Test 74');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZ"), aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZ, 'Test 75');
test(makeGood("AbcDefGhIjKlMnOpQrStVuWxYzabcDEFghijKLMnopqrSTUVwxyZ"), AbcDefGhIjKlMnOpQrStVuWxYzabcDEFghijKLMnopqrSTUVwxyZ, 'Test 76');
test(makeGood("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaAbBcCdDeEfFgG"), , 'Test 77');
test(makeGood("zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA"), zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA, 'Test 78');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaAbBcCdDeEfFgGhH"), aBcDeFgHiJkLmNoPqRsTuVwXyZ, 'Test 79');
test(makeGood("aBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890!@#$%^&*[]"), a1234567890!@#$%^&*[], 'Test 80');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZyXwVuTsRqPoNlKjIhGfEdCbAaBcDeFaGbHcIeJfKgHlIjKlMnOpQrStUvWxYzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), aBcDeFgHiJkLmNoPqRsTuVwXyZyXwVuTsRqPoNlKjIhGaGbHcIeJfKgHlIjKlMnOpQrStUvWxYz, 'Test 81');
test(makeGood("AbCbaBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), AbCbaB, 'Test 82');
test(makeGood("mNnMoPpQqRrSsTtUuVvWwXxYyZz"), o, 'Test 83');
test(makeGood("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz, 'Test 84');
test(makeGood("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), , 'Test 85');
test(makeGood("aBbAcCcAdDdAeEeAfFfAgGgAhHhAiIiAjJjAkKkAlLlAmMmAnNnAoOoApPpAqQqArRrAsStTuUuAvVvAwWwAxXxAyYyAzZz"), cAdAeAfAgAhAiAjAkAlAmAnAoApAqArAuAvAwAxAyAz, 'Test 86');
test(makeGood("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), , 'Test 87');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZ"), aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZ, 'Test 88');
test(makeGood("AbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYz"), AbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYz, 'Test 89');
test(makeGood("aBbAcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), , 'Test 90');
test(makeGood("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), , 'Test 91');
test(makeGood("abcABCabcABC"), abcABCabcABC, 'Test 92');
test(makeGood("xYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZ"), xYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZ, 'Test 93');
test(makeGood("abcABCabcABCabcABCabcABC"), abcABCabcABCabcABCabcABC, 'Test 94');
test(makeGood("ThisIsATestStringToCheckTheFunctionalityOfTheGivenCode"), ThisIsATestStringToCheckTheFunctionalityOfTheGivenCode, 'Test 95');
test(makeGood("AbCdEfGhIjKlMnOpQrStUvWxYzZyXwVuTsRqPoNlKjIhGfEdCbAaBcDeFaGbHcIeJfKgHlIjKlMnOpQrStUvWxYz"), AbCdEfGhIjKlMlKjIhGaGbHcIeJfKgHlIjKlMnOpQrStUvWxYz, 'Test 96');
test(makeGood("abcdefGHIJKLmnopQRSTuvwXYZ"), abcdefGHIJKLmnopQRSTuvwXYZ, 'Test 97');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaAbBcCdDeEfFgG"), aBcDeFgHiJkLmNoPqRsTuVwXyZ, 'Test 98');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), aBcDeFgHiJkLmNoPqRsTuVwXyZ, 'Test 99');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZyXwVuTsRqPoNlKjIhGfEdCbAaBcDeFaGbHcIeJ"), aBcDeFgHiJkLmNoPqRsTuVwXyZyXwVuTsRqPoNlKjIhGaGbHcIeJ, 'Test 100');
test(makeGood("AbCdEfGhIjKlMnOpQrStVuWxYzAbCdEfGhIjKlMnOpQrStVuWxYz"), AbCdEfGhIjKlMnOpQrStVuWxYzAbCdEfGhIjKlMnOpQrStVuWxYz, 'Test 101');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZ"), aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZ, 'Test 102');
test(makeGood("aBcDeFgHiJkLmNoPqRsTuVwXyZzYxWvUtSrQpOnMlKjIhGfEdCbAaBcDeFgHiJkLmNoPqRsTuVwXyZ"), aBcDeFgHiJkLmNoPqRsTuVwXyZ, 'Test 103');
test(makeGood("aaaaAAaaAAaaaAAaAaaaAA"), aaaa, 'Test 104');
test(makeGood("ZyXwVuTsRqPoNmLkJiHgFeDcBaCbAdCdEfFgHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), ZyXwVuTsRqPoNmLkJiHgFeDcBaCbAdCdEgH, 'Test 105');
test(makeGood("XyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYz"), XyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYzXyZxYz, 'Test 106');
test(makeGood("aBcCdEfFgHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaA"), aBdEgH, 'Test 107');

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
