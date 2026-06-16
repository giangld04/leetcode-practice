// Test: 2315. Count Asterisks
// 106 test cases from LeetCodeDataset
// Run: node test.js

const { countAsterisks } = require("./solution");

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

console.log("\n2315. Count Asterisks\n");

test(countAsterisks("iamprogrammer"), 0, 'Test 1');
test(countAsterisks("|*|*|*|*|"), 2, 'Test 2');
test(countAsterisks("||||||||||"), 0, 'Test 3');
test(countAsterisks("yo|uar|e**|b|e***au|tifu|l"), 5, 'Test 4');
test(countAsterisks("l|*e*et|c**o|*de|"), 2, 'Test 5');
test(countAsterisks("abc|def|ghi|jkl|"), 0, 'Test 6');
test(countAsterisks("a*b*c*d*e*f*g*h*i*j*k*l|m*n*o*p*q*r*s*t*u*v*w*x*y*z|"), 11, 'Test 7');
test(countAsterisks("*|*|*|*|*|*|"), 3, 'Test 8');
test(countAsterisks("no|asterisks|here|"), 0, 'Test 9');
test(countAsterisks("*|*|*|*|*|*|*|*|*|*|"), 5, 'Test 10');
test(countAsterisks("|*a|b*|*c|d*|e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*|"), 2, 'Test 11');
test(countAsterisks("|*a*|b*|*c*|d*|*e*|f*|*g*|h*|*i*|j*|*k*|l*|*m*|n*|*o*|p*|*q*|r*|*s*|t*|*u*|v*|*w*|x*|*y*|z*|"), 13, 'Test 12');
test(countAsterisks("*a|*b|*c|*d|*e|*f|*g|*h|*i|*j|*k|*l|*m|*n|*o|*p|*q|*r|*s|*t|*u|*v|*w|*x|*y|*z|"), 13, 'Test 13');
test(countAsterisks("*a*|b*c|d*e*f|g*h*i*j*k|l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*|*"), 19, 'Test 14');
test(countAsterisks("this|is|a|test|string|with|multiple|pipes|and|asterisks|*|*|*|*|*|*|*|*|*|*|*|"), 6, 'Test 15');
test(countAsterisks("|*a|b*c|d*e*f|g*h*i*j*k|l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*|*a*|b|*c*|d*|*e*|f*|*g*|*h*|*i*|*j*|*k*|*l*|*m*|*n*|*o*|*p*|*q*|*r*|*s*|*t*|*u*|*v*|*w*|*x*|*y*|*z*|"), 31, 'Test 16');
test(countAsterisks("multiple|pairs|of|bars|and*no*asterisks*between|them|"), 3, 'Test 17');
test(countAsterisks("*a*|b*c|d*e*f|g*h*i*j|"), 4, 'Test 18');
test(countAsterisks("abc*def|ghi*jkl|*mnop|qrstu|vwxyz*"), 3, 'Test 19');
test(countAsterisks("|*a*|b|c*|d*e*|f*g*h|*i*j*k*|l*m*n*o*|"), 6, 'Test 20');
test(countAsterisks("this|is|a|test|string|with|multiple|pipes|and|asterisks|*|*|*|"), 2, 'Test 21');
test(countAsterisks("a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*|*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z|"), 26, 'Test 22');
test(countAsterisks("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||"), 0, 'Test 23');
test(countAsterisks("|*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*|"), 0, 'Test 24');
test(countAsterisks("interleaved*characters|with|pipes*and*asterisks|and|more|pipes*and*asterisks*at|the*end*of*the|string*"), 6, 'Test 25');
test(countAsterisks("|*||||*||||*||||*||||*|"), 0, 'Test 26');
test(countAsterisks("|a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|"), 0, 'Test 27');
test(countAsterisks("|*a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z*|"), 1, 'Test 28');
test(countAsterisks("*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*|"), 27, 'Test 29');
test(countAsterisks("nested||pipes|should|not|affect|the|count|of|*|in|between|pipes|"), 0, 'Test 30');
test(countAsterisks("*a|*b|*c|*d|*e|*f|*g|*h|*i|*j|*k|*l|*m|*n|*o|*p|*q|*r|*s|*t|*u|*v|*w|*x|*y|*z*|"), 13, 'Test 31');
test(countAsterisks("*a*|*b*|*c*|*d*|*e*|*f*|*g*|*h*|*i*|*j*|*k*|*l*|*m*|*n*|*o*|*p*|*q*|*r*|*s*|*t*|*u*|*v*|*w*|*x*|*y*|*z*|"), 26, 'Test 32');
test(countAsterisks("long|*sequence*|of|*characters*|to|test|the|*algorithm*|efficiency|"), 0, 'Test 33');
test(countAsterisks("*a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z*|*"), 2, 'Test 34');
test(countAsterisks("|*a*|b*|c*|d*|e*|f*|g*|h*|i*|j*|k*|l*|m*|n*|o*|p*|q*|r*|s*|t*|u*|v*|w*|x*|y*|z*|"), 13, 'Test 35');
test(countAsterisks("a*|b*|c*|d*|e*|f*|g*|h*|i*|j*|k*|l*|m*|n*|o*|p*|q*|r*|s*|t*|u*|v*|w*|x*|y*|z*|"), 13, 'Test 36');
test(countAsterisks("nested|*pipes*|and|*asterisks*|inside|*and*|outside|*pipes*|"), 0, 'Test 37');
test(countAsterisks("|a*b*c|d*e*f*g|h*i*j*k*l*m*n|o*p*q*r*s*t*u|v*w*x*y*z|"), 9, 'Test 38');
test(countAsterisks("multiple*asterisks*here|and*here*too|and*here|"), 3, 'Test 39');
test(countAsterisks("this|is*a*test|to*see*if*the*function*works*correctly*with*many*bars|and*asterisks*in*various*places*|"), 9, 'Test 40');
test(countAsterisks("*|*a*b*c*|d*e*f*g*|h*i*j*k*l*m*n*|o*p*q*r*s*t*u*|v*w*x*y*z*|"), 12, 'Test 41');
test(countAsterisks("1234567890|*1*2*3*4*5*6*7*8*9*0|abcdefg|hijklmn|opqrstuv|wxyz|"), 0, 'Test 42');
test(countAsterisks("*at|the|start*|and|at|the|end*|pipes|should|not|affect|the|count*|"), 4, 'Test 43');
test(countAsterisks("|a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*|"), 0, 'Test 44');
test(countAsterisks("|pipes|without|*asterisks*|in|between|pipes|should|return|zero|"), 0, 'Test 45');
test(countAsterisks("*only*|*pipes*|*and*|*asterisks*|*in*|*the*|*string*|"), 8, 'Test 46');
test(countAsterisks("no*bars*in*string"), 3, 'Test 47');
test(countAsterisks("no|pipes|here|just|plain|text|and|some|asterisks*at*the*end"), 3, 'Test 48');
test(countAsterisks("|a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w|x*y*z*|a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w|x*y*z*|"), 6, 'Test 49');
test(countAsterisks("nested*bars*are|not|possible|but|this|is*a*test*case*with*many*bars|and*some*stars*in*the*end*|"), 8, 'Test 50');
test(countAsterisks("*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|"), 20, 'Test 51');
test(countAsterisks("*at*the*start*and*no*pipes*in*the*middle*or*end"), 11, 'Test 52');
test(countAsterisks("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|"), 19, 'Test 53');
test(countAsterisks("noasterisks|here|but|many|pipes|to|confuse|you|"), 0, 'Test 54');
test(countAsterisks("*a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z*"), 1, 'Test 55');
test(countAsterisks("|a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z|*"), 1, 'Test 56');
test(countAsterisks("*|a*|b*|c*|d*|e*|f*|g*|h*|i*|j*|k*|l*|m*|n*|o*|p*|q*|r*|s*|t*|u*|v*|w*|x*|y*|z*|"), 14, 'Test 57');
test(countAsterisks("hello*world|this|is*a*test|string|with*many*asterisks|"), 5, 'Test 58');
test(countAsterisks("*|a|*b|*c|*d|*e|*f|*g|*h|*i|*j|*k|*l|*m|*n|*o|*p|*q|*r|*s|*t|*u|*v|*w|*x|*y|*z|*|"), 14, 'Test 59');
test(countAsterisks("*a|b*c|d*e*f|g|h*i*j|k*l*m|n*o*p*q*r*s*t*u*v*w*x*y*z|"), 17, 'Test 60');
test(countAsterisks("*a|b|*c|d|*e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z*|"), 3, 'Test 61');
test(countAsterisks("*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|"), 18, 'Test 62');
test(countAsterisks("||||||||**||||||||"), 2, 'Test 63');
test(countAsterisks("*single*|*pair*|of|*pipes*|with|*multiple*|asterisks*|inside*|"), 3, 'Test 64');
test(countAsterisks("no|pipes|here|just|asterisks|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|"), 11, 'Test 65');
test(countAsterisks("a*|b*c|d*e*f|g*h|i*j*k|l*m*n|"), 5, 'Test 66');
test(countAsterisks("*a*|b*c|d*e*f|g*h*i*j*k|l*m*n*o*p*q*r*s*t*u*v*w*x*y*z|"), 18, 'Test 67');
test(countAsterisks("mixed|*case*|UPPER|*lower*|numbers|*1234567890*|special|*!@#$%^&*[]_+*|"), 0, 'Test 68');
test(countAsterisks("*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|"), 8, 'Test 69');
test(countAsterisks("a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z"), 25, 'Test 70');
test(countAsterisks("this|is*a*test|with*many*asterisks|and*no*exclusions*at*the*end*"), 2, 'Test 71');
test(countAsterisks("multiple||pipes||in||a||row||with||asterisks*in||between"), 1, 'Test 72');
test(countAsterisks("a|*b*|*c*|*d*|*e*|*f*|*g*|*h*|*i*|*j*|*k*|*l*|*m*|*n*|*o*|*p*|*q*|*r*|*s*|*t*|*u*|*v*|*w*|*x*|*y*|*z*|"), 24, 'Test 73');
test(countAsterisks("*a|*b*c|*d*e*f|*g*h*i|*j*k*l|m*n*o|*p*q*r|*s*t*u|*v*w*x|*y*z*|"), 13, 'Test 74');
test(countAsterisks("*a|b|*c|d|e|*f|g|h|*i|j|k|l|m|*n|o|p|q|r|*s|t|u|v|w|x|*y|z*|"), 5, 'Test 75');
test(countAsterisks("*a*|b*c|d*e*f|g*h*i*j*k|l*m*n*o*p*q*r*s*t*u*v*w*x*y*z|*"), 18, 'Test 76');
test(countAsterisks("hello|world|*python*|programming|*|code*|"), 3, 'Test 77');
test(countAsterisks("hello|world*is*great|but*this*is*not|"), 3, 'Test 78');
test(countAsterisks("*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|"), 20, 'Test 79');
test(countAsterisks("*|**|***|****|*****|******|*******|********|*********|**********|"), 25, 'Test 80');
test(countAsterisks("no|*pipes|or|*asterisks*|here|"), 0, 'Test 81');
test(countAsterisks("a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z|*a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z|"), 25, 'Test 82');
test(countAsterisks("|a|*b|*c|*d|*e|*f|*g|*h|*i|*j|*k|*l|*m|*n|*o|*p|*q|*r|*s|*t|*u|*v|*w|*x|*y|*z|"), 13, 'Test 83');
test(countAsterisks("*middle*|pipes|*middle*|pipes|*middle*|pipes|*middle*|pipes|*middle*|pipes|"), 10, 'Test 84');
test(countAsterisks("*a|b*c|d*e*f|g*h*i*j*k|l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*|"), 18, 'Test 85');
test(countAsterisks("*a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z*|"), 1, 'Test 86');
test(countAsterisks("*|a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|*"), 1, 'Test 87');
test(countAsterisks("nested|pipes|are|not|possible||but|this|is|how|it|could|look|if|they|were|*|*|*|*|*|*|"), 3, 'Test 88');
test(countAsterisks("*a|b|*c|d|*e|f|*g|h|*i|j|*k|l|*m|n|*o|p|*q|r|*s|t|*u|*v|*w|*x|*y|*z*|"), 13, 'Test 89');
test(countAsterisks("*|*a*|*b*|*c*|*d*|*e*|*f*|*g*|*h*|*i*|*j*|*k*|*l*|*m*|*n*|*o*|*p*|*q*|*r*|*s*|*t*|*u*|*v*|*w*|*x*|*y*|*z*|*|"), 27, 'Test 90');
test(countAsterisks("a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z"), 25, 'Test 91');
test(countAsterisks("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|"), 21, 'Test 92');
test(countAsterisks("longer|string|with|many|characters|and|some|pipes|and|asterisks*in*various*places|and*more|pipes|and|asterisks*at*the*end*"), 1, 'Test 93');
test(countAsterisks("complex|test*case*with*mixed*characters*and*bars*and*asterisks|throughout*the*string|"), 2, 'Test 94');
test(countAsterisks("single*asterisk*outside*pipes|double**asterisks*inside*pipes|triple***asterisks*outside*pipes"), 8, 'Test 95');
test(countAsterisks("|a*b*c|d*e*f|g*h*i|j*k*l|m*n*o|p*q*r|s*t*u|v*w*x|y*z|"), 8, 'Test 96');
test(countAsterisks("multiple|*pipes*|in|*one*|segment|*of*|the|*string*|should|be|handled|correctly|"), 0, 'Test 97');
test(countAsterisks("|a|*b*|c|d|e|*f*|g|h|i|j|k|l|m|*n*|o|p|q|r|s|t|u|v|w|x|y|z|"), 6, 'Test 98');
test(countAsterisks("|a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z||"), 0, 'Test 99');
test(countAsterisks("|a*|b*|c*|d*|e*|f*|g*|h*|i*|j*|k*|l*|m*|n*|o*|p*|q*|r*|s*|t*|u*|v*|w*|x*|y*|z|"), 12, 'Test 100');
test(countAsterisks("a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|*|*|*|*|"), 2, 'Test 101');
test(countAsterisks("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|"), 16, 'Test 102');
test(countAsterisks("|a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z|"), 0, 'Test 103');
test(countAsterisks("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|"), 20, 'Test 104');
test(countAsterisks("||||||||||||||||||||||||||||||||||||||||||||||||||||"), 0, 'Test 105');
test(countAsterisks("nested|*p*|ai|*n*|e*d|*|t*e*s*t|case|"), 4, 'Test 106');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

