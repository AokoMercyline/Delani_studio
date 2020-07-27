$(document).ready(function(){
    $(".image1").click(function(){
        $(".image1").slideDown("1500").hide(1000);
            $("#para1").show("1500");
    });
    $("#para1").click(function(){
        $("#para1").slideUp("1500").hide(1000);
            $(".image1").slideDown("1500");
    });
    });
    

$(document).ready(function(){
    $(".image2").click(function(){
        $(".image2").slideDown("1500").hide(1000);
        $("#para2").show("1500");
    });
    $("#para2").click(function(){
        $("#para2").slideUp("1500").hide(1000);
        $(".image2").show("1500");
    });
});

$(document).ready(function(){
    $(".image3").click(function(){
        $(".image3").slideDown("1500").hide(1000);
        $("#para3").show("1500");
    });
    $("#para3").click(function(){
        $("#para3").slideUp("1500").hide(1000);
        $(".image3").show("1500");
    });
    
});

$(document).ready(function(){
    $(".studio").hover(function(){
        $(".text1").show();
        $(".studio img").css({
            opacity:0.6
        });
    });
    $(".studio").mouseleave(function(){
        $(".studio img").css({
            opacity:0.4
        });
        $(".text1").hide();
    });
    $(".ontario").hover(function(){
        $(".text2").show();
        $(".ontario img").css({
            opacity:0.4
        });
    });
    $(".ontario").mouseleave(function(){
        $(".ontario img").css({
            opacity:1
        });
        $(".text2").hide();
    });
    $(".pyramid").hover(function(){
        $(".text3").show();
        $(".pyramid img").css({
            opacity:0.4
        });
    });
    $(".pyramid").mouseleave(function(){
        $(".pyramid img").css({
            opacity:1
        });
        $(".text3").hide();
    });
    $(".studio3").hover(function(){
        $(".text3").show();
        $(".studio3 img").css({
            opacity:0.4
        });
    });
    $(".studio3").mouseleave(function(){
        $(".studio3 img").css({
            opacity:1
        });
        $(".text3").hide();
    });
    $(".studio4").hover(function(){
        $(".text4").show();
        $(".studio4 img").css({
            opacity:0.4
        });
    });
    $(".studio4").mouseleave(function(){
        $(".studi04 img").css({
            opacity:1
        });
        $(".text4").hide();
    });
    $(".studio5").hover(function(){
        $(".text5").show();
        $(".studio5 img").css({
            opacity:0.4
        });
    });
    $(".studio5").mouseleave(function(){
        $(".studi5o img").css({
            opacity:1
        });
        $(".text5").hide();
    });
    $(".studio6").hover(function(){
        $(".text6").show();
        $(".studio6 img").css({
            opacity:0.4
        });
    });
    $(".studio6").mouseleave(function(){
        $(".studio6 img").css({
            opacity:1
        });
        $(".text6").hide();
    });
    $(".studio7").hover(function(){
        $(".text7").show();
        $(".studio7 img").css({
            opacity:0.4
        });
    });
    $(".studio7").mouseleave(function(){
        $(".studio7 img").css({
            opacity:1
        });
        $(".text7").hide();
    });
    $(".studio8").hover(function(){
        $(".text8").show();
        $(".studio8 img").css({
            opacity:0.4
        });
    });
    $(".studio8").mouseleave(function(){
        $(".studio8 img").css({
            opacity:1
        });
        $(".text8").hide();
    });

});

// // sample of submit
// function Mercyy(){
//     let username=document.getElementById("name").value;
//     let email=document.getElementById("email").value;
//     alert(username + " THANK YOU FOR CONTACTING US.WE HAVE GLADLY RECIEVED YOUR MESSAGE ");
// }



// // sample jQuery
// $(document).ready(function(){
//     $(".Ann").hover(function(){
//         $(".Mercy").show();
//         $(".Ann img").css({
//             opacity:0.4
//         });
//     });
//     $(".Ann").mouseleave(function(){
//         $(".Ann img").css({
//             opacity:1
//         });
//         $(".Mercy").hide();
//     });

//     // SAMPLE WHAT WE DO

// //     $(".design").click(function(){
// //         $(".para-1").toggle();
// //         $(". img").toggle();
// //     });
// // });

