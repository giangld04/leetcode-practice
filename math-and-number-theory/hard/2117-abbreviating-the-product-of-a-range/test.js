// Test: 2117. Abbreviating The Product Of A Range
// 74 test cases from LeetCodeDataset
// Run: node test.js

const { abbreviateProduct } = require("./solution");

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

console.log("\n2117. Abbreviating The Product Of A Range\n");

test(abbreviateProduct(100, 105), 1158727752e3, 'Test 1');
test(abbreviateProduct(1, 10000), 28462...79008e2499, 'Test 2');
test(abbreviateProduct(10, 20), 6704425728e3, 'Test 3');
test(abbreviateProduct(371, 375), 7219856259e3, 'Test 4');
test(abbreviateProduct(1000, 1010), 10563...82688e5, 'Test 5');
test(abbreviateProduct(5000, 5010), 49367...34144e6, 'Test 6');
test(abbreviateProduct(1234, 1238), 28846...40584e1, 'Test 7');
test(abbreviateProduct(999, 1000), 999e3, 'Test 8');
test(abbreviateProduct(1, 10), 36288e2, 'Test 9');
test(abbreviateProduct(1234, 1240), 44318...63424e2, 'Test 10');
test(abbreviateProduct(5, 5), 5e0, 'Test 11');
test(abbreviateProduct(1000, 1000), 1e3, 'Test 12');
test(abbreviateProduct(10, 15), 36036e2, 'Test 13');
test(abbreviateProduct(1000, 1004), 10100...50024e3, 'Test 14');
test(abbreviateProduct(500, 510), 54464...59744e5, 'Test 15');
test(abbreviateProduct(1, 100), 93326...16864e24, 'Test 16');
test(abbreviateProduct(995, 1000), 98508...27388e4, 'Test 17');
test(abbreviateProduct(9995, 10000), 99850...73988e5, 'Test 18');
test(abbreviateProduct(1, 4), 24e0, 'Test 19');
test(abbreviateProduct(2, 11), 399168e2, 'Test 20');
test(abbreviateProduct(500, 505), 16099...69356e4, 'Test 21');
test(abbreviateProduct(5000, 5005), 15671...18506e5, 'Test 22');
test(abbreviateProduct(5, 10), 1512e2, 'Test 23');
test(abbreviateProduct(8000, 8003), 40990...04048e3, 'Test 24');
test(abbreviateProduct(5555, 6666), 28137...34688e279, 'Test 25');
test(abbreviateProduct(9000, 9005), 53232...19508e4, 'Test 26');
test(abbreviateProduct(100, 150), 61219...44768e15, 'Test 27');
test(abbreviateProduct(5, 20), 10137...00736e4, 'Test 28');
test(abbreviateProduct(3000, 3100), 81710...90592e27, 'Test 29');
test(abbreviateProduct(1234, 1244), 10562...94176e2, 'Test 30');
test(abbreviateProduct(1, 5000), 42285...33472e1249, 'Test 31');
test(abbreviateProduct(9000, 9050), 53429...51328e15, 'Test 32');
test(abbreviateProduct(100, 1000), 43116...46048e227, 'Test 33');
test(abbreviateProduct(6000, 6005), 46772...86472e4, 'Test 34');
test(abbreviateProduct(7000, 7020), 57553...63648e7, 'Test 35');
test(abbreviateProduct(100, 200), 84505...02048e27, 'Test 36');
test(abbreviateProduct(1234, 1250), 39811...24736e7, 'Test 37');
test(abbreviateProduct(4000, 4100), 22481...83456e27, 'Test 38');
test(abbreviateProduct(1000, 1050), 35045...20832e15, 'Test 39');
test(abbreviateProduct(4995, 5000), 15578...18494e5, 'Test 40');
test(abbreviateProduct(9500, 10000), 29333...52864e128, 'Test 41');
test(abbreviateProduct(2000, 3000), 25024...18624e252, 'Test 42');
test(abbreviateProduct(6000, 6100), 90528...09184e27, 'Test 43');
test(abbreviateProduct(9995, 10005), 99999...99856e6, 'Test 44');
test(abbreviateProduct(100, 2000), 35534...18272e477, 'Test 45');
test(abbreviateProduct(7000, 7050), 15097...01664e15, 'Test 46');
test(abbreviateProduct(5500, 5510), 14071...33184e5, 'Test 47');
test(abbreviateProduct(9999, 10000), 9999e4, 'Test 48');
test(abbreviateProduct(8000, 8010), 86491...39904e5, 'Test 49');
test(abbreviateProduct(5, 50), 12672...06688e12, 'Test 50');
test(abbreviateProduct(5000, 6000), 31736...43584e253, 'Test 51');
test(abbreviateProduct(8000, 8020), 94684...81312e7, 'Test 52');
test(abbreviateProduct(8000, 9000), 12498...67872e253, 'Test 53');
test(abbreviateProduct(6500, 6530), 17034...07232e10, 'Test 54');
test(abbreviateProduct(3000, 3010), 18042...06464e5, 'Test 55');
test(abbreviateProduct(1000, 9999), 70734...94464e2249, 'Test 56');
test(abbreviateProduct(5000, 5015), 15629...41184e7, 'Test 57');
test(abbreviateProduct(3000, 3025), 28318...52192e9, 'Test 58');
test(abbreviateProduct(1234, 5678), 11390...64288e1112, 'Test 59');
test(abbreviateProduct(1000, 2000), 82415...74464e253, 'Test 60');
test(abbreviateProduct(9000, 9999), 31626...93632e250, 'Test 61');
test(abbreviateProduct(4321, 4325), 15098...31038e2, 'Test 62');
test(abbreviateProduct(8765, 8780), 12301...69504e5, 'Test 63');
test(abbreviateProduct(10000, 10010), 10055...00288e6, 'Test 64');
test(abbreviateProduct(9990, 10000), 99451...72288e6, 'Test 65');
test(abbreviateProduct(2000, 2010), 21050...98176e5, 'Test 66');
test(abbreviateProduct(9990, 9999), 99451...72288e2, 'Test 67');
test(abbreviateProduct(5000, 5050), 57259...77056e16, 'Test 68');
test(abbreviateProduct(2500, 2600), 11420...49216e28, 'Test 69');
test(abbreviateProduct(2500, 2510), 24371...13072e6, 'Test 70');
test(abbreviateProduct(3000, 4000), 13222...08128e254, 'Test 71');
test(abbreviateProduct(1000, 10000), 70734...94464e2253, 'Test 72');
test(abbreviateProduct(7500, 7510), 42545...13216e6, 'Test 73');
test(abbreviateProduct(9000, 9010), 31573...64992e5, 'Test 74');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

