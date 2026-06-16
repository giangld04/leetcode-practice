// Test: 2434. Using A Robot To Print The Lexicographically Smallest String
// 61 test cases from LeetCodeDataset
// Run: node test.js

const { robotWithString } = require("./solution");

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

console.log("\n2434. Using A Robot To Print The Lexicographically Smallest String\n");

test(robotWithString("aabbcc"), aabbcc, 'Test 1');
test(robotWithString("bdda"), addb, 'Test 2');
test(robotWithString("cba"), abc, 'Test 3');
test(robotWithString("bac"), abc, 'Test 4');
test(robotWithString("abcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyz, 'Test 5');
test(robotWithString("aaa"), aaa, 'Test 6');
test(robotWithString("abcde"), abcde, 'Test 7');
test(robotWithString("zza"), azz, 'Test 8');
test(robotWithString("zyxwvutsrqponmlkjihgfedcba"), abcdefghijklmnopqrstuvwxyz, 'Test 9');
test(robotWithString("a"), a, 'Test 10');
test(robotWithString("edcba"), abcde, 'Test 11');
test(robotWithString("abacabadabacaba"), aaaaaaaabcbdbcb, 'Test 12');
test(robotWithString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 13');
test(robotWithString("aaaabbbbccccdddd"), aaaabbbbccccdddd, 'Test 14');
test(robotWithString("fedcb"), bcdef, 'Test 15');
test(robotWithString("ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp"), ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp, 'Test 16');
test(robotWithString("aaabbbccc"), aaabbbccc, 'Test 17');
test(robotWithString("fedcbafedcbafedcba"), aaabcdefbcdefbcdef, 'Test 18');
test(robotWithString("fedcbaghijk"), abcdefghijk, 'Test 19');
test(robotWithString("mjwqeqpdpdwdwwvwqwdqeqpqwwqwwqwwpqwwqwpqwwqppwpqpqppwpqpqpqpqpqpqpqpqpqpqpqpqpqpqppwqqqqqqqppqqqpqpwq"), ddddepppppppppppppppppppppppppppppqqqqqqqqqqqqwwqqqqqqqqqqqqqqwqqwqwwqwqwwqwwqwwqwwqqqwqwvwwwppqeqwjm, 'Test 20');
test(robotWithString("aaabbbcccdddeeefffggghhhiiiijjjjkkkkllllmmmmnnnnooopppqqqrrrssstttuuuuvvvwwwxxxyyyzzz"), aaabbbcccdddeeefffggghhhiiiijjjjkkkkllllmmmmnnnnooopppqqqrrrssstttuuuuvvvwwwxxxyyyzzz, 'Test 21');
test(robotWithString("acbcbabcbabcba"), aaaabcbbcbbcbc, 'Test 22');
test(robotWithString("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), aaaaaaaaaaaaaaaaaaabcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbc, 'Test 23');
test(robotWithString("bbbaaa"), aaabbb, 'Test 24');
test(robotWithString("abcdcba"), aabcdcb, 'Test 25');
test(robotWithString("zazbzczdz"), abcdzzzzz, 'Test 26');
test(robotWithString("zzzaaa"), aaazzz, 'Test 27');
test(robotWithString("amazingleetcodeproblem"), aabelmorpedocteelgnizm, 'Test 28');
test(robotWithString("abcdefgzyxwvutsrqponmlkjihgfedcba"), aabcdefghijklmnopqrstuvwxyzgfedcb, 'Test 29');
test(robotWithString("fedcbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbac"), aaaaaaaaaaaaaaaaabcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbccdef, 'Test 30');
test(robotWithString("abracadabra"), aaaaarbdcrb, 'Test 31');
test(robotWithString("aabccccaaa"), aaaaaccccb, 'Test 32');
test(robotWithString("abcdabcda"), aaadcbdcb, 'Test 33');
test(robotWithString("bacbacbacb"), aaabbccbcb, 'Test 34');
test(robotWithString("abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde"), aaaaaaaaaabcdedcbedcbedcbedcbedcbedcbedcbedcbedcbe, 'Test 35');
test(robotWithString("zzzaaaazzzaaaazzzaaaazzzaaaazzzaaaazzzaaaazzzaaaazzzaaaazzzaaaazzzaaaazzzaaaazzzaaaa"), aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 36');
test(robotWithString("abcdefghijklmnopqrstuvwxyzz"), abcdefghijklmnopqrstuvwxyzz, 'Test 37');
test(robotWithString("zzzyyyxxxwwwwvvvuuutttsssrqqqpppoonnmmlkkjjiihhggffeedcba"), abcdeeffgghhiijjkklmmnnoopppqqqrssstttuuuvvvwwwwxxxyyyzzz, 'Test 38');
test(robotWithString("caabdbac"), aaabcdbc, 'Test 39');
test(robotWithString("aaaabbbbccccddddeeeeffff"), aaaabbbbccccddddeeeeffff, 'Test 40');
test(robotWithString("fedcba"), abcdef, 'Test 41');
test(robotWithString("abcdabcabc"), aaabcbcdcb, 'Test 42');
test(robotWithString("leetcode"), cdeoteel, 'Test 43');
test(robotWithString("racecar"), aacecrr, 'Test 44');
test(robotWithString("zzzyyxxwvwuvuttrssrqqponnmlkkjjiihhhggffeeddcbbbaaa"), aaabbbcddeeffgghhhiijjkklmnnopqqrssrttuvuwvwxxyyzzz, 'Test 45');
test(robotWithString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 46');
test(robotWithString("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), aabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcb, 'Test 47');
test(robotWithString("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), aaaabcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcbzyxwvutsrqponmlkjihgfedcbzyxwvutsrqponmlkjihgfedcbz, 'Test 48');
test(robotWithString("banana"), aaannb, 'Test 49');
test(robotWithString("abcdeabcde"), aabcdedcbe, 'Test 50');
test(robotWithString("mississippi"), iiiippssssm, 'Test 51');
test(robotWithString("acacacacac"), aaaaaccccc, 'Test 52');
test(robotWithString("abcdabcdbacd"), aaabcdcbdcbd, 'Test 53');
test(robotWithString("bbaaccdd"), aabbccdd, 'Test 54');
test(robotWithString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz, 'Test 55');
test(robotWithString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 56');
test(robotWithString("abcdabcdabcdabcd"), aaaabcdcbdcbdcbd, 'Test 57');
test(robotWithString("aaabbbcccddd"), aaabbbcccddd, 'Test 58');
test(robotWithString("qrsnspndpsnpppdnspndpdpsnsnspdpspndpdpsnpsdpsnpspdpsndpdpsnpdpsnpsdpsnpd"), ddddddddddddddpnspspnsppnsppnsppspnspspnsppnpsppsnsnsppnpsnpppnspnpsnsrq, 'Test 59');
test(robotWithString("abababababababababababababab"), aaaaaaaaaaaaaabbbbbbbbbbbbbb, 'Test 60');
test(robotWithString("xyzzyxzyx"), xxxyzyzzy, 'Test 61');

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
