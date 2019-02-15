function thirdBit(numb) {
    var a = numb % 2;
    numb = Math.floor(numb / 2)
    var b = numb % 2;
    numb = Math.floor(numb / 2)
    var c = numb % 2;
    numb = Math.floor(numb / 2)
    var d = numb % 2;
    numb = Math.floor(numb / 2)
    console.log(d);
}
function isPointInCircle(coordinates) {
    var x = coordinates[0];
    var x = coordinates[1];
}
function prime(num) {
    var count = 0;
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    if (count == 2)
        console.log("true")
    else
        console.log("false")
}
function calculateTrapezoids(a, b, height) {
    var result = parseFloat(0.5 * (a + b) * height);
    console.log(result);
}
function greater(a, b) {
    if (a > b)
        console.log(b + " " + a);
    else
        console.log(a + " " + b);
}
function biggestOfThree(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    } else {
        if (b > a && b > c) {
            console.log(b);
        } else {
            console.log(c);
        }
    }
}
function sort3Number(a, b, c) {
    var points = [a, b, c];
    points.sort(function (a, b) { return (b - a) })
    console.log(points);
}
function digitAsWord(a) {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (var i = a; i <= numbers.length; i++) {
        if (a == numbers[i]) {
            console.log(words[i])
            break;
        } else {
            console.log("not a digit");
        }
    }
}
function quadraticEqualation(a, b, c) {
    let delta = Math.pow(b, 2) - 4 * a * c;
    let x1, x2;

    if (a != 0) {
        if (delta > 0) {
            x1 = ((-b) + Math.sqrt(delta)) / (2 * a);
            x2 = ((-b) - Math.sqrt(delta)) / (2 * a);
            console.log('x1 = ' + x1 + ',' + ' x2 = ' + x2);
        } else if (delta == 0) {
            x1 = (-b) / (2 * a);
            console.log('x1 = x2 = ' + x1);
        } else if (delta < 0) {
            console.log('no real roots');
        }
    }
}
function biggestOfFive(a, b, c, d, e) {
    let numbers = [a, b, c, d, e];
    numbers.sort(function (a, b) { return (b - a) });
    console.log(numbers[0]);
}
function from1ToN(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i + ' ');
    }
}
function minMAxSumAvg(min, max, sum) {
    let numbers = [min, max, sum];
    numbers.sort(function (a, b) { return (b - a) });
    console.log('min=' + numbers[2]);
    console.log('max=' + numbers[0]);
    sum = numbers[0] + numbers[1] + numbers[2];
    console.log('sum=' + sum);
    avg = sum / 3;
    console.log('avg=' + avg);
}
function matrixOfNumbers(num) {
    let numbers = [num][num];
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; i++) {
            console.log(i + " " + j);
        }
    }
}
(function () {
    var ConvertBase = function (num) {
        return {
            from: function (baseFrom) {
                return {
                    to: function (baseTo) {
                        return parseInt(num, baseFrom).toString(baseTo);
                    }
                };
            }
        };
    };

    // binary to decimal
    ConvertBase.bin2dec = function (num) {
        return ConvertBase(num).from(2).to(10);
    };

    // binary to hexadecimal
    ConvertBase.bin2hex = function (num) {
        return ConvertBase(num).from(2).to(16);
    };

    // decimal to binary
    ConvertBase.dec2bin = function (num) {
        return ConvertBase(num).from(10).to(2);
    };

    // decimal to hexadecimal
    ConvertBase.dec2hex = function (num) {
        return ConvertBase(num).from(10).to(16);
    };

    // hexadecimal to binary
    ConvertBase.hex2bin = function (num) {
        return ConvertBase(num).from(16).to(2);
    };

    // hexadecimal to decimal
    ConvertBase.hex2dec = function (num) {
        return ConvertBase(num).from(16).to(10);
    };

    this.ConvertBase = ConvertBase;

})(this);
function increaseArray(N) {
    let temp = 0;
    for (let i = 0; i < N; i++) {
        console.log(temp + " ");
        temp += N;
    }
}
function compareTwoChar(char1, char2) {
    if (char1.length > char2.length)
        console.log('>');
    if (char1.length < char2.length)
        console.log('<');
    if (char1.length == char2.length)
        console.log('=');
}
function selectionSort(N, array = [N]) {
    array.sort(function (a, b) { return (a - b) });
    console.log(array + "\n")
}
function frequentNumber(N, array = [N]) {
}
function sayHello(name) {
    console.log("Hello, " + name);
}
function getMax(a, b, c) {
    let max = [a, b, c];
    max.sort(function (a, b) { return (b - a) });
    console.log(max[0]);
}
function lastDigitToEnglish(num) {
    let lastDigit = num % 10;
    switch (lastDigit) {
        case 0: console.log("zero"); break;
        case 1: console.log("one"); break;
        case 2: console.log("two"); break;
        case 3: console.log("three"); break;
        case 4: console.log("four"); break;
        case 5: console.log("five"); break;
        case 6: console.log("six"); break;
        case 7: console.log("seven"); break;
        case 8: console.log("eight"); break;
        case 9: console.log("nine"); break;
    }
}
function appearanceCount(n, array, x) {
    let count = 0;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] == x) {
            count++;
        }
    }
    console.log(count);
}
function largerThanNeighbours(n, array) {
    let count = 0;
    for (let i = 1; i <= array.length - 1; i++) {
        if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
            count++;
        }
    }
    console.log(count);
}
function firstLargerThanNeighbours(n, array) {
    for (var i = 1; i <= array.length-1; i++) {
        if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
            console.log(i);break;
        }
    }
}
function sortArray(n, array){
    array.sort(function(a,b){return(a-b)});
    console.log(array + " ");
}

