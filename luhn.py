numbers = input('Enter the Numbers: ')
if not numbers.isdigit() or len(numbers) != 14:
    print('Input is not a number or does not have exactly 14 digits')
else:
    count = 0
    for i in range(len(numbers)):
        number = int(numbers[i])
        if i % 2 != 0:
            num = str(number * 2)
            if len(num) == 2:
                count += int(num[0]) + int(num[1])
            else:
                count += number
        else:
            count += number

    round_of = ((count + 9) // 10) * 10
    x = round_of - count
    print(count)
    print(x)
