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
    $(".image").hover(function(){
        $(".text").show();
        $(".image img").css({
            opacity:0.4
        });
    });
    $(".image").mouseleave(function(){
        $(".image img").css({
            opacity:1
        });
        $(".text").hide();
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

