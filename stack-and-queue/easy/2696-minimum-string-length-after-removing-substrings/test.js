// Test: 2696. Minimum String Length After Removing Substrings
// 153 test cases from LeetCodeDataset
// Run: node test.js

const { minLength } = require("./solution");

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

console.log("\n2696. Minimum String Length After Removing Substrings\n");

test(minLength("ABCDBA"), 2, 'Test 1');
test(minLength("CDCDCD"), 0, 'Test 2');
test(minLength("ABABAB"), 0, 'Test 3');
test(minLength("ACBBD"), 5, 'Test 4');
test(minLength("ABFCACDB"), 2, 'Test 5');
test(minLength("AAAA"), 4, 'Test 6');
test(minLength(""), 0, 'Test 7');
test(minLength("BACD"), 2, 'Test 8');
test(minLength("ABCDABCD"), 0, 'Test 9');
test(minLength("ABACDBACDB"), 0, 'Test 10');
test(minLength("ABABABABABABABABAB"), 0, 'Test 11');
test(minLength("ACDBABCDACDB"), 0, 'Test 12');
test(minLength("ABCDBCDBCDCDBABCDB"), 4, 'Test 13');
test(minLength("FCABABCDABCDF"), 3, 'Test 14');
test(minLength("CDCDCDCDCDCDCDCDCDCDCDCDCDCDCDCD"), 0, 'Test 15');
test(minLength("ABCABCABCABC"), 4, 'Test 16');
test(minLength("CDCDCDCDCDCDCD"), 0, 'Test 17');
test(minLength("ABABCDABABCD"), 0, 'Test 18');
test(minLength("ABCDABCDBABCDABCDB"), 2, 'Test 19');
test(minLength("CCCCCCCC"), 8, 'Test 20');
test(minLength("CDABCDAB"), 0, 'Test 21');
test(minLength("DDDDDDDD"), 8, 'Test 22');
test(minLength("CDCDCDCD"), 0, 'Test 23');
test(minLength("ACBDCDBDCB"), 8, 'Test 24');
test(minLength("ABABABAB"), 0, 'Test 25');
test(minLength("CDCDCDCDCDCDCDCD"), 0, 'Test 26');
test(minLength("AAABBBCCCDDD"), 0, 'Test 27');
test(minLength("CDCDCDCDABABABAB"), 0, 'Test 28');
test(minLength("ABABABABAB"), 0, 'Test 29');
test(minLength("ABABABCDCDABCDCD"), 0, 'Test 30');
test(minLength("ABCDABCDBACDBACDABCD"), 2, 'Test 31');
test(minLength("AABBCCDDBBAA"), 4, 'Test 32');
test(minLength("ABCDABCDAB"), 0, 'Test 33');
test(minLength("DCABDCABDCABDCAB"), 2, 'Test 34');
test(minLength("DCABDCABDCABDCABDCABDCABDCABDCAB"), 2, 'Test 35');
test(minLength("CDCDCDCDCDAB"), 0, 'Test 36');
test(minLength("DCBADCBAABCDDC"), 10, 'Test 37');
test(minLength("ABCDABCDCDABCDABCDCD"), 0, 'Test 38');
test(minLength("ABCDBACDBACD"), 2, 'Test 39');
test(minLength("DCBA"), 4, 'Test 40');
test(minLength("FCABFCABFCABFCABFCABFCABFCABFCABFCAB"), 18, 'Test 41');
test(minLength("DBABABCD"), 2, 'Test 42');
test(minLength("ABABABABABAB"), 0, 'Test 43');
test(minLength("BACDBACDBACDAB"), 2, 'Test 44');
test(minLength("AAAAAAAAAABBBBBBBBBBAAAAAAAAAABBBBBBBBBB"), 0, 'Test 45');
test(minLength("ACDBCDABABCD"), 0, 'Test 46');
test(minLength("ACDBABABCDACDB"), 0, 'Test 47');
test(minLength("BACDBACD"), 2, 'Test 48');
test(minLength("ABCDBACDAB"), 2, 'Test 49');
test(minLength("ABCDBCDBCDAB"), 2, 'Test 50');
test(minLength("BACDBACDBACDBACDB"), 1, 'Test 51');
test(minLength("ABCDABCDCDABCD"), 0, 'Test 52');
test(minLength("ABCDABCDCD"), 0, 'Test 53');
test(minLength("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"), 40, 'Test 54');
test(minLength("ABCDCDAB"), 0, 'Test 55');
test(minLength("ABABABABABCDABCD"), 0, 'Test 56');
test(minLength("ABCDABCDBABCDBAB"), 2, 'Test 57');
test(minLength("CDCDCDCDCD"), 0, 'Test 58');
test(minLength("ABABABABABABABABABCDCDCDCD"), 0, 'Test 59');
test(minLength("ABCDABCDBAB"), 1, 'Test 60');
test(minLength("CDCDCDABABCDABABCDABABCD"), 0, 'Test 61');
test(minLength("ABABCDABABCDABABCDABABCDAB"), 0, 'Test 62');
test(minLength("ACDBACDBACDBACDBACDB"), 0, 'Test 63');
test(minLength("CDABCDABCDABCD"), 0, 'Test 64');
test(minLength("ACDBABABABCDAB"), 0, 'Test 65');
test(minLength("DCABDCAB"), 2, 'Test 66');
test(minLength("ABABABABABABAB"), 0, 'Test 67');
test(minLength("ABCDCBAABCDBCDABCDCBAABCDBCD"), 4, 'Test 68');
test(minLength("ABCDABCDBABCDABCDBABCDABCDBABCDABCDB"), 4, 'Test 69');
test(minLength("ACDBACDBACDBACDBACDBACDBACDBACDBACDB"), 0, 'Test 70');
test(minLength("DBACBADC"), 8, 'Test 71');
test(minLength("ACDBACDBACDBACDB"), 0, 'Test 72');
test(minLength("BACDBACDBACDBACDBACD"), 2, 'Test 73');
test(minLength("AAAAAAAA"), 8, 'Test 74');
test(minLength("CDABCDABCDABCDABCDAB"), 0, 'Test 75');
test(minLength("CDABCDABCDABCDABCDABCDABCDABCDABCDAB"), 0, 'Test 76');
test(minLength("CDCDCDCDCDCD"), 0, 'Test 77');
test(minLength("ABACBCADCD"), 6, 'Test 78');
test(minLength("ABCDABCDBACDBACD"), 2, 'Test 79');
test(minLength("ABABCDABABCDAB"), 0, 'Test 80');
test(minLength("ABCDDCBA"), 4, 'Test 81');
test(minLength("ABCDABCDABCDABCDABCDABCDABCDABCD"), 0, 'Test 82');
test(minLength("BACDBACDBACDBACD"), 2, 'Test 83');
test(minLength("XYZ"), 3, 'Test 84');
test(minLength("ABABABABABABABABABAB"), 0, 'Test 85');
test(minLength("BBBBBBBBBBBBBBBB"), 16, 'Test 86');
test(minLength("CDCDCDABABCD"), 0, 'Test 87');
test(minLength("AAAAAAAAAAAAAAAA"), 16, 'Test 88');
test(minLength("BBBBBBBB"), 8, 'Test 89');
test(minLength("CDCDABAB"), 0, 'Test 90');
test(minLength("CDABCDABCDAB"), 0, 'Test 91');
test(minLength("ABCDABCDABCD"), 0, 'Test 92');
test(minLength("CDABCDABCD"), 0, 'Test 93');
test(minLength("ABCDABCDABCDBACD"), 2, 'Test 94');
test(minLength("ACBDCDBDCBDCB"), 11, 'Test 95');
test(minLength("ABABABABABCD"), 0, 'Test 96');
test(minLength("AAAAABBBBB"), 0, 'Test 97');
test(minLength("ABCDBCDABCDBCDABCDBCDABCDBCD"), 4, 'Test 98');
test(minLength("ABABABABABABABABABABABABABABABABABAB"), 0, 'Test 99');
test(minLength("BBCCCDDDAABB"), 2, 'Test 100');
test(minLength("ABCCBAABCCBA"), 8, 'Test 101');
test(minLength("ACBDABFCDC"), 6, 'Test 102');
test(minLength("ABCDABCDABCDAB"), 0, 'Test 103');
test(minLength("BBBBBAAAAA"), 10, 'Test 104');
test(minLength("FFFFFFFFFFFFFFFF"), 16, 'Test 105');
test(minLength("CABACDBABC"), 2, 'Test 106');
test(minLength("CDCDCDCDCDABABABAB"), 0, 'Test 107');
test(minLength("ABABDCDCCCDA"), 4, 'Test 108');
test(minLength("ACBDACBDACBD"), 12, 'Test 109');
test(minLength("AACBBCCDAD"), 8, 'Test 110');
test(minLength("ABCDCBAABCDBCD"), 2, 'Test 111');
test(minLength("ABCDABCDBACD"), 2, 'Test 112');
test(minLength("DCBADCBABC"), 8, 'Test 113');
test(minLength("BACDBACDBACDB"), 1, 'Test 114');
test(minLength("ABCDABCDBACDAB"), 2, 'Test 115');
test(minLength("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"), 40, 'Test 116');
test(minLength("FCABFCABFCABFCABFCAB"), 10, 'Test 117');
test(minLength("FCABFCABFCAB"), 6, 'Test 118');
test(minLength("BACDBACDBACDBACDBACDBACDBACDBACDBACDB"), 1, 'Test 119');
test(minLength("ABCDABCDBABD"), 2, 'Test 120');
test(minLength("ACBACDBCDB"), 4, 'Test 121');
test(minLength("ABACDABACDABACD"), 3, 'Test 122');
test(minLength("BACDBACDBACDBACDBACDBACD"), 2, 'Test 123');
test(minLength("ABABABABABABABABABABABABAB"), 0, 'Test 124');
test(minLength("BACDBACDBACD"), 2, 'Test 125');
test(minLength("CDCDCDCDCDCDCDCDCD"), 0, 'Test 126');
test(minLength("ABCDBCDBCDABCDBCDABCDBCDABCDBCD"), 5, 'Test 127');
test(minLength("ABCDABCDBABC"), 2, 'Test 128');
test(minLength("ABCDABCDBABCDABCDBABCDABCDBAB"), 3, 'Test 129');
test(minLength("ABCDABCDCDAB"), 0, 'Test 130');
test(minLength("ABCDEFGHABCD"), 4, 'Test 131');
test(minLength("AAAAAAAAAABBBBBBBBBB"), 0, 'Test 132');
test(minLength("BBBBBBBBBAAAAAAAAABBBBBBBBBBAAAAAAAAAA"), 20, 'Test 133');
test(minLength("AABABBCCDDBBCC"), 4, 'Test 134');
test(minLength("ABCDABCDABCDABCD"), 0, 'Test 135');
test(minLength("ABCDABCDABCDABCDABCDABCDABCDABCDABCDABCD"), 0, 'Test 136');
test(minLength("ACDBACDBACDB"), 0, 'Test 137');
test(minLength("BACDBACDBABCDABCD"), 1, 'Test 138');
test(minLength("DCABDCABDCABDCABDCABDCABDCABDCABDCABDCABDCAB"), 2, 'Test 139');
test(minLength("ABACADABAD"), 6, 'Test 140');
test(minLength("ABCD"), 0, 'Test 141');
test(minLength("BBBBBBBBBAAAAAAAAA"), 18, 'Test 142');
test(minLength("ABCDABCDABCDABCDABCD"), 0, 'Test 143');
test(minLength("ABABABABABCDABCDBACDBACD"), 2, 'Test 144');
test(minLength("DCDABABABABABABCD"), 1, 'Test 145');
test(minLength("ABABABABCDABCDBACDBACDABABABAB"), 2, 'Test 146');
test(minLength("CDCDCDCDCDCDCDCDCDCDCDCD"), 0, 'Test 147');
test(minLength("ACDBACDB"), 0, 'Test 148');
test(minLength("ABABCDABCD"), 0, 'Test 149');
test(minLength("AACBBCCCDD"), 6, 'Test 150');
test(minLength("ABABABABABABCD"), 0, 'Test 151');
test(minLength("AACCBBAADD"), 10, 'Test 152');
test(minLength("ABABCDABABCDABCD"), 0, 'Test 153');

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
