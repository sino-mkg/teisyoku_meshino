$('.site-header-navbtn').on('click', () => {
    $('body').toggleClass('is-nav-open');
});

$('.site-header-nav').on('click', 'a', () => {
    $('body').removeClass('is-nav-open');
});


$(window).on('load', function () {
    $("#splash").delay(3000).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(3000).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});