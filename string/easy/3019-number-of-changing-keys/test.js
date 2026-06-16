// Test: 3019. Number Of Changing Keys
// 78 test cases from LeetCodeDataset
// Run: node test.js

const { countKeyChanges } = require("./solution");

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

console.log("\n3019. Number Of Changing Keys\n");

test(countKeyChanges("ZzZzZzZ"), 0, 'Test 1');
test(countKeyChanges("QwErTyUiOpAsDfGhJkLzXcVbNm"), 25, 'Test 2');
test(countKeyChanges("ABCDEFG"), 6, 'Test 3');
test(countKeyChanges("A"), 0, 'Test 4');
test(countKeyChanges("AaAaAaaA"), 0, 'Test 5');
test(countKeyChanges("zZyYxXwW"), 3, 'Test 6');
test(countKeyChanges("zZyYxXwWvVuUtTsSrRqQpPoOnNmMlLkKjJiIhHgGfFeEdDcCbBaA"), 25, 'Test 7');
test(countKeyChanges("aAbBcC"), 2, 'Test 8');
test(countKeyChanges("aBcDeFg"), 6, 'Test 9');
test(countKeyChanges("aBAcB"), 4, 'Test 10');
test(countKeyChanges("AbCdEfGhIjK"), 10, 'Test 11');
test(countKeyChanges("zzzzzzzz"), 0, 'Test 12');
test(countKeyChanges("aAaAaAaAaA"), 0, 'Test 13');
test(countKeyChanges("AAAAaaaAAA"), 0, 'Test 14');
test(countKeyChanges("AAaaaAA"), 0, 'Test 15');
test(countKeyChanges("a"), 0, 'Test 16');
test(countKeyChanges("abcdefg"), 6, 'Test 17');
test(countKeyChanges("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), 25, 'Test 18');
test(countKeyChanges("abcABCdefDEFghiGHIjklJKLmnoMNOpqrPQRstuSTUvwxVWXyzYZ"), 51, 'Test 19');
test(countKeyChanges("ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"), 51, 'Test 20');
test(countKeyChanges("AbCdEfGhIjKlMnoPqRsTuVwXyZ"), 25, 'Test 21');
test(countKeyChanges("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), 51, 'Test 22');
test(countKeyChanges("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), 0, 'Test 23');
test(countKeyChanges("aBCdeFGhIJKlmNoPQRstUVwXYz"), 25, 'Test 24');
test(countKeyChanges("AbCdEfGhIjKlMnOpQrStUvWxYzA"), 26, 'Test 25');
test(countKeyChanges("aBcDefGhIjKlMnOpQrStUvWxYz"), 25, 'Test 26');
test(countKeyChanges("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), 0, 'Test 27');
test(countKeyChanges("abcDefGhIjKlMnOpQrStUvWxYzABC"), 28, 'Test 28');
test(countKeyChanges("AaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAa"), 0, 'Test 29');
test(countKeyChanges("abABcdCDefEFghGHijIJklKLmnMNopOPqrQRstSTuvUVwxWXyzYZ"), 51, 'Test 30');
test(countKeyChanges("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), 25, 'Test 31');
test(countKeyChanges("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), 0, 'Test 32');
test(countKeyChanges("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAa"), 0, 'Test 33');
test(countKeyChanges("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 51, 'Test 34');
test(countKeyChanges("bAcAdAeAfAgAhAiAjAkAlAmAnAoApAqArAsAtAuAvAwAxAyAz"), 48, 'Test 35');
test(countKeyChanges("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"), 77, 'Test 36');
test(countKeyChanges("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), 51, 'Test 37');
test(countKeyChanges("mNbvCxZlkJhGfDsApOiUrYtWeQ"), 25, 'Test 38');
test(countKeyChanges("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"), 77, 'Test 39');
test(countKeyChanges("aBcDeFgHiJkLmNoPqRsTuVwXyZ"), 25, 'Test 40');
test(countKeyChanges("abcdEFGHijklMNOPqrstUVWXyz"), 25, 'Test 41');
test(countKeyChanges("zYxWvUtSrQpOnMlKjIhGfEdCbA"), 25, 'Test 42');
test(countKeyChanges("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAb"), 1, 'Test 43');
test(countKeyChanges("AbCdEfGhIjKlMnOpQrStUvWxYz"), 25, 'Test 44');
test(countKeyChanges("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), 0, 'Test 45');
test(countKeyChanges("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 46');
test(countKeyChanges("aBcDeFgHiJkLmNoPqRsTuVwXyZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 77, 'Test 47');
test(countKeyChanges("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAa"), 26, 'Test 48');
test(countKeyChanges("aBcDeFgHiJkLmNoPqRsTuVwXyZaBc"), 28, 'Test 49');
test(countKeyChanges("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFf"), 31, 'Test 50');
test(countKeyChanges("abcdefghijklmnopqrstuvwxyzabcde"), 30, 'Test 51');
test(countKeyChanges("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 51, 'Test 52');
test(countKeyChanges("abcdefGHIJKLmnopQRstuvwxyzAbCdEfGHIJKLmnopQRstuvwxyz"), 51, 'Test 53');
test(countKeyChanges("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"), 51, 'Test 54');
test(countKeyChanges("aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZ"), 51, 'Test 55');
test(countKeyChanges("zZyYxXwWvVuUtTsSrRpPqQoOnNmMlLkKjJiIhHgGfFeEdDaA"), 23, 'Test 56');
test(countKeyChanges("aBcDabcdEFGHefghIJKLijklMNOpQRmnopqrSTUVstuvWXYZwxyz"), 51, 'Test 57');
test(countKeyChanges("aBcDabcdEFGHefghIJKLijklMNOpQRmnopqrSTUVstuvWXYZwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 77, 'Test 58');
test(countKeyChanges("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzBb"), 26, 'Test 59');
test(countKeyChanges("zZyYxXwWvVuUtTsSrRpPqQoOnNmMlLkJiIhHgGfFeEdDcCbBaA"), 25, 'Test 60');
test(countKeyChanges("aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkLmNoPqRsTuVwXyZ"), 77, 'Test 61');
test(countKeyChanges("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), 0, 'Test 62');
test(countKeyChanges("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 63');
test(countKeyChanges("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), 0, 'Test 64');
test(countKeyChanges("AaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAa"), 0, 'Test 65');
test(countKeyChanges("abcdefghijklmnopqrstuvwxyzabcDEFdef"), 34, 'Test 66');
test(countKeyChanges("AbCdEfGhIjKlMnOpQrStUvWxYzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), 51, 'Test 67');
test(countKeyChanges("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 103, 'Test 68');
test(countKeyChanges("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCc"), 28, 'Test 69');
test(countKeyChanges("abcdEFGHijklMNOpQRstUVWXyz"), 25, 'Test 70');
test(countKeyChanges("aBcDefGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYz"), 51, 'Test 71');
test(countKeyChanges("AaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAa"), 0, 'Test 72');
test(countKeyChanges("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 25, 'Test 73');
test(countKeyChanges("ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba"), 51, 'Test 74');
test(countKeyChanges("zYxWvUtSrQpOnMlKjIhGfEdCbAbaCBEDFGHIJKLNMOPQRSTU VWXYZ"), 53, 'Test 75');
test(countKeyChanges("AbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYz"), 51, 'Test 76');
test(countKeyChanges("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), 0, 'Test 77');
test(countKeyChanges("mNbVcXzLkJhGfDsApoIuYtReWq"), 25, 'Test 78');

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
