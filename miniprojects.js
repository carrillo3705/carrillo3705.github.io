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


function temperatureBug()

{var temp = Number (document.project4.input1.value);

if (temp <=25)
{
    return "Winter"

}

else if (temp < 50 && temp > 26) { return "Fall"

}

else if (temp < 75 && temp > 51) {return "Spring"}


else if(temp >= 76){
    return "Summer"
}


}

function showSeason() { var result = (document.project4.result.value);

if (result = "Winter")

    

}
