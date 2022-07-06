# we can solve this by checking if there is left elment
# then it is a starting point


```
numSet = set(nums)
longest = 0

for n in nums:
    if n-1 not in numSet:
        length = 0
        while n+length in numSet:
            length+=1
        longest = max(longest,length)

```


/* 
set takes o(n) for every operation 
*/