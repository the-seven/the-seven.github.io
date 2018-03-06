$(document).ready(function () {
    
    var t1 = atob('KzcgKDkxOCkgNDc3LTA2LTgw');
    var t2 = atob('KzcgKDk3OCkgMDk3LTQzLTc5');
    var t3 = atob('KzcgKDk3OCkgNzEwLTQ0LTM5');
    var m1 = atob('dGhlLXNldmVuQGxpc3QucnU=');

    $('.t1').text(t1);
    $('.t2').text(t2);
    $('.t3').text(t3);

    $('.m1').attr({'href': 'mailto:' + m1, 'title': m1}).text(m1);

    $('.input-submit').click(function(){
        $('.submit-form .form').slideUp(400,function(){
            $('.submit-done').slideDown(400);
        });
        //return false;
    });
});