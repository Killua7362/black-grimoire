from collections import defaultdict
strs = ["eat","tea","tan","ate","nat","bat"]

#we can create hashmap with count of alphabets as key and anagrams group as value

hashmap = defaultdict(list)#if count doesnt exist first tiem

for i,n in enumerate(strs): 
    lists = [0]*26 #there are 26 english alphabets from a...z

    for count in n:
        lists[ord(count)-ord("a")]+=1 #getting ascii value of string elments

    hashmap[tuple(lists)].append(n) #python cant have list as a key so using tuple

for i,n in hashmap.items(): #used to print key,value pair
    print(n)
