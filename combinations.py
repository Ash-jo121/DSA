class Solution(object):
    def helperFunction(self,candidates,index,target,result,finalResult):
        if index >= len(candidates):
            return
        if sum(result) == target:
            finalResult.append(result)
            return
        if sum(result) > target:
            return

        result.append(candidates[index])
        self.helperFunction(candidates,index,target,result,finalResult)
        result.pop()
        self.helperFunction(candidates,index+1,target,result,finalResult)



    def combinationSum(self, candidates, target):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        finalResult = []
        self.helperFunction(candidates,0,target,[],finalResult)
        return finalResult
        
        