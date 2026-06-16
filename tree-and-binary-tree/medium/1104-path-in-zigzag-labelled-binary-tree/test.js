// Test: 1104. Path In Zigzag Labelled Binary Tree
// 78 test cases from LeetCodeDataset
// Run: node test.js

const { pathInZigZagTree } = require("./solution");

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

console.log("\n1104. Path In Zigzag Labelled Binary Tree\n");

test(pathInZigZagTree(14), [1, 3, 4, 14], 'Test 1');
test(pathInZigZagTree(1023), [1, 3, 4, 15, 16, 63, 64, 255, 256, 1023], 'Test 2');
test(pathInZigZagTree(3), [1, 3], 'Test 3');
test(pathInZigZagTree(1000000), [1, 3, 4, 15, 17, 61, 69, 244, 279, 976, 1118, 3906, 4475, 15625, 17901, 62500, 71607, 250000, 286431, 1000000], 'Test 4');
test(pathInZigZagTree(255), [1, 3, 4, 15, 16, 63, 64, 255], 'Test 5');
test(pathInZigZagTree(4), [1, 3, 4], 'Test 6');
test(pathInZigZagTree(13), [1, 3, 5, 13], 'Test 7');
test(pathInZigZagTree(15), [1, 3, 4, 15], 'Test 8');
test(pathInZigZagTree(6), [1, 2, 6], 'Test 9');
test(pathInZigZagTree(11), [1, 2, 6, 11], 'Test 10');
test(pathInZigZagTree(2), [1, 2], 'Test 11');
test(pathInZigZagTree(64), [1, 3, 4, 15, 16, 63, 64], 'Test 12');
test(pathInZigZagTree(8), [1, 2, 7, 8], 'Test 13');
test(pathInZigZagTree(1048575), [1, 3, 4, 15, 16, 63, 64, 255, 256, 1023, 1024, 4095, 4096, 16383, 16384, 65535, 65536, 262143, 262144, 1048575], 'Test 14');
test(pathInZigZagTree(1), [1], 'Test 15');
test(pathInZigZagTree(9), [1, 2, 7, 9], 'Test 16');
test(pathInZigZagTree(26), [1, 2, 6, 10, 26], 'Test 17');
test(pathInZigZagTree(12), [1, 3, 5, 12], 'Test 18');
test(pathInZigZagTree(10), [1, 2, 6, 10], 'Test 19');
test(pathInZigZagTree(7), [1, 2, 7], 'Test 20');
test(pathInZigZagTree(5), [1, 3, 5], 'Test 21');
test(pathInZigZagTree(16), [1, 3, 4, 15, 16], 'Test 22');
test(pathInZigZagTree(5000), [1, 3, 4, 14, 19, 56, 78, 227, 312, 910, 1250, 3643, 5000], 'Test 23');
test(pathInZigZagTree(1024), [1, 3, 4, 15, 16, 63, 64, 255, 256, 1023, 1024], 'Test 24');
test(pathInZigZagTree(31), [1, 2, 7, 8, 31], 'Test 25');
test(pathInZigZagTree(32768), [1, 2, 7, 8, 31, 32, 127, 128, 511, 512, 2047, 2048, 8191, 8192, 32767, 32768], 'Test 26');
test(pathInZigZagTree(524288), [1, 2, 7, 8, 31, 32, 127, 128, 511, 512, 2047, 2048, 8191, 8192, 32767, 32768, 131071, 131072, 524287, 524288], 'Test 27');
test(pathInZigZagTree(8192), [1, 2, 7, 8, 31, 32, 127, 128, 511, 512, 2047, 2048, 8191, 8192], 'Test 28');
test(pathInZigZagTree(768), [1, 3, 5, 12, 23, 48, 95, 192, 383, 768], 'Test 29');
test(pathInZigZagTree(786432), [1, 3, 5, 12, 23, 48, 95, 192, 383, 768, 1535, 3072, 6143, 12288, 24575, 49152, 98303, 196608, 393215, 786432], 'Test 30');
test(pathInZigZagTree(789012), [1, 3, 5, 12, 23, 48, 95, 192, 382, 770, 1530, 3082, 6123, 12328, 24495, 49313, 97981, 197253, 391925, 789012], 'Test 31');
test(pathInZigZagTree(65536), [1, 3, 4, 15, 16, 63, 64, 255, 256, 1023, 1024, 4095, 4096, 16383, 16384, 65535, 65536], 'Test 32');
test(pathInZigZagTree(4095), [1, 3, 4, 15, 16, 63, 64, 255, 256, 1023, 1024, 4095], 'Test 33');
test(pathInZigZagTree(511), [1, 2, 7, 8, 31, 32, 127, 128, 511], 'Test 34');
test(pathInZigZagTree(524287), [1, 2, 7, 8, 31, 32, 127, 128, 511, 512, 2047, 2048, 8191, 8192, 32767, 32768, 131071, 131072, 524287], 'Test 35');
test(pathInZigZagTree(98304), [1, 2, 6, 11, 24, 47, 96, 191, 384, 767, 1536, 3071, 6144, 12287, 24576, 49151, 98304], 'Test 36');
test(pathInZigZagTree(393216), [1, 2, 6, 11, 24, 47, 96, 191, 384, 767, 1536, 3071, 6144, 12287, 24576, 49151, 98304, 196607, 393216], 'Test 37');
test(pathInZigZagTree(18), [1, 3, 4, 14, 18], 'Test 38');
test(pathInZigZagTree(16383), [1, 3, 4, 15, 16, 63, 64, 255, 256, 1023, 1024, 4095, 4096, 16383], 'Test 39');
test(pathInZigZagTree(512), [1, 2, 7, 8, 31, 32, 127, 128, 511, 512], 'Test 40');
test(pathInZigZagTree(16384), [1, 3, 4, 15, 16, 63, 64, 255, 256, 1023, 1024, 4095, 4096, 16383, 16384], 'Test 41');
test(pathInZigZagTree(131072), [1, 2, 7, 8, 31, 32, 127, 128, 511, 512, 2047, 2048, 8191, 8192, 32767, 32768, 131071, 131072], 'Test 42');
test(pathInZigZagTree(262143), [1, 3, 4, 15, 16, 63, 64, 255, 256, 1023, 1024, 4095, 4096, 16383, 16384, 65535, 65536, 262143], 'Test 43');
test(pathInZigZagTree(127), [1, 2, 7, 8, 31, 32, 127], 'Test 44');
test(pathInZigZagTree(4096), [1, 3, 4, 15, 16, 63, 64, 255, 256, 1023, 1024, 4095, 4096], 'Test 45');
test(pathInZigZagTree(32), [1, 2, 7, 8, 31, 32], 'Test 46');
test(pathInZigZagTree(1572864), [1, 2, 6, 11, 24, 47, 96, 191, 384, 767, 1536, 3071, 6144, 12287, 24576, 49151, 98304, 196607, 393216, 786431, 1572864], 'Test 47');
test(pathInZigZagTree(777777), [1, 2, 6, 11, 24, 47, 97, 189, 388, 759, 1552, 3038, 6211, 12152, 24846, 48611, 99385, 194444, 397543, 777777], 'Test 48');
test(pathInZigZagTree(262144), [1, 3, 4, 15, 16, 63, 64, 255, 256, 1023, 1024, 4095, 4096, 16383, 16384, 65535, 65536, 262143, 262144], 'Test 49');
test(pathInZigZagTree(500000), [1, 2, 7, 8, 30, 34, 122, 139, 488, 559, 1953, 2237, 7812, 8950, 31250, 35803, 125000, 143215, 500000], 'Test 50');
test(pathInZigZagTree(1234567), [1, 3, 4, 14, 18, 58, 75, 233, 301, 933, 1205, 3732, 4822, 14930, 19290, 59723, 77160, 238895, 308641, 955580, 1234567], 'Test 51');
test(pathInZigZagTree(2048), [1, 2, 7, 8, 31, 32, 127, 128, 511, 512, 2047, 2048], 'Test 52');
test(pathInZigZagTree(150), [1, 2, 7, 9, 29, 37, 116, 150], 'Test 53');
test(pathInZigZagTree(999999), [1, 3, 4, 15, 17, 61, 69, 244, 279, 976, 1118, 3906, 4475, 15624, 17902, 62499, 71608, 249999, 286432, 999999], 'Test 54');
test(pathInZigZagTree(888888), [1, 3, 5, 13, 20, 54, 83, 217, 333, 868, 1335, 3472, 5343, 13888, 21374, 55555, 85496, 222222, 341987, 888888], 'Test 55');
test(pathInZigZagTree(8191), [1, 2, 7, 8, 31, 32, 127, 128, 511, 512, 2047, 2048, 8191], 'Test 56');
test(pathInZigZagTree(196608), [1, 3, 5, 12, 23, 48, 95, 192, 383, 768, 1535, 3072, 6143, 12288, 24575, 49152, 98303, 196608], 'Test 57');
test(pathInZigZagTree(2147483647), [1, 2, 7, 8, 31, 32, 127, 128, 511, 512, 2047, 2048, 8191, 8192, 32767, 32768, 131071, 131072, 524287, 524288, 2097151, 2097152, 8388607, 8388608, 33554431, 33554432, 134217727, 134217728, 536870911, 536870912, 2147483647], 'Test 58');
test(pathInZigZagTree(128), [1, 2, 7, 8, 31, 32, 127, 128], 'Test 59');
test(pathInZigZagTree(2047), [1, 2, 7, 8, 31, 32, 127, 128, 511, 512, 2047], 'Test 60');
test(pathInZigZagTree(2097151), [1, 2, 7, 8, 31, 32, 127, 128, 511, 512, 2047, 2048, 8191, 8192, 32767, 32768, 131071, 131072, 524287, 524288, 2097151], 'Test 61');
test(pathInZigZagTree(67108864), [1, 3, 4, 15, 16, 63, 64, 255, 256, 1023, 1024, 4095, 4096, 16383, 16384, 65535, 65536, 262143, 262144, 1048575, 1048576, 4194303, 4194304, 16777215, 16777216, 67108863, 67108864], 'Test 62');
test(pathInZigZagTree(8388607), [1, 2, 7, 8, 31, 32, 127, 128, 511, 512, 2047, 2048, 8191, 8192, 32767, 32768, 131071, 131072, 524287, 524288, 2097151, 2097152, 8388607], 'Test 63');
test(pathInZigZagTree(65535), [1, 3, 4, 15, 16, 63, 64, 255, 256, 1023, 1024, 4095, 4096, 16383, 16384, 65535], 'Test 64');
test(pathInZigZagTree(983041), [1, 3, 4, 15, 17, 60, 71, 240, 287, 960, 1151, 3840, 4607, 15360, 18431, 61440, 73727, 245760, 294911, 983041], 'Test 65');
test(pathInZigZagTree(393215), [1, 3, 5, 12, 23, 48, 95, 192, 383, 768, 1535, 3072, 6143, 12288, 24575, 49152, 98303, 196608, 393215], 'Test 66');
test(pathInZigZagTree(32767), [1, 2, 7, 8, 31, 32, 127, 128, 511, 512, 2047, 2048, 8191, 8192, 32767], 'Test 67');
test(pathInZigZagTree(200000), [1, 3, 5, 12, 23, 48, 94, 195, 377, 781, 1509, 3125, 6037, 12500, 24151, 50000, 96607, 200000], 'Test 68');
test(pathInZigZagTree(131071), [1, 2, 7, 8, 31, 32, 127, 128, 511, 512, 2047, 2048, 8191, 8192, 32767, 32768, 131071], 'Test 69');
test(pathInZigZagTree(100000), [1, 2, 6, 11, 24, 47, 97, 188, 390, 754, 1562, 3018, 6250, 12075, 25000, 48303, 100000], 'Test 70');
test(pathInZigZagTree(33554431), [1, 2, 7, 8, 31, 32, 127, 128, 511, 512, 2047, 2048, 8191, 8192, 32767, 32768, 131071, 131072, 524287, 524288, 2097151, 2097152, 8388607, 8388608, 33554431], 'Test 71');
test(pathInZigZagTree(800000), [1, 3, 5, 12, 23, 48, 94, 195, 377, 781, 1509, 3125, 6037, 12500, 24151, 50000, 96607, 200000, 386431, 800000], 'Test 72');
test(pathInZigZagTree(123456), [1, 2, 7, 8, 30, 35, 120, 142, 482, 571, 1929, 2285, 7716, 9143, 30864, 36575, 123456], 'Test 73');
test(pathInZigZagTree(1048576), [1, 3, 4, 15, 16, 63, 64, 255, 256, 1023, 1024, 4095, 4096, 16383, 16384, 65535, 65536, 262143, 262144, 1048575, 1048576], 'Test 74');
test(pathInZigZagTree(63), [1, 3, 4, 15, 16, 63], 'Test 75');
test(pathInZigZagTree(16777215), [1, 3, 4, 15, 16, 63, 64, 255, 256, 1023, 1024, 4095, 4096, 16383, 16384, 65535, 65536, 262143, 262144, 1048575, 1048576, 4194303, 4194304, 16777215], 'Test 76');
test(pathInZigZagTree(256), [1, 3, 4, 15, 16, 63, 64, 255, 256], 'Test 77');
test(pathInZigZagTree(17), [1, 3, 4, 15, 17], 'Test 78');

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
