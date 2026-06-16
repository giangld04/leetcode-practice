// Test: 2650. Design Cancellable Function
// Run: node test.js

const { cancellable } = require("./solution");

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

console.log("\n2650. Design Cancellable Function\n");

test(cancellable(function*() { 
  return 42; 
}, 100), {"resolved": 42}, 'Example 1: cancellable(function*() { 
  return 42; 
}, 100) → {"resolved": 42}');
test(cancellable(function*() { 
  const, yield new Promise(, > res("Hello")); 
  throw `Error: ${msg}`; 
}, null), {"rejected": "Error: Hello"}, 'Example 2: cancellable(function*() { 
  const, yield new Promise(, > res("Hello")); 
  throw `Error: ${msg}`; 
}, null) → {"rejected": "Error: Hello"}');
test(cancellable(function*() { 
  yield new Promise(, > setTimeout(res, 200)); 
  return "Success"; 
}, 100), {"rejected": "Cancelled"}, 'Example 3: cancellable(function*() { 
  yield new Promise(, > setTimeout(res, 200)); 
  return "Success"; 
}, 100) → {"rejected": "Cancelled"}');
test(cancellable(function*() { 
  let, 0; 
  yield new Promise(, > setTimeout(res, 100));
  result += yield new Promise(, > res(1)); 
  yield new Promise(, > setTimeout(res, 100)); 
  result += yield new Promise(, > res(1)); 
  return result;
}, null), {"resolved": 2}, 'Example 4: cancellable(function*() { 
  let, 0; 
  yield new Promise(, > setTimeout(res, 100));
  result += yield new Promise(, > res(1)); 
  yield new Promise(, > setTimeout(res, 100)); 
  result += yield new Promise(, > res(1)); 
  return result;
}, null) → {"resolved": 2}');
test(cancellable(function*() { 
  let, 0; 
  try { 
    yield new Promise(, > setTimeout(res, 100)); 
    result += yield new Promise(, > res(1)); 
    yield new Promise(, > setTimeout(res, 100)); 
    result += yield new Promise(, > res(1)); 
  } catch(e) { 
    return result; 
  } 
  return result; 
}, 150), {"resolved": 1}, 'Example 5: cancellable(function*() { 
  let, 0; 
  try { 
    yield new Promise(, > setTimeout(res, 100)); 
    result += yield new Promise(, > res(1)); 
    yield new Promise(, > setTimeout(res, 100)); 
    result += yield new Promise(, > res(1)); 
  } catch(e) { 
    return result; 
  } 
  return result; 
}, 150) → {"resolved": 1}');
test(cancellable(function*() { 
  try { 
    yield new Promise((resolve, reject) => reject("Promise Rejected")); 
  } catch(e) { 
    let, yield new Promise(, > resolve(2));
    let, yield new Promise(, > resolve(2)); 
    return a + b; 
  }; 
}, null), {"resolved": 4}, 'Example 6: cancellable(function*() { 
  try { 
    yield new Promise((resolve, reject) => reject("Promise Rejected")); 
  } catch(e) { 
    let, yield new Promise(, > resolve(2));
    let, yield new Promise(, > resolve(2)); 
    return a + b; 
  }; 
}, null) → {"resolved": 4}');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

