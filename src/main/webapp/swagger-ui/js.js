 $(function(){
  document.addEventListener("touchstart", function() {}, true);
    //toggleClass Menu
     $('#toggle').click(function(){
     	$('body').toggleClass('is-open');
     });
	//menu scroll 
	var menu_haut = $("body");
    $(window).scroll(function() {
      if (!$(".dropdown-menu").hasClass("show")) {
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            menu_haut.addClass("hide-nav-bar");
        } else {
            menu_haut.removeClass("hide-nav-bar");
        }
      };  
    });
    //stop propagation dropdown BS
    $('#topPage').click(function(){
      $('html, body').animate({scrollTop:$('body').offset().top},1000);
        if ($("body").hasClass("hide-nav-bar")) {
          $( "body" ).removeClass( "hide-nav-bar" );
        };
    });    
    //stop propagation dropdown BS
    $(document).on('click', '.stopPropa', function (e) {e.stopPropagation();})
    //animated    
    setTimeout(
    function(){
      $('body').addClass("start");
        },
    200); 
    //pluggin bowser tester -- 
    // https://browser-update.org
    var $buoop = {required:{e:-4,f:-3,o:-3,s:-1,c:-3},insecure:true,api:2019.06 }; 
    function $buo_f(){ 
    var e = document.createElement("script"); 
    e.src = "//browser-update.org/update.min.js"; 
    document.body.appendChild(e);
    };
    try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
    catch(e){window.attachEvent("onload", $buo_f)}    
});	
