// Test: 2694. Event Emitter
// Run: node test.js

const { onClickCallback } = require("./solution");

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

console.log("\n2694. Event Emitter\n");

test(onClickCallback(["EventEmitter", "emit", "subscribe", "subscribe", "emit"], [[], ["firstEvent"], ["firstEvent", "function cb1() { return 5; }"],  ["firstEvent", "function cb1() { return 6; }"], ["firstEvent"]]), [[],["emitted",[]],["subscribed"],["subscribed"],["emitted",[5,6]]], 'Example 1: onClickCallback(["EventEmitter", "emit", "subscribe", "subscribe", "emit"], [[], ["firstEvent"], ["firstEvent", "function cb1() { return 5; }"],  ["firstEvent", "function cb1() { return 6; }"], ["firstEvent"]]) → [[],["emitted",[]],["subscribed"],["subscribed"],["emitted",[5,6]]]');
test(onClickCallback(["EventEmitter", "subscribe", "emit", "emit"], [[], ["firstEvent", "function cb1(...args) { return args.join(','); }"], ["firstEvent", [1,2,3]], ["firstEvent", [3,4,6]]]), [[],["subscribed"],["emitted",["1,2,3"]],["emitted",["3,4,6"]]], 'Example 2: onClickCallback(["EventEmitter", "subscribe", "emit", "emit"], [[], ["firstEvent", "function cb1(...args) { return args.join(','); }"], ["firstEvent", [1,2,3]], ["firstEvent", [3,4,6]]]) → [[],["subscribed"],["emitted",["1,2,3"]],["emitted",["3,4,6"]]]');
test(onClickCallback(["EventEmitter", "subscribe", "emit", "unsubscribe", "emit"], [[], ["firstEvent", "(...args) => args.join(',')"], ["firstEvent", [1,2,3]], [0], ["firstEvent", [4,5,6]]]), [[],["subscribed"],["emitted",["1,2,3"]],["unsubscribed",0],["emitted",[]]], 'Example 3: onClickCallback(["EventEmitter", "subscribe", "emit", "unsubscribe", "emit"], [[], ["firstEvent", "(...args) => args.join(',')"], ["firstEvent", [1,2,3]], [0], ["firstEvent", [4,5,6]]]) → [[],["subscribed"],["emitted",["1,2,3"]],["unsubscribed",0],["emitted",[]]]');
test(onClickCallback(["EventEmitter", "subscribe", "subscribe", "unsubscribe", "emit"], [[], ["firstEvent", ", > x + 1"], ["firstEvent", ", > x + 2"], [0], ["firstEvent", [5]]]), [[],["subscribed"],["subscribed"],["unsubscribed",0],["emitted",[7]]], 'Example 4: onClickCallback(["EventEmitter", "subscribe", "subscribe", "unsubscribe", "emit"], [[], ["firstEvent", ", > x + 1"], ["firstEvent", ", > x + 2"], [0], ["firstEvent", [5]]]) → [[],["subscribed"],["subscribed"],["unsubscribed",0],["emitted",[7]]]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

