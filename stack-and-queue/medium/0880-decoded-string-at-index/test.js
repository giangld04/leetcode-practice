// Test: 880. Decoded String At Index
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { decodeAtIndex } = require("./solution");

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

console.log("\n880. Decoded String At Index\n");

test(decodeAtIndex("x5", 15), x, 'Test 1');
test(decodeAtIndex("y959q969u3hb22", 200), y, 'Test 2');
test(decodeAtIndex("abc2d3", 7), d, 'Test 3');
test(decodeAtIndex("y959q969u3hb22", 94921609), y, 'Test 4');
test(decodeAtIndex("xyz4", 10), x, 'Test 5');
test(decodeAtIndex("y959q969u3hb22", 53563622), y, 'Test 6');
test(decodeAtIndex("a2345678999999999999999", 1), a, 'Test 7');
test(decodeAtIndex("v7", 6), v, 'Test 8');
test(decodeAtIndex("a2b2c2", 5), a, 'Test 9');
test(decodeAtIndex("abc2", 2), b, 'Test 10');
test(decodeAtIndex("abcd", 1), a, 'Test 11');
test(decodeAtIndex("abc2def3", 6), c, 'Test 12');
test(decodeAtIndex("x2y3", 5), x, 'Test 13');
test(decodeAtIndex("vzpp636m8y", 88699223), v, 'Test 14');
test(decodeAtIndex("ha22", 5), h, 'Test 15');
test(decodeAtIndex("a2b3", 4), a, 'Test 16');
test(decodeAtIndex("abc2", 3), c, 'Test 17');
test(decodeAtIndex("a9b9", 80), b, 'Test 18');
test(decodeAtIndex("ab2c3", 7), b, 'Test 19');
test(decodeAtIndex("abc2def3", 7), d, 'Test 20');
test(decodeAtIndex("x123", 3), x, 'Test 21');
test(decodeAtIndex("leet2code3", 10), o, 'Test 22');
test(decodeAtIndex("abcd2", 7), c, 'Test 23');
test(decodeAtIndex("vk7", 17), v, 'Test 24');
test(decodeAtIndex("large100string3", 250), i, 'Test 25');
test(decodeAtIndex("a2b2c3d4e5f6g7h8i9j1k2l3m4n5o6p7q8r9s1t2u3v4w5x6y7z8", 1000000), a, 'Test 26');
test(decodeAtIndex("abc3xyz2", 13), a, 'Test 27');
test(decodeAtIndex("hello2world3", 19), l, 'Test 28');
test(decodeAtIndex("abcdefg8", 1000000000), f, 'Test 29');
test(decodeAtIndex("abcde2xyz3", 11), x, 'Test 30');
test(decodeAtIndex("abcd2efg3hij4", 50), c, 'Test 31');
test(decodeAtIndex("nested2brackets3", 25), e, 'Test 32');
test(decodeAtIndex("abcd2efg3hij4klm5nop6qrst7uvw8xyz9", 1000), c, 'Test 33');
test(decodeAtIndex("abcdefgh9", 999999999), g, 'Test 34');
test(decodeAtIndex("ab2cd3ef4gh5ij6kl7mn8op9qr0st1uv2wx3yz4", 750), v, 'Test 35');
test(decodeAtIndex("a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0", 1200), Error: integer modulo by zero, 'Test 36');
test(decodeAtIndex("z9y8x7w6v5u4t3s2r1", 362880), z, 'Test 37');
test(decodeAtIndex("abc2def3ghi4jkl5", 90), i, 'Test 38');
test(decodeAtIndex("leet2code3xyz4", 25), l, 'Test 39');
test(decodeAtIndex("mnop2qrst3uvw4", 75), t, 'Test 40');
test(decodeAtIndex("hello2world3", 18), l, 'Test 41');
test(decodeAtIndex("z9y8x7w6v5u4t3s2r1", 987654321), z, 'Test 42');
test(decodeAtIndex("abc2def3ghi4jkl5mno6pqr7stu8vwx9yz10", 500), Error: integer modulo by zero, 'Test 43');
test(decodeAtIndex("a2b2c2d2e2f2g2h2i2j2", 20), a, 'Test 44');
test(decodeAtIndex("a2b2c3d4e5f6g7h8i9j1", 500), b, 'Test 45');
test(decodeAtIndex("hello2world3", 17), e, 'Test 46');
test(decodeAtIndex("abc2def3ghi4jkl5mno6pqr7stu8vwx9yz10", 12345), Error: integer modulo by zero, 'Test 47');
test(decodeAtIndex("a2b3c4d5e6f7g8h9i10j11k12l13m14n15o16", 1000), j, 'Test 48');
test(decodeAtIndex("ab2c3d4e5f6", 200), c, 'Test 49');
test(decodeAtIndex("repeat2twice3", 27), e, 'Test 50');
test(decodeAtIndex("xyz2abc3def4", 85), a, 'Test 51');
test(decodeAtIndex("xyz9", 25), x, 'Test 52');
test(decodeAtIndex("a9b8c7d6e5f4g3h2i1", 362880), a, 'Test 53');
test(decodeAtIndex("leetcode10", 47), Error: integer modulo by zero, 'Test 54');
test(decodeAtIndex("abcdefg2hijklm2nopqr2stuv2wxyz2", 50), e, 'Test 55');
test(decodeAtIndex("abc2def3ghi4", 46), d, 'Test 56');
test(decodeAtIndex("xyz9abc8", 100), x, 'Test 57');
test(decodeAtIndex("leet2code3", 15), e, 'Test 58');
test(decodeAtIndex("leet2code3", 20), t, 'Test 59');
test(decodeAtIndex("a2b3c4d5", 50), b, 'Test 60');
test(decodeAtIndex("abc123", 200), b, 'Test 61');
test(decodeAtIndex("complex2nested3structure4", 150), l, 'Test 62');
test(decodeAtIndex("a2b3c4d5e6f7g8h9i10j11k12l13m14n15o16p17q18r19s20t21u22v23w24x25y26z27", 2000), u, 'Test 63');
test(decodeAtIndex("abcd2efgh3ijkl4mnop5", 1000), d, 'Test 64');
test(decodeAtIndex("abcdefgh23456789", 876543210), b, 'Test 65');
test(decodeAtIndex("abcdefg2hijklm3nopqr4stuv5wxyz6", 2000), k, 'Test 66');
test(decodeAtIndex("hello5world2", 45), o, 'Test 67');
test(decodeAtIndex("xyz9", 27), z, 'Test 68');
test(decodeAtIndex("repeat2many3times4", 120), a, 'Test 69');
test(decodeAtIndex("xyz10", 23), Error: integer modulo by zero, 'Test 70');
test(decodeAtIndex("a10b20c30", 500), Error: integer modulo by zero, 'Test 71');
test(decodeAtIndex("abc2def3ghi4", 30), i, 'Test 72');
test(decodeAtIndex("a12b3", 35), a, 'Test 73');
test(decodeAtIndex("abcd2efgh3ijkl4mnop5qrst6uvw7xyz8", 1000), h, 'Test 74');
test(decodeAtIndex("x9y8z7", 200), x, 'Test 75');
test(decodeAtIndex("z9y8x7w6v5u4t3s2r1q9p8o7n6m5l4k3j2i1h9g8f7e6d5c4b3a2", 5000), y, 'Test 76');
test(decodeAtIndex("a2b3c4d5", 11), a, 'Test 77');
test(decodeAtIndex("abcde2fghi3", 25), f, 'Test 78');
test(decodeAtIndex("a2b3c4d5e6", 50), b, 'Test 79');
test(decodeAtIndex("abcd2efgh3ijkl4mnop5qrst6uvw7xyz8abcd2efgh3ijkl4mnop5qrst6uvw7xyz8", 3000), h, 'Test 80');
test(decodeAtIndex("abc2def3ghi4", 150), i, 'Test 81');
test(decodeAtIndex("abc3def4gh5", 100), h, 'Test 82');
test(decodeAtIndex("xyz9abc3", 30), c, 'Test 83');
test(decodeAtIndex("a2b3c4", 10), c, 'Test 84');
test(decodeAtIndex("abc3def2ghi4", 40), a, 'Test 85');
test(decodeAtIndex("xyz20", 1000), Error: integer modulo by zero, 'Test 86');
test(decodeAtIndex("ab12c3", 20), c, 'Test 87');
test(decodeAtIndex("a2b3c4d5e6f7g8h9i10", 123), Error: integer modulo by zero, 'Test 88');
test(decodeAtIndex("a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7", 1000), t, 'Test 89');
test(decodeAtIndex("abc123", 240), c, 'Test 90');
test(decodeAtIndex("xy2z3a4b5", 120), y, 'Test 91');
test(decodeAtIndex("a2b3c4d5", 100), a, 'Test 92');
test(decodeAtIndex("x9y8z7", 500), x, 'Test 93');
test(decodeAtIndex("xyz12", 35), y, 'Test 94');
test(decodeAtIndex("a2b3c4d5", 40), c, 'Test 95');
test(decodeAtIndex("hello5world3", 75), o, 'Test 96');
test(decodeAtIndex("abc2def3ghi4", 50), b, 'Test 97');
test(decodeAtIndex("abc2def3ghi4", 60), i, 'Test 98');
test(decodeAtIndex("hello2world2hello2world2", 20), o, 'Test 99');
test(decodeAtIndex("mnopqr2stuv3wxyz4", 120), v, 'Test 100');
test(decodeAtIndex("a1b2c3d4e5f6g7h8i9j0", 250), Error: integer modulo by zero, 'Test 101');
test(decodeAtIndex("leet2code3abc4", 40), l, 'Test 102');
test(decodeAtIndex("a2b2c2d2e2f2g2h2i2j2k2l2m2n2o2p2q2r2s2t2u2v2w2x2y2z2", 52), b, 'Test 103');
test(decodeAtIndex("a1b2c3d4e5f6g7h8i9j10", 150), Error: integer modulo by zero, 'Test 104');
test(decodeAtIndex("abc123", 100), a, 'Test 105');
test(decodeAtIndex("abcd2efgh3ijkl4mnop5qrst6uvw7xyz8", 500), d, 'Test 106');
test(decodeAtIndex("leet12code34", 100), t, 'Test 107');
test(decodeAtIndex("nested1nested2nested3", 1000), t, 'Test 108');
test(decodeAtIndex("a1b2c3d4e5f6g7h8i9j0", 3628800), Error: integer modulo by zero, 'Test 109');
test(decodeAtIndex("a2b3c4d5e6f7g8h9i10", 300), Error: integer modulo by zero, 'Test 110');
test(decodeAtIndex("a10b10c10", 25), Error: integer modulo by zero, 'Test 111');
test(decodeAtIndex("a2b3c4", 15), a, 'Test 112');
test(decodeAtIndex("ab12cd34", 1234), b, 'Test 113');
test(decodeAtIndex("hello2world3", 14), l, 'Test 114');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

