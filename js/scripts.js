$(document).ready(function(){
    $(".clickable").click(function(){
        $("#para-1").toggle();
        // $("#para-1").click(function(){
            $("#image-1").toggle();
        // });
    
    });
    
});

$(document).ready(function(){
    $(".clickable1").click(function(){
        $("#para-2").toggle();
        $("#image-2").toggle();
    });
});

$(document).ready(function(){
    $(".clickable2").click(function(){
        $("#para-3").toggle();
        $("#image-3").toggle();
    });
});


// if (name= "" && email==""){
//     alert('Your name & email is required');
//     return 0;
// }
// else if(name== "")
//     alert('Enter your name to proceed');
// }
// else if(email== ""){
//     alert('Please enter valid email');
// }
// if((name== ""&& email!= "" && Text== "") || (name!))


// sample jQuery
$(document).ready(function(){
    $(".Amwata").hover(function(){
        $(".Mercy").show();
        $(".Amwata img").css({
            opacity:0.4
        });
    });
    $(".Amwata").mouseleave(function(){
        $(".Amwata img").css({
            opacity:1
        });
        $(".Mercy").hide();
    });

    // SAMPLE WHAT WE DO

    $(".A").click(function(){
        $(".A1").toggle();
        $(".A img").toggle();
    });
});

