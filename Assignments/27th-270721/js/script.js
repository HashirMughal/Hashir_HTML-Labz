$(function(){
    // let redBox=$(".red-box");
    // redBox.css("user-select",function(){
    //     return "none";
    // });

    // $("a").addClass("fancy-link");
    // $("p:first").addClass("large emphasize");

    // $("any").addClass(function(index){
    //     $(this).addClass("items-" +index);
    // });

    // $("div").addClass(function(index,currentClasses){
    //     console.log(currentClasses);
    //     if(currentClasses,index of("Dummy")!==-1){
    //         return "blue-box";
    //     }
    // });

    let blueBox=$(".blue-box");
    blueBox.hover(function(){
        $(this).stop().animate({opacity:0.7},"500");
    },
    function(){
        $(this).stop().animate({opacity:1},"500");
    });
    // var blueBox = $(".blue-box");
    // blueBox.mouseenter(function(){
    //    $(this).stop().fadeTo(500, 0.7);
    // });
    // blueBox.mouseleave(function(){
    //    $(this).stop().fadeTo(500, 1);
    // });
});

