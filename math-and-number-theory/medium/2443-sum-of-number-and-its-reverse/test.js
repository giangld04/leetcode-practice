// Test: 2443. Sum Of Number And Its Reverse
// 180 test cases from LeetCodeDataset
// Run: node test.js

const { sumOfNumberAndReverse } = require("./solution");

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

console.log("\n2443. Sum Of Number And Its Reverse\n");

test(sumOfNumberAndReverse(443), true, 'Test 1');
test(sumOfNumberAndReverse(181), true, 'Test 2');
test(sumOfNumberAndReverse(99999), false, 'Test 3');
test(sumOfNumberAndReverse(1001), true, 'Test 4');
test(sumOfNumberAndReverse(0), true, 'Test 5');
test(sumOfNumberAndReverse(63), false, 'Test 6');
test(sumOfNumberAndReverse(1000), false, 'Test 7');
test(sumOfNumberAndReverse(121), true, 'Test 8');
test(sumOfNumberAndReverse(100), false, 'Test 9');
test(sumOfNumberAndReverse(123), false, 'Test 10');
test(sumOfNumberAndReverse(100000), false, 'Test 11');
test(sumOfNumberAndReverse(696), false, 'Test 12');
test(sumOfNumberAndReverse(1101), false, 'Test 13');
test(sumOfNumberAndReverse(999), false, 'Test 14');
test(sumOfNumberAndReverse(67876), true, 'Test 15');
test(sumOfNumberAndReverse(727), true, 'Test 16');
test(sumOfNumberAndReverse(454), false, 'Test 17');
test(sumOfNumberAndReverse(6789), false, 'Test 18');
test(sumOfNumberAndReverse(929), true, 'Test 19');
test(sumOfNumberAndReverse(1202), false, 'Test 20');
test(sumOfNumberAndReverse(767), true, 'Test 21');
test(sumOfNumberAndReverse(646), true, 'Test 22');
test(sumOfNumberAndReverse(1230), false, 'Test 23');
test(sumOfNumberAndReverse(67890), false, 'Test 24');
test(sumOfNumberAndReverse(808), true, 'Test 25');
test(sumOfNumberAndReverse(131), false, 'Test 26');
test(sumOfNumberAndReverse(303), true, 'Test 27');
test(sumOfNumberAndReverse(535), false, 'Test 28');
test(sumOfNumberAndReverse(12345), false, 'Test 29');
test(sumOfNumberAndReverse(606), true, 'Test 30');
test(sumOfNumberAndReverse(101010), true, 'Test 31');
test(sumOfNumberAndReverse(98765432123456789), Execution timed out, 'Test 32');
test(sumOfNumberAndReverse(12321), false, 'Test 33');
test(sumOfNumberAndReverse(252), false, 'Test 34');
test(sumOfNumberAndReverse(474), false, 'Test 35');
test(sumOfNumberAndReverse(343), true, 'Test 36');
test(sumOfNumberAndReverse(434), false, 'Test 37');
test(sumOfNumberAndReverse(868), true, 'Test 38');
test(sumOfNumberAndReverse(56789), false, 'Test 39');
test(sumOfNumberAndReverse(171), false, 'Test 40');
test(sumOfNumberAndReverse(797), false, 'Test 41');
test(sumOfNumberAndReverse(22222), true, 'Test 42');
test(sumOfNumberAndReverse(101), true, 'Test 43');
test(sumOfNumberAndReverse(12345678987654321), Execution timed out, 'Test 44');
test(sumOfNumberAndReverse(987654), false, 'Test 45');
test(sumOfNumberAndReverse(8008), true, 'Test 46');
test(sumOfNumberAndReverse(86420), false, 'Test 47');
test(sumOfNumberAndReverse(50005), true, 'Test 48');
test(sumOfNumberAndReverse(666), true, 'Test 49');
test(sumOfNumberAndReverse(939), false, 'Test 50');
test(sumOfNumberAndReverse(585), true, 'Test 51');
test(sumOfNumberAndReverse(440044), true, 'Test 52');
test(sumOfNumberAndReverse(2002), true, 'Test 53');
test(sumOfNumberAndReverse(393), false, 'Test 54');
test(sumOfNumberAndReverse(222), true, 'Test 55');
test(sumOfNumberAndReverse(98765), false, 'Test 56');
test(sumOfNumberAndReverse(151), false, 'Test 57');
test(sumOfNumberAndReverse(99009), false, 'Test 58');
test(sumOfNumberAndReverse(11), true, 'Test 59');
test(sumOfNumberAndReverse(959), false, 'Test 60');
test(sumOfNumberAndReverse(654321), false, 'Test 61');
test(sumOfNumberAndReverse(5050), false, 'Test 62');
test(sumOfNumberAndReverse(8228), true, 'Test 63');
test(sumOfNumberAndReverse(414), false, 'Test 64');
test(sumOfNumberAndReverse(67676), true, 'Test 65');
test(sumOfNumberAndReverse(876543), false, 'Test 66');
test(sumOfNumberAndReverse(898), false, 'Test 67');
test(sumOfNumberAndReverse(87654321), Execution timed out, 'Test 68');
test(sumOfNumberAndReverse(292), false, 'Test 69');
test(sumOfNumberAndReverse(878), false, 'Test 70');
test(sumOfNumberAndReverse(1331), true, 'Test 71');
test(sumOfNumberAndReverse(89898), true, 'Test 72');
test(sumOfNumberAndReverse(141), true, 'Test 73');
test(sumOfNumberAndReverse(80708), false, 'Test 74');
test(sumOfNumberAndReverse(191), false, 'Test 75');
test(sumOfNumberAndReverse(55555), false, 'Test 76');
test(sumOfNumberAndReverse(282), true, 'Test 77');
test(sumOfNumberAndReverse(575), false, 'Test 78');
test(sumOfNumberAndReverse(919), false, 'Test 79');
test(sumOfNumberAndReverse(848), true, 'Test 80');
test(sumOfNumberAndReverse(550055), true, 'Test 81');
test(sumOfNumberAndReverse(123456), false, 'Test 82');
test(sumOfNumberAndReverse(6006), true, 'Test 83');
test(sumOfNumberAndReverse(828), true, 'Test 84');
test(sumOfNumberAndReverse(262), true, 'Test 85');
test(sumOfNumberAndReverse(272), false, 'Test 86');
test(sumOfNumberAndReverse(353), false, 'Test 87');
test(sumOfNumberAndReverse(818), false, 'Test 88');
test(sumOfNumberAndReverse(110011), true, 'Test 89');
test(sumOfNumberAndReverse(525), true, 'Test 90');
test(sumOfNumberAndReverse(9), false, 'Test 91');
test(sumOfNumberAndReverse(43211234), true, 'Test 92');
test(sumOfNumberAndReverse(330033), true, 'Test 93');
test(sumOfNumberAndReverse(979), false, 'Test 94');
test(sumOfNumberAndReverse(424), true, 'Test 95');
test(sumOfNumberAndReverse(99990), false, 'Test 96');
test(sumOfNumberAndReverse(456654), true, 'Test 97');
test(sumOfNumberAndReverse(616), false, 'Test 98');
test(sumOfNumberAndReverse(707), true, 'Test 99');
test(sumOfNumberAndReverse(66666), true, 'Test 100');
test(sumOfNumberAndReverse(595), false, 'Test 101');
test(sumOfNumberAndReverse(100001), true, 'Test 102');
test(sumOfNumberAndReverse(88888), true, 'Test 103');
test(sumOfNumberAndReverse(1221), true, 'Test 104');
test(sumOfNumberAndReverse(323), true, 'Test 105');
test(sumOfNumberAndReverse(555), false, 'Test 106');
test(sumOfNumberAndReverse(383), true, 'Test 107');
test(sumOfNumberAndReverse(888), true, 'Test 108');
test(sumOfNumberAndReverse(100100), false, 'Test 109');
test(sumOfNumberAndReverse(757), false, 'Test 110');
test(sumOfNumberAndReverse(636), false, 'Test 111');
test(sumOfNumberAndReverse(313), false, 'Test 112');
test(sumOfNumberAndReverse(464), true, 'Test 113');
test(sumOfNumberAndReverse(494), false, 'Test 114');
test(sumOfNumberAndReverse(717), false, 'Test 115');
test(sumOfNumberAndReverse(7007), true, 'Test 116');
test(sumOfNumberAndReverse(686), true, 'Test 117');
test(sumOfNumberAndReverse(9009), true, 'Test 118');
test(sumOfNumberAndReverse(60006), true, 'Test 119');
test(sumOfNumberAndReverse(20202), true, 'Test 120');
test(sumOfNumberAndReverse(24680), false, 'Test 121');
test(sumOfNumberAndReverse(737), false, 'Test 122');
test(sumOfNumberAndReverse(8888), true, 'Test 123');
test(sumOfNumberAndReverse(543210), false, 'Test 124');
test(sumOfNumberAndReverse(1), false, 'Test 125');
test(sumOfNumberAndReverse(1010), true, 'Test 126');
test(sumOfNumberAndReverse(545), true, 'Test 127');
test(sumOfNumberAndReverse(656), false, 'Test 128');
test(sumOfNumberAndReverse(909), true, 'Test 129');
test(sumOfNumberAndReverse(565), true, 'Test 130');
test(sumOfNumberAndReverse(232), false, 'Test 131');
test(sumOfNumberAndReverse(54321), false, 'Test 132');
test(sumOfNumberAndReverse(98789), false, 'Test 133');
test(sumOfNumberAndReverse(45454), true, 'Test 134');
test(sumOfNumberAndReverse(50505), false, 'Test 135');
test(sumOfNumberAndReverse(11111), false, 'Test 136');
test(sumOfNumberAndReverse(90000), false, 'Test 137');
test(sumOfNumberAndReverse(45654), true, 'Test 138');
test(sumOfNumberAndReverse(78987), false, 'Test 139');
test(sumOfNumberAndReverse(676), false, 'Test 140');
test(sumOfNumberAndReverse(6789876), false, 'Test 141');
test(sumOfNumberAndReverse(1234321), true, 'Test 142');
test(sumOfNumberAndReverse(505), true, 'Test 143');
test(sumOfNumberAndReverse(363), true, 'Test 144');
test(sumOfNumberAndReverse(123321), true, 'Test 145');
test(sumOfNumberAndReverse(949), true, 'Test 146');
test(sumOfNumberAndReverse(1020), false, 'Test 147');
test(sumOfNumberAndReverse(220022), true, 'Test 148');
test(sumOfNumberAndReverse(838), false, 'Test 149');
test(sumOfNumberAndReverse(161), true, 'Test 150');
test(sumOfNumberAndReverse(33333), false, 'Test 151');
test(sumOfNumberAndReverse(626), true, 'Test 152');
test(sumOfNumberAndReverse(444), true, 'Test 153');
test(sumOfNumberAndReverse(13579), false, 'Test 154');
test(sumOfNumberAndReverse(787), true, 'Test 155');
test(sumOfNumberAndReverse(202), true, 'Test 156');
test(sumOfNumberAndReverse(75309), false, 'Test 157');
test(sumOfNumberAndReverse(373), false, 'Test 158');
test(sumOfNumberAndReverse(333), false, 'Test 159');
test(sumOfNumberAndReverse(22), true, 'Test 160');
test(sumOfNumberAndReverse(50000), false, 'Test 161');
test(sumOfNumberAndReverse(404), true, 'Test 162');
test(sumOfNumberAndReverse(13531), false, 'Test 163');
test(sumOfNumberAndReverse(989), true, 'Test 164');
test(sumOfNumberAndReverse(2022), false, 'Test 165');
test(sumOfNumberAndReverse(10101), false, 'Test 166');
test(sumOfNumberAndReverse(858), false, 'Test 167');
test(sumOfNumberAndReverse(111), false, 'Test 168');
test(sumOfNumberAndReverse(484), true, 'Test 169');
test(sumOfNumberAndReverse(515), false, 'Test 170');
test(sumOfNumberAndReverse(242), true, 'Test 171');
test(sumOfNumberAndReverse(50050), false, 'Test 172');
test(sumOfNumberAndReverse(777), false, 'Test 173');
test(sumOfNumberAndReverse(54545), false, 'Test 174');
test(sumOfNumberAndReverse(969), true, 'Test 175');
test(sumOfNumberAndReverse(747), true, 'Test 176');
test(sumOfNumberAndReverse(5005), true, 'Test 177');
test(sumOfNumberAndReverse(9999), true, 'Test 178');
test(sumOfNumberAndReverse(212), false, 'Test 179');
test(sumOfNumberAndReverse(10000), false, 'Test 180');

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
