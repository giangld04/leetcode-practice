// 58. Length of Last Word
// Difficulty: Easy
// Tags: String
// Link: https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
// cach 1: chuyen string thanh array , roi split 
var lengthOfLastWord = function(s) {
   const sString=  s.trim().toString().split('')
   let pointer = 0
   let longestWord= 0
   let i = 0
    // convert s to array   
    while (i <sString.length -1){
        if(sString[i] !== ' '){
            i++
        }else{
            longestWord = Math.max(longestWord, i-pointer)
            pointer = i 
            i++
        }
    }
    console.log(longestWord)
    return longestWord
};
lengthOfLastWord('Hello World')

// --- Your Solution Above ---

module.exports = { lengthOfLastWord };
