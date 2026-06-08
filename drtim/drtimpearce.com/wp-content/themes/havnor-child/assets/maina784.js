jQuery(function($) {

	if(window.location.hash){
		//Scroll to 
		setTimeout(function(){
			$([document.documentElement, document.body]).animate({
				scrollTop: $("#" + window.location.hash).offset().top - 200
			}, 2000);
		},1);
	}
	$('.drtim-modal-icon').click(function(e){
		e.preventDefault(); 
		$(this).addClass('active');
		$(this).fadeOut(); 
		$('#drtim-modal-overlay').addClass('active');
	});

	$('.guide-title-tab').click(function(e){
		$('#drtim-modal-overlay').removeClass('active');
		$('.drtim-modal-icon').removeClass('active');
		setTimeout(function(){
		$('.drtim-modal-icon').fadeIn();
		},400); 
	});


	$('.wpb_text_column form.login button[type="submit"]').click(function(e){

		setTimeout(function(){
				if(undefined !== $('.wfls-login-message') && null != $('.wfls-login-message')){
				$('html, body').animate({
					scrollTop: ($('.wfls-login-message').offset().top) - 60
				},500);
			}
		},1000);
	});

	
	$('a[href^="#"]').click(function(e){
			//Scroll to 
			setTimeout(function(){
				$([document.documentElement, document.body]).animate({
					scrollTop: $("#" + window.location.hash).offset().top - 200
				}, 2000);
			},1);
	});

	$('.module-search input[name="s"]').autocomplete({
		source: function(request, response) {
			$.ajax({
				dataType: 'json',
				url: drTimAuto.ajaxurl,
				data: {
					s: request.term,
					action: 'drtimauto',
					security: drTimAuto.ajax_nonce,
				},
				success: function(data) {
					response(data);
				}
			});
		},
        select: function(event, ui) {
			window.location.href = ui.item.link;
		},
		minLength: 3,
	});


	var quizstep = 0; 
	function initQuizProgress(){
		console.log($('.wpProQuiz_content'));
		console.log($('.quiz-progress-bar'));
		$('.quiz-progress-bar').addClass('bar');

		if($('.quiz-progress-bar') === undefined || $('.quiz-progress-bar') === null || $('.quiz-progress-bar').hasClass('bar') == false){
			if($('.wpProQuiz_content') === undefined || $('.wpProQuiz_content') === null){
				return;
			}else{
				$('.wpProQuiz_content').prepend('<div class="quiz-progress-bar"></div>');			
			}
		}

		var correct = 0; 
		var incorrect = 0; 
		var steps = $('.wpProQuiz_list > li').length;


		var string = `<div class="pg-container">
		<div class="progress">
		<div class="wpProQuiz_question_page">
		Question <span class="current_question">0</span> of <span>` +  steps + `</span>				</div>
		</div>
		<div class="progress-table">
		<div>

		<div class="meter orange nostripes">
			<span style="width: 0%"></span>
		</div>
		</div>
		<div class="correct-incorrect"><span><span class="correct-answers"></span></span><span><span class="incorrect-answers"></span></span></div>
		</div></div>`;
		$('.quiz-progress-bar').append(string);
		
		window.stepProgress = {}; 

		window.withClick  = false;

		setInterval(function(){
			if(!window.withClick){
				return;
			}
		
			var outcome = -1;
	
			var incorr = $('.wpProQuiz_listItem:visible .wpProQuiz_incorrect:visible');
			var corr = $('.wpProQuiz_listItem:visible .wpProQuiz_correct:visible');
			if(corr.length > 0){
				outcome = 1;
			}else if(incorr.length > 0){
				outcome = 0;
			}

			
			if(outcome == -1){
				return;
			}
			
			var step = $('.wpProQuiz_listItem:visible .wpProQuiz_header > span').text();

			if(step == ''){
				return;
			}
			
			if(undefined === window.stepProgress[step]){
				window.stepProgress[step] = outcome;
			}else{
				return; //already processed
			}
			
			//Count correct && incorrect 
			var correct = 0; 
			var incorrect = 0; 
			for (var [key, value] of Object.entries(window.stepProgress)) {
			 	if(value == 1){
					correct++;
				}else if(value == 0){
					incorrect++;
				}
			}
			updateCorrectIncorrect(correct, incorrect);
			window.withClick = false;
		}, 500);
		
		$('.wpProQuiz_button').click(function(){		
			if($(this).val() == 'Next'){
				setTimeout(function(){
				quizstep++;
				updateQuizMarkup(quizstep); 
				},200);
			}
			if($(this).val() == 'Start Quiz'){
				setTimeout(function(){
					quizstep++;
					updateQuizMarkup(quizstep); 
					},200);
			}
			if($(this).val() == 'Check'){
				window.withClick  = true;
				/*
				setTimeout(function(){
					var elem = $(this).closest('.wpProQuiz_questionList').find('.wpProQuiz_answerIncorrect');
					if(elem == null || elem == undefined || elem.length == 0){
						correct++;
					}else{
						incorrect++;
					}
					updateCorrectIncorrect(correct, incorrect);
				},1500);
				*/
			}
		
		});
	
	}
		
	function updateCorrectIncorrect(correct, incorrect){
		$('.correct-answers').text(correct + ' Correct');
		$('.incorrect-answers').text(incorrect + ' Incorrect');
	}
	function updateQuizMarkup(step){
		var i = 1;
		
		$('.quiz-progress-bar .progressbar li').removeClass('active');
		$('.quiz-progress-bar .progressbar li').removeClass('prev');

		var found = false;
		var currStep = 0;

		$('.wpProQuiz_listItem').each(function(){
			if($(this).is(':visible')){
				currStep = i;
			}
			i++;
		});


		var par = (currStep/$('.wpProQuiz_listItem').length) * 100;
		$('.quiz-progress-bar .meter span')[0].style.width =  par + '%';

		quizstep = currStep;
		$('.pg-container .current_question').text(quizstep); 
	}
	initQuizProgress(); 
	//quiz-progress-bar
});