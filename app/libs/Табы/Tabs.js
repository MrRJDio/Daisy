$(".tab_block").not(":first").hide(); // спрятать все tab_item кроме первого
$(".tab_wrapper .menu_item").click(function(){
    $(".tab_wrapper .menu_item").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_block").hide().eq($(this).index()).fadeIn(800)
}).eq(0).addClass("active");