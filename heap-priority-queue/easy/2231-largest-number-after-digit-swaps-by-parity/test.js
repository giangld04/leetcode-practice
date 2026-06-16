// Test: 2231. Largest Number After Digit Swaps By Parity
// 78 test cases from LeetCodeDataset
// Run: node test.js

const { largestInteger } = require("./solution");

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

console.log("\n2231. Largest Number After Digit Swaps By Parity\n");

test(largestInteger(24680), 86420, 'Test 1');
test(largestInteger(987654321), 987654321, 'Test 2');
test(largestInteger(13524687), 75386421, 'Test 3');
test(largestInteger(1000000), 1000000, 'Test 4');
test(largestInteger(2222), 2222, 'Test 5');
test(largestInteger(222222), 222222, 'Test 6');
test(largestInteger(111111), 111111, 'Test 7');
test(largestInteger(1111), 1111, 'Test 8');
test(largestInteger(975318642), 975318642, 'Test 9');
test(largestInteger(13579), 97531, 'Test 10');
test(largestInteger(2468), 8642, 'Test 11');
test(largestInteger(135246), 531642, 'Test 12');
test(largestInteger(111), 111, 'Test 13');
test(largestInteger(1234), 3412, 'Test 14');
test(largestInteger(65875), 87655, 'Test 15');
test(largestInteger(1919191919), 9999911111, 'Test 16');
test(largestInteger(9753186420), 9753186420, 'Test 17');
test(largestInteger(1234567890123456789), 9898767654543232101, 'Test 18');
test(largestInteger(8642086420), 8866442200, 'Test 19');
test(largestInteger(5432109876), 9876543210, 'Test 20');
test(largestInteger(31415926535), 95655342311, 'Test 21');
test(largestInteger(1111111111), 1111111111, 'Test 22');
test(largestInteger(13579246801357924680), 99775886645331142200, 'Test 23');
test(largestInteger(2222222222), 2222222222, 'Test 24');
test(largestInteger(1928374655), 9786554231, 'Test 25');
test(largestInteger(111111111122222222223333333333444444444455555555556666666666777777777788888888889999999999), 999999999988888888887777777777666666666655555555554444444444333333333322222222221111111111, 'Test 26');
test(largestInteger(1010101010), 1010101010, 'Test 27');
test(largestInteger(198765432), 978563412, 'Test 28');
test(largestInteger(1357913579), 9977553311, 'Test 29');
test(largestInteger(10203040506070809), 98647200500030001, 'Test 30');
test(largestInteger(1000000000), 1000000000, 'Test 31');
test(largestInteger(123456789), 987654321, 'Test 32');
test(largestInteger(9876543210), 9876543210, 'Test 33');
test(largestInteger(111333555777), 777555333111, 'Test 34');
test(largestInteger(333111555777), 777555333111, 'Test 35');
test(largestInteger(222444666888), 888666444222, 'Test 36');
test(largestInteger(973518642), 975318642, 'Test 37');
test(largestInteger(8282828282), 8888822222, 'Test 38');
test(largestInteger(1000000001), 1000000001, 'Test 39');
test(largestInteger(1234567890987654321), 9898767654543232101, 'Test 40');
test(largestInteger(999888777666555444333222111000), 999888777666555444333222111000, 'Test 41');
test(largestInteger(8246035791), 8642097531, 'Test 42');
test(largestInteger(5656565656565656565), 5656565656565656565, 'Test 43');
test(largestInteger(973159731), 997753311, 'Test 44');
test(largestInteger(1234567890), 9876543210, 'Test 45');
test(largestInteger(111333555777999), 999777555333111, 'Test 46');
test(largestInteger(543210987654321), 987654543232101, 'Test 47');
test(largestInteger(908070605040302010), 986472005000300010, 'Test 48');
test(largestInteger(8642097531), 8642097531, 'Test 49');
test(largestInteger(191928283737), 997788223311, 'Test 50');
test(largestInteger(1098765432), 9876543210, 'Test 51');
test(largestInteger(100200400600800), 186420000000000, 'Test 52');
test(largestInteger(102030405060708090), 986472005000300010, 'Test 53');
test(largestInteger(2468024680), 8866442200, 'Test 54');
test(largestInteger(987654321987654321), 989876765543432121, 'Test 55');
test(largestInteger(59876543210), 97856543210, 'Test 56');
test(largestInteger(2040608000), 8642000000, 'Test 57');
test(largestInteger(555444333222111), 555444333222111, 'Test 58');
test(largestInteger(5555555555), 5555555555, 'Test 59');
test(largestInteger(99887766554433221100), 99887766554433221100, 'Test 60');
test(largestInteger(2468135790), 8642975310, 'Test 61');
test(largestInteger(1133557799), 9977553311, 'Test 62');
test(largestInteger(111222333444555666777888999), 999888777666555444333222111, 'Test 63');
test(largestInteger(111222333444), 333444111222, 'Test 64');
test(largestInteger(7777777777), 7777777777, 'Test 65');
test(largestInteger(98765432101234567890), 98987676545432321010, 'Test 66');
test(largestInteger(9999999999), 9999999999, 'Test 67');
test(largestInteger(9876543211111), 9876543211111, 'Test 68');
test(largestInteger(1357924680), 9753186420, 'Test 69');
test(largestInteger(111122223333444455556666777788889999), 999988887777666655554444333322221111, 'Test 70');
test(largestInteger(1938765420), 9758361420, 'Test 71');
test(largestInteger(9735186420), 9753186420, 'Test 72');
test(largestInteger(987654321098765432109876543210), 989898767676545454323232101010, 'Test 73');
test(largestInteger(9999999999888888888877777777776666666666555555555544444444443333333333222222222211111111110000000000), 9999999999888888888877777777776666666666555555555544444444443333333333222222222211111111110000000000, 'Test 74');
test(largestInteger(2244668800), 8866442200, 'Test 75');
test(largestInteger(112233445566778899), 998877665544332211, 'Test 76');
test(largestInteger(2468013579), 8642097531, 'Test 77');
test(largestInteger(8080808080), 8888800000, 'Test 78');

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
