// Test: 2722. Join Two Arrays by ID
// Run: node test.js

const { join } = require("./solution");

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

console.log("\n2722. Join Two Arrays by ID\n");

test(join([
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
], [
    {"id": 3, "x": 5}
]), [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9},
    {"id": 3, "x": 5}
], 'Example 1: join([
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
], [
    {"id": 3, "x": 5}
]) → [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9},
    {"id": 3, "x": 5}
]');
test(join([
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
], [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]), [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
], 'Example 2: join([
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
], [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]) → [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]');
test(join([
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
], [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]), [
    {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
], 'Example 3: join([
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
], [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]) → [
    {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

