$(document).ready(function () {
    
    var quiz = [{
      "question": "A Thousand Miles by Vanessa Carlton: \"It's always times like these when I think of you and wonder if you ever _____________\"",
      "choices": ["think about me", "think of me", "speak to me", "talk about me"],
      "correct": 1
    }, {
      "question": "Over My Head/Cable Car by The Fray: \"Over my head, over my head. With eight seconds left in overtime _____________\"",
      "choices": ["now, don't be shy", "what's on your mind?", "she's on your mind", "let go this time"],
      "correct": 2
    }, {
      "question": "Bad Day by Daniel Powter: \"So where is the passion when you need it the most? Oh you and I. You kick up the leaves _____________\"",
      "choices": ["and your moment is gone", "like you just saw a ghost", "and the magic is gone", "and the magic is lost"],
      "correct": 3
    }, {
      "question": "Bubbly by Colbie Caillat: \"The rain is falling on my window pane, but we _____________\"",
      "choices": ["somehow are together again", "are acting like it's just a game", "are hiding in a safer place", "are missing now, without a trace"],
      "correct": 2
    }, {
      "question": "Hot 'N Cold by Katy Perry: \"You're wrong when it's right. You're black when it's white _____________\"",
      "choices": ["we fight we break up", "you fall but get up", "you're down when it's up", "we kiss we make up"],
      "correct": 0
    }];
    
    var currentQuestion = 0;
    
    //load askQuestion first
    
    function transition() {
        //when check answer clicked,
        //checkAnswer();
        //remove class check answer
        //change button to next question
        
    }
    
    function questionSet() {
        //when next question clicked
        //currentQuestion++
        //askQuestion();
        //remove class next question
        //change button to check answer
        
    }
    
    //when reached the last question
    //if ('.qn-number').val() == 5 then 
    //checkAnswer();
    //change button to view results
    //when view results clicked
    //function showResults();
    //add a button of play again
    //when play again clicked, go back to askQuestion
    
    
    
    
    function askQuestion() {
        var choices = quiz[currentQuestion].choices;

        // loop through choices, and create radio buttons
        for (var i = 0; i < choices.length; i++) {
        var choicesHtml = "<div class='radio-btn'><input type='radio' id='option" + (i + 1) + "' name='quiz" + currentQuestion + "' value='" + i + "'><label for='option" + (i + 1) + "'><span>" + choices[i] + "</span></label></div>";
        $('#radio-grp').append(choicesHtml);
        $('.question').html(quiz[currentQuestion].question);
        $('.question-number').html(currentQuestion + 1);
        }
        
    }
    
    
    //error: function only runs once and stops at the askQuestion, doesnt rerun to check ans on click

//        $('button').removeClass('next-question');
//        $('button').addClass('check-ans').html('Check answer');
    
    function checkAnsBtn() {
        
    }
    
    

        
//    function nextQuestion() {
//        $('.next-question').on('click', function() {
//            currentQuestion++;
//            $('#radio-grp').find('.radio-btn').remove();
//            $('button').removeClass('next-question');
//            $('button').addClass('check-ans').html('Check Answer');
//            askQuestion();
//            checkAnsBtn();
//        });
//    }
    
    function checkAnswer() {
        //add code: if userpick correct, background-color: green
        //add code: if userpick wrong, background-color: red, correct ans background-color: green
        var userPick = $('input[name="quiz' + currentQuestion + '"]:checked', '#radio-grp').val();
        var choiceClicked = $('input[type="radio"]:checked ~ label');
        var ticked = '<img class="ticked" src="images/ticked.png">';
        var cross = '<img class="cross" src="images/cross.png">';
        var correctAns = quiz[currentQuestion].correct;
        var span = choiceClicked.find('span');

        if (userPick == correctAns) {
            choiceClicked.css("background-color", "#65b600");
            choiceClicked.append(ticked);

        } else if (userPick !== correctAns) {
    //            alert('try again');
            choiceClicked.css("background-color", "#ff7a78");
            choiceClicked.append(cross);
        } else {
            alert('please click on an option before proceeding');
        }
        
    }
    
    
    

    askQuestion();
    $('button').addClass('check-ans').html('Check answer');
    
    if (currentQuestion < 5) {    
        $('.check-ans').on('click', function() {
            checkAnswer();
            
            $(this).removeClass('check-ans');
            $(this).addClass('next-question').html('Next Question');
            $('.next-question').on('click', function() {
                currentQuestion++;
                $('#radio-grp').find('.radio-btn').remove();
                askQuestion();
                $(this).removeClass('next-question');
                $(this).addClass('check-ans').html('Check Answer');
            });
        });
        
        
    }


    
//    if (currentQuestion < 5) {
//        checkAnsBtn();
//        console.log('im running more than once');
//    }
//    
    
    
    

    

    $('#radio-grp').on('change', function() {
        var userPick = $('input[name="quiz' + currentQuestion + '"]:checked', '#radio-grp').val();
        console.log(userPick);
    });
});