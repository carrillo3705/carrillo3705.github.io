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

if (result = "Winter"){
    return document.project4.getElementById(winter)
}

    

}

function dropDown() {

    var myList = document.getElementById(myList);
    var activity = myList.options[myList.selectedIndex].text;
    return activity;
}

function returnWork()
{
  var activity = document.getElementById('workList').value;
  //return activity
    if (activity == "walking")
    {
        return "power walk, or uh walk the dog"
    }

    else if (activity == "running")
    {
        return "vry tired.";
    }

    else if ( activity == "programming")
    {
        return "best exercise ever.";
    }
}
