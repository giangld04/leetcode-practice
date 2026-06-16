// Test: 1108. Defanging An Ip Address
// 48 test cases from LeetCodeDataset
// Run: node test.js

const { defangIPaddr } = require("./solution");

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

console.log("\n1108. Defanging An Ip Address\n");

test(defangIPaddr("255.100.50.0"), 255[.]100[.]50[.]0, 'Test 1');
test(defangIPaddr("255.255.255.255"), 255[.]255[.]255[.]255, 'Test 2');
test(defangIPaddr("192.168.1.1"), 192[.]168[.]1[.]1, 'Test 3');
test(defangIPaddr("0.0.0.0"), 0[.]0[.]0[.]0, 'Test 4');
test(defangIPaddr("1.1.1.1"), 1[.]1[.]1[.]1, 'Test 5');
test(defangIPaddr("198.18.0.0"), 198[.]18[.]0[.]0, 'Test 6');
test(defangIPaddr("010.020.030.040"), 010[.]020[.]030[.]040, 'Test 7');
test(defangIPaddr("13.37.13.37"), 13[.]37[.]13[.]37, 'Test 8');
test(defangIPaddr("198.18.0.1"), 198[.]18[.]0[.]1, 'Test 9');
test(defangIPaddr("224.0.0.251"), 224[.]0[.]0[.]251, 'Test 10');
test(defangIPaddr("10.0.0.255"), 10[.]0[.]0[.]255, 'Test 11');
test(defangIPaddr("224.0.0.224"), 224[.]0[.]0[.]224, 'Test 12');
test(defangIPaddr("198.51.100.0"), 198[.]51[.]100[.]0, 'Test 13');
test(defangIPaddr("254.254.254.254"), 254[.]254[.]254[.]254, 'Test 14');
test(defangIPaddr("0.255.0.255"), 0[.]255[.]0[.]255, 'Test 15');
test(defangIPaddr("169.254.1.2"), 169[.]254[.]1[.]2, 'Test 16');
test(defangIPaddr("192.168.100.100"), 192[.]168[.]100[.]100, 'Test 17');
test(defangIPaddr("169.254.169.254"), 169[.]254[.]169[.]254, 'Test 18');
test(defangIPaddr("127.0.0.1"), 127[.]0[.]0[.]1, 'Test 19');
test(defangIPaddr("172.31.255.255"), 172[.]31[.]255[.]255, 'Test 20');
test(defangIPaddr("198.51.100.200"), 198[.]51[.]100[.]200, 'Test 21');
test(defangIPaddr("169.254.0.1"), 169[.]254[.]0[.]1, 'Test 22');
test(defangIPaddr("203.0.113.0"), 203[.]0[.]113[.]0, 'Test 23');
test(defangIPaddr("001.002.003.004"), 001[.]002[.]003[.]004, 'Test 24');
test(defangIPaddr("172.16.0.1"), 172[.]16[.]0[.]1, 'Test 25');
test(defangIPaddr("111.222.333.444"), 111[.]222[.]333[.]444, 'Test 26');
test(defangIPaddr("169.254.0.0"), 169[.]254[.]0[.]0, 'Test 27');
test(defangIPaddr("10.10.10.10"), 10[.]10[.]10[.]10, 'Test 28');
test(defangIPaddr("10.0.0.1"), 10[.]0[.]0[.]1, 'Test 29');
test(defangIPaddr("224.0.0.1"), 224[.]0[.]0[.]1, 'Test 30');
test(defangIPaddr("128.101.101.101"), 128[.]101[.]101[.]101, 'Test 31');
test(defangIPaddr("100.100.100.100"), 100[.]100[.]100[.]100, 'Test 32');
test(defangIPaddr("123.45.67.89"), 123[.]45[.]67[.]89, 'Test 33');
test(defangIPaddr("114.114.114.114"), 114[.]114[.]114[.]114, 'Test 34');
test(defangIPaddr("203.0.113.255"), 203[.]0[.]113[.]255, 'Test 35');
test(defangIPaddr("99.99.99.99"), 99[.]99[.]99[.]99, 'Test 36');
test(defangIPaddr("123.456.789.012"), 123[.]456[.]789[.]012, 'Test 37');
test(defangIPaddr("169.254.100.50"), 169[.]254[.]100[.]50, 'Test 38');
test(defangIPaddr("9.9.9.9"), 9[.]9[.]9[.]9, 'Test 39');
test(defangIPaddr("240.240.240.240"), 240[.]240[.]240[.]240, 'Test 40');
test(defangIPaddr("8.8.8.8"), 8[.]8[.]8[.]8, 'Test 41');
test(defangIPaddr("1.12.123.123"), 1[.]12[.]123[.]123, 'Test 42');
test(defangIPaddr("255.255.255.0"), 255[.]255[.]255[.]0, 'Test 43');
test(defangIPaddr("239.255.255.250"), 239[.]255[.]255[.]250, 'Test 44');
test(defangIPaddr("198.19.255.255"), 198[.]19[.]255[.]255, 'Test 45');
test(defangIPaddr("100.200.050.025"), 100[.]200[.]050[.]025, 'Test 46');
test(defangIPaddr("139.130.4.5"), 139[.]130[.]4[.]5, 'Test 47');
test(defangIPaddr("208.67.222.222"), 208[.]67[.]222[.]222, 'Test 48');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

