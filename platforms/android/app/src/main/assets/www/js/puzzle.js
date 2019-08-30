// Author Piers Rueb
// Recode Jeremi
var tileClicked = false;
var firstTileClicked; 
var secondTileClicked; 
var topPosFir = 0;
var leftPosFir = 0;
var topPosSec = 0;
var leftPosSec = 0;
// var shuffle = Math.floor((Math.random() * 4) + 1);
var shuffle = 1;
var photo = Math.floor((Math.random() * 5) + 1);
//var photo = 1;
var moves = 0;
var secs = 0;
var before;
var indicator;
var indicator2 = 17;
var level;
// var level = "easy";

function random() {
	before = photo;
	photo = Math.floor((Math.random() * 5) + 1);
	if (photo == before) {
		random();
	}
}

// function hint() {
// 	var hint_img = document.getElementById('hint-img');
// 	ons.createElement('hint.html', { append: true }).then(function(popover) {popover.show();});
// 	if (level == "easy") {
// 		if (photo == "1") {
// 			hint_img.setAttribute('src', 'img/hint/1.png');
// 		} else if (photo == "2") {
// 			hint_img.setAttribute('src', 'img/hint/2.png');
// 		} else if (photo == "3") {
// 			hint_img.setAttribute('src', 'img/hint/3.png');
// 		} else if (photo == "4") {
// 			hint_img.setAttribute('src', 'img/hint/4.png');
// 		} else if (photo == "5") {
// 			hint_img.setAttribute('src', 'img/hint/5.png');
// 		}
// 	} else if (level == "medium") {
// 		if (photo == "1") {
// 			hint_img.setAttribute('src', 'img/hint/6.png');
// 		} else if (photo == "2") {
// 			hint_img.setAttribute('src', 'img/hint/7.png');
// 		} else if (photo == "3") {
// 			hint_img.setAttribute('src', 'img/hint/8.png');
// 		} else if (photo == "4") {
// 			hint_img.setAttribute('src', 'img/hint/9.png');
// 		} else if (photo == "5") {
// 			hint_img.setAttribute('src', 'img/hint/10.png');
// 		}
// 	}
// }

	
function reload(level) {
	if (level == "easy") {
		if (photo == "1") {
            for (indicator = 1; indicator < 10; indicator++) {
                aaa = "piece" + indicator;
                var a1 = document.getElementById('piece-' + indicator);
                a1.style = "background: url('./img/mudah/satu/"+ indicator +".png');background-size: 100px 100px;";
            }
		} else if (photo == "2") {
            for (indicator = 1; indicator < 10; indicator++) {
                aaa = "piece" + indicator;
                var a1 = document.getElementById('piece-' + indicator);
                a1.style = "background: url('./img/mudah/dua/"+ indicator +".png');background-size: 100px 100px;";
            }
		} else if (photo == "3") {
            for (indicator = 1; indicator < 10; indicator++) {
                aaa = "piece" + indicator;
                var a1 = document.getElementById('piece-' + indicator);
                a1.style = "background: url('./img/mudah/tiga/"+ indicator +".png');background-size: 100px 100px;";
            }
		} else if (photo == "4") {
            for (indicator = 1; indicator < 10; indicator++) {
                aaa = "piece" + indicator;
                var a1 = document.getElementById('piece-' + indicator);
                a1.style = "background: url('./img/mudah/empat/"+ indicator +".png');background-size: 100px 100px;";
            }
		} else if (photo == "5") {
            for (indicator = 1; indicator < 10; indicator++) {
                aaa = "piece" + indicator;
                var a1 = document.getElementById('piece-' + indicator);
                a1.style = "background: url('./img/mudah/lima/"+ indicator +".png');background-size: 100px 100px;";
            }
		}
	} else if (level == "medium") {
		if (photo == "1") {
			for (indicator = 1; indicator < 17; indicator++) {
				var a1 = document.getElementById('s' + indicator);
				a1.style = "background: url('./img/sedang/satu/"+ indicator +".png');background-size: 70px 70px;";
			}
		}
		else if (photo == "2") {
			for (indicator = 1; indicator < 17; indicator++) {
				var a1 = document.getElementById('s' + indicator);
				a1.style = "background: url('./img/sedang/dua/"+ indicator +".png');background-size: 70px 70px;";
			}
		}
		else if (photo == "3") {
			for (indicator = 1; indicator < 17; indicator++) {
				var a1 = document.getElementById('s' + indicator);
				a1.style = "background: url('./img/sedang/tiga/"+ indicator +".png');background-size: 70px 70px;";
			}
		}
		else if (photo == "4") {
			for (indicator = 1; indicator < 17; indicator++) {
				var a1 = document.getElementById('s' + indicator);
				a1.style = "background: url('./img/sedang/empat/"+ indicator +".png');background-size: 70px 70px;";
			}
		}
		else if (photo == "5") {
			for (indicator = 1; indicator < 17; indicator++) {
				var a1 = document.getElementById('s' + indicator);
				a1.style = "background: url('./img/sedang/lima/"+ indicator +".png');background-size: 70px 70px;";
			}
		}
	} else if (level == "hard") { 
		if (photo == "1") {
			for (indicator = 1; indicator < 26; indicator++) {
				var a1 = document.getElementById('h' + indicator);
				a1.style = "background: url('./img/sulit/satu/"+ indicator +".png');background-size: 55px 55px;";
			}
		} else if (photo == "2") {
			for (indicator = 1; indicator < 26; indicator++) {
				var a1 = document.getElementById('h' + indicator);
				a1.style = "background: url('./img/sulit/dua/"+ indicator +".png');background-size: 55px 55px;";
			}
		} else if (photo == "3") {
			for (indicator = 1; indicator < 26; indicator++) {
				var a1 = document.getElementById('h' + indicator);
				a1.style = "background: url('./img/sulit/tiga/"+ indicator +".png');background-size: 55px 55px;";
			}
		} else if (photo == "4") {
			for (indicator = 1; indicator < 26; indicator++) {
				var a1 = document.getElementById('h' + indicator);
				a1.style = "background: url('./img/sulit/empat/"+ indicator +".png');background-size: 55px 55px;";
			}
		} else if (photo == "5") {
			for (indicator = 1; indicator < 26; indicator++) {
				var a1 = document.getElementById('h' + indicator);
				a1.style = "background: url('./img/sulit/lima/"+ indicator +".png');background-size: 55px 55px;";
			}
		}
	}
	console.log(level + " " + photo);
	document.getElementById('hint_btn').setAttribute('onclick', 'hint("'+level+'","'+photo+'", this)');
}

