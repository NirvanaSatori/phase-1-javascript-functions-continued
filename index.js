// code your solution here

function saturdayFun(string = "roller-skate") { //defines saturdayFun function declaration 
    return `This Saturday, I want to ${string}!` 
}

saturdayFun();

function mondayWork(string = 'go to the office') {  //defines mondayWork function expression
    return `This Monday, I will ${string}.`

}

function wrapAdjective(string) {     //defines wrapAdjective function
    return function (message= "special"){  //inner function
        return `You are ${string}${message}${string}!`

    }
    // 

}
console.log(wrapAdjective("*")('amazing'));
