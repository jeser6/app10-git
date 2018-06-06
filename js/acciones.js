// JavaScript Document
$(document).on("ready", function(){
$('.js-mobile-nav-icon').on('click', function(){
		var icono=$('.js-mobile-nav-icon i');
		if(icono.hasClass('ion-navicon-round'))
		   {
			   icono.removeClass('ion-navicon-round');
			   icono.addClass('ion-close-round');
		   }
		   else
		   {
			   icono.removeClass('ion-close-round');
			   icono.addClass('ion-navicon-round');
		   }
		   $('.js-main-nav').slideToggle(200);
		   
	});//click js mobile nav icon

var canvas = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");
ctx.fillRect(0,0,20,20);


});//ready



//tap sonar
$(document).ready(function(e){
document.addEventListener("deviceready",function(){
//vibrar
$('.vibrar').tap(function(){
 navigator.notification.vibrate(40);
 
});
 },false);//cierre deviceready
});//cierre del ready