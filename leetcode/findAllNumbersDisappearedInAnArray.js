/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let number = 1
    let n = nums.length;
    const list = new Set();
    let answer = [];
    for(let i = 0; i < nums.length; i++){
        list.add(nums[i]);
   }
         while(number <= n){
            if(!list.has(number)){
            answer.push(number);
        }
             number++;
        }

    return answer;
};
