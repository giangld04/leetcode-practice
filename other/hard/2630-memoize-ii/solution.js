// 2630. Memoize II
// Difficulty: Hard
// Tags: 
// Link: https://leetcode.com/problems/memoize-ii/

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    
    return function() {
        
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

// --- Your Solution Above ---

module.exports = { memoize };
