function findLargest(nums){
    let largest = -Infinity
    for(let i=0;i<nums.length;i++){
        if(nums[i]>largest){
            largest=nums[i]
        }
    }
    return largest
}
let nums =  [2, -6, 4, 8, 1, -9]
console.log(findLargest(nums));
