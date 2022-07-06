nums = [1,1,1,2,2,3]
k = 2

count = {}

for i in nums:
    count[i]= 1+count.get(i,0)
#now we can count numbers and  sort based on vlaues in dict or we can use heap and pop k elements


#using bucket sort
# it will be like index is number of time elments occur
freq = [[] for i in range(len(nums)+1)] #elments which will occur times
for n,c in count.items():
    freq[c].append(n)

print(freq)
