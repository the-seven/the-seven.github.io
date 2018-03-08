$(document).ready(function () {

    var t1 = atob('KzcgKDkxOCkgNDc3LTA2LTgw');
    var t2 = atob('KzcgKDk3OCkgMDk2LTQzLTc5');
    var t3 = atob('KzcgKDk3OCkgNzEwLTQ0LTM5');
    var m1 = atob('dGhlLXNldmVuQGxpc3QucnU=');

    $('.t1').text(t1);
    $('.t2').text(t2);
    $('.t3').text(t3);

    $('.m1').attr({'href': 'mailto:' + m1, 'title': m1}).text(m1);

    $('.input-submit').click(function () {
        $('.submit-form .form').slideUp(400, function () {
            $('.submit-done').slideDown(400);
        });
        //return false;
    });

    var wWidth = 0;
    var wHeight = 0;
    var pWidth = 0;
    var pHeight = 0;

    function calcVideoSize()
    {
        var wWidth = $(window).width();
        var wHeight = $(window).height();

        if (wWidth > 1440)
        {
            pWidth = Math.round(wWidth / 2);
            pHeight = Math.round(wHeight / 2);
        } else {
            pWidth = Math.round(wWidth * 0.8);
            pHeight = Math.round(wHeight * 0.8);
        }

        $(".video-link").jqueryVideoLightning({
            id: "f-https://www.youtube.com/embed/videoseries?list=PLWUub7ww7pA4HT6t4o6ZRvTT-_2UzvHm5&&enablejsapi=1&autoplay=1&autohide=2&cc_load_policy=0&color=#fff&controls=2&disablekb=0&fs=1&hl=en&iv_load_policy=1&loop=0&modestbranding=0&origin=http%3A%2F%2Fsnippets&playerapiid=b5efc1bfvjhqnbk0&playsinline=0&rel=0&showinfo=1&start=0",
            autoplay: 1,
            backdrop_color: "#000000",
            backdrop_opacity: 0.8,
            color: "#fff",
            width: pWidth,
            height: pHeight
        });
    }

    calcVideoSize();

    $(window).on('resize', function () {
        calcVideoSize();
        console.log(pWidth);
    });

//    $(".video-link").jqueryVideoLightning({
//        id: "f-https://www.youtube.com/embed/videoseries?list=PLWUub7ww7pA4HT6t4o6ZRvTT-_2UzvHm5&&enablejsapi=1&autoplay=1&autohide=2&cc_load_policy=0&color=#fff&controls=2&disablekb=0&fs=1&hl=en&iv_load_policy=1&loop=0&modestbranding=0&origin=http%3A%2F%2Fsnippets&playerapiid=b5efc1bfvjhqnbk0&playsinline=0&rel=0&showinfo=1&start=0",
//        autoplay: 1,
//        backdrop_color: "#000000",
//        backdrop_opacity: 0.8,
//        color: "#fff",
//        width: pWidth,
//        height: pHeight
//    });
});