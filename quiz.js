function checkAnswer()

{

    var score=0;
    var feedback=[];

    var q1answer = document.quiz.a1.value.toLowerCase();

    if (q1answer === 'leonel messi')
    {
    score++;
    feedback.push("Question 1 was correct");
    }

    else
    {feedback.push("Question 1 was incorrect. The answer was leonel messi");

    }

    var q2answer = document.quiz.a2.value.toLowerCase();

    if (q2answer === 'luka modric')
    {
        score++;
        feedback.push(" Question 2 was correct");
    }

    else
        {
            feedback.push(" Question 2 was incorrect. The answer was luka modric");
        }


    if (document.quiz.a3.value === 'France')
    {
        score++;
        feedback.push(" Question 3: Oui, your answer was correct");
    }

    else if (document.quiz.a3.value === 'England')
    {
        feedback.push(" Question 3: Sadly it did not come home for England. Your answer was incorrect. The correct answer was France");
    }


    else if (document.quiz.a3.value === 'United States')
    {
        feedback.push(" Question 3: They did not even qualify this year. Your answer was incorrect. The correct answer was France");
    }
   else if (document.quiz.a3.value === 'Germany')
    {
        feedback.push(" Question 3: Lightning did not strike twice. Your answer was incorrect. The correct answer was France");
    }


    if (document.quiz.a4.value === 'Manchester City')
    {
        score++;
        feedback.push(" Question 4: Your answer was correct");
    }

    else if (document.quiz.a4.value === 'Manchester United')
    {
        feedback.push(" Question 4: Manchester United continues to be a shell of their former selves. Your answer was incorrect. The correct answer was Manchester City");
    }


    else if (document.quiz.a4.value === 'Tottenham')
    {
        feedback.push(" Question 4: The only thing in Tottenham's trophy case is dust. Your answer was incorrect. The correct answer was Manchester City");
    }
    else if (document.quiz.a4.value === 'Arsenal')
    {
        feedback.push(" Question 4: The struggle continues for Arsenal. Your answer was incorrect. The correct answer was Manchester City");
    }
    else
    {
        feedback.push (" Question 4 was incorrect")
    }

    if (document.quiz.a5A.checked === true && document.quiz.a5B.checked === false && document.quiz.a5C.checked === true && document.quiz.a5D.checked === false && document.quiz.a5E.checked === false){
        score++;
        feedback.push(" Question 5: Your answers are correct")

    }
    else {
        feedback.push(" Question 5 is incorrect. The correct answers were Germany and Italy")
    }

    if (document.quiz.a6A.checked === true && document.quiz.a6B.checked === true && document.quiz.a6C.checked === false && document.quiz.a6D.checked === false && document.quiz.a6E.checked === true)
    {
        score++;
        feedback.push(" Question 6: Your answers are correct")
    }
    else {
        feedback.push(" Question 6 is incorrect. The correct answers were Mexico, United States. ")
    }

    alert(score);
    alert(feedback);


}