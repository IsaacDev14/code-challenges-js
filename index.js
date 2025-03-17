//task 1

function task1(){
    let arr = [5, 10, 15, 20, 25];
    let arr2 = [arr[0], arr[arr.length-1]];
    let result = document.getElementById("task-1");
    result.innerText =`First element is: ${arr2[0]}, Last element is: ${arr2[1]}`;
    result.style.display = "block";
}

//task 2

function task2(){
    let number = document.getElementById("getNumber").value;
    let result = document.getElementById("task-2");

    if(number === ""){
        result.innerText = "Please enter a number";
    }else if(number % 2 === 0){
        result.innerText = `Number ${number} is even`;
    } else {
        result.innerText = `Number ${number} is odd`;
    }
    result.style.display = "block";
}

//task 3

function task3() {
    let phoneNumber = document.getElementById("phoneNumber").value; 
    let result = document.getElementById("task-3");

    if (phoneNumber.startsWith("+254")) { 
        result.innerText = "Valid phone number";
    } else if (phoneNumber.startsWith("07")) {
        result.innerText = `Your Kenyan Number is +254${phoneNumber.substring(1)}`;
    } else if (phoneNumber.startsWith("254")) {
        result.innerText = `Your Kenyan Number is +${phoneNumber}`;
    } else if (phoneNumber.startsWith("71") || phoneNumber.startsWith("01")) { 
        result.innerText = `Your Kenyan Number is +254${phoneNumber}`;
    } else {
        result.innerText = "Invalid phone number";
    }
    result.style.display = "block";
}


//task 4

function task4(){
    let email = document.getElementById("email").value;
    let result = document.getElementById("task-4");

    if(email.includes("@") && email.includes(".")){
        result.innerText = `Your Email ${email} is valid`;
    }else{
        result.innerText = `Your Email ${email} is invalid`;
    }
    result.style.display = "block";
}

//task 5

function task5(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
    let result = document.getElementById("task-5");

    let largest;
    if(num1 >= num2 && num1 >= num3){
        largest = num1;
    } else if(num2 >= num1 && num2 >= num3){
        largest = num2;
    }
    else{
        largest = num3;
    }
    result.innerText = `The largest number is ${largest}`;
    result.style.display = "block";

}

//task 6

function task6(){
    let tuple = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let tuple1 = tuple.slice(0, tuple.length/2);
    let tuple2 = tuple.slice(tuple.length/2);

    let result = document.getElementById("task-6");
    result.innerText = `Tuple 1: ${tuple1}, Tuple 2: ${tuple2}`;
    result.style.display = "block";
}

//task 7

function task7() {
    let primeNumbers = [];
    for (let num = 2; num <= 200; num++) {
        let prime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) { // Fixed loop condition
            if (num % i === 0) {
                prime = false;
                break;
            }
        }
        if (prime) primeNumbers.push(num);
    }
    let result = document.getElementById("task-7");
    result.innerText = `Prime numbers are: ${primeNumbers.join(", ")}`;
    result.style.display = "block";
}