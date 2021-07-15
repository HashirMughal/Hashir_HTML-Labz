$(function(){
    // $(".blue-box").animate({
    //     marginLeft : "500px"
    // });
    // $(".blue-box").animate({
    //     marginLeft : "500px"
    // },2000,"linear");
    $(".blue-box").animate({
        marginLeft : "+=500",
        opacity : 0,
        height:"50px",
        width:"50px",
        marginTop:"25px"        
    },2000,"linear");
    // $(".blue-box").animate({
    //     marginLeft : "0px"
    // },2000,"linear");
    // $(".blue-box").animate({
    //     marginLeft : "-=500"
    // },2000,"linear");
    $("p").animate({
        "font-size":"20px",
        "font-style":"bold"    
    });
});