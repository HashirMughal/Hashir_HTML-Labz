// First Way simple
// $(function(){
//     $(".red-box").fadeTo(2000,0.5);
//     $(".green-box").fadeTo(3000,0.5);
//     $(".blue-box").fadeTo(4000,0.5);
// });

///// Now the New way
$(function(){
    $(".red-box").animate({
        marginLeft:"+=100px",
        opacity:0.5,
    },4000,"linear");
    $(".green-box").animate({
        marginLeft:"+=150px",
        opacity:0.5,
    },3000,"linear");
    $(".blue-box").animate({
        marginLeft:"+=200px",
        opacity:0.5,
    },2000,"linear");
});
