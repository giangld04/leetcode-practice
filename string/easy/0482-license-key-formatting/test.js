// Test: 482. License Key Formatting
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { licenseKeyFormatting } = require("./solution");

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

console.log("\n482. License Key Formatting\n");

test(licenseKeyFormatting("AB-CD-EF-GH-IJ", 2), AB-CD-EF-GH-IJ, 'Test 1');
test(licenseKeyFormatting("abcdefg-hijkl-mnopqr-stuv-wxyz", 5), A-BCDEF-GHIJK-LMNOP-QRSTU-VWXYZ, 'Test 2');
test(licenseKeyFormatting("", 1), , 'Test 3');
test(licenseKeyFormatting("", 10), , 'Test 4');
test(licenseKeyFormatting("1234567890", 3), 1-234-567-890, 'Test 5');
test(licenseKeyFormatting("2-4A0r7-4k", 3), 24-A0R-74K, 'Test 6');
test(licenseKeyFormatting("2-5g-3-J", 2), 2-5G-3J, 'Test 7');
test(licenseKeyFormatting("5F3Z-2e-9-w", 4), 5F3Z-2E9W, 'Test 8');
test(licenseKeyFormatting("----", 2), , 'Test 9');
test(licenseKeyFormatting("abcdefg", 2), A-BC-DE-FG, 'Test 10');
test(licenseKeyFormatting("a-a-a-a-", 1), A-A-A-A, 'Test 11');
test(licenseKeyFormatting("1-23-456", 2), 12-34-56, 'Test 12');
test(licenseKeyFormatting("ABCDEF-GHIJKL-MNOPQR-STUVWX-YZ", 1), A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z, 'Test 13');
test(licenseKeyFormatting("-1-2-3-4-5-6-7-8-9-0-A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z-", 6), 123456-7890AB-CDEFGH-IJKLMN-OPQRST-UVWXYZ, 'Test 14');
test(licenseKeyFormatting("0000-0000-0000-0000-0000-0000", 8), 00000000-00000000-00000000, 'Test 15');
test(licenseKeyFormatting("abcdefg-hijkl-mnopqr-stuv-wxyz-1234567890", 3), ABC-DEF-GHI-JKL-MNO-PQR-STU-VWX-YZ1-234-567-890, 'Test 16');
test(licenseKeyFormatting("a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z", 6), AB-CDEFGH-IJKLMN-OPQRST-UVWXYZ, 'Test 17');
test(licenseKeyFormatting("a-", 2), A, 'Test 18');
test(licenseKeyFormatting("1-2-3-4-5-6-7-8-9-0-A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z", 1), 1-2-3-4-5-6-7-8-9-0-A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z, 'Test 19');
test(licenseKeyFormatting("X1-Y2-Z3", 1), X-1-Y-2-Z-3, 'Test 20');
test(licenseKeyFormatting("123-4567-890-ABCD-EFGH-IJKL", 3), 1-234-567-890-ABC-DEF-GHI-JKL, 'Test 21');
test(licenseKeyFormatting("1-2-3-4-5-6-7-8-9-0-A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z", 10), 123456-7890ABCDEF-GHIJKLMNOP-QRSTUVWXYZ, 'Test 22');
test(licenseKeyFormatting("a-", 1), A, 'Test 23');
test(licenseKeyFormatting("-A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z-", 5), A-BCDEF-GHIJK-LMNOP-QRSTU-VWXYZ, 'Test 24');
test(licenseKeyFormatting("x-y-z", 10), XYZ, 'Test 25');
test(licenseKeyFormatting("123-456-789-0123-4567-8901", 4), 1-2345-6789-0123-4567-8901, 'Test 26');
test(licenseKeyFormatting("M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z", 6), MN-OPQRST-UVWXYZ, 'Test 27');
test(licenseKeyFormatting("1234567890", 1), 1-2-3-4-5-6-7-8-9-0, 'Test 28');
test(licenseKeyFormatting("xXxX-xXxX-xXxX-xXxX-xXxX-xXxX-xXxX-xXxX-xXxX", 5), X-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX, 'Test 29');
test(licenseKeyFormatting("aBcDeFgHiJkLmNoPqRsTuVwXyZ", 3), AB-CDE-FGH-IJK-LMN-OPQ-RST-UVW-XYZ, 'Test 30');
test(licenseKeyFormatting("----", 1), , 'Test 31');
test(licenseKeyFormatting("abcdefg-hijkl-mnopqr-stuv-wxyz-1234567890", 7), A-BCDEFGH-IJKLMNO-PQRSTUV-WXYZ123-4567890, 'Test 32');
test(licenseKeyFormatting("Z1-23X4-567-89A-BCD-EFG-HIJ-KLM-NOP-QRS-TUV-WXY-Z", 3), Z-123-X45-678-9AB-CDE-FGH-IJK-LMN-OPQ-RST-UVW-XYZ, 'Test 33');
test(licenseKeyFormatting("A1-B2-C3-D4-E5-F6-G7-H8-I9-J0-K1-L2-M3-N4-O5-P6-Q7-R8-S9-T0-U1-V2-W3-X4-Y5-Z6", 6), A1B2-C3D4E5-F6G7H8-I9J0K1-L2M3N4-O5P6Q7-R8S9T0-U1V2W3-X4Y5Z6, 'Test 34');
test(licenseKeyFormatting("a-1-b-2-c-3-d-4-e-5-f-6-g-7-h-8-i-9-j-0", 2), A1-B2-C3-D4-E5-F6-G7-H8-I9-J0, 'Test 35');
test(licenseKeyFormatting("a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z-0-1-2-3-4-5-6-7-8-9", 5), A-BCDEF-GHIJK-LMNOP-QRSTU-VWXYZ-01234-56789, 'Test 36');
test(licenseKeyFormatting("a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z", 4), AB-CDEF-GHIJ-KLMN-OPQR-STUV-WXYZ, 'Test 37');
test(licenseKeyFormatting("-A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z-", 3), AB-CDE-FGH-IJK-LMN-OPQ-RST-UVW-XYZ, 'Test 38');
test(licenseKeyFormatting("aA-bB-cC-dD-eE-fF-gG-hH-iI-jJ-kK-lL-mM-nN-oO-pP-qQ-rR-sS-tT-uU-vV-wW-xX-yY-zZ", 5), AA-BBCCD-DEEFF-GGHHI-IJJKK-LLMMN-NOOPP-QQRRS-STTUU-VVWWX-XYYZZ, 'Test 39');
test(licenseKeyFormatting("-a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z-", 2), AB-CD-EF-GH-IJ-KL-MN-OP-QR-ST-UV-WX-YZ, 'Test 40');
test(licenseKeyFormatting("0-0-0-0-0-0-0-0-0-0", 2), 00-00-00-00-00, 'Test 41');
test(licenseKeyFormatting("abcdefghij-klmnopqrstuvwxyz", 6), AB-CDEFGH-IJKLMN-OPQRST-UVWXYZ, 'Test 42');
test(licenseKeyFormatting("1-2-3-4-5-6-7-8-9-0-1-2-3-4-5-6-7-8-9-0-1-2-3-4-5-6-7-8-9-0-1-2-3-4-5-6-7-8-9-0-1-2-3-4-5-6-7-8-9-0", 3), 12-345-678-901-234-567-890-123-456-789-012-345-678-901-234-567-890, 'Test 43');
test(licenseKeyFormatting("x-y-z-1-2-3-4-5-6-7-8-9-0-A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z", 7), XYZ1-2345678-90ABCDE-FGHIJKL-MNOPQRS-TUVWXYZ, 'Test 44');
test(licenseKeyFormatting("000-000-000-000-000", 5), 00000-00000-00000, 'Test 45');
test(licenseKeyFormatting("123-456-7890-ABCD-EFGH-IJKL", 3), 1-234-567-890-ABC-DEF-GHI-JKL, 'Test 46');
test(licenseKeyFormatting("2-5G-3-J-", 1), 2-5-G-3-J, 'Test 47');
test(licenseKeyFormatting("-this-is-a-test-string-for-the-problem-description-", 5), T-HISIS-ATEST-STRIN-GFORT-HEPRO-BLEMD-ESCRI-PTION, 'Test 48');
test(licenseKeyFormatting("abcdefg-hijkl-mnopqr-stuv-wxyz-12345-67890", 6), ABCDEF-GHIJKL-MNOPQR-STUVWX-YZ1234-567890, 'Test 49');
test(licenseKeyFormatting("W3LC--DR5F--HR5P-TR22--W48P", 4), W3LC-DR5F-HR5P-TR22-W48P, 'Test 50');
test(licenseKeyFormatting("A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z", 26), ABCDEFGHIJKLMNOPQRSTUVWXYZ, 'Test 51');
test(licenseKeyFormatting("abcdef", 10), ABCDEF, 'Test 52');
test(licenseKeyFormatting("---", 1), , 'Test 53');
test(licenseKeyFormatting("aBcDeFgHiJkLmNoPqRsTuVwXyZ", 7), ABCDE-FGHIJKL-MNOPQRS-TUVWXYZ, 'Test 54');
test(licenseKeyFormatting("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 4), AB-CDEF-GHIJ-KLMN-OPQR-STUV-WXYZ-ABCD-EFGH-IJKL-MNOP-QRST-UVWX-YZ01-2345-6789, 'Test 55');
test(licenseKeyFormatting("---", 2), , 'Test 56');
test(licenseKeyFormatting("A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z", 5), A-BCDEF-GHIJK-LMNOP-QRSTU-VWXYZ, 'Test 57');
test(licenseKeyFormatting("a", 2), A, 'Test 58');
test(licenseKeyFormatting("-a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z-0-1-2-3-4-5-6-7-8-9---", 1), A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z-0-1-2-3-4-5-6-7-8-9, 'Test 59');
test(licenseKeyFormatting("X-5F3Z-2E-9-W", 3), X5F-3Z2-E9W, 'Test 60');
test(licenseKeyFormatting("WXY-ZAB-CDE-FGH-IJK-LMN-OPQ-RST-UVW-XYZ-123-456-789", 3), WXY-ZAB-CDE-FGH-IJK-LMN-OPQ-RST-UVW-XYZ-123-456-789, 'Test 61');
test(licenseKeyFormatting("-", 1), , 'Test 62');
test(licenseKeyFormatting("1234567890-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 10), 12-34567890AB-CDEFGHIJKL-MNOPQRSTUV-WXYZABCDEF-GHIJKLMNOP-QRSTUVWXYZ, 'Test 63');
test(licenseKeyFormatting("1234567890-1234567890-1234567890-1234567890", 9), 1234-567890123-456789012-345678901-234567890, 'Test 64');
test(licenseKeyFormatting("Z1234567890123456789012345678901234567890", 15), Z1234567890-123456789012345-678901234567890, 'Test 65');
test(licenseKeyFormatting("a0b1-c2d3-e4f5-g6h7-i8j9-k0l1-m2n3-o4p5-q6r7-s8t9-u0v1-w2x3-y4z5", 3), A-0B1-C2D-3E4-F5G-6H7-I8J-9K0-L1M-2N3-O4P-5Q6-R7S-8T9-U0V-1W2-X3Y-4Z5, 'Test 66');
test(licenseKeyFormatting("-a", 1), A, 'Test 67');
test(licenseKeyFormatting("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 13), ABCDEFGHIJKLM-NOPQRSTUVWXYZ, 'Test 68');
test(licenseKeyFormatting("1-2-3-4-5-6-7-8-9-0", 1), 1-2-3-4-5-6-7-8-9-0, 'Test 69');
test(licenseKeyFormatting("---a---b---c---d---e---f---g---h---i---j---", 2), AB-CD-EF-GH-IJ, 'Test 70');
test(licenseKeyFormatting("abcdef-ghijklm-nopqrst-uvwxyz-012345-67890", 6), A-BCDEFG-HIJKLM-NOPQRS-TUVWXY-Z01234-567890, 'Test 71');
test(licenseKeyFormatting("1234567890-abcdefghij-klmnopqrstuvwxyz", 6), 123456-7890AB-CDEFGH-IJKLMN-OPQRST-UVWXYZ, 'Test 72');
test(licenseKeyFormatting("-a-b--c-d--e-f--g-h--i-j--k-l--m-n--o-p--q-r--s-t--u-v--w-x--y-z-", 4), AB-CDEF-GHIJ-KLMN-OPQR-STUV-WXYZ, 'Test 73');
test(licenseKeyFormatting("ABCDEFGHIJKLMNOPQRSTUVWXYZ-0123456789", 8), ABCD-EFGHIJKL-MNOPQRST-UVWXYZ01-23456789, 'Test 74');
test(licenseKeyFormatting("a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z-0-1-2-3-4-5-6-7-8-9", 7), A-BCDEFGH-IJKLMNO-PQRSTUV-WXYZ012-3456789, 'Test 75');
test(licenseKeyFormatting("-A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z-", 2), AB-CD-EF-GH-IJ-KL-MN-OP-QR-ST-UV-WX-YZ, 'Test 76');
test(licenseKeyFormatting("1234567890-abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ", 6), 12-345678-90ABCD-EFGHIJ-KLMNOP-QRSTUV-WXYZAB-CDEFGH-IJKLMN-OPQRST-UVWXYZ, 'Test 77');
test(licenseKeyFormatting("1-2-3-4-5-6-7-8-9-A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z", 1), 1-2-3-4-5-6-7-8-9-A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z, 'Test 78');
test(licenseKeyFormatting("123-456-789-0ABC-DEF", 4), 1234-5678-90AB-CDEF, 'Test 79');
test(licenseKeyFormatting("9876543210-zyxwvutsrqponmlkjihgfedcba-9876543210-zyxwvutsrqponmlkjihgfedcba", 5), 98-76543-210ZY-XWVUT-SRQPO-NMLKJ-IHGFE-DCBA9-87654-3210Z-YXWVU-TSRQP-ONMLK-JIHGF-EDCBA, 'Test 80');
test(licenseKeyFormatting("123-456-789-0-ABC-DEF-GHI-JKL-MNO-PQR-STU-VWX-YZ", 2), 12-34-56-78-90-AB-CD-EF-GH-IJ-KL-MN-OP-QR-ST-UV-WX-YZ, 'Test 81');
test(licenseKeyFormatting("0123456789", 2), 01-23-45-67-89, 'Test 82');
test(licenseKeyFormatting("ZEBRA-1234-APPLE-5678-BANANA-9012-CHERRY", 4), ZE-BRA1-234A-PPLE-5678-BANA-NA90-12CH-ERRY, 'Test 83');
test(licenseKeyFormatting("-abc-def-ghi-jkl-mno-pqr-stu-vwx-yz-123-456-789-0", 7), A-BCDEFGH-IJKLMNO-PQRSTUV-WXYZ123-4567890, 'Test 84');
test(licenseKeyFormatting("X-Y-Z", 1), X-Y-Z, 'Test 85');
test(licenseKeyFormatting("-ABCD-EFGH-IJKL-MNOP-QRST-UVWX-YZ-", 5), A-BCDEF-GHIJK-LMNOP-QRSTU-VWXYZ, 'Test 86');
test(licenseKeyFormatting("Z", 10), Z, 'Test 87');
test(licenseKeyFormatting("1-2-3-4-5-6-7-8-9-0", 10), 1234567890, 'Test 88');
test(licenseKeyFormatting("123-456-7890-ABC-DEF", 3), 1-234-567-890-ABC-DEF, 'Test 89');
test(licenseKeyFormatting("123-456-789-0ABC-DEF", 3), 1-234-567-890-ABC-DEF, 'Test 90');
test(licenseKeyFormatting("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ", 15), 123456-7890ABCDEFGHIJK-LMNOPQRSTUVWXYZ, 'Test 91');
test(licenseKeyFormatting("1234567890-abcdef-1234567890-ABCDEF", 7), 1234-567890A-BCDEF12-3456789-0ABCDEF, 'Test 92');
test(licenseKeyFormatting("0000-0000-0000-0000", 4), 0000-0000-0000-0000, 'Test 93');
test(licenseKeyFormatting("--a-b--c-d--e-f--g-h--i-j--", 2), AB-CD-EF-GH-IJ, 'Test 94');
test(licenseKeyFormatting("Z", 1), Z, 'Test 95');
test(licenseKeyFormatting("a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z", 27), ABCDEFGHIJKLMNOPQRSTUVWXYZ, 'Test 96');
test(licenseKeyFormatting("A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z", 4), AB-CDEF-GHIJ-KLMN-OPQR-STUV-WXYZ, 'Test 97');
test(licenseKeyFormatting("-A--B--C--D--E--F--G--H--I--J--K--L--M--N--O--P--Q--R--S--T--U--V--W--X--Y--Z-", 2), AB-CD-EF-GH-IJ-KL-MN-OP-QR-ST-UV-WX-YZ, 'Test 98');
test(licenseKeyFormatting("-A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z-0-1-2-3-4-5-6-7-8-9-", 5), A-BCDEF-GHIJK-LMNOP-QRSTU-VWXYZ-01234-56789, 'Test 99');
test(licenseKeyFormatting("LICENSE-KEY-FOR-EXAMPLE-1234567", 7), LICENS-EKEYFOR-EXAMPLE-1234567, 'Test 100');
test(licenseKeyFormatting("a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a-a", 2), A-AA-AA-AA-AA-AA-AA-AA-AA-AA-AA-AA-AA-AA-AA-AA, 'Test 101');
test(licenseKeyFormatting("---a---b---c---d---e---f---g---h---i---j---k---l---m---n---o---p---q---r---s---t---u---v---w---x---y---z---", 5), A-BCDEF-GHIJK-LMNOP-QRSTU-VWXYZ, 'Test 102');
test(licenseKeyFormatting("0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0", 4), 00-0000-0000-0000-0000-0000-0000-0000-0000-0000-0000-0000-0000-0000, 'Test 103');
test(licenseKeyFormatting("1-2-3-4-5-6-7-8-9-0-1-2-3-4-5-6-7-8-9-0-1-2-3-4-5-6-7-8-9-0", 10), 1234567890-1234567890-1234567890, 'Test 104');
test(licenseKeyFormatting("a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z", 3), AB-CDE-FGH-IJK-LMN-OPQ-RST-UVW-XYZ, 'Test 105');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

