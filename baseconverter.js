function tenToSmall(num, base)
{

    var num = Number (document.toBinary.result.value) ;
    base = 2;
    smallNum ="";

    while ( num > 0)
    {
        smallNum = num%base + smallNum;

        num = Math.floor(num/2);
        alert(smallNum);
        alert (num);

    }
    return smallNum;
}

function smallToTen(num, base)
{
    var num = Number (document.toBaseTen.result.value);
    base = 2;
    tenNum = 0;
    numLength = num.toString().length;

    while (numLength > 0)
    {
      var denominator = Math.pow(10,(numLength-1));

      var currentDigit = Math.floor(num/denominator);

        tenNum = tenNum + currentDigit*Math.pow(base, numLength-1)

        num = num%denominator;

        numLength--;

    }

    return tenNum;
}

