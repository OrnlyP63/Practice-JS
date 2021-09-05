import sys
index =  int(sys.argv[1])

ls = [0,1]
fibo = 0
for _ in range(index):
    fibo = ls[-1]+ls[-2]
    ls.append(fibo)

print(fibo)
