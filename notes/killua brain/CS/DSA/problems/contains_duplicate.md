hashmap = []

for n in nums:
    if n in hashmap:
        return True
    hashmap.append(n)
