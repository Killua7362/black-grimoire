array = [1,2,3,4]
result =[1 for i in range(len(array))]

prefix = 1

for i in range(len(array)):
    result[i] = prefix
    prefix = prefix*array[i]

postfix =1
for i in range(len(array)-1,-1,-1):
    result[i] *= postfix
    postfix*=array[i]


print(result)
