function Fixed(){
    if ($('html').scrollTop()>=$(".fixed_navbar").offset().top)
    {
      
      $('.fixed_navbar').css({"position":"fixed","z-index":"9999","top":"0","background-color":"#fff","width":"100%","left":"0","transition":".3s"});
      $('.navbar').css({"box-shadow":"0 1px 5px rgba(0, 0, 0, 0.5)"})
      $('.drpdwn').css({"top":"60px"})
      $('.fixed_navbar').removeClass("py-3")
      $('.fixed_navbar').addClass("py-1")
    }

    if ($('html').scrollTop()>$(".fixed_navbar").offset().top+10)
    {
      
      $('.fixed_navbar').css({"padding-top":"0px","padding-bottom":"10px"});
    }

    if ($('html').scrollTop()<44)
    {
      
      $('.fixed_navbar').css({"position":"static"});
      $('.fixed_navbar').addClass("py-3")
      $('.drpdwn').css({"top":"110px"})
    }

    
}

Fixed()

$(window).scroll(function(){
    Fixed();
})





var typed = new Typed('.type', {
    strings: [
        'Mobile Apps',
        'Web Apps',
        'WordPress'
],
  typeSpeed: 80,
  backSpeed: 80,
  loop:true,
  backDelay: 5000
  })
  




  let workers = document.getElementsByClassName("slider");
  let workersWidth = $(".slider-content").width();
  $(".noqte").click(function(){
    // alert($(".noqte").index(this))
    let l = $(".noqte").index(this)*workersWidth*(-1);
    console.log(l)
    $(".slayder").animate({left: l+'px'});
    $(".noqte").removeClass("blue")
    $(".noqte").css("border","none")
    $(this).addClass("blue")
  });






  $(".myDiv").click(function(){
    $(".bigbig").fadeIn()
    
    
    var bbb =$(this).find("img").attr("src");
    $("#esasimg").attr("src",bbb);
    n=$('.myDiv').index(this) 
  });
  
  
  
  $(".exit").click(function(){
      $(".bigbig").fadeOut()    
  });
    
    let arr = ["https://colorlib.com/preview/theme/create/images/img_1.jpg"
              ,"https://colorlib.com/preview/theme/create/images/img_2.jpg"
              ,"https://colorlib.com/preview/theme/create/images/img_3.jpg"
              ,"https://colorlib.com/preview/theme/create/images/img_4.jpg"
              ,"https://colorlib.com/preview/theme/create/images/img_5.jpg"
              ,"https://colorlib.com/preview/theme/create/images/img_6.jpg"
    ];
    let galery = document.getElementsByClassName('images')
   
    i=0
    
    
    $(".sagicon").click(function(){
      i=n
      n++
      if(n>arr.length-1){
        n=arr.length-1
      }
      $(".esasimg").attr("src",arr[n])
    })

    
  
    $(".solicon").click(function(){
    i=n
      n--
    if(n<0){
      n=0
    }
    $(".esasimg").attr("src",arr[n])
  })

  let yoxla = true
  $(".search").click(function(){
    if(yoxla===true){
      $(".esasimg").css({"transform":"scale(1.5)","transition":"0.3s"})
      yoxla = false
    }
    
    else if(yoxla===false){
      $(".esasimg").css({"transform":"scale(1)","transition":"0.3s"})
      yoxla = true
    }
    
    
    console.log(yoxla)
  })

  $(".mainimage").click(function(){
    if(yoxla===true){
      $(".esasimg").css({"transform":"scale(1.5)","transition":"0.3s"})
      yoxla = false
    }
    
    else if(yoxla===false){
      $(".esasimg").css({"transform":"scale(1)","transition":"0.3s"})
      yoxla = true
    }
    
    
    console.log(yoxla)
  })








  let hometop = $('.section1').offset().top
  let worktop = $('.section3').offset().top
  let servicestop = $('.section5').offset().top
  let abouttop = $('.section6').offset().top
  let teamtop = $('.section7').offset().top
  let blogtop = $('.section8').offset().top
  let contacttop = $('.section9').offset().top
  
  $(".nav-link").click(function(){

    $(".nav-link").removeClass("bluelink")
    $(this).addClass("bluelink")
    
	
 }) 

  $(".home_nav").click(function(){
	 $("html").animate({'scrollTop':hometop-1000},500)
 }) 


 $(".work_nav").click(function(){
	 $("html").animate({'scrollTop':worktop-100},500)
 }) 


 $(".services_nav").click(function(){
	$("html").animate({'scrollTop':servicestop-80},500)
})


 $(".about_nav").click(function(){
	$("html").animate({'scrollTop':abouttop-60},500)
})


 $(".specialites_nav").click(function(){
	$("html").animate({'scrollTop':abouttop-60},500)
})


 $(".team_nav").click(function(){
	$("html").animate({'scrollTop':teamtop-80},500)
})


 $(".blog_nav").click(function(){
	$("html").animate({'scrollTop':blogtop-80},500)
})


$(".contact_nav").click(function(){
	$("html").animate({'scrollTop':contacttop-70},500)
})
  

  function Active(){
	
    if($('html').scrollTop()>=0 || ('html').scrollTop()<worktop){
        $(".nav-link").removeClass("bluelink")
        $(".home_nav").addClass("bluelink")
		
    }
    if($('html').scrollTop()>=worktop-100){
        $(".home_nav").removeClass("bluelink")
        $(".work_nav").addClass("bluelink")
    }

    if($('html').scrollTop()>=servicestop-100){
        $(".work_nav").removeClass("bluelink")
        $(".services_nav").addClass("bluelink")
    }

    if($('html').scrollTop()>=abouttop-100){
        $(".services_nav").removeClass("bluelink")
        $(".about_nav").addClass("bluelink")
    }

    if($('html').scrollTop()>=blogtop-100){
        $(".about_nav").removeClass("bluelink")
        $(".blog_nav").addClass("bluelink")
    }

    if($('html').scrollTop()>=contacttop-100){
        $(".blog_nav").removeClass("bluelink")
        $(".contact_nav").addClass("bluelink")
    }

    
}


Active();

$(window).scroll(function(){
    Active();
})
 


  