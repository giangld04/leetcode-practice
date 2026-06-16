// Test: 1414. Find The Minimum Number Of Fibonacci Numbers Whose Sum Is K
// 70 test cases from LeetCodeDataset
// Run: node test.js

const { findMinFibonacciNumbers } = require("./solution");

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

console.log("\n1414. Find The Minimum Number Of Fibonacci Numbers Whose Sum Is K\n");

test(findMinFibonacciNumbers(433494437), 1, 'Test 1');
test(findMinFibonacciNumbers(377), 1, 'Test 2');
test(findMinFibonacciNumbers(6765), 1, 'Test 3');
test(findMinFibonacciNumbers(24157817), 1, 'Test 4');
test(findMinFibonacciNumbers(102334155), 1, 'Test 5');
test(findMinFibonacciNumbers(89), 1, 'Test 6');
test(findMinFibonacciNumbers(121393), 1, 'Test 7');
test(findMinFibonacciNumbers(500), 3, 'Test 8');
test(findMinFibonacciNumbers(514229), 1, 'Test 9');
test(findMinFibonacciNumbers(50), 3, 'Test 10');
test(findMinFibonacciNumbers(39088169), 1, 'Test 11');
test(findMinFibonacciNumbers(21), 1, 'Test 12');
test(findMinFibonacciNumbers(2584), 1, 'Test 13');
test(findMinFibonacciNumbers(2178309), 1, 'Test 14');
test(findMinFibonacciNumbers(100), 3, 'Test 15');
test(findMinFibonacciNumbers(46368), 1, 'Test 16');
test(findMinFibonacciNumbers(233), 1, 'Test 17');
test(findMinFibonacciNumbers(63245986), 1, 'Test 18');
test(findMinFibonacciNumbers(1000000000), 14, 'Test 19');
test(findMinFibonacciNumbers(7), 2, 'Test 20');
test(findMinFibonacciNumbers(13), 1, 'Test 21');
test(findMinFibonacciNumbers(144), 1, 'Test 22');
test(findMinFibonacciNumbers(701408733), 1, 'Test 23');
test(findMinFibonacciNumbers(55), 1, 'Test 24');
test(findMinFibonacciNumbers(5702887), 1, 'Test 25');
test(findMinFibonacciNumbers(196418), 1, 'Test 26');
test(findMinFibonacciNumbers(2), 1, 'Test 27');
test(findMinFibonacciNumbers(28657), 1, 'Test 28');
test(findMinFibonacciNumbers(14930352), 1, 'Test 29');
test(findMinFibonacciNumbers(4), 2, 'Test 30');
test(findMinFibonacciNumbers(4181), 1, 'Test 31');
test(findMinFibonacciNumbers(3524578), 1, 'Test 32');
test(findMinFibonacciNumbers(17711), 1, 'Test 33');
test(findMinFibonacciNumbers(34), 1, 'Test 34');
test(findMinFibonacciNumbers(10946), 1, 'Test 35');
test(findMinFibonacciNumbers(1), 1, 'Test 36');
test(findMinFibonacciNumbers(19), 3, 'Test 37');
test(findMinFibonacciNumbers(165580141), 1, 'Test 38');
test(findMinFibonacciNumbers(3), 1, 'Test 39');
test(findMinFibonacciNumbers(610), 1, 'Test 40');
test(findMinFibonacciNumbers(8), 1, 'Test 41');
test(findMinFibonacciNumbers(317811), 1, 'Test 42');
test(findMinFibonacciNumbers(1346269), 1, 'Test 43');
test(findMinFibonacciNumbers(10), 2, 'Test 44');
test(findMinFibonacciNumbers(9227465), 1, 'Test 45');
test(findMinFibonacciNumbers(832040), 1, 'Test 46');
test(findMinFibonacciNumbers(1597), 1, 'Test 47');
test(findMinFibonacciNumbers(1000000), 5, 'Test 48');
test(findMinFibonacciNumbers(75025), 1, 'Test 49');
test(findMinFibonacciNumbers(1000), 2, 'Test 50');
test(findMinFibonacciNumbers(267914296), 1, 'Test 51');
test(findMinFibonacciNumbers(5), 1, 'Test 52');
test(findMinFibonacciNumbers(987), 1, 'Test 53');
test(findMinFibonacciNumbers(35), 2, 'Test 54');
test(findMinFibonacciNumbers(123456789), 12, 'Test 55');
test(findMinFibonacciNumbers(1234567), 10, 'Test 56');
test(findMinFibonacciNumbers(863999999), 13, 'Test 57');
test(findMinFibonacciNumbers(12586269025), 1, 'Test 58');
test(findMinFibonacciNumbers(1134903170), 1, 'Test 59');
test(findMinFibonacciNumbers(555555555), 11, 'Test 60');
test(findMinFibonacciNumbers(2123366401), 14, 'Test 61');
test(findMinFibonacciNumbers(340513), 7, 'Test 62');
test(findMinFibonacciNumbers(1836311903), 1, 'Test 63');
test(findMinFibonacciNumbers(104941883), 11, 'Test 64');
test(findMinFibonacciNumbers(999999999), 13, 'Test 65');
test(findMinFibonacciNumbers(470001109), 13, 'Test 66');
test(findMinFibonacciNumbers(55555555), 11, 'Test 67');
test(findMinFibonacciNumbers(2971215073), 1, 'Test 68');
test(findMinFibonacciNumbers(123456), 4, 'Test 69');
test(findMinFibonacciNumbers(987654321), 15, 'Test 70');

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
