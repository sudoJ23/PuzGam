// Author Piers Rueb
// Recode Jeremi
var tileClicked = false;
var firstTileClicked; 
var secondTileClicked; 
var topPosFir = 0;
var leftPosFir = 0;
var topPosSec = 0;
var leftPosSec = 0;
var shuffle = Math.floor((Math.random() * 4) + 1);
var photo = Math.floor((Math.random() * 5) + 1);
var moves = 0;
var secs = 0;
// var level = "easy";

function loadImage(level) {
	if (level == "easy") {
		var piece1 = document.getElementById('piece-1');
		var piece2 = document.getElementById('piece-2');
		var piece3 = document.getElementById('piece-3');
		var piece4 = document.getElementById('piece-4');
		var piece5 = document.getElementById('piece-5');
		var piece6 = document.getElementById('piece-6');
		var piece7 = document.getElementById('piece-7');
		var piece8 = document.getElementById('piece-8');
		var piece9 = document.getElementById('piece-9');
		if (photo == "1") {
			piece1.style = "background: url('/games/img/mudah/satu/1.png');background-size: 100px 100px;";
			piece2.style = "background: url('/games/img/mudah/satu/2.png');background-size: 100px 100px;";
			piece3.style = "background: url('/games/img/mudah/satu/3.png');background-size: 100px 100px;";
			piece4.style = "background: url('/games/img/mudah/satu/4.png');background-size: 100px 100px;";
			piece5.style = "background: url('/games/img/mudah/satu/5.png');background-size: 100px 100px;";
			piece6.style = "background: url('/games/img/mudah/satu/6.png');background-size: 100px 100px;";
			piece7.style = "background: url('/games/img/mudah/satu/7.png');background-size: 100px 100px;";
			piece8.style = "background: url('/games/img/mudah/satu/8.png');background-size: 100px 100px;";
			piece9.style = "background: url('/games/img/mudah/satu/9.png');background-size: 100px 100px;";
		} else if (photo == "2") {
			piece1.style = "background: url('/games/img/mudah/dua/1.png');background-size: 100px 100px;";
			piece2.style = "background: url('/games/img/mudah/dua/2.png');background-size: 100px 100px;";
			piece3.style = "background: url('/games/img/mudah/dua/3.png');background-size: 100px 100px;";
			piece4.style = "background: url('/games/img/mudah/dua/4.png');background-size: 100px 100px;";
			piece5.style = "background: url('/games/img/mudah/dua/5.png');background-size: 100px 100px;";
			piece6.style = "background: url('/games/img/mudah/dua/6.png');background-size: 100px 100px;";
			piece7.style = "background: url('/games/img/mudah/dua/7.png');background-size: 100px 100px;";
			piece8.style = "background: url('/games/img/mudah/dua/8.png');background-size: 100px 100px;";
			piece9.style = "background: url('/games/img/mudah/dua/9.png');background-size: 100px 100px;";
		} else if (photo == "3") {
			piece1.style = "background: url('/games/img/mudah/tiga/1.png');background-size: 100px 100px;";
			piece2.style = "background: url('/games/img/mudah/tiga/2.png');background-size: 100px 100px;";
			piece3.style = "background: url('/games/img/mudah/tiga/3.png');background-size: 100px 100px;";
			piece4.style = "background: url('/games/img/mudah/tiga/4.png');background-size: 100px 100px;";
			piece5.style = "background: url('/games/img/mudah/tiga/5.png');background-size: 100px 100px;";
			piece6.style = "background: url('/games/img/mudah/tiga/6.png');background-size: 100px 100px;";
			piece7.style = "background: url('/games/img/mudah/tiga/7.png');background-size: 100px 100px;";
			piece8.style = "background: url('/games/img/mudah/tiga/8.png');background-size: 100px 100px;";
			piece9.style = "background: url('/games/img/mudah/tiga/9.png');background-size: 100px 100px;";
		} else if (photo == "4") {
			piece1.style = "background: url('/games/img/mudah/empat/1.png');background-size: 100px 100px;";
			piece2.style = "background: url('/games/img/mudah/empat/2.png');background-size: 100px 100px;";
			piece3.style = "background: url('/games/img/mudah/empat/3.png');background-size: 100px 100px;";
			piece4.style = "background: url('/games/img/mudah/empat/4.png');background-size: 100px 100px;";
			piece5.style = "background: url('/games/img/mudah/empat/5.png');background-size: 100px 100px;";
			piece6.style = "background: url('/games/img/mudah/empat/6.png');background-size: 100px 100px;";
			piece7.style = "background: url('/games/img/mudah/empat/7.png');background-size: 100px 100px;";
			piece8.style = "background: url('/games/img/mudah/empat/8.png');background-size: 100px 100px;";
			piece9.style = "background: url('/games/img/mudah/empat/9.png');background-size: 100px 100px;";
		} else if (photo == "5") {
			piece1.style = "background: url('/games/img/mudah/lima/1.png');background-size: 100px 100px;";
			piece2.style = "background: url('/games/img/mudah/lima/2.png');background-size: 100px 100px;";
			piece3.style = "background: url('/games/img/mudah/lima/3.png');background-size: 100px 100px;";
			piece4.style = "background: url('/games/img/mudah/lima/4.png');background-size: 100px 100px;";
			piece5.style = "background: url('/games/img/mudah/lima/5.png');background-size: 100px 100px;";
			piece6.style = "background: url('/games/img/mudah/lima/6.png');background-size: 100px 100px;";
			piece7.style = "background: url('/games/img/mudah/lima/7.png');background-size: 100px 100px;";
			piece8.style = "background: url('/games/img/mudah/lima/8.png');background-size: 100px 100px;";
			piece9.style = "background: url('/games/img/mudah/lima/9.png');background-size: 100px 100px;";
		}
	}
}

