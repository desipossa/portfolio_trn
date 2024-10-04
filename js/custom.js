$(function () {

    $('#portfolio').fullpage({
        anchors: ['intro', 'pf01', 'pf02', 'pf03', 'profile'],
        onLeave: function (idx, nidx, dir) {
            console.log(idx, nidx, dir);
            $('#header .gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            $('.section').eq(nidx - 1).addClass('on').siblings().removeClass('on');
        }
    });

    // $('#header .gnb li a').on('click', function () {
    //     $(this).parent().addClass('on').siblings().removeClass('on')
    // })

})