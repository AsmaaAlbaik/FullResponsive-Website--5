/*global $, JQuery , alert*/
$(document).ready(function () {
    "use strict";
    
    $('html').niceScroll();
    
    $('.carousel').carousel({

    interval: 3000
    
});
    
    //show the div of color optoin 
$('.gear-check').click(function(){
    
    $('.color-option').toggle(2000);
});
    
    // change color option 
    var colorLi = $('.color-option ul li');
    
    colorLi
    .eq(0).css("backgroundColor","#b30000").end()
    .eq(1).css("backgroundColor","#E426D5").end()
    .eq(2).css("backgroundColor","#009AFF").end()
    .eq(3).css("backgroundColor","#ffd500");

  
    colorLi.click(function() {
        
        $('link[href*="theme"]').attr("href",$(this).attr("data-value"));
   // search on link that contain theme word then change the attribute that contain href with the value of the li which we click in it 
      //  console.log($(this).attr("data-value"));
    });
    
    
    //scrollbutton to top 
    
    var scrollButton = $('#scroll-top');
    
    $(window).scroll(function(){
        
        //console.log($(this).scrollTop());
        
        if ($(this).scrollTop() >=700){
            scrollButton.show();
        }
        else{
          scrollButton.hide();   
        }
        
    });
    
    scrollButton.click(function(){
        
        $('body, html').animate({scrollTop:0}, 600)
    });
    
    });

    
    // loading screen
   $(window).on('load',function () {  
       
       $(".loading-overlay .sk-fading-circle").fadeOut(1000, function(){

         $('body').css("overflow", "auto");
           
           $(this).parent().fadeOut(1000,function(){ //this to hide the section of loading-overlay
               
               $(this).remove();//remove the loading section from the code
               
       //this to show the scroll in body
      
           
           
       });
           
       });
       
   });
  
        
    
