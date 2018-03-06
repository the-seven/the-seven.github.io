$(document).ready(function () {
    $('.input-submit').click(function(){
        $('.submit-form .form').slideUp(400,function(){
            $('.submit-done').slideDown(400);
        });
        //return false;
    });
});