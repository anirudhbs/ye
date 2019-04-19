# https://www.hackerrank.com/challenges/recursive-digit-sum/
def superDigit(number, times)
  number = number.to_s * times
  return number if number.length == 1
  sum = number.split('').inject(0) { |acc, cur| acc + cur.to_i }
  superDigit(sum, 1)
end

puts superDigit(148, 3)
