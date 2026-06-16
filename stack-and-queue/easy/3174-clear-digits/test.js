// Test: 3174. Clear Digits
// 113 test cases from LeetCodeDataset
// Run: node test.js

const { clearDigits } = require("./solution");

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

console.log("\n3174. Clear Digits\n");

test(clearDigits("abcdef"), abcdef, 'Test 1');
test(clearDigits("1a1b1c1d"), Error: pop from empty list, 'Test 2');
test(clearDigits("1a2b3c45d67e89"), Error: pop from empty list, 'Test 3');
test(clearDigits("a1b2c3d4e5"), , 'Test 4');
test(clearDigits("d123"), Error: pop from empty list, 'Test 5');
test(clearDigits("a1b2c3d4e5f6g7h8i9j0"), , 'Test 6');
test(clearDigits("1a2b3c4d"), Error: pop from empty list, 'Test 7');
test(clearDigits("a1b2c3d4e5f6"), , 'Test 8');
test(clearDigits("a1b2c3"), , 'Test 9');
test(clearDigits("abcd1234"), , 'Test 10');
test(clearDigits("abcd1"), abc, 'Test 11');
test(clearDigits("cb34"), , 'Test 12');
test(clearDigits("a1b1c1"), , 'Test 13');
test(clearDigits("a1b2c3d4"), , 'Test 14');
test(clearDigits("1a2b3c4"), Error: pop from empty list, 'Test 15');
test(clearDigits("a1b"), b, 'Test 16');
test(clearDigits("a1b1c1d1e1f1g1h1i1j1k1l1m1n1o1p1q1r1s1t1u1v1w1x1y1z1"), , 'Test 17');
test(clearDigits("abc"), abc, 'Test 18');
test(clearDigits("9abc8def7ghi6jkl5mno4pqr3stu2vwx1yz"), Error: pop from empty list, 'Test 19');
test(clearDigits("abc1d2e3"), ab, 'Test 20');
test(clearDigits("111abc222def333"), Error: pop from empty list, 'Test 21');
test(clearDigits("abcd"), abcd, 'Test 22');
test(clearDigits("abc123"), , 'Test 23');
test(clearDigits("123abc"), Error: pop from empty list, 'Test 24');
test(clearDigits("z9y8x7w6v5u4t3s2r1q0p1o2n3m4l5k6j7i8h9g0f1e2d3c4b5a6"), , 'Test 25');
test(clearDigits("abc123d4ef5"), e, 'Test 26');
test(clearDigits("1a2b3c4d5e6f"), Error: pop from empty list, 'Test 27');
test(clearDigits("z1y2x3w4v5u6t7s8r9q0p1o2n3m4l5k6j7i8h9g0f1e2d3c4b5a6"), , 'Test 28');
test(clearDigits("a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0"), , 'Test 29');
test(clearDigits("xyz765mno432lmn109pqr876"), , 'Test 30');
test(clearDigits("hello2world1"), hellworl, 'Test 31');
test(clearDigits("9a8b7c6d5e4f3g2h1"), Error: pop from empty list, 'Test 32');
test(clearDigits("zz9yy8xx7ww6vv5uu4tt3ss2rr1qqppooonnmmllkkjjiihhggffeedcba1"), zyxwvutsrqqppooonnmmllkkjjiihhggffeedcb, 'Test 33');
test(clearDigits("1234567890abcdefghijklmnopqrstuvwxyz"), Error: pop from empty list, 'Test 34');
test(clearDigits("a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8"), , 'Test 35');
test(clearDigits("mnbv1234cvbnm5678mnbvc90"), cmnb, 'Test 36');
test(clearDigits("abcdefghij1klmnopqr2stuv3wxyz4abcd5efg6hij7klmno8pqr9stu0vwx1yz2"), abcdefghiklmnopqstuwxyabcefhiklmnpqstvwy, 'Test 37');
test(clearDigits("abcdefghijklmnopqrstuvwxyz1234567890"), abcdefghijklmnop, 'Test 38');
test(clearDigits("9876543210zyxwvutsrqponmlkjihgfedcba"), Error: pop from empty list, 'Test 39');
test(clearDigits("q1w2e3r4t5y6u7i8o9p0"), , 'Test 40');
test(clearDigits("1a1b1c1d1e1f1g1h1i1j1k1l1m1n1o1p1q1r1s1t1u1v1w1x1y1z1"), Error: pop from empty list, 'Test 41');
test(clearDigits("abcdefghij1234567890klmnopqrstuvwxyz"), klmnopqrstuvwxyz, 'Test 42');
test(clearDigits("a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6"), , 'Test 43');
test(clearDigits("abcdefgh12345678ijkl90mnopqrstu12345678vwxyz0"), ijmvwxy, 'Test 44');
test(clearDigits("abcd1234abcd5678abcd90abcd"), ababcd, 'Test 45');
test(clearDigits("9abcdefghij8klmnopqr7stuvwx6yz54321"), Error: pop from empty list, 'Test 46');
test(clearDigits("z9y8x7w6v5u4t3s2r1"), , 'Test 47');
test(clearDigits("x9y8z7w6v5u4t3s2r1q0p9o8n7m6l5k4j3i2h1g0f9e8d7c6b5a43210"), Error: pop from empty list, 'Test 48');
test(clearDigits("x1y2z3a4b5c6d7e8f9g0"), , 'Test 49');
test(clearDigits("a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6"), , 'Test 50');
test(clearDigits("a1a2a3a4a5a6a7a8a9a0b1b2b3b4b5b6b7b8b9b0c1c2c3c4c5c6c7c8c9c0"), , 'Test 51');
test(clearDigits("abcdefgh1ijklm2nopqr3stuv4wxyz5"), abcdefgijklnopqstuwxy, 'Test 52');
test(clearDigits("m1n2o3p4q5r6s7t8u9v0w1x2y3z4"), , 'Test 53');
test(clearDigits("9x8y7z6w5v4u3t2s1r0q9p8o7n6m5l4k3j2i1h0g"), Error: pop from empty list, 'Test 54');
test(clearDigits("a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0"), , 'Test 55');
test(clearDigits("9a8b7c6d5e4f3g2h1i0j"), Error: pop from empty list, 'Test 56');
test(clearDigits("xyz987654321"), Error: pop from empty list, 'Test 57');
test(clearDigits("9876543210abcdefghijklmnopqrstuvwxyz"), Error: pop from empty list, 'Test 58');
test(clearDigits("abcdefghij0987654321klmnopqrstuvwxyz"), klmnopqrstuvwxyz, 'Test 59');
test(clearDigits("abcdef123ghijkl456mnopq789rstuv0"), abcghimnrstu, 'Test 60');
test(clearDigits("x1y2z3x1y2z3"), , 'Test 61');
test(clearDigits("xyz123abc456def789ghi0"), gh, 'Test 62');
test(clearDigits("abcdefghi1jklmnopq2rstuvwxy3z"), abcdefghjklmnoprstuvwxz, 'Test 63');
test(clearDigits("1abc2def3ghi4jkl5mno6pqr7stu8vwx9yz0"), Error: pop from empty list, 'Test 64');
test(clearDigits("aaa1bbb2ccc3ddd4eee5fff6ggg7hhh8iii9jjj"), aabbccddeeffgghhiijjj, 'Test 65');
test(clearDigits("abcdef1ghijkl2mnopqr3stuv4wxyz5"), abcdeghijkmnopqstuwxy, 'Test 66');
test(clearDigits("1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3"), Error: pop from empty list, 'Test 67');
test(clearDigits("mno4pqr5stu6vwx7yz8"), mnpqstvwy, 'Test 68');
test(clearDigits("p1q2r3s4t5u6v7w8x9y0z1a2b3c4d5e6f7g8h9i0"), , 'Test 69');
test(clearDigits("abc123def456ghi789jkl0mno1pqr2stu3vwx4yz5"), jkmnpqstvwy, 'Test 70');
test(clearDigits("abcdefghijklmnopqrstuvwxyz0123456789"), abcdefghijklmnop, 'Test 71');
test(clearDigits("a1b2c3d4e5f6g7h8i9j0k1l2m3n4"), , 'Test 72');
test(clearDigits("9z8y7x6w5v4u3t2s1r0q9p8o7n6m5l4k3j2i1h0gfeabcd"), Error: pop from empty list, 'Test 73');
test(clearDigits("987654321zyxwvutsrqponmlkjihgfedcba0"), Error: pop from empty list, 'Test 74');
test(clearDigits("x9y8z7w6v5u4t3s2r1q0p"), p, 'Test 75');
test(clearDigits("x9y8z7"), , 'Test 76');
test(clearDigits("abcdefg1234567890"), Error: pop from empty list, 'Test 77');
test(clearDigits("0123456789abcdefghijklmnopqrstuvwxyz"), Error: pop from empty list, 'Test 78');
test(clearDigits("abcdefghi1jklmnopq2rstuv3wxyz4"), abcdefghjklmnoprstuwxy, 'Test 79');
test(clearDigits("m9n8o7p6q5r4s3t2u1"), , 'Test 80');
test(clearDigits("a123b456c789d0"), Error: pop from empty list, 'Test 81');
test(clearDigits("abc123def456ghi789jkl012mno345pqr678stu90"), s, 'Test 82');
test(clearDigits("z9y8x7w6v5u4t3s2r1q"), q, 'Test 83');
test(clearDigits("abcdefghij1klmnopqr2stuv3wxyz4"), abcdefghiklmnopqstuwxy, 'Test 84');
test(clearDigits("1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7"), Error: pop from empty list, 'Test 85');
test(clearDigits("a1b2c3d4e5f6g7h8i9j10"), Error: pop from empty list, 'Test 86');
test(clearDigits("1abcd2efgh3ijkl4mnop5qrst6uvw7xyz8"), Error: pop from empty list, 'Test 87');
test(clearDigits("abcdef123ghijkl456mno789pqr12stu34vwxy5z"), abcghipsvwxz, 'Test 88');
test(clearDigits("1a2b3c4d5e6f7g8h9i0j1k2l3m4n5"), Error: pop from empty list, 'Test 89');
test(clearDigits("abcdefghij1234567890"), , 'Test 90');
test(clearDigits("1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t"), Error: pop from empty list, 'Test 91');
test(clearDigits("xyz123"), , 'Test 92');
test(clearDigits("abcd1234efgh5678ijkl90"), ij, 'Test 93');
test(clearDigits("123abc456def789ghi0jkl"), Error: pop from empty list, 'Test 94');
test(clearDigits("abc1def2ghi3jkl4mno5pqr6stu7vwx8yz9"), abdeghjkmnpqstvwy, 'Test 95');
test(clearDigits("11a22b33c44d55e66f77g88h99i"), Error: pop from empty list, 'Test 96');
test(clearDigits("1234567890"), Error: pop from empty list, 'Test 97');
test(clearDigits("x9y8z7x6y5z4x3y2z1"), , 'Test 98');
test(clearDigits("a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2"), , 'Test 99');
test(clearDigits("abcd12345efg67890hijklmnopqrstu0vwxyz"), Error: pop from empty list, 'Test 100');
test(clearDigits("1a2b3c4d5e6f7g8h9i0j"), Error: pop from empty list, 'Test 101');
test(clearDigits("z9y8x7w6v5u4t3s2r1q0ponmlkjihgfedcba"), ponmlkjihgfedcba, 'Test 102');
test(clearDigits("xyz7uvw8mno9"), xyuvmn, 'Test 103');
test(clearDigits("1234567890abcdefghij"), Error: pop from empty list, 'Test 104');
test(clearDigits("1a2b3c4d5e6f7g8h9i"), Error: pop from empty list, 'Test 105');
test(clearDigits("abcdefghij1klmnopq2rstuv3wxyz4"), abcdefghiklmnoprstuwxy, 'Test 106');
test(clearDigits("p1q2r3s4t5u6v7w8x9y0z"), z, 'Test 107');
test(clearDigits("9a8b7c6d5e4f3g2h1i0j9k8l7m6n5o4p3q2r1s0t9u8v7w6x5y4z3"), Error: pop from empty list, 'Test 108');
test(clearDigits("z1y2x3w4v5u6t7s8r9q0"), , 'Test 109');
test(clearDigits("abcdefghij1klmnopq2rstuvwx3yz"), abcdefghiklmnoprstuvwyz, 'Test 110');
test(clearDigits("abcdef1ghijkl2mnopqr3stuv4wxyz5abcdef6ghijkl7mnopqr8stuv9wxyz0"), abcdeghijkmnopqstuwxyabcdeghijkmnopqstuwxy, 'Test 111');
test(clearDigits("1a2a3a4a5a6a7a8a9a0"), Error: pop from empty list, 'Test 112');
test(clearDigits("1a1b2c2d3e3f4g4h5i5j6k6l7m7n8o8p9q0r1s2t3u4v5w6x7y8z90"), Error: pop from empty list, 'Test 113');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

