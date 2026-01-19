// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8

function missingNumber(nums){
    let numsCopy = nums.sort()
    for(let i=numsCopy.length-1; i>=0;i--){
        if(numsCopy[i]-numsCopy[i-1] >0){
            return numsCopy[i]-1
        }
    }

}

let nums = [9,6,4,2,3,5,7,0,1]
console.log(missingNumber(nums))
