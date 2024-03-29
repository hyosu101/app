$(document).ready(function(){

// -----------------------하단바 및 화면 전환 시작점
	const show = {"display" : "block"};
	const hide = {"display" : "none"};

	function DoorClose() {
		document.getElementById("ud_point").src = "image/closedD.png";
		document.getElementById("ud_affiliate").src = "image/closedD.png";
		document.getElementById("ud_home").src = "image/closedD.png";
		document.getElementById("ud_calendar").src = "image/closedD.png";
		document.getElementById("ud_studecouncil").src = "image/closedD.png";
	};

	function AllHide() {
		$(".intro").css(hide);
		$(".slide_wrapper").css(hide);
		$(".main_banner").css(hide);
		$(".question_board").css(hide);
		$(".event_board").css(hide);
		$(".login_form").css(hide);
		$(".npoint").css(hide);
		$(".Back_affiliate").css(hide);
		$(".calendar").css(hide);
		$(".studecouncil").css(hide);
		$(".footer").css(hide);
		$(".gap").css(hide);
	};

	function home() {
		AllHide();
		$(".intro").css(show);
		$(".main_banner").css(show);
		$(".slide_wrapper").css(show);
		$(".footer").css(show);
		$(".gap").css(show);
		DoorClose();
		document.getElementById("ud_home").src = "image/openedD.png";
	};
	
	function GoToTodayQ() {
		AllHide();
		$(".question_board").css(show);
		DoorClose();
	};
	function GoToEvent() {
		AllHide();
		$(".event_board").css(show);
		DoorClose();
	};

	function GoToPoint() {
		AllHide();
		$(".login_form").css({"display" : "flex"});
		DoorClose();
		document.getElementById("ud_point").src = "image/openedD.png";
	};

	function GoToaffiliate() {
		AllHide();
		$(".Back_affiliate").css(show);
		$(".gap").css(show);
		DoorClose();
		document.getElementById("ud_affiliate").src = "image/openedD.png";
	};

	function GoTocalendar() {
		AllHide();
		$(".calendar").css(show);
		DoorClose();
		document.getElementById("ud_calendar").src = "image/openedD.png";
	};

	function GoTostudecouncil() {
		AllHide();
		$(".studecouncil").css(show);
		DoorClose();
		document.getElementById("ud_studecouncil").src = "image/openedD.png";
	};

	$(".close_btn").click(home);
	$(".todayQ").click(GoToTodayQ);
	$(".event").click(GoToEvent);
	$(".ud_point").click(GoToPoint);
	$(".ud_affiliate").click(GoToaffiliate);
	$(".ud_home").click(home);
	$(".ud_calendar").click(GoTocalendar);
	$(".ud_studecouncil").click(GoTostudecouncil);

// -----------------------하단바 및 화면 전환 끝점
// -----------------------정보입력 화면 시작점
	var id = $('#id');
	var pw = $('#pw');
	let btn = $('#btn');

	
	$(btn).on('click', function(){
		if($(id).val() == "") {
			$(id).next('label').addClass('warning');
			setTimeout(function() {
				$('label').removeClass('warning');
			},1500);
		}
		else if($(pw).val() == "") {
			$(pw).next('label').addClass('warning');
			setTimeout(function() {
				$('label').removeClass('warning');
			},1500);
		}
		else if($(id).val() == "김효수" && $(pw).val() == "201810458") {
			$(".login_form").css(hide);
			$(".npoint").css({"display" : "flex"});
			$(".id-text").css({"color" : "#fff"});
		const name = $(id).val();
			$(".id-text").text(name);

		} else {
			alert("정보가 일치하지 않습니다.");
		}
	});
/*-------------- 데이터 베이스 만들기 전까지 수정 x------------- */
const accu = "10";
const used = "5";
const left = accu - used;
$('.point_accu').text(accu + "p");
$('.point_used').text(used + "p");
$('.point_left').text(left + "p");
$('.point_area').text(left + "p");
// -----------------------정보입력 화면 끝점
// -----------------------파사드 이미지 슬라이드 시작점
var slides = document.querySelector('.facade'),
	slide = document.querySelectorAll('.facade li'),
	currentIdx = 0,
	slideCount = slide.length,
	slideWidth = 33.3,
	prevBtn = document.querySelector('.prev'),
	nextBtn = document.querySelector('.next');

makeClone();

function makeClone(){
	for(var i = 0; i<slideCount; i++){
		var cloneSlide = slide[i].cloneNode(true);
		cloneSlide.classList.add('clone');
		slides.appendChild(cloneSlide);	
	}
	for(var i = slideCount -1; i>=0; i--){
		var cloneSlide = slide[i].cloneNode(true);
		cloneSlide.classList.add('clone');
		slides.prepend(cloneSlide);	
	}
	updatWidth();
	setInitialPos();
	
	setTimeout(function(){
		slides.classList.add('animated');
	}, 100);
	
	
}
function updatWidth(){
	var currentSlides = document.querySelectorAll('.facade li');
	var newSlideCount = currentSlides.length;
	var timer = undefined;
	var newWidth = slideWidth*newSlideCount +'vw';
	slides.style.width = newWidth;
}
function setInitialPos(){
	var InitialTranslateValue = -slideWidth*slideCount;
	slides.style.transform = 'translateX(' + InitialTranslateValue + 'vw)'
}
nextBtn.addEventListener('click',function(){
	moveSlide(currentIdx + 1);
});
prevBtn.addEventListener('click',function(){
	moveSlide(currentIdx - 1);
});

function moveSlide(num){
	slides.style.left = -num * slideWidth + 'vw';
	currentIdx = num;
	
	if(currentIdx == slideCount || currentIdx == -slideCount){
		
		setTimeout(function(){
			slides.classList.remove('animated');
			slides.style.left = '0vw';
			currentIdx = 0;
		}, 500);
		setTimeout(function(){
			slides.classList.add('animated');
		}, 700);
	}
}

setInterval(function(){
	var nextIdx = (currentIdx + 1);
	moveSlide(nextIdx);
}, 3000);
// -----------------------파사드 이미지 슬라이드 끝점
})