var apple_score;
var orange_score;
var straw_score;
var grape_score;
var total_score = 0; 
var start = false;
var computerRandom =  Math.ceil(Math.random()*100);
var win = 0;
var lose = 0;

$('#guess').text(computerRandom);


$('#apple').on('click',function(){
	giveScore();
	total_score +=apple_score;
	// alert(total_score);
	$('#user_total').text(total_score);
	checkScore();
})
$('#orange').on('click',function(){
	giveScore();
	total_score +=orange_score;
	// alert(total_score);
	$('#user_total').text(total_score);
	checkScore();
})
$('#straw').on('click',function(){
	giveScore();
	total_score +=straw_score;
	// alert(total_score);
	$('#user_total').text(total_score);
	checkScore();
})
$('#grape').on('click',function(){
	giveScore();
	total_score +=grape_score;
	// alert(total_score);
	$('#user_total').text(total_score);
	checkScore();
})

var giveScore = function(){
	if(start ==false){
		apple_score = Math.ceil(Math.random()*10);
		orange_score = Math.ceil(Math.random()*10);
		straw_score = Math.ceil(Math.random()*10);
		grape_score = Math.ceil(Math.random()*10);
		start = true;
	}
}
var checkScore = function(){
	if (total_score==computerRandom){
		win++;
		$('#wins').text(win);
		start = false;
		total_score = 0;
		$('#user_total').text(total_score);
		computerRandom =  Math.ceil(Math.random()*100);
		$('#guess').text(computerRandom);
		alert('You Win');
	}else if (total_score > computerRandom) {
		lose++;
		$('#loses').text(lose);
		start = false
		total_score = 0;
		$('#user_total').text(total_score);
		computerRandom =  Math.ceil(Math.random()*100);
		$('#guess').text(computerRandom);
		alert('You Lose');
	}
}