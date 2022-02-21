// JavaScript Document

// トップへ戻るボタン
$(function() {
    var topBtn = $('#page-top');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn("slow");
        } else {
            topBtn.fadeOut("slow");
        }
    });
    // スマホのときだけ、トップへ戻るボタン無効化
    if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
        $(function() {
	          $("#page-top").hide();
        });
    }
    // スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
