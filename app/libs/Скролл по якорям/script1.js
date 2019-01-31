$('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
});


В скрипте можно указать скорость прокрутки до якоря var t = 1000;, 
меняем 1000 на нужное нам значение, 1000 равно 1 секунде.

Скрипт плавной прокрутки также будет работать не только при нажатие на 
ссылку, можно добавить любому блоку атрибут data-href="#idBlock" и 
тогда при клике на данный блок произойдет плавная прокрутка до якоря, 
как и по ссылке. 







$('a[href^="#"]').bind("click", function(e){ 
    var anchor = $(this); 
    $('html, body').stop().animate({ 
        scrollTop: $(anchor.attr("href")).offset().top -100  // -- смещение
    }, 1000); 
    e.preventDefault(); 
}); return false;﻿




