// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeros(nums){
    let x =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
           let temp 
           temp=nums[x]
           nums[x]=nums[i]
           nums[i]=temp 
           x++
        }
    }
    return nums
}
let nums = [0,1,0,3,12]
console.log(moveZeros(nums));
