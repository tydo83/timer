// version 0:
// console.log('\u0007');

// Version 1 - A Hard-Coded Timer
// setTimeout(function(){
//     console.log("3 seconds has passed");
//     console.log("\u0007");
// }, 3000);

// Version 2 - User Input
// const seconds = process.argv[2];
// setTimeout(function(){
//     console.log(seconds + " seconds has passed");
//     console.log('\u0007');
// }, seconds * 1000);

// Version 3 - Multiple Timers
const seconds = process.argv.slice(2);
for(const second of seconds) {
    setTimeout(function(){ 
        console.log(second + " seconds has passed");
        console.log('\u0007');
    }, second * 1000);
}