$(function(){
    var i=0
    var img=$('#plantImg')
    var imgList=
    [   'img/home_banner/banner01.jpg',
        'img/home_banner/banner02.jpg',
        'img/home_banner/banner03.jpg',
        'img/home_banner/banner04.jpg',
        'img/home_banner/banner05.jpg',
        'img/home_banner/banner06.jpg',
        'img/home_banner/banner07.jpg',
        'img/home_banner/banner08.jpg',
        'img/home_banner/banner09.jpg',
    ]
    var timer=setInterval(imgStart,2000)
    function imgStart(){
        img.prop('src',imgList[i])
        i++
        if(i==imgList.length){
            i=0
        }
    }

    var j=0
    var srcList=[
        'html/dayanta.html',
        'html/zhonglou.html',
        'html/datangfurongyuan.html',
        'html/bingmayong.html',
        'html/datangfurongyuan.html',
        'html/huashan.html',
        'html/bingmayong.html',
        'html/zhonglou.html',
        'html/huashan.html',
    ]
    var src=$('#src')
    var srcTimer=setInterval(srcStart,2000)
    function srcStart(){
        src.prop('href',srcList[j])
        j++
        if(j==srcList.length){
            j=0
        }
    }
    
    img.mouseover(function(){
        clearTimeout(srcTimer)
        clearTimeout(timer)
    })
    img.mouseout(function(){
        srcTimer=setInterval(srcStart,2000)
        timer=setInterval(imgStart,2000)
    })
})