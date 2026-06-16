// Test: 2305. Fair Distribution Of Cookies
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { distributeCookies } = require("./solution");

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

console.log("\n2305. Fair Distribution Of Cookies\n");

test(distributeCookies([1,1,1,1,1,1,1,100000], 7), 100000, 'Test 1');
test(distributeCookies([8,15,10,20,8], 2), 31, 'Test 2');
test(distributeCookies([100000,100000,100000,100000,100000,100000,100000,100000], 8), 100000, 'Test 3');
test(distributeCookies([1,100000,1,1,1,1,1,1], 3), 100000, 'Test 4');
test(distributeCookies([10,20,30,40,50,60,70,80], 2), 180, 'Test 5');
test(distributeCookies([10,20,30,40,50,60,70,80], 8), 80, 'Test 6');
test(distributeCookies([1,3,2,4,5,6,7,8], 2), 18, 'Test 7');
test(distributeCookies([100000,1,1,1,1,1,1,1], 2), 100000, 'Test 8');
test(distributeCookies([5,5,5,5,5,5,5,5], 8), 5, 'Test 9');
test(distributeCookies([2,2,2,2,2,2,2,2], 2), 8, 'Test 10');
test(distributeCookies([6,1,3,2,2,4,1,2], 3), 7, 'Test 11');
test(distributeCookies([8,7,6,5,4,3,2,1], 4), 9, 'Test 12');
test(distributeCookies([1,2,3,4,5,6,7,8], 4), 9, 'Test 13');
test(distributeCookies([100000,1,1,1,1,1,1,1], 7), 100000, 'Test 14');
test(distributeCookies([5,5,5,5,5,5,5,5], 2), 20, 'Test 15');
test(distributeCookies([8,6,7,5,3,0,9,1], 5), 9, 'Test 16');
test(distributeCookies([8,7,6,5,4,3,2,1], 2), 18, 'Test 17');
test(distributeCookies([15,20,25,30,35,40,45,50], 7), 50, 'Test 18');
test(distributeCookies([1, 2, 3, 4, 5, 6, 7, 8], 7), 8, 'Test 19');
test(distributeCookies([9, 8, 7, 6, 5, 4, 3, 2], 5), 9, 'Test 20');
test(distributeCookies([100,200,300,400,500,600,700,800], 5), 800, 'Test 21');
test(distributeCookies([1, 1, 2, 2, 3, 3, 4, 4], 5), 4, 'Test 22');
test(distributeCookies([7, 14, 21, 28, 35, 42, 49, 56], 2), 126, 'Test 23');
test(distributeCookies([80,70,60,50,40,30,20,10], 4), 90, 'Test 24');
test(distributeCookies([1,1,2,2,3,3,4,4], 2), 10, 'Test 25');
test(distributeCookies([10, 20, 30, 40, 50, 60, 70, 80], 4), 90, 'Test 26');
test(distributeCookies([12, 11, 10, 9, 8, 7, 6, 5], 3), 23, 'Test 27');
test(distributeCookies([100, 200, 300, 150, 50, 25, 25, 50], 4), 300, 'Test 28');
test(distributeCookies([30, 20, 10, 40, 60, 50, 70, 80], 5), 80, 'Test 29');
test(distributeCookies([30, 20, 10, 20, 30, 20, 10, 20], 5), 40, 'Test 30');
test(distributeCookies([10, 20, 30, 40, 50, 60, 70, 80], 5), 80, 'Test 31');
test(distributeCookies([100000, 1, 2, 3, 4, 5, 6, 7], 2), 100000, 'Test 32');
test(distributeCookies([1,10,100,1000,10000,100000,5,50], 5), 100000, 'Test 33');
test(distributeCookies([1,10,100,1000,10000,100000,1000000,10000000], 4), 10000000, 'Test 34');
test(distributeCookies([9, 6, 12, 4, 7, 11, 5, 3], 4), 15, 'Test 35');
test(distributeCookies([1,1,1,1,1,1,1,1], 4), 2, 'Test 36');
test(distributeCookies([9,9,9,9,9,9,9,9], 4), 18, 'Test 37');
test(distributeCookies([1, 2, 4, 8, 16, 32, 64, 128], 5), 128, 'Test 38');
test(distributeCookies([10, 10, 10, 10, 10, 10, 10, 10], 7), 20, 'Test 39');
test(distributeCookies([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 4), 4, 'Test 40');
test(distributeCookies([18, 23, 45, 12, 34, 56, 78, 90], 3), 123, 'Test 41');
test(distributeCookies([100, 200, 300, 400, 500, 600, 700, 800], 6), 800, 'Test 42');
test(distributeCookies([100,200,300,400,500,600,700,800], 4), 900, 'Test 43');
test(distributeCookies([8,1,5,7,3,6,4,2], 3), 12, 'Test 44');
test(distributeCookies([9, 8, 7, 6, 5, 4, 3, 2], 6), 9, 'Test 45');
test(distributeCookies([16, 14, 12, 10, 8, 6, 4, 2], 4), 18, 'Test 46');
test(distributeCookies([5,10,15,20,25,30,35,40], 5), 40, 'Test 47');
test(distributeCookies([5, 5, 5, 5, 5, 5, 5, 5], 3), 15, 'Test 48');
test(distributeCookies([1,2,3,4,5,6,7,8], 7), 8, 'Test 49');
test(distributeCookies([9,18,27,36,45,54,63,72], 4), 81, 'Test 50');
test(distributeCookies([1, 1, 1, 1, 1, 1, 1, 1], 8), 1, 'Test 51');
test(distributeCookies([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 11, 'Test 52');
test(distributeCookies([15,14,13,12,11,10,9,8], 4), 23, 'Test 53');
test(distributeCookies([15,25,35,45,55,65,75,85], 5), 85, 'Test 54');
test(distributeCookies([12,11,10,9,8,7,6,5], 2), 34, 'Test 55');
test(distributeCookies([1, 1, 1, 1, 1, 1, 1, 1], 3), 3, 'Test 56');
test(distributeCookies([30,20,10,10,20,30,40,50], 5), 50, 'Test 57');
test(distributeCookies([10, 20, 30, 40, 50, 60, 70, 80], 3), 120, 'Test 58');
test(distributeCookies([15, 15, 15, 15, 15, 15, 15, 15], 7), 30, 'Test 59');
test(distributeCookies([1000,2000,3000,4000,5000,6000,7000,8000], 8), 8000, 'Test 60');
test(distributeCookies([1,1,1,1,1,1,1,1], 8), 1, 'Test 61');
test(distributeCookies([8,16,32,64,128,256,512,1024], 2), 1024, 'Test 62');
test(distributeCookies([30,20,10,60,50,40,70,80], 5), 80, 'Test 63');
test(distributeCookies([10, 20, 30, 40, 50, 60, 70, 80, 90], 3), 150, 'Test 64');
test(distributeCookies([5,10,15,20,25,30,35,40], 6), 40, 'Test 65');
test(distributeCookies([9, 3, 10, 12, 8, 15, 5, 7], 3), 24, 'Test 66');
test(distributeCookies([3,1,2,4,5,6,7,8], 4), 9, 'Test 67');
test(distributeCookies([1, 2, 3, 4, 5, 6, 7, 8], 4), 9, 'Test 68');
test(distributeCookies([12, 17, 22, 14, 29, 18, 15, 20], 4), 41, 'Test 69');
test(distributeCookies([1,2,4,8,16,32,64,128], 3), 128, 'Test 70');
test(distributeCookies([100,100,100,100,100,100,100,100], 5), 200, 'Test 71');
test(distributeCookies([12,23,34,45,56,67,78,89], 3), 135, 'Test 72');
test(distributeCookies([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000], 4), 200000, 'Test 73');
test(distributeCookies([10,20,30,40,50,60,70,80], 6), 80, 'Test 74');
test(distributeCookies([7,8,9,10,11,12,13,14], 6), 17, 'Test 75');
test(distributeCookies([100,200,300,400,500,600,700,800], 3), 1200, 'Test 76');
test(distributeCookies([8, 7, 6, 5, 4, 3, 2, 1], 5), 8, 'Test 77');
test(distributeCookies([8, 15, 10, 20, 8, 5, 3, 7], 3), 26, 'Test 78');
test(distributeCookies([5,15,25,35,45,55,65,75], 3), 110, 'Test 79');
test(distributeCookies([1, 2, 3, 4, 5, 6, 7, 8], 8), 8, 'Test 80');
test(distributeCookies([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 8), 10, 'Test 81');
test(distributeCookies([100, 200, 300, 400, 500, 600, 700, 800], 4), 900, 'Test 82');
test(distributeCookies([15, 15, 15, 15, 15, 15, 15, 15], 6), 30, 'Test 83');
test(distributeCookies([100, 200, 300, 400, 500, 600, 700, 800], 5), 800, 'Test 84');
test(distributeCookies([2, 4, 6, 8, 10, 12, 14, 16], 3), 24, 'Test 85');
test(distributeCookies([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000], 2), 18000, 'Test 86');
test(distributeCookies([50,40,30,20,10,5,3,1], 4), 50, 'Test 87');
test(distributeCookies([5, 5, 15, 15, 25, 25, 35, 35], 4), 40, 'Test 88');
test(distributeCookies([15, 15, 15, 15, 15, 15, 15, 15], 2), 60, 'Test 89');
test(distributeCookies([2,2,2,2,2,2,2,2], 7), 4, 'Test 90');
test(distributeCookies([25, 25, 25, 25, 25, 25, 25, 25], 8), 25, 'Test 91');
test(distributeCookies([8, 15, 10, 20, 8, 12, 15, 10], 3), 33, 'Test 92');
test(distributeCookies([8, 1, 2, 3, 4, 5, 6, 7], 2), 18, 'Test 93');
test(distributeCookies([10, 20, 10, 20, 10, 20, 10, 20], 4), 30, 'Test 94');
test(distributeCookies([50,40,30,20,10,1,2,3], 3), 53, 'Test 95');
test(distributeCookies([1,1,2,2,3,3,4,4], 4), 5, 'Test 96');
test(distributeCookies([1,2,3,4,5,6,7,8], 8), 8, 'Test 97');
test(distributeCookies([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 4), 34, 'Test 98');
test(distributeCookies([1,1,1,1,1,1,1,1], 2), 4, 'Test 99');
test(distributeCookies([1,2,3,4,5,6,7,8], 3), 12, 'Test 100');
test(distributeCookies([10,10,20,20,30,30,40,40], 4), 50, 'Test 101');
test(distributeCookies([9, 18, 27, 36, 45, 54, 63, 72], 4), 81, 'Test 102');
test(distributeCookies([8,1,2,3,4,5,6,7], 8), 8, 'Test 103');
test(distributeCookies([100, 200, 300, 400, 500, 600, 700, 800], 7), 800, 'Test 104');

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