function unload(level) {
	if (level == "easy") {
		var piece1  = document.getElementById('piece-1');
		var piece2  = document.getElementById('piece-2');
		var piece3  = document.getElementById('piece-3');
		var piece4  = document.getElementById('piece-4');
		var piece5  = document.getElementById('piece-5');
		var piece6  = document.getElementById('piece-6');
		var piece7  = document.getElementById('piece-7');
		var piece8  = document.getElementById('piece-8');
		var piece9  = document.getElementById('piece-9');
		piece1.style = "";
		piece2.style = "";
		piece3.style = "";
		piece4.style = "";
		piece5.style = "";
		piece6.style = "";
		piece7.style = "";
		piece8.style = "";
		piece9.style = "";
	} else if (level == "medium") {
		var piece1  = document.getElementById('piece-1');
		var piece2  = document.getElementById('piece-2');
		var piece3  = document.getElementById('piece-3');
		var piece4  = document.getElementById('piece-4');
		var piece5  = document.getElementById('piece-5');
		var piece6  = document.getElementById('piece-6');
		var piece7  = document.getElementById('piece-7');
		var piece8  = document.getElementById('piece-8');
		var piece9  = document.getElementById('piece-9');
		var piece10 = document.getElementById('piece-10');
		var piece11 = document.getElementById('piece-11');
		var piece12 = document.getElementById('piece-12');
		var piece13 = document.getElementById('piece-13');
		var piece14 = document.getElementById('piece-14');
		var piece15 = document.getElementById('piece-15');
		var piece16 = document.getElementById('piece-16');
		var piece17 = document.getElementById('piece-17');
		var piece18 = document.getElementById('piece-18');
		var piece19 = document.getElementById('piece-19');
		var piece20 = document.getElementById('piece-20');
		var piece21 = document.getElementById('piece-21');
		var piece22 = document.getElementById('piece-22');
		var piece23 = document.getElementById('piece-23');
		var piece24 = document.getElementById('piece-24');
		var piece25 = document.getElementById('piece-25');
		var piece26 = document.getElementById('piece-26');
		var piece27 = document.getElementById('piece-27');
		var piece28 = document.getElementById('piece-28');
		piece1.style = "";
		piece2.style = "";
		piece3.style = "";
		piece4.style = "";
		piece5.style = "";
		piece6.style = "";
		piece7.style = "";
		piece8.style = "";
		piece9.style = "";
		piece10.style = "";
		piece11.style = "";
		piece12.style = "";
		piece13.style = "";
		piece14.style = "";
		piece15.style = "";
		piece16.style = "";
		piece17.style = "";
		piece18.style = "";
		piece19.style = "";
		piece20.style = "";
		piece21.style = "";
		piece22.style = "";
		piece23.style = "";
		piece24.style = "";
		piece25.style = "";
		piece26.style = "";
		piece27.style = "";
		piece28.style = "";
	} else if (level == "hard") {
		var piece1  = document.getElementById('piece-1');
		var piece2  = document.getElementById('piece-2');
		var piece3  = document.getElementById('piece-3');
		var piece4  = document.getElementById('piece-4');
		var piece5  = document.getElementById('piece-5');
		var piece6  = document.getElementById('piece-6');
		var piece7  = document.getElementById('piece-7');
		var piece8  = document.getElementById('piece-8');
		var piece9  = document.getElementById('piece-9');
		var piece10 = document.getElementById('piece-10');
		var piece11 = document.getElementById('piece-11');
		var piece12 = document.getElementById('piece-12');
		var piece13 = document.getElementById('piece-13');
		var piece14 = document.getElementById('piece-14');
		var piece15 = document.getElementById('piece-15');
		var piece16 = document.getElementById('piece-16');
		var piece17 = document.getElementById('piece-17');
		var piece18 = document.getElementById('piece-18');
		var piece19 = document.getElementById('piece-19');
		var piece20 = document.getElementById('piece-20');
		var piece21 = document.getElementById('piece-21');
		var piece22 = document.getElementById('piece-22');
		var piece23 = document.getElementById('piece-23');
		var piece24 = document.getElementById('piece-24');
		var piece25 = document.getElementById('piece-25');
		var piece26 = document.getElementById('piece-26');
		var piece27 = document.getElementById('piece-27');
		var piece28 = document.getElementById('piece-28');
		var piece29 = document.getElementById('piece-29');
		var piece30 = document.getElementById('piece-30');
		var piece31 = document.getElementById('piece-31');
		var piece32 = document.getElementById('piece-32');
		var piece33 = document.getElementById('piece-33');
		var piece34 = document.getElementById('piece-34');
		var piece35 = document.getElementById('piece-35');
		piece1.style = "";
		piece2.style = "";
		piece3.style = "";
		piece4.style = "";
		piece5.style = "";
		piece6.style = "";
		piece7.style = "";
		piece8.style = "";
		piece9.style = "";
		piece10.style = "";
		piece11.style = "";
		piece12.style = "";
		piece13.style = "";
		piece14.style = "";
		piece15.style = "";
		piece16.style = "";
		piece17.style = "";
		piece18.style = "";
		piece19.style = "";
		piece20.style = "";
		piece21.style = "";
		piece22.style = "";
		piece23.style = "";
		piece24.style = "";
		piece25.style = "";
		piece26.style = "";
		piece27.style = "";
		piece28.style = "";
		piece29.style = "";
		piece30.style = "";
		piece31.style = "";
		piece32.style = "";
		piece33.style = "";
		piece34.style = "";
		piece35.style = "";
	}
	console.log('unloaded');
}

