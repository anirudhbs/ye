# https://www.hackerrank.com/challenges/the-power-sum/
def power_sum(number, power, acc = 1)
  cut = acc ** power
  return 0 if (cut > number)
  return 1 if (cut == number)
  power_sum(number, power, acc + 1) + power_sum(number - cut, power, acc + 1)
end

puts power_sum(100,3)
