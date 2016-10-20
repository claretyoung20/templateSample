$(document).ready(function(){
  
    
    $("img").hover(function(){
        $(this).css("background-color", "#DCDCDC");
        }, 
                   
        function(){
        $(this).css("background-color", "#F5F5F5");},
        function(){
        
    });
    
    $('ul#gallery li').on('mouseenter',function(){
        //get data attribute
        var title = $(this).children().data('title');
        var desc = $(this).children().data('desc');
        
        //vaildate
        if(desc == null){
            desc = "click to enlarge";
        }
         if(title == null){
            title = "";
        }
        //create overlay
        $(this).append('<div class="overlay"></div>');
        
        //get the overlay div
        var overlay = $(this).children('.overlay');
    
       //Add html to overlay
       overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
       overlay.fadeIn("slow");
});
    
    
    //mouseleave 
      $('ul#gallery li').on('mouseleave',function(){
           //create overlay
        $(this).append('<div class="overlay"></div>');
        
        //get the overlay div
        var overlay = $(this).children('.overlay');
          //fade out
          overlay.fadeOut('slow');
      });
    //------------------------slider---------------
     
    var pause = 2000;
    var width = 900;
    var animateSpeed = 1000;
    var currentSlide = 1;
    //cache DOM
    var $slider = $('#slider');
    var $slideContanier =  $slider.find('.slides');
    var $slides = $slideContanier.find('.slide');
    
    
    //set interveal
    //animate margin left
    var interval;
    
    function startSlider(){ 
         interval = setInterval(function(){
          $slideContanier.animate({'margin-left':'-='+width},animateSpeed, function(){
          //if it is last slide, go to position 1(opx)
          currentSlide++;
          if(currentSlide === $slides.length){
              currentSlide = 1;
              $slideContanier.css('margin-left',0);
          }
      });
     },pause);
    }
  
  function stopSlider(){
      clearInterval(interval);
  }
    
    // listen for mouseenter and pause
    $slider.on('mouseenter', stopSlider).on('mouseleave',startSlider);
    //resume on mouseleave  
    startSlider();
});