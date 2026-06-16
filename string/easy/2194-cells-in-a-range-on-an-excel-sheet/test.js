// Test: 2194. Cells In A Range On An Excel Sheet
// 183 test cases from LeetCodeDataset
// Run: node test.js

const { cellsInRange } = require("./solution");

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

console.log("\n2194. Cells In A Range On An Excel Sheet\n");

test(cellsInRange("D4:H6"), ['D4', 'D5', 'D6', 'E4', 'E5', 'E6', 'F4', 'F5', 'F6', 'G4', 'G5', 'G6', 'H4', 'H5', 'H6'], 'Test 1');
test(cellsInRange("K1:L2"), ['K1', 'K2', 'L1', 'L2'], 'Test 2');
test(cellsInRange("A1:F1"), ['A1', 'B1', 'C1', 'D1', 'E1', 'F1'], 'Test 3');
test(cellsInRange("B2:D3"), ['B2', 'B3', 'C2', 'C3', 'D2', 'D3'], 'Test 4');
test(cellsInRange("Z1:Z9"), ['Z1', 'Z2', 'Z3', 'Z4', 'Z5', 'Z6', 'Z7', 'Z8', 'Z9'], 'Test 5');
test(cellsInRange("Z1:Z5"), ['Z1', 'Z2', 'Z3', 'Z4', 'Z5'], 'Test 6');
test(cellsInRange("A1:A1"), ['A1'], 'Test 7');
test(cellsInRange("B2:C3"), ['B2', 'B3', 'C2', 'C3'], 'Test 8');
test(cellsInRange("Y2:Z8"), ['Y2', 'Y3', 'Y4', 'Y5', 'Y6', 'Y7', 'Y8', 'Z2', 'Z3', 'Z4', 'Z5', 'Z6', 'Z7', 'Z8'], 'Test 9');
test(cellsInRange("L2:W7"), ['L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7', 'O2', 'O3', 'O4', 'O5', 'O6', 'O7', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'U2', 'U3', 'U4', 'U5', 'U6', 'U7', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'], 'Test 10');
test(cellsInRange("Y5:Z8"), ['Y5', 'Y6', 'Y7', 'Y8', 'Z5', 'Z6', 'Z7', 'Z8'], 'Test 11');
test(cellsInRange("T1:U8"), ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'U1', 'U2', 'U3', 'U4', 'U5', 'U6', 'U7', 'U8'], 'Test 12');
test(cellsInRange("V6:W15"), [], 'Test 13');
test(cellsInRange("Z1:Z26"), [], 'Test 14');
test(cellsInRange("C1:C26"), [], 'Test 15');
test(cellsInRange("D5:D5"), ['D5'], 'Test 16');
test(cellsInRange("J2:L3"), ['J2', 'J3', 'K2', 'K3', 'L2', 'L3'], 'Test 17');
test(cellsInRange("A1:Z9"), ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8', 'K9', 'L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7', 'N8', 'N9', 'O1', 'O2', 'O3', 'O4', 'O5', 'O6', 'O7', 'O8', 'O9', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'U1', 'U2', 'U3', 'U4', 'U5', 'U6', 'U7', 'U8', 'U9', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8', 'X9', 'Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6', 'Y7', 'Y8', 'Y9', 'Z1', 'Z2', 'Z3', 'Z4', 'Z5', 'Z6', 'Z7', 'Z8', 'Z9'], 'Test 18');
test(cellsInRange("F1:F26"), [], 'Test 19');
test(cellsInRange("S1:T7"), ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'], 'Test 20');
test(cellsInRange("M3:P7"), ['M3', 'M4', 'M5', 'M6', 'M7', 'N3', 'N4', 'N5', 'N6', 'N7', 'O3', 'O4', 'O5', 'O6', 'O7', 'P3', 'P4', 'P5', 'P6', 'P7'], 'Test 21');
test(cellsInRange("F4:H7"), ['F4', 'F5', 'F6', 'F7', 'G4', 'G5', 'G6', 'G7', 'H4', 'H5', 'H6', 'H7'], 'Test 22');
test(cellsInRange("Q1:Z2"), ['Q1', 'Q2', 'R1', 'R2', 'S1', 'S2', 'T1', 'T2', 'U1', 'U2', 'V1', 'V2', 'W1', 'W2', 'X1', 'X2', 'Y1', 'Y2', 'Z1', 'Z2'], 'Test 23');
test(cellsInRange("I1:I26"), [], 'Test 24');
test(cellsInRange("M1:N6"), ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'N1', 'N2', 'N3', 'N4', 'N5', 'N6'], 'Test 25');
test(cellsInRange("Q7:R10"), [], 'Test 26');
test(cellsInRange("W1:W26"), [], 'Test 27');
test(cellsInRange("CD10:CE15"), [], 'Test 28');
test(cellsInRange("M3:N4"), ['M3', 'M4', 'N3', 'N4'], 'Test 29');
test(cellsInRange("T2:U5"), ['T2', 'T3', 'T4', 'T5', 'U2', 'U3', 'U4', 'U5'], 'Test 30');
test(cellsInRange("D8:F11"), [], 'Test 31');
test(cellsInRange("N3:O5"), ['N3', 'N4', 'N5', 'O3', 'O4', 'O5'], 'Test 32');
test(cellsInRange("G1:V9"), ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8', 'K9', 'L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7', 'N8', 'N9', 'O1', 'O2', 'O3', 'O4', 'O5', 'O6', 'O7', 'O8', 'O9', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'U1', 'U2', 'U3', 'U4', 'U5', 'U6', 'U7', 'U8', 'U9', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9'], 'Test 33');
test(cellsInRange("B1:B26"), [], 'Test 34');
test(cellsInRange("A1:AC5"), ['A1', 'A2', 'A3', 'A4', 'A5', 'B1', 'B2', 'B3', 'B4', 'B5', 'C1', 'C2', 'C3', 'C4', 'C5'], 'Test 35');
test(cellsInRange("D1:D9"), ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9'], 'Test 36');
test(cellsInRange("R1:T4"), ['R1', 'R2', 'R3', 'R4', 'S1', 'S2', 'S3', 'S4', 'T1', 'T2', 'T3', 'T4'], 'Test 37');
test(cellsInRange("K1:K26"), [], 'Test 38');
test(cellsInRange("Y1:Z2"), ['Y1', 'Y2', 'Z1', 'Z2'], 'Test 39');
test(cellsInRange("I2:J5"), ['I2', 'I3', 'I4', 'I5', 'J2', 'J3', 'J4', 'J5'], 'Test 40');
test(cellsInRange("E3:G7"), ['E3', 'E4', 'E5', 'E6', 'E7', 'F3', 'F4', 'F5', 'F6', 'F7', 'G3', 'G4', 'G5', 'G6', 'G7'], 'Test 41');
test(cellsInRange("V1:V26"), [], 'Test 42');
test(cellsInRange("O1:O26"), [], 'Test 43');
test(cellsInRange("V5:X8"), ['V5', 'V6', 'V7', 'V8', 'W5', 'W6', 'W7', 'W8', 'X5', 'X6', 'X7', 'X8'], 'Test 44');
test(cellsInRange("Q1:R26"), [], 'Test 45');
test(cellsInRange("R1:R26"), [], 'Test 46');
test(cellsInRange("M1:M10"), [], 'Test 47');
test(cellsInRange("AA1:AZ5"), Error: invalid literal for int[] with base 10: 'A', 'Test 48');
test(cellsInRange("N5:N9"), ['N5', 'N6', 'N7', 'N8', 'N9'], 'Test 49');
test(cellsInRange("G1:H10"), [], 'Test 50');
test(cellsInRange("X1:Y2"), ['X1', 'X2', 'Y1', 'Y2'], 'Test 51');
test(cellsInRange("W1:X10"), [], 'Test 52');
test(cellsInRange("E1:F10"), [], 'Test 53');
test(cellsInRange("F3:K8"), ['F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8'], 'Test 54');
test(cellsInRange("J2:T6"), ['J2', 'J3', 'J4', 'J5', 'J6', 'K2', 'K3', 'K4', 'K5', 'K6', 'L2', 'L3', 'L4', 'L5', 'L6', 'M2', 'M3', 'M4', 'M5', 'M6', 'N2', 'N3', 'N4', 'N5', 'N6', 'O2', 'O3', 'O4', 'O5', 'O6', 'P2', 'P3', 'P4', 'P5', 'P6', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'R2', 'R3', 'R4', 'R5', 'R6', 'S2', 'S3', 'S4', 'S5', 'S6', 'T2', 'T3', 'T4', 'T5', 'T6'], 'Test 55');
test(cellsInRange("E5:T10"), [], 'Test 56');
test(cellsInRange("X1:X9"), ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8', 'X9'], 'Test 57');
test(cellsInRange("Y1:Z10"), [], 'Test 58');
test(cellsInRange("D1:G3"), ['D1', 'D2', 'D3', 'E1', 'E2', 'E3', 'F1', 'F2', 'F3', 'G1', 'G2', 'G3'], 'Test 59');
test(cellsInRange("A1:Z1"), ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1', 'K1', 'L1', 'M1', 'N1', 'O1', 'P1', 'Q1', 'R1', 'S1', 'T1', 'U1', 'V1', 'W1', 'X1', 'Y1', 'Z1'], 'Test 60');
test(cellsInRange("T1:U5"), ['T1', 'T2', 'T3', 'T4', 'T5', 'U1', 'U2', 'U3', 'U4', 'U5'], 'Test 61');
test(cellsInRange("Y10:Z15"), [], 'Test 62');
test(cellsInRange("J1:J26"), [], 'Test 63');
test(cellsInRange("E1:E26"), [], 'Test 64');
test(cellsInRange("X5:AA10"), [], 'Test 65');
test(cellsInRange("AA1:AB2"), Error: invalid literal for int[] with base 10: 'A', 'Test 66');
test(cellsInRange("G10:H12"), [], 'Test 67');
test(cellsInRange("Q1:R10"), [], 'Test 68');
test(cellsInRange("A1:BC3"), ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'], 'Test 69');
test(cellsInRange("B1:Z9"), ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8', 'K9', 'L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7', 'N8', 'N9', 'O1', 'O2', 'O3', 'O4', 'O5', 'O6', 'O7', 'O8', 'O9', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'U1', 'U2', 'U3', 'U4', 'U5', 'U6', 'U7', 'U8', 'U9', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8', 'X9', 'Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6', 'Y7', 'Y8', 'Y9', 'Z1', 'Z2', 'Z3', 'Z4', 'Z5', 'Z6', 'Z7', 'Z8', 'Z9'], 'Test 70');
test(cellsInRange("R15:S25"), [], 'Test 71');
test(cellsInRange("S1:T10"), [], 'Test 72');
test(cellsInRange("P1:S4"), ['P1', 'P2', 'P3', 'P4', 'Q1', 'Q2', 'Q3', 'Q4', 'R1', 'R2', 'R3', 'R4', 'S1', 'S2', 'S3', 'S4'], 'Test 73');
test(cellsInRange("A1:A26"), [], 'Test 74');
test(cellsInRange("R2:S6"), ['R2', 'R3', 'R4', 'R5', 'R6', 'S2', 'S3', 'S4', 'S5', 'S6'], 'Test 75');
test(cellsInRange("M1:N1"), ['M1', 'N1'], 'Test 76');
test(cellsInRange("A10:A12"), [], 'Test 77');
test(cellsInRange("A1:Z26"), [], 'Test 78');
test(cellsInRange("XYZ1:XYZ2"), Error: invalid literal for int[] with base 10: 'Y', 'Test 79');
test(cellsInRange("F1:J10"), [], 'Test 80');
test(cellsInRange("G2:H2"), ['G2', 'H2'], 'Test 81');
test(cellsInRange("Z1:AA5"), [], 'Test 82');
test(cellsInRange("Y1:Y26"), [], 'Test 83');
test(cellsInRange("C2:Y7"), ['C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7', 'O2', 'O3', 'O4', 'O5', 'O6', 'O7', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'U2', 'U3', 'U4', 'U5', 'U6', 'U7', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6', 'Y7'], 'Test 84');
test(cellsInRange("X3:Y7"), ['X3', 'X4', 'X5', 'X6', 'X7', 'Y3', 'Y4', 'Y5', 'Y6', 'Y7'], 'Test 85');
test(cellsInRange("X25:Y30"), [], 'Test 86');
test(cellsInRange("A1:AA26"), [], 'Test 87');
test(cellsInRange("C3:D7"), ['C3', 'C4', 'C5', 'C6', 'C7', 'D3', 'D4', 'D5', 'D6', 'D7'], 'Test 88');
test(cellsInRange("C1:D5"), ['C1', 'C2', 'C3', 'C4', 'C5', 'D1', 'D2', 'D3', 'D4', 'D5'], 'Test 89');
test(cellsInRange("A1:X9"), ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8', 'K9', 'L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7', 'N8', 'N9', 'O1', 'O2', 'O3', 'O4', 'O5', 'O6', 'O7', 'O8', 'O9', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'U1', 'U2', 'U3', 'U4', 'U5', 'U6', 'U7', 'U8', 'U9', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8', 'X9'], 'Test 90');
test(cellsInRange("H8:H8"), ['H8'], 'Test 91');
test(cellsInRange("AA1:AB5"), Error: invalid literal for int[] with base 10: 'A', 'Test 92');
test(cellsInRange("G7:H9"), ['G7', 'G8', 'G9', 'H7', 'H8', 'H9'], 'Test 93');
test(cellsInRange("M5:N10"), [], 'Test 94');
test(cellsInRange("U1:V10"), [], 'Test 95');
test(cellsInRange("M5:R10"), [], 'Test 96');
test(cellsInRange("A1:AB1"), ['A1', 'B1'], 'Test 97');
test(cellsInRange("A1:B10"), [], 'Test 98');
test(cellsInRange("AA1:BB5"), Error: invalid literal for int[] with base 10: 'A', 'Test 99');
test(cellsInRange("T1:T26"), [], 'Test 100');
test(cellsInRange("W10:X20"), [], 'Test 101');
test(cellsInRange("Y1:Z3"), ['Y1', 'Y2', 'Y3', 'Z1', 'Z2', 'Z3'], 'Test 102');
test(cellsInRange("H1:H26"), [], 'Test 103');
test(cellsInRange("X1:Y6"), ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6'], 'Test 104');
test(cellsInRange("D1:F9"), ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9'], 'Test 105');
test(cellsInRange("B4:E8"), ['B4', 'B5', 'B6', 'B7', 'B8', 'C4', 'C5', 'C6', 'C7', 'C8', 'D4', 'D5', 'D6', 'D7', 'D8', 'E4', 'E5', 'E6', 'E7', 'E8'], 'Test 106');
test(cellsInRange("F6:F20"), [], 'Test 107');
test(cellsInRange("L1:L26"), [], 'Test 108');
test(cellsInRange("Y20:AB25"), [], 'Test 109');
test(cellsInRange("Q20:R22"), [], 'Test 110');
test(cellsInRange("J10:K15"), [], 'Test 111');
test(cellsInRange("AA10:AB10"), [], 'Test 112');
test(cellsInRange("D5:H7"), ['D5', 'D6', 'D7', 'E5', 'E6', 'E7', 'F5', 'F6', 'F7', 'G5', 'G6', 'G7', 'H5', 'H6', 'H7'], 'Test 113');
test(cellsInRange("X1:Z1"), ['X1', 'Y1', 'Z1'], 'Test 114');
test(cellsInRange("S1:Z3"), ['S1', 'S2', 'S3', 'T1', 'T2', 'T3', 'U1', 'U2', 'U3', 'V1', 'V2', 'V3', 'W1', 'W2', 'W3', 'X1', 'X2', 'X3', 'Y1', 'Y2', 'Y3', 'Z1', 'Z2', 'Z3'], 'Test 115');
test(cellsInRange("I5:K7"), ['I5', 'I6', 'I7', 'J5', 'J6', 'J7', 'K5', 'K6', 'K7'], 'Test 116');
test(cellsInRange("P10:Q20"), [], 'Test 117');
test(cellsInRange("M10:N15"), [], 'Test 118');
test(cellsInRange("J1:K5"), ['J1', 'J2', 'J3', 'J4', 'J5', 'K1', 'K2', 'K3', 'K4', 'K5'], 'Test 119');
test(cellsInRange("M1:N12"), [], 'Test 120');
test(cellsInRange("M5:T8"), ['M5', 'M6', 'M7', 'M8', 'N5', 'N6', 'N7', 'N8', 'O5', 'O6', 'O7', 'O8', 'P5', 'P6', 'P7', 'P8', 'Q5', 'Q6', 'Q7', 'Q8', 'R5', 'R6', 'R7', 'R8', 'S5', 'S6', 'S7', 'S8', 'T5', 'T6', 'T7', 'T8'], 'Test 121');
test(cellsInRange("A2:A9"), ['A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9'], 'Test 122');
test(cellsInRange("G1:G26"), [], 'Test 123');
test(cellsInRange("J2:L5"), ['J2', 'J3', 'J4', 'J5', 'K2', 'K3', 'K4', 'K5', 'L2', 'L3', 'L4', 'L5'], 'Test 124');
test(cellsInRange("G5:I8"), ['G5', 'G6', 'G7', 'G8', 'H5', 'H6', 'H7', 'H8', 'I5', 'I6', 'I7', 'I8'], 'Test 125');
test(cellsInRange("U1:U26"), [], 'Test 126');
test(cellsInRange("B1:B10"), [], 'Test 127');
test(cellsInRange("O1:P10"), [], 'Test 128');
test(cellsInRange("A3:C6"), ['A3', 'A4', 'A5', 'A6', 'B3', 'B4', 'B5', 'B6', 'C3', 'C4', 'C5', 'C6'], 'Test 129');
test(cellsInRange("M1:M26"), [], 'Test 130');
test(cellsInRange("Q1:R9"), ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9'], 'Test 131');
test(cellsInRange("D4:P12"), [], 'Test 132');
test(cellsInRange("Y10:Y20"), [], 'Test 133');
test(cellsInRange("Z1:Z10"), [], 'Test 134');
test(cellsInRange("AA1:AB10"), [], 'Test 135');
test(cellsInRange("X5:Z9"), ['X5', 'X6', 'X7', 'X8', 'X9', 'Y5', 'Y6', 'Y7', 'Y8', 'Y9', 'Z5', 'Z6', 'Z7', 'Z8', 'Z9'], 'Test 136');
test(cellsInRange("T1:U4"), ['T1', 'T2', 'T3', 'T4', 'U1', 'U2', 'U3', 'U4'], 'Test 137');
test(cellsInRange("P1:P26"), [], 'Test 138');
test(cellsInRange("A1:A9"), ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9'], 'Test 139');
test(cellsInRange("B10:B19"), [], 'Test 140');
test(cellsInRange("F1:F9"), ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9'], 'Test 141');
test(cellsInRange("M5:O8"), ['M5', 'M6', 'M7', 'M8', 'N5', 'N6', 'N7', 'N8', 'O5', 'O6', 'O7', 'O8'], 'Test 142');
test(cellsInRange("N1:N26"), [], 'Test 143');
test(cellsInRange("Y1:AA2"), [], 'Test 144');
test(cellsInRange("J1:K3"), ['J1', 'J2', 'J3', 'K1', 'K2', 'K3'], 'Test 145');
test(cellsInRange("F2:J7"), ['F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7'], 'Test 146');
test(cellsInRange("B9:D12"), [], 'Test 147');
test(cellsInRange("C1:D10"), [], 'Test 148');
test(cellsInRange("A1:B1"), ['A1', 'B1'], 'Test 149');
test(cellsInRange("M1:N10"), [], 'Test 150');
test(cellsInRange("D1:D26"), [], 'Test 151');
test(cellsInRange("X1:X26"), [], 'Test 152');
test(cellsInRange("K1:L10"), [], 'Test 153');
test(cellsInRange("G5:H8"), ['G5', 'G6', 'G7', 'G8', 'H5', 'H6', 'H7', 'H8'], 'Test 154');
test(cellsInRange("AA1:AB3"), Error: invalid literal for int[] with base 10: 'A', 'Test 155');
test(cellsInRange("R3:X8"), ['R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'U3', 'U4', 'U5', 'U6', 'U7', 'U8', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8'], 'Test 156');
test(cellsInRange("C3:F7"), ['C3', 'C4', 'C5', 'C6', 'C7', 'D3', 'D4', 'D5', 'D6', 'D7', 'E3', 'E4', 'E5', 'E6', 'E7', 'F3', 'F4', 'F5', 'F6', 'F7'], 'Test 157');
test(cellsInRange("I1:J10"), [], 'Test 158');
test(cellsInRange("C1:C5"), ['C1', 'C2', 'C3', 'C4', 'C5'], 'Test 159');
test(cellsInRange("H1:H9"), ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9'], 'Test 160');
test(cellsInRange("C4:E6"), ['C4', 'C5', 'C6', 'D4', 'D5', 'D6', 'E4', 'E5', 'E6'], 'Test 161');
test(cellsInRange("E5:F7"), ['E5', 'E6', 'E7', 'F5', 'F6', 'F7'], 'Test 162');
test(cellsInRange("P1:Q9"), ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9'], 'Test 163');
test(cellsInRange("V1:W3"), ['V1', 'V2', 'V3', 'W1', 'W2', 'W3'], 'Test 164');
test(cellsInRange("A5:C10"), [], 'Test 165');
test(cellsInRange("C4:D8"), ['C4', 'C5', 'C6', 'C7', 'C8', 'D4', 'D5', 'D6', 'D7', 'D8'], 'Test 166');
test(cellsInRange("F1:H4"), ['F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4'], 'Test 167');
test(cellsInRange("DE2:DF5"), Error: invalid literal for int[] with base 10: 'E', 'Test 168');
test(cellsInRange("G1:H1"), ['G1', 'H1'], 'Test 169');
test(cellsInRange("W3:X6"), ['W3', 'W4', 'W5', 'W6', 'X3', 'X4', 'X5', 'X6'], 'Test 170');
test(cellsInRange("BC2:BD5"), Error: invalid literal for int[] with base 10: 'C', 'Test 171');
test(cellsInRange("J9:K12"), [], 'Test 172');
test(cellsInRange("N3:Q6"), ['N3', 'N4', 'N5', 'N6', 'O3', 'O4', 'O5', 'O6', 'P3', 'P4', 'P5', 'P6', 'Q3', 'Q4', 'Q5', 'Q6'], 'Test 173');
test(cellsInRange("A10:C12"), [], 'Test 174');
test(cellsInRange("J4:L7"), ['J4', 'J5', 'J6', 'J7', 'K4', 'K5', 'K6', 'K7', 'L4', 'L5', 'L6', 'L7'], 'Test 175');
test(cellsInRange("F2:H5"), ['F2', 'F3', 'F4', 'F5', 'G2', 'G3', 'G4', 'G5', 'H2', 'H3', 'H4', 'H5'], 'Test 176');
test(cellsInRange("X5:Y8"), ['X5', 'X6', 'X7', 'X8', 'Y5', 'Y6', 'Y7', 'Y8'], 'Test 177');
test(cellsInRange("W2:Y5"), ['W2', 'W3', 'W4', 'W5', 'X2', 'X3', 'X4', 'X5', 'Y2', 'Y3', 'Y4', 'Y5'], 'Test 178');
test(cellsInRange("B3:D15"), [], 'Test 179');
test(cellsInRange("W1:X3"), ['W1', 'W2', 'W3', 'X1', 'X2', 'X3'], 'Test 180');
test(cellsInRange("Q1:Q26"), [], 'Test 181');
test(cellsInRange("P1:Q1"), ['P1', 'Q1'], 'Test 182');
test(cellsInRange("S1:S26"), [], 'Test 183');

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
