// const num = 50;

// if (num < 49) {
//     console.log('error');
// }   else if (num > 100){
//     console.log('much');
// }   else {
//     console.log('Ok!');
// }
// (num == 50) ? console.log('OK') : console.log('NO');

const num = 50;
const first ="Hello";
const second =" World";

switch (first+second) {
    case 49:
        console.log("Not right");
        break;
    case "Hello World":
        console.log("Greetings");
        break;
    case 50:
        console.log("Right");
        break;       
    default:
        console.log("Not this time");
        break;

}