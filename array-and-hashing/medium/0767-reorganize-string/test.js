// Test: 767. Reorganize String
// 57 test cases from LeetCodeDataset
// Run: node test.js

const { reorganizeString } = require("./solution");

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

console.log("\n767. Reorganize String\n");

test(reorganizeString("aaabc"), abaca, 'Test 1');
test(reorganizeString("aabbccc"), cacbcba, 'Test 2');
test(reorganizeString("abcdefg"), aebfcgd, 'Test 3');
test(reorganizeString("aaabbbccc"), abacacbcb, 'Test 4');
test(reorganizeString("aabbccddeeffgghhijklmnop"), agagbhbhcicjdkdlemenfofp, 'Test 5');
test(reorganizeString("abbabbaaa"), ababababa, 'Test 6');
test(reorganizeString("abcdefghijklmnopqrstuvwxyz"), anbocpdqerfsgthuivjwkxlymz, 'Test 7');
test(reorganizeString("aabac"), abaca, 'Test 8');
test(reorganizeString("zzzza"), , 'Test 9');
test(reorganizeString("aabbccddeeffgghhijklmnopqrstuvwxy"), ajakblbmcncodpdqeresftfugvgwhxhyi, 'Test 10');
test(reorganizeString("aabbaa"), , 'Test 11');
test(reorganizeString("aabbbb"), , 'Test 12');
test(reorganizeString("abababab"), abababab, 'Test 13');
test(reorganizeString("aaabbbcccd"), abacacbcbd, 'Test 14');
test(reorganizeString("aabbbcccc"), cbcbcacab, 'Test 15');
test(reorganizeString("aabbccddeeffgghhijklmnopqr"), agahbhbicjckdldmeneofpfqgr, 'Test 16');
test(reorganizeString("aabbccddeeffgghhijklmnopqrs"), ahahbibjckcldmdneoepfqfrgsg, 'Test 17');
test(reorganizeString("aabbccddeeffgghhijklmnopqrstuvwxyz"), ajakblbmcncodpdqeresftfugvgwhxhyiz, 'Test 18');
test(reorganizeString("aabbccddeeffgghhij"), aeafbfbgcgchdhdiej, 'Test 19');
test(reorganizeString("aaaaabc"), , 'Test 20');
test(reorganizeString("zzzzzzz"), , 'Test 21');
test(reorganizeString("a"), a, 'Test 22');
test(reorganizeString("aabbc"), abacb, 'Test 23');
test(reorganizeString("zzzzzaabbcc"), zazbzbzczca, 'Test 24');
test(reorganizeString("aa"), , 'Test 25');
test(reorganizeString(""), Error: max[] iterable argument is empty, 'Test 26');
test(reorganizeString("aabbccddeeffgghhi"), aeafbfbgcgchdhdie, 'Test 27');
test(reorganizeString("aaabbcc"), abacacb, 'Test 28');
test(reorganizeString("abcabc"), abacbc, 'Test 29');
test(reorganizeString("aabb"), abab, 'Test 30');
test(reorganizeString("aabbccddeeffgghhijklmnopqrstuvw"), aiajbkblcmcndodpeqerfsftgugvhwh, 'Test 31');
test(reorganizeString("vvvlo"), vlvov, 'Test 32');
test(reorganizeString("abc"), acb, 'Test 33');
test(reorganizeString("aabbccddeeffgghhijklmnopqrstuvwx"), aiajbkblcmcndodpeqerfsftgugvhwhx, 'Test 34');
test(reorganizeString("aabbccddeeffgghhijkl"), afafbgbgchchdidjekel, 'Test 35');
test(reorganizeString("aabbccddeeffgghhijklmnopqrst"), ahahbibjckcldmdneoepfqfrgsgt, 'Test 36');
test(reorganizeString("geeksforgeeks"), ekesesefgogrk, 'Test 37');
test(reorganizeString("aabbccddeeffgghhijklm"), afagbgbhchcidjdkelemf, 'Test 38');
test(reorganizeString("aabbccddeeffgg"), adaebebfcfcgdg, 'Test 39');
test(reorganizeString("aaabcbb"), ababacb, 'Test 40');
test(reorganizeString("aabbccddeeffgghh"), aeaebfbfcgcgdhdh, 'Test 41');
test(reorganizeString("bfrbs"), brbsf, 'Test 42');
test(reorganizeString("aab"), aba, 'Test 43');
test(reorganizeString("aabbccddeeffgghhijklmnopqrstuv"), ahaibjbkclcmdndoepeqfrfsgtguhv, 'Test 44');
test(reorganizeString("aabbcc"), abacbc, 'Test 45');
test(reorganizeString("mississippi"), isisipipsms, 'Test 46');
test(reorganizeString("zzzzz"), , 'Test 47');
test(reorganizeString("zmrlllllll"), , 'Test 48');
test(reorganizeString("ababab"), ababab, 'Test 49');
test(reorganizeString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), ananbobocpcpdqdqererfsfsgtgthuhuivivjwjwkxkxlylymzmz, 'Test 50');
test(reorganizeString("programming"), rprogagimnm, 'Test 51');
test(reorganizeString("abacaba"), ababaca, 'Test 52');
test(reorganizeString("zzzzzzzz"), , 'Test 53');
test(reorganizeString("aaaabc"), , 'Test 54');
test(reorganizeString("aabbccddeeffgghhijklmnopq"), agahbhbicjckdldmeneofpfqg, 'Test 55');
test(reorganizeString("aabbccddeeffgghhijklmnopqrstu"), ahaibjbkclcmdndoepeqfrfsgtguh, 'Test 56');
test(reorganizeString("aaab"), , 'Test 57');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

