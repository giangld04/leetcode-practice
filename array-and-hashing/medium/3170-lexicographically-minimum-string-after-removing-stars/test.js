// Test: 3170. Lexicographically Minimum String After Removing Stars
// 70 test cases from LeetCodeDataset
// Run: node test.js

const { clearStars } = require("./solution");

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

console.log("\n3170. Lexicographically Minimum String After Removing Stars\n");

test(clearStars("*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z"), z, 'Test 1');
test(clearStars("*a*b*c"), c, 'Test 2');
test(clearStars("aaba*"), aab, 'Test 3');
test(clearStars("z*z*z*z"), z, 'Test 4');
test(clearStars("a*b*c*a*b*c"), c, 'Test 5');
test(clearStars("zzzzzzzzz***zzzzz"), zzzzzzzzzzz, 'Test 6');
test(clearStars("abc***"), , 'Test 7');
test(clearStars("a*a*a*a*a*a*a*a*a*a"), a, 'Test 8');
test(clearStars("aaabbbccc***"), bbbccc, 'Test 9');
test(clearStars("ab*c*d*e"), de, 'Test 10');
test(clearStars("ab*ac*"), bc, 'Test 11');
test(clearStars("aaa*bbb*ccc"), abbbccc, 'Test 12');
test(clearStars("abcde*****fghij"), fghij, 'Test 13');
test(clearStars("a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z"), z, 'Test 14');
test(clearStars("a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*a"), a, 'Test 15');
test(clearStars("leetcode*e*et*c*o*"), leetoeto, 'Test 16');
test(clearStars("abcabcabc***abc"), bcbcbcabc, 'Test 17');
test(clearStars("a*a*a*a*a"), a, 'Test 18');
test(clearStars("abc"), abc, 'Test 19');
test(clearStars("z*z*z"), z, 'Test 20');
test(clearStars("aa*bb*c"), bbc, 'Test 21');
test(clearStars("abcdef*ghij*k*l*m*"), fghijklm, 'Test 22');
test(clearStars("*a*a*a*a*a*a*a*a*a*a"), a, 'Test 23');
test(clearStars("zyxwvutsrqponmlkjihgfedcba*"), zyxwvutsrqponmlkjihgfedcb, 'Test 24');
test(clearStars("abcdefghijklmnopqrstuvwxyz*"), bcdefghijklmnopqrstuvwxyz, 'Test 25');
test(clearStars("abc*def*ghi*"), defghi, 'Test 26');
test(clearStars("*a*b*c*"), , 'Test 27');
test(clearStars("ab*cd*ef*gh*ij*kl*mn*op*qr*st*uv*wx*yz*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z"), tuvwxyztuvwxyz, 'Test 28');
test(clearStars("aaabbbccc*bbb*aaa*"), abbbcccbbbaa, 'Test 29');
test(clearStars("abc*d*efg*h*ijk*lmn*opq*rst*u*v*w*x*y*z*"), opqrstuvwxyz, 'Test 30');
test(clearStars("aabbaa*bb*a*aa*"), aabbbba, 'Test 31');
test(clearStars("aaabbbccc***bbb***aaa"), bbbcccaaa, 'Test 32');
test(clearStars("abracadabra*bra*bra*cad*a"), abracadabrbrbrcda, 'Test 33');
test(clearStars("abcdefghijklmnopqrstuvwxyz*zyxwvutsrqponmlkjihgfedcba*"), bcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcb, 'Test 34');
test(clearStars("a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z"), z, 'Test 35');
test(clearStars("a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*"), , 'Test 36');
test(clearStars("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz*"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 37');
test(clearStars("banana*na*na"), banannna, 'Test 38');
test(clearStars("abcabcabcabcabcabcabc*abc*abc*abc*"), abcabcabcabcabcabcbcbcbcbc, 'Test 39');
test(clearStars("*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*"), , 'Test 40');
test(clearStars("mno*pqr*stu*vwx*yz*abc*def*ghi*jkl"), rstuvwxyzdefghijkl, 'Test 41');
test(clearStars("abcabcabcabc*abc*abc*abc*abc*abc*abc*abc*abc*"), abcabcabcbcbcbcbcbcbcbcbcbc, 'Test 42');
test(clearStars("abcdefghijk*lmnopqrst*uvwxyz*"), defghijklmnopqrstuvwxyz, 'Test 43');
test(clearStars("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz***"), bccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz, 'Test 44');
test(clearStars("a*a*b*b*c*c*d*d*e*e*f*f*g*g*h*h*i*i*j*j*k*k*l*l*m*m*n*n*o*o*p*p*q*q*r*r*s*s*t*t*u*u*v*v*w*w*x*x*y*y*z*z"), z, 'Test 45');
test(clearStars("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz*"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 46');
test(clearStars("abc*def*ghi*jkl*mno*pqr*stu*vwx*yz*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z"), rstuvwxyzrstuvwxyz, 'Test 47');
test(clearStars("zzzzz*yyyyy*xxxxx*wwwww*vvvvv*uuuuu*ttttt*sssss*rrrrr*qqqqq*ppppp*ooooo*nnnnn*mmmmm*lllll*kkkkk*jjjjj*iiiii*h*"), zzzzyyyyxxxxwwwwvvvvuuuuttttssssrrrrqqqqppppoooonnnnmmmmllllkkkkjjjjiiii, 'Test 48');
test(clearStars("zzzzzzzzzzz*a*zzzzzzzzzz*b*zzzzzzzzzz*c*zzzzzzzzzz*d*zzzzzzzzzz*e*zzzzzzzzzz*f*zzzzzzzzzz*g*zzzzzzzzzz*h*zzzzzzzzzz*i*zzzzzzzzzz*j*zzzzzzzzzz*k*zzzzzzzzzz*l*zzzzzzzzzz*m*zzzzzzzzzz*n*zzzzzzzzzz*o*zzzzzzzzzz*p*zzzzzzzzzz*q*zzzzzzzzzz*r*zzzzzzzzzz*s*zzzzzzzzzz*t*zzzzzzzzzz*u*zzzzzzzzzz*v*zzzzzzzzzz*w*zzzzzzzzzz*x*zzzzzzzzzz*y*zzzzzzzzzz*z*"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 49');
test(clearStars("a*z*y*x*z*y*x*"), , 'Test 50');
test(clearStars("a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z"), z, 'Test 51');
test(clearStars("aaabbbccc*aa*bb*cc*"), abbbcccbbcc, 'Test 52');
test(clearStars("z*yz*yz*yz*y*z"), zzzz, 'Test 53');
test(clearStars("xyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyx***zyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyx***zyxzyxzyxzyxzyxzyxzyxzyxzyxzyx***"), xyxzyxzyxzyxzyxzyxzyxzyxzyxzyzyzyzyxzyxzyxzyxzyxzyxzyxzyxzyxzyzyzyzyxzyxzyxzyxzyxzyxzyxzyzyzy, 'Test 54');
test(clearStars("abc***def***ghi***jkl***mno***pqr***stu***vwx***yz*"), z, 'Test 55');
test(clearStars("zyxwvu*utsrqponmlkjihgfedcba*"), zyxwvutsrqponmlkjihgfedcb, 'Test 56');
test(clearStars("abcd*efgh*i*jklm*no*pqrst*uvw*x*y*z"), jklmnopqrstuvwxyz, 'Test 57');
test(clearStars("aaaaaaaaaaaaaaaaaaaaaab*aaaaaaaaaaaaaaaaaaaaaa"), aaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaa, 'Test 58');
test(clearStars("z*z*z*z*z*z*z*z*z*z"), z, 'Test 59');
test(clearStars("z*z*z*z*z*z*z*z*z*z*z*z*z*z*z*z"), z, 'Test 60');
test(clearStars("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz*"), aaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz, 'Test 61');
test(clearStars("zzzzzzzzzzz*zzzzzzzzzz*zzzzzzzzzz*"), zzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 62');
test(clearStars("*abcdefghijklmnopqrstuvwxyz*"), bcdefghijklmnopqrstuvwxyz, 'Test 63');
test(clearStars("mississippi*m*m*m*s*s*s*i*i*i*p*p*p"), ssssppssspp, 'Test 64');
test(clearStars("aabbccddeee***f***"), ddeeef, 'Test 65');
test(clearStars("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz*"), abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz, 'Test 66');
test(clearStars("b*a*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*"), , 'Test 67');
test(clearStars("le*etco*de***"), lto, 'Test 68');
test(clearStars("zyxzyxzyx***"), zyzyzy, 'Test 69');
test(clearStars("zyx*zyx*zyx*"), zyzyzy, 'Test 70');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

