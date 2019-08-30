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
var indicator;
var image = false;
var aaa;
var level;

function addElement(parentId, elementTag, elementId) {
	// Add element
	var p = document.getElementById(parentId);
	var newElement = document.createElement(elementTag);
	newElement.classList.add('pieces');
	newElement.classList.add('mudah');
	newElement.setAttribute('id', elementId);
	// newElement.innerHTML = html;
	p.appendChild(newElement);
}

function aClass(elementId, ssalc) {
	var p = document.getElementById(elementId);
	p.classList.add(ssalc);
}

function loadImage(level) {
	if (document.getElementById('artikel').innerHTML != "") {
		if (level == "easy") {
			for (indicator = 1; indicator < 10; indicator++) {
				addElement('artikel', 'div', 'piece-' + indicator);
				// aClass('piece-' + indicator, 'pieces');
				// aClass('piece-' + indicator, 'mudah');
			}
    	    if (photo == "1") {
    	        for(indicator = 1; indicator < 10; indicator++) {
    	            aaa = "piece" + indicator;
    	            var a1 = document.getElementById('piece-'+indicator);
    	            a1.style = "background: url('/games/img/mudah/satu/"+ indicator +".png');background-size: 100px 100px;";
    	        }
    	    } else if (photo == "2") {
    	        for(indicator = 1; indicator < 10; indicator++) {
    	            aaa = "piece" + indicator;
    	            var a1 = document.getElementById('piece-'+indicator);
    	            a1.style = "background: url('/games/img/mudah/dua/"+ indicator +".png');background-size: 100px 100px;";
    	        }
			} else if (photo == "3") {
    	        for(indicator = 1; indicator < 10; indicator++) {
    	            aaa = "piece" + indicator;
    	            var a1 = document.getElementById('piece-'+indicator);
    	            a1.style = "background: url('/games/img/mudah/tiga/"+ indicator +".png');background-size: 100px 100px;";
    	        }
			} else if (photo == "4") {
				for(indicator = 1; indicator < 10; indicator++) {
    	            aaa = "piece" + indicator;
    	            var a1 = document.getElementById('piece-'+indicator);
    	            a1.style = "background: url('/games/img/mudah/empat/"+ indicator +".png');background-size: 100px 100px;";
    	        }
			} else if (photo == "5") {
				for(indicator = 1; indicator < 10; indicator++) {
    	            aaa = "piece" + indicator;
    	            var a1 = document.getElementById('piece-'+indicator);
    	            a1.style = "background: url('/games/img/mudah/lima/"+ indicator +".png');background-size: 100px 100px;";
    	        }
			}
		}
	}
}

function unload(level) {
	if (level == "easy") {
		document.getElementById('artikel').innerHTML = "";
	}
    // image = true;
	// if (level == "easy") {
    //     for(indicator = 1; indicator < 10; indicator++) {
    //         aaa = "piece" + indicator;
    //         var a1 = document.getElementById('piece-'+indicator);
    //         a1.style = "";
    //     }
	// } else if (level == "medium") {
    //     for(indicator = 1; indicator < 29; indicator++) {
    //         aaa = "piece" + indicator;
    //         var a1 = document.getElementById('piece-'+indicator);
    //         a1.style = "";
    //     }
	// } else if (level == "hard") {
    //     for(indicator = 1; indicator < 35; indicator++) {
    //         aaa = "piece" + indicator;
    //         var a1 = document.getElementById('piece-'+indicator);
    //         a1.style = "";
    //     }
	// }
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
