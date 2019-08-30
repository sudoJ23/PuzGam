function init() {
    var suara = document.getElementById('suara');
    var icon_suara = document.getElementById('icon_suara');
    // var icon_suara2 = document.getElementById('icon_suara2');
    if (localStorage['bgm'] == "on") {
        suara.muted = false;
        icon_suara.setAttribute('src', 'img/icon/ios-volume-high.svg');
        // icon_suara2.setAttribute('src', 'img/icon/ios-volume-high.svg');
        suara.volume = 0.5;
    } else {
        suara.muted = true;
        icon_suara.setAttribute('src', 'img/icon/ios-volume-off.svg');
        // icon_suara2.setAttribute('src', 'img/icon/ios-volume-high.svg');
    }
}

function check() {
    var suara = document.getElementById('suara');
    var icon_suara = document.getElementById('icon_suara');
    var icon_suara2 = document.getElementById('icon_suara2');
    if (localStorage['bgm'] == "on") {
        suara.muted = false;
        icon_suara.setAttribute('src', 'img/icon/ios-volume-high.svg');
        icon_suara2.setAttribute('src', 'img/icon/ios-volume-high.svg');
        suara.volume = 0.5;
    } else {
        suara.muted = true;
        icon_suara.setAttribute('src', 'img/icon/ios-volume-off.svg');
        icon_suara2.setAttribute('src', 'img/icon/ios-volume-high.svg');
    }
}

function hint(level, photo, target) {
	var hint_img = document.getElementById('hint-img');
    document.getElementById('hint').show(target);
    // ons.createElement('hint.html', { append: true }).then(function(popover) {popover.show();});  
	if (level == "easy") {
		if (photo == "1") {
			hint_img.setAttribute('src', 'img/hint/1.png');
		} else if (photo == "2") {
			hint_img.setAttribute('src', 'img/hint/2.png');
		} else if (photo == "3") {
			hint_img.setAttribute('src', 'img/hint/3.png');
		} else if (photo == "4") {
			hint_img.setAttribute('src', 'img/hint/4.png');
		} else if (photo == "5") {
			hint_img.setAttribute('src', 'img/hint/5.png');
		}
	} else if (level == "medium") {
		if (photo == "1") {
			hint_img.setAttribute('src', 'img/hint/6.png');
		} else if (photo == "2") {
			hint_img.setAttribute('src', 'img/hint/7.png');
		} else if (photo == "3") {
			hint_img.setAttribute('src', 'img/hint/8.png');
		} else if (photo == "4") {
			hint_img.setAttribute('src', 'img/hint/9.png');
		} else if (photo == "5") {
			hint_img.setAttribute('src', 'img/hint/10.png');
		}
	} else if (level == "hard") {
		if (photo == "1") {
			hint_img.setAttribute('src', 'img/hint/11.png');
		} else if (photo == "2") {
			hint_img.setAttribute('src', 'img/hint/12.png');
		} else if (photo == "3") {
			hint_img.setAttribute('src', 'img/hint/13.png');
		} else if (photo == "4") {
			hint_img.setAttribute('src', 'img/hint/14.png');
		} else if (photo == "5") {
			hint_img.setAttribute('src', 'img/hint/15.png');
		}
    }
}

function ganti(pageId) {
    document.getElementById('appNavigator').pushPage(pageId, { animation: 'fade'});
}

function tambah(pageId) {
    document.getElementById('appNavigator').pushPage(pageId);
}

function tidaktersedia() {
    ons.notification.toast('Fitur ini belum tersedia', { buttonLabel: 'Tutup', timeout: 5000});
}

function hapus(pageId) {
    document.getElementById('appNavigator').removePage(pageId);
}

function playS(huruf) {
    var h = huruf;
    var hr = h.toLowerCase();
    var audio = new Audio('mp3/alfabet/' + hr + ".mp3");
    audio.play();
}

function suara() {
    var suara = document.getElementById('suara');
    var icon_suara = document.getElementById('icon_suara');
    // var icon_suara2 = document.getElementById('icon_suara2');
    if (icon_suara.getAttribute('src') == "img/icon/ios-volume-high.svg") {
        suara.muted = true;
        localStorage.setItem('bgm', 'off');
        icon_suara.setAttribute('src', 'img/icon/ios-volume-off.svg');
        // icon_suara2.setAttribute('src', 'img/icon/ios-volume-off.svg');
    } else {
        suara.muted = false;
        localStorage.setItem('bgm', 'on');
        icon_suara.setAttribute('src', 'img/icon/ios-volume-high.svg');
        // icon_suara2.setAttribute('src', 'img/icon/ios-volume-high.svg');
    }
}

function keluar() {
    navigator.app.exitApp();
    //cordova.plugins.exit();
}