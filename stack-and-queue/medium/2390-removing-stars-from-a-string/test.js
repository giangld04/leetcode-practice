// Test: 2390. Removing Stars From A String
// 78 test cases from LeetCodeDataset
// Run: node test.js

const { removeStars } = require("./solution");

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

console.log("\n2390. Removing Stars From A String\n");

test(removeStars("abc*def*ghi*jkl*mno*pqr*stu*vwx*y*z"), abdeghjkmnpqstvwz, 'Test 1');
test(removeStars("leet**cod*e"), lecoe, 'Test 2');
test(removeStars("a*b*c*d*e*"), , 'Test 3');
test(removeStars("abcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyz, 'Test 4');
test(removeStars("***************************"), Error: pop from empty list, 'Test 5');
test(removeStars("ab*cd*ef*gh*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*"), aceg, 'Test 6');
test(removeStars("a*ab*abc*abcd*abcde*abcdef*abcdefg*abcdefgh*abcdefghi*abcdefghij*abcdefghijk*abcdefghijkl*abcdefghijklm*abcdefghijklmn*abcdefghijklmno*abcdefghijklmnop*abcdefghijklmnopq*abcdefghijklmnopqr*abcdefghijklmnopqrs*abcdefghijklmnopqrst*abcdefghijklmnopqrstu*abcdefghijklmnopqrstuv*abcdefghijklmnopqrstuvw*abcdefghijklmnopqrstuvwx*abcdefghijklmnopqrstuvwxy*abcdefghijklmnopqrstuvwxyza"), aababcabcdabcdeabcdefabcdefgabcdefghabcdefghiabcdefghijabcdefghijkabcdefghijklabcdefghijklmabcdefghijklmnabcdefghijklmnoabcdefghijklmnopabcdefghijklmnopqabcdefghijklmnopqrabcdefghijklmnopqrsabcdefghijklmnopqrstabcdefghijklmnopqrstuabcdefghijklmnopqrstuvabcdefghijklmnopqrstuvwabcdefghijklmnopqrstuvwxabcdefghijklmnopqrstuvwxyza, 'Test 7');
test(removeStars("*********"), Error: pop from empty list, 'Test 8');
test(removeStars("abcdef"), abcdef, 'Test 9');
test(removeStars("zyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihgfedcba, 'Test 10');
test(removeStars("*a*b*c*"), Error: pop from empty list, 'Test 11');
test(removeStars("a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a"), a, 'Test 12');
test(removeStars("ab*cd*ef*gh*ij*kl*mn*op*qr*st*uv*wx*yz"), acegikmoqsuwyz, 'Test 13');
test(removeStars("abcde"), abcde, 'Test 14');
test(removeStars("abc***"), , 'Test 15');
test(removeStars("ab*cd*ef*g*hi*j*"), aceh, 'Test 16');
test(removeStars("a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z"), z, 'Test 17');
test(removeStars("erase*****"), , 'Test 18');
test(removeStars("abcd**efgh**ijkl**mnop**qrst**uvw**x**y**z"), abefijmnqz, 'Test 19');
test(removeStars("abcdefghijklmnopqrstuvwxyz************************************"), Error: pop from empty list, 'Test 20');
test(removeStars("aaabbbcccddd***eee***fffgggggghhhhiiiiijkkkkkllllmmmmnnnnoooo***pppppqqqqrrrrsssss"), aaabbbcccfffgggggghhhhiiiiijkkkkkllllmmmmnnnnopppppqqqqrrrrsssss, 'Test 21');
test(removeStars("a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z**a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z**a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z"), Error: pop from empty list, 'Test 22');
test(removeStars("abcde**fghij**klmno**pqrst**uvwxy**z"), abcfghklmpqruvwz, 'Test 23');
test(removeStars("abcdefghijklmnopqrstuv*xyzwvutsrponmlkjihgfedcba*"), abcdefghijklmnopqrstuxyzwvutsrponmlkjihgfedcb, 'Test 24');
test(removeStars("******************"), Error: pop from empty list, 'Test 25');
test(removeStars("abcdefghijklmnopqrstuvwxyz*zyxwvutsrqponmlkjihgfedcba*"), abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcb, 'Test 26');
test(removeStars("a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z"), z, 'Test 27');
test(removeStars("aaaaaa*bbbbbb*cccccc*dddddd*eeeeee*ffffff*gggggg*hhhhhh*iiiiii*jjjjjj*kkkkkk*llllll*mmmmmm*nnnnnn*oooooo*pppppp*qqqqqq*rrrrrr*ssssss*tttttt*uuuuuu*vvvvvv*wwwwww*xxxxxx*yyyyyy*zzzzzz*"), aaaaabbbbbcccccdddddeeeeefffffggggghhhhhiiiiijjjjjkkkkklllllmmmmmnnnnnooooopppppqqqqqrrrrrssssstttttuuuuuvvvvvwwwwwxxxxxyyyyyzzzzz, 'Test 28');
test(removeStars("abcdefghij************************"), Error: pop from empty list, 'Test 29');
test(removeStars("abcde*fghij*klmno*pqrst*uvwxy*z*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z"), abcdfghiklmnpqrsuvwxz, 'Test 30');
test(removeStars("abc*def*ghi*jkl*mno*pqr*stu*vwx*yz*"), abdeghjkmnpqstvwy, 'Test 31');
test(removeStars("aaa*bbb*ccc*ddd*eee*fff*ggg*hhh*iii*jjj*kkk*lll*mmm*nnn*ooo*ppp*qqq*rrr*sss*ttt*uuu*vvv*www*xxx*yyy*zzz*"), aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz, 'Test 32');
test(removeStars("*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*"), Error: pop from empty list, 'Test 33');
test(removeStars("abcdefghijklmnopqrstuvwxyz*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z"), abcdefghijklmnopqrstuvwxyz, 'Test 34');
test(removeStars("abcde*fg*hi*jkl*mno*pqr*stu*vwx*y*z*"), abcdfhjkmnpqstvw, 'Test 35');
test(removeStars("aabbccddeeefffggg***hhiijjkkllmmnn***oo***ppqqrrssttttuuuuuuuuuuvvvvvvvvwxyz"), aabbccddeeefffhhiijjkkllppqqrrssttttuuuuuuuuuuvvvvvvvvwxyz, 'Test 36');
test(removeStars("a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*zyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihgfedcba, 'Test 37');
test(removeStars("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz*****"), aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwx, 'Test 38');
test(removeStars("z*yz*zyxw*vyxwv*u*vwxy*ts*rq*ponm*ln*kj*i*hg*fed*cb*a*"), yzyxvyxwvwxtrponlkhfec, 'Test 39');
test(removeStars("abc***def**ghij***klmno**pqrstuv***wxyz"), dgklmpqrswxyz, 'Test 40');
test(removeStars("a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z**"), Error: pop from empty list, 'Test 41');
test(removeStars("abcdefghij*klmnopqrst*uvwxyz*zyxwvutsr*qp*on*m*l*k*j*i*h*g*f*e*d*c*b*a"), abcdefghiklmnopqrsuvwxyzyxwvutsqoa, 'Test 42');
test(removeStars("**a**b**c**d**e**f**g**h**i**j**k**l**m**n**o**p**q**r**s**t**u**v**w**x**y**z"), Error: pop from empty list, 'Test 43');
test(removeStars("a*ab*abc*abcd*abcde*abcdef*abcdefg*abcdefgh*abcdefghi*abcdefghij*abcdefghijk*abcdefghijkl*abcdefghijklm*abcdefghijklmn*abcdefghijklmno*abcdefghijklmnop*abcdefghijklmnopq*abcdefghijklmnopqr*abcdefghijklmnopqrs*abcdefghijklmnopqrst*abcdefghijklmnopqrstu*abcdefghijklmnopqrstuv*abcdefghijklmnopqrstuvw*abcdefghijklmnopqrstuvwx*abcdefghijklmnopqrstuvwxy*abcdefghijklmnopqrstuvwxyz*"), aababcabcdabcdeabcdefabcdefgabcdefghabcdefghiabcdefghijabcdefghijkabcdefghijklabcdefghijklmabcdefghijklmnabcdefghijklmnoabcdefghijklmnopabcdefghijklmnopqabcdefghijklmnopqrabcdefghijklmnopqrsabcdefghijklmnopqrstabcdefghijklmnopqrstuabcdefghijklmnopqrstuvabcdefghijklmnopqrstuvwabcdefghijklmnopqrstuvwxabcdefghijklmnopqrstuvwxy, 'Test 44');
test(removeStars("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz****"), aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxx, 'Test 45');
test(removeStars("abcdefghijklmnopqrstuvwxy**z"), abcdefghijklmnopqrstuvwz, 'Test 46');
test(removeStars("xyz***xyz***xyz***xyz***xyz***xyz***xyz***xyz***xyz***xyz***xyz***xyz***xyz"), xyz, 'Test 47');
test(removeStars("abcde*****fghij*****klmno*****pqrst*****uvwxy*****z"), z, 'Test 48');
test(removeStars("abcdefghij***klmnopqrst***uvwxyz***abcd***efghij***klmno***pqrst***uvwxy***z"), abcdefgklmnopquvwaefgklpquvz, 'Test 49');
test(removeStars("abcdefghijk***lmnopqrstuvwxyz**aaaaaaaaaabbbbbbbbbbccccccccccddddeeeeee****"), abcdefghlmnopqrstuvwxaaaaaaaaaabbbbbbbbbbccccccccccddddee, 'Test 50');
test(removeStars("abcd*efgh*ijkl*mnop*qrst*uvw*x*y*z*"), abcefgijkmnoqrsuv, 'Test 51');
test(removeStars("nested*stars*****in*string*example***"), nesteistrinexam, 'Test 52');
test(removeStars("a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z"), z, 'Test 53');
test(removeStars("a*bb*ccc*dddd*eeeee*ffffff*gggggg*hhhhhhh*iiiiiiii*jjjjjjjjj*kkkkkkkkk*llllllllll*mmmmmmmmmm*nnnnnnnnnnn*ooooooooooo*pppppppppppp*qqqqqqqqqqqqq*rrrrrrrrrrrrrr*sssssssssssssss*ttttttttttttttttt*uuuuuuuuuuuuuuuuuu*vvvvvvvvvvvvvvvvvvv*wwwwwwwwwwwwwwwwwwww*xxyyz**"), bccdddeeeefffffggggghhhhhhiiiiiiijjjjjjjjkkkkkkkklllllllllmmmmmmmmmnnnnnnnnnnoooooooooopppppppppppqqqqqqqqqqqqrrrrrrrrrrrrrssssssssssssssttttttttttttttttuuuuuuuuuuuuuuuuuvvvvvvvvvvvvvvvvvvwwwwwwwwwwwwwwwwwwwxxy, 'Test 54');
test(removeStars("a**bc**def**ghij**klmno**pqrst**uvwxy**z"), Error: pop from empty list, 'Test 55');
test(removeStars("abcdefghijklmnopqrstuvwxyz*abcdefghijklmnopqrstuvwxyz*"), abcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxy, 'Test 56');
test(removeStars("*a**b*c**d*e*f**g*h**i*j**k*l**m*n**o**p*q**r**s**t**u**v**w**x**y**z"), Error: pop from empty list, 'Test 57');
test(removeStars("abcde*fg*hij*k*lmnop*qrs*tuvw*x*y*z*"), abcdfhilmnoqrtuv, 'Test 58');
test(removeStars("abcdefghi*jk*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z**"), abcdefgh, 'Test 59');
test(removeStars("x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x"), x, 'Test 60');
test(removeStars("aabbaa*bbcc*ddcc*eeff*ffgg*hhiijj*kkll*mmnn*oopp*qqrr*sttuu*vwwxxyyzz*****"), aabbabbcddceefffghhiijkklmmnoopqqrsttuvwwx, 'Test 61');
test(removeStars("abc**def**ghi**jkl**mno**pqr**stu**vwx**yz**"), adgjmpsv, 'Test 62');
test(removeStars("mississippi***ipp*ss*m*i**"), mississiip, 'Test 63');
test(removeStars("a*bc*def*ghij*klmno*pqrst*uvwxy*z"), bdeghiklmnpqrsuvwxz, 'Test 64');
test(removeStars("mnopqrstu*****vwxyz*****abcdefghi*****jklmno*****pqrst*****uvw*****xy*****z"), mnopz, 'Test 65');
test(removeStars("a**b**c**d**e**f**g**h**i**j**k**l**m**n**o**p**q**r**s**t**u**v**w**x**y**z"), Error: pop from empty list, 'Test 66');
test(removeStars("abcde*fgh*i*jklmno*pqrstu*v*wxyz*"), abcdfgjklmnpqrstwxy, 'Test 67');
test(removeStars("abc*def*ghi*jkl*mno*pqr*stu*vwx*y*z**"), abdeghjkmnpqstv, 'Test 68');
test(removeStars("a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*"), , 'Test 69');
test(removeStars("abcdefghijklmnopqrstuvwxy**z*"), abcdefghijklmnopqrstuvw, 'Test 70');
test(removeStars("xy*z*ab*cd*ef*gh*ij*kl*mn*op*qr*st*uv*wx*yz*"), xacegikmoqsuwy, 'Test 71');
test(removeStars("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz*"), aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyz, 'Test 72');
test(removeStars("python*is*awesome***so**is**java**"), pythoiawesja, 'Test 73');
test(removeStars("longstringwith*various*characters*and*stars*through*out***"), longstringwitvarioucharacteranstarthroug, 'Test 74');
test(removeStars("abcdefghijklmnopqrstuvwxyz*a**b**c**d**e**f**g**h**i**j**k**l**m**n**o**p**q**r**s**t**u**v**w**x**y**z"), z, 'Test 75');
test(removeStars("a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z"), z, 'Test 76');
test(removeStars("a*ab*abc*abcd*abcde*abcdef*abcdefg*abcdefgh*abcdefghi*abcdefghij*abcdefghijk"), aababcabcdabcdeabcdefabcdefgabcdefghabcdefghiabcdefghijk, 'Test 77');
test(removeStars("a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*abcdefghijklmnopqrstuvwxyz*zyxwvutsrqponmlkjihgfedcba*"), abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcb, 'Test 78');

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
