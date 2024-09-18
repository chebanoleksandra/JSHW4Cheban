//1
/*let num = parseInt(prompt("Input a number between 0 and 100:"));
let minNum = 0;
let maxNum = 100;
let midNum, answ;
if (num >= 0 && num <= 100) {
    do {
        midNum = Math.floor((minNum + maxNum) / 2);
        answ = parseInt(prompt("Input 1 if your number is < " + midNum + "\nInput 2 if your number is > " + midNum + "\nInput 3 if your number is = " + midNum));
        if (answ == 1) {
            maxNum = midNum - 1;
        }
        if (answ == 2) {
            minNum = midNum + 1;
        }
    }
    while (answ != 3);
}
else {
    alert("Invalid input");
}

alert("Your num = " + num);*/

//2
/*let answ = "";
for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
        answ += i.toString()+" ";
    }
}
alert(answ);*/

//3
/*let factorial = 1;
let num = parseInt(prompt("Input a number:"));
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
alert("Factroial = " + factorial);*/

//4
/*let number, res = 0;
let info = "Choose:\n1-miles to km,\n2-km to miles,\n3-exit";
do {
    number = parseInt(prompt(info, 1));
    if (number == 1){
        let miles=parseFloat(prompt("Input miles:", 0));
        res = miles/0.6213711922;
        alert(miles + "miles = " + res + " km");
    }
    else if(number==2){
        let km = parseFloat(prompt("Input km:", 0));
        res = km*0.6213711922;
        alert(km + "km = " + res+ " miles");
    }
    else if(number!=3){
        alert("Invalid input")
    }
}
while (number!=3);*/