// Test: 3606. Coupon Code Validator
// Run: node test.js

const { validateCoupons } = require("./solution");

let passed = 0, failed = 0;
function test(actual, expected, label) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    console.log(`  ✓ ${label}`);
    passed++;
  } else {
    console.log(`  ✗ ${label}`);
    console.log(`    Expected: ${e}`);
    console.log(`    Actual:   ${a}`);
    failed++;
  }
}

console.log("\n3606. Coupon Code Validator\n");

test(validateCoupons(["SAVE20","","PHARMA5","SAVE@20"], ["restaurant","grocery","pharmacy","restaurant"], [true,true,true,true]), ["PHARMA5","SAVE20"], 'Example 1: validateCoupons(["SAVE20","","PHARMA5","SAVE@20"], ["restaurant","grocery","pharmacy","restaurant"], [true,true,true,true]) → ["PHARMA5","SAVE20"]');
test(validateCoupons(["GROCERY15","ELECTRONICS_50","DISCOUNT10"], ["grocery","electronics","invalid"], [false,true,true]), ["ELECTRONICS_50"], 'Example 2: validateCoupons(["GROCERY15","ELECTRONICS_50","DISCOUNT10"], ["grocery","electronics","invalid"], [false,true,true]) → ["ELECTRONICS_50"]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
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
