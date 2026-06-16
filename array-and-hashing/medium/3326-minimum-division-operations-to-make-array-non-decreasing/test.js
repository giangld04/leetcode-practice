// Test: 3326. Minimum Division Operations To Make Array Non Decreasing
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n3326. Minimum Division Operations To Make Array Non Decreasing\n");

test(minOperations([2,3,4,6,9]), 0, 'Test 1');
test(minOperations([9,3,1]), -1, 'Test 2');
test(minOperations([1,1,1,1]), 0, 'Test 3');
test(minOperations([10,5,3]), -1, 'Test 4');
test(minOperations([3,9,27]), 0, 'Test 5');
test(minOperations([8,4,2,1]), -1, 'Test 6');
test(minOperations([5,15,45,135]), 0, 'Test 7');
test(minOperations([100,25,5]), 2, 'Test 8');
test(minOperations([4,4,8,2]), 3, 'Test 9');
test(minOperations([4,2,1]), -1, 'Test 10');
test(minOperations([100,10,1]), -1, 'Test 11');
test(minOperations([10,5,15]), 1, 'Test 12');
test(minOperations([3,9,3]), 1, 'Test 13');
test(minOperations([2,4,8,16]), 0, 'Test 14');
test(minOperations([2,3,4,8]), 0, 'Test 15');
test(minOperations([16,8,4,2,1]), -1, 'Test 16');
test(minOperations([36,18,9,3,1]), -1, 'Test 17');
test(minOperations([5,10,5]), -1, 'Test 18');
test(minOperations([2,4,8,16,32]), 0, 'Test 19');
test(minOperations([100,25,50]), 1, 'Test 20');
test(minOperations([6,12,36,108]), 0, 'Test 21');
test(minOperations([10,20,5]), 2, 'Test 22');
test(minOperations([100,10,2]), 2, 'Test 23');
test(minOperations([25,7]), 1, 'Test 24');
test(minOperations([7,7,6]), -1, 'Test 25');
test(minOperations([6,6,6,6,6]), 0, 'Test 26');
test(minOperations([100,50,25,5]), 3, 'Test 27');
test(minOperations([10,5,2]), -1, 'Test 28');
test(minOperations([3,9,27,81]), 0, 'Test 29');
test(minOperations([64, 32, 16, 8, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 30');
test(minOperations([81, 27, 9, 3, 1]), -1, 'Test 31');
test(minOperations([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576]), 0, 'Test 32');
test(minOperations([1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812, 3906, 1953]), -1, 'Test 33');
test(minOperations([256, 128, 64, 32, 16, 8, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 34');
test(minOperations([60, 120, 40, 20, 10, 5]), 5, 'Test 35');
test(minOperations([2, 4, 8, 16, 32, 64, 128, 256]), 0, 'Test 36');
test(minOperations([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288]), 0, 'Test 37');
test(minOperations([1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812, 3906, 1953, 976, 488, 244, 122, 61, 30, 15, 7, 3, 1]), -1, 'Test 38');
test(minOperations([100, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 39');
test(minOperations([12, 6, 4, 2, 1]), -1, 'Test 40');
test(minOperations([100, 10, 100, 10, 100, 10, 100, 10, 100, 10]), 9, 'Test 41');
test(minOperations([360, 180, 90, 45, 15, 3, 1]), -1, 'Test 42');
test(minOperations([3125, 625, 125, 25, 5, 1]), -1, 'Test 43');
test(minOperations([1000000, 500000, 250000, 125000, 62500, 31250, 15625, 7812, 3906, 1953, 976]), -1, 'Test 44');
test(minOperations([81, 27, 9, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 45');
test(minOperations([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 0, 'Test 46');
test(minOperations([101, 101, 101, 101, 101, 101, 101, 101, 101, 101]), 0, 'Test 47');
test(minOperations([121, 11, 22, 44, 88, 176, 352, 704, 1408, 2816]), 1, 'Test 48');
test(minOperations([12, 6, 3, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 49');
test(minOperations([60, 30, 15, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 50');
test(minOperations([9, 27, 81, 243, 729]), 0, 'Test 51');
test(minOperations([2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 0, 'Test 52');
test(minOperations([36, 24, 18, 12, 9, 6, 4, 3, 2, 1]), -1, 'Test 53');
test(minOperations([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 54');
test(minOperations([97, 32, 16, 8, 4, 2, 1]), -1, 'Test 55');
test(minOperations([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 0, 'Test 56');
test(minOperations([50, 10, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 57');
test(minOperations([121, 11, 1, 1, 1]), -1, 'Test 58');
test(minOperations([20, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 2, 'Test 59');
test(minOperations([120, 60, 30, 15, 5, 1]), -1, 'Test 60');
test(minOperations([18, 9, 3, 9, 1, 9, 18, 9, 3, 9, 1, 9]), -1, 'Test 61');
test(minOperations([1000000, 500000, 250000, 125000]), 3, 'Test 62');
test(minOperations([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 0, 'Test 63');
test(minOperations([9, 3, 9, 1, 9]), -1, 'Test 64');
test(minOperations([360, 180, 90, 45, 15, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 65');
test(minOperations([49, 7, 14, 28, 56, 112, 224, 448, 896, 1792]), 1, 'Test 66');
test(minOperations([999999, 333333, 111111, 37037, 123456789, 1]), Error: list index out of range, 'Test 67');
test(minOperations([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 0, 'Test 68');
test(minOperations([42, 21, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 69');
test(minOperations([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2]), 9, 'Test 70');
test(minOperations([36, 12, 4, 2, 1, 1, 1, 1, 1]), -1, 'Test 71');
test(minOperations([999, 333, 111, 37, 1]), -1, 'Test 72');
test(minOperations([100, 25, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 73');
test(minOperations([18, 9, 3, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 74');
test(minOperations([17, 17, 17, 17, 16]), -1, 'Test 75');
test(minOperations([2, 4, 8, 16, 32, 64, 128, 256, 512, 1023]), 0, 'Test 76');
test(minOperations([49, 49, 49, 49, 49, 49, 49, 49, 49, 49]), 0, 'Test 77');
test(minOperations([81, 27, 9, 3, 1, 1, 1, 1, 1, 1]), -1, 'Test 78');
test(minOperations([2, 4, 8, 16, 32, 64]), 0, 'Test 79');
test(minOperations([36, 18, 9, 3, 9, 1, 9]), -1, 'Test 80');
test(minOperations([999983, 999983, 999983, 999983, 999983, 999983, 999983, 999983, 999983, 999983]), 0, 'Test 81');
test(minOperations([81, 27, 9, 3, 1, 3, 9, 27, 81, 243]), -1, 'Test 82');
test(minOperations([1023, 1023, 1023, 1023, 1023, 1023, 1023, 1023, 1023, 1023]), 0, 'Test 83');
test(minOperations([18, 9, 3, 1]), -1, 'Test 84');
test(minOperations([1000000, 1000000, 1000000, 1000000, 1000000]), 0, 'Test 85');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0, 'Test 86');
test(minOperations([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]), 0, 'Test 87');
test(minOperations([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), 0, 'Test 88');
test(minOperations([256, 128, 64, 32, 16, 8, 4, 2, 1]), -1, 'Test 89');
test(minOperations([10, 20, 30, 6, 15, 5, 1]), -1, 'Test 90');
test(minOperations([12, 6, 3, 1, 1, 1, 1]), -1, 'Test 91');
test(minOperations([49, 7, 1]), -1, 'Test 92');
test(minOperations([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 0, 'Test 93');
test(minOperations([100, 101, 102, 103, 104, 105, 106, 107, 108, 109]), 0, 'Test 94');
test(minOperations([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072]), 0, 'Test 95');
test(minOperations([2, 3, 6, 12, 24, 48, 96]), 0, 'Test 96');
test(minOperations([97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97]), 0, 'Test 97');
test(minOperations([10, 5, 25, 5, 1]), -1, 'Test 98');
test(minOperations([1000000, 100000, 10000, 1000, 100, 10, 1]), -1, 'Test 99');
test(minOperations([100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 0, 'Test 100');
test(minOperations([27, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049]), 1, 'Test 101');
test(minOperations([3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049, 177147, 531441, 1594323, 4782969, 14348907, 43046721, 129140163]), 0, 'Test 102');
test(minOperations([64, 32, 16, 8, 4, 2, 1]), -1, 'Test 103');
test(minOperations([24, 12, 6, 3, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 104');
test(minOperations([9, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 105');
test(minOperations([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 0, 'Test 106');
test(minOperations([1000, 500, 250, 125, 62, 31, 15, 7, 3, 1]), -1, 'Test 107');
test(minOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 0, 'Test 108');
test(minOperations([60, 30, 15, 5, 1, 1, 1, 1, 1, 1]), -1, 'Test 109');
test(minOperations([1000, 500, 250, 125, 62, 31, 15]), -1, 'Test 110');
test(minOperations([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), -1, 'Test 111');
test(minOperations([49, 7, 49, 7, 49, 7, 49, 7]), 4, 'Test 112');
test(minOperations([15, 5, 10, 20, 25, 50, 100, 200]), 1, 'Test 113');
test(minOperations([18, 9, 6, 3, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 114');
test(minOperations([60, 30, 15, 7, 4, 2, 1]), -1, 'Test 115');
test(minOperations([9, 3, 1, 1, 1, 1]), -1, 'Test 116');
test(minOperations([6, 3, 6, 9, 18, 36, 72, 144, 288, 576]), 1, 'Test 117');

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
