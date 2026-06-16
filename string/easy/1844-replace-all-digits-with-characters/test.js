// Test: 1844. Replace All Digits With Characters
// 119 test cases from LeetCodeDataset
// Run: node test.js

const { replaceDigits } = require("./solution");

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

console.log("\n1844. Replace All Digits With Characters\n");

test(replaceDigits("x1y2z3a4b5c6d7e8f9g0"), xyy{z}aebgcidkemfogg, 'Test 1');
test(replaceDigits("x5y5z5"), x}y~z, 'Test 2');
test(replaceDigits("a9b8c7d6e5f4g3h2i1j0"), ajbjcjdjejfjgjhjijjj, 'Test 3');
test(replaceDigits("a9b9c9d9"), ajbkcldm, 'Test 4');
test(replaceDigits("z0y0x0w0"), zzyyxxww, 'Test 5');
test(replaceDigits("a0b0c0d0"), aabbccdd, 'Test 6');
test(replaceDigits("m9l8k7j6"), mvltkrjp, 'Test 7');
test(replaceDigits("z0y1x2w3"), zzyzxzwz, 'Test 8');
test(replaceDigits("z0y0x0w0v0"), zzyyxxwwvv, 'Test 9');
test(replaceDigits("a0b0c0d0e0f0g0h0i0j0"), aabbccddeeffgghhiijj, 'Test 10');
test(replaceDigits("a9b8c7d6e5f4g3h2i1"), ajbjcjdjejfjgjhjij, 'Test 11');
test(replaceDigits("t1s2r3q4p5o6n7m8l9k0"), tusuruqupuounumulukk, 'Test 12');
test(replaceDigits("s9r8q7p6o5n4m3l2k1j0"), s|rzqxpvotnrmplnkljj, 'Test 13');
test(replaceDigits("p2r4t6v8"), prrvtzv~, 'Test 14');
test(replaceDigits("m0n1o2p3"), mmnooqps, 'Test 15');
test(replaceDigits("q2w3e4r5"), qswzeirw, 'Test 16');
test(replaceDigits("t1t2t3t4"), tutvtwtx, 'Test 17');
test(replaceDigits("a1b2c3d4e"), abbdcfdhe, 'Test 18');
test(replaceDigits("p1q2r3s4t"), pqqsruswt, 'Test 19');
test(replaceDigits("a1c1e1"), abcdef, 'Test 20');
test(replaceDigits("z0y2x3w4v"), zzy{x{w{v, 'Test 21');
test(replaceDigits("q9r8s7t6u5"), qzrzsztzuz, 'Test 22');
test(replaceDigits("x2y3z4"), xzy|z~, 'Test 23');
test(replaceDigits("q9r8s7t6"), qzrzsztz, 'Test 24');
test(replaceDigits("s0t1u2v3w4x5y6z7"), sstuuwvyw{x}yz, 'Test 25');
test(replaceDigits("m9l8k7j6i5h4g3f2e1d0"), mvltkrjpinhlgjfhefdd, 'Test 26');
test(replaceDigits("s9s8s7s6"), s|s{szsy, 'Test 27');
test(replaceDigits("p2o3n4m5l6"), prornrmrlr, 'Test 28');
test(replaceDigits("t2r3e4w5q6p7o8i9u0y1t2r3e4w"), tvrueiw|qwpwowiruuyztvrueiw, 'Test 29');
test(replaceDigits("m4n3o2p1q0r9s8t7u6v5w4x3y2z1"), mqnqoqpqqqr{s{t{u{v{w{x{y{z{, 'Test 30');
test(replaceDigits("z1y2x3w4v5u6t7s8r9q0p1o2n3m4l5k6j7i8h9g0f1e2d3c4b5a6"), z{y{x{w{v{u{t{s{r{qqpqoqnqmqlqkqjqiqhqggfgegdgcgbgag, 'Test 31');
test(replaceDigits("n9m8l7k6j5i4h3g2f1e0d9c8b7a6z5y4x3w2v1u0t9s8r7q6p5"), nwmulskqjoimhkgifgeedmckbiagzy}x{wyvwuut}s{ryqwpu, 'Test 32');
test(replaceDigits("z9y8x7w6v5u4t3s2r1q0p0o0n0m0l0k0j0i0h0g0f0e0d0c0b0a0"), zyxw}v{uytwsursqqppoonnmmllkkjjiihhggffeeddccbbaa, 'Test 33');
test(replaceDigits("z8y6x4w2v0u8t6s4r2q0p8o6n4m2l0k8j6i4h2g0f8e6d4c2b0a8"), zyx|wyvvu}tzswrtqqpxounrmollksjpimhjggfnekdhcebbai, 'Test 34');
test(replaceDigits("b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5"), bccedgeifkgmhoiqjskklmmonqospuqwrys{t}uuvwwyx{y}z, 'Test 35');
test(replaceDigits("m3n5o7p9q1r3s5t7u9v1w3x5y7z9a1b3c5d7e9f1g3h5i7j9"), mpnsovpyqrrusxt{u~vwwzx}yzabbechdkenfggjhmipjs, 'Test 36');
test(replaceDigits("c3d2e1f0g9h8i7j6k5l4m3n2o1p0q9r8"), cfdfefffgphpipjpkplpmpnpopppqzrz, 'Test 37');
test(replaceDigits("d3c2b1a0z9y8x7w6v5u4t3s2r1q0p9o8n7m6l5k4j3i2h1g0f9"), dgcebcaazyxw}v{uytwsursqqpyownumslqkojmikhiggfo, 'Test 38');
test(replaceDigits("a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7"), acbecgdiekfmgohqiijkkmlomqnsoupwqyr{sstuuwvyw{x}yz, 'Test 39');
test(replaceDigits("d3f5h7j9l1n3p5r7t9v1x3z5b7d9f1h3j5l7n9p1r3t5v7x9"), dgfkhojslmnqpuryt}vwx{zbidmfghkjolsnwpqrutyv}x, 'Test 40');
test(replaceDigits("z9y8x7w6v5u4t3s2r1q0p9o8n7m6l5k4j3i2h1g0f9e8d7c6b5a4"), zyxw}v{uytwsursqqpyownumslqkojmikhiggfoemdkcibgae, 'Test 41');
test(replaceDigits("z1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4"), z{acbecgdiekfmgohqiijkkmlomqnsoupwqyr{sstuuwvyw{, 'Test 42');
test(replaceDigits("v1u2t3s4r5q6p7o8n9m0l1k2j3i4h5g6f7e8d9c0b1a2z3y4x5"), vwuwtwswrwqwpwownwmmlmkmjmimhmgmfmemdmccbcacz}y}x}, 'Test 43');
test(replaceDigits("b2c4d6e8f0g2h4i6j8k0l2m4n6o8p0q2r4s6t8u0v2w4x6y8z0a2"), bdcgdjemffgihliojrkklnmqntowppqsrvsyt|uuvxw{x~yzzac, 'Test 44');
test(replaceDigits("a9z8y7x6w5v4u3t2s1r0"), ajzyx~w|vzuxtvstrr, 'Test 45');
test(replaceDigits("n7m6l5k4j3i2h1g0f5e4d3"), numslqkojmikhiggfkeidg, 'Test 46');
test(replaceDigits("a23b45c67d89e01f23g45h67i89j01k23l45m67n89o01p23q45r67s89t01u23v45w67x89y01z23"), Error: invalid literal for int[] with base 10: 'b', 'Test 47');
test(replaceDigits("a1b1c1d1e1f1g1h1i1j1k1l1m1n1o1p1q1r1s1t1u1v1w1x1y1z1"), abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz{, 'Test 48');
test(replaceDigits("b5c6d7e8f9g0h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8z9"), bgcidkemfogghiikjmkolqmsnuowpyqqrssutwuyv{w}xyz, 'Test 49');
test(replaceDigits("q0r2s4t6u8v0w2x4y6z8"), qqrtswtzu}vvwyx|yz, 'Test 50');
test(replaceDigits("s5r4q3p2o1n0m9l8k7j6i5h4g3f2e1d0c9b8a7z6y5x4w3v2u1t0s9"), sxrvqtpropnnmvltkrjpinhlgjfhefddclbjahzy~x|wzvxuvtts|, 'Test 51');
test(replaceDigits("x2y3z2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8a9"), xzy|z|adbfchdjelfngphhijjlknlpmrntovpxqzrrsttvuxvzw|x~yzaj, 'Test 52');
test(replaceDigits("s1t2u3v4w5x6y7z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6"), sttvuxvzw|x~yzajbbcddfehfjglhnipjrktllmnnporptqvrx, 'Test 53');
test(replaceDigits("t4r2q0p8o6n4m2l0k8j6i4h2g0f8e6d4c2b0a8y6x4w2v0u8t6s4"), txrtqqpxounrmollksjpimhjggfnekdhcebbaiyx|wyvvu}tzsw, 'Test 54');
test(replaceDigits("a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0"), acbecgdiekfmgohqiijkkmlomqnsoupwqyr{ss, 'Test 55');
test(replaceDigits("a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9"), abbdcfdhejflgnhpirjjkllnmpnrotpvqxrzs|ttuvvxwzx|y~zahbjcl, 'Test 56');
test(replaceDigits("x2y4z6a8b0c2d4e6f8g0h2i4j6k8l0m2n4o6p8q0r2s4t6u8v0"), xzy}zaibbcedhekfngghjimjpksllmonroupxqqrtswtzu}vv, 'Test 57');
test(replaceDigits("t4s3r2q1p0o9n8m7l6k5j4i3h2g1f0"), txsvrtqrppoxnvmtlrkpjnilhjghff, 'Test 58');
test(replaceDigits("a2c4e6g8i0k2m4o6q8s0u2w4y6b8d0f2h4j6l8n0p2r4t6v8x0"), accgekgoiikmmqouqyssuww{ybjddfhhljpltnnprrvtzv~xx, 'Test 59');
test(replaceDigits("m1n2o3p4q5r6s7t8u9v0w1x2y3z4"), mnnporptqvrxszt|u~vvwxxzy|z~, 'Test 60');
test(replaceDigits("m7l6k5j4i3h2g1f0e9d8c7b6a5"), mtlrkpjnilhjghffendlcjbhaf, 'Test 61');
test(replaceDigits("a1b2c3d4e5f6g7h8i9j8i7h6g5f4e3d2c1b0a9"), abbdcfdhejflgnhpirjriphnglfjehdfcdbbaj, 'Test 62');
test(replaceDigits("z9y8x7w6v5u4t3s2r1q0"), zyxw}v{uytwsursqq, 'Test 63');
test(replaceDigits("y7x6w5v4u3t2s1r0q9p8o7n6m5l4k3j2i1h0g9f8e7d6c5b4a3z2y1x0w9v8u7t6s5r4q3p2o1n0"), yx~w|vzuxtvstrrqzpxovntmrlpknjlijhhgpfneldjchbfadz|yzxxwv~u|tzsxrvqtpropnn, 'Test 64');
test(replaceDigits("z2y4x6w8v0u2t4s6r8q0p2o4n6m8l0k2j4i6h8g0f2e4d6c8b0"), z|y}x~wvvuwtxsyrzqqprosntmullkmjniohpggfheidjckbb, 'Test 65');
test(replaceDigits("a2b4c6d8e0f1g3h5i7j9"), acbfcidleefggjhmipjs, 'Test 66');
test(replaceDigits("b2d3f4h5j6l7n8p9r0t1v2x3z4"), bddgfjhmjplsnvpyrrtuvxx{z~, 'Test 67');
test(replaceDigits("q2r3s4t5u6v7w8x9y0z1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7"), qsruswtyu{v}wxyyz{acbecgdiekfmgohqiijkkmlomqnsoupw, 'Test 68');
test(replaceDigits("x9y8z7a6b5c4d3e2f1g0h9i8j7k6l5m4n3o2p1q0r9s8t7u6"), xyzagbgcgdgegfggghqiqjqkqlqmqnqoqpqqqr{s{t{u{, 'Test 69');
test(replaceDigits("t2h4n6m8g0p2r4l6t8s0q2e4v6s8g0t2l4m6b8c0t2r4l6n8m0"), tvhlntmuggprrvlrt|ssqseiv|s{ggtvlpmsbjcctvrvlrnvmm, 'Test 70');
test(replaceDigits("x2y3z4a5b6c7d8e9f0g1h2i3j4"), xzy|z~afbhcjdlenffghhjiljn, 'Test 71');
test(replaceDigits("a9b8c7d6e5f4g3h2i1j0k9l8m7n6"), ajbjcjdjejfjgjhjijjjktltmtnt, 'Test 72');
test(replaceDigits("n5n4n3n2n1n0n9n8n7n6"), nsnrnqnpnonnnwnvnunt, 'Test 73');
test(replaceDigits("d7c6b5a4z3y2x1w0v9u8t7s6r5q4p3o2n1"), dkcibgaez}y{xywwvu}t{syrwqupsoqno, 'Test 74');
test(replaceDigits("q7r5s3t1u9v7w5x3y1z9a7b5c3d1e9f7g5h3i1j9k7l5m3n1o9p7"), qxrwsvtuu~v}w|x{yzzahbgcfdeenfmglhkijjskrlqmpnooxpw, 'Test 75');
test(replaceDigits("x2y4z6a8b0c2d4e6f8g0h2i4j6k8l0m2n4o6p8q0r2s4t6u8v0w2y4z6"), xzy}zaibbcedhekfngghjimjpksllmonroupxqqrtswtzu}vvwyy}z, 'Test 76');
test(replaceDigits("n5m4l3k2j1i0h9g8f7e6d5c4b3a2z1y0x9w8v7u6t5s4r3q2p1o0"), nsmqlokmjkiihqgofmekdicgbeacz{yyxwv}u{tyswruqspqoo, 'Test 77');
test(replaceDigits("a1b1c1d1e1f1g1h1i1j1"), abbccddeeffgghhiijjk, 'Test 78');
test(replaceDigits("z9y8x7w6v5u4t3s2r1q0p"), zyxw}v{uytwsursqqp, 'Test 79');
test(replaceDigits("a1z2y3x4w5v6u7t8s9r0q1p2o3n4m5l6k7j8i9h0g1f2e3d4c5b6a7"), abz|y|x|w|v|u|t|s|rrqrprornrmrlrkrjrirhhghfhehdhchbhah, 'Test 80');
test(replaceDigits("n9m8l7k6j5i4h3g2f1e0d9c8b7a6n9m8l7k6j5i4h3g2f1e0"), nwmulskqjoimhkgifgeedmckbiagnwmulskqjoimhkgifgee, 'Test 81');
test(replaceDigits("a1b2c3d4e5f6g7h8i9j0a1b2c3d4e5f6g7h8i9j0a1b2c3d4"), abbdcfdhejflgnhpirjjabbdcfdhejflgnhpirjjabbdcfdh, 'Test 82');
test(replaceDigits("b5c3d7e2f4g6h1i5j3k7l2m4n6o1p5q3r7s2t4u6v1w5x3y7z2"), bgcfdkegfjgmhiinjmkrlnmqntoppuqtrysutxu{vww|x{yz|, 'Test 83');
test(replaceDigits("abcdefghijklmnopqrstuv1234567890"), Error: invalid literal for int[] with base 10: 'b', 'Test 84');
test(replaceDigits("x23x23x23x23x23x23x23x23x23x23x23x23x23x23x23x23x23x23x23x23x23"), Error: invalid literal for int[] with base 10: 'x', 'Test 85');
test(replaceDigits("l8k7j6i5h4g3f2e1d0c9b8a7z6y5x4w3v2u1t0s9r8q7p6o5n4m3l2"), ltkrjpinhlgjfhefddclbjahzy~x|wzvxuvtts|rzqxpvotnrmpln, 'Test 86');
test(replaceDigits("z1y2x3w4v5u6t7s8r9q0p1o2n3m4"), z{y{x{w{v{u{t{s{r{qqpqoqnqmq, 'Test 87');
test(replaceDigits("t2r3q4p5o6n7m8l9k0j1i2h3g4f5e6d7c8b9a0"), tvruqupuounumulukkjkikhkgkfkekdkckbkaa, 'Test 88');
test(replaceDigits("t8r7e6w5q4u3i2o1p0l9k8j7h6g5f4d3c2b1a0"), t|ryekw|quuxikopppluksjqhnglfjdgcebcaa, 'Test 89');
test(replaceDigits("a1c2e3g4i5k6m7o8q9s0u1w2y3"), abceehgkinkqmtowqzssuvwyy|, 'Test 90');
test(replaceDigits("q9r8s7t6u5v4w3x2y1z0a9b8c7d6e5f4g3h2i1j0k9l8m7n6o5p4"), qzrzsztzuzvzwzxzyzzzajbjcjdjejfjgjhjijjjktltmtntotpt, 'Test 91');
test(replaceDigits("t0u2v4w6x8y0z2a4b6c8d0e2f4g6h8i0j2k4l6m8n0o2p4q6r8s0t2u4v6w8x0y2z4"), ttuwvzw}xyyz|aebhckddegfjgmhpiijlkolrmunnoqptqwrzsstvuyv|wxxy{z~, 'Test 92');
test(replaceDigits("q2r3s4t5u6v7w8x9y0z1"), qsruswtyu{v}wxyyz{, 'Test 93');
test(replaceDigits("s1t2u3v4w5x6y7z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5"), sttvuxvzw|x~yzajbbcddfehfjglhnipjrktllmnnporptqv, 'Test 94');
test(replaceDigits("b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6"), bccedgeifkgmhoiqjskklmmonqospuqw, 'Test 95');
test(replaceDigits("a9b8c7d6e5f4g3h2i1j0k9l8"), ajbjcjdjejfjgjhjijjjktlt, 'Test 96');
test(replaceDigits("v9w8x7y6z5a4b3c2d1e0f9g8h7"), vwxyzaebecedeeefogoho, 'Test 97');
test(replaceDigits("b5c7d9e2f0g1h3i5j7k9l1m3n5o7p9q1r3s5t7u9"), bgcjdmegffghhkinjqktlmmpnsovpyqrrusxt{u~, 'Test 98');
test(replaceDigits("x9y8z7a6b5c4d3e2f1g0h9i8j7k6l5m4n3o2p1q0r9"), xyzagbgcgdgegfggghqiqjqkqlqmqnqoqpqqqr{, 'Test 99');
test(replaceDigits("z0y0x0w0v0u0t0s0r0q0p0o0n0m0l0k0j0i0h0g0f0e0d0c0b0a0z0y0x0w0v0u0t0s0r0q0p0o0n0m0l0k0j0i0h0g0f0e0d0c0b0a0"), zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaazzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa, 'Test 100');
test(replaceDigits("a9z8y7x6w5v4u3t2s1r0q9p8o7n6m5l4k3j2i1h0g9f8e7d6c5b4a3"), ajzyx~w|vzuxtvstrrqzpxovntmrlpknjlijhhgpfneldjchbfad, 'Test 101');
test(replaceDigits("y0x1w2v3u4t5s6r7q8p9o0n1m2l3k4j5i6h7g8f9e0d1c2b3a4"), yyxywyvyuytysyryqypyoonomolokojoiohogofoeedecebeae, 'Test 102');
test(replaceDigits("n5m4l3k2j1i0h9g8f7e6d5c4b3a2"), nsmqlokmjkiihqgofmekdicgbeac, 'Test 103');
test(replaceDigits("a2b4c6d8e0f2g4h6i8j0k2l4m6n8o0p2q4r6s8t0u2v4w6x8y0z2"), acbfcidleefhgkhniqjjkmlpmsnvooprqurxs{ttuwvzw}xyyz|, 'Test 104');
test(replaceDigits("a2b2c2d2e2f2g2h2i2j2k2l2m2n2o2p2q2r2s2t2u2v2w2x2y2z2"), acbdcedfegfhgihjikjlkmlnmonpoqprqsrtsutvuwvxwyxzy{z|, 'Test 105');
test(replaceDigits("a9b8c7d6e5f4g3h2i1j0k9l8m7n6o5p4q3r2s1t0u9v8w7x6y5z4"), ajbjcjdjejfjgjhjijjjktltmtntotptqtrtstttu~v~w~x~y~z~, 'Test 106');
test(replaceDigits("t1s2r3q4p5o6n7m8l9k0j1i2h3g4f5e6d7c8b9a0z1y2x3w4v5u"), tusuruqupuounumulukkjkikhkgkfkekdkckbkaaz{y{x{w{v{u, 'Test 107');
test(replaceDigits("z1y2x3w4v5u6t7s8r9q0p1o2n3"), z{y{x{w{v{u{t{s{r{qqpqoqnq, 'Test 108');
test(replaceDigits("y2x3w4v5u6t7s8r9q0p1o2n3m4l5k6j7i8h9g0f1e2d3c4b5a6"), y{x{w{v{u{t{s{r{qqpqoqnqmqlqkqjqiqhqggfgegdgcgbgag, 'Test 109');
test(replaceDigits("y3x5w7v9u1t3s5r7q9p1o3n5m7l9k1j3i5h7g9f1e3d5c7b9a1"), y|x}w~vuvtwsxryqzpqornsmtlukljminhogpfgehdicjbkab, 'Test 110');
test(replaceDigits("s9r8q7p6o5n4m3l2k1j0i9h8g7f6e5d4c3b2a1z0y9x8w7v6u5t4s3r2q1p0"), s|rzqxpvotnrmplnkljjirhpgnflejdhcfbdabzzyxw~v|uztxsvrtqrpp, 'Test 111');
test(replaceDigits("m8n7o6p5q4r3s2t1u0v9w8x7y6z5a4b3c2d1e0f9g8h7i6j5k4l3m2"), munuoupuqurusutuuuvwxyzaebecedeeefogohoiojokolomo, 'Test 112');
test(replaceDigits("abcdef1234567890"), Error: invalid literal for int[] with base 10: 'b', 'Test 113');
test(replaceDigits("q2w3e4r5t6y7u8i9o0p1a2s3d4f5g6h7j8k9l0"), qswzeirwtzyu}iroopqacsvdhfkgmhojrktll, 'Test 114');
test(replaceDigits("b5c6d7e8f9g0h1i2j3k4l5"), bgcidkemfogghiikjmkolq, 'Test 115');
test(replaceDigits("m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4i5j6k7l8"), mpnrotpvqxrzs|ttuvvxwzx|y~zahbjclddeffhgjhlinjpkrlt, 'Test 116');
test(replaceDigits("q1w2e3r4t5y6u7i8o9p0a1s2d3f4g5"), qrwyehrvtyyu|iqoxppabsudgfjgl, 'Test 117');
test(replaceDigits("q2w3e4r5t6y7u8i9o0p1a2s3d4f5g6h7j8k9l0z1x2c3v4b5n6m7"), qswzeirwtzyu}iroopqacsvdhfkgmhojrktllz{xzcfvzbgntmt, 'Test 118');
test(replaceDigits("n4m3l2k1j0i9h8g7f6e5d4c3b2a1z0y9x8w7v6u5t4s3r2q1p0"), nrmplnkljjirhpgnflejdhcfbdabzzyxw~v|uztxsvrtqrpp, 'Test 119');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