function loadImage(level) {
	if (level == "easy") {
		if (photo == "1") {
            for (indicator = 1; indicator < 10; indicator++) {
                aaa = "piece" + indicator;
                var a1 = document.getElementById('piece-' + indicator);
                a1.style = "background: url('./img/mudah/satu/"+ indicator +".png');background-size: 100px 100px;";
            }
		} else if (photo == "2") {
            for (indicator = 1; indicator < 10; indicator++) {
                aaa = "piece" + indicator;
                var a1 = document.getElementById('piece-' + indicator);
                a1.style = "background: url('./img/mudah/dua/"+ indicator +".png');background-size: 100px 100px;";
            }
		} else if (photo == "3") {
            for (indicator = 1; indicator < 10; indicator++) {
                aaa = "piece" + indicator;
                var a1 = document.getElementById('piece-' + indicator);
                a1.style = "background: url('./img/mudah/tiga/"+ indicator +".png');background-size: 100px 100px;";
            }
		} else if (photo == "4") {
            for (indicator = 1; indicator < 10; indicator++) {
                aaa = "piece" + indicator;
                var a1 = document.getElementById('piece-' + indicator);
                a1.style = "background: url('./img/mudah/empat/"+ indicator +".png');background-size: 100px 100px;";
            }
		} else if (photo == "5") {
            for (indicator = 1; indicator < 10; indicator++) {
                aaa = "piece" + indicator;
                var a1 = document.getElementById('piece-' + indicator);
                a1.style = "background: url('./img/mudah/lima/"+ indicator +".png');background-size: 100px 100px;";
            }
		}
	} else if (level == "medium") {
		if (photo == "1") {
			for (indicator = 1; indicator < 17; indicator++) {
				var a1 = document.getElementById('s' + indicator);
				a1.style = "background: url('./img/sedang/satu/"+ indicator +".png');background-size: 70px 70px;";
			}
		}
		else if (photo == "2") {
			for (indicator = 1; indicator < 17; indicator++) {
				var a1 = document.getElementById('s' + indicator);
				a1.style = "background: url('./img/sedang/dua/"+ indicator +".png');background-size: 70px 70px;";
			}
		}
		else if (photo == "3") {
			for (indicator = 1; indicator < 17; indicator++) {
				var a1 = document.getElementById('s' + indicator);
				a1.style = "background: url('./img/sedang/tiga/"+ indicator +".png');background-size: 70px 70px;";
			}
		}
		else if (photo == "4") {
			for (indicator = 1; indicator < 17; indicator++) {
				var a1 = document.getElementById('s' + indicator);
				a1.style = "background: url('./img/sedang/empat/"+ indicator +".png');background-size: 70px 70px;";
			}
		}
		else if (photo == "5") {
			for (indicator = 1; indicator < 17; indicator++) {
				var a1 = document.getElementById('s' + indicator);
				a1.style = "background: url('./img/sedang/lima/"+ indicator +".png');background-size: 70px 70px;";
			}
		}
	} else if (level == "hard") { 
		if (photo == "1") {
			for (indicator = 1; indicator < 26; indicator++) {
				var a1 = document.getElementById('h' + indicator);
				a1.style = "background: url('./img/sulit/satu/"+ indicator +".png');background-size: 55px 55px;";
			}
		} else if (photo == "2") {
			for (indicator = 1; indicator < 26; indicator++) {
				var a1 = document.getElementById('h' + indicator);
				a1.style = "background: url('./img/sulit/dua/"+ indicator +".png');background-size: 55px 55px;";
			}
		} else if (photo == "3") {
			for (indicator = 1; indicator < 26; indicator++) {
				var a1 = document.getElementById('h' + indicator);
				a1.style = "background: url('./img/sulit/tiga/"+ indicator +".png');background-size: 55px 55px;";
			}
		} else if (photo == "4") {
			for (indicator = 1; indicator < 26; indicator++) {
				var a1 = document.getElementById('h' + indicator);
				a1.style = "background: url('./img/sulit/empat/"+ indicator +".png');background-size: 55px 55px;";
			}
		} else if (photo == "5") {
			for (indicator = 1; indicator < 26; indicator++) {
				var a1 = document.getElementById('h' + indicator);
				a1.style = "background: url('./img/sulit/lima/"+ indicator +".png');background-size: 55px 55px;";
			}
		}
	}
	console.log(level + " " + photo);
	document.getElementById('hint_btn').setAttribute('onclick', 'hint("'+level+'","'+photo+'", this)');
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
			$('#piece-1').css({top: 0, left: 0});
			$('#piece-2').css({top: 0, left: 140});
			$('#piece-3').css({top: 0, left: 100});
			$('#piece-4').css({top: 0, left: 100});
			$('#piece-5').css({top: 0, left: 0});
			$('#piece-6').css({top: 200, left: 100});
			$('#piece-7').css({top: 200, left: 0});
			$('#piece-8').css({top: 100, left: 0});
			$('#piece-9').css({top: 200, left: 200});
			console.log('4');
		}
	}
	else if (level == "medium") {
		if(shuffle == 1){
			$('#s1').css({top: 70, left: 70});
            $('#s2').css({top: 0, left: 0});
			$('#s3').css({top: 210, left: 0});
			$('#s4').css({top: 210, left: 70});
			$('#s5').css({top: 70, left: 0});
			$('#s6').css({top: 0, left: 210});
			$('#s7').css({top: 140, left: 70});
			$('#s8').css({top: 0, left: 140});
			$('#s9').css({top: 210, left: 210});
			$('#s10').css({top: 70, left: 210});
			$('#s11').css({top: 140, left: 140});
			$('#s12').css({top: 140, left: 210});
			$('#s13').css({top: 0, left: 70});
			$('#s14').css({top: 140, left: 0});
			$('#s15').css({top: 210, left: 140});
			$('#s16').css({top: 70, left: 140});
			console.log('1');
		} else if (shuffle == 2) {
            $('#s1').css({top: 0, left: 0});
			$('#s2').css({top: 70, left: 70});
			$('#s3').css({top: 210, left: 70});
			$('#s4').css({top: 70, left: 0});
			$('#s5').css({top: 210, left: 0});
			$('#s6').css({top: 0, left: 210});
			$('#s7').css({top: 210, left: 210});
			$('#s8').css({top: 140, left: 70});
			$('#s9').css({top: 70, left: 210});
			$('#s10').css({top: 140, left: 210});
			$('#s11').css({top: 70, left: 140});
			$('#s12').css({top: 0, left: 70});
			$('#s13').css({top: 140, left: 140});
			$('#s14').css({top: 0, left: 140});
			$('#s15').css({top: 210, left: 140});
			$('#s16').css({top: 140, left: 0});
			console.log('1');
		}
	}
	else if (level == "hard") {
		if (shuffle == 1) {
			$('#h1').css({top: 220, left: 110});
			$('#h2').css({top: 0, left: 0});
			$('#h3').css({top: 110, left: 165});
			$('#h4').css({top: 0, left: 110});
			$('#h5').css({top: 220, left: 0});
			$('#h6').css({top: 55, left: 110});
			$('#h7').css({top: 0, left: 220});
			$('#h8').css({top: 55, left: 0});
			$('#h9').css({top: 220, left: 55});
			$('#h10').css({top: 55, left: 220});
			$('#h11').css({top: 110, left: 0});
			$('#h12').css({top: 0, left: 165});
			$('#h13').css({top: 165, left: 165});
			$('#h14').css({top: 110, left: 110});
			$('#h15').css({top: 220, left: 165});
			$('#h16').css({top: 110, left: 55});
			$('#h17').css({top: 165, left: 0});
			$('#h18').css({top: 55, left: 165});
			$('#h19').css({top: 165, left: 55});
			$('#h20').css({top: 55, left: 55});
			$('#h21').css({top: 0, left: 55});
			$('#h22').css({top: 165, left: 110});
			$('#h23').css({top: 220, left: 220});
			$('#h24').css({top: 110, left: 220});
			$('#h25').css({top: 165, left: 220});
		}
	}
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
		console.log(firstTileClicked + "| T : " + topPosFir + "| L : " + leftPosFir);
		//  highlight tile
		$(this).addClass('glow');
		tileClicked = true;
	} else {  //  if you've clicked a tile
		//  set variables
		secondTileClicked = $(this).attr('id');
		topPosSec = parseInt($(this).css('top')); 
		leftPosSec = parseInt($(this).css('left'));
		console.log(secondTileClicked + "| T : " + topPosSec + "| L : " + leftPosSec);
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
					ons.notification.toast('Yee kamu berhasil', {timeout: 5000, animation: 'fall'});
					moves = 0;
				}
			}
			else if (level == "medium") {
				if (
					$('#s1').css('top') == "0px"   && $('#s1').css("left") == "0px" &&
					$('#s2').css('top') == "0px"   && $('#s2').css("left") == "70px" &&
					$('#s3').css('top') == "0px"  && $('#s3').css("left") == "140px" &&
					$('#s4').css('top') == "0px"   && $('#s4').css("left") == "210px" &&
					$('#s5').css('top') == "70px"  && $('#s5').css("left") == "0px" &&
					$('#s6').css('top') == "70px"  && $('#s6').css("left") == "70px" &&
					$('#s7').css('top') == "70px"  && $('#s7').css("left") == "140px" &&
					$('#s8').css('top') == "70px"  && $('#s8').css("left") == "210px" &&
					$('#s9').css('top') == "140px" && $('#s9').css("left") == "0px" &&
					$('#s10').css('top') == "140px" && $('#s10').css('left') == '70px' &&
					$('#s11').css('top') == "140px" && $('#s11').css('left') == '140px' &&
					$('#s12').css('top') == "140px" && $('#s12').css('left') == '210px' &&
					$('#s13').css('top') == "210px" && $('#s13').css('left') == '0px' &&
					$('#s14').css('top') == "210px" && $('#s14').css('left') == '70px' &&
					$('#s15').css('top') == "210px" && $('#s15').css('left') == '140px' &&
					$('#s16').css('top') == "210px" && $('#s16').css('left') == '210px'
				){
					$('#artikel').addClass('glow-2');
					ons.notification.toast('Yee kamu berhasil', {timeout: 5000, animation: 'fall'});
				}
			} else if (level == "hard") {
				if (
					$('#h1').css('top') == "0px"    && $('#h1').css("left")  == "0px"   &&
					$('#h2').css('top') == "0px"    && $('#h2').css("left")  == "55px"  &&
					$('#h3').css('top') == "0px"    && $('#h3').css("left")  == "110px" &&
					$('#h4').css('top') == "0px"    && $('#h4').css("left")  == "165px" &&
					$('#h5').css('top') == "0px"    && $('#h5').css("left")  == "220px" &&
					$('#h6').css('top') == "55px"   && $('#h6').css("left")  == "0px"   &&
					$('#h7').css('top') == "55px"   && $('#h7').css("left")  == "55px"  &&
					$('#h8').css('top') == "55px"   && $('#h8').css("left")  == "110px" &&
					$('#h9').css('top') == "55px"   && $('#h9').css("left")  == "165px" &&
					$('#h10').css('top') == "55px"  && $('#h10').css('left') == '220px' &&
					$('#h11').css('top') == "110px" && $('#h11').css('left') == '0px' &&
					$('#h12').css('top') == "110px" && $('#h12').css('left') == '55px' &&
					$('#h13').css('top') == "110px" && $('#h13').css('left') == '110px' &&
					$('#h14').css('top') == "110px" && $('#h14').css('left') == '165px' &&
					$('#h15').css('top') == "110px" && $('#h15').css('left') == '220px' &&
					$('#h16').css('top') == "165px" && $('#h16').css('left') == '0px' &&
					$('#h17').css('top') == "165px" && $('#h17').css('left') == '55px' &&
					$('#h18').css('top') == "165px" && $('#h18').css('left') == '110px' &&
					$('#h19').css('top') == "165px" && $('#h19').css('left') == '165px' &&
					$('#h20').css('top') == "165px" && $('#h20').css('left') == '220px' &&
					$('#h21').css('top') == "220px" && $('#h21').css('left') == '0px' &&
					$('#h22').css('top') == "220px" && $('#h22').css('left') == '55px' &&
					$('#h23').css('top') == "220px" && $('#h23').css('left') == '110px' &&
					$('#h24').css('top') == "220px" && $('#h24').css('left') == '165px' &&
					$('#h25').css('top') == "220px" && $('#h25').css('left') == '220px'
				) {
					$('#artikel').addClass('glow-2');
					ons.notification.toast('Yee kamu berhasil', {timeout: 5000, animation: 'fall'});
				}
			}
		}, 1000);
		//  increment the move counter
		moves++;
	}
});  //  end the click function
