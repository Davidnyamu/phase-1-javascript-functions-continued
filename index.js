function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

// Example usage:
console.log(saturdayFun());  // Output: This Saturday, let's roller-skate!
console.log(saturdayFun('bathe my dog'));  // Output: This Saturday, I want to roller-skate.

console.log(mondayWork());  // Output: This Monday, I have to go to the office.
console.log(mondayWork('work remotely'));  // Output: This Monday, I will work remotely,

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction());  // Output: You are *special*!!!
console.log(encouragingPromptFunction("awesome"));  // Output: You are *awesome*!!!




