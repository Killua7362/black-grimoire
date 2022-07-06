array = [2,7,11,15]
target = 9

hashmap = {}

for i,n in enumerate(array):
    if target-i in hashmap:
        print("yes")
        break
    hashmap[array[i]]=i
