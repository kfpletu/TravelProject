$(function(){
    $(".choice .other input").click(function () {
        console.log('..')
        $(this).parents($('.choice')).children($('.input1')).attr('checked', false)
    })
    
    $("#zhifubao").click(function(){
        $("#main form").css("margin-right","611px")
        $(".imger").attr("src","../img/footer/zhifubao.jpg").css("display","block")

    })
    $("#weixin").click(function(){
        $("#main form").css("margin-right","611px")
        $(".imger").attr("src","../img/footer/weixin.jpg").css("display","block")

    })
    $("#yinlian").click(function(){
        $("#main form").css("margin-right","611px")
        $(".imger").attr("src","../img/footer/yinlian.jpg").css("display","block")

    })



})