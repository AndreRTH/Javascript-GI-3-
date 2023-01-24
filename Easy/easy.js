// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"



function workoutNotification() {
    let userInput = prompt('What exercise are you doing today?'); 
    switch(userInput) {
        case 'Running':
            console.log("Today's exercise: running");
            break;
        case 'Swimming':
            console.log("Today's exercise: swimming");
            break;
    }
}

workoutNotification()