function shuffleTiles(level){
	if (level == "easy") {
		if(shuffle == 1){
			$('#piece-1').css({top: 100, left: 200});
			$('#piece-2').css({top: 0, left: 200});
			$('#piece-3').css({top: 100, left: 100});
			$('#piece-4').css({top: 0, left: 100});
			$('#piece-5').css({top: 100, left: 0});
			$('#piece-6').css({top: 0, left: 0});
			$('#piece-7').css({top: 200, left: 200});
			$('#piece-8').css({top: 200, left: 100});
			$('#piece-9').css({top: 200, left: 0});
			console.log('1');
		} else if(shuffle == 2){
			$('#piece-1').css({top: 100, left: 0});
			$('#piece-2').css({top: 0, left: 0});
			$('#piece-3').css({top: 100, left: 100});
			$('#piece-4').css({top: 0, left: 100});
			$('#piece-5').css({top: 100, left: 200});
			$('#piece-6').css({top: 0, left: 200});
			$('#piece-7').css({top: 200, left: 200});
			$('#piece-8').css({top: 200, left: 0});
			$('#piece-9').css({top: 200, left: 100});
			console.log('2');
		} else if(shuffle == 3){
			$('#piece-1').css({top: 0, left: 200});
			$('#piece-2').css({top: 0, left: 0});
			$('#piece-3').css({top: 100, left: 100});
			$('#piece-4').css({top: 100, left: 200});
			$('#piece-5').css({top: 0, left: 100});
			$('#piece-6').css({top: 100, left: 0});
			$('#piece-7').css({top: 200, left: 100});
			$('#piece-8').css({top: 200, left: 200});
			$('#piece-9').css({top: 200, left: 0});
			console.log('3');
		} else if(shuffle == 4){
			$('#piece-1').css({top: 0, left: 200});
			$('#piece-2').css({top: 100, left: 200});
			$('#piece-3').css({top: 0, left: 100});
			$('#piece-4').css({top: 100, left: 100});
			$('#piece-5').css({top: 0, left: 0});
			$('#piece-6').css({top: 200, left: 100});
			$('#piece-7').css({top: 200, left: 0});
			$('#piece-8').css({top: 100, left: 0});
			$('#piece-9').css({top: 200, left: 200});
			console.log('4');
		}
	}
	// else if (level == "medium") {}
}

