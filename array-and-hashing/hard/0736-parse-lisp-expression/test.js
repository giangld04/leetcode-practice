// Test: 736. Parse Lisp Expression
// 143 test cases from LeetCodeDataset
// Run: node test.js

const { evaluate } = require("./solution");

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

console.log("\n736. Parse Lisp Expression\n");

test(evaluate("[let x 2 [mult x [let x 3 y 4 [add x y]]]]"), 14, 'Test 1');
test(evaluate("[let x 7 [let y 2 [let z 3 [mult x [add y z]]]]]"), 35, 'Test 2');
test(evaluate("[mult [let x 2 [mult 3 x]] [let x 2 [add 4 x]]]"), 36, 'Test 3');
test(evaluate("[let x 0 [let x 1 x] x]"), 1, 'Test 4');
test(evaluate("[add 1 2]"), 3, 'Test 5');
test(evaluate("[mult 3 4]"), 12, 'Test 6');
test(evaluate("[add [let x 1 y 2 x] [mult x y]]"), Error: list index out of range, 'Test 7');
test(evaluate("[let a 5 [let b 6 [let c 7 [mult [add a b] [add b c]]]]]"), 143, 'Test 8');
test(evaluate("[let x 0 [let x 1 x]]"), 1, 'Test 9');
test(evaluate("[mult [add 1 2] [add 3 4]]"), 21, 'Test 10');
test(evaluate("[let x 0 [let x [add 1 x] [let x [mult x 2] x]]]"), 2, 'Test 11');
test(evaluate("[mult [let x 2 [add x 2]] [let y 3 [mult y y]]]"), 36, 'Test 12');
test(evaluate("[let x 1 y [add x 2] [mult x y]]"), 3, 'Test 13');
test(evaluate("[let a 3 b [add a 1] c [mult a b] c]"), 12, 'Test 14');
test(evaluate("[let x 1 y 1 x [add x y] [add x y]]"), 3, 'Test 15');
test(evaluate("[mult [let x 2 y 3] [let x 4 y 5]]"), Error: list index out of range, 'Test 16');
test(evaluate("[let x 1 y 2 x [add x y] [add x y]]"), 5, 'Test 17');
test(evaluate("[let x 3 x 2 x]"), 2, 'Test 18');
test(evaluate("[let x 2 [mult 3 [let x 3 y 4 [add x y]]]]"), 21, 'Test 19');
test(evaluate("[let x 1 [add x [let x 2 [add x [let x 3 [add x 4]]]]]"), 10, 'Test 20');
test(evaluate("[let x 1 [let y 2 [let z 3 [add x [add y z]]]]]"), 6, 'Test 21');
test(evaluate("[let x 1 [mult [let x 2 [add x 2]] x]]"), 4, 'Test 22');
test(evaluate("[mult [let x 5] [let y 2 [add x y]]]"), Error: list index out of range, 'Test 23');
test(evaluate("[let x 7 [let y 2 [let x 3 [add x y]]]]"), 5, 'Test 24');
test(evaluate("[mult [let a 2 b 3 [add a b]] [let c 4 d 5 [mult c d]]]"), 100, 'Test 25');
test(evaluate("[let x 7 [add x 3] [mult x 2]]"), 10, 'Test 26');
test(evaluate("[let x [add 1 2] [mult x 3]]"), 9, 'Test 27');
test(evaluate("[let x 2 [let y 3 [let z [add x y] [mult x z]]]]"), 10, 'Test 28');
test(evaluate("[let a1 3 b2 4 [add a1 b2]]"), 7, 'Test 29');
test(evaluate("[let a1 3 b2 [add a1 1] b2]"), 4, 'Test 30');
test(evaluate("[let x 1 [let y [let z 3 [add z 2]] [mult x y]] [add x y]]"), 5, 'Test 31');
test(evaluate("[let x [let y 2 [mult y 3]] [add x 5]]"), 11, 'Test 32');
test(evaluate("[let x 5 y [add x 3] z [mult x y] [let w 7 [add w [mult x z]]]]"), 207, 'Test 33');
test(evaluate("[let m 8 n [add m 2] o [mult m n] p [add o n] [mult p m]]"), 720, 'Test 34');
test(evaluate("[let a 1 b [let a [add a 1] [mult a a]] [add a b]]"), 5, 'Test 35');
test(evaluate("[let a 1 b 2 c [mult a b] d [add a b] [mult c d]]"), 6, 'Test 36');
test(evaluate("[let x 3 y [mult x 2] z [let w [add x y] [mult w z]] [add x [mult y z]]]"), Error: list index out of range, 'Test 37');
test(evaluate("[let a 1 b [add a 1] c [mult a b] [add c [let a 2 [mult a b]]]]"), 6, 'Test 38');
test(evaluate("[let x 2 [let y [let z [add x 3] [mult z 2]] [add y [let a [add z 4] [mult a 3]]]]"), Error: list index out of range, 'Test 39');
test(evaluate("[let x 5 [let y [mult x 2] [add [let z [add x y]] [mult z [let w [mult y 2]] w]]]]"), Error: list index out of range, 'Test 40');
test(evaluate("[mult [let x 2 [let y 3 [add x y]]] [let x 4 [let y 5 [mult x y]]]]"), 100, 'Test 41');
test(evaluate("[let a 1 b 2 c [add a b] d [mult a c] [add d c]]"), 6, 'Test 42');
test(evaluate("[let x 2 y 3 z [mult x y] [add [let x 5 [mult x y]] [let y 4 [add y z]]]]"), 25, 'Test 43');
test(evaluate("[mult [let x 5 y [mult x 2] [add y 3]] [let z 4 w [add z 1] [mult w 3]]]"), 195, 'Test 44');
test(evaluate("[let a 5 b [add a 3] [mult a b]]"), 40, 'Test 45');
test(evaluate("[let a 1 [let b [add a 1] [let c [mult b 2] [let d [add c 3] [let e [mult d 4] [add e 5]]]]]"), 33, 'Test 46');
test(evaluate("[let m 5 n 10 [let p [add m n] [mult p [let q [mult m n] [add q [let r [add p q] r]]]]]"), 1725, 'Test 47');
test(evaluate("[let x [mult 3 3] y [add 5 5] z [let w [mult x y] [add w 10]] [mult z x]]"), 900, 'Test 48');
test(evaluate("[let a 1 b [let c [mult a a] d [add a a] [mult c d]] e [let f [mult b b] g [add b b] [mult f g]] [add e e]]"), 32, 'Test 49');
test(evaluate("[let a 1 b [add a 1] c [mult b 2] d [add c 3] e [mult d 2] [add e [mult e [add d [mult c [add b a]]]]]]"), 280, 'Test 50');
test(evaluate("[let x 1 [let y [let z [let w [let v 5 [mult v v]] [add w v]] [mult z w]] [add y z]] [add x y]]"), Error: list index out of range, 'Test 51');
test(evaluate("[add [let x 5 [mult x 2]] [let y 3 [mult y 4]]]"), 22, 'Test 52');
test(evaluate("[let a 1 b 2 c 3 d [add a [mult b c]] e [let f 4 [add d [mult f c]]]]"), Error: string index out of range, 'Test 53');
test(evaluate("[let a 10 [let b [mult a 2] [let c [add a b] [let d [mult b c] d]]]]"), 600, 'Test 54');
test(evaluate("[let m 2 [let n [mult m 3] [let o [add m n] [let p [mult m o] [add p [mult n o]]]]]"), 64, 'Test 55');
test(evaluate("[let x 5 [let y 3 [mult [add x y] [let z 2 [add z [mult x y]]]]]"), 136, 'Test 56');
test(evaluate("[let x [add 1 [mult 2 3]] y [let z [mult x 4] [add x [mult y z]]] [mult x [add y z]]]"), Error: list index out of range, 'Test 57');
test(evaluate("[mult [let a 2 b [add a 3] c [mult a b]] [let a 4 b [add a 5] c [mult a b]]]"), Error: list index out of range, 'Test 58');
test(evaluate("[let a [mult 2 3] b [add a 4] c [mult b a] d [add c b] [mult d c]]"), 4200, 'Test 59');
test(evaluate("[let x 5 y 3 [let z [mult x y] [let w [add x z] [mult w [let v [add y z] v]]]]]"), 360, 'Test 60');
test(evaluate("[let x 1 [let y [add x 1] [let z [mult y 2] [let a [add z 3] [let b [mult a 4] [add [mult b 5] [let c [add b 6] [mult c 7]]]]]]]"), 378, 'Test 61');
test(evaluate("[let a 1 b [add a 1] c [mult b 2] d [let e [add c b] [mult e a]] [add d [mult c a]]]"), 10, 'Test 62');
test(evaluate("[mult [let x 2 [let y 3 [let z [add x y] [mult z 4]]]] [let a 5 [let b 6 [let c [add a b] [mult c 7]]]]"), 1540, 'Test 63');
test(evaluate("[let x 7 y [mult x 2] z [add x y] [let w 3 [add w [mult x z]]]]"), 150, 'Test 64');
test(evaluate("[let x 1 y 2 [let x [add x y] y [mult x y] [let z [add x y] [mult x z]]]]"), 27, 'Test 65');
test(evaluate("[let x 1 [let y 2 [let z 3 [let a 4 [let b 5 [let c 6 [let d 7 [let e 8 [let f 9 [add x [mult y [add z [mult a [add b [mult c [add d [mult e f]]]]]]]]]]]]]]]]"), 3839, 'Test 66');
test(evaluate("[let x 10 [let y [add x 5] z [mult y 2] [let a [add z 3] b [mult a 4] [let c [add b 2] [mult c 5]]]]"), 670, 'Test 67');
test(evaluate("[let a 5 b [let a 6 c [let a 7 [mult a b]]] [add a c]]"), Error: list index out of range, 'Test 68');
test(evaluate("[let a [mult 2 3] b [add a 4] c [mult b a] d [add c b] e [mult d c] f [add e b] g [mult f e] h [add g f] i [mult h g] j [add i h]]"), Error: string index out of range, 'Test 69');
test(evaluate("[let x 7 y [add x 2] z [mult x y] [let w [add y z] [mult w x]]]"), 504, 'Test 70');
test(evaluate("[let x 5 y [add x 3] z [mult y 2] [let w [add x y] [mult w z]]]"), 208, 'Test 71');
test(evaluate("[let x 1 [let y [let z [let w [let v 1 [let u 2 [mult u u]]] [mult v v]] [mult w w]] [mult z z]] [mult y y]]"), Error: list index out of range, 'Test 72');
test(evaluate("[let x [let y [let z 3 [add z 1]] [mult y 2]] [mult x 5]]"), 40, 'Test 73');
test(evaluate("[let x 10 [let y [mult x 3] [let z [add x y] [let w [mult y z] [let v [add w z] v]]]]]"), 1240, 'Test 74');
test(evaluate("[let x 1 [let y 2 [let z 3 [let w 4 [add [add x y] [add z w]]]]]]"), 10, 'Test 75');
test(evaluate("[let a 2 b [mult a 3] c [add a b] d [mult b c] [add d c]]"), 56, 'Test 76');
test(evaluate("[mult [add 1 2] [mult 3 4]]"), 36, 'Test 77');
test(evaluate("[let a 1 b [let a 2 [let a 3 [add a b]]] c [let a 4 [mult a b]] [add c [mult a b]]]"), Error: list index out of range, 'Test 78');
test(evaluate("[let x 5 y [add x 3] z [mult x y] [add z [let x 10 [mult x y]]]]"), 120, 'Test 79');
test(evaluate("[let x 1 y [let x 2 z [let x 3 [let w 4 [let v 5 [mult [add [add x y] [add z w]] v]]]]] [add x z]]"), Error: list index out of range, 'Test 80');
test(evaluate("[mult [let x 5 [add [let y 3 [mult x y]] [let z 4 [add x z]]]] [let a 2 [mult [let b 3 [add a b]] [let c 4 [mult b c]]]]"), Error: list index out of range, 'Test 81');
test(evaluate("[let x 10 y [add x 5] z [mult y 2] [let w [add x y] [mult w z]]]"), 750, 'Test 82');
test(evaluate("[let x 5 [let y [add x 3] [mult x y]]]"), 40, 'Test 83');
test(evaluate("[mult [let x 3 [let y 5 [add x y]]] [let a 2 [mult a [let b 4 [add b 1]]]]"), 80, 'Test 84');
test(evaluate("[let x 5 y [let x 10 [add x 5]] z [mult y 2] [add z y]]"), 45, 'Test 85');
test(evaluate("[let x 2 y [let x 3 [let x 4 [add x y]]] z [let x 5 [mult x y]] [add z [mult x y]]]"), Error: list index out of range, 'Test 86');
test(evaluate("[let x 1 [let y 2 [let z 3 [let a [add x y] [let b [mult y z] [add [mult a b] [let c [add a b] [mult c 2]]]]]]]"), 36, 'Test 87');
test(evaluate("[let x 1 [let y [let x 2 [let z 3 [add x z]]] [mult x y]] [add x y]]"), 5, 'Test 88');
test(evaluate("[let x 1 y 2 z 3 a [add x y] b [mult a z] c [add b a] d [mult c b] [add d c] e [mult d a] [add e b]]"), 120, 'Test 89');
test(evaluate("[let x 5 [let y [let z 3 [add x z]] [mult x y]] [let w [add x y] [mult w x]]]"), 40, 'Test 90');
test(evaluate("[let x 1 [let y [add x 1] [let z [mult y 2] [add x [add y z]]]]]"), 7, 'Test 91');
test(evaluate("[let a 1 b 2 c 3 [add [mult a b] [mult b c]]]"), 8, 'Test 92');
test(evaluate("[let x 1 [let y [mult x 2] [let z [add y 3] [mult x [add y z]]]]]"), 7, 'Test 93');
test(evaluate("[let a 2 b [mult a 2] c [let d [add b 1] [mult d 3]] [add c [mult a b]]]"), 23, 'Test 94');
test(evaluate("[let a 1 b 2 [add a b] [mult a b]]"), 3, 'Test 95');
test(evaluate("[let a 5 b [let a 10 [mult a b]] [add a b]]"), Error: list index out of range, 'Test 96');
test(evaluate("[let x 1 y [let x 2 z [let x 3 [add x y]]] [add x z]]"), Error: list index out of range, 'Test 97');
test(evaluate("[mult [let x 2 y [add x 3] z [mult x y]] [let x 4 y [add x 5] z [mult x y]]]"), Error: list index out of range, 'Test 98');
test(evaluate("[let x 7 [let y [add x 3] z [mult y 2] [let w [add z 5] [mult w y]]]]"), 250, 'Test 99');
test(evaluate("[let x 10 y [add x 5] z [mult y 2] [let w [add y z] [mult w x]]]"), 450, 'Test 100');
test(evaluate("[let a 1 b 2 c 3 [add [mult a b] c]]"), 5, 'Test 101');
test(evaluate("[let x 1 [let y 2 [let z 3 [let w 4 [mult [add x y] [mult z w]]]]]]"), 36, 'Test 102');
test(evaluate("[mult [let x 3 [let y 4 [add x y]]] [let x 6 [let y 7 [mult x y]]]]"), 294, 'Test 103');
test(evaluate("[let x 2 y [let x 3 z [add x y]] [mult x z]]"), Error: list index out of range, 'Test 104');
test(evaluate("[let a 1 b 2 c 3 [let d [add a b] e [mult b c] [add d e]]]"), 9, 'Test 105');
test(evaluate("[let a 1 [let b 2 [let a 3 [let b 4 [add [mult a b] [let a 5 [mult a b]]]]]]]"), 32, 'Test 106');
test(evaluate("[let x 5 [let y [mult x 2] [let z [add y 3] [mult x z]]]]"), 65, 'Test 107');
test(evaluate("[add [mult 2 3] [let x 4 [mult x 5]]]"), 26, 'Test 108');
test(evaluate("[let x 1 [let y 2 [let z 3 [let a [add x y] b [mult y z] c [add a b] d [mult b c] [let e [add c d] [mult d e]]]]]"), 3402, 'Test 109');
test(evaluate("[let x 1 [let y 2 [let z 3 [let a [add x y] b [mult y z] c [add a b] [mult b c]]]]]"), 54, 'Test 110');
test(evaluate("[let x 5 y [let x 10 [add x 5]] z [mult y 2] w [add z y] v [mult w z] u [add v w] t [mult u v] s [add t u]]"), Error: string index out of range, 'Test 111');
test(evaluate("[let x [let y [let z 3 [mult z z]] [add y 5]] [mult x x]]"), 196, 'Test 112');
test(evaluate("[mult [let a 3 b [add a 2] c [mult b 2] [add c a]] [let d 4 e [mult d 3] [add e d]]]"), 208, 'Test 113');
test(evaluate("[mult [let x 1 [let y [let z 2 [let w 3 [add [mult x y] [mult z w]]]] [mult x y] [add z w]]] [add x y]]"), Error: list index out of range, 'Test 114');
test(evaluate("[let x 1 [let y [let z 2 [let w 3 [add [mult x y] [mult z w]]]] [mult x y] [add z w]]]"), Error: list index out of range, 'Test 115');
test(evaluate("[mult [let x 7 [let y 3 [add x y]]] [let x 4 [let y 6 [mult x y]]]]"), 240, 'Test 116');
test(evaluate("[let x [let y [let z 1 [let w 2 [let v 3 [mult v v]] [add w v]] [mult z w]] [add y z]] [add x y] [mult x y]]"), Error: list index out of range, 'Test 117');
test(evaluate("[let x 2 [let y [let z 2 [add z z]] [mult x y]] [let a 3 [let b [mult a x] [add b [let c 4 [mult c x]]]]]"), 8, 'Test 118');
test(evaluate("[let x 1 y 2 [let z [add x y] [let w [mult x y] [let u [add z w] u]]]]"), 5, 'Test 119');
test(evaluate("[let a 1 [let b 2 [let c [add a b] [let d [mult b c] [mult c d]]]]"), 18, 'Test 120');
test(evaluate("[let a 1 b 2 c 3 d [add a b] e [add c d] [mult d [let a 5 [add a b]]]]"), 21, 'Test 121');
test(evaluate("[let x 10 [let y [mult x 2] [let z [add x y] [let w [mult y z] [add w z]]]]"), 630, 'Test 122');
test(evaluate("[let x 1 y [let x 2 [let x 3 [add x y]]] z [let x 4 [mult x y]] [add z [mult x y]]]"), Error: list index out of range, 'Test 123');
test(evaluate("[let x 1 [let y [add x 1] [let z [mult y 2] [let w [add x z] [mult w [let v [mult z 2] v]]]]]"), 40, 'Test 124');
test(evaluate("[mult [let a 1 b [let a 2 [mult a b]]] [let a 3 b [let a 4 [add a b]]]]"), Error: list index out of range, 'Test 125');
test(evaluate("[let x 5 y [add x 3] [mult x y]]"), 40, 'Test 126');
test(evaluate("[let x 5 [let y 10 [let z [add x y] [mult z x]]]]"), 75, 'Test 127');
test(evaluate("[let a 1 b [let a 2 [mult a b]] [let a 3 [add a b]] [let a 4 [mult a b]]]"), Error: list index out of range, 'Test 128');
test(evaluate("[let x 10 y [let x 5 [add x 3]] z [mult x y] [add z y]]"), 88, 'Test 129');
test(evaluate("[let x 1 y 2 z 3 a [add x y] b [mult a z] c [add b a] [mult c b]]"), 108, 'Test 130');
test(evaluate("[let x 1 y [let x 2 z [let x 3 [add x y]]] [mult x z]]"), Error: list index out of range, 'Test 131');
test(evaluate("[let a 1 b [let a 2 c [let a 3 [let b 4 [mult [add a b] [let a 5 [add a b]]]]]] [add a c]]"), Error: list index out of range, 'Test 132');
test(evaluate("[let x 1 [let y 2 [let z 3 [add [mult x y] z]]]]"), 5, 'Test 133');
test(evaluate("[let x 10 y [let x 20 z [let x 30 [let w 40 [mult [add x y] [add z w]]]]] [add x z]]"), Error: list index out of range, 'Test 134');
test(evaluate("[let a 1 b 2 c [add a b] [mult c [let b 4 [add a b]]]]"), 15, 'Test 135');
test(evaluate("[let x 1 [let y 2 [let z 3 [add [mult x y] [add y z]]]]]"), 7, 'Test 136');
test(evaluate("[let a 1 b 2 c 3 d 4 e 5 [add [mult a b] [add [mult b c] [add [mult c d] [mult d e]]]]]"), 40, 'Test 137');
test(evaluate("[let a 1 b 2 c 3 d 4 e 5 f 6 g 7 h 8 i 9 j [add a [mult b [add c [mult d [add e [mult f [add g [mult h [add i j]]]]]]]]]]"), Error: list index out of range, 'Test 138');
test(evaluate("[add [let a 1 b [add a 1] c [mult b 2] [add c a]] [let d 4 e [mult d 3] [add e d]]]"), 21, 'Test 139');
test(evaluate("[let z [mult 3 4] w [add z 5] x [let y [mult z w] [add y z]] x]"), 216, 'Test 140');
test(evaluate("[let x 5 [add [mult x 2] [let x 3 [add [mult x 4] [let x 6 [mult x 7]]]]]]"), 64, 'Test 141');
test(evaluate("[let x 5 [let y [add x 2] z [mult y 3] [let w [add z 4] [mult w x]]]]"), 125, 'Test 142');
test(evaluate("[let x [mult 2 3] y [add x 5] [let z [mult x y] [add z [mult x y]]]]"), 132, 'Test 143');

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
