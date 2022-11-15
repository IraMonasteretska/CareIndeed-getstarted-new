$(document).ready(function(){
    $('.mod1').click(function(){
        $('.modal1').addClass('show');
    });
    $('.mod2').click(function(){
        $('.modal2').addClass('show');
    });
    $('.mod3').click(function(){
        $('.modal3').addClass('show');
    });

    $('.gsmodal__close').click(function(){
        $(this).parents('.gsmodalwrapper').removeClass('show');
    });
    $('.gsmodal__back').click(function(){
        $(this).parents('.gsmodalwrapper').removeClass('show');
    })


    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.gsmodal').length && !$target.closest('.followingbox').length) {
            $('.gsmodalwrapper').removeClass('show');
        }
    });
    

});