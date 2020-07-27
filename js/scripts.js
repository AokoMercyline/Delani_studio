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

// sample of submit
function Mercyy(){
    let username=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    alert(username + " THANK YOU FOR CONTACTING US.WE HAVE GLADLY RECIEVED YOUR MESSAGE ");
}



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

    $(".design").click(function(){
        $(".para-1").toggle();
        $(". img").toggle();
    });
});