// setTimeout(function(){
// 	// document.getElementById('puzzle').requestFullscreen();
// 	// screen.orientation.lock("portrait-primary");
// 	// screen.orientation.lock("landscape-primary");
// 	// screen.orientation.lock('landscape');
// 	// shuffleTiles();
// 	setInterval(function(){ 
// 		secs++ 
// 	}, 1000);
// }, 1000);

function mulai() {
	loadImage('easy');
	shuffleTiles('easy');
}

// play the game

$('.pieces').click(function(){
	if(tileClicked == false){  //  if no tile is clicked
		//  set variables
		firstTileClicked = $(this).attr('id');
		topPosFir = parseInt($(this).css('top')); 
		leftPosFir = parseInt($(this).css('left')); 
		//  highlight tile
		$(this).addClass('glow');
		tileClicked = true;
	} else {  //  if you've clicked a tile
		//  set variables
		secondTileClicked = $(this).attr('id');
		topPosSec = parseInt($(this).css('top')); 
		leftPosSec = parseInt($(this).css('left'));
		//  animations
		$('#' + firstTileClicked).css({'top' : topPosSec , 'left' : leftPosSec});
		$('#' + secondTileClicked).css({'top' : topPosFir , 'left' : leftPosFir});
		//  remove the glow and reset the first tile
		$('.pieces').removeClass('glow');
		tileClicked = false;
		//  test for the win
		setTimeout(function(){
			if (level == "easy") {
				if(
					$('#piece-1').css('left') == '0px' && $('#piece-1').css('top') == '0px' && 
					$('#piece-2').css('left') == '100px' && $('#piece-2').css('top') == '0px' &&
					$('#piece-3').css('left') == '200px' && $('#piece-3').css('top') == '0px' &&
					$('#piece-4').css('left') == '0px' && $('#piece-4').css('top') == '100px' &&
					$('#piece-5').css('left') == '100px' && $('#piece-5').css('top') == '100px' &&
					$('#piece-6').css('left') == '200px' && $('#piece-6').css('top') == '100px' &&
					$('#piece-7').css('left') == '0px' && $('#piece-7').css('top') == '200px' &&
					$('#piece-8').css('left') == '100px' && $('#piece-8').css('top') == '200px' &&
					$('#piece-9').css('left') == '200px' && $('#piece-9').css('top') == '200px'
				){
					// $('#pesan').text('You have solved the puzzle in ' + secs + ' seconds using ' + moves + ' moves!!');
					$('#artikel').addClass('glow-2');
					ons.notification.toast('Yee kamu berhasil', { buttonLabel: 'Tutup', timeout: 5000 });
					moves = 0;
				}
			}
		}, 1000);
		//  increment the move counter
		moves++;
	}
});  //  end the click function
