s="anagram"
t="nagaram"

def cheq_anagram(s,t):
    countS, countT = {},{}
    for i in range(len(s)):
        countS[s[i]]=1+countS.get(s[i],0)
        countT[t[i]]=1+countT.get(t[i],0)

    for i in countS:
        if countS[i] != countS.get(i,0):
            print("not a anagram")


#or we can do s

