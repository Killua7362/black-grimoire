def area(i,j):
    return (min(array[i],array[j]))*(j-i)


array = [0,1,0,2,1,0,1,3,2,1,2,1]
maxarea = 0
i=0
j=len(array)-1
while(i<j):
    maxarea=max(maxarea,area(i,j))
    if array[i]>array[j]:
        j=j-1
    else:
        i=i+1

print(maxarea)
