function singleNumber(nums){
 let hash={}
 for(let i=0;i<nums.length;i++){
    if(hash[nums[i]]==undefined){
        hash[nums[i]]=1
    }else{
        hash[nums[i]]=hash[nums[i]]+1
    }
 }
 for(let i=0;i<nums.length;i++){
    if(hash[nums[i]]==1){
        return nums[i]
    }
 }
}

let nums = [4,4,9,1,2,1,2]
console.log(singleNumber(nums));
