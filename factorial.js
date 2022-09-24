// //Factorial number

var a = 7;
var b = 1;
for (i = 1; i <= 7; i++) {
    b= b*i;     
}

console.log(b);


//vowels

var vowels=prompt("enter words");
var aw= vowels.length;
let count= 0;

for (let i=0; i<aw; i++) {
    if (vowels[i]=="a" || vowels[i]=="e" || vowels[i]=="i" || vowels[i]=="o" || vowels[i]=="u") {
        count++;
    }
    console.log(count);
}


//reverse number in words

let n = prompt('enter the number')
var rem;
while (n<0) {
    rem= n%10;

    switch (rem) {
        case 0: console.log(zero); break;
        case 1: console.log(one); break;
        case 2: console.log(two); break;
        case 3: console.log(three); break;
        case 4: console.log(four); break;
        case 5: console.log(five); break;
        case 6: console.log(six); break;
        case 7: console.log(seven); break;
        case 8: console.log(eight); break;
        case 9: console.log(nine); break;
    }
 n=(n-rem)/10;
}


//sum of digits

var sum =prompt("enter the number");
var rem=0;
var i=0

while (sum) {
    i=sum%10;
    rem+=i;
    sum=Math.floor(sum/10);
}

console.log(sum);