(function ($) {
  $(document).ready(function(){
      $(".header__hamburguer").click(function(){
          $(".header__lateralmenu").toggleClass("open");
      });
  });
  
})(jQuery);


$(document).ready(function() {
  
  

  $('.navbar-toggle').mouseenter(function() {
  if ($(this).hasClass('active')) {
  } else {
    $('.navbar-toggle').animate ({
        // width: '48px',
        // height: '48px'
      }, 200, function(){
        // anim complete
      });
  }
  });


  $('.navbar-toggle').mouseleave(function() {
    if ($(this).hasClass('active')) {} else {
  $('.navbar-toggle').animate ({
      // width: '50px',
      // height: '50px'
    }, 200, function(){
      // anim complete
    });
    }
});

//  jQuery('.navbar-toggle .icon-close').click(function(){
//   jQuery(".navbar-toggle").removeClass("active");
// });


jQuery('.navbar-toggle').click(function(){
  jQuery('.header__mainmenu').toggleClass('openmenu');
});

$('.navbar-toggle').click(function() {
  var $this = $(this);
  
  if ($('.collapse').hasClass('open')) {
    // $('.navbar > li').slideUp("fast");  
    $this.removeClass('active');
    $('.collapse').removeClass('open');  
    $('.close').hide('fast');
    setTimeout(function() {
      $this.children('.icon-bar').show("fast");
    }, 200);
  
  } 


  else {
    $this.delay("0").addClass('active');
    //$('.collapse').stop(true).slideDown("fast");      
    $this.delay("500").animate ({
      // width: '100%',
      // height: '74.6rem',      
    }, 100, function(){
      // anim complete
    });
    setTimeout(function() {
      $('.navbar > li').slideDown("fast");
      $('.collapse').addClass('open');
      $('.close').show('fast');
    }, 500);
    
  }

}); 

}); 
