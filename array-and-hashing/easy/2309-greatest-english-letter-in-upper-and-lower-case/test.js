// Test: 2309. Greatest English Letter In Upper And Lower Case
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { greatestLetter } = require("./solution");

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

console.log("\n2309. Greatest English Letter In Upper And Lower Case\n");

test(greatestLetter("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), Z, 'Test 1');
test(greatestLetter("mMnNoOpPqQrRsStTuUvVwWxXyYzZ"), Z, 'Test 2');
test(greatestLetter("zZyYxXwWeE"), Z, 'Test 3');
test(greatestLetter("zZyYxXwWvVuUtTrRsSqQpPoOnNmMlLkKiIjJhHgGfFeEdDcCbBaA"), Z, 'Test 4');
test(greatestLetter("bBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyY"), Y, 'Test 5');
test(greatestLetter("alluppercase"), , 'Test 6');
test(greatestLetter("ALLLOWERCASE"), , 'Test 7');
test(greatestLetter("aBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), Z, 'Test 8');
test(greatestLetter("AbCdEfGhIjK"), , 'Test 9');
test(greatestLetter("a"), , 'Test 10');
test(greatestLetter("NoUpperCaseHere"), , 'Test 11');
test(greatestLetter("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), Z, 'Test 12');
test(greatestLetter("bA"), , 'Test 13');
test(greatestLetter("AbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), Z, 'Test 14');
test(greatestLetter("NnOoPpQqRrSsTtUuVvWwXxYyZz"), Z, 'Test 15');
test(greatestLetter("lEeTcOdE"), E, 'Test 16');
test(greatestLetter("aBcDeFgHiJkLmNoPqRsTuVwXyZ"), , 'Test 17');
test(greatestLetter(""), , 'Test 18');
test(greatestLetter("arRAzFif"), R, 'Test 19');
test(greatestLetter("abcdefgHIJKLMnoPQRSTuVwxyz"), , 'Test 20');
test(greatestLetter("QwErTyUiOpAsDfGhJkLzXcVbNm"), , 'Test 21');
test(greatestLetter("aA"), A, 'Test 22');
test(greatestLetter("A"), , 'Test 23');
test(greatestLetter("AaBbCc"), C, 'Test 24');
test(greatestLetter("zZ"), Z, 'Test 25');
test(greatestLetter("MmQqEe"), Q, 'Test 26');
test(greatestLetter("aB"), , 'Test 27');
test(greatestLetter("AbCdEfGhIjKlMnOpQrStUvWxYz"), , 'Test 28');
test(greatestLetter("qUICkBrOwNBROWNfOX"), W, 'Test 29');
test(greatestLetter("pUrPLe"), P, 'Test 30');
test(greatestLetter("ZzYyXxWwVvUuTtSsRrQqPpOoNnMmLlKkJjIiHhGgFfEeDdCcBbAa"), Z, 'Test 31');
test(greatestLetter("aBcD"), , 'Test 32');
test(greatestLetter("bLuE"), , 'Test 33');
test(greatestLetter("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), , 'Test 34');
test(greatestLetter("xYzZaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwW"), Z, 'Test 35');
test(greatestLetter("bBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), Z, 'Test 36');
test(greatestLetter("bAcBdCeCdFdEgFhG"), G, 'Test 37');
test(greatestLetter("zZyYxXwWvVuUtTsSrRpPqQoOnNmMlLkKjJiIhHgGfFeEdDcCbBaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), Z, 'Test 38');
test(greatestLetter("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZzZyYxXwWvVuUtTsSrRpPqQoOnNmMlLkKjJiIhHgGfFeEdDcCbBaAaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), Z, 'Test 39');
test(greatestLetter("hYsS"), S, 'Test 40');
test(greatestLetter("thisIsAtEsTString"), T, 'Test 41');
test(greatestLetter("xyzXYZuvwUVWtTqsSRpqPRonmNMlLkKjJiIhHgGfFeEdDcCbBaA"), Z, 'Test 42');
test(greatestLetter("AaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAa"), A, 'Test 43');
test(greatestLetter("aAaaAAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), A, 'Test 44');
test(greatestLetter("noUpperLower"), , 'Test 45');
test(greatestLetter("UnIqUe"), , 'Test 46');
test(greatestLetter("mAgEnTa"), A, 'Test 47');
test(greatestLetter("aAaAaAaAaAaA"), A, 'Test 48');
test(greatestLetter("AaaaBBbbbCCCCDDDdeeeFFGHHHIIIJJJ"), D, 'Test 49');
test(greatestLetter("xyzABCxyzABC"), , 'Test 50');
test(greatestLetter("aNdSoMeSpEcIaLChArAcTeRs"), S, 'Test 51');
test(greatestLetter("withSomeDuPpLicaTeS"), T, 'Test 52');
test(greatestLetter("bBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBbBb"), B, 'Test 53');
test(greatestLetter("mNnOoPpQqRrSsTtUuVvWwXxYyZzLlKkJjIiHhGgFfEeDdCcBbAa"), Z, 'Test 54');
test(greatestLetter("abcdefghiJklmnopqrStuvWxyzZ"), Z, 'Test 55');
test(greatestLetter("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), Z, 'Test 56');
test(greatestLetter("abcdefGHIJKLmnopQRStuvWXYZ"), , 'Test 57');
test(greatestLetter("mMnNoOpPqQrRsStTuUvVwWxXyYzZaAbBcCdDeEfFgGhHiIjJkKlL"), Z, 'Test 58');
test(greatestLetter("aBcDdEfGgHiJjKlMmNoPpQrRsStTuUvVwWxXyYzZ"), Z, 'Test 59');
test(greatestLetter("gRaY"), , 'Test 60');
test(greatestLetter("butNoVaLiDgReaTtEsT"), T, 'Test 61');
test(greatestLetter("mIXeDuPpLeTeXt"), T, 'Test 62');
test(greatestLetter("nNoOlLkKiIjJhHgGfFeEdDcCbBaA"), O, 'Test 63');
test(greatestLetter("cYaN"), , 'Test 64');
test(greatestLetter("sUpErCoMpLeXtExT"), X, 'Test 65');
test(greatestLetter("AbCdEfGhIjKlMnOpQrStUvWxYzZ"), Z, 'Test 66');
test(greatestLetter("mIxEdCaSeStRiNg"), I, 'Test 67');
test(greatestLetter("MmLlKkJjIiHhGgFfEeDdCcBbAa"), M, 'Test 68');
test(greatestLetter("abcdefgHIJKLmnopqRSTUVWxyz"), , 'Test 69');
test(greatestLetter("mM"), M, 'Test 70');
test(greatestLetter("AbcDefGhIjKlMnopQRStuvWXYZ"), , 'Test 71');
test(greatestLetter("ZZZaaaBBBcccDDDeeeFFFgggHHHiiiJJJkkkLLLmmmNNNoooPPPqqqRRRsssTTTuuuVVVwwwXXXyyyzzz"), Z, 'Test 72');
test(greatestLetter("tEsTiNgUpPeRaNdLoWeRcAsE"), T, 'Test 73');
test(greatestLetter("sUnShInESoNnY"), S, 'Test 74');
test(greatestLetter("xYxYxYxYxYxYxYxYxYxYxYxYxYxYxYxYxYxYxYxYxYxYxYxYxYxYxY"), , 'Test 75');
test(greatestLetter("mNnOoPpQqRrSsTtUuVvWwXxYyZz"), Z, 'Test 76');
test(greatestLetter("zZyYxXwWvVuUtTsSrRpPqQoOnNmMlLkKjJiIhHgGfFeEdDcCbBaA"), Z, 'Test 77');
test(greatestLetter("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789"), Z, 'Test 78');
test(greatestLetter("zZaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyY"), Z, 'Test 79');
test(greatestLetter("aNkLmNpQrStUvWxYzZ"), Z, 'Test 80');
test(greatestLetter("sTrInGtEsTcAsE"), T, 'Test 81');
test(greatestLetter("aAaAaAbBbBcCcCdDdDeEeEfFfFgGgGhHhHiIiIjJjJkKkKlLlLmMmMnNnNoOpPqQrRsStTuUvVwWxXyYzZzZyYxXwWvVuUtTsSrRpPqQoOnNmMlLkKjJiIhHgGfFeEdDcCbBaA"), Z, 'Test 82');
test(greatestLetter("gReEn"), E, 'Test 83');
test(greatestLetter("mnopQRstUVwXYZ"), , 'Test 84');
test(greatestLetter("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), Z, 'Test 85');
test(greatestLetter("mnopqrStuvWxyzZ"), Z, 'Test 86');
test(greatestLetter("aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZ"), , 'Test 87');
test(greatestLetter("zZyYxXwWvVuUtTsSrRqQpPoOnNmMlLkKjJiIhHgGfFeEdDcCbBaA"), Z, 'Test 88');
test(greatestLetter("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), A, 'Test 89');
test(greatestLetter("aAaAaAaAaAaAaAaAaAaAaAaA"), A, 'Test 90');
test(greatestLetter("abcdefghijkLmnopqrstUvwxyz"), , 'Test 91');
test(greatestLetter("AbCdEfGhIjKlMnOpQrStUvWxYzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), Z, 'Test 92');
test(greatestLetter("aNnBmMlLkKiIjJhHgGfFeEdDcCbBaA"), N, 'Test 93');
test(greatestLetter("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), , 'Test 94');
test(greatestLetter("aabbccddeeffgghhiijjkkllmmooppqqrrssttuuvvwwxxyyzz"), , 'Test 95');
test(greatestLetter("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), Z, 'Test 96');
test(greatestLetter("abcdefghijklmnopqrstuvwxyz"), , 'Test 97');
test(greatestLetter("aBcDxyzXYZaBcD"), Z, 'Test 98');
test(greatestLetter("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), Z, 'Test 99');
test(greatestLetter("fUnNyCaSe"), N, 'Test 100');
test(greatestLetter("oRaNgE"), , 'Test 101');
test(greatestLetter("aBcDfEgHiJkLmNoPqRsTuVwXyZ"), , 'Test 102');
test(greatestLetter("xyZzXyZzXyZzXyZzXyZzXyZzXyZzXyZzXyZz"), Z, 'Test 103');
test(greatestLetter("bAcAdAeAfAgAhAiAjAkAlAmAnAoApAqArAsAtAuAvAwAxAyAz"), , 'Test 104');
test(greatestLetter("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), A, 'Test 105');
test(greatestLetter("qQwWeErRtTyYuUiIoOpPlLkKjJhHgGfFdDsSaAzZ"), Z, 'Test 106');
test(greatestLetter("xyzXYZabcABCdefDEFghiGHIjklJKLmnopMNOpqrQRstSTuvwUVWxyzXYZ"), Z, 'Test 107');
test(greatestLetter("MiXeDcAsEnOnCaSeTeStStRiNg"), T, 'Test 108');
test(greatestLetter("jUmBlEdTeXt"), T, 'Test 109');
test(greatestLetter("aBcDefGHiJkLmNoPqRsTuVwXyZZzz"), Z, 'Test 110');
test(greatestLetter("aAeEiIoOuUaAeEiIoOuUaAeEiIoOuU"), U, 'Test 111');
test(greatestLetter("abCDxyzXYZ"), Z, 'Test 112');
test(greatestLetter("oNeTwOThReEfOuRfIvEsIxTEnElEvEnTiGoNeVeNtWeNtYtHrEe"), W, 'Test 113');
test(greatestLetter("mAgIc"), , 'Test 114');
test(greatestLetter("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), Z, 'Test 115');
test(greatestLetter("ABCDEFGhijklmNopqrStuvWxyz"), , 'Test 116');
test(greatestLetter("AbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYz"), , 'Test 117');

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
