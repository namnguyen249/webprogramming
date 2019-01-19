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
function biggestOfThree(a,b,c){
    if(a>b && a>c){
        console.log(a);
    }else{
        if(b>a && b>c){
            console.log(b);
        }else{
            console.log(c);
        }
    }
}
function sort3Number(a,b,c){
    var points = [a,b,c];
    points.sort(function(a,b){return(b-a)})
    console.log(points);
}
function digitAsWord(a){
    var numbers = [0,1,2,3,4,5,6,7,8,9];
    var words = ["zero", "one" , "two", "three", "four", "five" , "six" , "seven" , "eight", "nine"];
    for(var i =a; i<=numbers.length;i++){
        if(a==numbers[i]){
            console.log(words[i])
            break;
        }else{
            console.log("not a digit");
        }
    }
}