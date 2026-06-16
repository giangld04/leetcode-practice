// Test: 1436. Destination City
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { destCity } = require("./solution");

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

console.log("\n1436. Destination City\n");

test(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 1');
test(destCity([["X","Y"],["Y","Z"],["Z","W"]]), W, 'Test 2');
test(destCity([["Chicago","Los Angeles"],["New York","Chicago"]]), Los Angeles, 'Test 3');
test(destCity([["B","C"],["D","B"],["C","A"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 4');
test(destCity([["A","Z"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 5');
test(destCity([["Chicago","Los Angeles"],["Los Angeles","Las Vegas"]]), Las Vegas, 'Test 6');
test(destCity([["Paris","Berlin"],["Berlin","Madrid"],["Madrid","Rome"]]), Rome, 'Test 7');
test(destCity([["B","C"],["D","B"],["C","A"]]), A, 'Test 8');
test(destCity([["Paris","Berlin"],["Berlin","Madrid"]]), Madrid, 'Test 9');
test(destCity([["A","Z"]]), Z, 'Test 10');
test(destCity([["Chicago","Los Angeles"],["Miami","Chicago"],["Los Angeles","New York"]]), New York, 'Test 11');
test(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]), Sao Paulo, 'Test 12');
test(destCity([["Boston","New York"],["New York","Philadelphia"],["Philadelphia","Washington"],["Washington","Baltimore"],["Baltimore","Annapolis"]]), Annapolis, 'Test 13');
test(destCity([["Alpha","Beta"],["Beta","Gamma"],["Gamma","Delta"],["Delta","Epsilon"],["Epsilon","Zeta"],["Zeta","Eta"]]), Eta, 'Test 14');
test(destCity([["Newark","Boston"],["Boston","Philadelphia"],["Philadelphia","New York"],["New York","Washington DC"],["Washington DC","Miami"],["Miami","Orlando"],["Orlando","Jacksonville"],["Jacksonville","Atlanta"]]), Atlanta, 'Test 15');
test(destCity([["A","B"],["B","C"],["C","D"],["D","E"],["E","F"],["F","G"],["G","H"],["H","I"],["I","J"],["J","K"]]), K, 'Test 16');
test(destCity([["Berlin","Hamburg"],["Hamburg","Copenhagen"],["Copenhagen","Stockholm"],["Stockholm","Oslo"],["Oslo","Trondheim"]]), Trondheim, 'Test 17');
test(destCity([["New York","Boston"],["Boston","Chicago"],["Chicago","Denver"],["Denver","Seattle"],["Seattle","San Francisco"],["San Francisco","Los Angeles"]]), Los Angeles, 'Test 18');
test(destCity([["Dublin","Belfast"],["Belfast","Derry"],["Derry","Londonderry"],["Londonderry","Limerick"],["Limerick","Galway"],["Galway","Sligo"],["Sligo","Cork"],["Cork","Kerry"],["Kerry","Waterford"],["Waterford","Limerick"]]), null, 'Test 19');
test(destCity([["San Francisco","Los Angeles"],["Los Angeles","San Diego"],["San Diego","Phoenix"],["Phoenix","Las Vegas"]]), Las Vegas, 'Test 20');
test(destCity([["Alpha","Beta"],["Gamma","Delta"],["Delta","Epsilon"],["Epsilon","Zeta"],["Zeta","Eta"],["Eta","Theta"]]), Beta, 'Test 21');
test(destCity([["Mars","Venus"],["Venus","Earth"],["Earth","Mars2"],["Mars2","Jupiter"],["Jupiter","Saturn"],["Saturn","Uranus"],["Uranus","Neptune"]]), Neptune, 'Test 22');
test(destCity([["Paris","Berlin"],["Berlin","Vienna"],["Vienna","Budapest"],["Budapest","Sofia"],["Sofia","Istanbul"],["Istanbul","Athens"],["Athens","Delhi"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 23');
test(destCity([["City1","City2"],["City3","City1"],["City4","City3"],["City5","City4"]]"""""), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 24');
test(destCity([["Cairo","Johannesburg"],["Johannesburg","Nairobi"],["Nairobi","Kinshasa"],["Kinshasa","Lagos"],["Lagos","Accra"],["Accra","Monrovia"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 25');
test(destCity([["Mumbai","Delhi"],["Delhi","Kolkata"],["Kolkata","Chennai"],["Chennai","Bangalore"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 26');
test(destCity([["Tokyo","Osaka"],["Osaka","Fukuoka"],["Fukuoka","Kyoto"],["Kyoto","Nagoya"],["Nagoya","Tokyo"]]), null, 'Test 27');
test(destCity([["Berlin","Hamburg"],["Hamburg","Munich"],["Munich","Stuttgart"],["Stuttgart","Frankfurt"],["Frankfurt","Düsseldorf"],["Düsseldorf","Cologne"],["Cologne","Dortmund"],["Dortmund","Wuppertal"]]), Wuppertal, 'Test 28');
test(destCity([["Vienna","Bratislava"],["Bratislava","Budapest"],["Budapest","Belgrade"],["Belgrade","Sofia"],["Sofia","Athens"],["Athens","Thessaloniki"],["Thessaloniki","Skopje"],["Skopje","Zagreb"],["Zagreb","Ljubljana"],["Ljubljana","Maribor"]]), Maribor, 'Test 29');
test(destCity([["Delhi","Agra"],["Agra","Jaipur"],["Jaipur","Jodhpur"],["Jodhpur","Jaisalmer"],["Jaisalmer","Bikaner"],["Bikaner","Ajmer"],["Ajmer","Udaipur"],["Udaipur","Rajkot"],["Rajkot","Surat"]]), Surat, 'Test 30');
test(destCity([["Beijing","Tokyo"],["Tokyo","Seoul"],["Seoul","Osaka"],["Osaka","Fukuoka"],["Fukuoka","Nagoya"],["Nagoya","Kyoto"],["Kyoto","Sapporo"]]), Sapporo, 'Test 31');
test(destCity([["Seattle","San Francisco"],["San Francisco","Los Angeles"],["Los Angeles","Las Vegas"],["Las Vegas","Phoenix"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 32');
test(destCity([["X","Y"],["Y","Z"],["Z","W"],["W","V"],["V","U"],["U","T"],["T","S"],["S","R"],["R","Q"]]), Q, 'Test 33');
test(destCity([["X","Y"],["Y","Z"],["Z","W"],["W","V"],["V","U"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 34');
test(destCity([["Berlin","Hamburg"],["Hamburg","Munich"],["Munich","Frankfurt"],["Frankfurt","Cologne"],["Cologne","Duesseldorf"],["Duesseldorf","Bremen"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 35');
test(destCity([["Atlanta","Charlotte"],["Charlotte","Miami"],["Miami","Tampa"],["Tampa","Orlando"],["Orlando","Fort Lauderdale"],["Fort Lauderdale","Key West"]]), Key West, 'Test 36');
test(destCity([["San Francisco","Los Angeles"],["Los Angeles","Las Vegas"],["Las Vegas","Seattle"],["Seattle","Portland"]]), Portland, 'Test 37');
test(destCity([["San Francisco","Seattle"],["Seattle","Denver"],["Denver","Austin"],["Austin","Houston"]]), Houston, 'Test 38');
test(destCity([["Miami","Orlando"],["Orlando","Tampa"],["Tampa","Jacksonville"],["Jacksonville","Daytona Beach"],["Daytona Beach","West Palm Beach"],["West Palm Beach","Fort Lauderdale"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 39');
test(destCity([["Casablanca","Tangier"],["Tangier","Fes"],["Fes","Meknes"],["Meknes","Fez"],["Fez","Rabat"],["Rabat","Agadir"],["Agadir","Essaouira"],["Essaouira","Marrakesh"]]), Marrakesh, 'Test 40');
test(destCity([["Boston","Miami"],["Miami","Orlando"],["Orlando","Jacksonville"],["Jacksonville","Atlanta"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 41');
test(destCity([["Chicago","Milwaukee"],["Milwaukee","Des Moines"],["Des Moines","Omaha"],["Omaha","Denver"],["Denver","Albuquerque"],["Albuquerque","El Paso"],["El Paso","Las Vegas"],["Las Vegas","Los Angeles"]]), Los Angeles, 'Test 42');
test(destCity([["Houston","Dallas"],["Dallas","Oklahoma City"],["Oklahoma City","Denver"],["Denver","Salt Lake City"],["Salt Lake City","Boise"],["Boise","Seattle"],["Seattle","Portland"],["Portland","Eugene"],["Eugene","Bend"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 43');
test(destCity([["Moscow","St. Petersburg"],["St. Petersburg","Vologda"],["Vologda","Arkhangelsk"],["Arkhangelsk","Murmansk"],["Murmansk","Norilsk"],["Norilsk","Narvik"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 44');
test(destCity([["Toronto","Ottawa"],["Ottawa","Montreal"],["Montreal","Quebec"],["Quebec","Halifax"],["Halifax","St. John's"],["St. John's","Gander"]]), Gander, 'Test 45');
test(destCity([["San Francisco","Seattle"],["Seattle","Vancouver"],["Vancouver","Calgary"],["Calgary","Edmonton"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 46');
test(destCity([["Sydney","Melbourne"],["Melbourne","Brisbane"],["Brisbane","Perth"],["Perth","Adelaide"],["Adelaide","Darwin"],["Darwin","Hobart"],["Hobart","Canberra"],["Canberra","Alice Springs"],["Alice Springs","Cairns"],["Cairns","Townsville"],["Townsville","Rockhampton"],["Rockhampton","Bundaberg"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 47');
test(destCity([["First","Second"],["Third","First"],["Fourth","Third"],["Fifth","Fourth"],["Sixth","Fifth"],["Seventh","Sixth"],["Eighth","Seventh"],["Ninth","Eighth"],["Tenth","Ninth"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 48');
test(destCity([["San Jose","San Francisco"],["San Francisco","Oakland"],["Oakland","Berkeley"],["Berkeley","San Rafael"],["San Rafael","Novato"],["Novato","Petaluma"],["Petaluma","Santa Rosa"],["Santa Rosa","Healdsburg"],["Healdsburg","Ukiah"],["Ukiah","Willits"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 49');
test(destCity([["Berlin","Frankfurt"],["Frankfurt","Stuttgart"],["Stuttgart","Zurich"],["Zurich","Milan"],["Milan","Rome"],["Rome","Naples"],["Naples","Palermo"],["Palermo","Catania"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 50');
test(destCity([["Rome","Florence"],["Florence","Venice"],["Venice","Milan"],["Milan","Turin"],["Turin","Genoa"],["Genoa","Pisa"],["Pisa","Lyon"]]), Lyon, 'Test 51');
test(destCity([["Athens","Berlin"],["Berlin","Cairo"],["Cairo","Dubai"],["Dubai","Fiji"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 52');
test(destCity([["Miami","Los Angeles"],["Los Angeles","Seattle"],["Seattle","Portland"],["Portland","Vancouver"],["Vancouver","Calgary"],["Calgary","Edmonton"],["Edmonton","Winnipeg"]]), Winnipeg, 'Test 53');
test(destCity([["Paris","Lyon"],["Lyon","Lyon"],["Lyon","Marseille"],["Marseille","Toulouse"],["Toulouse","Nice"]]), Nice, 'Test 54');
test(destCity([["Sydney","Melbourne"],["Melbourne","Brisbane"],["Brisbane","Adelaide"],["Adelaide","Perth"],["Perth","Alice Springs"],["Alice Springs","Cairns"]]), Cairns, 'Test 55');
test(destCity([["Berlin","Hamburg"],["Hamburg","Munich"],["Munich","Frankfurt"],["Frankfurt","Stuttgart"],["Stuttgart","Dortmund"],["Dortmund","Cologne"]]), Cologne, 'Test 56');
test(destCity([["San Francisco","Seattle"],["Seattle","Portland"],["Portland","Eugene"],["Eugene","Medford"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 57');
test(destCity([["Node1","Node2"],["Node2","Node3"],["Node3","Node4"],["Node4","Node5"],["Node5","Node6"],["Node6","Node7"],["Node7","Node8"],["Node8","Node9"],["Node9","Node10"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 58');
test(destCity([["One","Two"],["Three","One"],["Four","Three"],["Five","Four"],["Six","Five"],["Seven","Six"],["Eight","Seven"],["Nine","Eight"],["Ten","Nine"],["Eleven","Ten"],["Twelve","Eleven"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 59');
test(destCity([["First","Second"],["Second","Third"],["Third","Fourth"],["Fourth","Fifth"],["Fifth","Sixth"],["Sixth","Seventh"],["Seventh","Eighth"],["Eighth","Ninth"],["Ninth","Tenth"],["Tenth","Eleventh"],["Eleventh","Twelfth"],["Twelfth","Thirteenth"],["Thirteenth","Fourteenth"],["Fourteenth","Fifteenth"],["Fifteenth","Sixteenth"],["Sixteenth","Seventeenth"],["Seventeenth","Eighteenth"],["Eighteenth","Nineteenth"],["Nineteenth","Twentieth"],["Twentieth","TwentyFirst"],["TwentyFirst","TwentySecond"],["TwentySecond","TwentyThird"],["TwentyThird","TwentyFourth"],["TwentyFourth","TwentyFifth"]]), TwentyFifth, 'Test 60');
test(destCity([["New York","Chicago"],["Chicago","Denver"],["Denver","Phoenix"],["Phoenix","Los Angeles"],["Los Angeles","San Francisco"]]), San Francisco, 'Test 61');
test(destCity([["Oslo","Stockholm"],["Stockholm","Helsinki"],["Helsinki","Riga"],["Riga","Vilnius"],["Vilnius","Warsaw"],["Warsaw","Krakow"],["Krakow","Berlin"],["Berlin","Hamburg"]]), Hamburg, 'Test 62');
test(destCity([["Madrid","Barcelona"],["Barcelona","Valencia"],["Valencia","Sevilla"],["Sevilla","Malaga"],["Malaga","Almeria"],["Almeria","Murcia"],["Murcia","Alicante"],["Alicante","Castellon"],["Castellon","Valencia"],["Valencia","Burgos"],["Burgos","Santander"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 63');
test(destCity([["Start","End1"],["End1","End2"],["End2","End3"],["End3","End4"],["End4","End5"],["End5","End6"],["End6","End7"],["End7","End8"],["End8","End9"],["End9","End10"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 64');
test(destCity([["Paris","Lyon"],["Lyon","Marseille"],["Marseille","Lyon"],["Lyon","Nantes"],["Nantes","Bordeaux"],["Bordeaux","Lyon"],["Lyon","Lille"],["Lille","Brussels"],["Brussels","Berlin"],["Berlin","Hamburg"],["Hamburg","Cologne"],["Cologne","Munich"],["Munich","Vienna"],["Vienna","Budapest"],["Budapest","Bratislava"],["Bratislava","Prague"],["Prague","Wroclaw"],["Wroclaw","Krakow"],["Krakow","Gdansk"],["Gdansk","Warsaw"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 65');
test(destCity([["Detroit","Cleveland"],["Cleveland","Cincinnati"],["Cincinnati","Louisville"],["Louisville","Nashville"],["Nashville","Memphis"],["Memphis","Jackson"],["Jackson","Little Rock"],["Little Rock","Shreveport"],["Shreveport","Monroe"],["Monroe","Baton Rouge"],["Baton Rouge","Lafayette"],["Lafayette","New Orleans"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 66');
test(destCity([["A1","B1"],["C1","A1"],["D1","C1"],["E1","D1"],["F1","E1"],["G1","F1"],["H1","G1"],["I1","H1"],["J1","I1"],["K1","J1"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 67');
test(destCity([["CityX","CityY"],["CityY","CityZ"],["CityZ","CityW"],["CityW","CityV"],["CityV","CityU"],["CityU","CityT"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 68');
test(destCity([["A","B"],["C","A"],["D","C"],["E","D"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 69');
test(destCity([["Istanbul","Ankara"],["Ankara","Eskisehir"],["Eskisehir","Konya"],["Konya","Gaziantep"],["Gaziantep","Sanliurfa"],["Sanliurfa","Mardin"],["Mardin","Diyarbakir"],["Diyarbakir","Siirt"],["Siirt","Elazig"],["Elazig","Malatya"]]), Malatya, 'Test 70');
test(destCity([["Vienna","Innsbruck"],["Innsbruck","Graz"],["Graz","Linz"],["Linz","Salzburg"],["Salzburg","Wien"],["Wien","Graz"],["Graz","Ljubljana"],["Ljubljana","Zagreb"],["Zagreb","Belgrade"],["Belgrade","Sofia"],["Sofia","Bucharest"],["Bucharest","Bucuresti"]]), Bucuresti, 'Test 71');
test(destCity([["A","B"],["B","C"],["C","D"],["D","E"],["E","F"],["F","G"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 72');
test(destCity([["Vancouver","Calgary"],["Calgary","Edmonton"],["Edmonton","Winnipeg"],["Winnipeg","Thunder Bay"],["Thunder Bay","Toronto"],["Toronto","Ottawa"],["Ottawa","Quebec City"],["Quebec City","Montreal"]]), Montreal, 'Test 73');
test(destCity([["Tokyo","Osaka"],["Osaka","Kyoto"],["Kyoto","Nagoya"],["Nagoya","Fukuoka"],["Fukuoka","Sapporo"]]), Sapporo, 'Test 74');
test(destCity([["New York","Boston"],["Boston","Chicago"],["Chicago","Houston"],["Houston","Miami"],["Miami","Orlando"]]), Orlando, 'Test 75');
test(destCity([["City1","City2"],["City2","City3"],["City3","City4"],["City4","City5"],["City5","City6"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 76');
test(destCity([["Lagos","Kano"],["Kano","Ilorin"],["Ilorin","Ibadan"],["Ibadan","Osogbo"],["Osogbo","Akure"],["Akure","Ondo"],["Ondo","Port Harcourt"],["Port Harcourt","Calabar"],["Calabar","Cross River"]]), Cross River, 'Test 77');
test(destCity([["Miami","Orlando"],["Orlando","Atlanta"],["Atlanta","Chicago"],["Chicago","Denver"],["Denver","Las Vegas"],["Las Vegas","Seattle"]]), Seattle, 'Test 78');
test(destCity([["Hyderabad","Bangalore"],["Bangalore","Mysuru"],["Mysuru","Mangalore"],["Mangalore","Udupi"],["Udupi","Karwar"]]), Karwar, 'Test 79');
test(destCity([["Mumbai","Delhi"],["Delhi","Chennai"],["Chennai","Bangalore"],["Bangalore","Hyderabad"],["Hyderabad","Ahmedabad"],["Ahmedabad","Kolkata"]]), Kolkata, 'Test 80');
test(destCity([["Vienna","Salzburg"],["Salzburg","Innsbruck"],["Innsbruck","Linz"],["Linz","Graz"],["Graz","Steyr"],["Steyr","Klagenfurt"]]), Klagenfurt, 'Test 81');
test(destCity([["M","N"],["O","M"],["P","O"],["Q","P"],["R","Q"],["S","R"],["T","S"]]), N, 'Test 82');
test(destCity([["City1","City2"],["City2","City3"],["City3","City4"],["City4","City5"],["City5","City6"],["City6","City7"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 83');
test(destCity([["Houston","Dallas"],["Dallas","San Antonio"],["San Antonio","El Paso"],["El Paso","Las Vegas"],["Las Vegas","Los Angeles"],["Los Angeles","Sacramento"]]), Sacramento, 'Test 84');
test(destCity([["Lisbon","Porto"],["Porto","Braga"],["Braga","Guimaraes"],["Guimaraes","Vila Real"],["Vila Real","Braganca"],["Braganca","Viseu"],["Viseu","Guarda"],["Guarda","Castelo Branco"],["Castelo Branco","Coimbra"],["Coimbra","Leiria"],["Leiria","Faro"],["Faro","Evora"]]), Evora, 'Test 85');
test(destCity([["Sydney","Melbourne"],["Melbourne","Brisbane"],["Brisbane","Perth"],["Perth","Adelaide"],["Adelaide","Darwin"]]), Darwin, 'Test 86');
test(destCity([["Berlin","Hamburg"],["Hamburg","Frankfurt"],["Frankfurt","Munich"],["Munich","Stuttgart"],["Stuttgart","Zurich"],["Zurich","Geneva"],["Geneva","Lyon"]]), Lyon, 'Test 87');
test(destCity([["Origin","FirstStop"],["FirstStop","SecondStop"],["SecondStop","ThirdStop"],["ThirdStop","FourthStop"],["FourthStop","FifthStop"],["FifthStop","SixthStop"],["SixthStop","SeventhStop"],["SeventhStop","EighthStop"],["EighthStop","NinthStop"],["NinthStop","TenthStop"],["TenthStop","EleventhStop"],["EleventhStop","TwelfthStop"],["TwelfthStop","ThirteenthStop"],["ThirteenthStop","FourteenthStop"],["FourteenthStop","FifteenthStop"],["FifteenthStop","SixteenthStop"],["SixteenthStop","SeventeenthStop"],["SeventeenthStop","EighteenthStop"],["EighteenthStop","NineteenthStop"],["NineteenthStop","TwentiethStop"],["TwentiethStop","TwentyFirstStop"],["TwentyFirstStop","TwentySecondStop"],["TwentySecondStop","TwentyThirdStop"],["TwentyThirdStop","TwentyFourthStop"],["TwentyFourthStop","TwentyFifthStop"],["TwentyFifthStop","Destination"]]), Destination, 'Test 88');
test(destCity([["Sydney","Melbourne"],["Melbourne","Brisbane"],["Brisbane","Perth"],["Perth","Adelaide"],["Adelaide","Darwin"],["Darwin","Canberra"]]), Canberra, 'Test 89');
test(destCity([["Paris","Berlin"],["Berlin","Vienna"],["Vienna","Budapest"],["Budapest","Prague"],["Prague","Warsaw"],["Warsaw","Krakow"]]), Krakow, 'Test 90');
test(destCity([["San Francisco","Los Angeles"],["Los Angeles","Phoenix"],["Phoenix","Denver"],["Denver","Chicago"]]), Chicago, 'Test 91');
test(destCity([["Vienna","Prague"],["Prague","Bratislava"],["Bratislava","Budapest"],["Budapest","Belgrade"],["Belgrade","Sofia"],["Sofia","Istanbul"],["Istanbul","Athens"],["Athens","Delhi"],["Delhi","Mumbai"]]), Mumbai, 'Test 92');
test(destCity([["Toronto","Ottawa"],["Ottawa","Montreal"],["Montreal","Quebec City"],["Quebec City","St. John's"]]), St. John's, 'Test 93');
test(destCity([["Alpha","Beta"],["Gamma","Alpha"],["Delta","Gamma"],["Epsilon","Delta"],["Zeta","Epsilon"]]), Beta, 'Test 94');
test(destCity([["Tokyo","Osaka"],["Osaka","Kyoto"],["Kyoto","Fukuoka"],["Fukuoka","Sapporo"],["Sapporo","Hokkaido"],["Hokkaido","Nagoya"],["Nagoya","Yokohama"]]), Yokohama, 'Test 95');
test(destCity([["Seattle","Portland"],["Portland","Eugene"],["Eugene","Bend"],["Bend","Medford"],["Medford","Ashland"],["Ashland","Crater Lake"]]), Crater Lake, 'Test 96');
test(destCity([["Tokyo","Osaka"],["Osaka","Kyoto"],["Kyoto","Nagoya"],["Nagoya","Fukuoka"],["Fukuoka","Sapporo"],["Sapporo","Hokkaido"],["Hokkaido","Kushiro"],["Kushiro","Hakodate"],["Hakodate","Nikko"],["Nikko","Aomori"],["Aomori","Sendai"],["Sendai","Matsue"],["Matsue","Yokohama"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 97');
test(destCity([["San Francisco","San Jose"],["San Jose","San Diego"],["San Diego","Los Angeles"],["Los Angeles","Las Vegas"],["Las Vegas","Reno"],["Reno","Salt Lake City"],["Salt Lake City","Denver"],["Denver","Kansas City"],["Kansas City","Omaha"],["Omaha","Chicago"],["Chicago","Milwaukee"],["Milwaukee","Madison"],["Madison","Green Bay"]]), Green Bay, 'Test 98');
test(destCity([["NodeA","NodeB"],["NodeB","NodeC"],["NodeC","NodeD"],["NodeD","NodeE"],["NodeE","NodeF"],["NodeF","NodeG"],["NodeG","NodeH"],["NodeH","NodeI"],["NodeI","NodeJ"],["NodeJ","NodeK"],["NodeK","NodeL"],["NodeL","NodeM"],["NodeM","NodeN"],["NodeN","NodeO"],["NodeO","NodeP"],["NodeP","NodeQ"],["NodeQ","NodeR"],["NodeR","NodeS"],["NodeS","NodeT"]]), NodeT, 'Test 99');
test(destCity([["Oslo","Helsinki"],["Helsinki","Stockholm"],["Stockholm","Reykjavik"],["Reykjavik","Vilnius"],["Vilnius","Riga"]]), Riga, 'Test 100');
test(destCity([["Amsterdam","Berlin"],["Berlin","Copenhagen"],["Copenhagen","Stockholm"],["Stockholm","Oslo"],["Oslo","Helsinki"],["Helsinki","Reykjavik"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 101');
test(destCity([["Sydney","Melbourne"],["Melbourne","Brisbane"],["Brisbane","Adelaide"],["Adelaide","Perth"],["Perth","Darwin"],["Darwin","Alice Springs"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 102');
test(destCity([["A","B"],["B","C"],["C","D"],["D","E"],["E","F"],["F","G"],["G","H"]]), H, 'Test 103');
test(destCity([["Start","Middle"],["Middle","End1"],["End1","End2"],["End2","End3"],["End3","End4"],["End4","FinalDestination"]]), FinalDestination, 'Test 104');
test(destCity([["Dubai","Abu Dhabi"],["Abu Dhabi","Masqat"],["Masqat","Masqat"],["Masqat","Muskat"],["Muskat","Masqat"]]), null, 'Test 105');
test(destCity([["Doha","Abu Dhabi"],["Abu Dhabi","Masqat"],["Masqat","Dubai"],["Dubai","Sharjah"],["Sharjah","Ras Al Khaimah"],["Ras Al Khaimah","Fujairah"]]), Fujairah, 'Test 106');
test(destCity([["Sydney","Melbourne"],["Melbourne","Brisbane"],["Brisbane","Perth"],["Perth","Adelaide"],["Adelaide","Gold Coast"],["Gold Coast","Darwin"],["Darwin","Alice Springs"],["Alice Springs","Uluru"]]), Uluru, 'Test 107');
test(destCity([["Los Angeles","San Diego"],["San Diego","San Jose"],["San Jose","Sacramento"],["Sacramento","Reno"],["Reno","Salt Lake City"],["Salt Lake City","Boise"],["Boise","Spokane"]]), Spokane, 'Test 108');
test(destCity([["Source","Dest1"],["Dest1","Dest2"],["Dest2","Dest3"],["Dest3","Dest4"],["Dest4","Dest5"],["Dest5","Dest6"],["Dest6","Dest7"],["Dest7","Dest8"],["Dest8","Dest9"],["Dest9","Dest10"],["Dest10","Dest11"],["Dest11","Dest12"],["Dest12","Destination"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 109');
test(destCity([["New Delhi","Bangalore"],["Bangalore","Chennai"],["Chennai","Hyderabad"],["Hyderabad","Mumbai"],["Mumbai","Pune"],["Pune","Kochi"],["Kochi","Trivandrum"]]), Trivandrum, 'Test 110');
test(destCity([["Oslo","Stockholm"],["Stockholm","Copenhagen"],["Copenhagen","Helsinki"],["Helsinki","Reykjavik"],["Reykjavik","Berlin"],["Berlin","Vienna"],["Vienna","Prague"],["Prague","Zurich"],["Zurich","Amsterdam"],["Amsterdam","Paris"],["Paris","Lyon"],["Lyon","Madrid"],["Madrid","Barcelona"],["Barcelona","Rome"],["Rome","Athens"],["Athens","Istanbul"]]"), Error: Solution.destCity[] missing 1 required positional argument: 'paths', 'Test 111');
test(destCity([["Sydney","Melbourne"],["Melbourne","Brisbane"],["Brisbane","Perth"],["Perth","Adelaide"],["Adelaide","Alice Springs"]]), Alice Springs, 'Test 112');
test(destCity([["Tokyo","Osaka"],["Osaka","Kyoto"],["Kyoto","Nagoya"],["Nagoya","Fukuoka"],["Fukuoka","Sapporo"],["Sapporo","Hokkaido"]]), Hokkaido, 'Test 113');
test(destCity([["Cairo","Luxor"],["Luxor","Aswan"],["Aswan","Assiut"],["Assiut","Ismailia"],["Ismailia","Suez"],["Suez","Port Said"],["Port Said","Alexandria"],["Alexandria","Damietta"],["Damietta","Mansoura"],["Mansoura","Tanta"],["Tanta","Qena"]]), Qena, 'Test 114');
test(destCity([["Kuala Lumpur","George Town"],["George Town","Ipoh"],["Ipoh","Perak"],["Perak","Klang"],["Klang","Petaling Jaya"]]), Petaling Jaya, 'Test 115');

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
