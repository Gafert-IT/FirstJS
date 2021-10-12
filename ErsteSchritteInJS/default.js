// alert("Hallo Nuernberg");
console.log("Konsolen Log Eintrag");
document.getElementById("Ueberschrift2").style.backgroundColor = "red";

let emptyArray = [];
console.log(emptyArray.length);

let myArray = new Array(10);
console.log(myArray.length);

let myArray2 = [10, 20, 30];
console.log(myArray2.length);

for (let index = 0; index < myArray2.length; index++) {
    const element = myArray2[index];
    console.log(index + ": " + element);
}
console.log(myArray2);

myArray2.push(40);
console.log(myArray2);

myArray2.pop();
console.log(myArray2);

