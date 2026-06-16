// Test: 917. Reverse Only Letters
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { reverseOnlyLetters } = require("./solution");

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

console.log("\n917. Reverse Only Letters\n");

test(reverseOnlyLetters("s-123-p"), p-123-s, 'Test 1');
test(reverseOnlyLetters("Test1ng-, code-Q!"), Qedo1ct-eeLg=ntse-T!, 'Test 2');
test(reverseOnlyLetters("-a-b-"), -b-a-, 'Test 3');
test(reverseOnlyLetters("a-bC-dEf-ghIj"), j-Ih-gfE-dCba, 'Test 4');
test(reverseOnlyLetters("A-b-C-d-E"), E-d-C-b-A, 'Test 5');
test(reverseOnlyLetters("12345"), 12345, 'Test 6');
test(reverseOnlyLetters("!@#$%^&*[]"), !@#$%^&*[], 'Test 7');
test(reverseOnlyLetters("ab-cd"), dc-ba, 'Test 8');
test(reverseOnlyLetters("abcdefg"), gfedcba, 'Test 9');
test(reverseOnlyLetters("!@#$%^&*[]_+-=[]{}|\\:;'<>,.?/1234567890"), !@#$%^&*[]_+-=[]{}|\:;'<>,.?/1234567890, 'Test 10');
test(reverseOnlyLetters("P@y-P@l"), l@P-y@P, 'Test 11');
test(reverseOnlyLetters("UPPERlower123"), rewolREPPU123, 'Test 12');
test(reverseOnlyLetters("a-bC-dEf-ghIj-kLmNoP-qRsTuV-wXyZ"), Z-yX-wVu-TsRq-PoNmLk-jIhgfE-dCba, 'Test 13');
test(reverseOnlyLetters("!a-bC-dEf-ghIj!"), !j-Ih-gfE-dCba!, 'Test 14');
test(reverseOnlyLetters("a-zA-Z0-9"), Z-Az-a0-9, 'Test 15');
test(reverseOnlyLetters("No lemon, no melon"), no lemon, no meloN, 'Test 16');
test(reverseOnlyLetters("Z-y-x-W-v-U-t-S-r-Q-p-O-n-M-l-K-j-I-h-G-f-E-d-C-b-A"), A-b-C-d-E-f-G-h-I-j-K-l-M-n-O-p-Q-r-S-t-U-v-W-x-y-Z, 'Test 17');
test(reverseOnlyLetters("M-r-2-0-D-1-E-3-N-o-5-r-7-L-8-e-9-t-0-s-1-w-2-e-3-r-4-q-5-u-6-i-7-o-8-n-9-D-0"), D-n-2-0-o-1-i-3-u-q-5-r-7-e-8-w-9-s-0-t-1-e-2-L-3-r-4-o-5-N-6-E-7-D-8-r-9-M-0, 'Test 18');
test(reverseOnlyLetters("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba, 'Test 19');
test(reverseOnlyLetters("Reverse!This@String#With$Non%Letters^In&It*"), tInIsre!tteL@noNhti#Wgni$rtS%sihTesr^ev&eR*, 'Test 20');
test(reverseOnlyLetters("a!b@c#d$e%f^g&h*i[j]k-l+m,n/o\p;q:r<s>t?u.v[w]x{y}z|"), z!y@x#w$v%u^t&s*r[q]p-o+n,m/l\k;j:i<h>g?f.e[d]c{b}a|, 'Test 21');
test(reverseOnlyLetters("Hello, World!"), dlroW, olleH!, 'Test 22');
test(reverseOnlyLetters("!@#$%^&*[]_+-=<>?":{}|[];',./1234567890"), Error: Solution.reverseOnlyLetters[] missing 1 required positional argument: 's', 'Test 23');
test(reverseOnlyLetters("1234567890qwertyuiopasdfghjklzxcvbnm-=-+=!@#$%^&*[]"), 1234567890mnbvcxzlkjhgfdsapoiuytrewq-=-+=!@#$%^&*[], 'Test 24');
test(reverseOnlyLetters("Python3.9"), nohtyP3.9, 'Test 25');
test(reverseOnlyLetters("aAaAaAaAaA"), AaAaAaAaAa, 'Test 26');
test(reverseOnlyLetters("a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z"), z-y-x-w-v-u-t-s-r-q-p-o-n-m-l-k-j-i-h-g-f-e-d-c-b-a, 'Test 27');
test(reverseOnlyLetters("#a@C""), Error: Solution.reverseOnlyLetters[] missing 1 required positional argument: 's', 'Test 28');
test(reverseOnlyLetters("A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z"), Z-Y-X-W-V-U-T-S-R-Q-P-O-N-M-L-K-J-I-H-G-F-E-D-C-B-A, 'Test 29');
test(reverseOnlyLetters("!@#$%^&*[]_+{}|:"<>?"), Error: Solution.reverseOnlyLetters[] missing 1 required positional argument: 's', 'Test 30');
test(reverseOnlyLetters("Ae-IoU-aeiou-1-2-3-4-5-6-7-8-9-0"), uo-iea-UoIeA-1-2-3-4-5-6-7-8-9-0, 'Test 31');
test(reverseOnlyLetters("P3r#G4m!n@G"), G3n#m4G!r@P, 'Test 32');
test(reverseOnlyLetters("--aZ--"), --Za--, 'Test 33');
test(reverseOnlyLetters("abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ"), ZYXWVUTSRQPONMLKJIHGFEDCBA-zyxwvutsrqponmlkjihgfedcba, 'Test 34');
test(reverseOnlyLetters("A man, a plan, a canal: Panama"), a man, a Plan, a canal: panamA, 'Test 35');
test(reverseOnlyLetters("Z-y-x-W-v-U-t-S-r-Q-p-O-n-M-l-K-j-I-h-G-f-E-d-C-b-A-1-2-3"), A-b-C-d-E-f-G-h-I-j-K-l-M-n-O-p-Q-r-S-t-U-v-W-x-y-Z-1-2-3, 'Test 36');
test(reverseOnlyLetters("No'Matter'How'Hard'You'Try"), yr'TuoYdr'aHw'oHre'tta'MoN, 'Test 37');
test(reverseOnlyLetters("aA-bB-cC-dD-eE-fF-gG-hH-iI-jJ-kK-lL-mM-nN-oO-pP-qQ-rR-sS-tT-uU-vV-wW-xX-yY-zZ"), Zz-Yy-Xx-Ww-Vv-Uu-Tt-Ss-Rr-Qq-Pp-Oo-Nn-Mm-Ll-Kk-Jj-Ii-Hh-Gg-Ff-Ee-Dd-Cc-Bb-Aa, 'Test 38');
test(reverseOnlyLetters("aBcDeFgHiJkLmNoPqRsTuVwXyZ"), ZyXwVuTsRqPoNmLkJiHgFeDcBa, 'Test 39');
test(reverseOnlyLetters("a-bC-dEf-ghIj-kLmNoP"), P-oN-mLk-jIhg-fEdCba, 'Test 40');
test(reverseOnlyLetters("7_28hT!@#%$q9"), 7_28qT!@#%$h9, 'Test 41');
test(reverseOnlyLetters("---abcXYZ---"), ---ZYXcba---, 'Test 42');
test(reverseOnlyLetters("H2O-is-a-good-solvent"), t2n-ev-l-osdo-ogasiOH, 'Test 43');
test(reverseOnlyLetters("123-abc-456-def-789"), 123-fed-456-cba-789, 'Test 44');
test(reverseOnlyLetters("Hello-World!!!"), dlroW-olleH!!!, 'Test 45');
test(reverseOnlyLetters("N0-Sc3n4r10-1-f0r-R3v3rs1ng"), g0-ns3r4v10-1-R0r-f3r3nc1SN, 'Test 46');
test(reverseOnlyLetters("1234567890qwertyuiopasdfghjklzxcvbnm"), 1234567890mnbvcxzlkjhgfdsapoiuytrewq, 'Test 47');
test(reverseOnlyLetters("A1B!C2@D3#E4$F5%G6^H7&I8*J9[L0]"), L1J!I2@H3#G4$F5%E6^D7&C8*B9[A0], 'Test 48');
test(reverseOnlyLetters("mIxEd-CaSe-123-!@#"), eSaCd-ExIm-123-!@#, 'Test 49');
test(reverseOnlyLetters("12345!@#$%"), 12345!@#$%, 'Test 50');
test(reverseOnlyLetters("a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z!@#$%^&*[]"), z-y-x-w-v-u-t-s-r-q-p-o-n-m-l-k-j-i-h-g-f-e-d-c-b-a!@#$%^&*[], 'Test 51');
test(reverseOnlyLetters("a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z-0-9-8-7-6-5-4-3-2-1"), z-y-x-w-v-u-t-s-r-q-p-o-n-m-l-k-j-i-h-g-f-e-d-c-b-a-0-9-8-7-6-5-4-3-2-1, 'Test 52');
test(reverseOnlyLetters("--a--b--"), --b--a--, 'Test 53');
test(reverseOnlyLetters("rE9-!vA5#xY2$"), Yx9-!Av5#Er2$, 'Test 54');
test(reverseOnlyLetters("7_8A-9B-10C-11D"), 7_8D-9C-10B-11A, 'Test 55');
test(reverseOnlyLetters("NoLettersHere123"), ereHsretteLoN123, 'Test 56');
test(reverseOnlyLetters("a1B2C3D4E5F6G7H8I9J0"), J1I2H3G4F5E6D7C8B9a0, 'Test 57');
test(reverseOnlyLetters("T1h2i3s4I5s6t7h8e9F1i2n3a4l5T6e7s8t9C0a5s6e7"), e1s2a3C4t5s6e7T8l9a1n2i3F4e5h6t7s8I9s0i5h6T7, 'Test 58');
test(reverseOnlyLetters("P@y-2-P@l-1-O!n-0-G!a-5-p%e+L-4-5-h%6-."), h@L-2-e@p-1-a!G-0-n!O-5-l%P+y-4-5-P%6-., 'Test 59');
test(reverseOnlyLetters("!@#$%^&*[]_+{}|:"<>?`~-=[];',./'), Error: Solution.reverseOnlyLetters[] missing 1 required positional argument: 's', 'Test 60');
test(reverseOnlyLetters("z-a-y-b-x-c-w-d-v-e-u-t-s-r-q-p-o-n-m-l-k-j-i-h-g-f-e-d-c-b-a"), a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-e-v-d-w-c-x-b-y-a-z, 'Test 61');
test(reverseOnlyLetters("a!b@c#d$e%f^g&h*i[j]k_l+m-n+o*p,q-r.s/t\u:v;, 'x[y]z"), Error: Solution.reverseOnlyLetters[] missing 1 required positional argument: 's', 'Test 62');
test(reverseOnlyLetters("M-2y-3r-4o-5p"), p-2o-3r-4y-5M, 'Test 63');
test(reverseOnlyLetters("M-i-c-r-o-s-o-f-t-2-0-2-3"), t-f-o-s-o-r-c-i-M-2-0-2-3, 'Test 64');
test(reverseOnlyLetters("A1B2C3D4E5"), E1D2C3B4A5, 'Test 65');
test(reverseOnlyLetters("p-yt_h-nm_g-f_d-c_b-a"), a-bc_d-fg_m-n_h-t_y-p, 'Test 66');
test(reverseOnlyLetters("a1B2C3d4E5f6G7H8"), H1G2f3E4d5C6B7a8, 'Test 67');
test(reverseOnlyLetters("123abc-456def-789ghi"), 123ihg-456fed-789cba, 'Test 68');
test(reverseOnlyLetters("x-89y-76z-54w-32v-10u"), u-89v-76w-54z-32y-10x, 'Test 69');
test(reverseOnlyLetters("a-bC-dEf-ghIj-kLmNoP-qRstUv-wXyz"), z-yX-wvU-tsRq-PoNmLk-jIhgfE-dCba, 'Test 70');
test(reverseOnlyLetters("12345-abc-67890"), 12345-cba-67890, 'Test 71');
test(reverseOnlyLetters("!@#$%^&*[]_+"), !@#$%^&*[]_+, 'Test 72');
test(reverseOnlyLetters("Z-y-x-w-v-u-t-s-r-q-p-o-n-m-l-k-j-i-h-g-f-e-d-c-b-a-Z"), Z-a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-Z, 'Test 73');
test(reverseOnlyLetters("a1B2c3D4e5F6g7h8i9j0"), j1i2h3g4F5e6D7c8B9a0, 'Test 74');
test(reverseOnlyLetters("12345-abc!def@gh#ij$kl%mn^op&q*r[s]t+u-v+w,x-y.z/"), 12345-zyx!wvu@ts#rq$po%nm^lk&j*i[h]g+f-e+d,c-b.a/, 'Test 75');
test(reverseOnlyLetters("Zebra-123-Quokka"), akkou-123-QarbeZ, 'Test 76');
test(reverseOnlyLetters("-a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z-"), -z-y-x-w-v-u-t-s-r-q-p-o-n-m-l-k-j-i-h-g-f-e-d-c-b-a-, 'Test 77');
test(reverseOnlyLetters("NoChangeHere"), ereHegnahCoN, 'Test 78');
test(reverseOnlyLetters("1234567890"), 1234567890, 'Test 79');
test(reverseOnlyLetters("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), zZyYxXwWvVuUtTsSrRqQpPoOnNmMlLkKjJiIhHgGfFeEdDcCbBaA, 'Test 80');
test(reverseOnlyLetters("--hello-+++world---"), --dlrow-+++olleh---, 'Test 81');
test(reverseOnlyLetters("M4ng0_Le3t!"), t4eL0_gn3M!, 'Test 82');
test(reverseOnlyLetters("The quick brown fox jumps over the lazy dog. 123"), god yzale htrev osp mujxo fnwo rbk ciuq ehT. 123, 'Test 83');
test(reverseOnlyLetters("Z-a-Y-b-X-c-W-d-V-e-U-f-T-g-S-h-R-i-Q-j-P-k-L-m-N-o-M-l-K-j-I-h-G-f-E-d-C-b-A"), A-b-C-d-E-f-G-h-I-j-K-l-M-o-N-m-L-k-P-j-Q-i-R-h-S-g-T-f-U-e-V-d-W-c-X-b-Y-a-Z, 'Test 84');
test(reverseOnlyLetters("12345abc!@#def$%^ghi&*[]"), 12345ihg!@#fed$%^cba&*[], 'Test 85');
test(reverseOnlyLetters("a-bC-dEf-ghIj-klMnOp-QrStUv-WxYz"), z-Yx-WvU-tSrQ-pOnMlk-jIhgfE-dCba, 'Test 86');
test(reverseOnlyLetters("a!b@c#d$e%f^g&h*i[j]k_l+m-n+o*p*q*r-s*t*u*v*w*x*y*z"), z!y@x#w$v%u^t&s*r[q]p_o+n-m+l*k*j*i-h*g*f*e*d*c*b*a, 'Test 87');
test(reverseOnlyLetters("---"), ---, 'Test 88');
test(reverseOnlyLetters("sToP-If-YoU-CaN"), NaCU-oY-fIP-oTs, 'Test 89');
test(reverseOnlyLetters("Test1ng-, code-Q!!@#"), Qedo1ct-eeLg=ntse-T!!@#, 'Test 90');
test(reverseOnlyLetters("123-abc-456-def"), 123-fed-456-cba, 'Test 91');
test(reverseOnlyLetters("H-e-l-l-o-,-W-o-r-l-d-!"), d-l-r-o-W-,-o-l-l-e-H-!, 'Test 92');
test(reverseOnlyLetters("!@#$%^&*[]_+-=[]{}|;':,.<>?"), !@#$%^&*[]_+-=[]{}|;':,.<>?, 'Test 93');
test(reverseOnlyLetters("a-bC-dEf-ghIj-kLmNoP-qRsTuVwXyZ"), Z-yX-wVu-TsRq-PoNmLk-jIhgfEdCba, 'Test 94');
test(reverseOnlyLetters("A-man,a-plan,a-canal-Panama!"), a-man,a-Plan,a-canal-panamA!, 'Test 95');
test(reverseOnlyLetters("123--abcXYZ!"), 123--ZYXcba!, 'Test 96');
test(reverseOnlyLetters("Python3.8"), nohtyP3.8, 'Test 97');
test(reverseOnlyLetters("M-k-e-e-t-i-n-g-2-0-2-3"), g-n-i-t-e-e-k-M-2-0-2-3, 'Test 98');
test(reverseOnlyLetters("a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z-A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z"), Z-Y-X-W-V-U-T-S-R-Q-P-O-N-M-L-K-J-I-H-G-F-E-D-C-B-A-z-y-x-w-v-u-t-s-r-q-p-o-n-m-l-k-j-i-h-g-f-e-d-c-b-a, 'Test 99');
test(reverseOnlyLetters("a-zA-Z0-9!@#$%^&*[]_+=-"), Z-Az-a0-9!@#$%^&*[]_+=-, 'Test 100');
test(reverseOnlyLetters("A1B2C3D4E5F6G7H8I9J0"), J1I2H3G4F5E6D7C8B9A0, 'Test 101');
test(reverseOnlyLetters("Reverse-This-String-123"), gnirtSs-ihTe-sreveR-123, 'Test 102');
test(reverseOnlyLetters("M-I-L-O-N"), N-O-L-I-M, 'Test 103');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

