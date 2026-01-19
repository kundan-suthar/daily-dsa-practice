// Input: nums = [1,1,0,1,1,1]
// Output: 3

function maxConsecutiveOne(nums){
    let maxOnes = 0
    let tempMax = 0
    for(let i=0;i<nums.length; i++){
        if(nums[i]==1){
            tempMax++
        }else{
            tempMax=0
        }
        if(tempMax>maxOnes){
            maxOnes=tempMax
        }
    }
    return maxOnes
}
let  nums = [1,1,0,1,1,1,0,1,1,1,1,1]
console.log(maxConsecutiveOne(nums));
