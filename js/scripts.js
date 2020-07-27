$(document).ready(function(){
    $(".image1").click(function(){
        $(".image1").slideDown(1500).hide(1000);
            $("#para1").show(1500);
    });
    $("#para1").click(function(){
        $("#para1").slideUp(1500).hide(1000);
            $(".image1").slideDown(1500);
    });
    });
    

$(document).ready(function(){
    $(".image2").click(function(){
        $(".image2").slideDown(1500).hide(1000);
        $("#para2").show(1500);
    });
    $("#para2").click(function(){
        $("#para2").slideUp(1500).hide(1000);
        $(".image2").show(1500);
    });
});

$(document).ready(function(){
    $(".image3").click(function(){
        $(".image3").slideDown(1500).hide(1000);
        $("#para3").show(1500);
    });
    $("#para3").click(function(){
        $("#para3").slideUp(1500).hide(1000);
        $(".image3").show(1500);
    });
    
});

$(document).ready(function(){
    $(".studio").hover(function(){
        $(".overlay").show();
        $(".studio img").css({
            opacity:0.6
        });
    });
    $(".studio").mouseleave(function(){
        $(".studio img").css({
            opacity:0.6
        });
        $(".overlay").hide();
    });
    $(".ontario").hover(function(){
        $(".overlay").show();
        $(".ontario img").css({
            opacity:0.6
        });
    });
    $(".ontario").mouseleave(function(){
        $(".ontario img").css({
            opacity:0.6
        });
        $(".overlay").hide();
    });
    $(".pyramid").hover(function(){
        $(".overlay").show();
        $(".pyramid img").css({
            opacity:0.6
        });
    });
    $(".pyramid").mouseleave(function(){
        $(".pyramid img").css({
            opacity:0.6
        });
        $(".overlay").hide();
    });
    $(".studio3").hover(function(){
        $(".overlay").show();
        $(".studio3 img").css({
            opacity:0.6
        });
    });
    $(".studio3").mouseleave(function(){
        $(".studio3 img").css({
            opacity:0.6
        });
        $(".overlay").hide();
    });
    $(".studio4").hover(function(){
        $(".overlay").show();
        $(".studio4 img").css({
            opacity:0.6
        });
    });
    $(".studio4").mouseleave(function(){
        $(".studi04 img").css({
            opacity:0.6
        });
        $(".overlay").hide();
    });
    $(".studio5").hover(function(){
        $(".text5").show();
        $(".studio5 img").css({
            opacity:0.6
        });
    });
    $(".studio5").mouseleave(function(){
        $(".studi5o img").css({
            opacity:0.6
        });
        $(".overlay").hide();
    });
    $(".studio6").hover(function(){
        $(".overlay").show();
        $(".studio6 img").css({
            opacity:0.6
        });
    });
    $(".studio6").mouseleave(function(){
        $(".studio6 img").css({
            opacity:0.6
        });
        $(".overlay").hide();
    });
    $(".studio7").hover(function(){
        $(".overlay").show();
        $(".studio7 img").css({
            opacity:0.6
        });
    });
    $(".studio7").mouseleave(function(){
        $(".studio7 img").css({
            opacity:0.6
        });
        $(".overlay").hide();
    });
    $(".studio8").hover(function(){
        $(".overlay").show();
        $(".studio8 img").css({
            opacity:0.6
        });
    });
    $(".studio8").mouseleave(function(){
        $(".studio8 img").css({
            opacity:0.6
        });
        $(".overlay").hide();
    });

});

// function Mercyy(){
//     let username=document.getElementById("name").value;
//     let email=document.getElementById("email").value;
//     alert(username + " THANK YOU FOR CONTACTING US.WE HAVE GLADLY RECIEVED YOUR MESSAGE ");
// };

$(document).ready(function(){
    $('form#validity').submit(function(){
        var name = $('input#name').val();
        var email = $('input#email').val();
        var message = $('input#textarea').val();
        if (name && email){
            alert (name + ', we have recived your message. Thank you for contacting us ');
        }else {
            alert('Please enter your name and email');
        }
    });
});





