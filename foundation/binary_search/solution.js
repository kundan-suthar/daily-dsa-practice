function binarySearch(nums, target){
    let left=0, right=nums.length-1;
    let mid= Math.floor((left+right)/2)
    while(left<right){
        if(nums[mid]==target){
            return mid;
        }
        else if(nums[mid]<target){
            left = mid+1
        }
        else if(nums[mid]>target){
            right = mid-1
        }
        mid = Math.floor((left+right)/2)
    }
    return -1
}

let nums = [-1,0,3,5,9,12], target = 9;
console.log(binarySearch(nums, target));
