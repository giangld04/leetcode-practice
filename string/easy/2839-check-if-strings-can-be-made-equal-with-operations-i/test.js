// Test: 2839. Check If Strings Can Be Made Equal With Operations I
// 73 test cases from LeetCodeDataset
// Run: node test.js

const { canBeEqual } = require("./solution");

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

console.log("\n2839. Check If Strings Can Be Made Equal With Operations I\n");

test(canBeEqual({"s1": "abcd", "s2": "cdab"}), Error: Solution.canBeEqual[] missing 2 required positional arguments: 's1' and 's2', 'Test 1');
test(canBeEqual({"s1": "abcd", "s2": "dacb"}), Error: Solution.canBeEqual[] missing 2 required positional arguments: 's1' and 's2', 'Test 2');
test(canBeEqual("abcd", "cdab"), true, 'Test 3');
test(canBeEqual("acbd", "bdac"), true, 'Test 4');
test(canBeEqual("abab", "abcd"), false, 'Test 5');
test(canBeEqual({"s1": "abba", "s2": "abba"}), Error: Solution.canBeEqual[] missing 2 required positional arguments: 's1' and 's2', 'Test 6');
test(canBeEqual("abdc", "cdab"), false, 'Test 7');
test(canBeEqual({"s1": "abab", "s2": "baba"}), Error: Solution.canBeEqual[] missing 2 required positional arguments: 's1' and 's2', 'Test 8');
test(canBeEqual("abcd", "dacb"), false, 'Test 9');
test(canBeEqual("abab", "baba"), false, 'Test 10');
test(canBeEqual("abcd", "abcd"), true, 'Test 11');
test(canBeEqual({"s1": "qrst", "s2": "tqrs"}), Error: Solution.canBeEqual[] missing 2 required positional arguments: 's1' and 's2', 'Test 12');
test(canBeEqual("aabb", "bbaa"), true, 'Test 13');
test(canBeEqual({"s1": "aabb", "s2": "bbaa"}), Error: Solution.canBeEqual[] missing 2 required positional arguments: 's1' and 's2', 'Test 14');
test(canBeEqual("abcd", "dcba"), false, 'Test 15');
test(canBeEqual({"s1": "zzyy", "s2": "yyzz"}), Error: Solution.canBeEqual[] missing 2 required positional arguments: 's1' and 's2', 'Test 16');
test(canBeEqual({"s1": "mnop", "s2": "opmn"}), Error: Solution.canBeEqual[] missing 2 required positional arguments: 's1' and 's2', 'Test 17');
test(canBeEqual({"s1": "wxyz", "s2": "yzwx"}), Error: Solution.canBeEqual[] missing 2 required positional arguments: 's1' and 's2', 'Test 18');
test(canBeEqual("zzzz", "zzzz"), true, 'Test 19');
test(canBeEqual({"s1": "aaaa", "s2": "aaaa"}), Error: Solution.canBeEqual[] missing 2 required positional arguments: 's1' and 's2', 'Test 20');
test(canBeEqual("zabc", "cbaz"), false, 'Test 21');
test(canBeEqual("efef", "fefo"), false, 'Test 22');
test(canBeEqual("abcd", "dcab"), false, 'Test 23');
test(canBeEqual("abcd", "dbca"), false, 'Test 24');
test(canBeEqual("qrst", "tqsr"), false, 'Test 25');
test(canBeEqual("mnop", "ponq"), false, 'Test 26');
test(canBeEqual("ijkl", "lkji"), false, 'Test 27');
test(canBeEqual("abcd", "cabd"), false, 'Test 28');
test(canBeEqual("wxxy", "yxwx"), false, 'Test 29');
test(canBeEqual("abcd", "abdc"), false, 'Test 30');
test(canBeEqual("qrst", "tsqr"), false, 'Test 31');
test(canBeEqual("abba", "baab"), true, 'Test 32');
test(canBeEqual("abcd", "cadb"), false, 'Test 33');
test(canBeEqual("abcd", "cdac"), false, 'Test 34');
test(canBeEqual("wxyz", "yxwz"), true, 'Test 35');
test(canBeEqual("abac", "cabd"), false, 'Test 36');
test(canBeEqual("mnop", "npom"), false, 'Test 37');
test(canBeEqual("ijkl", "lkij"), false, 'Test 38');
test(canBeEqual("efgh", "fegh"), false, 'Test 39');
test(canBeEqual("pqrs", "rqps"), true, 'Test 40');
test(canBeEqual("uvwx", "xwvu"), false, 'Test 41');
test(canBeEqual("wxyz", "xywz"), false, 'Test 42');
test(canBeEqual("xyxy", "yxyx"), false, 'Test 43');
test(canBeEqual("efgh", "hgfq"), false, 'Test 44');
test(canBeEqual("abcd", "dbac"), false, 'Test 45');
test(canBeEqual("aabb", "abab"), false, 'Test 46');
test(canBeEqual("mnop", "ponm"), false, 'Test 47');
test(canBeEqual("abcd", "bdca"), false, 'Test 48');
test(canBeEqual("qrst", "tsrf"), false, 'Test 49');
test(canBeEqual("qrst", "tsrq"), false, 'Test 50');
test(canBeEqual("abcd", "badc"), false, 'Test 51');
test(canBeEqual("qrst", "tqrs"), false, 'Test 52');
test(canBeEqual("abcd", "adcb"), true, 'Test 53');
test(canBeEqual("mnop", "pmno"), false, 'Test 54');
test(canBeEqual("abba", "baba"), false, 'Test 55');
test(canBeEqual("abcd", "bacd"), false, 'Test 56');
test(canBeEqual("abca", "acba"), false, 'Test 57');
test(canBeEqual("abcd", "bdac"), false, 'Test 58');
test(canBeEqual("mnop", "onmp"), true, 'Test 59');
test(canBeEqual("lwxy", "xylw"), true, 'Test 60');
test(canBeEqual("zzza", "zzaa"), false, 'Test 61');
test(canBeEqual("abcd", "acdb"), false, 'Test 62');
test(canBeEqual("zzzz", "zzaz"), false, 'Test 63');
test(canBeEqual("aabb", "abba"), true, 'Test 64');
test(canBeEqual("abcd", "acbd"), false, 'Test 65');
test(canBeEqual("wxyz", "xyzw"), false, 'Test 66');
test(canBeEqual("xxyz", "zyxz"), false, 'Test 67');
test(canBeEqual("abcd", "dabc"), false, 'Test 68');
test(canBeEqual("pqrs", "rspq"), true, 'Test 69');
test(canBeEqual("zyxw", "xwyz"), false, 'Test 70');
test(canBeEqual("abcd", "abca"), false, 'Test 71');
test(canBeEqual("abca", "cabd"), false, 'Test 72');
test(canBeEqual("mnop", "nopm"), false, 'Test 73');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

