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


function temperatureBug() //made with help from

{var temp = Number (document.project4.input1.value);

if (temp <=25)
{
    return  document.getElementById("winter").style.display = "block";


}

else if (temp < 50 && temp > 26) {

    return document.getElementById("fall").style.display = "block";

}

else if (temp < 75 && temp > 51) {
    return document.getElementById("spring").style.display = "block";
}


else if(temp >= 76){
    return document.getElementById("summer").style.display = "block";
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
    var time = Number (document.project6.input1.value);

    if (activity == "walking")
    {
        return  5 * time;
    }

    else if (activity == "running")
    {
        return 10 * time;
    }

    else if ( activity == "lifting weights")
    {
        return 12 * time;
    }
    else ( activity == "playing sports")
    {
        return 10 * time;
}
}
