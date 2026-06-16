// Test: 722. Remove Comments
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { removeComments } = require("./solution");

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

console.log("\n722. Remove Comments\n");

test(removeComments(["/* This is a comment // with a line comment inside the block comment */", "int, 10;", "cout << \"Hello World\";", "}"]), ['int x = 10;', 'cout << "Hello World";', '}'], 'Test 1');
test(removeComments(["int main[] {", "    printf[\"Hello World\"]; // This is a comment", "}" ]), ['int main[] {', '    printf["Hello World"]; ', '}'], 'Test 2');
test(removeComments(["int main[] {", "/* Start of block comment \" /* still in block comment */ end of block comment */", "int, 10;", "cout << \"Hello World\";", "}"]), ['int main[] {', ' end of block comment */', 'int x = 10;', 'cout << "Hello World";', '}'], 'Test 3');
test(removeComments(["int, 10;", "// This is a line comment", "int, 20;" ]), ['int x = 10;', 'int y = 20;'], 'Test 4');
test(removeComments(["/* This is a block comment", "and this is the second line", "and the third line */", "int, 30;" ]), ['int z = 30;'], 'Test 5');
test(removeComments(["/*", "block comment", "*/" ]), [], 'Test 6');
test(removeComments(["// This is a single line comment", "int, 10; // this is also a comment", "/* This is a block comment", "   that continues", "   on multiple lines */", "int, 20;" ]), ['int x = 10; ', 'int y = 20;'], 'Test 7');
test(removeComments(["void func[] {", "/* This is a ", "multiline comment */", "int, 10;", "// This is a single line comment", "}"]), ['void func[] {', 'int x = 10;', '}'], 'Test 8');
test(removeComments(["void fun[] {", "   /* Multi", "line", "comment */", "   int, 1;", "}" ]), ['void fun[] {', '   ', '   int k = 1;', '}'], 'Test 9');
test(removeComments(["/* comment /* nested comment */ end of comment */", "int, 1;" ]), [' end of comment */', 'int x = 1;'], 'Test 10');
test(removeComments(["#include <iostream>", "/* Start of block comment", "still in block comment", "end of block comment */", "int main[] {", "cout << \"Hello World\";", "// This line should be printed", "}"]), ['#include <iostream>', 'int main[] {', 'cout << "Hello World";', '}'], 'Test 11');
test(removeComments(["/*Test program */", "int main[]", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", ", b + c;", "}"]), ['int main[]', '{ ', '  ', 'int a, b, c;', 'a = b + c;', '}'], 'Test 12');
test(removeComments(["int main[] {", "int, 10; // This is a line comment", "cout << \"Hello World\";", "}"]), ['int main[] {', 'int x = 10; ', 'cout << "Hello World";', '}'], 'Test 13');
test(removeComments(["int, 10;", "// This is a line comment", "x++;", "/* This is a block comment", "x--;", "*/", "return x;" ]), ['int x = 10;', 'x++;', 'return x;'], 'Test 14');
test(removeComments(["a/*comment", "line", "more_comment*/b"]), ['ab'], 'Test 15');
test(removeComments(["/*Hello", "World*/", "int main[]" ]), ['int main[]'], 'Test 16');
test(removeComments(["int main[]", "{", "/* This is a test comment", "with multiple", "lines */", "return 0;", "}" ]), ['int main[]', '{', 'return 0;', '}'], 'Test 17');
test(removeComments(["void f[] {", "/* single line block comment */", "}" ]), ['void f[] {', '}'], 'Test 18');
test(removeComments(["class Solution {", "public:", "    vector<int> twoSum[vector<int>& nums, int target] {", "        /*", "        for [int, 0; i < nums.size[]; i++] {", "            for [int, i + 1; j < nums.size[]; j++] {", "                if [nums[i] + nums[j] == target] {", "                    return {i, j};", "                }", "            }", "        }", "        */", "        return {};", "    }", "};"]), ['class Solution {', 'public:', '    vector<int> twoSum[vector<int>& nums, int target] {', '        ', '        return {};', '    }', '};'], 'Test 19');
test(removeComments(["int, 1; // single line comment", "/* int, 2; */", "int, 3;" ]), ['int x = 1; ', 'int z = 3;'], 'Test 20');
test(removeComments(["// comment", "// another comment", "int, 1;" ]), ['int x = 1;'], 'Test 21');
test(removeComments(["/* Comment \" continues on next line", "and ends here */", "int, 1;", "// Single line comment", "int, 2;", "int, 3;"]), ['int a = 1;', 'int b = 2;', 'int c = 3;'], 'Test 22');
test(removeComments(["/* This is a block comment that includes", "a line with // single line comment inside it", "*/", "int, 10;", "int, 20;", "/* Another block comment that includes", "a line with // single line comment inside it", "*/", "int, 30;"]), ['int a = 10;', 'int b = 20;', 'int c = 30;'], 'Test 23');
test(removeComments(["int main[] {", "    // Start of line comment \" /* this is not a comment \" end of line comment", "    int, 1;", "    /* Start of block comment \" // still in block comment \" */", "    int, 2;", "    printf[\"Result: %d\", x + y];", "}"]), ['int main[] {', '    ', '    int x = 1;', '    ', '    int y = 2;', '    printf["Result: %d", x + y];', '}'], 'Test 24');
test(removeComments(["int main[] {", "    int, 1;", "    /* Start of block comment \" // this is not a comment \" */", "    int, 2;", "    // This is a line comment \" /* this is not a comment \" end of line comment", "    printf[\"Result: %d\", x + y];", "    /* Another block comment \" // still in block comment \" end of block comment */", "}"]), ['int main[] {', '    int x = 1;', '    ', '    int y = 2;', '    ', '    printf["Result: %d", x + y];', '    ', '}'], 'Test 25');
test(removeComments(["int main[] {", "/* Block comment starts here", "int, 10;", "/* Nested comment \" /* still in nested comment */ \" end of nested comment */", "int, 20;", "*/ int, 30;", "// End of file comment", "}"]), ['int main[] {', ' " end of nested comment */', 'int y = 20;', '*/ int z = 30;', '}'], 'Test 26');
test(removeComments(["/* Start of block comment \n /* nested block comment */ still in block comment */", "int, 10;"]), [' still in block comment */', 'int x = 10;'], 'Test 27');
test(removeComments(["/* Start of block comment ", "/* Nested block comment ", "*/", "End of nested block comment */", "int, 40;", "// Line comment /* not a block comment */"]), ['End of nested block comment */', 'int x = 40;'], 'Test 28');
test(removeComments(["void func[] {", "int, 1;", "/* Comment with newline character \n */", "int, 2;", "}"]), ['void func[] {', 'int x = 1;', 'int y = 2;', '}'], 'Test 29');
test(removeComments(["/* comment with \"escaped quotes\" inside block comment */", "int, 1;", "// Single line comment after block comment", "/* Another block comment \"with quotes\" inside */", "int, 2;", "}"]), ['int x = 1;', 'int y = 2;', '}'], 'Test 30');
test(removeComments(["/* This is a comment /* nested block comment */ end of comment */", "int, 1;", "// Single-line comment after block comment", "/* Another block comment */ int, 2;"]), [' end of comment */', 'int x = 1;', ' int y = 2;'], 'Test 31');
test(removeComments(["/* Comment spanning multiple lines", "including quotes \" and other symbols /* nested */", "still in block comment \" end block comment */", "int, 1;", "cout << \"Hello World\";" ]), ['still in block comment " end block comment */', 'int x = 1;', 'cout << "Hello World";'], 'Test 32');
test(removeComments(["/* comment with end of line comment // inside block comment */", "int, 8;", "int, 9;", "/* comment with // nested line comment /* nested block comment */ inside block comment */", "int, 10;" ]), ['int q = 8;', 'int r = 9;', ' inside block comment */', 'int s = 10;'], 'Test 33');
test(removeComments(["int main[] {", "/* Comment with \"quoted\" text inside */", "int, 20;", "/* Another /* nested */ comment */", "return x;", "}"]), ['int main[] {', 'int x = 20;', ' comment */', 'return x;', '}'], 'Test 34');
test(removeComments(["void example[] {", "/* This is a block comment /* with another comment inside */ and continues here */", "int, 10;", "cout << \"Value: \" << a;", "// Single line comment after block comment", "}"]), ['void example[] {', ' and continues here */', 'int a = 10;', 'cout << "Value: " << a;', '}'], 'Test 35');
test(removeComments(["class MyClass {", "    // This is a single line comment", "    int a;", "    /* This is a block comment ", "       int b;", "       // Another single line comment", "    */", "    int c;", "}"]), ['class MyClass {', '    ', '    int a;', '    ', '    int c;', '}'], 'Test 36');
test(removeComments(["/* This is a block comment that spans", "multiple lines and includes", "a single line comment // inside it */", "int, 30;", "// This is a single line comment", "}"]), ['int z = 30;', '}'], 'Test 37');
test(removeComments(["/* Comment before code", "int, 1;", "/* Comment after code", "int, 2;", "// Single line comment", "int, 3;", "/* Comment after last line */"]), [], 'Test 38');
test(removeComments(["void func[] {", "int, 10;", "/* Start of block comment ", "int, 20;", "int, 30;", "}*/"]), ['void func[] {', 'int x = 10;'], 'Test 39');
test(removeComments(["int func[] {", "if [x < 0] /* This is a block comment */ {", "return x;", "} else {", "return -x;", "}", "/* Another comment \" with quotes \" inside */", "}"]), ['int func[] {', 'if [x < 0]  {', 'return x;', '} else {', 'return -x;', '}', '}'], 'Test 40');
test(removeComments(["/* Comment spanning", "multiple lines with newline character \n and /* nested */ comment \n end comment */", "int, 1;", "cout << \"Hello World\";" ]), [' comment \n end comment */', 'int x = 1;', 'cout << "Hello World";'], 'Test 41');
test(removeComments(["int main[] {", "/* Start of block comment \" /* nested block comment \" still in block comment */", "int, 10;", "cout << \"Hello World\";", "}"]), ['int main[] {', 'int x = 10;', 'cout << "Hello World";', '}'], 'Test 42');
test(removeComments(["/* comment with // nested line comment inside block comment /* nested block comment */ inside block comment */", "int, 15;", "int, 16;" ]), [' inside block comment */', 'int x = 15;', 'int y = 16;'], 'Test 43');
test(removeComments(["/* Comment spanning multiple lines", "including quotes \" and other symbols /* nested /* deeply nested */ end nested comment */", "still in block comment \" end block comment */", "int, 1;", "cout << \"Hello World\";" ]), [' end nested comment */', 'still in block comment " end block comment */', 'int x = 1;', 'cout << "Hello World";'], 'Test 44');
test(removeComments(["// Single-line comment", "/* Multi-line comment starts here", "int, 10;", "/* Nested comment */", "int, 20;", "*/ int, 30;", "// End of file comment", "/* Last comment */"]), ['int y = 20;', '*/ int z = 30;'], 'Test 45');
test(removeComments(["int main[] {", "    /* Start of a block comment ", "       /* Nested block comment */", "    */", "    int, 10;", "    // This is a single line comment", "}"]), ['int main[] {', '    ', '    */', '    int x = 10;', '    ', '}'], 'Test 46');
test(removeComments(["/* Start of block comment ", "void func[] {", "int, 10;", "} /* End of block comment */"]), [], 'Test 47');
test(removeComments(["/* start of block comment", "with multiple lines", "and /* nested block comment */", "inside it", "end of block comment */", "int, 11;", "int, 12;" ]), ['inside it', 'end of block comment */', 'int t = 11;', 'int u = 12;'], 'Test 48');
test(removeComments(["/* comment with // nested line comment */", "int, 6;", "/* comment with /* nested block comment */ inside it */", "int, 7;" ]), ['int o = 6;', ' inside it */', 'int p = 7;'], 'Test 49');
test(removeComments(["int main[] {", "int, 10;", "/* Comment with special characters !@#$%^&*[]_+*/", "int, 20;", "}"]), ['int main[] {', 'int x = 10;', 'int y = 20;', '}'], 'Test 50');
test(removeComments(["/* Comment with /* deep nesting /* even deeper */ still deep */ end of deep nesting */", "int, 80;", "int main[] {", "int, 90;", "return x + y;", "}"]), [' still deep */ end of deep nesting */', 'int x = 80;', 'int main[] {', 'int y = 90;', 'return x + y;', '}'], 'Test 51');
test(removeComments(["int main[] {", "/* Block comment \" /* nested block comment \" end of nested block comment */ end of block comment */", "int, 10;", "cout << \"Hello World\";", "}"]), ['int main[] {', ' end of block comment */', 'int x = 10;', 'cout << "Hello World";', '}'], 'Test 52');
test(removeComments(["// This is a single line comment", "int, 1;", "// Another single line comment", "int, 2;", "// Last single line comment"]), ['int a = 1;', 'int b = 2;'], 'Test 53');
test(removeComments(["int main[] {", "if [true] {", "// This is a comment inside a block", "int, 1;", "}", "/* Another block comment \" end of block comment */", "int, 2;", "}"]), ['int main[] {', 'if [true] {', 'int x = 1;', '}', 'int y = 2;', '}'], 'Test 54');
test(removeComments(["int main[] {", "/* Start of block comment", "which continues", "and includes \"quotes\" inside", "*/", "int, 10;", "// This is a single line comment after block comment", "cout << \"Value: \" << x;", "}"]), ['int main[] {', 'int x = 10;', 'cout << "Value: " << x;', '}'], 'Test 55');
test(removeComments(["/* This is a block comment \" // this is not a comment \" */", "int, 1;", "/* another block comment \" // still in block comment \" */", "int, 2;", "printf[\"Result: %d\", x + y];"]), ['int x = 1;', 'int y = 2;', 'printf["Result: %d", x + y];'], 'Test 56');
test(removeComments(["/* This is a comment /* nested block comment */ end of comment */", "int, 1;", "// Single-line comment after block comment", "/* Another block comment \" \" */ int, 2;", "int, 3;"]), [' end of comment */', 'int x = 1;', ' int y = 2;', 'int z = 3;'], 'Test 57');
test(removeComments(["void foo[] {", "/* Multi-line comment starts here", "and continues", "on multiple lines */", "int, 30;", "// Another single-line comment", "}"]), ['void foo[] {', 'int y = 30;', '}'], 'Test 58');
test(removeComments(["/* Opening block comment", "int, 50;", "int, 60;", "// Line comment inside block comment", "*/", "int, 70;", "/* Another block comment \" with quotes \" inside */", "}"]), ['int z = 70;', '}'], 'Test 59');
test(removeComments(["// single line comment /* block comment on same line */", "/* block comment // single line comment inside block comment */", "int, 13;" ]), ['int v = 13;'], 'Test 60');
test(removeComments(["int main[] {", "int, 1;", "/* Comment with newline character \n and /* nested */ comment */", "int, 2;", "}"]), ['int main[] {', 'int x = 1;', ' comment */', 'int y = 2;', '}'], 'Test 61');
test(removeComments(["int main[] {", "    /* Start of block comment", "    // Single line comment inside block comment", "    end of block comment */", "    int, 10;", "    // This is a single line comment", "}"]), ['int main[] {', '    ', '    int x = 10;', '    ', '}'], 'Test 62');
test(removeComments(["void foo[] {", "    /* This is a block comment that ends on the same line */ int, 20;", "    // This is a single line comment", "}"]), ['void foo[] {', '     int y = 20;', '    ', '}'], 'Test 63');
test(removeComments(["/* Comment line 1", "Comment line 2", "Comment line 3 */", "int, 1;", "int, 2;", "int, 3;"]), ['int a = 1;', 'int b = 2;', 'int c = 3;'], 'Test 64');
test(removeComments(["/* Start of block comment", "int, 110;", "// Line comment inside block comment", "int, 120;", "*/", "int, 130;", "/* Another block comment", "/* Nested block comment */", "End of nested block comment */", "return x + y + z;", "}"]), ['int z = 130;', 'End of nested block comment */', 'return x + y + z;', '}'], 'Test 65');
test(removeComments(["/* Start of block comment \n /* nested block comment \n still in block comment */", "int, 10;"]), ['int x = 10;'], 'Test 66');
test(removeComments(["/* Start of block comment \" with quotes \" inside /* nested block comment \" with quotes \" inside */ end of nested block comment \" with quotes \" inside */", "int main[] {", "int, 140;", "int, 150;", "// Line comment \" with quotes \" inside block comment", "int, 160;", "return x + y + z;", "}"]), [' end of nested block comment " with quotes " inside */', 'int main[] {', 'int x = 140;', 'int y = 150;', 'int z = 160;', 'return x + y + z;', '}'], 'Test 67');
test(removeComments(["int main[] {", "// Line comment \" // still in line comment \" end of line comment ", "int, 10;", "}"]), ['int main[] {', 'int x = 10;', '}'], 'Test 68');
test(removeComments(["int main[] {", "/* Start of block comment /* still in block comment */ end of block comment */", "int, 10;", "// Single line comment after block comment", "cout << \"Hello World\";", "}"]), ['int main[] {', ' end of block comment */', 'int x = 10;', 'cout << "Hello World";', '}'], 'Test 69');
test(removeComments(["/* comment with /* nested block comment /* another nested block comment */ end of inner block comment */ end of outer block comment */", "int, 14;" ]), [' end of inner block comment */ end of outer block comment */', 'int w = 14;'], 'Test 70');
test(removeComments(["/* Multiline comment \"with quotes\" inside /* nested comment */ still inside */", "int main[] {", "/* Another comment \" with quotes \" and /* nested */ */", "int, 100;", "return z;", "}"]), [' still inside */', 'int main[] {', ' */', 'int z = 100;', 'return z;', '}'], 'Test 71');
test(removeComments(["void func[] {", "/* Start of block comment ", "int, 10;", "} // End of function ", "*/"]), ['void func[] {'], 'Test 72');
test(removeComments(["/* comment /* nested /* deeply nested */ comment */ end */", "int, 1;", "// single line comment after block comment"]), [' comment */ end */', 'int x = 1;'], 'Test 73');
test(removeComments(["int main[] {", "/* Block comment \" /* nested comment */ \" end of block comment */", "int, 10;", "cout << \"Hello World\";", "// Single-line comment", "}"]), ['int main[] {', ' " end of block comment */', 'int x = 10;', 'cout << "Hello World";', '}'], 'Test 74');
test(removeComments(["int main[] {", "    if [x > 0] {", "        /* Start of block comment \" /* still in block comment */ \" end of block comment */", "        printf[\"Hello World\"];", "    }", "}"]), ['int main[] {', '    if [x > 0] {', '         " end of block comment */', '        printf["Hello World"];', '    }', '}'], 'Test 75');
test(removeComments(["/* Comment with \"escaped quote\" inside */", "int, 10;"]), ['int x = 10;'], 'Test 76');
test(removeComments(["int main[] {", "int, 1;", "// This is a comment \" /* this should be ignored */ end comment", "int, 2;", "/* This is a block comment \" /* nested */ end block comment */", "int, 3;", "}"]), ['int main[] {', 'int x = 1;', 'int y = 2;', ' end block comment */', 'int z = 3;', '}'], 'Test 77');
test(removeComments(["void func[] {", "/* This is a ", "multiline comment /* nested comment */", "end of block comment */", "int, 10;", "// This is a single line comment /* this should be ignored */", "}"]), ['void func[] {', 'end of block comment */', 'int x = 10;', '}'], 'Test 78');
test(removeComments(["void function[] {", "int, 0;", "/* start of block comment", "int, 1;", "// single line comment inside block comment", "int, 2;", "end of block comment */", "int, 3;", "}" ]), ['void function[] {', 'int i = 0;', 'int l = 3;', '}'], 'Test 79');
test(removeComments(["// Line comment \" // still a line comment \"", "int main[] {", "int, 30;", "/* Multiline \" comment \" block ", "with line continuation ", "*/", "return x;", "}"]), ['int main[] {', 'int x = 30;', 'return x;', '}'], 'Test 80');
test(removeComments(["int main[] {", "    /* Start of block comment \" /* still in block comment \" */ end of block comment */", "    int, 1;", "    if [x > 0] {", "        // This is a line comment \" /* this is not a comment \" end of line comment", "        int, 2;", "        printf[\"Result: %d\", x + y];", "    }", "}"]), ['int main[] {', '     end of block comment */', '    int x = 1;', '    if [x > 0] {', '        ', '        int y = 2;', '        printf["Result: %d", x + y];', '    }', '}'], 'Test 81');
test(removeComments(["/* Multi", "line", "block", "comment */", "int main[] {", "return 0;", "}"]), ['int main[] {', 'return 0;', '}'], 'Test 82');
test(removeComments(["/* Comment before code \" // this is not a comment \" */", "#include <iostream>", "using namespace std;", "int main[] {", "    int, 1;", "    /* Start of block comment \" /* still in block comment \" end of block comment */", "    int, 2;", "    // This is a line comment \" /* this is not a comment \" end of line comment", "    printf[\"Result: %d\", x + y];", "}"]), ['#include <iostream>', 'using namespace std;', 'int main[] {', '    int x = 1;', '    ', '    int y = 2;', '    ', '    printf["Result: %d", x + y];', '}'], 'Test 83');
test(removeComments(["/* This comment ", "spans ", "multiple lines */", "int main[] {", "    int, 10;", "    /* Another block comment ", "    spanning ", "    multiple lines */", "    int, 20;", "}"]), ['int main[] {', '    int x = 10;', '    ', '    int y = 20;', '}'], 'Test 84');
test(removeComments(["/* Start of block comment ", "/* nested block comment ", "end of nested block comment */", "end of block comment */", "int, 1;", "cout << \"Hello World\";" ]), ['end of block comment */', 'int x = 1;', 'cout << "Hello World";'], 'Test 85');
test(removeComments(["/* Start of block comment \n // line comment inside block comment \n still in block comment */", "int, 10;"]), ['int x = 10;'], 'Test 86');
test(removeComments(["/* Line 1", "Line 2 still in comment", "Line 3 // inline comment after block comment", "Line 4 */ int, 20;", "// End of file comment"]), [' int x = 20;'], 'Test 87');
test(removeComments(["/* Comment before line */ int, 10;", "int, 20; /* Comment after line */", "int, 30;"]), [' int x = 10;', 'int y = 20; ', 'int z = 30;'], 'Test 88');
test(removeComments(["/* Line 1 comment", "/* Nested comment starts here", "and continues here */", "Back to outer comment */", "int, 40;", "// End of file comment"]), ['Back to outer comment */', 'int z = 40;'], 'Test 89');
test(removeComments(["int main[] {", "// Single line comment before block comment", "/* Start of block comment", "which continues", "and includes \"quotes\" inside", "*/", "int, 10;", "cout << \"Value: \" << x;", "/* Another block comment \"with quotes\" inside */", "int, 2;", "}"]), ['int main[] {', 'int x = 10;', 'cout << "Value: " << x;', 'int y = 2;', '}'], 'Test 90');
test(removeComments(["/* comment starts", "and continues here", "and continues here too */", "int, 20;", "/* comment ends here", "and here too */", "int, 30;" ]), ['int y = 20;', 'int z = 30;'], 'Test 91');
test(removeComments(["/* Start of block comment \" /* still in block comment */ end of block comment */", "int, 10;", "/* Another block comment \" end of block comment */", "int, 20;", "cout << \"Hello World\";", "}"]), [' end of block comment */', 'int x = 10;', 'int y = 20;', 'cout << "Hello World";', '}'], 'Test 92');
test(removeComments(["/* comment /* nested comment 1 */ more text", "and continues here /* nested comment 2 */ still more text */", "int, 5;" ]), [' more text', 'and continues here  still more text */', 'int a = 5;'], 'Test 93');
test(removeComments(["void bar[] {", "/* Multi-line comment starts here", "and continues", "on multiple lines with \" escaped quotes \" */", "int, 100;", "// Single-line comment", "}"]), ['void bar[] {', 'int a = 100;', '}'], 'Test 94');
test(removeComments(["/* Comment before code", "int main[] {", "/* Start of block comment \" with quotes \" inside", "*/", "int, 10;", "cout << \"Value: \" << x;", "// Single line comment after block comment", "}", "/* Comment after code */"]), ['int x = 10;', 'cout << "Value: " << x;', '}'], 'Test 95');
test(removeComments(["/* comment with newline \n inside it */", "int, 4;", "// comment with newline \n inside it", "int, 5;" ]), ['int m = 4;', 'int n = 5;'], 'Test 96');
test(removeComments(["int main[] {", "/* Multi-line", "block", "comment", "ends", "here */", "int, 1;", "cout << \"Hello World\";", "}"]), ['int main[] {', 'int x = 1;', 'cout << "Hello World";', '}'], 'Test 97');
test(removeComments(["// Start of file comment", "/* Multi-line comment starts here", "int, 10;", "/* Nested comment */", "int, 20;", "*/ int, 30;", "// End of file comment"]), ['int y = 20;', '*/ int z = 30;'], 'Test 98');
test(removeComments(["/* Start of block comment /* Nested block comment */ still in block comment */", "int, 10;"]), [' still in block comment */', 'int x = 10;'], 'Test 99');
test(removeComments(["int main[] {", "/* Start of block comment \" /* still in block comment */ end of block comment */", "int, 10;", "cout << \"Hello World\";", "/* Another block comment /* nested */ end */", "}"]), ['int main[] {', ' end of block comment */', 'int x = 10;', 'cout << "Hello World";', ' end */', '}'], 'Test 100');
test(removeComments(["int main[] {", "/* This is a block comment", "which spans multiple lines \" /* still in block comment */ \" and continues here", "*/", "int, 10;", "// This is a single line comment", "cout << \"Output: \" << a;", "}"]), ['int main[] {', ' " and continues here', '*/', 'int a = 10;', 'cout << "Output: " << a;', '}'], 'Test 101');
test(removeComments(["int main[] {", "if [/* inline block comment */ true] {", "printf[\"Hello\n\"];", "}", "}"]), ['int main[] {', 'if [ true] {', 'printf["Hello\n"];', '}', '}'], 'Test 102');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

