function functionName(param1, variable2, bezeichner3)
{
    let sum = param1 + variable2;
}

// Aufruf einer NORMALEN Funktion VOR der deklaration funktioniert, weil...
let result = AddNumbers(2, 3);
console.log(result);

// ... die Funktion beim ersten ausfuehren des Codes eine "Flag" hisst, und somit ueberall ausfuehrbar ist.
function AddNumbers(firstNumber, secondNumber)
{
    if(!secondNumber) secondNumber = 0;
    let sum = firstNumber + secondNumber;
    return sum;
}

result = AddNumbers(2);
console.log(result);

result = AddNumbers();
console.log(result);
console.log(typeof(result));


let add = AddNumbers;
result = add(3, 5);
console.log(result);

// anonymeFunktion(500, 34) // Aufruf einer anonymen Funktion VOR der deklaration verursacht einen Fehler
let anonymeFunktion = function(first, second){return first * second};
console.log(anonymeFunktion(5, 8));

let factorial = function computeFunction(number)
{
    if(number <= 1)
    {
        return 1;
    }
    return number * computeFunction(number - 1);
}
console.log("!5 = " + factorial(5));

