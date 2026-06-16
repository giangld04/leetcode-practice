// Test: 2512. Reward Top K Students
// 82 test cases from LeetCodeDataset
// Run: node test.js

const { topStudents } = require("./solution");

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

console.log("\n2512. Reward Top K Students\n");

test(topStudents(["smart","brilliant","studious"], ["not"], ["this student is studious","the student is smart"], [1,2], 2), [1, 2], 'Test 1');
test(topStudents(["good","excellent"], ["bad","poor"], ["the student is good and excellent","the student is bad but tries"], [3,4], 1), [3], 'Test 2');
test(topStudents(["smart","brilliant","studious"], ["not"], ["this student is not studious","the student is smart"], [1,2], 2), [2, 1], 'Test 3');
test(topStudents(["good","excellent"], ["bad","poor"], ["the student is good","the student is excellent","the student is bad","the student is poor"], [101,102,103,104], 2), [101, 102], 'Test 4');
test(topStudents(["good","excellent"], ["bad","poor"], ["the student is good and excellent","the student is bad"], [3,4], 1), [3], 'Test 5');
test(topStudents(["outstanding"], ["poor"], ["the student is outstanding","the student is poor","the student is not poor"], [100,200,300], 3), [100, 200, 300], 'Test 6');
test(topStudents(["good","great"], ["average","terrible"], ["average performance","good work but could be better","terrible experience"], [301,302,303], 2), [302, 301], 'Test 7');
test(topStudents(["kind","friendly"], ["rude","mean"], ["the student is kind","the student is mean"], [7,8], 2), [7, 8], 'Test 8');
test(topStudents(["hardworking","diligent"], ["lazy","slacker"], ["the student is hardworking","the student is diligent","the student is lazy","the student is slacker"], [501,502,503,504], 3), [501, 502, 503], 'Test 9');
test(topStudents(["hardworking","dedicated"], ["lazy","inattentive"], ["the student is hardworking and dedicated","the student is lazy"], [10,20], 1), [10], 'Test 10');
test(topStudents(["helpful","efficient"], ["lazy","inefficient"], ["the student is helpful","the student is lazy"], [5,6], 2), [5, 6], 'Test 11');
test(topStudents(["excellent","outstanding"], ["poor","bad"], ["very poor performance","outstanding in every aspect"], [201,202], 2), [202, 201], 'Test 12');
test(topStudents(["adept","proficient"], ["incompetent","unskilled"], ["the student is adept","the student is proficient","the student is incompetent","the student is unskilled"], [701,702,703,704], 4), [701, 702, 703, 704], 'Test 13');
test(topStudents(["excellent"], ["terrible"], ["the student is excellent","the student is terrible","the student is terrible but excellent"], [5,15,25], 2), [5, 25], 'Test 14');
test(topStudents(["outstanding","great"], ["average","poor"], ["the student is average","the student is outstanding"], [5,6], 2), [6, 5], 'Test 15');
test(topStudents(["hardworking","dedicated"], ["lazy","slacking"], ["the student is lazy","the student is dedicated and hardworking"], [7,8], 2), [8, 7], 'Test 16');
test(topStudents(["hardworking","dedicated"], ["lazy","careless"], ["the student is hardworking and dedicated","the student is lazy but smart"], [101,102], 1), [101], 'Test 17');
test(topStudents(["excellent","outstanding","great"], ["bad","poor","terrible"], ["the student is excellent and great","the student is poor","the student is excellent but terrible"], [5,3,8], 2), [5, 8], 'Test 18');
test(topStudents(["efficient","productive","organized"], ["disorganized","inefficient","unproductive"], ["the student is efficient and organized","the student is disorganized and inefficient","the student is productive"], [3001,3002,3003], 1), [3001], 'Test 19');
test(topStudents(["knowledgeable","Infinityormed","learned"], ["ignorant","unInfinityormed","naive"], ["the student is knowledgeable","the student is unInfinityormed","the student is ignorant and naive"], [4001,4002,4003], 2), [4001, 4002], 'Test 20');
test(topStudents(["excellent","outstanding","impressive"], ["poor","mediocre","inadequate"], ["the student is excellent and impressive","the student is mediocre","the student is excellent but also poor"], [1001,1002,1003], 3), [1001, 1003, 1002], 'Test 21');
test(topStudents(["innovative","creative","inspiring"], ["dull","boring","unoriginal"], ["the student is innovative and creative","the student is unoriginal","the student is inspiring but also unoriginal"], [2001,2002,2003], 2), [2001, 2003], 'Test 22');
test(topStudents(["innovative","creative","original"], ["conventional","boring","predictable"], ["the student is conventional and boring","the student is creative and innovative","the student is original but not always predictable","the student is predictable but hardworking"], [5001,5002,5003,5004], 2), [5002, 5003], 'Test 23');
test(topStudents(["knowledgeable","wise","Infinityormed"], ["ignorant","naive","unInfinityormed"], ["the student is knowledgeable and wise","the student is ignorant and naive","the student is Infinityormed and smart"], [4001,4002,4003], 2), [4001, 4003], 'Test 24');
test(topStudents(["efficient","productive","focused"], ["unfocused","slow","inconsistent"], ["the student is efficient","the student is productive","the student is focused"], [9001,9002,9003], 2), [9001, 9002], 'Test 25');
test(topStudents(["curious","inquisitive","investigative"], ["ignorant","uninterested","apathetic"], ["the student is curious and inquisitive","the student is ignorant and uninterested","the student is investigative but needs rest"], [999,998,997], 3), [999, 997, 998], 'Test 26');
test(topStudents(["leader","motivator","captain"], ["follower","lazy","unmotivated"], ["the student is leader and motivator","the student is follower and lazy","the student is captain but tired"], [777,778,779], 1), [777], 'Test 27');
test(topStudents(["excellent","outstanding","remarkable"], ["poor","mediocre","inadequate"], ["the student was excellent and outstanding","the student was not excellent but remarkable","the student was poor and mediocre"], [1001,1002,1003], 3), [1001, 1002, 1003], 'Test 28');
test(topStudents(["outstanding","excellent","remarkable"], ["poor","bad","mediocre"], ["the student is outstanding and excellent","the student is mediocre","the student is poor"], [1001,1002,1003], 2), [1001, 1002], 'Test 29');
test(topStudents(["persevering","determined","resilient"], ["quitter","defeated","weak"], ["the student is persevering","the student is determined","the student is resilient","the student is a quitter","the student is defeated","the student is weak"], [3001, 3002, 3003, 3004, 3005, 3006], 4), [3001, 3002, 3003, 3004], 'Test 30');
test(topStudents(["reliable","trustworthy","dependable"], ["unreliable","dishonest","untrustworthy"], ["the student is reliable and dependable","the student is unreliable and dishonest","the student is trustworthy but late"], [10,20,30], 1), [10], 'Test 31');
test(topStudents(["inspired","motivated","eager"], ["disinterested","apathetic","unmotivated"], ["the student is inspired and eager","the student is disinterested","the student is motivated","the student is apathetic","the student is unmotivated"], [6001,6002,6003,6004,6005], 4), [6001, 6003, 6002, 6004], 'Test 32');
test(topStudents(["innovative","creative","resourceful"], ["lazy","disorganized","unfocused"], ["the student is innovative and creative","the student is lazy","the student is disorganized","the student is resourceful"], [2001, 2002, 2003, 2004], 3), [2001, 2004, 2002], 'Test 33');
test(topStudents(["helpful","cooperative","supportive"], ["unhelpful","selfish","uncooperative"], ["the student is helpful and cooperative","the student is selfish and unhelpful","the student is supportive but mediocre"], [201,202,203], 3), [201, 203, 202], 'Test 34');
test(topStudents(["honest","truthful","sincere"], ["liar","deceptive","dishonest"], ["the student is honest and truthful","the student is liar and deceptive","the student is sincere but sometimes forgetful"], [888,887,886], 2), [888, 886], 'Test 35');
test(topStudents(["innovative","creative","inspiring"], ["unoriginal","boring","stupid"], ["the student is innovative and creative","the student is unoriginal and stupid","the student is inspiring"], [1001,1002,1003], 2), [1001, 1003], 'Test 36');
test(topStudents(["kind","polite","considerate"], ["rude","impolite"], ["the student is kind and polite","the student is impolite","the student is rude","the student is considerate","the student is impolite but kind"], [101,102,103,104,105], 4), [101, 104, 105, 102], 'Test 37');
test(topStudents(["helpful","supportive","collaborative"], ["unfriendly","rude","impolite"], ["helpful and supportive","the student is rude","collaborative efforts","impolite behavior noted","supportive actions"], [4001,4002,4003,4004,4005], 4), [4001, 4003, 4005, 4002], 'Test 38');
test(topStudents(["helpful","generous","compassionate"], ["selfish","greedy","harsh"], ["the student is generous and helpful","the student is harsh","the student is greedy"], [2001,2002,2003], 3), [2001, 2002, 2003], 'Test 39');
test(topStudents(["excellent","outstanding","perfect"], ["bad","poor","mediocre"], ["this is an excellent report","the student is poor","outstanding performance","mediocre work"], [1001,1002,1003,1004], 2), [1001, 1003], 'Test 40');
test(topStudents(["excellent","outstanding","exceptional"], ["poor","mediocre","bad"], ["the student is excellent and outstanding","the student is mediocre and bad","the student is exceptional"], [5,6,7], 2), [5, 7], 'Test 41');
test(topStudents(["efficient","productive","focused"], ["unfocused","slow","inconsistent"], ["the student is efficient and productive","the student is productive and focused","the student is productive but inconsistent"], [6001,6002,6003], 2), [6001, 6002], 'Test 42');
test(topStudents(["excellent","outstanding","brilliant"], ["poor","bad","terrible"], ["the student is excellent and outstanding","the student is brilliant","the student is poor but not bad","the student is terrible"], [10, 20, 30, 40], 3), [10, 20, 40], 'Test 43');
test(topStudents(["helpful","cooperative"], ["selfish","unhelpful"], ["the student is helpful and cooperative","the student is selfish","the student is unhelpful","the student is helpful but unhelpful"], [100, 101, 102, 103], 2), [100, 103], 'Test 44');
test(topStudents(["efficient","resourceful","innovative"], ["inefficient","wasteful","unproductive"], ["the student is inefficient and wasteful","the student is resourceful and innovative","the student is productive but not very innovative"], [2001,2002,2003], 3), [2002, 2003, 2001], 'Test 45');
test(topStudents(["dynamic","engaged","motivated"], ["disinterested","unmotivated","apathetic"], ["dynamic performance","disinterested in work","engaged","apathetic attitude","motivated","dynamic"], [5001,5002,5003,5004,5005,5006], 5), [5001, 5003, 5005, 5006, 5002], 'Test 46');
test(topStudents(["outstanding","excellent","genius"], ["poor","dull","lazy"], ["the student is brilliant and excellent","the student is lazy but smart","the student is outstanding"], [501,502,503], 3), [501, 503, 502], 'Test 47');
test(topStudents(["efficient","productive","effective"], ["lazy","inefficient","unproductive"], ["the student is lazy and inefficient","the student is productive and efficient","the student is effective but tired"], [301,302,303], 2), [302, 303], 'Test 48');
test(topStudents(["creative","innovative","resourceful"], ["dull","boring","stagnant"], ["the student is innovative","the student is dull","the student is resourceful","the student is boring"], [3001,3002,3003,3004], 2), [3001, 3003], 'Test 49');
test(topStudents(["helpful","compassionate","generous"], ["selfish","greedy","cruel"], ["the student is helpful and compassionate","the student is generous","the student is selfish","the student is greedy","the student is cruel","the student is generous and helpful"], [4001, 4002, 4003, 4004, 4005, 4006], 5), [4001, 4006, 4002, 4003, 4004], 'Test 50');
test(topStudents(["efficient","productive","focused"], ["unfocused","slow","inconsistent"], ["the student is efficient","the student is productive and focused","the student is unfocused and slow"], [2001,2002,2003], 2), [2002, 2001], 'Test 51');
test(topStudents(["eloquent","articulate","persuasive"], ["confused","incoherent","unclear"], ["the student was eloquent and articulate","the student was unclear","the student was incoherent but tried his best"], [4001,4002,4003], 3), [4001, 4002, 4003], 'Test 52');
test(topStudents(["efficient","effective","productive"], ["unproductive","slow","ineffective"], ["efficiency was very high","the work was slow","productive","ineffective methods used","effective results achieved"], [3001,3002,3003,3004,3005], 3), [3003, 3005, 3001], 'Test 53');
test(topStudents(["leader","motivator","teamplayer"], ["coward","antisocial","uncooperative"], ["the student is a teamplayer and leader","the student is antisocial and coward","the student is cooperative and motivator"], [2001,2002,2003], 3), [2001, 2003, 2002], 'Test 54');
test(topStudents(["efficient","productive","focused"], ["unfocused","slow","inconsistent"], ["the student is efficient and productive","the student is productive but unfocused","the student is productive and focused"], [8001,8002,8003], 2), [8001, 8003], 'Test 55');
test(topStudents(["resilient","strong","enduring"], ["fragile","weak","endless"], ["the student is resilient and strong","the student is fragile and weak","the student is enduring"], [5001,5002,5003], 3), [5001, 5003, 5002], 'Test 56');
test(topStudents(["ambitious","aspirational","driven"], ["unambitious","disinterested","apathetic"], ["the student is ambitious","the student is disinterested","the student is driven but also apathetic"], [5001,5002,5003], 2), [5001, 5003], 'Test 57');
test(topStudents(["curious","inquisitive","seeking"], ["apathetic","indifferent","uninterested"], ["the student was curious and inquisitive","the student was uninterested","the student was apathetic but showed improvement"], [5001,5002,5003], 3), [5001, 5002, 5003], 'Test 58');
test(topStudents(["leader","initiative","confidence"], ["follower","shy","insecure"], ["the student is a leader and takes initiative","the student is shy and insecure","the student is confident and proactive","the student is a follower but eager to learn"], [6001,6002,6003,6004], 1), [6001], 'Test 59');
test(topStudents(["innovative","creative","brilliant"], ["incompetent","lazy","unhelpful"], ["the student showed innovative thinking","incompetent work was submitted","lazy performance","creative solutions provided"], [2001,2002,2003,2004], 3), [2001, 2004, 2002], 'Test 60');
test(topStudents(["disciplined","focused","organized"], ["disorganized","distracted","undisciplined"], ["the student is disciplined and organized","the student is distracted and disorganized","the student is focused but forgetful"], [1001,1002,1003], 3), [1001, 1003, 1002], 'Test 61');
test(topStudents(["compassionate","empathetic","sympathetic"], ["cruel","heartless","unfeeling"], ["the student is compassionate and empathetic","the student is cruel and heartless","the student is sympathetic but needs rest"], [666,667,668], 3), [666, 668, 667], 'Test 62');
test(topStudents(["proactive","initiative","leader"], ["passive","follower","inactive"], ["the student is proactive","the student is passive","the student is initiative","the student is follower","the student is leader","the student is inactive"], [8001,8002,8003,8004,8005,8006], 3), [8001, 8003, 8005], 'Test 63');
test(topStudents(["efficient","effective","productive"], ["inefficient","lazy","slow"], ["the student is very efficient","the student is lazy and inefficient","the student is slow but effective"], [3001,3002,3003], 2), [3001, 3003], 'Test 64');
test(topStudents(["friendly","helpful"], ["rude","mean","unkind"], ["the student is friendly and helpful","the student is unkind","the student is mean","the student is rude"], [15,20,25,30], 2), [15, 20], 'Test 65');
test(topStudents(["ambitious","determined","persistent"], ["procrastinator","inconsistent","lazy"], ["the student is ambitious and determined","the student is persistent","the student is a procrastinator","the student is inconsistent","the student is lazy but persistent"], [1001, 1002, 1003, 1004, 1005], 4), [1001, 1002, 1005, 1003], 'Test 66');
test(topStudents(["efficient","productive","focused"], ["unfocused","slow","inconsistent"], ["the student is productive","the student is focused","the student is efficient"], [10001,10002,10003], 2), [10001, 10002], 'Test 67');
test(topStudents(["innovative","creative","resourceful"], ["mediocre","unoriginal","unresourceful"], ["the student is innovative","the student is creative and resourceful","the student is mediocre","the student is unoriginal","the student is unresourceful","the student is innovative and unresourceful"], [5001, 5002, 5003, 5004, 5005, 5006], 2), [5002, 5001], 'Test 68');
test(topStudents(["efficient","productive","focused"], ["unfocused","distraught","inefficient"], ["the student is efficient","the student is unfocused","the student is productive","the student is distracted"], [5001,5002,5003,5004], 3), [5001, 5003, 5004], 'Test 69');
test(topStudents(["proactive","ambitious","determined"], ["lazy","apathetic","indifferent"], ["the student is proactive and ambitious","the student is lazy and apathetic","the student is determined and works hard","the student is indifferent but willing to try"], [4001,4002,4003,4004], 3), [4001, 4003, 4004], 'Test 70');
test(topStudents(["innovative","creative","ingenious"], ["incompetent","dull","inept"], ["the student is incompetent and dull","the student is creative and innovative","the student is inept but tries hard"], [150,151,152], 2), [151, 152], 'Test 71');
test(topStudents(["ingenious","creative","resourceful"], ["uncreative","inefficient","unproductive"], ["the student is ingenious and creative","the student is unproductive","the student is resourceful but inefficient"], [3001,3002,3003], 1), [3001], 'Test 72');
test(topStudents(["diligent","persevering","tenacious"], ["lazy","indolent","procrastinating"], ["the student is diligent and persevering","the student is indolent","the student is tenacious but lazy"], [7001,7002,7003], 2), [7001, 7003], 'Test 73');
test(topStudents(["hardworking","dedicated","persistent"], ["lazy","careless","unreliable"], ["the student is hardworking and dedicated","the student is lazy","the student is careless","the student is unreliable","the student is persistent but careless"], [201,202,203,204,205], 3), [201, 205, 202], 'Test 74');
test(topStudents(["motivated","driven"], ["apathetic","indifferent"], ["the student is motivated","the student is driven","the student is apathetic","the student is indifferent","the student is motivated but apathetic","the student is driven but indifferent"], [9001, 9002, 9003, 9004, 9005, 9006], 3), [9001, 9002, 9005], 'Test 75');
test(topStudents(["smart","brilliant","studious"], ["not","lazy","careless"], ["this student is not studious","the student is smart","the student is lazy but brilliant","the student is careless"], [1,2,3,4], 3), [2, 1, 3], 'Test 76');
test(topStudents(["outstanding","excellent","remarkable"], ["poor","bad","mediocre"], ["the student is outstanding and excellent","the student is mediocre","the student is poor"], [1001, 1002, 1003], 2), [1001, 1002], 'Test 77');
test(topStudents(["cooperative","collaborative","teamplayer"], ["uncooperative","selfish","individualistic"], ["the student is cooperative","the student is uncooperative","the student is collaborative","the student is selfish","the student is teamplayer","the student is individualistic"], [7001,7002,7003,7004,7005,7006], 2), [7001, 7003], 'Test 78');
test(topStudents(["attentive","focused","detail-oriented"], ["distracted","careless","negligent"], ["the student is attentive and focused","the student is negligent but eager to learn","the student is attentive and detail-oriented but sometimes careless"], [3001,3002,3003], 1), [3001], 'Test 79');
test(topStudents(["curious","knowledgeable","inquisitive"], ["ignorant","naive","unInfinityormed"], ["the student is curious","the student is knowledgeable","the student is inquisitive","the student is ignorant","the student is naive","the student is unInfinityormed","the student is curious and knowledgeable"], [5001, 5002, 5003, 5004, 5005, 5006, 5007], 3), [5007, 5001, 5002], 'Test 80');
test(topStudents(["perseverant","determined","ambitious"], ["lazy","indifferent","apathetic"], ["the student is perseverant and ambitious","the student is lazy","the student is indifferent","the student is apathetic"], [4001,4002,4003,4004], 1), [4001], 'Test 81');
test(topStudents(["outstanding","excellent","impressive"], ["poor","bad","mediocre"], ["the student is poor but trying hard","the student is excellent and impressive","the student is mediocre but not bad"], [1001,1002,1003], 2), [1002, 1001], 'Test 82');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

