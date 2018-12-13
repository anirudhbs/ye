def fibonacci_modified(t1, t2, n)
  # (first element, second element, n)
  # t(n) = t(n-1)^2 + t(n-2)
  # return nth item in series
  arr = [t1, t2]
  i = 2
  while i < n
    arr.push(arr[i - 1] * arr[i-1] + arr[i-2])
    i += 1
  end
  arr.pop
end

puts fibonacci_modified(0, 1 , 10)
# i don't know what's dynamic about this
