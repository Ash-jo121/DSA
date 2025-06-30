class Solution(object):
    def longestOnes(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        i=0
        j=0
        tempK = k
        maxLength = -1
        while j<len(nums):
            if nums[j] == 1:
                j+=1
            else:
                if tempK > 0:
                    j+=1
                    tempK-=1
                else:
                    maxLength = max(maxLength,j-i)
                    while tempK == 0:
                        if nums[i] == 0:
                            tempK+=1
                            i+=1
                        else:
                            i+=1
        
        maxLength = max(maxLength,j - i)
        return maxLength
    

nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]
k=3
print(Solution().longestOnes(nums,k))
                