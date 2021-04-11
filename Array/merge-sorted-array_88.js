/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //Get indices from length
    m--;
    n--;
    
    let index = nums1.length - 1;
    
    while(index >= 0){
        //Handle the remainder in first array
        if(m < 0){
            nums1[index] = nums2[n--];
        }else if(n < 0){
            //Handle the remainder in first array
            nums1[index] = nums1[m--];
        }else{
            //Comparison between elements
            if(nums1[m] > nums2[n]){
                nums1[index] = nums1[m--];
            }else{
                nums1[index] = nums2[n--];
            }
        }
        index--;
    }
};