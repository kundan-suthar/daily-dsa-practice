function secondLargest(nums){
    let max=-1;
    let secondMax=-1;

    for(let i=0;i<nums.length;i++){
        if(nums[i]>max){
            secondMax = max;
            max =nums[i];
        }else if(nums[i]>secondMax && nums[i]<max){
            secondMax=nums[i]
        }
    }
    return secondMax;
}

// let nums =  [12, 35, 1, 10, 34, 1]
let nums =   [10, 10, 10]
console.log(secondLargest(nums));

