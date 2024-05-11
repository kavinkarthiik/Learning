let numbers = prompt('Enter the Numbers: ');
numbers = numbers.split('');
let count = 0;
for (i = 0; i < numbers.length; i++) {
    let number = Number(numbers[i]);
    if (i % 2 != 0) {
        let num = (number * 2).toString();
        if (num.length == 2) {
            count += Number(num[0]) + Number(num[1]);
        } else {
            count += number
        }
    } else {
        count += number
    }
}

let roundOf = Math.ceil(count/10) * 10;
let x = roundOf - count;
console.log(count)
console.log(x)
