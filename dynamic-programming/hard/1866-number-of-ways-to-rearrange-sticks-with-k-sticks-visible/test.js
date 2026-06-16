// Test: 1866. Number Of Ways To Rearrange Sticks With K Sticks Visible
// 57 test cases from LeetCodeDataset
// Run: node test.js

const { rearrangeSticks } = require("./solution");

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

console.log("\n1866. Number Of Ways To Rearrange Sticks With K Sticks Visible\n");

test(rearrangeSticks(10, 1), 362880, 'Test 1');
test(rearrangeSticks(1000, 500), 761367694, 'Test 2');
test(rearrangeSticks(7, 4), 735, 'Test 3');
test(rearrangeSticks(1, 1), 1, 'Test 4');
test(rearrangeSticks(3, 2), 3, 'Test 5');
test(rearrangeSticks(100, 50), 768969154, 'Test 6');
test(rearrangeSticks(5, 5), 1, 'Test 7');
test(rearrangeSticks(20, 11), 647427950, 'Test 8');
test(rearrangeSticks(4, 3), 6, 'Test 9');
test(rearrangeSticks(10, 3), 1172700, 'Test 10');
test(rearrangeSticks(400, 200), 321592380, 'Test 11');
test(rearrangeSticks(300, 150), 266738846, 'Test 12');
test(rearrangeSticks(500, 20), 997277428, 'Test 13');
test(rearrangeSticks(200, 100), 515897308, 'Test 14');
test(rearrangeSticks(75, 40), 957213722, 'Test 15');
test(rearrangeSticks(600, 400), 156741878, 'Test 16');
test(rearrangeSticks(90, 45), 884068127, 'Test 17');
test(rearrangeSticks(1000, 999), 499500, 'Test 18');
test(rearrangeSticks(300, 200), 692591146, 'Test 19');
test(rearrangeSticks(70, 35), 834330443, 'Test 20');
test(rearrangeSticks(25, 10), 513911237, 'Test 21');
test(rearrangeSticks(30, 15), 439815546, 'Test 22');
test(rearrangeSticks(900, 40), 539248312, 'Test 23');
test(rearrangeSticks(75, 35), 48172892, 'Test 24');
test(rearrangeSticks(400, 10), 650177568, 'Test 25');
test(rearrangeSticks(800, 200), 252157911, 'Test 26');
test(rearrangeSticks(50, 20), 506372014, 'Test 27');
test(rearrangeSticks(999, 999), 1, 'Test 28');
test(rearrangeSticks(500, 2), 540925953, 'Test 29');
test(rearrangeSticks(700, 350), 411412946, 'Test 30');
test(rearrangeSticks(999, 1), 22779421, 'Test 31');
test(rearrangeSticks(999, 499), 23728871, 'Test 32');
test(rearrangeSticks(900, 450), 911433285, 'Test 33');
test(rearrangeSticks(900, 900), 1, 'Test 34');
test(rearrangeSticks(150, 75), 309130836, 'Test 35');
test(rearrangeSticks(8, 4), 6769, 'Test 36');
test(rearrangeSticks(100, 10), 451985432, 'Test 37');
test(rearrangeSticks(30, 10), 283914142, 'Test 38');
test(rearrangeSticks(750, 100), 677105109, 'Test 39');
test(rearrangeSticks(25, 15), 729045180, 'Test 40');
test(rearrangeSticks(250, 249), 31125, 'Test 41');
test(rearrangeSticks(250, 200), 168555168, 'Test 42');
test(rearrangeSticks(1000, 1000), 1, 'Test 43');
test(rearrangeSticks(1000, 1), 756641425, 'Test 44');
test(rearrangeSticks(15, 7), 409322830, 'Test 45');
test(rearrangeSticks(600, 599), 179700, 'Test 46');
test(rearrangeSticks(800, 300), 156733966, 'Test 47');
test(rearrangeSticks(600, 300), 326283128, 'Test 48');
test(rearrangeSticks(750, 375), 43563744, 'Test 49');
test(rearrangeSticks(700, 30), 785311933, 'Test 50');
test(rearrangeSticks(800, 400), 551599071, 'Test 51');
test(rearrangeSticks(500, 50), 982286335, 'Test 52');
test(rearrangeSticks(999, 500), 975713359, 'Test 53');
test(rearrangeSticks(350, 175), 62253251, 'Test 54');
test(rearrangeSticks(400, 250), 585657508, 'Test 55');
test(rearrangeSticks(500, 250), 112330193, 'Test 56');
test(rearrangeSticks(50, 25), 253549512, 'Test 57');

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
