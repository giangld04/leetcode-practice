// Test: 670. Maximum Swap
// 119 test cases from LeetCodeDataset
// Run: node test.js

const { maximumSwap } = require("./solution");

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

console.log("\n670. Maximum Swap\n");

test(maximumSwap(9), 9, 'Test 1');
test(maximumSwap(987654321), 987654321, 'Test 2');
test(maximumSwap(123456789), 923456781, 'Test 3');
test(maximumSwap(12), 21, 'Test 4');
test(maximumSwap(21), 21, 'Test 5');
test(maximumSwap(0), 0, 'Test 6');
test(maximumSwap(98368), 98863, 'Test 7');
test(maximumSwap(1099511628), 9091511628, 'Test 8');
test(maximumSwap(11111), 11111, 'Test 9');
test(maximumSwap(1111), 1111, 'Test 10');
test(maximumSwap(9973), 9973, 'Test 11');
test(maximumSwap(1099511627776), 9091511627776, 'Test 12');
test(maximumSwap(1993), 9913, 'Test 13');
test(maximumSwap(100), 100, 'Test 14');
test(maximumSwap(2736), 7236, 'Test 15');
test(maximumSwap(1099511625), 9091511625, 'Test 16');
test(maximumSwap(567894321), 967854321, 'Test 17');
test(maximumSwap(654321789), 954321786, 'Test 18');
test(maximumSwap(33221100), 33221100, 'Test 19');
test(maximumSwap(98765456789), 99765456788, 'Test 20');
test(maximumSwap(1000000000), 1000000000, 'Test 21');
test(maximumSwap(199983), 999183, 'Test 22');
test(maximumSwap(5639953), 9639553, 'Test 23');
test(maximumSwap(123321321), 323321121, 'Test 24');
test(maximumSwap(9876554321), 9876554321, 'Test 25');
test(maximumSwap(12321), 32121, 'Test 26');
test(maximumSwap(101010101), 111010100, 'Test 27');
test(maximumSwap(900000000), 900000000, 'Test 28');
test(maximumSwap(109090909), 909090901, 'Test 29');
test(maximumSwap(222222221), 222222221, 'Test 30');
test(maximumSwap(9834321), 9843321, 'Test 31');
test(maximumSwap(199999), 999991, 'Test 32');
test(maximumSwap(98877665544332211), 98877665544332211, 'Test 33');
test(maximumSwap(4201), 4210, 'Test 34');
test(maximumSwap(111111119), 911111111, 'Test 35');
test(maximumSwap(32123), 33122, 'Test 36');
test(maximumSwap(583214769), 983214765, 'Test 37');
test(maximumSwap(319872654), 913872654, 'Test 38');
test(maximumSwap(333333), 333333, 'Test 39');
test(maximumSwap(891234567), 981234567, 'Test 40');
test(maximumSwap(22773388), 82773382, 'Test 41');
test(maximumSwap(111222333), 311222331, 'Test 42');
test(maximumSwap(98765), 98765, 'Test 43');
test(maximumSwap(1119111), 9111111, 'Test 44');
test(maximumSwap(111111112), 211111111, 'Test 45');
test(maximumSwap(999999990), 999999990, 'Test 46');
test(maximumSwap(2736589), 9736582, 'Test 47');
test(maximumSwap(109890), 909810, 'Test 48');
test(maximumSwap(432109876), 932104876, 'Test 49');
test(maximumSwap(983476521), 987436521, 'Test 50');
test(maximumSwap(34521), 54321, 'Test 51');
test(maximumSwap(33333333), 33333333, 'Test 52');
test(maximumSwap(1098765432), 9018765432, 'Test 53');
test(maximumSwap(239187654), 932187654, 'Test 54');
test(maximumSwap(987654321987654321), 997654321887654321, 'Test 55');
test(maximumSwap(227368), 827362, 'Test 56');
test(maximumSwap(1122334455), 5122334451, 'Test 57');
test(maximumSwap(999999999), 999999999, 'Test 58');
test(maximumSwap(564999), 964995, 'Test 59');
test(maximumSwap(1000000), 1000000, 'Test 60');
test(maximumSwap(898989898), 998989888, 'Test 61');
test(maximumSwap(983210987), 993210887, 'Test 62');
test(maximumSwap(98769876), 99768876, 'Test 63');
test(maximumSwap(765432198), 965432178, 'Test 64');
test(maximumSwap(222222222), 222222222, 'Test 65');
test(maximumSwap(199321123), 991321123, 'Test 66');
test(maximumSwap(100000000), 100000000, 'Test 67');
test(maximumSwap(819293818), 919283818, 'Test 68');
test(maximumSwap(9876543210), 9876543210, 'Test 69');
test(maximumSwap(1999991), 9999911, 'Test 70');
test(maximumSwap(333333333), 333333333, 'Test 71');
test(maximumSwap(323232323), 333232322, 'Test 72');
test(maximumSwap(53142), 54132, 'Test 73');
test(maximumSwap(100100), 110000, 'Test 74');
test(maximumSwap(1000), 1000, 'Test 75');
test(maximumSwap(100000001), 110000000, 'Test 76');
test(maximumSwap(3333333), 3333333, 'Test 77');
test(maximumSwap(3456432), 6453432, 'Test 78');
test(maximumSwap(543210), 543210, 'Test 79');
test(maximumSwap(99999999), 99999999, 'Test 80');
test(maximumSwap(54321), 54321, 'Test 81');
test(maximumSwap(11234321), 41231321, 'Test 82');
test(maximumSwap(333322221111), 333322221111, 'Test 83');
test(maximumSwap(999999991), 999999991, 'Test 84');
test(maximumSwap(333321), 333321, 'Test 85');
test(maximumSwap(112233445566778899), 912233445566778891, 'Test 86');
test(maximumSwap(199999999), 999999991, 'Test 87');
test(maximumSwap(111122223333), 311122223331, 'Test 88');
test(maximumSwap(987654321000), 987654321000, 'Test 89');
test(maximumSwap(9834765), 9874365, 'Test 90');
test(maximumSwap(6789876), 9786876, 'Test 91');
test(maximumSwap(599432187), 995432187, 'Test 92');
test(maximumSwap(888888888), 888888888, 'Test 93');
test(maximumSwap(1234321), 4231321, 'Test 94');
test(maximumSwap(1111111111), 1111111111, 'Test 95');
test(maximumSwap(63879456), 93876456, 'Test 96');
test(maximumSwap(1928374655), 9128374655, 'Test 97');
test(maximumSwap(2333333333), 3333333332, 'Test 98');
test(maximumSwap(123321), 323121, 'Test 99');
test(maximumSwap(387654321), 837654321, 'Test 100');
test(maximumSwap(227362), 722362, 'Test 101');
test(maximumSwap(983210), 983210, 'Test 102');
test(maximumSwap(67899876), 97896876, 'Test 103');
test(maximumSwap(2376), 7326, 'Test 104');
test(maximumSwap(1234567890), 9234567810, 'Test 105');
test(maximumSwap(2345321), 5342321, 'Test 106');
test(maximumSwap(892736), 982736, 'Test 107');
test(maximumSwap(983215), 985213, 'Test 108');
test(maximumSwap(1234567899), 9234567891, 'Test 109');
test(maximumSwap(3339333), 9333333, 'Test 110');
test(maximumSwap(88988), 98888, 'Test 111');
test(maximumSwap(1234554321), 5234514321, 'Test 112');
test(maximumSwap(371698542), 971638542, 'Test 113');
test(maximumSwap(98765432100), 98765432100, 'Test 114');
test(maximumSwap(19932), 99132, 'Test 115');
test(maximumSwap(1000001), 1100000, 'Test 116');
test(maximumSwap(9832109876), 9932108876, 'Test 117');
test(maximumSwap(987654320), 987654320, 'Test 118');
test(maximumSwap(227349), 927342, 'Test 119');

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
