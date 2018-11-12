/*

Gameplan

HTML:
(*) Calculator Window of operations to be shown along result
() Number buttons for the calculator
() Operator buttons (+, _, *, etc)
() '="
() Reset or clear button
() Optional: Backspace button

JavaScript
() Function that captures what is types in calcWindow
() Separate functions that add numbers, subtract numbers, etc.

 */

function calculate(expression) // ex. expression is math problem 2+5 or 9*5

{
   //'expression is a string of everything in your calculator window
   //Need to extract the first number from 'expression'
    var firstNum = Number(expression.substr(0,1));
    alert(firstNum);
    var operator = expression.substr(1,1);
    alert(operator);
    var secondNum = Number(expression.substr(2,1));
    alert(secondNum);
    if(operator === '+')
    {
        return addNums(firstNum, secondNum);
    }
    else if (operator === '-')
    {
        return subtractNums(firstNum, secondNum);
    }
    else if (operator === '*')
    {
        return multiplyNums(firstNum, secondNum);
    }
    else if (operator === '/')
    {
        return divideNums(firstNum, secondNum);
    }
    else if (operator === '^')
    {
        return powerNums (firstNum, secondNum);
    }

    else if (operator === '√');
    {
        return rootNums(firstNum, secondNum);
    }


}

function addNums(p1, p2) //expects parameters p1 and p2
{
    return p1 + p2;
}

function subtractNums(p1, p2)
{
    return p1 - p2;
}

function multiplyNums(p1, p2)
{
    return p1 * p2;

}

function divideNums(p1, p2)
{
    return p1 / p2;
}

function powerNums(p1, p2)
{
 return Math.pow(p1, p2)
}

function rootNums(p1)
{
    return Math.sqrt (p1)
}

function clearPage()
{
    location = location
}







