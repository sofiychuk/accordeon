window.onload = function () {

    $('.accordeon .acc-head').on('click', f_acc);

    function f_acc() {
        $('.accordeon .acc-body').not($(this).next()).slideUp(250);

        $(this).next().slideToggle(250);
    }
}