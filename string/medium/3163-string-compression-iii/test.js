// Test: 3163. String Compression Iii
// 25 test cases from LeetCodeDataset
// Run: node test.js

const { compressedString } = require("./solution");

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

console.log("\n3163. String Compression Iii\n");

test(compressedString("pppppppppppppppppppppppppppppppppppppp"), 9p9p9p9p2p, 'Test 1');
test(compressedString("abcde"), 1a1b1c1d1e, 'Test 2');
test(compressedString("aabbcc"), 2a2b2c, 'Test 3');
test(compressedString("aaaaaaaaaaaaaabb"), 9a5a2b, 'Test 4');
test(compressedString("ababababab"), 1a1b1a1b1a1b1a1b1a1b, 'Test 5');
test(compressedString("aaaaaaaaaabbbbbbbbbccccccccddddddddd"), 9a1a9b8c9d, 'Test 6');
test(compressedString("aabcccccaaa"), 2a1b5c3a, 'Test 7');
test(compressedString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 2a2b2c2d2e2f2g2h2i2j2k2l2m2n2o2p2q2r2s2t2u2v2w2x2y2z, 'Test 8');
test(compressedString("aabbccddeeffgghhiijj"), 2a2b2c2d2e2f2g2h2i2j, 'Test 9');
test(compressedString("zzzzzzzzzz"), 9z1z, 'Test 10');
test(compressedString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 9z9z9z9z9z5z, 'Test 11');
test(compressedString("a"), 1a, 'Test 12');
test(compressedString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzz"), 2a2b2c2d2e2f2g2h2i2j2k2l2m2n2o2p2q2r2s2t2u2v2w2x2y9z1z, 'Test 13');
test(compressedString("mmmmmmmmmmnnnnnnnnnnoooooooooollllllllkkkkkkkkkjjjjjjjjjiiiiiiiii"), 9m1m9n1n9o1o8l9k9j9i, 'Test 14');
test(compressedString("abcdefghijklmnopqrstuvwxzyz"), 1a1b1c1d1e1f1g1h1i1j1k1l1m1n1o1p1q1r1s1t1u1v1w1x1z1y1z, 'Test 15');
test(compressedString("abababababababababab"), 1a1b1a1b1a1b1a1b1a1b1a1b1a1b1a1b1a1b1a1b, 'Test 16');
test(compressedString("zzzzyyyyxxxxwwwwvvvvuuuuttttssssrrrrqqqqppppllllkkkkjjjjiiggggffffeeeeddddccccbbbbaaa"), 4z4y4x4w4v4u4t4s4r4q4p4l4k4j2i4g4f4e4d4c4b3a, 'Test 17');
test(compressedString("a9b9c9d9e9f9g9h9i9j9k9l9m9n9o9p9q9r9s9t9u9v9w9x9y9z9"), 1a191b191c191d191e191f191g191h191i191j191k191l191m191n191o191p191q191r191s191t191u191v191w191x191y191z19, 'Test 18');
test(compressedString("aaaaaaaaaabbbbbbbbbccccccccddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxxyyyyyyyyyyzzzzzzzzzz"), 9a1a9b8c8d9e1e9f1f9g1g9h1h9i1i9j1j9k1k9l1l9m1m9n1n9o1o9p1p9q1q9r1r9s1s9t1t9u1u9v1v9w1w9x2x9y1y9z1z, 'Test 19');
test(compressedString("aaaaaabbccccddeeeeeeffffgggghhhhiiiiiijjjjkkkkklllllmmmmmnnnnooooo"), 6a2b4c2d6e4f4g4h6i4j5k5l5m4n5o, 'Test 20');
test(compressedString("abababababababababababababababababababab"), 1a1b1a1b1a1b1a1b1a1b1a1b1a1b1a1b1a1b1a1b1a1b1a1b1a1b1a1b1a1b1a1b1a1b1a1b1a1b1a1b, 'Test 21');
test(compressedString("aaabbbcccddd"), 3a3b3c3d, 'Test 22');
test(compressedString("aaaaaaaaaabbbbbbbbbbccccccccccdddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhh"), 9a1a9b1b9c1c9d9e1e9f1f9g1g9h1h, 'Test 23');
test(compressedString("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 9a9a9a9a9a9a9a9a, 'Test 24');
test(compressedString("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 1a1b1c1d1e1f1g1h1i1j1k1l1m1n1o1p1q1r1s1t1u1v1w1x1y1z1a1b1c1d1e1f1g1h1i1j1k1l1m1n1o1p1q1r1s1t1u1v1w1x1y1z, 'Test 25');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

