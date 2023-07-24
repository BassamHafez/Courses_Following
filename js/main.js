$('.bg-main-color').css("backgroundColor",localStorage.getItem("bgColor"));
$('.text-main-color').css("color",localStorage.getItem("color"));
$('.main-title').css("color",localStorage.getItem("color"));


$(".orange").click(function(){
    $('.bg-main-color').css("backgroundColor","#E68924");
    $('.text-main-color').css("color","#E68924");
    $('.main-title').css("color","#E68924");
    $('.logo-img').attr("src","images/logo-orange.jpeg")
    localStorage.setItem("bgColor","#E68924");
    localStorage.setItem("color","#E68924");
    localStorage.setItem("logo","images/logo-orange.jpeg")
});

$(".sky").click(function(){
    $('.bg-main-color').css("backgroundColor","#90caf9");
    $('.text-main-color').css("color","#90caf9");
    $('.main-title').css("color","#90caf9");
    $('.logo-img').attr("src","images/logo-sky.jpeg")
    localStorage.setItem("bgColor","#90caf9");
    localStorage.setItem("logo","images/logo-sky.jpeg")
    localStorage.setItem("color","#90caf9");
});

$(".green").click(function(){
    $('.bg-main-color').css("backgroundColor","#2b9f78");
    $('.text-main-color').css("color","#2b9f78");
    $('.main-title').css("color","#2b9f78");
    $('.logo-img').attr("src","images/logo-green.jpeg");
    localStorage.setItem("bgColor","#2b9f78");
    localStorage.setItem("color","#2b9f78");
    localStorage.setItem("logo","images/logo-green.jpeg")
});

$(".color-one").click(function(){
    $('.bg-main-color').css("backgroundColor","#E68924");
    $('.text-main-color').css("color","#E68924");
    $('.main-title').css("color","#E68924");
    $('.logo-img').attr("src","images/logo-orange.jpeg")
    localStorage.setItem("bgColor","#E68924");
    localStorage.setItem("color","#E68924");
    localStorage.setItem("logo","images/logo-orange.jpeg")
});
$(".color-two").click(function(){
    $('.bg-main-color').css("backgroundColor","#90caf9");
    $('.text-main-color').css("color","#90caf9");
    $('.main-title').css("color","#90caf9");
    $('.logo-img').attr("src","images/logo-sky.jpeg")
    localStorage.setItem("bgColor","#90caf9");
    localStorage.setItem("color","#90caf9");
    localStorage.setItem("logo","images/logo-sky.jpeg")
});
$(".color-three").click(function(){
    $('.bg-main-color').css("backgroundColor","#2b9f78");
    $('.text-main-color').css("color","#2b9f78");
    $('.main-title').css("color","#2b9f78");
    $('.logo-img').attr("src","images/logo-green.jpeg");
    localStorage.setItem("bgColor","#2b9f78");
    localStorage.setItem("color","#2b9f78");
    localStorage.setItem("logo","images/logo-green.jpeg")
});

$(".chat-bot").hide();


$(".gear").click(function(){
    $(".chat-bot").fadeToggle(500);
});

$(".sign").hide();

$(".sign-up-btn").click(function(){
    $(".login").slideToggle(500);
    $(".sign").slideToggle(500);
});

$('.logo-img').attr("src",localStorage.getItem("logo"));
