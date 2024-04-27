
// loading screen
$(document).ready(function(){
    $("#loading").fadeOut(400,function(){
    });
})


$(':root').css("--main-color",localStorage.getItem("mainColor"));

if(localStorage.getItem("logo")){
  $('.logo-img').attr("src",localStorage.getItem("logo"))
}
else{
    localStorage.setItem("logo","images/logo-sky.jpeg")
}



 $(".change-orange").click(function(){
    $(':root').css("--main-color","#E68924");
    $('.logo-img').attr("src","images/logo-orange.jpeg")
    localStorage.setItem("mainColor","#E68924");
    localStorage.setItem("logo","images/logo-orange.jpeg")
  });

  
 $(".change-sky").click(function(){
    $(':root').css("--main-color","#90caf9");
    $('.logo-img').attr("src","images/logo-sky.jpeg")
    localStorage.setItem("mainColor","#90caf9");
    localStorage.setItem("logo","images/logo-sky.jpeg")
  });


  
 $(".change-green").click(function(){
    $(':root').css("--main-color","#2b9f78");
    $('.logo-img').attr("src","images/logo-green.jpeg");
    localStorage.setItem("mainColor","#2b9f78");
    localStorage.setItem("logo","images/logo-green.jpeg")
  });

$(".chat-bot").hide();


$(".gear").click(function(){
    $(".chat-bot").fadeToggle(500);
});

$(".sign").hide();

$(".sign-up-btn").click(function(){
    $(".login").toggle(500);
    $(".sign").toggle(500);
});

$('.logo-img').attr("src",localStorage.getItem("logo"));
