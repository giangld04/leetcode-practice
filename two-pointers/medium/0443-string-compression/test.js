// Test: 443. String Compression
// 25 test cases from LeetCodeDataset
// Run: node test.js

const { compress } = require("./solution");

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

console.log("\n443. String Compression\n");

test(compress(["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"]), 3, 'Test 1');
test(compress(["a","b","c","d","e","f","g","h","i","j"]), 10, 'Test 2');
test(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]), 4, 'Test 3');
test(compress(["a","a","b","b","c","c","c"]), 6, 'Test 4');
test(compress(["a","2","b","2","c","3"]), 6, 'Test 5');
test(compress(["a","a","a","b","b","a","a"]), 6, 'Test 6');
test(compress(["a"]), 1, 'Test 7');
test(compress(["a","b","c"]), 3, 'Test 8');
test(compress(["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c"]), 9, 'Test 9');
test(compress(["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"]), 3, 'Test 10');
test(compress(["a","a","a","b","b","c","c","c","c","d","d","d","d","d","d","d","e","e","f","f","g","g","g","g","g","g","g","g"]), 14, 'Test 11');
test(compress(["a","b","c","a","b","c","a","b","c","a","b","c","a","b","c","a","b","c","a","b"]), 20, 'Test 12');
test(compress(["a","1","1","2","2","2","3","3","3","3","4","4","4","4","4","5","5","5","5","5","5","5","5","5","5"]), 12, 'Test 13');
test(compress(["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"]), 3, 'Test 14');
test(compress(["a","b","b","a","a","a","c","c","c","c","d","d","d","d","d","e","e","e","e","e","e"]), 11, 'Test 15');
test(compress(["a","a","a","a","b","b","b","b","c","c","c","c","a","a","a","a","b","b","b","b","c","c","c","c"]), 12, 'Test 16');
test(compress(["a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b"]), 20, 'Test 17');
test(compress(["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m"]), 3, 'Test 18');
test(compress(["a","a","a","b","b","b","c","c","c","d","d","d","e","e","e","f","f","f","g","g","g","h","h","h","i","i","i","j","j","j","k","k","k","l","l","l","m","m","m","n","n","n","o","o","o","p","p","p","q","q","q","r","r","r","s","s","s","t","t","t","u","u","u","v","v","v","w","w","w","x","x","x","y","y","y","z","z","z"]), 52, 'Test 19');
test(compress(["a","a","b","b","b","b","c","c","c","c","c","c","d","d","d","d","d","d","d","d","d","d","d","d","d","d"]), 9, 'Test 20');
test(compress(["a","a","b","b","b","b","b","c","c","d","d","d","d","d","d","d","d","d","d","d"]), 9, 'Test 21');
test(compress(["x","y","y","z","z","z","x","y","y","z","z","z","x","y","y","z","z","z","x","y","y","z","z","z"]), 20, 'Test 22');
test(compress(["x","x","x","y","y","z","z","z","z","z","w","w","w","w","w","w","w","w","w","w","w","w"]), 9, 'Test 23');
test(compress(["a","b","c","a","b","c","a","b","c","a","b","c","a","b","c","a","b","c","a","b","c","a","b","c"]), 24, 'Test 24');
test(compress(["a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b"]), 82, 'Test 25');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

