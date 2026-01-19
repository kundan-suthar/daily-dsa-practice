

var sortArray = function(nums){
    if(nums.length<=1) return nums
    let mid = Math.floor(nums.length/2)
    let left = sortArray(nums.slice(0,mid))
    let right = sortArray(nums.slice(mid))
    return mergeSortedArray(left,right)
}

function mergeSortedArray(nums1,nums2){
    let i = 0
    let j = 0
    let res = []
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
            res.push(nums1[i])
            i++
        }else{
            res.push(nums2[j])
            j++
        }
        
    }
    return [...res, ...nums1.slice(i), ...nums2.slice(j)]
}


let nums = [4, 5, 1, 3, 9]
console.log(sortArray(nums));

