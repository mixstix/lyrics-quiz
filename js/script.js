$(document).ready(function() {
    
    var quiz = [{
      "question": "A Thousand Miles by Vanessa Carlton: \"It's always times like these when I think of you and wonder if you ever _____________\"",
      "choices": ["think about me", "think of me", "speak to me", "talk about me"],
      "correct": 1
    }, {
      "question": "Over My Head/Cable Car by The Fray: \"Over my head, over my head. With eight seconds left in overtime _____________\"",
      "choices": ["now, don't be shy", "what's on your mind?", "she's on your mind", "let go this time"],
      "correct": 2
    }, {
      "question": "Bad Day by Daniel Powter: \"So where is the passion when you need it the most? You kick up the leaves _____________\"",
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
    var numberCorrect = 0;
    
    //ASK QUESTION FUNCTION
    
    function askQuestion() {
        if (currentQuestion < 5) {
            var choices = quiz[currentQuestion].choices;

            // loop through choices, and create radio buttons
            for (var i = 0; i < choices.length; i++) {
            var choicesHtml = "<div class='radio-btn'><input type='radio' id='option" + (i + 1) + "' name='quiz" + currentQuestion + "' value='" + i + "'><label for='option" + (i + 1) + "'><span>" + choices[i] + "</span></label></div>";
            $('#radio-grp').append(choicesHtml);
            $('.question').html(quiz[currentQuestion].question);
            $('.question-number').html(currentQuestion + 1);
        }
        }
        
    }
    
    //CHECK ANSWER FUNCTION
    
    function checkAnswer() {
        //add code: if userpick correct, background-color: green
        //add code: if userpick wrong, background-color: red, correct ans background-color: green
        var userPick = $('input[name="quiz' + currentQuestion + '"]:checked', '#radio-grp').val();
        var choiceClicked = $('input[type="radio"]:checked ~ label');
        var ticked = '<img class="ticked" src="images/ticked.png">';
        var cross = '<img class="cross" src="images/cross.png">';
        var correctAns = quiz[currentQuestion].correct;
        var span = choiceClicked.find('span');

        if (userPick == undefined) {
            alert('hey you gotta click something');
        } else if (userPick == correctAns) {
            choiceClicked.css("background-color", "#65b600");
            choiceClicked.append(ticked);
            numberCorrect++;
        } else if (userPick !== correctAns) {
            choiceClicked.css("background-color", "#ff7a78");
            choiceClicked.append(cross);
        }
        
    }
    
    
    
    
    //load question on window load
    
    $(window).load(function() {
        askQuestion();
        $('button').addClass('check-ans').html('Check answer');
    });
    
    //CHECK ANSWER BUTTON EVENT
    
    $('.next-container').on('click', '.check-ans', function() {
        if (currentQuestion < 4) {
            checkAnswer();
            console.log('check answer clicked');
            $(this).removeClass('check-ans');
            $(this).addClass('next-question').html('Next Question →');
        } else {
            checkAnswer();
            $(this).removeClass('check-ans');
            $(this).addClass('see-results').html('See Results!');
        }
    });
    
    //NEXT QUESTION BUTTON EVENT
    
    $('.next-container').on('click', '.next-question', function() { 
        
        var barWidth = 20;
        
        currentQuestion++;
        barWidth+=20;
        $('#radio-grp').find('.radio-btn').remove();
        askQuestion();
        $(this).removeClass('next-question');
        $(this).addClass('check-ans').html('Check Answer');
        $('.progress-bar').css("width", (barWidth) + "%");
    });
    
    //RESULTS EVENT
    
    $('.next-container').on('click', '.see-results', function() {
        $('.question-box').html('<div class="results-box"><p class="results-header">Congrats! You\'ve finished the quiz!</p><p>You\'ve answered ' + numberCorrect + ' out of 5 questions correctly.</p><p><button class="retry">Try Again</button></p></div>');
    });
    
    
    //add retry function and event
    $('.question-box').on('click', '.retry', function() {
        location.reload();
    });
    
    
    $('#radio-grp').on('change', function() {
        var userPick = $('input[name="quiz' + currentQuestion + '"]:checked', '#radio-grp').val();
        console.log(userPick);
    });
    
});