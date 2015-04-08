$(document).ready(function () {
    
    var quiz = [{
      "question": "A Thousand Miles by Vanessa Carlton: \"It's always times like these when I think of you and wonder if you ever _____________\"",
      "choices": ["think about me", "think of me", "speak to me", "talk about me"],
      "correct": "think of me"
    }, {
      "question": "Over My Head/Cable Car by The Fray: \"Over my head, over my head. With eight seconds left in overtime _____________\"",
      "choices": ["now, don't be shy", "what's on your mind?", "she's on your mind", "let go this time"],
      "correct": "she's on your mind"
    }, {
      "question": "Bad Day by Daniel Powter: \"So where is the passion when you need it the most? Oh you and I. You kick up the leaves _____________\"",
      "choices": ["and your moment is gone", "like you just saw a ghost", "and the magic is gone", "and the magic is lost"],
      "correct": "and the magic is lost"
    }, {
      "question": "Bubbly by Colbie Caillat: \"The rain is falling on my window pane, but we _____________\"",
      "choices": ["somehow are together again", "are acting like it's just a game", "are hiding in a safer place", "are missing now, without a trace"],
      "correct": "are hiding in a safer place"
    }, {
      "question": "Hot 'N Cold by Katy Perry: \"You're wrong when it's right. You're black when it's white _____________\"",
      "choices": ["we fight we break up", "you fall but get up", "you're down when it's up", "we kiss we make up"],
      "correct": "we fight we break up"
    }];
    
    var currentQuestion = 0,
        askingQuestion = true;
    
    function askQuestion() {
        var choices = quiz[currentQuestion].choices,
            choicesHtml = "";

        // loop through choices, and create radio buttons
        for (var i = 0; i < choices.length; i++) {
        var choicesHtml = "<div class='radio-btn'><input type='radio' id='option" + (i + 1) + "' name='quiz" + currentQuestion + "' value='" + i + "'><label for='option" + (i + 1) + "'><span>" + choices[i] + "</span></label></div>";
        
        $('#radio-grp').append(choicesHtml);
        $('.question').html(quiz[currentQuestion].question);
        $('.question-number').html(currentQuestion + 1);
        $('button').html('Check answer');
            
        
        
        }
    }
    
    //removes existing options and changes button to next question
    //when next question clicked, removes choices
    
    $('.check-ans').on('click', function() {
            //add code: if userpick correct, background-color: green
            //add code: if userpick wrong, background-color: red, correct ans background-color: green
            $(this).html('Next question →');
            $(this).addClass('next-question');
            $('.next-question').on('click', function() {
                $('.next-container').parent().find('.radio-btn').remove();
                $(this).removeClass('next-question').addClass('check-ans').html('Check Answer');
                //add code to generate choices for next question
                //add code to generate next question
                //add code to generate next question number
            });
        });
    


    askQuestion();
        
    
    
    
$('#radio-grp').on('change', function() {
    var radioValue = $('input[name="quiz0"]:checked', '#radio-grp').val();
    console.log(radioValue);
});
});