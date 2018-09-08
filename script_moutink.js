$(function(){
  var comingSoon = $('.coming-soon-box1');
  
  setTimeout(function(){
   comingSoon.removeClass('content-hidden');
  }, 650);
  });
  
  $(document).ready(function(){
	  $(".menu-icon").on("click", function(){
		 $("nav ul").toggleClass("showing"); 
	  });
  });
  
  $(window).on("scroll", function(){
	  var navegador = $('nav');
	  if($(window).scrollTop()){
			navegador.addClass('black');
	  }else{
			navegador.removeClass('black');
	    }
  })