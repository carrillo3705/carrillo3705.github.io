function tenToSmall(num, base) //convert a base-10 number to a smaller base
{
    // this function is expecting a number (num) in base 10
    // it will convert the number (num) to value of 'base'
    num = (document.smallToTen.input1.value); // number to convert
    base = 2; // destination base
    smallNum =""; // store remainders here

    while ( num > 0) // continue looping while num is not zero
    {
        smallNum = num%base + smallNum; //3%5 = 2... $ return remainders
        //setup up for the iteration of the loop
        num = Math.floor(num/2);
        alert(smallNum);
        alert (num);

    }
    return smallNum;

}
function smallToTen(num, base) //convert a small-base number to base-10
{
    num = (document.tenToSmall.input1.value); //13
    base = 2; //base pf 'num' to convert to base 10
    tenNum = 0; //stores number to be output at the end
    numLength = num.toString().length; // converts num to STRING, then counts the number of characters in the string
    // in this case, length of '1101' is 4

    while (numLength > 0) {
        var denominator = Math.pow(10, (numLength - 1)); // gets denominator of fraction
        // for 1101, denominators will be 1000, 100, 10, 1
        var currentDigit = Math.floor(num / denominator);
        // above means 1101/1000 = 1.... 101/100 = 1..... 01/10 = 0
        tenNum = tenNum + currentDigit * Math.pow(base, numLength - 1)
        // currentDigit*2^3..... currentDigit*2^2
        num = num % denominator; // reduces num for the next iteration

        numLength--; // decrease the numLength by 1... otherwise will loop infinitely

    }

    return tenNum;


}