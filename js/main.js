$('.bg-main-color').css("backgroundColor",localStorage.getItem("bgColor"));
$('.text-main-color').css("color",localStorage.getItem("color"));

$(".orange").click(function(){
    $('.bg-main-color').css("backgroundColor","#E68924");
    $('.text-main-color').css("color","#E68924");
    localStorage.setItem("bgColor","#E68924")
    localStorage.setItem("color","#E68924")
});

$(".sky").click(function(){
    $('.bg-main-color').css("backgroundColor","#90caf9");
    $('.text-main-color').css("color","#90caf9");
    localStorage.setItem("bgColor","#90caf9")
    localStorage.setItem("color","#90caf9")
});

$(".green").click(function(){
    $('.bg-main-color').css("backgroundColor","#2b9f78");
    $('.text-main-color').css("color","#2b9f78");
    localStorage.setItem("bgColor","#2b9f78")
    localStorage.setItem("color","#2b9f78")
});

$(".color-one").click(function(){
    $('.bg-main-color').css("backgroundColor","#E68924");
    $('.text-main-color').css("color","#E68924");
    localStorage.setItem("bgColor","#E68924")
    localStorage.setItem("color","#E68924")
});
$(".color-two").click(function(){
    $('.bg-main-color').css("backgroundColor","#90caf9");
    $('.text-main-color').css("color","#90caf9");
    localStorage.setItem("bgColor","#90caf9")
    localStorage.setItem("color","#90caf9")
});
$(".color-three").click(function(){
    $('.bg-main-color').css("backgroundColor","#2b9f78");
    $('.text-main-color').css("color","#2b9f78");
    localStorage.setItem("bgColor","#2b9f78")
    localStorage.setItem("color","#2b9f78")
});

$(".chat-bot").hide();


$(".gear").click(function(){
    $(".chat-bot").fadeToggle(1000);
});

$(".sign").hide();

$(".sign-up-btn").click(function(){
    $(".login").slideToggle(1000);
    $(".sign").slideToggle(1000);
});

