function loop() { for(let i = 0; i <= 9; i++) {
       console.log(i); }
} 
function loopBack(lang,callback){
    console.log(`I am learning: ${lang}`);
    callback();
}
function done() {
    console.log("I am finished this lecture");
}