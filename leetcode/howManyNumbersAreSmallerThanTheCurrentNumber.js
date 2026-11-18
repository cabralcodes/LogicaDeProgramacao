/**
 * @param {number[]} nums
 * @return {number[]}
 */


var smallerNumbersThanCurrent = function(nums) {
let respostas = [];
    
    for( let i = 0; nums.length > i; i++){

        let contagem = 0

        for(let j = 0; nums.length > j; j++ ){

            if(nums[i] > nums[j]) {
                contagem++
            }

        }
            respostas[i] = contagem
    }
    return respostas;


};
