function assignGrade()
{
    var num = Number (document.project3.input1.value);

    if(num <= 50)
    {
        return "F";
    }

    else if (num <= 60)
    {
        return "D";
    }
    else if (num <= 70)
    {
        return "C";
    }
    else if (num <= 80)
    {
        return "B"
    }
    else if (num >= 90)
    {
        return "A"
    }
    else
    {
        return "invalid input";
    }
}