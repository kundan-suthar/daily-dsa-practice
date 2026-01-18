function findSmallest(nums){
    let smallest = Infinity;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<smallest){
            smallest=nums[i]
        }
    }
return smallest
}
let nums= [2, -6, 4, 8, 1, -9]
console.log(findSmallest(nums));
