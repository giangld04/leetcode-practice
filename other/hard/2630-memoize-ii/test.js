// Test: 2630. Memoize II
// Run: node test.js

const { memoize } = require("./solution");

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

console.log("\n2630. Memoize II\n");

test(memoize(() => [[2,2],[2,2],[1,2]], function (a, b) { return a + b; }), [{"val":4,"calls":1},{"val":4,"calls":1},{"val":3,"calls":2}], 'Example 1: memoize(() => [[2,2],[2,2],[1,2]], function (a, b) { return a + b; }) → [{"val":4,"calls":1},{"val":4,"calls":1},{"val":3,"calls":2}]');
test(memoize(() => [[{},{}],[{},{}],[{},{}]], function (a, b) { return ({...a, ...b}); }), [{"val":{},"calls":1},{"val":{},"calls":2},{"val":{},"calls":3}], 'Example 2: memoize(() => [[{},{}],[{},{}],[{},{}]], function (a, b) { return ({...a, ...b}); }) → [{"val":{},"calls":1},{"val":{},"calls":2},{"val":{},"calls":3}]');
test(memoize(() => { const, {}; return [[o,o],[o,o],[o,o]]; }, function (a, b) { return ({...a, ...b}); }), [{"val":{},"calls":1},{"val":{},"calls":1},{"val":{},"calls":1}], 'Example 3: memoize(() => { const, {}; return [[o,o],[o,o],[o,o]]; }, function (a, b) { return ({...a, ...b}); }) → [{"val":{},"calls":1},{"val":{},"calls":1},{"val":{},"calls":1}]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

