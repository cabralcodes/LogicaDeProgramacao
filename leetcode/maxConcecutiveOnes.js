/**
 * @param {number[]} nums
 * @return {number}
 */


var findMaxConsecutiveOnes = function(nums) {
 let total = 0
 let n = 0
    
    for(let i = 0;  i < nums.length; i++){
        if(nums[i] === 1){
            n++;
            if(n > total){
                total = n
            }
        }
        else {
            n = 0;
        }
    }
        return total;
};
