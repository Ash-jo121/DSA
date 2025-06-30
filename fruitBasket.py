class Solution(object):
    def totalFruit(self, fruits):
        """
        :type fruits: List[int]
        :rtype: int
        """
        
        obj={}
        i=0
        j=0
        maxValue= -1

        while j<len(fruits):
            if len(obj.keys()) < 2:
                if obj.get(fruits[j]):
                    obj[fruits[j]]+=1
                else:
                    obj[fruits[j]] = 1
                j+=1
            
            else:
                if obj.get(fruits[j]):
                    obj[fruits[j]]+=1
                    j+=1
                else:
                    s=0
                    for k in obj:
                        s+=obj[k]
                    maxValue = max(maxValue,s)
                    while len(obj.keys()) == 2:
                        obj[fruits[i]]-=1
                        if obj[fruits[i]] == 0:
                            del obj[fruits[i]]
                        else:
                            i+=1
                    obj[fruits[j]] = 1
                    i+=1
                    j+=1
        s=0
        for k in obj:
            s+=obj[k]
        
        maxValue = max(maxValue,s)
        return maxValue

nums = [3,3,3,1,2,1,1,2,3,3,4]
print(Solution().totalFruit(nums))